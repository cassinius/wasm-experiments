/**
 * Using a language with it's own memory management requires you to import your
 * own allocator. The tlsf allocator is a large but performant memory manager
 * that allows you to allocate things on the heap.
 **/
import "allocator/tlsf";

@external("env", "logGraph") 
declare function logGraph(val: Array<Array<i32>>) : void;

@external("env", "logi") 
declare function logi(val: i32) : void;

Math.seedRandom(8190327419327409137);

let graph : Array<Array<i32>>;


function instantiateGraph(V: i32) : void {
  graph = new Array( V );
  // logi( graph.length );
  // logGraph( graph );

  for (var i = 0; i < V; ++i) {
    graph[i] = new Array( V );
    // logi( graph[i].length );

    for (var j = 0; j < V; ++j) {
      graph[i][j] = <i32>(Math.random() * 9 + 1);
    }
  }
} 

// Rechenwerk ;-)
function FWDense() : void {
  let V = graph.length;
  for (let k = 0; k < V; ++k) {
    for (let i = 0; i < V; ++i) {
      for (let j = 0; j < V; ++j) {
        if (graph[i][j] > graph[i][k] + graph[k][j]) {
          graph[i][j] = graph[i][k] + graph[k][j];
        }
      }
    }
  }
}


/**
 * Exporting a function from the index.ts file will cause AssemblyScript to
 * generate a corresponding function that will be exported to JavaScript.
 **/
function add(a: i32, b: i32): i32 {
  return a + b;
}


export {
  instantiateGraph,
  FWDense,
  add
}