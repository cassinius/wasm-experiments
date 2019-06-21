(module
 (export "__Z3fibi" (func $__Z3fibi))
 (export "_main" (func $_main))
 (func $__Z3fibi (; 0 ;) (; has Stack IR ;) (param $0 i32) (result i32)
  (local $1 i32)
  (if
   (i32.lt_s
    (local.get $0)
    (i32.const 1)
   )
   (return
    (i32.const 0)
   )
  )
  (if (result i32)
   (i32.eq
    (local.get $0)
    (i32.const 1)
   )
   (i32.const 1)
   (block (result i32)
    (local.set $1
     (i32.add
      (local.get $0)
      (i32.const -2)
     )
    )
    (i32.add
     (call $__Z3fibi
      (i32.add
       (local.get $0)
       (i32.const -1)
      )
     )
     (call $__Z3fibi
      (local.get $1)
     )
    )
   )
  )
 )
 (func $_main (; 1 ;) (; has Stack IR ;) (result i32)
  (i32.const 0)
 )
)
