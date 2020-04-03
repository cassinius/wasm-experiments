import * as wasm from './rust_wasm_gol_bg.wasm';

const lTextDecoder = typeof TextDecoder === 'undefined' ? require('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

function notDefined(what) { return () => { throw new Error(`${what} is not defined`); }; }
/**
* Has logical cells (*_l) & physical ones (*_p)
* Logical are the cells you see from the outside
* Physical is the data-structure to compute them efficiently
*/
export class Universe {

    static __wrap(ptr) {
        const obj = Object.create(Universe.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_universe_free(ptr);
    }
    /**
    * Constructor
    * @param {number | undefined} width
    * @param {number | undefined} height
    * @returns {Universe}
    */
    static new(width, height) {
        var ret = wasm.universe_new(!isLikeNone(width), isLikeNone(width) ? 0 : width, !isLikeNone(height), isLikeNone(height) ? 0 : height);
        return Universe.__wrap(ret);
    }
    /**
    * Getters
    * @returns {number}
    */
    width() {
        var ret = wasm.universe_width(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number}
    */
    height() {
        var ret = wasm.universe_height(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number}
    */
    cells() {
        var ret = wasm.universe_cells(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    cells_from_p() {
        var ret = wasm.universe_cells_from_p(this.ptr);
        return ret;
    }
    /**
    * Setters
    * @param {number} width
    */
    set_width(width) {
        wasm.universe_set_width(this.ptr, width);
    }
    /**
    * @param {number} height
    */
    set_height(height) {
        wasm.universe_set_height(this.ptr, height);
    }
    /**
    * Resets one / all cells to some state.
    * @param {number} row
    * @param {number} column
    */
    toggle_cell(row, column) {
        wasm.universe_toggle_cell(this.ptr, row, column);
    }
    /**
    */
    reset_cells() {
        wasm.universe_reset_cells(this.ptr);
    }
    /**
    */
    randomize_cells() {
        wasm.universe_randomize_cells(this.ptr);
    }
    /**
    * Universe evolution
    * @param {number} nr_ticks
    */
    ticks(nr_ticks) {
        wasm.universe_ticks(this.ptr, nr_ticks);
    }
}

export const __wbg_time_246498b6a24402b6 = function(arg0, arg1) {
    console.time(getStringFromWasm0(arg0, arg1));
};

export const __wbg_timeEnd_dc6f656e450c9027 = function(arg0, arg1) {
    console.timeEnd(getStringFromWasm0(arg0, arg1));
};

export const __wbg_random_d45f566bef640e60 = typeof Math.random == 'function' ? Math.random : notDefined('Math.random');

export const __wbindgen_throw = function(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

