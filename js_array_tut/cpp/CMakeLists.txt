set(project "hello")

project(${project})
cmake_minimum_required(VERSION 3.12)

set(src 
   ../cpp/hello.cpp
   ../cpp/fib.cpp
 )

set(exports 
   _new_fib 
   _next_val
   _rec_fib
 )

# process exported functions
set(exports_string "")
list(JOIN exports "," exports_string)

# set compiler and flags
SET(CMAKE_C_COMPILER emcc)
SET(CMAKE_CPP_COMPILER em++)
set( CMAKE_CXX_FLAGS "\
  -O3 \
  -std=c++11 \
  -g \
  --closure 1 \
  -s WASM=1 \
  -s EXPORTED_FUNCTIONS=\"[${exports_string}]\" \
  "  )

# specify the project
add_executable(${project}.html ${src})
