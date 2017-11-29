// const V = 1034;
const V = 700;

// Graph instantiation
let time_start = +new Date;

let graph = [];
for (i = 0; i < V; ++i) {
  graph.push([]);
  for (j = 0; j < V; ++j) {
    graph[i].push(i == j ? 0 : parseFloat( ( Math.random() * 9 + 1 )|0 ) );
  }
}

let time_graph = +new Date;
console.log(`Graph instantiation took ${time_graph - time_start} ms.`);

// FWDense(graph);
// let time_floyd_dense = +new Date;
// console.log(`DENSE Floyd-Warshall took ${time_floyd_dense - time_graph} ms.`);

// FWSparse(graph);
// let time_floyd_sparse = +new Date;
// console.log(`SPARSE Floyd-Warshall took ${time_floyd_sparse - time_floyd_dense} ms.`);


let time_10_fold_start = +new Date;
for (let i = 0; i < 10; ++i) {
  FWDense(graph);
  console.log(`Completed FWDense iteration ${i}`);
}
let time_10_fold_mean = (+new Date - time_10_fold_start) / 10;
console.log(`Time 10-fold mean: ${time_10_fold_mean}`);


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

// Rechenwerk ;-)
// This one makes no sense and was just to check 'for of' performance on arrays
// function FWDenseOf(graph) {
//   for (k of graph[0]) {
//     for (i of graph[0]) {
//       for (j of graph[0]) {
//         // console.log(`${i}, ${j}`);
//         if (graph[i][j] > graph[i][k] + graph[k][j]) {
//           graph[i][j] = graph[i][k] + graph[k][j];
//         }
//       }
//     }
//   }
// }