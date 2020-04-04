mod utils;
use utils::console_log;

mod timer;
use timer::Timer;

// use rayon::prelude::*;
use wasm_bindgen::prelude::*;

extern crate js_sys;
extern crate web_sys;

extern crate fixedbitset;
use fixedbitset::FixedBitSet;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;


const DEFAULT_SIZE: u32 = 128;
const DEFAULT_ALIVE_INIT: f64 = 0.3;


fn get_random_boolean() -> bool {
	return js_sys::Math::random() < DEFAULT_ALIVE_INIT;
}


/// Has logical cells (*_l) & physical ones (*_p)
/// Logical are the cells you see from the outside
/// Physical is the data-structure to compute them efficiently
///
#[wasm_bindgen]
pub struct Universe {
	epoch: u32,
	width_l: u32,
	height_l: u32,
	width_p: u32,
	height_p: u32,
	cells_l: FixedBitSet,
	tmp_cells_l: FixedBitSet,
	cells_p: FixedBitSet,
	tmp_cells_p: FixedBitSet
}


/// Private implementation, for testing
impl Universe {
	/// Get the dead and alive values of the entire universe.
	pub fn get_cells(&self) -> &FixedBitSet {
		&self.cells_l
	}

	/// Set cells to be alive in a universe by passing the row and column
  /// of each (living) cell as an array.
	pub fn set_cells(&mut self, cells: &[(u32, u32)]) {
		for (row, col) in cells.iter().as_ref() {
			let idx = self.get_index_l(*row, *col);
			self.cells_l.set(idx, true);
		}
	}
}


// #[allow(unused_variables)]
#[wasm_bindgen]
impl Universe {

	/// Constructor
	///
	#[allow(unused_doc_comments)]
	pub fn new(width: Option<u32>, height: Option<u32>) -> Universe {
		/// Activating debug symbols
		// utils::set_panic_hook();
		// panic!("blahoo");

		let epoch = 0;
		let width_l = width.unwrap_or(DEFAULT_SIZE);
		let height_l = height.unwrap_or(DEFAULT_SIZE);
		let width_p = width_l + 2;
		let height_p = height_l + 2;

		let log2width = (width_l as f64).log2();
		let log2height = (height_l as f64).log2();
		if log2width.ceil() != log2width.floor() || log2height.ceil() != log2height.floor() {
			// utils::console_error("Width & height must be powers of 2 !");
			panic!("Width & height must be powers of 2 !");
		}

		let size_l = (width_l * height_l) as usize;
		let size_p = (width_p * height_p) as usize;
		let mut cells_l = FixedBitSet::with_capacity(size_l);
		let tmp_cells_l = FixedBitSet::with_capacity(size_l);
		let mut cells_p = FixedBitSet::with_capacity(size_p);
		let tmp_cells_p = FixedBitSet::with_capacity(size_p);

		/// @todo see if we can completely do away with the logical one
		/// @todo it's just a thing to keep in synchronicity...
		for i in 0..size_l {
			// FixedBitSet takes a boolean as value
			cells_l.set(i, get_random_boolean());
		}
		/// We need to initialize the physical universe as well
		/// 1. fill the indices that correspond to the logical universe
		/// 2. perform the copying phase we will later use for updating as well
		for i in 0..size_p {
			cells_p.set(i, get_random_boolean());
			// self. copy_borders();
		}

		Universe {
			epoch,
			width_l,
			height_l,
			width_p,
			height_p,
			cells_l,
			tmp_cells_l,
			cells_p,
			tmp_cells_p
		}
	}

	/// Getters
	///
	pub fn width(&self) -> u32 { self.width_l }
	pub fn height(&self) -> u32 { self.height_l }
	pub fn cells(&self) -> *const u32 {
		let _timer = Timer::new("Universe::return logical cells");
		self.cells_l.as_slice().as_ptr()
	}

	/// Setters
	///
	pub fn set_width(&mut self, width: u32) {
		self.width_l = width;
		self.reset_cells();
	}

	pub fn set_height(&mut self, height: u32) {
		self.height_l = height;
		self.reset_cells();
	}

