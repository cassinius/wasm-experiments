#include <iostream>
#include <string>
#include <chrono>

using namespace std;

typedef std::chrono::high_resolution_clock Clock;
typedef std::chrono::milliseconds milliseconds;

const unsigned int V = 1034;

// Rechenwerk ;-)
void FWDense(unsigned int graph[V][V]) {
  for (unsigned int k = 0; k < V; ++k) {
    for (unsigned int i = 0; i < V; ++i) {
      for (unsigned int j = 0; j < V; ++j) {
        if (graph[i][j] > graph[i][k] + graph[k][j]) {
          graph[i][j] = graph[i][k] + graph[k][j];
        }
      }
    }
  }
}

// Rechenwerk ;-)
void FWSparse(unsigned int graph[V][V]) {
  for (unsigned int k = 0; k < V; ++k) {
    for (unsigned int i = 0; i < V; ++i) {
      for (unsigned int j = 0; j < i; ++j) {
        if (graph[i][j] > graph[i][k] + graph[k][j]) {
          graph[j][i] = graph[i][j] = graph[i][k] + graph[k][j];
        }
      }
    }
  }
}


int main() {
  // Graph instantiation
  Clock::time_point time_start = Clock::now();

  unsigned int graph[V][V];
  for (unsigned int i = 0; i < V; ++i) {
    for (unsigned int j = 0; j < V; ++j) {
      graph[i][j] = i == j ? 0 : 999999; // parseFloat(Math.random() * 9 + 1)
    }
  }

  Clock::time_point time_10_fold_start = Clock::now();
  for (unsigned int i = 0; i < 10; ++i) {
    FWDense(graph);
    cout << "Completed FWDense iteration " << i << endl;
  }
  Clock::time_point time_10_fold_stop = Clock::now();
  milliseconds time_10_fold_mean = std::chrono::duration_cast<milliseconds>( (time_10_fold_stop - time_10_fold_start ) / 10 );
  cout << "Time 10-fold mean: " << time_10_fold_mean.count() << " ms." << endl;


  // Clock::time_pounsigned int time_graph = Clock::now();
  // milliseconds ms = std::chrono::duration_cast<milliseconds>(time_graph - time_start);
  // cout << "Graph instantiation took " << ms.count() << " ms." << endl;

  // FWDense(graph);
  // Clock::time_pounsigned int time_dense = Clock::now();
  // ms = std::chrono::duration_cast<milliseconds>(time_dense - time_graph);
  // cout << "DENSE Floyd-Warshall took " << ms.count() << " ms." << endl;

  // FWSparse(graph);
  // Clock::time_pounsigned int time_sparse = Clock::now();
  // ms = std::chrono::duration_cast<milliseconds>(time_sparse - time_dense);
  // cout << "SPARSE Floyd-Warshall took " << ms.count() << " ms." << endl;
}
