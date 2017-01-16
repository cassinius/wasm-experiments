#!/bin/bash

# Build natively
g++ -O3 huffman.cpp -std=c++11 -o huffman

# Build 'normal' asm.js test file
em++ huffman.cpp -O2 --closure 1 -o huffman_asm.html

# Build WASM test file
em++ huffman.cpp -O2 --closure 1 -s WASM=1 -o huffman_wasm.html
