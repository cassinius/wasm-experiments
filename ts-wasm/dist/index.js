"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var loader_1 = require("./loader");
exports.wasm = loader_1.wasm;
console.log('Sum', loader_1.wasm.add(3, 5));
