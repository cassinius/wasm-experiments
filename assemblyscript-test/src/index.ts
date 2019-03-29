// ./src/index.ts

/**
 * Import the instantiateStreaming function and ASUtil class here.
 **/
import { instantiateStreaming, ASUtil } from "assemblyscript/lib/loader";

/**
 * Defining an interface like this allows you to define the shape of the exported
 * Web Assembly module. Note that each parameter will definitely be a number,
 * even if we want to push a string reference to our module. That's because all 
 * parameters must be numbers, or pointers to objects on the Web Assembly heap.
 **/
interface MyApi {
  add(a: number, b: number): number;
}

/**
 * Imports are used to specify functions that need to be linked. This will be
 * discussed in greater detail later. For now, leave the imports object empty.
 **/
const imports: any = {};

/**
 * Using the instantiateStreaming function with the await keyword requires an 
 * async function and the fetch function, but this is the best way to load an 
 * AssemblyScript module. It allows the browser to download and parse the module
 * at exactly the same time.
 **/
async function main() {
  var interop: ASUtil<MyApi> =
    await instantiateStreaming<MyApi>(fetch("../build/untouched.wasm"), imports);

  // Finally, call the add function we exported
  console.log("The result is:", interop.add(1, 2));
}
