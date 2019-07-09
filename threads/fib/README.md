## Compile to WASM with

* Does -s USE_PTHREADS=1 automatically signal -s WASM=1 ??

```bash
emcc -O2 -s USE_PTHREADS=1 -s PTHREAD_POOL_SIZE=2 -o fibp.js fib_pthreads.c
```

