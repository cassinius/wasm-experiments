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
        var J = v[B], Q = d[B];
        "number" !== Q && (Q = f[Q + "ToC"], c += "var " + Q.arguments + " = " + J + ";", c += Q.body + ";", c += J + "=" + Q.returnValue + ";");
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
            var A = parseInt(a.substr(k)), Y = A.toString().length;
            if (!A || !Y) {
              k--;
              break;
            }
            var ec = a.substr(k + Y, A);
            v.push(ec);
            t.push(ec);
            k += Y + A;
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
        Y = A.toString().length, v = a.substr(k + Y, A), k += Y + A;
      }
    }
    n = !1;
    "I" === a[k] ? (k++, A = b(!0), Y = b(!0, 1, !0), g += Y[0] + " " + v + "<" + A.join(", ") + ">") : g = v;
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
function L(a, b, c) {
  c = Array(0 < c ? c : Ha(a) + 1);
  a = Ga(a, c, 0, c.length);
  b && (c.length = a);
  return c;
}
e.intArrayFromString = L;
e.intArrayToString = function(a) {
  for (var b = [], c = 0;c < a.length;c++) {
    var d = a[c];
    255 < d && (d &= 255);
    b.push(String.fromCharCode(d));
  }
  return b.join("");
};
function ra(a, b, c) {
  a = L(a, c);
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
var ua = Math.abs, xa = Math.ceil, wa = Math.floor, va = Math.min, ab = 0, bb = null, cb = null;
function db() {
  ab++;
  e.monitorRunDependencies && e.monitorRunDependencies(ab);
}
e.addRunDependency = db;
function eb() {
  ab--;
  e.monitorRunDependencies && e.monitorRunDependencies(ab);
  if (0 == ab && (null !== bb && (clearInterval(bb), bb = null), cb)) {
    var a = cb;
    cb = null;
    a();
  }
}
e.removeRunDependency = eb;
e.preloadedImages = {};
e.preloadedAudios = {};
var M = null, Pa = 8, ja = Pa + 22208;
Wa.push({fa:function() {
  fb();
}}, {fa:function() {
  gb();
}});
var M = "test_wasm.html.mem", hb = r.pa(F(12, "i8", 2), 8);
assert(0 == hb % 8);
function ib(a, b) {
  K.unshift({fa:a, X:b});
}
e._i64Subtract = jb;
function kb() {
  return !!kb.q;
}
var lb = 0, mb = [], nb = {};
function ob(a) {
  if (!a || nb[a]) {
    return a;
  }
  for (var b in nb) {
    if (nb[b].Ia === a) {
      return b;
    }
  }
  return a;
}
function pb() {
  var a = lb;
  if (!a) {
    return (N.setTempRet0(0), 0) | 0;
  }
  var b = nb[a], c = b.type;
  if (!c) {
    return (N.setTempRet0(0), a) | 0;
  }
  var d = Array.prototype.slice.call(arguments);
  e.___cxa_is_pointer_type(c);
  pb.buffer || (pb.buffer = G(4));
  E[pb.buffer >> 2] = a;
  for (var a = pb.buffer, f = 0;f < d.length;f++) {
    if (d[f] && e.___cxa_can_catch(d[f], c, a)) {
      return a = E[a >> 2], b.Ia = a, (N.setTempRet0(d[f]), a) | 0;
    }
  }
  a = E[a >> 2];
  return (N.setTempRet0(c), a) | 0;
}
e._memset = qb;
function sb(a) {
  return 0 === a % 4 && (0 !== a % 100 || 0 === a % 400);
}
function tb(a, b) {
  for (var c = 0, d = 0;d <= b;c += a[d++]) {
  }
  return c;
}
var ub = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], vb = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function wb(a, b) {
  for (var c = new Date(a.getTime());0 < b;) {
    var d = c.getMonth(), f = (sb(c.getFullYear()) ? ub : vb)[d];
    if (b > f - c.getDate()) {
      b -= f - c.getDate() + 1, c.setDate(1), 11 > d ? c.setMonth(d + 1) : (c.setMonth(0), c.setFullYear(c.getFullYear() + 1));
    } else {
      c.setDate(c.getDate() + b);
      break;
    }
  }
  return c;
}
function xb(a, b, c, d) {
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
    a = wb(new Date(a.u + 1900, 0, 1), a.ka);
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
    return g(a.O + tb(sb(a.u + 1900) ? ub : vb, a.I - 1), 3);
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
    var b = new Date(a.u + 1900, 0, 1), c = 0 === b.getDay() ? b : wb(b, 7 - b.getDay());
    a = new Date(a.u + 1900, a.I, a.O);
    return 0 > h(c, a) ? g(Math.ceil((31 - c.getDate() + (tb(sb(a.getFullYear()) ? ub : vb, a.getMonth() - 1) - 31) + a.getDate()) / 7), 2) : 0 === h(c, b) ? "01" : "00";
  }, "%V":function(a) {
    var b = k(new Date(a.u + 1900, 0, 4)), c = k(new Date(a.u + 1901, 0, 4)), d = wb(new Date(a.u + 1900, 0, 1), a.ka);
    return 0 > h(d, b) ? "53" : 0 >= h(c, d) ? "01" : g(Math.ceil((b.getFullYear() < a.u + 1900 ? a.ka + 32 - b.getDate() : a.ka + 1 - b.getDate()) / 7), 2);
  }, "%w":function(a) {
    return (new Date(a.u + 1900, a.I + 1, a.O, 0, 0, 0, 0)).getDay();
  }, "%W":function(a) {
    var b = new Date(a.u, 0, 1), c = 1 === b.getDay() ? b : wb(b, 0 === b.getDay() ? 1 : 7 - b.getDay() + 1);
    a = new Date(a.u + 1900, a.I, a.O);
    return 0 > h(c, a) ? g(Math.ceil((31 - c.getDate() + (tb(sb(a.getFullYear()) ? ub : vb, a.getMonth() - 1) - 31) + a.getDate()) / 7), 2) : 0 === h(c, b) ? "01" : "00";
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
  n = L(c, !1);
  if (n.length > b) {
    return 0;
  }
  qa(n, a);
  return n.length - 1;
}
function yb(a, b) {
  yb.q || (yb.q = {});
  a in yb.q || (r.N("v", b), yb.q[a] = 1);
}
var zb = {};
function Ab(a) {
  e.___errno_location && (E[e.___errno_location() >> 2] = a);
  return a;
}
var O = {K:1, G:2, td:3, oc:4, J:5, Ga:6, Ib:7, Mc:8, ba:9, Wb:10, Ca:11, Dd:11, cb:12, la:13, hc:14, Yc:15, ma:16, Da:17, Ed:18, oa:19, Ea:20, P:21, p:22, Hc:23, bb:24, W:25, Ad:26, ic:27, Uc:28, da:29, qd:30, Ac:31, jd:32, ec:33, nd:34, Qc:42, lc:43, Xb:44, rc:45, sc:46, tc:47, zc:48, Bd:49, Kc:50, qc:51, bc:35, Nc:37, Ob:52, Rb:53, Fd:54, Ic:55, Sb:56, Tb:57, cc:35, Ub:59, Wc:60, Lc:61, xd:62, Vc:63, Rc:64, Sc:65, pd:66, Oc:67, Lb:68, ud:69, Yb:70, kd:71, Cc:72, fc:73, Qb:74, cd:76, Pb:77, od:78, 
uc:79, vc:80, yc:81, xc:82, wc:83, Xc:38, Fa:39, Dc:36, na:40, dd:95, hd:96, ac:104, Jc:105, Mb:97, md:91, ad:88, Tc:92, rd:108, $b:111, Jb:98, Zb:103, Gc:101, Ec:100, yd:110, jc:112, kc:113, nc:115, Nb:114, dc:89, Bc:90, ld:93, sd:94, Kb:99, Fc:102, pc:106, Zc:107, zd:109, Cd:87, gc:122, vd:116, bd:95, Pc:123, mc:84, ed:75, Vb:125, $c:131, gd:130, wd:86}, Bb = ua;
function Cb() {
  void 0 === Cb.start && (Cb.start = Date.now());
  return 1E3 * (Date.now() - Cb.start) | 0;
}
var Db = 1, Eb = {0:"Success", 1:"Not super-user", 2:"No such file or directory", 3:"No such process", 4:"Interrupted system call", 5:"I/O error", 6:"No such device or address", 7:"Arg list too long", 8:"Exec format error", 9:"Bad file number", 10:"No children", 11:"No more processes", 12:"Not enough core", 13:"Permission denied", 14:"Bad address", 15:"Block device required", 16:"Mount device busy", 17:"File exists", 18:"Cross-device link", 19:"No such device", 20:"Not a directory", 21:"Is a directory", 
22:"Invalid argument", 23:"Too many open files in system", 24:"Too many open files", 25:"Not a typewriter", 26:"Text file busy", 27:"File too large", 28:"No space left on device", 29:"Illegal seek", 30:"Read only file system", 31:"Too many links", 32:"Broken pipe", 33:"Math arg out of domain of func", 34:"Math result not representable", 35:"File locking deadlock error", 36:"File or path name too long", 37:"No record locks available", 38:"Function not implemented", 39:"Directory not empty", 40:"Too many symbolic links", 
42:"No message of desired type", 43:"Identifier removed", 44:"Channel number out of range", 45:"Level 2 not synchronized", 46:"Level 3 halted", 47:"Level 3 reset", 48:"Link number out of range", 49:"Protocol driver not attached", 50:"No CSI structure available", 51:"Level 2 halted", 52:"Invalid exchange", 53:"Invalid request descriptor", 54:"Exchange full", 55:"No anode", 56:"Invalid request code", 57:"Invalid slot", 59:"Bad font file fmt", 60:"Device not a stream", 61:"No data (for no delay io)", 
62:"Timer expired", 63:"Out of streams resources", 64:"Machine is not on the network", 65:"Package not installed", 66:"The object is remote", 67:"The link has been severed", 68:"Advertise error", 69:"Srmount error", 70:"Communication error on send", 71:"Protocol error", 72:"Multihop attempted", 73:"Cross mount point (not really error)", 74:"Trying to read unreadable message", 75:"Value too large for defined data type", 76:"Given log. name not unique", 77:"f.d. invalid for this operation", 78:"Remote address changed", 
79:"Can   access a needed shared lib", 80:"Accessing a corrupted shared lib", 81:".lib section in a.out corrupted", 82:"Attempting to link in too many libs", 83:"Attempting to exec a shared library", 84:"Illegal byte sequence", 86:"Streams pipe error", 87:"Too many users", 88:"Socket operation on non-socket", 89:"Destination address required", 90:"Message too long", 91:"Protocol wrong type for socket", 92:"Protocol not available", 93:"Unknown protocol", 94:"Socket type not supported", 95:"Not supported", 
96:"Protocol family not supported", 97:"Address family not supported by protocol family", 98:"Address already in use", 99:"Address not available", 100:"Network interface is not configured", 101:"Network is unreachable", 102:"Connection reset by network", 103:"Connection aborted", 104:"Connection reset by peer", 105:"No buffer space available", 106:"Socket is already connected", 107:"Socket is not connected", 108:"Can't send after socket shutdown", 109:"Too many references", 110:"Connection timed out", 
111:"Connection refused", 112:"Host is down", 113:"Host is unreachable", 114:"Socket already connected", 115:"Connection already in progress", 116:"Stale file handle", 122:"Quota exceeded", 123:"No medium (in tape drive)", 125:"Operation canceled", 130:"Previous owner died", 131:"State not recoverable"}, Fb = [];
function Gb(a, b) {
  Fb[a] = {input:[], output:[], T:b};
  Hb(a, Ib);
}
var Ib = {open:function(a) {
  var b = Fb[a.g.rdev];
  if (!b) {
    throw new P(O.oa);
  }
  a.tty = b;
  a.seekable = !1;
}, close:function(a) {
  a.tty.T.flush(a.tty);
}, flush:function(a) {
  a.tty.T.flush(a.tty);
}, read:function(a, b, c, d) {
  if (!a.tty || !a.tty.T.Ta) {
    throw new P(O.Ga);
  }
  for (var f = 0, g = 0;g < d;g++) {
    var h;
    try {
      h = a.tty.T.Ta(a.tty);
    } catch (k) {
      throw new P(O.J);
    }
    if (void 0 === h && 0 === f) {
      throw new P(O.Ca);
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
    throw new P(O.Ga);
  }
  for (var f = 0;f < d;f++) {
    try {
      a.tty.T.wa(a.tty, b[c + f]);
    } catch (g) {
      throw new P(O.J);
    }
  }
  d && (a.g.timestamp = Date.now());
  return f;
}}, Jb = {Ta:function(a) {
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
    a.input = L(b, !0);
  }
  return a.input.shift();
}, wa:function(a, b) {
  null === b || 10 === b ? (e.print(Fa(a.output, 0)), a.output = []) : 0 != b && a.output.push(b);
}, flush:function(a) {
  a.output && 0 < a.output.length && (e.print(Fa(a.output, 0)), a.output = []);
}}, Kb = {wa:function(a, b) {
  null === b || 10 === b ? (e.printErr(Fa(a.output, 0)), a.output = []) : 0 != b && a.output.push(b);
}, flush:function(a) {
  a.output && 0 < a.output.length && (e.printErr(Fa(a.output, 0)), a.output = []);
}}, R = {D:null, B:function() {
  return R.createNode(null, "/", 16895, 0);
}, createNode:function(a, b, c, d) {
  if (24576 === (c & 61440) || 4096 === (c & 61440)) {
    throw new P(O.K);
  }
  R.D || (R.D = {dir:{g:{F:R.k.F, A:R.k.A, lookup:R.k.lookup, Y:R.k.Y, rename:R.k.rename, unlink:R.k.unlink, rmdir:R.k.rmdir, readdir:R.k.readdir, symlink:R.k.symlink}, stream:{H:R.n.H}}, file:{g:{F:R.k.F, A:R.k.A}, stream:{H:R.n.H, read:R.n.read, write:R.n.write, Ja:R.n.Ja, Va:R.n.Va, Xa:R.n.Xa}}, link:{g:{F:R.k.F, A:R.k.A, readlink:R.k.readlink}, stream:{}}, Ma:{g:{F:R.k.F, A:R.k.A}, stream:Lb}});
  c = Mb(a, b, c, d);
  S(c.mode) ? (c.k = R.D.dir.g, c.n = R.D.dir.stream, c.e = {}) : 32768 === (c.mode & 61440) ? (c.k = R.D.file.g, c.n = R.D.file.stream, c.o = 0, c.e = null) : 40960 === (c.mode & 61440) ? (c.k = R.D.link.g, c.n = R.D.link.stream) : 8192 === (c.mode & 61440) && (c.k = R.D.Ma.g, c.n = R.D.Ma.stream);
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
  a.e && a.e.subarray && b > a.e.length && (a.e = R.lb(a), a.o = a.e.length);
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
  void 0 !== b.size && R.xb(a, b.size);
}, lookup:function() {
  throw Nb[O.G];
}, Y:function(a, b, c, d) {
  return R.createNode(a, b, c, d);
}, rename:function(a, b, c) {
  if (S(a.mode)) {
    var d;
    try {
      d = Ob(b, c);
    } catch (f) {
    }
    if (d) {
      for (var g in d.e) {
        throw new P(O.Fa);
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
  var c = Ob(a, b), d;
  for (d in c.e) {
    throw new P(O.Fa);
  }
  delete a.e[b];
}, readdir:function(a) {
  var b = [".", ".."], c;
  for (c in a.e) {
    a.e.hasOwnProperty(c) && b.push(c);
  }
  return b;
}, symlink:function(a, b, c) {
  a = R.createNode(a, b, 41471, 0);
  a.link = c;
  return a;
}, readlink:function(a) {
  if (40960 !== (a.mode & 61440)) {
    throw new P(O.p);
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
  R.Oa(a, f + d);
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
    throw new P(O.p);
  }
  return b;
}, Ja:function(a, b, c) {
  R.Oa(a.g, b + c);
  a.g.o = Math.max(a.g.o, b + c);
}, Va:function(a, b, c, d, f, g, h) {
  if (32768 !== (a.g.mode & 61440)) {
    throw new P(O.oa);
  }
  c = a.g.e;
  if (h & 2 || c.buffer !== b && c.buffer !== b.buffer) {
    if (0 < f || f + d < a.g.o) {
      c.subarray ? c = c.subarray(f, f + d) : c = Array.prototype.slice.call(c, f, f + d);
    }
    a = !0;
    d = G(d);
    if (!d) {
      throw new P(O.cb);
    }
    b.set(c, d);
  } else {
    a = !1, d = c.byteOffset;
  }
  return {ub:d, Jd:a};
}, Xa:function(a, b, c, d, f) {
  if (32768 !== (a.g.mode & 61440)) {
    throw new P(O.oa);
  }
  if (f & 2) {
    return 0;
  }
  R.n.write(a, b, 0, d, c, !1);
  return 0;
}}}, T = {ha:!1, Bb:function() {
  T.ha = !!process.platform.match(/^win/);
}, B:function(a) {
  assert(m);
  return T.createNode(null, "/", T.Ra(a.va.root), 0);
}, createNode:function(a, b, c) {
  if (!S(c) && 32768 !== (c & 61440) && 40960 !== (c & 61440)) {
    throw new P(O.p);
  }
  a = Mb(a, b, c);
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
    throw new P(O[c.code]);
  }
  return b.mode;
}, C:function(a) {
  for (var b = [];a.parent !== a;) {
    b.push(a.name), a = a.parent;
  }
  b.push(a.B.va.root);
  b.reverse();
  return Pb.apply(null, b);
}, Pa:{0:"r", 1:"r+", 2:"r+", 64:"r", 65:"r+", 66:"r+", 129:"rx+", 193:"rx+", 514:"w+", 577:"w", 578:"w+", 705:"wx", 706:"wx+", 1024:"a", 1025:"a", 1026:"a+", 1089:"a", 1090:"a+", 1153:"ax", 1154:"ax+", 1217:"ax", 1218:"ax+", 4096:"rs", 4098:"rs+"}, jb:function(a) {
  a &= -32769;
  if (a in T.Pa) {
    return T.Pa[a];
  }
  throw new P(O.p);
}, k:{F:function(a) {
  a = T.C(a);
  var b;
  try {
    b = fs.lstatSync(a);
  } catch (c) {
    if (!c.code) {
      throw c;
    }
    throw new P(O[c.code]);
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
    throw new P(O[d.code]);
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
    throw new P(O[f.code]);
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
    throw new P(O[d.code]);
  }
}, unlink:function(a, b) {
  var c = U(T.C(a), b);
  try {
    fs.unlinkSync(c);
  } catch (d) {
    if (!d.code) {
      throw d;
    }
    throw new P(O[d.code]);
  }
}, rmdir:function(a, b) {
  var c = U(T.C(a), b);
  try {
    fs.rmdirSync(c);
  } catch (d) {
    if (!d.code) {
      throw d;
    }
    throw new P(O[d.code]);
  }
}, readdir:function(a) {
  a = T.C(a);
  try {
    return fs.readdirSync(a);
  } catch (b) {
    if (!b.code) {
      throw b;
    }
    throw new P(O[b.code]);
  }
}, symlink:function(a, b, c) {
  a = U(T.C(a), b);
  try {
    fs.symlinkSync(c, a);
  } catch (d) {
    if (!d.code) {
      throw d;
    }
    throw new P(O[d.code]);
  }
}, readlink:function(a) {
  var b = T.C(a);
  try {
    return b = fs.readlinkSync(b), b = Qb.relative(Qb.resolve(a.B.va.root), b);
  } catch (c) {
    if (!c.code) {
      throw c;
    }
    throw new P(O[c.code]);
  }
}}, n:{open:function(a) {
  var b = T.C(a.g);
  try {
    32768 === (a.g.mode & 61440) && (a.$ = fs.openSync(b, T.jb(a.flags)));
  } catch (c) {
    if (!c.code) {
      throw c;
    }
    throw new P(O[c.code]);
  }
}, close:function(a) {
  try {
    32768 === (a.g.mode & 61440) && a.$ && fs.closeSync(a.$);
  } catch (b) {
    if (!b.code) {
      throw b;
    }
    throw new P(O[b.code]);
  }
}, read:function(a, b, c, d, f) {
  if (0 === d) {
    return 0;
  }
  var g = new Buffer(d), h;
  try {
    h = fs.readSync(a.$, g, 0, d, f);
  } catch (k) {
    throw new P(O[k.code]);
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
    throw new P(O[h.code]);
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
        throw new P(O[d.code]);
      }
    }
  }
  if (0 > b) {
    throw new P(O.p);
  }
  return b;
}}};
F(1, "i32*", 2);
F(1, "i32*", 2);
F(1, "i32*", 2);
var Rb = null, Sb = [null], Tb = [], Ub = 1, Vb = null, Wb = !0, Xb = {}, P = null, Nb = {};
function V(a, b) {
  a = Zb("/", a);
  b = b || {};
  if (!a) {
    return {path:"", g:null};
  }
  var c = {Qa:!0, ya:0}, d;
  for (d in c) {
    void 0 === b[d] && (b[d] = c[d]);
  }
  if (8 < b.ya) {
    throw new P(O.na);
  }
  var c = $b(a.split("/").filter(function(a) {
    return !!a;
  }), !1), f = Rb;
  d = "/";
  for (var g = 0;g < c.length;g++) {
    var h = g === c.length - 1;
    if (h && b.parent) {
      break;
    }
    f = Ob(f, c[g]);
    d = U(d, c[g]);
    f.Z && (!h || h && b.Qa) && (f = f.Z.root);
    if (!h || b.ra) {
      for (h = 0;40960 === (f.mode & 61440);) {
        if (f = ac(d), d = Zb(bc(d), f), f = V(d, {ya:b.ya}).g, 40 < h++) {
          throw new P(O.na);
        }
      }
    }
  }
  return {path:d, g:f};
}
function cc(a) {
  for (var b;;) {
    if (a === a.parent) {
      return a = a.B.Wa, b ? "/" !== a[a.length - 1] ? a + "/" + b : a + b : a;
    }
    b = b ? a.name + "/" + b : a.name;
    a = a.parent;
  }
}
function dc(a, b) {
  for (var c = 0, d = 0;d < b.length;d++) {
    c = (c << 5) - c + b.charCodeAt(d) | 0;
  }
  return (a + c >>> 0) % Vb.length;
}
function fc(a) {
  var b = dc(a.parent.id, a.name);
  a.S = Vb[b];
  Vb[b] = a;
}
function Ob(a, b) {
  var c;
  if (c = (c = gc(a, "x")) ? c : a.k.lookup ? 0 : O.la) {
    throw new P(c, a);
  }
  for (c = Vb[dc(a.id, b)];c;c = c.S) {
    var d = c.name;
    if (c.parent.id === a.id && d === b) {
      return c;
    }
  }
  return a.k.lookup(a, b);
}
function Mb(a, b, c, d) {
  hc || (hc = function(a, b, c, d) {
    a || (a = this);
    this.parent = a;
    this.B = a.B;
    this.Z = null;
    this.id = Ub++;
    this.name = b;
    this.mode = c;
    this.k = {};
    this.n = {};
    this.rdev = d;
  }, hc.prototype = {}, Object.defineProperties(hc.prototype, {read:{get:function() {
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
  a = new hc(a, b, c, d);
  fc(a);
  return a;
}
function S(a) {
  return 16384 === (a & 61440);
}
var ic = {r:0, rs:1052672, "r+":2, w:577, wx:705, xw:705, "w+":578, "wx+":706, "xw+":706, a:1089, ax:1217, xa:1217, "a+":1090, "ax+":1218, "xa+":1218};
function gc(a, b) {
  if (Wb) {
    return 0;
  }
  if (-1 === b.indexOf("r") || a.mode & 292) {
    if (-1 !== b.indexOf("w") && !(a.mode & 146) || -1 !== b.indexOf("x") && !(a.mode & 73)) {
      return O.la;
    }
  } else {
    return O.la;
  }
  return 0;
}
function jc(a, b) {
  try {
    return Ob(a, b), O.Da;
  } catch (c) {
  }
  return gc(a, "wx");
}
function kc() {
  var a;
  a = 4096;
  for (var b = 0;b <= a;b++) {
    if (!Tb[b]) {
      return b;
    }
  }
  throw new P(O.bb);
}
function lc(a) {
  mc || (mc = function() {
  }, mc.prototype = {}, Object.defineProperties(mc.prototype, {object:{get:function() {
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
  var b = new mc, c;
  for (c in a) {
    b[c] = a[c];
  }
  a = b;
  b = kc();
  a.fd = b;
  return Tb[b] = a;
}
var Lb = {open:function(a) {
  a.n = Sb[a.g.rdev].n;
  a.n.open && a.n.open(a);
}, H:function() {
  throw new P(O.da);
}};
function Hb(a, b) {
  Sb[a] = {n:b};
}
function nc(a, b) {
  var c = "/" === b, d = !b, f;
  if (c && Rb) {
    throw new P(O.ma);
  }
  if (!c && !d) {
    f = V(b, {Qa:!1});
    b = f.path;
    f = f.g;
    if (f.Z) {
      throw new P(O.ma);
    }
    if (!S(f.mode)) {
      throw new P(O.Ea);
    }
  }
  var d = {type:a, va:{}, Wa:b, tb:[]}, g = a.B(d);
  g.B = d;
  d.root = g;
  c ? Rb = g : f && (f.Z = d, f.B && f.B.tb.push(d));
}
function oc(a, b, c) {
  var d = V(a, {parent:!0}).g;
  a = pc(a);
  if (!a || "." === a || ".." === a) {
    throw new P(O.p);
  }
  var f = jc(d, a);
  if (f) {
    throw new P(f);
  }
  if (!d.k.Y) {
    throw new P(O.K);
  }
  return d.k.Y(d, a, b, c);
}
function qc(a, b) {
  b = (void 0 !== b ? b : 438) & 4095;
  b |= 32768;
  return oc(a, b, 0);
}
function W(a, b) {
  b = (void 0 !== b ? b : 511) & 1023;
  b |= 16384;
  return oc(a, b, 0);
}
function rc(a, b, c) {
  "undefined" === typeof c && (c = b, b = 438);
  return oc(a, b | 8192, c);
}
function sc(a, b) {
  if (!Zb(a)) {
    throw new P(O.G);
  }
  var c = V(b, {parent:!0}).g;
  if (!c) {
    throw new P(O.G);
  }
  var d = pc(b), f = jc(c, d);
  if (f) {
    throw new P(f);
  }
  if (!c.k.symlink) {
    throw new P(O.K);
  }
  return c.k.symlink(c, d, a);
}
function ac(a) {
  a = V(a).g;
  if (!a) {
    throw new P(O.G);
  }
  if (!a.k.readlink) {
    throw new P(O.p);
  }
  return Zb(cc(a.parent), a.k.readlink(a));
}
function tc(a, b) {
  var c;
  "string" === typeof a ? c = V(a, {ra:!0}).g : c = a;
  if (!c.k.A) {
    throw new P(O.K);
  }
  c.k.A(c, {mode:b & 4095 | c.mode & -4096, timestamp:Date.now()});
}
function uc(a, b) {
  var c;
  if ("" === a) {
    throw new P(O.G);
  }
  var d;
  if ("string" === typeof b) {
    if (d = ic[b], "undefined" === typeof d) {
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
    a = vc(a);
    try {
      f = V(a, {ra:!(b & 131072)}).g;
    } catch (g) {
    }
  }
  d = !1;
  if (b & 64) {
    if (f) {
      if (b & 128) {
        throw new P(O.Da);
      }
    } else {
      f = oc(a, c, 0), d = !0;
    }
  }
  if (!f) {
    throw new P(O.G);
  }
  8192 === (f.mode & 61440) && (b &= -513);
  if (b & 65536 && !S(f.mode)) {
    throw new P(O.Ea);
  }
  if (!d && (f ? 40960 === (f.mode & 61440) ? c = O.na : S(f.mode) && (0 !== (b & 2097155) || b & 512) ? c = O.P : (c = ["r", "w", "rw"][b & 3], b & 512 && (c += "w"), c = gc(f, c)) : c = O.G, c)) {
    throw new P(c);
  }
  if (b & 512) {
    c = f;
    var h;
    "string" === typeof c ? h = V(c, {ra:!0}).g : h = c;
    if (!h.k.A) {
      throw new P(O.K);
    }
    if (S(h.mode)) {
      throw new P(O.P);
    }
    if (32768 !== (h.mode & 61440)) {
      throw new P(O.p);
    }
    if (c = gc(h, "w")) {
      throw new P(c);
    }
    h.k.A(h, {size:0, timestamp:Date.now()});
  }
  b &= -641;
  f = lc({g:f, path:cc(f), flags:b, seekable:!0, position:0, n:f.n, Gb:[], error:!1});
  f.n.open && f.n.open(f);
  !e.logReadFiles || b & 1 || (wc || (wc = {}), a in wc || (wc[a] = 1, e.printErr("read file: " + a)));
  try {
    Xb.onOpenFile && (h = 0, 1 !== (b & 2097155) && (h |= 1), 0 !== (b & 2097155) && (h |= 2), Xb.onOpenFile(a, h));
  } catch (k) {
    console.log("FS.trackingDelegate['onOpenFile']('" + a + "', flags) threw an exception: " + k.message);
  }
  return f;
}
function xc(a) {
  a.ta && (a.ta = null);
  try {
    a.n.close && a.n.close(a);
  } catch (b) {
    throw b;
  } finally {
    Tb[a.fd] = null;
  }
}
function yc(a, b, c) {
  if (!a.seekable || !a.n.H) {
    throw new P(O.da);
  }
  a.position = a.n.H(a, b, c);
  a.Gb = [];
}
function zc(a, b, c, d, f, g) {
  if (0 > d || 0 > f) {
    throw new P(O.p);
  }
  if (0 === (a.flags & 2097155)) {
    throw new P(O.ba);
  }
  if (S(a.g.mode)) {
    throw new P(O.P);
  }
  if (!a.n.write) {
    throw new P(O.p);
  }
  a.flags & 1024 && yc(a, 0, 2);
  var h = !0;
  if ("undefined" === typeof f) {
    f = a.position, h = !1;
  } else {
    if (!a.seekable) {
      throw new P(O.da);
    }
  }
  b = a.n.write(a, b, c, d, f, g);
  h || (a.position += b);
  try {
    if (a.path && Xb.onWriteToFile) {
      Xb.onWriteToFile(a.path);
    }
  } catch (k) {
    console.log("FS.trackingDelegate['onWriteToFile']('" + path + "') threw an exception: " + k.message);
  }
  return b;
}
function Ac() {
  P || (P = function(a, b) {
    this.g = b;
    this.zb = function(a) {
      this.R = a;
      for (var b in O) {
        if (O[b] === a) {
          this.code = b;
          break;
        }
      }
    };
    this.zb(a);
    this.message = Eb[a];
  }, P.prototype = Error(), P.prototype.constructor = P, [O.G].forEach(function(a) {
    Nb[a] = new P(a);
    Nb[a].stack = "<generic error, no stack>";
  }));
}
var Bc;
function Cc(a, b) {
  var c = 0;
  a && (c |= 365);
  b && (c |= 146);
  return c;
}
function Dc(a, b, c, d) {
  a = U("string" === typeof a ? a : cc(a), b);
  return qc(a, Cc(c, d));
}
function Ec(a, b, c, d, f, g) {
  a = b ? U("string" === typeof a ? a : cc(a), b) : a;
  d = Cc(d, f);
  f = qc(a, d);
  if (c) {
    if ("string" === typeof c) {
      a = Array(c.length);
      b = 0;
      for (var h = c.length;b < h;++b) {
        a[b] = c.charCodeAt(b);
      }
      c = a;
    }
    tc(f, d | 146);
    a = uc(f, "w");
    zc(a, c, 0, c.length, 0, g);
    xc(a);
    tc(f, d);
  }
  return f;
}
function X(a, b, c, d) {
  a = U("string" === typeof a ? a : cc(a), b);
  b = Cc(!!c, !!d);
  X.Ua || (X.Ua = 64);
  var f = X.Ua++ << 8 | 0;
  Hb(f, {open:function(a) {
    a.seekable = !1;
  }, close:function() {
    d && d.buffer && d.buffer.length && d(10);
  }, read:function(a, b, d, f) {
    for (var t = 0, n = 0;n < f;n++) {
      var v;
      try {
        v = c();
      } catch (z) {
        throw new P(O.J);
      }
      if (void 0 === v && 0 === t) {
        throw new P(O.Ca);
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
        throw new P(O.J);
      }
    }
    f && (a.g.timestamp = Date.now());
    return t;
  }});
  return rc(a, b, f);
}
function Fc(a) {
  if (a.rb || a.sb || a.link || a.e) {
    return !0;
  }
  var b = !0;
  if ("undefined" !== typeof XMLHttpRequest) {
    throw Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
  }
  if (e.read) {
    try {
      a.e = L(e.read(a.url), !0), a.o = a.e.length;
    } catch (c) {
      b = !1;
    }
  } else {
    throw Error("Cannot load without read() or XMLHttpRequest.");
  }
  b || Ab(O.J);
  return b;
}
var Gc = {}, hc, mc, wc;
function $b(a, b) {
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
function vc(a) {
  var b = "/" === a.charAt(0), c = "/" === a.substr(-1);
  (a = $b(a.split("/").filter(function(a) {
    return !!a;
  }), !b).join("/")) || b || (a = ".");
  a && c && (a += "/");
  return (b ? "/" : "") + a;
}
function bc(a) {
  var b = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);
  a = b[0];
  b = b[1];
  if (!a && !b) {
    return ".";
  }
  b && (b = b.substr(0, b.length - 1));
  return a + b;
}
function pc(a) {
  if ("/" === a) {
    return "/";
  }
  var b = a.lastIndexOf("/");
  return -1 === b ? a : a.substr(b + 1);
}
function Pb() {
  var a = Array.prototype.slice.call(arguments, 0);
  return vc(a.join("/"));
}
function U(a, b) {
  return vc(a + "/" + b);
}
function Zb() {
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
  a = $b(a.split("/").filter(function(a) {
    return !!a;
  }), !b).join("/");
  return (b ? "/" : "") + a || ".";
}
function Hc(a, b) {
  Ic = a;
  Jc = b;
  if (!Kc) {
    return 1;
  }
  if (0 == a) {
    Lc = function() {
      setTimeout(Mc, b);
    }, Nc = "timeout";
  } else {
    if (1 == a) {
      Lc = function() {
        Oc(Mc);
      }, Nc = "rAF";
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
        Lc = function() {
          window.setImmediate(Mc);
        };
        Nc = "immediate";
      }
    }
  }
  return 0;
}
function Pc(a, b, c, d, f) {
  e.noExitRuntime = !0;
  assert(!Kc, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");
  Kc = a;
  Qc = d;
  var g = Rc;
  Mc = function() {
    if (!y) {
      if (0 < Sc.length) {
        var b = Date.now(), c = Sc.shift();
        c.fa(c.X);
        if (Tc) {
          var f = Tc, t = 0 == f % 1 ? f - 1 : Math.floor(f);
          Tc = c.Nd ? t : (8 * f + (t + .5)) / 9;
        }
        console.log('main loop blocker "' + c.name + '" took ' + (Date.now() - b) + " ms");
        Uc();
        setTimeout(Mc, 0);
      } else {
        g < Rc || (Vc = Vc + 1 | 0, 1 == Ic && 1 < Jc && 0 != Vc % Jc ? Lc() : ("timeout" === Nc && e.qa && (e.aa("Looks like you are rendering without using requestAnimationFrame for the main loop. You should use 0 for the frame rate in emscripten_set_main_loop in order to use requestAnimationFrame, as that can greatly improve your frame rates!"), Nc = ""), Wc(function() {
          "undefined" !== typeof d ? r.N("vi", a, [d]) : r.N("v", a);
        }), g < Rc || ("object" === typeof SDL && SDL.audio && SDL.audio.vb && SDL.audio.vb(), Lc())));
      }
    }
  };
  f || (b && 0 < b ? Hc(0, 1E3 / b) : Hc(1, 1), Lc());
  if (c) {
    throw "SimulateInfiniteLoop";
  }
}
var Lc = null, Nc = "", Rc = 0, Kc = null, Qc = 0, Ic = 0, Jc = 0, Vc = 0, Sc = [];
function Uc() {
  if (e.setStatus) {
    var a = e.statusMessage || "Please wait...", b = Tc, c = Xc.Qd;
    b ? b < c ? e.setStatus(a + " (" + (c - b) + "/" + c + ")") : e.setStatus(a) : e.setStatus("");
  }
}
function Wc(a) {
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
var Xc = {}, Mc, Tc, Yc = !1, Zc = !1, $c = [];
function ad() {
  function a() {
    Zc = document.pointerLockElement === c || document.mozPointerLockElement === c || document.webkitPointerLockElement === c || document.msPointerLockElement === c;
  }
  e.preloadPlugins || (e.preloadPlugins = []);
  if (!bd) {
    bd = !0;
    try {
      cd = !0;
    } catch (b) {
      cd = !1, console.log("warning: no blob constructor, cannot create blobs with mimetypes");
    }
    dd = "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : cd ? null : console.log("warning: no BlobBuilder");
    ed = "undefined" != typeof window ? window.URL ? window.URL : window.webkitURL : void 0;
    e.Ya || "undefined" !== typeof ed || (console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."), e.Ya = !0);
    e.preloadPlugins.push({canHandle:function(a) {
      return !e.Ya && /\.(jpg|jpeg|png|bmp)$/i.test(a);
    }, handle:function(a, b, c, h) {
      var k = null;
      if (cd) {
        try {
          k = new Blob([a], {type:fd(b)}), k.size !== a.length && (k = new Blob([(new Uint8Array(a)).buffer], {type:fd(b)}));
        } catch (u) {
          r.V("Blob constructor present but fails: " + u + "; falling back to blob builder");
        }
      }
      k || (k = new dd, k.append((new Uint8Array(a)).buffer), k = k.getBlob());
      var t = ed.createObjectURL(k), n = new Image;
      n.onload = function() {
        assert(n.complete, "Image " + b + " could not be decoded");
        var h = document.createElement("canvas");
        h.width = n.width;
        h.height = n.height;
        h.getContext("2d").drawImage(n, 0, 0);
        e.preloadedImages[b] = h;
        ed.revokeObjectURL(t);
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
      if (cd) {
        try {
          var n = new Blob([a], {type:fd(b)});
        } catch (v) {
          return u();
        }
        var n = ed.createObjectURL(n), z = new Audio;
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
        gd(function() {
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
      !Zc && c.za && (c.za(), a.preventDefault());
    }, !1));
  }
}
function hd(a, b, c, d) {
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
  c && (b || assert("undefined" === typeof GLctx, "cannot set in module if GLctx is used, but we are a non-GL context that would replace it"), e.qa = f, b && GL.ae(g), e.ee = b, $c.forEach(function(a) {
    a();
  }), ad());
  return f;
}
var id = !1, jd = void 0, kd = void 0;
function ld(a, b, c) {
  function d() {
    Yc = !1;
    var a = f.parentNode;
    (document.webkitFullScreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.mozFullscreenElement || document.fullScreenElement || document.fullscreenElement || document.msFullScreenElement || document.msFullscreenElement || document.webkitCurrentFullScreenElement) === a ? (f.La = document.cancelFullScreen || document.mozCancelFullScreen || document.webkitCancelFullScreen || document.msExitFullscreen || document.exitFullscreen || function() {
    }, f.La = f.La.bind(document), jd && f.za(), Yc = !0, kd && md()) : (a.parentNode.insertBefore(f, a), a.parentNode.removeChild(a), kd && nd());
    if (e.onFullScreen) {
      e.onFullScreen(Yc);
    }
    od(f);
  }
  jd = a;
  kd = b;
  pd = c;
  "undefined" === typeof jd && (jd = !0);
  "undefined" === typeof kd && (kd = !1);
  "undefined" === typeof pd && (pd = null);
  var f = e.canvas;
  id || (id = !0, document.addEventListener("fullscreenchange", d, !1), document.addEventListener("mozfullscreenchange", d, !1), document.addEventListener("webkitfullscreenchange", d, !1), document.addEventListener("MSFullscreenChange", d, !1));
  var g = document.createElement("div");
  f.parentNode.insertBefore(g, f);
  g.appendChild(f);
  g.q = g.requestFullScreen || g.mozRequestFullScreen || g.msRequestFullscreen || (g.webkitRequestFullScreen ? function() {
    g.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
  } : null);
  c ? g.q({fe:c}) : g.q();
}
var qd = 0;
function rd(a) {
  var b = Date.now();
  if (0 === qd) {
    qd = b + 1E3 / 60;
  } else {
    for (;b + 2 >= qd;) {
      qd += 1E3 / 60;
    }
  }
  b = Math.max(qd - b, 0);
  setTimeout(a, b);
}
function Oc(a) {
  "undefined" === typeof window ? rd(a) : (window.requestAnimationFrame || (window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || rd), window.requestAnimationFrame(a));
}
function gd(a) {
  e.noExitRuntime = !0;
  setTimeout(function() {
    y || a();
  }, 1E4);
}
function fd(a) {
  return {jpg:"image/jpeg", jpeg:"image/jpeg", png:"image/png", bmp:"image/bmp", ogg:"audio/ogg", wav:"audio/wav", mp3:"audio/mpeg"}[a.substr(a.lastIndexOf(".") + 1)];
}
function sd(a, b, c) {
  var d = new XMLHttpRequest;
  d.open("GET", a, !0);
  d.responseType = "arraybuffer";
  d.onload = function() {
    200 == d.status || 0 == d.status && d.response ? b(d.response) : c();
  };
  d.onerror = c;
  d.send(null);
}
function td(a, b, c) {
  sd(a, function(c) {
    assert(c, 'Loading data file "' + a + '" failed (no arrayBuffer).');
    b(new Uint8Array(c));
    eb();
  }, function() {
    if (c) {
      c();
    } else {
      throw 'Loading data file "' + a + '" failed.';
    }
  });
  db();
}
var ud = [];
function vd() {
  var a = e.canvas;
  ud.forEach(function(b) {
    b(a.width, a.height);
  });
}
function md() {
  if ("undefined" != typeof SDL) {
    var a = Oa[SDL.screen + 0 * r.L >> 2];
    E[SDL.screen + 0 * r.L >> 2] = a | 8388608;
  }
  vd();
}
function nd() {
  if ("undefined" != typeof SDL) {
    var a = Oa[SDL.screen + 0 * r.L >> 2];
    E[SDL.screen + 0 * r.L >> 2] = a & -8388609;
  }
  vd();
}
function od(a, b, c) {
  b && c ? (a.Hb = b, a.pb = c) : (b = a.Hb, c = a.pb);
  var d = b, f = c;
  e.forcedAspectRatio && 0 < e.forcedAspectRatio && (d / f < e.forcedAspectRatio ? d = Math.round(f * e.forcedAspectRatio) : f = Math.round(d / e.forcedAspectRatio));
  if ((document.webkitFullScreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.mozFullscreenElement || document.fullScreenElement || document.fullscreenElement || document.msFullScreenElement || document.msFullscreenElement || document.webkitCurrentFullScreenElement) === a.parentNode && "undefined" != typeof screen) {
    var g = Math.min(screen.width / d, screen.height / f), d = Math.round(d * g), f = Math.round(f * g)
  }
  kd ? (a.width != d && (a.width = d), a.height != f && (a.height = f), "undefined" != typeof a.style && (a.style.removeProperty("width"), a.style.removeProperty("height"))) : (a.width != b && (a.width = b), a.height != c && (a.height = c), "undefined" != typeof a.style && (d != b || f != c ? (a.style.setProperty("width", d + "px", "important"), a.style.setProperty("height", f + "px", "important")) : (a.style.removeProperty("width"), a.style.removeProperty("height"))));
}
var bd, cd, dd, ed, pd;
function G(a) {
  return r.Q(a + 8) + 8 & 4294967288;
}
e._malloc = G;
var wd = 0;
function Z() {
  wd += 4;
  return E[wd - 4 >> 2];
}
function xd() {
  var a;
  a = Z();
  a = Tb[a];
  if (!a) {
    throw new P(O.ba);
  }
  return a;
}
e._i64Add = yd;
e._bitshift64Lshr = zd;
function Ad(a, b) {
  K.push(function() {
    r.N("vi", a, [b]);
  });
  Ad.level = K.length;
}
e._memcpy = Bd;
function Ca(a) {
  Ca.q || (w = Ma(), Ca.q = !0, assert(r.Q), Ca.kb = r.Q, r.Q = function() {
    x("cannot dynamically allocate, sbrk now has control");
  });
  var b = w;
  return 0 == a || Ca.kb(a) ? b : 4294967295;
}
e._bitshift64Shl = Cd;
e._memmove = Dd;
var Ed = F(1, "i32*", 2);
e.requestFullScreen = function(a, b, c) {
  ld(a, b, c);
};
e.requestAnimationFrame = function(a) {
  Oc(a);
};
e.setCanvasSize = function(a, b, c) {
  od(e.canvas, a, b);
  c || vd();
};
e.pauseMainLoop = function() {
  Lc = null;
  Rc++;
};
e.resumeMainLoop = function() {
  Rc++;
  var a = Ic, b = Jc, c = Kc;
  Kc = null;
  Pc(c, 0, !1, Qc, !0);
  Hc(a, b);
  Lc();
};
e.getUserMedia = function() {
  window.q || (window.q = navigator.getUserMedia || navigator.mozGetUserMedia);
  window.q(void 0);
};
e.createContext = function(a, b, c, d) {
  return hd(a, b, c, d);
};
Ac();
Vb = Array(4096);
nc(R, "/");
W("/tmp");
W("/home");
W("/home/web_user");
(function() {
  W("/dev");
  Hb(259, {read:function() {
    return 0;
  }, write:function(a, b, f, g) {
    return g;
  }});
  rc("/dev/null", 259);
  Gb(1280, Jb);
  Gb(1536, Kb);
  rc("/dev/tty", 1280);
  rc("/dev/tty1", 1536);
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
nc({B:function() {
  var a = Mb("/proc/self", "fd", 16895, 73);
  a.k = {lookup:function(a, c) {
    var d = Tb[+c];
    if (!d) {
      throw new P(O.ba);
    }
    var f = {parent:null, B:{Wa:"fake"}, k:{readlink:function() {
      return d.path;
    }}};
    return f.parent = f;
  }};
  return a;
}}, "/proc/self/fd");
Wa.unshift(function() {
  if (!e.noFSInit && !Bc) {
    assert(!Bc, "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)");
    Bc = !0;
    Ac();
    e.stdin = e.stdin;
    e.stdout = e.stdout;
    e.stderr = e.stderr;
    e.stdin ? X("/dev", "stdin", e.stdin) : sc("/dev/tty", "/dev/stdin");
    e.stdout ? X("/dev", "stdout", null, e.stdout) : sc("/dev/tty", "/dev/stdout");
    e.stderr ? X("/dev", "stderr", null, e.stderr) : sc("/dev/tty1", "/dev/stderr");
    var a = uc("/dev/stdin", "r");
    assert(0 === a.fd, "invalid handle for stdin (" + a.fd + ")");
    a = uc("/dev/stdout", "w");
    assert(1 === a.fd, "invalid handle for stdout (" + a.fd + ")");
    a = uc("/dev/stderr", "w");
    assert(2 === a.fd, "invalid handle for stderr (" + a.fd + ")");
  }
});
Xa.push(function() {
  Wb = !1;
});
K.push(function() {
  Bc = !1;
  var a = e._fflush;
  a && a(0);
  for (a = 0;a < Tb.length;a++) {
    var b = Tb[a];
    b && xc(b);
  }
});
e.FS_createFolder = function(a, b, c, d) {
  a = U("string" === typeof a ? a : cc(a), b);
  return W(a, Cc(c, d));
};
e.FS_createPath = function(a, b) {
  a = "string" === typeof a ? a : cc(a);
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
e.FS_createDataFile = Ec;
e.FS_createPreloadedFile = function(a, b, c, d, f, g, h, k, u, t) {
  function n(c) {
    function n(c) {
      t && t();
      k || Ec(a, b, c, d, f, u);
      g && g();
      eb();
    }
    var J = !1;
    e.preloadPlugins.forEach(function(a) {
      !J && a.canHandle(v) && (a.handle(c, v, n, function() {
        h && h();
        eb();
      }), J = !0);
    });
    J || n(c);
  }
  ad();
  var v = b ? Zb(U(a, b)) : a;
  db();
  "string" == typeof c ? td(c, function(a) {
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
        d = void 0 !== n.response ? new Uint8Array(n.response || []) : L(n.responseText || "", !0);
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
  var u = Dc(a, b, d, f);
  g ? u.e = g : h && (u.e = null, u.url = h);
  Object.defineProperty(u, "usedBytes", {get:function() {
    return this.e.length;
  }});
  var t = {};
  Object.keys(u.n).forEach(function(a) {
    var b = u.n[a];
    t[a] = function() {
      if (!Fc(u)) {
        throw new P(O.J);
      }
      return b.apply(null, arguments);
    };
  });
  t.read = function(a, b, c, d, f) {
    if (!Fc(u)) {
      throw new P(O.J);
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
  a = U("string" === typeof a ? a : cc(a), b);
  return sc(c, a);
};
e.FS_createDevice = X;
e.FS_unlink = function(a) {
  var b = V(a, {parent:!0}).g, c = pc(a), d = Ob(b, c), f;
  a: {
    try {
      f = Ob(b, c);
    } catch (g) {
      f = g.R;
      break a;
    }
    var h = gc(b, "wx");
    f = h ? h : S(f.mode) ? O.P : 0;
  }
  if (f) {
    throw f === O.P && (f = O.K), new P(f);
  }
  if (!b.k.unlink) {
    throw new P(O.K);
  }
  if (d.Z) {
    throw new P(O.ma);
  }
  try {
    Xb.willDeletePath && Xb.willDeletePath(a);
  } catch (k) {
    console.log("FS.trackingDelegate['willDeletePath']('" + a + "') threw an exception: " + k.message);
  }
  b.k.unlink(b, c);
  b = dc(d.parent.id, d.name);
  if (Vb[b] === d) {
    Vb[b] = d.S;
  } else {
    for (b = Vb[b];b;) {
      if (b.S === d) {
        b.S = d.S;
        break;
      }
      b = b.S;
    }
  }
  try {
    if (Xb.onDeletePath) {
      Xb.onDeletePath(a);
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
  var fs = require("fs"), Qb = require("path");
  T.Bb();
}
Qa = p = r.pa(ja);
Ba = !0;
Ra = Qa + Ta;
Sa = w = r.pa(Ra);
assert(Sa < ka, "TOTAL_MEMORY not big enough for stack");
var Fd = F([8, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 6, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 7, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 
0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 6, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0], "i8", 3);
e.hb = {Math:Math, Int8Array:Int8Array, Int16Array:Int16Array, Int32Array:Int32Array, Uint8Array:Uint8Array, Uint16Array:Uint16Array, Uint32Array:Uint32Array, Float32Array:Float32Array, Float64Array:Float64Array, NaN:NaN, Infinity:Infinity};
e.ib = {abort:x, assert:assert, invoke_iiiiiiii:function(a, b, c, d, f, g, h, k) {
  try {
    return e.dynCall_iiiiiiii(a, b, c, d, f, g, h, k);
  } catch (u) {
    if ("number" !== typeof u && "longjmp" !== u) {
      throw u;
    }
    N.setThrew(1, 0);
  }
}, invoke_iiii:function(a, b, c, d) {
  try {
    return e.dynCall_iiii(a, b, c, d);
  } catch (f) {
    if ("number" !== typeof f && "longjmp" !== f) {
      throw f;
    }
    N.setThrew(1, 0);
  }
}, invoke_viiiii:function(a, b, c, d, f, g) {
  try {
    e.dynCall_viiiii(a, b, c, d, f, g);
  } catch (h) {
    if ("number" !== typeof h && "longjmp" !== h) {
      throw h;
    }
    N.setThrew(1, 0);
  }
}, invoke_iiiiiid:function(a, b, c, d, f, g, h) {
  try {
    return e.dynCall_iiiiiid(a, b, c, d, f, g, h);
  } catch (k) {
    if ("number" !== typeof k && "longjmp" !== k) {
      throw k;
    }
    N.setThrew(1, 0);
  }
}, invoke_vi:function(a, b) {
  try {
    e.dynCall_vi(a, b);
  } catch (c) {
    if ("number" !== typeof c && "longjmp" !== c) {
      throw c;
    }
    N.setThrew(1, 0);
  }
}, invoke_vii:function(a, b, c) {
  try {
    e.dynCall_vii(a, b, c);
  } catch (d) {
    if ("number" !== typeof d && "longjmp" !== d) {
      throw d;
    }
    N.setThrew(1, 0);
  }
}, invoke_iiiiiii:function(a, b, c, d, f, g, h) {
  try {
    return e.dynCall_iiiiiii(a, b, c, d, f, g, h);
  } catch (k) {
    if ("number" !== typeof k && "longjmp" !== k) {
      throw k;
    }
    N.setThrew(1, 0);
  }
}, invoke_iiiiid:function(a, b, c, d, f, g) {
  try {
    return e.dynCall_iiiiid(a, b, c, d, f, g);
  } catch (h) {
    if ("number" !== typeof h && "longjmp" !== h) {
      throw h;
    }
    N.setThrew(1, 0);
  }
}, invoke_ii:function(a, b) {
  try {
    return e.dynCall_ii(a, b);
  } catch (c) {
    if ("number" !== typeof c && "longjmp" !== c) {
      throw c;
    }
    N.setThrew(1, 0);
  }
}, invoke_viii:function(a, b, c, d) {
  try {
    e.dynCall_viii(a, b, c, d);
  } catch (f) {
    if ("number" !== typeof f && "longjmp" !== f) {
      throw f;
    }
    N.setThrew(1, 0);
  }
}, invoke_v:function(a) {
  try {
    e.dynCall_v(a);
  } catch (b) {
    if ("number" !== typeof b && "longjmp" !== b) {
      throw b;
    }
    N.setThrew(1, 0);
  }
}, invoke_iiiiiiiii:function(a, b, c, d, f, g, h, k, u) {
  try {
    return e.dynCall_iiiiiiiii(a, b, c, d, f, g, h, k, u);
  } catch (t) {
    if ("number" !== typeof t && "longjmp" !== t) {
      throw t;
    }
    N.setThrew(1, 0);
  }
}, invoke_iiiii:function(a, b, c, d, f) {
  try {
    return e.dynCall_iiiii(a, b, c, d, f);
  } catch (g) {
    if ("number" !== typeof g && "longjmp" !== g) {
      throw g;
    }
    N.setThrew(1, 0);
  }
}, invoke_viiiiii:function(a, b, c, d, f, g, h) {
  try {
    e.dynCall_viiiiii(a, b, c, d, f, g, h);
  } catch (k) {
    if ("number" !== typeof k && "longjmp" !== k) {
      throw k;
    }
    N.setThrew(1, 0);
  }
}, invoke_iii:function(a, b, c) {
  try {
    return e.dynCall_iii(a, b, c);
  } catch (d) {
    if ("number" !== typeof d && "longjmp" !== d) {
      throw d;
    }
    N.setThrew(1, 0);
  }
}, invoke_iiiiii:function(a, b, c, d, f, g) {
  try {
    return e.dynCall_iiiiii(a, b, c, d, f, g);
  } catch (h) {
    if ("number" !== typeof h && "longjmp" !== h) {
      throw h;
    }
    N.setThrew(1, 0);
  }
}, invoke_viiii:function(a, b, c, d, f) {
  try {
    e.dynCall_viiii(a, b, c, d, f);
  } catch (g) {
    if ("number" !== typeof g && "longjmp" !== g) {
      throw g;
    }
    N.setThrew(1, 0);
  }
}, _fabs:Bb, _strftime:xb, _pthread_cond_wait:function() {
  return 0;
}, _pthread_key_create:function(a) {
  if (0 == a) {
    return O.p;
  }
  E[a >> 2] = Db;
  zb[Db] = 0;
  Db++;
  return 0;
}, _abort:function() {
  e.abort();
}, ___cxa_guard_acquire:function(a) {
  return D[a >> 0] ? 0 : D[a >> 0] = 1;
}, ___setErrNo:Ab, ___assert_fail:function(a, b, c, d) {
  y = !0;
  throw "Assertion failed: " + C(a) + ", at: " + [b ? C(b) : "unknown filename", c, d ? C(d) : "unknown function"] + " at " + Ka();
}, ___cxa_allocate_exception:function(a) {
  return G(a);
}, __ZSt18uncaught_exceptionv:kb, __isLeapYear:sb, ___cxa_guard_release:function() {
}, __addDays:wb, _strftime_l:function(a, b, c, d) {
  return xb(a, b, c, d);
}, _emscripten_set_main_loop_timing:Hc, _sbrk:Ca, ___cxa_begin_catch:function(a) {
  kb.q--;
  mb.push(a);
  var b = ob(a);
  b && nb[b].Za++;
  return a;
}, _emscripten_memcpy_big:function(a, b, c) {
  H.set(H.subarray(b, b + c), a);
  return a;
}, ___resumeException:function(a) {
  lb || (lb = a);
  var b = ob(a);
  b && (nb[b].Za = 0);
  throw a + " - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch.";
}, ___cxa_find_matching_catch:pb, _sysconf:function(a) {
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
  Ab(O.p);
  return -1;
}, _pthread_getspecific:function(a) {
  return zb[a] || 0;
}, _clock:Cb, __arraySum:tb, _pthread_self:function() {
  return 0;
}, _pthread_mutex_unlock:function() {
}, _pthread_once:yb, ___syscall54:function(a, b) {
  wd = b;
  try {
    var c = xd(), d = Z();
    switch(d) {
      case 21505:
        return c.tty ? 0 : -O.W;
      case 21506:
        return c.tty ? 0 : -O.W;
      case 21519:
        if (!c.tty) {
          return -O.W;
        }
        var f = Z();
        return E[f >> 2] = 0;
      case 21520:
        return c.tty ? -O.p : -O.W;
      case 21531:
        f = Z();
        if (!c.n.qb) {
          throw new P(O.W);
        }
        return c.n.qb(c, d, f);
      default:
        x("bad ioctl syscall " + d);
    }
  } catch (g) {
    return "undefined" !== typeof Gc && g instanceof P || x(g), -g.R;
  }
}, ___unlock:function() {
}, _pthread_cleanup_pop:function() {
  assert(Ad.level == K.length, "cannot pop if something else added meanwhile!");
  K.pop();
  Ad.level = K.length;
}, _pthread_cond_broadcast:function() {
  return 0;
}, _emscripten_set_main_loop:Pc, _pthread_setspecific:function(a, b) {
  if (!(a in zb)) {
    return O.p;
  }
  zb[a] = b;
  return 0;
}, ___cxa_atexit:function() {
  return ib.apply(null, arguments);
}, ___cxa_throw:function(a, b, c) {
  nb[a] = {ub:a, Ia:a, type:b, Od:c, Za:0};
  lb = a;
  "uncaught_exception" in kb ? kb.q++ : kb.q = 1;
  throw a + " - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch.";
}, ___lock:function() {
}, ___syscall6:function(a, b) {
  wd = b;
  try {
    var c = xd();
    xc(c);
    return 0;
  } catch (d) {
    return "undefined" !== typeof Gc && d instanceof P || x(d), -d.R;
  }
}, _pthread_cleanup_push:Ad, _time:function(a) {
  var b = Date.now() / 1E3 | 0;
  a && (E[a >> 2] = b);
  return b;
}, _pthread_mutex_lock:function() {
}, _atexit:ib, ___syscall140:function(a, b) {
  wd = b;
  try {
    var c = xd(), d = Z(), f = Z(), g = Z(), h = Z();
    assert(0 === d);
    yc(c, f, h);
    E[g >> 2] = c.position;
    c.ta && 0 === f && 0 === h && (c.ta = null);
    return 0;
  } catch (k) {
    return "undefined" !== typeof Gc && k instanceof P || x(k), -k.R;
  }
}, ___syscall145:function(a, b) {
  wd = b;
  try {
    var c = xd(), d = Z(), f;
    a: {
      for (var g = Z(), h = 0, k = 0;k < g;k++) {
        var u = E[d + (8 * k + 4) >> 2], t, n = c, v = E[d + 8 * k >> 2], z = u, B = void 0, J = D;
        if (0 > z || 0 > B) {
          throw new P(O.p);
        }
        if (1 === (n.flags & 2097155)) {
          throw new P(O.ba);
        }
        if (S(n.g.mode)) {
          throw new P(O.P);
        }
        if (!n.n.read) {
          throw new P(O.p);
        }
        var Q = !0;
        if ("undefined" === typeof B) {
          B = n.position, Q = !1;
        } else {
          if (!n.seekable) {
            throw new P(O.da);
          }
        }
        var Yb = n.n.read(n, J, v, z, B);
        Q || (n.position += Yb);
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
  } catch (rb) {
    return "undefined" !== typeof Gc && rb instanceof P || x(rb), -rb.R;
  }
}, ___syscall146:function(a, b) {
  wd = b;
  try {
    var c = xd(), d = Z(), f;
    a: {
      for (var g = Z(), h = 0, k = 0;k < g;k++) {
        var u = zc(c, D, E[d + 8 * k >> 2], E[d + (8 * k + 4) >> 2], void 0);
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
    return "undefined" !== typeof Gc && t instanceof P || x(t), -t.R;
  }
}, STACKTOP:p, STACK_MAX:Ra, tempDoublePtr:hb, ABORT:y, cttz_i8:Fd, ___dso_handle:Ed};
// EMSCRIPTEN_START_ASM

var N = (function(global,env,buffer) {
"use asm";var a=new global.Int8Array(buffer);var b=new global.Int16Array(buffer);var c=new global.Int32Array(buffer);var d=new global.Uint8Array(buffer);var e=new global.Uint16Array(buffer);var f=new global.Uint32Array(buffer);var g=new global.Float32Array(buffer);var h=new global.Float64Array(buffer);var i=env.STACKTOP|0;var j=env.STACK_MAX|0;var k=env.tempDoublePtr|0;var l=env.ABORT|0;var m=env.cttz_i8|0;var n=env.___dso_handle|0;var o=0;var p=0;var q=0;var r=0;var s=global.NaN,t=global.Infinity;var u=0,v=0,w=0,x=0,y=0.0,z=0,A=0,B=0,C=0.0;var D=0;var E=0;var F=0;var G=0;var H=0;var I=0;var J=0;var K=0;var L=0;var M=0;var N=global.Math.floor;var O=global.Math.abs;var P=global.Math.sqrt;var Q=global.Math.pow;var R=global.Math.cos;var S=global.Math.sin;var T=global.Math.tan;var U=global.Math.acos;var V=global.Math.asin;var W=global.Math.atan;var X=global.Math.atan2;var Y=global.Math.exp;var Z=global.Math.log;var _=global.Math.ceil;var $=global.Math.imul;var aa=global.Math.min;var ba=global.Math.clz32;var ca=env.abort;var da=env.assert;var ea=env.invoke_iiiiiiii;var fa=env.invoke_iiii;var ga=env.invoke_viiiii;var ha=env.invoke_iiiiiid;var ia=env.invoke_vi;var ja=env.invoke_vii;var ka=env.invoke_iiiiiii;var la=env.invoke_iiiiid;var ma=env.invoke_ii;var na=env.invoke_viii;var oa=env.invoke_v;var pa=env.invoke_iiiiiiiii;var qa=env.invoke_iiiii;var ra=env.invoke_viiiiii;var sa=env.invoke_iii;var ta=env.invoke_iiiiii;var ua=env.invoke_viiii;var va=env._fabs;var wa=env._strftime;var xa=env._pthread_cond_wait;var ya=env._pthread_key_create;var za=env._abort;var Aa=env.___cxa_guard_acquire;var Ba=env.___setErrNo;var Ca=env.___assert_fail;var Da=env.___cxa_allocate_exception;var Ea=env.__ZSt18uncaught_exceptionv;var Fa=env.__isLeapYear;var Ga=env.___cxa_guard_release;var Ha=env.__addDays;var Ia=env._strftime_l;var Ja=env._emscripten_set_main_loop_timing;var Ka=env._sbrk;var La=env.___cxa_begin_catch;var Ma=env._emscripten_memcpy_big;var Na=env.___resumeException;var Oa=env.___cxa_find_matching_catch;var Pa=env._sysconf;var Qa=env._pthread_getspecific;var Ra=env._clock;var Sa=env.__arraySum;var Ta=env._pthread_self;var Ua=env._pthread_mutex_unlock;var Va=env._pthread_once;var Wa=env.___syscall54;var Xa=env.___unlock;var Ya=env._pthread_cleanup_pop;var Za=env._pthread_cond_broadcast;var _a=env._emscripten_set_main_loop;var $a=env._pthread_setspecific;var ab=env.___cxa_atexit;var bb=env.___cxa_throw;var cb=env.___lock;var db=env.___syscall6;var eb=env._pthread_cleanup_push;var fb=env._time;var gb=env._pthread_mutex_lock;var hb=env._atexit;var ib=env.___syscall140;var jb=env.___syscall145;var kb=env.___syscall146;var lb=0.0;
// EMSCRIPTEN_START_FUNCS

function Rc(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0, m = 0.0, n = 0, o = 0, p = 0, q = 0, r = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0.0, _ = 0, aa = 0.0, ba = 0, ca = 0, da = 0, ea = 0, fa = 0, ga = 0, ha = 0, ia = 0, ja = 0, ka = 0, la = 0.0, ma = 0, na = 0, oa = 0, pa = 0, qa = 0, ra = 0, sa = 0, ta = 0.0, ua = 0, va = 0.0, wa = 0.0, xa = 0, ya = 0.0, za = 0, Aa = 0.0, Ba = 0, Ca = 0, Da = 0, Ea = 0, Fa = 0, Ga = 0, Ha = 0, Ia = 0, Ja = 0, Ka = 0.0, La = 0, Ma = 0, Na = 0, Oa = 0, Pa = 0.0, Qa = 0, Ra = 0, Sa = 0, Ta = 0.0, Ua = 0.0, Va = 0, Wa = 0, Xa = 0, Ya = 0, Za = 0, _a = 0, $a = 0, ab = 0, bb = 0, cb = 0, db = 0, eb = 0, fb = 0, gb = 0, hb = 0, ib = 0, jb = 0, kb = 0, lb = 0, mb = 0, nb = 0, ob = 0, pb = 0, qb = 0, rb = 0, sb = 0, tb = 0, ub = 0, vb = 0, wb = 0, xb = 0, yb = 0, zb = 0, Ab = 0, Bb = 0, Cb = 0, Db = 0, Eb = 0, Fb = 0, Gb = 0, Hb = 0, Ib = 0, Jb = 0, Kb = 0, Lb = 0, Mb = 0, Nb = 0, Ob = 0, Pb = 0, Qb = 0, Rb = 0, Sb = 0, Tb = 0, Ub = 0, Vb = 0, Wb = 0, Xb = 0, Yb = 0, Zb = 0, _b = 0, $b = 0, ac = 0, bc = 0, cc = 0, dc = 0, ec = 0, fc = 0.0, gc = 0, hc = 0, ic = 0, jc = 0, kc = 0, lc = 0, mc = 0, nc = 0, oc = 0, pc = 0, qc = 0, rc = 0, sc = 0, tc = 0, uc = 0, vc = 0, wc = 0, xc = 0, yc = 0, zc = 0, Ac = 0, Bc = 0, Cc = 0, Dc = 0, Ec = 0, Fc = 0, Gc = 0, Hc = 0, Ic = 0, Jc = 0, Lc = 0, Mc = 0, Nc = 0, Oc = 0, Pc = 0, Rc = 0, Sc = 0, Vc = 0, Wc = 0, Xc = 0, Yc = 0, Zc = 0, _c = 0, $c = 0, ad = 0, bd = 0, cd = 0, ed = 0, gd = 0, hd = 0, kd = 0, ld = 0, md = 0.0, nd = 0.0, od = 0.0, pd = 0.0, qd = 0.0, rd = 0.0, sd = 0.0, td = 0, ud = 0, vd = 0.0, wd = 0, xd = 0.0;
 g = i;
 i = i + 512 | 0;
 h = g;
 switch (e | 0) {
 case 0:
  {
   j = 24;
   k = -149;
   l = 4;
   break;
  }
 case 1:
  {
   j = 53;
   k = -1074;
   l = 4;
   break;
  }
 case 2:
  {
   j = 53;
   k = -1074;
   l = 4;
   break;
  }
 default:
  m = 0.0;
 }
 a : do if ((l | 0) == 4) {
  e = b + 4 | 0;
  n = b + 100 | 0;
  do {
   o = c[e >> 2] | 0;
   if (o >>> 0 < (c[n >> 2] | 0) >>> 0) {
    c[e >> 2] = o + 1;
    p = d[o >> 0] | 0;
   } else p = Uc(b) | 0;
  } while ((Kc(p) | 0) != 0);
  q = p;
  b : do switch (q | 0) {
  case 43:
  case 45:
   {
    o = 1 - (((q | 0) == 45 & 1) << 1) | 0;
    r = c[e >> 2] | 0;
    if (r >>> 0 < (c[n >> 2] | 0) >>> 0) {
     c[e >> 2] = r + 1;
     u = d[r >> 0] | 0;
     v = o;
     break b;
    } else {
     u = Uc(b) | 0;
     v = o;
     break b;
    }
    break;
   }
  default:
   {
    u = q;
    v = 1;
   }
  } while (0);
  o = u;
  r = 0;
  while (1) {
   if ((o | 32 | 0) != (a[16556 + r >> 0] | 0)) {
    w = o;
    x = r;
    break;
   }
   do if (r >>> 0 < 7) {
    y = c[e >> 2] | 0;
    if (y >>> 0 < (c[n >> 2] | 0) >>> 0) {
     c[e >> 2] = y + 1;
     z = d[y >> 0] | 0;
     break;
    } else {
     z = Uc(b) | 0;
     break;
    }
   } else z = o; while (0);
   y = r + 1 | 0;
   if (y >>> 0 < 8) {
    o = z;
    r = y;
   } else {
    w = z;
    x = y;
    break;
   }
  }
  c : do switch (x | 0) {
  case 8:
   break;
  case 3:
   {
    l = 23;
    break;
   }
  default:
   {
    r = (f | 0) != 0;
    if (r & x >>> 0 > 3) if ((x | 0) == 8) break c; else {
     l = 23;
     break c;
    }
    d : do if (!x) {
     o = w;
     y = 0;
     while (1) {
      if ((o | 32 | 0) != (a[19433 + y >> 0] | 0)) {
       A = o;
       B = y;
       break d;
      }
      do if (y >>> 0 < 2) {
       C = c[e >> 2] | 0;
       if (C >>> 0 < (c[n >> 2] | 0) >>> 0) {
        c[e >> 2] = C + 1;
        E = d[C >> 0] | 0;
        break;
       } else {
        E = Uc(b) | 0;
        break;
       }
      } else E = o; while (0);
      C = y + 1 | 0;
      if (C >>> 0 < 3) {
       o = E;
       y = C;
      } else {
       A = E;
       B = C;
       break;
      }
     }
    } else {
     A = w;
     B = x;
    } while (0);
    switch (B | 0) {
    case 3:
     {
      y = c[e >> 2] | 0;
      if (y >>> 0 < (c[n >> 2] | 0) >>> 0) {
       c[e >> 2] = y + 1;
       F = d[y >> 0] | 0;
      } else F = Uc(b) | 0;
      if ((F | 0) == 40) G = 1; else {
       if (!(c[n >> 2] | 0)) {
        m = s;
        break a;
       }
       c[e >> 2] = (c[e >> 2] | 0) + -1;
       m = s;
       break a;
      }
      while (1) {
       y = c[e >> 2] | 0;
       if (y >>> 0 < (c[n >> 2] | 0) >>> 0) {
        c[e >> 2] = y + 1;
        H = d[y >> 0] | 0;
       } else H = Uc(b) | 0;
       if (!((H + -48 | 0) >>> 0 < 10 | (H + -65 | 0) >>> 0 < 26) ? !((H | 0) == 95 | (H + -97 | 0) >>> 0 < 26) : 0) {
        I = H;
        J = G;
        break;
       }
       G = G + 1 | 0;
      }
      if ((I | 0) == 41) {
       m = s;
       break a;
      }
      y = (c[n >> 2] | 0) == 0;
      if (!y) c[e >> 2] = (c[e >> 2] | 0) + -1;
      if (!r) {
       c[(Qc() | 0) >> 2] = 22;
       Tc(b, 0);
       m = 0.0;
       break a;
      }
      if (!J) {
       m = s;
       break a;
      } else K = J;
      while (1) {
       K = K + -1 | 0;
       if (!y) c[e >> 2] = (c[e >> 2] | 0) + -1;
       if (!K) {
        m = s;
        break a;
       }
      }
      break;
     }
    case 0:
     {
      do if ((A | 0) == 48) {
       y = c[e >> 2] | 0;
       if (y >>> 0 < (c[n >> 2] | 0) >>> 0) {
        c[e >> 2] = y + 1;
        L = d[y >> 0] | 0;
       } else L = Uc(b) | 0;
       if ((L | 32 | 0) != 120) {
        if (!(c[n >> 2] | 0)) {
         M = 48;
         break;
        }
        c[e >> 2] = (c[e >> 2] | 0) + -1;
        M = 48;
        break;
       }
       y = c[e >> 2] | 0;
       if (y >>> 0 < (c[n >> 2] | 0) >>> 0) {
        c[e >> 2] = y + 1;
        N = d[y >> 0] | 0;
        P = 0;
       } else {
        N = Uc(b) | 0;
        P = 0;
       }
       e : while (1) {
        switch (N | 0) {
        case 46:
         {
          Q = P;
          l = 74;
          break e;
          break;
         }
        case 48:
         break;
        default:
         {
          R = 0;
          S = 0;
          T = 0;
          U = 0;
          V = N;
          W = P;
          X = 0;
          Y = 0;
          Z = 1.0;
          _ = 0;
          aa = 0.0;
          break e;
         }
        }
        y = c[e >> 2] | 0;
        if (y >>> 0 < (c[n >> 2] | 0) >>> 0) {
         c[e >> 2] = y + 1;
         N = d[y >> 0] | 0;
         P = 1;
         continue;
        } else {
         N = Uc(b) | 0;
         P = 1;
         continue;
        }
       }
       if ((l | 0) == 74) {
        y = c[e >> 2] | 0;
        if (y >>> 0 < (c[n >> 2] | 0) >>> 0) {
         c[e >> 2] = y + 1;
         ba = d[y >> 0] | 0;
        } else ba = Uc(b) | 0;
        if ((ba | 0) == 48) {
         y = 0;
         r = 0;
         while (1) {
          o = c[e >> 2] | 0;
          if (o >>> 0 < (c[n >> 2] | 0) >>> 0) {
           c[e >> 2] = o + 1;
           ca = d[o >> 0] | 0;
          } else ca = Uc(b) | 0;
          o = po(y | 0, r | 0, -1, -1) | 0;
          C = D;
          if ((ca | 0) == 48) {
           y = o;
           r = C;
          } else {
           R = 0;
           S = 0;
           T = o;
           U = C;
           V = ca;
           W = 1;
           X = 1;
           Y = 0;
           Z = 1.0;
           _ = 0;
           aa = 0.0;
           break;
          }
         }
        } else {
         R = 0;
         S = 0;
         T = 0;
         U = 0;
         V = ba;
         W = Q;
         X = 1;
         Y = 0;
         Z = 1.0;
         _ = 0;
         aa = 0.0;
        }
       }
       while (1) {
        r = V + -48 | 0;
        y = V | 32;
        if (r >>> 0 >= 10) {
         C = (V | 0) == 46;
         if (!(C | (y + -97 | 0) >>> 0 < 6)) {
          da = T;
          ea = S;
          fa = U;
          ga = R;
          ha = V;
          ia = W;
          ja = X;
          ka = _;
          la = aa;
          break;
         }
         if (C) if (!X) {
          ma = S;
          na = R;
          oa = S;
          pa = R;
          qa = W;
          ra = 1;
          sa = Y;
          ta = Z;
          ua = _;
          va = aa;
         } else {
          da = T;
          ea = S;
          fa = U;
          ga = R;
          ha = 46;
          ia = W;
          ja = X;
          ka = _;
          la = aa;
          break;
         } else l = 86;
        } else l = 86;
        if ((l | 0) == 86) {
         l = 0;
         C = (V | 0) > 57 ? y + -87 | 0 : r;
         do if (!((R | 0) < 0 | (R | 0) == 0 & S >>> 0 < 8)) {
          if ((R | 0) < 0 | (R | 0) == 0 & S >>> 0 < 14) {
           wa = Z * .0625;
           xa = Y;
           ya = wa;
           za = _;
           Aa = aa + wa * +(C | 0);
           break;
          }
          if ((Y | 0) != 0 | (C | 0) == 0) {
           xa = Y;
           ya = Z;
           za = _;
           Aa = aa;
          } else {
           xa = 1;
           ya = Z;
           za = _;
           Aa = aa + Z * .5;
          }
         } else {
          xa = Y;
          ya = Z;
          za = C + (_ << 4) | 0;
          Aa = aa;
         } while (0);
         C = po(S | 0, R | 0, 1, 0) | 0;
         ma = T;
         na = U;
         oa = C;
         pa = D;
         qa = 1;
         ra = X;
         sa = xa;
         ta = ya;
         ua = za;
         va = Aa;
        }
        C = c[e >> 2] | 0;
        if (C >>> 0 < (c[n >> 2] | 0) >>> 0) {
         c[e >> 2] = C + 1;
         R = pa;
         S = oa;
         T = ma;
         U = na;
         V = d[C >> 0] | 0;
         W = qa;
         X = ra;
         Y = sa;
         Z = ta;
         _ = ua;
         aa = va;
         continue;
        } else {
         R = pa;
         S = oa;
         T = ma;
         U = na;
         V = Uc(b) | 0;
         W = qa;
         X = ra;
         Y = sa;
         Z = ta;
         _ = ua;
         aa = va;
         continue;
        }
       }
       if (!ia) {
        C = (c[n >> 2] | 0) == 0;
        if (!C) c[e >> 2] = (c[e >> 2] | 0) + -1;
        if (f) {
         if (!C ? (C = c[e >> 2] | 0, c[e >> 2] = C + -1, (ja | 0) != 0) : 0) c[e >> 2] = C + -2;
        } else Tc(b, 0);
        m = +(v | 0) * 0.0;
        break a;
       }
       C = (ja | 0) == 0;
       r = C ? ea : da;
       y = C ? ga : fa;
       if ((ga | 0) < 0 | (ga | 0) == 0 & ea >>> 0 < 8) {
        C = ea;
        o = ga;
        Ba = ka;
        while (1) {
         Ca = Ba << 4;
         C = po(C | 0, o | 0, 1, 0) | 0;
         o = D;
         if (!((o | 0) < 0 | (o | 0) == 0 & C >>> 0 < 8)) {
          Da = Ca;
          break;
         } else Ba = Ca;
        }
       } else Da = ka;
       if ((ha | 32 | 0) == 112) {
        Ba = ce(b, f) | 0;
        C = D;
        if ((Ba | 0) == 0 & (C | 0) == -2147483648) {
         if (!f) {
          Tc(b, 0);
          m = 0.0;
          break a;
         }
         if (!(c[n >> 2] | 0)) {
          Ea = 0;
          Fa = 0;
         } else {
          c[e >> 2] = (c[e >> 2] | 0) + -1;
          Ea = 0;
          Fa = 0;
         }
        } else {
         Ea = Ba;
         Fa = C;
        }
       } else if (!(c[n >> 2] | 0)) {
        Ea = 0;
        Fa = 0;
       } else {
        c[e >> 2] = (c[e >> 2] | 0) + -1;
        Ea = 0;
        Fa = 0;
       }
       C = so(r | 0, y | 0, 2) | 0;
       Ba = po(C | 0, D | 0, -32, -1) | 0;
       C = po(Ba | 0, D | 0, Ea | 0, Fa | 0) | 0;
       Ba = D;
       if (!Da) {
        m = +(v | 0) * 0.0;
        break a;
       }
       if ((Ba | 0) > 0 | (Ba | 0) == 0 & C >>> 0 > (0 - k | 0) >>> 0) {
        c[(Qc() | 0) >> 2] = 34;
        m = +(v | 0) * 17976931348623157.0e292 * 17976931348623157.0e292;
        break a;
       }
       o = k + -106 | 0;
       Ca = ((o | 0) < 0) << 31 >> 31;
       if ((Ba | 0) < (Ca | 0) | (Ba | 0) == (Ca | 0) & C >>> 0 < o >>> 0) {
        c[(Qc() | 0) >> 2] = 34;
        m = +(v | 0) * 2.2250738585072014e-308 * 2.2250738585072014e-308;
        break a;
       }
       if ((Da | 0) > -1) {
        o = C;
        Ca = Ba;
        Ga = Da;
        wa = la;
        while (1) {
         Ha = !(wa >= .5);
         Ia = Ha & 1 | Ga << 1;
         Ja = Ia ^ 1;
         Ka = wa + (Ha ? wa : wa + -1.0);
         Ha = po(o | 0, Ca | 0, -1, -1) | 0;
         La = D;
         if ((Ia | 0) > -1) {
          o = Ha;
          Ca = La;
          Ga = Ja;
          wa = Ka;
         } else {
          Ma = Ha;
          Na = La;
          Oa = Ja;
          Pa = Ka;
          break;
         }
        }
       } else {
        Ma = C;
        Na = Ba;
        Oa = Da;
        Pa = la;
       }
       Ga = no(32, 0, k | 0, ((k | 0) < 0) << 31 >> 31 | 0) | 0;
       Ca = po(Ma | 0, Na | 0, Ga | 0, D | 0) | 0;
       Ga = D;
       if (0 > (Ga | 0) | 0 == (Ga | 0) & j >>> 0 > Ca >>> 0) if ((Ca | 0) < 0) {
        Qa = 0;
        l = 127;
       } else {
        Ra = Ca;
        l = 125;
       } else {
        Ra = j;
        l = 125;
       }
       if ((l | 0) == 125) if ((Ra | 0) < 53) {
        Qa = Ra;
        l = 127;
       } else {
        Sa = Ra;
        Ta = +(v | 0);
        Ua = 0.0;
       }
       if ((l | 0) == 127) {
        wa = +(v | 0);
        Sa = Qa;
        Ta = wa;
        Ua = +dd(+id(1.0, 84 - Qa | 0), wa);
       }
       Ca = (Oa & 1 | 0) == 0 & (Pa != 0.0 & (Sa | 0) < 32);
       wa = Ta * (Ca ? 0.0 : Pa) + (Ua + Ta * +(((Ca & 1) + Oa | 0) >>> 0)) - Ua;
       if (!(wa != 0.0)) c[(Qc() | 0) >> 2] = 34;
       m = +jd(wa, Ma);
       break a;
      } else M = A; while (0);
      Ca = k + j | 0;
      Ga = 0 - Ca | 0;
      o = M;
      y = 0;
      f : while (1) {
       switch (o | 0) {
       case 46:
        {
         Va = y;
         l = 138;
         break f;
         break;
        }
       case 48:
        break;
       default:
        {
         Wa = o;
         Xa = 0;
         Ya = 0;
         Za = y;
         _a = 0;
         break f;
        }
       }
       r = c[e >> 2] | 0;
       if (r >>> 0 < (c[n >> 2] | 0) >>> 0) {
        c[e >> 2] = r + 1;
        o = d[r >> 0] | 0;
        y = 1;
        continue;
       } else {
        o = Uc(b) | 0;
        y = 1;
        continue;
       }
      }
      if ((l | 0) == 138) {
       y = c[e >> 2] | 0;
       if (y >>> 0 < (c[n >> 2] | 0) >>> 0) {
        c[e >> 2] = y + 1;
        $a = d[y >> 0] | 0;
       } else $a = Uc(b) | 0;
       if (($a | 0) == 48) {
        y = 0;
        o = 0;
        while (1) {
         r = po(y | 0, o | 0, -1, -1) | 0;
         Ja = D;
         La = c[e >> 2] | 0;
         if (La >>> 0 < (c[n >> 2] | 0) >>> 0) {
          c[e >> 2] = La + 1;
          ab = d[La >> 0] | 0;
         } else ab = Uc(b) | 0;
         if ((ab | 0) == 48) {
          y = r;
          o = Ja;
         } else {
          Wa = ab;
          Xa = r;
          Ya = Ja;
          Za = 1;
          _a = 1;
          break;
         }
        }
       } else {
        Wa = $a;
        Xa = 0;
        Ya = 0;
        Za = Va;
        _a = 1;
       }
      }
      c[h >> 2] = 0;
      o = Wa + -48 | 0;
      y = (Wa | 0) == 46;
      g : do if (y | o >>> 0 < 10) {
       Ja = h + 496 | 0;
       r = Wa;
       La = 0;
       Ha = 0;
       Ia = y;
       bb = o;
       cb = Xa;
       db = Ya;
       eb = Za;
       fb = _a;
       gb = 0;
       hb = 0;
       ib = 0;
       h : while (1) {
        do if (Ia) if (!fb) {
         jb = La;
         kb = Ha;
         lb = La;
         mb = Ha;
         nb = eb;
         ob = 1;
         pb = gb;
         qb = hb;
         rb = ib;
        } else {
         sb = cb;
         tb = db;
         ub = La;
         vb = Ha;
         wb = eb;
         xb = gb;
         yb = hb;
         zb = ib;
         break h;
        } else {
         Ab = po(La | 0, Ha | 0, 1, 0) | 0;
         Bb = D;
         Cb = (r | 0) != 48;
         if ((hb | 0) >= 125) {
          if (!Cb) {
           jb = cb;
           kb = db;
           lb = Ab;
           mb = Bb;
           nb = eb;
           ob = fb;
           pb = gb;
           qb = hb;
           rb = ib;
           break;
          }
          c[Ja >> 2] = c[Ja >> 2] | 1;
          jb = cb;
          kb = db;
          lb = Ab;
          mb = Bb;
          nb = eb;
          ob = fb;
          pb = gb;
          qb = hb;
          rb = ib;
          break;
         }
         Db = h + (hb << 2) | 0;
         if (!gb) Eb = bb; else Eb = r + -48 + ((c[Db >> 2] | 0) * 10 | 0) | 0;
         c[Db >> 2] = Eb;
         Db = gb + 1 | 0;
         Fb = (Db | 0) == 9;
         jb = cb;
         kb = db;
         lb = Ab;
         mb = Bb;
         nb = 1;
         ob = fb;
         pb = Fb ? 0 : Db;
         qb = (Fb & 1) + hb | 0;
         rb = Cb ? Ab : ib;
        } while (0);
        Ab = c[e >> 2] | 0;
        if (Ab >>> 0 < (c[n >> 2] | 0) >>> 0) {
         c[e >> 2] = Ab + 1;
         Gb = d[Ab >> 0] | 0;
        } else Gb = Uc(b) | 0;
        bb = Gb + -48 | 0;
        Ia = (Gb | 0) == 46;
        if (!(Ia | bb >>> 0 < 10)) {
         Hb = Gb;
         Ib = jb;
         Jb = lb;
         Kb = kb;
         Lb = mb;
         Mb = nb;
         Nb = ob;
         Ob = pb;
         Pb = qb;
         Qb = rb;
         l = 161;
         break g;
        } else {
         r = Gb;
         La = lb;
         Ha = mb;
         cb = jb;
         db = kb;
         eb = nb;
         fb = ob;
         gb = pb;
         hb = qb;
         ib = rb;
        }
       }
       Rb = ub;
       Sb = vb;
       Tb = sb;
       Ub = tb;
       Vb = (wb | 0) != 0;
       Wb = xb;
       Xb = yb;
       Yb = zb;
       l = 169;
      } else {
       Hb = Wa;
       Ib = Xa;
       Jb = 0;
       Kb = Ya;
       Lb = 0;
       Mb = Za;
       Nb = _a;
       Ob = 0;
       Pb = 0;
       Qb = 0;
       l = 161;
      } while (0);
      do if ((l | 0) == 161) {
       o = (Nb | 0) == 0;
       y = o ? Jb : Ib;
       ib = o ? Lb : Kb;
       o = (Mb | 0) != 0;
       if (!((Hb | 32 | 0) == 101 & o)) if ((Hb | 0) > -1) {
        Rb = Jb;
        Sb = Lb;
        Tb = y;
        Ub = ib;
        Vb = o;
        Wb = Ob;
        Xb = Pb;
        Yb = Qb;
        l = 169;
        break;
       } else {
        Zb = Jb;
        _b = Lb;
        $b = o;
        ac = y;
        bc = ib;
        cc = Ob;
        dc = Pb;
        ec = Qb;
        l = 171;
        break;
       }
       o = ce(b, f) | 0;
       hb = D;
       if ((o | 0) == 0 & (hb | 0) == -2147483648) {
        if (!f) {
         Tc(b, 0);
         fc = 0.0;
         break;
        }
        if (!(c[n >> 2] | 0)) {
         gc = 0;
         hc = 0;
        } else {
         c[e >> 2] = (c[e >> 2] | 0) + -1;
         gc = 0;
         hc = 0;
        }
       } else {
        gc = o;
        hc = hb;
       }
       hb = po(gc | 0, hc | 0, y | 0, ib | 0) | 0;
       ic = hb;
       jc = Jb;
       kc = D;
       lc = Lb;
       mc = Ob;
       nc = Pb;
       oc = Qb;
       l = 173;
      } while (0);
      if ((l | 0) == 169) if (c[n >> 2] | 0) {
       c[e >> 2] = (c[e >> 2] | 0) + -1;
       if (Vb) {
        ic = Tb;
        jc = Rb;
        kc = Ub;
        lc = Sb;
        mc = Wb;
        nc = Xb;
        oc = Yb;
        l = 173;
       } else l = 172;
      } else {
       Zb = Rb;
       _b = Sb;
       $b = Vb;
       ac = Tb;
       bc = Ub;
       cc = Wb;
       dc = Xb;
       ec = Yb;
       l = 171;
      }
      if ((l | 0) == 171) if ($b) {
       ic = ac;
       jc = Zb;
       kc = bc;
       lc = _b;
       mc = cc;
       nc = dc;
       oc = ec;
       l = 173;
      } else l = 172;
      do if ((l | 0) == 172) {
       c[(Qc() | 0) >> 2] = 22;
       Tc(b, 0);
       fc = 0.0;
      } else if ((l | 0) == 173) {
       hb = c[h >> 2] | 0;
       if (!hb) {
        fc = +(v | 0) * 0.0;
        break;
       }
       if (((lc | 0) < 0 | (lc | 0) == 0 & jc >>> 0 < 10) & ((ic | 0) == (jc | 0) & (kc | 0) == (lc | 0)) ? j >>> 0 > 30 | (hb >>> j | 0) == 0 : 0) {
        fc = +(v | 0) * +(hb >>> 0);
        break;
       }
       hb = (k | 0) / -2 | 0;
       ib = ((hb | 0) < 0) << 31 >> 31;
       if ((kc | 0) > (ib | 0) | (kc | 0) == (ib | 0) & ic >>> 0 > hb >>> 0) {
        c[(Qc() | 0) >> 2] = 34;
        fc = +(v | 0) * 17976931348623157.0e292 * 17976931348623157.0e292;
        break;
       }
       hb = k + -106 | 0;
       ib = ((hb | 0) < 0) << 31 >> 31;
       if ((kc | 0) < (ib | 0) | (kc | 0) == (ib | 0) & ic >>> 0 < hb >>> 0) {
        c[(Qc() | 0) >> 2] = 34;
        fc = +(v | 0) * 2.2250738585072014e-308 * 2.2250738585072014e-308;
        break;
       }
       if (!mc) pc = nc; else {
        if ((mc | 0) < 9) {
         hb = h + (nc << 2) | 0;
         ib = c[hb >> 2] | 0;
         y = mc;
         while (1) {
          o = ib * 10 | 0;
          y = y + 1 | 0;
          if ((y | 0) == 9) {
           qc = o;
           break;
          } else ib = o;
         }
         c[hb >> 2] = qc;
        }
        pc = nc + 1 | 0;
       }
       if ((oc | 0) < 9 ? (oc | 0) <= (ic | 0) & (ic | 0) < 18 : 0) {
        if ((ic | 0) == 9) {
         fc = +(v | 0) * +((c[h >> 2] | 0) >>> 0);
         break;
        }
        if ((ic | 0) < 9) {
         fc = +(v | 0) * +((c[h >> 2] | 0) >>> 0) / +(c[2584 + (8 - ic << 2) >> 2] | 0);
         break;
        }
        ib = j + 27 + ($(ic, -3) | 0) | 0;
        y = c[h >> 2] | 0;
        if ((ib | 0) > 30 | (y >>> ib | 0) == 0) {
         fc = +(v | 0) * +(y >>> 0) * +(c[2584 + (ic + -10 << 2) >> 2] | 0);
         break;
        }
       }
       y = (ic | 0) % 9 | 0;
       if (!y) {
        rc = 0;
        sc = 0;
        tc = ic;
        uc = pc;
       } else {
        ib = (ic | 0) > -1 ? y : y + 9 | 0;
        y = c[2584 + (8 - ib << 2) >> 2] | 0;
        if (pc) {
         o = 1e9 / (y | 0) | 0;
         gb = 0;
         fb = 0;
         eb = 0;
         db = ic;
         while (1) {
          cb = h + (eb << 2) | 0;
          Ha = c[cb >> 2] | 0;
          La = ((Ha >>> 0) / (y >>> 0) | 0) + fb | 0;
          c[cb >> 2] = La;
          cb = $((Ha >>> 0) % (y >>> 0) | 0, o) | 0;
          Ha = (eb | 0) == (gb | 0) & (La | 0) == 0;
          eb = eb + 1 | 0;
          La = Ha ? db + -9 | 0 : db;
          r = Ha ? eb & 127 : gb;
          if ((eb | 0) == (pc | 0)) {
           vc = cb;
           wc = r;
           xc = La;
           break;
          } else {
           gb = r;
           fb = cb;
           db = La;
          }
         }
         if (!vc) {
          yc = wc;
          zc = xc;
          Ac = pc;
         } else {
          c[h + (pc << 2) >> 2] = vc;
          yc = wc;
          zc = xc;
          Ac = pc + 1 | 0;
         }
        } else {
         yc = 0;
         zc = ic;
         Ac = 0;
        }
        rc = yc;
        sc = 0;
        tc = 9 - ib + zc | 0;
        uc = Ac;
       }
       i : while (1) {
        db = (tc | 0) < 18;
        fb = (tc | 0) == 18;
        gb = h + (rc << 2) | 0;
        eb = sc;
        o = uc;
        while (1) {
         if (!db) {
          if (!fb) {
           Bc = rc;
           Cc = eb;
           Dc = tc;
           Ec = o;
           break i;
          }
          if ((c[gb >> 2] | 0) >>> 0 >= 9007199) {
           Bc = rc;
           Cc = eb;
           Dc = 18;
           Ec = o;
           break i;
          }
         }
         y = 0;
         hb = o + 127 | 0;
         La = o;
         while (1) {
          cb = hb & 127;
          r = h + (cb << 2) | 0;
          Ha = so(c[r >> 2] | 0, 0, 29) | 0;
          bb = po(Ha | 0, D | 0, y | 0, 0) | 0;
          Ha = D;
          if (Ha >>> 0 > 0 | (Ha | 0) == 0 & bb >>> 0 > 1e9) {
           Ia = Ao(bb | 0, Ha | 0, 1e9, 0) | 0;
           Ja = Bo(bb | 0, Ha | 0, 1e9, 0) | 0;
           Fc = Ja;
           Gc = Ia;
          } else {
           Fc = bb;
           Gc = 0;
          }
          c[r >> 2] = Fc;
          r = (cb | 0) == (rc | 0);
          bb = (cb | 0) != (La + 127 & 127 | 0) | r ? La : (Fc | 0) == 0 ? cb : La;
          if (r) {
           Hc = Gc;
           Ic = bb;
           break;
          } else {
           y = Gc;
           hb = cb + -1 | 0;
           La = bb;
          }
         }
         La = eb + -29 | 0;
         if (!Hc) {
          eb = La;
          o = Ic;
         } else {
          Jc = La;
          Lc = Hc;
          Mc = Ic;
          break;
         }
        }
        o = rc + 127 & 127;
        if ((o | 0) == (Mc | 0)) {
         eb = Mc + 127 & 127;
         gb = h + ((Mc + 126 & 127) << 2) | 0;
         c[gb >> 2] = c[gb >> 2] | c[h + (eb << 2) >> 2];
         Nc = eb;
        } else Nc = Mc;
        c[h + (o << 2) >> 2] = Lc;
        rc = o;
        sc = Jc;
        tc = tc + 9 | 0;
        uc = Nc;
       }
       j : while (1) {
        Oc = Ec + 1 & 127;
        ib = h + ((Ec + 127 & 127) << 2) | 0;
        o = Bc;
        eb = Cc;
        gb = Dc;
        while (1) {
         fb = (gb | 0) == 18;
         db = (gb | 0) > 27 ? 9 : 1;
         La = fb ^ 1;
         Pc = o;
         Rc = eb;
         while (1) {
          Sc = Pc & 127;
          Vc = (Sc | 0) == (Ec | 0);
          do if (!Vc) {
           hb = c[h + (Sc << 2) >> 2] | 0;
           if (hb >>> 0 < 9007199) {
            l = 219;
            break;
           }
           if (hb >>> 0 > 9007199) break;
           hb = Pc + 1 & 127;
           if ((hb | 0) == (Ec | 0)) {
            l = 219;
            break;
           }
           y = c[h + (hb << 2) >> 2] | 0;
           if (y >>> 0 < 254740991) {
            l = 219;
            break;
           }
           if (!(y >>> 0 > 254740991 | La)) {
            Wc = Sc;
            Xc = Pc;
            Yc = Rc;
            Zc = Ec;
            break j;
           }
          } else l = 219; while (0);
          if ((l | 0) == 219 ? (l = 0, fb) : 0) {
           l = 220;
           break j;
          }
          y = Rc + db | 0;
          if ((Pc | 0) == (Ec | 0)) {
           Pc = Ec;
           Rc = y;
          } else {
           _c = y;
           $c = Pc;
           break;
          }
         }
         fb = (1 << db) + -1 | 0;
         La = 1e9 >>> db;
         y = $c;
         hb = 0;
         bb = $c;
         cb = gb;
         while (1) {
          r = h + (bb << 2) | 0;
          Ia = c[r >> 2] | 0;
          Ja = (Ia >>> db) + hb | 0;
          c[r >> 2] = Ja;
          r = $(Ia & fb, La) | 0;
          Ia = (bb | 0) == (y | 0) & (Ja | 0) == 0;
          bb = bb + 1 & 127;
          Ja = Ia ? cb + -9 | 0 : cb;
          Ha = Ia ? bb : y;
          if ((bb | 0) == (Ec | 0)) {
           ad = r;
           bd = Ha;
           cd = Ja;
           break;
          } else {
           y = Ha;
           hb = r;
           cb = Ja;
          }
         }
         if (!ad) {
          o = bd;
          eb = _c;
          gb = cd;
          continue;
         }
         if ((Oc | 0) != (bd | 0)) {
          ed = _c;
          gd = ad;
          hd = bd;
          kd = cd;
          break;
         }
         c[ib >> 2] = c[ib >> 2] | 1;
         o = bd;
         eb = _c;
         gb = cd;
        }
        c[h + (Ec << 2) >> 2] = gd;
        Bc = hd;
        Cc = ed;
        Dc = kd;
        Ec = Oc;
       }
       if ((l | 0) == 220) if (Vc) {
        c[h + (Oc + -1 << 2) >> 2] = 0;
        Wc = Ec;
        Xc = Pc;
        Yc = Rc;
        Zc = Oc;
       } else {
        Wc = Sc;
        Xc = Pc;
        Yc = Rc;
        Zc = Ec;
       }
       wa = +((c[h + (Wc << 2) >> 2] | 0) >>> 0);
       gb = Xc + 1 & 127;
       if ((gb | 0) == (Zc | 0)) {
        eb = Xc + 2 & 127;
        c[h + (eb + -1 << 2) >> 2] = 0;
        ld = eb;
       } else ld = Zc;
       Ka = +(v | 0);
       md = Ka * (wa * 1.0e9 + +((c[h + (gb << 2) >> 2] | 0) >>> 0));
       gb = Yc + 53 | 0;
       eb = gb - k | 0;
       o = (eb | 0) < (j | 0);
       ib = o & 1;
       cb = o ? ((eb | 0) < 0 ? 0 : eb) : j;
       if ((cb | 0) < 53) {
        wa = +dd(+id(1.0, 105 - cb | 0), md);
        nd = +fd(md, +id(1.0, 53 - cb | 0));
        od = wa;
        pd = nd;
        qd = wa + (md - nd);
       } else {
        od = 0.0;
        pd = 0.0;
        qd = md;
       }
       hb = Xc + 2 & 127;
       do if ((hb | 0) == (ld | 0)) rd = pd; else {
        y = c[h + (hb << 2) >> 2] | 0;
        do if (y >>> 0 >= 5e8) {
         if (y >>> 0 > 5e8) {
          sd = Ka * .75 + pd;
          break;
         }
         if ((Xc + 3 & 127 | 0) == (ld | 0)) {
          sd = Ka * .5 + pd;
          break;
         } else {
          sd = Ka * .75 + pd;
          break;
         }
        } else {
         if ((y | 0) == 0 ? (Xc + 3 & 127 | 0) == (ld | 0) : 0) {
          sd = pd;
          break;
         }
         sd = Ka * .25 + pd;
        } while (0);
        if ((53 - cb | 0) <= 1) {
         rd = sd;
         break;
        }
        if (+fd(sd, 1.0) != 0.0) {
         rd = sd;
         break;
        }
        rd = sd + 1.0;
       } while (0);
       Ka = qd + rd - od;
       do if ((gb & 2147483647 | 0) > (-2 - Ca | 0)) {
        if (!(+O(+Ka) >= 9007199254740992.0)) {
         td = ib;
         ud = Yc;
         vd = Ka;
        } else {
         td = o & (cb | 0) == (eb | 0) ? 0 : ib;
         ud = Yc + 1 | 0;
         vd = Ka * .5;
        }
        if ((ud + 50 | 0) <= (Ga | 0) ? !(rd != 0.0 & (td | 0) != 0) : 0) {
         wd = ud;
         xd = vd;
         break;
        }
        c[(Qc() | 0) >> 2] = 34;
        wd = ud;
        xd = vd;
       } else {
        wd = Yc;
        xd = Ka;
       } while (0);
       fc = +jd(xd, wd);
      } while (0);
      m = fc;
      break a;
      break;
     }
    default:
     {
      if (c[n >> 2] | 0) c[e >> 2] = (c[e >> 2] | 0) + -1;
      c[(Qc() | 0) >> 2] = 22;
      Tc(b, 0);
      m = 0.0;
      break a;
     }
    }
   }
  } while (0);
  if ((l | 0) == 23) {
   Ga = (c[n >> 2] | 0) == 0;
   if (!Ga) c[e >> 2] = (c[e >> 2] | 0) + -1;
   if ((f | 0) != 0 & x >>> 0 > 3) {
    Ca = x;
    do {
     if (!Ga) c[e >> 2] = (c[e >> 2] | 0) + -1;
     Ca = Ca + -1 | 0;
    } while (Ca >>> 0 > 3);
   }
  }
  m = +(v | 0) * t;
 } while (0);
 i = g;
 return +m;
}

function ee(e, f, g, j, l) {
 e = e | 0;
 f = f | 0;
 g = g | 0;
 j = j | 0;
 l = l | 0;
 var m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, _ = 0, aa = 0, ba = 0, ca = 0, da = 0, ea = 0, fa = 0, ga = 0, ha = 0, ia = 0, ja = 0, ka = 0, la = 0, ma = 0, na = 0, oa = 0, pa = 0, qa = 0, ra = 0, sa = 0, ta = 0, ua = 0, va = 0, wa = 0, xa = 0, ya = 0, za = 0, Aa = 0, Ba = 0, Ca = 0, Da = 0, Ea = 0, Fa = 0, Ga = 0, Ha = 0, Ia = 0, Ja = 0, Ka = 0, La = 0, Ma = 0, Na = 0, Oa = 0, Pa = 0, Qa = 0, Ra = 0, Sa = 0, Ta = 0, Ua = 0, Va = 0, Wa = 0, Xa = 0, Ya = 0, Za = 0, _a = 0, $a = 0, ab = 0.0, bb = 0.0, cb = 0, db = 0, eb = 0, fb = 0, gb = 0, hb = 0.0, ib = 0.0, jb = 0.0, kb = 0.0, lb = 0, mb = 0, nb = 0, ob = 0, pb = 0, qb = 0, rb = 0, sb = 0, tb = 0.0, ub = 0, vb = 0, wb = 0, xb = 0, yb = 0, zb = 0, Ab = 0, Bb = 0, Cb = 0, Db = 0, Eb = 0, Fb = 0, Gb = 0, Hb = 0, Ib = 0, Jb = 0, Kb = 0, Lb = 0, Mb = 0, Nb = 0, Ob = 0, Pb = 0, Qb = 0, Rb = 0, Sb = 0, Tb = 0, Ub = 0, Vb = 0.0, Wb = 0.0, Xb = 0.0, Yb = 0, Zb = 0, _b = 0, $b = 0, ac = 0, bc = 0, cc = 0, dc = 0, ec = 0, fc = 0, gc = 0, hc = 0, ic = 0, jc = 0, kc = 0, lc = 0, mc = 0, nc = 0, oc = 0, pc = 0, qc = 0, rc = 0, sc = 0, tc = 0, uc = 0, vc = 0, wc = 0, xc = 0, yc = 0, zc = 0, Ac = 0, Bc = 0, Cc = 0, Dc = 0, Ec = 0;
 m = i;
 i = i + 624 | 0;
 n = m + 24 | 0;
 o = m + 16 | 0;
 p = m + 588 | 0;
 q = m + 576 | 0;
 r = m;
 s = m + 536 | 0;
 t = m + 8 | 0;
 u = m + 528 | 0;
 v = (e | 0) != 0;
 w = s + 40 | 0;
 x = w;
 y = s + 39 | 0;
 s = t + 4 | 0;
 z = q + 12 | 0;
 A = q + 11 | 0;
 q = p;
 B = z;
 C = B - q | 0;
 E = -2 - q | 0;
 F = B + 2 | 0;
 G = n + 288 | 0;
 H = p + 9 | 0;
 I = H;
 J = p + 8 | 0;
 K = 0;
 L = f;
 f = 0;
 M = 0;
 a : while (1) {
  do if ((K | 0) > -1) if ((f | 0) > (2147483647 - K | 0)) {
   c[(Qc() | 0) >> 2] = 75;
   N = -1;
   break;
  } else {
   N = f + K | 0;
   break;
  } else N = K; while (0);
  O = a[L >> 0] | 0;
  if (!(O << 24 >> 24)) {
   P = N;
   Q = M;
   R = 245;
   break;
  } else {
   S = O;
   T = L;
  }
  b : while (1) {
   switch (S << 24 >> 24) {
   case 37:
    {
     U = T;
     V = T;
     R = 9;
     break b;
     break;
    }
   case 0:
    {
     W = T;
     X = T;
     break b;
     break;
    }
   default:
    {}
   }
   O = T + 1 | 0;
   S = a[O >> 0] | 0;
   T = O;
  }
  c : do if ((R | 0) == 9) while (1) {
   R = 0;
   if ((a[U + 1 >> 0] | 0) != 37) {
    W = U;
    X = V;
    break c;
   }
   O = V + 1 | 0;
   Y = U + 2 | 0;
   if ((a[Y >> 0] | 0) == 37) {
    U = Y;
    V = O;
    R = 9;
   } else {
    W = Y;
    X = O;
    break;
   }
  } while (0);
  O = X - L | 0;
  if (v ? (c[e >> 2] & 32 | 0) == 0 : 0) xd(L, O, e) | 0;
  if ((X | 0) != (L | 0)) {
   K = N;
   L = W;
   f = O;
   continue;
  }
  Y = W + 1 | 0;
  Z = a[Y >> 0] | 0;
  _ = (Z << 24 >> 24) + -48 | 0;
  if (_ >>> 0 < 10) {
   aa = (a[W + 2 >> 0] | 0) == 36;
   ba = aa ? W + 3 | 0 : Y;
   ca = a[ba >> 0] | 0;
   da = aa ? _ : -1;
   ea = aa ? 1 : M;
   fa = ba;
  } else {
   ca = Z;
   da = -1;
   ea = M;
   fa = Y;
  }
  Y = ca << 24 >> 24;
  d : do if ((Y & -32 | 0) == 32) {
   Z = Y;
   ba = ca;
   aa = 0;
   _ = fa;
   while (1) {
    if (!(1 << Z + -32 & 75913)) {
     ga = ba;
     ha = aa;
     ia = _;
     break d;
    }
    ja = 1 << (ba << 24 >> 24) + -32 | aa;
    ka = _ + 1 | 0;
    la = a[ka >> 0] | 0;
    Z = la << 24 >> 24;
    if ((Z & -32 | 0) != 32) {
     ga = la;
     ha = ja;
     ia = ka;
     break;
    } else {
     ba = la;
     aa = ja;
     _ = ka;
    }
   }
  } else {
   ga = ca;
   ha = 0;
   ia = fa;
  } while (0);
  do if (ga << 24 >> 24 == 42) {
   Y = ia + 1 | 0;
   _ = (a[Y >> 0] | 0) + -48 | 0;
   if (_ >>> 0 < 10 ? (a[ia + 2 >> 0] | 0) == 36 : 0) {
    c[l + (_ << 2) >> 2] = 10;
    ma = 1;
    na = ia + 3 | 0;
    oa = c[j + ((a[Y >> 0] | 0) + -48 << 3) >> 2] | 0;
   } else {
    if (ea) {
     pa = -1;
     break a;
    }
    if (!v) {
     qa = ha;
     ra = Y;
     sa = 0;
     ta = 0;
     break;
    }
    _ = (c[g >> 2] | 0) + (4 - 1) & ~(4 - 1);
    aa = c[_ >> 2] | 0;
    c[g >> 2] = _ + 4;
    ma = 0;
    na = Y;
    oa = aa;
   }
   if ((oa | 0) < 0) {
    qa = ha | 8192;
    ra = na;
    sa = ma;
    ta = 0 - oa | 0;
   } else {
    qa = ha;
    ra = na;
    sa = ma;
    ta = oa;
   }
  } else {
   aa = (ga << 24 >> 24) + -48 | 0;
   if (aa >>> 0 < 10) {
    Y = ia;
    _ = 0;
    ba = aa;
    while (1) {
     aa = (_ * 10 | 0) + ba | 0;
     Z = Y + 1 | 0;
     ba = (a[Z >> 0] | 0) + -48 | 0;
     if (ba >>> 0 >= 10) {
      ua = aa;
      va = Z;
      break;
     } else {
      Y = Z;
      _ = aa;
     }
    }
    if ((ua | 0) < 0) {
     pa = -1;
     break a;
    } else {
     qa = ha;
     ra = va;
     sa = ea;
     ta = ua;
    }
   } else {
    qa = ha;
    ra = ia;
    sa = ea;
    ta = 0;
   }
  } while (0);
  e : do if ((a[ra >> 0] | 0) == 46) {
   _ = ra + 1 | 0;
   Y = a[_ >> 0] | 0;
   if (Y << 24 >> 24 != 42) {
    ba = (Y << 24 >> 24) + -48 | 0;
    if (ba >>> 0 < 10) {
     wa = _;
     xa = 0;
     ya = ba;
    } else {
     za = _;
     Aa = 0;
     break;
    }
    while (1) {
     _ = (xa * 10 | 0) + ya | 0;
     ba = wa + 1 | 0;
     ya = (a[ba >> 0] | 0) + -48 | 0;
     if (ya >>> 0 >= 10) {
      za = ba;
      Aa = _;
      break e;
     } else {
      wa = ba;
      xa = _;
     }
    }
   }
   _ = ra + 2 | 0;
   ba = (a[_ >> 0] | 0) + -48 | 0;
   if (ba >>> 0 < 10 ? (a[ra + 3 >> 0] | 0) == 36 : 0) {
    c[l + (ba << 2) >> 2] = 10;
    za = ra + 4 | 0;
    Aa = c[j + ((a[_ >> 0] | 0) + -48 << 3) >> 2] | 0;
    break;
   }
   if (sa) {
    pa = -1;
    break a;
   }
   if (v) {
    ba = (c[g >> 2] | 0) + (4 - 1) & ~(4 - 1);
    Y = c[ba >> 2] | 0;
    c[g >> 2] = ba + 4;
    za = _;
    Aa = Y;
   } else {
    za = _;
    Aa = 0;
   }
  } else {
   za = ra;
   Aa = -1;
  } while (0);
  _ = za;
  Y = 0;
  while (1) {
   ba = (a[_ >> 0] | 0) + -65 | 0;
   if (ba >>> 0 > 57) {
    pa = -1;
    break a;
   }
   aa = _ + 1 | 0;
   Z = a[18909 + (Y * 58 | 0) + ba >> 0] | 0;
   ba = Z & 255;
   if ((ba + -1 | 0) >>> 0 < 8) {
    _ = aa;
    Y = ba;
   } else {
    Ba = aa;
    Ca = Z;
    Da = ba;
    Ea = _;
    Fa = Y;
    break;
   }
  }
  if (!(Ca << 24 >> 24)) {
   pa = -1;
   break;
  }
  Y = (da | 0) > -1;
  do if (Ca << 24 >> 24 == 19) if (Y) {
   pa = -1;
   break a;
  } else R = 52; else {
   if (Y) {
    c[l + (da << 2) >> 2] = Da;
    _ = j + (da << 3) | 0;
    ba = c[_ + 4 >> 2] | 0;
    Z = r;
    c[Z >> 2] = c[_ >> 2];
    c[Z + 4 >> 2] = ba;
    R = 52;
    break;
   }
   if (!v) {
    pa = 0;
    break a;
   }
   le(r, Da, g);
  } while (0);
  if ((R | 0) == 52 ? (R = 0, !v) : 0) {
   K = N;
   L = Ba;
   f = O;
   M = sa;
   continue;
  }
  Y = a[Ea >> 0] | 0;
  ba = (Fa | 0) != 0 & (Y & 15 | 0) == 3 ? Y & -33 : Y;
  Y = qa & -65537;
  Z = (qa & 8192 | 0) == 0 ? qa : Y;
  f : do switch (ba | 0) {
  case 110:
   {
    switch (Fa | 0) {
    case 0:
     {
      c[c[r >> 2] >> 2] = N;
      K = N;
      L = Ba;
      f = O;
      M = sa;
      continue a;
      break;
     }
    case 1:
     {
      c[c[r >> 2] >> 2] = N;
      K = N;
      L = Ba;
      f = O;
      M = sa;
      continue a;
      break;
     }
    case 2:
     {
      _ = c[r >> 2] | 0;
      c[_ >> 2] = N;
      c[_ + 4 >> 2] = ((N | 0) < 0) << 31 >> 31;
      K = N;
      L = Ba;
      f = O;
      M = sa;
      continue a;
      break;
     }
    case 3:
     {
      b[c[r >> 2] >> 1] = N;
      K = N;
      L = Ba;
      f = O;
      M = sa;
      continue a;
      break;
     }
    case 4:
     {
      a[c[r >> 2] >> 0] = N;
      K = N;
      L = Ba;
      f = O;
      M = sa;
      continue a;
      break;
     }
    case 6:
     {
      c[c[r >> 2] >> 2] = N;
      K = N;
      L = Ba;
      f = O;
      M = sa;
      continue a;
      break;
     }
    case 7:
     {
      _ = c[r >> 2] | 0;
      c[_ >> 2] = N;
      c[_ + 4 >> 2] = ((N | 0) < 0) << 31 >> 31;
      K = N;
      L = Ba;
      f = O;
      M = sa;
      continue a;
      break;
     }
    default:
     {
      K = N;
      L = Ba;
      f = O;
      M = sa;
      continue a;
     }
    }
    break;
   }
  case 112:
   {
    Ga = Z | 8;
    Ha = Aa >>> 0 > 8 ? Aa : 8;
    Ia = 120;
    R = 64;
    break;
   }
  case 88:
  case 120:
   {
    Ga = Z;
    Ha = Aa;
    Ia = ba;
    R = 64;
    break;
   }
  case 111:
   {
    _ = r;
    aa = c[_ >> 2] | 0;
    ka = c[_ + 4 >> 2] | 0;
    if ((aa | 0) == 0 & (ka | 0) == 0) Ja = w; else {
     _ = w;
     ja = aa;
     aa = ka;
     while (1) {
      ka = _ + -1 | 0;
      a[ka >> 0] = ja & 7 | 48;
      ja = qo(ja | 0, aa | 0, 3) | 0;
      aa = D;
      if ((ja | 0) == 0 & (aa | 0) == 0) {
       Ja = ka;
       break;
      } else _ = ka;
     }
    }
    if (!(Z & 8)) {
     Ka = Ja;
     La = Z;
     Ma = Aa;
     Na = 0;
     Oa = 19389;
     R = 77;
    } else {
     _ = x - Ja + 1 | 0;
     Ka = Ja;
     La = Z;
     Ma = (Aa | 0) < (_ | 0) ? _ : Aa;
     Na = 0;
     Oa = 19389;
     R = 77;
    }
    break;
   }
  case 105:
  case 100:
   {
    _ = r;
    aa = c[_ >> 2] | 0;
    ja = c[_ + 4 >> 2] | 0;
    if ((ja | 0) < 0) {
     _ = no(0, 0, aa | 0, ja | 0) | 0;
     ka = D;
     la = r;
     c[la >> 2] = _;
     c[la + 4 >> 2] = ka;
     Pa = _;
     Qa = ka;
     Ra = 1;
     Sa = 19389;
     R = 76;
     break f;
    }
    if (!(Z & 2048)) {
     ka = Z & 1;
     Pa = aa;
     Qa = ja;
     Ra = ka;
     Sa = (ka | 0) == 0 ? 19389 : 19391;
     R = 76;
    } else {
     Pa = aa;
     Qa = ja;
     Ra = 1;
     Sa = 19390;
     R = 76;
    }
    break;
   }
  case 117:
   {
    ja = r;
    Pa = c[ja >> 2] | 0;
    Qa = c[ja + 4 >> 2] | 0;
    Ra = 0;
    Sa = 19389;
    R = 76;
    break;
   }
  case 99:
   {
    a[y >> 0] = c[r >> 2];
    Ta = y;
    Ua = Y;
    Va = 1;
    Wa = 0;
    Xa = 19389;
    Ya = w;
    break;
   }
  case 109:
   {
    Za = Pc(c[(Qc() | 0) >> 2] | 0) | 0;
    R = 82;
    break;
   }
  case 115:
   {
    ja = c[r >> 2] | 0;
    Za = (ja | 0) != 0 ? ja : 19399;
    R = 82;
    break;
   }
  case 67:
   {
    c[t >> 2] = c[r >> 2];
    c[s >> 2] = 0;
    c[r >> 2] = t;
    _a = -1;
    R = 86;
    break;
   }
  case 83:
   {
    if (!Aa) {
     ne(e, 32, ta, 0, Z);
     $a = 0;
     R = 98;
    } else {
     _a = Aa;
     R = 86;
    }
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
    ab = +h[r >> 3];
    c[o >> 2] = 0;
    h[k >> 3] = ab;
    if ((c[k + 4 >> 2] | 0) >= 0) if (!(Z & 2048)) {
     ja = Z & 1;
     bb = ab;
     cb = ja;
     db = (ja | 0) == 0 ? 19407 : 19412;
    } else {
     bb = ab;
     cb = 1;
     db = 19409;
    } else {
     bb = -ab;
     cb = 1;
     db = 19406;
    }
    h[k >> 3] = bb;
    ja = c[k + 4 >> 2] & 2146435072;
    do if (ja >>> 0 < 2146435072 | (ja | 0) == 2146435072 & 0 < 0) {
     ab = +hd(bb, o) * 2.0;
     aa = ab != 0.0;
     if (aa) c[o >> 2] = (c[o >> 2] | 0) + -1;
     ka = ba | 32;
     if ((ka | 0) == 97) {
      _ = ba & 32;
      la = (_ | 0) == 0 ? db : db + 9 | 0;
      eb = cb | 2;
      fb = 12 - Aa | 0;
      do if (!(Aa >>> 0 > 11 | (fb | 0) == 0)) {
       gb = fb;
       hb = 8.0;
       while (1) {
        gb = gb + -1 | 0;
        ib = hb * 16.0;
        if (!gb) {
         jb = ib;
         break;
        } else hb = ib;
       }
       if ((a[la >> 0] | 0) == 45) {
        kb = -(jb + (-ab - jb));
        break;
       } else {
        kb = ab + jb - jb;
        break;
       }
      } else kb = ab; while (0);
      fb = c[o >> 2] | 0;
      gb = (fb | 0) < 0 ? 0 - fb | 0 : fb;
      lb = me(gb, ((gb | 0) < 0) << 31 >> 31, z) | 0;
      if ((lb | 0) == (z | 0)) {
       a[A >> 0] = 48;
       mb = A;
      } else mb = lb;
      a[mb + -1 >> 0] = (fb >> 31 & 2) + 43;
      fb = mb + -2 | 0;
      a[fb >> 0] = ba + 15;
      lb = (Aa | 0) < 1;
      gb = (Z & 8 | 0) == 0;
      hb = kb;
      nb = p;
      while (1) {
       ob = ~~hb;
       pb = nb + 1 | 0;
       a[nb >> 0] = d[19373 + ob >> 0] | _;
       hb = (hb - +(ob | 0)) * 16.0;
       do if ((pb - q | 0) == 1) {
        if (gb & (lb & hb == 0.0)) {
         qb = pb;
         break;
        }
        a[pb >> 0] = 46;
        qb = nb + 2 | 0;
       } else qb = pb; while (0);
       if (!(hb != 0.0)) {
        rb = qb;
        break;
       } else nb = qb;
      }
      nb = rb;
      lb = (Aa | 0) != 0 & (E + nb | 0) < (Aa | 0) ? F + Aa - fb | 0 : C - fb + nb | 0;
      gb = lb + eb | 0;
      ne(e, 32, ta, gb, Z);
      if (!(c[e >> 2] & 32)) xd(la, eb, e) | 0;
      ne(e, 48, ta, gb, Z ^ 65536);
      _ = nb - q | 0;
      if (!(c[e >> 2] & 32)) xd(p, _, e) | 0;
      nb = B - fb | 0;
      ne(e, 48, lb - (_ + nb) | 0, 0, 0);
      if (!(c[e >> 2] & 32)) xd(fb, nb, e) | 0;
      ne(e, 32, ta, gb, Z ^ 8192);
      sb = (gb | 0) < (ta | 0) ? ta : gb;
      break;
     }
     gb = (Aa | 0) < 0 ? 6 : Aa;
     if (aa) {
      nb = (c[o >> 2] | 0) + -28 | 0;
      c[o >> 2] = nb;
      tb = ab * 268435456.0;
      ub = nb;
     } else {
      tb = ab;
      ub = c[o >> 2] | 0;
     }
     nb = (ub | 0) < 0 ? n : G;
     _ = nb;
     hb = tb;
     lb = nb;
     while (1) {
      pb = ~~hb >>> 0;
      c[lb >> 2] = pb;
      ob = lb + 4 | 0;
      hb = (hb - +(pb >>> 0)) * 1.0e9;
      if (!(hb != 0.0)) {
       vb = ob;
       break;
      } else lb = ob;
     }
     lb = c[o >> 2] | 0;
     if ((lb | 0) > 0) {
      aa = lb;
      fb = nb;
      eb = vb;
      while (1) {
       la = (aa | 0) > 29 ? 29 : aa;
       ob = eb + -4 | 0;
       do if (ob >>> 0 < fb >>> 0) wb = fb; else {
        pb = 0;
        xb = ob;
        while (1) {
         yb = so(c[xb >> 2] | 0, 0, la | 0) | 0;
         zb = po(yb | 0, D | 0, pb | 0, 0) | 0;
         yb = D;
         Ab = Bo(zb | 0, yb | 0, 1e9, 0) | 0;
         c[xb >> 2] = Ab;
         Ab = Ao(zb | 0, yb | 0, 1e9, 0) | 0;
         xb = xb + -4 | 0;
         if (xb >>> 0 < fb >>> 0) {
          Bb = Ab;
          break;
         } else pb = Ab;
        }
        if (!Bb) {
         wb = fb;
         break;
        }
        pb = fb + -4 | 0;
        c[pb >> 2] = Bb;
        wb = pb;
       } while (0);
       ob = eb;
       while (1) {
        if (ob >>> 0 <= wb >>> 0) {
         Cb = ob;
         break;
        }
        pb = ob + -4 | 0;
        if (!(c[pb >> 2] | 0)) ob = pb; else {
         Cb = ob;
         break;
        }
       }
       ob = (c[o >> 2] | 0) - la | 0;
       c[o >> 2] = ob;
       if ((ob | 0) > 0) {
        aa = ob;
        fb = wb;
        eb = Cb;
       } else {
        Db = ob;
        Eb = wb;
        Fb = Cb;
        break;
       }
      }
     } else {
      Db = lb;
      Eb = nb;
      Fb = vb;
     }
     if ((Db | 0) < 0) {
      eb = ((gb + 25 | 0) / 9 | 0) + 1 | 0;
      fb = (ka | 0) == 102;
      aa = Db;
      ob = Eb;
      pb = Fb;
      while (1) {
       xb = 0 - aa | 0;
       Ab = (xb | 0) > 9 ? 9 : xb;
       do if (ob >>> 0 < pb >>> 0) {
        xb = (1 << Ab) + -1 | 0;
        yb = 1e9 >>> Ab;
        zb = 0;
        Gb = ob;
        while (1) {
         Hb = c[Gb >> 2] | 0;
         c[Gb >> 2] = (Hb >>> Ab) + zb;
         Ib = $(Hb & xb, yb) | 0;
         Gb = Gb + 4 | 0;
         if (Gb >>> 0 >= pb >>> 0) {
          Jb = Ib;
          break;
         } else zb = Ib;
        }
        zb = (c[ob >> 2] | 0) == 0 ? ob + 4 | 0 : ob;
        if (!Jb) {
         Kb = zb;
         Lb = pb;
         break;
        }
        c[pb >> 2] = Jb;
        Kb = zb;
        Lb = pb + 4 | 0;
       } else {
        Kb = (c[ob >> 2] | 0) == 0 ? ob + 4 | 0 : ob;
        Lb = pb;
       } while (0);
       la = fb ? nb : Kb;
       zb = (Lb - la >> 2 | 0) > (eb | 0) ? la + (eb << 2) | 0 : Lb;
       aa = (c[o >> 2] | 0) + Ab | 0;
       c[o >> 2] = aa;
       if ((aa | 0) >= 0) {
        Mb = Kb;
        Nb = zb;
        break;
       } else {
        ob = Kb;
        pb = zb;
       }
      }
     } else {
      Mb = Eb;
      Nb = Fb;
     }
     do if (Mb >>> 0 < Nb >>> 0) {
      pb = (_ - Mb >> 2) * 9 | 0;
      ob = c[Mb >> 2] | 0;
      if (ob >>> 0 < 10) {
       Ob = pb;
       break;
      } else {
       Pb = pb;
       Qb = 10;
      }
      while (1) {
       Qb = Qb * 10 | 0;
       pb = Pb + 1 | 0;
       if (ob >>> 0 < Qb >>> 0) {
        Ob = pb;
        break;
       } else Pb = pb;
      }
     } else Ob = 0; while (0);
     ob = (ka | 0) == 103;
     Ab = (gb | 0) != 0;
     pb = gb - ((ka | 0) != 102 ? Ob : 0) + ((Ab & ob) << 31 >> 31) | 0;
     if ((pb | 0) < (((Nb - _ >> 2) * 9 | 0) + -9 | 0)) {
      aa = pb + 9216 | 0;
      pb = (aa | 0) / 9 | 0;
      eb = nb + (pb + -1023 << 2) | 0;
      fb = ((aa | 0) % 9 | 0) + 1 | 0;
      if ((fb | 0) < 9) {
       aa = 10;
       lb = fb;
       while (1) {
        fb = aa * 10 | 0;
        lb = lb + 1 | 0;
        if ((lb | 0) == 9) {
         Rb = fb;
         break;
        } else aa = fb;
       }
      } else Rb = 10;
      aa = c[eb >> 2] | 0;
      lb = (aa >>> 0) % (Rb >>> 0) | 0;
      if ((lb | 0) == 0 ? (nb + (pb + -1022 << 2) | 0) == (Nb | 0) : 0) {
       Sb = Mb;
       Tb = eb;
       Ub = Ob;
      } else R = 163;
      do if ((R | 0) == 163) {
       R = 0;
       hb = (((aa >>> 0) / (Rb >>> 0) | 0) & 1 | 0) == 0 ? 9007199254740992.0 : 9007199254740994.0;
       ka = (Rb | 0) / 2 | 0;
       do if (lb >>> 0 < ka >>> 0) Vb = .5; else {
        if ((lb | 0) == (ka | 0) ? (nb + (pb + -1022 << 2) | 0) == (Nb | 0) : 0) {
         Vb = 1.0;
         break;
        }
        Vb = 1.5;
       } while (0);
       do if (!cb) {
        Wb = hb;
        Xb = Vb;
       } else {
        if ((a[db >> 0] | 0) != 45) {
         Wb = hb;
         Xb = Vb;
         break;
        }
        Wb = -hb;
        Xb = -Vb;
       } while (0);
       ka = aa - lb | 0;
       c[eb >> 2] = ka;
       if (!(Wb + Xb != Wb)) {
        Sb = Mb;
        Tb = eb;
        Ub = Ob;
        break;
       }
       fb = ka + Rb | 0;
       c[eb >> 2] = fb;
       if (fb >>> 0 > 999999999) {
        fb = Mb;
        ka = eb;
        while (1) {
         zb = ka + -4 | 0;
         c[ka >> 2] = 0;
         if (zb >>> 0 < fb >>> 0) {
          la = fb + -4 | 0;
          c[la >> 2] = 0;
          Yb = la;
         } else Yb = fb;
         la = (c[zb >> 2] | 0) + 1 | 0;
         c[zb >> 2] = la;
         if (la >>> 0 > 999999999) {
          fb = Yb;
          ka = zb;
         } else {
          Zb = Yb;
          _b = zb;
          break;
         }
        }
       } else {
        Zb = Mb;
        _b = eb;
       }
       ka = (_ - Zb >> 2) * 9 | 0;
       fb = c[Zb >> 2] | 0;
       if (fb >>> 0 < 10) {
        Sb = Zb;
        Tb = _b;
        Ub = ka;
        break;
       } else {
        $b = ka;
        ac = 10;
       }
       while (1) {
        ac = ac * 10 | 0;
        ka = $b + 1 | 0;
        if (fb >>> 0 < ac >>> 0) {
         Sb = Zb;
         Tb = _b;
         Ub = ka;
         break;
        } else $b = ka;
       }
      } while (0);
      eb = Tb + 4 | 0;
      bc = Sb;
      cc = Ub;
      dc = Nb >>> 0 > eb >>> 0 ? eb : Nb;
     } else {
      bc = Mb;
      cc = Ob;
      dc = Nb;
     }
     eb = 0 - cc | 0;
     lb = dc;
     while (1) {
      if (lb >>> 0 <= bc >>> 0) {
       ec = 0;
       fc = lb;
       break;
      }
      aa = lb + -4 | 0;
      if (!(c[aa >> 2] | 0)) lb = aa; else {
       ec = 1;
       fc = lb;
       break;
      }
     }
     do if (ob) {
      lb = (Ab & 1 ^ 1) + gb | 0;
      if ((lb | 0) > (cc | 0) & (cc | 0) > -5) {
       gc = ba + -1 | 0;
       hc = lb + -1 - cc | 0;
      } else {
       gc = ba + -2 | 0;
       hc = lb + -1 | 0;
      }
      lb = Z & 8;
      if (lb) {
       ic = gc;
       jc = hc;
       kc = lb;
       break;
      }
      do if (ec) {
       lb = c[fc + -4 >> 2] | 0;
       if (!lb) {
        lc = 9;
        break;
       }
       if (!((lb >>> 0) % 10 | 0)) {
        mc = 10;
        nc = 0;
       } else {
        lc = 0;
        break;
       }
       while (1) {
        mc = mc * 10 | 0;
        aa = nc + 1 | 0;
        if ((lb >>> 0) % (mc >>> 0) | 0) {
         lc = aa;
         break;
        } else nc = aa;
       }
      } else lc = 9; while (0);
      lb = ((fc - _ >> 2) * 9 | 0) + -9 | 0;
      if ((gc | 32 | 0) == 102) {
       aa = lb - lc | 0;
       pb = (aa | 0) < 0 ? 0 : aa;
       ic = gc;
       jc = (hc | 0) < (pb | 0) ? hc : pb;
       kc = 0;
       break;
      } else {
       pb = lb + cc - lc | 0;
       lb = (pb | 0) < 0 ? 0 : pb;
       ic = gc;
       jc = (hc | 0) < (lb | 0) ? hc : lb;
       kc = 0;
       break;
      }
     } else {
      ic = ba;
      jc = gb;
      kc = Z & 8;
     } while (0);
     gb = jc | kc;
     _ = (gb | 0) != 0 & 1;
     Ab = (ic | 32 | 0) == 102;
     if (Ab) {
      oc = (cc | 0) > 0 ? cc : 0;
      pc = 0;
     } else {
      ob = (cc | 0) < 0 ? eb : cc;
      lb = me(ob, ((ob | 0) < 0) << 31 >> 31, z) | 0;
      if ((B - lb | 0) < 2) {
       ob = lb;
       while (1) {
        pb = ob + -1 | 0;
        a[pb >> 0] = 48;
        if ((B - pb | 0) < 2) ob = pb; else {
         qc = pb;
         break;
        }
       }
      } else qc = lb;
      a[qc + -1 >> 0] = (cc >> 31 & 2) + 43;
      ob = qc + -2 | 0;
      a[ob >> 0] = ic;
      oc = B - ob | 0;
      pc = ob;
     }
     ob = cb + 1 + jc + _ + oc | 0;
     ne(e, 32, ta, ob, Z);
     if (!(c[e >> 2] & 32)) xd(db, cb, e) | 0;
     ne(e, 48, ta, ob, Z ^ 65536);
     do if (Ab) {
      eb = bc >>> 0 > nb >>> 0 ? nb : bc;
      pb = eb;
      while (1) {
       aa = me(c[pb >> 2] | 0, 0, H) | 0;
       do if ((pb | 0) == (eb | 0)) {
        if ((aa | 0) != (H | 0)) {
         rc = aa;
         break;
        }
        a[J >> 0] = 48;
        rc = J;
       } else {
        if (aa >>> 0 > p >>> 0) sc = aa; else {
         rc = aa;
         break;
        }
        while (1) {
         fb = sc + -1 | 0;
         a[fb >> 0] = 48;
         if (fb >>> 0 > p >>> 0) sc = fb; else {
          rc = fb;
          break;
         }
        }
       } while (0);
       if (!(c[e >> 2] & 32)) xd(rc, I - rc | 0, e) | 0;
       aa = pb + 4 | 0;
       if (aa >>> 0 > nb >>> 0) {
        tc = aa;
        break;
       } else pb = aa;
      }
      do if (gb) {
       if (c[e >> 2] & 32) break;
       xd(19441, 1, e) | 0;
      } while (0);
      if ((jc | 0) > 0 & tc >>> 0 < fc >>> 0) {
       pb = jc;
       eb = tc;
       while (1) {
        aa = me(c[eb >> 2] | 0, 0, H) | 0;
        if (aa >>> 0 > p >>> 0) {
         fb = aa;
         while (1) {
          ka = fb + -1 | 0;
          a[ka >> 0] = 48;
          if (ka >>> 0 > p >>> 0) fb = ka; else {
           uc = ka;
           break;
          }
         }
        } else uc = aa;
        if (!(c[e >> 2] & 32)) xd(uc, (pb | 0) > 9 ? 9 : pb, e) | 0;
        eb = eb + 4 | 0;
        fb = pb + -9 | 0;
        if (!((pb | 0) > 9 & eb >>> 0 < fc >>> 0)) {
         vc = fb;
         break;
        } else pb = fb;
       }
      } else vc = jc;
      ne(e, 48, vc + 9 | 0, 9, 0);
     } else {
      pb = ec ? fc : bc + 4 | 0;
      if ((jc | 0) > -1) {
       eb = (kc | 0) == 0;
       fb = jc;
       ka = bc;
       while (1) {
        zb = me(c[ka >> 2] | 0, 0, H) | 0;
        if ((zb | 0) == (H | 0)) {
         a[J >> 0] = 48;
         wc = J;
        } else wc = zb;
        do if ((ka | 0) == (bc | 0)) {
         zb = wc + 1 | 0;
         if (!(c[e >> 2] & 32)) xd(wc, 1, e) | 0;
         if (eb & (fb | 0) < 1) {
          xc = zb;
          break;
         }
         if (c[e >> 2] & 32) {
          xc = zb;
          break;
         }
         xd(19441, 1, e) | 0;
         xc = zb;
        } else {
         if (wc >>> 0 > p >>> 0) yc = wc; else {
          xc = wc;
          break;
         }
         while (1) {
          zb = yc + -1 | 0;
          a[zb >> 0] = 48;
          if (zb >>> 0 > p >>> 0) yc = zb; else {
           xc = zb;
           break;
          }
         }
        } while (0);
        aa = I - xc | 0;
        if (!(c[e >> 2] & 32)) xd(xc, (fb | 0) > (aa | 0) ? aa : fb, e) | 0;
        zb = fb - aa | 0;
        ka = ka + 4 | 0;
        if (!(ka >>> 0 < pb >>> 0 & (zb | 0) > -1)) {
         zc = zb;
         break;
        } else fb = zb;
       }
      } else zc = jc;
      ne(e, 48, zc + 18 | 0, 18, 0);
      if (c[e >> 2] & 32) break;
      xd(pc, B - pc | 0, e) | 0;
     } while (0);
     ne(e, 32, ta, ob, Z ^ 8192);
     sb = (ob | 0) < (ta | 0) ? ta : ob;
    } else {
     gb = (ba & 32 | 0) != 0;
     nb = bb != bb | 0.0 != 0.0;
     Ab = nb ? 0 : cb;
     _ = Ab + 3 | 0;
     ne(e, 32, ta, _, Y);
     lb = c[e >> 2] | 0;
     if (!(lb & 32)) {
      xd(db, Ab, e) | 0;
      Ac = c[e >> 2] | 0;
     } else Ac = lb;
     if (!(Ac & 32)) xd(nb ? (gb ? 19433 : 19437) : gb ? 19425 : 19429, 3, e) | 0;
     ne(e, 32, ta, _, Z ^ 8192);
     sb = (_ | 0) < (ta | 0) ? ta : _;
    } while (0);
    K = N;
    L = Ba;
    f = sb;
    M = sa;
    continue a;
    break;
   }
  default:
   {
    Ta = L;
    Ua = Z;
    Va = Aa;
    Wa = 0;
    Xa = 19389;
    Ya = w;
   }
  } while (0);
  g : do if ((R | 0) == 64) {
   R = 0;
   ba = r;
   O = c[ba >> 2] | 0;
   ja = c[ba + 4 >> 2] | 0;
   ba = Ia & 32;
   if (!((O | 0) == 0 & (ja | 0) == 0)) {
    _ = w;
    gb = O;
    O = ja;
    while (1) {
     ja = _ + -1 | 0;
     a[ja >> 0] = d[19373 + (gb & 15) >> 0] | ba;
     gb = qo(gb | 0, O | 0, 4) | 0;
     O = D;
     if ((gb | 0) == 0 & (O | 0) == 0) {
      Bc = ja;
      break;
     } else _ = ja;
    }
    _ = r;
    if ((Ga & 8 | 0) == 0 | (c[_ >> 2] | 0) == 0 & (c[_ + 4 >> 2] | 0) == 0) {
     Ka = Bc;
     La = Ga;
     Ma = Ha;
     Na = 0;
     Oa = 19389;
     R = 77;
    } else {
     Ka = Bc;
     La = Ga;
     Ma = Ha;
     Na = 2;
     Oa = 19389 + (Ia >> 4) | 0;
     R = 77;
    }
   } else {
    Ka = w;
    La = Ga;
    Ma = Ha;
    Na = 0;
    Oa = 19389;
    R = 77;
   }
  } else if ((R | 0) == 76) {
   R = 0;
   Ka = me(Pa, Qa, w) | 0;
   La = Z;
   Ma = Aa;
   Na = Ra;
   Oa = Sa;
   R = 77;
  } else if ((R | 0) == 82) {
   R = 0;
   _ = Xd(Za, 0, Aa) | 0;
   O = (_ | 0) == 0;
   Ta = Za;
   Ua = Y;
   Va = O ? Aa : _ - Za | 0;
   Wa = 0;
   Xa = 19389;
   Ya = O ? Za + Aa | 0 : _;
  } else if ((R | 0) == 86) {
   R = 0;
   _ = 0;
   O = 0;
   gb = c[r >> 2] | 0;
   while (1) {
    ba = c[gb >> 2] | 0;
    if (!ba) {
     Cc = _;
     Dc = O;
     break;
    }
    ja = td(u, ba) | 0;
    if ((ja | 0) < 0 | ja >>> 0 > (_a - _ | 0) >>> 0) {
     Cc = _;
     Dc = ja;
     break;
    }
    ba = ja + _ | 0;
    if (_a >>> 0 > ba >>> 0) {
     _ = ba;
     O = ja;
     gb = gb + 4 | 0;
    } else {
     Cc = ba;
     Dc = ja;
     break;
    }
   }
   if ((Dc | 0) < 0) {
    pa = -1;
    break a;
   }
   ne(e, 32, ta, Cc, Z);
   if (!Cc) {
    $a = 0;
    R = 98;
   } else {
    gb = 0;
    O = c[r >> 2] | 0;
    while (1) {
     _ = c[O >> 2] | 0;
     if (!_) {
      $a = Cc;
      R = 98;
      break g;
     }
     ja = td(u, _) | 0;
     gb = ja + gb | 0;
     if ((gb | 0) > (Cc | 0)) {
      $a = Cc;
      R = 98;
      break g;
     }
     if (!(c[e >> 2] & 32)) xd(u, ja, e) | 0;
     if (gb >>> 0 >= Cc >>> 0) {
      $a = Cc;
      R = 98;
      break;
     } else O = O + 4 | 0;
    }
   }
  } while (0);
  if ((R | 0) == 98) {
   R = 0;
   ne(e, 32, ta, $a, Z ^ 8192);
   K = N;
   L = Ba;
   f = (ta | 0) > ($a | 0) ? ta : $a;
   M = sa;
   continue;
  }
  if ((R | 0) == 77) {
   R = 0;
   Y = (Ma | 0) > -1 ? La & -65537 : La;
   O = r;
   gb = (c[O >> 2] | 0) != 0 | (c[O + 4 >> 2] | 0) != 0;
   if ((Ma | 0) != 0 | gb) {
    O = (gb & 1 ^ 1) + (x - Ka) | 0;
    Ta = Ka;
    Ua = Y;
    Va = (Ma | 0) > (O | 0) ? Ma : O;
    Wa = Na;
    Xa = Oa;
    Ya = w;
   } else {
    Ta = w;
    Ua = Y;
    Va = 0;
    Wa = Na;
    Xa = Oa;
    Ya = w;
   }
  }
  Y = Ya - Ta | 0;
  O = (Va | 0) < (Y | 0) ? Y : Va;
  gb = Wa + O | 0;
  ja = (ta | 0) < (gb | 0) ? gb : ta;
  ne(e, 32, ja, gb, Ua);
  if (!(c[e >> 2] & 32)) xd(Xa, Wa, e) | 0;
  ne(e, 48, ja, gb, Ua ^ 65536);
  ne(e, 48, O, Y, 0);
  if (!(c[e >> 2] & 32)) xd(Ta, Y, e) | 0;
  ne(e, 32, ja, gb, Ua ^ 8192);
  K = N;
  L = Ba;
  f = ja;
  M = sa;
 }
 h : do if ((R | 0) == 245) if (!e) if (Q) {
  sa = 1;
  while (1) {
   M = c[l + (sa << 2) >> 2] | 0;
   if (!M) {
    Ec = sa;
    break;
   }
   le(j + (sa << 3) | 0, M, g);
   sa = sa + 1 | 0;
   if ((sa | 0) >= 10) {
    pa = 1;
    break h;
   }
  }
  if ((Ec | 0) < 10) {
   sa = Ec;
   while (1) {
    if (c[l + (sa << 2) >> 2] | 0) {
     pa = -1;
     break h;
    }
    sa = sa + 1 | 0;
    if ((sa | 0) >= 10) {
     pa = 1;
     break;
    }
   }
  } else pa = 1;
 } else pa = 0; else pa = P; while (0);
 i = m;
 return pa | 0;
}

function oe(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, _ = 0, $ = 0, aa = 0, ba = 0, ca = 0, da = 0, ea = 0, fa = 0, ga = 0, ha = 0, ia = 0, ja = 0, ka = 0, la = 0, ma = 0, na = 0, oa = 0, pa = 0, qa = 0, ra = 0, sa = 0, ta = 0, ua = 0, va = 0, wa = 0, xa = 0, ya = 0, Aa = 0, Ba = 0, Ca = 0, Da = 0, Ea = 0, Fa = 0, Ga = 0, Ha = 0, Ia = 0, Ja = 0, La = 0, Ma = 0, Na = 0, Oa = 0, Qa = 0, Ra = 0, Sa = 0, Ta = 0, Ua = 0, Va = 0;
 do if (a >>> 0 < 245) {
  b = a >>> 0 < 11 ? 16 : a + 11 & -8;
  d = b >>> 3;
  e = c[1536] | 0;
  f = e >>> d;
  if (f & 3) {
   g = (f & 1 ^ 1) + d | 0;
   h = g << 1;
   i = 6184 + (h << 2) | 0;
   j = 6184 + (h + 2 << 2) | 0;
   h = c[j >> 2] | 0;
   k = h + 8 | 0;
   l = c[k >> 2] | 0;
   do if ((i | 0) != (l | 0)) {
    if (l >>> 0 < (c[1540] | 0) >>> 0) za();
    m = l + 12 | 0;
    if ((c[m >> 2] | 0) == (h | 0)) {
     c[m >> 2] = i;
     c[j >> 2] = l;
     break;
    } else za();
   } else c[1536] = e & ~(1 << g); while (0);
   l = g << 3;
   c[h + 4 >> 2] = l | 3;
   j = h + (l | 4) | 0;
   c[j >> 2] = c[j >> 2] | 1;
   n = k;
   return n | 0;
  }
  j = c[1538] | 0;
  if (b >>> 0 > j >>> 0) {
   if (f) {
    l = 2 << d;
    i = f << d & (l | 0 - l);
    l = (i & 0 - i) + -1 | 0;
    i = l >>> 12 & 16;
    m = l >>> i;
    l = m >>> 5 & 8;
    o = m >>> l;
    m = o >>> 2 & 4;
    p = o >>> m;
    o = p >>> 1 & 2;
    q = p >>> o;
    p = q >>> 1 & 1;
    r = (l | i | m | o | p) + (q >>> p) | 0;
    p = r << 1;
    q = 6184 + (p << 2) | 0;
    o = 6184 + (p + 2 << 2) | 0;
    p = c[o >> 2] | 0;
    m = p + 8 | 0;
    i = c[m >> 2] | 0;
    do if ((q | 0) != (i | 0)) {
     if (i >>> 0 < (c[1540] | 0) >>> 0) za();
     l = i + 12 | 0;
     if ((c[l >> 2] | 0) == (p | 0)) {
      c[l >> 2] = q;
      c[o >> 2] = i;
      s = c[1538] | 0;
      break;
     } else za();
    } else {
     c[1536] = e & ~(1 << r);
     s = j;
    } while (0);
    j = r << 3;
    e = j - b | 0;
    c[p + 4 >> 2] = b | 3;
    i = p + b | 0;
    c[p + (b | 4) >> 2] = e | 1;
    c[p + j >> 2] = e;
    if (s) {
     j = c[1541] | 0;
     o = s >>> 3;
     q = o << 1;
     d = 6184 + (q << 2) | 0;
     f = c[1536] | 0;
     k = 1 << o;
     if (f & k) {
      o = 6184 + (q + 2 << 2) | 0;
      h = c[o >> 2] | 0;
      if (h >>> 0 < (c[1540] | 0) >>> 0) za(); else {
       t = o;
       u = h;
      }
     } else {
      c[1536] = f | k;
      t = 6184 + (q + 2 << 2) | 0;
      u = d;
     }
     c[t >> 2] = j;
     c[u + 12 >> 2] = j;
     c[j + 8 >> 2] = u;
     c[j + 12 >> 2] = d;
    }
    c[1538] = e;
    c[1541] = i;
    n = m;
    return n | 0;
   }
   i = c[1537] | 0;
   if (i) {
    e = (i & 0 - i) + -1 | 0;
    i = e >>> 12 & 16;
    d = e >>> i;
    e = d >>> 5 & 8;
    j = d >>> e;
    d = j >>> 2 & 4;
    q = j >>> d;
    j = q >>> 1 & 2;
    k = q >>> j;
    q = k >>> 1 & 1;
    f = c[6448 + ((e | i | d | j | q) + (k >>> q) << 2) >> 2] | 0;
    q = (c[f + 4 >> 2] & -8) - b | 0;
    k = f;
    j = f;
    while (1) {
     f = c[k + 16 >> 2] | 0;
     if (!f) {
      d = c[k + 20 >> 2] | 0;
      if (!d) {
       v = q;
       w = j;
       break;
      } else x = d;
     } else x = f;
     f = (c[x + 4 >> 2] & -8) - b | 0;
     d = f >>> 0 < q >>> 0;
     q = d ? f : q;
     k = x;
     j = d ? x : j;
    }
    j = c[1540] | 0;
    if (w >>> 0 < j >>> 0) za();
    k = w + b | 0;
    if (w >>> 0 >= k >>> 0) za();
    q = c[w + 24 >> 2] | 0;
    m = c[w + 12 >> 2] | 0;
    do if ((m | 0) == (w | 0)) {
     p = w + 20 | 0;
     r = c[p >> 2] | 0;
     if (!r) {
      d = w + 16 | 0;
      f = c[d >> 2] | 0;
      if (!f) {
       y = 0;
       break;
      } else {
       z = f;
       A = d;
      }
     } else {
      z = r;
      A = p;
     }
     while (1) {
      p = z + 20 | 0;
      r = c[p >> 2] | 0;
      if (r) {
       z = r;
       A = p;
       continue;
      }
      p = z + 16 | 0;
      r = c[p >> 2] | 0;
      if (!r) {
       B = z;
       C = A;
       break;
      } else {
       z = r;
       A = p;
      }
     }
     if (C >>> 0 < j >>> 0) za(); else {
      c[C >> 2] = 0;
      y = B;
      break;
     }
    } else {
     p = c[w + 8 >> 2] | 0;
     if (p >>> 0 < j >>> 0) za();
     r = p + 12 | 0;
     if ((c[r >> 2] | 0) != (w | 0)) za();
     d = m + 8 | 0;
     if ((c[d >> 2] | 0) == (w | 0)) {
      c[r >> 2] = m;
      c[d >> 2] = p;
      y = m;
      break;
     } else za();
    } while (0);
    do if (q) {
     m = c[w + 28 >> 2] | 0;
     j = 6448 + (m << 2) | 0;
     if ((w | 0) == (c[j >> 2] | 0)) {
      c[j >> 2] = y;
      if (!y) {
       c[1537] = c[1537] & ~(1 << m);
       break;
      }
     } else {
      if (q >>> 0 < (c[1540] | 0) >>> 0) za();
      m = q + 16 | 0;
      if ((c[m >> 2] | 0) == (w | 0)) c[m >> 2] = y; else c[q + 20 >> 2] = y;
      if (!y) break;
     }
     m = c[1540] | 0;
     if (y >>> 0 < m >>> 0) za();
     c[y + 24 >> 2] = q;
     j = c[w + 16 >> 2] | 0;
     do if (j) if (j >>> 0 < m >>> 0) za(); else {
      c[y + 16 >> 2] = j;
      c[j + 24 >> 2] = y;
      break;
     } while (0);
     j = c[w + 20 >> 2] | 0;
     if (j) if (j >>> 0 < (c[1540] | 0) >>> 0) za(); else {
      c[y + 20 >> 2] = j;
      c[j + 24 >> 2] = y;
      break;
     }
    } while (0);
    if (v >>> 0 < 16) {
     q = v + b | 0;
     c[w + 4 >> 2] = q | 3;
     j = w + (q + 4) | 0;
     c[j >> 2] = c[j >> 2] | 1;
    } else {
     c[w + 4 >> 2] = b | 3;
     c[w + (b | 4) >> 2] = v | 1;
     c[w + (v + b) >> 2] = v;
     j = c[1538] | 0;
     if (j) {
      q = c[1541] | 0;
      m = j >>> 3;
      j = m << 1;
      p = 6184 + (j << 2) | 0;
      d = c[1536] | 0;
      r = 1 << m;
      if (d & r) {
       m = 6184 + (j + 2 << 2) | 0;
       f = c[m >> 2] | 0;
       if (f >>> 0 < (c[1540] | 0) >>> 0) za(); else {
        D = m;
        E = f;
       }
      } else {
       c[1536] = d | r;
       D = 6184 + (j + 2 << 2) | 0;
       E = p;
      }
      c[D >> 2] = q;
      c[E + 12 >> 2] = q;
      c[q + 8 >> 2] = E;
      c[q + 12 >> 2] = p;
     }
     c[1538] = v;
     c[1541] = k;
    }
    n = w + 8 | 0;
    return n | 0;
   } else F = b;
  } else F = b;
 } else if (a >>> 0 <= 4294967231) {
  p = a + 11 | 0;
  q = p & -8;
  j = c[1537] | 0;
  if (j) {
   r = 0 - q | 0;
   d = p >>> 8;
   if (d) if (q >>> 0 > 16777215) G = 31; else {
    p = (d + 1048320 | 0) >>> 16 & 8;
    f = d << p;
    d = (f + 520192 | 0) >>> 16 & 4;
    m = f << d;
    f = (m + 245760 | 0) >>> 16 & 2;
    i = 14 - (d | p | f) + (m << f >>> 15) | 0;
    G = q >>> (i + 7 | 0) & 1 | i << 1;
   } else G = 0;
   i = c[6448 + (G << 2) >> 2] | 0;
   a : do if (!i) {
    H = r;
    I = 0;
    J = 0;
    K = 86;
   } else {
    f = r;
    m = 0;
    p = q << ((G | 0) == 31 ? 0 : 25 - (G >>> 1) | 0);
    d = i;
    e = 0;
    while (1) {
     h = c[d + 4 >> 2] & -8;
     o = h - q | 0;
     if (o >>> 0 < f >>> 0) if ((h | 0) == (q | 0)) {
      L = o;
      M = d;
      N = d;
      K = 90;
      break a;
     } else {
      O = o;
      P = d;
     } else {
      O = f;
      P = e;
     }
     o = c[d + 20 >> 2] | 0;
     d = c[d + 16 + (p >>> 31 << 2) >> 2] | 0;
     h = (o | 0) == 0 | (o | 0) == (d | 0) ? m : o;
     if (!d) {
      H = O;
      I = h;
      J = P;
      K = 86;
      break;
     } else {
      f = O;
      m = h;
      p = p << 1;
      e = P;
     }
    }
   } while (0);
   if ((K | 0) == 86) {
    if ((I | 0) == 0 & (J | 0) == 0) {
     i = 2 << G;
     r = j & (i | 0 - i);
     if (!r) {
      F = q;
      break;
     }
     i = (r & 0 - r) + -1 | 0;
     r = i >>> 12 & 16;
     b = i >>> r;
     i = b >>> 5 & 8;
     k = b >>> i;
     b = k >>> 2 & 4;
     e = k >>> b;
     k = e >>> 1 & 2;
     p = e >>> k;
     e = p >>> 1 & 1;
     Q = c[6448 + ((i | r | b | k | e) + (p >>> e) << 2) >> 2] | 0;
     R = 0;
    } else {
     Q = I;
     R = J;
    }
    if (!Q) {
     S = H;
     T = R;
    } else {
     L = H;
     M = Q;
     N = R;
     K = 90;
    }
   }
   if ((K | 0) == 90) while (1) {
    K = 0;
    e = (c[M + 4 >> 2] & -8) - q | 0;
    p = e >>> 0 < L >>> 0;
    k = p ? e : L;
    e = p ? M : N;
    p = c[M + 16 >> 2] | 0;
    if (p) {
     L = k;
     M = p;
     N = e;
     K = 90;
     continue;
    }
    M = c[M + 20 >> 2] | 0;
    if (!M) {
     S = k;
     T = e;
     break;
    } else {
     L = k;
     N = e;
     K = 90;
    }
   }
   if ((T | 0) != 0 ? S >>> 0 < ((c[1538] | 0) - q | 0) >>> 0 : 0) {
    j = c[1540] | 0;
    if (T >>> 0 < j >>> 0) za();
    e = T + q | 0;
    if (T >>> 0 >= e >>> 0) za();
    k = c[T + 24 >> 2] | 0;
    p = c[T + 12 >> 2] | 0;
    do if ((p | 0) == (T | 0)) {
     b = T + 20 | 0;
     r = c[b >> 2] | 0;
     if (!r) {
      i = T + 16 | 0;
      m = c[i >> 2] | 0;
      if (!m) {
       U = 0;
       break;
      } else {
       V = m;
       W = i;
      }
     } else {
      V = r;
      W = b;
     }
     while (1) {
      b = V + 20 | 0;
      r = c[b >> 2] | 0;
      if (r) {
       V = r;
       W = b;
       continue;
      }
      b = V + 16 | 0;
      r = c[b >> 2] | 0;
      if (!r) {
       X = V;
       Y = W;
       break;
      } else {
       V = r;
       W = b;
      }
     }
     if (Y >>> 0 < j >>> 0) za(); else {
      c[Y >> 2] = 0;
      U = X;
      break;
     }
    } else {
     b = c[T + 8 >> 2] | 0;
     if (b >>> 0 < j >>> 0) za();
     r = b + 12 | 0;
     if ((c[r >> 2] | 0) != (T | 0)) za();
     i = p + 8 | 0;
     if ((c[i >> 2] | 0) == (T | 0)) {
      c[r >> 2] = p;
      c[i >> 2] = b;
      U = p;
      break;
     } else za();
    } while (0);
    do if (k) {
     p = c[T + 28 >> 2] | 0;
     j = 6448 + (p << 2) | 0;
     if ((T | 0) == (c[j >> 2] | 0)) {
      c[j >> 2] = U;
      if (!U) {
       c[1537] = c[1537] & ~(1 << p);
       break;
      }
     } else {
      if (k >>> 0 < (c[1540] | 0) >>> 0) za();
      p = k + 16 | 0;
      if ((c[p >> 2] | 0) == (T | 0)) c[p >> 2] = U; else c[k + 20 >> 2] = U;
      if (!U) break;
     }
     p = c[1540] | 0;
     if (U >>> 0 < p >>> 0) za();
     c[U + 24 >> 2] = k;
     j = c[T + 16 >> 2] | 0;
     do if (j) if (j >>> 0 < p >>> 0) za(); else {
      c[U + 16 >> 2] = j;
      c[j + 24 >> 2] = U;
      break;
     } while (0);
     j = c[T + 20 >> 2] | 0;
     if (j) if (j >>> 0 < (c[1540] | 0) >>> 0) za(); else {
      c[U + 20 >> 2] = j;
      c[j + 24 >> 2] = U;
      break;
     }
    } while (0);
    b : do if (S >>> 0 >= 16) {
     c[T + 4 >> 2] = q | 3;
     c[T + (q | 4) >> 2] = S | 1;
     c[T + (S + q) >> 2] = S;
     k = S >>> 3;
     if (S >>> 0 < 256) {
      j = k << 1;
      p = 6184 + (j << 2) | 0;
      b = c[1536] | 0;
      i = 1 << k;
      if (b & i) {
       k = 6184 + (j + 2 << 2) | 0;
       r = c[k >> 2] | 0;
       if (r >>> 0 < (c[1540] | 0) >>> 0) za(); else {
        Z = k;
        _ = r;
       }
      } else {
       c[1536] = b | i;
       Z = 6184 + (j + 2 << 2) | 0;
       _ = p;
      }
      c[Z >> 2] = e;
      c[_ + 12 >> 2] = e;
      c[T + (q + 8) >> 2] = _;
      c[T + (q + 12) >> 2] = p;
      break;
     }
     p = S >>> 8;
     if (p) if (S >>> 0 > 16777215) $ = 31; else {
      j = (p + 1048320 | 0) >>> 16 & 8;
      i = p << j;
      p = (i + 520192 | 0) >>> 16 & 4;
      b = i << p;
      i = (b + 245760 | 0) >>> 16 & 2;
      r = 14 - (p | j | i) + (b << i >>> 15) | 0;
      $ = S >>> (r + 7 | 0) & 1 | r << 1;
     } else $ = 0;
     r = 6448 + ($ << 2) | 0;
     c[T + (q + 28) >> 2] = $;
     c[T + (q + 20) >> 2] = 0;
     c[T + (q + 16) >> 2] = 0;
     i = c[1537] | 0;
     b = 1 << $;
     if (!(i & b)) {
      c[1537] = i | b;
      c[r >> 2] = e;
      c[T + (q + 24) >> 2] = r;
      c[T + (q + 12) >> 2] = e;
      c[T + (q + 8) >> 2] = e;
      break;
     }
     b = c[r >> 2] | 0;
     c : do if ((c[b + 4 >> 2] & -8 | 0) != (S | 0)) {
      r = S << (($ | 0) == 31 ? 0 : 25 - ($ >>> 1) | 0);
      i = b;
      while (1) {
       j = i + 16 + (r >>> 31 << 2) | 0;
       p = c[j >> 2] | 0;
       if (!p) {
        aa = j;
        ba = i;
        break;
       }
       if ((c[p + 4 >> 2] & -8 | 0) == (S | 0)) {
        ca = p;
        break c;
       } else {
        r = r << 1;
        i = p;
       }
      }
      if (aa >>> 0 < (c[1540] | 0) >>> 0) za(); else {
       c[aa >> 2] = e;
       c[T + (q + 24) >> 2] = ba;
       c[T + (q + 12) >> 2] = e;
       c[T + (q + 8) >> 2] = e;
       break b;
      }
     } else ca = b; while (0);
     b = ca + 8 | 0;
     i = c[b >> 2] | 0;
     r = c[1540] | 0;
     if (i >>> 0 >= r >>> 0 & ca >>> 0 >= r >>> 0) {
      c[i + 12 >> 2] = e;
      c[b >> 2] = e;
      c[T + (q + 8) >> 2] = i;
      c[T + (q + 12) >> 2] = ca;
      c[T + (q + 24) >> 2] = 0;
      break;
     } else za();
    } else {
     i = S + q | 0;
     c[T + 4 >> 2] = i | 3;
     b = T + (i + 4) | 0;
     c[b >> 2] = c[b >> 2] | 1;
    } while (0);
    n = T + 8 | 0;
    return n | 0;
   } else F = q;
  } else F = q;
 } else F = -1; while (0);
 T = c[1538] | 0;
 if (T >>> 0 >= F >>> 0) {
  S = T - F | 0;
  ca = c[1541] | 0;
  if (S >>> 0 > 15) {
   c[1541] = ca + F;
   c[1538] = S;
   c[ca + (F + 4) >> 2] = S | 1;
   c[ca + T >> 2] = S;
   c[ca + 4 >> 2] = F | 3;
  } else {
   c[1538] = 0;
   c[1541] = 0;
   c[ca + 4 >> 2] = T | 3;
   S = ca + (T + 4) | 0;
   c[S >> 2] = c[S >> 2] | 1;
  }
  n = ca + 8 | 0;
  return n | 0;
 }
 ca = c[1539] | 0;
 if (ca >>> 0 > F >>> 0) {
  S = ca - F | 0;
  c[1539] = S;
  ca = c[1542] | 0;
  c[1542] = ca + F;
  c[ca + (F + 4) >> 2] = S | 1;
  c[ca + 4 >> 2] = F | 3;
  n = ca + 8 | 0;
  return n | 0;
 }
 do if (!(c[1654] | 0)) {
  ca = Pa(30) | 0;
  if (!(ca + -1 & ca)) {
   c[1656] = ca;
   c[1655] = ca;
   c[1657] = -1;
   c[1658] = -1;
   c[1659] = 0;
   c[1647] = 0;
   c[1654] = (fb(0) | 0) & -16 ^ 1431655768;
   break;
  } else za();
 } while (0);
 ca = F + 48 | 0;
 S = c[1656] | 0;
 T = F + 47 | 0;
 ba = S + T | 0;
 aa = 0 - S | 0;
 S = ba & aa;
 if (S >>> 0 <= F >>> 0) {
  n = 0;
  return n | 0;
 }
 $ = c[1646] | 0;
 if (($ | 0) != 0 ? (_ = c[1644] | 0, Z = _ + S | 0, Z >>> 0 <= _ >>> 0 | Z >>> 0 > $ >>> 0) : 0) {
  n = 0;
  return n | 0;
 }
 d : do if (!(c[1647] & 4)) {
  $ = c[1542] | 0;
  e : do if ($) {
   Z = 6592;
   while (1) {
    _ = c[Z >> 2] | 0;
    if (_ >>> 0 <= $ >>> 0 ? (U = Z + 4 | 0, (_ + (c[U >> 2] | 0) | 0) >>> 0 > $ >>> 0) : 0) {
     da = Z;
     ea = U;
     break;
    }
    Z = c[Z + 8 >> 2] | 0;
    if (!Z) {
     K = 174;
     break e;
    }
   }
   Z = ba - (c[1539] | 0) & aa;
   if (Z >>> 0 < 2147483647) {
    U = Ka(Z | 0) | 0;
    _ = (U | 0) == ((c[da >> 2] | 0) + (c[ea >> 2] | 0) | 0);
    X = _ ? Z : 0;
    if (_) if ((U | 0) == (-1 | 0)) fa = X; else {
     ga = U;
     ha = X;
     K = 194;
     break d;
    } else {
     ia = U;
     ja = Z;
     ka = X;
     K = 184;
    }
   } else fa = 0;
  } else K = 174; while (0);
  do if ((K | 0) == 174) {
   $ = Ka(0) | 0;
   if (($ | 0) != (-1 | 0)) {
    q = $;
    X = c[1655] | 0;
    Z = X + -1 | 0;
    if (!(Z & q)) la = S; else la = S - q + (Z + q & 0 - X) | 0;
    X = c[1644] | 0;
    q = X + la | 0;
    if (la >>> 0 > F >>> 0 & la >>> 0 < 2147483647) {
     Z = c[1646] | 0;
     if ((Z | 0) != 0 ? q >>> 0 <= X >>> 0 | q >>> 0 > Z >>> 0 : 0) {
      fa = 0;
      break;
     }
     Z = Ka(la | 0) | 0;
     q = (Z | 0) == ($ | 0);
     X = q ? la : 0;
     if (q) {
      ga = $;
      ha = X;
      K = 194;
      break d;
     } else {
      ia = Z;
      ja = la;
      ka = X;
      K = 184;
     }
    } else fa = 0;
   } else fa = 0;
  } while (0);
  f : do if ((K | 0) == 184) {
   X = 0 - ja | 0;
   do if (ca >>> 0 > ja >>> 0 & (ja >>> 0 < 2147483647 & (ia | 0) != (-1 | 0)) ? (Z = c[1656] | 0, $ = T - ja + Z & 0 - Z, $ >>> 0 < 2147483647) : 0) if ((Ka($ | 0) | 0) == (-1 | 0)) {
    Ka(X | 0) | 0;
    fa = ka;
    break f;
   } else {
    ma = $ + ja | 0;
    break;
   } else ma = ja; while (0);
   if ((ia | 0) == (-1 | 0)) fa = ka; else {
    ga = ia;
    ha = ma;
    K = 194;
    break d;
   }
  } while (0);
  c[1647] = c[1647] | 4;
  na = fa;
  K = 191;
 } else {
  na = 0;
  K = 191;
 } while (0);
 if ((((K | 0) == 191 ? S >>> 0 < 2147483647 : 0) ? (fa = Ka(S | 0) | 0, S = Ka(0) | 0, fa >>> 0 < S >>> 0 & ((fa | 0) != (-1 | 0) & (S | 0) != (-1 | 0))) : 0) ? (ma = S - fa | 0, S = ma >>> 0 > (F + 40 | 0) >>> 0, S) : 0) {
  ga = fa;
  ha = S ? ma : na;
  K = 194;
 }
 if ((K | 0) == 194) {
  na = (c[1644] | 0) + ha | 0;
  c[1644] = na;
  if (na >>> 0 > (c[1645] | 0) >>> 0) c[1645] = na;
  na = c[1542] | 0;
  g : do if (na) {
   ma = 6592;
   do {
    S = c[ma >> 2] | 0;
    fa = ma + 4 | 0;
    ia = c[fa >> 2] | 0;
    if ((ga | 0) == (S + ia | 0)) {
     oa = S;
     pa = fa;
     qa = ia;
     ra = ma;
     K = 204;
     break;
    }
    ma = c[ma + 8 >> 2] | 0;
   } while ((ma | 0) != 0);
   if (((K | 0) == 204 ? (c[ra + 12 >> 2] & 8 | 0) == 0 : 0) ? na >>> 0 < ga >>> 0 & na >>> 0 >= oa >>> 0 : 0) {
    c[pa >> 2] = qa + ha;
    ma = (c[1539] | 0) + ha | 0;
    ia = na + 8 | 0;
    fa = (ia & 7 | 0) == 0 ? 0 : 0 - ia & 7;
    ia = ma - fa | 0;
    c[1542] = na + fa;
    c[1539] = ia;
    c[na + (fa + 4) >> 2] = ia | 1;
    c[na + (ma + 4) >> 2] = 40;
    c[1543] = c[1658];
    break;
   }
   ma = c[1540] | 0;
   if (ga >>> 0 < ma >>> 0) {
    c[1540] = ga;
    sa = ga;
   } else sa = ma;
   ma = ga + ha | 0;
   ia = 6592;
   while (1) {
    if ((c[ia >> 2] | 0) == (ma | 0)) {
     ta = ia;
     ua = ia;
     K = 212;
     break;
    }
    ia = c[ia + 8 >> 2] | 0;
    if (!ia) {
     va = 6592;
     break;
    }
   }
   if ((K | 0) == 212) if (!(c[ua + 12 >> 2] & 8)) {
    c[ta >> 2] = ga;
    ia = ua + 4 | 0;
    c[ia >> 2] = (c[ia >> 2] | 0) + ha;
    ia = ga + 8 | 0;
    ma = (ia & 7 | 0) == 0 ? 0 : 0 - ia & 7;
    ia = ga + (ha + 8) | 0;
    fa = (ia & 7 | 0) == 0 ? 0 : 0 - ia & 7;
    ia = ga + (fa + ha) | 0;
    S = ma + F | 0;
    ka = ga + S | 0;
    ja = ia - (ga + ma) - F | 0;
    c[ga + (ma + 4) >> 2] = F | 3;
    h : do if ((ia | 0) != (na | 0)) {
     if ((ia | 0) == (c[1541] | 0)) {
      T = (c[1538] | 0) + ja | 0;
      c[1538] = T;
      c[1541] = ka;
      c[ga + (S + 4) >> 2] = T | 1;
      c[ga + (T + S) >> 2] = T;
      break;
     }
     T = ha + 4 | 0;
     ca = c[ga + (T + fa) >> 2] | 0;
     if ((ca & 3 | 0) == 1) {
      la = ca & -8;
      ea = ca >>> 3;
      i : do if (ca >>> 0 >= 256) {
       da = c[ga + ((fa | 24) + ha) >> 2] | 0;
       aa = c[ga + (ha + 12 + fa) >> 2] | 0;
       do if ((aa | 0) == (ia | 0)) {
        ba = fa | 16;
        X = ga + (T + ba) | 0;
        $ = c[X >> 2] | 0;
        if (!$) {
         Z = ga + (ba + ha) | 0;
         ba = c[Z >> 2] | 0;
         if (!ba) {
          wa = 0;
          break;
         } else {
          xa = ba;
          ya = Z;
         }
        } else {
         xa = $;
         ya = X;
        }
        while (1) {
         X = xa + 20 | 0;
         $ = c[X >> 2] | 0;
         if ($) {
          xa = $;
          ya = X;
          continue;
         }
         X = xa + 16 | 0;
         $ = c[X >> 2] | 0;
         if (!$) {
          Aa = xa;
          Ba = ya;
          break;
         } else {
          xa = $;
          ya = X;
         }
        }
        if (Ba >>> 0 < sa >>> 0) za(); else {
         c[Ba >> 2] = 0;
         wa = Aa;
         break;
        }
       } else {
        X = c[ga + ((fa | 8) + ha) >> 2] | 0;
        if (X >>> 0 < sa >>> 0) za();
        $ = X + 12 | 0;
        if ((c[$ >> 2] | 0) != (ia | 0)) za();
        Z = aa + 8 | 0;
        if ((c[Z >> 2] | 0) == (ia | 0)) {
         c[$ >> 2] = aa;
         c[Z >> 2] = X;
         wa = aa;
         break;
        } else za();
       } while (0);
       if (!da) break;
       aa = c[ga + (ha + 28 + fa) >> 2] | 0;
       X = 6448 + (aa << 2) | 0;
       do if ((ia | 0) != (c[X >> 2] | 0)) {
        if (da >>> 0 < (c[1540] | 0) >>> 0) za();
        Z = da + 16 | 0;
        if ((c[Z >> 2] | 0) == (ia | 0)) c[Z >> 2] = wa; else c[da + 20 >> 2] = wa;
        if (!wa) break i;
       } else {
        c[X >> 2] = wa;
        if (wa) break;
        c[1537] = c[1537] & ~(1 << aa);
        break i;
       } while (0);
       aa = c[1540] | 0;
       if (wa >>> 0 < aa >>> 0) za();
       c[wa + 24 >> 2] = da;
       X = fa | 16;
       Z = c[ga + (X + ha) >> 2] | 0;
       do if (Z) if (Z >>> 0 < aa >>> 0) za(); else {
        c[wa + 16 >> 2] = Z;
        c[Z + 24 >> 2] = wa;
        break;
       } while (0);
       Z = c[ga + (T + X) >> 2] | 0;
       if (!Z) break;
       if (Z >>> 0 < (c[1540] | 0) >>> 0) za(); else {
        c[wa + 20 >> 2] = Z;
        c[Z + 24 >> 2] = wa;
        break;
       }
      } else {
       Z = c[ga + ((fa | 8) + ha) >> 2] | 0;
       aa = c[ga + (ha + 12 + fa) >> 2] | 0;
       da = 6184 + (ea << 1 << 2) | 0;
       do if ((Z | 0) != (da | 0)) {
        if (Z >>> 0 < sa >>> 0) za();
        if ((c[Z + 12 >> 2] | 0) == (ia | 0)) break;
        za();
       } while (0);
       if ((aa | 0) == (Z | 0)) {
        c[1536] = c[1536] & ~(1 << ea);
        break;
       }
       do if ((aa | 0) == (da | 0)) Ca = aa + 8 | 0; else {
        if (aa >>> 0 < sa >>> 0) za();
        X = aa + 8 | 0;
        if ((c[X >> 2] | 0) == (ia | 0)) {
         Ca = X;
         break;
        }
        za();
       } while (0);
       c[Z + 12 >> 2] = aa;
       c[Ca >> 2] = Z;
      } while (0);
      Da = ga + ((la | fa) + ha) | 0;
      Ea = la + ja | 0;
     } else {
      Da = ia;
      Ea = ja;
     }
     ea = Da + 4 | 0;
     c[ea >> 2] = c[ea >> 2] & -2;
     c[ga + (S + 4) >> 2] = Ea | 1;
     c[ga + (Ea + S) >> 2] = Ea;
     ea = Ea >>> 3;
     if (Ea >>> 0 < 256) {
      T = ea << 1;
      ca = 6184 + (T << 2) | 0;
      da = c[1536] | 0;
      X = 1 << ea;
      do if (!(da & X)) {
       c[1536] = da | X;
       Fa = 6184 + (T + 2 << 2) | 0;
       Ga = ca;
      } else {
       ea = 6184 + (T + 2 << 2) | 0;
       $ = c[ea >> 2] | 0;
       if ($ >>> 0 >= (c[1540] | 0) >>> 0) {
        Fa = ea;
        Ga = $;
        break;
       }
       za();
      } while (0);
      c[Fa >> 2] = ka;
      c[Ga + 12 >> 2] = ka;
      c[ga + (S + 8) >> 2] = Ga;
      c[ga + (S + 12) >> 2] = ca;
      break;
     }
     T = Ea >>> 8;
     do if (!T) Ha = 0; else {
      if (Ea >>> 0 > 16777215) {
       Ha = 31;
       break;
      }
      X = (T + 1048320 | 0) >>> 16 & 8;
      da = T << X;
      la = (da + 520192 | 0) >>> 16 & 4;
      $ = da << la;
      da = ($ + 245760 | 0) >>> 16 & 2;
      ea = 14 - (la | X | da) + ($ << da >>> 15) | 0;
      Ha = Ea >>> (ea + 7 | 0) & 1 | ea << 1;
     } while (0);
     T = 6448 + (Ha << 2) | 0;
     c[ga + (S + 28) >> 2] = Ha;
     c[ga + (S + 20) >> 2] = 0;
     c[ga + (S + 16) >> 2] = 0;
     ca = c[1537] | 0;
     ea = 1 << Ha;
     if (!(ca & ea)) {
      c[1537] = ca | ea;
      c[T >> 2] = ka;
      c[ga + (S + 24) >> 2] = T;
      c[ga + (S + 12) >> 2] = ka;
      c[ga + (S + 8) >> 2] = ka;
      break;
     }
     ea = c[T >> 2] | 0;
     j : do if ((c[ea + 4 >> 2] & -8 | 0) != (Ea | 0)) {
      T = Ea << ((Ha | 0) == 31 ? 0 : 25 - (Ha >>> 1) | 0);
      ca = ea;
      while (1) {
       da = ca + 16 + (T >>> 31 << 2) | 0;
       $ = c[da >> 2] | 0;
       if (!$) {
        Ia = da;
        Ja = ca;
        break;
       }
       if ((c[$ + 4 >> 2] & -8 | 0) == (Ea | 0)) {
        La = $;
        break j;
       } else {
        T = T << 1;
        ca = $;
       }
      }
      if (Ia >>> 0 < (c[1540] | 0) >>> 0) za(); else {
       c[Ia >> 2] = ka;
       c[ga + (S + 24) >> 2] = Ja;
       c[ga + (S + 12) >> 2] = ka;
       c[ga + (S + 8) >> 2] = ka;
       break h;
      }
     } else La = ea; while (0);
     ea = La + 8 | 0;
     ca = c[ea >> 2] | 0;
     T = c[1540] | 0;
     if (ca >>> 0 >= T >>> 0 & La >>> 0 >= T >>> 0) {
      c[ca + 12 >> 2] = ka;
      c[ea >> 2] = ka;
      c[ga + (S + 8) >> 2] = ca;
      c[ga + (S + 12) >> 2] = La;
      c[ga + (S + 24) >> 2] = 0;
      break;
     } else za();
    } else {
     ca = (c[1539] | 0) + ja | 0;
     c[1539] = ca;
     c[1542] = ka;
     c[ga + (S + 4) >> 2] = ca | 1;
    } while (0);
    n = ga + (ma | 8) | 0;
    return n | 0;
   } else va = 6592;
   while (1) {
    S = c[va >> 2] | 0;
    if (S >>> 0 <= na >>> 0 ? (ka = c[va + 4 >> 2] | 0, ja = S + ka | 0, ja >>> 0 > na >>> 0) : 0) {
     Ma = S;
     Na = ka;
     Oa = ja;
     break;
    }
    va = c[va + 8 >> 2] | 0;
   }
   ma = Ma + (Na + -39) | 0;
   ja = Ma + (Na + -47 + ((ma & 7 | 0) == 0 ? 0 : 0 - ma & 7)) | 0;
   ma = na + 16 | 0;
   ka = ja >>> 0 < ma >>> 0 ? na : ja;
   ja = ka + 8 | 0;
   S = ga + 8 | 0;
   ia = (S & 7 | 0) == 0 ? 0 : 0 - S & 7;
   S = ha + -40 - ia | 0;
   c[1542] = ga + ia;
   c[1539] = S;
   c[ga + (ia + 4) >> 2] = S | 1;
   c[ga + (ha + -36) >> 2] = 40;
   c[1543] = c[1658];
   S = ka + 4 | 0;
   c[S >> 2] = 27;
   c[ja >> 2] = c[1648];
   c[ja + 4 >> 2] = c[1649];
   c[ja + 8 >> 2] = c[1650];
   c[ja + 12 >> 2] = c[1651];
   c[1648] = ga;
   c[1649] = ha;
   c[1651] = 0;
   c[1650] = ja;
   ja = ka + 28 | 0;
   c[ja >> 2] = 7;
   if ((ka + 32 | 0) >>> 0 < Oa >>> 0) {
    ia = ja;
    do {
     ja = ia;
     ia = ia + 4 | 0;
     c[ia >> 2] = 7;
    } while ((ja + 8 | 0) >>> 0 < Oa >>> 0);
   }
   if ((ka | 0) != (na | 0)) {
    ia = ka - na | 0;
    c[S >> 2] = c[S >> 2] & -2;
    c[na + 4 >> 2] = ia | 1;
    c[ka >> 2] = ia;
    ja = ia >>> 3;
    if (ia >>> 0 < 256) {
     fa = ja << 1;
     ca = 6184 + (fa << 2) | 0;
     ea = c[1536] | 0;
     T = 1 << ja;
     if (ea & T) {
      ja = 6184 + (fa + 2 << 2) | 0;
      Z = c[ja >> 2] | 0;
      if (Z >>> 0 < (c[1540] | 0) >>> 0) za(); else {
       Qa = ja;
       Ra = Z;
      }
     } else {
      c[1536] = ea | T;
      Qa = 6184 + (fa + 2 << 2) | 0;
      Ra = ca;
     }
     c[Qa >> 2] = na;
     c[Ra + 12 >> 2] = na;
     c[na + 8 >> 2] = Ra;
     c[na + 12 >> 2] = ca;
     break;
    }
    ca = ia >>> 8;
    if (ca) if (ia >>> 0 > 16777215) Sa = 31; else {
     fa = (ca + 1048320 | 0) >>> 16 & 8;
     T = ca << fa;
     ca = (T + 520192 | 0) >>> 16 & 4;
     ea = T << ca;
     T = (ea + 245760 | 0) >>> 16 & 2;
     Z = 14 - (ca | fa | T) + (ea << T >>> 15) | 0;
     Sa = ia >>> (Z + 7 | 0) & 1 | Z << 1;
    } else Sa = 0;
    Z = 6448 + (Sa << 2) | 0;
    c[na + 28 >> 2] = Sa;
    c[na + 20 >> 2] = 0;
    c[ma >> 2] = 0;
    T = c[1537] | 0;
    ea = 1 << Sa;
    if (!(T & ea)) {
     c[1537] = T | ea;
     c[Z >> 2] = na;
     c[na + 24 >> 2] = Z;
     c[na + 12 >> 2] = na;
     c[na + 8 >> 2] = na;
     break;
    }
    ea = c[Z >> 2] | 0;
    k : do if ((c[ea + 4 >> 2] & -8 | 0) != (ia | 0)) {
     Z = ia << ((Sa | 0) == 31 ? 0 : 25 - (Sa >>> 1) | 0);
     T = ea;
     while (1) {
      fa = T + 16 + (Z >>> 31 << 2) | 0;
      ca = c[fa >> 2] | 0;
      if (!ca) {
       Ta = fa;
       Ua = T;
       break;
      }
      if ((c[ca + 4 >> 2] & -8 | 0) == (ia | 0)) {
       Va = ca;
       break k;
      } else {
       Z = Z << 1;
       T = ca;
      }
     }
     if (Ta >>> 0 < (c[1540] | 0) >>> 0) za(); else {
      c[Ta >> 2] = na;
      c[na + 24 >> 2] = Ua;
      c[na + 12 >> 2] = na;
      c[na + 8 >> 2] = na;
      break g;
     }
    } else Va = ea; while (0);
    ea = Va + 8 | 0;
    ia = c[ea >> 2] | 0;
    ma = c[1540] | 0;
    if (ia >>> 0 >= ma >>> 0 & Va >>> 0 >= ma >>> 0) {
     c[ia + 12 >> 2] = na;
     c[ea >> 2] = na;
     c[na + 8 >> 2] = ia;
     c[na + 12 >> 2] = Va;
     c[na + 24 >> 2] = 0;
     break;
    } else za();
   }
  } else {
   ia = c[1540] | 0;
   if ((ia | 0) == 0 | ga >>> 0 < ia >>> 0) c[1540] = ga;
   c[1648] = ga;
   c[1649] = ha;
   c[1651] = 0;
   c[1545] = c[1654];
   c[1544] = -1;
   ia = 0;
   do {
    ea = ia << 1;
    ma = 6184 + (ea << 2) | 0;
    c[6184 + (ea + 3 << 2) >> 2] = ma;
    c[6184 + (ea + 2 << 2) >> 2] = ma;
    ia = ia + 1 | 0;
   } while ((ia | 0) != 32);
   ia = ga + 8 | 0;
   ma = (ia & 7 | 0) == 0 ? 0 : 0 - ia & 7;
   ia = ha + -40 - ma | 0;
   c[1542] = ga + ma;
   c[1539] = ia;
   c[ga + (ma + 4) >> 2] = ia | 1;
   c[ga + (ha + -36) >> 2] = 40;
   c[1543] = c[1658];
  } while (0);
  ha = c[1539] | 0;
  if (ha >>> 0 > F >>> 0) {
   ga = ha - F | 0;
   c[1539] = ga;
   ha = c[1542] | 0;
   c[1542] = ha + F;
   c[ha + (F + 4) >> 2] = ga | 1;
   c[ha + 4 >> 2] = F | 3;
   n = ha + 8 | 0;
   return n | 0;
  }
 }
 c[(Qc() | 0) >> 2] = 12;
 n = 0;
 return n | 0;
}

function bk(b, e, f, g, h, j, k, l, m, n, o) {
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
 var p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, _ = 0, $ = 0, aa = 0, ba = 0, ca = 0, da = 0, ea = 0, fa = 0, ga = 0, ha = 0, ia = 0, ja = 0, ka = 0, la = 0, ma = 0, na = 0, oa = 0, pa = 0, qa = 0, ra = 0, sa = 0, ta = 0, ua = 0, va = 0, wa = 0, xa = 0, ya = 0, za = 0, Aa = 0, Ba = 0, Ca = 0, Da = 0, Ea = 0, Fa = 0, Ga = 0, Ha = 0, Ia = 0, Ja = 0, Ka = 0, La = 0, Ma = 0, Na = 0, Oa = 0, Pa = 0, Qa = 0, Ra = 0, Sa = 0, Ta = 0, Ua = 0, Va = 0, Wa = 0, Xa = 0, Ya = 0, Za = 0, _a = 0, $a = 0, ab = 0, bb = 0, cb = 0, db = 0, eb = 0, fb = 0, gb = 0, hb = 0, ib = 0, jb = 0, kb = 0, lb = 0, mb = 0, ob = 0, pb = 0, rb = 0, sb = 0, tb = 0, vb = 0, wb = 0, xb = 0, yb = 0, zb = 0;
 p = i;
 i = i + 512 | 0;
 q = p + 496 | 0;
 r = p + 96 | 0;
 s = p + 88 | 0;
 t = p + 80 | 0;
 u = p + 76 | 0;
 v = p + 500 | 0;
 w = p + 72 | 0;
 x = p + 68 | 0;
 y = p + 56 | 0;
 z = p + 44 | 0;
 A = p + 32 | 0;
 B = p + 20 | 0;
 C = p + 8 | 0;
 D = p + 4 | 0;
 E = p;
 c[q >> 2] = o;
 c[s >> 2] = r;
 o = s + 4 | 0;
 c[o >> 2] = 98;
 c[t >> 2] = r;
 c[u >> 2] = r + 400;
 c[y >> 2] = 0;
 c[y + 4 >> 2] = 0;
 c[y + 8 >> 2] = 0;
 c[z >> 2] = 0;
 c[z + 4 >> 2] = 0;
 c[z + 8 >> 2] = 0;
 c[A >> 2] = 0;
 c[A + 4 >> 2] = 0;
 c[A + 8 >> 2] = 0;
 c[B >> 2] = 0;
 c[B + 4 >> 2] = 0;
 c[B + 8 >> 2] = 0;
 c[C >> 2] = 0;
 c[C + 4 >> 2] = 0;
 c[C + 8 >> 2] = 0;
 dk(f, g, v, w, x, y, z, A, B, D);
 c[n >> 2] = c[m >> 2];
 g = A + 4 | 0;
 f = B + 4 | 0;
 F = B + 8 | 0;
 G = A + 8 | 0;
 H = (h & 512 | 0) != 0;
 h = z + 8 | 0;
 I = z + 4 | 0;
 J = C + 4 | 0;
 K = C + 8 | 0;
 L = v + 3 | 0;
 M = y + 4 | 0;
 N = r;
 r = 0;
 O = 0;
 a : while (1) {
  P = c[b >> 2] | 0;
  do if (P) {
   Q = c[P + 12 >> 2] | 0;
   if ((Q | 0) == (c[P + 16 >> 2] | 0)) R = ub[c[(c[P >> 2] | 0) + 36 >> 2] & 63](P) | 0; else R = c[Q >> 2] | 0;
   if ((R | 0) == -1) {
    c[b >> 2] = 0;
    S = 1;
    break;
   } else {
    S = (c[b >> 2] | 0) == 0;
    break;
   }
  } else S = 1; while (0);
  P = c[e >> 2] | 0;
  do if (P) {
   Q = c[P + 12 >> 2] | 0;
   if ((Q | 0) == (c[P + 16 >> 2] | 0)) T = ub[c[(c[P >> 2] | 0) + 36 >> 2] & 63](P) | 0; else T = c[Q >> 2] | 0;
   if ((T | 0) != -1) if (S) {
    U = P;
    break;
   } else {
    V = N;
    W = O;
    X = 217;
    break a;
   } else {
    c[e >> 2] = 0;
    X = 15;
    break;
   }
  } else X = 15; while (0);
  if ((X | 0) == 15) {
   X = 0;
   if (S) {
    V = N;
    W = O;
    X = 217;
    break;
   } else U = 0;
  }
  b : do switch (a[v + r >> 0] | 0) {
  case 1:
   {
    if ((r | 0) == 3) {
     Y = N;
     Z = O;
    } else {
     P = c[b >> 2] | 0;
     Q = c[P + 12 >> 2] | 0;
     if ((Q | 0) == (c[P + 16 >> 2] | 0)) _ = ub[c[(c[P >> 2] | 0) + 36 >> 2] & 63](P) | 0; else _ = c[Q >> 2] | 0;
     if (!(nb[c[(c[l >> 2] | 0) + 12 >> 2] & 31](l, 8192, _) | 0)) {
      X = 28;
      break a;
     }
     Q = c[b >> 2] | 0;
     P = Q + 12 | 0;
     $ = c[P >> 2] | 0;
     if (($ | 0) == (c[Q + 16 >> 2] | 0)) aa = ub[c[(c[Q >> 2] | 0) + 40 >> 2] & 63](Q) | 0; else {
      c[P >> 2] = $ + 4;
      aa = c[$ >> 2] | 0;
     }
     pf(C, aa);
     ba = U;
     ca = U;
     X = 30;
    }
    break;
   }
  case 0:
   {
    if ((r | 0) == 3) {
     Y = N;
     Z = O;
    } else {
     ba = U;
     ca = U;
     X = 30;
    }
    break;
   }
  case 3:
   {
    $ = a[A >> 0] | 0;
    P = ($ & 1) == 0 ? ($ & 255) >>> 1 : c[g >> 2] | 0;
    Q = a[B >> 0] | 0;
    da = (Q & 1) == 0 ? (Q & 255) >>> 1 : c[f >> 2] | 0;
    if ((P | 0) == (0 - da | 0)) {
     Y = N;
     Z = O;
    } else {
     Q = (P | 0) == 0;
     P = c[b >> 2] | 0;
     ea = c[P + 12 >> 2] | 0;
     fa = c[P + 16 >> 2] | 0;
     ga = (ea | 0) == (fa | 0);
     if (Q | (da | 0) == 0) {
      if (ga) ha = ub[c[(c[P >> 2] | 0) + 36 >> 2] & 63](P) | 0; else ha = c[ea >> 2] | 0;
      if (Q) {
       if ((ha | 0) != (c[((a[B >> 0] & 1) == 0 ? f : c[F >> 2] | 0) >> 2] | 0)) {
        Y = N;
        Z = O;
        break b;
       }
       Q = c[b >> 2] | 0;
       da = Q + 12 | 0;
       ia = c[da >> 2] | 0;
       if ((ia | 0) == (c[Q + 16 >> 2] | 0)) ub[c[(c[Q >> 2] | 0) + 40 >> 2] & 63](Q) | 0; else c[da >> 2] = ia + 4;
       a[k >> 0] = 1;
       ia = a[B >> 0] | 0;
       Y = N;
       Z = ((ia & 1) == 0 ? (ia & 255) >>> 1 : c[f >> 2] | 0) >>> 0 > 1 ? B : O;
       break b;
      }
      if ((ha | 0) != (c[((a[A >> 0] & 1) == 0 ? g : c[G >> 2] | 0) >> 2] | 0)) {
       a[k >> 0] = 1;
       Y = N;
       Z = O;
       break b;
      }
      ia = c[b >> 2] | 0;
      da = ia + 12 | 0;
      Q = c[da >> 2] | 0;
      if ((Q | 0) == (c[ia + 16 >> 2] | 0)) ub[c[(c[ia >> 2] | 0) + 40 >> 2] & 63](ia) | 0; else c[da >> 2] = Q + 4;
      Q = a[A >> 0] | 0;
      Y = N;
      Z = ((Q & 1) == 0 ? (Q & 255) >>> 1 : c[g >> 2] | 0) >>> 0 > 1 ? A : O;
      break b;
     }
     if (ga) {
      ga = ub[c[(c[P >> 2] | 0) + 36 >> 2] & 63](P) | 0;
      Q = c[b >> 2] | 0;
      ja = ga;
      ka = a[A >> 0] | 0;
      la = Q;
      ma = c[Q + 12 >> 2] | 0;
      na = c[Q + 16 >> 2] | 0;
     } else {
      ja = c[ea >> 2] | 0;
      ka = $;
      la = P;
      ma = ea;
      na = fa;
     }
     fa = la + 12 | 0;
     ea = (ma | 0) == (na | 0);
     if ((ja | 0) == (c[((ka & 1) == 0 ? g : c[G >> 2] | 0) >> 2] | 0)) {
      if (ea) ub[c[(c[la >> 2] | 0) + 40 >> 2] & 63](la) | 0; else c[fa >> 2] = ma + 4;
      fa = a[A >> 0] | 0;
      Y = N;
      Z = ((fa & 1) == 0 ? (fa & 255) >>> 1 : c[g >> 2] | 0) >>> 0 > 1 ? A : O;
      break b;
     }
     if (ea) oa = ub[c[(c[la >> 2] | 0) + 36 >> 2] & 63](la) | 0; else oa = c[ma >> 2] | 0;
     if ((oa | 0) != (c[((a[B >> 0] & 1) == 0 ? f : c[F >> 2] | 0) >> 2] | 0)) {
      X = 86;
      break a;
     }
     ea = c[b >> 2] | 0;
     fa = ea + 12 | 0;
     P = c[fa >> 2] | 0;
     if ((P | 0) == (c[ea + 16 >> 2] | 0)) ub[c[(c[ea >> 2] | 0) + 40 >> 2] & 63](ea) | 0; else c[fa >> 2] = P + 4;
     a[k >> 0] = 1;
     P = a[B >> 0] | 0;
     Y = N;
     Z = ((P & 1) == 0 ? (P & 255) >>> 1 : c[f >> 2] | 0) >>> 0 > 1 ? B : O;
    }
    break;
   }
  case 2:
   {
    if (!(r >>> 0 < 2 | (O | 0) != 0) ? !(H | (r | 0) == 2 & (a[L >> 0] | 0) != 0) : 0) {
     Y = N;
     Z = 0;
     break b;
    }
    P = a[z >> 0] | 0;
    fa = c[h >> 2] | 0;
    ea = (P & 1) == 0 ? I : fa;
    $ = ea;
    c : do if ((r | 0) != 0 ? (d[v + (r + -1) >> 0] | 0) < 2 : 0) {
     Q = (P & 1) == 0;
     d : do if ((ea | 0) == ((Q ? I : fa) + ((Q ? (P & 255) >>> 1 : c[I >> 2] | 0) << 2) | 0)) {
      pa = P;
      qa = fa;
      ra = $;
     } else {
      ga = ea;
      da = $;
      while (1) {
       if (!(nb[c[(c[l >> 2] | 0) + 12 >> 2] & 31](l, 8192, c[ga >> 2] | 0) | 0)) {
        sa = da;
        break;
       }
       ga = ga + 4 | 0;
       ia = ga;
       ta = a[z >> 0] | 0;
       ua = c[h >> 2] | 0;
       va = (ta & 1) == 0;
       if ((ga | 0) == ((va ? I : ua) + ((va ? (ta & 255) >>> 1 : c[I >> 2] | 0) << 2) | 0)) {
        pa = ta;
        qa = ua;
        ra = ia;
        break d;
       } else da = ia;
      }
      pa = a[z >> 0] | 0;
      qa = c[h >> 2] | 0;
      ra = sa;
     } while (0);
     Q = (pa & 1) == 0 ? I : qa;
     da = Q;
     ga = ra - da >> 2;
     ia = a[C >> 0] | 0;
     ua = (ia & 1) == 0;
     ta = ua ? (ia & 255) >>> 1 : c[J >> 2] | 0;
     if (ta >>> 0 >= ga >>> 0) {
      ia = ua ? J : c[K >> 2] | 0;
      ua = ia + (ta << 2) | 0;
      if (!ga) {
       wa = qa;
       xa = pa;
       ya = ra;
      } else {
       va = Q;
       Q = ia + (ta - ga << 2) | 0;
       while (1) {
        if ((c[Q >> 2] | 0) != (c[va >> 2] | 0)) {
         wa = qa;
         xa = pa;
         ya = da;
         break c;
        }
        Q = Q + 4 | 0;
        if ((Q | 0) == (ua | 0)) {
         wa = qa;
         xa = pa;
         ya = ra;
         break;
        } else va = va + 4 | 0;
       }
      }
     } else {
      wa = qa;
      xa = pa;
      ya = da;
     }
    } else {
     wa = fa;
     xa = P;
     ya = $;
    } while (0);
    $ = (xa & 1) == 0;
    P = ($ ? I : wa) + (($ ? (xa & 255) >>> 1 : c[I >> 2] | 0) << 2) | 0;
    $ = ya;
    e : do if (($ | 0) == (P | 0)) za = P; else {
     fa = U;
     ea = U;
     va = $;
     while (1) {
      ua = c[b >> 2] | 0;
      do if (ua) {
       Q = c[ua + 12 >> 2] | 0;
       if ((Q | 0) == (c[ua + 16 >> 2] | 0)) Aa = ub[c[(c[ua >> 2] | 0) + 36 >> 2] & 63](ua) | 0; else Aa = c[Q >> 2] | 0;
       if ((Aa | 0) == -1) {
        c[b >> 2] = 0;
        Ba = 1;
        break;
       } else {
        Ba = (c[b >> 2] | 0) == 0;
        break;
       }
      } else Ba = 1; while (0);
      do if (ea) {
       ua = c[ea + 12 >> 2] | 0;
       if ((ua | 0) == (c[ea + 16 >> 2] | 0)) Ca = ub[c[(c[ea >> 2] | 0) + 36 >> 2] & 63](ea) | 0; else Ca = c[ua >> 2] | 0;
       if ((Ca | 0) != -1) if (Ba ^ (fa | 0) == 0) {
        Da = fa;
        Ea = fa;
        break;
       } else {
        za = va;
        break e;
       } else {
        c[e >> 2] = 0;
        Fa = 0;
        X = 114;
        break;
       }
      } else {
       Fa = fa;
       X = 114;
      } while (0);
      if ((X | 0) == 114) {
       X = 0;
       if (Ba) {
        za = va;
        break e;
       } else {
        Da = Fa;
        Ea = 0;
       }
      }
      ua = c[b >> 2] | 0;
      Q = c[ua + 12 >> 2] | 0;
      if ((Q | 0) == (c[ua + 16 >> 2] | 0)) Ga = ub[c[(c[ua >> 2] | 0) + 36 >> 2] & 63](ua) | 0; else Ga = c[Q >> 2] | 0;
      if ((Ga | 0) != (c[va >> 2] | 0)) {
       za = va;
       break e;
      }
      Q = c[b >> 2] | 0;
      ua = Q + 12 | 0;
      ga = c[ua >> 2] | 0;
      if ((ga | 0) == (c[Q + 16 >> 2] | 0)) ub[c[(c[Q >> 2] | 0) + 40 >> 2] & 63](Q) | 0; else c[ua >> 2] = ga + 4;
      va = va + 4 | 0;
      ga = a[z >> 0] | 0;
      ua = (ga & 1) == 0;
      Q = (ua ? I : c[h >> 2] | 0) + ((ua ? (ga & 255) >>> 1 : c[I >> 2] | 0) << 2) | 0;
      if ((va | 0) == (Q | 0)) {
       za = Q;
       break;
      } else {
       fa = Da;
       ea = Ea;
      }
     }
    } while (0);
    if (H ? ($ = a[z >> 0] | 0, P = ($ & 1) == 0, (za | 0) != ((P ? I : c[h >> 2] | 0) + ((P ? ($ & 255) >>> 1 : c[I >> 2] | 0) << 2) | 0)) : 0) {
     X = 126;
     break a;
    } else {
     Y = N;
     Z = O;
    }
    break;
   }
  case 4:
   {
    $ = c[x >> 2] | 0;
    P = U;
    ea = U;
    fa = N;
    va = 0;
    f : while (1) {
     da = c[b >> 2] | 0;
     do if (da) {
      Q = c[da + 12 >> 2] | 0;
      if ((Q | 0) == (c[da + 16 >> 2] | 0)) Ha = ub[c[(c[da >> 2] | 0) + 36 >> 2] & 63](da) | 0; else Ha = c[Q >> 2] | 0;
      if ((Ha | 0) == -1) {
       c[b >> 2] = 0;
       Ia = 1;
       break;
      } else {
       Ia = (c[b >> 2] | 0) == 0;
       break;
      }
     } else Ia = 1; while (0);
     do if (ea) {
      da = c[ea + 12 >> 2] | 0;
      if ((da | 0) == (c[ea + 16 >> 2] | 0)) Ja = ub[c[(c[ea >> 2] | 0) + 36 >> 2] & 63](ea) | 0; else Ja = c[da >> 2] | 0;
      if ((Ja | 0) != -1) if (Ia ^ (P | 0) == 0) {
       Ka = P;
       La = P;
       break;
      } else {
       Ma = fa;
       Na = P;
       Oa = va;
       break f;
      } else {
       c[e >> 2] = 0;
       Pa = 0;
       X = 140;
       break;
      }
     } else {
      Pa = P;
      X = 140;
     } while (0);
     if ((X | 0) == 140) {
      X = 0;
      if (Ia) {
       Ma = fa;
       Na = Pa;
       Oa = va;
       break;
      } else {
       Ka = Pa;
       La = 0;
      }
     }
     da = c[b >> 2] | 0;
     Q = c[da + 12 >> 2] | 0;
     if ((Q | 0) == (c[da + 16 >> 2] | 0)) Qa = ub[c[(c[da >> 2] | 0) + 36 >> 2] & 63](da) | 0; else Qa = c[Q >> 2] | 0;
     if (nb[c[(c[l >> 2] | 0) + 12 >> 2] & 31](l, 2048, Qa) | 0) {
      Q = c[n >> 2] | 0;
      if ((Q | 0) == (c[q >> 2] | 0)) {
       $m(m, n, q);
       Ra = c[n >> 2] | 0;
      } else Ra = Q;
      c[n >> 2] = Ra + 4;
      c[Ra >> 2] = Qa;
      Sa = fa;
      Ta = va + 1 | 0;
     } else {
      Q = a[y >> 0] | 0;
      if (!((Qa | 0) == ($ | 0) & ((va | 0) != 0 ? (((Q & 1) == 0 ? (Q & 255) >>> 1 : c[M >> 2] | 0) | 0) != 0 : 0))) {
       Ma = fa;
       Na = Ka;
       Oa = va;
       break;
      }
      if ((fa | 0) == (c[u >> 2] | 0)) {
       Zm(s, t, u);
       Ua = c[t >> 2] | 0;
      } else Ua = fa;
      Q = Ua + 4 | 0;
      c[t >> 2] = Q;
      c[Ua >> 2] = va;
      Sa = Q;
      Ta = 0;
     }
     Q = c[b >> 2] | 0;
     da = Q + 12 | 0;
     ga = c[da >> 2] | 0;
     if ((ga | 0) == (c[Q + 16 >> 2] | 0)) {
      ub[c[(c[Q >> 2] | 0) + 40 >> 2] & 63](Q) | 0;
      P = Ka;
      ea = La;
      fa = Sa;
      va = Ta;
      continue;
     } else {
      c[da >> 2] = ga + 4;
      P = Ka;
      ea = La;
      fa = Sa;
      va = Ta;
      continue;
     }
    }
    if ((Oa | 0) != 0 ? (c[s >> 2] | 0) != (Ma | 0) : 0) {
     if ((Ma | 0) == (c[u >> 2] | 0)) {
      Zm(s, t, u);
      Va = c[t >> 2] | 0;
     } else Va = Ma;
     va = Va + 4 | 0;
     c[t >> 2] = va;
     c[Va >> 2] = Oa;
     Wa = va;
    } else Wa = Ma;
    va = c[D >> 2] | 0;
    if ((va | 0) > 0) {
     fa = c[b >> 2] | 0;
     do if (fa) {
      ea = c[fa + 12 >> 2] | 0;
      if ((ea | 0) == (c[fa + 16 >> 2] | 0)) Xa = ub[c[(c[fa >> 2] | 0) + 36 >> 2] & 63](fa) | 0; else Xa = c[ea >> 2] | 0;
      if ((Xa | 0) == -1) {
       c[b >> 2] = 0;
       Ya = 1;
       break;
      } else {
       Ya = (c[b >> 2] | 0) == 0;
       break;
      }
     } else Ya = 1; while (0);
     do if (Na) {
      fa = c[Na + 12 >> 2] | 0;
      if ((fa | 0) == (c[Na + 16 >> 2] | 0)) Za = ub[c[(c[Na >> 2] | 0) + 36 >> 2] & 63](Na) | 0; else Za = c[fa >> 2] | 0;
      if ((Za | 0) != -1) if (Ya) {
       _a = Na;
       break;
      } else {
       X = 180;
       break a;
      } else {
       c[e >> 2] = 0;
       X = 174;
       break;
      }
     } else X = 174; while (0);
     if ((X | 0) == 174) {
      X = 0;
      if (Ya) {
       X = 180;
       break a;
      } else _a = 0;
     }
     fa = c[b >> 2] | 0;
     ea = c[fa + 12 >> 2] | 0;
     if ((ea | 0) == (c[fa + 16 >> 2] | 0)) $a = ub[c[(c[fa >> 2] | 0) + 36 >> 2] & 63](fa) | 0; else $a = c[ea >> 2] | 0;
     if (($a | 0) != (c[w >> 2] | 0)) {
      X = 180;
      break a;
     }
     ea = c[b >> 2] | 0;
     fa = ea + 12 | 0;
     P = c[fa >> 2] | 0;
     if ((P | 0) == (c[ea + 16 >> 2] | 0)) ub[c[(c[ea >> 2] | 0) + 40 >> 2] & 63](ea) | 0; else c[fa >> 2] = P + 4;
     if ((va | 0) > 0) {
      P = _a;
      fa = _a;
      ea = va;
      while (1) {
       $ = c[b >> 2] | 0;
       do if ($) {
        ga = c[$ + 12 >> 2] | 0;
        if ((ga | 0) == (c[$ + 16 >> 2] | 0)) ab = ub[c[(c[$ >> 2] | 0) + 36 >> 2] & 63]($) | 0; else ab = c[ga >> 2] | 0;
        if ((ab | 0) == -1) {
         c[b >> 2] = 0;
         bb = 1;
         break;
        } else {
         bb = (c[b >> 2] | 0) == 0;
         break;
        }
       } else bb = 1; while (0);
       do if (fa) {
        $ = c[fa + 12 >> 2] | 0;
        if (($ | 0) == (c[fa + 16 >> 2] | 0)) cb = ub[c[(c[fa >> 2] | 0) + 36 >> 2] & 63](fa) | 0; else cb = c[$ >> 2] | 0;
        if ((cb | 0) != -1) if (bb ^ (P | 0) == 0) {
         db = P;
         eb = P;
         break;
        } else {
         X = 204;
         break a;
        } else {
         c[e >> 2] = 0;
         fb = 0;
         X = 198;
         break;
        }
       } else {
        fb = P;
        X = 198;
       } while (0);
       if ((X | 0) == 198) {
        X = 0;
        if (bb) {
         X = 204;
         break a;
        } else {
         db = fb;
         eb = 0;
        }
       }
       $ = c[b >> 2] | 0;
       ga = c[$ + 12 >> 2] | 0;
       if ((ga | 0) == (c[$ + 16 >> 2] | 0)) gb = ub[c[(c[$ >> 2] | 0) + 36 >> 2] & 63]($) | 0; else gb = c[ga >> 2] | 0;
       if (!(nb[c[(c[l >> 2] | 0) + 12 >> 2] & 31](l, 2048, gb) | 0)) {
        X = 204;
        break a;
       }
       if ((c[n >> 2] | 0) == (c[q >> 2] | 0)) $m(m, n, q);
       ga = c[b >> 2] | 0;
       $ = c[ga + 12 >> 2] | 0;
       if (($ | 0) == (c[ga + 16 >> 2] | 0)) hb = ub[c[(c[ga >> 2] | 0) + 36 >> 2] & 63](ga) | 0; else hb = c[$ >> 2] | 0;
       $ = c[n >> 2] | 0;
       c[n >> 2] = $ + 4;
       c[$ >> 2] = hb;
       $ = ea;
       ea = ea + -1 | 0;
       c[D >> 2] = ea;
       ga = c[b >> 2] | 0;
       da = ga + 12 | 0;
       Q = c[da >> 2] | 0;
       if ((Q | 0) == (c[ga + 16 >> 2] | 0)) ub[c[(c[ga >> 2] | 0) + 40 >> 2] & 63](ga) | 0; else c[da >> 2] = Q + 4;
       if (($ | 0) <= 1) break; else {
        P = db;
        fa = eb;
       }
      }
     }
    }
    if ((c[n >> 2] | 0) == (c[m >> 2] | 0)) {
     X = 215;
     break a;
    } else {
     Y = Wa;
     Z = O;
    }
    break;
   }
  default:
   {
    Y = N;
    Z = O;
   }
  } while (0);
  g : do if ((X | 0) == 30) while (1) {
   X = 0;
   fa = c[b >> 2] | 0;
   do if (fa) {
    P = c[fa + 12 >> 2] | 0;
    if ((P | 0) == (c[fa + 16 >> 2] | 0)) ib = ub[c[(c[fa >> 2] | 0) + 36 >> 2] & 63](fa) | 0; else ib = c[P >> 2] | 0;
    if ((ib | 0) == -1) {
     c[b >> 2] = 0;
     jb = 1;
     break;
    } else {
     jb = (c[b >> 2] | 0) == 0;
     break;
    }
   } else jb = 1; while (0);
   do if (ca) {
    fa = c[ca + 12 >> 2] | 0;
    if ((fa | 0) == (c[ca + 16 >> 2] | 0)) kb = ub[c[(c[ca >> 2] | 0) + 36 >> 2] & 63](ca) | 0; else kb = c[fa >> 2] | 0;
    if ((kb | 0) != -1) if (jb ^ (ba | 0) == 0) {
     lb = ba;
     mb = ba;
     break;
    } else {
     Y = N;
     Z = O;
     break g;
    } else {
     c[e >> 2] = 0;
     ob = 0;
     X = 43;
     break;
    }
   } else {
    ob = ba;
    X = 43;
   } while (0);
   if ((X | 0) == 43) {
    X = 0;
    if (jb) {
     Y = N;
     Z = O;
     break g;
    } else {
     lb = ob;
     mb = 0;
    }
   }
   fa = c[b >> 2] | 0;
   P = c[fa + 12 >> 2] | 0;
   if ((P | 0) == (c[fa + 16 >> 2] | 0)) pb = ub[c[(c[fa >> 2] | 0) + 36 >> 2] & 63](fa) | 0; else pb = c[P >> 2] | 0;
   if (!(nb[c[(c[l >> 2] | 0) + 12 >> 2] & 31](l, 8192, pb) | 0)) {
    Y = N;
    Z = O;
    break g;
   }
   P = c[b >> 2] | 0;
   fa = P + 12 | 0;
   ea = c[fa >> 2] | 0;
   if ((ea | 0) == (c[P + 16 >> 2] | 0)) rb = ub[c[(c[P >> 2] | 0) + 40 >> 2] & 63](P) | 0; else {
    c[fa >> 2] = ea + 4;
    rb = c[ea >> 2] | 0;
   }
   pf(C, rb);
   ba = lb;
   ca = mb;
   X = 30;
  } while (0);
  r = r + 1 | 0;
  if (r >>> 0 >= 4) {
   V = Y;
   W = Z;
   X = 217;
   break;
  } else {
   N = Y;
   O = Z;
  }
 }
 h : do if ((X | 0) == 28) {
  c[j >> 2] = c[j >> 2] | 4;
  sb = 0;
 } else if ((X | 0) == 86) {
  c[j >> 2] = c[j >> 2] | 4;
  sb = 0;
 } else if ((X | 0) == 126) {
  c[j >> 2] = c[j >> 2] | 4;
  sb = 0;
 } else if ((X | 0) == 180) {
  c[j >> 2] = c[j >> 2] | 4;
  sb = 0;
 } else if ((X | 0) == 204) {
  c[j >> 2] = c[j >> 2] | 4;
  sb = 0;
 } else if ((X | 0) == 215) {
  c[j >> 2] = c[j >> 2] | 4;
  sb = 0;
 } else if ((X | 0) == 217) {
  i : do if (W) {
   Z = W + 4 | 0;
   O = W + 8 | 0;
   Y = 1;
   j : while (1) {
    N = a[W >> 0] | 0;
    if (!(N & 1)) tb = (N & 255) >>> 1; else tb = c[Z >> 2] | 0;
    if (Y >>> 0 >= tb >>> 0) break i;
    N = c[b >> 2] | 0;
    do if (N) {
     r = c[N + 12 >> 2] | 0;
     if ((r | 0) == (c[N + 16 >> 2] | 0)) vb = ub[c[(c[N >> 2] | 0) + 36 >> 2] & 63](N) | 0; else vb = c[r >> 2] | 0;
     if ((vb | 0) == -1) {
      c[b >> 2] = 0;
      wb = 1;
      break;
     } else {
      wb = (c[b >> 2] | 0) == 0;
      break;
     }
    } else wb = 1; while (0);
    N = c[e >> 2] | 0;
    do if (N) {
     r = c[N + 12 >> 2] | 0;
     if ((r | 0) == (c[N + 16 >> 2] | 0)) xb = ub[c[(c[N >> 2] | 0) + 36 >> 2] & 63](N) | 0; else xb = c[r >> 2] | 0;
     if ((xb | 0) != -1) if (wb) break; else break j; else {
      c[e >> 2] = 0;
      X = 236;
      break;
     }
    } else X = 236; while (0);
    if ((X | 0) == 236 ? (X = 0, wb) : 0) break;
    N = c[b >> 2] | 0;
    r = c[N + 12 >> 2] | 0;
    if ((r | 0) == (c[N + 16 >> 2] | 0)) yb = ub[c[(c[N >> 2] | 0) + 36 >> 2] & 63](N) | 0; else yb = c[r >> 2] | 0;
    if (!(a[W >> 0] & 1)) zb = Z; else zb = c[O >> 2] | 0;
    if ((yb | 0) != (c[zb + (Y << 2) >> 2] | 0)) break;
    r = Y + 1 | 0;
    N = c[b >> 2] | 0;
    mb = N + 12 | 0;
    ca = c[mb >> 2] | 0;
    if ((ca | 0) == (c[N + 16 >> 2] | 0)) {
     ub[c[(c[N >> 2] | 0) + 40 >> 2] & 63](N) | 0;
     Y = r;
     continue;
    } else {
     c[mb >> 2] = ca + 4;
     Y = r;
     continue;
    }
   }
   c[j >> 2] = c[j >> 2] | 4;
   sb = 0;
   break h;
  } while (0);
  Y = c[s >> 2] | 0;
  if ((Y | 0) != (V | 0) ? (c[E >> 2] = 0, Zj(y, Y, V, E), (c[E >> 2] | 0) != 0) : 0) {
   c[j >> 2] = c[j >> 2] | 4;
   sb = 0;
  } else sb = 1;
 } while (0);
 lf(C);
 lf(B);
 lf(A);
 lf(z);
 $e(y);
 y = c[s >> 2] | 0;
 c[s >> 2] = 0;
 if (y) qb[c[o >> 2] & 127](y);
 i = p;
 return sb | 0;
}

function Vj(e, f, g, h, j, k, l, m, n, o, p) {
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
 var q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, _ = 0, $ = 0, aa = 0, ba = 0, ca = 0, da = 0, ea = 0, fa = 0, ga = 0, ha = 0, ia = 0, ja = 0, ka = 0, la = 0, ma = 0, na = 0, oa = 0, pa = 0, qa = 0, ra = 0, sa = 0, ta = 0, ua = 0, va = 0, wa = 0, xa = 0, ya = 0, za = 0, Aa = 0, Ba = 0, Ca = 0, Da = 0, Ea = 0, Fa = 0, Ga = 0, Ha = 0, Ia = 0, Ja = 0, Ka = 0, La = 0, Ma = 0, Na = 0, Oa = 0, Pa = 0, Qa = 0, Ra = 0, Sa = 0, Ta = 0, Ua = 0, Va = 0, Wa = 0, Xa = 0, Ya = 0, Za = 0, _a = 0, $a = 0, ab = 0, bb = 0, cb = 0, db = 0, eb = 0, fb = 0, gb = 0, hb = 0, ib = 0, jb = 0;
 q = i;
 i = i + 512 | 0;
 r = q + 88 | 0;
 s = q + 96 | 0;
 t = q + 80 | 0;
 u = q + 72 | 0;
 v = q + 68 | 0;
 w = q + 500 | 0;
 x = q + 497 | 0;
 y = q + 496 | 0;
 z = q + 56 | 0;
 A = q + 44 | 0;
 B = q + 32 | 0;
 C = q + 20 | 0;
 D = q + 8 | 0;
 E = q + 4 | 0;
 F = q;
 c[r >> 2] = p;
 c[t >> 2] = s;
 p = t + 4 | 0;
 c[p >> 2] = 98;
 c[u >> 2] = s;
 c[v >> 2] = s + 400;
 c[z >> 2] = 0;
 c[z + 4 >> 2] = 0;
 c[z + 8 >> 2] = 0;
 c[A >> 2] = 0;
 c[A + 4 >> 2] = 0;
 c[A + 8 >> 2] = 0;
 c[B >> 2] = 0;
 c[B + 4 >> 2] = 0;
 c[B + 8 >> 2] = 0;
 c[C >> 2] = 0;
 c[C + 4 >> 2] = 0;
 c[C + 8 >> 2] = 0;
 c[D >> 2] = 0;
 c[D + 4 >> 2] = 0;
 c[D + 8 >> 2] = 0;
 Yj(g, h, w, x, y, z, A, B, C, E);
 c[o >> 2] = c[n >> 2];
 h = m + 8 | 0;
 m = B + 4 | 0;
 g = C + 4 | 0;
 G = C + 8 | 0;
 H = C + 1 | 0;
 I = B + 8 | 0;
 J = B + 1 | 0;
 K = (j & 512 | 0) != 0;
 j = A + 8 | 0;
 L = A + 1 | 0;
 M = A + 4 | 0;
 N = D + 4 | 0;
 O = D + 8 | 0;
 P = D + 1 | 0;
 Q = w + 3 | 0;
 R = z + 4 | 0;
 S = s;
 s = 0;
 T = 0;
 a : while (1) {
  U = c[e >> 2] | 0;
  do if (U) if ((c[U + 12 >> 2] | 0) == (c[U + 16 >> 2] | 0)) if ((ub[c[(c[U >> 2] | 0) + 36 >> 2] & 63](U) | 0) == -1) {
   c[e >> 2] = 0;
   V = 0;
   break;
  } else {
   V = c[e >> 2] | 0;
   break;
  } else V = U; else V = 0; while (0);
  U = (V | 0) == 0;
  W = c[f >> 2] | 0;
  do if (W) {
   if ((c[W + 12 >> 2] | 0) != (c[W + 16 >> 2] | 0)) if (U) {
    X = W;
    break;
   } else {
    Y = S;
    Z = T;
    _ = 202;
    break a;
   }
   if ((ub[c[(c[W >> 2] | 0) + 36 >> 2] & 63](W) | 0) != -1) if (U) {
    X = W;
    break;
   } else {
    Y = S;
    Z = T;
    _ = 202;
    break a;
   } else {
    c[f >> 2] = 0;
    _ = 12;
    break;
   }
  } else _ = 12; while (0);
  if ((_ | 0) == 12) {
   _ = 0;
   if (U) {
    Y = S;
    Z = T;
    _ = 202;
    break;
   } else X = 0;
  }
  b : do switch (a[w + s >> 0] | 0) {
  case 1:
   {
    if ((s | 0) == 3) {
     $ = S;
     aa = T;
    } else {
     W = c[e >> 2] | 0;
     ba = c[W + 12 >> 2] | 0;
     if ((ba | 0) == (c[W + 16 >> 2] | 0)) ca = ub[c[(c[W >> 2] | 0) + 36 >> 2] & 63](W) | 0; else ca = d[ba >> 0] | 0;
     if ((ca & 255) << 24 >> 24 <= -1) {
      _ = 26;
      break a;
     }
     if (!(b[(c[h >> 2] | 0) + (ca << 24 >> 24 << 1) >> 1] & 8192)) {
      _ = 26;
      break a;
     }
     ba = c[e >> 2] | 0;
     W = ba + 12 | 0;
     da = c[W >> 2] | 0;
     if ((da | 0) == (c[ba + 16 >> 2] | 0)) ea = ub[c[(c[ba >> 2] | 0) + 40 >> 2] & 63](ba) | 0; else {
      c[W >> 2] = da + 1;
      ea = d[da >> 0] | 0;
     }
     ff(D, ea & 255);
     fa = X;
     ga = X;
     _ = 28;
    }
    break;
   }
  case 0:
   {
    if ((s | 0) == 3) {
     $ = S;
     aa = T;
    } else {
     fa = X;
     ga = X;
     _ = 28;
    }
    break;
   }
  case 3:
   {
    da = a[B >> 0] | 0;
    W = (da & 1) == 0 ? (da & 255) >>> 1 : c[m >> 2] | 0;
    ba = a[C >> 0] | 0;
    ha = (ba & 1) == 0 ? (ba & 255) >>> 1 : c[g >> 2] | 0;
    if ((W | 0) == (0 - ha | 0)) {
     $ = S;
     aa = T;
    } else {
     ba = (W | 0) == 0;
     W = c[e >> 2] | 0;
     ia = c[W + 12 >> 2] | 0;
     ja = c[W + 16 >> 2] | 0;
     ka = (ia | 0) == (ja | 0);
     if (ba | (ha | 0) == 0) {
      if (ka) la = ub[c[(c[W >> 2] | 0) + 36 >> 2] & 63](W) | 0; else la = d[ia >> 0] | 0;
      ha = la & 255;
      if (ba) {
       if (ha << 24 >> 24 != (a[((a[C >> 0] & 1) == 0 ? H : c[G >> 2] | 0) >> 0] | 0)) {
        $ = S;
        aa = T;
        break b;
       }
       ba = c[e >> 2] | 0;
       ma = ba + 12 | 0;
       na = c[ma >> 2] | 0;
       if ((na | 0) == (c[ba + 16 >> 2] | 0)) ub[c[(c[ba >> 2] | 0) + 40 >> 2] & 63](ba) | 0; else c[ma >> 2] = na + 1;
       a[l >> 0] = 1;
       na = a[C >> 0] | 0;
       $ = S;
       aa = ((na & 1) == 0 ? (na & 255) >>> 1 : c[g >> 2] | 0) >>> 0 > 1 ? C : T;
       break b;
      }
      if (ha << 24 >> 24 != (a[((a[B >> 0] & 1) == 0 ? J : c[I >> 2] | 0) >> 0] | 0)) {
       a[l >> 0] = 1;
       $ = S;
       aa = T;
       break b;
      }
      ha = c[e >> 2] | 0;
      na = ha + 12 | 0;
      ma = c[na >> 2] | 0;
      if ((ma | 0) == (c[ha + 16 >> 2] | 0)) ub[c[(c[ha >> 2] | 0) + 40 >> 2] & 63](ha) | 0; else c[na >> 2] = ma + 1;
      ma = a[B >> 0] | 0;
      $ = S;
      aa = ((ma & 1) == 0 ? (ma & 255) >>> 1 : c[m >> 2] | 0) >>> 0 > 1 ? B : T;
      break b;
     }
     if (ka) {
      ka = ub[c[(c[W >> 2] | 0) + 36 >> 2] & 63](W) | 0;
      ma = c[e >> 2] | 0;
      oa = ka;
      pa = a[B >> 0] | 0;
      qa = ma;
      ra = c[ma + 12 >> 2] | 0;
      sa = c[ma + 16 >> 2] | 0;
     } else {
      oa = d[ia >> 0] | 0;
      pa = da;
      qa = W;
      ra = ia;
      sa = ja;
     }
     ja = qa + 12 | 0;
     ia = (ra | 0) == (sa | 0);
     if ((oa & 255) << 24 >> 24 == (a[((pa & 1) == 0 ? J : c[I >> 2] | 0) >> 0] | 0)) {
      if (ia) ub[c[(c[qa >> 2] | 0) + 40 >> 2] & 63](qa) | 0; else c[ja >> 2] = ra + 1;
      ja = a[B >> 0] | 0;
      $ = S;
      aa = ((ja & 1) == 0 ? (ja & 255) >>> 1 : c[m >> 2] | 0) >>> 0 > 1 ? B : T;
      break b;
     }
     if (ia) ta = ub[c[(c[qa >> 2] | 0) + 36 >> 2] & 63](qa) | 0; else ta = d[ra >> 0] | 0;
     if ((ta & 255) << 24 >> 24 != (a[((a[C >> 0] & 1) == 0 ? H : c[G >> 2] | 0) >> 0] | 0)) {
      _ = 82;
      break a;
     }
     ia = c[e >> 2] | 0;
     ja = ia + 12 | 0;
     W = c[ja >> 2] | 0;
     if ((W | 0) == (c[ia + 16 >> 2] | 0)) ub[c[(c[ia >> 2] | 0) + 40 >> 2] & 63](ia) | 0; else c[ja >> 2] = W + 1;
     a[l >> 0] = 1;
     W = a[C >> 0] | 0;
     $ = S;
     aa = ((W & 1) == 0 ? (W & 255) >>> 1 : c[g >> 2] | 0) >>> 0 > 1 ? C : T;
    }
    break;
   }
  case 2:
   {
    if (!(s >>> 0 < 2 | (T | 0) != 0) ? !(K | (s | 0) == 2 & (a[Q >> 0] | 0) != 0) : 0) {
     $ = S;
     aa = 0;
     break b;
    }
    W = a[A >> 0] | 0;
    ja = (W & 1) == 0;
    ia = c[j >> 2] | 0;
    da = ja ? L : ia;
    ma = da;
    c : do if ((s | 0) != 0 ? (d[w + (s + -1) >> 0] | 0) < 2 : 0) {
     ka = ja ? (W & 255) >>> 1 : c[M >> 2] | 0;
     na = da + ka | 0;
     ha = c[h >> 2] | 0;
     d : do if (!ka) ua = ma; else {
      ba = da;
      va = ma;
      while (1) {
       wa = a[ba >> 0] | 0;
       if (wa << 24 >> 24 <= -1) {
        ua = va;
        break d;
       }
       if (!(b[ha + (wa << 24 >> 24 << 1) >> 1] & 8192)) {
        ua = va;
        break d;
       }
       ba = ba + 1 | 0;
       wa = ba;
       if ((ba | 0) == (na | 0)) {
        ua = wa;
        break;
       } else va = wa;
      }
     } while (0);
     na = ua - ma | 0;
     ha = a[D >> 0] | 0;
     ka = (ha & 1) == 0;
     va = ka ? (ha & 255) >>> 1 : c[N >> 2] | 0;
     if (va >>> 0 >= na >>> 0) {
      ha = ka ? P : c[O >> 2] | 0;
      ka = ha + va | 0;
      if ((ua | 0) == (ma | 0)) xa = ua; else {
       ba = da;
       wa = ha + (va - na) | 0;
       while (1) {
        if ((a[wa >> 0] | 0) != (a[ba >> 0] | 0)) {
         xa = ma;
         break c;
        }
        wa = wa + 1 | 0;
        if ((wa | 0) == (ka | 0)) {
         xa = ua;
         break;
        } else ba = ba + 1 | 0;
       }
      }
     } else xa = ma;
    } else xa = ma; while (0);
    ma = (W & 1) == 0;
    da = (ma ? L : ia) + (ma ? (W & 255) >>> 1 : c[M >> 2] | 0) | 0;
    ma = xa;
    e : do if ((ma | 0) == (da | 0)) ya = da; else {
     ja = X;
     ba = X;
     ka = ma;
     while (1) {
      wa = c[e >> 2] | 0;
      do if (wa) if ((c[wa + 12 >> 2] | 0) == (c[wa + 16 >> 2] | 0)) if ((ub[c[(c[wa >> 2] | 0) + 36 >> 2] & 63](wa) | 0) == -1) {
       c[e >> 2] = 0;
       za = 0;
       break;
      } else {
       za = c[e >> 2] | 0;
       break;
      } else za = wa; else za = 0; while (0);
      wa = (za | 0) == 0;
      do if (ba) {
       if ((c[ba + 12 >> 2] | 0) != (c[ba + 16 >> 2] | 0)) if (wa) {
        Aa = ja;
        Ba = ba;
        break;
       } else {
        ya = ka;
        break e;
       }
       if ((ub[c[(c[ba >> 2] | 0) + 36 >> 2] & 63](ba) | 0) != -1) if (wa ^ (ja | 0) == 0) {
        Aa = ja;
        Ba = ja;
        break;
       } else {
        ya = ka;
        break e;
       } else {
        c[f >> 2] = 0;
        Ca = 0;
        _ = 107;
        break;
       }
      } else {
       Ca = ja;
       _ = 107;
      } while (0);
      if ((_ | 0) == 107) {
       _ = 0;
       if (wa) {
        ya = ka;
        break e;
       } else {
        Aa = Ca;
        Ba = 0;
       }
      }
      na = c[e >> 2] | 0;
      va = c[na + 12 >> 2] | 0;
      if ((va | 0) == (c[na + 16 >> 2] | 0)) Da = ub[c[(c[na >> 2] | 0) + 36 >> 2] & 63](na) | 0; else Da = d[va >> 0] | 0;
      if ((Da & 255) << 24 >> 24 != (a[ka >> 0] | 0)) {
       ya = ka;
       break e;
      }
      va = c[e >> 2] | 0;
      na = va + 12 | 0;
      ha = c[na >> 2] | 0;
      if ((ha | 0) == (c[va + 16 >> 2] | 0)) ub[c[(c[va >> 2] | 0) + 40 >> 2] & 63](va) | 0; else c[na >> 2] = ha + 1;
      ka = ka + 1 | 0;
      ha = a[A >> 0] | 0;
      na = (ha & 1) == 0;
      va = (na ? L : c[j >> 2] | 0) + (na ? (ha & 255) >>> 1 : c[M >> 2] | 0) | 0;
      if ((ka | 0) == (va | 0)) {
       ya = va;
       break;
      } else {
       ja = Aa;
       ba = Ba;
      }
     }
    } while (0);
    if (K ? (ma = a[A >> 0] | 0, da = (ma & 1) == 0, (ya | 0) != ((da ? L : c[j >> 2] | 0) + (da ? (ma & 255) >>> 1 : c[M >> 2] | 0) | 0)) : 0) {
     _ = 119;
     break a;
    } else {
     $ = S;
     aa = T;
    }
    break;
   }
  case 4:
   {
    ma = a[y >> 0] | 0;
    da = X;
    W = X;
    ia = S;
    ba = 0;
    f : while (1) {
     ja = c[e >> 2] | 0;
     do if (ja) if ((c[ja + 12 >> 2] | 0) == (c[ja + 16 >> 2] | 0)) if ((ub[c[(c[ja >> 2] | 0) + 36 >> 2] & 63](ja) | 0) == -1) {
      c[e >> 2] = 0;
      Ea = 0;
      break;
     } else {
      Ea = c[e >> 2] | 0;
      break;
     } else Ea = ja; else Ea = 0; while (0);
     ja = (Ea | 0) == 0;
     do if (W) {
      if ((c[W + 12 >> 2] | 0) != (c[W + 16 >> 2] | 0)) if (ja) {
       Fa = da;
       Ga = W;
       break;
      } else {
       Ha = ia;
       Ia = da;
       Ja = ba;
       break f;
      }
      if ((ub[c[(c[W >> 2] | 0) + 36 >> 2] & 63](W) | 0) != -1) if (ja ^ (da | 0) == 0) {
       Fa = da;
       Ga = da;
       break;
      } else {
       Ha = ia;
       Ia = da;
       Ja = ba;
       break f;
      } else {
       c[f >> 2] = 0;
       Ka = 0;
       _ = 130;
       break;
      }
     } else {
      Ka = da;
      _ = 130;
     } while (0);
     if ((_ | 0) == 130) {
      _ = 0;
      if (ja) {
       Ha = ia;
       Ia = Ka;
       Ja = ba;
       break;
      } else {
       Fa = Ka;
       Ga = 0;
      }
     }
     ka = c[e >> 2] | 0;
     va = c[ka + 12 >> 2] | 0;
     if ((va | 0) == (c[ka + 16 >> 2] | 0)) La = ub[c[(c[ka >> 2] | 0) + 36 >> 2] & 63](ka) | 0; else La = d[va >> 0] | 0;
     va = La & 255;
     if (va << 24 >> 24 > -1 ? (b[(c[h >> 2] | 0) + (La << 24 >> 24 << 1) >> 1] & 2048) != 0 : 0) {
      ka = c[o >> 2] | 0;
      if ((ka | 0) == (c[r >> 2] | 0)) {
       Ym(n, o, r);
       Ma = c[o >> 2] | 0;
      } else Ma = ka;
      c[o >> 2] = Ma + 1;
      a[Ma >> 0] = va;
      Na = ia;
      Oa = ba + 1 | 0;
     } else {
      ka = a[z >> 0] | 0;
      if (!(va << 24 >> 24 == ma << 24 >> 24 & ((ba | 0) != 0 ? (((ka & 1) == 0 ? (ka & 255) >>> 1 : c[R >> 2] | 0) | 0) != 0 : 0))) {
       Ha = ia;
       Ia = Fa;
       Ja = ba;
       break;
      }
      if ((ia | 0) == (c[v >> 2] | 0)) {
       Zm(t, u, v);
       Pa = c[u >> 2] | 0;
      } else Pa = ia;
      ka = Pa + 4 | 0;
      c[u >> 2] = ka;
      c[Pa >> 2] = ba;
      Na = ka;
      Oa = 0;
     }
     ka = c[e >> 2] | 0;
     va = ka + 12 | 0;
     ha = c[va >> 2] | 0;
     if ((ha | 0) == (c[ka + 16 >> 2] | 0)) {
      ub[c[(c[ka >> 2] | 0) + 40 >> 2] & 63](ka) | 0;
      da = Fa;
      W = Ga;
      ia = Na;
      ba = Oa;
      continue;
     } else {
      c[va >> 2] = ha + 1;
      da = Fa;
      W = Ga;
      ia = Na;
      ba = Oa;
      continue;
     }
    }
    if ((Ja | 0) != 0 ? (c[t >> 2] | 0) != (Ha | 0) : 0) {
     if ((Ha | 0) == (c[v >> 2] | 0)) {
      Zm(t, u, v);
      Qa = c[u >> 2] | 0;
     } else Qa = Ha;
     ba = Qa + 4 | 0;
     c[u >> 2] = ba;
     c[Qa >> 2] = Ja;
     Ra = ba;
    } else Ra = Ha;
    ba = c[E >> 2] | 0;
    if ((ba | 0) > 0) {
     ia = c[e >> 2] | 0;
     do if (ia) if ((c[ia + 12 >> 2] | 0) == (c[ia + 16 >> 2] | 0)) if ((ub[c[(c[ia >> 2] | 0) + 36 >> 2] & 63](ia) | 0) == -1) {
      c[e >> 2] = 0;
      Sa = 0;
      break;
     } else {
      Sa = c[e >> 2] | 0;
      break;
     } else Sa = ia; else Sa = 0; while (0);
     ia = (Sa | 0) == 0;
     do if (Ia) {
      if ((c[Ia + 12 >> 2] | 0) == (c[Ia + 16 >> 2] | 0) ? (ub[c[(c[Ia >> 2] | 0) + 36 >> 2] & 63](Ia) | 0) == -1 : 0) {
       c[f >> 2] = 0;
       _ = 162;
       break;
      }
      if (ia) Ta = Ia; else {
       _ = 167;
       break a;
      }
     } else _ = 162; while (0);
     if ((_ | 0) == 162) {
      _ = 0;
      if (ia) {
       _ = 167;
       break a;
      } else Ta = 0;
     }
     W = c[e >> 2] | 0;
     da = c[W + 12 >> 2] | 0;
     if ((da | 0) == (c[W + 16 >> 2] | 0)) Ua = ub[c[(c[W >> 2] | 0) + 36 >> 2] & 63](W) | 0; else Ua = d[da >> 0] | 0;
     if ((Ua & 255) << 24 >> 24 != (a[x >> 0] | 0)) {
      _ = 167;
      break a;
     }
     da = c[e >> 2] | 0;
     W = da + 12 | 0;
     ma = c[W >> 2] | 0;
     if ((ma | 0) == (c[da + 16 >> 2] | 0)) ub[c[(c[da >> 2] | 0) + 40 >> 2] & 63](da) | 0; else c[W >> 2] = ma + 1;
     if ((ba | 0) > 0) {
      ma = Ta;
      W = Ta;
      da = ba;
      while (1) {
       ha = c[e >> 2] | 0;
       do if (ha) if ((c[ha + 12 >> 2] | 0) == (c[ha + 16 >> 2] | 0)) if ((ub[c[(c[ha >> 2] | 0) + 36 >> 2] & 63](ha) | 0) == -1) {
        c[e >> 2] = 0;
        Va = 0;
        break;
       } else {
        Va = c[e >> 2] | 0;
        break;
       } else Va = ha; else Va = 0; while (0);
       ha = (Va | 0) == 0;
       do if (W) {
        if ((c[W + 12 >> 2] | 0) != (c[W + 16 >> 2] | 0)) if (ha) {
         Wa = ma;
         Xa = W;
         break;
        } else {
         _ = 189;
         break a;
        }
        if ((ub[c[(c[W >> 2] | 0) + 36 >> 2] & 63](W) | 0) != -1) if (ha ^ (ma | 0) == 0) {
         Wa = ma;
         Xa = ma;
         break;
        } else {
         _ = 189;
         break a;
        } else {
         c[f >> 2] = 0;
         Ya = 0;
         _ = 182;
         break;
        }
       } else {
        Ya = ma;
        _ = 182;
       } while (0);
       if ((_ | 0) == 182) {
        _ = 0;
        if (ha) {
         _ = 189;
         break a;
        } else {
         Wa = Ya;
         Xa = 0;
        }
       }
       ja = c[e >> 2] | 0;
       va = c[ja + 12 >> 2] | 0;
       if ((va | 0) == (c[ja + 16 >> 2] | 0)) Za = ub[c[(c[ja >> 2] | 0) + 36 >> 2] & 63](ja) | 0; else Za = d[va >> 0] | 0;
       if ((Za & 255) << 24 >> 24 <= -1) {
        _ = 189;
        break a;
       }
       if (!(b[(c[h >> 2] | 0) + (Za << 24 >> 24 << 1) >> 1] & 2048)) {
        _ = 189;
        break a;
       }
       if ((c[o >> 2] | 0) == (c[r >> 2] | 0)) Ym(n, o, r);
       va = c[e >> 2] | 0;
       ja = c[va + 12 >> 2] | 0;
       if ((ja | 0) == (c[va + 16 >> 2] | 0)) _a = ub[c[(c[va >> 2] | 0) + 36 >> 2] & 63](va) | 0; else _a = d[ja >> 0] | 0;
       ja = c[o >> 2] | 0;
       c[o >> 2] = ja + 1;
       a[ja >> 0] = _a;
       ja = da;
       da = da + -1 | 0;
       c[E >> 2] = da;
       va = c[e >> 2] | 0;
       ka = va + 12 | 0;
       na = c[ka >> 2] | 0;
       if ((na | 0) == (c[va + 16 >> 2] | 0)) ub[c[(c[va >> 2] | 0) + 40 >> 2] & 63](va) | 0; else c[ka >> 2] = na + 1;
       if ((ja | 0) <= 1) break; else {
        ma = Wa;
        W = Xa;
       }
      }
     }
    }
    if ((c[o >> 2] | 0) == (c[n >> 2] | 0)) {
     _ = 200;
     break a;
    } else {
     $ = Ra;
     aa = T;
    }
    break;
   }
  default:
   {
    $ = S;
    aa = T;
   }
  } while (0);
  g : do if ((_ | 0) == 28) while (1) {
   _ = 0;
   U = c[e >> 2] | 0;
   do if (U) if ((c[U + 12 >> 2] | 0) == (c[U + 16 >> 2] | 0)) if ((ub[c[(c[U >> 2] | 0) + 36 >> 2] & 63](U) | 0) == -1) {
    c[e >> 2] = 0;
    $a = 0;
    break;
   } else {
    $a = c[e >> 2] | 0;
    break;
   } else $a = U; else $a = 0; while (0);
   U = ($a | 0) == 0;
   do if (ga) {
    if ((c[ga + 12 >> 2] | 0) != (c[ga + 16 >> 2] | 0)) if (U) {
     ab = fa;
     bb = ga;
     break;
    } else {
     $ = S;
     aa = T;
     break g;
    }
    if ((ub[c[(c[ga >> 2] | 0) + 36 >> 2] & 63](ga) | 0) != -1) if (U ^ (fa | 0) == 0) {
     ab = fa;
     bb = fa;
     break;
    } else {
     $ = S;
     aa = T;
     break g;
    } else {
     c[f >> 2] = 0;
     cb = 0;
     _ = 38;
     break;
    }
   } else {
    cb = fa;
    _ = 38;
   } while (0);
   if ((_ | 0) == 38) {
    _ = 0;
    if (U) {
     $ = S;
     aa = T;
     break g;
    } else {
     ab = cb;
     bb = 0;
    }
   }
   ha = c[e >> 2] | 0;
   W = c[ha + 12 >> 2] | 0;
   if ((W | 0) == (c[ha + 16 >> 2] | 0)) db = ub[c[(c[ha >> 2] | 0) + 36 >> 2] & 63](ha) | 0; else db = d[W >> 0] | 0;
   if ((db & 255) << 24 >> 24 <= -1) {
    $ = S;
    aa = T;
    break g;
   }
   if (!(b[(c[h >> 2] | 0) + (db << 24 >> 24 << 1) >> 1] & 8192)) {
    $ = S;
    aa = T;
    break g;
   }
   W = c[e >> 2] | 0;
   ha = W + 12 | 0;
   ma = c[ha >> 2] | 0;
   if ((ma | 0) == (c[W + 16 >> 2] | 0)) eb = ub[c[(c[W >> 2] | 0) + 40 >> 2] & 63](W) | 0; else {
    c[ha >> 2] = ma + 1;
    eb = d[ma >> 0] | 0;
   }
   ff(D, eb & 255);
   fa = ab;
   ga = bb;
   _ = 28;
  } while (0);
  s = s + 1 | 0;
  if (s >>> 0 >= 4) {
   Y = $;
   Z = aa;
   _ = 202;
   break;
  } else {
   S = $;
   T = aa;
  }
 }
 h : do if ((_ | 0) == 26) {
  c[k >> 2] = c[k >> 2] | 4;
  fb = 0;
 } else if ((_ | 0) == 82) {
  c[k >> 2] = c[k >> 2] | 4;
  fb = 0;
 } else if ((_ | 0) == 119) {
  c[k >> 2] = c[k >> 2] | 4;
  fb = 0;
 } else if ((_ | 0) == 167) {
  c[k >> 2] = c[k >> 2] | 4;
  fb = 0;
 } else if ((_ | 0) == 189) {
  c[k >> 2] = c[k >> 2] | 4;
  fb = 0;
 } else if ((_ | 0) == 200) {
  c[k >> 2] = c[k >> 2] | 4;
  fb = 0;
 } else if ((_ | 0) == 202) {
  i : do if (Z) {
   aa = Z + 1 | 0;
   T = Z + 8 | 0;
   $ = Z + 4 | 0;
   S = 1;
   j : while (1) {
    s = a[Z >> 0] | 0;
    if (!(s & 1)) gb = (s & 255) >>> 1; else gb = c[$ >> 2] | 0;
    if (S >>> 0 >= gb >>> 0) break i;
    s = c[e >> 2] | 0;
    do if (s) if ((c[s + 12 >> 2] | 0) == (c[s + 16 >> 2] | 0)) if ((ub[c[(c[s >> 2] | 0) + 36 >> 2] & 63](s) | 0) == -1) {
     c[e >> 2] = 0;
     hb = 0;
     break;
    } else {
     hb = c[e >> 2] | 0;
     break;
    } else hb = s; else hb = 0; while (0);
    s = (hb | 0) == 0;
    U = c[f >> 2] | 0;
    do if (U) {
     if ((c[U + 12 >> 2] | 0) == (c[U + 16 >> 2] | 0) ? (ub[c[(c[U >> 2] | 0) + 36 >> 2] & 63](U) | 0) == -1 : 0) {
      c[f >> 2] = 0;
      _ = 218;
      break;
     }
     if (!s) break j;
    } else _ = 218; while (0);
    if ((_ | 0) == 218 ? (_ = 0, s) : 0) break;
    U = c[e >> 2] | 0;
    bb = c[U + 12 >> 2] | 0;
    if ((bb | 0) == (c[U + 16 >> 2] | 0)) ib = ub[c[(c[U >> 2] | 0) + 36 >> 2] & 63](U) | 0; else ib = d[bb >> 0] | 0;
    if (!(a[Z >> 0] & 1)) jb = aa; else jb = c[T >> 2] | 0;
    if ((ib & 255) << 24 >> 24 != (a[jb + S >> 0] | 0)) break;
    bb = S + 1 | 0;
    U = c[e >> 2] | 0;
    ga = U + 12 | 0;
    ab = c[ga >> 2] | 0;
    if ((ab | 0) == (c[U + 16 >> 2] | 0)) {
     ub[c[(c[U >> 2] | 0) + 40 >> 2] & 63](U) | 0;
     S = bb;
     continue;
    } else {
     c[ga >> 2] = ab + 1;
     S = bb;
     continue;
    }
   }
   c[k >> 2] = c[k >> 2] | 4;
   fb = 0;
   break h;
  } while (0);
  S = c[t >> 2] | 0;
  if ((S | 0) != (Y | 0) ? (c[F >> 2] = 0, Zj(z, S, Y, F), (c[F >> 2] | 0) != 0) : 0) {
   c[k >> 2] = c[k >> 2] | 4;
   fb = 0;
  } else fb = 1;
 } while (0);
 $e(D);
 $e(C);
 $e(B);
 $e(A);
 $e(z);
 z = c[t >> 2] | 0;
 c[t >> 2] = 0;
 if (z) qb[c[p >> 2] & 127](z);
 i = q;
 return fb | 0;
}

function Fd(e, f, j) {
 e = e | 0;
 f = f | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, _ = 0, $ = 0, aa = 0, ba = 0, ca = 0, da = 0, ea = 0, fa = 0, ga = 0, ha = 0, ia = 0, ja = 0, ka = 0, la = 0, ma = 0, na = 0, oa = 0, pa = 0, qa = 0, ra = 0, sa = 0, ta = 0, ua = 0, va = 0, wa = 0, xa = 0, ya = 0, za = 0, Aa = 0, Ba = 0, Ca = 0, Da = 0, Ea = 0, Fa = 0, Ga = 0, Ha = 0, Ia = 0, Ja = 0, Ka = 0, La = 0, Ma = 0, Na = 0, Oa = 0, Pa = 0, Qa = 0, Ra = 0, Sa = 0, Ta = 0, Ua = 0, Va = 0, Wa = 0, Xa = 0, Ya = 0, Za = 0.0, _a = 0, $a = 0, ab = 0, bb = 0, cb = 0, db = 0, eb = 0, fb = 0, gb = 0, hb = 0, ib = 0, jb = 0;
 k = i;
 i = i + 304 | 0;
 l = k + 16 | 0;
 m = k + 8 | 0;
 n = k + 33 | 0;
 o = k;
 p = k + 32 | 0;
 if ((c[e + 76 >> 2] | 0) > -1) q = Id(e) | 0; else q = 0;
 r = a[f >> 0] | 0;
 a : do if (r << 24 >> 24) {
  s = e + 4 | 0;
  t = e + 100 | 0;
  u = e + 108 | 0;
  v = e + 8 | 0;
  w = n + 10 | 0;
  x = n + 33 | 0;
  y = m + 4 | 0;
  z = n + 46 | 0;
  A = n + 94 | 0;
  B = r;
  C = 0;
  E = f;
  F = 0;
  G = 0;
  H = 0;
  b : while (1) {
   c : do if (!(Kc(B & 255) | 0)) {
    I = (a[E >> 0] | 0) == 37;
    d : do if (I) {
     J = E + 1 | 0;
     K = a[J >> 0] | 0;
     e : do switch (K << 24 >> 24) {
     case 37:
      {
       break d;
       break;
      }
     case 42:
      {
       L = 0;
       M = E + 2 | 0;
       break;
      }
     default:
      {
       N = (K & 255) + -48 | 0;
       if (N >>> 0 < 10 ? (a[E + 2 >> 0] | 0) == 36 : 0) {
        c[l >> 2] = c[j >> 2];
        O = N;
        while (1) {
         N = (c[l >> 2] | 0) + (4 - 1) & ~(4 - 1);
         P = c[N >> 2] | 0;
         c[l >> 2] = N + 4;
         if (O >>> 0 > 1) O = O + -1 | 0; else {
          Q = P;
          break;
         }
        }
        L = Q;
        M = E + 3 | 0;
        break e;
       }
       O = (c[j >> 2] | 0) + (4 - 1) & ~(4 - 1);
       P = c[O >> 2] | 0;
       c[j >> 2] = O + 4;
       L = P;
       M = J;
      }
     } while (0);
     J = a[M >> 0] | 0;
     K = J & 255;
     if ((K + -48 | 0) >>> 0 < 10) {
      P = K;
      K = M;
      O = 0;
      while (1) {
       N = (O * 10 | 0) + -48 + P | 0;
       R = K + 1 | 0;
       S = a[R >> 0] | 0;
       P = S & 255;
       if ((P + -48 | 0) >>> 0 >= 10) {
        T = S;
        U = R;
        V = N;
        break;
       } else {
        K = R;
        O = N;
       }
      }
     } else {
      T = J;
      U = M;
      V = 0;
     }
     if (T << 24 >> 24 == 109) {
      O = U + 1 | 0;
      W = a[O >> 0] | 0;
      X = (L | 0) != 0 & 1;
      Y = O;
      Z = 0;
      _ = 0;
     } else {
      W = T;
      X = 0;
      Y = U;
      Z = G;
      _ = H;
     }
     O = Y + 1 | 0;
     switch (W & 255 | 0) {
     case 104:
      {
       K = (a[O >> 0] | 0) == 104;
       $ = K ? Y + 2 | 0 : O;
       aa = K ? -2 : -1;
       break;
      }
     case 108:
      {
       K = (a[O >> 0] | 0) == 108;
       $ = K ? Y + 2 | 0 : O;
       aa = K ? 3 : 1;
       break;
      }
     case 106:
      {
       $ = O;
       aa = 3;
       break;
      }
     case 116:
     case 122:
      {
       $ = O;
       aa = 1;
       break;
      }
     case 76:
      {
       $ = O;
       aa = 2;
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
       $ = Y;
       aa = 0;
       break;
      }
     default:
      {
       ba = X;
       ca = C;
       da = Z;
       ea = _;
       fa = 152;
       break b;
      }
     }
     O = d[$ >> 0] | 0;
     K = (O & 47 | 0) == 3;
     P = K ? O | 32 : O;
     O = K ? 1 : aa;
     switch (P | 0) {
     case 99:
      {
       ga = F;
       ha = (V | 0) < 1 ? 1 : V;
       break;
      }
     case 91:
      {
       ga = F;
       ha = V;
       break;
      }
     case 110:
      {
       if (!L) {
        ia = C;
        ja = $;
        ka = F;
        la = Z;
        ma = _;
        break c;
       }
       switch (O | 0) {
       case -2:
        {
         a[L >> 0] = F;
         ia = C;
         ja = $;
         ka = F;
         la = Z;
         ma = _;
         break c;
         break;
        }
       case -1:
        {
         b[L >> 1] = F;
         ia = C;
         ja = $;
         ka = F;
         la = Z;
         ma = _;
         break c;
         break;
        }
       case 0:
        {
         c[L >> 2] = F;
         ia = C;
         ja = $;
         ka = F;
         la = Z;
         ma = _;
         break c;
         break;
        }
       case 1:
        {
         c[L >> 2] = F;
         ia = C;
         ja = $;
         ka = F;
         la = Z;
         ma = _;
         break c;
         break;
        }
       case 3:
        {
         K = L;
         c[K >> 2] = F;
         c[K + 4 >> 2] = ((F | 0) < 0) << 31 >> 31;
         ia = C;
         ja = $;
         ka = F;
         la = Z;
         ma = _;
         break c;
         break;
        }
       default:
        {
         ia = C;
         ja = $;
         ka = F;
         la = Z;
         ma = _;
         break c;
        }
       }
       break;
      }
     default:
      {
       Tc(e, 0);
       do {
        K = c[s >> 2] | 0;
        if (K >>> 0 < (c[t >> 2] | 0) >>> 0) {
         c[s >> 2] = K + 1;
         na = d[K >> 0] | 0;
        } else na = Uc(e) | 0;
       } while ((Kc(na) | 0) != 0);
       J = c[s >> 2] | 0;
       if (!(c[t >> 2] | 0)) oa = J; else {
        K = J + -1 | 0;
        c[s >> 2] = K;
        oa = K;
       }
       ga = (c[u >> 2] | 0) + F + oa - (c[v >> 2] | 0) | 0;
       ha = V;
      }
     }
     Tc(e, ha);
     K = c[s >> 2] | 0;
     J = c[t >> 2] | 0;
     if (K >>> 0 < J >>> 0) {
      c[s >> 2] = K + 1;
      pa = J;
     } else {
      if ((Uc(e) | 0) < 0) {
       ba = X;
       ca = C;
       da = Z;
       ea = _;
       fa = 152;
       break b;
      }
      pa = c[t >> 2] | 0;
     }
     if (pa) c[s >> 2] = (c[s >> 2] | 0) + -1;
     f : do switch (P | 0) {
     case 91:
     case 99:
     case 115:
      {
       J = (P | 0) == 99;
       g : do if ((P & 239 | 0) == 99) {
        oo(n | 0, -1, 257) | 0;
        a[n >> 0] = 0;
        if ((P | 0) == 115) {
         a[x >> 0] = 0;
         a[w >> 0] = 0;
         a[w + 1 >> 0] = 0;
         a[w + 2 >> 0] = 0;
         a[w + 3 >> 0] = 0;
         a[w + 4 >> 0] = 0;
         qa = $;
        } else qa = $;
       } else {
        K = $ + 1 | 0;
        N = (a[K >> 0] | 0) == 94;
        R = N & 1;
        S = N ? K : $;
        ra = N ? $ + 2 | 0 : K;
        oo(n | 0, N & 1 | 0, 257) | 0;
        a[n >> 0] = 0;
        switch (a[ra >> 0] | 0) {
        case 45:
         {
          N = (R ^ 1) & 255;
          a[z >> 0] = N;
          sa = N;
          ta = S + 2 | 0;
          break;
         }
        case 93:
         {
          N = (R ^ 1) & 255;
          a[A >> 0] = N;
          sa = N;
          ta = S + 2 | 0;
          break;
         }
        default:
         {
          sa = (R ^ 1) & 255;
          ta = ra;
         }
        }
        ra = ta;
        while (1) {
         R = a[ra >> 0] | 0;
         h : do switch (R << 24 >> 24) {
         case 0:
          {
           ba = X;
           ca = C;
           da = Z;
           ea = _;
           fa = 152;
           break b;
           break;
          }
         case 93:
          {
           qa = ra;
           break g;
           break;
          }
         case 45:
          {
           S = ra + 1 | 0;
           N = a[S >> 0] | 0;
           switch (N << 24 >> 24) {
           case 93:
           case 0:
            {
             ua = 45;
             va = ra;
             break h;
             break;
            }
           default:
            {}
           }
           K = a[ra + -1 >> 0] | 0;
           if ((K & 255) < (N & 255)) {
            wa = K & 255;
            do {
             wa = wa + 1 | 0;
             a[n + wa >> 0] = sa;
             K = a[S >> 0] | 0;
            } while ((wa | 0) < (K & 255 | 0));
            ua = K;
            va = S;
           } else {
            ua = N;
            va = S;
           }
           break;
          }
         default:
          {
           ua = R;
           va = ra;
          }
         } while (0);
         a[n + ((ua & 255) + 1) >> 0] = sa;
         ra = va + 1 | 0;
        }
       } while (0);
       ra = J ? ha + 1 | 0 : 31;
       R = (O | 0) == 1;
       wa = (X | 0) != 0;
       i : do if (R) {
        if (wa) {
         K = oe(ra << 2) | 0;
         if (!K) {
          ba = X;
          ca = C;
          da = 0;
          ea = K;
          fa = 152;
          break b;
         } else xa = K;
        } else xa = L;
        c[m >> 2] = 0;
        c[y >> 2] = 0;
        K = 0;
        ya = ra;
        za = xa;
        j : while (1) {
         Aa = (za | 0) == 0;
         Ba = K;
         while (1) {
          k : while (1) {
           Ca = c[s >> 2] | 0;
           if (Ca >>> 0 < (c[t >> 2] | 0) >>> 0) {
            c[s >> 2] = Ca + 1;
            Da = d[Ca >> 0] | 0;
           } else Da = Uc(e) | 0;
           if (!(a[n + (Da + 1) >> 0] | 0)) {
            Ea = Ba;
            Fa = za;
            break j;
           }
           a[p >> 0] = Da;
           switch (ld(o, p, 1, m) | 0) {
           case -1:
            {
             ba = X;
             ca = C;
             da = 0;
             ea = za;
             fa = 152;
             break b;
             break;
            }
           case -2:
            break;
           default:
            break k;
           }
          }
          if (Aa) Ga = Ba; else {
           c[za + (Ba << 2) >> 2] = c[o >> 2];
           Ga = Ba + 1 | 0;
          }
          if (wa & (Ga | 0) == (ya | 0)) break; else Ba = Ga;
         }
         Ba = ya << 1 | 1;
         Aa = re(za, Ba << 2) | 0;
         if (!Aa) {
          ba = X;
          ca = C;
          da = 0;
          ea = za;
          fa = 152;
          break b;
         }
         S = ya;
         ya = Ba;
         za = Aa;
         K = S;
        }
        if (!(md(m) | 0)) {
         ba = X;
         ca = C;
         da = 0;
         ea = Fa;
         fa = 152;
         break b;
        } else {
         Ha = Ea;
         Ia = 0;
         Ja = Fa;
        }
       } else {
        if (wa) {
         K = oe(ra) | 0;
         if (!K) {
          ba = X;
          ca = C;
          da = 0;
          ea = 0;
          fa = 152;
          break b;
         } else {
          Ka = 0;
          La = ra;
          Ma = K;
         }
         while (1) {
          K = Ka;
          do {
           za = c[s >> 2] | 0;
           if (za >>> 0 < (c[t >> 2] | 0) >>> 0) {
            c[s >> 2] = za + 1;
            Na = d[za >> 0] | 0;
           } else Na = Uc(e) | 0;
           if (!(a[n + (Na + 1) >> 0] | 0)) {
            Ha = K;
            Ia = Ma;
            Ja = 0;
            break i;
           }
           a[Ma + K >> 0] = Na;
           K = K + 1 | 0;
          } while ((K | 0) != (La | 0));
          K = La << 1 | 1;
          za = re(Ma, K) | 0;
          if (!za) {
           ba = X;
           ca = C;
           da = Ma;
           ea = 0;
           fa = 152;
           break b;
          } else {
           ya = La;
           La = K;
           Ma = za;
           Ka = ya;
          }
         }
        }
        if (!L) {
         ya = pa;
         while (1) {
          za = c[s >> 2] | 0;
          if (za >>> 0 < ya >>> 0) {
           c[s >> 2] = za + 1;
           Oa = d[za >> 0] | 0;
          } else Oa = Uc(e) | 0;
          if (!(a[n + (Oa + 1) >> 0] | 0)) {
           Ha = 0;
           Ia = 0;
           Ja = 0;
           break i;
          }
          ya = c[t >> 2] | 0;
         }
        } else {
         ya = pa;
         za = 0;
         while (1) {
          K = c[s >> 2] | 0;
          if (K >>> 0 < ya >>> 0) {
           c[s >> 2] = K + 1;
           Pa = d[K >> 0] | 0;
          } else Pa = Uc(e) | 0;
          if (!(a[n + (Pa + 1) >> 0] | 0)) {
           Ha = za;
           Ia = L;
           Ja = 0;
           break i;
          }
          a[L + za >> 0] = Pa;
          ya = c[t >> 2] | 0;
          za = za + 1 | 0;
         }
        }
       } while (0);
       ra = c[s >> 2] | 0;
       if (!(c[t >> 2] | 0)) Qa = ra; else {
        za = ra + -1 | 0;
        c[s >> 2] = za;
        Qa = za;
       }
       za = Qa - (c[v >> 2] | 0) + (c[u >> 2] | 0) | 0;
       if (!za) {
        Ra = X;
        Sa = C;
        Ta = Ia;
        Ua = Ja;
        break b;
       }
       if (!((za | 0) == (ha | 0) | J ^ 1)) {
        Ra = X;
        Sa = C;
        Ta = Ia;
        Ua = Ja;
        break b;
       }
       do if (wa) if (R) {
        c[L >> 2] = Ja;
        break;
       } else {
        c[L >> 2] = Ia;
        break;
       } while (0);
       if (J) {
        Va = qa;
        Wa = Ia;
        Xa = Ja;
       } else {
        if (Ja) c[Ja + (Ha << 2) >> 2] = 0;
        if (!Ia) {
         Va = qa;
         Wa = 0;
         Xa = Ja;
         break f;
        }
        a[Ia + Ha >> 0] = 0;
        Va = qa;
        Wa = Ia;
        Xa = Ja;
       }
       break;
      }
     case 120:
     case 88:
     case 112:
      {
       Ya = 16;
       fa = 134;
       break;
      }
     case 111:
      {
       Ya = 8;
       fa = 134;
       break;
      }
     case 117:
     case 100:
      {
       Ya = 10;
       fa = 134;
       break;
      }
     case 105:
      {
       Ya = 0;
       fa = 134;
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
       Za = +Rc(e, O, 0);
       if ((c[u >> 2] | 0) == ((c[v >> 2] | 0) - (c[s >> 2] | 0) | 0)) {
        Ra = X;
        Sa = C;
        Ta = Z;
        Ua = _;
        break b;
       }
       if (!L) {
        Va = $;
        Wa = Z;
        Xa = _;
       } else switch (O | 0) {
       case 0:
        {
         g[L >> 2] = Za;
         Va = $;
         Wa = Z;
         Xa = _;
         break f;
         break;
        }
       case 1:
        {
         h[L >> 3] = Za;
         Va = $;
         Wa = Z;
         Xa = _;
         break f;
         break;
        }
       case 2:
        {
         h[L >> 3] = Za;
         Va = $;
         Wa = Z;
         Xa = _;
         break f;
         break;
        }
       default:
        {
         Va = $;
         Wa = Z;
         Xa = _;
         break f;
        }
       }
       break;
      }
     default:
      {
       Va = $;
       Wa = Z;
       Xa = _;
      }
     } while (0);
     l : do if ((fa | 0) == 134) {
      fa = 0;
      R = Sc(e, Ya, 0, -1, -1) | 0;
      if ((c[u >> 2] | 0) == ((c[v >> 2] | 0) - (c[s >> 2] | 0) | 0)) {
       Ra = X;
       Sa = C;
       Ta = Z;
       Ua = _;
       break b;
      }
      if ((L | 0) != 0 & (P | 0) == 112) {
       c[L >> 2] = R;
       Va = $;
       Wa = Z;
       Xa = _;
       break;
      }
      if (!L) {
       Va = $;
       Wa = Z;
       Xa = _;
      } else switch (O | 0) {
      case -2:
       {
        a[L >> 0] = R;
        Va = $;
        Wa = Z;
        Xa = _;
        break l;
        break;
       }
      case -1:
       {
        b[L >> 1] = R;
        Va = $;
        Wa = Z;
        Xa = _;
        break l;
        break;
       }
      case 0:
       {
        c[L >> 2] = R;
        Va = $;
        Wa = Z;
        Xa = _;
        break l;
        break;
       }
      case 1:
       {
        c[L >> 2] = R;
        Va = $;
        Wa = Z;
        Xa = _;
        break l;
        break;
       }
      case 3:
       {
        wa = L;
        c[wa >> 2] = R;
        c[wa + 4 >> 2] = D;
        Va = $;
        Wa = Z;
        Xa = _;
        break l;
        break;
       }
      default:
       {
        Va = $;
        Wa = Z;
        Xa = _;
        break l;
       }
      }
     } while (0);
     ia = ((L | 0) != 0 & 1) + C | 0;
     ja = Va;
     ka = (c[u >> 2] | 0) + ga + (c[s >> 2] | 0) - (c[v >> 2] | 0) | 0;
     la = Wa;
     ma = Xa;
     break c;
    } while (0);
    O = E + (I & 1) | 0;
    Tc(e, 0);
    P = c[s >> 2] | 0;
    if (P >>> 0 < (c[t >> 2] | 0) >>> 0) {
     c[s >> 2] = P + 1;
     _a = d[P >> 0] | 0;
    } else _a = Uc(e) | 0;
    if ((_a | 0) != (d[O >> 0] | 0)) {
     $a = _a;
     ab = C;
     bb = G;
     cb = H;
     fa = 21;
     break b;
    }
    ia = C;
    ja = O;
    ka = F + 1 | 0;
    la = G;
    ma = H;
   } else {
    O = E;
    while (1) {
     P = O + 1 | 0;
     if (!(Kc(d[P >> 0] | 0) | 0)) {
      db = O;
      break;
     } else O = P;
    }
    Tc(e, 0);
    do {
     O = c[s >> 2] | 0;
     if (O >>> 0 < (c[t >> 2] | 0) >>> 0) {
      c[s >> 2] = O + 1;
      eb = d[O >> 0] | 0;
     } else eb = Uc(e) | 0;
    } while ((Kc(eb) | 0) != 0);
    O = c[s >> 2] | 0;
    if (!(c[t >> 2] | 0)) fb = O; else {
     I = O + -1 | 0;
     c[s >> 2] = I;
     fb = I;
    }
    ia = C;
    ja = db;
    ka = (c[u >> 2] | 0) + F + fb - (c[v >> 2] | 0) | 0;
    la = G;
    ma = H;
   } while (0);
   E = ja + 1 | 0;
   B = a[E >> 0] | 0;
   if (!(B << 24 >> 24)) {
    gb = ia;
    break a;
   } else {
    C = ia;
    F = ka;
    G = la;
    H = ma;
   }
  }
  if ((fa | 0) == 21) {
   if (c[t >> 2] | 0) c[s >> 2] = (c[s >> 2] | 0) + -1;
   if ((ab | 0) != 0 | ($a | 0) > -1) {
    gb = ab;
    break;
   } else {
    hb = 0;
    ib = bb;
    jb = cb;
    fa = 153;
   }
  } else if ((fa | 0) == 152) if (!ca) {
   hb = ba;
   ib = da;
   jb = ea;
   fa = 153;
  } else {
   Ra = ba;
   Sa = ca;
   Ta = da;
   Ua = ea;
  }
  if ((fa | 0) == 153) {
   Ra = hb;
   Sa = -1;
   Ta = ib;
   Ua = jb;
  }
  if (!Ra) gb = Sa; else {
   pe(Ta);
   pe(Ua);
   gb = Sa;
  }
 } else gb = 0; while (0);
 if (q) Jd(e);
 i = k;
 return gb | 0;
}

function pe(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0;
 if (!a) return;
 b = a + -8 | 0;
 d = c[1540] | 0;
 if (b >>> 0 < d >>> 0) za();
 e = c[a + -4 >> 2] | 0;
 f = e & 3;
 if ((f | 0) == 1) za();
 g = e & -8;
 h = a + (g + -8) | 0;
 do if (!(e & 1)) {
  i = c[b >> 2] | 0;
  if (!f) return;
  j = -8 - i | 0;
  k = a + j | 0;
  l = i + g | 0;
  if (k >>> 0 < d >>> 0) za();
  if ((k | 0) == (c[1541] | 0)) {
   m = a + (g + -4) | 0;
   n = c[m >> 2] | 0;
   if ((n & 3 | 0) != 3) {
    o = k;
    p = l;
    break;
   }
   c[1538] = l;
   c[m >> 2] = n & -2;
   c[a + (j + 4) >> 2] = l | 1;
   c[h >> 2] = l;
   return;
  }
  n = i >>> 3;
  if (i >>> 0 < 256) {
   i = c[a + (j + 8) >> 2] | 0;
   m = c[a + (j + 12) >> 2] | 0;
   q = 6184 + (n << 1 << 2) | 0;
   if ((i | 0) != (q | 0)) {
    if (i >>> 0 < d >>> 0) za();
    if ((c[i + 12 >> 2] | 0) != (k | 0)) za();
   }
   if ((m | 0) == (i | 0)) {
    c[1536] = c[1536] & ~(1 << n);
    o = k;
    p = l;
    break;
   }
   if ((m | 0) != (q | 0)) {
    if (m >>> 0 < d >>> 0) za();
    q = m + 8 | 0;
    if ((c[q >> 2] | 0) == (k | 0)) r = q; else za();
   } else r = m + 8 | 0;
   c[i + 12 >> 2] = m;
   c[r >> 2] = i;
   o = k;
   p = l;
   break;
  }
  i = c[a + (j + 24) >> 2] | 0;
  m = c[a + (j + 12) >> 2] | 0;
  do if ((m | 0) == (k | 0)) {
   q = a + (j + 20) | 0;
   n = c[q >> 2] | 0;
   if (!n) {
    s = a + (j + 16) | 0;
    t = c[s >> 2] | 0;
    if (!t) {
     u = 0;
     break;
    } else {
     v = t;
     w = s;
    }
   } else {
    v = n;
    w = q;
   }
   while (1) {
    q = v + 20 | 0;
    n = c[q >> 2] | 0;
    if (n) {
     v = n;
     w = q;
     continue;
    }
    q = v + 16 | 0;
    n = c[q >> 2] | 0;
    if (!n) {
     x = v;
     y = w;
     break;
    } else {
     v = n;
     w = q;
    }
   }
   if (y >>> 0 < d >>> 0) za(); else {
    c[y >> 2] = 0;
    u = x;
    break;
   }
  } else {
   q = c[a + (j + 8) >> 2] | 0;
   if (q >>> 0 < d >>> 0) za();
   n = q + 12 | 0;
   if ((c[n >> 2] | 0) != (k | 0)) za();
   s = m + 8 | 0;
   if ((c[s >> 2] | 0) == (k | 0)) {
    c[n >> 2] = m;
    c[s >> 2] = q;
    u = m;
    break;
   } else za();
  } while (0);
  if (i) {
   m = c[a + (j + 28) >> 2] | 0;
   q = 6448 + (m << 2) | 0;
   if ((k | 0) == (c[q >> 2] | 0)) {
    c[q >> 2] = u;
    if (!u) {
     c[1537] = c[1537] & ~(1 << m);
     o = k;
     p = l;
     break;
    }
   } else {
    if (i >>> 0 < (c[1540] | 0) >>> 0) za();
    m = i + 16 | 0;
    if ((c[m >> 2] | 0) == (k | 0)) c[m >> 2] = u; else c[i + 20 >> 2] = u;
    if (!u) {
     o = k;
     p = l;
     break;
    }
   }
   m = c[1540] | 0;
   if (u >>> 0 < m >>> 0) za();
   c[u + 24 >> 2] = i;
   q = c[a + (j + 16) >> 2] | 0;
   do if (q) if (q >>> 0 < m >>> 0) za(); else {
    c[u + 16 >> 2] = q;
    c[q + 24 >> 2] = u;
    break;
   } while (0);
   q = c[a + (j + 20) >> 2] | 0;
   if (q) if (q >>> 0 < (c[1540] | 0) >>> 0) za(); else {
    c[u + 20 >> 2] = q;
    c[q + 24 >> 2] = u;
    o = k;
    p = l;
    break;
   } else {
    o = k;
    p = l;
   }
  } else {
   o = k;
   p = l;
  }
 } else {
  o = b;
  p = g;
 } while (0);
 if (o >>> 0 >= h >>> 0) za();
 b = a + (g + -4) | 0;
 u = c[b >> 2] | 0;
 if (!(u & 1)) za();
 if (!(u & 2)) {
  if ((h | 0) == (c[1542] | 0)) {
   d = (c[1539] | 0) + p | 0;
   c[1539] = d;
   c[1542] = o;
   c[o + 4 >> 2] = d | 1;
   if ((o | 0) != (c[1541] | 0)) return;
   c[1541] = 0;
   c[1538] = 0;
   return;
  }
  if ((h | 0) == (c[1541] | 0)) {
   d = (c[1538] | 0) + p | 0;
   c[1538] = d;
   c[1541] = o;
   c[o + 4 >> 2] = d | 1;
   c[o + d >> 2] = d;
   return;
  }
  d = (u & -8) + p | 0;
  x = u >>> 3;
  do if (u >>> 0 >= 256) {
   y = c[a + (g + 16) >> 2] | 0;
   w = c[a + (g | 4) >> 2] | 0;
   do if ((w | 0) == (h | 0)) {
    v = a + (g + 12) | 0;
    r = c[v >> 2] | 0;
    if (!r) {
     f = a + (g + 8) | 0;
     e = c[f >> 2] | 0;
     if (!e) {
      z = 0;
      break;
     } else {
      A = e;
      B = f;
     }
    } else {
     A = r;
     B = v;
    }
    while (1) {
     v = A + 20 | 0;
     r = c[v >> 2] | 0;
     if (r) {
      A = r;
      B = v;
      continue;
     }
     v = A + 16 | 0;
     r = c[v >> 2] | 0;
     if (!r) {
      C = A;
      D = B;
      break;
     } else {
      A = r;
      B = v;
     }
    }
    if (D >>> 0 < (c[1540] | 0) >>> 0) za(); else {
     c[D >> 2] = 0;
     z = C;
     break;
    }
   } else {
    v = c[a + g >> 2] | 0;
    if (v >>> 0 < (c[1540] | 0) >>> 0) za();
    r = v + 12 | 0;
    if ((c[r >> 2] | 0) != (h | 0)) za();
    f = w + 8 | 0;
    if ((c[f >> 2] | 0) == (h | 0)) {
     c[r >> 2] = w;
     c[f >> 2] = v;
     z = w;
     break;
    } else za();
   } while (0);
   if (y) {
    w = c[a + (g + 20) >> 2] | 0;
    l = 6448 + (w << 2) | 0;
    if ((h | 0) == (c[l >> 2] | 0)) {
     c[l >> 2] = z;
     if (!z) {
      c[1537] = c[1537] & ~(1 << w);
      break;
     }
    } else {
     if (y >>> 0 < (c[1540] | 0) >>> 0) za();
     w = y + 16 | 0;
     if ((c[w >> 2] | 0) == (h | 0)) c[w >> 2] = z; else c[y + 20 >> 2] = z;
     if (!z) break;
    }
    w = c[1540] | 0;
    if (z >>> 0 < w >>> 0) za();
    c[z + 24 >> 2] = y;
    l = c[a + (g + 8) >> 2] | 0;
    do if (l) if (l >>> 0 < w >>> 0) za(); else {
     c[z + 16 >> 2] = l;
     c[l + 24 >> 2] = z;
     break;
    } while (0);
    l = c[a + (g + 12) >> 2] | 0;
    if (l) if (l >>> 0 < (c[1540] | 0) >>> 0) za(); else {
     c[z + 20 >> 2] = l;
     c[l + 24 >> 2] = z;
     break;
    }
   }
  } else {
   l = c[a + g >> 2] | 0;
   w = c[a + (g | 4) >> 2] | 0;
   y = 6184 + (x << 1 << 2) | 0;
   if ((l | 0) != (y | 0)) {
    if (l >>> 0 < (c[1540] | 0) >>> 0) za();
    if ((c[l + 12 >> 2] | 0) != (h | 0)) za();
   }
   if ((w | 0) == (l | 0)) {
    c[1536] = c[1536] & ~(1 << x);
    break;
   }
   if ((w | 0) != (y | 0)) {
    if (w >>> 0 < (c[1540] | 0) >>> 0) za();
    y = w + 8 | 0;
    if ((c[y >> 2] | 0) == (h | 0)) E = y; else za();
   } else E = w + 8 | 0;
   c[l + 12 >> 2] = w;
   c[E >> 2] = l;
  } while (0);
  c[o + 4 >> 2] = d | 1;
  c[o + d >> 2] = d;
  if ((o | 0) == (c[1541] | 0)) {
   c[1538] = d;
   return;
  } else F = d;
 } else {
  c[b >> 2] = u & -2;
  c[o + 4 >> 2] = p | 1;
  c[o + p >> 2] = p;
  F = p;
 }
 p = F >>> 3;
 if (F >>> 0 < 256) {
  u = p << 1;
  b = 6184 + (u << 2) | 0;
  d = c[1536] | 0;
  E = 1 << p;
  if (d & E) {
   p = 6184 + (u + 2 << 2) | 0;
   h = c[p >> 2] | 0;
   if (h >>> 0 < (c[1540] | 0) >>> 0) za(); else {
    G = p;
    H = h;
   }
  } else {
   c[1536] = d | E;
   G = 6184 + (u + 2 << 2) | 0;
   H = b;
  }
  c[G >> 2] = o;
  c[H + 12 >> 2] = o;
  c[o + 8 >> 2] = H;
  c[o + 12 >> 2] = b;
  return;
 }
 b = F >>> 8;
 if (b) if (F >>> 0 > 16777215) I = 31; else {
  H = (b + 1048320 | 0) >>> 16 & 8;
  G = b << H;
  b = (G + 520192 | 0) >>> 16 & 4;
  u = G << b;
  G = (u + 245760 | 0) >>> 16 & 2;
  E = 14 - (b | H | G) + (u << G >>> 15) | 0;
  I = F >>> (E + 7 | 0) & 1 | E << 1;
 } else I = 0;
 E = 6448 + (I << 2) | 0;
 c[o + 28 >> 2] = I;
 c[o + 20 >> 2] = 0;
 c[o + 16 >> 2] = 0;
 G = c[1537] | 0;
 u = 1 << I;
 a : do if (G & u) {
  H = c[E >> 2] | 0;
  b : do if ((c[H + 4 >> 2] & -8 | 0) != (F | 0)) {
   b = F << ((I | 0) == 31 ? 0 : 25 - (I >>> 1) | 0);
   d = H;
   while (1) {
    h = d + 16 + (b >>> 31 << 2) | 0;
    p = c[h >> 2] | 0;
    if (!p) {
     J = h;
     K = d;
     break;
    }
    if ((c[p + 4 >> 2] & -8 | 0) == (F | 0)) {
     L = p;
     break b;
    } else {
     b = b << 1;
     d = p;
    }
   }
   if (J >>> 0 < (c[1540] | 0) >>> 0) za(); else {
    c[J >> 2] = o;
    c[o + 24 >> 2] = K;
    c[o + 12 >> 2] = o;
    c[o + 8 >> 2] = o;
    break a;
   }
  } else L = H; while (0);
  H = L + 8 | 0;
  d = c[H >> 2] | 0;
  b = c[1540] | 0;
  if (d >>> 0 >= b >>> 0 & L >>> 0 >= b >>> 0) {
   c[d + 12 >> 2] = o;
   c[H >> 2] = o;
   c[o + 8 >> 2] = d;
   c[o + 12 >> 2] = L;
   c[o + 24 >> 2] = 0;
   break;
  } else za();
 } else {
  c[1537] = G | u;
  c[E >> 2] = o;
  c[o + 24 >> 2] = E;
  c[o + 12 >> 2] = o;
  c[o + 8 >> 2] = o;
 } while (0);
 o = (c[1544] | 0) + -1 | 0;
 c[1544] = o;
 if (!o) M = 6600; else return;
 while (1) {
  o = c[M >> 2] | 0;
  if (!o) break; else M = o + 8 | 0;
 }
 c[1544] = -1;
 return;
}

function Sc(b, e, f, g, h) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, _ = 0, aa = 0, ba = 0, ca = 0, da = 0, ea = 0, fa = 0, ga = 0, ha = 0, ia = 0, ja = 0, ka = 0, la = 0, ma = 0, na = 0, oa = 0, pa = 0, qa = 0, ra = 0, sa = 0, ta = 0, ua = 0, va = 0;
 a : do if (e >>> 0 > 36) {
  c[(Qc() | 0) >> 2] = 22;
  i = 0;
  j = 0;
 } else {
  k = b + 4 | 0;
  l = b + 100 | 0;
  do {
   m = c[k >> 2] | 0;
   if (m >>> 0 < (c[l >> 2] | 0) >>> 0) {
    c[k >> 2] = m + 1;
    n = d[m >> 0] | 0;
   } else n = Uc(b) | 0;
  } while ((Kc(n) | 0) != 0);
  o = n;
  b : do switch (o | 0) {
  case 43:
  case 45:
   {
    m = ((o | 0) == 45) << 31 >> 31;
    p = c[k >> 2] | 0;
    if (p >>> 0 < (c[l >> 2] | 0) >>> 0) {
     c[k >> 2] = p + 1;
     q = d[p >> 0] | 0;
     r = m;
     break b;
    } else {
     q = Uc(b) | 0;
     r = m;
     break b;
    }
    break;
   }
  default:
   {
    q = o;
    r = 0;
   }
  } while (0);
  m = (e | 0) == 0;
  do if ((e & -17 | 0) == 0 & (q | 0) == 48) {
   p = c[k >> 2] | 0;
   if (p >>> 0 < (c[l >> 2] | 0) >>> 0) {
    c[k >> 2] = p + 1;
    s = d[p >> 0] | 0;
   } else s = Uc(b) | 0;
   if ((s | 32 | 0) != 120) if (m) {
    t = 8;
    u = s;
    v = 46;
    break;
   } else {
    w = e;
    x = s;
    v = 32;
    break;
   }
   p = c[k >> 2] | 0;
   if (p >>> 0 < (c[l >> 2] | 0) >>> 0) {
    c[k >> 2] = p + 1;
    y = d[p >> 0] | 0;
   } else y = Uc(b) | 0;
   if ((d[16565 + (y + 1) >> 0] | 0) > 15) {
    p = (c[l >> 2] | 0) == 0;
    if (!p) c[k >> 2] = (c[k >> 2] | 0) + -1;
    if (!f) {
     Tc(b, 0);
     i = 0;
     j = 0;
     break a;
    }
    if (p) {
     i = 0;
     j = 0;
     break a;
    }
    c[k >> 2] = (c[k >> 2] | 0) + -1;
    i = 0;
    j = 0;
    break a;
   } else {
    t = 16;
    u = y;
    v = 46;
   }
  } else {
   p = m ? 10 : e;
   if ((d[16565 + (q + 1) >> 0] | 0) >>> 0 < p >>> 0) {
    w = p;
    x = q;
    v = 32;
   } else {
    if (c[l >> 2] | 0) c[k >> 2] = (c[k >> 2] | 0) + -1;
    Tc(b, 0);
    c[(Qc() | 0) >> 2] = 22;
    i = 0;
    j = 0;
    break a;
   }
  } while (0);
  if ((v | 0) == 32) if ((w | 0) == 10) {
   m = x + -48 | 0;
   if (m >>> 0 < 10) {
    p = m;
    m = 0;
    while (1) {
     z = (m * 10 | 0) + p | 0;
     A = c[k >> 2] | 0;
     if (A >>> 0 < (c[l >> 2] | 0) >>> 0) {
      c[k >> 2] = A + 1;
      B = d[A >> 0] | 0;
     } else B = Uc(b) | 0;
     p = B + -48 | 0;
     if (!(p >>> 0 < 10 & z >>> 0 < 429496729)) {
      C = z;
      E = B;
      break;
     } else m = z;
    }
    F = C;
    G = 0;
    H = E;
   } else {
    F = 0;
    G = 0;
    H = x;
   }
   m = H + -48 | 0;
   if (m >>> 0 < 10) {
    p = F;
    z = G;
    A = m;
    m = H;
    while (1) {
     I = zo(p | 0, z | 0, 10, 0) | 0;
     J = D;
     K = ((A | 0) < 0) << 31 >> 31;
     L = ~K;
     if (J >>> 0 > L >>> 0 | (J | 0) == (L | 0) & I >>> 0 > ~A >>> 0) {
      M = A;
      N = p;
      O = z;
      P = m;
      break;
     }
     L = po(I | 0, J | 0, A | 0, K | 0) | 0;
     K = D;
     J = c[k >> 2] | 0;
     if (J >>> 0 < (c[l >> 2] | 0) >>> 0) {
      c[k >> 2] = J + 1;
      Q = d[J >> 0] | 0;
     } else Q = Uc(b) | 0;
     J = Q + -48 | 0;
     if (J >>> 0 < 10 & (K >>> 0 < 429496729 | (K | 0) == 429496729 & L >>> 0 < 2576980378)) {
      p = L;
      z = K;
      A = J;
      m = Q;
     } else {
      M = J;
      N = L;
      O = K;
      P = Q;
      break;
     }
    }
    if (M >>> 0 > 9) {
     R = O;
     S = N;
     T = r;
    } else {
     U = 10;
     V = N;
     W = O;
     X = P;
     v = 72;
    }
   } else {
    R = G;
    S = F;
    T = r;
   }
  } else {
   t = w;
   u = x;
   v = 46;
  }
  c : do if ((v | 0) == 46) {
   if (!(t + -1 & t)) {
    m = a[16822 + ((t * 23 | 0) >>> 5 & 7) >> 0] | 0;
    A = a[16565 + (u + 1) >> 0] | 0;
    z = A & 255;
    if (z >>> 0 < t >>> 0) {
     p = z;
     z = 0;
     while (1) {
      K = p | z << m;
      L = c[k >> 2] | 0;
      if (L >>> 0 < (c[l >> 2] | 0) >>> 0) {
       c[k >> 2] = L + 1;
       Y = d[L >> 0] | 0;
      } else Y = Uc(b) | 0;
      L = a[16565 + (Y + 1) >> 0] | 0;
      p = L & 255;
      if (!(K >>> 0 < 134217728 & p >>> 0 < t >>> 0)) {
       Z = K;
       _ = L;
       aa = Y;
       break;
      } else z = K;
     }
     ba = _;
     ca = 0;
     da = Z;
     ea = aa;
    } else {
     ba = A;
     ca = 0;
     da = 0;
     ea = u;
    }
    z = qo(-1, -1, m | 0) | 0;
    p = D;
    if ((ba & 255) >>> 0 >= t >>> 0 | (ca >>> 0 > p >>> 0 | (ca | 0) == (p | 0) & da >>> 0 > z >>> 0)) {
     U = t;
     V = da;
     W = ca;
     X = ea;
     v = 72;
     break;
    } else {
     fa = da;
     ga = ca;
     ha = ba;
    }
    while (1) {
     K = so(fa | 0, ga | 0, m | 0) | 0;
     L = D;
     J = ha & 255 | K;
     K = c[k >> 2] | 0;
     if (K >>> 0 < (c[l >> 2] | 0) >>> 0) {
      c[k >> 2] = K + 1;
      ia = d[K >> 0] | 0;
     } else ia = Uc(b) | 0;
     ha = a[16565 + (ia + 1) >> 0] | 0;
     if ((ha & 255) >>> 0 >= t >>> 0 | (L >>> 0 > p >>> 0 | (L | 0) == (p | 0) & J >>> 0 > z >>> 0)) {
      U = t;
      V = J;
      W = L;
      X = ia;
      v = 72;
      break c;
     } else {
      fa = J;
      ga = L;
     }
    }
   }
   z = a[16565 + (u + 1) >> 0] | 0;
   p = z & 255;
   if (p >>> 0 < t >>> 0) {
    m = p;
    p = 0;
    while (1) {
     A = m + ($(p, t) | 0) | 0;
     L = c[k >> 2] | 0;
     if (L >>> 0 < (c[l >> 2] | 0) >>> 0) {
      c[k >> 2] = L + 1;
      ja = d[L >> 0] | 0;
     } else ja = Uc(b) | 0;
     L = a[16565 + (ja + 1) >> 0] | 0;
     m = L & 255;
     if (!(A >>> 0 < 119304647 & m >>> 0 < t >>> 0)) {
      ka = A;
      la = L;
      ma = ja;
      break;
     } else p = A;
    }
    na = la;
    oa = ka;
    pa = 0;
    qa = ma;
   } else {
    na = z;
    oa = 0;
    pa = 0;
    qa = u;
   }
   if ((na & 255) >>> 0 < t >>> 0) {
    p = Ao(-1, -1, t | 0, 0) | 0;
    m = D;
    A = pa;
    L = oa;
    J = na;
    K = qa;
    while (1) {
     if (A >>> 0 > m >>> 0 | (A | 0) == (m | 0) & L >>> 0 > p >>> 0) {
      U = t;
      V = L;
      W = A;
      X = K;
      v = 72;
      break c;
     }
     I = zo(L | 0, A | 0, t | 0, 0) | 0;
     ra = D;
     sa = J & 255;
     if (ra >>> 0 > 4294967295 | (ra | 0) == -1 & I >>> 0 > ~sa >>> 0) {
      U = t;
      V = L;
      W = A;
      X = K;
      v = 72;
      break c;
     }
     ta = po(sa | 0, 0, I | 0, ra | 0) | 0;
     ra = D;
     I = c[k >> 2] | 0;
     if (I >>> 0 < (c[l >> 2] | 0) >>> 0) {
      c[k >> 2] = I + 1;
      ua = d[I >> 0] | 0;
     } else ua = Uc(b) | 0;
     J = a[16565 + (ua + 1) >> 0] | 0;
     if ((J & 255) >>> 0 >= t >>> 0) {
      U = t;
      V = ta;
      W = ra;
      X = ua;
      v = 72;
      break;
     } else {
      A = ra;
      L = ta;
      K = ua;
     }
    }
   } else {
    U = t;
    V = oa;
    W = pa;
    X = qa;
    v = 72;
   }
  } while (0);
  if ((v | 0) == 72) if ((d[16565 + (X + 1) >> 0] | 0) >>> 0 < U >>> 0) {
   do {
    K = c[k >> 2] | 0;
    if (K >>> 0 < (c[l >> 2] | 0) >>> 0) {
     c[k >> 2] = K + 1;
     va = d[K >> 0] | 0;
    } else va = Uc(b) | 0;
   } while ((d[16565 + (va + 1) >> 0] | 0) >>> 0 < U >>> 0);
   c[(Qc() | 0) >> 2] = 34;
   R = h;
   S = g;
   T = (g & 1 | 0) == 0 & 0 == 0 ? r : 0;
  } else {
   R = W;
   S = V;
   T = r;
  }
  if (c[l >> 2] | 0) c[k >> 2] = (c[k >> 2] | 0) + -1;
  if (!(R >>> 0 < h >>> 0 | (R | 0) == (h | 0) & S >>> 0 < g >>> 0)) {
   if (!((g & 1 | 0) != 0 | 0 != 0 | (T | 0) != 0)) {
    c[(Qc() | 0) >> 2] = 34;
    K = po(g | 0, h | 0, -1, -1) | 0;
    i = D;
    j = K;
    break;
   }
   if (R >>> 0 > h >>> 0 | (R | 0) == (h | 0) & S >>> 0 > g >>> 0) {
    c[(Qc() | 0) >> 2] = 34;
    i = h;
    j = g;
    break;
   }
  }
  K = ((T | 0) < 0) << 31 >> 31;
  L = no(S ^ T | 0, R ^ K | 0, T | 0, K | 0) | 0;
  i = D;
  j = L;
 } while (0);
 D = i;
 return j | 0;
}

function te(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0;
 d = a + b | 0;
 e = c[a + 4 >> 2] | 0;
 do if (!(e & 1)) {
  f = c[a >> 2] | 0;
  if (!(e & 3)) return;
  g = a + (0 - f) | 0;
  h = f + b | 0;
  i = c[1540] | 0;
  if (g >>> 0 < i >>> 0) za();
  if ((g | 0) == (c[1541] | 0)) {
   j = a + (b + 4) | 0;
   k = c[j >> 2] | 0;
   if ((k & 3 | 0) != 3) {
    l = g;
    m = h;
    break;
   }
   c[1538] = h;
   c[j >> 2] = k & -2;
   c[a + (4 - f) >> 2] = h | 1;
   c[d >> 2] = h;
   return;
  }
  k = f >>> 3;
  if (f >>> 0 < 256) {
   j = c[a + (8 - f) >> 2] | 0;
   n = c[a + (12 - f) >> 2] | 0;
   o = 6184 + (k << 1 << 2) | 0;
   if ((j | 0) != (o | 0)) {
    if (j >>> 0 < i >>> 0) za();
    if ((c[j + 12 >> 2] | 0) != (g | 0)) za();
   }
   if ((n | 0) == (j | 0)) {
    c[1536] = c[1536] & ~(1 << k);
    l = g;
    m = h;
    break;
   }
   if ((n | 0) != (o | 0)) {
    if (n >>> 0 < i >>> 0) za();
    o = n + 8 | 0;
    if ((c[o >> 2] | 0) == (g | 0)) p = o; else za();
   } else p = n + 8 | 0;
   c[j + 12 >> 2] = n;
   c[p >> 2] = j;
   l = g;
   m = h;
   break;
  }
  j = c[a + (24 - f) >> 2] | 0;
  n = c[a + (12 - f) >> 2] | 0;
  do if ((n | 0) == (g | 0)) {
   o = 16 - f | 0;
   k = a + (o + 4) | 0;
   q = c[k >> 2] | 0;
   if (!q) {
    r = a + o | 0;
    o = c[r >> 2] | 0;
    if (!o) {
     s = 0;
     break;
    } else {
     t = o;
     u = r;
    }
   } else {
    t = q;
    u = k;
   }
   while (1) {
    k = t + 20 | 0;
    q = c[k >> 2] | 0;
    if (q) {
     t = q;
     u = k;
     continue;
    }
    k = t + 16 | 0;
    q = c[k >> 2] | 0;
    if (!q) {
     v = t;
     w = u;
     break;
    } else {
     t = q;
     u = k;
    }
   }
   if (w >>> 0 < i >>> 0) za(); else {
    c[w >> 2] = 0;
    s = v;
    break;
   }
  } else {
   k = c[a + (8 - f) >> 2] | 0;
   if (k >>> 0 < i >>> 0) za();
   q = k + 12 | 0;
   if ((c[q >> 2] | 0) != (g | 0)) za();
   r = n + 8 | 0;
   if ((c[r >> 2] | 0) == (g | 0)) {
    c[q >> 2] = n;
    c[r >> 2] = k;
    s = n;
    break;
   } else za();
  } while (0);
  if (j) {
   n = c[a + (28 - f) >> 2] | 0;
   i = 6448 + (n << 2) | 0;
   if ((g | 0) == (c[i >> 2] | 0)) {
    c[i >> 2] = s;
    if (!s) {
     c[1537] = c[1537] & ~(1 << n);
     l = g;
     m = h;
     break;
    }
   } else {
    if (j >>> 0 < (c[1540] | 0) >>> 0) za();
    n = j + 16 | 0;
    if ((c[n >> 2] | 0) == (g | 0)) c[n >> 2] = s; else c[j + 20 >> 2] = s;
    if (!s) {
     l = g;
     m = h;
     break;
    }
   }
   n = c[1540] | 0;
   if (s >>> 0 < n >>> 0) za();
   c[s + 24 >> 2] = j;
   i = 16 - f | 0;
   k = c[a + i >> 2] | 0;
   do if (k) if (k >>> 0 < n >>> 0) za(); else {
    c[s + 16 >> 2] = k;
    c[k + 24 >> 2] = s;
    break;
   } while (0);
   k = c[a + (i + 4) >> 2] | 0;
   if (k) if (k >>> 0 < (c[1540] | 0) >>> 0) za(); else {
    c[s + 20 >> 2] = k;
    c[k + 24 >> 2] = s;
    l = g;
    m = h;
    break;
   } else {
    l = g;
    m = h;
   }
  } else {
   l = g;
   m = h;
  }
 } else {
  l = a;
  m = b;
 } while (0);
 s = c[1540] | 0;
 if (d >>> 0 < s >>> 0) za();
 v = a + (b + 4) | 0;
 w = c[v >> 2] | 0;
 if (!(w & 2)) {
  if ((d | 0) == (c[1542] | 0)) {
   u = (c[1539] | 0) + m | 0;
   c[1539] = u;
   c[1542] = l;
   c[l + 4 >> 2] = u | 1;
   if ((l | 0) != (c[1541] | 0)) return;
   c[1541] = 0;
   c[1538] = 0;
   return;
  }
  if ((d | 0) == (c[1541] | 0)) {
   u = (c[1538] | 0) + m | 0;
   c[1538] = u;
   c[1541] = l;
   c[l + 4 >> 2] = u | 1;
   c[l + u >> 2] = u;
   return;
  }
  u = (w & -8) + m | 0;
  t = w >>> 3;
  do if (w >>> 0 >= 256) {
   p = c[a + (b + 24) >> 2] | 0;
   e = c[a + (b + 12) >> 2] | 0;
   do if ((e | 0) == (d | 0)) {
    k = a + (b + 20) | 0;
    n = c[k >> 2] | 0;
    if (!n) {
     f = a + (b + 16) | 0;
     j = c[f >> 2] | 0;
     if (!j) {
      x = 0;
      break;
     } else {
      y = j;
      z = f;
     }
    } else {
     y = n;
     z = k;
    }
    while (1) {
     k = y + 20 | 0;
     n = c[k >> 2] | 0;
     if (n) {
      y = n;
      z = k;
      continue;
     }
     k = y + 16 | 0;
     n = c[k >> 2] | 0;
     if (!n) {
      A = y;
      B = z;
      break;
     } else {
      y = n;
      z = k;
     }
    }
    if (B >>> 0 < s >>> 0) za(); else {
     c[B >> 2] = 0;
     x = A;
     break;
    }
   } else {
    k = c[a + (b + 8) >> 2] | 0;
    if (k >>> 0 < s >>> 0) za();
    n = k + 12 | 0;
    if ((c[n >> 2] | 0) != (d | 0)) za();
    f = e + 8 | 0;
    if ((c[f >> 2] | 0) == (d | 0)) {
     c[n >> 2] = e;
     c[f >> 2] = k;
     x = e;
     break;
    } else za();
   } while (0);
   if (p) {
    e = c[a + (b + 28) >> 2] | 0;
    h = 6448 + (e << 2) | 0;
    if ((d | 0) == (c[h >> 2] | 0)) {
     c[h >> 2] = x;
     if (!x) {
      c[1537] = c[1537] & ~(1 << e);
      break;
     }
    } else {
     if (p >>> 0 < (c[1540] | 0) >>> 0) za();
     e = p + 16 | 0;
     if ((c[e >> 2] | 0) == (d | 0)) c[e >> 2] = x; else c[p + 20 >> 2] = x;
     if (!x) break;
    }
    e = c[1540] | 0;
    if (x >>> 0 < e >>> 0) za();
    c[x + 24 >> 2] = p;
    h = c[a + (b + 16) >> 2] | 0;
    do if (h) if (h >>> 0 < e >>> 0) za(); else {
     c[x + 16 >> 2] = h;
     c[h + 24 >> 2] = x;
     break;
    } while (0);
    h = c[a + (b + 20) >> 2] | 0;
    if (h) if (h >>> 0 < (c[1540] | 0) >>> 0) za(); else {
     c[x + 20 >> 2] = h;
     c[h + 24 >> 2] = x;
     break;
    }
   }
  } else {
   h = c[a + (b + 8) >> 2] | 0;
   e = c[a + (b + 12) >> 2] | 0;
   p = 6184 + (t << 1 << 2) | 0;
   if ((h | 0) != (p | 0)) {
    if (h >>> 0 < s >>> 0) za();
    if ((c[h + 12 >> 2] | 0) != (d | 0)) za();
   }
   if ((e | 0) == (h | 0)) {
    c[1536] = c[1536] & ~(1 << t);
    break;
   }
   if ((e | 0) != (p | 0)) {
    if (e >>> 0 < s >>> 0) za();
    p = e + 8 | 0;
    if ((c[p >> 2] | 0) == (d | 0)) C = p; else za();
   } else C = e + 8 | 0;
   c[h + 12 >> 2] = e;
   c[C >> 2] = h;
  } while (0);
  c[l + 4 >> 2] = u | 1;
  c[l + u >> 2] = u;
  if ((l | 0) == (c[1541] | 0)) {
   c[1538] = u;
   return;
  } else D = u;
 } else {
  c[v >> 2] = w & -2;
  c[l + 4 >> 2] = m | 1;
  c[l + m >> 2] = m;
  D = m;
 }
 m = D >>> 3;
 if (D >>> 0 < 256) {
  w = m << 1;
  v = 6184 + (w << 2) | 0;
  u = c[1536] | 0;
  C = 1 << m;
  if (u & C) {
   m = 6184 + (w + 2 << 2) | 0;
   d = c[m >> 2] | 0;
   if (d >>> 0 < (c[1540] | 0) >>> 0) za(); else {
    E = m;
    F = d;
   }
  } else {
   c[1536] = u | C;
   E = 6184 + (w + 2 << 2) | 0;
   F = v;
  }
  c[E >> 2] = l;
  c[F + 12 >> 2] = l;
  c[l + 8 >> 2] = F;
  c[l + 12 >> 2] = v;
  return;
 }
 v = D >>> 8;
 if (v) if (D >>> 0 > 16777215) G = 31; else {
  F = (v + 1048320 | 0) >>> 16 & 8;
  E = v << F;
  v = (E + 520192 | 0) >>> 16 & 4;
  w = E << v;
  E = (w + 245760 | 0) >>> 16 & 2;
  C = 14 - (v | F | E) + (w << E >>> 15) | 0;
  G = D >>> (C + 7 | 0) & 1 | C << 1;
 } else G = 0;
 C = 6448 + (G << 2) | 0;
 c[l + 28 >> 2] = G;
 c[l + 20 >> 2] = 0;
 c[l + 16 >> 2] = 0;
 E = c[1537] | 0;
 w = 1 << G;
 if (!(E & w)) {
  c[1537] = E | w;
  c[C >> 2] = l;
  c[l + 24 >> 2] = C;
  c[l + 12 >> 2] = l;
  c[l + 8 >> 2] = l;
  return;
 }
 w = c[C >> 2] | 0;
 a : do if ((c[w + 4 >> 2] & -8 | 0) == (D | 0)) H = w; else {
  C = D << ((G | 0) == 31 ? 0 : 25 - (G >>> 1) | 0);
  E = w;
  while (1) {
   F = E + 16 + (C >>> 31 << 2) | 0;
   v = c[F >> 2] | 0;
   if (!v) {
    I = F;
    J = E;
    break;
   }
   if ((c[v + 4 >> 2] & -8 | 0) == (D | 0)) {
    H = v;
    break a;
   } else {
    C = C << 1;
    E = v;
   }
  }
  if (I >>> 0 < (c[1540] | 0) >>> 0) za();
  c[I >> 2] = l;
  c[l + 24 >> 2] = J;
  c[l + 12 >> 2] = l;
  c[l + 8 >> 2] = l;
  return;
 } while (0);
 J = H + 8 | 0;
 I = c[J >> 2] | 0;
 D = c[1540] | 0;
 if (!(I >>> 0 >= D >>> 0 & H >>> 0 >= D >>> 0)) za();
 c[I + 12 >> 2] = l;
 c[J >> 2] = l;
 c[l + 8 >> 2] = I;
 c[l + 12 >> 2] = H;
 c[l + 24 >> 2] = 0;
 return;
}

function ti(a, b, d, e, f, g, h, j) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, _ = 0, $ = 0, aa = 0, ba = 0, ca = 0;
 k = i;
 i = i + 32 | 0;
 l = k + 16 | 0;
 m = k + 12 | 0;
 n = k + 8 | 0;
 o = k + 4 | 0;
 p = k;
 q = xf(e) | 0;
 c[n >> 2] = q;
 r = Mk(n, 9328) | 0;
 ko(q) | 0;
 c[f >> 2] = 0;
 q = c[b >> 2] | 0;
 a : do if ((h | 0) != (j | 0)) {
  n = h;
  s = q;
  b : while (1) {
   t = s;
   if (s) {
    u = c[s + 12 >> 2] | 0;
    if ((u | 0) == (c[s + 16 >> 2] | 0)) v = ub[c[(c[s >> 2] | 0) + 36 >> 2] & 63](s) | 0; else v = c[u >> 2] | 0;
    if ((v | 0) == -1) {
     c[b >> 2] = 0;
     w = 0;
     x = 1;
     y = 0;
    } else {
     w = s;
     x = 0;
     y = t;
    }
   } else {
    w = 0;
    x = 1;
    y = t;
   }
   t = c[d >> 2] | 0;
   u = t;
   do if (t) {
    z = c[t + 12 >> 2] | 0;
    if ((z | 0) == (c[t + 16 >> 2] | 0)) A = ub[c[(c[t >> 2] | 0) + 36 >> 2] & 63](t) | 0; else A = c[z >> 2] | 0;
    if ((A | 0) != -1) if (x) {
     B = t;
     C = u;
     break;
    } else {
     D = w;
     E = 16;
     break b;
    } else {
     c[d >> 2] = 0;
     F = 0;
     E = 14;
     break;
    }
   } else {
    F = u;
    E = 14;
   } while (0);
   if ((E | 0) == 14) {
    E = 0;
    if (x) {
     D = w;
     E = 16;
     break;
    } else {
     B = 0;
     C = F;
    }
   }
   c : do if ((nb[c[(c[r >> 2] | 0) + 52 >> 2] & 31](r, c[n >> 2] | 0, 0) | 0) << 24 >> 24 == 37) {
    u = n + 4 | 0;
    if ((u | 0) == (j | 0)) {
     G = w;
     E = 19;
     break b;
    }
    t = nb[c[(c[r >> 2] | 0) + 52 >> 2] & 31](r, c[u >> 2] | 0, 0) | 0;
    switch (t << 24 >> 24) {
    case 48:
    case 69:
     {
      z = n + 8 | 0;
      if ((z | 0) == (j | 0)) {
       H = w;
       E = 22;
       break b;
      }
      I = u;
      J = nb[c[(c[r >> 2] | 0) + 52 >> 2] & 31](r, c[z >> 2] | 0, 0) | 0;
      K = t;
      break;
     }
    default:
     {
      I = n;
      J = t;
      K = 0;
     }
    }
    t = c[(c[a >> 2] | 0) + 36 >> 2] | 0;
    c[o >> 2] = y;
    c[p >> 2] = C;
    c[m >> 2] = c[o >> 2];
    c[l >> 2] = c[p >> 2];
    c[b >> 2] = xb[t & 15](a, m, l, e, f, g, J, K) | 0;
    L = I + 8 | 0;
   } else {
    if (nb[c[(c[r >> 2] | 0) + 12 >> 2] & 31](r, 8192, c[n >> 2] | 0) | 0) M = n; else {
     t = w + 12 | 0;
     z = c[t >> 2] | 0;
     u = w + 16 | 0;
     if ((z | 0) == (c[u >> 2] | 0)) N = ub[c[(c[w >> 2] | 0) + 36 >> 2] & 63](w) | 0; else N = c[z >> 2] | 0;
     z = Ab[c[(c[r >> 2] | 0) + 28 >> 2] & 15](r, N) | 0;
     if ((z | 0) != (Ab[c[(c[r >> 2] | 0) + 28 >> 2] & 15](r, c[n >> 2] | 0) | 0)) {
      E = 59;
      break b;
     }
     z = c[t >> 2] | 0;
     if ((z | 0) == (c[u >> 2] | 0)) ub[c[(c[w >> 2] | 0) + 40 >> 2] & 63](w) | 0; else c[t >> 2] = z + 4;
     L = n + 4 | 0;
     break;
    }
    while (1) {
     z = M + 4 | 0;
     if ((z | 0) == (j | 0)) {
      O = j;
      break;
     }
     if (nb[c[(c[r >> 2] | 0) + 12 >> 2] & 31](r, 8192, c[z >> 2] | 0) | 0) M = z; else {
      O = z;
      break;
     }
    }
    z = w;
    t = B;
    u = B;
    while (1) {
     if (z) {
      P = c[z + 12 >> 2] | 0;
      if ((P | 0) == (c[z + 16 >> 2] | 0)) Q = ub[c[(c[z >> 2] | 0) + 36 >> 2] & 63](z) | 0; else Q = c[P >> 2] | 0;
      if ((Q | 0) == -1) {
       c[b >> 2] = 0;
       R = 1;
       S = 0;
      } else {
       R = 0;
       S = z;
      }
     } else {
      R = 1;
      S = 0;
     }
     do if (u) {
      P = c[u + 12 >> 2] | 0;
      if ((P | 0) == (c[u + 16 >> 2] | 0)) T = ub[c[(c[u >> 2] | 0) + 36 >> 2] & 63](u) | 0; else T = c[P >> 2] | 0;
      if ((T | 0) != -1) if (R ^ (t | 0) == 0) {
       U = t;
       V = t;
       break;
      } else {
       L = O;
       break c;
      } else {
       c[d >> 2] = 0;
       W = 0;
       E = 42;
       break;
      }
     } else {
      W = t;
      E = 42;
     } while (0);
     if ((E | 0) == 42) {
      E = 0;
      if (R) {
       L = O;
       break c;
      } else {
       U = W;
       V = 0;
      }
     }
     P = S + 12 | 0;
     X = c[P >> 2] | 0;
     Y = S + 16 | 0;
     if ((X | 0) == (c[Y >> 2] | 0)) Z = ub[c[(c[S >> 2] | 0) + 36 >> 2] & 63](S) | 0; else Z = c[X >> 2] | 0;
     if (!(nb[c[(c[r >> 2] | 0) + 12 >> 2] & 31](r, 8192, Z) | 0)) {
      L = O;
      break c;
     }
     X = c[P >> 2] | 0;
     if ((X | 0) == (c[Y >> 2] | 0)) {
      ub[c[(c[S >> 2] | 0) + 40 >> 2] & 63](S) | 0;
      z = S;
      t = U;
      u = V;
      continue;
     } else {
      c[P >> 2] = X + 4;
      z = S;
      t = U;
      u = V;
      continue;
     }
    }
   } while (0);
   u = c[b >> 2] | 0;
   if ((L | 0) != (j | 0) & (c[f >> 2] | 0) == 0) {
    n = L;
    s = u;
   } else {
    _ = u;
    break a;
   }
  }
  if ((E | 0) == 16) {
   c[f >> 2] = 4;
   _ = D;
   break;
  } else if ((E | 0) == 19) {
   c[f >> 2] = 4;
   _ = G;
   break;
  } else if ((E | 0) == 22) {
   c[f >> 2] = 4;
   _ = H;
   break;
  } else if ((E | 0) == 59) {
   c[f >> 2] = 4;
   _ = c[b >> 2] | 0;
   break;
  }
 } else _ = q; while (0);
 if (_) {
  q = c[_ + 12 >> 2] | 0;
  if ((q | 0) == (c[_ + 16 >> 2] | 0)) $ = ub[c[(c[_ >> 2] | 0) + 36 >> 2] & 63](_) | 0; else $ = c[q >> 2] | 0;
  if (($ | 0) == -1) {
   c[b >> 2] = 0;
   aa = 0;
   ba = 1;
  } else {
   aa = _;
   ba = 0;
  }
 } else {
  aa = 0;
  ba = 1;
 }
 _ = c[d >> 2] | 0;
 do if (_) {
  b = c[_ + 12 >> 2] | 0;
  if ((b | 0) == (c[_ + 16 >> 2] | 0)) ca = ub[c[(c[_ >> 2] | 0) + 36 >> 2] & 63](_) | 0; else ca = c[b >> 2] | 0;
  if ((ca | 0) != -1) if (ba) break; else {
   E = 74;
   break;
  } else {
   c[d >> 2] = 0;
   E = 72;
   break;
  }
 } else E = 72; while (0);
 if ((E | 0) == 72 ? ba : 0) E = 74;
 if ((E | 0) == 74) c[f >> 2] = c[f >> 2] | 2;
 i = k;
 return aa | 0;
}

function Wh(e, f, g, h, j, k, l, m) {
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 k = k | 0;
 l = l | 0;
 m = m | 0;
 var n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, _ = 0;
 n = i;
 i = i + 32 | 0;
 o = n + 16 | 0;
 p = n + 12 | 0;
 q = n + 8 | 0;
 r = n + 4 | 0;
 s = n;
 t = xf(h) | 0;
 c[q >> 2] = t;
 u = Mk(q, 9336) | 0;
 ko(t) | 0;
 c[j >> 2] = 0;
 t = u + 8 | 0;
 q = c[f >> 2] | 0;
 a : do if ((l | 0) != (m | 0)) {
  v = l;
  w = q;
  b : while (1) {
   x = w;
   if (w) if ((c[w + 12 >> 2] | 0) == (c[w + 16 >> 2] | 0) ? (ub[c[(c[w >> 2] | 0) + 36 >> 2] & 63](w) | 0) == -1 : 0) {
    c[f >> 2] = 0;
    y = 0;
    z = 0;
   } else {
    y = w;
    z = x;
   } else {
    y = 0;
    z = x;
   }
   x = (y | 0) == 0;
   A = c[g >> 2] | 0;
   B = A;
   do if (A) {
    if ((c[A + 12 >> 2] | 0) == (c[A + 16 >> 2] | 0) ? (ub[c[(c[A >> 2] | 0) + 36 >> 2] & 63](A) | 0) == -1 : 0) {
     c[g >> 2] = 0;
     C = 0;
     D = 11;
     break;
    }
    if (x) {
     E = A;
     F = B;
    } else {
     G = y;
     D = 12;
     break b;
    }
   } else {
    C = B;
    D = 11;
   } while (0);
   if ((D | 0) == 11) {
    D = 0;
    if (x) {
     G = y;
     D = 12;
     break;
    } else {
     E = 0;
     F = C;
    }
   }
   c : do if ((nb[c[(c[u >> 2] | 0) + 36 >> 2] & 31](u, a[v >> 0] | 0, 0) | 0) << 24 >> 24 == 37) {
    B = v + 1 | 0;
    if ((B | 0) == (m | 0)) {
     H = y;
     D = 15;
     break b;
    }
    A = nb[c[(c[u >> 2] | 0) + 36 >> 2] & 31](u, a[B >> 0] | 0, 0) | 0;
    switch (A << 24 >> 24) {
    case 48:
    case 69:
     {
      I = v + 2 | 0;
      if ((I | 0) == (m | 0)) {
       J = y;
       D = 18;
       break b;
      }
      K = B;
      L = nb[c[(c[u >> 2] | 0) + 36 >> 2] & 31](u, a[I >> 0] | 0, 0) | 0;
      M = A;
      break;
     }
    default:
     {
      K = v;
      L = A;
      M = 0;
     }
    }
    A = c[(c[e >> 2] | 0) + 36 >> 2] | 0;
    c[r >> 2] = z;
    c[s >> 2] = F;
    c[p >> 2] = c[r >> 2];
    c[o >> 2] = c[s >> 2];
    c[f >> 2] = xb[A & 15](e, p, o, h, j, k, L, M) | 0;
    N = K + 2 | 0;
   } else {
    A = a[v >> 0] | 0;
    if (A << 24 >> 24 > -1 ? (I = c[t >> 2] | 0, (b[I + (A << 24 >> 24 << 1) >> 1] & 8192) != 0) : 0) {
     A = v;
     while (1) {
      B = A + 1 | 0;
      if ((B | 0) == (m | 0)) {
       O = m;
       break;
      }
      P = a[B >> 0] | 0;
      if (P << 24 >> 24 <= -1) {
       O = B;
       break;
      }
      if (!(b[I + (P << 24 >> 24 << 1) >> 1] & 8192)) {
       O = B;
       break;
      } else A = B;
     }
     A = y;
     I = E;
     B = E;
     while (1) {
      if (A) if ((c[A + 12 >> 2] | 0) == (c[A + 16 >> 2] | 0) ? (ub[c[(c[A >> 2] | 0) + 36 >> 2] & 63](A) | 0) == -1 : 0) {
       c[f >> 2] = 0;
       Q = 0;
      } else Q = A; else Q = 0;
      P = (Q | 0) == 0;
      do if (B) {
       if ((c[B + 12 >> 2] | 0) != (c[B + 16 >> 2] | 0)) if (P) {
        R = I;
        S = B;
        break;
       } else {
        N = O;
        break c;
       }
       if ((ub[c[(c[B >> 2] | 0) + 36 >> 2] & 63](B) | 0) != -1) if (P ^ (I | 0) == 0) {
        R = I;
        S = I;
        break;
       } else {
        N = O;
        break c;
       } else {
        c[g >> 2] = 0;
        T = 0;
        D = 37;
        break;
       }
      } else {
       T = I;
       D = 37;
      } while (0);
      if ((D | 0) == 37) {
       D = 0;
       if (P) {
        N = O;
        break c;
       } else {
        R = T;
        S = 0;
       }
      }
      U = Q + 12 | 0;
      V = c[U >> 2] | 0;
      W = Q + 16 | 0;
      if ((V | 0) == (c[W >> 2] | 0)) X = ub[c[(c[Q >> 2] | 0) + 36 >> 2] & 63](Q) | 0; else X = d[V >> 0] | 0;
      if ((X & 255) << 24 >> 24 <= -1) {
       N = O;
       break c;
      }
      if (!(b[(c[t >> 2] | 0) + (X << 24 >> 24 << 1) >> 1] & 8192)) {
       N = O;
       break c;
      }
      V = c[U >> 2] | 0;
      if ((V | 0) == (c[W >> 2] | 0)) {
       ub[c[(c[Q >> 2] | 0) + 40 >> 2] & 63](Q) | 0;
       A = Q;
       I = R;
       B = S;
       continue;
      } else {
       c[U >> 2] = V + 1;
       A = Q;
       I = R;
       B = S;
       continue;
      }
     }
    }
    B = y + 12 | 0;
    I = c[B >> 2] | 0;
    A = y + 16 | 0;
    if ((I | 0) == (c[A >> 2] | 0)) Y = ub[c[(c[y >> 2] | 0) + 36 >> 2] & 63](y) | 0; else Y = d[I >> 0] | 0;
    I = Ab[c[(c[u >> 2] | 0) + 12 >> 2] & 15](u, Y & 255) | 0;
    if (I << 24 >> 24 != (Ab[c[(c[u >> 2] | 0) + 12 >> 2] & 15](u, a[v >> 0] | 0) | 0) << 24 >> 24) {
     D = 55;
     break b;
    }
    I = c[B >> 2] | 0;
    if ((I | 0) == (c[A >> 2] | 0)) ub[c[(c[y >> 2] | 0) + 40 >> 2] & 63](y) | 0; else c[B >> 2] = I + 1;
    N = v + 1 | 0;
   } while (0);
   x = c[f >> 2] | 0;
   if ((N | 0) != (m | 0) & (c[j >> 2] | 0) == 0) {
    v = N;
    w = x;
   } else {
    Z = x;
    break a;
   }
  }
  if ((D | 0) == 12) {
   c[j >> 2] = 4;
   Z = G;
   break;
  } else if ((D | 0) == 15) {
   c[j >> 2] = 4;
   Z = H;
   break;
  } else if ((D | 0) == 18) {
   c[j >> 2] = 4;
   Z = J;
   break;
  } else if ((D | 0) == 55) {
   c[j >> 2] = 4;
   Z = c[f >> 2] | 0;
   break;
  }
 } else Z = q; while (0);
 if (Z) if ((c[Z + 12 >> 2] | 0) == (c[Z + 16 >> 2] | 0) ? (ub[c[(c[Z >> 2] | 0) + 36 >> 2] & 63](Z) | 0) == -1 : 0) {
  c[f >> 2] = 0;
  _ = 0;
 } else _ = Z; else _ = 0;
 Z = (_ | 0) == 0;
 f = c[g >> 2] | 0;
 do if (f) {
  if ((c[f + 12 >> 2] | 0) == (c[f + 16 >> 2] | 0) ? (ub[c[(c[f >> 2] | 0) + 36 >> 2] & 63](f) | 0) == -1 : 0) {
   c[g >> 2] = 0;
   D = 65;
   break;
  }
  if (!Z) D = 66;
 } else D = 65; while (0);
 if ((D | 0) == 65 ? Z : 0) D = 66;
 if ((D | 0) == 66) c[j >> 2] = c[j >> 2] | 2;
 i = n;
 return _ | 0;
}

function ik(d, e, f, g, h, i, j, k, l, m, n, o, p, q, r) {
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
 var s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, _ = 0, $ = 0, aa = 0, ba = 0, ca = 0;
 c[f >> 2] = d;
 s = q + 4 | 0;
 t = q + 8 | 0;
 u = q + 1 | 0;
 v = p + 4 | 0;
 w = (g & 512 | 0) == 0;
 x = p + 8 | 0;
 y = p + 1 | 0;
 z = j + 8 | 0;
 A = (r | 0) > 0;
 B = o + 4 | 0;
 C = o + 8 | 0;
 D = o + 1 | 0;
 E = r + 1 | 0;
 F = -2 - r - ((r | 0) < 0 ? ~r : -1) | 0;
 G = (r | 0) > 0;
 H = h;
 h = 0;
 while (1) {
  switch (a[l + h >> 0] | 0) {
  case 0:
   {
    c[e >> 2] = c[f >> 2];
    I = H;
    break;
   }
  case 1:
   {
    c[e >> 2] = c[f >> 2];
    J = Ab[c[(c[j >> 2] | 0) + 28 >> 2] & 15](j, 32) | 0;
    K = c[f >> 2] | 0;
    c[f >> 2] = K + 1;
    a[K >> 0] = J;
    I = H;
    break;
   }
  case 3:
   {
    J = a[q >> 0] | 0;
    K = (J & 1) == 0;
    if (!((K ? (J & 255) >>> 1 : c[s >> 2] | 0) | 0)) I = H; else {
     J = a[(K ? u : c[t >> 2] | 0) >> 0] | 0;
     K = c[f >> 2] | 0;
     c[f >> 2] = K + 1;
     a[K >> 0] = J;
     I = H;
    }
    break;
   }
  case 2:
   {
    J = a[p >> 0] | 0;
    K = (J & 1) == 0;
    L = K ? (J & 255) >>> 1 : c[v >> 2] | 0;
    if (w | (L | 0) == 0) I = H; else {
     J = K ? y : c[x >> 2] | 0;
     K = J + L | 0;
     M = c[f >> 2] | 0;
     if (!L) N = M; else {
      L = M;
      M = J;
      while (1) {
       a[L >> 0] = a[M >> 0] | 0;
       M = M + 1 | 0;
       J = L + 1 | 0;
       if ((M | 0) == (K | 0)) {
        N = J;
        break;
       } else L = J;
      }
     }
     c[f >> 2] = N;
     I = H;
    }
    break;
   }
  case 4:
   {
    L = c[f >> 2] | 0;
    K = k ? H + 1 | 0 : H;
    M = K;
    J = c[z >> 2] | 0;
    a : do if (K >>> 0 < i >>> 0) {
     O = K;
     while (1) {
      P = a[O >> 0] | 0;
      if (P << 24 >> 24 <= -1) {
       Q = O;
       break a;
      }
      if (!(b[J + (P << 24 >> 24 << 1) >> 1] & 2048)) {
       Q = O;
       break a;
      }
      P = O + 1 | 0;
      if (P >>> 0 < i >>> 0) O = P; else {
       Q = P;
       break;
      }
     }
    } else Q = K; while (0);
    J = Q;
    if (A) {
     O = -2 - J - ~(J >>> 0 > M >>> 0 ? M : J) | 0;
     J = F >>> 0 > O >>> 0 ? F : O;
     if (Q >>> 0 > K >>> 0 & G) {
      O = Q;
      P = r;
      while (1) {
       O = O + -1 | 0;
       R = a[O >> 0] | 0;
       S = c[f >> 2] | 0;
       c[f >> 2] = S + 1;
       a[S >> 0] = R;
       R = (P | 0) > 1;
       if (!(O >>> 0 > K >>> 0 & R)) {
        T = R;
        break;
       } else P = P + -1 | 0;
      }
     } else T = G;
     P = E + J | 0;
     O = Q + (J + 1) | 0;
     if (T) U = Ab[c[(c[j >> 2] | 0) + 28 >> 2] & 15](j, 48) | 0; else U = 0;
     M = c[f >> 2] | 0;
     c[f >> 2] = M + 1;
     if ((P | 0) > 0) {
      R = M;
      S = P;
      while (1) {
       a[R >> 0] = U;
       P = c[f >> 2] | 0;
       c[f >> 2] = P + 1;
       if ((S | 0) > 1) {
        R = P;
        S = S + -1 | 0;
       } else {
        V = P;
        break;
       }
      }
     } else V = M;
     a[V >> 0] = m;
     W = O;
    } else W = Q;
    if ((W | 0) != (K | 0)) {
     S = a[o >> 0] | 0;
     R = (S & 1) == 0;
     if (!((R ? (S & 255) >>> 1 : c[B >> 2] | 0) | 0)) X = -1; else X = a[(R ? D : c[C >> 2] | 0) >> 0] | 0;
     if ((W | 0) != (K | 0)) {
      R = W;
      S = X;
      J = 0;
      P = 0;
      while (1) {
       if ((P | 0) == (S | 0)) {
        Y = c[f >> 2] | 0;
        c[f >> 2] = Y + 1;
        a[Y >> 0] = n;
        Y = J + 1 | 0;
        Z = a[o >> 0] | 0;
        _ = (Z & 1) == 0;
        if (Y >>> 0 < (_ ? (Z & 255) >>> 1 : c[B >> 2] | 0) >>> 0) {
         Z = a[(_ ? D : c[C >> 2] | 0) + Y >> 0] | 0;
         $ = Z << 24 >> 24 == 127 ? -1 : Z << 24 >> 24;
         aa = Y;
         ba = 0;
        } else {
         $ = P;
         aa = Y;
         ba = 0;
        }
       } else {
        $ = S;
        aa = J;
        ba = P;
       }
       R = R + -1 | 0;
       Y = a[R >> 0] | 0;
       Z = c[f >> 2] | 0;
       c[f >> 2] = Z + 1;
       a[Z >> 0] = Y;
       if ((R | 0) == (K | 0)) break; else {
        S = $;
        J = aa;
        P = ba + 1 | 0;
       }
      }
     }
    } else {
     P = Ab[c[(c[j >> 2] | 0) + 28 >> 2] & 15](j, 48) | 0;
     J = c[f >> 2] | 0;
     c[f >> 2] = J + 1;
     a[J >> 0] = P;
    }
    P = c[f >> 2] | 0;
    if ((L | 0) != (P | 0) ? (J = P + -1 | 0, L >>> 0 < J >>> 0) : 0) {
     P = L;
     S = J;
     do {
      J = a[P >> 0] | 0;
      a[P >> 0] = a[S >> 0] | 0;
      a[S >> 0] = J;
      P = P + 1 | 0;
      S = S + -1 | 0;
     } while (P >>> 0 < S >>> 0);
     I = K;
    } else I = K;
    break;
   }
  default:
   I = H;
  }
  h = h + 1 | 0;
  if ((h | 0) == 4) break; else H = I;
 }
 I = a[q >> 0] | 0;
 q = (I & 1) == 0;
 H = q ? (I & 255) >>> 1 : c[s >> 2] | 0;
 if (H >>> 0 > 1) {
  s = q ? u : c[t >> 2] | 0;
  t = s + H | 0;
  u = c[f >> 2] | 0;
  if ((H | 0) == 1) ca = u; else {
   H = u;
   u = s + 1 | 0;
   while (1) {
    a[H >> 0] = a[u >> 0] | 0;
    s = H + 1 | 0;
    u = u + 1 | 0;
    if ((u | 0) == (t | 0)) {
     ca = s;
     break;
    } else H = s;
   }
  }
  c[f >> 2] = ca;
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

function ok(b, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
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
 var r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, _ = 0, $ = 0, aa = 0, ba = 0, ca = 0, da = 0, ea = 0;
 c[e >> 2] = b;
 r = p + 4 | 0;
 s = p + 8 | 0;
 t = o + 4 | 0;
 u = (f & 512 | 0) == 0;
 v = o + 8 | 0;
 w = (q | 0) > 0;
 x = n + 4 | 0;
 y = n + 8 | 0;
 z = n + 1 | 0;
 A = (q | 0) > 0;
 B = g;
 g = 0;
 while (1) {
  switch (a[k + g >> 0] | 0) {
  case 0:
   {
    c[d >> 2] = c[e >> 2];
    C = B;
    break;
   }
  case 1:
   {
    c[d >> 2] = c[e >> 2];
    D = Ab[c[(c[i >> 2] | 0) + 44 >> 2] & 15](i, 32) | 0;
    E = c[e >> 2] | 0;
    c[e >> 2] = E + 4;
    c[E >> 2] = D;
    C = B;
    break;
   }
  case 3:
   {
    D = a[p >> 0] | 0;
    E = (D & 1) == 0;
    if (!((E ? (D & 255) >>> 1 : c[r >> 2] | 0) | 0)) C = B; else {
     D = c[(E ? r : c[s >> 2] | 0) >> 2] | 0;
     E = c[e >> 2] | 0;
     c[e >> 2] = E + 4;
     c[E >> 2] = D;
     C = B;
    }
    break;
   }
  case 2:
   {
    D = a[o >> 0] | 0;
    E = (D & 1) == 0;
    F = E ? (D & 255) >>> 1 : c[t >> 2] | 0;
    if (u | (F | 0) == 0) C = B; else {
     D = E ? t : c[v >> 2] | 0;
     E = D + (F << 2) | 0;
     G = c[e >> 2] | 0;
     if (F) {
      H = G;
      I = D;
      while (1) {
       c[H >> 2] = c[I >> 2];
       I = I + 4 | 0;
       if ((I | 0) == (E | 0)) break; else H = H + 4 | 0;
      }
     }
     c[e >> 2] = G + (F << 2);
     C = B;
    }
    break;
   }
  case 4:
   {
    H = c[e >> 2] | 0;
    E = j ? B + 4 | 0 : B;
    a : do if (E >>> 0 < h >>> 0) {
     I = E;
     while (1) {
      if (!(nb[c[(c[i >> 2] | 0) + 12 >> 2] & 31](i, 2048, c[I >> 2] | 0) | 0)) {
       J = I;
       break a;
      }
      D = I + 4 | 0;
      if (D >>> 0 < h >>> 0) I = D; else {
       J = D;
       break;
      }
     }
    } else J = E; while (0);
    if (w) {
     if (J >>> 0 > E >>> 0 & A) {
      F = c[e >> 2] | 0;
      G = J;
      I = q;
      while (1) {
       D = G + -4 | 0;
       K = F + 4 | 0;
       c[F >> 2] = c[D >> 2];
       L = I + -1 | 0;
       M = (I | 0) > 1;
       if (D >>> 0 > E >>> 0 & M) {
        F = K;
        G = D;
        I = L;
       } else {
        N = D;
        O = L;
        P = M;
        Q = K;
        break;
       }
      }
      c[e >> 2] = Q;
      R = P;
      S = N;
      T = O;
     } else {
      R = A;
      S = J;
      T = q;
     }
     if (R) U = Ab[c[(c[i >> 2] | 0) + 44 >> 2] & 15](i, 48) | 0; else U = 0;
     I = c[e >> 2] | 0;
     G = T + ((T | 0) < 0 ? ~T : -1) | 0;
     if ((T | 0) > 0) {
      F = I;
      K = T;
      while (1) {
       c[F >> 2] = U;
       if ((K | 0) > 1) {
        F = F + 4 | 0;
        K = K + -1 | 0;
       } else break;
      }
     }
     c[e >> 2] = I + (G + 2 << 2);
     c[I + (G + 1 << 2) >> 2] = l;
     V = S;
    } else V = J;
    if ((V | 0) == (E | 0)) {
     K = Ab[c[(c[i >> 2] | 0) + 44 >> 2] & 15](i, 48) | 0;
     F = c[e >> 2] | 0;
     M = F + 4 | 0;
     c[e >> 2] = M;
     c[F >> 2] = K;
     W = M;
    } else {
     M = a[n >> 0] | 0;
     K = (M & 1) == 0;
     F = c[x >> 2] | 0;
     if (!((K ? (M & 255) >>> 1 : F) | 0)) X = -1; else X = a[(K ? z : c[y >> 2] | 0) >> 0] | 0;
     if ((V | 0) != (E | 0)) {
      K = V;
      M = X;
      L = 0;
      D = 0;
      while (1) {
       Y = c[e >> 2] | 0;
       if ((D | 0) == (M | 0)) {
        Z = Y + 4 | 0;
        c[e >> 2] = Z;
        c[Y >> 2] = m;
        _ = L + 1 | 0;
        $ = a[n >> 0] | 0;
        aa = ($ & 1) == 0;
        if (_ >>> 0 < (aa ? ($ & 255) >>> 1 : F) >>> 0) {
         $ = a[(aa ? z : c[y >> 2] | 0) + _ >> 0] | 0;
         ba = Z;
         ca = $ << 24 >> 24 == 127 ? -1 : $ << 24 >> 24;
         da = _;
         ea = 0;
        } else {
         ba = Z;
         ca = D;
         da = _;
         ea = 0;
        }
       } else {
        ba = Y;
        ca = M;
        da = L;
        ea = D;
       }
       K = K + -4 | 0;
       Y = c[K >> 2] | 0;
       c[e >> 2] = ba + 4;
       c[ba >> 2] = Y;
       if ((K | 0) == (E | 0)) break; else {
        M = ca;
        L = da;
        D = ea + 1 | 0;
       }
      }
     }
     W = c[e >> 2] | 0;
    }
    if ((H | 0) != (W | 0) ? (D = W + -4 | 0, H >>> 0 < D >>> 0) : 0) {
     L = H;
     M = D;
     do {
      D = c[L >> 2] | 0;
      c[L >> 2] = c[M >> 2];
      c[M >> 2] = D;
      L = L + 4 | 0;
      M = M + -4 | 0;
     } while (L >>> 0 < M >>> 0);
     C = E;
    } else C = E;
    break;
   }
  default:
   C = B;
  }
  g = g + 1 | 0;
  if ((g | 0) == 4) break; else B = C;
 }
 C = a[p >> 0] | 0;
 p = (C & 1) == 0;
 B = p ? (C & 255) >>> 1 : c[r >> 2] | 0;
 if (B >>> 0 > 1) {
  C = p ? r : c[s >> 2] | 0;
  s = C + 4 | 0;
  r = C + (B << 2) | 0;
  C = c[e >> 2] | 0;
  p = r - s | 0;
  if ((B | 0) != 1) {
   B = C;
   g = s;
   while (1) {
    c[B >> 2] = c[g >> 2];
    g = g + 4 | 0;
    if ((g | 0) == (r | 0)) break; else B = B + 4 | 0;
   }
  }
  c[e >> 2] = C + (p >>> 2 << 2);
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

function od(b, e, f, g) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, _ = 0, $ = 0, aa = 0, ba = 0, ca = 0, da = 0, ea = 0, fa = 0, ga = 0, ha = 0, ia = 0, ja = 0, ka = 0, la = 0, ma = 0;
 h = c[e >> 2] | 0;
 if ((g | 0) != 0 ? (i = c[g >> 2] | 0, (i | 0) != 0) : 0) if (!b) {
  j = f;
  k = i;
  l = h;
  m = 16;
 } else {
  c[g >> 2] = 0;
  n = b;
  o = f;
  p = i;
  q = h;
  m = 37;
 } else if (!b) {
  r = f;
  s = h;
  m = 7;
 } else {
  t = b;
  u = f;
  v = h;
  m = 6;
 }
 a : while (1) if ((m | 0) == 6) {
  m = 0;
  if (!u) {
   w = v;
   m = 26;
   break;
  } else {
   x = t;
   y = u;
   z = v;
  }
  while (1) {
   h = a[z >> 0] | 0;
   do if (((h & 255) + -1 | 0) >>> 0 < 127 ? y >>> 0 > 4 & (z & 3 | 0) == 0 : 0) {
    i = x;
    g = y;
    A = z;
    while (1) {
     B = c[A >> 2] | 0;
     if ((B + -16843009 | B) & -2139062144) {
      C = i;
      D = g;
      E = B;
      F = A;
      m = 32;
      break;
     }
     c[i >> 2] = B & 255;
     c[i + 4 >> 2] = d[A + 1 >> 0];
     c[i + 8 >> 2] = d[A + 2 >> 0];
     B = A + 4 | 0;
     G = i + 16 | 0;
     c[i + 12 >> 2] = d[A + 3 >> 0];
     H = g + -4 | 0;
     if (H >>> 0 > 4) {
      i = G;
      g = H;
      A = B;
     } else {
      I = B;
      J = G;
      K = H;
      m = 31;
      break;
     }
    }
    if ((m | 0) == 31) {
     m = 0;
     L = J;
     M = K;
     N = a[I >> 0] | 0;
     O = I;
     break;
    } else if ((m | 0) == 32) {
     m = 0;
     L = C;
     M = D;
     N = E & 255;
     O = F;
     break;
    }
   } else {
    L = x;
    M = y;
    N = h;
    O = z;
   } while (0);
   h = N & 255;
   if ((h + -1 | 0) >>> 0 >= 127) {
    P = L;
    Q = M;
    R = h;
    S = O;
    break;
   }
   A = O + 1 | 0;
   c[L >> 2] = h;
   y = M + -1 | 0;
   if (!y) {
    w = A;
    m = 26;
    break a;
   } else {
    x = L + 4 | 0;
    z = A;
   }
  }
  A = R + -194 | 0;
  if (A >>> 0 > 50) {
   T = P;
   U = Q;
   V = S;
   m = 48;
   break;
  }
  n = P;
  o = Q;
  p = c[2348 + (A << 2) >> 2] | 0;
  q = S + 1 | 0;
  m = 37;
  continue;
 } else if ((m | 0) == 7) {
  m = 0;
  A = a[s >> 0] | 0;
  if (((A & 255) + -1 | 0) >>> 0 < 127 ? (s & 3 | 0) == 0 : 0) {
   h = c[s >> 2] | 0;
   if (!((h + -16843009 | h) & -2139062144)) {
    g = r;
    i = s;
    while (1) {
     H = i + 4 | 0;
     G = g + -4 | 0;
     B = c[H >> 2] | 0;
     if (!((B + -16843009 | B) & -2139062144)) {
      g = G;
      i = H;
     } else {
      W = G;
      X = B;
      Y = H;
      break;
     }
    }
   } else {
    W = r;
    X = h;
    Y = s;
   }
   Z = W;
   _ = X & 255;
   $ = Y;
  } else {
   Z = r;
   _ = A;
   $ = s;
  }
  i = _ & 255;
  if ((i + -1 | 0) >>> 0 < 127) {
   r = Z + -1 | 0;
   s = $ + 1 | 0;
   m = 7;
   continue;
  } else {
   aa = Z;
   ba = i;
   ca = $;
  }
  i = ba + -194 | 0;
  if (i >>> 0 > 50) {
   T = b;
   U = aa;
   V = ca;
   m = 48;
   break;
  }
  j = aa;
  k = c[2348 + (i << 2) >> 2] | 0;
  l = ca + 1 | 0;
  m = 16;
  continue;
 } else if ((m | 0) == 16) {
  m = 0;
  i = (d[l >> 0] | 0) >>> 3;
  if ((i + -16 | i + (k >> 26)) >>> 0 > 7) {
   m = 17;
   break;
  }
  i = l + 1 | 0;
  if (k & 33554432) {
   if ((a[i >> 0] & -64) << 24 >> 24 != -128) {
    m = 20;
    break;
   }
   g = l + 2 | 0;
   if (!(k & 524288)) da = g; else {
    if ((a[g >> 0] & -64) << 24 >> 24 != -128) {
     m = 23;
     break;
    }
    da = l + 3 | 0;
   }
  } else da = i;
  r = j + -1 | 0;
  s = da;
  m = 7;
  continue;
 } else if ((m | 0) == 37) {
  m = 0;
  i = d[q >> 0] | 0;
  g = i >>> 3;
  if ((g + -16 | g + (p >> 26)) >>> 0 > 7) {
   m = 38;
   break;
  }
  g = q + 1 | 0;
  H = i + -128 | p << 6;
  if ((H | 0) < 0) {
   i = d[g >> 0] | 0;
   if ((i & 192 | 0) != 128) {
    m = 41;
    break;
   }
   B = q + 2 | 0;
   G = i + -128 | H << 6;
   if ((G | 0) < 0) {
    i = d[B >> 0] | 0;
    if ((i & 192 | 0) != 128) {
     m = 44;
     break;
    }
    ea = i + -128 | G << 6;
    fa = q + 3 | 0;
   } else {
    ea = G;
    fa = B;
   }
  } else {
   ea = H;
   fa = g;
  }
  c[n >> 2] = ea;
  t = n + 4 | 0;
  u = o + -1 | 0;
  v = fa;
  m = 6;
  continue;
 }
 if ((m | 0) == 17) {
  ga = b;
  ha = j;
  ia = k;
  ja = l + -1 | 0;
  m = 47;
 } else if ((m | 0) == 20) {
  ga = b;
  ha = j;
  ia = k;
  ja = l + -1 | 0;
  m = 47;
 } else if ((m | 0) == 23) {
  ga = b;
  ha = j;
  ia = k;
  ja = l + -1 | 0;
  m = 47;
 } else if ((m | 0) == 26) {
  c[e >> 2] = w;
  ka = f;
 } else if ((m | 0) == 38) {
  ga = n;
  ha = o;
  ia = p;
  ja = q + -1 | 0;
  m = 47;
 } else if ((m | 0) == 41) {
  la = n;
  ma = q + -1 | 0;
  m = 52;
 } else if ((m | 0) == 44) {
  la = n;
  ma = q + -1 | 0;
  m = 52;
 }
 if ((m | 0) == 47) if (!ia) {
  T = ga;
  U = ha;
  V = ja;
  m = 48;
 } else {
  la = ga;
  ma = ja;
  m = 52;
 }
 if ((m | 0) == 48) if (!(a[V >> 0] | 0)) {
  if (T) {
   c[T >> 2] = 0;
   c[e >> 2] = 0;
  }
  ka = f - U | 0;
 } else {
  la = T;
  ma = V;
  m = 52;
 }
 if ((m | 0) == 52) {
  c[(Qc() | 0) >> 2] = 84;
  if (!la) ka = -1; else {
   c[e >> 2] = ma;
   ka = -1;
  }
 }
 return ka | 0;
}

function Fi(b, d, e, f, g, h, j, k) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 k = k | 0;
 var l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0;
 k = i;
 i = i + 144 | 0;
 l = k + 132 | 0;
 m = k + 116 | 0;
 n = k + 128 | 0;
 o = k + 124 | 0;
 p = k + 120 | 0;
 q = k + 112 | 0;
 r = k + 108 | 0;
 s = k + 104 | 0;
 t = k + 100 | 0;
 u = k + 96 | 0;
 v = k + 92 | 0;
 w = k + 88 | 0;
 x = k + 84 | 0;
 y = k + 80 | 0;
 z = k + 76 | 0;
 A = k + 72 | 0;
 B = k + 68 | 0;
 C = k + 64 | 0;
 D = k + 60 | 0;
 E = k + 56 | 0;
 F = k + 52 | 0;
 G = k + 48 | 0;
 H = k + 44 | 0;
 I = k + 40 | 0;
 J = k + 36 | 0;
 K = k + 32 | 0;
 L = k + 28 | 0;
 M = k + 24 | 0;
 N = k + 20 | 0;
 O = k + 16 | 0;
 P = k + 12 | 0;
 Q = k + 8 | 0;
 R = k + 4 | 0;
 S = k;
 c[g >> 2] = 0;
 T = xf(f) | 0;
 c[n >> 2] = T;
 U = Mk(n, 9328) | 0;
 ko(T) | 0;
 do switch (j << 24 >> 24 | 0) {
 case 65:
 case 97:
  {
   c[o >> 2] = c[e >> 2];
   c[l >> 2] = c[o >> 2];
   Ai(b, h + 24 | 0, d, l, g, U);
   V = 26;
   break;
  }
 case 104:
 case 66:
 case 98:
  {
   c[p >> 2] = c[e >> 2];
   c[l >> 2] = c[p >> 2];
   Ci(b, h + 16 | 0, d, l, g, U);
   V = 26;
   break;
  }
 case 99:
  {
   T = b + 8 | 0;
   n = ub[c[(c[T >> 2] | 0) + 12 >> 2] & 63](T) | 0;
   c[q >> 2] = c[d >> 2];
   c[r >> 2] = c[e >> 2];
   T = a[n >> 0] | 0;
   W = (T & 1) == 0;
   X = n + 4 | 0;
   Y = W ? X : c[n + 8 >> 2] | 0;
   n = Y + ((W ? (T & 255) >>> 1 : c[X >> 2] | 0) << 2) | 0;
   c[m >> 2] = c[q >> 2];
   c[l >> 2] = c[r >> 2];
   c[d >> 2] = ti(b, m, l, f, g, h, Y, n) | 0;
   V = 26;
   break;
  }
 case 101:
 case 100:
  {
   c[s >> 2] = c[e >> 2];
   c[l >> 2] = c[s >> 2];
   Gi(b, h + 12 | 0, d, l, g, U);
   V = 26;
   break;
  }
 case 68:
  {
   c[t >> 2] = c[d >> 2];
   c[u >> 2] = c[e >> 2];
   c[m >> 2] = c[t >> 2];
   c[l >> 2] = c[u >> 2];
   c[d >> 2] = ti(b, m, l, f, g, h, 9936, 9968) | 0;
   V = 26;
   break;
  }
 case 70:
  {
   c[v >> 2] = c[d >> 2];
   c[w >> 2] = c[e >> 2];
   c[m >> 2] = c[v >> 2];
   c[l >> 2] = c[w >> 2];
   c[d >> 2] = ti(b, m, l, f, g, h, 9968, 1e4) | 0;
   V = 26;
   break;
  }
 case 72:
  {
   c[x >> 2] = c[e >> 2];
   c[l >> 2] = c[x >> 2];
   Hi(b, h + 8 | 0, d, l, g, U);
   V = 26;
   break;
  }
 case 73:
  {
   c[y >> 2] = c[e >> 2];
   c[l >> 2] = c[y >> 2];
   Ii(b, h + 8 | 0, d, l, g, U);
   V = 26;
   break;
  }
 case 106:
  {
   c[z >> 2] = c[e >> 2];
   c[l >> 2] = c[z >> 2];
   Ji(b, h + 28 | 0, d, l, g, U);
   V = 26;
   break;
  }
 case 109:
  {
   c[A >> 2] = c[e >> 2];
   c[l >> 2] = c[A >> 2];
   Ki(b, h + 16 | 0, d, l, g, U);
   V = 26;
   break;
  }
 case 77:
  {
   c[B >> 2] = c[e >> 2];
   c[l >> 2] = c[B >> 2];
   Li(b, h + 4 | 0, d, l, g, U);
   V = 26;
   break;
  }
 case 116:
 case 110:
  {
   c[C >> 2] = c[e >> 2];
   c[l >> 2] = c[C >> 2];
   Mi(b, d, l, g, U);
   V = 26;
   break;
  }
 case 112:
  {
   c[D >> 2] = c[e >> 2];
   c[l >> 2] = c[D >> 2];
   Ni(b, h + 8 | 0, d, l, g, U);
   V = 26;
   break;
  }
 case 114:
  {
   c[E >> 2] = c[d >> 2];
   c[F >> 2] = c[e >> 2];
   c[m >> 2] = c[E >> 2];
   c[l >> 2] = c[F >> 2];
   c[d >> 2] = ti(b, m, l, f, g, h, 1e4, 10044) | 0;
   V = 26;
   break;
  }
 case 82:
  {
   c[G >> 2] = c[d >> 2];
   c[H >> 2] = c[e >> 2];
   c[m >> 2] = c[G >> 2];
   c[l >> 2] = c[H >> 2];
   c[d >> 2] = ti(b, m, l, f, g, h, 10044, 10064) | 0;
   V = 26;
   break;
  }
 case 83:
  {
   c[I >> 2] = c[e >> 2];
   c[l >> 2] = c[I >> 2];
   Oi(b, h, d, l, g, U);
   V = 26;
   break;
  }
 case 84:
  {
   c[J >> 2] = c[d >> 2];
   c[K >> 2] = c[e >> 2];
   c[m >> 2] = c[J >> 2];
   c[l >> 2] = c[K >> 2];
   c[d >> 2] = ti(b, m, l, f, g, h, 10064, 10096) | 0;
   V = 26;
   break;
  }
 case 119:
  {
   c[L >> 2] = c[e >> 2];
   c[l >> 2] = c[L >> 2];
   Pi(b, h + 24 | 0, d, l, g, U);
   V = 26;
   break;
  }
 case 120:
  {
   n = c[(c[b >> 2] | 0) + 20 >> 2] | 0;
   c[M >> 2] = c[d >> 2];
   c[N >> 2] = c[e >> 2];
   c[m >> 2] = c[M >> 2];
   c[l >> 2] = c[N >> 2];
   Z = sb[n & 63](b, m, l, f, g, h) | 0;
   break;
  }
 case 88:
  {
   n = b + 8 | 0;
   Y = ub[c[(c[n >> 2] | 0) + 24 >> 2] & 63](n) | 0;
   c[O >> 2] = c[d >> 2];
   c[P >> 2] = c[e >> 2];
   n = a[Y >> 0] | 0;
   X = (n & 1) == 0;
   T = Y + 4 | 0;
   W = X ? T : c[Y + 8 >> 2] | 0;
   Y = W + ((X ? (n & 255) >>> 1 : c[T >> 2] | 0) << 2) | 0;
   c[m >> 2] = c[O >> 2];
   c[l >> 2] = c[P >> 2];
   c[d >> 2] = ti(b, m, l, f, g, h, W, Y) | 0;
   V = 26;
   break;
  }
 case 121:
  {
   c[Q >> 2] = c[e >> 2];
   c[l >> 2] = c[Q >> 2];
   Ei(b, h + 20 | 0, d, l, g, U);
   V = 26;
   break;
  }
 case 89:
  {
   c[R >> 2] = c[e >> 2];
   c[l >> 2] = c[R >> 2];
   Qi(b, h + 20 | 0, d, l, g, U);
   V = 26;
   break;
  }
 case 37:
  {
   c[S >> 2] = c[e >> 2];
   c[l >> 2] = c[S >> 2];
   Ri(b, d, l, g, U);
   V = 26;
   break;
  }
 default:
  {
   c[g >> 2] = c[g >> 2] | 4;
   V = 26;
  }
 } while (0);
 if ((V | 0) == 26) Z = c[d >> 2] | 0;
 i = k;
 return Z | 0;
}

function gi(b, d, e, f, g, h, j, k) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 k = k | 0;
 var l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0;
 k = i;
 i = i + 144 | 0;
 l = k + 132 | 0;
 m = k + 116 | 0;
 n = k + 128 | 0;
 o = k + 124 | 0;
 p = k + 120 | 0;
 q = k + 112 | 0;
 r = k + 108 | 0;
 s = k + 104 | 0;
 t = k + 100 | 0;
 u = k + 96 | 0;
 v = k + 92 | 0;
 w = k + 88 | 0;
 x = k + 84 | 0;
 y = k + 80 | 0;
 z = k + 76 | 0;
 A = k + 72 | 0;
 B = k + 68 | 0;
 C = k + 64 | 0;
 D = k + 60 | 0;
 E = k + 56 | 0;
 F = k + 52 | 0;
 G = k + 48 | 0;
 H = k + 44 | 0;
 I = k + 40 | 0;
 J = k + 36 | 0;
 K = k + 32 | 0;
 L = k + 28 | 0;
 M = k + 24 | 0;
 N = k + 20 | 0;
 O = k + 16 | 0;
 P = k + 12 | 0;
 Q = k + 8 | 0;
 R = k + 4 | 0;
 S = k;
 c[g >> 2] = 0;
 T = xf(f) | 0;
 c[n >> 2] = T;
 U = Mk(n, 9336) | 0;
 ko(T) | 0;
 do switch (j << 24 >> 24 | 0) {
 case 65:
 case 97:
  {
   c[o >> 2] = c[e >> 2];
   c[l >> 2] = c[o >> 2];
   bi(b, h + 24 | 0, d, l, g, U);
   V = 26;
   break;
  }
 case 104:
 case 66:
 case 98:
  {
   c[p >> 2] = c[e >> 2];
   c[l >> 2] = c[p >> 2];
   di(b, h + 16 | 0, d, l, g, U);
   V = 26;
   break;
  }
 case 99:
  {
   T = b + 8 | 0;
   n = ub[c[(c[T >> 2] | 0) + 12 >> 2] & 63](T) | 0;
   c[q >> 2] = c[d >> 2];
   c[r >> 2] = c[e >> 2];
   T = a[n >> 0] | 0;
   W = (T & 1) == 0;
   X = W ? n + 1 | 0 : c[n + 8 >> 2] | 0;
   Y = X + (W ? (T & 255) >>> 1 : c[n + 4 >> 2] | 0) | 0;
   c[m >> 2] = c[q >> 2];
   c[l >> 2] = c[r >> 2];
   c[d >> 2] = Wh(b, m, l, f, g, h, X, Y) | 0;
   V = 26;
   break;
  }
 case 101:
 case 100:
  {
   c[s >> 2] = c[e >> 2];
   c[l >> 2] = c[s >> 2];
   hi(b, h + 12 | 0, d, l, g, U);
   V = 26;
   break;
  }
 case 68:
  {
   c[t >> 2] = c[d >> 2];
   c[u >> 2] = c[e >> 2];
   c[m >> 2] = c[t >> 2];
   c[l >> 2] = c[u >> 2];
   c[d >> 2] = Wh(b, m, l, f, g, h, 21385, 21393) | 0;
   V = 26;
   break;
  }
 case 70:
  {
   c[v >> 2] = c[d >> 2];
   c[w >> 2] = c[e >> 2];
   c[m >> 2] = c[v >> 2];
   c[l >> 2] = c[w >> 2];
   c[d >> 2] = Wh(b, m, l, f, g, h, 21393, 21401) | 0;
   V = 26;
   break;
  }
 case 72:
  {
   c[x >> 2] = c[e >> 2];
   c[l >> 2] = c[x >> 2];
   ii(b, h + 8 | 0, d, l, g, U);
   V = 26;
   break;
  }
 case 73:
  {
   c[y >> 2] = c[e >> 2];
   c[l >> 2] = c[y >> 2];
   ji(b, h + 8 | 0, d, l, g, U);
   V = 26;
   break;
  }
 case 106:
  {
   c[z >> 2] = c[e >> 2];
   c[l >> 2] = c[z >> 2];
   ki(b, h + 28 | 0, d, l, g, U);
   V = 26;
   break;
  }
 case 109:
  {
   c[A >> 2] = c[e >> 2];
   c[l >> 2] = c[A >> 2];
   li(b, h + 16 | 0, d, l, g, U);
   V = 26;
   break;
  }
 case 77:
  {
   c[B >> 2] = c[e >> 2];
   c[l >> 2] = c[B >> 2];
   mi(b, h + 4 | 0, d, l, g, U);
   V = 26;
   break;
  }
 case 116:
 case 110:
  {
   c[C >> 2] = c[e >> 2];
   c[l >> 2] = c[C >> 2];
   ni(b, d, l, g, U);
   V = 26;
   break;
  }
 case 112:
  {
   c[D >> 2] = c[e >> 2];
   c[l >> 2] = c[D >> 2];
   oi(b, h + 8 | 0, d, l, g, U);
   V = 26;
   break;
  }
 case 114:
  {
   c[E >> 2] = c[d >> 2];
   c[F >> 2] = c[e >> 2];
   c[m >> 2] = c[E >> 2];
   c[l >> 2] = c[F >> 2];
   c[d >> 2] = Wh(b, m, l, f, g, h, 21401, 21412) | 0;
   V = 26;
   break;
  }
 case 82:
  {
   c[G >> 2] = c[d >> 2];
   c[H >> 2] = c[e >> 2];
   c[m >> 2] = c[G >> 2];
   c[l >> 2] = c[H >> 2];
   c[d >> 2] = Wh(b, m, l, f, g, h, 21412, 21417) | 0;
   V = 26;
   break;
  }
 case 83:
  {
   c[I >> 2] = c[e >> 2];
   c[l >> 2] = c[I >> 2];
   pi(b, h, d, l, g, U);
   V = 26;
   break;
  }
 case 84:
  {
   c[J >> 2] = c[d >> 2];
   c[K >> 2] = c[e >> 2];
   c[m >> 2] = c[J >> 2];
   c[l >> 2] = c[K >> 2];
   c[d >> 2] = Wh(b, m, l, f, g, h, 21417, 21425) | 0;
   V = 26;
   break;
  }
 case 119:
  {
   c[L >> 2] = c[e >> 2];
   c[l >> 2] = c[L >> 2];
   qi(b, h + 24 | 0, d, l, g, U);
   V = 26;
   break;
  }
 case 120:
  {
   Y = c[(c[b >> 2] | 0) + 20 >> 2] | 0;
   c[M >> 2] = c[d >> 2];
   c[N >> 2] = c[e >> 2];
   c[m >> 2] = c[M >> 2];
   c[l >> 2] = c[N >> 2];
   Z = sb[Y & 63](b, m, l, f, g, h) | 0;
   break;
  }
 case 88:
  {
   Y = b + 8 | 0;
   X = ub[c[(c[Y >> 2] | 0) + 24 >> 2] & 63](Y) | 0;
   c[O >> 2] = c[d >> 2];
   c[P >> 2] = c[e >> 2];
   Y = a[X >> 0] | 0;
   n = (Y & 1) == 0;
   T = n ? X + 1 | 0 : c[X + 8 >> 2] | 0;
   W = T + (n ? (Y & 255) >>> 1 : c[X + 4 >> 2] | 0) | 0;
   c[m >> 2] = c[O >> 2];
   c[l >> 2] = c[P >> 2];
   c[d >> 2] = Wh(b, m, l, f, g, h, T, W) | 0;
   V = 26;
   break;
  }
 case 121:
  {
   c[Q >> 2] = c[e >> 2];
   c[l >> 2] = c[Q >> 2];
   fi(b, h + 20 | 0, d, l, g, U);
   V = 26;
   break;
  }
 case 89:
  {
   c[R >> 2] = c[e >> 2];
   c[l >> 2] = c[R >> 2];
   ri(b, h + 20 | 0, d, l, g, U);
   V = 26;
   break;
  }
 case 37:
  {
   c[S >> 2] = c[e >> 2];
   c[l >> 2] = c[S >> 2];
   si(b, d, l, g, U);
   V = 26;
   break;
  }
 default:
  {
   c[g >> 2] = c[g >> 2] | 4;
   V = 26;
  }
 } while (0);
 if ((V | 0) == 26) Z = c[d >> 2] | 0;
 i = k;
 return Z | 0;
}

function Jm(b, d, e, f, g, h, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, _ = 0;
 k = i;
 i = i + 112 | 0;
 l = k;
 m = (f - e | 0) / 12 | 0;
 if (m >>> 0 > 100) {
  n = oe(m) | 0;
  if (!n) Cc(); else {
   o = n;
   p = n;
  }
 } else {
  o = 0;
  p = l;
 }
 if ((e | 0) == (f | 0)) {
  q = 0;
  r = m;
 } else {
  l = e;
  n = 0;
  s = m;
  m = p;
  while (1) {
   t = a[l >> 0] | 0;
   if (!(t & 1)) u = (t & 255) >>> 1; else u = c[l + 4 >> 2] | 0;
   if (!u) {
    a[m >> 0] = 2;
    v = n + 1 | 0;
    w = s + -1 | 0;
   } else {
    a[m >> 0] = 1;
    v = n;
    w = s;
   }
   l = l + 12 | 0;
   if ((l | 0) == (f | 0)) {
    q = v;
    r = w;
    break;
   } else {
    n = v;
    s = w;
    m = m + 1 | 0;
   }
  }
 }
 m = (e | 0) == (f | 0);
 w = (e | 0) == (f | 0);
 s = 0;
 v = q;
 q = r;
 a : while (1) {
  r = c[b >> 2] | 0;
  do if (r) {
   n = c[r + 12 >> 2] | 0;
   if ((n | 0) == (c[r + 16 >> 2] | 0)) x = ub[c[(c[r >> 2] | 0) + 36 >> 2] & 63](r) | 0; else x = c[n >> 2] | 0;
   if ((x | 0) == -1) {
    c[b >> 2] = 0;
    y = 1;
    break;
   } else {
    y = (c[b >> 2] | 0) == 0;
    break;
   }
  } else y = 1; while (0);
  r = c[d >> 2] | 0;
  if (r) {
   n = c[r + 12 >> 2] | 0;
   if ((n | 0) == (c[r + 16 >> 2] | 0)) z = ub[c[(c[r >> 2] | 0) + 36 >> 2] & 63](r) | 0; else z = c[n >> 2] | 0;
   if ((z | 0) == -1) {
    c[d >> 2] = 0;
    A = 0;
    B = 1;
   } else {
    A = r;
    B = 0;
   }
  } else {
   A = 0;
   B = 1;
  }
  r = c[b >> 2] | 0;
  if (!((q | 0) != 0 & (y ^ B))) {
   C = r;
   D = A;
   break;
  }
  n = c[r + 12 >> 2] | 0;
  if ((n | 0) == (c[r + 16 >> 2] | 0)) E = ub[c[(c[r >> 2] | 0) + 36 >> 2] & 63](r) | 0; else E = c[n >> 2] | 0;
  if (j) F = E; else F = Ab[c[(c[g >> 2] | 0) + 28 >> 2] & 15](g, E) | 0;
  n = s + 1 | 0;
  if (m) {
   G = 0;
   H = v;
   I = q;
  } else {
   r = 0;
   l = e;
   u = v;
   t = q;
   J = p;
   while (1) {
    do if ((a[J >> 0] | 0) == 1) {
     if (!(a[l >> 0] & 1)) K = l + 4 | 0; else K = c[l + 8 >> 2] | 0;
     L = c[K + (s << 2) >> 2] | 0;
     if (j) M = L; else M = Ab[c[(c[g >> 2] | 0) + 28 >> 2] & 15](g, L) | 0;
     if ((F | 0) != (M | 0)) {
      a[J >> 0] = 0;
      N = r;
      O = u;
      P = t + -1 | 0;
      break;
     }
     L = a[l >> 0] | 0;
     if (!(L & 1)) Q = (L & 255) >>> 1; else Q = c[l + 4 >> 2] | 0;
     if ((Q | 0) == (n | 0)) {
      a[J >> 0] = 2;
      N = 1;
      O = u + 1 | 0;
      P = t + -1 | 0;
     } else {
      N = 1;
      O = u;
      P = t;
     }
    } else {
     N = r;
     O = u;
     P = t;
    } while (0);
    l = l + 12 | 0;
    if ((l | 0) == (f | 0)) {
     G = N;
     H = O;
     I = P;
     break;
    } else {
     r = N;
     u = O;
     t = P;
     J = J + 1 | 0;
    }
   }
  }
  if (!G) {
   s = n;
   v = H;
   q = I;
   continue;
  }
  J = c[b >> 2] | 0;
  t = J + 12 | 0;
  u = c[t >> 2] | 0;
  if ((u | 0) == (c[J + 16 >> 2] | 0)) ub[c[(c[J >> 2] | 0) + 40 >> 2] & 63](J) | 0; else c[t >> 2] = u + 4;
  if ((H + I | 0) >>> 0 < 2 | w) {
   s = n;
   v = H;
   q = I;
   continue;
  } else {
   R = e;
   S = H;
   T = p;
  }
  while (1) {
   if ((a[T >> 0] | 0) == 2) {
    u = a[R >> 0] | 0;
    if (!(u & 1)) U = (u & 255) >>> 1; else U = c[R + 4 >> 2] | 0;
    if ((U | 0) != (n | 0)) {
     a[T >> 0] = 0;
     V = S + -1 | 0;
    } else V = S;
   } else V = S;
   u = R + 12 | 0;
   if ((u | 0) == (f | 0)) {
    s = n;
    v = V;
    q = I;
    continue a;
   } else {
    R = u;
    S = V;
    T = T + 1 | 0;
   }
  }
 }
 do if (C) {
  T = c[C + 12 >> 2] | 0;
  if ((T | 0) == (c[C + 16 >> 2] | 0)) W = ub[c[(c[C >> 2] | 0) + 36 >> 2] & 63](C) | 0; else W = c[T >> 2] | 0;
  if ((W | 0) == -1) {
   c[b >> 2] = 0;
   X = 1;
   break;
  } else {
   X = (c[b >> 2] | 0) == 0;
   break;
  }
 } else X = 1; while (0);
 do if (D) {
  b = c[D + 12 >> 2] | 0;
  if ((b | 0) == (c[D + 16 >> 2] | 0)) Y = ub[c[(c[D >> 2] | 0) + 36 >> 2] & 63](D) | 0; else Y = c[b >> 2] | 0;
  if ((Y | 0) != -1) if (X) break; else {
   Z = 74;
   break;
  } else {
   c[d >> 2] = 0;
   Z = 72;
   break;
  }
 } else Z = 72; while (0);
 if ((Z | 0) == 72 ? X : 0) Z = 74;
 if ((Z | 0) == 74) c[h >> 2] = c[h >> 2] | 2;
 b : do if ((e | 0) == (f | 0)) Z = 78; else {
  X = e;
  d = p;
  while (1) {
   if ((a[d >> 0] | 0) == 2) {
    _ = X;
    break b;
   }
   X = X + 12 | 0;
   if ((X | 0) == (f | 0)) {
    Z = 78;
    break;
   } else d = d + 1 | 0;
  }
 } while (0);
 if ((Z | 0) == 78) {
  c[h >> 2] = c[h >> 2] | 4;
  _ = f;
 }
 pe(o);
 i = k;
 return _ | 0;
}

function ym(b, e, f, g, h, j, k) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 k = k | 0;
 var l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0;
 l = i;
 i = i + 112 | 0;
 m = l;
 n = (g - f | 0) / 12 | 0;
 if (n >>> 0 > 100) {
  o = oe(n) | 0;
  if (!o) Cc(); else {
   p = o;
   q = o;
  }
 } else {
  p = 0;
  q = m;
 }
 if ((f | 0) == (g | 0)) {
  r = 0;
  s = n;
 } else {
  m = f;
  o = 0;
  t = n;
  n = q;
  while (1) {
   u = a[m >> 0] | 0;
   if (!(u & 1)) v = (u & 255) >>> 1; else v = c[m + 4 >> 2] | 0;
   if (!v) {
    a[n >> 0] = 2;
    w = o + 1 | 0;
    x = t + -1 | 0;
   } else {
    a[n >> 0] = 1;
    w = o;
    x = t;
   }
   m = m + 12 | 0;
   if ((m | 0) == (g | 0)) {
    r = w;
    s = x;
    break;
   } else {
    o = w;
    t = x;
    n = n + 1 | 0;
   }
  }
 }
 n = (f | 0) == (g | 0);
 x = (f | 0) == (g | 0);
 t = 0;
 w = r;
 r = s;
 a : while (1) {
  s = c[b >> 2] | 0;
  do if (s) if ((c[s + 12 >> 2] | 0) == (c[s + 16 >> 2] | 0)) if ((ub[c[(c[s >> 2] | 0) + 36 >> 2] & 63](s) | 0) == -1) {
   c[b >> 2] = 0;
   y = 0;
   break;
  } else {
   y = c[b >> 2] | 0;
   break;
  } else y = s; else y = 0; while (0);
  s = (y | 0) == 0;
  o = c[e >> 2] | 0;
  if (o) if ((c[o + 12 >> 2] | 0) == (c[o + 16 >> 2] | 0) ? (ub[c[(c[o >> 2] | 0) + 36 >> 2] & 63](o) | 0) == -1 : 0) {
   c[e >> 2] = 0;
   z = 0;
  } else z = o; else z = 0;
  o = (z | 0) == 0;
  m = c[b >> 2] | 0;
  if (!((r | 0) != 0 & (s ^ o))) {
   A = o;
   B = m;
   C = z;
   break;
  }
  o = c[m + 12 >> 2] | 0;
  if ((o | 0) == (c[m + 16 >> 2] | 0)) D = ub[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0; else D = d[o >> 0] | 0;
  o = D & 255;
  if (k) E = o; else E = Ab[c[(c[h >> 2] | 0) + 12 >> 2] & 15](h, o) | 0;
  o = t + 1 | 0;
  if (n) {
   F = 0;
   G = w;
   H = r;
  } else {
   m = 0;
   s = f;
   v = w;
   u = r;
   I = q;
   while (1) {
    do if ((a[I >> 0] | 0) == 1) {
     if (!(a[s >> 0] & 1)) J = s + 1 | 0; else J = c[s + 8 >> 2] | 0;
     K = a[J + t >> 0] | 0;
     if (k) L = K; else L = Ab[c[(c[h >> 2] | 0) + 12 >> 2] & 15](h, K) | 0;
     if (E << 24 >> 24 != L << 24 >> 24) {
      a[I >> 0] = 0;
      M = m;
      N = v;
      O = u + -1 | 0;
      break;
     }
     K = a[s >> 0] | 0;
     if (!(K & 1)) P = (K & 255) >>> 1; else P = c[s + 4 >> 2] | 0;
     if ((P | 0) == (o | 0)) {
      a[I >> 0] = 2;
      M = 1;
      N = v + 1 | 0;
      O = u + -1 | 0;
     } else {
      M = 1;
      N = v;
      O = u;
     }
    } else {
     M = m;
     N = v;
     O = u;
    } while (0);
    s = s + 12 | 0;
    if ((s | 0) == (g | 0)) {
     F = M;
     G = N;
     H = O;
     break;
    } else {
     m = M;
     v = N;
     u = O;
     I = I + 1 | 0;
    }
   }
  }
  if (!F) {
   t = o;
   w = G;
   r = H;
   continue;
  }
  I = c[b >> 2] | 0;
  u = I + 12 | 0;
  v = c[u >> 2] | 0;
  if ((v | 0) == (c[I + 16 >> 2] | 0)) ub[c[(c[I >> 2] | 0) + 40 >> 2] & 63](I) | 0; else c[u >> 2] = v + 1;
  if ((G + H | 0) >>> 0 < 2 | x) {
   t = o;
   w = G;
   r = H;
   continue;
  } else {
   Q = f;
   R = G;
   S = q;
  }
  while (1) {
   if ((a[S >> 0] | 0) == 2) {
    v = a[Q >> 0] | 0;
    if (!(v & 1)) T = (v & 255) >>> 1; else T = c[Q + 4 >> 2] | 0;
    if ((T | 0) != (o | 0)) {
     a[S >> 0] = 0;
     U = R + -1 | 0;
    } else U = R;
   } else U = R;
   v = Q + 12 | 0;
   if ((v | 0) == (g | 0)) {
    t = o;
    w = U;
    r = H;
    continue a;
   } else {
    Q = v;
    R = U;
    S = S + 1 | 0;
   }
  }
 }
 do if (B) if ((c[B + 12 >> 2] | 0) == (c[B + 16 >> 2] | 0)) if ((ub[c[(c[B >> 2] | 0) + 36 >> 2] & 63](B) | 0) == -1) {
  c[b >> 2] = 0;
  V = 0;
  break;
 } else {
  V = c[b >> 2] | 0;
  break;
 } else V = B; else V = 0; while (0);
 B = (V | 0) == 0;
 do if (!A) {
  if ((c[C + 12 >> 2] | 0) == (c[C + 16 >> 2] | 0) ? (ub[c[(c[C >> 2] | 0) + 36 >> 2] & 63](C) | 0) == -1 : 0) {
   c[e >> 2] = 0;
   W = 65;
   break;
  }
  if (!B) W = 66;
 } else W = 65; while (0);
 if ((W | 0) == 65 ? B : 0) W = 66;
 if ((W | 0) == 66) c[j >> 2] = c[j >> 2] | 2;
 b : do if ((f | 0) == (g | 0)) W = 70; else {
  B = f;
  e = q;
  while (1) {
   if ((a[e >> 0] | 0) == 2) {
    X = B;
    break b;
   }
   B = B + 12 | 0;
   if ((B | 0) == (g | 0)) {
    W = 70;
    break;
   } else e = e + 1 | 0;
  }
 } while (0);
 if ((W | 0) == 70) {
  c[j >> 2] = c[j >> 2] | 4;
  X = g;
 }
 pe(p);
 i = l;
 return X | 0;
}
function hk(b, d, e, f, g, h, j, k, l, m) {
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
 var n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0;
 n = i;
 i = i + 112 | 0;
 o = n + 108 | 0;
 p = n + 96 | 0;
 q = n + 92 | 0;
 r = n + 80 | 0;
 s = n + 68 | 0;
 t = n + 56 | 0;
 u = n + 52 | 0;
 v = n + 40 | 0;
 w = n + 36 | 0;
 x = n + 24 | 0;
 y = n + 12 | 0;
 z = n;
 if (b) {
  b = Mk(e, 8944) | 0;
  A = c[b >> 2] | 0;
  if (d) {
   rb[c[A + 44 >> 2] & 63](o, b);
   B = c[o >> 2] | 0;
   a[f >> 0] = B;
   a[f + 1 >> 0] = B >> 8;
   a[f + 2 >> 0] = B >> 16;
   a[f + 3 >> 0] = B >> 24;
   rb[c[(c[b >> 2] | 0) + 32 >> 2] & 63](p, b);
   if (!(a[l >> 0] & 1)) {
    a[l + 1 >> 0] = 0;
    a[l >> 0] = 0;
   } else {
    a[c[l + 8 >> 2] >> 0] = 0;
    c[l + 4 >> 2] = 0;
   }
   ef(l, 0);
   c[l >> 2] = c[p >> 2];
   c[l + 4 >> 2] = c[p + 4 >> 2];
   c[l + 8 >> 2] = c[p + 8 >> 2];
   c[p >> 2] = 0;
   c[p + 4 >> 2] = 0;
   c[p + 8 >> 2] = 0;
   $e(p);
   C = b;
  } else {
   rb[c[A + 40 >> 2] & 63](q, b);
   A = c[q >> 2] | 0;
   a[f >> 0] = A;
   a[f + 1 >> 0] = A >> 8;
   a[f + 2 >> 0] = A >> 16;
   a[f + 3 >> 0] = A >> 24;
   rb[c[(c[b >> 2] | 0) + 28 >> 2] & 63](r, b);
   if (!(a[l >> 0] & 1)) {
    a[l + 1 >> 0] = 0;
    a[l >> 0] = 0;
   } else {
    a[c[l + 8 >> 2] >> 0] = 0;
    c[l + 4 >> 2] = 0;
   }
   ef(l, 0);
   c[l >> 2] = c[r >> 2];
   c[l + 4 >> 2] = c[r + 4 >> 2];
   c[l + 8 >> 2] = c[r + 8 >> 2];
   c[r >> 2] = 0;
   c[r + 4 >> 2] = 0;
   c[r + 8 >> 2] = 0;
   $e(r);
   C = b;
  }
  a[g >> 0] = ub[c[(c[b >> 2] | 0) + 12 >> 2] & 63](b) | 0;
  a[h >> 0] = ub[c[(c[b >> 2] | 0) + 16 >> 2] & 63](b) | 0;
  rb[c[(c[C >> 2] | 0) + 20 >> 2] & 63](s, b);
  if (!(a[j >> 0] & 1)) {
   a[j + 1 >> 0] = 0;
   a[j >> 0] = 0;
  } else {
   a[c[j + 8 >> 2] >> 0] = 0;
   c[j + 4 >> 2] = 0;
  }
  ef(j, 0);
  c[j >> 2] = c[s >> 2];
  c[j + 4 >> 2] = c[s + 4 >> 2];
  c[j + 8 >> 2] = c[s + 8 >> 2];
  c[s >> 2] = 0;
  c[s + 4 >> 2] = 0;
  c[s + 8 >> 2] = 0;
  $e(s);
  rb[c[(c[C >> 2] | 0) + 24 >> 2] & 63](t, b);
  if (!(a[k >> 0] & 1)) {
   a[k + 1 >> 0] = 0;
   a[k >> 0] = 0;
  } else {
   a[c[k + 8 >> 2] >> 0] = 0;
   c[k + 4 >> 2] = 0;
  }
  ef(k, 0);
  c[k >> 2] = c[t >> 2];
  c[k + 4 >> 2] = c[t + 4 >> 2];
  c[k + 8 >> 2] = c[t + 8 >> 2];
  c[t >> 2] = 0;
  c[t + 4 >> 2] = 0;
  c[t + 8 >> 2] = 0;
  $e(t);
  D = ub[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0;
 } else {
  b = Mk(e, 8880) | 0;
  e = c[b >> 2] | 0;
  if (d) {
   rb[c[e + 44 >> 2] & 63](u, b);
   d = c[u >> 2] | 0;
   a[f >> 0] = d;
   a[f + 1 >> 0] = d >> 8;
   a[f + 2 >> 0] = d >> 16;
   a[f + 3 >> 0] = d >> 24;
   rb[c[(c[b >> 2] | 0) + 32 >> 2] & 63](v, b);
   if (!(a[l >> 0] & 1)) {
    a[l + 1 >> 0] = 0;
    a[l >> 0] = 0;
   } else {
    a[c[l + 8 >> 2] >> 0] = 0;
    c[l + 4 >> 2] = 0;
   }
   ef(l, 0);
   c[l >> 2] = c[v >> 2];
   c[l + 4 >> 2] = c[v + 4 >> 2];
   c[l + 8 >> 2] = c[v + 8 >> 2];
   c[v >> 2] = 0;
   c[v + 4 >> 2] = 0;
   c[v + 8 >> 2] = 0;
   $e(v);
   E = b;
  } else {
   rb[c[e + 40 >> 2] & 63](w, b);
   e = c[w >> 2] | 0;
   a[f >> 0] = e;
   a[f + 1 >> 0] = e >> 8;
   a[f + 2 >> 0] = e >> 16;
   a[f + 3 >> 0] = e >> 24;
   rb[c[(c[b >> 2] | 0) + 28 >> 2] & 63](x, b);
   if (!(a[l >> 0] & 1)) {
    a[l + 1 >> 0] = 0;
    a[l >> 0] = 0;
   } else {
    a[c[l + 8 >> 2] >> 0] = 0;
    c[l + 4 >> 2] = 0;
   }
   ef(l, 0);
   c[l >> 2] = c[x >> 2];
   c[l + 4 >> 2] = c[x + 4 >> 2];
   c[l + 8 >> 2] = c[x + 8 >> 2];
   c[x >> 2] = 0;
   c[x + 4 >> 2] = 0;
   c[x + 8 >> 2] = 0;
   $e(x);
   E = b;
  }
  a[g >> 0] = ub[c[(c[b >> 2] | 0) + 12 >> 2] & 63](b) | 0;
  a[h >> 0] = ub[c[(c[b >> 2] | 0) + 16 >> 2] & 63](b) | 0;
  rb[c[(c[E >> 2] | 0) + 20 >> 2] & 63](y, b);
  if (!(a[j >> 0] & 1)) {
   a[j + 1 >> 0] = 0;
   a[j >> 0] = 0;
  } else {
   a[c[j + 8 >> 2] >> 0] = 0;
   c[j + 4 >> 2] = 0;
  }
  ef(j, 0);
  c[j >> 2] = c[y >> 2];
  c[j + 4 >> 2] = c[y + 4 >> 2];
  c[j + 8 >> 2] = c[y + 8 >> 2];
  c[y >> 2] = 0;
  c[y + 4 >> 2] = 0;
  c[y + 8 >> 2] = 0;
  $e(y);
  rb[c[(c[E >> 2] | 0) + 24 >> 2] & 63](z, b);
  if (!(a[k >> 0] & 1)) {
   a[k + 1 >> 0] = 0;
   a[k >> 0] = 0;
  } else {
   a[c[k + 8 >> 2] >> 0] = 0;
   c[k + 4 >> 2] = 0;
  }
  ef(k, 0);
  c[k >> 2] = c[z >> 2];
  c[k + 4 >> 2] = c[z + 4 >> 2];
  c[k + 8 >> 2] = c[z + 8 >> 2];
  c[z >> 2] = 0;
  c[z + 4 >> 2] = 0;
  c[z + 8 >> 2] = 0;
  $e(z);
  D = ub[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0;
 }
 c[m >> 2] = D;
 i = n;
 return;
}

function se(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0;
 d = a + 4 | 0;
 e = c[d >> 2] | 0;
 f = e & -8;
 g = a + f | 0;
 h = c[1540] | 0;
 i = e & 3;
 if (!((i | 0) != 1 & a >>> 0 >= h >>> 0 & a >>> 0 < g >>> 0)) za();
 j = a + (f | 4) | 0;
 k = c[j >> 2] | 0;
 if (!(k & 1)) za();
 if (!i) {
  if (b >>> 0 < 256) {
   l = 0;
   return l | 0;
  }
  if (f >>> 0 >= (b + 4 | 0) >>> 0 ? (f - b | 0) >>> 0 <= c[1656] << 1 >>> 0 : 0) {
   l = a;
   return l | 0;
  }
  l = 0;
  return l | 0;
 }
 if (f >>> 0 >= b >>> 0) {
  i = f - b | 0;
  if (i >>> 0 <= 15) {
   l = a;
   return l | 0;
  }
  c[d >> 2] = e & 1 | b | 2;
  c[a + (b + 4) >> 2] = i | 3;
  c[j >> 2] = c[j >> 2] | 1;
  te(a + b | 0, i);
  l = a;
  return l | 0;
 }
 if ((g | 0) == (c[1542] | 0)) {
  i = (c[1539] | 0) + f | 0;
  if (i >>> 0 <= b >>> 0) {
   l = 0;
   return l | 0;
  }
  j = i - b | 0;
  c[d >> 2] = e & 1 | b | 2;
  c[a + (b + 4) >> 2] = j | 1;
  c[1542] = a + b;
  c[1539] = j;
  l = a;
  return l | 0;
 }
 if ((g | 0) == (c[1541] | 0)) {
  j = (c[1538] | 0) + f | 0;
  if (j >>> 0 < b >>> 0) {
   l = 0;
   return l | 0;
  }
  i = j - b | 0;
  if (i >>> 0 > 15) {
   c[d >> 2] = e & 1 | b | 2;
   c[a + (b + 4) >> 2] = i | 1;
   c[a + j >> 2] = i;
   m = a + (j + 4) | 0;
   c[m >> 2] = c[m >> 2] & -2;
   n = a + b | 0;
   o = i;
  } else {
   c[d >> 2] = e & 1 | j | 2;
   i = a + (j + 4) | 0;
   c[i >> 2] = c[i >> 2] | 1;
   n = 0;
   o = 0;
  }
  c[1538] = o;
  c[1541] = n;
  l = a;
  return l | 0;
 }
 if (k & 2) {
  l = 0;
  return l | 0;
 }
 n = (k & -8) + f | 0;
 if (n >>> 0 < b >>> 0) {
  l = 0;
  return l | 0;
 }
 o = n - b | 0;
 i = k >>> 3;
 do if (k >>> 0 >= 256) {
  j = c[a + (f + 24) >> 2] | 0;
  m = c[a + (f + 12) >> 2] | 0;
  do if ((m | 0) == (g | 0)) {
   p = a + (f + 20) | 0;
   q = c[p >> 2] | 0;
   if (!q) {
    r = a + (f + 16) | 0;
    s = c[r >> 2] | 0;
    if (!s) {
     t = 0;
     break;
    } else {
     u = s;
     v = r;
    }
   } else {
    u = q;
    v = p;
   }
   while (1) {
    p = u + 20 | 0;
    q = c[p >> 2] | 0;
    if (q) {
     u = q;
     v = p;
     continue;
    }
    p = u + 16 | 0;
    q = c[p >> 2] | 0;
    if (!q) {
     w = u;
     x = v;
     break;
    } else {
     u = q;
     v = p;
    }
   }
   if (x >>> 0 < h >>> 0) za(); else {
    c[x >> 2] = 0;
    t = w;
    break;
   }
  } else {
   p = c[a + (f + 8) >> 2] | 0;
   if (p >>> 0 < h >>> 0) za();
   q = p + 12 | 0;
   if ((c[q >> 2] | 0) != (g | 0)) za();
   r = m + 8 | 0;
   if ((c[r >> 2] | 0) == (g | 0)) {
    c[q >> 2] = m;
    c[r >> 2] = p;
    t = m;
    break;
   } else za();
  } while (0);
  if (j) {
   m = c[a + (f + 28) >> 2] | 0;
   p = 6448 + (m << 2) | 0;
   if ((g | 0) == (c[p >> 2] | 0)) {
    c[p >> 2] = t;
    if (!t) {
     c[1537] = c[1537] & ~(1 << m);
     break;
    }
   } else {
    if (j >>> 0 < (c[1540] | 0) >>> 0) za();
    m = j + 16 | 0;
    if ((c[m >> 2] | 0) == (g | 0)) c[m >> 2] = t; else c[j + 20 >> 2] = t;
    if (!t) break;
   }
   m = c[1540] | 0;
   if (t >>> 0 < m >>> 0) za();
   c[t + 24 >> 2] = j;
   p = c[a + (f + 16) >> 2] | 0;
   do if (p) if (p >>> 0 < m >>> 0) za(); else {
    c[t + 16 >> 2] = p;
    c[p + 24 >> 2] = t;
    break;
   } while (0);
   p = c[a + (f + 20) >> 2] | 0;
   if (p) if (p >>> 0 < (c[1540] | 0) >>> 0) za(); else {
    c[t + 20 >> 2] = p;
    c[p + 24 >> 2] = t;
    break;
   }
  }
 } else {
  p = c[a + (f + 8) >> 2] | 0;
  m = c[a + (f + 12) >> 2] | 0;
  j = 6184 + (i << 1 << 2) | 0;
  if ((p | 0) != (j | 0)) {
   if (p >>> 0 < h >>> 0) za();
   if ((c[p + 12 >> 2] | 0) != (g | 0)) za();
  }
  if ((m | 0) == (p | 0)) {
   c[1536] = c[1536] & ~(1 << i);
   break;
  }
  if ((m | 0) != (j | 0)) {
   if (m >>> 0 < h >>> 0) za();
   j = m + 8 | 0;
   if ((c[j >> 2] | 0) == (g | 0)) y = j; else za();
  } else y = m + 8 | 0;
  c[p + 12 >> 2] = m;
  c[y >> 2] = p;
 } while (0);
 if (o >>> 0 < 16) {
  c[d >> 2] = n | e & 1 | 2;
  y = a + (n | 4) | 0;
  c[y >> 2] = c[y >> 2] | 1;
  l = a;
  return l | 0;
 } else {
  c[d >> 2] = e & 1 | b | 2;
  c[a + (b + 4) >> 2] = o | 3;
  e = a + (n | 4) | 0;
  c[e >> 2] = c[e >> 2] | 1;
  te(a + b | 0, o);
  l = a;
  return l | 0;
 }
 return 0;
}

function nk(b, d, e, f, g, h, j, k, l, m) {
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
 var n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0;
 n = i;
 i = i + 112 | 0;
 o = n + 108 | 0;
 p = n + 96 | 0;
 q = n + 92 | 0;
 r = n + 80 | 0;
 s = n + 68 | 0;
 t = n + 56 | 0;
 u = n + 52 | 0;
 v = n + 40 | 0;
 w = n + 36 | 0;
 x = n + 24 | 0;
 y = n + 12 | 0;
 z = n;
 if (b) {
  b = Mk(e, 9072) | 0;
  A = c[b >> 2] | 0;
  if (d) {
   rb[c[A + 44 >> 2] & 63](o, b);
   B = c[o >> 2] | 0;
   a[f >> 0] = B;
   a[f + 1 >> 0] = B >> 8;
   a[f + 2 >> 0] = B >> 16;
   a[f + 3 >> 0] = B >> 24;
   rb[c[(c[b >> 2] | 0) + 32 >> 2] & 63](p, b);
   if (!(a[l >> 0] & 1)) a[l >> 0] = 0; else c[c[l + 8 >> 2] >> 2] = 0;
   c[l + 4 >> 2] = 0;
   of(l, 0);
   c[l >> 2] = c[p >> 2];
   c[l + 4 >> 2] = c[p + 4 >> 2];
   c[l + 8 >> 2] = c[p + 8 >> 2];
   c[p >> 2] = 0;
   c[p + 4 >> 2] = 0;
   c[p + 8 >> 2] = 0;
   lf(p);
  } else {
   rb[c[A + 40 >> 2] & 63](q, b);
   A = c[q >> 2] | 0;
   a[f >> 0] = A;
   a[f + 1 >> 0] = A >> 8;
   a[f + 2 >> 0] = A >> 16;
   a[f + 3 >> 0] = A >> 24;
   rb[c[(c[b >> 2] | 0) + 28 >> 2] & 63](r, b);
   if (!(a[l >> 0] & 1)) a[l >> 0] = 0; else c[c[l + 8 >> 2] >> 2] = 0;
   c[l + 4 >> 2] = 0;
   of(l, 0);
   c[l >> 2] = c[r >> 2];
   c[l + 4 >> 2] = c[r + 4 >> 2];
   c[l + 8 >> 2] = c[r + 8 >> 2];
   c[r >> 2] = 0;
   c[r + 4 >> 2] = 0;
   c[r + 8 >> 2] = 0;
   lf(r);
  }
  c[g >> 2] = ub[c[(c[b >> 2] | 0) + 12 >> 2] & 63](b) | 0;
  c[h >> 2] = ub[c[(c[b >> 2] | 0) + 16 >> 2] & 63](b) | 0;
  rb[c[(c[b >> 2] | 0) + 20 >> 2] & 63](s, b);
  if (!(a[j >> 0] & 1)) {
   a[j + 1 >> 0] = 0;
   a[j >> 0] = 0;
  } else {
   a[c[j + 8 >> 2] >> 0] = 0;
   c[j + 4 >> 2] = 0;
  }
  ef(j, 0);
  c[j >> 2] = c[s >> 2];
  c[j + 4 >> 2] = c[s + 4 >> 2];
  c[j + 8 >> 2] = c[s + 8 >> 2];
  c[s >> 2] = 0;
  c[s + 4 >> 2] = 0;
  c[s + 8 >> 2] = 0;
  $e(s);
  rb[c[(c[b >> 2] | 0) + 24 >> 2] & 63](t, b);
  if (!(a[k >> 0] & 1)) a[k >> 0] = 0; else c[c[k + 8 >> 2] >> 2] = 0;
  c[k + 4 >> 2] = 0;
  of(k, 0);
  c[k >> 2] = c[t >> 2];
  c[k + 4 >> 2] = c[t + 4 >> 2];
  c[k + 8 >> 2] = c[t + 8 >> 2];
  c[t >> 2] = 0;
  c[t + 4 >> 2] = 0;
  c[t + 8 >> 2] = 0;
  lf(t);
  C = ub[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0;
 } else {
  b = Mk(e, 9008) | 0;
  e = c[b >> 2] | 0;
  if (d) {
   rb[c[e + 44 >> 2] & 63](u, b);
   d = c[u >> 2] | 0;
   a[f >> 0] = d;
   a[f + 1 >> 0] = d >> 8;
   a[f + 2 >> 0] = d >> 16;
   a[f + 3 >> 0] = d >> 24;
   rb[c[(c[b >> 2] | 0) + 32 >> 2] & 63](v, b);
   if (!(a[l >> 0] & 1)) a[l >> 0] = 0; else c[c[l + 8 >> 2] >> 2] = 0;
   c[l + 4 >> 2] = 0;
   of(l, 0);
   c[l >> 2] = c[v >> 2];
   c[l + 4 >> 2] = c[v + 4 >> 2];
   c[l + 8 >> 2] = c[v + 8 >> 2];
   c[v >> 2] = 0;
   c[v + 4 >> 2] = 0;
   c[v + 8 >> 2] = 0;
   lf(v);
  } else {
   rb[c[e + 40 >> 2] & 63](w, b);
   e = c[w >> 2] | 0;
   a[f >> 0] = e;
   a[f + 1 >> 0] = e >> 8;
   a[f + 2 >> 0] = e >> 16;
   a[f + 3 >> 0] = e >> 24;
   rb[c[(c[b >> 2] | 0) + 28 >> 2] & 63](x, b);
   if (!(a[l >> 0] & 1)) a[l >> 0] = 0; else c[c[l + 8 >> 2] >> 2] = 0;
   c[l + 4 >> 2] = 0;
   of(l, 0);
   c[l >> 2] = c[x >> 2];
   c[l + 4 >> 2] = c[x + 4 >> 2];
   c[l + 8 >> 2] = c[x + 8 >> 2];
   c[x >> 2] = 0;
   c[x + 4 >> 2] = 0;
   c[x + 8 >> 2] = 0;
   lf(x);
  }
  c[g >> 2] = ub[c[(c[b >> 2] | 0) + 12 >> 2] & 63](b) | 0;
  c[h >> 2] = ub[c[(c[b >> 2] | 0) + 16 >> 2] & 63](b) | 0;
  rb[c[(c[b >> 2] | 0) + 20 >> 2] & 63](y, b);
  if (!(a[j >> 0] & 1)) {
   a[j + 1 >> 0] = 0;
   a[j >> 0] = 0;
  } else {
   a[c[j + 8 >> 2] >> 0] = 0;
   c[j + 4 >> 2] = 0;
  }
  ef(j, 0);
  c[j >> 2] = c[y >> 2];
  c[j + 4 >> 2] = c[y + 4 >> 2];
  c[j + 8 >> 2] = c[y + 8 >> 2];
  c[y >> 2] = 0;
  c[y + 4 >> 2] = 0;
  c[y + 8 >> 2] = 0;
  $e(y);
  rb[c[(c[b >> 2] | 0) + 24 >> 2] & 63](z, b);
  if (!(a[k >> 0] & 1)) a[k >> 0] = 0; else c[c[k + 8 >> 2] >> 2] = 0;
  c[k + 4 >> 2] = 0;
  of(k, 0);
  c[k >> 2] = c[z >> 2];
  c[k + 4 >> 2] = c[z + 4 >> 2];
  c[k + 8 >> 2] = c[z + 8 >> 2];
  c[z >> 2] = 0;
  c[z + 4 >> 2] = 0;
  c[z + 8 >> 2] = 0;
  lf(z);
  C = ub[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0;
 }
 c[m >> 2] = C;
 i = n;
 return;
}

function Th(b, d, e, f, g, h, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0;
 k = i;
 i = i + 16 | 0;
 l = k;
 m = Mk(j, 9328) | 0;
 n = Mk(j, 9484) | 0;
 rb[c[(c[n >> 2] | 0) + 20 >> 2] & 63](l, n);
 c[h >> 2] = f;
 j = a[b >> 0] | 0;
 switch (j << 24 >> 24) {
 case 43:
 case 45:
  {
   o = Ab[c[(c[m >> 2] | 0) + 44 >> 2] & 15](m, j) | 0;
   j = c[h >> 2] | 0;
   c[h >> 2] = j + 4;
   c[j >> 2] = o;
   p = b + 1 | 0;
   break;
  }
 default:
  p = b;
 }
 o = e;
 a : do if ((o - p | 0) > 1 ? (a[p >> 0] | 0) == 48 : 0) {
  j = p + 1 | 0;
  switch (a[j >> 0] | 0) {
  case 88:
  case 120:
   break;
  default:
   {
    q = 4;
    break a;
   }
  }
  r = Ab[c[(c[m >> 2] | 0) + 44 >> 2] & 15](m, 48) | 0;
  s = c[h >> 2] | 0;
  c[h >> 2] = s + 4;
  c[s >> 2] = r;
  r = p + 2 | 0;
  s = Ab[c[(c[m >> 2] | 0) + 44 >> 2] & 15](m, a[j >> 0] | 0) | 0;
  j = c[h >> 2] | 0;
  c[h >> 2] = j + 4;
  c[j >> 2] = s;
  if (r >>> 0 < e >>> 0) {
   s = r;
   while (1) {
    j = a[s >> 0] | 0;
    if (!($c(j, ah() | 0) | 0)) {
     t = r;
     u = s;
     break a;
    }
    j = s + 1 | 0;
    if (j >>> 0 < e >>> 0) s = j; else {
     t = r;
     u = j;
     break;
    }
   }
  } else {
   t = r;
   u = r;
  }
 } else q = 4; while (0);
 b : do if ((q | 0) == 4) if (p >>> 0 < e >>> 0) {
  s = p;
  while (1) {
   j = a[s >> 0] | 0;
   if (!(_c(j, ah() | 0) | 0)) {
    t = p;
    u = s;
    break b;
   }
   j = s + 1 | 0;
   if (j >>> 0 < e >>> 0) s = j; else {
    t = p;
    u = j;
    break;
   }
  }
 } else {
  t = p;
  u = p;
 } while (0);
 p = a[l >> 0] | 0;
 q = l + 4 | 0;
 if (((p & 1) == 0 ? (p & 255) >>> 1 : c[q >> 2] | 0) | 0) {
  if ((t | 0) != (u | 0) ? (p = u + -1 | 0, t >>> 0 < p >>> 0) : 0) {
   s = t;
   r = p;
   do {
    p = a[s >> 0] | 0;
    a[s >> 0] = a[r >> 0] | 0;
    a[r >> 0] = p;
    s = s + 1 | 0;
    r = r + -1 | 0;
   } while (s >>> 0 < r >>> 0);
  }
  r = ub[c[(c[n >> 2] | 0) + 16 >> 2] & 63](n) | 0;
  s = l + 8 | 0;
  p = l + 1 | 0;
  if (t >>> 0 < u >>> 0) {
   j = 0;
   v = 0;
   w = t;
   while (1) {
    x = a[((a[l >> 0] & 1) == 0 ? p : c[s >> 2] | 0) + v >> 0] | 0;
    if (x << 24 >> 24 > 0 & (j | 0) == (x << 24 >> 24 | 0)) {
     x = c[h >> 2] | 0;
     c[h >> 2] = x + 4;
     c[x >> 2] = r;
     x = a[l >> 0] | 0;
     y = 0;
     z = (v >>> 0 < (((x & 1) == 0 ? (x & 255) >>> 1 : c[q >> 2] | 0) + -1 | 0) >>> 0 & 1) + v | 0;
    } else {
     y = j;
     z = v;
    }
    x = Ab[c[(c[m >> 2] | 0) + 44 >> 2] & 15](m, a[w >> 0] | 0) | 0;
    A = c[h >> 2] | 0;
    c[h >> 2] = A + 4;
    c[A >> 2] = x;
    w = w + 1 | 0;
    if (w >>> 0 >= u >>> 0) break; else {
     j = y + 1 | 0;
     v = z;
    }
   }
  }
  z = f + (t - b << 2) | 0;
  v = c[h >> 2] | 0;
  if ((z | 0) != (v | 0)) {
   y = v + -4 | 0;
   if (z >>> 0 < y >>> 0) {
    j = z;
    w = y;
    do {
     y = c[j >> 2] | 0;
     c[j >> 2] = c[w >> 2];
     c[w >> 2] = y;
     j = j + 4 | 0;
     w = w + -4 | 0;
    } while (j >>> 0 < w >>> 0);
    B = m;
    C = v;
   } else {
    B = m;
    C = v;
   }
  } else {
   B = m;
   C = z;
  }
 } else {
  yb[c[(c[m >> 2] | 0) + 48 >> 2] & 7](m, t, u, c[h >> 2] | 0) | 0;
  z = (c[h >> 2] | 0) + (u - t << 2) | 0;
  c[h >> 2] = z;
  B = m;
  C = z;
 }
 c : do if (u >>> 0 < e >>> 0) {
  z = u;
  while (1) {
   t = a[z >> 0] | 0;
   if (t << 24 >> 24 == 46) {
    D = z;
    break;
   }
   v = Ab[c[(c[B >> 2] | 0) + 44 >> 2] & 15](m, t) | 0;
   t = c[h >> 2] | 0;
   w = t + 4 | 0;
   c[h >> 2] = w;
   c[t >> 2] = v;
   v = z + 1 | 0;
   if (v >>> 0 < e >>> 0) z = v; else {
    E = w;
    F = v;
    break c;
   }
  }
  z = ub[c[(c[n >> 2] | 0) + 12 >> 2] & 63](n) | 0;
  v = c[h >> 2] | 0;
  w = v + 4 | 0;
  c[h >> 2] = w;
  c[v >> 2] = z;
  E = w;
  F = D + 1 | 0;
 } else {
  E = C;
  F = u;
 } while (0);
 yb[c[(c[m >> 2] | 0) + 48 >> 2] & 7](m, F, e, E) | 0;
 E = (c[h >> 2] | 0) + (o - F << 2) | 0;
 c[h >> 2] = E;
 c[g >> 2] = (d | 0) == (e | 0) ? E : f + (d - b << 2) | 0;
 $e(l);
 i = k;
 return;
}

function Yj(b, d, e, f, g, h, j, k, l, m) {
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
 n = i;
 i = i + 112 | 0;
 o = n + 100 | 0;
 p = n + 88 | 0;
 q = n + 76 | 0;
 r = n + 64 | 0;
 s = n + 52 | 0;
 t = n + 48 | 0;
 u = n + 36 | 0;
 v = n + 24 | 0;
 w = n + 12 | 0;
 x = n;
 if (b) {
  b = Mk(d, 8944) | 0;
  rb[c[(c[b >> 2] | 0) + 44 >> 2] & 63](o, b);
  y = c[o >> 2] | 0;
  a[e >> 0] = y;
  a[e + 1 >> 0] = y >> 8;
  a[e + 2 >> 0] = y >> 16;
  a[e + 3 >> 0] = y >> 24;
  rb[c[(c[b >> 2] | 0) + 32 >> 2] & 63](p, b);
  if (!(a[l >> 0] & 1)) {
   a[l + 1 >> 0] = 0;
   a[l >> 0] = 0;
  } else {
   a[c[l + 8 >> 2] >> 0] = 0;
   c[l + 4 >> 2] = 0;
  }
  ef(l, 0);
  c[l >> 2] = c[p >> 2];
  c[l + 4 >> 2] = c[p + 4 >> 2];
  c[l + 8 >> 2] = c[p + 8 >> 2];
  c[p >> 2] = 0;
  c[p + 4 >> 2] = 0;
  c[p + 8 >> 2] = 0;
  $e(p);
  rb[c[(c[b >> 2] | 0) + 28 >> 2] & 63](q, b);
  if (!(a[k >> 0] & 1)) {
   a[k + 1 >> 0] = 0;
   a[k >> 0] = 0;
  } else {
   a[c[k + 8 >> 2] >> 0] = 0;
   c[k + 4 >> 2] = 0;
  }
  ef(k, 0);
  c[k >> 2] = c[q >> 2];
  c[k + 4 >> 2] = c[q + 4 >> 2];
  c[k + 8 >> 2] = c[q + 8 >> 2];
  c[q >> 2] = 0;
  c[q + 4 >> 2] = 0;
  c[q + 8 >> 2] = 0;
  $e(q);
  a[f >> 0] = ub[c[(c[b >> 2] | 0) + 12 >> 2] & 63](b) | 0;
  a[g >> 0] = ub[c[(c[b >> 2] | 0) + 16 >> 2] & 63](b) | 0;
  rb[c[(c[b >> 2] | 0) + 20 >> 2] & 63](r, b);
  if (!(a[h >> 0] & 1)) {
   a[h + 1 >> 0] = 0;
   a[h >> 0] = 0;
  } else {
   a[c[h + 8 >> 2] >> 0] = 0;
   c[h + 4 >> 2] = 0;
  }
  ef(h, 0);
  c[h >> 2] = c[r >> 2];
  c[h + 4 >> 2] = c[r + 4 >> 2];
  c[h + 8 >> 2] = c[r + 8 >> 2];
  c[r >> 2] = 0;
  c[r + 4 >> 2] = 0;
  c[r + 8 >> 2] = 0;
  $e(r);
  rb[c[(c[b >> 2] | 0) + 24 >> 2] & 63](s, b);
  if (!(a[j >> 0] & 1)) {
   a[j + 1 >> 0] = 0;
   a[j >> 0] = 0;
  } else {
   a[c[j + 8 >> 2] >> 0] = 0;
   c[j + 4 >> 2] = 0;
  }
  ef(j, 0);
  c[j >> 2] = c[s >> 2];
  c[j + 4 >> 2] = c[s + 4 >> 2];
  c[j + 8 >> 2] = c[s + 8 >> 2];
  c[s >> 2] = 0;
  c[s + 4 >> 2] = 0;
  c[s + 8 >> 2] = 0;
  $e(s);
  z = ub[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0;
 } else {
  b = Mk(d, 8880) | 0;
  rb[c[(c[b >> 2] | 0) + 44 >> 2] & 63](t, b);
  d = c[t >> 2] | 0;
  a[e >> 0] = d;
  a[e + 1 >> 0] = d >> 8;
  a[e + 2 >> 0] = d >> 16;
  a[e + 3 >> 0] = d >> 24;
  rb[c[(c[b >> 2] | 0) + 32 >> 2] & 63](u, b);
  if (!(a[l >> 0] & 1)) {
   a[l + 1 >> 0] = 0;
   a[l >> 0] = 0;
  } else {
   a[c[l + 8 >> 2] >> 0] = 0;
   c[l + 4 >> 2] = 0;
  }
  ef(l, 0);
  c[l >> 2] = c[u >> 2];
  c[l + 4 >> 2] = c[u + 4 >> 2];
  c[l + 8 >> 2] = c[u + 8 >> 2];
  c[u >> 2] = 0;
  c[u + 4 >> 2] = 0;
  c[u + 8 >> 2] = 0;
  $e(u);
  rb[c[(c[b >> 2] | 0) + 28 >> 2] & 63](v, b);
  if (!(a[k >> 0] & 1)) {
   a[k + 1 >> 0] = 0;
   a[k >> 0] = 0;
  } else {
   a[c[k + 8 >> 2] >> 0] = 0;
   c[k + 4 >> 2] = 0;
  }
  ef(k, 0);
  c[k >> 2] = c[v >> 2];
  c[k + 4 >> 2] = c[v + 4 >> 2];
  c[k + 8 >> 2] = c[v + 8 >> 2];
  c[v >> 2] = 0;
  c[v + 4 >> 2] = 0;
  c[v + 8 >> 2] = 0;
  $e(v);
  a[f >> 0] = ub[c[(c[b >> 2] | 0) + 12 >> 2] & 63](b) | 0;
  a[g >> 0] = ub[c[(c[b >> 2] | 0) + 16 >> 2] & 63](b) | 0;
  rb[c[(c[b >> 2] | 0) + 20 >> 2] & 63](w, b);
  if (!(a[h >> 0] & 1)) {
   a[h + 1 >> 0] = 0;
   a[h >> 0] = 0;
  } else {
   a[c[h + 8 >> 2] >> 0] = 0;
   c[h + 4 >> 2] = 0;
  }
  ef(h, 0);
  c[h >> 2] = c[w >> 2];
  c[h + 4 >> 2] = c[w + 4 >> 2];
  c[h + 8 >> 2] = c[w + 8 >> 2];
  c[w >> 2] = 0;
  c[w + 4 >> 2] = 0;
  c[w + 8 >> 2] = 0;
  $e(w);
  rb[c[(c[b >> 2] | 0) + 24 >> 2] & 63](x, b);
  if (!(a[j >> 0] & 1)) {
   a[j + 1 >> 0] = 0;
   a[j >> 0] = 0;
  } else {
   a[c[j + 8 >> 2] >> 0] = 0;
   c[j + 4 >> 2] = 0;
  }
  ef(j, 0);
  c[j >> 2] = c[x >> 2];
  c[j + 4 >> 2] = c[x + 4 >> 2];
  c[j + 8 >> 2] = c[x + 8 >> 2];
  c[x >> 2] = 0;
  c[x + 4 >> 2] = 0;
  c[x + 8 >> 2] = 0;
  $e(x);
  z = ub[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0;
 }
 c[m >> 2] = z;
 i = n;
 return;
}

function Xm(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0;
 g = c[a >> 2] | 0;
 do if (g) {
  h = c[g + 12 >> 2] | 0;
  if ((h | 0) == (c[g + 16 >> 2] | 0)) i = ub[c[(c[g >> 2] | 0) + 36 >> 2] & 63](g) | 0; else i = c[h >> 2] | 0;
  if ((i | 0) == -1) {
   c[a >> 2] = 0;
   j = 1;
   break;
  } else {
   j = (c[a >> 2] | 0) == 0;
   break;
  }
 } else j = 1; while (0);
 i = c[b >> 2] | 0;
 do if (i) {
  g = c[i + 12 >> 2] | 0;
  if ((g | 0) == (c[i + 16 >> 2] | 0)) k = ub[c[(c[i >> 2] | 0) + 36 >> 2] & 63](i) | 0; else k = c[g >> 2] | 0;
  if ((k | 0) != -1) if (j) {
   l = i;
   m = 17;
   break;
  } else {
   m = 16;
   break;
  } else {
   c[b >> 2] = 0;
   m = 14;
   break;
  }
 } else m = 14; while (0);
 if ((m | 0) == 14) if (j) m = 16; else {
  l = 0;
  m = 17;
 }
 a : do if ((m | 0) == 16) {
  c[d >> 2] = c[d >> 2] | 6;
  n = 0;
 } else if ((m | 0) == 17) {
  j = c[a >> 2] | 0;
  i = c[j + 12 >> 2] | 0;
  if ((i | 0) == (c[j + 16 >> 2] | 0)) o = ub[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else o = c[i >> 2] | 0;
  if (!(nb[c[(c[e >> 2] | 0) + 12 >> 2] & 31](e, 2048, o) | 0)) {
   c[d >> 2] = c[d >> 2] | 4;
   n = 0;
   break;
  }
  i = (nb[c[(c[e >> 2] | 0) + 52 >> 2] & 31](e, o, 0) | 0) << 24 >> 24;
  j = c[a >> 2] | 0;
  k = j + 12 | 0;
  g = c[k >> 2] | 0;
  if ((g | 0) == (c[j + 16 >> 2] | 0)) {
   ub[c[(c[j >> 2] | 0) + 40 >> 2] & 63](j) | 0;
   p = f;
   q = l;
   r = l;
   s = i;
  } else {
   c[k >> 2] = g + 4;
   p = f;
   q = l;
   r = l;
   s = i;
  }
  while (1) {
   i = s + -48 | 0;
   g = p + -1 | 0;
   k = c[a >> 2] | 0;
   do if (k) {
    j = c[k + 12 >> 2] | 0;
    if ((j | 0) == (c[k + 16 >> 2] | 0)) t = ub[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else t = c[j >> 2] | 0;
    if ((t | 0) == -1) {
     c[a >> 2] = 0;
     u = 1;
     break;
    } else {
     u = (c[a >> 2] | 0) == 0;
     break;
    }
   } else u = 1; while (0);
   do if (r) {
    k = c[r + 12 >> 2] | 0;
    if ((k | 0) == (c[r + 16 >> 2] | 0)) v = ub[c[(c[r >> 2] | 0) + 36 >> 2] & 63](r) | 0; else v = c[k >> 2] | 0;
    if ((v | 0) == -1) {
     c[b >> 2] = 0;
     w = 0;
     x = 0;
     y = 1;
     break;
    } else {
     w = q;
     x = q;
     y = (q | 0) == 0;
     break;
    }
   } else {
    w = q;
    x = 0;
    y = 1;
   } while (0);
   k = c[a >> 2] | 0;
   if (!((p | 0) > 1 & (u ^ y))) {
    z = k;
    A = w;
    B = i;
    break;
   }
   j = c[k + 12 >> 2] | 0;
   if ((j | 0) == (c[k + 16 >> 2] | 0)) C = ub[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else C = c[j >> 2] | 0;
   if (!(nb[c[(c[e >> 2] | 0) + 12 >> 2] & 31](e, 2048, C) | 0)) {
    n = i;
    break a;
   }
   j = ((nb[c[(c[e >> 2] | 0) + 52 >> 2] & 31](e, C, 0) | 0) << 24 >> 24) + (i * 10 | 0) | 0;
   k = c[a >> 2] | 0;
   h = k + 12 | 0;
   D = c[h >> 2] | 0;
   if ((D | 0) == (c[k + 16 >> 2] | 0)) {
    ub[c[(c[k >> 2] | 0) + 40 >> 2] & 63](k) | 0;
    p = g;
    q = w;
    r = x;
    s = j;
    continue;
   } else {
    c[h >> 2] = D + 4;
    p = g;
    q = w;
    r = x;
    s = j;
    continue;
   }
  }
  do if (z) {
   j = c[z + 12 >> 2] | 0;
   if ((j | 0) == (c[z + 16 >> 2] | 0)) E = ub[c[(c[z >> 2] | 0) + 36 >> 2] & 63](z) | 0; else E = c[j >> 2] | 0;
   if ((E | 0) == -1) {
    c[a >> 2] = 0;
    F = 1;
    break;
   } else {
    F = (c[a >> 2] | 0) == 0;
    break;
   }
  } else F = 1; while (0);
  do if (A) {
   j = c[A + 12 >> 2] | 0;
   if ((j | 0) == (c[A + 16 >> 2] | 0)) G = ub[c[(c[A >> 2] | 0) + 36 >> 2] & 63](A) | 0; else G = c[j >> 2] | 0;
   if ((G | 0) != -1) if (F) {
    n = B;
    break a;
   } else break; else {
    c[b >> 2] = 0;
    m = 60;
    break;
   }
  } else m = 60; while (0);
  if ((m | 0) == 60 ? !F : 0) {
   n = B;
   break;
  }
  c[d >> 2] = c[d >> 2] | 2;
  n = B;
 } while (0);
 return n | 0;
}

function Hh(b, d, e, f, g, h, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0;
 k = i;
 i = i + 16 | 0;
 l = k;
 m = Mk(j, 9336) | 0;
 n = Mk(j, 9476) | 0;
 rb[c[(c[n >> 2] | 0) + 20 >> 2] & 63](l, n);
 c[h >> 2] = f;
 j = a[b >> 0] | 0;
 switch (j << 24 >> 24) {
 case 43:
 case 45:
  {
   o = Ab[c[(c[m >> 2] | 0) + 28 >> 2] & 15](m, j) | 0;
   j = c[h >> 2] | 0;
   c[h >> 2] = j + 1;
   a[j >> 0] = o;
   p = b + 1 | 0;
   break;
  }
 default:
  p = b;
 }
 o = e;
 a : do if ((o - p | 0) > 1 ? (a[p >> 0] | 0) == 48 : 0) {
  j = p + 1 | 0;
  switch (a[j >> 0] | 0) {
  case 88:
  case 120:
   break;
  default:
   {
    q = 4;
    break a;
   }
  }
  r = Ab[c[(c[m >> 2] | 0) + 28 >> 2] & 15](m, 48) | 0;
  s = c[h >> 2] | 0;
  c[h >> 2] = s + 1;
  a[s >> 0] = r;
  r = p + 2 | 0;
  s = Ab[c[(c[m >> 2] | 0) + 28 >> 2] & 15](m, a[j >> 0] | 0) | 0;
  j = c[h >> 2] | 0;
  c[h >> 2] = j + 1;
  a[j >> 0] = s;
  if (r >>> 0 < e >>> 0) {
   s = r;
   while (1) {
    j = a[s >> 0] | 0;
    if (!($c(j, ah() | 0) | 0)) {
     t = r;
     u = s;
     break a;
    }
    j = s + 1 | 0;
    if (j >>> 0 < e >>> 0) s = j; else {
     t = r;
     u = j;
     break;
    }
   }
  } else {
   t = r;
   u = r;
  }
 } else q = 4; while (0);
 b : do if ((q | 0) == 4) if (p >>> 0 < e >>> 0) {
  s = p;
  while (1) {
   j = a[s >> 0] | 0;
   if (!(_c(j, ah() | 0) | 0)) {
    t = p;
    u = s;
    break b;
   }
   j = s + 1 | 0;
   if (j >>> 0 < e >>> 0) s = j; else {
    t = p;
    u = j;
    break;
   }
  }
 } else {
  t = p;
  u = p;
 } while (0);
 p = a[l >> 0] | 0;
 q = l + 4 | 0;
 if (((p & 1) == 0 ? (p & 255) >>> 1 : c[q >> 2] | 0) | 0) {
  if ((t | 0) != (u | 0) ? (p = u + -1 | 0, t >>> 0 < p >>> 0) : 0) {
   s = t;
   r = p;
   do {
    p = a[s >> 0] | 0;
    a[s >> 0] = a[r >> 0] | 0;
    a[r >> 0] = p;
    s = s + 1 | 0;
    r = r + -1 | 0;
   } while (s >>> 0 < r >>> 0);
  }
  r = ub[c[(c[n >> 2] | 0) + 16 >> 2] & 63](n) | 0;
  s = l + 8 | 0;
  p = l + 1 | 0;
  if (t >>> 0 < u >>> 0) {
   j = 0;
   v = 0;
   w = t;
   while (1) {
    x = a[((a[l >> 0] & 1) == 0 ? p : c[s >> 2] | 0) + v >> 0] | 0;
    if (x << 24 >> 24 > 0 & (j | 0) == (x << 24 >> 24 | 0)) {
     x = c[h >> 2] | 0;
     c[h >> 2] = x + 1;
     a[x >> 0] = r;
     x = a[l >> 0] | 0;
     y = 0;
     z = (v >>> 0 < (((x & 1) == 0 ? (x & 255) >>> 1 : c[q >> 2] | 0) + -1 | 0) >>> 0 & 1) + v | 0;
    } else {
     y = j;
     z = v;
    }
    x = Ab[c[(c[m >> 2] | 0) + 28 >> 2] & 15](m, a[w >> 0] | 0) | 0;
    A = c[h >> 2] | 0;
    c[h >> 2] = A + 1;
    a[A >> 0] = x;
    w = w + 1 | 0;
    if (w >>> 0 >= u >>> 0) break; else {
     j = y + 1 | 0;
     v = z;
    }
   }
  }
  z = f + (t - b) | 0;
  v = c[h >> 2] | 0;
  if ((z | 0) != (v | 0) ? (y = v + -1 | 0, z >>> 0 < y >>> 0) : 0) {
   v = z;
   z = y;
   do {
    y = a[v >> 0] | 0;
    a[v >> 0] = a[z >> 0] | 0;
    a[z >> 0] = y;
    v = v + 1 | 0;
    z = z + -1 | 0;
   } while (v >>> 0 < z >>> 0);
   B = m;
  } else B = m;
 } else {
  yb[c[(c[m >> 2] | 0) + 32 >> 2] & 7](m, t, u, c[h >> 2] | 0) | 0;
  c[h >> 2] = (c[h >> 2] | 0) + (u - t);
  B = m;
 }
 c : do if (u >>> 0 < e >>> 0) {
  t = u;
  while (1) {
   z = a[t >> 0] | 0;
   if (z << 24 >> 24 == 46) {
    C = t;
    break;
   }
   v = Ab[c[(c[B >> 2] | 0) + 28 >> 2] & 15](m, z) | 0;
   z = c[h >> 2] | 0;
   c[h >> 2] = z + 1;
   a[z >> 0] = v;
   v = t + 1 | 0;
   if (v >>> 0 < e >>> 0) t = v; else {
    D = v;
    break c;
   }
  }
  t = ub[c[(c[n >> 2] | 0) + 12 >> 2] & 63](n) | 0;
  v = c[h >> 2] | 0;
  c[h >> 2] = v + 1;
  a[v >> 0] = t;
  D = C + 1 | 0;
 } else D = u; while (0);
 yb[c[(c[m >> 2] | 0) + 32 >> 2] & 7](m, D, e, c[h >> 2] | 0) | 0;
 m = (c[h >> 2] | 0) + (o - D) | 0;
 c[h >> 2] = m;
 c[g >> 2] = (d | 0) == (e | 0) ? m : f + (d - b) | 0;
 $e(l);
 i = k;
 return;
}

function Wm(a, e, f, g, h) {
 a = a | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0;
 i = c[a >> 2] | 0;
 do if (i) if ((c[i + 12 >> 2] | 0) == (c[i + 16 >> 2] | 0)) if ((ub[c[(c[i >> 2] | 0) + 36 >> 2] & 63](i) | 0) == -1) {
  c[a >> 2] = 0;
  j = 0;
  break;
 } else {
  j = c[a >> 2] | 0;
  break;
 } else j = i; else j = 0; while (0);
 i = (j | 0) == 0;
 j = c[e >> 2] | 0;
 do if (j) {
  if ((c[j + 12 >> 2] | 0) == (c[j + 16 >> 2] | 0) ? (ub[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0) == -1 : 0) {
   c[e >> 2] = 0;
   k = 11;
   break;
  }
  if (i) {
   l = j;
   k = 13;
  } else k = 12;
 } else k = 11; while (0);
 if ((k | 0) == 11) if (i) k = 12; else {
  l = 0;
  k = 13;
 }
 a : do if ((k | 0) == 12) {
  c[f >> 2] = c[f >> 2] | 6;
  m = 0;
 } else if ((k | 0) == 13) {
  i = c[a >> 2] | 0;
  j = c[i + 12 >> 2] | 0;
  if ((j | 0) == (c[i + 16 >> 2] | 0)) n = ub[c[(c[i >> 2] | 0) + 36 >> 2] & 63](i) | 0; else n = d[j >> 0] | 0;
  j = n & 255;
  if (j << 24 >> 24 > -1 ? (i = g + 8 | 0, (b[(c[i >> 2] | 0) + (n << 24 >> 24 << 1) >> 1] & 2048) != 0) : 0) {
   o = (nb[c[(c[g >> 2] | 0) + 36 >> 2] & 31](g, j, 0) | 0) << 24 >> 24;
   j = c[a >> 2] | 0;
   p = j + 12 | 0;
   q = c[p >> 2] | 0;
   if ((q | 0) == (c[j + 16 >> 2] | 0)) {
    ub[c[(c[j >> 2] | 0) + 40 >> 2] & 63](j) | 0;
    r = h;
    s = l;
    t = l;
    u = o;
   } else {
    c[p >> 2] = q + 1;
    r = h;
    s = l;
    t = l;
    u = o;
   }
   while (1) {
    o = u + -48 | 0;
    q = r + -1 | 0;
    p = c[a >> 2] | 0;
    do if (p) if ((c[p + 12 >> 2] | 0) == (c[p + 16 >> 2] | 0)) if ((ub[c[(c[p >> 2] | 0) + 36 >> 2] & 63](p) | 0) == -1) {
     c[a >> 2] = 0;
     v = 0;
     break;
    } else {
     v = c[a >> 2] | 0;
     break;
    } else v = p; else v = 0; while (0);
    p = (v | 0) == 0;
    if (t) if ((c[t + 12 >> 2] | 0) == (c[t + 16 >> 2] | 0)) if ((ub[c[(c[t >> 2] | 0) + 36 >> 2] & 63](t) | 0) == -1) {
     c[e >> 2] = 0;
     w = 0;
     x = 0;
    } else {
     w = s;
     x = s;
    } else {
     w = s;
     x = t;
    } else {
     w = s;
     x = 0;
    }
    j = c[a >> 2] | 0;
    if (!((r | 0) > 1 & (p ^ (x | 0) == 0))) {
     y = j;
     z = w;
     A = o;
     break;
    }
    p = c[j + 12 >> 2] | 0;
    if ((p | 0) == (c[j + 16 >> 2] | 0)) B = ub[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else B = d[p >> 0] | 0;
    p = B & 255;
    if (p << 24 >> 24 <= -1) {
     m = o;
     break a;
    }
    if (!(b[(c[i >> 2] | 0) + (B << 24 >> 24 << 1) >> 1] & 2048)) {
     m = o;
     break a;
    }
    j = ((nb[c[(c[g >> 2] | 0) + 36 >> 2] & 31](g, p, 0) | 0) << 24 >> 24) + (o * 10 | 0) | 0;
    p = c[a >> 2] | 0;
    C = p + 12 | 0;
    D = c[C >> 2] | 0;
    if ((D | 0) == (c[p + 16 >> 2] | 0)) {
     ub[c[(c[p >> 2] | 0) + 40 >> 2] & 63](p) | 0;
     r = q;
     s = w;
     t = x;
     u = j;
     continue;
    } else {
     c[C >> 2] = D + 1;
     r = q;
     s = w;
     t = x;
     u = j;
     continue;
    }
   }
   do if (y) if ((c[y + 12 >> 2] | 0) == (c[y + 16 >> 2] | 0)) if ((ub[c[(c[y >> 2] | 0) + 36 >> 2] & 63](y) | 0) == -1) {
    c[a >> 2] = 0;
    E = 0;
    break;
   } else {
    E = c[a >> 2] | 0;
    break;
   } else E = y; else E = 0; while (0);
   i = (E | 0) == 0;
   do if (z) {
    if ((c[z + 12 >> 2] | 0) == (c[z + 16 >> 2] | 0) ? (ub[c[(c[z >> 2] | 0) + 36 >> 2] & 63](z) | 0) == -1 : 0) {
     c[e >> 2] = 0;
     k = 50;
     break;
    }
    if (i) {
     m = A;
     break a;
    }
   } else k = 50; while (0);
   if ((k | 0) == 50 ? !i : 0) {
    m = A;
    break;
   }
   c[f >> 2] = c[f >> 2] | 2;
   m = A;
   break;
  }
  c[f >> 2] = c[f >> 2] | 4;
  m = 0;
 } while (0);
 return m | 0;
}

function dk(b, d, e, f, g, h, j, k, l, m) {
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
 n = i;
 i = i + 112 | 0;
 o = n + 100 | 0;
 p = n + 88 | 0;
 q = n + 76 | 0;
 r = n + 64 | 0;
 s = n + 52 | 0;
 t = n + 48 | 0;
 u = n + 36 | 0;
 v = n + 24 | 0;
 w = n + 12 | 0;
 x = n;
 if (b) {
  b = Mk(d, 9072) | 0;
  rb[c[(c[b >> 2] | 0) + 44 >> 2] & 63](o, b);
  y = c[o >> 2] | 0;
  a[e >> 0] = y;
  a[e + 1 >> 0] = y >> 8;
  a[e + 2 >> 0] = y >> 16;
  a[e + 3 >> 0] = y >> 24;
  rb[c[(c[b >> 2] | 0) + 32 >> 2] & 63](p, b);
  if (!(a[l >> 0] & 1)) a[l >> 0] = 0; else c[c[l + 8 >> 2] >> 2] = 0;
  c[l + 4 >> 2] = 0;
  of(l, 0);
  c[l >> 2] = c[p >> 2];
  c[l + 4 >> 2] = c[p + 4 >> 2];
  c[l + 8 >> 2] = c[p + 8 >> 2];
  c[p >> 2] = 0;
  c[p + 4 >> 2] = 0;
  c[p + 8 >> 2] = 0;
  lf(p);
  rb[c[(c[b >> 2] | 0) + 28 >> 2] & 63](q, b);
  if (!(a[k >> 0] & 1)) a[k >> 0] = 0; else c[c[k + 8 >> 2] >> 2] = 0;
  c[k + 4 >> 2] = 0;
  of(k, 0);
  c[k >> 2] = c[q >> 2];
  c[k + 4 >> 2] = c[q + 4 >> 2];
  c[k + 8 >> 2] = c[q + 8 >> 2];
  c[q >> 2] = 0;
  c[q + 4 >> 2] = 0;
  c[q + 8 >> 2] = 0;
  lf(q);
  c[f >> 2] = ub[c[(c[b >> 2] | 0) + 12 >> 2] & 63](b) | 0;
  c[g >> 2] = ub[c[(c[b >> 2] | 0) + 16 >> 2] & 63](b) | 0;
  rb[c[(c[b >> 2] | 0) + 20 >> 2] & 63](r, b);
  if (!(a[h >> 0] & 1)) {
   a[h + 1 >> 0] = 0;
   a[h >> 0] = 0;
  } else {
   a[c[h + 8 >> 2] >> 0] = 0;
   c[h + 4 >> 2] = 0;
  }
  ef(h, 0);
  c[h >> 2] = c[r >> 2];
  c[h + 4 >> 2] = c[r + 4 >> 2];
  c[h + 8 >> 2] = c[r + 8 >> 2];
  c[r >> 2] = 0;
  c[r + 4 >> 2] = 0;
  c[r + 8 >> 2] = 0;
  $e(r);
  rb[c[(c[b >> 2] | 0) + 24 >> 2] & 63](s, b);
  if (!(a[j >> 0] & 1)) a[j >> 0] = 0; else c[c[j + 8 >> 2] >> 2] = 0;
  c[j + 4 >> 2] = 0;
  of(j, 0);
  c[j >> 2] = c[s >> 2];
  c[j + 4 >> 2] = c[s + 4 >> 2];
  c[j + 8 >> 2] = c[s + 8 >> 2];
  c[s >> 2] = 0;
  c[s + 4 >> 2] = 0;
  c[s + 8 >> 2] = 0;
  lf(s);
  z = ub[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0;
 } else {
  b = Mk(d, 9008) | 0;
  rb[c[(c[b >> 2] | 0) + 44 >> 2] & 63](t, b);
  d = c[t >> 2] | 0;
  a[e >> 0] = d;
  a[e + 1 >> 0] = d >> 8;
  a[e + 2 >> 0] = d >> 16;
  a[e + 3 >> 0] = d >> 24;
  rb[c[(c[b >> 2] | 0) + 32 >> 2] & 63](u, b);
  if (!(a[l >> 0] & 1)) a[l >> 0] = 0; else c[c[l + 8 >> 2] >> 2] = 0;
  c[l + 4 >> 2] = 0;
  of(l, 0);
  c[l >> 2] = c[u >> 2];
  c[l + 4 >> 2] = c[u + 4 >> 2];
  c[l + 8 >> 2] = c[u + 8 >> 2];
  c[u >> 2] = 0;
  c[u + 4 >> 2] = 0;
  c[u + 8 >> 2] = 0;
  lf(u);
  rb[c[(c[b >> 2] | 0) + 28 >> 2] & 63](v, b);
  if (!(a[k >> 0] & 1)) a[k >> 0] = 0; else c[c[k + 8 >> 2] >> 2] = 0;
  c[k + 4 >> 2] = 0;
  of(k, 0);
  c[k >> 2] = c[v >> 2];
  c[k + 4 >> 2] = c[v + 4 >> 2];
  c[k + 8 >> 2] = c[v + 8 >> 2];
  c[v >> 2] = 0;
  c[v + 4 >> 2] = 0;
  c[v + 8 >> 2] = 0;
  lf(v);
  c[f >> 2] = ub[c[(c[b >> 2] | 0) + 12 >> 2] & 63](b) | 0;
  c[g >> 2] = ub[c[(c[b >> 2] | 0) + 16 >> 2] & 63](b) | 0;
  rb[c[(c[b >> 2] | 0) + 20 >> 2] & 63](w, b);
  if (!(a[h >> 0] & 1)) {
   a[h + 1 >> 0] = 0;
   a[h >> 0] = 0;
  } else {
   a[c[h + 8 >> 2] >> 0] = 0;
   c[h + 4 >> 2] = 0;
  }
  ef(h, 0);
  c[h >> 2] = c[w >> 2];
  c[h + 4 >> 2] = c[w + 4 >> 2];
  c[h + 8 >> 2] = c[w + 8 >> 2];
  c[w >> 2] = 0;
  c[w + 4 >> 2] = 0;
  c[w + 8 >> 2] = 0;
  $e(w);
  rb[c[(c[b >> 2] | 0) + 24 >> 2] & 63](x, b);
  if (!(a[j >> 0] & 1)) a[j >> 0] = 0; else c[c[j + 8 >> 2] >> 2] = 0;
  c[j + 4 >> 2] = 0;
  of(j, 0);
  c[j >> 2] = c[x >> 2];
  c[j + 4 >> 2] = c[x + 4 >> 2];
  c[j + 8 >> 2] = c[x + 8 >> 2];
  c[x >> 2] = 0;
  c[x + 4 >> 2] = 0;
  c[x + 8 >> 2] = 0;
  lf(x);
  z = ub[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0;
 }
 c[m >> 2] = z;
 i = n;
 return;
}

function ed(a, b) {
 a = +a;
 b = +b;
 var d = 0, e = 0, f = 0, g = 0, i = 0, j = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0.0, V = 0, W = 0, X = 0, Y = 0, Z = 0, _ = 0, $ = 0, aa = 0, ba = 0.0;
 h[k >> 3] = a;
 d = c[k >> 2] | 0;
 e = c[k + 4 >> 2] | 0;
 h[k >> 3] = b;
 f = c[k >> 2] | 0;
 g = c[k + 4 >> 2] | 0;
 i = qo(d | 0, e | 0, 52) | 0;
 j = i & 2047;
 i = qo(f | 0, g | 0, 52) | 0;
 l = i & 2047;
 i = e & -2147483648;
 m = so(f | 0, g | 0, 1) | 0;
 n = D;
 a : do if (!((m | 0) == 0 & (n | 0) == 0) ? (o = g & 2147483647, !(o >>> 0 > 2146435072 | (o | 0) == 2146435072 & f >>> 0 > 0 | (j | 0) == 2047)) : 0) {
  o = so(d | 0, e | 0, 1) | 0;
  p = D;
  if (!(p >>> 0 > n >>> 0 | (p | 0) == (n | 0) & o >>> 0 > m >>> 0)) return +((o | 0) == (m | 0) & (p | 0) == (n | 0) ? a * 0.0 : a);
  if (!j) {
   p = so(d | 0, e | 0, 12) | 0;
   o = D;
   if ((o | 0) > -1 | (o | 0) == -1 & p >>> 0 > 4294967295) {
    q = p;
    p = o;
    o = 0;
    while (1) {
     r = o + -1 | 0;
     q = so(q | 0, p | 0, 1) | 0;
     p = D;
     if (!((p | 0) > -1 | (p | 0) == -1 & q >>> 0 > 4294967295)) {
      s = r;
      break;
     } else o = r;
    }
   } else s = 0;
   o = so(d | 0, e | 0, 1 - s | 0) | 0;
   t = o;
   u = D;
   v = s;
  } else {
   t = d;
   u = e & 1048575 | 1048576;
   v = j;
  }
  if (!l) {
   o = so(f | 0, g | 0, 12) | 0;
   q = D;
   if ((q | 0) > -1 | (q | 0) == -1 & o >>> 0 > 4294967295) {
    p = o;
    o = q;
    q = 0;
    while (1) {
     r = q + -1 | 0;
     p = so(p | 0, o | 0, 1) | 0;
     o = D;
     if (!((o | 0) > -1 | (o | 0) == -1 & p >>> 0 > 4294967295)) {
      w = r;
      break;
     } else q = r;
    }
   } else w = 0;
   q = so(f | 0, g | 0, 1 - w | 0) | 0;
   x = q;
   y = D;
   z = w;
  } else {
   x = f;
   y = g & 1048575 | 1048576;
   z = l;
  }
  q = no(t | 0, u | 0, x | 0, y | 0) | 0;
  p = D;
  o = (p | 0) > -1 | (p | 0) == -1 & q >>> 0 > 4294967295;
  b : do if ((v | 0) > (z | 0)) {
   r = o;
   A = q;
   B = p;
   C = t;
   E = u;
   F = v;
   while (1) {
    if (r) if ((C | 0) == (x | 0) & (E | 0) == (y | 0)) break; else {
     G = A;
     H = B;
    } else {
     G = C;
     H = E;
    }
    I = so(G | 0, H | 0, 1) | 0;
    J = D;
    K = F + -1 | 0;
    L = no(I | 0, J | 0, x | 0, y | 0) | 0;
    M = D;
    N = (M | 0) > -1 | (M | 0) == -1 & L >>> 0 > 4294967295;
    if ((K | 0) > (z | 0)) {
     r = N;
     A = L;
     B = M;
     C = I;
     E = J;
     F = K;
    } else {
     O = N;
     P = I;
     Q = J;
     R = L;
     S = M;
     T = K;
     break b;
    }
   }
   U = a * 0.0;
   break a;
  } else {
   O = o;
   P = t;
   Q = u;
   R = q;
   S = p;
   T = v;
  } while (0);
  if (O) if ((P | 0) == (x | 0) & (Q | 0) == (y | 0)) {
   U = a * 0.0;
   break;
  } else {
   V = S;
   W = R;
  } else {
   V = Q;
   W = P;
  }
  if (V >>> 0 < 1048576 | (V | 0) == 1048576 & W >>> 0 < 0) {
   p = W;
   q = V;
   o = T;
   while (1) {
    F = so(p | 0, q | 0, 1) | 0;
    E = D;
    C = o + -1 | 0;
    if (E >>> 0 < 1048576 | (E | 0) == 1048576 & F >>> 0 < 0) {
     p = F;
     q = E;
     o = C;
    } else {
     X = F;
     Y = E;
     Z = C;
     break;
    }
   }
  } else {
   X = W;
   Y = V;
   Z = T;
  }
  if ((Z | 0) > 0) {
   o = po(X | 0, Y | 0, 0, -1048576) | 0;
   q = D;
   p = so(Z | 0, 0, 52) | 0;
   _ = q | D;
   $ = o | p;
  } else {
   p = qo(X | 0, Y | 0, 1 - Z | 0) | 0;
   _ = D;
   $ = p;
  }
  c[k >> 2] = $;
  c[k + 4 >> 2] = _ | i;
  U = +h[k >> 3];
 } else aa = 3; while (0);
 if ((aa | 0) == 3) {
  ba = a * b;
  U = ba / ba;
 }
 return +U;
}

function Kn(b, c, e, f, g) {
 b = b | 0;
 c = c | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0;
 h = c;
 if ((((g & 4 | 0) != 0 ? (h - b | 0) > 2 : 0) ? (a[b >> 0] | 0) == -17 : 0) ? (a[b + 1 >> 0] | 0) == -69 : 0) i = (a[b + 2 >> 0] | 0) == -65 ? b + 3 | 0 : b; else i = b;
 a : do if ((e | 0) != 0 & i >>> 0 < c >>> 0) {
  g = i;
  j = 0;
  b : while (1) {
   k = a[g >> 0] | 0;
   l = k & 255;
   if (l >>> 0 > f >>> 0) {
    m = g;
    n = 42;
    break a;
   }
   do if (k << 24 >> 24 > -1) {
    o = g + 1 | 0;
    p = j;
   } else {
    if ((k & 255) < 194) {
     m = g;
     n = 42;
     break a;
    }
    if ((k & 255) < 224) {
     if ((h - g | 0) < 2) {
      m = g;
      n = 42;
      break a;
     }
     q = d[g + 1 >> 0] | 0;
     if ((q & 192 | 0) != 128) {
      m = g;
      n = 42;
      break a;
     }
     if ((q & 63 | l << 6 & 1984) >>> 0 > f >>> 0) {
      m = g;
      n = 42;
      break a;
     }
     o = g + 2 | 0;
     p = j;
     break;
    }
    if ((k & 255) < 240) {
     q = g;
     if ((h - q | 0) < 3) {
      m = g;
      n = 42;
      break a;
     }
     r = a[g + 1 >> 0] | 0;
     s = a[g + 2 >> 0] | 0;
     switch (l | 0) {
     case 224:
      {
       if ((r & -32) << 24 >> 24 != -96) {
        t = q;
        n = 20;
        break b;
       }
       break;
      }
     case 237:
      {
       if ((r & -32) << 24 >> 24 != -128) {
        u = q;
        n = 22;
        break b;
       }
       break;
      }
     default:
      if ((r & -64) << 24 >> 24 != -128) {
       v = q;
       n = 24;
       break b;
      }
     }
     q = s & 255;
     if ((q & 192 | 0) != 128) {
      m = g;
      n = 42;
      break a;
     }
     if (((r & 255) << 6 & 4032 | l << 12 & 61440 | q & 63) >>> 0 > f >>> 0) {
      m = g;
      n = 42;
      break a;
     }
     o = g + 3 | 0;
     p = j;
     break;
    }
    if ((k & 255) >= 245) {
     m = g;
     n = 42;
     break a;
    }
    q = g;
    if ((e - j | 0) >>> 0 < 2 | (h - q | 0) < 4) {
     m = g;
     n = 42;
     break a;
    }
    r = a[g + 1 >> 0] | 0;
    s = a[g + 2 >> 0] | 0;
    w = a[g + 3 >> 0] | 0;
    switch (l | 0) {
    case 240:
     {
      if ((r + 112 & 255) >= 48) {
       x = q;
       n = 32;
       break b;
      }
      break;
     }
    case 244:
     {
      if ((r & -16) << 24 >> 24 != -128) {
       y = q;
       n = 34;
       break b;
      }
      break;
     }
    default:
     if ((r & -64) << 24 >> 24 != -128) {
      z = q;
      n = 36;
      break b;
     }
    }
    q = s & 255;
    if ((q & 192 | 0) != 128) {
     m = g;
     n = 42;
     break a;
    }
    s = w & 255;
    if ((s & 192 | 0) != 128) {
     m = g;
     n = 42;
     break a;
    }
    if (((r & 255) << 12 & 258048 | l << 18 & 1835008 | q << 6 & 4032 | s & 63) >>> 0 > f >>> 0) {
     m = g;
     n = 42;
     break a;
    }
    o = g + 4 | 0;
    p = j + 1 | 0;
   } while (0);
   j = p + 1 | 0;
   if (!(j >>> 0 < e >>> 0 & o >>> 0 < c >>> 0)) {
    m = o;
    n = 42;
    break a;
   } else g = o;
  }
  if ((n | 0) == 20) {
   A = t - b | 0;
   break;
  } else if ((n | 0) == 22) {
   A = u - b | 0;
   break;
  } else if ((n | 0) == 24) {
   A = v - b | 0;
   break;
  } else if ((n | 0) == 32) {
   A = x - b | 0;
   break;
  } else if ((n | 0) == 34) {
   A = y - b | 0;
   break;
  } else if ((n | 0) == 36) {
   A = z - b | 0;
   break;
  }
 } else {
  m = i;
  n = 42;
 } while (0);
 if ((n | 0) == 42) A = m - b | 0;
 return A | 0;
}

function Co(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, E = 0, F = 0, G = 0, H = 0;
 g = a;
 h = b;
 i = h;
 j = d;
 k = e;
 l = k;
 if (!i) {
  m = (f | 0) != 0;
  if (!l) {
   if (m) {
    c[f >> 2] = (g >>> 0) % (j >>> 0);
    c[f + 4 >> 2] = 0;
   }
   n = 0;
   o = (g >>> 0) / (j >>> 0) >>> 0;
   return (D = n, o) | 0;
  } else {
   if (!m) {
    n = 0;
    o = 0;
    return (D = n, o) | 0;
   }
   c[f >> 2] = a | 0;
   c[f + 4 >> 2] = b & 0;
   n = 0;
   o = 0;
   return (D = n, o) | 0;
  }
 }
 m = (l | 0) == 0;
 do if (j) {
  if (!m) {
   p = (ba(l | 0) | 0) - (ba(i | 0) | 0) | 0;
   if (p >>> 0 <= 31) {
    q = p + 1 | 0;
    r = 31 - p | 0;
    s = p - 31 >> 31;
    t = q;
    u = g >>> (q >>> 0) & s | i << r;
    v = i >>> (q >>> 0) & s;
    w = 0;
    x = g << r;
    break;
   }
   if (!f) {
    n = 0;
    o = 0;
    return (D = n, o) | 0;
   }
   c[f >> 2] = a | 0;
   c[f + 4 >> 2] = h | b & 0;
   n = 0;
   o = 0;
   return (D = n, o) | 0;
  }
  r = j - 1 | 0;
  if (r & j) {
   s = (ba(j | 0) | 0) + 33 - (ba(i | 0) | 0) | 0;
   q = 64 - s | 0;
   p = 32 - s | 0;
   y = p >> 31;
   z = s - 32 | 0;
   A = z >> 31;
   t = s;
   u = p - 1 >> 31 & i >>> (z >>> 0) | (i << p | g >>> (s >>> 0)) & A;
   v = A & i >>> (s >>> 0);
   w = g << q & y;
   x = (i << q | g >>> (z >>> 0)) & y | g << p & s - 33 >> 31;
   break;
  }
  if (f) {
   c[f >> 2] = r & g;
   c[f + 4 >> 2] = 0;
  }
  if ((j | 0) == 1) {
   n = h | b & 0;
   o = a | 0 | 0;
   return (D = n, o) | 0;
  } else {
   r = vo(j | 0) | 0;
   n = i >>> (r >>> 0) | 0;
   o = i << 32 - r | g >>> (r >>> 0) | 0;
   return (D = n, o) | 0;
  }
 } else {
  if (m) {
   if (f) {
    c[f >> 2] = (i >>> 0) % (j >>> 0);
    c[f + 4 >> 2] = 0;
   }
   n = 0;
   o = (i >>> 0) / (j >>> 0) >>> 0;
   return (D = n, o) | 0;
  }
  if (!g) {
   if (f) {
    c[f >> 2] = 0;
    c[f + 4 >> 2] = (i >>> 0) % (l >>> 0);
   }
   n = 0;
   o = (i >>> 0) / (l >>> 0) >>> 0;
   return (D = n, o) | 0;
  }
  r = l - 1 | 0;
  if (!(r & l)) {
   if (f) {
    c[f >> 2] = a | 0;
    c[f + 4 >> 2] = r & i | b & 0;
   }
   n = 0;
   o = i >>> ((vo(l | 0) | 0) >>> 0);
   return (D = n, o) | 0;
  }
  r = (ba(l | 0) | 0) - (ba(i | 0) | 0) | 0;
  if (r >>> 0 <= 30) {
   s = r + 1 | 0;
   p = 31 - r | 0;
   t = s;
   u = i << p | g >>> (s >>> 0);
   v = i >>> (s >>> 0);
   w = 0;
   x = g << p;
   break;
  }
  if (!f) {
   n = 0;
   o = 0;
   return (D = n, o) | 0;
  }
  c[f >> 2] = a | 0;
  c[f + 4 >> 2] = h | b & 0;
  n = 0;
  o = 0;
  return (D = n, o) | 0;
 } while (0);
 if (!t) {
  B = x;
  C = w;
  E = v;
  F = u;
  G = 0;
  H = 0;
 } else {
  b = d | 0 | 0;
  d = k | e & 0;
  e = po(b | 0, d | 0, -1, -1) | 0;
  k = D;
  h = x;
  x = w;
  w = v;
  v = u;
  u = t;
  t = 0;
  do {
   a = h;
   h = x >>> 31 | h << 1;
   x = t | x << 1;
   g = v << 1 | a >>> 31 | 0;
   a = v >>> 31 | w << 1 | 0;
   no(e, k, g, a) | 0;
   i = D;
   l = i >> 31 | ((i | 0) < 0 ? -1 : 0) << 1;
   t = l & 1;
   v = no(g, a, l & b, (((i | 0) < 0 ? -1 : 0) >> 31 | ((i | 0) < 0 ? -1 : 0) << 1) & d) | 0;
   w = D;
   u = u - 1 | 0;
  } while ((u | 0) != 0);
  B = h;
  C = x;
  E = w;
  F = v;
  G = 0;
  H = t;
 }
 t = C;
 C = 0;
 if (f) {
  c[f >> 2] = F;
  c[f + 4 >> 2] = E;
 }
 n = (t | 0) >>> 31 | (B | C) << 1 | (C << 1 | t >>> 31) & 0 | G;
 o = (t << 1 | 0 >>> 31) & -2 | H;
 return (D = n, o) | 0;
}

function Nn(b, c, e, f, g) {
 b = b | 0;
 c = c | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0;
 h = c;
 if ((((g & 4 | 0) != 0 ? (h - b | 0) > 2 : 0) ? (a[b >> 0] | 0) == -17 : 0) ? (a[b + 1 >> 0] | 0) == -69 : 0) i = (a[b + 2 >> 0] | 0) == -65 ? b + 3 | 0 : b; else i = b;
 a : do if ((e | 0) != 0 & i >>> 0 < c >>> 0) {
  g = i;
  j = 0;
  b : while (1) {
   k = a[g >> 0] | 0;
   l = k & 255;
   do if (k << 24 >> 24 > -1) {
    if (l >>> 0 > f >>> 0) {
     m = g;
     n = 42;
     break a;
    }
    o = g + 1 | 0;
   } else {
    if ((k & 255) < 194) {
     m = g;
     n = 42;
     break a;
    }
    if ((k & 255) < 224) {
     if ((h - g | 0) < 2) {
      m = g;
      n = 42;
      break a;
     }
     p = d[g + 1 >> 0] | 0;
     if ((p & 192 | 0) != 128) {
      m = g;
      n = 42;
      break a;
     }
     if ((p & 63 | l << 6 & 1984) >>> 0 > f >>> 0) {
      m = g;
      n = 42;
      break a;
     }
     o = g + 2 | 0;
     break;
    }
    if ((k & 255) < 240) {
     p = g;
     if ((h - p | 0) < 3) {
      m = g;
      n = 42;
      break a;
     }
     q = a[g + 1 >> 0] | 0;
     r = a[g + 2 >> 0] | 0;
     switch (l | 0) {
     case 224:
      {
       if ((q & -32) << 24 >> 24 != -96) {
        s = p;
        n = 20;
        break b;
       }
       break;
      }
     case 237:
      {
       if ((q & -32) << 24 >> 24 != -128) {
        t = p;
        n = 22;
        break b;
       }
       break;
      }
     default:
      if ((q & -64) << 24 >> 24 != -128) {
       u = p;
       n = 24;
       break b;
      }
     }
     p = r & 255;
     if ((p & 192 | 0) != 128) {
      m = g;
      n = 42;
      break a;
     }
     if (((q & 255) << 6 & 4032 | l << 12 & 61440 | p & 63) >>> 0 > f >>> 0) {
      m = g;
      n = 42;
      break a;
     }
     o = g + 3 | 0;
     break;
    }
    if ((k & 255) >= 245) {
     m = g;
     n = 42;
     break a;
    }
    p = g;
    if ((h - p | 0) < 4) {
     m = g;
     n = 42;
     break a;
    }
    q = a[g + 1 >> 0] | 0;
    r = a[g + 2 >> 0] | 0;
    v = a[g + 3 >> 0] | 0;
    switch (l | 0) {
    case 240:
     {
      if ((q + 112 & 255) >= 48) {
       w = p;
       n = 32;
       break b;
      }
      break;
     }
    case 244:
     {
      if ((q & -16) << 24 >> 24 != -128) {
       x = p;
       n = 34;
       break b;
      }
      break;
     }
    default:
     if ((q & -64) << 24 >> 24 != -128) {
      y = p;
      n = 36;
      break b;
     }
    }
    p = r & 255;
    if ((p & 192 | 0) != 128) {
     m = g;
     n = 42;
     break a;
    }
    r = v & 255;
    if ((r & 192 | 0) != 128) {
     m = g;
     n = 42;
     break a;
    }
    if (((q & 255) << 12 & 258048 | l << 18 & 1835008 | p << 6 & 4032 | r & 63) >>> 0 > f >>> 0) {
     m = g;
     n = 42;
     break a;
    }
    o = g + 4 | 0;
   } while (0);
   j = j + 1 | 0;
   if (!(j >>> 0 < e >>> 0 & o >>> 0 < c >>> 0)) {
    m = o;
    n = 42;
    break a;
   } else g = o;
  }
  if ((n | 0) == 20) {
   z = s - b | 0;
   break;
  } else if ((n | 0) == 22) {
   z = t - b | 0;
   break;
  } else if ((n | 0) == 24) {
   z = u - b | 0;
   break;
  } else if ((n | 0) == 32) {
   z = w - b | 0;
   break;
  } else if ((n | 0) == 34) {
   z = x - b | 0;
   break;
  } else if ((n | 0) == 36) {
   z = y - b | 0;
   break;
  }
 } else {
  m = i;
  n = 42;
 } while (0);
 if ((n | 0) == 42) z = m - b | 0;
 return z | 0;
}

function Sm(b, d, e, f, g, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0;
 b = i;
 i = i + 352 | 0;
 k = b + 208 | 0;
 l = b + 40 | 0;
 m = b + 36 | 0;
 n = b + 24 | 0;
 o = b + 12 | 0;
 p = b + 8 | 0;
 q = b + 48 | 0;
 r = b + 4 | 0;
 s = b;
 t = b + 337 | 0;
 u = b + 336 | 0;
 th(n, f, k, l, m);
 c[o >> 2] = 0;
 c[o + 4 >> 2] = 0;
 c[o + 8 >> 2] = 0;
 if (!(a[o >> 0] & 1)) v = 10; else v = (c[o >> 2] & -2) + -1 | 0;
 cf(o, v, 0);
 v = o + 8 | 0;
 f = o + 1 | 0;
 w = (a[o >> 0] & 1) == 0 ? f : c[v >> 2] | 0;
 c[p >> 2] = w;
 c[r >> 2] = q;
 c[s >> 2] = 0;
 a[t >> 0] = 1;
 a[u >> 0] = 69;
 x = o + 4 | 0;
 y = c[l >> 2] | 0;
 l = c[m >> 2] | 0;
 m = c[d >> 2] | 0;
 z = w;
 a : while (1) {
  if (m) {
   w = c[m + 12 >> 2] | 0;
   if ((w | 0) == (c[m + 16 >> 2] | 0)) A = ub[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0; else A = c[w >> 2] | 0;
   if ((A | 0) == -1) {
    c[d >> 2] = 0;
    B = 0;
    C = 1;
   } else {
    B = m;
    C = 0;
   }
  } else {
   B = 0;
   C = 1;
  }
  w = c[e >> 2] | 0;
  do if (w) {
   D = c[w + 12 >> 2] | 0;
   if ((D | 0) == (c[w + 16 >> 2] | 0)) E = ub[c[(c[w >> 2] | 0) + 36 >> 2] & 63](w) | 0; else E = c[D >> 2] | 0;
   if ((E | 0) != -1) if (C) {
    F = w;
    break;
   } else {
    G = B;
    H = w;
    I = z;
    break a;
   } else {
    c[e >> 2] = 0;
    J = 16;
    break;
   }
  } else J = 16; while (0);
  if ((J | 0) == 16) {
   J = 0;
   if (C) {
    G = B;
    H = 0;
    I = z;
    break;
   } else F = 0;
  }
  w = a[o >> 0] | 0;
  D = (w & 1) == 0 ? (w & 255) >>> 1 : c[x >> 2] | 0;
  if ((c[p >> 2] | 0) == (z + D | 0)) {
   cf(o, D << 1, 0);
   if (!(a[o >> 0] & 1)) K = 10; else K = (c[o >> 2] & -2) + -1 | 0;
   cf(o, K, 0);
   w = (a[o >> 0] & 1) == 0 ? f : c[v >> 2] | 0;
   c[p >> 2] = w + D;
   L = w;
  } else L = z;
  w = B + 12 | 0;
  D = c[w >> 2] | 0;
  M = B + 16 | 0;
  if ((D | 0) == (c[M >> 2] | 0)) N = ub[c[(c[B >> 2] | 0) + 36 >> 2] & 63](B) | 0; else N = c[D >> 2] | 0;
  if (uh(N, t, u, L, p, y, l, n, q, r, s, k) | 0) {
   G = B;
   H = F;
   I = L;
   break;
  }
  D = c[w >> 2] | 0;
  if ((D | 0) == (c[M >> 2] | 0)) {
   ub[c[(c[B >> 2] | 0) + 40 >> 2] & 63](B) | 0;
   m = B;
   z = L;
   continue;
  } else {
   c[w >> 2] = D + 4;
   m = B;
   z = L;
   continue;
  }
 }
 L = a[n >> 0] | 0;
 z = c[r >> 2] | 0;
 if (!((a[t >> 0] | 0) == 0 ? 1 : (((L & 1) == 0 ? (L & 255) >>> 1 : c[n + 4 >> 2] | 0) | 0) == 0) ? (z - q | 0) < 160 : 0) {
  L = c[s >> 2] | 0;
  s = z + 4 | 0;
  c[r >> 2] = s;
  c[z >> 2] = L;
  O = s;
 } else O = z;
 h[j >> 3] = +_n(I, c[p >> 2] | 0, g);
 Zj(n, q, O, g);
 if (G) {
  O = c[G + 12 >> 2] | 0;
  if ((O | 0) == (c[G + 16 >> 2] | 0)) P = ub[c[(c[G >> 2] | 0) + 36 >> 2] & 63](G) | 0; else P = c[O >> 2] | 0;
  if ((P | 0) == -1) {
   c[d >> 2] = 0;
   Q = 1;
  } else Q = 0;
 } else Q = 1;
 do if (H) {
  P = c[H + 12 >> 2] | 0;
  if ((P | 0) == (c[H + 16 >> 2] | 0)) R = ub[c[(c[H >> 2] | 0) + 36 >> 2] & 63](H) | 0; else R = c[P >> 2] | 0;
  if ((R | 0) != -1) if (Q) break; else {
   J = 46;
   break;
  } else {
   c[e >> 2] = 0;
   J = 44;
   break;
  }
 } else J = 44; while (0);
 if ((J | 0) == 44 ? Q : 0) J = 46;
 if ((J | 0) == 46) c[g >> 2] = c[g >> 2] | 2;
 g = c[d >> 2] | 0;
 $e(o);
 $e(n);
 i = b;
 return g | 0;
}

function Rm(b, d, e, f, g, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0;
 b = i;
 i = i + 352 | 0;
 k = b + 208 | 0;
 l = b + 40 | 0;
 m = b + 36 | 0;
 n = b + 24 | 0;
 o = b + 12 | 0;
 p = b + 8 | 0;
 q = b + 48 | 0;
 r = b + 4 | 0;
 s = b;
 t = b + 337 | 0;
 u = b + 336 | 0;
 th(n, f, k, l, m);
 c[o >> 2] = 0;
 c[o + 4 >> 2] = 0;
 c[o + 8 >> 2] = 0;
 if (!(a[o >> 0] & 1)) v = 10; else v = (c[o >> 2] & -2) + -1 | 0;
 cf(o, v, 0);
 v = o + 8 | 0;
 f = o + 1 | 0;
 w = (a[o >> 0] & 1) == 0 ? f : c[v >> 2] | 0;
 c[p >> 2] = w;
 c[r >> 2] = q;
 c[s >> 2] = 0;
 a[t >> 0] = 1;
 a[u >> 0] = 69;
 x = o + 4 | 0;
 y = c[l >> 2] | 0;
 l = c[m >> 2] | 0;
 m = c[d >> 2] | 0;
 z = w;
 a : while (1) {
  if (m) {
   w = c[m + 12 >> 2] | 0;
   if ((w | 0) == (c[m + 16 >> 2] | 0)) A = ub[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0; else A = c[w >> 2] | 0;
   if ((A | 0) == -1) {
    c[d >> 2] = 0;
    B = 0;
    C = 1;
   } else {
    B = m;
    C = 0;
   }
  } else {
   B = 0;
   C = 1;
  }
  w = c[e >> 2] | 0;
  do if (w) {
   D = c[w + 12 >> 2] | 0;
   if ((D | 0) == (c[w + 16 >> 2] | 0)) E = ub[c[(c[w >> 2] | 0) + 36 >> 2] & 63](w) | 0; else E = c[D >> 2] | 0;
   if ((E | 0) != -1) if (C) {
    F = w;
    break;
   } else {
    G = B;
    H = w;
    I = z;
    break a;
   } else {
    c[e >> 2] = 0;
    J = 16;
    break;
   }
  } else J = 16; while (0);
  if ((J | 0) == 16) {
   J = 0;
   if (C) {
    G = B;
    H = 0;
    I = z;
    break;
   } else F = 0;
  }
  w = a[o >> 0] | 0;
  D = (w & 1) == 0 ? (w & 255) >>> 1 : c[x >> 2] | 0;
  if ((c[p >> 2] | 0) == (z + D | 0)) {
   cf(o, D << 1, 0);
   if (!(a[o >> 0] & 1)) K = 10; else K = (c[o >> 2] & -2) + -1 | 0;
   cf(o, K, 0);
   w = (a[o >> 0] & 1) == 0 ? f : c[v >> 2] | 0;
   c[p >> 2] = w + D;
   L = w;
  } else L = z;
  w = B + 12 | 0;
  D = c[w >> 2] | 0;
  M = B + 16 | 0;
  if ((D | 0) == (c[M >> 2] | 0)) N = ub[c[(c[B >> 2] | 0) + 36 >> 2] & 63](B) | 0; else N = c[D >> 2] | 0;
  if (uh(N, t, u, L, p, y, l, n, q, r, s, k) | 0) {
   G = B;
   H = F;
   I = L;
   break;
  }
  D = c[w >> 2] | 0;
  if ((D | 0) == (c[M >> 2] | 0)) {
   ub[c[(c[B >> 2] | 0) + 40 >> 2] & 63](B) | 0;
   m = B;
   z = L;
   continue;
  } else {
   c[w >> 2] = D + 4;
   m = B;
   z = L;
   continue;
  }
 }
 L = a[n >> 0] | 0;
 z = c[r >> 2] | 0;
 if (!((a[t >> 0] | 0) == 0 ? 1 : (((L & 1) == 0 ? (L & 255) >>> 1 : c[n + 4 >> 2] | 0) | 0) == 0) ? (z - q | 0) < 160 : 0) {
  L = c[s >> 2] | 0;
  s = z + 4 | 0;
  c[r >> 2] = s;
  c[z >> 2] = L;
  O = s;
 } else O = z;
 h[j >> 3] = +$n(I, c[p >> 2] | 0, g);
 Zj(n, q, O, g);
 if (G) {
  O = c[G + 12 >> 2] | 0;
  if ((O | 0) == (c[G + 16 >> 2] | 0)) P = ub[c[(c[G >> 2] | 0) + 36 >> 2] & 63](G) | 0; else P = c[O >> 2] | 0;
  if ((P | 0) == -1) {
   c[d >> 2] = 0;
   Q = 1;
  } else Q = 0;
 } else Q = 1;
 do if (H) {
  P = c[H + 12 >> 2] | 0;
  if ((P | 0) == (c[H + 16 >> 2] | 0)) R = ub[c[(c[H >> 2] | 0) + 36 >> 2] & 63](H) | 0; else R = c[P >> 2] | 0;
  if ((R | 0) != -1) if (Q) break; else {
   J = 46;
   break;
  } else {
   c[e >> 2] = 0;
   J = 44;
   break;
  }
 } else J = 44; while (0);
 if ((J | 0) == 44 ? Q : 0) J = 46;
 if ((J | 0) == 46) c[g >> 2] = c[g >> 2] | 2;
 g = c[d >> 2] | 0;
 $e(o);
 $e(n);
 i = b;
 return g | 0;
}

function Qm(b, d, e, f, h, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0;
 b = i;
 i = i + 352 | 0;
 k = b + 208 | 0;
 l = b + 40 | 0;
 m = b + 36 | 0;
 n = b + 24 | 0;
 o = b + 12 | 0;
 p = b + 8 | 0;
 q = b + 48 | 0;
 r = b + 4 | 0;
 s = b;
 t = b + 337 | 0;
 u = b + 336 | 0;
 th(n, f, k, l, m);
 c[o >> 2] = 0;
 c[o + 4 >> 2] = 0;
 c[o + 8 >> 2] = 0;
 if (!(a[o >> 0] & 1)) v = 10; else v = (c[o >> 2] & -2) + -1 | 0;
 cf(o, v, 0);
 v = o + 8 | 0;
 f = o + 1 | 0;
 w = (a[o >> 0] & 1) == 0 ? f : c[v >> 2] | 0;
 c[p >> 2] = w;
 c[r >> 2] = q;
 c[s >> 2] = 0;
 a[t >> 0] = 1;
 a[u >> 0] = 69;
 x = o + 4 | 0;
 y = c[l >> 2] | 0;
 l = c[m >> 2] | 0;
 m = c[d >> 2] | 0;
 z = w;
 a : while (1) {
  if (m) {
   w = c[m + 12 >> 2] | 0;
   if ((w | 0) == (c[m + 16 >> 2] | 0)) A = ub[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0; else A = c[w >> 2] | 0;
   if ((A | 0) == -1) {
    c[d >> 2] = 0;
    B = 0;
    C = 1;
   } else {
    B = m;
    C = 0;
   }
  } else {
   B = 0;
   C = 1;
  }
  w = c[e >> 2] | 0;
  do if (w) {
   D = c[w + 12 >> 2] | 0;
   if ((D | 0) == (c[w + 16 >> 2] | 0)) E = ub[c[(c[w >> 2] | 0) + 36 >> 2] & 63](w) | 0; else E = c[D >> 2] | 0;
   if ((E | 0) != -1) if (C) {
    F = w;
    break;
   } else {
    G = B;
    H = w;
    I = z;
    break a;
   } else {
    c[e >> 2] = 0;
    J = 16;
    break;
   }
  } else J = 16; while (0);
  if ((J | 0) == 16) {
   J = 0;
   if (C) {
    G = B;
    H = 0;
    I = z;
    break;
   } else F = 0;
  }
  w = a[o >> 0] | 0;
  D = (w & 1) == 0 ? (w & 255) >>> 1 : c[x >> 2] | 0;
  if ((c[p >> 2] | 0) == (z + D | 0)) {
   cf(o, D << 1, 0);
   if (!(a[o >> 0] & 1)) K = 10; else K = (c[o >> 2] & -2) + -1 | 0;
   cf(o, K, 0);
   w = (a[o >> 0] & 1) == 0 ? f : c[v >> 2] | 0;
   c[p >> 2] = w + D;
   L = w;
  } else L = z;
  w = B + 12 | 0;
  D = c[w >> 2] | 0;
  M = B + 16 | 0;
  if ((D | 0) == (c[M >> 2] | 0)) N = ub[c[(c[B >> 2] | 0) + 36 >> 2] & 63](B) | 0; else N = c[D >> 2] | 0;
  if (uh(N, t, u, L, p, y, l, n, q, r, s, k) | 0) {
   G = B;
   H = F;
   I = L;
   break;
  }
  D = c[w >> 2] | 0;
  if ((D | 0) == (c[M >> 2] | 0)) {
   ub[c[(c[B >> 2] | 0) + 40 >> 2] & 63](B) | 0;
   m = B;
   z = L;
   continue;
  } else {
   c[w >> 2] = D + 4;
   m = B;
   z = L;
   continue;
  }
 }
 L = a[n >> 0] | 0;
 z = c[r >> 2] | 0;
 if (!((a[t >> 0] | 0) == 0 ? 1 : (((L & 1) == 0 ? (L & 255) >>> 1 : c[n + 4 >> 2] | 0) | 0) == 0) ? (z - q | 0) < 160 : 0) {
  L = c[s >> 2] | 0;
  s = z + 4 | 0;
  c[r >> 2] = s;
  c[z >> 2] = L;
  O = s;
 } else O = z;
 g[j >> 2] = +ao(I, c[p >> 2] | 0, h);
 Zj(n, q, O, h);
 if (G) {
  O = c[G + 12 >> 2] | 0;
  if ((O | 0) == (c[G + 16 >> 2] | 0)) P = ub[c[(c[G >> 2] | 0) + 36 >> 2] & 63](G) | 0; else P = c[O >> 2] | 0;
  if ((P | 0) == -1) {
   c[d >> 2] = 0;
   Q = 1;
  } else Q = 0;
 } else Q = 1;
 do if (H) {
  P = c[H + 12 >> 2] | 0;
  if ((P | 0) == (c[H + 16 >> 2] | 0)) R = ub[c[(c[H >> 2] | 0) + 36 >> 2] & 63](H) | 0; else R = c[P >> 2] | 0;
  if ((R | 0) != -1) if (Q) break; else {
   J = 46;
   break;
  } else {
   c[e >> 2] = 0;
   J = 44;
   break;
  }
 } else J = 44; while (0);
 if ((J | 0) == 44 ? Q : 0) J = 46;
 if ((J | 0) == 46) c[h >> 2] = c[h >> 2] | 2;
 h = c[d >> 2] | 0;
 $e(o);
 $e(n);
 i = b;
 return h | 0;
}

function Jn(e, f, g, h, i, j, k, l) {
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 j = j | 0;
 k = k | 0;
 l = l | 0;
 var m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0;
 c[g >> 2] = e;
 c[j >> 2] = h;
 if (l & 4) {
  l = c[g >> 2] | 0;
  e = f;
  if ((((e - l | 0) > 2 ? (a[l >> 0] | 0) == -17 : 0) ? (a[l + 1 >> 0] | 0) == -69 : 0) ? (a[l + 2 >> 0] | 0) == -65 : 0) {
   c[g >> 2] = l + 3;
   m = c[j >> 2] | 0;
   n = e;
  } else {
   m = h;
   n = e;
  }
 } else {
  m = h;
  n = f;
 }
 h = i;
 e = c[g >> 2] | 0;
 l = e >>> 0 < f >>> 0;
 a : do if (l & m >>> 0 < i >>> 0) {
  o = e;
  p = m;
  while (1) {
   q = a[o >> 0] | 0;
   r = q & 255;
   if (r >>> 0 > k >>> 0) {
    s = 2;
    break a;
   }
   do if (q << 24 >> 24 > -1) {
    b[p >> 1] = q & 255;
    c[g >> 2] = o + 1;
   } else {
    if ((q & 255) < 194) {
     s = 2;
     break a;
    }
    if ((q & 255) < 224) {
     if ((n - o | 0) < 2) {
      s = 1;
      break a;
     }
     t = d[o + 1 >> 0] | 0;
     if ((t & 192 | 0) != 128) {
      s = 2;
      break a;
     }
     u = t & 63 | r << 6 & 1984;
     if (u >>> 0 > k >>> 0) {
      s = 2;
      break a;
     }
     b[p >> 1] = u;
     c[g >> 2] = o + 2;
     break;
    }
    if ((q & 255) < 240) {
     if ((n - o | 0) < 3) {
      s = 1;
      break a;
     }
     u = a[o + 1 >> 0] | 0;
     t = a[o + 2 >> 0] | 0;
     switch (r | 0) {
     case 224:
      {
       if ((u & -32) << 24 >> 24 != -96) {
        s = 2;
        break a;
       }
       break;
      }
     case 237:
      {
       if ((u & -32) << 24 >> 24 != -128) {
        s = 2;
        break a;
       }
       break;
      }
     default:
      if ((u & -64) << 24 >> 24 != -128) {
       s = 2;
       break a;
      }
     }
     v = t & 255;
     if ((v & 192 | 0) != 128) {
      s = 2;
      break a;
     }
     t = (u & 255) << 6 & 4032 | r << 12 | v & 63;
     if ((t & 65535) >>> 0 > k >>> 0) {
      s = 2;
      break a;
     }
     b[p >> 1] = t;
     c[g >> 2] = o + 3;
     break;
    }
    if ((q & 255) >= 245) {
     s = 2;
     break a;
    }
    if ((n - o | 0) < 4) {
     s = 1;
     break a;
    }
    t = a[o + 1 >> 0] | 0;
    v = a[o + 2 >> 0] | 0;
    u = a[o + 3 >> 0] | 0;
    switch (r | 0) {
    case 240:
     {
      if ((t + 112 & 255) >= 48) {
       s = 2;
       break a;
      }
      break;
     }
    case 244:
     {
      if ((t & -16) << 24 >> 24 != -128) {
       s = 2;
       break a;
      }
      break;
     }
    default:
     if ((t & -64) << 24 >> 24 != -128) {
      s = 2;
      break a;
     }
    }
    w = v & 255;
    if ((w & 192 | 0) != 128) {
     s = 2;
     break a;
    }
    v = u & 255;
    if ((v & 192 | 0) != 128) {
     s = 2;
     break a;
    }
    if ((h - p | 0) < 4) {
     s = 1;
     break a;
    }
    u = r & 7;
    x = t & 255;
    t = w << 6;
    y = v & 63;
    if ((x << 12 & 258048 | u << 18 | t & 4032 | y) >>> 0 > k >>> 0) {
     s = 2;
     break a;
    }
    b[p >> 1] = x << 2 & 60 | w >>> 4 & 3 | ((x >>> 4 & 3 | u << 2) << 6) + 16320 | 55296;
    u = p + 2 | 0;
    c[j >> 2] = u;
    b[u >> 1] = y | t & 960 | 56320;
    c[g >> 2] = (c[g >> 2] | 0) + 4;
   } while (0);
   p = (c[j >> 2] | 0) + 2 | 0;
   c[j >> 2] = p;
   o = c[g >> 2] | 0;
   r = o >>> 0 < f >>> 0;
   if (!(r & p >>> 0 < i >>> 0)) {
    z = r;
    A = 39;
    break;
   }
  }
 } else {
  z = l;
  A = 39;
 } while (0);
 if ((A | 0) == 39) s = z & 1;
 return s | 0;
}

function Pm(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0;
 b = i;
 i = i + 320 | 0;
 j = b + 208 | 0;
 k = b + 200 | 0;
 l = b + 24 | 0;
 m = b + 12 | 0;
 n = b + 8 | 0;
 o = b + 40 | 0;
 p = b + 4 | 0;
 q = b;
 r = im(f) | 0;
 sh(l, f, j, k);
 c[m >> 2] = 0;
 c[m + 4 >> 2] = 0;
 c[m + 8 >> 2] = 0;
 if (!(a[m >> 0] & 1)) s = 10; else s = (c[m >> 2] & -2) + -1 | 0;
 cf(m, s, 0);
 s = m + 8 | 0;
 f = m + 1 | 0;
 t = (a[m >> 0] & 1) == 0 ? f : c[s >> 2] | 0;
 c[n >> 2] = t;
 c[p >> 2] = o;
 c[q >> 2] = 0;
 u = m + 4 | 0;
 v = c[k >> 2] | 0;
 k = c[d >> 2] | 0;
 w = t;
 a : while (1) {
  if (k) {
   t = c[k + 12 >> 2] | 0;
   if ((t | 0) == (c[k + 16 >> 2] | 0)) x = ub[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else x = c[t >> 2] | 0;
   if ((x | 0) == -1) {
    c[d >> 2] = 0;
    y = 0;
    z = 1;
   } else {
    y = k;
    z = 0;
   }
  } else {
   y = 0;
   z = 1;
  }
  t = c[e >> 2] | 0;
  do if (t) {
   A = c[t + 12 >> 2] | 0;
   if ((A | 0) == (c[t + 16 >> 2] | 0)) B = ub[c[(c[t >> 2] | 0) + 36 >> 2] & 63](t) | 0; else B = c[A >> 2] | 0;
   if ((B | 0) != -1) if (z) {
    C = t;
    break;
   } else {
    E = y;
    F = t;
    G = w;
    break a;
   } else {
    c[e >> 2] = 0;
    H = 16;
    break;
   }
  } else H = 16; while (0);
  if ((H | 0) == 16) {
   H = 0;
   if (z) {
    E = y;
    F = 0;
    G = w;
    break;
   } else C = 0;
  }
  t = a[m >> 0] | 0;
  A = (t & 1) == 0 ? (t & 255) >>> 1 : c[u >> 2] | 0;
  if ((c[n >> 2] | 0) == (w + A | 0)) {
   cf(m, A << 1, 0);
   if (!(a[m >> 0] & 1)) I = 10; else I = (c[m >> 2] & -2) + -1 | 0;
   cf(m, I, 0);
   t = (a[m >> 0] & 1) == 0 ? f : c[s >> 2] | 0;
   c[n >> 2] = t + A;
   J = t;
  } else J = w;
  t = y + 12 | 0;
  A = c[t >> 2] | 0;
  K = y + 16 | 0;
  if ((A | 0) == (c[K >> 2] | 0)) L = ub[c[(c[y >> 2] | 0) + 36 >> 2] & 63](y) | 0; else L = c[A >> 2] | 0;
  if (oh(L, r, J, n, q, v, l, o, p, j) | 0) {
   E = y;
   F = C;
   G = J;
   break;
  }
  A = c[t >> 2] | 0;
  if ((A | 0) == (c[K >> 2] | 0)) {
   ub[c[(c[y >> 2] | 0) + 40 >> 2] & 63](y) | 0;
   k = y;
   w = J;
   continue;
  } else {
   c[t >> 2] = A + 4;
   k = y;
   w = J;
   continue;
  }
 }
 J = a[l >> 0] | 0;
 w = c[p >> 2] | 0;
 if ((((J & 1) == 0 ? (J & 255) >>> 1 : c[l + 4 >> 2] | 0) | 0) != 0 ? (w - o | 0) < 160 : 0) {
  J = c[q >> 2] | 0;
  q = w + 4 | 0;
  c[p >> 2] = q;
  c[w >> 2] = J;
  M = q;
 } else M = w;
 w = bo(G, c[n >> 2] | 0, g, r) | 0;
 r = h;
 c[r >> 2] = w;
 c[r + 4 >> 2] = D;
 Zj(l, o, M, g);
 if (E) {
  M = c[E + 12 >> 2] | 0;
  if ((M | 0) == (c[E + 16 >> 2] | 0)) N = ub[c[(c[E >> 2] | 0) + 36 >> 2] & 63](E) | 0; else N = c[M >> 2] | 0;
  if ((N | 0) == -1) {
   c[d >> 2] = 0;
   O = 1;
  } else O = 0;
 } else O = 1;
 do if (F) {
  N = c[F + 12 >> 2] | 0;
  if ((N | 0) == (c[F + 16 >> 2] | 0)) P = ub[c[(c[F >> 2] | 0) + 36 >> 2] & 63](F) | 0; else P = c[N >> 2] | 0;
  if ((P | 0) != -1) if (O) break; else {
   H = 46;
   break;
  } else {
   c[e >> 2] = 0;
   H = 44;
   break;
  }
 } else H = 44; while (0);
 if ((H | 0) == 44 ? O : 0) H = 46;
 if ((H | 0) == 46) c[g >> 2] = c[g >> 2] | 2;
 g = c[d >> 2] | 0;
 $e(m);
 $e(l);
 i = b;
 return g | 0;
}

function Lm(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0;
 b = i;
 i = i + 320 | 0;
 j = b + 208 | 0;
 k = b + 200 | 0;
 l = b + 24 | 0;
 m = b + 12 | 0;
 n = b + 8 | 0;
 o = b + 40 | 0;
 p = b + 4 | 0;
 q = b;
 r = im(f) | 0;
 sh(l, f, j, k);
 c[m >> 2] = 0;
 c[m + 4 >> 2] = 0;
 c[m + 8 >> 2] = 0;
 if (!(a[m >> 0] & 1)) s = 10; else s = (c[m >> 2] & -2) + -1 | 0;
 cf(m, s, 0);
 s = m + 8 | 0;
 f = m + 1 | 0;
 t = (a[m >> 0] & 1) == 0 ? f : c[s >> 2] | 0;
 c[n >> 2] = t;
 c[p >> 2] = o;
 c[q >> 2] = 0;
 u = m + 4 | 0;
 v = c[k >> 2] | 0;
 k = c[d >> 2] | 0;
 w = t;
 a : while (1) {
  if (k) {
   t = c[k + 12 >> 2] | 0;
   if ((t | 0) == (c[k + 16 >> 2] | 0)) x = ub[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else x = c[t >> 2] | 0;
   if ((x | 0) == -1) {
    c[d >> 2] = 0;
    y = 0;
    z = 1;
   } else {
    y = k;
    z = 0;
   }
  } else {
   y = 0;
   z = 1;
  }
  t = c[e >> 2] | 0;
  do if (t) {
   A = c[t + 12 >> 2] | 0;
   if ((A | 0) == (c[t + 16 >> 2] | 0)) B = ub[c[(c[t >> 2] | 0) + 36 >> 2] & 63](t) | 0; else B = c[A >> 2] | 0;
   if ((B | 0) != -1) if (z) {
    C = t;
    break;
   } else {
    E = y;
    F = t;
    G = w;
    break a;
   } else {
    c[e >> 2] = 0;
    H = 16;
    break;
   }
  } else H = 16; while (0);
  if ((H | 0) == 16) {
   H = 0;
   if (z) {
    E = y;
    F = 0;
    G = w;
    break;
   } else C = 0;
  }
  t = a[m >> 0] | 0;
  A = (t & 1) == 0 ? (t & 255) >>> 1 : c[u >> 2] | 0;
  if ((c[n >> 2] | 0) == (w + A | 0)) {
   cf(m, A << 1, 0);
   if (!(a[m >> 0] & 1)) I = 10; else I = (c[m >> 2] & -2) + -1 | 0;
   cf(m, I, 0);
   t = (a[m >> 0] & 1) == 0 ? f : c[s >> 2] | 0;
   c[n >> 2] = t + A;
   J = t;
  } else J = w;
  t = y + 12 | 0;
  A = c[t >> 2] | 0;
  K = y + 16 | 0;
  if ((A | 0) == (c[K >> 2] | 0)) L = ub[c[(c[y >> 2] | 0) + 36 >> 2] & 63](y) | 0; else L = c[A >> 2] | 0;
  if (oh(L, r, J, n, q, v, l, o, p, j) | 0) {
   E = y;
   F = C;
   G = J;
   break;
  }
  A = c[t >> 2] | 0;
  if ((A | 0) == (c[K >> 2] | 0)) {
   ub[c[(c[y >> 2] | 0) + 40 >> 2] & 63](y) | 0;
   k = y;
   w = J;
   continue;
  } else {
   c[t >> 2] = A + 4;
   k = y;
   w = J;
   continue;
  }
 }
 J = a[l >> 0] | 0;
 w = c[p >> 2] | 0;
 if ((((J & 1) == 0 ? (J & 255) >>> 1 : c[l + 4 >> 2] | 0) | 0) != 0 ? (w - o | 0) < 160 : 0) {
  J = c[q >> 2] | 0;
  q = w + 4 | 0;
  c[p >> 2] = q;
  c[w >> 2] = J;
  M = q;
 } else M = w;
 w = go(G, c[n >> 2] | 0, g, r) | 0;
 r = h;
 c[r >> 2] = w;
 c[r + 4 >> 2] = D;
 Zj(l, o, M, g);
 if (E) {
  M = c[E + 12 >> 2] | 0;
  if ((M | 0) == (c[E + 16 >> 2] | 0)) N = ub[c[(c[E >> 2] | 0) + 36 >> 2] & 63](E) | 0; else N = c[M >> 2] | 0;
  if ((N | 0) == -1) {
   c[d >> 2] = 0;
   O = 1;
  } else O = 0;
 } else O = 1;
 do if (F) {
  N = c[F + 12 >> 2] | 0;
  if ((N | 0) == (c[F + 16 >> 2] | 0)) P = ub[c[(c[F >> 2] | 0) + 36 >> 2] & 63](F) | 0; else P = c[N >> 2] | 0;
  if ((P | 0) != -1) if (O) break; else {
   H = 46;
   break;
  } else {
   c[e >> 2] = 0;
   H = 44;
   break;
  }
 } else H = 44; while (0);
 if ((H | 0) == 44 ? O : 0) H = 46;
 if ((H | 0) == 46) c[g >> 2] = c[g >> 2] | 2;
 g = c[d >> 2] | 0;
 $e(m);
 $e(l);
 i = b;
 return g | 0;
}

function nh(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0;
 b = i;
 i = i + 320 | 0;
 j = b;
 k = b + 208 | 0;
 l = b + 192 | 0;
 m = b + 28 | 0;
 n = b + 16 | 0;
 o = b + 12 | 0;
 p = b + 32 | 0;
 q = b + 8 | 0;
 r = b + 4 | 0;
 c[l >> 2] = 0;
 c[l + 4 >> 2] = 0;
 c[l + 8 >> 2] = 0;
 s = xf(f) | 0;
 c[m >> 2] = s;
 f = Mk(m, 9328) | 0;
 yb[c[(c[f >> 2] | 0) + 48 >> 2] & 7](f, 19968, 19994, k) | 0;
 ko(s) | 0;
 c[n >> 2] = 0;
 c[n + 4 >> 2] = 0;
 c[n + 8 >> 2] = 0;
 if (!(a[n >> 0] & 1)) t = 10; else t = (c[n >> 2] & -2) + -1 | 0;
 cf(n, t, 0);
 t = n + 8 | 0;
 s = n + 1 | 0;
 f = (a[n >> 0] & 1) == 0 ? s : c[t >> 2] | 0;
 c[o >> 2] = f;
 c[q >> 2] = p;
 c[r >> 2] = 0;
 m = n + 4 | 0;
 u = c[d >> 2] | 0;
 v = f;
 a : while (1) {
  if (u) {
   f = c[u + 12 >> 2] | 0;
   if ((f | 0) == (c[u + 16 >> 2] | 0)) w = ub[c[(c[u >> 2] | 0) + 36 >> 2] & 63](u) | 0; else w = c[f >> 2] | 0;
   if ((w | 0) == -1) {
    c[d >> 2] = 0;
    x = 0;
    y = 1;
   } else {
    x = u;
    y = 0;
   }
  } else {
   x = 0;
   y = 1;
  }
  f = c[e >> 2] | 0;
  do if (f) {
   z = c[f + 12 >> 2] | 0;
   if ((z | 0) == (c[f + 16 >> 2] | 0)) A = ub[c[(c[f >> 2] | 0) + 36 >> 2] & 63](f) | 0; else A = c[z >> 2] | 0;
   if ((A | 0) != -1) if (y) {
    B = f;
    break;
   } else {
    C = x;
    D = f;
    E = v;
    break a;
   } else {
    c[e >> 2] = 0;
    F = 16;
    break;
   }
  } else F = 16; while (0);
  if ((F | 0) == 16) {
   F = 0;
   if (y) {
    C = x;
    D = 0;
    E = v;
    break;
   } else B = 0;
  }
  f = a[n >> 0] | 0;
  z = (f & 1) == 0 ? (f & 255) >>> 1 : c[m >> 2] | 0;
  if ((c[o >> 2] | 0) == (v + z | 0)) {
   cf(n, z << 1, 0);
   if (!(a[n >> 0] & 1)) G = 10; else G = (c[n >> 2] & -2) + -1 | 0;
   cf(n, G, 0);
   f = (a[n >> 0] & 1) == 0 ? s : c[t >> 2] | 0;
   c[o >> 2] = f + z;
   H = f;
  } else H = v;
  f = x + 12 | 0;
  z = c[f >> 2] | 0;
  I = x + 16 | 0;
  if ((z | 0) == (c[I >> 2] | 0)) J = ub[c[(c[x >> 2] | 0) + 36 >> 2] & 63](x) | 0; else J = c[z >> 2] | 0;
  if (oh(J, 16, H, o, r, 0, l, p, q, k) | 0) {
   C = x;
   D = B;
   E = H;
   break;
  }
  z = c[f >> 2] | 0;
  if ((z | 0) == (c[I >> 2] | 0)) {
   ub[c[(c[x >> 2] | 0) + 40 >> 2] & 63](x) | 0;
   u = x;
   v = H;
   continue;
  } else {
   c[f >> 2] = z + 4;
   u = x;
   v = H;
   continue;
  }
 }
 cf(n, (c[o >> 2] | 0) - E | 0, 0);
 E = (a[n >> 0] & 1) == 0 ? s : c[t >> 2] | 0;
 t = ah() | 0;
 c[j >> 2] = h;
 if ((Im(E, t, 21352, j) | 0) != 1) c[g >> 2] = 4;
 if (C) {
  j = c[C + 12 >> 2] | 0;
  if ((j | 0) == (c[C + 16 >> 2] | 0)) K = ub[c[(c[C >> 2] | 0) + 36 >> 2] & 63](C) | 0; else K = c[j >> 2] | 0;
  if ((K | 0) == -1) {
   c[d >> 2] = 0;
   L = 1;
  } else L = 0;
 } else L = 1;
 do if (D) {
  K = c[D + 12 >> 2] | 0;
  if ((K | 0) == (c[D + 16 >> 2] | 0)) M = ub[c[(c[D >> 2] | 0) + 36 >> 2] & 63](D) | 0; else M = c[K >> 2] | 0;
  if ((M | 0) != -1) if (L) break; else {
   F = 45;
   break;
  } else {
   c[e >> 2] = 0;
   F = 43;
   break;
  }
 } else F = 43; while (0);
 if ((F | 0) == 43 ? L : 0) F = 45;
 if ((F | 0) == 45) c[g >> 2] = c[g >> 2] | 2;
 g = c[d >> 2] | 0;
 $e(n);
 $e(l);
 i = b;
 return g | 0;
}

function Om(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0;
 b = i;
 i = i + 320 | 0;
 j = b + 208 | 0;
 k = b + 200 | 0;
 l = b + 24 | 0;
 m = b + 12 | 0;
 n = b + 8 | 0;
 o = b + 40 | 0;
 p = b + 4 | 0;
 q = b;
 r = im(f) | 0;
 sh(l, f, j, k);
 c[m >> 2] = 0;
 c[m + 4 >> 2] = 0;
 c[m + 8 >> 2] = 0;
 if (!(a[m >> 0] & 1)) s = 10; else s = (c[m >> 2] & -2) + -1 | 0;
 cf(m, s, 0);
 s = m + 8 | 0;
 f = m + 1 | 0;
 t = (a[m >> 0] & 1) == 0 ? f : c[s >> 2] | 0;
 c[n >> 2] = t;
 c[p >> 2] = o;
 c[q >> 2] = 0;
 u = m + 4 | 0;
 v = c[k >> 2] | 0;
 k = c[d >> 2] | 0;
 w = t;
 a : while (1) {
  if (k) {
   t = c[k + 12 >> 2] | 0;
   if ((t | 0) == (c[k + 16 >> 2] | 0)) x = ub[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else x = c[t >> 2] | 0;
   if ((x | 0) == -1) {
    c[d >> 2] = 0;
    y = 0;
    z = 1;
   } else {
    y = k;
    z = 0;
   }
  } else {
   y = 0;
   z = 1;
  }
  t = c[e >> 2] | 0;
  do if (t) {
   A = c[t + 12 >> 2] | 0;
   if ((A | 0) == (c[t + 16 >> 2] | 0)) B = ub[c[(c[t >> 2] | 0) + 36 >> 2] & 63](t) | 0; else B = c[A >> 2] | 0;
   if ((B | 0) != -1) if (z) {
    C = t;
    break;
   } else {
    D = y;
    E = t;
    F = w;
    break a;
   } else {
    c[e >> 2] = 0;
    G = 16;
    break;
   }
  } else G = 16; while (0);
  if ((G | 0) == 16) {
   G = 0;
   if (z) {
    D = y;
    E = 0;
    F = w;
    break;
   } else C = 0;
  }
  t = a[m >> 0] | 0;
  A = (t & 1) == 0 ? (t & 255) >>> 1 : c[u >> 2] | 0;
  if ((c[n >> 2] | 0) == (w + A | 0)) {
   cf(m, A << 1, 0);
   if (!(a[m >> 0] & 1)) H = 10; else H = (c[m >> 2] & -2) + -1 | 0;
   cf(m, H, 0);
   t = (a[m >> 0] & 1) == 0 ? f : c[s >> 2] | 0;
   c[n >> 2] = t + A;
   I = t;
  } else I = w;
  t = y + 12 | 0;
  A = c[t >> 2] | 0;
  J = y + 16 | 0;
  if ((A | 0) == (c[J >> 2] | 0)) K = ub[c[(c[y >> 2] | 0) + 36 >> 2] & 63](y) | 0; else K = c[A >> 2] | 0;
  if (oh(K, r, I, n, q, v, l, o, p, j) | 0) {
   D = y;
   E = C;
   F = I;
   break;
  }
  A = c[t >> 2] | 0;
  if ((A | 0) == (c[J >> 2] | 0)) {
   ub[c[(c[y >> 2] | 0) + 40 >> 2] & 63](y) | 0;
   k = y;
   w = I;
   continue;
  } else {
   c[t >> 2] = A + 4;
   k = y;
   w = I;
   continue;
  }
 }
 I = a[l >> 0] | 0;
 w = c[p >> 2] | 0;
 if ((((I & 1) == 0 ? (I & 255) >>> 1 : c[l + 4 >> 2] | 0) | 0) != 0 ? (w - o | 0) < 160 : 0) {
  I = c[q >> 2] | 0;
  q = w + 4 | 0;
  c[p >> 2] = q;
  c[w >> 2] = I;
  L = q;
 } else L = w;
 c[h >> 2] = co(F, c[n >> 2] | 0, g, r) | 0;
 Zj(l, o, L, g);
 if (D) {
  L = c[D + 12 >> 2] | 0;
  if ((L | 0) == (c[D + 16 >> 2] | 0)) M = ub[c[(c[D >> 2] | 0) + 36 >> 2] & 63](D) | 0; else M = c[L >> 2] | 0;
  if ((M | 0) == -1) {
   c[d >> 2] = 0;
   N = 1;
  } else N = 0;
 } else N = 1;
 do if (E) {
  M = c[E + 12 >> 2] | 0;
  if ((M | 0) == (c[E + 16 >> 2] | 0)) O = ub[c[(c[E >> 2] | 0) + 36 >> 2] & 63](E) | 0; else O = c[M >> 2] | 0;
  if ((O | 0) != -1) if (N) break; else {
   G = 46;
   break;
  } else {
   c[e >> 2] = 0;
   G = 44;
   break;
  }
 } else G = 44; while (0);
 if ((G | 0) == 44 ? N : 0) G = 46;
 if ((G | 0) == 46) c[g >> 2] = c[g >> 2] | 2;
 g = c[d >> 2] | 0;
 $e(m);
 $e(l);
 i = b;
 return g | 0;
}

function Nm(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0;
 b = i;
 i = i + 320 | 0;
 j = b + 208 | 0;
 k = b + 200 | 0;
 l = b + 24 | 0;
 m = b + 12 | 0;
 n = b + 8 | 0;
 o = b + 40 | 0;
 p = b + 4 | 0;
 q = b;
 r = im(f) | 0;
 sh(l, f, j, k);
 c[m >> 2] = 0;
 c[m + 4 >> 2] = 0;
 c[m + 8 >> 2] = 0;
 if (!(a[m >> 0] & 1)) s = 10; else s = (c[m >> 2] & -2) + -1 | 0;
 cf(m, s, 0);
 s = m + 8 | 0;
 f = m + 1 | 0;
 t = (a[m >> 0] & 1) == 0 ? f : c[s >> 2] | 0;
 c[n >> 2] = t;
 c[p >> 2] = o;
 c[q >> 2] = 0;
 u = m + 4 | 0;
 v = c[k >> 2] | 0;
 k = c[d >> 2] | 0;
 w = t;
 a : while (1) {
  if (k) {
   t = c[k + 12 >> 2] | 0;
   if ((t | 0) == (c[k + 16 >> 2] | 0)) x = ub[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else x = c[t >> 2] | 0;
   if ((x | 0) == -1) {
    c[d >> 2] = 0;
    y = 0;
    z = 1;
   } else {
    y = k;
    z = 0;
   }
  } else {
   y = 0;
   z = 1;
  }
  t = c[e >> 2] | 0;
  do if (t) {
   A = c[t + 12 >> 2] | 0;
   if ((A | 0) == (c[t + 16 >> 2] | 0)) B = ub[c[(c[t >> 2] | 0) + 36 >> 2] & 63](t) | 0; else B = c[A >> 2] | 0;
   if ((B | 0) != -1) if (z) {
    C = t;
    break;
   } else {
    D = y;
    E = t;
    F = w;
    break a;
   } else {
    c[e >> 2] = 0;
    G = 16;
    break;
   }
  } else G = 16; while (0);
  if ((G | 0) == 16) {
   G = 0;
   if (z) {
    D = y;
    E = 0;
    F = w;
    break;
   } else C = 0;
  }
  t = a[m >> 0] | 0;
  A = (t & 1) == 0 ? (t & 255) >>> 1 : c[u >> 2] | 0;
  if ((c[n >> 2] | 0) == (w + A | 0)) {
   cf(m, A << 1, 0);
   if (!(a[m >> 0] & 1)) H = 10; else H = (c[m >> 2] & -2) + -1 | 0;
   cf(m, H, 0);
   t = (a[m >> 0] & 1) == 0 ? f : c[s >> 2] | 0;
   c[n >> 2] = t + A;
   I = t;
  } else I = w;
  t = y + 12 | 0;
  A = c[t >> 2] | 0;
  J = y + 16 | 0;
  if ((A | 0) == (c[J >> 2] | 0)) K = ub[c[(c[y >> 2] | 0) + 36 >> 2] & 63](y) | 0; else K = c[A >> 2] | 0;
  if (oh(K, r, I, n, q, v, l, o, p, j) | 0) {
   D = y;
   E = C;
   F = I;
   break;
  }
  A = c[t >> 2] | 0;
  if ((A | 0) == (c[J >> 2] | 0)) {
   ub[c[(c[y >> 2] | 0) + 40 >> 2] & 63](y) | 0;
   k = y;
   w = I;
   continue;
  } else {
   c[t >> 2] = A + 4;
   k = y;
   w = I;
   continue;
  }
 }
 I = a[l >> 0] | 0;
 w = c[p >> 2] | 0;
 if ((((I & 1) == 0 ? (I & 255) >>> 1 : c[l + 4 >> 2] | 0) | 0) != 0 ? (w - o | 0) < 160 : 0) {
  I = c[q >> 2] | 0;
  q = w + 4 | 0;
  c[p >> 2] = q;
  c[w >> 2] = I;
  L = q;
 } else L = w;
 c[h >> 2] = eo(F, c[n >> 2] | 0, g, r) | 0;
 Zj(l, o, L, g);
 if (D) {
  L = c[D + 12 >> 2] | 0;
  if ((L | 0) == (c[D + 16 >> 2] | 0)) M = ub[c[(c[D >> 2] | 0) + 36 >> 2] & 63](D) | 0; else M = c[L >> 2] | 0;
  if ((M | 0) == -1) {
   c[d >> 2] = 0;
   N = 1;
  } else N = 0;
 } else N = 1;
 do if (E) {
  M = c[E + 12 >> 2] | 0;
  if ((M | 0) == (c[E + 16 >> 2] | 0)) O = ub[c[(c[E >> 2] | 0) + 36 >> 2] & 63](E) | 0; else O = c[M >> 2] | 0;
  if ((O | 0) != -1) if (N) break; else {
   G = 46;
   break;
  } else {
   c[e >> 2] = 0;
   G = 44;
   break;
  }
 } else G = 44; while (0);
 if ((G | 0) == 44 ? N : 0) G = 46;
 if ((G | 0) == 46) c[g >> 2] = c[g >> 2] | 2;
 g = c[d >> 2] | 0;
 $e(m);
 $e(l);
 i = b;
 return g | 0;
}

function Mm(d, e, f, g, h, j) {
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0;
 d = i;
 i = i + 320 | 0;
 k = d + 208 | 0;
 l = d + 200 | 0;
 m = d + 24 | 0;
 n = d + 12 | 0;
 o = d + 8 | 0;
 p = d + 40 | 0;
 q = d + 4 | 0;
 r = d;
 s = im(g) | 0;
 sh(m, g, k, l);
 c[n >> 2] = 0;
 c[n + 4 >> 2] = 0;
 c[n + 8 >> 2] = 0;
 if (!(a[n >> 0] & 1)) t = 10; else t = (c[n >> 2] & -2) + -1 | 0;
 cf(n, t, 0);
 t = n + 8 | 0;
 g = n + 1 | 0;
 u = (a[n >> 0] & 1) == 0 ? g : c[t >> 2] | 0;
 c[o >> 2] = u;
 c[q >> 2] = p;
 c[r >> 2] = 0;
 v = n + 4 | 0;
 w = c[l >> 2] | 0;
 l = c[e >> 2] | 0;
 x = u;
 a : while (1) {
  if (l) {
   u = c[l + 12 >> 2] | 0;
   if ((u | 0) == (c[l + 16 >> 2] | 0)) y = ub[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0; else y = c[u >> 2] | 0;
   if ((y | 0) == -1) {
    c[e >> 2] = 0;
    z = 0;
    A = 1;
   } else {
    z = l;
    A = 0;
   }
  } else {
   z = 0;
   A = 1;
  }
  u = c[f >> 2] | 0;
  do if (u) {
   B = c[u + 12 >> 2] | 0;
   if ((B | 0) == (c[u + 16 >> 2] | 0)) C = ub[c[(c[u >> 2] | 0) + 36 >> 2] & 63](u) | 0; else C = c[B >> 2] | 0;
   if ((C | 0) != -1) if (A) {
    D = u;
    break;
   } else {
    E = z;
    F = u;
    G = x;
    break a;
   } else {
    c[f >> 2] = 0;
    H = 16;
    break;
   }
  } else H = 16; while (0);
  if ((H | 0) == 16) {
   H = 0;
   if (A) {
    E = z;
    F = 0;
    G = x;
    break;
   } else D = 0;
  }
  u = a[n >> 0] | 0;
  B = (u & 1) == 0 ? (u & 255) >>> 1 : c[v >> 2] | 0;
  if ((c[o >> 2] | 0) == (x + B | 0)) {
   cf(n, B << 1, 0);
   if (!(a[n >> 0] & 1)) I = 10; else I = (c[n >> 2] & -2) + -1 | 0;
   cf(n, I, 0);
   u = (a[n >> 0] & 1) == 0 ? g : c[t >> 2] | 0;
   c[o >> 2] = u + B;
   J = u;
  } else J = x;
  u = z + 12 | 0;
  B = c[u >> 2] | 0;
  K = z + 16 | 0;
  if ((B | 0) == (c[K >> 2] | 0)) L = ub[c[(c[z >> 2] | 0) + 36 >> 2] & 63](z) | 0; else L = c[B >> 2] | 0;
  if (oh(L, s, J, o, r, w, m, p, q, k) | 0) {
   E = z;
   F = D;
   G = J;
   break;
  }
  B = c[u >> 2] | 0;
  if ((B | 0) == (c[K >> 2] | 0)) {
   ub[c[(c[z >> 2] | 0) + 40 >> 2] & 63](z) | 0;
   l = z;
   x = J;
   continue;
  } else {
   c[u >> 2] = B + 4;
   l = z;
   x = J;
   continue;
  }
 }
 J = a[m >> 0] | 0;
 x = c[q >> 2] | 0;
 if ((((J & 1) == 0 ? (J & 255) >>> 1 : c[m + 4 >> 2] | 0) | 0) != 0 ? (x - p | 0) < 160 : 0) {
  J = c[r >> 2] | 0;
  r = x + 4 | 0;
  c[q >> 2] = r;
  c[x >> 2] = J;
  M = r;
 } else M = x;
 b[j >> 1] = fo(G, c[o >> 2] | 0, h, s) | 0;
 Zj(m, p, M, h);
 if (E) {
  M = c[E + 12 >> 2] | 0;
  if ((M | 0) == (c[E + 16 >> 2] | 0)) N = ub[c[(c[E >> 2] | 0) + 36 >> 2] & 63](E) | 0; else N = c[M >> 2] | 0;
  if ((N | 0) == -1) {
   c[e >> 2] = 0;
   O = 1;
  } else O = 0;
 } else O = 1;
 do if (F) {
  N = c[F + 12 >> 2] | 0;
  if ((N | 0) == (c[F + 16 >> 2] | 0)) P = ub[c[(c[F >> 2] | 0) + 36 >> 2] & 63](F) | 0; else P = c[N >> 2] | 0;
  if ((P | 0) != -1) if (O) break; else {
   H = 46;
   break;
  } else {
   c[f >> 2] = 0;
   H = 44;
   break;
  }
 } else H = 44; while (0);
 if ((H | 0) == 44 ? O : 0) H = 46;
 if ((H | 0) == 46) c[h >> 2] = c[h >> 2] | 2;
 h = c[e >> 2] | 0;
 $e(n);
 $e(m);
 i = d;
 return h | 0;
}

function Km(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0;
 b = i;
 i = i + 320 | 0;
 j = b + 208 | 0;
 k = b + 200 | 0;
 l = b + 24 | 0;
 m = b + 12 | 0;
 n = b + 8 | 0;
 o = b + 40 | 0;
 p = b + 4 | 0;
 q = b;
 r = im(f) | 0;
 sh(l, f, j, k);
 c[m >> 2] = 0;
 c[m + 4 >> 2] = 0;
 c[m + 8 >> 2] = 0;
 if (!(a[m >> 0] & 1)) s = 10; else s = (c[m >> 2] & -2) + -1 | 0;
 cf(m, s, 0);
 s = m + 8 | 0;
 f = m + 1 | 0;
 t = (a[m >> 0] & 1) == 0 ? f : c[s >> 2] | 0;
 c[n >> 2] = t;
 c[p >> 2] = o;
 c[q >> 2] = 0;
 u = m + 4 | 0;
 v = c[k >> 2] | 0;
 k = c[d >> 2] | 0;
 w = t;
 a : while (1) {
  if (k) {
   t = c[k + 12 >> 2] | 0;
   if ((t | 0) == (c[k + 16 >> 2] | 0)) x = ub[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else x = c[t >> 2] | 0;
   if ((x | 0) == -1) {
    c[d >> 2] = 0;
    y = 0;
    z = 1;
   } else {
    y = k;
    z = 0;
   }
  } else {
   y = 0;
   z = 1;
  }
  t = c[e >> 2] | 0;
  do if (t) {
   A = c[t + 12 >> 2] | 0;
   if ((A | 0) == (c[t + 16 >> 2] | 0)) B = ub[c[(c[t >> 2] | 0) + 36 >> 2] & 63](t) | 0; else B = c[A >> 2] | 0;
   if ((B | 0) != -1) if (z) {
    C = t;
    break;
   } else {
    D = y;
    E = t;
    F = w;
    break a;
   } else {
    c[e >> 2] = 0;
    G = 16;
    break;
   }
  } else G = 16; while (0);
  if ((G | 0) == 16) {
   G = 0;
   if (z) {
    D = y;
    E = 0;
    F = w;
    break;
   } else C = 0;
  }
  t = a[m >> 0] | 0;
  A = (t & 1) == 0 ? (t & 255) >>> 1 : c[u >> 2] | 0;
  if ((c[n >> 2] | 0) == (w + A | 0)) {
   cf(m, A << 1, 0);
   if (!(a[m >> 0] & 1)) H = 10; else H = (c[m >> 2] & -2) + -1 | 0;
   cf(m, H, 0);
   t = (a[m >> 0] & 1) == 0 ? f : c[s >> 2] | 0;
   c[n >> 2] = t + A;
   I = t;
  } else I = w;
  t = y + 12 | 0;
  A = c[t >> 2] | 0;
  J = y + 16 | 0;
  if ((A | 0) == (c[J >> 2] | 0)) K = ub[c[(c[y >> 2] | 0) + 36 >> 2] & 63](y) | 0; else K = c[A >> 2] | 0;
  if (oh(K, r, I, n, q, v, l, o, p, j) | 0) {
   D = y;
   E = C;
   F = I;
   break;
  }
  A = c[t >> 2] | 0;
  if ((A | 0) == (c[J >> 2] | 0)) {
   ub[c[(c[y >> 2] | 0) + 40 >> 2] & 63](y) | 0;
   k = y;
   w = I;
   continue;
  } else {
   c[t >> 2] = A + 4;
   k = y;
   w = I;
   continue;
  }
 }
 I = a[l >> 0] | 0;
 w = c[p >> 2] | 0;
 if ((((I & 1) == 0 ? (I & 255) >>> 1 : c[l + 4 >> 2] | 0) | 0) != 0 ? (w - o | 0) < 160 : 0) {
  I = c[q >> 2] | 0;
  q = w + 4 | 0;
  c[p >> 2] = q;
  c[w >> 2] = I;
  L = q;
 } else L = w;
 c[h >> 2] = ho(F, c[n >> 2] | 0, g, r) | 0;
 Zj(l, o, L, g);
 if (D) {
  L = c[D + 12 >> 2] | 0;
  if ((L | 0) == (c[D + 16 >> 2] | 0)) M = ub[c[(c[D >> 2] | 0) + 36 >> 2] & 63](D) | 0; else M = c[L >> 2] | 0;
  if ((M | 0) == -1) {
   c[d >> 2] = 0;
   N = 1;
  } else N = 0;
 } else N = 1;
 do if (E) {
  M = c[E + 12 >> 2] | 0;
  if ((M | 0) == (c[E + 16 >> 2] | 0)) O = ub[c[(c[E >> 2] | 0) + 36 >> 2] & 63](E) | 0; else O = c[M >> 2] | 0;
  if ((O | 0) != -1) if (N) break; else {
   G = 46;
   break;
  } else {
   c[e >> 2] = 0;
   G = 44;
   break;
  }
 } else G = 44; while (0);
 if ((G | 0) == 44 ? N : 0) G = 46;
 if ((G | 0) == 46) c[g >> 2] = c[g >> 2] | 2;
 g = c[d >> 2] | 0;
 $e(m);
 $e(l);
 i = b;
 return g | 0;
}

function Hm(b, e, f, g, j, k) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 j = j | 0;
 k = k | 0;
 var l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0;
 b = i;
 i = i + 240 | 0;
 l = b + 208 | 0;
 m = b + 203 | 0;
 n = b + 202 | 0;
 o = b + 24 | 0;
 p = b + 12 | 0;
 q = b + 8 | 0;
 r = b + 40 | 0;
 s = b + 4 | 0;
 t = b;
 u = b + 201 | 0;
 v = b + 200 | 0;
 qh(o, g, l, m, n);
 c[p >> 2] = 0;
 c[p + 4 >> 2] = 0;
 c[p + 8 >> 2] = 0;
 if (!(a[p >> 0] & 1)) w = 10; else w = (c[p >> 2] & -2) + -1 | 0;
 cf(p, w, 0);
 w = p + 8 | 0;
 g = p + 1 | 0;
 x = (a[p >> 0] & 1) == 0 ? g : c[w >> 2] | 0;
 c[q >> 2] = x;
 c[s >> 2] = r;
 c[t >> 2] = 0;
 a[u >> 0] = 1;
 a[v >> 0] = 69;
 y = p + 4 | 0;
 z = a[m >> 0] | 0;
 m = a[n >> 0] | 0;
 n = c[e >> 2] | 0;
 A = x;
 a : while (1) {
  if (n) if ((c[n + 12 >> 2] | 0) == (c[n + 16 >> 2] | 0) ? (ub[c[(c[n >> 2] | 0) + 36 >> 2] & 63](n) | 0) == -1 : 0) {
   c[e >> 2] = 0;
   B = 0;
  } else B = n; else B = 0;
  x = (B | 0) == 0;
  C = c[f >> 2] | 0;
  do if (C) {
   if ((c[C + 12 >> 2] | 0) != (c[C + 16 >> 2] | 0)) if (x) {
    D = C;
    break;
   } else {
    E = B;
    F = C;
    G = A;
    break a;
   }
   if ((ub[c[(c[C >> 2] | 0) + 36 >> 2] & 63](C) | 0) != -1) if (x) {
    D = C;
    break;
   } else {
    E = B;
    F = C;
    G = A;
    break a;
   } else {
    c[f >> 2] = 0;
    H = 13;
    break;
   }
  } else H = 13; while (0);
  if ((H | 0) == 13) {
   H = 0;
   if (x) {
    E = B;
    F = 0;
    G = A;
    break;
   } else D = 0;
  }
  C = a[p >> 0] | 0;
  I = (C & 1) == 0 ? (C & 255) >>> 1 : c[y >> 2] | 0;
  if ((c[q >> 2] | 0) == (A + I | 0)) {
   cf(p, I << 1, 0);
   if (!(a[p >> 0] & 1)) J = 10; else J = (c[p >> 2] & -2) + -1 | 0;
   cf(p, J, 0);
   C = (a[p >> 0] & 1) == 0 ? g : c[w >> 2] | 0;
   c[q >> 2] = C + I;
   K = C;
  } else K = A;
  C = B + 12 | 0;
  I = c[C >> 2] | 0;
  L = B + 16 | 0;
  if ((I | 0) == (c[L >> 2] | 0)) M = ub[c[(c[B >> 2] | 0) + 36 >> 2] & 63](B) | 0; else M = d[I >> 0] | 0;
  if (rh(M & 255, u, v, K, q, z, m, o, r, s, t, l) | 0) {
   E = B;
   F = D;
   G = K;
   break;
  }
  I = c[C >> 2] | 0;
  if ((I | 0) == (c[L >> 2] | 0)) {
   ub[c[(c[B >> 2] | 0) + 40 >> 2] & 63](B) | 0;
   n = B;
   A = K;
   continue;
  } else {
   c[C >> 2] = I + 1;
   n = B;
   A = K;
   continue;
  }
 }
 K = a[o >> 0] | 0;
 A = c[s >> 2] | 0;
 if (!((a[u >> 0] | 0) == 0 ? 1 : (((K & 1) == 0 ? (K & 255) >>> 1 : c[o + 4 >> 2] | 0) | 0) == 0) ? (A - r | 0) < 160 : 0) {
  K = c[t >> 2] | 0;
  t = A + 4 | 0;
  c[s >> 2] = t;
  c[A >> 2] = K;
  N = t;
 } else N = A;
 h[k >> 3] = +_n(G, c[q >> 2] | 0, j);
 Zj(o, r, N, j);
 if (E) if ((c[E + 12 >> 2] | 0) == (c[E + 16 >> 2] | 0) ? (ub[c[(c[E >> 2] | 0) + 36 >> 2] & 63](E) | 0) == -1 : 0) {
  c[e >> 2] = 0;
  O = 0;
 } else O = E; else O = 0;
 E = (O | 0) == 0;
 do if (F) {
  if ((c[F + 12 >> 2] | 0) == (c[F + 16 >> 2] | 0) ? (ub[c[(c[F >> 2] | 0) + 36 >> 2] & 63](F) | 0) == -1 : 0) {
   c[f >> 2] = 0;
   H = 38;
   break;
  }
  if (!E) H = 39;
 } else H = 38; while (0);
 if ((H | 0) == 38 ? E : 0) H = 39;
 if ((H | 0) == 39) c[j >> 2] = c[j >> 2] | 2;
 j = c[e >> 2] | 0;
 $e(p);
 $e(o);
 i = b;
 return j | 0;
}

function Gm(b, e, f, g, j, k) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 j = j | 0;
 k = k | 0;
 var l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0;
 b = i;
 i = i + 240 | 0;
 l = b + 208 | 0;
 m = b + 203 | 0;
 n = b + 202 | 0;
 o = b + 24 | 0;
 p = b + 12 | 0;
 q = b + 8 | 0;
 r = b + 40 | 0;
 s = b + 4 | 0;
 t = b;
 u = b + 201 | 0;
 v = b + 200 | 0;
 qh(o, g, l, m, n);
 c[p >> 2] = 0;
 c[p + 4 >> 2] = 0;
 c[p + 8 >> 2] = 0;
 if (!(a[p >> 0] & 1)) w = 10; else w = (c[p >> 2] & -2) + -1 | 0;
 cf(p, w, 0);
 w = p + 8 | 0;
 g = p + 1 | 0;
 x = (a[p >> 0] & 1) == 0 ? g : c[w >> 2] | 0;
 c[q >> 2] = x;
 c[s >> 2] = r;
 c[t >> 2] = 0;
 a[u >> 0] = 1;
 a[v >> 0] = 69;
 y = p + 4 | 0;
 z = a[m >> 0] | 0;
 m = a[n >> 0] | 0;
 n = c[e >> 2] | 0;
 A = x;
 a : while (1) {
  if (n) if ((c[n + 12 >> 2] | 0) == (c[n + 16 >> 2] | 0) ? (ub[c[(c[n >> 2] | 0) + 36 >> 2] & 63](n) | 0) == -1 : 0) {
   c[e >> 2] = 0;
   B = 0;
  } else B = n; else B = 0;
  x = (B | 0) == 0;
  C = c[f >> 2] | 0;
  do if (C) {
   if ((c[C + 12 >> 2] | 0) != (c[C + 16 >> 2] | 0)) if (x) {
    D = C;
    break;
   } else {
    E = B;
    F = C;
    G = A;
    break a;
   }
   if ((ub[c[(c[C >> 2] | 0) + 36 >> 2] & 63](C) | 0) != -1) if (x) {
    D = C;
    break;
   } else {
    E = B;
    F = C;
    G = A;
    break a;
   } else {
    c[f >> 2] = 0;
    H = 13;
    break;
   }
  } else H = 13; while (0);
  if ((H | 0) == 13) {
   H = 0;
   if (x) {
    E = B;
    F = 0;
    G = A;
    break;
   } else D = 0;
  }
  C = a[p >> 0] | 0;
  I = (C & 1) == 0 ? (C & 255) >>> 1 : c[y >> 2] | 0;
  if ((c[q >> 2] | 0) == (A + I | 0)) {
   cf(p, I << 1, 0);
   if (!(a[p >> 0] & 1)) J = 10; else J = (c[p >> 2] & -2) + -1 | 0;
   cf(p, J, 0);
   C = (a[p >> 0] & 1) == 0 ? g : c[w >> 2] | 0;
   c[q >> 2] = C + I;
   K = C;
  } else K = A;
  C = B + 12 | 0;
  I = c[C >> 2] | 0;
  L = B + 16 | 0;
  if ((I | 0) == (c[L >> 2] | 0)) M = ub[c[(c[B >> 2] | 0) + 36 >> 2] & 63](B) | 0; else M = d[I >> 0] | 0;
  if (rh(M & 255, u, v, K, q, z, m, o, r, s, t, l) | 0) {
   E = B;
   F = D;
   G = K;
   break;
  }
  I = c[C >> 2] | 0;
  if ((I | 0) == (c[L >> 2] | 0)) {
   ub[c[(c[B >> 2] | 0) + 40 >> 2] & 63](B) | 0;
   n = B;
   A = K;
   continue;
  } else {
   c[C >> 2] = I + 1;
   n = B;
   A = K;
   continue;
  }
 }
 K = a[o >> 0] | 0;
 A = c[s >> 2] | 0;
 if (!((a[u >> 0] | 0) == 0 ? 1 : (((K & 1) == 0 ? (K & 255) >>> 1 : c[o + 4 >> 2] | 0) | 0) == 0) ? (A - r | 0) < 160 : 0) {
  K = c[t >> 2] | 0;
  t = A + 4 | 0;
  c[s >> 2] = t;
  c[A >> 2] = K;
  N = t;
 } else N = A;
 h[k >> 3] = +$n(G, c[q >> 2] | 0, j);
 Zj(o, r, N, j);
 if (E) if ((c[E + 12 >> 2] | 0) == (c[E + 16 >> 2] | 0) ? (ub[c[(c[E >> 2] | 0) + 36 >> 2] & 63](E) | 0) == -1 : 0) {
  c[e >> 2] = 0;
  O = 0;
 } else O = E; else O = 0;
 E = (O | 0) == 0;
 do if (F) {
  if ((c[F + 12 >> 2] | 0) == (c[F + 16 >> 2] | 0) ? (ub[c[(c[F >> 2] | 0) + 36 >> 2] & 63](F) | 0) == -1 : 0) {
   c[f >> 2] = 0;
   H = 38;
   break;
  }
  if (!E) H = 39;
 } else H = 38; while (0);
 if ((H | 0) == 38 ? E : 0) H = 39;
 if ((H | 0) == 39) c[j >> 2] = c[j >> 2] | 2;
 j = c[e >> 2] | 0;
 $e(p);
 $e(o);
 i = b;
 return j | 0;
}

function Fm(b, e, f, h, j, k) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 h = h | 0;
 j = j | 0;
 k = k | 0;
 var l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0;
 b = i;
 i = i + 240 | 0;
 l = b + 208 | 0;
 m = b + 203 | 0;
 n = b + 202 | 0;
 o = b + 24 | 0;
 p = b + 12 | 0;
 q = b + 8 | 0;
 r = b + 40 | 0;
 s = b + 4 | 0;
 t = b;
 u = b + 201 | 0;
 v = b + 200 | 0;
 qh(o, h, l, m, n);
 c[p >> 2] = 0;
 c[p + 4 >> 2] = 0;
 c[p + 8 >> 2] = 0;
 if (!(a[p >> 0] & 1)) w = 10; else w = (c[p >> 2] & -2) + -1 | 0;
 cf(p, w, 0);
 w = p + 8 | 0;
 h = p + 1 | 0;
 x = (a[p >> 0] & 1) == 0 ? h : c[w >> 2] | 0;
 c[q >> 2] = x;
 c[s >> 2] = r;
 c[t >> 2] = 0;
 a[u >> 0] = 1;
 a[v >> 0] = 69;
 y = p + 4 | 0;
 z = a[m >> 0] | 0;
 m = a[n >> 0] | 0;
 n = c[e >> 2] | 0;
 A = x;
 a : while (1) {
  if (n) if ((c[n + 12 >> 2] | 0) == (c[n + 16 >> 2] | 0) ? (ub[c[(c[n >> 2] | 0) + 36 >> 2] & 63](n) | 0) == -1 : 0) {
   c[e >> 2] = 0;
   B = 0;
  } else B = n; else B = 0;
  x = (B | 0) == 0;
  C = c[f >> 2] | 0;
  do if (C) {
   if ((c[C + 12 >> 2] | 0) != (c[C + 16 >> 2] | 0)) if (x) {
    D = C;
    break;
   } else {
    E = B;
    F = C;
    G = A;
    break a;
   }
   if ((ub[c[(c[C >> 2] | 0) + 36 >> 2] & 63](C) | 0) != -1) if (x) {
    D = C;
    break;
   } else {
    E = B;
    F = C;
    G = A;
    break a;
   } else {
    c[f >> 2] = 0;
    H = 13;
    break;
   }
  } else H = 13; while (0);
  if ((H | 0) == 13) {
   H = 0;
   if (x) {
    E = B;
    F = 0;
    G = A;
    break;
   } else D = 0;
  }
  C = a[p >> 0] | 0;
  I = (C & 1) == 0 ? (C & 255) >>> 1 : c[y >> 2] | 0;
  if ((c[q >> 2] | 0) == (A + I | 0)) {
   cf(p, I << 1, 0);
   if (!(a[p >> 0] & 1)) J = 10; else J = (c[p >> 2] & -2) + -1 | 0;
   cf(p, J, 0);
   C = (a[p >> 0] & 1) == 0 ? h : c[w >> 2] | 0;
   c[q >> 2] = C + I;
   K = C;
  } else K = A;
  C = B + 12 | 0;
  I = c[C >> 2] | 0;
  L = B + 16 | 0;
  if ((I | 0) == (c[L >> 2] | 0)) M = ub[c[(c[B >> 2] | 0) + 36 >> 2] & 63](B) | 0; else M = d[I >> 0] | 0;
  if (rh(M & 255, u, v, K, q, z, m, o, r, s, t, l) | 0) {
   E = B;
   F = D;
   G = K;
   break;
  }
  I = c[C >> 2] | 0;
  if ((I | 0) == (c[L >> 2] | 0)) {
   ub[c[(c[B >> 2] | 0) + 40 >> 2] & 63](B) | 0;
   n = B;
   A = K;
   continue;
  } else {
   c[C >> 2] = I + 1;
   n = B;
   A = K;
   continue;
  }
 }
 K = a[o >> 0] | 0;
 A = c[s >> 2] | 0;
 if (!((a[u >> 0] | 0) == 0 ? 1 : (((K & 1) == 0 ? (K & 255) >>> 1 : c[o + 4 >> 2] | 0) | 0) == 0) ? (A - r | 0) < 160 : 0) {
  K = c[t >> 2] | 0;
  t = A + 4 | 0;
  c[s >> 2] = t;
  c[A >> 2] = K;
  N = t;
 } else N = A;
 g[k >> 2] = +ao(G, c[q >> 2] | 0, j);
 Zj(o, r, N, j);
 if (E) if ((c[E + 12 >> 2] | 0) == (c[E + 16 >> 2] | 0) ? (ub[c[(c[E >> 2] | 0) + 36 >> 2] & 63](E) | 0) == -1 : 0) {
  c[e >> 2] = 0;
  O = 0;
 } else O = E; else O = 0;
 E = (O | 0) == 0;
 do if (F) {
  if ((c[F + 12 >> 2] | 0) == (c[F + 16 >> 2] | 0) ? (ub[c[(c[F >> 2] | 0) + 36 >> 2] & 63](F) | 0) == -1 : 0) {
   c[f >> 2] = 0;
   H = 38;
   break;
  }
  if (!E) H = 39;
 } else H = 38; while (0);
 if ((H | 0) == 38 ? E : 0) H = 39;
 if ((H | 0) == 39) c[j >> 2] = c[j >> 2] | 2;
 j = c[e >> 2] | 0;
 $e(p);
 $e(o);
 i = b;
 return j | 0;
}

function Em(b, e, f, g, h, j) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0;
 b = i;
 i = i + 240 | 0;
 k = b + 202 | 0;
 l = b + 200 | 0;
 m = b + 24 | 0;
 n = b + 12 | 0;
 o = b + 8 | 0;
 p = b + 40 | 0;
 q = b + 4 | 0;
 r = b;
 s = im(g) | 0;
 ph(m, g, k, l);
 c[n >> 2] = 0;
 c[n + 4 >> 2] = 0;
 c[n + 8 >> 2] = 0;
 if (!(a[n >> 0] & 1)) t = 10; else t = (c[n >> 2] & -2) + -1 | 0;
 cf(n, t, 0);
 t = n + 8 | 0;
 g = n + 1 | 0;
 u = (a[n >> 0] & 1) == 0 ? g : c[t >> 2] | 0;
 c[o >> 2] = u;
 c[q >> 2] = p;
 c[r >> 2] = 0;
 v = n + 4 | 0;
 w = a[l >> 0] | 0;
 l = c[e >> 2] | 0;
 x = u;
 a : while (1) {
  if (l) if ((c[l + 12 >> 2] | 0) == (c[l + 16 >> 2] | 0) ? (ub[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0) == -1 : 0) {
   c[e >> 2] = 0;
   y = 0;
  } else y = l; else y = 0;
  u = (y | 0) == 0;
  z = c[f >> 2] | 0;
  do if (z) {
   if ((c[z + 12 >> 2] | 0) != (c[z + 16 >> 2] | 0)) if (u) {
    A = z;
    break;
   } else {
    B = y;
    C = z;
    E = x;
    break a;
   }
   if ((ub[c[(c[z >> 2] | 0) + 36 >> 2] & 63](z) | 0) != -1) if (u) {
    A = z;
    break;
   } else {
    B = y;
    C = z;
    E = x;
    break a;
   } else {
    c[f >> 2] = 0;
    F = 13;
    break;
   }
  } else F = 13; while (0);
  if ((F | 0) == 13) {
   F = 0;
   if (u) {
    B = y;
    C = 0;
    E = x;
    break;
   } else A = 0;
  }
  z = a[n >> 0] | 0;
  G = (z & 1) == 0 ? (z & 255) >>> 1 : c[v >> 2] | 0;
  if ((c[o >> 2] | 0) == (x + G | 0)) {
   cf(n, G << 1, 0);
   if (!(a[n >> 0] & 1)) H = 10; else H = (c[n >> 2] & -2) + -1 | 0;
   cf(n, H, 0);
   z = (a[n >> 0] & 1) == 0 ? g : c[t >> 2] | 0;
   c[o >> 2] = z + G;
   I = z;
  } else I = x;
  z = y + 12 | 0;
  G = c[z >> 2] | 0;
  J = y + 16 | 0;
  if ((G | 0) == (c[J >> 2] | 0)) K = ub[c[(c[y >> 2] | 0) + 36 >> 2] & 63](y) | 0; else K = d[G >> 0] | 0;
  if ($g(K & 255, s, I, o, r, w, m, p, q, k) | 0) {
   B = y;
   C = A;
   E = I;
   break;
  }
  G = c[z >> 2] | 0;
  if ((G | 0) == (c[J >> 2] | 0)) {
   ub[c[(c[y >> 2] | 0) + 40 >> 2] & 63](y) | 0;
   l = y;
   x = I;
   continue;
  } else {
   c[z >> 2] = G + 1;
   l = y;
   x = I;
   continue;
  }
 }
 I = a[m >> 0] | 0;
 x = c[q >> 2] | 0;
 if ((((I & 1) == 0 ? (I & 255) >>> 1 : c[m + 4 >> 2] | 0) | 0) != 0 ? (x - p | 0) < 160 : 0) {
  I = c[r >> 2] | 0;
  r = x + 4 | 0;
  c[q >> 2] = r;
  c[x >> 2] = I;
  L = r;
 } else L = x;
 x = bo(E, c[o >> 2] | 0, h, s) | 0;
 s = j;
 c[s >> 2] = x;
 c[s + 4 >> 2] = D;
 Zj(m, p, L, h);
 if (B) if ((c[B + 12 >> 2] | 0) == (c[B + 16 >> 2] | 0) ? (ub[c[(c[B >> 2] | 0) + 36 >> 2] & 63](B) | 0) == -1 : 0) {
  c[e >> 2] = 0;
  M = 0;
 } else M = B; else M = 0;
 B = (M | 0) == 0;
 do if (C) {
  if ((c[C + 12 >> 2] | 0) == (c[C + 16 >> 2] | 0) ? (ub[c[(c[C >> 2] | 0) + 36 >> 2] & 63](C) | 0) == -1 : 0) {
   c[f >> 2] = 0;
   F = 38;
   break;
  }
  if (!B) F = 39;
 } else F = 38; while (0);
 if ((F | 0) == 38 ? B : 0) F = 39;
 if ((F | 0) == 39) c[h >> 2] = c[h >> 2] | 2;
 h = c[e >> 2] | 0;
 $e(n);
 $e(m);
 i = b;
 return h | 0;
}

function Am(b, e, f, g, h, j) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0;
 b = i;
 i = i + 240 | 0;
 k = b + 202 | 0;
 l = b + 200 | 0;
 m = b + 24 | 0;
 n = b + 12 | 0;
 o = b + 8 | 0;
 p = b + 40 | 0;
 q = b + 4 | 0;
 r = b;
 s = im(g) | 0;
 ph(m, g, k, l);
 c[n >> 2] = 0;
 c[n + 4 >> 2] = 0;
 c[n + 8 >> 2] = 0;
 if (!(a[n >> 0] & 1)) t = 10; else t = (c[n >> 2] & -2) + -1 | 0;
 cf(n, t, 0);
 t = n + 8 | 0;
 g = n + 1 | 0;
 u = (a[n >> 0] & 1) == 0 ? g : c[t >> 2] | 0;
 c[o >> 2] = u;
 c[q >> 2] = p;
 c[r >> 2] = 0;
 v = n + 4 | 0;
 w = a[l >> 0] | 0;
 l = c[e >> 2] | 0;
 x = u;
 a : while (1) {
  if (l) if ((c[l + 12 >> 2] | 0) == (c[l + 16 >> 2] | 0) ? (ub[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0) == -1 : 0) {
   c[e >> 2] = 0;
   y = 0;
  } else y = l; else y = 0;
  u = (y | 0) == 0;
  z = c[f >> 2] | 0;
  do if (z) {
   if ((c[z + 12 >> 2] | 0) != (c[z + 16 >> 2] | 0)) if (u) {
    A = z;
    break;
   } else {
    B = y;
    C = z;
    E = x;
    break a;
   }
   if ((ub[c[(c[z >> 2] | 0) + 36 >> 2] & 63](z) | 0) != -1) if (u) {
    A = z;
    break;
   } else {
    B = y;
    C = z;
    E = x;
    break a;
   } else {
    c[f >> 2] = 0;
    F = 13;
    break;
   }
  } else F = 13; while (0);
  if ((F | 0) == 13) {
   F = 0;
   if (u) {
    B = y;
    C = 0;
    E = x;
    break;
   } else A = 0;
  }
  z = a[n >> 0] | 0;
  G = (z & 1) == 0 ? (z & 255) >>> 1 : c[v >> 2] | 0;
  if ((c[o >> 2] | 0) == (x + G | 0)) {
   cf(n, G << 1, 0);
   if (!(a[n >> 0] & 1)) H = 10; else H = (c[n >> 2] & -2) + -1 | 0;
   cf(n, H, 0);
   z = (a[n >> 0] & 1) == 0 ? g : c[t >> 2] | 0;
   c[o >> 2] = z + G;
   I = z;
  } else I = x;
  z = y + 12 | 0;
  G = c[z >> 2] | 0;
  J = y + 16 | 0;
  if ((G | 0) == (c[J >> 2] | 0)) K = ub[c[(c[y >> 2] | 0) + 36 >> 2] & 63](y) | 0; else K = d[G >> 0] | 0;
  if ($g(K & 255, s, I, o, r, w, m, p, q, k) | 0) {
   B = y;
   C = A;
   E = I;
   break;
  }
  G = c[z >> 2] | 0;
  if ((G | 0) == (c[J >> 2] | 0)) {
   ub[c[(c[y >> 2] | 0) + 40 >> 2] & 63](y) | 0;
   l = y;
   x = I;
   continue;
  } else {
   c[z >> 2] = G + 1;
   l = y;
   x = I;
   continue;
  }
 }
 I = a[m >> 0] | 0;
 x = c[q >> 2] | 0;
 if ((((I & 1) == 0 ? (I & 255) >>> 1 : c[m + 4 >> 2] | 0) | 0) != 0 ? (x - p | 0) < 160 : 0) {
  I = c[r >> 2] | 0;
  r = x + 4 | 0;
  c[q >> 2] = r;
  c[x >> 2] = I;
  L = r;
 } else L = x;
 x = go(E, c[o >> 2] | 0, h, s) | 0;
 s = j;
 c[s >> 2] = x;
 c[s + 4 >> 2] = D;
 Zj(m, p, L, h);
 if (B) if ((c[B + 12 >> 2] | 0) == (c[B + 16 >> 2] | 0) ? (ub[c[(c[B >> 2] | 0) + 36 >> 2] & 63](B) | 0) == -1 : 0) {
  c[e >> 2] = 0;
  M = 0;
 } else M = B; else M = 0;
 B = (M | 0) == 0;
 do if (C) {
  if ((c[C + 12 >> 2] | 0) == (c[C + 16 >> 2] | 0) ? (ub[c[(c[C >> 2] | 0) + 36 >> 2] & 63](C) | 0) == -1 : 0) {
   c[f >> 2] = 0;
   F = 38;
   break;
  }
  if (!B) F = 39;
 } else F = 38; while (0);
 if ((F | 0) == 38 ? B : 0) F = 39;
 if ((F | 0) == 39) c[h >> 2] = c[h >> 2] | 2;
 h = c[e >> 2] | 0;
 $e(n);
 $e(m);
 i = b;
 return h | 0;
}

function Mn(b, e, f, g, h, i, j, k) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 j = j | 0;
 k = k | 0;
 var l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0;
 c[f >> 2] = b;
 c[i >> 2] = g;
 if (k & 4) {
  k = c[f >> 2] | 0;
  b = e;
  if ((((b - k | 0) > 2 ? (a[k >> 0] | 0) == -17 : 0) ? (a[k + 1 >> 0] | 0) == -69 : 0) ? (a[k + 2 >> 0] | 0) == -65 : 0) {
   c[f >> 2] = k + 3;
   l = c[i >> 2] | 0;
   m = b;
  } else {
   l = g;
   m = b;
  }
 } else {
  l = g;
  m = e;
 }
 g = c[f >> 2] | 0;
 b = g >>> 0 < e >>> 0;
 a : do if (b & l >>> 0 < h >>> 0) {
  k = g;
  n = l;
  while (1) {
   o = a[k >> 0] | 0;
   p = o & 255;
   do if (o << 24 >> 24 > -1) {
    if (p >>> 0 > j >>> 0) {
     q = 2;
     break a;
    }
    c[n >> 2] = p;
    c[f >> 2] = k + 1;
   } else {
    if ((o & 255) < 194) {
     q = 2;
     break a;
    }
    if ((o & 255) < 224) {
     if ((m - k | 0) < 2) {
      q = 1;
      break a;
     }
     r = d[k + 1 >> 0] | 0;
     if ((r & 192 | 0) != 128) {
      q = 2;
      break a;
     }
     s = r & 63 | p << 6 & 1984;
     if (s >>> 0 > j >>> 0) {
      q = 2;
      break a;
     }
     c[n >> 2] = s;
     c[f >> 2] = k + 2;
     break;
    }
    if ((o & 255) < 240) {
     if ((m - k | 0) < 3) {
      q = 1;
      break a;
     }
     s = a[k + 1 >> 0] | 0;
     r = a[k + 2 >> 0] | 0;
     switch (p | 0) {
     case 224:
      {
       if ((s & -32) << 24 >> 24 != -96) {
        q = 2;
        break a;
       }
       break;
      }
     case 237:
      {
       if ((s & -32) << 24 >> 24 != -128) {
        q = 2;
        break a;
       }
       break;
      }
     default:
      if ((s & -64) << 24 >> 24 != -128) {
       q = 2;
       break a;
      }
     }
     t = r & 255;
     if ((t & 192 | 0) != 128) {
      q = 2;
      break a;
     }
     r = (s & 255) << 6 & 4032 | p << 12 & 61440 | t & 63;
     if (r >>> 0 > j >>> 0) {
      q = 2;
      break a;
     }
     c[n >> 2] = r;
     c[f >> 2] = k + 3;
     break;
    }
    if ((o & 255) >= 245) {
     q = 2;
     break a;
    }
    if ((m - k | 0) < 4) {
     q = 1;
     break a;
    }
    r = a[k + 1 >> 0] | 0;
    t = a[k + 2 >> 0] | 0;
    s = a[k + 3 >> 0] | 0;
    switch (p | 0) {
    case 240:
     {
      if ((r + 112 & 255) >= 48) {
       q = 2;
       break a;
      }
      break;
     }
    case 244:
     {
      if ((r & -16) << 24 >> 24 != -128) {
       q = 2;
       break a;
      }
      break;
     }
    default:
     if ((r & -64) << 24 >> 24 != -128) {
      q = 2;
      break a;
     }
    }
    u = t & 255;
    if ((u & 192 | 0) != 128) {
     q = 2;
     break a;
    }
    t = s & 255;
    if ((t & 192 | 0) != 128) {
     q = 2;
     break a;
    }
    s = (r & 255) << 12 & 258048 | p << 18 & 1835008 | u << 6 & 4032 | t & 63;
    if (s >>> 0 > j >>> 0) {
     q = 2;
     break a;
    }
    c[n >> 2] = s;
    c[f >> 2] = k + 4;
   } while (0);
   n = (c[i >> 2] | 0) + 4 | 0;
   c[i >> 2] = n;
   k = c[f >> 2] | 0;
   p = k >>> 0 < e >>> 0;
   if (!(p & n >>> 0 < h >>> 0)) {
    v = p;
    w = 38;
    break;
   }
  }
 } else {
  v = b;
  w = 38;
 } while (0);
 if ((w | 0) == 38) q = v & 1;
 return q | 0;
}

function _g(b, e, f, g, h, j) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0;
 b = i;
 i = i + 240 | 0;
 k = b;
 l = b + 208 | 0;
 m = b + 32 | 0;
 n = b + 28 | 0;
 o = b + 16 | 0;
 p = b + 12 | 0;
 q = b + 48 | 0;
 r = b + 8 | 0;
 s = b + 4 | 0;
 c[m >> 2] = 0;
 c[m + 4 >> 2] = 0;
 c[m + 8 >> 2] = 0;
 t = xf(g) | 0;
 c[n >> 2] = t;
 g = Mk(n, 9336) | 0;
 yb[c[(c[g >> 2] | 0) + 32 >> 2] & 7](g, 19968, 19994, l) | 0;
 ko(t) | 0;
 c[o >> 2] = 0;
 c[o + 4 >> 2] = 0;
 c[o + 8 >> 2] = 0;
 if (!(a[o >> 0] & 1)) u = 10; else u = (c[o >> 2] & -2) + -1 | 0;
 cf(o, u, 0);
 u = o + 8 | 0;
 t = o + 1 | 0;
 g = (a[o >> 0] & 1) == 0 ? t : c[u >> 2] | 0;
 c[p >> 2] = g;
 c[r >> 2] = q;
 c[s >> 2] = 0;
 n = o + 4 | 0;
 v = c[e >> 2] | 0;
 w = g;
 a : while (1) {
  if (v) if ((c[v + 12 >> 2] | 0) == (c[v + 16 >> 2] | 0) ? (ub[c[(c[v >> 2] | 0) + 36 >> 2] & 63](v) | 0) == -1 : 0) {
   c[e >> 2] = 0;
   x = 0;
  } else x = v; else x = 0;
  g = (x | 0) == 0;
  y = c[f >> 2] | 0;
  do if (y) {
   if ((c[y + 12 >> 2] | 0) != (c[y + 16 >> 2] | 0)) if (g) {
    z = y;
    break;
   } else {
    A = x;
    B = y;
    C = w;
    break a;
   }
   if ((ub[c[(c[y >> 2] | 0) + 36 >> 2] & 63](y) | 0) != -1) if (g) {
    z = y;
    break;
   } else {
    A = x;
    B = y;
    C = w;
    break a;
   } else {
    c[f >> 2] = 0;
    D = 13;
    break;
   }
  } else D = 13; while (0);
  if ((D | 0) == 13) {
   D = 0;
   if (g) {
    A = x;
    B = 0;
    C = w;
    break;
   } else z = 0;
  }
  y = a[o >> 0] | 0;
  E = (y & 1) == 0 ? (y & 255) >>> 1 : c[n >> 2] | 0;
  if ((c[p >> 2] | 0) == (w + E | 0)) {
   cf(o, E << 1, 0);
   if (!(a[o >> 0] & 1)) F = 10; else F = (c[o >> 2] & -2) + -1 | 0;
   cf(o, F, 0);
   y = (a[o >> 0] & 1) == 0 ? t : c[u >> 2] | 0;
   c[p >> 2] = y + E;
   G = y;
  } else G = w;
  y = x + 12 | 0;
  E = c[y >> 2] | 0;
  H = x + 16 | 0;
  if ((E | 0) == (c[H >> 2] | 0)) I = ub[c[(c[x >> 2] | 0) + 36 >> 2] & 63](x) | 0; else I = d[E >> 0] | 0;
  if ($g(I & 255, 16, G, p, s, 0, m, q, r, l) | 0) {
   A = x;
   B = z;
   C = G;
   break;
  }
  E = c[y >> 2] | 0;
  if ((E | 0) == (c[H >> 2] | 0)) {
   ub[c[(c[x >> 2] | 0) + 40 >> 2] & 63](x) | 0;
   v = x;
   w = G;
   continue;
  } else {
   c[y >> 2] = E + 1;
   v = x;
   w = G;
   continue;
  }
 }
 cf(o, (c[p >> 2] | 0) - C | 0, 0);
 C = (a[o >> 0] & 1) == 0 ? t : c[u >> 2] | 0;
 u = ah() | 0;
 c[k >> 2] = j;
 if ((Im(C, u, 21352, k) | 0) != 1) c[h >> 2] = 4;
 if (A) if ((c[A + 12 >> 2] | 0) == (c[A + 16 >> 2] | 0) ? (ub[c[(c[A >> 2] | 0) + 36 >> 2] & 63](A) | 0) == -1 : 0) {
  c[e >> 2] = 0;
  J = 0;
 } else J = A; else J = 0;
 A = (J | 0) == 0;
 do if (B) {
  if ((c[B + 12 >> 2] | 0) == (c[B + 16 >> 2] | 0) ? (ub[c[(c[B >> 2] | 0) + 36 >> 2] & 63](B) | 0) == -1 : 0) {
   c[f >> 2] = 0;
   D = 37;
   break;
  }
  if (!A) D = 38;
 } else D = 37; while (0);
 if ((D | 0) == 37 ? A : 0) D = 38;
 if ((D | 0) == 38) c[h >> 2] = c[h >> 2] | 2;
 h = c[e >> 2] | 0;
 $e(o);
 $e(m);
 i = b;
 return h | 0;
}

function zm(b, e, f, g, h, j) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0;
 b = i;
 i = i + 240 | 0;
 k = b + 202 | 0;
 l = b + 200 | 0;
 m = b + 24 | 0;
 n = b + 12 | 0;
 o = b + 8 | 0;
 p = b + 40 | 0;
 q = b + 4 | 0;
 r = b;
 s = im(g) | 0;
 ph(m, g, k, l);
 c[n >> 2] = 0;
 c[n + 4 >> 2] = 0;
 c[n + 8 >> 2] = 0;
 if (!(a[n >> 0] & 1)) t = 10; else t = (c[n >> 2] & -2) + -1 | 0;
 cf(n, t, 0);
 t = n + 8 | 0;
 g = n + 1 | 0;
 u = (a[n >> 0] & 1) == 0 ? g : c[t >> 2] | 0;
 c[o >> 2] = u;
 c[q >> 2] = p;
 c[r >> 2] = 0;
 v = n + 4 | 0;
 w = a[l >> 0] | 0;
 l = c[e >> 2] | 0;
 x = u;
 a : while (1) {
  if (l) if ((c[l + 12 >> 2] | 0) == (c[l + 16 >> 2] | 0) ? (ub[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0) == -1 : 0) {
   c[e >> 2] = 0;
   y = 0;
  } else y = l; else y = 0;
  u = (y | 0) == 0;
  z = c[f >> 2] | 0;
  do if (z) {
   if ((c[z + 12 >> 2] | 0) != (c[z + 16 >> 2] | 0)) if (u) {
    A = z;
    break;
   } else {
    B = y;
    C = z;
    D = x;
    break a;
   }
   if ((ub[c[(c[z >> 2] | 0) + 36 >> 2] & 63](z) | 0) != -1) if (u) {
    A = z;
    break;
   } else {
    B = y;
    C = z;
    D = x;
    break a;
   } else {
    c[f >> 2] = 0;
    E = 13;
    break;
   }
  } else E = 13; while (0);
  if ((E | 0) == 13) {
   E = 0;
   if (u) {
    B = y;
    C = 0;
    D = x;
    break;
   } else A = 0;
  }
  z = a[n >> 0] | 0;
  F = (z & 1) == 0 ? (z & 255) >>> 1 : c[v >> 2] | 0;
  if ((c[o >> 2] | 0) == (x + F | 0)) {
   cf(n, F << 1, 0);
   if (!(a[n >> 0] & 1)) G = 10; else G = (c[n >> 2] & -2) + -1 | 0;
   cf(n, G, 0);
   z = (a[n >> 0] & 1) == 0 ? g : c[t >> 2] | 0;
   c[o >> 2] = z + F;
   H = z;
  } else H = x;
  z = y + 12 | 0;
  F = c[z >> 2] | 0;
  I = y + 16 | 0;
  if ((F | 0) == (c[I >> 2] | 0)) J = ub[c[(c[y >> 2] | 0) + 36 >> 2] & 63](y) | 0; else J = d[F >> 0] | 0;
  if ($g(J & 255, s, H, o, r, w, m, p, q, k) | 0) {
   B = y;
   C = A;
   D = H;
   break;
  }
  F = c[z >> 2] | 0;
  if ((F | 0) == (c[I >> 2] | 0)) {
   ub[c[(c[y >> 2] | 0) + 40 >> 2] & 63](y) | 0;
   l = y;
   x = H;
   continue;
  } else {
   c[z >> 2] = F + 1;
   l = y;
   x = H;
   continue;
  }
 }
 H = a[m >> 0] | 0;
 x = c[q >> 2] | 0;
 if ((((H & 1) == 0 ? (H & 255) >>> 1 : c[m + 4 >> 2] | 0) | 0) != 0 ? (x - p | 0) < 160 : 0) {
  H = c[r >> 2] | 0;
  r = x + 4 | 0;
  c[q >> 2] = r;
  c[x >> 2] = H;
  K = r;
 } else K = x;
 c[j >> 2] = ho(D, c[o >> 2] | 0, h, s) | 0;
 Zj(m, p, K, h);
 if (B) if ((c[B + 12 >> 2] | 0) == (c[B + 16 >> 2] | 0) ? (ub[c[(c[B >> 2] | 0) + 36 >> 2] & 63](B) | 0) == -1 : 0) {
  c[e >> 2] = 0;
  L = 0;
 } else L = B; else L = 0;
 B = (L | 0) == 0;
 do if (C) {
  if ((c[C + 12 >> 2] | 0) == (c[C + 16 >> 2] | 0) ? (ub[c[(c[C >> 2] | 0) + 36 >> 2] & 63](C) | 0) == -1 : 0) {
   c[f >> 2] = 0;
   E = 38;
   break;
  }
  if (!B) E = 39;
 } else E = 38; while (0);
 if ((E | 0) == 38 ? B : 0) E = 39;
 if ((E | 0) == 39) c[h >> 2] = c[h >> 2] | 2;
 h = c[e >> 2] | 0;
 $e(n);
 $e(m);
 i = b;
 return h | 0;
}

function Dm(b, e, f, g, h, j) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0;
 b = i;
 i = i + 240 | 0;
 k = b + 202 | 0;
 l = b + 200 | 0;
 m = b + 24 | 0;
 n = b + 12 | 0;
 o = b + 8 | 0;
 p = b + 40 | 0;
 q = b + 4 | 0;
 r = b;
 s = im(g) | 0;
 ph(m, g, k, l);
 c[n >> 2] = 0;
 c[n + 4 >> 2] = 0;
 c[n + 8 >> 2] = 0;
 if (!(a[n >> 0] & 1)) t = 10; else t = (c[n >> 2] & -2) + -1 | 0;
 cf(n, t, 0);
 t = n + 8 | 0;
 g = n + 1 | 0;
 u = (a[n >> 0] & 1) == 0 ? g : c[t >> 2] | 0;
 c[o >> 2] = u;
 c[q >> 2] = p;
 c[r >> 2] = 0;
 v = n + 4 | 0;
 w = a[l >> 0] | 0;
 l = c[e >> 2] | 0;
 x = u;
 a : while (1) {
  if (l) if ((c[l + 12 >> 2] | 0) == (c[l + 16 >> 2] | 0) ? (ub[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0) == -1 : 0) {
   c[e >> 2] = 0;
   y = 0;
  } else y = l; else y = 0;
  u = (y | 0) == 0;
  z = c[f >> 2] | 0;
  do if (z) {
   if ((c[z + 12 >> 2] | 0) != (c[z + 16 >> 2] | 0)) if (u) {
    A = z;
    break;
   } else {
    B = y;
    C = z;
    D = x;
    break a;
   }
   if ((ub[c[(c[z >> 2] | 0) + 36 >> 2] & 63](z) | 0) != -1) if (u) {
    A = z;
    break;
   } else {
    B = y;
    C = z;
    D = x;
    break a;
   } else {
    c[f >> 2] = 0;
    E = 13;
    break;
   }
  } else E = 13; while (0);
  if ((E | 0) == 13) {
   E = 0;
   if (u) {
    B = y;
    C = 0;
    D = x;
    break;
   } else A = 0;
  }
  z = a[n >> 0] | 0;
  F = (z & 1) == 0 ? (z & 255) >>> 1 : c[v >> 2] | 0;
  if ((c[o >> 2] | 0) == (x + F | 0)) {
   cf(n, F << 1, 0);
   if (!(a[n >> 0] & 1)) G = 10; else G = (c[n >> 2] & -2) + -1 | 0;
   cf(n, G, 0);
   z = (a[n >> 0] & 1) == 0 ? g : c[t >> 2] | 0;
   c[o >> 2] = z + F;
   H = z;
  } else H = x;
  z = y + 12 | 0;
  F = c[z >> 2] | 0;
  I = y + 16 | 0;
  if ((F | 0) == (c[I >> 2] | 0)) J = ub[c[(c[y >> 2] | 0) + 36 >> 2] & 63](y) | 0; else J = d[F >> 0] | 0;
  if ($g(J & 255, s, H, o, r, w, m, p, q, k) | 0) {
   B = y;
   C = A;
   D = H;
   break;
  }
  F = c[z >> 2] | 0;
  if ((F | 0) == (c[I >> 2] | 0)) {
   ub[c[(c[y >> 2] | 0) + 40 >> 2] & 63](y) | 0;
   l = y;
   x = H;
   continue;
  } else {
   c[z >> 2] = F + 1;
   l = y;
   x = H;
   continue;
  }
 }
 H = a[m >> 0] | 0;
 x = c[q >> 2] | 0;
 if ((((H & 1) == 0 ? (H & 255) >>> 1 : c[m + 4 >> 2] | 0) | 0) != 0 ? (x - p | 0) < 160 : 0) {
  H = c[r >> 2] | 0;
  r = x + 4 | 0;
  c[q >> 2] = r;
  c[x >> 2] = H;
  K = r;
 } else K = x;
 c[j >> 2] = co(D, c[o >> 2] | 0, h, s) | 0;
 Zj(m, p, K, h);
 if (B) if ((c[B + 12 >> 2] | 0) == (c[B + 16 >> 2] | 0) ? (ub[c[(c[B >> 2] | 0) + 36 >> 2] & 63](B) | 0) == -1 : 0) {
  c[e >> 2] = 0;
  L = 0;
 } else L = B; else L = 0;
 B = (L | 0) == 0;
 do if (C) {
  if ((c[C + 12 >> 2] | 0) == (c[C + 16 >> 2] | 0) ? (ub[c[(c[C >> 2] | 0) + 36 >> 2] & 63](C) | 0) == -1 : 0) {
   c[f >> 2] = 0;
   E = 38;
   break;
  }
  if (!B) E = 39;
 } else E = 38; while (0);
 if ((E | 0) == 38 ? B : 0) E = 39;
 if ((E | 0) == 39) c[h >> 2] = c[h >> 2] | 2;
 h = c[e >> 2] | 0;
 $e(n);
 $e(m);
 i = b;
 return h | 0;
}

function Cm(b, e, f, g, h, j) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0;
 b = i;
 i = i + 240 | 0;
 k = b + 202 | 0;
 l = b + 200 | 0;
 m = b + 24 | 0;
 n = b + 12 | 0;
 o = b + 8 | 0;
 p = b + 40 | 0;
 q = b + 4 | 0;
 r = b;
 s = im(g) | 0;
 ph(m, g, k, l);
 c[n >> 2] = 0;
 c[n + 4 >> 2] = 0;
 c[n + 8 >> 2] = 0;
 if (!(a[n >> 0] & 1)) t = 10; else t = (c[n >> 2] & -2) + -1 | 0;
 cf(n, t, 0);
 t = n + 8 | 0;
 g = n + 1 | 0;
 u = (a[n >> 0] & 1) == 0 ? g : c[t >> 2] | 0;
 c[o >> 2] = u;
 c[q >> 2] = p;
 c[r >> 2] = 0;
 v = n + 4 | 0;
 w = a[l >> 0] | 0;
 l = c[e >> 2] | 0;
 x = u;
 a : while (1) {
  if (l) if ((c[l + 12 >> 2] | 0) == (c[l + 16 >> 2] | 0) ? (ub[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0) == -1 : 0) {
   c[e >> 2] = 0;
   y = 0;
  } else y = l; else y = 0;
  u = (y | 0) == 0;
  z = c[f >> 2] | 0;
  do if (z) {
   if ((c[z + 12 >> 2] | 0) != (c[z + 16 >> 2] | 0)) if (u) {
    A = z;
    break;
   } else {
    B = y;
    C = z;
    D = x;
    break a;
   }
   if ((ub[c[(c[z >> 2] | 0) + 36 >> 2] & 63](z) | 0) != -1) if (u) {
    A = z;
    break;
   } else {
    B = y;
    C = z;
    D = x;
    break a;
   } else {
    c[f >> 2] = 0;
    E = 13;
    break;
   }
  } else E = 13; while (0);
  if ((E | 0) == 13) {
   E = 0;
   if (u) {
    B = y;
    C = 0;
    D = x;
    break;
   } else A = 0;
  }
  z = a[n >> 0] | 0;
  F = (z & 1) == 0 ? (z & 255) >>> 1 : c[v >> 2] | 0;
  if ((c[o >> 2] | 0) == (x + F | 0)) {
   cf(n, F << 1, 0);
   if (!(a[n >> 0] & 1)) G = 10; else G = (c[n >> 2] & -2) + -1 | 0;
   cf(n, G, 0);
   z = (a[n >> 0] & 1) == 0 ? g : c[t >> 2] | 0;
   c[o >> 2] = z + F;
   H = z;
  } else H = x;
  z = y + 12 | 0;
  F = c[z >> 2] | 0;
  I = y + 16 | 0;
  if ((F | 0) == (c[I >> 2] | 0)) J = ub[c[(c[y >> 2] | 0) + 36 >> 2] & 63](y) | 0; else J = d[F >> 0] | 0;
  if ($g(J & 255, s, H, o, r, w, m, p, q, k) | 0) {
   B = y;
   C = A;
   D = H;
   break;
  }
  F = c[z >> 2] | 0;
  if ((F | 0) == (c[I >> 2] | 0)) {
   ub[c[(c[y >> 2] | 0) + 40 >> 2] & 63](y) | 0;
   l = y;
   x = H;
   continue;
  } else {
   c[z >> 2] = F + 1;
   l = y;
   x = H;
   continue;
  }
 }
 H = a[m >> 0] | 0;
 x = c[q >> 2] | 0;
 if ((((H & 1) == 0 ? (H & 255) >>> 1 : c[m + 4 >> 2] | 0) | 0) != 0 ? (x - p | 0) < 160 : 0) {
  H = c[r >> 2] | 0;
  r = x + 4 | 0;
  c[q >> 2] = r;
  c[x >> 2] = H;
  K = r;
 } else K = x;
 c[j >> 2] = eo(D, c[o >> 2] | 0, h, s) | 0;
 Zj(m, p, K, h);
 if (B) if ((c[B + 12 >> 2] | 0) == (c[B + 16 >> 2] | 0) ? (ub[c[(c[B >> 2] | 0) + 36 >> 2] & 63](B) | 0) == -1 : 0) {
  c[e >> 2] = 0;
  L = 0;
 } else L = B; else L = 0;
 B = (L | 0) == 0;
 do if (C) {
  if ((c[C + 12 >> 2] | 0) == (c[C + 16 >> 2] | 0) ? (ub[c[(c[C >> 2] | 0) + 36 >> 2] & 63](C) | 0) == -1 : 0) {
   c[f >> 2] = 0;
   E = 38;
   break;
  }
  if (!B) E = 39;
 } else E = 38; while (0);
 if ((E | 0) == 38 ? B : 0) E = 39;
 if ((E | 0) == 39) c[h >> 2] = c[h >> 2] | 2;
 h = c[e >> 2] | 0;
 $e(n);
 $e(m);
 i = b;
 return h | 0;
}

function Bm(e, f, g, h, j, k) {
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 k = k | 0;
 var l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0;
 e = i;
 i = i + 240 | 0;
 l = e + 202 | 0;
 m = e + 200 | 0;
 n = e + 24 | 0;
 o = e + 12 | 0;
 p = e + 8 | 0;
 q = e + 40 | 0;
 r = e + 4 | 0;
 s = e;
 t = im(h) | 0;
 ph(n, h, l, m);
 c[o >> 2] = 0;
 c[o + 4 >> 2] = 0;
 c[o + 8 >> 2] = 0;
 if (!(a[o >> 0] & 1)) u = 10; else u = (c[o >> 2] & -2) + -1 | 0;
 cf(o, u, 0);
 u = o + 8 | 0;
 h = o + 1 | 0;
 v = (a[o >> 0] & 1) == 0 ? h : c[u >> 2] | 0;
 c[p >> 2] = v;
 c[r >> 2] = q;
 c[s >> 2] = 0;
 w = o + 4 | 0;
 x = a[m >> 0] | 0;
 m = c[f >> 2] | 0;
 y = v;
 a : while (1) {
  if (m) if ((c[m + 12 >> 2] | 0) == (c[m + 16 >> 2] | 0) ? (ub[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0) == -1 : 0) {
   c[f >> 2] = 0;
   z = 0;
  } else z = m; else z = 0;
  v = (z | 0) == 0;
  A = c[g >> 2] | 0;
  do if (A) {
   if ((c[A + 12 >> 2] | 0) != (c[A + 16 >> 2] | 0)) if (v) {
    B = A;
    break;
   } else {
    C = z;
    D = A;
    E = y;
    break a;
   }
   if ((ub[c[(c[A >> 2] | 0) + 36 >> 2] & 63](A) | 0) != -1) if (v) {
    B = A;
    break;
   } else {
    C = z;
    D = A;
    E = y;
    break a;
   } else {
    c[g >> 2] = 0;
    F = 13;
    break;
   }
  } else F = 13; while (0);
  if ((F | 0) == 13) {
   F = 0;
   if (v) {
    C = z;
    D = 0;
    E = y;
    break;
   } else B = 0;
  }
  A = a[o >> 0] | 0;
  G = (A & 1) == 0 ? (A & 255) >>> 1 : c[w >> 2] | 0;
  if ((c[p >> 2] | 0) == (y + G | 0)) {
   cf(o, G << 1, 0);
   if (!(a[o >> 0] & 1)) H = 10; else H = (c[o >> 2] & -2) + -1 | 0;
   cf(o, H, 0);
   A = (a[o >> 0] & 1) == 0 ? h : c[u >> 2] | 0;
   c[p >> 2] = A + G;
   I = A;
  } else I = y;
  A = z + 12 | 0;
  G = c[A >> 2] | 0;
  J = z + 16 | 0;
  if ((G | 0) == (c[J >> 2] | 0)) K = ub[c[(c[z >> 2] | 0) + 36 >> 2] & 63](z) | 0; else K = d[G >> 0] | 0;
  if ($g(K & 255, t, I, p, s, x, n, q, r, l) | 0) {
   C = z;
   D = B;
   E = I;
   break;
  }
  G = c[A >> 2] | 0;
  if ((G | 0) == (c[J >> 2] | 0)) {
   ub[c[(c[z >> 2] | 0) + 40 >> 2] & 63](z) | 0;
   m = z;
   y = I;
   continue;
  } else {
   c[A >> 2] = G + 1;
   m = z;
   y = I;
   continue;
  }
 }
 I = a[n >> 0] | 0;
 y = c[r >> 2] | 0;
 if ((((I & 1) == 0 ? (I & 255) >>> 1 : c[n + 4 >> 2] | 0) | 0) != 0 ? (y - q | 0) < 160 : 0) {
  I = c[s >> 2] | 0;
  s = y + 4 | 0;
  c[r >> 2] = s;
  c[y >> 2] = I;
  L = s;
 } else L = y;
 b[k >> 1] = fo(E, c[p >> 2] | 0, j, t) | 0;
 Zj(n, q, L, j);
 if (C) if ((c[C + 12 >> 2] | 0) == (c[C + 16 >> 2] | 0) ? (ub[c[(c[C >> 2] | 0) + 36 >> 2] & 63](C) | 0) == -1 : 0) {
  c[f >> 2] = 0;
  M = 0;
 } else M = C; else M = 0;
 C = (M | 0) == 0;
 do if (D) {
  if ((c[D + 12 >> 2] | 0) == (c[D + 16 >> 2] | 0) ? (ub[c[(c[D >> 2] | 0) + 36 >> 2] & 63](D) | 0) == -1 : 0) {
   c[g >> 2] = 0;
   F = 38;
   break;
  }
  if (!C) F = 39;
 } else F = 38; while (0);
 if ((F | 0) == 38 ? C : 0) F = 39;
 if ((F | 0) == 39) c[j >> 2] = c[j >> 2] | 2;
 j = c[f >> 2] | 0;
 $e(o);
 $e(n);
 i = e;
 return j | 0;
}

function wl(b, d, e, f, g, h, j, k) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 k = k | 0;
 var l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0;
 l = i;
 i = i + 16 | 0;
 m = l;
 a : do if ((e | 0) == (f | 0)) n = f; else {
  o = e;
  while (1) {
   if (!(a[o >> 0] | 0)) {
    n = o;
    break a;
   }
   o = o + 1 | 0;
   if ((o | 0) == (f | 0)) {
    n = f;
    break;
   }
  }
 } while (0);
 c[k >> 2] = h;
 c[g >> 2] = e;
 o = j;
 p = b + 8 | 0;
 b : do if ((h | 0) == (j | 0) | (e | 0) == (f | 0)) {
  q = e;
  r = 29;
 } else {
  b = e;
  s = h;
  t = n;
  c : while (1) {
   u = d;
   v = c[u + 4 >> 2] | 0;
   w = m;
   c[w >> 2] = c[u >> 2];
   c[w + 4 >> 2] = v;
   v = t;
   w = bd(c[p >> 2] | 0) | 0;
   u = nd(s, g, v - b | 0, o - s >> 2, d) | 0;
   if (w) bd(w) | 0;
   switch (u | 0) {
   case 0:
    {
     x = 2;
     break b;
     break;
    }
   case -1:
    {
     y = b;
     z = s;
     A = v;
     break c;
     break;
    }
   default:
    {}
   }
   v = (c[k >> 2] | 0) + (u << 2) | 0;
   c[k >> 2] = v;
   if ((v | 0) == (j | 0)) {
    r = 19;
    break;
   }
   u = c[g >> 2] | 0;
   if ((t | 0) == (f | 0)) {
    B = u;
    C = v;
    D = f;
   } else {
    w = bd(c[p >> 2] | 0) | 0;
    E = ld(v, u, 1, d) | 0;
    if (w) bd(w) | 0;
    if (E) {
     x = 2;
     break b;
    }
    c[k >> 2] = (c[k >> 2] | 0) + 4;
    E = (c[g >> 2] | 0) + 1 | 0;
    c[g >> 2] = E;
    d : do if ((E | 0) == (f | 0)) F = f; else {
     w = E;
     while (1) {
      if (!(a[w >> 0] | 0)) {
       F = w;
       break d;
      }
      w = w + 1 | 0;
      if ((w | 0) == (f | 0)) {
       F = f;
       break;
      }
     }
    } while (0);
    B = E;
    C = c[k >> 2] | 0;
    D = F;
   }
   if ((C | 0) == (j | 0) | (B | 0) == (f | 0)) {
    q = B;
    r = 29;
    break b;
   } else {
    b = B;
    s = C;
    t = D;
   }
  }
  if ((r | 0) == 19) {
   q = c[g >> 2] | 0;
   r = 29;
   break;
  }
  c[k >> 2] = z;
  e : do if ((y | 0) != (c[g >> 2] | 0)) {
   t = y;
   s = z;
   f : while (1) {
    b = bd(c[p >> 2] | 0) | 0;
    w = ld(s, t, A - t | 0, m) | 0;
    if (b) bd(b) | 0;
    switch (w | 0) {
    case -1:
     {
      G = t;
      r = 13;
      break f;
      break;
     }
    case -2:
     {
      H = t;
      r = 14;
      break f;
      break;
     }
    case 0:
     {
      I = t + 1 | 0;
      break;
     }
    default:
     I = t + w | 0;
    }
    s = (c[k >> 2] | 0) + 4 | 0;
    c[k >> 2] = s;
    if ((I | 0) == (c[g >> 2] | 0)) {
     J = I;
     break e;
    } else t = I;
   }
   if ((r | 0) == 13) {
    c[g >> 2] = G;
    x = 2;
    break b;
   } else if ((r | 0) == 14) {
    c[g >> 2] = H;
    x = 1;
    break b;
   }
  } else J = y; while (0);
  c[g >> 2] = J;
  x = (J | 0) != (f | 0) & 1;
 } while (0);
 if ((r | 0) == 29) x = (q | 0) != (f | 0) & 1;
 i = l;
 return x | 0;
}

function In(d, f, g, h, i, j, k, l) {
 d = d | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 j = j | 0;
 k = k | 0;
 l = l | 0;
 var m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 c[g >> 2] = d;
 c[j >> 2] = h;
 d = i;
 if (l & 2) if ((d - h | 0) < 3) m = 1; else {
  c[j >> 2] = h + 1;
  a[h >> 0] = -17;
  h = c[j >> 2] | 0;
  c[j >> 2] = h + 1;
  a[h >> 0] = -69;
  h = c[j >> 2] | 0;
  c[j >> 2] = h + 1;
  a[h >> 0] = -65;
  n = 4;
 } else n = 4;
 a : do if ((n | 0) == 4) {
  h = f;
  l = c[g >> 2] | 0;
  if (l >>> 0 < f >>> 0) {
   i = l;
   while (1) {
    l = b[i >> 1] | 0;
    o = l & 65535;
    if (o >>> 0 > k >>> 0) {
     m = 2;
     break a;
    }
    do if ((l & 65535) < 128) {
     p = c[j >> 2] | 0;
     if ((d - p | 0) < 1) {
      m = 1;
      break a;
     }
     c[j >> 2] = p + 1;
     a[p >> 0] = l;
    } else {
     if ((l & 65535) < 2048) {
      p = c[j >> 2] | 0;
      if ((d - p | 0) < 2) {
       m = 1;
       break a;
      }
      c[j >> 2] = p + 1;
      a[p >> 0] = o >>> 6 | 192;
      p = c[j >> 2] | 0;
      c[j >> 2] = p + 1;
      a[p >> 0] = o & 63 | 128;
      break;
     }
     if ((l & 65535) < 55296) {
      p = c[j >> 2] | 0;
      if ((d - p | 0) < 3) {
       m = 1;
       break a;
      }
      c[j >> 2] = p + 1;
      a[p >> 0] = o >>> 12 | 224;
      p = c[j >> 2] | 0;
      c[j >> 2] = p + 1;
      a[p >> 0] = o >>> 6 & 63 | 128;
      p = c[j >> 2] | 0;
      c[j >> 2] = p + 1;
      a[p >> 0] = o & 63 | 128;
      break;
     }
     if ((l & 65535) >= 56320) {
      if ((l & 65535) < 57344) {
       m = 2;
       break a;
      }
      p = c[j >> 2] | 0;
      if ((d - p | 0) < 3) {
       m = 1;
       break a;
      }
      c[j >> 2] = p + 1;
      a[p >> 0] = o >>> 12 | 224;
      p = c[j >> 2] | 0;
      c[j >> 2] = p + 1;
      a[p >> 0] = o >>> 6 & 63 | 128;
      p = c[j >> 2] | 0;
      c[j >> 2] = p + 1;
      a[p >> 0] = o & 63 | 128;
      break;
     }
     if ((h - i | 0) < 4) {
      m = 1;
      break a;
     }
     p = i + 2 | 0;
     q = e[p >> 1] | 0;
     if ((q & 64512 | 0) != 56320) {
      m = 2;
      break a;
     }
     if ((d - (c[j >> 2] | 0) | 0) < 4) {
      m = 1;
      break a;
     }
     r = o & 960;
     if (((r << 10) + 65536 | o << 10 & 64512 | q & 1023) >>> 0 > k >>> 0) {
      m = 2;
      break a;
     }
     c[g >> 2] = p;
     p = (r >>> 6) + 1 | 0;
     r = c[j >> 2] | 0;
     c[j >> 2] = r + 1;
     a[r >> 0] = p >>> 2 | 240;
     r = c[j >> 2] | 0;
     c[j >> 2] = r + 1;
     a[r >> 0] = o >>> 2 & 15 | p << 4 & 48 | 128;
     p = c[j >> 2] | 0;
     c[j >> 2] = p + 1;
     a[p >> 0] = o << 4 & 48 | q >>> 6 & 15 | 128;
     p = c[j >> 2] | 0;
     c[j >> 2] = p + 1;
     a[p >> 0] = q & 63 | 128;
    } while (0);
    i = (c[g >> 2] | 0) + 2 | 0;
    c[g >> 2] = i;
    if (i >>> 0 >= f >>> 0) {
     m = 0;
     break;
    }
   }
  } else m = 0;
 } while (0);
 return m | 0;
}

function ak(b, d, e, f, g, h, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0;
 b = i;
 i = i + 576 | 0;
 k = b + 424 | 0;
 l = b;
 m = b + 24 | 0;
 n = b + 16 | 0;
 o = b + 12 | 0;
 p = b + 8 | 0;
 q = b + 464 | 0;
 r = b + 4 | 0;
 s = b + 468 | 0;
 c[n >> 2] = m;
 t = n + 4 | 0;
 c[t >> 2] = 98;
 c[p >> 2] = xf(g) | 0;
 u = Mk(p, 9328) | 0;
 a[q >> 0] = 0;
 c[r >> 2] = c[e >> 2];
 v = c[g + 4 >> 2] | 0;
 c[k >> 2] = c[r >> 2];
 if (bk(d, k, f, p, v, h, q, u, n, o, m + 400 | 0) | 0) {
  yb[c[(c[u >> 2] | 0) + 48 >> 2] & 7](u, 21440, 21450, k) | 0;
  u = c[o >> 2] | 0;
  m = c[n >> 2] | 0;
  v = u - m | 0;
  if ((v | 0) > 392) {
   f = oe((v >> 2) + 2 | 0) | 0;
   if (!f) Cc(); else {
    w = f;
    x = f;
   }
  } else {
   w = 0;
   x = s;
  }
  if (!(a[q >> 0] | 0)) y = x; else {
   a[x >> 0] = 45;
   y = x + 1 | 0;
  }
  x = k + 40 | 0;
  q = k;
  if (m >>> 0 < u >>> 0) {
   u = k + 4 | 0;
   f = u + 4 | 0;
   v = f + 4 | 0;
   r = v + 4 | 0;
   g = r + 4 | 0;
   z = g + 4 | 0;
   A = z + 4 | 0;
   B = A + 4 | 0;
   C = B + 4 | 0;
   D = y;
   E = m;
   while (1) {
    m = c[E >> 2] | 0;
    if ((c[k >> 2] | 0) != (m | 0)) if ((c[u >> 2] | 0) != (m | 0)) if ((c[f >> 2] | 0) != (m | 0)) if ((c[v >> 2] | 0) != (m | 0)) if ((c[r >> 2] | 0) != (m | 0)) if ((c[g >> 2] | 0) != (m | 0)) if ((c[z >> 2] | 0) != (m | 0)) if ((c[A >> 2] | 0) != (m | 0)) if ((c[B >> 2] | 0) == (m | 0)) F = B; else F = (c[C >> 2] | 0) == (m | 0) ? C : x; else F = A; else F = z; else F = g; else F = r; else F = v; else F = f; else F = u; else F = k;
    a[D >> 0] = a[21440 + (F - q >> 2) >> 0] | 0;
    E = E + 4 | 0;
    m = D + 1 | 0;
    if (E >>> 0 >= (c[o >> 2] | 0) >>> 0) {
     G = m;
     break;
    } else D = m;
   }
  } else G = y;
  a[G >> 0] = 0;
  c[l >> 2] = j;
  Bd(s, 21436, l) | 0;
  if (w) pe(w);
 }
 w = c[d >> 2] | 0;
 do if (w) {
  l = c[w + 12 >> 2] | 0;
  if ((l | 0) == (c[w + 16 >> 2] | 0)) H = ub[c[(c[w >> 2] | 0) + 36 >> 2] & 63](w) | 0; else H = c[l >> 2] | 0;
  if ((H | 0) == -1) {
   c[d >> 2] = 0;
   I = 1;
   break;
  } else {
   I = (c[d >> 2] | 0) == 0;
   break;
  }
 } else I = 1; while (0);
 H = c[e >> 2] | 0;
 do if (H) {
  w = c[H + 12 >> 2] | 0;
  if ((w | 0) == (c[H + 16 >> 2] | 0)) J = ub[c[(c[H >> 2] | 0) + 36 >> 2] & 63](H) | 0; else J = c[w >> 2] | 0;
  if ((J | 0) != -1) if (I) break; else {
   K = 30;
   break;
  } else {
   c[e >> 2] = 0;
   K = 28;
   break;
  }
 } else K = 28; while (0);
 if ((K | 0) == 28 ? I : 0) K = 30;
 if ((K | 0) == 30) c[h >> 2] = c[h >> 2] | 2;
 h = c[d >> 2] | 0;
 ko(c[p >> 2] | 0) | 0;
 p = c[n >> 2] | 0;
 c[n >> 2] = 0;
 if (p) qb[c[t >> 2] & 127](p);
 i = b;
 return h | 0;
}

function Oh(b, d, e, f, g, h, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0;
 k = i;
 i = i + 16 | 0;
 l = k;
 m = Mk(j, 9328) | 0;
 n = Mk(j, 9484) | 0;
 rb[c[(c[n >> 2] | 0) + 20 >> 2] & 63](l, n);
 j = a[l >> 0] | 0;
 o = l + 4 | 0;
 if (((j & 1) == 0 ? (j & 255) >>> 1 : c[o >> 2] | 0) | 0) {
  c[h >> 2] = f;
  j = a[b >> 0] | 0;
  switch (j << 24 >> 24) {
  case 43:
  case 45:
   {
    p = Ab[c[(c[m >> 2] | 0) + 44 >> 2] & 15](m, j) | 0;
    j = c[h >> 2] | 0;
    c[h >> 2] = j + 4;
    c[j >> 2] = p;
    q = b + 1 | 0;
    break;
   }
  default:
   q = b;
  }
  a : do if ((e - q | 0) > 1 ? (a[q >> 0] | 0) == 48 : 0) {
   p = q + 1 | 0;
   switch (a[p >> 0] | 0) {
   case 88:
   case 120:
    break;
   default:
    {
     r = q;
     break a;
    }
   }
   j = Ab[c[(c[m >> 2] | 0) + 44 >> 2] & 15](m, 48) | 0;
   s = c[h >> 2] | 0;
   c[h >> 2] = s + 4;
   c[s >> 2] = j;
   j = Ab[c[(c[m >> 2] | 0) + 44 >> 2] & 15](m, a[p >> 0] | 0) | 0;
   p = c[h >> 2] | 0;
   c[h >> 2] = p + 4;
   c[p >> 2] = j;
   r = q + 2 | 0;
  } else r = q; while (0);
  if ((r | 0) != (e | 0) ? (q = e + -1 | 0, r >>> 0 < q >>> 0) : 0) {
   j = r;
   p = q;
   do {
    q = a[j >> 0] | 0;
    a[j >> 0] = a[p >> 0] | 0;
    a[p >> 0] = q;
    j = j + 1 | 0;
    p = p + -1 | 0;
   } while (j >>> 0 < p >>> 0);
  }
  p = ub[c[(c[n >> 2] | 0) + 16 >> 2] & 63](n) | 0;
  n = l + 8 | 0;
  j = l + 1 | 0;
  if (r >>> 0 < e >>> 0) {
   q = 0;
   s = 0;
   t = r;
   while (1) {
    u = a[((a[l >> 0] & 1) == 0 ? j : c[n >> 2] | 0) + s >> 0] | 0;
    if (u << 24 >> 24 != 0 & (q | 0) == (u << 24 >> 24 | 0)) {
     u = c[h >> 2] | 0;
     c[h >> 2] = u + 4;
     c[u >> 2] = p;
     u = a[l >> 0] | 0;
     v = 0;
     w = (s >>> 0 < (((u & 1) == 0 ? (u & 255) >>> 1 : c[o >> 2] | 0) + -1 | 0) >>> 0 & 1) + s | 0;
    } else {
     v = q;
     w = s;
    }
    u = Ab[c[(c[m >> 2] | 0) + 44 >> 2] & 15](m, a[t >> 0] | 0) | 0;
    x = c[h >> 2] | 0;
    c[h >> 2] = x + 4;
    c[x >> 2] = u;
    t = t + 1 | 0;
    if (t >>> 0 >= e >>> 0) break; else {
     q = v + 1 | 0;
     s = w;
    }
   }
  }
  w = b;
  s = f + (r - w << 2) | 0;
  r = c[h >> 2] | 0;
  if ((s | 0) != (r | 0)) {
   v = r + -4 | 0;
   if (s >>> 0 < v >>> 0) {
    q = s;
    t = v;
    do {
     v = c[q >> 2] | 0;
     c[q >> 2] = c[t >> 2];
     c[t >> 2] = v;
     q = q + 4 | 0;
     t = t + -4 | 0;
    } while (q >>> 0 < t >>> 0);
    y = w;
    z = r;
   } else {
    y = w;
    z = r;
   }
  } else {
   y = w;
   z = s;
  }
 } else {
  yb[c[(c[m >> 2] | 0) + 48 >> 2] & 7](m, b, e, f) | 0;
  m = b;
  b = f + (e - m << 2) | 0;
  c[h >> 2] = b;
  y = m;
  z = b;
 }
 c[g >> 2] = (d | 0) == (e | 0) ? z : f + (d - y << 2) | 0;
 $e(l);
 i = k;
 return;
}

function sc(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0;
 a : do if ((b | 0) == (c[d + 8 >> 2] | 0)) {
  if ((c[d + 4 >> 2] | 0) == (e | 0) ? (h = d + 28 | 0, (c[h >> 2] | 0) != 1) : 0) c[h >> 2] = f;
 } else {
  if ((b | 0) != (c[d >> 2] | 0)) {
   h = c[b + 12 >> 2] | 0;
   i = b + 16 + (h << 3) | 0;
   uc(b + 16 | 0, d, e, f, g);
   j = b + 24 | 0;
   if ((h | 0) <= 1) break;
   h = c[b + 8 >> 2] | 0;
   if ((h & 2 | 0) == 0 ? (k = d + 36 | 0, (c[k >> 2] | 0) != 1) : 0) {
    if (!(h & 1)) {
     h = d + 54 | 0;
     l = j;
     while (1) {
      if (a[h >> 0] | 0) break a;
      if ((c[k >> 2] | 0) == 1) break a;
      uc(l, d, e, f, g);
      l = l + 8 | 0;
      if (l >>> 0 >= i >>> 0) break a;
     }
    }
    l = d + 24 | 0;
    h = d + 54 | 0;
    m = j;
    while (1) {
     if (a[h >> 0] | 0) break a;
     if ((c[k >> 2] | 0) == 1 ? (c[l >> 2] | 0) == 1 : 0) break a;
     uc(m, d, e, f, g);
     m = m + 8 | 0;
     if (m >>> 0 >= i >>> 0) break a;
    }
   }
   m = d + 54 | 0;
   l = j;
   while (1) {
    if (a[m >> 0] | 0) break a;
    uc(l, d, e, f, g);
    l = l + 8 | 0;
    if (l >>> 0 >= i >>> 0) break a;
   }
  }
  if ((c[d + 16 >> 2] | 0) != (e | 0) ? (i = d + 20 | 0, (c[i >> 2] | 0) != (e | 0)) : 0) {
   c[d + 32 >> 2] = f;
   l = d + 44 | 0;
   if ((c[l >> 2] | 0) == 4) break;
   m = c[b + 12 >> 2] | 0;
   j = b + 16 + (m << 3) | 0;
   k = d + 52 | 0;
   h = d + 53 | 0;
   n = d + 54 | 0;
   o = b + 8 | 0;
   p = d + 24 | 0;
   b : do if ((m | 0) > 0) {
    q = 0;
    r = 0;
    s = b + 16 | 0;
    while (1) {
     a[k >> 0] = 0;
     a[h >> 0] = 0;
     tc(s, d, e, e, 1, g);
     if (a[n >> 0] | 0) {
      t = q;
      u = r;
      v = 20;
      break b;
     }
     do if (a[h >> 0] | 0) {
      if (!(a[k >> 0] | 0)) if (!(c[o >> 2] & 1)) {
       t = q;
       u = 1;
       v = 20;
       break b;
      } else {
       w = q;
       x = 1;
       break;
      }
      if ((c[p >> 2] | 0) == 1) break b;
      if (!(c[o >> 2] & 2)) break b; else {
       w = 1;
       x = 1;
      }
     } else {
      w = q;
      x = r;
     } while (0);
     s = s + 8 | 0;
     if (s >>> 0 >= j >>> 0) {
      t = w;
      u = x;
      v = 20;
      break;
     } else {
      q = w;
      r = x;
     }
    }
   } else {
    t = 0;
    u = 0;
    v = 20;
   } while (0);
   do if ((v | 0) == 20) {
    if ((!t ? (c[i >> 2] = e, j = d + 40 | 0, c[j >> 2] = (c[j >> 2] | 0) + 1, (c[d + 36 >> 2] | 0) == 1) : 0) ? (c[p >> 2] | 0) == 2 : 0) {
     a[n >> 0] = 1;
     if (u) break;
    } else v = 24;
    if ((v | 0) == 24 ? u : 0) break;
    c[l >> 2] = 4;
    break a;
   } while (0);
   c[l >> 2] = 3;
   break;
  }
  if ((f | 0) == 1) c[d + 32 >> 2] = 1;
 } while (0);
 return;
}

function vl(b, d, e, f, g, h, j, k) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 k = k | 0;
 var l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0;
 l = i;
 i = i + 16 | 0;
 m = l;
 n = l + 8 | 0;
 a : do if ((e | 0) == (f | 0)) o = f; else {
  p = e;
  while (1) {
   if (!(c[p >> 2] | 0)) {
    o = p;
    break a;
   }
   p = p + 4 | 0;
   if ((p | 0) == (f | 0)) {
    o = f;
    break;
   }
  }
 } while (0);
 c[k >> 2] = h;
 c[g >> 2] = e;
 p = j;
 q = b + 8 | 0;
 b : do if ((h | 0) == (j | 0) | (e | 0) == (f | 0)) {
  r = e;
  s = 29;
 } else {
  b = e;
  t = h;
  u = o;
  c : while (1) {
   v = d;
   w = c[v + 4 >> 2] | 0;
   x = m;
   c[x >> 2] = c[v >> 2];
   c[x + 4 >> 2] = w;
   w = bd(c[q >> 2] | 0) | 0;
   x = rd(t, g, u - b >> 2, p - t | 0, d) | 0;
   if (w) bd(w) | 0;
   switch (x | 0) {
   case 0:
    {
     y = 1;
     break b;
     break;
    }
   case -1:
    {
     z = b;
     A = t;
     break c;
     break;
    }
   default:
    {}
   }
   w = (c[k >> 2] | 0) + x | 0;
   c[k >> 2] = w;
   if ((w | 0) == (j | 0)) {
    s = 15;
    break;
   }
   if ((u | 0) == (f | 0)) {
    B = c[g >> 2] | 0;
    C = w;
    D = f;
   } else {
    w = bd(c[q >> 2] | 0) | 0;
    x = qd(n, 0, d) | 0;
    if (w) bd(w) | 0;
    if ((x | 0) == -1) {
     y = 2;
     break b;
    }
    if (x >>> 0 > (p - (c[k >> 2] | 0) | 0) >>> 0) {
     y = 1;
     break b;
    }
    if (x) {
     w = x;
     x = n;
     while (1) {
      v = a[x >> 0] | 0;
      E = c[k >> 2] | 0;
      c[k >> 2] = E + 1;
      a[E >> 0] = v;
      w = w + -1 | 0;
      if (!w) break; else x = x + 1 | 0;
     }
    }
    x = (c[g >> 2] | 0) + 4 | 0;
    c[g >> 2] = x;
    d : do if ((x | 0) == (f | 0)) F = f; else {
     w = x;
     while (1) {
      if (!(c[w >> 2] | 0)) {
       F = w;
       break d;
      }
      w = w + 4 | 0;
      if ((w | 0) == (f | 0)) {
       F = f;
       break;
      }
     }
    } while (0);
    B = x;
    C = c[k >> 2] | 0;
    D = F;
   }
   if ((C | 0) == (j | 0) | (B | 0) == (f | 0)) {
    r = B;
    s = 29;
    break b;
   } else {
    b = B;
    t = C;
    u = D;
   }
  }
  if ((s | 0) == 15) {
   r = c[g >> 2] | 0;
   s = 29;
   break;
  }
  c[k >> 2] = A;
  e : do if ((z | 0) == (c[g >> 2] | 0)) G = z; else {
   u = z;
   t = A;
   while (1) {
    b = c[u >> 2] | 0;
    w = bd(c[q >> 2] | 0) | 0;
    v = qd(t, b, m) | 0;
    if (w) bd(w) | 0;
    if ((v | 0) == -1) {
     G = u;
     break e;
    }
    t = (c[k >> 2] | 0) + v | 0;
    c[k >> 2] = t;
    v = u + 4 | 0;
    if ((v | 0) == (c[g >> 2] | 0)) {
     G = v;
     break;
    } else u = v;
   }
  } while (0);
  c[g >> 2] = G;
  y = 2;
 } while (0);
 if ((s | 0) == 29) y = (r | 0) != (f | 0) & 1;
 i = l;
 return y | 0;
}

function Bh(b, d, e, f, g, h, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0;
 k = i;
 i = i + 16 | 0;
 l = k;
 m = Mk(j, 9336) | 0;
 n = Mk(j, 9476) | 0;
 rb[c[(c[n >> 2] | 0) + 20 >> 2] & 63](l, n);
 j = a[l >> 0] | 0;
 o = l + 4 | 0;
 if (((j & 1) == 0 ? (j & 255) >>> 1 : c[o >> 2] | 0) | 0) {
  c[h >> 2] = f;
  j = a[b >> 0] | 0;
  switch (j << 24 >> 24) {
  case 43:
  case 45:
   {
    p = Ab[c[(c[m >> 2] | 0) + 28 >> 2] & 15](m, j) | 0;
    j = c[h >> 2] | 0;
    c[h >> 2] = j + 1;
    a[j >> 0] = p;
    q = b + 1 | 0;
    break;
   }
  default:
   q = b;
  }
  a : do if ((e - q | 0) > 1 ? (a[q >> 0] | 0) == 48 : 0) {
   p = q + 1 | 0;
   switch (a[p >> 0] | 0) {
   case 88:
   case 120:
    break;
   default:
    {
     r = q;
     break a;
    }
   }
   j = Ab[c[(c[m >> 2] | 0) + 28 >> 2] & 15](m, 48) | 0;
   s = c[h >> 2] | 0;
   c[h >> 2] = s + 1;
   a[s >> 0] = j;
   j = Ab[c[(c[m >> 2] | 0) + 28 >> 2] & 15](m, a[p >> 0] | 0) | 0;
   p = c[h >> 2] | 0;
   c[h >> 2] = p + 1;
   a[p >> 0] = j;
   r = q + 2 | 0;
  } else r = q; while (0);
  if ((r | 0) != (e | 0) ? (q = e + -1 | 0, r >>> 0 < q >>> 0) : 0) {
   j = r;
   p = q;
   do {
    q = a[j >> 0] | 0;
    a[j >> 0] = a[p >> 0] | 0;
    a[p >> 0] = q;
    j = j + 1 | 0;
    p = p + -1 | 0;
   } while (j >>> 0 < p >>> 0);
  }
  p = ub[c[(c[n >> 2] | 0) + 16 >> 2] & 63](n) | 0;
  n = l + 8 | 0;
  j = l + 1 | 0;
  if (r >>> 0 < e >>> 0) {
   q = 0;
   s = 0;
   t = r;
   while (1) {
    u = a[((a[l >> 0] & 1) == 0 ? j : c[n >> 2] | 0) + s >> 0] | 0;
    if (u << 24 >> 24 != 0 & (q | 0) == (u << 24 >> 24 | 0)) {
     u = c[h >> 2] | 0;
     c[h >> 2] = u + 1;
     a[u >> 0] = p;
     u = a[l >> 0] | 0;
     v = 0;
     w = (s >>> 0 < (((u & 1) == 0 ? (u & 255) >>> 1 : c[o >> 2] | 0) + -1 | 0) >>> 0 & 1) + s | 0;
    } else {
     v = q;
     w = s;
    }
    u = Ab[c[(c[m >> 2] | 0) + 28 >> 2] & 15](m, a[t >> 0] | 0) | 0;
    x = c[h >> 2] | 0;
    c[h >> 2] = x + 1;
    a[x >> 0] = u;
    t = t + 1 | 0;
    if (t >>> 0 >= e >>> 0) break; else {
     q = v + 1 | 0;
     s = w;
    }
   }
  }
  w = b;
  s = f + (r - w) | 0;
  r = c[h >> 2] | 0;
  if ((s | 0) == (r | 0)) {
   y = w;
   z = s;
  } else {
   v = r + -1 | 0;
   if (s >>> 0 < v >>> 0) {
    r = s;
    s = v;
    do {
     v = a[r >> 0] | 0;
     a[r >> 0] = a[s >> 0] | 0;
     a[s >> 0] = v;
     r = r + 1 | 0;
     s = s + -1 | 0;
    } while (r >>> 0 < s >>> 0);
   }
   y = w;
   z = c[h >> 2] | 0;
  }
 } else {
  yb[c[(c[m >> 2] | 0) + 32 >> 2] & 7](m, b, e, f) | 0;
  m = b;
  b = f + (e - m) | 0;
  c[h >> 2] = b;
  y = m;
  z = b;
 }
 c[g >> 2] = (d | 0) == (e | 0) ? z : f + (d - y) | 0;
 $e(l);
 i = k;
 return;
}

function Tj(b, d, e, f, g, h, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0;
 b = i;
 i = i + 240 | 0;
 k = b + 24 | 0;
 l = b;
 m = b + 136 | 0;
 n = b + 16 | 0;
 o = b + 12 | 0;
 p = b + 8 | 0;
 q = b + 134 | 0;
 r = b + 4 | 0;
 s = b + 124 | 0;
 c[n >> 2] = m;
 t = n + 4 | 0;
 c[t >> 2] = 98;
 c[p >> 2] = xf(g) | 0;
 u = Mk(p, 9336) | 0;
 a[q >> 0] = 0;
 c[r >> 2] = c[e >> 2];
 v = c[g + 4 >> 2] | 0;
 c[k >> 2] = c[r >> 2];
 if (Vj(d, k, f, p, v, h, q, u, n, o, m + 100 | 0) | 0) {
  yb[c[(c[u >> 2] | 0) + 32 >> 2] & 7](u, 21425, 21435, s) | 0;
  u = c[o >> 2] | 0;
  m = c[n >> 2] | 0;
  v = u - m | 0;
  if ((v | 0) > 98) {
   f = oe(v + 2 | 0) | 0;
   if (!f) Cc(); else {
    w = f;
    x = f;
   }
  } else {
   w = 0;
   x = k;
  }
  if (!(a[q >> 0] | 0)) y = x; else {
   a[x >> 0] = 45;
   y = x + 1 | 0;
  }
  x = s + 10 | 0;
  q = s;
  if (m >>> 0 < u >>> 0) {
   u = s + 1 | 0;
   f = u + 1 | 0;
   v = f + 1 | 0;
   r = v + 1 | 0;
   g = r + 1 | 0;
   z = g + 1 | 0;
   A = z + 1 | 0;
   B = A + 1 | 0;
   C = B + 1 | 0;
   D = y;
   E = m;
   while (1) {
    m = a[E >> 0] | 0;
    if ((a[s >> 0] | 0) != m << 24 >> 24) if ((a[u >> 0] | 0) != m << 24 >> 24) if ((a[f >> 0] | 0) != m << 24 >> 24) if ((a[v >> 0] | 0) != m << 24 >> 24) if ((a[r >> 0] | 0) != m << 24 >> 24) if ((a[g >> 0] | 0) != m << 24 >> 24) if ((a[z >> 0] | 0) != m << 24 >> 24) if ((a[A >> 0] | 0) != m << 24 >> 24) if ((a[B >> 0] | 0) == m << 24 >> 24) F = B; else F = (a[C >> 0] | 0) == m << 24 >> 24 ? C : x; else F = A; else F = z; else F = g; else F = r; else F = v; else F = f; else F = u; else F = s;
    a[D >> 0] = a[21425 + (F - q) >> 0] | 0;
    E = E + 1 | 0;
    m = D + 1 | 0;
    if (E >>> 0 >= (c[o >> 2] | 0) >>> 0) {
     G = m;
     break;
    } else D = m;
   }
  } else G = y;
  a[G >> 0] = 0;
  c[l >> 2] = j;
  Bd(k, 21436, l) | 0;
  if (w) pe(w);
 }
 w = c[d >> 2] | 0;
 do if (w) if ((c[w + 12 >> 2] | 0) == (c[w + 16 >> 2] | 0)) if ((ub[c[(c[w >> 2] | 0) + 36 >> 2] & 63](w) | 0) == -1) {
  c[d >> 2] = 0;
  H = 0;
  break;
 } else {
  H = c[d >> 2] | 0;
  break;
 } else H = w; else H = 0; while (0);
 w = (H | 0) == 0;
 H = c[e >> 2] | 0;
 do if (H) {
  if ((c[H + 12 >> 2] | 0) == (c[H + 16 >> 2] | 0) ? (ub[c[(c[H >> 2] | 0) + 36 >> 2] & 63](H) | 0) == -1 : 0) {
   c[e >> 2] = 0;
   I = 25;
   break;
  }
  if (!w) I = 26;
 } else I = 25; while (0);
 if ((I | 0) == 25 ? w : 0) I = 26;
 if ((I | 0) == 26) c[h >> 2] = c[h >> 2] | 2;
 h = c[d >> 2] | 0;
 ko(c[p >> 2] | 0) | 0;
 p = c[n >> 2] | 0;
 c[n >> 2] = 0;
 if (p) qb[c[t >> 2] & 127](p);
 i = b;
 return h | 0;
}

function ce(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0;
 e = a + 4 | 0;
 f = c[e >> 2] | 0;
 g = a + 100 | 0;
 if (f >>> 0 < (c[g >> 2] | 0) >>> 0) {
  c[e >> 2] = f + 1;
  h = d[f >> 0] | 0;
 } else h = Uc(a) | 0;
 switch (h | 0) {
 case 43:
 case 45:
  {
   f = (h | 0) == 45 & 1;
   i = c[e >> 2] | 0;
   if (i >>> 0 < (c[g >> 2] | 0) >>> 0) {
    c[e >> 2] = i + 1;
    j = d[i >> 0] | 0;
   } else j = Uc(a) | 0;
   if ((b | 0) != 0 & (j + -48 | 0) >>> 0 > 9 ? (c[g >> 2] | 0) != 0 : 0) {
    c[e >> 2] = (c[e >> 2] | 0) + -1;
    k = j;
    l = f;
   } else {
    k = j;
    l = f;
   }
   break;
  }
 default:
  {
   k = h;
   l = 0;
  }
 }
 if ((k + -48 | 0) >>> 0 > 9) if (!(c[g >> 2] | 0)) {
  m = -2147483648;
  n = 0;
 } else {
  c[e >> 2] = (c[e >> 2] | 0) + -1;
  m = -2147483648;
  n = 0;
 } else {
  h = k;
  k = 0;
  while (1) {
   f = h + -48 + (k * 10 | 0) | 0;
   j = c[e >> 2] | 0;
   if (j >>> 0 < (c[g >> 2] | 0) >>> 0) {
    c[e >> 2] = j + 1;
    o = d[j >> 0] | 0;
   } else o = Uc(a) | 0;
   if ((o + -48 | 0) >>> 0 < 10 & (f | 0) < 214748364) {
    h = o;
    k = f;
   } else {
    p = f;
    q = o;
    break;
   }
  }
  o = ((p | 0) < 0) << 31 >> 31;
  if ((q + -48 | 0) >>> 0 < 10) {
   k = p;
   h = o;
   f = q;
   while (1) {
    j = zo(k | 0, h | 0, 10, 0) | 0;
    b = D;
    i = po(f | 0, ((f | 0) < 0) << 31 >> 31 | 0, -48, -1) | 0;
    r = po(i | 0, D | 0, j | 0, b | 0) | 0;
    b = D;
    j = c[e >> 2] | 0;
    if (j >>> 0 < (c[g >> 2] | 0) >>> 0) {
     c[e >> 2] = j + 1;
     s = d[j >> 0] | 0;
    } else s = Uc(a) | 0;
    if ((s + -48 | 0) >>> 0 < 10 & ((b | 0) < 21474836 | (b | 0) == 21474836 & r >>> 0 < 2061584302)) {
     k = r;
     h = b;
     f = s;
    } else {
     t = r;
     u = b;
     v = s;
     break;
    }
   }
  } else {
   t = p;
   u = o;
   v = q;
  }
  if ((v + -48 | 0) >>> 0 < 10) do {
   v = c[e >> 2] | 0;
   if (v >>> 0 < (c[g >> 2] | 0) >>> 0) {
    c[e >> 2] = v + 1;
    w = d[v >> 0] | 0;
   } else w = Uc(a) | 0;
  } while ((w + -48 | 0) >>> 0 < 10);
  if (c[g >> 2] | 0) c[e >> 2] = (c[e >> 2] | 0) + -1;
  e = (l | 0) != 0;
  l = no(0, 0, t | 0, u | 0) | 0;
  m = e ? D : u;
  n = e ? l : t;
 }
 D = m;
 return n | 0;
}

function rh(b, e, f, g, h, i, j, k, l, m, n, o) {
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
 var p = 0, q = 0, r = 0, s = 0, t = 0, u = 0;
 a : do if (b << 24 >> 24 == i << 24 >> 24) if (a[e >> 0] | 0) {
  a[e >> 0] = 0;
  p = c[h >> 2] | 0;
  c[h >> 2] = p + 1;
  a[p >> 0] = 46;
  p = a[k >> 0] | 0;
  if ((((p & 1) == 0 ? (p & 255) >>> 1 : c[k + 4 >> 2] | 0) | 0) != 0 ? (p = c[m >> 2] | 0, (p - l | 0) < 160) : 0) {
   q = c[n >> 2] | 0;
   c[m >> 2] = p + 4;
   c[p >> 2] = q;
   r = 0;
  } else r = 0;
 } else r = -1; else {
  if (b << 24 >> 24 == j << 24 >> 24 ? (q = a[k >> 0] | 0, (((q & 1) == 0 ? (q & 255) >>> 1 : c[k + 4 >> 2] | 0) | 0) != 0) : 0) {
   if (!(a[e >> 0] | 0)) {
    r = -1;
    break;
   }
   q = c[m >> 2] | 0;
   if ((q - l | 0) >= 160) {
    r = 0;
    break;
   }
   p = c[n >> 2] | 0;
   c[m >> 2] = q + 4;
   c[q >> 2] = p;
   c[n >> 2] = 0;
   r = 0;
   break;
  }
  p = o + 32 | 0;
  q = o;
  while (1) {
   if ((a[q >> 0] | 0) == b << 24 >> 24) {
    s = q;
    break;
   }
   q = q + 1 | 0;
   if ((q | 0) == (p | 0)) {
    s = p;
    break;
   }
  }
  p = s - o | 0;
  if ((p | 0) > 31) r = -1; else {
   q = a[19968 + p >> 0] | 0;
   switch (p | 0) {
   case 24:
   case 25:
    {
     t = c[h >> 2] | 0;
     if ((t | 0) != (g | 0) ? (d[t + -1 >> 0] & 95 | 0) != (d[f >> 0] & 127 | 0) : 0) {
      r = -1;
      break a;
     }
     c[h >> 2] = t + 1;
     a[t >> 0] = q;
     r = 0;
     break a;
     break;
    }
   case 23:
   case 22:
    {
     a[f >> 0] = 80;
     t = c[h >> 2] | 0;
     c[h >> 2] = t + 1;
     a[t >> 0] = q;
     r = 0;
     break a;
     break;
    }
   default:
    {
     t = q & 95;
     if ((((t | 0) == (a[f >> 0] | 0) ? (a[f >> 0] = t | 128, (a[e >> 0] | 0) != 0) : 0) ? (a[e >> 0] = 0, t = a[k >> 0] | 0, (((t & 1) == 0 ? (t & 255) >>> 1 : c[k + 4 >> 2] | 0) | 0) != 0) : 0) ? (t = c[m >> 2] | 0, (t - l | 0) < 160) : 0) {
      u = c[n >> 2] | 0;
      c[m >> 2] = t + 4;
      c[t >> 2] = u;
     }
     u = c[h >> 2] | 0;
     c[h >> 2] = u + 1;
     a[u >> 0] = q;
     if ((p | 0) > 21) {
      r = 0;
      break a;
     }
     c[n >> 2] = (c[n >> 2] | 0) + 1;
     r = 0;
     break a;
    }
   }
  }
 } while (0);
 return r | 0;
}

function sd(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0;
 f = i;
 i = i + 16 | 0;
 g = f;
 a : do if (!b) {
  h = c[d >> 2] | 0;
  j = c[h >> 2] | 0;
  if (!j) k = 0; else {
   l = 0;
   m = j;
   j = h;
   while (1) {
    if (m >>> 0 > 127) {
     h = qd(g, m, 0) | 0;
     if ((h | 0) == -1) {
      k = -1;
      break a;
     } else n = h;
    } else n = 1;
    h = n + l | 0;
    j = j + 4 | 0;
    m = c[j >> 2] | 0;
    if (!m) {
     k = h;
     break;
    } else l = h;
   }
  }
 } else {
  b : do if (e >>> 0 > 3) {
   l = b;
   m = e;
   j = c[d >> 2] | 0;
   while (1) {
    h = c[j >> 2] | 0;
    if ((h + -1 | 0) >>> 0 > 126) {
     if (!h) {
      o = l;
      p = m;
      break;
     }
     q = qd(l, h, 0) | 0;
     if ((q | 0) == -1) {
      k = -1;
      break a;
     }
     r = l + q | 0;
     s = m - q | 0;
     t = j;
    } else {
     a[l >> 0] = h;
     r = l + 1 | 0;
     s = m + -1 | 0;
     t = c[d >> 2] | 0;
    }
    j = t + 4 | 0;
    c[d >> 2] = j;
    if (s >>> 0 <= 3) {
     u = r;
     v = s;
     break b;
    } else {
     l = r;
     m = s;
    }
   }
   a[o >> 0] = 0;
   c[d >> 2] = 0;
   k = e - p | 0;
   break a;
  } else {
   u = b;
   v = e;
  } while (0);
  if (v) {
   m = u;
   l = v;
   j = c[d >> 2] | 0;
   while (1) {
    h = c[j >> 2] | 0;
    if ((h + -1 | 0) >>> 0 > 126) {
     if (!h) {
      w = m;
      x = l;
      y = 19;
      break;
     }
     q = qd(g, h, 0) | 0;
     if ((q | 0) == -1) {
      k = -1;
      break a;
     }
     if (l >>> 0 < q >>> 0) {
      z = l;
      y = 22;
      break;
     }
     qd(m, c[j >> 2] | 0, 0) | 0;
     A = m + q | 0;
     B = l - q | 0;
     C = j;
    } else {
     a[m >> 0] = h;
     A = m + 1 | 0;
     B = l + -1 | 0;
     C = c[d >> 2] | 0;
    }
    j = C + 4 | 0;
    c[d >> 2] = j;
    if (!B) {
     k = e;
     break a;
    } else {
     m = A;
     l = B;
    }
   }
   if ((y | 0) == 19) {
    a[w >> 0] = 0;
    c[d >> 2] = 0;
    k = e - x | 0;
    break;
   } else if ((y | 0) == 22) {
    k = e - z | 0;
    break;
   }
  } else k = e;
 } while (0);
 i = f;
 return k | 0;
}

function mk(b, d, e, f, g, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 j = +j;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0;
 b = i;
 i = i + 1008 | 0;
 k = b + 8 | 0;
 l = b;
 m = b + 896 | 0;
 n = b + 888 | 0;
 o = b + 488 | 0;
 p = b + 480 | 0;
 q = b + 892 | 0;
 r = b + 72 | 0;
 s = b + 68 | 0;
 t = b + 56 | 0;
 u = b + 44 | 0;
 v = b + 32 | 0;
 w = b + 28 | 0;
 x = b + 80 | 0;
 y = b + 24 | 0;
 z = b + 20 | 0;
 A = b + 16 | 0;
 c[n >> 2] = m;
 h[k >> 3] = j;
 B = Ad(m, 100, 21451, k) | 0;
 if (B >>> 0 > 99) {
  m = ah() | 0;
  h[l >> 3] = j;
  C = Um(n, m, 21451, l) | 0;
  l = c[n >> 2] | 0;
  if (!l) Cc();
  m = oe(C << 2) | 0;
  if (!m) Cc(); else {
   D = m;
   E = l;
   F = m;
   G = C;
  }
 } else {
  D = 0;
  E = 0;
  F = o;
  G = B;
 }
 B = xf(f) | 0;
 c[p >> 2] = B;
 o = Mk(p, 9328) | 0;
 C = c[n >> 2] | 0;
 yb[c[(c[o >> 2] | 0) + 48 >> 2] & 7](o, C, C + G | 0, F) | 0;
 if (!G) H = 0; else H = (a[c[n >> 2] >> 0] | 0) == 45;
 c[t >> 2] = 0;
 c[t + 4 >> 2] = 0;
 c[t + 8 >> 2] = 0;
 c[u >> 2] = 0;
 c[u + 4 >> 2] = 0;
 c[u + 8 >> 2] = 0;
 c[v >> 2] = 0;
 c[v + 4 >> 2] = 0;
 c[v + 8 >> 2] = 0;
 nk(e, H, p, q, r, s, t, u, v, w);
 e = c[w >> 2] | 0;
 if ((G | 0) > (e | 0)) {
  w = a[v >> 0] | 0;
  n = a[u >> 0] | 0;
  I = (G - e << 1 | 1) + e + ((w & 1) == 0 ? (w & 255) >>> 1 : c[v + 4 >> 2] | 0) + ((n & 1) == 0 ? (n & 255) >>> 1 : c[u + 4 >> 2] | 0) | 0;
 } else {
  n = a[v >> 0] | 0;
  w = a[u >> 0] | 0;
  I = e + 2 + ((n & 1) == 0 ? (n & 255) >>> 1 : c[v + 4 >> 2] | 0) + ((w & 1) == 0 ? (w & 255) >>> 1 : c[u + 4 >> 2] | 0) | 0;
 }
 if (I >>> 0 > 100) {
  w = oe(I << 2) | 0;
  if (!w) Cc(); else {
   J = w;
   K = w;
  }
 } else {
  J = 0;
  K = x;
 }
 ok(K, y, z, c[f + 4 >> 2] | 0, F, F + (G << 2) | 0, o, H, q, c[r >> 2] | 0, c[s >> 2] | 0, t, u, v, e);
 c[A >> 2] = c[d >> 2];
 d = c[y >> 2] | 0;
 y = c[z >> 2] | 0;
 c[k >> 2] = c[A >> 2];
 A = Vm(k, K, d, y, f, g) | 0;
 if (!J) L = B; else {
  pe(J);
  L = c[p >> 2] | 0;
 }
 lf(v);
 lf(u);
 $e(t);
 ko(L) | 0;
 if (D) pe(D);
 if (E) pe(E);
 i = b;
 return A | 0;
}

function Ri(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 a = c[b >> 2] | 0;
 do if (a) {
  g = c[a + 12 >> 2] | 0;
  if ((g | 0) == (c[a + 16 >> 2] | 0)) h = ub[c[(c[a >> 2] | 0) + 36 >> 2] & 63](a) | 0; else h = c[g >> 2] | 0;
  if ((h | 0) == -1) {
   c[b >> 2] = 0;
   i = 1;
   break;
  } else {
   i = (c[b >> 2] | 0) == 0;
   break;
  }
 } else i = 1; while (0);
 h = c[d >> 2] | 0;
 do if (h) {
  a = c[h + 12 >> 2] | 0;
  if ((a | 0) == (c[h + 16 >> 2] | 0)) j = ub[c[(c[h >> 2] | 0) + 36 >> 2] & 63](h) | 0; else j = c[a >> 2] | 0;
  if ((j | 0) != -1) if (i) {
   k = h;
   l = 17;
   break;
  } else {
   l = 16;
   break;
  } else {
   c[d >> 2] = 0;
   l = 14;
   break;
  }
 } else l = 14; while (0);
 if ((l | 0) == 14) if (i) l = 16; else {
  k = 0;
  l = 17;
 }
 a : do if ((l | 0) == 16) c[e >> 2] = c[e >> 2] | 6; else if ((l | 0) == 17) {
  i = c[b >> 2] | 0;
  h = c[i + 12 >> 2] | 0;
  if ((h | 0) == (c[i + 16 >> 2] | 0)) m = ub[c[(c[i >> 2] | 0) + 36 >> 2] & 63](i) | 0; else m = c[h >> 2] | 0;
  if ((nb[c[(c[f >> 2] | 0) + 52 >> 2] & 31](f, m, 0) | 0) << 24 >> 24 != 37) {
   c[e >> 2] = c[e >> 2] | 4;
   break;
  }
  h = c[b >> 2] | 0;
  i = h + 12 | 0;
  j = c[i >> 2] | 0;
  if ((j | 0) == (c[h + 16 >> 2] | 0)) {
   ub[c[(c[h >> 2] | 0) + 40 >> 2] & 63](h) | 0;
   a = c[b >> 2] | 0;
   if (!a) n = 1; else {
    o = a;
    l = 25;
   }
  } else {
   c[i >> 2] = j + 4;
   o = h;
   l = 25;
  }
  do if ((l | 0) == 25) {
   h = c[o + 12 >> 2] | 0;
   if ((h | 0) == (c[o + 16 >> 2] | 0)) p = ub[c[(c[o >> 2] | 0) + 36 >> 2] & 63](o) | 0; else p = c[h >> 2] | 0;
   if ((p | 0) == -1) {
    c[b >> 2] = 0;
    n = 1;
    break;
   } else {
    n = (c[b >> 2] | 0) == 0;
    break;
   }
  } while (0);
  do if (k) {
   h = c[k + 12 >> 2] | 0;
   if ((h | 0) == (c[k + 16 >> 2] | 0)) q = ub[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else q = c[h >> 2] | 0;
   if ((q | 0) != -1) if (n) break a; else break; else {
    c[d >> 2] = 0;
    l = 37;
    break;
   }
  } else l = 37; while (0);
  if ((l | 0) == 37 ? !n : 0) break;
  c[e >> 2] = c[e >> 2] | 2;
 } while (0);
 return;
}

function gk(b, d, e, f, g, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 j = +j;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0;
 b = i;
 i = i + 384 | 0;
 k = b + 8 | 0;
 l = b;
 m = b + 284 | 0;
 n = b + 72 | 0;
 o = b + 184 | 0;
 p = b + 68 | 0;
 q = b + 80 | 0;
 r = b + 77 | 0;
 s = b + 76 | 0;
 t = b + 56 | 0;
 u = b + 44 | 0;
 v = b + 32 | 0;
 w = b + 28 | 0;
 x = b + 84 | 0;
 y = b + 24 | 0;
 z = b + 20 | 0;
 A = b + 16 | 0;
 c[n >> 2] = m;
 h[k >> 3] = j;
 B = Ad(m, 100, 21451, k) | 0;
 if (B >>> 0 > 99) {
  m = ah() | 0;
  h[l >> 3] = j;
  C = Um(n, m, 21451, l) | 0;
  l = c[n >> 2] | 0;
  if (!l) Cc();
  m = oe(C) | 0;
  if (!m) Cc(); else {
   D = m;
   E = l;
   F = m;
   G = C;
  }
 } else {
  D = 0;
  E = 0;
  F = o;
  G = B;
 }
 B = xf(f) | 0;
 c[p >> 2] = B;
 o = Mk(p, 9336) | 0;
 C = c[n >> 2] | 0;
 yb[c[(c[o >> 2] | 0) + 32 >> 2] & 7](o, C, C + G | 0, F) | 0;
 if (!G) H = 0; else H = (a[c[n >> 2] >> 0] | 0) == 45;
 c[t >> 2] = 0;
 c[t + 4 >> 2] = 0;
 c[t + 8 >> 2] = 0;
 c[u >> 2] = 0;
 c[u + 4 >> 2] = 0;
 c[u + 8 >> 2] = 0;
 c[v >> 2] = 0;
 c[v + 4 >> 2] = 0;
 c[v + 8 >> 2] = 0;
 hk(e, H, p, q, r, s, t, u, v, w);
 e = c[w >> 2] | 0;
 if ((G | 0) > (e | 0)) {
  w = a[v >> 0] | 0;
  n = a[u >> 0] | 0;
  I = (G - e << 1 | 1) + e + ((w & 1) == 0 ? (w & 255) >>> 1 : c[v + 4 >> 2] | 0) + ((n & 1) == 0 ? (n & 255) >>> 1 : c[u + 4 >> 2] | 0) | 0;
 } else {
  n = a[v >> 0] | 0;
  w = a[u >> 0] | 0;
  I = e + 2 + ((n & 1) == 0 ? (n & 255) >>> 1 : c[v + 4 >> 2] | 0) + ((w & 1) == 0 ? (w & 255) >>> 1 : c[u + 4 >> 2] | 0) | 0;
 }
 if (I >>> 0 > 100) {
  w = oe(I) | 0;
  if (!w) Cc(); else {
   J = w;
   K = w;
  }
 } else {
  J = 0;
  K = x;
 }
 ik(K, y, z, c[f + 4 >> 2] | 0, F, F + G | 0, o, H, q, a[r >> 0] | 0, a[s >> 0] | 0, t, u, v, e);
 c[A >> 2] = c[d >> 2];
 d = c[y >> 2] | 0;
 y = c[z >> 2] | 0;
 c[k >> 2] = c[A >> 2];
 A = Qb(k, K, d, y, f, g) | 0;
 if (!J) L = B; else {
  pe(J);
  L = c[p >> 2] | 0;
 }
 $e(v);
 $e(u);
 $e(t);
 ko(L) | 0;
 if (D) pe(D);
 if (E) pe(E);
 i = b;
 return A | 0;
}

function uh(b, e, f, g, h, i, j, k, l, m, n, o) {
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
 var p = 0, q = 0, r = 0, s = 0, t = 0, u = 0;
 a : do if ((b | 0) == (i | 0)) if (a[e >> 0] | 0) {
  a[e >> 0] = 0;
  p = c[h >> 2] | 0;
  c[h >> 2] = p + 1;
  a[p >> 0] = 46;
  p = a[k >> 0] | 0;
  if ((((p & 1) == 0 ? (p & 255) >>> 1 : c[k + 4 >> 2] | 0) | 0) != 0 ? (p = c[m >> 2] | 0, (p - l | 0) < 160) : 0) {
   q = c[n >> 2] | 0;
   c[m >> 2] = p + 4;
   c[p >> 2] = q;
   r = 0;
  } else r = 0;
 } else r = -1; else {
  if ((b | 0) == (j | 0) ? (q = a[k >> 0] | 0, (((q & 1) == 0 ? (q & 255) >>> 1 : c[k + 4 >> 2] | 0) | 0) != 0) : 0) {
   if (!(a[e >> 0] | 0)) {
    r = -1;
    break;
   }
   q = c[m >> 2] | 0;
   if ((q - l | 0) >= 160) {
    r = 0;
    break;
   }
   p = c[n >> 2] | 0;
   c[m >> 2] = q + 4;
   c[q >> 2] = p;
   c[n >> 2] = 0;
   r = 0;
   break;
  }
  p = o + 128 | 0;
  q = o;
  while (1) {
   if ((c[q >> 2] | 0) == (b | 0)) {
    s = q;
    break;
   }
   q = q + 4 | 0;
   if ((q | 0) == (p | 0)) {
    s = p;
    break;
   }
  }
  p = s - o | 0;
  q = p >> 2;
  if ((p | 0) <= 124) {
   t = a[19968 + q >> 0] | 0;
   switch (q | 0) {
   case 24:
   case 25:
    {
     q = c[h >> 2] | 0;
     if ((q | 0) != (g | 0) ? (d[q + -1 >> 0] & 95 | 0) != (d[f >> 0] & 127 | 0) : 0) {
      r = -1;
      break a;
     }
     c[h >> 2] = q + 1;
     a[q >> 0] = t;
     r = 0;
     break a;
     break;
    }
   case 23:
   case 22:
    {
     a[f >> 0] = 80;
     break;
    }
   default:
    {
     q = t & 95;
     if ((((q | 0) == (a[f >> 0] | 0) ? (a[f >> 0] = q | 128, (a[e >> 0] | 0) != 0) : 0) ? (a[e >> 0] = 0, q = a[k >> 0] | 0, (((q & 1) == 0 ? (q & 255) >>> 1 : c[k + 4 >> 2] | 0) | 0) != 0) : 0) ? (q = c[m >> 2] | 0, (q - l | 0) < 160) : 0) {
      u = c[n >> 2] | 0;
      c[m >> 2] = q + 4;
      c[q >> 2] = u;
     }
    }
   }
   u = c[h >> 2] | 0;
   c[h >> 2] = u + 1;
   a[u >> 0] = t;
   if ((p | 0) > 84) r = 0; else {
    c[n >> 2] = (c[n >> 2] | 0) + 1;
    r = 0;
   }
  } else r = -1;
 } while (0);
 return r | 0;
}

function Mi(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 a : while (1) {
  a = c[b >> 2] | 0;
  do if (a) {
   g = c[a + 12 >> 2] | 0;
   if ((g | 0) == (c[a + 16 >> 2] | 0)) h = ub[c[(c[a >> 2] | 0) + 36 >> 2] & 63](a) | 0; else h = c[g >> 2] | 0;
   if ((h | 0) == -1) {
    c[b >> 2] = 0;
    i = 1;
    break;
   } else {
    i = (c[b >> 2] | 0) == 0;
    break;
   }
  } else i = 1; while (0);
  a = c[d >> 2] | 0;
  do if (a) {
   g = c[a + 12 >> 2] | 0;
   if ((g | 0) == (c[a + 16 >> 2] | 0)) j = ub[c[(c[a >> 2] | 0) + 36 >> 2] & 63](a) | 0; else j = c[g >> 2] | 0;
   if ((j | 0) != -1) if (i) {
    k = a;
    break;
   } else {
    l = a;
    break a;
   } else {
    c[d >> 2] = 0;
    m = 15;
    break;
   }
  } else m = 15; while (0);
  if ((m | 0) == 15) {
   m = 0;
   if (i) {
    l = 0;
    break;
   } else k = 0;
  }
  a = c[b >> 2] | 0;
  g = c[a + 12 >> 2] | 0;
  if ((g | 0) == (c[a + 16 >> 2] | 0)) n = ub[c[(c[a >> 2] | 0) + 36 >> 2] & 63](a) | 0; else n = c[g >> 2] | 0;
  if (!(nb[c[(c[f >> 2] | 0) + 12 >> 2] & 31](f, 8192, n) | 0)) {
   l = k;
   break;
  }
  g = c[b >> 2] | 0;
  a = g + 12 | 0;
  o = c[a >> 2] | 0;
  if ((o | 0) == (c[g + 16 >> 2] | 0)) {
   ub[c[(c[g >> 2] | 0) + 40 >> 2] & 63](g) | 0;
   continue;
  } else {
   c[a >> 2] = o + 4;
   continue;
  }
 }
 k = c[b >> 2] | 0;
 do if (k) {
  n = c[k + 12 >> 2] | 0;
  if ((n | 0) == (c[k + 16 >> 2] | 0)) p = ub[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else p = c[n >> 2] | 0;
  if ((p | 0) == -1) {
   c[b >> 2] = 0;
   q = 1;
   break;
  } else {
   q = (c[b >> 2] | 0) == 0;
   break;
  }
 } else q = 1; while (0);
 do if (l) {
  b = c[l + 12 >> 2] | 0;
  if ((b | 0) == (c[l + 16 >> 2] | 0)) r = ub[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0; else r = c[b >> 2] | 0;
  if ((r | 0) != -1) if (q) break; else {
   m = 39;
   break;
  } else {
   c[d >> 2] = 0;
   m = 37;
   break;
  }
 } else m = 37; while (0);
 if ((m | 0) == 37 ? q : 0) m = 39;
 if ((m | 0) == 39) c[e >> 2] = c[e >> 2] | 2;
 return;
}

function Ln(b, d, e, f, g, h, i, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0;
 c[e >> 2] = b;
 c[h >> 2] = f;
 b = g;
 if (j & 2) if ((b - f | 0) < 3) k = 1; else {
  c[h >> 2] = f + 1;
  a[f >> 0] = -17;
  f = c[h >> 2] | 0;
  c[h >> 2] = f + 1;
  a[f >> 0] = -69;
  f = c[h >> 2] | 0;
  c[h >> 2] = f + 1;
  a[f >> 0] = -65;
  l = 4;
 } else l = 4;
 a : do if ((l | 0) == 4) {
  f = c[e >> 2] | 0;
  if (f >>> 0 < d >>> 0) {
   j = f;
   while (1) {
    f = c[j >> 2] | 0;
    if (f >>> 0 > i >>> 0 | (f & -2048 | 0) == 55296) {
     k = 2;
     break a;
    }
    do if (f >>> 0 >= 128) {
     if (f >>> 0 < 2048) {
      g = c[h >> 2] | 0;
      if ((b - g | 0) < 2) {
       k = 1;
       break a;
      }
      c[h >> 2] = g + 1;
      a[g >> 0] = f >>> 6 | 192;
      g = c[h >> 2] | 0;
      c[h >> 2] = g + 1;
      a[g >> 0] = f & 63 | 128;
      break;
     }
     g = c[h >> 2] | 0;
     m = b - g | 0;
     if (f >>> 0 < 65536) {
      if ((m | 0) < 3) {
       k = 1;
       break a;
      }
      c[h >> 2] = g + 1;
      a[g >> 0] = f >>> 12 | 224;
      n = c[h >> 2] | 0;
      c[h >> 2] = n + 1;
      a[n >> 0] = f >>> 6 & 63 | 128;
      n = c[h >> 2] | 0;
      c[h >> 2] = n + 1;
      a[n >> 0] = f & 63 | 128;
      break;
     } else {
      if ((m | 0) < 4) {
       k = 1;
       break a;
      }
      c[h >> 2] = g + 1;
      a[g >> 0] = f >>> 18 | 240;
      g = c[h >> 2] | 0;
      c[h >> 2] = g + 1;
      a[g >> 0] = f >>> 12 & 63 | 128;
      g = c[h >> 2] | 0;
      c[h >> 2] = g + 1;
      a[g >> 0] = f >>> 6 & 63 | 128;
      g = c[h >> 2] | 0;
      c[h >> 2] = g + 1;
      a[g >> 0] = f & 63 | 128;
      break;
     }
    } else {
     g = c[h >> 2] | 0;
     if ((b - g | 0) < 1) {
      k = 1;
      break a;
     }
     c[h >> 2] = g + 1;
     a[g >> 0] = f;
    } while (0);
    j = (c[e >> 2] | 0) + 4 | 0;
    c[e >> 2] = j;
    if (j >>> 0 >= d >>> 0) {
     k = 0;
     break;
    }
   }
  } else k = 0;
 } while (0);
 return k | 0;
}

function le(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, i = 0, j = 0.0;
 a : do if (b >>> 0 <= 20) do switch (b | 0) {
 case 9:
  {
   e = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   f = c[e >> 2] | 0;
   c[d >> 2] = e + 4;
   c[a >> 2] = f;
   break a;
   break;
  }
 case 10:
  {
   f = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   e = c[f >> 2] | 0;
   c[d >> 2] = f + 4;
   f = a;
   c[f >> 2] = e;
   c[f + 4 >> 2] = ((e | 0) < 0) << 31 >> 31;
   break a;
   break;
  }
 case 11:
  {
   e = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   f = c[e >> 2] | 0;
   c[d >> 2] = e + 4;
   e = a;
   c[e >> 2] = f;
   c[e + 4 >> 2] = 0;
   break a;
   break;
  }
 case 12:
  {
   e = (c[d >> 2] | 0) + (8 - 1) & ~(8 - 1);
   f = e;
   g = c[f >> 2] | 0;
   i = c[f + 4 >> 2] | 0;
   c[d >> 2] = e + 8;
   e = a;
   c[e >> 2] = g;
   c[e + 4 >> 2] = i;
   break a;
   break;
  }
 case 13:
  {
   i = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   e = c[i >> 2] | 0;
   c[d >> 2] = i + 4;
   i = (e & 65535) << 16 >> 16;
   e = a;
   c[e >> 2] = i;
   c[e + 4 >> 2] = ((i | 0) < 0) << 31 >> 31;
   break a;
   break;
  }
 case 14:
  {
   i = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   e = c[i >> 2] | 0;
   c[d >> 2] = i + 4;
   i = a;
   c[i >> 2] = e & 65535;
   c[i + 4 >> 2] = 0;
   break a;
   break;
  }
 case 15:
  {
   i = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   e = c[i >> 2] | 0;
   c[d >> 2] = i + 4;
   i = (e & 255) << 24 >> 24;
   e = a;
   c[e >> 2] = i;
   c[e + 4 >> 2] = ((i | 0) < 0) << 31 >> 31;
   break a;
   break;
  }
 case 16:
  {
   i = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   e = c[i >> 2] | 0;
   c[d >> 2] = i + 4;
   i = a;
   c[i >> 2] = e & 255;
   c[i + 4 >> 2] = 0;
   break a;
   break;
  }
 case 17:
  {
   i = (c[d >> 2] | 0) + (8 - 1) & ~(8 - 1);
   j = +h[i >> 3];
   c[d >> 2] = i + 8;
   h[a >> 3] = j;
   break a;
   break;
  }
 case 18:
  {
   i = (c[d >> 2] | 0) + (8 - 1) & ~(8 - 1);
   j = +h[i >> 3];
   c[d >> 2] = i + 8;
   h[a >> 3] = j;
   break a;
   break;
  }
 default:
  break a;
 } while (0); while (0);
 return;
}

function jk(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0;
 b = i;
 i = i + 176 | 0;
 j = b + 56 | 0;
 k = b + 52 | 0;
 l = b + 64 | 0;
 m = b + 61 | 0;
 n = b + 60 | 0;
 o = b + 40 | 0;
 p = b + 28 | 0;
 q = b + 16 | 0;
 r = b + 12 | 0;
 s = b + 68 | 0;
 t = b + 8 | 0;
 u = b + 4 | 0;
 v = b;
 w = xf(f) | 0;
 c[k >> 2] = w;
 x = Mk(k, 9336) | 0;
 y = a[h >> 0] | 0;
 z = (y & 1) == 0;
 A = h + 4 | 0;
 if (!((z ? (y & 255) >>> 1 : c[A >> 2] | 0) | 0)) B = 0; else {
  y = a[(z ? h + 1 | 0 : c[h + 8 >> 2] | 0) >> 0] | 0;
  B = y << 24 >> 24 == (Ab[c[(c[x >> 2] | 0) + 28 >> 2] & 15](x, 45) | 0) << 24 >> 24;
 }
 c[o >> 2] = 0;
 c[o + 4 >> 2] = 0;
 c[o + 8 >> 2] = 0;
 c[p >> 2] = 0;
 c[p + 4 >> 2] = 0;
 c[p + 8 >> 2] = 0;
 c[q >> 2] = 0;
 c[q + 4 >> 2] = 0;
 c[q + 8 >> 2] = 0;
 hk(e, B, k, l, m, n, o, p, q, r);
 e = a[h >> 0] | 0;
 y = c[A >> 2] | 0;
 A = (e & 1) == 0 ? (e & 255) >>> 1 : y;
 z = c[r >> 2] | 0;
 if ((A | 0) > (z | 0)) {
  r = a[q >> 0] | 0;
  C = a[p >> 0] | 0;
  D = (A - z << 1 | 1) + z + ((r & 1) == 0 ? (r & 255) >>> 1 : c[q + 4 >> 2] | 0) + ((C & 1) == 0 ? (C & 255) >>> 1 : c[p + 4 >> 2] | 0) | 0;
 } else {
  C = a[q >> 0] | 0;
  r = a[p >> 0] | 0;
  D = z + 2 + ((C & 1) == 0 ? (C & 255) >>> 1 : c[q + 4 >> 2] | 0) + ((r & 1) == 0 ? (r & 255) >>> 1 : c[p + 4 >> 2] | 0) | 0;
 }
 if (D >>> 0 > 100) {
  r = oe(D) | 0;
  if (!r) Cc(); else {
   E = r;
   F = r;
  }
 } else {
  E = 0;
  F = s;
 }
 s = (e & 1) == 0;
 r = s ? h + 1 | 0 : c[h + 8 >> 2] | 0;
 ik(F, t, u, c[f + 4 >> 2] | 0, r, r + (s ? (e & 255) >>> 1 : y) | 0, x, B, l, a[m >> 0] | 0, a[n >> 0] | 0, o, p, q, z);
 c[v >> 2] = c[d >> 2];
 d = c[t >> 2] | 0;
 t = c[u >> 2] | 0;
 c[j >> 2] = c[v >> 2];
 v = Qb(j, F, d, t, f, g) | 0;
 if (!E) G = w; else {
  pe(E);
  G = c[k >> 2] | 0;
 }
 $e(q);
 $e(p);
 $e(o);
 ko(G) | 0;
 i = b;
 return v | 0;
}

function pk(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0;
 b = i;
 i = i + 480 | 0;
 j = b + 464 | 0;
 k = b + 60 | 0;
 l = b + 468 | 0;
 m = b + 56 | 0;
 n = b + 52 | 0;
 o = b + 40 | 0;
 p = b + 28 | 0;
 q = b + 16 | 0;
 r = b + 12 | 0;
 s = b + 64 | 0;
 t = b + 8 | 0;
 u = b + 4 | 0;
 v = b;
 w = xf(f) | 0;
 c[k >> 2] = w;
 x = Mk(k, 9328) | 0;
 y = a[h >> 0] | 0;
 z = (y & 1) == 0;
 A = h + 4 | 0;
 if (!((z ? (y & 255) >>> 1 : c[A >> 2] | 0) | 0)) B = 0; else {
  y = c[(z ? A : c[h + 8 >> 2] | 0) >> 2] | 0;
  B = (y | 0) == (Ab[c[(c[x >> 2] | 0) + 44 >> 2] & 15](x, 45) | 0);
 }
 c[o >> 2] = 0;
 c[o + 4 >> 2] = 0;
 c[o + 8 >> 2] = 0;
 c[p >> 2] = 0;
 c[p + 4 >> 2] = 0;
 c[p + 8 >> 2] = 0;
 c[q >> 2] = 0;
 c[q + 4 >> 2] = 0;
 c[q + 8 >> 2] = 0;
 nk(e, B, k, l, m, n, o, p, q, r);
 e = a[h >> 0] | 0;
 y = c[A >> 2] | 0;
 z = (e & 1) == 0 ? (e & 255) >>> 1 : y;
 C = c[r >> 2] | 0;
 if ((z | 0) > (C | 0)) {
  r = a[q >> 0] | 0;
  D = a[p >> 0] | 0;
  E = (z - C << 1 | 1) + C + ((r & 1) == 0 ? (r & 255) >>> 1 : c[q + 4 >> 2] | 0) + ((D & 1) == 0 ? (D & 255) >>> 1 : c[p + 4 >> 2] | 0) | 0;
 } else {
  D = a[q >> 0] | 0;
  r = a[p >> 0] | 0;
  E = C + 2 + ((D & 1) == 0 ? (D & 255) >>> 1 : c[q + 4 >> 2] | 0) + ((r & 1) == 0 ? (r & 255) >>> 1 : c[p + 4 >> 2] | 0) | 0;
 }
 if (E >>> 0 > 100) {
  r = oe(E << 2) | 0;
  if (!r) Cc(); else {
   F = r;
   G = r;
  }
 } else {
  F = 0;
  G = s;
 }
 s = (e & 1) == 0;
 r = s ? A : c[h + 8 >> 2] | 0;
 ok(G, t, u, c[f + 4 >> 2] | 0, r, r + ((s ? (e & 255) >>> 1 : y) << 2) | 0, x, B, l, c[m >> 2] | 0, c[n >> 2] | 0, o, p, q, C);
 c[v >> 2] = c[d >> 2];
 d = c[t >> 2] | 0;
 t = c[u >> 2] | 0;
 c[j >> 2] = c[v >> 2];
 v = Vm(j, G, d, t, f, g) | 0;
 if (!F) H = w; else {
  pe(F);
  H = c[k >> 2] | 0;
 }
 lf(q);
 lf(p);
 $e(o);
 ko(H) | 0;
 i = b;
 return v | 0;
}

function ni(a, e, f, g, h) {
 a = a | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 a = h + 8 | 0;
 a : while (1) {
  h = c[e >> 2] | 0;
  do if (h) if ((c[h + 12 >> 2] | 0) == (c[h + 16 >> 2] | 0)) if ((ub[c[(c[h >> 2] | 0) + 36 >> 2] & 63](h) | 0) == -1) {
   c[e >> 2] = 0;
   i = 0;
   break;
  } else {
   i = c[e >> 2] | 0;
   break;
  } else i = h; else i = 0; while (0);
  h = (i | 0) == 0;
  j = c[f >> 2] | 0;
  do if (j) {
   if ((c[j + 12 >> 2] | 0) != (c[j + 16 >> 2] | 0)) if (h) {
    k = j;
    break;
   } else {
    l = j;
    break a;
   }
   if ((ub[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0) != -1) if (h) {
    k = j;
    break;
   } else {
    l = j;
    break a;
   } else {
    c[f >> 2] = 0;
    m = 12;
    break;
   }
  } else m = 12; while (0);
  if ((m | 0) == 12) {
   m = 0;
   if (h) {
    l = 0;
    break;
   } else k = 0;
  }
  j = c[e >> 2] | 0;
  n = c[j + 12 >> 2] | 0;
  if ((n | 0) == (c[j + 16 >> 2] | 0)) o = ub[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else o = d[n >> 0] | 0;
  if ((o & 255) << 24 >> 24 <= -1) {
   l = k;
   break;
  }
  if (!(b[(c[a >> 2] | 0) + (o << 24 >> 24 << 1) >> 1] & 8192)) {
   l = k;
   break;
  }
  n = c[e >> 2] | 0;
  j = n + 12 | 0;
  p = c[j >> 2] | 0;
  if ((p | 0) == (c[n + 16 >> 2] | 0)) {
   ub[c[(c[n >> 2] | 0) + 40 >> 2] & 63](n) | 0;
   continue;
  } else {
   c[j >> 2] = p + 1;
   continue;
  }
 }
 k = c[e >> 2] | 0;
 do if (k) if ((c[k + 12 >> 2] | 0) == (c[k + 16 >> 2] | 0)) if ((ub[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0) == -1) {
  c[e >> 2] = 0;
  q = 0;
  break;
 } else {
  q = c[e >> 2] | 0;
  break;
 } else q = k; else q = 0; while (0);
 k = (q | 0) == 0;
 do if (l) {
  if ((c[l + 12 >> 2] | 0) == (c[l + 16 >> 2] | 0) ? (ub[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0) == -1 : 0) {
   c[f >> 2] = 0;
   m = 32;
   break;
  }
  if (!k) m = 33;
 } else m = 32; while (0);
 if ((m | 0) == 32 ? k : 0) m = 33;
 if ((m | 0) == 33) c[g >> 2] = c[g >> 2] | 2;
 return;
}

function ck(b, d, e, f, g, h, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0;
 b = i;
 i = i + 432 | 0;
 k = b + 424 | 0;
 l = b + 24 | 0;
 m = b + 16 | 0;
 n = b + 8 | 0;
 o = b + 4 | 0;
 p = b + 428 | 0;
 q = b;
 c[m >> 2] = l;
 r = m + 4 | 0;
 c[r >> 2] = 98;
 s = xf(g) | 0;
 c[o >> 2] = s;
 t = Mk(o, 9328) | 0;
 a[p >> 0] = 0;
 u = c[e >> 2] | 0;
 c[q >> 2] = u;
 v = c[g + 4 >> 2] | 0;
 c[k >> 2] = c[q >> 2];
 q = u;
 if (bk(d, k, f, o, v, h, p, t, m, n, l + 400 | 0) | 0) {
  if (!(a[j >> 0] & 1)) a[j >> 0] = 0; else c[c[j + 8 >> 2] >> 2] = 0;
  c[j + 4 >> 2] = 0;
  if (a[p >> 0] | 0) pf(j, Ab[c[(c[t >> 2] | 0) + 44 >> 2] & 15](t, 45) | 0);
  p = Ab[c[(c[t >> 2] | 0) + 44 >> 2] & 15](t, 48) | 0;
  t = c[m >> 2] | 0;
  l = c[n >> 2] | 0;
  n = l + -4 | 0;
  a : do if (t >>> 0 < n >>> 0) {
   v = t;
   while (1) {
    if ((c[v >> 2] | 0) != (p | 0)) {
     w = v;
     break a;
    }
    o = v + 4 | 0;
    if (o >>> 0 < n >>> 0) v = o; else {
     w = o;
     break;
    }
   }
  } else w = t; while (0);
  an(j, w, l) | 0;
 }
 l = c[d >> 2] | 0;
 do if (l) {
  w = c[l + 12 >> 2] | 0;
  if ((w | 0) == (c[l + 16 >> 2] | 0)) x = ub[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0; else x = c[w >> 2] | 0;
  if ((x | 0) == -1) {
   c[d >> 2] = 0;
   y = 1;
   break;
  } else {
   y = (c[d >> 2] | 0) == 0;
   break;
  }
 } else y = 1; while (0);
 do if (u) {
  x = c[q + 12 >> 2] | 0;
  if ((x | 0) == (c[q + 16 >> 2] | 0)) z = ub[c[(c[u >> 2] | 0) + 36 >> 2] & 63](q) | 0; else z = c[x >> 2] | 0;
  if ((z | 0) != -1) if (y) break; else {
   A = 26;
   break;
  } else {
   c[e >> 2] = 0;
   A = 24;
   break;
  }
 } else A = 24; while (0);
 if ((A | 0) == 24 ? y : 0) A = 26;
 if ((A | 0) == 26) c[h >> 2] = c[h >> 2] | 2;
 h = c[d >> 2] | 0;
 ko(s) | 0;
 s = c[m >> 2] | 0;
 c[m >> 2] = 0;
 if (s) qb[c[r >> 2] & 127](s);
 i = b;
 return h | 0;
}

function nd(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0;
 g = i;
 i = i + 1040 | 0;
 h = g + 8 | 0;
 j = g;
 k = c[b >> 2] | 0;
 c[j >> 2] = k;
 l = (a | 0) != 0;
 m = l ? e : 256;
 e = l ? a : h;
 a = k;
 a : do if ((m | 0) != 0 & (k | 0) != 0) {
  n = d;
  o = m;
  p = a;
  q = 0;
  r = e;
  while (1) {
   s = n >>> 2;
   t = s >>> 0 >= o >>> 0;
   if (!(n >>> 0 > 131 | t)) {
    u = n;
    v = o;
    w = p;
    x = q;
    y = r;
    break a;
   }
   z = t ? o : s;
   s = n - z | 0;
   t = od(r, j, z, f) | 0;
   if ((t | 0) == -1) {
    A = s;
    B = r;
    break;
   }
   z = (r | 0) == (h | 0);
   C = z ? 0 : t;
   D = o - C | 0;
   E = z ? r : r + (t << 2) | 0;
   z = t + q | 0;
   t = c[j >> 2] | 0;
   if ((o | 0) != (C | 0) & (t | 0) != 0) {
    n = s;
    o = D;
    p = t;
    q = z;
    r = E;
   } else {
    u = s;
    v = D;
    w = t;
    x = z;
    y = E;
    break a;
   }
  }
  u = A;
  v = 0;
  w = c[j >> 2] | 0;
  x = -1;
  y = B;
 } else {
  u = d;
  v = m;
  w = a;
  x = 0;
  y = e;
 } while (0);
 b : do if ((w | 0) != 0 ? (v | 0) != 0 & (u | 0) != 0 : 0) {
  e = u;
  a = v;
  m = w;
  d = x;
  B = y;
  while (1) {
   A = ld(B, m, e, f) | 0;
   if ((A + 2 | 0) >>> 0 < 3) {
    F = A;
    G = d;
    break;
   }
   m = (c[j >> 2] | 0) + A | 0;
   c[j >> 2] = m;
   a = a + -1 | 0;
   h = d + 1 | 0;
   if (!((a | 0) != 0 & (e | 0) != (A | 0))) {
    H = h;
    break b;
   } else {
    e = e - A | 0;
    d = h;
    B = B + 4 | 0;
   }
  }
  switch (F | 0) {
  case -1:
   {
    H = -1;
    break b;
    break;
   }
  case 0:
   {
    c[j >> 2] = 0;
    H = G;
    break b;
    break;
   }
  default:
   {
    c[f >> 2] = 0;
    H = G;
    break b;
   }
  }
 } else H = x; while (0);
 if (l) c[b >> 2] = c[j >> 2];
 i = g;
 return H | 0;
}

function si(a, b, e, f, g) {
 a = a | 0;
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0;
 a = c[b >> 2] | 0;
 do if (a) if ((c[a + 12 >> 2] | 0) == (c[a + 16 >> 2] | 0)) if ((ub[c[(c[a >> 2] | 0) + 36 >> 2] & 63](a) | 0) == -1) {
  c[b >> 2] = 0;
  h = 0;
  break;
 } else {
  h = c[b >> 2] | 0;
  break;
 } else h = a; else h = 0; while (0);
 a = (h | 0) == 0;
 h = c[e >> 2] | 0;
 do if (h) {
  if ((c[h + 12 >> 2] | 0) == (c[h + 16 >> 2] | 0) ? (ub[c[(c[h >> 2] | 0) + 36 >> 2] & 63](h) | 0) == -1 : 0) {
   c[e >> 2] = 0;
   i = 11;
   break;
  }
  if (a) {
   j = h;
   i = 13;
  } else i = 12;
 } else i = 11; while (0);
 if ((i | 0) == 11) if (a) i = 12; else {
  j = 0;
  i = 13;
 }
 a : do if ((i | 0) == 12) c[f >> 2] = c[f >> 2] | 6; else if ((i | 0) == 13) {
  a = c[b >> 2] | 0;
  h = c[a + 12 >> 2] | 0;
  if ((h | 0) == (c[a + 16 >> 2] | 0)) k = ub[c[(c[a >> 2] | 0) + 36 >> 2] & 63](a) | 0; else k = d[h >> 0] | 0;
  if ((nb[c[(c[g >> 2] | 0) + 36 >> 2] & 31](g, k & 255, 0) | 0) << 24 >> 24 != 37) {
   c[f >> 2] = c[f >> 2] | 4;
   break;
  }
  h = c[b >> 2] | 0;
  a = h + 12 | 0;
  l = c[a >> 2] | 0;
  if ((l | 0) == (c[h + 16 >> 2] | 0)) {
   ub[c[(c[h >> 2] | 0) + 40 >> 2] & 63](h) | 0;
   m = c[b >> 2] | 0;
   if (!m) n = 0; else {
    o = m;
    i = 21;
   }
  } else {
   c[a >> 2] = l + 1;
   o = h;
   i = 21;
  }
  do if ((i | 0) == 21) if ((c[o + 12 >> 2] | 0) == (c[o + 16 >> 2] | 0)) if ((ub[c[(c[o >> 2] | 0) + 36 >> 2] & 63](o) | 0) == -1) {
   c[b >> 2] = 0;
   n = 0;
   break;
  } else {
   n = c[b >> 2] | 0;
   break;
  } else n = o; while (0);
  h = (n | 0) == 0;
  do if (j) {
   if ((c[j + 12 >> 2] | 0) == (c[j + 16 >> 2] | 0) ? (ub[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0) == -1 : 0) {
    c[e >> 2] = 0;
    i = 30;
    break;
   }
   if (h) break a;
  } else i = 30; while (0);
  if ((i | 0) == 30 ? !h : 0) break;
  c[f >> 2] = c[f >> 2] | 2;
 } while (0);
 return;
}

function Xe(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0;
 f = i;
 i = i + 32 | 0;
 g = f + 16 | 0;
 h = f + 8 | 0;
 j = f + 4 | 0;
 k = f;
 l = b + 52 | 0;
 a : do if (a[l >> 0] | 0) {
  m = b + 48 | 0;
  n = c[m >> 2] | 0;
  if (e) {
   c[m >> 2] = -1;
   a[l >> 0] = 0;
   o = n;
  } else o = n;
 } else {
  n = c[b + 44 >> 2] | 0;
  m = (n | 0) > 1 ? n : 1;
  n = b + 32 | 0;
  if ((m | 0) > 0) {
   p = 0;
   do {
    q = zd(c[n >> 2] | 0) | 0;
    if ((q | 0) == -1) {
     o = -1;
     break a;
    }
    a[g + p >> 0] = q;
    p = p + 1 | 0;
   } while ((p | 0) < (m | 0));
  }
  b : do if (!(a[b + 53 >> 0] | 0)) {
   p = b + 40 | 0;
   q = b + 36 | 0;
   r = h + 1 | 0;
   s = m;
   c : while (1) {
    t = c[p >> 2] | 0;
    u = t;
    v = c[u >> 2] | 0;
    w = c[u + 4 >> 2] | 0;
    u = c[q >> 2] | 0;
    x = g + s | 0;
    switch (xb[c[(c[u >> 2] | 0) + 16 >> 2] & 15](u, t, g, x, j, h, r, k) | 0) {
    case 2:
     {
      o = -1;
      break a;
      break;
     }
    case 3:
     {
      y = s;
      break c;
      break;
     }
    case 1:
     break;
    default:
     {
      z = s;
      break b;
     }
    }
    t = c[p >> 2] | 0;
    c[t >> 2] = v;
    c[t + 4 >> 2] = w;
    if ((s | 0) == 8) {
     o = -1;
     break a;
    }
    w = zd(c[n >> 2] | 0) | 0;
    if ((w | 0) == -1) {
     o = -1;
     break a;
    }
    a[x >> 0] = w;
    s = s + 1 | 0;
   }
   a[h >> 0] = a[g >> 0] | 0;
   z = y;
  } else {
   a[h >> 0] = a[g >> 0] | 0;
   z = m;
  } while (0);
  if (e) {
   m = a[h >> 0] | 0;
   c[b + 48 >> 2] = m & 255;
   A = m;
  } else {
   m = z;
   while (1) {
    if ((m | 0) <= 0) break;
    m = m + -1 | 0;
    if ((Cd(d[g + m >> 0] | 0, c[n >> 2] | 0) | 0) == -1) {
     o = -1;
     break a;
    }
   }
   A = a[h >> 0] | 0;
  }
  o = A & 255;
 } while (0);
 i = f;
 return o | 0;
}

function Xj(b, d, e, f, g, h, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0;
 b = i;
 i = i + 144 | 0;
 k = b + 24 | 0;
 l = b + 32 | 0;
 m = b + 16 | 0;
 n = b + 8 | 0;
 o = b + 4 | 0;
 p = b + 28 | 0;
 q = b;
 c[m >> 2] = l;
 r = m + 4 | 0;
 c[r >> 2] = 98;
 s = xf(g) | 0;
 c[o >> 2] = s;
 t = Mk(o, 9336) | 0;
 a[p >> 0] = 0;
 u = c[e >> 2] | 0;
 c[q >> 2] = u;
 v = c[g + 4 >> 2] | 0;
 c[k >> 2] = c[q >> 2];
 q = u;
 if (Vj(d, k, f, o, v, h, p, t, m, n, l + 100 | 0) | 0) {
  if (!(a[j >> 0] & 1)) {
   a[j + 1 >> 0] = 0;
   a[j >> 0] = 0;
  } else {
   a[c[j + 8 >> 2] >> 0] = 0;
   c[j + 4 >> 2] = 0;
  }
  if (a[p >> 0] | 0) ff(j, Ab[c[(c[t >> 2] | 0) + 28 >> 2] & 15](t, 45) | 0);
  p = Ab[c[(c[t >> 2] | 0) + 28 >> 2] & 15](t, 48) | 0;
  t = c[m >> 2] | 0;
  l = c[n >> 2] | 0;
  n = l + -1 | 0;
  a : do if (t >>> 0 < n >>> 0) {
   v = t;
   while (1) {
    if ((a[v >> 0] | 0) != p << 24 >> 24) {
     w = v;
     break a;
    }
    o = v + 1 | 0;
    if (o >>> 0 < n >>> 0) v = o; else {
     w = o;
     break;
    }
   }
  } else w = t; while (0);
  _m(j, w, l) | 0;
 }
 l = c[d >> 2] | 0;
 do if (l) if ((c[l + 12 >> 2] | 0) == (c[l + 16 >> 2] | 0)) if ((ub[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0) == -1) {
  c[d >> 2] = 0;
  x = 0;
  break;
 } else {
  x = c[d >> 2] | 0;
  break;
 } else x = l; else x = 0; while (0);
 l = (x | 0) == 0;
 do if (u) {
  if ((c[q + 12 >> 2] | 0) == (c[q + 16 >> 2] | 0) ? (ub[c[(c[u >> 2] | 0) + 36 >> 2] & 63](q) | 0) == -1 : 0) {
   c[e >> 2] = 0;
   y = 21;
   break;
  }
  if (!l) y = 22;
 } else y = 21; while (0);
 if ((y | 0) == 21 ? l : 0) y = 22;
 if ((y | 0) == 22) c[h >> 2] = c[h >> 2] | 2;
 h = c[d >> 2] | 0;
 ko(s) | 0;
 s = c[m >> 2] | 0;
 c[m >> 2] = 0;
 if (s) qb[c[r >> 2] & 127](s);
 i = b;
 return h | 0;
}

function Me(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0;
 e = i;
 i = i + 32 | 0;
 f = e + 16 | 0;
 g = e + 8 | 0;
 h = e + 4 | 0;
 j = e;
 k = b + 52 | 0;
 a : do if (a[k >> 0] | 0) {
  l = b + 48 | 0;
  m = c[l >> 2] | 0;
  if (d) {
   c[l >> 2] = -1;
   a[k >> 0] = 0;
   n = m;
  } else n = m;
 } else {
  m = c[b + 44 >> 2] | 0;
  l = (m | 0) > 1 ? m : 1;
  m = b + 32 | 0;
  if ((l | 0) > 0) {
   o = 0;
   do {
    p = zd(c[m >> 2] | 0) | 0;
    if ((p | 0) == -1) {
     n = -1;
     break a;
    }
    a[f + o >> 0] = p;
    o = o + 1 | 0;
   } while ((o | 0) < (l | 0));
  }
  b : do if (!(a[b + 53 >> 0] | 0)) {
   o = b + 40 | 0;
   p = b + 36 | 0;
   q = g + 4 | 0;
   r = l;
   c : while (1) {
    s = c[o >> 2] | 0;
    t = s;
    u = c[t >> 2] | 0;
    v = c[t + 4 >> 2] | 0;
    t = c[p >> 2] | 0;
    w = f + r | 0;
    switch (xb[c[(c[t >> 2] | 0) + 16 >> 2] & 15](t, s, f, w, h, g, q, j) | 0) {
    case 2:
     {
      n = -1;
      break a;
      break;
     }
    case 3:
     {
      x = r;
      break c;
      break;
     }
    case 1:
     break;
    default:
     {
      y = r;
      break b;
     }
    }
    s = c[o >> 2] | 0;
    c[s >> 2] = u;
    c[s + 4 >> 2] = v;
    if ((r | 0) == 8) {
     n = -1;
     break a;
    }
    v = zd(c[m >> 2] | 0) | 0;
    if ((v | 0) == -1) {
     n = -1;
     break a;
    }
    a[w >> 0] = v;
    r = r + 1 | 0;
   }
   c[g >> 2] = a[f >> 0];
   y = x;
  } else {
   c[g >> 2] = a[f >> 0];
   y = l;
  } while (0);
  if (d) {
   l = c[g >> 2] | 0;
   c[b + 48 >> 2] = l;
   n = l;
   break;
  } else z = y;
  while (1) {
   if ((z | 0) <= 0) break;
   z = z + -1 | 0;
   if ((Cd(a[f + z >> 0] | 0, c[m >> 2] | 0) | 0) == -1) {
    n = -1;
    break a;
   }
  }
  n = c[g >> 2] | 0;
 } while (0);
 i = e;
 return n | 0;
}

function ue(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0;
 a = c[639] | 0;
 we(7320, a, 7376);
 c[1660] = 8068;
 c[1662] = 8088;
 c[1661] = 0;
 b = c[2014] | 0;
 yf(6640 + b | 0, 7320);
 c[6640 + (b + 72) >> 2] = 0;
 c[6640 + (b + 76) >> 2] = -1;
 b = c[640] | 0;
 xe(7424, b, 7384);
 c[1682] = 8148;
 c[1683] = 8168;
 d = c[2034] | 0;
 yf(6728 + d | 0, 7424);
 e = d + 72 | 0;
 c[6728 + e >> 2] = 0;
 f = d + 76 | 0;
 c[6728 + f >> 2] = -1;
 g = c[638] | 0;
 xe(7472, g, 7392);
 c[1703] = 8148;
 c[1704] = 8168;
 yf(6812 + d | 0, 7472);
 c[6812 + e >> 2] = 0;
 c[6812 + f >> 2] = -1;
 h = c[6812 + ((c[(c[1703] | 0) + -12 >> 2] | 0) + 24) >> 2] | 0;
 c[1724] = 8148;
 c[1725] = 8168;
 yf(6896 + d | 0, h);
 c[6896 + e >> 2] = 0;
 c[6896 + f >> 2] = -1;
 c[6640 + ((c[(c[1660] | 0) + -12 >> 2] | 0) + 72) >> 2] = 6728;
 f = 6812 + ((c[(c[1703] | 0) + -12 >> 2] | 0) + 4) | 0;
 c[f >> 2] = c[f >> 2] | 8192;
 c[6812 + ((c[(c[1703] | 0) + -12 >> 2] | 0) + 72) >> 2] = 6728;
 ye(7520, a, 7400);
 c[1745] = 8108;
 c[1747] = 8128;
 c[1746] = 0;
 a = c[2024] | 0;
 yf(6980 + a | 0, 7520);
 c[6980 + (a + 72) >> 2] = 0;
 c[6980 + (a + 76) >> 2] = -1;
 ze(7576, b, 7408);
 c[1767] = 8188;
 c[1768] = 8208;
 b = c[2044] | 0;
 yf(7068 + b | 0, 7576);
 a = b + 72 | 0;
 c[7068 + a >> 2] = 0;
 f = b + 76 | 0;
 c[7068 + f >> 2] = -1;
 ze(7624, g, 7416);
 c[1788] = 8188;
 c[1789] = 8208;
 yf(7152 + b | 0, 7624);
 c[7152 + a >> 2] = 0;
 c[7152 + f >> 2] = -1;
 g = c[7152 + ((c[(c[1788] | 0) + -12 >> 2] | 0) + 24) >> 2] | 0;
 c[1809] = 8188;
 c[1810] = 8208;
 yf(7236 + b | 0, g);
 c[7236 + a >> 2] = 0;
 c[7236 + f >> 2] = -1;
 c[6980 + ((c[(c[1745] | 0) + -12 >> 2] | 0) + 72) >> 2] = 7068;
 f = 7152 + ((c[(c[1788] | 0) + -12 >> 2] | 0) + 4) | 0;
 c[f >> 2] = c[f >> 2] | 8192;
 c[7152 + ((c[(c[1788] | 0) + -12 >> 2] | 0) + 72) >> 2] = 7068;
 return;
}

function rd(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0;
 f = i;
 i = i + 272 | 0;
 g = f + 8 | 0;
 h = f;
 j = c[b >> 2] | 0;
 c[h >> 2] = j;
 k = (a | 0) != 0;
 l = k ? e : 256;
 e = k ? a : g;
 a = j;
 a : do if ((l | 0) != 0 & (j | 0) != 0) {
  m = d;
  n = l;
  o = a;
  p = 0;
  q = e;
  while (1) {
   r = m >>> 0 >= n >>> 0;
   if (!(r | m >>> 0 > 32)) {
    s = m;
    t = n;
    u = o;
    v = p;
    w = q;
    break a;
   }
   x = r ? n : m;
   r = m - x | 0;
   y = sd(q, h, x, 0) | 0;
   if ((y | 0) == -1) {
    z = r;
    A = q;
    break;
   }
   x = (q | 0) == (g | 0);
   B = x ? 0 : y;
   C = n - B | 0;
   D = x ? q : q + y | 0;
   x = y + p | 0;
   y = c[h >> 2] | 0;
   if ((n | 0) != (B | 0) & (y | 0) != 0) {
    m = r;
    n = C;
    o = y;
    p = x;
    q = D;
   } else {
    s = r;
    t = C;
    u = y;
    v = x;
    w = D;
    break a;
   }
  }
  s = z;
  t = 0;
  u = c[h >> 2] | 0;
  v = -1;
  w = A;
 } else {
  s = d;
  t = l;
  u = a;
  v = 0;
  w = e;
 } while (0);
 b : do if ((u | 0) != 0 ? (t | 0) != 0 & (s | 0) != 0 : 0) {
  e = s;
  a = t;
  l = u;
  d = v;
  A = w;
  while (1) {
   z = qd(A, c[l >> 2] | 0, 0) | 0;
   if ((z + 1 | 0) >>> 0 < 2) {
    E = z;
    F = d;
    break;
   }
   l = (c[h >> 2] | 0) + 4 | 0;
   c[h >> 2] = l;
   e = e + -1 | 0;
   g = d + 1 | 0;
   if (!((a | 0) != (z | 0) & (e | 0) != 0)) {
    G = g;
    break b;
   } else {
    a = a - z | 0;
    d = g;
    A = A + z | 0;
   }
  }
  if (!E) {
   c[h >> 2] = 0;
   G = F;
  } else G = -1;
 } else G = v; while (0);
 if (k) c[b >> 2] = c[h >> 2];
 i = f;
 return G | 0;
}

function $g(b, d, e, f, g, h, i, j, k, l) {
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
 var m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0;
 m = c[f >> 2] | 0;
 n = (m | 0) == (e | 0);
 do if (n) {
  o = (a[l + 24 >> 0] | 0) == b << 24 >> 24;
  if (!o ? (a[l + 25 >> 0] | 0) != b << 24 >> 24 : 0) {
   p = 5;
   break;
  }
  c[f >> 2] = e + 1;
  a[e >> 0] = o ? 43 : 45;
  c[g >> 2] = 0;
  q = 0;
 } else p = 5; while (0);
 a : do if ((p | 0) == 5) {
  o = a[i >> 0] | 0;
  if (b << 24 >> 24 == h << 24 >> 24 ? (((o & 1) == 0 ? (o & 255) >>> 1 : c[i + 4 >> 2] | 0) | 0) != 0 : 0) {
   o = c[k >> 2] | 0;
   if ((o - j | 0) >= 160) {
    q = 0;
    break;
   }
   r = c[g >> 2] | 0;
   c[k >> 2] = o + 4;
   c[o >> 2] = r;
   c[g >> 2] = 0;
   q = 0;
   break;
  }
  r = l + 26 | 0;
  o = l;
  while (1) {
   if ((a[o >> 0] | 0) == b << 24 >> 24) {
    s = o;
    break;
   }
   o = o + 1 | 0;
   if ((o | 0) == (r | 0)) {
    s = r;
    break;
   }
  }
  r = s - l | 0;
  if ((r | 0) > 23) q = -1; else {
   switch (d | 0) {
   case 10:
   case 8:
    {
     if ((r | 0) >= (d | 0)) {
      q = -1;
      break a;
     }
     break;
    }
   case 16:
    {
     if ((r | 0) >= 22) {
      if (n) {
       q = -1;
       break a;
      }
      if ((m - e | 0) >= 3) {
       q = -1;
       break a;
      }
      if ((a[m + -1 >> 0] | 0) != 48) {
       q = -1;
       break a;
      }
      c[g >> 2] = 0;
      o = a[19968 + r >> 0] | 0;
      c[f >> 2] = m + 1;
      a[m >> 0] = o;
      q = 0;
      break a;
     }
     break;
    }
   default:
    {}
   }
   o = a[19968 + r >> 0] | 0;
   c[f >> 2] = m + 1;
   a[m >> 0] = o;
   c[g >> 2] = (c[g >> 2] | 0) + 1;
   q = 0;
  }
 } while (0);
 return q | 0;
}

function oh(b, d, e, f, g, h, i, j, k, l) {
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
 var m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0;
 m = c[f >> 2] | 0;
 n = (m | 0) == (e | 0);
 do if (n) {
  o = (c[l + 96 >> 2] | 0) == (b | 0);
  if (!o ? (c[l + 100 >> 2] | 0) != (b | 0) : 0) {
   p = 5;
   break;
  }
  c[f >> 2] = e + 1;
  a[e >> 0] = o ? 43 : 45;
  c[g >> 2] = 0;
  q = 0;
 } else p = 5; while (0);
 a : do if ((p | 0) == 5) {
  o = a[i >> 0] | 0;
  if ((b | 0) == (h | 0) ? (((o & 1) == 0 ? (o & 255) >>> 1 : c[i + 4 >> 2] | 0) | 0) != 0 : 0) {
   o = c[k >> 2] | 0;
   if ((o - j | 0) >= 160) {
    q = 0;
    break;
   }
   r = c[g >> 2] | 0;
   c[k >> 2] = o + 4;
   c[o >> 2] = r;
   c[g >> 2] = 0;
   q = 0;
   break;
  }
  r = l + 104 | 0;
  o = l;
  while (1) {
   if ((c[o >> 2] | 0) == (b | 0)) {
    s = o;
    break;
   }
   o = o + 4 | 0;
   if ((o | 0) == (r | 0)) {
    s = r;
    break;
   }
  }
  r = s - l | 0;
  o = r >> 2;
  if ((r | 0) > 92) q = -1; else {
   switch (d | 0) {
   case 10:
   case 8:
    {
     if ((o | 0) >= (d | 0)) {
      q = -1;
      break a;
     }
     break;
    }
   case 16:
    {
     if ((r | 0) >= 88) {
      if (n) {
       q = -1;
       break a;
      }
      if ((m - e | 0) >= 3) {
       q = -1;
       break a;
      }
      if ((a[m + -1 >> 0] | 0) != 48) {
       q = -1;
       break a;
      }
      c[g >> 2] = 0;
      r = a[19968 + o >> 0] | 0;
      c[f >> 2] = m + 1;
      a[m >> 0] = r;
      q = 0;
      break a;
     }
     break;
    }
   default:
    {}
   }
   r = a[19968 + o >> 0] | 0;
   c[f >> 2] = m + 1;
   a[m >> 0] = r;
   c[g >> 2] = (c[g >> 2] | 0) + 1;
   q = 0;
  }
 } while (0);
 return q | 0;
}

function Xd(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0;
 f = d & 255;
 g = (e | 0) != 0;
 a : do if (g & (b & 3 | 0) != 0) {
  h = d & 255;
  i = e;
  j = b;
  while (1) {
   if ((a[j >> 0] | 0) == h << 24 >> 24) {
    k = i;
    l = j;
    m = 6;
    break a;
   }
   n = j + 1 | 0;
   o = i + -1 | 0;
   p = (o | 0) != 0;
   if (p & (n & 3 | 0) != 0) {
    i = o;
    j = n;
   } else {
    q = o;
    r = p;
    s = n;
    m = 5;
    break;
   }
  }
 } else {
  q = e;
  r = g;
  s = b;
  m = 5;
 } while (0);
 if ((m | 0) == 5) if (r) {
  k = q;
  l = s;
  m = 6;
 } else {
  t = 0;
  u = s;
 }
 b : do if ((m | 0) == 6) {
  s = d & 255;
  if ((a[l >> 0] | 0) == s << 24 >> 24) {
   t = k;
   u = l;
  } else {
   q = $(f, 16843009) | 0;
   c : do if (k >>> 0 > 3) {
    r = k;
    b = l;
    while (1) {
     g = c[b >> 2] ^ q;
     if ((g & -2139062144 ^ -2139062144) & g + -16843009) {
      v = r;
      w = b;
      break;
     }
     g = b + 4 | 0;
     e = r + -4 | 0;
     if (e >>> 0 > 3) {
      r = e;
      b = g;
     } else {
      x = e;
      y = g;
      m = 11;
      break c;
     }
    }
    z = v;
    A = w;
   } else {
    x = k;
    y = l;
    m = 11;
   } while (0);
   if ((m | 0) == 11) if (!x) {
    t = 0;
    u = y;
    break;
   } else {
    z = x;
    A = y;
   }
   while (1) {
    if ((a[A >> 0] | 0) == s << 24 >> 24) {
     t = z;
     u = A;
     break b;
    }
    q = A + 1 | 0;
    z = z + -1 | 0;
    if (!z) {
     t = 0;
     u = q;
     break;
    } else A = q;
   }
  }
 } while (0);
 return ((t | 0) != 0 ? u : 0) | 0;
}

function Od(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0;
 e = i;
 i = i + 48 | 0;
 f = e + 16 | 0;
 g = e;
 h = e + 32 | 0;
 j = a + 28 | 0;
 k = c[j >> 2] | 0;
 c[h >> 2] = k;
 l = a + 20 | 0;
 m = (c[l >> 2] | 0) - k | 0;
 c[h + 4 >> 2] = m;
 c[h + 8 >> 2] = b;
 c[h + 12 >> 2] = d;
 b = a + 60 | 0;
 k = a + 44 | 0;
 n = h;
 h = 2;
 o = m + d | 0;
 while (1) {
  if (!(c[576] | 0)) {
   c[f >> 2] = c[b >> 2];
   c[f + 4 >> 2] = n;
   c[f + 8 >> 2] = h;
   p = Vc(kb(146, f | 0) | 0) | 0;
  } else {
   eb(96, a | 0);
   c[g >> 2] = c[b >> 2];
   c[g + 4 >> 2] = n;
   c[g + 8 >> 2] = h;
   m = Vc(kb(146, g | 0) | 0) | 0;
   Ya(0);
   p = m;
  }
  if ((o | 0) == (p | 0)) {
   q = 6;
   break;
  }
  if ((p | 0) < 0) {
   r = n;
   s = h;
   q = 8;
   break;
  }
  m = o - p | 0;
  t = c[n + 4 >> 2] | 0;
  if (p >>> 0 <= t >>> 0) if ((h | 0) == 2) {
   c[j >> 2] = (c[j >> 2] | 0) + p;
   u = t;
   v = p;
   w = n;
   x = 2;
  } else {
   u = t;
   v = p;
   w = n;
   x = h;
  } else {
   y = c[k >> 2] | 0;
   c[j >> 2] = y;
   c[l >> 2] = y;
   u = c[n + 12 >> 2] | 0;
   v = p - t | 0;
   w = n + 8 | 0;
   x = h + -1 | 0;
  }
  c[w >> 2] = (c[w >> 2] | 0) + v;
  c[w + 4 >> 2] = u - v;
  n = w;
  h = x;
  o = m;
 }
 if ((q | 0) == 6) {
  o = c[k >> 2] | 0;
  c[a + 16 >> 2] = o + (c[a + 48 >> 2] | 0);
  k = o;
  c[j >> 2] = k;
  c[l >> 2] = k;
  z = d;
 } else if ((q | 0) == 8) {
  c[a + 16 >> 2] = 0;
  c[j >> 2] = 0;
  c[l >> 2] = 0;
  c[a >> 2] = c[a >> 2] | 32;
  if ((s | 0) == 2) z = 0; else z = d - (c[r + 4 >> 2] | 0) | 0;
 }
 i = e;
 return z | 0;
}

function Ak(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0;
 c[a + 4 >> 2] = b + -1;
 c[a >> 2] = 9312;
 b = a + 8 | 0;
 bn(b, 28);
 Ze(a + 144 | 0, 21355, 1);
 d = c[b >> 2] | 0;
 b = a + 12 | 0;
 e = c[b >> 2] | 0;
 if ((e | 0) != (d | 0)) {
  f = e;
  while (1) {
   e = f + -4 | 0;
   if ((e | 0) == (d | 0)) {
    g = e;
    break;
   } else f = e;
  }
  c[b >> 2] = g;
 }
 c[321] = 0;
 c[320] = 8240;
 cn(a, 1280);
 c[323] = 0;
 c[322] = 8280;
 dn(a, 1288);
 bl(1296, 0, 0, 1);
 en(a, 1296);
 c[329] = 0;
 c[328] = 9600;
 fn(a, 1312);
 c[331] = 0;
 c[330] = 9668;
 gn(a, 1320);
 c[333] = 0;
 c[332] = 9420;
 c[334] = ah() | 0;
 hn(a, 1328);
 c[337] = 0;
 c[336] = 9716;
 jn(a, 1344);
 c[339] = 0;
 c[338] = 9764;
 kn(a, 1352);
 Ul(1360, 1);
 ln(a, 1360);
 Vl(1384, 1);
 mn(a, 1384);
 c[355] = 0;
 c[354] = 8320;
 nn(a, 1416);
 c[357] = 0;
 c[356] = 8392;
 on(a, 1424);
 c[359] = 0;
 c[358] = 8464;
 pn(a, 1432);
 c[361] = 0;
 c[360] = 8524;
 qn(a, 1440);
 c[363] = 0;
 c[362] = 8832;
 rn(a, 1448);
 c[365] = 0;
 c[364] = 8896;
 sn(a, 1456);
 c[367] = 0;
 c[366] = 8960;
 tn(a, 1464);
 c[369] = 0;
 c[368] = 9024;
 un(a, 1472);
 c[371] = 0;
 c[370] = 9088;
 vn(a, 1480);
 c[373] = 0;
 c[372] = 9124;
 wn(a, 1488);
 c[375] = 0;
 c[374] = 9160;
 xn(a, 1496);
 c[377] = 0;
 c[376] = 9196;
 yn(a, 1504);
 c[379] = 0;
 c[378] = 8584;
 c[380] = 8632;
 zn(a, 1512);
 c[383] = 0;
 c[382] = 8676;
 c[384] = 8724;
 An(a, 1528);
 c[387] = 0;
 c[386] = 9580;
 c[388] = ah() | 0;
 c[386] = 8768;
 Bn(a, 1544);
 c[391] = 0;
 c[390] = 9580;
 c[392] = ah() | 0;
 c[390] = 8800;
 Cn(a, 1560);
 c[395] = 0;
 c[394] = 9232;
 Dn(a, 1576);
 c[397] = 0;
 c[396] = 9272;
 En(a, 1584);
 return;
}

function yk(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0;
 d = i;
 i = i + 176 | 0;
 j = d + 168 | 0;
 k = d + 40 | 0;
 l = d + 32 | 0;
 m = d + 28 | 0;
 n = d + 16 | 0;
 o = d + 8 | 0;
 p = d;
 c[n >> 2] = 0;
 c[n + 4 >> 2] = 0;
 c[n + 8 >> 2] = 0;
 c[o + 4 >> 2] = 0;
 c[o >> 2] = 9812;
 q = a[h >> 0] | 0;
 r = (q & 1) == 0;
 s = h + 4 | 0;
 t = r ? s : c[h + 8 >> 2] | 0;
 h = r ? (q & 255) >>> 1 : c[s >> 2] | 0;
 s = t + (h << 2) | 0;
 q = k + 32 | 0;
 if ((h | 0) > 0) {
  h = t;
  do {
   c[m >> 2] = h;
   t = xb[c[(c[o >> 2] | 0) + 12 >> 2] & 15](o, j, h, s, m, k, q, l) | 0;
   if (k >>> 0 < (c[l >> 2] | 0) >>> 0) {
    r = k;
    do {
     ff(n, a[r >> 0] | 0);
     r = r + 1 | 0;
    } while (r >>> 0 < (c[l >> 2] | 0) >>> 0);
   }
   h = c[m >> 2] | 0;
  } while ((t | 0) != 2 & h >>> 0 < s >>> 0);
 }
 s = Xc((e | 0) == -1 ? -1 : e << 1, f, g, (a[n >> 0] & 1) == 0 ? n + 1 | 0 : c[n + 8 >> 2] | 0) | 0;
 c[b >> 2] = 0;
 c[b + 4 >> 2] = 0;
 c[b + 8 >> 2] = 0;
 c[p + 4 >> 2] = 0;
 c[p >> 2] = 9860;
 g = Zd(s) | 0;
 f = s + g | 0;
 e = f;
 h = k + 128 | 0;
 if ((g | 0) > 0) {
  g = s;
  do {
   c[m >> 2] = g;
   s = xb[c[(c[p >> 2] | 0) + 16 >> 2] & 15](p, j, g, (e - g | 0) > 32 ? g + 32 | 0 : f, m, k, h, l) | 0;
   if (k >>> 0 < (c[l >> 2] | 0) >>> 0) {
    q = k;
    do {
     pf(b, c[q >> 2] | 0);
     q = q + 4 | 0;
    } while (q >>> 0 < (c[l >> 2] | 0) >>> 0);
   }
   g = c[m >> 2] | 0;
  } while ((s | 0) != 2 & g >>> 0 < f >>> 0);
 }
 $e(n);
 i = d;
 return;
}

function ld(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0;
 g = i;
 i = i + 16 | 0;
 h = g;
 j = (f | 0) == 0 ? 2620 : f;
 f = c[j >> 2] | 0;
 a : do if (!d) if (!f) k = 0; else l = 15; else {
  m = (b | 0) == 0 ? h : b;
  if (!e) k = -2; else {
   if (!f) {
    n = a[d >> 0] | 0;
    o = n & 255;
    if (n << 24 >> 24 > -1) {
     c[m >> 2] = o;
     k = n << 24 >> 24 != 0 & 1;
     break;
    }
    n = o + -194 | 0;
    if (n >>> 0 > 50) {
     l = 15;
     break;
    }
    o = c[2348 + (n << 2) >> 2] | 0;
    n = e + -1 | 0;
    if (!n) p = o; else {
     q = n;
     r = o;
     s = d + 1 | 0;
     l = 9;
    }
   } else {
    q = e;
    r = f;
    s = d;
    l = 9;
   }
   b : do if ((l | 0) == 9) {
    o = a[s >> 0] | 0;
    n = (o & 255) >>> 3;
    if ((n + -16 | n + (r >> 26)) >>> 0 > 7) {
     l = 15;
     break a;
    } else {
     t = q;
     u = o;
     v = r;
     w = s;
    }
    while (1) {
     w = w + 1 | 0;
     v = (u & 255) + -128 | v << 6;
     t = t + -1 | 0;
     if ((v | 0) >= 0) {
      x = v;
      y = t;
      break;
     }
     if (!t) {
      p = v;
      break b;
     }
     u = a[w >> 0] | 0;
     if ((u & -64) << 24 >> 24 != -128) {
      l = 15;
      break a;
     }
    }
    c[j >> 2] = 0;
    c[m >> 2] = x;
    k = e - y | 0;
    break a;
   } while (0);
   c[j >> 2] = p;
   k = -2;
  }
 } while (0);
 if ((l | 0) == 15) {
  c[j >> 2] = 0;
  c[(Qc() | 0) >> 2] = 84;
  k = -1;
 }
 i = g;
 return k | 0;
}

function Uh(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = +f;
 var g = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0;
 a = i;
 i = i + 352 | 0;
 g = a + 304 | 0;
 j = a + 48 | 0;
 k = a + 32 | 0;
 l = a + 24 | 0;
 m = a + 8 | 0;
 n = a;
 o = a + 308 | 0;
 p = a + 72 | 0;
 q = a + 76 | 0;
 r = a + 68 | 0;
 s = a + 64 | 0;
 t = a + 60 | 0;
 u = a + 56 | 0;
 v = n;
 c[v >> 2] = 37;
 c[v + 4 >> 2] = 0;
 v = Gh(n + 1 | 0, 21369, c[d + 4 >> 2] | 0) | 0;
 c[p >> 2] = o;
 w = ah() | 0;
 if (v) {
  c[m >> 2] = c[d + 8 >> 2];
  h[m + 8 >> 3] = f;
  x = Tm(o, 30, w, n, m) | 0;
 } else {
  h[l >> 3] = f;
  x = Tm(o, 30, w, n, l) | 0;
 }
 if ((x | 0) > 29) {
  l = ah() | 0;
  if (v) {
   c[k >> 2] = c[d + 8 >> 2];
   h[k + 8 >> 3] = f;
   y = Um(p, l, n, k) | 0;
  } else {
   h[j >> 3] = f;
   y = Um(p, l, n, j) | 0;
  }
  j = c[p >> 2] | 0;
  if (!j) Cc(); else {
   z = j;
   A = j;
   B = y;
  }
 } else {
  z = c[p >> 2] | 0;
  A = 0;
  B = x;
 }
 x = z + B | 0;
 p = Ah(z, x, d) | 0;
 if ((z | 0) != (o | 0)) {
  y = oe(B << 3) | 0;
  if (!y) Cc(); else {
   C = z;
   D = y;
   E = y;
  }
 } else {
  C = o;
  D = 0;
  E = q;
 }
 q = xf(d) | 0;
 c[t >> 2] = q;
 Th(C, p, x, E, r, s, t);
 ko(q) | 0;
 c[u >> 2] = c[b >> 2];
 q = c[r >> 2] | 0;
 r = c[s >> 2] | 0;
 c[g >> 2] = c[u >> 2];
 u = Vm(g, E, q, r, d, e) | 0;
 c[b >> 2] = u;
 if (D) pe(D);
 pe(A);
 i = a;
 return u | 0;
}

function Ih(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = +f;
 var g = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0;
 a = i;
 i = i + 176 | 0;
 g = a + 76 | 0;
 j = a + 48 | 0;
 k = a + 32 | 0;
 l = a + 24 | 0;
 m = a + 8 | 0;
 n = a;
 o = a + 80 | 0;
 p = a + 72 | 0;
 q = a + 110 | 0;
 r = a + 68 | 0;
 s = a + 64 | 0;
 t = a + 60 | 0;
 u = a + 56 | 0;
 v = n;
 c[v >> 2] = 37;
 c[v + 4 >> 2] = 0;
 v = Gh(n + 1 | 0, 21369, c[d + 4 >> 2] | 0) | 0;
 c[p >> 2] = o;
 w = ah() | 0;
 if (v) {
  c[m >> 2] = c[d + 8 >> 2];
  h[m + 8 >> 3] = f;
  x = Tm(o, 30, w, n, m) | 0;
 } else {
  h[l >> 3] = f;
  x = Tm(o, 30, w, n, l) | 0;
 }
 if ((x | 0) > 29) {
  l = ah() | 0;
  if (v) {
   c[k >> 2] = c[d + 8 >> 2];
   h[k + 8 >> 3] = f;
   y = Um(p, l, n, k) | 0;
  } else {
   h[j >> 3] = f;
   y = Um(p, l, n, j) | 0;
  }
  j = c[p >> 2] | 0;
  if (!j) Cc(); else {
   z = j;
   A = j;
   B = y;
  }
 } else {
  z = c[p >> 2] | 0;
  A = 0;
  B = x;
 }
 x = z + B | 0;
 p = Ah(z, x, d) | 0;
 if ((z | 0) != (o | 0)) {
  y = oe(B << 1) | 0;
  if (!y) Cc(); else {
   C = z;
   D = y;
   E = y;
  }
 } else {
  C = o;
  D = 0;
  E = q;
 }
 q = xf(d) | 0;
 c[t >> 2] = q;
 Hh(C, p, x, E, r, s, t);
 ko(q) | 0;
 c[u >> 2] = c[b >> 2];
 b = c[r >> 2] | 0;
 r = c[s >> 2] | 0;
 c[g >> 2] = c[u >> 2];
 u = Qb(g, E, b, r, d, e) | 0;
 pe(D);
 pe(A);
 i = a;
 return u | 0;
}

function Zj(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0;
 g = a[b >> 0] | 0;
 h = b + 4 | 0;
 i = c[h >> 2] | 0;
 a : do if (((g & 1) == 0 ? (g & 255) >>> 1 : i) | 0) {
  if ((d | 0) == (e | 0)) {
   j = g;
   k = i;
  } else {
   l = e + -4 | 0;
   if (l >>> 0 > d >>> 0) {
    m = d;
    n = l;
    do {
     l = c[m >> 2] | 0;
     c[m >> 2] = c[n >> 2];
     c[n >> 2] = l;
     m = m + 4 | 0;
     n = n + -4 | 0;
    } while (m >>> 0 < n >>> 0);
   }
   j = a[b >> 0] | 0;
   k = c[h >> 2] | 0;
  }
  n = (j & 1) == 0;
  m = n ? b + 1 | 0 : c[b + 8 >> 2] | 0;
  l = e + -4 | 0;
  o = m + (n ? (j & 255) >>> 1 : k) | 0;
  n = a[m >> 0] | 0;
  p = n << 24 >> 24 < 1 | n << 24 >> 24 == 127;
  b : do if (l >>> 0 > d >>> 0) {
   q = n;
   r = m;
   s = d;
   t = p;
   while (1) {
    if (!t ? (q << 24 >> 24 | 0) != (c[s >> 2] | 0) : 0) break;
    r = (o - r | 0) > 1 ? r + 1 | 0 : r;
    s = s + 4 | 0;
    u = a[r >> 0] | 0;
    v = u << 24 >> 24 < 1 | u << 24 >> 24 == 127;
    if (s >>> 0 >= l >>> 0) {
     w = u;
     x = v;
     break b;
    } else {
     q = u;
     t = v;
    }
   }
   c[f >> 2] = 4;
   break a;
  } else {
   w = n;
   x = p;
  } while (0);
  if (!x ? ((c[l >> 2] | 0) + -1 | 0) >>> 0 >= w << 24 >> 24 >>> 0 : 0) c[f >> 2] = 4;
 } while (0);
 return;
}

function Sh(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = +f;
 var g = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0;
 a = i;
 i = i + 336 | 0;
 g = a + 296 | 0;
 j = a + 32 | 0;
 k = a + 24 | 0;
 l = a + 8 | 0;
 m = a;
 n = a + 300 | 0;
 o = a + 64 | 0;
 p = a + 68 | 0;
 q = a + 60 | 0;
 r = a + 56 | 0;
 s = a + 52 | 0;
 t = a + 48 | 0;
 u = m;
 c[u >> 2] = 37;
 c[u + 4 >> 2] = 0;
 u = Gh(m + 1 | 0, 21368, c[d + 4 >> 2] | 0) | 0;
 c[o >> 2] = n;
 v = ah() | 0;
 if (u) {
  c[l >> 2] = c[d + 8 >> 2];
  h[l + 8 >> 3] = f;
  w = Tm(n, 30, v, m, l) | 0;
 } else {
  h[k >> 3] = f;
  w = Tm(n, 30, v, m, k) | 0;
 }
 if ((w | 0) > 29) {
  k = ah() | 0;
  c[j >> 2] = c[d + 8 >> 2];
  h[j + 8 >> 3] = f;
  v = Um(o, k, m, j) | 0;
  j = c[o >> 2] | 0;
  if (!j) Cc(); else {
   x = j;
   y = j;
   z = v;
  }
 } else {
  x = c[o >> 2] | 0;
  y = 0;
  z = w;
 }
 w = x + z | 0;
 o = Ah(x, w, d) | 0;
 if ((x | 0) != (n | 0)) {
  v = oe(z << 3) | 0;
  if (!v) Cc(); else {
   A = x;
   B = v;
   C = v;
  }
 } else {
  A = n;
  B = 0;
  C = p;
 }
 p = xf(d) | 0;
 c[s >> 2] = p;
 Th(A, o, w, C, q, r, s);
 ko(p) | 0;
 c[t >> 2] = c[b >> 2];
 p = c[q >> 2] | 0;
 q = c[r >> 2] | 0;
 c[g >> 2] = c[t >> 2];
 t = Vm(g, C, p, q, d, e) | 0;
 c[b >> 2] = t;
 if (B) pe(B);
 pe(y);
 i = a;
 return t | 0;
}

function xh(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0;
 h = i;
 i = i + 32 | 0;
 j = h + 20 | 0;
 k = h + 16 | 0;
 l = h + 12 | 0;
 m = h;
 if (!(c[e + 4 >> 2] & 1)) {
  n = c[(c[b >> 2] | 0) + 24 >> 2] | 0;
  c[k >> 2] = c[d >> 2];
  c[j >> 2] = c[k >> 2];
  o = Bb[n & 31](b, j, e, f, g & 1) | 0;
 } else {
  f = xf(e) | 0;
  c[l >> 2] = f;
  e = Mk(l, 9476) | 0;
  ko(f) | 0;
  f = c[e >> 2] | 0;
  if (g) rb[c[f + 24 >> 2] & 63](m, e); else rb[c[f + 28 >> 2] & 63](m, e);
  e = a[m >> 0] | 0;
  f = (e & 1) == 0;
  g = m + 1 | 0;
  l = m + 8 | 0;
  j = f ? g : m + 1 | 0;
  b = f ? g : c[m + 8 >> 2] | 0;
  g = m + 4 | 0;
  f = (e & 1) == 0;
  if ((b | 0) != ((f ? j : c[l >> 2] | 0) + (f ? (e & 255) >>> 1 : c[g >> 2] | 0) | 0)) {
   e = b;
   do {
    b = a[e >> 0] | 0;
    f = c[d >> 2] | 0;
    do if (f) {
     n = f + 24 | 0;
     k = c[n >> 2] | 0;
     if ((k | 0) != (c[f + 28 >> 2] | 0)) {
      c[n >> 2] = k + 1;
      a[k >> 0] = b;
      break;
     }
     if ((Ab[c[(c[f >> 2] | 0) + 52 >> 2] & 15](f, b & 255) | 0) == -1) c[d >> 2] = 0;
    } while (0);
    e = e + 1 | 0;
    b = a[m >> 0] | 0;
    f = (b & 1) == 0;
   } while ((e | 0) != ((f ? j : c[l >> 2] | 0) + (f ? (b & 255) >>> 1 : c[g >> 2] | 0) | 0));
  }
  g = c[d >> 2] | 0;
  $e(m);
  o = g;
 }
 i = h;
 return o | 0;
}

function Mh(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 h = i;
 i = i + 32 | 0;
 j = h + 20 | 0;
 k = h + 16 | 0;
 l = h + 12 | 0;
 m = h;
 if (!(c[e + 4 >> 2] & 1)) {
  n = c[(c[b >> 2] | 0) + 24 >> 2] | 0;
  c[k >> 2] = c[d >> 2];
  c[j >> 2] = c[k >> 2];
  o = Bb[n & 31](b, j, e, f, g & 1) | 0;
 } else {
  f = xf(e) | 0;
  c[l >> 2] = f;
  e = Mk(l, 9484) | 0;
  ko(f) | 0;
  f = c[e >> 2] | 0;
  if (g) rb[c[f + 24 >> 2] & 63](m, e); else rb[c[f + 28 >> 2] & 63](m, e);
  e = a[m >> 0] | 0;
  f = (e & 1) == 0;
  g = m + 4 | 0;
  l = m + 8 | 0;
  j = f ? g : m + 4 | 0;
  b = f ? g : c[m + 8 >> 2] | 0;
  g = (e & 1) == 0;
  if ((b | 0) != ((g ? j : c[l >> 2] | 0) + ((g ? (e & 255) >>> 1 : c[j >> 2] | 0) << 2) | 0)) {
   e = b;
   do {
    b = c[e >> 2] | 0;
    g = c[d >> 2] | 0;
    if (g) {
     f = g + 24 | 0;
     n = c[f >> 2] | 0;
     if ((n | 0) == (c[g + 28 >> 2] | 0)) p = Ab[c[(c[g >> 2] | 0) + 52 >> 2] & 15](g, b) | 0; else {
      c[f >> 2] = n + 4;
      c[n >> 2] = b;
      p = b;
     }
     if ((p | 0) == -1) c[d >> 2] = 0;
    }
    e = e + 4 | 0;
    b = a[m >> 0] | 0;
    n = (b & 1) == 0;
   } while ((e | 0) != ((n ? j : c[l >> 2] | 0) + ((n ? (b & 255) >>> 1 : c[j >> 2] | 0) << 2) | 0));
  }
  j = c[d >> 2] | 0;
  lf(m);
  o = j;
 }
 i = h;
 return o | 0;
}

function Fh(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = +f;
 var g = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0;
 a = i;
 i = i + 160 | 0;
 g = a + 68 | 0;
 j = a + 32 | 0;
 k = a + 24 | 0;
 l = a + 8 | 0;
 m = a;
 n = a + 72 | 0;
 o = a + 64 | 0;
 p = a + 102 | 0;
 q = a + 60 | 0;
 r = a + 56 | 0;
 s = a + 52 | 0;
 t = a + 48 | 0;
 u = m;
 c[u >> 2] = 37;
 c[u + 4 >> 2] = 0;
 u = Gh(m + 1 | 0, 21368, c[d + 4 >> 2] | 0) | 0;
 c[o >> 2] = n;
 v = ah() | 0;
 if (u) {
  c[l >> 2] = c[d + 8 >> 2];
  h[l + 8 >> 3] = f;
  w = Tm(n, 30, v, m, l) | 0;
 } else {
  h[k >> 3] = f;
  w = Tm(n, 30, v, m, k) | 0;
 }
 if ((w | 0) > 29) {
  k = ah() | 0;
  c[j >> 2] = c[d + 8 >> 2];
  h[j + 8 >> 3] = f;
  v = Um(o, k, m, j) | 0;
  j = c[o >> 2] | 0;
  if (!j) Cc(); else {
   x = j;
   y = j;
   z = v;
  }
 } else {
  x = c[o >> 2] | 0;
  y = 0;
  z = w;
 }
 w = x + z | 0;
 o = Ah(x, w, d) | 0;
 if ((x | 0) != (n | 0)) {
  v = oe(z << 1) | 0;
  if (!v) Cc(); else {
   A = x;
   B = v;
   C = v;
  }
 } else {
  A = n;
  B = 0;
  C = p;
 }
 p = xf(d) | 0;
 c[s >> 2] = p;
 Hh(A, o, w, C, q, r, s);
 ko(p) | 0;
 c[t >> 2] = c[b >> 2];
 b = c[q >> 2] | 0;
 q = c[r >> 2] | 0;
 c[g >> 2] = c[t >> 2];
 t = Qb(g, C, b, q, d, e) | 0;
 pe(B);
 pe(y);
 i = a;
 return t | 0;
}

function dh(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0;
 j = i;
 i = i + 64 | 0;
 k = j + 56 | 0;
 l = j + 48 | 0;
 m = j + 52 | 0;
 n = j + 44 | 0;
 o = j + 40 | 0;
 p = j + 36 | 0;
 q = j + 32 | 0;
 r = j + 8 | 0;
 s = j;
 a : do if (!(c[f + 4 >> 2] & 1)) {
  c[m >> 2] = -1;
  t = c[(c[b >> 2] | 0) + 16 >> 2] | 0;
  c[n >> 2] = c[d >> 2];
  c[o >> 2] = c[e >> 2];
  c[l >> 2] = c[n >> 2];
  c[k >> 2] = c[o >> 2];
  u = sb[t & 63](b, l, k, f, g, m) | 0;
  c[d >> 2] = u;
  switch (c[m >> 2] | 0) {
  case 0:
   {
    a[h >> 0] = 0;
    v = u;
    break a;
    break;
   }
  case 1:
   {
    a[h >> 0] = 1;
    v = u;
    break a;
    break;
   }
  default:
   {
    a[h >> 0] = 1;
    c[g >> 2] = 4;
    v = u;
    break a;
   }
  }
 } else {
  u = xf(f) | 0;
  c[p >> 2] = u;
  t = Mk(p, 9328) | 0;
  ko(u) | 0;
  u = xf(f) | 0;
  c[q >> 2] = u;
  w = Mk(q, 9484) | 0;
  ko(u) | 0;
  rb[c[(c[w >> 2] | 0) + 24 >> 2] & 63](r, w);
  rb[c[(c[w >> 2] | 0) + 28 >> 2] & 63](r + 12 | 0, w);
  c[s >> 2] = c[e >> 2];
  c[k >> 2] = c[s >> 2];
  a[h >> 0] = (Jm(d, k, r, r + 24 | 0, t, g, 1) | 0) == (r | 0) & 1;
  t = c[d >> 2] | 0;
  lf(r + 12 | 0);
  lf(r);
  v = t;
 } while (0);
 i = j;
 return v | 0;
}

function Qg(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0;
 j = i;
 i = i + 64 | 0;
 k = j + 56 | 0;
 l = j + 48 | 0;
 m = j + 52 | 0;
 n = j + 44 | 0;
 o = j + 40 | 0;
 p = j + 36 | 0;
 q = j + 32 | 0;
 r = j + 8 | 0;
 s = j;
 a : do if (!(c[f + 4 >> 2] & 1)) {
  c[m >> 2] = -1;
  t = c[(c[b >> 2] | 0) + 16 >> 2] | 0;
  c[n >> 2] = c[d >> 2];
  c[o >> 2] = c[e >> 2];
  c[l >> 2] = c[n >> 2];
  c[k >> 2] = c[o >> 2];
  u = sb[t & 63](b, l, k, f, g, m) | 0;
  c[d >> 2] = u;
  switch (c[m >> 2] | 0) {
  case 0:
   {
    a[h >> 0] = 0;
    v = u;
    break a;
    break;
   }
  case 1:
   {
    a[h >> 0] = 1;
    v = u;
    break a;
    break;
   }
  default:
   {
    a[h >> 0] = 1;
    c[g >> 2] = 4;
    v = u;
    break a;
   }
  }
 } else {
  u = xf(f) | 0;
  c[p >> 2] = u;
  t = Mk(p, 9336) | 0;
  ko(u) | 0;
  u = xf(f) | 0;
  c[q >> 2] = u;
  w = Mk(q, 9476) | 0;
  ko(u) | 0;
  rb[c[(c[w >> 2] | 0) + 24 >> 2] & 63](r, w);
  rb[c[(c[w >> 2] | 0) + 28 >> 2] & 63](r + 12 | 0, w);
  c[s >> 2] = c[e >> 2];
  c[k >> 2] = c[s >> 2];
  a[h >> 0] = (ym(d, k, r, r + 24 | 0, t, g, 1) | 0) == (r | 0) & 1;
  t = c[d >> 2] | 0;
  $e(r + 12 | 0);
  $e(r);
  v = t;
 } while (0);
 i = j;
 return v | 0;
}

function vc(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 a : do if ((b | 0) == (c[d + 8 >> 2] | 0)) {
  if ((c[d + 4 >> 2] | 0) == (e | 0) ? (h = d + 28 | 0, (c[h >> 2] | 0) != 1) : 0) c[h >> 2] = f;
 } else {
  if ((b | 0) != (c[d >> 2] | 0)) {
   h = c[b + 8 >> 2] | 0;
   ob[c[(c[h >> 2] | 0) + 24 >> 2] & 3](h, d, e, f, g);
   break;
  }
  if ((c[d + 16 >> 2] | 0) != (e | 0) ? (h = d + 20 | 0, (c[h >> 2] | 0) != (e | 0)) : 0) {
   c[d + 32 >> 2] = f;
   i = d + 44 | 0;
   if ((c[i >> 2] | 0) == 4) break;
   j = d + 52 | 0;
   a[j >> 0] = 0;
   k = d + 53 | 0;
   a[k >> 0] = 0;
   l = c[b + 8 >> 2] | 0;
   zb[c[(c[l >> 2] | 0) + 20 >> 2] & 7](l, d, e, e, 1, g);
   if (a[k >> 0] | 0) {
    if (!(a[j >> 0] | 0)) {
     m = 1;
     n = 13;
    }
   } else {
    m = 0;
    n = 13;
   }
   do if ((n | 0) == 13) {
    c[h >> 2] = e;
    j = d + 40 | 0;
    c[j >> 2] = (c[j >> 2] | 0) + 1;
    if ((c[d + 36 >> 2] | 0) == 1 ? (c[d + 24 >> 2] | 0) == 2 : 0) {
     a[d + 54 >> 0] = 1;
     if (m) break;
    } else n = 16;
    if ((n | 0) == 16 ? m : 0) break;
    c[i >> 2] = 4;
    break a;
   } while (0);
   c[i >> 2] = 3;
   break;
  }
  if ((f | 0) == 1) c[d + 32 >> 2] = 1;
 } while (0);
 return;
}

function qc(d, e, f, g) {
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0;
 h = i;
 i = i + 64 | 0;
 j = h;
 k = c[d >> 2] | 0;
 l = d + (c[k + -8 >> 2] | 0) | 0;
 m = c[k + -4 >> 2] | 0;
 c[j >> 2] = f;
 c[j + 4 >> 2] = d;
 c[j + 8 >> 2] = e;
 c[j + 12 >> 2] = g;
 g = j + 16 | 0;
 e = j + 20 | 0;
 d = j + 24 | 0;
 k = j + 28 | 0;
 n = j + 32 | 0;
 o = j + 40 | 0;
 p = (m | 0) == (f | 0);
 q = g;
 r = q + 36 | 0;
 do {
  c[q >> 2] = 0;
  q = q + 4 | 0;
 } while ((q | 0) < (r | 0));
 b[g + 36 >> 1] = 0;
 a[g + 38 >> 0] = 0;
 a : do if (p) {
  c[j + 48 >> 2] = 1;
  zb[c[(c[f >> 2] | 0) + 20 >> 2] & 7](f, j, l, l, 1, 0);
  s = (c[d >> 2] | 0) == 1 ? l : 0;
 } else {
  ob[c[(c[m >> 2] | 0) + 24 >> 2] & 3](m, j, l, 1, 0);
  switch (c[j + 36 >> 2] | 0) {
  case 0:
   {
    s = (c[o >> 2] | 0) == 1 & (c[k >> 2] | 0) == 1 & (c[n >> 2] | 0) == 1 ? c[e >> 2] | 0 : 0;
    break a;
    break;
   }
  case 1:
   break;
  default:
   {
    s = 0;
    break a;
   }
  }
  if ((c[d >> 2] | 0) != 1 ? !((c[o >> 2] | 0) == 0 & (c[k >> 2] | 0) == 1 & (c[n >> 2] | 0) == 1) : 0) {
   s = 0;
   break;
  }
  s = c[g >> 2] | 0;
 } while (0);
 i = h;
 return s | 0;
}

function Ob(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0;
 b = i;
 i = i + 16 | 0;
 a = b;
 d = Ra() | 0;
 e = Pb(6728, 13720, 22) | 0;
 c[a >> 2] = xf(e + (c[(c[e >> 2] | 0) + -12 >> 2] | 0) | 0) | 0;
 f = Mk(a, 9336) | 0;
 g = Ab[c[(c[f >> 2] | 0) + 28 >> 2] & 15](f, 10) | 0;
 Kk(a);
 ug(e, g) | 0;
 fg(e) | 0;
 Nb(1e6);
 e = Ra() | 0;
 g = Pb(tg(Pb(rg(Pb(6728, 13743, 24) | 0, 1e6) | 0, 13768, 6) | 0, +(e - d | 0) / 1.0e6 * 1.0e3) | 0, 13775, 4) | 0;
 c[a >> 2] = xf(g + (c[(c[g >> 2] | 0) + -12 >> 2] | 0) | 0) | 0;
 d = Mk(a, 9336) | 0;
 f = Ab[c[(c[d >> 2] | 0) + 28 >> 2] & 15](d, 10) | 0;
 Kk(a);
 ug(g, f) | 0;
 fg(g) | 0;
 g = Mb(40) | 0;
 f = Ra() | 0;
 d = Pb(tg(Pb(rg(Pb(rg(Pb(6728, 13780, 13) | 0, 40) | 0, 13794, 5) | 0, g) | 0, 13800, 11) | 0, +(f - e | 0) / 1.0e6 * 1.0e3) | 0, 13775, 4) | 0;
 c[a >> 2] = xf(d + (c[(c[d >> 2] | 0) + -12 >> 2] | 0) | 0) | 0;
 e = Mk(a, 9336) | 0;
 f = Ab[c[(c[e >> 2] | 0) + 28 >> 2] & 15](e, 10) | 0;
 Kk(a);
 ug(d, f) | 0;
 fg(d) | 0;
 d = Pb(6728, 13812, 25) | 0;
 c[a >> 2] = xf(d + (c[(c[d >> 2] | 0) + -12 >> 2] | 0) | 0) | 0;
 f = Mk(a, 9336) | 0;
 e = Ab[c[(c[f >> 2] | 0) + 28 >> 2] & 15](f, 10) | 0;
 Kk(a);
 ug(d, e) | 0;
 fg(d) | 0;
 i = b;
 return 0;
}

function Re(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0;
 e = i;
 i = i + 32 | 0;
 f = e + 16 | 0;
 g = e + 8 | 0;
 h = e + 4 | 0;
 j = e;
 k = (d | 0) == -1;
 a : do if (!k) {
  a[g >> 0] = d;
  if (a[b + 44 >> 0] | 0) if ((yd(g, 1, 1, c[b + 32 >> 2] | 0) | 0) == 1) {
   l = 11;
   break;
  } else {
   m = -1;
   break;
  }
  c[h >> 2] = f;
  n = g + 1 | 0;
  o = b + 36 | 0;
  p = b + 40 | 0;
  q = f + 8 | 0;
  r = f;
  s = b + 32 | 0;
  t = g;
  while (1) {
   u = c[o >> 2] | 0;
   v = xb[c[(c[u >> 2] | 0) + 12 >> 2] & 15](u, c[p >> 2] | 0, t, n, j, f, q, h) | 0;
   if ((c[j >> 2] | 0) == (t | 0)) {
    m = -1;
    break a;
   }
   if ((v | 0) == 3) {
    w = t;
    break;
   }
   u = (v | 0) == 1;
   if (v >>> 0 >= 2) {
    m = -1;
    break a;
   }
   v = (c[h >> 2] | 0) - r | 0;
   if ((yd(f, 1, v, c[s >> 2] | 0) | 0) != (v | 0)) {
    m = -1;
    break a;
   }
   if (u) t = u ? c[j >> 2] | 0 : t; else {
    l = 11;
    break a;
   }
  }
  if ((yd(w, 1, 1, c[s >> 2] | 0) | 0) != 1) m = -1; else l = 11;
 } else l = 11; while (0);
 if ((l | 0) == 11) m = k ? 0 : d;
 i = e;
 return m | 0;
}

function Ge(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0;
 e = i;
 i = i + 32 | 0;
 f = e + 16 | 0;
 g = e + 8 | 0;
 h = e + 4 | 0;
 j = e;
 k = (d | 0) == -1;
 a : do if (!k) {
  c[g >> 2] = d;
  if (a[b + 44 >> 0] | 0) if ((yd(g, 4, 1, c[b + 32 >> 2] | 0) | 0) == 1) {
   l = 11;
   break;
  } else {
   m = -1;
   break;
  }
  c[h >> 2] = f;
  n = g + 4 | 0;
  o = b + 36 | 0;
  p = b + 40 | 0;
  q = f + 8 | 0;
  r = f;
  s = b + 32 | 0;
  t = g;
  while (1) {
   u = c[o >> 2] | 0;
   v = xb[c[(c[u >> 2] | 0) + 12 >> 2] & 15](u, c[p >> 2] | 0, t, n, j, f, q, h) | 0;
   if ((c[j >> 2] | 0) == (t | 0)) {
    m = -1;
    break a;
   }
   if ((v | 0) == 3) {
    w = t;
    break;
   }
   u = (v | 0) == 1;
   if (v >>> 0 >= 2) {
    m = -1;
    break a;
   }
   v = (c[h >> 2] | 0) - r | 0;
   if ((yd(f, 1, v, c[s >> 2] | 0) | 0) != (v | 0)) {
    m = -1;
    break a;
   }
   if (u) t = u ? c[j >> 2] | 0 : t; else {
    l = 11;
    break a;
   }
  }
  if ((yd(w, 1, 1, c[s >> 2] | 0) | 0) != 1) m = -1; else l = 11;
 } else l = 11; while (0);
 if ((l | 0) == 11) m = k ? 0 : d;
 i = e;
 return m | 0;
}

function Ed(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0;
 f = i;
 i = i + 224 | 0;
 g = f + 120 | 0;
 h = f + 80 | 0;
 j = f;
 k = f + 136 | 0;
 l = h;
 m = l + 40 | 0;
 do {
  c[l >> 2] = 0;
  l = l + 4 | 0;
 } while ((l | 0) < (m | 0));
 c[g >> 2] = c[e >> 2];
 if ((ee(0, d, g, j, h) | 0) < 0) n = -1; else {
  if ((c[b + 76 >> 2] | 0) > -1) o = Id(b) | 0; else o = 0;
  e = c[b >> 2] | 0;
  l = e & 32;
  if ((a[b + 74 >> 0] | 0) < 1) c[b >> 2] = e & -33;
  e = b + 48 | 0;
  if (!(c[e >> 2] | 0)) {
   m = b + 44 | 0;
   p = c[m >> 2] | 0;
   c[m >> 2] = k;
   q = b + 28 | 0;
   c[q >> 2] = k;
   r = b + 20 | 0;
   c[r >> 2] = k;
   c[e >> 2] = 80;
   s = b + 16 | 0;
   c[s >> 2] = k + 80;
   k = ee(b, d, g, j, h) | 0;
   if (!p) t = k; else {
    nb[c[b + 36 >> 2] & 31](b, 0, 0) | 0;
    u = (c[r >> 2] | 0) == 0 ? -1 : k;
    c[m >> 2] = p;
    c[e >> 2] = 0;
    c[s >> 2] = 0;
    c[q >> 2] = 0;
    c[r >> 2] = 0;
    t = u;
   }
  } else t = ee(b, d, g, j, h) | 0;
  h = c[b >> 2] | 0;
  c[b >> 2] = h | l;
  if (o) Jd(b);
  n = (h & 32 | 0) == 0 ? t : -1;
 }
 i = f;
 return n | 0;
}

function Gh(b, c, d) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 if (!(d & 2048)) e = b; else {
  a[b >> 0] = 43;
  e = b + 1 | 0;
 }
 if (!(d & 1024)) f = e; else {
  a[e >> 0] = 35;
  f = e + 1 | 0;
 }
 e = d & 260;
 b = d >>> 14;
 d = (e | 0) == 260;
 if (d) {
  g = f;
  h = 0;
 } else {
  a[f >> 0] = 46;
  a[f + 1 >> 0] = 42;
  g = f + 2 | 0;
  h = 1;
 }
 f = a[c >> 0] | 0;
 if (!(f << 24 >> 24)) i = g; else {
  j = c;
  c = g;
  g = f;
  while (1) {
   j = j + 1 | 0;
   f = c + 1 | 0;
   a[c >> 0] = g;
   g = a[j >> 0] | 0;
   if (!(g << 24 >> 24)) {
    i = f;
    break;
   } else c = f;
  }
 }
 a : do switch (e | 0) {
 case 4:
  {
   if (!(b & 1)) {
    a[i >> 0] = 102;
    break a;
   } else {
    a[i >> 0] = 70;
    break a;
   }
   break;
  }
 case 256:
  {
   if (!(b & 1)) {
    a[i >> 0] = 101;
    break a;
   } else {
    a[i >> 0] = 69;
    break a;
   }
   break;
  }
 default:
  {
   c = (b & 1 | 0) != 0;
   if (d) if (c) {
    a[i >> 0] = 65;
    break a;
   } else {
    a[i >> 0] = 97;
    break a;
   } else if (c) {
    a[i >> 0] = 71;
    break a;
   } else {
    a[i >> 0] = 103;
    break a;
   }
  }
 } while (0);
 return h | 0;
}

function pd(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 g = i;
 i = i + 16 | 0;
 h = g;
 a : do if (!e) j = 0; else {
  do if (f) {
   k = (b | 0) == 0 ? h : b;
   l = a[e >> 0] | 0;
   m = l & 255;
   if (l << 24 >> 24 > -1) {
    c[k >> 2] = m;
    j = l << 24 >> 24 != 0 & 1;
    break a;
   }
   l = m + -194 | 0;
   if (l >>> 0 <= 50) {
    m = e + 1 | 0;
    n = c[2348 + (l << 2) >> 2] | 0;
    if (f >>> 0 < 4 ? (n & -2147483648 >>> ((f * 6 | 0) + -6 | 0) | 0) != 0 : 0) break;
    l = d[m >> 0] | 0;
    m = l >>> 3;
    if ((m + -16 | m + (n >> 26)) >>> 0 <= 7) {
     m = l + -128 | n << 6;
     if ((m | 0) >= 0) {
      c[k >> 2] = m;
      j = 2;
      break a;
     }
     n = d[e + 2 >> 0] | 0;
     if ((n & 192 | 0) == 128) {
      l = n + -128 | m << 6;
      if ((l | 0) >= 0) {
       c[k >> 2] = l;
       j = 3;
       break a;
      }
      m = d[e + 3 >> 0] | 0;
      if ((m & 192 | 0) == 128) {
       c[k >> 2] = m + -128 | l << 6;
       j = 4;
       break a;
      }
     }
    }
   }
  } while (0);
  c[(Qc() | 0) >> 2] = 84;
  j = -1;
 } while (0);
 i = g;
 return j | 0;
}

function We(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 e = i;
 i = i + 32 | 0;
 f = e + 16 | 0;
 g = e + 4 | 0;
 h = e + 8 | 0;
 j = e;
 k = b + 52 | 0;
 l = (a[k >> 0] | 0) != 0;
 a : do if ((d | 0) == -1) if (l) m = -1; else {
  n = c[b + 48 >> 2] | 0;
  a[k >> 0] = (n | 0) != -1 & 1;
  m = n;
 } else {
  n = b + 48 | 0;
  b : do if (l) {
   a[h >> 0] = c[n >> 2];
   o = c[b + 36 >> 2] | 0;
   switch (xb[c[(c[o >> 2] | 0) + 12 >> 2] & 15](o, c[b + 40 >> 2] | 0, h, h + 1 | 0, j, f, f + 8 | 0, g) | 0) {
   case 1:
   case 2:
    {
     m = -1;
     break a;
     break;
    }
   case 3:
    {
     a[f >> 0] = c[n >> 2];
     c[g >> 2] = f + 1;
     break;
    }
   default:
    {}
   }
   o = b + 32 | 0;
   while (1) {
    p = c[g >> 2] | 0;
    if (p >>> 0 <= f >>> 0) break b;
    q = p + -1 | 0;
    c[g >> 2] = q;
    if ((Cd(a[q >> 0] | 0, c[o >> 2] | 0) | 0) == -1) {
     m = -1;
     break a;
    }
   }
  } while (0);
  c[n >> 2] = d;
  a[k >> 0] = 1;
  m = d;
 } while (0);
 i = e;
 return m | 0;
}

function Le(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 e = i;
 i = i + 32 | 0;
 f = e + 16 | 0;
 g = e + 8 | 0;
 h = e + 4 | 0;
 j = e;
 k = b + 52 | 0;
 l = (a[k >> 0] | 0) != 0;
 a : do if ((d | 0) == -1) if (l) m = -1; else {
  n = c[b + 48 >> 2] | 0;
  a[k >> 0] = (n | 0) != -1 & 1;
  m = n;
 } else {
  n = b + 48 | 0;
  b : do if (l) {
   c[h >> 2] = c[n >> 2];
   o = c[b + 36 >> 2] | 0;
   switch (xb[c[(c[o >> 2] | 0) + 12 >> 2] & 15](o, c[b + 40 >> 2] | 0, h, h + 4 | 0, j, f, f + 8 | 0, g) | 0) {
   case 1:
   case 2:
    {
     m = -1;
     break a;
     break;
    }
   case 3:
    {
     a[f >> 0] = c[n >> 2];
     c[g >> 2] = f + 1;
     break;
    }
   default:
    {}
   }
   o = b + 32 | 0;
   while (1) {
    p = c[g >> 2] | 0;
    if (p >>> 0 <= f >>> 0) break b;
    q = p + -1 | 0;
    c[g >> 2] = q;
    if ((Cd(a[q >> 0] | 0, c[o >> 2] | 0) | 0) == -1) {
     m = -1;
     break a;
    }
   }
  } while (0);
  c[n >> 2] = d;
  a[k >> 0] = 1;
  m = d;
 } while (0);
 i = e;
 return m | 0;
}

function Md(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 f = i;
 i = i + 48 | 0;
 g = f + 16 | 0;
 h = f;
 j = f + 32 | 0;
 c[j >> 2] = d;
 k = j + 4 | 0;
 l = b + 48 | 0;
 m = c[l >> 2] | 0;
 c[k >> 2] = e - ((m | 0) != 0 & 1);
 n = b + 44 | 0;
 c[j + 8 >> 2] = c[n >> 2];
 c[j + 12 >> 2] = m;
 if (!(c[576] | 0)) {
  c[g >> 2] = c[b + 60 >> 2];
  c[g + 4 >> 2] = j;
  c[g + 8 >> 2] = 2;
  o = Vc(jb(145, g | 0) | 0) | 0;
 } else {
  eb(95, b | 0);
  c[h >> 2] = c[b + 60 >> 2];
  c[h + 4 >> 2] = j;
  c[h + 8 >> 2] = 2;
  j = Vc(jb(145, h | 0) | 0) | 0;
  Ya(0);
  o = j;
 }
 if ((o | 0) >= 1) {
  j = c[k >> 2] | 0;
  if (o >>> 0 > j >>> 0) {
   k = c[n >> 2] | 0;
   n = b + 4 | 0;
   c[n >> 2] = k;
   h = k;
   c[b + 8 >> 2] = h + (o - j);
   if (!(c[l >> 2] | 0)) p = e; else {
    c[n >> 2] = h + 1;
    a[d + (e + -1) >> 0] = a[h >> 0] | 0;
    p = e;
   }
  } else p = o;
 } else {
  c[b >> 2] = c[b >> 2] | o & 48 ^ 16;
  c[b + 8 >> 2] = 0;
  c[b + 4 >> 2] = 0;
  p = o;
 }
 i = f;
 return p | 0;
}

function ef(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 if (d >>> 0 > 4294967279) Gc(b);
 e = a[b >> 0] | 0;
 if (!(e & 1)) {
  f = 10;
  g = e;
 } else {
  e = c[b >> 2] | 0;
  f = (e & -2) + -1 | 0;
  g = e & 255;
 }
 if (!(g & 1)) h = (g & 255) >>> 1; else h = c[b + 4 >> 2] | 0;
 e = h >>> 0 > d >>> 0 ? h : d;
 if (e >>> 0 < 11) i = 10; else i = (e + 16 & -16) + -1 | 0;
 do if ((i | 0) != (f | 0)) {
  do if ((i | 0) != 10) {
   e = Ub(i + 1 | 0) | 0;
   if (!(g & 1)) {
    j = e;
    k = 1;
    l = b + 1 | 0;
    m = 0;
    break;
   } else {
    j = e;
    k = 1;
    l = c[b + 8 >> 2] | 0;
    m = 1;
    break;
   }
  } else {
   j = b + 1 | 0;
   k = 0;
   l = c[b + 8 >> 2] | 0;
   m = 1;
  } while (0);
  if (!(g & 1)) n = (g & 255) >>> 1; else n = c[b + 4 >> 2] | 0;
  ro(j | 0, l | 0, n + 1 | 0) | 0;
  if (m) Vb(l);
  if (k) {
   c[b >> 2] = i + 1 | 1;
   c[b + 4 >> 2] = h;
   c[b + 8 >> 2] = j;
   break;
  } else {
   a[b >> 0] = h << 1;
   break;
  }
 } while (0);
 return;
}

function of(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 if (d >>> 0 > 1073741807) Gc(b);
 e = a[b >> 0] | 0;
 if (!(e & 1)) {
  f = 1;
  g = e;
 } else {
  e = c[b >> 2] | 0;
  f = (e & -2) + -1 | 0;
  g = e & 255;
 }
 if (!(g & 1)) h = (g & 255) >>> 1; else h = c[b + 4 >> 2] | 0;
 e = h >>> 0 > d >>> 0 ? h : d;
 if (e >>> 0 < 2) i = 1; else i = (e + 4 & -4) + -1 | 0;
 do if ((i | 0) != (f | 0)) {
  do if ((i | 0) != 1) {
   e = Ub((i << 2) + 4 | 0) | 0;
   if (!(g & 1)) {
    j = e;
    k = 1;
    l = b + 4 | 0;
    m = 0;
    break;
   } else {
    j = e;
    k = 1;
    l = c[b + 8 >> 2] | 0;
    m = 1;
    break;
   }
  } else {
   j = b + 4 | 0;
   k = 0;
   l = c[b + 8 >> 2] | 0;
   m = 1;
  } while (0);
  if (!(g & 1)) n = (g & 255) >>> 1; else n = c[b + 4 >> 2] | 0;
  $d(j, l, n + 1 | 0) | 0;
  if (m) Vb(l);
  if (k) {
   c[b >> 2] = i + 1 | 1;
   c[b + 4 >> 2] = h;
   c[b + 8 >> 2] = j;
   break;
  } else {
   a[b >> 0] = h << 1;
   break;
  }
 } while (0);
 return;
}

function Vm(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0;
 j = i;
 i = i + 16 | 0;
 k = j;
 l = c[b >> 2] | 0;
 a : do if (!l) m = 0; else {
  n = f;
  o = d;
  p = n - o >> 2;
  q = g + 12 | 0;
  r = c[q >> 2] | 0;
  s = (r | 0) > (p | 0) ? r - p | 0 : 0;
  p = e;
  r = p - o | 0;
  o = r >> 2;
  if ((r | 0) > 0 ? (nb[c[(c[l >> 2] | 0) + 48 >> 2] & 31](l, d, o) | 0) != (o | 0) : 0) {
   c[b >> 2] = 0;
   m = 0;
   break;
  }
  do if ((s | 0) > 0) {
   kf(k, s, h);
   if ((nb[c[(c[l >> 2] | 0) + 48 >> 2] & 31](l, (a[k >> 0] & 1) == 0 ? k + 4 | 0 : c[k + 8 >> 2] | 0, s) | 0) == (s | 0)) {
    lf(k);
    break;
   } else {
    c[b >> 2] = 0;
    lf(k);
    m = 0;
    break a;
   }
  } while (0);
  s = n - p | 0;
  o = s >> 2;
  if ((s | 0) > 0 ? (nb[c[(c[l >> 2] | 0) + 48 >> 2] & 31](l, e, o) | 0) != (o | 0) : 0) {
   c[b >> 2] = 0;
   m = 0;
   break;
  }
  c[q >> 2] = 0;
  m = l;
 } while (0);
 i = j;
 return m | 0;
}

function xd(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 f = e + 16 | 0;
 g = c[f >> 2] | 0;
 if (!g) if (!(Sd(e) | 0)) {
  h = c[f >> 2] | 0;
  i = 4;
 } else j = 0; else {
  h = g;
  i = 4;
 }
 a : do if ((i | 0) == 4) {
  g = e + 20 | 0;
  f = c[g >> 2] | 0;
  if ((h - f | 0) >>> 0 < d >>> 0) {
   j = nb[c[e + 36 >> 2] & 31](e, b, d) | 0;
   break;
  }
  b : do if ((a[e + 75 >> 0] | 0) > -1) {
   k = d;
   while (1) {
    if (!k) {
     l = d;
     m = b;
     n = f;
     o = 0;
     break b;
    }
    p = k + -1 | 0;
    if ((a[b + p >> 0] | 0) == 10) {
     q = k;
     break;
    } else k = p;
   }
   if ((nb[c[e + 36 >> 2] & 31](e, b, q) | 0) >>> 0 < q >>> 0) {
    j = q;
    break a;
   }
   l = d - q | 0;
   m = b + q | 0;
   n = c[g >> 2] | 0;
   o = q;
  } else {
   l = d;
   m = b;
   n = f;
   o = 0;
  } while (0);
  ro(n | 0, m | 0, l | 0) | 0;
  c[g >> 2] = (c[g >> 2] | 0) + l;
  j = o + l | 0;
 } while (0);
 return j | 0;
}

function Qb(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 j = i;
 i = i + 16 | 0;
 k = j;
 l = c[b >> 2] | 0;
 if (!l) {
  m = 0;
  i = j;
  return m | 0;
 }
 n = f;
 f = d;
 o = n - f | 0;
 p = g + 12 | 0;
 g = c[p >> 2] | 0;
 q = (g | 0) > (o | 0) ? g - o | 0 : 0;
 o = e;
 g = o - f | 0;
 if ((g | 0) > 0 ? (nb[c[(c[l >> 2] | 0) + 48 >> 2] & 31](l, d, g) | 0) != (g | 0) : 0) {
  c[b >> 2] = 0;
  m = 0;
  i = j;
  return m | 0;
 }
 do if ((q | 0) > 0) {
  _e(k, q, h);
  if ((nb[c[(c[l >> 2] | 0) + 48 >> 2] & 31](l, (a[k >> 0] & 1) == 0 ? k + 1 | 0 : c[k + 8 >> 2] | 0, q) | 0) == (q | 0)) {
   $e(k);
   break;
  }
  c[b >> 2] = 0;
  $e(k);
  m = 0;
  i = j;
  return m | 0;
 } while (0);
 k = n - o | 0;
 if ((k | 0) > 0 ? (nb[c[(c[l >> 2] | 0) + 48 >> 2] & 31](l, e, k) | 0) != (k | 0) : 0) {
  c[b >> 2] = 0;
  m = 0;
  i = j;
  return m | 0;
 }
 c[p >> 2] = 0;
 m = l;
 i = j;
 return m | 0;
}

function Uc(b) {
 b = b | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 e = b + 104 | 0;
 f = c[e >> 2] | 0;
 if ((f | 0) != 0 ? (c[b + 108 >> 2] | 0) >= (f | 0) : 0) g = 4; else {
  f = Td(b) | 0;
  if ((f | 0) >= 0) {
   h = c[e >> 2] | 0;
   e = b + 8 | 0;
   if (h) {
    i = c[e >> 2] | 0;
    j = c[b + 4 >> 2] | 0;
    k = i;
    l = h - (c[b + 108 >> 2] | 0) + -1 | 0;
    if ((k - j | 0) > (l | 0)) {
     c[b + 100 >> 2] = j + l;
     m = i;
    } else {
     n = k;
     o = i;
     g = 9;
    }
   } else {
    i = c[e >> 2] | 0;
    n = i;
    o = i;
    g = 9;
   }
   if ((g | 0) == 9) {
    c[b + 100 >> 2] = n;
    m = o;
   }
   o = c[b + 4 >> 2] | 0;
   if (m) {
    n = b + 108 | 0;
    c[n >> 2] = m + 1 - o + (c[n >> 2] | 0);
   }
   n = o + -1 | 0;
   if ((d[n >> 0] | 0 | 0) == (f | 0)) p = f; else {
    a[n >> 0] = f;
    p = f;
   }
  } else g = 4;
 }
 if ((g | 0) == 4) {
  c[b + 100 >> 2] = 0;
  p = -1;
 }
 return p | 0;
}

function xc(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 if ((b | 0) == (c[d + 8 >> 2] | 0)) rc(0, d, e, f, g); else {
  i = d + 52 | 0;
  j = a[i >> 0] | 0;
  k = d + 53 | 0;
  l = a[k >> 0] | 0;
  m = c[b + 12 >> 2] | 0;
  n = b + 16 + (m << 3) | 0;
  a[i >> 0] = 0;
  a[k >> 0] = 0;
  tc(b + 16 | 0, d, e, f, g, h);
  a : do if ((m | 0) > 1) {
   o = d + 24 | 0;
   p = b + 8 | 0;
   q = d + 54 | 0;
   r = b + 24 | 0;
   do {
    if (a[q >> 0] | 0) break a;
    if (!(a[i >> 0] | 0)) {
     if ((a[k >> 0] | 0) != 0 ? (c[p >> 2] & 1 | 0) == 0 : 0) break a;
    } else {
     if ((c[o >> 2] | 0) == 1) break a;
     if (!(c[p >> 2] & 2)) break a;
    }
    a[i >> 0] = 0;
    a[k >> 0] = 0;
    tc(r, d, e, f, g, h);
    r = r + 8 | 0;
   } while (r >>> 0 < n >>> 0);
  } while (0);
  a[i >> 0] = j;
  a[k >> 0] = l;
 }
 return;
}

function mm(b) {
 b = b | 0;
 if ((a[1816] | 0) == 0 ? (Aa(1816) | 0) != 0 : 0) {
  if ((a[1824] | 0) == 0 ? (Aa(1824) | 0) != 0 : 0) {
   b = 11132;
   do {
    c[b >> 2] = 0;
    c[b + 4 >> 2] = 0;
    c[b + 8 >> 2] = 0;
    b = b + 12 | 0;
   } while ((b | 0) != 11420);
   ab(104, 0, n | 0) | 0;
   Ga(1824);
  }
  mf(11132, 11420) | 0;
  mf(11144, 11452) | 0;
  mf(11156, 11488) | 0;
  mf(11168, 11512) | 0;
  mf(11180, 11536) | 0;
  mf(11192, 11552) | 0;
  mf(11204, 11572) | 0;
  mf(11216, 11592) | 0;
  mf(11228, 11620) | 0;
  mf(11240, 11660) | 0;
  mf(11252, 11692) | 0;
  mf(11264, 11728) | 0;
  mf(11276, 11764) | 0;
  mf(11288, 11780) | 0;
  mf(11300, 11796) | 0;
  mf(11312, 11812) | 0;
  mf(11324, 11536) | 0;
  mf(11336, 11828) | 0;
  mf(11348, 11844) | 0;
  mf(11360, 11860) | 0;
  mf(11372, 11876) | 0;
  mf(11384, 11892) | 0;
  mf(11396, 11908) | 0;
  mf(11408, 11924) | 0;
  c[2985] = 11132;
  Ga(1816);
 }
 return c[2985] | 0;
}

function lm(b) {
 b = b | 0;
 if ((a[1800] | 0) == 0 ? (Aa(1800) | 0) != 0 : 0) {
  if ((a[1808] | 0) == 0 ? (Aa(1808) | 0) != 0 : 0) {
   b = 10840;
   do {
    c[b >> 2] = 0;
    c[b + 4 >> 2] = 0;
    c[b + 8 >> 2] = 0;
    b = b + 12 | 0;
   } while ((b | 0) != 11128);
   ab(103, 0, n | 0) | 0;
   Ga(1808);
  }
  af(10840, 21553) | 0;
  af(10852, 21561) | 0;
  af(10864, 21570) | 0;
  af(10876, 21576) | 0;
  af(10888, 21582) | 0;
  af(10900, 21586) | 0;
  af(10912, 21591) | 0;
  af(10924, 21596) | 0;
  af(10936, 21603) | 0;
  af(10948, 21613) | 0;
  af(10960, 21621) | 0;
  af(10972, 21630) | 0;
  af(10984, 21639) | 0;
  af(10996, 21643) | 0;
  af(11008, 21647) | 0;
  af(11020, 21651) | 0;
  af(11032, 21582) | 0;
  af(11044, 21655) | 0;
  af(11056, 21659) | 0;
  af(11068, 21663) | 0;
  af(11080, 21667) | 0;
  af(11092, 21671) | 0;
  af(11104, 21675) | 0;
  af(11116, 21679) | 0;
  c[2782] = 10840;
  Ga(1800);
 }
 return c[2782] | 0;
}

function sg(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 e = i;
 i = i + 32 | 0;
 f = e + 20 | 0;
 g = e + 16 | 0;
 h = e + 8 | 0;
 j = e;
 pg(h, b);
 if (a[h >> 0] | 0) {
  c[j >> 2] = xf(b + (c[(c[b >> 2] | 0) + -12 >> 2] | 0) | 0) | 0;
  k = Mk(j, 8508) | 0;
  Kk(j);
  j = c[(c[b >> 2] | 0) + -12 >> 2] | 0;
  l = c[b + (j + 24) >> 2] | 0;
  m = b + j | 0;
  n = b + (j + 76) | 0;
  j = c[n >> 2] | 0;
  if ((j | 0) == -1) {
   c[f >> 2] = xf(m) | 0;
   o = Mk(f, 9336) | 0;
   p = Ab[c[(c[o >> 2] | 0) + 28 >> 2] & 15](o, 32) | 0;
   Kk(f);
   o = p << 24 >> 24;
   c[n >> 2] = o;
   q = o;
  } else q = j;
  j = c[(c[k >> 2] | 0) + 24 >> 2] | 0;
  c[g >> 2] = l;
  c[f >> 2] = c[g >> 2];
  if (!(Bb[j & 31](k, f, m, q & 255, d) | 0)) {
   d = b + ((c[(c[b >> 2] | 0) + -12 >> 2] | 0) + 16) | 0;
   c[d >> 2] = c[d >> 2] | 5;
  }
 }
 qg(h);
 i = e;
 return b | 0;
}

function rg(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 e = i;
 i = i + 32 | 0;
 f = e + 20 | 0;
 g = e + 16 | 0;
 h = e + 8 | 0;
 j = e;
 pg(h, b);
 if (a[h >> 0] | 0) {
  c[j >> 2] = xf(b + (c[(c[b >> 2] | 0) + -12 >> 2] | 0) | 0) | 0;
  k = Mk(j, 8508) | 0;
  Kk(j);
  j = c[(c[b >> 2] | 0) + -12 >> 2] | 0;
  l = c[b + (j + 24) >> 2] | 0;
  m = b + j | 0;
  n = b + (j + 76) | 0;
  j = c[n >> 2] | 0;
  if ((j | 0) == -1) {
   c[f >> 2] = xf(m) | 0;
   o = Mk(f, 9336) | 0;
   p = Ab[c[(c[o >> 2] | 0) + 28 >> 2] & 15](o, 32) | 0;
   Kk(f);
   o = p << 24 >> 24;
   c[n >> 2] = o;
   q = o;
  } else q = j;
  j = c[(c[k >> 2] | 0) + 16 >> 2] | 0;
  c[g >> 2] = l;
  c[f >> 2] = c[g >> 2];
  if (!(Bb[j & 31](k, f, m, q & 255, d) | 0)) {
   d = b + ((c[(c[b >> 2] | 0) + -12 >> 2] | 0) + 16) | 0;
   c[d >> 2] = c[d >> 2] | 5;
  }
 }
 qg(h);
 i = e;
 return b | 0;
}

function tg(b, d) {
 b = b | 0;
 d = +d;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 e = i;
 i = i + 32 | 0;
 f = e + 20 | 0;
 g = e + 16 | 0;
 h = e + 8 | 0;
 j = e;
 pg(h, b);
 if (a[h >> 0] | 0) {
  c[j >> 2] = xf(b + (c[(c[b >> 2] | 0) + -12 >> 2] | 0) | 0) | 0;
  k = Mk(j, 8508) | 0;
  Kk(j);
  j = c[(c[b >> 2] | 0) + -12 >> 2] | 0;
  l = c[b + (j + 24) >> 2] | 0;
  m = b + j | 0;
  n = b + (j + 76) | 0;
  j = c[n >> 2] | 0;
  if ((j | 0) == -1) {
   c[f >> 2] = xf(m) | 0;
   o = Mk(f, 9336) | 0;
   p = Ab[c[(c[o >> 2] | 0) + 28 >> 2] & 15](o, 32) | 0;
   Kk(f);
   o = p << 24 >> 24;
   c[n >> 2] = o;
   q = o;
  } else q = j;
  j = c[(c[k >> 2] | 0) + 32 >> 2] | 0;
  c[g >> 2] = l;
  c[f >> 2] = c[g >> 2];
  if (!(tb[j & 7](k, f, m, q & 255, d) | 0)) {
   q = b + ((c[(c[b >> 2] | 0) + -12 >> 2] | 0) + 16) | 0;
   c[q >> 2] = c[q >> 2] | 5;
  }
 }
 qg(h);
 i = e;
 return b | 0;
}

function Dc() {
 var a = 0, b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0;
 a = i;
 i = i + 48 | 0;
 b = a + 32 | 0;
 d = a + 24 | 0;
 e = a + 16 | 0;
 f = a;
 g = a + 36 | 0;
 a = Tb() | 0;
 if ((a | 0) != 0 ? (h = c[a >> 2] | 0, (h | 0) != 0) : 0) {
  a = h + 48 | 0;
  j = c[a >> 2] | 0;
  k = c[a + 4 >> 2] | 0;
  if (!((j & -256 | 0) == 1126902528 & (k | 0) == 1129074247)) {
   c[d >> 2] = c[575];
   Sb(14605, d);
  }
  if ((j | 0) == 1126902529 & (k | 0) == 1129074247) l = c[h + 44 >> 2] | 0; else l = h + 80 | 0;
  c[g >> 2] = l;
  l = c[h >> 2] | 0;
  h = c[l + 4 >> 2] | 0;
  if (nb[c[(c[24 >> 2] | 0) + 16 >> 2] & 31](24, l, g) | 0) {
   l = c[g >> 2] | 0;
   g = c[575] | 0;
   k = ub[c[(c[l >> 2] | 0) + 8 >> 2] & 63](l) | 0;
   c[f >> 2] = g;
   c[f + 4 >> 2] = h;
   c[f + 8 >> 2] = k;
   Sb(14519, f);
  } else {
   c[e >> 2] = c[575];
   c[e + 4 >> 2] = h;
   Sb(14564, e);
  }
 }
 Sb(14643, b);
}

function an(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0;
 f = d;
 g = a[b >> 0] | 0;
 if (!(g & 1)) {
  h = 1;
  i = (g & 255) >>> 1;
  j = g;
 } else {
  g = c[b >> 2] | 0;
  h = (g & -2) + -1 | 0;
  i = c[b + 4 >> 2] | 0;
  j = g & 255;
 }
 g = e - f >> 2;
 do if (g) {
  if ((h - i | 0) >>> 0 < g >>> 0) {
   rf(b, h, i + g - h | 0, i, i, 0, 0);
   k = a[b >> 0] | 0;
  } else k = j;
  if (!(k & 1)) l = b + 4 | 0; else l = c[b + 8 >> 2] | 0;
  m = i + ((e - f | 0) >>> 2) | 0;
  if ((d | 0) != (e | 0)) {
   n = d;
   o = l + (i << 2) | 0;
   while (1) {
    c[o >> 2] = c[n >> 2];
    n = n + 4 | 0;
    if ((n | 0) == (e | 0)) break; else o = o + 4 | 0;
   }
  }
  c[l + (m << 2) >> 2] = 0;
  o = i + g | 0;
  if (!(a[b >> 0] & 1)) {
   a[b >> 0] = o << 1;
   break;
  } else {
   c[b + 4 >> 2] = o;
   break;
  }
 } while (0);
 return b | 0;
}

function ho(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 f = i;
 i = i + 16 | 0;
 g = f;
 a : do if ((a | 0) == (b | 0)) {
  c[d >> 2] = 4;
  h = 0;
 } else {
  j = Qc() | 0;
  k = c[j >> 2] | 0;
  c[j >> 2] = 0;
  l = Jc(a, g, e, ah() | 0) | 0;
  m = D;
  n = c[j >> 2] | 0;
  if (!n) c[j >> 2] = k;
  if ((c[g >> 2] | 0) != (b | 0)) {
   c[d >> 2] = 4;
   h = 0;
   break;
  }
  do if ((n | 0) == 34) {
   c[d >> 2] = 4;
   if ((m | 0) > 0 | (m | 0) == 0 & l >>> 0 > 0) {
    h = 2147483647;
    break a;
   }
  } else {
   if ((m | 0) < -1 | (m | 0) == -1 & l >>> 0 < 2147483648) {
    c[d >> 2] = 4;
    break;
   }
   if ((m | 0) > 0 | (m | 0) == 0 & l >>> 0 > 2147483647) {
    c[d >> 2] = 4;
    h = 2147483647;
    break a;
   } else {
    h = l;
    break a;
   }
  } while (0);
  h = -2147483648;
 } while (0);
 i = f;
 return h | 0;
}

function _m(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0;
 f = d;
 g = a[b >> 0] | 0;
 if (!(g & 1)) {
  h = 10;
  i = (g & 255) >>> 1;
  j = g;
 } else {
  g = c[b >> 2] | 0;
  h = (g & -2) + -1 | 0;
  i = c[b + 4 >> 2] | 0;
  j = g & 255;
 }
 g = e - f | 0;
 do if ((e | 0) != (d | 0)) {
  if ((h - i | 0) >>> 0 < g >>> 0) {
   hf(b, h, i + g - h | 0, i, i, 0, 0);
   k = a[b >> 0] | 0;
  } else k = j;
  if (!(k & 1)) l = b + 1 | 0; else l = c[b + 8 >> 2] | 0;
  m = e + (i - f) | 0;
  if ((d | 0) != (e | 0)) {
   n = d;
   o = l + i | 0;
   while (1) {
    a[o >> 0] = a[n >> 0] | 0;
    n = n + 1 | 0;
    if ((n | 0) == (e | 0)) break; else o = o + 1 | 0;
   }
  }
  a[l + m >> 0] = 0;
  o = i + g | 0;
  if (!(a[b >> 0] & 1)) {
   a[b >> 0] = o << 1;
   break;
  } else {
   c[b + 4 >> 2] = o;
   break;
  }
 } while (0);
 return b | 0;
}

function Pb(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 f = i;
 i = i + 32 | 0;
 g = f + 16 | 0;
 h = f + 8 | 0;
 j = f;
 pg(h, b);
 if (!(a[h >> 0] | 0)) {
  qg(h);
  i = f;
  return b | 0;
 }
 k = c[(c[b >> 2] | 0) + -12 >> 2] | 0;
 c[j >> 2] = c[b + (k + 24) >> 2];
 l = b + k | 0;
 m = c[b + (k + 4) >> 2] | 0;
 n = d + e | 0;
 e = b + (k + 76) | 0;
 k = c[e >> 2] | 0;
 if ((k | 0) == -1) {
  c[g >> 2] = xf(l) | 0;
  o = Mk(g, 9336) | 0;
  p = Ab[c[(c[o >> 2] | 0) + 28 >> 2] & 15](o, 32) | 0;
  Kk(g);
  o = p << 24 >> 24;
  c[e >> 2] = o;
  q = o;
 } else q = k;
 c[g >> 2] = c[j >> 2];
 if (Qb(g, d, (m & 176 | 0) == 32 ? n : d, n, l, q & 255) | 0) {
  qg(h);
  i = f;
  return b | 0;
 }
 q = c[(c[b >> 2] | 0) + -12 >> 2] | 0;
 uf(b + q | 0, c[b + (q + 16) >> 2] | 5);
 qg(h);
 i = f;
 return b | 0;
}

function Gd(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 g = i;
 i = i + 128 | 0;
 h = g + 112 | 0;
 j = g;
 k = j;
 l = 2624;
 m = k + 112 | 0;
 do {
  c[k >> 2] = c[l >> 2];
  k = k + 4 | 0;
  l = l + 4 | 0;
 } while ((k | 0) < (m | 0));
 if ((d + -1 | 0) >>> 0 > 2147483646) if (!d) {
  n = h;
  o = 1;
  p = 4;
 } else {
  c[(Qc() | 0) >> 2] = 75;
  q = -1;
 } else {
  n = b;
  o = d;
  p = 4;
 }
 if ((p | 0) == 4) {
  p = -2 - n | 0;
  d = o >>> 0 > p >>> 0 ? p : o;
  c[j + 48 >> 2] = d;
  o = j + 20 | 0;
  c[o >> 2] = n;
  c[j + 44 >> 2] = n;
  p = n + d | 0;
  n = j + 16 | 0;
  c[n >> 2] = p;
  c[j + 28 >> 2] = p;
  p = Ed(j, e, f) | 0;
  if (!d) q = p; else {
   d = c[o >> 2] | 0;
   a[d + (((d | 0) == (c[n >> 2] | 0)) << 31 >> 31) >> 0] = 0;
   q = p;
  }
 }
 i = g;
 return q | 0;
}

function Vh(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 b = i;
 i = i + 192 | 0;
 h = b;
 j = b + 180 | 0;
 k = b + 160 | 0;
 l = b + 12 | 0;
 m = b + 8 | 0;
 n = b + 4 | 0;
 a[j >> 0] = a[21371] | 0;
 a[j + 1 >> 0] = a[21372] | 0;
 a[j + 2 >> 0] = a[21373] | 0;
 a[j + 3 >> 0] = a[21374] | 0;
 a[j + 4 >> 0] = a[21375] | 0;
 a[j + 5 >> 0] = a[21376] | 0;
 o = ah() | 0;
 c[h >> 2] = g;
 g = Tm(k, 20, o, j, h) | 0;
 j = k + g | 0;
 o = Ah(k, j, e) | 0;
 p = xf(e) | 0;
 c[m >> 2] = p;
 q = Mk(m, 9328) | 0;
 ko(p) | 0;
 yb[c[(c[q >> 2] | 0) + 48 >> 2] & 7](q, k, j, l) | 0;
 q = l + (g << 2) | 0;
 c[n >> 2] = c[d >> 2];
 c[h >> 2] = c[n >> 2];
 n = Vm(h, l, (o | 0) == (j | 0) ? q : l + (o - k << 2) | 0, q, e, f) | 0;
 i = b;
 return n | 0;
}

function Qh(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 b = i;
 i = i + 128 | 0;
 h = b;
 j = b + 116 | 0;
 k = b + 104 | 0;
 l = b + 20 | 0;
 m = b + 16 | 0;
 n = b + 12 | 0;
 o = b + 8 | 0;
 p = b + 4 | 0;
 a[j >> 0] = a[21357] | 0;
 a[j + 1 >> 0] = a[21358] | 0;
 a[j + 2 >> 0] = a[21359] | 0;
 a[j + 3 >> 0] = a[21360] | 0;
 a[j + 4 >> 0] = a[21361] | 0;
 a[j + 5 >> 0] = a[21362] | 0;
 zh(j + 1 | 0, 21363, 0, c[e + 4 >> 2] | 0);
 q = ah() | 0;
 c[h >> 2] = g;
 g = k + (Tm(k, 12, q, j, h) | 0) | 0;
 j = Ah(k, g, e) | 0;
 q = xf(e) | 0;
 c[o >> 2] = q;
 Oh(k, j, g, l, m, n, o);
 ko(q) | 0;
 c[p >> 2] = c[d >> 2];
 d = c[m >> 2] | 0;
 m = c[n >> 2] | 0;
 c[h >> 2] = c[p >> 2];
 p = Vm(h, l, d, m, e, f) | 0;
 i = b;
 return p | 0;
}

function Nh(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 b = i;
 i = i + 128 | 0;
 h = b;
 j = b + 116 | 0;
 k = b + 104 | 0;
 l = b + 20 | 0;
 m = b + 16 | 0;
 n = b + 12 | 0;
 o = b + 8 | 0;
 p = b + 4 | 0;
 a[j >> 0] = a[21357] | 0;
 a[j + 1 >> 0] = a[21358] | 0;
 a[j + 2 >> 0] = a[21359] | 0;
 a[j + 3 >> 0] = a[21360] | 0;
 a[j + 4 >> 0] = a[21361] | 0;
 a[j + 5 >> 0] = a[21362] | 0;
 zh(j + 1 | 0, 21363, 1, c[e + 4 >> 2] | 0);
 q = ah() | 0;
 c[h >> 2] = g;
 g = k + (Tm(k, 12, q, j, h) | 0) | 0;
 j = Ah(k, g, e) | 0;
 q = xf(e) | 0;
 c[o >> 2] = q;
 Oh(k, j, g, l, m, n, o);
 ko(q) | 0;
 c[p >> 2] = c[d >> 2];
 d = c[m >> 2] | 0;
 m = c[n >> 2] | 0;
 c[h >> 2] = c[p >> 2];
 p = Vm(h, l, d, m, e, f) | 0;
 i = b;
 return p | 0;
}

function yh(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 b = i;
 i = i + 64 | 0;
 h = b;
 j = b + 56 | 0;
 k = b + 44 | 0;
 l = b + 20 | 0;
 m = b + 16 | 0;
 n = b + 12 | 0;
 o = b + 8 | 0;
 p = b + 4 | 0;
 a[j >> 0] = a[21357] | 0;
 a[j + 1 >> 0] = a[21358] | 0;
 a[j + 2 >> 0] = a[21359] | 0;
 a[j + 3 >> 0] = a[21360] | 0;
 a[j + 4 >> 0] = a[21361] | 0;
 a[j + 5 >> 0] = a[21362] | 0;
 zh(j + 1 | 0, 21363, 1, c[e + 4 >> 2] | 0);
 q = ah() | 0;
 c[h >> 2] = g;
 g = k + (Tm(k, 12, q, j, h) | 0) | 0;
 j = Ah(k, g, e) | 0;
 q = xf(e) | 0;
 c[o >> 2] = q;
 Bh(k, j, g, l, m, n, o);
 ko(q) | 0;
 c[p >> 2] = c[d >> 2];
 d = c[m >> 2] | 0;
 m = c[n >> 2] | 0;
 c[h >> 2] = c[p >> 2];
 p = Qb(h, l, d, m, e, f) | 0;
 i = b;
 return p | 0;
}

function Dh(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 b = i;
 i = i + 64 | 0;
 h = b;
 j = b + 56 | 0;
 k = b + 44 | 0;
 l = b + 20 | 0;
 m = b + 16 | 0;
 n = b + 12 | 0;
 o = b + 8 | 0;
 p = b + 4 | 0;
 a[j >> 0] = a[21357] | 0;
 a[j + 1 >> 0] = a[21358] | 0;
 a[j + 2 >> 0] = a[21359] | 0;
 a[j + 3 >> 0] = a[21360] | 0;
 a[j + 4 >> 0] = a[21361] | 0;
 a[j + 5 >> 0] = a[21362] | 0;
 zh(j + 1 | 0, 21363, 0, c[e + 4 >> 2] | 0);
 q = ah() | 0;
 c[h >> 2] = g;
 g = k + (Tm(k, 12, q, j, h) | 0) | 0;
 j = Ah(k, g, e) | 0;
 q = xf(e) | 0;
 c[o >> 2] = q;
 Bh(k, j, g, l, m, n, o);
 ko(q) | 0;
 c[p >> 2] = c[d >> 2];
 d = c[m >> 2] | 0;
 m = c[n >> 2] | 0;
 c[h >> 2] = c[p >> 2];
 p = Qb(h, l, d, m, e, f) | 0;
 i = b;
 return p | 0;
}

function Jh(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 b = i;
 i = i + 80 | 0;
 h = b;
 j = b + 72 | 0;
 k = b + 52 | 0;
 l = b + 12 | 0;
 m = b + 8 | 0;
 n = b + 4 | 0;
 a[j >> 0] = a[21371] | 0;
 a[j + 1 >> 0] = a[21372] | 0;
 a[j + 2 >> 0] = a[21373] | 0;
 a[j + 3 >> 0] = a[21374] | 0;
 a[j + 4 >> 0] = a[21375] | 0;
 a[j + 5 >> 0] = a[21376] | 0;
 o = ah() | 0;
 c[h >> 2] = g;
 g = Tm(k, 20, o, j, h) | 0;
 j = k + g | 0;
 o = Ah(k, j, e) | 0;
 p = xf(e) | 0;
 c[m >> 2] = p;
 q = Mk(m, 9336) | 0;
 ko(p) | 0;
 yb[c[(c[q >> 2] | 0) + 32 >> 2] & 7](q, k, j, l) | 0;
 q = l + g | 0;
 c[n >> 2] = c[d >> 2];
 c[h >> 2] = c[n >> 2];
 n = Qb(h, l, (o | 0) == (j | 0) ? q : l + (o - k) | 0, q, e, f) | 0;
 i = b;
 return n | 0;
}

function zh(b, c, d, e) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 if (!(e & 2048)) f = b; else {
  a[b >> 0] = 43;
  f = b + 1 | 0;
 }
 if (!(e & 512)) g = f; else {
  a[f >> 0] = 35;
  g = f + 1 | 0;
 }
 f = a[c >> 0] | 0;
 if (!(f << 24 >> 24)) h = g; else {
  b = c;
  c = g;
  g = f;
  while (1) {
   b = b + 1 | 0;
   f = c + 1 | 0;
   a[c >> 0] = g;
   g = a[b >> 0] | 0;
   if (!(g << 24 >> 24)) {
    h = f;
    break;
   } else c = f;
  }
 }
 a : do switch (e & 74 | 0) {
 case 64:
  {
   a[h >> 0] = 111;
   break;
  }
 case 8:
  {
   if (!(e & 16384)) {
    a[h >> 0] = 120;
    break a;
   } else {
    a[h >> 0] = 88;
    break a;
   }
   break;
  }
 default:
  if (d) {
   a[h >> 0] = 100;
   break a;
  } else {
   a[h >> 0] = 117;
   break a;
  }
 } while (0);
 return;
}

function Vi(b, d, e, f, g, h, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0;
 f = i;
 i = i + 112 | 0;
 e = f + 4 | 0;
 k = f;
 c[k >> 2] = e + 100;
 Wi(b + 8 | 0, e, k, g, h, j);
 j = c[k >> 2] | 0;
 k = c[d >> 2] | 0;
 if ((e | 0) == (j | 0)) l = k; else {
  d = e;
  e = k;
  while (1) {
   k = a[d >> 0] | 0;
   do if (e) {
    h = e + 24 | 0;
    g = c[h >> 2] | 0;
    if ((g | 0) == (c[e + 28 >> 2] | 0)) {
     b = (Ab[c[(c[e >> 2] | 0) + 52 >> 2] & 15](e, k & 255) | 0) == -1;
     m = b ? 0 : e;
     break;
    } else {
     c[h >> 2] = g + 1;
     a[g >> 0] = k;
     m = e;
     break;
    }
   } else m = 0; while (0);
   d = d + 1 | 0;
   if ((d | 0) == (j | 0)) {
    l = m;
    break;
   } else e = m;
  }
 }
 i = f;
 return l | 0;
}

function tk(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0;
 d = i;
 i = i + 16 | 0;
 j = d;
 c[j >> 2] = 0;
 c[j + 4 >> 2] = 0;
 c[j + 8 >> 2] = 0;
 k = a[h >> 0] | 0;
 l = (k & 1) == 0;
 m = l ? h + 1 | 0 : c[h + 8 >> 2] | 0;
 n = l ? (k & 255) >>> 1 : c[h + 4 >> 2] | 0;
 h = m + n | 0;
 if ((n | 0) > 0) {
  n = m;
  do {
   ff(j, a[n >> 0] | 0);
   n = n + 1 | 0;
  } while (n >>> 0 < h >>> 0);
 }
 h = Xc((e | 0) == -1 ? -1 : e << 1, f, g, (a[j >> 0] & 1) == 0 ? j + 1 | 0 : c[j + 8 >> 2] | 0) | 0;
 c[b >> 2] = 0;
 c[b + 4 >> 2] = 0;
 c[b + 8 >> 2] = 0;
 g = Zd(h) | 0;
 f = h + g | 0;
 if ((g | 0) > 0) {
  g = h;
  do {
   ff(b, a[g >> 0] | 0);
   g = g + 1 | 0;
  } while (g >>> 0 < f >>> 0);
 }
 $e(j);
 i = d;
 return;
}

function oi(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 j = i;
 i = i + 16 | 0;
 k = j + 4 | 0;
 l = j;
 m = b + 8 | 0;
 b = ub[c[(c[m >> 2] | 0) + 8 >> 2] & 63](m) | 0;
 m = a[b >> 0] | 0;
 if (!(m & 1)) n = (m & 255) >>> 1; else n = c[b + 4 >> 2] | 0;
 m = a[b + 12 >> 0] | 0;
 if (!(m & 1)) o = (m & 255) >>> 1; else o = c[b + 16 >> 2] | 0;
 do if ((n | 0) != (0 - o | 0)) {
  c[l >> 2] = c[f >> 2];
  c[k >> 2] = c[l >> 2];
  m = ym(e, k, b, b + 24 | 0, h, g, 0) | 0;
  p = c[d >> 2] | 0;
  if ((m | 0) == (b | 0) & (p | 0) == 12) {
   c[d >> 2] = 0;
   break;
  }
  if ((p | 0) < 12 & (m - b | 0) == 12) c[d >> 2] = p + 12;
 } else c[g >> 2] = c[g >> 2] | 4; while (0);
 i = j;
 return;
}

function Ni(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 j = i;
 i = i + 16 | 0;
 k = j + 4 | 0;
 l = j;
 m = b + 8 | 0;
 b = ub[c[(c[m >> 2] | 0) + 8 >> 2] & 63](m) | 0;
 m = a[b >> 0] | 0;
 if (!(m & 1)) n = (m & 255) >>> 1; else n = c[b + 4 >> 2] | 0;
 m = a[b + 12 >> 0] | 0;
 if (!(m & 1)) o = (m & 255) >>> 1; else o = c[b + 16 >> 2] | 0;
 do if ((n | 0) != (0 - o | 0)) {
  c[l >> 2] = c[f >> 2];
  c[k >> 2] = c[l >> 2];
  m = Jm(e, k, b, b + 24 | 0, h, g, 0) | 0;
  p = c[d >> 2] | 0;
  if ((m | 0) == (b | 0) & (p | 0) == 12) {
   c[d >> 2] = 0;
   break;
  }
  if ((p | 0) < 12 & (m - b | 0) == 12) c[d >> 2] = p + 12;
 } else c[g >> 2] = c[g >> 2] | 4; while (0);
 i = j;
 return;
}

function me(b, c, d) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0;
 if (c >>> 0 > 0 | (c | 0) == 0 & b >>> 0 > 4294967295) {
  e = d;
  f = b;
  g = c;
  while (1) {
   c = Bo(f | 0, g | 0, 10, 0) | 0;
   h = e + -1 | 0;
   a[h >> 0] = c | 48;
   c = Ao(f | 0, g | 0, 10, 0) | 0;
   if (g >>> 0 > 9 | (g | 0) == 9 & f >>> 0 > 4294967295) {
    e = h;
    f = c;
    g = D;
   } else {
    i = h;
    j = c;
    break;
   }
  }
  k = i;
  l = j;
 } else {
  k = d;
  l = b;
 }
 if (!l) m = k; else {
  b = k;
  k = l;
  while (1) {
   l = b + -1 | 0;
   a[l >> 0] = (k >>> 0) % 10 | 0 | 48;
   if (k >>> 0 < 10) {
    m = l;
    break;
   } else {
    b = l;
    k = (k >>> 0) / 10 | 0;
   }
  }
 }
 return m | 0;
}

function Zi(a, b, d, e, f, g, h) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0;
 e = i;
 i = i + 416 | 0;
 d = e + 8 | 0;
 j = e;
 c[j >> 2] = d + 400;
 _i(a + 8 | 0, d, j, f, g, h);
 h = c[j >> 2] | 0;
 j = c[b >> 2] | 0;
 if ((d | 0) == (h | 0)) k = j; else {
  b = d;
  d = j;
  while (1) {
   j = c[b >> 2] | 0;
   if (!d) l = 0; else {
    g = d + 24 | 0;
    f = c[g >> 2] | 0;
    if ((f | 0) == (c[d + 28 >> 2] | 0)) m = Ab[c[(c[d >> 2] | 0) + 52 >> 2] & 15](d, j) | 0; else {
     c[g >> 2] = f + 4;
     c[f >> 2] = j;
     m = j;
    }
    l = (m | 0) == -1 ? 0 : d;
   }
   b = b + 4 | 0;
   if ((b | 0) == (h | 0)) {
    k = l;
    break;
   } else d = l;
  }
 }
 i = e;
 return k | 0;
}

function Al(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0;
 g = e;
 h = a + 8 | 0;
 a : do if ((d | 0) == (e | 0) | (f | 0) == 0) i = 0; else {
  a = d;
  j = 0;
  k = 0;
  while (1) {
   l = bd(c[h >> 2] | 0) | 0;
   m = kd(a, g - a | 0, b) | 0;
   if (l) bd(l) | 0;
   switch (m | 0) {
   case -2:
   case -1:
    {
     i = j;
     break a;
     break;
    }
   case 0:
    {
     n = a + 1 | 0;
     o = 1;
     break;
    }
   default:
    {
     n = a + m | 0;
     o = m;
    }
   }
   m = o + j | 0;
   k = k + 1 | 0;
   if ((n | 0) == (e | 0) | k >>> 0 >= f >>> 0) {
    i = m;
    break a;
   } else {
    a = n;
    j = m;
   }
  }
 } while (0);
 return i | 0;
}

function qf(b, d, e, f, g, h, i, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0;
 if ((1073741806 - d | 0) >>> 0 < e >>> 0) Gc(b);
 if (!(a[b >> 0] & 1)) k = b + 4 | 0; else k = c[b + 8 >> 2] | 0;
 if (d >>> 0 < 536870887) {
  l = e + d | 0;
  e = d << 1;
  m = l >>> 0 < e >>> 0 ? e : l;
  n = m >>> 0 < 2 ? 2 : m + 4 & -4;
 } else n = 1073741807;
 m = Ub(n << 2) | 0;
 if (g) $d(m, k, g) | 0;
 if (i) $d(m + (g << 2) | 0, j, i) | 0;
 j = f - h | 0;
 if ((j | 0) != (g | 0)) $d(m + (i + g << 2) | 0, k + (h + g << 2) | 0, j - g | 0) | 0;
 if ((d | 0) != 1) Vb(k);
 c[b + 8 >> 2] = m;
 c[b >> 2] = n | 1;
 n = j + i | 0;
 c[b + 4 >> 2] = n;
 c[m + (n << 2) >> 2] = 0;
 return;
}

function Zd(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0;
 d = b;
 a : do if (!(d & 3)) {
  e = b;
  f = 4;
 } else {
  g = b;
  h = d;
  while (1) {
   if (!(a[g >> 0] | 0)) {
    i = h;
    break a;
   }
   j = g + 1 | 0;
   h = j;
   if (!(h & 3)) {
    e = j;
    f = 4;
    break;
   } else g = j;
  }
 } while (0);
 if ((f | 0) == 4) {
  f = e;
  while (1) {
   e = c[f >> 2] | 0;
   if (!((e & -2139062144 ^ -2139062144) & e + -16843009)) f = f + 4 | 0; else {
    k = e;
    l = f;
    break;
   }
  }
  if (!((k & 255) << 24 >> 24)) m = l; else {
   k = l;
   while (1) {
    l = k + 1 | 0;
    if (!(a[l >> 0] | 0)) {
     m = l;
     break;
    } else k = l;
   }
  }
  i = m;
 }
 return i - d | 0;
}

function Rh(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 a = i;
 i = i + 240 | 0;
 h = a + 8 | 0;
 j = a;
 k = a + 204 | 0;
 l = a + 32 | 0;
 m = a + 28 | 0;
 n = a + 24 | 0;
 o = a + 20 | 0;
 p = a + 16 | 0;
 q = j;
 c[q >> 2] = 37;
 c[q + 4 >> 2] = 0;
 zh(j + 1 | 0, 21365, 0, c[d + 4 >> 2] | 0);
 q = ah() | 0;
 r = h;
 c[r >> 2] = f;
 c[r + 4 >> 2] = g;
 g = k + (Tm(k, 23, q, j, h) | 0) | 0;
 j = Ah(k, g, d) | 0;
 q = xf(d) | 0;
 c[o >> 2] = q;
 Oh(k, j, g, l, m, n, o);
 ko(q) | 0;
 c[p >> 2] = c[b >> 2];
 b = c[m >> 2] | 0;
 m = c[n >> 2] | 0;
 c[h >> 2] = c[p >> 2];
 p = Vm(h, l, b, m, d, e) | 0;
 i = a;
 return p | 0;
}

function Ph(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 a = i;
 i = i + 224 | 0;
 h = a + 8 | 0;
 j = a;
 k = a + 196 | 0;
 l = a + 32 | 0;
 m = a + 28 | 0;
 n = a + 24 | 0;
 o = a + 20 | 0;
 p = a + 16 | 0;
 q = j;
 c[q >> 2] = 37;
 c[q + 4 >> 2] = 0;
 zh(j + 1 | 0, 21365, 1, c[d + 4 >> 2] | 0);
 q = ah() | 0;
 r = h;
 c[r >> 2] = f;
 c[r + 4 >> 2] = g;
 g = k + (Tm(k, 22, q, j, h) | 0) | 0;
 j = Ah(k, g, d) | 0;
 q = xf(d) | 0;
 c[o >> 2] = q;
 Oh(k, j, g, l, m, n, o);
 ko(q) | 0;
 c[p >> 2] = c[b >> 2];
 b = c[m >> 2] | 0;
 m = c[n >> 2] | 0;
 c[h >> 2] = c[p >> 2];
 p = Vm(h, l, b, m, d, e) | 0;
 i = a;
 return p | 0;
}

function Eh(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 a = i;
 i = i + 112 | 0;
 h = a + 8 | 0;
 j = a;
 k = a + 75 | 0;
 l = a + 32 | 0;
 m = a + 28 | 0;
 n = a + 24 | 0;
 o = a + 20 | 0;
 p = a + 16 | 0;
 q = j;
 c[q >> 2] = 37;
 c[q + 4 >> 2] = 0;
 zh(j + 1 | 0, 21365, 0, c[d + 4 >> 2] | 0);
 q = ah() | 0;
 r = h;
 c[r >> 2] = f;
 c[r + 4 >> 2] = g;
 g = k + (Tm(k, 23, q, j, h) | 0) | 0;
 j = Ah(k, g, d) | 0;
 q = xf(d) | 0;
 c[o >> 2] = q;
 Bh(k, j, g, l, m, n, o);
 ko(q) | 0;
 c[p >> 2] = c[b >> 2];
 b = c[m >> 2] | 0;
 m = c[n >> 2] | 0;
 c[h >> 2] = c[p >> 2];
 p = Qb(h, l, b, m, d, e) | 0;
 i = a;
 return p | 0;
}

function Ch(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 a = i;
 i = i + 96 | 0;
 h = a + 8 | 0;
 j = a;
 k = a + 74 | 0;
 l = a + 32 | 0;
 m = a + 28 | 0;
 n = a + 24 | 0;
 o = a + 20 | 0;
 p = a + 16 | 0;
 q = j;
 c[q >> 2] = 37;
 c[q + 4 >> 2] = 0;
 zh(j + 1 | 0, 21365, 1, c[d + 4 >> 2] | 0);
 q = ah() | 0;
 r = h;
 c[r >> 2] = f;
 c[r + 4 >> 2] = g;
 g = k + (Tm(k, 22, q, j, h) | 0) | 0;
 j = Ah(k, g, d) | 0;
 q = xf(d) | 0;
 c[o >> 2] = q;
 Bh(k, j, g, l, m, n, o);
 ko(q) | 0;
 c[p >> 2] = c[b >> 2];
 b = c[m >> 2] | 0;
 m = c[n >> 2] | 0;
 c[h >> 2] = c[p >> 2];
 p = Qb(h, l, b, m, d, e) | 0;
 i = a;
 return p | 0;
}

function ne(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 g = i;
 i = i + 256 | 0;
 h = g;
 do if ((d | 0) > (e | 0) & (f & 73728 | 0) == 0) {
  j = d - e | 0;
  oo(h | 0, b | 0, (j >>> 0 > 256 ? 256 : j) | 0) | 0;
  k = c[a >> 2] | 0;
  l = (k & 32 | 0) == 0;
  if (j >>> 0 > 255) {
   m = d - e | 0;
   n = j;
   o = k;
   k = l;
   while (1) {
    if (k) {
     xd(h, 256, a) | 0;
     p = c[a >> 2] | 0;
    } else p = o;
    n = n + -256 | 0;
    k = (p & 32 | 0) == 0;
    if (n >>> 0 <= 255) break; else o = p;
   }
   if (k) q = m & 255; else break;
  } else if (l) q = j; else break;
  xd(h, q, a) | 0;
 } while (0);
 i = g;
 return;
}

function qd(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0;
 do if (b) {
  if (d >>> 0 < 128) {
   a[b >> 0] = d;
   f = 1;
   break;
  }
  if (d >>> 0 < 2048) {
   a[b >> 0] = d >>> 6 | 192;
   a[b + 1 >> 0] = d & 63 | 128;
   f = 2;
   break;
  }
  if (d >>> 0 < 55296 | (d & -8192 | 0) == 57344) {
   a[b >> 0] = d >>> 12 | 224;
   a[b + 1 >> 0] = d >>> 6 & 63 | 128;
   a[b + 2 >> 0] = d & 63 | 128;
   f = 3;
   break;
  }
  if ((d + -65536 | 0) >>> 0 < 1048576) {
   a[b >> 0] = d >>> 18 | 240;
   a[b + 1 >> 0] = d >>> 12 & 63 | 128;
   a[b + 2 >> 0] = d >>> 6 & 63 | 128;
   a[b + 3 >> 0] = d & 63 | 128;
   f = 4;
   break;
  } else {
   c[(Qc() | 0) >> 2] = 84;
   f = -1;
   break;
  }
 } else f = 1; while (0);
 return f | 0;
}

function gf(b, d, e, f, g, h, i, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0;
 if ((-18 - d | 0) >>> 0 < e >>> 0) Gc(b);
 if (!(a[b >> 0] & 1)) k = b + 1 | 0; else k = c[b + 8 >> 2] | 0;
 if (d >>> 0 < 2147483623) {
  l = e + d | 0;
  e = d << 1;
  m = l >>> 0 < e >>> 0 ? e : l;
  n = m >>> 0 < 11 ? 11 : m + 16 & -16;
 } else n = -17;
 m = Ub(n) | 0;
 if (g) ro(m | 0, k | 0, g | 0) | 0;
 if (i) ro(m + g | 0, j | 0, i | 0) | 0;
 j = f - h | 0;
 if ((j | 0) != (g | 0)) ro(m + (i + g) | 0, k + (h + g) | 0, j - g | 0) | 0;
 if ((d | 0) != 10) Vb(k);
 c[b + 8 >> 2] = m;
 c[b >> 2] = n | 1;
 n = j + i | 0;
 c[b + 4 >> 2] = n;
 a[m + n >> 0] = 0;
 return;
}

function rc(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, i = 0;
 a[d + 53 >> 0] = 1;
 do if ((c[d + 4 >> 2] | 0) == (f | 0)) {
  a[d + 52 >> 0] = 1;
  b = d + 16 | 0;
  h = c[b >> 2] | 0;
  if (!h) {
   c[b >> 2] = e;
   c[d + 24 >> 2] = g;
   c[d + 36 >> 2] = 1;
   if (!((g | 0) == 1 ? (c[d + 48 >> 2] | 0) == 1 : 0)) break;
   a[d + 54 >> 0] = 1;
   break;
  }
  if ((h | 0) != (e | 0)) {
   h = d + 36 | 0;
   c[h >> 2] = (c[h >> 2] | 0) + 1;
   a[d + 54 >> 0] = 1;
   break;
  }
  h = d + 24 | 0;
  b = c[h >> 2] | 0;
  if ((b | 0) == 2) {
   c[h >> 2] = g;
   i = g;
  } else i = b;
  if ((i | 0) == 1 ? (c[d + 48 >> 2] | 0) == 1 : 0) a[d + 54 >> 0] = 1;
 } while (0);
 return;
}

function vd(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0;
 do if (a) {
  if ((c[a + 76 >> 2] | 0) <= -1) {
   b = de(a) | 0;
   break;
  }
  d = (Id(a) | 0) == 0;
  e = de(a) | 0;
  if (d) b = e; else {
   Jd(a);
   b = e;
  }
 } else {
  if (!(c[641] | 0)) f = 0; else f = vd(c[641] | 0) | 0;
  cb(2332);
  e = c[582] | 0;
  if (!e) g = f; else {
   d = e;
   e = f;
   while (1) {
    if ((c[d + 76 >> 2] | 0) > -1) h = Id(d) | 0; else h = 0;
    if ((c[d + 20 >> 2] | 0) >>> 0 > (c[d + 28 >> 2] | 0) >>> 0) i = de(d) | 0 | e; else i = e;
    if (h) Jd(d);
    d = c[d + 56 >> 2] | 0;
    if (!d) {
     g = i;
     break;
    } else e = i;
   }
  }
  Xa(2332);
  b = g;
 } while (0);
 return b | 0;
}

function go(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0;
 f = i;
 i = i + 16 | 0;
 g = f;
 do if ((a | 0) != (b | 0)) {
  h = Qc() | 0;
  j = c[h >> 2] | 0;
  c[h >> 2] = 0;
  k = Jc(a, g, e, ah() | 0) | 0;
  l = D;
  m = c[h >> 2] | 0;
  if (!m) c[h >> 2] = j;
  if ((c[g >> 2] | 0) != (b | 0)) {
   c[d >> 2] = 4;
   n = 0;
   o = 0;
   break;
  }
  if ((m | 0) == 34) {
   c[d >> 2] = 4;
   m = (l | 0) > 0 | (l | 0) == 0 & k >>> 0 > 0;
   D = m ? 2147483647 : -2147483648;
   i = f;
   return (m ? -1 : 0) | 0;
  } else {
   n = l;
   o = k;
  }
 } else {
  c[d >> 2] = 4;
  n = 0;
  o = 0;
 } while (0);
 D = n;
 i = f;
 return o | 0;
}

function fo(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0;
 g = i;
 i = i + 16 | 0;
 h = g;
 do if ((b | 0) != (d | 0)) {
  if ((a[b >> 0] | 0) == 45) {
   c[e >> 2] = 4;
   j = 0;
   break;
  }
  k = Qc() | 0;
  l = c[k >> 2] | 0;
  c[k >> 2] = 0;
  m = Ic(b, h, f, ah() | 0) | 0;
  n = D;
  o = c[k >> 2] | 0;
  if (!o) c[k >> 2] = l;
  if ((c[h >> 2] | 0) != (d | 0)) {
   c[e >> 2] = 4;
   j = 0;
   break;
  }
  if (n >>> 0 > 0 | (n | 0) == 0 & m >>> 0 > 65535 | (o | 0) == 34) {
   c[e >> 2] = 4;
   j = -1;
   break;
  } else {
   j = m & 65535;
   break;
  }
 } else {
  c[e >> 2] = 4;
  j = 0;
 } while (0);
 i = g;
 return j | 0;
}

function eo(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0;
 g = i;
 i = i + 16 | 0;
 h = g;
 do if ((b | 0) != (d | 0)) {
  if ((a[b >> 0] | 0) == 45) {
   c[e >> 2] = 4;
   j = 0;
   break;
  }
  k = Qc() | 0;
  l = c[k >> 2] | 0;
  c[k >> 2] = 0;
  m = Ic(b, h, f, ah() | 0) | 0;
  n = D;
  o = c[k >> 2] | 0;
  if (!o) c[k >> 2] = l;
  if ((c[h >> 2] | 0) != (d | 0)) {
   c[e >> 2] = 4;
   j = 0;
   break;
  }
  if (n >>> 0 > 0 | (n | 0) == 0 & m >>> 0 > 4294967295 | (o | 0) == 34) {
   c[e >> 2] = 4;
   j = -1;
   break;
  } else {
   j = m;
   break;
  }
 } else {
  c[e >> 2] = 4;
  j = 0;
 } while (0);
 i = g;
 return j | 0;
}

function co(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0;
 g = i;
 i = i + 16 | 0;
 h = g;
 do if ((b | 0) != (d | 0)) {
  if ((a[b >> 0] | 0) == 45) {
   c[e >> 2] = 4;
   j = 0;
   break;
  }
  k = Qc() | 0;
  l = c[k >> 2] | 0;
  c[k >> 2] = 0;
  m = Ic(b, h, f, ah() | 0) | 0;
  n = D;
  o = c[k >> 2] | 0;
  if (!o) c[k >> 2] = l;
  if ((c[h >> 2] | 0) != (d | 0)) {
   c[e >> 2] = 4;
   j = 0;
   break;
  }
  if (n >>> 0 > 0 | (n | 0) == 0 & m >>> 0 > 4294967295 | (o | 0) == 34) {
   c[e >> 2] = 4;
   j = -1;
   break;
  } else {
   j = m;
   break;
  }
 } else {
  c[e >> 2] = 4;
  j = 0;
 } while (0);
 i = g;
 return j | 0;
}

function km(b) {
 b = b | 0;
 if ((a[1784] | 0) == 0 ? (Aa(1784) | 0) != 0 : 0) {
  if ((a[1792] | 0) == 0 ? (Aa(1792) | 0) != 0 : 0) {
   b = 10328;
   do {
    c[b >> 2] = 0;
    c[b + 4 >> 2] = 0;
    c[b + 8 >> 2] = 0;
    b = b + 12 | 0;
   } while ((b | 0) != 10496);
   ab(102, 0, n | 0) | 0;
   Ga(1792);
  }
  mf(10328, 10496) | 0;
  mf(10340, 10524) | 0;
  mf(10352, 10552) | 0;
  mf(10364, 10584) | 0;
  mf(10376, 10624) | 0;
  mf(10388, 10660) | 0;
  mf(10400, 10688) | 0;
  mf(10412, 10724) | 0;
  mf(10424, 10740) | 0;
  mf(10436, 10756) | 0;
  mf(10448, 10772) | 0;
  mf(10460, 10788) | 0;
  mf(10472, 10804) | 0;
  mf(10484, 10820) | 0;
  c[2709] = 10328;
  Ga(1784);
 }
 return c[2709] | 0;
}

function jm(b) {
 b = b | 0;
 if ((a[1768] | 0) == 0 ? (Aa(1768) | 0) != 0 : 0) {
  if ((a[1776] | 0) == 0 ? (Aa(1776) | 0) != 0 : 0) {
   b = 10156;
   do {
    c[b >> 2] = 0;
    c[b + 4 >> 2] = 0;
    c[b + 8 >> 2] = 0;
    b = b + 12 | 0;
   } while ((b | 0) != 10324);
   ab(101, 0, n | 0) | 0;
   Ga(1776);
  }
  af(10156, 21468) | 0;
  af(10168, 21475) | 0;
  af(10180, 21482) | 0;
  af(10192, 21490) | 0;
  af(10204, 21500) | 0;
  af(10216, 21509) | 0;
  af(10228, 21516) | 0;
  af(10240, 21525) | 0;
  af(10252, 21529) | 0;
  af(10264, 21533) | 0;
  af(10276, 21537) | 0;
  af(10288, 21541) | 0;
  af(10300, 21545) | 0;
  af(10312, 21549) | 0;
  c[2581] = 10156;
  Ga(1768);
 }
 return c[2581] | 0;
}

function Pe(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 b = i;
 i = i + 16 | 0;
 d = b + 8 | 0;
 e = b;
 f = a + 36 | 0;
 g = a + 40 | 0;
 h = d + 8 | 0;
 j = d;
 k = a + 32 | 0;
 a : while (1) {
  a = c[f >> 2] | 0;
  l = Bb[c[(c[a >> 2] | 0) + 20 >> 2] & 31](a, c[g >> 2] | 0, d, h, e) | 0;
  a = (c[e >> 2] | 0) - j | 0;
  if ((yd(d, 1, a, c[k >> 2] | 0) | 0) != (a | 0)) {
   m = -1;
   break;
  }
  switch (l | 0) {
  case 1:
   break;
  case 2:
   {
    m = -1;
    break a;
    break;
   }
  default:
   {
    n = 4;
    break a;
   }
  }
 }
 if ((n | 0) == 4) m = ((vd(c[k >> 2] | 0) | 0) != 0) << 31 >> 31;
 i = b;
 return m | 0;
}

function Ee(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 b = i;
 i = i + 16 | 0;
 d = b + 8 | 0;
 e = b;
 f = a + 36 | 0;
 g = a + 40 | 0;
 h = d + 8 | 0;
 j = d;
 k = a + 32 | 0;
 a : while (1) {
  a = c[f >> 2] | 0;
  l = Bb[c[(c[a >> 2] | 0) + 20 >> 2] & 31](a, c[g >> 2] | 0, d, h, e) | 0;
  a = (c[e >> 2] | 0) - j | 0;
  if ((yd(d, 1, a, c[k >> 2] | 0) | 0) != (a | 0)) {
   m = -1;
   break;
  }
  switch (l | 0) {
  case 1:
   break;
  case 2:
   {
    m = -1;
    break a;
    break;
   }
  default:
   {
    n = 4;
    break a;
   }
  }
 }
 if ((n | 0) == 4) m = ((vd(c[k >> 2] | 0) | 0) != 0) << 31 >> 31;
 i = b;
 return m | 0;
}

function id(a, b) {
 a = +a;
 b = b | 0;
 var d = 0.0, e = 0, f = 0, g = 0, i = 0.0;
 if ((b | 0) > 1023) {
  d = a * 89884656743115795.0e291;
  e = b + -1023 | 0;
  if ((e | 0) > 1023) {
   f = b + -2046 | 0;
   g = (f | 0) > 1023 ? 1023 : f;
   i = d * 89884656743115795.0e291;
  } else {
   g = e;
   i = d;
  }
 } else if ((b | 0) < -1022) {
  d = a * 2.2250738585072014e-308;
  e = b + 1022 | 0;
  if ((e | 0) < -1022) {
   f = b + 2044 | 0;
   g = (f | 0) < -1022 ? -1022 : f;
   i = d * 2.2250738585072014e-308;
  } else {
   g = e;
   i = d;
  }
 } else {
  g = b;
  i = a;
 }
 b = so(g + 1023 | 0, 0, 52) | 0;
 g = D;
 c[k >> 2] = b;
 c[k + 4 >> 2] = g;
 return +(i * +h[k >> 3]);
}

function bo(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0;
 g = i;
 i = i + 16 | 0;
 h = g;
 do if ((b | 0) != (d | 0)) {
  if ((a[b >> 0] | 0) == 45) {
   c[e >> 2] = 4;
   j = 0;
   k = 0;
   break;
  }
  l = Qc() | 0;
  m = c[l >> 2] | 0;
  c[l >> 2] = 0;
  n = Ic(b, h, f, ah() | 0) | 0;
  o = c[l >> 2] | 0;
  if (!o) c[l >> 2] = m;
  if ((c[h >> 2] | 0) != (d | 0)) {
   c[e >> 2] = 4;
   j = 0;
   k = 0;
   break;
  }
  if ((o | 0) == 34) {
   c[e >> 2] = 4;
   j = -1;
   k = -1;
  } else {
   j = D;
   k = n;
  }
 } else {
  c[e >> 2] = 4;
  j = 0;
  k = 0;
 } while (0);
 D = j;
 i = g;
 return k | 0;
}

function xl(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0;
 h = i;
 i = i + 16 | 0;
 j = h;
 c[g >> 2] = e;
 e = bd(c[b + 8 >> 2] | 0) | 0;
 b = qd(j, 0, d) | 0;
 if (e) bd(e) | 0;
 switch (b | 0) {
 case 0:
 case -1:
  {
   k = 2;
   break;
  }
 default:
  {
   e = b + -1 | 0;
   if (e >>> 0 <= (f - (c[g >> 2] | 0) | 0) >>> 0) if (!e) k = 0; else {
    f = e;
    e = j;
    while (1) {
     j = a[e >> 0] | 0;
     b = c[g >> 2] | 0;
     c[g >> 2] = b + 1;
     a[b >> 0] = j;
     f = f + -1 | 0;
     if (!f) {
      k = 0;
      break;
     } else e = e + 1 | 0;
    }
   } else k = 1;
  }
 }
 i = h;
 return k | 0;
}

function Gg(b, c, d, e, f) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0;
 a : do if ((e | 0) == (f | 0)) {
  g = c;
  h = 6;
 } else {
  b = e;
  i = c;
  while (1) {
   if ((i | 0) == (d | 0)) {
    j = -1;
    break a;
   }
   k = a[i >> 0] | 0;
   l = a[b >> 0] | 0;
   if (k << 24 >> 24 < l << 24 >> 24) {
    j = -1;
    break a;
   }
   if (l << 24 >> 24 < k << 24 >> 24) {
    j = 1;
    break a;
   }
   k = i + 1 | 0;
   b = b + 1 | 0;
   if ((b | 0) == (f | 0)) {
    g = k;
    h = 6;
    break;
   } else i = k;
  }
 } while (0);
 if ((h | 0) == 6) j = (g | 0) != (d | 0) & 1;
 return j | 0;
}

function df(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0, k = 0;
 if (d) {
  f = a[b >> 0] | 0;
  if (!(f & 1)) {
   g = 10;
   h = f;
  } else {
   f = c[b >> 2] | 0;
   g = (f & -2) + -1 | 0;
   h = f & 255;
  }
  if (!(h & 1)) i = (h & 255) >>> 1; else i = c[b + 4 >> 2] | 0;
  if ((g - i | 0) >>> 0 < d >>> 0) {
   hf(b, g, d - g + i | 0, i, i, 0, 0);
   j = a[b >> 0] | 0;
  } else j = h;
  if (!(j & 1)) k = b + 1 | 0; else k = c[b + 8 >> 2] | 0;
  oo(k + i | 0, e | 0, d | 0) | 0;
  e = i + d | 0;
  if (!(a[b >> 0] & 1)) a[b >> 0] = e << 1; else c[b + 4 >> 2] = e;
  a[k + e >> 0] = 0;
 }
 return b | 0;
}

function wc(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 do if ((b | 0) == (c[d + 8 >> 2] | 0)) {
  if ((c[d + 4 >> 2] | 0) == (e | 0) ? (g = d + 28 | 0, (c[g >> 2] | 0) != 1) : 0) c[g >> 2] = f;
 } else if ((b | 0) == (c[d >> 2] | 0)) {
  if ((c[d + 16 >> 2] | 0) != (e | 0) ? (g = d + 20 | 0, (c[g >> 2] | 0) != (e | 0)) : 0) {
   c[d + 32 >> 2] = f;
   c[g >> 2] = e;
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

function rf(b, d, e, f, g, h, i) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 var j = 0, k = 0, l = 0, m = 0;
 if ((1073741807 - d | 0) >>> 0 < e >>> 0) Gc(b);
 if (!(a[b >> 0] & 1)) j = b + 4 | 0; else j = c[b + 8 >> 2] | 0;
 if (d >>> 0 < 536870887) {
  k = e + d | 0;
  e = d << 1;
  l = k >>> 0 < e >>> 0 ? e : k;
  m = l >>> 0 < 2 ? 2 : l + 4 & -4;
 } else m = 1073741807;
 l = Ub(m << 2) | 0;
 if (g) $d(l, j, g) | 0;
 k = f - h | 0;
 if ((k | 0) != (g | 0)) $d(l + (i + g << 2) | 0, j + (h + g << 2) | 0, k - g | 0) | 0;
 if ((d | 0) != 1) Vb(j);
 c[b + 8 >> 2] = l;
 c[b >> 2] = m | 1;
 return;
}

function Lg(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0;
 a : do if ((e | 0) == (f | 0)) {
  g = b;
  h = 6;
 } else {
  a = e;
  i = b;
  while (1) {
   if ((i | 0) == (d | 0)) {
    j = -1;
    break a;
   }
   k = c[i >> 2] | 0;
   l = c[a >> 2] | 0;
   if ((k | 0) < (l | 0)) {
    j = -1;
    break a;
   }
   if ((l | 0) < (k | 0)) {
    j = 1;
    break a;
   }
   k = i + 4 | 0;
   a = a + 4 | 0;
   if ((a | 0) == (f | 0)) {
    g = k;
    h = 6;
    break;
   } else i = k;
  }
 } while (0);
 if ((h | 0) == 6) j = (g | 0) != (d | 0) & 1;
 return j | 0;
}

function wd(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0;
 if ((c[d + 76 >> 2] | 0) >= 0 ? (Id(d) | 0) != 0 : 0) {
  if ((a[d + 75 >> 0] | 0) != (b | 0) ? (e = d + 20 | 0, f = c[e >> 2] | 0, f >>> 0 < (c[d + 16 >> 2] | 0) >>> 0) : 0) {
   c[e >> 2] = f + 1;
   a[f >> 0] = b;
   g = b & 255;
  } else g = Kd(d, b) | 0;
  Jd(d);
  h = g;
 } else i = 3;
 do if ((i | 0) == 3) {
  if ((a[d + 75 >> 0] | 0) != (b | 0) ? (g = d + 20 | 0, f = c[g >> 2] | 0, f >>> 0 < (c[d + 16 >> 2] | 0) >>> 0) : 0) {
   c[g >> 2] = f + 1;
   a[f >> 0] = b;
   h = b & 255;
   break;
  }
  h = Kd(d, b) | 0;
 } while (0);
 return h | 0;
}

function Xf(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0;
 e = a + 12 | 0;
 f = a + 16 | 0;
 a : do if ((d | 0) > 0) {
  g = b;
  h = 0;
  while (1) {
   i = c[e >> 2] | 0;
   if (i >>> 0 >= (c[f >> 2] | 0) >>> 0) {
    j = ub[c[(c[a >> 2] | 0) + 40 >> 2] & 63](a) | 0;
    if ((j | 0) == -1) {
     k = h;
     break a;
    } else l = j;
   } else {
    c[e >> 2] = i + 4;
    l = c[i >> 2] | 0;
   }
   c[g >> 2] = l;
   i = h + 1 | 0;
   if ((i | 0) < (d | 0)) {
    g = g + 4 | 0;
    h = i;
   } else {
    k = i;
    break;
   }
  }
 } else k = 0; while (0);
 return k | 0;
}

function Kd(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0;
 f = i;
 i = i + 16 | 0;
 g = f;
 h = e & 255;
 a[g >> 0] = h;
 j = b + 16 | 0;
 k = c[j >> 2] | 0;
 if (!k) if (!(Sd(b) | 0)) {
  l = c[j >> 2] | 0;
  m = 4;
 } else n = -1; else {
  l = k;
  m = 4;
 }
 do if ((m | 0) == 4) {
  k = b + 20 | 0;
  j = c[k >> 2] | 0;
  if (j >>> 0 < l >>> 0 ? (o = e & 255, (o | 0) != (a[b + 75 >> 0] | 0)) : 0) {
   c[k >> 2] = j + 1;
   a[j >> 0] = h;
   n = o;
   break;
  }
  if ((nb[c[b + 36 >> 2] & 31](b, g, 1) | 0) == 1) n = d[g >> 0] | 0; else n = -1;
 } while (0);
 i = f;
 return n | 0;
}

function Ah(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 a : do switch (c[e + 4 >> 2] & 176 | 0) {
 case 16:
  {
   f = a[b >> 0] | 0;
   switch (f << 24 >> 24) {
   case 43:
   case 45:
    {
     g = b + 1 | 0;
     break a;
     break;
    }
   default:
    {}
   }
   if ((d - b | 0) > 1 & f << 24 >> 24 == 48) {
    switch (a[b + 1 >> 0] | 0) {
    case 88:
    case 120:
     break;
    default:
     {
      h = 7;
      break a;
     }
    }
    g = b + 2 | 0;
   } else h = 7;
   break;
  }
 case 32:
  {
   g = d;
   break;
  }
 default:
  h = 7;
 } while (0);
 if ((h | 0) == 7) g = b;
 return g | 0;
}

function pf(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0;
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
  rf(b, g, 1, g, g, 0, 0);
  if (!(a[b >> 0] & 1)) i = 7; else i = 8;
 } else if (f) i = 8; else i = 7;
 if ((i | 0) == 7) {
  a[b >> 0] = (h << 1) + 2;
  j = b + 4 | 0;
  k = h + 1 | 0;
 } else if ((i | 0) == 8) {
  i = c[b + 8 >> 2] | 0;
  f = h + 1 | 0;
  c[b + 4 >> 2] = f;
  j = i;
  k = f;
 }
 c[j + (h << 2) >> 2] = d;
 c[j + (k << 2) >> 2] = 0;
 return;
}

function If(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0;
 f = b + 12 | 0;
 g = b + 16 | 0;
 a : do if ((e | 0) > 0) {
  h = d;
  i = 0;
  while (1) {
   j = c[f >> 2] | 0;
   if (j >>> 0 < (c[g >> 2] | 0) >>> 0) {
    c[f >> 2] = j + 1;
    k = a[j >> 0] | 0;
   } else {
    j = ub[c[(c[b >> 2] | 0) + 40 >> 2] & 63](b) | 0;
    if ((j | 0) == -1) {
     l = i;
     break a;
    }
    k = j & 255;
   }
   a[h >> 0] = k;
   j = i + 1 | 0;
   if ((j | 0) < (e | 0)) {
    h = h + 1 | 0;
    i = j;
   } else {
    l = j;
    break;
   }
  }
 } else l = 0; while (0);
 return l | 0;
}

function ug(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0;
 e = i;
 i = i + 16 | 0;
 f = e;
 pg(f, b);
 a : do if (a[f >> 0] | 0) {
  g = c[b + ((c[(c[b >> 2] | 0) + -12 >> 2] | 0) + 24) >> 2] | 0;
  h = g;
  do if (g) {
   j = h + 24 | 0;
   k = c[j >> 2] | 0;
   if ((k | 0) == (c[h + 28 >> 2] | 0)) if ((Ab[c[(c[g >> 2] | 0) + 52 >> 2] & 15](h, d & 255) | 0) == -1) break; else break a; else {
    c[j >> 2] = k + 1;
    a[k >> 0] = d;
    break a;
   }
  } while (0);
  h = b + ((c[(c[b >> 2] | 0) + -12 >> 2] | 0) + 16) | 0;
  c[h >> 2] = c[h >> 2] | 1;
 } while (0);
 qg(f);
 i = e;
 return b | 0;
}

function hf(b, d, e, f, g, h, i) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 var j = 0, k = 0, l = 0, m = 0;
 if ((-17 - d | 0) >>> 0 < e >>> 0) Gc(b);
 if (!(a[b >> 0] & 1)) j = b + 1 | 0; else j = c[b + 8 >> 2] | 0;
 if (d >>> 0 < 2147483623) {
  k = e + d | 0;
  e = d << 1;
  l = k >>> 0 < e >>> 0 ? e : k;
  m = l >>> 0 < 11 ? 11 : l + 16 & -16;
 } else m = -17;
 l = Ub(m) | 0;
 if (g) ro(l | 0, j | 0, g | 0) | 0;
 k = f - h | 0;
 if ((k | 0) != (g | 0)) ro(l + (i + g) | 0, j + (h + g) | 0, k - g | 0) | 0;
 if ((d | 0) != 10) Vb(j);
 c[b + 8 >> 2] = l;
 c[b >> 2] = m | 1;
 return;
}

function kc(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0;
 e = i;
 i = i + 64 | 0;
 f = e;
 if ((a | 0) != (b | 0)) if ((b | 0) != 0 ? (g = qc(b, 40, 56, 0) | 0, (g | 0) != 0) : 0) {
  b = f;
  h = b + 56 | 0;
  do {
   c[b >> 2] = 0;
   b = b + 4 | 0;
  } while ((b | 0) < (h | 0));
  c[f >> 2] = g;
  c[f + 8 >> 2] = a;
  c[f + 12 >> 2] = -1;
  c[f + 48 >> 2] = 1;
  Cb[c[(c[g >> 2] | 0) + 28 >> 2] & 7](g, f, c[d >> 2] | 0, 1);
  if ((c[f + 24 >> 2] | 0) == 1) {
   c[d >> 2] = c[f + 16 >> 2];
   j = 1;
  } else j = 0;
  k = j;
 } else k = 0; else k = 1;
 i = e;
 return k | 0;
}

function ff(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0;
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
  hf(b, g, 1, g, g, 0, 0);
  if (!(a[b >> 0] & 1)) i = 7; else i = 8;
 } else if (f) i = 8; else i = 7;
 if ((i | 0) == 7) {
  a[b >> 0] = (h << 1) + 2;
  j = b + 1 | 0;
  k = h + 1 | 0;
 } else if ((i | 0) == 8) {
  i = c[b + 8 >> 2] | 0;
  f = h + 1 | 0;
  c[b + 4 >> 2] = f;
  j = i;
  k = f;
 }
 a[j + h >> 0] = d;
 a[j + k >> 0] = 0;
 return;
}

function Mf(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0;
 g = b + 24 | 0;
 h = b + 28 | 0;
 a : do if ((f | 0) > 0) {
  i = e;
  j = 0;
  while (1) {
   k = c[g >> 2] | 0;
   if (k >>> 0 >= (c[h >> 2] | 0) >>> 0) {
    if ((Ab[c[(c[b >> 2] | 0) + 52 >> 2] & 15](b, d[i >> 0] | 0) | 0) == -1) {
     l = j;
     break a;
    }
   } else {
    m = a[i >> 0] | 0;
    c[g >> 2] = k + 1;
    a[k >> 0] = m;
   }
   m = j + 1 | 0;
   if ((m | 0) < (f | 0)) {
    i = i + 1 | 0;
    j = m;
   } else {
    l = m;
    break;
   }
  }
 } else l = 0; while (0);
 return l | 0;
}

function $f(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0;
 e = a + 24 | 0;
 f = a + 28 | 0;
 a : do if ((d | 0) > 0) {
  g = b;
  h = 0;
  while (1) {
   i = c[e >> 2] | 0;
   if (i >>> 0 >= (c[f >> 2] | 0) >>> 0) {
    if ((Ab[c[(c[a >> 2] | 0) + 52 >> 2] & 15](a, c[g >> 2] | 0) | 0) == -1) {
     j = h;
     break a;
    }
   } else {
    k = c[g >> 2] | 0;
    c[e >> 2] = i + 4;
    c[i >> 2] = k;
   }
   k = h + 1 | 0;
   if ((k | 0) < (d | 0)) {
    g = g + 4 | 0;
    h = k;
   } else {
    j = k;
    break;
   }
  }
 } else j = 0; while (0);
 return j | 0;
}
function bf(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0;
 f = a[b >> 0] | 0;
 if (!(f & 1)) {
  g = 10;
  h = f;
 } else {
  f = c[b >> 2] | 0;
  g = (f & -2) + -1 | 0;
  h = f & 255;
 }
 f = (h & 1) == 0;
 do if (g >>> 0 >= e >>> 0) {
  if (f) i = b + 1 | 0; else i = c[b + 8 >> 2] | 0;
  to(i | 0, d | 0, e | 0) | 0;
  a[i + e >> 0] = 0;
  if (!(a[b >> 0] & 1)) {
   a[b >> 0] = e << 1;
   break;
  } else {
   c[b + 4 >> 2] = e;
   break;
  }
 } else {
  if (f) j = (h & 255) >>> 1; else j = c[b + 4 >> 2] | 0;
  gf(b, g, e - g | 0, j, 0, j, e, d);
 } while (0);
 return b | 0;
}

function gd(a, b) {
 a = +a;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, i = 0.0, j = 0.0, l = 0, m = 0.0;
 h[k >> 3] = a;
 d = c[k >> 2] | 0;
 e = c[k + 4 >> 2] | 0;
 f = qo(d | 0, e | 0, 52) | 0;
 g = f & 2047;
 switch (g | 0) {
 case 0:
  {
   if (a != 0.0) {
    i = +gd(a * 18446744073709552.0e3, b);
    j = i;
    l = (c[b >> 2] | 0) + -64 | 0;
   } else {
    j = a;
    l = 0;
   }
   c[b >> 2] = l;
   m = j;
   break;
  }
 case 2047:
  {
   m = a;
   break;
  }
 default:
  {
   c[b >> 2] = g + -1022;
   c[k >> 2] = d;
   c[k + 4 >> 2] = e & -2146435073 | 1071644672;
   m = +h[k >> 3];
  }
 }
 return +m;
}

function Un(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0;
 d = i;
 i = i + 32 | 0;
 e = d;
 f = c[a + 8 >> 2] | 0;
 g = c[a + 4 >> 2] | 0;
 if (f - g >> 2 >>> 0 < b >>> 0) {
  h = c[a >> 2] | 0;
  j = g - h >> 2;
  g = j + b | 0;
  if (g >>> 0 > 1073741823) Hc(a);
  k = f - h | 0;
  if (k >> 2 >>> 0 < 536870911) {
   h = k >> 1;
   l = h >>> 0 < g >>> 0 ? g : h;
  } else l = 1073741823;
  Wn(e, l, j, a + 16 | 0);
  j = e + 8 | 0;
  l = c[j >> 2] | 0;
  oo(l | 0, 0, b << 2 | 0) | 0;
  c[j >> 2] = l + (b << 2);
  Xn(a, e);
  Yn(e);
 } else Vn(a, b);
 i = d;
 return;
}

function nf(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0;
 f = a[b >> 0] | 0;
 if (!(f & 1)) {
  g = 1;
  h = f;
 } else {
  f = c[b >> 2] | 0;
  g = (f & -2) + -1 | 0;
  h = f & 255;
 }
 f = (h & 1) == 0;
 do if (g >>> 0 >= e >>> 0) {
  if (f) i = b + 4 | 0; else i = c[b + 8 >> 2] | 0;
  ae(i, d, e) | 0;
  c[i + (e << 2) >> 2] = 0;
  if (!(a[b >> 0] & 1)) {
   a[b >> 0] = e << 1;
   break;
  } else {
   c[b + 4 >> 2] = e;
   break;
  }
 } else {
  if (f) j = (h & 255) >>> 1; else j = c[b + 4 >> 2] | 0;
  qf(b, g, e - g | 0, j, 0, j, e, d);
 } while (0);
 return b | 0;
}

function yi(b, d, e, f, g, h) {
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
 m = j + 4 | 0;
 n = j;
 o = b + 8 | 0;
 p = ub[c[(c[o >> 2] | 0) + 20 >> 2] & 63](o) | 0;
 c[m >> 2] = c[d >> 2];
 c[n >> 2] = c[e >> 2];
 e = a[p >> 0] | 0;
 d = (e & 1) == 0;
 o = p + 4 | 0;
 q = d ? o : c[p + 8 >> 2] | 0;
 p = q + ((d ? (e & 255) >>> 1 : c[o >> 2] | 0) << 2) | 0;
 c[l >> 2] = c[m >> 2];
 c[k >> 2] = c[n >> 2];
 n = ti(b, l, k, f, g, h, q, p) | 0;
 i = j;
 return n | 0;
}

function Pc(b) {
 b = b | 0;
 var c = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 c = 0;
 while (1) {
  if ((d[14664 + c >> 0] | 0) == (b | 0)) {
   e = c;
   f = 2;
   break;
  }
  c = c + 1 | 0;
  if ((c | 0) == 87) {
   g = 87;
   h = 14752;
   f = 5;
   break;
  }
 }
 if ((f | 0) == 2) if (!e) i = 14752; else {
  g = e;
  h = 14752;
  f = 5;
 }
 if ((f | 0) == 5) while (1) {
  f = 0;
  e = h;
  while (1) {
   c = e + 1 | 0;
   if (!(a[e >> 0] | 0)) {
    j = c;
    break;
   } else e = c;
  }
  g = g + -1 | 0;
  if (!g) {
   i = j;
   break;
  } else {
   h = j;
   f = 5;
  }
 }
 return i | 0;
}

function Cd(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 do if ((b | 0) != -1) {
  if ((c[d + 76 >> 2] | 0) > -1) e = Id(d) | 0; else e = 0;
  if (!((c[d + 8 >> 2] | 0) == 0 ? (Rd(d) | 0) != 0 : 0)) f = 6;
  if ((f | 0) == 6 ? (g = d + 4 | 0, h = c[g >> 2] | 0, h >>> 0 > ((c[d + 44 >> 2] | 0) + -8 | 0) >>> 0) : 0) {
   i = h + -1 | 0;
   c[g >> 2] = i;
   a[i >> 0] = b;
   c[d >> 2] = c[d >> 2] & -17;
   if (!e) {
    j = b;
    break;
   }
   Jd(d);
   j = b;
   break;
  }
  if (e) {
   Jd(d);
   j = -1;
  } else j = -1;
 } else j = -1; while (0);
 return j | 0;
}

function $h(b, d, e, f, g, h) {
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
 m = j + 4 | 0;
 n = j;
 o = b + 8 | 0;
 p = ub[c[(c[o >> 2] | 0) + 20 >> 2] & 63](o) | 0;
 c[m >> 2] = c[d >> 2];
 c[n >> 2] = c[e >> 2];
 e = a[p >> 0] | 0;
 d = (e & 1) == 0;
 o = d ? p + 1 | 0 : c[p + 8 >> 2] | 0;
 q = o + (d ? (e & 255) >>> 1 : c[p + 4 >> 2] | 0) | 0;
 c[l >> 2] = c[m >> 2];
 c[k >> 2] = c[n >> 2];
 n = Wh(b, l, k, f, g, h, o, q) | 0;
 i = j;
 return n | 0;
}

function Zm(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0;
 e = a + 4 | 0;
 f = (c[e >> 2] | 0) != 98;
 g = c[a >> 2] | 0;
 h = g;
 i = (c[d >> 2] | 0) - h | 0;
 j = i >>> 0 < 2147483647 ? i << 1 : -1;
 i = (c[b >> 2] | 0) - h >> 2;
 h = re(f ? g : 0, j) | 0;
 if (!h) Cc();
 if (!f) {
  f = c[a >> 2] | 0;
  c[a >> 2] = h;
  if (!f) k = h; else {
   qb[c[e >> 2] & 127](f);
   k = c[a >> 2] | 0;
  }
 } else {
  c[a >> 2] = h;
  k = h;
 }
 c[e >> 2] = 109;
 c[b >> 2] = k + (i << 2);
 c[d >> 2] = (c[a >> 2] | 0) + (j >>> 2 << 2);
 return;
}

function $m(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0;
 e = a + 4 | 0;
 f = (c[e >> 2] | 0) != 98;
 g = c[a >> 2] | 0;
 h = g;
 i = (c[d >> 2] | 0) - h | 0;
 j = i >>> 0 < 2147483647 ? i << 1 : -1;
 i = (c[b >> 2] | 0) - h >> 2;
 h = re(f ? g : 0, j) | 0;
 if (!h) Cc();
 if (!f) {
  f = c[a >> 2] | 0;
  c[a >> 2] = h;
  if (!f) k = h; else {
   qb[c[e >> 2] & 127](f);
   k = c[a >> 2] | 0;
  }
 } else {
  c[a >> 2] = h;
  k = h;
 }
 c[e >> 2] = 109;
 c[b >> 2] = k + (i << 2);
 c[d >> 2] = (c[a >> 2] | 0) + (j >>> 2 << 2);
 return;
}

function tf(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0;
 f = d;
 g = e - f | 0;
 h = g >> 2;
 if (h >>> 0 > 1073741807) Gc(b);
 if (h >>> 0 < 2) {
  a[b >> 0] = g >>> 1;
  i = b + 4 | 0;
 } else {
  g = h + 4 & -4;
  j = Ub(g << 2) | 0;
  c[b + 8 >> 2] = j;
  c[b >> 2] = g | 1;
  c[b + 4 >> 2] = h;
  i = j;
 }
 j = (e - f | 0) >>> 2;
 if ((d | 0) != (e | 0)) {
  f = d;
  d = i;
  while (1) {
   c[d >> 2] = c[f >> 2];
   f = f + 4 | 0;
   if ((f | 0) == (e | 0)) break; else d = d + 4 | 0;
  }
 }
 c[i + (j << 2) >> 2] = 0;
 return;
}

function Ym(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0;
 e = a + 4 | 0;
 f = (c[e >> 2] | 0) != 98;
 g = c[a >> 2] | 0;
 h = g;
 i = (c[d >> 2] | 0) - h | 0;
 j = i >>> 0 < 2147483647 ? i << 1 : -1;
 i = (c[b >> 2] | 0) - h | 0;
 h = re(f ? g : 0, j) | 0;
 if (!h) Cc();
 if (!f) {
  f = c[a >> 2] | 0;
  c[a >> 2] = h;
  if (!f) k = h; else {
   qb[c[e >> 2] & 127](f);
   k = c[a >> 2] | 0;
  }
 } else {
  c[a >> 2] = h;
  k = h;
 }
 c[e >> 2] = 109;
 c[b >> 2] = k + i;
 c[d >> 2] = (c[a >> 2] | 0) + j;
 return;
}

function yo(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0;
 f = i;
 i = i + 16 | 0;
 g = f | 0;
 h = b >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
 j = ((b | 0) < 0 ? -1 : 0) >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
 k = e >> 31 | ((e | 0) < 0 ? -1 : 0) << 1;
 l = ((e | 0) < 0 ? -1 : 0) >> 31 | ((e | 0) < 0 ? -1 : 0) << 1;
 m = no(h ^ a, j ^ b, h, j) | 0;
 b = D;
 Co(m, b, no(k ^ d, l ^ e, k, l) | 0, D, g) | 0;
 l = no(c[g >> 2] ^ h, c[g + 4 >> 2] ^ j, h, j) | 0;
 j = D;
 i = f;
 return (D = j, l) | 0;
}

function sf(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0;
 f = d;
 g = e - f | 0;
 if (g >>> 0 > 4294967279) Gc(b);
 if (g >>> 0 < 11) {
  a[b >> 0] = g << 1;
  h = b + 1 | 0;
 } else {
  i = g + 16 & -16;
  j = Ub(i) | 0;
  c[b + 8 >> 2] = j;
  c[b >> 2] = i | 1;
  c[b + 4 >> 2] = g;
  h = j;
 }
 j = e - f | 0;
 if ((d | 0) != (e | 0)) {
  f = d;
  d = h;
  while (1) {
   a[d >> 0] = a[f >> 0] | 0;
   f = f + 1 | 0;
   if ((f | 0) == (e | 0)) break; else d = d + 1 | 0;
  }
 }
 a[h + j >> 0] = 0;
 return;
}

function zd(a) {
 a = a | 0;
 var b = 0, e = 0, f = 0, g = 0, h = 0;
 if ((c[a + 76 >> 2] | 0) >= 0 ? (Id(a) | 0) != 0 : 0) {
  b = a + 4 | 0;
  e = c[b >> 2] | 0;
  if (e >>> 0 < (c[a + 8 >> 2] | 0) >>> 0) {
   c[b >> 2] = e + 1;
   f = d[e >> 0] | 0;
  } else f = Td(a) | 0;
  Jd(a);
  g = f;
 } else h = 3;
 do if ((h | 0) == 3) {
  f = a + 4 | 0;
  e = c[f >> 2] | 0;
  if (e >>> 0 < (c[a + 8 >> 2] | 0) >>> 0) {
   c[f >> 2] = e + 1;
   g = d[e >> 0] | 0;
   break;
  } else {
   g = Td(a) | 0;
   break;
  }
 } while (0);
 return g | 0;
}

function qg(a) {
 a = a | 0;
 var b = 0, d = 0;
 b = a + 4 | 0;
 a = c[b >> 2] | 0;
 d = c[(c[a >> 2] | 0) + -12 >> 2] | 0;
 if (((((c[a + (d + 24) >> 2] | 0) != 0 ? (c[a + (d + 16) >> 2] | 0) == 0 : 0) ? (c[a + (d + 4) >> 2] & 8192 | 0) != 0 : 0) ? !(Ea() | 0) : 0) ? (d = c[b >> 2] | 0, a = c[d + ((c[(c[d >> 2] | 0) + -12 >> 2] | 0) + 24) >> 2] | 0, (ub[c[(c[a >> 2] | 0) + 24 >> 2] & 63](a) | 0) == -1) : 0) {
  a = c[b >> 2] | 0;
  b = a + ((c[(c[a >> 2] | 0) + -12 >> 2] | 0) + 16) | 0;
  c[b >> 2] = c[b >> 2] | 1;
 }
 return;
}

function Ag(a) {
 a = a | 0;
 var b = 0, d = 0;
 b = a + 4 | 0;
 a = c[b >> 2] | 0;
 d = c[(c[a >> 2] | 0) + -12 >> 2] | 0;
 if (((((c[a + (d + 24) >> 2] | 0) != 0 ? (c[a + (d + 16) >> 2] | 0) == 0 : 0) ? (c[a + (d + 4) >> 2] & 8192 | 0) != 0 : 0) ? !(Ea() | 0) : 0) ? (d = c[b >> 2] | 0, a = c[d + ((c[(c[d >> 2] | 0) + -12 >> 2] | 0) + 24) >> 2] | 0, (ub[c[(c[a >> 2] | 0) + 24 >> 2] & 63](a) | 0) == -1) : 0) {
  a = c[b >> 2] | 0;
  b = a + ((c[(c[a >> 2] | 0) + -12 >> 2] | 0) + 16) | 0;
  c[b >> 2] = c[b >> 2] | 1;
 }
 return;
}

function ro(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0;
 if ((e | 0) >= 4096) return Ma(b | 0, d | 0, e | 0) | 0;
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

function re(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0;
 if (!a) {
  d = oe(b) | 0;
  return d | 0;
 }
 if (b >>> 0 > 4294967231) {
  c[(Qc() | 0) >> 2] = 12;
  d = 0;
  return d | 0;
 }
 e = se(a + -8 | 0, b >>> 0 < 11 ? 16 : b + 11 & -8) | 0;
 if (e) {
  d = e + 8 | 0;
  return d | 0;
 }
 e = oe(b) | 0;
 if (!e) {
  d = 0;
  return d | 0;
 }
 f = c[a + -4 >> 2] | 0;
 g = (f & -8) - ((f & 3 | 0) == 0 ? 8 : 4) | 0;
 ro(e | 0, a | 0, (g >>> 0 < b >>> 0 ? g : b) | 0) | 0;
 pe(a);
 d = e;
 return d | 0;
}

function _n(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0.0, k = 0, l = 0.0;
 e = i;
 i = i + 16 | 0;
 f = e;
 do if ((a | 0) != (b | 0)) {
  g = Qc() | 0;
  h = c[g >> 2] | 0;
  c[g >> 2] = 0;
  j = +Ud(a, f, ah() | 0);
  k = c[g >> 2] | 0;
  if (!k) c[g >> 2] = h;
  if ((c[f >> 2] | 0) != (b | 0)) {
   c[d >> 2] = 4;
   l = 0.0;
   break;
  }
  if ((k | 0) == 34) {
   c[d >> 2] = 4;
   l = j;
  } else l = j;
 } else {
  c[d >> 2] = 4;
  l = 0.0;
 } while (0);
 i = e;
 return +l;
}

function $n(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0.0, k = 0, l = 0.0;
 e = i;
 i = i + 16 | 0;
 f = e;
 do if ((a | 0) != (b | 0)) {
  g = Qc() | 0;
  h = c[g >> 2] | 0;
  c[g >> 2] = 0;
  j = +Ud(a, f, ah() | 0);
  k = c[g >> 2] | 0;
  if (!k) c[g >> 2] = h;
  if ((c[f >> 2] | 0) != (b | 0)) {
   c[d >> 2] = 4;
   l = 0.0;
   break;
  }
  if ((k | 0) == 34) {
   c[d >> 2] = 4;
   l = j;
  } else l = j;
 } else {
  c[d >> 2] = 4;
  l = 0.0;
 } while (0);
 i = e;
 return +l;
}

function Xn(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0;
 d = c[a >> 2] | 0;
 e = a + 4 | 0;
 f = b + 4 | 0;
 g = (c[e >> 2] | 0) - d | 0;
 h = (c[f >> 2] | 0) + (0 - (g >> 2) << 2) | 0;
 c[f >> 2] = h;
 ro(h | 0, d | 0, g | 0) | 0;
 g = c[a >> 2] | 0;
 c[a >> 2] = c[f >> 2];
 c[f >> 2] = g;
 g = b + 8 | 0;
 d = c[e >> 2] | 0;
 c[e >> 2] = c[g >> 2];
 c[g >> 2] = d;
 d = a + 8 | 0;
 a = b + 12 | 0;
 g = c[d >> 2] | 0;
 c[d >> 2] = c[a >> 2];
 c[a >> 2] = g;
 c[b >> 2] = c[f >> 2];
 return;
}

function Dd(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0;
 e = i;
 i = i + 16 | 0;
 f = e;
 g = oe(240) | 0;
 do if (g) {
  c[f >> 2] = c[d >> 2];
  h = Gd(g, 240, b, f) | 0;
  if (h >>> 0 < 240) {
   j = re(g, h + 1 | 0) | 0;
   c[a >> 2] = (j | 0) != 0 ? j : g;
   k = h;
   break;
  }
  pe(g);
  if ((h | 0) >= 0 ? (j = h + 1 | 0, h = oe(j) | 0, c[a >> 2] = h, (h | 0) != 0) : 0) k = Gd(h, j, b, d) | 0; else k = -1;
 } else k = -1; while (0);
 i = e;
 return k | 0;
}

function de(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0;
 b = a + 20 | 0;
 d = a + 28 | 0;
 if ((c[b >> 2] | 0) >>> 0 > (c[d >> 2] | 0) >>> 0 ? (nb[c[a + 36 >> 2] & 31](a, 0, 0) | 0, (c[b >> 2] | 0) == 0) : 0) e = -1; else {
  f = a + 4 | 0;
  g = c[f >> 2] | 0;
  h = a + 8 | 0;
  i = c[h >> 2] | 0;
  if (g >>> 0 < i >>> 0) nb[c[a + 40 >> 2] & 31](a, g - i | 0, 1) | 0;
  c[a + 16 >> 2] = 0;
  c[d >> 2] = 0;
  c[b >> 2] = 0;
  c[h >> 2] = 0;
  c[f >> 2] = 0;
  e = 0;
 }
 return e | 0;
}

function ie(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0.0;
 e = i;
 i = i + 112 | 0;
 f = e;
 g = f;
 h = g + 112 | 0;
 do {
  c[g >> 2] = 0;
  g = g + 4 | 0;
 } while ((g | 0) < (h | 0));
 g = f + 4 | 0;
 c[g >> 2] = a;
 h = f + 8 | 0;
 c[h >> 2] = -1;
 c[f + 44 >> 2] = a;
 c[f + 76 >> 2] = -1;
 Tc(f, 0);
 j = +Rc(f, d, 1);
 d = (c[g >> 2] | 0) - (c[h >> 2] | 0) + (c[f + 108 >> 2] | 0) | 0;
 if (b) c[b >> 2] = (d | 0) != 0 ? a + d | 0 : a;
 i = e;
 return +j;
}

function ao(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0.0, h = 0, j = 0, k = 0.0, l = 0;
 e = i;
 i = i + 16 | 0;
 f = e;
 do if ((a | 0) == (b | 0)) {
  c[d >> 2] = 4;
  g = 0.0;
 } else {
  h = Qc() | 0;
  j = c[h >> 2] | 0;
  c[h >> 2] = 0;
  k = +Ud(a, f, ah() | 0);
  l = c[h >> 2] | 0;
  if (!l) c[h >> 2] = j;
  if ((c[f >> 2] | 0) != (b | 0)) {
   c[d >> 2] = 4;
   g = 0.0;
   break;
  }
  if ((l | 0) == 34) c[d >> 2] = 4;
  g = k;
 } while (0);
 i = e;
 return +g;
}

function Rd(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0;
 d = b + 74 | 0;
 e = a[d >> 0] | 0;
 a[d >> 0] = e + 255 | e;
 e = b + 20 | 0;
 d = b + 44 | 0;
 if ((c[e >> 2] | 0) >>> 0 > (c[d >> 2] | 0) >>> 0) nb[c[b + 36 >> 2] & 31](b, 0, 0) | 0;
 c[b + 16 >> 2] = 0;
 c[b + 28 >> 2] = 0;
 c[e >> 2] = 0;
 e = c[b >> 2] | 0;
 if (e & 20) if (!(e & 4)) f = -1; else {
  c[b >> 2] = e | 32;
  f = -1;
 } else {
  e = c[d >> 2] | 0;
  c[b + 8 >> 2] = e;
  c[b + 4 >> 2] = e;
  f = 0;
 }
 return f | 0;
}

function Qe(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0;
 a : do if (!(a[b + 44 >> 0] | 0)) if ((f | 0) > 0) {
  g = e;
  h = 0;
  while (1) {
   if ((Ab[c[(c[b >> 2] | 0) + 52 >> 2] & 15](b, d[g >> 0] | 0) | 0) == -1) {
    i = h;
    break a;
   }
   j = h + 1 | 0;
   if ((j | 0) < (f | 0)) {
    g = g + 1 | 0;
    h = j;
   } else {
    i = j;
    break;
   }
  }
 } else i = 0; else i = yd(e, 1, f, c[b + 32 >> 2] | 0) | 0; while (0);
 return i | 0;
}

function Fe(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 a : do if (!(a[b + 44 >> 0] | 0)) if ((e | 0) > 0) {
  f = d;
  g = 0;
  while (1) {
   if ((Ab[c[(c[b >> 2] | 0) + 52 >> 2] & 15](b, c[f >> 2] | 0) | 0) == -1) {
    h = g;
    break a;
   }
   i = g + 1 | 0;
   if ((i | 0) < (e | 0)) {
    f = f + 4 | 0;
    g = i;
   } else {
    h = i;
    break;
   }
  }
 } else h = 0; else h = yd(d, 4, e, c[b + 32 >> 2] | 0) | 0; while (0);
 return h | 0;
}

function xo(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0;
 e = b >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
 f = ((b | 0) < 0 ? -1 : 0) >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
 g = d >> 31 | ((d | 0) < 0 ? -1 : 0) << 1;
 h = ((d | 0) < 0 ? -1 : 0) >> 31 | ((d | 0) < 0 ? -1 : 0) << 1;
 i = no(e ^ a, f ^ b, e, f) | 0;
 b = D;
 a = g ^ e;
 e = h ^ f;
 return no((Co(i, b, no(g ^ c, h ^ d, g, h) | 0, D, 0) | 0) ^ a, D ^ e, a, e) | 0;
}

function _i(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 128 | 0;
 j = h + 16 | 0;
 k = h + 12 | 0;
 l = h;
 m = h + 8 | 0;
 c[k >> 2] = j + 100;
 Wi(a, j, k, e, f, g);
 g = l;
 c[g >> 2] = 0;
 c[g + 4 >> 2] = 0;
 c[m >> 2] = j;
 j = (c[d >> 2] | 0) - b >> 2;
 g = bd(c[a >> 2] | 0) | 0;
 a = od(b, m, j, l) | 0;
 if (g) bd(g) | 0;
 c[d >> 2] = b + (a << 2);
 i = h;
 return;
}

function oo(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 f = b + e | 0;
 if ((e | 0) >= 20) {
  d = d & 255;
  g = b & 3;
  h = d | d << 8 | d << 16 | d << 24;
  i = f & ~3;
  if (g) {
   g = b + 4 - g | 0;
   while ((b | 0) < (g | 0)) {
    a[b >> 0] = d;
    b = b + 1 | 0;
   }
  }
  while ((b | 0) < (i | 0)) {
   c[b >> 2] = h;
   b = b + 4 | 0;
  }
 }
 while ((b | 0) < (f | 0)) {
  a[b >> 0] = d;
  b = b + 1 | 0;
 }
 return b - e | 0;
}

function th(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0;
 g = i;
 i = i + 16 | 0;
 h = g;
 j = xf(b) | 0;
 c[h >> 2] = j;
 b = Mk(h, 9328) | 0;
 yb[c[(c[b >> 2] | 0) + 48 >> 2] & 7](b, 19968, 2e4, d) | 0;
 d = Mk(h, 9484) | 0;
 c[e >> 2] = ub[c[(c[d >> 2] | 0) + 12 >> 2] & 63](d) | 0;
 c[f >> 2] = ub[c[(c[d >> 2] | 0) + 16 >> 2] & 63](d) | 0;
 rb[c[(c[d >> 2] | 0) + 20 >> 2] & 63](a, d);
 ko(j) | 0;
 i = g;
 return;
}

function qh(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0;
 h = i;
 i = i + 16 | 0;
 j = h;
 k = xf(d) | 0;
 c[j >> 2] = k;
 d = Mk(j, 9336) | 0;
 yb[c[(c[d >> 2] | 0) + 32 >> 2] & 7](d, 19968, 2e4, e) | 0;
 e = Mk(j, 9476) | 0;
 a[f >> 0] = ub[c[(c[e >> 2] | 0) + 12 >> 2] & 63](e) | 0;
 a[g >> 0] = ub[c[(c[e >> 2] | 0) + 16 >> 2] & 63](e) | 0;
 rb[c[(c[e >> 2] | 0) + 20 >> 2] & 63](b, e);
 ko(k) | 0;
 i = h;
 return;
}

function je(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0;
 g = i;
 i = i + 112 | 0;
 h = g;
 c[h >> 2] = 0;
 j = h + 4 | 0;
 c[j >> 2] = a;
 c[h + 44 >> 2] = a;
 k = h + 8 | 0;
 c[k >> 2] = (a | 0) < 0 ? -1 : a + 2147483647 | 0;
 c[h + 76 >> 2] = -1;
 Tc(h, 0);
 l = Sc(h, d, 1, e, f) | 0;
 if (b) c[b >> 2] = a + ((c[j >> 2] | 0) + (c[h + 108 >> 2] | 0) - (c[k >> 2] | 0));
 i = g;
 return l | 0;
}

function Yn(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0;
 d = c[b + 4 >> 2] | 0;
 e = b + 8 | 0;
 f = c[e >> 2] | 0;
 if ((f | 0) != (d | 0)) {
  g = f;
  while (1) {
   f = g + -4 | 0;
   if ((f | 0) == (d | 0)) {
    h = f;
    break;
   } else g = f;
  }
  c[e >> 2] = h;
 }
 h = c[b >> 2] | 0;
 do if (h) {
  e = c[b + 16 >> 2] | 0;
  if ((e | 0) == (h | 0)) {
   a[e + 112 >> 0] = 0;
   break;
  } else {
   Vb(h);
   break;
  }
 } while (0);
 return;
}

function ae(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = (d | 0) == 0;
 if (a - b >> 2 >>> 0 < d >>> 0) {
  if (!e) {
   f = d;
   do {
    f = f + -1 | 0;
    c[a + (f << 2) >> 2] = c[b + (f << 2) >> 2];
   } while ((f | 0) != 0);
  }
 } else if (!e) {
  e = b;
  b = a;
  f = d;
  while (1) {
   f = f + -1 | 0;
   c[b >> 2] = c[e >> 2];
   if (!f) break; else {
    e = e + 4 | 0;
    b = b + 4 | 0;
   }
  }
 }
 return a | 0;
}

function kg(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0;
 d = i;
 i = i + 16 | 0;
 e = d;
 if (c[b + ((c[(c[b >> 2] | 0) + -12 >> 2] | 0) + 24) >> 2] | 0) {
  zg(e, b);
  if ((a[e >> 0] | 0) != 0 ? (f = c[b + ((c[(c[b >> 2] | 0) + -12 >> 2] | 0) + 24) >> 2] | 0, (ub[c[(c[f >> 2] | 0) + 24 >> 2] & 63](f) | 0) == -1) : 0) {
   f = b + ((c[(c[b >> 2] | 0) + -12 >> 2] | 0) + 16) | 0;
   c[f >> 2] = c[f >> 2] | 1;
  }
  Ag(e);
 }
 i = d;
 return b | 0;
}

function fg(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0;
 d = i;
 i = i + 16 | 0;
 e = d;
 if (c[b + ((c[(c[b >> 2] | 0) + -12 >> 2] | 0) + 24) >> 2] | 0) {
  pg(e, b);
  if ((a[e >> 0] | 0) != 0 ? (f = c[b + ((c[(c[b >> 2] | 0) + -12 >> 2] | 0) + 24) >> 2] | 0, (ub[c[(c[f >> 2] | 0) + 24 >> 2] & 63](f) | 0) == -1) : 0) {
   f = b + ((c[(c[b >> 2] | 0) + -12 >> 2] | 0) + 16) | 0;
   c[f >> 2] = c[f >> 2] | 1;
  }
  qg(e);
 }
 i = d;
 return b | 0;
}

function Uk(a, d, e, f) {
 a = a | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0;
 a : do if ((e | 0) == (f | 0)) g = f; else {
  a = e;
  while (1) {
   h = c[a >> 2] | 0;
   if (h >>> 0 >= 128) {
    g = a;
    break a;
   }
   if (!((b[(c[(Mc() | 0) >> 2] | 0) + (h << 1) >> 1] & d) << 16 >> 16)) {
    g = a;
    break a;
   }
   a = a + 4 | 0;
   if ((a | 0) == (f | 0)) {
    g = f;
    break;
   }
  }
 } while (0);
 return g | 0;
}

function pc(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0;
 a : do if ((b | 0) != (c[d + 8 >> 2] | 0)) {
  g = c[b + 12 >> 2] | 0;
  h = b + 16 + (g << 3) | 0;
  oc(b + 16 | 0, d, e, f);
  if ((g | 0) > 1) {
   g = d + 54 | 0;
   i = b + 24 | 0;
   do {
    oc(i, d, e, f);
    if (a[g >> 0] | 0) break a;
    i = i + 8 | 0;
   } while (i >>> 0 < h >>> 0);
  }
 } else lc(0, d, e, f); while (0);
 return;
}

function Fn(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0;
 d = a + 4 | 0;
 e = c[d >> 2] | 0;
 f = c[a >> 2] | 0;
 g = e - f >> 2;
 if (g >>> 0 >= b >>> 0) {
  if (g >>> 0 > b >>> 0 ? (h = f + (b << 2) | 0, (e | 0) != (h | 0)) : 0) {
   f = e;
   while (1) {
    e = f + -4 | 0;
    if ((e | 0) == (h | 0)) {
     i = e;
     break;
    } else f = e;
   }
   c[d >> 2] = i;
  }
 } else Un(a, b - g | 0);
 return;
}

function Wn(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0;
 c[b + 12 >> 2] = 0;
 c[b + 16 >> 2] = f;
 do if (d) {
  g = f + 112 | 0;
  if (d >>> 0 < 29 & (a[g >> 0] | 0) == 0) {
   a[g >> 0] = 1;
   h = f;
   break;
  } else {
   h = Ub(d << 2) | 0;
   break;
  }
 } else h = 0; while (0);
 c[b >> 2] = h;
 f = h + (e << 2) | 0;
 c[b + 8 >> 2] = f;
 c[b + 4 >> 2] = f;
 c[b + 12 >> 2] = h + (d << 2);
 return;
}

function Yd(b, c) {
 b = b | 0;
 c = c | 0;
 var d = 0, e = 0, f = 0, g = 0;
 d = a[b >> 0] | 0;
 e = a[c >> 0] | 0;
 if (d << 24 >> 24 == 0 ? 1 : d << 24 >> 24 != e << 24 >> 24) {
  f = d;
  g = e;
 } else {
  e = b;
  b = c;
  do {
   e = e + 1 | 0;
   b = b + 1 | 0;
   c = a[e >> 0] | 0;
   d = a[b >> 0] | 0;
  } while (!(c << 24 >> 24 == 0 ? 1 : c << 24 >> 24 != d << 24 >> 24));
  f = c;
  g = d;
 }
 return (f & 255) - (g & 255) | 0;
}

function lc(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0;
 b = d + 16 | 0;
 g = c[b >> 2] | 0;
 do if (g) {
  if ((g | 0) != (e | 0)) {
   h = d + 36 | 0;
   c[h >> 2] = (c[h >> 2] | 0) + 1;
   c[d + 24 >> 2] = 2;
   a[d + 54 >> 0] = 1;
   break;
  }
  h = d + 24 | 0;
  if ((c[h >> 2] | 0) == 2) c[h >> 2] = f;
 } else {
  c[b >> 2] = e;
  c[d + 24 >> 2] = f;
  c[d + 36 >> 2] = 1;
 } while (0);
 return;
}

function Gn(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0;
 d = c[b >> 2] | 0;
 do if (d) {
  e = b + 4 | 0;
  f = c[e >> 2] | 0;
  if ((f | 0) != (d | 0)) {
   g = f;
   while (1) {
    f = g + -4 | 0;
    if ((f | 0) == (d | 0)) {
     h = f;
     break;
    } else g = f;
   }
   c[e >> 2] = h;
  }
  if ((b + 16 | 0) == (d | 0)) {
   a[b + 128 >> 0] = 0;
   break;
  } else {
   Vb(d);
   break;
  }
 } while (0);
 return;
}

function di(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 4 | 0;
 k = h;
 l = a + 8 | 0;
 a = ub[c[(c[l >> 2] | 0) + 4 >> 2] & 63](l) | 0;
 c[k >> 2] = c[e >> 2];
 c[j >> 2] = c[k >> 2];
 k = (ym(d, j, a, a + 288 | 0, g, f, 0) | 0) - a | 0;
 if ((k | 0) < 288) c[b >> 2] = ((k | 0) / 12 | 0 | 0) % 12 | 0;
 i = h;
 return;
}

function Ci(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 4 | 0;
 k = h;
 l = a + 8 | 0;
 a = ub[c[(c[l >> 2] | 0) + 4 >> 2] & 63](l) | 0;
 c[k >> 2] = c[e >> 2];
 c[j >> 2] = c[k >> 2];
 k = (Jm(d, j, a, a + 288 | 0, g, f, 0) | 0) - a | 0;
 if ((k | 0) < 288) c[b >> 2] = ((k | 0) / 12 | 0 | 0) % 12 | 0;
 i = h;
 return;
}

function Wi(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0;
 j = i;
 i = i + 16 | 0;
 k = j;
 a[k >> 0] = 37;
 l = k + 1 | 0;
 a[l >> 0] = g;
 m = k + 2 | 0;
 a[m >> 0] = h;
 a[k + 3 >> 0] = 0;
 if (h << 24 >> 24) {
  a[l >> 0] = h;
  a[m >> 0] = g;
 }
 c[e >> 2] = d + (Ia(d | 0, (c[e >> 2] | 0) - d | 0, k | 0, f | 0, c[b >> 2] | 0) | 0);
 i = j;
 return;
}

function Nb(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0;
 b = i;
 i = i + 16 | 0;
 d = b;
 if ((a | 0) > 0) {
  e = 0;
  do {
   ud() | 0;
   e = e + 1 | 0;
  } while ((e | 0) != (a | 0));
 }
 a = sg(Pb(6728, 13696, 23) | 0, 4) | 0;
 c[d >> 2] = xf(a + (c[(c[a >> 2] | 0) + -12 >> 2] | 0) | 0) | 0;
 e = Mk(d, 9336) | 0;
 f = Ab[c[(c[e >> 2] | 0) + 28 >> 2] & 15](e, 10) | 0;
 Kk(d);
 ug(a, f) | 0;
 fg(a) | 0;
 i = b;
 return;
}

function bi(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 4 | 0;
 k = h;
 l = a + 8 | 0;
 a = ub[c[c[l >> 2] >> 2] & 63](l) | 0;
 c[k >> 2] = c[e >> 2];
 c[j >> 2] = c[k >> 2];
 k = (ym(d, j, a, a + 168 | 0, g, f, 0) | 0) - a | 0;
 if ((k | 0) < 168) c[b >> 2] = ((k | 0) / 12 | 0 | 0) % 7 | 0;
 i = h;
 return;
}

function Ai(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 4 | 0;
 k = h;
 l = a + 8 | 0;
 a = ub[c[c[l >> 2] >> 2] & 63](l) | 0;
 c[k >> 2] = c[e >> 2];
 c[j >> 2] = c[k >> 2];
 k = (Jm(d, j, a, a + 168 | 0, g, f, 0) | 0) - a | 0;
 if ((k | 0) < 168) c[b >> 2] = ((k | 0) / 12 | 0 | 0) % 7 | 0;
 i = h;
 return;
}

function om(b) {
 b = b | 0;
 if ((a[1848] | 0) == 0 ? (Aa(1848) | 0) != 0 : 0) {
  if ((a[1856] | 0) == 0 ? (Aa(1856) | 0) != 0 : 0) {
   b = 12236;
   do {
    c[b >> 2] = 0;
    c[b + 4 >> 2] = 0;
    c[b + 8 >> 2] = 0;
    b = b + 12 | 0;
   } while ((b | 0) != 12524);
   ab(106, 0, n | 0) | 0;
   Ga(1856);
  }
  mf(12236, 12524) | 0;
  mf(12248, 12536) | 0;
  c[3137] = 12236;
  Ga(1848);
 }
 return c[3137] | 0;
}

function nm(b) {
 b = b | 0;
 if ((a[1832] | 0) == 0 ? (Aa(1832) | 0) != 0 : 0) {
  if ((a[1840] | 0) == 0 ? (Aa(1840) | 0) != 0 : 0) {
   b = 11944;
   do {
    c[b >> 2] = 0;
    c[b + 4 >> 2] = 0;
    c[b + 8 >> 2] = 0;
    b = b + 12 | 0;
   } while ((b | 0) != 12232);
   ab(105, 0, n | 0) | 0;
   Ga(1840);
  }
  af(11944, 21683) | 0;
  af(11956, 21686) | 0;
  c[3058] = 11944;
  Ga(1832);
 }
 return c[3058] | 0;
}

function Tk(a, d, e, f) {
 a = a | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0;
 a : do if ((e | 0) == (f | 0)) g = f; else {
  a = e;
  while (1) {
   h = c[a >> 2] | 0;
   if (h >>> 0 < 128 ? (b[(c[(Mc() | 0) >> 2] | 0) + (h << 1) >> 1] & d) << 16 >> 16 != 0 : 0) {
    g = a;
    break a;
   }
   a = a + 4 | 0;
   if ((a | 0) == (f | 0)) {
    g = f;
    break;
   }
  }
 } while (0);
 return g | 0;
}

function fi(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0;
 a = i;
 i = i + 16 | 0;
 h = a + 4 | 0;
 j = a;
 c[j >> 2] = c[e >> 2];
 c[h >> 2] = c[j >> 2];
 j = Wm(d, h, f, g, 4) | 0;
 if (!(c[f >> 2] & 4)) {
  if ((j | 0) < 69) k = j + 2e3 | 0; else k = (j + -69 | 0) >>> 0 < 31 ? j + 1900 | 0 : j;
  c[b >> 2] = k + -1900;
 }
 i = a;
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
 a = i;
 i = i + 16 | 0;
 h = a + 4 | 0;
 j = a;
 c[j >> 2] = c[e >> 2];
 c[h >> 2] = c[j >> 2];
 j = Xm(d, h, f, g, 4) | 0;
 if (!(c[f >> 2] & 4)) {
  if ((j | 0) < 69) k = j + 2e3 | 0; else k = (j + -69 | 0) >>> 0 < 31 ? j + 1900 | 0 : j;
  c[b >> 2] = k + -1900;
 }
 i = a;
 return;
}

function Sk(a, d, f, g) {
 a = a | 0;
 d = d | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, i = 0, j = 0;
 a = (f - d | 0) >>> 2;
 if ((d | 0) != (f | 0)) {
  h = d;
  i = g;
  while (1) {
   g = c[h >> 2] | 0;
   if (g >>> 0 < 128) j = e[(c[(Mc() | 0) >> 2] | 0) + (g << 1) >> 1] | 0; else j = 0;
   b[i >> 1] = j;
   h = h + 4 | 0;
   if ((h | 0) == (f | 0)) break; else i = i + 2 | 0;
  }
 }
 return d + (a << 2) | 0;
}

function sh(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 f = i;
 i = i + 16 | 0;
 g = f;
 h = xf(b) | 0;
 c[g >> 2] = h;
 b = Mk(g, 9328) | 0;
 yb[c[(c[b >> 2] | 0) + 48 >> 2] & 7](b, 19968, 19994, d) | 0;
 d = Mk(g, 9484) | 0;
 c[e >> 2] = ub[c[(c[d >> 2] | 0) + 16 >> 2] & 63](d) | 0;
 rb[c[(c[d >> 2] | 0) + 20 >> 2] & 63](a, d);
 ko(h) | 0;
 i = f;
 return;
}

function ph(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0;
 g = i;
 i = i + 16 | 0;
 h = g;
 j = xf(d) | 0;
 c[h >> 2] = j;
 d = Mk(h, 9336) | 0;
 yb[c[(c[d >> 2] | 0) + 32 >> 2] & 7](d, 19968, 19994, e) | 0;
 e = Mk(h, 9476) | 0;
 a[f >> 0] = ub[c[(c[e >> 2] | 0) + 16 >> 2] & 63](e) | 0;
 rb[c[(c[e >> 2] | 0) + 20 >> 2] & 63](b, e);
 ko(j) | 0;
 i = g;
 return;
}

function cf(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 f = a[b >> 0] | 0;
 g = (f & 1) == 0;
 if (g) h = (f & 255) >>> 1; else h = c[b + 4 >> 2] | 0;
 do if (h >>> 0 >= d >>> 0) if (g) {
  a[b + 1 + d >> 0] = 0;
  a[b >> 0] = d << 1;
  break;
 } else {
  a[(c[b + 8 >> 2] | 0) + d >> 0] = 0;
  c[b + 4 >> 2] = d;
  break;
 } else df(b, d - h | 0, e) | 0; while (0);
 return;
}

function _h(a, b, d, e, f, g) {
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
 l = h + 4 | 0;
 m = h;
 c[l >> 2] = c[b >> 2];
 c[m >> 2] = c[d >> 2];
 c[k >> 2] = c[l >> 2];
 c[j >> 2] = c[m >> 2];
 m = Wh(a, k, j, e, f, g, 21377, 21385) | 0;
 i = h;
 return m | 0;
}

function xi(a, b, d, e, f, g) {
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
 l = h + 4 | 0;
 m = h;
 c[l >> 2] = c[b >> 2];
 c[m >> 2] = c[d >> 2];
 c[k >> 2] = c[l >> 2];
 c[j >> 2] = c[m >> 2];
 m = ti(a, k, j, e, f, g, 9904, 9936) | 0;
 i = h;
 return m | 0;
}

function Dk(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0;
 c[a >> 2] = 9312;
 b = a + 8 | 0;
 d = a + 12 | 0;
 e = c[b >> 2] | 0;
 if ((c[d >> 2] | 0) != (e | 0)) {
  f = e;
  e = 0;
  do {
   g = c[f + (e << 2) >> 2] | 0;
   if (g) ko(g) | 0;
   e = e + 1 | 0;
   f = c[b >> 2] | 0;
  } while (e >>> 0 < (c[d >> 2] | 0) - f >> 2 >>> 0);
 }
 $e(a + 144 | 0);
 Gn(b);
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
 j = h + 8 | 0;
 k = h + 4 | 0;
 l = h;
 m = xf(e) | 0;
 c[k >> 2] = m;
 e = Mk(k, 9328) | 0;
 ko(m) | 0;
 c[l >> 2] = c[d >> 2];
 c[j >> 2] = c[l >> 2];
 Ai(a, g + 24 | 0, b, j, f, e);
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
 k = h + 4 | 0;
 l = h;
 m = xf(e) | 0;
 c[k >> 2] = m;
 e = Mk(k, 9336) | 0;
 ko(m) | 0;
 c[l >> 2] = c[d >> 2];
 c[j >> 2] = c[l >> 2];
 fi(a, g + 20 | 0, b, j, f, e);
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
 k = h + 4 | 0;
 l = h;
 m = xf(e) | 0;
 c[k >> 2] = m;
 e = Mk(k, 9336) | 0;
 ko(m) | 0;
 c[l >> 2] = c[d >> 2];
 c[j >> 2] = c[l >> 2];
 di(a, g + 16 | 0, b, j, f, e);
 i = h;
 return c[b >> 2] | 0;
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
 j = h + 8 | 0;
 k = h + 4 | 0;
 l = h;
 m = xf(e) | 0;
 c[k >> 2] = m;
 e = Mk(k, 9336) | 0;
 ko(m) | 0;
 c[l >> 2] = c[d >> 2];
 c[j >> 2] = c[l >> 2];
 bi(a, g + 24 | 0, b, j, f, e);
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
 k = h + 4 | 0;
 l = h;
 m = xf(e) | 0;
 c[k >> 2] = m;
 e = Mk(k, 9328) | 0;
 ko(m) | 0;
 c[l >> 2] = c[d >> 2];
 c[j >> 2] = c[l >> 2];
 Ei(a, g + 20 | 0, b, j, f, e);
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
 k = h + 4 | 0;
 l = h;
 m = xf(e) | 0;
 c[k >> 2] = m;
 e = Mk(k, 9328) | 0;
 ko(m) | 0;
 c[l >> 2] = c[d >> 2];
 c[j >> 2] = c[l >> 2];
 Ci(a, g + 16 | 0, b, j, f, e);
 i = h;
 return c[b >> 2] | 0;
}

function ze(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 f = i;
 i = i + 16 | 0;
 g = f + 4 | 0;
 h = f;
 Qf(b);
 c[b >> 2] = 7680;
 c[b + 32 >> 2] = d;
 Jk(g, b + 4 | 0);
 c[h >> 2] = c[g >> 2];
 g = Mk(h, 9404) | 0;
 Kk(h);
 c[b + 36 >> 2] = g;
 c[b + 40 >> 2] = e;
 a[b + 44 >> 0] = (ub[c[(c[g >> 2] | 0) + 28 >> 2] & 63](g) | 0) & 1;
 i = f;
 return;
}

function xe(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 f = i;
 i = i + 16 | 0;
 g = f + 4 | 0;
 h = f;
 Bf(b);
 c[b >> 2] = 7808;
 c[b + 32 >> 2] = d;
 Jk(g, b + 4 | 0);
 c[h >> 2] = c[g >> 2];
 g = Mk(h, 9396) | 0;
 Kk(h);
 c[b + 36 >> 2] = g;
 c[b + 40 >> 2] = e;
 a[b + 44 >> 0] = (ub[c[(c[g >> 2] | 0) + 28 >> 2] & 63](g) | 0) & 1;
 i = f;
 return;
}

function Sd(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0;
 d = b + 74 | 0;
 e = a[d >> 0] | 0;
 a[d >> 0] = e + 255 | e;
 e = c[b >> 2] | 0;
 if (!(e & 8)) {
  c[b + 8 >> 2] = 0;
  c[b + 4 >> 2] = 0;
  d = c[b + 44 >> 2] | 0;
  c[b + 28 >> 2] = d;
  c[b + 20 >> 2] = d;
  c[b + 16 >> 2] = d + (c[b + 48 >> 2] | 0);
  f = 0;
 } else {
  c[b >> 2] = e | 32;
  f = -1;
 }
 return f | 0;
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
 l = h + 4 | 0;
 m = h;
 c[l >> 2] = c[b >> 2];
 c[m >> 2] = c[d >> 2];
 c[k >> 2] = c[l >> 2];
 c[j >> 2] = c[m >> 2];
 m = Sm(a, k, j, e, f, g) | 0;
 i = h;
 return m | 0;
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
 l = h + 4 | 0;
 m = h;
 c[l >> 2] = c[b >> 2];
 c[m >> 2] = c[d >> 2];
 c[k >> 2] = c[l >> 2];
 c[j >> 2] = c[m >> 2];
 m = Rm(a, k, j, e, f, g) | 0;
 i = h;
 return m | 0;
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
 l = h + 4 | 0;
 m = h;
 c[l >> 2] = c[b >> 2];
 c[m >> 2] = c[d >> 2];
 c[k >> 2] = c[l >> 2];
 c[j >> 2] = c[m >> 2];
 m = Qm(a, k, j, e, f, g) | 0;
 i = h;
 return m | 0;
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
 l = h + 4 | 0;
 m = h;
 c[l >> 2] = c[b >> 2];
 c[m >> 2] = c[d >> 2];
 c[k >> 2] = c[l >> 2];
 c[j >> 2] = c[m >> 2];
 m = Pm(a, k, j, e, f, g) | 0;
 i = h;
 return m | 0;
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
 l = h + 4 | 0;
 m = h;
 c[l >> 2] = c[b >> 2];
 c[m >> 2] = c[d >> 2];
 c[k >> 2] = c[l >> 2];
 c[j >> 2] = c[m >> 2];
 m = Om(a, k, j, e, f, g) | 0;
 i = h;
 return m | 0;
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
 l = h + 4 | 0;
 m = h;
 c[l >> 2] = c[b >> 2];
 c[m >> 2] = c[d >> 2];
 c[k >> 2] = c[l >> 2];
 c[j >> 2] = c[m >> 2];
 m = Nm(a, k, j, e, f, g) | 0;
 i = h;
 return m | 0;
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
 l = h + 4 | 0;
 m = h;
 c[l >> 2] = c[b >> 2];
 c[m >> 2] = c[d >> 2];
 c[k >> 2] = c[l >> 2];
 c[j >> 2] = c[m >> 2];
 m = Mm(a, k, j, e, f, g) | 0;
 i = h;
 return m | 0;
}

function fh(a, b, d, e, f, g) {
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
 l = h + 4 | 0;
 m = h;
 c[l >> 2] = c[b >> 2];
 c[m >> 2] = c[d >> 2];
 c[k >> 2] = c[l >> 2];
 c[j >> 2] = c[m >> 2];
 m = Lm(a, k, j, e, f, g) | 0;
 i = h;
 return m | 0;
}

function eh(a, b, d, e, f, g) {
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
 l = h + 4 | 0;
 m = h;
 c[l >> 2] = c[b >> 2];
 c[m >> 2] = c[d >> 2];
 c[k >> 2] = c[l >> 2];
 c[j >> 2] = c[m >> 2];
 m = Km(a, k, j, e, f, g) | 0;
 i = h;
 return m | 0;
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
 l = h + 4 | 0;
 m = h;
 c[l >> 2] = c[b >> 2];
 c[m >> 2] = c[d >> 2];
 c[k >> 2] = c[l >> 2];
 c[j >> 2] = c[m >> 2];
 m = Hm(a, k, j, e, f, g) | 0;
 i = h;
 return m | 0;
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
 l = h + 4 | 0;
 m = h;
 c[l >> 2] = c[b >> 2];
 c[m >> 2] = c[d >> 2];
 c[k >> 2] = c[l >> 2];
 c[j >> 2] = c[m >> 2];
 m = Gm(a, k, j, e, f, g) | 0;
 i = h;
 return m | 0;
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
 l = h + 4 | 0;
 m = h;
 c[l >> 2] = c[b >> 2];
 c[m >> 2] = c[d >> 2];
 c[k >> 2] = c[l >> 2];
 c[j >> 2] = c[m >> 2];
 m = Fm(a, k, j, e, f, g) | 0;
 i = h;
 return m | 0;
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
 l = h + 4 | 0;
 m = h;
 c[l >> 2] = c[b >> 2];
 c[m >> 2] = c[d >> 2];
 c[k >> 2] = c[l >> 2];
 c[j >> 2] = c[m >> 2];
 m = Em(a, k, j, e, f, g) | 0;
 i = h;
 return m | 0;
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
 l = h + 4 | 0;
 m = h;
 c[l >> 2] = c[b >> 2];
 c[m >> 2] = c[d >> 2];
 c[k >> 2] = c[l >> 2];
 c[j >> 2] = c[m >> 2];
 m = Dm(a, k, j, e, f, g) | 0;
 i = h;
 return m | 0;
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
 l = h + 4 | 0;
 m = h;
 c[l >> 2] = c[b >> 2];
 c[m >> 2] = c[d >> 2];
 c[k >> 2] = c[l >> 2];
 c[j >> 2] = c[m >> 2];
 m = Cm(a, k, j, e, f, g) | 0;
 i = h;
 return m | 0;
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
 l = h + 4 | 0;
 m = h;
 c[l >> 2] = c[b >> 2];
 c[m >> 2] = c[d >> 2];
 c[k >> 2] = c[l >> 2];
 c[j >> 2] = c[m >> 2];
 m = Bm(a, k, j, e, f, g) | 0;
 i = h;
 return m | 0;
}

function Sg(a, b, d, e, f, g) {
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
 l = h + 4 | 0;
 m = h;
 c[l >> 2] = c[b >> 2];
 c[m >> 2] = c[d >> 2];
 c[k >> 2] = c[l >> 2];
 c[j >> 2] = c[m >> 2];
 m = Am(a, k, j, e, f, g) | 0;
 i = h;
 return m | 0;
}

function Rg(a, b, d, e, f, g) {
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
 l = h + 4 | 0;
 m = h;
 c[l >> 2] = c[b >> 2];
 c[m >> 2] = c[d >> 2];
 c[k >> 2] = c[l >> 2];
 c[j >> 2] = c[m >> 2];
 m = zm(a, k, j, e, f, g) | 0;
 i = h;
 return m | 0;
}

function ji(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 a = i;
 i = i + 16 | 0;
 h = a + 4 | 0;
 j = a;
 c[j >> 2] = c[e >> 2];
 c[h >> 2] = c[j >> 2];
 j = Wm(d, h, f, g, 2) | 0;
 g = c[f >> 2] | 0;
 if ((j + -1 | 0) >>> 0 < 12 & (g & 4 | 0) == 0) c[b >> 2] = j; else c[f >> 2] = g | 4;
 i = a;
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
 a = i;
 i = i + 16 | 0;
 h = a + 4 | 0;
 j = a;
 c[j >> 2] = c[e >> 2];
 c[h >> 2] = c[j >> 2];
 j = Wm(d, h, f, g, 2) | 0;
 g = c[f >> 2] | 0;
 if ((j + -1 | 0) >>> 0 < 31 & (g & 4 | 0) == 0) c[b >> 2] = j; else c[f >> 2] = g | 4;
 i = a;
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
 a = i;
 i = i + 16 | 0;
 h = a + 4 | 0;
 j = a;
 c[j >> 2] = c[e >> 2];
 c[h >> 2] = c[j >> 2];
 j = Xm(d, h, f, g, 2) | 0;
 g = c[f >> 2] | 0;
 if ((j + -1 | 0) >>> 0 < 12 & (g & 4 | 0) == 0) c[b >> 2] = j; else c[f >> 2] = g | 4;
 i = a;
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
 a = i;
 i = i + 16 | 0;
 h = a + 4 | 0;
 j = a;
 c[j >> 2] = c[e >> 2];
 c[h >> 2] = c[j >> 2];
 j = Xm(d, h, f, g, 2) | 0;
 g = c[f >> 2] | 0;
 if ((j + -1 | 0) >>> 0 < 31 & (g & 4 | 0) == 0) c[b >> 2] = j; else c[f >> 2] = g | 4;
 i = a;
 return;
}

function Ck(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 jo(b);
 e = a + 8 | 0;
 f = c[e >> 2] | 0;
 if ((c[a + 12 >> 2] | 0) - f >> 2 >>> 0 > d >>> 0) g = f; else {
  Fn(e, d + 1 | 0);
  g = c[e >> 2] | 0;
 }
 f = c[g + (d << 2) >> 2] | 0;
 if (!f) h = g; else {
  ko(f) | 0;
  h = c[e >> 2] | 0;
 }
 c[h + (d << 2) >> 2] = b;
 return;
}

function yd(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0;
 f = $(d, b) | 0;
 if ((c[e + 76 >> 2] | 0) > -1) {
  g = (Id(e) | 0) == 0;
  h = xd(a, f, e) | 0;
  if (g) i = h; else {
   Jd(e);
   i = h;
  }
 } else i = xd(a, f, e) | 0;
 if ((i | 0) == (f | 0)) j = d; else j = (i >>> 0) / (b >>> 0) | 0;
 return j | 0;
}

function Nd(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 e = i;
 i = i + 32 | 0;
 f = e;
 g = e + 20 | 0;
 c[f >> 2] = c[a + 60 >> 2];
 c[f + 4 >> 2] = 0;
 c[f + 8 >> 2] = b;
 c[f + 12 >> 2] = g;
 c[f + 16 >> 2] = d;
 if ((Vc(ib(140, f | 0) | 0) | 0) < 0) {
  c[g >> 2] = -1;
  h = -1;
 } else h = c[g >> 2] | 0;
 i = e;
 return h | 0;
}

function li(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 a = i;
 i = i + 16 | 0;
 h = a + 4 | 0;
 j = a;
 c[j >> 2] = c[e >> 2];
 c[h >> 2] = c[j >> 2];
 j = Wm(d, h, f, g, 2) | 0;
 g = c[f >> 2] | 0;
 if ((j | 0) < 13 & (g & 4 | 0) == 0) c[b >> 2] = j + -1; else c[f >> 2] = g | 4;
 i = a;
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
 a = i;
 i = i + 16 | 0;
 h = a + 4 | 0;
 j = a;
 c[j >> 2] = c[e >> 2];
 c[h >> 2] = c[j >> 2];
 j = Xm(d, h, f, g, 2) | 0;
 g = c[f >> 2] | 0;
 if ((j | 0) < 13 & (g & 4 | 0) == 0) c[b >> 2] = j + -1; else c[f >> 2] = g | 4;
 i = a;
 return;
}

function Qd(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0;
 e = a + 84 | 0;
 f = c[e >> 2] | 0;
 g = d + 256 | 0;
 h = Xd(f, 0, g) | 0;
 i = (h | 0) == 0 ? g : h - f | 0;
 h = i >>> 0 < d >>> 0 ? i : d;
 ro(b | 0, f | 0, h | 0) | 0;
 c[a + 4 >> 2] = f + h;
 b = f + i | 0;
 c[a + 8 >> 2] = b;
 c[e >> 2] = b;
 return h | 0;
}

function ki(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 a = i;
 i = i + 16 | 0;
 h = a + 4 | 0;
 j = a;
 c[j >> 2] = c[e >> 2];
 c[h >> 2] = c[j >> 2];
 j = Wm(d, h, f, g, 3) | 0;
 g = c[f >> 2] | 0;
 if ((j | 0) < 366 & (g & 4 | 0) == 0) c[b >> 2] = j; else c[f >> 2] = g | 4;
 i = a;
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
 a = i;
 i = i + 16 | 0;
 h = a + 4 | 0;
 j = a;
 c[j >> 2] = c[e >> 2];
 c[h >> 2] = c[j >> 2];
 j = Xm(d, h, f, g, 3) | 0;
 g = c[f >> 2] | 0;
 if ((j | 0) < 366 & (g & 4 | 0) == 0) c[b >> 2] = j; else c[f >> 2] = g | 4;
 i = a;
 return;
}

function pi(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 a = i;
 i = i + 16 | 0;
 h = a + 4 | 0;
 j = a;
 c[j >> 2] = c[e >> 2];
 c[h >> 2] = c[j >> 2];
 j = Wm(d, h, f, g, 2) | 0;
 g = c[f >> 2] | 0;
 if ((j | 0) < 61 & (g & 4 | 0) == 0) c[b >> 2] = j; else c[f >> 2] = g | 4;
 i = a;
 return;
}

function mi(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 a = i;
 i = i + 16 | 0;
 h = a + 4 | 0;
 j = a;
 c[j >> 2] = c[e >> 2];
 c[h >> 2] = c[j >> 2];
 j = Wm(d, h, f, g, 2) | 0;
 g = c[f >> 2] | 0;
 if ((j | 0) < 60 & (g & 4 | 0) == 0) c[b >> 2] = j; else c[f >> 2] = g | 4;
 i = a;
 return;
}

function ii(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 a = i;
 i = i + 16 | 0;
 h = a + 4 | 0;
 j = a;
 c[j >> 2] = c[e >> 2];
 c[h >> 2] = c[j >> 2];
 j = Wm(d, h, f, g, 2) | 0;
 g = c[f >> 2] | 0;
 if ((j | 0) < 24 & (g & 4 | 0) == 0) c[b >> 2] = j; else c[f >> 2] = g | 4;
 i = a;
 return;
}

function al(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, i = 0;
 b = (e - d | 0) >>> 2;
 if ((d | 0) != (e | 0)) {
  h = d;
  i = g;
  while (1) {
   g = c[h >> 2] | 0;
   a[i >> 0] = g >>> 0 < 128 ? g & 255 : f;
   h = h + 4 | 0;
   if ((h | 0) == (e | 0)) break; else i = i + 1 | 0;
  }
 }
 return d + (b << 2) | 0;
}

function Oi(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 a = i;
 i = i + 16 | 0;
 h = a + 4 | 0;
 j = a;
 c[j >> 2] = c[e >> 2];
 c[h >> 2] = c[j >> 2];
 j = Xm(d, h, f, g, 2) | 0;
 g = c[f >> 2] | 0;
 if ((j | 0) < 61 & (g & 4 | 0) == 0) c[b >> 2] = j; else c[f >> 2] = g | 4;
 i = a;
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
 a = i;
 i = i + 16 | 0;
 h = a + 4 | 0;
 j = a;
 c[j >> 2] = c[e >> 2];
 c[h >> 2] = c[j >> 2];
 j = Xm(d, h, f, g, 2) | 0;
 g = c[f >> 2] | 0;
 if ((j | 0) < 60 & (g & 4 | 0) == 0) c[b >> 2] = j; else c[f >> 2] = g | 4;
 i = a;
 return;
}

function Hi(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 a = i;
 i = i + 16 | 0;
 h = a + 4 | 0;
 j = a;
 c[j >> 2] = c[e >> 2];
 c[h >> 2] = c[j >> 2];
 j = Xm(d, h, f, g, 2) | 0;
 g = c[f >> 2] | 0;
 if ((j | 0) < 24 & (g & 4 | 0) == 0) c[b >> 2] = j; else c[f >> 2] = g | 4;
 i = a;
 return;
}

function qi(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 a = i;
 i = i + 16 | 0;
 h = a + 4 | 0;
 j = a;
 c[j >> 2] = c[e >> 2];
 c[h >> 2] = c[j >> 2];
 j = Wm(d, h, f, g, 1) | 0;
 g = c[f >> 2] | 0;
 if ((j | 0) < 7 & (g & 4 | 0) == 0) c[b >> 2] = j; else c[f >> 2] = g | 4;
 i = a;
 return;
}

function Pi(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 a = i;
 i = i + 16 | 0;
 h = a + 4 | 0;
 j = a;
 c[j >> 2] = c[e >> 2];
 c[h >> 2] = c[j >> 2];
 j = Xm(d, h, f, g, 1) | 0;
 g = c[f >> 2] | 0;
 if ((j | 0) < 7 & (g & 4 | 0) == 0) c[b >> 2] = j; else c[f >> 2] = g | 4;
 i = a;
 return;
}

function _e(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 if (d >>> 0 > 4294967279) Gc(b);
 if (d >>> 0 < 11) {
  a[b >> 0] = d << 1;
  f = b + 1 | 0;
 } else {
  g = d + 16 & -16;
  h = Ub(g) | 0;
  c[b + 8 >> 2] = h;
  c[b >> 2] = g | 1;
  c[b + 4 >> 2] = d;
  f = h;
 }
 oo(f | 0, e | 0, d | 0) | 0;
 a[f + d >> 0] = 0;
 return;
}

function Ze(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 if (e >>> 0 > 4294967279) Gc(b);
 if (e >>> 0 < 11) {
  a[b >> 0] = e << 1;
  f = b + 1 | 0;
 } else {
  g = e + 16 & -16;
  h = Ub(g) | 0;
  c[b + 8 >> 2] = h;
  c[b >> 2] = g | 1;
  c[b + 4 >> 2] = e;
  f = h;
 }
 ro(f | 0, d | 0, e | 0) | 0;
 a[f + e >> 0] = 0;
 return;
}

function Ng(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 if ((b | 0) == (d | 0)) e = 0; else {
  a = 0;
  f = b;
  while (1) {
   b = (c[f >> 2] | 0) + (a << 4) | 0;
   g = b & -268435456;
   h = (g >>> 24 | g) ^ b;
   f = f + 4 | 0;
   if ((f | 0) == (d | 0)) {
    e = h;
    break;
   } else a = h;
  }
 }
 return e | 0;
}

function Ig(b, c, d) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 if ((c | 0) == (d | 0)) e = 0; else {
  b = 0;
  f = c;
  while (1) {
   c = (a[f >> 0] | 0) + (b << 4) | 0;
   g = c & -268435456;
   h = (g >>> 24 | g) ^ c;
   f = f + 1 | 0;
   if ((f | 0) == (d | 0)) {
    e = h;
    break;
   } else b = h;
  }
 }
 return e | 0;
}

function Yk(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 a = (d - b | 0) >>> 2;
 if ((b | 0) != (d | 0)) {
  e = b;
  do {
   f = c[e >> 2] | 0;
   if (f >>> 0 < 128) g = c[(c[(Nc() | 0) >> 2] | 0) + (f << 2) >> 2] | 0; else g = f;
   c[e >> 2] = g;
   e = e + 4 | 0;
  } while ((e | 0) != (d | 0));
 }
 return b + (a << 2) | 0;
}

function Wk(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 a = (d - b | 0) >>> 2;
 if ((b | 0) != (d | 0)) {
  e = b;
  do {
   f = c[e >> 2] | 0;
   if (f >>> 0 < 128) g = c[(c[(Oc() | 0) >> 2] | 0) + (f << 2) >> 2] | 0; else g = f;
   c[e >> 2] = g;
   e = e + 4 | 0;
  } while ((e | 0) != (d | 0));
 }
 return b + (a << 2) | 0;
}

function kf(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 if (d >>> 0 > 1073741807) Gc(b);
 if (d >>> 0 < 2) {
  a[b >> 0] = d << 1;
  f = b + 4 | 0;
 } else {
  g = d + 4 & -4;
  h = Ub(g << 2) | 0;
  c[b + 8 >> 2] = h;
  c[b >> 2] = g | 1;
  c[b + 4 >> 2] = d;
  f = h;
 }
 be(f, e, d) | 0;
 c[f + (d << 2) >> 2] = 0;
 return;
}

function jf(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 if (e >>> 0 > 1073741807) Gc(b);
 if (e >>> 0 < 2) {
  a[b >> 0] = e << 1;
  f = b + 4 | 0;
 } else {
  g = e + 4 & -4;
  h = Ub(g << 2) | 0;
  c[b + 8 >> 2] = h;
  c[b >> 2] = g | 1;
  c[b + 4 >> 2] = e;
  f = h;
 }
 $d(f, d, e) | 0;
 c[f + (e << 2) >> 2] = 0;
 return;
}

function Hd(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 e = i;
 i = i + 112 | 0;
 f = e;
 g = f;
 h = g + 112 | 0;
 do {
  c[g >> 2] = 0;
  g = g + 4 | 0;
 } while ((g | 0) < (h | 0));
 c[f + 32 >> 2] = 26;
 c[f + 44 >> 2] = a;
 c[f + 76 >> 2] = -1;
 c[f + 84 >> 2] = a;
 a = Fd(f, b, d) | 0;
 i = e;
 return a | 0;
}

function tc(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, i = 0, j = 0;
 h = c[a + 4 >> 2] | 0;
 i = h >> 8;
 if (!(h & 1)) j = i; else j = c[(c[e >> 2] | 0) + i >> 2] | 0;
 i = c[a >> 2] | 0;
 zb[c[(c[i >> 2] | 0) + 20 >> 2] & 7](i, b, d, e + j | 0, (h & 2 | 0) != 0 ? f : 2, g);
 return;
}

function Ml(a, b, d, e, f, g, h, j) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0;
 b = i;
 i = i + 16 | 0;
 a = b + 4 | 0;
 k = b;
 c[a >> 2] = d;
 c[k >> 2] = g;
 l = Mn(d, e, a, g, h, k, 1114111, 0) | 0;
 c[f >> 2] = c[a >> 2];
 c[j >> 2] = c[k >> 2];
 i = b;
 return l | 0;
}

function Ll(a, b, d, e, f, g, h, j) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0;
 b = i;
 i = i + 16 | 0;
 a = b + 4 | 0;
 k = b;
 c[a >> 2] = d;
 c[k >> 2] = g;
 l = Ln(d, e, a, g, h, k, 1114111, 0) | 0;
 c[f >> 2] = c[a >> 2];
 c[j >> 2] = c[k >> 2];
 i = b;
 return l | 0;
}

function El(a, b, d, e, f, g, h, j) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0;
 b = i;
 i = i + 16 | 0;
 a = b + 4 | 0;
 k = b;
 c[a >> 2] = d;
 c[k >> 2] = g;
 l = Jn(d, e, a, g, h, k, 1114111, 0) | 0;
 c[f >> 2] = c[a >> 2];
 c[j >> 2] = c[k >> 2];
 i = b;
 return l | 0;
}

function Dl(a, b, d, e, f, g, h, j) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0;
 b = i;
 i = i + 16 | 0;
 a = b + 4 | 0;
 k = b;
 c[a >> 2] = d;
 c[k >> 2] = g;
 l = In(d, e, a, g, h, k, 1114111, 0) | 0;
 c[f >> 2] = c[a >> 2];
 c[j >> 2] = c[k >> 2];
 i = b;
 return l | 0;
}

function Ub(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0;
 b = (a | 0) == 0 ? 1 : a;
 a = oe(b) | 0;
 a : do if (!a) {
  while (1) {
   d = bc() | 0;
   if (!d) break;
   wb[d & 3]();
   d = oe(b) | 0;
   if (d) {
    e = d;
    break a;
   }
  }
  d = Da(4) | 0;
  c[d >> 2] = 2156;
  bb(d | 0, 8, 1);
 } else e = a; while (0);
 return e | 0;
}

function Pd(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 f = i;
 i = i + 80 | 0;
 g = f;
 c[b + 36 >> 2] = 3;
 if ((c[b >> 2] & 64 | 0) == 0 ? (c[g >> 2] = c[b + 60 >> 2], c[g + 4 >> 2] = 21505, c[g + 8 >> 2] = f + 12, (Wa(54, g | 0) | 0) != 0) : 0) a[b + 75 >> 0] = -1;
 g = Od(b, d, e) | 0;
 i = f;
 return g | 0;
}

function yf(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0;
 c[a + 24 >> 2] = b;
 c[a + 16 >> 2] = (b | 0) == 0 & 1;
 c[a + 20 >> 2] = 0;
 c[a + 4 >> 2] = 4098;
 c[a + 12 >> 2] = 0;
 c[a + 8 >> 2] = 6;
 b = a + 28 | 0;
 d = a + 32 | 0;
 a = d + 40 | 0;
 do {
  c[d >> 2] = 0;
  d = d + 4 | 0;
 } while ((d | 0) < (a | 0));
 Ik(b);
 return;
}

function lo(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 gb(12852) | 0;
 if ((c[a >> 2] | 0) == 1) do xa(12880, 12852) | 0; while ((c[a >> 2] | 0) == 1);
 if (!(c[a >> 2] | 0)) {
  c[a >> 2] = 1;
  Ua(12852) | 0;
  qb[d & 127](b);
  gb(12852) | 0;
  c[a >> 2] = -1;
  Ua(12852) | 0;
  Za(12880) | 0;
 } else Ua(12852) | 0;
 return;
}

function uc(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0;
 g = c[a + 4 >> 2] | 0;
 h = g >> 8;
 if (!(g & 1)) i = h; else i = c[(c[d >> 2] | 0) + h >> 2] | 0;
 h = c[a >> 2] | 0;
 ob[c[(c[h >> 2] | 0) + 24 >> 2] & 3](h, b, d + i | 0, (g & 2 | 0) != 0 ? e : 2, f);
 return;
}

function hl(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0;
 if ((d | 0) != (e | 0)) {
  b = d;
  do {
   d = a[b >> 0] | 0;
   if (d << 24 >> 24 > -1) f = c[(c[(Nc() | 0) >> 2] | 0) + (d << 24 >> 24 << 2) >> 2] & 255; else f = d;
   a[b >> 0] = f;
   b = b + 1 | 0;
  } while ((b | 0) != (e | 0));
 }
 return e | 0;
}

function fl(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0;
 if ((d | 0) != (e | 0)) {
  b = d;
  do {
   d = a[b >> 0] | 0;
   if (d << 24 >> 24 > -1) f = c[(c[(Oc() | 0) >> 2] | 0) + (d << 24 >> 24 << 2) >> 2] & 255; else f = d;
   a[b >> 0] = f;
   b = b + 1 | 0;
  } while ((b | 0) != (e | 0));
 }
 return e | 0;
}

function qe(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0;
 if (a) {
  d = $(b, a) | 0;
  if ((b | a) >>> 0 > 65535) e = ((d >>> 0) / (a >>> 0) | 0 | 0) == (b | 0) ? d : -1; else e = d;
 } else e = 0;
 d = oe(e) | 0;
 if (!d) return d | 0;
 if (!(c[d + -4 >> 2] & 3)) return d | 0;
 oo(d | 0, 0, e | 0) | 0;
 return d | 0;
}

function Tn(a) {
 a = a | 0;
 lf(12512);
 lf(12500);
 lf(12488);
 lf(12476);
 lf(12464);
 lf(12452);
 lf(12440);
 lf(12428);
 lf(12416);
 lf(12404);
 lf(12392);
 lf(12380);
 lf(12368);
 lf(12356);
 lf(12344);
 lf(12332);
 lf(12320);
 lf(12308);
 lf(12296);
 lf(12284);
 lf(12272);
 lf(12260);
 lf(12248);
 lf(12236);
 return;
}

function Sn(a) {
 a = a | 0;
 $e(12220);
 $e(12208);
 $e(12196);
 $e(12184);
 $e(12172);
 $e(12160);
 $e(12148);
 $e(12136);
 $e(12124);
 $e(12112);
 $e(12100);
 $e(12088);
 $e(12076);
 $e(12064);
 $e(12052);
 $e(12040);
 $e(12028);
 $e(12016);
 $e(12004);
 $e(11992);
 $e(11980);
 $e(11968);
 $e(11956);
 $e(11944);
 return;
}

function Rn(a) {
 a = a | 0;
 lf(11408);
 lf(11396);
 lf(11384);
 lf(11372);
 lf(11360);
 lf(11348);
 lf(11336);
 lf(11324);
 lf(11312);
 lf(11300);
 lf(11288);
 lf(11276);
 lf(11264);
 lf(11252);
 lf(11240);
 lf(11228);
 lf(11216);
 lf(11204);
 lf(11192);
 lf(11180);
 lf(11168);
 lf(11156);
 lf(11144);
 lf(11132);
 return;
}

function Qn(a) {
 a = a | 0;
 $e(11116);
 $e(11104);
 $e(11092);
 $e(11080);
 $e(11068);
 $e(11056);
 $e(11044);
 $e(11032);
 $e(11020);
 $e(11008);
 $e(10996);
 $e(10984);
 $e(10972);
 $e(10960);
 $e(10948);
 $e(10936);
 $e(10924);
 $e(10912);
 $e(10900);
 $e(10888);
 $e(10876);
 $e(10864);
 $e(10852);
 $e(10840);
 return;
}

function ye(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 f = i;
 i = i + 16 | 0;
 g = f + 4 | 0;
 h = f;
 Qf(b);
 c[b >> 2] = 7744;
 c[b + 32 >> 2] = d;
 c[b + 40 >> 2] = e;
 c[b + 48 >> 2] = -1;
 a[b + 52 >> 0] = 0;
 Jk(g, b + 4 | 0);
 c[h >> 2] = c[g >> 2];
 He(b, h);
 Kk(h);
 i = f;
 return;
}

function we(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 f = i;
 i = i + 16 | 0;
 g = f + 4 | 0;
 h = f;
 Bf(b);
 c[b >> 2] = 7872;
 c[b + 32 >> 2] = d;
 c[b + 40 >> 2] = e;
 c[b + 48 >> 2] = -1;
 a[b + 52 >> 0] = 0;
 Jk(g, b + 4 | 0);
 c[h >> 2] = c[g >> 2];
 Se(b, h);
 Kk(h);
 i = f;
 return;
}

function to(b, c, d) {
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
 } else ro(b, c, d) | 0;
 return b | 0;
}

function wo(a, b) {
 a = a | 0;
 b = b | 0;
 var c = 0, d = 0, e = 0, f = 0;
 c = a & 65535;
 d = b & 65535;
 e = $(d, c) | 0;
 f = a >>> 16;
 a = (e >>> 16) + ($(d, f) | 0) | 0;
 d = b >>> 16;
 b = $(d, c) | 0;
 return (D = (a >>> 16) + ($(d, f) | 0) + (((a & 65535) + b | 0) >>> 16) | 0, a + b << 16 | e & 65535 | 0) | 0;
}

function wf(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0;
 d = c[a + 40 >> 2] | 0;
 e = a + 32 | 0;
 f = a + 36 | 0;
 if (d) {
  g = d;
  do {
   g = g + -1 | 0;
   vb[c[(c[e >> 2] | 0) + (g << 2) >> 2] & 0](b, a, c[(c[f >> 2] | 0) + (g << 2) >> 2] | 0);
  } while ((g | 0) != 0);
 }
 return;
}

function oc(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 f = c[a + 4 >> 2] | 0;
 g = f >> 8;
 if (!(f & 1)) h = g; else h = c[(c[d >> 2] | 0) + g >> 2] | 0;
 g = c[a >> 2] | 0;
 Cb[c[(c[g >> 2] | 0) + 28 >> 2] & 7](g, b, d + h | 0, (f & 2 | 0) != 0 ? e : 2);
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
 a = i;
 i = i + 16 | 0;
 h = a + 4 | 0;
 j = a;
 c[j >> 2] = c[e >> 2];
 c[h >> 2] = c[j >> 2];
 j = Wm(d, h, f, g, 4) | 0;
 if (!(c[f >> 2] & 4)) c[b >> 2] = j + -1900;
 i = a;
 return;
}

function Qi(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 a = i;
 i = i + 16 | 0;
 h = a + 4 | 0;
 j = a;
 c[j >> 2] = c[e >> 2];
 c[h >> 2] = c[j >> 2];
 j = Xm(d, h, f, g, 4) | 0;
 if (!(c[f >> 2] & 4)) c[b >> 2] = j + -1900;
 i = a;
 return;
}

function ll(b, c, d, e, f) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 if ((c | 0) != (d | 0)) {
  b = c;
  c = f;
  while (1) {
   f = a[b >> 0] | 0;
   a[c >> 0] = f << 24 >> 24 > -1 ? f : e;
   b = b + 1 | 0;
   if ((b | 0) == (d | 0)) break; else c = c + 1 | 0;
  }
 }
 return d | 0;
}

function yl(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0;
 b = a + 8 | 0;
 a = bd(c[b >> 2] | 0) | 0;
 d = pd(0, 0, 4) | 0;
 if (a) bd(a) | 0;
 if (!d) {
  d = c[b >> 2] | 0;
  if (d) {
   b = bd(d) | 0;
   if (!b) e = 0; else {
    bd(b) | 0;
    e = 0;
   }
  } else e = 1;
 } else e = -1;
 return e | 0;
}

function vo(b) {
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

function Zn(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 if (d >>> 0 > 1073741823) Hc(b);
 e = b + 128 | 0;
 if (d >>> 0 < 29 & (a[e >> 0] | 0) == 0) {
  a[e >> 0] = 1;
  f = b + 16 | 0;
 } else f = Ub(d << 2) | 0;
 c[b + 4 >> 2] = f;
 c[b >> 2] = f;
 c[b + 8 >> 2] = f + (d << 2);
 return;
}

function Se(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = Mk(d, 9396) | 0;
 d = b + 36 | 0;
 c[d >> 2] = e;
 f = b + 44 | 0;
 c[f >> 2] = ub[c[(c[e >> 2] | 0) + 24 >> 2] & 63](e) | 0;
 e = c[d >> 2] | 0;
 a[b + 53 >> 0] = (ub[c[(c[e >> 2] | 0) + 28 >> 2] & 63](e) | 0) & 1;
 return;
}

function He(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = Mk(d, 9404) | 0;
 d = b + 36 | 0;
 c[d >> 2] = e;
 f = b + 44 | 0;
 c[f >> 2] = ub[c[(c[e >> 2] | 0) + 24 >> 2] & 63](e) | 0;
 e = c[d >> 2] | 0;
 a[b + 53 >> 0] = (ub[c[(c[e >> 2] | 0) + 28 >> 2] & 63](e) | 0) & 1;
 return;
}

function ac() {
 var a = 0, b = 0;
 a = Tb() | 0;
 if (((a | 0) != 0 ? (b = c[a >> 2] | 0, (b | 0) != 0) : 0) ? (a = b + 48 | 0, (c[a >> 2] & -256 | 0) == 1126902528 ? (c[a + 4 >> 2] | 0) == 1129074247 : 0) : 0) $b(c[b + 12 >> 2] | 0);
 b = c[536] | 0;
 c[536] = b + 0;
 $b(b);
}

function Tc(a, b) {
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

function Jb(b) {
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

function yc(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0;
 if ((a | 0) == (c[b + 8 >> 2] | 0)) rc(0, b, d, e, f); else {
  h = c[a + 8 >> 2] | 0;
  zb[c[(c[h >> 2] | 0) + 20 >> 2] & 7](h, b, d, e, f, g);
 }
 return;
}

function ke(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 e = a + 20 | 0;
 f = c[e >> 2] | 0;
 g = (c[a + 16 >> 2] | 0) - f | 0;
 a = g >>> 0 > d >>> 0 ? d : g;
 ro(f | 0, b | 0, a | 0) | 0;
 c[e >> 2] = (c[e >> 2] | 0) + a;
 return d | 0;
}

function Td(a) {
 a = a | 0;
 var b = 0, e = 0, f = 0;
 b = i;
 i = i + 16 | 0;
 e = b;
 if ((c[a + 8 >> 2] | 0) == 0 ? (Rd(a) | 0) != 0 : 0) f = -1; else if ((nb[c[a + 32 >> 2] & 31](a, e, 1) | 0) == 1) f = d[e >> 0] | 0; else f = -1;
 i = b;
 return f | 0;
}

function jl(b, c, d, e) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 if ((c | 0) != (d | 0)) {
  b = c;
  c = e;
  while (1) {
   a[c >> 0] = a[b >> 0] | 0;
   b = b + 1 | 0;
   if ((b | 0) == (d | 0)) break; else c = c + 1 | 0;
  }
 }
 return d | 0;
}

function Ac(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 e = i;
 i = i + 16 | 0;
 f = e;
 c[f >> 2] = c[d >> 2];
 g = nb[c[(c[a >> 2] | 0) + 16 >> 2] & 31](a, b, f) | 0;
 if (g) c[d >> 2] = c[f >> 2];
 i = e;
 return g & 1 | 0;
}

function $d(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0;
 if (d) {
  e = d;
  d = b;
  b = a;
  while (1) {
   e = e + -1 | 0;
   c[b >> 2] = c[d >> 2];
   if (!e) break; else {
    d = d + 4 | 0;
    b = b + 4 | 0;
   }
  }
 }
 return a | 0;
}

function zg(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 a[b >> 0] = 0;
 c[b + 4 >> 2] = d;
 e = c[(c[d >> 2] | 0) + -12 >> 2] | 0;
 if (!(c[d + (e + 16) >> 2] | 0)) {
  f = c[d + (e + 72) >> 2] | 0;
  if (f) kg(f) | 0;
  a[b >> 0] = 1;
 }
 return;
}

function ud() {
 var a = 0, b = 0, d = 0;
 a = 136;
 b = zo(c[a >> 2] | 0, c[a + 4 >> 2] | 0, 1284865837, 1481765933) | 0;
 a = po(b | 0, D | 0, 1, 0) | 0;
 b = D;
 d = 136;
 c[d >> 2] = a;
 c[d + 4 >> 2] = b;
 d = qo(a | 0, b | 0, 33) | 0;
 return d | 0;
}

function pg(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 a[b >> 0] = 0;
 c[b + 4 >> 2] = d;
 e = c[(c[d >> 2] | 0) + -12 >> 2] | 0;
 if (!(c[d + (e + 16) >> 2] | 0)) {
  f = c[d + (e + 72) >> 2] | 0;
  if (f) fg(f) | 0;
  a[b >> 0] = 1;
 }
 return;
}

function _k(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 if ((d | 0) != (e | 0)) {
  b = d;
  d = f;
  while (1) {
   c[d >> 2] = a[b >> 0];
   b = b + 1 | 0;
   if ((b | 0) == (e | 0)) break; else d = d + 4 | 0;
  }
 }
 return e | 0;
}

function cd(a, b) {
 a = +a;
 b = +b;
 var d = 0, e = 0, f = 0;
 h[k >> 3] = a;
 d = c[k >> 2] | 0;
 e = c[k + 4 >> 2] | 0;
 h[k >> 3] = b;
 f = c[k + 4 >> 2] & -2147483648 | e & 2147483647;
 c[k >> 2] = d;
 c[k + 4 >> 2] = f;
 return +(+h[k >> 3]);
}

function Hn(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0;
 b = a + 4 | 0;
 d = c[b >> 2] | 0;
 e = c[b + 4 >> 2] | 0;
 b = (c[a >> 2] | 0) + (e >> 1) | 0;
 if (!(e & 1)) f = d; else f = c[(c[b >> 2] | 0) + d >> 2] | 0;
 qb[f & 127](b);
 return;
}

function Tm(a, b, d, e, f) {
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
 f = bd(d) | 0;
 d = Gd(a, b, e, h) | 0;
 if (f) bd(f) | 0;
 i = g;
 return d | 0;
}

function Lk(a) {
 a = a | 0;
 var b = 0, d = 0;
 b = i;
 i = i + 16 | 0;
 d = b;
 if ((c[a >> 2] | 0) != -1) {
  c[d >> 2] = a;
  c[d + 4 >> 2] = 99;
  c[d + 8 >> 2] = 0;
  lo(a, d, 100);
 }
 i = b;
 return (c[a + 4 >> 2] | 0) + -1 | 0;
}

function nc(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0;
 if ((a | 0) == (c[b + 8 >> 2] | 0)) lc(0, b, d, e); else {
  f = c[a + 8 >> 2] | 0;
  Cb[c[(c[f >> 2] | 0) + 28 >> 2] & 7](f, b, d, e);
 }
 return;
}

function Oo(a, b, c, d, e, f, g, h, i) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 return xb[a & 15](b | 0, c | 0, d | 0, e | 0, f | 0, g | 0, h | 0, i | 0) | 0;
}

function Mb(a) {
 a = a | 0;
 var b = 0;
 switch (a | 0) {
 case 1:
  {
   b = 1;
   return b | 0;
  }
 case 0:
  {
   b = 0;
   return b | 0;
  }
 default:
  return (Mb(a + -1 | 0) | 0) + (Mb(a + -2 | 0) | 0) | 0;
 }
 return 0;
}

function im(a) {
 a = a | 0;
 var b = 0;
 switch (c[a + 4 >> 2] & 74 | 0) {
 case 64:
  {
   b = 8;
   break;
  }
 case 8:
  {
   b = 16;
   break;
  }
 case 0:
  {
   b = 0;
   break;
  }
 default:
  b = 10;
 }
 return b | 0;
}

function bl(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 c[b + 4 >> 2] = f + -1;
 c[b >> 2] = 9352;
 f = b + 8 | 0;
 c[f >> 2] = d;
 a[b + 12 >> 0] = e & 1;
 if (!d) c[f >> 2] = c[(Mc() | 0) >> 2];
 return;
}

function ad(b, c, d) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0;
 if (((a[c >> 0] | 0) != 0 ? (Yd(c, 21355) | 0) != 0 : 0) ? (Yd(c, 16831) | 0) != 0 : 0) e = 0; else if (!d) e = qe(1, 4) | 0; else e = d;
 return e | 0;
}

function Oe(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0;
 ub[c[(c[b >> 2] | 0) + 24 >> 2] & 63](b) | 0;
 e = Mk(d, 9396) | 0;
 c[b + 36 >> 2] = e;
 a[b + 44 >> 0] = (ub[c[(c[e >> 2] | 0) + 28 >> 2] & 63](e) | 0) & 1;
 return;
}

function De(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0;
 ub[c[(c[b >> 2] | 0) + 24 >> 2] & 63](b) | 0;
 e = Mk(d, 9404) | 0;
 c[b + 36 >> 2] = e;
 a[b + 44 >> 0] = (ub[c[(c[e >> 2] | 0) + 28 >> 2] & 63](e) | 0) & 1;
 return;
}

function Vn(a, b) {
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

function Ye(b, d) {
 b = b | 0;
 d = d | 0;
 if (!(a[d >> 0] & 1)) {
  c[b >> 2] = c[d >> 2];
  c[b + 4 >> 2] = c[d + 4 >> 2];
  c[b + 8 >> 2] = c[d + 8 >> 2];
 } else Ze(b, c[d + 8 >> 2] | 0, c[d + 4 >> 2] | 0);
 return;
}

function Um(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 f = i;
 i = i + 16 | 0;
 g = f;
 c[g >> 2] = e;
 e = bd(b) | 0;
 b = Dd(a, d, g) | 0;
 if (e) bd(e) | 0;
 i = f;
 return b | 0;
}

function Im(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 f = i;
 i = i + 16 | 0;
 g = f;
 c[g >> 2] = e;
 e = bd(b) | 0;
 b = Hd(a, d, g) | 0;
 if (e) bd(e) | 0;
 i = f;
 return b | 0;
}

function Zf(a) {
 a = a | 0;
 var b = 0, d = 0;
 if ((ub[c[(c[a >> 2] | 0) + 36 >> 2] & 63](a) | 0) == -1) b = -1; else {
  d = a + 12 | 0;
  a = c[d >> 2] | 0;
  c[d >> 2] = a + 4;
  b = c[a >> 2] | 0;
 }
 return b | 0;
}

function Kf(a) {
 a = a | 0;
 var b = 0, e = 0;
 if ((ub[c[(c[a >> 2] | 0) + 36 >> 2] & 63](a) | 0) == -1) b = -1; else {
  e = a + 12 | 0;
  a = c[e >> 2] | 0;
  c[e >> 2] = a + 1;
  b = d[a >> 0] | 0;
 }
 return b | 0;
}

function Bf(a) {
 a = a | 0;
 var b = 0;
 c[a >> 2] = 7936;
 Ik(a + 4 | 0);
 b = a + 8 | 0;
 c[b >> 2] = 0;
 c[b + 4 >> 2] = 0;
 c[b + 8 >> 2] = 0;
 c[b + 12 >> 2] = 0;
 c[b + 16 >> 2] = 0;
 c[b + 20 >> 2] = 0;
 return;
}

function Qf(a) {
 a = a | 0;
 var b = 0;
 c[a >> 2] = 8e3;
 Ik(a + 4 | 0);
 b = a + 8 | 0;
 c[b >> 2] = 0;
 c[b + 4 >> 2] = 0;
 c[b + 8 >> 2] = 0;
 c[b + 12 >> 2] = 0;
 c[b + 16 >> 2] = 0;
 c[b + 20 >> 2] = 0;
 return;
}

function Bo(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 f = i;
 i = i + 16 | 0;
 g = f | 0;
 Co(a, b, d, e, g) | 0;
 i = f;
 return (D = c[g + 4 >> 2] | 0, c[g >> 2] | 0) | 0;
}

function Vl(a, b) {
 a = a | 0;
 b = b | 0;
 c[a + 4 >> 2] = b + -1;
 c[a >> 2] = 9540;
 c[a + 8 >> 2] = 46;
 c[a + 12 >> 2] = 44;
 b = a + 16 | 0;
 c[b >> 2] = 0;
 c[b + 4 >> 2] = 0;
 c[b + 8 >> 2] = 0;
 return;
}

function Ul(b, d) {
 b = b | 0;
 d = d | 0;
 c[b + 4 >> 2] = d + -1;
 c[b >> 2] = 9500;
 a[b + 8 >> 0] = 46;
 a[b + 9 >> 0] = 44;
 d = b + 12 | 0;
 c[d >> 2] = 0;
 c[d + 4 >> 2] = 0;
 c[d + 8 >> 2] = 0;
 return;
}

function Tf(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 g = a;
 c[g >> 2] = 0;
 c[g + 4 >> 2] = 0;
 g = a + 8 | 0;
 c[g >> 2] = -1;
 c[g + 4 >> 2] = -1;
 return;
}

function Ef(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 g = a;
 c[g >> 2] = 0;
 c[g + 4 >> 2] = 0;
 g = a + 8 | 0;
 c[g >> 2] = -1;
 c[g + 4 >> 2] = -1;
 return;
}

function be(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0;
 if (d) {
  e = d;
  d = a;
  while (1) {
   e = e + -1 | 0;
   c[d >> 2] = b;
   if (!e) break; else d = d + 4 | 0;
  }
 }
 return a | 0;
}

function zo(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = a;
 a = c;
 c = wo(e, a) | 0;
 f = D;
 return (D = ($(b, a) | 0) + ($(d, e) | 0) + f | f & 0, c | 0 | 0) | 0;
}

function ko(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0;
 b = a + 4 | 0;
 d = c[b >> 2] | 0;
 c[b >> 2] = d + -1;
 if (!d) {
  qb[c[(c[a >> 2] | 0) + 8 >> 2] & 127](a);
  e = 1;
 } else e = 0;
 return e | 0;
}

function Pn(a) {
 a = a | 0;
 lf(10484);
 lf(10472);
 lf(10460);
 lf(10448);
 lf(10436);
 lf(10424);
 lf(10412);
 lf(10400);
 lf(10388);
 lf(10376);
 lf(10364);
 lf(10352);
 lf(10340);
 lf(10328);
 return;
}

function On(a) {
 a = a | 0;
 $e(10312);
 $e(10300);
 $e(10288);
 $e(10276);
 $e(10264);
 $e(10252);
 $e(10240);
 $e(10228);
 $e(10216);
 $e(10204);
 $e(10192);
 $e(10180);
 $e(10168);
 $e(10156);
 return;
}

function Do(a, b, c, d, e, f, g, h) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 return mb[a & 7](b | 0, c | 0, d | 0, e | 0, f | 0, g | 0, h | 0) | 0;
}

function mo() {}
function no(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0;
 e = b - d >>> 0;
 e = b - d - (c >>> 0 > a >>> 0 | 0) >>> 0;
 return (D = e, a - c >>> 0 | 0) | 0;
}

function uo(a, b, c) {
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

function Rk(a, d, e) {
 a = a | 0;
 d = d | 0;
 e = e | 0;
 var f = 0;
 if (e >>> 0 < 128) f = (b[(c[(Mc() | 0) >> 2] | 0) + (e << 1) >> 1] & d) << 16 >> 16 != 0; else f = 0;
 return f | 0;
}

function Ad(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 f = i;
 i = i + 16 | 0;
 g = f;
 c[g >> 2] = e;
 e = Gd(a, b, d, g) | 0;
 i = f;
 return e | 0;
}

function vf(a) {
 a = a | 0;
 c[a >> 2] = 8224;
 wf(a, 0);
 Kk(a + 28 | 0);
 pe(c[a + 32 >> 2] | 0);
 pe(c[a + 36 >> 2] | 0);
 pe(c[a + 48 >> 2] | 0);
 pe(c[a + 60 >> 2] | 0);
 return;
}

function so(a, b, c) {
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

function Jo(a, b, c, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 return sb[a & 63](b | 0, c | 0, d | 0, e | 0, f | 0, g | 0) | 0;
}

function qo(a, b, c) {
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

function Uf(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 e = a;
 c[e >> 2] = 0;
 c[e + 4 >> 2] = 0;
 e = a + 8 | 0;
 c[e >> 2] = -1;
 c[e + 4 >> 2] = -1;
 return;
}

function Ff(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 e = a;
 c[e >> 2] = 0;
 c[e + 4 >> 2] = 0;
 e = a + 8 | 0;
 c[e >> 2] = -1;
 c[e + 4 >> 2] = -1;
 return;
}

function Bl(a) {
 a = a | 0;
 var b = 0, d = 0;
 b = c[a + 8 >> 2] | 0;
 if (b) {
  a = bd(b) | 0;
  if (!a) d = 4; else {
   bd(a) | 0;
   d = 4;
  }
 } else d = 1;
 return d | 0;
}

function Go(a, b, c, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = +g;
 return pb[a & 3](b | 0, c | 0, d | 0, e | 0, f | 0, +g) | 0;
}

function ol(a, b, d, e, f, g, h, i) {
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

function nl(a, b, d, e, f, g, h, i) {
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

function wm(b) {
 b = b | 0;
 if ((a[1920] | 0) == 0 ? (Aa(1920) | 0) != 0 : 0) {
  jf(12840, 12792, _d(12792) | 0);
  ab(108, 12840, n | 0) | 0;
  Ga(1920);
 }
 return 12840;
}

function um(b) {
 b = b | 0;
 if ((a[1904] | 0) == 0 ? (Aa(1904) | 0) != 0 : 0) {
  jf(12768, 12684, _d(12684) | 0);
  ab(108, 12768, n | 0) | 0;
  Ga(1904);
 }
 return 12768;
}

function sm(b) {
 b = b | 0;
 if ((a[1888] | 0) == 0 ? (Aa(1888) | 0) != 0 : 0) {
  jf(12660, 12624, _d(12624) | 0);
  ab(108, 12660, n | 0) | 0;
  Ga(1888);
 }
 return 12660;
}

function qm(b) {
 b = b | 0;
 if ((a[1872] | 0) == 0 ? (Aa(1872) | 0) != 0 : 0) {
  jf(12600, 12564, _d(12564) | 0);
  ab(108, 12600, n | 0) | 0;
  Ga(1872);
 }
 return 12600;
}

function gl(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0;
 if (b << 24 >> 24 > -1) d = c[(c[(Nc() | 0) >> 2] | 0) + (b << 24 >> 24 << 2) >> 2] & 255; else d = b;
 return d | 0;
}

function xk(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 e = Yc((a[d >> 0] & 1) == 0 ? d + 1 | 0 : c[d + 8 >> 2] | 0, 1) | 0;
 return e >>> ((e | 0) != (-1 | 0) & 1) | 0;
}

function sk(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 e = Yc((a[d >> 0] & 1) == 0 ? d + 1 | 0 : c[d + 8 >> 2] | 0, 1) | 0;
 return e >>> ((e | 0) != (-1 | 0) & 1) | 0;
}

function Qo(a, b, c, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 zb[a & 7](b | 0, c | 0, d | 0, e | 0, f | 0, g | 0);
}

function Bd(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = i;
 i = i + 16 | 0;
 f = e;
 c[f >> 2] = d;
 d = Hd(a, b, f) | 0;
 i = e;
 return d | 0;
}

function el(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0;
 if (b << 24 >> 24 > -1) d = c[(c[(Oc() | 0) >> 2] | 0) + ((b & 255) << 2) >> 2] & 255; else d = b;
 return d | 0;
}

function Tb() {
 var a = 0, b = 0;
 a = i;
 i = i + 16 | 0;
 if (!(Va(2296, 2) | 0)) {
  b = Qa(c[573] | 0) | 0;
  i = a;
  return b | 0;
 } else Sb(14089, a);
 return 0;
}

function Sb(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0;
 d = i;
 i = i + 16 | 0;
 e = d;
 c[e >> 2] = b;
 b = c[638] | 0;
 Ed(b, a, e) | 0;
 wd(10, b) | 0;
 za();
}

function zc(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 if ((a | 0) == (c[b + 8 >> 2] | 0)) rc(0, b, d, e, f);
 return;
}

function po(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0;
 e = a + c >>> 0;
 return (D = b + d + (e >>> 0 < a >>> 0 | 0) >>> 0, e | 0) | 0;
}

function bn(b, d) {
 b = b | 0;
 d = d | 0;
 c[b >> 2] = 0;
 c[b + 4 >> 2] = 0;
 c[b + 8 >> 2] = 0;
 a[b + 128 >> 0] = 0;
 if (d) {
  Zn(b, d);
  Vn(b, d);
 }
 return;
}

function vm(b) {
 b = b | 0;
 if ((a[1912] | 0) == 0 ? (Aa(1912) | 0) != 0 : 0) {
  Ze(12780, 21728, 11);
  ab(107, 12780, n | 0) | 0;
  Ga(1912);
 }
 return 12780;
}

function tm(b) {
 b = b | 0;
 if ((a[1896] | 0) == 0 ? (Aa(1896) | 0) != 0 : 0) {
  Ze(12672, 21707, 20);
  ab(107, 12672, n | 0) | 0;
  Ga(1896);
 }
 return 12672;
}

function rm(b) {
 b = b | 0;
 if ((a[1880] | 0) == 0 ? (Aa(1880) | 0) != 0 : 0) {
  Ze(12612, 21698, 8);
  ab(107, 12612, n | 0) | 0;
  Ga(1880);
 }
 return 12612;
}

function pm(b) {
 b = b | 0;
 if ((a[1864] | 0) == 0 ? (Aa(1864) | 0) != 0 : 0) {
  Ze(12552, 21689, 8);
  ab(107, 12552, n | 0) | 0;
  Ga(1864);
 }
 return 12552;
}

function Ld(a) {
 a = a | 0;
 var b = 0, d = 0;
 b = i;
 i = i + 16 | 0;
 d = b;
 c[d >> 2] = c[a + 60 >> 2];
 a = Vc(db(6, d | 0) | 0) | 0;
 i = b;
 return a | 0;
}

function So(a, b, c, d, e, f) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 return Bb[a & 31](b | 0, c | 0, d | 0, e | 0, f | 0) | 0;
}

function _d(a) {
 a = a | 0;
 var b = 0, d = 0;
 b = a;
 while (1) if (!(c[b >> 2] | 0)) {
  d = b;
  break;
 } else b = b + 4 | 0;
 return d - a >> 2 | 0;
}

function Xk(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0;
 if (b >>> 0 < 128) d = c[(c[(Nc() | 0) >> 2] | 0) + (b << 2) >> 2] | 0; else d = b;
 return d | 0;
}

function Vk(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0;
 if (b >>> 0 < 128) d = c[(c[(Oc() | 0) >> 2] | 0) + (b << 2) >> 2] | 0; else d = b;
 return d | 0;
}

function Ko(a, b, c, d, e, f) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = +f;
 return tb[a & 7](b | 0, c | 0, d | 0, e | 0, +f) | 0;
}

function dp(a, b, c, d, e, f, g, h) {
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

function xm(a) {
 a = a | 0;
 var b = 0;
 c[a >> 2] = 9420;
 b = a + 8 | 0;
 a = c[b >> 2] | 0;
 if ((a | 0) != (ah() | 0)) Zc(c[b >> 2] | 0);
 return;
}

function cl(b) {
 b = b | 0;
 var d = 0;
 c[b >> 2] = 9352;
 d = c[b + 8 >> 2] | 0;
 if ((d | 0) != 0 ? (a[b + 12 >> 0] | 0) != 0 : 0) Wb(d);
 return;
}

function Fo(a, b, c, d, e, f) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 ob[a & 3](b | 0, c | 0, d | 0, e | 0, f | 0);
}

function Ib(b) {
 b = b | 0;
 a[k >> 0] = a[b >> 0];
 a[k + 1 >> 0] = a[b + 1 >> 0];
 a[k + 2 >> 0] = a[b + 2 >> 0];
 a[k + 3 >> 0] = a[b + 3 >> 0];
}

function Fc(a) {
 a = a | 0;
 var b = 0;
 b = i;
 i = i + 16 | 0;
 pe(a);
 if (!($a(c[573] | 0, 0) | 0)) {
  i = b;
  return;
 } else Sb(14243, b);
}

function ah() {
 if ((a[1272] | 0) == 0 ? (Aa(1272) | 0) != 0 : 0) {
  c[2475] = ad(2147483647, 21355, 0) | 0;
  Ga(1272);
 }
 return c[2475] | 0;
}

function sl(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 b = d - c | 0;
 return (b >>> 0 < e >>> 0 ? b : e) | 0;
}

function Mk(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0;
 d = c[a >> 2] | 0;
 a = Lk(b) | 0;
 return c[(c[d + 8 >> 2] | 0) + (a << 2) >> 2] | 0;
}

function Vc(a) {
 a = a | 0;
 var b = 0;
 if (a >>> 0 > 4294963200) {
  c[(Qc() | 0) >> 2] = 0 - a;
  b = -1;
 } else b = a;
 return b | 0;
}

function Po(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 return yb[a & 7](b | 0, c | 0, d | 0, e | 0) | 0;
}

function Lc(a) {
 a = a | 0;
 var b = 0;
 if ((a + -48 | 0) >>> 0 < 10) b = 1; else b = ((a | 32) + -97 | 0) >>> 0 < 6;
 return b & 1 | 0;
}

function Uo(a, b, c, d, e, f, g) {
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

function mc(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 if ((a | 0) == (c[b + 8 >> 2] | 0)) lc(0, b, d, e);
 return;
}

function Hk() {
 if ((a[1760] | 0) == 0 ? (Aa(1760) | 0) != 0 : 0) {
  Gk() | 0;
  c[2527] = 10104;
  Ga(1760);
 }
 return c[2527] | 0;
}

function Bk() {
 if ((a[1592] | 0) == 0 ? (Aa(1592) | 0) != 0 : 0) {
  Fk() | 0;
  c[2525] = 10096;
  Ga(1592);
 }
 return c[2525] | 0;
}

function bd(a) {
 a = a | 0;
 var b = 0, d = 0;
 b = (Ta() | 0) + 176 | 0;
 d = c[b >> 2] | 0;
 if (a) c[b >> 2] = a;
 return d | 0;
}

function xf(a) {
 a = a | 0;
 var b = 0, d = 0;
 b = i;
 i = i + 16 | 0;
 d = b;
 Jk(d, a + 28 | 0);
 i = b;
 return c[d >> 2] | 0;
}

function uj(b, c) {
 b = b | 0;
 c = c | 0;
 a[b >> 0] = 2;
 a[b + 1 >> 0] = 3;
 a[b + 2 >> 0] = 0;
 a[b + 3 >> 0] = 4;
 return;
}

function tj(b, c) {
 b = b | 0;
 c = c | 0;
 a[b >> 0] = 2;
 a[b + 1 >> 0] = 3;
 a[b + 2 >> 0] = 0;
 a[b + 3 >> 0] = 4;
 return;
}

function jj(b, c) {
 b = b | 0;
 c = c | 0;
 a[b >> 0] = 2;
 a[b + 1 >> 0] = 3;
 a[b + 2 >> 0] = 0;
 a[b + 3 >> 0] = 4;
 return;
}

function ij(b, c) {
 b = b | 0;
 c = c | 0;
 a[b >> 0] = 2;
 a[b + 1 >> 0] = 3;
 a[b + 2 >> 0] = 0;
 a[b + 3 >> 0] = 4;
 return;
}

function To(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 Cb[a & 7](b | 0, c | 0, d | 0, e | 0);
}

function Qj(b, c) {
 b = b | 0;
 c = c | 0;
 a[b >> 0] = 2;
 a[b + 1 >> 0] = 3;
 a[b + 2 >> 0] = 0;
 a[b + 3 >> 0] = 4;
 return;
}

function Pj(b, c) {
 b = b | 0;
 c = c | 0;
 a[b >> 0] = 2;
 a[b + 1 >> 0] = 3;
 a[b + 2 >> 0] = 0;
 a[b + 3 >> 0] = 4;
 return;
}

function Fj(b, c) {
 b = b | 0;
 c = c | 0;
 a[b >> 0] = 2;
 a[b + 1 >> 0] = 3;
 a[b + 2 >> 0] = 0;
 a[b + 3 >> 0] = 4;
 return;
}

function Ej(b, c) {
 b = b | 0;
 c = c | 0;
 a[b >> 0] = 2;
 a[b + 1 >> 0] = 3;
 a[b + 2 >> 0] = 0;
 a[b + 3 >> 0] = 4;
 return;
}

function Ql(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 return Nn(c, d, e, 1114111, 0) | 0;
}

function Il(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 return Kn(c, d, e, 1114111, 0) | 0;
}

function Wd(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 var d = 0;
 d = je(a, b, c, 0, -2147483648) | 0;
 return d | 0;
}

function _o(a, b, c, d, e, f) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 ca(6);
 return 0;
}

function Ec() {
 var a = 0;
 a = i;
 i = i + 16 | 0;
 if (!(ya(2292, 94) | 0)) {
  i = a;
  return;
 } else Sb(14193, a);
}

function Xo(a, b, c, d, e, f) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = +f;
 ca(3);
 return 0;
}

function Eo(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 return nb[a & 31](b | 0, c | 0, d | 0) | 0;
}

function Ti(a) {
 a = a | 0;
 var b = 0;
 b = c[a >> 2] | 0;
 if ((b | 0) != (ah() | 0)) Zc(c[a >> 2] | 0);
 return;
}

function pl(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 c[f >> 2] = d;
 return 3;
}

function Vd(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 var d = 0;
 d = je(a, b, c, -1, -1) | 0;
 return d | 0;
}

function Nl(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 c[f >> 2] = d;
 return 3;
}

function Fl(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 c[f >> 2] = d;
 return 3;
}

function Bc(a) {
 a = a | 0;
 var b = 0;
 if (!a) b = 0; else b = (qc(a, 40, 88, 0) | 0) != 0;
 return b & 1 | 0;
}

function td(a, b) {
 a = a | 0;
 b = b | 0;
 var c = 0;
 if (!a) c = 0; else c = qd(a, b, 0) | 0;
 return c | 0;
}

function fp(a, b, c, d, e, f) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 ca(13);
}

function Qc() {
 var a = 0;
 if (!(c[576] | 0)) a = 2580; else a = c[(Ta() | 0) + 60 >> 2] | 0;
 return a | 0;
}

function Jc(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 d = Wd(a, b, c) | 0;
 return d | 0;
}

function Ic(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 d = Vd(a, b, c) | 0;
 return d | 0;
}

function Pk(a) {
 a = a | 0;
 var b = 0;
 b = c[2331] | 0;
 c[2331] = b + 1;
 c[a + 4 >> 2] = b + 1;
 return;
}

function zj(a, b) {
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

function pj(a, b) {
 a = a | 0;
 b = b | 0;
 c[a >> 2] = 0;
 c[a + 4 >> 2] = 0;
 c[a + 8 >> 2] = 0;
 return;
}

function oj(a, b) {
 a = a | 0;
 b = b | 0;
 c[a >> 2] = 0;
 c[a + 4 >> 2] = 0;
 c[a + 8 >> 2] = 0;
 return;
}

function kd(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return ld(0, a, b, (c | 0) != 0 ? c : 2616) | 0;
}

function hp(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 ca(15);
 return 0;
}

function fj(a, b) {
 a = a | 0;
 b = b | 0;
 c[a >> 2] = 0;
 c[a + 4 >> 2] = 0;
 c[a + 8 >> 2] = 0;
 return;
}

function ej(a, b) {
 a = a | 0;
 b = b | 0;
 c[a >> 2] = 0;
 c[a + 4 >> 2] = 0;
 c[a + 8 >> 2] = 0;
 return;
}

function dj(a, b) {
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

function Lj(a, b) {
 a = a | 0;
 b = b | 0;
 c[a >> 2] = 0;
 c[a + 4 >> 2] = 0;
 c[a + 8 >> 2] = 0;
 return;
}

function Kj(a, b) {
 a = a | 0;
 b = b | 0;
 c[a >> 2] = 0;
 c[a + 4 >> 2] = 0;
 c[a + 8 >> 2] = 0;
 return;
}

function Jk(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0;
 d = c[b >> 2] | 0;
 c[a >> 2] = d;
 jo(d);
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

function Aj(a, b) {
 a = a | 0;
 b = b | 0;
 c[a >> 2] = 0;
 c[a + 4 >> 2] = 0;
 c[a + 8 >> 2] = 0;
 return;
}

function md(a) {
 a = a | 0;
 var b = 0;
 if (!a) b = 1; else b = (c[a >> 2] | 0) == 0;
 return b & 1 | 0;
}

function Mo(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 vb[a & 0](b | 0, c | 0, d | 0);
}

function Ao(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 return Co(a, b, c, d, 0) | 0;
}

function $o(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = +e;
 ca(7);
 return 0;
}

function Ik(a) {
 a = a | 0;
 var b = 0;
 b = c[(Hk() | 0) >> 2] | 0;
 c[a >> 2] = b;
 jo(b);
 return;
}

function uf(a, b) {
 a = a | 0;
 b = b | 0;
 c[a + 16 >> 2] = (c[a + 24 >> 2] | 0) == 0 | b;
 return;
}

function $k(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return (b >>> 0 < 128 ? b & 255 : c) | 0;
}

function kl(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return (b << 24 >> 24 > -1 ? b : c) | 0;
}

function jo(a) {
 a = a | 0;
 var b = 0;
 b = a + 4 | 0;
 c[b >> 2] = (c[b >> 2] | 0) + 1;
 return;
}

function ve(a) {
 a = a | 0;
 fg(6728) | 0;
 fg(6896) | 0;
 kg(7068) | 0;
 kg(7236) | 0;
 return;
}
function Db(a) {
 a = a | 0;
 var b = 0;
 b = i;
 i = i + a | 0;
 i = i + 15 & -16;
 return b | 0;
}

function Wo(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 ca(2);
}

function Ro(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return Ab[a & 15](b | 0, c | 0) | 0;
}

function Mg(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 tf(a, c, d);
 return;
}

function Hg(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 sf(a, c, d);
 return;
}

function Cg(a) {
 a = a | 0;
 var b = 0;
 b = a + 16 | 0;
 c[b >> 2] = c[b >> 2] | 1;
 return;
}

function $b(a) {
 a = a | 0;
 var b = 0;
 b = i;
 i = i + 16 | 0;
 wb[a & 3]();
 Sb(14153, b);
}

function wg(a) {
 a = a | 0;
 vf(a + ((c[(c[a >> 2] | 0) + -12 >> 2] | 0) + 4) | 0);
 return;
}

function mg(a) {
 a = a | 0;
 vf(a + ((c[(c[a >> 2] | 0) + -12 >> 2] | 0) + 4) | 0);
 return;
}

function hg(a) {
 a = a | 0;
 vf(a + ((c[(c[a >> 2] | 0) + -12 >> 2] | 0) + 8) | 0);
 return;
}

function ep(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 ca(12);
 return 0;
}

function cg(a) {
 a = a | 0;
 vf(a + ((c[(c[a >> 2] | 0) + -12 >> 2] | 0) + 8) | 0);
 return;
}

function Gk() {
 var a = 0;
 a = c[(Bk() | 0) >> 2] | 0;
 c[2526] = a;
 jo(a);
 return 10104;
}

function Xc(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 return d | 0;
}

function yg(a) {
 a = a | 0;
 xg(a + (c[(c[a >> 2] | 0) + -12 >> 2] | 0) | 0);
 return;
}

function og(a) {
 a = a | 0;
 ng(a + (c[(c[a >> 2] | 0) + -12 >> 2] | 0) | 0);
 return;
}

function jg(a) {
 a = a | 0;
 ig(a + (c[(c[a >> 2] | 0) + -12 >> 2] | 0) | 0);
 return;
}

function eg(a) {
 a = a | 0;
 dg(a + (c[(c[a >> 2] | 0) + -12 >> 2] | 0) | 0);
 return;
}

function Ok(a) {
 a = a | 0;
 if (a) qb[c[(c[a >> 2] | 0) + 4 >> 2] & 127](a);
 return;
}

function Kc(a) {
 a = a | 0;
 return ((a | 0) == 32 | (a + -9 | 0) >>> 0 < 5) & 1 | 0;
}

function Io(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 rb[a & 63](b | 0, c | 0);
}

function fe(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return Qd(a, b, c) | 0;
}

function Ud(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return +(+ie(a, b, 2));
}

function ip(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 ca(16);
}

function hm(a, b) {
 a = a | 0;
 b = b | 0;
 jf(a, 10132, _d(10132) | 0);
 return;
}

function fm(a, b) {
 a = a | 0;
 b = b | 0;
 jf(a, 10112, _d(10112) | 0);
 return;
}

function _c(a, b) {
 a = a | 0;
 b = b | 0;
 return (a + -48 | 0) >>> 0 < 10 | 0;
}

function lf(b) {
 b = b | 0;
 if (a[b >> 0] & 1) Vb(c[b + 8 >> 2] | 0);
 return;
}

function Af(a) {
 a = a | 0;
 c[a >> 2] = 7936;
 Kk(a + 4 | 0);
 Vb(a);
 return;
}

function $e(b) {
 b = b | 0;
 if (a[b >> 0] & 1) Vb(c[b + 8 >> 2] | 0);
 return;
}

function Pf(a) {
 a = a | 0;
 c[a >> 2] = 8e3;
 Kk(a + 4 | 0);
 Vb(a);
 return;
}

function zn(a, b) {
 a = a | 0;
 b = b | 0;
 Ck(a, b, Lk(8660) | 0);
 return;
}

function yn(a, b) {
 a = a | 0;
 b = b | 0;
 Ck(a, b, Lk(9216) | 0);
 return;
}

function xn(a, b) {
 a = a | 0;
 b = b | 0;
 Ck(a, b, Lk(9180) | 0);
 return;
}

function wn(a, b) {
 a = a | 0;
 b = b | 0;
 Ck(a, b, Lk(9144) | 0);
 return;
}

function vn(a, b) {
 a = a | 0;
 b = b | 0;
 Ck(a, b, Lk(9108) | 0);
 return;
}

function un(a, b) {
 a = a | 0;
 b = b | 0;
 Ck(a, b, Lk(9072) | 0);
 return;
}

function tn(a, b) {
 a = a | 0;
 b = b | 0;
 Ck(a, b, Lk(9008) | 0);
 return;
}

function sn(a, b) {
 a = a | 0;
 b = b | 0;
 Ck(a, b, Lk(8944) | 0);
 return;
}

function rn(a, b) {
 a = a | 0;
 b = b | 0;
 Ck(a, b, Lk(8880) | 0);
 return;
}

function qn(a, b) {
 a = a | 0;
 b = b | 0;
 Ck(a, b, Lk(8568) | 0);
 return;
}

function pn(a, b) {
 a = a | 0;
 b = b | 0;
 Ck(a, b, Lk(8508) | 0);
 return;
}

function on(a, b) {
 a = a | 0;
 b = b | 0;
 Ck(a, b, Lk(8448) | 0);
 return;
}

function nn(a, b) {
 a = a | 0;
 b = b | 0;
 Ck(a, b, Lk(8376) | 0);
 return;
}

function mn(a, b) {
 a = a | 0;
 b = b | 0;
 Ck(a, b, Lk(9484) | 0);
 return;
}

function ln(a, b) {
 a = a | 0;
 b = b | 0;
 Ck(a, b, Lk(9476) | 0);
 return;
}

function kn(a, b) {
 a = a | 0;
 b = b | 0;
 Ck(a, b, Lk(9468) | 0);
 return;
}

function jn(a, b) {
 a = a | 0;
 b = b | 0;
 Ck(a, b, Lk(9460) | 0);
 return;
}

function hn(a, b) {
 a = a | 0;
 b = b | 0;
 Ck(a, b, Lk(9404) | 0);
 return;
}

function gn(a, b) {
 a = a | 0;
 b = b | 0;
 Ck(a, b, Lk(9396) | 0);
 return;
}

function fn(a, b) {
 a = a | 0;
 b = b | 0;
 Ck(a, b, Lk(9328) | 0);
 return;
}

function en(a, b) {
 a = a | 0;
 b = b | 0;
 Ck(a, b, Lk(9336) | 0);
 return;
}

function dn(a, b) {
 a = a | 0;
 b = b | 0;
 Ck(a, b, Lk(8304) | 0);
 return;
}

function cn(a, b) {
 a = a | 0;
 b = b | 0;
 Ck(a, b, Lk(8264) | 0);
 return;
}

function Vo(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 ca(1);
 return 0;
}

function En(a, b) {
 a = a | 0;
 b = b | 0;
 Ck(a, b, Lk(9296) | 0);
 return;
}

function Dn(a, b) {
 a = a | 0;
 b = b | 0;
 Ck(a, b, Lk(9256) | 0);
 return;
}

function Cn(a, b) {
 a = a | 0;
 b = b | 0;
 Ck(a, b, Lk(8816) | 0);
 return;
}

function Bn(a, b) {
 a = a | 0;
 b = b | 0;
 Ck(a, b, Lk(8784) | 0);
 return;
}

function An(a, b) {
 a = a | 0;
 b = b | 0;
 Ck(a, b, Lk(8752) | 0);
 return;
}

function mf(a, b) {
 a = a | 0;
 b = b | 0;
 return nf(a, b, _d(b) | 0) | 0;
}

function bc() {
 var a = 0;
 a = c[542] | 0;
 c[542] = a + 0;
 return a | 0;
}

function af(a, b) {
 a = a | 0;
 b = b | 0;
 return bf(a, b, Zd(b) | 0) | 0;
}

function Hb(a, b) {
 a = a | 0;
 b = b | 0;
 if (!o) {
  o = a;
  p = b;
 }
}

function Lo(a, b) {
 a = a | 0;
 b = b | 0;
 return ub[a & 63](b | 0) | 0;
}

function Yl(a) {
 a = a | 0;
 c[a >> 2] = 9540;
 $e(a + 16 | 0);
 return;
}

function Wl(a) {
 a = a | 0;
 c[a >> 2] = 9500;
 $e(a + 12 | 0);
 return;
}

function Sf(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return a | 0;
}

function Df(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return a | 0;
}

function zf(a) {
 a = a | 0;
 c[a >> 2] = 7936;
 Kk(a + 4 | 0);
 return;
}

function he(a) {
 a = a | 0;
 if (!(c[a + 68 >> 2] | 0)) Jd(a);
 return;
}

function ge(a) {
 a = a | 0;
 if (!(c[a + 68 >> 2] | 0)) Jd(a);
 return;
}

function dm(a, b) {
 a = a | 0;
 b = b | 0;
 Ye(a, b + 16 | 0);
 return;
}

function cm(a, b) {
 a = a | 0;
 b = b | 0;
 Ye(a, b + 12 | 0);
 return;
}

function Of(a) {
 a = a | 0;
 c[a >> 2] = 8e3;
 Kk(a + 4 | 0);
 return;
}

function gm(a, b) {
 a = a | 0;
 b = b | 0;
 Ze(a, 21462, 5);
 return;
}

function em(a, b) {
 a = a | 0;
 b = b | 0;
 Ze(a, 21457, 4);
 return;
}

function Zk(a, b) {
 a = a | 0;
 b = b | 0;
 return b << 24 >> 24 | 0;
}

function Cc() {
 var a = 0;
 a = Da(4) | 0;
 Xb(a);
 bb(a | 0, 8, 1);
}

function rj(a, b) {
 a = a | 0;
 b = b | 0;
 _e(a, 1, 45);
 return;
}

function gj(a, b) {
 a = a | 0;
 b = b | 0;
 _e(a, 1, 45);
 return;
}

function Nj(a, b) {
 a = a | 0;
 b = b | 0;
 kf(a, 1, 45);
 return;
}

function Cj(a, b) {
 a = a | 0;
 b = b | 0;
 kf(a, 1, 45);
 return;
}

function bp(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 ca(9);
}

function Ho(a, b) {
 a = a | 0;
 b = b | 0;
 qb[a & 127](b | 0);
}

function gp(a, b) {
 a = a | 0;
 b = b | 0;
 ca(14);
 return 0;
}

function jd(a, b) {
 a = +a;
 b = b | 0;
 return +(+id(a, b));
}

function hd(a, b) {
 a = +a;
 b = b | 0;
 return +(+gd(a, b));
}

function $c(a, b) {
 a = a | 0;
 b = b | 0;
 return Lc(a) | 0;
}

function xg(a) {
 a = a | 0;
 vf(a + 4 | 0);
 Vb(a);
 return;
}

function ng(a) {
 a = a | 0;
 vf(a + 4 | 0);
 Vb(a);
 return;
}

function ig(a) {
 a = a | 0;
 vf(a + 8 | 0);
 Vb(a);
 return;
}

function dg(a) {
 a = a | 0;
 vf(a + 8 | 0);
 Vb(a);
 return;
}

function Yi(a) {
 a = a | 0;
 Ti(a + 8 | 0);
 Vb(a);
 return;
}

function Ui(a) {
 a = a | 0;
 Ti(a + 8 | 0);
 Vb(a);
 return;
}

function Kk(a) {
 a = a | 0;
 ko(c[a >> 2] | 0) | 0;
 return;
}

function Fk() {
 Ak(1600, 1);
 c[2524] = 1600;
 return 10096;
}

function Gc(a) {
 a = a | 0;
 Ca(14296, 14325, 1164, 14400);
}

function fd(a, b) {
 a = +a;
 b = +b;
 return +(+ed(a, b));
}

function dd(a, b) {
 a = +a;
 b = +b;
 return +(+cd(a, b));
}

function Yc(a, b) {
 a = a | 0;
 b = b | 0;
 return -1 | 0;
}

function Hc(a) {
 a = a | 0;
 Ca(14421, 14444, 303, 14400);
}

function Gb(a, b) {
 a = a | 0;
 b = b | 0;
 i = a;
 j = b;
}

function Ae() {
 ue(0);
 ab(97, 19443, n | 0) | 0;
 return;
}

function il(a, b) {
 a = a | 0;
 b = b | 0;
 return b | 0;
}

function bm(a) {
 a = a | 0;
 return c[a + 12 >> 2] | 0;
}

function Xb(a) {
 a = a | 0;
 c[a >> 2] = 2156;
 return;
}

function am(b) {
 b = b | 0;
 return a[b + 9 >> 0] | 0;
}

function ag(a, b) {
 a = a | 0;
 b = b | 0;
 return -1;
}

function _l(b) {
 b = b | 0;
 return a[b + 8 >> 0] | 0;
}

function _f(a, b) {
 a = a | 0;
 b = b | 0;
 return -1;
}

function Nf(a, b) {
 a = a | 0;
 b = b | 0;
 return -1;
}

function Lf(a, b) {
 a = a | 0;
 b = b | 0;
 return -1;
}

function $l(a) {
 a = a | 0;
 return c[a + 8 >> 2] | 0;
}

function vg(a) {
 a = a | 0;
 vf(a + 4 | 0);
 return;
}

function ul(a) {
 a = a | 0;
 xm(a);
 Vb(a);
 return;
}

function lg(a) {
 a = a | 0;
 vf(a + 4 | 0);
 return;
}

function gg(a) {
 a = a | 0;
 vf(a + 8 | 0);
 return;
}

function dl(a) {
 a = a | 0;
 cl(a);
 Vb(a);
 return;
}

function bg(a) {
 a = a | 0;
 vf(a + 8 | 0);
 return;
}

function Zl(a) {
 a = a | 0;
 Yl(a);
 Vb(a);
 return;
}

function Xl(a) {
 a = a | 0;
 Wl(a);
 Vb(a);
 return;
}

function Xi(a) {
 a = a | 0;
 Ti(a + 8 | 0);
 return;
}

function Te(a) {
 a = a | 0;
 zf(a);
 Vb(a);
 return;
}

function Si(a) {
 a = a | 0;
 Ti(a + 8 | 0);
 return;
}

function Ne(a) {
 a = a | 0;
 zf(a);
 Vb(a);
 return;
}

function Ie(a) {
 a = a | 0;
 Of(a);
 Vb(a);
 return;
}

function Ek(a) {
 a = a | 0;
 Dk(a);
 Vb(a);
 return;
}

function Ce(a) {
 a = a | 0;
 Of(a);
 Vb(a);
 return;
}

function Bg(a) {
 a = a | 0;
 vf(a);
 Vb(a);
 return;
}

function zk(a, b) {
 a = a | 0;
 b = b | 0;
 return;
}

function uk(a, b) {
 a = a | 0;
 b = b | 0;
 return;
}

function Rf(a, b) {
 a = a | 0;
 b = b | 0;
 return;
}

function Cf(a, b) {
 a = a | 0;
 b = b | 0;
 return;
}

function Zo(a, b) {
 a = a | 0;
 b = b | 0;
 ca(5);
}

function Rb(a) {
 a = a | 0;
 La(a | 0) | 0;
 ac();
}

function Ve(a) {
 a = a | 0;
 return Xe(a, 1) | 0;
}

function Ue(a) {
 a = a | 0;
 return Xe(a, 0) | 0;
}

function Ke(a) {
 a = a | 0;
 return Me(a, 1) | 0;
}

function Je(a) {
 a = a | 0;
 return Me(a, 0) | 0;
}

function yj(a) {
 a = a | 0;
 return 2147483647;
}

function xj(a) {
 a = a | 0;
 return 2147483647;
}

function Jj(a) {
 a = a | 0;
 return 2147483647;
}

function Ij(a) {
 a = a | 0;
 return 2147483647;
}

function ap(a) {
 a = a | 0;
 ca(8);
 return 0;
}

function wk(a) {
 a = a | 0;
 Vb(a);
 return;
}

function wj(a) {
 a = a | 0;
 Vb(a);
 return;
}

function wh(a) {
 a = a | 0;
 Vb(a);
 return;
}

function vi(a) {
 a = a | 0;
 Vb(a);
 return;
}

function rk(a) {
 a = a | 0;
 Vb(a);
 return;
}

function ml(a) {
 a = a | 0;
 Vb(a);
 return;
}

function lk(a) {
 a = a | 0;
 Vb(a);
 return;
}

function lj(a) {
 a = a | 0;
 Vb(a);
 return;
}

function jc(a) {
 a = a | 0;
 Vb(a);
 return;
}

function ic(a) {
 a = a | 0;
 Vb(a);
 return;
}

function hc(a) {
 a = a | 0;
 Vb(a);
 return;
}

function fk(a) {
 a = a | 0;
 Vb(a);
 return;
}

function ch(a) {
 a = a | 0;
 Vb(a);
 return;
}

function aj(a) {
 a = a | 0;
 Vb(a);
 return;
}

function Zc(a) {
 a = a | 0;
 pe(a);
 return;
}

function Zb(a) {
 a = a | 0;
 Vb(a);
 return;
}

function Yh(a) {
 a = a | 0;
 Vb(a);
 return;
}

function Wb(a) {
 a = a | 0;
 Vb(a);
 return;
}

function Vb(a) {
 a = a | 0;
 pe(a);
 return;
}

function Tl(a) {
 a = a | 0;
 Vb(a);
 return;
}

function Sl(a) {
 a = a | 0;
 Vb(a);
 return;
}

function Sj(a) {
 a = a | 0;
 Vb(a);
 return;
}

function Qk(a) {
 a = a | 0;
 Vb(a);
 return;
}

function Pg(a) {
 a = a | 0;
 Vb(a);
 return;
}

function Nk(a) {
 a = a | 0;
 Vb(a);
 return;
}

function Lh(a) {
 a = a | 0;
 Vb(a);
 return;
}

function Kl(a) {
 a = a | 0;
 Vb(a);
 return;
}

function Kg(a) {
 a = a | 0;
 Vb(a);
 return;
}

function Hj(a) {
 a = a | 0;
 Vb(a);
 return;
}

function Fg(a) {
 a = a | 0;
 Vb(a);
 return;
}

function Cl(a) {
 a = a | 0;
 Vb(a);
 return;
}

function $j(a) {
 a = a | 0;
 Vb(a);
 return;
}

function _b(a) {
 a = a | 0;
 return 14138;
}

function No(a) {
 a = a | 0;
 wb[a & 3]();
}

function nj(a) {
 a = a | 0;
 return 127;
}

function mj(a) {
 a = a | 0;
 return 127;
}

function cj(a) {
 a = a | 0;
 return 127;
}

function bj(a) {
 a = a | 0;
 return 127;
}

function Yf(a) {
 a = a | 0;
 return -1;
}

function Jf(a) {
 a = a | 0;
 return -1;
}

function zl(a) {
 a = a | 0;
 return 0;
}

function wi(a) {
 a = a | 0;
 return 2;
}

function tl(a) {
 a = a | 0;
 return 1;
}

function sj(a) {
 a = a | 0;
 return 0;
}

function rl(a) {
 a = a | 0;
 return 1;
}

function ql(a) {
 a = a | 0;
 return 1;
}

function hj(a) {
 a = a | 0;
 return 0;
}

function Zh(a) {
 a = a | 0;
 return 2;
}

function Wf(a) {
 a = a | 0;
 return 0;
}

function Wc(a) {
 a = a | 0;
 return 0;
}

function Vf(a) {
 a = a | 0;
 return 0;
}

function Rl(a) {
 a = a | 0;
 return 4;
}

function Pl(a) {
 a = a | 0;
 return 0;
}

function Ol(a) {
 a = a | 0;
 return 0;
}

function Oj(a) {
 a = a | 0;
 return 0;
}

function Jl(a) {
 a = a | 0;
 return 4;
}

function Id(a) {
 a = a | 0;
 return 0;
}

function Hl(a) {
 a = a | 0;
 return 0;
}

function Hf(a) {
 a = a | 0;
 return 0;
}

function Gl(a) {
 a = a | 0;
 return 0;
}

function Gf(a) {
 a = a | 0;
 return 0;
}

function Dj(a) {
 a = a | 0;
 return 0;
}

function vk(a) {
 a = a | 0;
 return;
}

function vj(a) {
 a = a | 0;
 return;
}

function vh(a) {
 a = a | 0;
 return;
}

function ui(a) {
 a = a | 0;
 return;
}

function qk(a) {
 a = a | 0;
 return;
}

function kk(a) {
 a = a | 0;
 return;
}

function kj(a) {
 a = a | 0;
 return;
}

function io(a) {
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

function ek(a) {
 a = a | 0;
 return;
}

function ec(a) {
 a = a | 0;
 return;
}

function dc(a) {
 a = a | 0;
 return;
}

function cc(a) {
 a = a | 0;
 return;
}

function bh(a) {
 a = a | 0;
 return;
}

function _j(a) {
 a = a | 0;
 return;
}

function Yb(a) {
 a = a | 0;
 return;
}

function Xh(a) {
 a = a | 0;
 return;
}

function Wj(a) {
 a = a | 0;
 return;
}

function Uj(a) {
 a = a | 0;
 return;
}

function Rj(a) {
 a = a | 0;
 return;
}

function Og(a) {
 a = a | 0;
 return;
}

function Kh(a) {
 a = a | 0;
 return;
}

function Jg(a) {
 a = a | 0;
 return;
}

function Jd(a) {
 a = a | 0;
 return;
}

function Gj(a) {
 a = a | 0;
 return;
}

function Eg(a) {
 a = a | 0;
 return;
}

function Dg(a) {
 a = a | 0;
 return;
}

function $i(a) {
 a = a | 0;
 return;
}

function Yo(a) {
 a = a | 0;
 ca(4);
}

function Kb(a) {
 a = a | 0;
 D = a;
}

function Fb(a) {
 a = a | 0;
 i = a;
}

function Lb() {
 return D | 0;
}

function Eb() {
 return i | 0;
}

function Oc() {
 return 2576;
}

function Nc() {
 return 2572;
}

function Mc() {
 return 2568;
}

function cp() {
 ca(10);
}

function Be() {
 return;
}

// EMSCRIPTEN_END_FUNCS
var mb=[Uo,Vi,Zi,Tj,Xj,ak,ck,Uo];var nb=[Vo,kc,ke,Od,Nd,Md,Pd,Sf,Xf,Fe,$f,Df,If,Qe,Mf,Ig,Ng,sk,xk,fl,hl,kl,Rk,Wk,Yk,$k,fe,Vo,Vo,Vo,Vo,Vo];var ob=[Wo,wc,vc,sc];var pb=[Xo,gk,mk,Xo];var qb=[Yo,Yb,Zb,ec,hc,fc,gc,ic,jc,Of,Ce,Ie,zf,Ne,Te,Af,Pf,bg,dg,cg,eg,gg,ig,hg,jg,lg,ng,mg,og,vg,xg,wg,yg,vf,Bg,Dg,Fg,Ok,Jg,Kg,Og,Pg,bh,ch,vh,wh,Kh,Lh,Xh,Yh,ui,vi,Si,Ui,Xi,Yi,$i,aj,kj,lj,vj,wj,Gj,Hj,Rj,Sj,_j,$j,ek,fk,kk,lk,qk,rk,vk,wk,Dk,Ek,cl,dl,xm,ul,Wl,Xl,Yl,Zl,Eg,Nk,Qk,ml,Cl,Kl,Sl,Tl,Fc,ge,he,ve,Uj,Pk,Hn,On,Pn,Qn,Rn,Sn,Tn,$e,lf,pe,Yo,Yo,Yo,Yo,Yo,Yo,Yo,Yo,Yo,Yo,Yo,Yo,Yo,Yo,Yo,Yo,Yo,Yo];var rb=[Zo,De,He,Oe,Se,Cf,Rf,dj,ej,fj,gj,ij,jj,oj,pj,qj,rj,tj,uj,zj,Aj,Bj,Cj,Ej,Fj,Kj,Lj,Mj,Nj,Pj,Qj,uk,zk,cm,em,gm,dm,fm,hm,Zo,Zo,Zo,Zo,Zo,Zo,Zo,Zo,Zo,Zo,Zo,Zo,Zo,Zo,Zo,Zo,Zo,Zo,Zo,Zo,Zo,Zo,Zo,Zo,Zo];var sb=[_o,Qg,Rg,Sg,Tg,Ug,Vg,Wg,Xg,Yg,Zg,_g,dh,eh,fh,gh,hh,ih,jh,kh,lh,mh,nh,Ch,Eh,Ph,Rh,_h,$h,ai,ci,ei,xi,yi,zi,Bi,Di,jk,pk,_o,_o,_o,_o,_o,_o,_o,_o,_o,_o,_o,_o,_o,_o,_o,_o,_o,_o,_o,_o,_o,_o,_o,_o,_o];var tb=[$o,Fh,Ih,Sh,Uh,$o,$o,$o];var ub=[ap,_b,Ld,Ee,Wf,Yf,Zf,Vf,Je,Ke,Pe,Hf,Jf,Kf,Gf,Ue,Ve,Zh,jm,lm,nm,tm,vm,pm,rm,wi,km,mm,om,um,wm,qm,sm,bj,cj,hj,mj,nj,sj,xj,yj,Dj,Ij,Jj,Oj,yl,zl,Bl,_l,am,$l,bm,ql,rl,tl,Gl,Hl,Jl,Ol,Pl,Rl,ap,ap,ap];var vb=[bp];var wb=[cp,Dc,Ec,cp];var xb=[dp,gi,Fi,vl,wl,nl,ol,Dl,El,Ll,Ml,dp,dp,dp,dp,dp];var yb=[ep,jl,Sk,Tk,Uk,_k,ep,ep];var zb=[fp,zc,yc,xc,Tf,Ef,tk,yk];var Ab=[gp,_f,Ge,Le,ag,Lf,Re,We,Nf,el,gl,il,Vk,Xk,Zk,gp];var Bb=[hp,Gg,Lg,xh,yh,Dh,Jh,Mh,Nh,Qh,Vh,ll,xl,Al,al,pl,sl,Fl,Il,Nl,Ql,hp,hp,hp,hp,hp,hp,hp,hp,hp,hp,hp];var Cb=[ip,mc,nc,pc,Uf,Ff,Hg,Mg];return{___cxa_can_catch:Ac,_fflush:vd,_main:Ob,___cxa_is_pointer_type:Bc,_i64Add:po,_memmove:to,_i64Subtract:no,_memset:oo,_malloc:oe,_memcpy:ro,_bitshift64Lshr:qo,_free:pe,___errno_location:Qc,_bitshift64Shl:so,__GLOBAL__I_000101:Ae,__GLOBAL__sub_I_iostream_cpp:Be,runPostSets:mo,stackAlloc:Db,stackSave:Eb,stackRestore:Fb,establishStackSpace:Gb,setThrew:Hb,setTempRet0:Kb,getTempRet0:Lb,dynCall_iiiiiiii:Do,dynCall_iiii:Eo,dynCall_viiiii:Fo,dynCall_iiiiiid:Go,dynCall_vi:Ho,dynCall_vii:Io,dynCall_iiiiiii:Jo,dynCall_iiiiid:Ko,dynCall_ii:Lo,dynCall_viii:Mo,dynCall_v:No,dynCall_iiiiiiiii:Oo,dynCall_iiiii:Po,dynCall_viiiiii:Qo,dynCall_iii:Ro,dynCall_iiiiii:So,dynCall_viiii:To}})


// EMSCRIPTEN_END_ASM
(e.hb, e.ib, buffer);
e.runPostSets = N.runPostSets;
e.___cxa_can_catch = N.___cxa_can_catch;
e._fflush = N._fflush;
e._main = N._main;
e.___cxa_is_pointer_type = N.___cxa_is_pointer_type;
var yd = e._i64Add = N._i64Add, Dd = e._memmove = N._memmove, jb = e._i64Subtract = N._i64Subtract, qb = e._memset = N._memset, G = e._malloc = N._malloc, Bd = e._memcpy = N._memcpy, gb = e.__GLOBAL__sub_I_iostream_cpp = N.__GLOBAL__sub_I_iostream_cpp, zd = e._bitshift64Lshr = N._bitshift64Lshr, Ja = e._free = N._free, fb = e.__GLOBAL__I_000101 = N.__GLOBAL__I_000101;
e.___errno_location = N.___errno_location;
var Cd = e._bitshift64Shl = N._bitshift64Shl;
e.dynCall_iiiiiiii = N.dynCall_iiiiiiii;
e.dynCall_iiii = N.dynCall_iiii;
e.dynCall_viiiii = N.dynCall_viiiii;
e.dynCall_iiiiiid = N.dynCall_iiiiiid;
e.dynCall_vi = N.dynCall_vi;
e.dynCall_vii = N.dynCall_vii;
e.dynCall_iiiiiii = N.dynCall_iiiiiii;
e.dynCall_iiiiid = N.dynCall_iiiiid;
e.dynCall_ii = N.dynCall_ii;
e.dynCall_viii = N.dynCall_viii;
e.dynCall_v = N.dynCall_v;
e.dynCall_iiiiiiiii = N.dynCall_iiiiiiiii;
e.dynCall_iiiii = N.dynCall_iiiii;
e.dynCall_viiiiii = N.dynCall_viiiiii;
e.dynCall_iii = N.dynCall_iii;
e.dynCall_iiiiii = N.dynCall_iiiiii;
e.dynCall_viiii = N.dynCall_viiii;
r.ia = N.stackAlloc;
r.Ba = N.stackSave;
r.ja = N.stackRestore;
r.Pd = N.establishStackSpace;
r.Ab = N.setTempRet0;
r.nb = N.getTempRet0;
if (M) {
  if ("function" === typeof e.locateFile ? M = e.locateFile(M) : e.memoryInitializerPrefixURL && (M = e.memoryInitializerPrefixURL + M), m || da) {
    var Gd = e.readBinary(M);
    H.set(Gd, r.Ha);
  } else {
    var Id = function() {
      td(M, Hd, function() {
        throw "could not load memory initializer " + M;
      });
    };
    db();
    var Hd = function(a) {
      a.byteLength && (a = new Uint8Array(a));
      H.set(a, r.Ha);
      eb();
    }, Jd = e.memoryInitializerRequest;
    if (Jd) {
      var Kd = function() {
        200 !== Jd.status && 0 !== Jd.status ? (console.warn("a problem seems to have happened with Module.memoryInitializerRequest, status: " + Jd.status + ", retrying " + M), Id()) : Hd(Jd.response);
      };
      Jd.response ? setTimeout(Kd, 0) : Jd.addEventListener("load", Kd);
    } else {
      Id();
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
var Ld = null, cb = function Md() {
  e.calledRun || Nd();
  e.calledRun || (cb = Md);
};
e.callMain = e.Ld = function(a) {
  function b() {
    for (var a = 0;3 > a;a++) {
      d.push(0);
    }
  }
  assert(0 == ab, "cannot call main when async dependencies remain! (listen on __ATMAIN__)");
  assert(0 == Va.length, "cannot call main when preRun functions remain to be called");
  a = a || [];
  Da || (Da = !0, Ua(Wa));
  var c = a.length + 1, d = [F(L(e.thisProgram), "i8", 0)];
  b();
  for (var f = 0;f < c - 1;f += 1) {
    d.push(F(L(a[f]), "i8", 0)), b();
  }
  d.push(0);
  d = F(d, "i32", 0);
  try {
    var g = e._main(c, d, 0);
    Od(g, !0);
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
function Nd(a) {
  function b() {
    if (!e.calledRun && (e.calledRun = !0, !y)) {
      Da || (Da = !0, Ua(Wa));
      Ua(Xa);
      if (e.onRuntimeInitialized) {
        e.onRuntimeInitialized();
      }
      e._main && Pd && e.callMain(a);
      if (e.postRun) {
        for ("function" == typeof e.postRun && (e.postRun = [e.postRun]);e.postRun.length;) {
          $a(e.postRun.shift());
        }
      }
      Ua(Ya);
    }
  }
  a = a || e.arguments;
  null === Ld && (Ld = Date.now());
  if (!(0 < ab)) {
    if (e.preRun) {
      for ("function" == typeof e.preRun && (e.preRun = [e.preRun]);e.preRun.length;) {
        Za(e.preRun.shift());
      }
    }
    Ua(Va);
    0 < ab || e.calledRun || (e.setStatus ? (e.setStatus("Running..."), setTimeout(function() {
      setTimeout(function() {
        e.setStatus("");
      }, 1);
      b();
    }, 1)) : b());
  }
}
e.run = e.run = Nd;
function Od(a, b) {
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
e.exit = e.exit = Od;
var Qd = [];
function x(a) {
  void 0 !== a ? (e.print(a), e.aa(a), a = JSON.stringify(a)) : a = "";
  y = !0;
  var b = "abort(" + a + ") at " + Ka() + "\nIf this abort() is unexpected, build with -s ASSERTIONS=1 which can give more information.";
  Qd && Qd.forEach(function(c) {
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
var Pd = !0;
e.noInitialRun && (Pd = !1);
Nd();