	/// Resets one / all cells to some state.
	///
	pub fn toggle_cell(&mut self, row: u32, column: u32) {
		let idx = self.get_index_l(row, column);
		self.cells_l.set(idx, !self.cells_l[idx]);
	}

	pub fn reset_cells(&mut self) {
		let size = (self.width_l * self.height_l) as usize;
		for i in 0..size { self.cells_l.set(i, false) }
	}

	pub fn randomize_cells(&mut self) {
		// let size = (self.width_l * self.height_l) as usize;
		// for i in 0..size {
		// 	self.cells_l.set(i, get_random_boolean());
		// }
		let size = (self.width_p * self.height_p) as usize;
		for i in 0..size {
			self.cells_p.set(i, get_random_boolean());
		}
	}

	/// Universe evolution
	///
	pub fn ticks(&mut self, nr_ticks: usize) {
		let mut died_born = vec!((0, 0); nr_ticks);
		for i in 0..nr_ticks {
			// died_born[i] = self.tick();
			died_born[i] = self.tick2();
		}
	}

	fn tick(&mut self) -> (u32, u32) {
		let _timer = Timer::new("Universe::tick-1");
		self.epoch += 1;
		let mut died = 0;
		let mut born = 0;
		// let mut tmp_cells: FixedBitSet = self.cells.clone();
		{
			// let _timer = Timer::new("new generation");
			for row in 0..self.height_l {
				for col in 0..self.width_l {
					let idx = self.get_index_l(row, col);
					let live_neighbors = self.live_neighbor_count(row, col);

					let cell = self.cells_l[idx];
					let new_val = match (cell, live_neighbors) {
						(true, x) if x < 2 => false,
						(true, 2) | (true, 3) => true,
						(true, x) if x > 3 => false,
						(false, 3) => true,
						(otherwise, _) => otherwise
					};
					if cell && !new_val { died += 1 };
					if !cell && new_val { born += 1 };

					self.tmp_cells_l.set(idx, new_val);
				}
			}
		}
		{
			// let _timer = Timer::new("switch references to FixedBitSets");
			std::mem::swap(&mut self.cells_l, &mut self.tmp_cells_l);
		}
		(died, born)
	}


	fn live_neighbor_count(&self, row: u32, column: u32) -> u8 {
		let mut count = 0;

		let north = if row == 0 {
			self.height_l - 1
		} else {
			row - 1
		};

		let south = if row == self.height_l - 1 {
			0
		} else {
			row + 1
		};

		let west = if column == 0 {
			self.width_l - 1
		} else {
			column - 1
		};

		let east = if column == self.width_l - 1 {
			0
		} else {
			column + 1
		};

		let nw = self.get_index_l(north, west);
		count += self.cells_l[nw] as u8;

		let n = self.get_index_l(north, column);
		count += self.cells_l[n] as u8;

		let ne = self.get_index_l(north, east);
		count += self.cells_l[ne] as u8;

		let w = self.get_index_l(row, west);
		count += self.cells_l[w] as u8;

		let e = self.get_index_l(row, east);
		count += self.cells_l[e] as u8;

		let sw = self.get_index_l(south, west);
		count += self.cells_l[sw] as u8;

		let s = self.get_index_l(south, column);
		count += self.cells_l[s] as u8;

		let se = self.get_index_l(south, east);
		count += self.cells_l[se] as u8;

		count
	}










	/// The size of (&[u32]) cells.as_slice() is (size*size/32)
	fn tick2(&mut self) -> (u32, u32) {
		let _timer = Timer::new("Universe::tick-2");

		self.compute_borders();
		self.epoch += 1;
		let mut died = 0;
		let mut born = 0;

		for row in 0..self.height_l {
			for col in 0..self.width_l {
				let idx_l = self.get_index_l(row, col);
				let idx_p = self.get_index_p(row+1, col+1);

				let cell = self.cells_p[idx_p];
				let live_neighbors = self.live_neighbor_count_2(idx_p);

				let new_val = match (cell, live_neighbors) {
					(true, x) if x < 2 => false,
					(true, 2) | (true, 3) => true,
					(true, x) if x > 3 => false,
					(false, 3) => true,
					(otherwise, _) => otherwise
				};
				if cell && !new_val { died += 1 };
				if !cell && new_val { born += 1 };
				self.tmp_cells_l.set(idx_l, new_val);
				self.tmp_cells_p.set(idx_p, new_val);
			}
		}

		std::mem::swap(&mut self.cells_l, &mut self.tmp_cells_l);
		std::mem::swap(&mut self.cells_p, &mut self.tmp_cells_p);
		(died, born)
	}


