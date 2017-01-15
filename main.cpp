#include <iostream>
#include <stdio.h>
#include <stdlib.h>     /* srand, rand */
#include <time.h>

using namespace std;


int fib(int n) {
  if(n == 0)
    return 0;
  else if(n == 1)
    return 1;
  else
    return fib(n - 1) + fib(n - 2);
}


void fillModArray(int n) {
  int *modArray = (int *)malloc(sizeof(int) * n);
  
  // cout << "Size of array: " << sizeof(modArray) / 4 << endl;
  
  for ( int i = 0; i < n; ++i ) {
    modArray[i] = (int)rand() % 100;
  }
  
  cout << "Filled array of length " << sizeof(modArray) << endl;

  free(modArray);
}


int main(int argc, char **argv) {
  
  int fib_n = 40;
  int arr_n = 1E6;
  
  clock_t t1, t2, t3;
  t1 = clock();
  
  cout << "Hello from Barnes Hut!" << endl;
  
  fillModArray(arr_n);
  
  t2 = clock();
  
  cout << "Filling array of length " << arr_n << " took " << ((float)(t2 - t1) / 1000000.0F ) * 1000 << " ms." << endl;
  
  int fib_res = fib(40);
  
  t3 = clock();
  
  cout << "Fibonacci of " << fib_n << " is: " << fib_res << " and took: " << ((float)(t3 - t2) / 1000000.0F ) * 1000 << " ms." << endl;
  
  cout << "Good bye from Barnes Hut!" << std::endl;
    
  return 0;
}
