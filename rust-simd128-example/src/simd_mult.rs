extern crate core_arch;
use core_arch::wasm32::*;


// Terrible beginner code - just for measurement ;-)
pub fn test_mult_loop_no_simd(x: [u32; 4], y: [u32; 4], n: usize) -> Vec<[u32; 4]> {
	let mut res_arr = vec![[0; 4]; n];
	let mut result: [u32; 4] = [0; 4];

	for n in 0..n {
		for i in 0..4 {
			result[i] = x[i] * y[i];
		}
		res_arr[n] = result;
	}
	return res_arr;
}


/**
 * @todo WAIT-A-MOMENT... we can define an argument mutable although it was not outside ???
 */
pub fn test_mult_loop_simd(x: v128, y: v128, mut res_arr: Vec<v128>, n: usize) -> Vec<v128> {
	for n in 0..n {
		res_arr[n] = i32x4_mul(x, y);
	}
	
	return res_arr;
}

