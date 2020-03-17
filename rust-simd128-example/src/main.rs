//! A simple slab allocator for pages in wasm

#![feature(stdsimd)]
// #![cfg(target_feature = "simd128")]
#![cfg(target_arch = "wasm32")]

extern crate core_arch;

use core_arch::wasm32::*;
use std::time::{Instant}; // Duration, 
// use rand::Rng;

const N: usize = 10000;


fn heyx(x: v128, y: v128) -> v128 {
  i32x4_mul(x, y) // ending the line with ';' will return nothing (without `return` keyword...)
}


// Terrible beginner code - just for measurement ;-)
fn test_mult_loop_no_simd(x: [u32; 4], y: [u32; 4]) -> [[u32; 4]; N] {
	let mut res_arr = [[0; 4]; N];

	let start = Instant::now();

	for n in 0..N {
		let mut result: [u32; 4] = [0; 4];
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
fn test_mult_loop_simd(x: v128, y: v128, mut res_arr: [v128; N]) -> [v128; N] {
	let start = Instant::now();
	
	for n in 0..N {
		res_arr[n] = i32x4_mul(x, y);
	}
	let duration = start.elapsed();
	println!("Multiplying 2 vectors of 4 uints 1e5 times WITH SIMD took: {:?}", duration);
	return res_arr;
}




fn main() {
	let a: [u32; 4] = [111; 4];
	let b: [u32; 4] = [42; 4];

	test_mult_loop_no_simd(a, b);
	unsafe {
		let res_arr : [v128; N] = [::std::mem::transmute([0, 0, 0, 0]); N];
		test_mult_loop_simd(::std::mem::transmute(a), ::std::mem::transmute(b), res_arr);
	}


	// unsafe {
	// 	let c: v128 = i32x4_mul(::std::mem::transmute(a), ::std::mem::transmute(b));
	// 	dbg!(c);
	// }

	unsafe {
		let vec_a: v128 = ::std::mem::transmute(a);
		let vec_b: v128 = ::std::mem::transmute(b);
		let vec_c: v128 = heyx(vec_a, vec_b);
		dbg!(vec_c);
	}



}
