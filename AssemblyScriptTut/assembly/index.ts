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
  // No reducer in AS ?? ...
  let sum: f32 = 0.0;
  let i: i32;
  for (i = 0; i < arr.length; i++ ) {
    sum += arr[i];
  }
  return sum;
}


/**
 * Float32Array -> Float32Array
 */
export function doubleArr(arr: Float32Array) : Float32Array {
  return arr.map(n => n*2);
}


var N: i32;

// @inline
// function get(x: u32, y: u32): f32 {
//   return load<u32>((y * N + x) << 2);
// }


// /** Sets an output pixel in the range [s, 2*s]. */
// @inline
// function set(x: u32, y: u32, v: f32): void {
//   store<u32>((s + y * w + x) << 2, v);
// }


/**
 * Floyd Warshall (1D array)
 */
export function FloydWarshall(graph: Float32Array) : Float32Array {
  N = <i32>Math.sqrt(graph.length);
  let k: i32,
      i: i32,
      j: i32,
      new_dist: f32;
  
  for ( k = 0; k < N; ++k ) {
    for ( i = 0; i < N; ++i ) {
      for ( j = 0; j < N; ++j ) {

        // new_dist = graph[i*N+k] + graph[k*N+j];
        
        // if ( new_dist < graph[i*N+j] ) {
        //   graph[i*N+j] = new_dist;
        // }
        // new_dist = <f32>(k * i /  (j+1));
      }
    }
  }
  return graph;
}


// const arrptr = new Array<f32>(400);
// const bla = new Float32Array(1000);
