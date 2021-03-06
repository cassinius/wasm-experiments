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
var L = "base_tests_wasm.html.mem", ib = r.pa(F(12, "i8", 2), 8);
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

var O = (function(global,env,buffer) {
"use asm";var a=new global.Int8Array(buffer);var b=new global.Int16Array(buffer);var c=new global.Int32Array(buffer);var d=new global.Uint8Array(buffer);var e=new global.Uint16Array(buffer);var f=new global.Uint32Array(buffer);var g=new global.Float32Array(buffer);var h=new global.Float64Array(buffer);var i=env.STACKTOP|0;var j=env.STACK_MAX|0;var k=env.tempDoublePtr|0;var l=env.ABORT|0;var m=env.cttz_i8|0;var n=env.___dso_handle|0;var o=0;var p=0;var q=0;var r=0;var s=global.NaN,t=global.Infinity;var u=0,v=0,w=0,x=0,y=0.0,z=0,A=0,B=0,C=0.0;var D=0;var E=0;var F=0;var G=0;var H=0;var I=0;var J=0;var K=0;var L=0;var M=0;var N=global.Math.floor;var O=global.Math.abs;var P=global.Math.sqrt;var Q=global.Math.pow;var R=global.Math.cos;var S=global.Math.sin;var T=global.Math.tan;var U=global.Math.acos;var V=global.Math.asin;var W=global.Math.atan;var X=global.Math.atan2;var Y=global.Math.exp;var Z=global.Math.log;var _=global.Math.ceil;var $=global.Math.imul;var aa=global.Math.min;var ba=global.Math.clz32;var ca=env.abort;var da=env.assert;var ea=env.invoke_iiiiiiii;var fa=env.invoke_iiii;var ga=env.invoke_viiiii;var ha=env.invoke_iiiiiid;var ia=env.invoke_vi;var ja=env.invoke_vii;var ka=env.invoke_iiiiiii;var la=env.invoke_iiiiid;var ma=env.invoke_ii;var na=env.invoke_viii;var oa=env.invoke_v;var pa=env.invoke_iiiiiiiii;var qa=env.invoke_iiiii;var ra=env.invoke_viiiiii;var sa=env.invoke_iii;var ta=env.invoke_iiiiii;var ua=env.invoke_viiii;var va=env._fabs;var wa=env._strftime;var xa=env._pthread_cond_wait;var ya=env._emscripten_get_now_is_monotonic;var za=env._pthread_key_create;var Aa=env._abort;var Ba=env.___cxa_guard_acquire;var Ca=env.___setErrNo;var Da=env.__addDays;var Ea=env.___assert_fail;var Fa=env.___cxa_allocate_exception;var Ga=env.__ZSt18uncaught_exceptionv;var Ha=env.__isLeapYear;var Ia=env.___cxa_guard_release;var Ja=env._clock_gettime;var Ka=env._strftime_l;var La=env._emscripten_set_main_loop_timing;var Ma=env._sbrk;var Na=env.___cxa_begin_catch;var Oa=env._emscripten_memcpy_big;var Pa=env.___resumeException;var Qa=env.___cxa_find_matching_catch;var Ra=env._sysconf;var Sa=env._pthread_getspecific;var Ta=env.__arraySum;var Ua=env._pthread_self;var Va=env._pthread_mutex_unlock;var Wa=env._pthread_once;var Xa=env.___syscall54;var Ya=env.___unlock;var Za=env._pthread_cleanup_pop;var _a=env._pthread_cond_broadcast;var $a=env._emscripten_set_main_loop;var ab=env._emscripten_get_now;var bb=env._pthread_setspecific;var cb=env.___cxa_atexit;var db=env.___cxa_throw;var eb=env.___lock;var fb=env.___syscall6;var gb=env._pthread_cleanup_push;var hb=env._time;var ib=env._pthread_mutex_lock;var jb=env._atexit;var kb=env.___syscall140;var lb=env.___syscall145;var mb=env.___syscall146;var nb=0.0;
// EMSCRIPTEN_START_FUNCS

function qe(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0;
 do if (a >>> 0 < 245) {
  o = a >>> 0 < 11 ? 16 : a + 11 & -8;
  a = o >>> 3;
  i = c[1536] | 0;
  d = i >>> a;
  if (d & 3) {
   a = (d & 1 ^ 1) + a | 0;
   e = a << 1;
   d = 6184 + (e << 2) | 0;
   e = 6184 + (e + 2 << 2) | 0;
   f = c[e >> 2] | 0;
   g = f + 8 | 0;
   h = c[g >> 2] | 0;
   do if ((d | 0) != (h | 0)) {
    if (h >>> 0 < (c[1540] | 0) >>> 0) Aa();
    b = h + 12 | 0;
    if ((c[b >> 2] | 0) == (f | 0)) {
     c[b >> 2] = d;
     c[e >> 2] = h;
     break;
    } else Aa();
   } else c[1536] = i & ~(1 << a); while (0);
   M = a << 3;
   c[f + 4 >> 2] = M | 3;
   M = f + (M | 4) | 0;
   c[M >> 2] = c[M >> 2] | 1;
   M = g;
   return M | 0;
  }
  h = c[1538] | 0;
  if (o >>> 0 > h >>> 0) {
   if (d) {
    e = 2 << a;
    e = d << a & (e | 0 - e);
    e = (e & 0 - e) + -1 | 0;
    j = e >>> 12 & 16;
    e = e >>> j;
    f = e >>> 5 & 8;
    e = e >>> f;
    g = e >>> 2 & 4;
    e = e >>> g;
    d = e >>> 1 & 2;
    e = e >>> d;
    a = e >>> 1 & 1;
    a = (f | j | g | d | a) + (e >>> a) | 0;
    e = a << 1;
    d = 6184 + (e << 2) | 0;
    e = 6184 + (e + 2 << 2) | 0;
    g = c[e >> 2] | 0;
    j = g + 8 | 0;
    f = c[j >> 2] | 0;
    do if ((d | 0) != (f | 0)) {
     if (f >>> 0 < (c[1540] | 0) >>> 0) Aa();
     b = f + 12 | 0;
     if ((c[b >> 2] | 0) == (g | 0)) {
      c[b >> 2] = d;
      c[e >> 2] = f;
      k = c[1538] | 0;
      break;
     } else Aa();
    } else {
     c[1536] = i & ~(1 << a);
     k = h;
    } while (0);
    M = a << 3;
    h = M - o | 0;
    c[g + 4 >> 2] = o | 3;
    i = g + o | 0;
    c[g + (o | 4) >> 2] = h | 1;
    c[g + M >> 2] = h;
    if (k) {
     f = c[1541] | 0;
     d = k >>> 3;
     b = d << 1;
     e = 6184 + (b << 2) | 0;
     a = c[1536] | 0;
     d = 1 << d;
     if (a & d) {
      a = 6184 + (b + 2 << 2) | 0;
      b = c[a >> 2] | 0;
      if (b >>> 0 < (c[1540] | 0) >>> 0) Aa(); else {
       l = a;
       m = b;
      }
     } else {
      c[1536] = a | d;
      l = 6184 + (b + 2 << 2) | 0;
      m = e;
     }
     c[l >> 2] = f;
     c[m + 12 >> 2] = f;
     c[f + 8 >> 2] = m;
     c[f + 12 >> 2] = e;
    }
    c[1538] = h;
    c[1541] = i;
    M = j;
    return M | 0;
   }
   a = c[1537] | 0;
   if (a) {
    d = (a & 0 - a) + -1 | 0;
    L = d >>> 12 & 16;
    d = d >>> L;
    K = d >>> 5 & 8;
    d = d >>> K;
    M = d >>> 2 & 4;
    d = d >>> M;
    a = d >>> 1 & 2;
    d = d >>> a;
    e = d >>> 1 & 1;
    e = c[6448 + ((K | L | M | a | e) + (d >>> e) << 2) >> 2] | 0;
    d = (c[e + 4 >> 2] & -8) - o | 0;
    a = e;
    while (1) {
     b = c[a + 16 >> 2] | 0;
     if (!b) {
      b = c[a + 20 >> 2] | 0;
      if (!b) {
       j = d;
       break;
      }
     }
     a = (c[b + 4 >> 2] & -8) - o | 0;
     M = a >>> 0 < d >>> 0;
     d = M ? a : d;
     a = b;
     e = M ? b : e;
    }
    g = c[1540] | 0;
    if (e >>> 0 < g >>> 0) Aa();
    i = e + o | 0;
    if (e >>> 0 >= i >>> 0) Aa();
    h = c[e + 24 >> 2] | 0;
    d = c[e + 12 >> 2] | 0;
    do if ((d | 0) == (e | 0)) {
     a = e + 20 | 0;
     b = c[a >> 2] | 0;
     if (!b) {
      a = e + 16 | 0;
      b = c[a >> 2] | 0;
      if (!b) {
       n = 0;
       break;
      }
     }
     while (1) {
      d = b + 20 | 0;
      f = c[d >> 2] | 0;
      if (f) {
       b = f;
       a = d;
       continue;
      }
      d = b + 16 | 0;
      f = c[d >> 2] | 0;
      if (!f) break; else {
       b = f;
       a = d;
      }
     }
     if (a >>> 0 < g >>> 0) Aa(); else {
      c[a >> 2] = 0;
      n = b;
      break;
     }
    } else {
     f = c[e + 8 >> 2] | 0;
     if (f >>> 0 < g >>> 0) Aa();
     b = f + 12 | 0;
     if ((c[b >> 2] | 0) != (e | 0)) Aa();
     a = d + 8 | 0;
     if ((c[a >> 2] | 0) == (e | 0)) {
      c[b >> 2] = d;
      c[a >> 2] = f;
      n = d;
      break;
     } else Aa();
    } while (0);
    do if (h) {
     b = c[e + 28 >> 2] | 0;
     a = 6448 + (b << 2) | 0;
     if ((e | 0) == (c[a >> 2] | 0)) {
      c[a >> 2] = n;
      if (!n) {
       c[1537] = c[1537] & ~(1 << b);
       break;
      }
     } else {
      if (h >>> 0 < (c[1540] | 0) >>> 0) Aa();
      b = h + 16 | 0;
      if ((c[b >> 2] | 0) == (e | 0)) c[b >> 2] = n; else c[h + 20 >> 2] = n;
      if (!n) break;
     }
     a = c[1540] | 0;
     if (n >>> 0 < a >>> 0) Aa();
     c[n + 24 >> 2] = h;
     b = c[e + 16 >> 2] | 0;
     do if (b) if (b >>> 0 < a >>> 0) Aa(); else {
      c[n + 16 >> 2] = b;
      c[b + 24 >> 2] = n;
      break;
     } while (0);
     b = c[e + 20 >> 2] | 0;
     if (b) if (b >>> 0 < (c[1540] | 0) >>> 0) Aa(); else {
      c[n + 20 >> 2] = b;
      c[b + 24 >> 2] = n;
      break;
     }
    } while (0);
    if (j >>> 0 < 16) {
     M = j + o | 0;
     c[e + 4 >> 2] = M | 3;
     M = e + (M + 4) | 0;
     c[M >> 2] = c[M >> 2] | 1;
    } else {
     c[e + 4 >> 2] = o | 3;
     c[e + (o | 4) >> 2] = j | 1;
     c[e + (j + o) >> 2] = j;
     b = c[1538] | 0;
     if (b) {
      g = c[1541] | 0;
      d = b >>> 3;
      b = d << 1;
      f = 6184 + (b << 2) | 0;
      a = c[1536] | 0;
      d = 1 << d;
      if (a & d) {
       b = 6184 + (b + 2 << 2) | 0;
       a = c[b >> 2] | 0;
       if (a >>> 0 < (c[1540] | 0) >>> 0) Aa(); else {
        p = b;
        q = a;
       }
      } else {
       c[1536] = a | d;
       p = 6184 + (b + 2 << 2) | 0;
       q = f;
      }
      c[p >> 2] = g;
      c[q + 12 >> 2] = g;
      c[g + 8 >> 2] = q;
      c[g + 12 >> 2] = f;
     }
     c[1538] = j;
     c[1541] = i;
    }
    M = e + 8 | 0;
    return M | 0;
   } else q = o;
  } else q = o;
 } else if (a >>> 0 <= 4294967231) {
  a = a + 11 | 0;
  m = a & -8;
  l = c[1537] | 0;
  if (l) {
   d = 0 - m | 0;
   a = a >>> 8;
   if (a) if (m >>> 0 > 16777215) k = 31; else {
    q = (a + 1048320 | 0) >>> 16 & 8;
    v = a << q;
    p = (v + 520192 | 0) >>> 16 & 4;
    v = v << p;
    k = (v + 245760 | 0) >>> 16 & 2;
    k = 14 - (p | q | k) + (v << k >>> 15) | 0;
    k = m >>> (k + 7 | 0) & 1 | k << 1;
   } else k = 0;
   a = c[6448 + (k << 2) >> 2] | 0;
   a : do if (!a) {
    f = 0;
    a = 0;
    v = 86;
   } else {
    h = d;
    f = 0;
    i = m << ((k | 0) == 31 ? 0 : 25 - (k >>> 1) | 0);
    j = a;
    a = 0;
    while (1) {
     g = c[j + 4 >> 2] & -8;
     d = g - m | 0;
     if (d >>> 0 < h >>> 0) if ((g | 0) == (m | 0)) {
      g = j;
      a = j;
      v = 90;
      break a;
     } else a = j; else d = h;
     v = c[j + 20 >> 2] | 0;
     j = c[j + 16 + (i >>> 31 << 2) >> 2] | 0;
     f = (v | 0) == 0 | (v | 0) == (j | 0) ? f : v;
     if (!j) {
      v = 86;
      break;
     } else {
      h = d;
      i = i << 1;
     }
    }
   } while (0);
   if ((v | 0) == 86) {
    if ((f | 0) == 0 & (a | 0) == 0) {
     a = 2 << k;
     a = l & (a | 0 - a);
     if (!a) {
      q = m;
      break;
     }
     a = (a & 0 - a) + -1 | 0;
     n = a >>> 12 & 16;
     a = a >>> n;
     l = a >>> 5 & 8;
     a = a >>> l;
     p = a >>> 2 & 4;
     a = a >>> p;
     q = a >>> 1 & 2;
     a = a >>> q;
     f = a >>> 1 & 1;
     f = c[6448 + ((l | n | p | q | f) + (a >>> f) << 2) >> 2] | 0;
     a = 0;
    }
    if (!f) {
     i = d;
     j = a;
    } else {
     g = f;
     v = 90;
    }
   }
   if ((v | 0) == 90) while (1) {
    v = 0;
    q = (c[g + 4 >> 2] & -8) - m | 0;
    f = q >>> 0 < d >>> 0;
    d = f ? q : d;
    a = f ? g : a;
    f = c[g + 16 >> 2] | 0;
    if (f) {
     g = f;
     v = 90;
     continue;
    }
    g = c[g + 20 >> 2] | 0;
    if (!g) {
     i = d;
     j = a;
     break;
    } else v = 90;
   }
   if ((j | 0) != 0 ? i >>> 0 < ((c[1538] | 0) - m | 0) >>> 0 : 0) {
    f = c[1540] | 0;
    if (j >>> 0 < f >>> 0) Aa();
    h = j + m | 0;
    if (j >>> 0 >= h >>> 0) Aa();
    g = c[j + 24 >> 2] | 0;
    d = c[j + 12 >> 2] | 0;
    do if ((d | 0) == (j | 0)) {
     a = j + 20 | 0;
     b = c[a >> 2] | 0;
     if (!b) {
      a = j + 16 | 0;
      b = c[a >> 2] | 0;
      if (!b) {
       o = 0;
       break;
      }
     }
     while (1) {
      d = b + 20 | 0;
      e = c[d >> 2] | 0;
      if (e) {
       b = e;
       a = d;
       continue;
      }
      d = b + 16 | 0;
      e = c[d >> 2] | 0;
      if (!e) break; else {
       b = e;
       a = d;
      }
     }
     if (a >>> 0 < f >>> 0) Aa(); else {
      c[a >> 2] = 0;
      o = b;
      break;
     }
    } else {
     e = c[j + 8 >> 2] | 0;
     if (e >>> 0 < f >>> 0) Aa();
     b = e + 12 | 0;
     if ((c[b >> 2] | 0) != (j | 0)) Aa();
     a = d + 8 | 0;
     if ((c[a >> 2] | 0) == (j | 0)) {
      c[b >> 2] = d;
      c[a >> 2] = e;
      o = d;
      break;
     } else Aa();
    } while (0);
    do if (g) {
     b = c[j + 28 >> 2] | 0;
     a = 6448 + (b << 2) | 0;
     if ((j | 0) == (c[a >> 2] | 0)) {
      c[a >> 2] = o;
      if (!o) {
       c[1537] = c[1537] & ~(1 << b);
       break;
      }
     } else {
      if (g >>> 0 < (c[1540] | 0) >>> 0) Aa();
      b = g + 16 | 0;
      if ((c[b >> 2] | 0) == (j | 0)) c[b >> 2] = o; else c[g + 20 >> 2] = o;
      if (!o) break;
     }
     a = c[1540] | 0;
     if (o >>> 0 < a >>> 0) Aa();
     c[o + 24 >> 2] = g;
     b = c[j + 16 >> 2] | 0;
     do if (b) if (b >>> 0 < a >>> 0) Aa(); else {
      c[o + 16 >> 2] = b;
      c[b + 24 >> 2] = o;
      break;
     } while (0);
     b = c[j + 20 >> 2] | 0;
     if (b) if (b >>> 0 < (c[1540] | 0) >>> 0) Aa(); else {
      c[o + 20 >> 2] = b;
      c[b + 24 >> 2] = o;
      break;
     }
    } while (0);
    b : do if (i >>> 0 >= 16) {
     c[j + 4 >> 2] = m | 3;
     c[j + (m | 4) >> 2] = i | 1;
     c[j + (i + m) >> 2] = i;
     b = i >>> 3;
     if (i >>> 0 < 256) {
      a = b << 1;
      e = 6184 + (a << 2) | 0;
      d = c[1536] | 0;
      b = 1 << b;
      if (d & b) {
       b = 6184 + (a + 2 << 2) | 0;
       a = c[b >> 2] | 0;
       if (a >>> 0 < (c[1540] | 0) >>> 0) Aa(); else {
        s = b;
        t = a;
       }
      } else {
       c[1536] = d | b;
       s = 6184 + (a + 2 << 2) | 0;
       t = e;
      }
      c[s >> 2] = h;
      c[t + 12 >> 2] = h;
      c[j + (m + 8) >> 2] = t;
      c[j + (m + 12) >> 2] = e;
      break;
     }
     b = i >>> 8;
     if (b) if (i >>> 0 > 16777215) e = 31; else {
      L = (b + 1048320 | 0) >>> 16 & 8;
      M = b << L;
      K = (M + 520192 | 0) >>> 16 & 4;
      M = M << K;
      e = (M + 245760 | 0) >>> 16 & 2;
      e = 14 - (K | L | e) + (M << e >>> 15) | 0;
      e = i >>> (e + 7 | 0) & 1 | e << 1;
     } else e = 0;
     b = 6448 + (e << 2) | 0;
     c[j + (m + 28) >> 2] = e;
     c[j + (m + 20) >> 2] = 0;
     c[j + (m + 16) >> 2] = 0;
     a = c[1537] | 0;
     d = 1 << e;
     if (!(a & d)) {
      c[1537] = a | d;
      c[b >> 2] = h;
      c[j + (m + 24) >> 2] = b;
      c[j + (m + 12) >> 2] = h;
      c[j + (m + 8) >> 2] = h;
      break;
     }
     b = c[b >> 2] | 0;
     c : do if ((c[b + 4 >> 2] & -8 | 0) != (i | 0)) {
      e = i << ((e | 0) == 31 ? 0 : 25 - (e >>> 1) | 0);
      while (1) {
       a = b + 16 + (e >>> 31 << 2) | 0;
       d = c[a >> 2] | 0;
       if (!d) break;
       if ((c[d + 4 >> 2] & -8 | 0) == (i | 0)) {
        y = d;
        break c;
       } else {
        e = e << 1;
        b = d;
       }
      }
      if (a >>> 0 < (c[1540] | 0) >>> 0) Aa(); else {
       c[a >> 2] = h;
       c[j + (m + 24) >> 2] = b;
       c[j + (m + 12) >> 2] = h;
       c[j + (m + 8) >> 2] = h;
       break b;
      }
     } else y = b; while (0);
     b = y + 8 | 0;
     a = c[b >> 2] | 0;
     M = c[1540] | 0;
     if (a >>> 0 >= M >>> 0 & y >>> 0 >= M >>> 0) {
      c[a + 12 >> 2] = h;
      c[b >> 2] = h;
      c[j + (m + 8) >> 2] = a;
      c[j + (m + 12) >> 2] = y;
      c[j + (m + 24) >> 2] = 0;
      break;
     } else Aa();
    } else {
     M = i + m | 0;
     c[j + 4 >> 2] = M | 3;
     M = j + (M + 4) | 0;
     c[M >> 2] = c[M >> 2] | 1;
    } while (0);
    M = j + 8 | 0;
    return M | 0;
   } else q = m;
  } else q = m;
 } else q = -1; while (0);
 d = c[1538] | 0;
 if (d >>> 0 >= q >>> 0) {
  b = d - q | 0;
  a = c[1541] | 0;
  if (b >>> 0 > 15) {
   c[1541] = a + q;
   c[1538] = b;
   c[a + (q + 4) >> 2] = b | 1;
   c[a + d >> 2] = b;
   c[a + 4 >> 2] = q | 3;
  } else {
   c[1538] = 0;
   c[1541] = 0;
   c[a + 4 >> 2] = d | 3;
   M = a + (d + 4) | 0;
   c[M >> 2] = c[M >> 2] | 1;
  }
  M = a + 8 | 0;
  return M | 0;
 }
 a = c[1539] | 0;
 if (a >>> 0 > q >>> 0) {
  L = a - q | 0;
  c[1539] = L;
  M = c[1542] | 0;
  c[1542] = M + q;
  c[M + (q + 4) >> 2] = L | 1;
  c[M + 4 >> 2] = q | 3;
  M = M + 8 | 0;
  return M | 0;
 }
 do if (!(c[1654] | 0)) {
  a = Ra(30) | 0;
  if (!(a + -1 & a)) {
   c[1656] = a;
   c[1655] = a;
   c[1657] = -1;
   c[1658] = -1;
   c[1659] = 0;
   c[1647] = 0;
   c[1654] = (hb(0) | 0) & -16 ^ 1431655768;
   break;
  } else Aa();
 } while (0);
 j = q + 48 | 0;
 i = c[1656] | 0;
 k = q + 47 | 0;
 h = i + k | 0;
 i = 0 - i | 0;
 l = h & i;
 if (l >>> 0 <= q >>> 0) {
  M = 0;
  return M | 0;
 }
 a = c[1646] | 0;
 if ((a | 0) != 0 ? (t = c[1644] | 0, y = t + l | 0, y >>> 0 <= t >>> 0 | y >>> 0 > a >>> 0) : 0) {
  M = 0;
  return M | 0;
 }
 d : do if (!(c[1647] & 4)) {
  a = c[1542] | 0;
  e : do if (a) {
   f = 6592;
   while (1) {
    d = c[f >> 2] | 0;
    if (d >>> 0 <= a >>> 0 ? (r = f + 4 | 0, (d + (c[r >> 2] | 0) | 0) >>> 0 > a >>> 0) : 0) {
     g = f;
     a = r;
     break;
    }
    f = c[f + 8 >> 2] | 0;
    if (!f) {
     v = 174;
     break e;
    }
   }
   d = h - (c[1539] | 0) & i;
   if (d >>> 0 < 2147483647) {
    f = Ma(d | 0) | 0;
    y = (f | 0) == ((c[g >> 2] | 0) + (c[a >> 2] | 0) | 0);
    a = y ? d : 0;
    if (y) {
     if ((f | 0) != (-1 | 0)) {
      w = f;
      p = a;
      v = 194;
      break d;
     }
    } else v = 184;
   } else a = 0;
  } else v = 174; while (0);
  do if ((v | 0) == 174) {
   g = Ma(0) | 0;
   if ((g | 0) != (-1 | 0)) {
    a = g;
    d = c[1655] | 0;
    f = d + -1 | 0;
    if (!(f & a)) d = l; else d = l - a + (f + a & 0 - d) | 0;
    a = c[1644] | 0;
    f = a + d | 0;
    if (d >>> 0 > q >>> 0 & d >>> 0 < 2147483647) {
     y = c[1646] | 0;
     if ((y | 0) != 0 ? f >>> 0 <= a >>> 0 | f >>> 0 > y >>> 0 : 0) {
      a = 0;
      break;
     }
     f = Ma(d | 0) | 0;
     y = (f | 0) == (g | 0);
     a = y ? d : 0;
     if (y) {
      w = g;
      p = a;
      v = 194;
      break d;
     } else v = 184;
    } else a = 0;
   } else a = 0;
  } while (0);
  f : do if ((v | 0) == 184) {
   g = 0 - d | 0;
   do if (j >>> 0 > d >>> 0 & (d >>> 0 < 2147483647 & (f | 0) != (-1 | 0)) ? (u = c[1656] | 0, u = k - d + u & 0 - u, u >>> 0 < 2147483647) : 0) if ((Ma(u | 0) | 0) == (-1 | 0)) {
    Ma(g | 0) | 0;
    break f;
   } else {
    d = u + d | 0;
    break;
   } while (0);
   if ((f | 0) != (-1 | 0)) {
    w = f;
    p = d;
    v = 194;
    break d;
   }
  } while (0);
  c[1647] = c[1647] | 4;
  v = 191;
 } else {
  a = 0;
  v = 191;
 } while (0);
 if ((((v | 0) == 191 ? l >>> 0 < 2147483647 : 0) ? (w = Ma(l | 0) | 0, x = Ma(0) | 0, w >>> 0 < x >>> 0 & ((w | 0) != (-1 | 0) & (x | 0) != (-1 | 0))) : 0) ? (z = x - w | 0, A = z >>> 0 > (q + 40 | 0) >>> 0, A) : 0) {
  p = A ? z : a;
  v = 194;
 }
 if ((v | 0) == 194) {
  a = (c[1644] | 0) + p | 0;
  c[1644] = a;
  if (a >>> 0 > (c[1645] | 0) >>> 0) c[1645] = a;
  h = c[1542] | 0;
  g : do if (h) {
   g = 6592;
   do {
    a = c[g >> 2] | 0;
    d = g + 4 | 0;
    f = c[d >> 2] | 0;
    if ((w | 0) == (a + f | 0)) {
     B = a;
     C = d;
     D = f;
     E = g;
     v = 204;
     break;
    }
    g = c[g + 8 >> 2] | 0;
   } while ((g | 0) != 0);
   if (((v | 0) == 204 ? (c[E + 12 >> 2] & 8 | 0) == 0 : 0) ? h >>> 0 < w >>> 0 & h >>> 0 >= B >>> 0 : 0) {
    c[C >> 2] = D + p;
    M = (c[1539] | 0) + p | 0;
    L = h + 8 | 0;
    L = (L & 7 | 0) == 0 ? 0 : 0 - L & 7;
    K = M - L | 0;
    c[1542] = h + L;
    c[1539] = K;
    c[h + (L + 4) >> 2] = K | 1;
    c[h + (M + 4) >> 2] = 40;
    c[1543] = c[1658];
    break;
   }
   a = c[1540] | 0;
   if (w >>> 0 < a >>> 0) {
    c[1540] = w;
    a = w;
   }
   d = w + p | 0;
   g = 6592;
   while (1) {
    if ((c[g >> 2] | 0) == (d | 0)) {
     f = g;
     d = g;
     v = 212;
     break;
    }
    g = c[g + 8 >> 2] | 0;
    if (!g) {
     d = 6592;
     break;
    }
   }
   if ((v | 0) == 212) if (!(c[d + 12 >> 2] & 8)) {
    c[f >> 2] = w;
    n = d + 4 | 0;
    c[n >> 2] = (c[n >> 2] | 0) + p;
    n = w + 8 | 0;
    n = (n & 7 | 0) == 0 ? 0 : 0 - n & 7;
    k = w + (p + 8) | 0;
    k = (k & 7 | 0) == 0 ? 0 : 0 - k & 7;
    b = w + (k + p) | 0;
    m = n + q | 0;
    o = w + m | 0;
    l = b - (w + n) - q | 0;
    c[w + (n + 4) >> 2] = q | 3;
    h : do if ((b | 0) != (h | 0)) {
     if ((b | 0) == (c[1541] | 0)) {
      M = (c[1538] | 0) + l | 0;
      c[1538] = M;
      c[1541] = o;
      c[w + (m + 4) >> 2] = M | 1;
      c[w + (M + m) >> 2] = M;
      break;
     }
     i = p + 4 | 0;
     d = c[w + (i + k) >> 2] | 0;
     if ((d & 3 | 0) == 1) {
      j = d & -8;
      g = d >>> 3;
      i : do if (d >>> 0 >= 256) {
       h = c[w + ((k | 24) + p) >> 2] | 0;
       e = c[w + (p + 12 + k) >> 2] | 0;
       do if ((e | 0) == (b | 0)) {
        f = k | 16;
        e = w + (i + f) | 0;
        d = c[e >> 2] | 0;
        if (!d) {
         e = w + (f + p) | 0;
         d = c[e >> 2] | 0;
         if (!d) {
          J = 0;
          break;
         }
        }
        while (1) {
         f = d + 20 | 0;
         g = c[f >> 2] | 0;
         if (g) {
          d = g;
          e = f;
          continue;
         }
         f = d + 16 | 0;
         g = c[f >> 2] | 0;
         if (!g) break; else {
          d = g;
          e = f;
         }
        }
        if (e >>> 0 < a >>> 0) Aa(); else {
         c[e >> 2] = 0;
         J = d;
         break;
        }
       } else {
        f = c[w + ((k | 8) + p) >> 2] | 0;
        if (f >>> 0 < a >>> 0) Aa();
        a = f + 12 | 0;
        if ((c[a >> 2] | 0) != (b | 0)) Aa();
        d = e + 8 | 0;
        if ((c[d >> 2] | 0) == (b | 0)) {
         c[a >> 2] = e;
         c[d >> 2] = f;
         J = e;
         break;
        } else Aa();
       } while (0);
       if (!h) break;
       a = c[w + (p + 28 + k) >> 2] | 0;
       d = 6448 + (a << 2) | 0;
       do if ((b | 0) != (c[d >> 2] | 0)) {
        if (h >>> 0 < (c[1540] | 0) >>> 0) Aa();
        a = h + 16 | 0;
        if ((c[a >> 2] | 0) == (b | 0)) c[a >> 2] = J; else c[h + 20 >> 2] = J;
        if (!J) break i;
       } else {
        c[d >> 2] = J;
        if (J) break;
        c[1537] = c[1537] & ~(1 << a);
        break i;
       } while (0);
       d = c[1540] | 0;
       if (J >>> 0 < d >>> 0) Aa();
       c[J + 24 >> 2] = h;
       b = k | 16;
       a = c[w + (b + p) >> 2] | 0;
       do if (a) if (a >>> 0 < d >>> 0) Aa(); else {
        c[J + 16 >> 2] = a;
        c[a + 24 >> 2] = J;
        break;
       } while (0);
       b = c[w + (i + b) >> 2] | 0;
       if (!b) break;
       if (b >>> 0 < (c[1540] | 0) >>> 0) Aa(); else {
        c[J + 20 >> 2] = b;
        c[b + 24 >> 2] = J;
        break;
       }
      } else {
       e = c[w + ((k | 8) + p) >> 2] | 0;
       f = c[w + (p + 12 + k) >> 2] | 0;
       d = 6184 + (g << 1 << 2) | 0;
       do if ((e | 0) != (d | 0)) {
        if (e >>> 0 < a >>> 0) Aa();
        if ((c[e + 12 >> 2] | 0) == (b | 0)) break;
        Aa();
       } while (0);
       if ((f | 0) == (e | 0)) {
        c[1536] = c[1536] & ~(1 << g);
        break;
       }
       do if ((f | 0) == (d | 0)) F = f + 8 | 0; else {
        if (f >>> 0 < a >>> 0) Aa();
        a = f + 8 | 0;
        if ((c[a >> 2] | 0) == (b | 0)) {
         F = a;
         break;
        }
        Aa();
       } while (0);
       c[e + 12 >> 2] = f;
       c[F >> 2] = e;
      } while (0);
      b = w + ((j | k) + p) | 0;
      f = j + l | 0;
     } else f = l;
     b = b + 4 | 0;
     c[b >> 2] = c[b >> 2] & -2;
     c[w + (m + 4) >> 2] = f | 1;
     c[w + (f + m) >> 2] = f;
     b = f >>> 3;
     if (f >>> 0 < 256) {
      a = b << 1;
      e = 6184 + (a << 2) | 0;
      d = c[1536] | 0;
      b = 1 << b;
      do if (!(d & b)) {
       c[1536] = d | b;
       K = 6184 + (a + 2 << 2) | 0;
       L = e;
      } else {
       b = 6184 + (a + 2 << 2) | 0;
       a = c[b >> 2] | 0;
       if (a >>> 0 >= (c[1540] | 0) >>> 0) {
        K = b;
        L = a;
        break;
       }
       Aa();
      } while (0);
      c[K >> 2] = o;
      c[L + 12 >> 2] = o;
      c[w + (m + 8) >> 2] = L;
      c[w + (m + 12) >> 2] = e;
      break;
     }
     b = f >>> 8;
     do if (!b) e = 0; else {
      if (f >>> 0 > 16777215) {
       e = 31;
       break;
      }
      K = (b + 1048320 | 0) >>> 16 & 8;
      L = b << K;
      J = (L + 520192 | 0) >>> 16 & 4;
      L = L << J;
      e = (L + 245760 | 0) >>> 16 & 2;
      e = 14 - (J | K | e) + (L << e >>> 15) | 0;
      e = f >>> (e + 7 | 0) & 1 | e << 1;
     } while (0);
     b = 6448 + (e << 2) | 0;
     c[w + (m + 28) >> 2] = e;
     c[w + (m + 20) >> 2] = 0;
     c[w + (m + 16) >> 2] = 0;
     a = c[1537] | 0;
     d = 1 << e;
     if (!(a & d)) {
      c[1537] = a | d;
      c[b >> 2] = o;
      c[w + (m + 24) >> 2] = b;
      c[w + (m + 12) >> 2] = o;
      c[w + (m + 8) >> 2] = o;
      break;
     }
     b = c[b >> 2] | 0;
     j : do if ((c[b + 4 >> 2] & -8 | 0) != (f | 0)) {
      e = f << ((e | 0) == 31 ? 0 : 25 - (e >>> 1) | 0);
      while (1) {
       a = b + 16 + (e >>> 31 << 2) | 0;
       d = c[a >> 2] | 0;
       if (!d) break;
       if ((c[d + 4 >> 2] & -8 | 0) == (f | 0)) {
        M = d;
        break j;
       } else {
        e = e << 1;
        b = d;
       }
      }
      if (a >>> 0 < (c[1540] | 0) >>> 0) Aa(); else {
       c[a >> 2] = o;
       c[w + (m + 24) >> 2] = b;
       c[w + (m + 12) >> 2] = o;
       c[w + (m + 8) >> 2] = o;
       break h;
      }
     } else M = b; while (0);
     b = M + 8 | 0;
     a = c[b >> 2] | 0;
     L = c[1540] | 0;
     if (a >>> 0 >= L >>> 0 & M >>> 0 >= L >>> 0) {
      c[a + 12 >> 2] = o;
      c[b >> 2] = o;
      c[w + (m + 8) >> 2] = a;
      c[w + (m + 12) >> 2] = M;
      c[w + (m + 24) >> 2] = 0;
      break;
     } else Aa();
    } else {
     M = (c[1539] | 0) + l | 0;
     c[1539] = M;
     c[1542] = o;
     c[w + (m + 4) >> 2] = M | 1;
    } while (0);
    M = w + (n | 8) | 0;
    return M | 0;
   } else d = 6592;
   while (1) {
    a = c[d >> 2] | 0;
    if (a >>> 0 <= h >>> 0 ? (b = c[d + 4 >> 2] | 0, e = a + b | 0, e >>> 0 > h >>> 0) : 0) break;
    d = c[d + 8 >> 2] | 0;
   }
   f = a + (b + -39) | 0;
   a = a + (b + -47 + ((f & 7 | 0) == 0 ? 0 : 0 - f & 7)) | 0;
   f = h + 16 | 0;
   a = a >>> 0 < f >>> 0 ? h : a;
   b = a + 8 | 0;
   d = w + 8 | 0;
   d = (d & 7 | 0) == 0 ? 0 : 0 - d & 7;
   M = p + -40 - d | 0;
   c[1542] = w + d;
   c[1539] = M;
   c[w + (d + 4) >> 2] = M | 1;
   c[w + (p + -36) >> 2] = 40;
   c[1543] = c[1658];
   d = a + 4 | 0;
   c[d >> 2] = 27;
   c[b >> 2] = c[1648];
   c[b + 4 >> 2] = c[1649];
   c[b + 8 >> 2] = c[1650];
   c[b + 12 >> 2] = c[1651];
   c[1648] = w;
   c[1649] = p;
   c[1651] = 0;
   c[1650] = b;
   b = a + 28 | 0;
   c[b >> 2] = 7;
   if ((a + 32 | 0) >>> 0 < e >>> 0) do {
    M = b;
    b = b + 4 | 0;
    c[b >> 2] = 7;
   } while ((M + 8 | 0) >>> 0 < e >>> 0);
   if ((a | 0) != (h | 0)) {
    g = a - h | 0;
    c[d >> 2] = c[d >> 2] & -2;
    c[h + 4 >> 2] = g | 1;
    c[a >> 2] = g;
    b = g >>> 3;
    if (g >>> 0 < 256) {
     a = b << 1;
     e = 6184 + (a << 2) | 0;
     d = c[1536] | 0;
     b = 1 << b;
     if (d & b) {
      b = 6184 + (a + 2 << 2) | 0;
      a = c[b >> 2] | 0;
      if (a >>> 0 < (c[1540] | 0) >>> 0) Aa(); else {
       G = b;
       H = a;
      }
     } else {
      c[1536] = d | b;
      G = 6184 + (a + 2 << 2) | 0;
      H = e;
     }
     c[G >> 2] = h;
     c[H + 12 >> 2] = h;
     c[h + 8 >> 2] = H;
     c[h + 12 >> 2] = e;
     break;
    }
    b = g >>> 8;
    if (b) if (g >>> 0 > 16777215) e = 31; else {
     L = (b + 1048320 | 0) >>> 16 & 8;
     M = b << L;
     K = (M + 520192 | 0) >>> 16 & 4;
     M = M << K;
     e = (M + 245760 | 0) >>> 16 & 2;
     e = 14 - (K | L | e) + (M << e >>> 15) | 0;
     e = g >>> (e + 7 | 0) & 1 | e << 1;
    } else e = 0;
    d = 6448 + (e << 2) | 0;
    c[h + 28 >> 2] = e;
    c[h + 20 >> 2] = 0;
    c[f >> 2] = 0;
    b = c[1537] | 0;
    a = 1 << e;
    if (!(b & a)) {
     c[1537] = b | a;
     c[d >> 2] = h;
     c[h + 24 >> 2] = d;
     c[h + 12 >> 2] = h;
     c[h + 8 >> 2] = h;
     break;
    }
    b = c[d >> 2] | 0;
    k : do if ((c[b + 4 >> 2] & -8 | 0) != (g | 0)) {
     e = g << ((e | 0) == 31 ? 0 : 25 - (e >>> 1) | 0);
     while (1) {
      a = b + 16 + (e >>> 31 << 2) | 0;
      d = c[a >> 2] | 0;
      if (!d) break;
      if ((c[d + 4 >> 2] & -8 | 0) == (g | 0)) {
       I = d;
       break k;
      } else {
       e = e << 1;
       b = d;
      }
     }
     if (a >>> 0 < (c[1540] | 0) >>> 0) Aa(); else {
      c[a >> 2] = h;
      c[h + 24 >> 2] = b;
      c[h + 12 >> 2] = h;
      c[h + 8 >> 2] = h;
      break g;
     }
    } else I = b; while (0);
    b = I + 8 | 0;
    a = c[b >> 2] | 0;
    M = c[1540] | 0;
    if (a >>> 0 >= M >>> 0 & I >>> 0 >= M >>> 0) {
     c[a + 12 >> 2] = h;
     c[b >> 2] = h;
     c[h + 8 >> 2] = a;
     c[h + 12 >> 2] = I;
     c[h + 24 >> 2] = 0;
     break;
    } else Aa();
   }
  } else {
   M = c[1540] | 0;
   if ((M | 0) == 0 | w >>> 0 < M >>> 0) c[1540] = w;
   c[1648] = w;
   c[1649] = p;
   c[1651] = 0;
   c[1545] = c[1654];
   c[1544] = -1;
   b = 0;
   do {
    M = b << 1;
    L = 6184 + (M << 2) | 0;
    c[6184 + (M + 3 << 2) >> 2] = L;
    c[6184 + (M + 2 << 2) >> 2] = L;
    b = b + 1 | 0;
   } while ((b | 0) != 32);
   M = w + 8 | 0;
   M = (M & 7 | 0) == 0 ? 0 : 0 - M & 7;
   L = p + -40 - M | 0;
   c[1542] = w + M;
   c[1539] = L;
   c[w + (M + 4) >> 2] = L | 1;
   c[w + (p + -36) >> 2] = 40;
   c[1543] = c[1658];
  } while (0);
  b = c[1539] | 0;
  if (b >>> 0 > q >>> 0) {
   L = b - q | 0;
   c[1539] = L;
   M = c[1542] | 0;
   c[1542] = M + q;
   c[M + (q + 4) >> 2] = L | 1;
   c[M + 4 >> 2] = q | 3;
   M = M + 8 | 0;
   return M | 0;
  }
 }
 c[(Rc() | 0) >> 2] = 12;
 M = 0;
 return M | 0;
}

function ge(e, f, g, j, l) {
 e = e | 0;
 f = f | 0;
 g = g | 0;
 j = j | 0;
 l = l | 0;
 var m = 0, n = 0, o = 0, p = 0, q = 0.0, r = 0, s = 0, t = 0, u = 0, v = 0.0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, _ = 0, aa = 0, ba = 0, ca = 0, da = 0, ea = 0, fa = 0, ga = 0, ha = 0;
 ha = i;
 i = i + 624 | 0;
 ca = ha + 24 | 0;
 ea = ha + 16 | 0;
 da = ha + 588 | 0;
 Y = ha + 576 | 0;
 ba = ha;
 V = ha + 536 | 0;
 ga = ha + 8 | 0;
 fa = ha + 528 | 0;
 M = (e | 0) != 0;
 N = V + 40 | 0;
 U = N;
 V = V + 39 | 0;
 W = ga + 4 | 0;
 X = Y + 12 | 0;
 Y = Y + 11 | 0;
 Z = da;
 _ = X;
 aa = _ - Z | 0;
 O = -2 - Z | 0;
 P = _ + 2 | 0;
 Q = ca + 288 | 0;
 R = da + 9 | 0;
 S = R;
 T = da + 8 | 0;
 m = 0;
 w = f;
 n = 0;
 f = 0;
 a : while (1) {
  do if ((m | 0) > -1) if ((n | 0) > (2147483647 - m | 0)) {
   c[(Rc() | 0) >> 2] = 75;
   m = -1;
   break;
  } else {
   m = n + m | 0;
   break;
  } while (0);
  n = a[w >> 0] | 0;
  if (!(n << 24 >> 24)) {
   L = 245;
   break;
  } else o = w;
  b : while (1) {
   switch (n << 24 >> 24) {
   case 37:
    {
     n = o;
     L = 9;
     break b;
    }
   case 0:
    {
     n = o;
     break b;
    }
   default:
    {}
   }
   K = o + 1 | 0;
   n = a[K >> 0] | 0;
   o = K;
  }
  c : do if ((L | 0) == 9) while (1) {
   L = 0;
   if ((a[n + 1 >> 0] | 0) != 37) break c;
   o = o + 1 | 0;
   n = n + 2 | 0;
   if ((a[n >> 0] | 0) == 37) L = 9; else break;
  } while (0);
  y = o - w | 0;
  if (M ? (c[e >> 2] & 32 | 0) == 0 : 0) zd(w, y, e) | 0;
  if ((o | 0) != (w | 0)) {
   w = n;
   n = y;
   continue;
  }
  r = n + 1 | 0;
  o = a[r >> 0] | 0;
  p = (o << 24 >> 24) + -48 | 0;
  if (p >>> 0 < 10) {
   K = (a[n + 2 >> 0] | 0) == 36;
   r = K ? n + 3 | 0 : r;
   o = a[r >> 0] | 0;
   u = K ? p : -1;
   f = K ? 1 : f;
  } else u = -1;
  n = o << 24 >> 24;
  d : do if ((n & -32 | 0) == 32) {
   p = 0;
   while (1) {
    if (!(1 << n + -32 & 75913)) {
     s = p;
     n = r;
     break d;
    }
    p = 1 << (o << 24 >> 24) + -32 | p;
    r = r + 1 | 0;
    o = a[r >> 0] | 0;
    n = o << 24 >> 24;
    if ((n & -32 | 0) != 32) {
     s = p;
     n = r;
     break;
    }
   }
  } else {
   s = 0;
   n = r;
  } while (0);
  do if (o << 24 >> 24 == 42) {
   p = n + 1 | 0;
   o = (a[p >> 0] | 0) + -48 | 0;
   if (o >>> 0 < 10 ? (a[n + 2 >> 0] | 0) == 36 : 0) {
    c[l + (o << 2) >> 2] = 10;
    f = 1;
    n = n + 3 | 0;
    o = c[j + ((a[p >> 0] | 0) + -48 << 3) >> 2] | 0;
   } else {
    if (f) {
     m = -1;
     break a;
    }
    if (!M) {
     x = s;
     n = p;
     f = 0;
     K = 0;
     break;
    }
    f = (c[g >> 2] | 0) + (4 - 1) & ~(4 - 1);
    o = c[f >> 2] | 0;
    c[g >> 2] = f + 4;
    f = 0;
    n = p;
   }
   if ((o | 0) < 0) {
    x = s | 8192;
    K = 0 - o | 0;
   } else {
    x = s;
    K = o;
   }
  } else {
   p = (o << 24 >> 24) + -48 | 0;
   if (p >>> 0 < 10) {
    o = 0;
    do {
     o = (o * 10 | 0) + p | 0;
     n = n + 1 | 0;
     p = (a[n >> 0] | 0) + -48 | 0;
    } while (p >>> 0 < 10);
    if ((o | 0) < 0) {
     m = -1;
     break a;
    } else {
     x = s;
     K = o;
    }
   } else {
    x = s;
    K = 0;
   }
  } while (0);
  e : do if ((a[n >> 0] | 0) == 46) {
   p = n + 1 | 0;
   o = a[p >> 0] | 0;
   if (o << 24 >> 24 != 42) {
    r = (o << 24 >> 24) + -48 | 0;
    if (r >>> 0 < 10) {
     n = p;
     o = 0;
    } else {
     n = p;
     r = 0;
     break;
    }
    while (1) {
     o = (o * 10 | 0) + r | 0;
     n = n + 1 | 0;
     r = (a[n >> 0] | 0) + -48 | 0;
     if (r >>> 0 >= 10) {
      r = o;
      break e;
     }
    }
   }
   p = n + 2 | 0;
   o = (a[p >> 0] | 0) + -48 | 0;
   if (o >>> 0 < 10 ? (a[n + 3 >> 0] | 0) == 36 : 0) {
    c[l + (o << 2) >> 2] = 10;
    n = n + 4 | 0;
    r = c[j + ((a[p >> 0] | 0) + -48 << 3) >> 2] | 0;
    break;
   }
   if (f) {
    m = -1;
    break a;
   }
   if (M) {
    n = (c[g >> 2] | 0) + (4 - 1) & ~(4 - 1);
    r = c[n >> 2] | 0;
    c[g >> 2] = n + 4;
    n = p;
   } else {
    n = p;
    r = 0;
   }
  } else r = -1; while (0);
  t = 0;
  while (1) {
   o = (a[n >> 0] | 0) + -65 | 0;
   if (o >>> 0 > 57) {
    m = -1;
    break a;
   }
   p = n + 1 | 0;
   o = a[18881 + (t * 58 | 0) + o >> 0] | 0;
   s = o & 255;
   if ((s + -1 | 0) >>> 0 < 8) {
    n = p;
    t = s;
   } else {
    J = p;
    break;
   }
  }
  if (!(o << 24 >> 24)) {
   m = -1;
   break;
  }
  p = (u | 0) > -1;
  do if (o << 24 >> 24 == 19) if (p) {
   m = -1;
   break a;
  } else L = 52; else {
   if (p) {
    c[l + (u << 2) >> 2] = s;
    H = j + (u << 3) | 0;
    I = c[H + 4 >> 2] | 0;
    L = ba;
    c[L >> 2] = c[H >> 2];
    c[L + 4 >> 2] = I;
    L = 52;
    break;
   }
   if (!M) {
    m = 0;
    break a;
   }
   ne(ba, s, g);
  } while (0);
  if ((L | 0) == 52 ? (L = 0, !M) : 0) {
   w = J;
   n = y;
   continue;
  }
  u = a[n >> 0] | 0;
  u = (t | 0) != 0 & (u & 15 | 0) == 3 ? u & -33 : u;
  p = x & -65537;
  I = (x & 8192 | 0) == 0 ? x : p;
  f : do switch (u | 0) {
  case 110:
   switch (t | 0) {
   case 0:
    {
     c[c[ba >> 2] >> 2] = m;
     w = J;
     n = y;
     continue a;
    }
   case 1:
    {
     c[c[ba >> 2] >> 2] = m;
     w = J;
     n = y;
     continue a;
    }
   case 2:
    {
     w = c[ba >> 2] | 0;
     c[w >> 2] = m;
     c[w + 4 >> 2] = ((m | 0) < 0) << 31 >> 31;
     w = J;
     n = y;
     continue a;
    }
   case 3:
    {
     b[c[ba >> 2] >> 1] = m;
     w = J;
     n = y;
     continue a;
    }
   case 4:
    {
     a[c[ba >> 2] >> 0] = m;
     w = J;
     n = y;
     continue a;
    }
   case 6:
    {
     c[c[ba >> 2] >> 2] = m;
     w = J;
     n = y;
     continue a;
    }
   case 7:
    {
     w = c[ba >> 2] | 0;
     c[w >> 2] = m;
     c[w + 4 >> 2] = ((m | 0) < 0) << 31 >> 31;
     w = J;
     n = y;
     continue a;
    }
   default:
    {
     w = J;
     n = y;
     continue a;
    }
   }
  case 112:
   {
    t = I | 8;
    r = r >>> 0 > 8 ? r : 8;
    u = 120;
    L = 64;
    break;
   }
  case 88:
  case 120:
   {
    t = I;
    L = 64;
    break;
   }
  case 111:
   {
    p = ba;
    o = c[p >> 2] | 0;
    p = c[p + 4 >> 2] | 0;
    if ((o | 0) == 0 & (p | 0) == 0) n = N; else {
     n = N;
     do {
      n = n + -1 | 0;
      a[n >> 0] = o & 7 | 48;
      o = to(o | 0, p | 0, 3) | 0;
      p = D;
     } while (!((o | 0) == 0 & (p | 0) == 0));
    }
    if (!(I & 8)) {
     o = I;
     t = 0;
     s = 19361;
     L = 77;
    } else {
     t = U - n + 1 | 0;
     o = I;
     r = (r | 0) < (t | 0) ? t : r;
     t = 0;
     s = 19361;
     L = 77;
    }
    break;
   }
  case 105:
  case 100:
   {
    o = ba;
    n = c[o >> 2] | 0;
    o = c[o + 4 >> 2] | 0;
    if ((o | 0) < 0) {
     n = qo(0, 0, n | 0, o | 0) | 0;
     o = D;
     p = ba;
     c[p >> 2] = n;
     c[p + 4 >> 2] = o;
     p = 1;
     s = 19361;
     L = 76;
     break f;
    }
    if (!(I & 2048)) {
     s = I & 1;
     p = s;
     s = (s | 0) == 0 ? 19361 : 19363;
     L = 76;
    } else {
     p = 1;
     s = 19362;
     L = 76;
    }
    break;
   }
  case 117:
   {
    o = ba;
    n = c[o >> 2] | 0;
    o = c[o + 4 >> 2] | 0;
    p = 0;
    s = 19361;
    L = 76;
    break;
   }
  case 99:
   {
    a[V >> 0] = c[ba >> 2];
    w = V;
    o = 1;
    t = 0;
    u = 19361;
    n = N;
    break;
   }
  case 109:
   {
    n = Qc(c[(Rc() | 0) >> 2] | 0) | 0;
    L = 82;
    break;
   }
  case 115:
   {
    n = c[ba >> 2] | 0;
    n = (n | 0) != 0 ? n : 19371;
    L = 82;
    break;
   }
  case 67:
   {
    c[ga >> 2] = c[ba >> 2];
    c[W >> 2] = 0;
    c[ba >> 2] = ga;
    r = -1;
    L = 86;
    break;
   }
  case 83:
   {
    if (!r) {
     pe(e, 32, K, 0, I);
     n = 0;
     L = 98;
    } else L = 86;
    break;
   }
  case 65:
  case 71:
  case 70:
  case 69:
  case 97:
  case 103:
  case 102:
  case 101:
   {
    q = +h[ba >> 3];
    c[ea >> 2] = 0;
    h[k >> 3] = q;
    if ((c[k + 4 >> 2] | 0) >= 0) if (!(I & 2048)) {
     H = I & 1;
     G = H;
     H = (H | 0) == 0 ? 19379 : 19384;
    } else {
     G = 1;
     H = 19381;
    } else {
     q = -q;
     G = 1;
     H = 19378;
    }
    h[k >> 3] = q;
    F = c[k + 4 >> 2] & 2146435072;
    do if (F >>> 0 < 2146435072 | (F | 0) == 2146435072 & 0 < 0) {
     v = +id(q, ea) * 2.0;
     o = v != 0.0;
     if (o) c[ea >> 2] = (c[ea >> 2] | 0) + -1;
     C = u | 32;
     if ((C | 0) == 97) {
      w = u & 32;
      y = (w | 0) == 0 ? H : H + 9 | 0;
      x = G | 2;
      n = 12 - r | 0;
      do if (!(r >>> 0 > 11 | (n | 0) == 0)) {
       q = 8.0;
       do {
        n = n + -1 | 0;
        q = q * 16.0;
       } while ((n | 0) != 0);
       if ((a[y >> 0] | 0) == 45) {
        q = -(q + (-v - q));
        break;
       } else {
        q = v + q - q;
        break;
       }
      } else q = v; while (0);
      o = c[ea >> 2] | 0;
      n = (o | 0) < 0 ? 0 - o | 0 : o;
      n = oe(n, ((n | 0) < 0) << 31 >> 31, X) | 0;
      if ((n | 0) == (X | 0)) {
       a[Y >> 0] = 48;
       n = Y;
      }
      a[n + -1 >> 0] = (o >> 31 & 2) + 43;
      t = n + -2 | 0;
      a[t >> 0] = u + 15;
      s = (r | 0) < 1;
      p = (I & 8 | 0) == 0;
      o = da;
      while (1) {
       H = ~~q;
       n = o + 1 | 0;
       a[o >> 0] = d[19345 + H >> 0] | w;
       q = (q - +(H | 0)) * 16.0;
       do if ((n - Z | 0) == 1) {
        if (p & (s & q == 0.0)) break;
        a[n >> 0] = 46;
        n = o + 2 | 0;
       } while (0);
       if (!(q != 0.0)) break; else o = n;
      }
      r = (r | 0) != 0 & (O + n | 0) < (r | 0) ? P + r - t | 0 : aa - t + n | 0;
      p = r + x | 0;
      pe(e, 32, K, p, I);
      if (!(c[e >> 2] & 32)) zd(y, x, e) | 0;
      pe(e, 48, K, p, I ^ 65536);
      n = n - Z | 0;
      if (!(c[e >> 2] & 32)) zd(da, n, e) | 0;
      o = _ - t | 0;
      pe(e, 48, r - (n + o) | 0, 0, 0);
      if (!(c[e >> 2] & 32)) zd(t, o, e) | 0;
      pe(e, 32, K, p, I ^ 8192);
      n = (p | 0) < (K | 0) ? K : p;
      break;
     }
     n = (r | 0) < 0 ? 6 : r;
     if (o) {
      o = (c[ea >> 2] | 0) + -28 | 0;
      c[ea >> 2] = o;
      q = v * 268435456.0;
     } else {
      q = v;
      o = c[ea >> 2] | 0;
     }
     F = (o | 0) < 0 ? ca : Q;
     E = F;
     o = F;
     do {
      B = ~~q >>> 0;
      c[o >> 2] = B;
      o = o + 4 | 0;
      q = (q - +(B >>> 0)) * 1.0e9;
     } while (q != 0.0);
     p = o;
     o = c[ea >> 2] | 0;
     if ((o | 0) > 0) {
      s = F;
      while (1) {
       t = (o | 0) > 29 ? 29 : o;
       r = p + -4 | 0;
       do if (r >>> 0 < s >>> 0) r = s; else {
        o = 0;
        do {
         B = vo(c[r >> 2] | 0, 0, t | 0) | 0;
         B = so(B | 0, D | 0, o | 0, 0) | 0;
         o = D;
         A = Eo(B | 0, o | 0, 1e9, 0) | 0;
         c[r >> 2] = A;
         o = Do(B | 0, o | 0, 1e9, 0) | 0;
         r = r + -4 | 0;
        } while (r >>> 0 >= s >>> 0);
        if (!o) {
         r = s;
         break;
        }
        r = s + -4 | 0;
        c[r >> 2] = o;
       } while (0);
       while (1) {
        if (p >>> 0 <= r >>> 0) break;
        o = p + -4 | 0;
        if (!(c[o >> 2] | 0)) p = o; else break;
       }
       o = (c[ea >> 2] | 0) - t | 0;
       c[ea >> 2] = o;
       if ((o | 0) > 0) s = r; else break;
      }
     } else r = F;
     if ((o | 0) < 0) {
      y = ((n + 25 | 0) / 9 | 0) + 1 | 0;
      z = (C | 0) == 102;
      w = r;
      while (1) {
       x = 0 - o | 0;
       x = (x | 0) > 9 ? 9 : x;
       do if (w >>> 0 < p >>> 0) {
        o = (1 << x) + -1 | 0;
        s = 1e9 >>> x;
        r = 0;
        t = w;
        do {
         B = c[t >> 2] | 0;
         c[t >> 2] = (B >>> x) + r;
         r = $(B & o, s) | 0;
         t = t + 4 | 0;
        } while (t >>> 0 < p >>> 0);
        o = (c[w >> 2] | 0) == 0 ? w + 4 | 0 : w;
        if (!r) {
         r = o;
         break;
        }
        c[p >> 2] = r;
        r = o;
        p = p + 4 | 0;
       } else r = (c[w >> 2] | 0) == 0 ? w + 4 | 0 : w; while (0);
       o = z ? F : r;
       p = (p - o >> 2 | 0) > (y | 0) ? o + (y << 2) | 0 : p;
       o = (c[ea >> 2] | 0) + x | 0;
       c[ea >> 2] = o;
       if ((o | 0) >= 0) {
        w = r;
        break;
       } else w = r;
      }
     } else w = r;
     do if (w >>> 0 < p >>> 0) {
      o = (E - w >> 2) * 9 | 0;
      s = c[w >> 2] | 0;
      if (s >>> 0 < 10) break; else r = 10;
      do {
       r = r * 10 | 0;
       o = o + 1 | 0;
      } while (s >>> 0 >= r >>> 0);
     } else o = 0; while (0);
     A = (C | 0) == 103;
     B = (n | 0) != 0;
     r = n - ((C | 0) != 102 ? o : 0) + ((B & A) << 31 >> 31) | 0;
     if ((r | 0) < (((p - E >> 2) * 9 | 0) + -9 | 0)) {
      t = r + 9216 | 0;
      z = (t | 0) / 9 | 0;
      r = F + (z + -1023 << 2) | 0;
      t = ((t | 0) % 9 | 0) + 1 | 0;
      if ((t | 0) < 9) {
       s = 10;
       do {
        s = s * 10 | 0;
        t = t + 1 | 0;
       } while ((t | 0) != 9);
      } else s = 10;
      x = c[r >> 2] | 0;
      y = (x >>> 0) % (s >>> 0) | 0;
      if ((y | 0) == 0 ? (F + (z + -1022 << 2) | 0) == (p | 0) : 0) s = w; else L = 163;
      do if ((L | 0) == 163) {
       L = 0;
       v = (((x >>> 0) / (s >>> 0) | 0) & 1 | 0) == 0 ? 9007199254740992.0 : 9007199254740994.0;
       t = (s | 0) / 2 | 0;
       do if (y >>> 0 < t >>> 0) q = .5; else {
        if ((y | 0) == (t | 0) ? (F + (z + -1022 << 2) | 0) == (p | 0) : 0) {
         q = 1.0;
         break;
        }
        q = 1.5;
       } while (0);
       do if (G) {
        if ((a[H >> 0] | 0) != 45) break;
        v = -v;
        q = -q;
       } while (0);
       t = x - y | 0;
       c[r >> 2] = t;
       if (!(v + q != v)) {
        s = w;
        break;
       }
       C = t + s | 0;
       c[r >> 2] = C;
       if (C >>> 0 > 999999999) {
        o = w;
        while (1) {
         s = r + -4 | 0;
         c[r >> 2] = 0;
         if (s >>> 0 < o >>> 0) {
          o = o + -4 | 0;
          c[o >> 2] = 0;
         }
         C = (c[s >> 2] | 0) + 1 | 0;
         c[s >> 2] = C;
         if (C >>> 0 > 999999999) r = s; else {
          w = o;
          r = s;
          break;
         }
        }
       }
       o = (E - w >> 2) * 9 | 0;
       t = c[w >> 2] | 0;
       if (t >>> 0 < 10) {
        s = w;
        break;
       } else s = 10;
       do {
        s = s * 10 | 0;
        o = o + 1 | 0;
       } while (t >>> 0 >= s >>> 0);
       s = w;
      } while (0);
      C = r + 4 | 0;
      w = s;
      p = p >>> 0 > C >>> 0 ? C : p;
     }
     y = 0 - o | 0;
     while (1) {
      if (p >>> 0 <= w >>> 0) {
       z = 0;
       C = p;
       break;
      }
      r = p + -4 | 0;
      if (!(c[r >> 2] | 0)) p = r; else {
       z = 1;
       C = p;
       break;
      }
     }
     do if (A) {
      n = (B & 1 ^ 1) + n | 0;
      if ((n | 0) > (o | 0) & (o | 0) > -5) {
       u = u + -1 | 0;
       n = n + -1 - o | 0;
      } else {
       u = u + -2 | 0;
       n = n + -1 | 0;
      }
      p = I & 8;
      if (p) break;
      do if (z) {
       p = c[C + -4 >> 2] | 0;
       if (!p) {
        r = 9;
        break;
       }
       if (!((p >>> 0) % 10 | 0)) {
        s = 10;
        r = 0;
       } else {
        r = 0;
        break;
       }
       do {
        s = s * 10 | 0;
        r = r + 1 | 0;
       } while (((p >>> 0) % (s >>> 0) | 0 | 0) == 0);
      } else r = 9; while (0);
      p = ((C - E >> 2) * 9 | 0) + -9 | 0;
      if ((u | 32 | 0) == 102) {
       p = p - r | 0;
       p = (p | 0) < 0 ? 0 : p;
       n = (n | 0) < (p | 0) ? n : p;
       p = 0;
       break;
      } else {
       p = p + o - r | 0;
       p = (p | 0) < 0 ? 0 : p;
       n = (n | 0) < (p | 0) ? n : p;
       p = 0;
       break;
      }
     } else p = I & 8; while (0);
     x = n | p;
     s = (x | 0) != 0 & 1;
     t = (u | 32 | 0) == 102;
     if (t) {
      o = (o | 0) > 0 ? o : 0;
      u = 0;
     } else {
      r = (o | 0) < 0 ? y : o;
      r = oe(r, ((r | 0) < 0) << 31 >> 31, X) | 0;
      if ((_ - r | 0) < 2) do {
       r = r + -1 | 0;
       a[r >> 0] = 48;
      } while ((_ - r | 0) < 2);
      a[r + -1 >> 0] = (o >> 31 & 2) + 43;
      E = r + -2 | 0;
      a[E >> 0] = u;
      o = _ - E | 0;
      u = E;
     }
     y = G + 1 + n + s + o | 0;
     pe(e, 32, K, y, I);
     if (!(c[e >> 2] & 32)) zd(H, G, e) | 0;
     pe(e, 48, K, y, I ^ 65536);
     do if (t) {
      r = w >>> 0 > F >>> 0 ? F : w;
      o = r;
      do {
       p = oe(c[o >> 2] | 0, 0, R) | 0;
       do if ((o | 0) == (r | 0)) {
        if ((p | 0) != (R | 0)) break;
        a[T >> 0] = 48;
        p = T;
       } else {
        if (p >>> 0 <= da >>> 0) break;
        do {
         p = p + -1 | 0;
         a[p >> 0] = 48;
        } while (p >>> 0 > da >>> 0);
       } while (0);
       if (!(c[e >> 2] & 32)) zd(p, S - p | 0, e) | 0;
       o = o + 4 | 0;
      } while (o >>> 0 <= F >>> 0);
      do if (x) {
       if (c[e >> 2] & 32) break;
       zd(19413, 1, e) | 0;
      } while (0);
      if ((n | 0) > 0 & o >>> 0 < C >>> 0) {
       p = o;
       while (1) {
        o = oe(c[p >> 2] | 0, 0, R) | 0;
        if (o >>> 0 > da >>> 0) do {
         o = o + -1 | 0;
         a[o >> 0] = 48;
        } while (o >>> 0 > da >>> 0);
        if (!(c[e >> 2] & 32)) zd(o, (n | 0) > 9 ? 9 : n, e) | 0;
        p = p + 4 | 0;
        o = n + -9 | 0;
        if (!((n | 0) > 9 & p >>> 0 < C >>> 0)) {
         n = o;
         break;
        } else n = o;
       }
      }
      pe(e, 48, n + 9 | 0, 9, 0);
     } else {
      t = z ? C : w + 4 | 0;
      if ((n | 0) > -1) {
       s = (p | 0) == 0;
       r = w;
       do {
        o = oe(c[r >> 2] | 0, 0, R) | 0;
        if ((o | 0) == (R | 0)) {
         a[T >> 0] = 48;
         o = T;
        }
        do if ((r | 0) == (w | 0)) {
         p = o + 1 | 0;
         if (!(c[e >> 2] & 32)) zd(o, 1, e) | 0;
         if (s & (n | 0) < 1) {
          o = p;
          break;
         }
         if (c[e >> 2] & 32) {
          o = p;
          break;
         }
         zd(19413, 1, e) | 0;
         o = p;
        } else {
         if (o >>> 0 <= da >>> 0) break;
         do {
          o = o + -1 | 0;
          a[o >> 0] = 48;
         } while (o >>> 0 > da >>> 0);
        } while (0);
        p = S - o | 0;
        if (!(c[e >> 2] & 32)) zd(o, (n | 0) > (p | 0) ? p : n, e) | 0;
        n = n - p | 0;
        r = r + 4 | 0;
       } while (r >>> 0 < t >>> 0 & (n | 0) > -1);
      }
      pe(e, 48, n + 18 | 0, 18, 0);
      if (c[e >> 2] & 32) break;
      zd(u, _ - u | 0, e) | 0;
     } while (0);
     pe(e, 32, K, y, I ^ 8192);
     n = (y | 0) < (K | 0) ? K : y;
    } else {
     t = (u & 32 | 0) != 0;
     s = q != q | 0.0 != 0.0;
     o = s ? 0 : G;
     r = o + 3 | 0;
     pe(e, 32, K, r, p);
     n = c[e >> 2] | 0;
     if (!(n & 32)) {
      zd(H, o, e) | 0;
      n = c[e >> 2] | 0;
     }
     if (!(n & 32)) zd(s ? (t ? 19405 : 19409) : t ? 19397 : 19401, 3, e) | 0;
     pe(e, 32, K, r, I ^ 8192);
     n = (r | 0) < (K | 0) ? K : r;
    } while (0);
    w = J;
    continue a;
   }
  default:
   {
    p = I;
    o = r;
    t = 0;
    u = 19361;
    n = N;
   }
  } while (0);
  g : do if ((L | 0) == 64) {
   p = ba;
   o = c[p >> 2] | 0;
   p = c[p + 4 >> 2] | 0;
   s = u & 32;
   if (!((o | 0) == 0 & (p | 0) == 0)) {
    n = N;
    do {
     n = n + -1 | 0;
     a[n >> 0] = d[19345 + (o & 15) >> 0] | s;
     o = to(o | 0, p | 0, 4) | 0;
     p = D;
    } while (!((o | 0) == 0 & (p | 0) == 0));
    L = ba;
    if ((t & 8 | 0) == 0 | (c[L >> 2] | 0) == 0 & (c[L + 4 >> 2] | 0) == 0) {
     o = t;
     t = 0;
     s = 19361;
     L = 77;
    } else {
     o = t;
     t = 2;
     s = 19361 + (u >> 4) | 0;
     L = 77;
    }
   } else {
    n = N;
    o = t;
    t = 0;
    s = 19361;
    L = 77;
   }
  } else if ((L | 0) == 76) {
   n = oe(n, o, N) | 0;
   o = I;
   t = p;
   L = 77;
  } else if ((L | 0) == 82) {
   L = 0;
   I = Zd(n, 0, r) | 0;
   H = (I | 0) == 0;
   w = n;
   o = H ? r : I - n | 0;
   t = 0;
   u = 19361;
   n = H ? n + r | 0 : I;
  } else if ((L | 0) == 86) {
   L = 0;
   o = 0;
   n = 0;
   s = c[ba >> 2] | 0;
   while (1) {
    p = c[s >> 2] | 0;
    if (!p) break;
    n = ud(fa, p) | 0;
    if ((n | 0) < 0 | n >>> 0 > (r - o | 0) >>> 0) break;
    o = n + o | 0;
    if (r >>> 0 > o >>> 0) s = s + 4 | 0; else break;
   }
   if ((n | 0) < 0) {
    m = -1;
    break a;
   }
   pe(e, 32, K, o, I);
   if (!o) {
    n = 0;
    L = 98;
   } else {
    p = 0;
    r = c[ba >> 2] | 0;
    while (1) {
     n = c[r >> 2] | 0;
     if (!n) {
      n = o;
      L = 98;
      break g;
     }
     n = ud(fa, n) | 0;
     p = n + p | 0;
     if ((p | 0) > (o | 0)) {
      n = o;
      L = 98;
      break g;
     }
     if (!(c[e >> 2] & 32)) zd(fa, n, e) | 0;
     if (p >>> 0 >= o >>> 0) {
      n = o;
      L = 98;
      break;
     } else r = r + 4 | 0;
    }
   }
  } while (0);
  if ((L | 0) == 98) {
   L = 0;
   pe(e, 32, K, n, I ^ 8192);
   w = J;
   n = (K | 0) > (n | 0) ? K : n;
   continue;
  }
  if ((L | 0) == 77) {
   L = 0;
   p = (r | 0) > -1 ? o & -65537 : o;
   o = ba;
   o = (c[o >> 2] | 0) != 0 | (c[o + 4 >> 2] | 0) != 0;
   if ((r | 0) != 0 | o) {
    o = (o & 1 ^ 1) + (U - n) | 0;
    w = n;
    o = (r | 0) > (o | 0) ? r : o;
    u = s;
    n = N;
   } else {
    w = N;
    o = 0;
    u = s;
    n = N;
   }
  }
  s = n - w | 0;
  o = (o | 0) < (s | 0) ? s : o;
  r = t + o | 0;
  n = (K | 0) < (r | 0) ? r : K;
  pe(e, 32, n, r, p);
  if (!(c[e >> 2] & 32)) zd(u, t, e) | 0;
  pe(e, 48, n, r, p ^ 65536);
  pe(e, 48, o, s, 0);
  if (!(c[e >> 2] & 32)) zd(w, s, e) | 0;
  pe(e, 32, n, r, p ^ 8192);
  w = J;
 }
 h : do if ((L | 0) == 245) if (!e) if (f) {
  m = 1;
  while (1) {
   f = c[l + (m << 2) >> 2] | 0;
   if (!f) break;
   ne(j + (m << 3) | 0, f, g);
   m = m + 1 | 0;
   if ((m | 0) >= 10) {
    m = 1;
    break h;
   }
  }
  if ((m | 0) < 10) while (1) {
   if (c[l + (m << 2) >> 2] | 0) {
    m = -1;
    break h;
   }
   m = m + 1 | 0;
   if ((m | 0) >= 10) {
    m = 1;
    break;
   }
  } else m = 1;
 } else m = 0; while (0);
 i = ha;
 return m | 0;
}

function Sc(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0.0, h = 0, j = 0.0, k = 0, l = 0, m = 0.0, n = 0, o = 0, p = 0, q = 0.0, r = 0.0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0.0;
 L = i;
 i = i + 512 | 0;
 H = L;
 switch (e | 0) {
 case 0:
  {
   K = 24;
   J = -149;
   A = 4;
   break;
  }
 case 1:
  {
   K = 53;
   J = -1074;
   A = 4;
   break;
  }
 case 2:
  {
   K = 53;
   J = -1074;
   A = 4;
   break;
  }
 default:
  g = 0.0;
 }
 a : do if ((A | 0) == 4) {
  E = b + 4 | 0;
  C = b + 100 | 0;
  do {
   e = c[E >> 2] | 0;
   if (e >>> 0 < (c[C >> 2] | 0) >>> 0) {
    c[E >> 2] = e + 1;
    e = d[e >> 0] | 0;
   } else e = Vc(b) | 0;
  } while ((Lc(e) | 0) != 0);
  b : do switch (e | 0) {
  case 43:
  case 45:
   {
    h = 1 - (((e | 0) == 45 & 1) << 1) | 0;
    e = c[E >> 2] | 0;
    if (e >>> 0 < (c[C >> 2] | 0) >>> 0) {
     c[E >> 2] = e + 1;
     e = d[e >> 0] | 0;
     I = h;
     break b;
    } else {
     e = Vc(b) | 0;
     I = h;
     break b;
    }
   }
  default:
   I = 1;
  } while (0);
  h = e;
  e = 0;
  do {
   if ((h | 32 | 0) != (a[16528 + e >> 0] | 0)) break;
   do if (e >>> 0 < 7) {
    h = c[E >> 2] | 0;
    if (h >>> 0 < (c[C >> 2] | 0) >>> 0) {
     c[E >> 2] = h + 1;
     h = d[h >> 0] | 0;
     break;
    } else {
     h = Vc(b) | 0;
     break;
    }
   } while (0);
   e = e + 1 | 0;
  } while (e >>> 0 < 8);
  c : do switch (e | 0) {
  case 8:
   break;
  case 3:
   {
    A = 23;
    break;
   }
  default:
   {
    k = (f | 0) != 0;
    if (k & e >>> 0 > 3) if ((e | 0) == 8) break c; else {
     A = 23;
     break c;
    }
    d : do if (!e) {
     e = 0;
     do {
      if ((h | 32 | 0) != (a[19405 + e >> 0] | 0)) break d;
      do if (e >>> 0 < 2) {
       h = c[E >> 2] | 0;
       if (h >>> 0 < (c[C >> 2] | 0) >>> 0) {
        c[E >> 2] = h + 1;
        h = d[h >> 0] | 0;
        break;
       } else {
        h = Vc(b) | 0;
        break;
       }
      } while (0);
      e = e + 1 | 0;
     } while (e >>> 0 < 3);
    } while (0);
    switch (e | 0) {
    case 3:
     {
      e = c[E >> 2] | 0;
      if (e >>> 0 < (c[C >> 2] | 0) >>> 0) {
       c[E >> 2] = e + 1;
       e = d[e >> 0] | 0;
      } else e = Vc(b) | 0;
      if ((e | 0) == 40) e = 1; else {
       if (!(c[C >> 2] | 0)) {
        g = s;
        break a;
       }
       c[E >> 2] = (c[E >> 2] | 0) + -1;
       g = s;
       break a;
      }
      while (1) {
       h = c[E >> 2] | 0;
       if (h >>> 0 < (c[C >> 2] | 0) >>> 0) {
        c[E >> 2] = h + 1;
        h = d[h >> 0] | 0;
       } else h = Vc(b) | 0;
       if (!((h + -48 | 0) >>> 0 < 10 | (h + -65 | 0) >>> 0 < 26) ? !((h | 0) == 95 | (h + -97 | 0) >>> 0 < 26) : 0) break;
       e = e + 1 | 0;
      }
      if ((h | 0) == 41) {
       g = s;
       break a;
      }
      h = (c[C >> 2] | 0) == 0;
      if (!h) c[E >> 2] = (c[E >> 2] | 0) + -1;
      if (!k) {
       c[(Rc() | 0) >> 2] = 22;
       Uc(b, 0);
       g = 0.0;
       break a;
      }
      if (!e) {
       g = s;
       break a;
      }
      while (1) {
       e = e + -1 | 0;
       if (!h) c[E >> 2] = (c[E >> 2] | 0) + -1;
       if (!e) {
        g = s;
        break a;
       }
      }
     }
    case 0:
     {
      do if ((h | 0) == 48) {
       e = c[E >> 2] | 0;
       if (e >>> 0 < (c[C >> 2] | 0) >>> 0) {
        c[E >> 2] = e + 1;
        e = d[e >> 0] | 0;
       } else e = Vc(b) | 0;
       if ((e | 32 | 0) != 120) {
        if (!(c[C >> 2] | 0)) {
         e = 48;
         break;
        }
        c[E >> 2] = (c[E >> 2] | 0) + -1;
        e = 48;
        break;
       }
       e = c[E >> 2] | 0;
       if (e >>> 0 < (c[C >> 2] | 0) >>> 0) {
        c[E >> 2] = e + 1;
        e = d[e >> 0] | 0;
        k = 0;
       } else {
        e = Vc(b) | 0;
        k = 0;
       }
       e : while (1) {
        switch (e | 0) {
        case 46:
         {
          A = 74;
          break e;
         }
        case 48:
         break;
        default:
         {
          y = 0;
          l = 0;
          x = 0;
          h = 0;
          n = k;
          o = 0;
          w = 0;
          m = 1.0;
          k = 0;
          g = 0.0;
          break e;
         }
        }
        e = c[E >> 2] | 0;
        if (e >>> 0 < (c[C >> 2] | 0) >>> 0) {
         c[E >> 2] = e + 1;
         e = d[e >> 0] | 0;
         k = 1;
         continue;
        } else {
         e = Vc(b) | 0;
         k = 1;
         continue;
        }
       }
       if ((A | 0) == 74) {
        e = c[E >> 2] | 0;
        if (e >>> 0 < (c[C >> 2] | 0) >>> 0) {
         c[E >> 2] = e + 1;
         e = d[e >> 0] | 0;
        } else e = Vc(b) | 0;
        if ((e | 0) == 48) {
         k = 0;
         h = 0;
         do {
          e = c[E >> 2] | 0;
          if (e >>> 0 < (c[C >> 2] | 0) >>> 0) {
           c[E >> 2] = e + 1;
           e = d[e >> 0] | 0;
          } else e = Vc(b) | 0;
          k = so(k | 0, h | 0, -1, -1) | 0;
          h = D;
         } while ((e | 0) == 48);
         y = 0;
         l = 0;
         x = k;
         n = 1;
         o = 1;
         w = 0;
         m = 1.0;
         k = 0;
         g = 0.0;
        } else {
         y = 0;
         l = 0;
         x = 0;
         h = 0;
         n = k;
         o = 1;
         w = 0;
         m = 1.0;
         k = 0;
         g = 0.0;
        }
       }
       while (1) {
        u = e + -48 | 0;
        p = e | 32;
        if (u >>> 0 >= 10) {
         v = (e | 0) == 46;
         if (!(v | (p + -97 | 0) >>> 0 < 6)) {
          p = x;
          u = y;
          break;
         }
         if (v) if (!o) {
          v = l;
          h = y;
          u = y;
          o = 1;
          p = w;
          j = m;
         } else {
          p = x;
          u = y;
          e = 46;
          break;
         } else A = 86;
        } else A = 86;
        if ((A | 0) == 86) {
         A = 0;
         e = (e | 0) > 57 ? p + -87 | 0 : u;
         do if (!((y | 0) < 0 | (y | 0) == 0 & l >>> 0 < 8)) {
          if ((y | 0) < 0 | (y | 0) == 0 & l >>> 0 < 14) {
           r = m * .0625;
           p = w;
           j = r;
           g = g + r * +(e | 0);
           break;
          }
          if ((w | 0) != 0 | (e | 0) == 0) {
           p = w;
           j = m;
          } else {
           p = 1;
           j = m;
           g = g + m * .5;
          }
         } else {
          p = w;
          j = m;
          k = e + (k << 4) | 0;
         } while (0);
         l = so(l | 0, y | 0, 1, 0) | 0;
         v = x;
         u = D;
         n = 1;
        }
        e = c[E >> 2] | 0;
        if (e >>> 0 < (c[C >> 2] | 0) >>> 0) {
         c[E >> 2] = e + 1;
         y = u;
         x = v;
         e = d[e >> 0] | 0;
         w = p;
         m = j;
         continue;
        } else {
         y = u;
         x = v;
         e = Vc(b) | 0;
         w = p;
         m = j;
         continue;
        }
       }
       if (!n) {
        e = (c[C >> 2] | 0) == 0;
        if (!e) c[E >> 2] = (c[E >> 2] | 0) + -1;
        if (f) {
         if (!e ? (z = c[E >> 2] | 0, c[E >> 2] = z + -1, (o | 0) != 0) : 0) c[E >> 2] = z + -2;
        } else Uc(b, 0);
        g = +(I | 0) * 0.0;
        break a;
       }
       n = (o | 0) == 0;
       o = n ? l : p;
       n = n ? u : h;
       if ((u | 0) < 0 | (u | 0) == 0 & l >>> 0 < 8) {
        h = u;
        do {
         k = k << 4;
         l = so(l | 0, h | 0, 1, 0) | 0;
         h = D;
        } while ((h | 0) < 0 | (h | 0) == 0 & l >>> 0 < 8);
       }
       if ((e | 32 | 0) == 112) {
        h = ee(b, f) | 0;
        e = D;
        if ((h | 0) == 0 & (e | 0) == -2147483648) {
         if (!f) {
          Uc(b, 0);
          g = 0.0;
          break a;
         }
         if (!(c[C >> 2] | 0)) {
          h = 0;
          e = 0;
         } else {
          c[E >> 2] = (c[E >> 2] | 0) + -1;
          h = 0;
          e = 0;
         }
        }
       } else if (!(c[C >> 2] | 0)) {
        h = 0;
        e = 0;
       } else {
        c[E >> 2] = (c[E >> 2] | 0) + -1;
        h = 0;
        e = 0;
       }
       H = vo(o | 0, n | 0, 2) | 0;
       H = so(H | 0, D | 0, -32, -1) | 0;
       e = so(H | 0, D | 0, h | 0, e | 0) | 0;
       h = D;
       if (!k) {
        g = +(I | 0) * 0.0;
        break a;
       }
       if ((h | 0) > 0 | (h | 0) == 0 & e >>> 0 > (0 - J | 0) >>> 0) {
        c[(Rc() | 0) >> 2] = 34;
        g = +(I | 0) * 17976931348623157.0e292 * 17976931348623157.0e292;
        break a;
       }
       H = J + -106 | 0;
       G = ((H | 0) < 0) << 31 >> 31;
       if ((h | 0) < (G | 0) | (h | 0) == (G | 0) & e >>> 0 < H >>> 0) {
        c[(Rc() | 0) >> 2] = 34;
        g = +(I | 0) * 2.2250738585072014e-308 * 2.2250738585072014e-308;
        break a;
       }
       if ((k | 0) > -1) {
        do {
         G = !(g >= .5);
         H = G & 1 | k << 1;
         k = H ^ 1;
         g = g + (G ? g : g + -1.0);
         e = so(e | 0, h | 0, -1, -1) | 0;
         h = D;
        } while ((H | 0) > -1);
        l = e;
        m = g;
       } else {
        l = e;
        m = g;
       }
       e = qo(32, 0, J | 0, ((J | 0) < 0) << 31 >> 31 | 0) | 0;
       e = so(l | 0, h | 0, e | 0, D | 0) | 0;
       J = D;
       if (0 > (J | 0) | 0 == (J | 0) & K >>> 0 > e >>> 0) if ((e | 0) < 0) {
        e = 0;
        A = 127;
       } else A = 125; else {
        e = K;
        A = 125;
       }
       if ((A | 0) == 125) if ((e | 0) < 53) A = 127; else {
        h = e;
        j = +(I | 0);
        g = 0.0;
       }
       if ((A | 0) == 127) {
        g = +(I | 0);
        h = e;
        j = g;
        g = +ed(+jd(1.0, 84 - e | 0), g);
       }
       K = (k & 1 | 0) == 0 & (m != 0.0 & (h | 0) < 32);
       g = j * (K ? 0.0 : m) + (g + j * +(((K & 1) + k | 0) >>> 0)) - g;
       if (!(g != 0.0)) c[(Rc() | 0) >> 2] = 34;
       g = +kd(g, l);
       break a;
      } else e = h; while (0);
      F = J + K | 0;
      G = 0 - F | 0;
      k = 0;
      f : while (1) {
       switch (e | 0) {
       case 46:
        {
         A = 138;
         break f;
        }
       case 48:
        break;
       default:
        {
         h = 0;
         p = 0;
         o = 0;
         break f;
        }
       }
       e = c[E >> 2] | 0;
       if (e >>> 0 < (c[C >> 2] | 0) >>> 0) {
        c[E >> 2] = e + 1;
        e = d[e >> 0] | 0;
        k = 1;
        continue;
       } else {
        e = Vc(b) | 0;
        k = 1;
        continue;
       }
      }
      if ((A | 0) == 138) {
       e = c[E >> 2] | 0;
       if (e >>> 0 < (c[C >> 2] | 0) >>> 0) {
        c[E >> 2] = e + 1;
        e = d[e >> 0] | 0;
       } else e = Vc(b) | 0;
       if ((e | 0) == 48) {
        h = 0;
        e = 0;
        while (1) {
         h = so(h | 0, e | 0, -1, -1) | 0;
         k = D;
         e = c[E >> 2] | 0;
         if (e >>> 0 < (c[C >> 2] | 0) >>> 0) {
          c[E >> 2] = e + 1;
          e = d[e >> 0] | 0;
         } else e = Vc(b) | 0;
         if ((e | 0) == 48) e = k; else {
          p = k;
          k = 1;
          o = 1;
          break;
         }
        }
       } else {
        h = 0;
        p = 0;
        o = 1;
       }
      }
      c[H >> 2] = 0;
      n = e + -48 | 0;
      l = (e | 0) == 46;
      g : do if (l | n >>> 0 < 10) {
       B = H + 496 | 0;
       y = 0;
       v = 0;
       w = l;
       A = p;
       u = k;
       z = o;
       k = 0;
       l = 0;
       o = 0;
       h : while (1) {
        do if (w) if (!z) {
         h = y;
         p = v;
         z = 1;
        } else {
         p = A;
         e = y;
         n = v;
         break h;
        } else {
         w = so(y | 0, v | 0, 1, 0) | 0;
         v = D;
         x = (e | 0) != 48;
         if ((l | 0) >= 125) {
          if (!x) {
           p = A;
           y = w;
           break;
          }
          c[B >> 2] = c[B >> 2] | 1;
          p = A;
          y = w;
          break;
         }
         p = H + (l << 2) | 0;
         if (k) n = e + -48 + ((c[p >> 2] | 0) * 10 | 0) | 0;
         c[p >> 2] = n;
         k = k + 1 | 0;
         n = (k | 0) == 9;
         p = A;
         y = w;
         u = 1;
         k = n ? 0 : k;
         l = (n & 1) + l | 0;
         o = x ? w : o;
        } while (0);
        e = c[E >> 2] | 0;
        if (e >>> 0 < (c[C >> 2] | 0) >>> 0) {
         c[E >> 2] = e + 1;
         e = d[e >> 0] | 0;
        } else e = Vc(b) | 0;
        n = e + -48 | 0;
        w = (e | 0) == 46;
        if (!(w | n >>> 0 < 10)) {
         n = z;
         A = 161;
         break g;
        } else A = p;
       }
       u = (u | 0) != 0;
       A = 169;
      } else {
       y = 0;
       v = 0;
       u = k;
       n = o;
       k = 0;
       l = 0;
       o = 0;
       A = 161;
      } while (0);
      do if ((A | 0) == 161) {
       B = (n | 0) == 0;
       h = B ? y : h;
       p = B ? v : p;
       u = (u | 0) != 0;
       if (!((e | 32 | 0) == 101 & u)) if ((e | 0) > -1) {
        e = y;
        n = v;
        A = 169;
        break;
       } else {
        e = y;
        n = v;
        A = 171;
        break;
       }
       n = ee(b, f) | 0;
       e = D;
       if ((n | 0) == 0 & (e | 0) == -2147483648) {
        if (!f) {
         Uc(b, 0);
         g = 0.0;
         break;
        }
        if (!(c[C >> 2] | 0)) {
         n = 0;
         e = 0;
        } else {
         c[E >> 2] = (c[E >> 2] | 0) + -1;
         n = 0;
         e = 0;
        }
       }
       h = so(n | 0, e | 0, h | 0, p | 0) | 0;
       u = y;
       p = D;
       n = v;
       A = 173;
      } while (0);
      if ((A | 0) == 169) if (c[C >> 2] | 0) {
       c[E >> 2] = (c[E >> 2] | 0) + -1;
       if (u) {
        u = e;
        A = 173;
       } else A = 172;
      } else A = 171;
      if ((A | 0) == 171) if (u) {
       u = e;
       A = 173;
      } else A = 172;
      do if ((A | 0) == 172) {
       c[(Rc() | 0) >> 2] = 22;
       Uc(b, 0);
       g = 0.0;
      } else if ((A | 0) == 173) {
       e = c[H >> 2] | 0;
       if (!e) {
        g = +(I | 0) * 0.0;
        break;
       }
       if (((n | 0) < 0 | (n | 0) == 0 & u >>> 0 < 10) & ((h | 0) == (u | 0) & (p | 0) == (n | 0)) ? K >>> 0 > 30 | (e >>> K | 0) == 0 : 0) {
        g = +(I | 0) * +(e >>> 0);
        break;
       }
       b = (J | 0) / -2 | 0;
       E = ((b | 0) < 0) << 31 >> 31;
       if ((p | 0) > (E | 0) | (p | 0) == (E | 0) & h >>> 0 > b >>> 0) {
        c[(Rc() | 0) >> 2] = 34;
        g = +(I | 0) * 17976931348623157.0e292 * 17976931348623157.0e292;
        break;
       }
       b = J + -106 | 0;
       E = ((b | 0) < 0) << 31 >> 31;
       if ((p | 0) < (E | 0) | (p | 0) == (E | 0) & h >>> 0 < b >>> 0) {
        c[(Rc() | 0) >> 2] = 34;
        g = +(I | 0) * 2.2250738585072014e-308 * 2.2250738585072014e-308;
        break;
       }
       if (k) {
        if ((k | 0) < 9) {
         n = H + (l << 2) | 0;
         e = c[n >> 2] | 0;
         do {
          e = e * 10 | 0;
          k = k + 1 | 0;
         } while ((k | 0) != 9);
         c[n >> 2] = e;
        }
        l = l + 1 | 0;
       }
       if ((o | 0) < 9 ? (o | 0) <= (h | 0) & (h | 0) < 18 : 0) {
        if ((h | 0) == 9) {
         g = +(I | 0) * +((c[H >> 2] | 0) >>> 0);
         break;
        }
        if ((h | 0) < 9) {
         g = +(I | 0) * +((c[H >> 2] | 0) >>> 0) / +(c[2584 + (8 - h << 2) >> 2] | 0);
         break;
        }
        b = K + 27 + ($(h, -3) | 0) | 0;
        e = c[H >> 2] | 0;
        if ((b | 0) > 30 | (e >>> b | 0) == 0) {
         g = +(I | 0) * +(e >>> 0) * +(c[2584 + (h + -10 << 2) >> 2] | 0);
         break;
        }
       }
       e = (h | 0) % 9 | 0;
       if (!e) {
        k = 0;
        e = 0;
       } else {
        u = (h | 0) > -1 ? e : e + 9 | 0;
        n = c[2584 + (8 - u << 2) >> 2] | 0;
        if (l) {
         o = 1e9 / (n | 0) | 0;
         k = 0;
         e = 0;
         p = 0;
         do {
          C = H + (p << 2) | 0;
          E = c[C >> 2] | 0;
          b = ((E >>> 0) / (n >>> 0) | 0) + e | 0;
          c[C >> 2] = b;
          e = $((E >>> 0) % (n >>> 0) | 0, o) | 0;
          b = (p | 0) == (k | 0) & (b | 0) == 0;
          p = p + 1 | 0;
          h = b ? h + -9 | 0 : h;
          k = b ? p & 127 : k;
         } while ((p | 0) != (l | 0));
         if (e) {
          c[H + (l << 2) >> 2] = e;
          l = l + 1 | 0;
         }
        } else {
         k = 0;
         l = 0;
        }
        e = 0;
        h = 9 - u + h | 0;
       }
       i : while (1) {
        v = (h | 0) < 18;
        w = (h | 0) == 18;
        x = H + (k << 2) | 0;
        do {
         if (!v) {
          if (!w) break i;
          if ((c[x >> 2] | 0) >>> 0 >= 9007199) {
           h = 18;
           break i;
          }
         }
         n = 0;
         o = l + 127 | 0;
         while (1) {
          u = o & 127;
          p = H + (u << 2) | 0;
          o = vo(c[p >> 2] | 0, 0, 29) | 0;
          o = so(o | 0, D | 0, n | 0, 0) | 0;
          n = D;
          if (n >>> 0 > 0 | (n | 0) == 0 & o >>> 0 > 1e9) {
           b = Do(o | 0, n | 0, 1e9, 0) | 0;
           o = Eo(o | 0, n | 0, 1e9, 0) | 0;
           n = b;
          } else n = 0;
          c[p >> 2] = o;
          b = (u | 0) == (k | 0);
          l = (u | 0) != (l + 127 & 127 | 0) | b ? l : (o | 0) == 0 ? u : l;
          if (b) break; else o = u + -1 | 0;
         }
         e = e + -29 | 0;
        } while ((n | 0) == 0);
        k = k + 127 & 127;
        if ((k | 0) == (l | 0)) {
         b = l + 127 & 127;
         l = H + ((l + 126 & 127) << 2) | 0;
         c[l >> 2] = c[l >> 2] | c[H + (b << 2) >> 2];
         l = b;
        }
        c[H + (k << 2) >> 2] = n;
        h = h + 9 | 0;
       }
       j : while (1) {
        y = l + 1 & 127;
        x = H + ((l + 127 & 127) << 2) | 0;
        while (1) {
         v = (h | 0) == 18;
         w = (h | 0) > 27 ? 9 : 1;
         u = v ^ 1;
         while (1) {
          o = k & 127;
          p = (o | 0) == (l | 0);
          do if (!p) {
           n = c[H + (o << 2) >> 2] | 0;
           if (n >>> 0 < 9007199) {
            A = 219;
            break;
           }
           if (n >>> 0 > 9007199) break;
           n = k + 1 & 127;
           if ((n | 0) == (l | 0)) {
            A = 219;
            break;
           }
           n = c[H + (n << 2) >> 2] | 0;
           if (n >>> 0 < 254740991) {
            A = 219;
            break;
           }
           if (!(n >>> 0 > 254740991 | u)) {
            h = o;
            break j;
           }
          } else A = 219; while (0);
          if ((A | 0) == 219 ? (A = 0, v) : 0) {
           A = 220;
           break j;
          }
          e = e + w | 0;
          if ((k | 0) == (l | 0)) k = l; else break;
         }
         u = (1 << w) + -1 | 0;
         v = 1e9 >>> w;
         o = k;
         n = 0;
         p = k;
         while (1) {
          E = H + (p << 2) | 0;
          b = c[E >> 2] | 0;
          k = (b >>> w) + n | 0;
          c[E >> 2] = k;
          n = $(b & u, v) | 0;
          k = (p | 0) == (o | 0) & (k | 0) == 0;
          p = p + 1 & 127;
          h = k ? h + -9 | 0 : h;
          k = k ? p : o;
          if ((p | 0) == (l | 0)) break; else o = k;
         }
         if (!n) continue;
         if ((y | 0) != (k | 0)) break;
         c[x >> 2] = c[x >> 2] | 1;
        }
        c[H + (l << 2) >> 2] = n;
        l = y;
       }
       if ((A | 0) == 220) if (p) {
        c[H + (y + -1 << 2) >> 2] = 0;
        h = l;
        l = y;
       } else h = o;
       g = +((c[H + (h << 2) >> 2] | 0) >>> 0);
       h = k + 1 & 127;
       if ((h | 0) == (l | 0)) {
        l = k + 2 & 127;
        c[H + (l + -1 << 2) >> 2] = 0;
       }
       r = +(I | 0);
       j = r * (g * 1.0e9 + +((c[H + (h << 2) >> 2] | 0) >>> 0));
       v = e + 53 | 0;
       p = v - J | 0;
       u = (p | 0) < (K | 0);
       h = u & 1;
       o = u ? ((p | 0) < 0 ? 0 : p) : K;
       if ((o | 0) < 53) {
        M = +ed(+jd(1.0, 105 - o | 0), j);
        m = +gd(j, +jd(1.0, 53 - o | 0));
        q = M;
        g = m;
        m = M + (j - m);
       } else {
        q = 0.0;
        g = 0.0;
        m = j;
       }
       n = k + 2 & 127;
       do if ((n | 0) == (l | 0)) j = g; else {
        n = c[H + (n << 2) >> 2] | 0;
        do if (n >>> 0 >= 5e8) {
         if (n >>> 0 > 5e8) {
          g = r * .75 + g;
          break;
         }
         if ((k + 3 & 127 | 0) == (l | 0)) {
          g = r * .5 + g;
          break;
         } else {
          g = r * .75 + g;
          break;
         }
        } else {
         if ((n | 0) == 0 ? (k + 3 & 127 | 0) == (l | 0) : 0) break;
         g = r * .25 + g;
        } while (0);
        if ((53 - o | 0) <= 1) {
         j = g;
         break;
        }
        if (+gd(g, 1.0) != 0.0) {
         j = g;
         break;
        }
        j = g + 1.0;
       } while (0);
       g = m + j - q;
       do if ((v & 2147483647 | 0) > (-2 - F | 0)) {
        if (+O(+g) >= 9007199254740992.0) {
         h = u & (o | 0) == (p | 0) ? 0 : h;
         e = e + 1 | 0;
         g = g * .5;
        }
        if ((e + 50 | 0) <= (G | 0) ? !(j != 0.0 & (h | 0) != 0) : 0) break;
        c[(Rc() | 0) >> 2] = 34;
       } while (0);
       g = +kd(g, e);
      } while (0);
      break a;
     }
    default:
     {
      if (c[C >> 2] | 0) c[E >> 2] = (c[E >> 2] | 0) + -1;
      c[(Rc() | 0) >> 2] = 22;
      Uc(b, 0);
      g = 0.0;
      break a;
     }
    }
   }
  } while (0);
  if ((A | 0) == 23) {
   h = (c[C >> 2] | 0) == 0;
   if (!h) c[E >> 2] = (c[E >> 2] | 0) + -1;
   if ((f | 0) != 0 & e >>> 0 > 3) do {
    if (!h) c[E >> 2] = (c[E >> 2] | 0) + -1;
    e = e + -1 | 0;
   } while (e >>> 0 > 3);
  }
  g = +(I | 0) * t;
 } while (0);
 i = L;
 return +g;
}

function Xj(e, f, g, h, j, k, l, m, n, o, p) {
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 k = k | 0;
 l = l | 0;
 m = m | 0;
 n = n | 0;
 o = o | 0;
 p = p | 0;
 var q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, _ = 0, $ = 0, aa = 0, ba = 0, ca = 0;
 ca = i;
 i = i + 512 | 0;
 O = ca + 88 | 0;
 t = ca + 96 | 0;
 ba = ca + 80 | 0;
 S = ca + 72 | 0;
 R = ca + 68 | 0;
 T = ca + 500 | 0;
 P = ca + 497 | 0;
 U = ca + 496 | 0;
 Y = ca + 56 | 0;
 aa = ca + 44 | 0;
 _ = ca + 32 | 0;
 Z = ca + 20 | 0;
 $ = ca + 8 | 0;
 Q = ca + 4 | 0;
 W = ca;
 c[O >> 2] = p;
 c[ba >> 2] = t;
 X = ba + 4 | 0;
 c[X >> 2] = 98;
 c[S >> 2] = t;
 c[R >> 2] = t + 400;
 c[Y >> 2] = 0;
 c[Y + 4 >> 2] = 0;
 c[Y + 8 >> 2] = 0;
 c[aa >> 2] = 0;
 c[aa + 4 >> 2] = 0;
 c[aa + 8 >> 2] = 0;
 c[_ >> 2] = 0;
 c[_ + 4 >> 2] = 0;
 c[_ + 8 >> 2] = 0;
 c[Z >> 2] = 0;
 c[Z + 4 >> 2] = 0;
 c[Z + 8 >> 2] = 0;
 c[$ >> 2] = 0;
 c[$ + 4 >> 2] = 0;
 c[$ + 8 >> 2] = 0;
 _j(g, h, T, P, U, Y, aa, _, Z, Q);
 c[o >> 2] = c[n >> 2];
 H = m + 8 | 0;
 I = _ + 4 | 0;
 J = Z + 4 | 0;
 K = Z + 8 | 0;
 L = Z + 1 | 0;
 M = _ + 8 | 0;
 N = _ + 1 | 0;
 x = (j & 512 | 0) != 0;
 y = aa + 8 | 0;
 z = aa + 1 | 0;
 A = aa + 4 | 0;
 B = $ + 4 | 0;
 C = $ + 8 | 0;
 D = $ + 1 | 0;
 E = T + 3 | 0;
 F = Y + 4 | 0;
 G = 0;
 s = 0;
 a : while (1) {
  p = c[e >> 2] | 0;
  do if (p) {
   if ((c[p + 12 >> 2] | 0) == (c[p + 16 >> 2] | 0)) if ((wb[c[(c[p >> 2] | 0) + 36 >> 2] & 63](p) | 0) == -1) {
    c[e >> 2] = 0;
    p = 0;
    break;
   } else {
    p = c[e >> 2] | 0;
    break;
   }
  } else p = 0; while (0);
  p = (p | 0) == 0;
  m = c[f >> 2] | 0;
  do if (m) {
   if ((c[m + 12 >> 2] | 0) != (c[m + 16 >> 2] | 0)) if (p) break; else {
    V = 202;
    break a;
   }
   if ((wb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0) != -1) if (p) break; else {
    V = 202;
    break a;
   } else {
    c[f >> 2] = 0;
    V = 12;
    break;
   }
  } else V = 12; while (0);
  if ((V | 0) == 12) {
   V = 0;
   if (p) {
    V = 202;
    break;
   } else m = 0;
  }
  b : do switch (a[T + G >> 0] | 0) {
  case 1:
   {
    if ((G | 0) != 3) {
     p = c[e >> 2] | 0;
     g = c[p + 12 >> 2] | 0;
     if ((g | 0) == (c[p + 16 >> 2] | 0)) p = wb[c[(c[p >> 2] | 0) + 36 >> 2] & 63](p) | 0; else p = d[g >> 0] | 0;
     if ((p & 255) << 24 >> 24 <= -1) {
      V = 26;
      break a;
     }
     if (!(b[(c[H >> 2] | 0) + (p << 24 >> 24 << 1) >> 1] & 8192)) {
      V = 26;
      break a;
     }
     p = c[e >> 2] | 0;
     g = p + 12 | 0;
     h = c[g >> 2] | 0;
     if ((h | 0) == (c[p + 16 >> 2] | 0)) p = wb[c[(c[p >> 2] | 0) + 40 >> 2] & 63](p) | 0; else {
      c[g >> 2] = h + 1;
      p = d[h >> 0] | 0;
     }
     hf($, p & 255);
     p = m;
     g = m;
     V = 28;
    }
    break;
   }
  case 0:
   {
    if ((G | 0) != 3) {
     p = m;
     g = m;
     V = 28;
    }
    break;
   }
  case 3:
   {
    h = a[_ >> 0] | 0;
    p = (h & 1) == 0 ? (h & 255) >>> 1 : c[I >> 2] | 0;
    g = a[Z >> 0] | 0;
    g = (g & 1) == 0 ? (g & 255) >>> 1 : c[J >> 2] | 0;
    if ((p | 0) != (0 - g | 0)) {
     j = (p | 0) == 0;
     q = c[e >> 2] | 0;
     r = c[q + 12 >> 2] | 0;
     p = c[q + 16 >> 2] | 0;
     m = (r | 0) == (p | 0);
     if (j | (g | 0) == 0) {
      if (m) p = wb[c[(c[q >> 2] | 0) + 36 >> 2] & 63](q) | 0; else p = d[r >> 0] | 0;
      p = p & 255;
      if (j) {
       if (p << 24 >> 24 != (a[((a[Z >> 0] & 1) == 0 ? L : c[K >> 2] | 0) >> 0] | 0)) break b;
       p = c[e >> 2] | 0;
       m = p + 12 | 0;
       g = c[m >> 2] | 0;
       if ((g | 0) == (c[p + 16 >> 2] | 0)) wb[c[(c[p >> 2] | 0) + 40 >> 2] & 63](p) | 0; else c[m >> 2] = g + 1;
       a[l >> 0] = 1;
       w = a[Z >> 0] | 0;
       s = ((w & 1) == 0 ? (w & 255) >>> 1 : c[J >> 2] | 0) >>> 0 > 1 ? Z : s;
       break b;
      }
      if (p << 24 >> 24 != (a[((a[_ >> 0] & 1) == 0 ? N : c[M >> 2] | 0) >> 0] | 0)) {
       a[l >> 0] = 1;
       break b;
      }
      p = c[e >> 2] | 0;
      m = p + 12 | 0;
      g = c[m >> 2] | 0;
      if ((g | 0) == (c[p + 16 >> 2] | 0)) wb[c[(c[p >> 2] | 0) + 40 >> 2] & 63](p) | 0; else c[m >> 2] = g + 1;
      w = a[_ >> 0] | 0;
      s = ((w & 1) == 0 ? (w & 255) >>> 1 : c[I >> 2] | 0) >>> 0 > 1 ? _ : s;
      break b;
     }
     if (m) {
      j = wb[c[(c[q >> 2] | 0) + 36 >> 2] & 63](q) | 0;
      p = c[e >> 2] | 0;
      h = a[_ >> 0] | 0;
      q = p;
      g = c[p + 12 >> 2] | 0;
      p = c[p + 16 >> 2] | 0;
     } else {
      j = d[r >> 0] | 0;
      g = r;
     }
     m = q + 12 | 0;
     p = (g | 0) == (p | 0);
     if ((j & 255) << 24 >> 24 == (a[((h & 1) == 0 ? N : c[M >> 2] | 0) >> 0] | 0)) {
      if (p) wb[c[(c[q >> 2] | 0) + 40 >> 2] & 63](q) | 0; else c[m >> 2] = g + 1;
      w = a[_ >> 0] | 0;
      s = ((w & 1) == 0 ? (w & 255) >>> 1 : c[I >> 2] | 0) >>> 0 > 1 ? _ : s;
      break b;
     }
     if (p) p = wb[c[(c[q >> 2] | 0) + 36 >> 2] & 63](q) | 0; else p = d[g >> 0] | 0;
     if ((p & 255) << 24 >> 24 != (a[((a[Z >> 0] & 1) == 0 ? L : c[K >> 2] | 0) >> 0] | 0)) {
      V = 82;
      break a;
     }
     p = c[e >> 2] | 0;
     m = p + 12 | 0;
     g = c[m >> 2] | 0;
     if ((g | 0) == (c[p + 16 >> 2] | 0)) wb[c[(c[p >> 2] | 0) + 40 >> 2] & 63](p) | 0; else c[m >> 2] = g + 1;
     a[l >> 0] = 1;
     w = a[Z >> 0] | 0;
     s = ((w & 1) == 0 ? (w & 255) >>> 1 : c[J >> 2] | 0) >>> 0 > 1 ? Z : s;
    }
    break;
   }
  case 2:
   {
    if (!(G >>> 0 < 2 | (s | 0) != 0) ? !(x | (G | 0) == 2 & (a[E >> 0] | 0) != 0) : 0) {
     s = 0;
     break b;
    }
    v = a[aa >> 0] | 0;
    p = (v & 1) == 0;
    w = c[y >> 2] | 0;
    h = p ? z : w;
    u = h;
    c : do if ((G | 0) != 0 ? (d[T + (G + -1) >> 0] | 0) < 2 : 0) {
     r = p ? (v & 255) >>> 1 : c[A >> 2] | 0;
     j = h + r | 0;
     q = c[H >> 2] | 0;
     d : do if (!r) g = u; else {
      r = h;
      g = u;
      do {
       p = a[r >> 0] | 0;
       if (p << 24 >> 24 <= -1) break d;
       if (!(b[q + (p << 24 >> 24 << 1) >> 1] & 8192)) break d;
       r = r + 1 | 0;
       g = r;
      } while ((r | 0) != (j | 0));
     } while (0);
     j = g - u | 0;
     q = a[$ >> 0] | 0;
     p = (q & 1) == 0;
     q = p ? (q & 255) >>> 1 : c[B >> 2] | 0;
     if (q >>> 0 >= j >>> 0) {
      p = p ? D : c[C >> 2] | 0;
      r = p + q | 0;
      if ((g | 0) != (u | 0)) {
       p = p + (q - j) | 0;
       while (1) {
        if ((a[p >> 0] | 0) != (a[h >> 0] | 0)) {
         g = u;
         break c;
        }
        p = p + 1 | 0;
        if ((p | 0) == (r | 0)) break; else h = h + 1 | 0;
       }
      }
     } else g = u;
    } else g = u; while (0);
    p = (v & 1) == 0;
    p = (p ? z : w) + (p ? (v & 255) >>> 1 : c[A >> 2] | 0) | 0;
    e : do if ((g | 0) != (p | 0)) {
     j = m;
     h = m;
     p = g;
     while (1) {
      m = c[e >> 2] | 0;
      do if (m) {
       if ((c[m + 12 >> 2] | 0) == (c[m + 16 >> 2] | 0)) if ((wb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0) == -1) {
        c[e >> 2] = 0;
        m = 0;
        break;
       } else {
        m = c[e >> 2] | 0;
        break;
       }
      } else m = 0; while (0);
      g = (m | 0) == 0;
      do if (h) {
       if ((c[h + 12 >> 2] | 0) != (c[h + 16 >> 2] | 0)) if (g) {
        m = j;
        q = h;
        break;
       } else break e;
       if ((wb[c[(c[h >> 2] | 0) + 36 >> 2] & 63](h) | 0) != -1) if (g ^ (j | 0) == 0) {
        m = j;
        q = j;
        break;
       } else break e; else {
        c[f >> 2] = 0;
        m = 0;
        V = 107;
        break;
       }
      } else {
       m = j;
       V = 107;
      } while (0);
      if ((V | 0) == 107) {
       V = 0;
       if (g) break e; else q = 0;
      }
      g = c[e >> 2] | 0;
      h = c[g + 12 >> 2] | 0;
      if ((h | 0) == (c[g + 16 >> 2] | 0)) g = wb[c[(c[g >> 2] | 0) + 36 >> 2] & 63](g) | 0; else g = d[h >> 0] | 0;
      if ((g & 255) << 24 >> 24 != (a[p >> 0] | 0)) break e;
      g = c[e >> 2] | 0;
      h = g + 12 | 0;
      j = c[h >> 2] | 0;
      if ((j | 0) == (c[g + 16 >> 2] | 0)) wb[c[(c[g >> 2] | 0) + 40 >> 2] & 63](g) | 0; else c[h >> 2] = j + 1;
      p = p + 1 | 0;
      g = a[aa >> 0] | 0;
      w = (g & 1) == 0;
      g = (w ? z : c[y >> 2] | 0) + (w ? (g & 255) >>> 1 : c[A >> 2] | 0) | 0;
      if ((p | 0) == (g | 0)) {
       p = g;
       break;
      } else {
       j = m;
       h = q;
      }
     }
    } while (0);
    if (x ? (w = a[aa >> 0] | 0, v = (w & 1) == 0, (p | 0) != ((v ? z : c[y >> 2] | 0) + (v ? (w & 255) >>> 1 : c[A >> 2] | 0) | 0)) : 0) {
     V = 119;
     break a;
    }
    break;
   }
  case 4:
   {
    r = a[U >> 0] | 0;
    j = m;
    h = m;
    p = 0;
    f : while (1) {
     m = c[e >> 2] | 0;
     do if (m) {
      if ((c[m + 12 >> 2] | 0) == (c[m + 16 >> 2] | 0)) if ((wb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0) == -1) {
       c[e >> 2] = 0;
       m = 0;
       break;
      } else {
       m = c[e >> 2] | 0;
       break;
      }
     } else m = 0; while (0);
     g = (m | 0) == 0;
     do if (h) {
      if ((c[h + 12 >> 2] | 0) != (c[h + 16 >> 2] | 0)) if (g) {
       m = j;
       q = h;
       break;
      } else {
       m = j;
       break f;
      }
      if ((wb[c[(c[h >> 2] | 0) + 36 >> 2] & 63](h) | 0) != -1) if (g ^ (j | 0) == 0) {
       m = j;
       q = j;
       break;
      } else {
       m = j;
       break f;
      } else {
       c[f >> 2] = 0;
       m = 0;
       V = 130;
       break;
      }
     } else {
      m = j;
      V = 130;
     } while (0);
     if ((V | 0) == 130) {
      V = 0;
      if (g) break; else q = 0;
     }
     g = c[e >> 2] | 0;
     h = c[g + 12 >> 2] | 0;
     if ((h | 0) == (c[g + 16 >> 2] | 0)) g = wb[c[(c[g >> 2] | 0) + 36 >> 2] & 63](g) | 0; else g = d[h >> 0] | 0;
     h = g & 255;
     if (h << 24 >> 24 > -1 ? (b[(c[H >> 2] | 0) + (g << 24 >> 24 << 1) >> 1] & 2048) != 0 : 0) {
      g = c[o >> 2] | 0;
      if ((g | 0) == (c[O >> 2] | 0)) {
       _m(n, o, O);
       g = c[o >> 2] | 0;
      }
      c[o >> 2] = g + 1;
      a[g >> 0] = h;
      p = p + 1 | 0;
     } else {
      w = a[Y >> 0] | 0;
      if (!(h << 24 >> 24 == r << 24 >> 24 & ((p | 0) != 0 ? (((w & 1) == 0 ? (w & 255) >>> 1 : c[F >> 2] | 0) | 0) != 0 : 0))) break;
      if ((t | 0) == (c[R >> 2] | 0)) {
       $m(ba, S, R);
       t = c[S >> 2] | 0;
      }
      w = t + 4 | 0;
      c[S >> 2] = w;
      c[t >> 2] = p;
      t = w;
      p = 0;
     }
     g = c[e >> 2] | 0;
     h = g + 12 | 0;
     j = c[h >> 2] | 0;
     if ((j | 0) == (c[g + 16 >> 2] | 0)) {
      wb[c[(c[g >> 2] | 0) + 40 >> 2] & 63](g) | 0;
      j = m;
      h = q;
      continue;
     } else {
      c[h >> 2] = j + 1;
      j = m;
      h = q;
      continue;
     }
    }
    if ((p | 0) != 0 ? (c[ba >> 2] | 0) != (t | 0) : 0) {
     if ((t | 0) == (c[R >> 2] | 0)) {
      $m(ba, S, R);
      t = c[S >> 2] | 0;
     }
     w = t + 4 | 0;
     c[S >> 2] = w;
     c[t >> 2] = p;
     t = w;
    }
    q = c[Q >> 2] | 0;
    if ((q | 0) > 0) {
     p = c[e >> 2] | 0;
     do if (p) {
      if ((c[p + 12 >> 2] | 0) == (c[p + 16 >> 2] | 0)) if ((wb[c[(c[p >> 2] | 0) + 36 >> 2] & 63](p) | 0) == -1) {
       c[e >> 2] = 0;
       p = 0;
       break;
      } else {
       p = c[e >> 2] | 0;
       break;
      }
     } else p = 0; while (0);
     p = (p | 0) == 0;
     do if (m) {
      if ((c[m + 12 >> 2] | 0) == (c[m + 16 >> 2] | 0) ? (wb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0) == -1 : 0) {
       c[f >> 2] = 0;
       V = 162;
       break;
      }
      if (p) h = m; else {
       V = 167;
       break a;
      }
     } else V = 162; while (0);
     if ((V | 0) == 162) {
      V = 0;
      if (p) {
       V = 167;
       break a;
      } else h = 0;
     }
     p = c[e >> 2] | 0;
     m = c[p + 12 >> 2] | 0;
     if ((m | 0) == (c[p + 16 >> 2] | 0)) p = wb[c[(c[p >> 2] | 0) + 36 >> 2] & 63](p) | 0; else p = d[m >> 0] | 0;
     if ((p & 255) << 24 >> 24 != (a[P >> 0] | 0)) {
      V = 167;
      break a;
     }
     p = c[e >> 2] | 0;
     m = p + 12 | 0;
     g = c[m >> 2] | 0;
     if ((g | 0) == (c[p + 16 >> 2] | 0)) wb[c[(c[p >> 2] | 0) + 40 >> 2] & 63](p) | 0; else c[m >> 2] = g + 1;
     if ((q | 0) > 0) {
      j = h;
      g = h;
      while (1) {
       p = c[e >> 2] | 0;
       do if (p) {
        if ((c[p + 12 >> 2] | 0) == (c[p + 16 >> 2] | 0)) if ((wb[c[(c[p >> 2] | 0) + 36 >> 2] & 63](p) | 0) == -1) {
         c[e >> 2] = 0;
         p = 0;
         break;
        } else {
         p = c[e >> 2] | 0;
         break;
        }
       } else p = 0; while (0);
       m = (p | 0) == 0;
       do if (g) {
        if ((c[g + 12 >> 2] | 0) != (c[g + 16 >> 2] | 0)) if (m) {
         p = j;
         r = g;
         break;
        } else {
         V = 189;
         break a;
        }
        if ((wb[c[(c[g >> 2] | 0) + 36 >> 2] & 63](g) | 0) != -1) if (m ^ (j | 0) == 0) {
         p = j;
         r = j;
         break;
        } else {
         V = 189;
         break a;
        } else {
         c[f >> 2] = 0;
         p = 0;
         V = 182;
         break;
        }
       } else {
        p = j;
        V = 182;
       } while (0);
       if ((V | 0) == 182) {
        V = 0;
        if (m) {
         V = 189;
         break a;
        } else r = 0;
       }
       m = c[e >> 2] | 0;
       g = c[m + 12 >> 2] | 0;
       if ((g | 0) == (c[m + 16 >> 2] | 0)) m = wb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0; else m = d[g >> 0] | 0;
       if ((m & 255) << 24 >> 24 <= -1) {
        V = 189;
        break a;
       }
       if (!(b[(c[H >> 2] | 0) + (m << 24 >> 24 << 1) >> 1] & 2048)) {
        V = 189;
        break a;
       }
       if ((c[o >> 2] | 0) == (c[O >> 2] | 0)) _m(n, o, O);
       m = c[e >> 2] | 0;
       g = c[m + 12 >> 2] | 0;
       if ((g | 0) == (c[m + 16 >> 2] | 0)) m = wb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0; else m = d[g >> 0] | 0;
       g = c[o >> 2] | 0;
       c[o >> 2] = g + 1;
       a[g >> 0] = m;
       m = q;
       q = q + -1 | 0;
       c[Q >> 2] = q;
       g = c[e >> 2] | 0;
       h = g + 12 | 0;
       j = c[h >> 2] | 0;
       if ((j | 0) == (c[g + 16 >> 2] | 0)) wb[c[(c[g >> 2] | 0) + 40 >> 2] & 63](g) | 0; else c[h >> 2] = j + 1;
       if ((m | 0) <= 1) break; else {
        j = p;
        g = r;
       }
      }
     }
    }
    if ((c[o >> 2] | 0) == (c[n >> 2] | 0)) {
     V = 200;
     break a;
    }
    break;
   }
  default:
   {}
  } while (0);
  g : do if ((V | 0) == 28) while (1) {
   V = 0;
   m = c[e >> 2] | 0;
   do if (m) {
    if ((c[m + 12 >> 2] | 0) == (c[m + 16 >> 2] | 0)) if ((wb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0) == -1) {
     c[e >> 2] = 0;
     m = 0;
     break;
    } else {
     m = c[e >> 2] | 0;
     break;
    }
   } else m = 0; while (0);
   m = (m | 0) == 0;
   do if (g) {
    if ((c[g + 12 >> 2] | 0) != (c[g + 16 >> 2] | 0)) if (m) {
     j = p;
     h = g;
     break;
    } else break g;
    if ((wb[c[(c[g >> 2] | 0) + 36 >> 2] & 63](g) | 0) != -1) if (m ^ (p | 0) == 0) {
     j = p;
     h = p;
     break;
    } else break g; else {
     c[f >> 2] = 0;
     p = 0;
     V = 38;
     break;
    }
   } else V = 38; while (0);
   if ((V | 0) == 38) {
    V = 0;
    if (m) break g; else {
     j = p;
     h = 0;
    }
   }
   p = c[e >> 2] | 0;
   m = c[p + 12 >> 2] | 0;
   if ((m | 0) == (c[p + 16 >> 2] | 0)) p = wb[c[(c[p >> 2] | 0) + 36 >> 2] & 63](p) | 0; else p = d[m >> 0] | 0;
   if ((p & 255) << 24 >> 24 <= -1) break g;
   if (!(b[(c[H >> 2] | 0) + (p << 24 >> 24 << 1) >> 1] & 8192)) break g;
   p = c[e >> 2] | 0;
   m = p + 12 | 0;
   g = c[m >> 2] | 0;
   if ((g | 0) == (c[p + 16 >> 2] | 0)) p = wb[c[(c[p >> 2] | 0) + 40 >> 2] & 63](p) | 0; else {
    c[m >> 2] = g + 1;
    p = d[g >> 0] | 0;
   }
   hf($, p & 255);
   p = j;
   g = h;
   V = 28;
  } while (0);
  G = G + 1 | 0;
  if (G >>> 0 >= 4) {
   V = 202;
   break;
  }
 }
 h : do if ((V | 0) == 26) {
  c[k >> 2] = c[k >> 2] | 4;
  m = 0;
 } else if ((V | 0) == 82) {
  c[k >> 2] = c[k >> 2] | 4;
  m = 0;
 } else if ((V | 0) == 119) {
  c[k >> 2] = c[k >> 2] | 4;
  m = 0;
 } else if ((V | 0) == 167) {
  c[k >> 2] = c[k >> 2] | 4;
  m = 0;
 } else if ((V | 0) == 189) {
  c[k >> 2] = c[k >> 2] | 4;
  m = 0;
 } else if ((V | 0) == 200) {
  c[k >> 2] = c[k >> 2] | 4;
  m = 0;
 } else if ((V | 0) == 202) {
  i : do if (s) {
   j = s + 1 | 0;
   q = s + 8 | 0;
   r = s + 4 | 0;
   g = 1;
   j : while (1) {
    p = a[s >> 0] | 0;
    if (!(p & 1)) p = (p & 255) >>> 1; else p = c[r >> 2] | 0;
    if (g >>> 0 >= p >>> 0) break i;
    p = c[e >> 2] | 0;
    do if (p) {
     if ((c[p + 12 >> 2] | 0) == (c[p + 16 >> 2] | 0)) if ((wb[c[(c[p >> 2] | 0) + 36 >> 2] & 63](p) | 0) == -1) {
      c[e >> 2] = 0;
      p = 0;
      break;
     } else {
      p = c[e >> 2] | 0;
      break;
     }
    } else p = 0; while (0);
    p = (p | 0) == 0;
    m = c[f >> 2] | 0;
    do if (m) {
     if ((c[m + 12 >> 2] | 0) == (c[m + 16 >> 2] | 0) ? (wb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0) == -1 : 0) {
      c[f >> 2] = 0;
      V = 218;
      break;
     }
     if (!p) break j;
    } else V = 218; while (0);
    if ((V | 0) == 218 ? (V = 0, p) : 0) break;
    p = c[e >> 2] | 0;
    m = c[p + 12 >> 2] | 0;
    if ((m | 0) == (c[p + 16 >> 2] | 0)) p = wb[c[(c[p >> 2] | 0) + 36 >> 2] & 63](p) | 0; else p = d[m >> 0] | 0;
    if (!(a[s >> 0] & 1)) m = j; else m = c[q >> 2] | 0;
    if ((p & 255) << 24 >> 24 != (a[m + g >> 0] | 0)) break;
    p = g + 1 | 0;
    m = c[e >> 2] | 0;
    g = m + 12 | 0;
    h = c[g >> 2] | 0;
    if ((h | 0) == (c[m + 16 >> 2] | 0)) {
     wb[c[(c[m >> 2] | 0) + 40 >> 2] & 63](m) | 0;
     g = p;
     continue;
    } else {
     c[g >> 2] = h + 1;
     g = p;
     continue;
    }
   }
   c[k >> 2] = c[k >> 2] | 4;
   m = 0;
   break h;
  } while (0);
  p = c[ba >> 2] | 0;
  if ((p | 0) != (t | 0) ? (c[W >> 2] = 0, $j(Y, p, t, W), (c[W >> 2] | 0) != 0) : 0) {
   c[k >> 2] = c[k >> 2] | 4;
   m = 0;
  } else m = 1;
 } while (0);
 bf($);
 bf(Z);
 bf(_);
 bf(aa);
 bf(Y);
 p = c[ba >> 2] | 0;
 c[ba >> 2] = 0;
 if (p) sb[c[X >> 2] & 127](p);
 i = ca;
 return m | 0;
}

function dk(b, e, f, g, h, j, k, l, m, n, o) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 k = k | 0;
 l = l | 0;
 m = m | 0;
 n = n | 0;
 o = o | 0;
 var p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0;
 Z = i;
 i = i + 512 | 0;
 J = Z + 496 | 0;
 s = Z + 96 | 0;
 Y = Z + 88 | 0;
 N = Z + 80 | 0;
 M = Z + 76 | 0;
 O = Z + 500 | 0;
 K = Z + 72 | 0;
 P = Z + 68 | 0;
 T = Z + 56 | 0;
 X = Z + 44 | 0;
 V = Z + 32 | 0;
 U = Z + 20 | 0;
 W = Z + 8 | 0;
 L = Z + 4 | 0;
 R = Z;
 c[J >> 2] = o;
 c[Y >> 2] = s;
 S = Y + 4 | 0;
 c[S >> 2] = 98;
 c[N >> 2] = s;
 c[M >> 2] = s + 400;
 c[T >> 2] = 0;
 c[T + 4 >> 2] = 0;
 c[T + 8 >> 2] = 0;
 c[X >> 2] = 0;
 c[X + 4 >> 2] = 0;
 c[X + 8 >> 2] = 0;
 c[V >> 2] = 0;
 c[V + 4 >> 2] = 0;
 c[V + 8 >> 2] = 0;
 c[U >> 2] = 0;
 c[U + 4 >> 2] = 0;
 c[U + 8 >> 2] = 0;
 c[W >> 2] = 0;
 c[W + 4 >> 2] = 0;
 c[W + 8 >> 2] = 0;
 fk(f, g, O, K, P, T, X, V, U, L);
 c[n >> 2] = c[m >> 2];
 F = V + 4 | 0;
 G = U + 4 | 0;
 H = U + 8 | 0;
 I = V + 8 | 0;
 x = (h & 512 | 0) != 0;
 y = X + 8 | 0;
 z = X + 4 | 0;
 A = W + 4 | 0;
 B = W + 8 | 0;
 C = O + 3 | 0;
 D = T + 4 | 0;
 E = 0;
 r = 0;
 a : while (1) {
  o = c[b >> 2] | 0;
  do if (o) {
   f = c[o + 12 >> 2] | 0;
   if ((f | 0) == (c[o + 16 >> 2] | 0)) o = wb[c[(c[o >> 2] | 0) + 36 >> 2] & 63](o) | 0; else o = c[f >> 2] | 0;
   if ((o | 0) == -1) {
    c[b >> 2] = 0;
    g = 1;
    break;
   } else {
    g = (c[b >> 2] | 0) == 0;
    break;
   }
  } else g = 1; while (0);
  f = c[e >> 2] | 0;
  do if (f) {
   o = c[f + 12 >> 2] | 0;
   if ((o | 0) == (c[f + 16 >> 2] | 0)) o = wb[c[(c[f >> 2] | 0) + 36 >> 2] & 63](f) | 0; else o = c[o >> 2] | 0;
   if ((o | 0) != -1) if (g) {
    w = f;
    break;
   } else {
    Q = 217;
    break a;
   } else {
    c[e >> 2] = 0;
    Q = 15;
    break;
   }
  } else Q = 15; while (0);
  if ((Q | 0) == 15) {
   Q = 0;
   if (g) {
    Q = 217;
    break;
   } else w = 0;
  }
  b : do switch (a[O + E >> 0] | 0) {
  case 1:
   {
    if ((E | 0) != 3) {
     o = c[b >> 2] | 0;
     f = c[o + 12 >> 2] | 0;
     if ((f | 0) == (c[o + 16 >> 2] | 0)) o = wb[c[(c[o >> 2] | 0) + 36 >> 2] & 63](o) | 0; else o = c[f >> 2] | 0;
     if (!(pb[c[(c[l >> 2] | 0) + 12 >> 2] & 31](l, 8192, o) | 0)) {
      Q = 28;
      break a;
     }
     o = c[b >> 2] | 0;
     f = o + 12 | 0;
     g = c[f >> 2] | 0;
     if ((g | 0) == (c[o + 16 >> 2] | 0)) o = wb[c[(c[o >> 2] | 0) + 40 >> 2] & 63](o) | 0; else {
      c[f >> 2] = g + 4;
      o = c[g >> 2] | 0;
     }
     rf(W, o);
     o = w;
     h = w;
     Q = 30;
    }
    break;
   }
  case 0:
   {
    if ((E | 0) != 3) {
     o = w;
     h = w;
     Q = 30;
    }
    break;
   }
  case 3:
   {
    p = a[V >> 0] | 0;
    o = (p & 1) == 0 ? (p & 255) >>> 1 : c[F >> 2] | 0;
    g = a[U >> 0] | 0;
    g = (g & 1) == 0 ? (g & 255) >>> 1 : c[G >> 2] | 0;
    if ((o | 0) != (0 - g | 0)) {
     h = (o | 0) == 0;
     q = c[b >> 2] | 0;
     t = c[q + 12 >> 2] | 0;
     o = c[q + 16 >> 2] | 0;
     f = (t | 0) == (o | 0);
     if (h | (g | 0) == 0) {
      if (f) o = wb[c[(c[q >> 2] | 0) + 36 >> 2] & 63](q) | 0; else o = c[t >> 2] | 0;
      if (h) {
       if ((o | 0) != (c[((a[U >> 0] & 1) == 0 ? G : c[H >> 2] | 0) >> 2] | 0)) break b;
       o = c[b >> 2] | 0;
       f = o + 12 | 0;
       g = c[f >> 2] | 0;
       if ((g | 0) == (c[o + 16 >> 2] | 0)) wb[c[(c[o >> 2] | 0) + 40 >> 2] & 63](o) | 0; else c[f >> 2] = g + 4;
       a[k >> 0] = 1;
       w = a[U >> 0] | 0;
       r = ((w & 1) == 0 ? (w & 255) >>> 1 : c[G >> 2] | 0) >>> 0 > 1 ? U : r;
       break b;
      }
      if ((o | 0) != (c[((a[V >> 0] & 1) == 0 ? F : c[I >> 2] | 0) >> 2] | 0)) {
       a[k >> 0] = 1;
       break b;
      }
      o = c[b >> 2] | 0;
      f = o + 12 | 0;
      g = c[f >> 2] | 0;
      if ((g | 0) == (c[o + 16 >> 2] | 0)) wb[c[(c[o >> 2] | 0) + 40 >> 2] & 63](o) | 0; else c[f >> 2] = g + 4;
      w = a[V >> 0] | 0;
      r = ((w & 1) == 0 ? (w & 255) >>> 1 : c[F >> 2] | 0) >>> 0 > 1 ? V : r;
      break b;
     }
     if (f) {
      h = wb[c[(c[q >> 2] | 0) + 36 >> 2] & 63](q) | 0;
      o = c[b >> 2] | 0;
      p = a[V >> 0] | 0;
      q = o;
      g = c[o + 12 >> 2] | 0;
      o = c[o + 16 >> 2] | 0;
     } else {
      h = c[t >> 2] | 0;
      g = t;
     }
     f = q + 12 | 0;
     o = (g | 0) == (o | 0);
     if ((h | 0) == (c[((p & 1) == 0 ? F : c[I >> 2] | 0) >> 2] | 0)) {
      if (o) wb[c[(c[q >> 2] | 0) + 40 >> 2] & 63](q) | 0; else c[f >> 2] = g + 4;
      w = a[V >> 0] | 0;
      r = ((w & 1) == 0 ? (w & 255) >>> 1 : c[F >> 2] | 0) >>> 0 > 1 ? V : r;
      break b;
     }
     if (o) o = wb[c[(c[q >> 2] | 0) + 36 >> 2] & 63](q) | 0; else o = c[g >> 2] | 0;
     if ((o | 0) != (c[((a[U >> 0] & 1) == 0 ? G : c[H >> 2] | 0) >> 2] | 0)) {
      Q = 86;
      break a;
     }
     o = c[b >> 2] | 0;
     f = o + 12 | 0;
     g = c[f >> 2] | 0;
     if ((g | 0) == (c[o + 16 >> 2] | 0)) wb[c[(c[o >> 2] | 0) + 40 >> 2] & 63](o) | 0; else c[f >> 2] = g + 4;
     a[k >> 0] = 1;
     w = a[U >> 0] | 0;
     r = ((w & 1) == 0 ? (w & 255) >>> 1 : c[G >> 2] | 0) >>> 0 > 1 ? U : r;
    }
    break;
   }
  case 2:
   {
    if (!(E >>> 0 < 2 | (r | 0) != 0) ? !(x | (E | 0) == 2 & (a[C >> 0] | 0) != 0) : 0) {
     r = 0;
     break b;
    }
    h = a[X >> 0] | 0;
    g = c[y >> 2] | 0;
    f = (h & 1) == 0 ? z : g;
    o = f;
    c : do if ((E | 0) != 0 ? (d[O + (E + -1) >> 0] | 0) < 2 : 0) {
     v = (h & 1) == 0;
     d : do if ((f | 0) != ((v ? z : g) + ((v ? (h & 255) >>> 1 : c[z >> 2] | 0) << 2) | 0)) {
      h = f;
      while (1) {
       if (!(pb[c[(c[l >> 2] | 0) + 12 >> 2] & 31](l, 8192, c[h >> 2] | 0) | 0)) break;
       h = h + 4 | 0;
       o = h;
       f = a[X >> 0] | 0;
       g = c[y >> 2] | 0;
       v = (f & 1) == 0;
       if ((h | 0) == ((v ? z : g) + ((v ? (f & 255) >>> 1 : c[z >> 2] | 0) << 2) | 0)) {
        h = f;
        break d;
       }
      }
      h = a[X >> 0] | 0;
      g = c[y >> 2] | 0;
     } while (0);
     q = (h & 1) == 0 ? z : g;
     f = q;
     t = o - f >> 2;
     u = a[W >> 0] | 0;
     p = (u & 1) == 0;
     u = p ? (u & 255) >>> 1 : c[A >> 2] | 0;
     if (u >>> 0 >= t >>> 0) {
      p = p ? A : c[B >> 2] | 0;
      v = p + (u << 2) | 0;
      if (!t) f = o; else {
       p = p + (u - t << 2) | 0;
       while (1) {
        if ((c[p >> 2] | 0) != (c[q >> 2] | 0)) break c;
        p = p + 4 | 0;
        if ((p | 0) == (v | 0)) {
         f = o;
         break;
        } else q = q + 4 | 0;
       }
      }
     }
    } else f = o; while (0);
    o = (h & 1) == 0;
    o = (o ? z : g) + ((o ? (h & 255) >>> 1 : c[z >> 2] | 0) << 2) | 0;
    e : do if ((f | 0) != (o | 0)) {
     p = w;
     h = w;
     o = f;
     while (1) {
      f = c[b >> 2] | 0;
      do if (f) {
       g = c[f + 12 >> 2] | 0;
       if ((g | 0) == (c[f + 16 >> 2] | 0)) f = wb[c[(c[f >> 2] | 0) + 36 >> 2] & 63](f) | 0; else f = c[g >> 2] | 0;
       if ((f | 0) == -1) {
        c[b >> 2] = 0;
        g = 1;
        break;
       } else {
        g = (c[b >> 2] | 0) == 0;
        break;
       }
      } else g = 1; while (0);
      do if (h) {
       f = c[h + 12 >> 2] | 0;
       if ((f | 0) == (c[h + 16 >> 2] | 0)) f = wb[c[(c[h >> 2] | 0) + 36 >> 2] & 63](h) | 0; else f = c[f >> 2] | 0;
       if ((f | 0) != -1) if (g ^ (p | 0) == 0) {
        f = p;
        q = p;
        break;
       } else break e; else {
        c[e >> 2] = 0;
        f = 0;
        Q = 114;
        break;
       }
      } else {
       f = p;
       Q = 114;
      } while (0);
      if ((Q | 0) == 114) {
       Q = 0;
       if (g) break e; else q = 0;
      }
      g = c[b >> 2] | 0;
      h = c[g + 12 >> 2] | 0;
      if ((h | 0) == (c[g + 16 >> 2] | 0)) g = wb[c[(c[g >> 2] | 0) + 36 >> 2] & 63](g) | 0; else g = c[h >> 2] | 0;
      if ((g | 0) != (c[o >> 2] | 0)) break e;
      g = c[b >> 2] | 0;
      h = g + 12 | 0;
      p = c[h >> 2] | 0;
      if ((p | 0) == (c[g + 16 >> 2] | 0)) wb[c[(c[g >> 2] | 0) + 40 >> 2] & 63](g) | 0; else c[h >> 2] = p + 4;
      o = o + 4 | 0;
      g = a[X >> 0] | 0;
      w = (g & 1) == 0;
      g = (w ? z : c[y >> 2] | 0) + ((w ? (g & 255) >>> 1 : c[z >> 2] | 0) << 2) | 0;
      if ((o | 0) == (g | 0)) {
       o = g;
       break;
      } else {
       p = f;
       h = q;
      }
     }
    } while (0);
    if (x ? (w = a[X >> 0] | 0, v = (w & 1) == 0, (o | 0) != ((v ? z : c[y >> 2] | 0) + ((v ? (w & 255) >>> 1 : c[z >> 2] | 0) << 2) | 0)) : 0) {
     Q = 126;
     break a;
    }
    break;
   }
  case 4:
   {
    t = c[P >> 2] | 0;
    h = w;
    p = w;
    o = 0;
    f : while (1) {
     f = c[b >> 2] | 0;
     do if (f) {
      g = c[f + 12 >> 2] | 0;
      if ((g | 0) == (c[f + 16 >> 2] | 0)) f = wb[c[(c[f >> 2] | 0) + 36 >> 2] & 63](f) | 0; else f = c[g >> 2] | 0;
      if ((f | 0) == -1) {
       c[b >> 2] = 0;
       g = 1;
       break;
      } else {
       g = (c[b >> 2] | 0) == 0;
       break;
      }
     } else g = 1; while (0);
     do if (p) {
      f = c[p + 12 >> 2] | 0;
      if ((f | 0) == (c[p + 16 >> 2] | 0)) f = wb[c[(c[p >> 2] | 0) + 36 >> 2] & 63](p) | 0; else f = c[f >> 2] | 0;
      if ((f | 0) != -1) if (g ^ (h | 0) == 0) {
       f = h;
       q = h;
       break;
      } else break f; else {
       c[e >> 2] = 0;
       f = 0;
       Q = 140;
       break;
      }
     } else {
      f = h;
      Q = 140;
     } while (0);
     if ((Q | 0) == 140) {
      Q = 0;
      if (g) {
       h = f;
       break;
      } else q = 0;
     }
     g = c[b >> 2] | 0;
     h = c[g + 12 >> 2] | 0;
     if ((h | 0) == (c[g + 16 >> 2] | 0)) h = wb[c[(c[g >> 2] | 0) + 36 >> 2] & 63](g) | 0; else h = c[h >> 2] | 0;
     if (pb[c[(c[l >> 2] | 0) + 12 >> 2] & 31](l, 2048, h) | 0) {
      g = c[n >> 2] | 0;
      if ((g | 0) == (c[J >> 2] | 0)) {
       bn(m, n, J);
       g = c[n >> 2] | 0;
      }
      c[n >> 2] = g + 4;
      c[g >> 2] = h;
      o = o + 1 | 0;
     } else {
      w = a[T >> 0] | 0;
      if (!((h | 0) == (t | 0) & ((o | 0) != 0 ? (((w & 1) == 0 ? (w & 255) >>> 1 : c[D >> 2] | 0) | 0) != 0 : 0))) {
       h = f;
       break;
      }
      if ((s | 0) == (c[M >> 2] | 0)) {
       $m(Y, N, M);
       s = c[N >> 2] | 0;
      }
      w = s + 4 | 0;
      c[N >> 2] = w;
      c[s >> 2] = o;
      s = w;
      o = 0;
     }
     g = c[b >> 2] | 0;
     h = g + 12 | 0;
     p = c[h >> 2] | 0;
     if ((p | 0) == (c[g + 16 >> 2] | 0)) {
      wb[c[(c[g >> 2] | 0) + 40 >> 2] & 63](g) | 0;
      h = f;
      p = q;
      continue;
     } else {
      c[h >> 2] = p + 4;
      h = f;
      p = q;
      continue;
     }
    }
    if ((o | 0) != 0 ? (c[Y >> 2] | 0) != (s | 0) : 0) {
     if ((s | 0) == (c[M >> 2] | 0)) {
      $m(Y, N, M);
      s = c[N >> 2] | 0;
     }
     w = s + 4 | 0;
     c[N >> 2] = w;
     c[s >> 2] = o;
     s = w;
    }
    q = c[L >> 2] | 0;
    if ((q | 0) > 0) {
     o = c[b >> 2] | 0;
     do if (o) {
      f = c[o + 12 >> 2] | 0;
      if ((f | 0) == (c[o + 16 >> 2] | 0)) o = wb[c[(c[o >> 2] | 0) + 36 >> 2] & 63](o) | 0; else o = c[f >> 2] | 0;
      if ((o | 0) == -1) {
       c[b >> 2] = 0;
       f = 1;
       break;
      } else {
       f = (c[b >> 2] | 0) == 0;
       break;
      }
     } else f = 1; while (0);
     do if (h) {
      o = c[h + 12 >> 2] | 0;
      if ((o | 0) == (c[h + 16 >> 2] | 0)) o = wb[c[(c[h >> 2] | 0) + 36 >> 2] & 63](h) | 0; else o = c[o >> 2] | 0;
      if ((o | 0) != -1) if (f) break; else {
       Q = 180;
       break a;
      } else {
       c[e >> 2] = 0;
       Q = 174;
       break;
      }
     } else Q = 174; while (0);
     if ((Q | 0) == 174) {
      Q = 0;
      if (f) {
       Q = 180;
       break a;
      } else h = 0;
     }
     o = c[b >> 2] | 0;
     f = c[o + 12 >> 2] | 0;
     if ((f | 0) == (c[o + 16 >> 2] | 0)) o = wb[c[(c[o >> 2] | 0) + 36 >> 2] & 63](o) | 0; else o = c[f >> 2] | 0;
     if ((o | 0) != (c[K >> 2] | 0)) {
      Q = 180;
      break a;
     }
     o = c[b >> 2] | 0;
     f = o + 12 | 0;
     g = c[f >> 2] | 0;
     if ((g | 0) == (c[o + 16 >> 2] | 0)) wb[c[(c[o >> 2] | 0) + 40 >> 2] & 63](o) | 0; else c[f >> 2] = g + 4;
     if ((q | 0) > 0) {
      p = h;
      g = h;
      t = q;
      while (1) {
       o = c[b >> 2] | 0;
       do if (o) {
        f = c[o + 12 >> 2] | 0;
        if ((f | 0) == (c[o + 16 >> 2] | 0)) o = wb[c[(c[o >> 2] | 0) + 36 >> 2] & 63](o) | 0; else o = c[f >> 2] | 0;
        if ((o | 0) == -1) {
         c[b >> 2] = 0;
         f = 1;
         break;
        } else {
         f = (c[b >> 2] | 0) == 0;
         break;
        }
       } else f = 1; while (0);
       do if (g) {
        o = c[g + 12 >> 2] | 0;
        if ((o | 0) == (c[g + 16 >> 2] | 0)) o = wb[c[(c[g >> 2] | 0) + 36 >> 2] & 63](g) | 0; else o = c[o >> 2] | 0;
        if ((o | 0) != -1) if (f ^ (p | 0) == 0) {
         o = p;
         q = p;
         break;
        } else {
         Q = 204;
         break a;
        } else {
         c[e >> 2] = 0;
         o = 0;
         Q = 198;
         break;
        }
       } else {
        o = p;
        Q = 198;
       } while (0);
       if ((Q | 0) == 198) {
        Q = 0;
        if (f) {
         Q = 204;
         break a;
        } else q = 0;
       }
       f = c[b >> 2] | 0;
       g = c[f + 12 >> 2] | 0;
       if ((g | 0) == (c[f + 16 >> 2] | 0)) f = wb[c[(c[f >> 2] | 0) + 36 >> 2] & 63](f) | 0; else f = c[g >> 2] | 0;
       if (!(pb[c[(c[l >> 2] | 0) + 12 >> 2] & 31](l, 2048, f) | 0)) {
        Q = 204;
        break a;
       }
       if ((c[n >> 2] | 0) == (c[J >> 2] | 0)) bn(m, n, J);
       f = c[b >> 2] | 0;
       g = c[f + 12 >> 2] | 0;
       if ((g | 0) == (c[f + 16 >> 2] | 0)) f = wb[c[(c[f >> 2] | 0) + 36 >> 2] & 63](f) | 0; else f = c[g >> 2] | 0;
       g = c[n >> 2] | 0;
       c[n >> 2] = g + 4;
       c[g >> 2] = f;
       f = t;
       t = t + -1 | 0;
       c[L >> 2] = t;
       g = c[b >> 2] | 0;
       h = g + 12 | 0;
       p = c[h >> 2] | 0;
       if ((p | 0) == (c[g + 16 >> 2] | 0)) wb[c[(c[g >> 2] | 0) + 40 >> 2] & 63](g) | 0; else c[h >> 2] = p + 4;
       if ((f | 0) <= 1) break; else {
        p = o;
        g = q;
       }
      }
     }
    }
    if ((c[n >> 2] | 0) == (c[m >> 2] | 0)) {
     Q = 215;
     break a;
    }
    break;
   }
  default:
   {}
  } while (0);
  g : do if ((Q | 0) == 30) while (1) {
   Q = 0;
   f = c[b >> 2] | 0;
   do if (f) {
    g = c[f + 12 >> 2] | 0;
    if ((g | 0) == (c[f + 16 >> 2] | 0)) f = wb[c[(c[f >> 2] | 0) + 36 >> 2] & 63](f) | 0; else f = c[g >> 2] | 0;
    if ((f | 0) == -1) {
     c[b >> 2] = 0;
     g = 1;
     break;
    } else {
     g = (c[b >> 2] | 0) == 0;
     break;
    }
   } else g = 1; while (0);
   do if (h) {
    f = c[h + 12 >> 2] | 0;
    if ((f | 0) == (c[h + 16 >> 2] | 0)) f = wb[c[(c[h >> 2] | 0) + 36 >> 2] & 63](h) | 0; else f = c[f >> 2] | 0;
    if ((f | 0) != -1) if (g ^ (o | 0) == 0) {
     p = o;
     h = o;
     break;
    } else break g; else {
     c[e >> 2] = 0;
     o = 0;
     Q = 43;
     break;
    }
   } else Q = 43; while (0);
   if ((Q | 0) == 43) {
    Q = 0;
    if (g) break g; else {
     p = o;
     h = 0;
    }
   }
   o = c[b >> 2] | 0;
   f = c[o + 12 >> 2] | 0;
   if ((f | 0) == (c[o + 16 >> 2] | 0)) o = wb[c[(c[o >> 2] | 0) + 36 >> 2] & 63](o) | 0; else o = c[f >> 2] | 0;
   if (!(pb[c[(c[l >> 2] | 0) + 12 >> 2] & 31](l, 8192, o) | 0)) break g;
   o = c[b >> 2] | 0;
   f = o + 12 | 0;
   g = c[f >> 2] | 0;
   if ((g | 0) == (c[o + 16 >> 2] | 0)) o = wb[c[(c[o >> 2] | 0) + 40 >> 2] & 63](o) | 0; else {
    c[f >> 2] = g + 4;
    o = c[g >> 2] | 0;
   }
   rf(W, o);
   o = p;
   Q = 30;
  } while (0);
  E = E + 1 | 0;
  if (E >>> 0 >= 4) {
   Q = 217;
   break;
  }
 }
 h : do if ((Q | 0) == 28) {
  c[j >> 2] = c[j >> 2] | 4;
  f = 0;
 } else if ((Q | 0) == 86) {
  c[j >> 2] = c[j >> 2] | 4;
  f = 0;
 } else if ((Q | 0) == 126) {
  c[j >> 2] = c[j >> 2] | 4;
  f = 0;
 } else if ((Q | 0) == 180) {
  c[j >> 2] = c[j >> 2] | 4;
  f = 0;
 } else if ((Q | 0) == 204) {
  c[j >> 2] = c[j >> 2] | 4;
  f = 0;
 } else if ((Q | 0) == 215) {
  c[j >> 2] = c[j >> 2] | 4;
  f = 0;
 } else if ((Q | 0) == 217) {
  i : do if (r) {
   p = r + 4 | 0;
   q = r + 8 | 0;
   h = 1;
   j : while (1) {
    o = a[r >> 0] | 0;
    if (!(o & 1)) o = (o & 255) >>> 1; else o = c[p >> 2] | 0;
    if (h >>> 0 >= o >>> 0) break i;
    o = c[b >> 2] | 0;
    do if (o) {
     f = c[o + 12 >> 2] | 0;
     if ((f | 0) == (c[o + 16 >> 2] | 0)) o = wb[c[(c[o >> 2] | 0) + 36 >> 2] & 63](o) | 0; else o = c[f >> 2] | 0;
     if ((o | 0) == -1) {
      c[b >> 2] = 0;
      g = 1;
      break;
     } else {
      g = (c[b >> 2] | 0) == 0;
      break;
     }
    } else g = 1; while (0);
    o = c[e >> 2] | 0;
    do if (o) {
     f = c[o + 12 >> 2] | 0;
     if ((f | 0) == (c[o + 16 >> 2] | 0)) o = wb[c[(c[o >> 2] | 0) + 36 >> 2] & 63](o) | 0; else o = c[f >> 2] | 0;
     if ((o | 0) != -1) if (g) break; else break j; else {
      c[e >> 2] = 0;
      Q = 236;
      break;
     }
    } else Q = 236; while (0);
    if ((Q | 0) == 236 ? (Q = 0, g) : 0) break;
    o = c[b >> 2] | 0;
    f = c[o + 12 >> 2] | 0;
    if ((f | 0) == (c[o + 16 >> 2] | 0)) o = wb[c[(c[o >> 2] | 0) + 36 >> 2] & 63](o) | 0; else o = c[f >> 2] | 0;
    if (!(a[r >> 0] & 1)) f = p; else f = c[q >> 2] | 0;
    if ((o | 0) != (c[f + (h << 2) >> 2] | 0)) break;
    o = h + 1 | 0;
    f = c[b >> 2] | 0;
    g = f + 12 | 0;
    h = c[g >> 2] | 0;
    if ((h | 0) == (c[f + 16 >> 2] | 0)) {
     wb[c[(c[f >> 2] | 0) + 40 >> 2] & 63](f) | 0;
     h = o;
     continue;
    } else {
     c[g >> 2] = h + 4;
     h = o;
     continue;
    }
   }
   c[j >> 2] = c[j >> 2] | 4;
   f = 0;
   break h;
  } while (0);
  o = c[Y >> 2] | 0;
  if ((o | 0) != (s | 0) ? (c[R >> 2] = 0, $j(T, o, s, R), (c[R >> 2] | 0) != 0) : 0) {
   c[j >> 2] = c[j >> 2] | 4;
   f = 0;
  } else f = 1;
 } while (0);
 nf(W);
 nf(U);
 nf(V);
 nf(X);
 bf(T);
 o = c[Y >> 2] | 0;
 c[Y >> 2] = 0;
 if (o) sb[c[S >> 2] & 127](o);
 i = Z;
 return f | 0;
}

function Hd(e, f, j) {
 e = e | 0;
 f = f | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0.0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0;
 P = i;
 i = i + 304 | 0;
 H = P + 16 | 0;
 J = P + 8 | 0;
 I = P + 33 | 0;
 K = P;
 y = P + 32 | 0;
 if ((c[e + 76 >> 2] | 0) > -1) O = Kd(e) | 0; else O = 0;
 k = a[f >> 0] | 0;
 a : do if (k << 24 >> 24) {
  L = e + 4 | 0;
  M = e + 100 | 0;
  G = e + 108 | 0;
  z = e + 8 | 0;
  A = I + 10 | 0;
  B = I + 33 | 0;
  C = J + 4 | 0;
  E = I + 46 | 0;
  F = I + 94 | 0;
  m = k;
  k = 0;
  n = f;
  s = 0;
  l = 0;
  f = 0;
  b : while (1) {
   c : do if (!(Lc(m & 255) | 0)) {
    m = (a[n >> 0] | 0) == 37;
    d : do if (m) {
     q = n + 1 | 0;
     o = a[q >> 0] | 0;
     e : do switch (o << 24 >> 24) {
     case 37:
      break d;
     case 42:
      {
       x = 0;
       o = n + 2 | 0;
       break;
      }
     default:
      {
       o = (o & 255) + -48 | 0;
       if (o >>> 0 < 10 ? (a[n + 2 >> 0] | 0) == 36 : 0) {
        c[H >> 2] = c[j >> 2];
        while (1) {
         x = (c[H >> 2] | 0) + (4 - 1) & ~(4 - 1);
         m = c[x >> 2] | 0;
         c[H >> 2] = x + 4;
         if (o >>> 0 > 1) o = o + -1 | 0; else break;
        }
        x = m;
        o = n + 3 | 0;
        break e;
       }
       o = (c[j >> 2] | 0) + (4 - 1) & ~(4 - 1);
       x = c[o >> 2] | 0;
       c[j >> 2] = o + 4;
       o = q;
      }
     } while (0);
     m = a[o >> 0] | 0;
     n = m & 255;
     if ((n + -48 | 0) >>> 0 < 10) {
      m = 0;
      while (1) {
       q = (m * 10 | 0) + -48 + n | 0;
       o = o + 1 | 0;
       m = a[o >> 0] | 0;
       n = m & 255;
       if ((n + -48 | 0) >>> 0 >= 10) break; else m = q;
      }
     } else q = 0;
     if (m << 24 >> 24 == 109) {
      o = o + 1 | 0;
      r = a[o >> 0] | 0;
      m = (x | 0) != 0 & 1;
      l = 0;
      f = 0;
     } else {
      r = m;
      m = 0;
     }
     n = o + 1 | 0;
     switch (r & 255 | 0) {
     case 104:
      {
       w = (a[n >> 0] | 0) == 104;
       n = w ? o + 2 | 0 : n;
       o = w ? -2 : -1;
       break;
      }
     case 108:
      {
       w = (a[n >> 0] | 0) == 108;
       n = w ? o + 2 | 0 : n;
       o = w ? 3 : 1;
       break;
      }
     case 106:
      {
       o = 3;
       break;
      }
     case 116:
     case 122:
      {
       o = 1;
       break;
      }
     case 76:
      {
       o = 2;
       break;
      }
     case 110:
     case 112:
     case 67:
     case 83:
     case 91:
     case 99:
     case 115:
     case 88:
     case 71:
     case 70:
     case 69:
     case 65:
     case 103:
     case 102:
     case 101:
     case 97:
     case 120:
     case 117:
     case 111:
     case 105:
     case 100:
      {
       n = o;
       o = 0;
       break;
      }
     default:
      {
       N = 152;
       break b;
      }
     }
     r = d[n >> 0] | 0;
     t = (r & 47 | 0) == 3;
     r = t ? r | 32 : r;
     t = t ? 1 : o;
     switch (r | 0) {
     case 99:
      {
       w = s;
       v = (q | 0) < 1 ? 1 : q;
       break;
      }
     case 91:
      {
       w = s;
       v = q;
       break;
      }
     case 110:
      {
       if (!x) {
        o = s;
        break c;
       }
       switch (t | 0) {
       case -2:
        {
         a[x >> 0] = s;
         o = s;
         break c;
        }
       case -1:
        {
         b[x >> 1] = s;
         o = s;
         break c;
        }
       case 0:
        {
         c[x >> 2] = s;
         o = s;
         break c;
        }
       case 1:
        {
         c[x >> 2] = s;
         o = s;
         break c;
        }
       case 3:
        {
         o = x;
         c[o >> 2] = s;
         c[o + 4 >> 2] = ((s | 0) < 0) << 31 >> 31;
         o = s;
         break c;
        }
       default:
        {
         o = s;
         break c;
        }
       }
      }
     default:
      {
       Uc(e, 0);
       do {
        o = c[L >> 2] | 0;
        if (o >>> 0 < (c[M >> 2] | 0) >>> 0) {
         c[L >> 2] = o + 1;
         o = d[o >> 0] | 0;
        } else o = Vc(e) | 0;
       } while ((Lc(o) | 0) != 0);
       o = c[L >> 2] | 0;
       if (c[M >> 2] | 0) {
        o = o + -1 | 0;
        c[L >> 2] = o;
       }
       w = (c[G >> 2] | 0) + s + o - (c[z >> 2] | 0) | 0;
       v = q;
      }
     }
     Uc(e, v);
     o = c[L >> 2] | 0;
     q = c[M >> 2] | 0;
     if (o >>> 0 < q >>> 0) c[L >> 2] = o + 1; else {
      if ((Vc(e) | 0) < 0) {
       N = 152;
       break b;
      }
      q = c[M >> 2] | 0;
     }
     if (q) c[L >> 2] = (c[L >> 2] | 0) + -1;
     f : do switch (r | 0) {
     case 91:
     case 99:
     case 115:
      {
       u = (r | 0) == 99;
       g : do if ((r & 239 | 0) == 99) {
        ro(I | 0, -1, 257) | 0;
        a[I >> 0] = 0;
        if ((r | 0) == 115) {
         a[B >> 0] = 0;
         a[A >> 0] = 0;
         a[A + 1 >> 0] = 0;
         a[A + 2 >> 0] = 0;
         a[A + 3 >> 0] = 0;
         a[A + 4 >> 0] = 0;
        }
       } else {
        Q = n + 1 | 0;
        s = (a[Q >> 0] | 0) == 94;
        o = s & 1;
        r = s ? Q : n;
        n = s ? n + 2 | 0 : Q;
        ro(I | 0, s & 1 | 0, 257) | 0;
        a[I >> 0] = 0;
        switch (a[n >> 0] | 0) {
        case 45:
         {
          s = (o ^ 1) & 255;
          a[E >> 0] = s;
          n = r + 2 | 0;
          break;
         }
        case 93:
         {
          s = (o ^ 1) & 255;
          a[F >> 0] = s;
          n = r + 2 | 0;
          break;
         }
        default:
         s = (o ^ 1) & 255;
        }
        while (1) {
         o = a[n >> 0] | 0;
         h : do switch (o << 24 >> 24) {
         case 0:
          {
           N = 152;
           break b;
          }
         case 93:
          break g;
         case 45:
          {
           r = n + 1 | 0;
           o = a[r >> 0] | 0;
           switch (o << 24 >> 24) {
           case 93:
           case 0:
            {
             o = 45;
             break h;
            }
           default:
            {}
           }
           n = a[n + -1 >> 0] | 0;
           if ((n & 255) < (o & 255)) {
            n = n & 255;
            do {
             n = n + 1 | 0;
             a[I + n >> 0] = s;
             o = a[r >> 0] | 0;
            } while ((n | 0) < (o & 255 | 0));
            n = r;
           } else n = r;
           break;
          }
         default:
          {}
         } while (0);
         a[I + ((o & 255) + 1) >> 0] = s;
         n = n + 1 | 0;
        }
       } while (0);
       r = u ? v + 1 | 0 : 31;
       s = (t | 0) == 1;
       t = (m | 0) != 0;
       i : do if (s) {
        if (t) {
         f = qe(r << 2) | 0;
         if (!f) {
          l = 0;
          N = 152;
          break b;
         }
        } else f = x;
        c[J >> 2] = 0;
        c[C >> 2] = 0;
        l = 0;
        j : while (1) {
         q = (f | 0) == 0;
         do {
          k : while (1) {
           o = c[L >> 2] | 0;
           if (o >>> 0 < (c[M >> 2] | 0) >>> 0) {
            c[L >> 2] = o + 1;
            o = d[o >> 0] | 0;
           } else o = Vc(e) | 0;
           if (!(a[I + (o + 1) >> 0] | 0)) break j;
           a[y >> 0] = o;
           switch (md(K, y, 1, J) | 0) {
           case -1:
            {
             l = 0;
             N = 152;
             break b;
            }
           case -2:
            break;
           default:
            break k;
           }
          }
          if (!q) {
           c[f + (l << 2) >> 2] = c[K >> 2];
           l = l + 1 | 0;
          }
         } while (!(t & (l | 0) == (r | 0)));
         l = r << 1 | 1;
         o = te(f, l << 2) | 0;
         if (!o) {
          l = 0;
          N = 152;
          break b;
         }
         Q = r;
         r = l;
         f = o;
         l = Q;
        }
        if (!(nd(J) | 0)) {
         l = 0;
         N = 152;
         break b;
        } else {
         q = l;
         l = 0;
        }
       } else {
        if (t) {
         l = qe(r) | 0;
         if (!l) {
          l = 0;
          f = 0;
          N = 152;
          break b;
         } else o = 0;
         while (1) {
          do {
           f = c[L >> 2] | 0;
           if (f >>> 0 < (c[M >> 2] | 0) >>> 0) {
            c[L >> 2] = f + 1;
            f = d[f >> 0] | 0;
           } else f = Vc(e) | 0;
           if (!(a[I + (f + 1) >> 0] | 0)) {
            q = o;
            f = 0;
            break i;
           }
           a[l + o >> 0] = f;
           o = o + 1 | 0;
          } while ((o | 0) != (r | 0));
          f = r << 1 | 1;
          o = te(l, f) | 0;
          if (!o) {
           f = 0;
           N = 152;
           break b;
          } else {
           Q = r;
           r = f;
           l = o;
           o = Q;
          }
         }
        }
        if (!x) {
         l = q;
         while (1) {
          f = c[L >> 2] | 0;
          if (f >>> 0 < l >>> 0) {
           c[L >> 2] = f + 1;
           f = d[f >> 0] | 0;
          } else f = Vc(e) | 0;
          if (!(a[I + (f + 1) >> 0] | 0)) {
           q = 0;
           l = 0;
           f = 0;
           break i;
          }
          l = c[M >> 2] | 0;
         }
        } else {
         l = 0;
         while (1) {
          f = c[L >> 2] | 0;
          if (f >>> 0 < q >>> 0) {
           c[L >> 2] = f + 1;
           f = d[f >> 0] | 0;
          } else f = Vc(e) | 0;
          if (!(a[I + (f + 1) >> 0] | 0)) {
           q = l;
           l = x;
           f = 0;
           break i;
          }
          a[x + l >> 0] = f;
          q = c[M >> 2] | 0;
          l = l + 1 | 0;
         }
        }
       } while (0);
       o = c[L >> 2] | 0;
       if (c[M >> 2] | 0) {
        o = o + -1 | 0;
        c[L >> 2] = o;
       }
       o = o - (c[z >> 2] | 0) + (c[G >> 2] | 0) | 0;
       if (!o) break b;
       if (!((o | 0) == (v | 0) | u ^ 1)) break b;
       do if (t) if (s) {
        c[x >> 2] = f;
        break;
       } else {
        c[x >> 2] = l;
        break;
       } while (0);
       if (!u) {
        if (f) c[f + (q << 2) >> 2] = 0;
        if (!l) {
         l = 0;
         break f;
        }
        a[l + q >> 0] = 0;
       }
       break;
      }
     case 120:
     case 88:
     case 112:
      {
       o = 16;
       N = 134;
       break;
      }
     case 111:
      {
       o = 8;
       N = 134;
       break;
      }
     case 117:
     case 100:
      {
       o = 10;
       N = 134;
       break;
      }
     case 105:
      {
       o = 0;
       N = 134;
       break;
      }
     case 71:
     case 103:
     case 70:
     case 102:
     case 69:
     case 101:
     case 65:
     case 97:
      {
       p = +Sc(e, t, 0);
       if ((c[G >> 2] | 0) == ((c[z >> 2] | 0) - (c[L >> 2] | 0) | 0)) break b;
       if (x) switch (t | 0) {
       case 0:
        {
         g[x >> 2] = p;
         break f;
        }
       case 1:
        {
         h[x >> 3] = p;
         break f;
        }
       case 2:
        {
         h[x >> 3] = p;
         break f;
        }
       default:
        break f;
       }
       break;
      }
     default:
      {}
     } while (0);
     l : do if ((N | 0) == 134) {
      N = 0;
      o = Tc(e, o, 0, -1, -1) | 0;
      if ((c[G >> 2] | 0) == ((c[z >> 2] | 0) - (c[L >> 2] | 0) | 0)) break b;
      if ((x | 0) != 0 & (r | 0) == 112) {
       c[x >> 2] = o;
       break;
      }
      if (x) switch (t | 0) {
      case -2:
       {
        a[x >> 0] = o;
        break l;
       }
      case -1:
       {
        b[x >> 1] = o;
        break l;
       }
      case 0:
       {
        c[x >> 2] = o;
        break l;
       }
      case 1:
       {
        c[x >> 2] = o;
        break l;
       }
      case 3:
       {
        Q = x;
        c[Q >> 2] = o;
        c[Q + 4 >> 2] = D;
        break l;
       }
      default:
       break l;
      }
     } while (0);
     k = ((x | 0) != 0 & 1) + k | 0;
     o = (c[G >> 2] | 0) + w + (c[L >> 2] | 0) - (c[z >> 2] | 0) | 0;
     break c;
    } while (0);
    n = n + (m & 1) | 0;
    Uc(e, 0);
    m = c[L >> 2] | 0;
    if (m >>> 0 < (c[M >> 2] | 0) >>> 0) {
     c[L >> 2] = m + 1;
     m = d[m >> 0] | 0;
    } else m = Vc(e) | 0;
    if ((m | 0) != (d[n >> 0] | 0)) {
     N = 21;
     break b;
    }
    o = s + 1 | 0;
   } else {
    while (1) {
     m = n + 1 | 0;
     if (!(Lc(d[m >> 0] | 0) | 0)) break; else n = m;
    }
    Uc(e, 0);
    do {
     m = c[L >> 2] | 0;
     if (m >>> 0 < (c[M >> 2] | 0) >>> 0) {
      c[L >> 2] = m + 1;
      m = d[m >> 0] | 0;
     } else m = Vc(e) | 0;
    } while ((Lc(m) | 0) != 0);
    m = c[L >> 2] | 0;
    if (c[M >> 2] | 0) {
     m = m + -1 | 0;
     c[L >> 2] = m;
    }
    o = (c[G >> 2] | 0) + s + m - (c[z >> 2] | 0) | 0;
   } while (0);
   n = n + 1 | 0;
   m = a[n >> 0] | 0;
   if (!(m << 24 >> 24)) break a; else s = o;
  }
  if ((N | 0) == 21) {
   if (c[M >> 2] | 0) c[L >> 2] = (c[L >> 2] | 0) + -1;
   if ((k | 0) != 0 | (m | 0) > -1) break; else {
    k = 0;
    N = 153;
   }
  } else if ((N | 0) == 152) if (!k) {
   k = m;
   N = 153;
  }
  if ((N | 0) == 153) {
   m = k;
   k = -1;
  }
  if (m) {
   re(l);
   re(f);
  }
 } else k = 0; while (0);
 if (O) Ld(e);
 i = P;
 return k | 0;
}

function re(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0;
 if (!a) return;
 b = a + -8 | 0;
 i = c[1540] | 0;
 if (b >>> 0 < i >>> 0) Aa();
 d = c[a + -4 >> 2] | 0;
 e = d & 3;
 if ((e | 0) == 1) Aa();
 o = d & -8;
 q = a + (o + -8) | 0;
 do if (!(d & 1)) {
  b = c[b >> 2] | 0;
  if (!e) return;
  j = -8 - b | 0;
  l = a + j | 0;
  m = b + o | 0;
  if (l >>> 0 < i >>> 0) Aa();
  if ((l | 0) == (c[1541] | 0)) {
   b = a + (o + -4) | 0;
   d = c[b >> 2] | 0;
   if ((d & 3 | 0) != 3) {
    u = l;
    g = m;
    break;
   }
   c[1538] = m;
   c[b >> 2] = d & -2;
   c[a + (j + 4) >> 2] = m | 1;
   c[q >> 2] = m;
   return;
  }
  f = b >>> 3;
  if (b >>> 0 < 256) {
   e = c[a + (j + 8) >> 2] | 0;
   d = c[a + (j + 12) >> 2] | 0;
   b = 6184 + (f << 1 << 2) | 0;
   if ((e | 0) != (b | 0)) {
    if (e >>> 0 < i >>> 0) Aa();
    if ((c[e + 12 >> 2] | 0) != (l | 0)) Aa();
   }
   if ((d | 0) == (e | 0)) {
    c[1536] = c[1536] & ~(1 << f);
    u = l;
    g = m;
    break;
   }
   if ((d | 0) != (b | 0)) {
    if (d >>> 0 < i >>> 0) Aa();
    b = d + 8 | 0;
    if ((c[b >> 2] | 0) == (l | 0)) h = b; else Aa();
   } else h = d + 8 | 0;
   c[e + 12 >> 2] = d;
   c[h >> 2] = e;
   u = l;
   g = m;
   break;
  }
  h = c[a + (j + 24) >> 2] | 0;
  e = c[a + (j + 12) >> 2] | 0;
  do if ((e | 0) == (l | 0)) {
   d = a + (j + 20) | 0;
   b = c[d >> 2] | 0;
   if (!b) {
    d = a + (j + 16) | 0;
    b = c[d >> 2] | 0;
    if (!b) {
     k = 0;
     break;
    }
   }
   while (1) {
    e = b + 20 | 0;
    f = c[e >> 2] | 0;
    if (f) {
     b = f;
     d = e;
     continue;
    }
    e = b + 16 | 0;
    f = c[e >> 2] | 0;
    if (!f) break; else {
     b = f;
     d = e;
    }
   }
   if (d >>> 0 < i >>> 0) Aa(); else {
    c[d >> 2] = 0;
    k = b;
    break;
   }
  } else {
   f = c[a + (j + 8) >> 2] | 0;
   if (f >>> 0 < i >>> 0) Aa();
   b = f + 12 | 0;
   if ((c[b >> 2] | 0) != (l | 0)) Aa();
   d = e + 8 | 0;
   if ((c[d >> 2] | 0) == (l | 0)) {
    c[b >> 2] = e;
    c[d >> 2] = f;
    k = e;
    break;
   } else Aa();
  } while (0);
  if (h) {
   b = c[a + (j + 28) >> 2] | 0;
   d = 6448 + (b << 2) | 0;
   if ((l | 0) == (c[d >> 2] | 0)) {
    c[d >> 2] = k;
    if (!k) {
     c[1537] = c[1537] & ~(1 << b);
     u = l;
     g = m;
     break;
    }
   } else {
    if (h >>> 0 < (c[1540] | 0) >>> 0) Aa();
    b = h + 16 | 0;
    if ((c[b >> 2] | 0) == (l | 0)) c[b >> 2] = k; else c[h + 20 >> 2] = k;
    if (!k) {
     u = l;
     g = m;
     break;
    }
   }
   d = c[1540] | 0;
   if (k >>> 0 < d >>> 0) Aa();
   c[k + 24 >> 2] = h;
   b = c[a + (j + 16) >> 2] | 0;
   do if (b) if (b >>> 0 < d >>> 0) Aa(); else {
    c[k + 16 >> 2] = b;
    c[b + 24 >> 2] = k;
    break;
   } while (0);
   b = c[a + (j + 20) >> 2] | 0;
   if (b) if (b >>> 0 < (c[1540] | 0) >>> 0) Aa(); else {
    c[k + 20 >> 2] = b;
    c[b + 24 >> 2] = k;
    u = l;
    g = m;
    break;
   } else {
    u = l;
    g = m;
   }
  } else {
   u = l;
   g = m;
  }
 } else {
  u = b;
  g = o;
 } while (0);
 if (u >>> 0 >= q >>> 0) Aa();
 b = a + (o + -4) | 0;
 d = c[b >> 2] | 0;
 if (!(d & 1)) Aa();
 if (!(d & 2)) {
  if ((q | 0) == (c[1542] | 0)) {
   t = (c[1539] | 0) + g | 0;
   c[1539] = t;
   c[1542] = u;
   c[u + 4 >> 2] = t | 1;
   if ((u | 0) != (c[1541] | 0)) return;
   c[1541] = 0;
   c[1538] = 0;
   return;
  }
  if ((q | 0) == (c[1541] | 0)) {
   t = (c[1538] | 0) + g | 0;
   c[1538] = t;
   c[1541] = u;
   c[u + 4 >> 2] = t | 1;
   c[u + t >> 2] = t;
   return;
  }
  g = (d & -8) + g | 0;
  f = d >>> 3;
  do if (d >>> 0 >= 256) {
   h = c[a + (o + 16) >> 2] | 0;
   b = c[a + (o | 4) >> 2] | 0;
   do if ((b | 0) == (q | 0)) {
    d = a + (o + 12) | 0;
    b = c[d >> 2] | 0;
    if (!b) {
     d = a + (o + 8) | 0;
     b = c[d >> 2] | 0;
     if (!b) {
      p = 0;
      break;
     }
    }
    while (1) {
     e = b + 20 | 0;
     f = c[e >> 2] | 0;
     if (f) {
      b = f;
      d = e;
      continue;
     }
     e = b + 16 | 0;
     f = c[e >> 2] | 0;
     if (!f) break; else {
      b = f;
      d = e;
     }
    }
    if (d >>> 0 < (c[1540] | 0) >>> 0) Aa(); else {
     c[d >> 2] = 0;
     p = b;
     break;
    }
   } else {
    d = c[a + o >> 2] | 0;
    if (d >>> 0 < (c[1540] | 0) >>> 0) Aa();
    e = d + 12 | 0;
    if ((c[e >> 2] | 0) != (q | 0)) Aa();
    f = b + 8 | 0;
    if ((c[f >> 2] | 0) == (q | 0)) {
     c[e >> 2] = b;
     c[f >> 2] = d;
     p = b;
     break;
    } else Aa();
   } while (0);
   if (h) {
    b = c[a + (o + 20) >> 2] | 0;
    d = 6448 + (b << 2) | 0;
    if ((q | 0) == (c[d >> 2] | 0)) {
     c[d >> 2] = p;
     if (!p) {
      c[1537] = c[1537] & ~(1 << b);
      break;
     }
    } else {
     if (h >>> 0 < (c[1540] | 0) >>> 0) Aa();
     b = h + 16 | 0;
     if ((c[b >> 2] | 0) == (q | 0)) c[b >> 2] = p; else c[h + 20 >> 2] = p;
     if (!p) break;
    }
    d = c[1540] | 0;
    if (p >>> 0 < d >>> 0) Aa();
    c[p + 24 >> 2] = h;
    b = c[a + (o + 8) >> 2] | 0;
    do if (b) if (b >>> 0 < d >>> 0) Aa(); else {
     c[p + 16 >> 2] = b;
     c[b + 24 >> 2] = p;
     break;
    } while (0);
    b = c[a + (o + 12) >> 2] | 0;
    if (b) if (b >>> 0 < (c[1540] | 0) >>> 0) Aa(); else {
     c[p + 20 >> 2] = b;
     c[b + 24 >> 2] = p;
     break;
    }
   }
  } else {
   e = c[a + o >> 2] | 0;
   d = c[a + (o | 4) >> 2] | 0;
   b = 6184 + (f << 1 << 2) | 0;
   if ((e | 0) != (b | 0)) {
    if (e >>> 0 < (c[1540] | 0) >>> 0) Aa();
    if ((c[e + 12 >> 2] | 0) != (q | 0)) Aa();
   }
   if ((d | 0) == (e | 0)) {
    c[1536] = c[1536] & ~(1 << f);
    break;
   }
   if ((d | 0) != (b | 0)) {
    if (d >>> 0 < (c[1540] | 0) >>> 0) Aa();
    b = d + 8 | 0;
    if ((c[b >> 2] | 0) == (q | 0)) n = b; else Aa();
   } else n = d + 8 | 0;
   c[e + 12 >> 2] = d;
   c[n >> 2] = e;
  } while (0);
  c[u + 4 >> 2] = g | 1;
  c[u + g >> 2] = g;
  if ((u | 0) == (c[1541] | 0)) {
   c[1538] = g;
   return;
  }
 } else {
  c[b >> 2] = d & -2;
  c[u + 4 >> 2] = g | 1;
  c[u + g >> 2] = g;
 }
 b = g >>> 3;
 if (g >>> 0 < 256) {
  d = b << 1;
  f = 6184 + (d << 2) | 0;
  e = c[1536] | 0;
  b = 1 << b;
  if (e & b) {
   b = 6184 + (d + 2 << 2) | 0;
   d = c[b >> 2] | 0;
   if (d >>> 0 < (c[1540] | 0) >>> 0) Aa(); else {
    r = b;
    s = d;
   }
  } else {
   c[1536] = e | b;
   r = 6184 + (d + 2 << 2) | 0;
   s = f;
  }
  c[r >> 2] = u;
  c[s + 12 >> 2] = u;
  c[u + 8 >> 2] = s;
  c[u + 12 >> 2] = f;
  return;
 }
 b = g >>> 8;
 if (b) if (g >>> 0 > 16777215) f = 31; else {
  r = (b + 1048320 | 0) >>> 16 & 8;
  s = b << r;
  q = (s + 520192 | 0) >>> 16 & 4;
  s = s << q;
  f = (s + 245760 | 0) >>> 16 & 2;
  f = 14 - (q | r | f) + (s << f >>> 15) | 0;
  f = g >>> (f + 7 | 0) & 1 | f << 1;
 } else f = 0;
 b = 6448 + (f << 2) | 0;
 c[u + 28 >> 2] = f;
 c[u + 20 >> 2] = 0;
 c[u + 16 >> 2] = 0;
 d = c[1537] | 0;
 e = 1 << f;
 a : do if (d & e) {
  b = c[b >> 2] | 0;
  b : do if ((c[b + 4 >> 2] & -8 | 0) != (g | 0)) {
   f = g << ((f | 0) == 31 ? 0 : 25 - (f >>> 1) | 0);
   while (1) {
    d = b + 16 + (f >>> 31 << 2) | 0;
    e = c[d >> 2] | 0;
    if (!e) break;
    if ((c[e + 4 >> 2] & -8 | 0) == (g | 0)) {
     t = e;
     break b;
    } else {
     f = f << 1;
     b = e;
    }
   }
   if (d >>> 0 < (c[1540] | 0) >>> 0) Aa(); else {
    c[d >> 2] = u;
    c[u + 24 >> 2] = b;
    c[u + 12 >> 2] = u;
    c[u + 8 >> 2] = u;
    break a;
   }
  } else t = b; while (0);
  b = t + 8 | 0;
  d = c[b >> 2] | 0;
  s = c[1540] | 0;
  if (d >>> 0 >= s >>> 0 & t >>> 0 >= s >>> 0) {
   c[d + 12 >> 2] = u;
   c[b >> 2] = u;
   c[u + 8 >> 2] = d;
   c[u + 12 >> 2] = t;
   c[u + 24 >> 2] = 0;
   break;
  } else Aa();
 } else {
  c[1537] = d | e;
  c[b >> 2] = u;
  c[u + 24 >> 2] = b;
  c[u + 12 >> 2] = u;
  c[u + 8 >> 2] = u;
 } while (0);
 u = (c[1544] | 0) + -1 | 0;
 c[1544] = u;
 if (!u) b = 6600; else return;
 while (1) {
  b = c[b >> 2] | 0;
  if (!b) break; else b = b + 8 | 0;
 }
 c[1544] = -1;
 return;
}

function ve(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0;
 q = a + b | 0;
 d = c[a + 4 >> 2] | 0;
 do if (!(d & 1)) {
  k = c[a >> 2] | 0;
  if (!(d & 3)) return;
  n = a + (0 - k) | 0;
  m = k + b | 0;
  j = c[1540] | 0;
  if (n >>> 0 < j >>> 0) Aa();
  if ((n | 0) == (c[1541] | 0)) {
   e = a + (b + 4) | 0;
   d = c[e >> 2] | 0;
   if ((d & 3 | 0) != 3) {
    t = n;
    h = m;
    break;
   }
   c[1538] = m;
   c[e >> 2] = d & -2;
   c[a + (4 - k) >> 2] = m | 1;
   c[q >> 2] = m;
   return;
  }
  g = k >>> 3;
  if (k >>> 0 < 256) {
   f = c[a + (8 - k) >> 2] | 0;
   e = c[a + (12 - k) >> 2] | 0;
   d = 6184 + (g << 1 << 2) | 0;
   if ((f | 0) != (d | 0)) {
    if (f >>> 0 < j >>> 0) Aa();
    if ((c[f + 12 >> 2] | 0) != (n | 0)) Aa();
   }
   if ((e | 0) == (f | 0)) {
    c[1536] = c[1536] & ~(1 << g);
    t = n;
    h = m;
    break;
   }
   if ((e | 0) != (d | 0)) {
    if (e >>> 0 < j >>> 0) Aa();
    d = e + 8 | 0;
    if ((c[d >> 2] | 0) == (n | 0)) i = d; else Aa();
   } else i = e + 8 | 0;
   c[f + 12 >> 2] = e;
   c[i >> 2] = f;
   t = n;
   h = m;
   break;
  }
  i = c[a + (24 - k) >> 2] | 0;
  f = c[a + (12 - k) >> 2] | 0;
  do if ((f | 0) == (n | 0)) {
   f = 16 - k | 0;
   e = a + (f + 4) | 0;
   d = c[e >> 2] | 0;
   if (!d) {
    e = a + f | 0;
    d = c[e >> 2] | 0;
    if (!d) {
     l = 0;
     break;
    }
   }
   while (1) {
    f = d + 20 | 0;
    g = c[f >> 2] | 0;
    if (g) {
     d = g;
     e = f;
     continue;
    }
    f = d + 16 | 0;
    g = c[f >> 2] | 0;
    if (!g) break; else {
     d = g;
     e = f;
    }
   }
   if (e >>> 0 < j >>> 0) Aa(); else {
    c[e >> 2] = 0;
    l = d;
    break;
   }
  } else {
   g = c[a + (8 - k) >> 2] | 0;
   if (g >>> 0 < j >>> 0) Aa();
   d = g + 12 | 0;
   if ((c[d >> 2] | 0) != (n | 0)) Aa();
   e = f + 8 | 0;
   if ((c[e >> 2] | 0) == (n | 0)) {
    c[d >> 2] = f;
    c[e >> 2] = g;
    l = f;
    break;
   } else Aa();
  } while (0);
  if (i) {
   d = c[a + (28 - k) >> 2] | 0;
   e = 6448 + (d << 2) | 0;
   if ((n | 0) == (c[e >> 2] | 0)) {
    c[e >> 2] = l;
    if (!l) {
     c[1537] = c[1537] & ~(1 << d);
     t = n;
     h = m;
     break;
    }
   } else {
    if (i >>> 0 < (c[1540] | 0) >>> 0) Aa();
    d = i + 16 | 0;
    if ((c[d >> 2] | 0) == (n | 0)) c[d >> 2] = l; else c[i + 20 >> 2] = l;
    if (!l) {
     t = n;
     h = m;
     break;
    }
   }
   f = c[1540] | 0;
   if (l >>> 0 < f >>> 0) Aa();
   c[l + 24 >> 2] = i;
   d = 16 - k | 0;
   e = c[a + d >> 2] | 0;
   do if (e) if (e >>> 0 < f >>> 0) Aa(); else {
    c[l + 16 >> 2] = e;
    c[e + 24 >> 2] = l;
    break;
   } while (0);
   d = c[a + (d + 4) >> 2] | 0;
   if (d) if (d >>> 0 < (c[1540] | 0) >>> 0) Aa(); else {
    c[l + 20 >> 2] = d;
    c[d + 24 >> 2] = l;
    t = n;
    h = m;
    break;
   } else {
    t = n;
    h = m;
   }
  } else {
   t = n;
   h = m;
  }
 } else {
  t = a;
  h = b;
 } while (0);
 j = c[1540] | 0;
 if (q >>> 0 < j >>> 0) Aa();
 d = a + (b + 4) | 0;
 e = c[d >> 2] | 0;
 if (!(e & 2)) {
  if ((q | 0) == (c[1542] | 0)) {
   s = (c[1539] | 0) + h | 0;
   c[1539] = s;
   c[1542] = t;
   c[t + 4 >> 2] = s | 1;
   if ((t | 0) != (c[1541] | 0)) return;
   c[1541] = 0;
   c[1538] = 0;
   return;
  }
  if ((q | 0) == (c[1541] | 0)) {
   s = (c[1538] | 0) + h | 0;
   c[1538] = s;
   c[1541] = t;
   c[t + 4 >> 2] = s | 1;
   c[t + s >> 2] = s;
   return;
  }
  h = (e & -8) + h | 0;
  g = e >>> 3;
  do if (e >>> 0 >= 256) {
   i = c[a + (b + 24) >> 2] | 0;
   f = c[a + (b + 12) >> 2] | 0;
   do if ((f | 0) == (q | 0)) {
    e = a + (b + 20) | 0;
    d = c[e >> 2] | 0;
    if (!d) {
     e = a + (b + 16) | 0;
     d = c[e >> 2] | 0;
     if (!d) {
      p = 0;
      break;
     }
    }
    while (1) {
     f = d + 20 | 0;
     g = c[f >> 2] | 0;
     if (g) {
      d = g;
      e = f;
      continue;
     }
     f = d + 16 | 0;
     g = c[f >> 2] | 0;
     if (!g) break; else {
      d = g;
      e = f;
     }
    }
    if (e >>> 0 < j >>> 0) Aa(); else {
     c[e >> 2] = 0;
     p = d;
     break;
    }
   } else {
    g = c[a + (b + 8) >> 2] | 0;
    if (g >>> 0 < j >>> 0) Aa();
    d = g + 12 | 0;
    if ((c[d >> 2] | 0) != (q | 0)) Aa();
    e = f + 8 | 0;
    if ((c[e >> 2] | 0) == (q | 0)) {
     c[d >> 2] = f;
     c[e >> 2] = g;
     p = f;
     break;
    } else Aa();
   } while (0);
   if (i) {
    d = c[a + (b + 28) >> 2] | 0;
    e = 6448 + (d << 2) | 0;
    if ((q | 0) == (c[e >> 2] | 0)) {
     c[e >> 2] = p;
     if (!p) {
      c[1537] = c[1537] & ~(1 << d);
      break;
     }
    } else {
     if (i >>> 0 < (c[1540] | 0) >>> 0) Aa();
     d = i + 16 | 0;
     if ((c[d >> 2] | 0) == (q | 0)) c[d >> 2] = p; else c[i + 20 >> 2] = p;
     if (!p) break;
    }
    e = c[1540] | 0;
    if (p >>> 0 < e >>> 0) Aa();
    c[p + 24 >> 2] = i;
    d = c[a + (b + 16) >> 2] | 0;
    do if (d) if (d >>> 0 < e >>> 0) Aa(); else {
     c[p + 16 >> 2] = d;
     c[d + 24 >> 2] = p;
     break;
    } while (0);
    d = c[a + (b + 20) >> 2] | 0;
    if (d) if (d >>> 0 < (c[1540] | 0) >>> 0) Aa(); else {
     c[p + 20 >> 2] = d;
     c[d + 24 >> 2] = p;
     break;
    }
   }
  } else {
   f = c[a + (b + 8) >> 2] | 0;
   e = c[a + (b + 12) >> 2] | 0;
   d = 6184 + (g << 1 << 2) | 0;
   if ((f | 0) != (d | 0)) {
    if (f >>> 0 < j >>> 0) Aa();
    if ((c[f + 12 >> 2] | 0) != (q | 0)) Aa();
   }
   if ((e | 0) == (f | 0)) {
    c[1536] = c[1536] & ~(1 << g);
    break;
   }
   if ((e | 0) != (d | 0)) {
    if (e >>> 0 < j >>> 0) Aa();
    d = e + 8 | 0;
    if ((c[d >> 2] | 0) == (q | 0)) o = d; else Aa();
   } else o = e + 8 | 0;
   c[f + 12 >> 2] = e;
   c[o >> 2] = f;
  } while (0);
  c[t + 4 >> 2] = h | 1;
  c[t + h >> 2] = h;
  if ((t | 0) == (c[1541] | 0)) {
   c[1538] = h;
   return;
  }
 } else {
  c[d >> 2] = e & -2;
  c[t + 4 >> 2] = h | 1;
  c[t + h >> 2] = h;
 }
 d = h >>> 3;
 if (h >>> 0 < 256) {
  e = d << 1;
  g = 6184 + (e << 2) | 0;
  f = c[1536] | 0;
  d = 1 << d;
  if (f & d) {
   d = 6184 + (e + 2 << 2) | 0;
   e = c[d >> 2] | 0;
   if (e >>> 0 < (c[1540] | 0) >>> 0) Aa(); else {
    r = d;
    s = e;
   }
  } else {
   c[1536] = f | d;
   r = 6184 + (e + 2 << 2) | 0;
   s = g;
  }
  c[r >> 2] = t;
  c[s + 12 >> 2] = t;
  c[t + 8 >> 2] = s;
  c[t + 12 >> 2] = g;
  return;
 }
 d = h >>> 8;
 if (d) if (h >>> 0 > 16777215) g = 31; else {
  r = (d + 1048320 | 0) >>> 16 & 8;
  s = d << r;
  q = (s + 520192 | 0) >>> 16 & 4;
  s = s << q;
  g = (s + 245760 | 0) >>> 16 & 2;
  g = 14 - (q | r | g) + (s << g >>> 15) | 0;
  g = h >>> (g + 7 | 0) & 1 | g << 1;
 } else g = 0;
 d = 6448 + (g << 2) | 0;
 c[t + 28 >> 2] = g;
 c[t + 20 >> 2] = 0;
 c[t + 16 >> 2] = 0;
 e = c[1537] | 0;
 f = 1 << g;
 if (!(e & f)) {
  c[1537] = e | f;
  c[d >> 2] = t;
  c[t + 24 >> 2] = d;
  c[t + 12 >> 2] = t;
  c[t + 8 >> 2] = t;
  return;
 }
 d = c[d >> 2] | 0;
 a : do if ((c[d + 4 >> 2] & -8 | 0) != (h | 0)) {
  g = h << ((g | 0) == 31 ? 0 : 25 - (g >>> 1) | 0);
  while (1) {
   e = d + 16 + (g >>> 31 << 2) | 0;
   f = c[e >> 2] | 0;
   if (!f) break;
   if ((c[f + 4 >> 2] & -8 | 0) == (h | 0)) {
    d = f;
    break a;
   } else {
    g = g << 1;
    d = f;
   }
  }
  if (e >>> 0 < (c[1540] | 0) >>> 0) Aa();
  c[e >> 2] = t;
  c[t + 24 >> 2] = d;
  c[t + 12 >> 2] = t;
  c[t + 8 >> 2] = t;
  return;
 } while (0);
 e = d + 8 | 0;
 f = c[e >> 2] | 0;
 s = c[1540] | 0;
 if (!(f >>> 0 >= s >>> 0 & d >>> 0 >= s >>> 0)) Aa();
 c[f + 12 >> 2] = t;
 c[e >> 2] = t;
 c[t + 8 >> 2] = f;
 c[t + 12 >> 2] = d;
 c[t + 24 >> 2] = 0;
 return;
}

function Tc(b, e, f, g, h) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 a : do if (e >>> 0 > 36) {
  c[(Rc() | 0) >> 2] = 22;
  h = 0;
  g = 0;
 } else {
  r = b + 4 | 0;
  q = b + 100 | 0;
  do {
   i = c[r >> 2] | 0;
   if (i >>> 0 < (c[q >> 2] | 0) >>> 0) {
    c[r >> 2] = i + 1;
    i = d[i >> 0] | 0;
   } else i = Vc(b) | 0;
  } while ((Lc(i) | 0) != 0);
  b : do switch (i | 0) {
  case 43:
  case 45:
   {
    j = ((i | 0) == 45) << 31 >> 31;
    i = c[r >> 2] | 0;
    if (i >>> 0 < (c[q >> 2] | 0) >>> 0) {
     c[r >> 2] = i + 1;
     i = d[i >> 0] | 0;
     p = j;
     break b;
    } else {
     i = Vc(b) | 0;
     p = j;
     break b;
    }
   }
  default:
   p = 0;
  } while (0);
  j = (e | 0) == 0;
  do if ((e & -17 | 0) == 0 & (i | 0) == 48) {
   i = c[r >> 2] | 0;
   if (i >>> 0 < (c[q >> 2] | 0) >>> 0) {
    c[r >> 2] = i + 1;
    i = d[i >> 0] | 0;
   } else i = Vc(b) | 0;
   if ((i | 32 | 0) != 120) if (j) {
    e = 8;
    n = 46;
    break;
   } else {
    n = 32;
    break;
   }
   e = c[r >> 2] | 0;
   if (e >>> 0 < (c[q >> 2] | 0) >>> 0) {
    c[r >> 2] = e + 1;
    i = d[e >> 0] | 0;
   } else i = Vc(b) | 0;
   if ((d[16537 + (i + 1) >> 0] | 0) > 15) {
    g = (c[q >> 2] | 0) == 0;
    if (!g) c[r >> 2] = (c[r >> 2] | 0) + -1;
    if (!f) {
     Uc(b, 0);
     h = 0;
     g = 0;
     break a;
    }
    if (g) {
     h = 0;
     g = 0;
     break a;
    }
    c[r >> 2] = (c[r >> 2] | 0) + -1;
    h = 0;
    g = 0;
    break a;
   } else {
    e = 16;
    n = 46;
   }
  } else {
   e = j ? 10 : e;
   if ((d[16537 + (i + 1) >> 0] | 0) >>> 0 < e >>> 0) n = 32; else {
    if (c[q >> 2] | 0) c[r >> 2] = (c[r >> 2] | 0) + -1;
    Uc(b, 0);
    c[(Rc() | 0) >> 2] = 22;
    h = 0;
    g = 0;
    break a;
   }
  } while (0);
  if ((n | 0) == 32) if ((e | 0) == 10) {
   e = i + -48 | 0;
   if (e >>> 0 < 10) {
    i = 0;
    while (1) {
     j = (i * 10 | 0) + e | 0;
     e = c[r >> 2] | 0;
     if (e >>> 0 < (c[q >> 2] | 0) >>> 0) {
      c[r >> 2] = e + 1;
      i = d[e >> 0] | 0;
     } else i = Vc(b) | 0;
     e = i + -48 | 0;
     if (!(e >>> 0 < 10 & j >>> 0 < 429496729)) {
      e = j;
      break;
     } else i = j;
    }
    j = 0;
   } else {
    e = 0;
    j = 0;
   }
   f = i + -48 | 0;
   if (f >>> 0 < 10) {
    while (1) {
     k = Co(e | 0, j | 0, 10, 0) | 0;
     l = D;
     m = ((f | 0) < 0) << 31 >> 31;
     o = ~m;
     if (l >>> 0 > o >>> 0 | (l | 0) == (o | 0) & k >>> 0 > ~f >>> 0) {
      k = e;
      break;
     }
     e = so(k | 0, l | 0, f | 0, m | 0) | 0;
     j = D;
     i = c[r >> 2] | 0;
     if (i >>> 0 < (c[q >> 2] | 0) >>> 0) {
      c[r >> 2] = i + 1;
      i = d[i >> 0] | 0;
     } else i = Vc(b) | 0;
     f = i + -48 | 0;
     if (!(f >>> 0 < 10 & (j >>> 0 < 429496729 | (j | 0) == 429496729 & e >>> 0 < 2576980378))) {
      k = e;
      break;
     }
    }
    if (f >>> 0 > 9) {
     i = k;
     e = p;
    } else {
     e = 10;
     n = 72;
    }
   } else {
    i = e;
    e = p;
   }
  } else n = 46;
  c : do if ((n | 0) == 46) {
   if (!(e + -1 & e)) {
    n = a[16794 + ((e * 23 | 0) >>> 5 & 7) >> 0] | 0;
    j = a[16537 + (i + 1) >> 0] | 0;
    f = j & 255;
    if (f >>> 0 < e >>> 0) {
     i = 0;
     while (1) {
      k = f | i << n;
      i = c[r >> 2] | 0;
      if (i >>> 0 < (c[q >> 2] | 0) >>> 0) {
       c[r >> 2] = i + 1;
       i = d[i >> 0] | 0;
      } else i = Vc(b) | 0;
      j = a[16537 + (i + 1) >> 0] | 0;
      f = j & 255;
      if (!(k >>> 0 < 134217728 & f >>> 0 < e >>> 0)) break; else i = k;
     }
     f = 0;
    } else {
     f = 0;
     k = 0;
    }
    l = to(-1, -1, n | 0) | 0;
    m = D;
    if ((j & 255) >>> 0 >= e >>> 0 | (f >>> 0 > m >>> 0 | (f | 0) == (m | 0) & k >>> 0 > l >>> 0)) {
     j = f;
     n = 72;
     break;
    } else i = f;
    while (1) {
     k = vo(k | 0, i | 0, n | 0) | 0;
     f = D;
     k = j & 255 | k;
     i = c[r >> 2] | 0;
     if (i >>> 0 < (c[q >> 2] | 0) >>> 0) {
      c[r >> 2] = i + 1;
      i = d[i >> 0] | 0;
     } else i = Vc(b) | 0;
     j = a[16537 + (i + 1) >> 0] | 0;
     if ((j & 255) >>> 0 >= e >>> 0 | (f >>> 0 > m >>> 0 | (f | 0) == (m | 0) & k >>> 0 > l >>> 0)) {
      j = f;
      n = 72;
      break c;
     } else i = f;
    }
   }
   j = a[16537 + (i + 1) >> 0] | 0;
   f = j & 255;
   if (f >>> 0 < e >>> 0) {
    i = 0;
    while (1) {
     k = f + ($(i, e) | 0) | 0;
     i = c[r >> 2] | 0;
     if (i >>> 0 < (c[q >> 2] | 0) >>> 0) {
      c[r >> 2] = i + 1;
      i = d[i >> 0] | 0;
     } else i = Vc(b) | 0;
     j = a[16537 + (i + 1) >> 0] | 0;
     f = j & 255;
     if (!(k >>> 0 < 119304647 & f >>> 0 < e >>> 0)) break; else i = k;
    }
    f = 0;
   } else {
    k = 0;
    f = 0;
   }
   if ((j & 255) >>> 0 < e >>> 0) {
    n = Do(-1, -1, e | 0, 0) | 0;
    o = D;
    m = f;
    while (1) {
     if (m >>> 0 > o >>> 0 | (m | 0) == (o | 0) & k >>> 0 > n >>> 0) {
      j = m;
      n = 72;
      break c;
     }
     f = Co(k | 0, m | 0, e | 0, 0) | 0;
     l = D;
     j = j & 255;
     if (l >>> 0 > 4294967295 | (l | 0) == -1 & f >>> 0 > ~j >>> 0) {
      j = m;
      n = 72;
      break c;
     }
     k = so(j | 0, 0, f | 0, l | 0) | 0;
     f = D;
     i = c[r >> 2] | 0;
     if (i >>> 0 < (c[q >> 2] | 0) >>> 0) {
      c[r >> 2] = i + 1;
      i = d[i >> 0] | 0;
     } else i = Vc(b) | 0;
     j = a[16537 + (i + 1) >> 0] | 0;
     if ((j & 255) >>> 0 >= e >>> 0) {
      j = f;
      n = 72;
      break;
     } else m = f;
    }
   } else {
    j = f;
    n = 72;
   }
  } while (0);
  if ((n | 0) == 72) if ((d[16537 + (i + 1) >> 0] | 0) >>> 0 < e >>> 0) {
   do {
    i = c[r >> 2] | 0;
    if (i >>> 0 < (c[q >> 2] | 0) >>> 0) {
     c[r >> 2] = i + 1;
     i = d[i >> 0] | 0;
    } else i = Vc(b) | 0;
   } while ((d[16537 + (i + 1) >> 0] | 0) >>> 0 < e >>> 0);
   c[(Rc() | 0) >> 2] = 34;
   j = h;
   i = g;
   e = (g & 1 | 0) == 0 & 0 == 0 ? p : 0;
  } else {
   i = k;
   e = p;
  }
  if (c[q >> 2] | 0) c[r >> 2] = (c[r >> 2] | 0) + -1;
  if (!(j >>> 0 < h >>> 0 | (j | 0) == (h | 0) & i >>> 0 < g >>> 0)) {
   if (!((g & 1 | 0) != 0 | 0 != 0 | (e | 0) != 0)) {
    c[(Rc() | 0) >> 2] = 34;
    g = so(g | 0, h | 0, -1, -1) | 0;
    h = D;
    break;
   }
   if (j >>> 0 > h >>> 0 | (j | 0) == (h | 0) & i >>> 0 > g >>> 0) {
    c[(Rc() | 0) >> 2] = 34;
    break;
   }
  }
  g = ((e | 0) < 0) << 31 >> 31;
  g = qo(i ^ e | 0, j ^ g | 0, e | 0, g | 0) | 0;
  h = D;
 } while (0);
 D = h;
 return g | 0;
}

function vi(a, b, d, e, f, g, h, j) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0;
 w = i;
 i = i + 32 | 0;
 r = w + 16 | 0;
 q = w + 12 | 0;
 u = w + 8 | 0;
 s = w + 4 | 0;
 t = w;
 k = Af(e) | 0;
 c[u >> 2] = k;
 u = Ok(u, 9328) | 0;
 mo(k) | 0;
 c[f >> 2] = 0;
 k = c[b >> 2] | 0;
 a : do if ((h | 0) != (j | 0)) {
  b : while (1) {
   m = k;
   if (k) {
    l = c[k + 12 >> 2] | 0;
    if ((l | 0) == (c[k + 16 >> 2] | 0)) l = wb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else l = c[l >> 2] | 0;
    if ((l | 0) == -1) {
     c[b >> 2] = 0;
     k = 0;
     o = 1;
     p = 0;
    } else {
     o = 0;
     p = m;
    }
   } else {
    k = 0;
    o = 1;
    p = m;
   }
   n = c[d >> 2] | 0;
   l = n;
   do if (n) {
    m = c[n + 12 >> 2] | 0;
    if ((m | 0) == (c[n + 16 >> 2] | 0)) m = wb[c[(c[n >> 2] | 0) + 36 >> 2] & 63](n) | 0; else m = c[m >> 2] | 0;
    if ((m | 0) != -1) if (o) break; else {
     v = 16;
     break b;
    } else {
     c[d >> 2] = 0;
     l = 0;
     v = 14;
     break;
    }
   } else v = 14; while (0);
   if ((v | 0) == 14) {
    v = 0;
    if (o) {
     v = 16;
     break;
    } else n = 0;
   }
   c : do if ((pb[c[(c[u >> 2] | 0) + 52 >> 2] & 31](u, c[h >> 2] | 0, 0) | 0) << 24 >> 24 == 37) {
    m = h + 4 | 0;
    if ((m | 0) == (j | 0)) {
     v = 19;
     break b;
    }
    o = pb[c[(c[u >> 2] | 0) + 52 >> 2] & 31](u, c[m >> 2] | 0, 0) | 0;
    switch (o << 24 >> 24) {
    case 48:
    case 69:
     {
      n = h + 8 | 0;
      if ((n | 0) == (j | 0)) {
       v = 22;
       break b;
      }
      h = m;
      m = pb[c[(c[u >> 2] | 0) + 52 >> 2] & 31](u, c[n >> 2] | 0, 0) | 0;
      k = o;
      break;
     }
    default:
     {
      m = o;
      k = 0;
     }
    }
    o = c[(c[a >> 2] | 0) + 36 >> 2] | 0;
    c[s >> 2] = p;
    c[t >> 2] = l;
    c[q >> 2] = c[s >> 2];
    c[r >> 2] = c[t >> 2];
    c[b >> 2] = zb[o & 15](a, q, r, e, f, g, m, k) | 0;
    h = h + 8 | 0;
   } else {
    if (!(pb[c[(c[u >> 2] | 0) + 12 >> 2] & 31](u, 8192, c[h >> 2] | 0) | 0)) {
     m = k + 12 | 0;
     l = c[m >> 2] | 0;
     n = k + 16 | 0;
     if ((l | 0) == (c[n >> 2] | 0)) l = wb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else l = c[l >> 2] | 0;
     p = Cb[c[(c[u >> 2] | 0) + 28 >> 2] & 15](u, l) | 0;
     if ((p | 0) != (Cb[c[(c[u >> 2] | 0) + 28 >> 2] & 15](u, c[h >> 2] | 0) | 0)) {
      v = 59;
      break b;
     }
     l = c[m >> 2] | 0;
     if ((l | 0) == (c[n >> 2] | 0)) wb[c[(c[k >> 2] | 0) + 40 >> 2] & 63](k) | 0; else c[m >> 2] = l + 4;
     h = h + 4 | 0;
     break;
    }
    do {
     h = h + 4 | 0;
     if ((h | 0) == (j | 0)) {
      h = j;
      break;
     }
    } while (pb[c[(c[u >> 2] | 0) + 12 >> 2] & 31](u, 8192, c[h >> 2] | 0) | 0);
    l = n;
    o = n;
    while (1) {
     if (k) {
      m = c[k + 12 >> 2] | 0;
      if ((m | 0) == (c[k + 16 >> 2] | 0)) m = wb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else m = c[m >> 2] | 0;
      if ((m | 0) == -1) {
       c[b >> 2] = 0;
       n = 1;
       k = 0;
      } else n = 0;
     } else {
      n = 1;
      k = 0;
     }
     do if (o) {
      m = c[o + 12 >> 2] | 0;
      if ((m | 0) == (c[o + 16 >> 2] | 0)) m = wb[c[(c[o >> 2] | 0) + 36 >> 2] & 63](o) | 0; else m = c[m >> 2] | 0;
      if ((m | 0) != -1) if (n ^ (l | 0) == 0) {
       p = l;
       o = l;
       break;
      } else break c; else {
       c[d >> 2] = 0;
       l = 0;
       v = 42;
       break;
      }
     } else v = 42; while (0);
     if ((v | 0) == 42) {
      v = 0;
      if (n) break c; else {
       p = l;
       o = 0;
      }
     }
     m = k + 12 | 0;
     l = c[m >> 2] | 0;
     n = k + 16 | 0;
     if ((l | 0) == (c[n >> 2] | 0)) l = wb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else l = c[l >> 2] | 0;
     if (!(pb[c[(c[u >> 2] | 0) + 12 >> 2] & 31](u, 8192, l) | 0)) break c;
     l = c[m >> 2] | 0;
     if ((l | 0) == (c[n >> 2] | 0)) {
      wb[c[(c[k >> 2] | 0) + 40 >> 2] & 63](k) | 0;
      l = p;
      continue;
     } else {
      c[m >> 2] = l + 4;
      l = p;
      continue;
     }
    }
   } while (0);
   k = c[b >> 2] | 0;
   if (!((h | 0) != (j | 0) & (c[f >> 2] | 0) == 0)) break a;
  }
  if ((v | 0) == 16) {
   c[f >> 2] = 4;
   break;
  } else if ((v | 0) == 19) {
   c[f >> 2] = 4;
   break;
  } else if ((v | 0) == 22) {
   c[f >> 2] = 4;
   break;
  } else if ((v | 0) == 59) {
   c[f >> 2] = 4;
   k = c[b >> 2] | 0;
   break;
  }
 } while (0);
 if (k) {
  h = c[k + 12 >> 2] | 0;
  if ((h | 0) == (c[k + 16 >> 2] | 0)) h = wb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else h = c[h >> 2] | 0;
  if ((h | 0) == -1) {
   c[b >> 2] = 0;
   k = 0;
   m = 1;
  } else m = 0;
 } else {
  k = 0;
  m = 1;
 }
 h = c[d >> 2] | 0;
 do if (h) {
  l = c[h + 12 >> 2] | 0;
  if ((l | 0) == (c[h + 16 >> 2] | 0)) h = wb[c[(c[h >> 2] | 0) + 36 >> 2] & 63](h) | 0; else h = c[l >> 2] | 0;
  if ((h | 0) != -1) if (m) break; else {
   v = 74;
   break;
  } else {
   c[d >> 2] = 0;
   v = 72;
   break;
  }
 } else v = 72; while (0);
 if ((v | 0) == 72 ? m : 0) v = 74;
 if ((v | 0) == 74) c[f >> 2] = c[f >> 2] | 2;
 i = w;
 return k | 0;
}

function Hi(b, d, e, f, g, h, j, k) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 k = k | 0;
 var l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0;
 S = i;
 i = i + 144 | 0;
 l = S + 132 | 0;
 k = S + 116 | 0;
 L = S + 128 | 0;
 w = S + 124 | 0;
 H = S + 120 | 0;
 M = S + 112 | 0;
 N = S + 108 | 0;
 O = S + 104 | 0;
 P = S + 100 | 0;
 Q = S + 96 | 0;
 R = S + 92 | 0;
 m = S + 88 | 0;
 n = S + 84 | 0;
 o = S + 80 | 0;
 p = S + 76 | 0;
 q = S + 72 | 0;
 r = S + 68 | 0;
 s = S + 64 | 0;
 t = S + 60 | 0;
 u = S + 56 | 0;
 v = S + 52 | 0;
 x = S + 48 | 0;
 y = S + 44 | 0;
 z = S + 40 | 0;
 A = S + 36 | 0;
 B = S + 32 | 0;
 C = S + 28 | 0;
 D = S + 24 | 0;
 E = S + 20 | 0;
 F = S + 16 | 0;
 G = S + 12 | 0;
 I = S + 8 | 0;
 J = S + 4 | 0;
 K = S;
 c[g >> 2] = 0;
 U = Af(f) | 0;
 c[L >> 2] = U;
 L = Ok(L, 9328) | 0;
 mo(U) | 0;
 do switch (j << 24 >> 24 | 0) {
 case 65:
 case 97:
  {
   c[w >> 2] = c[e >> 2];
   c[l >> 2] = c[w >> 2];
   Ci(b, h + 24 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 104:
 case 66:
 case 98:
  {
   c[H >> 2] = c[e >> 2];
   c[l >> 2] = c[H >> 2];
   Ei(b, h + 16 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 99:
  {
   U = b + 8 | 0;
   U = wb[c[(c[U >> 2] | 0) + 12 >> 2] & 63](U) | 0;
   c[M >> 2] = c[d >> 2];
   c[N >> 2] = c[e >> 2];
   j = a[U >> 0] | 0;
   e = (j & 1) == 0;
   T = U + 4 | 0;
   U = e ? T : c[U + 8 >> 2] | 0;
   T = U + ((e ? (j & 255) >>> 1 : c[T >> 2] | 0) << 2) | 0;
   c[k >> 2] = c[M >> 2];
   c[l >> 2] = c[N >> 2];
   c[d >> 2] = vi(b, k, l, f, g, h, U, T) | 0;
   T = 26;
   break;
  }
 case 101:
 case 100:
  {
   c[O >> 2] = c[e >> 2];
   c[l >> 2] = c[O >> 2];
   Ii(b, h + 12 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 68:
  {
   c[P >> 2] = c[d >> 2];
   c[Q >> 2] = c[e >> 2];
   c[k >> 2] = c[P >> 2];
   c[l >> 2] = c[Q >> 2];
   c[d >> 2] = vi(b, k, l, f, g, h, 9936, 9968) | 0;
   T = 26;
   break;
  }
 case 70:
  {
   c[R >> 2] = c[d >> 2];
   c[m >> 2] = c[e >> 2];
   c[k >> 2] = c[R >> 2];
   c[l >> 2] = c[m >> 2];
   c[d >> 2] = vi(b, k, l, f, g, h, 9968, 1e4) | 0;
   T = 26;
   break;
  }
 case 72:
  {
   c[n >> 2] = c[e >> 2];
   c[l >> 2] = c[n >> 2];
   Ji(b, h + 8 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 73:
  {
   c[o >> 2] = c[e >> 2];
   c[l >> 2] = c[o >> 2];
   Ki(b, h + 8 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 106:
  {
   c[p >> 2] = c[e >> 2];
   c[l >> 2] = c[p >> 2];
   Li(b, h + 28 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 109:
  {
   c[q >> 2] = c[e >> 2];
   c[l >> 2] = c[q >> 2];
   Mi(b, h + 16 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 77:
  {
   c[r >> 2] = c[e >> 2];
   c[l >> 2] = c[r >> 2];
   Ni(b, h + 4 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 116:
 case 110:
  {
   c[s >> 2] = c[e >> 2];
   c[l >> 2] = c[s >> 2];
   Oi(b, d, l, g, L);
   T = 26;
   break;
  }
 case 112:
  {
   c[t >> 2] = c[e >> 2];
   c[l >> 2] = c[t >> 2];
   Pi(b, h + 8 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 114:
  {
   c[u >> 2] = c[d >> 2];
   c[v >> 2] = c[e >> 2];
   c[k >> 2] = c[u >> 2];
   c[l >> 2] = c[v >> 2];
   c[d >> 2] = vi(b, k, l, f, g, h, 1e4, 10044) | 0;
   T = 26;
   break;
  }
 case 82:
  {
   c[x >> 2] = c[d >> 2];
   c[y >> 2] = c[e >> 2];
   c[k >> 2] = c[x >> 2];
   c[l >> 2] = c[y >> 2];
   c[d >> 2] = vi(b, k, l, f, g, h, 10044, 10064) | 0;
   T = 26;
   break;
  }
 case 83:
  {
   c[z >> 2] = c[e >> 2];
   c[l >> 2] = c[z >> 2];
   Qi(b, h, d, l, g, L);
   T = 26;
   break;
  }
 case 84:
  {
   c[A >> 2] = c[d >> 2];
   c[B >> 2] = c[e >> 2];
   c[k >> 2] = c[A >> 2];
   c[l >> 2] = c[B >> 2];
   c[d >> 2] = vi(b, k, l, f, g, h, 10064, 10096) | 0;
   T = 26;
   break;
  }
 case 119:
  {
   c[C >> 2] = c[e >> 2];
   c[l >> 2] = c[C >> 2];
   Ri(b, h + 24 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 120:
  {
   U = c[(c[b >> 2] | 0) + 20 >> 2] | 0;
   c[D >> 2] = c[d >> 2];
   c[E >> 2] = c[e >> 2];
   c[k >> 2] = c[D >> 2];
   c[l >> 2] = c[E >> 2];
   k = ub[U & 63](b, k, l, f, g, h) | 0;
   break;
  }
 case 88:
  {
   U = b + 8 | 0;
   U = wb[c[(c[U >> 2] | 0) + 24 >> 2] & 63](U) | 0;
   c[F >> 2] = c[d >> 2];
   c[G >> 2] = c[e >> 2];
   j = a[U >> 0] | 0;
   e = (j & 1) == 0;
   T = U + 4 | 0;
   U = e ? T : c[U + 8 >> 2] | 0;
   T = U + ((e ? (j & 255) >>> 1 : c[T >> 2] | 0) << 2) | 0;
   c[k >> 2] = c[F >> 2];
   c[l >> 2] = c[G >> 2];
   c[d >> 2] = vi(b, k, l, f, g, h, U, T) | 0;
   T = 26;
   break;
  }
 case 121:
  {
   c[I >> 2] = c[e >> 2];
   c[l >> 2] = c[I >> 2];
   Gi(b, h + 20 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 89:
  {
   c[J >> 2] = c[e >> 2];
   c[l >> 2] = c[J >> 2];
   Si(b, h + 20 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 37:
  {
   c[K >> 2] = c[e >> 2];
   c[l >> 2] = c[K >> 2];
   Ti(b, d, l, g, L);
   T = 26;
   break;
  }
 default:
  {
   c[g >> 2] = c[g >> 2] | 4;
   T = 26;
  }
 } while (0);
 if ((T | 0) == 26) k = c[d >> 2] | 0;
 i = S;
 return k | 0;
}

function ii(b, d, e, f, g, h, j, k) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 k = k | 0;
 var l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0;
 S = i;
 i = i + 144 | 0;
 l = S + 132 | 0;
 k = S + 116 | 0;
 L = S + 128 | 0;
 w = S + 124 | 0;
 H = S + 120 | 0;
 M = S + 112 | 0;
 N = S + 108 | 0;
 O = S + 104 | 0;
 P = S + 100 | 0;
 Q = S + 96 | 0;
 R = S + 92 | 0;
 m = S + 88 | 0;
 n = S + 84 | 0;
 o = S + 80 | 0;
 p = S + 76 | 0;
 q = S + 72 | 0;
 r = S + 68 | 0;
 s = S + 64 | 0;
 t = S + 60 | 0;
 u = S + 56 | 0;
 v = S + 52 | 0;
 x = S + 48 | 0;
 y = S + 44 | 0;
 z = S + 40 | 0;
 A = S + 36 | 0;
 B = S + 32 | 0;
 C = S + 28 | 0;
 D = S + 24 | 0;
 E = S + 20 | 0;
 F = S + 16 | 0;
 G = S + 12 | 0;
 I = S + 8 | 0;
 J = S + 4 | 0;
 K = S;
 c[g >> 2] = 0;
 U = Af(f) | 0;
 c[L >> 2] = U;
 L = Ok(L, 9336) | 0;
 mo(U) | 0;
 do switch (j << 24 >> 24 | 0) {
 case 65:
 case 97:
  {
   c[w >> 2] = c[e >> 2];
   c[l >> 2] = c[w >> 2];
   di(b, h + 24 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 104:
 case 66:
 case 98:
  {
   c[H >> 2] = c[e >> 2];
   c[l >> 2] = c[H >> 2];
   fi(b, h + 16 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 99:
  {
   T = b + 8 | 0;
   T = wb[c[(c[T >> 2] | 0) + 12 >> 2] & 63](T) | 0;
   c[M >> 2] = c[d >> 2];
   c[N >> 2] = c[e >> 2];
   j = a[T >> 0] | 0;
   e = (j & 1) == 0;
   U = e ? T + 1 | 0 : c[T + 8 >> 2] | 0;
   T = U + (e ? (j & 255) >>> 1 : c[T + 4 >> 2] | 0) | 0;
   c[k >> 2] = c[M >> 2];
   c[l >> 2] = c[N >> 2];
   c[d >> 2] = Yh(b, k, l, f, g, h, U, T) | 0;
   T = 26;
   break;
  }
 case 101:
 case 100:
  {
   c[O >> 2] = c[e >> 2];
   c[l >> 2] = c[O >> 2];
   ji(b, h + 12 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 68:
  {
   c[P >> 2] = c[d >> 2];
   c[Q >> 2] = c[e >> 2];
   c[k >> 2] = c[P >> 2];
   c[l >> 2] = c[Q >> 2];
   c[d >> 2] = Yh(b, k, l, f, g, h, 21395, 21403) | 0;
   T = 26;
   break;
  }
 case 70:
  {
   c[R >> 2] = c[d >> 2];
   c[m >> 2] = c[e >> 2];
   c[k >> 2] = c[R >> 2];
   c[l >> 2] = c[m >> 2];
   c[d >> 2] = Yh(b, k, l, f, g, h, 21403, 21411) | 0;
   T = 26;
   break;
  }
 case 72:
  {
   c[n >> 2] = c[e >> 2];
   c[l >> 2] = c[n >> 2];
   ki(b, h + 8 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 73:
  {
   c[o >> 2] = c[e >> 2];
   c[l >> 2] = c[o >> 2];
   li(b, h + 8 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 106:
  {
   c[p >> 2] = c[e >> 2];
   c[l >> 2] = c[p >> 2];
   mi(b, h + 28 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 109:
  {
   c[q >> 2] = c[e >> 2];
   c[l >> 2] = c[q >> 2];
   ni(b, h + 16 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 77:
  {
   c[r >> 2] = c[e >> 2];
   c[l >> 2] = c[r >> 2];
   oi(b, h + 4 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 116:
 case 110:
  {
   c[s >> 2] = c[e >> 2];
   c[l >> 2] = c[s >> 2];
   pi(b, d, l, g, L);
   T = 26;
   break;
  }
 case 112:
  {
   c[t >> 2] = c[e >> 2];
   c[l >> 2] = c[t >> 2];
   qi(b, h + 8 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 114:
  {
   c[u >> 2] = c[d >> 2];
   c[v >> 2] = c[e >> 2];
   c[k >> 2] = c[u >> 2];
   c[l >> 2] = c[v >> 2];
   c[d >> 2] = Yh(b, k, l, f, g, h, 21411, 21422) | 0;
   T = 26;
   break;
  }
 case 82:
  {
   c[x >> 2] = c[d >> 2];
   c[y >> 2] = c[e >> 2];
   c[k >> 2] = c[x >> 2];
   c[l >> 2] = c[y >> 2];
   c[d >> 2] = Yh(b, k, l, f, g, h, 21422, 21427) | 0;
   T = 26;
   break;
  }
 case 83:
  {
   c[z >> 2] = c[e >> 2];
   c[l >> 2] = c[z >> 2];
   ri(b, h, d, l, g, L);
   T = 26;
   break;
  }
 case 84:
  {
   c[A >> 2] = c[d >> 2];
   c[B >> 2] = c[e >> 2];
   c[k >> 2] = c[A >> 2];
   c[l >> 2] = c[B >> 2];
   c[d >> 2] = Yh(b, k, l, f, g, h, 21427, 21435) | 0;
   T = 26;
   break;
  }
 case 119:
  {
   c[C >> 2] = c[e >> 2];
   c[l >> 2] = c[C >> 2];
   si(b, h + 24 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 120:
  {
   U = c[(c[b >> 2] | 0) + 20 >> 2] | 0;
   c[D >> 2] = c[d >> 2];
   c[E >> 2] = c[e >> 2];
   c[k >> 2] = c[D >> 2];
   c[l >> 2] = c[E >> 2];
   k = ub[U & 63](b, k, l, f, g, h) | 0;
   break;
  }
 case 88:
  {
   T = b + 8 | 0;
   T = wb[c[(c[T >> 2] | 0) + 24 >> 2] & 63](T) | 0;
   c[F >> 2] = c[d >> 2];
   c[G >> 2] = c[e >> 2];
   j = a[T >> 0] | 0;
   e = (j & 1) == 0;
   U = e ? T + 1 | 0 : c[T + 8 >> 2] | 0;
   T = U + (e ? (j & 255) >>> 1 : c[T + 4 >> 2] | 0) | 0;
   c[k >> 2] = c[F >> 2];
   c[l >> 2] = c[G >> 2];
   c[d >> 2] = Yh(b, k, l, f, g, h, U, T) | 0;
   T = 26;
   break;
  }
 case 121:
  {
   c[I >> 2] = c[e >> 2];
   c[l >> 2] = c[I >> 2];
   hi(b, h + 20 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 89:
  {
   c[J >> 2] = c[e >> 2];
   c[l >> 2] = c[J >> 2];
   ti(b, h + 20 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 37:
  {
   c[K >> 2] = c[e >> 2];
   c[l >> 2] = c[K >> 2];
   ui(b, d, l, g, L);
   T = 26;
   break;
  }
 default:
  {
   c[g >> 2] = c[g >> 2] | 4;
   T = 26;
  }
 } while (0);
 if ((T | 0) == 26) k = c[d >> 2] | 0;
 i = S;
 return k | 0;
}

function Yh(e, f, g, h, j, k, l, m) {
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 k = k | 0;
 l = l | 0;
 m = m | 0;
 var n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0;
 B = i;
 i = i + 32 | 0;
 u = B + 16 | 0;
 t = B + 12 | 0;
 x = B + 8 | 0;
 v = B + 4 | 0;
 w = B;
 y = Af(h) | 0;
 c[x >> 2] = y;
 x = Ok(x, 9336) | 0;
 mo(y) | 0;
 c[j >> 2] = 0;
 y = x + 8 | 0;
 n = c[f >> 2] | 0;
 a : do if ((l | 0) != (m | 0)) {
  b : while (1) {
   o = n;
   if (n) {
    if ((c[n + 12 >> 2] | 0) == (c[n + 16 >> 2] | 0) ? (wb[c[(c[n >> 2] | 0) + 36 >> 2] & 63](n) | 0) == -1 : 0) {
     c[f >> 2] = 0;
     n = 0;
     o = 0;
    }
   } else n = 0;
   r = (n | 0) == 0;
   q = c[g >> 2] | 0;
   p = q;
   do if (q) {
    if ((c[q + 12 >> 2] | 0) == (c[q + 16 >> 2] | 0) ? (wb[c[(c[q >> 2] | 0) + 36 >> 2] & 63](q) | 0) == -1 : 0) {
     c[g >> 2] = 0;
     p = 0;
     A = 11;
     break;
    }
    if (!r) {
     A = 12;
     break b;
    }
   } else A = 11; while (0);
   if ((A | 0) == 11) {
    A = 0;
    if (r) {
     A = 12;
     break;
    } else q = 0;
   }
   c : do if ((pb[c[(c[x >> 2] | 0) + 36 >> 2] & 31](x, a[l >> 0] | 0, 0) | 0) << 24 >> 24 == 37) {
    q = l + 1 | 0;
    if ((q | 0) == (m | 0)) {
     A = 15;
     break b;
    }
    s = pb[c[(c[x >> 2] | 0) + 36 >> 2] & 31](x, a[q >> 0] | 0, 0) | 0;
    switch (s << 24 >> 24) {
    case 48:
    case 69:
     {
      r = l + 2 | 0;
      if ((r | 0) == (m | 0)) {
       A = 18;
       break b;
      }
      l = q;
      q = pb[c[(c[x >> 2] | 0) + 36 >> 2] & 31](x, a[r >> 0] | 0, 0) | 0;
      n = s;
      break;
     }
    default:
     {
      q = s;
      n = 0;
     }
    }
    s = c[(c[e >> 2] | 0) + 36 >> 2] | 0;
    c[v >> 2] = o;
    c[w >> 2] = p;
    c[t >> 2] = c[v >> 2];
    c[u >> 2] = c[w >> 2];
    c[f >> 2] = zb[s & 15](e, t, u, h, j, k, q, n) | 0;
    l = l + 2 | 0;
   } else {
    o = a[l >> 0] | 0;
    if (o << 24 >> 24 > -1 ? (z = c[y >> 2] | 0, (b[z + (o << 24 >> 24 << 1) >> 1] & 8192) != 0) : 0) {
     do {
      l = l + 1 | 0;
      if ((l | 0) == (m | 0)) {
       l = m;
       break;
      }
      o = a[l >> 0] | 0;
      if (o << 24 >> 24 <= -1) break;
     } while ((b[z + (o << 24 >> 24 << 1) >> 1] & 8192) != 0);
     o = q;
     while (1) {
      if (n) {
       if ((c[n + 12 >> 2] | 0) == (c[n + 16 >> 2] | 0) ? (wb[c[(c[n >> 2] | 0) + 36 >> 2] & 63](n) | 0) == -1 : 0) {
        c[f >> 2] = 0;
        n = 0;
       }
      } else n = 0;
      p = (n | 0) == 0;
      do if (q) {
       if ((c[q + 12 >> 2] | 0) != (c[q + 16 >> 2] | 0)) if (p) {
        s = o;
        break;
       } else break c;
       if ((wb[c[(c[q >> 2] | 0) + 36 >> 2] & 63](q) | 0) != -1) if (p ^ (o | 0) == 0) {
        s = o;
        q = o;
        break;
       } else break c; else {
        c[g >> 2] = 0;
        o = 0;
        A = 37;
        break;
       }
      } else A = 37; while (0);
      if ((A | 0) == 37) {
       A = 0;
       if (p) break c; else {
        s = o;
        q = 0;
       }
      }
      p = n + 12 | 0;
      o = c[p >> 2] | 0;
      r = n + 16 | 0;
      if ((o | 0) == (c[r >> 2] | 0)) o = wb[c[(c[n >> 2] | 0) + 36 >> 2] & 63](n) | 0; else o = d[o >> 0] | 0;
      if ((o & 255) << 24 >> 24 <= -1) break c;
      if (!(b[(c[y >> 2] | 0) + (o << 24 >> 24 << 1) >> 1] & 8192)) break c;
      o = c[p >> 2] | 0;
      if ((o | 0) == (c[r >> 2] | 0)) {
       wb[c[(c[n >> 2] | 0) + 40 >> 2] & 63](n) | 0;
       o = s;
       continue;
      } else {
       c[p >> 2] = o + 1;
       o = s;
       continue;
      }
     }
    }
    p = n + 12 | 0;
    o = c[p >> 2] | 0;
    q = n + 16 | 0;
    if ((o | 0) == (c[q >> 2] | 0)) o = wb[c[(c[n >> 2] | 0) + 36 >> 2] & 63](n) | 0; else o = d[o >> 0] | 0;
    s = Cb[c[(c[x >> 2] | 0) + 12 >> 2] & 15](x, o & 255) | 0;
    if (s << 24 >> 24 != (Cb[c[(c[x >> 2] | 0) + 12 >> 2] & 15](x, a[l >> 0] | 0) | 0) << 24 >> 24) {
     A = 55;
     break b;
    }
    o = c[p >> 2] | 0;
    if ((o | 0) == (c[q >> 2] | 0)) wb[c[(c[n >> 2] | 0) + 40 >> 2] & 63](n) | 0; else c[p >> 2] = o + 1;
    l = l + 1 | 0;
   } while (0);
   n = c[f >> 2] | 0;
   if (!((l | 0) != (m | 0) & (c[j >> 2] | 0) == 0)) break a;
  }
  if ((A | 0) == 12) {
   c[j >> 2] = 4;
   break;
  } else if ((A | 0) == 15) {
   c[j >> 2] = 4;
   break;
  } else if ((A | 0) == 18) {
   c[j >> 2] = 4;
   break;
  } else if ((A | 0) == 55) {
   c[j >> 2] = 4;
   n = c[f >> 2] | 0;
   break;
  }
 } while (0);
 if (n) {
  if ((c[n + 12 >> 2] | 0) == (c[n + 16 >> 2] | 0) ? (wb[c[(c[n >> 2] | 0) + 36 >> 2] & 63](n) | 0) == -1 : 0) {
   c[f >> 2] = 0;
   n = 0;
  }
 } else n = 0;
 l = (n | 0) == 0;
 o = c[g >> 2] | 0;
 do if (o) {
  if ((c[o + 12 >> 2] | 0) == (c[o + 16 >> 2] | 0) ? (wb[c[(c[o >> 2] | 0) + 36 >> 2] & 63](o) | 0) == -1 : 0) {
   c[g >> 2] = 0;
   A = 65;
   break;
  }
  if (!l) A = 66;
 } else A = 65; while (0);
 if ((A | 0) == 65 ? l : 0) A = 66;
 if ((A | 0) == 66) c[j >> 2] = c[j >> 2] | 2;
 i = B;
 return n | 0;
}

function kk(d, e, f, g, h, i, j, k, l, m, n, o, p, q, r) {
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 j = j | 0;
 k = k | 0;
 l = l | 0;
 m = m | 0;
 n = n | 0;
 o = o | 0;
 p = p | 0;
 q = q | 0;
 r = r | 0;
 var s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0;
 c[f >> 2] = d;
 N = q + 4 | 0;
 O = q + 8 | 0;
 P = q + 1 | 0;
 H = p + 4 | 0;
 I = (g & 512 | 0) == 0;
 J = p + 8 | 0;
 K = p + 1 | 0;
 L = j + 8 | 0;
 M = (r | 0) > 0;
 A = o + 4 | 0;
 B = o + 8 | 0;
 C = o + 1 | 0;
 D = r + 1 | 0;
 F = -2 - r - ((r | 0) < 0 ? ~r : -1) | 0;
 G = (r | 0) > 0;
 z = 0;
 do {
  switch (a[l + z >> 0] | 0) {
  case 0:
   {
    c[e >> 2] = c[f >> 2];
    break;
   }
  case 1:
   {
    c[e >> 2] = c[f >> 2];
    x = Cb[c[(c[j >> 2] | 0) + 28 >> 2] & 15](j, 32) | 0;
    y = c[f >> 2] | 0;
    c[f >> 2] = y + 1;
    a[y >> 0] = x;
    break;
   }
  case 3:
   {
    y = a[q >> 0] | 0;
    s = (y & 1) == 0;
    if ((s ? (y & 255) >>> 1 : c[N >> 2] | 0) | 0) {
     x = a[(s ? P : c[O >> 2] | 0) >> 0] | 0;
     y = c[f >> 2] | 0;
     c[f >> 2] = y + 1;
     a[y >> 0] = x;
    }
    break;
   }
  case 2:
   {
    u = a[p >> 0] | 0;
    s = (u & 1) == 0;
    u = s ? (u & 255) >>> 1 : c[H >> 2] | 0;
    if (!(I | (u | 0) == 0)) {
     t = s ? K : c[J >> 2] | 0;
     v = t + u | 0;
     s = c[f >> 2] | 0;
     if (u) do {
      a[s >> 0] = a[t >> 0] | 0;
      t = t + 1 | 0;
      s = s + 1 | 0;
     } while ((t | 0) != (v | 0));
     c[f >> 2] = s;
    }
    break;
   }
  case 4:
   {
    s = c[f >> 2] | 0;
    h = k ? h + 1 | 0 : h;
    w = h;
    v = c[L >> 2] | 0;
    a : do if (h >>> 0 < i >>> 0) {
     t = h;
     do {
      u = a[t >> 0] | 0;
      if (u << 24 >> 24 <= -1) break a;
      if (!(b[v + (u << 24 >> 24 << 1) >> 1] & 2048)) break a;
      t = t + 1 | 0;
     } while (t >>> 0 < i >>> 0);
    } else t = h; while (0);
    u = t;
    if (M) {
     x = -2 - u - ~(u >>> 0 > w >>> 0 ? w : u) | 0;
     x = F >>> 0 > x >>> 0 ? F : x;
     if (t >>> 0 > h >>> 0 & G) {
      u = t;
      w = r;
      while (1) {
       u = u + -1 | 0;
       y = a[u >> 0] | 0;
       v = c[f >> 2] | 0;
       c[f >> 2] = v + 1;
       a[v >> 0] = y;
       v = (w | 0) > 1;
       if (!(u >>> 0 > h >>> 0 & v)) break; else w = w + -1 | 0;
      }
     } else v = G;
     y = D + x | 0;
     u = t + (x + 1) | 0;
     if (v) w = Cb[c[(c[j >> 2] | 0) + 28 >> 2] & 15](j, 48) | 0; else w = 0;
     t = c[f >> 2] | 0;
     c[f >> 2] = t + 1;
     if ((y | 0) > 0) {
      v = y;
      while (1) {
       a[t >> 0] = w;
       t = c[f >> 2] | 0;
       c[f >> 2] = t + 1;
       if ((v | 0) > 1) v = v + -1 | 0; else break;
      }
     }
     a[t >> 0] = m;
    } else u = t;
    if ((u | 0) != (h | 0)) {
     y = a[o >> 0] | 0;
     t = (y & 1) == 0;
     if (!((t ? (y & 255) >>> 1 : c[A >> 2] | 0) | 0)) t = -1; else t = a[(t ? C : c[B >> 2] | 0) >> 0] | 0;
     if ((u | 0) != (h | 0)) {
      v = 0;
      w = 0;
      while (1) {
       if ((w | 0) == (t | 0)) {
        y = c[f >> 2] | 0;
        c[f >> 2] = y + 1;
        a[y >> 0] = n;
        v = v + 1 | 0;
        y = a[o >> 0] | 0;
        t = (y & 1) == 0;
        if (v >>> 0 < (t ? (y & 255) >>> 1 : c[A >> 2] | 0) >>> 0) {
         t = a[(t ? C : c[B >> 2] | 0) + v >> 0] | 0;
         t = t << 24 >> 24 == 127 ? -1 : t << 24 >> 24;
         w = 0;
        } else {
         t = w;
         w = 0;
        }
       }
       u = u + -1 | 0;
       x = a[u >> 0] | 0;
       y = c[f >> 2] | 0;
       c[f >> 2] = y + 1;
       a[y >> 0] = x;
       if ((u | 0) == (h | 0)) break; else w = w + 1 | 0;
      }
     }
    } else {
     x = Cb[c[(c[j >> 2] | 0) + 28 >> 2] & 15](j, 48) | 0;
     y = c[f >> 2] | 0;
     c[f >> 2] = y + 1;
     a[y >> 0] = x;
    }
    t = c[f >> 2] | 0;
    if ((s | 0) != (t | 0) ? (E = t + -1 | 0, s >>> 0 < E >>> 0) : 0) {
     t = E;
     do {
      y = a[s >> 0] | 0;
      a[s >> 0] = a[t >> 0] | 0;
      a[t >> 0] = y;
      s = s + 1 | 0;
      t = t + -1 | 0;
     } while (s >>> 0 < t >>> 0);
    }
    break;
   }
  default:
   {}
  }
  z = z + 1 | 0;
 } while ((z | 0) != 4);
 t = a[q >> 0] | 0;
 h = (t & 1) == 0;
 t = h ? (t & 255) >>> 1 : c[N >> 2] | 0;
 if (t >>> 0 > 1) {
  s = h ? P : c[O >> 2] | 0;
  u = s + t | 0;
  h = c[f >> 2] | 0;
  if ((t | 0) != 1) {
   s = s + 1 | 0;
   do {
    a[h >> 0] = a[s >> 0] | 0;
    h = h + 1 | 0;
    s = s + 1 | 0;
   } while ((s | 0) != (u | 0));
  }
  c[f >> 2] = h;
 }
 switch (g & 176 | 0) {
 case 32:
  {
   c[e >> 2] = c[f >> 2];
   break;
  }
 case 16:
  break;
 default:
  c[e >> 2] = d;
 }
 return;
}

function qk(b, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 j = j | 0;
 k = k | 0;
 l = l | 0;
 m = m | 0;
 n = n | 0;
 o = o | 0;
 p = p | 0;
 q = q | 0;
 var r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0;
 c[e >> 2] = b;
 J = p + 4 | 0;
 K = p + 8 | 0;
 C = o + 4 | 0;
 D = (f & 512 | 0) == 0;
 E = o + 8 | 0;
 F = (q | 0) > 0;
 G = n + 4 | 0;
 H = n + 8 | 0;
 I = n + 1 | 0;
 A = (q | 0) > 0;
 z = 0;
 do {
  switch (a[k + z >> 0] | 0) {
  case 0:
   {
    c[d >> 2] = c[e >> 2];
    break;
   }
  case 1:
   {
    c[d >> 2] = c[e >> 2];
    x = Cb[c[(c[i >> 2] | 0) + 44 >> 2] & 15](i, 32) | 0;
    y = c[e >> 2] | 0;
    c[e >> 2] = y + 4;
    c[y >> 2] = x;
    break;
   }
  case 3:
   {
    y = a[p >> 0] | 0;
    r = (y & 1) == 0;
    if ((r ? (y & 255) >>> 1 : c[J >> 2] | 0) | 0) {
     x = c[(r ? J : c[K >> 2] | 0) >> 2] | 0;
     y = c[e >> 2] | 0;
     c[e >> 2] = y + 4;
     c[y >> 2] = x;
    }
    break;
   }
  case 2:
   {
    v = a[o >> 0] | 0;
    r = (v & 1) == 0;
    v = r ? (v & 255) >>> 1 : c[C >> 2] | 0;
    if (!(D | (v | 0) == 0)) {
     r = r ? C : c[E >> 2] | 0;
     t = r + (v << 2) | 0;
     u = c[e >> 2] | 0;
     if (v) {
      s = u;
      while (1) {
       c[s >> 2] = c[r >> 2];
       r = r + 4 | 0;
       if ((r | 0) == (t | 0)) break; else s = s + 4 | 0;
      }
     }
     c[e >> 2] = u + (v << 2);
    }
    break;
   }
  case 4:
   {
    r = c[e >> 2] | 0;
    g = j ? g + 4 | 0 : g;
    a : do if (g >>> 0 < h >>> 0) {
     s = g;
     do {
      if (!(pb[c[(c[i >> 2] | 0) + 12 >> 2] & 31](i, 2048, c[s >> 2] | 0) | 0)) break a;
      s = s + 4 | 0;
     } while (s >>> 0 < h >>> 0);
    } else s = g; while (0);
    if (F) {
     if (s >>> 0 > g >>> 0 & A) {
      v = c[e >> 2] | 0;
      u = q;
      while (1) {
       s = s + -4 | 0;
       t = v + 4 | 0;
       c[v >> 2] = c[s >> 2];
       w = u + -1 | 0;
       u = (u | 0) > 1;
       if (s >>> 0 > g >>> 0 & u) {
        v = t;
        u = w;
       } else {
        v = w;
        break;
       }
      }
      c[e >> 2] = t;
      t = v;
     } else {
      u = A;
      t = q;
     }
     if (u) w = Cb[c[(c[i >> 2] | 0) + 44 >> 2] & 15](i, 48) | 0; else w = 0;
     x = c[e >> 2] | 0;
     u = t + ((t | 0) < 0 ? ~t : -1) | 0;
     if ((t | 0) > 0) {
      v = x;
      while (1) {
       c[v >> 2] = w;
       if ((t | 0) > 1) {
        v = v + 4 | 0;
        t = t + -1 | 0;
       } else break;
      }
     }
     c[e >> 2] = x + (u + 2 << 2);
     c[x + (u + 1 << 2) >> 2] = l;
    }
    if ((s | 0) == (g | 0)) {
     x = Cb[c[(c[i >> 2] | 0) + 44 >> 2] & 15](i, 48) | 0;
     y = c[e >> 2] | 0;
     s = y + 4 | 0;
     c[e >> 2] = s;
     c[y >> 2] = x;
    } else {
     x = a[n >> 0] | 0;
     t = (x & 1) == 0;
     y = c[G >> 2] | 0;
     if (!((t ? (x & 255) >>> 1 : y) | 0)) t = -1; else t = a[(t ? I : c[H >> 2] | 0) >> 0] | 0;
     if ((s | 0) != (g | 0)) {
      w = 0;
      x = 0;
      while (1) {
       u = c[e >> 2] | 0;
       if ((x | 0) == (t | 0)) {
        v = u + 4 | 0;
        c[e >> 2] = v;
        c[u >> 2] = m;
        w = w + 1 | 0;
        u = a[n >> 0] | 0;
        t = (u & 1) == 0;
        if (w >>> 0 < (t ? (u & 255) >>> 1 : y) >>> 0) {
         t = a[(t ? I : c[H >> 2] | 0) + w >> 0] | 0;
         u = v;
         t = t << 24 >> 24 == 127 ? -1 : t << 24 >> 24;
         v = 0;
        } else {
         u = v;
         t = x;
         v = 0;
        }
       } else v = x;
       s = s + -4 | 0;
       x = c[s >> 2] | 0;
       c[e >> 2] = u + 4;
       c[u >> 2] = x;
       if ((s | 0) == (g | 0)) break; else x = v + 1 | 0;
      }
     }
     s = c[e >> 2] | 0;
    }
    if ((r | 0) != (s | 0) ? (B = s + -4 | 0, r >>> 0 < B >>> 0) : 0) {
     s = B;
     do {
      y = c[r >> 2] | 0;
      c[r >> 2] = c[s >> 2];
      c[s >> 2] = y;
      r = r + 4 | 0;
      s = s + -4 | 0;
     } while (r >>> 0 < s >>> 0);
    }
    break;
   }
  default:
   {}
  }
  z = z + 1 | 0;
 } while ((z | 0) != 4);
 r = a[p >> 0] | 0;
 g = (r & 1) == 0;
 r = g ? (r & 255) >>> 1 : c[J >> 2] | 0;
 if (r >>> 0 > 1) {
  s = g ? J : c[K >> 2] | 0;
  g = s + 4 | 0;
  s = s + (r << 2) | 0;
  t = c[e >> 2] | 0;
  u = s - g | 0;
  if ((r | 0) != 1) {
   r = t;
   while (1) {
    c[r >> 2] = c[g >> 2];
    g = g + 4 | 0;
    if ((g | 0) == (s | 0)) break; else r = r + 4 | 0;
   }
  }
  c[e >> 2] = t + (u >>> 2 << 2);
 }
 switch (f & 176 | 0) {
 case 32:
  {
   c[d >> 2] = c[e >> 2];
   break;
  }
 case 16:
  break;
 default:
  c[d >> 2] = b;
 }
 return;
}
function jk(b, d, e, f, g, h, j, k, l, m) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 k = k | 0;
 l = l | 0;
 m = m | 0;
 var n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0;
 z = i;
 i = i + 112 | 0;
 n = z + 108 | 0;
 o = z + 96 | 0;
 p = z + 92 | 0;
 q = z + 80 | 0;
 x = z + 68 | 0;
 y = z + 56 | 0;
 r = z + 52 | 0;
 s = z + 40 | 0;
 t = z + 36 | 0;
 u = z + 24 | 0;
 v = z + 12 | 0;
 w = z;
 if (b) {
  e = Ok(e, 8944) | 0;
  b = c[e >> 2] | 0;
  if (d) {
   tb[c[b + 44 >> 2] & 63](n, e);
   d = c[n >> 2] | 0;
   a[f >> 0] = d;
   a[f + 1 >> 0] = d >> 8;
   a[f + 2 >> 0] = d >> 16;
   a[f + 3 >> 0] = d >> 24;
   tb[c[(c[e >> 2] | 0) + 32 >> 2] & 63](o, e);
   if (!(a[l >> 0] & 1)) {
    a[l + 1 >> 0] = 0;
    a[l >> 0] = 0;
   } else {
    a[c[l + 8 >> 2] >> 0] = 0;
    c[l + 4 >> 2] = 0;
   }
   gf(l, 0);
   c[l >> 2] = c[o >> 2];
   c[l + 4 >> 2] = c[o + 4 >> 2];
   c[l + 8 >> 2] = c[o + 8 >> 2];
   c[o >> 2] = 0;
   c[o + 4 >> 2] = 0;
   c[o + 8 >> 2] = 0;
   bf(o);
   b = e;
  } else {
   tb[c[b + 40 >> 2] & 63](p, e);
   d = c[p >> 2] | 0;
   a[f >> 0] = d;
   a[f + 1 >> 0] = d >> 8;
   a[f + 2 >> 0] = d >> 16;
   a[f + 3 >> 0] = d >> 24;
   tb[c[(c[e >> 2] | 0) + 28 >> 2] & 63](q, e);
   if (!(a[l >> 0] & 1)) {
    a[l + 1 >> 0] = 0;
    a[l >> 0] = 0;
   } else {
    a[c[l + 8 >> 2] >> 0] = 0;
    c[l + 4 >> 2] = 0;
   }
   gf(l, 0);
   c[l >> 2] = c[q >> 2];
   c[l + 4 >> 2] = c[q + 4 >> 2];
   c[l + 8 >> 2] = c[q + 8 >> 2];
   c[q >> 2] = 0;
   c[q + 4 >> 2] = 0;
   c[q + 8 >> 2] = 0;
   bf(q);
   b = e;
  }
  a[g >> 0] = wb[c[(c[e >> 2] | 0) + 12 >> 2] & 63](e) | 0;
  a[h >> 0] = wb[c[(c[e >> 2] | 0) + 16 >> 2] & 63](e) | 0;
  tb[c[(c[b >> 2] | 0) + 20 >> 2] & 63](x, e);
  if (!(a[j >> 0] & 1)) {
   a[j + 1 >> 0] = 0;
   a[j >> 0] = 0;
  } else {
   a[c[j + 8 >> 2] >> 0] = 0;
   c[j + 4 >> 2] = 0;
  }
  gf(j, 0);
  c[j >> 2] = c[x >> 2];
  c[j + 4 >> 2] = c[x + 4 >> 2];
  c[j + 8 >> 2] = c[x + 8 >> 2];
  c[x >> 2] = 0;
  c[x + 4 >> 2] = 0;
  c[x + 8 >> 2] = 0;
  bf(x);
  tb[c[(c[b >> 2] | 0) + 24 >> 2] & 63](y, e);
  if (!(a[k >> 0] & 1)) {
   a[k + 1 >> 0] = 0;
   a[k >> 0] = 0;
  } else {
   a[c[k + 8 >> 2] >> 0] = 0;
   c[k + 4 >> 2] = 0;
  }
  gf(k, 0);
  c[k >> 2] = c[y >> 2];
  c[k + 4 >> 2] = c[y + 4 >> 2];
  c[k + 8 >> 2] = c[y + 8 >> 2];
  c[y >> 2] = 0;
  c[y + 4 >> 2] = 0;
  c[y + 8 >> 2] = 0;
  bf(y);
  b = wb[c[(c[e >> 2] | 0) + 36 >> 2] & 63](e) | 0;
 } else {
  e = Ok(e, 8880) | 0;
  b = c[e >> 2] | 0;
  if (d) {
   tb[c[b + 44 >> 2] & 63](r, e);
   d = c[r >> 2] | 0;
   a[f >> 0] = d;
   a[f + 1 >> 0] = d >> 8;
   a[f + 2 >> 0] = d >> 16;
   a[f + 3 >> 0] = d >> 24;
   tb[c[(c[e >> 2] | 0) + 32 >> 2] & 63](s, e);
   if (!(a[l >> 0] & 1)) {
    a[l + 1 >> 0] = 0;
    a[l >> 0] = 0;
   } else {
    a[c[l + 8 >> 2] >> 0] = 0;
    c[l + 4 >> 2] = 0;
   }
   gf(l, 0);
   c[l >> 2] = c[s >> 2];
   c[l + 4 >> 2] = c[s + 4 >> 2];
   c[l + 8 >> 2] = c[s + 8 >> 2];
   c[s >> 2] = 0;
   c[s + 4 >> 2] = 0;
   c[s + 8 >> 2] = 0;
   bf(s);
   b = e;
  } else {
   tb[c[b + 40 >> 2] & 63](t, e);
   d = c[t >> 2] | 0;
   a[f >> 0] = d;
   a[f + 1 >> 0] = d >> 8;
   a[f + 2 >> 0] = d >> 16;
   a[f + 3 >> 0] = d >> 24;
   tb[c[(c[e >> 2] | 0) + 28 >> 2] & 63](u, e);
   if (!(a[l >> 0] & 1)) {
    a[l + 1 >> 0] = 0;
    a[l >> 0] = 0;
   } else {
    a[c[l + 8 >> 2] >> 0] = 0;
    c[l + 4 >> 2] = 0;
   }
   gf(l, 0);
   c[l >> 2] = c[u >> 2];
   c[l + 4 >> 2] = c[u + 4 >> 2];
   c[l + 8 >> 2] = c[u + 8 >> 2];
   c[u >> 2] = 0;
   c[u + 4 >> 2] = 0;
   c[u + 8 >> 2] = 0;
   bf(u);
   b = e;
  }
  a[g >> 0] = wb[c[(c[e >> 2] | 0) + 12 >> 2] & 63](e) | 0;
  a[h >> 0] = wb[c[(c[e >> 2] | 0) + 16 >> 2] & 63](e) | 0;
  tb[c[(c[b >> 2] | 0) + 20 >> 2] & 63](v, e);
  if (!(a[j >> 0] & 1)) {
   a[j + 1 >> 0] = 0;
   a[j >> 0] = 0;
  } else {
   a[c[j + 8 >> 2] >> 0] = 0;
   c[j + 4 >> 2] = 0;
  }
  gf(j, 0);
  c[j >> 2] = c[v >> 2];
  c[j + 4 >> 2] = c[v + 4 >> 2];
  c[j + 8 >> 2] = c[v + 8 >> 2];
  c[v >> 2] = 0;
  c[v + 4 >> 2] = 0;
  c[v + 8 >> 2] = 0;
  bf(v);
  tb[c[(c[b >> 2] | 0) + 24 >> 2] & 63](w, e);
  if (!(a[k >> 0] & 1)) {
   a[k + 1 >> 0] = 0;
   a[k >> 0] = 0;
  } else {
   a[c[k + 8 >> 2] >> 0] = 0;
   c[k + 4 >> 2] = 0;
  }
  gf(k, 0);
  c[k >> 2] = c[w >> 2];
  c[k + 4 >> 2] = c[w + 4 >> 2];
  c[k + 8 >> 2] = c[w + 8 >> 2];
  c[w >> 2] = 0;
  c[w + 4 >> 2] = 0;
  c[w + 8 >> 2] = 0;
  bf(w);
  b = wb[c[(c[e >> 2] | 0) + 36 >> 2] & 63](e) | 0;
 }
 c[m >> 2] = b;
 i = z;
 return;
}

function pk(b, d, e, f, g, h, j, k, l, m) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 k = k | 0;
 l = l | 0;
 m = m | 0;
 var n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0;
 z = i;
 i = i + 112 | 0;
 n = z + 108 | 0;
 o = z + 96 | 0;
 r = z + 92 | 0;
 s = z + 80 | 0;
 t = z + 68 | 0;
 u = z + 56 | 0;
 v = z + 52 | 0;
 w = z + 40 | 0;
 x = z + 36 | 0;
 y = z + 24 | 0;
 p = z + 12 | 0;
 q = z;
 if (b) {
  b = Ok(e, 9072) | 0;
  e = c[b >> 2] | 0;
  if (d) {
   tb[c[e + 44 >> 2] & 63](n, b);
   d = c[n >> 2] | 0;
   a[f >> 0] = d;
   a[f + 1 >> 0] = d >> 8;
   a[f + 2 >> 0] = d >> 16;
   a[f + 3 >> 0] = d >> 24;
   tb[c[(c[b >> 2] | 0) + 32 >> 2] & 63](o, b);
   if (!(a[l >> 0] & 1)) a[l >> 0] = 0; else c[c[l + 8 >> 2] >> 2] = 0;
   c[l + 4 >> 2] = 0;
   qf(l, 0);
   c[l >> 2] = c[o >> 2];
   c[l + 4 >> 2] = c[o + 4 >> 2];
   c[l + 8 >> 2] = c[o + 8 >> 2];
   c[o >> 2] = 0;
   c[o + 4 >> 2] = 0;
   c[o + 8 >> 2] = 0;
   nf(o);
  } else {
   tb[c[e + 40 >> 2] & 63](r, b);
   d = c[r >> 2] | 0;
   a[f >> 0] = d;
   a[f + 1 >> 0] = d >> 8;
   a[f + 2 >> 0] = d >> 16;
   a[f + 3 >> 0] = d >> 24;
   tb[c[(c[b >> 2] | 0) + 28 >> 2] & 63](s, b);
   if (!(a[l >> 0] & 1)) a[l >> 0] = 0; else c[c[l + 8 >> 2] >> 2] = 0;
   c[l + 4 >> 2] = 0;
   qf(l, 0);
   c[l >> 2] = c[s >> 2];
   c[l + 4 >> 2] = c[s + 4 >> 2];
   c[l + 8 >> 2] = c[s + 8 >> 2];
   c[s >> 2] = 0;
   c[s + 4 >> 2] = 0;
   c[s + 8 >> 2] = 0;
   nf(s);
  }
  c[g >> 2] = wb[c[(c[b >> 2] | 0) + 12 >> 2] & 63](b) | 0;
  c[h >> 2] = wb[c[(c[b >> 2] | 0) + 16 >> 2] & 63](b) | 0;
  tb[c[(c[b >> 2] | 0) + 20 >> 2] & 63](t, b);
  if (!(a[j >> 0] & 1)) {
   a[j + 1 >> 0] = 0;
   a[j >> 0] = 0;
  } else {
   a[c[j + 8 >> 2] >> 0] = 0;
   c[j + 4 >> 2] = 0;
  }
  gf(j, 0);
  c[j >> 2] = c[t >> 2];
  c[j + 4 >> 2] = c[t + 4 >> 2];
  c[j + 8 >> 2] = c[t + 8 >> 2];
  c[t >> 2] = 0;
  c[t + 4 >> 2] = 0;
  c[t + 8 >> 2] = 0;
  bf(t);
  tb[c[(c[b >> 2] | 0) + 24 >> 2] & 63](u, b);
  if (!(a[k >> 0] & 1)) a[k >> 0] = 0; else c[c[k + 8 >> 2] >> 2] = 0;
  c[k + 4 >> 2] = 0;
  qf(k, 0);
  c[k >> 2] = c[u >> 2];
  c[k + 4 >> 2] = c[u + 4 >> 2];
  c[k + 8 >> 2] = c[u + 8 >> 2];
  c[u >> 2] = 0;
  c[u + 4 >> 2] = 0;
  c[u + 8 >> 2] = 0;
  nf(u);
  b = wb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0;
 } else {
  b = Ok(e, 9008) | 0;
  e = c[b >> 2] | 0;
  if (d) {
   tb[c[e + 44 >> 2] & 63](v, b);
   d = c[v >> 2] | 0;
   a[f >> 0] = d;
   a[f + 1 >> 0] = d >> 8;
   a[f + 2 >> 0] = d >> 16;
   a[f + 3 >> 0] = d >> 24;
   tb[c[(c[b >> 2] | 0) + 32 >> 2] & 63](w, b);
   if (!(a[l >> 0] & 1)) a[l >> 0] = 0; else c[c[l + 8 >> 2] >> 2] = 0;
   c[l + 4 >> 2] = 0;
   qf(l, 0);
   c[l >> 2] = c[w >> 2];
   c[l + 4 >> 2] = c[w + 4 >> 2];
   c[l + 8 >> 2] = c[w + 8 >> 2];
   c[w >> 2] = 0;
   c[w + 4 >> 2] = 0;
   c[w + 8 >> 2] = 0;
   nf(w);
  } else {
   tb[c[e + 40 >> 2] & 63](x, b);
   d = c[x >> 2] | 0;
   a[f >> 0] = d;
   a[f + 1 >> 0] = d >> 8;
   a[f + 2 >> 0] = d >> 16;
   a[f + 3 >> 0] = d >> 24;
   tb[c[(c[b >> 2] | 0) + 28 >> 2] & 63](y, b);
   if (!(a[l >> 0] & 1)) a[l >> 0] = 0; else c[c[l + 8 >> 2] >> 2] = 0;
   c[l + 4 >> 2] = 0;
   qf(l, 0);
   c[l >> 2] = c[y >> 2];
   c[l + 4 >> 2] = c[y + 4 >> 2];
   c[l + 8 >> 2] = c[y + 8 >> 2];
   c[y >> 2] = 0;
   c[y + 4 >> 2] = 0;
   c[y + 8 >> 2] = 0;
   nf(y);
  }
  c[g >> 2] = wb[c[(c[b >> 2] | 0) + 12 >> 2] & 63](b) | 0;
  c[h >> 2] = wb[c[(c[b >> 2] | 0) + 16 >> 2] & 63](b) | 0;
  tb[c[(c[b >> 2] | 0) + 20 >> 2] & 63](p, b);
  if (!(a[j >> 0] & 1)) {
   a[j + 1 >> 0] = 0;
   a[j >> 0] = 0;
  } else {
   a[c[j + 8 >> 2] >> 0] = 0;
   c[j + 4 >> 2] = 0;
  }
  gf(j, 0);
  c[j >> 2] = c[p >> 2];
  c[j + 4 >> 2] = c[p + 4 >> 2];
  c[j + 8 >> 2] = c[p + 8 >> 2];
  c[p >> 2] = 0;
  c[p + 4 >> 2] = 0;
  c[p + 8 >> 2] = 0;
  bf(p);
  tb[c[(c[b >> 2] | 0) + 24 >> 2] & 63](q, b);
  if (!(a[k >> 0] & 1)) a[k >> 0] = 0; else c[c[k + 8 >> 2] >> 2] = 0;
  c[k + 4 >> 2] = 0;
  qf(k, 0);
  c[k >> 2] = c[q >> 2];
  c[k + 4 >> 2] = c[q + 4 >> 2];
  c[k + 8 >> 2] = c[q + 8 >> 2];
  c[q >> 2] = 0;
  c[q + 4 >> 2] = 0;
  c[q + 8 >> 2] = 0;
  nf(q);
  b = wb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0;
 }
 c[m >> 2] = b;
 i = z;
 return;
}

function Lm(b, d, e, f, g, h, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0;
 y = i;
 i = i + 112 | 0;
 l = y;
 m = (f - e | 0) / 12 | 0;
 if (m >>> 0 > 100) {
  l = qe(m) | 0;
  if (!l) Ec(); else {
   w = l;
   k = l;
  }
 } else {
  w = 0;
  k = l;
 }
 if ((e | 0) == (f | 0)) l = 0; else {
  p = e;
  n = 0;
  o = k;
  while (1) {
   l = a[p >> 0] | 0;
   if (!(l & 1)) l = (l & 255) >>> 1; else l = c[p + 4 >> 2] | 0;
   if (!l) {
    a[o >> 0] = 2;
    l = n + 1 | 0;
    m = m + -1 | 0;
   } else {
    a[o >> 0] = 1;
    l = n;
   }
   p = p + 12 | 0;
   if ((p | 0) == (f | 0)) break; else {
    n = l;
    o = o + 1 | 0;
   }
  }
 }
 u = (e | 0) == (f | 0);
 v = (e | 0) == (f | 0);
 t = 0;
 q = m;
 a : while (1) {
  m = c[b >> 2] | 0;
  do if (m) {
   n = c[m + 12 >> 2] | 0;
   if ((n | 0) == (c[m + 16 >> 2] | 0)) m = wb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0; else m = c[n >> 2] | 0;
   if ((m | 0) == -1) {
    c[b >> 2] = 0;
    p = 1;
    break;
   } else {
    p = (c[b >> 2] | 0) == 0;
    break;
   }
  } else p = 1; while (0);
  n = c[d >> 2] | 0;
  if (n) {
   m = c[n + 12 >> 2] | 0;
   if ((m | 0) == (c[n + 16 >> 2] | 0)) m = wb[c[(c[n >> 2] | 0) + 36 >> 2] & 63](n) | 0; else m = c[m >> 2] | 0;
   if ((m | 0) == -1) {
    c[d >> 2] = 0;
    n = 0;
    o = 1;
   } else o = 0;
  } else {
   n = 0;
   o = 1;
  }
  m = c[b >> 2] | 0;
  if (!((q | 0) != 0 & (p ^ o))) break;
  n = c[m + 12 >> 2] | 0;
  if ((n | 0) == (c[m + 16 >> 2] | 0)) m = wb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0; else m = c[n >> 2] | 0;
  if (!j) m = Cb[c[(c[g >> 2] | 0) + 28 >> 2] & 15](g, m) | 0;
  s = t + 1 | 0;
  if (u) {
   m = 0;
   p = q;
  } else {
   p = 0;
   r = e;
   o = q;
   q = k;
   while (1) {
    do if ((a[q >> 0] | 0) == 1) {
     if (!(a[r >> 0] & 1)) n = r + 4 | 0; else n = c[r + 8 >> 2] | 0;
     n = c[n + (t << 2) >> 2] | 0;
     if (!j) n = Cb[c[(c[g >> 2] | 0) + 28 >> 2] & 15](g, n) | 0;
     if ((m | 0) != (n | 0)) {
      a[q >> 0] = 0;
      n = p;
      o = o + -1 | 0;
      break;
     }
     n = a[r >> 0] | 0;
     if (!(n & 1)) n = (n & 255) >>> 1; else n = c[r + 4 >> 2] | 0;
     if ((n | 0) == (s | 0)) {
      a[q >> 0] = 2;
      n = 1;
      l = l + 1 | 0;
      o = o + -1 | 0;
     } else n = 1;
    } else n = p; while (0);
    r = r + 12 | 0;
    if ((r | 0) == (f | 0)) {
     m = n;
     p = o;
     break;
    } else {
     p = n;
     q = q + 1 | 0;
    }
   }
  }
  if (!m) {
   t = s;
   q = p;
   continue;
  }
  m = c[b >> 2] | 0;
  n = m + 12 | 0;
  o = c[n >> 2] | 0;
  if ((o | 0) == (c[m + 16 >> 2] | 0)) wb[c[(c[m >> 2] | 0) + 40 >> 2] & 63](m) | 0; else c[n >> 2] = o + 4;
  if ((l + p | 0) >>> 0 < 2 | v) {
   t = s;
   q = p;
   continue;
  } else {
   m = e;
   o = k;
  }
  while (1) {
   if ((a[o >> 0] | 0) == 2) {
    n = a[m >> 0] | 0;
    if (!(n & 1)) n = (n & 255) >>> 1; else n = c[m + 4 >> 2] | 0;
    if ((n | 0) != (s | 0)) {
     a[o >> 0] = 0;
     l = l + -1 | 0;
    }
   }
   m = m + 12 | 0;
   if ((m | 0) == (f | 0)) {
    t = s;
    q = p;
    continue a;
   } else o = o + 1 | 0;
  }
 }
 do if (m) {
  l = c[m + 12 >> 2] | 0;
  if ((l | 0) == (c[m + 16 >> 2] | 0)) l = wb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0; else l = c[l >> 2] | 0;
  if ((l | 0) == -1) {
   c[b >> 2] = 0;
   m = 1;
   break;
  } else {
   m = (c[b >> 2] | 0) == 0;
   break;
  }
 } else m = 1; while (0);
 do if (n) {
  l = c[n + 12 >> 2] | 0;
  if ((l | 0) == (c[n + 16 >> 2] | 0)) l = wb[c[(c[n >> 2] | 0) + 36 >> 2] & 63](n) | 0; else l = c[l >> 2] | 0;
  if ((l | 0) != -1) if (m) break; else {
   x = 74;
   break;
  } else {
   c[d >> 2] = 0;
   x = 72;
   break;
  }
 } else x = 72; while (0);
 if ((x | 0) == 72 ? m : 0) x = 74;
 if ((x | 0) == 74) c[h >> 2] = c[h >> 2] | 2;
 b : do if ((e | 0) == (f | 0)) x = 78; else while (1) {
  if ((a[k >> 0] | 0) == 2) break b;
  e = e + 12 | 0;
  if ((e | 0) == (f | 0)) {
   x = 78;
   break;
  } else k = k + 1 | 0;
 } while (0);
 if ((x | 0) == 78) {
  c[h >> 2] = c[h >> 2] | 4;
  e = f;
 }
 re(w);
 i = y;
 return e | 0;
}

function ue(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 o = a + 4 | 0;
 p = c[o >> 2] | 0;
 j = p & -8;
 l = a + j | 0;
 i = c[1540] | 0;
 d = p & 3;
 if (!((d | 0) != 1 & a >>> 0 >= i >>> 0 & a >>> 0 < l >>> 0)) Aa();
 e = a + (j | 4) | 0;
 f = c[e >> 2] | 0;
 if (!(f & 1)) Aa();
 if (!d) {
  if (b >>> 0 < 256) {
   a = 0;
   return a | 0;
  }
  if (j >>> 0 >= (b + 4 | 0) >>> 0 ? (j - b | 0) >>> 0 <= c[1656] << 1 >>> 0 : 0) return a | 0;
  a = 0;
  return a | 0;
 }
 if (j >>> 0 >= b >>> 0) {
  d = j - b | 0;
  if (d >>> 0 <= 15) return a | 0;
  c[o >> 2] = p & 1 | b | 2;
  c[a + (b + 4) >> 2] = d | 3;
  c[e >> 2] = c[e >> 2] | 1;
  ve(a + b | 0, d);
  return a | 0;
 }
 if ((l | 0) == (c[1542] | 0)) {
  d = (c[1539] | 0) + j | 0;
  if (d >>> 0 <= b >>> 0) {
   a = 0;
   return a | 0;
  }
  n = d - b | 0;
  c[o >> 2] = p & 1 | b | 2;
  c[a + (b + 4) >> 2] = n | 1;
  c[1542] = a + b;
  c[1539] = n;
  return a | 0;
 }
 if ((l | 0) == (c[1541] | 0)) {
  e = (c[1538] | 0) + j | 0;
  if (e >>> 0 < b >>> 0) {
   a = 0;
   return a | 0;
  }
  d = e - b | 0;
  if (d >>> 0 > 15) {
   c[o >> 2] = p & 1 | b | 2;
   c[a + (b + 4) >> 2] = d | 1;
   c[a + e >> 2] = d;
   e = a + (e + 4) | 0;
   c[e >> 2] = c[e >> 2] & -2;
   e = a + b | 0;
  } else {
   c[o >> 2] = p & 1 | e | 2;
   e = a + (e + 4) | 0;
   c[e >> 2] = c[e >> 2] | 1;
   e = 0;
   d = 0;
  }
  c[1538] = d;
  c[1541] = e;
  return a | 0;
 }
 if (f & 2) {
  a = 0;
  return a | 0;
 }
 m = (f & -8) + j | 0;
 if (m >>> 0 < b >>> 0) {
  a = 0;
  return a | 0;
 }
 n = m - b | 0;
 g = f >>> 3;
 do if (f >>> 0 >= 256) {
  h = c[a + (j + 24) >> 2] | 0;
  g = c[a + (j + 12) >> 2] | 0;
  do if ((g | 0) == (l | 0)) {
   e = a + (j + 20) | 0;
   d = c[e >> 2] | 0;
   if (!d) {
    e = a + (j + 16) | 0;
    d = c[e >> 2] | 0;
    if (!d) {
     k = 0;
     break;
    }
   }
   while (1) {
    f = d + 20 | 0;
    g = c[f >> 2] | 0;
    if (g) {
     d = g;
     e = f;
     continue;
    }
    f = d + 16 | 0;
    g = c[f >> 2] | 0;
    if (!g) break; else {
     d = g;
     e = f;
    }
   }
   if (e >>> 0 < i >>> 0) Aa(); else {
    c[e >> 2] = 0;
    k = d;
    break;
   }
  } else {
   f = c[a + (j + 8) >> 2] | 0;
   if (f >>> 0 < i >>> 0) Aa();
   d = f + 12 | 0;
   if ((c[d >> 2] | 0) != (l | 0)) Aa();
   e = g + 8 | 0;
   if ((c[e >> 2] | 0) == (l | 0)) {
    c[d >> 2] = g;
    c[e >> 2] = f;
    k = g;
    break;
   } else Aa();
  } while (0);
  if (h) {
   d = c[a + (j + 28) >> 2] | 0;
   e = 6448 + (d << 2) | 0;
   if ((l | 0) == (c[e >> 2] | 0)) {
    c[e >> 2] = k;
    if (!k) {
     c[1537] = c[1537] & ~(1 << d);
     break;
    }
   } else {
    if (h >>> 0 < (c[1540] | 0) >>> 0) Aa();
    d = h + 16 | 0;
    if ((c[d >> 2] | 0) == (l | 0)) c[d >> 2] = k; else c[h + 20 >> 2] = k;
    if (!k) break;
   }
   e = c[1540] | 0;
   if (k >>> 0 < e >>> 0) Aa();
   c[k + 24 >> 2] = h;
   d = c[a + (j + 16) >> 2] | 0;
   do if (d) if (d >>> 0 < e >>> 0) Aa(); else {
    c[k + 16 >> 2] = d;
    c[d + 24 >> 2] = k;
    break;
   } while (0);
   d = c[a + (j + 20) >> 2] | 0;
   if (d) if (d >>> 0 < (c[1540] | 0) >>> 0) Aa(); else {
    c[k + 20 >> 2] = d;
    c[d + 24 >> 2] = k;
    break;
   }
  }
 } else {
  f = c[a + (j + 8) >> 2] | 0;
  e = c[a + (j + 12) >> 2] | 0;
  d = 6184 + (g << 1 << 2) | 0;
  if ((f | 0) != (d | 0)) {
   if (f >>> 0 < i >>> 0) Aa();
   if ((c[f + 12 >> 2] | 0) != (l | 0)) Aa();
  }
  if ((e | 0) == (f | 0)) {
   c[1536] = c[1536] & ~(1 << g);
   break;
  }
  if ((e | 0) != (d | 0)) {
   if (e >>> 0 < i >>> 0) Aa();
   d = e + 8 | 0;
   if ((c[d >> 2] | 0) == (l | 0)) h = d; else Aa();
  } else h = e + 8 | 0;
  c[f + 12 >> 2] = e;
  c[h >> 2] = f;
 } while (0);
 if (n >>> 0 < 16) {
  c[o >> 2] = m | p & 1 | 2;
  b = a + (m | 4) | 0;
  c[b >> 2] = c[b >> 2] | 1;
  return a | 0;
 } else {
  c[o >> 2] = p & 1 | b | 2;
  c[a + (b + 4) >> 2] = n | 3;
  p = a + (m | 4) | 0;
  c[p >> 2] = c[p >> 2] | 1;
  ve(a + b | 0, n);
  return a | 0;
 }
 return 0;
}

function Am(b, e, f, g, h, j, k) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 k = k | 0;
 var l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0;
 A = i;
 i = i + 112 | 0;
 m = A;
 n = (g - f | 0) / 12 | 0;
 if (n >>> 0 > 100) {
  m = qe(n) | 0;
  if (!m) Ec(); else {
   y = m;
   l = m;
  }
 } else {
  y = 0;
  l = m;
 }
 if ((f | 0) == (g | 0)) m = 0; else {
  q = f;
  o = 0;
  p = l;
  while (1) {
   m = a[q >> 0] | 0;
   if (!(m & 1)) m = (m & 255) >>> 1; else m = c[q + 4 >> 2] | 0;
   if (!m) {
    a[p >> 0] = 2;
    m = o + 1 | 0;
    n = n + -1 | 0;
   } else {
    a[p >> 0] = 1;
    m = o;
   }
   q = q + 12 | 0;
   if ((q | 0) == (g | 0)) break; else {
    o = m;
    p = p + 1 | 0;
   }
  }
 }
 w = (f | 0) == (g | 0);
 x = (f | 0) == (g | 0);
 v = 0;
 r = m;
 t = n;
 a : while (1) {
  m = c[b >> 2] | 0;
  do if (m) {
   if ((c[m + 12 >> 2] | 0) == (c[m + 16 >> 2] | 0)) if ((wb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0) == -1) {
    c[b >> 2] = 0;
    m = 0;
    break;
   } else {
    m = c[b >> 2] | 0;
    break;
   }
  } else m = 0; while (0);
  p = (m | 0) == 0;
  n = c[e >> 2] | 0;
  if (n) {
   if ((c[n + 12 >> 2] | 0) == (c[n + 16 >> 2] | 0) ? (wb[c[(c[n >> 2] | 0) + 36 >> 2] & 63](n) | 0) == -1 : 0) {
    c[e >> 2] = 0;
    n = 0;
   }
  } else n = 0;
  o = (n | 0) == 0;
  m = c[b >> 2] | 0;
  if (!((t | 0) != 0 & (p ^ o))) break;
  n = c[m + 12 >> 2] | 0;
  if ((n | 0) == (c[m + 16 >> 2] | 0)) m = wb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0; else m = d[n >> 0] | 0;
  m = m & 255;
  if (!k) m = Cb[c[(c[h >> 2] | 0) + 12 >> 2] & 15](h, m) | 0;
  u = v + 1 | 0;
  if (w) {
   m = 0;
   p = r;
   q = t;
  } else {
   q = 0;
   s = f;
   p = r;
   o = t;
   r = l;
   while (1) {
    do if ((a[r >> 0] | 0) == 1) {
     if (!(a[s >> 0] & 1)) n = s + 1 | 0; else n = c[s + 8 >> 2] | 0;
     n = a[n + v >> 0] | 0;
     if (!k) n = Cb[c[(c[h >> 2] | 0) + 12 >> 2] & 15](h, n) | 0;
     if (m << 24 >> 24 != n << 24 >> 24) {
      a[r >> 0] = 0;
      n = q;
      o = o + -1 | 0;
      break;
     }
     n = a[s >> 0] | 0;
     if (!(n & 1)) n = (n & 255) >>> 1; else n = c[s + 4 >> 2] | 0;
     if ((n | 0) == (u | 0)) {
      a[r >> 0] = 2;
      n = 1;
      p = p + 1 | 0;
      o = o + -1 | 0;
     } else n = 1;
    } else n = q; while (0);
    s = s + 12 | 0;
    if ((s | 0) == (g | 0)) {
     m = n;
     q = o;
     break;
    } else {
     q = n;
     r = r + 1 | 0;
    }
   }
  }
  if (!m) {
   v = u;
   r = p;
   t = q;
   continue;
  }
  m = c[b >> 2] | 0;
  n = m + 12 | 0;
  o = c[n >> 2] | 0;
  if ((o | 0) == (c[m + 16 >> 2] | 0)) wb[c[(c[m >> 2] | 0) + 40 >> 2] & 63](m) | 0; else c[n >> 2] = o + 1;
  if ((p + q | 0) >>> 0 < 2 | x) {
   v = u;
   r = p;
   t = q;
   continue;
  } else {
   m = f;
   o = p;
   p = l;
  }
  while (1) {
   if ((a[p >> 0] | 0) == 2) {
    n = a[m >> 0] | 0;
    if (!(n & 1)) n = (n & 255) >>> 1; else n = c[m + 4 >> 2] | 0;
    if ((n | 0) != (u | 0)) {
     a[p >> 0] = 0;
     o = o + -1 | 0;
    }
   }
   m = m + 12 | 0;
   if ((m | 0) == (g | 0)) {
    v = u;
    r = o;
    t = q;
    continue a;
   } else p = p + 1 | 0;
  }
 }
 do if (m) {
  if ((c[m + 12 >> 2] | 0) == (c[m + 16 >> 2] | 0)) if ((wb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0) == -1) {
   c[b >> 2] = 0;
   m = 0;
   break;
  } else {
   m = c[b >> 2] | 0;
   break;
  }
 } else m = 0; while (0);
 m = (m | 0) == 0;
 do if (!o) {
  if ((c[n + 12 >> 2] | 0) == (c[n + 16 >> 2] | 0) ? (wb[c[(c[n >> 2] | 0) + 36 >> 2] & 63](n) | 0) == -1 : 0) {
   c[e >> 2] = 0;
   z = 65;
   break;
  }
  if (!m) z = 66;
 } else z = 65; while (0);
 if ((z | 0) == 65 ? m : 0) z = 66;
 if ((z | 0) == 66) c[j >> 2] = c[j >> 2] | 2;
 b : do if ((f | 0) == (g | 0)) z = 70; else while (1) {
  if ((a[l >> 0] | 0) == 2) break b;
  f = f + 12 | 0;
  if ((f | 0) == (g | 0)) {
   z = 70;
   break;
  } else l = l + 1 | 0;
 } while (0);
 if ((z | 0) == 70) {
  c[j >> 2] = c[j >> 2] | 4;
  f = g;
 }
 re(y);
 i = A;
 return f | 0;
}

function _j(b, d, e, f, g, h, j, k, l, m) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 k = k | 0;
 l = l | 0;
 m = m | 0;
 var n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0;
 x = i;
 i = i + 112 | 0;
 n = x + 100 | 0;
 o = x + 88 | 0;
 p = x + 76 | 0;
 q = x + 64 | 0;
 r = x + 52 | 0;
 s = x + 48 | 0;
 t = x + 36 | 0;
 u = x + 24 | 0;
 v = x + 12 | 0;
 w = x;
 if (b) {
  b = Ok(d, 8944) | 0;
  tb[c[(c[b >> 2] | 0) + 44 >> 2] & 63](n, b);
  w = c[n >> 2] | 0;
  a[e >> 0] = w;
  a[e + 1 >> 0] = w >> 8;
  a[e + 2 >> 0] = w >> 16;
  a[e + 3 >> 0] = w >> 24;
  tb[c[(c[b >> 2] | 0) + 32 >> 2] & 63](o, b);
  if (!(a[l >> 0] & 1)) {
   a[l + 1 >> 0] = 0;
   a[l >> 0] = 0;
  } else {
   a[c[l + 8 >> 2] >> 0] = 0;
   c[l + 4 >> 2] = 0;
  }
  gf(l, 0);
  c[l >> 2] = c[o >> 2];
  c[l + 4 >> 2] = c[o + 4 >> 2];
  c[l + 8 >> 2] = c[o + 8 >> 2];
  c[o >> 2] = 0;
  c[o + 4 >> 2] = 0;
  c[o + 8 >> 2] = 0;
  bf(o);
  tb[c[(c[b >> 2] | 0) + 28 >> 2] & 63](p, b);
  if (!(a[k >> 0] & 1)) {
   a[k + 1 >> 0] = 0;
   a[k >> 0] = 0;
  } else {
   a[c[k + 8 >> 2] >> 0] = 0;
   c[k + 4 >> 2] = 0;
  }
  gf(k, 0);
  c[k >> 2] = c[p >> 2];
  c[k + 4 >> 2] = c[p + 4 >> 2];
  c[k + 8 >> 2] = c[p + 8 >> 2];
  c[p >> 2] = 0;
  c[p + 4 >> 2] = 0;
  c[p + 8 >> 2] = 0;
  bf(p);
  a[f >> 0] = wb[c[(c[b >> 2] | 0) + 12 >> 2] & 63](b) | 0;
  a[g >> 0] = wb[c[(c[b >> 2] | 0) + 16 >> 2] & 63](b) | 0;
  tb[c[(c[b >> 2] | 0) + 20 >> 2] & 63](q, b);
  if (!(a[h >> 0] & 1)) {
   a[h + 1 >> 0] = 0;
   a[h >> 0] = 0;
  } else {
   a[c[h + 8 >> 2] >> 0] = 0;
   c[h + 4 >> 2] = 0;
  }
  gf(h, 0);
  c[h >> 2] = c[q >> 2];
  c[h + 4 >> 2] = c[q + 4 >> 2];
  c[h + 8 >> 2] = c[q + 8 >> 2];
  c[q >> 2] = 0;
  c[q + 4 >> 2] = 0;
  c[q + 8 >> 2] = 0;
  bf(q);
  tb[c[(c[b >> 2] | 0) + 24 >> 2] & 63](r, b);
  if (!(a[j >> 0] & 1)) {
   a[j + 1 >> 0] = 0;
   a[j >> 0] = 0;
  } else {
   a[c[j + 8 >> 2] >> 0] = 0;
   c[j + 4 >> 2] = 0;
  }
  gf(j, 0);
  c[j >> 2] = c[r >> 2];
  c[j + 4 >> 2] = c[r + 4 >> 2];
  c[j + 8 >> 2] = c[r + 8 >> 2];
  c[r >> 2] = 0;
  c[r + 4 >> 2] = 0;
  c[r + 8 >> 2] = 0;
  bf(r);
  b = wb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0;
 } else {
  b = Ok(d, 8880) | 0;
  tb[c[(c[b >> 2] | 0) + 44 >> 2] & 63](s, b);
  s = c[s >> 2] | 0;
  a[e >> 0] = s;
  a[e + 1 >> 0] = s >> 8;
  a[e + 2 >> 0] = s >> 16;
  a[e + 3 >> 0] = s >> 24;
  tb[c[(c[b >> 2] | 0) + 32 >> 2] & 63](t, b);
  if (!(a[l >> 0] & 1)) {
   a[l + 1 >> 0] = 0;
   a[l >> 0] = 0;
  } else {
   a[c[l + 8 >> 2] >> 0] = 0;
   c[l + 4 >> 2] = 0;
  }
  gf(l, 0);
  c[l >> 2] = c[t >> 2];
  c[l + 4 >> 2] = c[t + 4 >> 2];
  c[l + 8 >> 2] = c[t + 8 >> 2];
  c[t >> 2] = 0;
  c[t + 4 >> 2] = 0;
  c[t + 8 >> 2] = 0;
  bf(t);
  tb[c[(c[b >> 2] | 0) + 28 >> 2] & 63](u, b);
  if (!(a[k >> 0] & 1)) {
   a[k + 1 >> 0] = 0;
   a[k >> 0] = 0;
  } else {
   a[c[k + 8 >> 2] >> 0] = 0;
   c[k + 4 >> 2] = 0;
  }
  gf(k, 0);
  c[k >> 2] = c[u >> 2];
  c[k + 4 >> 2] = c[u + 4 >> 2];
  c[k + 8 >> 2] = c[u + 8 >> 2];
  c[u >> 2] = 0;
  c[u + 4 >> 2] = 0;
  c[u + 8 >> 2] = 0;
  bf(u);
  a[f >> 0] = wb[c[(c[b >> 2] | 0) + 12 >> 2] & 63](b) | 0;
  a[g >> 0] = wb[c[(c[b >> 2] | 0) + 16 >> 2] & 63](b) | 0;
  tb[c[(c[b >> 2] | 0) + 20 >> 2] & 63](v, b);
  if (!(a[h >> 0] & 1)) {
   a[h + 1 >> 0] = 0;
   a[h >> 0] = 0;
  } else {
   a[c[h + 8 >> 2] >> 0] = 0;
   c[h + 4 >> 2] = 0;
  }
  gf(h, 0);
  c[h >> 2] = c[v >> 2];
  c[h + 4 >> 2] = c[v + 4 >> 2];
  c[h + 8 >> 2] = c[v + 8 >> 2];
  c[v >> 2] = 0;
  c[v + 4 >> 2] = 0;
  c[v + 8 >> 2] = 0;
  bf(v);
  tb[c[(c[b >> 2] | 0) + 24 >> 2] & 63](w, b);
  if (!(a[j >> 0] & 1)) {
   a[j + 1 >> 0] = 0;
   a[j >> 0] = 0;
  } else {
   a[c[j + 8 >> 2] >> 0] = 0;
   c[j + 4 >> 2] = 0;
  }
  gf(j, 0);
  c[j >> 2] = c[w >> 2];
  c[j + 4 >> 2] = c[w + 4 >> 2];
  c[j + 8 >> 2] = c[w + 8 >> 2];
  c[w >> 2] = 0;
  c[w + 4 >> 2] = 0;
  c[w + 8 >> 2] = 0;
  bf(w);
  b = wb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0;
 }
 c[m >> 2] = b;
 i = x;
 return;
}

function pd(b, e, f, g) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, i = 0, j = 0, k = 0, l = 0, m = 0;
 h = c[e >> 2] | 0;
 if ((g | 0) != 0 ? (i = c[g >> 2] | 0, (i | 0) != 0) : 0) if (!b) {
  g = f;
  j = h;
  m = 16;
 } else {
  c[g >> 2] = 0;
  l = b;
  g = f;
  k = i;
  m = 37;
 } else if (!b) {
  g = f;
  m = 7;
 } else {
  i = b;
  g = f;
  m = 6;
 }
 a : while (1) if ((m | 0) == 6) {
  if (!g) {
   m = 26;
   break;
  } else b = i;
  while (1) {
   i = a[h >> 0] | 0;
   do if (((i & 255) + -1 | 0) >>> 0 < 127 ? g >>> 0 > 4 & (h & 3 | 0) == 0 : 0) {
    j = h;
    while (1) {
     h = c[j >> 2] | 0;
     if ((h + -16843009 | h) & -2139062144) {
      i = h;
      h = j;
      m = 32;
      break;
     }
     c[b >> 2] = h & 255;
     c[b + 4 >> 2] = d[j + 1 >> 0];
     c[b + 8 >> 2] = d[j + 2 >> 0];
     h = j + 4 | 0;
     i = b + 16 | 0;
     c[b + 12 >> 2] = d[j + 3 >> 0];
     g = g + -4 | 0;
     if (g >>> 0 > 4) {
      b = i;
      j = h;
     } else {
      m = 31;
      break;
     }
    }
    if ((m | 0) == 31) {
     b = i;
     i = a[h >> 0] | 0;
     break;
    } else if ((m | 0) == 32) {
     i = i & 255;
     break;
    }
   } while (0);
   i = i & 255;
   if ((i + -1 | 0) >>> 0 >= 127) break;
   h = h + 1 | 0;
   c[b >> 2] = i;
   g = g + -1 | 0;
   if (!g) {
    m = 26;
    break a;
   } else b = b + 4 | 0;
  }
  i = i + -194 | 0;
  if (i >>> 0 > 50) {
   m = 48;
   break;
  }
  l = b;
  k = c[2348 + (i << 2) >> 2] | 0;
  h = h + 1 | 0;
  m = 37;
  continue;
 } else if ((m | 0) == 7) {
  i = a[h >> 0] | 0;
  if (((i & 255) + -1 | 0) >>> 0 < 127 ? (h & 3 | 0) == 0 : 0) {
   i = c[h >> 2] | 0;
   if (!((i + -16843009 | i) & -2139062144)) do {
    h = h + 4 | 0;
    g = g + -4 | 0;
    i = c[h >> 2] | 0;
   } while (((i + -16843009 | i) & -2139062144 | 0) == 0);
   i = i & 255;
  }
  i = i & 255;
  if ((i + -1 | 0) >>> 0 < 127) {
   g = g + -1 | 0;
   h = h + 1 | 0;
   m = 7;
   continue;
  }
  i = i + -194 | 0;
  if (i >>> 0 > 50) {
   m = 48;
   break;
  }
  i = c[2348 + (i << 2) >> 2] | 0;
  j = h + 1 | 0;
  m = 16;
  continue;
 } else if ((m | 0) == 16) {
  m = (d[j >> 0] | 0) >>> 3;
  if ((m + -16 | m + (i >> 26)) >>> 0 > 7) {
   m = 17;
   break;
  }
  h = j + 1 | 0;
  if (i & 33554432) {
   if ((a[h >> 0] & -64) << 24 >> 24 != -128) {
    m = 20;
    break;
   }
   h = j + 2 | 0;
   if (i & 524288) {
    if ((a[h >> 0] & -64) << 24 >> 24 != -128) {
     m = 23;
     break;
    }
    h = j + 3 | 0;
   }
  }
  g = g + -1 | 0;
  m = 7;
  continue;
 } else if ((m | 0) == 37) {
  i = d[h >> 0] | 0;
  m = i >>> 3;
  if ((m + -16 | m + (k >> 26)) >>> 0 > 7) {
   m = 38;
   break;
  }
  j = h + 1 | 0;
  b = i + -128 | k << 6;
  if ((b | 0) < 0) {
   i = d[j >> 0] | 0;
   if ((i & 192 | 0) != 128) {
    m = 41;
    break;
   }
   j = h + 2 | 0;
   b = i + -128 | b << 6;
   if ((b | 0) < 0) {
    i = d[j >> 0] | 0;
    if ((i & 192 | 0) != 128) {
     m = 44;
     break;
    }
    b = i + -128 | b << 6;
    h = h + 3 | 0;
   } else h = j;
  } else h = j;
  c[l >> 2] = b;
  i = l + 4 | 0;
  g = g + -1 | 0;
  m = 6;
  continue;
 }
 if ((m | 0) == 17) {
  h = j + -1 | 0;
  m = 47;
 } else if ((m | 0) == 20) {
  h = j + -1 | 0;
  m = 47;
 } else if ((m | 0) == 23) {
  h = j + -1 | 0;
  m = 47;
 } else if ((m | 0) == 26) c[e >> 2] = h; else if ((m | 0) == 38) {
  b = l;
  i = k;
  h = h + -1 | 0;
  m = 47;
 } else if ((m | 0) == 41) {
  g = l;
  f = h + -1 | 0;
  m = 52;
 } else if ((m | 0) == 44) {
  g = l;
  f = h + -1 | 0;
  m = 52;
 }
 if ((m | 0) == 47) if (!i) m = 48; else {
  g = b;
  f = h;
  m = 52;
 }
 if ((m | 0) == 48) if (!(a[h >> 0] | 0)) {
  if (b) {
   c[b >> 2] = 0;
   c[e >> 2] = 0;
  }
  f = f - g | 0;
 } else {
  g = b;
  f = h;
  m = 52;
 }
 if ((m | 0) == 52) {
  c[(Rc() | 0) >> 2] = 84;
  if (!g) f = -1; else {
   c[e >> 2] = f;
   f = -1;
  }
 }
 return f | 0;
}

function Vh(b, d, e, f, g, h, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0;
 w = i;
 i = i + 16 | 0;
 v = w;
 u = Ok(j, 9328) | 0;
 s = Ok(j, 9484) | 0;
 tb[c[(c[s >> 2] | 0) + 20 >> 2] & 63](v, s);
 c[h >> 2] = f;
 j = a[b >> 0] | 0;
 switch (j << 24 >> 24) {
 case 43:
 case 45:
  {
   t = Cb[c[(c[u >> 2] | 0) + 44 >> 2] & 15](u, j) | 0;
   l = c[h >> 2] | 0;
   c[h >> 2] = l + 4;
   c[l >> 2] = t;
   l = b + 1 | 0;
   break;
  }
 default:
  l = b;
 }
 t = e;
 a : do if ((t - l | 0) > 1 ? (a[l >> 0] | 0) == 48 : 0) {
  j = l + 1 | 0;
  switch (a[j >> 0] | 0) {
  case 88:
  case 120:
   break;
  default:
   {
    m = 4;
    break a;
   }
  }
  r = Cb[c[(c[u >> 2] | 0) + 44 >> 2] & 15](u, 48) | 0;
  q = c[h >> 2] | 0;
  c[h >> 2] = q + 4;
  c[q >> 2] = r;
  l = l + 2 | 0;
  q = Cb[c[(c[u >> 2] | 0) + 44 >> 2] & 15](u, a[j >> 0] | 0) | 0;
  r = c[h >> 2] | 0;
  c[h >> 2] = r + 4;
  c[r >> 2] = q;
  if (l >>> 0 < e >>> 0) {
   j = l;
   while (1) {
    r = a[j >> 0] | 0;
    if (!(ad(r, ch() | 0) | 0)) {
     r = l;
     break a;
    }
    j = j + 1 | 0;
    if (j >>> 0 >= e >>> 0) {
     r = l;
     break;
    }
   }
  } else {
   r = l;
   j = l;
  }
 } else m = 4; while (0);
 b : do if ((m | 0) == 4) if (l >>> 0 < e >>> 0) {
  j = l;
  while (1) {
   r = a[j >> 0] | 0;
   if (!($c(r, ch() | 0) | 0)) {
    r = l;
    break b;
   }
   j = j + 1 | 0;
   if (j >>> 0 >= e >>> 0) {
    r = l;
    break;
   }
  }
 } else {
  r = l;
  j = l;
 } while (0);
 p = a[v >> 0] | 0;
 q = v + 4 | 0;
 if (((p & 1) == 0 ? (p & 255) >>> 1 : c[q >> 2] | 0) | 0) {
  if ((r | 0) != (j | 0) ? (k = j + -1 | 0, r >>> 0 < k >>> 0) : 0) {
   l = r;
   do {
    p = a[l >> 0] | 0;
    a[l >> 0] = a[k >> 0] | 0;
    a[k >> 0] = p;
    l = l + 1 | 0;
    k = k + -1 | 0;
   } while (l >>> 0 < k >>> 0);
  }
  m = wb[c[(c[s >> 2] | 0) + 16 >> 2] & 63](s) | 0;
  n = v + 8 | 0;
  o = v + 1 | 0;
  if (r >>> 0 < j >>> 0) {
   k = 0;
   l = 0;
   p = r;
   while (1) {
    x = a[((a[v >> 0] & 1) == 0 ? o : c[n >> 2] | 0) + l >> 0] | 0;
    if (x << 24 >> 24 > 0 & (k | 0) == (x << 24 >> 24 | 0)) {
     x = c[h >> 2] | 0;
     c[h >> 2] = x + 4;
     c[x >> 2] = m;
     x = a[v >> 0] | 0;
     k = 0;
     l = (l >>> 0 < (((x & 1) == 0 ? (x & 255) >>> 1 : c[q >> 2] | 0) + -1 | 0) >>> 0 & 1) + l | 0;
    }
    y = Cb[c[(c[u >> 2] | 0) + 44 >> 2] & 15](u, a[p >> 0] | 0) | 0;
    x = c[h >> 2] | 0;
    c[h >> 2] = x + 4;
    c[x >> 2] = y;
    p = p + 1 | 0;
    if (p >>> 0 >= j >>> 0) break; else k = k + 1 | 0;
   }
  }
  k = f + (r - b << 2) | 0;
  m = c[h >> 2] | 0;
  if ((k | 0) != (m | 0)) {
   l = m + -4 | 0;
   if (k >>> 0 < l >>> 0) {
    do {
     y = c[k >> 2] | 0;
     c[k >> 2] = c[l >> 2];
     c[l >> 2] = y;
     k = k + 4 | 0;
     l = l + -4 | 0;
    } while (k >>> 0 < l >>> 0);
    l = u;
    k = m;
   } else {
    l = u;
    k = m;
   }
  } else l = u;
 } else {
  Ab[c[(c[u >> 2] | 0) + 48 >> 2] & 7](u, r, j, c[h >> 2] | 0) | 0;
  k = (c[h >> 2] | 0) + (j - r << 2) | 0;
  c[h >> 2] = k;
  l = u;
 }
 c : do if (j >>> 0 < e >>> 0) {
  while (1) {
   k = a[j >> 0] | 0;
   if (k << 24 >> 24 == 46) break;
   x = Cb[c[(c[l >> 2] | 0) + 44 >> 2] & 15](u, k) | 0;
   y = c[h >> 2] | 0;
   k = y + 4 | 0;
   c[h >> 2] = k;
   c[y >> 2] = x;
   j = j + 1 | 0;
   if (j >>> 0 >= e >>> 0) break c;
  }
  x = wb[c[(c[s >> 2] | 0) + 12 >> 2] & 63](s) | 0;
  y = c[h >> 2] | 0;
  k = y + 4 | 0;
  c[h >> 2] = k;
  c[y >> 2] = x;
  j = j + 1 | 0;
 } while (0);
 Ab[c[(c[u >> 2] | 0) + 48 >> 2] & 7](u, j, e, k) | 0;
 y = (c[h >> 2] | 0) + (t - j << 2) | 0;
 c[h >> 2] = y;
 c[g >> 2] = (d | 0) == (e | 0) ? y : f + (d - b << 2) | 0;
 bf(v);
 i = w;
 return;
}

function fk(b, d, e, f, g, h, j, k, l, m) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 k = k | 0;
 l = l | 0;
 m = m | 0;
 var n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0;
 x = i;
 i = i + 112 | 0;
 n = x + 100 | 0;
 o = x + 88 | 0;
 p = x + 76 | 0;
 q = x + 64 | 0;
 r = x + 52 | 0;
 s = x + 48 | 0;
 t = x + 36 | 0;
 u = x + 24 | 0;
 v = x + 12 | 0;
 w = x;
 if (b) {
  b = Ok(d, 9072) | 0;
  tb[c[(c[b >> 2] | 0) + 44 >> 2] & 63](n, b);
  w = c[n >> 2] | 0;
  a[e >> 0] = w;
  a[e + 1 >> 0] = w >> 8;
  a[e + 2 >> 0] = w >> 16;
  a[e + 3 >> 0] = w >> 24;
  tb[c[(c[b >> 2] | 0) + 32 >> 2] & 63](o, b);
  if (!(a[l >> 0] & 1)) a[l >> 0] = 0; else c[c[l + 8 >> 2] >> 2] = 0;
  c[l + 4 >> 2] = 0;
  qf(l, 0);
  c[l >> 2] = c[o >> 2];
  c[l + 4 >> 2] = c[o + 4 >> 2];
  c[l + 8 >> 2] = c[o + 8 >> 2];
  c[o >> 2] = 0;
  c[o + 4 >> 2] = 0;
  c[o + 8 >> 2] = 0;
  nf(o);
  tb[c[(c[b >> 2] | 0) + 28 >> 2] & 63](p, b);
  if (!(a[k >> 0] & 1)) a[k >> 0] = 0; else c[c[k + 8 >> 2] >> 2] = 0;
  c[k + 4 >> 2] = 0;
  qf(k, 0);
  c[k >> 2] = c[p >> 2];
  c[k + 4 >> 2] = c[p + 4 >> 2];
  c[k + 8 >> 2] = c[p + 8 >> 2];
  c[p >> 2] = 0;
  c[p + 4 >> 2] = 0;
  c[p + 8 >> 2] = 0;
  nf(p);
  c[f >> 2] = wb[c[(c[b >> 2] | 0) + 12 >> 2] & 63](b) | 0;
  c[g >> 2] = wb[c[(c[b >> 2] | 0) + 16 >> 2] & 63](b) | 0;
  tb[c[(c[b >> 2] | 0) + 20 >> 2] & 63](q, b);
  if (!(a[h >> 0] & 1)) {
   a[h + 1 >> 0] = 0;
   a[h >> 0] = 0;
  } else {
   a[c[h + 8 >> 2] >> 0] = 0;
   c[h + 4 >> 2] = 0;
  }
  gf(h, 0);
  c[h >> 2] = c[q >> 2];
  c[h + 4 >> 2] = c[q + 4 >> 2];
  c[h + 8 >> 2] = c[q + 8 >> 2];
  c[q >> 2] = 0;
  c[q + 4 >> 2] = 0;
  c[q + 8 >> 2] = 0;
  bf(q);
  tb[c[(c[b >> 2] | 0) + 24 >> 2] & 63](r, b);
  if (!(a[j >> 0] & 1)) a[j >> 0] = 0; else c[c[j + 8 >> 2] >> 2] = 0;
  c[j + 4 >> 2] = 0;
  qf(j, 0);
  c[j >> 2] = c[r >> 2];
  c[j + 4 >> 2] = c[r + 4 >> 2];
  c[j + 8 >> 2] = c[r + 8 >> 2];
  c[r >> 2] = 0;
  c[r + 4 >> 2] = 0;
  c[r + 8 >> 2] = 0;
  nf(r);
  b = wb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0;
 } else {
  b = Ok(d, 9008) | 0;
  tb[c[(c[b >> 2] | 0) + 44 >> 2] & 63](s, b);
  s = c[s >> 2] | 0;
  a[e >> 0] = s;
  a[e + 1 >> 0] = s >> 8;
  a[e + 2 >> 0] = s >> 16;
  a[e + 3 >> 0] = s >> 24;
  tb[c[(c[b >> 2] | 0) + 32 >> 2] & 63](t, b);
  if (!(a[l >> 0] & 1)) a[l >> 0] = 0; else c[c[l + 8 >> 2] >> 2] = 0;
  c[l + 4 >> 2] = 0;
  qf(l, 0);
  c[l >> 2] = c[t >> 2];
  c[l + 4 >> 2] = c[t + 4 >> 2];
  c[l + 8 >> 2] = c[t + 8 >> 2];
  c[t >> 2] = 0;
  c[t + 4 >> 2] = 0;
  c[t + 8 >> 2] = 0;
  nf(t);
  tb[c[(c[b >> 2] | 0) + 28 >> 2] & 63](u, b);
  if (!(a[k >> 0] & 1)) a[k >> 0] = 0; else c[c[k + 8 >> 2] >> 2] = 0;
  c[k + 4 >> 2] = 0;
  qf(k, 0);
  c[k >> 2] = c[u >> 2];
  c[k + 4 >> 2] = c[u + 4 >> 2];
  c[k + 8 >> 2] = c[u + 8 >> 2];
  c[u >> 2] = 0;
  c[u + 4 >> 2] = 0;
  c[u + 8 >> 2] = 0;
  nf(u);
  c[f >> 2] = wb[c[(c[b >> 2] | 0) + 12 >> 2] & 63](b) | 0;
  c[g >> 2] = wb[c[(c[b >> 2] | 0) + 16 >> 2] & 63](b) | 0;
  tb[c[(c[b >> 2] | 0) + 20 >> 2] & 63](v, b);
  if (!(a[h >> 0] & 1)) {
   a[h + 1 >> 0] = 0;
   a[h >> 0] = 0;
  } else {
   a[c[h + 8 >> 2] >> 0] = 0;
   c[h + 4 >> 2] = 0;
  }
  gf(h, 0);
  c[h >> 2] = c[v >> 2];
  c[h + 4 >> 2] = c[v + 4 >> 2];
  c[h + 8 >> 2] = c[v + 8 >> 2];
  c[v >> 2] = 0;
  c[v + 4 >> 2] = 0;
  c[v + 8 >> 2] = 0;
  bf(v);
  tb[c[(c[b >> 2] | 0) + 24 >> 2] & 63](w, b);
  if (!(a[j >> 0] & 1)) a[j >> 0] = 0; else c[c[j + 8 >> 2] >> 2] = 0;
  c[j + 4 >> 2] = 0;
  qf(j, 0);
  c[j >> 2] = c[w >> 2];
  c[j + 4 >> 2] = c[w + 4 >> 2];
  c[j + 8 >> 2] = c[w + 8 >> 2];
  c[w >> 2] = 0;
  c[w + 4 >> 2] = 0;
  c[w + 8 >> 2] = 0;
  nf(w);
  b = wb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0;
 }
 c[m >> 2] = b;
 i = x;
 return;
}

function Jh(b, d, e, f, g, h, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0;
 x = i;
 i = i + 16 | 0;
 w = x;
 v = Ok(j, 9336) | 0;
 t = Ok(j, 9476) | 0;
 tb[c[(c[t >> 2] | 0) + 20 >> 2] & 63](w, t);
 c[h >> 2] = f;
 j = a[b >> 0] | 0;
 switch (j << 24 >> 24) {
 case 43:
 case 45:
  {
   u = Cb[c[(c[v >> 2] | 0) + 28 >> 2] & 15](v, j) | 0;
   m = c[h >> 2] | 0;
   c[h >> 2] = m + 1;
   a[m >> 0] = u;
   m = b + 1 | 0;
   break;
  }
 default:
  m = b;
 }
 u = e;
 a : do if ((u - m | 0) > 1 ? (a[m >> 0] | 0) == 48 : 0) {
  j = m + 1 | 0;
  switch (a[j >> 0] | 0) {
  case 88:
  case 120:
   break;
  default:
   {
    n = 4;
    break a;
   }
  }
  s = Cb[c[(c[v >> 2] | 0) + 28 >> 2] & 15](v, 48) | 0;
  r = c[h >> 2] | 0;
  c[h >> 2] = r + 1;
  a[r >> 0] = s;
  m = m + 2 | 0;
  r = Cb[c[(c[v >> 2] | 0) + 28 >> 2] & 15](v, a[j >> 0] | 0) | 0;
  s = c[h >> 2] | 0;
  c[h >> 2] = s + 1;
  a[s >> 0] = r;
  if (m >>> 0 < e >>> 0) {
   j = m;
   while (1) {
    s = a[j >> 0] | 0;
    if (!(ad(s, ch() | 0) | 0)) {
     s = m;
     break a;
    }
    j = j + 1 | 0;
    if (j >>> 0 >= e >>> 0) {
     s = m;
     break;
    }
   }
  } else {
   s = m;
   j = m;
  }
 } else n = 4; while (0);
 b : do if ((n | 0) == 4) if (m >>> 0 < e >>> 0) {
  j = m;
  while (1) {
   s = a[j >> 0] | 0;
   if (!($c(s, ch() | 0) | 0)) {
    s = m;
    break b;
   }
   j = j + 1 | 0;
   if (j >>> 0 >= e >>> 0) {
    s = m;
    break;
   }
  }
 } else {
  s = m;
  j = m;
 } while (0);
 q = a[w >> 0] | 0;
 r = w + 4 | 0;
 if (((q & 1) == 0 ? (q & 255) >>> 1 : c[r >> 2] | 0) | 0) {
  if ((s | 0) != (j | 0) ? (l = j + -1 | 0, s >>> 0 < l >>> 0) : 0) {
   m = s;
   do {
    q = a[m >> 0] | 0;
    a[m >> 0] = a[l >> 0] | 0;
    a[l >> 0] = q;
    m = m + 1 | 0;
    l = l + -1 | 0;
   } while (m >>> 0 < l >>> 0);
  }
  n = wb[c[(c[t >> 2] | 0) + 16 >> 2] & 63](t) | 0;
  o = w + 8 | 0;
  p = w + 1 | 0;
  if (s >>> 0 < j >>> 0) {
   l = 0;
   m = 0;
   q = s;
   while (1) {
    y = a[((a[w >> 0] & 1) == 0 ? p : c[o >> 2] | 0) + m >> 0] | 0;
    if (y << 24 >> 24 > 0 & (l | 0) == (y << 24 >> 24 | 0)) {
     y = c[h >> 2] | 0;
     c[h >> 2] = y + 1;
     a[y >> 0] = n;
     y = a[w >> 0] | 0;
     l = 0;
     m = (m >>> 0 < (((y & 1) == 0 ? (y & 255) >>> 1 : c[r >> 2] | 0) + -1 | 0) >>> 0 & 1) + m | 0;
    }
    z = Cb[c[(c[v >> 2] | 0) + 28 >> 2] & 15](v, a[q >> 0] | 0) | 0;
    y = c[h >> 2] | 0;
    c[h >> 2] = y + 1;
    a[y >> 0] = z;
    q = q + 1 | 0;
    if (q >>> 0 >= j >>> 0) break; else l = l + 1 | 0;
   }
  }
  l = f + (s - b) | 0;
  m = c[h >> 2] | 0;
  if ((l | 0) != (m | 0) ? (k = m + -1 | 0, l >>> 0 < k >>> 0) : 0) {
   do {
    z = a[l >> 0] | 0;
    a[l >> 0] = a[k >> 0] | 0;
    a[k >> 0] = z;
    l = l + 1 | 0;
    k = k + -1 | 0;
   } while (l >>> 0 < k >>> 0);
   l = v;
  } else l = v;
 } else {
  Ab[c[(c[v >> 2] | 0) + 32 >> 2] & 7](v, s, j, c[h >> 2] | 0) | 0;
  c[h >> 2] = (c[h >> 2] | 0) + (j - s);
  l = v;
 }
 c : do if (j >>> 0 < e >>> 0) {
  while (1) {
   k = a[j >> 0] | 0;
   if (k << 24 >> 24 == 46) break;
   y = Cb[c[(c[l >> 2] | 0) + 28 >> 2] & 15](v, k) | 0;
   z = c[h >> 2] | 0;
   c[h >> 2] = z + 1;
   a[z >> 0] = y;
   j = j + 1 | 0;
   if (j >>> 0 >= e >>> 0) break c;
  }
  y = wb[c[(c[t >> 2] | 0) + 12 >> 2] & 63](t) | 0;
  z = c[h >> 2] | 0;
  c[h >> 2] = z + 1;
  a[z >> 0] = y;
  j = j + 1 | 0;
 } while (0);
 Ab[c[(c[v >> 2] | 0) + 32 >> 2] & 7](v, j, e, c[h >> 2] | 0) | 0;
 z = (c[h >> 2] | 0) + (u - j) | 0;
 c[h >> 2] = z;
 c[g >> 2] = (d | 0) == (e | 0) ? z : f + (d - b) | 0;
 bf(w);
 i = x;
 return;
}

function Zm(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0;
 g = c[a >> 2] | 0;
 do if (g) {
  h = c[g + 12 >> 2] | 0;
  if ((h | 0) == (c[g + 16 >> 2] | 0)) g = wb[c[(c[g >> 2] | 0) + 36 >> 2] & 63](g) | 0; else g = c[h >> 2] | 0;
  if ((g | 0) == -1) {
   c[a >> 2] = 0;
   i = 1;
   break;
  } else {
   i = (c[a >> 2] | 0) == 0;
   break;
  }
 } else i = 1; while (0);
 h = c[b >> 2] | 0;
 do if (h) {
  g = c[h + 12 >> 2] | 0;
  if ((g | 0) == (c[h + 16 >> 2] | 0)) g = wb[c[(c[h >> 2] | 0) + 36 >> 2] & 63](h) | 0; else g = c[g >> 2] | 0;
  if ((g | 0) != -1) if (i) {
   o = 17;
   break;
  } else {
   o = 16;
   break;
  } else {
   c[b >> 2] = 0;
   o = 14;
   break;
  }
 } else o = 14; while (0);
 if ((o | 0) == 14) if (i) o = 16; else {
  h = 0;
  o = 17;
 }
 a : do if ((o | 0) == 16) {
  c[d >> 2] = c[d >> 2] | 6;
  g = 0;
 } else if ((o | 0) == 17) {
  g = c[a >> 2] | 0;
  i = c[g + 12 >> 2] | 0;
  if ((i | 0) == (c[g + 16 >> 2] | 0)) g = wb[c[(c[g >> 2] | 0) + 36 >> 2] & 63](g) | 0; else g = c[i >> 2] | 0;
  if (!(pb[c[(c[e >> 2] | 0) + 12 >> 2] & 31](e, 2048, g) | 0)) {
   c[d >> 2] = c[d >> 2] | 4;
   g = 0;
   break;
  }
  g = (pb[c[(c[e >> 2] | 0) + 52 >> 2] & 31](e, g, 0) | 0) << 24 >> 24;
  i = c[a >> 2] | 0;
  j = i + 12 | 0;
  k = c[j >> 2] | 0;
  if ((k | 0) == (c[i + 16 >> 2] | 0)) {
   wb[c[(c[i >> 2] | 0) + 40 >> 2] & 63](i) | 0;
   m = f;
   l = h;
   j = h;
  } else {
   c[j >> 2] = k + 4;
   m = f;
   l = h;
   j = h;
  }
  while (1) {
   g = g + -48 | 0;
   n = m + -1 | 0;
   h = c[a >> 2] | 0;
   do if (h) {
    i = c[h + 12 >> 2] | 0;
    if ((i | 0) == (c[h + 16 >> 2] | 0)) h = wb[c[(c[h >> 2] | 0) + 36 >> 2] & 63](h) | 0; else h = c[i >> 2] | 0;
    if ((h | 0) == -1) {
     c[a >> 2] = 0;
     k = 1;
     break;
    } else {
     k = (c[a >> 2] | 0) == 0;
     break;
    }
   } else k = 1; while (0);
   do if (j) {
    h = c[j + 12 >> 2] | 0;
    if ((h | 0) == (c[j + 16 >> 2] | 0)) h = wb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else h = c[h >> 2] | 0;
    if ((h | 0) == -1) {
     c[b >> 2] = 0;
     j = 0;
     f = 0;
     h = 1;
     break;
    } else {
     j = l;
     f = l;
     h = (l | 0) == 0;
     break;
    }
   } else {
    j = l;
    f = 0;
    h = 1;
   } while (0);
   i = c[a >> 2] | 0;
   if (!((m | 0) > 1 & (k ^ h))) break;
   h = c[i + 12 >> 2] | 0;
   if ((h | 0) == (c[i + 16 >> 2] | 0)) h = wb[c[(c[i >> 2] | 0) + 36 >> 2] & 63](i) | 0; else h = c[h >> 2] | 0;
   if (!(pb[c[(c[e >> 2] | 0) + 12 >> 2] & 31](e, 2048, h) | 0)) break a;
   g = ((pb[c[(c[e >> 2] | 0) + 52 >> 2] & 31](e, h, 0) | 0) << 24 >> 24) + (g * 10 | 0) | 0;
   h = c[a >> 2] | 0;
   i = h + 12 | 0;
   k = c[i >> 2] | 0;
   if ((k | 0) == (c[h + 16 >> 2] | 0)) {
    wb[c[(c[h >> 2] | 0) + 40 >> 2] & 63](h) | 0;
    m = n;
    l = j;
    j = f;
    continue;
   } else {
    c[i >> 2] = k + 4;
    m = n;
    l = j;
    j = f;
    continue;
   }
  }
  do if (i) {
   h = c[i + 12 >> 2] | 0;
   if ((h | 0) == (c[i + 16 >> 2] | 0)) h = wb[c[(c[i >> 2] | 0) + 36 >> 2] & 63](i) | 0; else h = c[h >> 2] | 0;
   if ((h | 0) == -1) {
    c[a >> 2] = 0;
    i = 1;
    break;
   } else {
    i = (c[a >> 2] | 0) == 0;
    break;
   }
  } else i = 1; while (0);
  do if (j) {
   h = c[j + 12 >> 2] | 0;
   if ((h | 0) == (c[j + 16 >> 2] | 0)) h = wb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else h = c[h >> 2] | 0;
   if ((h | 0) != -1) if (i) break a; else break; else {
    c[b >> 2] = 0;
    o = 60;
    break;
   }
  } else o = 60; while (0);
  if ((o | 0) == 60 ? !i : 0) break;
  c[d >> 2] = c[d >> 2] | 2;
 } while (0);
 return g | 0;
}

function Ym(a, e, f, g, h) {
 a = a | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 i = c[a >> 2] | 0;
 do if (i) {
  if ((c[i + 12 >> 2] | 0) == (c[i + 16 >> 2] | 0)) if ((wb[c[(c[i >> 2] | 0) + 36 >> 2] & 63](i) | 0) == -1) {
   c[a >> 2] = 0;
   i = 0;
   break;
  } else {
   i = c[a >> 2] | 0;
   break;
  }
 } else i = 0; while (0);
 j = (i | 0) == 0;
 i = c[e >> 2] | 0;
 do if (i) {
  if ((c[i + 12 >> 2] | 0) == (c[i + 16 >> 2] | 0) ? (wb[c[(c[i >> 2] | 0) + 36 >> 2] & 63](i) | 0) == -1 : 0) {
   c[e >> 2] = 0;
   r = 11;
   break;
  }
  if (j) r = 13; else r = 12;
 } else r = 11; while (0);
 if ((r | 0) == 11) if (j) r = 12; else {
  i = 0;
  r = 13;
 }
 a : do if ((r | 0) == 12) {
  c[f >> 2] = c[f >> 2] | 6;
  i = 0;
 } else if ((r | 0) == 13) {
  j = c[a >> 2] | 0;
  k = c[j + 12 >> 2] | 0;
  if ((k | 0) == (c[j + 16 >> 2] | 0)) j = wb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else j = d[k >> 0] | 0;
  k = j & 255;
  if (k << 24 >> 24 > -1 ? (q = g + 8 | 0, (b[(c[q >> 2] | 0) + (j << 24 >> 24 << 1) >> 1] & 2048) != 0) : 0) {
   m = (pb[c[(c[g >> 2] | 0) + 36 >> 2] & 31](g, k, 0) | 0) << 24 >> 24;
   j = c[a >> 2] | 0;
   k = j + 12 | 0;
   l = c[k >> 2] | 0;
   if ((l | 0) == (c[j + 16 >> 2] | 0)) {
    wb[c[(c[j >> 2] | 0) + 40 >> 2] & 63](j) | 0;
    o = h;
    n = i;
    h = i;
    i = m;
   } else {
    c[k >> 2] = l + 1;
    o = h;
    n = i;
    h = i;
    i = m;
   }
   while (1) {
    i = i + -48 | 0;
    p = o + -1 | 0;
    j = c[a >> 2] | 0;
    do if (j) {
     if ((c[j + 12 >> 2] | 0) == (c[j + 16 >> 2] | 0)) if ((wb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0) == -1) {
      c[a >> 2] = 0;
      j = 0;
      break;
     } else {
      j = c[a >> 2] | 0;
      break;
     }
    } else j = 0; while (0);
    l = (j | 0) == 0;
    if (h) if ((c[h + 12 >> 2] | 0) == (c[h + 16 >> 2] | 0)) if ((wb[c[(c[h >> 2] | 0) + 36 >> 2] & 63](h) | 0) == -1) {
     c[e >> 2] = 0;
     k = 0;
     h = 0;
    } else {
     k = n;
     h = n;
    } else k = n; else {
     k = n;
     h = 0;
    }
    j = c[a >> 2] | 0;
    if (!((o | 0) > 1 & (l ^ (h | 0) == 0))) break;
    l = c[j + 12 >> 2] | 0;
    if ((l | 0) == (c[j + 16 >> 2] | 0)) j = wb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else j = d[l >> 0] | 0;
    l = j & 255;
    if (l << 24 >> 24 <= -1) break a;
    if (!(b[(c[q >> 2] | 0) + (j << 24 >> 24 << 1) >> 1] & 2048)) break a;
    i = ((pb[c[(c[g >> 2] | 0) + 36 >> 2] & 31](g, l, 0) | 0) << 24 >> 24) + (i * 10 | 0) | 0;
    j = c[a >> 2] | 0;
    l = j + 12 | 0;
    m = c[l >> 2] | 0;
    if ((m | 0) == (c[j + 16 >> 2] | 0)) {
     wb[c[(c[j >> 2] | 0) + 40 >> 2] & 63](j) | 0;
     o = p;
     n = k;
     continue;
    } else {
     c[l >> 2] = m + 1;
     o = p;
     n = k;
     continue;
    }
   }
   do if (j) {
    if ((c[j + 12 >> 2] | 0) == (c[j + 16 >> 2] | 0)) if ((wb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0) == -1) {
     c[a >> 2] = 0;
     j = 0;
     break;
    } else {
     j = c[a >> 2] | 0;
     break;
    }
   } else j = 0; while (0);
   j = (j | 0) == 0;
   do if (k) {
    if ((c[k + 12 >> 2] | 0) == (c[k + 16 >> 2] | 0) ? (wb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0) == -1 : 0) {
     c[e >> 2] = 0;
     r = 50;
     break;
    }
    if (j) break a;
   } else r = 50; while (0);
   if ((r | 0) == 50 ? !j : 0) break;
   c[f >> 2] = c[f >> 2] | 2;
   break;
  }
  c[f >> 2] = c[f >> 2] | 4;
  i = 0;
 } while (0);
 return i | 0;
}

function Mn(b, c, e, f, g) {
 b = b | 0;
 c = c | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 n = c;
 if ((((g & 4 | 0) != 0 ? (n - b | 0) > 2 : 0) ? (a[b >> 0] | 0) == -17 : 0) ? (a[b + 1 >> 0] | 0) == -69 : 0) g = (a[b + 2 >> 0] | 0) == -65 ? b + 3 | 0 : b; else g = b;
 a : do if ((e | 0) != 0 & g >>> 0 < c >>> 0) {
  m = g;
  h = 0;
  b : while (1) {
   g = a[m >> 0] | 0;
   l = g & 255;
   if (l >>> 0 > f >>> 0) {
    g = m;
    h = 42;
    break a;
   }
   do if (g << 24 >> 24 > -1) g = m + 1 | 0; else {
    if ((g & 255) < 194) {
     g = m;
     h = 42;
     break a;
    }
    if ((g & 255) < 224) {
     if ((n - m | 0) < 2) {
      g = m;
      h = 42;
      break a;
     }
     g = d[m + 1 >> 0] | 0;
     if ((g & 192 | 0) != 128) {
      g = m;
      h = 42;
      break a;
     }
     if ((g & 63 | l << 6 & 1984) >>> 0 > f >>> 0) {
      g = m;
      h = 42;
      break a;
     }
     g = m + 2 | 0;
     break;
    }
    if ((g & 255) < 240) {
     g = m;
     if ((n - g | 0) < 3) {
      g = m;
      h = 42;
      break a;
     }
     j = a[m + 1 >> 0] | 0;
     i = a[m + 2 >> 0] | 0;
     switch (l | 0) {
     case 224:
      {
       if ((j & -32) << 24 >> 24 != -96) {
        h = 20;
        break b;
       }
       break;
      }
     case 237:
      {
       if ((j & -32) << 24 >> 24 != -128) {
        h = 22;
        break b;
       }
       break;
      }
     default:
      if ((j & -64) << 24 >> 24 != -128) {
       h = 24;
       break b;
      }
     }
     g = i & 255;
     if ((g & 192 | 0) != 128) {
      g = m;
      h = 42;
      break a;
     }
     if (((j & 255) << 6 & 4032 | l << 12 & 61440 | g & 63) >>> 0 > f >>> 0) {
      g = m;
      h = 42;
      break a;
     }
     g = m + 3 | 0;
     break;
    }
    if ((g & 255) >= 245) {
     g = m;
     h = 42;
     break a;
    }
    g = m;
    if ((e - h | 0) >>> 0 < 2 | (n - g | 0) < 4) {
     g = m;
     h = 42;
     break a;
    }
    k = a[m + 1 >> 0] | 0;
    i = a[m + 2 >> 0] | 0;
    j = a[m + 3 >> 0] | 0;
    switch (l | 0) {
    case 240:
     {
      if ((k + 112 & 255) >= 48) {
       h = 32;
       break b;
      }
      break;
     }
    case 244:
     {
      if ((k & -16) << 24 >> 24 != -128) {
       h = 34;
       break b;
      }
      break;
     }
    default:
     if ((k & -64) << 24 >> 24 != -128) {
      h = 36;
      break b;
     }
    }
    i = i & 255;
    if ((i & 192 | 0) != 128) {
     g = m;
     h = 42;
     break a;
    }
    g = j & 255;
    if ((g & 192 | 0) != 128) {
     g = m;
     h = 42;
     break a;
    }
    if (((k & 255) << 12 & 258048 | l << 18 & 1835008 | i << 6 & 4032 | g & 63) >>> 0 > f >>> 0) {
     g = m;
     h = 42;
     break a;
    }
    g = m + 4 | 0;
    h = h + 1 | 0;
   } while (0);
   h = h + 1 | 0;
   if (!(h >>> 0 < e >>> 0 & g >>> 0 < c >>> 0)) {
    h = 42;
    break a;
   } else m = g;
  }
  if ((h | 0) == 20) {
   g = g - b | 0;
   break;
  } else if ((h | 0) == 22) {
   g = g - b | 0;
   break;
  } else if ((h | 0) == 24) {
   g = g - b | 0;
   break;
  } else if ((h | 0) == 32) {
   g = g - b | 0;
   break;
  } else if ((h | 0) == 34) {
   g = g - b | 0;
   break;
  } else if ((h | 0) == 36) {
   g = g - b | 0;
   break;
  }
 } else h = 42; while (0);
 if ((h | 0) == 42) g = g - b | 0;
 return g | 0;
}

function Pn(b, c, e, f, g) {
 b = b | 0;
 c = c | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 n = c;
 if ((((g & 4 | 0) != 0 ? (n - b | 0) > 2 : 0) ? (a[b >> 0] | 0) == -17 : 0) ? (a[b + 1 >> 0] | 0) == -69 : 0) g = (a[b + 2 >> 0] | 0) == -65 ? b + 3 | 0 : b; else g = b;
 a : do if ((e | 0) != 0 & g >>> 0 < c >>> 0) {
  l = g;
  m = 0;
  b : while (1) {
   g = a[l >> 0] | 0;
   k = g & 255;
   do if (g << 24 >> 24 > -1) {
    if (k >>> 0 > f >>> 0) {
     g = l;
     h = 42;
     break a;
    }
    g = l + 1 | 0;
   } else {
    if ((g & 255) < 194) {
     g = l;
     h = 42;
     break a;
    }
    if ((g & 255) < 224) {
     if ((n - l | 0) < 2) {
      g = l;
      h = 42;
      break a;
     }
     g = d[l + 1 >> 0] | 0;
     if ((g & 192 | 0) != 128) {
      g = l;
      h = 42;
      break a;
     }
     if ((g & 63 | k << 6 & 1984) >>> 0 > f >>> 0) {
      g = l;
      h = 42;
      break a;
     }
     g = l + 2 | 0;
     break;
    }
    if ((g & 255) < 240) {
     g = l;
     if ((n - g | 0) < 3) {
      g = l;
      h = 42;
      break a;
     }
     i = a[l + 1 >> 0] | 0;
     h = a[l + 2 >> 0] | 0;
     switch (k | 0) {
     case 224:
      {
       if ((i & -32) << 24 >> 24 != -96) {
        h = 20;
        break b;
       }
       break;
      }
     case 237:
      {
       if ((i & -32) << 24 >> 24 != -128) {
        h = 22;
        break b;
       }
       break;
      }
     default:
      if ((i & -64) << 24 >> 24 != -128) {
       h = 24;
       break b;
      }
     }
     g = h & 255;
     if ((g & 192 | 0) != 128) {
      g = l;
      h = 42;
      break a;
     }
     if (((i & 255) << 6 & 4032 | k << 12 & 61440 | g & 63) >>> 0 > f >>> 0) {
      g = l;
      h = 42;
      break a;
     }
     g = l + 3 | 0;
     break;
    }
    if ((g & 255) >= 245) {
     g = l;
     h = 42;
     break a;
    }
    g = l;
    if ((n - g | 0) < 4) {
     g = l;
     h = 42;
     break a;
    }
    j = a[l + 1 >> 0] | 0;
    h = a[l + 2 >> 0] | 0;
    i = a[l + 3 >> 0] | 0;
    switch (k | 0) {
    case 240:
     {
      if ((j + 112 & 255) >= 48) {
       h = 32;
       break b;
      }
      break;
     }
    case 244:
     {
      if ((j & -16) << 24 >> 24 != -128) {
       h = 34;
       break b;
      }
      break;
     }
    default:
     if ((j & -64) << 24 >> 24 != -128) {
      h = 36;
      break b;
     }
    }
    h = h & 255;
    if ((h & 192 | 0) != 128) {
     g = l;
     h = 42;
     break a;
    }
    g = i & 255;
    if ((g & 192 | 0) != 128) {
     g = l;
     h = 42;
     break a;
    }
    if (((j & 255) << 12 & 258048 | k << 18 & 1835008 | h << 6 & 4032 | g & 63) >>> 0 > f >>> 0) {
     g = l;
     h = 42;
     break a;
    }
    g = l + 4 | 0;
   } while (0);
   m = m + 1 | 0;
   if (!(m >>> 0 < e >>> 0 & g >>> 0 < c >>> 0)) {
    h = 42;
    break a;
   } else l = g;
  }
  if ((h | 0) == 20) {
   g = g - b | 0;
   break;
  } else if ((h | 0) == 22) {
   g = g - b | 0;
   break;
  } else if ((h | 0) == 24) {
   g = g - b | 0;
   break;
  } else if ((h | 0) == 32) {
   g = g - b | 0;
   break;
  } else if ((h | 0) == 34) {
   g = g - b | 0;
   break;
  } else if ((h | 0) == 36) {
   g = g - b | 0;
   break;
  }
 } else h = 42; while (0);
 if ((h | 0) == 42) g = g - b | 0;
 return g | 0;
}

function Fo(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 l = a;
 j = b;
 k = j;
 h = d;
 n = e;
 i = n;
 if (!k) {
  g = (f | 0) != 0;
  if (!i) {
   if (g) {
    c[f >> 2] = (l >>> 0) % (h >>> 0);
    c[f + 4 >> 2] = 0;
   }
   n = 0;
   f = (l >>> 0) / (h >>> 0) >>> 0;
   return (D = n, f) | 0;
  } else {
   if (!g) {
    n = 0;
    f = 0;
    return (D = n, f) | 0;
   }
   c[f >> 2] = a | 0;
   c[f + 4 >> 2] = b & 0;
   n = 0;
   f = 0;
   return (D = n, f) | 0;
  }
 }
 g = (i | 0) == 0;
 do if (h) {
  if (!g) {
   g = (ba(i | 0) | 0) - (ba(k | 0) | 0) | 0;
   if (g >>> 0 <= 31) {
    m = g + 1 | 0;
    i = 31 - g | 0;
    b = g - 31 >> 31;
    h = m;
    a = l >>> (m >>> 0) & b | k << i;
    b = k >>> (m >>> 0) & b;
    g = 0;
    i = l << i;
    break;
   }
   if (!f) {
    n = 0;
    f = 0;
    return (D = n, f) | 0;
   }
   c[f >> 2] = a | 0;
   c[f + 4 >> 2] = j | b & 0;
   n = 0;
   f = 0;
   return (D = n, f) | 0;
  }
  g = h - 1 | 0;
  if (g & h) {
   i = (ba(h | 0) | 0) + 33 - (ba(k | 0) | 0) | 0;
   p = 64 - i | 0;
   m = 32 - i | 0;
   j = m >> 31;
   o = i - 32 | 0;
   b = o >> 31;
   h = i;
   a = m - 1 >> 31 & k >>> (o >>> 0) | (k << m | l >>> (i >>> 0)) & b;
   b = b & k >>> (i >>> 0);
   g = l << p & j;
   i = (k << p | l >>> (o >>> 0)) & j | l << m & i - 33 >> 31;
   break;
  }
  if (f) {
   c[f >> 2] = g & l;
   c[f + 4 >> 2] = 0;
  }
  if ((h | 0) == 1) {
   o = j | b & 0;
   p = a | 0 | 0;
   return (D = o, p) | 0;
  } else {
   p = yo(h | 0) | 0;
   o = k >>> (p >>> 0) | 0;
   p = k << 32 - p | l >>> (p >>> 0) | 0;
   return (D = o, p) | 0;
  }
 } else {
  if (g) {
   if (f) {
    c[f >> 2] = (k >>> 0) % (h >>> 0);
    c[f + 4 >> 2] = 0;
   }
   o = 0;
   p = (k >>> 0) / (h >>> 0) >>> 0;
   return (D = o, p) | 0;
  }
  if (!l) {
   if (f) {
    c[f >> 2] = 0;
    c[f + 4 >> 2] = (k >>> 0) % (i >>> 0);
   }
   o = 0;
   p = (k >>> 0) / (i >>> 0) >>> 0;
   return (D = o, p) | 0;
  }
  g = i - 1 | 0;
  if (!(g & i)) {
   if (f) {
    c[f >> 2] = a | 0;
    c[f + 4 >> 2] = g & k | b & 0;
   }
   o = 0;
   p = k >>> ((yo(i | 0) | 0) >>> 0);
   return (D = o, p) | 0;
  }
  g = (ba(i | 0) | 0) - (ba(k | 0) | 0) | 0;
  if (g >>> 0 <= 30) {
   b = g + 1 | 0;
   i = 31 - g | 0;
   h = b;
   a = k << i | l >>> (b >>> 0);
   b = k >>> (b >>> 0);
   g = 0;
   i = l << i;
   break;
  }
  if (!f) {
   o = 0;
   p = 0;
   return (D = o, p) | 0;
  }
  c[f >> 2] = a | 0;
  c[f + 4 >> 2] = j | b & 0;
  o = 0;
  p = 0;
  return (D = o, p) | 0;
 } while (0);
 if (!h) {
  k = i;
  j = 0;
  i = 0;
 } else {
  m = d | 0 | 0;
  l = n | e & 0;
  k = so(m | 0, l | 0, -1, -1) | 0;
  d = D;
  j = i;
  i = 0;
  do {
   e = j;
   j = g >>> 31 | j << 1;
   g = i | g << 1;
   e = a << 1 | e >>> 31 | 0;
   n = a >>> 31 | b << 1 | 0;
   qo(k, d, e, n) | 0;
   p = D;
   o = p >> 31 | ((p | 0) < 0 ? -1 : 0) << 1;
   i = o & 1;
   a = qo(e, n, o & m, (((p | 0) < 0 ? -1 : 0) >> 31 | ((p | 0) < 0 ? -1 : 0) << 1) & l) | 0;
   b = D;
   h = h - 1 | 0;
  } while ((h | 0) != 0);
  k = j;
  j = 0;
 }
 h = 0;
 if (f) {
  c[f >> 2] = a;
  c[f + 4 >> 2] = b;
 }
 o = (g | 0) >>> 31 | (k | h) << 1 | (h << 1 | g >>> 31) & 0 | j;
 p = (g << 1 | 0 >>> 31) & -2 | i;
 return (D = o, p) | 0;
}

function Ln(e, f, g, h, i, j, k, l) {
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 j = j | 0;
 k = k | 0;
 l = l | 0;
 var m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 c[g >> 2] = e;
 c[j >> 2] = h;
 if (l & 4) {
  e = c[g >> 2] | 0;
  l = f;
  if ((((l - e | 0) > 2 ? (a[e >> 0] | 0) == -17 : 0) ? (a[e + 1 >> 0] | 0) == -69 : 0) ? (a[e + 2 >> 0] | 0) == -65 : 0) {
   c[g >> 2] = e + 3;
   m = c[j >> 2] | 0;
  } else m = h;
 } else {
  m = h;
  l = f;
 }
 q = i;
 h = c[g >> 2] | 0;
 e = h >>> 0 < f >>> 0;
 a : do if (e & m >>> 0 < i >>> 0) while (1) {
  e = a[h >> 0] | 0;
  o = e & 255;
  if (o >>> 0 > k >>> 0) {
   e = 2;
   break a;
  }
  do if (e << 24 >> 24 > -1) {
   b[m >> 1] = e & 255;
   c[g >> 2] = h + 1;
  } else {
   if ((e & 255) < 194) {
    e = 2;
    break a;
   }
   if ((e & 255) < 224) {
    if ((l - h | 0) < 2) {
     e = 1;
     break a;
    }
    e = d[h + 1 >> 0] | 0;
    if ((e & 192 | 0) != 128) {
     e = 2;
     break a;
    }
    e = e & 63 | o << 6 & 1984;
    if (e >>> 0 > k >>> 0) {
     e = 2;
     break a;
    }
    b[m >> 1] = e;
    c[g >> 2] = h + 2;
    break;
   }
   if ((e & 255) < 240) {
    if ((l - h | 0) < 3) {
     e = 1;
     break a;
    }
    n = a[h + 1 >> 0] | 0;
    e = a[h + 2 >> 0] | 0;
    switch (o | 0) {
    case 224:
     {
      if ((n & -32) << 24 >> 24 != -96) {
       e = 2;
       break a;
      }
      break;
     }
    case 237:
     {
      if ((n & -32) << 24 >> 24 != -128) {
       e = 2;
       break a;
      }
      break;
     }
    default:
     if ((n & -64) << 24 >> 24 != -128) {
      e = 2;
      break a;
     }
    }
    e = e & 255;
    if ((e & 192 | 0) != 128) {
     e = 2;
     break a;
    }
    e = (n & 255) << 6 & 4032 | o << 12 | e & 63;
    if ((e & 65535) >>> 0 > k >>> 0) {
     e = 2;
     break a;
    }
    b[m >> 1] = e;
    c[g >> 2] = h + 3;
    break;
   }
   if ((e & 255) >= 245) {
    e = 2;
    break a;
   }
   if ((l - h | 0) < 4) {
    e = 1;
    break a;
   }
   n = a[h + 1 >> 0] | 0;
   e = a[h + 2 >> 0] | 0;
   h = a[h + 3 >> 0] | 0;
   switch (o | 0) {
   case 240:
    {
     if ((n + 112 & 255) >= 48) {
      e = 2;
      break a;
     }
     break;
    }
   case 244:
    {
     if ((n & -16) << 24 >> 24 != -128) {
      e = 2;
      break a;
     }
     break;
    }
   default:
    if ((n & -64) << 24 >> 24 != -128) {
     e = 2;
     break a;
    }
   }
   p = e & 255;
   if ((p & 192 | 0) != 128) {
    e = 2;
    break a;
   }
   e = h & 255;
   if ((e & 192 | 0) != 128) {
    e = 2;
    break a;
   }
   if ((q - m | 0) < 4) {
    e = 1;
    break a;
   }
   o = o & 7;
   h = n & 255;
   n = p << 6;
   e = e & 63;
   if ((h << 12 & 258048 | o << 18 | n & 4032 | e) >>> 0 > k >>> 0) {
    e = 2;
    break a;
   }
   b[m >> 1] = h << 2 & 60 | p >>> 4 & 3 | ((h >>> 4 & 3 | o << 2) << 6) + 16320 | 55296;
   p = m + 2 | 0;
   c[j >> 2] = p;
   b[p >> 1] = e | n & 960 | 56320;
   c[g >> 2] = (c[g >> 2] | 0) + 4;
  } while (0);
  m = (c[j >> 2] | 0) + 2 | 0;
  c[j >> 2] = m;
  h = c[g >> 2] | 0;
  e = h >>> 0 < f >>> 0;
  if (!(e & m >>> 0 < i >>> 0)) {
   r = 39;
   break;
  }
 } else r = 39; while (0);
 if ((r | 0) == 39) e = e & 1;
 return e | 0;
}

function Um(b, d, e, f, g, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0;
 C = i;
 i = i + 352 | 0;
 t = C + 208 | 0;
 k = C + 40 | 0;
 l = C + 36 | 0;
 B = C + 24 | 0;
 A = C + 12 | 0;
 y = C + 8 | 0;
 z = C + 48 | 0;
 w = C + 4 | 0;
 v = C;
 x = C + 337 | 0;
 u = C + 336 | 0;
 vh(B, f, t, k, l);
 c[A >> 2] = 0;
 c[A + 4 >> 2] = 0;
 c[A + 8 >> 2] = 0;
 if (!(a[A >> 0] & 1)) b = 10; else b = (c[A >> 2] & -2) + -1 | 0;
 ef(A, b, 0);
 q = A + 8 | 0;
 r = A + 1 | 0;
 f = (a[A >> 0] & 1) == 0 ? r : c[q >> 2] | 0;
 c[y >> 2] = f;
 c[w >> 2] = z;
 c[v >> 2] = 0;
 a[x >> 0] = 1;
 a[u >> 0] = 69;
 s = A + 4 | 0;
 p = c[k >> 2] | 0;
 o = c[l >> 2] | 0;
 k = c[d >> 2] | 0;
 a : while (1) {
  if (k) {
   b = c[k + 12 >> 2] | 0;
   if ((b | 0) == (c[k + 16 >> 2] | 0)) b = wb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else b = c[b >> 2] | 0;
   if ((b | 0) == -1) {
    c[d >> 2] = 0;
    k = 0;
    m = 1;
   } else m = 0;
  } else {
   k = 0;
   m = 1;
  }
  l = c[e >> 2] | 0;
  do if (l) {
   b = c[l + 12 >> 2] | 0;
   if ((b | 0) == (c[l + 16 >> 2] | 0)) b = wb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0; else b = c[b >> 2] | 0;
   if ((b | 0) != -1) if (m) break; else break a; else {
    c[e >> 2] = 0;
    D = 16;
    break;
   }
  } else D = 16; while (0);
  if ((D | 0) == 16) {
   D = 0;
   if (m) {
    l = 0;
    break;
   } else l = 0;
  }
  m = a[A >> 0] | 0;
  m = (m & 1) == 0 ? (m & 255) >>> 1 : c[s >> 2] | 0;
  if ((c[y >> 2] | 0) == (f + m | 0)) {
   ef(A, m << 1, 0);
   if (!(a[A >> 0] & 1)) b = 10; else b = (c[A >> 2] & -2) + -1 | 0;
   ef(A, b, 0);
   f = (a[A >> 0] & 1) == 0 ? r : c[q >> 2] | 0;
   c[y >> 2] = f + m;
  }
  m = k + 12 | 0;
  b = c[m >> 2] | 0;
  n = k + 16 | 0;
  if ((b | 0) == (c[n >> 2] | 0)) b = wb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else b = c[b >> 2] | 0;
  if (wh(b, x, u, f, y, p, o, B, z, w, v, t) | 0) break;
  b = c[m >> 2] | 0;
  if ((b | 0) == (c[n >> 2] | 0)) {
   wb[c[(c[k >> 2] | 0) + 40 >> 2] & 63](k) | 0;
   continue;
  } else {
   c[m >> 2] = b + 4;
   continue;
  }
 }
 u = a[B >> 0] | 0;
 b = c[w >> 2] | 0;
 if (!((a[x >> 0] | 0) == 0 ? 1 : (((u & 1) == 0 ? (u & 255) >>> 1 : c[B + 4 >> 2] | 0) | 0) == 0) ? (b - z | 0) < 160 : 0) {
  v = c[v >> 2] | 0;
  x = b + 4 | 0;
  c[w >> 2] = x;
  c[b >> 2] = v;
  b = x;
 }
 h[j >> 3] = +ao(f, c[y >> 2] | 0, g);
 $j(B, z, b, g);
 if (k) {
  b = c[k + 12 >> 2] | 0;
  if ((b | 0) == (c[k + 16 >> 2] | 0)) b = wb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else b = c[b >> 2] | 0;
  if ((b | 0) == -1) {
   c[d >> 2] = 0;
   f = 1;
  } else f = 0;
 } else f = 1;
 do if (l) {
  b = c[l + 12 >> 2] | 0;
  if ((b | 0) == (c[l + 16 >> 2] | 0)) b = wb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0; else b = c[b >> 2] | 0;
  if ((b | 0) != -1) if (f) break; else {
   D = 46;
   break;
  } else {
   c[e >> 2] = 0;
   D = 44;
   break;
  }
 } else D = 44; while (0);
 if ((D | 0) == 44 ? f : 0) D = 46;
 if ((D | 0) == 46) c[g >> 2] = c[g >> 2] | 2;
 D = c[d >> 2] | 0;
 bf(A);
 bf(B);
 i = C;
 return D | 0;
}

function Tm(b, d, e, f, g, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0;
 C = i;
 i = i + 352 | 0;
 t = C + 208 | 0;
 k = C + 40 | 0;
 l = C + 36 | 0;
 B = C + 24 | 0;
 A = C + 12 | 0;
 y = C + 8 | 0;
 z = C + 48 | 0;
 w = C + 4 | 0;
 v = C;
 x = C + 337 | 0;
 u = C + 336 | 0;
 vh(B, f, t, k, l);
 c[A >> 2] = 0;
 c[A + 4 >> 2] = 0;
 c[A + 8 >> 2] = 0;
 if (!(a[A >> 0] & 1)) b = 10; else b = (c[A >> 2] & -2) + -1 | 0;
 ef(A, b, 0);
 q = A + 8 | 0;
 r = A + 1 | 0;
 f = (a[A >> 0] & 1) == 0 ? r : c[q >> 2] | 0;
 c[y >> 2] = f;
 c[w >> 2] = z;
 c[v >> 2] = 0;
 a[x >> 0] = 1;
 a[u >> 0] = 69;
 s = A + 4 | 0;
 p = c[k >> 2] | 0;
 o = c[l >> 2] | 0;
 k = c[d >> 2] | 0;
 a : while (1) {
  if (k) {
   b = c[k + 12 >> 2] | 0;
   if ((b | 0) == (c[k + 16 >> 2] | 0)) b = wb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else b = c[b >> 2] | 0;
   if ((b | 0) == -1) {
    c[d >> 2] = 0;
    k = 0;
    m = 1;
   } else m = 0;
  } else {
   k = 0;
   m = 1;
  }
  l = c[e >> 2] | 0;
  do if (l) {
   b = c[l + 12 >> 2] | 0;
   if ((b | 0) == (c[l + 16 >> 2] | 0)) b = wb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0; else b = c[b >> 2] | 0;
   if ((b | 0) != -1) if (m) break; else break a; else {
    c[e >> 2] = 0;
    D = 16;
    break;
   }
  } else D = 16; while (0);
  if ((D | 0) == 16) {
   D = 0;
   if (m) {
    l = 0;
    break;
   } else l = 0;
  }
  m = a[A >> 0] | 0;
  m = (m & 1) == 0 ? (m & 255) >>> 1 : c[s >> 2] | 0;
  if ((c[y >> 2] | 0) == (f + m | 0)) {
   ef(A, m << 1, 0);
   if (!(a[A >> 0] & 1)) b = 10; else b = (c[A >> 2] & -2) + -1 | 0;
   ef(A, b, 0);
   f = (a[A >> 0] & 1) == 0 ? r : c[q >> 2] | 0;
   c[y >> 2] = f + m;
  }
  m = k + 12 | 0;
  b = c[m >> 2] | 0;
  n = k + 16 | 0;
  if ((b | 0) == (c[n >> 2] | 0)) b = wb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else b = c[b >> 2] | 0;
  if (wh(b, x, u, f, y, p, o, B, z, w, v, t) | 0) break;
  b = c[m >> 2] | 0;
  if ((b | 0) == (c[n >> 2] | 0)) {
   wb[c[(c[k >> 2] | 0) + 40 >> 2] & 63](k) | 0;
   continue;
  } else {
   c[m >> 2] = b + 4;
   continue;
  }
 }
 u = a[B >> 0] | 0;
 b = c[w >> 2] | 0;
 if (!((a[x >> 0] | 0) == 0 ? 1 : (((u & 1) == 0 ? (u & 255) >>> 1 : c[B + 4 >> 2] | 0) | 0) == 0) ? (b - z | 0) < 160 : 0) {
  v = c[v >> 2] | 0;
  x = b + 4 | 0;
  c[w >> 2] = x;
  c[b >> 2] = v;
  b = x;
 }
 h[j >> 3] = +bo(f, c[y >> 2] | 0, g);
 $j(B, z, b, g);
 if (k) {
  b = c[k + 12 >> 2] | 0;
  if ((b | 0) == (c[k + 16 >> 2] | 0)) b = wb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else b = c[b >> 2] | 0;
  if ((b | 0) == -1) {
   c[d >> 2] = 0;
   f = 1;
  } else f = 0;
 } else f = 1;
 do if (l) {
  b = c[l + 12 >> 2] | 0;
  if ((b | 0) == (c[l + 16 >> 2] | 0)) b = wb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0; else b = c[b >> 2] | 0;
  if ((b | 0) != -1) if (f) break; else {
   D = 46;
   break;
  } else {
   c[e >> 2] = 0;
   D = 44;
   break;
  }
 } else D = 44; while (0);
 if ((D | 0) == 44 ? f : 0) D = 46;
 if ((D | 0) == 46) c[g >> 2] = c[g >> 2] | 2;
 D = c[d >> 2] | 0;
 bf(A);
 bf(B);
 i = C;
 return D | 0;
}

function Sm(b, d, e, f, h, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0;
 C = i;
 i = i + 352 | 0;
 t = C + 208 | 0;
 k = C + 40 | 0;
 l = C + 36 | 0;
 B = C + 24 | 0;
 A = C + 12 | 0;
 y = C + 8 | 0;
 z = C + 48 | 0;
 w = C + 4 | 0;
 v = C;
 x = C + 337 | 0;
 u = C + 336 | 0;
 vh(B, f, t, k, l);
 c[A >> 2] = 0;
 c[A + 4 >> 2] = 0;
 c[A + 8 >> 2] = 0;
 if (!(a[A >> 0] & 1)) b = 10; else b = (c[A >> 2] & -2) + -1 | 0;
 ef(A, b, 0);
 q = A + 8 | 0;
 r = A + 1 | 0;
 f = (a[A >> 0] & 1) == 0 ? r : c[q >> 2] | 0;
 c[y >> 2] = f;
 c[w >> 2] = z;
 c[v >> 2] = 0;
 a[x >> 0] = 1;
 a[u >> 0] = 69;
 s = A + 4 | 0;
 p = c[k >> 2] | 0;
 o = c[l >> 2] | 0;
 k = c[d >> 2] | 0;
 a : while (1) {
  if (k) {
   b = c[k + 12 >> 2] | 0;
   if ((b | 0) == (c[k + 16 >> 2] | 0)) b = wb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else b = c[b >> 2] | 0;
   if ((b | 0) == -1) {
    c[d >> 2] = 0;
    k = 0;
    m = 1;
   } else m = 0;
  } else {
   k = 0;
   m = 1;
  }
  l = c[e >> 2] | 0;
  do if (l) {
   b = c[l + 12 >> 2] | 0;
   if ((b | 0) == (c[l + 16 >> 2] | 0)) b = wb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0; else b = c[b >> 2] | 0;
   if ((b | 0) != -1) if (m) break; else break a; else {
    c[e >> 2] = 0;
    D = 16;
    break;
   }
  } else D = 16; while (0);
  if ((D | 0) == 16) {
   D = 0;
   if (m) {
    l = 0;
    break;
   } else l = 0;
  }
  m = a[A >> 0] | 0;
  m = (m & 1) == 0 ? (m & 255) >>> 1 : c[s >> 2] | 0;
  if ((c[y >> 2] | 0) == (f + m | 0)) {
   ef(A, m << 1, 0);
   if (!(a[A >> 0] & 1)) b = 10; else b = (c[A >> 2] & -2) + -1 | 0;
   ef(A, b, 0);
   f = (a[A >> 0] & 1) == 0 ? r : c[q >> 2] | 0;
   c[y >> 2] = f + m;
  }
  m = k + 12 | 0;
  b = c[m >> 2] | 0;
  n = k + 16 | 0;
  if ((b | 0) == (c[n >> 2] | 0)) b = wb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else b = c[b >> 2] | 0;
  if (wh(b, x, u, f, y, p, o, B, z, w, v, t) | 0) break;
  b = c[m >> 2] | 0;
  if ((b | 0) == (c[n >> 2] | 0)) {
   wb[c[(c[k >> 2] | 0) + 40 >> 2] & 63](k) | 0;
   continue;
  } else {
   c[m >> 2] = b + 4;
   continue;
  }
 }
 u = a[B >> 0] | 0;
 b = c[w >> 2] | 0;
 if (!((a[x >> 0] | 0) == 0 ? 1 : (((u & 1) == 0 ? (u & 255) >>> 1 : c[B + 4 >> 2] | 0) | 0) == 0) ? (b - z | 0) < 160 : 0) {
  v = c[v >> 2] | 0;
  x = b + 4 | 0;
  c[w >> 2] = x;
  c[b >> 2] = v;
  b = x;
 }
 g[j >> 2] = +co(f, c[y >> 2] | 0, h);
 $j(B, z, b, h);
 if (k) {
  b = c[k + 12 >> 2] | 0;
  if ((b | 0) == (c[k + 16 >> 2] | 0)) b = wb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else b = c[b >> 2] | 0;
  if ((b | 0) == -1) {
   c[d >> 2] = 0;
   f = 1;
  } else f = 0;
 } else f = 1;
 do if (l) {
  b = c[l + 12 >> 2] | 0;
  if ((b | 0) == (c[l + 16 >> 2] | 0)) b = wb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0; else b = c[b >> 2] | 0;
  if ((b | 0) != -1) if (f) break; else {
   D = 46;
   break;
  } else {
   c[e >> 2] = 0;
   D = 44;
   break;
  }
 } else D = 44; while (0);
 if ((D | 0) == 44 ? f : 0) D = 46;
 if ((D | 0) == 46) c[h >> 2] = c[h >> 2] | 2;
 D = c[d >> 2] | 0;
 bf(A);
 bf(B);
 i = C;
 return D | 0;
}

function Rm(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0;
 z = i;
 i = i + 320 | 0;
 r = z + 208 | 0;
 j = z + 200 | 0;
 y = z + 24 | 0;
 x = z + 12 | 0;
 v = z + 8 | 0;
 w = z + 40 | 0;
 t = z + 4 | 0;
 s = z;
 u = km(f) | 0;
 uh(y, f, r, j);
 c[x >> 2] = 0;
 c[x + 4 >> 2] = 0;
 c[x + 8 >> 2] = 0;
 if (!(a[x >> 0] & 1)) b = 10; else b = (c[x >> 2] & -2) + -1 | 0;
 ef(x, b, 0);
 o = x + 8 | 0;
 p = x + 1 | 0;
 f = (a[x >> 0] & 1) == 0 ? p : c[o >> 2] | 0;
 c[v >> 2] = f;
 c[t >> 2] = w;
 c[s >> 2] = 0;
 q = x + 4 | 0;
 n = c[j >> 2] | 0;
 j = c[d >> 2] | 0;
 a : while (1) {
  if (j) {
   b = c[j + 12 >> 2] | 0;
   if ((b | 0) == (c[j + 16 >> 2] | 0)) b = wb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else b = c[b >> 2] | 0;
   if ((b | 0) == -1) {
    c[d >> 2] = 0;
    j = 0;
    l = 1;
   } else l = 0;
  } else {
   j = 0;
   l = 1;
  }
  k = c[e >> 2] | 0;
  do if (k) {
   b = c[k + 12 >> 2] | 0;
   if ((b | 0) == (c[k + 16 >> 2] | 0)) b = wb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else b = c[b >> 2] | 0;
   if ((b | 0) != -1) if (l) {
    m = k;
    break;
   } else break a; else {
    c[e >> 2] = 0;
    A = 16;
    break;
   }
  } else A = 16; while (0);
  if ((A | 0) == 16) {
   A = 0;
   if (l) {
    k = 0;
    break;
   } else m = 0;
  }
  k = a[x >> 0] | 0;
  k = (k & 1) == 0 ? (k & 255) >>> 1 : c[q >> 2] | 0;
  if ((c[v >> 2] | 0) == (f + k | 0)) {
   ef(x, k << 1, 0);
   if (!(a[x >> 0] & 1)) b = 10; else b = (c[x >> 2] & -2) + -1 | 0;
   ef(x, b, 0);
   f = (a[x >> 0] & 1) == 0 ? p : c[o >> 2] | 0;
   c[v >> 2] = f + k;
  }
  k = j + 12 | 0;
  b = c[k >> 2] | 0;
  l = j + 16 | 0;
  if ((b | 0) == (c[l >> 2] | 0)) b = wb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else b = c[b >> 2] | 0;
  if (qh(b, u, f, v, s, n, y, w, t, r) | 0) {
   k = m;
   break;
  }
  b = c[k >> 2] | 0;
  if ((b | 0) == (c[l >> 2] | 0)) {
   wb[c[(c[j >> 2] | 0) + 40 >> 2] & 63](j) | 0;
   continue;
  } else {
   c[k >> 2] = b + 4;
   continue;
  }
 }
 r = a[y >> 0] | 0;
 b = c[t >> 2] | 0;
 if ((((r & 1) == 0 ? (r & 255) >>> 1 : c[y + 4 >> 2] | 0) | 0) != 0 ? (b - w | 0) < 160 : 0) {
  r = c[s >> 2] | 0;
  s = b + 4 | 0;
  c[t >> 2] = s;
  c[b >> 2] = r;
  b = s;
 }
 v = eo(f, c[v >> 2] | 0, g, u) | 0;
 c[h >> 2] = v;
 c[h + 4 >> 2] = D;
 $j(y, w, b, g);
 if (j) {
  b = c[j + 12 >> 2] | 0;
  if ((b | 0) == (c[j + 16 >> 2] | 0)) b = wb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else b = c[b >> 2] | 0;
  if ((b | 0) == -1) {
   c[d >> 2] = 0;
   f = 1;
  } else f = 0;
 } else f = 1;
 do if (k) {
  b = c[k + 12 >> 2] | 0;
  if ((b | 0) == (c[k + 16 >> 2] | 0)) b = wb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else b = c[b >> 2] | 0;
  if ((b | 0) != -1) if (f) break; else {
   A = 46;
   break;
  } else {
   c[e >> 2] = 0;
   A = 44;
   break;
  }
 } else A = 44; while (0);
 if ((A | 0) == 44 ? f : 0) A = 46;
 if ((A | 0) == 46) c[g >> 2] = c[g >> 2] | 2;
 A = c[d >> 2] | 0;
 bf(x);
 bf(y);
 i = z;
 return A | 0;
}

function Nm(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0;
 z = i;
 i = i + 320 | 0;
 r = z + 208 | 0;
 j = z + 200 | 0;
 y = z + 24 | 0;
 x = z + 12 | 0;
 v = z + 8 | 0;
 w = z + 40 | 0;
 t = z + 4 | 0;
 s = z;
 u = km(f) | 0;
 uh(y, f, r, j);
 c[x >> 2] = 0;
 c[x + 4 >> 2] = 0;
 c[x + 8 >> 2] = 0;
 if (!(a[x >> 0] & 1)) b = 10; else b = (c[x >> 2] & -2) + -1 | 0;
 ef(x, b, 0);
 o = x + 8 | 0;
 p = x + 1 | 0;
 f = (a[x >> 0] & 1) == 0 ? p : c[o >> 2] | 0;
 c[v >> 2] = f;
 c[t >> 2] = w;
 c[s >> 2] = 0;
 q = x + 4 | 0;
 n = c[j >> 2] | 0;
 j = c[d >> 2] | 0;
 a : while (1) {
  if (j) {
   b = c[j + 12 >> 2] | 0;
   if ((b | 0) == (c[j + 16 >> 2] | 0)) b = wb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else b = c[b >> 2] | 0;
   if ((b | 0) == -1) {
    c[d >> 2] = 0;
    j = 0;
    l = 1;
   } else l = 0;
  } else {
   j = 0;
   l = 1;
  }
  k = c[e >> 2] | 0;
  do if (k) {
   b = c[k + 12 >> 2] | 0;
   if ((b | 0) == (c[k + 16 >> 2] | 0)) b = wb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else b = c[b >> 2] | 0;
   if ((b | 0) != -1) if (l) {
    m = k;
    break;
   } else break a; else {
    c[e >> 2] = 0;
    A = 16;
    break;
   }
  } else A = 16; while (0);
  if ((A | 0) == 16) {
   A = 0;
   if (l) {
    k = 0;
    break;
   } else m = 0;
  }
  k = a[x >> 0] | 0;
  k = (k & 1) == 0 ? (k & 255) >>> 1 : c[q >> 2] | 0;
  if ((c[v >> 2] | 0) == (f + k | 0)) {
   ef(x, k << 1, 0);
   if (!(a[x >> 0] & 1)) b = 10; else b = (c[x >> 2] & -2) + -1 | 0;
   ef(x, b, 0);
   f = (a[x >> 0] & 1) == 0 ? p : c[o >> 2] | 0;
   c[v >> 2] = f + k;
  }
  k = j + 12 | 0;
  b = c[k >> 2] | 0;
  l = j + 16 | 0;
  if ((b | 0) == (c[l >> 2] | 0)) b = wb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else b = c[b >> 2] | 0;
  if (qh(b, u, f, v, s, n, y, w, t, r) | 0) {
   k = m;
   break;
  }
  b = c[k >> 2] | 0;
  if ((b | 0) == (c[l >> 2] | 0)) {
   wb[c[(c[j >> 2] | 0) + 40 >> 2] & 63](j) | 0;
   continue;
  } else {
   c[k >> 2] = b + 4;
   continue;
  }
 }
 r = a[y >> 0] | 0;
 b = c[t >> 2] | 0;
 if ((((r & 1) == 0 ? (r & 255) >>> 1 : c[y + 4 >> 2] | 0) | 0) != 0 ? (b - w | 0) < 160 : 0) {
  r = c[s >> 2] | 0;
  s = b + 4 | 0;
  c[t >> 2] = s;
  c[b >> 2] = r;
  b = s;
 }
 v = io(f, c[v >> 2] | 0, g, u) | 0;
 c[h >> 2] = v;
 c[h + 4 >> 2] = D;
 $j(y, w, b, g);
 if (j) {
  b = c[j + 12 >> 2] | 0;
  if ((b | 0) == (c[j + 16 >> 2] | 0)) b = wb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else b = c[b >> 2] | 0;
  if ((b | 0) == -1) {
   c[d >> 2] = 0;
   f = 1;
  } else f = 0;
 } else f = 1;
 do if (k) {
  b = c[k + 12 >> 2] | 0;
  if ((b | 0) == (c[k + 16 >> 2] | 0)) b = wb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else b = c[b >> 2] | 0;
  if ((b | 0) != -1) if (f) break; else {
   A = 46;
   break;
  } else {
   c[e >> 2] = 0;
   A = 44;
   break;
  }
 } else A = 44; while (0);
 if ((A | 0) == 44 ? f : 0) A = 46;
 if ((A | 0) == 46) c[g >> 2] = c[g >> 2] | 2;
 A = c[d >> 2] | 0;
 bf(x);
 bf(y);
 i = z;
 return A | 0;
}

function ph(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0;
 y = i;
 i = i + 320 | 0;
 v = y;
 o = y + 208 | 0;
 x = y + 192 | 0;
 s = y + 28 | 0;
 w = y + 16 | 0;
 u = y + 12 | 0;
 q = y + 32 | 0;
 r = y + 8 | 0;
 p = y + 4 | 0;
 c[x >> 2] = 0;
 c[x + 4 >> 2] = 0;
 c[x + 8 >> 2] = 0;
 t = Af(f) | 0;
 c[s >> 2] = t;
 s = Ok(s, 9328) | 0;
 Ab[c[(c[s >> 2] | 0) + 48 >> 2] & 7](s, 19978, 20004, o) | 0;
 mo(t) | 0;
 c[w >> 2] = 0;
 c[w + 4 >> 2] = 0;
 c[w + 8 >> 2] = 0;
 if (!(a[w >> 0] & 1)) b = 10; else b = (c[w >> 2] & -2) + -1 | 0;
 ef(w, b, 0);
 s = w + 8 | 0;
 t = w + 1 | 0;
 b = (a[w >> 0] & 1) == 0 ? t : c[s >> 2] | 0;
 c[u >> 2] = b;
 c[r >> 2] = q;
 c[p >> 2] = 0;
 n = w + 4 | 0;
 j = c[d >> 2] | 0;
 a : while (1) {
  if (j) {
   f = c[j + 12 >> 2] | 0;
   if ((f | 0) == (c[j + 16 >> 2] | 0)) f = wb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else f = c[f >> 2] | 0;
   if ((f | 0) == -1) {
    c[d >> 2] = 0;
    f = 0;
    l = 1;
   } else {
    f = j;
    l = 0;
   }
  } else {
   f = 0;
   l = 1;
  }
  j = c[e >> 2] | 0;
  do if (j) {
   k = c[j + 12 >> 2] | 0;
   if ((k | 0) == (c[j + 16 >> 2] | 0)) k = wb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else k = c[k >> 2] | 0;
   if ((k | 0) != -1) if (l) break; else break a; else {
    c[e >> 2] = 0;
    z = 16;
    break;
   }
  } else z = 16; while (0);
  if ((z | 0) == 16) {
   z = 0;
   if (l) {
    j = 0;
    break;
   } else j = 0;
  }
  k = a[w >> 0] | 0;
  k = (k & 1) == 0 ? (k & 255) >>> 1 : c[n >> 2] | 0;
  if ((c[u >> 2] | 0) == (b + k | 0)) {
   ef(w, k << 1, 0);
   if (!(a[w >> 0] & 1)) b = 10; else b = (c[w >> 2] & -2) + -1 | 0;
   ef(w, b, 0);
   b = (a[w >> 0] & 1) == 0 ? t : c[s >> 2] | 0;
   c[u >> 2] = b + k;
  }
  l = f + 12 | 0;
  k = c[l >> 2] | 0;
  m = f + 16 | 0;
  if ((k | 0) == (c[m >> 2] | 0)) k = wb[c[(c[f >> 2] | 0) + 36 >> 2] & 63](f) | 0; else k = c[k >> 2] | 0;
  if (qh(k, 16, b, u, p, 0, x, q, r, o) | 0) break;
  j = c[l >> 2] | 0;
  if ((j | 0) == (c[m >> 2] | 0)) {
   wb[c[(c[f >> 2] | 0) + 40 >> 2] & 63](f) | 0;
   j = f;
   continue;
  } else {
   c[l >> 2] = j + 4;
   j = f;
   continue;
  }
 }
 ef(w, (c[u >> 2] | 0) - b | 0, 0);
 t = (a[w >> 0] & 1) == 0 ? t : c[s >> 2] | 0;
 u = ch() | 0;
 c[v >> 2] = h;
 if ((Km(t, u, 21362, v) | 0) != 1) c[g >> 2] = 4;
 if (f) {
  b = c[f + 12 >> 2] | 0;
  if ((b | 0) == (c[f + 16 >> 2] | 0)) b = wb[c[(c[f >> 2] | 0) + 36 >> 2] & 63](f) | 0; else b = c[b >> 2] | 0;
  if ((b | 0) == -1) {
   c[d >> 2] = 0;
   f = 1;
  } else f = 0;
 } else f = 1;
 do if (j) {
  b = c[j + 12 >> 2] | 0;
  if ((b | 0) == (c[j + 16 >> 2] | 0)) b = wb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else b = c[b >> 2] | 0;
  if ((b | 0) != -1) if (f) break; else {
   z = 45;
   break;
  } else {
   c[e >> 2] = 0;
   z = 43;
   break;
  }
 } else z = 43; while (0);
 if ((z | 0) == 43 ? f : 0) z = 45;
 if ((z | 0) == 45) c[g >> 2] = c[g >> 2] | 2;
 z = c[d >> 2] | 0;
 bf(w);
 bf(x);
 i = y;
 return z | 0;
}

function Qm(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0;
 z = i;
 i = i + 320 | 0;
 r = z + 208 | 0;
 j = z + 200 | 0;
 y = z + 24 | 0;
 x = z + 12 | 0;
 v = z + 8 | 0;
 w = z + 40 | 0;
 t = z + 4 | 0;
 s = z;
 u = km(f) | 0;
 uh(y, f, r, j);
 c[x >> 2] = 0;
 c[x + 4 >> 2] = 0;
 c[x + 8 >> 2] = 0;
 if (!(a[x >> 0] & 1)) b = 10; else b = (c[x >> 2] & -2) + -1 | 0;
 ef(x, b, 0);
 o = x + 8 | 0;
 p = x + 1 | 0;
 f = (a[x >> 0] & 1) == 0 ? p : c[o >> 2] | 0;
 c[v >> 2] = f;
 c[t >> 2] = w;
 c[s >> 2] = 0;
 q = x + 4 | 0;
 n = c[j >> 2] | 0;
 j = c[d >> 2] | 0;
 a : while (1) {
  if (j) {
   b = c[j + 12 >> 2] | 0;
   if ((b | 0) == (c[j + 16 >> 2] | 0)) b = wb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else b = c[b >> 2] | 0;
   if ((b | 0) == -1) {
    c[d >> 2] = 0;
    j = 0;
    l = 1;
   } else l = 0;
  } else {
   j = 0;
   l = 1;
  }
  k = c[e >> 2] | 0;
  do if (k) {
   b = c[k + 12 >> 2] | 0;
   if ((b | 0) == (c[k + 16 >> 2] | 0)) b = wb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else b = c[b >> 2] | 0;
   if ((b | 0) != -1) if (l) {
    m = k;
    break;
   } else break a; else {
    c[e >> 2] = 0;
    A = 16;
    break;
   }
  } else A = 16; while (0);
  if ((A | 0) == 16) {
   A = 0;
   if (l) {
    k = 0;
    break;
   } else m = 0;
  }
  k = a[x >> 0] | 0;
  k = (k & 1) == 0 ? (k & 255) >>> 1 : c[q >> 2] | 0;
  if ((c[v >> 2] | 0) == (f + k | 0)) {
   ef(x, k << 1, 0);
   if (!(a[x >> 0] & 1)) b = 10; else b = (c[x >> 2] & -2) + -1 | 0;
   ef(x, b, 0);
   f = (a[x >> 0] & 1) == 0 ? p : c[o >> 2] | 0;
   c[v >> 2] = f + k;
  }
  k = j + 12 | 0;
  b = c[k >> 2] | 0;
  l = j + 16 | 0;
  if ((b | 0) == (c[l >> 2] | 0)) b = wb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else b = c[b >> 2] | 0;
  if (qh(b, u, f, v, s, n, y, w, t, r) | 0) {
   k = m;
   break;
  }
  b = c[k >> 2] | 0;
  if ((b | 0) == (c[l >> 2] | 0)) {
   wb[c[(c[j >> 2] | 0) + 40 >> 2] & 63](j) | 0;
   continue;
  } else {
   c[k >> 2] = b + 4;
   continue;
  }
 }
 r = a[y >> 0] | 0;
 b = c[t >> 2] | 0;
 if ((((r & 1) == 0 ? (r & 255) >>> 1 : c[y + 4 >> 2] | 0) | 0) != 0 ? (b - w | 0) < 160 : 0) {
  r = c[s >> 2] | 0;
  s = b + 4 | 0;
  c[t >> 2] = s;
  c[b >> 2] = r;
  b = s;
 }
 c[h >> 2] = fo(f, c[v >> 2] | 0, g, u) | 0;
 $j(y, w, b, g);
 if (j) {
  b = c[j + 12 >> 2] | 0;
  if ((b | 0) == (c[j + 16 >> 2] | 0)) b = wb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else b = c[b >> 2] | 0;
  if ((b | 0) == -1) {
   c[d >> 2] = 0;
   f = 1;
  } else f = 0;
 } else f = 1;
 do if (k) {
  b = c[k + 12 >> 2] | 0;
  if ((b | 0) == (c[k + 16 >> 2] | 0)) b = wb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else b = c[b >> 2] | 0;
  if ((b | 0) != -1) if (f) break; else {
   A = 46;
   break;
  } else {
   c[e >> 2] = 0;
   A = 44;
   break;
  }
 } else A = 44; while (0);
 if ((A | 0) == 44 ? f : 0) A = 46;
 if ((A | 0) == 46) c[g >> 2] = c[g >> 2] | 2;
 A = c[d >> 2] | 0;
 bf(x);
 bf(y);
 i = z;
 return A | 0;
}

function Pm(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0;
 z = i;
 i = i + 320 | 0;
 r = z + 208 | 0;
 j = z + 200 | 0;
 y = z + 24 | 0;
 x = z + 12 | 0;
 v = z + 8 | 0;
 w = z + 40 | 0;
 t = z + 4 | 0;
 s = z;
 u = km(f) | 0;
 uh(y, f, r, j);
 c[x >> 2] = 0;
 c[x + 4 >> 2] = 0;
 c[x + 8 >> 2] = 0;
 if (!(a[x >> 0] & 1)) b = 10; else b = (c[x >> 2] & -2) + -1 | 0;
 ef(x, b, 0);
 o = x + 8 | 0;
 p = x + 1 | 0;
 f = (a[x >> 0] & 1) == 0 ? p : c[o >> 2] | 0;
 c[v >> 2] = f;
 c[t >> 2] = w;
 c[s >> 2] = 0;
 q = x + 4 | 0;
 n = c[j >> 2] | 0;
 j = c[d >> 2] | 0;
 a : while (1) {
  if (j) {
   b = c[j + 12 >> 2] | 0;
   if ((b | 0) == (c[j + 16 >> 2] | 0)) b = wb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else b = c[b >> 2] | 0;
   if ((b | 0) == -1) {
    c[d >> 2] = 0;
    j = 0;
    l = 1;
   } else l = 0;
  } else {
   j = 0;
   l = 1;
  }
  k = c[e >> 2] | 0;
  do if (k) {
   b = c[k + 12 >> 2] | 0;
   if ((b | 0) == (c[k + 16 >> 2] | 0)) b = wb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else b = c[b >> 2] | 0;
   if ((b | 0) != -1) if (l) {
    m = k;
    break;
   } else break a; else {
    c[e >> 2] = 0;
    A = 16;
    break;
   }
  } else A = 16; while (0);
  if ((A | 0) == 16) {
   A = 0;
   if (l) {
    k = 0;
    break;
   } else m = 0;
  }
  k = a[x >> 0] | 0;
  k = (k & 1) == 0 ? (k & 255) >>> 1 : c[q >> 2] | 0;
  if ((c[v >> 2] | 0) == (f + k | 0)) {
   ef(x, k << 1, 0);
   if (!(a[x >> 0] & 1)) b = 10; else b = (c[x >> 2] & -2) + -1 | 0;
   ef(x, b, 0);
   f = (a[x >> 0] & 1) == 0 ? p : c[o >> 2] | 0;
   c[v >> 2] = f + k;
  }
  k = j + 12 | 0;
  b = c[k >> 2] | 0;
  l = j + 16 | 0;
  if ((b | 0) == (c[l >> 2] | 0)) b = wb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else b = c[b >> 2] | 0;
  if (qh(b, u, f, v, s, n, y, w, t, r) | 0) {
   k = m;
   break;
  }
  b = c[k >> 2] | 0;
  if ((b | 0) == (c[l >> 2] | 0)) {
   wb[c[(c[j >> 2] | 0) + 40 >> 2] & 63](j) | 0;
   continue;
  } else {
   c[k >> 2] = b + 4;
   continue;
  }
 }
 r = a[y >> 0] | 0;
 b = c[t >> 2] | 0;
 if ((((r & 1) == 0 ? (r & 255) >>> 1 : c[y + 4 >> 2] | 0) | 0) != 0 ? (b - w | 0) < 160 : 0) {
  r = c[s >> 2] | 0;
  s = b + 4 | 0;
  c[t >> 2] = s;
  c[b >> 2] = r;
  b = s;
 }
 c[h >> 2] = go(f, c[v >> 2] | 0, g, u) | 0;
 $j(y, w, b, g);
 if (j) {
  b = c[j + 12 >> 2] | 0;
  if ((b | 0) == (c[j + 16 >> 2] | 0)) b = wb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else b = c[b >> 2] | 0;
  if ((b | 0) == -1) {
   c[d >> 2] = 0;
   f = 1;
  } else f = 0;
 } else f = 1;
 do if (k) {
  b = c[k + 12 >> 2] | 0;
  if ((b | 0) == (c[k + 16 >> 2] | 0)) b = wb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else b = c[b >> 2] | 0;
  if ((b | 0) != -1) if (f) break; else {
   A = 46;
   break;
  } else {
   c[e >> 2] = 0;
   A = 44;
   break;
  }
 } else A = 44; while (0);
 if ((A | 0) == 44 ? f : 0) A = 46;
 if ((A | 0) == 46) c[g >> 2] = c[g >> 2] | 2;
 A = c[d >> 2] | 0;
 bf(x);
 bf(y);
 i = z;
 return A | 0;
}

function Om(d, e, f, g, h, j) {
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0;
 A = i;
 i = i + 320 | 0;
 s = A + 208 | 0;
 k = A + 200 | 0;
 z = A + 24 | 0;
 y = A + 12 | 0;
 w = A + 8 | 0;
 x = A + 40 | 0;
 u = A + 4 | 0;
 t = A;
 v = km(g) | 0;
 uh(z, g, s, k);
 c[y >> 2] = 0;
 c[y + 4 >> 2] = 0;
 c[y + 8 >> 2] = 0;
 if (!(a[y >> 0] & 1)) d = 10; else d = (c[y >> 2] & -2) + -1 | 0;
 ef(y, d, 0);
 p = y + 8 | 0;
 q = y + 1 | 0;
 g = (a[y >> 0] & 1) == 0 ? q : c[p >> 2] | 0;
 c[w >> 2] = g;
 c[u >> 2] = x;
 c[t >> 2] = 0;
 r = y + 4 | 0;
 o = c[k >> 2] | 0;
 k = c[e >> 2] | 0;
 a : while (1) {
  if (k) {
   d = c[k + 12 >> 2] | 0;
   if ((d | 0) == (c[k + 16 >> 2] | 0)) d = wb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else d = c[d >> 2] | 0;
   if ((d | 0) == -1) {
    c[e >> 2] = 0;
    k = 0;
    m = 1;
   } else m = 0;
  } else {
   k = 0;
   m = 1;
  }
  l = c[f >> 2] | 0;
  do if (l) {
   d = c[l + 12 >> 2] | 0;
   if ((d | 0) == (c[l + 16 >> 2] | 0)) d = wb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0; else d = c[d >> 2] | 0;
   if ((d | 0) != -1) if (m) {
    n = l;
    break;
   } else break a; else {
    c[f >> 2] = 0;
    B = 16;
    break;
   }
  } else B = 16; while (0);
  if ((B | 0) == 16) {
   B = 0;
   if (m) {
    l = 0;
    break;
   } else n = 0;
  }
  l = a[y >> 0] | 0;
  l = (l & 1) == 0 ? (l & 255) >>> 1 : c[r >> 2] | 0;
  if ((c[w >> 2] | 0) == (g + l | 0)) {
   ef(y, l << 1, 0);
   if (!(a[y >> 0] & 1)) d = 10; else d = (c[y >> 2] & -2) + -1 | 0;
   ef(y, d, 0);
   g = (a[y >> 0] & 1) == 0 ? q : c[p >> 2] | 0;
   c[w >> 2] = g + l;
  }
  l = k + 12 | 0;
  d = c[l >> 2] | 0;
  m = k + 16 | 0;
  if ((d | 0) == (c[m >> 2] | 0)) d = wb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else d = c[d >> 2] | 0;
  if (qh(d, v, g, w, t, o, z, x, u, s) | 0) {
   l = n;
   break;
  }
  d = c[l >> 2] | 0;
  if ((d | 0) == (c[m >> 2] | 0)) {
   wb[c[(c[k >> 2] | 0) + 40 >> 2] & 63](k) | 0;
   continue;
  } else {
   c[l >> 2] = d + 4;
   continue;
  }
 }
 s = a[z >> 0] | 0;
 d = c[u >> 2] | 0;
 if ((((s & 1) == 0 ? (s & 255) >>> 1 : c[z + 4 >> 2] | 0) | 0) != 0 ? (d - x | 0) < 160 : 0) {
  s = c[t >> 2] | 0;
  t = d + 4 | 0;
  c[u >> 2] = t;
  c[d >> 2] = s;
  d = t;
 }
 b[j >> 1] = ho(g, c[w >> 2] | 0, h, v) | 0;
 $j(z, x, d, h);
 if (k) {
  d = c[k + 12 >> 2] | 0;
  if ((d | 0) == (c[k + 16 >> 2] | 0)) d = wb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else d = c[d >> 2] | 0;
  if ((d | 0) == -1) {
   c[e >> 2] = 0;
   g = 1;
  } else g = 0;
 } else g = 1;
 do if (l) {
  d = c[l + 12 >> 2] | 0;
  if ((d | 0) == (c[l + 16 >> 2] | 0)) d = wb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0; else d = c[d >> 2] | 0;
  if ((d | 0) != -1) if (g) break; else {
   B = 46;
   break;
  } else {
   c[f >> 2] = 0;
   B = 44;
   break;
  }
 } else B = 44; while (0);
 if ((B | 0) == 44 ? g : 0) B = 46;
 if ((B | 0) == 46) c[h >> 2] = c[h >> 2] | 2;
 B = c[e >> 2] | 0;
 bf(y);
 bf(z);
 i = A;
 return B | 0;
}

function Mm(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0;
 z = i;
 i = i + 320 | 0;
 r = z + 208 | 0;
 j = z + 200 | 0;
 y = z + 24 | 0;
 x = z + 12 | 0;
 v = z + 8 | 0;
 w = z + 40 | 0;
 t = z + 4 | 0;
 s = z;
 u = km(f) | 0;
 uh(y, f, r, j);
 c[x >> 2] = 0;
 c[x + 4 >> 2] = 0;
 c[x + 8 >> 2] = 0;
 if (!(a[x >> 0] & 1)) b = 10; else b = (c[x >> 2] & -2) + -1 | 0;
 ef(x, b, 0);
 o = x + 8 | 0;
 p = x + 1 | 0;
 f = (a[x >> 0] & 1) == 0 ? p : c[o >> 2] | 0;
 c[v >> 2] = f;
 c[t >> 2] = w;
 c[s >> 2] = 0;
 q = x + 4 | 0;
 n = c[j >> 2] | 0;
 j = c[d >> 2] | 0;
 a : while (1) {
  if (j) {
   b = c[j + 12 >> 2] | 0;
   if ((b | 0) == (c[j + 16 >> 2] | 0)) b = wb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else b = c[b >> 2] | 0;
   if ((b | 0) == -1) {
    c[d >> 2] = 0;
    j = 0;
    l = 1;
   } else l = 0;
  } else {
   j = 0;
   l = 1;
  }
  k = c[e >> 2] | 0;
  do if (k) {
   b = c[k + 12 >> 2] | 0;
   if ((b | 0) == (c[k + 16 >> 2] | 0)) b = wb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else b = c[b >> 2] | 0;
   if ((b | 0) != -1) if (l) {
    m = k;
    break;
   } else break a; else {
    c[e >> 2] = 0;
    A = 16;
    break;
   }
  } else A = 16; while (0);
  if ((A | 0) == 16) {
   A = 0;
   if (l) {
    k = 0;
    break;
   } else m = 0;
  }
  k = a[x >> 0] | 0;
  k = (k & 1) == 0 ? (k & 255) >>> 1 : c[q >> 2] | 0;
  if ((c[v >> 2] | 0) == (f + k | 0)) {
   ef(x, k << 1, 0);
   if (!(a[x >> 0] & 1)) b = 10; else b = (c[x >> 2] & -2) + -1 | 0;
   ef(x, b, 0);
   f = (a[x >> 0] & 1) == 0 ? p : c[o >> 2] | 0;
   c[v >> 2] = f + k;
  }
  k = j + 12 | 0;
  b = c[k >> 2] | 0;
  l = j + 16 | 0;
  if ((b | 0) == (c[l >> 2] | 0)) b = wb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else b = c[b >> 2] | 0;
  if (qh(b, u, f, v, s, n, y, w, t, r) | 0) {
   k = m;
   break;
  }
  b = c[k >> 2] | 0;
  if ((b | 0) == (c[l >> 2] | 0)) {
   wb[c[(c[j >> 2] | 0) + 40 >> 2] & 63](j) | 0;
   continue;
  } else {
   c[k >> 2] = b + 4;
   continue;
  }
 }
 r = a[y >> 0] | 0;
 b = c[t >> 2] | 0;
 if ((((r & 1) == 0 ? (r & 255) >>> 1 : c[y + 4 >> 2] | 0) | 0) != 0 ? (b - w | 0) < 160 : 0) {
  r = c[s >> 2] | 0;
  s = b + 4 | 0;
  c[t >> 2] = s;
  c[b >> 2] = r;
  b = s;
 }
 c[h >> 2] = jo(f, c[v >> 2] | 0, g, u) | 0;
 $j(y, w, b, g);
 if (j) {
  b = c[j + 12 >> 2] | 0;
  if ((b | 0) == (c[j + 16 >> 2] | 0)) b = wb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else b = c[b >> 2] | 0;
  if ((b | 0) == -1) {
   c[d >> 2] = 0;
   f = 1;
  } else f = 0;
 } else f = 1;
 do if (k) {
  b = c[k + 12 >> 2] | 0;
  if ((b | 0) == (c[k + 16 >> 2] | 0)) b = wb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else b = c[b >> 2] | 0;
  if ((b | 0) != -1) if (f) break; else {
   A = 46;
   break;
  } else {
   c[e >> 2] = 0;
   A = 44;
   break;
  }
 } else A = 44; while (0);
 if ((A | 0) == 44 ? f : 0) A = 46;
 if ((A | 0) == 46) c[g >> 2] = c[g >> 2] | 2;
 A = c[d >> 2] | 0;
 bf(x);
 bf(y);
 i = z;
 return A | 0;
}

function Jm(b, e, f, g, j, k) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 j = j | 0;
 k = k | 0;
 var l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0;
 D = i;
 i = i + 240 | 0;
 u = D + 208 | 0;
 l = D + 203 | 0;
 m = D + 202 | 0;
 C = D + 24 | 0;
 B = D + 12 | 0;
 z = D + 8 | 0;
 A = D + 40 | 0;
 x = D + 4 | 0;
 w = D;
 y = D + 201 | 0;
 v = D + 200 | 0;
 sh(C, g, u, l, m);
 c[B >> 2] = 0;
 c[B + 4 >> 2] = 0;
 c[B + 8 >> 2] = 0;
 if (!(a[B >> 0] & 1)) b = 10; else b = (c[B >> 2] & -2) + -1 | 0;
 ef(B, b, 0);
 r = B + 8 | 0;
 s = B + 1 | 0;
 o = (a[B >> 0] & 1) == 0 ? s : c[r >> 2] | 0;
 c[z >> 2] = o;
 c[x >> 2] = A;
 c[w >> 2] = 0;
 a[y >> 0] = 1;
 a[v >> 0] = 69;
 t = B + 4 | 0;
 q = a[l >> 0] | 0;
 p = a[m >> 0] | 0;
 b = c[e >> 2] | 0;
 l = o;
 a : while (1) {
  if (b) {
   if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0) ? (wb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1 : 0) {
    c[e >> 2] = 0;
    b = 0;
   }
  } else b = 0;
  g = (b | 0) == 0;
  m = c[f >> 2] | 0;
  do if (m) {
   if ((c[m + 12 >> 2] | 0) != (c[m + 16 >> 2] | 0)) if (g) break; else break a;
   if ((wb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0) != -1) if (g) break; else break a; else {
    c[f >> 2] = 0;
    E = 13;
    break;
   }
  } else E = 13; while (0);
  if ((E | 0) == 13) {
   E = 0;
   if (g) {
    m = 0;
    break;
   } else m = 0;
  }
  n = a[B >> 0] | 0;
  n = (n & 1) == 0 ? (n & 255) >>> 1 : c[t >> 2] | 0;
  if ((c[z >> 2] | 0) == (l + n | 0)) {
   ef(B, n << 1, 0);
   if (!(a[B >> 0] & 1)) g = 10; else g = (c[B >> 2] & -2) + -1 | 0;
   ef(B, g, 0);
   l = (a[B >> 0] & 1) == 0 ? s : c[r >> 2] | 0;
   c[z >> 2] = l + n;
  }
  n = b + 12 | 0;
  g = c[n >> 2] | 0;
  o = b + 16 | 0;
  if ((g | 0) == (c[o >> 2] | 0)) g = wb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0; else g = d[g >> 0] | 0;
  if (th(g & 255, y, v, l, z, q, p, C, A, x, w, u) | 0) break;
  g = c[n >> 2] | 0;
  if ((g | 0) == (c[o >> 2] | 0)) {
   wb[c[(c[b >> 2] | 0) + 40 >> 2] & 63](b) | 0;
   continue;
  } else {
   c[n >> 2] = g + 1;
   continue;
  }
 }
 v = a[C >> 0] | 0;
 g = c[x >> 2] | 0;
 if (!((a[y >> 0] | 0) == 0 ? 1 : (((v & 1) == 0 ? (v & 255) >>> 1 : c[C + 4 >> 2] | 0) | 0) == 0) ? (g - A | 0) < 160 : 0) {
  w = c[w >> 2] | 0;
  y = g + 4 | 0;
  c[x >> 2] = y;
  c[g >> 2] = w;
  g = y;
 }
 h[k >> 3] = +ao(l, c[z >> 2] | 0, j);
 $j(C, A, g, j);
 if (b) {
  if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0) ? (wb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1 : 0) {
   c[e >> 2] = 0;
   b = 0;
  }
 } else b = 0;
 b = (b | 0) == 0;
 do if (m) {
  if ((c[m + 12 >> 2] | 0) == (c[m + 16 >> 2] | 0) ? (wb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0) == -1 : 0) {
   c[f >> 2] = 0;
   E = 38;
   break;
  }
  if (!b) E = 39;
 } else E = 38; while (0);
 if ((E | 0) == 38 ? b : 0) E = 39;
 if ((E | 0) == 39) c[j >> 2] = c[j >> 2] | 2;
 E = c[e >> 2] | 0;
 bf(B);
 bf(C);
 i = D;
 return E | 0;
}

function Im(b, e, f, g, j, k) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 j = j | 0;
 k = k | 0;
 var l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0;
 D = i;
 i = i + 240 | 0;
 u = D + 208 | 0;
 l = D + 203 | 0;
 m = D + 202 | 0;
 C = D + 24 | 0;
 B = D + 12 | 0;
 z = D + 8 | 0;
 A = D + 40 | 0;
 x = D + 4 | 0;
 w = D;
 y = D + 201 | 0;
 v = D + 200 | 0;
 sh(C, g, u, l, m);
 c[B >> 2] = 0;
 c[B + 4 >> 2] = 0;
 c[B + 8 >> 2] = 0;
 if (!(a[B >> 0] & 1)) b = 10; else b = (c[B >> 2] & -2) + -1 | 0;
 ef(B, b, 0);
 r = B + 8 | 0;
 s = B + 1 | 0;
 o = (a[B >> 0] & 1) == 0 ? s : c[r >> 2] | 0;
 c[z >> 2] = o;
 c[x >> 2] = A;
 c[w >> 2] = 0;
 a[y >> 0] = 1;
 a[v >> 0] = 69;
 t = B + 4 | 0;
 q = a[l >> 0] | 0;
 p = a[m >> 0] | 0;
 b = c[e >> 2] | 0;
 l = o;
 a : while (1) {
  if (b) {
   if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0) ? (wb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1 : 0) {
    c[e >> 2] = 0;
    b = 0;
   }
  } else b = 0;
  g = (b | 0) == 0;
  m = c[f >> 2] | 0;
  do if (m) {
   if ((c[m + 12 >> 2] | 0) != (c[m + 16 >> 2] | 0)) if (g) break; else break a;
   if ((wb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0) != -1) if (g) break; else break a; else {
    c[f >> 2] = 0;
    E = 13;
    break;
   }
  } else E = 13; while (0);
  if ((E | 0) == 13) {
   E = 0;
   if (g) {
    m = 0;
    break;
   } else m = 0;
  }
  n = a[B >> 0] | 0;
  n = (n & 1) == 0 ? (n & 255) >>> 1 : c[t >> 2] | 0;
  if ((c[z >> 2] | 0) == (l + n | 0)) {
   ef(B, n << 1, 0);
   if (!(a[B >> 0] & 1)) g = 10; else g = (c[B >> 2] & -2) + -1 | 0;
   ef(B, g, 0);
   l = (a[B >> 0] & 1) == 0 ? s : c[r >> 2] | 0;
   c[z >> 2] = l + n;
  }
  n = b + 12 | 0;
  g = c[n >> 2] | 0;
  o = b + 16 | 0;
  if ((g | 0) == (c[o >> 2] | 0)) g = wb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0; else g = d[g >> 0] | 0;
  if (th(g & 255, y, v, l, z, q, p, C, A, x, w, u) | 0) break;
  g = c[n >> 2] | 0;
  if ((g | 0) == (c[o >> 2] | 0)) {
   wb[c[(c[b >> 2] | 0) + 40 >> 2] & 63](b) | 0;
   continue;
  } else {
   c[n >> 2] = g + 1;
   continue;
  }
 }
 v = a[C >> 0] | 0;
 g = c[x >> 2] | 0;
 if (!((a[y >> 0] | 0) == 0 ? 1 : (((v & 1) == 0 ? (v & 255) >>> 1 : c[C + 4 >> 2] | 0) | 0) == 0) ? (g - A | 0) < 160 : 0) {
  w = c[w >> 2] | 0;
  y = g + 4 | 0;
  c[x >> 2] = y;
  c[g >> 2] = w;
  g = y;
 }
 h[k >> 3] = +bo(l, c[z >> 2] | 0, j);
 $j(C, A, g, j);
 if (b) {
  if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0) ? (wb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1 : 0) {
   c[e >> 2] = 0;
   b = 0;
  }
 } else b = 0;
 b = (b | 0) == 0;
 do if (m) {
  if ((c[m + 12 >> 2] | 0) == (c[m + 16 >> 2] | 0) ? (wb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0) == -1 : 0) {
   c[f >> 2] = 0;
   E = 38;
   break;
  }
  if (!b) E = 39;
 } else E = 38; while (0);
 if ((E | 0) == 38 ? b : 0) E = 39;
 if ((E | 0) == 39) c[j >> 2] = c[j >> 2] | 2;
 E = c[e >> 2] | 0;
 bf(B);
 bf(C);
 i = D;
 return E | 0;
}

function Hm(b, e, f, h, j, k) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 h = h | 0;
 j = j | 0;
 k = k | 0;
 var l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0;
 D = i;
 i = i + 240 | 0;
 u = D + 208 | 0;
 l = D + 203 | 0;
 m = D + 202 | 0;
 C = D + 24 | 0;
 B = D + 12 | 0;
 z = D + 8 | 0;
 A = D + 40 | 0;
 x = D + 4 | 0;
 w = D;
 y = D + 201 | 0;
 v = D + 200 | 0;
 sh(C, h, u, l, m);
 c[B >> 2] = 0;
 c[B + 4 >> 2] = 0;
 c[B + 8 >> 2] = 0;
 if (!(a[B >> 0] & 1)) b = 10; else b = (c[B >> 2] & -2) + -1 | 0;
 ef(B, b, 0);
 r = B + 8 | 0;
 s = B + 1 | 0;
 o = (a[B >> 0] & 1) == 0 ? s : c[r >> 2] | 0;
 c[z >> 2] = o;
 c[x >> 2] = A;
 c[w >> 2] = 0;
 a[y >> 0] = 1;
 a[v >> 0] = 69;
 t = B + 4 | 0;
 q = a[l >> 0] | 0;
 p = a[m >> 0] | 0;
 b = c[e >> 2] | 0;
 l = o;
 a : while (1) {
  if (b) {
   if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0) ? (wb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1 : 0) {
    c[e >> 2] = 0;
    b = 0;
   }
  } else b = 0;
  h = (b | 0) == 0;
  m = c[f >> 2] | 0;
  do if (m) {
   if ((c[m + 12 >> 2] | 0) != (c[m + 16 >> 2] | 0)) if (h) break; else break a;
   if ((wb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0) != -1) if (h) break; else break a; else {
    c[f >> 2] = 0;
    E = 13;
    break;
   }
  } else E = 13; while (0);
  if ((E | 0) == 13) {
   E = 0;
   if (h) {
    m = 0;
    break;
   } else m = 0;
  }
  n = a[B >> 0] | 0;
  n = (n & 1) == 0 ? (n & 255) >>> 1 : c[t >> 2] | 0;
  if ((c[z >> 2] | 0) == (l + n | 0)) {
   ef(B, n << 1, 0);
   if (!(a[B >> 0] & 1)) h = 10; else h = (c[B >> 2] & -2) + -1 | 0;
   ef(B, h, 0);
   l = (a[B >> 0] & 1) == 0 ? s : c[r >> 2] | 0;
   c[z >> 2] = l + n;
  }
  n = b + 12 | 0;
  h = c[n >> 2] | 0;
  o = b + 16 | 0;
  if ((h | 0) == (c[o >> 2] | 0)) h = wb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0; else h = d[h >> 0] | 0;
  if (th(h & 255, y, v, l, z, q, p, C, A, x, w, u) | 0) break;
  h = c[n >> 2] | 0;
  if ((h | 0) == (c[o >> 2] | 0)) {
   wb[c[(c[b >> 2] | 0) + 40 >> 2] & 63](b) | 0;
   continue;
  } else {
   c[n >> 2] = h + 1;
   continue;
  }
 }
 v = a[C >> 0] | 0;
 h = c[x >> 2] | 0;
 if (!((a[y >> 0] | 0) == 0 ? 1 : (((v & 1) == 0 ? (v & 255) >>> 1 : c[C + 4 >> 2] | 0) | 0) == 0) ? (h - A | 0) < 160 : 0) {
  w = c[w >> 2] | 0;
  y = h + 4 | 0;
  c[x >> 2] = y;
  c[h >> 2] = w;
  h = y;
 }
 g[k >> 2] = +co(l, c[z >> 2] | 0, j);
 $j(C, A, h, j);
 if (b) {
  if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0) ? (wb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1 : 0) {
   c[e >> 2] = 0;
   b = 0;
  }
 } else b = 0;
 b = (b | 0) == 0;
 do if (m) {
  if ((c[m + 12 >> 2] | 0) == (c[m + 16 >> 2] | 0) ? (wb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0) == -1 : 0) {
   c[f >> 2] = 0;
   E = 38;
   break;
  }
  if (!b) E = 39;
 } else E = 38; while (0);
 if ((E | 0) == 38 ? b : 0) E = 39;
 if ((E | 0) == 39) c[j >> 2] = c[j >> 2] | 2;
 E = c[e >> 2] | 0;
 bf(B);
 bf(C);
 i = D;
 return E | 0;
}

function On(b, e, f, g, h, i, j, k) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 j = j | 0;
 k = k | 0;
 var l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 c[f >> 2] = b;
 c[i >> 2] = g;
 if (k & 4) {
  b = c[f >> 2] | 0;
  k = e;
  if ((((k - b | 0) > 2 ? (a[b >> 0] | 0) == -17 : 0) ? (a[b + 1 >> 0] | 0) == -69 : 0) ? (a[b + 2 >> 0] | 0) == -65 : 0) {
   c[f >> 2] = b + 3;
   g = c[i >> 2] | 0;
   p = k;
  } else p = k;
 } else p = e;
 k = c[f >> 2] | 0;
 b = k >>> 0 < e >>> 0;
 a : do if (b & g >>> 0 < h >>> 0) while (1) {
  b = a[k >> 0] | 0;
  o = b & 255;
  do if (b << 24 >> 24 > -1) {
   if (o >>> 0 > j >>> 0) {
    b = 2;
    break a;
   }
   c[g >> 2] = o;
   c[f >> 2] = k + 1;
  } else {
   if ((b & 255) < 194) {
    b = 2;
    break a;
   }
   if ((b & 255) < 224) {
    if ((p - k | 0) < 2) {
     b = 1;
     break a;
    }
    b = d[k + 1 >> 0] | 0;
    if ((b & 192 | 0) != 128) {
     b = 2;
     break a;
    }
    b = b & 63 | o << 6 & 1984;
    if (b >>> 0 > j >>> 0) {
     b = 2;
     break a;
    }
    c[g >> 2] = b;
    c[f >> 2] = k + 2;
    break;
   }
   if ((b & 255) < 240) {
    if ((p - k | 0) < 3) {
     b = 1;
     break a;
    }
    l = a[k + 1 >> 0] | 0;
    b = a[k + 2 >> 0] | 0;
    switch (o | 0) {
    case 224:
     {
      if ((l & -32) << 24 >> 24 != -96) {
       b = 2;
       break a;
      }
      break;
     }
    case 237:
     {
      if ((l & -32) << 24 >> 24 != -128) {
       b = 2;
       break a;
      }
      break;
     }
    default:
     if ((l & -64) << 24 >> 24 != -128) {
      b = 2;
      break a;
     }
    }
    b = b & 255;
    if ((b & 192 | 0) != 128) {
     b = 2;
     break a;
    }
    b = (l & 255) << 6 & 4032 | o << 12 & 61440 | b & 63;
    if (b >>> 0 > j >>> 0) {
     b = 2;
     break a;
    }
    c[g >> 2] = b;
    c[f >> 2] = k + 3;
    break;
   }
   if ((b & 255) >= 245) {
    b = 2;
    break a;
   }
   if ((p - k | 0) < 4) {
    b = 1;
    break a;
   }
   n = a[k + 1 >> 0] | 0;
   b = a[k + 2 >> 0] | 0;
   l = a[k + 3 >> 0] | 0;
   switch (o | 0) {
   case 240:
    {
     if ((n + 112 & 255) >= 48) {
      b = 2;
      break a;
     }
     break;
    }
   case 244:
    {
     if ((n & -16) << 24 >> 24 != -128) {
      b = 2;
      break a;
     }
     break;
    }
   default:
    if ((n & -64) << 24 >> 24 != -128) {
     b = 2;
     break a;
    }
   }
   m = b & 255;
   if ((m & 192 | 0) != 128) {
    b = 2;
    break a;
   }
   b = l & 255;
   if ((b & 192 | 0) != 128) {
    b = 2;
    break a;
   }
   b = (n & 255) << 12 & 258048 | o << 18 & 1835008 | m << 6 & 4032 | b & 63;
   if (b >>> 0 > j >>> 0) {
    b = 2;
    break a;
   }
   c[g >> 2] = b;
   c[f >> 2] = k + 4;
  } while (0);
  g = (c[i >> 2] | 0) + 4 | 0;
  c[i >> 2] = g;
  k = c[f >> 2] | 0;
  b = k >>> 0 < e >>> 0;
  if (!(b & g >>> 0 < h >>> 0)) {
   q = 38;
   break;
  }
 } else q = 38; while (0);
 if ((q | 0) == 38) b = b & 1;
 return b | 0;
}

function Gm(b, e, f, g, h, j) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0;
 A = i;
 i = i + 240 | 0;
 s = A + 202 | 0;
 k = A + 200 | 0;
 z = A + 24 | 0;
 y = A + 12 | 0;
 w = A + 8 | 0;
 x = A + 40 | 0;
 u = A + 4 | 0;
 t = A;
 v = km(g) | 0;
 rh(z, g, s, k);
 c[y >> 2] = 0;
 c[y + 4 >> 2] = 0;
 c[y + 8 >> 2] = 0;
 if (!(a[y >> 0] & 1)) b = 10; else b = (c[y >> 2] & -2) + -1 | 0;
 ef(y, b, 0);
 p = y + 8 | 0;
 q = y + 1 | 0;
 n = (a[y >> 0] & 1) == 0 ? q : c[p >> 2] | 0;
 c[w >> 2] = n;
 c[u >> 2] = x;
 c[t >> 2] = 0;
 r = y + 4 | 0;
 o = a[k >> 0] | 0;
 b = c[e >> 2] | 0;
 k = n;
 a : while (1) {
  if (b) {
   if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0) ? (wb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1 : 0) {
    c[e >> 2] = 0;
    b = 0;
   }
  } else b = 0;
  g = (b | 0) == 0;
  l = c[f >> 2] | 0;
  do if (l) {
   if ((c[l + 12 >> 2] | 0) != (c[l + 16 >> 2] | 0)) if (g) break; else break a;
   if ((wb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0) != -1) if (g) break; else break a; else {
    c[f >> 2] = 0;
    B = 13;
    break;
   }
  } else B = 13; while (0);
  if ((B | 0) == 13) {
   B = 0;
   if (g) {
    l = 0;
    break;
   } else l = 0;
  }
  m = a[y >> 0] | 0;
  m = (m & 1) == 0 ? (m & 255) >>> 1 : c[r >> 2] | 0;
  if ((c[w >> 2] | 0) == (k + m | 0)) {
   ef(y, m << 1, 0);
   if (!(a[y >> 0] & 1)) g = 10; else g = (c[y >> 2] & -2) + -1 | 0;
   ef(y, g, 0);
   k = (a[y >> 0] & 1) == 0 ? q : c[p >> 2] | 0;
   c[w >> 2] = k + m;
  }
  m = b + 12 | 0;
  g = c[m >> 2] | 0;
  n = b + 16 | 0;
  if ((g | 0) == (c[n >> 2] | 0)) g = wb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0; else g = d[g >> 0] | 0;
  if (bh(g & 255, v, k, w, t, o, z, x, u, s) | 0) break;
  g = c[m >> 2] | 0;
  if ((g | 0) == (c[n >> 2] | 0)) {
   wb[c[(c[b >> 2] | 0) + 40 >> 2] & 63](b) | 0;
   continue;
  } else {
   c[m >> 2] = g + 1;
   continue;
  }
 }
 s = a[z >> 0] | 0;
 g = c[u >> 2] | 0;
 if ((((s & 1) == 0 ? (s & 255) >>> 1 : c[z + 4 >> 2] | 0) | 0) != 0 ? (g - x | 0) < 160 : 0) {
  s = c[t >> 2] | 0;
  t = g + 4 | 0;
  c[u >> 2] = t;
  c[g >> 2] = s;
  g = t;
 }
 w = eo(k, c[w >> 2] | 0, h, v) | 0;
 c[j >> 2] = w;
 c[j + 4 >> 2] = D;
 $j(z, x, g, h);
 if (b) {
  if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0) ? (wb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1 : 0) {
   c[e >> 2] = 0;
   b = 0;
  }
 } else b = 0;
 b = (b | 0) == 0;
 do if (l) {
  if ((c[l + 12 >> 2] | 0) == (c[l + 16 >> 2] | 0) ? (wb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0) == -1 : 0) {
   c[f >> 2] = 0;
   B = 38;
   break;
  }
  if (!b) B = 39;
 } else B = 38; while (0);
 if ((B | 0) == 38 ? b : 0) B = 39;
 if ((B | 0) == 39) c[h >> 2] = c[h >> 2] | 2;
 B = c[e >> 2] | 0;
 bf(y);
 bf(z);
 i = A;
 return B | 0;
}

function Cm(b, e, f, g, h, j) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0;
 A = i;
 i = i + 240 | 0;
 s = A + 202 | 0;
 k = A + 200 | 0;
 z = A + 24 | 0;
 y = A + 12 | 0;
 w = A + 8 | 0;
 x = A + 40 | 0;
 u = A + 4 | 0;
 t = A;
 v = km(g) | 0;
 rh(z, g, s, k);
 c[y >> 2] = 0;
 c[y + 4 >> 2] = 0;
 c[y + 8 >> 2] = 0;
 if (!(a[y >> 0] & 1)) b = 10; else b = (c[y >> 2] & -2) + -1 | 0;
 ef(y, b, 0);
 p = y + 8 | 0;
 q = y + 1 | 0;
 n = (a[y >> 0] & 1) == 0 ? q : c[p >> 2] | 0;
 c[w >> 2] = n;
 c[u >> 2] = x;
 c[t >> 2] = 0;
 r = y + 4 | 0;
 o = a[k >> 0] | 0;
 b = c[e >> 2] | 0;
 k = n;
 a : while (1) {
  if (b) {
   if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0) ? (wb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1 : 0) {
    c[e >> 2] = 0;
    b = 0;
   }
  } else b = 0;
  g = (b | 0) == 0;
  l = c[f >> 2] | 0;
  do if (l) {
   if ((c[l + 12 >> 2] | 0) != (c[l + 16 >> 2] | 0)) if (g) break; else break a;
   if ((wb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0) != -1) if (g) break; else break a; else {
    c[f >> 2] = 0;
    B = 13;
    break;
   }
  } else B = 13; while (0);
  if ((B | 0) == 13) {
   B = 0;
   if (g) {
    l = 0;
    break;
   } else l = 0;
  }
  m = a[y >> 0] | 0;
  m = (m & 1) == 0 ? (m & 255) >>> 1 : c[r >> 2] | 0;
  if ((c[w >> 2] | 0) == (k + m | 0)) {
   ef(y, m << 1, 0);
   if (!(a[y >> 0] & 1)) g = 10; else g = (c[y >> 2] & -2) + -1 | 0;
   ef(y, g, 0);
   k = (a[y >> 0] & 1) == 0 ? q : c[p >> 2] | 0;
   c[w >> 2] = k + m;
  }
  m = b + 12 | 0;
  g = c[m >> 2] | 0;
  n = b + 16 | 0;
  if ((g | 0) == (c[n >> 2] | 0)) g = wb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0; else g = d[g >> 0] | 0;
  if (bh(g & 255, v, k, w, t, o, z, x, u, s) | 0) break;
  g = c[m >> 2] | 0;
  if ((g | 0) == (c[n >> 2] | 0)) {
   wb[c[(c[b >> 2] | 0) + 40 >> 2] & 63](b) | 0;
   continue;
  } else {
   c[m >> 2] = g + 1;
   continue;
  }
 }
 s = a[z >> 0] | 0;
 g = c[u >> 2] | 0;
 if ((((s & 1) == 0 ? (s & 255) >>> 1 : c[z + 4 >> 2] | 0) | 0) != 0 ? (g - x | 0) < 160 : 0) {
  s = c[t >> 2] | 0;
  t = g + 4 | 0;
  c[u >> 2] = t;
  c[g >> 2] = s;
  g = t;
 }
 w = io(k, c[w >> 2] | 0, h, v) | 0;
 c[j >> 2] = w;
 c[j + 4 >> 2] = D;
 $j(z, x, g, h);
 if (b) {
  if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0) ? (wb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1 : 0) {
   c[e >> 2] = 0;
   b = 0;
  }
 } else b = 0;
 b = (b | 0) == 0;
 do if (l) {
  if ((c[l + 12 >> 2] | 0) == (c[l + 16 >> 2] | 0) ? (wb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0) == -1 : 0) {
   c[f >> 2] = 0;
   B = 38;
   break;
  }
  if (!b) B = 39;
 } else B = 38; while (0);
 if ((B | 0) == 38 ? b : 0) B = 39;
 if ((B | 0) == 39) c[h >> 2] = c[h >> 2] | 2;
 B = c[e >> 2] | 0;
 bf(y);
 bf(z);
 i = A;
 return B | 0;
}

function ah(b, e, f, g, h, j) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0;
 z = i;
 i = i + 240 | 0;
 w = z;
 p = z + 208 | 0;
 y = z + 32 | 0;
 t = z + 28 | 0;
 x = z + 16 | 0;
 v = z + 12 | 0;
 r = z + 48 | 0;
 s = z + 8 | 0;
 q = z + 4 | 0;
 c[y >> 2] = 0;
 c[y + 4 >> 2] = 0;
 c[y + 8 >> 2] = 0;
 u = Af(g) | 0;
 c[t >> 2] = u;
 t = Ok(t, 9336) | 0;
 Ab[c[(c[t >> 2] | 0) + 32 >> 2] & 7](t, 19978, 20004, p) | 0;
 mo(u) | 0;
 c[x >> 2] = 0;
 c[x + 4 >> 2] = 0;
 c[x + 8 >> 2] = 0;
 if (!(a[x >> 0] & 1)) b = 10; else b = (c[x >> 2] & -2) + -1 | 0;
 ef(x, b, 0);
 t = x + 8 | 0;
 u = x + 1 | 0;
 g = (a[x >> 0] & 1) == 0 ? u : c[t >> 2] | 0;
 c[v >> 2] = g;
 c[s >> 2] = r;
 c[q >> 2] = 0;
 o = x + 4 | 0;
 b = c[e >> 2] | 0;
 a : while (1) {
  if (b) {
   if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0) ? (wb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1 : 0) {
    c[e >> 2] = 0;
    b = 0;
   }
  } else b = 0;
  l = (b | 0) == 0;
  k = c[f >> 2] | 0;
  do if (k) {
   if ((c[k + 12 >> 2] | 0) != (c[k + 16 >> 2] | 0)) if (l) break; else break a;
   if ((wb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0) != -1) if (l) break; else break a; else {
    c[f >> 2] = 0;
    A = 13;
    break;
   }
  } else A = 13; while (0);
  if ((A | 0) == 13) {
   A = 0;
   if (l) {
    k = 0;
    break;
   } else k = 0;
  }
  l = a[x >> 0] | 0;
  l = (l & 1) == 0 ? (l & 255) >>> 1 : c[o >> 2] | 0;
  if ((c[v >> 2] | 0) == (g + l | 0)) {
   ef(x, l << 1, 0);
   if (!(a[x >> 0] & 1)) g = 10; else g = (c[x >> 2] & -2) + -1 | 0;
   ef(x, g, 0);
   g = (a[x >> 0] & 1) == 0 ? u : c[t >> 2] | 0;
   c[v >> 2] = g + l;
  }
  m = b + 12 | 0;
  l = c[m >> 2] | 0;
  n = b + 16 | 0;
  if ((l | 0) == (c[n >> 2] | 0)) l = wb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0; else l = d[l >> 0] | 0;
  if (bh(l & 255, 16, g, v, q, 0, y, r, s, p) | 0) break;
  k = c[m >> 2] | 0;
  if ((k | 0) == (c[n >> 2] | 0)) {
   wb[c[(c[b >> 2] | 0) + 40 >> 2] & 63](b) | 0;
   continue;
  } else {
   c[m >> 2] = k + 1;
   continue;
  }
 }
 ef(x, (c[v >> 2] | 0) - g | 0, 0);
 u = (a[x >> 0] & 1) == 0 ? u : c[t >> 2] | 0;
 v = ch() | 0;
 c[w >> 2] = j;
 if ((Km(u, v, 21362, w) | 0) != 1) c[h >> 2] = 4;
 if (b) {
  if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0) ? (wb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1 : 0) {
   c[e >> 2] = 0;
   b = 0;
  }
 } else b = 0;
 b = (b | 0) == 0;
 do if (k) {
  if ((c[k + 12 >> 2] | 0) == (c[k + 16 >> 2] | 0) ? (wb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0) == -1 : 0) {
   c[f >> 2] = 0;
   A = 37;
   break;
  }
  if (!b) A = 38;
 } else A = 37; while (0);
 if ((A | 0) == 37 ? b : 0) A = 38;
 if ((A | 0) == 38) c[h >> 2] = c[h >> 2] | 2;
 A = c[e >> 2] | 0;
 bf(x);
 bf(y);
 i = z;
 return A | 0;
}

function Fm(b, e, f, g, h, j) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0;
 A = i;
 i = i + 240 | 0;
 s = A + 202 | 0;
 k = A + 200 | 0;
 z = A + 24 | 0;
 y = A + 12 | 0;
 w = A + 8 | 0;
 x = A + 40 | 0;
 u = A + 4 | 0;
 t = A;
 v = km(g) | 0;
 rh(z, g, s, k);
 c[y >> 2] = 0;
 c[y + 4 >> 2] = 0;
 c[y + 8 >> 2] = 0;
 if (!(a[y >> 0] & 1)) b = 10; else b = (c[y >> 2] & -2) + -1 | 0;
 ef(y, b, 0);
 p = y + 8 | 0;
 q = y + 1 | 0;
 n = (a[y >> 0] & 1) == 0 ? q : c[p >> 2] | 0;
 c[w >> 2] = n;
 c[u >> 2] = x;
 c[t >> 2] = 0;
 r = y + 4 | 0;
 o = a[k >> 0] | 0;
 b = c[e >> 2] | 0;
 k = n;
 a : while (1) {
  if (b) {
   if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0) ? (wb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1 : 0) {
    c[e >> 2] = 0;
    b = 0;
   }
  } else b = 0;
  g = (b | 0) == 0;
  l = c[f >> 2] | 0;
  do if (l) {
   if ((c[l + 12 >> 2] | 0) != (c[l + 16 >> 2] | 0)) if (g) break; else break a;
   if ((wb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0) != -1) if (g) break; else break a; else {
    c[f >> 2] = 0;
    B = 13;
    break;
   }
  } else B = 13; while (0);
  if ((B | 0) == 13) {
   B = 0;
   if (g) {
    l = 0;
    break;
   } else l = 0;
  }
  m = a[y >> 0] | 0;
  m = (m & 1) == 0 ? (m & 255) >>> 1 : c[r >> 2] | 0;
  if ((c[w >> 2] | 0) == (k + m | 0)) {
   ef(y, m << 1, 0);
   if (!(a[y >> 0] & 1)) g = 10; else g = (c[y >> 2] & -2) + -1 | 0;
   ef(y, g, 0);
   k = (a[y >> 0] & 1) == 0 ? q : c[p >> 2] | 0;
   c[w >> 2] = k + m;
  }
  m = b + 12 | 0;
  g = c[m >> 2] | 0;
  n = b + 16 | 0;
  if ((g | 0) == (c[n >> 2] | 0)) g = wb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0; else g = d[g >> 0] | 0;
  if (bh(g & 255, v, k, w, t, o, z, x, u, s) | 0) break;
  g = c[m >> 2] | 0;
  if ((g | 0) == (c[n >> 2] | 0)) {
   wb[c[(c[b >> 2] | 0) + 40 >> 2] & 63](b) | 0;
   continue;
  } else {
   c[m >> 2] = g + 1;
   continue;
  }
 }
 s = a[z >> 0] | 0;
 g = c[u >> 2] | 0;
 if ((((s & 1) == 0 ? (s & 255) >>> 1 : c[z + 4 >> 2] | 0) | 0) != 0 ? (g - x | 0) < 160 : 0) {
  s = c[t >> 2] | 0;
  t = g + 4 | 0;
  c[u >> 2] = t;
  c[g >> 2] = s;
  g = t;
 }
 c[j >> 2] = fo(k, c[w >> 2] | 0, h, v) | 0;
 $j(z, x, g, h);
 if (b) {
  if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0) ? (wb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1 : 0) {
   c[e >> 2] = 0;
   b = 0;
  }
 } else b = 0;
 b = (b | 0) == 0;
 do if (l) {
  if ((c[l + 12 >> 2] | 0) == (c[l + 16 >> 2] | 0) ? (wb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0) == -1 : 0) {
   c[f >> 2] = 0;
   B = 38;
   break;
  }
  if (!b) B = 39;
 } else B = 38; while (0);
 if ((B | 0) == 38 ? b : 0) B = 39;
 if ((B | 0) == 39) c[h >> 2] = c[h >> 2] | 2;
 B = c[e >> 2] | 0;
 bf(y);
 bf(z);
 i = A;
 return B | 0;
}

function Em(b, e, f, g, h, j) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0;
 A = i;
 i = i + 240 | 0;
 s = A + 202 | 0;
 k = A + 200 | 0;
 z = A + 24 | 0;
 y = A + 12 | 0;
 w = A + 8 | 0;
 x = A + 40 | 0;
 u = A + 4 | 0;
 t = A;
 v = km(g) | 0;
 rh(z, g, s, k);
 c[y >> 2] = 0;
 c[y + 4 >> 2] = 0;
 c[y + 8 >> 2] = 0;
 if (!(a[y >> 0] & 1)) b = 10; else b = (c[y >> 2] & -2) + -1 | 0;
 ef(y, b, 0);
 p = y + 8 | 0;
 q = y + 1 | 0;
 n = (a[y >> 0] & 1) == 0 ? q : c[p >> 2] | 0;
 c[w >> 2] = n;
 c[u >> 2] = x;
 c[t >> 2] = 0;
 r = y + 4 | 0;
 o = a[k >> 0] | 0;
 b = c[e >> 2] | 0;
 k = n;
 a : while (1) {
  if (b) {
   if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0) ? (wb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1 : 0) {
    c[e >> 2] = 0;
    b = 0;
   }
  } else b = 0;
  g = (b | 0) == 0;
  l = c[f >> 2] | 0;
  do if (l) {
   if ((c[l + 12 >> 2] | 0) != (c[l + 16 >> 2] | 0)) if (g) break; else break a;
   if ((wb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0) != -1) if (g) break; else break a; else {
    c[f >> 2] = 0;
    B = 13;
    break;
   }
  } else B = 13; while (0);
  if ((B | 0) == 13) {
   B = 0;
   if (g) {
    l = 0;
    break;
   } else l = 0;
  }
  m = a[y >> 0] | 0;
  m = (m & 1) == 0 ? (m & 255) >>> 1 : c[r >> 2] | 0;
  if ((c[w >> 2] | 0) == (k + m | 0)) {
   ef(y, m << 1, 0);
   if (!(a[y >> 0] & 1)) g = 10; else g = (c[y >> 2] & -2) + -1 | 0;
   ef(y, g, 0);
   k = (a[y >> 0] & 1) == 0 ? q : c[p >> 2] | 0;
   c[w >> 2] = k + m;
  }
  m = b + 12 | 0;
  g = c[m >> 2] | 0;
  n = b + 16 | 0;
  if ((g | 0) == (c[n >> 2] | 0)) g = wb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0; else g = d[g >> 0] | 0;
  if (bh(g & 255, v, k, w, t, o, z, x, u, s) | 0) break;
  g = c[m >> 2] | 0;
  if ((g | 0) == (c[n >> 2] | 0)) {
   wb[c[(c[b >> 2] | 0) + 40 >> 2] & 63](b) | 0;
   continue;
  } else {
   c[m >> 2] = g + 1;
   continue;
  }
 }
 s = a[z >> 0] | 0;
 g = c[u >> 2] | 0;
 if ((((s & 1) == 0 ? (s & 255) >>> 1 : c[z + 4 >> 2] | 0) | 0) != 0 ? (g - x | 0) < 160 : 0) {
  s = c[t >> 2] | 0;
  t = g + 4 | 0;
  c[u >> 2] = t;
  c[g >> 2] = s;
  g = t;
 }
 c[j >> 2] = go(k, c[w >> 2] | 0, h, v) | 0;
 $j(z, x, g, h);
 if (b) {
  if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0) ? (wb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1 : 0) {
   c[e >> 2] = 0;
   b = 0;
  }
 } else b = 0;
 b = (b | 0) == 0;
 do if (l) {
  if ((c[l + 12 >> 2] | 0) == (c[l + 16 >> 2] | 0) ? (wb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0) == -1 : 0) {
   c[f >> 2] = 0;
   B = 38;
   break;
  }
  if (!b) B = 39;
 } else B = 38; while (0);
 if ((B | 0) == 38 ? b : 0) B = 39;
 if ((B | 0) == 39) c[h >> 2] = c[h >> 2] | 2;
 B = c[e >> 2] | 0;
 bf(y);
 bf(z);
 i = A;
 return B | 0;
}

function Dm(e, f, g, h, j, k) {
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 k = k | 0;
 var l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0;
 B = i;
 i = i + 240 | 0;
 t = B + 202 | 0;
 l = B + 200 | 0;
 A = B + 24 | 0;
 z = B + 12 | 0;
 x = B + 8 | 0;
 y = B + 40 | 0;
 v = B + 4 | 0;
 u = B;
 w = km(h) | 0;
 rh(A, h, t, l);
 c[z >> 2] = 0;
 c[z + 4 >> 2] = 0;
 c[z + 8 >> 2] = 0;
 if (!(a[z >> 0] & 1)) e = 10; else e = (c[z >> 2] & -2) + -1 | 0;
 ef(z, e, 0);
 q = z + 8 | 0;
 r = z + 1 | 0;
 o = (a[z >> 0] & 1) == 0 ? r : c[q >> 2] | 0;
 c[x >> 2] = o;
 c[v >> 2] = y;
 c[u >> 2] = 0;
 s = z + 4 | 0;
 p = a[l >> 0] | 0;
 e = c[f >> 2] | 0;
 l = o;
 a : while (1) {
  if (e) {
   if ((c[e + 12 >> 2] | 0) == (c[e + 16 >> 2] | 0) ? (wb[c[(c[e >> 2] | 0) + 36 >> 2] & 63](e) | 0) == -1 : 0) {
    c[f >> 2] = 0;
    e = 0;
   }
  } else e = 0;
  h = (e | 0) == 0;
  m = c[g >> 2] | 0;
  do if (m) {
   if ((c[m + 12 >> 2] | 0) != (c[m + 16 >> 2] | 0)) if (h) break; else break a;
   if ((wb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0) != -1) if (h) break; else break a; else {
    c[g >> 2] = 0;
    C = 13;
    break;
   }
  } else C = 13; while (0);
  if ((C | 0) == 13) {
   C = 0;
   if (h) {
    m = 0;
    break;
   } else m = 0;
  }
  n = a[z >> 0] | 0;
  n = (n & 1) == 0 ? (n & 255) >>> 1 : c[s >> 2] | 0;
  if ((c[x >> 2] | 0) == (l + n | 0)) {
   ef(z, n << 1, 0);
   if (!(a[z >> 0] & 1)) h = 10; else h = (c[z >> 2] & -2) + -1 | 0;
   ef(z, h, 0);
   l = (a[z >> 0] & 1) == 0 ? r : c[q >> 2] | 0;
   c[x >> 2] = l + n;
  }
  n = e + 12 | 0;
  h = c[n >> 2] | 0;
  o = e + 16 | 0;
  if ((h | 0) == (c[o >> 2] | 0)) h = wb[c[(c[e >> 2] | 0) + 36 >> 2] & 63](e) | 0; else h = d[h >> 0] | 0;
  if (bh(h & 255, w, l, x, u, p, A, y, v, t) | 0) break;
  h = c[n >> 2] | 0;
  if ((h | 0) == (c[o >> 2] | 0)) {
   wb[c[(c[e >> 2] | 0) + 40 >> 2] & 63](e) | 0;
   continue;
  } else {
   c[n >> 2] = h + 1;
   continue;
  }
 }
 t = a[A >> 0] | 0;
 h = c[v >> 2] | 0;
 if ((((t & 1) == 0 ? (t & 255) >>> 1 : c[A + 4 >> 2] | 0) | 0) != 0 ? (h - y | 0) < 160 : 0) {
  t = c[u >> 2] | 0;
  u = h + 4 | 0;
  c[v >> 2] = u;
  c[h >> 2] = t;
  h = u;
 }
 b[k >> 1] = ho(l, c[x >> 2] | 0, j, w) | 0;
 $j(A, y, h, j);
 if (e) {
  if ((c[e + 12 >> 2] | 0) == (c[e + 16 >> 2] | 0) ? (wb[c[(c[e >> 2] | 0) + 36 >> 2] & 63](e) | 0) == -1 : 0) {
   c[f >> 2] = 0;
   e = 0;
  }
 } else e = 0;
 e = (e | 0) == 0;
 do if (m) {
  if ((c[m + 12 >> 2] | 0) == (c[m + 16 >> 2] | 0) ? (wb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0) == -1 : 0) {
   c[g >> 2] = 0;
   C = 38;
   break;
  }
  if (!e) C = 39;
 } else C = 38; while (0);
 if ((C | 0) == 38 ? e : 0) C = 39;
 if ((C | 0) == 39) c[j >> 2] = c[j >> 2] | 2;
 C = c[f >> 2] | 0;
 bf(z);
 bf(A);
 i = B;
 return C | 0;
}

function Bm(b, e, f, g, h, j) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0;
 A = i;
 i = i + 240 | 0;
 s = A + 202 | 0;
 k = A + 200 | 0;
 z = A + 24 | 0;
 y = A + 12 | 0;
 w = A + 8 | 0;
 x = A + 40 | 0;
 u = A + 4 | 0;
 t = A;
 v = km(g) | 0;
 rh(z, g, s, k);
 c[y >> 2] = 0;
 c[y + 4 >> 2] = 0;
 c[y + 8 >> 2] = 0;
 if (!(a[y >> 0] & 1)) b = 10; else b = (c[y >> 2] & -2) + -1 | 0;
 ef(y, b, 0);
 p = y + 8 | 0;
 q = y + 1 | 0;
 n = (a[y >> 0] & 1) == 0 ? q : c[p >> 2] | 0;
 c[w >> 2] = n;
 c[u >> 2] = x;
 c[t >> 2] = 0;
 r = y + 4 | 0;
 o = a[k >> 0] | 0;
 b = c[e >> 2] | 0;
 k = n;
 a : while (1) {
  if (b) {
   if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0) ? (wb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1 : 0) {
    c[e >> 2] = 0;
    b = 0;
   }
  } else b = 0;
  g = (b | 0) == 0;
  l = c[f >> 2] | 0;
  do if (l) {
   if ((c[l + 12 >> 2] | 0) != (c[l + 16 >> 2] | 0)) if (g) break; else break a;
   if ((wb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0) != -1) if (g) break; else break a; else {
    c[f >> 2] = 0;
    B = 13;
    break;
   }
  } else B = 13; while (0);
  if ((B | 0) == 13) {
   B = 0;
   if (g) {
    l = 0;
    break;
   } else l = 0;
  }
  m = a[y >> 0] | 0;
  m = (m & 1) == 0 ? (m & 255) >>> 1 : c[r >> 2] | 0;
  if ((c[w >> 2] | 0) == (k + m | 0)) {
   ef(y, m << 1, 0);
   if (!(a[y >> 0] & 1)) g = 10; else g = (c[y >> 2] & -2) + -1 | 0;
   ef(y, g, 0);
   k = (a[y >> 0] & 1) == 0 ? q : c[p >> 2] | 0;
   c[w >> 2] = k + m;
  }
  m = b + 12 | 0;
  g = c[m >> 2] | 0;
  n = b + 16 | 0;
  if ((g | 0) == (c[n >> 2] | 0)) g = wb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0; else g = d[g >> 0] | 0;
  if (bh(g & 255, v, k, w, t, o, z, x, u, s) | 0) break;
  g = c[m >> 2] | 0;
  if ((g | 0) == (c[n >> 2] | 0)) {
   wb[c[(c[b >> 2] | 0) + 40 >> 2] & 63](b) | 0;
   continue;
  } else {
   c[m >> 2] = g + 1;
   continue;
  }
 }
 s = a[z >> 0] | 0;
 g = c[u >> 2] | 0;
 if ((((s & 1) == 0 ? (s & 255) >>> 1 : c[z + 4 >> 2] | 0) | 0) != 0 ? (g - x | 0) < 160 : 0) {
  s = c[t >> 2] | 0;
  t = g + 4 | 0;
  c[u >> 2] = t;
  c[g >> 2] = s;
  g = t;
 }
 c[j >> 2] = jo(k, c[w >> 2] | 0, h, v) | 0;
 $j(z, x, g, h);
 if (b) {
  if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0) ? (wb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1 : 0) {
   c[e >> 2] = 0;
   b = 0;
  }
 } else b = 0;
 b = (b | 0) == 0;
 do if (l) {
  if ((c[l + 12 >> 2] | 0) == (c[l + 16 >> 2] | 0) ? (wb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0) == -1 : 0) {
   c[f >> 2] = 0;
   B = 38;
   break;
  }
  if (!b) B = 39;
 } else B = 38; while (0);
 if ((B | 0) == 38 ? b : 0) B = 39;
 if ((B | 0) == 39) c[h >> 2] = c[h >> 2] | 2;
 B = c[e >> 2] | 0;
 bf(y);
 bf(z);
 i = A;
 return B | 0;
}

function ck(b, d, e, f, g, h, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0;
 E = i;
 i = i + 576 | 0;
 v = E + 424 | 0;
 y = E;
 u = E + 24 | 0;
 D = E + 16 | 0;
 w = E + 12 | 0;
 A = E + 8 | 0;
 k = E + 464 | 0;
 s = E + 4 | 0;
 x = E + 468 | 0;
 c[D >> 2] = u;
 C = D + 4 | 0;
 c[C >> 2] = 98;
 c[A >> 2] = Af(g) | 0;
 b = Ok(A, 9328) | 0;
 a[k >> 0] = 0;
 c[s >> 2] = c[e >> 2];
 t = c[g + 4 >> 2] | 0;
 c[v >> 2] = c[s >> 2];
 if (dk(d, v, f, A, t, h, k, b, D, w, u + 400 | 0) | 0) {
  Ab[c[(c[b >> 2] | 0) + 48 >> 2] & 7](b, 21450, 21460, v) | 0;
  f = c[w >> 2] | 0;
  g = c[D >> 2] | 0;
  b = f - g | 0;
  if ((b | 0) > 392) {
   b = qe((b >> 2) + 2 | 0) | 0;
   if (!b) Ec(); else {
    z = b;
    l = b;
   }
  } else {
   z = 0;
   l = x;
  }
  if (!(a[k >> 0] | 0)) b = l; else {
   a[l >> 0] = 45;
   b = l + 1 | 0;
  }
  t = v + 40 | 0;
  u = v;
  if (g >>> 0 < f >>> 0) {
   k = v + 4 | 0;
   l = k + 4 | 0;
   m = l + 4 | 0;
   n = m + 4 | 0;
   o = n + 4 | 0;
   p = o + 4 | 0;
   q = p + 4 | 0;
   r = q + 4 | 0;
   s = r + 4 | 0;
   do {
    f = c[g >> 2] | 0;
    if ((c[v >> 2] | 0) != (f | 0)) if ((c[k >> 2] | 0) != (f | 0)) if ((c[l >> 2] | 0) != (f | 0)) if ((c[m >> 2] | 0) != (f | 0)) if ((c[n >> 2] | 0) != (f | 0)) if ((c[o >> 2] | 0) != (f | 0)) if ((c[p >> 2] | 0) != (f | 0)) if ((c[q >> 2] | 0) != (f | 0)) if ((c[r >> 2] | 0) == (f | 0)) f = r; else f = (c[s >> 2] | 0) == (f | 0) ? s : t; else f = q; else f = p; else f = o; else f = n; else f = m; else f = l; else f = k; else f = v;
    a[b >> 0] = a[21450 + (f - u >> 2) >> 0] | 0;
    g = g + 4 | 0;
    b = b + 1 | 0;
   } while (g >>> 0 < (c[w >> 2] | 0) >>> 0);
  }
  a[b >> 0] = 0;
  c[y >> 2] = j;
  Dd(x, 21446, y) | 0;
  if (z) re(z);
 }
 b = c[d >> 2] | 0;
 do if (b) {
  f = c[b + 12 >> 2] | 0;
  if ((f | 0) == (c[b + 16 >> 2] | 0)) b = wb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0; else b = c[f >> 2] | 0;
  if ((b | 0) == -1) {
   c[d >> 2] = 0;
   g = 1;
   break;
  } else {
   g = (c[d >> 2] | 0) == 0;
   break;
  }
 } else g = 1; while (0);
 b = c[e >> 2] | 0;
 do if (b) {
  f = c[b + 12 >> 2] | 0;
  if ((f | 0) == (c[b + 16 >> 2] | 0)) b = wb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0; else b = c[f >> 2] | 0;
  if ((b | 0) != -1) if (g) break; else {
   B = 30;
   break;
  } else {
   c[e >> 2] = 0;
   B = 28;
   break;
  }
 } else B = 28; while (0);
 if ((B | 0) == 28 ? g : 0) B = 30;
 if ((B | 0) == 30) c[h >> 2] = c[h >> 2] | 2;
 f = c[d >> 2] | 0;
 mo(c[A >> 2] | 0) | 0;
 b = c[D >> 2] | 0;
 c[D >> 2] = 0;
 if (b) sb[c[C >> 2] & 127](b);
 i = E;
 return f | 0;
}

function Kn(d, f, g, h, i, j, k, l) {
 d = d | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 j = j | 0;
 k = k | 0;
 l = l | 0;
 var m = 0, n = 0;
 c[g >> 2] = d;
 c[j >> 2] = h;
 if (l & 2) if ((i - h | 0) < 3) d = 1; else {
  c[j >> 2] = h + 1;
  a[h >> 0] = -17;
  m = c[j >> 2] | 0;
  c[j >> 2] = m + 1;
  a[m >> 0] = -69;
  m = c[j >> 2] | 0;
  c[j >> 2] = m + 1;
  a[m >> 0] = -65;
  m = 4;
 } else m = 4;
 a : do if ((m | 0) == 4) {
  n = f;
  d = c[g >> 2] | 0;
  if (d >>> 0 < f >>> 0) while (1) {
   l = b[d >> 1] | 0;
   m = l & 65535;
   if (m >>> 0 > k >>> 0) {
    d = 2;
    break a;
   }
   do if ((l & 65535) < 128) {
    d = c[j >> 2] | 0;
    if ((i - d | 0) < 1) {
     d = 1;
     break a;
    }
    c[j >> 2] = d + 1;
    a[d >> 0] = l;
   } else {
    if ((l & 65535) < 2048) {
     d = c[j >> 2] | 0;
     if ((i - d | 0) < 2) {
      d = 1;
      break a;
     }
     c[j >> 2] = d + 1;
     a[d >> 0] = m >>> 6 | 192;
     h = c[j >> 2] | 0;
     c[j >> 2] = h + 1;
     a[h >> 0] = m & 63 | 128;
     break;
    }
    if ((l & 65535) < 55296) {
     d = c[j >> 2] | 0;
     if ((i - d | 0) < 3) {
      d = 1;
      break a;
     }
     c[j >> 2] = d + 1;
     a[d >> 0] = m >>> 12 | 224;
     h = c[j >> 2] | 0;
     c[j >> 2] = h + 1;
     a[h >> 0] = m >>> 6 & 63 | 128;
     h = c[j >> 2] | 0;
     c[j >> 2] = h + 1;
     a[h >> 0] = m & 63 | 128;
     break;
    }
    if ((l & 65535) >= 56320) {
     if ((l & 65535) < 57344) {
      d = 2;
      break a;
     }
     d = c[j >> 2] | 0;
     if ((i - d | 0) < 3) {
      d = 1;
      break a;
     }
     c[j >> 2] = d + 1;
     a[d >> 0] = m >>> 12 | 224;
     h = c[j >> 2] | 0;
     c[j >> 2] = h + 1;
     a[h >> 0] = m >>> 6 & 63 | 128;
     h = c[j >> 2] | 0;
     c[j >> 2] = h + 1;
     a[h >> 0] = m & 63 | 128;
     break;
    }
    if ((n - d | 0) < 4) {
     d = 1;
     break a;
    }
    d = d + 2 | 0;
    l = e[d >> 1] | 0;
    if ((l & 64512 | 0) != 56320) {
     d = 2;
     break a;
    }
    if ((i - (c[j >> 2] | 0) | 0) < 4) {
     d = 1;
     break a;
    }
    h = m & 960;
    if (((h << 10) + 65536 | m << 10 & 64512 | l & 1023) >>> 0 > k >>> 0) {
     d = 2;
     break a;
    }
    c[g >> 2] = d;
    d = (h >>> 6) + 1 | 0;
    h = c[j >> 2] | 0;
    c[j >> 2] = h + 1;
    a[h >> 0] = d >>> 2 | 240;
    h = c[j >> 2] | 0;
    c[j >> 2] = h + 1;
    a[h >> 0] = m >>> 2 & 15 | d << 4 & 48 | 128;
    h = c[j >> 2] | 0;
    c[j >> 2] = h + 1;
    a[h >> 0] = m << 4 & 48 | l >>> 6 & 15 | 128;
    m = c[j >> 2] | 0;
    c[j >> 2] = m + 1;
    a[m >> 0] = l & 63 | 128;
   } while (0);
   d = (c[g >> 2] | 0) + 2 | 0;
   c[g >> 2] = d;
   if (d >>> 0 >= f >>> 0) {
    d = 0;
    break;
   }
  } else d = 0;
 } while (0);
 return d | 0;
}

function Vj(b, d, e, f, g, h, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0;
 E = i;
 i = i + 240 | 0;
 x = E + 24 | 0;
 y = E;
 u = E + 136 | 0;
 D = E + 16 | 0;
 w = E + 12 | 0;
 A = E + 8 | 0;
 k = E + 134 | 0;
 s = E + 4 | 0;
 v = E + 124 | 0;
 c[D >> 2] = u;
 C = D + 4 | 0;
 c[C >> 2] = 98;
 c[A >> 2] = Af(g) | 0;
 b = Ok(A, 9336) | 0;
 a[k >> 0] = 0;
 c[s >> 2] = c[e >> 2];
 t = c[g + 4 >> 2] | 0;
 c[x >> 2] = c[s >> 2];
 if (Xj(d, x, f, A, t, h, k, b, D, w, u + 100 | 0) | 0) {
  Ab[c[(c[b >> 2] | 0) + 32 >> 2] & 7](b, 21435, 21445, v) | 0;
  f = c[w >> 2] | 0;
  g = c[D >> 2] | 0;
  b = f - g | 0;
  if ((b | 0) > 98) {
   b = qe(b + 2 | 0) | 0;
   if (!b) Ec(); else {
    z = b;
    l = b;
   }
  } else {
   z = 0;
   l = x;
  }
  if (!(a[k >> 0] | 0)) b = l; else {
   a[l >> 0] = 45;
   b = l + 1 | 0;
  }
  t = v + 10 | 0;
  u = v;
  if (g >>> 0 < f >>> 0) {
   k = v + 1 | 0;
   l = k + 1 | 0;
   m = l + 1 | 0;
   n = m + 1 | 0;
   o = n + 1 | 0;
   p = o + 1 | 0;
   q = p + 1 | 0;
   r = q + 1 | 0;
   s = r + 1 | 0;
   do {
    f = a[g >> 0] | 0;
    if ((a[v >> 0] | 0) != f << 24 >> 24) if ((a[k >> 0] | 0) != f << 24 >> 24) if ((a[l >> 0] | 0) != f << 24 >> 24) if ((a[m >> 0] | 0) != f << 24 >> 24) if ((a[n >> 0] | 0) != f << 24 >> 24) if ((a[o >> 0] | 0) != f << 24 >> 24) if ((a[p >> 0] | 0) != f << 24 >> 24) if ((a[q >> 0] | 0) != f << 24 >> 24) if ((a[r >> 0] | 0) == f << 24 >> 24) f = r; else f = (a[s >> 0] | 0) == f << 24 >> 24 ? s : t; else f = q; else f = p; else f = o; else f = n; else f = m; else f = l; else f = k; else f = v;
    a[b >> 0] = a[21435 + (f - u) >> 0] | 0;
    g = g + 1 | 0;
    b = b + 1 | 0;
   } while (g >>> 0 < (c[w >> 2] | 0) >>> 0);
  }
  a[b >> 0] = 0;
  c[y >> 2] = j;
  Dd(x, 21446, y) | 0;
  if (z) re(z);
 }
 b = c[d >> 2] | 0;
 do if (b) {
  if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0)) if ((wb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1) {
   c[d >> 2] = 0;
   b = 0;
   break;
  } else {
   b = c[d >> 2] | 0;
   break;
  }
 } else b = 0; while (0);
 b = (b | 0) == 0;
 f = c[e >> 2] | 0;
 do if (f) {
  if ((c[f + 12 >> 2] | 0) == (c[f + 16 >> 2] | 0) ? (wb[c[(c[f >> 2] | 0) + 36 >> 2] & 63](f) | 0) == -1 : 0) {
   c[e >> 2] = 0;
   B = 25;
   break;
  }
  if (!b) B = 26;
 } else B = 25; while (0);
 if ((B | 0) == 25 ? b : 0) B = 26;
 if ((B | 0) == 26) c[h >> 2] = c[h >> 2] | 2;
 f = c[d >> 2] | 0;
 mo(c[A >> 2] | 0) | 0;
 b = c[D >> 2] | 0;
 c[D >> 2] = 0;
 if (b) sb[c[C >> 2] & 127](b);
 i = E;
 return f | 0;
}

function fd(a, b) {
 a = +a;
 b = +b;
 var d = 0, e = 0, f = 0, g = 0, i = 0, j = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 h[k >> 3] = a;
 d = c[k >> 2] | 0;
 m = c[k + 4 >> 2] | 0;
 h[k >> 3] = b;
 n = c[k >> 2] | 0;
 o = c[k + 4 >> 2] | 0;
 e = to(d | 0, m | 0, 52) | 0;
 e = e & 2047;
 j = to(n | 0, o | 0, 52) | 0;
 j = j & 2047;
 p = m & -2147483648;
 i = vo(n | 0, o | 0, 1) | 0;
 l = D;
 a : do if (!((i | 0) == 0 & (l | 0) == 0) ? (g = o & 2147483647, !(g >>> 0 > 2146435072 | (g | 0) == 2146435072 & n >>> 0 > 0 | (e | 0) == 2047)) : 0) {
  f = vo(d | 0, m | 0, 1) | 0;
  g = D;
  if (!(g >>> 0 > l >>> 0 | (g | 0) == (l | 0) & f >>> 0 > i >>> 0)) return +((f | 0) == (i | 0) & (g | 0) == (l | 0) ? a * 0.0 : a);
  if (!e) {
   e = vo(d | 0, m | 0, 12) | 0;
   f = D;
   if ((f | 0) > -1 | (f | 0) == -1 & e >>> 0 > 4294967295) {
    g = e;
    e = 0;
    do {
     e = e + -1 | 0;
     g = vo(g | 0, f | 0, 1) | 0;
     f = D;
    } while ((f | 0) > -1 | (f | 0) == -1 & g >>> 0 > 4294967295);
   } else e = 0;
   d = vo(d | 0, m | 0, 1 - e | 0) | 0;
   f = D;
  } else f = m & 1048575 | 1048576;
  if (!j) {
   g = vo(n | 0, o | 0, 12) | 0;
   i = D;
   if ((i | 0) > -1 | (i | 0) == -1 & g >>> 0 > 4294967295) {
    j = 0;
    do {
     j = j + -1 | 0;
     g = vo(g | 0, i | 0, 1) | 0;
     i = D;
    } while ((i | 0) > -1 | (i | 0) == -1 & g >>> 0 > 4294967295);
   } else j = 0;
   n = vo(n | 0, o | 0, 1 - j | 0) | 0;
   m = D;
  } else m = o & 1048575 | 1048576;
  l = qo(d | 0, f | 0, n | 0, m | 0) | 0;
  i = D;
  g = (i | 0) > -1 | (i | 0) == -1 & l >>> 0 > 4294967295;
  b : do if ((e | 0) > (j | 0)) {
   while (1) {
    if (g) if ((d | 0) == (n | 0) & (f | 0) == (m | 0)) break; else {
     d = l;
     f = i;
    }
    d = vo(d | 0, f | 0, 1) | 0;
    f = D;
    e = e + -1 | 0;
    l = qo(d | 0, f | 0, n | 0, m | 0) | 0;
    i = D;
    g = (i | 0) > -1 | (i | 0) == -1 & l >>> 0 > 4294967295;
    if ((e | 0) <= (j | 0)) break b;
   }
   b = a * 0.0;
   break a;
  } while (0);
  if (g) if ((d | 0) == (n | 0) & (f | 0) == (m | 0)) {
   b = a * 0.0;
   break;
  } else {
   f = i;
   d = l;
  }
  if (f >>> 0 < 1048576 | (f | 0) == 1048576 & d >>> 0 < 0) do {
   d = vo(d | 0, f | 0, 1) | 0;
   f = D;
   e = e + -1 | 0;
  } while (f >>> 0 < 1048576 | (f | 0) == 1048576 & d >>> 0 < 0);
  if ((e | 0) > 0) {
   o = so(d | 0, f | 0, 0, -1048576) | 0;
   d = D;
   e = vo(e | 0, 0, 52) | 0;
   d = d | D;
   e = o | e;
  } else {
   e = to(d | 0, f | 0, 1 - e | 0) | 0;
   d = D;
  }
  c[k >> 2] = e;
  c[k + 4 >> 2] = d | p;
  b = +h[k >> 3];
 } else q = 3; while (0);
 if ((q | 0) == 3) {
  b = a * b;
  b = b / b;
 }
 return +b;
}

function uc(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 a : do if ((b | 0) == (c[d + 8 >> 2] | 0)) {
  if ((c[d + 4 >> 2] | 0) == (e | 0) ? (h = d + 28 | 0, (c[h >> 2] | 0) != 1) : 0) c[h >> 2] = f;
 } else {
  if ((b | 0) != (c[d >> 2] | 0)) {
   q = c[b + 12 >> 2] | 0;
   j = b + 16 + (q << 3) | 0;
   wc(b + 16 | 0, d, e, f, g);
   h = b + 24 | 0;
   if ((q | 0) <= 1) break;
   i = c[b + 8 >> 2] | 0;
   if ((i & 2 | 0) == 0 ? (k = d + 36 | 0, (c[k >> 2] | 0) != 1) : 0) {
    if (!(i & 1)) {
     i = d + 54 | 0;
     while (1) {
      if (a[i >> 0] | 0) break a;
      if ((c[k >> 2] | 0) == 1) break a;
      wc(h, d, e, f, g);
      h = h + 8 | 0;
      if (h >>> 0 >= j >>> 0) break a;
     }
    }
    i = d + 24 | 0;
    b = d + 54 | 0;
    while (1) {
     if (a[b >> 0] | 0) break a;
     if ((c[k >> 2] | 0) == 1 ? (c[i >> 2] | 0) == 1 : 0) break a;
     wc(h, d, e, f, g);
     h = h + 8 | 0;
     if (h >>> 0 >= j >>> 0) break a;
    }
   }
   i = d + 54 | 0;
   while (1) {
    if (a[i >> 0] | 0) break a;
    wc(h, d, e, f, g);
    h = h + 8 | 0;
    if (h >>> 0 >= j >>> 0) break a;
   }
  }
  if ((c[d + 16 >> 2] | 0) != (e | 0) ? (p = d + 20 | 0, (c[p >> 2] | 0) != (e | 0)) : 0) {
   c[d + 32 >> 2] = f;
   m = d + 44 | 0;
   if ((c[m >> 2] | 0) == 4) break;
   i = c[b + 12 >> 2] | 0;
   j = b + 16 + (i << 3) | 0;
   k = d + 52 | 0;
   f = d + 53 | 0;
   n = d + 54 | 0;
   l = b + 8 | 0;
   o = d + 24 | 0;
   b : do if ((i | 0) > 0) {
    i = 0;
    h = 0;
    b = b + 16 | 0;
    while (1) {
     a[k >> 0] = 0;
     a[f >> 0] = 0;
     vc(b, d, e, e, 1, g);
     if (a[n >> 0] | 0) {
      q = 20;
      break b;
     }
     do if (a[f >> 0] | 0) {
      if (!(a[k >> 0] | 0)) if (!(c[l >> 2] & 1)) {
       h = 1;
       q = 20;
       break b;
      } else {
       h = 1;
       break;
      }
      if ((c[o >> 2] | 0) == 1) break b;
      if (!(c[l >> 2] & 2)) break b; else {
       i = 1;
       h = 1;
      }
     } while (0);
     b = b + 8 | 0;
     if (b >>> 0 >= j >>> 0) {
      q = 20;
      break;
     }
    }
   } else {
    i = 0;
    h = 0;
    q = 20;
   } while (0);
   do if ((q | 0) == 20) {
    if ((!i ? (c[p >> 2] = e, e = d + 40 | 0, c[e >> 2] = (c[e >> 2] | 0) + 1, (c[d + 36 >> 2] | 0) == 1) : 0) ? (c[o >> 2] | 0) == 2 : 0) {
     a[n >> 0] = 1;
     if (h) break;
    } else q = 24;
    if ((q | 0) == 24 ? h : 0) break;
    c[m >> 2] = 4;
    break a;
   } while (0);
   c[m >> 2] = 3;
   break;
  }
  if ((f | 0) == 1) c[d + 32 >> 2] = 1;
 } while (0);
 return;
}

function Qh(b, d, e, f, g, h, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0;
 t = i;
 i = i + 16 | 0;
 s = t;
 r = Ok(j, 9328) | 0;
 m = Ok(j, 9484) | 0;
 tb[c[(c[m >> 2] | 0) + 20 >> 2] & 63](s, m);
 p = a[s >> 0] | 0;
 q = s + 4 | 0;
 if (((p & 1) == 0 ? (p & 255) >>> 1 : c[q >> 2] | 0) | 0) {
  c[h >> 2] = f;
  j = a[b >> 0] | 0;
  switch (j << 24 >> 24) {
  case 43:
  case 45:
   {
    p = Cb[c[(c[r >> 2] | 0) + 44 >> 2] & 15](r, j) | 0;
    k = c[h >> 2] | 0;
    c[h >> 2] = k + 4;
    c[k >> 2] = p;
    k = b + 1 | 0;
    break;
   }
  default:
   k = b;
  }
  a : do if ((e - k | 0) > 1 ? (a[k >> 0] | 0) == 48 : 0) {
   j = k + 1 | 0;
   switch (a[j >> 0] | 0) {
   case 88:
   case 120:
    break;
   default:
    break a;
   }
   p = Cb[c[(c[r >> 2] | 0) + 44 >> 2] & 15](r, 48) | 0;
   o = c[h >> 2] | 0;
   c[h >> 2] = o + 4;
   c[o >> 2] = p;
   o = Cb[c[(c[r >> 2] | 0) + 44 >> 2] & 15](r, a[j >> 0] | 0) | 0;
   p = c[h >> 2] | 0;
   c[h >> 2] = p + 4;
   c[p >> 2] = o;
   k = k + 2 | 0;
  } while (0);
  if ((k | 0) != (e | 0) ? (n = e + -1 | 0, k >>> 0 < n >>> 0) : 0) {
   l = k;
   j = n;
   do {
    p = a[l >> 0] | 0;
    a[l >> 0] = a[j >> 0] | 0;
    a[j >> 0] = p;
    l = l + 1 | 0;
    j = j + -1 | 0;
   } while (l >>> 0 < j >>> 0);
  }
  m = wb[c[(c[m >> 2] | 0) + 16 >> 2] & 63](m) | 0;
  n = s + 8 | 0;
  o = s + 1 | 0;
  if (k >>> 0 < e >>> 0) {
   j = 0;
   l = 0;
   p = k;
   while (1) {
    u = a[((a[s >> 0] & 1) == 0 ? o : c[n >> 2] | 0) + l >> 0] | 0;
    if (u << 24 >> 24 != 0 & (j | 0) == (u << 24 >> 24 | 0)) {
     u = c[h >> 2] | 0;
     c[h >> 2] = u + 4;
     c[u >> 2] = m;
     u = a[s >> 0] | 0;
     j = 0;
     l = (l >>> 0 < (((u & 1) == 0 ? (u & 255) >>> 1 : c[q >> 2] | 0) + -1 | 0) >>> 0 & 1) + l | 0;
    }
    v = Cb[c[(c[r >> 2] | 0) + 44 >> 2] & 15](r, a[p >> 0] | 0) | 0;
    u = c[h >> 2] | 0;
    c[h >> 2] = u + 4;
    c[u >> 2] = v;
    p = p + 1 | 0;
    if (p >>> 0 >= e >>> 0) break; else j = j + 1 | 0;
   }
  }
  j = f + (k - b << 2) | 0;
  l = c[h >> 2] | 0;
  if ((j | 0) != (l | 0)) {
   k = l + -4 | 0;
   if (j >>> 0 < k >>> 0) {
    do {
     v = c[j >> 2] | 0;
     c[j >> 2] = c[k >> 2];
     c[k >> 2] = v;
     j = j + 4 | 0;
     k = k + -4 | 0;
    } while (j >>> 0 < k >>> 0);
    j = l;
   } else j = l;
  }
 } else {
  Ab[c[(c[r >> 2] | 0) + 48 >> 2] & 7](r, b, e, f) | 0;
  j = f + (e - b << 2) | 0;
  c[h >> 2] = j;
 }
 c[g >> 2] = (d | 0) == (e | 0) ? j : f + (d - b << 2) | 0;
 bf(s);
 i = t;
 return;
}

function Dh(b, d, e, f, g, h, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0;
 t = i;
 i = i + 16 | 0;
 s = t;
 r = Ok(j, 9336) | 0;
 m = Ok(j, 9476) | 0;
 tb[c[(c[m >> 2] | 0) + 20 >> 2] & 63](s, m);
 p = a[s >> 0] | 0;
 q = s + 4 | 0;
 if (((p & 1) == 0 ? (p & 255) >>> 1 : c[q >> 2] | 0) | 0) {
  c[h >> 2] = f;
  j = a[b >> 0] | 0;
  switch (j << 24 >> 24) {
  case 43:
  case 45:
   {
    p = Cb[c[(c[r >> 2] | 0) + 28 >> 2] & 15](r, j) | 0;
    k = c[h >> 2] | 0;
    c[h >> 2] = k + 1;
    a[k >> 0] = p;
    k = b + 1 | 0;
    break;
   }
  default:
   k = b;
  }
  a : do if ((e - k | 0) > 1 ? (a[k >> 0] | 0) == 48 : 0) {
   j = k + 1 | 0;
   switch (a[j >> 0] | 0) {
   case 88:
   case 120:
    break;
   default:
    break a;
   }
   p = Cb[c[(c[r >> 2] | 0) + 28 >> 2] & 15](r, 48) | 0;
   o = c[h >> 2] | 0;
   c[h >> 2] = o + 1;
   a[o >> 0] = p;
   o = Cb[c[(c[r >> 2] | 0) + 28 >> 2] & 15](r, a[j >> 0] | 0) | 0;
   p = c[h >> 2] | 0;
   c[h >> 2] = p + 1;
   a[p >> 0] = o;
   k = k + 2 | 0;
  } while (0);
  if ((k | 0) != (e | 0) ? (n = e + -1 | 0, k >>> 0 < n >>> 0) : 0) {
   l = k;
   j = n;
   do {
    p = a[l >> 0] | 0;
    a[l >> 0] = a[j >> 0] | 0;
    a[j >> 0] = p;
    l = l + 1 | 0;
    j = j + -1 | 0;
   } while (l >>> 0 < j >>> 0);
  }
  m = wb[c[(c[m >> 2] | 0) + 16 >> 2] & 63](m) | 0;
  n = s + 8 | 0;
  o = s + 1 | 0;
  if (k >>> 0 < e >>> 0) {
   j = 0;
   l = 0;
   p = k;
   while (1) {
    u = a[((a[s >> 0] & 1) == 0 ? o : c[n >> 2] | 0) + l >> 0] | 0;
    if (u << 24 >> 24 != 0 & (j | 0) == (u << 24 >> 24 | 0)) {
     u = c[h >> 2] | 0;
     c[h >> 2] = u + 1;
     a[u >> 0] = m;
     u = a[s >> 0] | 0;
     j = 0;
     l = (l >>> 0 < (((u & 1) == 0 ? (u & 255) >>> 1 : c[q >> 2] | 0) + -1 | 0) >>> 0 & 1) + l | 0;
    }
    v = Cb[c[(c[r >> 2] | 0) + 28 >> 2] & 15](r, a[p >> 0] | 0) | 0;
    u = c[h >> 2] | 0;
    c[h >> 2] = u + 1;
    a[u >> 0] = v;
    p = p + 1 | 0;
    if (p >>> 0 >= e >>> 0) break; else j = j + 1 | 0;
   }
  }
  j = f + (k - b) | 0;
  k = c[h >> 2] | 0;
  if ((j | 0) != (k | 0)) {
   k = k + -1 | 0;
   if (j >>> 0 < k >>> 0) do {
    v = a[j >> 0] | 0;
    a[j >> 0] = a[k >> 0] | 0;
    a[k >> 0] = v;
    j = j + 1 | 0;
    k = k + -1 | 0;
   } while (j >>> 0 < k >>> 0);
   j = c[h >> 2] | 0;
  }
 } else {
  Ab[c[(c[r >> 2] | 0) + 32 >> 2] & 7](r, b, e, f) | 0;
  j = f + (e - b) | 0;
  c[h >> 2] = j;
 }
 c[g >> 2] = (d | 0) == (e | 0) ? j : f + (d - b) | 0;
 bf(s);
 i = t;
 return;
}

function yl(b, d, e, f, g, h, j, k) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 k = k | 0;
 var l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0;
 s = i;
 i = i + 16 | 0;
 q = s;
 a : do if ((e | 0) == (f | 0)) l = f; else {
  l = e;
  while (1) {
   if (!(a[l >> 0] | 0)) break a;
   l = l + 1 | 0;
   if ((l | 0) == (f | 0)) {
    l = f;
    break;
   }
  }
 } while (0);
 c[k >> 2] = h;
 c[g >> 2] = e;
 o = j;
 p = b + 8 | 0;
 b : do if ((h | 0) == (j | 0) | (e | 0) == (f | 0)) r = 29; else {
  c : while (1) {
   n = d;
   m = c[n + 4 >> 2] | 0;
   b = q;
   c[b >> 2] = c[n >> 2];
   c[b + 4 >> 2] = m;
   b = l;
   m = cd(c[p >> 2] | 0) | 0;
   n = od(h, g, b - e | 0, o - h >> 2, d) | 0;
   if (m) cd(m) | 0;
   switch (n | 0) {
   case 0:
    {
     e = 2;
     break b;
    }
   case -1:
    break c;
   default:
    {}
   }
   h = (c[k >> 2] | 0) + (n << 2) | 0;
   c[k >> 2] = h;
   if ((h | 0) == (j | 0)) {
    r = 19;
    break;
   }
   e = c[g >> 2] | 0;
   if ((l | 0) == (f | 0)) l = f; else {
    l = cd(c[p >> 2] | 0) | 0;
    e = md(h, e, 1, d) | 0;
    if (l) cd(l) | 0;
    if (e) {
     e = 2;
     break b;
    }
    c[k >> 2] = (c[k >> 2] | 0) + 4;
    e = (c[g >> 2] | 0) + 1 | 0;
    c[g >> 2] = e;
    d : do if ((e | 0) == (f | 0)) l = f; else {
     l = e;
     while (1) {
      if (!(a[l >> 0] | 0)) break d;
      l = l + 1 | 0;
      if ((l | 0) == (f | 0)) {
       l = f;
       break;
      }
     }
    } while (0);
    h = c[k >> 2] | 0;
   }
   if ((h | 0) == (j | 0) | (e | 0) == (f | 0)) {
    r = 29;
    break b;
   }
  }
  if ((r | 0) == 19) {
   e = c[g >> 2] | 0;
   r = 29;
   break;
  }
  c[k >> 2] = h;
  e : do if ((e | 0) != (c[g >> 2] | 0)) {
   f : while (1) {
    l = cd(c[p >> 2] | 0) | 0;
    h = md(h, e, b - e | 0, q) | 0;
    if (l) cd(l) | 0;
    switch (h | 0) {
    case -1:
     {
      r = 13;
      break f;
     }
    case -2:
     {
      r = 14;
      break f;
     }
    case 0:
     {
      e = e + 1 | 0;
      break;
     }
    default:
     e = e + h | 0;
    }
    h = (c[k >> 2] | 0) + 4 | 0;
    c[k >> 2] = h;
    if ((e | 0) == (c[g >> 2] | 0)) break e;
   }
   if ((r | 0) == 13) {
    c[g >> 2] = e;
    e = 2;
    break b;
   } else if ((r | 0) == 14) {
    c[g >> 2] = e;
    e = 1;
    break b;
   }
  } while (0);
  c[g >> 2] = e;
  e = (e | 0) != (f | 0) & 1;
 } while (0);
 if ((r | 0) == 29) e = (e | 0) != (f | 0) & 1;
 i = s;
 return e | 0;
}

function xl(b, d, e, f, g, h, j, k) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 k = k | 0;
 var l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0;
 s = i;
 i = i + 16 | 0;
 q = s;
 o = s + 8 | 0;
 a : do if ((e | 0) == (f | 0)) l = f; else {
  l = e;
  while (1) {
   if (!(c[l >> 2] | 0)) break a;
   l = l + 4 | 0;
   if ((l | 0) == (f | 0)) {
    l = f;
    break;
   }
  }
 } while (0);
 c[k >> 2] = h;
 c[g >> 2] = e;
 n = j;
 p = b + 8 | 0;
 b : do if ((h | 0) == (j | 0) | (e | 0) == (f | 0)) r = 29; else {
  c : while (1) {
   t = d;
   m = c[t + 4 >> 2] | 0;
   b = q;
   c[b >> 2] = c[t >> 2];
   c[b + 4 >> 2] = m;
   b = cd(c[p >> 2] | 0) | 0;
   m = sd(h, g, l - e >> 2, n - h | 0, d) | 0;
   if (b) cd(b) | 0;
   switch (m | 0) {
   case 0:
    {
     e = 1;
     break b;
    }
   case -1:
    break c;
   default:
    {}
   }
   h = (c[k >> 2] | 0) + m | 0;
   c[k >> 2] = h;
   if ((h | 0) == (j | 0)) {
    r = 15;
    break;
   }
   if ((l | 0) == (f | 0)) {
    e = c[g >> 2] | 0;
    l = f;
   } else {
    e = cd(c[p >> 2] | 0) | 0;
    h = rd(o, 0, d) | 0;
    if (e) cd(e) | 0;
    if ((h | 0) == -1) {
     e = 2;
     break b;
    }
    if (h >>> 0 > (n - (c[k >> 2] | 0) | 0) >>> 0) {
     e = 1;
     break b;
    }
    if (h) {
     e = o;
     while (1) {
      m = a[e >> 0] | 0;
      t = c[k >> 2] | 0;
      c[k >> 2] = t + 1;
      a[t >> 0] = m;
      h = h + -1 | 0;
      if (!h) break; else e = e + 1 | 0;
     }
    }
    e = (c[g >> 2] | 0) + 4 | 0;
    c[g >> 2] = e;
    d : do if ((e | 0) == (f | 0)) l = f; else {
     l = e;
     while (1) {
      if (!(c[l >> 2] | 0)) break d;
      l = l + 4 | 0;
      if ((l | 0) == (f | 0)) {
       l = f;
       break;
      }
     }
    } while (0);
    h = c[k >> 2] | 0;
   }
   if ((h | 0) == (j | 0) | (e | 0) == (f | 0)) {
    r = 29;
    break b;
   }
  }
  if ((r | 0) == 15) {
   e = c[g >> 2] | 0;
   r = 29;
   break;
  }
  c[k >> 2] = h;
  e : do if ((e | 0) != (c[g >> 2] | 0)) do {
   t = c[e >> 2] | 0;
   l = cd(c[p >> 2] | 0) | 0;
   h = rd(h, t, q) | 0;
   if (l) cd(l) | 0;
   if ((h | 0) == -1) break e;
   h = (c[k >> 2] | 0) + h | 0;
   c[k >> 2] = h;
   e = e + 4 | 0;
  } while ((e | 0) != (c[g >> 2] | 0)); while (0);
  c[g >> 2] = e;
  e = 2;
 } while (0);
 if ((r | 0) == 29) e = (e | 0) != (f | 0) & 1;
 i = s;
 return e | 0;
}

function th(b, e, f, g, h, i, j, k, l, m, n, o) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 j = j | 0;
 k = k | 0;
 l = l | 0;
 m = m | 0;
 n = n | 0;
 o = o | 0;
 var p = 0, q = 0;
 a : do if (b << 24 >> 24 == i << 24 >> 24) if (a[e >> 0] | 0) {
  a[e >> 0] = 0;
  f = c[h >> 2] | 0;
  c[h >> 2] = f + 1;
  a[f >> 0] = 46;
  f = a[k >> 0] | 0;
  if ((((f & 1) == 0 ? (f & 255) >>> 1 : c[k + 4 >> 2] | 0) | 0) != 0 ? (p = c[m >> 2] | 0, (p - l | 0) < 160) : 0) {
   l = c[n >> 2] | 0;
   c[m >> 2] = p + 4;
   c[p >> 2] = l;
   p = 0;
  } else p = 0;
 } else p = -1; else {
  if (b << 24 >> 24 == j << 24 >> 24 ? (j = a[k >> 0] | 0, (((j & 1) == 0 ? (j & 255) >>> 1 : c[k + 4 >> 2] | 0) | 0) != 0) : 0) {
   if (!(a[e >> 0] | 0)) {
    p = -1;
    break;
   }
   p = c[m >> 2] | 0;
   if ((p - l | 0) >= 160) {
    p = 0;
    break;
   }
   l = c[n >> 2] | 0;
   c[m >> 2] = p + 4;
   c[p >> 2] = l;
   c[n >> 2] = 0;
   p = 0;
   break;
  }
  i = o + 32 | 0;
  p = o;
  while (1) {
   if ((a[p >> 0] | 0) == b << 24 >> 24) break;
   p = p + 1 | 0;
   if ((p | 0) == (i | 0)) {
    p = i;
    break;
   }
  }
  i = p - o | 0;
  if ((i | 0) > 31) p = -1; else {
   j = a[19978 + i >> 0] | 0;
   switch (i | 0) {
   case 24:
   case 25:
    {
     p = c[h >> 2] | 0;
     if ((p | 0) != (g | 0) ? (d[p + -1 >> 0] & 95 | 0) != (d[f >> 0] & 127 | 0) : 0) {
      p = -1;
      break a;
     }
     c[h >> 2] = p + 1;
     a[p >> 0] = j;
     p = 0;
     break a;
    }
   case 23:
   case 22:
    {
     a[f >> 0] = 80;
     p = c[h >> 2] | 0;
     c[h >> 2] = p + 1;
     a[p >> 0] = j;
     p = 0;
     break a;
    }
   default:
    {
     p = j & 95;
     if ((((p | 0) == (a[f >> 0] | 0) ? (a[f >> 0] = p | 128, (a[e >> 0] | 0) != 0) : 0) ? (a[e >> 0] = 0, f = a[k >> 0] | 0, (((f & 1) == 0 ? (f & 255) >>> 1 : c[k + 4 >> 2] | 0) | 0) != 0) : 0) ? (q = c[m >> 2] | 0, (q - l | 0) < 160) : 0) {
      l = c[n >> 2] | 0;
      c[m >> 2] = q + 4;
      c[q >> 2] = l;
     }
     m = c[h >> 2] | 0;
     c[h >> 2] = m + 1;
     a[m >> 0] = j;
     if ((i | 0) > 21) {
      p = 0;
      break a;
     }
     c[n >> 2] = (c[n >> 2] | 0) + 1;
     p = 0;
     break a;
    }
   }
  }
 } while (0);
 return p | 0;
}

function ok(b, d, e, f, g, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 j = +j;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0;
 F = i;
 i = i + 1008 | 0;
 q = F + 8 | 0;
 l = F;
 b = F + 896 | 0;
 m = F + 888 | 0;
 k = F + 488 | 0;
 y = F + 480 | 0;
 v = F + 892 | 0;
 s = F + 72 | 0;
 w = F + 68 | 0;
 C = F + 56 | 0;
 E = F + 44 | 0;
 D = F + 32 | 0;
 o = F + 28 | 0;
 p = F + 80 | 0;
 u = F + 24 | 0;
 t = F + 20 | 0;
 r = F + 16 | 0;
 c[m >> 2] = b;
 h[q >> 3] = j;
 b = Cd(b, 100, 21461, q) | 0;
 if (b >>> 0 > 99) {
  b = ch() | 0;
  h[l >> 3] = j;
  b = Wm(m, b, 21461, l) | 0;
  k = c[m >> 2] | 0;
  if (!k) Ec();
  l = qe(b << 2) | 0;
  if (!l) Ec(); else {
   G = l;
   H = k;
   x = l;
   A = b;
  }
 } else {
  G = 0;
  H = 0;
  x = k;
  A = b;
 }
 b = Af(f) | 0;
 c[y >> 2] = b;
 n = Ok(y, 9328) | 0;
 l = c[m >> 2] | 0;
 Ab[c[(c[n >> 2] | 0) + 48 >> 2] & 7](n, l, l + A | 0, x) | 0;
 if (!A) m = 0; else m = (a[c[m >> 2] >> 0] | 0) == 45;
 c[C >> 2] = 0;
 c[C + 4 >> 2] = 0;
 c[C + 8 >> 2] = 0;
 c[E >> 2] = 0;
 c[E + 4 >> 2] = 0;
 c[E + 8 >> 2] = 0;
 c[D >> 2] = 0;
 c[D + 4 >> 2] = 0;
 c[D + 8 >> 2] = 0;
 pk(e, m, y, v, s, w, C, E, D, o);
 l = c[o >> 2] | 0;
 if ((A | 0) > (l | 0)) {
  e = a[D >> 0] | 0;
  k = a[E >> 0] | 0;
  k = (A - l << 1 | 1) + l + ((e & 1) == 0 ? (e & 255) >>> 1 : c[D + 4 >> 2] | 0) + ((k & 1) == 0 ? (k & 255) >>> 1 : c[E + 4 >> 2] | 0) | 0;
 } else {
  e = a[D >> 0] | 0;
  k = a[E >> 0] | 0;
  k = l + 2 + ((e & 1) == 0 ? (e & 255) >>> 1 : c[D + 4 >> 2] | 0) + ((k & 1) == 0 ? (k & 255) >>> 1 : c[E + 4 >> 2] | 0) | 0;
 }
 if (k >>> 0 > 100) {
  k = qe(k << 2) | 0;
  if (!k) Ec(); else {
   B = k;
   z = k;
  }
 } else {
  B = 0;
  z = p;
 }
 qk(z, u, t, c[f + 4 >> 2] | 0, x, x + (A << 2) | 0, n, m, v, c[s >> 2] | 0, c[w >> 2] | 0, C, E, D, l);
 c[r >> 2] = c[d >> 2];
 d = c[u >> 2] | 0;
 k = c[t >> 2] | 0;
 c[q >> 2] = c[r >> 2];
 k = Xm(q, z, d, k, f, g) | 0;
 if (B) {
  re(B);
  b = c[y >> 2] | 0;
 }
 nf(D);
 nf(E);
 bf(C);
 mo(b) | 0;
 if (G) re(G);
 if (H) re(H);
 i = F;
 return k | 0;
}

function ik(b, d, e, f, g, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 j = +j;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0;
 F = i;
 i = i + 384 | 0;
 q = F + 8 | 0;
 l = F;
 b = F + 284 | 0;
 m = F + 72 | 0;
 k = F + 184 | 0;
 y = F + 68 | 0;
 v = F + 80 | 0;
 s = F + 77 | 0;
 w = F + 76 | 0;
 C = F + 56 | 0;
 E = F + 44 | 0;
 D = F + 32 | 0;
 o = F + 28 | 0;
 p = F + 84 | 0;
 u = F + 24 | 0;
 t = F + 20 | 0;
 r = F + 16 | 0;
 c[m >> 2] = b;
 h[q >> 3] = j;
 b = Cd(b, 100, 21461, q) | 0;
 if (b >>> 0 > 99) {
  b = ch() | 0;
  h[l >> 3] = j;
  b = Wm(m, b, 21461, l) | 0;
  k = c[m >> 2] | 0;
  if (!k) Ec();
  l = qe(b) | 0;
  if (!l) Ec(); else {
   G = l;
   H = k;
   x = l;
   A = b;
  }
 } else {
  G = 0;
  H = 0;
  x = k;
  A = b;
 }
 b = Af(f) | 0;
 c[y >> 2] = b;
 n = Ok(y, 9336) | 0;
 l = c[m >> 2] | 0;
 Ab[c[(c[n >> 2] | 0) + 32 >> 2] & 7](n, l, l + A | 0, x) | 0;
 if (!A) m = 0; else m = (a[c[m >> 2] >> 0] | 0) == 45;
 c[C >> 2] = 0;
 c[C + 4 >> 2] = 0;
 c[C + 8 >> 2] = 0;
 c[E >> 2] = 0;
 c[E + 4 >> 2] = 0;
 c[E + 8 >> 2] = 0;
 c[D >> 2] = 0;
 c[D + 4 >> 2] = 0;
 c[D + 8 >> 2] = 0;
 jk(e, m, y, v, s, w, C, E, D, o);
 l = c[o >> 2] | 0;
 if ((A | 0) > (l | 0)) {
  e = a[D >> 0] | 0;
  k = a[E >> 0] | 0;
  k = (A - l << 1 | 1) + l + ((e & 1) == 0 ? (e & 255) >>> 1 : c[D + 4 >> 2] | 0) + ((k & 1) == 0 ? (k & 255) >>> 1 : c[E + 4 >> 2] | 0) | 0;
 } else {
  e = a[D >> 0] | 0;
  k = a[E >> 0] | 0;
  k = l + 2 + ((e & 1) == 0 ? (e & 255) >>> 1 : c[D + 4 >> 2] | 0) + ((k & 1) == 0 ? (k & 255) >>> 1 : c[E + 4 >> 2] | 0) | 0;
 }
 if (k >>> 0 > 100) {
  k = qe(k) | 0;
  if (!k) Ec(); else {
   B = k;
   z = k;
  }
 } else {
  B = 0;
  z = p;
 }
 kk(z, u, t, c[f + 4 >> 2] | 0, x, x + A | 0, n, m, v, a[s >> 0] | 0, a[w >> 0] | 0, C, E, D, l);
 c[r >> 2] = c[d >> 2];
 d = c[u >> 2] | 0;
 k = c[t >> 2] | 0;
 c[q >> 2] = c[r >> 2];
 k = Sb(q, z, d, k, f, g) | 0;
 if (B) {
  re(B);
  b = c[y >> 2] | 0;
 }
 bf(D);
 bf(E);
 bf(C);
 mo(b) | 0;
 if (G) re(G);
 if (H) re(H);
 i = F;
 return k | 0;
}

function Ti(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0;
 a = c[b >> 2] | 0;
 do if (a) {
  g = c[a + 12 >> 2] | 0;
  if ((g | 0) == (c[a + 16 >> 2] | 0)) a = wb[c[(c[a >> 2] | 0) + 36 >> 2] & 63](a) | 0; else a = c[g >> 2] | 0;
  if ((a | 0) == -1) {
   c[b >> 2] = 0;
   h = 1;
   break;
  } else {
   h = (c[b >> 2] | 0) == 0;
   break;
  }
 } else h = 1; while (0);
 g = c[d >> 2] | 0;
 do if (g) {
  a = c[g + 12 >> 2] | 0;
  if ((a | 0) == (c[g + 16 >> 2] | 0)) a = wb[c[(c[g >> 2] | 0) + 36 >> 2] & 63](g) | 0; else a = c[a >> 2] | 0;
  if ((a | 0) != -1) if (h) {
   i = g;
   j = 17;
   break;
  } else {
   j = 16;
   break;
  } else {
   c[d >> 2] = 0;
   j = 14;
   break;
  }
 } else j = 14; while (0);
 if ((j | 0) == 14) if (h) j = 16; else {
  i = 0;
  j = 17;
 }
 a : do if ((j | 0) == 16) c[e >> 2] = c[e >> 2] | 6; else if ((j | 0) == 17) {
  a = c[b >> 2] | 0;
  g = c[a + 12 >> 2] | 0;
  if ((g | 0) == (c[a + 16 >> 2] | 0)) a = wb[c[(c[a >> 2] | 0) + 36 >> 2] & 63](a) | 0; else a = c[g >> 2] | 0;
  if ((pb[c[(c[f >> 2] | 0) + 52 >> 2] & 31](f, a, 0) | 0) << 24 >> 24 != 37) {
   c[e >> 2] = c[e >> 2] | 4;
   break;
  }
  a = c[b >> 2] | 0;
  g = a + 12 | 0;
  h = c[g >> 2] | 0;
  if ((h | 0) == (c[a + 16 >> 2] | 0)) {
   wb[c[(c[a >> 2] | 0) + 40 >> 2] & 63](a) | 0;
   a = c[b >> 2] | 0;
   if (!a) g = 1; else j = 25;
  } else {
   c[g >> 2] = h + 4;
   j = 25;
  }
  do if ((j | 0) == 25) {
   g = c[a + 12 >> 2] | 0;
   if ((g | 0) == (c[a + 16 >> 2] | 0)) a = wb[c[(c[a >> 2] | 0) + 36 >> 2] & 63](a) | 0; else a = c[g >> 2] | 0;
   if ((a | 0) == -1) {
    c[b >> 2] = 0;
    g = 1;
    break;
   } else {
    g = (c[b >> 2] | 0) == 0;
    break;
   }
  } while (0);
  do if (i) {
   a = c[i + 12 >> 2] | 0;
   if ((a | 0) == (c[i + 16 >> 2] | 0)) a = wb[c[(c[i >> 2] | 0) + 36 >> 2] & 63](i) | 0; else a = c[a >> 2] | 0;
   if ((a | 0) != -1) if (g) break a; else break; else {
    c[d >> 2] = 0;
    j = 37;
    break;
   }
  } else j = 37; while (0);
  if ((j | 0) == 37 ? !g : 0) break;
  c[e >> 2] = c[e >> 2] | 2;
 } while (0);
 return;
}

function wh(b, e, f, g, h, i, j, k, l, m, n, o) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 j = j | 0;
 k = k | 0;
 l = l | 0;
 m = m | 0;
 n = n | 0;
 o = o | 0;
 var p = 0, q = 0;
 a : do if ((b | 0) == (i | 0)) if (a[e >> 0] | 0) {
  a[e >> 0] = 0;
  f = c[h >> 2] | 0;
  c[h >> 2] = f + 1;
  a[f >> 0] = 46;
  f = a[k >> 0] | 0;
  if ((((f & 1) == 0 ? (f & 255) >>> 1 : c[k + 4 >> 2] | 0) | 0) != 0 ? (p = c[m >> 2] | 0, (p - l | 0) < 160) : 0) {
   l = c[n >> 2] | 0;
   c[m >> 2] = p + 4;
   c[p >> 2] = l;
   p = 0;
  } else p = 0;
 } else p = -1; else {
  if ((b | 0) == (j | 0) ? (j = a[k >> 0] | 0, (((j & 1) == 0 ? (j & 255) >>> 1 : c[k + 4 >> 2] | 0) | 0) != 0) : 0) {
   if (!(a[e >> 0] | 0)) {
    p = -1;
    break;
   }
   p = c[m >> 2] | 0;
   if ((p - l | 0) >= 160) {
    p = 0;
    break;
   }
   l = c[n >> 2] | 0;
   c[m >> 2] = p + 4;
   c[p >> 2] = l;
   c[n >> 2] = 0;
   p = 0;
   break;
  }
  i = o + 128 | 0;
  p = o;
  while (1) {
   if ((c[p >> 2] | 0) == (b | 0)) break;
   p = p + 4 | 0;
   if ((p | 0) == (i | 0)) {
    p = i;
    break;
   }
  }
  i = p - o | 0;
  p = i >> 2;
  if ((i | 0) <= 124) {
   j = a[19978 + p >> 0] | 0;
   switch (p | 0) {
   case 24:
   case 25:
    {
     p = c[h >> 2] | 0;
     if ((p | 0) != (g | 0) ? (d[p + -1 >> 0] & 95 | 0) != (d[f >> 0] & 127 | 0) : 0) {
      p = -1;
      break a;
     }
     c[h >> 2] = p + 1;
     a[p >> 0] = j;
     p = 0;
     break a;
    }
   case 23:
   case 22:
    {
     a[f >> 0] = 80;
     break;
    }
   default:
    {
     p = j & 95;
     if ((((p | 0) == (a[f >> 0] | 0) ? (a[f >> 0] = p | 128, (a[e >> 0] | 0) != 0) : 0) ? (a[e >> 0] = 0, f = a[k >> 0] | 0, (((f & 1) == 0 ? (f & 255) >>> 1 : c[k + 4 >> 2] | 0) | 0) != 0) : 0) ? (q = c[m >> 2] | 0, (q - l | 0) < 160) : 0) {
      l = c[n >> 2] | 0;
      c[m >> 2] = q + 4;
      c[q >> 2] = l;
     }
    }
   }
   m = c[h >> 2] | 0;
   c[h >> 2] = m + 1;
   a[m >> 0] = j;
   if ((i | 0) > 84) p = 0; else {
    c[n >> 2] = (c[n >> 2] | 0) + 1;
    p = 0;
   }
  } else p = -1;
 } while (0);
 return p | 0;
}

function Oi(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0;
 a : while (1) {
  a = c[b >> 2] | 0;
  do if (a) {
   g = c[a + 12 >> 2] | 0;
   if ((g | 0) == (c[a + 16 >> 2] | 0)) a = wb[c[(c[a >> 2] | 0) + 36 >> 2] & 63](a) | 0; else a = c[g >> 2] | 0;
   if ((a | 0) == -1) {
    c[b >> 2] = 0;
    h = 1;
    break;
   } else {
    h = (c[b >> 2] | 0) == 0;
    break;
   }
  } else h = 1; while (0);
  g = c[d >> 2] | 0;
  do if (g) {
   a = c[g + 12 >> 2] | 0;
   if ((a | 0) == (c[g + 16 >> 2] | 0)) a = wb[c[(c[g >> 2] | 0) + 36 >> 2] & 63](g) | 0; else a = c[a >> 2] | 0;
   if ((a | 0) != -1) if (h) {
    h = g;
    break;
   } else {
    h = g;
    break a;
   } else {
    c[d >> 2] = 0;
    i = 15;
    break;
   }
  } else i = 15; while (0);
  if ((i | 0) == 15) {
   i = 0;
   if (h) {
    h = 0;
    break;
   } else h = 0;
  }
  a = c[b >> 2] | 0;
  g = c[a + 12 >> 2] | 0;
  if ((g | 0) == (c[a + 16 >> 2] | 0)) a = wb[c[(c[a >> 2] | 0) + 36 >> 2] & 63](a) | 0; else a = c[g >> 2] | 0;
  if (!(pb[c[(c[f >> 2] | 0) + 12 >> 2] & 31](f, 8192, a) | 0)) break;
  a = c[b >> 2] | 0;
  g = a + 12 | 0;
  h = c[g >> 2] | 0;
  if ((h | 0) == (c[a + 16 >> 2] | 0)) {
   wb[c[(c[a >> 2] | 0) + 40 >> 2] & 63](a) | 0;
   continue;
  } else {
   c[g >> 2] = h + 4;
   continue;
  }
 }
 a = c[b >> 2] | 0;
 do if (a) {
  g = c[a + 12 >> 2] | 0;
  if ((g | 0) == (c[a + 16 >> 2] | 0)) a = wb[c[(c[a >> 2] | 0) + 36 >> 2] & 63](a) | 0; else a = c[g >> 2] | 0;
  if ((a | 0) == -1) {
   c[b >> 2] = 0;
   g = 1;
   break;
  } else {
   g = (c[b >> 2] | 0) == 0;
   break;
  }
 } else g = 1; while (0);
 do if (h) {
  a = c[h + 12 >> 2] | 0;
  if ((a | 0) == (c[h + 16 >> 2] | 0)) a = wb[c[(c[h >> 2] | 0) + 36 >> 2] & 63](h) | 0; else a = c[a >> 2] | 0;
  if ((a | 0) != -1) if (g) break; else {
   i = 39;
   break;
  } else {
   c[d >> 2] = 0;
   i = 37;
   break;
  }
 } else i = 37; while (0);
 if ((i | 0) == 37 ? g : 0) i = 39;
 if ((i | 0) == 39) c[e >> 2] = c[e >> 2] | 2;
 return;
}

function lk(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0;
 D = i;
 i = i + 176 | 0;
 p = D + 56 | 0;
 x = D + 52 | 0;
 v = D + 64 | 0;
 s = D + 61 | 0;
 w = D + 60 | 0;
 A = D + 40 | 0;
 C = D + 28 | 0;
 B = D + 16 | 0;
 l = D + 12 | 0;
 o = D + 68 | 0;
 u = D + 8 | 0;
 t = D + 4 | 0;
 q = D;
 b = Af(f) | 0;
 c[x >> 2] = b;
 r = Ok(x, 9336) | 0;
 n = a[h >> 0] | 0;
 j = (n & 1) == 0;
 k = h + 4 | 0;
 if (!((j ? (n & 255) >>> 1 : c[k >> 2] | 0) | 0)) n = 0; else {
  n = a[(j ? h + 1 | 0 : c[h + 8 >> 2] | 0) >> 0] | 0;
  n = n << 24 >> 24 == (Cb[c[(c[r >> 2] | 0) + 28 >> 2] & 15](r, 45) | 0) << 24 >> 24;
 }
 c[A >> 2] = 0;
 c[A + 4 >> 2] = 0;
 c[A + 8 >> 2] = 0;
 c[C >> 2] = 0;
 c[C + 4 >> 2] = 0;
 c[C + 8 >> 2] = 0;
 c[B >> 2] = 0;
 c[B + 4 >> 2] = 0;
 c[B + 8 >> 2] = 0;
 jk(e, n, x, v, s, w, A, C, B, l);
 m = a[h >> 0] | 0;
 e = c[k >> 2] | 0;
 j = (m & 1) == 0 ? (m & 255) >>> 1 : e;
 k = c[l >> 2] | 0;
 if ((j | 0) > (k | 0)) {
  E = a[B >> 0] | 0;
  l = a[C >> 0] | 0;
  j = (j - k << 1 | 1) + k + ((E & 1) == 0 ? (E & 255) >>> 1 : c[B + 4 >> 2] | 0) + ((l & 1) == 0 ? (l & 255) >>> 1 : c[C + 4 >> 2] | 0) | 0;
 } else {
  E = a[B >> 0] | 0;
  j = a[C >> 0] | 0;
  j = k + 2 + ((E & 1) == 0 ? (E & 255) >>> 1 : c[B + 4 >> 2] | 0) + ((j & 1) == 0 ? (j & 255) >>> 1 : c[C + 4 >> 2] | 0) | 0;
 }
 if (j >>> 0 > 100) {
  j = qe(j) | 0;
  if (!j) Ec(); else {
   z = j;
   y = j;
  }
 } else {
  z = 0;
  y = o;
 }
 E = (m & 1) == 0;
 j = E ? h + 1 | 0 : c[h + 8 >> 2] | 0;
 kk(y, u, t, c[f + 4 >> 2] | 0, j, j + (E ? (m & 255) >>> 1 : e) | 0, r, n, v, a[s >> 0] | 0, a[w >> 0] | 0, A, C, B, k);
 c[q >> 2] = c[d >> 2];
 E = c[u >> 2] | 0;
 j = c[t >> 2] | 0;
 c[p >> 2] = c[q >> 2];
 j = Sb(p, y, E, j, f, g) | 0;
 if (z) {
  re(z);
  b = c[x >> 2] | 0;
 }
 bf(B);
 bf(C);
 bf(A);
 mo(b) | 0;
 i = D;
 return j | 0;
}

function rk(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0;
 E = i;
 i = i + 480 | 0;
 p = E + 464 | 0;
 y = E + 60 | 0;
 w = E + 468 | 0;
 t = E + 56 | 0;
 x = E + 52 | 0;
 B = E + 40 | 0;
 D = E + 28 | 0;
 C = E + 16 | 0;
 k = E + 12 | 0;
 o = E + 64 | 0;
 v = E + 8 | 0;
 u = E + 4 | 0;
 q = E;
 b = Af(f) | 0;
 c[y >> 2] = b;
 r = Ok(y, 9328) | 0;
 n = a[h >> 0] | 0;
 j = (n & 1) == 0;
 s = h + 4 | 0;
 if (!((j ? (n & 255) >>> 1 : c[s >> 2] | 0) | 0)) n = 0; else {
  n = c[(j ? s : c[h + 8 >> 2] | 0) >> 2] | 0;
  n = (n | 0) == (Cb[c[(c[r >> 2] | 0) + 44 >> 2] & 15](r, 45) | 0);
 }
 c[B >> 2] = 0;
 c[B + 4 >> 2] = 0;
 c[B + 8 >> 2] = 0;
 c[D >> 2] = 0;
 c[D + 4 >> 2] = 0;
 c[D + 8 >> 2] = 0;
 c[C >> 2] = 0;
 c[C + 4 >> 2] = 0;
 c[C + 8 >> 2] = 0;
 pk(e, n, y, w, t, x, B, D, C, k);
 l = a[h >> 0] | 0;
 m = c[s >> 2] | 0;
 j = (l & 1) == 0 ? (l & 255) >>> 1 : m;
 e = c[k >> 2] | 0;
 if ((j | 0) > (e | 0)) {
  F = a[C >> 0] | 0;
  k = a[D >> 0] | 0;
  j = (j - e << 1 | 1) + e + ((F & 1) == 0 ? (F & 255) >>> 1 : c[C + 4 >> 2] | 0) + ((k & 1) == 0 ? (k & 255) >>> 1 : c[D + 4 >> 2] | 0) | 0;
 } else {
  F = a[C >> 0] | 0;
  j = a[D >> 0] | 0;
  j = e + 2 + ((F & 1) == 0 ? (F & 255) >>> 1 : c[C + 4 >> 2] | 0) + ((j & 1) == 0 ? (j & 255) >>> 1 : c[D + 4 >> 2] | 0) | 0;
 }
 if (j >>> 0 > 100) {
  j = qe(j << 2) | 0;
  if (!j) Ec(); else {
   A = j;
   z = j;
  }
 } else {
  A = 0;
  z = o;
 }
 F = (l & 1) == 0;
 j = F ? s : c[h + 8 >> 2] | 0;
 qk(z, v, u, c[f + 4 >> 2] | 0, j, j + ((F ? (l & 255) >>> 1 : m) << 2) | 0, r, n, w, c[t >> 2] | 0, c[x >> 2] | 0, B, D, C, e);
 c[q >> 2] = c[d >> 2];
 F = c[v >> 2] | 0;
 j = c[u >> 2] | 0;
 c[p >> 2] = c[q >> 2];
 j = Xm(p, z, F, j, f, g) | 0;
 if (A) {
  re(A);
  b = c[y >> 2] | 0;
 }
 nf(C);
 nf(D);
 bf(B);
 mo(b) | 0;
 i = E;
 return j | 0;
}

function Nn(b, d, e, f, g, h, i, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 j = j | 0;
 var k = 0, l = 0;
 c[e >> 2] = b;
 c[h >> 2] = f;
 l = g;
 if (j & 2) if ((l - f | 0) < 3) b = 1; else {
  c[h >> 2] = f + 1;
  a[f >> 0] = -17;
  k = c[h >> 2] | 0;
  c[h >> 2] = k + 1;
  a[k >> 0] = -69;
  k = c[h >> 2] | 0;
  c[h >> 2] = k + 1;
  a[k >> 0] = -65;
  k = 4;
 } else k = 4;
 a : do if ((k | 0) == 4) {
  b = c[e >> 2] | 0;
  if (b >>> 0 < d >>> 0) while (1) {
   j = c[b >> 2] | 0;
   if (j >>> 0 > i >>> 0 | (j & -2048 | 0) == 55296) {
    b = 2;
    break a;
   }
   do if (j >>> 0 >= 128) {
    if (j >>> 0 < 2048) {
     b = c[h >> 2] | 0;
     if ((l - b | 0) < 2) {
      b = 1;
      break a;
     }
     c[h >> 2] = b + 1;
     a[b >> 0] = j >>> 6 | 192;
     k = c[h >> 2] | 0;
     c[h >> 2] = k + 1;
     a[k >> 0] = j & 63 | 128;
     break;
    }
    b = c[h >> 2] | 0;
    g = l - b | 0;
    if (j >>> 0 < 65536) {
     if ((g | 0) < 3) {
      b = 1;
      break a;
     }
     c[h >> 2] = b + 1;
     a[b >> 0] = j >>> 12 | 224;
     k = c[h >> 2] | 0;
     c[h >> 2] = k + 1;
     a[k >> 0] = j >>> 6 & 63 | 128;
     k = c[h >> 2] | 0;
     c[h >> 2] = k + 1;
     a[k >> 0] = j & 63 | 128;
     break;
    } else {
     if ((g | 0) < 4) {
      b = 1;
      break a;
     }
     c[h >> 2] = b + 1;
     a[b >> 0] = j >>> 18 | 240;
     k = c[h >> 2] | 0;
     c[h >> 2] = k + 1;
     a[k >> 0] = j >>> 12 & 63 | 128;
     k = c[h >> 2] | 0;
     c[h >> 2] = k + 1;
     a[k >> 0] = j >>> 6 & 63 | 128;
     k = c[h >> 2] | 0;
     c[h >> 2] = k + 1;
     a[k >> 0] = j & 63 | 128;
     break;
    }
   } else {
    b = c[h >> 2] | 0;
    if ((l - b | 0) < 1) {
     b = 1;
     break a;
    }
    c[h >> 2] = b + 1;
    a[b >> 0] = j;
   } while (0);
   b = (c[e >> 2] | 0) + 4 | 0;
   c[e >> 2] = b;
   if (b >>> 0 >= d >>> 0) {
    b = 0;
    break;
   }
  } else b = 0;
 } while (0);
 return b | 0;
}

function ne(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0.0;
 a : do if (b >>> 0 <= 20) do switch (b | 0) {
 case 9:
  {
   e = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   b = c[e >> 2] | 0;
   c[d >> 2] = e + 4;
   c[a >> 2] = b;
   break a;
  }
 case 10:
  {
   e = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   b = c[e >> 2] | 0;
   c[d >> 2] = e + 4;
   e = a;
   c[e >> 2] = b;
   c[e + 4 >> 2] = ((b | 0) < 0) << 31 >> 31;
   break a;
  }
 case 11:
  {
   e = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   b = c[e >> 2] | 0;
   c[d >> 2] = e + 4;
   e = a;
   c[e >> 2] = b;
   c[e + 4 >> 2] = 0;
   break a;
  }
 case 12:
  {
   e = (c[d >> 2] | 0) + (8 - 1) & ~(8 - 1);
   b = e;
   f = c[b >> 2] | 0;
   b = c[b + 4 >> 2] | 0;
   c[d >> 2] = e + 8;
   e = a;
   c[e >> 2] = f;
   c[e + 4 >> 2] = b;
   break a;
  }
 case 13:
  {
   f = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   e = c[f >> 2] | 0;
   c[d >> 2] = f + 4;
   e = (e & 65535) << 16 >> 16;
   f = a;
   c[f >> 2] = e;
   c[f + 4 >> 2] = ((e | 0) < 0) << 31 >> 31;
   break a;
  }
 case 14:
  {
   f = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   e = c[f >> 2] | 0;
   c[d >> 2] = f + 4;
   f = a;
   c[f >> 2] = e & 65535;
   c[f + 4 >> 2] = 0;
   break a;
  }
 case 15:
  {
   f = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   e = c[f >> 2] | 0;
   c[d >> 2] = f + 4;
   e = (e & 255) << 24 >> 24;
   f = a;
   c[f >> 2] = e;
   c[f + 4 >> 2] = ((e | 0) < 0) << 31 >> 31;
   break a;
  }
 case 16:
  {
   f = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   e = c[f >> 2] | 0;
   c[d >> 2] = f + 4;
   f = a;
   c[f >> 2] = e & 255;
   c[f + 4 >> 2] = 0;
   break a;
  }
 case 17:
  {
   f = (c[d >> 2] | 0) + (8 - 1) & ~(8 - 1);
   g = +h[f >> 3];
   c[d >> 2] = f + 8;
   h[a >> 3] = g;
   break a;
  }
 case 18:
  {
   f = (c[d >> 2] | 0) + (8 - 1) & ~(8 - 1);
   g = +h[f >> 3];
   c[d >> 2] = f + 8;
   h[a >> 3] = g;
   break a;
  }
 default:
  break a;
 } while (0); while (0);
 return;
}

function ee(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 i = a + 4 | 0;
 e = c[i >> 2] | 0;
 j = a + 100 | 0;
 if (e >>> 0 < (c[j >> 2] | 0) >>> 0) {
  c[i >> 2] = e + 1;
  e = d[e >> 0] | 0;
 } else e = Vc(a) | 0;
 switch (e | 0) {
 case 43:
 case 45:
  {
   f = (e | 0) == 45 & 1;
   e = c[i >> 2] | 0;
   if (e >>> 0 < (c[j >> 2] | 0) >>> 0) {
    c[i >> 2] = e + 1;
    e = d[e >> 0] | 0;
   } else e = Vc(a) | 0;
   if ((b | 0) != 0 & (e + -48 | 0) >>> 0 > 9 ? (c[j >> 2] | 0) != 0 : 0) {
    c[i >> 2] = (c[i >> 2] | 0) + -1;
    h = f;
   } else h = f;
   break;
  }
 default:
  h = 0;
 }
 if ((e + -48 | 0) >>> 0 > 9) if (!(c[j >> 2] | 0)) {
  f = -2147483648;
  e = 0;
 } else {
  c[i >> 2] = (c[i >> 2] | 0) + -1;
  f = -2147483648;
  e = 0;
 } else {
  f = 0;
  do {
   f = e + -48 + (f * 10 | 0) | 0;
   e = c[i >> 2] | 0;
   if (e >>> 0 < (c[j >> 2] | 0) >>> 0) {
    c[i >> 2] = e + 1;
    e = d[e >> 0] | 0;
   } else e = Vc(a) | 0;
  } while ((e + -48 | 0) >>> 0 < 10 & (f | 0) < 214748364);
  b = ((f | 0) < 0) << 31 >> 31;
  if ((e + -48 | 0) >>> 0 < 10) {
   do {
    b = Co(f | 0, b | 0, 10, 0) | 0;
    f = D;
    e = so(e | 0, ((e | 0) < 0) << 31 >> 31 | 0, -48, -1) | 0;
    f = so(e | 0, D | 0, b | 0, f | 0) | 0;
    b = D;
    e = c[i >> 2] | 0;
    if (e >>> 0 < (c[j >> 2] | 0) >>> 0) {
     c[i >> 2] = e + 1;
     e = d[e >> 0] | 0;
    } else e = Vc(a) | 0;
   } while ((e + -48 | 0) >>> 0 < 10 & ((b | 0) < 21474836 | (b | 0) == 21474836 & f >>> 0 < 2061584302));
   g = f;
  } else g = f;
  if ((e + -48 | 0) >>> 0 < 10) do {
   e = c[i >> 2] | 0;
   if (e >>> 0 < (c[j >> 2] | 0) >>> 0) {
    c[i >> 2] = e + 1;
    e = d[e >> 0] | 0;
   } else e = Vc(a) | 0;
  } while ((e + -48 | 0) >>> 0 < 10);
  if (c[j >> 2] | 0) c[i >> 2] = (c[i >> 2] | 0) + -1;
  a = (h | 0) != 0;
  e = qo(0, 0, g | 0, b | 0) | 0;
  f = a ? D : b;
  e = a ? e : g;
 }
 D = f;
 return e | 0;
}

function ui(a, b, e, f, g) {
 a = a | 0;
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, i = 0, j = 0;
 a = c[b >> 2] | 0;
 do if (a) {
  if ((c[a + 12 >> 2] | 0) == (c[a + 16 >> 2] | 0)) if ((wb[c[(c[a >> 2] | 0) + 36 >> 2] & 63](a) | 0) == -1) {
   c[b >> 2] = 0;
   a = 0;
   break;
  } else {
   a = c[b >> 2] | 0;
   break;
  }
 } else a = 0; while (0);
 h = (a | 0) == 0;
 a = c[e >> 2] | 0;
 do if (a) {
  if ((c[a + 12 >> 2] | 0) == (c[a + 16 >> 2] | 0) ? (wb[c[(c[a >> 2] | 0) + 36 >> 2] & 63](a) | 0) == -1 : 0) {
   c[e >> 2] = 0;
   j = 11;
   break;
  }
  if (h) {
   i = a;
   j = 13;
  } else j = 12;
 } else j = 11; while (0);
 if ((j | 0) == 11) if (h) j = 12; else {
  i = 0;
  j = 13;
 }
 a : do if ((j | 0) == 12) c[f >> 2] = c[f >> 2] | 6; else if ((j | 0) == 13) {
  a = c[b >> 2] | 0;
  h = c[a + 12 >> 2] | 0;
  if ((h | 0) == (c[a + 16 >> 2] | 0)) a = wb[c[(c[a >> 2] | 0) + 36 >> 2] & 63](a) | 0; else a = d[h >> 0] | 0;
  if ((pb[c[(c[g >> 2] | 0) + 36 >> 2] & 31](g, a & 255, 0) | 0) << 24 >> 24 != 37) {
   c[f >> 2] = c[f >> 2] | 4;
   break;
  }
  a = c[b >> 2] | 0;
  h = a + 12 | 0;
  g = c[h >> 2] | 0;
  if ((g | 0) == (c[a + 16 >> 2] | 0)) {
   wb[c[(c[a >> 2] | 0) + 40 >> 2] & 63](a) | 0;
   a = c[b >> 2] | 0;
   if (!a) a = 0; else j = 21;
  } else {
   c[h >> 2] = g + 1;
   j = 21;
  }
  do if ((j | 0) == 21) if ((c[a + 12 >> 2] | 0) == (c[a + 16 >> 2] | 0)) if ((wb[c[(c[a >> 2] | 0) + 36 >> 2] & 63](a) | 0) == -1) {
   c[b >> 2] = 0;
   a = 0;
   break;
  } else {
   a = c[b >> 2] | 0;
   break;
  } while (0);
  a = (a | 0) == 0;
  do if (i) {
   if ((c[i + 12 >> 2] | 0) == (c[i + 16 >> 2] | 0) ? (wb[c[(c[i >> 2] | 0) + 36 >> 2] & 63](i) | 0) == -1 : 0) {
    c[e >> 2] = 0;
    j = 30;
    break;
   }
   if (a) break a;
  } else j = 30; while (0);
  if ((j | 0) == 30 ? !a : 0) break;
  c[f >> 2] = c[f >> 2] | 2;
 } while (0);
 return;
}

function pi(a, e, f, g, h) {
 a = a | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var i = 0, j = 0, k = 0;
 j = h + 8 | 0;
 a : while (1) {
  h = c[e >> 2] | 0;
  do if (h) {
   if ((c[h + 12 >> 2] | 0) == (c[h + 16 >> 2] | 0)) if ((wb[c[(c[h >> 2] | 0) + 36 >> 2] & 63](h) | 0) == -1) {
    c[e >> 2] = 0;
    h = 0;
    break;
   } else {
    h = c[e >> 2] | 0;
    break;
   }
  } else h = 0; while (0);
  h = (h | 0) == 0;
  a = c[f >> 2] | 0;
  do if (a) {
   if ((c[a + 12 >> 2] | 0) != (c[a + 16 >> 2] | 0)) if (h) break; else break a;
   if ((wb[c[(c[a >> 2] | 0) + 36 >> 2] & 63](a) | 0) != -1) if (h) break; else break a; else {
    c[f >> 2] = 0;
    k = 12;
    break;
   }
  } else k = 12; while (0);
  if ((k | 0) == 12) {
   k = 0;
   if (h) {
    a = 0;
    break;
   } else a = 0;
  }
  h = c[e >> 2] | 0;
  i = c[h + 12 >> 2] | 0;
  if ((i | 0) == (c[h + 16 >> 2] | 0)) h = wb[c[(c[h >> 2] | 0) + 36 >> 2] & 63](h) | 0; else h = d[i >> 0] | 0;
  if ((h & 255) << 24 >> 24 <= -1) break;
  if (!(b[(c[j >> 2] | 0) + (h << 24 >> 24 << 1) >> 1] & 8192)) break;
  h = c[e >> 2] | 0;
  a = h + 12 | 0;
  i = c[a >> 2] | 0;
  if ((i | 0) == (c[h + 16 >> 2] | 0)) {
   wb[c[(c[h >> 2] | 0) + 40 >> 2] & 63](h) | 0;
   continue;
  } else {
   c[a >> 2] = i + 1;
   continue;
  }
 }
 h = c[e >> 2] | 0;
 do if (h) {
  if ((c[h + 12 >> 2] | 0) == (c[h + 16 >> 2] | 0)) if ((wb[c[(c[h >> 2] | 0) + 36 >> 2] & 63](h) | 0) == -1) {
   c[e >> 2] = 0;
   h = 0;
   break;
  } else {
   h = c[e >> 2] | 0;
   break;
  }
 } else h = 0; while (0);
 h = (h | 0) == 0;
 do if (a) {
  if ((c[a + 12 >> 2] | 0) == (c[a + 16 >> 2] | 0) ? (wb[c[(c[a >> 2] | 0) + 36 >> 2] & 63](a) | 0) == -1 : 0) {
   c[f >> 2] = 0;
   k = 32;
   break;
  }
  if (!h) k = 33;
 } else k = 32; while (0);
 if ((k | 0) == 32 ? h : 0) k = 33;
 if ((k | 0) == 33) c[g >> 2] = c[g >> 2] | 2;
 return;
}

function ek(b, d, e, f, g, h, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0;
 s = i;
 i = i + 432 | 0;
 v = s + 424 | 0;
 t = s + 24 | 0;
 r = s + 16 | 0;
 l = s + 8 | 0;
 u = s + 4 | 0;
 k = s + 428 | 0;
 m = s;
 c[r >> 2] = t;
 q = r + 4 | 0;
 c[q >> 2] = 98;
 o = Af(g) | 0;
 c[u >> 2] = o;
 b = Ok(u, 9328) | 0;
 a[k >> 0] = 0;
 n = c[e >> 2] | 0;
 c[m >> 2] = n;
 g = c[g + 4 >> 2] | 0;
 c[v >> 2] = c[m >> 2];
 m = n;
 if (dk(d, v, f, u, g, h, k, b, r, l, t + 400 | 0) | 0) {
  if (!(a[j >> 0] & 1)) a[j >> 0] = 0; else c[c[j + 8 >> 2] >> 2] = 0;
  c[j + 4 >> 2] = 0;
  if (a[k >> 0] | 0) rf(j, Cb[c[(c[b >> 2] | 0) + 44 >> 2] & 15](b, 45) | 0);
  k = Cb[c[(c[b >> 2] | 0) + 44 >> 2] & 15](b, 48) | 0;
  b = c[r >> 2] | 0;
  f = c[l >> 2] | 0;
  g = f + -4 | 0;
  a : do if (b >>> 0 < g >>> 0) do {
   if ((c[b >> 2] | 0) != (k | 0)) break a;
   b = b + 4 | 0;
  } while (b >>> 0 < g >>> 0); while (0);
  cn(j, b, f) | 0;
 }
 b = c[d >> 2] | 0;
 do if (b) {
  g = c[b + 12 >> 2] | 0;
  if ((g | 0) == (c[b + 16 >> 2] | 0)) b = wb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0; else b = c[g >> 2] | 0;
  if ((b | 0) == -1) {
   c[d >> 2] = 0;
   g = 1;
   break;
  } else {
   g = (c[d >> 2] | 0) == 0;
   break;
  }
 } else g = 1; while (0);
 do if (n) {
  b = c[m + 12 >> 2] | 0;
  if ((b | 0) == (c[m + 16 >> 2] | 0)) b = wb[c[(c[n >> 2] | 0) + 36 >> 2] & 63](m) | 0; else b = c[b >> 2] | 0;
  if ((b | 0) != -1) if (g) break; else {
   p = 26;
   break;
  } else {
   c[e >> 2] = 0;
   p = 24;
   break;
  }
 } else p = 24; while (0);
 if ((p | 0) == 24 ? g : 0) p = 26;
 if ((p | 0) == 26) c[h >> 2] = c[h >> 2] | 2;
 g = c[d >> 2] | 0;
 mo(o) | 0;
 b = c[r >> 2] | 0;
 c[r >> 2] = 0;
 if (b) sb[c[q >> 2] & 127](b);
 i = s;
 return g | 0;
}

function we(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0;
 b = c[639] | 0;
 ye(7320, b, 7376);
 c[1660] = 8068;
 c[1662] = 8088;
 c[1661] = 0;
 e = c[2014] | 0;
 Bf(6640 + e | 0, 7320);
 c[6640 + (e + 72) >> 2] = 0;
 c[6640 + (e + 76) >> 2] = -1;
 e = c[640] | 0;
 ze(7424, e, 7384);
 c[1682] = 8148;
 c[1683] = 8168;
 h = c[2034] | 0;
 Bf(6728 + h | 0, 7424);
 f = h + 72 | 0;
 c[6728 + f >> 2] = 0;
 a = h + 76 | 0;
 c[6728 + a >> 2] = -1;
 d = c[638] | 0;
 ze(7472, d, 7392);
 c[1703] = 8148;
 c[1704] = 8168;
 Bf(6812 + h | 0, 7472);
 c[6812 + f >> 2] = 0;
 c[6812 + a >> 2] = -1;
 g = c[6812 + ((c[(c[1703] | 0) + -12 >> 2] | 0) + 24) >> 2] | 0;
 c[1724] = 8148;
 c[1725] = 8168;
 Bf(6896 + h | 0, g);
 c[6896 + f >> 2] = 0;
 c[6896 + a >> 2] = -1;
 c[6640 + ((c[(c[1660] | 0) + -12 >> 2] | 0) + 72) >> 2] = 6728;
 a = 6812 + ((c[(c[1703] | 0) + -12 >> 2] | 0) + 4) | 0;
 c[a >> 2] = c[a >> 2] | 8192;
 c[6812 + ((c[(c[1703] | 0) + -12 >> 2] | 0) + 72) >> 2] = 6728;
 Ae(7520, b, 7400);
 c[1745] = 8108;
 c[1747] = 8128;
 c[1746] = 0;
 b = c[2024] | 0;
 Bf(6980 + b | 0, 7520);
 c[6980 + (b + 72) >> 2] = 0;
 c[6980 + (b + 76) >> 2] = -1;
 Be(7576, e, 7408);
 c[1767] = 8188;
 c[1768] = 8208;
 e = c[2044] | 0;
 Bf(7068 + e | 0, 7576);
 b = e + 72 | 0;
 c[7068 + b >> 2] = 0;
 a = e + 76 | 0;
 c[7068 + a >> 2] = -1;
 Be(7624, d, 7416);
 c[1788] = 8188;
 c[1789] = 8208;
 Bf(7152 + e | 0, 7624);
 c[7152 + b >> 2] = 0;
 c[7152 + a >> 2] = -1;
 d = c[7152 + ((c[(c[1788] | 0) + -12 >> 2] | 0) + 24) >> 2] | 0;
 c[1809] = 8188;
 c[1810] = 8208;
 Bf(7236 + e | 0, d);
 c[7236 + b >> 2] = 0;
 c[7236 + a >> 2] = -1;
 c[6980 + ((c[(c[1745] | 0) + -12 >> 2] | 0) + 72) >> 2] = 7068;
 a = 7152 + ((c[(c[1788] | 0) + -12 >> 2] | 0) + 4) | 0;
 c[a >> 2] = c[a >> 2] | 8192;
 c[7152 + ((c[(c[1788] | 0) + -12 >> 2] | 0) + 72) >> 2] = 7068;
 return;
}

function Zj(b, d, e, f, g, h, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0;
 s = i;
 i = i + 144 | 0;
 v = s + 24 | 0;
 t = s + 32 | 0;
 r = s + 16 | 0;
 l = s + 8 | 0;
 u = s + 4 | 0;
 k = s + 28 | 0;
 m = s;
 c[r >> 2] = t;
 q = r + 4 | 0;
 c[q >> 2] = 98;
 o = Af(g) | 0;
 c[u >> 2] = o;
 b = Ok(u, 9336) | 0;
 a[k >> 0] = 0;
 n = c[e >> 2] | 0;
 c[m >> 2] = n;
 g = c[g + 4 >> 2] | 0;
 c[v >> 2] = c[m >> 2];
 m = n;
 if (Xj(d, v, f, u, g, h, k, b, r, l, t + 100 | 0) | 0) {
  if (!(a[j >> 0] & 1)) {
   a[j + 1 >> 0] = 0;
   a[j >> 0] = 0;
  } else {
   a[c[j + 8 >> 2] >> 0] = 0;
   c[j + 4 >> 2] = 0;
  }
  if (a[k >> 0] | 0) hf(j, Cb[c[(c[b >> 2] | 0) + 28 >> 2] & 15](b, 45) | 0);
  k = Cb[c[(c[b >> 2] | 0) + 28 >> 2] & 15](b, 48) | 0;
  b = c[r >> 2] | 0;
  f = c[l >> 2] | 0;
  g = f + -1 | 0;
  a : do if (b >>> 0 < g >>> 0) do {
   if ((a[b >> 0] | 0) != k << 24 >> 24) break a;
   b = b + 1 | 0;
  } while (b >>> 0 < g >>> 0); while (0);
  an(j, b, f) | 0;
 }
 b = c[d >> 2] | 0;
 do if (b) {
  if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0)) if ((wb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1) {
   c[d >> 2] = 0;
   b = 0;
   break;
  } else {
   b = c[d >> 2] | 0;
   break;
  }
 } else b = 0; while (0);
 b = (b | 0) == 0;
 do if (n) {
  if ((c[m + 12 >> 2] | 0) == (c[m + 16 >> 2] | 0) ? (wb[c[(c[n >> 2] | 0) + 36 >> 2] & 63](m) | 0) == -1 : 0) {
   c[e >> 2] = 0;
   p = 21;
   break;
  }
  if (!b) p = 22;
 } else p = 21; while (0);
 if ((p | 0) == 21 ? b : 0) p = 22;
 if ((p | 0) == 22) c[h >> 2] = c[h >> 2] | 2;
 g = c[d >> 2] | 0;
 mo(o) | 0;
 b = c[r >> 2] | 0;
 c[r >> 2] = 0;
 if (b) sb[c[q >> 2] & 127](b);
 i = s;
 return g | 0;
}

function td(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0;
 k = i;
 i = i + 16 | 0;
 j = k;
 a : do if (!b) {
  b = c[d >> 2] | 0;
  f = c[b >> 2] | 0;
  if (!f) e = 0; else {
   e = 0;
   do {
    if (f >>> 0 > 127) {
     f = rd(j, f, 0) | 0;
     if ((f | 0) == -1) {
      e = -1;
      break a;
     }
    } else f = 1;
    e = f + e | 0;
    b = b + 4 | 0;
    f = c[b >> 2] | 0;
   } while ((f | 0) != 0);
  }
 } else {
  b : do if (e >>> 0 > 3) {
   f = e;
   g = c[d >> 2] | 0;
   while (1) {
    h = c[g >> 2] | 0;
    if ((h + -1 | 0) >>> 0 > 126) {
     if (!h) break;
     h = rd(b, h, 0) | 0;
     if ((h | 0) == -1) {
      e = -1;
      break a;
     }
     b = b + h | 0;
     f = f - h | 0;
    } else {
     a[b >> 0] = h;
     b = b + 1 | 0;
     f = f + -1 | 0;
     g = c[d >> 2] | 0;
    }
    g = g + 4 | 0;
    c[d >> 2] = g;
    if (f >>> 0 <= 3) break b;
   }
   a[b >> 0] = 0;
   c[d >> 2] = 0;
   e = e - f | 0;
   break a;
  } else f = e; while (0);
  if (f) {
   g = c[d >> 2] | 0;
   while (1) {
    h = c[g >> 2] | 0;
    if ((h + -1 | 0) >>> 0 > 126) {
     if (!h) {
      g = 19;
      break;
     }
     h = rd(j, h, 0) | 0;
     if ((h | 0) == -1) {
      e = -1;
      break a;
     }
     if (f >>> 0 < h >>> 0) {
      g = 22;
      break;
     }
     rd(b, c[g >> 2] | 0, 0) | 0;
     b = b + h | 0;
     f = f - h | 0;
    } else {
     a[b >> 0] = h;
     b = b + 1 | 0;
     f = f + -1 | 0;
     g = c[d >> 2] | 0;
    }
    g = g + 4 | 0;
    c[d >> 2] = g;
    if (!f) break a;
   }
   if ((g | 0) == 19) {
    a[b >> 0] = 0;
    c[d >> 2] = 0;
    e = e - f | 0;
    break;
   } else if ((g | 0) == 22) {
    e = e - f | 0;
    break;
   }
  }
 } while (0);
 i = k;
 return e | 0;
}

function Ze(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0;
 s = i;
 i = i + 32 | 0;
 r = s + 16 | 0;
 q = s + 8 | 0;
 n = s + 4 | 0;
 o = s;
 h = b + 52 | 0;
 a : do if (a[h >> 0] | 0) {
  g = b + 48 | 0;
  f = c[g >> 2] | 0;
  if (e) {
   c[g >> 2] = -1;
   a[h >> 0] = 0;
  }
 } else {
  f = c[b + 44 >> 2] | 0;
  f = (f | 0) > 1 ? f : 1;
  p = b + 32 | 0;
  if ((f | 0) > 0) {
   h = 0;
   do {
    g = Bd(c[p >> 2] | 0) | 0;
    if ((g | 0) == -1) {
     f = -1;
     break a;
    }
    a[r + h >> 0] = g;
    h = h + 1 | 0;
   } while ((h | 0) < (f | 0));
  }
  b : do if (!(a[b + 53 >> 0] | 0)) {
   k = b + 40 | 0;
   l = b + 36 | 0;
   m = q + 1 | 0;
   c : while (1) {
    t = c[k >> 2] | 0;
    h = t;
    g = c[h >> 2] | 0;
    h = c[h + 4 >> 2] | 0;
    u = c[l >> 2] | 0;
    j = r + f | 0;
    switch (zb[c[(c[u >> 2] | 0) + 16 >> 2] & 15](u, t, r, j, n, q, m, o) | 0) {
    case 2:
     {
      f = -1;
      break a;
     }
    case 3:
     break c;
    case 1:
     break;
    default:
     break b;
    }
    u = c[k >> 2] | 0;
    c[u >> 2] = g;
    c[u + 4 >> 2] = h;
    if ((f | 0) == 8) {
     f = -1;
     break a;
    }
    g = Bd(c[p >> 2] | 0) | 0;
    if ((g | 0) == -1) {
     f = -1;
     break a;
    }
    a[j >> 0] = g;
    f = f + 1 | 0;
   }
   a[q >> 0] = a[r >> 0] | 0;
  } else a[q >> 0] = a[r >> 0] | 0; while (0);
  if (e) {
   f = a[q >> 0] | 0;
   c[b + 48 >> 2] = f & 255;
  } else {
   while (1) {
    if ((f | 0) <= 0) break;
    f = f + -1 | 0;
    if ((Ed(d[r + f >> 0] | 0, c[p >> 2] | 0) | 0) == -1) {
     f = -1;
     break a;
    }
   }
   f = a[q >> 0] | 0;
  }
  f = f & 255;
 } while (0);
 i = s;
 return f | 0;
}

function bh(b, d, e, f, g, h, i, j, k, l) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 j = j | 0;
 k = k | 0;
 l = l | 0;
 var m = 0, n = 0, o = 0, p = 0;
 o = c[f >> 2] | 0;
 p = (o | 0) == (e | 0);
 do if (p) {
  m = (a[l + 24 >> 0] | 0) == b << 24 >> 24;
  if (!m ? (a[l + 25 >> 0] | 0) != b << 24 >> 24 : 0) {
   n = 5;
   break;
  }
  c[f >> 2] = e + 1;
  a[e >> 0] = m ? 43 : 45;
  c[g >> 2] = 0;
  m = 0;
 } else n = 5; while (0);
 a : do if ((n | 0) == 5) {
  n = a[i >> 0] | 0;
  if (b << 24 >> 24 == h << 24 >> 24 ? (((n & 1) == 0 ? (n & 255) >>> 1 : c[i + 4 >> 2] | 0) | 0) != 0 : 0) {
   m = c[k >> 2] | 0;
   if ((m - j | 0) >= 160) {
    m = 0;
    break;
   }
   d = c[g >> 2] | 0;
   c[k >> 2] = m + 4;
   c[m >> 2] = d;
   c[g >> 2] = 0;
   m = 0;
   break;
  }
  i = l + 26 | 0;
  m = l;
  while (1) {
   if ((a[m >> 0] | 0) == b << 24 >> 24) break;
   m = m + 1 | 0;
   if ((m | 0) == (i | 0)) {
    m = i;
    break;
   }
  }
  m = m - l | 0;
  if ((m | 0) > 23) m = -1; else {
   switch (d | 0) {
   case 10:
   case 8:
    {
     if ((m | 0) >= (d | 0)) {
      m = -1;
      break a;
     }
     break;
    }
   case 16:
    {
     if ((m | 0) >= 22) {
      if (p) {
       m = -1;
       break a;
      }
      if ((o - e | 0) >= 3) {
       m = -1;
       break a;
      }
      if ((a[o + -1 >> 0] | 0) != 48) {
       m = -1;
       break a;
      }
      c[g >> 2] = 0;
      m = a[19978 + m >> 0] | 0;
      c[f >> 2] = o + 1;
      a[o >> 0] = m;
      m = 0;
      break a;
     }
     break;
    }
   default:
    {}
   }
   m = a[19978 + m >> 0] | 0;
   c[f >> 2] = o + 1;
   a[o >> 0] = m;
   c[g >> 2] = (c[g >> 2] | 0) + 1;
   m = 0;
  }
 } while (0);
 return m | 0;
}

function qh(b, d, e, f, g, h, i, j, k, l) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 j = j | 0;
 k = k | 0;
 l = l | 0;
 var m = 0, n = 0, o = 0, p = 0;
 o = c[f >> 2] | 0;
 p = (o | 0) == (e | 0);
 do if (p) {
  m = (c[l + 96 >> 2] | 0) == (b | 0);
  if (!m ? (c[l + 100 >> 2] | 0) != (b | 0) : 0) {
   n = 5;
   break;
  }
  c[f >> 2] = e + 1;
  a[e >> 0] = m ? 43 : 45;
  c[g >> 2] = 0;
  m = 0;
 } else n = 5; while (0);
 a : do if ((n | 0) == 5) {
  n = a[i >> 0] | 0;
  if ((b | 0) == (h | 0) ? (((n & 1) == 0 ? (n & 255) >>> 1 : c[i + 4 >> 2] | 0) | 0) != 0 : 0) {
   m = c[k >> 2] | 0;
   if ((m - j | 0) >= 160) {
    m = 0;
    break;
   }
   d = c[g >> 2] | 0;
   c[k >> 2] = m + 4;
   c[m >> 2] = d;
   c[g >> 2] = 0;
   m = 0;
   break;
  }
  i = l + 104 | 0;
  m = l;
  while (1) {
   if ((c[m >> 2] | 0) == (b | 0)) break;
   m = m + 4 | 0;
   if ((m | 0) == (i | 0)) {
    m = i;
    break;
   }
  }
  m = m - l | 0;
  i = m >> 2;
  if ((m | 0) > 92) m = -1; else {
   switch (d | 0) {
   case 10:
   case 8:
    {
     if ((i | 0) >= (d | 0)) {
      m = -1;
      break a;
     }
     break;
    }
   case 16:
    {
     if ((m | 0) >= 88) {
      if (p) {
       m = -1;
       break a;
      }
      if ((o - e | 0) >= 3) {
       m = -1;
       break a;
      }
      if ((a[o + -1 >> 0] | 0) != 48) {
       m = -1;
       break a;
      }
      c[g >> 2] = 0;
      m = a[19978 + i >> 0] | 0;
      c[f >> 2] = o + 1;
      a[o >> 0] = m;
      m = 0;
      break a;
     }
     break;
    }
   default:
    {}
   }
   m = a[19978 + i >> 0] | 0;
   c[f >> 2] = o + 1;
   a[o >> 0] = m;
   c[g >> 2] = (c[g >> 2] | 0) + 1;
   m = 0;
  }
 } while (0);
 return m | 0;
}

function Oe(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0;
 r = i;
 i = i + 32 | 0;
 q = r + 16 | 0;
 p = r + 8 | 0;
 m = r + 4 | 0;
 n = r;
 g = b + 52 | 0;
 a : do if (a[g >> 0] | 0) {
  f = b + 48 | 0;
  e = c[f >> 2] | 0;
  if (d) {
   c[f >> 2] = -1;
   a[g >> 0] = 0;
  }
 } else {
  e = c[b + 44 >> 2] | 0;
  e = (e | 0) > 1 ? e : 1;
  o = b + 32 | 0;
  if ((e | 0) > 0) {
   g = 0;
   do {
    f = Bd(c[o >> 2] | 0) | 0;
    if ((f | 0) == -1) {
     e = -1;
     break a;
    }
    a[q + g >> 0] = f;
    g = g + 1 | 0;
   } while ((g | 0) < (e | 0));
  }
  b : do if (!(a[b + 53 >> 0] | 0)) {
   j = b + 40 | 0;
   k = b + 36 | 0;
   l = p + 4 | 0;
   c : while (1) {
    s = c[j >> 2] | 0;
    g = s;
    f = c[g >> 2] | 0;
    g = c[g + 4 >> 2] | 0;
    t = c[k >> 2] | 0;
    h = q + e | 0;
    switch (zb[c[(c[t >> 2] | 0) + 16 >> 2] & 15](t, s, q, h, m, p, l, n) | 0) {
    case 2:
     {
      e = -1;
      break a;
     }
    case 3:
     break c;
    case 1:
     break;
    default:
     break b;
    }
    t = c[j >> 2] | 0;
    c[t >> 2] = f;
    c[t + 4 >> 2] = g;
    if ((e | 0) == 8) {
     e = -1;
     break a;
    }
    f = Bd(c[o >> 2] | 0) | 0;
    if ((f | 0) == -1) {
     e = -1;
     break a;
    }
    a[h >> 0] = f;
    e = e + 1 | 0;
   }
   c[p >> 2] = a[q >> 0];
  } else c[p >> 2] = a[q >> 0]; while (0);
  if (d) {
   e = c[p >> 2] | 0;
   c[b + 48 >> 2] = e;
   break;
  }
  while (1) {
   if ((e | 0) <= 0) break;
   e = e + -1 | 0;
   if ((Ed(a[q + e >> 0] | 0, c[o >> 2] | 0) | 0) == -1) {
    e = -1;
    break a;
   }
  }
  e = c[p >> 2] | 0;
 } while (0);
 i = r;
 return e | 0;
}

function Ck(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0;
 c[a + 4 >> 2] = b + -1;
 c[a >> 2] = 9312;
 d = a + 8 | 0;
 dn(d, 28);
 $e(a + 144 | 0, 21365, 1);
 d = c[d >> 2] | 0;
 e = a + 12 | 0;
 b = c[e >> 2] | 0;
 if ((b | 0) != (d | 0)) {
  do b = b + -4 | 0; while ((b | 0) != (d | 0));
  c[e >> 2] = b;
 }
 c[321] = 0;
 c[320] = 8240;
 en(a, 1280);
 c[323] = 0;
 c[322] = 8280;
 fn(a, 1288);
 dl(1296, 0, 0, 1);
 gn(a, 1296);
 c[329] = 0;
 c[328] = 9600;
 hn(a, 1312);
 c[331] = 0;
 c[330] = 9668;
 jn(a, 1320);
 c[333] = 0;
 c[332] = 9420;
 c[334] = ch() | 0;
 kn(a, 1328);
 c[337] = 0;
 c[336] = 9716;
 ln(a, 1344);
 c[339] = 0;
 c[338] = 9764;
 mn(a, 1352);
 Wl(1360, 1);
 nn(a, 1360);
 Xl(1384, 1);
 on(a, 1384);
 c[355] = 0;
 c[354] = 8320;
 pn(a, 1416);
 c[357] = 0;
 c[356] = 8392;
 qn(a, 1424);
 c[359] = 0;
 c[358] = 8464;
 rn(a, 1432);
 c[361] = 0;
 c[360] = 8524;
 sn(a, 1440);
 c[363] = 0;
 c[362] = 8832;
 tn(a, 1448);
 c[365] = 0;
 c[364] = 8896;
 un(a, 1456);
 c[367] = 0;
 c[366] = 8960;
 vn(a, 1464);
 c[369] = 0;
 c[368] = 9024;
 wn(a, 1472);
 c[371] = 0;
 c[370] = 9088;
 xn(a, 1480);
 c[373] = 0;
 c[372] = 9124;
 yn(a, 1488);
 c[375] = 0;
 c[374] = 9160;
 zn(a, 1496);
 c[377] = 0;
 c[376] = 9196;
 An(a, 1504);
 c[379] = 0;
 c[378] = 8584;
 c[380] = 8632;
 Bn(a, 1512);
 c[383] = 0;
 c[382] = 8676;
 c[384] = 8724;
 Cn(a, 1528);
 c[387] = 0;
 c[386] = 9580;
 c[388] = ch() | 0;
 c[386] = 8768;
 Dn(a, 1544);
 c[391] = 0;
 c[390] = 9580;
 c[392] = ch() | 0;
 c[390] = 8800;
 En(a, 1560);
 c[395] = 0;
 c[394] = 9232;
 Fn(a, 1576);
 c[397] = 0;
 c[396] = 9272;
 Gn(a, 1584);
 return;
}

function Ak(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0;
 s = i;
 i = i + 176 | 0;
 p = s + 168 | 0;
 o = s + 40 | 0;
 n = s + 32 | 0;
 r = s + 28 | 0;
 q = s + 16 | 0;
 l = s + 8 | 0;
 m = s;
 c[q >> 2] = 0;
 c[q + 4 >> 2] = 0;
 c[q + 8 >> 2] = 0;
 c[l + 4 >> 2] = 0;
 c[l >> 2] = 9812;
 k = a[h >> 0] | 0;
 t = (k & 1) == 0;
 j = h + 4 | 0;
 d = t ? j : c[h + 8 >> 2] | 0;
 h = t ? (k & 255) >>> 1 : c[j >> 2] | 0;
 j = d + (h << 2) | 0;
 k = o + 32 | 0;
 if ((h | 0) > 0) do {
  c[r >> 2] = d;
  h = zb[c[(c[l >> 2] | 0) + 12 >> 2] & 15](l, p, d, j, r, o, k, n) | 0;
  if (o >>> 0 < (c[n >> 2] | 0) >>> 0) {
   d = o;
   do {
    hf(q, a[d >> 0] | 0);
    d = d + 1 | 0;
   } while (d >>> 0 < (c[n >> 2] | 0) >>> 0);
  }
  d = c[r >> 2] | 0;
 } while ((h | 0) != 2 & d >>> 0 < j >>> 0);
 d = Yc((e | 0) == -1 ? -1 : e << 1, f, g, (a[q >> 0] & 1) == 0 ? q + 1 | 0 : c[q + 8 >> 2] | 0) | 0;
 c[b >> 2] = 0;
 c[b + 4 >> 2] = 0;
 c[b + 8 >> 2] = 0;
 c[m + 4 >> 2] = 0;
 c[m >> 2] = 9860;
 t = $d(d) | 0;
 j = d + t | 0;
 k = j;
 l = o + 128 | 0;
 if ((t | 0) > 0) do {
  c[r >> 2] = d;
  h = zb[c[(c[m >> 2] | 0) + 16 >> 2] & 15](m, p, d, (k - d | 0) > 32 ? d + 32 | 0 : j, r, o, l, n) | 0;
  if (o >>> 0 < (c[n >> 2] | 0) >>> 0) {
   d = o;
   do {
    rf(b, c[d >> 2] | 0);
    d = d + 4 | 0;
   } while (d >>> 0 < (c[n >> 2] | 0) >>> 0);
  }
  d = c[r >> 2] | 0;
 } while ((h | 0) != 2 & d >>> 0 < j >>> 0);
 bf(q);
 i = s;
 return;
}

function od(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 o = i;
 i = i + 1040 | 0;
 l = o + 8 | 0;
 n = o;
 k = c[b >> 2] | 0;
 c[n >> 2] = k;
 m = (a | 0) != 0;
 e = m ? e : 256;
 a = m ? a : l;
 g = k;
 a : do if ((e | 0) != 0 & (k | 0) != 0) {
  j = e;
  k = g;
  e = 0;
  while (1) {
   g = d >>> 2;
   h = g >>> 0 >= j >>> 0;
   if (!(d >>> 0 > 131 | h)) {
    g = k;
    break a;
   }
   g = h ? j : g;
   d = d - g | 0;
   g = pd(a, n, g, f) | 0;
   if ((g | 0) == -1) {
    e = d;
    break;
   }
   p = (a | 0) == (l | 0);
   k = p ? 0 : g;
   h = j - k | 0;
   a = p ? a : a + (g << 2) | 0;
   e = g + e | 0;
   g = c[n >> 2] | 0;
   if ((j | 0) != (k | 0) & (g | 0) != 0) {
    j = h;
    k = g;
   } else {
    j = h;
    break a;
   }
  }
  d = e;
  j = 0;
  g = c[n >> 2] | 0;
  e = -1;
 } else {
  j = e;
  e = 0;
 } while (0);
 b : do if ((g | 0) != 0 ? (j | 0) != 0 & (d | 0) != 0 : 0) {
  h = g;
  g = a;
  while (1) {
   a = md(g, h, d, f) | 0;
   if ((a + 2 | 0) >>> 0 < 3) break;
   h = (c[n >> 2] | 0) + a | 0;
   c[n >> 2] = h;
   j = j + -1 | 0;
   e = e + 1 | 0;
   if (!((j | 0) != 0 & (d | 0) != (a | 0))) break b; else {
    d = d - a | 0;
    g = g + 4 | 0;
   }
  }
  switch (a | 0) {
  case -1:
   {
    e = -1;
    break b;
   }
  case 0:
   {
    c[n >> 2] = 0;
    break b;
   }
  default:
   {
    c[f >> 2] = 0;
    break b;
   }
  }
 } while (0);
 if (m) c[b >> 2] = c[n >> 2];
 i = o;
 return e | 0;
}

function Qd(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 q = i;
 i = i + 48 | 0;
 n = q + 16 | 0;
 m = q;
 e = q + 32 | 0;
 o = a + 28 | 0;
 f = c[o >> 2] | 0;
 c[e >> 2] = f;
 p = a + 20 | 0;
 f = (c[p >> 2] | 0) - f | 0;
 c[e + 4 >> 2] = f;
 c[e + 8 >> 2] = b;
 c[e + 12 >> 2] = d;
 k = a + 60 | 0;
 l = a + 44 | 0;
 b = 2;
 f = f + d | 0;
 while (1) {
  if (!(c[576] | 0)) {
   c[n >> 2] = c[k >> 2];
   c[n + 4 >> 2] = e;
   c[n + 8 >> 2] = b;
   h = Wc(mb(146, n | 0) | 0) | 0;
  } else {
   gb(96, a | 0);
   c[m >> 2] = c[k >> 2];
   c[m + 4 >> 2] = e;
   c[m + 8 >> 2] = b;
   h = Wc(mb(146, m | 0) | 0) | 0;
   Za(0);
  }
  if ((f | 0) == (h | 0)) {
   f = 6;
   break;
  }
  if ((h | 0) < 0) {
   f = 8;
   break;
  }
  f = f - h | 0;
  g = c[e + 4 >> 2] | 0;
  if (h >>> 0 <= g >>> 0) if ((b | 0) == 2) {
   c[o >> 2] = (c[o >> 2] | 0) + h;
   j = g;
   b = 2;
  } else j = g; else {
   j = c[l >> 2] | 0;
   c[o >> 2] = j;
   c[p >> 2] = j;
   j = c[e + 12 >> 2] | 0;
   h = h - g | 0;
   e = e + 8 | 0;
   b = b + -1 | 0;
  }
  c[e >> 2] = (c[e >> 2] | 0) + h;
  c[e + 4 >> 2] = j - h;
 }
 if ((f | 0) == 6) {
  n = c[l >> 2] | 0;
  c[a + 16 >> 2] = n + (c[a + 48 >> 2] | 0);
  a = n;
  c[o >> 2] = a;
  c[p >> 2] = a;
 } else if ((f | 0) == 8) {
  c[a + 16 >> 2] = 0;
  c[o >> 2] = 0;
  c[p >> 2] = 0;
  c[a >> 2] = c[a >> 2] | 32;
  if ((b | 0) == 2) d = 0; else d = d - (c[e + 4 >> 2] | 0) | 0;
 }
 i = q;
 return d | 0;
}

function Wh(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = +f;
 var g = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0;
 A = i;
 i = i + 352 | 0;
 r = A + 304 | 0;
 n = A + 48 | 0;
 m = A + 32 | 0;
 j = A + 24 | 0;
 g = A + 8 | 0;
 l = A;
 p = A + 308 | 0;
 o = A + 72 | 0;
 q = A + 76 | 0;
 w = A + 68 | 0;
 v = A + 64 | 0;
 s = A + 60 | 0;
 t = A + 56 | 0;
 k = l;
 c[k >> 2] = 37;
 c[k + 4 >> 2] = 0;
 k = Ih(l + 1 | 0, 21379, c[d + 4 >> 2] | 0) | 0;
 c[o >> 2] = p;
 a = ch() | 0;
 if (k) {
  c[g >> 2] = c[d + 8 >> 2];
  h[g + 8 >> 3] = f;
  a = Vm(p, 30, a, l, g) | 0;
 } else {
  h[j >> 3] = f;
  a = Vm(p, 30, a, l, j) | 0;
 }
 if ((a | 0) > 29) {
  a = ch() | 0;
  if (k) {
   c[m >> 2] = c[d + 8 >> 2];
   h[m + 8 >> 3] = f;
   g = Wm(o, a, l, m) | 0;
  } else {
   h[n >> 3] = f;
   g = Wm(o, a, l, n) | 0;
  }
  a = c[o >> 2] | 0;
  if (!a) Ec(); else {
   x = a;
   C = a;
   u = g;
  }
 } else {
  x = c[o >> 2] | 0;
  C = 0;
  u = a;
 }
 g = x + u | 0;
 j = Ch(x, g, d) | 0;
 if ((x | 0) != (p | 0)) {
  a = qe(u << 3) | 0;
  if (!a) Ec(); else {
   y = x;
   B = a;
   z = a;
  }
 } else {
  y = p;
  B = 0;
  z = q;
 }
 a = Af(d) | 0;
 c[s >> 2] = a;
 Vh(y, j, g, z, w, v, s);
 mo(a) | 0;
 c[t >> 2] = c[b >> 2];
 y = c[w >> 2] | 0;
 a = c[v >> 2] | 0;
 c[r >> 2] = c[t >> 2];
 a = Xm(r, z, y, a, d, e) | 0;
 c[b >> 2] = a;
 if (B) re(B);
 re(C);
 i = A;
 return a | 0;
}

function Kh(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = +f;
 var g = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0;
 x = i;
 i = i + 176 | 0;
 r = x + 76 | 0;
 n = x + 48 | 0;
 m = x + 32 | 0;
 j = x + 24 | 0;
 g = x + 8 | 0;
 l = x;
 p = x + 80 | 0;
 o = x + 72 | 0;
 q = x + 110 | 0;
 w = x + 68 | 0;
 v = x + 64 | 0;
 s = x + 60 | 0;
 t = x + 56 | 0;
 k = l;
 c[k >> 2] = 37;
 c[k + 4 >> 2] = 0;
 k = Ih(l + 1 | 0, 21379, c[d + 4 >> 2] | 0) | 0;
 c[o >> 2] = p;
 a = ch() | 0;
 if (k) {
  c[g >> 2] = c[d + 8 >> 2];
  h[g + 8 >> 3] = f;
  a = Vm(p, 30, a, l, g) | 0;
 } else {
  h[j >> 3] = f;
  a = Vm(p, 30, a, l, j) | 0;
 }
 if ((a | 0) > 29) {
  a = ch() | 0;
  if (k) {
   c[m >> 2] = c[d + 8 >> 2];
   h[m + 8 >> 3] = f;
   g = Wm(o, a, l, m) | 0;
  } else {
   h[n >> 3] = f;
   g = Wm(o, a, l, n) | 0;
  }
  a = c[o >> 2] | 0;
  if (!a) Ec(); else {
   y = a;
   B = a;
   u = g;
  }
 } else {
  y = c[o >> 2] | 0;
  B = 0;
  u = a;
 }
 g = y + u | 0;
 j = Ch(y, g, d) | 0;
 if ((y | 0) != (p | 0)) {
  a = qe(u << 1) | 0;
  if (!a) Ec(); else {
   z = y;
   A = a;
   C = a;
  }
 } else {
  z = p;
  A = 0;
  C = q;
 }
 y = Af(d) | 0;
 c[s >> 2] = y;
 Jh(z, j, g, C, w, v, s);
 mo(y) | 0;
 c[t >> 2] = c[b >> 2];
 z = c[w >> 2] | 0;
 b = c[v >> 2] | 0;
 c[r >> 2] = c[t >> 2];
 b = Sb(r, C, z, b, d, e) | 0;
 re(A);
 re(B);
 i = x;
 return b | 0;
}

function Qb(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0;
 f = i;
 i = i + 16 | 0;
 e = f;
 vd(hb(0) | 0);
 a = wf() | 0;
 b = D;
 d = 0;
 do {
  wd() | 0;
  d = d + 1 | 0;
 } while ((d | 0) != 1e6);
 d = wf() | 0;
 g = D;
 a = qo(d | 0, g | 0, a | 0, b | 0) | 0;
 a = Ao(a | 0, D | 0, 1e6, 0) | 0;
 h = D;
 h = Rb(vg(Rb(ug(Rb(6728, 13696, 24) | 0, 1e6) | 0, 13721, 6) | 0, a, h) | 0, 13728, 4) | 0;
 c[e >> 2] = Af(h + (c[(c[h >> 2] | 0) + -12 >> 2] | 0) | 0) | 0;
 a = Ok(e, 9336) | 0;
 a = Cb[c[(c[a >> 2] | 0) + 28 >> 2] & 15](a, 10) | 0;
 Mk(e);
 wg(h, a) | 0;
 ig(h) | 0;
 h = Ob(40) | 0;
 a = wf() | 0;
 b = D;
 g = qo(a | 0, b | 0, d | 0, g | 0) | 0;
 g = Ao(g | 0, D | 0, 1e6, 0) | 0;
 d = D;
 d = Rb(vg(Rb(ug(Rb(ug(Rb(6728, 13733, 13) | 0, 40) | 0, 13747, 5) | 0, h) | 0, 13753, 10) | 0, g, d) | 0, 13728, 4) | 0;
 c[e >> 2] = Af(d + (c[(c[d >> 2] | 0) + -12 >> 2] | 0) | 0) | 0;
 g = Ok(e, 9336) | 0;
 g = Cb[c[(c[g >> 2] | 0) + 28 >> 2] & 15](g, 10) | 0;
 Mk(e);
 wg(d, g) | 0;
 ig(d) | 0;
 d = 0;
 do {
  wd() | 0;
  wd() | 0;
  d = d + 1 | 0;
 } while ((d | 0) != 1e8);
 g = wf() | 0;
 g = qo(g | 0, D | 0, a | 0, b | 0) | 0;
 g = Ao(g | 0, D | 0, 1e6, 0) | 0;
 h = D;
 h = Rb(vg(Rb(6728, 13764, 45) | 0, g, h) | 0, 13728, 4) | 0;
 c[e >> 2] = Af(h + (c[(c[h >> 2] | 0) + -12 >> 2] | 0) | 0) | 0;
 g = Ok(e, 9336) | 0;
 g = Cb[c[(c[g >> 2] | 0) + 28 >> 2] & 15](g, 10) | 0;
 Mk(e);
 wg(h, g) | 0;
 ig(h) | 0;
 i = f;
 return 0;
}

function Uh(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = +f;
 var g = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0;
 y = i;
 i = i + 336 | 0;
 p = y + 296 | 0;
 l = y + 32 | 0;
 j = y + 24 | 0;
 g = y + 8 | 0;
 k = y;
 n = y + 300 | 0;
 m = y + 64 | 0;
 o = y + 68 | 0;
 u = y + 60 | 0;
 t = y + 56 | 0;
 q = y + 52 | 0;
 r = y + 48 | 0;
 B = k;
 c[B >> 2] = 37;
 c[B + 4 >> 2] = 0;
 B = Ih(k + 1 | 0, 21378, c[d + 4 >> 2] | 0) | 0;
 c[m >> 2] = n;
 a = ch() | 0;
 if (B) {
  c[g >> 2] = c[d + 8 >> 2];
  h[g + 8 >> 3] = f;
  a = Vm(n, 30, a, k, g) | 0;
 } else {
  h[j >> 3] = f;
  a = Vm(n, 30, a, k, j) | 0;
 }
 if ((a | 0) > 29) {
  g = ch() | 0;
  c[l >> 2] = c[d + 8 >> 2];
  h[l + 8 >> 3] = f;
  g = Wm(m, g, k, l) | 0;
  a = c[m >> 2] | 0;
  if (!a) Ec(); else {
   v = a;
   A = a;
   s = g;
  }
 } else {
  v = c[m >> 2] | 0;
  A = 0;
  s = a;
 }
 g = v + s | 0;
 j = Ch(v, g, d) | 0;
 if ((v | 0) != (n | 0)) {
  a = qe(s << 3) | 0;
  if (!a) Ec(); else {
   w = v;
   z = a;
   x = a;
  }
 } else {
  w = n;
  z = 0;
  x = o;
 }
 B = Af(d) | 0;
 c[q >> 2] = B;
 Vh(w, j, g, x, u, t, q);
 mo(B) | 0;
 c[r >> 2] = c[b >> 2];
 B = c[u >> 2] | 0;
 a = c[t >> 2] | 0;
 c[p >> 2] = c[r >> 2];
 a = Xm(p, x, B, a, d, e) | 0;
 c[b >> 2] = a;
 if (z) re(z);
 re(A);
 i = y;
 return a | 0;
}

function Hh(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = +f;
 var g = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0;
 v = i;
 i = i + 160 | 0;
 p = v + 68 | 0;
 l = v + 32 | 0;
 j = v + 24 | 0;
 g = v + 8 | 0;
 k = v;
 n = v + 72 | 0;
 m = v + 64 | 0;
 o = v + 102 | 0;
 u = v + 60 | 0;
 t = v + 56 | 0;
 q = v + 52 | 0;
 r = v + 48 | 0;
 B = k;
 c[B >> 2] = 37;
 c[B + 4 >> 2] = 0;
 B = Ih(k + 1 | 0, 21378, c[d + 4 >> 2] | 0) | 0;
 c[m >> 2] = n;
 a = ch() | 0;
 if (B) {
  c[g >> 2] = c[d + 8 >> 2];
  h[g + 8 >> 3] = f;
  a = Vm(n, 30, a, k, g) | 0;
 } else {
  h[j >> 3] = f;
  a = Vm(n, 30, a, k, j) | 0;
 }
 if ((a | 0) > 29) {
  g = ch() | 0;
  c[l >> 2] = c[d + 8 >> 2];
  h[l + 8 >> 3] = f;
  g = Wm(m, g, k, l) | 0;
  a = c[m >> 2] | 0;
  if (!a) Ec(); else {
   w = a;
   z = a;
   s = g;
  }
 } else {
  w = c[m >> 2] | 0;
  z = 0;
  s = a;
 }
 g = w + s | 0;
 j = Ch(w, g, d) | 0;
 if ((w | 0) != (n | 0)) {
  a = qe(s << 1) | 0;
  if (!a) Ec(); else {
   x = w;
   y = a;
   A = a;
  }
 } else {
  x = n;
  y = 0;
  A = o;
 }
 B = Af(d) | 0;
 c[q >> 2] = B;
 Jh(x, j, g, A, u, t, q);
 mo(B) | 0;
 c[r >> 2] = c[b >> 2];
 b = c[u >> 2] | 0;
 B = c[t >> 2] | 0;
 c[p >> 2] = c[r >> 2];
 B = Sb(p, A, b, B, d, e) | 0;
 re(y);
 re(z);
 i = v;
 return B | 0;
}

function sd(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0;
 m = i;
 i = i + 272 | 0;
 j = m + 8 | 0;
 l = m;
 h = c[b >> 2] | 0;
 c[l >> 2] = h;
 k = (a | 0) != 0;
 f = k ? e : 256;
 e = k ? a : j;
 a = h;
 a : do if ((f | 0) != 0 & (h | 0) != 0) {
  h = f;
  g = a;
  f = 0;
  while (1) {
   a = d >>> 0 >= h >>> 0;
   if (!(a | d >>> 0 > 32)) {
    a = g;
    break a;
   }
   a = a ? h : d;
   d = d - a | 0;
   a = td(e, l, a, 0) | 0;
   if ((a | 0) == -1) {
    f = d;
    break;
   }
   o = (e | 0) == (j | 0);
   n = o ? 0 : a;
   g = h - n | 0;
   e = o ? e : e + a | 0;
   f = a + f | 0;
   a = c[l >> 2] | 0;
   if ((h | 0) != (n | 0) & (a | 0) != 0) {
    h = g;
    g = a;
   } else {
    h = g;
    break a;
   }
  }
  d = f;
  h = 0;
  a = c[l >> 2] | 0;
  f = -1;
 } else {
  h = f;
  f = 0;
 } while (0);
 b : do if ((a | 0) != 0 ? (h | 0) != 0 & (d | 0) != 0 : 0) {
  g = a;
  a = e;
  while (1) {
   e = rd(a, c[g >> 2] | 0, 0) | 0;
   if ((e + 1 | 0) >>> 0 < 2) break;
   g = (c[l >> 2] | 0) + 4 | 0;
   c[l >> 2] = g;
   d = d + -1 | 0;
   f = f + 1 | 0;
   if (!((h | 0) != (e | 0) & (d | 0) != 0)) break b; else {
    h = h - e | 0;
    a = a + e | 0;
   }
  }
  if (!e) c[l >> 2] = 0; else f = -1;
 } while (0);
 if (k) c[b >> 2] = c[l >> 2];
 i = m;
 return f | 0;
}

function zh(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 n = i;
 i = i + 32 | 0;
 h = n + 20 | 0;
 j = n + 16 | 0;
 k = n + 12 | 0;
 m = n;
 if (!(c[e + 4 >> 2] & 1)) {
  m = c[(c[b >> 2] | 0) + 24 >> 2] | 0;
  c[j >> 2] = c[d >> 2];
  c[h >> 2] = c[j >> 2];
  h = Db[m & 31](b, h, e, f, g & 1) | 0;
 } else {
  j = Af(e) | 0;
  c[k >> 2] = j;
  h = Ok(k, 9476) | 0;
  mo(j) | 0;
  j = c[h >> 2] | 0;
  if (g) tb[c[j + 24 >> 2] & 63](m, h); else tb[c[j + 28 >> 2] & 63](m, h);
  e = a[m >> 0] | 0;
  l = (e & 1) == 0;
  h = m + 1 | 0;
  g = m + 8 | 0;
  b = l ? h : m + 1 | 0;
  h = l ? h : c[m + 8 >> 2] | 0;
  l = m + 4 | 0;
  f = (e & 1) == 0;
  if ((h | 0) != ((f ? b : c[g >> 2] | 0) + (f ? (e & 255) >>> 1 : c[l >> 2] | 0) | 0)) do {
   j = a[h >> 0] | 0;
   k = c[d >> 2] | 0;
   do if (k) {
    f = k + 24 | 0;
    e = c[f >> 2] | 0;
    if ((e | 0) != (c[k + 28 >> 2] | 0)) {
     c[f >> 2] = e + 1;
     a[e >> 0] = j;
     break;
    }
    if ((Cb[c[(c[k >> 2] | 0) + 52 >> 2] & 15](k, j & 255) | 0) == -1) c[d >> 2] = 0;
   } while (0);
   h = h + 1 | 0;
   e = a[m >> 0] | 0;
   f = (e & 1) == 0;
  } while ((h | 0) != ((f ? b : c[g >> 2] | 0) + (f ? (e & 255) >>> 1 : c[l >> 2] | 0) | 0));
  h = c[d >> 2] | 0;
  bf(m);
 }
 i = n;
 return h | 0;
}

function md(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0, m = 0;
 l = i;
 i = i + 16 | 0;
 g = l;
 j = (f | 0) == 0 ? 2620 : f;
 f = c[j >> 2] | 0;
 a : do if (!d) if (!f) f = 0; else k = 15; else {
  h = (b | 0) == 0 ? g : b;
  if (!e) f = -2; else {
   if (!f) {
    f = a[d >> 0] | 0;
    g = f & 255;
    if (f << 24 >> 24 > -1) {
     c[h >> 2] = g;
     f = f << 24 >> 24 != 0 & 1;
     break;
    }
    f = g + -194 | 0;
    if (f >>> 0 > 50) {
     k = 15;
     break;
    }
    f = c[2348 + (f << 2) >> 2] | 0;
    g = e + -1 | 0;
    if (g) {
     d = d + 1 | 0;
     k = 9;
    }
   } else {
    g = e;
    k = 9;
   }
   b : do if ((k | 0) == 9) {
    b = a[d >> 0] | 0;
    m = (b & 255) >>> 3;
    if ((m + -16 | m + (f >> 26)) >>> 0 > 7) {
     k = 15;
     break a;
    }
    while (1) {
     d = d + 1 | 0;
     f = (b & 255) + -128 | f << 6;
     g = g + -1 | 0;
     if ((f | 0) >= 0) break;
     if (!g) break b;
     b = a[d >> 0] | 0;
     if ((b & -64) << 24 >> 24 != -128) {
      k = 15;
      break a;
     }
    }
    c[j >> 2] = 0;
    c[h >> 2] = f;
    f = e - g | 0;
    break a;
   } while (0);
   c[j >> 2] = f;
   f = -2;
  }
 } while (0);
 if ((k | 0) == 15) {
  c[j >> 2] = 0;
  c[(Rc() | 0) >> 2] = 84;
  f = -1;
 }
 i = l;
 return f | 0;
}

function Oh(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 m = i;
 i = i + 32 | 0;
 h = m + 20 | 0;
 j = m + 16 | 0;
 k = m + 12 | 0;
 l = m;
 if (!(c[e + 4 >> 2] & 1)) {
  l = c[(c[b >> 2] | 0) + 24 >> 2] | 0;
  c[j >> 2] = c[d >> 2];
  c[h >> 2] = c[j >> 2];
  h = Db[l & 31](b, h, e, f, g & 1) | 0;
 } else {
  j = Af(e) | 0;
  c[k >> 2] = j;
  h = Ok(k, 9484) | 0;
  mo(j) | 0;
  j = c[h >> 2] | 0;
  if (g) tb[c[j + 24 >> 2] & 63](l, h); else tb[c[j + 28 >> 2] & 63](l, h);
  e = a[l >> 0] | 0;
  f = (e & 1) == 0;
  h = l + 4 | 0;
  g = l + 8 | 0;
  b = f ? h : l + 4 | 0;
  h = f ? h : c[l + 8 >> 2] | 0;
  f = (e & 1) == 0;
  if ((h | 0) != ((f ? b : c[g >> 2] | 0) + ((f ? (e & 255) >>> 1 : c[b >> 2] | 0) << 2) | 0)) do {
   j = c[h >> 2] | 0;
   k = c[d >> 2] | 0;
   if (k) {
    f = k + 24 | 0;
    e = c[f >> 2] | 0;
    if ((e | 0) == (c[k + 28 >> 2] | 0)) j = Cb[c[(c[k >> 2] | 0) + 52 >> 2] & 15](k, j) | 0; else {
     c[f >> 2] = e + 4;
     c[e >> 2] = j;
    }
    if ((j | 0) == -1) c[d >> 2] = 0;
   }
   h = h + 4 | 0;
   e = a[l >> 0] | 0;
   f = (e & 1) == 0;
  } while ((h | 0) != ((f ? b : c[g >> 2] | 0) + ((f ? (e & 255) >>> 1 : c[b >> 2] | 0) << 2) | 0));
  h = c[d >> 2] | 0;
  nf(l);
 }
 i = m;
 return h | 0;
}

function xc(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, i = 0, j = 0, k = 0;
 a : do if ((b | 0) == (c[d + 8 >> 2] | 0)) {
  if ((c[d + 4 >> 2] | 0) == (e | 0) ? (h = d + 28 | 0, (c[h >> 2] | 0) != 1) : 0) c[h >> 2] = f;
 } else {
  if ((b | 0) != (c[d >> 2] | 0)) {
   j = c[b + 8 >> 2] | 0;
   qb[c[(c[j >> 2] | 0) + 24 >> 2] & 3](j, d, e, f, g);
   break;
  }
  if ((c[d + 16 >> 2] | 0) != (e | 0) ? (i = d + 20 | 0, (c[i >> 2] | 0) != (e | 0)) : 0) {
   c[d + 32 >> 2] = f;
   f = d + 44 | 0;
   if ((c[f >> 2] | 0) == 4) break;
   h = d + 52 | 0;
   a[h >> 0] = 0;
   k = d + 53 | 0;
   a[k >> 0] = 0;
   b = c[b + 8 >> 2] | 0;
   Bb[c[(c[b >> 2] | 0) + 20 >> 2] & 7](b, d, e, e, 1, g);
   if (a[k >> 0] | 0) {
    if (!(a[h >> 0] | 0)) {
     h = 1;
     j = 13;
    }
   } else {
    h = 0;
    j = 13;
   }
   do if ((j | 0) == 13) {
    c[i >> 2] = e;
    k = d + 40 | 0;
    c[k >> 2] = (c[k >> 2] | 0) + 1;
    if ((c[d + 36 >> 2] | 0) == 1 ? (c[d + 24 >> 2] | 0) == 2 : 0) {
     a[d + 54 >> 0] = 1;
     if (h) break;
    } else j = 16;
    if ((j | 0) == 16 ? h : 0) break;
    c[f >> 2] = 4;
    break a;
   } while (0);
   c[f >> 2] = 3;
   break;
  }
  if ((f | 0) == 1) c[d + 32 >> 2] = 1;
 } while (0);
 return;
}

function fh(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0;
 s = i;
 i = i + 64 | 0;
 k = s + 56 | 0;
 j = s + 48 | 0;
 r = s + 52 | 0;
 l = s + 44 | 0;
 m = s + 40 | 0;
 n = s + 36 | 0;
 o = s + 32 | 0;
 q = s + 8 | 0;
 p = s;
 a : do if (!(c[f + 4 >> 2] & 1)) {
  c[r >> 2] = -1;
  q = c[(c[b >> 2] | 0) + 16 >> 2] | 0;
  c[l >> 2] = c[d >> 2];
  c[m >> 2] = c[e >> 2];
  c[j >> 2] = c[l >> 2];
  c[k >> 2] = c[m >> 2];
  j = ub[q & 63](b, j, k, f, g, r) | 0;
  c[d >> 2] = j;
  switch (c[r >> 2] | 0) {
  case 0:
   {
    a[h >> 0] = 0;
    break a;
   }
  case 1:
   {
    a[h >> 0] = 1;
    break a;
   }
  default:
   {
    a[h >> 0] = 1;
    c[g >> 2] = 4;
    break a;
   }
  }
 } else {
  b = Af(f) | 0;
  c[n >> 2] = b;
  j = Ok(n, 9328) | 0;
  mo(b) | 0;
  b = Af(f) | 0;
  c[o >> 2] = b;
  r = Ok(o, 9484) | 0;
  mo(b) | 0;
  tb[c[(c[r >> 2] | 0) + 24 >> 2] & 63](q, r);
  tb[c[(c[r >> 2] | 0) + 28 >> 2] & 63](q + 12 | 0, r);
  c[p >> 2] = c[e >> 2];
  c[k >> 2] = c[p >> 2];
  a[h >> 0] = (Lm(d, k, q, q + 24 | 0, j, g, 1) | 0) == (q | 0) & 1;
  j = c[d >> 2] | 0;
  nf(q + 12 | 0);
  nf(q);
 } while (0);
 i = s;
 return j | 0;
}

function Sg(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0;
 s = i;
 i = i + 64 | 0;
 k = s + 56 | 0;
 j = s + 48 | 0;
 r = s + 52 | 0;
 l = s + 44 | 0;
 m = s + 40 | 0;
 n = s + 36 | 0;
 o = s + 32 | 0;
 q = s + 8 | 0;
 p = s;
 a : do if (!(c[f + 4 >> 2] & 1)) {
  c[r >> 2] = -1;
  q = c[(c[b >> 2] | 0) + 16 >> 2] | 0;
  c[l >> 2] = c[d >> 2];
  c[m >> 2] = c[e >> 2];
  c[j >> 2] = c[l >> 2];
  c[k >> 2] = c[m >> 2];
  j = ub[q & 63](b, j, k, f, g, r) | 0;
  c[d >> 2] = j;
  switch (c[r >> 2] | 0) {
  case 0:
   {
    a[h >> 0] = 0;
    break a;
   }
  case 1:
   {
    a[h >> 0] = 1;
    break a;
   }
  default:
   {
    a[h >> 0] = 1;
    c[g >> 2] = 4;
    break a;
   }
  }
 } else {
  b = Af(f) | 0;
  c[n >> 2] = b;
  j = Ok(n, 9336) | 0;
  mo(b) | 0;
  b = Af(f) | 0;
  c[o >> 2] = b;
  r = Ok(o, 9476) | 0;
  mo(b) | 0;
  tb[c[(c[r >> 2] | 0) + 24 >> 2] & 63](q, r);
  tb[c[(c[r >> 2] | 0) + 28 >> 2] & 63](q + 12 | 0, r);
  c[p >> 2] = c[e >> 2];
  c[k >> 2] = c[p >> 2];
  a[h >> 0] = (Am(d, k, q, q + 24 | 0, j, g, 1) | 0) == (q | 0) & 1;
  j = c[d >> 2] | 0;
  bf(q + 12 | 0);
  bf(q);
 } while (0);
 i = s;
 return j | 0;
}

function sc(d, e, f, g) {
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 r = i;
 i = i + 64 | 0;
 q = r;
 p = c[d >> 2] | 0;
 o = d + (c[p + -8 >> 2] | 0) | 0;
 p = c[p + -4 >> 2] | 0;
 c[q >> 2] = f;
 c[q + 4 >> 2] = d;
 c[q + 8 >> 2] = e;
 c[q + 12 >> 2] = g;
 g = q + 16 | 0;
 d = q + 20 | 0;
 e = q + 24 | 0;
 h = q + 28 | 0;
 j = q + 32 | 0;
 k = q + 40 | 0;
 l = (p | 0) == (f | 0);
 m = g;
 n = m + 36 | 0;
 do {
  c[m >> 2] = 0;
  m = m + 4 | 0;
 } while ((m | 0) < (n | 0));
 b[g + 36 >> 1] = 0;
 a[g + 38 >> 0] = 0;
 a : do if (l) {
  c[q + 48 >> 2] = 1;
  Bb[c[(c[f >> 2] | 0) + 20 >> 2] & 7](f, q, o, o, 1, 0);
  g = (c[e >> 2] | 0) == 1 ? o : 0;
 } else {
  qb[c[(c[p >> 2] | 0) + 24 >> 2] & 3](p, q, o, 1, 0);
  switch (c[q + 36 >> 2] | 0) {
  case 0:
   {
    g = (c[k >> 2] | 0) == 1 & (c[h >> 2] | 0) == 1 & (c[j >> 2] | 0) == 1 ? c[d >> 2] | 0 : 0;
    break a;
   }
  case 1:
   break;
  default:
   {
    g = 0;
    break a;
   }
  }
  if ((c[e >> 2] | 0) != 1 ? !((c[k >> 2] | 0) == 0 & (c[h >> 2] | 0) == 1 & (c[j >> 2] | 0) == 1) : 0) {
   g = 0;
   break;
  }
  g = c[g >> 2] | 0;
 } while (0);
 i = r;
 return g | 0;
}

function Gd(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0;
 s = i;
 i = i + 224 | 0;
 o = s + 120 | 0;
 r = s + 80 | 0;
 q = s;
 p = s + 136 | 0;
 f = r;
 g = f + 40 | 0;
 do {
  c[f >> 2] = 0;
  f = f + 4 | 0;
 } while ((f | 0) < (g | 0));
 c[o >> 2] = c[e >> 2];
 if ((ge(0, d, o, q, r) | 0) < 0) e = -1; else {
  if ((c[b + 76 >> 2] | 0) > -1) m = Kd(b) | 0; else m = 0;
  e = c[b >> 2] | 0;
  n = e & 32;
  if ((a[b + 74 >> 0] | 0) < 1) c[b >> 2] = e & -33;
  e = b + 48 | 0;
  if (!(c[e >> 2] | 0)) {
   g = b + 44 | 0;
   h = c[g >> 2] | 0;
   c[g >> 2] = p;
   j = b + 28 | 0;
   c[j >> 2] = p;
   k = b + 20 | 0;
   c[k >> 2] = p;
   c[e >> 2] = 80;
   l = b + 16 | 0;
   c[l >> 2] = p + 80;
   f = ge(b, d, o, q, r) | 0;
   if (h) {
    pb[c[b + 36 >> 2] & 31](b, 0, 0) | 0;
    f = (c[k >> 2] | 0) == 0 ? -1 : f;
    c[g >> 2] = h;
    c[e >> 2] = 0;
    c[l >> 2] = 0;
    c[j >> 2] = 0;
    c[k >> 2] = 0;
   }
  } else f = ge(b, d, o, q, r) | 0;
  e = c[b >> 2] | 0;
  c[b >> 2] = e | n;
  if (m) Ld(b);
  e = (e & 32 | 0) == 0 ? f : -1;
 }
 i = s;
 return e | 0;
}

function Te(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0;
 s = i;
 i = i + 32 | 0;
 p = s + 16 | 0;
 e = s + 8 | 0;
 o = s + 4 | 0;
 n = s;
 q = (d | 0) == -1;
 a : do if (!q) {
  a[e >> 0] = d;
  if (a[b + 44 >> 0] | 0) if ((Ad(e, 1, 1, c[b + 32 >> 2] | 0) | 0) == 1) {
   r = 11;
   break;
  } else {
   e = -1;
   break;
  }
  c[o >> 2] = p;
  m = e + 1 | 0;
  g = b + 36 | 0;
  h = b + 40 | 0;
  j = p + 8 | 0;
  k = p;
  l = b + 32 | 0;
  while (1) {
   b = c[g >> 2] | 0;
   b = zb[c[(c[b >> 2] | 0) + 12 >> 2] & 15](b, c[h >> 2] | 0, e, m, n, p, j, o) | 0;
   if ((c[n >> 2] | 0) == (e | 0)) {
    e = -1;
    break a;
   }
   if ((b | 0) == 3) break;
   f = (b | 0) == 1;
   if (b >>> 0 >= 2) {
    e = -1;
    break a;
   }
   b = (c[o >> 2] | 0) - k | 0;
   if ((Ad(p, 1, b, c[l >> 2] | 0) | 0) != (b | 0)) {
    e = -1;
    break a;
   }
   if (f) e = f ? c[n >> 2] | 0 : e; else {
    r = 11;
    break a;
   }
  }
  if ((Ad(e, 1, 1, c[l >> 2] | 0) | 0) != 1) e = -1; else r = 11;
 } else r = 11; while (0);
 if ((r | 0) == 11) e = q ? 0 : d;
 i = s;
 return e | 0;
}

function Ie(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0;
 s = i;
 i = i + 32 | 0;
 p = s + 16 | 0;
 e = s + 8 | 0;
 o = s + 4 | 0;
 n = s;
 q = (d | 0) == -1;
 a : do if (!q) {
  c[e >> 2] = d;
  if (a[b + 44 >> 0] | 0) if ((Ad(e, 4, 1, c[b + 32 >> 2] | 0) | 0) == 1) {
   r = 11;
   break;
  } else {
   e = -1;
   break;
  }
  c[o >> 2] = p;
  l = e + 4 | 0;
  m = b + 36 | 0;
  g = b + 40 | 0;
  h = p + 8 | 0;
  j = p;
  k = b + 32 | 0;
  while (1) {
   b = c[m >> 2] | 0;
   b = zb[c[(c[b >> 2] | 0) + 12 >> 2] & 15](b, c[g >> 2] | 0, e, l, n, p, h, o) | 0;
   if ((c[n >> 2] | 0) == (e | 0)) {
    e = -1;
    break a;
   }
   if ((b | 0) == 3) break;
   f = (b | 0) == 1;
   if (b >>> 0 >= 2) {
    e = -1;
    break a;
   }
   b = (c[o >> 2] | 0) - j | 0;
   if ((Ad(p, 1, b, c[k >> 2] | 0) | 0) != (b | 0)) {
    e = -1;
    break a;
   }
   if (f) e = f ? c[n >> 2] | 0 : e; else {
    r = 11;
    break a;
   }
  }
  if ((Ad(e, 1, 1, c[k >> 2] | 0) | 0) != 1) e = -1; else r = 11;
 } else r = 11; while (0);
 if ((r | 0) == 11) e = q ? 0 : d;
 i = s;
 return e | 0;
}

function $j(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0;
 g = a[b >> 0] | 0;
 i = b + 4 | 0;
 h = c[i >> 2] | 0;
 a : do if (((g & 1) == 0 ? (g & 255) >>> 1 : h) | 0) {
  if ((d | 0) != (e | 0)) {
   g = e + -4 | 0;
   if (g >>> 0 > d >>> 0) {
    h = d;
    do {
     j = c[h >> 2] | 0;
     c[h >> 2] = c[g >> 2];
     c[g >> 2] = j;
     h = h + 4 | 0;
     g = g + -4 | 0;
    } while (h >>> 0 < g >>> 0);
   }
   g = a[b >> 0] | 0;
   h = c[i >> 2] | 0;
  }
  j = (g & 1) == 0;
  i = j ? b + 1 | 0 : c[b + 8 >> 2] | 0;
  e = e + -4 | 0;
  b = i + (j ? (g & 255) >>> 1 : h) | 0;
  h = a[i >> 0] | 0;
  g = h << 24 >> 24 < 1 | h << 24 >> 24 == 127;
  b : do if (e >>> 0 > d >>> 0) {
   while (1) {
    if (!g ? (h << 24 >> 24 | 0) != (c[d >> 2] | 0) : 0) break;
    i = (b - i | 0) > 1 ? i + 1 | 0 : i;
    d = d + 4 | 0;
    h = a[i >> 0] | 0;
    g = h << 24 >> 24 < 1 | h << 24 >> 24 == 127;
    if (d >>> 0 >= e >>> 0) break b;
   }
   c[f >> 2] = 4;
   break a;
  } while (0);
  if (!g ? ((c[e >> 2] | 0) + -1 | 0) >>> 0 >= h << 24 >> 24 >>> 0 : 0) c[f >> 2] = 4;
 } while (0);
 return;
}

function qd(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0;
 k = i;
 i = i + 16 | 0;
 g = k;
 a : do if (!e) g = 0; else {
  do if (f) {
   j = (b | 0) == 0 ? g : b;
   g = a[e >> 0] | 0;
   b = g & 255;
   if (g << 24 >> 24 > -1) {
    c[j >> 2] = b;
    g = g << 24 >> 24 != 0 & 1;
    break a;
   }
   g = b + -194 | 0;
   if (g >>> 0 <= 50) {
    b = e + 1 | 0;
    h = c[2348 + (g << 2) >> 2] | 0;
    if (f >>> 0 < 4 ? (h & -2147483648 >>> ((f * 6 | 0) + -6 | 0) | 0) != 0 : 0) break;
    g = d[b >> 0] | 0;
    f = g >>> 3;
    if ((f + -16 | f + (h >> 26)) >>> 0 <= 7) {
     g = g + -128 | h << 6;
     if ((g | 0) >= 0) {
      c[j >> 2] = g;
      g = 2;
      break a;
     }
     b = d[e + 2 >> 0] | 0;
     if ((b & 192 | 0) == 128) {
      b = b + -128 | g << 6;
      if ((b | 0) >= 0) {
       c[j >> 2] = b;
       g = 3;
       break a;
      }
      g = d[e + 3 >> 0] | 0;
      if ((g & 192 | 0) == 128) {
       c[j >> 2] = g + -128 | b << 6;
       g = 4;
       break a;
      }
     }
    }
   }
  } while (0);
  c[(Rc() | 0) >> 2] = 84;
  g = -1;
 } while (0);
 i = k;
 return g | 0;
}

function Zd(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 h = d & 255;
 f = (e | 0) != 0;
 a : do if (f & (b & 3 | 0) != 0) {
  g = d & 255;
  while (1) {
   if ((a[b >> 0] | 0) == g << 24 >> 24) {
    i = 6;
    break a;
   }
   b = b + 1 | 0;
   e = e + -1 | 0;
   f = (e | 0) != 0;
   if (!(f & (b & 3 | 0) != 0)) {
    i = 5;
    break;
   }
  }
 } else i = 5; while (0);
 if ((i | 0) == 5) if (f) i = 6; else e = 0;
 b : do if ((i | 0) == 6) {
  g = d & 255;
  if ((a[b >> 0] | 0) != g << 24 >> 24) {
   f = $(h, 16843009) | 0;
   c : do if (e >>> 0 > 3) while (1) {
    h = c[b >> 2] ^ f;
    if ((h & -2139062144 ^ -2139062144) & h + -16843009) break;
    b = b + 4 | 0;
    e = e + -4 | 0;
    if (e >>> 0 <= 3) {
     i = 11;
     break c;
    }
   } else i = 11; while (0);
   if ((i | 0) == 11) if (!e) {
    e = 0;
    break;
   }
   while (1) {
    if ((a[b >> 0] | 0) == g << 24 >> 24) break b;
    b = b + 1 | 0;
    e = e + -1 | 0;
    if (!e) {
     e = 0;
     break;
    }
   }
  }
 } while (0);
 return ((e | 0) != 0 ? b : 0) | 0;
}

function Ih(b, c, d) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0;
 if (d & 2048) {
  a[b >> 0] = 43;
  b = b + 1 | 0;
 }
 if (d & 1024) {
  a[b >> 0] = 35;
  b = b + 1 | 0;
 }
 h = d & 260;
 f = d >>> 14;
 i = (h | 0) == 260;
 if (i) g = 0; else {
  a[b >> 0] = 46;
  a[b + 1 >> 0] = 42;
  b = b + 2 | 0;
  g = 1;
 }
 d = a[c >> 0] | 0;
 if (d << 24 >> 24) {
  e = b;
  while (1) {
   c = c + 1 | 0;
   b = e + 1 | 0;
   a[e >> 0] = d;
   d = a[c >> 0] | 0;
   if (!(d << 24 >> 24)) break; else e = b;
  }
 }
 a : do switch (h | 0) {
 case 4:
  if (!(f & 1)) {
   a[b >> 0] = 102;
   break a;
  } else {
   a[b >> 0] = 70;
   break a;
  }
 case 256:
  if (!(f & 1)) {
   a[b >> 0] = 101;
   break a;
  } else {
   a[b >> 0] = 69;
   break a;
  }
 default:
  {
   d = (f & 1 | 0) != 0;
   if (i) if (d) {
    a[b >> 0] = 65;
    break a;
   } else {
    a[b >> 0] = 97;
    break a;
   } else if (d) {
    a[b >> 0] = 71;
    break a;
   } else {
    a[b >> 0] = 103;
    break a;
   }
  }
 } while (0);
 return g | 0;
}

function Ye(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0;
 m = i;
 i = i + 32 | 0;
 l = m + 16 | 0;
 k = m + 4 | 0;
 f = m + 8 | 0;
 g = m;
 h = b + 52 | 0;
 e = (a[h >> 0] | 0) != 0;
 a : do if ((d | 0) == -1) if (e) d = -1; else {
  d = c[b + 48 >> 2] | 0;
  a[h >> 0] = (d | 0) != -1 & 1;
 } else {
  j = b + 48 | 0;
  b : do if (e) {
   a[f >> 0] = c[j >> 2];
   e = c[b + 36 >> 2] | 0;
   switch (zb[c[(c[e >> 2] | 0) + 12 >> 2] & 15](e, c[b + 40 >> 2] | 0, f, f + 1 | 0, g, l, l + 8 | 0, k) | 0) {
   case 1:
   case 2:
    {
     d = -1;
     break a;
    }
   case 3:
    {
     a[l >> 0] = c[j >> 2];
     c[k >> 2] = l + 1;
     break;
    }
   default:
    {}
   }
   e = b + 32 | 0;
   while (1) {
    f = c[k >> 2] | 0;
    if (f >>> 0 <= l >>> 0) break b;
    b = f + -1 | 0;
    c[k >> 2] = b;
    if ((Ed(a[b >> 0] | 0, c[e >> 2] | 0) | 0) == -1) {
     d = -1;
     break a;
    }
   }
  } while (0);
  c[j >> 2] = d;
  a[h >> 0] = 1;
 } while (0);
 i = m;
 return d | 0;
}

function Ne(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0;
 m = i;
 i = i + 32 | 0;
 l = m + 16 | 0;
 k = m + 8 | 0;
 f = m + 4 | 0;
 g = m;
 h = b + 52 | 0;
 e = (a[h >> 0] | 0) != 0;
 a : do if ((d | 0) == -1) if (e) d = -1; else {
  d = c[b + 48 >> 2] | 0;
  a[h >> 0] = (d | 0) != -1 & 1;
 } else {
  j = b + 48 | 0;
  b : do if (e) {
   c[f >> 2] = c[j >> 2];
   e = c[b + 36 >> 2] | 0;
   switch (zb[c[(c[e >> 2] | 0) + 12 >> 2] & 15](e, c[b + 40 >> 2] | 0, f, f + 4 | 0, g, l, l + 8 | 0, k) | 0) {
   case 1:
   case 2:
    {
     d = -1;
     break a;
    }
   case 3:
    {
     a[l >> 0] = c[j >> 2];
     c[k >> 2] = l + 1;
     break;
    }
   default:
    {}
   }
   e = b + 32 | 0;
   while (1) {
    f = c[k >> 2] | 0;
    if (f >>> 0 <= l >>> 0) break b;
    b = f + -1 | 0;
    c[k >> 2] = b;
    if ((Ed(a[b >> 0] | 0, c[e >> 2] | 0) | 0) == -1) {
     d = -1;
     break a;
    }
   }
  } while (0);
  c[j >> 2] = d;
  a[h >> 0] = 1;
 } while (0);
 i = m;
 return d | 0;
}

function Od(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 m = i;
 i = i + 48 | 0;
 h = m + 16 | 0;
 g = m;
 f = m + 32 | 0;
 c[f >> 2] = d;
 j = f + 4 | 0;
 l = b + 48 | 0;
 n = c[l >> 2] | 0;
 c[j >> 2] = e - ((n | 0) != 0 & 1);
 k = b + 44 | 0;
 c[f + 8 >> 2] = c[k >> 2];
 c[f + 12 >> 2] = n;
 if (!(c[576] | 0)) {
  c[h >> 2] = c[b + 60 >> 2];
  c[h + 4 >> 2] = f;
  c[h + 8 >> 2] = 2;
  f = Wc(lb(145, h | 0) | 0) | 0;
 } else {
  gb(95, b | 0);
  c[g >> 2] = c[b + 60 >> 2];
  c[g + 4 >> 2] = f;
  c[g + 8 >> 2] = 2;
  f = Wc(lb(145, g | 0) | 0) | 0;
  Za(0);
 }
 if ((f | 0) >= 1) {
  j = c[j >> 2] | 0;
  if (f >>> 0 > j >>> 0) {
   h = c[k >> 2] | 0;
   g = b + 4 | 0;
   c[g >> 2] = h;
   c[b + 8 >> 2] = h + (f - j);
   if (!(c[l >> 2] | 0)) f = e; else {
    c[g >> 2] = h + 1;
    a[d + (e + -1) >> 0] = a[h >> 0] | 0;
    f = e;
   }
  }
 } else {
  c[b >> 2] = c[b >> 2] | f & 48 ^ 16;
  c[b + 8 >> 2] = 0;
  c[b + 4 >> 2] = 0;
 }
 i = m;
 return f | 0;
}

function Xm(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 o = i;
 i = i + 16 | 0;
 n = o;
 j = c[b >> 2] | 0;
 a : do if (!j) j = 0; else {
  p = d;
  l = f - p >> 2;
  m = g + 12 | 0;
  g = c[m >> 2] | 0;
  l = (g | 0) > (l | 0) ? g - l | 0 : 0;
  g = e;
  p = g - p | 0;
  k = p >> 2;
  if ((p | 0) > 0 ? (pb[c[(c[j >> 2] | 0) + 48 >> 2] & 31](j, d, k) | 0) != (k | 0) : 0) {
   c[b >> 2] = 0;
   j = 0;
   break;
  }
  do if ((l | 0) > 0) {
   mf(n, l, h);
   if ((pb[c[(c[j >> 2] | 0) + 48 >> 2] & 31](j, (a[n >> 0] & 1) == 0 ? n + 4 | 0 : c[n + 8 >> 2] | 0, l) | 0) == (l | 0)) {
    nf(n);
    break;
   } else {
    c[b >> 2] = 0;
    nf(n);
    j = 0;
    break a;
   }
  } while (0);
  p = f - g | 0;
  f = p >> 2;
  if ((p | 0) > 0 ? (pb[c[(c[j >> 2] | 0) + 48 >> 2] & 31](j, e, f) | 0) != (f | 0) : 0) {
   c[b >> 2] = 0;
   j = 0;
   break;
  }
  c[m >> 2] = 0;
 } while (0);
 i = o;
 return j | 0;
}

function Sb(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 o = i;
 i = i + 16 | 0;
 m = o;
 n = c[b >> 2] | 0;
 if (!n) {
  b = 0;
  i = o;
  return b | 0;
 }
 p = d;
 k = f - p | 0;
 l = g + 12 | 0;
 j = c[l >> 2] | 0;
 k = (j | 0) > (k | 0) ? j - k | 0 : 0;
 j = e;
 g = j - p | 0;
 if ((g | 0) > 0 ? (pb[c[(c[n >> 2] | 0) + 48 >> 2] & 31](n, d, g) | 0) != (g | 0) : 0) {
  c[b >> 2] = 0;
  p = 0;
  i = o;
  return p | 0;
 }
 do if ((k | 0) > 0) {
  af(m, k, h);
  if ((pb[c[(c[n >> 2] | 0) + 48 >> 2] & 31](n, (a[m >> 0] & 1) == 0 ? m + 1 | 0 : c[m + 8 >> 2] | 0, k) | 0) == (k | 0)) {
   bf(m);
   break;
  }
  c[b >> 2] = 0;
  bf(m);
  p = 0;
  i = o;
  return p | 0;
 } while (0);
 f = f - j | 0;
 if ((f | 0) > 0 ? (pb[c[(c[n >> 2] | 0) + 48 >> 2] & 31](n, e, f) | 0) != (f | 0) : 0) {
  c[b >> 2] = 0;
  p = 0;
  i = o;
  return p | 0;
 }
 c[l >> 2] = 0;
 p = n;
 i = o;
 return p | 0;
}

function gf(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 if (d >>> 0 > 4294967279) Ic(b);
 e = a[b >> 0] | 0;
 if (!(e & 1)) f = 10; else {
  e = c[b >> 2] | 0;
  f = (e & -2) + -1 | 0;
  e = e & 255;
 }
 if (!(e & 1)) j = (e & 255) >>> 1; else j = c[b + 4 >> 2] | 0;
 d = j >>> 0 > d >>> 0 ? j : d;
 if (d >>> 0 < 11) i = 10; else i = (d + 16 & -16) + -1 | 0;
 do if ((i | 0) != (f | 0)) {
  do if ((i | 0) != 10) {
   d = Wb(i + 1 | 0) | 0;
   if (!(e & 1)) {
    f = 1;
    g = b + 1 | 0;
    h = 0;
    break;
   } else {
    f = 1;
    g = c[b + 8 >> 2] | 0;
    h = 1;
    break;
   }
  } else {
   d = b + 1 | 0;
   f = 0;
   g = c[b + 8 >> 2] | 0;
   h = 1;
  } while (0);
  if (!(e & 1)) e = (e & 255) >>> 1; else e = c[b + 4 >> 2] | 0;
  uo(d | 0, g | 0, e + 1 | 0) | 0;
  if (h) Xb(g);
  if (f) {
   c[b >> 2] = i + 1 | 1;
   c[b + 4 >> 2] = j;
   c[b + 8 >> 2] = d;
   break;
  } else {
   a[b >> 0] = j << 1;
   break;
  }
 } while (0);
 return;
}

function qf(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 if (d >>> 0 > 1073741807) Ic(b);
 e = a[b >> 0] | 0;
 if (!(e & 1)) f = 1; else {
  e = c[b >> 2] | 0;
  f = (e & -2) + -1 | 0;
  e = e & 255;
 }
 if (!(e & 1)) j = (e & 255) >>> 1; else j = c[b + 4 >> 2] | 0;
 d = j >>> 0 > d >>> 0 ? j : d;
 if (d >>> 0 < 2) i = 1; else i = (d + 4 & -4) + -1 | 0;
 do if ((i | 0) != (f | 0)) {
  do if ((i | 0) != 1) {
   d = Wb((i << 2) + 4 | 0) | 0;
   if (!(e & 1)) {
    f = 1;
    g = b + 4 | 0;
    h = 0;
    break;
   } else {
    f = 1;
    g = c[b + 8 >> 2] | 0;
    h = 1;
    break;
   }
  } else {
   d = b + 4 | 0;
   f = 0;
   g = c[b + 8 >> 2] | 0;
   h = 1;
  } while (0);
  if (!(e & 1)) e = (e & 255) >>> 1; else e = c[b + 4 >> 2] | 0;
  be(d, g, e + 1 | 0) | 0;
  if (h) Xb(g);
  if (f) {
   c[b >> 2] = i + 1 | 1;
   c[b + 4 >> 2] = j;
   c[b + 8 >> 2] = d;
   break;
  } else {
   a[b >> 0] = j << 1;
   break;
  }
 } while (0);
 return;
}

function om(b) {
 b = b | 0;
 if ((a[1816] | 0) == 0 ? (Ba(1816) | 0) != 0 : 0) {
  if ((a[1824] | 0) == 0 ? (Ba(1824) | 0) != 0 : 0) {
   b = 11132;
   do {
    c[b >> 2] = 0;
    c[b + 4 >> 2] = 0;
    c[b + 8 >> 2] = 0;
    b = b + 12 | 0;
   } while ((b | 0) != 11420);
   cb(104, 0, n | 0) | 0;
   Ia(1824);
  }
  of(11132, 11420) | 0;
  of(11144, 11452) | 0;
  of(11156, 11488) | 0;
  of(11168, 11512) | 0;
  of(11180, 11536) | 0;
  of(11192, 11552) | 0;
  of(11204, 11572) | 0;
  of(11216, 11592) | 0;
  of(11228, 11620) | 0;
  of(11240, 11660) | 0;
  of(11252, 11692) | 0;
  of(11264, 11728) | 0;
  of(11276, 11764) | 0;
  of(11288, 11780) | 0;
  of(11300, 11796) | 0;
  of(11312, 11812) | 0;
  of(11324, 11536) | 0;
  of(11336, 11828) | 0;
  of(11348, 11844) | 0;
  of(11360, 11860) | 0;
  of(11372, 11876) | 0;
  of(11384, 11892) | 0;
  of(11396, 11908) | 0;
  of(11408, 11924) | 0;
  c[2985] = 11132;
  Ia(1816);
 }
 return c[2985] | 0;
}

function nm(b) {
 b = b | 0;
 if ((a[1800] | 0) == 0 ? (Ba(1800) | 0) != 0 : 0) {
  if ((a[1808] | 0) == 0 ? (Ba(1808) | 0) != 0 : 0) {
   b = 10840;
   do {
    c[b >> 2] = 0;
    c[b + 4 >> 2] = 0;
    c[b + 8 >> 2] = 0;
    b = b + 12 | 0;
   } while ((b | 0) != 11128);
   cb(103, 0, n | 0) | 0;
   Ia(1808);
  }
  cf(10840, 21563) | 0;
  cf(10852, 21571) | 0;
  cf(10864, 21580) | 0;
  cf(10876, 21586) | 0;
  cf(10888, 21592) | 0;
  cf(10900, 21596) | 0;
  cf(10912, 21601) | 0;
  cf(10924, 21606) | 0;
  cf(10936, 21613) | 0;
  cf(10948, 21623) | 0;
  cf(10960, 21631) | 0;
  cf(10972, 21640) | 0;
  cf(10984, 21649) | 0;
  cf(10996, 21653) | 0;
  cf(11008, 21657) | 0;
  cf(11020, 21661) | 0;
  cf(11032, 21592) | 0;
  cf(11044, 21665) | 0;
  cf(11056, 21669) | 0;
  cf(11068, 21673) | 0;
  cf(11080, 21677) | 0;
  cf(11092, 21681) | 0;
  cf(11104, 21685) | 0;
  cf(11116, 21689) | 0;
  c[2782] = 10840;
  Ia(1800);
 }
 return c[2782] | 0;
}

function zc(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 if ((b | 0) == (c[d + 8 >> 2] | 0)) tc(0, d, e, f, g); else {
  m = d + 52 | 0;
  n = a[m >> 0] | 0;
  o = d + 53 | 0;
  p = a[o >> 0] | 0;
  l = c[b + 12 >> 2] | 0;
  i = b + 16 + (l << 3) | 0;
  a[m >> 0] = 0;
  a[o >> 0] = 0;
  vc(b + 16 | 0, d, e, f, g, h);
  a : do if ((l | 0) > 1) {
   j = d + 24 | 0;
   k = b + 8 | 0;
   l = d + 54 | 0;
   b = b + 24 | 0;
   do {
    if (a[l >> 0] | 0) break a;
    if (!(a[m >> 0] | 0)) {
     if ((a[o >> 0] | 0) != 0 ? (c[k >> 2] & 1 | 0) == 0 : 0) break a;
    } else {
     if ((c[j >> 2] | 0) == 1) break a;
     if (!(c[k >> 2] & 2)) break a;
    }
    a[m >> 0] = 0;
    a[o >> 0] = 0;
    vc(b, d, e, f, g, h);
    b = b + 8 | 0;
   } while (b >>> 0 < i >>> 0);
  } while (0);
  a[m >> 0] = n;
  a[o >> 0] = p;
 }
 return;
}

function vg(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0;
 o = i;
 i = i + 32 | 0;
 k = o + 20 | 0;
 m = o + 16 | 0;
 n = o + 8 | 0;
 f = o;
 sg(n, b);
 if (a[n >> 0] | 0) {
  c[f >> 2] = Af(b + (c[(c[b >> 2] | 0) + -12 >> 2] | 0) | 0) | 0;
  l = Ok(f, 8508) | 0;
  Mk(f);
  g = c[(c[b >> 2] | 0) + -12 >> 2] | 0;
  h = c[b + (g + 24) >> 2] | 0;
  j = b + g | 0;
  g = b + (g + 76) | 0;
  f = c[g >> 2] | 0;
  if ((f | 0) == -1) {
   c[k >> 2] = Af(j) | 0;
   f = Ok(k, 9336) | 0;
   f = Cb[c[(c[f >> 2] | 0) + 28 >> 2] & 15](f, 32) | 0;
   Mk(k);
   f = f << 24 >> 24;
   c[g >> 2] = f;
  }
  g = c[(c[l >> 2] | 0) + 20 >> 2] | 0;
  c[m >> 2] = h;
  c[k >> 2] = c[m >> 2];
  if (!(ub[g & 63](l, k, j, f & 255, d, e) | 0)) {
   m = b + ((c[(c[b >> 2] | 0) + -12 >> 2] | 0) + 16) | 0;
   c[m >> 2] = c[m >> 2] | 5;
  }
 }
 tg(n);
 i = o;
 return b | 0;
}

function Fc() {
 var a = 0, b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0;
 f = i;
 i = i + 48 | 0;
 h = f + 32 | 0;
 d = f + 24 | 0;
 j = f + 16 | 0;
 g = f;
 f = f + 36 | 0;
 a = Vb() | 0;
 if ((a | 0) != 0 ? (e = c[a >> 2] | 0, (e | 0) != 0) : 0) {
  a = e + 48 | 0;
  b = c[a >> 2] | 0;
  a = c[a + 4 >> 2] | 0;
  if (!((b & -256 | 0) == 1126902528 & (a | 0) == 1129074247)) {
   c[d >> 2] = c[575];
   Tb(14577, d);
  }
  if ((b | 0) == 1126902529 & (a | 0) == 1129074247) a = c[e + 44 >> 2] | 0; else a = e + 80 | 0;
  c[f >> 2] = a;
  e = c[e >> 2] | 0;
  a = c[e + 4 >> 2] | 0;
  if (pb[c[(c[24 >> 2] | 0) + 16 >> 2] & 31](24, e, f) | 0) {
   j = c[f >> 2] | 0;
   f = c[575] | 0;
   j = wb[c[(c[j >> 2] | 0) + 8 >> 2] & 63](j) | 0;
   c[g >> 2] = f;
   c[g + 4 >> 2] = a;
   c[g + 8 >> 2] = j;
   Tb(14491, g);
  } else {
   c[j >> 2] = c[575];
   c[j + 4 >> 2] = a;
   Tb(14536, j);
  }
 }
 Tb(14615, h);
}

function ug(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 n = i;
 i = i + 32 | 0;
 j = n + 20 | 0;
 k = n + 16 | 0;
 m = n + 8 | 0;
 e = n;
 sg(m, b);
 if (a[m >> 0] | 0) {
  c[e >> 2] = Af(b + (c[(c[b >> 2] | 0) + -12 >> 2] | 0) | 0) | 0;
  l = Ok(e, 8508) | 0;
  Mk(e);
  f = c[(c[b >> 2] | 0) + -12 >> 2] | 0;
  g = c[b + (f + 24) >> 2] | 0;
  h = b + f | 0;
  f = b + (f + 76) | 0;
  e = c[f >> 2] | 0;
  if ((e | 0) == -1) {
   c[j >> 2] = Af(h) | 0;
   e = Ok(j, 9336) | 0;
   e = Cb[c[(c[e >> 2] | 0) + 28 >> 2] & 15](e, 32) | 0;
   Mk(j);
   e = e << 24 >> 24;
   c[f >> 2] = e;
  }
  f = c[(c[l >> 2] | 0) + 16 >> 2] | 0;
  c[k >> 2] = g;
  c[j >> 2] = c[k >> 2];
  if (!(Db[f & 31](l, j, h, e & 255, d) | 0)) {
   d = b + ((c[(c[b >> 2] | 0) + -12 >> 2] | 0) + 16) | 0;
   c[d >> 2] = c[d >> 2] | 5;
  }
 }
 tg(m);
 i = n;
 return b | 0;
}

function jo(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0;
 k = i;
 i = i + 16 | 0;
 j = k;
 a : do if ((a | 0) == (b | 0)) {
  c[d >> 2] = 4;
  a = 0;
 } else {
  g = Rc() | 0;
  h = c[g >> 2] | 0;
  c[g >> 2] = 0;
  a = Kc(a, j, e, ch() | 0) | 0;
  e = D;
  f = c[g >> 2] | 0;
  if (!f) c[g >> 2] = h;
  if ((c[j >> 2] | 0) != (b | 0)) {
   c[d >> 2] = 4;
   a = 0;
   break;
  }
  do if ((f | 0) == 34) {
   c[d >> 2] = 4;
   if ((e | 0) > 0 | (e | 0) == 0 & a >>> 0 > 0) {
    a = 2147483647;
    break a;
   }
  } else {
   if ((e | 0) < -1 | (e | 0) == -1 & a >>> 0 < 2147483648) {
    c[d >> 2] = 4;
    break;
   }
   if ((e | 0) > 0 | (e | 0) == 0 & a >>> 0 > 2147483647) {
    c[d >> 2] = 4;
    a = 2147483647;
    break a;
   } else break a;
  } while (0);
  a = -2147483648;
 } while (0);
 i = k;
 return a | 0;
}

function cn(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0, k = 0;
 h = d;
 f = a[b >> 0] | 0;
 if (!(f & 1)) {
  g = 1;
  k = (f & 255) >>> 1;
 } else {
  f = c[b >> 2] | 0;
  g = (f & -2) + -1 | 0;
  k = c[b + 4 >> 2] | 0;
  f = f & 255;
 }
 j = e - h >> 2;
 do if (j) {
  if ((g - k | 0) >>> 0 < j >>> 0) {
   tf(b, g, k + j - g | 0, k, k, 0, 0);
   f = a[b >> 0] | 0;
  }
  if (!(f & 1)) i = b + 4 | 0; else i = c[b + 8 >> 2] | 0;
  h = k + ((e - h | 0) >>> 2) | 0;
  if ((d | 0) != (e | 0)) {
   f = d;
   g = i + (k << 2) | 0;
   while (1) {
    c[g >> 2] = c[f >> 2];
    f = f + 4 | 0;
    if ((f | 0) == (e | 0)) break; else g = g + 4 | 0;
   }
  }
  c[i + (h << 2) >> 2] = 0;
  f = k + j | 0;
  if (!(a[b >> 0] & 1)) {
   a[b >> 0] = f << 1;
   break;
  } else {
   c[b + 4 >> 2] = f;
   break;
  }
 } while (0);
 return b | 0;
}

function an(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0, k = 0;
 h = d;
 f = a[b >> 0] | 0;
 if (!(f & 1)) {
  g = 10;
  k = (f & 255) >>> 1;
 } else {
  f = c[b >> 2] | 0;
  g = (f & -2) + -1 | 0;
  k = c[b + 4 >> 2] | 0;
  f = f & 255;
 }
 j = e - h | 0;
 do if ((e | 0) != (d | 0)) {
  if ((g - k | 0) >>> 0 < j >>> 0) {
   kf(b, g, k + j - g | 0, k, k, 0, 0);
   f = a[b >> 0] | 0;
  }
  if (!(f & 1)) i = b + 1 | 0; else i = c[b + 8 >> 2] | 0;
  h = e + (k - h) | 0;
  if ((d | 0) != (e | 0)) {
   f = d;
   g = i + k | 0;
   while (1) {
    a[g >> 0] = a[f >> 0] | 0;
    f = f + 1 | 0;
    if ((f | 0) == (e | 0)) break; else g = g + 1 | 0;
   }
  }
  a[i + h >> 0] = 0;
  f = k + j | 0;
  if (!(a[b >> 0] & 1)) {
   a[b >> 0] = f << 1;
   break;
  } else {
   c[b + 4 >> 2] = f;
   break;
  }
 } while (0);
 return b | 0;
}

function zd(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 f = e + 16 | 0;
 g = c[f >> 2] | 0;
 if (!g) if (!(Ud(e) | 0)) {
  g = c[f >> 2] | 0;
  h = 4;
 } else f = 0; else h = 4;
 a : do if ((h | 0) == 4) {
  i = e + 20 | 0;
  h = c[i >> 2] | 0;
  if ((g - h | 0) >>> 0 < d >>> 0) {
   f = pb[c[e + 36 >> 2] & 31](e, b, d) | 0;
   break;
  }
  b : do if ((a[e + 75 >> 0] | 0) > -1) {
   f = d;
   while (1) {
    if (!f) {
     g = h;
     f = 0;
     break b;
    }
    g = f + -1 | 0;
    if ((a[b + g >> 0] | 0) == 10) break; else f = g;
   }
   if ((pb[c[e + 36 >> 2] & 31](e, b, f) | 0) >>> 0 < f >>> 0) break a;
   d = d - f | 0;
   b = b + f | 0;
   g = c[i >> 2] | 0;
  } else {
   g = h;
   f = 0;
  } while (0);
  uo(g | 0, b | 0, d | 0) | 0;
  c[i >> 2] = (c[i >> 2] | 0) + d;
  f = f + d | 0;
 } while (0);
 return f | 0;
}

function Rb(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 n = i;
 i = i + 32 | 0;
 h = n + 16 | 0;
 m = n + 8 | 0;
 j = n;
 sg(m, b);
 if (!(a[m >> 0] | 0)) {
  tg(m);
  i = n;
  return b | 0;
 }
 f = c[(c[b >> 2] | 0) + -12 >> 2] | 0;
 c[j >> 2] = c[b + (f + 24) >> 2];
 l = b + f | 0;
 k = c[b + (f + 4) >> 2] | 0;
 g = d + e | 0;
 f = b + (f + 76) | 0;
 e = c[f >> 2] | 0;
 if ((e | 0) == -1) {
  c[h >> 2] = Af(l) | 0;
  e = Ok(h, 9336) | 0;
  e = Cb[c[(c[e >> 2] | 0) + 28 >> 2] & 15](e, 32) | 0;
  Mk(h);
  e = e << 24 >> 24;
  c[f >> 2] = e;
 }
 c[h >> 2] = c[j >> 2];
 if (Sb(h, d, (k & 176 | 0) == 32 ? g : d, g, l, e & 255) | 0) {
  tg(m);
  i = n;
  return b | 0;
 }
 d = c[(c[b >> 2] | 0) + -12 >> 2] | 0;
 xf(b + d | 0, c[b + (d + 16) >> 2] | 5);
 tg(m);
 i = n;
 return b | 0;
}

function Sh(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 h = i;
 i = i + 128 | 0;
 k = h;
 o = h + 116 | 0;
 q = h + 104 | 0;
 j = h + 20 | 0;
 m = h + 16 | 0;
 b = h + 12 | 0;
 n = h + 8 | 0;
 l = h + 4 | 0;
 a[o >> 0] = a[21367] | 0;
 a[o + 1 >> 0] = a[21368] | 0;
 a[o + 2 >> 0] = a[21369] | 0;
 a[o + 3 >> 0] = a[21370] | 0;
 a[o + 4 >> 0] = a[21371] | 0;
 a[o + 5 >> 0] = a[21372] | 0;
 Bh(o + 1 | 0, 21373, 0, c[e + 4 >> 2] | 0);
 p = ch() | 0;
 c[k >> 2] = g;
 o = q + (Vm(q, 12, p, o, k) | 0) | 0;
 p = Ch(q, o, e) | 0;
 g = Af(e) | 0;
 c[n >> 2] = g;
 Qh(q, p, o, j, m, b, n);
 mo(g) | 0;
 c[l >> 2] = c[d >> 2];
 g = c[m >> 2] | 0;
 b = c[b >> 2] | 0;
 c[k >> 2] = c[l >> 2];
 b = Xm(k, j, g, b, e, f) | 0;
 i = h;
 return b | 0;
}

function Ph(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 h = i;
 i = i + 128 | 0;
 k = h;
 o = h + 116 | 0;
 q = h + 104 | 0;
 j = h + 20 | 0;
 m = h + 16 | 0;
 b = h + 12 | 0;
 n = h + 8 | 0;
 l = h + 4 | 0;
 a[o >> 0] = a[21367] | 0;
 a[o + 1 >> 0] = a[21368] | 0;
 a[o + 2 >> 0] = a[21369] | 0;
 a[o + 3 >> 0] = a[21370] | 0;
 a[o + 4 >> 0] = a[21371] | 0;
 a[o + 5 >> 0] = a[21372] | 0;
 Bh(o + 1 | 0, 21373, 1, c[e + 4 >> 2] | 0);
 p = ch() | 0;
 c[k >> 2] = g;
 o = q + (Vm(q, 12, p, o, k) | 0) | 0;
 p = Ch(q, o, e) | 0;
 g = Af(e) | 0;
 c[n >> 2] = g;
 Qh(q, p, o, j, m, b, n);
 mo(g) | 0;
 c[l >> 2] = c[d >> 2];
 g = c[m >> 2] | 0;
 b = c[b >> 2] | 0;
 c[k >> 2] = c[l >> 2];
 b = Xm(k, j, g, b, e, f) | 0;
 i = h;
 return b | 0;
}

function Xh(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 h = i;
 i = i + 192 | 0;
 m = h;
 b = h + 180 | 0;
 j = h + 160 | 0;
 k = h + 12 | 0;
 o = h + 8 | 0;
 n = h + 4 | 0;
 a[b >> 0] = a[21381] | 0;
 a[b + 1 >> 0] = a[21382] | 0;
 a[b + 2 >> 0] = a[21383] | 0;
 a[b + 3 >> 0] = a[21384] | 0;
 a[b + 4 >> 0] = a[21385] | 0;
 a[b + 5 >> 0] = a[21386] | 0;
 l = ch() | 0;
 c[m >> 2] = g;
 b = Vm(j, 20, l, b, m) | 0;
 l = j + b | 0;
 g = Ch(j, l, e) | 0;
 p = Af(e) | 0;
 c[o >> 2] = p;
 o = Ok(o, 9328) | 0;
 mo(p) | 0;
 Ab[c[(c[o >> 2] | 0) + 48 >> 2] & 7](o, j, l, k) | 0;
 b = k + (b << 2) | 0;
 c[n >> 2] = c[d >> 2];
 c[m >> 2] = c[n >> 2];
 b = Xm(m, k, (g | 0) == (l | 0) ? b : k + (g - j << 2) | 0, b, e, f) | 0;
 i = h;
 return b | 0;
}

function Fh(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 h = i;
 i = i + 64 | 0;
 k = h;
 o = h + 56 | 0;
 q = h + 44 | 0;
 j = h + 20 | 0;
 m = h + 16 | 0;
 b = h + 12 | 0;
 n = h + 8 | 0;
 l = h + 4 | 0;
 a[o >> 0] = a[21367] | 0;
 a[o + 1 >> 0] = a[21368] | 0;
 a[o + 2 >> 0] = a[21369] | 0;
 a[o + 3 >> 0] = a[21370] | 0;
 a[o + 4 >> 0] = a[21371] | 0;
 a[o + 5 >> 0] = a[21372] | 0;
 Bh(o + 1 | 0, 21373, 0, c[e + 4 >> 2] | 0);
 p = ch() | 0;
 c[k >> 2] = g;
 o = q + (Vm(q, 12, p, o, k) | 0) | 0;
 p = Ch(q, o, e) | 0;
 g = Af(e) | 0;
 c[n >> 2] = g;
 Dh(q, p, o, j, m, b, n);
 mo(g) | 0;
 c[l >> 2] = c[d >> 2];
 g = c[m >> 2] | 0;
 b = c[b >> 2] | 0;
 c[k >> 2] = c[l >> 2];
 b = Sb(k, j, g, b, e, f) | 0;
 i = h;
 return b | 0;
}

function Ah(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 h = i;
 i = i + 64 | 0;
 k = h;
 o = h + 56 | 0;
 q = h + 44 | 0;
 j = h + 20 | 0;
 m = h + 16 | 0;
 b = h + 12 | 0;
 n = h + 8 | 0;
 l = h + 4 | 0;
 a[o >> 0] = a[21367] | 0;
 a[o + 1 >> 0] = a[21368] | 0;
 a[o + 2 >> 0] = a[21369] | 0;
 a[o + 3 >> 0] = a[21370] | 0;
 a[o + 4 >> 0] = a[21371] | 0;
 a[o + 5 >> 0] = a[21372] | 0;
 Bh(o + 1 | 0, 21373, 1, c[e + 4 >> 2] | 0);
 p = ch() | 0;
 c[k >> 2] = g;
 o = q + (Vm(q, 12, p, o, k) | 0) | 0;
 p = Ch(q, o, e) | 0;
 g = Af(e) | 0;
 c[n >> 2] = g;
 Dh(q, p, o, j, m, b, n);
 mo(g) | 0;
 c[l >> 2] = c[d >> 2];
 g = c[m >> 2] | 0;
 b = c[b >> 2] | 0;
 c[k >> 2] = c[l >> 2];
 b = Sb(k, j, g, b, e, f) | 0;
 i = h;
 return b | 0;
}

function Id(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 n = i;
 i = i + 128 | 0;
 g = n + 112 | 0;
 m = n;
 h = m;
 j = 2624;
 k = h + 112 | 0;
 do {
  c[h >> 2] = c[j >> 2];
  h = h + 4 | 0;
  j = j + 4 | 0;
 } while ((h | 0) < (k | 0));
 if ((d + -1 | 0) >>> 0 > 2147483646) if (!d) {
  d = 1;
  l = 4;
 } else {
  c[(Rc() | 0) >> 2] = 75;
  d = -1;
 } else {
  g = b;
  l = 4;
 }
 if ((l | 0) == 4) {
  l = -2 - g | 0;
  l = d >>> 0 > l >>> 0 ? l : d;
  c[m + 48 >> 2] = l;
  b = m + 20 | 0;
  c[b >> 2] = g;
  c[m + 44 >> 2] = g;
  d = g + l | 0;
  g = m + 16 | 0;
  c[g >> 2] = d;
  c[m + 28 >> 2] = d;
  d = Gd(m, e, f) | 0;
  if (l) {
   e = c[b >> 2] | 0;
   a[e + (((e | 0) == (c[g >> 2] | 0)) << 31 >> 31) >> 0] = 0;
  }
 }
 i = n;
 return d | 0;
}

function Vc(b) {
 b = b | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 f = b + 104 | 0;
 i = c[f >> 2] | 0;
 if ((i | 0) != 0 ? (c[b + 108 >> 2] | 0) >= (i | 0) : 0) j = 4; else {
  e = Vd(b) | 0;
  if ((e | 0) >= 0) {
   h = c[f >> 2] | 0;
   f = b + 8 | 0;
   if (h) {
    g = c[f >> 2] | 0;
    i = c[b + 4 >> 2] | 0;
    f = g;
    h = h - (c[b + 108 >> 2] | 0) + -1 | 0;
    if ((f - i | 0) > (h | 0)) c[b + 100 >> 2] = i + h; else j = 9;
   } else {
    g = c[f >> 2] | 0;
    f = g;
    j = 9;
   }
   if ((j | 0) == 9) c[b + 100 >> 2] = f;
   f = c[b + 4 >> 2] | 0;
   if (g) {
    b = b + 108 | 0;
    c[b >> 2] = g + 1 - f + (c[b >> 2] | 0);
   }
   f = f + -1 | 0;
   if ((d[f >> 0] | 0 | 0) != (e | 0)) a[f >> 0] = e;
  } else j = 4;
 }
 if ((j | 0) == 4) {
  c[b + 100 >> 2] = 0;
  e = -1;
 }
 return e | 0;
}

function Lh(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 h = i;
 i = i + 80 | 0;
 m = h;
 b = h + 72 | 0;
 j = h + 52 | 0;
 k = h + 12 | 0;
 o = h + 8 | 0;
 n = h + 4 | 0;
 a[b >> 0] = a[21381] | 0;
 a[b + 1 >> 0] = a[21382] | 0;
 a[b + 2 >> 0] = a[21383] | 0;
 a[b + 3 >> 0] = a[21384] | 0;
 a[b + 4 >> 0] = a[21385] | 0;
 a[b + 5 >> 0] = a[21386] | 0;
 l = ch() | 0;
 c[m >> 2] = g;
 b = Vm(j, 20, l, b, m) | 0;
 l = j + b | 0;
 g = Ch(j, l, e) | 0;
 p = Af(e) | 0;
 c[o >> 2] = p;
 o = Ok(o, 9336) | 0;
 mo(p) | 0;
 Ab[c[(c[o >> 2] | 0) + 32 >> 2] & 7](o, j, l, k) | 0;
 b = k + b | 0;
 c[n >> 2] = c[d >> 2];
 c[m >> 2] = c[n >> 2];
 b = Sb(m, k, (g | 0) == (l | 0) ? b : k + (g - j) | 0, b, e, f) | 0;
 i = h;
 return b | 0;
}

function qi(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0;
 n = i;
 i = i + 16 | 0;
 k = n + 4 | 0;
 l = n;
 m = b + 8 | 0;
 m = wb[c[(c[m >> 2] | 0) + 8 >> 2] & 63](m) | 0;
 b = a[m >> 0] | 0;
 if (!(b & 1)) j = (b & 255) >>> 1; else j = c[m + 4 >> 2] | 0;
 b = a[m + 12 >> 0] | 0;
 if (!(b & 1)) b = (b & 255) >>> 1; else b = c[m + 16 >> 2] | 0;
 do if ((j | 0) != (0 - b | 0)) {
  c[l >> 2] = c[f >> 2];
  c[k >> 2] = c[l >> 2];
  b = Am(e, k, m, m + 24 | 0, h, g, 0) | 0;
  j = c[d >> 2] | 0;
  if ((b | 0) == (m | 0) & (j | 0) == 12) {
   c[d >> 2] = 0;
   break;
  }
  if ((j | 0) < 12 & (b - m | 0) == 12) c[d >> 2] = j + 12;
 } else c[g >> 2] = c[g >> 2] | 4; while (0);
 i = n;
 return;
}

function Pi(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0;
 n = i;
 i = i + 16 | 0;
 k = n + 4 | 0;
 l = n;
 m = b + 8 | 0;
 m = wb[c[(c[m >> 2] | 0) + 8 >> 2] & 63](m) | 0;
 b = a[m >> 0] | 0;
 if (!(b & 1)) j = (b & 255) >>> 1; else j = c[m + 4 >> 2] | 0;
 b = a[m + 12 >> 0] | 0;
 if (!(b & 1)) b = (b & 255) >>> 1; else b = c[m + 16 >> 2] | 0;
 do if ((j | 0) != (0 - b | 0)) {
  c[l >> 2] = c[f >> 2];
  c[k >> 2] = c[l >> 2];
  b = Lm(e, k, m, m + 24 | 0, h, g, 0) | 0;
  j = c[d >> 2] | 0;
  if ((b | 0) == (m | 0) & (j | 0) == 12) {
   c[d >> 2] = 0;
   break;
  }
  if ((j | 0) < 12 & (b - m | 0) == 12) c[d >> 2] = j + 12;
 } else c[g >> 2] = c[g >> 2] | 4; while (0);
 i = n;
 return;
}

function vk(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0;
 k = i;
 i = i + 16 | 0;
 j = k;
 c[j >> 2] = 0;
 c[j + 4 >> 2] = 0;
 c[j + 8 >> 2] = 0;
 l = a[h >> 0] | 0;
 m = (l & 1) == 0;
 d = m ? h + 1 | 0 : c[h + 8 >> 2] | 0;
 l = m ? (l & 255) >>> 1 : c[h + 4 >> 2] | 0;
 h = d + l | 0;
 if ((l | 0) > 0) do {
  hf(j, a[d >> 0] | 0);
  d = d + 1 | 0;
 } while (d >>> 0 < h >>> 0);
 d = Yc((e | 0) == -1 ? -1 : e << 1, f, g, (a[j >> 0] & 1) == 0 ? j + 1 | 0 : c[j + 8 >> 2] | 0) | 0;
 c[b >> 2] = 0;
 c[b + 4 >> 2] = 0;
 c[b + 8 >> 2] = 0;
 m = $d(d) | 0;
 h = d + m | 0;
 if ((m | 0) > 0) do {
  hf(b, a[d >> 0] | 0);
  d = d + 1 | 0;
 } while (d >>> 0 < h >>> 0);
 bf(j);
 i = k;
 return;
}

function sf(b, d, e, f, g, h, i, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0;
 if ((1073741806 - d | 0) >>> 0 < e >>> 0) Ic(b);
 if (!(a[b >> 0] & 1)) m = b + 4 | 0; else m = c[b + 8 >> 2] | 0;
 if (d >>> 0 < 536870887) {
  k = e + d | 0;
  l = d << 1;
  k = k >>> 0 < l >>> 0 ? l : k;
  k = k >>> 0 < 2 ? 2 : k + 4 & -4;
 } else k = 1073741807;
 l = Wb(k << 2) | 0;
 if (g) be(l, m, g) | 0;
 if (i) be(l + (g << 2) | 0, j, i) | 0;
 e = f - h | 0;
 if ((e | 0) != (g | 0)) be(l + (i + g << 2) | 0, m + (h + g << 2) | 0, e - g | 0) | 0;
 if ((d | 0) != 1) Xb(m);
 c[b + 8 >> 2] = l;
 c[b >> 2] = k | 1;
 d = e + i | 0;
 c[b + 4 >> 2] = d;
 c[l + (d << 2) >> 2] = 0;
 return;
}

function Th(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 h = i;
 i = i + 240 | 0;
 k = h + 8 | 0;
 o = h;
 p = h + 204 | 0;
 j = h + 32 | 0;
 m = h + 28 | 0;
 a = h + 24 | 0;
 n = h + 20 | 0;
 l = h + 16 | 0;
 q = o;
 c[q >> 2] = 37;
 c[q + 4 >> 2] = 0;
 Bh(o + 1 | 0, 21375, 0, c[d + 4 >> 2] | 0);
 q = ch() | 0;
 r = k;
 c[r >> 2] = f;
 c[r + 4 >> 2] = g;
 f = p + (Vm(p, 23, q, o, k) | 0) | 0;
 o = Ch(p, f, d) | 0;
 g = Af(d) | 0;
 c[n >> 2] = g;
 Qh(p, o, f, j, m, a, n);
 mo(g) | 0;
 c[l >> 2] = c[b >> 2];
 b = c[m >> 2] | 0;
 a = c[a >> 2] | 0;
 c[k >> 2] = c[l >> 2];
 a = Xm(k, j, b, a, d, e) | 0;
 i = h;
 return a | 0;
}

function Rh(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 h = i;
 i = i + 224 | 0;
 k = h + 8 | 0;
 o = h;
 p = h + 196 | 0;
 j = h + 32 | 0;
 m = h + 28 | 0;
 a = h + 24 | 0;
 n = h + 20 | 0;
 l = h + 16 | 0;
 q = o;
 c[q >> 2] = 37;
 c[q + 4 >> 2] = 0;
 Bh(o + 1 | 0, 21375, 1, c[d + 4 >> 2] | 0);
 q = ch() | 0;
 r = k;
 c[r >> 2] = f;
 c[r + 4 >> 2] = g;
 f = p + (Vm(p, 22, q, o, k) | 0) | 0;
 o = Ch(p, f, d) | 0;
 g = Af(d) | 0;
 c[n >> 2] = g;
 Qh(p, o, f, j, m, a, n);
 mo(g) | 0;
 c[l >> 2] = c[b >> 2];
 b = c[m >> 2] | 0;
 a = c[a >> 2] | 0;
 c[k >> 2] = c[l >> 2];
 a = Xm(k, j, b, a, d, e) | 0;
 i = h;
 return a | 0;
}

function Gh(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 h = i;
 i = i + 112 | 0;
 k = h + 8 | 0;
 o = h;
 p = h + 75 | 0;
 j = h + 32 | 0;
 m = h + 28 | 0;
 a = h + 24 | 0;
 n = h + 20 | 0;
 l = h + 16 | 0;
 q = o;
 c[q >> 2] = 37;
 c[q + 4 >> 2] = 0;
 Bh(o + 1 | 0, 21375, 0, c[d + 4 >> 2] | 0);
 q = ch() | 0;
 r = k;
 c[r >> 2] = f;
 c[r + 4 >> 2] = g;
 f = p + (Vm(p, 23, q, o, k) | 0) | 0;
 o = Ch(p, f, d) | 0;
 g = Af(d) | 0;
 c[n >> 2] = g;
 Dh(p, o, f, j, m, a, n);
 mo(g) | 0;
 c[l >> 2] = c[b >> 2];
 b = c[m >> 2] | 0;
 a = c[a >> 2] | 0;
 c[k >> 2] = c[l >> 2];
 a = Sb(k, j, b, a, d, e) | 0;
 i = h;
 return a | 0;
}

function Eh(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 h = i;
 i = i + 96 | 0;
 k = h + 8 | 0;
 o = h;
 p = h + 74 | 0;
 j = h + 32 | 0;
 m = h + 28 | 0;
 a = h + 24 | 0;
 n = h + 20 | 0;
 l = h + 16 | 0;
 q = o;
 c[q >> 2] = 37;
 c[q + 4 >> 2] = 0;
 Bh(o + 1 | 0, 21375, 1, c[d + 4 >> 2] | 0);
 q = ch() | 0;
 r = k;
 c[r >> 2] = f;
 c[r + 4 >> 2] = g;
 f = p + (Vm(p, 22, q, o, k) | 0) | 0;
 o = Ch(p, f, d) | 0;
 g = Af(d) | 0;
 c[n >> 2] = g;
 Dh(p, o, f, j, m, a, n);
 mo(g) | 0;
 c[l >> 2] = c[b >> 2];
 b = c[m >> 2] | 0;
 a = c[a >> 2] | 0;
 c[k >> 2] = c[l >> 2];
 a = Sb(k, j, b, a, d, e) | 0;
 i = h;
 return a | 0;
}

function jf(b, d, e, f, g, h, i, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0;
 if ((-18 - d | 0) >>> 0 < e >>> 0) Ic(b);
 if (!(a[b >> 0] & 1)) m = b + 1 | 0; else m = c[b + 8 >> 2] | 0;
 if (d >>> 0 < 2147483623) {
  k = e + d | 0;
  l = d << 1;
  k = k >>> 0 < l >>> 0 ? l : k;
  k = k >>> 0 < 11 ? 11 : k + 16 & -16;
 } else k = -17;
 l = Wb(k) | 0;
 if (g) uo(l | 0, m | 0, g | 0) | 0;
 if (i) uo(l + g | 0, j | 0, i | 0) | 0;
 e = f - h | 0;
 if ((e | 0) != (g | 0)) uo(l + (i + g) | 0, m + (h + g) | 0, e - g | 0) | 0;
 if ((d | 0) != 10) Xb(m);
 c[b + 8 >> 2] = l;
 c[b >> 2] = k | 1;
 d = e + i | 0;
 c[b + 4 >> 2] = d;
 a[l + d >> 0] = 0;
 return;
}

function rd(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 do if (b) {
  if (d >>> 0 < 128) {
   a[b >> 0] = d;
   b = 1;
   break;
  }
  if (d >>> 0 < 2048) {
   a[b >> 0] = d >>> 6 | 192;
   a[b + 1 >> 0] = d & 63 | 128;
   b = 2;
   break;
  }
  if (d >>> 0 < 55296 | (d & -8192 | 0) == 57344) {
   a[b >> 0] = d >>> 12 | 224;
   a[b + 1 >> 0] = d >>> 6 & 63 | 128;
   a[b + 2 >> 0] = d & 63 | 128;
   b = 3;
   break;
  }
  if ((d + -65536 | 0) >>> 0 < 1048576) {
   a[b >> 0] = d >>> 18 | 240;
   a[b + 1 >> 0] = d >>> 12 & 63 | 128;
   a[b + 2 >> 0] = d >>> 6 & 63 | 128;
   a[b + 3 >> 0] = d & 63 | 128;
   b = 4;
   break;
  } else {
   c[(Rc() | 0) >> 2] = 84;
   b = -1;
   break;
  }
 } else b = 1; while (0);
 return b | 0;
}

function Bh(b, c, d, e) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 if (e & 2048) {
  a[b >> 0] = 43;
  b = b + 1 | 0;
 }
 if (e & 512) {
  a[b >> 0] = 35;
  b = b + 1 | 0;
 }
 f = a[c >> 0] | 0;
 if (f << 24 >> 24) {
  g = c;
  while (1) {
   g = g + 1 | 0;
   c = b + 1 | 0;
   a[b >> 0] = f;
   f = a[g >> 0] | 0;
   if (!(f << 24 >> 24)) {
    b = c;
    break;
   } else b = c;
  }
 }
 a : do switch (e & 74 | 0) {
 case 64:
  {
   a[b >> 0] = 111;
   break;
  }
 case 8:
  if (!(e & 16384)) {
   a[b >> 0] = 120;
   break a;
  } else {
   a[b >> 0] = 88;
   break a;
  }
 default:
  if (d) {
   a[b >> 0] = 100;
   break a;
  } else {
   a[b >> 0] = 117;
   break a;
  }
 } while (0);
 return;
}

function mm(b) {
 b = b | 0;
 if ((a[1784] | 0) == 0 ? (Ba(1784) | 0) != 0 : 0) {
  if ((a[1792] | 0) == 0 ? (Ba(1792) | 0) != 0 : 0) {
   b = 10328;
   do {
    c[b >> 2] = 0;
    c[b + 4 >> 2] = 0;
    c[b + 8 >> 2] = 0;
    b = b + 12 | 0;
   } while ((b | 0) != 10496);
   cb(102, 0, n | 0) | 0;
   Ia(1792);
  }
  of(10328, 10496) | 0;
  of(10340, 10524) | 0;
  of(10352, 10552) | 0;
  of(10364, 10584) | 0;
  of(10376, 10624) | 0;
  of(10388, 10660) | 0;
  of(10400, 10688) | 0;
  of(10412, 10724) | 0;
  of(10424, 10740) | 0;
  of(10436, 10756) | 0;
  of(10448, 10772) | 0;
  of(10460, 10788) | 0;
  of(10472, 10804) | 0;
  of(10484, 10820) | 0;
  c[2709] = 10328;
  Ia(1784);
 }
 return c[2709] | 0;
}

function lm(b) {
 b = b | 0;
 if ((a[1768] | 0) == 0 ? (Ba(1768) | 0) != 0 : 0) {
  if ((a[1776] | 0) == 0 ? (Ba(1776) | 0) != 0 : 0) {
   b = 10156;
   do {
    c[b >> 2] = 0;
    c[b + 4 >> 2] = 0;
    c[b + 8 >> 2] = 0;
    b = b + 12 | 0;
   } while ((b | 0) != 10324);
   cb(101, 0, n | 0) | 0;
   Ia(1776);
  }
  cf(10156, 21478) | 0;
  cf(10168, 21485) | 0;
  cf(10180, 21492) | 0;
  cf(10192, 21500) | 0;
  cf(10204, 21510) | 0;
  cf(10216, 21519) | 0;
  cf(10228, 21526) | 0;
  cf(10240, 21535) | 0;
  cf(10252, 21539) | 0;
  cf(10264, 21543) | 0;
  cf(10276, 21547) | 0;
  cf(10288, 21551) | 0;
  cf(10300, 21555) | 0;
  cf(10312, 21559) | 0;
  c[2581] = 10156;
  Ia(1768);
 }
 return c[2581] | 0;
}

function Xi(b, d, e, f, g, h, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0;
 l = i;
 i = i + 112 | 0;
 k = l + 4 | 0;
 e = l;
 c[e >> 2] = k + 100;
 Yi(b + 8 | 0, k, e, g, h, j);
 g = c[e >> 2] | 0;
 e = c[d >> 2] | 0;
 if ((k | 0) != (g | 0)) do {
  j = a[k >> 0] | 0;
  do if (e) {
   f = e + 24 | 0;
   h = c[f >> 2] | 0;
   if ((h | 0) == (c[e + 28 >> 2] | 0)) {
    d = (Cb[c[(c[e >> 2] | 0) + 52 >> 2] & 15](e, j & 255) | 0) == -1;
    e = d ? 0 : e;
    break;
   } else {
    c[f >> 2] = h + 1;
    a[h >> 0] = j;
    break;
   }
  } else e = 0; while (0);
  k = k + 1 | 0;
 } while ((k | 0) != (g | 0));
 i = l;
 return e | 0;
}

function tc(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 a[d + 53 >> 0] = 1;
 do if ((c[d + 4 >> 2] | 0) == (f | 0)) {
  a[d + 52 >> 0] = 1;
  f = d + 16 | 0;
  b = c[f >> 2] | 0;
  if (!b) {
   c[f >> 2] = e;
   c[d + 24 >> 2] = g;
   c[d + 36 >> 2] = 1;
   if (!((g | 0) == 1 ? (c[d + 48 >> 2] | 0) == 1 : 0)) break;
   a[d + 54 >> 0] = 1;
   break;
  }
  if ((b | 0) != (e | 0)) {
   g = d + 36 | 0;
   c[g >> 2] = (c[g >> 2] | 0) + 1;
   a[d + 54 >> 0] = 1;
   break;
  }
  b = d + 24 | 0;
  f = c[b >> 2] | 0;
  if ((f | 0) == 2) {
   c[b >> 2] = g;
   f = g;
  }
  if ((f | 0) == 1 ? (c[d + 48 >> 2] | 0) == 1 : 0) a[d + 54 >> 0] = 1;
 } while (0);
 return;
}

function ho(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0;
 l = i;
 i = i + 16 | 0;
 k = l;
 do if ((b | 0) != (d | 0)) {
  if ((a[b >> 0] | 0) == 45) {
   c[e >> 2] = 4;
   b = 0;
   break;
  }
  h = Rc() | 0;
  j = c[h >> 2] | 0;
  c[h >> 2] = 0;
  b = Jc(b, k, f, ch() | 0) | 0;
  f = D;
  g = c[h >> 2] | 0;
  if (!g) c[h >> 2] = j;
  if ((c[k >> 2] | 0) != (d | 0)) {
   c[e >> 2] = 4;
   b = 0;
   break;
  }
  if (f >>> 0 > 0 | (f | 0) == 0 & b >>> 0 > 65535 | (g | 0) == 34) {
   c[e >> 2] = 4;
   b = -1;
   break;
  } else {
   b = b & 65535;
   break;
  }
 } else {
  c[e >> 2] = 4;
  b = 0;
 } while (0);
 i = l;
 return b | 0;
}

function Re(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0;
 l = i;
 i = i + 16 | 0;
 j = l + 8 | 0;
 h = l;
 d = a + 36 | 0;
 e = a + 40 | 0;
 f = j + 8 | 0;
 g = j;
 b = a + 32 | 0;
 a : while (1) {
  a = c[d >> 2] | 0;
  a = Db[c[(c[a >> 2] | 0) + 20 >> 2] & 31](a, c[e >> 2] | 0, j, f, h) | 0;
  m = (c[h >> 2] | 0) - g | 0;
  if ((Ad(j, 1, m, c[b >> 2] | 0) | 0) != (m | 0)) {
   a = -1;
   break;
  }
  switch (a | 0) {
  case 1:
   break;
  case 2:
   {
    a = -1;
    break a;
   }
  default:
   {
    k = 4;
    break a;
   }
  }
 }
 if ((k | 0) == 4) a = ((xd(c[b >> 2] | 0) | 0) != 0) << 31 >> 31;
 i = l;
 return a | 0;
}

function Ge(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0;
 l = i;
 i = i + 16 | 0;
 j = l + 8 | 0;
 h = l;
 d = a + 36 | 0;
 e = a + 40 | 0;
 f = j + 8 | 0;
 g = j;
 b = a + 32 | 0;
 a : while (1) {
  a = c[d >> 2] | 0;
  a = Db[c[(c[a >> 2] | 0) + 20 >> 2] & 31](a, c[e >> 2] | 0, j, f, h) | 0;
  m = (c[h >> 2] | 0) - g | 0;
  if ((Ad(j, 1, m, c[b >> 2] | 0) | 0) != (m | 0)) {
   a = -1;
   break;
  }
  switch (a | 0) {
  case 1:
   break;
  case 2:
   {
    a = -1;
    break a;
   }
  default:
   {
    k = 4;
    break a;
   }
  }
 }
 if ((k | 0) == 4) a = ((xd(c[b >> 2] | 0) | 0) != 0) << 31 >> 31;
 i = l;
 return a | 0;
}

function go(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0;
 l = i;
 i = i + 16 | 0;
 k = l;
 do if ((b | 0) != (d | 0)) {
  if ((a[b >> 0] | 0) == 45) {
   c[e >> 2] = 4;
   b = 0;
   break;
  }
  h = Rc() | 0;
  j = c[h >> 2] | 0;
  c[h >> 2] = 0;
  b = Jc(b, k, f, ch() | 0) | 0;
  f = D;
  g = c[h >> 2] | 0;
  if (!g) c[h >> 2] = j;
  if ((c[k >> 2] | 0) != (d | 0)) {
   c[e >> 2] = 4;
   b = 0;
   break;
  }
  if (f >>> 0 > 0 | (f | 0) == 0 & b >>> 0 > 4294967295 | (g | 0) == 34) {
   c[e >> 2] = 4;
   b = -1;
   break;
  } else break;
 } else {
  c[e >> 2] = 4;
  b = 0;
 } while (0);
 i = l;
 return b | 0;
}

function fo(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0;
 l = i;
 i = i + 16 | 0;
 k = l;
 do if ((b | 0) != (d | 0)) {
  if ((a[b >> 0] | 0) == 45) {
   c[e >> 2] = 4;
   b = 0;
   break;
  }
  h = Rc() | 0;
  j = c[h >> 2] | 0;
  c[h >> 2] = 0;
  b = Jc(b, k, f, ch() | 0) | 0;
  f = D;
  g = c[h >> 2] | 0;
  if (!g) c[h >> 2] = j;
  if ((c[k >> 2] | 0) != (d | 0)) {
   c[e >> 2] = 4;
   b = 0;
   break;
  }
  if (f >>> 0 > 0 | (f | 0) == 0 & b >>> 0 > 4294967295 | (g | 0) == 34) {
   c[e >> 2] = 4;
   b = -1;
   break;
  } else break;
 } else {
  c[e >> 2] = 4;
  b = 0;
 } while (0);
 i = l;
 return b | 0;
}

function $i(a, b, d, e, f, g, h) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0;
 j = i;
 i = i + 416 | 0;
 e = j + 8 | 0;
 d = j;
 c[d >> 2] = e + 400;
 aj(a + 8 | 0, e, d, f, g, h);
 a = c[d >> 2] | 0;
 d = c[b >> 2] | 0;
 if ((e | 0) != (a | 0)) {
  f = e;
  do {
   e = c[f >> 2] | 0;
   if (!d) d = 0; else {
    g = d + 24 | 0;
    h = c[g >> 2] | 0;
    if ((h | 0) == (c[d + 28 >> 2] | 0)) e = Cb[c[(c[d >> 2] | 0) + 52 >> 2] & 15](d, e) | 0; else {
     c[g >> 2] = h + 4;
     c[h >> 2] = e;
    }
    d = (e | 0) == -1 ? 0 : d;
   }
   f = f + 4 | 0;
  } while ((f | 0) != (a | 0));
 }
 i = j;
 return d | 0;
}

function io(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0;
 k = i;
 i = i + 16 | 0;
 j = k;
 do if ((a | 0) != (b | 0)) {
  g = Rc() | 0;
  h = c[g >> 2] | 0;
  c[g >> 2] = 0;
  a = Kc(a, j, e, ch() | 0) | 0;
  e = D;
  f = c[g >> 2] | 0;
  if (!f) c[g >> 2] = h;
  if ((c[j >> 2] | 0) != (b | 0)) {
   c[d >> 2] = 4;
   e = 0;
   a = 0;
   break;
  }
  if ((f | 0) == 34) {
   c[d >> 2] = 4;
   j = (e | 0) > 0 | (e | 0) == 0 & a >>> 0 > 0;
   D = j ? 2147483647 : -2147483648;
   i = k;
   return (j ? -1 : 0) | 0;
  }
 } else {
  c[d >> 2] = 4;
  e = 0;
  a = 0;
 } while (0);
 D = e;
 i = k;
 return a | 0;
}

function yc(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, i = 0;
 do if ((b | 0) == (c[d + 8 >> 2] | 0)) {
  if ((c[d + 4 >> 2] | 0) == (e | 0) ? (i = d + 28 | 0, (c[i >> 2] | 0) != 1) : 0) c[i >> 2] = f;
 } else if ((b | 0) == (c[d >> 2] | 0)) {
  if ((c[d + 16 >> 2] | 0) != (e | 0) ? (h = d + 20 | 0, (c[h >> 2] | 0) != (e | 0)) : 0) {
   c[d + 32 >> 2] = f;
   c[h >> 2] = e;
   g = d + 40 | 0;
   c[g >> 2] = (c[g >> 2] | 0) + 1;
   if ((c[d + 36 >> 2] | 0) == 1 ? (c[d + 24 >> 2] | 0) == 2 : 0) a[d + 54 >> 0] = 1;
   c[d + 44 >> 2] = 4;
   break;
  }
  if ((f | 0) == 1) c[d + 32 >> 2] = 1;
 } while (0);
 return;
}

function eo(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0;
 k = i;
 i = i + 16 | 0;
 j = k;
 do if ((b | 0) != (d | 0)) {
  if ((a[b >> 0] | 0) == 45) {
   c[e >> 2] = 4;
   f = 0;
   b = 0;
   break;
  }
  g = Rc() | 0;
  h = c[g >> 2] | 0;
  c[g >> 2] = 0;
  b = Jc(b, j, f, ch() | 0) | 0;
  f = c[g >> 2] | 0;
  if (!f) c[g >> 2] = h;
  if ((c[j >> 2] | 0) != (d | 0)) {
   c[e >> 2] = 4;
   f = 0;
   b = 0;
   break;
  }
  if ((f | 0) == 34) {
   c[e >> 2] = 4;
   f = -1;
   b = -1;
  } else f = D;
 } else {
  c[e >> 2] = 4;
  f = 0;
  b = 0;
 } while (0);
 D = f;
 i = k;
 return b | 0;
}

function tf(b, d, e, f, g, h, i) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 var j = 0, k = 0, l = 0;
 if ((1073741807 - d | 0) >>> 0 < e >>> 0) Ic(b);
 if (!(a[b >> 0] & 1)) l = b + 4 | 0; else l = c[b + 8 >> 2] | 0;
 if (d >>> 0 < 536870887) {
  j = e + d | 0;
  k = d << 1;
  j = j >>> 0 < k >>> 0 ? k : j;
  j = j >>> 0 < 2 ? 2 : j + 4 & -4;
 } else j = 1073741807;
 k = Wb(j << 2) | 0;
 if (g) be(k, l, g) | 0;
 e = f - h | 0;
 if ((e | 0) != (g | 0)) be(k + (i + g << 2) | 0, l + (h + g << 2) | 0, e - g | 0) | 0;
 if ((d | 0) != 1) Xb(l);
 c[b + 8 >> 2] = k;
 c[b >> 2] = j | 1;
 return;
}

function wg(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0;
 k = i;
 i = i + 16 | 0;
 j = k;
 sg(j, b);
 a : do if (a[j >> 0] | 0) {
  f = c[b + ((c[(c[b >> 2] | 0) + -12 >> 2] | 0) + 24) >> 2] | 0;
  g = f;
  do if (f) {
   h = g + 24 | 0;
   e = c[h >> 2] | 0;
   if ((e | 0) == (c[g + 28 >> 2] | 0)) if ((Cb[c[(c[f >> 2] | 0) + 52 >> 2] & 15](g, d & 255) | 0) == -1) break; else break a; else {
    c[h >> 2] = e + 1;
    a[e >> 0] = d;
    break a;
   }
  } while (0);
  d = b + ((c[(c[b >> 2] | 0) + -12 >> 2] | 0) + 16) | 0;
  c[d >> 2] = c[d >> 2] | 1;
 } while (0);
 tg(j);
 i = k;
 return b | 0;
}

function yd(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0;
 if ((c[d + 76 >> 2] | 0) >= 0 ? (Kd(d) | 0) != 0 : 0) {
  if ((a[d + 75 >> 0] | 0) != (b | 0) ? (f = d + 20 | 0, g = c[f >> 2] | 0, g >>> 0 < (c[d + 16 >> 2] | 0) >>> 0) : 0) {
   c[f >> 2] = g + 1;
   a[g >> 0] = b;
   e = b & 255;
  } else e = Md(d, b) | 0;
  Ld(d);
 } else i = 3;
 do if ((i | 0) == 3) {
  if ((a[d + 75 >> 0] | 0) != (b | 0) ? (h = d + 20 | 0, e = c[h >> 2] | 0, e >>> 0 < (c[d + 16 >> 2] | 0) >>> 0) : 0) {
   c[h >> 2] = e + 1;
   a[e >> 0] = b;
   e = b & 255;
   break;
  }
  e = Md(d, b) | 0;
 } while (0);
 return e | 0;
}

function zl(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 j = i;
 i = i + 16 | 0;
 h = j;
 c[g >> 2] = e;
 e = cd(c[b + 8 >> 2] | 0) | 0;
 b = rd(h, 0, d) | 0;
 if (e) cd(e) | 0;
 switch (b | 0) {
 case 0:
 case -1:
  {
   h = 2;
   break;
  }
 default:
  {
   b = b + -1 | 0;
   if (b >>> 0 <= (f - (c[g >> 2] | 0) | 0) >>> 0) if (!b) h = 0; else while (1) {
    d = a[h >> 0] | 0;
    f = c[g >> 2] | 0;
    c[g >> 2] = f + 1;
    a[f >> 0] = d;
    b = b + -1 | 0;
    if (!b) {
     h = 0;
     break;
    } else h = h + 1 | 0;
   } else h = 1;
  }
 }
 i = j;
 return h | 0;
}

function kf(b, d, e, f, g, h, i) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 var j = 0, k = 0, l = 0;
 if ((-17 - d | 0) >>> 0 < e >>> 0) Ic(b);
 if (!(a[b >> 0] & 1)) l = b + 1 | 0; else l = c[b + 8 >> 2] | 0;
 if (d >>> 0 < 2147483623) {
  j = e + d | 0;
  k = d << 1;
  j = j >>> 0 < k >>> 0 ? k : j;
  j = j >>> 0 < 11 ? 11 : j + 16 & -16;
 } else j = -17;
 k = Wb(j) | 0;
 if (g) uo(k | 0, l | 0, g | 0) | 0;
 e = f - h | 0;
 if ((e | 0) != (g | 0)) uo(k + (i + g) | 0, l + (h + g) | 0, e - g | 0) | 0;
 if ((d | 0) != 10) Xb(l);
 c[b + 8 >> 2] = k;
 c[b >> 2] = j | 1;
 return;
}

function pe(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0;
 j = i;
 i = i + 256 | 0;
 h = j;
 do if ((d | 0) > (e | 0) & (f & 73728 | 0) == 0) {
  f = d - e | 0;
  ro(h | 0, b | 0, (f >>> 0 > 256 ? 256 : f) | 0) | 0;
  b = c[a >> 2] | 0;
  g = (b & 32 | 0) == 0;
  if (f >>> 0 > 255) {
   e = d - e | 0;
   do {
    if (g) {
     zd(h, 256, a) | 0;
     b = c[a >> 2] | 0;
    }
    f = f + -256 | 0;
    g = (b & 32 | 0) == 0;
   } while (f >>> 0 > 255);
   if (g) f = e & 255; else break;
  } else if (!g) break;
  zd(h, f, a) | 0;
 } while (0);
 i = j;
 return;
}

function Ai(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 j = i;
 i = i + 16 | 0;
 k = j + 12 | 0;
 l = j + 8 | 0;
 n = j + 4 | 0;
 m = j;
 q = b + 8 | 0;
 q = wb[c[(c[q >> 2] | 0) + 20 >> 2] & 63](q) | 0;
 c[n >> 2] = c[d >> 2];
 c[m >> 2] = c[e >> 2];
 o = a[q >> 0] | 0;
 p = (o & 1) == 0;
 e = q + 4 | 0;
 d = p ? e : c[q + 8 >> 2] | 0;
 e = d + ((p ? (o & 255) >>> 1 : c[e >> 2] | 0) << 2) | 0;
 c[l >> 2] = c[n >> 2];
 c[k >> 2] = c[m >> 2];
 b = vi(b, l, k, f, g, h, d, e) | 0;
 i = j;
 return b | 0;
}

function Cl(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0;
 k = e;
 j = a + 8 | 0;
 a : do if ((d | 0) == (e | 0) | (f | 0) == 0) a = 0; else {
  a = 0;
  i = 0;
  while (1) {
   h = cd(c[j >> 2] | 0) | 0;
   g = ld(d, k - d | 0, b) | 0;
   if (h) cd(h) | 0;
   switch (g | 0) {
   case -2:
   case -1:
    break a;
   case 0:
    {
     d = d + 1 | 0;
     g = 1;
     break;
    }
   default:
    d = d + g | 0;
   }
   a = g + a | 0;
   i = i + 1 | 0;
   if ((d | 0) == (e | 0) | i >>> 0 >= f >>> 0) break a;
  }
 } while (0);
 return a | 0;
}

function Wn(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0;
 k = i;
 i = i + 32 | 0;
 j = k;
 g = c[a + 8 >> 2] | 0;
 d = c[a + 4 >> 2] | 0;
 if (g - d >> 2 >>> 0 < b >>> 0) {
  e = c[a >> 2] | 0;
  h = d - e >> 2;
  f = h + b | 0;
  if (f >>> 0 > 1073741823) Ub(a);
  d = g - e | 0;
  if (d >> 2 >>> 0 < 536870911) {
   d = d >> 1;
   d = d >>> 0 < f >>> 0 ? f : d;
  } else d = 1073741823;
  Yn(j, d, h, a + 16 | 0);
  h = j + 8 | 0;
  g = c[h >> 2] | 0;
  ro(g | 0, 0, b << 2 | 0) | 0;
  c[h >> 2] = g + (b << 2);
  Zn(a, j);
  _n(j);
 } else Xn(a, b);
 i = k;
 return;
}

function mc(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 h = i;
 i = i + 64 | 0;
 g = h;
 if ((a | 0) != (b | 0)) if ((b | 0) != 0 ? (f = sc(b, 40, 56, 0) | 0, (f | 0) != 0) : 0) {
  b = g;
  e = b + 56 | 0;
  do {
   c[b >> 2] = 0;
   b = b + 4 | 0;
  } while ((b | 0) < (e | 0));
  c[g >> 2] = f;
  c[g + 8 >> 2] = a;
  c[g + 12 >> 2] = -1;
  c[g + 48 >> 2] = 1;
  Eb[c[(c[f >> 2] | 0) + 28 >> 2] & 7](f, g, c[d >> 2] | 0, 1);
  if ((c[g + 24 >> 2] | 0) == 1) {
   c[d >> 2] = c[g + 16 >> 2];
   b = 1;
  } else b = 0;
 } else b = 0; else b = 1;
 i = h;
 return b | 0;
}

function Md(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0;
 m = i;
 i = i + 16 | 0;
 l = m;
 k = e & 255;
 a[l >> 0] = k;
 g = b + 16 | 0;
 h = c[g >> 2] | 0;
 if (!h) if (!(Ud(b) | 0)) {
  h = c[g >> 2] | 0;
  j = 4;
 } else f = -1; else j = 4;
 do if ((j | 0) == 4) {
  g = b + 20 | 0;
  j = c[g >> 2] | 0;
  if (j >>> 0 < h >>> 0 ? (f = e & 255, (f | 0) != (a[b + 75 >> 0] | 0)) : 0) {
   c[g >> 2] = j + 1;
   a[j >> 0] = k;
   break;
  }
  if ((pb[c[b + 36 >> 2] & 31](b, l, 1) | 0) == 1) f = d[l >> 0] | 0; else f = -1;
 } while (0);
 i = m;
 return f | 0;
}

function ff(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 if (d) {
  f = a[b >> 0] | 0;
  if (!(f & 1)) g = 10; else {
   f = c[b >> 2] | 0;
   g = (f & -2) + -1 | 0;
   f = f & 255;
  }
  if (!(f & 1)) h = (f & 255) >>> 1; else h = c[b + 4 >> 2] | 0;
  if ((g - h | 0) >>> 0 < d >>> 0) {
   kf(b, g, d - g + h | 0, h, h, 0, 0);
   f = a[b >> 0] | 0;
  }
  if (!(f & 1)) g = b + 1 | 0; else g = c[b + 8 >> 2] | 0;
  ro(g + h | 0, e | 0, d | 0) | 0;
  f = h + d | 0;
  if (!(a[b >> 0] & 1)) a[b >> 0] = f << 1; else c[b + 4 >> 2] = f;
  a[g + f >> 0] = 0;
 }
 return b | 0;
}

function rf(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 e = a[b >> 0] | 0;
 f = (e & 1) != 0;
 if (f) {
  g = (c[b >> 2] & -2) + -1 | 0;
  h = c[b + 4 >> 2] | 0;
 } else {
  g = 1;
  h = (e & 255) >>> 1;
 }
 if ((h | 0) == (g | 0)) {
  tf(b, g, 1, g, g, 0, 0);
  if (!(a[b >> 0] & 1)) g = 7; else g = 8;
 } else if (f) g = 8; else g = 7;
 if ((g | 0) == 7) {
  a[b >> 0] = (h << 1) + 2;
  e = b + 4 | 0;
  f = h + 1 | 0;
 } else if ((g | 0) == 8) {
  e = c[b + 8 >> 2] | 0;
  f = h + 1 | 0;
  c[b + 4 >> 2] = f;
 }
 c[e + (h << 2) >> 2] = d;
 c[e + (f << 2) >> 2] = 0;
 return;
}

function bi(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 j = i;
 i = i + 16 | 0;
 k = j + 12 | 0;
 l = j + 8 | 0;
 n = j + 4 | 0;
 m = j;
 o = b + 8 | 0;
 o = wb[c[(c[o >> 2] | 0) + 20 >> 2] & 63](o) | 0;
 c[n >> 2] = c[d >> 2];
 c[m >> 2] = c[e >> 2];
 e = a[o >> 0] | 0;
 p = (e & 1) == 0;
 d = p ? o + 1 | 0 : c[o + 8 >> 2] | 0;
 e = d + (p ? (e & 255) >>> 1 : c[o + 4 >> 2] | 0) | 0;
 c[l >> 2] = c[n >> 2];
 c[k >> 2] = c[m >> 2];
 b = Yh(b, l, k, f, g, h, d, e) | 0;
 i = j;
 return b | 0;
}
function df(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 f = a[b >> 0] | 0;
 if (!(f & 1)) h = 10; else {
  f = c[b >> 2] | 0;
  h = (f & -2) + -1 | 0;
  f = f & 255;
 }
 g = (f & 1) == 0;
 do if (h >>> 0 >= e >>> 0) {
  if (g) f = b + 1 | 0; else f = c[b + 8 >> 2] | 0;
  wo(f | 0, d | 0, e | 0) | 0;
  a[f + e >> 0] = 0;
  if (!(a[b >> 0] & 1)) {
   a[b >> 0] = e << 1;
   break;
  } else {
   c[b + 4 >> 2] = e;
   break;
  }
 } else {
  if (g) f = (f & 255) >>> 1; else f = c[b + 4 >> 2] | 0;
  jf(b, h, e - h | 0, f, 0, f, e, d);
 } while (0);
 return b | 0;
}

function Ch(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0;
 a : do switch (c[e + 4 >> 2] & 176 | 0) {
 case 16:
  {
   e = a[b >> 0] | 0;
   switch (e << 24 >> 24) {
   case 43:
   case 45:
    {
     b = b + 1 | 0;
     break a;
    }
   default:
    {}
   }
   if ((d - b | 0) > 1 & e << 24 >> 24 == 48) {
    switch (a[b + 1 >> 0] | 0) {
    case 88:
    case 120:
     break;
    default:
     {
      f = 7;
      break a;
     }
    }
    b = b + 2 | 0;
   } else f = 7;
   break;
  }
 case 32:
  {
   b = d;
   break;
  }
 default:
  f = 7;
 } while (0);
 return b | 0;
}

function pf(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 f = a[b >> 0] | 0;
 if (!(f & 1)) h = 1; else {
  f = c[b >> 2] | 0;
  h = (f & -2) + -1 | 0;
  f = f & 255;
 }
 g = (f & 1) == 0;
 do if (h >>> 0 >= e >>> 0) {
  if (g) f = b + 4 | 0; else f = c[b + 8 >> 2] | 0;
  ce(f, d, e) | 0;
  c[f + (e << 2) >> 2] = 0;
  if (!(a[b >> 0] & 1)) {
   a[b >> 0] = e << 1;
   break;
  } else {
   c[b + 4 >> 2] = e;
   break;
  }
 } else {
  if (g) f = (f & 255) >>> 1; else f = c[b + 4 >> 2] | 0;
  sf(b, h, e - h | 0, f, 0, f, e, d);
 } while (0);
 return b | 0;
}

function hf(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 e = a[b >> 0] | 0;
 f = (e & 1) != 0;
 if (f) {
  g = (c[b >> 2] & -2) + -1 | 0;
  h = c[b + 4 >> 2] | 0;
 } else {
  g = 10;
  h = (e & 255) >>> 1;
 }
 if ((h | 0) == (g | 0)) {
  kf(b, g, 1, g, g, 0, 0);
  if (!(a[b >> 0] & 1)) g = 7; else g = 8;
 } else if (f) g = 8; else g = 7;
 if ((g | 0) == 7) {
  a[b >> 0] = (h << 1) + 2;
  e = b + 1 | 0;
  f = h + 1 | 0;
 } else if ((g | 0) == 8) {
  e = c[b + 8 >> 2] | 0;
  f = h + 1 | 0;
  c[b + 4 >> 2] = f;
 }
 a[e + h >> 0] = d;
 a[e + f >> 0] = 0;
 return;
}

function jd(a, b) {
 a = +a;
 b = b | 0;
 var d = 0;
 if ((b | 0) > 1023) {
  a = a * 89884656743115795.0e291;
  d = b + -1023 | 0;
  if ((d | 0) > 1023) {
   d = b + -2046 | 0;
   d = (d | 0) > 1023 ? 1023 : d;
   a = a * 89884656743115795.0e291;
  }
 } else if ((b | 0) < -1022) {
  a = a * 2.2250738585072014e-308;
  d = b + 1022 | 0;
  if ((d | 0) < -1022) {
   d = b + 2044 | 0;
   d = (d | 0) < -1022 ? -1022 : d;
   a = a * 2.2250738585072014e-308;
  }
 } else d = b;
 d = vo(d + 1023 | 0, 0, 52) | 0;
 b = D;
 c[k >> 2] = d;
 c[k + 4 >> 2] = b;
 return +(a * +h[k >> 3]);
}

function vf(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 h = d;
 f = e - h | 0;
 g = f >> 2;
 if (g >>> 0 > 1073741807) Ic(b);
 if (g >>> 0 < 2) {
  a[b >> 0] = f >>> 1;
  b = b + 4 | 0;
 } else {
  i = g + 4 & -4;
  f = Wb(i << 2) | 0;
  c[b + 8 >> 2] = f;
  c[b >> 2] = i | 1;
  c[b + 4 >> 2] = g;
  b = f;
 }
 g = (e - h | 0) >>> 2;
 if ((d | 0) != (e | 0)) {
  f = b;
  while (1) {
   c[f >> 2] = c[d >> 2];
   d = d + 4 | 0;
   if ((d | 0) == (e | 0)) break; else f = f + 4 | 0;
  }
 }
 c[b + (g << 2) >> 2] = 0;
 return;
}

function Ed(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 do if ((b | 0) != -1) {
  if ((c[d + 76 >> 2] | 0) > -1) g = Kd(d) | 0; else g = 0;
  if (!((c[d + 8 >> 2] | 0) == 0 ? (Td(d) | 0) != 0 : 0)) h = 6;
  if ((h | 0) == 6 ? (e = d + 4 | 0, f = c[e >> 2] | 0, f >>> 0 > ((c[d + 44 >> 2] | 0) + -8 | 0) >>> 0) : 0) {
   h = f + -1 | 0;
   c[e >> 2] = h;
   a[h >> 0] = b;
   c[d >> 2] = c[d >> 2] & -17;
   if (!g) break;
   Ld(d);
   break;
  }
  if (g) {
   Ld(d);
   b = -1;
  } else b = -1;
 } else b = -1; while (0);
 return b | 0;
}

function Bo(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0;
 f = i;
 i = i + 16 | 0;
 j = f | 0;
 h = b >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
 g = ((b | 0) < 0 ? -1 : 0) >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
 l = e >> 31 | ((e | 0) < 0 ? -1 : 0) << 1;
 k = ((e | 0) < 0 ? -1 : 0) >> 31 | ((e | 0) < 0 ? -1 : 0) << 1;
 a = qo(h ^ a, g ^ b, h, g) | 0;
 b = D;
 Fo(a, b, qo(l ^ d, k ^ e, l, k) | 0, D, j) | 0;
 e = qo(c[j >> 2] ^ h, c[j + 4 >> 2] ^ g, h, g) | 0;
 d = D;
 i = f;
 return (D = d, e) | 0;
}

function Ig(b, c, d, e, f) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0;
 a : do if ((e | 0) == (f | 0)) h = 6; else while (1) {
  if ((c | 0) == (d | 0)) {
   c = -1;
   break a;
  }
  b = a[c >> 0] | 0;
  g = a[e >> 0] | 0;
  if (b << 24 >> 24 < g << 24 >> 24) {
   c = -1;
   break a;
  }
  if (g << 24 >> 24 < b << 24 >> 24) {
   c = 1;
   break a;
  }
  c = c + 1 | 0;
  e = e + 1 | 0;
  if ((e | 0) == (f | 0)) {
   h = 6;
   break;
  }
 } while (0);
 if ((h | 0) == 6) c = (c | 0) != (d | 0) & 1;
 return c | 0;
}

function xd(a) {
 a = a | 0;
 var b = 0, d = 0;
 do if (a) {
  if ((c[a + 76 >> 2] | 0) <= -1) {
   b = fe(a) | 0;
   break;
  }
  d = (Kd(a) | 0) == 0;
  b = fe(a) | 0;
  if (!d) Ld(a);
 } else {
  if (!(c[641] | 0)) b = 0; else b = xd(c[641] | 0) | 0;
  eb(2332);
  a = c[582] | 0;
  if (a) do {
   if ((c[a + 76 >> 2] | 0) > -1) d = Kd(a) | 0; else d = 0;
   if ((c[a + 20 >> 2] | 0) >>> 0 > (c[a + 28 >> 2] | 0) >>> 0) b = fe(a) | 0 | b;
   if (d) Ld(a);
   a = c[a + 56 >> 2] | 0;
  } while ((a | 0) != 0);
  Ya(2332);
 } while (0);
 return b | 0;
}

function bn(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0;
 h = a + 4 | 0;
 f = (c[h >> 2] | 0) != 98;
 e = c[a >> 2] | 0;
 i = e;
 g = (c[d >> 2] | 0) - i | 0;
 g = g >>> 0 < 2147483647 ? g << 1 : -1;
 i = (c[b >> 2] | 0) - i >> 2;
 e = te(f ? e : 0, g) | 0;
 if (!e) Ec();
 if (!f) {
  f = c[a >> 2] | 0;
  c[a >> 2] = e;
  if (f) {
   sb[c[h >> 2] & 127](f);
   e = c[a >> 2] | 0;
  }
 } else c[a >> 2] = e;
 c[h >> 2] = 109;
 c[b >> 2] = e + (i << 2);
 c[d >> 2] = (c[a >> 2] | 0) + (g >>> 2 << 2);
 return;
}

function $m(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0;
 h = a + 4 | 0;
 f = (c[h >> 2] | 0) != 98;
 e = c[a >> 2] | 0;
 i = e;
 g = (c[d >> 2] | 0) - i | 0;
 g = g >>> 0 < 2147483647 ? g << 1 : -1;
 i = (c[b >> 2] | 0) - i >> 2;
 e = te(f ? e : 0, g) | 0;
 if (!e) Ec();
 if (!f) {
  f = c[a >> 2] | 0;
  c[a >> 2] = e;
  if (f) {
   sb[c[h >> 2] & 127](f);
   e = c[a >> 2] | 0;
  }
 } else c[a >> 2] = e;
 c[h >> 2] = 109;
 c[b >> 2] = e + (i << 2);
 c[d >> 2] = (c[a >> 2] | 0) + (g >>> 2 << 2);
 return;
}

function Lf(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 h = b + 12 | 0;
 i = b + 16 | 0;
 a : do if ((e | 0) > 0) {
  g = d;
  d = 0;
  while (1) {
   f = c[h >> 2] | 0;
   if (f >>> 0 < (c[i >> 2] | 0) >>> 0) {
    c[h >> 2] = f + 1;
    f = a[f >> 0] | 0;
   } else {
    f = wb[c[(c[b >> 2] | 0) + 40 >> 2] & 63](b) | 0;
    if ((f | 0) == -1) break a;
    f = f & 255;
   }
   a[g >> 0] = f;
   d = d + 1 | 0;
   if ((d | 0) < (e | 0)) g = g + 1 | 0; else break;
  }
 } else d = 0; while (0);
 return d | 0;
}

function cg(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0;
 g = a + 24 | 0;
 h = a + 28 | 0;
 a : do if ((d | 0) > 0) {
  f = b;
  b = 0;
  while (1) {
   e = c[g >> 2] | 0;
   if (e >>> 0 >= (c[h >> 2] | 0) >>> 0) {
    if ((Cb[c[(c[a >> 2] | 0) + 52 >> 2] & 15](a, c[f >> 2] | 0) | 0) == -1) break a;
   } else {
    i = c[f >> 2] | 0;
    c[g >> 2] = e + 4;
    c[e >> 2] = i;
   }
   b = b + 1 | 0;
   if ((b | 0) < (d | 0)) f = f + 4 | 0; else break;
  }
 } else b = 0; while (0);
 return b | 0;
}

function Pf(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0;
 i = b + 24 | 0;
 j = b + 28 | 0;
 a : do if ((f | 0) > 0) {
  h = e;
  e = 0;
  while (1) {
   g = c[i >> 2] | 0;
   if (g >>> 0 >= (c[j >> 2] | 0) >>> 0) {
    if ((Cb[c[(c[b >> 2] | 0) + 52 >> 2] & 15](b, d[h >> 0] | 0) | 0) == -1) break a;
   } else {
    k = a[h >> 0] | 0;
    c[i >> 2] = g + 1;
    a[g >> 0] = k;
   }
   e = e + 1 | 0;
   if ((e | 0) < (f | 0)) h = h + 1 | 0; else break;
  }
 } else e = 0; while (0);
 return e | 0;
}

function tg(a) {
 a = a | 0;
 var b = 0, d = 0;
 a = a + 4 | 0;
 d = c[a >> 2] | 0;
 b = c[(c[d >> 2] | 0) + -12 >> 2] | 0;
 if (((((c[d + (b + 24) >> 2] | 0) != 0 ? (c[d + (b + 16) >> 2] | 0) == 0 : 0) ? (c[d + (b + 4) >> 2] & 8192 | 0) != 0 : 0) ? !(Ga() | 0) : 0) ? (d = c[a >> 2] | 0, d = c[d + ((c[(c[d >> 2] | 0) + -12 >> 2] | 0) + 24) >> 2] | 0, (wb[c[(c[d >> 2] | 0) + 24 >> 2] & 63](d) | 0) == -1) : 0) {
  d = c[a >> 2] | 0;
  d = d + ((c[(c[d >> 2] | 0) + -12 >> 2] | 0) + 16) | 0;
  c[d >> 2] = c[d >> 2] | 1;
 }
 return;
}

function Cg(a) {
 a = a | 0;
 var b = 0, d = 0;
 a = a + 4 | 0;
 d = c[a >> 2] | 0;
 b = c[(c[d >> 2] | 0) + -12 >> 2] | 0;
 if (((((c[d + (b + 24) >> 2] | 0) != 0 ? (c[d + (b + 16) >> 2] | 0) == 0 : 0) ? (c[d + (b + 4) >> 2] & 8192 | 0) != 0 : 0) ? !(Ga() | 0) : 0) ? (d = c[a >> 2] | 0, d = c[d + ((c[(c[d >> 2] | 0) + -12 >> 2] | 0) + 24) >> 2] | 0, (wb[c[(c[d >> 2] | 0) + 24 >> 2] & 63](d) | 0) == -1) : 0) {
  d = c[a >> 2] | 0;
  d = d + ((c[(c[d >> 2] | 0) + -12 >> 2] | 0) + 16) | 0;
  c[d >> 2] = c[d >> 2] | 1;
 }
 return;
}

function _f(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 g = a + 12 | 0;
 h = a + 16 | 0;
 a : do if ((d | 0) > 0) {
  f = b;
  b = 0;
  while (1) {
   e = c[g >> 2] | 0;
   if (e >>> 0 >= (c[h >> 2] | 0) >>> 0) {
    e = wb[c[(c[a >> 2] | 0) + 40 >> 2] & 63](a) | 0;
    if ((e | 0) == -1) break a;
   } else {
    c[g >> 2] = e + 4;
    e = c[e >> 2] | 0;
   }
   c[f >> 2] = e;
   b = b + 1 | 0;
   if ((b | 0) < (d | 0)) f = f + 4 | 0; else break;
  }
 } else b = 0; while (0);
 return b | 0;
}

function uo(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0;
 if ((e | 0) >= 4096) return Oa(b | 0, d | 0, e | 0) | 0;
 f = b | 0;
 if ((b & 3) == (d & 3)) {
  while (b & 3) {
   if (!e) return f | 0;
   a[b >> 0] = a[d >> 0] | 0;
   b = b + 1 | 0;
   d = d + 1 | 0;
   e = e - 1 | 0;
  }
  while ((e | 0) >= 4) {
   c[b >> 2] = c[d >> 2];
   b = b + 4 | 0;
   d = d + 4 | 0;
   e = e - 4 | 0;
  }
 }
 while ((e | 0) > 0) {
  a[b >> 0] = a[d >> 0] | 0;
  b = b + 1 | 0;
  d = d + 1 | 0;
  e = e - 1 | 0;
 }
 return f | 0;
}

function _m(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0;
 h = a + 4 | 0;
 f = (c[h >> 2] | 0) != 98;
 e = c[a >> 2] | 0;
 i = e;
 g = (c[d >> 2] | 0) - i | 0;
 g = g >>> 0 < 2147483647 ? g << 1 : -1;
 i = (c[b >> 2] | 0) - i | 0;
 e = te(f ? e : 0, g) | 0;
 if (!e) Ec();
 if (!f) {
  f = c[a >> 2] | 0;
  c[a >> 2] = e;
  if (f) {
   sb[c[h >> 2] & 127](f);
   e = c[a >> 2] | 0;
  }
 } else c[a >> 2] = e;
 c[h >> 2] = 109;
 c[b >> 2] = e + i;
 c[d >> 2] = (c[a >> 2] | 0) + g;
 return;
}

function Ng(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0;
 a : do if ((e | 0) == (f | 0)) h = 6; else while (1) {
  if ((b | 0) == (d | 0)) {
   b = -1;
   break a;
  }
  a = c[b >> 2] | 0;
  g = c[e >> 2] | 0;
  if ((a | 0) < (g | 0)) {
   b = -1;
   break a;
  }
  if ((g | 0) < (a | 0)) {
   b = 1;
   break a;
  }
  b = b + 4 | 0;
  e = e + 4 | 0;
  if ((e | 0) == (f | 0)) {
   h = 6;
   break;
  }
 } while (0);
 if ((h | 0) == 6) b = (b | 0) != (d | 0) & 1;
 return b | 0;
}

function uf(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 g = d;
 f = e - g | 0;
 if (f >>> 0 > 4294967279) Ic(b);
 if (f >>> 0 < 11) {
  a[b >> 0] = f << 1;
  h = b + 1 | 0;
 } else {
  i = f + 16 & -16;
  h = Wb(i) | 0;
  c[b + 8 >> 2] = h;
  c[b >> 2] = i | 1;
  c[b + 4 >> 2] = f;
 }
 b = e - g | 0;
 if ((d | 0) != (e | 0)) {
  f = h;
  while (1) {
   a[f >> 0] = a[d >> 0] | 0;
   d = d + 1 | 0;
   if ((d | 0) == (e | 0)) break; else f = f + 1 | 0;
  }
 }
 a[h + b >> 0] = 0;
 return;
}

function Zn(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0;
 e = c[a >> 2] | 0;
 g = a + 4 | 0;
 d = b + 4 | 0;
 f = (c[g >> 2] | 0) - e | 0;
 h = (c[d >> 2] | 0) + (0 - (f >> 2) << 2) | 0;
 c[d >> 2] = h;
 uo(h | 0, e | 0, f | 0) | 0;
 f = c[a >> 2] | 0;
 c[a >> 2] = c[d >> 2];
 c[d >> 2] = f;
 f = b + 8 | 0;
 e = c[g >> 2] | 0;
 c[g >> 2] = c[f >> 2];
 c[f >> 2] = e;
 f = a + 8 | 0;
 a = b + 12 | 0;
 e = c[f >> 2] | 0;
 c[f >> 2] = c[a >> 2];
 c[a >> 2] = e;
 c[b >> 2] = c[d >> 2];
 return;
}

function Bd(a) {
 a = a | 0;
 var b = 0, e = 0, f = 0;
 if ((c[a + 76 >> 2] | 0) >= 0 ? (Kd(a) | 0) != 0 : 0) {
  b = a + 4 | 0;
  e = c[b >> 2] | 0;
  if (e >>> 0 < (c[a + 8 >> 2] | 0) >>> 0) {
   c[b >> 2] = e + 1;
   b = d[e >> 0] | 0;
  } else b = Vd(a) | 0;
  Ld(a);
 } else f = 3;
 do if ((f | 0) == 3) {
  b = a + 4 | 0;
  e = c[b >> 2] | 0;
  if (e >>> 0 < (c[a + 8 >> 2] | 0) >>> 0) {
   c[b >> 2] = e + 1;
   b = d[e >> 0] | 0;
   break;
  } else {
   b = Vd(a) | 0;
   break;
  }
 } while (0);
 return b | 0;
}

function oe(b, c, d) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0;
 if (c >>> 0 > 0 | (c | 0) == 0 & b >>> 0 > 4294967295) while (1) {
  e = Eo(b | 0, c | 0, 10, 0) | 0;
  d = d + -1 | 0;
  a[d >> 0] = e | 48;
  e = Do(b | 0, c | 0, 10, 0) | 0;
  if (c >>> 0 > 9 | (c | 0) == 9 & b >>> 0 > 4294967295) {
   b = e;
   c = D;
  } else {
   b = e;
   break;
  }
 }
 if (b) while (1) {
  d = d + -1 | 0;
  a[d >> 0] = (b >>> 0) % 10 | 0 | 48;
  if (b >>> 0 < 10) break; else b = (b >>> 0) / 10 | 0;
 }
 return d | 0;
}

function hd(a, b) {
 a = +a;
 b = b | 0;
 var d = 0, e = 0, f = 0;
 h[k >> 3] = a;
 d = c[k >> 2] | 0;
 e = c[k + 4 >> 2] | 0;
 f = to(d | 0, e | 0, 52) | 0;
 f = f & 2047;
 switch (f | 0) {
 case 0:
  {
   if (a != 0.0) {
    a = +hd(a * 18446744073709552.0e3, b);
    d = (c[b >> 2] | 0) + -64 | 0;
   } else d = 0;
   c[b >> 2] = d;
   break;
  }
 case 2047:
  break;
 default:
  {
   c[b >> 2] = f + -1022;
   c[k >> 2] = d;
   c[k + 4 >> 2] = e & -2146435073 | 1071644672;
   a = +h[k >> 3];
  }
 }
 return +a;
}

function $d(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0;
 f = b;
 a : do if (!(f & 3)) e = 4; else {
  d = b;
  b = f;
  while (1) {
   if (!(a[d >> 0] | 0)) break a;
   d = d + 1 | 0;
   b = d;
   if (!(b & 3)) {
    b = d;
    e = 4;
    break;
   }
  }
 } while (0);
 if ((e | 0) == 4) {
  while (1) {
   d = c[b >> 2] | 0;
   if (!((d & -2139062144 ^ -2139062144) & d + -16843009)) b = b + 4 | 0; else break;
  }
  if ((d & 255) << 24 >> 24) do b = b + 1 | 0; while ((a[b >> 0] | 0) != 0);
 }
 return b - f | 0;
}

function te(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0;
 if (!a) {
  a = qe(b) | 0;
  return a | 0;
 }
 if (b >>> 0 > 4294967231) {
  c[(Rc() | 0) >> 2] = 12;
  a = 0;
  return a | 0;
 }
 d = ue(a + -8 | 0, b >>> 0 < 11 ? 16 : b + 11 & -8) | 0;
 if (d) {
  a = d + 8 | 0;
  return a | 0;
 }
 d = qe(b) | 0;
 if (!d) {
  a = 0;
  return a | 0;
 }
 e = c[a + -4 >> 2] | 0;
 e = (e & -8) - ((e & 3 | 0) == 0 ? 8 : 4) | 0;
 uo(d | 0, a | 0, (e >>> 0 < b >>> 0 ? e : b) | 0) | 0;
 re(a);
 a = d;
 return a | 0;
}

function fe(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0;
 b = a + 20 | 0;
 g = a + 28 | 0;
 if ((c[b >> 2] | 0) >>> 0 > (c[g >> 2] | 0) >>> 0 ? (pb[c[a + 36 >> 2] & 31](a, 0, 0) | 0, (c[b >> 2] | 0) == 0) : 0) b = -1; else {
  h = a + 4 | 0;
  d = c[h >> 2] | 0;
  e = a + 8 | 0;
  f = c[e >> 2] | 0;
  if (d >>> 0 < f >>> 0) pb[c[a + 40 >> 2] & 31](a, d - f | 0, 1) | 0;
  c[a + 16 >> 2] = 0;
  c[g >> 2] = 0;
  c[b >> 2] = 0;
  c[e >> 2] = 0;
  c[h >> 2] = 0;
  b = 0;
 }
 return b | 0;
}

function ke(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0.0, f = 0, g = 0, h = 0, j = 0;
 j = i;
 i = i + 112 | 0;
 h = j;
 f = h;
 g = f + 112 | 0;
 do {
  c[f >> 2] = 0;
  f = f + 4 | 0;
 } while ((f | 0) < (g | 0));
 f = h + 4 | 0;
 c[f >> 2] = a;
 g = h + 8 | 0;
 c[g >> 2] = -1;
 c[h + 44 >> 2] = a;
 c[h + 76 >> 2] = -1;
 Uc(h, 0);
 e = +Sc(h, d, 1);
 d = (c[f >> 2] | 0) - (c[g >> 2] | 0) + (c[h + 108 >> 2] | 0) | 0;
 if (b) c[b >> 2] = (d | 0) != 0 ? a + d | 0 : a;
 i = j;
 return +e;
}

function Fd(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0;
 j = i;
 i = i + 16 | 0;
 e = j;
 f = qe(240) | 0;
 do if (f) {
  c[e >> 2] = c[d >> 2];
  e = Id(f, 240, b, e) | 0;
  if (e >>> 0 < 240) {
   b = te(f, e + 1 | 0) | 0;
   c[a >> 2] = (b | 0) != 0 ? b : f;
   break;
  }
  re(f);
  if ((e | 0) >= 0 ? (h = e + 1 | 0, g = qe(h) | 0, c[a >> 2] = g, (g | 0) != 0) : 0) e = Id(g, h, b, d) | 0; else e = -1;
 } else e = -1; while (0);
 i = j;
 return e | 0;
}

function Td(b) {
 b = b | 0;
 var d = 0, e = 0;
 d = b + 74 | 0;
 e = a[d >> 0] | 0;
 a[d >> 0] = e + 255 | e;
 d = b + 20 | 0;
 e = b + 44 | 0;
 if ((c[d >> 2] | 0) >>> 0 > (c[e >> 2] | 0) >>> 0) pb[c[b + 36 >> 2] & 31](b, 0, 0) | 0;
 c[b + 16 >> 2] = 0;
 c[b + 28 >> 2] = 0;
 c[d >> 2] = 0;
 d = c[b >> 2] | 0;
 if (d & 20) if (!(d & 4)) d = -1; else {
  c[b >> 2] = d | 32;
  d = -1;
 } else {
  d = c[e >> 2] | 0;
  c[b + 8 >> 2] = d;
  c[b + 4 >> 2] = d;
  d = 0;
 }
 return d | 0;
}

function Ao(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 j = b >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
 i = ((b | 0) < 0 ? -1 : 0) >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
 f = d >> 31 | ((d | 0) < 0 ? -1 : 0) << 1;
 e = ((d | 0) < 0 ? -1 : 0) >> 31 | ((d | 0) < 0 ? -1 : 0) << 1;
 h = qo(j ^ a, i ^ b, j, i) | 0;
 g = D;
 a = f ^ j;
 b = e ^ i;
 return qo((Fo(h, g, qo(f ^ c, e ^ d, f, e) | 0, D, 0) | 0) ^ a, D ^ b, a, b) | 0;
}

function Qc(b) {
 b = b | 0;
 var c = 0, e = 0;
 c = 0;
 while (1) {
  if ((d[14636 + c >> 0] | 0) == (b | 0)) {
   e = 2;
   break;
  }
  c = c + 1 | 0;
  if ((c | 0) == 87) {
   c = 87;
   b = 14724;
   e = 5;
   break;
  }
 }
 if ((e | 0) == 2) if (!c) b = 14724; else {
  b = 14724;
  e = 5;
 }
 if ((e | 0) == 5) while (1) {
  e = b;
  while (1) {
   b = e + 1 | 0;
   if (!(a[e >> 0] | 0)) break; else e = b;
  }
  c = c + -1 | 0;
  if (!c) break; else e = 5;
 }
 return b | 0;
}

function vh(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0;
 g = i;
 i = i + 16 | 0;
 h = g;
 b = Af(b) | 0;
 c[h >> 2] = b;
 j = Ok(h, 9328) | 0;
 Ab[c[(c[j >> 2] | 0) + 48 >> 2] & 7](j, 19978, 20010, d) | 0;
 d = Ok(h, 9484) | 0;
 c[e >> 2] = wb[c[(c[d >> 2] | 0) + 12 >> 2] & 63](d) | 0;
 c[f >> 2] = wb[c[(c[d >> 2] | 0) + 16 >> 2] & 63](d) | 0;
 tb[c[(c[d >> 2] | 0) + 20 >> 2] & 63](a, d);
 mo(b) | 0;
 i = g;
 return;
}

function sh(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0;
 h = i;
 i = i + 16 | 0;
 j = h;
 d = Af(d) | 0;
 c[j >> 2] = d;
 k = Ok(j, 9336) | 0;
 Ab[c[(c[k >> 2] | 0) + 32 >> 2] & 7](k, 19978, 20010, e) | 0;
 e = Ok(j, 9476) | 0;
 a[f >> 0] = wb[c[(c[e >> 2] | 0) + 12 >> 2] & 63](e) | 0;
 a[g >> 0] = wb[c[(c[e >> 2] | 0) + 16 >> 2] & 63](e) | 0;
 tb[c[(c[e >> 2] | 0) + 20 >> 2] & 63](b, e);
 mo(d) | 0;
 i = h;
 return;
}

function aj(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 128 | 0;
 l = h + 16 | 0;
 m = h + 12 | 0;
 j = h;
 k = h + 8 | 0;
 c[m >> 2] = l + 100;
 Yi(a, l, m, e, f, g);
 g = j;
 c[g >> 2] = 0;
 c[g + 4 >> 2] = 0;
 c[k >> 2] = l;
 g = (c[d >> 2] | 0) - b >> 2;
 f = cd(c[a >> 2] | 0) | 0;
 g = pd(b, k, g, j) | 0;
 if (f) cd(f) | 0;
 c[d >> 2] = b + (g << 2);
 i = h;
 return;
}

function ro(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 f = b + e | 0;
 if ((e | 0) >= 20) {
  d = d & 255;
  h = b & 3;
  i = d | d << 8 | d << 16 | d << 24;
  g = f & ~3;
  if (h) {
   h = b + 4 - h | 0;
   while ((b | 0) < (h | 0)) {
    a[b >> 0] = d;
    b = b + 1 | 0;
   }
  }
  while ((b | 0) < (g | 0)) {
   c[b >> 2] = i;
   b = b + 4 | 0;
  }
 }
 while ((b | 0) < (f | 0)) {
  a[b >> 0] = d;
  b = b + 1 | 0;
 }
 return b - e | 0;
}

function co(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0.0, f = 0, g = 0, h = 0, j = 0;
 j = i;
 i = i + 16 | 0;
 h = j;
 do if ((a | 0) == (b | 0)) {
  c[d >> 2] = 4;
  e = 0.0;
 } else {
  f = Rc() | 0;
  g = c[f >> 2] | 0;
  c[f >> 2] = 0;
  e = +Wd(a, h, ch() | 0);
  a = c[f >> 2] | 0;
  if (!a) c[f >> 2] = g;
  if ((c[h >> 2] | 0) != (b | 0)) {
   c[d >> 2] = 4;
   e = 0.0;
   break;
  }
  if ((a | 0) == 34) c[d >> 2] = 4;
 } while (0);
 i = j;
 return +e;
}

function bo(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0.0, f = 0, g = 0, h = 0, j = 0;
 j = i;
 i = i + 16 | 0;
 h = j;
 do if ((a | 0) != (b | 0)) {
  f = Rc() | 0;
  g = c[f >> 2] | 0;
  c[f >> 2] = 0;
  e = +Wd(a, h, ch() | 0);
  a = c[f >> 2] | 0;
  if (!a) c[f >> 2] = g;
  if ((c[h >> 2] | 0) != (b | 0)) {
   c[d >> 2] = 4;
   e = 0.0;
   break;
  }
  if ((a | 0) == 34) c[d >> 2] = 4;
 } else {
  c[d >> 2] = 4;
  e = 0.0;
 } while (0);
 i = j;
 return +e;
}

function ao(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0.0, f = 0, g = 0, h = 0, j = 0;
 j = i;
 i = i + 16 | 0;
 h = j;
 do if ((a | 0) != (b | 0)) {
  f = Rc() | 0;
  g = c[f >> 2] | 0;
  c[f >> 2] = 0;
  e = +Wd(a, h, ch() | 0);
  a = c[f >> 2] | 0;
  if (!a) c[f >> 2] = g;
  if ((c[h >> 2] | 0) != (b | 0)) {
   c[d >> 2] = 4;
   e = 0.0;
   break;
  }
  if ((a | 0) == 34) c[d >> 2] = 4;
 } else {
  c[d >> 2] = 4;
  e = 0.0;
 } while (0);
 i = j;
 return +e;
}

function le(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0;
 k = i;
 i = i + 112 | 0;
 j = k;
 c[j >> 2] = 0;
 g = j + 4 | 0;
 c[g >> 2] = a;
 c[j + 44 >> 2] = a;
 h = j + 8 | 0;
 c[h >> 2] = (a | 0) < 0 ? -1 : a + 2147483647 | 0;
 c[j + 76 >> 2] = -1;
 Uc(j, 0);
 e = Tc(j, d, 1, e, f) | 0;
 if (b) c[b >> 2] = a + ((c[g >> 2] | 0) + (c[j + 108 >> 2] | 0) - (c[h >> 2] | 0));
 i = k;
 return e | 0;
}

function ng(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0;
 e = i;
 i = i + 16 | 0;
 d = e;
 if (c[b + ((c[(c[b >> 2] | 0) + -12 >> 2] | 0) + 24) >> 2] | 0) {
  Bg(d, b);
  if ((a[d >> 0] | 0) != 0 ? (f = c[b + ((c[(c[b >> 2] | 0) + -12 >> 2] | 0) + 24) >> 2] | 0, (wb[c[(c[f >> 2] | 0) + 24 >> 2] & 63](f) | 0) == -1) : 0) {
   f = b + ((c[(c[b >> 2] | 0) + -12 >> 2] | 0) + 16) | 0;
   c[f >> 2] = c[f >> 2] | 1;
  }
  Cg(d);
 }
 i = e;
 return b | 0;
}

function ig(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0;
 e = i;
 i = i + 16 | 0;
 d = e;
 if (c[b + ((c[(c[b >> 2] | 0) + -12 >> 2] | 0) + 24) >> 2] | 0) {
  sg(d, b);
  if ((a[d >> 0] | 0) != 0 ? (f = c[b + ((c[(c[b >> 2] | 0) + -12 >> 2] | 0) + 24) >> 2] | 0, (wb[c[(c[f >> 2] | 0) + 24 >> 2] & 63](f) | 0) == -1) : 0) {
   f = b + ((c[(c[b >> 2] | 0) + -12 >> 2] | 0) + 16) | 0;
   c[f >> 2] = c[f >> 2] | 1;
  }
  tg(d);
 }
 i = e;
 return b | 0;
}

function rc(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0;
 a : do if ((b | 0) != (c[d + 8 >> 2] | 0)) {
  h = c[b + 12 >> 2] | 0;
  g = b + 16 + (h << 3) | 0;
  qc(b + 16 | 0, d, e, f);
  if ((h | 0) > 1) {
   h = d + 54 | 0;
   b = b + 24 | 0;
   do {
    qc(b, d, e, f);
    if (a[h >> 0] | 0) break a;
    b = b + 8 | 0;
   } while (b >>> 0 < g >>> 0);
  }
 } else nc(0, d, e, f); while (0);
 return;
}

function Yi(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0;
 m = i;
 i = i + 16 | 0;
 l = m;
 a[l >> 0] = 37;
 j = l + 1 | 0;
 a[j >> 0] = g;
 k = l + 2 | 0;
 a[k >> 0] = h;
 a[l + 3 >> 0] = 0;
 if (h << 24 >> 24) {
  a[j >> 0] = h;
  a[k >> 0] = g;
 }
 c[e >> 2] = d + (Ka(d | 0, (c[e >> 2] | 0) - d | 0, l | 0, f | 0, c[b >> 2] | 0) | 0);
 i = m;
 return;
}

function nc(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0;
 b = d + 16 | 0;
 g = c[b >> 2] | 0;
 do if (g) {
  if ((g | 0) != (e | 0)) {
   f = d + 36 | 0;
   c[f >> 2] = (c[f >> 2] | 0) + 1;
   c[d + 24 >> 2] = 2;
   a[d + 54 >> 0] = 1;
   break;
  }
  b = d + 24 | 0;
  if ((c[b >> 2] | 0) == 2) c[b >> 2] = f;
 } else {
  c[b >> 2] = e;
  c[d + 24 >> 2] = f;
  c[d + 36 >> 2] = 1;
 } while (0);
 return;
}

function fi(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 4 | 0;
 k = h;
 a = a + 8 | 0;
 a = wb[c[(c[a >> 2] | 0) + 4 >> 2] & 63](a) | 0;
 c[k >> 2] = c[e >> 2];
 c[j >> 2] = c[k >> 2];
 d = (Am(d, j, a, a + 288 | 0, g, f, 0) | 0) - a | 0;
 if ((d | 0) < 288) c[b >> 2] = ((d | 0) / 12 | 0 | 0) % 12 | 0;
 i = h;
 return;
}

function Ei(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 4 | 0;
 k = h;
 a = a + 8 | 0;
 a = wb[c[(c[a >> 2] | 0) + 4 >> 2] & 63](a) | 0;
 c[k >> 2] = c[e >> 2];
 c[j >> 2] = c[k >> 2];
 d = (Lm(d, j, a, a + 288 | 0, g, f, 0) | 0) - a | 0;
 if ((d | 0) < 288) c[b >> 2] = ((d | 0) / 12 | 0 | 0) % 12 | 0;
 i = h;
 return;
}

function Yn(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0;
 c[b + 12 >> 2] = 0;
 c[b + 16 >> 2] = f;
 do if (d) {
  g = f + 112 | 0;
  if (d >>> 0 < 29 & (a[g >> 0] | 0) == 0) {
   a[g >> 0] = 1;
   break;
  } else {
   f = Wb(d << 2) | 0;
   break;
  }
 } else f = 0; while (0);
 c[b >> 2] = f;
 e = f + (e << 2) | 0;
 c[b + 8 >> 2] = e;
 c[b + 4 >> 2] = e;
 c[b + 12 >> 2] = f + (d << 2);
 return;
}

function qm(b) {
 b = b | 0;
 if ((a[1848] | 0) == 0 ? (Ba(1848) | 0) != 0 : 0) {
  if ((a[1856] | 0) == 0 ? (Ba(1856) | 0) != 0 : 0) {
   b = 12236;
   do {
    c[b >> 2] = 0;
    c[b + 4 >> 2] = 0;
    c[b + 8 >> 2] = 0;
    b = b + 12 | 0;
   } while ((b | 0) != 12524);
   cb(106, 0, n | 0) | 0;
   Ia(1856);
  }
  of(12236, 12524) | 0;
  of(12248, 12536) | 0;
  c[3137] = 12236;
  Ia(1848);
 }
 return c[3137] | 0;
}

function pm(b) {
 b = b | 0;
 if ((a[1832] | 0) == 0 ? (Ba(1832) | 0) != 0 : 0) {
  if ((a[1840] | 0) == 0 ? (Ba(1840) | 0) != 0 : 0) {
   b = 11944;
   do {
    c[b >> 2] = 0;
    c[b + 4 >> 2] = 0;
    c[b + 8 >> 2] = 0;
    b = b + 12 | 0;
   } while ((b | 0) != 12232);
   cb(105, 0, n | 0) | 0;
   Ia(1840);
  }
  cf(11944, 21693) | 0;
  cf(11956, 21696) | 0;
  c[3058] = 11944;
  Ia(1832);
 }
 return c[3058] | 0;
}

function di(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 4 | 0;
 k = h;
 a = a + 8 | 0;
 a = wb[c[c[a >> 2] >> 2] & 63](a) | 0;
 c[k >> 2] = c[e >> 2];
 c[j >> 2] = c[k >> 2];
 d = (Am(d, j, a, a + 168 | 0, g, f, 0) | 0) - a | 0;
 if ((d | 0) < 168) c[b >> 2] = ((d | 0) / 12 | 0 | 0) % 7 | 0;
 i = h;
 return;
}

function ce(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0;
 e = (d | 0) == 0;
 if (a - b >> 2 >>> 0 < d >>> 0) {
  if (!e) do {
   d = d + -1 | 0;
   c[a + (d << 2) >> 2] = c[b + (d << 2) >> 2];
  } while ((d | 0) != 0);
 } else if (!e) {
  e = b;
  b = a;
  while (1) {
   d = d + -1 | 0;
   c[b >> 2] = c[e >> 2];
   if (!d) break; else {
    e = e + 4 | 0;
    b = b + 4 | 0;
   }
  }
 }
 return a | 0;
}

function Ci(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 4 | 0;
 k = h;
 a = a + 8 | 0;
 a = wb[c[c[a >> 2] >> 2] & 63](a) | 0;
 c[k >> 2] = c[e >> 2];
 c[j >> 2] = c[k >> 2];
 d = (Lm(d, j, a, a + 168 | 0, g, f, 0) | 0) - a | 0;
 if ((d | 0) < 168) c[b >> 2] = ((d | 0) / 12 | 0 | 0) % 7 | 0;
 i = h;
 return;
}

function hi(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Ym(d, a, f, g, 4) | 0;
 if (!(c[f >> 2] & 4)) {
  if ((a | 0) < 69) a = a + 2e3 | 0; else a = (a + -69 | 0) >>> 0 < 31 ? a + 1900 | 0 : a;
  c[b >> 2] = a + -1900;
 }
 i = h;
 return;
}

function Gi(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Zm(d, a, f, g, 4) | 0;
 if (!(c[f >> 2] & 4)) {
  if ((a | 0) < 69) a = a + 2e3 | 0; else a = (a + -69 | 0) >>> 0 < 31 ? a + 1900 | 0 : a;
  c[b >> 2] = a + -1900;
 }
 i = h;
 return;
}

function uh(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 f = i;
 i = i + 16 | 0;
 g = f;
 b = Af(b) | 0;
 c[g >> 2] = b;
 h = Ok(g, 9328) | 0;
 Ab[c[(c[h >> 2] | 0) + 48 >> 2] & 7](h, 19978, 20004, d) | 0;
 d = Ok(g, 9484) | 0;
 c[e >> 2] = wb[c[(c[d >> 2] | 0) + 16 >> 2] & 63](d) | 0;
 tb[c[(c[d >> 2] | 0) + 20 >> 2] & 63](a, d);
 mo(b) | 0;
 i = f;
 return;
}

function rh(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0;
 g = i;
 i = i + 16 | 0;
 h = g;
 d = Af(d) | 0;
 c[h >> 2] = d;
 j = Ok(h, 9336) | 0;
 Ab[c[(c[j >> 2] | 0) + 32 >> 2] & 7](j, 19978, 20004, e) | 0;
 e = Ok(h, 9476) | 0;
 a[f >> 0] = wb[c[(c[e >> 2] | 0) + 16 >> 2] & 63](e) | 0;
 tb[c[(c[e >> 2] | 0) + 20 >> 2] & 63](b, e);
 mo(d) | 0;
 i = g;
 return;
}

function Se(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0;
 a : do if (!(a[b + 44 >> 0] | 0)) if ((f | 0) > 0) {
  g = e;
  e = 0;
  while (1) {
   if ((Cb[c[(c[b >> 2] | 0) + 52 >> 2] & 15](b, d[g >> 0] | 0) | 0) == -1) break a;
   e = e + 1 | 0;
   if ((e | 0) < (f | 0)) g = g + 1 | 0; else break;
  }
 } else e = 0; else e = Ad(e, 1, f, c[b + 32 >> 2] | 0) | 0; while (0);
 return e | 0;
}

function He(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0;
 a : do if (!(a[b + 44 >> 0] | 0)) if ((e | 0) > 0) {
  f = d;
  d = 0;
  while (1) {
   if ((Cb[c[(c[b >> 2] | 0) + 52 >> 2] & 15](b, c[f >> 2] | 0) | 0) == -1) break a;
   d = d + 1 | 0;
   if ((d | 0) < (e | 0)) f = f + 4 | 0; else break;
  }
 } else d = 0; else d = Ad(d, 4, e, c[b + 32 >> 2] | 0) | 0; while (0);
 return d | 0;
}

function ef(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 f = a[b >> 0] | 0;
 g = (f & 1) == 0;
 if (g) f = (f & 255) >>> 1; else f = c[b + 4 >> 2] | 0;
 do if (f >>> 0 >= d >>> 0) if (g) {
  a[b + 1 + d >> 0] = 0;
  a[b >> 0] = d << 1;
  break;
 } else {
  a[(c[b + 8 >> 2] | 0) + d >> 0] = 0;
  c[b + 4 >> 2] = d;
  break;
 } else ff(b, d - f | 0, e) | 0; while (0);
 return;
}

function Uk(a, d, f, g) {
 a = a | 0;
 d = d | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, i = 0;
 i = (f - d | 0) >>> 2;
 if ((d | 0) != (f | 0)) {
  h = d;
  while (1) {
   a = c[h >> 2] | 0;
   if (a >>> 0 < 128) a = e[(c[(Nc() | 0) >> 2] | 0) + (a << 1) >> 1] | 0; else a = 0;
   b[g >> 1] = a;
   h = h + 4 | 0;
   if ((h | 0) == (f | 0)) break; else g = g + 2 | 0;
  }
 }
 return d + (i << 2) | 0;
}

function ai(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = Yh(a, k, j, e, f, g, 21387, 21395) | 0;
 i = h;
 return a | 0;
}

function _n(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0;
 e = c[b + 4 >> 2] | 0;
 f = b + 8 | 0;
 d = c[f >> 2] | 0;
 if ((d | 0) != (e | 0)) {
  do d = d + -4 | 0; while ((d | 0) != (e | 0));
  c[f >> 2] = d;
 }
 e = c[b >> 2] | 0;
 do if (e) {
  d = c[b + 16 >> 2] | 0;
  if ((d | 0) == (e | 0)) {
   a[d + 112 >> 0] = 0;
   break;
  } else {
   Xb(e);
   break;
  }
 } while (0);
 return;
}

function zi(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = vi(a, k, j, e, f, g, 9904, 9936) | 0;
 i = h;
 return a | 0;
}

function gi(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 8 | 0;
 m = h + 4 | 0;
 k = h;
 l = Af(e) | 0;
 c[m >> 2] = l;
 e = Ok(m, 9336) | 0;
 mo(l) | 0;
 c[k >> 2] = c[d >> 2];
 c[j >> 2] = c[k >> 2];
 hi(a, g + 20 | 0, b, j, f, e);
 i = h;
 return c[b >> 2] | 0;
}

function ei(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 8 | 0;
 m = h + 4 | 0;
 k = h;
 l = Af(e) | 0;
 c[m >> 2] = l;
 e = Ok(m, 9336) | 0;
 mo(l) | 0;
 c[k >> 2] = c[d >> 2];
 c[j >> 2] = c[k >> 2];
 fi(a, g + 16 | 0, b, j, f, e);
 i = h;
 return c[b >> 2] | 0;
}

function ci(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 8 | 0;
 m = h + 4 | 0;
 k = h;
 l = Af(e) | 0;
 c[m >> 2] = l;
 e = Ok(m, 9336) | 0;
 mo(l) | 0;
 c[k >> 2] = c[d >> 2];
 c[j >> 2] = c[k >> 2];
 di(a, g + 24 | 0, b, j, f, e);
 i = h;
 return c[b >> 2] | 0;
}

function Fi(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 8 | 0;
 m = h + 4 | 0;
 k = h;
 l = Af(e) | 0;
 c[m >> 2] = l;
 e = Ok(m, 9328) | 0;
 mo(l) | 0;
 c[k >> 2] = c[d >> 2];
 c[j >> 2] = c[k >> 2];
 Gi(a, g + 20 | 0, b, j, f, e);
 i = h;
 return c[b >> 2] | 0;
}

function Di(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 8 | 0;
 m = h + 4 | 0;
 k = h;
 l = Af(e) | 0;
 c[m >> 2] = l;
 e = Ok(m, 9328) | 0;
 mo(l) | 0;
 c[k >> 2] = c[d >> 2];
 c[j >> 2] = c[k >> 2];
 Ei(a, g + 16 | 0, b, j, f, e);
 i = h;
 return c[b >> 2] | 0;
}

function Bi(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 8 | 0;
 m = h + 4 | 0;
 k = h;
 l = Af(e) | 0;
 c[m >> 2] = l;
 e = Ok(m, 9328) | 0;
 mo(l) | 0;
 c[k >> 2] = c[d >> 2];
 c[j >> 2] = c[k >> 2];
 Ci(a, g + 24 | 0, b, j, f, e);
 i = h;
 return c[b >> 2] | 0;
}

function _d(b, c) {
 b = b | 0;
 c = c | 0;
 var d = 0, e = 0;
 e = a[b >> 0] | 0;
 d = a[c >> 0] | 0;
 if (e << 24 >> 24 == 0 ? 1 : e << 24 >> 24 != d << 24 >> 24) c = e; else {
  do {
   b = b + 1 | 0;
   c = c + 1 | 0;
   e = a[b >> 0] | 0;
   d = a[c >> 0] | 0;
  } while (!(e << 24 >> 24 == 0 ? 1 : e << 24 >> 24 != d << 24 >> 24));
  c = e;
 }
 return (c & 255) - (d & 255) | 0;
}

function ze(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 f = i;
 i = i + 16 | 0;
 h = f + 4 | 0;
 g = f;
 Ef(b);
 c[b >> 2] = 7808;
 c[b + 32 >> 2] = d;
 Lk(h, b + 4 | 0);
 c[g >> 2] = c[h >> 2];
 d = Ok(g, 9396) | 0;
 Mk(g);
 c[b + 36 >> 2] = d;
 c[b + 40 >> 2] = e;
 a[b + 44 >> 0] = (wb[c[(c[d >> 2] | 0) + 28 >> 2] & 63](d) | 0) & 1;
 i = f;
 return;
}

function Be(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 f = i;
 i = i + 16 | 0;
 h = f + 4 | 0;
 g = f;
 Tf(b);
 c[b >> 2] = 7680;
 c[b + 32 >> 2] = d;
 Lk(h, b + 4 | 0);
 c[g >> 2] = c[h >> 2];
 d = Ok(g, 9404) | 0;
 Mk(g);
 c[b + 36 >> 2] = d;
 c[b + 40 >> 2] = e;
 a[b + 44 >> 0] = (wb[c[(c[d >> 2] | 0) + 28 >> 2] & 63](d) | 0) & 1;
 i = f;
 return;
}

function oh(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = Um(a, k, j, e, f, g) | 0;
 i = h;
 return a | 0;
}

function nh(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = Tm(a, k, j, e, f, g) | 0;
 i = h;
 return a | 0;
}

function mh(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = Sm(a, k, j, e, f, g) | 0;
 i = h;
 return a | 0;
}

function lh(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = Rm(a, k, j, e, f, g) | 0;
 i = h;
 return a | 0;
}

function kh(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = Qm(a, k, j, e, f, g) | 0;
 i = h;
 return a | 0;
}

function jh(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = Pm(a, k, j, e, f, g) | 0;
 i = h;
 return a | 0;
}

function ih(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = Om(a, k, j, e, f, g) | 0;
 i = h;
 return a | 0;
}

function hh(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = Nm(a, k, j, e, f, g) | 0;
 i = h;
 return a | 0;
}

function gh(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = Mm(a, k, j, e, f, g) | 0;
 i = h;
 return a | 0;
}

function _g(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = Im(a, k, j, e, f, g) | 0;
 i = h;
 return a | 0;
}

function Zg(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = Hm(a, k, j, e, f, g) | 0;
 i = h;
 return a | 0;
}

function Yg(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = Gm(a, k, j, e, f, g) | 0;
 i = h;
 return a | 0;
}

function Xg(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = Fm(a, k, j, e, f, g) | 0;
 i = h;
 return a | 0;
}

function Wg(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = Em(a, k, j, e, f, g) | 0;
 i = h;
 return a | 0;
}

function Vg(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = Dm(a, k, j, e, f, g) | 0;
 i = h;
 return a | 0;
}

function Ug(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = Cm(a, k, j, e, f, g) | 0;
 i = h;
 return a | 0;
}

function Tg(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = Bm(a, k, j, e, f, g) | 0;
 i = h;
 return a | 0;
}

function $g(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = Jm(a, k, j, e, f, g) | 0;
 i = h;
 return a | 0;
}

function Ud(b) {
 b = b | 0;
 var d = 0, e = 0;
 d = b + 74 | 0;
 e = a[d >> 0] | 0;
 a[d >> 0] = e + 255 | e;
 d = c[b >> 2] | 0;
 if (!(d & 8)) {
  c[b + 8 >> 2] = 0;
  c[b + 4 >> 2] = 0;
  d = c[b + 44 >> 2] | 0;
  c[b + 28 >> 2] = d;
  c[b + 20 >> 2] = d;
  c[b + 16 >> 2] = d + (c[b + 48 >> 2] | 0);
  d = 0;
 } else {
  c[b >> 2] = d | 32;
  d = -1;
 }
 return d | 0;
}

function li(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Ym(d, a, f, g, 2) | 0;
 d = c[f >> 2] | 0;
 if ((a + -1 | 0) >>> 0 < 12 & (d & 4 | 0) == 0) c[b >> 2] = a; else c[f >> 2] = d | 4;
 i = h;
 return;
}

function ji(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Ym(d, a, f, g, 2) | 0;
 d = c[f >> 2] | 0;
 if ((a + -1 | 0) >>> 0 < 31 & (d & 4 | 0) == 0) c[b >> 2] = a; else c[f >> 2] = d | 4;
 i = h;
 return;
}

function Ki(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Zm(d, a, f, g, 2) | 0;
 d = c[f >> 2] | 0;
 if ((a + -1 | 0) >>> 0 < 12 & (d & 4 | 0) == 0) c[b >> 2] = a; else c[f >> 2] = d | 4;
 i = h;
 return;
}

function Ii(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Zm(d, a, f, g, 2) | 0;
 d = c[f >> 2] | 0;
 if ((a + -1 | 0) >>> 0 < 31 & (d & 4 | 0) == 0) c[b >> 2] = a; else c[f >> 2] = d | 4;
 i = h;
 return;
}

function Fk(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0;
 c[a >> 2] = 9312;
 e = a + 8 | 0;
 f = a + 12 | 0;
 b = c[e >> 2] | 0;
 if ((c[f >> 2] | 0) != (b | 0)) {
  d = 0;
  do {
   b = c[b + (d << 2) >> 2] | 0;
   if (b) mo(b) | 0;
   d = d + 1 | 0;
   b = c[e >> 2] | 0;
  } while (d >>> 0 < (c[f >> 2] | 0) - b >> 2 >>> 0);
 }
 bf(a + 144 | 0);
 In(e);
 return;
}

function ni(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Ym(d, a, f, g, 2) | 0;
 d = c[f >> 2] | 0;
 if ((a | 0) < 13 & (d & 4 | 0) == 0) c[b >> 2] = a + -1; else c[f >> 2] = d | 4;
 i = h;
 return;
}

function Mi(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Zm(d, a, f, g, 2) | 0;
 d = c[f >> 2] | 0;
 if ((a | 0) < 13 & (d & 4 | 0) == 0) c[b >> 2] = a + -1; else c[f >> 2] = d | 4;
 i = h;
 return;
}

function Hn(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0;
 h = a + 4 | 0;
 d = c[h >> 2] | 0;
 e = c[a >> 2] | 0;
 f = d - e >> 2;
 if (f >>> 0 >= b >>> 0) {
  if (f >>> 0 > b >>> 0 ? (g = e + (b << 2) | 0, (d | 0) != (g | 0)) : 0) {
   do d = d + -4 | 0; while ((d | 0) != (g | 0));
   c[h >> 2] = d;
  }
 } else Wn(a, b - f | 0);
 return;
}

function Pd(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 f = i;
 i = i + 32 | 0;
 g = f;
 e = f + 20 | 0;
 c[g >> 2] = c[a + 60 >> 2];
 c[g + 4 >> 2] = 0;
 c[g + 8 >> 2] = b;
 c[g + 12 >> 2] = e;
 c[g + 16 >> 2] = d;
 if ((Wc(kb(140, g | 0) | 0) | 0) < 0) {
  c[e >> 2] = -1;
  a = -1;
 } else a = c[e >> 2] | 0;
 i = f;
 return a | 0;
}

function mi(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Ym(d, a, f, g, 3) | 0;
 d = c[f >> 2] | 0;
 if ((a | 0) < 366 & (d & 4 | 0) == 0) c[b >> 2] = a; else c[f >> 2] = d | 4;
 i = h;
 return;
}

function Li(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Zm(d, a, f, g, 3) | 0;
 d = c[f >> 2] | 0;
 if ((a | 0) < 366 & (d & 4 | 0) == 0) c[b >> 2] = a; else c[f >> 2] = d | 4;
 i = h;
 return;
}

function ri(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Ym(d, a, f, g, 2) | 0;
 d = c[f >> 2] | 0;
 if ((a | 0) < 61 & (d & 4 | 0) == 0) c[b >> 2] = a; else c[f >> 2] = d | 4;
 i = h;
 return;
}

function oi(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Ym(d, a, f, g, 2) | 0;
 d = c[f >> 2] | 0;
 if ((a | 0) < 60 & (d & 4 | 0) == 0) c[b >> 2] = a; else c[f >> 2] = d | 4;
 i = h;
 return;
}

function ki(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Ym(d, a, f, g, 2) | 0;
 d = c[f >> 2] | 0;
 if ((a | 0) < 24 & (d & 4 | 0) == 0) c[b >> 2] = a; else c[f >> 2] = d | 4;
 i = h;
 return;
}

function cl(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, i = 0;
 i = (e - d | 0) >>> 2;
 if ((d | 0) != (e | 0)) {
  h = d;
  b = g;
  while (1) {
   g = c[h >> 2] | 0;
   a[b >> 0] = g >>> 0 < 128 ? g & 255 : f;
   h = h + 4 | 0;
   if ((h | 0) == (e | 0)) break; else b = b + 1 | 0;
  }
 }
 return d + (i << 2) | 0;
}

function Qi(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Zm(d, a, f, g, 2) | 0;
 d = c[f >> 2] | 0;
 if ((a | 0) < 61 & (d & 4 | 0) == 0) c[b >> 2] = a; else c[f >> 2] = d | 4;
 i = h;
 return;
}

function Ni(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Zm(d, a, f, g, 2) | 0;
 d = c[f >> 2] | 0;
 if ((a | 0) < 60 & (d & 4 | 0) == 0) c[b >> 2] = a; else c[f >> 2] = d | 4;
 i = h;
 return;
}

function Ji(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Zm(d, a, f, g, 2) | 0;
 d = c[f >> 2] | 0;
 if ((a | 0) < 24 & (d & 4 | 0) == 0) c[b >> 2] = a; else c[f >> 2] = d | 4;
 i = h;
 return;
}

function si(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Ym(d, a, f, g, 1) | 0;
 d = c[f >> 2] | 0;
 if ((a | 0) < 7 & (d & 4 | 0) == 0) c[b >> 2] = a; else c[f >> 2] = d | 4;
 i = h;
 return;
}

function Wk(a, d, e, f) {
 a = a | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 a : do if ((e | 0) == (f | 0)) e = f; else while (1) {
  a = c[e >> 2] | 0;
  if (a >>> 0 >= 128) break a;
  if (!((b[(c[(Nc() | 0) >> 2] | 0) + (a << 1) >> 1] & d) << 16 >> 16)) break a;
  e = e + 4 | 0;
  if ((e | 0) == (f | 0)) {
   e = f;
   break;
  }
 } while (0);
 return e | 0;
}

function Ri(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Zm(d, a, f, g, 1) | 0;
 d = c[f >> 2] | 0;
 if ((a | 0) < 7 & (d & 4 | 0) == 0) c[b >> 2] = a; else c[f >> 2] = d | 4;
 i = h;
 return;
}

function Sd(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 e = a + 84 | 0;
 g = c[e >> 2] | 0;
 h = d + 256 | 0;
 f = Zd(g, 0, h) | 0;
 f = (f | 0) == 0 ? h : f - g | 0;
 d = f >>> 0 < d >>> 0 ? f : d;
 uo(b | 0, g | 0, d | 0) | 0;
 c[a + 4 >> 2] = g + d;
 b = g + f | 0;
 c[a + 8 >> 2] = b;
 c[e >> 2] = b;
 return d | 0;
}

function af(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 if (d >>> 0 > 4294967279) Ic(b);
 if (d >>> 0 < 11) {
  a[b >> 0] = d << 1;
  b = b + 1 | 0;
 } else {
  g = d + 16 & -16;
  f = Wb(g) | 0;
  c[b + 8 >> 2] = f;
  c[b >> 2] = g | 1;
  c[b + 4 >> 2] = d;
  b = f;
 }
 ro(b | 0, e | 0, d | 0) | 0;
 a[b + d >> 0] = 0;
 return;
}

function Jd(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 g = i;
 i = i + 112 | 0;
 e = g;
 f = e;
 h = f + 112 | 0;
 do {
  c[f >> 2] = 0;
  f = f + 4 | 0;
 } while ((f | 0) < (h | 0));
 c[e + 32 >> 2] = 26;
 c[e + 44 >> 2] = a;
 c[e + 76 >> 2] = -1;
 c[e + 84 >> 2] = a;
 h = Hd(e, b, d) | 0;
 i = g;
 return h | 0;
}

function $e(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 if (e >>> 0 > 4294967279) Ic(b);
 if (e >>> 0 < 11) {
  a[b >> 0] = e << 1;
  b = b + 1 | 0;
 } else {
  g = e + 16 & -16;
  f = Wb(g) | 0;
  c[b + 8 >> 2] = f;
  c[b >> 2] = g | 1;
  c[b + 4 >> 2] = e;
  b = f;
 }
 uo(b | 0, d | 0, e | 0) | 0;
 a[b + e >> 0] = 0;
 return;
}

function Vk(a, d, e, f) {
 a = a | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 a : do if ((e | 0) == (f | 0)) e = f; else while (1) {
  a = c[e >> 2] | 0;
  if (a >>> 0 < 128 ? (b[(c[(Nc() | 0) >> 2] | 0) + (a << 1) >> 1] & d) << 16 >> 16 != 0 : 0) break a;
  e = e + 4 | 0;
  if ((e | 0) == (f | 0)) {
   e = f;
   break;
  }
 } while (0);
 return e | 0;
}

function In(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0;
 e = c[b >> 2] | 0;
 do if (e) {
  f = b + 4 | 0;
  d = c[f >> 2] | 0;
  if ((d | 0) != (e | 0)) {
   do d = d + -4 | 0; while ((d | 0) != (e | 0));
   c[f >> 2] = d;
  }
  if ((b + 16 | 0) == (e | 0)) {
   a[b + 128 >> 0] = 0;
   break;
  } else {
   Xb(e);
   break;
  }
 } while (0);
 return;
}

function mf(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 if (d >>> 0 > 1073741807) Ic(b);
 if (d >>> 0 < 2) {
  a[b >> 0] = d << 1;
  b = b + 4 | 0;
 } else {
  g = d + 4 & -4;
  f = Wb(g << 2) | 0;
  c[b + 8 >> 2] = f;
  c[b >> 2] = g | 1;
  c[b + 4 >> 2] = d;
  b = f;
 }
 de(b, e, d) | 0;
 c[b + (d << 2) >> 2] = 0;
 return;
}

function lf(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 if (e >>> 0 > 1073741807) Ic(b);
 if (e >>> 0 < 2) {
  a[b >> 0] = e << 1;
  b = b + 4 | 0;
 } else {
  g = e + 4 & -4;
  f = Wb(g << 2) | 0;
  c[b + 8 >> 2] = f;
  c[b >> 2] = g | 1;
  c[b + 4 >> 2] = e;
  b = f;
 }
 be(b, d, e) | 0;
 c[b + (e << 2) >> 2] = 0;
 return;
}

function Ol(a, b, d, e, f, g, h, j) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0;
 a = i;
 i = i + 16 | 0;
 k = a + 4 | 0;
 b = a;
 c[k >> 2] = d;
 c[b >> 2] = g;
 h = On(d, e, k, g, h, b, 1114111, 0) | 0;
 c[f >> 2] = c[k >> 2];
 c[j >> 2] = c[b >> 2];
 i = a;
 return h | 0;
}

function Nl(a, b, d, e, f, g, h, j) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0;
 a = i;
 i = i + 16 | 0;
 k = a + 4 | 0;
 b = a;
 c[k >> 2] = d;
 c[b >> 2] = g;
 h = Nn(d, e, k, g, h, b, 1114111, 0) | 0;
 c[f >> 2] = c[k >> 2];
 c[j >> 2] = c[b >> 2];
 i = a;
 return h | 0;
}

function Gl(a, b, d, e, f, g, h, j) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0;
 a = i;
 i = i + 16 | 0;
 k = a + 4 | 0;
 b = a;
 c[k >> 2] = d;
 c[b >> 2] = g;
 h = Ln(d, e, k, g, h, b, 1114111, 0) | 0;
 c[f >> 2] = c[k >> 2];
 c[j >> 2] = c[b >> 2];
 i = a;
 return h | 0;
}

function Fl(a, b, d, e, f, g, h, j) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0;
 a = i;
 i = i + 16 | 0;
 k = a + 4 | 0;
 b = a;
 c[k >> 2] = d;
 c[b >> 2] = g;
 h = Kn(d, e, k, g, h, b, 1114111, 0) | 0;
 c[f >> 2] = c[k >> 2];
 c[j >> 2] = c[b >> 2];
 i = a;
 return h | 0;
}

function _k(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 f = (d - b | 0) >>> 2;
 if ((b | 0) != (d | 0)) {
  e = b;
  do {
   a = c[e >> 2] | 0;
   if (a >>> 0 < 128) a = c[(c[(Oc() | 0) >> 2] | 0) + (a << 2) >> 2] | 0;
   c[e >> 2] = a;
   e = e + 4 | 0;
  } while ((e | 0) != (d | 0));
 }
 return b + (f << 2) | 0;
}

function Yk(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 f = (d - b | 0) >>> 2;
 if ((b | 0) != (d | 0)) {
  e = b;
  do {
   a = c[e >> 2] | 0;
   if (a >>> 0 < 128) a = c[(c[(Pc() | 0) >> 2] | 0) + (a << 2) >> 2] | 0;
   c[e >> 2] = a;
   e = e + 4 | 0;
  } while ((e | 0) != (d | 0));
 }
 return b + (f << 2) | 0;
}

function Rd(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 g = i;
 i = i + 80 | 0;
 f = g;
 c[b + 36 >> 2] = 3;
 if ((c[b >> 2] & 64 | 0) == 0 ? (c[f >> 2] = c[b + 60 >> 2], c[f + 4 >> 2] = 21505, c[f + 8 >> 2] = g + 12, (Xa(54, f | 0) | 0) != 0) : 0) a[b + 75 >> 0] = -1;
 f = Qd(b, d, e) | 0;
 i = g;
 return f | 0;
}

function Bf(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0;
 c[a + 24 >> 2] = b;
 c[a + 16 >> 2] = (b | 0) == 0 & 1;
 c[a + 20 >> 2] = 0;
 c[a + 4 >> 2] = 4098;
 c[a + 12 >> 2] = 0;
 c[a + 8 >> 2] = 6;
 d = a + 28 | 0;
 b = a + 32 | 0;
 a = b + 40 | 0;
 do {
  c[b >> 2] = 0;
  b = b + 4 | 0;
 } while ((b | 0) < (a | 0));
 Kk(d);
 return;
}

function oo(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 ib(12852) | 0;
 if ((c[a >> 2] | 0) == 1) do xa(12880, 12852) | 0; while ((c[a >> 2] | 0) == 1);
 if (!(c[a >> 2] | 0)) {
  c[a >> 2] = 1;
  Va(12852) | 0;
  sb[d & 127](b);
  ib(12852) | 0;
  c[a >> 2] = -1;
  Va(12852) | 0;
  _a(12880) | 0;
 } else Va(12852) | 0;
 return;
}

function Ek(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 lo(b);
 f = a + 8 | 0;
 e = c[f >> 2] | 0;
 if ((c[a + 12 >> 2] | 0) - e >> 2 >>> 0 <= d >>> 0) {
  Hn(f, d + 1 | 0);
  e = c[f >> 2] | 0;
 }
 a = c[e + (d << 2) >> 2] | 0;
 if (a) {
  mo(a) | 0;
  e = c[f >> 2] | 0;
 }
 c[e + (d << 2) >> 2] = b;
 return;
}

function vc(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, i = 0;
 i = c[a + 4 >> 2] | 0;
 h = i >> 8;
 if (i & 1) h = c[(c[e >> 2] | 0) + h >> 2] | 0;
 a = c[a >> 2] | 0;
 Bb[c[(c[a >> 2] | 0) + 20 >> 2] & 7](a, b, d, e + h | 0, (i & 2 | 0) != 0 ? f : 2, g);
 return;
}

function Vn(a) {
 a = a | 0;
 nf(12512);
 nf(12500);
 nf(12488);
 nf(12476);
 nf(12464);
 nf(12452);
 nf(12440);
 nf(12428);
 nf(12416);
 nf(12404);
 nf(12392);
 nf(12380);
 nf(12368);
 nf(12356);
 nf(12344);
 nf(12332);
 nf(12320);
 nf(12308);
 nf(12296);
 nf(12284);
 nf(12272);
 nf(12260);
 nf(12248);
 nf(12236);
 return;
}

function Un(a) {
 a = a | 0;
 bf(12220);
 bf(12208);
 bf(12196);
 bf(12184);
 bf(12172);
 bf(12160);
 bf(12148);
 bf(12136);
 bf(12124);
 bf(12112);
 bf(12100);
 bf(12088);
 bf(12076);
 bf(12064);
 bf(12052);
 bf(12040);
 bf(12028);
 bf(12016);
 bf(12004);
 bf(11992);
 bf(11980);
 bf(11968);
 bf(11956);
 bf(11944);
 return;
}

function Tn(a) {
 a = a | 0;
 nf(11408);
 nf(11396);
 nf(11384);
 nf(11372);
 nf(11360);
 nf(11348);
 nf(11336);
 nf(11324);
 nf(11312);
 nf(11300);
 nf(11288);
 nf(11276);
 nf(11264);
 nf(11252);
 nf(11240);
 nf(11228);
 nf(11216);
 nf(11204);
 nf(11192);
 nf(11180);
 nf(11168);
 nf(11156);
 nf(11144);
 nf(11132);
 return;
}

function Sn(a) {
 a = a | 0;
 bf(11116);
 bf(11104);
 bf(11092);
 bf(11080);
 bf(11068);
 bf(11056);
 bf(11044);
 bf(11032);
 bf(11020);
 bf(11008);
 bf(10996);
 bf(10984);
 bf(10972);
 bf(10960);
 bf(10948);
 bf(10936);
 bf(10924);
 bf(10912);
 bf(10900);
 bf(10888);
 bf(10876);
 bf(10864);
 bf(10852);
 bf(10840);
 return;
}

function ye(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 f = i;
 i = i + 16 | 0;
 h = f + 4 | 0;
 g = f;
 Ef(b);
 c[b >> 2] = 7872;
 c[b + 32 >> 2] = d;
 c[b + 40 >> 2] = e;
 c[b + 48 >> 2] = -1;
 a[b + 52 >> 0] = 0;
 Lk(h, b + 4 | 0);
 c[g >> 2] = c[h >> 2];
 Ue(b, g);
 Mk(g);
 i = f;
 return;
}

function wo(b, c, d) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0;
 if ((c | 0) < (b | 0) & (b | 0) < (c + d | 0)) {
  e = b;
  c = c + d | 0;
  b = b + d | 0;
  while ((d | 0) > 0) {
   b = b - 1 | 0;
   c = c - 1 | 0;
   d = d - 1 | 0;
   a[b >> 0] = a[c >> 0] | 0;
  }
  b = e;
 } else uo(b, c, d) | 0;
 return b | 0;
}

function Ae(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 f = i;
 i = i + 16 | 0;
 h = f + 4 | 0;
 g = f;
 Tf(b);
 c[b >> 2] = 7744;
 c[b + 32 >> 2] = d;
 c[b + 40 >> 2] = e;
 c[b + 48 >> 2] = -1;
 a[b + 52 >> 0] = 0;
 Lk(h, b + 4 | 0);
 c[g >> 2] = c[h >> 2];
 Je(b, g);
 Mk(g);
 i = f;
 return;
}

function zo(a, b) {
 a = a | 0;
 b = b | 0;
 var c = 0, d = 0, e = 0, f = 0;
 f = a & 65535;
 e = b & 65535;
 c = $(e, f) | 0;
 d = a >>> 16;
 a = (c >>> 16) + ($(e, d) | 0) | 0;
 e = b >>> 16;
 b = $(e, f) | 0;
 return (D = (a >>> 16) + ($(e, d) | 0) + (((a & 65535) + b | 0) >>> 16) | 0, a + b << 16 | c & 65535 | 0) | 0;
}

function ti(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Ym(d, a, f, g, 4) | 0;
 if (!(c[f >> 2] & 4)) c[b >> 2] = a + -1900;
 i = h;
 return;
}

function Si(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Zm(d, a, f, g, 4) | 0;
 if (!(c[f >> 2] & 4)) c[b >> 2] = a + -1900;
 i = h;
 return;
}

function Ad(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 f = $(d, b) | 0;
 if ((c[e + 76 >> 2] | 0) > -1) {
  g = (Kd(e) | 0) == 0;
  a = zd(a, f, e) | 0;
  if (!g) Ld(e);
 } else a = zd(a, f, e) | 0;
 if ((a | 0) != (f | 0)) d = (a >>> 0) / (b >>> 0) | 0;
 return d | 0;
}

function wc(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0;
 h = c[a + 4 >> 2] | 0;
 g = h >> 8;
 if (h & 1) g = c[(c[d >> 2] | 0) + g >> 2] | 0;
 a = c[a >> 2] | 0;
 qb[c[(c[a >> 2] | 0) + 24 >> 2] & 3](a, b, d + g | 0, (h & 2 | 0) != 0 ? e : 2, f);
 return;
}

function se(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0;
 if (a) {
  d = $(b, a) | 0;
  if ((b | a) >>> 0 > 65535) d = ((d >>> 0) / (a >>> 0) | 0 | 0) == (b | 0) ? d : -1;
 } else d = 0;
 b = qe(d) | 0;
 if (!b) return b | 0;
 if (!(c[b + -4 >> 2] & 3)) return b | 0;
 ro(b | 0, 0, d | 0) | 0;
 return b | 0;
}

function jl(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 if ((d | 0) != (e | 0)) {
  b = d;
  do {
   d = a[b >> 0] | 0;
   if (d << 24 >> 24 > -1) d = c[(c[(Oc() | 0) >> 2] | 0) + (d << 24 >> 24 << 2) >> 2] & 255;
   a[b >> 0] = d;
   b = b + 1 | 0;
  } while ((b | 0) != (e | 0));
 }
 return e | 0;
}

function hl(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 if ((d | 0) != (e | 0)) {
  b = d;
  do {
   d = a[b >> 0] | 0;
   if (d << 24 >> 24 > -1) d = c[(c[(Pc() | 0) >> 2] | 0) + (d << 24 >> 24 << 2) >> 2] & 255;
   a[b >> 0] = d;
   b = b + 1 | 0;
  } while ((b | 0) != (e | 0));
 }
 return e | 0;
}

function yo(b) {
 b = b | 0;
 var c = 0;
 c = a[m + (b & 255) >> 0] | 0;
 if ((c | 0) < 8) return c | 0;
 c = a[m + (b >> 8 & 255) >> 0] | 0;
 if ((c | 0) < 8) return c + 8 | 0;
 c = a[m + (b >> 16 & 255) >> 0] | 0;
 if ((c | 0) < 8) return c + 16 | 0;
 return (a[m + (b >>> 24) >> 0] | 0) + 24 | 0;
}

function Al(a) {
 a = a | 0;
 var b = 0, d = 0;
 a = a + 8 | 0;
 b = cd(c[a >> 2] | 0) | 0;
 d = qd(0, 0, 4) | 0;
 if (b) cd(b) | 0;
 if (!d) {
  a = c[a >> 2] | 0;
  if (a) {
   a = cd(a) | 0;
   if (!a) a = 0; else {
    cd(a) | 0;
    a = 0;
   }
  } else a = 1;
 } else a = -1;
 return a | 0;
}

function Wb(a) {
 a = a | 0;
 var b = 0;
 b = (a | 0) == 0 ? 1 : a;
 a = qe(b) | 0;
 a : do if (!a) {
  while (1) {
   a = dc() | 0;
   if (!a) break;
   yb[a & 3]();
   a = qe(b) | 0;
   if (a) break a;
  }
  b = Fa(4) | 0;
  c[b >> 2] = 2156;
  db(b | 0, 8, 1);
 } while (0);
 return a | 0;
}

function Ue(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 f = Ok(d, 9396) | 0;
 e = b + 36 | 0;
 c[e >> 2] = f;
 d = b + 44 | 0;
 c[d >> 2] = wb[c[(c[f >> 2] | 0) + 24 >> 2] & 63](f) | 0;
 e = c[e >> 2] | 0;
 a[b + 53 >> 0] = (wb[c[(c[e >> 2] | 0) + 28 >> 2] & 63](e) | 0) & 1;
 return;
}

function Je(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 f = Ok(d, 9404) | 0;
 e = b + 36 | 0;
 c[e >> 2] = f;
 d = b + 44 | 0;
 c[d >> 2] = wb[c[(c[f >> 2] | 0) + 24 >> 2] & 63](f) | 0;
 e = c[e >> 2] | 0;
 a[b + 53 >> 0] = (wb[c[(c[e >> 2] | 0) + 28 >> 2] & 63](e) | 0) & 1;
 return;
}

function wf() {
 var a = 0, b = 0, d = 0;
 b = i;
 i = i + 16 | 0;
 a = b;
 (Ja(1, a | 0) | 0) != 0;
 d = c[a >> 2] | 0;
 a = c[a + 4 >> 2] | 0;
 d = Co(d | 0, ((d | 0) < 0) << 31 >> 31 | 0, 1e9, 0) | 0;
 a = so(d | 0, D | 0, a | 0, ((a | 0) < 0) << 31 >> 31 | 0) | 0;
 i = b;
 return a | 0;
}

function $n(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0;
 if (d >>> 0 > 1073741823) Ub(b);
 e = b + 128 | 0;
 if (d >>> 0 < 29 & (a[e >> 0] | 0) == 0) {
  a[e >> 0] = 1;
  e = b + 16 | 0;
 } else e = Wb(d << 2) | 0;
 c[b + 4 >> 2] = e;
 c[b >> 2] = e;
 c[b + 8 >> 2] = e + (d << 2);
 return;
}

function qc(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 g = c[a + 4 >> 2] | 0;
 f = g >> 8;
 if (g & 1) f = c[(c[d >> 2] | 0) + f >> 2] | 0;
 a = c[a >> 2] | 0;
 Eb[c[(c[a >> 2] | 0) + 28 >> 2] & 7](a, b, d + f | 0, (g & 2 | 0) != 0 ? e : 2);
 return;
}

function zf(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0;
 d = c[a + 40 >> 2] | 0;
 e = a + 32 | 0;
 f = a + 36 | 0;
 if (d) do {
  d = d + -1 | 0;
  xb[c[(c[e >> 2] | 0) + (d << 2) >> 2] & 0](b, a, c[(c[f >> 2] | 0) + (d << 2) >> 2] | 0);
 } while ((d | 0) != 0);
 return;
}

function Pg(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0;
 if ((b | 0) == (d | 0)) a = 0; else {
  a = 0;
  do {
   a = (c[b >> 2] | 0) + (a << 4) | 0;
   e = a & -268435456;
   a = (e >>> 24 | e) ^ a;
   b = b + 4 | 0;
  } while ((b | 0) != (d | 0));
 }
 return a | 0;
}

function Kg(b, c, d) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0;
 if ((c | 0) == (d | 0)) b = 0; else {
  b = 0;
  do {
   b = (a[c >> 0] | 0) + (b << 4) | 0;
   e = b & -268435456;
   b = (e >>> 24 | e) ^ b;
   c = c + 1 | 0;
  } while ((c | 0) != (d | 0));
 }
 return b | 0;
}

function cc() {
 var a = 0, b = 0;
 a = Vb() | 0;
 if (((a | 0) != 0 ? (b = c[a >> 2] | 0, (b | 0) != 0) : 0) ? (a = b + 48 | 0, (c[a >> 2] & -256 | 0) == 1126902528 ? (c[a + 4 >> 2] | 0) == 1129074247 : 0) : 0) bc(c[b + 12 >> 2] | 0);
 b = c[536] | 0;
 c[536] = b + 0;
 bc(b);
}

function nl(b, c, d, e, f) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 if ((c | 0) != (d | 0)) while (1) {
  b = a[c >> 0] | 0;
  a[f >> 0] = b << 24 >> 24 > -1 ? b : e;
  c = c + 1 | 0;
  if ((c | 0) == (d | 0)) break; else f = f + 1 | 0;
 }
 return d | 0;
}

function Uc(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0;
 c[a + 104 >> 2] = b;
 d = c[a + 4 >> 2] | 0;
 e = c[a + 8 >> 2] | 0;
 f = e - d | 0;
 c[a + 108 >> 2] = f;
 if ((b | 0) != 0 & (f | 0) > (b | 0)) c[a + 100 >> 2] = d + b; else c[a + 100 >> 2] = e;
 return;
}

function Lb(b) {
 b = b | 0;
 a[k >> 0] = a[b >> 0];
 a[k + 1 >> 0] = a[b + 1 >> 0];
 a[k + 2 >> 0] = a[b + 2 >> 0];
 a[k + 3 >> 0] = a[b + 3 >> 0];
 a[k + 4 >> 0] = a[b + 4 >> 0];
 a[k + 5 >> 0] = a[b + 5 >> 0];
 a[k + 6 >> 0] = a[b + 6 >> 0];
 a[k + 7 >> 0] = a[b + 7 >> 0];
}

function Ac(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 if ((a | 0) == (c[b + 8 >> 2] | 0)) tc(0, b, d, e, f); else {
  a = c[a + 8 >> 2] | 0;
  Bb[c[(c[a >> 2] | 0) + 20 >> 2] & 7](a, b, d, e, f, g);
 }
 return;
}

function me(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = a + 20 | 0;
 f = c[e >> 2] | 0;
 a = (c[a + 16 >> 2] | 0) - f | 0;
 a = a >>> 0 > d >>> 0 ? d : a;
 uo(f | 0, b | 0, a | 0) | 0;
 c[e >> 2] = (c[e >> 2] | 0) + a;
 return d | 0;
}

function wd() {
 var a = 0, b = 0, d = 0;
 b = 136;
 b = Co(c[b >> 2] | 0, c[b + 4 >> 2] | 0, 1284865837, 1481765933) | 0;
 b = so(b | 0, D | 0, 1, 0) | 0;
 a = D;
 d = 136;
 c[d >> 2] = b;
 c[d + 4 >> 2] = a;
 a = to(b | 0, a | 0, 33) | 0;
 return a | 0;
}

function Vd(a) {
 a = a | 0;
 var b = 0, e = 0;
 e = i;
 i = i + 16 | 0;
 b = e;
 if ((c[a + 8 >> 2] | 0) == 0 ? (Td(a) | 0) != 0 : 0) b = -1; else if ((pb[c[a + 32 >> 2] & 31](a, b, 1) | 0) == 1) b = d[b >> 0] | 0; else b = -1;
 i = e;
 return b | 0;
}

function Cc(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 f = i;
 i = i + 16 | 0;
 e = f;
 c[e >> 2] = c[d >> 2];
 a = pb[c[(c[a >> 2] | 0) + 16 >> 2] & 31](a, b, e) | 0;
 if (a) c[d >> 2] = c[e >> 2];
 i = f;
 return a & 1 | 0;
}

function sg(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0;
 a[b >> 0] = 0;
 c[b + 4 >> 2] = d;
 e = c[(c[d >> 2] | 0) + -12 >> 2] | 0;
 if (!(c[d + (e + 16) >> 2] | 0)) {
  e = c[d + (e + 72) >> 2] | 0;
  if (e) ig(e) | 0;
  a[b >> 0] = 1;
 }
 return;
}

function Bg(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0;
 a[b >> 0] = 0;
 c[b + 4 >> 2] = d;
 e = c[(c[d >> 2] | 0) + -12 >> 2] | 0;
 if (!(c[d + (e + 16) >> 2] | 0)) {
  e = c[d + (e + 72) >> 2] | 0;
  if (e) ng(e) | 0;
  a[b >> 0] = 1;
 }
 return;
}

function dd(a, b) {
 a = +a;
 b = +b;
 var d = 0, e = 0;
 h[k >> 3] = a;
 e = c[k >> 2] | 0;
 d = c[k + 4 >> 2] | 0;
 h[k >> 3] = b;
 d = c[k + 4 >> 2] & -2147483648 | d & 2147483647;
 c[k >> 2] = e;
 c[k + 4 >> 2] = d;
 return +(+h[k >> 3]);
}

function Vm(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0;
 g = i;
 i = i + 16 | 0;
 h = g;
 c[h >> 2] = f;
 f = cd(d) | 0;
 d = Id(a, b, e, h) | 0;
 if (f) cd(f) | 0;
 i = g;
 return d | 0;
}

function be(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0;
 if (d) {
  e = a;
  while (1) {
   d = d + -1 | 0;
   c[e >> 2] = c[b >> 2];
   if (!d) break; else {
    b = b + 4 | 0;
    e = e + 4 | 0;
   }
  }
 }
 return a | 0;
}

function Nk(a) {
 a = a | 0;
 var b = 0, d = 0;
 d = i;
 i = i + 16 | 0;
 b = d;
 if ((c[a >> 2] | 0) != -1) {
  c[b >> 2] = a;
  c[b + 4 >> 2] = 99;
  c[b + 8 >> 2] = 0;
  oo(a, b, 100);
 }
 i = d;
 return (c[a + 4 >> 2] | 0) + -1 | 0;
}

function Ro(a, b, c, d, e, f, g, h, i) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 return zb[a & 15](b | 0, c | 0, d | 0, e | 0, f | 0, g | 0, h | 0, i | 0) | 0;
}

function ll(b, c, d, e) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 if ((c | 0) != (d | 0)) while (1) {
  a[e >> 0] = a[c >> 0] | 0;
  c = c + 1 | 0;
  if ((c | 0) == (d | 0)) break; else e = e + 1 | 0;
 }
 return d | 0;
}

function dl(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 c[b + 4 >> 2] = f + -1;
 c[b >> 2] = 9352;
 f = b + 8 | 0;
 c[f >> 2] = d;
 a[b + 12 >> 0] = e & 1;
 if (!d) c[f >> 2] = c[(Nc() | 0) >> 2];
 return;
}

function al(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 if ((d | 0) != (e | 0)) while (1) {
  c[f >> 2] = a[d >> 0];
  d = d + 1 | 0;
  if ((d | 0) == (e | 0)) break; else f = f + 4 | 0;
 }
 return e | 0;
}

function pc(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 if ((a | 0) == (c[b + 8 >> 2] | 0)) nc(0, b, d, e); else {
  a = c[a + 8 >> 2] | 0;
  Eb[c[(c[a >> 2] | 0) + 28 >> 2] & 7](a, b, d, e);
 }
 return;
}

function Xn(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0;
 d = a + 4 | 0;
 a = b;
 b = c[d >> 2] | 0;
 do {
  c[b >> 2] = 0;
  b = (c[d >> 2] | 0) + 4 | 0;
  c[d >> 2] = b;
  a = a + -1 | 0;
 } while ((a | 0) != 0);
 return;
}

function _e(b, d) {
 b = b | 0;
 d = d | 0;
 if (!(a[d >> 0] & 1)) {
  c[b >> 2] = c[d >> 2];
  c[b + 4 >> 2] = c[d + 4 >> 2];
  c[b + 8 >> 2] = c[d + 8 >> 2];
 } else $e(b, c[d + 8 >> 2] | 0, c[d + 4 >> 2] | 0);
 return;
}

function Wm(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 f = i;
 i = i + 16 | 0;
 g = f;
 c[g >> 2] = e;
 e = cd(b) | 0;
 b = Fd(a, d, g) | 0;
 if (e) cd(e) | 0;
 i = f;
 return b | 0;
}

function Km(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 f = i;
 i = i + 16 | 0;
 g = f;
 c[g >> 2] = e;
 e = cd(b) | 0;
 b = Jd(a, d, g) | 0;
 if (e) cd(e) | 0;
 i = f;
 return b | 0;
}

function Jn(a) {
 a = a | 0;
 var b = 0, d = 0;
 d = a + 4 | 0;
 b = c[d >> 2] | 0;
 d = c[d + 4 >> 2] | 0;
 a = (c[a >> 2] | 0) + (d >> 1) | 0;
 if (d & 1) b = c[(c[a >> 2] | 0) + b >> 2] | 0;
 sb[b & 127](a);
 return;
}

function Ob(a) {
 a = a | 0;
 switch (a | 0) {
 case 1:
  {
   a = 1;
   return a | 0;
  }
 case 0:
  {
   a = 0;
   return a | 0;
  }
 default:
  return (Ob(a + -1 | 0) | 0) + (Ob(a + -2 | 0) | 0) | 0;
 }
 return 0;
}

function km(a) {
 a = a | 0;
 switch (c[a + 4 >> 2] & 74 | 0) {
 case 64:
  {
   a = 8;
   break;
  }
 case 8:
  {
   a = 16;
   break;
  }
 case 0:
  {
   a = 0;
   break;
  }
 default:
  a = 10;
 }
 return a | 0;
}

function ag(a) {
 a = a | 0;
 var b = 0;
 if ((wb[c[(c[a >> 2] | 0) + 36 >> 2] & 63](a) | 0) == -1) a = -1; else {
  b = a + 12 | 0;
  a = c[b >> 2] | 0;
  c[b >> 2] = a + 4;
  a = c[a >> 2] | 0;
 }
 return a | 0;
}

function Nf(a) {
 a = a | 0;
 var b = 0;
 if ((wb[c[(c[a >> 2] | 0) + 36 >> 2] & 63](a) | 0) == -1) a = -1; else {
  b = a + 12 | 0;
  a = c[b >> 2] | 0;
  c[b >> 2] = a + 1;
  a = d[a >> 0] | 0;
 }
 return a | 0;
}

function Eo(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 g = i;
 i = i + 16 | 0;
 f = g | 0;
 Fo(a, b, d, e, f) | 0;
 i = g;
 return (D = c[f + 4 >> 2] | 0, c[f >> 2] | 0) | 0;
}

function Xl(a, b) {
 a = a | 0;
 b = b | 0;
 c[a + 4 >> 2] = b + -1;
 c[a >> 2] = 9540;
 c[a + 8 >> 2] = 46;
 c[a + 12 >> 2] = 44;
 a = a + 16 | 0;
 c[a >> 2] = 0;
 c[a + 4 >> 2] = 0;
 c[a + 8 >> 2] = 0;
 return;
}

function Qe(b, d) {
 b = b | 0;
 d = d | 0;
 wb[c[(c[b >> 2] | 0) + 24 >> 2] & 63](b) | 0;
 d = Ok(d, 9396) | 0;
 c[b + 36 >> 2] = d;
 a[b + 44 >> 0] = (wb[c[(c[d >> 2] | 0) + 28 >> 2] & 63](d) | 0) & 1;
 return;
}

function Fe(b, d) {
 b = b | 0;
 d = d | 0;
 wb[c[(c[b >> 2] | 0) + 24 >> 2] & 63](b) | 0;
 d = Ok(d, 9404) | 0;
 c[b + 36 >> 2] = d;
 a[b + 44 >> 0] = (wb[c[(c[d >> 2] | 0) + 28 >> 2] & 63](d) | 0) & 1;
 return;
}

function Wl(b, d) {
 b = b | 0;
 d = d | 0;
 c[b + 4 >> 2] = d + -1;
 c[b >> 2] = 9500;
 a[b + 8 >> 0] = 46;
 a[b + 9 >> 0] = 44;
 b = b + 12 | 0;
 c[b >> 2] = 0;
 c[b + 4 >> 2] = 0;
 c[b + 8 >> 2] = 0;
 return;
}

function Wf(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 b = a;
 c[b >> 2] = 0;
 c[b + 4 >> 2] = 0;
 b = a + 8 | 0;
 c[b >> 2] = -1;
 c[b + 4 >> 2] = -1;
 return;
}

function Hf(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 b = a;
 c[b >> 2] = 0;
 c[b + 4 >> 2] = 0;
 b = a + 8 | 0;
 c[b >> 2] = -1;
 c[b + 4 >> 2] = -1;
 return;
}

function Ef(a) {
 a = a | 0;
 c[a >> 2] = 7936;
 Kk(a + 4 | 0);
 a = a + 8 | 0;
 c[a >> 2] = 0;
 c[a + 4 >> 2] = 0;
 c[a + 8 >> 2] = 0;
 c[a + 12 >> 2] = 0;
 c[a + 16 >> 2] = 0;
 c[a + 20 >> 2] = 0;
 return;
}

function Co(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = a;
 f = c;
 c = zo(e, f) | 0;
 a = D;
 return (D = ($(b, f) | 0) + ($(d, e) | 0) + a | a & 0, c | 0 | 0) | 0;
}

function Tf(a) {
 a = a | 0;
 c[a >> 2] = 8e3;
 Kk(a + 4 | 0);
 a = a + 8 | 0;
 c[a >> 2] = 0;
 c[a + 4 >> 2] = 0;
 c[a + 8 >> 2] = 0;
 c[a + 12 >> 2] = 0;
 c[a + 16 >> 2] = 0;
 c[a + 20 >> 2] = 0;
 return;
}

function Rn(a) {
 a = a | 0;
 nf(10484);
 nf(10472);
 nf(10460);
 nf(10448);
 nf(10436);
 nf(10424);
 nf(10412);
 nf(10400);
 nf(10388);
 nf(10376);
 nf(10364);
 nf(10352);
 nf(10340);
 nf(10328);
 return;
}

function Qn(a) {
 a = a | 0;
 bf(10312);
 bf(10300);
 bf(10288);
 bf(10276);
 bf(10264);
 bf(10252);
 bf(10240);
 bf(10228);
 bf(10216);
 bf(10204);
 bf(10192);
 bf(10180);
 bf(10168);
 bf(10156);
 return;
}

function Go(a, b, c, d, e, f, g, h) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 return ob[a & 7](b | 0, c | 0, d | 0, e | 0, f | 0, g | 0, h | 0) | 0;
}

function de(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0;
 if (d) {
  e = a;
  while (1) {
   d = d + -1 | 0;
   c[e >> 2] = b;
   if (!d) break; else e = e + 4 | 0;
  }
 }
 return a | 0;
}

function bd(b, c, d) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 if (((a[c >> 0] | 0) != 0 ? (_d(c, 21365) | 0) != 0 : 0) ? (_d(c, 16803) | 0) != 0 : 0) d = 0; else if (!d) d = se(1, 4) | 0;
 return d | 0;
}

function mo(a) {
 a = a | 0;
 var b = 0, d = 0;
 d = a + 4 | 0;
 b = c[d >> 2] | 0;
 c[d >> 2] = b + -1;
 if (!b) {
  sb[c[(c[a >> 2] | 0) + 8 >> 2] & 127](a);
  a = 1;
 } else a = 0;
 return a | 0;
}

function xo(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 if ((c | 0) < 32) {
  D = b >> c;
  return a >>> c | (b & (1 << c) - 1) << 32 - c;
 }
 D = (b | 0) < 0 ? -1 : 0;
 return b >> c - 32 | 0;
}

function Cd(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 f = i;
 i = i + 16 | 0;
 g = f;
 c[g >> 2] = e;
 e = Id(a, b, d, g) | 0;
 i = f;
 return e | 0;
}

function yf(a) {
 a = a | 0;
 c[a >> 2] = 8224;
 zf(a, 0);
 Mk(a + 28 | 0);
 re(c[a + 32 >> 2] | 0);
 re(c[a + 36 >> 2] | 0);
 re(c[a + 48 >> 2] | 0);
 re(c[a + 60 >> 2] | 0);
 return;
}

function vo(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 if ((c | 0) < 32) {
  D = b << c | (a & (1 << c) - 1 << 32 - c) >>> 32 - c;
  return a << c;
 }
 D = a << c - 32;
 return 0;
}

function Mo(a, b, c, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 return ub[a & 63](b | 0, c | 0, d | 0, e | 0, f | 0, g | 0) | 0;
}

function to(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 if ((c | 0) < 32) {
  D = b >>> c;
  return a >>> c | (b & (1 << c) - 1) << 32 - c;
 }
 D = 0;
 return b >>> c - 32 | 0;
}

function Xf(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 b = a;
 c[b >> 2] = 0;
 c[b + 4 >> 2] = 0;
 b = a + 8 | 0;
 c[b >> 2] = -1;
 c[b + 4 >> 2] = -1;
 return;
}

function If(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 b = a;
 c[b >> 2] = 0;
 c[b + 4 >> 2] = 0;
 b = a + 8 | 0;
 c[b >> 2] = -1;
 c[b + 4 >> 2] = -1;
 return;
}

function Tk(a, d, e) {
 a = a | 0;
 d = d | 0;
 e = e | 0;
 if (e >>> 0 < 128) e = (b[(c[(Nc() | 0) >> 2] | 0) + (e << 1) >> 1] & d) << 16 >> 16 != 0; else e = 0;
 return e | 0;
}

function Jo(a, b, c, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = +g;
 return rb[a & 3](b | 0, c | 0, d | 0, e | 0, f | 0, +g) | 0;
}

function ql(a, b, d, e, f, g, h, i) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 c[f >> 2] = d;
 c[i >> 2] = g;
 return 3;
}

function pl(a, b, d, e, f, g, h, i) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 c[f >> 2] = d;
 c[i >> 2] = g;
 return 3;
}

function ym(b) {
 b = b | 0;
 if ((a[1920] | 0) == 0 ? (Ba(1920) | 0) != 0 : 0) {
  lf(12840, 12792, ae(12792) | 0);
  cb(108, 12840, n | 0) | 0;
  Ia(1920);
 }
 return 12840;
}

function wm(b) {
 b = b | 0;
 if ((a[1904] | 0) == 0 ? (Ba(1904) | 0) != 0 : 0) {
  lf(12768, 12684, ae(12684) | 0);
  cb(108, 12768, n | 0) | 0;
  Ia(1904);
 }
 return 12768;
}

function um(b) {
 b = b | 0;
 if ((a[1888] | 0) == 0 ? (Ba(1888) | 0) != 0 : 0) {
  lf(12660, 12624, ae(12624) | 0);
  cb(108, 12660, n | 0) | 0;
  Ia(1888);
 }
 return 12660;
}

function sm(b) {
 b = b | 0;
 if ((a[1872] | 0) == 0 ? (Ba(1872) | 0) != 0 : 0) {
  lf(12600, 12564, ae(12564) | 0);
  cb(108, 12600, n | 0) | 0;
  Ia(1872);
 }
 return 12600;
}

function zk(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 b = Zc((a[d >> 0] & 1) == 0 ? d + 1 | 0 : c[d + 8 >> 2] | 0, 1) | 0;
 return b >>> ((b | 0) != (-1 | 0) & 1) | 0;
}

function uk(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 b = Zc((a[d >> 0] & 1) == 0 ? d + 1 | 0 : c[d + 8 >> 2] | 0, 1) | 0;
 return b >>> ((b | 0) != (-1 | 0) & 1) | 0;
}

function po() {}
function qo(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 d = b - d - (c >>> 0 > a >>> 0 | 0) >>> 0;
 return (D = d, a - c >>> 0 | 0) | 0;
}

function To(a, b, c, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 Bb[a & 7](b | 0, c | 0, d | 0, e | 0, f | 0, g | 0);
}

function Dd(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = i;
 i = i + 16 | 0;
 f = e;
 c[f >> 2] = d;
 d = Jd(a, b, f) | 0;
 i = e;
 return d | 0;
}

function Vb() {
 var a = 0, b = 0;
 a = i;
 i = i + 16 | 0;
 if (!(Wa(2296, 2) | 0)) {
  b = Sa(c[573] | 0) | 0;
  i = a;
  return b | 0;
 } else Tb(14180, a);
 return 0;
}

function Bc(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 if ((a | 0) == (c[b + 8 >> 2] | 0)) tc(0, b, d, e, f);
 return;
}

function dn(b, d) {
 b = b | 0;
 d = d | 0;
 c[b >> 2] = 0;
 c[b + 4 >> 2] = 0;
 c[b + 8 >> 2] = 0;
 a[b + 128 >> 0] = 0;
 if (d) {
  $n(b, d);
  Xn(b, d);
 }
 return;
}

function xm(b) {
 b = b | 0;
 if ((a[1912] | 0) == 0 ? (Ba(1912) | 0) != 0 : 0) {
  $e(12780, 21738, 11);
  cb(107, 12780, n | 0) | 0;
  Ia(1912);
 }
 return 12780;
}

function vm(b) {
 b = b | 0;
 if ((a[1896] | 0) == 0 ? (Ba(1896) | 0) != 0 : 0) {
  $e(12672, 21717, 20);
  cb(107, 12672, n | 0) | 0;
  Ia(1896);
 }
 return 12672;
}

function tm(b) {
 b = b | 0;
 if ((a[1880] | 0) == 0 ? (Ba(1880) | 0) != 0 : 0) {
  $e(12612, 21708, 8);
  cb(107, 12612, n | 0) | 0;
  Ia(1880);
 }
 return 12612;
}

function rm(b) {
 b = b | 0;
 if ((a[1864] | 0) == 0 ? (Ba(1864) | 0) != 0 : 0) {
  $e(12552, 21699, 8);
  cb(107, 12552, n | 0) | 0;
  Ia(1864);
 }
 return 12552;
}

function Nd(a) {
 a = a | 0;
 var b = 0, d = 0;
 b = i;
 i = i + 16 | 0;
 d = b;
 c[d >> 2] = c[a + 60 >> 2];
 a = Wc(fb(6, d | 0) | 0) | 0;
 i = b;
 return a | 0;
}

function Vo(a, b, c, d, e, f) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 return Db[a & 31](b | 0, c | 0, d | 0, e | 0, f | 0) | 0;
}

function Dl(a) {
 a = a | 0;
 a = c[a + 8 >> 2] | 0;
 if (a) {
  a = cd(a) | 0;
  if (!a) a = 4; else {
   cd(a) | 0;
   a = 4;
  }
 } else a = 1;
 return a | 0;
}

function so(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 c = a + c >>> 0;
 return (D = b + d + (c >>> 0 < a >>> 0 | 0) >>> 0, c | 0) | 0;
}

function No(a, b, c, d, e, f) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = +f;
 return vb[a & 7](b | 0, c | 0, d | 0, e | 0, +f) | 0;
}

function Tb(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0;
 d = i;
 i = i + 16 | 0;
 c[d >> 2] = b;
 b = c[638] | 0;
 Gd(b, a, d) | 0;
 yd(10, b) | 0;
 Aa();
}

function gp(a, b, c, d, e, f, g, h) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 ca(11);
 return 0;
}

function zm(a) {
 a = a | 0;
 var b = 0;
 c[a >> 2] = 9420;
 a = a + 8 | 0;
 b = c[a >> 2] | 0;
 if ((b | 0) != (ch() | 0)) _c(c[a >> 2] | 0);
 return;
}

function il(a, b) {
 a = a | 0;
 b = b | 0;
 if (b << 24 >> 24 > -1) b = c[(c[(Oc() | 0) >> 2] | 0) + (b << 24 >> 24 << 2) >> 2] & 255;
 return b | 0;
}

function el(b) {
 b = b | 0;
 var d = 0;
 c[b >> 2] = 9352;
 d = c[b + 8 >> 2] | 0;
 if ((d | 0) != 0 ? (a[b + 12 >> 0] | 0) != 0 : 0) Yb(d);
 return;
}

function Io(a, b, c, d, e, f) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 qb[a & 3](b | 0, c | 0, d | 0, e | 0, f | 0);
}

function Kb(b) {
 b = b | 0;
 a[k >> 0] = a[b >> 0];
 a[k + 1 >> 0] = a[b + 1 >> 0];
 a[k + 2 >> 0] = a[b + 2 >> 0];
 a[k + 3 >> 0] = a[b + 3 >> 0];
}

function Hc(a) {
 a = a | 0;
 var b = 0;
 b = i;
 i = i + 16 | 0;
 re(a);
 if (!(bb(c[573] | 0, 0) | 0)) {
  i = b;
  return;
 } else Tb(14334, b);
}

function gl(a, b) {
 a = a | 0;
 b = b | 0;
 if (b << 24 >> 24 > -1) b = c[(c[(Pc() | 0) >> 2] | 0) + ((b & 255) << 2) >> 2] & 255;
 return b | 0;
}

function ch() {
 if ((a[1272] | 0) == 0 ? (Ba(1272) | 0) != 0 : 0) {
  c[2475] = bd(2147483647, 21365, 0) | 0;
  Ia(1272);
 }
 return c[2475] | 0;
}

function ul(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 a = d - c | 0;
 return (a >>> 0 < e >>> 0 ? a : e) | 0;
}

function So(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 return Ab[a & 7](b | 0, c | 0, d | 0, e | 0) | 0;
}

function Xo(a, b, c, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 ca(0);
 return 0;
}

function oc(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 if ((a | 0) == (c[b + 8 >> 2] | 0)) nc(0, b, d, e);
 return;
}

function Jk() {
 if ((a[1760] | 0) == 0 ? (Ba(1760) | 0) != 0 : 0) {
  Ik() | 0;
  c[2527] = 10104;
  Ia(1760);
 }
 return c[2527] | 0;
}

function Dk() {
 if ((a[1592] | 0) == 0 ? (Ba(1592) | 0) != 0 : 0) {
  Hk() | 0;
  c[2525] = 10096;
  Ia(1592);
 }
 return c[2525] | 0;
}

function cd(a) {
 a = a | 0;
 var b = 0, d = 0;
 b = (Ua() | 0) + 176 | 0;
 d = c[b >> 2] | 0;
 if (a) c[b >> 2] = a;
 return d | 0;
}

function ae(a) {
 a = a | 0;
 var b = 0;
 b = a;
 while (1) if (!(c[b >> 2] | 0)) break; else b = b + 4 | 0;
 return b - a >> 2 | 0;
}

function Zk(a, b) {
 a = a | 0;
 b = b | 0;
 if (b >>> 0 < 128) b = c[(c[(Oc() | 0) >> 2] | 0) + (b << 2) >> 2] | 0;
 return b | 0;
}

function Xk(a, b) {
 a = a | 0;
 b = b | 0;
 if (b >>> 0 < 128) b = c[(c[(Pc() | 0) >> 2] | 0) + (b << 2) >> 2] | 0;
 return b | 0;
}

function Ok(a, b) {
 a = a | 0;
 b = b | 0;
 a = c[a >> 2] | 0;
 b = Nk(b) | 0;
 return c[(c[a + 8 >> 2] | 0) + (b << 2) >> 2] | 0;
}

function Af(a) {
 a = a | 0;
 var b = 0, d = 0;
 d = i;
 i = i + 16 | 0;
 b = d;
 Lk(b, a + 28 | 0);
 i = d;
 return c[b >> 2] | 0;
}

function wj(b, c) {
 b = b | 0;
 c = c | 0;
 a[b >> 0] = 2;
 a[b + 1 >> 0] = 3;
 a[b + 2 >> 0] = 0;
 a[b + 3 >> 0] = 4;
 return;
}

function vj(b, c) {
 b = b | 0;
 c = c | 0;
 a[b >> 0] = 2;
 a[b + 1 >> 0] = 3;
 a[b + 2 >> 0] = 0;
 a[b + 3 >> 0] = 4;
 return;
}

function lj(b, c) {
 b = b | 0;
 c = c | 0;
 a[b >> 0] = 2;
 a[b + 1 >> 0] = 3;
 a[b + 2 >> 0] = 0;
 a[b + 3 >> 0] = 4;
 return;
}

function kj(b, c) {
 b = b | 0;
 c = c | 0;
 a[b >> 0] = 2;
 a[b + 1 >> 0] = 3;
 a[b + 2 >> 0] = 0;
 a[b + 3 >> 0] = 4;
 return;
}

function Wo(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 Eb[a & 7](b | 0, c | 0, d | 0, e | 0);
}

function Sj(b, c) {
 b = b | 0;
 c = c | 0;
 a[b >> 0] = 2;
 a[b + 1 >> 0] = 3;
 a[b + 2 >> 0] = 0;
 a[b + 3 >> 0] = 4;
 return;
}

function Rj(b, c) {
 b = b | 0;
 c = c | 0;
 a[b >> 0] = 2;
 a[b + 1 >> 0] = 3;
 a[b + 2 >> 0] = 0;
 a[b + 3 >> 0] = 4;
 return;
}

function Hj(b, c) {
 b = b | 0;
 c = c | 0;
 a[b >> 0] = 2;
 a[b + 1 >> 0] = 3;
 a[b + 2 >> 0] = 0;
 a[b + 3 >> 0] = 4;
 return;
}

function Gj(b, c) {
 b = b | 0;
 c = c | 0;
 a[b >> 0] = 2;
 a[b + 1 >> 0] = 3;
 a[b + 2 >> 0] = 0;
 a[b + 3 >> 0] = 4;
 return;
}

function Mc(a) {
 a = a | 0;
 if ((a + -48 | 0) >>> 0 < 10) a = 1; else a = ((a | 32) + -97 | 0) >>> 0 < 6;
 return a & 1 | 0;
}

function Sl(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 return Pn(c, d, e, 1114111, 0) | 0;
}

function Kl(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 return Mn(c, d, e, 1114111, 0) | 0;
}

function bp(a, b, c, d, e, f) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 ca(6);
 return 0;
}

function Gc() {
 var a = 0;
 a = i;
 i = i + 16 | 0;
 if (!(za(2292, 94) | 0)) {
  i = a;
  return;
 } else Tb(14284, a);
}

function _o(a, b, c, d, e, f) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = +f;
 ca(3);
 return 0;
}

function Ho(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 return pb[a & 31](b | 0, c | 0, d | 0) | 0;
}

function Vi(a) {
 a = a | 0;
 var b = 0;
 b = c[a >> 2] | 0;
 if ((b | 0) != (ch() | 0)) _c(c[a >> 2] | 0);
 return;
}

function rl(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 c[f >> 2] = d;
 return 3;
}

function Wc(a) {
 a = a | 0;
 if (a >>> 0 > 4294963200) {
  c[(Rc() | 0) >> 2] = 0 - a;
  a = -1;
 }
 return a | 0;
}

function Pl(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 c[f >> 2] = d;
 return 3;
}

function Hl(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 c[f >> 2] = d;
 return 3;
}

function ip(a, b, c, d, e, f) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 ca(13);
}

function Yd(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 a = le(a, b, c, 0, -2147483648) | 0;
 return a | 0;
}

function Rc() {
 var a = 0;
 if (!(c[576] | 0)) a = 2580; else a = c[(Ua() | 0) + 60 >> 2] | 0;
 return a | 0;
}

function Kc(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 a = Yd(a, b, c) | 0;
 return a | 0;
}

function Jc(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 a = Xd(a, b, c) | 0;
 return a | 0;
}

function Rk(a) {
 a = a | 0;
 var b = 0;
 b = c[2331] | 0;
 c[2331] = b + 1;
 c[a + 4 >> 2] = b + 1;
 return;
}

function sj(a, b) {
 a = a | 0;
 b = b | 0;
 c[a >> 2] = 0;
 c[a + 4 >> 2] = 0;
 c[a + 8 >> 2] = 0;
 return;
}

function rj(a, b) {
 a = a | 0;
 b = b | 0;
 c[a >> 2] = 0;
 c[a + 4 >> 2] = 0;
 c[a + 8 >> 2] = 0;
 return;
}

function qj(a, b) {
 a = a | 0;
 b = b | 0;
 c[a >> 2] = 0;
 c[a + 4 >> 2] = 0;
 c[a + 8 >> 2] = 0;
 return;
}

function ld(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return md(0, a, b, (c | 0) != 0 ? c : 2616) | 0;
}

function kp(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 ca(15);
 return 0;
}

function hj(a, b) {
 a = a | 0;
 b = b | 0;
 c[a >> 2] = 0;
 c[a + 4 >> 2] = 0;
 c[a + 8 >> 2] = 0;
 return;
}

function gj(a, b) {
 a = a | 0;
 b = b | 0;
 c[a >> 2] = 0;
 c[a + 4 >> 2] = 0;
 c[a + 8 >> 2] = 0;
 return;
}

function fj(a, b) {
 a = a | 0;
 b = b | 0;
 c[a >> 2] = 0;
 c[a + 4 >> 2] = 0;
 c[a + 8 >> 2] = 0;
 return;
}

function Oj(a, b) {
 a = a | 0;
 b = b | 0;
 c[a >> 2] = 0;
 c[a + 4 >> 2] = 0;
 c[a + 8 >> 2] = 0;
 return;
}

function Nj(a, b) {
 a = a | 0;
 b = b | 0;
 c[a >> 2] = 0;
 c[a + 4 >> 2] = 0;
 c[a + 8 >> 2] = 0;
 return;
}

function Mj(a, b) {
 a = a | 0;
 b = b | 0;
 c[a >> 2] = 0;
 c[a + 4 >> 2] = 0;
 c[a + 8 >> 2] = 0;
 return;
}

function Dj(a, b) {
 a = a | 0;
 b = b | 0;
 c[a >> 2] = 0;
 c[a + 4 >> 2] = 0;
 c[a + 8 >> 2] = 0;
 return;
}

function Cj(a, b) {
 a = a | 0;
 b = b | 0;
 c[a >> 2] = 0;
 c[a + 4 >> 2] = 0;
 c[a + 8 >> 2] = 0;
 return;
}

function Bj(a, b) {
 a = a | 0;
 b = b | 0;
 c[a >> 2] = 0;
 c[a + 4 >> 2] = 0;
 c[a + 8 >> 2] = 0;
 return;
}

function Po(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 xb[a & 0](b | 0, c | 0, d | 0);
}

function cp(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = +e;
 ca(7);
 return 0;
}

function Do(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 return Fo(a, b, c, d, 0) | 0;
}

function Xd(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 a = le(a, b, c, -1, -1) | 0;
 return a | 0;
}

function Kk(a) {
 a = a | 0;
 var b = 0;
 b = c[(Jk() | 0) >> 2] | 0;
 c[a >> 2] = b;
 lo(b);
 return;
}

function xf(a, b) {
 a = a | 0;
 b = b | 0;
 c[a + 16 >> 2] = (c[a + 24 >> 2] | 0) == 0 | b;
 return;
}

function bl(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return (b >>> 0 < 128 ? b & 255 : c) | 0;
}

function Dc(a) {
 a = a | 0;
 if (!a) a = 0; else a = (sc(a, 40, 88, 0) | 0) != 0;
 return a & 1 | 0;
}

function vd(a) {
 a = a | 0;
 var b = 0;
 b = 136;
 c[b >> 2] = a + -1;
 c[b + 4 >> 2] = 0;
 return;
}

function ud(a, b) {
 a = a | 0;
 b = b | 0;
 if (!a) a = 0; else a = rd(a, b, 0) | 0;
 return a | 0;
}

function ml(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return (b << 24 >> 24 > -1 ? b : c) | 0;
}

function xe(a) {
 a = a | 0;
 ig(6728) | 0;
 ig(6896) | 0;
 ng(7068) | 0;
 ng(7236) | 0;
 return;
}
function Fb(a) {
 a = a | 0;
 var b = 0;
 b = i;
 i = i + a | 0;
 i = i + 15 & -16;
 return b | 0;
}

function Zo(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 ca(2);
}

function Uo(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return Cb[a & 15](b | 0, c | 0) | 0;
}

function Og(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 vf(a, c, d);
 return;
}

function Lk(a, b) {
 a = a | 0;
 b = b | 0;
 b = c[b >> 2] | 0;
 c[a >> 2] = b;
 lo(b);
 return;
}

function Jg(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 uf(a, c, d);
 return;
}

function nd(a) {
 a = a | 0;
 if (!a) a = 1; else a = (c[a >> 2] | 0) == 0;
 return a & 1 | 0;
}

function bc(a) {
 a = a | 0;
 var b = 0;
 b = i;
 i = i + 16 | 0;
 yb[a & 3]();
 Tb(14244, b);
}

function yg(a) {
 a = a | 0;
 yf(a + ((c[(c[a >> 2] | 0) + -12 >> 2] | 0) + 4) | 0);
 return;
}

function pg(a) {
 a = a | 0;
 yf(a + ((c[(c[a >> 2] | 0) + -12 >> 2] | 0) + 4) | 0);
 return;
}

function kg(a) {
 a = a | 0;
 yf(a + ((c[(c[a >> 2] | 0) + -12 >> 2] | 0) + 8) | 0);
 return;
}

function hp(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 ca(12);
 return 0;
}

function fg(a) {
 a = a | 0;
 yf(a + ((c[(c[a >> 2] | 0) + -12 >> 2] | 0) + 8) | 0);
 return;
}

function Ik() {
 var a = 0;
 a = c[(Dk() | 0) >> 2] | 0;
 c[2526] = a;
 lo(a);
 return 10104;
}

function Yc(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 return d | 0;
}

function rg(a) {
 a = a | 0;
 qg(a + (c[(c[a >> 2] | 0) + -12 >> 2] | 0) | 0);
 return;
}

function mg(a) {
 a = a | 0;
 lg(a + (c[(c[a >> 2] | 0) + -12 >> 2] | 0) | 0);
 return;
}

function lo(a) {
 a = a | 0;
 a = a + 4 | 0;
 c[a >> 2] = (c[a >> 2] | 0) + 1;
 return;
}

function hg(a) {
 a = a | 0;
 gg(a + (c[(c[a >> 2] | 0) + -12 >> 2] | 0) | 0);
 return;
}

function Qk(a) {
 a = a | 0;
 if (a) sb[c[(c[a >> 2] | 0) + 4 >> 2] & 127](a);
 return;
}

function Ag(a) {
 a = a | 0;
 zg(a + (c[(c[a >> 2] | 0) + -12 >> 2] | 0) | 0);
 return;
}

function Lc(a) {
 a = a | 0;
 return ((a | 0) == 32 | (a + -9 | 0) >>> 0 < 5) & 1 | 0;
}

function Lo(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 tb[a & 63](b | 0, c | 0);
}

function he(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return Sd(a, b, c) | 0;
}

function Wd(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return +(+ke(a, b, 2));
}

function lp(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 ca(16);
}

function jm(a, b) {
 a = a | 0;
 b = b | 0;
 lf(a, 10132, ae(10132) | 0);
 return;
}

function hm(a, b) {
 a = a | 0;
 b = b | 0;
 lf(a, 10112, ae(10112) | 0);
 return;
}

function Eg(a) {
 a = a | 0;
 a = a + 16 | 0;
 c[a >> 2] = c[a >> 2] | 1;
 return;
}

function $c(a, b) {
 a = a | 0;
 b = b | 0;
 return (a + -48 | 0) >>> 0 < 10 | 0;
}

function nf(b) {
 b = b | 0;
 if (a[b >> 0] & 1) Xb(c[b + 8 >> 2] | 0);
 return;
}

function bf(b) {
 b = b | 0;
 if (a[b >> 0] & 1) Xb(c[b + 8 >> 2] | 0);
 return;
}

function Df(a) {
 a = a | 0;
 c[a >> 2] = 7936;
 Mk(a + 4 | 0);
 Xb(a);
 return;
}

function Sf(a) {
 a = a | 0;
 c[a >> 2] = 8e3;
 Mk(a + 4 | 0);
 Xb(a);
 return;
}

function zn(a, b) {
 a = a | 0;
 b = b | 0;
 Ek(a, b, Nk(9180) | 0);
 return;
}

function yn(a, b) {
 a = a | 0;
 b = b | 0;
 Ek(a, b, Nk(9144) | 0);
 return;
}

function xn(a, b) {
 a = a | 0;
 b = b | 0;
 Ek(a, b, Nk(9108) | 0);
 return;
}

function wn(a, b) {
 a = a | 0;
 b = b | 0;
 Ek(a, b, Nk(9072) | 0);
 return;
}

function vn(a, b) {
 a = a | 0;
 b = b | 0;
 Ek(a, b, Nk(9008) | 0);
 return;
}

function un(a, b) {
 a = a | 0;
 b = b | 0;
 Ek(a, b, Nk(8944) | 0);
 return;
}

function tn(a, b) {
 a = a | 0;
 b = b | 0;
 Ek(a, b, Nk(8880) | 0);
 return;
}

function sn(a, b) {
 a = a | 0;
 b = b | 0;
 Ek(a, b, Nk(8568) | 0);
 return;
}

function rn(a, b) {
 a = a | 0;
 b = b | 0;
 Ek(a, b, Nk(8508) | 0);
 return;
}

function qn(a, b) {
 a = a | 0;
 b = b | 0;
 Ek(a, b, Nk(8448) | 0);
 return;
}

function pn(a, b) {
 a = a | 0;
 b = b | 0;
 Ek(a, b, Nk(8376) | 0);
 return;
}

function on(a, b) {
 a = a | 0;
 b = b | 0;
 Ek(a, b, Nk(9484) | 0);
 return;
}

function nn(a, b) {
 a = a | 0;
 b = b | 0;
 Ek(a, b, Nk(9476) | 0);
 return;
}

function mn(a, b) {
 a = a | 0;
 b = b | 0;
 Ek(a, b, Nk(9468) | 0);
 return;
}

function ln(a, b) {
 a = a | 0;
 b = b | 0;
 Ek(a, b, Nk(9460) | 0);
 return;
}

function kn(a, b) {
 a = a | 0;
 b = b | 0;
 Ek(a, b, Nk(9404) | 0);
 return;
}

function jn(a, b) {
 a = a | 0;
 b = b | 0;
 Ek(a, b, Nk(9396) | 0);
 return;
}

function hn(a, b) {
 a = a | 0;
 b = b | 0;
 Ek(a, b, Nk(9328) | 0);
 return;
}

function gn(a, b) {
 a = a | 0;
 b = b | 0;
 Ek(a, b, Nk(9336) | 0);
 return;
}

function fn(a, b) {
 a = a | 0;
 b = b | 0;
 Ek(a, b, Nk(8304) | 0);
 return;
}

function en(a, b) {
 a = a | 0;
 b = b | 0;
 Ek(a, b, Nk(8264) | 0);
 return;
}

function Yo(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 ca(1);
 return 0;
}

function Gn(a, b) {
 a = a | 0;
 b = b | 0;
 Ek(a, b, Nk(9296) | 0);
 return;
}

function Fn(a, b) {
 a = a | 0;
 b = b | 0;
 Ek(a, b, Nk(9256) | 0);
 return;
}

function En(a, b) {
 a = a | 0;
 b = b | 0;
 Ek(a, b, Nk(8816) | 0);
 return;
}

function Dn(a, b) {
 a = a | 0;
 b = b | 0;
 Ek(a, b, Nk(8784) | 0);
 return;
}

function Cn(a, b) {
 a = a | 0;
 b = b | 0;
 Ek(a, b, Nk(8752) | 0);
 return;
}

function Bn(a, b) {
 a = a | 0;
 b = b | 0;
 Ek(a, b, Nk(8660) | 0);
 return;
}

function An(a, b) {
 a = a | 0;
 b = b | 0;
 Ek(a, b, Nk(9216) | 0);
 return;
}

function of(a, b) {
 a = a | 0;
 b = b | 0;
 return pf(a, b, ae(b) | 0) | 0;
}

function dc() {
 var a = 0;
 a = c[542] | 0;
 c[542] = a + 0;
 return a | 0;
}

function cf(a, b) {
 a = a | 0;
 b = b | 0;
 return df(a, b, $d(b) | 0) | 0;
}

function Jb(a, b) {
 a = a | 0;
 b = b | 0;
 if (!o) {
  o = a;
  p = b;
 }
}

function Oo(a, b) {
 a = a | 0;
 b = b | 0;
 return wb[a & 63](b | 0) | 0;
}

function _l(a) {
 a = a | 0;
 c[a >> 2] = 9540;
 bf(a + 16 | 0);
 return;
}

function Yl(a) {
 a = a | 0;
 c[a >> 2] = 9500;
 bf(a + 12 | 0);
 return;
}

function Vf(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return a | 0;
}

function Gf(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return a | 0;
}

function je(a) {
 a = a | 0;
 if (!(c[a + 68 >> 2] | 0)) Ld(a);
 return;
}

function ie(a) {
 a = a | 0;
 if (!(c[a + 68 >> 2] | 0)) Ld(a);
 return;
}

function fm(a, b) {
 a = a | 0;
 b = b | 0;
 _e(a, b + 16 | 0);
 return;
}

function em(a, b) {
 a = a | 0;
 b = b | 0;
 _e(a, b + 12 | 0);
 return;
}

function Cf(a) {
 a = a | 0;
 c[a >> 2] = 7936;
 Mk(a + 4 | 0);
 return;
}

function Rf(a) {
 a = a | 0;
 c[a >> 2] = 8e3;
 Mk(a + 4 | 0);
 return;
}

function im(a, b) {
 a = a | 0;
 b = b | 0;
 $e(a, 21472, 5);
 return;
}

function gm(a, b) {
 a = a | 0;
 b = b | 0;
 $e(a, 21467, 4);
 return;
}

function $k(a, b) {
 a = a | 0;
 b = b | 0;
 return b << 24 >> 24 | 0;
}

function Ec() {
 var a = 0;
 a = Fa(4) | 0;
 Zb(a);
 db(a | 0, 8, 1);
}

function tj(a, b) {
 a = a | 0;
 b = b | 0;
 af(a, 1, 45);
 return;
}

function ij(a, b) {
 a = a | 0;
 b = b | 0;
 af(a, 1, 45);
 return;
}

function Pj(a, b) {
 a = a | 0;
 b = b | 0;
 mf(a, 1, 45);
 return;
}

function Ej(a, b) {
 a = a | 0;
 b = b | 0;
 mf(a, 1, 45);
 return;
}

function ep(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 ca(9);
}

function Ko(a, b) {
 a = a | 0;
 b = b | 0;
 sb[a & 127](b | 0);
}

function jp(a, b) {
 a = a | 0;
 b = b | 0;
 ca(14);
 return 0;
}

function kd(a, b) {
 a = +a;
 b = b | 0;
 return +(+jd(a, b));
}

function id(a, b) {
 a = +a;
 b = b | 0;
 return +(+hd(a, b));
}

function ad(a, b) {
 a = a | 0;
 b = b | 0;
 return Mc(a) | 0;
}

function zg(a) {
 a = a | 0;
 yf(a + 4 | 0);
 Xb(a);
 return;
}

function qg(a) {
 a = a | 0;
 yf(a + 4 | 0);
 Xb(a);
 return;
}

function lg(a) {
 a = a | 0;
 yf(a + 8 | 0);
 Xb(a);
 return;
}

function gg(a) {
 a = a | 0;
 yf(a + 8 | 0);
 Xb(a);
 return;
}

function _i(a) {
 a = a | 0;
 Vi(a + 8 | 0);
 Xb(a);
 return;
}

function Wi(a) {
 a = a | 0;
 Vi(a + 8 | 0);
 Xb(a);
 return;
}

function Mk(a) {
 a = a | 0;
 mo(c[a >> 2] | 0) | 0;
 return;
}

function Hk() {
 Ck(1600, 1);
 c[2524] = 1600;
 return 10096;
}

function Ic(a) {
 a = a | 0;
 Ea(14387, 14416, 1164, 14159);
}

function gd(a, b) {
 a = +a;
 b = +b;
 return +(+fd(a, b));
}

function ed(a, b) {
 a = +a;
 b = +b;
 return +(+dd(a, b));
}

function Zc(a, b) {
 a = a | 0;
 b = b | 0;
 return -1 | 0;
}

function Ub(a) {
 a = a | 0;
 Ea(14061, 14084, 303, 14159);
}

function Ib(a, b) {
 a = a | 0;
 b = b | 0;
 i = a;
 j = b;
}

function Ce() {
 we(0);
 cb(97, 19415, n | 0) | 0;
 return;
}

function kl(a, b) {
 a = a | 0;
 b = b | 0;
 return b | 0;
}

function dm(a) {
 a = a | 0;
 return c[a + 12 >> 2] | 0;
}

function Zb(a) {
 a = a | 0;
 c[a >> 2] = 2156;
 return;
}

function dg(a, b) {
 a = a | 0;
 b = b | 0;
 return -1;
}

function cm(b) {
 b = b | 0;
 return a[b + 9 >> 0] | 0;
}

function bm(a) {
 a = a | 0;
 return c[a + 8 >> 2] | 0;
}

function bg(a, b) {
 a = a | 0;
 b = b | 0;
 return -1;
}

function am(b) {
 b = b | 0;
 return a[b + 8 >> 0] | 0;
}

function Qf(a, b) {
 a = a | 0;
 b = b | 0;
 return -1;
}

function Of(a, b) {
 a = a | 0;
 b = b | 0;
 return -1;
}

function xg(a) {
 a = a | 0;
 yf(a + 4 | 0);
 return;
}

function wl(a) {
 a = a | 0;
 zm(a);
 Xb(a);
 return;
}

function og(a) {
 a = a | 0;
 yf(a + 4 | 0);
 return;
}

function jg(a) {
 a = a | 0;
 yf(a + 8 | 0);
 return;
}

function fl(a) {
 a = a | 0;
 el(a);
 Xb(a);
 return;
}

function eg(a) {
 a = a | 0;
 yf(a + 8 | 0);
 return;
}

function Zl(a) {
 a = a | 0;
 Yl(a);
 Xb(a);
 return;
}

function Zi(a) {
 a = a | 0;
 Vi(a + 8 | 0);
 return;
}

function Ve(a) {
 a = a | 0;
 Cf(a);
 Xb(a);
 return;
}

function Ui(a) {
 a = a | 0;
 Vi(a + 8 | 0);
 return;
}

function Pe(a) {
 a = a | 0;
 Cf(a);
 Xb(a);
 return;
}

function Ke(a) {
 a = a | 0;
 Rf(a);
 Xb(a);
 return;
}

function Gk(a) {
 a = a | 0;
 Fk(a);
 Xb(a);
 return;
}

function Ee(a) {
 a = a | 0;
 Rf(a);
 Xb(a);
 return;
}

function Dg(a) {
 a = a | 0;
 yf(a);
 Xb(a);
 return;
}

function $l(a) {
 a = a | 0;
 _l(a);
 Xb(a);
 return;
}

function wk(a, b) {
 a = a | 0;
 b = b | 0;
 return;
}

function no(a, b) {
 a = a | 0;
 b = b | 0;
 return;
}

function Uf(a, b) {
 a = a | 0;
 b = b | 0;
 return;
}

function Ff(a, b) {
 a = a | 0;
 b = b | 0;
 return;
}

function Bk(a, b) {
 a = a | 0;
 b = b | 0;
 return;
}

function ap(a, b) {
 a = a | 0;
 b = b | 0;
 ca(5);
}

function Pb(a) {
 a = a | 0;
 Na(a | 0) | 0;
 cc();
}

function Xe(a) {
 a = a | 0;
 return Ze(a, 1) | 0;
}

function We(a) {
 a = a | 0;
 return Ze(a, 0) | 0;
}

function Me(a) {
 a = a | 0;
 return Oe(a, 1) | 0;
}

function Le(a) {
 a = a | 0;
 return Oe(a, 0) | 0;
}

function zj(a) {
 a = a | 0;
 return 2147483647;
}

function Lj(a) {
 a = a | 0;
 return 2147483647;
}

function Kj(a) {
 a = a | 0;
 return 2147483647;
}

function Aj(a) {
 a = a | 0;
 return 2147483647;
}

function dp(a) {
 a = a | 0;
 ca(8);
 return 0;
}

function yk(a) {
 a = a | 0;
 Xb(a);
 return;
}

function yj(a) {
 a = a | 0;
 Xb(a);
 return;
}

function yh(a) {
 a = a | 0;
 Xb(a);
 return;
}

function xi(a) {
 a = a | 0;
 Xb(a);
 return;
}

function tk(a) {
 a = a | 0;
 Xb(a);
 return;
}

function ol(a) {
 a = a | 0;
 Xb(a);
 return;
}

function nk(a) {
 a = a | 0;
 Xb(a);
 return;
}

function nj(a) {
 a = a | 0;
 Xb(a);
 return;
}

function lc(a) {
 a = a | 0;
 Xb(a);
 return;
}

function kc(a) {
 a = a | 0;
 Xb(a);
 return;
}

function jc(a) {
 a = a | 0;
 Xb(a);
 return;
}

function hk(a) {
 a = a | 0;
 Xb(a);
 return;
}

function eh(a) {
 a = a | 0;
 Xb(a);
 return;
}

function cj(a) {
 a = a | 0;
 Xb(a);
 return;
}

function bk(a) {
 a = a | 0;
 Xb(a);
 return;
}

function _h(a) {
 a = a | 0;
 Xb(a);
 return;
}

function _c(a) {
 a = a | 0;
 re(a);
 return;
}

function Yb(a) {
 a = a | 0;
 Xb(a);
 return;
}

function Xb(a) {
 a = a | 0;
 re(a);
 return;
}

function Vl(a) {
 a = a | 0;
 Xb(a);
 return;
}

function Ul(a) {
 a = a | 0;
 Xb(a);
 return;
}

function Uj(a) {
 a = a | 0;
 Xb(a);
 return;
}

function Sk(a) {
 a = a | 0;
 Xb(a);
 return;
}

function Rg(a) {
 a = a | 0;
 Xb(a);
 return;
}

function Pk(a) {
 a = a | 0;
 Xb(a);
 return;
}

function Nh(a) {
 a = a | 0;
 Xb(a);
 return;
}

function Ml(a) {
 a = a | 0;
 Xb(a);
 return;
}

function Mg(a) {
 a = a | 0;
 Xb(a);
 return;
}

function Jj(a) {
 a = a | 0;
 Xb(a);
 return;
}

function Hg(a) {
 a = a | 0;
 Xb(a);
 return;
}

function El(a) {
 a = a | 0;
 Xb(a);
 return;
}

function $b(a) {
 a = a | 0;
 Xb(a);
 return;
}

function ac(a) {
 a = a | 0;
 return 14229;
}

function Qo(a) {
 a = a | 0;
 yb[a & 3]();
}

function pj(a) {
 a = a | 0;
 return 127;
}

function oj(a) {
 a = a | 0;
 return 127;
}

function ej(a) {
 a = a | 0;
 return 127;
}

function dj(a) {
 a = a | 0;
 return 127;
}

function Mf(a) {
 a = a | 0;
 return -1;
}

function $f(a) {
 a = a | 0;
 return -1;
}

function yi(a) {
 a = a | 0;
 return 2;
}

function vl(a) {
 a = a | 0;
 return 1;
}

function uj(a) {
 a = a | 0;
 return 0;
}

function tl(a) {
 a = a | 0;
 return 1;
}

function sl(a) {
 a = a | 0;
 return 1;
}

function jj(a) {
 a = a | 0;
 return 0;
}

function Zf(a) {
 a = a | 0;
 return 0;
}

function Yf(a) {
 a = a | 0;
 return 0;
}

function Xc(a) {
 a = a | 0;
 return 0;
}

function Tl(a) {
 a = a | 0;
 return 4;
}

function Rl(a) {
 a = a | 0;
 return 0;
}

function Ql(a) {
 a = a | 0;
 return 0;
}

function Qj(a) {
 a = a | 0;
 return 0;
}

function Ll(a) {
 a = a | 0;
 return 4;
}

function Kf(a) {
 a = a | 0;
 return 0;
}

function Kd(a) {
 a = a | 0;
 return 0;
}

function Jl(a) {
 a = a | 0;
 return 0;
}

function Jf(a) {
 a = a | 0;
 return 0;
}

function Il(a) {
 a = a | 0;
 return 0;
}

function Fj(a) {
 a = a | 0;
 return 0;
}

function Bl(a) {
 a = a | 0;
 return 0;
}

function $h(a) {
 a = a | 0;
 return 2;
}

function xk(a) {
 a = a | 0;
 return;
}

function xj(a) {
 a = a | 0;
 return;
}

function xh(a) {
 a = a | 0;
 return;
}

function wi(a) {
 a = a | 0;
 return;
}

function sk(a) {
 a = a | 0;
 return;
}

function mk(a) {
 a = a | 0;
 return;
}

function mj(a) {
 a = a | 0;
 return;
}

function ko(a) {
 a = a | 0;
 return;
}

function ic(a) {
 a = a | 0;
 return;
}

function hc(a) {
 a = a | 0;
 return;
}

function gk(a) {
 a = a | 0;
 return;
}

function gc(a) {
 a = a | 0;
 return;
}

function fc(a) {
 a = a | 0;
 return;
}

function ec(a) {
 a = a | 0;
 return;
}

function dh(a) {
 a = a | 0;
 return;
}

function bj(a) {
 a = a | 0;
 return;
}

function ak(a) {
 a = a | 0;
 return;
}

function _b(a) {
 a = a | 0;
 return;
}

function Zh(a) {
 a = a | 0;
 return;
}

function Yj(a) {
 a = a | 0;
 return;
}

function Wj(a) {
 a = a | 0;
 return;
}

function Tj(a) {
 a = a | 0;
 return;
}

function Qg(a) {
 a = a | 0;
 return;
}

function Mh(a) {
 a = a | 0;
 return;
}

function Lg(a) {
 a = a | 0;
 return;
}

function Ld(a) {
 a = a | 0;
 return;
}

function Ij(a) {
 a = a | 0;
 return;
}

function Gg(a) {
 a = a | 0;
 return;
}

function Fg(a) {
 a = a | 0;
 return;
}

function Mb(a) {
 a = a | 0;
 D = a;
}

function Hb(a) {
 a = a | 0;
 i = a;
}

function $o(a) {
 a = a | 0;
 ca(4);
}

function Nb() {
 return D | 0;
}

function Gb() {
 return i | 0;
}

function Pc() {
 return 2576;
}

function Oc() {
 return 2572;
}

function Nc() {
 return 2568;
}

function fp() {
 ca(10);
}

function De() {
 return;
}

// EMSCRIPTEN_END_FUNCS
var ob=[Xo,Xi,$i,Vj,Zj,ck,ek,Xo];var pb=[Yo,mc,me,Qd,Pd,Od,Rd,Vf,_f,He,cg,Gf,Lf,Se,Pf,Kg,Pg,uk,zk,hl,jl,ml,Tk,Yk,_k,bl,he,Yo,Yo,Yo,Yo,Yo];var qb=[Zo,yc,xc,uc];var rb=[_o,ik,ok,_o];var sb=[$o,_b,$b,gc,jc,hc,ic,kc,lc,Rf,Ee,Ke,Cf,Pe,Ve,Df,Sf,eg,gg,fg,hg,jg,lg,kg,mg,og,qg,pg,rg,xg,zg,yg,Ag,yf,Dg,Fg,Hg,Qk,Lg,Mg,Qg,Rg,dh,eh,xh,yh,Mh,Nh,Zh,_h,wi,xi,Ui,Wi,Zi,_i,bj,cj,mj,nj,xj,yj,Ij,Jj,Tj,Uj,ak,bk,gk,hk,mk,nk,sk,tk,xk,yk,Fk,Gk,el,fl,zm,wl,Yl,Zl,_l,$l,Gg,Pk,Sk,ol,El,Ml,Ul,Vl,Hc,ie,je,xe,Wj,Rk,Jn,Qn,Rn,Sn,Tn,Un,Vn,bf,nf,re,$o,$o,$o,$o,$o,$o,$o,$o,$o,$o,$o,$o,$o,$o,$o,$o,$o,$o];var tb=[ap,Fe,Je,Qe,Ue,Ff,Uf,fj,gj,hj,ij,kj,lj,qj,rj,sj,tj,vj,wj,Bj,Cj,Dj,Ej,Gj,Hj,Mj,Nj,Oj,Pj,Rj,Sj,wk,Bk,em,gm,im,fm,hm,jm,ap,ap,ap,ap,ap,ap,ap,ap,ap,ap,ap,ap,ap,ap,ap,ap,ap,ap,ap,ap,ap,ap,ap,ap,ap];var ub=[bp,Sg,Tg,Ug,Vg,Wg,Xg,Yg,Zg,_g,$g,ah,fh,gh,hh,ih,jh,kh,lh,mh,nh,oh,ph,Eh,Gh,Rh,Th,ai,bi,ci,ei,gi,zi,Ai,Bi,Di,Fi,lk,rk,bp,bp,bp,bp,bp,bp,bp,bp,bp,bp,bp,bp,bp,bp,bp,bp,bp,bp,bp,bp,bp,bp,bp,bp,bp];var vb=[cp,Hh,Kh,Uh,Wh,cp,cp,cp];var wb=[dp,ac,Nd,Ge,Zf,$f,ag,Yf,Le,Me,Re,Kf,Mf,Nf,Jf,We,Xe,$h,lm,nm,pm,vm,xm,rm,tm,yi,mm,om,qm,wm,ym,sm,um,dj,ej,jj,oj,pj,uj,zj,Aj,Fj,Kj,Lj,Qj,Al,Bl,Dl,am,cm,bm,dm,sl,tl,vl,Il,Jl,Ll,Ql,Rl,Tl,dp,dp,dp];var xb=[ep];var yb=[fp,Fc,Gc,fp];var zb=[gp,ii,Hi,xl,yl,pl,ql,Fl,Gl,Nl,Ol,gp,gp,gp,gp,gp];var Ab=[hp,ll,Uk,Vk,Wk,al,hp,hp];var Bb=[ip,Bc,Ac,zc,Wf,Hf,vk,Ak];var Cb=[jp,bg,Ie,Ne,dg,Of,Te,Ye,Qf,gl,il,kl,Xk,Zk,$k,jp];var Db=[kp,Ig,Ng,zh,Ah,Fh,Lh,Oh,Ph,Sh,Xh,nl,zl,Cl,cl,rl,ul,Hl,Kl,Pl,Sl,kp,kp,kp,kp,kp,kp,kp,kp,kp,kp,kp];var Eb=[lp,oc,pc,rc,Xf,If,Jg,Og];return{___cxa_can_catch:Cc,_fflush:xd,_main:Qb,___cxa_is_pointer_type:Dc,_i64Add:so,_memmove:wo,_i64Subtract:qo,_memset:ro,_malloc:qe,_memcpy:uo,_bitshift64Lshr:to,_free:re,___errno_location:Rc,_bitshift64Shl:vo,__GLOBAL__I_000101:Ce,__GLOBAL__sub_I_iostream_cpp:De,runPostSets:po,stackAlloc:Fb,stackSave:Gb,stackRestore:Hb,establishStackSpace:Ib,setThrew:Jb,setTempRet0:Mb,getTempRet0:Nb,dynCall_iiiiiiii:Go,dynCall_iiii:Ho,dynCall_viiiii:Io,dynCall_iiiiiid:Jo,dynCall_vi:Ko,dynCall_vii:Lo,dynCall_iiiiiii:Mo,dynCall_iiiiid:No,dynCall_ii:Oo,dynCall_viii:Po,dynCall_v:Qo,dynCall_iiiiiiiii:Ro,dynCall_iiiii:So,dynCall_viiiiii:To,dynCall_iii:Uo,dynCall_iiiiii:Vo,dynCall_viiii:Wo}})


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


