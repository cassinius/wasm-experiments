"use strict";/*Compiled using Cheerp (R) by Leaning Technologies Ltd*/var ax=Math.imul;var ay=Math.fround;var oSlot=0;var nullArray=[null];var nullObj={d:nullArray,o:0};function fetchBuffer(p) {var bytes = null;if (typeof window === 'undefined' && typeof self === 'undefined' && typeof require === 'undefined') {bytes = new Promise( (resolve, reject) => {resolve(read(p,'binary'));});} else if (typeof window === 'undefined' && typeof self === 'undefined') {var fs = require('fs');var path = require('path');p = path.join(__dirname, p);bytes = new Promise( (resolve, reject) => {fs.readFile(p, function(error, data) {if(error) reject(error);else resolve(data);});});} else {bytes = fetch(p).then(response => response.arrayBuffer());}return bytes;}function ae(h){var f=-0.;f=+h.keyCode;if(f===37){c[262146]=(c[262146]|0)-15|0;}else{f=+h.keyCode;if(f===39){c[262146]=(c[262146]|0)+15|0;}}}function y(v,p,k,j,h){var au=null,f=null,at=null,as=null,K=null,J=null,I=null,H=null,G=null;au=l;f="";at="rgb(";as=String(h&255);K=",";J=String(h>>>8&255);I=",";H=String(h>>>16&255);G=")";f=f.concat(at,as,K,J,I,H,G);f=String(f);au.fillStyle=f;l.fillRect((+(v|0)),(+(p|0)),(+(k|0)),(+(j|0)));}function ac(){var h=null,f=null;h=l;f="24px sans-serif";h.font=f;h=l;f="rgb(255,255,255)";h.fillStyle=f;h=l;f="You lost!";h.fillText(f,0,(+((F|0)-24|0)));}function aa(){var f=null,h=null;al=400;F=400;f="pongcanvas";f=document.getElementById(f);f=f;o=f;f.width=400;o.height=400;f=document.body;h=o;f.appendChild(h);f=o;h="2d";f=f.getContext(h);l=f;f=A;+requestAnimationFrame(f);f="keydown";h=ae;document.addEventListener(f,h);}function A(){var f=null;ad();f=A;+requestAnimationFrame(f);}function r(h,f){var k=null,j=null,K=null,J=null,I=null,H=null,G=null,v=null,p=null;k=l;j="";K="rgb(";J=String(255);I=",";H=String(255);G=",";v=String(255);p=")";j=j.concat(K,J,I,H,G,v,p);j=String(j);k.fillStyle=j;l.beginPath();k=l;k.arc((+(h|0)),(+(f|0)),5,0,6.2831853071795862);l.fill();}function i(f,g){var j=0,k=0,h=null,p=null;h=String();j=f[g]|0;if((j&255)===0){h=String(h);return h;}else{k=0;}while(1){p=String.fromCharCode(j<<24>>24);h=h.concat(p);k=k+1|0;j=f[g+k|0]|0;if((j&255)!==0){continue;}break;}h=String(h);return h;}var al;var F;var o;var l;var a=null;var b=null;var c=null;var d=null;var e=null;var __asm=null;var __heap=null;function _asm_r(h,f){r(h,f);}function _asm_y(v,p,k,j,h){y(v,p,k,j,h);}function ad(){__asm.ad();}function aU(){throw new Error('this should be unreachable');};fetchBuffer('pong.wasm').then(r=>WebAssembly.instantiate(r,{i:{ac:ac,r:_asm_r,y:_asm_y,aa:aa,}}),console.log).then(r=>{var i=r.instance;a=new Uint8Array(i.exports.aV.buffer);b=new Uint16Array(i.exports.aV.buffer);c=new Int32Array(i.exports.aV.buffer);d=new Float32Array(i.exports.aV.buffer);e=new Float64Array(i.exports.aV.buffer);__asm=i.exports;__heap=i.exports.aV.buffer;i.exports.ab();},console.log,console.log);