(module
 (type $FUNCSIG$v (func))
 (type $FUNCSIG$viiii (func (param i32 i32 i32 i32)))
 (type $FUNCSIG$viiiiii (func (param i32 i32 i32 i32 i32 i32)))
 (type $FUNCSIG$viiiii (func (param i32 i32 i32 i32 i32)))
 (type $FUNCSIG$iiii (func (param i32 i32 i32) (result i32)))
 (type $FUNCSIG$ii (func (param i32) (result i32)))
 (type $FUNCSIG$vi (func (param i32)))
 (type $FUNCSIG$viii (func (param i32 i32 i32)))
 (type $FUNCSIG$i (func (result i32)))
 (import "env" "memory" (memory $memory 256 256))
 (data (i32.const 1024) "\88\04\00\00<\05\00\00\b0\04\00\00\9c\05\00\00\18\04\00\00\00\00\00\00\b0\04\00\00I\05\00\00(\04\00\00\00\00\00\00\88\04\00\00j\05\00\00\b0\04\00\00w\05\00\00\08\04\00\00\00\00\00\00\b0\04\00\00\be\05\00\00\00\04\00\00\00\00\00\00\b0\04\00\00\ce\05\00\00@\04\00\00\00\00\00\00\b0\04\00\00\03\06\00\00\18\04\00\00\00\00\00\00\b0\04\00\00\df\05\00\00`\04")
 (data (i32.const 1156) "\08\04\00\00\01\00\00\00\02\00\00\00\03\00\00\00\04\00\00\00\01\00\00\00\01\00\00\00\01\00\00\00\01\00\00\00\00\00\00\000\04\00\00\01\00\00\00\05\00\00\00\03\00\00\00\04\00\00\00\01\00\00\00\02\00\00\00\02\00\00\00\02\00\00\00\00\00\00\00@\04\00\00\06\00\00\00\07\00\00\00\01\00\00\00\00\00\00\00P\04\00\00\06\00\00\00\08\00\00\00\01\00\00\00allocator<T>::allocate(size_t n) \'n\' exceeds maximum supported size\00St9exception\00N10__cxxabiv116__shim_type_infoE\00St9type_info\00N10__cxxabiv120__si_class_type_infoE\00N10__cxxabiv117__class_type_infoE\00St11logic_error\00St12length_error\00N10__cxxabiv119__pointer_type_infoE\00N10__cxxabiv117__pbase_type_infoE")
 (import "env" "table" (table $table 33 33 funcref))
 (elem (global.get $__table_base) $b0 $__ZNKSt11logic_error4whatEv $b1 $__ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERPv $b2 $b3 $__ZN10__cxxabiv116__shim_type_infoD2Ev $__ZN10__cxxabiv117__class_type_infoD0Ev $__ZN10__cxxabiv116__shim_type_infoD2Ev $__ZN10__cxxabiv116__shim_type_infoD2Ev $__ZN10__cxxabiv117__class_type_infoD0Ev $__ZNSt11logic_errorD2Ev $__ZNSt11logic_errorD0Ev $__ZNSt11logic_errorD0Ev $b3 $b3 $b3 $b3 $b3 $b3 $b3 $b4 $__ZNK10__cxxabiv117__class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi $__ZNK10__cxxabiv120__si_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi $b4 $b5 $__ZNK10__cxxabiv117__class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib $__ZNK10__cxxabiv120__si_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib $b5 $b6 $__ZNK10__cxxabiv117__class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib $__ZNK10__cxxabiv120__si_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib $b6)
 (import "env" "__table_base" (global $__table_base i32))
 (import "env" "DYNAMICTOP_PTR" (global $DYNAMICTOP_PTR$asm2wasm$import i32))
 (import "env" "abort" (func $abort (param i32)))
 (import "env" "___cxa_allocate_exception" (func $___cxa_allocate_exception (param i32) (result i32)))
 (import "env" "___cxa_throw" (func $___cxa_throw (param i32 i32 i32)))
 (import "env" "___cxa_uncaught_exception" (func $___cxa_uncaught_exception (result i32)))
 (import "env" "___setErrNo" (func $___setErrNo (param i32)))
 (import "env" "_abort" (func $_abort))
 (import "env" "_emscripten_get_heap_size" (func $_emscripten_get_heap_size (result i32)))
 (import "env" "_emscripten_memcpy_big" (func $_emscripten_memcpy_big (param i32 i32 i32) (result i32)))
 (import "env" "_emscripten_resize_heap" (func $_emscripten_resize_heap (param i32) (result i32)))
 (import "env" "abortOnCannotGrowMemory" (func $abortOnCannotGrowMemory (param i32) (result i32)))
 (global $STACKTOP (mut i32) (i32.const 3328))
 (global $STACK_MAX (mut i32) (i32.const 5246208))
 (export "__ZSt18uncaught_exceptionv" (func $__ZSt18uncaught_exceptionv))
 (export "___cxa_can_catch" (func $___cxa_can_catch))
 (export "___cxa_is_pointer_type" (func $___cxa_is_pointer_type))
 (export "___errno_location" (func $___errno_location))
 (export "_free" (func $_free))
 (export "_main" (func $_main))
 (export "_malloc" (func $_malloc))
 (export "_memcpy" (func $_memcpy))
 (export "_memset" (func $_memset))
 (export "_new_fib" (func $_new_fib))
 (export "_next_val" (func $_next_val))
 (export "_sbrk" (func $_sbrk))
 (export "dynCall_ii" (func $dynCall_ii))
 (export "dynCall_iiii" (func $dynCall_iiii))
 (export "dynCall_v" (func $dynCall_v))
 (export "dynCall_vi" (func $dynCall_vi))
 (export "dynCall_viiii" (func $dynCall_viiii))
 (export "dynCall_viiiii" (func $dynCall_viiiii))
 (export "dynCall_viiiiii" (func $dynCall_viiiiii))
 (export "establishStackSpace" (func $establishStackSpace))
 (export "stackAlloc" (func $stackAlloc))
 (export "stackRestore" (func $stackRestore))
 (export "stackSave" (func $stackSave))
 (func $stackAlloc (; 10 ;) (; has Stack IR ;) (param $0 i32) (result i32)
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
 (func $stackSave (; 11 ;) (; has Stack IR ;) (result i32)
  (global.get $STACKTOP)
 )
 (func $stackRestore (; 12 ;) (; has Stack IR ;) (param $0 i32)
  (global.set $STACKTOP
   (local.get $0)
  )
 )
 (func $establishStackSpace (; 13 ;) (; has Stack IR ;) (param $0 i32) (param $1 i32)
  (global.set $STACKTOP
   (local.get $0)
  )
  (global.set $STACK_MAX
   (local.get $1)
  )
 )
 (func $_new_fib (; 14 ;) (; has Stack IR ;) (result i32)
  (local $0 i32)
  (local $1 i32)
  (local.set $1
   (global.get $STACKTOP)
  )
  (global.set $STACKTOP
   (i32.add
    (global.get $STACKTOP)
    (i32.const 16)
   )
  )
  ;;@ ../cpp/fib.h:12:0
  (i32.store
   (local.get $1)
   (i32.const 1)
  )
  ;;@ ../cpp/fib.h:13:0
  (i32.store offset=4
   (local.get $1)
   (i32.const 1)
  )
  (if
   ;;@ /home/bernd/tmp/emsdk/emscripten/incoming/system/include/libcxx/vector:1609:0
   (i32.lt_u
    (local.tee $0
     (i32.load
      (i32.const 1580)
     )
    )
    (i32.load
     (i32.const 1584)
    )
   )
   ;;@ /home/bernd/tmp/emsdk/emscripten/incoming/system/include/libcxx/vector:1617:0
   (block
    ;;@ /home/bernd/tmp/emsdk/emscripten/incoming/system/include/libcxx/memory:1805:0
    (i64.store align=4
     (local.get $0)
     (i64.load
      (local.get $1)
     )
    )
    ;;@ /home/bernd/tmp/emsdk/emscripten/incoming/system/include/libcxx/vector:1616:0
    (i32.store
     (i32.const 1580)
     (local.tee $0
      (i32.add
       (i32.load
        (i32.const 1580)
       )
       (i32.const 8)
      )
     )
    )
   )
   (block
    ;;@ /home/bernd/tmp/emsdk/emscripten/incoming/system/include/libcxx/vector:1619:0
    (call $__ZNSt3__26vectorI3FibNS_9allocatorIS1_EEE21__push_back_slow_pathIS1_EEvOT_
     (local.get $1)
    )
    ;;@ /home/bernd/tmp/emsdk/emscripten/incoming/system/include/libcxx/vector:633:0
    (local.set $0
     (i32.load
      (i32.const 1580)
     )
    )
   )
  )
  ;;@ ../cpp/hello.cpp:17:0
  (local.set $0
   (i32.add
    (i32.shr_s
     (i32.sub
      (local.get $0)
      (i32.load
       (i32.const 1576)
      )
     )
     (i32.const 3)
    )
    (i32.const -1)
   )
  )
  (global.set $STACKTOP
   (local.get $1)
  )
  (local.get $0)
 )
 (func $__ZNSt3__26vectorI3FibNS_9allocatorIS1_EEE21__push_back_slow_pathIS1_EEvOT_ (; 15 ;) (; has Stack IR ;) (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (if
   ;;@ /home/bernd/tmp/emsdk/emscripten/incoming/system/include/libcxx/vector:969:0
   (i32.gt_u
    ;;@ /home/bernd/tmp/emsdk/emscripten/incoming/system/include/libcxx/vector:1578:0
    (local.tee $1
     (i32.add
      ;;@ /home/bernd/tmp/emsdk/emscripten/incoming/system/include/libcxx/vector:633:0
      (local.tee $7
       (i32.shr_s
        (local.tee $6
         (i32.sub
          (i32.load
           (i32.const 1580)
          )
          (local.tee $3
           (i32.load
            (i32.const 1576)
           )
          )
         )
        )
        (i32.const 3)
       )
      )
      (i32.const 1)
     )
    )
    (i32.const 536870911)
   )
   ;;@ /home/bernd/tmp/emsdk/emscripten/incoming/system/include/libcxx/vector:970:0
   (call $_abort)
  )
  (if
   ;;@ /home/bernd/tmp/emsdk/emscripten/incoming/system/include/libcxx/__split_buffer:311:0
   (local.tee $1
    (select
     (select
      (local.get $1)
      ;;@ /home/bernd/tmp/emsdk/emscripten/incoming/system/include/libcxx/vector:974:0
      (local.tee $4
       (i32.shr_s
        ;;@ /home/bernd/tmp/emsdk/emscripten/incoming/system/include/libcxx/vector:359:0
        (local.tee $2
         (i32.sub
          (i32.load
           (i32.const 1584)
          )
          (local.get $3)
         )
        )
        (i32.const 2)
       )
      )
      (i32.lt_u
       (local.get $4)
       (local.get $1)
      )
     )
     (i32.const 536870911)
     (i32.lt_u
      (i32.shr_s
       (local.get $2)
       (i32.const 3)
      )
      (i32.const 268435455)
     )
    )
   )
   (if
    ;;@ /home/bernd/tmp/emsdk/emscripten/incoming/system/include/libcxx/memory:1790:0
    (i32.gt_u
     (local.get $1)
     (i32.const 536870911)
    )
    (block
     (i32.store
      (local.tee $4
       ;;@ /home/bernd/tmp/emsdk/emscripten/incoming/system/include/libcxx/stdexcept:225:0
       (local.tee $2
        (call $___cxa_allocate_exception
         (i32.const 8)
        )
       )
      )
      (i32.const 1240)
     )
     (call $__ZNSt3__218__libcpp_refstringC2EPKc
      (i32.add
       (local.get $4)
       (i32.const 4)
      )
     )
     ;;@ /home/bernd/tmp/emsdk/emscripten/incoming/system/include/libcxx/stdexcept:136:0
     (i32.store
      (local.get $2)
      (i32.const 1260)
     )
     ;;@ /home/bernd/tmp/emsdk/emscripten/incoming/system/include/libcxx/stdexcept:225:0
     (call $___cxa_throw
      (local.get $2)
      (i32.const 1104)
      (i32.const 6)
     )
    )
    ;;@ /home/bernd/tmp/emsdk/emscripten/incoming/system/include/libcxx/new:228:0
    (local.set $5
     (local.tee $8
      (call $__Znwm
       (i32.shl
        (local.get $1)
        (i32.const 3)
       )
      )
     )
    )
   )
  )
  ;;@ /home/bernd/tmp/emsdk/emscripten/incoming/system/include/libcxx/memory:1805:0
  (i64.store align=4
   ;;@ /home/bernd/tmp/emsdk/emscripten/incoming/system/include/libcxx/__split_buffer:312:0
   (local.tee $2
    (i32.add
     (i32.shl
      (local.get $7)
      (i32.const 3)
     )
     (local.get $5)
    )
   )
   (i64.load align=4
    (local.get $0)
   )
  )
  (if
   ;;@ /home/bernd/tmp/emsdk/emscripten/incoming/system/include/libcxx/memory:1696:0
   (i32.gt_s
    (local.get $6)
    (i32.const 0)
   )
   ;;@ /home/bernd/tmp/emsdk/emscripten/incoming/system/include/libcxx/memory:1697:0
   (drop
    (call $_memcpy
     (local.get $8)
     (local.get $3)
     (local.get $6)
    )
   )
  )
  ;;@ /home/bernd/tmp/emsdk/emscripten/incoming/system/include/libcxx/type_traits:4647:0
  (i32.store
   (i32.const 1576)
   (local.get $5)
  )
  (i32.store
   (i32.const 1580)
   (i32.add
    (local.get $2)
    (i32.const 8)
   )
  )
  (i32.store
   (i32.const 1584)
   (i32.add
    (i32.shl
     (local.get $1)
     (i32.const 3)
    )
    (local.get $5)
   )
  )
  (if
   ;;@ /home/bernd/tmp/emsdk/emscripten/incoming/system/include/libcxx/__split_buffer:342:0
   (i32.eqz
    (local.get $3)
   )
   ;;@ /home/bernd/tmp/emsdk/emscripten/incoming/system/include/libcxx/vector:1583:0
   (return)
  )
  ;;@ /home/bernd/tmp/emsdk/emscripten/incoming/system/include/libcxx/new:236:0
  (call $_free
   (local.get $3)
  )
 )
 (func $_next_val (; 16 ;) (; has Stack IR ;) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  ;;@ ../cpp/fib.cpp:6:0
  (local.set $1
   (i32.add
    (local.tee $2
     (i32.load
      (local.tee $0
       (i32.add
        (i32.load
         (i32.const 1576)
        )
        (i32.shl
         (local.get $0)
         (i32.const 3)
        )
       )
      )
     )
    )
    (i32.load offset=4
     (local.get $0)
    )
   )
  )
  ;;@ ../cpp/fib.cpp:7:0
  (i32.store offset=4
   (local.get $0)
   (local.get $2)
  )
  ;;@ ../cpp/fib.cpp:8:0
  (i32.store
   (local.get $0)
   (local.get $1)
  )
  ;;@ ../cpp/fib.cpp:9:0
  (local.get $1)
 )
 (func $_main (; 17 ;) (; has Stack IR ;) (result i32)
  ;;@ ../cpp/hello.cpp:31:0
  (i32.const 0)
 )
 (func $___errno_location (; 18 ;) (; has Stack IR ;) (result i32)
  (i32.const 1588)
 )
 (func $_strlen (; 19 ;) (; has Stack IR ;) (result i32)
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local.set $0
   (i32.const 1272)
  )
  (block $__rjto$0
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
        (local.tee $2
         (i32.load
          (local.get $0)
         )
        )
        (i32.const -16843009)
       )
       (i32.xor
        (i32.and
         (local.get $2)
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
     (local.get $2)
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
   (i32.const 1272)
  )
 )
 (func $_malloc (; 20 ;) (; has Stack IR ;) (param $0 i32) (result i32)
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
           (i32.const 1592)
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
               (i32.const 1632)
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
         (i32.const 1592)
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
            (i32.const 1608)
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
         (i32.const 1600)
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
                 (i32.const 1632)
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
           (i32.const 1592)
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
              (i32.const 1608)
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
             (i32.const 1612)
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
             (i32.const 1632)
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
               (i32.const 1608)
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
              (i32.const 1592)
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
          (i32.const 1600)
          (local.get $10)
         )
         (i32.store
          (i32.const 1612)
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
          (i32.const 1596)
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
             (i32.const 1896)
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
             (i32.const 1608)
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
                (i32.const 1896)
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
                (i32.const 1596)
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
               (i32.const 1608)
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
               (i32.const 1608)
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
               (i32.const 1608)
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
               (i32.const 1612)
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
               (i32.const 1632)
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
                 (i32.const 1608)
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
                (i32.const 1592)
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
            (i32.const 1600)
            (local.get $6)
           )
           (i32.store
            (i32.const 1612)
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
         (i32.const 1596)
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
                   (i32.const 1896)
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
                (i32.const 1896)
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
             (i32.const 1600)
            )
            (local.get $12)
           )
          )
          (block
           (if
            (i32.gt_u
             (local.tee $17
              (i32.load
               (i32.const 1608)
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
                  (i32.const 1896)
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
                  (i32.const 1596)
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
                 (i32.const 1608)
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
                 (i32.const 1608)
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
                 (i32.const 1608)
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
                 (i32.const 1632)
                )
               )
               (if
                (i32.and
                 (local.tee $1
                  (i32.load
                   (i32.const 1592)
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
                   (i32.const 1608)
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
                  (i32.const 1592)
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
               (i32.const 1896)
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
                (i32.const 1596)
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
                  (i32.const 1608)
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
                  (i32.const 1608)
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
        (i32.const 1600)
       )
      )
      (local.get $8)
     )
     (block
      (local.set $0
       (i32.load
        (i32.const 1612)
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
         (i32.const 1612)
         (local.tee $3
          (i32.add
           (local.get $0)
           (local.get $8)
          )
         )
        )
        (i32.store
         (i32.const 1600)
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
         (i32.const 1600)
         (i32.const 0)
        )
        (i32.store
         (i32.const 1612)
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
         (i32.const 1604)
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
              (i32.const 2064)
             )
             (i32.load
              (i32.const 2072)
             )
             (block (result i32)
              (i32.store
               (i32.const 2072)
               (i32.const 4096)
              )
              (i32.store
               (i32.const 2068)
               (i32.const 4096)
              )
              (i32.store
               (i32.const 2076)
               (i32.const -1)
              )
              (i32.store
               (i32.const 2080)
               (i32.const -1)
              )
              (i32.store
               (i32.const 2084)
               (i32.const 0)
              )
              (i32.store
               (i32.const 2036)
               (i32.const 0)
              )
              (i32.store
               (i32.const 2064)
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
        (i32.const 2032)
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
             (i32.const 2024)
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
          (i32.const 2036)
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
                (i32.const 1616)
               )
              )
             )
            )
            (local.set $5
             (i32.const 2040)
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
                  (i32.const 2024)
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
                          (i32.const 2068)
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
                   (i32.const 2032)
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
                 (i32.const 2072)
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
          (i32.const 2036)
          (i32.or
           (i32.load
            (i32.const 2036)
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
       (i32.const 2024)
       (local.tee $1
        (i32.add
         (local.get $2)
         (i32.load
          (i32.const 2024)
         )
        )
       )
      )
      (if
       (i32.gt_u
        (local.get $1)
        (i32.load
         (i32.const 2028)
        )
       )
       (i32.store
        (i32.const 2028)
        (local.get $1)
       )
      )
      (if
       (local.tee $4
        (i32.load
         (i32.const 1616)
        )
       )
       (block $label$break$L294
        (local.set $5
         (i32.const 2040)
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
                 (i32.const 1604)
                )
               )
              )
              (local.get $1)
             )
            )
            (i32.store
             (i32.const 1616)
             (local.get $0)
            )
            (i32.store
             (i32.const 1604)
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
             (i32.const 1620)
             (i32.load
              (i32.const 2080)
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
            (i32.const 1608)
           )
          )
         )
         (block
          (i32.store
           (i32.const 1608)
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
         (i32.const 2040)
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
              (i32.const 1604)
              (local.tee $0
               (i32.add
                (local.get $3)
                (i32.load
                 (i32.const 1604)
                )
               )
              )
             )
             (i32.store
              (i32.const 1616)
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
                (i32.const 1612)
               )
              )
              (block
               (i32.store
                (i32.const 1600)
                (local.tee $0
                 (i32.add
                  (local.get $3)
                  (i32.load
                   (i32.const 1600)
                  )
                 )
                )
               )
               (i32.store
                (i32.const 1612)
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
                      (i32.const 1632)
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
                     (i32.const 1592)
                     (i32.and
                      (i32.load
                       (i32.const 1592)
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
                       (i32.const 1896)
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
                     (i32.const 1596)
                     (i32.and
                      (i32.load
                       (i32.const 1596)
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
                      (i32.const 1608)
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
                      (i32.const 1608)
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
                     (i32.const 1608)
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
                 (i32.const 1632)
                )
               )
               (if
                (i32.and
                 (local.tee $2
                  (i32.load
                   (i32.const 1592)
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
                    (i32.const 1608)
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
                  (i32.const 1592)
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
               (i32.const 1896)
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
                  (i32.const 1596)
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
                (i32.const 1596)
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
                  (i32.const 1608)
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
                  (i32.const 1608)
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
         (i32.const 2040)
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
         (i32.const 1616)
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
         (i32.const 1604)
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
         (i32.const 1620)
         (i32.load
          (i32.const 2080)
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
          (i32.const 2040)
         )
        )
        (i64.store offset=16 align=4
         (local.get $3)
         (i64.load align=4
          (i32.const 2048)
         )
        )
        (i32.store
         (i32.const 2040)
         (local.get $0)
        )
        (i32.store
         (i32.const 2044)
         (local.get $2)
        )
        (i32.store
         (i32.const 2052)
         (i32.const 0)
        )
        (i32.store
         (i32.const 2048)
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
              (i32.const 1632)
             )
            )
            (if
             (i32.and
              (local.tee $2
               (i32.load
                (i32.const 1592)
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
                (i32.const 1608)
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
               (i32.const 1592)
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
            (i32.const 1896)
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
               (i32.const 1596)
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
             (i32.const 1596)
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
               (i32.const 1608)
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
               (i32.const 1608)
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
             (i32.const 1608)
            )
           )
          )
          (i32.lt_u
           (local.get $0)
           (local.get $1)
          )
         )
         (i32.store
          (i32.const 1608)
          (local.get $0)
         )
        )
        (i32.store
         (i32.const 2040)
         (local.get $0)
        )
        (i32.store
         (i32.const 2044)
         (local.get $2)
        )
        (i32.store
         (i32.const 2052)
         (i32.const 0)
        )
        (i32.store
         (i32.const 1628)
         (i32.load
          (i32.const 2064)
         )
        )
        (i32.store
         (i32.const 1624)
         (i32.const -1)
        )
        (i32.store
         (i32.const 1644)
         (i32.const 1632)
        )
        (i32.store
         (i32.const 1640)
         (i32.const 1632)
        )
        (i32.store
         (i32.const 1652)
         (i32.const 1640)
        )
        (i32.store
         (i32.const 1648)
         (i32.const 1640)
        )
        (i32.store
         (i32.const 1660)
         (i32.const 1648)
        )
        (i32.store
         (i32.const 1656)
         (i32.const 1648)
        )
        (i32.store
         (i32.const 1668)
         (i32.const 1656)
        )
        (i32.store
         (i32.const 1664)
         (i32.const 1656)
        )
        (i32.store
         (i32.const 1676)
         (i32.const 1664)
        )
        (i32.store
         (i32.const 1672)
         (i32.const 1664)
        )
        (i32.store
         (i32.const 1684)
         (i32.const 1672)
        )
        (i32.store
         (i32.const 1680)
         (i32.const 1672)
        )
        (i32.store
         (i32.const 1692)
         (i32.const 1680)
        )
        (i32.store
         (i32.const 1688)
         (i32.const 1680)
        )
        (i32.store
         (i32.const 1700)
         (i32.const 1688)
        )
        (i32.store
         (i32.const 1696)
         (i32.const 1688)
        )
        (i32.store
         (i32.const 1708)
         (i32.const 1696)
        )
        (i32.store
         (i32.const 1704)
         (i32.const 1696)
        )
        (i32.store
         (i32.const 1716)
         (i32.const 1704)
        )
        (i32.store
         (i32.const 1712)
         (i32.const 1704)
        )
        (i32.store
         (i32.const 1724)
         (i32.const 1712)
        )
        (i32.store
         (i32.const 1720)
         (i32.const 1712)
        )
        (i32.store
         (i32.const 1732)
         (i32.const 1720)
        )
        (i32.store
         (i32.const 1728)
         (i32.const 1720)
        )
        (i32.store
         (i32.const 1740)
         (i32.const 1728)
        )
        (i32.store
         (i32.const 1736)
         (i32.const 1728)
        )
        (i32.store
         (i32.const 1748)
         (i32.const 1736)
        )
        (i32.store
         (i32.const 1744)
         (i32.const 1736)
        )
        (i32.store
         (i32.const 1756)
         (i32.const 1744)
        )
        (i32.store
         (i32.const 1752)
         (i32.const 1744)
        )
        (i32.store
         (i32.const 1764)
         (i32.const 1752)
        )
        (i32.store
         (i32.const 1760)
         (i32.const 1752)
        )
        (i32.store
         (i32.const 1772)
         (i32.const 1760)
        )
        (i32.store
         (i32.const 1768)
         (i32.const 1760)
        )
        (i32.store
         (i32.const 1780)
         (i32.const 1768)
        )
        (i32.store
         (i32.const 1776)
         (i32.const 1768)
        )
        (i32.store
         (i32.const 1788)
         (i32.const 1776)
        )
        (i32.store
         (i32.const 1784)
         (i32.const 1776)
        )
        (i32.store
         (i32.const 1796)
         (i32.const 1784)
        )
        (i32.store
         (i32.const 1792)
         (i32.const 1784)
        )
        (i32.store
         (i32.const 1804)
         (i32.const 1792)
        )
        (i32.store
         (i32.const 1800)
         (i32.const 1792)
        )
        (i32.store
         (i32.const 1812)
         (i32.const 1800)
        )
        (i32.store
         (i32.const 1808)
         (i32.const 1800)
        )
        (i32.store
         (i32.const 1820)
         (i32.const 1808)
        )
        (i32.store
         (i32.const 1816)
         (i32.const 1808)
        )
        (i32.store
         (i32.const 1828)
         (i32.const 1816)
        )
        (i32.store
         (i32.const 1824)
         (i32.const 1816)
        )
        (i32.store
         (i32.const 1836)
         (i32.const 1824)
        )
        (i32.store
         (i32.const 1832)
         (i32.const 1824)
        )
        (i32.store
         (i32.const 1844)
         (i32.const 1832)
        )
        (i32.store
         (i32.const 1840)
         (i32.const 1832)
        )
        (i32.store
         (i32.const 1852)
         (i32.const 1840)
        )
        (i32.store
         (i32.const 1848)
         (i32.const 1840)
        )
        (i32.store
         (i32.const 1860)
         (i32.const 1848)
        )
        (i32.store
         (i32.const 1856)
         (i32.const 1848)
        )
        (i32.store
         (i32.const 1868)
         (i32.const 1856)
        )
        (i32.store
         (i32.const 1864)
         (i32.const 1856)
        )
        (i32.store
         (i32.const 1876)
         (i32.const 1864)
        )
        (i32.store
         (i32.const 1872)
         (i32.const 1864)
        )
        (i32.store
         (i32.const 1884)
         (i32.const 1872)
        )
        (i32.store
         (i32.const 1880)
         (i32.const 1872)
        )
        (i32.store
         (i32.const 1892)
         (i32.const 1880)
        )
        (i32.store
         (i32.const 1888)
         (i32.const 1880)
        )
        (i32.store
         (i32.const 1616)
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
         (i32.const 1604)
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
         (i32.const 1620)
         (i32.load
          (i32.const 2080)
         )
        )
       )
      )
      (if
       (i32.gt_u
        (local.tee $0
         (i32.load
          (i32.const 1604)
         )
        )
        (local.get $8)
       )
       (br $folding-inner0)
      )
     )
     (i32.store
      (i32.const 1588)
      (i32.const 12)
     )
     (br $folding-inner2)
    )
    (i32.store
     (i32.const 1604)
     (local.tee $2
      (i32.sub
       (local.get $0)
       (local.get $8)
      )
     )
    )
    (i32.store
     (i32.const 1616)
     (local.tee $1
      (i32.add
       (local.get $8)
       (local.tee $0
        (i32.load
         (i32.const 1616)
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
 (func $_free (; 21 ;) (; has Stack IR ;) (param $0 i32)
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
      (i32.const 1608)
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
       (i32.const 1612)
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
       (i32.const 1600)
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
          (i32.const 1632)
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
         (i32.const 1592)
         (i32.and
          (i32.load
           (i32.const 1592)
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
           (i32.const 1896)
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
           (i32.const 1596)
           (i32.and
            (i32.load
             (i32.const 1596)
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
          (i32.const 1608)
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
          (i32.const 1608)
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
          (i32.const 1608)
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
          (i32.const 1616)
         )
        )
        (block
         (i32.store
          (i32.const 1604)
          (local.tee $0
           (i32.add
            (local.get $1)
            (i32.load
             (i32.const 1604)
            )
           )
          )
         )
         (i32.store
          (i32.const 1616)
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
            (i32.const 1612)
           )
           (local.get $2)
          )
          (return)
         )
         (i32.store
          (i32.const 1612)
          (i32.const 0)
         )
         (i32.store
          (i32.const 1600)
          (i32.const 0)
         )
         (return)
        )
       )
       (if
        (i32.eq
         (local.get $7)
         (i32.load
          (i32.const 1612)
         )
        )
        (block
         (i32.store
          (i32.const 1600)
          (local.tee $0
           (i32.add
            (local.get $1)
            (i32.load
             (i32.const 1600)
            )
           )
          )
         )
         (i32.store
          (i32.const 1612)
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
              (i32.const 1632)
             )
            )
           )
           (block
            (if
             (i32.gt_u
              (i32.load
               (i32.const 1608)
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
             (i32.const 1592)
             (i32.and
              (i32.load
               (i32.const 1592)
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
               (i32.const 1608)
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
               (i32.const 1608)
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
               (i32.const 1608)
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
                 (i32.const 1896)
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
                 (i32.const 1596)
                 (i32.and
                  (i32.load
                   (i32.const 1596)
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
                (i32.const 1608)
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
                (i32.const 1608)
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
                (i32.const 1608)
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
          (i32.const 1612)
         )
        )
        (block
         (i32.store
          (i32.const 1600)
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
      (i32.const 1632)
     )
    )
    (if
     (i32.and
      (local.tee $5
       (i32.load
        (i32.const 1592)
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
        (i32.const 1608)
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
       (i32.const 1592)
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
    (i32.const 1896)
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
      (i32.const 1596)
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
         (i32.const 1608)
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
         (i32.const 1608)
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
     (i32.const 1596)
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
   (i32.const 1624)
   (local.tee $0
    (i32.add
     (i32.load
      (i32.const 1624)
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
   (i32.const 2048)
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
   (i32.const 1624)
   (i32.const -1)
  )
 )
 (func $__ZSt18uncaught_exceptionv (; 22 ;) (; has Stack IR ;) (result i32)
  (i32.gt_s
   (i32.and
    (call $___cxa_uncaught_exception)
    (i32.const 1)
   )
   (i32.const 0)
  )
 )
 (func $__Znwm (; 23 ;) (; has Stack IR ;) (param $0 i32) (result i32)
  (local $1 i32)
  (local.set $1
   (select
    (local.get $0)
    (i32.const 1)
    (local.get $0)
   )
  )
  (loop $while-in (result i32)
   (if (result i32)
    (local.tee $0
     (call $_malloc
      (local.get $1)
     )
    )
    (local.get $0)
    (if (result i32)
     (block (result i32)
      (i32.store
       (i32.const 2088)
       (local.tee $0
        (i32.load
         (i32.const 2088)
        )
       )
      )
      (local.get $0)
     )
     (block
      (call_indirect (type $FUNCSIG$v)
       (i32.const 4)
      )
      (br $while-in)
     )
     (i32.const 0)
    )
   )
  )
 )
 (func $__ZNSt3__218__libcpp_refstringC2EPKc (; 24 ;) (; has Stack IR ;) (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (i32.store
   (local.tee $1
    (call $__Znwm
     (i32.add
      (local.tee $2
       (call $_strlen)
      )
      (i32.const 13)
     )
    )
   )
   (local.get $2)
  )
  (i32.store offset=4
   (local.get $1)
   (local.get $2)
  )
  (i32.store offset=8
   (local.get $1)
   (i32.const 0)
  )
  (drop
   (call $_memcpy
    (local.tee $1
     (i32.add
      (local.get $1)
      (i32.const 12)
     )
    )
    (i32.const 1272)
    (i32.add
     (local.get $2)
     (i32.const 1)
    )
   )
  )
  (i32.store
   (local.get $0)
   (local.get $1)
  )
 )
 (func $__ZN10__cxxabiv116__shim_type_infoD2Ev (; 25 ;) (; has Stack IR ;) (param $0 i32)
  (nop)
 )
 (func $__ZN10__cxxabiv117__class_type_infoD0Ev (; 26 ;) (; has Stack IR ;) (param $0 i32)
  (call $_free
   (local.get $0)
  )
 )
 (func $__ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERPv (; 27 ;) (; has Stack IR ;) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
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
        (i32.const 1032)
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
         (i32.const 21)
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
 (func $__ZNK10__cxxabiv117__class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib (; 28 ;) (; has Stack IR ;) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (param $5 i32)
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
 (func $__ZNK10__cxxabiv117__class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib (; 29 ;) (; has Stack IR ;) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32)
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
 (func $__ZNK10__cxxabiv117__class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi (; 30 ;) (; has Stack IR ;) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32)
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
 (func $__ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi (; 31 ;) (; has Stack IR ;) (param $0 i32) (param $1 i32) (param $2 i32)
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
 (func $__ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i (; 32 ;) (; has Stack IR ;) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32)
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
 (func $___dynamic_cast (; 33 ;) (; has Stack IR ;) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local.set $2
   (global.get $STACKTOP)
  )
  (global.set $STACKTOP
   (i32.sub
    (global.get $STACKTOP)
    (i32.const -64)
   )
  )
  (local.set $4
   (i32.add
    (local.get $0)
    (i32.load
     (i32.add
      (local.tee $3
       (i32.load
        (local.get $0)
       )
      )
      (i32.const -8)
     )
    )
   )
  )
  (local.set $3
   (i32.load
    (i32.add
     (local.get $3)
     (i32.const -4)
    )
   )
  )
  (i32.store
   (local.get $2)
   (local.get $1)
  )
  (i32.store offset=4
   (local.get $2)
   (local.get $0)
  )
  (i32.store offset=8
   (local.get $2)
   (i32.const 1048)
  )
  (i32.store offset=12
   (local.get $2)
   (i32.const 0)
  )
  (i64.store offset=16 align=4
   (local.get $2)
   (i64.const 0)
  )
  (i64.store offset=24 align=4
   (local.get $2)
   (i64.const 0)
  )
  (i64.store offset=32 align=4
   (local.get $2)
   (i64.const 0)
  )
  (i64.store offset=40 align=4
   (local.get $2)
   (i64.const 0)
  )
  (i32.store offset=48
   (local.get $2)
   (i32.const 0)
  )
  (i32.store16 offset=52
   (local.get $2)
   (i32.const 0)
  )
  (i32.store8 offset=54
   (local.get $2)
   (i32.const 0)
  )
  (local.set $0
   (if (result i32)
    (i32.eq
     (local.get $1)
     (local.get $3)
    )
    (block (result i32)
     (i32.store offset=48
      (local.get $2)
      (i32.const 1)
     )
     (call_indirect (type $FUNCSIG$viiiiii)
      (local.get $3)
      (local.get $2)
      (local.get $4)
      (local.get $4)
      (i32.const 1)
      (i32.const 0)
      (i32.add
       (i32.and
        (i32.load offset=20
         (i32.load
          (local.get $3)
         )
        )
        (i32.const 3)
       )
       (i32.const 29)
      )
     )
     (select
      (local.get $4)
      (i32.const 0)
      (i32.eq
       (i32.load offset=24
        (local.get $2)
       )
       (i32.const 1)
      )
     )
    )
    (block $label$break$L1 (result i32)
     (call_indirect (type $FUNCSIG$viiiii)
      (local.get $3)
      (local.get $2)
      (local.get $4)
      (i32.const 1)
      (i32.const 0)
      (i32.add
       (i32.and
        (i32.load offset=24
         (i32.load
          (local.get $3)
         )
        )
        (i32.const 3)
       )
       (i32.const 25)
      )
     )
     (block $switch
      (block $switch-default
       (block $switch-case
        (br_table $switch-case $switch $switch-default
         (i32.load offset=36
          (local.get $2)
         )
        )
       )
       (br $label$break$L1
        (select
         (i32.load offset=20
          (local.get $2)
         )
         (i32.const 0)
         (i32.and
          (i32.and
           (i32.eq
            (i32.load offset=40
             (local.get $2)
            )
            (i32.const 1)
           )
           (i32.eq
            (i32.load offset=28
             (local.get $2)
            )
            (i32.const 1)
           )
          )
          (i32.eq
           (i32.load offset=32
            (local.get $2)
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
        (local.get $2)
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
             (local.get $2)
            )
           )
           (i32.eq
            (i32.load offset=28
             (local.get $2)
            )
            (i32.const 1)
           )
          )
          (i32.eq
           (i32.load offset=32
            (local.get $2)
           )
           (i32.const 1)
          )
         )
        )
       )
      )
     )
     (i32.load offset=16
      (local.get $2)
     )
    )
   )
  )
  (global.set $STACKTOP
   (local.get $2)
  )
  (local.get $0)
 )
 (func $__ZNK10__cxxabiv120__si_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib (; 34 ;) (; has Stack IR ;) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (param $5 i32)
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
      (i32.const 29)
     )
    )
   )
  )
 )
 (func $__ZNK10__cxxabiv120__si_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib (; 35 ;) (; has Stack IR ;) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32)
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
        (i32.const 25)
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
         (i32.const 29)
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
 (func $__ZNK10__cxxabiv120__si_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi (; 36 ;) (; has Stack IR ;) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32)
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
      (i32.const 21)
     )
    )
   )
  )
 )
 (func $__ZNSt11logic_errorD2Ev (; 37 ;) (; has Stack IR ;) (param $0 i32)
  (i32.store
   (local.get $0)
   (i32.const 1240)
  )
  (call $__ZNSt3__218__libcpp_refstringD2Ev
   (i32.add
    (local.get $0)
    (i32.const 4)
   )
  )
 )
 (func $__ZNSt11logic_errorD0Ev (; 38 ;) (; has Stack IR ;) (param $0 i32)
  (call $__ZNSt11logic_errorD2Ev
   (local.get $0)
  )
  (call $_free
   (local.get $0)
  )
 )
 (func $__ZNKSt11logic_error4whatEv (; 39 ;) (; has Stack IR ;) (param $0 i32) (result i32)
  (i32.load offset=4
   (local.get $0)
  )
 )
 (func $__ZNSt3__218__libcpp_refstringD2Ev (; 40 ;) (; has Stack IR ;) (param $0 i32)
  (local $1 i32)
  (local.set $1
   (i32.load offset=8
    (local.tee $0
     (i32.add
      (i32.load
       (local.get $0)
      )
      (i32.const -12)
     )
    )
   )
  )
  (i32.store offset=8
   (local.get $0)
   (i32.add
    (local.get $1)
    (i32.const -1)
   )
  )
  (if
   (i32.lt_s
    (i32.add
     (local.get $1)
     (i32.const -1)
    )
    (i32.const 0)
   )
   (call $_free
    (local.get $0)
   )
  )
 )
 (func $___cxa_can_catch (; 41 ;) (; has Stack IR ;) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local.set $3
   (global.get $STACKTOP)
  )
  (global.set $STACKTOP
   (i32.add
    (global.get $STACKTOP)
    (i32.const 16)
   )
  )
  (i32.store
   (local.get $3)
   (i32.load
    (local.get $2)
   )
  )
  (local.set $4
   (i32.load offset=16
    (i32.load
     (local.get $0)
    )
   )
  )
  (if
   (local.tee $0
    (call_indirect (type $FUNCSIG$iiii)
     (local.get $0)
     (local.get $1)
     (local.get $3)
     (i32.add
      (i32.and
       (local.get $4)
       (i32.const 1)
      )
      (i32.const 2)
     )
    )
   )
   (i32.store
    (local.get $2)
    (i32.load
     (local.get $3)
    )
   )
  )
  (global.set $STACKTOP
   (local.get $3)
  )
  (i32.and
   (local.get $0)
   (i32.const 1)
  )
 )
 (func $___cxa_is_pointer_type (; 42 ;) (; has Stack IR ;) (param $0 i32) (result i32)
  (if (result i32)
   (local.get $0)
   (i32.ne
    (call $___dynamic_cast
     (local.get $0)
     (i32.const 1136)
    )
    (i32.const 0)
   )
   (i32.const 0)
  )
 )
 (func $_memcpy (; 43 ;) (; has Stack IR ;) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
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
 (func $_memset (; 44 ;) (; has Stack IR ;) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
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
 (func $_sbrk (; 45 ;) (; has Stack IR ;) (param $0 i32) (result i32)
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
 (func $dynCall_ii (; 46 ;) (; has Stack IR ;) (param $0 i32) (param $1 i32) (result i32)
  (call_indirect (type $FUNCSIG$ii)
   (local.get $1)
   (i32.and
    (local.get $0)
    (i32.const 1)
   )
  )
 )
 (func $dynCall_iiii (; 47 ;) (; has Stack IR ;) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (result i32)
  (call_indirect (type $FUNCSIG$iiii)
   (local.get $1)
   (local.get $2)
   (local.get $3)
   (i32.add
    (i32.and
     (local.get $0)
     (i32.const 1)
    )
    (i32.const 2)
   )
  )
 )
 (func $dynCall_v (; 48 ;) (; has Stack IR ;) (param $0 i32)
  (call_indirect (type $FUNCSIG$v)
   (i32.const 4)
  )
 )
 (func $dynCall_vi (; 49 ;) (; has Stack IR ;) (param $0 i32) (param $1 i32)
  (call_indirect (type $FUNCSIG$vi)
   (local.get $1)
   (i32.add
    (i32.and
     (local.get $0)
     (i32.const 15)
    )
    (i32.const 5)
   )
  )
 )
 (func $dynCall_viiii (; 50 ;) (; has Stack IR ;) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32)
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
    (i32.const 21)
   )
  )
 )
 (func $dynCall_viiiii (; 51 ;) (; has Stack IR ;) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (param $5 i32)
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
    (i32.const 25)
   )
  )
 )
 (func $dynCall_viiiiii (; 52 ;) (; has Stack IR ;) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (param $5 i32) (param $6 i32)
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
    (i32.const 29)
   )
  )
 )
 (func $b0 (; 53 ;) (; has Stack IR ;) (param $0 i32) (result i32)
  (call $abort
   (i32.const 0)
  )
  (i32.const 0)
 )
 (func $b1 (; 54 ;) (; has Stack IR ;) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (call $abort
   (i32.const 1)
  )
  (i32.const 0)
 )
 (func $b2 (; 55 ;) (; has Stack IR ;)
  (call $abort
   (i32.const 2)
  )
 )
 (func $b3 (; 56 ;) (; has Stack IR ;) (param $0 i32)
  (call $abort
   (i32.const 3)
  )
 )
 (func $b4 (; 57 ;) (; has Stack IR ;) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32)
  (call $abort
   (i32.const 4)
  )
 )
 (func $b5 (; 58 ;) (; has Stack IR ;) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32)
  (call $abort
   (i32.const 5)
  )
 )
 (func $b6 (; 59 ;) (; has Stack IR ;) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (param $5 i32)
  (call $abort
   (i32.const 6)
  )
 )
)
