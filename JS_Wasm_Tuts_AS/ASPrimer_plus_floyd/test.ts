import * as loader from 'assemblyscript/lib/loader';
import * as fs from 'fs';
import * as path from 'path';
import * as assert from 'assert';
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';

const WASM_FILE = path.join(__dirname, './build/testus.dom');


var importObject = {
  env: {
    'memoryBase': 0,
    'tableBase': 0,
    'memory': new WebAssembly.Memory({
      initial: 256
    }),
    'table': new WebAssembly.Table({
      initial: 256, 
      element: 'anyfunc'
    }),
    abort: () => {}
  },
  // imports: {
  //   imported_func: function(arg) {
  //     console.log(arg);
  //   }
  // }
};

/**
 * WE have to explicitly declare our exported WASM function
 * in Typescript as well, so we can merge the interface
 * with the one provided by loader/ASUtil
 */
interface MyApi {
  Uint16ArrayID   : number;
  Uint32ArrayID   : number;but
  Float32ArrayID  : number;
  StringID        : number;

  add(a: number, b: number) : number;
  sum(arr: Float32Array) : number;
  /**
   * due to the way we reserve / receive strings in Wasm
   * (by passing / receiving a retainer pointer) we must 
   * declare string inputs as well as outputs as numbers
   */  
  sayHiToRobot(name: string) : number;
  sayHiTo(name: number) : number;
  /**
   * same with array types as return values...?
   */
  doubleArr(arr: Float32Array) : Float32Array;
  FloydWarshall(graph: Array<Float32Array>) : Array<Float32Array>;
}

// Input / output pointers & results
let pInput, pOutput, result;


const file = fs.readFileSync(WASM_FILE);
const lib : loader.ASUtil & MyApi = loader.instantiateBuffer(file, importObject);
console.log(lib);


console.log('\n===== Number => Number =====\n');
console.log(`'3 + 5' in Wasm gives: ${lib.add(3, 5)}`);


console.log('\n===== String => Number =====\n');
pInput = lib.__retain(lib.__allocString("r2d2"));
console.log(`Robot should be '1': ${lib.sayHiToRobot(pInput)}`);
lib.__release(pInput);


console.log('\n===== String => String =====\n');
pInput = lib.__retain(lib.__allocString("Bernie"));
pOutput = lib.sayHiTo(pInput);
result = lib.__getString(pOutput);
console.log(`Bernd gets a hearty: "${result}"`);
lib.__release(pInput);
lib.__release(pOutput);


console.log('\n===== Array => Number =====\n');
let arr = [1, 2, 3, 4, 5, 6];
pInput = lib.__retain(lib.__allocArray(lib.Float32ArrayID, arr));
console.log(`The sum of 1-6 gives: ${lib.sum(pInput)}`);
lib.__release(pInput);


console.log('\n===== Array => Array =====\n');
arr = [1, 2, 3, 4, 5, 6];
pInput = lib.__retain(lib.__allocArray(lib.Float32ArrayID, arr));
pOutput = lib.doubleArr(pInput);
result = lib.__getArray(pOutput);
console.log(`double of ${arr} is: ${result}`);
lib.__release(pInput);
lib.__release(pOutput);


/**
 * calling JS & WASM 100k times...
 */
function doubleArrWasm(arr: number[]) : number[] {
  pInput = lib.__retain(lib.__allocArray(lib.Float32ArrayID, arr));
  pOutput = lib.doubleArr(pInput);
  result = lib.__getArray(pOutput);
  lib.__release(pInput);
  lib.__release(pOutput);
  return result;
}

function doubleArrJS(arr: number[]) : number[] {
  return result = arr.map(n => n*2);
}

[{exe: doubleArrJS, name: 'JS'}, {exe: doubleArrWasm, name: 'WASM'}].forEach(algo => {
  let tic = +new Date;
  for ( let i = 0; i < 1e5; i++ ) {
    algo.exe([1,2,3,4,5,6]);
  }
  let toc = +new Date;
  console.log(`100k times array mapping in ${algo.name} took ${toc-tic} ms.`);
});


/**
 * calling JS & Wasm each ONCE, but with a O(n^3) algo on N=1000
 * 
 * @description modelling the graph as 1D array...
 */
const graph = [];
const N = 3e2;
for ( let i = 0; i < N*N; i++ ) {
  if ( Math.random() > 0.3 ) {
    graph.push(Math.random()*9 + 1);
    // graph.push(9999);
  }
  else {
    graph.push(9999);
  }
}

/**
 * Creating, passing & retrieving an array of 1e6 alone
 * takes about 130-150 millis...
 * 
 * WHICH MEANS THAT THIS IS !!! USELESS !!! FOR AN O(n^2) algorithm
 * like Pagerank...
 */
function FloydWarshallWasm(graph: number[]) : number[] {
  pInput = lib.__retain(lib.__allocArray(lib.Float32ArrayID, graph));
  pOutput = lib.FloydWarshall(pInput);
  result = lib.__getArray(pOutput);
  lib.__release(pInput);
  lib.__release(pOutput);
  return result;
}

function get(graph: Float32Array, i: number, j: number) : number {
  // let N = Math.sqrt(graph.length);
  return graph[i*N + j];
}

function set(graph: Float32Array, i: number, j: number, val: number) : void {
  // let N = Math.sqrt(graph.length);
  graph[i*N + j] = val;
}

function FloydWarshallJS(graph: number[]) : Float32Array {
  let g = new Float32Array(graph);
  let N = Math.sqrt(graph.length);
  for ( let k = 0; k < N; k++ ) {
    for ( let i = 0; i < N; i++ ) {
      for ( let j = 0; j < N; j++ ) {
        let new_dist = get(g,i,k) + get(g,k,j);
        if ( new_dist < get(g,i,j) ) {
          set(g, i, j, new_dist);
        }
      }
    }
  }
  return g;
}

let results = {
  JS: null,
  WASM: null
};

[{exe: FloydWarshallJS, name: 'JS'}, {exe: FloydWarshallWasm, name: 'WASM'}].forEach(fw => {
  let tic = +new Date;

  result = fw.exe(graph);
  results[fw.name] = result;
  // console.log(graph);
  // console.log(result);

  let toc = +new Date;
  console.log(`Floyd Warshall on graph of size: ${graph.length} took ${toc-tic} ms in ${fw.name}.`);
});


/**
 * since both are TypedArrays in JS, we can go for epsilon=0
 */
for ( let i = 0; i < N; i++ ) {
  assert(results.JS[i] == results.WASM[i]);

  /**
   * could be, could not be... if too many are 'infinite', they might not resolve...
   */
  // assert(results.JS[i] != graph[i]);
}