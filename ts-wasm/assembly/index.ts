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

NativeMath.seedRandom(42);
// declare function log_i64(arg: i64): void;
// const date = Date.now();
// log_i64(date);


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

const N: usize = 1e7 as usize;
const DIM: usize = 4;
let u32_a: Uint32Array, u32_b: Uint32Array, u32_arr: Uint32Array;


export function construct_u32mult_structs() : void {
  u32_a = new Uint32Array(DIM);
  u32_a.fill(randU32());
  u32_b = new Uint32Array(DIM);
  u32_b.fill(randU32());
  u32_arr = new Uint32Array(4 * N);
}


export function mult_loop_u32_internal() : void {
  mult_loop_u32(u32_a, u32_b, u32_arr);
}


export function mult_loop_u32(
  x: Uint32Array,
  y: Uint32Array,
  res_arr: Uint32Array
): Uint32Array {
  for (let n: u32 = 0; n < <u32>res_arr.length; n += 4) {
    res_arr[n] = x[0] * y[0];
    res_arr[n + 1] = x[1] * y[1];
    res_arr[n + 2] = x[2] * y[2];
    res_arr[n + 3] = x[3] * y[3];
  }
  return res_arr;
}


/**
 * Multiply vectors of 4 unsigned integers w/o vectorization
 *
 */
export function mult_loop_f32(
  x: Float32Array,
  y: Float32Array,
  res_arr: Float32Array
): Float32Array {
  for (let n: u32 = 0; n < <u32>res_arr.length; n += 4) {
    res_arr[n] = x[0] * y[0];
    res_arr[n + 1] = x[1] * y[1];
    res_arr[n + 2] = x[2] * y[2];
    res_arr[n + 3] = x[3] * y[3];
  }
  return res_arr;
}


function randU32(): u32 {
  return NativeMath.floor(NativeMath.random() * 10) as u32;
}
