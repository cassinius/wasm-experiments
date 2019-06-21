#include <iostream>
#include "fib.h"

int fib() {
  static Fib fib = Fib();
  return fib.next();
}

int main() {
  // Fib fib{};
  // std::cout << fib.next() << std::endl;
  // std::cout << fib.next() << std::endl;
  // std::cout << fib.next() << std::endl;
  // std::cout << fib.next() << std::endl;
  // std::cout << fib.next() << std::endl;
  
  // using fib so that the compiler does not optimize away the fib function
  fib();
  return 0;
}
