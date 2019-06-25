#!/bin/bash

rm build/ -rf
mkdir build
cd build


em++ \
  -O3 \
  -g \
  -std=c++11 \
  ../cpp/fib.cpp ../cpp/hello.cpp \
  -s WASM=1 \
  -s EXPORTED_FUNCTIONS='["_rec_fib", "_new_fib", "_next_val"]' \
  -o hello.js \
  || exit 1

# cmake ../cpp
# make
mv hello.js ../web/gen/
mv hello.wasm ../web/gen/
mv hello.wasm.map ../web/gen/
