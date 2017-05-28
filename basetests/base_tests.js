"use strict"

function fib(n) {
  if(n == 0)
    return 0;
  else if(n == 1)
    return 1;
  else
    return fib(n - 1) + fib(n - 2);
}


function fillModArray(n) {
  let modArray = new Uint8Array(n);

  for ( let i = 0; i < n; ++i ) {
    modArray[i] = Math.random()*Number.MAX_SAFE_INTEGER % 100;
  }
}


function compareTypes(n) {
  let a, b, i;

  for ( i = 0; i < n; ++i ) {
    a = Math.random()*Number.MAX_SAFE_INTEGER;
    b = Math.random()*Number.MAX_SAFE_INTEGER;

    a = a > b ? a : b;
  }
}


function pushToArray(n) {
  let arr = [];

  for ( let i = 0; i < n; ++i ) {
    if ( Math.random() > 0.5 ) {
      arr.push(i);
    }
  }
}


(function main() {
  
  let fib_n = 40;
  let arr_n = 1E6;
  let comparisons = 1E8;
  let pushUps = 1E8;
  
  let t1 = +new Date;
  
  fillModArray(arr_n);
  
  let t2 = +new Date;
  
  console.log(`Filling array of length ${arr_n} took ${t2-t1} ms.`);
  
  let fib_res = fib(40);
  
  let t3 = +new Date;
  
  console.log(`Fibonacci of ${fib_n} is: ${fib_res} and took ${t3-t2} ms.`);

  compareTypes(comparisons);

  let t4 = +new Date;
  
  console.log(`One hundred million integer comparisons took ${t4-t3} ms.`);

  // pushToArray(pushUps);

  // let t5 = +new Date;
  
  // console.log(`One hundred million integer array pushes took ${t5-t4} ms.`);

  return 0;
})();
