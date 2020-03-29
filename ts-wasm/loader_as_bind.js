const { AsBind } = require("as-bind");
const fs = require("fs");

const importObject = {
  index: {
    log: msg => console.log(msg)
  }
};


const wasm = fs.readFileSync("./dist/build/optimized.wasm");

const asyncTask = async () => {
  const instance = await AsBind.instantiate(wasm, importObject);

  // You can now use your wasm / as-bind instance!
  const response = instance.exports.echoString(
    "Hello World!"
  );
  console.log(response); // AsBind: Hello World!

  const N = 1e7;
  let res_arr = new Float32Array(4*N);
  const a = new Float32Array([Math.random(), Math.random(), Math.random(), Math.random()]);
  const b = new Float32Array([Math.random(), Math.random(), Math.random(), Math.random()]);
  
  tic = process.hrtime();
  res_arr = instance.exports.mult_loop(a, b, res_arr);
  toc = process.hrtime();
  console.log(`Result array is ${res_arr.length} integers long.`);
  console.log(res_arr[Math.floor(Math.random()*res_arr.length)]);
  console.log(`Multiplying two 4-integer vectors via loop in Assemblyscript/WASM took ${diffMicros(tic, toc)} us.`);


};
asyncTask();


function diffSecs(tic, toc) {
  return toc[0] - tic[0];
}

function diffMillis(tic, toc) {
  return diffNanos(tic, toc) / 1e6;
}

function diffMicros(tic, toc) {
  return diffNanos(tic, toc) / 1e3;
}

function diffNanos(tic, toc) {
  return (toc[0] * 1e9 + toc[1]) - (tic[0] * 1e9 + tic[1]);
}