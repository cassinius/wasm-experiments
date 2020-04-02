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