## Floyd C++ -> Emscripten -> WASM

### Results (performance)

* DS transfer to WASM -> practically *zero* 
  - why so much faster than AS ??
* Internal copying of graph array -> also practically zero
  - ok why not...
* Just iterating over the graph in O(n^3)
  - can't measure, since GCC optimized for-loops away
* FW without CPP return
  - 30 - 100% faster than JS
* O(n^2) iteration, |V|=1e3, just dummy operation (math.random)
  - WOW, AMAZING!
  - Chrome: WASM about 4x as fast as JS
  - Firefox: WASM about 2x as SLOW as JS
  - JS in Chrome 10x as slow as FF (huh???)
  - WASM in Chrome about 2x as slow as FF
* Tested against pure C++ -> GCC -> binay
  - about ~2x as fast as WASM

> I am just **stumped**, but at this point it seems Wasm is MUCH to unreliable / volatile, in itself and amongst platforms, to directly pursue it right now..

> Conclusion: Take another look at it in early 2020, learn Rust in the meanwhile, then go for Threads & Vectorization right from the start

### Done (27.06.2019)

* CPP -> Emscripten -> Wasm
* Transfer of TypedArrays to Wasm via initialization on it's Heap
  - Module._malloc()
* Experimented with optimization flags (-s ONLY_MY_CODE=1)
  - don't do it...!
* extern "C" {} vs. EMSCRIPTEN_BINDINGS
  - it seems either one or the other works, however:
  - with extern "C" you can pass arrays, but 

### ToDo

* Figure out how to pass our arrays and get them out again as well
* Explain volatile behavior between FF & Chrome in PR setting
* Switch to Rust...