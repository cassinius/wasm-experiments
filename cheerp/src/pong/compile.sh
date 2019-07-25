/opt/cheerp/bin/clang++ \
  -target cheerp \
  -cheerp-mode=wasm \
  -cheerp-linear-heap-size=128 \
  -cheerp-wasm-loader=web/pong.js \
  -O2 \
  -o web/pong.wasm \
  pong.cpp
