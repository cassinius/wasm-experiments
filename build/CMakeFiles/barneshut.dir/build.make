# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 3.5

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:


#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:


# Remove some rules from gmake that .SUFFIXES does not remove.
SUFFIXES =

.SUFFIXES: .hpux_make_needs_suffix_list


# Suppress display of executed commands.
$(VERBOSE).SILENT:


# A target that is always out of date.
cmake_force:

.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /usr/bin/cmake

# The command to remove a file.
RM = /usr/bin/cmake -E remove -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = /home/bernd/projects/BarnesHut

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /home/bernd/projects/BarnesHut/build

# Include any dependencies generated for this target.
include CMakeFiles/barneshut.dir/depend.make

# Include the progress variables for this target.
include CMakeFiles/barneshut.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/barneshut.dir/flags.make

CMakeFiles/barneshut.dir/main.cpp.o: CMakeFiles/barneshut.dir/flags.make
CMakeFiles/barneshut.dir/main.cpp.o: ../main.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/bernd/projects/BarnesHut/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building CXX object CMakeFiles/barneshut.dir/main.cpp.o"
	/usr/bin/c++   $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/barneshut.dir/main.cpp.o -c /home/bernd/projects/BarnesHut/main.cpp

CMakeFiles/barneshut.dir/main.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/barneshut.dir/main.cpp.i"
	/usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/bernd/projects/BarnesHut/main.cpp > CMakeFiles/barneshut.dir/main.cpp.i

CMakeFiles/barneshut.dir/main.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/barneshut.dir/main.cpp.s"
	/usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/bernd/projects/BarnesHut/main.cpp -o CMakeFiles/barneshut.dir/main.cpp.s

CMakeFiles/barneshut.dir/main.cpp.o.requires:

.PHONY : CMakeFiles/barneshut.dir/main.cpp.o.requires

CMakeFiles/barneshut.dir/main.cpp.o.provides: CMakeFiles/barneshut.dir/main.cpp.o.requires
	$(MAKE) -f CMakeFiles/barneshut.dir/build.make CMakeFiles/barneshut.dir/main.cpp.o.provides.build
.PHONY : CMakeFiles/barneshut.dir/main.cpp.o.provides

CMakeFiles/barneshut.dir/main.cpp.o.provides.build: CMakeFiles/barneshut.dir/main.cpp.o


# Object files for target barneshut
barneshut_OBJECTS = \
"CMakeFiles/barneshut.dir/main.cpp.o"

# External object files for target barneshut
barneshut_EXTERNAL_OBJECTS =

barneshut: CMakeFiles/barneshut.dir/main.cpp.o
barneshut: CMakeFiles/barneshut.dir/build.make
barneshut: CMakeFiles/barneshut.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --bold --progress-dir=/home/bernd/projects/BarnesHut/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Linking CXX executable barneshut"
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/barneshut.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
CMakeFiles/barneshut.dir/build: barneshut

.PHONY : CMakeFiles/barneshut.dir/build

CMakeFiles/barneshut.dir/requires: CMakeFiles/barneshut.dir/main.cpp.o.requires

.PHONY : CMakeFiles/barneshut.dir/requires

CMakeFiles/barneshut.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles/barneshut.dir/cmake_clean.cmake
.PHONY : CMakeFiles/barneshut.dir/clean

CMakeFiles/barneshut.dir/depend:
	cd /home/bernd/projects/BarnesHut/build && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /home/bernd/projects/BarnesHut /home/bernd/projects/BarnesHut /home/bernd/projects/BarnesHut/build /home/bernd/projects/BarnesHut/build /home/bernd/projects/BarnesHut/build/CMakeFiles/barneshut.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : CMakeFiles/barneshut.dir/depend

