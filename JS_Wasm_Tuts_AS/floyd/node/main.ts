import * as fs from 'fs'


fetch('fib.wasm').then(response =>
  response.arrayBuffer()
).then(bytes =>
  WebAssembly.instantiate(bytes, { imports: {} })
).then(results => {
  window.fibWASM = results.instance.exports.fib;
  window.FWWASM = results.instance.exports.FW;
  console.log(window.FWWASM);
  console.log(window.FWWASM([[1,2],[3,4]]));
});

