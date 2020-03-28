"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("assert");
var loader_1 = require("../loader");
var N = 1e7;
assert_1.strict.equal(loader_1.wasm.add(1, 2), 3);
console.log("Sum in Wasm: OK");
var a = new Float32Array([Math.random(), Math.random(), Math.random(), Math.random()]);
var b = new Float32Array([Math.random(), Math.random(), Math.random(), Math.random()]);
// console.log(a);
// console.log(b);
var res_arr = new Array(N);
/**
 * JS
 */
var tic = process.hrtime();
res_arr = mult_loop_js(a, b, res_arr);
var toc = process.hrtime();
console.log("Result array is " + res_arr.length + " integers long.");
console.log(res_arr[Math.floor(Math.random() * res_arr.length)]);
console.log("Multiplying two 4-integer vectors via loop in JS took " + diffMicros(tic, toc) + " us.");
/**
 * WASM
 */
tic = process.hrtime();
res_arr = loader_1.wasm.mult_loop(a, b, res_arr);
toc = process.hrtime();
console.log("Result array is " + res_arr.length + " integers long.");
console.log(res_arr[Math.floor(Math.random() * res_arr.length)]);
console.log("Multiplying two 4-integer vectors via loop in Assemblyscript/WASM took " + diffMicros(tic, toc) + " us.");
function mult_loop_js(x, y, res_arr) {
    var vector_product = new Float32Array(4);
    for (var n = 0; n < res_arr.length; ++n) {
        for (var i = 0; i < vector_product.length; ++i) {
            vector_product[i] = x[i] * y[i];
        }
        res_arr[n] = vector_product;
    }
    return res_arr;
}
function diffSecs(tic, toc) {
    return toc[0] - tic[0];
}
function diffMillis(tic, toc) {
    return diffNanos(tic, toc) / 1e6;
}
function diffMicros(tic, toc) {
    return diffNanos(tic, toc) / 1e3;
}
function diffNanos(tic, toc) {
    return (toc[0] * 1e9 + toc[1]) - (tic[0] * 1e9 + tic[1]);
}
