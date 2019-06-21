#!/bin/bash

rm build/ -rf
mkdir build
cd build
em++ -O3 -std=c++11 ../cpp/fib.cpp ../cpp/hello.cpp -g -s WASM=1 -s EXPORTED_FUNCTIONS='["_new_fib", "_next_val", "_rec_fib", "_main"]' -o hello.js || exit 1
# cmake ../cpp
# make
mv hello.js ../web/gen/
mv hello.wasm ../web/gen/