	fn live_neighbor_count_2(&self, idx_p: usize) -> u8 {
		// utils::console_log(&format!("Source cell for neighborhood: {}", idx_p));
		let mut acc = 0;

		// let width = self.width_p as i32;
		// for j in ((-1*width)..=width).step_by(width as usize) {
		// 	for i in ((-1 as i32)..=1).step_by(1) {
		// 		let target_idx = (idx_p as isize + i as isize + j as isize) as usize;
		// 		// utils::console_log(&format!("{:?}", target_idx));
		// 		acc += self.cells_p[target_idx] as u8;
		// 	}
		// }
		// if self.cells_p[idx_p] {acc -= 1};

		acc += self.cells_p[idx_p - self.width_p as usize - 1] as u8;
		acc += self.cells_p[idx_p - self.width_p as usize] as u8;
		acc += self.cells_p[idx_p - self.width_p as usize + 1] as u8;
		acc += self.cells_p[idx_p - 1] as u8;
		acc += self.cells_p[idx_p + 1] as u8;
		acc += self.cells_p[idx_p + self.width_p as usize - 1] as u8;
		acc += self.cells_p[idx_p + self.width_p as usize] as u8;
		acc += self.cells_p[idx_p + self.width_p as usize + 1] as u8;
		acc
	}


	/// This works completely inside the physical universe
	/// Only use indices, no rows or cols ;-)
	/// @todo invoke on every `tick start`, since we cannot use the instance method @ construction
	fn compute_borders(&mut self) {
		let _timer = timer::Timer::new("Universe::Computing borders");
		// north to south (`source` el {w_p+1..2w_p-2} => {`source` + (h_p-2)w_p})
		for source in self.width_p+1..2*self.width_p-2 {
			let target = source + (self.height_p-2) * self.width_p;
			self.cells_p.set(target as usize, self.cells_p[source as usize]);
		}
		// south to north (`source` el {(h_p-1)w_p+1..h_p*w_p-2} => {`source` - (h_p-1)w_p})
		for source in (self.height_p-1)*self.width_p+1..self.height_p*self.width_p-2 {
			let target = source - (self.height_p-1)*self.width_p;
			self.cells_p.set(target as usize, self.cells_p[source as usize]);
		}
		// west to east (`source` el {w_p+1;(h_p-2)w_p+1;w_p} => {`source` + w_p-2})
		for source in (self.width_p+1..(self.height_p-2)*self.width_p+1).step_by(self.width_p as usize) {
			let target = source + self.width_p - 2;
			self.cells_p.set(target as usize, self.cells_p[source as usize]);
		}
		// east to west (`source` el {2w_p-2;(h_p-1)w_p-2;w_p} => {`source` - w_p-2})
		for source in (2*self.width_p-2..(self.height_p-1)*self.width_p-2).step_by(self.width_p as usize) {
			let target = source - self.width_p - 2;
			self.cells_p.set(target as usize, self.cells_p[source as usize]);
		}
		// move the 4 corners of the earth, uuhm, universe ;-)
		// right bottom => left top
		self.cells_p.set(0, self.cells_p[((self.height_p-1)*self.width_p-2) as usize]);
		// left bottom => right top
		self.cells_p.set((self.width_p-1) as usize, self.cells_p[((self.height_p-2)*self.width_p+1) as usize]);
		// right top => left bottom
		self.cells_p.set(((self.height_p-1)*self.width_p) as usize, self.cells_p[(2*self.width_p-2) as usize]);
		// left top => right bottom
		self.cells_p.set((self.width_p*self.height_p-1) as usize, self.cells_p[(self.width_p+1) as usize]);
	}


	fn get_index_l(&self, row: u32, column: u32) -> usize {
		(row * self.width_l + column) as usize
	}

	fn get_index_p(&self, row: u32, column: u32) -> usize {
		(row * self.width_p + column) as usize
	}

}
