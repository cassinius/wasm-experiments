a = new Uint32Array([111, 111, 111, 111]);
b = new Uint32Array([42, 42, 42, 42]);

const N = 1e5;
const res_arr = [];

let tic = Date.now();
let tic_ns = process.hrtime()[1];

c = new Uint32Array(4);
for ( let n = 0; n < N; ++n ) {
  for ( let i = 0; i < 4; ++i ) {
    c[i] = a[i] * b[i];
  }
  res_arr.push(c);
}

let toc = Date.now();
let toc_ns = process.hrtime()[1];

console.log(`1e4 mults on d4 vecs took ${(toc_ns-tic_ns)/1e3} micros.`);
console.log(`Comparison in millis: ${toc-tic}`);

console.log(res_arr[Math.floor(Math.random()*N)]);