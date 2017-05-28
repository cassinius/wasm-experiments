#!/bin/bash

# Build natively
g++ -O3 base_tests.cpp -std=c++11 -o base_tests

# Build 'normal' asm.js test file
emcc base_tests.cpp -O3 --std=c++11 -o base_tests_asm.html

# Build WASM test file
emcc base_tests.cpp -O3 --std=c++11 -o base_tests_wasm.html -s WASM=1
