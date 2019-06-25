#!/bin/bash

rm build/ -rf
mkdir build
cd build

# _malloc and _free can be explicitly exported, but when
# used with -s ONLY_MY_CODE=1 they become unavailable
#
# @todo take care of later...
# 
# -s ALLOW_MEMORY_GROWTH=1 \
# -s ONLY_MY_CODE=1
# -s SIDE_MODULE=1 \
#
#
em++ \
  -O3 \
  -g \
  -std=c++11 \
  --bind \
  ../cpp/sum.cpp \
  -s WASM=1 \
  -s EXPORTED_FUNCTIONS='["_sum_up"]' \
  -s EXTRA_EXPORTED_RUNTIME_METHODS='["ccall", "cwrap"]' \
  -s ALLOW_MEMORY_GROWTH=1 \
  -o sum.js \
  || exit 1

# cmake ../cpp
# make

mv sum.js ../web/gen/
mv sum.wasm ../web/gen/
mv sum.wasm.map ../web/gen/
