"use strict";/*Compiled using Cheerp (R) by Leaning Technologies Ltd*/
var a7 = Math.imul;
var a8 = Math.fround;
var oSlot = 0;
var nullArray = [null];
var nullObj = {d: nullArray, o: 0};

function fetchBuffer(p) {
	var bytes = null;
	if (typeof window === 'undefined' && typeof self === 'undefined' && typeof require === 'undefined') {
		bytes = new Promise((resolve, reject) => {
			resolve(read(p, 'binary'));
		});
	} else if (typeof window === 'undefined' && typeof self === 'undefined') {
		var fs = require('fs');
		var path = require('path');
		p = path.join(__dirname, p);
		bytes = new Promise((resolve, reject) => {
			fs.readFile(p, function (error, data) {
				if (error) reject(error); else resolve(data);
			});
		});
	} else {
		bytes = fetch(p).then(response => response.arrayBuffer());
	}
	return bytes;
}

function aJ() {
	var f = null, g = null, i = null, h = 0;
	f = aB();
	g = String(f);
	console.log(g);
	g = document.body;
	i = String(f);
	g.textContent = i;
	h = f.length;
	return h | 0;
}

function aE() {
	var f = null, g = null;
	f = String();
	g = String.fromCharCode(72);
	f = f.concat(g);
	g = String.fromCharCode(101);
	f = f.concat(g);
	g = String.fromCharCode(108);
	f = f.concat(g);
	g = String.fromCharCode(108);
	f = f.concat(g);
	g = String.fromCharCode(111);
	f = f.concat(g);
	g = String.fromCharCode(32);
	f = f.concat(g);
	g = String.fromCharCode(87);
	f = f.concat(g);
	g = String.fromCharCode(65);
	f = f.concat(g);
	g = String.fromCharCode(83);
	f = f.concat(g);
	g = String.fromCharCode(77);
	f = f.concat(g);
	g = String.fromCharCode(33);
	f = f.concat(g);
	return f;
}

function aB() {
	var f = null;
	f = aE();
	f = String(f);
	return f;
}

function Z() {
	throw new Error("Abort called");
}

function av(i, j, h) {
	var f = null, g = 0;
	f = au(i, j, h);
	g = h - 1 | 0;
	if ((i[j + g | 0] & 255) === 10) {
		f = f.substr(0, g);
		f = String(f);
		console.log(f);
		return;
	}
	f = String(f);
	console.log(f);
}

function au(s, t, p) {
	var f = 0, h = null, g = 0, n = null, o = 0, l = 0, m = 0, i = null;
	h = String();
	o = t;
	n = s;
	g = p;
	L1:while (1) {
		while (1) {
			if ((g | 0) !== 0) {
				l = n[o] | 0;
				if ((l & 255) !== 0) {
					m = l & 255;
					if (l << 24 > -16777216) {
						f = m;
					} else {
						if ((l & 255) < 192) {
							f = m & 63 | f << 6;
						} else {
							if ((l & 255) < 224) {
								f = m & 31;
							} else {
								if ((l & 255) < 240) {
									f = m & 15;
								} else {
									f = m & 7;
								}
							}
						}
					}
					g = g - 1 | 0;
					if ((g | 0) === 0) {
						g = 0;
					} else {
						if ((n[o + 1 | 0] & 192) === 128) {
							o = o + 1 | 0;
							n = n;
							continue;
						}
					}
					if (f >>> 0 < 65536) {
						i = String.fromCharCode(f);
						i = String(i);
						h = h.concat(i);
						o = o + 1 | 0;
						n = n;
						continue L1;
					}
					f = f - 65536 | 0;
					i = String.fromCharCode((f >>> 10) + 55296 | 0);
					i = String(i);
					h = h.concat(i);
					i = String.fromCharCode((f & 1023) + 56320 | 0);
					i = String(i);
					h = h.concat(i);
					o = o + 1 | 0;
					n = n;
					continue L1;
				}
			}
			break;
		}
		break;
	}
	return h;
}

function br(bytes) {
	var pages = (bytes + 65535) >> 16;
	try {
		__asm.bt.grow(pages);
		a = new Uint8Array(__asm.bt.buffer);
		b = new Uint16Array(__asm.bt.buffer);
		c = new Int32Array(__asm.bt.buffer);
		d = new Float32Array(__asm.bt.buffer);
		e = new Float64Array(__asm.bt.buffer);
		return pages << 16;
	} catch (e) {
		return -1;
	}
}

var a = null;
var b = null;
var c = null;
var d = null;
var e = null;
var __asm = null;
var __heap = null;

function _asm_av(i, h) {
	av(a, i, h);
}

function bs() {
	throw new Error('this should be unreachable');
};fetchBuffer('output.wasm').then(r => WebAssembly.instantiate(r, {
	i: {
		av: _asm_av,
		Z: Z,
		aJ: aJ,
		br: br,
	}
}), console.log).then(r => {
	var i = r.instance;
	a = new Uint8Array(i.exports.bt.buffer);
	b = new Uint16Array(i.exports.bt.buffer);
	c = new Int32Array(i.exports.bt.buffer);
	d = new Float32Array(i.exports.bt.buffer);
	e = new Float64Array(i.exports.bt.buffer);
	__asm = i.exports;
	__heap = i.exports.bt.buffer;
	i.exports.aF();
}, console.log, console.log);