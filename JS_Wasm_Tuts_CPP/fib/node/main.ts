const Module = require ('../web/gen/hello.js');
// import * as Module from '../web/gen/hello';

// console.log( Module._new_fib );


export class Fib {
  private cppInstance;

  constructor() {
    this.cppInstance = Module._new_fib();
  }

  next() {
    return Module._next_val(this.cppInstance);
  }
}


function fib_js(x) {
  if (x < 1)
    return 0;
  if (x == 1)
    return 1;
  return fib_js(x-1) + fib_js(x-2);
}


function fibPerformance() {
  [{compute: fib_js, name: "JS"}, {compute: Module._rec_fib, name: "WASM"}].forEach(fib_rt => {
    let tic = +new Date;
    fib_rt.compute(42);
    let toc = +new Date;
    console.log(`Fib(42) in ${fib_rt.name} took ${toc-tic} ms.`);
  });
}


Module.onRuntimeInitialized = function() {
  console.log(`main() gives ${Module._main()}`);
  let fib1 = new Fib();
  let fib2 = new Fib();

  fibPerformance();

  // console.log(fib1.next());
  // console.log(fib1.next());
  // console.log(fib1.next());
  // console.log(fib1.next());

  // console.log(fib2.next());
  // console.log(fib2.next());
  // console.log(fib2.next());
  // console.log(fib2.next());
}








// const source = fs.readFileSync(path.join(__dirname, '../web/gen/hello.dom'));
// const typedArray = new Uint8Array(source);

// const env = {
//   // __memory_base: 0,
//   memoryBase: 0,
//   __table_base: 0,
//   DYNAMICTOP_PTR: 3296,
//   STATIC_BASE: 1024,
//   STACK_BASE: 3328,
//   STACKTOP: this.STACK_BASE,
//   STACK_MAX: 5246208,
//   DYNAMIC_BASE: 5246208,
//   memory: new WebAssembly.Memory({
//     initial: 256
//   }),
//   table: new WebAssembly.Table({
//     initial: 0,
//     element: 'anyfunc'
//   }),
//   abort: () => {},
//   _abort: () => {},
//   ___cxa_allocate_exception: () => {},
//   ___cxa_throw: () => {},
//   ___cxa_uncaught_exception: () => {},
//   ___gxx_personality_v0: () => {},
//   ___setErrNo: () => {},
//   _emscripten_get_heap_size: () => {},
//   _emscripten_memcpy_big: () => {},
//   _emscripten_resize_heap: () => {},
//   abortOnCannotGrowMemory: () => {},
// }


// WebAssembly.instantiate(typedArray, {
//   env: env
// }).then(result => {
//   console.log(util.inspect(result, true, 0));
//   console.log(result.instance.exports._new_fib());
// }).catch(e => {
//   console.log(e);
// });

