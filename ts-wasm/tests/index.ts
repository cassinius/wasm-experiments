import * as fs from 'fs';
import * as path from 'path';
import {strict as assert} from 'assert';
import {wasm} from '../loader'

// path.join(__dirname, '../dist');

assert.equal(wasm.add(1, 2), 3);
console.log("OK");

