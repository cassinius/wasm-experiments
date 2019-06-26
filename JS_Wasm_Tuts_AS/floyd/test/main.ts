import * as fs from 'fs';
import * as path from 'path';
// import { load as loader } from 'assemblyscript-loader';
import * as loader from '../node_modules/assemblyscript/lib/loader/index';

// console.log(loader);

// declare WebAssembly {
//   function instantiateStreaming();
// }

// if (!WebAssembly.instantiateStreaming) {
//   WebAssembly.instantiateStreaming = async (resp, importObject) => {
//       const source = await (await resp).arrayBuffer();
//       return await WebAssembly.instantiate(source, importObject);
//   };
// }

const WASM_FILE = path.join(__dirname, '../build/optimized.wasm');

let buffer = fs.readFileSync(WASM_FILE),
    module,
    lib;


// const imports = {
//   env: {
//     memoryBase: 0,
//     tableBase: 0,
//     memory: new WebAssembly.Memory({
//         initial: 256,
//     }),
//     table: new WebAssembly.Table({
//         initial: 0,
//         element: 'anyfunc',
//     }),
//     abort: () => { console.log('Abort!') }
//   }
// }

// async function loadWasm() {
//   const module = await WebAssembly.compile(buffer);
//   const instance = await WebAssembly.instantiate(module, imports);
//   // console.log(instance.exports.FW);
//   return instance.exports;
// }


(async () => {

  // module = await loadWasm();
  // console.log(wasm);
  // wasmLoader = await WasmLoader('./build/untouched.wasm', {imports});

  lib = loader.instantiateBuffer(buffer, {})
  console.log(lib);

  console.log(lib.say42());

  /**
   * Strings...
   */
  // lib.newString('hi');
  console.log(lib.sayHi());

})();
