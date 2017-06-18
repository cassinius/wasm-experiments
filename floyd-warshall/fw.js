const V = 1034;

// Graph instantiation
let time_start = +new Date;

let graph = [];
for (i = 0; i < V; ++i) {
  graph.push([]);
  for (j = 0; j < V; ++j) {
    graph[i].push(i == j ? 0 : parseFloat(Math.random() * 9 + 1) );
  }
}

let time_graph = +new Date;
console.log(`Graph instantiation took ${time_graph - time_start} ms.`);

FWDense(graph);
let time_floyd_dense = +new Date;
console.log(`DENSE Floyd-Warshall took ${time_floyd_dense - time_graph} ms.`);

FWSparse(graph);
let time_floyd_sparse = +new Date;
console.log(`SPARSE Floyd-Warshall took ${time_floyd_sparse - time_floyd_dense} ms.`);

// Rechenwerk ;-)
function FWDense(graph) {
  for (k = 0; k < V; ++k) {
    for (i = 0; i < V; ++i) {
      for (j = 0; j < V; ++j) {
        if (graph[i][j] > graph[i][k] + graph[k][j]) {
          graph[i][j] = graph[i][k] + graph[k][j];
        }
      }
    }
  }
}

// Rechenwerk ;-)
function FWSparse(graph) {
  for (k = 0; k < V; ++k) {
    for (i = 0; i < V; ++i) {
      for (j = 0; j < i; ++j) {
        if (graph[i][j] > graph[i][k] + graph[k][j]) {
          graph[j][i] = graph[i][j] = graph[i][k] + graph[k][j];
        }
      }
    }
  }
}