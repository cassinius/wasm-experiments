#include <iostream>
#include <emscripten.h>
#include <emscripten/bind.h>
#include <vector>

using namespace std;
using namespace emscripten;


extern "C" {
  void * pagerank(float init[], int size_init, int deg[], int size_deg, int pull1D[], int size_pull1D);
}

template<typename T>
std::vector<T> create_copy(std::vector<T> const &vec)
{
	std::vector<T> v(vec);
	return v;
}


float *pr = nullptr;
size_t prSize = 0;

auto curr = vector<float>();
auto old = vector<float>();
auto outDeg = vector<int>();
auto pull = vector<vector<int>>();


void reInitialize() {
  curr = vector<float>();
  old = vector<float>();
  outDeg = vector<int>();
  pull = vector<vector<int>>();
}


void computePagerank() {
  if ( pr != nullptr ) {
    free(pr);
  }
  prSize = curr.size() * sizeof(float);
  pr = (float *)malloc(prSize);

  // seems to have no effect...
  memset(pr, 0, curr.size() * sizeof(float));

  old = create_copy(curr);
  
}



/**
 * ENTRY POINT
 */
// emscripten::val pagerank
void * pagerank(float init[], int size_init, int deg[], int size_deg, int pull1D[], int size_pull1D) {

  /**
   * 0) Re-initialize our datastructs
   */
  reInitialize();

  /**
   * 1) First, convert our inputs into proper datastructs for Pagerank (our version ;-))
   */
  for ( int i = 0; i < size_init; ++i ) {
    curr.push_back(init[i]);
    old.push_back(init[i]);
  }

  for ( int i = 0; i < size_deg; ++i ) {
    outDeg.push_back(deg[i]);
  }

  // Push back a first vector<int>
  pull.push_back(vector<int>());
  // node index
  int node = 0;
  for ( int i = 0; i < size_pull1D; ++i ) {
    if ( pull1D[i] == -1 ) {
      pull.push_back(vector<int>());
      ++node;
    }
    else {
      pull[node].push_back(pull1D[i]);
    }
  }

  cout << "Size of curr array is: " << curr.size() << endl;
  for (auto i = curr.begin(); i != curr.end(); ++i) {
    cout << *i << ' ';
  }
  cout << endl;


  /**
   * @todo Write own method for 2D vector......
   */
  // cout << "Size of pull array is: " << curr.size() << endl;
  // for (auto i = pull.begin(); i != pull.end(); ++i) {
  //   cout << *i << ' ';
  // }
  // cout << endl;


  computePagerank();

  return pr;
  // return -42;

  // return emscripten::val(emscripten::typed_memory_view(prSize, pr));
}



// EMSCRIPTEN_BINDINGS(my_module) {
//   emscripten::function("pagerank", &pagerank, allow_raw_pointers());
// }
