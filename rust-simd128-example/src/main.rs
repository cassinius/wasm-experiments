#![feature(stdsimd)]
// #![cfg(target_feature = "simd128")]
#![cfg(target_arch = "wasm32")]

extern crate core_arch;
use core_arch::wasm32::*;

use std::time::{Instant}; // , Duration
use rand::Rng;

mod simd_mult;

const N: usize = 1e7 as usize;


fn main() {
	let mut rng = rand::thread_rng();
	let a: [u32; 4] = [111; 4];
	let b: [u32; 4] = [42; 4];

	// Test W/O simd
	let start = Instant::now();
	let res_no_simd: Vec<[u32; 4]> = simd_mult::test_mult_loop_no_simd(a, b, N);
	println!("{:?}", res_no_simd[rng.gen_range(0, N)]);
	let duration = start.elapsed();
	println!("Multiplying 2 vectors of 4 uints {:?} times W/O SIMD took: {:?}", N, duration);


	// Test WITH simd
	unsafe {
		let res_arr: Vec<v128> = vec![::std::mem::transmute([0, 0, 0, 0],); N];
		
		let start = Instant::now();	
		let res_simd: Vec<v128> = simd_mult::test_mult_loop_simd(::std::mem::transmute(a), ::std::mem::transmute(b), res_arr, N);
		println!("{:?}", res_simd[rng.gen_range(0, N)]);
		let duration = start.elapsed();	
		println!("Multiplying 2 vectors of 4 uints {:?} times WITH SIMD took: {:?}", N, duration);
	}

}
