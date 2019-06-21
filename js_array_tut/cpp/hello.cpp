// #include <iostream>
#include <vector>
#include "fib.h"


extern "C" {
  int new_fib();
  int next_val(int fib_instance);
  int rec_fib(int x);
}


auto instances = std::vector<Fib>();


int new_fib() {
  instances.push_back(Fib());
  return instances.size() - 1;
}


int next_val(int fib_instance) {
  // instances[fib_instance].bla();
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
 * we need to call the functions above in main() so the compiler does not optimize them away...
 */
int main() {
  return 0;
}
