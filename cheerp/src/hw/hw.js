"use strict";/*Compiled using Cheerp (R) by Leaning Technologies Ltd*/
var m = Math.imul;
var n = Math.fround;
var oSlot = 0;
var nullArray = [null];
var nullObj = {d: nullArray, o: 0};

function k() {
	var a = null;
	a = f();
	console.log(a);
}

function f() {
	var c = 0, b = 0, a = null, l = null;
	a = String();
	b = 0;
	c = 72;
	while (1) {
		l = String.fromCharCode(c << 24 >> 24);
		a = a.concat(l);
		b = b + 1 | 0;
		c = h[0 + b | 0] | 0;
		if ((c & 255) !== 0) {
			continue;
		}
		break;
	}
	a = String(a);
	return a;
}

var h = new Uint8Array([72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 32, 87, 105, 100, 101, 32, 87, 101, 98, 33, 0]);
k();

