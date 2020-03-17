//! A simple slab allocator for pages in wasm

#![feature(stdsimd)]
// #![cfg(target_feature = "simd128")]
#![cfg(target_arch = "wasm32")]

extern crate core_arch;

use core_arch::wasm32::*;
use std::time::{Instant}; // Duration, 
use rand::Rng;

const N: usize = 1e7 as usize;


// Terrible beginner code - just for measurement ;-)
fn test_mult_loop_no_simd(x: [u32; 4], y: [u32; 4]) -> Vec<[u32; 4]> {
	let mut res_arr = vec![[0; 4]; N];
	let mut result: [u32; 4] = [0; 4];

	let start = Instant::now();
	for n in 0..N {
		for i in 0..4 {
			result[i] = x[i] * y[i];
		}
		res_arr[n] = result;
	}
	let duration = start.elapsed();

	println!("Multiplying 2 vectors of 4 uints 1e5 times W/O SIMD took: {:?}", duration);

	return res_arr;
}


/**
 * @todo WAIT-A-MOMENT... we can define an argument mutable although it was not outside ???
 */
fn test_mult_loop_simd(x: v128, y: v128, mut res_arr: Vec<v128>) -> Vec<v128> {
	let start = Instant::now();	
	for n in 0..N {
		res_arr[n] = i32x4_mul(x, y);
	}
	let duration = start.elapsed();

	println!("Multiplying 2 vectors of 4 uints 1e5 times WITH SIMD took: {:?}", duration);
	
	return res_arr;
}




fn main() {
	let mut rng = rand::thread_rng();
	let a: [u32; 4] = [111; 4];
	let b: [u32; 4] = [42; 4];

	// Test W/O simd
	let res_no_simd: Vec<[u32; 4]> = test_mult_loop_no_simd(a, b);
	println!("{:?}", res_no_simd[rng.gen_range(0, N)]);

	// Test WITH simd
	unsafe {
		let res_arr: Vec<v128> = vec![::std::mem::transmute([0, 0, 0, 0]); N];
		let res_simd: Vec<v128> = test_mult_loop_simd(::std::mem::transmute(a), ::std::mem::transmute(b), res_arr);
		println!("{:?}", res_simd[rng.gen_range(0, N)]);
	}

}
