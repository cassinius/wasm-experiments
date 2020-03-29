// The entry file of your WebAssembly module.
/**
 * @todo javascript doesn't support i64, so we
 *       cannot export any function that uses it...
 *       flag --experimental-wasm-bigint works in node, 
 *       but not ts-node (of cours-e-di-doodle, why would it !?!?)
 */
declare namespace console {
  function log(ptr: i32): void;
  function log_i64(arg0: i64): void;
}
console.log(42);
const date = Date.now();
console.log_i64(date);


/**
 * @description just for a first test
 */
export function add(a: i32, b: i32): i32 {
  return a + b;
}


/**
 * Multiply vectors of 4 unsigned integers w/o vectorization
 * 
 */
// export function mult_loop(x: Float32Array, y: Float32Array, res_arr: Float32Array[]) : Float32Array[] {
// 	const vector_product: Float32Array = new Float32Array(4);
// 	for ( let n: u32 = 0; n < <u32>res_arr.length; ++n ) {
// 		for ( let i: u32 = 0; i < <u32>vector_product.length; ++i ) {
// 			vector_product[i] = x[i] * y[i];
// 		}
// 		res_arr[n] = vector_product;
// 	}
// 	return res_arr;
// }