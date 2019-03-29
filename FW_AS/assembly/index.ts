/**
 * Using a language with it's own memory management requires you to import your
 * own allocator. The tlsf allocator is a large but performant memory manager
 * that allows you to allocate things on the heap.
 **/
import "allocator/tlsf";

@external("env", "logi") 
declare function logi(val: i32) : void;

Math.seedRandom(8190327419327409137);

// let graph : Array<Array<i32>>;
let V : i32;
let graph : Array<i32>;


function instantiateGraph(v: i32) : void {
  V = v;
  graph = new Array( V*V );
  // logi( graph.length );

  for (var i = 0; i < V*V; ++i) {
    graph[i] = <i32>(Math.random() * 9 + 1);
  }
}

// Rechenwerk ;-)
function FWDense() : void {
  let k: i32, i: i32, j: i32;

  for (k = 0; k < V; ++k) {
    for (i = 0; i < V; ++i) {
      for (j = 0; j < V; ++j) {
        let new_val = getGraphIJ(i, k) + getGraphIJ(k, j)
        if ( getGraphIJ(i, j) > new_val ) {
          setGraphIJ( i, j, new_val )
        }
      }
    }
  }
}

@inline
function getGraphIJ( i: i32, j: i32 ) : i32 {
  return graph[i * V + j]
}

@inline
function setGraphIJ( i: i32, j: i32, val: i32 ) : void {
  graph[i * V + j] = val
}


export {
  instantiateGraph,
  FWDense
}