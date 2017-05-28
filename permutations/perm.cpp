#include <algorithm>
#include <string>
#include <vector>
#include <iostream>
#include <chrono>

typedef std::chrono::high_resolution_clock Clock;
typedef std::chrono::milliseconds milliseconds;

using namespace std;
 
template<class T>
void print(const std::vector<T> &vec)
{
    for (typename std::vector<T>::const_iterator i = vec.begin(); i != vec.end(); ++i)
    {
        std::cout << *i;
        if ((i + 1) != vec.end())
            std::cout << ",";
    }
    std::cout << std::endl;
}
 
int main()
{
  Clock::time_point t0 = Clock::now();

  //Permutations for strings
  std::string example("Hello world!");
  std::sort(example.begin(), example.end());
  do {
      // std::cout << example << '\n';
  } while (std::next_permutation(example.begin(), example.end()));

  // And for vectors
  // std::vector<int> another;
  // another.push_back(1234);
  // another.push_back(4321);
  // another.push_back(1234);
  // another.push_back(9999);

  // std::sort(another.begin(), another.end());
  // do {
  //     // print(another);
  // } while (std::next_permutation(another.begin(), another.end()));

  Clock::time_point t1 = Clock::now();
  milliseconds ms = std::chrono::duration_cast<milliseconds>(t1 - t0);
  cout << "Permutation of string took " << ms.count() << " ms." << endl;
  

  return 0;
}