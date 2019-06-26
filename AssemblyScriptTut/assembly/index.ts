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
  // let result = new Float32Array(arr.length);
  // for (let i: i32 = 0; i < arr.length; i++ ) {
  //   result[i] = 2 * arr[i];
  // }
  // return result;
}



@inline
function get(graph: Float32Array, N: i32, i: i32, j: i32) : f32 {
  return graph[i*N + j];
}

@inline
function set(graph: Float32Array, N: i32, i: i32, j: i32, val: f32) : void {
  graph[i*N + j] = val;
}

/**
 * Floyd Warshall (1D array)
 */
export function FloydWarshall(graph: Float32Array) : Float32Array {
  let N: i32 = <i32>Math.sqrt(graph.length);
  
  for ( let k: i32 = 0; k < N; ++k ) {
    for ( let i: i32 = 0; i < N; ++i ) {
      for ( let j: i32 = 0; j < N; ++j ) {
        let new_dist: f32 = get(graph,N,i,k) + get(graph,N,k,j);
        
        if ( new_dist < get(graph,N,i,j) ) {
          set(graph, N, i, j, new_dist);
        }
      }
    }
  }
  return graph;
}


// const arrptr = new Array<f32>(400);
// const bla = new Float32Array(1000);
