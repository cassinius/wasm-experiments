"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var compiled = new WebAssembly.Module(fs.readFileSync(__dirname + "/build/optimized.wasm"));
var importObject = {
    env: {
        abort: function (_msg, _file, line, column) {
            console.error("abort called at index.ts:" + line + ":" + column);
        }
        // memory: new WebAssembly.Memory({ initial: 256 }),
        // table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
    },
    index: {
        log: function (_msg) {
            console.log(_msg);
        },
        "console.log": function (msg) { return console.log(msg); },
        "console.log_i64": function (arg0) { return console.log(arg0); },
    },
    Date: {
        now: function () {
            return Date.now();
        }
    }
};
exports.wasm = new WebAssembly.Instance(compiled, importObject).exports;
