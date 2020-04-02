mod utils;

extern crate js_sys;

use wasm_bindgen::prelude::*;

extern crate fixedbitset;

use fixedbitset::FixedBitSet;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

extern crate web_sys;


// A macro to provide `println!(..)`-style syntax for `console.log` logging.
// #[allow(unused_macros)]
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

const DEFAULT_SIZE: u32 = 128;
const DEFAULT_ALIVE_INIT: f64 = 0.3;


#[wasm_bindgen]
pub struct Universe {
	epoch: u32,
	width: u32,
	height: u32,
	cells: FixedBitSet,
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
	/// Getters
	pub fn width(&self) -> u32 { self.width }
	pub fn height(&self) -> u32 { self.height }
	pub fn cells(&self) -> *const u32 { self.cells.as_slice().as_ptr() }

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

	/// Setters
	pub fn set_width(&mut self, width: u32) {
		self.width = width;
		self.reset_cells();
	}
	pub fn set_height(&mut self, height: u32) {
		self.height = height;
		self.reset_cells();
	}


	pub fn new() -> Universe {
		// utils::set_panic_hook();
		// panic!("blahoo");

		let epoch = 0;
		let width = DEFAULT_SIZE;
		let height = DEFAULT_SIZE;
		let size = (width * height) as usize;
		let mut cells = FixedBitSet::with_capacity(size);

		for i in 0..size {
			// FixedBitSet takes a boolean as value
			cells.set(i, js_sys::Math::random() < DEFAULT_ALIVE_INIT);
		}

		Universe {
			epoch,
			width,
			height,
			cells,
		}
	}


	pub fn ticks(&mut self, nr_ticks: usize) {
		let mut changes = vec![(0, 0); nr_ticks];
		for i in 0..nr_ticks {
			changes[i] = self.tick();
		}
		let died: u32 = changes.iter().map(|&x| x.0).sum();
		let born: u32 = changes.iter().map(|&x| x.1).sum();
		log!("Epoch {}: {} cells died & {} cells were newly born.", self.epoch, died, born);
	}


	fn tick(&mut self) -> (u32, u32) {
		self.epoch += 1;
		let mut next = self.cells.clone();
		let mut dead_alive = 0;
		let mut alive_dead = 0;

		for row in 0..self.height {
			for col in 0..self.width {
				let idx = self.get_index(row, col);
				let cell = self.cells[idx];
				let live_neighbors = self.live_neighbor_count(row, col);
				// log!("cell[{}, {}] is initially {:?} and has {} live neighbors", row, col, cell, live_neighbors);

				let new_val = match (cell, live_neighbors) {
					(true, x) if x < 2 => false,
					(true, 2) | (true, 3) => true,
					(true, x) if x > 3 => false,
					(false, 3) => true,
					(otherwise, _) => otherwise
				};
				if cell && new_val != cell { alive_dead += 1 };
				if !cell && new_val != cell { dead_alive += 1 };
				next.set(idx, new_val);
				// log!("    it becomes {:?}", next[idx]);
			}
		}
		self.cells = next;
		return (dead_alive, alive_dead);
	}

	// #[inline]
	// #[inline(always)]
	fn get_index(&self, row: u32, column: u32) -> usize {
		(row * self.width + column) as usize
	}

	/**
	 * `(row - 1 + self.height) & self.height` enables the wrapping
	 *  - (33-1+512) % 512 = 32
	 *  - (0-1+512) % 512 = 511
	 */
	fn live_neighbor_count(&self, row: u32, column: u32) -> u8 {
		let mut count = 0;
		for delta_row in [self.height - 1, 0, 1].iter().cloned() {
			for delta_col in [self.width - 1, 0, 1].iter().cloned() {
				if delta_row == 0 && delta_col == 0 {
					continue;
				}

				let neighbor_row = (row + delta_row) % self.height;
				let neighbor_col = (column + delta_col) % self.width;
				let idx = self.get_index(neighbor_row, neighbor_col);
				count += self.cells[idx] as u8;
			}
		}
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
