import {wasm} from './loader';

console.log('Sum', wasm.add(3, 5));

export {wasm}
