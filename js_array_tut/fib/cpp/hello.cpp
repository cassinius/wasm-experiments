// #include <iostream>
// #include <vector>
#include "fib.h"

// using namespace std;


extern "C" {
  int new_fib();
  int next_val(int fib_instance);
  int rec_fib(int x);
}


const int MAX = 10;
/**
 * Not good - does not instantiate just Fib array pointers, but pre-instantiates MAX Fib instances ...
 */
Fib * instances = new Fib[MAX]();
int last = 0;
// auto instances = std::vector<Fib>();


int new_fib() {
  if (last == MAX - 1) {
    return -1;
  }
  instances[last] = Fib();
  return last++;
  // instances.push_back(Fib());
  // return instances.size() - 1;
}


int next_val(int fib_instance) {
  if ( fib_instance >= last ) {
    return -1;
  }
  return instances[fib_instance].next();
}


int rec_fib(int x) {
  if (x < 1)
    return 0;
  if (x == 1)
    return 1;
  return rec_fib(x-1) + rec_fib(x-2);
}


/**
 * @describe we define functions to export in `extern "C"` above, then include them in the em++ - call within our ./build.sh script
 * @describe otherwise we would need to call the functions defined above in main() so the compiler does not optimize them away...
 */
int main() {
  // cout << 'MAIN' << endl;
  // return rec_fib(42);
  return 0;
}
