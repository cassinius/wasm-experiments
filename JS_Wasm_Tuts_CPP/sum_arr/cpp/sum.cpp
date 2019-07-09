// #include <emscripten.h>
// #include <emscripten/bind.h>

// using namespace emscripten;

extern "C" {
  float sum_up(float vals[], int size);
  
  /*
   * Tried this, but didn't work (not attached to module)
   * the compiler didn't complain about those declarations,
   * however via Emscripten they were still not attached
   * to the Module...
   */
  // char* malloc(int size);
  // void free(void *ptr);
}


float sum_up(float vals[], int size) {
  float res = 0;
  for(int i=0; i<size; i++) {
    res += vals[i];
  }

  // should be able to call JS functions, but doesnt...
  // emscripten_run_script("console.log('loooggggg from C++')");
  return res;
}

// float lerp(float a, float b, float t) {
//   return (1 - t) * a + t * b;
// }

// EMSCRIPTEN_BINDINGS(my_module) {
//   function("lerp", &lerp);
//   emscripten::function("sum_up", &sum_up, allow_raw_pointers());
//   // function("_malloc", &malloc, allow_raw_pointers());
// }



// int main() {
//  float vals[] = {1., 2., 3.};
//  sum_up(vals, 3);
//  return 0;
// }
