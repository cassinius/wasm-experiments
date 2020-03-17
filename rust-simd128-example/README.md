# Rust Wasm SIMD 128 example

This repo is made to showcase how to emit Wasm SIMD 128 instructions from Rust, and use it with [Wasmer](https://github.com/wasmerio/wasmer).

## Build

We build this crate using `nightly-2019-05-20` because we wanted to use a "stable" version of nightly.

```bash
# Initialize stdarch
git submodule update --init
```


```bash
# Add rust nightly (last versions can't compile 😅)
rustup toolchain install nightly-2019-05-20

# Add wasm32-wasi to the toolchain
rustup target add wasm32-wasi --toolchain=nightly-2019-05-20

# Build the instance
RUSTFLAGS='-C target-feature=+simd128' cargo +nightly-2019-05-20 build --release --target=wasm32-wasi

# Verify that it's working!
wasm2wat --enable-simd ./target/wasm32-wasi/release/rust-wasm-simd128-example.wasm
```

## Run it!

```
wasmer-release run --backend=llvm ./target/wasm32-wasi/release/rust-wasm-simd128-example.wasm

# TADA!
```

## One great mystery....

With an allocation of 1e5 and 1e6 v128 entries in the vector:
```rust
vec![::std::mem::transmute([0, 0, 0, 0]); N];
```
we get an error (reason completely *unknown* !!):
```bash
Error: error: Caught exception of type "MemoryOutOfBounds".
```

and with an allocation of 1e8, we run out of memory... (probably the default WASM heap size)
```bash
memory allocation of 1600000000 bytes failedError: error: Caught exception of type "Unreachable".
```

- BUT - with an allocation of 1e7 everything works fine !!!
```bash
time wasmer --backend=llvm --enable-simd ./target/wasm32-wasi/release/rust-wasm-simd128-example.wasm 
Multiplying 2 vectors of 4 uints 1e5 times W/O SIMD took: 24.278569ms
[4662, 4662, 4662, 4662]
Multiplying 2 vectors of 4 uints 1e5 times WITH SIMD took: 13.094943ms
v128(4662, 4662, 4662, 4662)

real    0m0.267s
user    0m0.109s
sys     0m0.155s
```
