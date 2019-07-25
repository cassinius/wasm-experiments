## Cheerp options & commands

#### JS compile
```shell script
  /opt/cheerp/bin/clang++ -target cheerp file.cpp -O3 -o target.js
```

#### WASM compile options

```shell script
/opt/cheerp/bin/clang++ \
  -target cheerp \
  -cheerp-mode=wasm \
  -cheerp-linear-heap-size=128 \
  -cheerp-wasm-loader=loader.js \
  -o output.wasm \
  input.cpp
```

* For human readable output
```shell script
  -cheerp-mode=wast
```

