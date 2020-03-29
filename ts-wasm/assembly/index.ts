// The entry file of your WebAssembly module.
/**
 * @todo javascript doesn't support i64, so we
 *       cannot export any function that uses it...
 *       flag --experimental-wasm-bigint works in node, 
 *       but not ts-node (of cours-e-di-doodle, why would it !?!?)
 */
// declare namespace console {
//   function log(ptr: i32): void;
//   function log_i64(arg0: i64): void;
// }
// console.log(42);

// declare function log(msg: string): void;
// log("blahoo");

// const date = Date.now();
// console.log_i64(date);


/**
 * @description just for a first test
 */
export function add(a: i32, b: i32): i32 {
  return a + b;
}


/**
 * AS Bind test (string)
 */
export function echoString(value: string): string {
  return "AsBind: " + value;
}


/**
 * Multiply vectors of 4 unsigned integers w/o vectorization
 * 
 */
export function mult_loop(x: Float32Array, y: Float32Array, res_arr: Float32Array) : Float32Array {

	for ( let n: u32 = 0; n < <u32>res_arr.length; n+=4 ) {
    res_arr[n] = x[0] * y[0];
    res_arr[n+1] = x[1] * y[1];
    res_arr[n+2] = x[2] * y[2];
    res_arr[n+3] = x[3] * y[3];
	}
	return res_arr;
}

