#ifndef FIB
#define FIB

class Fib {

  public:
    Fib();
    int next();
    // int bla();
  
  private:
    int curr = 1;
    int prev = 1;

};

#endif