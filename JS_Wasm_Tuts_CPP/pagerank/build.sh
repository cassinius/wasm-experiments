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
# -s EXPORTED_FUNCTIONS='["_sum_up"]' \
#
#
em++ \
  -O3 \
  -g \
  -std=c++11 \
  --bind \
  ../cpp/pr.cpp \
  -s WASM=1 \
  -s EXPORTED_FUNCTIONS='["_pagerank"]' \
  -s EXTRA_EXPORTED_RUNTIME_METHODS='["ccall", "cwrap"]' \
  -s ALLOW_MEMORY_GROWTH=1 \
  -o pr.js \
  || exit 1

# cmake ../cpp
# make

mv pr.js ../web/gen/
mv pr.dom ../web/gen/
mv pr.dom.map ../web/gen/
