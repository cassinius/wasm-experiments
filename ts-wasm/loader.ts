import * as fs from 'fs';

const compiled = new WebAssembly.Module(fs.readFileSync(__dirname + "/build/optimized.wasm"));
const imports = {
  env: {
    abort(_msg: any, _file: any, line: any, column: any) {
      console.error("abort called at index.ts:" + line + ":" + column);
    },
    memory: new WebAssembly.Memory({ initial: 256 }),
    table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
  },
  index: {
    log(_msg: string) {
      console.log(_msg);
    }
  },
  Date: {
    now() {
      // console.log('bla');
      return Date.now();
    }
  }
};

export const wasm: any = new WebAssembly.Instance(compiled, imports).exports;
