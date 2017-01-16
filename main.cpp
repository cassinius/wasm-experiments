#include <iostream>
#include <stdio.h>
#include <stdlib.h>     /* srand, rand */
#include <time.h>
#include <vector>

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

  delete modArray;
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
  
  clock_t t1, t2, t3, t4, t5;
  t1 = clock();
  
  fillModArray(arr_n);
  
  t2 = clock();
  
  cout << "Filling array of length " << arr_n << " took " << ((float)(t2 - t1) / 1000000.0F ) * 1000 << " ms." << endl;
  
  int fib_res = fib(40);
  
  t3 = clock();
  
  cout << "Fibonacci of " << fib_n << " is: " << fib_res << " and took " << ((float)(t3 - t2) / 1000000.0F ) * 1000 << " ms." << endl;
    
  compareTypes(comparisons);

  t4 = clock();
  
  cout << "One hundred million integer comparisons took " << ((float)(t4 - t3) / 1000000.0F ) * 1000 << " ms." << endl;

  pushToArray(pushUps);

  t5 = clock();

  cout << "One hundred million integer array pushups took " << ((float)(t5 - t4) / 1000000.0F ) * 1000 << " ms." << endl;

  return 0;
}
