#include <iostream>
#include <string>
#include <chrono>

using namespace std;

typedef std::chrono::high_resolution_clock Clock;
typedef std::chrono::milliseconds milliseconds;

const unsigned int V = 1034;
unsigned int graph[V][V];
unsigned int graphSingleArray[V*V];


//=========================================
//     SINGLE ARRAY GRAPH FUNCTIONS
//=========================================
unsigned int getGraphIJ(unsigned int i, unsigned int j) {
  return graphSingleArray[i * V + j];
}


void setGraphIJ(unsigned int i, unsigned int j, unsigned int val) {
  graphSingleArray[i * V + j] = val;
}


void generateGraphSingleArray() {
  for (unsigned int i = 0; i < V*V; ++i) {
    graphSingleArray[i] = 1 + rand()%10; // ignore i == j for this example
  }
}

void FWDenseSingleArray(unsigned int graph[V][V]) {
  for (unsigned int k = 0; k < V; ++k) {
    for (unsigned int i = 0; i < V; ++i) {
      for (unsigned int j = 0; j < V; ++j) {
        int new_val = getGraphIJ(i, k) + getGraphIJ(k, j);
        if ( getGraphIJ(i, j) > new_val ) {
          setGraphIJ(i, j, new_val);
        }
      }
    }
  }
}


//=========================================
//     DOUBLE ARRAY GRAPH FUNCTIONS
//=========================================
void generateGraphDoubleArray() {
  for (unsigned int i = 0; i < V; ++i) {
    for (unsigned int j = 0; j < V; ++j) {
      graph[i][j] = i == j ? 0 : 1 + rand()%10;
    }
  }
}

void FWDenseDoubleArray(unsigned int graph[V][V]) {
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


void testSingleArrayGraphPerformance() {
  Clock::time_point time_creation_start = Clock::now();
  generateGraphSingleArray();  
  Clock::time_point time_creation_end = Clock::now();
  milliseconds time_creation = std::chrono::duration_cast<milliseconds>( (time_creation_end - time_creation_start ) );
  cout << "Time to construct single array graph: " << time_creation.count() << " ms." << endl;

  Clock::time_point time_10_fold_start = Clock::now();
  for (unsigned int i = 0; i < 10; ++i) {
    FWDenseSingleArray(graph);
    cout << "Completed FWDense iteration on single array #" << i << endl;
  }
  Clock::time_point time_10_fold_stop = Clock::now();

  milliseconds time_10_fold_mean = std::chrono::duration_cast<milliseconds>( (time_10_fold_stop - time_10_fold_start ) / 10 );
  cout << "Time for Floyd Warshal on single array (10-fold mean): " << time_10_fold_mean.count() << " ms." << endl;
}


void testDoubleArrayGraphPerformance() {
  Clock::time_point time_creation_start = Clock::now();
  generateGraphDoubleArray();  
  Clock::time_point time_creation_end = Clock::now();
  milliseconds time_creation = std::chrono::duration_cast<milliseconds>( (time_creation_end - time_creation_start ) );
  cout << "Time to construct nested array graph: " << time_creation.count() << " ms." << endl;

  Clock::time_point time_10_fold_start = Clock::now();
  for (unsigned int i = 0; i < 10; ++i) {
    FWDenseDoubleArray(graph);
    cout << "Completed FWDense iteration on nested array #" << i << endl;
  }
  Clock::time_point time_10_fold_stop = Clock::now();

  milliseconds time_10_fold_mean = std::chrono::duration_cast<milliseconds>( (time_10_fold_stop - time_10_fold_start ) / 10 );
  cout << "Time for Floyd Warshal on nested array (10-fold mean): " << time_10_fold_mean.count() << " ms." << endl;
}



int main() {
  testSingleArrayGraphPerformance();
  testDoubleArrayGraphPerformance();
}
