#!/bin/bash

rm build/ -rf
mkdir build
cd build
em++ -O3 -std=c++11 ../cpp/fib.cpp ../cpp/hello.cpp -g -s WASM=1 -s EXPORT_ALL=1 -o hello.js || exit 1
mv hello.js ../web/gen/
mv hello.wasm ../web/gen/
