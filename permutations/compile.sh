#!/bin/bash

# Build natively
g++ -O3 perm.cpp -std=c++11 -o perm

# Build 'normal' asm.js test file
emcc perm.cpp -O3 -o perm_asm.html

# Build WASM test file
emcc perm.cpp -O3 -s WASM=1 -o perm_wasm.html
