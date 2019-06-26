import * as loader from 'assemblyscript/lib/loader';
import * as fs from 'fs';

interface MyApi {
  Uint16ArrayID   : number;
  Uint32ArrayID   : number;
  Float32ArrayID  : number;
  StringID        : number;


  add(a: number, b: number) : number;
  sum(arr: Float32Array, length: number) : number;
  /**
   * due to the way we reserve / receive strings in Wasm
   * (by passing / receiving a retainer pointer) we must 
   * declare string inputs as well as outputs as numbers
   */  
  sayHiToRobot(name: string) : number;
  sayHiTo(name: number) : number;
}

// Input / output pointers & results
let pInput, pOutput, result;


const file = fs.readFileSync("./build/optimized.wasm")
const lib : loader.ASUtil & MyApi = loader.instantiateBuffer(file, {});
console.log(lib);


console.log('\n===== Number -> Number =====\n');
console.log(`'3 + 5' in Wasm gives: ${lib.add(3, 5)}`);


console.log('\n===== String -> Number =====\n');
pInput = lib.__retain(lib.__allocString("r2d2"));
console.log(`Robot should be '1': ${lib.sayHiToRobot(pInput)}`);
lib.__release(pInput);


console.log('\n===== String -> String =====\n');
pInput = lib.__retain(lib.__allocString("Bernie"));
pOutput = lib.sayHiTo(pInput);
result = lib.__getString(pOutput);
console.log(`Bernd gets a hearty: "${result}"`);
lib.__release(pInput);
lib.__release(pOutput);


console.log('\n===== Float32Array -> Number =====\n');
let arr = [1, 2, 3, 4, 5, 6];
pInput = lib.__retain(lib.__allocArray(lib.Float32ArrayID, arr));
console.log(lib.sum(pInput, arr.length));
lib.__release(pInput);


