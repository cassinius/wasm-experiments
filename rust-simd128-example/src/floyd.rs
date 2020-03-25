// extern crate core_arch;
// use core_arch::wasm32::*;


// pub fn test
pub fn fw_dense(graph: &mut Vec<f32>) {
  let graph_size: usize = (graph.len() as f64).sqrt() as usize;
  println!("Received graph of size {:?}", graph_size);
  let mut new_dist: f32;
  for k in 0..1 { //graph_size {
    for i in 0..graph_size {
      for j in 0..graph_size {
        new_dist = get(graph, graph_size, i, k) + get(graph, graph_size, k, j);
        if get(graph, graph_size, i, j) > new_dist {
          set(graph, graph_size, i, j, new_dist);
        }
      }
    }
  }
  // return graph;
}


fn get(graph: &Vec<f32>, len: usize, i:usize, j:usize) -> f32 {
  return graph[j + len * i];
}


fn set(graph: &mut Vec<f32>, len: usize, i:usize, j:usize, val: f32) {
  graph[j + len * i] = val;
}
