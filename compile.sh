#!/bin/bash

# Build natively
g++ -O3 main.cpp -std=c++11 -o build/test_elf

# Build 'normal' asm.js test file
em++ main.cpp -O2 --closure 1 -o test_asm.html

# Build WASM test file
em++ main.cpp -O2 --closure 1 -s WASM=1 -o test_wasm.html
