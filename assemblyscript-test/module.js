const fs = require("fs");
const imports = {
  Date: Date
};

module.exports = new WebAssembly.Instance(
  new WebAssembly.Module(fs.readFileSync(__dirname + "/build/optimized.wasm"), {}), imports ).exports;
