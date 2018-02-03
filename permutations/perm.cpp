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
  vector<std::string> permutations;

  for ( int i = 0; i < 10; i++ ) {
    //Permutations for strings
    std::string example("Hello World");
    std::sort(example.begin(), example.end());
    do {
        // std::cout << example << '\n';
        permutations.push_back( example );
    } while (std::next_permutation(example.begin(), example.end()));
  }

  Clock::time_point t1 = Clock::now();
  milliseconds ms = std::chrono::duration_cast<milliseconds>(t1 - t0);
  cout << "Permutation of string took " << ms.count() / 10 << " ms." << endl;
  

  return 0;
}
