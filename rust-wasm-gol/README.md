# Game of life Rust-Wasm

## Usage

* Compile the project from the main directory
  - this will create a `pkg` directory which can be used as package dependency within a JS project (=has a package.json file)
```bash
wasm-pack build
```
* add `"rust-wasm-gol": "file:../pkg"` to the dependency section of the www/package.json file
* import the package (`pkg` directory) within the main `www/index.js` file
```js
import * as wasm from "rust-wasm-gol";
```
* run
```bash
npm run start
```
* run the tests
  - also works with
    + --firefox
    + --safari
    + --node
```bash
wasm-pack test --chrome --headless
```

### Benchmarking

We have to comment out all the #[wasm_bindgen] annotations, and the "cdylib" bits from Cargo.toml or else building native code will fail and have link errors.

#### Tick-1 vs. Tick2 (running avg. last 100 iterations)

##### w/o neighborhood counting

* Tick-1 
    - Chrome: ~2ms
    - Firefox: ~2.3ms
* Tick-2 w/o logical cells
    - Chrome: ~2ms
    - Firefox: ~2.5ms
 
##### with neighborhood counting
 
* Tick-1 
    - Chrome: ~8.5
    - Firefox: ~8.5
* Tick-2
    - Chrome: ~9.5
    - Firefox: ~ 7.3
    
##### Tick-2 with neighborhood counting + double setting (logical + physical)

* Tick-2
    - Chrome: ~10
    - Firefox: ~8.5

* Tick-2 update with target (usize) computation before access:
    - Chrome: ~9 (~9 w/o double access)
    - Firefox: ~8 (~7 w/o double access)

