mod utils;
mod timer;
use timer::Timer;

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


// A macro to provide `println!(..)`-style syntax for `console.log` logging.
#[allow(unused_macros)]
macro_rules! log {
    ( $( $t:tt )* ) => {
        web_sys::console::log_1(&format!( $( $t )* ).into());
    }
}

// #[wasm_bindgen]
// // Cell is represented as single Byte
// #[repr(u8)]
// #[derive(Clone, Copy, Debug, PartialEq, Eq)]
// pub enum Cell {
// 	Dead = 0,
// 	Alive = 1,
// }

const DEFAULT_SIZE: u32 = 150;
const DEFAULT_ALIVE_INIT: f64 = 0.3;


fn get_random_boolean() -> bool {
	return js_sys::Math::random() < DEFAULT_ALIVE_INIT;
}


#[wasm_bindgen]
pub struct Universe {
	epoch: u32,
	width: u32,
	height: u32,
	cells: FixedBitSet,
	tmp_cells: FixedBitSet,
	/// will logically store tuples of (row, column, new_val), but we
	/// flatten it right from the start, so no conversion is necessary
	changed_cells: Vec<u32>,
	nr_changed: u32
}


/// Private implementation, for testing
impl Universe {
	/// Get the dead and alive values of the entire universe.
	pub fn get_cells(&self) -> &FixedBitSet {
		&self.cells
	}

	/// Set cells to be alive in a universe by passing the row and column
  /// of each (living) cell as an array.
	pub fn set_cells(&mut self, cells: &[(u32, u32)]) {
		for (row, col) in cells.iter().as_ref() {
			let idx = self.get_index(*row, *col);
			self.cells.set(idx, true);
		}
	}
}


// #[allow(unused_variables)]
#[wasm_bindgen]
impl Universe {

	pub fn new() -> Universe {
		// utils::set_panic_hook();
		// panic!("blahoo");

		let epoch = 0;
		let width = DEFAULT_SIZE;
		let height = DEFAULT_SIZE;
		let size = (width * height) as usize;
		let mut cells = FixedBitSet::with_capacity(size);
		let tmp_cells = FixedBitSet::with_capacity(size);
		for i in 0..size {
			// FixedBitSet takes a boolean as value
			cells.set(i, get_random_boolean());
		}
		// we expect max 20 iterations (ticks) to be computed at once
		let mut changed_cells = vec!(0; 2*size+1);
		// first i16 is reserved for nr_changed which we also return to JS
		changed_cells.push(0);
		let nr_changed = 0;

		Universe {
			epoch,
			width,
			height,
			cells,
			tmp_cells,
			changed_cells,
			nr_changed
		}
	}


	/// Getters
	pub fn width(&self) -> u32 { self.width }
	pub fn height(&self) -> u32 { self.height }
	pub fn cells(&self) -> *const u32 { self.cells.as_slice().as_ptr() }
	pub fn diffs(&mut self) -> *const u32 {
		self.changed_cells[0] = self.nr_changed;
		self.changed_cells.as_slice().as_ptr()
	}

	/// Resets all cells to the dead state.
	pub fn reset_cells(&mut self) {
		let size = (self.width * self.height) as usize;
		self.cells = FixedBitSet::with_capacity(size);
		for i in 0..size { self.cells.set(i, false) }
	}

	pub fn toggle_cell(&mut self, row: u32, column: u32) {
		let idx = self.get_index(row, column);
		self.cells.set(idx, !self.cells[idx]);
	}

	pub fn randomize_cells(&mut self) {
		let size = (self.width * self.height) as usize;
		for i in 0..size {
			self.cells.set(i, get_random_boolean());
		}
	}

	/// Setters
	pub fn set_width(&mut self, width: u32) {
		self.width = width;
		self.reset_cells();
	}
	pub fn set_height(&mut self, height: u32) {
		self.height = height;
		self.reset_cells();
	}


	pub fn ticks(&mut self, nr_ticks: usize) {
		for _i in 0..nr_ticks {
				// Reset changes
				// self.nr_changed = 0;
				// let size = (self.width * self.height) as usize;
				// self.changed_cells = vec!(0; size*2+1);
			self.tick();
		}
	}


	fn tick(&mut self) {
		let _timer = Timer::new("Universe::tick");
		self.epoch += 1;

		{
			// let _timer = Timer::new("new generation");
			for row in 0..self.height {
				for col in 0..self.width {
					let idx = self.get_index(row, col);
					let cell = self.cells[idx];
					let live_neighbors = self.live_neighbor_count(row, col);

					let new_val = match (cell, live_neighbors) {
						(true, x) if x < 2 => false,
						(true, 2) | (true, 3) => true,
						(true, x) if x > 3 => false,
						(false, 3) => true,
						(otherwise, _) => otherwise
					};

					// if new_val {
					// 	self.nr_changed += 1;
					// 	self.changed_cells[self.nr_changed as usize *2] = row;
					// 	self.changed_cells[self.nr_changed as usize *2 + 1] = col;
					// }
					self.tmp_cells.set(idx, new_val);
				}
			}
		}

		{
			// let _timer = Timer::new("switch references to FixedBitSets");
			self.cells = self.tmp_cells.clone();
		}
	}

	// #[inline]
	// #[inline(always)]
	fn get_index(&self, row: u32, column: u32) -> usize {
		(row * self.width + column) as usize
	}


	fn live_neighbor_count(&self, row: u32, column: u32) -> u8 {
		let mut count = 0;

		let north = if row == 0 {
			self.height - 1
		} else {
			row - 1
		};

		let south = if row == self.height - 1 {
			0
		} else {
			row + 1
		};

		let west = if column == 0 {
			self.width - 1
		} else {
			column - 1
		};

		let east = if column == self.width - 1 {
			0
		} else {
			column + 1
		};

		let nw = self.get_index(north, west);
		count += self.cells[nw] as u8;

		let n = self.get_index(north, column);
		count += self.cells[n] as u8;

		let ne = self.get_index(north, east);
		count += self.cells[ne] as u8;

		let w = self.get_index(row, west);
		count += self.cells[w] as u8;

		let e = self.get_index(row, east);
		count += self.cells[e] as u8;

		let sw = self.get_index(south, west);
		count += self.cells[sw] as u8;

		let s = self.get_index(south, column);
		count += self.cells[s] as u8;

		let se = self.get_index(south, east);
		count += self.cells[se] as u8;

		count
	}
}


#[wasm_bindgen]
pub fn greet(name: &str) {
	utils::console_log(&format!("Hello, {}!", name));
	utils::console_log(&format!("Random f32: {}", js_sys::Math::random()));
	// utils::console_error("ERROR: WHHOOOAAAAAAAAAA.....");
}


/// This is only necessary with private functions and w/o wasm_bindgen,
/// since otherwise the function is exposed and *might* be called
/// from the outside...
#[allow(dead_code)]
fn unused_function() {
	println!("Don't use me!")
}
