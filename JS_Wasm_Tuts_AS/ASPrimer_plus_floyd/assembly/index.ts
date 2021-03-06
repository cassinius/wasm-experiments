/**
 * Not supported anymore, since AS now comes pre-configured with a GC enabled Runtime
 * (Runtime = Allocator + GC)
 */
// import "allocator/tlsf";
// export { memory };

export const Uint16ArrayID = idof<Uint16Array>();
export const Uint32ArrayID = idof<Uint32Array>();
export const Float32ArrayID = idof<Float32Array>();
export const StringID = idof<string>();


/**
 * Number -> Number => No Heap operations necessary
 */
export function add(a: i32, b: i32): i32 {
  return a + b;
}


/**
 * String -> Number
 */
export function sayHiToRobot(name: string) : i32 {
  // Equality not === like in JS/TS
  if ( name == "r2d2") {
    return 1;
  }
  else {
    return -1;
  }
}


/**
 * String -> String
 */
export function sayHiTo(name: string) : string {
  // string interpolation doesn't work (`${}`)
  return 'Hi, ' + name + '!';
}


/**
 * Float32Array -> i32
 */
export function sum(arr: Float32Array) : f32 {
  return arr.reduce<f32>((acc, n) => acc + n, 0);
}


/**
 * Float32Array -> Float32Array
 */
export function doubleArr(arr: Float32Array) : Float32Array {
  return arr.map(n => n*2);
}


/**
 * Floyd Warshall (1D array)
 * 
 * @param graph array vs. pointer to array !?
 */
export function FloydWarshall(graph: Float32Array) : Float32Array {
  let g = graph; // seems to copy !?

  let N: i32 = <i32>Math.sqrt(graph.length);
  let k: i32,
      i: i32,
      j: i32,
      // ij: i32,
      // ik: i32,
      // kj: i32
      new_dist: f32;
  
  for ( k = 0; k < N; ++k ) {
    for ( i = 0; i < N; ++i ) {
      for ( j = 0; j < N; ++j ) {

        // ij = load<f32>(graph + i*N+j);
        // ik = load<f32>(graph + i*N+k);
        // kj = load<f32>(graph + k*N+j);
        // if ( ik + kj < ij) {
        //   store<f32>(graph + i*N+j, ik+kj);
        // }

        new_dist = g[i*N+k] + g[k*N+j];
        
        if ( new_dist < g[i*N+j] ) {
          g[i*N+j] = new_dist;
        }
      }
    }
  }
  return g;
}


// const arrptr = new Array<f32>(400);
// const bla = new Float32Array(1000);
