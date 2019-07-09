#!/bin/bash

# Build natively
g++ -O3 --std=c++11 fft.cpp -o fft

# Build 'normal' asm.js test file
emcc fft.cpp -O3 --std=c++11 -o fft_asm.html

# Build WASM test file
emcc fft.cpp -O3 --std=c++11 -s WASM=1 -o fft_wasm.html
