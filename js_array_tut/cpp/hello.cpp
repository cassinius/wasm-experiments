// #include <iostream>
#include <vector>
#include "fib.h"

auto instances = std::vector<Fib>();

extern "C" {

  int new_fib() {
    instances.push_back(Fib());
    return instances.size() - 1;
  }

  int next_val(int fib_instance) {
    // instances[fib_instance].bla();
    return instances[fib_instance].next();
  }

}

/**
 * we need to call the functions above in main() so the compiler does not optimize them away...
 */
int main() {
  int fib1 = new_fib();
  return next_val(fib1);
  // return 0;
}
