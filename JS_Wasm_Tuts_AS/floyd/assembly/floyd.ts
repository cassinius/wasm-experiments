/// <reference path="../../node_modules/assemblyscript/index.d.ts" />

/**
 * 
 * @param graph 
 * 
 * @todo experiment with 1D array
 */
export function FW(graph: Array<Array<f32>>) : Array<Array<f32>> {
  // console.log('bla');

  let N: i32,
    k: i32,
    i: i32,
    j: i32,
    new_dist: f32;
  N = graph.length;
  for ( k = 0; k < N; ++k ) {
    for ( i = 0; i < N; ++i ) {
      for ( j = 0; j < N; ++j ) {
        new_dist =  graph[i][k] + graph[k][j];
        if ( new_dist < graph[i][j] ) {
          graph[i][j] = new_dist;
        }
      }
    }
  }
  return graph;
}

