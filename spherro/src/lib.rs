

/// Expands name 
/// #[macro_use] makes all makros of a crate available (visible) to 
/// all following child modules (accelerators, particle, universe, etc...)
#[macro_use]
extern crate itertools;

/// This would only have an effect for this module (file) !?
// use crate::itertools::*;

/// Why don't we need the macro_use here?
// #[macro_use]
/// Why DO we need `mod util` at all, 
/// it seems to not get expanded but also 
/// isn't used within this module itself... !?
mod util;
// use util::*;

/// Why does it not have to be `pub` mod util ??
/// pub mod util


/// Actually, didn't need to be public
// pub mod util; //TODO: make this private

extern crate rand;

mod accelerators;
mod particle;
mod universe;
mod kernel;
mod fetcher;
mod force;
pub mod initializer;

// Re-export some names for flatter syntax
pub use particle::Particle;
pub use universe::Universe;
pub use fetcher::Fetcher;
pub use force::Force;
pub use initializer::Config;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;