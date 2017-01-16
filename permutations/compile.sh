#!/bin/bash

# Build natively
g++ -O3 main.cpp -std=c++11 -o perm

# Build 'normal' asm.js test file
em++ main.cpp -O2 --closure 1 -o perm_asm.html

# Build WASM test file
em++ main.cpp -O2 --closure 1 -s WASM=1 -o perm_wasm.html
