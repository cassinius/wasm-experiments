# Wasm Notes

## Multi-threading blog (October 24th(?), 2018)

### Concepts

> Instantiate `Webassembly.Module` on multiple workers that all use the same memory via `SharedArrayBuffer`

* `i32.atomic.wait` and `atomic.notify`
  - similar to `https://en.wikipedia.org/wiki/Futex` ??
* WebWorker, postMessage & `structured cloning`
  - `structured` vs. `deep` cloning?
  - structured cloning is supported by the `Webassembly.Module` type
    + Module: akin to the `text` and `data` sections of an executable
    + Module.instance: Module + `heap` and `stack`
```rust
pub struct Module {
    contents: Arc<ModuleContents>,
}
```
* Shared memory
  - basis for concurrency paradigms like `message passing` and `mutexes`
  - available in JS via `SharedArrayBuffer`
* Arc (in Rust) ??
* The *start* function
  - automatically called on module instantiation
  - can be used as a main function
  - not exposed or used in Rust
  - with multiple instances: *thread init* instead of *global init*
* *global* variables
  - Rust doesn't have globals, so they are not exposed to Rust
  - (Rust only has statics, which are compiled to linear memory)
  - In Wasm, it is a global variable for the instance 
    + more like a virtual register (can only contain a fixed set of types)
  - for multi-threading, they are rather *thread-locals*


### Process

* Memory initialization happens *automatically* in Webassembly
  - the Wasm runtime copies the Module's data segment to the specified (Module.memory?) offset in linear memory.
  - not good for multithreading (shared memory !!)
  - **but** we can flag data segments as passive
  - and then use memory.init manually for the first Thread



### Reading list

* [Multithreading Rust & Wasm](https://rustwasm.github.io/2018/10/24/multithreading-rust-and-wasm.html)
* [Wasm thread proposal]()
* [Atomic instructions](https://github.com/WebAssembly/threads/blob/master/proposals/threads/Overview.md#atomic-memory-accesses)
  