#!/bin/bash

# Build natively
g++ -O3 -std=c++11 perm.cpp -o perm

# Build 'normal' asm.js test file
emcc perm.cpp -O3 -std=c++11 -s TOTAL_MEMORY=268435456 -s ALLOW_MEMORY_GROWTH=1 -o perm_asm.html

# Build WASM test file
emcc perm.cpp -O3 -std=c++11 -s TOTAL_MEMORY=268435456 -s ALLOW_MEMORY_GROWTH=1 -s WASM=1 -o perm_wasm.html
