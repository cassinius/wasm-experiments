import * as fs from 'fs';
import * as path from 'path';
import {strict as assert} from 'assert';
import {wasm} from '../loader'


assert.equal(wasm.add(1, 2), 3);
console.log("Sum in Wasm: OK");


const N: number = 1e7;
let res_arr = new Array(N);

const a = new Float32Array([Math.random(), Math.random(), Math.random(), Math.random()]);
const b = new Float32Array([Math.random(), Math.random(), Math.random(), Math.random()]);
// console.log(a);
// console.log(b);



// /**
//  * JS
//  */
// let tic = process.hrtime();
// res_arr = mult_loop_js(a, b, res_arr);
// let toc = process.hrtime();
// console.log(`Result array is ${res_arr.length} integers long.`);
// console.log(res_arr[Math.floor(Math.random()*res_arr.length)]);
// console.log(`Multiplying two 4-integer vectors via loop in JS took ${diffMicros(tic, toc)} us.`);


// /**
//  * WASM
//  */
// tic = process.hrtime();
// res_arr = wasm.mult_loop(a, b, res_arr);
// toc = process.hrtime();
// console.log(`Result array is ${res_arr.length} integers long.`);
// console.log(res_arr[Math.floor(Math.random()*res_arr.length)]);
// console.log(`Multiplying two 4-integer vectors via loop in Assemblyscript/WASM took ${diffMicros(tic, toc)} us.`);




// function mult_loop_js(x: Float32Array, y: Float32Array, res_arr: Float32Array[]): Float32Array[] {
//   const vector_product: Float32Array = new Float32Array(4);
// 	for ( let n = 0; n < res_arr.length; ++n ) {
// 		for ( let i = 0; i < vector_product.length; ++i ) {
// 			vector_product[i] = x[i] * y[i];
// 		}
// 		res_arr[n] = vector_product;
// 	}
// 	return res_arr;
// }


function diffSecs(tic: [number, number], toc: [number, number]) {
  return toc[0] - tic[0];
}

function diffMillis(tic: [number, number], toc: [number, number]) {
  return diffNanos(tic, toc) / 1e6;
}

function diffMicros(tic: [number, number], toc: [number, number]) {
  return diffNanos(tic, toc) / 1e3;
}

function diffNanos(tic: [number, number], toc: [number, number]) {
  return (toc[0] * 1e9 + toc[1]) - (tic[0] * 1e9 + tic[1]);
}