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

