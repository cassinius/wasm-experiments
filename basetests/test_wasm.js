
function runEmscriptenModule(Module, unwasmed_) {
  var unwasmed = unwasmed_;
  arguments = undefined; // emscripten shell code looks at arguments, which it uses as commandline args

var e;
e || (e = eval("(function() { try { return Module || {} } catch(e) { return {} } })()"));
var aa = {}, l;
for (l in e) {
  e.hasOwnProperty(l) && (aa[l] = e[l]);
}
var ba = "object" === typeof window, ca = "function" === typeof importScripts, m = "object" === typeof process && "function" === typeof require && !ba && !ca, da = !ba && !m && !ca;
if (m) {
  e.print || (e.print = function(a) {
    process.stdout.write(a + "\n");
  });
  e.printErr || (e.printErr = function(a) {
    process.stderr.write(a + "\n");
  });
  var ea = require("fs"), fa = require("path");
  e.read = function(a, b) {
    a = fa.normalize(a);
    var c = ea.readFileSync(a);
    c || a == fa.resolve(a) || (a = path.join(__dirname, "..", "src", a), c = ea.readFileSync(a));
    c && !b && (c = c.toString());
    return c;
  };
  e.readBinary = function(a) {
    a = e.read(a, !0);
    a.buffer || (a = new Uint8Array(a));
    assert(a.buffer);
    return a;
  };
  e.load = function(a) {
    ga(read(a));
  };
  e.thisProgram || (e.thisProgram = 1 < process.argv.length ? process.argv[1].replace(/\\/g, "/") : "unknown-program");
  e.arguments = process.argv.slice(2);
  "undefined" !== typeof module && (module.exports = e);
  process.on("uncaughtException", function(a) {
    if (!(a instanceof ha)) {
      throw a;
    }
  });
  e.inspect = function() {
    return "[Emscripten Module object]";
  };
} else {
  if (da) {
    e.print || (e.print = print), "undefined" != typeof printErr && (e.printErr = printErr), e.read = "undefined" != typeof read ? read : function() {
      throw "no read() available (jsc?)";
    }, e.readBinary = function(a) {
      if ("function" === typeof readbuffer) {
        return new Uint8Array(readbuffer(a));
      }
      a = read(a, "binary");
      assert("object" === typeof a);
      return a;
    }, "undefined" != typeof scriptArgs ? e.arguments = scriptArgs : "undefined" != typeof arguments && (e.arguments = arguments), eval("if (typeof gc === 'function' && gc.toString().indexOf('[native code]') > 0) var gc = undefined");
  } else {
    if (ba || ca) {
      e.read = function(a) {
        var b = new XMLHttpRequest;
        b.open("GET", a, !1);
        b.send(null);
        return b.responseText;
      }, "undefined" != typeof arguments && (e.arguments = arguments), "undefined" !== typeof console ? (e.print || (e.print = function(a) {
        console.log(a);
      }), e.printErr || (e.printErr = function(a) {
        console.log(a);
      })) : e.print || (e.print = function() {
      }), ca && (e.load = importScripts), "undefined" === typeof e.setWindowTitle && (e.setWindowTitle = function(a) {
        document.title = a;
      });
    } else {
      throw "Unknown runtime environment. Where are we?";
    }
  }
}
function ga(a) {
  eval.call(null, a);
}
!e.load && e.read && (e.load = function(a) {
  ga(e.read(a));
});
e.print || (e.print = function() {
});
e.printErr || (e.printErr = e.print);
e.arguments || (e.arguments = []);
e.thisProgram || (e.thisProgram = "./this.program");
e.print = e.print;
e.aa = e.printErr;
e.preRun = [];
e.postRun = [];
for (l in aa) {
  aa.hasOwnProperty(l) && (e[l] = aa[l]);
}
var r = {Ab:function(a) {
  ia = a;
}, nb:function() {
  return ia;
}, Ba:function() {
  return p;
}, ja:function(a) {
  p = a;
}, Sa:function(a) {
  switch(a) {
    case "i1":
    ;
    case "i8":
      return 1;
    case "i16":
      return 2;
    case "i32":
      return 4;
    case "i64":
      return 8;
    case "float":
      return 4;
    case "double":
      return 8;
    default:
      return "*" === a[a.length - 1] ? r.L : "i" === a[0] ? (a = parseInt(a.substr(1)), assert(0 === a % 8), a / 8) : 0;
  }
}, mb:function(a) {
  return Math.max(r.Sa(a), r.L);
}, Hd:16, ce:function(a, b) {
  "double" === b || "i64" === b ? a & 7 && (assert(4 === (a & 7)), a += 4) : assert(0 === (a & 3));
  return a;
}, Rd:function(a, b, c) {
  return c || "i64" != a && "double" != a ? a ? Math.min(b || (a ? r.mb(a) : 0), r.L) : Math.min(b, 8) : 8;
}, N:function(a, b, c) {
  return c && c.length ? (c.splice || (c = Array.prototype.slice.call(c)), c.splice(0, 0, b), e["dynCall_" + a].apply(null, c)) : e["dynCall_" + a].call(null, b);
}, ga:[], gb:function(a) {
  for (var b = 0;b < r.ga.length;b++) {
    if (!r.ga[b]) {
      return r.ga[b] = a, 2 * (1 + b);
    }
  }
  throw "Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS.";
}, wb:function(a) {
  r.ga[(a - 2) / 2] = null;
}, V:function(a) {
  r.V.Aa || (r.V.Aa = {});
  r.V.Aa[a] || (r.V.Aa[a] = 1, e.aa(a));
}, sa:{}, Ud:function(a, b) {
  assert(b);
  r.sa[b] || (r.sa[b] = {});
  var c = r.sa[b];
  c[a] || (c[a] = function() {
    return r.N(b, a, arguments);
  });
  return c[a];
}, Sd:function() {
  throw "You must build with -s RETAIN_COMPILER_SETTINGS=1 for Runtime.getCompilerSetting or emscripten_get_compiler_setting to work";
}, ia:function(a) {
  var b = p;
  p = p + a | 0;
  p = p + 15 & -16;
  return b;
}, $a:function(a) {
  var b = ja;
  ja = ja + a | 0;
  ja = ja + 15 & -16;
  return b;
}, Q:function(a) {
  var b = w;
  w = w + a | 0;
  w = w + 15 & -16;
  if (a = w >= ka) {
    x("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value " + ka + ", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which adjusts the size at runtime but prevents some optimizations, (3) set Module.TOTAL_MEMORY to a higher value before the program runs, or if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 "), a = !0;
  }
  return a ? (w = b, 0) : b;
}, pa:function(a, b) {
  return Math.ceil(a / (b ? b : 16)) * (b ? b : 16);
}, $d:function(a, b, c) {
  return c ? +(a >>> 0) + 4294967296 * +(b >>> 0) : +(a >>> 0) + 4294967296 * +(b | 0);
}, Ha:8, L:4, Id:0};
e.Runtime = r;
r.addFunction = r.gb;
r.removeFunction = r.wb;
var y = !1, la, ma, ia;
function assert(a, b) {
  a || x("Assertion failed: " + b);
}
function na(a) {
  var b = e["_" + a];
  if (!b) {
    try {
      b = eval("_" + a);
    } catch (c) {
    }
  }
  assert(b, "Cannot call unknown function " + a + " (perhaps LLVM optimizations or closure removed it?)");
  return b;
}
var oa, pa;
(function() {
  function a(a) {
    a = a.toString().match(d).slice(1);
    return {arguments:a[0], body:a[1], returnValue:a[2]};
  }
  var b = {stackSave:function() {
    r.Ba();
  }, stackRestore:function() {
    r.ja();
  }, arrayToC:function(a) {
    var b = r.ia(a.length);
    qa(a, b);
    return b;
  }, stringToC:function(a) {
    var b = 0;
    null !== a && void 0 !== a && 0 !== a && (b = r.ia((a.length << 2) + 1), ra(a, b));
    return b;
  }}, c = {string:b.stringToC, array:b.arrayToC};
  pa = function(a, b, d, f, g) {
    a = na(a);
    var v = [], z = 0;
    if (f) {
      for (var B = 0;B < f.length;B++) {
        var J = c[d[B]];
        J ? (0 === z && (z = r.Ba()), v[B] = J(f[B])) : v[B] = f[B];
      }
    }
    d = a.apply(null, v);
    "string" === b && (d = C(d));
    if (0 !== z) {
      if (g && g.async) {
        EmterpreterAsync.Kd.push(function() {
          r.ja(z);
        });
        return;
      }
      r.ja(z);
    }
    return d;
  };
  var d = /^function\s*\(([^)]*)\)\s*{\s*([^*]*?)[\s;]*(?:return\s*(.*?)[;\s]*)?}$/, f = {}, g;
  for (g in b) {
    b.hasOwnProperty(g) && (f[g] = a(b[g]));
  }
  oa = function(b, c, d) {
    d = d || [];
    var g = na(b);
    b = d.every(function(a) {
      return "number" === a;
    });
    var n = "string" !== c;
    if (n && b) {
      return g;
    }
    var v = d.map(function(a, b) {
      return "$" + b;
    });
    c = "(function(" + v.join(",") + ") {";
    var z = d.length;
    if (!b) {
      c += "var stack = " + f.stackSave.body + ";";
      for (var B = 0;B < z;B++) {
        var J = v[B], R = d[B];
        "number" !== R && (R = f[R + "ToC"], c += "var " + R.arguments + " = " + J + ";", c += R.body + ";", c += J + "=" + R.returnValue + ";");
      }
    }
    d = a(function() {
      return g;
    }).returnValue;
    c += "var ret = " + d + "(" + v.join(",") + ");";
    n || (d = a(function() {
      return C;
    }).returnValue, c += "ret = " + d + "(ret);");
    b || (c += f.stackRestore.body.replace("()", "(stack)") + ";");
    return eval(c + "return ret})");
  };
})();
e.ccall = pa;
e.cwrap = oa;
function sa(a, b, c) {
  c = c || "i8";
  "*" === c.charAt(c.length - 1) && (c = "i32");
  switch(c) {
    case "i1":
      D[a >> 0] = b;
      break;
    case "i8":
      D[a >> 0] = b;
      break;
    case "i16":
      ta[a >> 1] = b;
      break;
    case "i32":
      E[a >> 2] = b;
      break;
    case "i64":
      ma = [b >>> 0, (la = b, 1 <= +ua(la) ? 0 < la ? (va(+wa(la / 4294967296), 4294967295) | 0) >>> 0 : ~~+xa((la - +(~~la >>> 0)) / 4294967296) >>> 0 : 0)];
      E[a >> 2] = ma[0];
      E[a + 4 >> 2] = ma[1];
      break;
    case "float":
      ya[a >> 2] = b;
      break;
    case "double":
      za[a >> 3] = b;
      break;
    default:
      x("invalid type for setValue: " + c);
  }
}
e.setValue = sa;
function Aa(a, b) {
  b = b || "i8";
  "*" === b.charAt(b.length - 1) && (b = "i32");
  switch(b) {
    case "i1":
      return D[a >> 0];
    case "i8":
      return D[a >> 0];
    case "i16":
      return ta[a >> 1];
    case "i32":
      return E[a >> 2];
    case "i64":
      return E[a >> 2];
    case "float":
      return ya[a >> 2];
    case "double":
      return za[a >> 3];
    default:
      x("invalid type for setValue: " + b);
  }
  return null;
}
e.getValue = Aa;
e.ALLOC_NORMAL = 0;
e.ALLOC_STACK = 1;
e.ALLOC_STATIC = 2;
e.ALLOC_DYNAMIC = 3;
e.ALLOC_NONE = 4;
function F(a, b, c, d) {
  var f, g;
  "number" === typeof a ? (f = !0, g = a) : (f = !1, g = a.length);
  var h = "string" === typeof b ? b : null;
  c = 4 == c ? d : [G, r.ia, r.$a, r.Q][void 0 === c ? 2 : c](Math.max(g, h ? 1 : b.length));
  if (f) {
    d = c;
    assert(0 == (c & 3));
    for (a = c + (g & -4);d < a;d += 4) {
      E[d >> 2] = 0;
    }
    for (a = c + g;d < a;) {
      D[d++ >> 0] = 0;
    }
    return c;
  }
  if ("i8" === h) {
    return a.subarray || a.slice ? H.set(a, c) : H.set(new Uint8Array(a), c), c;
  }
  d = 0;
  for (var k, u;d < g;) {
    var t = a[d];
    "function" === typeof t && (t = r.Vd(t));
    f = h || b[d];
    0 === f ? d++ : ("i64" == f && (f = "i32"), sa(c + d, t, f), u !== f && (k = r.Sa(f), u = f), d += k);
  }
  return c;
}
e.allocate = F;
e.getMemory = function(a) {
  return Ba ? "undefined" !== typeof Ca && !Ca.q || !Da ? r.Q(a) : G(a) : r.$a(a);
};
function C(a, b) {
  if (0 === b || !a) {
    return "";
  }
  for (var c = 0, d, f = 0;;) {
    d = H[a + f >> 0];
    c |= d;
    if (0 == d && !b) {
      break;
    }
    f++;
    if (b && f == b) {
      break;
    }
  }
  b || (b = f);
  d = "";
  if (128 > c) {
    for (;0 < b;) {
      c = String.fromCharCode.apply(String, H.subarray(a, a + Math.min(b, 1024))), d = d ? d + c : c, a += 1024, b -= 1024;
    }
    return d;
  }
  return e.UTF8ToString(a);
}
e.Pointer_stringify = C;
e.AsciiToString = function(a) {
  for (var b = "";;) {
    var c = D[a++ >> 0];
    if (!c) {
      return b;
    }
    b += String.fromCharCode(c);
  }
};
e.stringToAscii = function(a, b) {
  return Ea(a, b, !1);
};
function Fa(a, b) {
  for (var c, d, f, g, h, k, u = "";;) {
    c = a[b++];
    if (!c) {
      return u;
    }
    c & 128 ? (d = a[b++] & 63, 192 == (c & 224) ? u += String.fromCharCode((c & 31) << 6 | d) : (f = a[b++] & 63, 224 == (c & 240) ? c = (c & 15) << 12 | d << 6 | f : (g = a[b++] & 63, 240 == (c & 248) ? c = (c & 7) << 18 | d << 12 | f << 6 | g : (h = a[b++] & 63, 248 == (c & 252) ? c = (c & 3) << 24 | d << 18 | f << 12 | g << 6 | h : (k = a[b++] & 63, c = (c & 1) << 30 | d << 24 | f << 18 | g << 12 | h << 6 | k))), 65536 > c ? u += String.fromCharCode(c) : (c -= 65536, u += String.fromCharCode(55296 | 
    c >> 10, 56320 | c & 1023)))) : u += String.fromCharCode(c);
  }
}
e.UTF8ArrayToString = Fa;
e.UTF8ToString = function(a) {
  return Fa(H, a);
};
function Ga(a, b, c, d) {
  if (!(0 < d)) {
    return 0;
  }
  var f = c;
  d = c + d - 1;
  for (var g = 0;g < a.length;++g) {
    var h = a.charCodeAt(g);
    55296 <= h && 57343 >= h && (h = 65536 + ((h & 1023) << 10) | a.charCodeAt(++g) & 1023);
    if (127 >= h) {
      if (c >= d) {
        break;
      }
      b[c++] = h;
    } else {
      if (2047 >= h) {
        if (c + 1 >= d) {
          break;
        }
        b[c++] = 192 | h >> 6;
      } else {
        if (65535 >= h) {
          if (c + 2 >= d) {
            break;
          }
          b[c++] = 224 | h >> 12;
        } else {
          if (2097151 >= h) {
            if (c + 3 >= d) {
              break;
            }
            b[c++] = 240 | h >> 18;
          } else {
            if (67108863 >= h) {
              if (c + 4 >= d) {
                break;
              }
              b[c++] = 248 | h >> 24;
            } else {
              if (c + 5 >= d) {
                break;
              }
              b[c++] = 252 | h >> 30;
              b[c++] = 128 | h >> 24 & 63;
            }
            b[c++] = 128 | h >> 18 & 63;
          }
          b[c++] = 128 | h >> 12 & 63;
        }
        b[c++] = 128 | h >> 6 & 63;
      }
      b[c++] = 128 | h & 63;
    }
  }
  b[c] = 0;
  return c - f;
}
e.stringToUTF8Array = Ga;
e.stringToUTF8 = function(a, b, c) {
  return Ga(a, H, b, c);
};
function Ha(a) {
  for (var b = 0, c = 0;c < a.length;++c) {
    var d = a.charCodeAt(c);
    55296 <= d && 57343 >= d && (d = 65536 + ((d & 1023) << 10) | a.charCodeAt(++c) & 1023);
    127 >= d ? ++b : b = 2047 >= d ? b + 2 : 65535 >= d ? b + 3 : 2097151 >= d ? b + 4 : 67108863 >= d ? b + 5 : b + 6;
  }
  return b;
}
e.lengthBytesUTF8 = Ha;
e.UTF16ToString = function(a) {
  for (var b = 0, c = "";;) {
    var d = ta[a + 2 * b >> 1];
    if (0 == d) {
      return c;
    }
    ++b;
    c += String.fromCharCode(d);
  }
};
e.stringToUTF16 = function(a, b, c) {
  void 0 === c && (c = 2147483647);
  if (2 > c) {
    return 0;
  }
  c -= 2;
  var d = b;
  c = c < 2 * a.length ? c / 2 : a.length;
  for (var f = 0;f < c;++f) {
    ta[b >> 1] = a.charCodeAt(f), b += 2;
  }
  ta[b >> 1] = 0;
  return b - d;
};
e.lengthBytesUTF16 = function(a) {
  return 2 * a.length;
};
e.UTF32ToString = function(a) {
  for (var b = 0, c = "";;) {
    var d = E[a + 4 * b >> 2];
    if (0 == d) {
      return c;
    }
    ++b;
    65536 <= d ? (d = d - 65536, c += String.fromCharCode(55296 | d >> 10, 56320 | d & 1023)) : c += String.fromCharCode(d);
  }
};
e.stringToUTF32 = function(a, b, c) {
  void 0 === c && (c = 2147483647);
  if (4 > c) {
    return 0;
  }
  var d = b;
  c = d + c - 4;
  for (var f = 0;f < a.length;++f) {
    var g = a.charCodeAt(f);
    if (55296 <= g && 57343 >= g) {
      var h = a.charCodeAt(++f), g = 65536 + ((g & 1023) << 10) | h & 1023
    }
    E[b >> 2] = g;
    b += 4;
    if (b + 4 > c) {
      break;
    }
  }
  E[b >> 2] = 0;
  return b - d;
};
e.lengthBytesUTF32 = function(a) {
  for (var b = 0, c = 0;c < a.length;++c) {
    var d = a.charCodeAt(c);
    55296 <= d && 57343 >= d && ++c;
    b += 4;
  }
  return b;
};
function Ia(a) {
  function b(c, d, f) {
    d = d || Infinity;
    var g = "", h = [], v;
    if ("N" === a[k]) {
      k++;
      "K" === a[k] && k++;
      for (v = [];"E" !== a[k];) {
        if ("S" === a[k]) {
          k++;
          var A = a.indexOf("_", k);
          v.push(t[a.substring(k, A) || 0] || "?");
          k = A + 1;
        } else {
          if ("C" === a[k]) {
            v.push(v[v.length - 1]), k += 2;
          } else {
            var A = parseInt(a.substr(k)), Z = A.toString().length;
            if (!A || !Z) {
              k--;
              break;
            }
            var ec = a.substr(k + Z, A);
            v.push(ec);
            t.push(ec);
            k += Z + A;
          }
        }
      }
      k++;
      v = v.join("::");
      d--;
      if (0 === d) {
        return c ? [v] : v;
      }
    } else {
      if (("K" === a[k] || n && "L" === a[k]) && k++, A = parseInt(a.substr(k))) {
        Z = A.toString().length, v = a.substr(k + Z, A), k += Z + A;
      }
    }
    n = !1;
    "I" === a[k] ? (k++, A = b(!0), Z = b(!0, 1, !0), g += Z[0] + " " + v + "<" + A.join(", ") + ">") : g = v;
    a: for (;k < a.length && 0 < d--;) {
      if (v = a[k++], v in u) {
        h.push(u[v]);
      } else {
        switch(v) {
          case "P":
            h.push(b(!0, 1, !0)[0] + "*");
            break;
          case "R":
            h.push(b(!0, 1, !0)[0] + "&");
            break;
          case "L":
            k++;
            A = a.indexOf("E", k) - k;
            h.push(a.substr(k, A));
            k += A + 2;
            break;
          case "A":
            A = parseInt(a.substr(k));
            k += A.toString().length;
            if ("_" !== a[k]) {
              throw "?";
            }
            k++;
            h.push(b(!0, 1, !0)[0] + " [" + A + "]");
            break;
          case "E":
            break a;
          default:
            g += "?" + v;
            break a;
        }
      }
    }
    f || 1 !== h.length || "void" !== h[0] || (h = []);
    return c ? (g && h.push(g + "?"), h) : g + ("(" + h.join(", ") + ")");
  }
  var c = !!e.___cxa_demangle;
  if (c) {
    try {
      var d = G(a.length);
      ra(a.substr(1), d);
      var f = G(4), g = e.___cxa_demangle(d, 0, 0, f);
      if (0 === Aa(f, "i32") && g) {
        return C(g);
      }
    } catch (h) {
    } finally {
      d && Ja(d), f && Ja(f), g && Ja(g);
    }
  }
  var k = 3, u = {v:"void", b:"bool", c:"char", s:"short", i:"int", l:"long", f:"float", d:"double", w:"wchar_t", a:"signed char", h:"unsigned char", t:"unsigned short", j:"unsigned int", m:"unsigned long", x:"long long", y:"unsigned long long", z:"..."}, t = [], n = !0, d = a;
  try {
    if ("Object._main" == a || "_main" == a) {
      return "main()";
    }
    "number" === typeof a && (a = C(a));
    if ("_" !== a[0] || "_" !== a[1] || "Z" !== a[2]) {
      return a;
    }
    switch(a[3]) {
      case "n":
        return "operator new()";
      case "d":
        return "operator delete()";
    }
    d = b();
  } catch (v) {
    d += "?";
  }
  0 <= d.indexOf("?") && !c && r.V("warning: a problem occurred in builtin C++ name demangling; build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling");
  return d;
}
function Ka() {
  return La().replace(/__Z[\w\d_]+/g, function(a) {
    var b = Ia(a);
    return a === b ? a : a + " [" + b + "]";
  });
}
function La() {
  var a = Error();
  if (!a.stack) {
    try {
      throw Error(0);
    } catch (b) {
      a = b;
    }
    if (!a.stack) {
      return "(no stack trace available)";
    }
  }
  return a.stack.toString();
}
e.stackTrace = function() {
  return Ka();
};
function Ma() {
  var a = w;
  0 < a % 4096 && (a += 4096 - a % 4096);
  return a;
}
for (var D, H, ta, Na, E, Oa, ya, za, Pa = 0, ja = 0, Ba = !1, Qa = 0, p = 0, Ra = 0, Sa = 0, w = 0, Ta = e.TOTAL_STACK || 5242880, ka = e.TOTAL_MEMORY || 16777216, I = 65536;I < ka || I < 2 * Ta;) {
  I = 16777216 > I ? 2 * I : I + 16777216;
}
I !== ka && (ka = I);
assert("undefined" !== typeof Int32Array && "undefined" !== typeof Float64Array && !!(new Int32Array(1)).subarray && !!(new Int32Array(1)).set, "JS engine does not provide full typed array support");
var buffer;
buffer = new ArrayBuffer(ka);
D = new Int8Array(buffer);
ta = new Int16Array(buffer);
E = new Int32Array(buffer);
H = new Uint8Array(buffer);
Na = new Uint16Array(buffer);
Oa = new Uint32Array(buffer);
ya = new Float32Array(buffer);
za = new Float64Array(buffer);
E[0] = 255;
assert(255 === H[0] && 0 === H[3], "Typed arrays 2 must be run on a little-endian system");
e.HEAP = void 0;
e.buffer = buffer;
e.HEAP8 = D;
e.HEAP16 = ta;
e.HEAP32 = E;
e.HEAPU8 = H;
e.HEAPU16 = Na;
e.HEAPU32 = Oa;
e.HEAPF32 = ya;
e.HEAPF64 = za;
function Ua(a) {
  for (;0 < a.length;) {
    var b = a.shift();
    if ("function" == typeof b) {
      b();
    } else {
      var c = b.fa;
      "number" === typeof c ? void 0 === b.X ? r.N("v", c) : r.N("vi", c, [b.X]) : c(void 0 === b.X ? null : b.X);
    }
  }
}
var Va = [], Wa = [], Xa = [], K = [], Ya = [], Da = !1;
function Za(a) {
  Va.unshift(a);
}
e.addOnPreRun = Za;
e.addOnInit = function(a) {
  Wa.unshift(a);
};
e.addOnPreMain = function(a) {
  Xa.unshift(a);
};
e.addOnExit = function(a) {
  K.unshift(a);
};
function $a(a) {
  Ya.unshift(a);
}
e.addOnPostRun = $a;
function ab(a, b, c) {
  c = Array(0 < c ? c : Ha(a) + 1);
  a = Ga(a, c, 0, c.length);
  b && (c.length = a);
  return c;
}
e.intArrayFromString = ab;
e.intArrayToString = function(a) {
  for (var b = [], c = 0;c < a.length;c++) {
    var d = a[c];
    255 < d && (d &= 255);
    b.push(String.fromCharCode(d));
  }
  return b.join("");
};
function ra(a, b, c) {
  a = ab(a, c);
  for (c = 0;c < a.length;) {
    D[b + c >> 0] = a[c], c += 1;
  }
}
e.writeStringToMemory = ra;
function qa(a, b) {
  for (var c = 0;c < a.length;c++) {
    D[b++ >> 0] = a[c];
  }
}
e.writeArrayToMemory = qa;
function Ea(a, b, c) {
  for (var d = 0;d < a.length;++d) {
    D[b++ >> 0] = a.charCodeAt(d);
  }
  c || (D[b >> 0] = 0);
}
e.writeAsciiToMemory = Ea;
Math.imul && -5 === Math.imul(4294967295, 5) || (Math.imul = function(a, b) {
  var c = a & 65535, d = b & 65535;
  return c * d + ((a >>> 16) * d + c * (b >>> 16) << 16) | 0;
});
Math.Wd = Math.imul;
Math.clz32 || (Math.clz32 = function(a) {
  a = a >>> 0;
  for (var b = 0;32 > b;b++) {
    if (a & 1 << 31 - b) {
      return b;
    }
  }
  return 32;
});
Math.Md = Math.clz32;
var ua = Math.abs, xa = Math.ceil, wa = Math.floor, va = Math.min, bb = 0, cb = null, db = null;
function eb() {
  bb++;
  e.monitorRunDependencies && e.monitorRunDependencies(bb);
}
e.addRunDependency = eb;
function fb() {
  bb--;
  e.monitorRunDependencies && e.monitorRunDependencies(bb);
  if (0 == bb && (null !== cb && (clearInterval(cb), cb = null), db)) {
    var a = db;
    db = null;
    a();
  }
}
e.removeRunDependency = fb;
e.preloadedImages = {};
e.preloadedAudios = {};
var L = null, Pa = 8, ja = Pa + 22208;
Wa.push({fa:function() {
  gb();
}}, {fa:function() {
  hb();
}});
var L = "test_wasm.html.mem", ib = r.pa(F(12, "i8", 2), 8);
assert(0 == ib % 8);
function jb(a, b) {
  K.unshift({fa:a, X:b});
}
function M() {
  M.actual || (m ? M.actual = function() {
    var a = process.hrtime();
    return 1E3 * a[0] + a[1] / 1E6;
  } : "undefined" !== typeof dateNow ? M.actual = dateNow : "object" === typeof self && self.performance && "function" === typeof self.performance.now ? M.actual = function() {
    return self.performance.now();
  } : "object" === typeof performance && "function" === typeof performance.now ? M.actual = function() {
    return performance.now();
  } : M.actual = Date.now);
  return M.actual();
}
function kb() {
  return m || "undefined" !== typeof dateNow || (ba || ca) && self.performance && self.performance.now;
}
var N = {K:1, G:2, td:3, oc:4, J:5, Ga:6, Ib:7, Mc:8, ba:9, Wb:10, Ca:11, Dd:11, cb:12, la:13, hc:14, Yc:15, ma:16, Da:17, Ed:18, oa:19, Ea:20, P:21, p:22, Hc:23, bb:24, W:25, Ad:26, ic:27, Uc:28, da:29, qd:30, Ac:31, jd:32, ec:33, nd:34, Qc:42, lc:43, Xb:44, rc:45, sc:46, tc:47, zc:48, Bd:49, Kc:50, qc:51, bc:35, Nc:37, Ob:52, Rb:53, Fd:54, Ic:55, Sb:56, Tb:57, cc:35, Ub:59, Wc:60, Lc:61, xd:62, Vc:63, Rc:64, Sc:65, pd:66, Oc:67, Lb:68, ud:69, Yb:70, kd:71, Cc:72, fc:73, Qb:74, cd:76, Pb:77, od:78, 
uc:79, vc:80, yc:81, xc:82, wc:83, Xc:38, Fa:39, Dc:36, na:40, dd:95, hd:96, ac:104, Jc:105, Mb:97, md:91, ad:88, Tc:92, rd:108, $b:111, Jb:98, Zb:103, Gc:101, Ec:100, yd:110, jc:112, kc:113, nc:115, Nb:114, dc:89, Bc:90, ld:93, sd:94, Kb:99, Fc:102, pc:106, Zc:107, zd:109, Cd:87, gc:122, vd:116, bd:95, Pc:123, mc:84, ed:75, Vb:125, $c:131, gd:130, wd:86};
function lb(a) {
  e.___errno_location && (E[e.___errno_location() >> 2] = a);
  return a;
}
e._i64Subtract = mb;
function nb() {
  return !!nb.q;
}
var ob = 0, pb = [], qb = {};
function rb(a) {
  if (!a || qb[a]) {
    return a;
  }
  for (var b in qb) {
    if (qb[b].Ia === a) {
      return b;
    }
  }
  return a;
}
function tb() {
  var a = ob;
  if (!a) {
    return (O.setTempRet0(0), 0) | 0;
  }
  var b = qb[a], c = b.type;
  if (!c) {
    return (O.setTempRet0(0), a) | 0;
  }
  var d = Array.prototype.slice.call(arguments);
  e.___cxa_is_pointer_type(c);
  tb.buffer || (tb.buffer = G(4));
  E[tb.buffer >> 2] = a;
  for (var a = tb.buffer, f = 0;f < d.length;f++) {
    if (d[f] && e.___cxa_can_catch(d[f], c, a)) {
      return a = E[a >> 2], b.Ia = a, (O.setTempRet0(d[f]), a) | 0;
    }
  }
  a = E[a >> 2];
  return (O.setTempRet0(c), a) | 0;
}
e._memset = ub;
function vb(a) {
  return 0 === a % 4 && (0 !== a % 100 || 0 === a % 400);
}
function wb(a, b) {
  for (var c = 0, d = 0;d <= b;c += a[d++]) {
  }
  return c;
}
var xb = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], yb = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function zb(a, b) {
  for (var c = new Date(a.getTime());0 < b;) {
    var d = c.getMonth(), f = (vb(c.getFullYear()) ? xb : yb)[d];
    if (b > f - c.getDate()) {
      b -= f - c.getDate() + 1, c.setDate(1), 11 > d ? c.setMonth(d + 1) : (c.setMonth(0), c.setFullYear(c.getFullYear() + 1));
    } else {
      c.setDate(c.getDate() + b);
      break;
    }
  }
  return c;
}
function Ab(a, b, c, d) {
  function f(a, b, c) {
    for (a = "number" === typeof a ? a.toString() : a || "";a.length < b;) {
      a = c[0] + a;
    }
    return a;
  }
  function g(a, b) {
    return f(a, b, "0");
  }
  function h(a, b) {
    function c(a) {
      return 0 > a ? -1 : 0 < a ? 1 : 0;
    }
    var d;
    0 === (d = c(a.getFullYear() - b.getFullYear())) && 0 === (d = c(a.getMonth() - b.getMonth())) && (d = c(a.getDate() - b.getDate()));
    return d;
  }
  function k(a) {
    switch(a.getDay()) {
      case 0:
        return new Date(a.getFullYear() - 1, 11, 29);
      case 1:
        return a;
      case 2:
        return new Date(a.getFullYear(), 0, 3);
      case 3:
        return new Date(a.getFullYear(), 0, 2);
      case 4:
        return new Date(a.getFullYear(), 0, 1);
      case 5:
        return new Date(a.getFullYear() - 1, 11, 31);
      case 6:
        return new Date(a.getFullYear() - 1, 11, 30);
    }
  }
  function u(a) {
    a = zb(new Date(a.u + 1900, 0, 1), a.ka);
    var b = k(new Date(a.getFullYear() + 1, 0, 4));
    return 0 >= h(k(new Date(a.getFullYear(), 0, 4)), a) ? 0 >= h(b, a) ? a.getFullYear() + 1 : a.getFullYear() : a.getFullYear() - 1;
  }
  var t = E[d + 40 >> 2];
  d = {Eb:E[d >> 2], Db:E[d + 4 >> 2], U:E[d + 8 >> 2], O:E[d + 12 >> 2], I:E[d + 16 >> 2], u:E[d + 20 >> 2], ab:E[d + 24 >> 2], ka:E[d + 28 >> 2], de:E[d + 32 >> 2], Cb:E[d + 36 >> 2], Fb:t ? C(t) : ""};
  c = C(c);
  var t = {"%c":"%a %b %d %H:%M:%S %Y", "%D":"%m/%d/%y", "%F":"%Y-%m-%d", "%h":"%b", "%r":"%I:%M:%S %p", "%R":"%H:%M", "%T":"%H:%M:%S", "%x":"%m/%d/%y", "%X":"%H:%M:%S"}, n;
  for (n in t) {
    c = c.replace(new RegExp(n, "g"), t[n]);
  }
  var v = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), z = "January February March April May June July August September October November December".split(" "), t = {"%a":function(a) {
    return v[a.ab].substring(0, 3);
  }, "%A":function(a) {
    return v[a.ab];
  }, "%b":function(a) {
    return z[a.I].substring(0, 3);
  }, "%B":function(a) {
    return z[a.I];
  }, "%C":function(a) {
    return g((a.u + 1900) / 100 | 0, 2);
  }, "%d":function(a) {
    return g(a.O, 2);
  }, "%e":function(a) {
    return f(a.O, 2, " ");
  }, "%g":function(a) {
    return u(a).toString().substring(2);
  }, "%G":function(a) {
    return u(a);
  }, "%H":function(a) {
    return g(a.U, 2);
  }, "%I":function(a) {
    return g(13 > a.U ? a.U : a.U - 12, 2);
  }, "%j":function(a) {
    return g(a.O + wb(vb(a.u + 1900) ? xb : yb, a.I - 1), 3);
  }, "%m":function(a) {
    return g(a.I + 1, 2);
  }, "%M":function(a) {
    return g(a.Db, 2);
  }, "%n":function() {
    return "\n";
  }, "%p":function(a) {
    return 0 < a.U && 13 > a.U ? "AM" : "PM";
  }, "%S":function(a) {
    return g(a.Eb, 2);
  }, "%t":function() {
    return "\t";
  }, "%u":function(a) {
    return (new Date(a.u + 1900, a.I + 1, a.O, 0, 0, 0, 0)).getDay() || 7;
  }, "%U":function(a) {
    var b = new Date(a.u + 1900, 0, 1), c = 0 === b.getDay() ? b : zb(b, 7 - b.getDay());
    a = new Date(a.u + 1900, a.I, a.O);
    return 0 > h(c, a) ? g(Math.ceil((31 - c.getDate() + (wb(vb(a.getFullYear()) ? xb : yb, a.getMonth() - 1) - 31) + a.getDate()) / 7), 2) : 0 === h(c, b) ? "01" : "00";
  }, "%V":function(a) {
    var b = k(new Date(a.u + 1900, 0, 4)), c = k(new Date(a.u + 1901, 0, 4)), d = zb(new Date(a.u + 1900, 0, 1), a.ka);
    return 0 > h(d, b) ? "53" : 0 >= h(c, d) ? "01" : g(Math.ceil((b.getFullYear() < a.u + 1900 ? a.ka + 32 - b.getDate() : a.ka + 1 - b.getDate()) / 7), 2);
  }, "%w":function(a) {
    return (new Date(a.u + 1900, a.I + 1, a.O, 0, 0, 0, 0)).getDay();
  }, "%W":function(a) {
    var b = new Date(a.u, 0, 1), c = 1 === b.getDay() ? b : zb(b, 0 === b.getDay() ? 1 : 7 - b.getDay() + 1);
    a = new Date(a.u + 1900, a.I, a.O);
    return 0 > h(c, a) ? g(Math.ceil((31 - c.getDate() + (wb(vb(a.getFullYear()) ? xb : yb, a.getMonth() - 1) - 31) + a.getDate()) / 7), 2) : 0 === h(c, b) ? "01" : "00";
  }, "%y":function(a) {
    return (a.u + 1900).toString().substring(2);
  }, "%Y":function(a) {
    return a.u + 1900;
  }, "%z":function(a) {
    a = a.Cb;
    var b = 0 <= a;
    a = Math.abs(a) / 60;
    return (b ? "+" : "-") + String("0000" + (a / 60 * 100 + a % 60)).slice(-4);
  }, "%Z":function(a) {
    return a.Fb;
  }, "%%":function() {
    return "%";
  }};
  for (n in t) {
    0 <= c.indexOf(n) && (c = c.replace(new RegExp(n, "g"), t[n](d)));
  }
  n = ab(c, !1);
  if (n.length > b) {
    return 0;
  }
  qa(n, a);
  return n.length - 1;
}
function Bb(a, b) {
  Bb.q || (Bb.q = {});
  a in Bb.q || (r.N("v", b), Bb.q[a] = 1);
}
var Cb = {}, Db = ua, Eb = 1, Fb = {0:"Success", 1:"Not super-user", 2:"No such file or directory", 3:"No such process", 4:"Interrupted system call", 5:"I/O error", 6:"No such device or address", 7:"Arg list too long", 8:"Exec format error", 9:"Bad file number", 10:"No children", 11:"No more processes", 12:"Not enough core", 13:"Permission denied", 14:"Bad address", 15:"Block device required", 16:"Mount device busy", 17:"File exists", 18:"Cross-device link", 19:"No such device", 20:"Not a directory", 
21:"Is a directory", 22:"Invalid argument", 23:"Too many open files in system", 24:"Too many open files", 25:"Not a typewriter", 26:"Text file busy", 27:"File too large", 28:"No space left on device", 29:"Illegal seek", 30:"Read only file system", 31:"Too many links", 32:"Broken pipe", 33:"Math arg out of domain of func", 34:"Math result not representable", 35:"File locking deadlock error", 36:"File or path name too long", 37:"No record locks available", 38:"Function not implemented", 39:"Directory not empty", 
40:"Too many symbolic links", 42:"No message of desired type", 43:"Identifier removed", 44:"Channel number out of range", 45:"Level 2 not synchronized", 46:"Level 3 halted", 47:"Level 3 reset", 48:"Link number out of range", 49:"Protocol driver not attached", 50:"No CSI structure available", 51:"Level 2 halted", 52:"Invalid exchange", 53:"Invalid request descriptor", 54:"Exchange full", 55:"No anode", 56:"Invalid request code", 57:"Invalid slot", 59:"Bad font file fmt", 60:"Device not a stream", 
61:"No data (for no delay io)", 62:"Timer expired", 63:"Out of streams resources", 64:"Machine is not on the network", 65:"Package not installed", 66:"The object is remote", 67:"The link has been severed", 68:"Advertise error", 69:"Srmount error", 70:"Communication error on send", 71:"Protocol error", 72:"Multihop attempted", 73:"Cross mount point (not really error)", 74:"Trying to read unreadable message", 75:"Value too large for defined data type", 76:"Given log. name not unique", 77:"f.d. invalid for this operation", 
78:"Remote address changed", 79:"Can   access a needed shared lib", 80:"Accessing a corrupted shared lib", 81:".lib section in a.out corrupted", 82:"Attempting to link in too many libs", 83:"Attempting to exec a shared library", 84:"Illegal byte sequence", 86:"Streams pipe error", 87:"Too many users", 88:"Socket operation on non-socket", 89:"Destination address required", 90:"Message too long", 91:"Protocol wrong type for socket", 92:"Protocol not available", 93:"Unknown protocol", 94:"Socket type not supported", 
95:"Not supported", 96:"Protocol family not supported", 97:"Address family not supported by protocol family", 98:"Address already in use", 99:"Address not available", 100:"Network interface is not configured", 101:"Network is unreachable", 102:"Connection reset by network", 103:"Connection aborted", 104:"Connection reset by peer", 105:"No buffer space available", 106:"Socket is already connected", 107:"Socket is not connected", 108:"Can't send after socket shutdown", 109:"Too many references", 110:"Connection timed out", 
111:"Connection refused", 112:"Host is down", 113:"Host is unreachable", 114:"Socket already connected", 115:"Connection already in progress", 116:"Stale file handle", 122:"Quota exceeded", 123:"No medium (in tape drive)", 125:"Operation canceled", 130:"Previous owner died", 131:"State not recoverable"}, Gb = [];
function Hb(a, b) {
  Gb[a] = {input:[], output:[], T:b};
  Ib(a, Jb);
}
var Jb = {open:function(a) {
  var b = Gb[a.g.rdev];
  if (!b) {
    throw new P(N.oa);
  }
  a.tty = b;
  a.seekable = !1;
}, close:function(a) {
  a.tty.T.flush(a.tty);
}, flush:function(a) {
  a.tty.T.flush(a.tty);
}, read:function(a, b, c, d) {
  if (!a.tty || !a.tty.T.Ta) {
    throw new P(N.Ga);
  }
  for (var f = 0, g = 0;g < d;g++) {
    var h;
    try {
      h = a.tty.T.Ta(a.tty);
    } catch (k) {
      throw new P(N.J);
    }
    if (void 0 === h && 0 === f) {
      throw new P(N.Ca);
    }
    if (null === h || void 0 === h) {
      break;
    }
    f++;
    b[c + g] = h;
  }
  f && (a.g.timestamp = Date.now());
  return f;
}, write:function(a, b, c, d) {
  if (!a.tty || !a.tty.T.wa) {
    throw new P(N.Ga);
  }
  for (var f = 0;f < d;f++) {
    try {
      a.tty.T.wa(a.tty, b[c + f]);
    } catch (g) {
      throw new P(N.J);
    }
  }
  d && (a.g.timestamp = Date.now());
  return f;
}}, Kb = {Ta:function(a) {
  if (!a.input.length) {
    var b = null;
    if (m) {
      var c = new Buffer(256), d = 0, f = process.stdin.fd, g = !1;
      try {
        f = fs.openSync("/dev/stdin", "r"), g = !0;
      } catch (h) {
      }
      d = fs.readSync(f, c, 0, 256, null);
      g && fs.closeSync(f);
      0 < d ? b = c.slice(0, d).toString("utf-8") : b = null;
    } else {
      "undefined" != typeof window && "function" == typeof window.prompt ? (b = window.prompt("Input: "), null !== b && (b += "\n")) : "function" == typeof readline && (b = readline(), null !== b && (b += "\n"));
    }
    if (!b) {
      return null;
    }
    a.input = ab(b, !0);
  }
  return a.input.shift();
}, wa:function(a, b) {
  null === b || 10 === b ? (e.print(Fa(a.output, 0)), a.output = []) : 0 != b && a.output.push(b);
}, flush:function(a) {
  a.output && 0 < a.output.length && (e.print(Fa(a.output, 0)), a.output = []);
}}, Lb = {wa:function(a, b) {
  null === b || 10 === b ? (e.printErr(Fa(a.output, 0)), a.output = []) : 0 != b && a.output.push(b);
}, flush:function(a) {
  a.output && 0 < a.output.length && (e.printErr(Fa(a.output, 0)), a.output = []);
}}, Q = {D:null, B:function() {
  return Q.createNode(null, "/", 16895, 0);
}, createNode:function(a, b, c, d) {
  if (24576 === (c & 61440) || 4096 === (c & 61440)) {
    throw new P(N.K);
  }
  Q.D || (Q.D = {dir:{g:{F:Q.k.F, A:Q.k.A, lookup:Q.k.lookup, Y:Q.k.Y, rename:Q.k.rename, unlink:Q.k.unlink, rmdir:Q.k.rmdir, readdir:Q.k.readdir, symlink:Q.k.symlink}, stream:{H:Q.n.H}}, file:{g:{F:Q.k.F, A:Q.k.A}, stream:{H:Q.n.H, read:Q.n.read, write:Q.n.write, Ja:Q.n.Ja, Va:Q.n.Va, Xa:Q.n.Xa}}, link:{g:{F:Q.k.F, A:Q.k.A, readlink:Q.k.readlink}, stream:{}}, Ma:{g:{F:Q.k.F, A:Q.k.A}, stream:Mb}});
  c = Nb(a, b, c, d);
  S(c.mode) ? (c.k = Q.D.dir.g, c.n = Q.D.dir.stream, c.e = {}) : 32768 === (c.mode & 61440) ? (c.k = Q.D.file.g, c.n = Q.D.file.stream, c.o = 0, c.e = null) : 40960 === (c.mode & 61440) ? (c.k = Q.D.link.g, c.n = Q.D.link.stream) : 8192 === (c.mode & 61440) && (c.k = Q.D.Ma.g, c.n = Q.D.Ma.stream);
  c.timestamp = Date.now();
  a && (a.e[b] = c);
  return c;
}, lb:function(a) {
  if (a.e && a.e.subarray) {
    for (var b = [], c = 0;c < a.o;++c) {
      b.push(a.e[c]);
    }
    return b;
  }
  return a.e;
}, Td:function(a) {
  return a.e ? a.e.subarray ? a.e.subarray(0, a.o) : new Uint8Array(a.e) : new Uint8Array;
}, Oa:function(a, b) {
  a.e && a.e.subarray && b > a.e.length && (a.e = Q.lb(a), a.o = a.e.length);
  if (!a.e || a.e.subarray) {
    var c = a.e ? a.e.buffer.byteLength : 0;
    c >= b || (b = Math.max(b, c * (1048576 > c ? 2 : 1.125) | 0), 0 != c && (b = Math.max(b, 256)), c = a.e, a.e = new Uint8Array(b), 0 < a.o && a.e.set(c.subarray(0, a.o), 0));
  } else {
    for (!a.e && 0 < b && (a.e = []);a.e.length < b;) {
      a.e.push(0);
    }
  }
}, xb:function(a, b) {
  if (a.o != b) {
    if (0 == b) {
      a.e = null, a.o = 0;
    } else {
      if (!a.e || a.e.subarray) {
        var c = a.e;
        a.e = new Uint8Array(new ArrayBuffer(b));
        c && a.e.set(c.subarray(0, Math.min(b, a.o)));
      } else {
        if (a.e || (a.e = []), a.e.length > b) {
          a.e.length = b;
        } else {
          for (;a.e.length < b;) {
            a.e.push(0);
          }
        }
      }
      a.o = b;
    }
  }
}, k:{F:function(a) {
  var b = {};
  b.dev = 8192 === (a.mode & 61440) ? a.id : 1;
  b.ino = a.id;
  b.mode = a.mode;
  b.nlink = 1;
  b.uid = 0;
  b.gid = 0;
  b.rdev = a.rdev;
  S(a.mode) ? b.size = 4096 : 32768 === (a.mode & 61440) ? b.size = a.o : 40960 === (a.mode & 61440) ? b.size = a.link.length : b.size = 0;
  b.atime = new Date(a.timestamp);
  b.mtime = new Date(a.timestamp);
  b.ctime = new Date(a.timestamp);
  b.M = 4096;
  b.blocks = Math.ceil(b.size / b.M);
  return b;
}, A:function(a, b) {
  void 0 !== b.mode && (a.mode = b.mode);
  void 0 !== b.timestamp && (a.timestamp = b.timestamp);
  void 0 !== b.size && Q.xb(a, b.size);
}, lookup:function() {
  throw Ob[N.G];
}, Y:function(a, b, c, d) {
  return Q.createNode(a, b, c, d);
}, rename:function(a, b, c) {
  if (S(a.mode)) {
    var d;
    try {
      d = Pb(b, c);
    } catch (f) {
    }
    if (d) {
      for (var g in d.e) {
        throw new P(N.Fa);
      }
    }
  }
  delete a.parent.e[a.name];
  a.name = c;
  b.e[c] = a;
  a.parent = b;
}, unlink:function(a, b) {
  delete a.e[b];
}, rmdir:function(a, b) {
  var c = Pb(a, b), d;
  for (d in c.e) {
    throw new P(N.Fa);
  }
  delete a.e[b];
}, readdir:function(a) {
  var b = [".", ".."], c;
  for (c in a.e) {
    a.e.hasOwnProperty(c) && b.push(c);
  }
  return b;
}, symlink:function(a, b, c) {
  a = Q.createNode(a, b, 41471, 0);
  a.link = c;
  return a;
}, readlink:function(a) {
  if (40960 !== (a.mode & 61440)) {
    throw new P(N.p);
  }
  return a.link;
}}, n:{read:function(a, b, c, d, f) {
  var g = a.g.e;
  if (f >= a.g.o) {
    return 0;
  }
  a = Math.min(a.g.o - f, d);
  assert(0 <= a);
  if (8 < a && g.subarray) {
    b.set(g.subarray(f, f + a), c);
  } else {
    for (d = 0;d < a;d++) {
      b[c + d] = g[f + d];
    }
  }
  return a;
}, write:function(a, b, c, d, f, g) {
  if (!d) {
    return 0;
  }
  a = a.g;
  a.timestamp = Date.now();
  if (b.subarray && (!a.e || a.e.subarray)) {
    if (g) {
      return a.e = b.subarray(c, c + d), a.o = d;
    }
    if (0 === a.o && 0 === f) {
      return a.e = new Uint8Array(b.subarray(c, c + d)), a.o = d;
    }
    if (f + d <= a.o) {
      return a.e.set(b.subarray(c, c + d), f), d;
    }
  }
  Q.Oa(a, f + d);
  if (a.e.subarray && b.subarray) {
    a.e.set(b.subarray(c, c + d), f);
  } else {
    for (g = 0;g < d;g++) {
      a.e[f + g] = b[c + g];
    }
  }
  a.o = Math.max(a.o, f + d);
  return d;
}, H:function(a, b, c) {
  1 === c ? b += a.position : 2 === c && 32768 === (a.g.mode & 61440) && (b += a.g.o);
  if (0 > b) {
    throw new P(N.p);
  }
  return b;
}, Ja:function(a, b, c) {
  Q.Oa(a.g, b + c);
  a.g.o = Math.max(a.g.o, b + c);
}, Va:function(a, b, c, d, f, g, h) {
  if (32768 !== (a.g.mode & 61440)) {
    throw new P(N.oa);
  }
  c = a.g.e;
  if (h & 2 || c.buffer !== b && c.buffer !== b.buffer) {
    if (0 < f || f + d < a.g.o) {
      c.subarray ? c = c.subarray(f, f + d) : c = Array.prototype.slice.call(c, f, f + d);
    }
    a = !0;
    d = G(d);
    if (!d) {
      throw new P(N.cb);
    }
    b.set(c, d);
  } else {
    a = !1, d = c.byteOffset;
  }
  return {ub:d, Jd:a};
}, Xa:function(a, b, c, d, f) {
  if (32768 !== (a.g.mode & 61440)) {
    throw new P(N.oa);
  }
  if (f & 2) {
    return 0;
  }
  Q.n.write(a, b, 0, d, c, !1);
  return 0;
}}}, T = {ha:!1, Bb:function() {
  T.ha = !!process.platform.match(/^win/);
}, B:function(a) {
  assert(m);
  return T.createNode(null, "/", T.Ra(a.va.root), 0);
}, createNode:function(a, b, c) {
  if (!S(c) && 32768 !== (c & 61440) && 40960 !== (c & 61440)) {
    throw new P(N.p);
  }
  a = Nb(a, b, c);
  a.k = T.k;
  a.n = T.n;
  return a;
}, Ra:function(a) {
  var b;
  try {
    b = fs.lstatSync(a), T.ha && (b.mode = b.mode | (b.mode & 146) >> 1);
  } catch (c) {
    if (!c.code) {
      throw c;
    }
    throw new P(N[c.code]);
  }
  return b.mode;
}, C:function(a) {
  for (var b = [];a.parent !== a;) {
    b.push(a.name), a = a.parent;
  }
  b.push(a.B.va.root);
  b.reverse();
  return Qb.apply(null, b);
}, Pa:{0:"r", 1:"r+", 2:"r+", 64:"r", 65:"r+", 66:"r+", 129:"rx+", 193:"rx+", 514:"w+", 577:"w", 578:"w+", 705:"wx", 706:"wx+", 1024:"a", 1025:"a", 1026:"a+", 1089:"a", 1090:"a+", 1153:"ax", 1154:"ax+", 1217:"ax", 1218:"ax+", 4096:"rs", 4098:"rs+"}, jb:function(a) {
  a &= -32769;
  if (a in T.Pa) {
    return T.Pa[a];
  }
  throw new P(N.p);
}, k:{F:function(a) {
  a = T.C(a);
  var b;
  try {
    b = fs.lstatSync(a);
  } catch (c) {
    if (!c.code) {
      throw c;
    }
    throw new P(N[c.code]);
  }
  T.ha && !b.M && (b.M = 4096);
  T.ha && !b.blocks && (b.blocks = (b.size + b.M - 1) / b.M | 0);
  return {dev:b.dev, ino:b.ino, mode:b.mode, nlink:b.nlink, uid:b.uid, gid:b.gid, rdev:b.rdev, size:b.size, atime:b.atime, mtime:b.mtime, ctime:b.ctime, M:b.M, blocks:b.blocks};
}, A:function(a, b) {
  var c = T.C(a);
  try {
    void 0 !== b.mode && (fs.chmodSync(c, b.mode), a.mode = b.mode), void 0 !== b.size && fs.truncateSync(c, b.size);
  } catch (d) {
    if (!d.code) {
      throw d;
    }
    throw new P(N[d.code]);
  }
}, lookup:function(a, b) {
  var c = U(T.C(a), b), c = T.Ra(c);
  return T.createNode(a, b, c);
}, Y:function(a, b, c, d) {
  a = T.createNode(a, b, c, d);
  b = T.C(a);
  try {
    S(a.mode) ? fs.mkdirSync(b, a.mode) : fs.writeFileSync(b, "", {mode:a.mode});
  } catch (f) {
    if (!f.code) {
      throw f;
    }
    throw new P(N[f.code]);
  }
  return a;
}, rename:function(a, b, c) {
  a = T.C(a);
  b = U(T.C(b), c);
  try {
    fs.renameSync(a, b);
  } catch (d) {
    if (!d.code) {
      throw d;
    }
    throw new P(N[d.code]);
  }
}, unlink:function(a, b) {
  var c = U(T.C(a), b);
  try {
    fs.unlinkSync(c);
  } catch (d) {
    if (!d.code) {
      throw d;
    }
    throw new P(N[d.code]);
  }
}, rmdir:function(a, b) {
  var c = U(T.C(a), b);
  try {
    fs.rmdirSync(c);
  } catch (d) {
    if (!d.code) {
      throw d;
    }
    throw new P(N[d.code]);
  }
}, readdir:function(a) {
  a = T.C(a);
  try {
    return fs.readdirSync(a);
  } catch (b) {
    if (!b.code) {
      throw b;
    }
    throw new P(N[b.code]);
  }
}, symlink:function(a, b, c) {
  a = U(T.C(a), b);
  try {
    fs.symlinkSync(c, a);
  } catch (d) {
    if (!d.code) {
      throw d;
    }
    throw new P(N[d.code]);
  }
}, readlink:function(a) {
  var b = T.C(a);
  try {
    return b = fs.readlinkSync(b), b = Rb.relative(Rb.resolve(a.B.va.root), b);
  } catch (c) {
    if (!c.code) {
      throw c;
    }
    throw new P(N[c.code]);
  }
}}, n:{open:function(a) {
  var b = T.C(a.g);
  try {
    32768 === (a.g.mode & 61440) && (a.$ = fs.openSync(b, T.jb(a.flags)));
  } catch (c) {
    if (!c.code) {
      throw c;
    }
    throw new P(N[c.code]);
  }
}, close:function(a) {
  try {
    32768 === (a.g.mode & 61440) && a.$ && fs.closeSync(a.$);
  } catch (b) {
    if (!b.code) {
      throw b;
    }
    throw new P(N[b.code]);
  }
}, read:function(a, b, c, d, f) {
  if (0 === d) {
    return 0;
  }
  var g = new Buffer(d), h;
  try {
    h = fs.readSync(a.$, g, 0, d, f);
  } catch (k) {
    throw new P(N[k.code]);
  }
  if (0 < h) {
    for (a = 0;a < h;a++) {
      b[c + a] = g[a];
    }
  }
  return h;
}, write:function(a, b, c, d, f) {
  b = new Buffer(b.subarray(c, c + d));
  var g;
  try {
    g = fs.writeSync(a.$, b, 0, d, f);
  } catch (h) {
    throw new P(N[h.code]);
  }
  return g;
}, H:function(a, b, c) {
  if (1 === c) {
    b += a.position;
  } else {
    if (2 === c && 32768 === (a.g.mode & 61440)) {
      try {
        b += fs.fstatSync(a.$).size;
      } catch (d) {
        throw new P(N[d.code]);
      }
    }
  }
  if (0 > b) {
    throw new P(N.p);
  }
  return b;
}}};
F(1, "i32*", 2);
F(1, "i32*", 2);
F(1, "i32*", 2);
var Sb = null, Tb = [null], Ub = [], Vb = 1, Wb = null, Xb = !0, Zb = {}, P = null, Ob = {};
function V(a, b) {
  a = $b("/", a);
  b = b || {};
  if (!a) {
    return {path:"", g:null};
  }
  var c = {Qa:!0, ya:0}, d;
  for (d in c) {
    void 0 === b[d] && (b[d] = c[d]);
  }
  if (8 < b.ya) {
    throw new P(N.na);
  }
  var c = ac(a.split("/").filter(function(a) {
    return !!a;
  }), !1), f = Sb;
  d = "/";
  for (var g = 0;g < c.length;g++) {
    var h = g === c.length - 1;
    if (h && b.parent) {
      break;
    }
    f = Pb(f, c[g]);
    d = U(d, c[g]);
    f.Z && (!h || h && b.Qa) && (f = f.Z.root);
    if (!h || b.ra) {
      for (h = 0;40960 === (f.mode & 61440);) {
        if (f = bc(d), d = $b(cc(d), f), f = V(d, {ya:b.ya}).g, 40 < h++) {
          throw new P(N.na);
        }
      }
    }
  }
  return {path:d, g:f};
}
function dc(a) {
  for (var b;;) {
    if (a === a.parent) {
      return a = a.B.Wa, b ? "/" !== a[a.length - 1] ? a + "/" + b : a + b : a;
    }
    b = b ? a.name + "/" + b : a.name;
    a = a.parent;
  }
}
function fc(a, b) {
  for (var c = 0, d = 0;d < b.length;d++) {
    c = (c << 5) - c + b.charCodeAt(d) | 0;
  }
  return (a + c >>> 0) % Wb.length;
}
function gc(a) {
  var b = fc(a.parent.id, a.name);
  a.S = Wb[b];
  Wb[b] = a;
}
function Pb(a, b) {
  var c;
  if (c = (c = hc(a, "x")) ? c : a.k.lookup ? 0 : N.la) {
    throw new P(c, a);
  }
  for (c = Wb[fc(a.id, b)];c;c = c.S) {
    var d = c.name;
    if (c.parent.id === a.id && d === b) {
      return c;
    }
  }
  return a.k.lookup(a, b);
}
function Nb(a, b, c, d) {
  ic || (ic = function(a, b, c, d) {
    a || (a = this);
    this.parent = a;
    this.B = a.B;
    this.Z = null;
    this.id = Vb++;
    this.name = b;
    this.mode = c;
    this.k = {};
    this.n = {};
    this.rdev = d;
  }, ic.prototype = {}, Object.defineProperties(ic.prototype, {read:{get:function() {
    return 365 === (this.mode & 365);
  }, set:function(a) {
    a ? this.mode |= 365 : this.mode &= -366;
  }}, write:{get:function() {
    return 146 === (this.mode & 146);
  }, set:function(a) {
    a ? this.mode |= 146 : this.mode &= -147;
  }}, sb:{get:function() {
    return S(this.mode);
  }}, rb:{get:function() {
    return 8192 === (this.mode & 61440);
  }}}));
  a = new ic(a, b, c, d);
  gc(a);
  return a;
}
function S(a) {
  return 16384 === (a & 61440);
}
var jc = {r:0, rs:1052672, "r+":2, w:577, wx:705, xw:705, "w+":578, "wx+":706, "xw+":706, a:1089, ax:1217, xa:1217, "a+":1090, "ax+":1218, "xa+":1218};
function hc(a, b) {
  if (Xb) {
    return 0;
  }
  if (-1 === b.indexOf("r") || a.mode & 292) {
    if (-1 !== b.indexOf("w") && !(a.mode & 146) || -1 !== b.indexOf("x") && !(a.mode & 73)) {
      return N.la;
    }
  } else {
    return N.la;
  }
  return 0;
}
function kc(a, b) {
  try {
    return Pb(a, b), N.Da;
  } catch (c) {
  }
  return hc(a, "wx");
}
function lc() {
  var a;
  a = 4096;
  for (var b = 0;b <= a;b++) {
    if (!Ub[b]) {
      return b;
    }
  }
  throw new P(N.bb);
}
function mc(a) {
  nc || (nc = function() {
  }, nc.prototype = {}, Object.defineProperties(nc.prototype, {object:{get:function() {
    return this.g;
  }, set:function(a) {
    this.g = a;
  }}, Yd:{get:function() {
    return 1 !== (this.flags & 2097155);
  }}, Zd:{get:function() {
    return 0 !== (this.flags & 2097155);
  }}, Xd:{get:function() {
    return this.flags & 1024;
  }}}));
  var b = new nc, c;
  for (c in a) {
    b[c] = a[c];
  }
  a = b;
  b = lc();
  a.fd = b;
  return Ub[b] = a;
}
var Mb = {open:function(a) {
  a.n = Tb[a.g.rdev].n;
  a.n.open && a.n.open(a);
}, H:function() {
  throw new P(N.da);
}};
function Ib(a, b) {
  Tb[a] = {n:b};
}
function oc(a, b) {
  var c = "/" === b, d = !b, f;
  if (c && Sb) {
    throw new P(N.ma);
  }
  if (!c && !d) {
    f = V(b, {Qa:!1});
    b = f.path;
    f = f.g;
    if (f.Z) {
      throw new P(N.ma);
    }
    if (!S(f.mode)) {
      throw new P(N.Ea);
    }
  }
  var d = {type:a, va:{}, Wa:b, tb:[]}, g = a.B(d);
  g.B = d;
  d.root = g;
  c ? Sb = g : f && (f.Z = d, f.B && f.B.tb.push(d));
}
function pc(a, b, c) {
  var d = V(a, {parent:!0}).g;
  a = qc(a);
  if (!a || "." === a || ".." === a) {
    throw new P(N.p);
  }
  var f = kc(d, a);
  if (f) {
    throw new P(f);
  }
  if (!d.k.Y) {
    throw new P(N.K);
  }
  return d.k.Y(d, a, b, c);
}
function rc(a, b) {
  b = (void 0 !== b ? b : 438) & 4095;
  b |= 32768;
  return pc(a, b, 0);
}
function W(a, b) {
  b = (void 0 !== b ? b : 511) & 1023;
  b |= 16384;
  return pc(a, b, 0);
}
function sc(a, b, c) {
  "undefined" === typeof c && (c = b, b = 438);
  return pc(a, b | 8192, c);
}
function tc(a, b) {
  if (!$b(a)) {
    throw new P(N.G);
  }
  var c = V(b, {parent:!0}).g;
  if (!c) {
    throw new P(N.G);
  }
  var d = qc(b), f = kc(c, d);
  if (f) {
    throw new P(f);
  }
  if (!c.k.symlink) {
    throw new P(N.K);
  }
  return c.k.symlink(c, d, a);
}
function bc(a) {
  a = V(a).g;
  if (!a) {
    throw new P(N.G);
  }
  if (!a.k.readlink) {
    throw new P(N.p);
  }
  return $b(dc(a.parent), a.k.readlink(a));
}
function uc(a, b) {
  var c;
  "string" === typeof a ? c = V(a, {ra:!0}).g : c = a;
  if (!c.k.A) {
    throw new P(N.K);
  }
  c.k.A(c, {mode:b & 4095 | c.mode & -4096, timestamp:Date.now()});
}
function vc(a, b) {
  var c;
  if ("" === a) {
    throw new P(N.G);
  }
  var d;
  if ("string" === typeof b) {
    if (d = jc[b], "undefined" === typeof d) {
      throw Error("Unknown file open mode: " + b);
    }
  } else {
    d = b;
  }
  b = d;
  c = b & 64 ? ("undefined" === typeof c ? 438 : c) & 4095 | 32768 : 0;
  var f;
  if ("object" === typeof a) {
    f = a;
  } else {
    a = wc(a);
    try {
      f = V(a, {ra:!(b & 131072)}).g;
    } catch (g) {
    }
  }
  d = !1;
  if (b & 64) {
    if (f) {
      if (b & 128) {
        throw new P(N.Da);
      }
    } else {
      f = pc(a, c, 0), d = !0;
    }
  }
  if (!f) {
    throw new P(N.G);
  }
  8192 === (f.mode & 61440) && (b &= -513);
  if (b & 65536 && !S(f.mode)) {
    throw new P(N.Ea);
  }
  if (!d && (f ? 40960 === (f.mode & 61440) ? c = N.na : S(f.mode) && (0 !== (b & 2097155) || b & 512) ? c = N.P : (c = ["r", "w", "rw"][b & 3], b & 512 && (c += "w"), c = hc(f, c)) : c = N.G, c)) {
    throw new P(c);
  }
  if (b & 512) {
    c = f;
    var h;
    "string" === typeof c ? h = V(c, {ra:!0}).g : h = c;
    if (!h.k.A) {
      throw new P(N.K);
    }
    if (S(h.mode)) {
      throw new P(N.P);
    }
    if (32768 !== (h.mode & 61440)) {
      throw new P(N.p);
    }
    if (c = hc(h, "w")) {
      throw new P(c);
    }
    h.k.A(h, {size:0, timestamp:Date.now()});
  }
  b &= -641;
  f = mc({g:f, path:dc(f), flags:b, seekable:!0, position:0, n:f.n, Gb:[], error:!1});
  f.n.open && f.n.open(f);
  !e.logReadFiles || b & 1 || (xc || (xc = {}), a in xc || (xc[a] = 1, e.printErr("read file: " + a)));
  try {
    Zb.onOpenFile && (h = 0, 1 !== (b & 2097155) && (h |= 1), 0 !== (b & 2097155) && (h |= 2), Zb.onOpenFile(a, h));
  } catch (k) {
    console.log("FS.trackingDelegate['onOpenFile']('" + a + "', flags) threw an exception: " + k.message);
  }
  return f;
}
function yc(a) {
  a.ta && (a.ta = null);
  try {
    a.n.close && a.n.close(a);
  } catch (b) {
    throw b;
  } finally {
    Ub[a.fd] = null;
  }
}
function zc(a, b, c) {
  if (!a.seekable || !a.n.H) {
    throw new P(N.da);
  }
  a.position = a.n.H(a, b, c);
  a.Gb = [];
}
function Ac(a, b, c, d, f, g) {
  if (0 > d || 0 > f) {
    throw new P(N.p);
  }
  if (0 === (a.flags & 2097155)) {
    throw new P(N.ba);
  }
  if (S(a.g.mode)) {
    throw new P(N.P);
  }
  if (!a.n.write) {
    throw new P(N.p);
  }
  a.flags & 1024 && zc(a, 0, 2);
  var h = !0;
  if ("undefined" === typeof f) {
    f = a.position, h = !1;
  } else {
    if (!a.seekable) {
      throw new P(N.da);
    }
  }
  b = a.n.write(a, b, c, d, f, g);
  h || (a.position += b);
  try {
    if (a.path && Zb.onWriteToFile) {
      Zb.onWriteToFile(a.path);
    }
  } catch (k) {
    console.log("FS.trackingDelegate['onWriteToFile']('" + path + "') threw an exception: " + k.message);
  }
  return b;
}
function Bc() {
  P || (P = function(a, b) {
    this.g = b;
    this.zb = function(a) {
      this.R = a;
      for (var b in N) {
        if (N[b] === a) {
          this.code = b;
          break;
        }
      }
    };
    this.zb(a);
    this.message = Fb[a];
  }, P.prototype = Error(), P.prototype.constructor = P, [N.G].forEach(function(a) {
    Ob[a] = new P(a);
    Ob[a].stack = "<generic error, no stack>";
  }));
}
var Cc;
function Dc(a, b) {
  var c = 0;
  a && (c |= 365);
  b && (c |= 146);
  return c;
}
function Ec(a, b, c, d) {
  a = U("string" === typeof a ? a : dc(a), b);
  return rc(a, Dc(c, d));
}
function Fc(a, b, c, d, f, g) {
  a = b ? U("string" === typeof a ? a : dc(a), b) : a;
  d = Dc(d, f);
  f = rc(a, d);
  if (c) {
    if ("string" === typeof c) {
      a = Array(c.length);
      b = 0;
      for (var h = c.length;b < h;++b) {
        a[b] = c.charCodeAt(b);
      }
      c = a;
    }
    uc(f, d | 146);
    a = vc(f, "w");
    Ac(a, c, 0, c.length, 0, g);
    yc(a);
    uc(f, d);
  }
  return f;
}
function X(a, b, c, d) {
  a = U("string" === typeof a ? a : dc(a), b);
  b = Dc(!!c, !!d);
  X.Ua || (X.Ua = 64);
  var f = X.Ua++ << 8 | 0;
  Ib(f, {open:function(a) {
    a.seekable = !1;
  }, close:function() {
    d && d.buffer && d.buffer.length && d(10);
  }, read:function(a, b, d, f) {
    for (var t = 0, n = 0;n < f;n++) {
      var v;
      try {
        v = c();
      } catch (z) {
        throw new P(N.J);
      }
      if (void 0 === v && 0 === t) {
        throw new P(N.Ca);
      }
      if (null === v || void 0 === v) {
        break;
      }
      t++;
      b[d + n] = v;
    }
    t && (a.g.timestamp = Date.now());
    return t;
  }, write:function(a, b, c, f) {
    for (var t = 0;t < f;t++) {
      try {
        d(b[c + t]);
      } catch (n) {
        throw new P(N.J);
      }
    }
    f && (a.g.timestamp = Date.now());
    return t;
  }});
  return sc(a, b, f);
}
function Gc(a) {
  if (a.rb || a.sb || a.link || a.e) {
    return !0;
  }
  var b = !0;
  if ("undefined" !== typeof XMLHttpRequest) {
    throw Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
  }
  if (e.read) {
    try {
      a.e = ab(e.read(a.url), !0), a.o = a.e.length;
    } catch (c) {
      b = !1;
    }
  } else {
    throw Error("Cannot load without read() or XMLHttpRequest.");
  }
  b || lb(N.J);
  return b;
}
var Hc = {}, ic, nc, xc;
function ac(a, b) {
  for (var c = 0, d = a.length - 1;0 <= d;d--) {
    var f = a[d];
    "." === f ? a.splice(d, 1) : ".." === f ? (a.splice(d, 1), c++) : c && (a.splice(d, 1), c--);
  }
  if (b) {
    for (;c--;c) {
      a.unshift("..");
    }
  }
  return a;
}
function wc(a) {
  var b = "/" === a.charAt(0), c = "/" === a.substr(-1);
  (a = ac(a.split("/").filter(function(a) {
    return !!a;
  }), !b).join("/")) || b || (a = ".");
  a && c && (a += "/");
  return (b ? "/" : "") + a;
}
function cc(a) {
  var b = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);
  a = b[0];
  b = b[1];
  if (!a && !b) {
    return ".";
  }
  b && (b = b.substr(0, b.length - 1));
  return a + b;
}
function qc(a) {
  if ("/" === a) {
    return "/";
  }
  var b = a.lastIndexOf("/");
  return -1 === b ? a : a.substr(b + 1);
}
function Qb() {
  var a = Array.prototype.slice.call(arguments, 0);
  return wc(a.join("/"));
}
function U(a, b) {
  return wc(a + "/" + b);
}
function $b() {
  for (var a = "", b = !1, c = arguments.length - 1;-1 <= c && !b;c--) {
    b = 0 <= c ? arguments[c] : "/";
    if ("string" !== typeof b) {
      throw new TypeError("Arguments to path.resolve must be strings");
    }
    if (!b) {
      return "";
    }
    a = b + "/" + a;
    b = "/" === b.charAt(0);
  }
  a = ac(a.split("/").filter(function(a) {
    return !!a;
  }), !b).join("/");
  return (b ? "/" : "") + a || ".";
}
function Ic(a, b) {
  Jc = a;
  Kc = b;
  if (!Lc) {
    return 1;
  }
  if (0 == a) {
    Mc = function() {
      setTimeout(Nc, b);
    }, Oc = "timeout";
  } else {
    if (1 == a) {
      Mc = function() {
        Pc(Nc);
      }, Oc = "rAF";
    } else {
      if (2 == a) {
        if (!window.setImmediate) {
          var c = [];
          window.addEventListener("message", function(a) {
            a.source === window && "__emcc" === a.data && (a.stopPropagation(), c.shift()());
          }, !0);
          window.setImmediate = function(a) {
            c.push(a);
            window.postMessage("__emcc", "*");
          };
        }
        Mc = function() {
          window.setImmediate(Nc);
        };
        Oc = "immediate";
      }
    }
  }
  return 0;
}
function Qc(a, b, c, d, f) {
  e.noExitRuntime = !0;
  assert(!Lc, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");
  Lc = a;
  Rc = d;
  var g = Sc;
  Nc = function() {
    if (!y) {
      if (0 < Tc.length) {
        var b = Date.now(), c = Tc.shift();
        c.fa(c.X);
        if (Uc) {
          var f = Uc, t = 0 == f % 1 ? f - 1 : Math.floor(f);
          Uc = c.Nd ? t : (8 * f + (t + .5)) / 9;
        }
        console.log('main loop blocker "' + c.name + '" took ' + (Date.now() - b) + " ms");
        Vc();
        setTimeout(Nc, 0);
      } else {
        g < Sc || (Wc = Wc + 1 | 0, 1 == Jc && 1 < Kc && 0 != Wc % Kc ? Mc() : ("timeout" === Oc && e.qa && (e.aa("Looks like you are rendering without using requestAnimationFrame for the main loop. You should use 0 for the frame rate in emscripten_set_main_loop in order to use requestAnimationFrame, as that can greatly improve your frame rates!"), Oc = ""), Xc(function() {
          "undefined" !== typeof d ? r.N("vi", a, [d]) : r.N("v", a);
        }), g < Sc || ("object" === typeof SDL && SDL.audio && SDL.audio.vb && SDL.audio.vb(), Mc())));
      }
    }
  };
  f || (b && 0 < b ? Ic(0, 1E3 / b) : Ic(1, 1), Mc());
  if (c) {
    throw "SimulateInfiniteLoop";
  }
}
var Mc = null, Oc = "", Sc = 0, Lc = null, Rc = 0, Jc = 0, Kc = 0, Wc = 0, Tc = [];
function Vc() {
  if (e.setStatus) {
    var a = e.statusMessage || "Please wait...", b = Uc, c = Yc.Qd;
    b ? b < c ? e.setStatus(a + " (" + (c - b) + "/" + c + ")") : e.setStatus(a) : e.setStatus("");
  }
}
function Xc(a) {
  if (!(y || e.preMainLoop && !1 === e.preMainLoop())) {
    try {
      a();
    } catch (b) {
      if (b instanceof ha) {
        return;
      }
      b && "object" === typeof b && b.stack && e.aa("exception thrown: " + [b, b.stack]);
      throw b;
    }
    e.postMainLoop && e.postMainLoop();
  }
}
var Yc = {}, Nc, Uc, Zc = !1, $c = !1, ad = [];
function bd() {
  function a() {
    $c = document.pointerLockElement === c || document.mozPointerLockElement === c || document.webkitPointerLockElement === c || document.msPointerLockElement === c;
  }
  e.preloadPlugins || (e.preloadPlugins = []);
  if (!cd) {
    cd = !0;
    try {
      dd = !0;
    } catch (b) {
      dd = !1, console.log("warning: no blob constructor, cannot create blobs with mimetypes");
    }
    ed = "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : dd ? null : console.log("warning: no BlobBuilder");
    fd = "undefined" != typeof window ? window.URL ? window.URL : window.webkitURL : void 0;
    e.Ya || "undefined" !== typeof fd || (console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."), e.Ya = !0);
    e.preloadPlugins.push({canHandle:function(a) {
      return !e.Ya && /\.(jpg|jpeg|png|bmp)$/i.test(a);
    }, handle:function(a, b, c, h) {
      var k = null;
      if (dd) {
        try {
          k = new Blob([a], {type:gd(b)}), k.size !== a.length && (k = new Blob([(new Uint8Array(a)).buffer], {type:gd(b)}));
        } catch (u) {
          r.V("Blob constructor present but fails: " + u + "; falling back to blob builder");
        }
      }
      k || (k = new ed, k.append((new Uint8Array(a)).buffer), k = k.getBlob());
      var t = fd.createObjectURL(k), n = new Image;
      n.onload = function() {
        assert(n.complete, "Image " + b + " could not be decoded");
        var h = document.createElement("canvas");
        h.width = n.width;
        h.height = n.height;
        h.getContext("2d").drawImage(n, 0, 0);
        e.preloadedImages[b] = h;
        fd.revokeObjectURL(t);
        c && c(a);
      };
      n.onerror = function() {
        console.log("Image " + t + " could not be decoded");
        h && h();
      };
      n.src = t;
    }});
    e.preloadPlugins.push({canHandle:function(a) {
      return !e.be && a.substr(-4) in {".ogg":1, ".wav":1, ".mp3":1};
    }, handle:function(a, b, c, h) {
      function k(h) {
        t || (t = !0, e.preloadedAudios[b] = h, c && c(a));
      }
      function u() {
        t || (t = !0, e.preloadedAudios[b] = new Audio, h && h());
      }
      var t = !1;
      if (dd) {
        try {
          var n = new Blob([a], {type:gd(b)});
        } catch (v) {
          return u();
        }
        var n = fd.createObjectURL(n), z = new Audio;
        z.addEventListener("canplaythrough", function() {
          k(z);
        }, !1);
        z.onerror = function() {
          if (!t) {
            console.log("warning: browser could not fully decode audio " + b + ", trying slower base64 approach");
            for (var c = "", g = 0, h = 0, n = 0;n < a.length;n++) {
              for (g = g << 8 | a[n], h += 8;6 <= h;) {
                var v = g >> h - 6 & 63, h = h - 6, c = c + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[v]
              }
            }
            2 == h ? (c += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(g & 3) << 4], c += "==") : 4 == h && (c += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(g & 15) << 2], c += "=");
            z.src = "data:audio/x-" + b.substr(-3) + ";base64," + c;
            k(z);
          }
        };
        z.src = n;
        hd(function() {
          k(z);
        });
      } else {
        return u();
      }
    }});
    var c = e.canvas;
    c && (c.za = c.requestPointerLock || c.mozRequestPointerLock || c.webkitRequestPointerLock || c.msRequestPointerLock || function() {
    }, c.Na = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || function() {
    }, c.Na = c.Na.bind(document), document.addEventListener("pointerlockchange", a, !1), document.addEventListener("mozpointerlockchange", a, !1), document.addEventListener("webkitpointerlockchange", a, !1), document.addEventListener("mspointerlockchange", a, !1), e.elementPointerLock && c.addEventListener("click", function(a) {
      !$c && c.za && (c.za(), a.preventDefault());
    }, !1));
  }
}
function id(a, b, c, d) {
  if (b && e.qa && a == e.canvas) {
    return e.qa;
  }
  var f, g;
  if (b) {
    g = {antialias:!1, alpha:!1};
    if (d) {
      for (var h in d) {
        g[h] = d[h];
      }
    }
    if (g = GL.createContext(a, g)) {
      f = GL.getContext(g).Gd;
    }
    a.style.backgroundColor = "black";
  } else {
    f = a.getContext("2d");
  }
  if (!f) {
    return null;
  }
  c && (b || assert("undefined" === typeof GLctx, "cannot set in module if GLctx is used, but we are a non-GL context that would replace it"), e.qa = f, b && GL.ae(g), e.ee = b, ad.forEach(function(a) {
    a();
  }), bd());
  return f;
}
var jd = !1, kd = void 0, ld = void 0;
function md(a, b, c) {
  function d() {
    Zc = !1;
    var a = f.parentNode;
    (document.webkitFullScreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.mozFullscreenElement || document.fullScreenElement || document.fullscreenElement || document.msFullScreenElement || document.msFullscreenElement || document.webkitCurrentFullScreenElement) === a ? (f.La = document.cancelFullScreen || document.mozCancelFullScreen || document.webkitCancelFullScreen || document.msExitFullscreen || document.exitFullscreen || function() {
    }, f.La = f.La.bind(document), kd && f.za(), Zc = !0, ld && nd()) : (a.parentNode.insertBefore(f, a), a.parentNode.removeChild(a), ld && od());
    if (e.onFullScreen) {
      e.onFullScreen(Zc);
    }
    pd(f);
  }
  kd = a;
  ld = b;
  qd = c;
  "undefined" === typeof kd && (kd = !0);
  "undefined" === typeof ld && (ld = !1);
  "undefined" === typeof qd && (qd = null);
  var f = e.canvas;
  jd || (jd = !0, document.addEventListener("fullscreenchange", d, !1), document.addEventListener("mozfullscreenchange", d, !1), document.addEventListener("webkitfullscreenchange", d, !1), document.addEventListener("MSFullscreenChange", d, !1));
  var g = document.createElement("div");
  f.parentNode.insertBefore(g, f);
  g.appendChild(f);
  g.q = g.requestFullScreen || g.mozRequestFullScreen || g.msRequestFullscreen || (g.webkitRequestFullScreen ? function() {
    g.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
  } : null);
  c ? g.q({fe:c}) : g.q();
}
var rd = 0;
function sd(a) {
  var b = Date.now();
  if (0 === rd) {
    rd = b + 1E3 / 60;
  } else {
    for (;b + 2 >= rd;) {
      rd += 1E3 / 60;
    }
  }
  b = Math.max(rd - b, 0);
  setTimeout(a, b);
}
function Pc(a) {
  "undefined" === typeof window ? sd(a) : (window.requestAnimationFrame || (window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || sd), window.requestAnimationFrame(a));
}
function hd(a) {
  e.noExitRuntime = !0;
  setTimeout(function() {
    y || a();
  }, 1E4);
}
function gd(a) {
  return {jpg:"image/jpeg", jpeg:"image/jpeg", png:"image/png", bmp:"image/bmp", ogg:"audio/ogg", wav:"audio/wav", mp3:"audio/mpeg"}[a.substr(a.lastIndexOf(".") + 1)];
}
function td(a, b, c) {
  var d = new XMLHttpRequest;
  d.open("GET", a, !0);
  d.responseType = "arraybuffer";
  d.onload = function() {
    200 == d.status || 0 == d.status && d.response ? b(d.response) : c();
  };
  d.onerror = c;
  d.send(null);
}
function ud(a, b, c) {
  td(a, function(c) {
    assert(c, 'Loading data file "' + a + '" failed (no arrayBuffer).');
    b(new Uint8Array(c));
    fb();
  }, function() {
    if (c) {
      c();
    } else {
      throw 'Loading data file "' + a + '" failed.';
    }
  });
  eb();
}
var vd = [];
function wd() {
  var a = e.canvas;
  vd.forEach(function(b) {
    b(a.width, a.height);
  });
}
function nd() {
  if ("undefined" != typeof SDL) {
    var a = Oa[SDL.screen + 0 * r.L >> 2];
    E[SDL.screen + 0 * r.L >> 2] = a | 8388608;
  }
  wd();
}
function od() {
  if ("undefined" != typeof SDL) {
    var a = Oa[SDL.screen + 0 * r.L >> 2];
    E[SDL.screen + 0 * r.L >> 2] = a & -8388609;
  }
  wd();
}
function pd(a, b, c) {
  b && c ? (a.Hb = b, a.pb = c) : (b = a.Hb, c = a.pb);
  var d = b, f = c;
  e.forcedAspectRatio && 0 < e.forcedAspectRatio && (d / f < e.forcedAspectRatio ? d = Math.round(f * e.forcedAspectRatio) : f = Math.round(d / e.forcedAspectRatio));
  if ((document.webkitFullScreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.mozFullscreenElement || document.fullScreenElement || document.fullscreenElement || document.msFullScreenElement || document.msFullscreenElement || document.webkitCurrentFullScreenElement) === a.parentNode && "undefined" != typeof screen) {
    var g = Math.min(screen.width / d, screen.height / f), d = Math.round(d * g), f = Math.round(f * g)
  }
  ld ? (a.width != d && (a.width = d), a.height != f && (a.height = f), "undefined" != typeof a.style && (a.style.removeProperty("width"), a.style.removeProperty("height"))) : (a.width != b && (a.width = b), a.height != c && (a.height = c), "undefined" != typeof a.style && (d != b || f != c ? (a.style.setProperty("width", d + "px", "important"), a.style.setProperty("height", f + "px", "important")) : (a.style.removeProperty("width"), a.style.removeProperty("height"))));
}
var cd, dd, ed, fd, qd;
function G(a) {
  return r.Q(a + 8) + 8 & 4294967288;
}
e._malloc = G;
var xd = 0;
function Y() {
  xd += 4;
  return E[xd - 4 >> 2];
}
function yd() {
  var a;
  a = Y();
  a = Ub[a];
  if (!a) {
    throw new P(N.ba);
  }
  return a;
}
e._i64Add = zd;
e._bitshift64Lshr = Ad;
function Bd(a, b) {
  K.push(function() {
    r.N("vi", a, [b]);
  });
  Bd.level = K.length;
}
e._memcpy = Cd;
function Ca(a) {
  Ca.q || (w = Ma(), Ca.q = !0, assert(r.Q), Ca.kb = r.Q, r.Q = function() {
    x("cannot dynamically allocate, sbrk now has control");
  });
  var b = w;
  return 0 == a || Ca.kb(a) ? b : 4294967295;
}
e._bitshift64Shl = Dd;
e._memmove = Ed;
var Fd = F(1, "i32*", 2);
e.requestFullScreen = function(a, b, c) {
  md(a, b, c);
};
e.requestAnimationFrame = function(a) {
  Pc(a);
};
e.setCanvasSize = function(a, b, c) {
  pd(e.canvas, a, b);
  c || wd();
};
e.pauseMainLoop = function() {
  Mc = null;
  Sc++;
};
e.resumeMainLoop = function() {
  Sc++;
  var a = Jc, b = Kc, c = Lc;
  Lc = null;
  Qc(c, 0, !1, Rc, !0);
  Ic(a, b);
  Mc();
};
e.getUserMedia = function() {
  window.q || (window.q = navigator.getUserMedia || navigator.mozGetUserMedia);
  window.q(void 0);
};
e.createContext = function(a, b, c, d) {
  return id(a, b, c, d);
};
Bc();
Wb = Array(4096);
oc(Q, "/");
W("/tmp");
W("/home");
W("/home/web_user");
(function() {
  W("/dev");
  Ib(259, {read:function() {
    return 0;
  }, write:function(a, b, f, g) {
    return g;
  }});
  sc("/dev/null", 259);
  Hb(1280, Kb);
  Hb(1536, Lb);
  sc("/dev/tty", 1280);
  sc("/dev/tty1", 1536);
  var a;
  if ("undefined" !== typeof crypto) {
    var b = new Uint8Array(1);
    a = function() {
      crypto.getRandomValues(b);
      return b[0];
    };
  } else {
    a = m ? function() {
      return require("crypto").randomBytes(1)[0];
    } : function() {
      return 256 * Math.random() | 0;
    };
  }
  X("/dev", "random", a);
  X("/dev", "urandom", a);
  W("/dev/shm");
  W("/dev/shm/tmp");
})();
W("/proc");
W("/proc/self");
W("/proc/self/fd");
oc({B:function() {
  var a = Nb("/proc/self", "fd", 16895, 73);
  a.k = {lookup:function(a, c) {
    var d = Ub[+c];
    if (!d) {
      throw new P(N.ba);
    }
    var f = {parent:null, B:{Wa:"fake"}, k:{readlink:function() {
      return d.path;
    }}};
    return f.parent = f;
  }};
  return a;
}}, "/proc/self/fd");
Wa.unshift(function() {
  if (!e.noFSInit && !Cc) {
    assert(!Cc, "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)");
    Cc = !0;
    Bc();
    e.stdin = e.stdin;
    e.stdout = e.stdout;
    e.stderr = e.stderr;
    e.stdin ? X("/dev", "stdin", e.stdin) : tc("/dev/tty", "/dev/stdin");
    e.stdout ? X("/dev", "stdout", null, e.stdout) : tc("/dev/tty", "/dev/stdout");
    e.stderr ? X("/dev", "stderr", null, e.stderr) : tc("/dev/tty1", "/dev/stderr");
    var a = vc("/dev/stdin", "r");
    assert(0 === a.fd, "invalid handle for stdin (" + a.fd + ")");
    a = vc("/dev/stdout", "w");
    assert(1 === a.fd, "invalid handle for stdout (" + a.fd + ")");
    a = vc("/dev/stderr", "w");
    assert(2 === a.fd, "invalid handle for stderr (" + a.fd + ")");
  }
});
Xa.push(function() {
  Xb = !1;
});
K.push(function() {
  Cc = !1;
  var a = e._fflush;
  a && a(0);
  for (a = 0;a < Ub.length;a++) {
    var b = Ub[a];
    b && yc(b);
  }
});
e.FS_createFolder = function(a, b, c, d) {
  a = U("string" === typeof a ? a : dc(a), b);
  return W(a, Dc(c, d));
};
e.FS_createPath = function(a, b) {
  a = "string" === typeof a ? a : dc(a);
  for (var c = b.split("/").reverse();c.length;) {
    var d = c.pop();
    if (d) {
      var f = U(a, d);
      try {
        W(f);
      } catch (g) {
      }
      a = f;
    }
  }
  return f;
};
e.FS_createDataFile = Fc;
e.FS_createPreloadedFile = function(a, b, c, d, f, g, h, k, u, t) {
  function n(c) {
    function n(c) {
      t && t();
      k || Fc(a, b, c, d, f, u);
      g && g();
      fb();
    }
    var J = !1;
    e.preloadPlugins.forEach(function(a) {
      !J && a.canHandle(v) && (a.handle(c, v, n, function() {
        h && h();
        fb();
      }), J = !0);
    });
    J || n(c);
  }
  bd();
  var v = b ? $b(U(a, b)) : a;
  eb();
  "string" == typeof c ? ud(c, function(a) {
    n(a);
  }, h) : n(c);
};
e.FS_createLazyFile = function(a, b, c, d, f) {
  var g, h;
  function k() {
    this.ua = !1;
    this.ea = [];
  }
  k.prototype.get = function(a) {
    if (!(a > this.length - 1 || 0 > a)) {
      var b = a % this.chunkSize;
      return this.ob(a / this.chunkSize | 0)[b];
    }
  };
  k.prototype.yb = function(a) {
    this.ob = a;
  };
  k.prototype.Ka = function() {
    var a = new XMLHttpRequest;
    a.open("HEAD", c, !1);
    a.send(null);
    if (!(200 <= a.status && 300 > a.status || 304 === a.status)) {
      throw Error("Couldn't load " + c + ". Status: " + a.status);
    }
    var b = Number(a.getResponseHeader("Content-length")), d, f = 1048576;
    (d = a.getResponseHeader("Accept-Ranges")) && "bytes" === d || (f = b);
    var g = this;
    g.yb(function(a) {
      var d = a * f, h = (a + 1) * f - 1, h = Math.min(h, b - 1);
      if ("undefined" === typeof g.ea[a]) {
        var k = g.ea;
        if (d > h) {
          throw Error("invalid range (" + d + ", " + h + ") or no bytes requested!");
        }
        if (h > b - 1) {
          throw Error("only " + b + " bytes available! programmer error!");
        }
        var n = new XMLHttpRequest;
        n.open("GET", c, !1);
        b !== f && n.setRequestHeader("Range", "bytes=" + d + "-" + h);
        "undefined" != typeof Uint8Array && (n.responseType = "arraybuffer");
        n.overrideMimeType && n.overrideMimeType("text/plain; charset=x-user-defined");
        n.send(null);
        if (!(200 <= n.status && 300 > n.status || 304 === n.status)) {
          throw Error("Couldn't load " + c + ". Status: " + n.status);
        }
        d = void 0 !== n.response ? new Uint8Array(n.response || []) : ab(n.responseText || "", !0);
        k[a] = d;
      }
      if ("undefined" === typeof g.ea[a]) {
        throw Error("doXHR failed!");
      }
      return g.ea[a];
    });
    this.fb = b;
    this.eb = f;
    this.ua = !0;
  };
  if ("undefined" !== typeof XMLHttpRequest) {
    if (!ca) {
      throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
    }
    g = new k;
    Object.defineProperty(g, "length", {get:function() {
      this.ua || this.Ka();
      return this.fb;
    }});
    Object.defineProperty(g, "chunkSize", {get:function() {
      this.ua || this.Ka();
      return this.eb;
    }});
    h = void 0;
  } else {
    h = c, g = void 0;
  }
  var u = Ec(a, b, d, f);
  g ? u.e = g : h && (u.e = null, u.url = h);
  Object.defineProperty(u, "usedBytes", {get:function() {
    return this.e.length;
  }});
  var t = {};
  Object.keys(u.n).forEach(function(a) {
    var b = u.n[a];
    t[a] = function() {
      if (!Gc(u)) {
        throw new P(N.J);
      }
      return b.apply(null, arguments);
    };
  });
  t.read = function(a, b, c, d, f) {
    if (!Gc(u)) {
      throw new P(N.J);
    }
    a = a.g.e;
    if (f >= a.length) {
      return 0;
    }
    d = Math.min(a.length - f, d);
    assert(0 <= d);
    if (a.slice) {
      for (var g = 0;g < d;g++) {
        b[c + g] = a[f + g];
      }
    } else {
      for (g = 0;g < d;g++) {
        b[c + g] = a.get(f + g);
      }
    }
    return d;
  };
  u.n = t;
  return u;
};
e.FS_createLink = function(a, b, c) {
  a = U("string" === typeof a ? a : dc(a), b);
  return tc(c, a);
};
e.FS_createDevice = X;
e.FS_unlink = function(a) {
  var b = V(a, {parent:!0}).g, c = qc(a), d = Pb(b, c), f;
  a: {
    try {
      f = Pb(b, c);
    } catch (g) {
      f = g.R;
      break a;
    }
    var h = hc(b, "wx");
    f = h ? h : S(f.mode) ? N.P : 0;
  }
  if (f) {
    throw f === N.P && (f = N.K), new P(f);
  }
  if (!b.k.unlink) {
    throw new P(N.K);
  }
  if (d.Z) {
    throw new P(N.ma);
  }
  try {
    Zb.willDeletePath && Zb.willDeletePath(a);
  } catch (k) {
    console.log("FS.trackingDelegate['willDeletePath']('" + a + "') threw an exception: " + k.message);
  }
  b.k.unlink(b, c);
  b = fc(d.parent.id, d.name);
  if (Wb[b] === d) {
    Wb[b] = d.S;
  } else {
    for (b = Wb[b];b;) {
      if (b.S === d) {
        b.S = d.S;
        break;
      }
      b = b.S;
    }
  }
  try {
    if (Zb.onDeletePath) {
      Zb.onDeletePath(a);
    }
  } catch (u) {
    console.log("FS.trackingDelegate['onDeletePath']('" + a + "') threw an exception: " + u.message);
  }
};
Wa.unshift(function() {
});
K.push(function() {
});
if (m) {
  var fs = require("fs"), Rb = require("path");
  T.Bb();
}
Qa = p = r.pa(ja);
Ba = !0;
Ra = Qa + Ta;
Sa = w = r.pa(Ra);
assert(Sa < ka, "TOTAL_MEMORY not big enough for stack");
var Gd = F([8, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 6, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 7, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 
0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 6, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0], "i8", 3);
e.hb = {Math:Math, Int8Array:Int8Array, Int16Array:Int16Array, Int32Array:Int32Array, Uint8Array:Uint8Array, Uint16Array:Uint16Array, Uint32Array:Uint32Array, Float32Array:Float32Array, Float64Array:Float64Array, NaN:NaN, Infinity:Infinity};
e.ib = {abort:x, assert:assert, invoke_iiiiiiii:function(a, b, c, d, f, g, h, k) {
  try {
    return e.dynCall_iiiiiiii(a, b, c, d, f, g, h, k);
  } catch (u) {
    if ("number" !== typeof u && "longjmp" !== u) {
      throw u;
    }
    O.setThrew(1, 0);
  }
}, invoke_iiii:function(a, b, c, d) {
  try {
    return e.dynCall_iiii(a, b, c, d);
  } catch (f) {
    if ("number" !== typeof f && "longjmp" !== f) {
      throw f;
    }
    O.setThrew(1, 0);
  }
}, invoke_viiiii:function(a, b, c, d, f, g) {
  try {
    e.dynCall_viiiii(a, b, c, d, f, g);
  } catch (h) {
    if ("number" !== typeof h && "longjmp" !== h) {
      throw h;
    }
    O.setThrew(1, 0);
  }
}, invoke_iiiiiid:function(a, b, c, d, f, g, h) {
  try {
    return e.dynCall_iiiiiid(a, b, c, d, f, g, h);
  } catch (k) {
    if ("number" !== typeof k && "longjmp" !== k) {
      throw k;
    }
    O.setThrew(1, 0);
  }
}, invoke_vi:function(a, b) {
  try {
    e.dynCall_vi(a, b);
  } catch (c) {
    if ("number" !== typeof c && "longjmp" !== c) {
      throw c;
    }
    O.setThrew(1, 0);
  }
}, invoke_vii:function(a, b, c) {
  try {
    e.dynCall_vii(a, b, c);
  } catch (d) {
    if ("number" !== typeof d && "longjmp" !== d) {
      throw d;
    }
    O.setThrew(1, 0);
  }
}, invoke_iiiiiii:function(a, b, c, d, f, g, h) {
  try {
    return e.dynCall_iiiiiii(a, b, c, d, f, g, h);
  } catch (k) {
    if ("number" !== typeof k && "longjmp" !== k) {
      throw k;
    }
    O.setThrew(1, 0);
  }
}, invoke_iiiiid:function(a, b, c, d, f, g) {
  try {
    return e.dynCall_iiiiid(a, b, c, d, f, g);
  } catch (h) {
    if ("number" !== typeof h && "longjmp" !== h) {
      throw h;
    }
    O.setThrew(1, 0);
  }
}, invoke_ii:function(a, b) {
  try {
    return e.dynCall_ii(a, b);
  } catch (c) {
    if ("number" !== typeof c && "longjmp" !== c) {
      throw c;
    }
    O.setThrew(1, 0);
  }
}, invoke_viii:function(a, b, c, d) {
  try {
    e.dynCall_viii(a, b, c, d);
  } catch (f) {
    if ("number" !== typeof f && "longjmp" !== f) {
      throw f;
    }
    O.setThrew(1, 0);
  }
}, invoke_v:function(a) {
  try {
    e.dynCall_v(a);
  } catch (b) {
    if ("number" !== typeof b && "longjmp" !== b) {
      throw b;
    }
    O.setThrew(1, 0);
  }
}, invoke_iiiiiiiii:function(a, b, c, d, f, g, h, k, u) {
  try {
    return e.dynCall_iiiiiiiii(a, b, c, d, f, g, h, k, u);
  } catch (t) {
    if ("number" !== typeof t && "longjmp" !== t) {
      throw t;
    }
    O.setThrew(1, 0);
  }
}, invoke_iiiii:function(a, b, c, d, f) {
  try {
    return e.dynCall_iiiii(a, b, c, d, f);
  } catch (g) {
    if ("number" !== typeof g && "longjmp" !== g) {
      throw g;
    }
    O.setThrew(1, 0);
  }
}, invoke_viiiiii:function(a, b, c, d, f, g, h) {
  try {
    e.dynCall_viiiiii(a, b, c, d, f, g, h);
  } catch (k) {
    if ("number" !== typeof k && "longjmp" !== k) {
      throw k;
    }
    O.setThrew(1, 0);
  }
}, invoke_iii:function(a, b, c) {
  try {
    return e.dynCall_iii(a, b, c);
  } catch (d) {
    if ("number" !== typeof d && "longjmp" !== d) {
      throw d;
    }
    O.setThrew(1, 0);
  }
}, invoke_iiiiii:function(a, b, c, d, f, g) {
  try {
    return e.dynCall_iiiiii(a, b, c, d, f, g);
  } catch (h) {
    if ("number" !== typeof h && "longjmp" !== h) {
      throw h;
    }
    O.setThrew(1, 0);
  }
}, invoke_viiii:function(a, b, c, d, f) {
  try {
    e.dynCall_viiii(a, b, c, d, f);
  } catch (g) {
    if ("number" !== typeof g && "longjmp" !== g) {
      throw g;
    }
    O.setThrew(1, 0);
  }
}, _fabs:Db, _strftime:Ab, _pthread_cond_wait:function() {
  return 0;
}, _emscripten_get_now_is_monotonic:kb, _pthread_key_create:function(a) {
  if (0 == a) {
    return N.p;
  }
  E[a >> 2] = Eb;
  Cb[Eb] = 0;
  Eb++;
  return 0;
}, _abort:function() {
  e.abort();
}, ___cxa_guard_acquire:function(a) {
  return D[a >> 0] ? 0 : D[a >> 0] = 1;
}, ___setErrNo:lb, __addDays:zb, ___assert_fail:function(a, b, c, d) {
  y = !0;
  throw "Assertion failed: " + C(a) + ", at: " + [b ? C(b) : "unknown filename", c, d ? C(d) : "unknown function"] + " at " + Ka();
}, ___cxa_allocate_exception:function(a) {
  return G(a);
}, __ZSt18uncaught_exceptionv:nb, __isLeapYear:vb, ___cxa_guard_release:function() {
}, _clock_gettime:function(a, b) {
  var c;
  if (0 === a) {
    c = Date.now();
  } else {
    if (1 === a && kb()) {
      c = M();
    } else {
      return lb(N.p), -1;
    }
  }
  E[b >> 2] = c / 1E3 | 0;
  E[b + 4 >> 2] = c % 1E3 * 1E6 | 0;
  return 0;
}, _strftime_l:function(a, b, c, d) {
  return Ab(a, b, c, d);
}, _emscripten_set_main_loop_timing:Ic, _sbrk:Ca, ___cxa_begin_catch:function(a) {
  nb.q--;
  pb.push(a);
  var b = rb(a);
  b && qb[b].Za++;
  return a;
}, _emscripten_memcpy_big:function(a, b, c) {
  H.set(H.subarray(b, b + c), a);
  return a;
}, ___resumeException:function(a) {
  ob || (ob = a);
  var b = rb(a);
  b && (qb[b].Za = 0);
  throw a + " - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch.";
}, ___cxa_find_matching_catch:tb, _sysconf:function(a) {
  switch(a) {
    case 30:
      return 4096;
    case 85:
      return I / 4096;
    case 132:
    ;
    case 133:
    ;
    case 12:
    ;
    case 137:
    ;
    case 138:
    ;
    case 15:
    ;
    case 235:
    ;
    case 16:
    ;
    case 17:
    ;
    case 18:
    ;
    case 19:
    ;
    case 20:
    ;
    case 149:
    ;
    case 13:
    ;
    case 10:
    ;
    case 236:
    ;
    case 153:
    ;
    case 9:
    ;
    case 21:
    ;
    case 22:
    ;
    case 159:
    ;
    case 154:
    ;
    case 14:
    ;
    case 77:
    ;
    case 78:
    ;
    case 139:
    ;
    case 80:
    ;
    case 81:
    ;
    case 82:
    ;
    case 68:
    ;
    case 67:
    ;
    case 164:
    ;
    case 11:
    ;
    case 29:
    ;
    case 47:
    ;
    case 48:
    ;
    case 95:
    ;
    case 52:
    ;
    case 51:
    ;
    case 46:
      return 200809;
    case 79:
      return 0;
    case 27:
    ;
    case 246:
    ;
    case 127:
    ;
    case 128:
    ;
    case 23:
    ;
    case 24:
    ;
    case 160:
    ;
    case 161:
    ;
    case 181:
    ;
    case 182:
    ;
    case 242:
    ;
    case 183:
    ;
    case 184:
    ;
    case 243:
    ;
    case 244:
    ;
    case 245:
    ;
    case 165:
    ;
    case 178:
    ;
    case 179:
    ;
    case 49:
    ;
    case 50:
    ;
    case 168:
    ;
    case 169:
    ;
    case 175:
    ;
    case 170:
    ;
    case 171:
    ;
    case 172:
    ;
    case 97:
    ;
    case 76:
    ;
    case 32:
    ;
    case 173:
    ;
    case 35:
      return -1;
    case 176:
    ;
    case 177:
    ;
    case 7:
    ;
    case 155:
    ;
    case 8:
    ;
    case 157:
    ;
    case 125:
    ;
    case 126:
    ;
    case 92:
    ;
    case 93:
    ;
    case 129:
    ;
    case 130:
    ;
    case 131:
    ;
    case 94:
    ;
    case 91:
      return 1;
    case 74:
    ;
    case 60:
    ;
    case 69:
    ;
    case 70:
    ;
    case 4:
      return 1024;
    case 31:
    ;
    case 42:
    ;
    case 72:
      return 32;
    case 87:
    ;
    case 26:
    ;
    case 33:
      return 2147483647;
    case 34:
    ;
    case 1:
      return 47839;
    case 38:
    ;
    case 36:
      return 99;
    case 43:
    ;
    case 37:
      return 2048;
    case 0:
      return 2097152;
    case 3:
      return 65536;
    case 28:
      return 32768;
    case 44:
      return 32767;
    case 75:
      return 16384;
    case 39:
      return 1E3;
    case 89:
      return 700;
    case 71:
      return 256;
    case 40:
      return 255;
    case 2:
      return 100;
    case 180:
      return 64;
    case 25:
      return 20;
    case 5:
      return 16;
    case 6:
      return 6;
    case 73:
      return 4;
    case 84:
      return "object" === typeof navigator ? navigator.hardwareConcurrency || 1 : 1;
  }
  lb(N.p);
  return -1;
}, _pthread_getspecific:function(a) {
  return Cb[a] || 0;
}, __arraySum:wb, _pthread_self:function() {
  return 0;
}, _pthread_mutex_unlock:function() {
}, _pthread_once:Bb, ___syscall54:function(a, b) {
  xd = b;
  try {
    var c = yd(), d = Y();
    switch(d) {
      case 21505:
        return c.tty ? 0 : -N.W;
      case 21506:
        return c.tty ? 0 : -N.W;
      case 21519:
        if (!c.tty) {
          return -N.W;
        }
        var f = Y();
        return E[f >> 2] = 0;
      case 21520:
        return c.tty ? -N.p : -N.W;
      case 21531:
        f = Y();
        if (!c.n.qb) {
          throw new P(N.W);
        }
        return c.n.qb(c, d, f);
      default:
        x("bad ioctl syscall " + d);
    }
  } catch (g) {
    return "undefined" !== typeof Hc && g instanceof P || x(g), -g.R;
  }
}, ___unlock:function() {
}, _pthread_cleanup_pop:function() {
  assert(Bd.level == K.length, "cannot pop if something else added meanwhile!");
  K.pop();
  Bd.level = K.length;
}, _pthread_cond_broadcast:function() {
  return 0;
}, _emscripten_set_main_loop:Qc, _emscripten_get_now:M, _pthread_setspecific:function(a, b) {
  if (!(a in Cb)) {
    return N.p;
  }
  Cb[a] = b;
  return 0;
}, ___cxa_atexit:function() {
  return jb.apply(null, arguments);
}, ___cxa_throw:function(a, b, c) {
  qb[a] = {ub:a, Ia:a, type:b, Od:c, Za:0};
  ob = a;
  "uncaught_exception" in nb ? nb.q++ : nb.q = 1;
  throw a + " - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch.";
}, ___lock:function() {
}, ___syscall6:function(a, b) {
  xd = b;
  try {
    var c = yd();
    yc(c);
    return 0;
  } catch (d) {
    return "undefined" !== typeof Hc && d instanceof P || x(d), -d.R;
  }
}, _pthread_cleanup_push:Bd, _time:function(a) {
  var b = Date.now() / 1E3 | 0;
  a && (E[a >> 2] = b);
  return b;
}, _pthread_mutex_lock:function() {
}, _atexit:jb, ___syscall140:function(a, b) {
  xd = b;
  try {
    var c = yd(), d = Y(), f = Y(), g = Y(), h = Y();
    assert(0 === d);
    zc(c, f, h);
    E[g >> 2] = c.position;
    c.ta && 0 === f && 0 === h && (c.ta = null);
    return 0;
  } catch (k) {
    return "undefined" !== typeof Hc && k instanceof P || x(k), -k.R;
  }
}, ___syscall145:function(a, b) {
  xd = b;
  try {
    var c = yd(), d = Y(), f;
    a: {
      for (var g = Y(), h = 0, k = 0;k < g;k++) {
        var u = E[d + (8 * k + 4) >> 2], t, n = c, v = E[d + 8 * k >> 2], z = u, B = void 0, J = D;
        if (0 > z || 0 > B) {
          throw new P(N.p);
        }
        if (1 === (n.flags & 2097155)) {
          throw new P(N.ba);
        }
        if (S(n.g.mode)) {
          throw new P(N.P);
        }
        if (!n.n.read) {
          throw new P(N.p);
        }
        var R = !0;
        if ("undefined" === typeof B) {
          B = n.position, R = !1;
        } else {
          if (!n.seekable) {
            throw new P(N.da);
          }
        }
        var Yb = n.n.read(n, J, v, z, B);
        R || (n.position += Yb);
        t = Yb;
        if (0 > t) {
          f = -1;
          break a;
        }
        h += t;
        if (t < u) {
          break;
        }
      }
      f = h;
    }
    return f;
  } catch (sb) {
    return "undefined" !== typeof Hc && sb instanceof P || x(sb), -sb.R;
  }
}, ___syscall146:function(a, b) {
  xd = b;
  try {
    var c = yd(), d = Y(), f;
    a: {
      for (var g = Y(), h = 0, k = 0;k < g;k++) {
        var u = Ac(c, D, E[d + 8 * k >> 2], E[d + (8 * k + 4) >> 2], void 0);
        if (0 > u) {
          f = -1;
          break a;
        }
        h += u;
      }
      f = h;
    }
    return f;
  } catch (t) {
    return "undefined" !== typeof Hc && t instanceof P || x(t), -t.R;
  }
}, STACKTOP:p, STACK_MAX:Ra, tempDoublePtr:ib, ABORT:y, cttz_i8:Gd, ___dso_handle:Fd};
// EMSCRIPTEN_START_ASM

