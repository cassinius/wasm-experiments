const fs = require("fs");

const compiled = new WebAssembly.Module(fs.readFileSync(__dirname + "/build/optimized.wasm"));
// const compiled = new WebAssembly.Module(fs.readFileSync(__dirname + "/build/untouched.wasm"));

const imports = {
  env: {
    abort(msgPtr, filePtr, line, column) {
      // throw new Error('index.ts: abort at [' + line + '] : [' + column + ']');
      console.error("abort called at main.ts: " + line + ":" + column);
    },
    logi( value ) {
      console.log('int value: ' + value)
    }
  },
  Date: Date
};
Object.defineProperty(module, "exports", {
  get: () => new WebAssembly.Instance(compiled, imports).exports
});
