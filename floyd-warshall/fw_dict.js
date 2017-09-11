// const V = 1034;
const V = 700;

// Graph instantiation
let time_start = +new Date;

let graph = {}
for (i = 0; i < V; ++i) {
  graph[i] = {};
  for (j = 0; j < V; ++j) {
    graph[i][j] = i == j ? 0 : parseFloat(Math.random() * 9 + 1);
  }
}

let time_graph = +new Date;
console.log(`Graph instantiation took ${time_graph - time_start} ms.`);


// FWDenseDict(graph);
// FWDenseKeys(graph);
// FWDictIdx(graph);
// let time_floyd_dense = +new Date;
// console.log(`DENSE Floyd-Warshall took ${time_floyd_dense - time_graph} ms.`);


let time_10_fold_start = +new Date;
for (let i = 0; i < 10; ++i) {
  FWDictIdx(graph);
  console.log(`Completed FWDictIdx iteration ${i}`);
}
let time_10_fold_mean = (+new Date - time_10_fold_start) / 10;
console.log(`Time 10-fold mean: ${time_10_fold_mean}`);


function FWDictIdx(graph) {
  for (k = 0; k < V; ++k) {
    for (i = 0; i < V; ++i) {
      for (j = 0; j < V; ++j) {
        let sum_legs = graph[i][k] + graph[k][j];
        if (graph[i][j] > sum_legs) {
          graph[i][j] = sum_legs;
        }
      }
    }
  }
}


function FWDenseDict(graph) {
  for (k in graph) {
    for (i in graph) {
      for (j in graph) {
        if (graph[i][j] > graph[i][k] + graph[k][j]) {
          graph[i][j] = graph[i][k] + graph[k][j];
        }
      }
    }
  }
}


function FWDenseKeys(graph) {
  var keys = Object.keys(graph);
  for (k = 0; k < keys.length; ++k) {
    for (i = 0; i < keys.length; ++i) {
      for (j = 0; j < keys.length; ++j) {
        if (graph[keys[i]][keys[j]] > graph[keys[i]][keys[k]] + graph[keys[k]][keys[j]]) {
          graph[keys[i]][keys[j]] = graph[keys[i]][keys[k]] + graph[keys[k]][keys[j]];
        }
      }
    }
  }
}