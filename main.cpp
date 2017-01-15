#include <iostream>
#include <stdio.h>
#include <stdlib.h>     /* srand, rand */
#include <vector>
#include <chrono>

typedef std::chrono::high_resolution_clock Clock;
typedef std::chrono::milliseconds milliseconds;

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
  int *modArray = new int[n]; // (int *)malloc(sizeof(int) * n);
  
  // cout << "Size of array: " << sizeof(modArray) / 4 << endl;
  
  for ( int i = 0; i < n; ++i ) {
    modArray[i] = (int)rand() % 100;
  }

  delete[] modArray;
}


void compareTypes(int n) {
  int a, b, i;

  for ( i = 0; i < n; ++i ) {
    a = rand();
    b = rand();

    a = a > b ? a : b;
  }
}


void pushToArray(int n) {
  vector< int > arr;

  for ( int i = 0; i < n; ++i ) {
    if ( ( rand() % 100 ) > 50 ) {
      arr.push_back(i);
    }
  }
}


int main(int argc, char **argv) {

  // Seed the random number generator
  srand(time(NULL));

  // string gt50 = ( rand() % 100 ) > 50 ? "true" : "false";
  // cout << rand() % 100 << endl;
  // cout << gt50 << endl;
  
  int fib_n = 40;
  int arr_n = 1E6;
  int comparisons = 1E8;
  int pushUps = 1E8;
  
  Clock::time_point t0 = Clock::now();
  
  fillModArray(arr_n);
  
  Clock::time_point t1 = Clock::now();
  milliseconds ms = std::chrono::duration_cast<milliseconds>(t1 - t0);
  
  cout << "Filling array of length " << arr_n << " took " << ms.count() << " ms." << endl;
  
  int fib_res = fib(40);
  
  Clock::time_point t2 = Clock::now();
  ms = std::chrono::duration_cast<milliseconds>(t2 - t1);
  
  cout << "Fibonacci of " << fib_n << " is: " << fib_res << " and took " << ms.count() << " ms." << endl;
    
  compareTypes(comparisons);

  Clock::time_point t3 = Clock::now();
  ms = std::chrono::duration_cast<milliseconds>(t3 - t2);
  
  cout << "One hundred million integer comparisons took " << ms.count() << " ms." << endl;

  // pushToArray(pushUps);

  // gettimeofday(&t5, 0);

  // cout << "One hundred million integer array pushups took " << ((float)(t5 - t4) / 1000000.0F ) * 1000 << " ms." << endl;

  return 0;
}
