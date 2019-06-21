#include "fib.h"

Fib::Fib() {}

int Fib::next() {
  int next = curr + prev;
  prev = curr;
  curr = next;
  return next;
}

// int fib(int x) {
//   if (x < 1)
//     return 0;
//   if (x == 1)
//     return 1;
//   return fib(x-1)+fib(x-2);
// }
