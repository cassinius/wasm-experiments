const a = new Uint32Array([111, 111, 111, 111]);
const b = new Uint32Array([42, 42, 42, 42]);

const N = 5e4;
const res_arr = new Uint32Array(N*4);
const c = new Uint32Array(4);


let tic = Date.now();
let tic_ns = process.hrtime()[1];

for ( let n = 0; n < N; ++n ) {
  for ( let i = 0; i < 4; ++i ) {
    res_arr[n*4+i] = a[i] * b[i];
  }  
}

let toc = Date.now();
let toc_ns = process.hrtime()[1];

console.log(`1e4 mults on d4 vecs took ${(toc_ns-tic_ns)/1e3} micros.`);
console.log(`Comparison in millis: ${toc-tic}`);

console.log(res_arr[Math.floor(Math.random()*N)]);
