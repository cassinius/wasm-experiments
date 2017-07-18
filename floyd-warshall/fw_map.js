const V = 1034;

// Graph instantiation
let time_start = +new Date;

let graph = new Map();
for (i = 0; i < V; ++i) {
  graph.set(i, new Map());
  for (j = 0; j < V; ++j) {
    graph.get(i).set(j, i == j ? 0 : parseFloat(Math.random() * 9 + 1) );
  }
  // console.log(graph.get(i).get(0));
}

let time_graph = +new Date;
console.log(`Graph instantiation took ${time_graph - time_start} ms.`);

FWDenseMap(graph);
let time_floyd_dense = +new Date;
console.log(`DENSE Floyd-Warshall took ${time_floyd_dense - time_graph} ms.`);


function FWDenseMap(graph) {
  // var keys = graph.keys();
  for (k = 0; k < V; ++k) {
    for (i = 0; i < V; ++i) {
      for (j = 0; j < V; ++j) {
        if( graph.get(i).get(j) > graph.get(i).get(k) + graph.get(k).get(j) ) {
          graph.set(graph.get(i).get(j), graph.get(i).get(k) + graph.get(k).get(j))
        }
      }
    }
  }
}