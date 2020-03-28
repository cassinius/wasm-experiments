"use strict";
exports.__esModule = true;
var fs = require("fs");
var compiled = new WebAssembly.Module(fs.readFileSync(__dirname + "/build/optimized.wasm"));
var imports = {
    env: {
        abort: function (_msg, _file, line, column) {
            console.error("abort called at index.ts:" + line + ":" + column);
        },
        memory: new WebAssembly.Memory({ initial: 256 }),
        table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
    },
    index: {
        log: function (_msg) {
            console.log(_msg);
        }
    },
    Date: {
        now: function () {
            console.log('bla');
            return Date.now();
        }
    }
};
exports.wasm = new WebAssembly.Instance(compiled, imports).exports;
