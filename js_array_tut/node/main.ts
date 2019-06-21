/**
 * !!! NOT WORKING !!!
 */

import * as fs from 'fs';
import * as path from 'path';
import * as util from 'util';

const source = fs.readFileSync(path.join(__dirname, '../web/gen/hello.wasm'));
const typedArray = new Uint8Array(source);

const env = {
  // __memory_base: 0,
  memoryBase: 0,
  __table_base: 0,
  DYNAMICTOP_PTR: 3296,
  STATIC_BASE: 1024,
  STACK_BASE: 3328,
  STACKTOP: this.STACK_BASE,
  STACK_MAX: 5246208,
  DYNAMIC_BASE: 5246208,
  memory: new WebAssembly.Memory({
    initial: 256
  }),
  table: new WebAssembly.Table({
    initial: 0,
    element: 'anyfunc'
  }),
  abort: () => {},
  _abort: () => {},
  ___cxa_allocate_exception: () => {},
  ___cxa_throw: () => {},
  ___cxa_uncaught_exception: () => {},
  ___gxx_personality_v0: () => {},
  ___setErrNo: () => {},
  _emscripten_get_heap_size: () => {},
  _emscripten_memcpy_big: () => {},
  _emscripten_resize_heap: () => {},
  abortOnCannotGrowMemory: () => {},
}


WebAssembly.instantiate(typedArray, {
  env: env
}).then(result => {
  console.log(util.inspect(result, true, 0));
  console.log(result.instance.exports._new_fib());
}).catch(e => {
  console.log(e);
});


// class Fib {
//   private cppInstance;

//   constructor() {
//     this.cppInstance = Module._new_fib();
//   }

//   next() {
//     return Module._next_val(this.cppInstance);
//   }
// }


// Module.onRuntimeInitialized = function() {
//   let tic = new Date;

//   console.log(`main() gives ${Module._main()}`);

//   let fib1 = new Fib();
//   let fib2 = new Fib();

//   console.log(fib1.next());
//   console.log(fib1.next());
//   console.log(fib1.next());
//   console.log(fib1.next());

//   console.log(fib2.next());
//   console.log(fib2.next());
//   console.log(fib2.next());
//   console.log(fib2.next());
  
//   let toc = new Date;
//   console.log(`Some fibs took ${toc-tic} ms in WASM`)
// }