var O = (unwasmed)


// EMSCRIPTEN_END_ASM
(e.hb, e.ib, buffer);
e.runPostSets = O.runPostSets;
e.___cxa_can_catch = O.___cxa_can_catch;
e._fflush = O._fflush;
e._main = O._main;
e.___cxa_is_pointer_type = O.___cxa_is_pointer_type;
var zd = e._i64Add = O._i64Add, Ed = e._memmove = O._memmove, mb = e._i64Subtract = O._i64Subtract, ub = e._memset = O._memset, G = e._malloc = O._malloc, Cd = e._memcpy = O._memcpy, hb = e.__GLOBAL__sub_I_iostream_cpp = O.__GLOBAL__sub_I_iostream_cpp, Ad = e._bitshift64Lshr = O._bitshift64Lshr, Ja = e._free = O._free, gb = e.__GLOBAL__I_000101 = O.__GLOBAL__I_000101;
e.___errno_location = O.___errno_location;
var Dd = e._bitshift64Shl = O._bitshift64Shl;
e.dynCall_iiiiiiii = O.dynCall_iiiiiiii;
e.dynCall_iiii = O.dynCall_iiii;
e.dynCall_viiiii = O.dynCall_viiiii;
e.dynCall_iiiiiid = O.dynCall_iiiiiid;
e.dynCall_vi = O.dynCall_vi;
e.dynCall_vii = O.dynCall_vii;
e.dynCall_iiiiiii = O.dynCall_iiiiiii;
e.dynCall_iiiiid = O.dynCall_iiiiid;
e.dynCall_ii = O.dynCall_ii;
e.dynCall_viii = O.dynCall_viii;
e.dynCall_v = O.dynCall_v;
e.dynCall_iiiiiiiii = O.dynCall_iiiiiiiii;
e.dynCall_iiiii = O.dynCall_iiiii;
e.dynCall_viiiiii = O.dynCall_viiiiii;
e.dynCall_iii = O.dynCall_iii;
e.dynCall_iiiiii = O.dynCall_iiiiii;
e.dynCall_viiii = O.dynCall_viiii;
r.ia = O.stackAlloc;
r.Ba = O.stackSave;
r.ja = O.stackRestore;
r.Pd = O.establishStackSpace;
r.Ab = O.setTempRet0;
r.nb = O.getTempRet0;
if (L) {
  if ("function" === typeof e.locateFile ? L = e.locateFile(L) : e.memoryInitializerPrefixURL && (L = e.memoryInitializerPrefixURL + L), m || da) {
    var Hd = e.readBinary(L);
    H.set(Hd, r.Ha);
  } else {
    var Jd = function() {
      ud(L, Id, function() {
        throw "could not load memory initializer " + L;
      });
    };
    eb();
    var Id = function(a) {
      a.byteLength && (a = new Uint8Array(a));
      H.set(a, r.Ha);
      fb();
    }, Kd = e.memoryInitializerRequest;
    if (Kd) {
      var Ld = function() {
        200 !== Kd.status && 0 !== Kd.status ? (console.warn("a problem seems to have happened with Module.memoryInitializerRequest, status: " + Kd.status + ", retrying " + L), Jd()) : Id(Kd.response);
      };
      Kd.response ? setTimeout(Ld, 0) : Kd.addEventListener("load", Ld);
    } else {
      Jd();
    }
  }
}
function ha(a) {
  this.name = "ExitStatus";
  this.message = "Program terminated with exit(" + a + ")";
  this.status = a;
}
ha.prototype = Error();
ha.prototype.constructor = ha;
var Md = null, db = function Nd() {
  e.calledRun || Od();
  e.calledRun || (db = Nd);
};
e.callMain = e.Ld = function(a) {
  function b() {
    for (var a = 0;3 > a;a++) {
      d.push(0);
    }
  }
  assert(0 == bb, "cannot call main when async dependencies remain! (listen on __ATMAIN__)");
  assert(0 == Va.length, "cannot call main when preRun functions remain to be called");
  a = a || [];
  Da || (Da = !0, Ua(Wa));
  var c = a.length + 1, d = [F(ab(e.thisProgram), "i8", 0)];
  b();
  for (var f = 0;f < c - 1;f += 1) {
    d.push(F(ab(a[f]), "i8", 0)), b();
  }
  d.push(0);
  d = F(d, "i32", 0);
  try {
    var g = e._main(c, d, 0);
    Pd(g, !0);
  } catch (h) {
    if (!(h instanceof ha)) {
      if ("SimulateInfiniteLoop" == h) {
        e.noExitRuntime = !0;
      } else {
        throw h && "object" === typeof h && h.stack && e.aa("exception thrown: " + [h, h.stack]), h;
      }
    }
  } finally {
  }
};
function Od(a) {
  function b() {
    if (!e.calledRun && (e.calledRun = !0, !y)) {
      Da || (Da = !0, Ua(Wa));
      Ua(Xa);
      if (e.onRuntimeInitialized) {
        e.onRuntimeInitialized();
      }
      e._main && Qd && e.callMain(a);
      if (e.postRun) {
        for ("function" == typeof e.postRun && (e.postRun = [e.postRun]);e.postRun.length;) {
          $a(e.postRun.shift());
        }
      }
      Ua(Ya);
    }
  }
  a = a || e.arguments;
  null === Md && (Md = Date.now());
  if (!(0 < bb)) {
    if (e.preRun) {
      for ("function" == typeof e.preRun && (e.preRun = [e.preRun]);e.preRun.length;) {
        Za(e.preRun.shift());
      }
    }
    Ua(Va);
    0 < bb || e.calledRun || (e.setStatus ? (e.setStatus("Running..."), setTimeout(function() {
      setTimeout(function() {
        e.setStatus("");
      }, 1);
      b();
    }, 1)) : b());
  }
}
e.run = e.run = Od;
function Pd(a, b) {
  if (!b || !e.noExitRuntime) {
    if (!e.noExitRuntime && (y = !0, p = void 0, Ua(K), e.onExit)) {
      e.onExit(a);
    }
    m ? (process.stdout.once("drain", function() {
      process.exit(a);
    }), console.log(" "), setTimeout(function() {
      process.exit(a);
    }, 500)) : da && "function" === typeof quit && quit(a);
    throw new ha(a);
  }
}
e.exit = e.exit = Pd;
var Rd = [];
function x(a) {
  void 0 !== a ? (e.print(a), e.aa(a), a = JSON.stringify(a)) : a = "";
  y = !0;
  var b = "abort(" + a + ") at " + Ka() + "\nIf this abort() is unexpected, build with -s ASSERTIONS=1 which can give more information.";
  Rd && Rd.forEach(function(c) {
    b = c(b, a);
  });
  throw b;
}
e.abort = e.abort = x;
if (e.preInit) {
  for ("function" == typeof e.preInit && (e.preInit = [e.preInit]);0 < e.preInit.length;) {
    e.preInit.pop()();
  }
}
var Qd = !0;
e.noInitialRun && (Qd = !1);
Od();




  return Module;
}

