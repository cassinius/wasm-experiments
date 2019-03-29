(module
 (type $FUNCSIG$viiii (func (param i32 i32 i32 i32)))
 (type $FUNCSIG$v (func))
 (type $FUNCSIG$jj (func (param i64) (result i64)))
 (type $FUNCSIG$ii (func (param i32) (result i32)))
 (type $FUNCSIG$vi (func (param i32)))
 (type $FUNCSIG$iii (func (param i32 i32) (result i32)))
 (type $FUNCSIG$vii (func (param i32 i32)))
 (type $FUNCSIG$viii (func (param i32 i32 i32)))
 (type $FUNCSIG$iiii (func (param i32 i32 i32) (result i32)))
 (type $FUNCSIG$d (func (result f64)))
 (import "env" "abort" (func $~lib/env/abort (param i32 i32 i32 i32)))
 (memory $0 1)
 (data (i32.const 8) "\16\00\00\00~\00l\00i\00b\00/\00a\00l\00l\00o\00c\00a\00t\00o\00r\00/\00t\00l\00s\00f\00.\00t\00s")
 (data (i32.const 56) "\0c\00\00\00~\00l\00i\00b\00/\00m\00a\00t\00h\00.\00t\00s")
 (data (i32.const 88) "\0d\00\00\00~\00l\00i\00b\00/\00a\00r\00r\00a\00y\00.\00t\00s")
 (data (i32.const 120) "\1c\00\00\00~\00l\00i\00b\00/\00i\00n\00t\00e\00r\00n\00a\00l\00/\00a\00r\00r\00a\00y\00b\00u\00f\00f\00e\00r\00.\00t\00s")
 (table $0 1 funcref)
 (elem (i32.const 0) $null)
 (global $~lib/allocator/tlsf/ROOT (mut i32) (i32.const 0))
 (global $~lib/math/random_seeded (mut i32) (i32.const 0))
 (global $~lib/math/random_state0_64 (mut i64) (i64.const 0))
 (global $~lib/math/random_state1_64 (mut i64) (i64.const 0))
 (global $~lib/math/random_state0_32 (mut i32) (i32.const 0))
 (global $~lib/math/random_state1_32 (mut i32) (i32.const 0))
 (global $assembly/index/V (mut i32) (i32.const 0))
 (global $assembly/index/graph (mut i32) (i32.const 0))
 (export "memory" (memory $0))
 (export "table" (table $0))
 (export "instantiateGraph" (func $assembly/index/instantiateGraph))
 (export "FWDense" (func $assembly/index/FWDense))
 (start $start)
 (func $~lib/math/murmurHash3 (; 1 ;) (type $FUNCSIG$jj) (param $0 i64) (result i64)
  local.get $0
  local.get $0
  i64.const 33
  i64.shr_u
  i64.xor
  i64.const -49064778989728563
  i64.mul
  local.tee $0
  i64.const 33
  i64.shr_u
  local.get $0
  i64.xor
  i64.const -4265267296055464877
  i64.mul
  local.tee $0
  i64.const 33
  i64.shr_u
  local.get $0
  i64.xor
 )
 (func $~lib/math/splitMix32 (; 2 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.const 1831565813
  i32.add
  local.tee $0
  i32.const 1
  i32.or
  local.get $0
  local.get $0
  i32.const 15
  i32.shr_u
  i32.xor
  i32.mul
  local.tee $0
  i32.const 61
  i32.or
  local.get $0
  local.get $0
  i32.const 7
  i32.shr_u
  i32.xor
  i32.mul
  local.get $0
  i32.add
  local.get $0
  i32.xor
  local.tee $0
  i32.const 14
  i32.shr_u
  local.get $0
  i32.xor
 )
 (func $~lib/math/NativeMath.seedRandom (; 3 ;) (type $FUNCSIG$v)
  i32.const 1
  global.set $~lib/math/random_seeded
  i64.const 8190327419327409137
  call $~lib/math/murmurHash3
  global.set $~lib/math/random_state0_64
  global.get $~lib/math/random_state0_64
  i64.const -1
  i64.xor
  call $~lib/math/murmurHash3
  global.set $~lib/math/random_state1_64
  i32.const -953750543
  call $~lib/math/splitMix32
  global.set $~lib/math/random_state0_32
  global.get $~lib/math/random_state0_32
  call $~lib/math/splitMix32
  global.set $~lib/math/random_state1_32
 )
 (func $~lib/internal/arraybuffer/computeSize (; 4 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  i32.const 1
  i32.const 32
  local.get $0
  i32.const 7
  i32.add
  i32.clz
  i32.sub
  i32.shl
 )
 (func $~lib/allocator/tlsf/Root#set:tailRef (; 5 ;) (type $FUNCSIG$vi) (param $0 i32)
  i32.const 2912
  local.get $0
  i32.store
 )
 (func $~lib/allocator/tlsf/Root#setSLMap (; 6 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  local.get $1
  i32.const 22
  i32.ge_u
  if
   i32.const 0
   i32.const 8
   i32.const 144
   i32.const 4
   call $~lib/env/abort
   unreachable
  end
  local.get $0
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  local.get $2
  i32.store offset=4
 )
 (func $~lib/allocator/tlsf/Root#setHead (; 7 ;) (type $FUNCSIG$viiii) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32)
  local.get $1
  i32.const 22
  i32.ge_u
  if
   i32.const 0
   i32.const 8
   i32.const 167
   i32.const 4
   call $~lib/env/abort
   unreachable
  end
  local.get $2
  i32.const 32
  i32.ge_u
  if
   i32.const 0
   i32.const 8
   i32.const 168
   i32.const 4
   call $~lib/env/abort
   unreachable
  end
  local.get $0
  local.get $1
  i32.const 5
  i32.shl
  local.get $2
  i32.add
  i32.const 2
  i32.shl
  i32.add
  local.get $3
  i32.store offset=96
 )
 (func $~lib/allocator/tlsf/Block#get:right (; 8 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.load
  i32.const -4
  i32.and
  i32.eqz
  if
   i32.const 0
   i32.const 8
   i32.const 89
   i32.const 4
   call $~lib/env/abort
   unreachable
  end
  local.get $0
  i32.const 8
  i32.add
  local.get $0
  i32.load
  i32.const -4
  i32.and
  i32.add
  local.tee $0
  if (result i32)
   local.get $0
  else   
   i32.const 0
   i32.const 8
   i32.const 90
   i32.const 11
   call $~lib/env/abort
   unreachable
  end
 )
 (func $~lib/allocator/tlsf/fls<usize> (; 9 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.eqz
  if
   i32.const 0
   i32.const 8
   i32.const 428
   i32.const 2
   call $~lib/env/abort
   unreachable
  end
  i32.const 31
  local.get $0
  i32.clz
  i32.sub
 )
 (func $~lib/allocator/tlsf/Root#getHead (; 10 ;) (type $FUNCSIG$iiii) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  local.get $1
  i32.const 22
  i32.ge_u
  if
   i32.const 0
   i32.const 8
   i32.const 158
   i32.const 4
   call $~lib/env/abort
   unreachable
  end
  local.get $2
  i32.const 32
  i32.ge_u
  if
   i32.const 0
   i32.const 8
   i32.const 159
   i32.const 4
   call $~lib/env/abort
   unreachable
  end
  local.get $0
  local.get $1
  i32.const 5
  i32.shl
  local.get $2
  i32.add
  i32.const 2
  i32.shl
  i32.add
  i32.load offset=96
 )
 (func $~lib/allocator/tlsf/Root#getSLMap (; 11 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  local.get $1
  i32.const 22
  i32.ge_u
  if
   i32.const 0
   i32.const 8
   i32.const 138
   i32.const 4
   call $~lib/env/abort
   unreachable
  end
  local.get $0
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  i32.load offset=4
 )
 (func $~lib/allocator/tlsf/Root#remove (; 12 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $1
  i32.load
  local.tee $2
  i32.const 1
  i32.and
  i32.eqz
  if
   i32.const 0
   i32.const 8
   i32.const 258
   i32.const 4
   call $~lib/env/abort
   unreachable
  end
  local.get $2
  i32.const -4
  i32.and
  local.tee $3
  i32.const 16
  i32.ge_u
  local.tee $2
  if (result i32)
   local.get $3
   i32.const 1073741824
   i32.lt_u
  else   
   local.get $2
  end
  i32.eqz
  if
   i32.const 0
   i32.const 8
   i32.const 260
   i32.const 4
   call $~lib/env/abort
   unreachable
  end
  local.get $3
  i32.const 256
  i32.lt_u
  if (result i32)
   local.get $3
   i32.const 8
   i32.div_u
   local.set $4
   i32.const 0
  else   
   local.get $3
   local.get $3
   call $~lib/allocator/tlsf/fls<usize>
   local.tee $2
   i32.const 5
   i32.sub
   i32.shr_u
   i32.const 32
   i32.xor
   local.set $4
   local.get $2
   i32.const 7
   i32.sub
  end
  local.set $2
  local.get $1
  i32.load offset=8
  local.set $3
  local.get $1
  i32.load offset=4
  local.tee $5
  if
   local.get $5
   local.get $3
   i32.store offset=8
  end
  local.get $3
  if
   local.get $3
   local.get $5
   i32.store offset=4
  end
  local.get $0
  local.get $2
  local.get $4
  call $~lib/allocator/tlsf/Root#getHead
  local.get $1
  i32.eq
  if
   local.get $0
   local.get $2
   local.get $4
   local.get $3
   call $~lib/allocator/tlsf/Root#setHead
   local.get $3
   i32.eqz
   if
    local.get $0
    local.get $2
    local.get $0
    local.get $2
    call $~lib/allocator/tlsf/Root#getSLMap
    i32.const 1
    local.get $4
    i32.shl
    i32.const -1
    i32.xor
    i32.and
    local.tee $1
    call $~lib/allocator/tlsf/Root#setSLMap
    local.get $1
    i32.eqz
    if
     local.get $0
     local.get $0
     i32.load
     i32.const 1
     local.get $2
     i32.shl
     i32.const -1
     i32.xor
     i32.and
     i32.store
    end
   end
  end
 )
 (func $~lib/allocator/tlsf/Block#get:left (; 13 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.load
  i32.const 2
  i32.and
  i32.eqz
  if
   i32.const 0
   i32.const 8
   i32.const 81
   i32.const 4
   call $~lib/env/abort
   unreachable
  end
  local.get $0
  i32.const 4
  i32.sub
  i32.load
  local.tee $0
  if (result i32)
   local.get $0
  else   
   i32.const 0
   i32.const 8
   i32.const 82
   i32.const 11
   call $~lib/env/abort
   unreachable
  end
 )
 (func $~lib/allocator/tlsf/Root#setJump (; 14 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  local.get $0
  i32.load
  i32.const 1
  i32.and
  i32.eqz
  if
   i32.const 0
   i32.const 8
   i32.const 334
   i32.const 4
   call $~lib/env/abort
   unreachable
  end
  local.get $0
  call $~lib/allocator/tlsf/Block#get:right
  local.get $1
  i32.ne
  if
   i32.const 0
   i32.const 8
   i32.const 335
   i32.const 4
   call $~lib/env/abort
   unreachable
  end
  local.get $1
  i32.load
  i32.const 2
  i32.and
  i32.eqz
  if
   i32.const 0
   i32.const 8
   i32.const 336
   i32.const 4
   call $~lib/env/abort
   unreachable
  end
  local.get $1
  i32.const 4
  i32.sub
  local.get $0
  i32.store
 )
 (func $~lib/allocator/tlsf/Root#insert (; 15 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $1
  i32.eqz
  if
   i32.const 0
   i32.const 8
   i32.const 189
   i32.const 4
   call $~lib/env/abort
   unreachable
  end
  local.get $1
  i32.load
  local.tee $3
  i32.const 1
  i32.and
  i32.eqz
  if
   i32.const 0
   i32.const 8
   i32.const 191
   i32.const 4
   call $~lib/env/abort
   unreachable
  end
  local.get $1
  i32.load
  i32.const -4
  i32.and
  local.tee $2
  i32.const 16
  i32.ge_u
  local.tee $4
  if (result i32)
   local.get $2
   i32.const 1073741824
   i32.lt_u
  else   
   local.get $4
  end
  i32.eqz
  if
   i32.const 0
   i32.const 8
   i32.const 193
   i32.const 4
   call $~lib/env/abort
   unreachable
  end
  block (result i32)
   local.get $1
   call $~lib/allocator/tlsf/Block#get:right
   local.tee $2
   i32.eqz
   if
    block
     i32.const 0
     i32.const 8
     i32.const 197
     i32.const 23
     call $~lib/env/abort
     unreachable
     unreachable
    end
    unreachable
    local.tee $2
    unreachable
   end
   local.get $2
   i32.load
   local.tee $4
   i32.const 1
   i32.and
  end
  if
   local.get $0
   local.get $2
   call $~lib/allocator/tlsf/Root#remove
   local.get $1
   local.get $3
   local.get $4
   i32.const -4
   i32.and
   i32.const 8
   i32.add
   i32.add
   local.tee $3
   i32.store
   local.get $1
   call $~lib/allocator/tlsf/Block#get:right
   local.tee $2
   i32.load
   local.set $4
  end
  local.get $3
  i32.const 2
  i32.and
  if
   block (result i32)
    local.get $1
    call $~lib/allocator/tlsf/Block#get:left
    local.tee $1
    i32.eqz
    if
     block
      i32.const 0
      i32.const 8
      i32.const 211
      i32.const 24
      call $~lib/env/abort
      unreachable
      unreachable
     end
     unreachable
     local.tee $1
     unreachable
    end
    local.get $1
    i32.load
    local.tee $5
    i32.const 1
    i32.and
    i32.eqz
   end
   if
    i32.const 0
    i32.const 8
    i32.const 213
    i32.const 6
    call $~lib/env/abort
    unreachable
   end
   local.get $0
   local.get $1
   call $~lib/allocator/tlsf/Root#remove
   local.get $1
   local.get $5
   local.get $3
   i32.const -4
   i32.and
   i32.const 8
   i32.add
   i32.add
   local.tee $3
   i32.store
  end
  local.get $2
  local.get $4
  i32.const 2
  i32.or
  i32.store
  local.get $1
  local.get $2
  call $~lib/allocator/tlsf/Root#setJump
  local.get $3
  i32.const -4
  i32.and
  local.tee $2
  i32.const 16
  i32.ge_u
  local.tee $3
  if (result i32)
   local.get $2
   i32.const 1073741824
   i32.lt_u
  else   
   local.get $3
  end
  i32.eqz
  if
   i32.const 0
   i32.const 8
   i32.const 226
   i32.const 4
   call $~lib/env/abort
   unreachable
  end
  local.get $0
  local.get $2
  i32.const 256
  i32.lt_u
  if (result i32)
   local.get $2
   i32.const 8
   i32.div_u
   local.set $2
   i32.const 0
  else   
   local.get $2
   local.get $2
   call $~lib/allocator/tlsf/fls<usize>
   local.tee $3
   i32.const 5
   i32.sub
   i32.shr_u
   i32.const 32
   i32.xor
   local.set $2
   local.get $3
   i32.const 7
   i32.sub
  end
  local.tee $3
  local.get $2
  call $~lib/allocator/tlsf/Root#getHead
  local.set $4
  local.get $1
  i32.const 0
  i32.store offset=4
  local.get $1
  local.get $4
  i32.store offset=8
  local.get $4
  if
   local.get $4
   local.get $1
   i32.store offset=4
  end
  local.get $0
  local.get $3
  local.get $2
  local.get $1
  call $~lib/allocator/tlsf/Root#setHead
  local.get $0
  local.get $0
  i32.load
  i32.const 1
  local.get $3
  i32.shl
  i32.or
  i32.store
  local.get $0
  local.get $3
  local.get $0
  local.get $3
  call $~lib/allocator/tlsf/Root#getSLMap
  i32.const 1
  local.get $2
  i32.shl
  i32.or
  call $~lib/allocator/tlsf/Root#setSLMap
 )
 (func $~lib/allocator/tlsf/Root#addMemory (; 16 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  local.get $2
  i32.gt_u
  if
   i32.const 0
   i32.const 8
   i32.const 377
   i32.const 4
   call $~lib/env/abort
   unreachable
  end
  local.get $1
  i32.const 7
  i32.and
  if
   i32.const 0
   i32.const 8
   i32.const 378
   i32.const 4
   call $~lib/env/abort
   unreachable
  end
  local.get $2
  i32.const 7
  i32.and
  if
   i32.const 0
   i32.const 8
   i32.const 379
   i32.const 4
   call $~lib/env/abort
   unreachable
  end
  i32.const 2912
  i32.load
  local.tee $3
  if
   local.get $1
   local.get $3
   i32.const 4
   i32.add
   i32.lt_u
   if
    i32.const 0
    i32.const 8
    i32.const 384
    i32.const 6
    call $~lib/env/abort
    unreachable
   end
   local.get $1
   i32.const 8
   i32.sub
   local.get $3
   i32.eq
   if
    local.get $3
    i32.load
    local.set $4
    local.get $1
    i32.const 8
    i32.sub
    local.set $1
   end
  else   
   local.get $1
   local.get $0
   i32.const 2916
   i32.add
   i32.lt_u
   if
    i32.const 0
    i32.const 8
    i32.const 393
    i32.const 6
    call $~lib/env/abort
    unreachable
   end
  end
  local.get $2
  local.get $1
  i32.sub
  local.tee $2
  i32.const 32
  i32.lt_u
  if
   return
  end
  local.get $1
  local.get $4
  i32.const 2
  i32.and
  local.get $2
  i32.const 16
  i32.sub
  i32.const 1
  i32.or
  i32.or
  i32.store
  local.get $1
  i32.const 0
  i32.store offset=4
  local.get $1
  i32.const 0
  i32.store offset=8
  local.get $1
  local.get $2
  i32.add
  i32.const 8
  i32.sub
  local.tee $2
  i32.const 2
  i32.store
  local.get $2
  call $~lib/allocator/tlsf/Root#set:tailRef
  local.get $0
  local.get $1
  call $~lib/allocator/tlsf/Root#insert
 )
 (func $~lib/allocator/tlsf/ffs<usize> (; 17 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.eqz
  if
   i32.const 0
   i32.const 8
   i32.const 422
   i32.const 2
   call $~lib/env/abort
   unreachable
  end
  local.get $0
  i32.ctz
 )
 (func $~lib/allocator/tlsf/Root#search (; 18 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $1
  i32.const 16
  i32.ge_u
  local.tee $2
  if (result i32)
   local.get $1
   i32.const 1073741824
   i32.lt_u
  else   
   local.get $2
  end
  i32.eqz
  if
   i32.const 0
   i32.const 8
   i32.const 296
   i32.const 4
   call $~lib/env/abort
   unreachable
  end
  local.get $1
  i32.const 256
  i32.lt_u
  if (result i32)
   i32.const 0
   local.set $2
   local.get $1
   i32.const 8
   i32.div_u
  else   
   local.get $1
   local.get $1
   call $~lib/allocator/tlsf/fls<usize>
   local.tee $2
   i32.const 5
   i32.sub
   i32.shr_u
   i32.const 32
   i32.xor
   local.set $1
   local.get $2
   i32.const 7
   i32.sub
   local.set $2
   local.get $1
   i32.const 31
   i32.lt_u
   if (result i32)
    local.get $1
    i32.const 1
    i32.add
   else    
    local.get $2
    i32.const 1
    i32.add
    local.set $2
    i32.const 0
   end
  end
  local.set $1
  local.get $0
  local.get $2
  call $~lib/allocator/tlsf/Root#getSLMap
  i32.const -1
  local.get $1
  i32.shl
  i32.and
  local.tee $1
  if (result i32)
   local.get $0
   local.get $2
   local.get $1
   call $~lib/allocator/tlsf/ffs<usize>
   call $~lib/allocator/tlsf/Root#getHead
  else   
   local.get $0
   i32.load
   i32.const -1
   local.get $2
   i32.const 1
   i32.add
   i32.shl
   i32.and
   local.tee $1
   if (result i32)
    local.get $0
    local.get $1
    call $~lib/allocator/tlsf/ffs<usize>
    local.tee $1
    local.get $0
    local.get $1
    call $~lib/allocator/tlsf/Root#getSLMap
    local.tee $0
    if (result i32)
     local.get $0
    else     
     i32.const 0
     i32.const 8
     i32.const 323
     i32.const 16
     call $~lib/env/abort
     unreachable
    end
    call $~lib/allocator/tlsf/ffs<usize>
    call $~lib/allocator/tlsf/Root#getHead
   else    
    i32.const 0
   end
  end
 )
 (func $~lib/allocator/tlsf/Root#use (; 19 ;) (type $FUNCSIG$iiii) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  i32.load
  local.tee $3
  i32.const 1
  i32.and
  i32.eqz
  if
   i32.const 0
   i32.const 8
   i32.const 348
   i32.const 4
   call $~lib/env/abort
   unreachable
  end
  local.get $2
  i32.const 16
  i32.ge_u
  local.tee $4
  if (result i32)
   local.get $2
   i32.const 1073741824
   i32.lt_u
  else   
   local.get $4
  end
  i32.eqz
  if
   i32.const 0
   i32.const 8
   i32.const 349
   i32.const 4
   call $~lib/env/abort
   unreachable
  end
  local.get $2
  i32.const 7
  i32.and
  if
   i32.const 0
   i32.const 8
   i32.const 350
   i32.const 4
   call $~lib/env/abort
   unreachable
  end
  local.get $0
  local.get $1
  call $~lib/allocator/tlsf/Root#remove
  local.get $3
  i32.const -4
  i32.and
  local.get $2
  i32.sub
  local.tee $4
  i32.const 24
  i32.ge_u
  if
   local.get $1
   local.get $2
   local.get $3
   i32.const 2
   i32.and
   i32.or
   i32.store
   local.get $1
   i32.const 8
   i32.add
   local.get $2
   i32.add
   local.tee $2
   local.get $4
   i32.const 8
   i32.sub
   i32.const 1
   i32.or
   i32.store
   local.get $0
   local.get $2
   call $~lib/allocator/tlsf/Root#insert
  else   
   local.get $1
   local.get $3
   i32.const -2
   i32.and
   i32.store
   local.get $1
   call $~lib/allocator/tlsf/Block#get:right
   local.tee $0
   i32.eqz
   if
    block
     i32.const 0
     i32.const 8
     i32.const 368
     i32.const 25
     call $~lib/env/abort
     unreachable
     unreachable
    end
    unreachable
    local.tee $0
    unreachable
   end
   local.get $0
   local.get $0
   i32.load
   i32.const -3
   i32.and
   i32.store
  end
  local.get $1
  i32.const 8
  i32.add
 )
 (func $~lib/allocator/tlsf/__memory_allocate (; 20 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  global.get $~lib/allocator/tlsf/ROOT
  local.tee $1
  i32.eqz
  if
   i32.const 184
   local.tee $4
   i32.const 68451
   i32.add
   i32.const -65536
   i32.and
   i32.const 16
   i32.shr_u
   local.tee $2
   current_memory
   local.tee $3
   i32.gt_s
   local.tee $1
   if (result i32)
    local.get $2
    local.get $3
    i32.sub
    grow_memory
    i32.const 0
    i32.lt_s
   else    
    local.get $1
   end
   if
    unreachable
   end
   local.get $4
   local.tee $1
   global.set $~lib/allocator/tlsf/ROOT
   i32.const 0
   call $~lib/allocator/tlsf/Root#set:tailRef
   local.get $1
   i32.const 0
   i32.store
   i32.const 0
   local.set $2
   loop $repeat|0
    block $break|0
     local.get $2
     i32.const 22
     i32.ge_u
     br_if $break|0
     local.get $1
     local.get $2
     i32.const 0
     call $~lib/allocator/tlsf/Root#setSLMap
     i32.const 0
     local.set $3
     loop $repeat|1
      block $break|1
       local.get $3
       i32.const 32
       i32.ge_u
       br_if $break|1
       local.get $1
       local.get $2
       local.get $3
       i32.const 0
       call $~lib/allocator/tlsf/Root#setHead
       local.get $3
       i32.const 1
       i32.add
       local.set $3
       br $repeat|1
      end
     end
     local.get $2
     i32.const 1
     i32.add
     local.set $2
     br $repeat|0
    end
   end
   local.get $1
   local.get $4
   i32.const 2923
   i32.add
   i32.const -8
   i32.and
   current_memory
   i32.const 16
   i32.shl
   call $~lib/allocator/tlsf/Root#addMemory
  end
  local.get $0
  i32.const 1073741824
  i32.gt_u
  if
   unreachable
  end
  block (result i32)
   local.get $1
   local.get $0
   i32.const 7
   i32.add
   i32.const -8
   i32.and
   local.tee $4
   i32.const 16
   local.tee $0
   local.get $4
   local.get $0
   i32.gt_u
   select
   local.tee $5
   call $~lib/allocator/tlsf/Root#search
   local.tee $0
   i32.eqz
   if
    current_memory
    local.tee $2
    local.tee $3
    local.get $5
    i32.const 65535
    i32.add
    i32.const -65536
    i32.and
    i32.const 16
    i32.shr_u
    local.tee $4
    local.tee $0
    local.get $3
    local.get $0
    i32.gt_s
    select
    grow_memory
    i32.const 0
    i32.lt_s
    if
     local.get $4
     grow_memory
     i32.const 0
     i32.lt_s
     if
      unreachable
     end
    end
    local.get $1
    local.get $2
    i32.const 16
    i32.shl
    current_memory
    i32.const 16
    i32.shl
    call $~lib/allocator/tlsf/Root#addMemory
    local.get $1
    local.get $5
    call $~lib/allocator/tlsf/Root#search
    local.tee $0
    if (result i32)
     local.get $0
    else     
     i32.const 0
     i32.const 8
     i32.const 480
     i32.const 12
     call $~lib/env/abort
     unreachable
    end
    local.set $0
   end
   local.get $0
   i32.load
   i32.const -4
   i32.and
   local.get $5
   i32.lt_u
  end
  if
   i32.const 0
   i32.const 8
   i32.const 483
   i32.const 2
   call $~lib/env/abort
   unreachable
  end
  local.get $1
  local.get $0
  local.get $5
  call $~lib/allocator/tlsf/Root#use
 )
 (func $~lib/internal/arraybuffer/allocateUnsafe (; 21 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  i32.const 1073741816
  i32.gt_u
  if
   i32.const 0
   i32.const 120
   i32.const 26
   i32.const 2
   call $~lib/env/abort
   unreachable
  end
  local.get $0
  call $~lib/internal/arraybuffer/computeSize
  call $~lib/allocator/tlsf/__memory_allocate
  local.tee $1
  local.get $0
  i32.store
  local.get $1
 )
 (func $~lib/internal/memory/memset (; 22 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  (local $2 i32)
  local.get $1
  i32.eqz
  if
   return
  end
  local.get $0
  i32.const 0
  i32.store8
  local.get $0
  local.get $1
  i32.add
  i32.const 1
  i32.sub
  i32.const 0
  i32.store8
  local.get $1
  i32.const 2
  i32.le_u
  if
   return
  end
  local.get $0
  i32.const 1
  i32.add
  i32.const 0
  i32.store8
  local.get $0
  i32.const 2
  i32.add
  i32.const 0
  i32.store8
  local.get $0
  local.get $1
  i32.add
  i32.const 2
  i32.sub
  i32.const 0
  i32.store8
  local.get $0
  local.get $1
  i32.add
  i32.const 3
  i32.sub
  i32.const 0
  i32.store8
  local.get $1
  i32.const 6
  i32.le_u
  if
   return
  end
  local.get $0
  i32.const 3
  i32.add
  i32.const 0
  i32.store8
  local.get $0
  local.get $1
  i32.add
  i32.const 4
  i32.sub
  i32.const 0
  i32.store8
  local.get $1
  i32.const 8
  i32.le_u
  if
   return
  end
  i32.const 0
  local.get $0
  i32.sub
  i32.const 3
  i32.and
  local.tee $2
  local.get $0
  i32.add
  local.tee $0
  i32.const 0
  i32.store
  local.get $1
  local.get $2
  i32.sub
  i32.const -4
  i32.and
  local.tee $1
  local.get $0
  i32.add
  i32.const 4
  i32.sub
  i32.const 0
  i32.store
  local.get $1
  i32.const 8
  i32.le_u
  if
   return
  end
  local.get $0
  i32.const 4
  i32.add
  i32.const 0
  i32.store
  local.get $0
  i32.const 8
  i32.add
  i32.const 0
  i32.store
  local.get $0
  local.get $1
  i32.add
  i32.const 12
  i32.sub
  i32.const 0
  i32.store
  local.get $0
  local.get $1
  i32.add
  i32.const 8
  i32.sub
  i32.const 0
  i32.store
  local.get $1
  i32.const 24
  i32.le_u
  if
   return
  end
  local.get $0
  i32.const 12
  i32.add
  i32.const 0
  i32.store
  local.get $0
  i32.const 16
  i32.add
  i32.const 0
  i32.store
  local.get $0
  i32.const 20
  i32.add
  i32.const 0
  i32.store
  local.get $0
  i32.const 24
  i32.add
  i32.const 0
  i32.store
  local.get $0
  local.get $1
  i32.add
  i32.const 28
  i32.sub
  i32.const 0
  i32.store
  local.get $0
  local.get $1
  i32.add
  i32.const 24
  i32.sub
  i32.const 0
  i32.store
  local.get $0
  local.get $1
  i32.add
  i32.const 20
  i32.sub
  i32.const 0
  i32.store
  local.get $0
  local.get $1
  i32.add
  i32.const 16
  i32.sub
  i32.const 0
  i32.store
  local.get $0
  i32.const 4
  i32.and
  i32.const 24
  i32.add
  local.tee $2
  local.get $0
  i32.add
  local.set $0
  local.get $1
  local.get $2
  i32.sub
  local.set $1
  loop $continue|0
   local.get $1
   i32.const 32
   i32.ge_u
   if
    local.get $0
    i64.const 0
    i64.store
    local.get $0
    i32.const 8
    i32.add
    i64.const 0
    i64.store
    local.get $0
    i32.const 16
    i32.add
    i64.const 0
    i64.store
    local.get $0
    i32.const 24
    i32.add
    i64.const 0
    i64.store
    local.get $1
    i32.const 32
    i32.sub
    local.set $1
    local.get $0
    i32.const 32
    i32.add
    local.set $0
    br $continue|0
   end
  end
 )
 (func $~lib/array/Array<i32>#constructor (; 23 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  i32.const 268435454
  i32.gt_u
  if
   i32.const 0
   i32.const 88
   i32.const 45
   i32.const 39
   call $~lib/env/abort
   unreachable
  end
  local.get $0
  i32.const 2
  i32.shl
  local.tee $3
  call $~lib/internal/arraybuffer/allocateUnsafe
  local.set $2
  i32.const 8
  call $~lib/allocator/tlsf/__memory_allocate
  local.tee $1
  i32.const 0
  i32.store
  local.get $1
  i32.const 0
  i32.store offset=4
  local.get $1
  local.get $2
  i32.store
  local.get $1
  local.get $0
  i32.store offset=4
  local.get $2
  i32.const 8
  i32.add
  local.get $3
  call $~lib/internal/memory/memset
  local.get $1
 )
 (func $~lib/math/NativeMath.random (; 24 ;) (type $FUNCSIG$d) (result f64)
  (local $0 i64)
  (local $1 i64)
  global.get $~lib/math/random_seeded
  i32.eqz
  if
   i32.const 0
   i32.const 56
   i32.const 987
   i32.const 24
   call $~lib/env/abort
   unreachable
  end
  global.get $~lib/math/random_state0_64
  local.set $0
  global.get $~lib/math/random_state1_64
  local.tee $1
  global.set $~lib/math/random_state0_64
  local.get $0
  local.get $0
  i64.const 23
  i64.shl
  i64.xor
  local.tee $0
  i64.const 17
  i64.shr_u
  local.get $0
  i64.xor
  local.get $1
  i64.xor
  local.get $1
  i64.const 26
  i64.shr_u
  i64.xor
  local.tee $0
  global.set $~lib/math/random_state1_64
  local.get $0
  local.get $1
  i64.add
  i64.const 4503599627370495
  i64.and
  i64.const 4607182418800017408
  i64.or
  f64.reinterpret_i64
  f64.const 1
  f64.sub
 )
 (func $~lib/internal/memory/memcpy (; 25 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  loop $continue|0
   local.get $1
   i32.const 3
   i32.and
   local.get $2
   local.get $2
   select
   if
    local.get $0
    local.tee $3
    i32.const 1
    i32.add
    local.set $0
    local.get $3
    block (result i32)
     local.get $1
     local.tee $3
     i32.const 1
     i32.add
     local.set $1
     local.get $3
     i32.load8_u
    end
    i32.store8
    local.get $2
    i32.const 1
    i32.sub
    local.set $2
    br $continue|0
   end
  end
  local.get $0
  i32.const 3
  i32.and
  i32.eqz
  if
   loop $continue|1
    local.get $2
    i32.const 16
    i32.ge_u
    if
     local.get $0
     local.get $1
     i32.load
     i32.store
     local.get $0
     i32.const 4
     i32.add
     local.get $1
     i32.const 4
     i32.add
     i32.load
     i32.store
     local.get $0
     i32.const 8
     i32.add
     local.get $1
     i32.const 8
     i32.add
     i32.load
     i32.store
     local.get $0
     i32.const 12
     i32.add
     local.get $1
     i32.const 12
     i32.add
     i32.load
     i32.store
     local.get $1
     i32.const 16
     i32.add
     local.set $1
     local.get $0
     i32.const 16
     i32.add
     local.set $0
     local.get $2
     i32.const 16
     i32.sub
     local.set $2
     br $continue|1
    end
   end
   local.get $2
   i32.const 8
   i32.and
   if
    local.get $0
    local.get $1
    i32.load
    i32.store
    local.get $0
    i32.const 4
    i32.add
    local.get $1
    i32.const 4
    i32.add
    i32.load
    i32.store
    local.get $1
    i32.const 8
    i32.add
    local.set $1
    local.get $0
    i32.const 8
    i32.add
    local.set $0
   end
   local.get $2
   i32.const 4
   i32.and
   if
    local.get $0
    local.get $1
    i32.load
    i32.store
    local.get $1
    i32.const 4
    i32.add
    local.set $1
    local.get $0
    i32.const 4
    i32.add
    local.set $0
   end
   local.get $2
   i32.const 2
   i32.and
   if
    local.get $0
    local.get $1
    i32.load16_u
    i32.store16
    local.get $1
    i32.const 2
    i32.add
    local.set $1
    local.get $0
    i32.const 2
    i32.add
    local.set $0
   end
   local.get $2
   i32.const 1
   i32.and
   if
    local.get $0
    local.get $1
    i32.load8_u
    i32.store8
   end
   return
  end
  local.get $2
  i32.const 32
  i32.ge_u
  if
   block $break|2
    block $case2|2
     block $case1|2
      block $case0|2
       local.get $0
       i32.const 3
       i32.and
       i32.const 1
       i32.sub
       br_table $case0|2 $case1|2 $case2|2 $break|2
      end
      local.get $1
      i32.load
      local.set $4
      local.get $0
      local.get $1
      i32.load8_u
      i32.store8
      local.get $0
      i32.const 1
      i32.add
      local.tee $0
      i32.const 1
      i32.add
      local.set $3
      local.get $0
      block (result i32)
       local.get $1
       i32.const 1
       i32.add
       local.tee $0
       i32.const 1
       i32.add
       local.set $5
       local.get $0
       i32.load8_u
      end
      i32.store8
      local.get $3
      i32.const 1
      i32.add
      local.set $0
      local.get $5
      i32.const 1
      i32.add
      local.set $1
      local.get $3
      local.get $5
      i32.load8_u
      i32.store8
      local.get $2
      i32.const 3
      i32.sub
      local.set $2
      loop $continue|3
       local.get $2
       i32.const 17
       i32.ge_u
       if
        local.get $0
        local.get $1
        i32.const 1
        i32.add
        i32.load
        local.tee $3
        i32.const 8
        i32.shl
        local.get $4
        i32.const 24
        i32.shr_u
        i32.or
        i32.store
        local.get $0
        i32.const 4
        i32.add
        local.get $1
        i32.const 5
        i32.add
        i32.load
        local.tee $4
        i32.const 8
        i32.shl
        local.get $3
        i32.const 24
        i32.shr_u
        i32.or
        i32.store
        local.get $0
        i32.const 8
        i32.add
        local.get $1
        i32.const 9
        i32.add
        i32.load
        local.tee $3
        i32.const 8
        i32.shl
        local.get $4
        i32.const 24
        i32.shr_u
        i32.or
        i32.store
        local.get $0
        i32.const 12
        i32.add
        local.get $1
        i32.const 13
        i32.add
        i32.load
        local.tee $4
        i32.const 8
        i32.shl
        local.get $3
        i32.const 24
        i32.shr_u
        i32.or
        i32.store
        local.get $1
        i32.const 16
        i32.add
        local.set $1
        local.get $0
        i32.const 16
        i32.add
        local.set $0
        local.get $2
        i32.const 16
        i32.sub
        local.set $2
        br $continue|3
       end
      end
      br $break|2
     end
     local.get $1
     i32.load
     local.set $4
     local.get $0
     local.get $1
     i32.load8_u
     i32.store8
     local.get $0
     i32.const 1
     i32.add
     local.tee $3
     i32.const 1
     i32.add
     local.set $0
     local.get $3
     block (result i32)
      local.get $1
      i32.const 1
      i32.add
      local.tee $3
      i32.const 1
      i32.add
      local.set $1
      local.get $3
      i32.load8_u
     end
     i32.store8
     local.get $2
     i32.const 2
     i32.sub
     local.set $2
     loop $continue|4
      local.get $2
      i32.const 18
      i32.ge_u
      if
       local.get $0
       local.get $1
       i32.const 2
       i32.add
       i32.load
       local.tee $3
       i32.const 16
       i32.shl
       local.get $4
       i32.const 16
       i32.shr_u
       i32.or
       i32.store
       local.get $0
       i32.const 4
       i32.add
       local.get $1
       i32.const 6
       i32.add
       i32.load
       local.tee $4
       i32.const 16
       i32.shl
       local.get $3
       i32.const 16
       i32.shr_u
       i32.or
       i32.store
       local.get $0
       i32.const 8
       i32.add
       local.get $1
       i32.const 10
       i32.add
       i32.load
       local.tee $3
       i32.const 16
       i32.shl
       local.get $4
       i32.const 16
       i32.shr_u
       i32.or
       i32.store
       local.get $0
       i32.const 12
       i32.add
       local.get $1
       i32.const 14
       i32.add
       i32.load
       local.tee $4
       i32.const 16
       i32.shl
       local.get $3
       i32.const 16
       i32.shr_u
       i32.or
       i32.store
       local.get $1
       i32.const 16
       i32.add
       local.set $1
       local.get $0
       i32.const 16
       i32.add
       local.set $0
       local.get $2
       i32.const 16
       i32.sub
       local.set $2
       br $continue|4
      end
     end
     br $break|2
    end
    local.get $1
    i32.load
    local.set $4
    local.get $0
    local.tee $3
    i32.const 1
    i32.add
    local.set $0
    local.get $3
    block (result i32)
     local.get $1
     local.tee $3
     i32.const 1
     i32.add
     local.set $1
     local.get $3
     i32.load8_u
    end
    i32.store8
    local.get $2
    i32.const 1
    i32.sub
    local.set $2
    loop $continue|5
     local.get $2
     i32.const 19
     i32.ge_u
     if
      local.get $0
      local.get $1
      i32.const 3
      i32.add
      i32.load
      local.tee $3
      i32.const 24
      i32.shl
      local.get $4
      i32.const 8
      i32.shr_u
      i32.or
      i32.store
      local.get $0
      i32.const 4
      i32.add
      local.get $1
      i32.const 7
      i32.add
      i32.load
      local.tee $4
      i32.const 24
      i32.shl
      local.get $3
      i32.const 8
      i32.shr_u
      i32.or
      i32.store
      local.get $0
      i32.const 8
      i32.add
      local.get $1
      i32.const 11
      i32.add
      i32.load
      local.tee $3
      i32.const 24
      i32.shl
      local.get $4
      i32.const 8
      i32.shr_u
      i32.or
      i32.store
      local.get $0
      i32.const 12
      i32.add
      local.get $1
      i32.const 15
      i32.add
      i32.load
      local.tee $4
      i32.const 24
      i32.shl
      local.get $3
      i32.const 8
      i32.shr_u
      i32.or
      i32.store
      local.get $1
      i32.const 16
      i32.add
      local.set $1
      local.get $0
      i32.const 16
      i32.add
      local.set $0
      local.get $2
      i32.const 16
      i32.sub
      local.set $2
      br $continue|5
     end
    end
   end
  end
  local.get $2
  i32.const 16
  i32.and
  if
   local.get $0
   local.get $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $3
   i32.const 1
   i32.add
   local.set $0
   local.get $3
   block (result i32)
    local.get $1
    i32.const 1
    i32.add
    local.tee $3
    i32.const 1
    i32.add
    local.set $1
    local.get $3
    i32.load8_u
   end
   i32.store8
   local.get $0
   local.get $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $3
   i32.const 1
   i32.add
   local.set $0
   local.get $3
   block (result i32)
    local.get $1
    i32.const 1
    i32.add
    local.tee $3
    i32.const 1
    i32.add
    local.set $1
    local.get $3
    i32.load8_u
   end
   i32.store8
   local.get $0
   local.get $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $3
   i32.const 1
   i32.add
   local.set $0
   local.get $3
   block (result i32)
    local.get $1
    i32.const 1
    i32.add
    local.tee $3
    i32.const 1
    i32.add
    local.set $1
    local.get $3
    i32.load8_u
   end
   i32.store8
   local.get $0
   local.get $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $3
   i32.const 1
   i32.add
   local.set $0
   local.get $3
   block (result i32)
    local.get $1
    i32.const 1
    i32.add
    local.tee $3
    i32.const 1
    i32.add
    local.set $1
    local.get $3
    i32.load8_u
   end
   i32.store8
   local.get $0
   local.get $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $3
   i32.const 1
   i32.add
   local.set $0
   local.get $3
   block (result i32)
    local.get $1
    i32.const 1
    i32.add
    local.tee $3
    i32.const 1
    i32.add
    local.set $1
    local.get $3
    i32.load8_u
   end
   i32.store8
   local.get $0
   local.get $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $3
   i32.const 1
   i32.add
   local.set $0
   local.get $3
   block (result i32)
    local.get $1
    i32.const 1
    i32.add
    local.tee $3
    i32.const 1
    i32.add
    local.set $1
    local.get $3
    i32.load8_u
   end
   i32.store8
   local.get $0
   local.get $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $3
   i32.const 1
   i32.add
   local.set $0
   local.get $3
   block (result i32)
    local.get $1
    i32.const 1
    i32.add
    local.tee $3
    i32.const 1
    i32.add
    local.set $1
    local.get $3
    i32.load8_u
   end
   i32.store8
   local.get $0
   local.get $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $3
   i32.const 1
   i32.add
   local.set $0
   local.get $3
   block (result i32)
    local.get $1
    i32.const 1
    i32.add
    local.tee $3
    i32.const 1
    i32.add
    local.set $1
    local.get $3
    i32.load8_u
   end
   i32.store8
  end
  local.get $2
  i32.const 8
  i32.and
  if
   local.get $0
   local.get $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $3
   i32.const 1
   i32.add
   local.set $0
   local.get $3
   block (result i32)
    local.get $1
    i32.const 1
    i32.add
    local.tee $3
    i32.const 1
    i32.add
    local.set $1
    local.get $3
    i32.load8_u
   end
   i32.store8
   local.get $0
   local.get $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $3
   i32.const 1
   i32.add
   local.set $0
   local.get $3
   block (result i32)
    local.get $1
    i32.const 1
    i32.add
    local.tee $3
    i32.const 1
    i32.add
    local.set $1
    local.get $3
    i32.load8_u
   end
   i32.store8
   local.get $0
   local.get $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $3
   i32.const 1
   i32.add
   local.set $0
   local.get $3
   block (result i32)
    local.get $1
    i32.const 1
    i32.add
    local.tee $3
    i32.const 1
    i32.add
    local.set $1
    local.get $3
    i32.load8_u
   end
   i32.store8
   local.get $0
   local.get $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $3
   i32.const 1
   i32.add
   local.set $0
   local.get $3
   block (result i32)
    local.get $1
    i32.const 1
    i32.add
    local.tee $3
    i32.const 1
    i32.add
    local.set $1
    local.get $3
    i32.load8_u
   end
   i32.store8
  end
  local.get $2
  i32.const 4
  i32.and
  if
   local.get $0
   local.get $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $3
   i32.const 1
   i32.add
   local.set $0
   local.get $3
   block (result i32)
    local.get $1
    i32.const 1
    i32.add
    local.tee $3
    i32.const 1
    i32.add
    local.set $1
    local.get $3
    i32.load8_u
   end
   i32.store8
   local.get $0
   local.get $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $3
   i32.const 1
   i32.add
   local.set $0
   local.get $3
   block (result i32)
    local.get $1
    i32.const 1
    i32.add
    local.tee $3
    i32.const 1
    i32.add
    local.set $1
    local.get $3
    i32.load8_u
   end
   i32.store8
  end
  local.get $2
  i32.const 2
  i32.and
  if
   local.get $0
   local.get $1
   i32.load8_u
   i32.store8
   local.get $0
   i32.const 1
   i32.add
   local.tee $3
   i32.const 1
   i32.add
   local.set $0
   local.get $3
   block (result i32)
    local.get $1
    i32.const 1
    i32.add
    local.tee $3
    i32.const 1
    i32.add
    local.set $1
    local.get $3
    i32.load8_u
   end
   i32.store8
  end
  local.get $2
  i32.const 1
  i32.and
  if
   local.get $0
   local.get $1
   i32.load8_u
   i32.store8
  end
 )
 (func $~lib/internal/memory/memmove (; 26 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  local.get $0
  local.get $1
  i32.eq
  if
   return
  end
  local.get $1
  local.get $2
  i32.add
  local.get $0
  i32.le_u
  local.tee $3
  if (result i32)
   local.get $3
  else   
   local.get $0
   local.get $2
   i32.add
   local.get $1
   i32.le_u
  end
  if
   local.get $0
   local.get $1
   local.get $2
   call $~lib/internal/memory/memcpy
   return
  end
  local.get $0
  local.get $1
  i32.lt_u
  if
   local.get $1
   i32.const 7
   i32.and
   local.get $0
   i32.const 7
   i32.and
   i32.eq
   if
    loop $continue|0
     local.get $0
     i32.const 7
     i32.and
     if
      local.get $2
      i32.eqz
      if
       return
      end
      local.get $2
      i32.const 1
      i32.sub
      local.set $2
      local.get $0
      local.tee $3
      i32.const 1
      i32.add
      local.set $0
      local.get $3
      block (result i32)
       local.get $1
       local.tee $3
       i32.const 1
       i32.add
       local.set $1
       local.get $3
       i32.load8_u
      end
      i32.store8
      br $continue|0
     end
    end
    loop $continue|1
     local.get $2
     i32.const 8
     i32.ge_u
     if
      local.get $0
      local.get $1
      i64.load
      i64.store
      local.get $2
      i32.const 8
      i32.sub
      local.set $2
      local.get $0
      i32.const 8
      i32.add
      local.set $0
      local.get $1
      i32.const 8
      i32.add
      local.set $1
      br $continue|1
     end
    end
   end
   loop $continue|2
    local.get $2
    if
     local.get $0
     local.tee $3
     i32.const 1
     i32.add
     local.set $0
     local.get $3
     block (result i32)
      local.get $1
      local.tee $3
      i32.const 1
      i32.add
      local.set $1
      local.get $3
      i32.load8_u
     end
     i32.store8
     local.get $2
     i32.const 1
     i32.sub
     local.set $2
     br $continue|2
    end
   end
  else   
   local.get $1
   i32.const 7
   i32.and
   local.get $0
   i32.const 7
   i32.and
   i32.eq
   if
    loop $continue|3
     local.get $0
     local.get $2
     i32.add
     i32.const 7
     i32.and
     if
      local.get $2
      i32.eqz
      if
       return
      end
      local.get $0
      local.get $2
      i32.const 1
      i32.sub
      local.tee $2
      i32.add
      local.get $1
      local.get $2
      i32.add
      i32.load8_u
      i32.store8
      br $continue|3
     end
    end
    loop $continue|4
     local.get $2
     i32.const 8
     i32.ge_u
     if
      local.get $2
      i32.const 8
      i32.sub
      local.tee $2
      local.get $0
      i32.add
      local.get $1
      local.get $2
      i32.add
      i64.load
      i64.store
      br $continue|4
     end
    end
   end
   loop $continue|5
    local.get $2
    if
     local.get $0
     local.get $2
     i32.const 1
     i32.sub
     local.tee $2
     i32.add
     local.get $1
     local.get $2
     i32.add
     i32.load8_u
     i32.store8
     br $continue|5
    end
   end
  end
 )
 (func $~lib/allocator/tlsf/__memory_free (; 27 ;) (type $FUNCSIG$vi) (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  if
   global.get $~lib/allocator/tlsf/ROOT
   local.tee $1
   if
    local.get $0
    i32.const 8
    i32.sub
    local.tee $2
    i32.load
    local.tee $3
    i32.const 1
    i32.and
    if
     i32.const 0
     i32.const 8
     i32.const 494
     i32.const 6
     call $~lib/env/abort
     unreachable
    end
    local.get $2
    local.get $3
    i32.const 1
    i32.or
    i32.store
    local.get $1
    local.get $0
    i32.const 8
    i32.sub
    call $~lib/allocator/tlsf/Root#insert
   end
  end
 )
 (func $~lib/internal/arraybuffer/reallocateUnsafe (; 28 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  local.get $0
  i32.load
  local.tee $2
  i32.gt_s
  if
   local.get $1
   i32.const 1073741816
   i32.gt_s
   if
    i32.const 0
    i32.const 120
    i32.const 40
    i32.const 4
    call $~lib/env/abort
    unreachable
   end
   local.get $1
   local.get $2
   call $~lib/internal/arraybuffer/computeSize
   i32.const 8
   i32.sub
   i32.le_s
   if
    local.get $0
    local.get $1
    i32.store
   else    
    local.get $1
    call $~lib/internal/arraybuffer/allocateUnsafe
    local.tee $3
    i32.const 8
    i32.add
    local.get $0
    i32.const 8
    i32.add
    local.get $2
    call $~lib/internal/memory/memmove
    local.get $0
    call $~lib/allocator/tlsf/__memory_free
    local.get $3
    local.set $0
   end
   local.get $0
   i32.const 8
   i32.add
   local.get $2
   i32.add
   local.get $1
   local.get $2
   i32.sub
   call $~lib/internal/memory/memset
  else   
   local.get $1
   local.get $2
   i32.lt_s
   if
    local.get $1
    i32.const 0
    i32.lt_s
    if
     i32.const 0
     i32.const 120
     i32.const 62
     i32.const 4
     call $~lib/env/abort
     unreachable
    end
    local.get $0
    local.get $1
    i32.store
   end
  end
  local.get $0
 )
 (func $~lib/array/Array<i32>#__set (; 29 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  local.get $1
  local.get $0
  i32.load
  local.tee $3
  i32.load
  i32.const 2
  i32.shr_u
  i32.ge_u
  if
   local.get $1
   i32.const 268435454
   i32.ge_u
   if
    i32.const 0
    i32.const 88
    i32.const 107
    i32.const 41
    call $~lib/env/abort
    unreachable
   end
   local.get $0
   local.get $3
   local.get $1
   i32.const 1
   i32.add
   i32.const 2
   i32.shl
   call $~lib/internal/arraybuffer/reallocateUnsafe
   local.tee $3
   i32.store
   local.get $0
   local.get $1
   i32.const 1
   i32.add
   i32.store offset=4
  end
  local.get $1
  i32.const 2
  i32.shl
  local.get $3
  i32.add
  local.get $2
  i32.store offset=8
 )
 (func $assembly/index/instantiateGraph (; 30 ;) (type $FUNCSIG$vi) (param $0 i32)
  local.get $0
  global.set $assembly/index/V
  global.get $assembly/index/V
  global.get $assembly/index/V
  i32.mul
  call $~lib/array/Array<i32>#constructor
  global.set $assembly/index/graph
  i32.const 0
  local.set $0
  loop $repeat|0
   block $break|0
    local.get $0
    global.get $assembly/index/V
    global.get $assembly/index/V
    i32.mul
    i32.ge_s
    br_if $break|0
    global.get $assembly/index/graph
    local.get $0
    call $~lib/math/NativeMath.random
    f64.const 9
    f64.mul
    f64.const 1
    f64.add
    i32.trunc_f64_s
    call $~lib/array/Array<i32>#__set
    local.get $0
    i32.const 1
    i32.add
    local.set $0
    br $repeat|0
   end
  end
 )
 (func $~lib/array/Array<i32>#__get (; 31 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  local.get $1
  local.get $0
  i32.load
  local.tee $0
  i32.load
  i32.const 2
  i32.shr_u
  i32.lt_u
  if (result i32)
   local.get $1
   i32.const 2
   i32.shl
   local.get $0
   i32.add
   i32.load offset=8
  else   
   unreachable
  end
 )
 (func $assembly/index/FWDense (; 32 ;) (type $FUNCSIG$v)
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  block $break|0
   loop $repeat|0
    local.get $2
    global.get $assembly/index/V
    i32.ge_s
    br_if $break|0
    i32.const 0
    local.set $0
    loop $repeat|1
     block $break|1
      local.get $0
      global.get $assembly/index/V
      i32.ge_s
      br_if $break|1
      i32.const 0
      local.set $1
      loop $repeat|2
       block $break|2
        local.get $1
        global.get $assembly/index/V
        i32.ge_s
        br_if $break|2
        global.get $assembly/index/graph
        local.get $0
        global.get $assembly/index/V
        i32.mul
        local.get $2
        i32.add
        call $~lib/array/Array<i32>#__get
        global.get $assembly/index/graph
        local.get $2
        global.get $assembly/index/V
        i32.mul
        local.get $1
        i32.add
        call $~lib/array/Array<i32>#__get
        i32.add
        local.set $3
        global.get $assembly/index/graph
        local.get $0
        global.get $assembly/index/V
        i32.mul
        local.get $1
        i32.add
        call $~lib/array/Array<i32>#__get
        local.get $3
        i32.gt_s
        if
         global.get $assembly/index/graph
         local.get $0
         global.get $assembly/index/V
         i32.mul
         local.get $1
         i32.add
         local.get $3
         call $~lib/array/Array<i32>#__set
        end
        local.get $1
        i32.const 1
        i32.add
        local.set $1
        br $repeat|2
       end
      end
      local.get $0
      i32.const 1
      i32.add
      local.set $0
      br $repeat|1
     end
    end
    local.get $2
    i32.const 1
    i32.add
    local.set $2
    br $repeat|0
    unreachable
   end
   unreachable
  end
 )
 (func $start (; 33 ;) (type $FUNCSIG$v)
  call $~lib/math/NativeMath.seedRandom
 )
 (func $null (; 34 ;) (type $FUNCSIG$v)
  nop
 )
)
