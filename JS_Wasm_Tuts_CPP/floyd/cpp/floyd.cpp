#include <iostream>
// #include <emscripten.h>
// #include <emscripten/bind.h>
#include <vector>
#include <math.h>

using namespace std;
// using namespace emscripten;

extern "C"
{
  /**
   * don't return anything for now, just measure `RAW` performance
   */
  float * floydWarshall(float graph[], int size);
}

float *g = nullptr;

void initialize(float graph[], int size)
{
  if (g != nullptr)
  {
    free(g);
  }
  g = new float[size];
  for ( int v = 0; v < size; ++v ) {
    g[v] = graph[v];
  }
}

/**
 * ENTRY POINT
 */
// emscripten::val pagerank
float * floydWarshall(float graph[], int size)
{
  int N = sqrt(size);
  // cout << "CPP: Graph is of size: " << N << "x" << N << endl;
  
  initialize(graph, size);

  int k, i, j, newDist = 0;

  for (int k = 0; k < N; ++k)
  {
    for (int i = 0; i < N; ++i)
    {
      for (int j = 0; j < N; ++j)
      {
        newDist = g[i*N + k] + g[k*N + j];
        if ( newDist < g[i*N +j] ) {
          g[i*N + j] = newDist;
        }
      }

      // newDist = rand();
    }
  }

  return g;
  // return -42;
  // return emscripten::val(emscripten::typed_memory_view(prSize, pr));
}

// EMSCRIPTEN_BINDINGS(my_module) {
//   emscripten::function("pagerank", &pagerank, allow_raw_pointers());
// }

int main() {
  int size = 1000000;
  float * graph = new float[size];
  for ( int v = 0; v < size; ++v ) {
    graph[v] = rand();
  }
  floydWarshall(graph, size);
}