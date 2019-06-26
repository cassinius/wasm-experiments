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
  return 'Hi, ' + name + '!';
  // return name;
}


/**
 * Float32Array -> i32
 */
export function sum(arr: Float32Array, length: i32) : f32 {
  // NO reducer in AS ??

  let sum: f32 = 0.0;
  let i: i32;
  for (i = 0; i < length; i++ ) {
    sum += arr[i];
  }
  return sum;
}


/**
 * Float32Array -> Float32Array
 */
export function doubleArr(arr: Float32Array, length: i32) : Float32Array {
  let result = new Float32Array(length);
  for (let i: i32 = 0; i < length; i++ ) {
    result[i] = 2 * arr[i];
  }
  return result;
}

// const arrptr = new Array<f32>(400);
// const bla = new Float32Array(1000);
