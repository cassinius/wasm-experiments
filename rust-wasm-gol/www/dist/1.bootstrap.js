(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "../pkg/rust_wasm_gol.js":
/*!*******************************!*\
  !*** ../pkg/rust_wasm_gol.js ***!
  \*******************************/
/*! exports provided: greet, Universe, __wbg_log_3d2aa1c9402c1dee, __wbg_random_d45f566bef640e60, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"greet\", function() { return greet; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Universe\", function() { return Universe; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_log_3d2aa1c9402c1dee\", function() { return __wbg_log_3d2aa1c9402c1dee; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_random_d45f566bef640e60\", function() { return __wbg_random_d45f566bef640e60; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _rust_wasm_gol_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rust_wasm_gol_bg.wasm */ \"../pkg/rust_wasm_gol_bg.wasm\");\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? __webpack_require__(/*! util */ \"./node_modules/util/util.js\").TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _rust_wasm_gol_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_rust_wasm_gol_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? __webpack_require__(/*! util */ \"./node_modules/util/util.js\").TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n/**\n* @param {string} name\n*/\nfunction greet(name) {\n    var ptr0 = passStringToWasm0(name, _rust_wasm_gol_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _rust_wasm_gol_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n    var len0 = WASM_VECTOR_LEN;\n    _rust_wasm_gol_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"greet\"](ptr0, len0);\n}\n\nfunction notDefined(what) { return () => { throw new Error(`${what} is not defined`); }; }\n/**\n*/\nclass Universe {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Universe.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _rust_wasm_gol_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_universe_free\"](ptr);\n    }\n    /**\n    * Getters\n    * @returns {number}\n    */\n    width() {\n        var ret = _rust_wasm_gol_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_width\"](this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    height() {\n        var ret = _rust_wasm_gol_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_height\"](this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    cells() {\n        var ret = _rust_wasm_gol_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_cells\"](this.ptr);\n        return ret;\n    }\n    /**\n    * Setters\n    * @param {number} width\n    */\n    set_width(width) {\n        _rust_wasm_gol_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_set_width\"](this.ptr, width);\n    }\n    /**\n    * @param {number} height\n    */\n    set_height(height) {\n        _rust_wasm_gol_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_set_height\"](this.ptr, height);\n    }\n    /**\n    * @returns {Universe}\n    */\n    static new() {\n        var ret = _rust_wasm_gol_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_new\"]();\n        return Universe.__wrap(ret);\n    }\n    /**\n    */\n    tick() {\n        _rust_wasm_gol_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_tick\"](this.ptr);\n    }\n}\n\nconst __wbg_log_3d2aa1c9402c1dee = function(arg0, arg1) {\n    console.log(getStringFromWasm0(arg0, arg1));\n};\n\nconst __wbg_random_d45f566bef640e60 = typeof Math.random == 'function' ? Math.random : notDefined('Math.random');\n\nconst __wbindgen_throw = function(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n\n//# sourceURL=webpack:///../pkg/rust_wasm_gol.js?");

/***/ }),

/***/ "../pkg/rust_wasm_gol_bg.wasm":
/*!************************************!*\
  !*** ../pkg/rust_wasm_gol_bg.wasm ***!
  \************************************/
/*! exports provided: memory, __wbg_universe_free, universe_width, universe_height, universe_cells, universe_set_width, universe_set_height, universe_new, universe_tick, greet, __wbindgen_malloc, __wbindgen_realloc */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./rust_wasm_gol.js */ \"../pkg/rust_wasm_gol.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/rust_wasm_gol_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var rust_wasm_gol_rust_wasm_gol_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rust-wasm-gol/rust_wasm_gol_bg */ \"../pkg/rust_wasm_gol_bg.wasm\");\n/* harmony import */ var rust_wasm_gol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rust-wasm-gol */ \"../pkg/rust_wasm_gol.js\");\n// Import the WebAssembly memory at the top of the file.\n\n\n\nObject(rust_wasm_gol__WEBPACK_IMPORTED_MODULE_1__[\"greet\"])(\"Bernie\");\n\nconst CELL_SIZE = 5; // px\nconst GRID_COLOR = \"#111111\";\nconst DEAD_COLOR = \"#111111\";\nconst ALIVE_COLOR = \"#33ff54\";\n\n// Construct the universe, and get its width and height.\nconst universe = rust_wasm_gol__WEBPACK_IMPORTED_MODULE_1__[\"Universe\"].new();\nconst width = universe.width();\nconst height = universe.height();\n\n// Give the canvas room for all of our cells and a 1px border\n// around each of them.\nconst canvas = document.getElementById(\"game-of-life-canvas\");\ncanvas.height = (CELL_SIZE + 1) * height + 1;\ncanvas.width = (CELL_SIZE + 1) * width + 1;\n\nconst ctx = canvas.getContext('2d');\n\n/**\n * (CELL_SIZE + 1) + 1 ??\n */\nconst drawGrid = () => {\n\tctx.beginPath();\n\tctx.strokeStyle = GRID_COLOR;\n\t// Vertical lines.\n\tfor (let i = 0; i <= width; i++) {\n\t\tctx.moveTo(i * (CELL_SIZE + 1) + 1, 0);\n\t\tctx.lineTo(i * (CELL_SIZE + 1) + 1, (CELL_SIZE + 1) * height + 1);\n\t}\n\t// Horizontal lines.\n\tfor (let j = 0; j <= height; j++) {\n\t\tctx.moveTo(0,                           j * (CELL_SIZE + 1) + 1);\n\t\tctx.lineTo((CELL_SIZE + 1) * width + 1, j * (CELL_SIZE + 1) + 1);\n\t}\n\tctx.stroke();\n};\n\n\nconst getIndex = (row, column) => {\n\treturn row * width + column;\n};\n\nconst drawCells = () => {\n\tconst cellsPtr = universe.cells();\n\tconst cells = new Uint8Array(rust_wasm_gol_rust_wasm_gol_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer, cellsPtr, width * height / 8);\n\n\tctx.beginPath();\n\n\tfor (let row = 0; row < height; row++) {\n\t\tfor (let col = 0; col < width; col++) {\n\t\t\tconst idx = getIndex(row, col);\n\n\t\t\tctx.fillStyle = bitIsSet(idx, cells)\n\t\t\t\t? ALIVE_COLOR\n\t\t\t\t: DEAD_COLOR;\n\n\t\t\tctx.fillRect(\n\t\t\t\tcol * (CELL_SIZE + 1) + 1,\n\t\t\t\trow * (CELL_SIZE + 1) + 1,\n\t\t\t\tCELL_SIZE,\n\t\t\t\tCELL_SIZE\n\t\t\t);\n\t\t}\n\t}\n\n\tctx.stroke();\n};\n\n\nconst bitIsSet = (n, arr) => {\n\tconst byte = Math.floor(n / 8);\n\tconst mask = 1 << (n % 8);\n\treturn (arr[byte] & mask) === mask;\n};\n\n\ndrawAndRegister = () => {\n\tdrawGrid();\n\tdrawCells();\n\trender_loop = requestAnimationFrame(renderLoop);\n};\nconst renderLoop = () => {\n\tuniverse.tick();\n\tdrawAndRegister();\n};\ndrawAndRegister();\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

}]);