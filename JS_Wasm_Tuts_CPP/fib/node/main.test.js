const Module = require('../web/gen/hello.js');
const Fib = require('./main');

console.log(Module);
console.log(Fib);

function functionExists(f) {
  return !!(f && typeof f === "function");
}

function isNumber(n) {
  return typeof n === "number";
}


describe('WASM module loading tests - ', () => {

  test('function bindings', () => {
    Module.onRuntimeInitialized = function() {
      expect(functionExists(Module._new_fib)).toBe(true);
      expect(functionExists(Module._next_val)).toBe(true);
    }
  });

  test('next_val returns int', () => {
    Module.onRuntimeInitialized = function() {
      expect(isNumber(new Fib().next())).toBe(true);
    }
  });

});
