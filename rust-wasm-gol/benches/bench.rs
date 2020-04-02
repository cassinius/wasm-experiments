#![allow(unused_variables)]
#![feature(test)]

extern crate test;
extern crate rust_wasm_gol;

#[bench]
fn universe_ticks(b: &mut test::Bencher) {
	let mut universe = rust_wasm_gol::Universe::new();

	b.iter(|| {
		universe.ticks(1);
	});
}
