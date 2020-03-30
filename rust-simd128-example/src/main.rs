#![feature(stdsimd)]
// #![cfg(target_feature = "simd128")]
// #![cfg(target_arch = "wasm32")]

extern crate core_arch;
use core_arch::wasm32::*;

use std::time::{Instant}; // , Duration
use rand::{thread_rng, Rng};
use rand::distributions::{Alphanumeric, Uniform, Standard};

mod mults;
mod floyd;

const N: usize = 1e7 as usize;
const GRAPH_SIZE: usize = 1e3 as usize;


fn test_mult() {
	let mut rng = thread_rng();
	let a: [u32; 4] = [111; 4];
	let b: [u32; 4] = [42; 4];
	// we can pass a vec without length argument to a function, but not a 2D-array...
	let res_arr = vec![[0; 4]; N];
	// println!("res_arr is of length: {:?}", res_arr.len());

	// Test W/O simd
	let start = Instant::now();
	let res_no_simd: Vec<[u32; 4]> = mults::mult_loop_no_simd(a, b, res_arr, N);
	let duration = start.elapsed();
	println!("{:?}", res_no_simd[rng.gen_range(0, N)]);
	println!("Multiplying 2 vectors of 4 uints {:?} times W/O SIMD took: {:?}", N, duration);


	// Test WITH simd
	unsafe {
		let res_arr: Vec<v128> = vec![::std::mem::transmute([0, 0, 0, 0],); N];
		
		let start = Instant::now();	
		let res_simd: Vec<v128> = mults::mult_loop_simd(::std::mem::transmute(a), ::std::mem::transmute(b), res_arr, N);
		let duration = start.elapsed();
		println!("{:?}", res_simd[rng.gen_range(0, N)]);
		println!("Multiplying 2 vectors of 4 uints {:?} times WITH SIMD took: {:?}", N, duration);
	}
}


fn test_fw() {
	let mut graph: Vec<f32> = thread_rng().sample_iter(&Standard).take(GRAPH_SIZE*GRAPH_SIZE).collect();

	let start = Instant::now();
	floyd::fw_dense(&mut graph); // let dists: Vec<f32> = 
	let duration = start.elapsed();
	println!("Computing Floyd Warshall on graph of size {:?} took: {:?}", GRAPH_SIZE, duration);
}


fn main() {
	test_mult();
	test_fw();
}
