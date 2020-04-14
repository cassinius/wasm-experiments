#![feature(stmt_expr_attributes)]

mod utils;

// mod timer;
// use timer::Timer;

use wasm_bindgen::prelude::*;

extern crate js_sys;
extern crate web_sys;
extern crate wasm_timer;
use wasm_timer::{Instant};

extern crate fixedbitset;
use fixedbitset::FixedBitSet;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

const DEFAULT_SIZE: u32 = 128;
const DEFAULT_ALIVE_RATIO: f64 = 0.3;


fn get_random_boolean() -> bool {
	js_sys::Math::random() < DEFAULT_ALIVE_RATIO
}


/// Has logical cells (*_l) & physical ones (*_p)
/// Logical are the cells you see from the outside
/// Physical is the data-structure to compute them efficiently
///
#[wasm_bindgen]
pub struct Universe {
	epoch: u32,
	width: u32,
	height: u32,
	cells: FixedBitSet,
	tmp_cells: FixedBitSet,
	tick_times: Vec<i32>
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
			let idx = self.get_index_l(*row, *col);
			self.cells.set(idx, true);
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
		utils::set_panic_hook();

		/// Initialize thread pool
		// rayon::ThreadPoolBuilder::new().num_threads(22).build_global().unwrap();

		let epoch = 0;
		let width_l = width.unwrap_or(DEFAULT_SIZE);
		let height_l = height.unwrap_or(DEFAULT_SIZE);

		// Thought this would make cell position calculation easier, but it turns out it doesn't
		// let log2width = (width_l as f64).log2();
		// let log2height = (height_l as f64).log2();
		// if log2width.ceil() != log2width.floor() || log2height.ceil() != log2height.floor() {
		// 	panic!("Width & height must be powers of 2 !");
		// }

		let size_l = (width_l * height_l) as usize;
		let mut cells_l = FixedBitSet::with_capacity(size_l);
		let tmp_cells_l = FixedBitSet::with_capacity(size_l);

		for i in 0..size_l {
			// FixedBitSet takes a boolean as value
			cells_l.set(i, get_random_boolean());
		}

		Universe {
			epoch,
			width: width_l,
			height: height_l,
			cells: cells_l,
			tmp_cells: tmp_cells_l,
			tick_times: vec![]
		}
	}

	/// Getters
	///
	pub fn width(&self) -> u32 { self.width }
	pub fn height(&self) -> u32 { self.height }
	pub fn cells(&self) -> *const u32 { self.cells.as_slice().as_ptr() }

	/// Setters
	///
	pub fn set_width(&mut self, width: u32) {
		self.width = width;
		self.reset_cells();
	}

	pub fn set_height(&mut self, height: u32) {
		self.height = height;
		self.reset_cells();
	}

	/// Resets one / all cells to some state.
	///
	pub fn toggle_cell(&mut self, row: u32, col: u32) {
		let idx_l = self.get_index_l(row, col);
		self.cells.set(idx_l, !self.cells[idx_l]);
	}

	pub fn reset_cells(&mut self) {
		let size_l = (self.width * self.height) as usize;
		for idx_l in 0..size_l { self.cells.set(idx_l, false) }
	}

	pub fn randomize_cells(&mut self) {
		for row in 0..self.height {
			for col in 0..self.width {
				let idx_l = self.get_index_l(row, col);
				let val = get_random_boolean();
				self.cells.set(idx_l, val);
			}
		}
	}

	fn update_averages(&mut self, duration: i32) {
		if self.tick_times.len() > 99 {
			self.tick_times.drain(0..1);
		}
		self.tick_times.push(duration);
		let sum: i32 = Iterator::sum(self.tick_times.iter());
		let avg = f64::from(sum) / (self.tick_times.len() as f64);
		utils::console_log(&format!("Avg. duration (last 100 ticks): {:?} ms.", avg / 1e3));
	}

	/// Universe evolution
	///
	pub fn ticks(&mut self, nr_ticks: usize) {
		// let mut died_born = vec!((0, 0); nr_ticks);
		for _i in 0..nr_ticks {
			self.epoch += 1;
			let tic = Instant::now();

			/// We need something like that, just in wasm...
			// rayon::join(
			// 	|| self.tick(0, self.height / 2, 0, self.width),
			// 	|| self.tick(self.height / 2, self.height, 0, self.width),
			// );

			self.cells = self.tick(0, self.height, 0, self.width);

			let elapsed = tic.elapsed().as_micros() as i32;
			self.update_averages(elapsed);
		}
	}

	fn tick(&self, row_start: u32, row_end: u32, col_start: u32, col_end: u32) -> FixedBitSet {
		// let _timer = Timer::new("Universe::tick-1");
		// let mut died = 0;
		// let mut born = 0;
		let cells_size = ((row_end - row_start) * (col_end - col_start)) as usize;
		let mut cells = FixedBitSet::with_capacity(cells_size);
		{
			// let _timer = Timer::new("new generation");
			for row in row_start..row_end { //} 0..self.height {
				for col in col_start..col_end { //} 0..self.width {
					let idx = self.get_index_l(row, col);

					// let live_neighbors = 2;
					let live_neighbors = self.live_neighbor_count(row, col);

					let cell = self.cells[idx];
					let new_val = match (cell, live_neighbors) {
						(true, x) if x < 2 => false,
						(true, 2) | (true, 3) => true,
						(true, x) if x > 3 => false,
						(false, 3) => true,
						(otherwise, _) => otherwise
					};
					// if cell && !new_val { died += 1 };
					// if !cell && new_val { born += 1 };

					cells.set(idx, new_val);
				}
			}
		}
		{
			// let _timer = Timer::new("switch references to FixedBitSets");
			// std::mem::swap(&mut self.cells, &mut self.tmp_cells);
		}
		// (died, born)
		cells
	}


	/// 4x edge checks
	/// 8x index computation
	/// 8x grid access
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

		let nw = self.get_index_l(north, west);
		count += self.cells[nw] as u8;

		let n = self.get_index_l(north, column);
		count += self.cells[n] as u8;

		let ne = self.get_index_l(north, east);
		count += self.cells[ne] as u8;

		let w = self.get_index_l(row, west);
		count += self.cells[w] as u8;

		let e = self.get_index_l(row, east);
		count += self.cells[e] as u8;

		let sw = self.get_index_l(south, west);
		count += self.cells[sw] as u8;

		let s = self.get_index_l(south, column);
		count += self.cells[s] as u8;

		let se = self.get_index_l(south, east);
		count += self.cells[se] as u8;

		count
	}


	fn get_index_l(&self, row: u32, column: u32) -> usize {
		(row * self.width + column) as usize
	}

}
