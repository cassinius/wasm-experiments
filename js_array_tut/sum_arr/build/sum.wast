(module
 (type $FUNCSIG$viiii (func (param i32 i32 i32 i32)))
 (type $FUNCSIG$viiiiii (func (param i32 i32 i32 i32 i32 i32)))
 (type $FUNCSIG$viiiii (func (param i32 i32 i32 i32 i32)))
 (type $FUNCSIG$iiii (func (param i32 i32 i32) (result i32)))
 (type $FUNCSIG$vi (func (param i32)))
 (type $FUNCSIG$vii (func (param i32 i32)))
 (type $FUNCSIG$viii (func (param i32 i32 i32)))
 (type $FUNCSIG$v (func))
 (type $FUNCSIG$i (func (result i32)))
 (type $FUNCSIG$ii (func (param i32) (result i32)))
 (import "env" "memory" (memory $memory 256))
 (data (i32.const 1024) "\ec\05\00\00T\0b\00\00\00\00\00\00\01\00\00\00\b0\04\00\00\00\00\00\00\ec\05\00\00\15\0b\00\00\00\00\00\00\01\00\00\00\b0\04\00\00\00\00\00\00\ec\05\00\00\b0\n\00\00\00\00\00\00\01\00\00\00\b0\04\00\00\00\00\00\00\80\05\00\00\9d\n\00\00\80\05\00\00~\n\00\00\80\05\00\00_\n\00\00\80\05\00\00@\n\00\00\80\05\00\00!\n\00\00\80\05\00\00\02\n\00\00\80\05\00\00\e3\t\00\00\80\05\00\00\c4\t\00\00\80\05\00\00\a5\t\00\00\80\05\00\00\86\t\00\00\80\05\00\00g\t\00\00\80\05\00\00H\t\00\00\80\05\00\00)\t\00\00\80\05\00\00\ef\n\00\00\a8\05\00\00\e6\0b\00\00\c8\04\00\00\00\00\00\00\a8\05\00\00\93\0b\00\00\d8\04\00\00\00\00\00\00\80\05\00\00\b4\0b\00\00\a8\05\00\00\c1\0b\00\00\b8\04\00\00\00\00\00\00\a8\05\00\00\08\0c\00\00\c8\04\00\00\00\00\00\00\d0\05\00\000\0c\00\00\d0\05\00\002\0c\00\00\d0\05\00\004\0c\00\00\d0\05\00\006\0c\00\00\d0\05\00\008\0c\00\00\d0\05\00\00:\0c\00\00\d0\05\00\00<\0c\00\00\d0\05\00\00>\0c\00\00\d0\05\00\00@\0c\00\00\d0\05\00\00B\0c\00\00\d0\05\00\00D\0c\00\00\d0\05\00\00F\0c\00\00\d0\05\00\00H\0c\00\00\a8\05\00\00J\0c\00\00\b8\04")
 (data (i32.const 1404) "\b8\04\00\00\01\00\00\00\02\00\00\00\03\00\00\00\04\00\00\00\01\00\00\00\01\00\00\00\01\00\00\00\01\00\00\00\00\00\00\00\e0\04\00\00\01\00\00\00\05\00\00\00\03\00\00\00\04\00\00\00\01\00\00\00\02\00\00\00\02\00\00\00\02\00\00\00\00\00\00\00\f0\04\00\00\01\00\00\00\06\00\00\00\03\00\00\00\04\00\00\00\02\00\00\00\00\00\00\00h\05\00\00\01\00\00\00\07\00\00\00\03\00\00\00\04\00\00\00\01\00\00\00\03\00\00\00\03\00\00\00\03\00\00\00void\00bool\00char\00signed char\00unsigned char\00short\00unsigned short\00int\00unsigned int\00long\00unsigned long\00float\00double\00std::string\00std::basic_string<unsigned char>\00std::wstring\00emscripten::val\00emscripten::memory_view<char>\00emscripten::memory_view<signed char>\00emscripten::memory_view<unsigned char>\00emscripten::memory_view<short>\00emscripten::memory_view<unsigned short>\00emscripten::memory_view<int>\00emscripten::memory_view<unsigned int>\00emscripten::memory_view<long>\00emscripten::memory_view<unsigned long>\00emscripten::memory_view<int8_t>\00emscripten::memory_view<uint8_t>\00emscripten::memory_view<int16_t>\00emscripten::memory_view<uint16_t>\00emscripten::memory_view<int32_t>\00emscripten::memory_view<uint32_t>\00emscripten::memory_view<float>\00emscripten::memory_view<double>\00emscripten::memory_view<long double>\00N10emscripten11memory_viewIeEE\00N10emscripten11memory_viewIdEE\00N10emscripten11memory_viewIfEE\00N10emscripten11memory_viewImEE\00N10emscripten11memory_viewIlEE\00N10emscripten11memory_viewIjEE\00N10emscripten11memory_viewIiEE\00N10emscripten11memory_viewItEE\00N10emscripten11memory_viewIsEE\00N10emscripten11memory_viewIhEE\00N10emscripten11memory_viewIaEE\00N10emscripten11memory_viewIcEE\00N10emscripten3valE\00NSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEE\00NSt3__221__basic_string_commonILb1EEE\00NSt3__212basic_stringIhNS_11char_traitsIhEENS_9allocatorIhEEEE\00NSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE\00N10__cxxabiv116__shim_type_infoE\00St9type_info\00N10__cxxabiv120__si_class_type_infoE\00N10__cxxabiv117__class_type_infoE\00N10__cxxabiv123__fundamental_type_infoE\00v\00b\00c\00h\00a\00s\00t\00i\00j\00l\00m\00f\00d\00N10__cxxabiv121__vmi_class_type_infoE")
 (import "env" "table" (table $table 24 24 funcref))
 (elem (global.get $__table_base) $b0 $__ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERPv $__ZNK10__cxxabiv123__fundamental_type_info9can_catchEPKNS_16__shim_type_infoERPv $b0 $b1 $__ZN10__cxxabiv116__shim_type_infoD2Ev $__ZN10__cxxabiv117__class_type_infoD0Ev $__ZN10__cxxabiv116__shim_type_infoD2Ev $__ZN10__cxxabiv116__shim_type_infoD2Ev $__ZN10__cxxabiv117__class_type_infoD0Ev $__ZN10__cxxabiv117__class_type_infoD0Ev $__ZN10__cxxabiv117__class_type_infoD0Ev $b2 $__ZNK10__cxxabiv117__class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi $__ZNK10__cxxabiv120__si_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi $__ZNK10__cxxabiv121__vmi_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi $b3 $__ZNK10__cxxabiv117__class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib $__ZNK10__cxxabiv120__si_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib $__ZNK10__cxxabiv121__vmi_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib $b4 $__ZNK10__cxxabiv117__class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib $__ZNK10__cxxabiv120__si_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib $__ZNK10__cxxabiv121__vmi_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib)
 (import "env" "__table_base" (global $__table_base i32))
 (import "env" "DYNAMICTOP_PTR" (global $DYNAMICTOP_PTR$asm2wasm$import i32))
 (import "env" "abort" (func $abort (param i32)))
 (import "env" "___setErrNo" (func $___setErrNo (param i32)))
 (import "env" "__embind_register_bool" (func $__embind_register_bool (param i32 i32 i32 i32 i32)))
 (import "env" "__embind_register_emval" (func $__embind_register_emval (param i32 i32)))
 (import "env" "__embind_register_float" (func $__embind_register_float (param i32 i32 i32)))
 (import "env" "__embind_register_integer" (func $__embind_register_integer (param i32 i32 i32 i32 i32)))
 (import "env" "__embind_register_memory_view" (func $__embind_register_memory_view (param i32 i32 i32)))
 (import "env" "__embind_register_std_string" (func $__embind_register_std_string (param i32 i32)))
 (import "env" "__embind_register_std_wstring" (func $__embind_register_std_wstring (param i32 i32 i32)))
 (import "env" "__embind_register_void" (func $__embind_register_void (param i32 i32)))
 (import "env" "_abort" (func $_abort))
 (import "env" "_emscripten_get_heap_size" (func $_emscripten_get_heap_size (result i32)))
 (import "env" "_emscripten_memcpy_big" (func $_emscripten_memcpy_big (param i32 i32 i32) (result i32)))
 (import "env" "_emscripten_resize_heap" (func $_emscripten_resize_heap (param i32) (result i32)))
 (import "env" "abortOnCannotGrowMemory" (func $abortOnCannotGrowMemory (param i32) (result i32)))
 (global $STACKTOP (mut i32) (i32.const 4928))
 (global $STACK_MAX (mut i32) (i32.const 5247808))
 (export "__growWasmMemory" (func $__growWasmMemory))
 (export "__GLOBAL__sub_I_bind_cpp" (func $__GLOBAL__sub_I_bind_cpp))
 (export "___embind_register_native_and_builtin_types" (func $___embind_register_native_and_builtin_types))
 (export "___errno_location" (func $___errno_location))
 (export "___getTypeName" (func $___getTypeName))
 (export "_free" (func $_free))
 (export "_malloc" (func $_malloc))
 (export "_memcpy" (func $_memcpy))
 (export "_memset" (func $_memset))
 (export "_sbrk" (func $_sbrk))
 (export "_sum_up" (func $_sum_up))
 (export "dynCall_iiii" (func $dynCall_iiii))
 (export "dynCall_vi" (func $dynCall_vi))
 (export "dynCall_viiii" (func $dynCall_viiii))
 (export "dynCall_viiiii" (func $dynCall_viiiii))
 (export "dynCall_viiiiii" (func $dynCall_viiiiii))
 (export "establishStackSpace" (func $establishStackSpace))
 (export "stackAlloc" (func $stackAlloc))
 (export "stackRestore" (func $stackRestore))
 (export "stackSave" (func $stackSave))
 (func $__growWasmMemory (; 15 ;) (; has Stack IR ;) (param $0 i32) (result i32)
  (memory.grow
   (local.get $0)
  )
 )
 (func $stackAlloc (; 16 ;) (; has Stack IR ;) (param $0 i32) (result i32)
  (local $1 i32)
  (local.set $1
   (global.get $STACKTOP)
  )
  (global.set $STACKTOP
   (i32.add
    (local.get $0)
    (global.get $STACKTOP)
   )
  )
  (global.set $STACKTOP
   (i32.and
    (i32.add
     (global.get $STACKTOP)
     (i32.const 15)
    )
    (i32.const -16)
   )
  )
  (local.get $1)
 )
 (func $stackSave (; 17 ;) (; has Stack IR ;) (result i32)
  (global.get $STACKTOP)
 )
 (func $stackRestore (; 18 ;) (; has Stack IR ;) (param $0 i32)
  (global.set $STACKTOP
   (local.get $0)
  )
 )
 (func $establishStackSpace (; 19 ;) (; has Stack IR ;) (param $0 i32) (param $1 i32)
  (global.set $STACKTOP
   (local.get $0)
  )
  (global.set $STACK_MAX
   (local.get $1)
  )
 )
 (func $_sum_up (; 20 ;) (; has Stack IR ;) (param $0 i32) (param $1 i32) (result f32)
  (local $2 i32)
  (local $3 f32)
  (local $4 i32)
  (local $5 f32)
  (if
   ;;@ ../cpp/sum.cpp:22:0
   (i32.le_s
    (local.get $1)
    (i32.const 0)
   )
   ;;@ ../cpp/sum.cpp:28:0
   (return
    (f32.const 0)
   )
  )
  (loop $while-in
   ;;@ ../cpp/sum.cpp:23:0
   (local.set $4
    (i32.add
     (i32.shl
      (local.get $2)
      (i32.const 2)
     )
     (local.get $0)
    )
   )
   (local.set $5
    (f32.load
     (local.get $4)
    )
   )
   (local.set $3
    (f32.add
     (local.get $3)
     (local.get $5)
    )
   )
   ;;@ ../cpp/sum.cpp:22:0
   (local.set $2
    (i32.add
     (local.get $2)
     (i32.const 1)
    )
   )
   (br_if $while-in
    (i32.ne
     (local.get $1)
     (local.get $2)
    )
   )
  )
  ;;@ ../cpp/sum.cpp:28:0
  (local.get $3)
 )
 (func $__GLOBAL__sub_I_bind_cpp (; 21 ;) (; has Stack IR ;)
  ;;@ /home/bernd/tmp/emsdk/emscripten/incoming/system/lib/embind/bind.cpp:161:0
  (call $___embind_register_native_and_builtin_types)
 )
 (func $___embind_register_native_and_builtin_types (; 22 ;) (; has Stack IR ;)
  ;;@ /home/bernd/tmp/emsdk/emscripten/incoming/system/lib/embind/bind.cpp:104:0
  (call $__embind_register_void
   (i32.const 1280)
   (i32.const 1548)
  )
  ;;@ /home/bernd/tmp/emsdk/emscripten/incoming/system/lib/embind/bind.cpp:106:0
  (call $__embind_register_bool
   (i32.const 1288)
   (i32.const 1553)
   (i32.const 1)
   (i32.const 1)
   (i32.const 0)
  )
  ;;@ /home/bernd/tmp/emsdk/emscripten/incoming/system/lib/embind/bind.cpp:56:0
  (call $__embind_register_integer
   (i32.const 1296)
   (i32.const 1558)
   (i32.const 1)
   (i32.const -128)
   (i32.const 127)
  )
  (call $__embind_register_integer
   (i32.const 1312)
   (i32.const 1563)
   (i32.const 1)
   (i32.const -128)
   (i32.const 127)
  )
  (call $__embind_register_integer
   (i32.const 1304)
   (i32.const 1575)
   (i32.const 1)
   (i32.const 0)
   (i32.const 255)
  )
  (call $__embind_register_integer
   (i32.const 1320)
   (i32.const 1589)
   (i32.const 2)
   (i32.const -32768)
   (i32.const 32767)
  )
  (call $__embind_register_integer
   (i32.const 1328)
   (i32.const 1595)
   (i32.const 2)
   (i32.const 0)
   (i32.const 65535)
  )
  (call $__embind_register_integer
   (i32.const 1336)
   (i32.const 1610)
   (i32.const 4)
   (i32.const -2147483648)
   (i32.const 2147483647)
  )
  (call $__embind_register_integer
   (i32.const 1344)
   (i32.const 1614)
   (i32.const 4)
   (i32.const 0)
   (i32.const -1)
  )
  (call $__embind_register_integer
   (i32.const 1352)
   (i32.const 1627)
   (i32.const 4)
   (i32.const -2147483648)
   (i32.const 2147483647)
  )
  (call $__embind_register_integer
   (i32.const 1360)
   (i32.const 1632)
   (i32.const 4)
   (i32.const 0)
   (i32.const -1)
  )
  ;;@ /home/bernd/tmp/emsdk/emscripten/incoming/system/lib/embind/bind.cpp:62:0
  (call $__embind_register_float
   (i32.const 1368)
   (i32.const 1646)
   (i32.const 4)
  )
  (call $__embind_register_float
   (i32.const 1376)
   (i32.const 1652)
   (i32.const 8)
  )
  ;;@ /home/bernd/tmp/emsdk/emscripten/incoming/system/lib/embind/bind.cpp:121:0
  (call $__embind_register_std_string
   (i32.const 1024)
   (i32.const 1659)
  )
  ;;@ /home/bernd/tmp/emsdk/emscripten/incoming/system/lib/embind/bind.cpp:122:0
  (call $__embind_register_std_string
   (i32.const 1048)
   (i32.const 1671)
  )
  ;;@ /home/bernd/tmp/emsdk/emscripten/incoming/system/lib/embind/bind.cpp:123:0
  (call $__embind_register_std_wstring
   (i32.const 1072)
   (i32.const 4)
   (i32.const 1704)
  )
  ;;@ /home/bernd/tmp/emsdk/emscripten/incoming/system/lib/embind/bind.cpp:124:0
  (call $__embind_register_emval
   (i32.const 1096)
   (i32.const 1717)
  )
  ;;@ /home/bernd/tmp/emsdk/emscripten/incoming/system/lib/embind/bind.cpp:96:0
  (call $__embind_register_memory_view
   (i32.const 1104)
   (i32.const 0)
   (i32.const 1733)
  )
  (call $__embind_register_memory_view
   (i32.const 1112)
   (i32.const 0)
   (i32.const 1763)
  )
  (call $__embind_register_memory_view
   (i32.const 1120)
   (i32.const 1)
   (i32.const 1800)
  )
  (call $__embind_register_memory_view
   (i32.const 1128)
   (i32.const 2)
   (i32.const 1839)
  )
  (call $__embind_register_memory_view
   (i32.const 1136)
   (i32.const 3)
   (i32.const 1870)
  )
  (call $__embind_register_memory_view
   (i32.const 1144)
   (i32.const 4)
   (i32.const 1910)
  )
  (call $__embind_register_memory_view
   (i32.const 1152)
   (i32.const 5)
   (i32.const 1939)
  )
  (call $__embind_register_memory_view
   (i32.const 1160)
   (i32.const 4)
   (i32.const 1977)
  )
  (call $__embind_register_memory_view
   (i32.const 1168)
   (i32.const 5)
   (i32.const 2007)
  )
  (call $__embind_register_memory_view
   (i32.const 1112)
   (i32.const 0)
   (i32.const 2046)
  )
  (call $__embind_register_memory_view
   (i32.const 1120)
   (i32.const 1)
   (i32.const 2078)
  )
  (call $__embind_register_memory_view
   (i32.const 1128)
   (i32.const 2)
   (i32.const 2111)
  )
  (call $__embind_register_memory_view
   (i32.const 1136)
   (i32.const 3)
   (i32.const 2144)
  )
  (call $__embind_register_memory_view
   (i32.const 1144)
   (i32.const 4)
   (i32.const 2178)
  )
  (call $__embind_register_memory_view
   (i32.const 1152)
   (i32.const 5)
   (i32.const 2211)
  )
  (call $__embind_register_memory_view
   (i32.const 1176)
   (i32.const 6)
   (i32.const 2245)
  )
  (call $__embind_register_memory_view
   (i32.const 1184)
   (i32.const 7)
   (i32.const 2276)
  )
  (call $__embind_register_memory_view
   (i32.const 1192)
   (i32.const 7)
   (i32.const 2308)
  )
 )
 (func $___getTypeName (; 23 ;) (; has Stack IR ;) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  ;;@ /home/bernd/tmp/emsdk/emscripten/incoming/system/lib/embind/bind.cpp:42:0
  (if (result i32)
   (local.tee $2
    (call $_malloc
     (local.tee $1
      (i32.add
       (call $_strlen
        (local.tee $0
         (i32.load offset=4
          (local.get $0)
         )
        )
       )
       (i32.const 1)
      )
     )
    )
   )
   (call $_memcpy
    (local.get $2)
    (local.get $0)
    (local.get $1)
   )
   (i32.const 0)
  )
 )
 (func $___errno_location (; 24 ;) (; has Stack IR ;) (result i32)
  (i32.const 3184)
 )
 (func $_strlen (; 25 ;) (; has Stack IR ;) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (block $__rjto$0
   (block $__rjti$0
    (br_if $__rjti$0
     (i32.eqz
      (i32.and
       (local.tee $2
        (local.get $0)
       )
       (i32.const 3)
      )
     )
    )
    (local.set $0
     (local.tee $1
      (local.get $2)
     )
    )
    (block $label$break$L1
     (loop $while-in
      (br_if $label$break$L1
       (i32.eqz
        (i32.load8_s
         (local.get $1)
        )
       )
      )
      (br_if $while-in
       (i32.and
        (local.tee $0
         (local.tee $1
          (i32.add
           (local.get $1)
           (i32.const 1)
          )
         )
        )
        (i32.const 3)
       )
      )
     )
     (local.set $0
      (local.get $1)
     )
     (br $__rjti$0)
    )
    (br $__rjto$0)
   )
   (loop $while-in1
    (local.set $1
     (i32.add
      (local.get $0)
      (i32.const 4)
     )
    )
    (if
     (i32.eqz
      (i32.and
       (i32.add
        (local.tee $3
         (i32.load
          (local.get $0)
         )
        )
        (i32.const -16843009)
       )
       (i32.xor
        (i32.and
         (local.get $3)
         (i32.const -2139062144)
        )
        (i32.const -2139062144)
       )
      )
     )
     (block
      (local.set $0
       (local.get $1)
      )
      (br $while-in1)
     )
    )
   )
   (if
    (i32.and
     (local.get $3)
     (i32.const 255)
    )
    (loop $while-in3
     (br_if $while-in3
      (i32.load8_s
       (local.tee $0
        (i32.add
         (local.get $0)
         (i32.const 1)
        )
       )
      )
     )
    )
   )
  )
  (i32.sub
   (local.get $0)
   (local.get $2)
  )
 )
 (func $_malloc (; 26 ;) (; has Stack IR ;) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  (local $13 i32)
  (local $14 i32)
  (local $15 i32)
  (local $16 i32)
  (local $17 i32)
  (local $18 i32)
  (local $19 i32)
  (local $20 i32)
  (local $21 i32)
  (local $22 i32)
  (local.set $16
   (global.get $STACKTOP)
  )
  (global.set $STACKTOP
   (i32.add
    (global.get $STACKTOP)
    (i32.const 16)
   )
  )
  (local.set $8
   (if (result i32)
    (i32.lt_u
     (local.get $0)
     (i32.const 245)
    )
    (block (result i32)
     (if
      (i32.and
       (local.tee $1
        (i32.shr_u
         (local.tee $5
          (i32.load
           (i32.const 3188)
          )
         )
         (local.tee $0
          (i32.shr_u
           (local.tee $8
            (select
             (i32.const 16)
             (i32.and
              (i32.add
               (local.get $0)
               (i32.const 11)
              )
              (i32.const -8)
             )
             (i32.lt_u
              (local.get $0)
              (i32.const 11)
             )
            )
           )
           (i32.const 3)
          )
         )
        )
       )
       (i32.const 3)
      )
      (block
       (local.set $0
        (i32.load
         (local.tee $10
          (i32.add
           (local.tee $2
            (i32.load offset=8
             (local.tee $1
              (i32.add
               (i32.shl
                (local.tee $3
                 (i32.add
                  (i32.xor
                   (i32.and
                    (local.get $1)
                    (i32.const 1)
                   )
                   (i32.const 1)
                  )
                  (local.get $0)
                 )
                )
                (i32.const 3)
               )
               (i32.const 3228)
              )
             )
            )
           )
           (i32.const 8)
          )
         )
        )
       )
       (if
        (i32.eq
         (local.get $0)
         (local.get $1)
        )
        (i32.store
         (i32.const 3188)
         (i32.and
          (i32.xor
           (i32.shl
            (i32.const 1)
            (local.get $3)
           )
           (i32.const -1)
          )
          (local.get $5)
         )
        )
        (block
         (if
          (i32.gt_u
           (i32.load
            (i32.const 3204)
           )
           (local.get $0)
          )
          (call $_abort)
         )
         (if
          (i32.eq
           (local.get $2)
           (i32.load offset=12
            (local.get $0)
           )
          )
          (block
           (i32.store offset=12
            (local.get $0)
            (local.get $1)
           )
           (i32.store offset=8
            (local.get $1)
            (local.get $0)
           )
          )
          (call $_abort)
         )
        )
       )
       (i32.store offset=4
        (local.get $2)
        (i32.or
         (local.tee $0
          (i32.shl
           (local.get $3)
           (i32.const 3)
          )
         )
         (i32.const 3)
        )
       )
       (i32.store offset=4
        (local.tee $0
         (i32.add
          (local.get $0)
          (local.get $2)
         )
        )
        (i32.or
         (i32.load offset=4
          (local.get $0)
         )
         (i32.const 1)
        )
       )
       (global.set $STACKTOP
        (local.get $16)
       )
       (return
        (local.get $10)
       )
      )
     )
     (if (result i32)
      (i32.gt_u
       (local.get $8)
       (local.tee $13
        (i32.load
         (i32.const 3196)
        )
       )
      )
      (block (result i32)
       (if
        (local.get $1)
        (block
         (local.set $0
          (i32.load
           (local.tee $6
            (i32.add
             (local.tee $1
              (i32.load offset=8
               (local.tee $2
                (i32.add
                 (i32.shl
                  (local.tee $3
                   (i32.add
                    (i32.or
                     (i32.or
                      (i32.or
                       (i32.or
                        (local.tee $1
                         (i32.and
                          (i32.shr_u
                           (local.tee $0
                            (i32.add
                             (i32.and
                              (local.tee $0
                               (i32.and
                                (i32.or
                                 (local.tee $2
                                  (i32.shl
                                   (i32.const 2)
                                   (local.get $0)
                                  )
                                 )
                                 (i32.sub
                                  (i32.const 0)
                                  (local.get $2)
                                 )
                                )
                                (i32.shl
                                 (local.get $1)
                                 (local.get $0)
                                )
                               )
                              )
                              (i32.sub
                               (i32.const 0)
                               (local.get $0)
                              )
                             )
                             (i32.const -1)
                            )
                           )
                           (i32.const 12)
                          )
                          (i32.const 16)
                         )
                        )
                        (local.tee $1
                         (i32.and
                          (i32.shr_u
                           (local.tee $0
                            (i32.shr_u
                             (local.get $0)
                             (local.get $1)
                            )
                           )
                           (i32.const 5)
                          )
                          (i32.const 8)
                         )
                        )
                       )
                       (local.tee $1
                        (i32.and
                         (i32.shr_u
                          (local.tee $0
                           (i32.shr_u
                            (local.get $0)
                            (local.get $1)
                           )
                          )
                          (i32.const 2)
                         )
                         (i32.const 4)
                        )
                       )
                      )
                      (local.tee $1
                       (i32.and
                        (i32.shr_u
                         (local.tee $0
                          (i32.shr_u
                           (local.get $0)
                           (local.get $1)
                          )
                         )
                         (i32.const 1)
                        )
                        (i32.const 2)
                       )
                      )
                     )
                     (local.tee $1
                      (i32.and
                       (i32.shr_u
                        (local.tee $0
                         (i32.shr_u
                          (local.get $0)
                          (local.get $1)
                         )
                        )
                        (i32.const 1)
                       )
                       (i32.const 1)
                      )
                     )
                    )
                    (i32.shr_u
                     (local.get $0)
                     (local.get $1)
                    )
                   )
                  )
                  (i32.const 3)
                 )
                 (i32.const 3228)
                )
               )
              )
             )
             (i32.const 8)
            )
           )
          )
         )
         (if
          (i32.eq
           (local.get $0)
           (local.get $2)
          )
          (i32.store
           (i32.const 3188)
           (local.tee $7
            (i32.and
             (i32.xor
              (i32.shl
               (i32.const 1)
               (local.get $3)
              )
              (i32.const -1)
             )
             (local.get $5)
            )
           )
          )
          (block
           (if
            (i32.gt_u
             (i32.load
              (i32.const 3204)
             )
             (local.get $0)
            )
            (call $_abort)
           )
           (if
            (i32.eq
             (local.get $1)
             (i32.load offset=12
              (local.get $0)
             )
            )
            (block
             (i32.store offset=12
              (local.get $0)
              (local.get $2)
             )
             (i32.store offset=8
              (local.get $2)
              (local.get $0)
             )
             (local.set $7
              (local.get $5)
             )
            )
            (call $_abort)
           )
          )
         )
         (i32.store offset=4
          (local.get $1)
          (i32.or
           (local.get $8)
           (i32.const 3)
          )
         )
         (i32.store offset=4
          (local.tee $5
           (i32.add
            (local.get $1)
            (local.get $8)
           )
          )
          (i32.or
           (local.tee $10
            (i32.sub
             (local.tee $0
              (i32.shl
               (local.get $3)
               (i32.const 3)
              )
             )
             (local.get $8)
            )
           )
           (i32.const 1)
          )
         )
         (i32.store
          (i32.add
           (local.get $0)
           (local.get $1)
          )
          (local.get $10)
         )
         (if
          (local.get $13)
          (block
           (local.set $3
            (i32.load
             (i32.const 3208)
            )
           )
           (local.set $0
            (i32.add
             (i32.shl
              (local.tee $1
               (i32.shr_u
                (local.get $13)
                (i32.const 3)
               )
              )
              (i32.const 3)
             )
             (i32.const 3228)
            )
           )
           (if
            (i32.and
             (local.tee $1
              (i32.shl
               (i32.const 1)
               (local.get $1)
              )
             )
             (local.get $7)
            )
            (if
             (i32.gt_u
              (i32.load
               (i32.const 3204)
              )
              (local.tee $2
               (i32.load
                (local.tee $1
                 (i32.add
                  (local.get $0)
                  (i32.const 8)
                 )
                )
               )
              )
             )
             (call $_abort)
             (block
              (local.set $4
               (local.get $2)
              )
              (local.set $14
               (local.get $1)
              )
             )
            )
            (block
             (i32.store
              (i32.const 3188)
              (i32.or
               (local.get $1)
               (local.get $7)
              )
             )
             (local.set $14
              (i32.add
               (local.tee $4
                (local.get $0)
               )
               (i32.const 8)
              )
             )
            )
           )
           (i32.store
            (local.get $14)
            (local.get $3)
           )
           (i32.store offset=12
            (local.get $4)
            (local.get $3)
           )
           (i32.store offset=8
            (local.get $3)
            (local.get $4)
           )
           (i32.store offset=12
            (local.get $3)
            (local.get $0)
           )
          )
         )
         (i32.store
          (i32.const 3196)
          (local.get $10)
         )
         (i32.store
          (i32.const 3208)
          (local.get $5)
         )
         (global.set $STACKTOP
          (local.get $16)
         )
         (return
          (local.get $6)
         )
        )
       )
       (if (result i32)
        (local.tee $14
         (i32.load
          (i32.const 3192)
         )
        )
        (block
         (local.set $0
          (local.tee $7
           (i32.load
            (i32.add
             (i32.shl
              (i32.add
               (i32.or
                (i32.or
                 (i32.or
                  (i32.or
                   (local.tee $1
                    (i32.and
                     (i32.shr_u
                      (local.tee $0
                       (i32.add
                        (i32.and
                         (local.get $14)
                         (i32.sub
                          (i32.const 0)
                          (local.get $14)
                         )
                        )
                        (i32.const -1)
                       )
                      )
                      (i32.const 12)
                     )
                     (i32.const 16)
                    )
                   )
                   (local.tee $1
                    (i32.and
                     (i32.shr_u
                      (local.tee $0
                       (i32.shr_u
                        (local.get $0)
                        (local.get $1)
                       )
                      )
                      (i32.const 5)
                     )
                     (i32.const 8)
                    )
                   )
                  )
                  (local.tee $1
                   (i32.and
                    (i32.shr_u
                     (local.tee $0
                      (i32.shr_u
                       (local.get $0)
                       (local.get $1)
                      )
                     )
                     (i32.const 2)
                    )
                    (i32.const 4)
                   )
                  )
                 )
                 (local.tee $1
                  (i32.and
                   (i32.shr_u
                    (local.tee $0
                     (i32.shr_u
                      (local.get $0)
                      (local.get $1)
                     )
                    )
                    (i32.const 1)
                   )
                   (i32.const 2)
                  )
                 )
                )
                (local.tee $1
                 (i32.and
                  (i32.shr_u
                   (local.tee $0
                    (i32.shr_u
                     (local.get $0)
                     (local.get $1)
                    )
                   )
                   (i32.const 1)
                  )
                  (i32.const 1)
                 )
                )
               )
               (i32.shr_u
                (local.get $0)
                (local.get $1)
               )
              )
              (i32.const 2)
             )
             (i32.const 3492)
            )
           )
          )
         )
         (local.set $6
          (i32.sub
           (i32.and
            (i32.load offset=4
             (local.get $7)
            )
            (i32.const -8)
           )
           (local.get $8)
          )
         )
         (loop $while-in
          (block $while-out
           (if
            (local.tee $1
             (i32.load offset=16
              (local.get $0)
             )
            )
            (local.set $0
             (local.get $1)
            )
            (br_if $while-out
             (i32.eqz
              (local.tee $0
               (i32.load offset=20
                (local.get $0)
               )
              )
             )
            )
           )
           (local.set $7
            (select
             (local.get $0)
             (local.get $7)
             (local.tee $10
              (i32.lt_u
               (local.tee $1
                (i32.sub
                 (i32.and
                  (i32.load offset=4
                   (local.get $0)
                  )
                  (i32.const -8)
                 )
                 (local.get $8)
                )
               )
               (local.get $6)
              )
             )
            )
           )
           (local.set $6
            (select
             (local.get $1)
             (local.get $6)
             (local.get $10)
            )
           )
           (br $while-in)
          )
         )
         (if
          (i32.gt_u
           (local.tee $15
            (i32.load
             (i32.const 3204)
            )
           )
           (local.get $7)
          )
          (call $_abort)
         )
         (if
          (i32.le_u
           (local.tee $9
            (i32.add
             (local.get $7)
             (local.get $8)
            )
           )
           (local.get $7)
          )
          (call $_abort)
         )
         (local.set $11
          (i32.load offset=24
           (local.get $7)
          )
         )
         (if
          (i32.eq
           (local.get $7)
           (local.tee $0
            (i32.load offset=12
             (local.get $7)
            )
           )
          )
          (block $do-once4
           (if
            (i32.eqz
             (local.tee $0
              (i32.load
               (local.tee $1
                (i32.add
                 (local.get $7)
                 (i32.const 20)
                )
               )
              )
             )
            )
            (br_if $do-once4
             (i32.eqz
              (local.tee $0
               (i32.load
                (local.tee $1
                 (i32.add
                  (local.get $7)
                  (i32.const 16)
                 )
                )
               )
              )
             )
            )
           )
           (loop $while-in7
            (block $while-out6
             (if
              (i32.eqz
               (local.tee $10
                (i32.load
                 (local.tee $4
                  (i32.add
                   (local.get $0)
                   (i32.const 20)
                  )
                 )
                )
               )
              )
              (br_if $while-out6
               (i32.eqz
                (local.tee $10
                 (i32.load
                  (local.tee $4
                   (i32.add
                    (local.get $0)
                    (i32.const 16)
                   )
                  )
                 )
                )
               )
              )
             )
             (local.set $1
              (local.get $4)
             )
             (local.set $0
              (local.get $10)
             )
             (br $while-in7)
            )
           )
           (if
            (i32.gt_u
             (local.get $15)
             (local.get $1)
            )
            (call $_abort)
            (block
             (i32.store
              (local.get $1)
              (i32.const 0)
             )
             (local.set $2
              (local.get $0)
             )
            )
           )
          )
          (block
           (if
            (i32.gt_u
             (local.get $15)
             (local.tee $1
              (i32.load offset=8
               (local.get $7)
              )
             )
            )
            (call $_abort)
           )
           (if
            (i32.ne
             (i32.load offset=12
              (local.get $1)
             )
             (local.get $7)
            )
            (call $_abort)
           )
           (if
            (i32.eq
             (local.get $7)
             (i32.load offset=8
              (local.get $0)
             )
            )
            (block
             (i32.store offset=12
              (local.get $1)
              (local.get $0)
             )
             (i32.store offset=8
              (local.get $0)
              (local.get $1)
             )
             (local.set $2
              (local.get $0)
             )
            )
            (call $_abort)
           )
          )
         )
         (if
          (local.get $11)
          (block $label$break$L78
           (if
            (i32.eq
             (local.get $7)
             (i32.load
              (local.tee $1
               (i32.add
                (i32.shl
                 (local.tee $0
                  (i32.load offset=28
                   (local.get $7)
                  )
                 )
                 (i32.const 2)
                )
                (i32.const 3492)
               )
              )
             )
            )
            (block
             (i32.store
              (local.get $1)
              (local.get $2)
             )
             (if
              (i32.eqz
               (local.get $2)
              )
              (block
               (i32.store
                (i32.const 3192)
                (i32.and
                 (local.get $14)
                 (i32.xor
                  (i32.shl
                   (i32.const 1)
                   (local.get $0)
                  )
                  (i32.const -1)
                 )
                )
               )
               (br $label$break$L78)
              )
             )
            )
            (if
             (i32.gt_u
              (i32.load
               (i32.const 3204)
              )
              (local.get $11)
             )
             (call $_abort)
             (block
              (i32.store
               (select
                (i32.add
                 (local.get $11)
                 (i32.const 16)
                )
                (i32.add
                 (local.get $11)
                 (i32.const 20)
                )
                (i32.eq
                 (local.get $7)
                 (i32.load offset=16
                  (local.get $11)
                 )
                )
               )
               (local.get $2)
              )
              (br_if $label$break$L78
               (i32.eqz
                (local.get $2)
               )
              )
             )
            )
           )
           (if
            (i32.gt_u
             (local.tee $1
              (i32.load
               (i32.const 3204)
              )
             )
             (local.get $2)
            )
            (call $_abort)
           )
           (i32.store offset=24
            (local.get $2)
            (local.get $11)
           )
           (if
            (local.tee $0
             (i32.load offset=16
              (local.get $7)
             )
            )
            (if
             (i32.gt_u
              (local.get $1)
              (local.get $0)
             )
             (call $_abort)
             (block
              (i32.store offset=16
               (local.get $2)
               (local.get $0)
              )
              (i32.store offset=24
               (local.get $0)
               (local.get $2)
              )
             )
            )
           )
           (if
            (local.tee $0
             (i32.load offset=20
              (local.get $7)
             )
            )
            (if
             (i32.gt_u
              (i32.load
               (i32.const 3204)
              )
              (local.get $0)
             )
             (call $_abort)
             (block
              (i32.store offset=20
               (local.get $2)
               (local.get $0)
              )
              (i32.store offset=24
               (local.get $0)
               (local.get $2)
              )
             )
            )
           )
          )
         )
         (if
          (i32.lt_u
           (local.get $6)
           (i32.const 16)
          )
          (block
           (i32.store offset=4
            (local.get $7)
            (i32.or
             (local.tee $0
              (i32.add
               (local.get $6)
               (local.get $8)
              )
             )
             (i32.const 3)
            )
           )
           (i32.store offset=4
            (local.tee $0
             (i32.add
              (local.get $0)
              (local.get $7)
             )
            )
            (i32.or
             (i32.load offset=4
              (local.get $0)
             )
             (i32.const 1)
            )
           )
          )
          (block
           (i32.store offset=4
            (local.get $7)
            (i32.or
             (local.get $8)
             (i32.const 3)
            )
           )
           (i32.store offset=4
            (local.get $9)
            (i32.or
             (local.get $6)
             (i32.const 1)
            )
           )
           (i32.store
            (i32.add
             (local.get $6)
             (local.get $9)
            )
            (local.get $6)
           )
           (if
            (local.get $13)
            (block
             (local.set $10
              (i32.load
               (i32.const 3208)
              )
             )
             (local.set $0
              (i32.add
               (i32.shl
                (local.tee $1
                 (i32.shr_u
                  (local.get $13)
                  (i32.const 3)
                 )
                )
                (i32.const 3)
               )
               (i32.const 3228)
              )
             )
             (if
              (i32.and
               (local.tee $1
                (i32.shl
                 (i32.const 1)
                 (local.get $1)
                )
               )
               (local.get $5)
              )
              (if
               (i32.gt_u
                (i32.load
                 (i32.const 3204)
                )
                (local.tee $2
                 (i32.load
                  (local.tee $1
                   (i32.add
                    (local.get $0)
                    (i32.const 8)
                   )
                  )
                 )
                )
               )
               (call $_abort)
               (block
                (local.set $3
                 (local.get $2)
                )
                (local.set $12
                 (local.get $1)
                )
               )
              )
              (block
               (i32.store
                (i32.const 3188)
                (i32.or
                 (local.get $1)
                 (local.get $5)
                )
               )
               (local.set $12
                (i32.add
                 (local.tee $3
                  (local.get $0)
                 )
                 (i32.const 8)
                )
               )
              )
             )
             (i32.store
              (local.get $12)
              (local.get $10)
             )
             (i32.store offset=12
              (local.get $3)
              (local.get $10)
             )
             (i32.store offset=8
              (local.get $10)
              (local.get $3)
             )
             (i32.store offset=12
              (local.get $10)
              (local.get $0)
             )
            )
           )
           (i32.store
            (i32.const 3196)
            (local.get $6)
           )
           (i32.store
            (i32.const 3208)
            (local.get $9)
           )
          )
         )
         (global.set $STACKTOP
          (local.get $16)
         )
         (return
          (i32.add
           (local.get $7)
           (i32.const 8)
          )
         )
        )
        (local.get $8)
       )
      )
      (local.get $8)
     )
    )
    (if (result i32)
     (i32.gt_u
      (local.get $0)
      (i32.const -65)
     )
     (i32.const -1)
     (block $do-once (result i32)
      (local.set $12
       (i32.and
        (local.tee $0
         (i32.add
          (local.get $0)
          (i32.const 11)
         )
        )
        (i32.const -8)
       )
      )
      (if (result i32)
       (local.tee $4
        (i32.load
         (i32.const 3192)
        )
       )
       (block (result i32)
        (local.set $5
         (i32.sub
          (i32.const 0)
          (local.get $12)
         )
        )
        (block $__rjto$1
         (block $__rjti$1
          (br_if $__rjti$1
           (local.tee $2
            (if (result i32)
             (i32.or
              (local.tee $0
               (if (result i32)
                (local.tee $0
                 (i32.load
                  (i32.add
                   (i32.shl
                    (local.tee $18
                     (if (result i32)
                      (local.tee $0
                       (i32.shr_u
                        (local.get $0)
                        (i32.const 8)
                       )
                      )
                      (if (result i32)
                       (i32.gt_u
                        (local.get $12)
                        (i32.const 16777215)
                       )
                       (i32.const 31)
                       (block (result i32)
                        (local.set $0
                         (i32.and
                          (i32.shr_u
                           (i32.add
                            (local.tee $7
                             (i32.shl
                              (local.get $0)
                              (local.tee $2
                               (i32.and
                                (i32.shr_u
                                 (i32.add
                                  (local.get $0)
                                  (i32.const 1048320)
                                 )
                                 (i32.const 16)
                                )
                                (i32.const 8)
                               )
                              )
                             )
                            )
                            (i32.const 520192)
                           )
                           (i32.const 16)
                          )
                          (i32.const 4)
                         )
                        )
                        (i32.or
                         (i32.shl
                          (local.tee $0
                           (i32.add
                            (i32.sub
                             (i32.const 14)
                             (i32.or
                              (local.tee $14
                               (i32.and
                                (i32.shr_u
                                 (i32.add
                                  (local.tee $7
                                   (i32.shl
                                    (local.get $7)
                                    (local.get $0)
                                   )
                                  )
                                  (i32.const 245760)
                                 )
                                 (i32.const 16)
                                )
                                (i32.const 2)
                               )
                              )
                              (i32.or
                               (local.get $0)
                               (local.get $2)
                              )
                             )
                            )
                            (i32.shr_u
                             (i32.shl
                              (local.get $7)
                              (local.get $14)
                             )
                             (i32.const 15)
                            )
                           )
                          )
                          (i32.const 1)
                         )
                         (i32.and
                          (i32.shr_u
                           (local.get $12)
                           (i32.add
                            (local.get $0)
                            (i32.const 7)
                           )
                          )
                          (i32.const 1)
                         )
                        )
                       )
                      )
                      (i32.const 0)
                     )
                    )
                    (i32.const 2)
                   )
                   (i32.const 3492)
                  )
                 )
                )
                (block (result i32)
                 (local.set $2
                  (i32.const 0)
                 )
                 (local.set $14
                  (i32.shl
                   (local.get $12)
                   (select
                    (i32.const 0)
                    (i32.sub
                     (i32.const 25)
                     (i32.shr_u
                      (local.get $18)
                      (i32.const 1)
                     )
                    )
                    (i32.eq
                     (local.get $18)
                     (i32.const 31)
                    )
                   )
                  )
                 )
                 (loop $while-in15 (result i32)
                  (if
                   (i32.lt_u
                    (local.tee $7
                     (i32.sub
                      (i32.and
                       (i32.load offset=4
                        (local.get $0)
                       )
                       (i32.const -8)
                      )
                      (local.get $12)
                     )
                    )
                    (local.get $5)
                   )
                   (local.set $2
                    (if (result i32)
                     (local.get $7)
                     (block (result i32)
                      (local.set $5
                       (local.get $7)
                      )
                      (local.get $0)
                     )
                     (block
                      (local.set $5
                       (i32.const 0)
                      )
                      (local.set $2
                       (local.get $0)
                      )
                      (br $__rjti$1)
                     )
                    )
                   )
                  )
                  (local.set $3
                   (select
                    (local.get $3)
                    (local.tee $3
                     (i32.load offset=20
                      (local.get $0)
                     )
                    )
                    (i32.or
                     (i32.eqz
                      (local.get $3)
                     )
                     (i32.eq
                      (local.get $3)
                      (local.tee $0
                       (i32.load
                        (i32.add
                         (i32.add
                          (local.get $0)
                          (i32.const 16)
                         )
                         (i32.shl
                          (i32.shr_u
                           (local.get $14)
                           (i32.const 31)
                          )
                          (i32.const 2)
                         )
                        )
                       )
                      )
                     )
                    )
                   )
                  )
                  (local.set $14
                   (i32.shl
                    (local.get $14)
                    (i32.const 1)
                   )
                  )
                  (br_if $while-in15
                   (local.get $0)
                  )
                  (local.get $2)
                 )
                )
                (i32.const 0)
               )
              )
              (local.get $3)
             )
             (local.get $3)
             (block (result i32)
              (drop
               (br_if $do-once
                (local.get $12)
                (i32.eqz
                 (local.tee $2
                  (i32.and
                   (local.get $4)
                   (i32.or
                    (local.tee $0
                     (i32.shl
                      (i32.const 2)
                      (local.get $18)
                     )
                    )
                    (i32.sub
                     (i32.const 0)
                     (local.get $0)
                    )
                   )
                  )
                 )
                )
               )
              )
              (local.set $0
               (i32.const 0)
              )
              (i32.load
               (i32.add
                (i32.shl
                 (i32.add
                  (i32.or
                   (i32.or
                    (i32.or
                     (i32.or
                      (local.tee $3
                       (i32.and
                        (i32.shr_u
                         (local.tee $2
                          (i32.add
                           (i32.and
                            (local.get $2)
                            (i32.sub
                             (i32.const 0)
                             (local.get $2)
                            )
                           )
                           (i32.const -1)
                          )
                         )
                         (i32.const 12)
                        )
                        (i32.const 16)
                       )
                      )
                      (local.tee $3
                       (i32.and
                        (i32.shr_u
                         (local.tee $2
                          (i32.shr_u
                           (local.get $2)
                           (local.get $3)
                          )
                         )
                         (i32.const 5)
                        )
                        (i32.const 8)
                       )
                      )
                     )
                     (local.tee $3
                      (i32.and
                       (i32.shr_u
                        (local.tee $2
                         (i32.shr_u
                          (local.get $2)
                          (local.get $3)
                         )
                        )
                        (i32.const 2)
                       )
                       (i32.const 4)
                      )
                     )
                    )
                    (local.tee $3
                     (i32.and
                      (i32.shr_u
                       (local.tee $2
                        (i32.shr_u
                         (local.get $2)
                         (local.get $3)
                        )
                       )
                       (i32.const 1)
                      )
                      (i32.const 2)
                     )
                    )
                   )
                   (local.tee $3
                    (i32.and
                     (i32.shr_u
                      (local.tee $2
                       (i32.shr_u
                        (local.get $2)
                        (local.get $3)
                       )
                      )
                      (i32.const 1)
                     )
                     (i32.const 1)
                    )
                   )
                  )
                  (i32.shr_u
                   (local.get $2)
                   (local.get $3)
                  )
                 )
                 (i32.const 2)
                )
                (i32.const 3492)
               )
              )
             )
            )
           )
          )
          (local.set $3
           (local.get $0)
          )
          (br $__rjto$1)
         )
         (local.set $3
          (local.get $0)
         )
         (local.set $0
          (local.get $5)
         )
         (local.set $5
          (loop $while-in17 (result i32)
           (local.set $7
            (i32.lt_u
             (local.tee $14
              (i32.sub
               (i32.and
                (i32.load offset=4
                 (local.get $2)
                )
                (i32.const -8)
               )
               (local.get $12)
              )
             )
             (local.get $0)
            )
           )
           (local.set $0
            (select
             (local.get $14)
             (local.get $0)
             (local.get $7)
            )
           )
           (local.set $3
            (select
             (local.get $2)
             (local.get $3)
             (local.get $7)
            )
           )
           (if (result i32)
            (block (result i32)
             (if
              (i32.eqz
               (local.tee $5
                (i32.load offset=16
                 (local.get $2)
                )
               )
              )
              (local.set $5
               (i32.load offset=20
                (local.get $2)
               )
              )
             )
             (local.get $5)
            )
            (block
             (local.set $2
              (local.get $5)
             )
             (br $while-in17)
            )
            (local.get $0)
           )
          )
         )
        )
        (if (result i32)
         (local.get $3)
         (if (result i32)
          (i32.lt_u
           (local.get $5)
           (i32.sub
            (i32.load
             (i32.const 3196)
            )
            (local.get $12)
           )
          )
          (block
           (if
            (i32.gt_u
             (local.tee $17
              (i32.load
               (i32.const 3204)
              )
             )
             (local.get $3)
            )
            (call $_abort)
           )
           (if
            (i32.le_u
             (local.tee $9
              (i32.add
               (local.get $3)
               (local.get $12)
              )
             )
             (local.get $3)
            )
            (call $_abort)
           )
           (local.set $15
            (i32.load offset=24
             (local.get $3)
            )
           )
           (if
            (i32.eq
             (local.get $3)
             (local.tee $0
              (i32.load offset=12
               (local.get $3)
              )
             )
            )
            (block $do-once18
             (if
              (i32.eqz
               (local.tee $0
                (i32.load
                 (local.tee $2
                  (i32.add
                   (local.get $3)
                   (i32.const 20)
                  )
                 )
                )
               )
              )
              (br_if $do-once18
               (i32.eqz
                (local.tee $0
                 (i32.load
                  (local.tee $2
                   (i32.add
                    (local.get $3)
                    (i32.const 16)
                   )
                  )
                 )
                )
               )
              )
             )
             (loop $while-in21
              (block $while-out20
               (if
                (i32.eqz
                 (local.tee $6
                  (i32.load
                   (local.tee $10
                    (i32.add
                     (local.get $0)
                     (i32.const 20)
                    )
                   )
                  )
                 )
                )
                (br_if $while-out20
                 (i32.eqz
                  (local.tee $6
                   (i32.load
                    (local.tee $10
                     (i32.add
                      (local.get $0)
                      (i32.const 16)
                     )
                    )
                   )
                  )
                 )
                )
               )
               (local.set $2
                (local.get $10)
               )
               (local.set $0
                (local.get $6)
               )
               (br $while-in21)
              )
             )
             (if
              (i32.gt_u
               (local.get $17)
               (local.get $2)
              )
              (call $_abort)
              (block
               (i32.store
                (local.get $2)
                (i32.const 0)
               )
               (local.set $11
                (local.get $0)
               )
              )
             )
            )
            (block
             (if
              (i32.gt_u
               (local.get $17)
               (local.tee $2
                (i32.load offset=8
                 (local.get $3)
                )
               )
              )
              (call $_abort)
             )
             (if
              (i32.ne
               (i32.load offset=12
                (local.get $2)
               )
               (local.get $3)
              )
              (call $_abort)
             )
             (if
              (i32.eq
               (local.get $3)
               (i32.load offset=8
                (local.get $0)
               )
              )
              (block
               (i32.store offset=12
                (local.get $2)
                (local.get $0)
               )
               (i32.store offset=8
                (local.get $0)
                (local.get $2)
               )
               (local.set $11
                (local.get $0)
               )
              )
              (call $_abort)
             )
            )
           )
           (if
            (local.get $15)
            (block $label$break$L176
             (if
              (i32.eq
               (local.get $3)
               (i32.load
                (local.tee $2
                 (i32.add
                  (i32.shl
                   (local.tee $0
                    (i32.load offset=28
                     (local.get $3)
                    )
                   )
                   (i32.const 2)
                  )
                  (i32.const 3492)
                 )
                )
               )
              )
              (block
               (i32.store
                (local.get $2)
                (local.get $11)
               )
               (if
                (i32.eqz
                 (local.get $11)
                )
                (block
                 (i32.store
                  (i32.const 3192)
                  (local.tee $1
                   (i32.and
                    (local.get $4)
                    (i32.xor
                     (i32.shl
                      (i32.const 1)
                      (local.get $0)
                     )
                     (i32.const -1)
                    )
                   )
                  )
                 )
                 (br $label$break$L176)
                )
               )
              )
              (if
               (i32.gt_u
                (i32.load
                 (i32.const 3204)
                )
                (local.get $15)
               )
               (call $_abort)
               (block
                (i32.store
                 (select
                  (i32.add
                   (local.get $15)
                   (i32.const 16)
                  )
                  (i32.add
                   (local.get $15)
                   (i32.const 20)
                  )
                  (i32.eq
                   (local.get $3)
                   (i32.load offset=16
                    (local.get $15)
                   )
                  )
                 )
                 (local.get $11)
                )
                (if
                 (i32.eqz
                  (local.get $11)
                 )
                 (block
                  (local.set $1
                   (local.get $4)
                  )
                  (br $label$break$L176)
                 )
                )
               )
              )
             )
             (if
              (i32.gt_u
               (local.tee $2
                (i32.load
                 (i32.const 3204)
                )
               )
               (local.get $11)
              )
              (call $_abort)
             )
             (i32.store offset=24
              (local.get $11)
              (local.get $15)
             )
             (if
              (local.tee $0
               (i32.load offset=16
                (local.get $3)
               )
              )
              (if
               (i32.gt_u
                (local.get $2)
                (local.get $0)
               )
               (call $_abort)
               (block
                (i32.store offset=16
                 (local.get $11)
                 (local.get $0)
                )
                (i32.store offset=24
                 (local.get $0)
                 (local.get $11)
                )
               )
              )
             )
             (if
              (local.tee $0
               (i32.load offset=20
                (local.get $3)
               )
              )
              (if
               (i32.gt_u
                (i32.load
                 (i32.const 3204)
                )
                (local.get $0)
               )
               (call $_abort)
               (block
                (i32.store offset=20
                 (local.get $11)
                 (local.get $0)
                )
                (i32.store offset=24
                 (local.get $0)
                 (local.get $11)
                )
                (local.set $1
                 (local.get $4)
                )
               )
              )
              (local.set $1
               (local.get $4)
              )
             )
            )
            (local.set $1
             (local.get $4)
            )
           )
           (if
            (i32.lt_u
             (local.get $5)
             (i32.const 16)
            )
            (block
             (i32.store offset=4
              (local.get $3)
              (i32.or
               (local.tee $0
                (i32.add
                 (local.get $5)
                 (local.get $12)
                )
               )
               (i32.const 3)
              )
             )
             (i32.store offset=4
              (local.tee $0
               (i32.add
                (local.get $0)
                (local.get $3)
               )
              )
              (i32.or
               (i32.load offset=4
                (local.get $0)
               )
               (i32.const 1)
              )
             )
            )
            (block $label$break$L200
             (i32.store offset=4
              (local.get $3)
              (i32.or
               (local.get $12)
               (i32.const 3)
              )
             )
             (i32.store offset=4
              (local.get $9)
              (i32.or
               (local.get $5)
               (i32.const 1)
              )
             )
             (i32.store
              (i32.add
               (local.get $5)
               (local.get $9)
              )
              (local.get $5)
             )
             (local.set $2
              (i32.shr_u
               (local.get $5)
               (i32.const 3)
              )
             )
             (if
              (i32.lt_u
               (local.get $5)
               (i32.const 256)
              )
              (block
               (local.set $0
                (i32.add
                 (i32.shl
                  (local.get $2)
                  (i32.const 3)
                 )
                 (i32.const 3228)
                )
               )
               (if
                (i32.and
                 (local.tee $1
                  (i32.load
                   (i32.const 3188)
                  )
                 )
                 (local.tee $2
                  (i32.shl
                   (i32.const 1)
                   (local.get $2)
                  )
                 )
                )
                (if
                 (i32.gt_u
                  (i32.load
                   (i32.const 3204)
                  )
                  (local.tee $2
                   (i32.load
                    (local.tee $1
                     (i32.add
                      (local.get $0)
                      (i32.const 8)
                     )
                    )
                   )
                  )
                 )
                 (call $_abort)
                 (block
                  (local.set $13
                   (local.get $2)
                  )
                  (local.set $19
                   (local.get $1)
                  )
                 )
                )
                (block
                 (i32.store
                  (i32.const 3188)
                  (i32.or
                   (local.get $1)
                   (local.get $2)
                  )
                 )
                 (local.set $13
                  (local.get $0)
                 )
                 (local.set $19
                  (i32.add
                   (local.get $0)
                   (i32.const 8)
                  )
                 )
                )
               )
               (i32.store
                (local.get $19)
                (local.get $9)
               )
               (i32.store offset=12
                (local.get $13)
                (local.get $9)
               )
               (i32.store offset=8
                (local.get $9)
                (local.get $13)
               )
               (i32.store offset=12
                (local.get $9)
                (local.get $0)
               )
               (br $label$break$L200)
              )
             )
             (local.set $0
              (i32.add
               (i32.shl
                (local.tee $2
                 (if (result i32)
                  (local.tee $0
                   (i32.shr_u
                    (local.get $5)
                    (i32.const 8)
                   )
                  )
                  (if (result i32)
                   (i32.gt_u
                    (local.get $5)
                    (i32.const 16777215)
                   )
                   (i32.const 31)
                   (block (result i32)
                    (local.set $0
                     (i32.and
                      (i32.shr_u
                       (i32.add
                        (local.tee $10
                         (i32.shl
                          (local.get $0)
                          (local.tee $2
                           (i32.and
                            (i32.shr_u
                             (i32.add
                              (local.get $0)
                              (i32.const 1048320)
                             )
                             (i32.const 16)
                            )
                            (i32.const 8)
                           )
                          )
                         )
                        )
                        (i32.const 520192)
                       )
                       (i32.const 16)
                      )
                      (i32.const 4)
                     )
                    )
                    (i32.or
                     (i32.shl
                      (local.tee $0
                       (i32.add
                        (i32.sub
                         (i32.const 14)
                         (i32.or
                          (local.tee $4
                           (i32.and
                            (i32.shr_u
                             (i32.add
                              (local.tee $10
                               (i32.shl
                                (local.get $10)
                                (local.get $0)
                               )
                              )
                              (i32.const 245760)
                             )
                             (i32.const 16)
                            )
                            (i32.const 2)
                           )
                          )
                          (i32.or
                           (local.get $0)
                           (local.get $2)
                          )
                         )
                        )
                        (i32.shr_u
                         (i32.shl
                          (local.get $10)
                          (local.get $4)
                         )
                         (i32.const 15)
                        )
                       )
                      )
                      (i32.const 1)
                     )
                     (i32.and
                      (i32.shr_u
                       (local.get $5)
                       (i32.add
                        (local.get $0)
                        (i32.const 7)
                       )
                      )
                      (i32.const 1)
                     )
                    )
                   )
                  )
                  (i32.const 0)
                 )
                )
                (i32.const 2)
               )
               (i32.const 3492)
              )
             )
             (i32.store offset=28
              (local.get $9)
              (local.get $2)
             )
             (i32.store offset=20
              (local.get $9)
              (i32.const 0)
             )
             (i32.store offset=16
              (local.get $9)
              (i32.const 0)
             )
             (if
              (i32.eqz
               (i32.and
                (local.tee $10
                 (i32.shl
                  (i32.const 1)
                  (local.get $2)
                 )
                )
                (local.get $1)
               )
              )
              (block
               (i32.store
                (i32.const 3192)
                (i32.or
                 (local.get $1)
                 (local.get $10)
                )
               )
               (i32.store
                (local.get $0)
                (local.get $9)
               )
               (i32.store offset=24
                (local.get $9)
                (local.get $0)
               )
               (i32.store offset=12
                (local.get $9)
                (local.get $9)
               )
               (i32.store offset=8
                (local.get $9)
                (local.get $9)
               )
               (br $label$break$L200)
              )
             )
             (if
              (i32.eq
               (local.get $5)
               (i32.and
                (i32.load offset=4
                 (local.tee $0
                  (i32.load
                   (local.get $0)
                  )
                 )
                )
                (i32.const -8)
               )
              )
              (local.set $8
               (local.get $0)
              )
              (block $label$break$L218
               (local.set $2
                (i32.shl
                 (local.get $5)
                 (select
                  (i32.const 0)
                  (i32.sub
                   (i32.const 25)
                   (i32.shr_u
                    (local.get $2)
                    (i32.const 1)
                   )
                  )
                  (i32.eq
                   (local.get $2)
                   (i32.const 31)
                  )
                 )
                )
               )
               (loop $while-in30
                (if
                 (local.tee $1
                  (i32.load
                   (local.tee $10
                    (i32.add
                     (i32.add
                      (local.get $0)
                      (i32.const 16)
                     )
                     (i32.shl
                      (i32.shr_u
                       (local.get $2)
                       (i32.const 31)
                      )
                      (i32.const 2)
                     )
                    )
                   )
                  )
                 )
                 (block
                  (local.set $2
                   (i32.shl
                    (local.get $2)
                    (i32.const 1)
                   )
                  )
                  (if
                   (i32.eq
                    (local.get $5)
                    (i32.and
                     (i32.load offset=4
                      (local.get $1)
                     )
                     (i32.const -8)
                    )
                   )
                   (block
                    (local.set $8
                     (local.get $1)
                    )
                    (br $label$break$L218)
                   )
                   (block
                    (local.set $0
                     (local.get $1)
                    )
                    (br $while-in30)
                   )
                  )
                 )
                )
               )
               (if
                (i32.gt_u
                 (i32.load
                  (i32.const 3204)
                 )
                 (local.get $10)
                )
                (call $_abort)
                (block
                 (i32.store
                  (local.get $10)
                  (local.get $9)
                 )
                 (i32.store offset=24
                  (local.get $9)
                  (local.get $0)
                 )
                 (i32.store offset=12
                  (local.get $9)
                  (local.get $9)
                 )
                 (i32.store offset=8
                  (local.get $9)
                  (local.get $9)
                 )
                 (br $label$break$L200)
                )
               )
              )
             )
             (if
              (i32.and
               (i32.le_u
                (local.tee $0
                 (i32.load
                  (i32.const 3204)
                 )
                )
                (local.get $8)
               )
               (i32.le_u
                (local.get $0)
                (local.tee $0
                 (i32.load offset=8
                  (local.get $8)
                 )
                )
               )
              )
              (block
               (i32.store offset=12
                (local.get $0)
                (local.get $9)
               )
               (i32.store offset=8
                (local.get $8)
                (local.get $9)
               )
               (i32.store offset=8
                (local.get $9)
                (local.get $0)
               )
               (i32.store offset=12
                (local.get $9)
                (local.get $8)
               )
               (i32.store offset=24
                (local.get $9)
                (i32.const 0)
               )
              )
              (call $_abort)
             )
            )
           )
           (global.set $STACKTOP
            (local.get $16)
           )
           (return
            (i32.add
             (local.get $3)
             (i32.const 8)
            )
           )
          )
          (local.get $12)
         )
         (local.get $12)
        )
       )
       (local.get $12)
      )
     )
    )
   )
  )
  (block $folding-inner2
   (block $folding-inner1
    (if
     (i32.ge_u
      (local.tee $1
       (i32.load
        (i32.const 3196)
       )
      )
      (local.get $8)
     )
     (block
      (local.set $0
       (i32.load
        (i32.const 3208)
       )
      )
      (if
       (i32.gt_u
        (local.tee $2
         (i32.sub
          (local.get $1)
          (local.get $8)
         )
        )
        (i32.const 15)
       )
       (block
        (i32.store
         (i32.const 3208)
         (local.tee $3
          (i32.add
           (local.get $0)
           (local.get $8)
          )
         )
        )
        (i32.store
         (i32.const 3196)
         (local.get $2)
        )
        (i32.store offset=4
         (local.get $3)
         (i32.or
          (local.get $2)
          (i32.const 1)
         )
        )
        (i32.store
         (i32.add
          (local.get $0)
          (local.get $1)
         )
         (local.get $2)
        )
        (i32.store offset=4
         (local.get $0)
         (i32.or
          (local.get $8)
          (i32.const 3)
         )
        )
       )
       (block
        (i32.store
         (i32.const 3196)
         (i32.const 0)
        )
        (i32.store
         (i32.const 3208)
         (i32.const 0)
        )
        (i32.store offset=4
         (local.get $0)
         (i32.or
          (local.get $1)
          (i32.const 3)
         )
        )
        (i32.store offset=4
         (local.tee $1
          (i32.add
           (local.get $0)
           (local.get $1)
          )
         )
         (i32.or
          (i32.load offset=4
           (local.get $1)
          )
          (i32.const 1)
         )
        )
       )
      )
      (br $folding-inner1)
     )
    )
    (block $folding-inner0
     (if
      (i32.gt_u
       (local.tee $0
        (i32.load
         (i32.const 3200)
        )
       )
       (local.get $8)
      )
      (br $folding-inner0)
     )
     (if
      (i32.le_u
       (local.tee $3
        (i32.and
         (local.tee $2
          (i32.add
           (local.tee $4
            (i32.add
             (local.get $8)
             (i32.const 47)
            )
           )
           (local.tee $1
            (if (result i32)
             (i32.load
              (i32.const 3660)
             )
             (i32.load
              (i32.const 3668)
             )
             (block (result i32)
              (i32.store
               (i32.const 3668)
               (i32.const 4096)
              )
              (i32.store
               (i32.const 3664)
               (i32.const 4096)
              )
              (i32.store
               (i32.const 3672)
               (i32.const -1)
              )
              (i32.store
               (i32.const 3676)
               (i32.const -1)
              )
              (i32.store
               (i32.const 3680)
               (i32.const 0)
              )
              (i32.store
               (i32.const 3632)
               (i32.const 0)
              )
              (i32.store
               (i32.const 3660)
               (i32.xor
                (i32.and
                 (local.get $16)
                 (i32.const -16)
                )
                (i32.const 1431655768)
               )
              )
              (i32.const 4096)
             )
            )
           )
          )
         )
         (local.tee $11
          (i32.sub
           (i32.const 0)
           (local.get $1)
          )
         )
        )
       )
       (local.get $8)
      )
      (br $folding-inner2)
     )
     (if
      (local.tee $1
       (i32.load
        (i32.const 3628)
       )
      )
      (if
       (i32.or
        (i32.le_u
         (local.tee $13
          (i32.add
           (local.get $3)
           (local.tee $5
            (i32.load
             (i32.const 3620)
            )
           )
          )
         )
         (local.get $5)
        )
        (i32.gt_u
         (local.get $13)
         (local.get $1)
        )
       )
       (br $folding-inner2)
      )
     )
     (local.set $13
      (i32.add
       (local.get $8)
       (i32.const 48)
      )
     )
     (block $__rjto$7
      (block $__rjti$7
       (if
        (i32.and
         (i32.load
          (i32.const 3632)
         )
         (i32.const 4)
        )
        (local.set $2
         (i32.const 0)
        )
        (block
         (block $do-once37
          (block $__rjti$3
           (block $__rjti$2
            (br_if $__rjti$2
             (i32.eqz
              (local.tee $1
               (i32.load
                (i32.const 3212)
               )
              )
             )
            )
            (local.set $5
             (i32.const 3636)
            )
            (loop $while-in34
             (block $while-out33
              (if
               (i32.le_u
                (local.tee $7
                 (i32.load
                  (local.get $5)
                 )
                )
                (local.get $1)
               )
               (br_if $while-out33
                (i32.gt_u
                 (i32.add
                  (local.get $7)
                  (i32.load offset=4
                   (local.get $5)
                  )
                 )
                 (local.get $1)
                )
               )
              )
              (br_if $while-in34
               (local.tee $5
                (i32.load offset=8
                 (local.get $5)
                )
               )
              )
              (br $__rjti$2)
             )
            )
            (if
             (i32.lt_u
              (local.tee $2
               (i32.and
                (local.get $11)
                (i32.sub
                 (local.get $2)
                 (local.get $0)
                )
               )
              )
              (i32.const 2147483647)
             )
             (if
              (i32.eq
               (local.tee $0
                (call $_sbrk
                 (local.get $2)
                )
               )
               (i32.add
                (i32.load
                 (local.get $5)
                )
                (i32.load offset=4
                 (local.get $5)
                )
               )
              )
              (br_if $__rjti$7
               (i32.ne
                (local.get $0)
                (i32.const -1)
               )
              )
              (br $__rjti$3)
             )
             (local.set $2
              (i32.const 0)
             )
            )
            (br $do-once37)
           )
           (local.set $2
            (if (result i32)
             (i32.eq
              (local.tee $0
               (call $_sbrk
                (i32.const 0)
               )
              )
              (i32.const -1)
             )
             (i32.const 0)
             (block (result i32)
              (local.set $1
               (i32.add
                (local.tee $5
                 (i32.load
                  (i32.const 3620)
                 )
                )
                (local.tee $2
                 (i32.add
                  (local.get $3)
                  (select
                   (i32.sub
                    (i32.and
                     (i32.add
                      (local.get $0)
                      (local.tee $2
                       (i32.add
                        (local.tee $1
                         (i32.load
                          (i32.const 3664)
                         )
                        )
                        (i32.const -1)
                       )
                      )
                     )
                     (i32.sub
                      (i32.const 0)
                      (local.get $1)
                     )
                    )
                    (local.get $0)
                   )
                   (i32.const 0)
                   (i32.and
                    (local.get $0)
                    (local.get $2)
                   )
                  )
                 )
                )
               )
              )
              (if (result i32)
               (i32.and
                (i32.lt_u
                 (local.get $2)
                 (i32.const 2147483647)
                )
                (i32.gt_u
                 (local.get $2)
                 (local.get $8)
                )
               )
               (block
                (if
                 (local.tee $11
                  (i32.load
                   (i32.const 3628)
                  )
                 )
                 (if
                  (i32.or
                   (i32.le_u
                    (local.get $1)
                    (local.get $5)
                   )
                   (i32.gt_u
                    (local.get $1)
                    (local.get $11)
                   )
                  )
                  (block
                   (local.set $2
                    (i32.const 0)
                   )
                   (br $do-once37)
                  )
                 )
                )
                (br_if $__rjti$7
                 (i32.eq
                  (local.get $0)
                  (local.tee $1
                   (call $_sbrk
                    (local.get $2)
                   )
                  )
                 )
                )
                (local.set $0
                 (local.get $1)
                )
                (br $__rjti$3)
               )
               (i32.const 0)
              )
             )
            )
           )
           (br $do-once37)
          )
          (if
           (i32.eqz
            (i32.and
             (i32.and
              (i32.ne
               (local.get $0)
               (i32.const -1)
              )
              (i32.lt_u
               (local.get $2)
               (i32.const 2147483647)
              )
             )
             (i32.gt_u
              (local.get $13)
              (local.get $2)
             )
            )
           )
           (if
            (i32.eq
             (local.get $0)
             (i32.const -1)
            )
            (block
             (local.set $2
              (i32.const 0)
             )
             (br $do-once37)
            )
            (br $__rjti$7)
           )
          )
          (br_if $__rjti$7
           (i32.ge_u
            (local.tee $1
             (i32.and
              (i32.add
               (local.tee $1
                (i32.load
                 (i32.const 3668)
                )
               )
               (i32.sub
                (local.get $4)
                (local.get $2)
               )
              )
              (i32.sub
               (i32.const 0)
               (local.get $1)
              )
             )
            )
            (i32.const 2147483647)
           )
          )
          (local.set $4
           (i32.sub
            (i32.const 0)
            (local.get $2)
           )
          )
          (local.set $2
           (if (result i32)
            (i32.eq
             (call $_sbrk
              (local.get $1)
             )
             (i32.const -1)
            )
            (block (result i32)
             (drop
              (call $_sbrk
               (local.get $4)
              )
             )
             (i32.const 0)
            )
            (block
             (local.set $2
              (i32.add
               (local.get $1)
               (local.get $2)
              )
             )
             (br $__rjti$7)
            )
           )
          )
         )
         (i32.store
          (i32.const 3632)
          (i32.or
           (i32.load
            (i32.const 3632)
           )
           (i32.const 4)
          )
         )
        )
       )
       (if
        (i32.lt_u
         (local.get $3)
         (i32.const 2147483647)
        )
        (block
         (local.set $0
          (call $_sbrk
           (local.get $3)
          )
         )
         (local.set $3
          (i32.gt_u
           (local.tee $4
            (i32.sub
             (local.tee $1
              (call $_sbrk
               (i32.const 0)
              )
             )
             (local.get $0)
            )
           )
           (i32.add
            (local.get $8)
            (i32.const 40)
           )
          )
         )
         (local.set $2
          (select
           (local.get $4)
           (local.get $2)
           (local.get $3)
          )
         )
         (br_if $__rjti$7
          (i32.eqz
           (i32.or
            (i32.or
             (i32.xor
              (local.get $3)
              (i32.const 1)
             )
             (i32.eq
              (local.get $0)
              (i32.const -1)
             )
            )
            (i32.xor
             (i32.and
              (i32.and
               (i32.ne
                (local.get $0)
                (i32.const -1)
               )
               (i32.ne
                (local.get $1)
                (i32.const -1)
               )
              )
              (i32.lt_u
               (local.get $0)
               (local.get $1)
              )
             )
             (i32.const 1)
            )
           )
          )
         )
        )
       )
       (br $__rjto$7)
      )
      (i32.store
       (i32.const 3620)
       (local.tee $1
        (i32.add
         (local.get $2)
         (i32.load
          (i32.const 3620)
         )
        )
       )
      )
      (if
       (i32.gt_u
        (local.get $1)
        (i32.load
         (i32.const 3624)
        )
       )
       (i32.store
        (i32.const 3624)
        (local.get $1)
       )
      )
      (if
       (local.tee $4
        (i32.load
         (i32.const 3212)
        )
       )
       (block $label$break$L294
        (local.set $5
         (i32.const 3636)
        )
        (block $__rjto$4
         (block $__rjti$4
          (loop $while-in41
           (br_if $__rjti$4
            (i32.eq
             (local.get $0)
             (i32.add
              (local.tee $1
               (i32.load
                (local.get $5)
               )
              )
              (local.tee $3
               (i32.load offset=4
                (local.get $5)
               )
              )
             )
            )
           )
           (br_if $while-in41
            (local.tee $5
             (i32.load offset=8
              (local.get $5)
             )
            )
           )
          )
          (br $__rjto$4)
         )
         (if
          (i32.eqz
           (i32.and
            (i32.load offset=12
             (local.get $5)
            )
            (i32.const 8)
           )
          )
          (if
           (i32.and
            (i32.le_u
             (local.get $1)
             (local.get $4)
            )
            (i32.gt_u
             (local.get $0)
             (local.get $4)
            )
           )
           (block
            (i32.store offset=4
             (local.get $5)
             (i32.add
              (local.get $2)
              (local.get $3)
             )
            )
            (local.set $0
             (i32.add
              (local.get $4)
              (local.tee $1
               (select
                (i32.and
                 (i32.sub
                  (i32.const 0)
                  (local.tee $0
                   (i32.add
                    (local.get $4)
                    (i32.const 8)
                   )
                  )
                 )
                 (i32.const 7)
                )
                (i32.const 0)
                (i32.and
                 (local.get $0)
                 (i32.const 7)
                )
               )
              )
             )
            )
            (local.set $1
             (i32.sub
              (local.tee $2
               (i32.add
                (local.get $2)
                (i32.load
                 (i32.const 3200)
                )
               )
              )
              (local.get $1)
             )
            )
            (i32.store
             (i32.const 3212)
             (local.get $0)
            )
            (i32.store
             (i32.const 3200)
             (local.get $1)
            )
            (i32.store offset=4
             (local.get $0)
             (i32.or
              (local.get $1)
              (i32.const 1)
             )
            )
            (i32.store offset=4
             (i32.add
              (local.get $2)
              (local.get $4)
             )
             (i32.const 40)
            )
            (i32.store
             (i32.const 3216)
             (i32.load
              (i32.const 3676)
             )
            )
            (br $label$break$L294)
           )
          )
         )
        )
        (if
         (i32.lt_u
          (local.get $0)
          (local.tee $5
           (i32.load
            (i32.const 3204)
           )
          )
         )
         (block
          (i32.store
           (i32.const 3204)
           (local.get $0)
          )
          (local.set $5
           (local.get $0)
          )
         )
        )
        (local.set $1
         (i32.add
          (local.get $0)
          (local.get $2)
         )
        )
        (local.set $7
         (i32.const 3636)
        )
        (block $__rjto$5
         (block $__rjti$5
          (loop $while-in43
           (br_if $__rjti$5
            (i32.eq
             (local.get $1)
             (i32.load
              (local.get $7)
             )
            )
           )
           (br_if $while-in43
            (local.tee $7
             (i32.load offset=8
              (local.get $7)
             )
            )
           )
          )
          (br $__rjto$5)
         )
         (if
          (i32.eqz
           (i32.and
            (i32.load offset=12
             (local.get $7)
            )
            (i32.const 8)
           )
          )
          (block
           (i32.store
            (local.get $7)
            (local.get $0)
           )
           (i32.store offset=4
            (local.get $7)
            (i32.add
             (local.get $2)
             (i32.load offset=4
              (local.get $7)
             )
            )
           )
           (local.set $6
            (i32.add
             (local.get $8)
             (local.tee $13
              (i32.add
               (local.get $0)
               (select
                (i32.and
                 (i32.sub
                  (i32.const 0)
                  (local.tee $2
                   (i32.add
                    (local.get $0)
                    (i32.const 8)
                   )
                  )
                 )
                 (i32.const 7)
                )
                (i32.const 0)
                (i32.and
                 (local.get $2)
                 (i32.const 7)
                )
               )
              )
             )
            )
           )
           (local.set $3
            (i32.sub
             (i32.sub
              (local.tee $2
               (i32.add
                (local.get $1)
                (select
                 (i32.and
                  (i32.sub
                   (i32.const 0)
                   (local.tee $0
                    (i32.add
                     (local.get $1)
                     (i32.const 8)
                    )
                   )
                  )
                  (i32.const 7)
                 )
                 (i32.const 0)
                 (i32.and
                  (local.get $0)
                  (i32.const 7)
                 )
                )
               )
              )
              (local.get $13)
             )
             (local.get $8)
            )
           )
           (i32.store offset=4
            (local.get $13)
            (i32.or
             (local.get $8)
             (i32.const 3)
            )
           )
           (if
            (i32.eq
             (local.get $2)
             (local.get $4)
            )
            (block
             (i32.store
              (i32.const 3200)
              (local.tee $0
               (i32.add
                (local.get $3)
                (i32.load
                 (i32.const 3200)
                )
               )
              )
             )
             (i32.store
              (i32.const 3212)
              (local.get $6)
             )
             (i32.store offset=4
              (local.get $6)
              (i32.or
               (local.get $0)
               (i32.const 1)
              )
             )
            )
            (block $label$break$L317
             (if
              (i32.eq
               (local.get $2)
               (i32.load
                (i32.const 3208)
               )
              )
              (block
               (i32.store
                (i32.const 3196)
                (local.tee $0
                 (i32.add
                  (local.get $3)
                  (i32.load
                   (i32.const 3196)
                  )
                 )
                )
               )
               (i32.store
                (i32.const 3208)
                (local.get $6)
               )
               (i32.store offset=4
                (local.get $6)
                (i32.or
                 (local.get $0)
                 (i32.const 1)
                )
               )
               (i32.store
                (i32.add
                 (local.get $0)
                 (local.get $6)
                )
                (local.get $0)
               )
               (br $label$break$L317)
              )
             )
             (if
              (i32.eq
               (i32.and
                (local.tee $0
                 (i32.load offset=4
                  (local.get $2)
                 )
                )
                (i32.const 3)
               )
               (i32.const 1)
              )
              (block
               (local.set $17
                (i32.and
                 (local.get $0)
                 (i32.const -8)
                )
               )
               (local.set $8
                (i32.shr_u
                 (local.get $0)
                 (i32.const 3)
                )
               )
               (block $label$break$L325
                (if
                 (i32.lt_u
                  (local.get $0)
                  (i32.const 256)
                 )
                 (block
                  (local.set $1
                   (i32.load offset=12
                    (local.get $2)
                   )
                  )
                  (if
                   (i32.ne
                    (local.tee $4
                     (i32.load offset=8
                      (local.get $2)
                     )
                    )
                    (local.tee $0
                     (i32.add
                      (i32.shl
                       (local.get $8)
                       (i32.const 3)
                      )
                      (i32.const 3228)
                     )
                    )
                   )
                   (block $do-once46
                    (if
                     (i32.gt_u
                      (local.get $5)
                      (local.get $4)
                     )
                     (call $_abort)
                    )
                    (br_if $do-once46
                     (i32.eq
                      (local.get $2)
                      (i32.load offset=12
                       (local.get $4)
                      )
                     )
                    )
                    (call $_abort)
                   )
                  )
                  (if
                   (i32.eq
                    (local.get $1)
                    (local.get $4)
                   )
                   (block
                    (i32.store
                     (i32.const 3188)
                     (i32.and
                      (i32.load
                       (i32.const 3188)
                      )
                      (i32.xor
                       (i32.shl
                        (i32.const 1)
                        (local.get $8)
                       )
                       (i32.const -1)
                      )
                     )
                    )
                    (br $label$break$L325)
                   )
                  )
                  (if
                   (i32.eq
                    (local.get $0)
                    (local.get $1)
                   )
                   (local.set $20
                    (i32.add
                     (local.get $1)
                     (i32.const 8)
                    )
                   )
                   (block $do-once48
                    (if
                     (i32.gt_u
                      (local.get $5)
                      (local.get $1)
                     )
                     (call $_abort)
                    )
                    (if
                     (i32.eq
                      (local.get $2)
                      (i32.load
                       (local.tee $0
                        (i32.add
                         (local.get $1)
                         (i32.const 8)
                        )
                       )
                      )
                     )
                     (block
                      (local.set $20
                       (local.get $0)
                      )
                      (br $do-once48)
                     )
                    )
                    (call $_abort)
                   )
                  )
                  (i32.store offset=12
                   (local.get $4)
                   (local.get $1)
                  )
                  (i32.store
                   (local.get $20)
                   (local.get $4)
                  )
                 )
                 (block
                  (local.set $11
                   (i32.load offset=24
                    (local.get $2)
                   )
                  )
                  (if
                   (i32.eq
                    (local.get $2)
                    (local.tee $0
                     (i32.load offset=12
                      (local.get $2)
                     )
                    )
                   )
                   (block $do-once50
                    (if
                     (local.tee $0
                      (i32.load
                       (local.tee $4
                        (i32.add
                         (local.tee $1
                          (i32.add
                           (local.get $2)
                           (i32.const 16)
                          )
                         )
                         (i32.const 4)
                        )
                       )
                      )
                     )
                     (local.set $1
                      (local.get $4)
                     )
                     (br_if $do-once50
                      (i32.eqz
                       (local.tee $0
                        (i32.load
                         (local.get $1)
                        )
                       )
                      )
                     )
                    )
                    (loop $while-in53
                     (block $while-out52
                      (if
                       (i32.eqz
                        (local.tee $8
                         (i32.load
                          (local.tee $4
                           (i32.add
                            (local.get $0)
                            (i32.const 20)
                           )
                          )
                         )
                        )
                       )
                       (br_if $while-out52
                        (i32.eqz
                         (local.tee $8
                          (i32.load
                           (local.tee $4
                            (i32.add
                             (local.get $0)
                             (i32.const 16)
                            )
                           )
                          )
                         )
                        )
                       )
                      )
                      (local.set $1
                       (local.get $4)
                      )
                      (local.set $0
                       (local.get $8)
                      )
                      (br $while-in53)
                     )
                    )
                    (if
                     (i32.gt_u
                      (local.get $5)
                      (local.get $1)
                     )
                     (call $_abort)
                     (block
                      (i32.store
                       (local.get $1)
                       (i32.const 0)
                      )
                      (local.set $9
                       (local.get $0)
                      )
                     )
                    )
                   )
                   (block
                    (if
                     (i32.gt_u
                      (local.get $5)
                      (local.tee $1
                       (i32.load offset=8
                        (local.get $2)
                       )
                      )
                     )
                     (call $_abort)
                    )
                    (if
                     (i32.ne
                      (i32.load offset=12
                       (local.get $1)
                      )
                      (local.get $2)
                     )
                     (call $_abort)
                    )
                    (if
                     (i32.eq
                      (local.get $2)
                      (i32.load offset=8
                       (local.get $0)
                      )
                     )
                     (block
                      (i32.store offset=12
                       (local.get $1)
                       (local.get $0)
                      )
                      (i32.store offset=8
                       (local.get $0)
                       (local.get $1)
                      )
                      (local.set $9
                       (local.get $0)
                      )
                     )
                     (call $_abort)
                    )
                   )
                  )
                  (br_if $label$break$L325
                   (i32.eqz
                    (local.get $11)
                   )
                  )
                  (if
                   (i32.eq
                    (local.get $2)
                    (i32.load
                     (local.tee $1
                      (i32.add
                       (i32.shl
                        (local.tee $0
                         (i32.load offset=28
                          (local.get $2)
                         )
                        )
                        (i32.const 2)
                       )
                       (i32.const 3492)
                      )
                     )
                    )
                   )
                   (block $do-once54
                    (i32.store
                     (local.get $1)
                     (local.get $9)
                    )
                    (br_if $do-once54
                     (local.get $9)
                    )
                    (i32.store
                     (i32.const 3192)
                     (i32.and
                      (i32.load
                       (i32.const 3192)
                      )
                      (i32.xor
                       (i32.shl
                        (i32.const 1)
                        (local.get $0)
                       )
                       (i32.const -1)
                      )
                     )
                    )
                    (br $label$break$L325)
                   )
                   (if
                    (i32.gt_u
                     (i32.load
                      (i32.const 3204)
                     )
                     (local.get $11)
                    )
                    (call $_abort)
                    (block
                     (i32.store
                      (select
                       (i32.add
                        (local.get $11)
                        (i32.const 16)
                       )
                       (i32.add
                        (local.get $11)
                        (i32.const 20)
                       )
                       (i32.eq
                        (local.get $2)
                        (i32.load offset=16
                         (local.get $11)
                        )
                       )
                      )
                      (local.get $9)
                     )
                     (br_if $label$break$L325
                      (i32.eqz
                       (local.get $9)
                      )
                     )
                    )
                   )
                  )
                  (if
                   (i32.gt_u
                    (local.tee $1
                     (i32.load
                      (i32.const 3204)
                     )
                    )
                    (local.get $9)
                   )
                   (call $_abort)
                  )
                  (i32.store offset=24
                   (local.get $9)
                   (local.get $11)
                  )
                  (if
                   (local.tee $0
                    (i32.load offset=16
                     (local.get $2)
                    )
                   )
                   (if
                    (i32.gt_u
                     (local.get $1)
                     (local.get $0)
                    )
                    (call $_abort)
                    (block
                     (i32.store offset=16
                      (local.get $9)
                      (local.get $0)
                     )
                     (i32.store offset=24
                      (local.get $0)
                      (local.get $9)
                     )
                    )
                   )
                  )
                  (br_if $label$break$L325
                   (i32.eqz
                    (local.tee $0
                     (i32.load offset=20
                      (local.get $2)
                     )
                    )
                   )
                  )
                  (if
                   (i32.gt_u
                    (i32.load
                     (i32.const 3204)
                    )
                    (local.get $0)
                   )
                   (call $_abort)
                   (block
                    (i32.store offset=20
                     (local.get $9)
                     (local.get $0)
                    )
                    (i32.store offset=24
                     (local.get $0)
                     (local.get $9)
                    )
                   )
                  )
                 )
                )
               )
               (local.set $2
                (i32.add
                 (local.get $2)
                 (local.get $17)
                )
               )
               (local.set $3
                (i32.add
                 (local.get $3)
                 (local.get $17)
                )
               )
              )
             )
             (i32.store offset=4
              (local.get $2)
              (i32.and
               (i32.load offset=4
                (local.get $2)
               )
               (i32.const -2)
              )
             )
             (i32.store offset=4
              (local.get $6)
              (i32.or
               (local.get $3)
               (i32.const 1)
              )
             )
             (i32.store
              (i32.add
               (local.get $3)
               (local.get $6)
              )
              (local.get $3)
             )
             (local.set $1
              (i32.shr_u
               (local.get $3)
               (i32.const 3)
              )
             )
             (if
              (i32.lt_u
               (local.get $3)
               (i32.const 256)
              )
              (block
               (local.set $0
                (i32.add
                 (i32.shl
                  (local.get $1)
                  (i32.const 3)
                 )
                 (i32.const 3228)
                )
               )
               (if
                (i32.and
                 (local.tee $2
                  (i32.load
                   (i32.const 3188)
                  )
                 )
                 (local.tee $1
                  (i32.shl
                   (i32.const 1)
                   (local.get $1)
                  )
                 )
                )
                (block $do-once58
                 (if
                  (i32.le_u
                   (i32.load
                    (i32.const 3204)
                   )
                   (local.tee $2
                    (i32.load
                     (local.tee $1
                      (i32.add
                       (local.get $0)
                       (i32.const 8)
                      )
                     )
                    )
                   )
                  )
                  (block
                   (local.set $15
                    (local.get $2)
                   )
                   (local.set $21
                    (local.get $1)
                   )
                   (br $do-once58)
                  )
                 )
                 (call $_abort)
                )
                (block
                 (i32.store
                  (i32.const 3188)
                  (i32.or
                   (local.get $1)
                   (local.get $2)
                  )
                 )
                 (local.set $15
                  (local.get $0)
                 )
                 (local.set $21
                  (i32.add
                   (local.get $0)
                   (i32.const 8)
                  )
                 )
                )
               )
               (i32.store
                (local.get $21)
                (local.get $6)
               )
               (i32.store offset=12
                (local.get $15)
                (local.get $6)
               )
               (i32.store offset=8
                (local.get $6)
                (local.get $15)
               )
               (i32.store offset=12
                (local.get $6)
                (local.get $0)
               )
               (br $label$break$L317)
              )
             )
             (local.set $0
              (i32.add
               (i32.shl
                (local.tee $1
                 (if (result i32)
                  (local.tee $0
                   (i32.shr_u
                    (local.get $3)
                    (i32.const 8)
                   )
                  )
                  (if (result i32)
                   (i32.gt_u
                    (local.get $3)
                    (i32.const 16777215)
                   )
                   (i32.const 31)
                   (block (result i32)
                    (local.set $0
                     (i32.and
                      (i32.shr_u
                       (i32.add
                        (local.tee $2
                         (i32.shl
                          (local.get $0)
                          (local.tee $1
                           (i32.and
                            (i32.shr_u
                             (i32.add
                              (local.get $0)
                              (i32.const 1048320)
                             )
                             (i32.const 16)
                            )
                            (i32.const 8)
                           )
                          )
                         )
                        )
                        (i32.const 520192)
                       )
                       (i32.const 16)
                      )
                      (i32.const 4)
                     )
                    )
                    (i32.or
                     (i32.shl
                      (local.tee $0
                       (i32.add
                        (i32.sub
                         (i32.const 14)
                         (i32.or
                          (local.tee $4
                           (i32.and
                            (i32.shr_u
                             (i32.add
                              (local.tee $2
                               (i32.shl
                                (local.get $2)
                                (local.get $0)
                               )
                              )
                              (i32.const 245760)
                             )
                             (i32.const 16)
                            )
                            (i32.const 2)
                           )
                          )
                          (i32.or
                           (local.get $0)
                           (local.get $1)
                          )
                         )
                        )
                        (i32.shr_u
                         (i32.shl
                          (local.get $2)
                          (local.get $4)
                         )
                         (i32.const 15)
                        )
                       )
                      )
                      (i32.const 1)
                     )
                     (i32.and
                      (i32.shr_u
                       (local.get $3)
                       (i32.add
                        (local.get $0)
                        (i32.const 7)
                       )
                      )
                      (i32.const 1)
                     )
                    )
                   )
                  )
                  (i32.const 0)
                 )
                )
                (i32.const 2)
               )
               (i32.const 3492)
              )
             )
             (i32.store offset=28
              (local.get $6)
              (local.get $1)
             )
             (i32.store offset=20
              (local.get $6)
              (i32.const 0)
             )
             (i32.store offset=16
              (local.get $6)
              (i32.const 0)
             )
             (if
              (i32.eqz
               (i32.and
                (local.tee $2
                 (i32.load
                  (i32.const 3192)
                 )
                )
                (local.tee $4
                 (i32.shl
                  (i32.const 1)
                  (local.get $1)
                 )
                )
               )
              )
              (block
               (i32.store
                (i32.const 3192)
                (i32.or
                 (local.get $2)
                 (local.get $4)
                )
               )
               (i32.store
                (local.get $0)
                (local.get $6)
               )
               (i32.store offset=24
                (local.get $6)
                (local.get $0)
               )
               (i32.store offset=12
                (local.get $6)
                (local.get $6)
               )
               (i32.store offset=8
                (local.get $6)
                (local.get $6)
               )
               (br $label$break$L317)
              )
             )
             (if
              (i32.eq
               (local.get $3)
               (i32.and
                (i32.load offset=4
                 (local.tee $0
                  (i32.load
                   (local.get $0)
                  )
                 )
                )
                (i32.const -8)
               )
              )
              (local.set $10
               (local.get $0)
              )
              (block $label$break$L410
               (local.set $2
                (i32.shl
                 (local.get $3)
                 (select
                  (i32.const 0)
                  (i32.sub
                   (i32.const 25)
                   (i32.shr_u
                    (local.get $1)
                    (i32.const 1)
                   )
                  )
                  (i32.eq
                   (local.get $1)
                   (i32.const 31)
                  )
                 )
                )
               )
               (loop $while-in64
                (if
                 (local.tee $1
                  (i32.load
                   (local.tee $4
                    (i32.add
                     (i32.add
                      (local.get $0)
                      (i32.const 16)
                     )
                     (i32.shl
                      (i32.shr_u
                       (local.get $2)
                       (i32.const 31)
                      )
                      (i32.const 2)
                     )
                    )
                   )
                  )
                 )
                 (block
                  (local.set $2
                   (i32.shl
                    (local.get $2)
                    (i32.const 1)
                   )
                  )
                  (if
                   (i32.eq
                    (local.get $3)
                    (i32.and
                     (i32.load offset=4
                      (local.get $1)
                     )
                     (i32.const -8)
                    )
                   )
                   (block
                    (local.set $10
                     (local.get $1)
                    )
                    (br $label$break$L410)
                   )
                   (block
                    (local.set $0
                     (local.get $1)
                    )
                    (br $while-in64)
                   )
                  )
                 )
                )
               )
               (if
                (i32.gt_u
                 (i32.load
                  (i32.const 3204)
                 )
                 (local.get $4)
                )
                (call $_abort)
                (block
                 (i32.store
                  (local.get $4)
                  (local.get $6)
                 )
                 (i32.store offset=24
                  (local.get $6)
                  (local.get $0)
                 )
                 (i32.store offset=12
                  (local.get $6)
                  (local.get $6)
                 )
                 (i32.store offset=8
                  (local.get $6)
                  (local.get $6)
                 )
                 (br $label$break$L317)
                )
               )
              )
             )
             (if
              (i32.and
               (i32.le_u
                (local.tee $0
                 (i32.load
                  (i32.const 3204)
                 )
                )
                (local.get $10)
               )
               (i32.le_u
                (local.get $0)
                (local.tee $0
                 (i32.load offset=8
                  (local.get $10)
                 )
                )
               )
              )
              (block
               (i32.store offset=12
                (local.get $0)
                (local.get $6)
               )
               (i32.store offset=8
                (local.get $10)
                (local.get $6)
               )
               (i32.store offset=8
                (local.get $6)
                (local.get $0)
               )
               (i32.store offset=12
                (local.get $6)
                (local.get $10)
               )
               (i32.store offset=24
                (local.get $6)
                (i32.const 0)
               )
              )
              (call $_abort)
             )
            )
           )
           (global.set $STACKTOP
            (local.get $16)
           )
           (return
            (i32.add
             (local.get $13)
             (i32.const 8)
            )
           )
          )
         )
        )
        (local.set $5
         (i32.const 3636)
        )
        (loop $while-in66
         (block $while-out65
          (if
           (i32.le_u
            (local.tee $1
             (i32.load
              (local.get $5)
             )
            )
            (local.get $4)
           )
           (br_if $while-out65
            (i32.gt_u
             (local.tee $10
              (i32.add
               (local.get $1)
               (i32.load offset=4
                (local.get $5)
               )
              )
             )
             (local.get $4)
            )
           )
          )
          (local.set $5
           (i32.load offset=8
            (local.get $5)
           )
          )
          (br $while-in66)
         )
        )
        (i32.store
         (i32.const 3212)
         (local.tee $3
          (i32.add
           (local.get $0)
           (local.tee $1
            (select
             (i32.and
              (i32.sub
               (i32.const 0)
               (local.tee $1
                (i32.add
                 (local.get $0)
                 (i32.const 8)
                )
               )
              )
              (i32.const 7)
             )
             (i32.const 0)
             (i32.and
              (local.get $1)
              (i32.const 7)
             )
            )
           )
          )
         )
        )
        (i32.store
         (i32.const 3200)
         (local.tee $1
          (i32.sub
           (local.tee $5
            (i32.add
             (local.get $2)
             (i32.const -40)
            )
           )
           (local.get $1)
          )
         )
        )
        (i32.store offset=4
         (local.get $3)
         (i32.or
          (local.get $1)
          (i32.const 1)
         )
        )
        (i32.store offset=4
         (i32.add
          (local.get $0)
          (local.get $5)
         )
         (i32.const 40)
        )
        (i32.store
         (i32.const 3216)
         (i32.load
          (i32.const 3676)
         )
        )
        (i32.store offset=4
         (local.tee $3
          (select
           (local.get $4)
           (local.tee $1
            (i32.add
             (select
              (i32.and
               (i32.sub
                (i32.const 0)
                (local.tee $3
                 (i32.add
                  (local.tee $1
                   (i32.add
                    (local.get $10)
                    (i32.const -47)
                   )
                  )
                  (i32.const 8)
                 )
                )
               )
               (i32.const 7)
              )
              (i32.const 0)
              (i32.and
               (local.get $3)
               (i32.const 7)
              )
             )
             (local.get $1)
            )
           )
           (i32.lt_u
            (local.get $1)
            (i32.add
             (local.get $4)
             (i32.const 16)
            )
           )
          )
         )
         (i32.const 27)
        )
        (i64.store offset=8 align=4
         (local.get $3)
         (i64.load align=4
          (i32.const 3636)
         )
        )
        (i64.store offset=16 align=4
         (local.get $3)
         (i64.load align=4
          (i32.const 3644)
         )
        )
        (i32.store
         (i32.const 3636)
         (local.get $0)
        )
        (i32.store
         (i32.const 3640)
         (local.get $2)
        )
        (i32.store
         (i32.const 3648)
         (i32.const 0)
        )
        (i32.store
         (i32.const 3644)
         (i32.add
          (local.get $3)
          (i32.const 8)
         )
        )
        (local.set $0
         (i32.add
          (local.get $3)
          (i32.const 24)
         )
        )
        (loop $while-in68
         (i32.store
          (local.tee $1
           (i32.add
            (local.get $0)
            (i32.const 4)
           )
          )
          (i32.const 7)
         )
         (if
          (i32.lt_u
           (i32.add
            (local.get $0)
            (i32.const 8)
           )
           (local.get $10)
          )
          (block
           (local.set $0
            (local.get $1)
           )
           (br $while-in68)
          )
         )
        )
        (if
         (i32.ne
          (local.get $3)
          (local.get $4)
         )
         (block
          (i32.store offset=4
           (local.get $3)
           (i32.and
            (i32.load offset=4
             (local.get $3)
            )
            (i32.const -2)
           )
          )
          (i32.store offset=4
           (local.get $4)
           (i32.or
            (local.tee $2
             (i32.sub
              (local.get $3)
              (local.get $4)
             )
            )
            (i32.const 1)
           )
          )
          (i32.store
           (local.get $3)
           (local.get $2)
          )
          (local.set $1
           (i32.shr_u
            (local.get $2)
            (i32.const 3)
           )
          )
          (if
           (i32.lt_u
            (local.get $2)
            (i32.const 256)
           )
           (block
            (local.set $0
             (i32.add
              (i32.shl
               (local.get $1)
               (i32.const 3)
              )
              (i32.const 3228)
             )
            )
            (if
             (i32.and
              (local.tee $2
               (i32.load
                (i32.const 3188)
               )
              )
              (local.tee $1
               (i32.shl
                (i32.const 1)
                (local.get $1)
               )
              )
             )
             (if
              (i32.gt_u
               (i32.load
                (i32.const 3204)
               )
               (local.tee $2
                (i32.load
                 (local.tee $1
                  (i32.add
                   (local.get $0)
                   (i32.const 8)
                  )
                 )
                )
               )
              )
              (call $_abort)
              (block
               (local.set $17
                (local.get $2)
               )
               (local.set $22
                (local.get $1)
               )
              )
             )
             (block
              (i32.store
               (i32.const 3188)
               (i32.or
                (local.get $1)
                (local.get $2)
               )
              )
              (local.set $17
               (local.get $0)
              )
              (local.set $22
               (i32.add
                (local.get $0)
                (i32.const 8)
               )
              )
             )
            )
            (i32.store
             (local.get $22)
             (local.get $4)
            )
            (i32.store offset=12
             (local.get $17)
             (local.get $4)
            )
            (i32.store offset=8
             (local.get $4)
             (local.get $17)
            )
            (i32.store offset=12
             (local.get $4)
             (local.get $0)
            )
            (br $label$break$L294)
           )
          )
          (local.set $0
           (i32.add
            (i32.shl
             (local.tee $1
              (if (result i32)
               (local.tee $0
                (i32.shr_u
                 (local.get $2)
                 (i32.const 8)
                )
               )
               (if (result i32)
                (i32.gt_u
                 (local.get $2)
                 (i32.const 16777215)
                )
                (i32.const 31)
                (block (result i32)
                 (local.set $0
                  (i32.and
                   (i32.shr_u
                    (i32.add
                     (local.tee $3
                      (i32.shl
                       (local.get $0)
                       (local.tee $1
                        (i32.and
                         (i32.shr_u
                          (i32.add
                           (local.get $0)
                           (i32.const 1048320)
                          )
                          (i32.const 16)
                         )
                         (i32.const 8)
                        )
                       )
                      )
                     )
                     (i32.const 520192)
                    )
                    (i32.const 16)
                   )
                   (i32.const 4)
                  )
                 )
                 (i32.or
                  (i32.shl
                   (local.tee $0
                    (i32.add
                     (i32.sub
                      (i32.const 14)
                      (i32.or
                       (local.tee $10
                        (i32.and
                         (i32.shr_u
                          (i32.add
                           (local.tee $3
                            (i32.shl
                             (local.get $3)
                             (local.get $0)
                            )
                           )
                           (i32.const 245760)
                          )
                          (i32.const 16)
                         )
                         (i32.const 2)
                        )
                       )
                       (i32.or
                        (local.get $0)
                        (local.get $1)
                       )
                      )
                     )
                     (i32.shr_u
                      (i32.shl
                       (local.get $3)
                       (local.get $10)
                      )
                      (i32.const 15)
                     )
                    )
                   )
                   (i32.const 1)
                  )
                  (i32.and
                   (i32.shr_u
                    (local.get $2)
                    (i32.add
                     (local.get $0)
                     (i32.const 7)
                    )
                   )
                   (i32.const 1)
                  )
                 )
                )
               )
               (i32.const 0)
              )
             )
             (i32.const 2)
            )
            (i32.const 3492)
           )
          )
          (i32.store offset=28
           (local.get $4)
           (local.get $1)
          )
          (i32.store offset=20
           (local.get $4)
           (i32.const 0)
          )
          (i32.store offset=16
           (local.get $4)
           (i32.const 0)
          )
          (if
           (i32.eqz
            (i32.and
             (local.tee $3
              (i32.load
               (i32.const 3192)
              )
             )
             (local.tee $10
              (i32.shl
               (i32.const 1)
               (local.get $1)
              )
             )
            )
           )
           (block
            (i32.store
             (i32.const 3192)
             (i32.or
              (local.get $3)
              (local.get $10)
             )
            )
            (i32.store
             (local.get $0)
             (local.get $4)
            )
            (i32.store offset=24
             (local.get $4)
             (local.get $0)
            )
            (i32.store offset=12
             (local.get $4)
             (local.get $4)
            )
            (i32.store offset=8
             (local.get $4)
             (local.get $4)
            )
            (br $label$break$L294)
           )
          )
          (if
           (i32.eq
            (i32.and
             (i32.load offset=4
              (local.tee $0
               (i32.load
                (local.get $0)
               )
              )
             )
             (i32.const -8)
            )
            (local.get $2)
           )
           (local.set $6
            (local.get $0)
           )
           (block $label$break$L451
            (local.set $5
             (i32.shl
              (local.get $2)
              (select
               (i32.const 0)
               (i32.sub
                (i32.const 25)
                (i32.shr_u
                 (local.get $1)
                 (i32.const 1)
                )
               )
               (i32.eq
                (local.get $1)
                (i32.const 31)
               )
              )
             )
            )
            (loop $while-in71
             (if
              (local.tee $1
               (i32.load
                (local.tee $3
                 (i32.add
                  (i32.add
                   (local.get $0)
                   (i32.const 16)
                  )
                  (i32.shl
                   (i32.shr_u
                    (local.get $5)
                    (i32.const 31)
                   )
                   (i32.const 2)
                  )
                 )
                )
               )
              )
              (block
               (local.set $5
                (i32.shl
                 (local.get $5)
                 (i32.const 1)
                )
               )
               (if
                (i32.eq
                 (i32.and
                  (i32.load offset=4
                   (local.get $1)
                  )
                  (i32.const -8)
                 )
                 (local.get $2)
                )
                (block
                 (local.set $6
                  (local.get $1)
                 )
                 (br $label$break$L451)
                )
                (block
                 (local.set $0
                  (local.get $1)
                 )
                 (br $while-in71)
                )
               )
              )
             )
            )
            (if
             (i32.gt_u
              (i32.load
               (i32.const 3204)
              )
              (local.get $3)
             )
             (call $_abort)
             (block
              (i32.store
               (local.get $3)
               (local.get $4)
              )
              (i32.store offset=24
               (local.get $4)
               (local.get $0)
              )
              (i32.store offset=12
               (local.get $4)
               (local.get $4)
              )
              (i32.store offset=8
               (local.get $4)
               (local.get $4)
              )
              (br $label$break$L294)
             )
            )
           )
          )
          (if
           (i32.and
            (i32.le_u
             (local.tee $0
              (i32.load
               (i32.const 3204)
              )
             )
             (local.get $6)
            )
            (i32.le_u
             (local.get $0)
             (local.tee $0
              (i32.load offset=8
               (local.get $6)
              )
             )
            )
           )
           (block
            (i32.store offset=12
             (local.get $0)
             (local.get $4)
            )
            (i32.store offset=8
             (local.get $6)
             (local.get $4)
            )
            (i32.store offset=8
             (local.get $4)
             (local.get $0)
            )
            (i32.store offset=12
             (local.get $4)
             (local.get $6)
            )
            (i32.store offset=24
             (local.get $4)
             (i32.const 0)
            )
           )
           (call $_abort)
          )
         )
        )
       )
       (block
        (if
         (i32.or
          (i32.eqz
           (local.tee $1
            (i32.load
             (i32.const 3204)
            )
           )
          )
          (i32.lt_u
           (local.get $0)
           (local.get $1)
          )
         )
         (i32.store
          (i32.const 3204)
          (local.get $0)
         )
        )
        (i32.store
         (i32.const 3636)
         (local.get $0)
        )
        (i32.store
         (i32.const 3640)
         (local.get $2)
        )
        (i32.store
         (i32.const 3648)
         (i32.const 0)
        )
        (i32.store
         (i32.const 3224)
         (i32.load
          (i32.const 3660)
         )
        )
        (i32.store
         (i32.const 3220)
         (i32.const -1)
        )
        (i32.store
         (i32.const 3240)
         (i32.const 3228)
        )
        (i32.store
         (i32.const 3236)
         (i32.const 3228)
        )
        (i32.store
         (i32.const 3248)
         (i32.const 3236)
        )
        (i32.store
         (i32.const 3244)
         (i32.const 3236)
        )
        (i32.store
         (i32.const 3256)
         (i32.const 3244)
        )
        (i32.store
         (i32.const 3252)
         (i32.const 3244)
        )
        (i32.store
         (i32.const 3264)
         (i32.const 3252)
        )
        (i32.store
         (i32.const 3260)
         (i32.const 3252)
        )
        (i32.store
         (i32.const 3272)
         (i32.const 3260)
        )
        (i32.store
         (i32.const 3268)
         (i32.const 3260)
        )
        (i32.store
         (i32.const 3280)
         (i32.const 3268)
        )
        (i32.store
         (i32.const 3276)
         (i32.const 3268)
        )
        (i32.store
         (i32.const 3288)
         (i32.const 3276)
        )
        (i32.store
         (i32.const 3284)
         (i32.const 3276)
        )
        (i32.store
         (i32.const 3296)
         (i32.const 3284)
        )
        (i32.store
         (i32.const 3292)
         (i32.const 3284)
        )
        (i32.store
         (i32.const 3304)
         (i32.const 3292)
        )
        (i32.store
         (i32.const 3300)
         (i32.const 3292)
        )
        (i32.store
         (i32.const 3312)
         (i32.const 3300)
        )
        (i32.store
         (i32.const 3308)
         (i32.const 3300)
        )
        (i32.store
         (i32.const 3320)
         (i32.const 3308)
        )
        (i32.store
         (i32.const 3316)
         (i32.const 3308)
        )
        (i32.store
         (i32.const 3328)
         (i32.const 3316)
        )
        (i32.store
         (i32.const 3324)
         (i32.const 3316)
        )
        (i32.store
         (i32.const 3336)
         (i32.const 3324)
        )
        (i32.store
         (i32.const 3332)
         (i32.const 3324)
        )
        (i32.store
         (i32.const 3344)
         (i32.const 3332)
        )
        (i32.store
         (i32.const 3340)
         (i32.const 3332)
        )
        (i32.store
         (i32.const 3352)
         (i32.const 3340)
        )
        (i32.store
         (i32.const 3348)
         (i32.const 3340)
        )
        (i32.store
         (i32.const 3360)
         (i32.const 3348)
        )
        (i32.store
         (i32.const 3356)
         (i32.const 3348)
        )
        (i32.store
         (i32.const 3368)
         (i32.const 3356)
        )
        (i32.store
         (i32.const 3364)
         (i32.const 3356)
        )
        (i32.store
         (i32.const 3376)
         (i32.const 3364)
        )
        (i32.store
         (i32.const 3372)
         (i32.const 3364)
        )
        (i32.store
         (i32.const 3384)
         (i32.const 3372)
        )
        (i32.store
         (i32.const 3380)
         (i32.const 3372)
        )
        (i32.store
         (i32.const 3392)
         (i32.const 3380)
        )
        (i32.store
         (i32.const 3388)
         (i32.const 3380)
        )
        (i32.store
         (i32.const 3400)
         (i32.const 3388)
        )
        (i32.store
         (i32.const 3396)
         (i32.const 3388)
        )
        (i32.store
         (i32.const 3408)
         (i32.const 3396)
        )
        (i32.store
         (i32.const 3404)
         (i32.const 3396)
        )
        (i32.store
         (i32.const 3416)
         (i32.const 3404)
        )
        (i32.store
         (i32.const 3412)
         (i32.const 3404)
        )
        (i32.store
         (i32.const 3424)
         (i32.const 3412)
        )
        (i32.store
         (i32.const 3420)
         (i32.const 3412)
        )
        (i32.store
         (i32.const 3432)
         (i32.const 3420)
        )
        (i32.store
         (i32.const 3428)
         (i32.const 3420)
        )
        (i32.store
         (i32.const 3440)
         (i32.const 3428)
        )
        (i32.store
         (i32.const 3436)
         (i32.const 3428)
        )
        (i32.store
         (i32.const 3448)
         (i32.const 3436)
        )
        (i32.store
         (i32.const 3444)
         (i32.const 3436)
        )
        (i32.store
         (i32.const 3456)
         (i32.const 3444)
        )
        (i32.store
         (i32.const 3452)
         (i32.const 3444)
        )
        (i32.store
         (i32.const 3464)
         (i32.const 3452)
        )
        (i32.store
         (i32.const 3460)
         (i32.const 3452)
        )
        (i32.store
         (i32.const 3472)
         (i32.const 3460)
        )
        (i32.store
         (i32.const 3468)
         (i32.const 3460)
        )
        (i32.store
         (i32.const 3480)
         (i32.const 3468)
        )
        (i32.store
         (i32.const 3476)
         (i32.const 3468)
        )
        (i32.store
         (i32.const 3488)
         (i32.const 3476)
        )
        (i32.store
         (i32.const 3484)
         (i32.const 3476)
        )
        (i32.store
         (i32.const 3212)
         (local.tee $3
          (i32.add
           (local.get $0)
           (local.tee $1
            (select
             (i32.and
              (i32.sub
               (i32.const 0)
               (local.tee $1
                (i32.add
                 (local.get $0)
                 (i32.const 8)
                )
               )
              )
              (i32.const 7)
             )
             (i32.const 0)
             (i32.and
              (local.get $1)
              (i32.const 7)
             )
            )
           )
          )
         )
        )
        (i32.store
         (i32.const 3200)
         (local.tee $1
          (i32.sub
           (local.tee $2
            (i32.add
             (local.get $2)
             (i32.const -40)
            )
           )
           (local.get $1)
          )
         )
        )
        (i32.store offset=4
         (local.get $3)
         (i32.or
          (local.get $1)
          (i32.const 1)
         )
        )
        (i32.store offset=4
         (i32.add
          (local.get $0)
          (local.get $2)
         )
         (i32.const 40)
        )
        (i32.store
         (i32.const 3216)
         (i32.load
          (i32.const 3676)
         )
        )
       )
      )
      (if
       (i32.gt_u
        (local.tee $0
         (i32.load
          (i32.const 3200)
         )
        )
        (local.get $8)
       )
       (br $folding-inner0)
      )
     )
     (i32.store
      (i32.const 3184)
      (i32.const 12)
     )
     (br $folding-inner2)
    )
    (i32.store
     (i32.const 3200)
     (local.tee $2
      (i32.sub
       (local.get $0)
       (local.get $8)
      )
     )
    )
    (i32.store
     (i32.const 3212)
     (local.tee $1
      (i32.add
       (local.get $8)
       (local.tee $0
        (i32.load
         (i32.const 3212)
        )
       )
      )
     )
    )
    (i32.store offset=4
     (local.get $1)
     (i32.or
      (local.get $2)
      (i32.const 1)
     )
    )
    (i32.store offset=4
     (local.get $0)
     (i32.or
      (local.get $8)
      (i32.const 3)
     )
    )
   )
   (global.set $STACKTOP
    (local.get $16)
   )
   (return
    (i32.add
     (local.get $0)
     (i32.const 8)
    )
   )
  )
  (global.set $STACKTOP
   (local.get $16)
  )
  (i32.const 0)
 )
 (func $_free (; 27 ;) (; has Stack IR ;) (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  (local $13 i32)
  (local $14 i32)
  (local $15 i32)
  (local $16 i32)
  (local $17 i32)
  (if
   (i32.eqz
    (local.get $0)
   )
   (return)
  )
  (if
   (i32.lt_u
    (local.tee $4
     (i32.add
      (local.get $0)
      (i32.const -8)
     )
    )
    (local.tee $11
     (i32.load
      (i32.const 3204)
     )
    )
   )
   (call $_abort)
  )
  (if
   (i32.eq
    (local.tee $12
     (i32.and
      (local.tee $0
       (i32.load
        (i32.add
         (local.get $0)
         (i32.const -4)
        )
       )
      )
      (i32.const 3)
     )
    )
    (i32.const 1)
   )
   (call $_abort)
  )
  (local.set $7
   (i32.add
    (local.get $4)
    (local.tee $3
     (i32.and
      (local.get $0)
      (i32.const -8)
     )
    )
   )
  )
  (if
   (i32.and
    (local.get $0)
    (i32.const 1)
   )
   (block
    (local.set $1
     (local.get $3)
    )
    (local.set $5
     (local.tee $2
      (local.get $4)
     )
    )
   )
   (block $label$break$L10
    (local.set $10
     (i32.load
      (local.get $4)
     )
    )
    (if
     (i32.eqz
      (local.get $12)
     )
     (return)
    )
    (if
     (i32.lt_u
      (local.tee $0
       (i32.sub
        (local.get $4)
        (local.get $10)
       )
      )
      (local.get $11)
     )
     (call $_abort)
    )
    (local.set $4
     (i32.add
      (local.get $3)
      (local.get $10)
     )
    )
    (if
     (i32.eq
      (local.get $0)
      (i32.load
       (i32.const 3208)
      )
     )
     (block
      (if
       (i32.ne
        (i32.and
         (local.tee $2
          (i32.load offset=4
           (local.get $7)
          )
         )
         (i32.const 3)
        )
        (i32.const 3)
       )
       (block
        (local.set $1
         (local.get $4)
        )
        (local.set $5
         (local.tee $2
          (local.get $0)
         )
        )
        (br $label$break$L10)
       )
      )
      (i32.store
       (i32.const 3196)
       (local.get $4)
      )
      (i32.store offset=4
       (local.get $7)
       (i32.and
        (local.get $2)
        (i32.const -2)
       )
      )
      (i32.store offset=4
       (local.get $0)
       (i32.or
        (local.get $4)
        (i32.const 1)
       )
      )
      (i32.store
       (i32.add
        (local.get $0)
        (local.get $4)
       )
       (local.get $4)
      )
      (return)
     )
    )
    (local.set $3
     (i32.shr_u
      (local.get $10)
      (i32.const 3)
     )
    )
    (if
     (i32.lt_u
      (local.get $10)
      (i32.const 256)
     )
     (block
      (local.set $1
       (i32.load offset=12
        (local.get $0)
       )
      )
      (if
       (i32.ne
        (local.tee $5
         (i32.load offset=8
          (local.get $0)
         )
        )
        (local.tee $2
         (i32.add
          (i32.shl
           (local.get $3)
           (i32.const 3)
          )
          (i32.const 3228)
         )
        )
       )
       (block
        (if
         (i32.gt_u
          (local.get $11)
          (local.get $5)
         )
         (call $_abort)
        )
        (if
         (i32.ne
          (i32.load offset=12
           (local.get $5)
          )
          (local.get $0)
         )
         (call $_abort)
        )
       )
      )
      (if
       (i32.eq
        (local.get $1)
        (local.get $5)
       )
       (block
        (i32.store
         (i32.const 3188)
         (i32.and
          (i32.load
           (i32.const 3188)
          )
          (i32.xor
           (i32.shl
            (i32.const 1)
            (local.get $3)
           )
           (i32.const -1)
          )
         )
        )
        (local.set $1
         (local.get $4)
        )
        (local.set $5
         (local.tee $2
          (local.get $0)
         )
        )
        (br $label$break$L10)
       )
      )
      (if
       (i32.eq
        (local.get $1)
        (local.get $2)
       )
       (local.set $6
        (i32.add
         (local.get $1)
         (i32.const 8)
        )
       )
       (block
        (if
         (i32.gt_u
          (local.get $11)
          (local.get $1)
         )
         (call $_abort)
        )
        (if
         (i32.eq
          (local.get $0)
          (i32.load
           (local.tee $2
            (i32.add
             (local.get $1)
             (i32.const 8)
            )
           )
          )
         )
         (local.set $6
          (local.get $2)
         )
         (call $_abort)
        )
       )
      )
      (i32.store offset=12
       (local.get $5)
       (local.get $1)
      )
      (i32.store
       (local.get $6)
       (local.get $5)
      )
      (local.set $1
       (local.get $4)
      )
      (local.set $5
       (local.tee $2
        (local.get $0)
       )
      )
      (br $label$break$L10)
     )
    )
    (local.set $13
     (i32.load offset=24
      (local.get $0)
     )
    )
    (if
     (i32.eq
      (local.get $0)
      (local.tee $3
       (i32.load offset=12
        (local.get $0)
       )
      )
     )
     (block $do-once
      (if
       (local.tee $3
        (i32.load
         (local.tee $10
          (i32.add
           (local.tee $6
            (i32.add
             (local.get $0)
             (i32.const 16)
            )
           )
           (i32.const 4)
          )
         )
        )
       )
       (local.set $6
        (local.get $10)
       )
       (br_if $do-once
        (i32.eqz
         (local.tee $3
          (i32.load
           (local.get $6)
          )
         )
        )
       )
      )
      (loop $while-in
       (block $while-out
        (if
         (i32.eqz
          (local.tee $12
           (i32.load
            (local.tee $10
             (i32.add
              (local.get $3)
              (i32.const 20)
             )
            )
           )
          )
         )
         (br_if $while-out
          (i32.eqz
           (local.tee $12
            (i32.load
             (local.tee $10
              (i32.add
               (local.get $3)
               (i32.const 16)
              )
             )
            )
           )
          )
         )
        )
        (local.set $6
         (local.get $10)
        )
        (local.set $3
         (local.get $12)
        )
        (br $while-in)
       )
      )
      (if
       (i32.gt_u
        (local.get $11)
        (local.get $6)
       )
       (call $_abort)
       (block
        (i32.store
         (local.get $6)
         (i32.const 0)
        )
        (local.set $8
         (local.get $3)
        )
       )
      )
     )
     (block
      (if
       (i32.gt_u
        (local.get $11)
        (local.tee $6
         (i32.load offset=8
          (local.get $0)
         )
        )
       )
       (call $_abort)
      )
      (if
       (i32.ne
        (i32.load offset=12
         (local.get $6)
        )
        (local.get $0)
       )
       (call $_abort)
      )
      (if
       (i32.eq
        (local.get $0)
        (i32.load offset=8
         (local.get $3)
        )
       )
       (block
        (i32.store offset=12
         (local.get $6)
         (local.get $3)
        )
        (i32.store offset=8
         (local.get $3)
         (local.get $6)
        )
        (local.set $8
         (local.get $3)
        )
       )
       (call $_abort)
      )
     )
    )
    (if
     (local.get $13)
     (block
      (if
       (i32.eq
        (local.get $0)
        (i32.load
         (local.tee $6
          (i32.add
           (i32.shl
            (local.tee $3
             (i32.load offset=28
              (local.get $0)
             )
            )
            (i32.const 2)
           )
           (i32.const 3492)
          )
         )
        )
       )
       (block
        (i32.store
         (local.get $6)
         (local.get $8)
        )
        (if
         (i32.eqz
          (local.get $8)
         )
         (block
          (i32.store
           (i32.const 3192)
           (i32.and
            (i32.load
             (i32.const 3192)
            )
            (i32.xor
             (i32.shl
              (i32.const 1)
              (local.get $3)
             )
             (i32.const -1)
            )
           )
          )
          (local.set $1
           (local.get $4)
          )
          (local.set $5
           (local.tee $2
            (local.get $0)
           )
          )
          (br $label$break$L10)
         )
        )
       )
       (if
        (i32.gt_u
         (i32.load
          (i32.const 3204)
         )
         (local.get $13)
        )
        (call $_abort)
        (block
         (i32.store
          (select
           (local.tee $3
            (i32.add
             (local.get $13)
             (i32.const 16)
            )
           )
           (i32.add
            (local.get $13)
            (i32.const 20)
           )
           (i32.eq
            (local.get $0)
            (i32.load
             (local.get $3)
            )
           )
          )
          (local.get $8)
         )
         (if
          (i32.eqz
           (local.get $8)
          )
          (block
           (local.set $1
            (local.get $4)
           )
           (local.set $5
            (local.tee $2
             (local.get $0)
            )
           )
           (br $label$break$L10)
          )
         )
        )
       )
      )
      (if
       (i32.gt_u
        (local.tee $6
         (i32.load
          (i32.const 3204)
         )
        )
        (local.get $8)
       )
       (call $_abort)
      )
      (i32.store offset=24
       (local.get $8)
       (local.get $13)
      )
      (if
       (local.tee $3
        (i32.load offset=16
         (local.get $0)
        )
       )
       (if
        (i32.gt_u
         (local.get $6)
         (local.get $3)
        )
        (call $_abort)
        (block
         (i32.store offset=16
          (local.get $8)
          (local.get $3)
         )
         (i32.store offset=24
          (local.get $3)
          (local.get $8)
         )
        )
       )
      )
      (if
       (local.tee $3
        (i32.load offset=20
         (local.get $0)
        )
       )
       (if
        (i32.gt_u
         (i32.load
          (i32.const 3204)
         )
         (local.get $3)
        )
        (call $_abort)
        (block
         (i32.store offset=20
          (local.get $8)
          (local.get $3)
         )
         (i32.store offset=24
          (local.get $3)
          (local.get $8)
         )
         (local.set $1
          (local.get $4)
         )
         (local.set $5
          (local.tee $2
           (local.get $0)
          )
         )
        )
       )
       (block
        (local.set $1
         (local.get $4)
        )
        (local.set $5
         (local.tee $2
          (local.get $0)
         )
        )
       )
      )
     )
     (block
      (local.set $1
       (local.get $4)
      )
      (local.set $5
       (local.tee $2
        (local.get $0)
       )
      )
     )
    )
   )
  )
  (if
   (i32.ge_u
    (local.get $5)
    (local.get $7)
   )
   (call $_abort)
  )
  (if
   (i32.eqz
    (i32.and
     (local.tee $0
      (i32.load offset=4
       (local.get $7)
      )
     )
     (i32.const 1)
    )
   )
   (call $_abort)
  )
  (local.set $1
   (i32.shr_u
    (local.tee $5
     (if (result i32)
      (i32.and
       (local.get $0)
       (i32.const 2)
      )
      (block (result i32)
       (i32.store offset=4
        (local.get $7)
        (i32.and
         (local.get $0)
         (i32.const -2)
        )
       )
       (i32.store offset=4
        (local.get $2)
        (i32.or
         (local.get $1)
         (i32.const 1)
        )
       )
       (i32.store
        (i32.add
         (local.get $1)
         (local.get $5)
        )
        (local.get $1)
       )
       (local.get $1)
      )
      (block (result i32)
       (if
        (i32.eq
         (local.get $7)
         (i32.load
          (i32.const 3212)
         )
        )
        (block
         (i32.store
          (i32.const 3200)
          (local.tee $0
           (i32.add
            (local.get $1)
            (i32.load
             (i32.const 3200)
            )
           )
          )
         )
         (i32.store
          (i32.const 3212)
          (local.get $2)
         )
         (i32.store offset=4
          (local.get $2)
          (i32.or
           (local.get $0)
           (i32.const 1)
          )
         )
         (if
          (i32.ne
           (i32.load
            (i32.const 3208)
           )
           (local.get $2)
          )
          (return)
         )
         (i32.store
          (i32.const 3208)
          (i32.const 0)
         )
         (i32.store
          (i32.const 3196)
          (i32.const 0)
         )
         (return)
        )
       )
       (if
        (i32.eq
         (local.get $7)
         (i32.load
          (i32.const 3208)
         )
        )
        (block
         (i32.store
          (i32.const 3196)
          (local.tee $0
           (i32.add
            (local.get $1)
            (i32.load
             (i32.const 3196)
            )
           )
          )
         )
         (i32.store
          (i32.const 3208)
          (local.get $5)
         )
         (i32.store offset=4
          (local.get $2)
          (i32.or
           (local.get $0)
           (i32.const 1)
          )
         )
         (i32.store
          (i32.add
           (local.get $0)
           (local.get $5)
          )
          (local.get $0)
         )
         (return)
        )
       )
       (local.set $4
        (i32.add
         (local.get $1)
         (i32.and
          (local.get $0)
          (i32.const -8)
         )
        )
       )
       (local.set $6
        (i32.shr_u
         (local.get $0)
         (i32.const 3)
        )
       )
       (block $label$break$L111
        (if
         (i32.lt_u
          (local.get $0)
          (i32.const 256)
         )
         (block
          (local.set $1
           (i32.load offset=12
            (local.get $7)
           )
          )
          (if
           (i32.ne
            (local.tee $3
             (i32.load offset=8
              (local.get $7)
             )
            )
            (local.tee $0
             (i32.add
              (i32.shl
               (local.get $6)
               (i32.const 3)
              )
              (i32.const 3228)
             )
            )
           )
           (block
            (if
             (i32.gt_u
              (i32.load
               (i32.const 3204)
              )
              (local.get $3)
             )
             (call $_abort)
            )
            (if
             (i32.ne
              (i32.load offset=12
               (local.get $3)
              )
              (local.get $7)
             )
             (call $_abort)
            )
           )
          )
          (if
           (i32.eq
            (local.get $1)
            (local.get $3)
           )
           (block
            (i32.store
             (i32.const 3188)
             (i32.and
              (i32.load
               (i32.const 3188)
              )
              (i32.xor
               (i32.shl
                (i32.const 1)
                (local.get $6)
               )
               (i32.const -1)
              )
             )
            )
            (br $label$break$L111)
           )
          )
          (if
           (i32.eq
            (local.get $0)
            (local.get $1)
           )
           (local.set $16
            (i32.add
             (local.get $1)
             (i32.const 8)
            )
           )
           (block
            (if
             (i32.gt_u
              (i32.load
               (i32.const 3204)
              )
              (local.get $1)
             )
             (call $_abort)
            )
            (if
             (i32.eq
              (local.get $7)
              (i32.load
               (local.tee $0
                (i32.add
                 (local.get $1)
                 (i32.const 8)
                )
               )
              )
             )
             (local.set $16
              (local.get $0)
             )
             (call $_abort)
            )
           )
          )
          (i32.store offset=12
           (local.get $3)
           (local.get $1)
          )
          (i32.store
           (local.get $16)
           (local.get $3)
          )
         )
         (block
          (local.set $8
           (i32.load offset=24
            (local.get $7)
           )
          )
          (if
           (i32.eq
            (local.get $7)
            (local.tee $0
             (i32.load offset=12
              (local.get $7)
             )
            )
           )
           (block $do-once6
            (if
             (local.tee $0
              (i32.load
               (local.tee $3
                (i32.add
                 (local.tee $1
                  (i32.add
                   (local.get $7)
                   (i32.const 16)
                  )
                 )
                 (i32.const 4)
                )
               )
              )
             )
             (local.set $1
              (local.get $3)
             )
             (br_if $do-once6
              (i32.eqz
               (local.tee $0
                (i32.load
                 (local.get $1)
                )
               )
              )
             )
            )
            (loop $while-in9
             (block $while-out8
              (if
               (i32.eqz
                (local.tee $6
                 (i32.load
                  (local.tee $3
                   (i32.add
                    (local.get $0)
                    (i32.const 20)
                   )
                  )
                 )
                )
               )
               (br_if $while-out8
                (i32.eqz
                 (local.tee $6
                  (i32.load
                   (local.tee $3
                    (i32.add
                     (local.get $0)
                     (i32.const 16)
                    )
                   )
                  )
                 )
                )
               )
              )
              (local.set $1
               (local.get $3)
              )
              (local.set $0
               (local.get $6)
              )
              (br $while-in9)
             )
            )
            (if
             (i32.gt_u
              (i32.load
               (i32.const 3204)
              )
              (local.get $1)
             )
             (call $_abort)
             (block
              (i32.store
               (local.get $1)
               (i32.const 0)
              )
              (local.set $9
               (local.get $0)
              )
             )
            )
           )
           (block
            (if
             (i32.gt_u
              (i32.load
               (i32.const 3204)
              )
              (local.tee $1
               (i32.load offset=8
                (local.get $7)
               )
              )
             )
             (call $_abort)
            )
            (if
             (i32.ne
              (i32.load offset=12
               (local.get $1)
              )
              (local.get $7)
             )
             (call $_abort)
            )
            (if
             (i32.eq
              (local.get $7)
              (i32.load offset=8
               (local.get $0)
              )
             )
             (block
              (i32.store offset=12
               (local.get $1)
               (local.get $0)
              )
              (i32.store offset=8
               (local.get $0)
               (local.get $1)
              )
              (local.set $9
               (local.get $0)
              )
             )
             (call $_abort)
            )
           )
          )
          (if
           (local.get $8)
           (block
            (if
             (i32.eq
              (local.get $7)
              (i32.load
               (local.tee $1
                (i32.add
                 (i32.shl
                  (local.tee $0
                   (i32.load offset=28
                    (local.get $7)
                   )
                  )
                  (i32.const 2)
                 )
                 (i32.const 3492)
                )
               )
              )
             )
             (block
              (i32.store
               (local.get $1)
               (local.get $9)
              )
              (if
               (i32.eqz
                (local.get $9)
               )
               (block
                (i32.store
                 (i32.const 3192)
                 (i32.and
                  (i32.load
                   (i32.const 3192)
                  )
                  (i32.xor
                   (i32.shl
                    (i32.const 1)
                    (local.get $0)
                   )
                   (i32.const -1)
                  )
                 )
                )
                (br $label$break$L111)
               )
              )
             )
             (if
              (i32.gt_u
               (i32.load
                (i32.const 3204)
               )
               (local.get $8)
              )
              (call $_abort)
              (block
               (i32.store
                (select
                 (local.tee $0
                  (i32.add
                   (local.get $8)
                   (i32.const 16)
                  )
                 )
                 (i32.add
                  (local.get $8)
                  (i32.const 20)
                 )
                 (i32.eq
                  (local.get $7)
                  (i32.load
                   (local.get $0)
                  )
                 )
                )
                (local.get $9)
               )
               (br_if $label$break$L111
                (i32.eqz
                 (local.get $9)
                )
               )
              )
             )
            )
            (if
             (i32.gt_u
              (local.tee $1
               (i32.load
                (i32.const 3204)
               )
              )
              (local.get $9)
             )
             (call $_abort)
            )
            (i32.store offset=24
             (local.get $9)
             (local.get $8)
            )
            (if
             (local.tee $0
              (i32.load offset=16
               (local.get $7)
              )
             )
             (if
              (i32.gt_u
               (local.get $1)
               (local.get $0)
              )
              (call $_abort)
              (block
               (i32.store offset=16
                (local.get $9)
                (local.get $0)
               )
               (i32.store offset=24
                (local.get $0)
                (local.get $9)
               )
              )
             )
            )
            (if
             (local.tee $0
              (i32.load offset=20
               (local.get $7)
              )
             )
             (if
              (i32.gt_u
               (i32.load
                (i32.const 3204)
               )
               (local.get $0)
              )
              (call $_abort)
              (block
               (i32.store offset=20
                (local.get $9)
                (local.get $0)
               )
               (i32.store offset=24
                (local.get $0)
                (local.get $9)
               )
              )
             )
            )
           )
          )
         )
        )
       )
       (i32.store offset=4
        (local.get $2)
        (i32.or
         (local.get $4)
         (i32.const 1)
        )
       )
       (i32.store
        (i32.add
         (local.get $4)
         (local.get $5)
        )
        (local.get $4)
       )
       (if (result i32)
        (i32.eq
         (local.get $2)
         (i32.load
          (i32.const 3208)
         )
        )
        (block
         (i32.store
          (i32.const 3196)
          (local.get $4)
         )
         (return)
        )
        (local.get $4)
       )
      )
     )
    )
    (i32.const 3)
   )
  )
  (if
   (i32.lt_u
    (local.get $5)
    (i32.const 256)
   )
   (block
    (local.set $0
     (i32.add
      (i32.shl
       (local.get $1)
       (i32.const 3)
      )
      (i32.const 3228)
     )
    )
    (if
     (i32.and
      (local.tee $5
       (i32.load
        (i32.const 3188)
       )
      )
      (local.tee $1
       (i32.shl
        (i32.const 1)
        (local.get $1)
       )
      )
     )
     (if
      (i32.gt_u
       (i32.load
        (i32.const 3204)
       )
       (local.tee $5
        (i32.load
         (local.tee $1
          (i32.add
           (local.get $0)
           (i32.const 8)
          )
         )
        )
       )
      )
      (call $_abort)
      (block
       (local.set $15
        (local.get $5)
       )
       (local.set $17
        (local.get $1)
       )
      )
     )
     (block
      (i32.store
       (i32.const 3188)
       (i32.or
        (local.get $1)
        (local.get $5)
       )
      )
      (local.set $15
       (local.get $0)
      )
      (local.set $17
       (i32.add
        (local.get $0)
        (i32.const 8)
       )
      )
     )
    )
    (i32.store
     (local.get $17)
     (local.get $2)
    )
    (i32.store offset=12
     (local.get $15)
     (local.get $2)
    )
    (i32.store offset=8
     (local.get $2)
     (local.get $15)
    )
    (i32.store offset=12
     (local.get $2)
     (local.get $0)
    )
    (return)
   )
  )
  (local.set $0
   (i32.add
    (i32.shl
     (local.tee $1
      (if (result i32)
       (local.tee $0
        (i32.shr_u
         (local.get $5)
         (i32.const 8)
        )
       )
       (if (result i32)
        (i32.gt_u
         (local.get $5)
         (i32.const 16777215)
        )
        (i32.const 31)
        (block (result i32)
         (local.set $0
          (i32.and
           (i32.shr_u
            (i32.add
             (local.tee $4
              (i32.shl
               (local.get $0)
               (local.tee $1
                (i32.and
                 (i32.shr_u
                  (i32.add
                   (local.get $0)
                   (i32.const 1048320)
                  )
                  (i32.const 16)
                 )
                 (i32.const 8)
                )
               )
              )
             )
             (i32.const 520192)
            )
            (i32.const 16)
           )
           (i32.const 4)
          )
         )
         (i32.or
          (i32.shl
           (local.tee $0
            (i32.add
             (i32.sub
              (i32.const 14)
              (i32.or
               (i32.or
                (local.get $0)
                (local.get $1)
               )
               (local.tee $1
                (i32.and
                 (i32.shr_u
                  (i32.add
                   (local.tee $0
                    (i32.shl
                     (local.get $4)
                     (local.get $0)
                    )
                   )
                   (i32.const 245760)
                  )
                  (i32.const 16)
                 )
                 (i32.const 2)
                )
               )
              )
             )
             (i32.shr_u
              (i32.shl
               (local.get $0)
               (local.get $1)
              )
              (i32.const 15)
             )
            )
           )
           (i32.const 1)
          )
          (i32.and
           (i32.shr_u
            (local.get $5)
            (i32.add
             (local.get $0)
             (i32.const 7)
            )
           )
           (i32.const 1)
          )
         )
        )
       )
       (i32.const 0)
      )
     )
     (i32.const 2)
    )
    (i32.const 3492)
   )
  )
  (i32.store offset=28
   (local.get $2)
   (local.get $1)
  )
  (i32.store offset=20
   (local.get $2)
   (i32.const 0)
  )
  (i32.store offset=16
   (local.get $2)
   (i32.const 0)
  )
  (if
   (i32.and
    (local.tee $4
     (i32.load
      (i32.const 3192)
     )
    )
    (local.tee $3
     (i32.shl
      (i32.const 1)
      (local.get $1)
     )
    )
   )
   (block $label$break$L197
    (if
     (i32.eq
      (local.get $5)
      (i32.and
       (i32.load offset=4
        (local.tee $0
         (i32.load
          (local.get $0)
         )
        )
       )
       (i32.const -8)
      )
     )
     (local.set $14
      (local.get $0)
     )
     (block $label$break$L200
      (local.set $4
       (i32.shl
        (local.get $5)
        (select
         (i32.const 0)
         (i32.sub
          (i32.const 25)
          (i32.shr_u
           (local.get $1)
           (i32.const 1)
          )
         )
         (i32.eq
          (local.get $1)
          (i32.const 31)
         )
        )
       )
      )
      (loop $while-in17
       (if
        (local.tee $1
         (i32.load
          (local.tee $3
           (i32.add
            (i32.add
             (local.get $0)
             (i32.const 16)
            )
            (i32.shl
             (i32.shr_u
              (local.get $4)
              (i32.const 31)
             )
             (i32.const 2)
            )
           )
          )
         )
        )
        (block
         (local.set $4
          (i32.shl
           (local.get $4)
           (i32.const 1)
          )
         )
         (if
          (i32.eq
           (local.get $5)
           (i32.and
            (i32.load offset=4
             (local.get $1)
            )
            (i32.const -8)
           )
          )
          (block
           (local.set $14
            (local.get $1)
           )
           (br $label$break$L200)
          )
          (block
           (local.set $0
            (local.get $1)
           )
           (br $while-in17)
          )
         )
        )
       )
      )
      (if
       (i32.gt_u
        (i32.load
         (i32.const 3204)
        )
        (local.get $3)
       )
       (call $_abort)
       (block
        (i32.store
         (local.get $3)
         (local.get $2)
        )
        (i32.store offset=24
         (local.get $2)
         (local.get $0)
        )
        (i32.store offset=12
         (local.get $2)
         (local.get $2)
        )
        (i32.store offset=8
         (local.get $2)
         (local.get $2)
        )
        (br $label$break$L197)
       )
      )
     )
    )
    (if
     (i32.and
      (i32.le_u
       (local.tee $0
        (i32.load
         (i32.const 3204)
        )
       )
       (local.get $14)
      )
      (i32.le_u
       (local.get $0)
       (local.tee $0
        (i32.load offset=8
         (local.get $14)
        )
       )
      )
     )
     (block
      (i32.store offset=12
       (local.get $0)
       (local.get $2)
      )
      (i32.store offset=8
       (local.get $14)
       (local.get $2)
      )
      (i32.store offset=8
       (local.get $2)
       (local.get $0)
      )
      (i32.store offset=12
       (local.get $2)
       (local.get $14)
      )
      (i32.store offset=24
       (local.get $2)
       (i32.const 0)
      )
     )
     (call $_abort)
    )
   )
   (block
    (i32.store
     (i32.const 3192)
     (i32.or
      (local.get $3)
      (local.get $4)
     )
    )
    (i32.store
     (local.get $0)
     (local.get $2)
    )
    (i32.store offset=24
     (local.get $2)
     (local.get $0)
    )
    (i32.store offset=12
     (local.get $2)
     (local.get $2)
    )
    (i32.store offset=8
     (local.get $2)
     (local.get $2)
    )
   )
  )
  (i32.store
   (i32.const 3220)
   (local.tee $0
    (i32.add
     (i32.load
      (i32.const 3220)
     )
     (i32.const -1)
    )
   )
  )
  (if
   (local.get $0)
   (return)
  )
  (local.set $0
   (i32.const 3644)
  )
  (loop $while-in19
   (local.set $0
    (i32.add
     (local.tee $2
      (i32.load
       (local.get $0)
      )
     )
     (i32.const 8)
    )
   )
   (br_if $while-in19
    (local.get $2)
   )
  )
  (i32.store
   (i32.const 3220)
   (i32.const -1)
  )
 )
 (func $__ZN10__cxxabiv116__shim_type_infoD2Ev (; 28 ;) (; has Stack IR ;) (param $0 i32)
  (nop)
 )
 (func $__ZN10__cxxabiv117__class_type_infoD0Ev (; 29 ;) (; has Stack IR ;) (param $0 i32)
  (call $_free
   (local.get $0)
  )
 )
 (func $__ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERPv (; 30 ;) (; has Stack IR ;) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local.set $3
   (global.get $STACKTOP)
  )
  (global.set $STACKTOP
   (i32.sub
    (global.get $STACKTOP)
    (i32.const -64)
   )
  )
  (local.set $0
   (if (result i32)
    (i32.eq
     (local.get $0)
     (local.get $1)
    )
    (i32.const 1)
    (if (result i32)
     (local.get $1)
     (if (result i32)
      (local.tee $1
       (call $___dynamic_cast
        (local.get $1)
       )
      )
      (block (result i32)
       (i64.store offset=4 align=4
        (local.get $3)
        (i64.const 0)
       )
       (i64.store offset=12 align=4
        (local.get $3)
        (i64.const 0)
       )
       (i64.store offset=20 align=4
        (local.get $3)
        (i64.const 0)
       )
       (i64.store offset=28 align=4
        (local.get $3)
        (i64.const 0)
       )
       (i64.store offset=36 align=4
        (local.get $3)
        (i64.const 0)
       )
       (i64.store offset=44 align=4
        (local.get $3)
        (i64.const 0)
       )
       (i32.store offset=52
        (local.get $3)
        (i32.const 0)
       )
       (i32.store
        (local.get $3)
        (local.get $1)
       )
       (i32.store offset=8
        (local.get $3)
        (local.get $0)
       )
       (i32.store offset=12
        (local.get $3)
        (i32.const -1)
       )
       (i32.store offset=48
        (local.get $3)
        (i32.const 1)
       )
       (call_indirect (type $FUNCSIG$viiii)
        (local.get $1)
        (local.get $3)
        (i32.load
         (local.get $2)
        )
        (i32.const 1)
        (i32.add
         (i32.and
          (i32.load offset=28
           (i32.load
            (local.get $1)
           )
          )
          (i32.const 3)
         )
         (i32.const 12)
        )
       )
       (if (result i32)
        (i32.eq
         (i32.load offset=24
          (local.get $3)
         )
         (i32.const 1)
        )
        (block (result i32)
         (i32.store
          (local.get $2)
          (i32.load offset=16
           (local.get $3)
          )
         )
         (i32.const 1)
        )
        (i32.const 0)
       )
      )
      (i32.const 0)
     )
     (i32.const 0)
    )
   )
  )
  (global.set $STACKTOP
   (local.get $3)
  )
  (local.get $0)
 )
 (func $__ZNK10__cxxabiv117__class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib (; 31 ;) (; has Stack IR ;) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (param $5 i32)
  (if
   (i32.eq
    (i32.load offset=8
     (local.get $1)
    )
    (local.get $0)
   )
   (call $__ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i
    (local.get $1)
    (local.get $2)
    (local.get $3)
    (local.get $4)
   )
  )
 )
 (func $__ZNK10__cxxabiv117__class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib (; 32 ;) (; has Stack IR ;) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32)
  (if
   (i32.eq
    (i32.load offset=8
     (local.get $1)
    )
    (local.get $0)
   )
   (if
    (i32.eq
     (local.get $2)
     (i32.load offset=4
      (local.get $1)
     )
    )
    (if
     (i32.ne
      (i32.load offset=28
       (local.get $1)
      )
      (i32.const 1)
     )
     (i32.store offset=28
      (local.get $1)
      (local.get $3)
     )
    )
   )
   (if
    (i32.eq
     (i32.load
      (local.get $1)
     )
     (local.get $0)
    )
    (block $do-once
     (if
      (i32.ne
       (i32.load offset=16
        (local.get $1)
       )
       (local.get $2)
      )
      (if
       (i32.ne
        (i32.load offset=20
         (local.get $1)
        )
        (local.get $2)
       )
       (block
        (i32.store offset=32
         (local.get $1)
         (local.get $3)
        )
        (i32.store offset=20
         (local.get $1)
         (local.get $2)
        )
        (i32.store offset=40
         (local.get $1)
         (i32.add
          (i32.load offset=40
           (local.get $1)
          )
          (i32.const 1)
         )
        )
        (if
         (i32.eq
          (i32.load offset=36
           (local.get $1)
          )
          (i32.const 1)
         )
         (if
          (i32.eq
           (i32.load offset=24
            (local.get $1)
           )
           (i32.const 2)
          )
          (i32.store8 offset=54
           (local.get $1)
           (i32.const 1)
          )
         )
        )
        (i32.store offset=44
         (local.get $1)
         (i32.const 4)
        )
        (br $do-once)
       )
      )
     )
     (if
      (i32.eq
       (local.get $3)
       (i32.const 1)
      )
      (i32.store offset=32
       (local.get $1)
       (i32.const 1)
      )
     )
    )
   )
  )
 )
 (func $__ZNK10__cxxabiv117__class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi (; 33 ;) (; has Stack IR ;) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32)
  (if
   (i32.eq
    (i32.load offset=8
     (local.get $1)
    )
    (local.get $0)
   )
   (call $__ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi
    (local.get $1)
    (local.get $2)
    (local.get $3)
   )
  )
 )
 (func $__ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi (; 34 ;) (; has Stack IR ;) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (if
   (local.tee $3
    (i32.load offset=16
     (local.get $0)
    )
   )
   (block $do-once
    (if
     (i32.ne
      (local.get $1)
      (local.get $3)
     )
     (block
      (i32.store offset=36
       (local.get $0)
       (i32.add
        (i32.load offset=36
         (local.get $0)
        )
        (i32.const 1)
       )
      )
      (i32.store offset=24
       (local.get $0)
       (i32.const 2)
      )
      (i32.store8 offset=54
       (local.get $0)
       (i32.const 1)
      )
      (br $do-once)
     )
    )
    (if
     (i32.eq
      (i32.load offset=24
       (local.get $0)
      )
      (i32.const 2)
     )
     (i32.store offset=24
      (local.get $0)
      (local.get $2)
     )
    )
   )
   (block
    (i32.store offset=16
     (local.get $0)
     (local.get $1)
    )
    (i32.store offset=24
     (local.get $0)
     (local.get $2)
    )
    (i32.store offset=36
     (local.get $0)
     (i32.const 1)
    )
   )
  )
 )
 (func $__ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i (; 35 ;) (; has Stack IR ;) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32)
  (i32.store8 offset=53
   (local.get $0)
   (i32.const 1)
  )
  (if
   (i32.eq
    (local.get $2)
    (i32.load offset=4
     (local.get $0)
    )
   )
   (block $do-once
    (i32.store8 offset=52
     (local.get $0)
     (i32.const 1)
    )
    (if
     (i32.eqz
      (local.tee $2
       (i32.load offset=16
        (local.get $0)
       )
      )
     )
     (block
      (i32.store offset=16
       (local.get $0)
       (local.get $1)
      )
      (i32.store offset=24
       (local.get $0)
       (local.get $3)
      )
      (i32.store offset=36
       (local.get $0)
       (i32.const 1)
      )
      (br_if $do-once
       (i32.eqz
        (i32.and
         (i32.eq
          (i32.load offset=48
           (local.get $0)
          )
          (i32.const 1)
         )
         (i32.eq
          (local.get $3)
          (i32.const 1)
         )
        )
       )
      )
      (i32.store8 offset=54
       (local.get $0)
       (i32.const 1)
      )
      (br $do-once)
     )
    )
    (if
     (i32.ne
      (local.get $1)
      (local.get $2)
     )
     (block
      (i32.store offset=36
       (local.get $0)
       (i32.add
        (i32.load offset=36
         (local.get $0)
        )
        (i32.const 1)
       )
      )
      (i32.store8 offset=54
       (local.get $0)
       (i32.const 1)
      )
      (br $do-once)
     )
    )
    (if
     (i32.eq
      (local.tee $1
       (i32.load offset=24
        (local.get $0)
       )
      )
      (i32.const 2)
     )
     (i32.store offset=24
      (local.get $0)
      (local.get $3)
     )
     (local.set $3
      (local.get $1)
     )
    )
    (if
     (i32.and
      (i32.eq
       (i32.load offset=48
        (local.get $0)
       )
       (i32.const 1)
      )
      (i32.eq
       (local.get $3)
       (i32.const 1)
      )
     )
     (i32.store8 offset=54
      (local.get $0)
      (i32.const 1)
     )
    )
   )
  )
 )
 (func $___dynamic_cast (; 36 ;) (; has Stack IR ;) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local.set $1
   (global.get $STACKTOP)
  )
  (global.set $STACKTOP
   (i32.sub
    (global.get $STACKTOP)
    (i32.const -64)
   )
  )
  (local.set $3
   (i32.add
    (local.get $0)
    (i32.load
     (i32.add
      (local.tee $2
       (i32.load
        (local.get $0)
       )
      )
      (i32.const -8)
     )
    )
   )
  )
  (local.set $2
   (i32.load
    (i32.add
     (local.get $2)
     (i32.const -4)
    )
   )
  )
  (i32.store
   (local.get $1)
   (i32.const 1208)
  )
  (i32.store offset=4
   (local.get $1)
   (local.get $0)
  )
  (i32.store offset=8
   (local.get $1)
   (i32.const 1224)
  )
  (i32.store offset=12
   (local.get $1)
   (i32.const 0)
  )
  (i64.store offset=16 align=4
   (local.get $1)
   (i64.const 0)
  )
  (i64.store offset=24 align=4
   (local.get $1)
   (i64.const 0)
  )
  (i64.store offset=32 align=4
   (local.get $1)
   (i64.const 0)
  )
  (i64.store offset=40 align=4
   (local.get $1)
   (i64.const 0)
  )
  (i32.store offset=48
   (local.get $1)
   (i32.const 0)
  )
  (i32.store16 offset=52
   (local.get $1)
   (i32.const 0)
  )
  (i32.store8 offset=54
   (local.get $1)
   (i32.const 0)
  )
  (local.set $0
   (if (result i32)
    (i32.eq
     (local.get $2)
     (i32.const 1208)
    )
    (block (result i32)
     (i32.store offset=48
      (local.get $1)
      (i32.const 1)
     )
     (call_indirect (type $FUNCSIG$viiiiii)
      (local.get $2)
      (local.get $1)
      (local.get $3)
      (local.get $3)
      (i32.const 1)
      (i32.const 0)
      (i32.add
       (i32.and
        (i32.load offset=20
         (i32.load
          (local.get $2)
         )
        )
        (i32.const 3)
       )
       (i32.const 20)
      )
     )
     (select
      (local.get $3)
      (i32.const 0)
      (i32.eq
       (i32.load offset=24
        (local.get $1)
       )
       (i32.const 1)
      )
     )
    )
    (block $label$break$L1 (result i32)
     (call_indirect (type $FUNCSIG$viiiii)
      (local.get $2)
      (local.get $1)
      (local.get $3)
      (i32.const 1)
      (i32.const 0)
      (i32.add
       (i32.and
        (i32.load offset=24
         (i32.load
          (local.get $2)
         )
        )
        (i32.const 3)
       )
       (i32.const 16)
      )
     )
     (block $switch
      (block $switch-default
       (block $switch-case
        (br_table $switch-case $switch $switch-default
         (i32.load offset=36
          (local.get $1)
         )
        )
       )
       (br $label$break$L1
        (select
         (i32.load offset=20
          (local.get $1)
         )
         (i32.const 0)
         (i32.and
          (i32.and
           (i32.eq
            (i32.load offset=40
             (local.get $1)
            )
            (i32.const 1)
           )
           (i32.eq
            (i32.load offset=28
             (local.get $1)
            )
            (i32.const 1)
           )
          )
          (i32.eq
           (i32.load offset=32
            (local.get $1)
           )
           (i32.const 1)
          )
         )
        )
       )
      )
      (br $label$break$L1
       (i32.const 0)
      )
     )
     (if
      (i32.ne
       (i32.load offset=24
        (local.get $1)
       )
       (i32.const 1)
      )
      (drop
       (br_if $label$break$L1
        (i32.const 0)
        (i32.eqz
         (i32.and
          (i32.and
           (i32.eqz
            (i32.load offset=40
             (local.get $1)
            )
           )
           (i32.eq
            (i32.load offset=28
             (local.get $1)
            )
            (i32.const 1)
           )
          )
          (i32.eq
           (i32.load offset=32
            (local.get $1)
           )
           (i32.const 1)
          )
         )
        )
       )
      )
     )
     (i32.load offset=16
      (local.get $1)
     )
    )
   )
  )
  (global.set $STACKTOP
   (local.get $1)
  )
  (local.get $0)
 )
 (func $__ZNK10__cxxabiv120__si_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib (; 37 ;) (; has Stack IR ;) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (param $5 i32)
  (local $6 i32)
  (if
   (i32.eq
    (i32.load offset=8
     (local.get $1)
    )
    (local.get $0)
   )
   (call $__ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i
    (local.get $1)
    (local.get $2)
    (local.get $3)
    (local.get $4)
   )
   (block
    (local.set $6
     (i32.load offset=20
      (i32.load
       (local.tee $0
        (i32.load offset=8
         (local.get $0)
        )
       )
      )
     )
    )
    (call_indirect (type $FUNCSIG$viiiiii)
     (local.get $0)
     (local.get $1)
     (local.get $2)
     (local.get $3)
     (local.get $4)
     (local.get $5)
     (i32.add
      (i32.and
       (local.get $6)
       (i32.const 3)
      )
      (i32.const 20)
     )
    )
   )
  )
 )
 (func $__ZNK10__cxxabiv120__si_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib (; 38 ;) (; has Stack IR ;) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32)
  (local $5 i32)
  (if
   (i32.eq
    (i32.load offset=8
     (local.get $1)
    )
    (local.get $0)
   )
   (if
    (i32.eq
     (local.get $2)
     (i32.load offset=4
      (local.get $1)
     )
    )
    (if
     (i32.ne
      (i32.load offset=28
       (local.get $1)
      )
      (i32.const 1)
     )
     (i32.store offset=28
      (local.get $1)
      (local.get $3)
     )
    )
   )
   (block $do-once
    (if
     (i32.ne
      (local.get $0)
      (i32.load
       (local.get $1)
      )
     )
     (block
      (local.set $5
       (i32.load offset=24
        (i32.load
         (local.tee $0
          (i32.load offset=8
           (local.get $0)
          )
         )
        )
       )
      )
      (call_indirect (type $FUNCSIG$viiiii)
       (local.get $0)
       (local.get $1)
       (local.get $2)
       (local.get $3)
       (local.get $4)
       (i32.add
        (i32.and
         (local.get $5)
         (i32.const 3)
        )
        (i32.const 16)
       )
      )
      (br $do-once)
     )
    )
    (if
     (i32.ne
      (i32.load offset=16
       (local.get $1)
      )
      (local.get $2)
     )
     (if
      (i32.ne
       (i32.load offset=20
        (local.get $1)
       )
       (local.get $2)
      )
      (block
       (i32.store offset=32
        (local.get $1)
        (local.get $3)
       )
       (br_if $do-once
        (i32.eq
         (i32.load offset=44
          (local.get $1)
         )
         (i32.const 4)
        )
       )
       (i32.store8 offset=52
        (local.get $1)
        (i32.const 0)
       )
       (i32.store8 offset=53
        (local.get $1)
        (i32.const 0)
       )
       (local.set $3
        (i32.load offset=20
         (i32.load
          (local.tee $0
           (i32.load offset=8
            (local.get $0)
           )
          )
         )
        )
       )
       (call_indirect (type $FUNCSIG$viiiiii)
        (local.get $0)
        (local.get $1)
        (local.get $2)
        (local.get $2)
        (i32.const 1)
        (local.get $4)
        (i32.add
         (i32.and
          (local.get $3)
          (i32.const 3)
         )
         (i32.const 20)
        )
       )
       (i32.store offset=44
        (local.get $1)
        (block $__rjto$1 (result i32)
         (block $__rjti$1
          (local.set $0
           (if (result i32)
            (i32.load8_s offset=53
             (local.get $1)
            )
            (block (result i32)
             (br_if $__rjti$1
              (i32.load8_s offset=52
               (local.get $1)
              )
             )
             (i32.const 1)
            )
            (i32.const 0)
           )
          )
          (i32.store offset=20
           (local.get $1)
           (local.get $2)
          )
          (i32.store offset=40
           (local.get $1)
           (i32.add
            (i32.load offset=40
             (local.get $1)
            )
            (i32.const 1)
           )
          )
          (if
           (i32.eq
            (i32.load offset=36
             (local.get $1)
            )
            (i32.const 1)
           )
           (if
            (i32.eq
             (i32.load offset=24
              (local.get $1)
             )
             (i32.const 2)
            )
            (block
             (i32.store8 offset=54
              (local.get $1)
              (i32.const 1)
             )
             (br_if $__rjti$1
              (local.get $0)
             )
             (br $__rjto$1
              (i32.const 4)
             )
            )
           )
          )
          (br_if $__rjti$1
           (local.get $0)
          )
          (br $__rjto$1
           (i32.const 4)
          )
         )
         (i32.const 3)
        )
       )
       (br $do-once)
      )
     )
    )
    (if
     (i32.eq
      (local.get $3)
      (i32.const 1)
     )
     (i32.store offset=32
      (local.get $1)
      (i32.const 1)
     )
    )
   )
  )
 )
 (func $__ZNK10__cxxabiv120__si_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi (; 39 ;) (; has Stack IR ;) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32)
  (local $4 i32)
  (if
   (i32.eq
    (i32.load offset=8
     (local.get $1)
    )
    (local.get $0)
   )
   (call $__ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi
    (local.get $1)
    (local.get $2)
    (local.get $3)
   )
   (block
    (local.set $4
     (i32.load offset=28
      (i32.load
       (local.tee $0
        (i32.load offset=8
         (local.get $0)
        )
       )
      )
     )
    )
    (call_indirect (type $FUNCSIG$viiii)
     (local.get $0)
     (local.get $1)
     (local.get $2)
     (local.get $3)
     (i32.add
      (i32.and
       (local.get $4)
       (i32.const 3)
      )
      (i32.const 12)
     )
    )
   )
  )
 )
 (func $__ZNK10__cxxabiv123__fundamental_type_info9can_catchEPKNS_16__shim_type_infoERPv (; 40 ;) (; has Stack IR ;) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (i32.eq
   (local.get $0)
   (local.get $1)
  )
 )
 (func $__ZNK10__cxxabiv121__vmi_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib (; 41 ;) (; has Stack IR ;) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (param $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (if
   (i32.eq
    (i32.load offset=8
     (local.get $1)
    )
    (local.get $0)
   )
   (call $__ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i
    (local.get $1)
    (local.get $2)
    (local.get $3)
    (local.get $4)
   )
   (block
    (local.set $7
     (i32.load8_s offset=52
      (local.get $1)
     )
    )
    (local.set $8
     (i32.load8_s offset=53
      (local.get $1)
     )
    )
    (local.set $9
     (i32.add
      (i32.add
       (local.get $0)
       (i32.const 16)
      )
      (i32.shl
       (local.tee $6
        (i32.load offset=12
         (local.get $0)
        )
       )
       (i32.const 3)
      )
     )
    )
    (i32.store8 offset=52
     (local.get $1)
     (i32.const 0)
    )
    (i32.store8 offset=53
     (local.get $1)
     (i32.const 0)
    )
    (call $__ZNK10__cxxabiv122__base_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib
     (i32.add
      (local.get $0)
      (i32.const 16)
     )
     (local.get $1)
     (local.get $2)
     (local.get $3)
     (local.get $4)
     (local.get $5)
    )
    (if
     (i32.gt_s
      (local.get $6)
      (i32.const 1)
     )
     (block $label$break$L4
      (local.set $6
       (i32.add
        (local.get $0)
        (i32.const 24)
       )
      )
      (loop $while-in
       (br_if $label$break$L4
        (i32.load8_s offset=54
         (local.get $1)
        )
       )
       (if
        (i32.load8_s offset=52
         (local.get $1)
        )
        (block
         (br_if $label$break$L4
          (i32.eq
           (i32.load offset=24
            (local.get $1)
           )
           (i32.const 1)
          )
         )
         (br_if $label$break$L4
          (i32.eqz
           (i32.and
            (i32.load offset=8
             (local.get $0)
            )
            (i32.const 2)
           )
          )
         )
        )
        (if
         (i32.load8_s offset=53
          (local.get $1)
         )
         (br_if $label$break$L4
          (i32.eqz
           (i32.and
            (i32.load offset=8
             (local.get $0)
            )
            (i32.const 1)
           )
          )
         )
        )
       )
       (i32.store8 offset=52
        (local.get $1)
        (i32.const 0)
       )
       (i32.store8 offset=53
        (local.get $1)
        (i32.const 0)
       )
       (call $__ZNK10__cxxabiv122__base_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib
        (local.get $6)
        (local.get $1)
        (local.get $2)
        (local.get $3)
        (local.get $4)
        (local.get $5)
       )
       (br_if $while-in
        (i32.lt_u
         (local.tee $6
          (i32.add
           (local.get $6)
           (i32.const 8)
          )
         )
         (local.get $9)
        )
       )
      )
     )
    )
    (i32.store8 offset=52
     (local.get $1)
     (local.get $7)
    )
    (i32.store8 offset=53
     (local.get $1)
     (local.get $8)
    )
   )
  )
 )
 (func $__ZNK10__cxxabiv121__vmi_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib (; 42 ;) (; has Stack IR ;) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (if
   (i32.eq
    (i32.load offset=8
     (local.get $1)
    )
    (local.get $0)
   )
   (if
    (i32.eq
     (local.get $2)
     (i32.load offset=4
      (local.get $1)
     )
    )
    (if
     (i32.ne
      (i32.load offset=28
       (local.get $1)
      )
      (i32.const 1)
     )
     (i32.store offset=28
      (local.get $1)
      (local.get $3)
     )
    )
   )
   (block $label$break$L1
    (if
     (i32.ne
      (local.get $0)
      (i32.load
       (local.get $1)
      )
     )
     (block
      (local.set $6
       (i32.add
        (i32.add
         (local.get $0)
         (i32.const 16)
        )
        (i32.shl
         (local.tee $5
          (i32.load offset=12
           (local.get $0)
          )
         )
         (i32.const 3)
        )
       )
      )
      (call $__ZNK10__cxxabiv122__base_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib
       (i32.add
        (local.get $0)
        (i32.const 16)
       )
       (local.get $1)
       (local.get $2)
       (local.get $3)
       (local.get $4)
      )
      (br_if $label$break$L1
       (i32.le_s
        (local.get $5)
        (i32.const 1)
       )
      )
      (local.set $5
       (i32.add
        (local.get $0)
        (i32.const 24)
       )
      )
      (if
       (i32.eqz
        (i32.and
         (local.tee $0
          (i32.load offset=8
           (local.get $0)
          )
         )
         (i32.const 2)
        )
       )
       (if
        (i32.ne
         (i32.load offset=36
          (local.get $1)
         )
         (i32.const 1)
        )
        (block
         (if
          (i32.eqz
           (i32.and
            (local.get $0)
            (i32.const 1)
           )
          )
          (loop $while-in
           (br_if $label$break$L1
            (i32.load8_s offset=54
             (local.get $1)
            )
           )
           (br_if $label$break$L1
            (i32.eq
             (i32.load offset=36
              (local.get $1)
             )
             (i32.const 1)
            )
           )
           (call $__ZNK10__cxxabiv122__base_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib
            (local.get $5)
            (local.get $1)
            (local.get $2)
            (local.get $3)
            (local.get $4)
           )
           (br_if $while-in
            (i32.lt_u
             (local.tee $5
              (i32.add
               (local.get $5)
               (i32.const 8)
              )
             )
             (local.get $6)
            )
           )
           (br $label$break$L1)
          )
         )
         (loop $while-in1
          (br_if $label$break$L1
           (i32.load8_s offset=54
            (local.get $1)
           )
          )
          (if
           (i32.eq
            (i32.load offset=36
             (local.get $1)
            )
            (i32.const 1)
           )
           (br_if $label$break$L1
            (i32.eq
             (i32.load offset=24
              (local.get $1)
             )
             (i32.const 1)
            )
           )
          )
          (call $__ZNK10__cxxabiv122__base_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib
           (local.get $5)
           (local.get $1)
           (local.get $2)
           (local.get $3)
           (local.get $4)
          )
          (br_if $while-in1
           (i32.lt_u
            (local.tee $5
             (i32.add
              (local.get $5)
              (i32.const 8)
             )
            )
            (local.get $6)
           )
          )
         )
         (br $label$break$L1)
        )
       )
      )
      (loop $while-in3
       (br_if $label$break$L1
        (i32.load8_s offset=54
         (local.get $1)
        )
       )
       (call $__ZNK10__cxxabiv122__base_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib
        (local.get $5)
        (local.get $1)
        (local.get $2)
        (local.get $3)
        (local.get $4)
       )
       (br_if $while-in3
        (i32.lt_u
         (local.tee $5
          (i32.add
           (local.get $5)
           (i32.const 8)
          )
         )
         (local.get $6)
        )
       )
      )
      (br $label$break$L1)
     )
    )
    (if
     (i32.ne
      (i32.load offset=16
       (local.get $1)
      )
      (local.get $2)
     )
     (if
      (i32.ne
       (i32.load offset=20
        (local.get $1)
       )
       (local.get $2)
      )
      (block
       (i32.store offset=32
        (local.get $1)
        (local.get $3)
       )
       (br_if $label$break$L1
        (i32.eq
         (i32.load offset=44
          (local.get $1)
         )
         (i32.const 4)
        )
       )
       (local.set $7
        (i32.add
         (i32.add
          (local.get $0)
          (i32.const 16)
         )
         (i32.shl
          (i32.load offset=12
           (local.get $0)
          )
          (i32.const 3)
         )
        )
       )
       (local.set $3
        (i32.const 0)
       )
       (local.set $6
        (i32.add
         (local.get $0)
         (i32.const 16)
        )
       )
       (i32.store offset=44
        (local.get $1)
        (block $__rjto$1 (result i32)
         (block $__rjti$1
          (loop $label$continue$L32
           (block $__rjti$0
            (br_if $__rjti$0
             (i32.ge_u
              (local.get $6)
              (local.get $7)
             )
            )
            (i32.store8 offset=52
             (local.get $1)
             (i32.const 0)
            )
            (i32.store8 offset=53
             (local.get $1)
             (i32.const 0)
            )
            (call $__ZNK10__cxxabiv122__base_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib
             (local.get $6)
             (local.get $1)
             (local.get $2)
             (local.get $2)
             (i32.const 1)
             (local.get $4)
            )
            (br_if $__rjti$0
             (i32.load8_s offset=54
              (local.get $1)
             )
            )
            (if
             (i32.load8_s offset=53
              (local.get $1)
             )
             (local.set $3
              (block $do-once (result i32)
               (if
                (i32.eqz
                 (i32.load8_s offset=52
                  (local.get $1)
                 )
                )
                (if
                 (i32.and
                  (i32.load offset=8
                   (local.get $0)
                  )
                  (i32.const 1)
                 )
                 (br $do-once
                  (i32.const 1)
                 )
                 (block
                  (local.set $3
                   (i32.const 1)
                  )
                  (br $__rjti$0)
                 )
                )
               )
               (br_if $__rjti$1
                (i32.eq
                 (i32.load offset=24
                  (local.get $1)
                 )
                 (i32.const 1)
                )
               )
               (br_if $__rjti$1
                (i32.eqz
                 (i32.and
                  (i32.load offset=8
                   (local.get $0)
                  )
                  (i32.const 2)
                 )
                )
               )
               (local.set $5
                (i32.const 1)
               )
               (i32.const 1)
              )
             )
            )
            (local.set $6
             (i32.add
              (local.get $6)
              (i32.const 8)
             )
            )
            (br $label$continue$L32)
           )
          )
          (if
           (i32.eqz
            (local.get $5)
           )
           (block
            (i32.store offset=20
             (local.get $1)
             (local.get $2)
            )
            (i32.store offset=40
             (local.get $1)
             (i32.add
              (i32.load offset=40
               (local.get $1)
              )
              (i32.const 1)
             )
            )
            (if
             (i32.eq
              (i32.load offset=36
               (local.get $1)
              )
              (i32.const 1)
             )
             (if
              (i32.eq
               (i32.load offset=24
                (local.get $1)
               )
               (i32.const 2)
              )
              (block
               (i32.store8 offset=54
                (local.get $1)
                (i32.const 1)
               )
               (br_if $__rjti$1
                (local.get $3)
               )
               (br $__rjto$1
                (i32.const 4)
               )
              )
             )
            )
           )
          )
          (br_if $__rjti$1
           (local.get $3)
          )
          (br $__rjto$1
           (i32.const 4)
          )
         )
         (i32.const 3)
        )
       )
       (br $label$break$L1)
      )
     )
    )
    (if
     (i32.eq
      (local.get $3)
      (i32.const 1)
     )
     (i32.store offset=32
      (local.get $1)
      (i32.const 1)
     )
    )
   )
  )
 )
 (func $__ZNK10__cxxabiv121__vmi_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi (; 43 ;) (; has Stack IR ;) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32)
  (local $4 i32)
  (local $5 i32)
  (if
   (i32.eq
    (i32.load offset=8
     (local.get $1)
    )
    (local.get $0)
   )
   (call $__ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi
    (local.get $1)
    (local.get $2)
    (local.get $3)
   )
   (block $label$break$L1
    (local.set $5
     (i32.add
      (i32.add
       (local.get $0)
       (i32.const 16)
      )
      (i32.shl
       (local.tee $4
        (i32.load offset=12
         (local.get $0)
        )
       )
       (i32.const 3)
      )
     )
    )
    (call $__ZNK10__cxxabiv122__base_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi
     (i32.add
      (local.get $0)
      (i32.const 16)
     )
     (local.get $1)
     (local.get $2)
     (local.get $3)
    )
    (if
     (i32.gt_s
      (local.get $4)
      (i32.const 1)
     )
     (block
      (local.set $0
       (i32.add
        (local.get $0)
        (i32.const 24)
       )
      )
      (loop $while-in
       (call $__ZNK10__cxxabiv122__base_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi
        (local.get $0)
        (local.get $1)
        (local.get $2)
        (local.get $3)
       )
       (br_if $label$break$L1
        (i32.load8_s offset=54
         (local.get $1)
        )
       )
       (br_if $while-in
        (i32.lt_u
         (local.tee $0
          (i32.add
           (local.get $0)
           (i32.const 8)
          )
         )
         (local.get $5)
        )
       )
      )
     )
    )
   )
  )
 )
 (func $__ZNK10__cxxabiv122__base_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi (; 44 ;) (; has Stack IR ;) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local.set $4
   (i32.shr_s
    (local.tee $5
     (i32.load offset=4
      (local.get $0)
     )
    )
    (i32.const 8)
   )
  )
  (if
   (i32.and
    (local.get $5)
    (i32.const 1)
   )
   (local.set $4
    (i32.load
     (i32.add
      (local.get $4)
      (i32.load
       (local.get $2)
      )
     )
    )
   )
  )
  (local.set $6
   (i32.load offset=28
    (i32.load
     (local.tee $0
      (i32.load
       (local.get $0)
      )
     )
    )
   )
  )
  (call_indirect (type $FUNCSIG$viiii)
   (local.get $0)
   (local.get $1)
   (i32.add
    (local.get $2)
    (local.get $4)
   )
   (select
    (local.get $3)
    (i32.const 2)
    (i32.and
     (local.get $5)
     (i32.const 2)
    )
   )
   (i32.add
    (i32.and
     (local.get $6)
     (i32.const 3)
    )
    (i32.const 12)
   )
  )
 )
 (func $__ZNK10__cxxabiv122__base_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib (; 45 ;) (; has Stack IR ;) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (param $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local.set $6
   (i32.shr_s
    (local.tee $7
     (i32.load offset=4
      (local.get $0)
     )
    )
    (i32.const 8)
   )
  )
  (if
   (i32.and
    (local.get $7)
    (i32.const 1)
   )
   (local.set $6
    (i32.load
     (i32.add
      (i32.load
       (local.get $3)
      )
      (local.get $6)
     )
    )
   )
  )
  (local.set $8
   (i32.load offset=20
    (i32.load
     (local.tee $0
      (i32.load
       (local.get $0)
      )
     )
    )
   )
  )
  (call_indirect (type $FUNCSIG$viiiiii)
   (local.get $0)
   (local.get $1)
   (local.get $2)
   (i32.add
    (local.get $3)
    (local.get $6)
   )
   (select
    (local.get $4)
    (i32.const 2)
    (i32.and
     (local.get $7)
     (i32.const 2)
    )
   )
   (local.get $5)
   (i32.add
    (i32.and
     (local.get $8)
     (i32.const 3)
    )
    (i32.const 20)
   )
  )
 )
 (func $__ZNK10__cxxabiv122__base_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib (; 46 ;) (; has Stack IR ;) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local.set $5
   (i32.shr_s
    (local.tee $6
     (i32.load offset=4
      (local.get $0)
     )
    )
    (i32.const 8)
   )
  )
  (if
   (i32.and
    (local.get $6)
    (i32.const 1)
   )
   (local.set $5
    (i32.load
     (i32.add
      (i32.load
       (local.get $2)
      )
      (local.get $5)
     )
    )
   )
  )
  (local.set $7
   (i32.load offset=24
    (i32.load
     (local.tee $0
      (i32.load
       (local.get $0)
      )
     )
    )
   )
  )
  (call_indirect (type $FUNCSIG$viiiii)
   (local.get $0)
   (local.get $1)
   (i32.add
    (local.get $2)
    (local.get $5)
   )
   (select
    (local.get $3)
    (i32.const 2)
    (i32.and
     (local.get $6)
     (i32.const 2)
    )
   )
   (local.get $4)
   (i32.add
    (i32.and
     (local.get $7)
     (i32.const 3)
    )
    (i32.const 16)
   )
  )
 )
 (func $_memcpy (; 47 ;) (; has Stack IR ;) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (if
   (i32.ge_s
    (local.get $2)
    (i32.const 8192)
   )
   (block
    (drop
     (call $_emscripten_memcpy_big
      (local.get $0)
      (local.get $1)
      (local.get $2)
     )
    )
    (return
     (local.get $0)
    )
   )
  )
  (local.set $4
   (local.get $0)
  )
  (local.set $3
   (i32.add
    (local.get $0)
    (local.get $2)
   )
  )
  (if
   (i32.eq
    (i32.and
     (local.get $0)
     (i32.const 3)
    )
    (i32.and
     (local.get $1)
     (i32.const 3)
    )
   )
   (block
    (loop $while-in
     (if
      (i32.and
       (local.get $0)
       (i32.const 3)
      )
      (block
       (if
        (i32.eqz
         (local.get $2)
        )
        (return
         (local.get $4)
        )
       )
       (i32.store8
        (local.get $0)
        (i32.load8_s
         (local.get $1)
        )
       )
       (local.set $0
        (i32.add
         (local.get $0)
         (i32.const 1)
        )
       )
       (local.set $1
        (i32.add
         (local.get $1)
         (i32.const 1)
        )
       )
       (local.set $2
        (i32.sub
         (local.get $2)
         (i32.const 1)
        )
       )
       (br $while-in)
      )
     )
    )
    (local.set $5
     (i32.add
      (local.tee $2
       (i32.and
        (local.get $3)
        (i32.const -4)
       )
      )
      (i32.const -64)
     )
    )
    (loop $while-in1
     (if
      (i32.le_s
       (local.get $0)
       (local.get $5)
      )
      (block
       (i32.store
        (local.get $0)
        (i32.load
         (local.get $1)
        )
       )
       (i32.store offset=4
        (local.get $0)
        (i32.load offset=4
         (local.get $1)
        )
       )
       (i32.store offset=8
        (local.get $0)
        (i32.load offset=8
         (local.get $1)
        )
       )
       (i32.store offset=12
        (local.get $0)
        (i32.load offset=12
         (local.get $1)
        )
       )
       (i32.store offset=16
        (local.get $0)
        (i32.load offset=16
         (local.get $1)
        )
       )
       (i32.store offset=20
        (local.get $0)
        (i32.load offset=20
         (local.get $1)
        )
       )
       (i32.store offset=24
        (local.get $0)
        (i32.load offset=24
         (local.get $1)
        )
       )
       (i32.store offset=28
        (local.get $0)
        (i32.load offset=28
         (local.get $1)
        )
       )
       (i32.store offset=32
        (local.get $0)
        (i32.load offset=32
         (local.get $1)
        )
       )
       (i32.store offset=36
        (local.get $0)
        (i32.load offset=36
         (local.get $1)
        )
       )
       (i32.store offset=40
        (local.get $0)
        (i32.load offset=40
         (local.get $1)
        )
       )
       (i32.store offset=44
        (local.get $0)
        (i32.load offset=44
         (local.get $1)
        )
       )
       (i32.store offset=48
        (local.get $0)
        (i32.load offset=48
         (local.get $1)
        )
       )
       (i32.store offset=52
        (local.get $0)
        (i32.load offset=52
         (local.get $1)
        )
       )
       (i32.store offset=56
        (local.get $0)
        (i32.load offset=56
         (local.get $1)
        )
       )
       (i32.store offset=60
        (local.get $0)
        (i32.load offset=60
         (local.get $1)
        )
       )
       (local.set $0
        (i32.sub
         (local.get $0)
         (i32.const -64)
        )
       )
       (local.set $1
        (i32.sub
         (local.get $1)
         (i32.const -64)
        )
       )
       (br $while-in1)
      )
     )
    )
    (loop $while-in3
     (if
      (i32.lt_s
       (local.get $0)
       (local.get $2)
      )
      (block
       (i32.store
        (local.get $0)
        (i32.load
         (local.get $1)
        )
       )
       (local.set $0
        (i32.add
         (local.get $0)
         (i32.const 4)
        )
       )
       (local.set $1
        (i32.add
         (local.get $1)
         (i32.const 4)
        )
       )
       (br $while-in3)
      )
     )
    )
   )
   (block
    (local.set $2
     (i32.sub
      (local.get $3)
      (i32.const 4)
     )
    )
    (loop $while-in5
     (if
      (i32.lt_s
       (local.get $0)
       (local.get $2)
      )
      (block
       (i32.store8
        (local.get $0)
        (i32.load8_s
         (local.get $1)
        )
       )
       (i32.store8 offset=1
        (local.get $0)
        (i32.load8_s offset=1
         (local.get $1)
        )
       )
       (i32.store8 offset=2
        (local.get $0)
        (i32.load8_s offset=2
         (local.get $1)
        )
       )
       (i32.store8 offset=3
        (local.get $0)
        (i32.load8_s offset=3
         (local.get $1)
        )
       )
       (local.set $0
        (i32.add
         (local.get $0)
         (i32.const 4)
        )
       )
       (local.set $1
        (i32.add
         (local.get $1)
         (i32.const 4)
        )
       )
       (br $while-in5)
      )
     )
    )
   )
  )
  (loop $while-in7
   (if
    (i32.lt_s
     (local.get $0)
     (local.get $3)
    )
    (block
     (i32.store8
      (local.get $0)
      (i32.load8_s
       (local.get $1)
      )
     )
     (local.set $0
      (i32.add
       (local.get $0)
       (i32.const 1)
      )
     )
     (local.set $1
      (i32.add
       (local.get $1)
       (i32.const 1)
      )
     )
     (br $while-in7)
    )
   )
  )
  (local.get $4)
 )
 (func $_memset (; 48 ;) (; has Stack IR ;) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local.set $4
   (i32.add
    (local.get $0)
    (local.get $2)
   )
  )
  (local.set $3
   (i32.and
    (local.get $1)
    (i32.const 255)
   )
  )
  (if
   (i32.ge_s
    (local.get $2)
    (i32.const 67)
   )
   (block
    (loop $while-in
     (if
      (i32.and
       (local.get $0)
       (i32.const 3)
      )
      (block
       (i32.store8
        (local.get $0)
        (local.get $3)
       )
       (local.set $0
        (i32.add
         (local.get $0)
         (i32.const 1)
        )
       )
       (br $while-in)
      )
     )
    )
    (local.set $1
     (i32.or
      (i32.or
       (i32.or
        (i32.shl
         (local.get $3)
         (i32.const 8)
        )
        (local.get $3)
       )
       (i32.shl
        (local.get $3)
        (i32.const 16)
       )
      )
      (i32.shl
       (local.get $3)
       (i32.const 24)
      )
     )
    )
    (local.set $6
     (i32.add
      (local.tee $5
       (i32.and
        (local.get $4)
        (i32.const -4)
       )
      )
      (i32.const -64)
     )
    )
    (loop $while-in1
     (if
      (i32.le_s
       (local.get $0)
       (local.get $6)
      )
      (block
       (i32.store
        (local.get $0)
        (local.get $1)
       )
       (i32.store offset=4
        (local.get $0)
        (local.get $1)
       )
       (i32.store offset=8
        (local.get $0)
        (local.get $1)
       )
       (i32.store offset=12
        (local.get $0)
        (local.get $1)
       )
       (i32.store offset=16
        (local.get $0)
        (local.get $1)
       )
       (i32.store offset=20
        (local.get $0)
        (local.get $1)
       )
       (i32.store offset=24
        (local.get $0)
        (local.get $1)
       )
       (i32.store offset=28
        (local.get $0)
        (local.get $1)
       )
       (i32.store offset=32
        (local.get $0)
        (local.get $1)
       )
       (i32.store offset=36
        (local.get $0)
        (local.get $1)
       )
       (i32.store offset=40
        (local.get $0)
        (local.get $1)
       )
       (i32.store offset=44
        (local.get $0)
        (local.get $1)
       )
       (i32.store offset=48
        (local.get $0)
        (local.get $1)
       )
       (i32.store offset=52
        (local.get $0)
        (local.get $1)
       )
       (i32.store offset=56
        (local.get $0)
        (local.get $1)
       )
       (i32.store offset=60
        (local.get $0)
        (local.get $1)
       )
       (local.set $0
        (i32.sub
         (local.get $0)
         (i32.const -64)
        )
       )
       (br $while-in1)
      )
     )
    )
    (loop $while-in3
     (if
      (i32.lt_s
       (local.get $0)
       (local.get $5)
      )
      (block
       (i32.store
        (local.get $0)
        (local.get $1)
       )
       (local.set $0
        (i32.add
         (local.get $0)
         (i32.const 4)
        )
       )
       (br $while-in3)
      )
     )
    )
   )
  )
  (loop $while-in5
   (if
    (i32.lt_s
     (local.get $0)
     (local.get $4)
    )
    (block
     (i32.store8
      (local.get $0)
      (local.get $3)
     )
     (local.set $0
      (i32.add
       (local.get $0)
       (i32.const 1)
      )
     )
     (br $while-in5)
    )
   )
  )
  (i32.sub
   (local.get $4)
   (local.get $2)
  )
 )
 (func $_sbrk (; 49 ;) (; has Stack IR ;) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local.set $3
   (call $_emscripten_get_heap_size)
  )
  (if
   (i32.or
    (i32.and
     (i32.lt_s
      (local.tee $1
       (i32.add
        (local.get $0)
        (local.tee $2
         (i32.load
          (global.get $DYNAMICTOP_PTR$asm2wasm$import)
         )
        )
       )
      )
      (local.get $2)
     )
     (i32.gt_s
      (local.get $0)
      (i32.const 0)
     )
    )
    (i32.lt_s
     (local.get $1)
     (i32.const 0)
    )
   )
   (block
    (drop
     (call $abortOnCannotGrowMemory
      (local.get $1)
     )
    )
    (call $___setErrNo
     (i32.const 12)
    )
    (return
     (i32.const -1)
    )
   )
  )
  (if
   (i32.gt_s
    (local.get $1)
    (local.get $3)
   )
   (if
    (i32.eqz
     (call $_emscripten_resize_heap
      (local.get $1)
     )
    )
    (block
     (call $___setErrNo
      (i32.const 12)
     )
     (return
      (i32.const -1)
     )
    )
   )
  )
  (i32.store
   (global.get $DYNAMICTOP_PTR$asm2wasm$import)
   (local.get $1)
  )
  (local.get $2)
 )
 (func $dynCall_iiii (; 50 ;) (; has Stack IR ;) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (result i32)
  (call_indirect (type $FUNCSIG$iiii)
   (local.get $1)
   (local.get $2)
   (local.get $3)
   (i32.and
    (local.get $0)
    (i32.const 3)
   )
  )
 )
 (func $dynCall_vi (; 51 ;) (; has Stack IR ;) (param $0 i32) (param $1 i32)
  (call_indirect (type $FUNCSIG$vi)
   (local.get $1)
   (i32.add
    (i32.and
     (local.get $0)
     (i32.const 7)
    )
    (i32.const 4)
   )
  )
 )
 (func $dynCall_viiii (; 52 ;) (; has Stack IR ;) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32)
  (call_indirect (type $FUNCSIG$viiii)
   (local.get $1)
   (local.get $2)
   (local.get $3)
   (local.get $4)
   (i32.add
    (i32.and
     (local.get $0)
     (i32.const 3)
    )
    (i32.const 12)
   )
  )
 )
 (func $dynCall_viiiii (; 53 ;) (; has Stack IR ;) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (param $5 i32)
  (call_indirect (type $FUNCSIG$viiiii)
   (local.get $1)
   (local.get $2)
   (local.get $3)
   (local.get $4)
   (local.get $5)
   (i32.add
    (i32.and
     (local.get $0)
     (i32.const 3)
    )
    (i32.const 16)
   )
  )
 )
 (func $dynCall_viiiiii (; 54 ;) (; has Stack IR ;) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (param $5 i32) (param $6 i32)
  (call_indirect (type $FUNCSIG$viiiiii)
   (local.get $1)
   (local.get $2)
   (local.get $3)
   (local.get $4)
   (local.get $5)
   (local.get $6)
   (i32.add
    (i32.and
     (local.get $0)
     (i32.const 3)
    )
    (i32.const 20)
   )
  )
 )
 (func $b0 (; 55 ;) (; has Stack IR ;) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (call $abort
   (i32.const 0)
  )
  (i32.const 0)
 )
 (func $b1 (; 56 ;) (; has Stack IR ;) (param $0 i32)
  (call $abort
   (i32.const 1)
  )
 )
 (func $b2 (; 57 ;) (; has Stack IR ;) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32)
  (call $abort
   (i32.const 2)
  )
 )
 (func $b3 (; 58 ;) (; has Stack IR ;) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32)
  (call $abort
   (i32.const 3)
  )
 )
 (func $b4 (; 59 ;) (; has Stack IR ;) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (param $5 i32)
  (call $abort
   (i32.const 4)
  )
 )
)
