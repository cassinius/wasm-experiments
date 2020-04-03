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
	width: u32,
	height: u32,
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
			let idx = self.get_index(*row, *col);
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
		utils::set_panic_hook();
		// panic!("blahoo");

		let epoch = 0;
		let width = width.unwrap_or(DEFAULT_SIZE);
		let height = height.unwrap_or(DEFAULT_SIZE);
		let log2width = (width as f64).log2();
		let log2height = (height as f64).log2();
		if log2width.ceil() != log2width.floor() || log2height.ceil() != log2height.floor() {
			// utils::console_error("Width & height must be powers of 2 !");
			panic!("Width & height must be powers of 2 !");
		}
		let size = (width * height) as usize;
		let size_physical = ((width + 2) * (height + 2)) as usize;
		let mut cells_l = FixedBitSet::with_capacity(size);
		let mut tmp_cells_l = FixedBitSet::with_capacity(size);
		let mut cells_p = FixedBitSet::with_capacity(size_physical);
		let mut tmp_cells_p = FixedBitSet::with_capacity(size_physical);

		for i in 0..size {
			// FixedBitSet takes a boolean as value
			cells_l.set(i, get_random_boolean());

			// cells_physical.set()
		}

		Universe {
			epoch,
			width,
			height,
			cells_l,
			tmp_cells_l,
			cells_p,
			tmp_cells_p
		}
	}

	/// Index conversion between logical & physical universes
	///
	fn l2p(&self, idx_l: usize) -> usize {

	}

	/// Getters
	///
	pub fn width(&self) -> u32 { self.width }
	pub fn height(&self) -> u32 { self.height }
	pub fn cells(&self) -> *const u32 { self.cells_l.as_slice().as_ptr() }

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
	///
	pub fn toggle_cell(&mut self, row: u32, column: u32) {
		let idx = self.get_index(row, column);
		self.cells_l.set(idx, !self.cells_l[idx]);
	}

	pub fn reset_cells(&mut self) {
		let size = (self.width * self.height) as usize;
		self.cells_l = FixedBitSet::with_capacity(size);
		for i in 0..size { self.cells_l.set(i, false) }
	}

	pub fn randomize_cells(&mut self) {
		let size = (self.width * self.height) as usize;
		for i in 0..size {
			self.cells_l.set(i, get_random_boolean());
		}
	}

	/// Universe evolution
	///
	pub fn ticks(&mut self, nr_ticks: usize) {
		let mut died_born = vec!((0, 0); nr_ticks);
		for i in 0..nr_ticks {
			died_born[i] = self.tick();
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
			for row in 0..self.height {
				for col in 0..self.width {
					let idx = self.get_index(row, col);
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
			self.cells_l = self.tmp_cells_l.clone();
		}
		(died, born)
	}


	/// The size of (&[u32]) cells.as_slice() is (size*size/32)
	fn tick2(&mut self) -> (u32, u32) {
		let _timer = Timer::new("Universe::tick-2");
		self.epoch += 1;
		let mut died = 0;
		let mut born = 0;
		let size = (self.width * self.height) as usize;

		// let cells_u32 = self.cells.as_slice();
		// console_log(&format!("u32 length of cells: {:?}", cells_u32.len()));
		// (0..size).into_par_iter();

		for i in 0..size {
			let row = self.get_row(i);
			let col = self.get_col(i);
			let live_neighbors = self.live_neighbor_count(row, col);
			let cell = self.cells_l[i];
			let new_val = match (cell, live_neighbors) {
				(true, x) if x < 2 => false,
				(true, 2) | (true, 3) => true,
				(true, x) if x > 3 => false,
				(false, 3) => true,
				(otherwise, _) => otherwise
			};
			if cell && !new_val { died += 1 };
			if !cell && new_val { born += 1 };
			self.tmp_cells_l.set(i, new_val);
		}
		self.cells_l = self.tmp_cells_l.clone();

		(died, born)
	}

	fn get_row(&self, idx: usize) -> u32 {
		(idx / (self.width as usize)) as u32
	}

	fn get_col(&self, idx: usize) -> u32 {
		(idx % (self.width as usize)) as u32
	}

	// #[inline]
	// #[inline(always)]
	fn get_index(&self, row: u32, column: u32) -> usize {
		(row * self.width + column) as usize
	}


	// fn live_neighbor_count_2(&self, idx: usize) -> u8 {
	//
	// }


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
		count += self.cells_l[nw] as u8;

		let n = self.get_index(north, column);
		count += self.cells_l[n] as u8;

		let ne = self.get_index(north, east);
		count += self.cells_l[ne] as u8;

		let w = self.get_index(row, west);
		count += self.cells_l[w] as u8;

		let e = self.get_index(row, east);
		count += self.cells_l[e] as u8;

		let sw = self.get_index(south, west);
		count += self.cells_l[sw] as u8;

		let s = self.get_index(south, column);
		count += self.cells_l[s] as u8;

		let se = self.get_index(south, east);
		count += self.cells_l[se] as u8;

		count
	}
}
