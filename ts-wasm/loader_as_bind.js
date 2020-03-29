const { AsBind } = require("as-bind");
const fs = require("fs");

const importObject = {
  index: {
    log: msg => console.log(msg)
  }
};

const N = 1e7;


const wasm = fs.readFileSync("./dist/build/optimized.wasm");

const asyncTask = async () => {
  const instance = await AsBind.instantiate(wasm, importObject);

  // You can now use your wasm / as-bind instance!
  const response = instance.exports.echoString(
    "Hello World!"
  );
  console.log(response); // AsBind: Hello World!

	test_u32_mult(instance.exports.mult_loop_u32);
  test_f32_mult(instance.exports.mult_loop_f32);

};
asyncTask();


function test_u32_mult(mult_loop_u32) {
  let u32_res_arr = new Uint32Array(4*N);
  const u32_a = new Uint32Array([randU32(), randU32(), randU32(), randU32()]);
  const u32_b = new Uint32Array([randU32(), randU32(), randU32(), randU32()]);
  tic = process.hrtime();
  u32_res_arr = mult_loop_u32(u32_a, u32_b, u32_res_arr);
  toc = process.hrtime();
  console.log(`Result array is ${u32_res_arr.length} integers long.`);
  console.log(u32_res_arr[Math.floor(Math.random()*u32_res_arr.length)]);
  console.log(`Multiplying ${N} 4-d vectors via loop in Assemblyscript/WASM took ${diffMicros(tic, toc)} us.`);
}


function test_f32_mult(mult_loop_f32) {
  let f32_res_arr = new Float32Array(4*N);
  const f32_a = new Float32Array([randF32(), randF32(), randF32(), randF32()]);
  const f32_b = new Float32Array([randF32(), randF32(), randF32(), randF32()]);
  tic = process.hrtime();
  f32_res_arr = mult_loop_f32(f32_a, f32_b, f32_res_arr);
  toc = process.hrtime();
  console.log(`Result array is ${f32_res_arr.length} integers long.`);
  console.log(f32_res_arr[Math.floor(Math.random()*f32_res_arr.length)]);
  console.log(`Multiplying ${N} 4-d vectors via loop in Assemblyscript/WASM took ${diffMicros(tic, toc)} us.`);
}

function randF32() {
	return Math.random();
}

function randU32() {
	return Math.floor(Math.random()*10);
}

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
