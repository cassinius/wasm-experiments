const { AsBind } = require("as-bind");
const fs = require("fs");

const importObject = {
  env: {
    abort(_msg, _file, line, column) {
      console.error("abort called at index.ts:" + line + ":" + column);
    }
    // memory: new WebAssembly.Memory({ initial: 256 }),
    // table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
  },
  index: {
    log(_msg) {
      console.log(_msg);
    },
    "console.log": (msg) => console.log(msg),
    "console.log_i64": (arg0) => console.log(arg0),
  },
  Date: {
    now() {
      return Date.now();
    }
  }
};


const wasm = fs.readFileSync("./dist/build/optimized.wasm");

const asyncTask = async () => {
  const asBindInstance = await AsBind.instantiate(wasm);

  // You can now use your wasm / as-bind instance!
  const response = asBindInstance.exports.echoString(
    "Hello World!"
  );
  console.log(response); // AsBind: Hello World!
};
asyncTask();
