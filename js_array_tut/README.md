* Compile C++ to WASM with JS loader

```bash
em++ hello.cpp -s WASM=1 -o hello.js
```

Here we go for the options:

```bash
em++ -O3 ../cpp/fib.cpp ../cpp/hello.cpp 
-g 
--closure 1
-s WASM=1 
-s EXPORT_ALL=1 
EXPORTED_FUNCTIONS='["_new_fib", "_next_val", "_rec_fib", "_main"]' 
-o hello.js || exit 1

/**
 * -O3 => needed to prevent the 'WebAssembly.Instance(): Imports argument must be present and must be an object' error
 * -std=c++11 => support C++ 11 standard (new constructor variants etc.)
 * -g => same as `-g3` => also generate .wast file (textual sexpr (symbolic expression) representation of the code) & preserve variable names; on -O1 and higher, -g is set to 0 (zero) by default
 * --closure 1 => minifies .js file (ignored when -g is used)
 * -s WASM=1 => generate WASM instead of ASM
 * -s ONLY_MY_CODE=1 => dont compile STL functions
 * -s EXPORT_ALL=1 => do not just export main()
 * -s EXPORTED_FUNCTIONS='[]' => array of functions to export (prefixed with underscore)
 * || exit 1  => abort in case of error
 **/
```
