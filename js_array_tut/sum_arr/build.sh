#!/bin/bash

rm build/ -rf
mkdir build
cd build


em++ \
  -O3 \
  -g \
  -std=c++11 \
  ../cpp/sum.cpp \
  -s WASM=1 \
  -s EXPORTED_FUNCTIONS='["_sum_up"]' \
  -o sum.js \
  || exit 1

# cmake ../cpp
# make

mv sum.js ../web/gen/
mv sum.wasm ../web/gen/
mv sum.wasm.map ../web/gen/
