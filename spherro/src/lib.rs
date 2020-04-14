///
/// Question 0: 
/// 

/// Question 6: Why does it work here as well.. above #[macro_use].. ?
mod util;

/// Question 1: Why do we need #[macro_use]?
/// ==> Expands syntax 
/// #[macro_use] makes all makros of a crate available (visible) to 
/// all following child modules (accelerators, particle, universe, etc...)
#[macro_use]
extern crate itertools;

/// Question 2: This would only have an effect for this module (file) !?
// use crate::itertools::*;

/// Question 3: Why don't we need the macro_use here?
/// ==> is the one from above still valid for more than one subsequent line?
// #[macro_use]
/// Question 4: Why DO we need `mod util` at all, 
/// it seems to not get expanded but also 
/// isn't used within this module itself... !?
// mod util;
// use util::*;

/// Question 5: Why does it NOT have to be `pub` mod util ??
/// ==> because actually, it didn't
// pub mod util; //TODO: make this private

extern crate rand;

mod accelerators;
mod particle;
mod universe;
mod kernel;
mod fetcher;
mod force;
/// Question 7: What does the `pub` modifier do anyways?
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