/**
 * Using a language with it's own memory management requires you to import your
 * own allocator. The tlsf allocator is a large but performant memory manager
 * that allows you to allocate things on the heap.
 **/
import "allocator/tlsf";

declare namespace console {
  function log(s: string): void;
}

function FWDense(V: i32) : void {

  // Graph instantiation
  let time_start = Date.now();
  console.log( `${time_start}` );

  // let graph = [];
  // for (var i = 0; i < V; ++i) {
  //   graph.push([]);
  //   for (var j = 0; j < V; ++j) {
  //     graph[i].push(i == j ? 0 : parseFloat( ( Math.random() * 9 + 1 )|0 ) );
  //   }
  // }
}


/**
 * Exporting a function from the index.ts file will cause AssemblyScript to
 * generate a corresponding function that will be exported to JavaScript.
 **/
function add(a: i32, b: i32): i32 {
  return a + b;
}


export {
  // FWDense
  add
}