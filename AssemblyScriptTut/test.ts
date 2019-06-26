/**
 * THE WHOLE PROBLEM WITH THIS FILE SEEMS TO BE A
 * DIFFERENCE BETWEEN THE wasm AND lib FUCKING OBJECTS
 */

// const fs = require("fs");
// const loader = require("assemblyscript/lib/loader")

import * as fs from 'fs';
// import * as path from 'path';
import * as loader from 'assemblyscript/lib/loader';
import { ASUtil, instantiateStreaming } from 'assemblyscript/lib/loader';

const imports = {
  env: {
    abort(_msg, _file, line, column) {
       console.error("abort called at index.ts:" + line + ":" + column);
    }
  }
};

const wasmBuffer = fs.readFileSync(__dirname + "/build/optimized.wasm");
const wasmModule = new WebAssembly.Module(wasmBuffer);
const instance = new WebAssembly.Instance(wasmModule, imports);
const wasm = instance.exports;


// console.log('\n========== WebAssembly.Instance ==========\n')

// console.log(wasm);
// console.log(wasm.Uint16ArrayID);
// let uint16arr = wasm.__alloc(1e6, wasm.Uint16ArrayID);
// console.log(uint16arr);

// console.log('\nNumber -> Number:');
// console.log(`Adding 2 + 3 in Wasm gives: ${wasm.add(2, 3)}`);


// console.log('\nArray -> Number:');
// const farr = new Float32Array([1, 2, 3, 4, 5, 6]);
// const farr_ref = wasm.__retain(wasm.__alloc(farr, wasm.Float32ArrayID));
// const sum = wasm.sum(farr_ref);
// console.log(`Summing 1-6 (=21) gives: ${sum}`);




/**
 * USING LOADER
 */

async function loadWasm() {
  return await loader.instantiate(wasmModule, imports);
}

loadWasm().then( lib => {
  console.log('\n========== WebAssembly LOADER ==========\n')
  console.log(lib);

  // let uint16arr1 = lib.__alloc(1e6, wasm.Uint16ArrayID);
  // let uint16arr2 = lib.__alloc(1e6, wasm.Uint16ArrayID);
  // console.log(uint16arr1, uint16arr2);


  /**
   * Number -> Number
   */
  console.log('\nNumber -> Number:');
  console.log(`Adding 2 + 3 in Wasm gives: ${wasm.add(2, 3)}`);


  /**
   * Array -> Number
   */
  console.log('\nArray -> Number:');  
  // let myWasmArrayPtr = lib.__allocArray( lib.Float32ArrayID, [1, 2, 3] );
  // let ref = lib.__retain(lib.__allocArray(wasm.Float32ArrayID, [1, 2, 3]));
  // const farr_ref = wasm.__retain(wasm.__alloc(farr.buffer, wasm.Float32ArrayID));

  console.log('Float32ArrayID in Wasm: ', wasm.Float32ArrayID);

  let arr = [1, 2, 3, 4, 5, 6];  
  // let myArrayPtr = lib.__allocArray(wasm.Float32ArrayID, arr)
  let byteMemory = new Float32Array(wasm.memory.buffer);
  console.log(byteMemory.length);


  const sum = wasm.sum(arr, arr.length);
  console.log(`Summing 1-6 (=21) gives: ${sum}`);


  console.log('\nString -> String:\n')
  const pInput = lib.__retain(lib.__allocString("Bernd"));
  console.log(pInput);

  // const pOutput = lib.exp .sayHiTo(pInput);
  // const result = wasm.__

  
}).catch(e => console.log(e));
