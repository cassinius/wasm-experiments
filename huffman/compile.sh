#!/bin/bash

# Build natively
g++ -O3 -std=c++11 huffman.cpp -o huffman

# Build 'normal' asm.js test file
emcc huffman.cpp -O3 -std=c++11 -o huffman_asm.html

# Build WASM test file
emcc huffman.cpp -O3 -std=c++11 -s WASM=1 -o huffman_wasm.html
