use crate::util::{Vector2f, Color};
use crate::accelerators::{HasPosition};

#[repr(C)]
#[derive(Clone, Debug)]
pub struct Particle {
    pub pos: Vector2f,
    pub vel: Vector2f,
    pub mass: f32,

    /// what is rho of a particle ??
    pub rho: f32,
    /// what is the pressure of a particle ??
    pub pressure: f32,

    /// The color is more of a way to debug things than an actual property
    /// of the particle.
    pub col: Color,
}

impl HasPosition for Particle {
    fn position(&self) -> Vector2f {
        self.pos
    }
}