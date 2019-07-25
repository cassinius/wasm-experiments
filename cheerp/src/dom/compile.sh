/opt/cheerp/bin/clang++ \
  -target cheerp \
  -cheerp-mode=wasm \
  -cheerp-linear-heap-size=128 \
  -cheerp-wasm-loader=loader.js \
  -o output.wasm \
  input.cpp