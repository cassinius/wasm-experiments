#!/bin/bash

# Build natively
g++ -O3 fw.cpp -std=c++11 -o ./fw

# Build 'normal' asm.js test file
emcc fw.cpp -O3 --std=c++11 -o fw_asm.html

# Build WASM test file
emcc fw.cpp -O3 --std=c++11 -s WASM=1 -o fw_wasm.html
