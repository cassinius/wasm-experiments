* Compile C++ to WASM with JS loader

```bash
em++ hello.cpp -s WASM=1 -o hello.js
```

Here we go for the options:

```bash
em++ -O3 ../cpp/fib.cpp ../cpp/hello.cpp -g -s WASM=1 -s EXPORT_ALL=1 -o hello.js || exit 1

/**
 * -O3 => needed to prevent the 'WebAssembly.Instance(): Imports argument must be present and must be an object' error
 * -g => also generate .wast file (textual sexpr (symbolic expression) representation of the code)
 * -s WASM=1 => generate WASM instead of ASM
 * -s ONLY_MY_CODE=1 dont compile STL functions
 * -s EXPORT_ALL=1 do not just export main()
 **/
```