// This file implements a browser utility function to asychronously fetch,
// decode and compile a given WebAssembly module. The caller passes in the url
// of the .wasm file and the returned promise resolves to a compiled (but
// unlinked) module.

var loadWebAssembly = (function() {
  // *** Environment setup code ***
  var ENVIRONMENT_IS_WEB = typeof window === 'object';
  var ENVIRONMENT_IS_WORKER = typeof importScripts === 'function';
  var ENVIRONMENT_IS_NODE = typeof process === 'object' && typeof require === 'function' && !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_WORKER;
  var ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;

  var Module = {};
  function assert(x, y) {
    if (!x) throw 'assert failed: ' + y + ' at ' + new Error().stack;
  }

  if (ENVIRONMENT_IS_NODE) {
    Module['print'] = function print(x) {
      process['stdout'].write(x + '\n');
    };
    var nodeFS = require('fs');
    var nodePath = require('path');
    Module['read'] = function read(filename, binary) {
      filename = nodePath['normalize'](filename);
      var ret = nodeFS['readFileSync'](filename);
      // The path is absolute if the normalized version is the same as the resolved.
      if (!ret && filename != nodePath['resolve'](filename)) {
        filename = path.join(__dirname, '..', 'src', filename);
        ret = nodeFS['readFileSync'](filename);
      }
      if (ret && !binary) ret = ret.toString();
      return ret;
    };
    Module['readBinary'] = function readBinary(filename) {
      var ret = Module['read'](filename, true);
      if (!ret.buffer) {
        ret = new Uint8Array(ret);
      }
      assert(ret.buffer);
      return ret;
    };
    Module['load'] = function load(f) {
      globalEval(read(f));
    };
  } else if (ENVIRONMENT_IS_SHELL) {
    if (typeof read != 'undefined') {
      Module['read'] = read;
    } else {
      Module['read'] = function read() { throw 'no read() available (jsc?)' };
    }
    Module['readBinary'] = function readBinary(f) {
      if (typeof readbuffer === 'function') {
        return new Uint8Array(readbuffer(f));
      }
      var data = read(f, 'binary');
      assert(typeof data === 'object');
      return data;
    };
  } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
    Module['read'] = function read(url) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, false);
      xhr.send(null);
      return xhr.responseText;
    };
    if (typeof console !== 'undefined') {
      if (!Module['print']) Module['print'] = function print(x) {
        console.log(x);
      };
    }
    if (ENVIRONMENT_IS_WORKER) {
      Module['load'] = importScripts;
    }
    if (ENVIRONMENT_IS_WEB) {
      Module['loadScriptFromBlob'] = function(blob) {
        var url = URL.createObjectURL(blob);
        function after() {
          URL.revokeObjectURL(url);
        }
        var script = document.createElement('script');
        script.onload = script.onerror = after;
        script.src = url;
        document.body.appendChild(script);
      };
    } else {
      Module['loadScriptFromBlob'] = function(blob) {
        var url = URL.createObjectURL(blob);
        importScripts(url);
        URL.revokeObjectURL(url);
      };
    }
  } else {
    // Unreachable because SHELL is dependant on the others
    throw 'Unknown runtime environment. Where are we?';
  }

  function globalEval(x) {
    eval.call(null, x);
  }
  if (!Module['load'] && Module['read']) {
    Module['load'] = function load(f) {
      globalEval(Module['read'](f));
    };
  }
  if (!Module['print']) {
    Module['print'] = function(){};
  }
  if (!Module['loadScriptFromBlob']) {
    Module['loadScriptFromBlob'] = function(blob) {
      assert(blob.args.length === 1);
      var array = blob.args[0];
      var str = [];
      for (var i = 0; i < array.length; i++) {
        var chr = array[i];
        if (chr === 0) break;
        if (chr > 0xFF) {
          chr &= 0xFF;
        }
        str.push(String.fromCharCode(chr));
      }
      globalEval(str.join(''));
    };
  }
  if (typeof Worker === 'undefined') {
    Worker = function(url) {
      var that = this;
      var onmessage = eval('(function(postMessage) { var onmessage, Module; ' + Module['read'](url) + '; return onmessage })')(function(data) {
        that.onmessage({ data: data });
      });
      this.postMessage = function(data) {
        onmessage({ data: data });
      };
    };
  }
  if (typeof console === 'undefined') {
    console = {
      log: function(x) { Module['print'](x) },
      error: function(x) { Module['printErr'](x) }
    };
  }
  if (typeof Blob === 'undefined') {
    Blob = function(args) {
      this.args = args;
    };
  }
  // *** Environment setup code ***

  // main

  var globalNameCounter = 0;
  var jobs = {};

  reportWebAssembly = function(callbackName, asm) { // global scope, so the new script tags can find it
    var job = jobs[callbackName];
    if (!job) throw 'bad job';
    delete jobs[callbackName];
    if (job.resolve) {
      job.resolve(asm);
    } else {
      // synchronous execution, then() has not been called yet. queue us for later
      job.then = function(resolve) {
        resolve(asm);
      };
    }
  };

  var workerURL = 'load-wasm-worker.js';
  var worker = new Worker(workerURL);
  worker.onmessage = function(e) {
    if (typeof e.data !== 'object') {
      throw "load-wasm-worker.js failed with: " + e.data;
      return;
    }
    var callbackName = e.data.callbackName;
    Module['loadScriptFromBlob'](e.data.data);
  };

  return function(packedURL) {
    var job = {
      callbackName: 'onFinishLoadWebAssembly_' + globalNameCounter++,
      then: function(resolve) {
        this.resolve = resolve;
      }
    };
    globalEval(job.callbackName + ' = function(asm) { reportWebAssembly("' + job.callbackName + '", asm) }');
    jobs[job.callbackName] = job;
    worker.postMessage({ url: packedURL, callbackName: job.callbackName });
    return job;
  }
})();



// note: web worker messages must be queued, as we delay the scripts chance to listen to them

var Module;

loadWebAssembly("test_wasm.wasm", 'load-wasm-worker.js').then(function(unwasmed) {
  if (typeof importScripts === 'function') {
    onmessage = null;
  }
  Module = runEmscriptenModule(typeof Module !== 'undefined' ? Module : {}, unwasmed);
  if (typeof importScripts === 'function' && onmessage) {
    queuedMessages.forEach(function(e) {
      onmessage(e);
    });
  }
});

if (typeof importScripts === 'function') {
  var queuedMessages = [];
  onmessage = function(e) {
    queuedMessages.push(e);
  };
}
