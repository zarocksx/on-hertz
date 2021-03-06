(function b(c, d, e) {
  function a(h, i) {
    if (!d[h]) {
      if (!c[h]) {
        var j = "function" == typeof require && require;
        if (!i && j) return j(h, !0);
        if (g) return g(h, !0);
        var k = new Error("Cannot find module '" + h + "'");
        throw ((k.code = "MODULE_NOT_FOUND"), k);
      }
      var f = (d[h] = { exports: {} });
      c[h][0].call(
        f.exports,
        function (b) {
          var d = c[h][1][b];
          return a(d ? d : b);
        },
        f,
        f.exports,
        b,
        c,
        d,
        e
      );
    }
    return d[h].exports;
  }
  for (
    var g = "function" == typeof require && require, f = 0;
    f < e.length;
    f++
  )
    a(e[f]);
  return a;
})(
  {
    1: [
      function (a, b) {
        function c() {
          throw new Error("setTimeout has not been defined");
        }
        function d() {
          throw new Error("clearTimeout has not been defined");
        }
        function e(a) {
          if (k === setTimeout) return setTimeout(a, 0);
          if ((k === c || !k) && setTimeout)
            return (k = setTimeout), setTimeout(a, 0);
          try {
            return k(a, 0);
          } catch (b) {
            try {
              return k.call(null, a, 0);
            } catch (b) {
              return k.call(this, a, 0);
            }
          }
        }
        function f(a) {
          if (l === clearTimeout) return clearTimeout(a);
          if ((l === d || !l) && clearTimeout)
            return (l = clearTimeout), clearTimeout(a);
          try {
            return l(a);
          } catch (b) {
            try {
              return l.call(null, a);
            } catch (b) {
              return l.call(this, a);
            }
          }
        }
        function g() {
          p &&
            n &&
            ((p = !1),
            n.length ? (o = n.concat(o)) : (q = -1),
            o.length && h());
        }
        function h() {
          if (!p) {
            var a = e(g);
            p = !0;
            for (var b = o.length; b; ) {
              for (n = o, o = []; ++q < b; ) n && n[q].run();
              (q = -1), (b = o.length);
            }
            (n = null), (p = !1), f(a);
          }
        }
        function j(a, b) {
          (this.fun = a), (this.array = b);
        }
        function i() {}
        var k,
          l,
          m = (b.exports = {});
        (function () {
          try {
            k = "function" == typeof setTimeout ? setTimeout : c;
          } catch (a) {
            k = c;
          }
          try {
            l = "function" == typeof clearTimeout ? clearTimeout : d;
          } catch (a) {
            l = d;
          }
        })();
        var n,
          o = [],
          p = !1,
          q = -1;
        (m.nextTick = function (a) {
          var b = Array(arguments.length - 1);
          if (1 < arguments.length)
            for (var c = 1; c < arguments.length; c++) b[c - 1] = arguments[c];
          o.push(new j(a, b)), 1 !== o.length || p || e(h);
        }),
          (j.prototype.run = function () {
            this.fun.apply(null, this.array);
          }),
          (m.title = "browser"),
          (m.browser = !0),
          (m.env = {}),
          (m.argv = []),
          (m.version = ""),
          (m.versions = {}),
          (m.on = i),
          (m.addListener = i),
          (m.once = i),
          (m.off = i),
          (m.removeListener = i),
          (m.removeAllListeners = i),
          (m.emit = i),
          (m.prependListener = i),
          (m.prependOnceListener = i),
          (m.listeners = function () {
            return [];
          }),
          (m.binding = function () {
            throw new Error("process.binding is not supported");
          }),
          (m.cwd = function () {
            return "/";
          }),
          (m.chdir = function () {
            throw new Error("process.chdir is not supported");
          }),
          (m.umask = function () {
            return 0;
          });
      },
      {},
    ],
    2: [
      function (a) {
        "use strict";
        function b(a) {
          return a && a.__esModule ? a : { default: a };
        }
        function c(a) {
          if (a && a.__esModule) return a;
          var b = {};
          if (null != a)
            for (var c in a)
              Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
          return (b.default = a), b;
        }
        var d,
          e = a("./midi/midi_access"),
          f = a("./util/util"),
          g = a("./midi/midi_input"),
          h = c(g),
          i = a("./midi/midi_output"),
          j = c(i),
          k = a("./midi/midimessage_event"),
          l = b(k),
          m = a("./midi/midiconnection_event"),
          n = b(m);
        (function () {
          navigator.requestMIDIAccess ||
            ((0, f.polyfill)(),
            (navigator.requestMIDIAccess = function () {
              if (d == void 0) {
                d = (0, e.createMIDIAccess)();
                var a = (0, f.getScope)();
                (a.MIDIInput = h),
                  (a.MIDIOutput = j),
                  (a.MIDIMessageEvent = l.default),
                  (a.MIDIConnectionEvent = n.default);
              }
              return d;
            }),
            !0 === (0, f.getDevice)().nodejs &&
              (navigator.close = function () {
                (0, e.closeAllMIDIInputs)();
              }));
        })();
      },
      {
        "./midi/midi_access": 3,
        "./midi/midi_input": 4,
        "./midi/midi_output": 5,
        "./midi/midiconnection_event": 6,
        "./midi/midimessage_event": 7,
        "./util/util": 10,
      },
    ],
    3: [
      function (a, b, c) {
        "use strict";
        function d(a) {
          return a && a.__esModule ? a : { default: a };
        }
        function e(a, b) {
          if (!(a instanceof b))
            throw new TypeError("Cannot call a class as a function");
        }
        function f(a) {
          var b = x.MidiInList(),
            c = x.MidiOutList(),
            d = b.length,
            e = c.length;
          g(0, d, "input", b, function () {
            g(0, e, "output", c, a);
          });
        }
        function g(a, b, c, d, e) {
          if (a < b) {
            var f = d[a++];
            h(c, f, function () {
              g(a, b, c, d, e);
            });
          } else e();
        }
        function h(a, b, c) {
          (0, s.getJazzInstance)(a, function (d) {
            var e,
              f = [b, "", ""];
            "input" === a
              ? (d.Support("MidiInInfo") && (f = d.MidiInInfo(b)),
                (e = new n.default(f, d)),
                y.set(e.id, e))
              : "output" === a &&
                (d.Support("MidiOutInfo") && (f = d.MidiOutInfo(b)),
                (e = new p.default(f, d)),
                z.set(e.id, e)),
              c(e);
          });
        }
        function i(a, b) {
          for (
            var c = void 0, d = a.values(), e = 0;
            e < d.length && ((c = d[e]), c.name !== b);
            e += 1
          );
          return c;
        }
        function j() {
          x.OnDisconnectMidiIn(function (a) {
            var b = i(y, a);
            b !== void 0 &&
              ((b.state = "disconnected"),
              b.close(),
              (b._jazzInstance.inputInUse = !1),
              y.delete(b.id),
              k(b));
          }),
            x.OnDisconnectMidiOut(function (a) {
              var b = i(z, a);
              b !== void 0 &&
                ((b.state = "disconnected"),
                b.close(),
                (b._jazzInstance.outputInUse = !1),
                z.delete(b.id),
                k(b));
            }),
            x.OnConnectMidiIn(function (a) {
              h("input", a, function (a) {
                k(a);
              });
            }),
            x.OnConnectMidiOut(function (a) {
              h("output", a, function (a) {
                k(a);
              });
            });
        }
        function k(a) {
          a.dispatchEvent(new r.default(a, a));
          var b = new r.default(w, a);
          "function" == typeof w.onstatechange && w.onstatechange(b),
            C.forEach(function (a) {
              return a(b);
            });
        }
        Object.defineProperty(c, "__esModule", { value: !0 });
        var l = (function () {
          function a(a, b) {
            for (var c, d = 0; d < b.length; d++)
              (c = b[d]),
                (c.enumerable = c.enumerable || !1),
                (c.configurable = !0),
                "value" in c && (c.writable = !0),
                Object.defineProperty(a, c.key, c);
          }
          return function (b, c, d) {
            return c && a(b.prototype, c), d && a(b, d), b;
          };
        })();
        (c.createMIDIAccess = function () {
          return new Promise(function (a, b) {
            return "undefined" == typeof w
              ? "ie9" === (0, t.getDevice)().browser
                ? void b({
                    message:
                      "WebMIDIAPIShim supports Internet Explorer 10 and above.",
                  })
                : void (0, s.createJazzInstance)(function (c) {
                    return "undefined" == typeof c || null === c
                      ? void b({
                          message:
                            "No access to MIDI devices: your browser does not support the WebMIDI API and the Jazz plugin is not installed.",
                        })
                      : void ((x = c),
                        f(function () {
                          j(), (w = new D(y, z)), a(w);
                        }));
                  })
              : void a(w);
          });
        }),
          (c.dispatchEvent = k),
          (c.closeAllMIDIInputs = function () {
            y.forEach(function (a) {
              a._jazzInstance.MidiInClose();
            });
          }),
          (c.getMIDIDeviceId = function (a, b) {
            var c;
            return (
              "input" === b
                ? ((c = A.get(a)),
                  void 0 === c && ((c = (0, t.generateUUID)()), A.set(a, c)))
                : "output" === b &&
                  ((c = B.get(a)),
                  void 0 === c && ((c = (0, t.generateUUID)()), B.set(a, c))),
              c
            );
          });
        var m = a("./midi_input"),
          n = d(m),
          o = a("./midi_output"),
          p = d(o),
          q = a("./midiconnection_event"),
          r = d(q),
          s = a("../util/jazz_instance"),
          t = a("../util/util"),
          u = a("../util/store"),
          v = d(u),
          w = void 0,
          x = void 0,
          y = new v.default(),
          z = new v.default(),
          A = new v.default(),
          B = new v.default(),
          C = new v.default(),
          D = (function () {
            function a(b, c) {
              e(this, a),
                (this.sysexEnabled = !0),
                (this.inputs = b),
                (this.outputs = c);
            }
            return (
              l(a, [
                {
                  key: "addEventListener",
                  value: function (a, b) {
                    "statechange" !== a || (!1 === C.has(b) && C.add(b));
                  },
                },
                {
                  key: "removeEventListener",
                  value: function (a, b) {
                    "statechange" !== a || (!0 === C.has(b) && C.delete(b));
                  },
                },
              ]),
              a
            );
          })();
      },
      {
        "../util/jazz_instance": 8,
        "../util/store": 9,
        "../util/util": 10,
        "./midi_input": 4,
        "./midi_output": 5,
        "./midiconnection_event": 6,
      },
    ],
    4: [
      function (a, b, c) {
        "use strict";
        function d(a) {
          return a && a.__esModule ? a : { default: a };
        }
        function e(a, b) {
          if (!(a instanceof b))
            throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(c, "__esModule", { value: !0 });
        var f,
          g = (function () {
            function a(a, b) {
              for (var c, d = 0; d < b.length; d++)
                (c = b[d]),
                  (c.enumerable = c.enumerable || !1),
                  (c.configurable = !0),
                  "value" in c && (c.writable = !0),
                  Object.defineProperty(a, c.key, c);
            }
            return function (b, c, d) {
              return c && a(b.prototype, c), d && a(b, d), b;
            };
          })(),
          h = a("./midimessage_event"),
          i = d(h),
          j = a("./midiconnection_event"),
          k = d(j),
          l = a("./midi_access"),
          m = a("../util/util"),
          n = a("../util/store"),
          o = d(n),
          p = (0, m.getDevice)().nodejs,
          q = (function () {
            function a(b, c) {
              e(this, a),
                (this.id = (0, l.getMIDIDeviceId)(b[0], "input")),
                (this.name = b[0]),
                (this.manufacturer = b[1]),
                (this.version = b[2]),
                (this.type = "input"),
                (this.state = "connected"),
                (this.connection = "pending"),
                (this.onstatechange = null),
                (this._onmidimessage = null),
                Object.defineProperty(this, "onmidimessage", {
                  set: function (a) {
                    (this._onmidimessage = a),
                      "function" == typeof a && this.open();
                  },
                }),
                (this._listeners = new o.default()
                  .set("midimessage", new o.default())
                  .set("statechange", new o.default())),
                (this._inLongSysexMessage = !1),
                (this._sysexBuffer = new Uint8Array()),
                (this._jazzInstance = c),
                (this._jazzInstance.inputInUse = !0),
                "linux" === (0, m.getDevice)().platform &&
                  this._jazzInstance.MidiInOpen(this.name, f.bind(this));
            }
            return (
              g(a, [
                {
                  key: "addEventListener",
                  value: function (a, b) {
                    var c = this._listeners.get(a);
                    "undefined" == typeof c || (!1 === c.has(b) && c.add(b));
                  },
                },
                {
                  key: "removeEventListener",
                  value: function (a, b) {
                    var c = this._listeners.get(a);
                    "undefined" == typeof c || (!0 === c.has(b) && c.delete(b));
                  },
                },
                {
                  key: "dispatchEvent",
                  value: function (a) {
                    var b = this._listeners.get(a.type);
                    b.forEach(function (b) {
                      b(a);
                    }),
                      "midimessage" === a.type
                        ? null !== this._onmidimessage && this._onmidimessage(a)
                        : "statechange" === a.type &&
                          null !== this.onstatechange &&
                          this.onstatechange(a);
                  },
                },
                {
                  key: "open",
                  value: function () {
                    "open" === this.connection ||
                      ("linux" !== (0, m.getDevice)().platform &&
                        this._jazzInstance.MidiInOpen(this.name, f.bind(this)),
                      (this.connection = "open"),
                      (0, l.dispatchEvent)(this));
                  },
                },
                {
                  key: "close",
                  value: function () {
                    "closed" === this.connection ||
                      ("linux" !== (0, m.getDevice)().platform &&
                        this._jazzInstance.MidiInClose(),
                      (this.connection = "closed"),
                      (0, l.dispatchEvent)(this),
                      (this._onmidimessage = null),
                      (this.onstatechange = null),
                      this._listeners.get("midimessage").clear(),
                      this._listeners.get("statechange").clear());
                  },
                },
                {
                  key: "_appendToSysexBuffer",
                  value: function (a) {
                    var b = this._sysexBuffer.length,
                      c = new Uint8Array(b + a.length);
                    c.set(this._sysexBuffer),
                      c.set(a, b),
                      (this._sysexBuffer = c);
                  },
                },
                {
                  key: "_bufferLongSysex",
                  value: function (a, b) {
                    for (var c = b; c < a.length; ) {
                      if (247 == a[c])
                        return (
                          (c += 1), this._appendToSysexBuffer(a.slice(b, c)), c
                        );
                      c += 1;
                    }
                    return (
                      this._appendToSysexBuffer(a.slice(b, c)),
                      (this._inLongSysexMessage = !0),
                      c
                    );
                  },
                },
              ]),
              a
            );
          })();
        (c.default = q),
          (f = function (a, b) {
            var c,
              d = 0,
              f = !1;
            for (c = 0; c < b.length; c += d) {
              var g = !0;
              if (this._inLongSysexMessage) {
                if (((c = this._bufferLongSysex(b, c)), 247 != b[c - 1]))
                  return;
                f = !0;
              } else
                switch (((f = !1), 240 & b[c])) {
                  case 0:
                    (d = 1), (g = !1);
                    break;
                  case 128:
                  case 144:
                  case 160:
                  case 176:
                  case 224:
                    d = 3;
                    break;
                  case 192:
                  case 208:
                    d = 2;
                    break;
                  case 240:
                    switch (b[c]) {
                      case 240:
                        if (
                          ((c = this._bufferLongSysex(b, c)), 247 != b[c - 1])
                        )
                          return;
                        f = !0;
                        break;
                      case 241:
                      case 243:
                        d = 2;
                        break;
                      case 242:
                        d = 3;
                        break;
                      default:
                        d = 1;
                    }
                }
              if (g) {
                var h = {};
                if (
                  ((h.receivedTime =
                    parseFloat(a.toString()) +
                    this._jazzInstance._perfTimeZero),
                  f || this._inLongSysexMessage
                    ? ((h.data = new Uint8Array(this._sysexBuffer)),
                      (this._sysexBuffer = new Uint8Array(0)),
                      (this._inLongSysexMessage = !1))
                    : (h.data = new Uint8Array(b.slice(c, d + c))),
                  p)
                )
                  this._onmidimessage && this._onmidimessage(h);
                else {
                  var j = new i.default(this, h.data, h.receivedTime);
                  this.dispatchEvent(j);
                }
              }
            }
          });
      },
      {
        "../util/store": 9,
        "../util/util": 10,
        "./midi_access": 3,
        "./midiconnection_event": 6,
        "./midimessage_event": 7,
      },
    ],
    5: [
      function (a, b, c) {
        "use strict";
        function d(a, b) {
          if (!(a instanceof b))
            throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(c, "__esModule", { value: !0 });
        var e = (function () {
            function a(a, b) {
              for (var c, d = 0; d < b.length; d++)
                (c = b[d]),
                  (c.enumerable = c.enumerable || !1),
                  (c.configurable = !0),
                  "value" in c && (c.writable = !0),
                  Object.defineProperty(a, c.key, c);
            }
            return function (b, c, d) {
              return c && a(b.prototype, c), d && a(b, d), b;
            };
          })(),
          f = a("../util/util"),
          g = a("../util/store"),
          h = (function (a) {
            return a && a.__esModule ? a : { default: a };
          })(g),
          i = a("./midi_access"),
          j = (function () {
            function a(b, c) {
              d(this, a),
                (this.id = (0, i.getMIDIDeviceId)(b[0], "output")),
                (this.name = b[0]),
                (this.manufacturer = b[1]),
                (this.version = b[2]),
                (this.type = "output"),
                (this.state = "connected"),
                (this.connection = "pending"),
                (this.onmidimessage = null),
                (this.onstatechange = null),
                (this._listeners = new h.default()),
                (this._inLongSysexMessage = !1),
                (this._sysexBuffer = new Uint8Array()),
                (this._jazzInstance = c),
                (this._jazzInstance.outputInUse = !0),
                "linux" === (0, f.getDevice)().platform &&
                  this._jazzInstance.MidiOutOpen(this.name);
            }
            return (
              e(a, [
                {
                  key: "open",
                  value: function () {
                    "open" === this.connection ||
                      ("linux" !== (0, f.getDevice)().platform &&
                        this._jazzInstance.MidiOutOpen(this.name),
                      (this.connection = "open"),
                      (0, i.dispatchEvent)(this));
                  },
                },
                {
                  key: "close",
                  value: function () {
                    "closed" === this.connection ||
                      ("linux" !== (0, f.getDevice)().platform &&
                        this._jazzInstance.MidiOutClose(),
                      (this.connection = "closed"),
                      (0, i.dispatchEvent)(this),
                      (this.onstatechange = null),
                      this._listeners.clear());
                  },
                },
                {
                  key: "send",
                  value: function (a, b) {
                    var c = this,
                      d = 0;
                    return (
                      0 !== a.length &&
                      (b && (d = Math.floor(b - performance.now())),
                      b && 1 < d
                        ? setTimeout(function () {
                            c._jazzInstance.MidiOutLong(a);
                          }, d)
                        : this._jazzInstance.MidiOutLong(a),
                      !0)
                    );
                  },
                },
                { key: "clear", value: function () {} },
                {
                  key: "addEventListener",
                  value: function (a, b) {
                    "statechange" !== a ||
                      (!1 === this._listeners.has(b) && this._listeners.add(b));
                  },
                },
                {
                  key: "removeEventListener",
                  value: function (a, b) {
                    "statechange" !== a ||
                      (!0 === this._listeners.has(b) &&
                        this._listeners.delete(b));
                  },
                },
                {
                  key: "dispatchEvent",
                  value: function (a) {
                    this._listeners.forEach(function (b) {
                      b(a);
                    }),
                      null !== this.onstatechange && this.onstatechange(a);
                  },
                },
              ]),
              a
            );
          })();
        c.default = j;
      },
      { "../util/store": 9, "../util/util": 10, "./midi_access": 3 },
    ],
    6: [
      function (a, b, c) {
        "use strict";
        function d(a, b) {
          if (!(a instanceof b))
            throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(c, "__esModule", { value: !0 });
        c.default = function a(b, c) {
          d(this, a),
            (this.bubbles = !1),
            (this.cancelBubble = !1),
            (this.cancelable = !1),
            (this.currentTarget = b),
            (this.defaultPrevented = !1),
            (this.eventPhase = 0),
            (this.path = []),
            (this.port = c),
            (this.returnValue = !0),
            (this.srcElement = b),
            (this.target = b),
            (this.timeStamp = Date.now()),
            (this.type = "statechange");
        };
      },
      {},
    ],
    7: [
      function (a, b, c) {
        "use strict";
        function d(a, b) {
          if (!(a instanceof b))
            throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(c, "__esModule", { value: !0 });
        c.default = function a(b, c, e) {
          d(this, a),
            (this.bubbles = !1),
            (this.cancelBubble = !1),
            (this.cancelable = !1),
            (this.currentTarget = b),
            (this.data = c),
            (this.defaultPrevented = !1),
            (this.eventPhase = 0),
            (this.path = []),
            (this.receivedTime = e),
            (this.returnValue = !0),
            (this.srcElement = b),
            (this.target = b),
            (this.timeStamp = Date.now()),
            (this.type = "midimessage");
        };
      },
      {},
    ],
    8: [
      function (a, b, c) {
        "use strict";
        function d(b) {
          var c = "jazz_" + i + "_" + Date.now();
          i += 1;
          var d, e;
          if (!0 === (0, g.getDevice)().nodejs)
            d = new navigator.jazzMidi.MIDI();
          else {
            (e = document.createElement("object")),
              (e.id = c + "ie"),
              (e.classid = "CLSID:1ACE1618-1C7D-4561-AEE1-34842AA85E90"),
              (d = document.createElement("object")),
              (d.id = c),
              (d.type = "audio/x-jazz"),
              e.appendChild(d);
            var f = document.createElement("p");
            f.appendChild(document.createTextNode("This page requires the "));
            var k = document.createElement("a");
            k.appendChild(document.createTextNode("Jazz plugin")),
              (k.href = "http://jazz-soft.net/"),
              f.appendChild(k),
              f.appendChild(document.createTextNode(".")),
              d.appendChild(f);
            var a = document.getElementById("MIDIPlugin");
            a ||
              ((a = document.createElement("div")),
              (a.id = "MIDIPlugin"),
              (a.style.position = "absolute"),
              (a.style.visibility = "hidden"),
              (a.style.left = "-9999px"),
              (a.style.top = "-9999px"),
              document.body.appendChild(a)),
              a.appendChild(e);
          }
          setTimeout(function () {
            var a = null;
            !0 === d.isJazz ? (a = d) : !0 === e.isJazz && (a = e),
              null !== a &&
                ((a._perfTimeZero = performance.now()), j.set(i, a)),
              b(a);
          }, h);
        }
        Object.defineProperty(c, "__esModule", { value: !0 }),
          (c.createJazzInstance = d),
          (c.getJazzInstance = function (a, b) {
            for (
              var c,
                e = "input" === a ? "inputInUse" : "outputInUse",
                f = null,
                g = j.values(),
                h = 0;
              h < g.length;
              h += 1
            )
              if (((c = g[h]), !0 !== c[e])) {
                f = c;
                break;
              }
            null === f ? d(b) : b(f);
          });
        var e = a("./store"),
          f = (function (a) {
            return a && a.__esModule ? a : { default: a };
          })(e),
          g = a("./util"),
          h = "firefox" === (0, g.getDevice)().browser ? 200 : 100,
          i = 0,
          j = new f.default();
      },
      { "./store": 9, "./util": 10 },
    ],
    9: [
      function (a, b, c) {
        "use strict";
        function d(a, b) {
          if (!(a instanceof b))
            throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(c, "__esModule", { value: !0 });
        var e = (function () {
            function a(a, b) {
              for (var c, d = 0; d < b.length; d++)
                (c = b[d]),
                  (c.enumerable = c.enumerable || !1),
                  (c.configurable = !0),
                  "value" in c && (c.writable = !0),
                  Object.defineProperty(a, c.key, c);
            }
            return function (b, c, d) {
              return c && a(b.prototype, c), d && a(b, d), b;
            };
          })(),
          f = 0,
          g = (function () {
            function a() {
              d(this, a), (this.store = {}), (this.keys = []);
            }
            return (
              e(a, [
                {
                  key: "add",
                  value: function (a) {
                    var b = "" + new Date().getTime() + f;
                    (f += 1), this.keys.push(b), (this.store[b] = a);
                  },
                },
                {
                  key: "set",
                  value: function (a, b) {
                    return this.keys.push(a), (this.store[a] = b), this;
                  },
                },
                {
                  key: "get",
                  value: function (a) {
                    return this.store[a];
                  },
                },
                {
                  key: "has",
                  value: function (a) {
                    return -1 !== this.keys.indexOf(a);
                  },
                },
                {
                  key: "delete",
                  value: function (a) {
                    delete this.store[a];
                    var b = this.keys.indexOf(a);
                    return -1 < b && this.keys.splice(b, 1), this;
                  },
                },
                {
                  key: "values",
                  value: function () {
                    for (
                      var a, b = [], c = this.keys.length, d = 0;
                      d < c;
                      d += 1
                    )
                      (a = this.store[this.keys[d]]), b.push(a);
                    return b;
                  },
                },
                {
                  key: "forEach",
                  value: function (a) {
                    for (var b, c = this.keys.length, d = 0; d < c; d += 1)
                      (b = this.store[this.keys[d]]), a(b);
                  },
                },
                {
                  key: "clear",
                  value: function () {
                    (this.keys = []), (this.store = {});
                  },
                },
              ]),
              a
            );
          })();
        c.default = g;
      },
      {},
    ],
    10: [
      function (a, b, c) {
        (function (a, b) {
          "use strict";
          function d() {
            return "undefined" == typeof f
              ? ((f = null),
                "undefined" == typeof window
                  ? "undefined" != typeof b && (f = b)
                  : (f = window),
                f)
              : f;
          }
          function e() {
            var b = d();
            if (null != g) return g;
            var c = "undetected",
              e = "undetected";
            if (!0 === b.navigator.node)
              return (
                (g = {
                  platform: a.platform,
                  nodejs: !0,
                  mobile: "ios" == c || "android" == c,
                }),
                g
              );
            var f = b.navigator.userAgent;
            return (
              f.match(/(iPad|iPhone|iPod)/g)
                ? (c = "ios")
                : -1 === f.indexOf("Android")
                ? -1 === f.indexOf("Linux")
                  ? -1 === f.indexOf("Macintosh")
                    ? -1 !== f.indexOf("Windows") && (c = "windows")
                    : (c = "osx")
                  : (c = "linux")
                : (c = "android"),
              -1 === f.indexOf("Chrome")
                ? -1 === f.indexOf("Safari")
                  ? -1 === f.indexOf("Firefox")
                    ? -1 !== f.indexOf("Trident") &&
                      ((e = "ie"), -1 !== f.indexOf("MSIE 9") && (e = "ie9"))
                    : (e = "firefox")
                  : (e = "safari")
                : ((e = "chrome"),
                  -1 === f.indexOf("OPR")
                    ? -1 !== f.indexOf("Chromium") && (e = "chromium")
                    : (e = "opera")),
              "ios" == c && -1 !== f.indexOf("CriOS") && (e = "chrome"),
              (g = {
                platform: c,
                browser: e,
                mobile: "ios" == c || "android" == c,
                nodejs: !1,
              }),
              g
            );
          }
          Object.defineProperty(c, "__esModule", { value: !0 }),
            (c.getScope = d),
            (c.getDevice = e),
            (c.generateUUID = function () {
              var a = new Date().getTime(),
                b = Array(64).join("x");
              return (
                (b = b.replace(/[xy]/g, function (b) {
                  var c = 0 | (a + 16 * Math.random()) % 16;
                  return (
                    (a = Math.floor(a / 16)),
                    ("x" === b ? c : 8 | (3 & c)).toString(16).toUpperCase()
                  );
                })),
                b
              );
            }),
            (c.polyfill = function () {
              var a = e();
              ("ie" === a.browser || !0 === a.nodejs) && i(), h();
            });
          var f = void 0,
            g = null,
            h = function () {
              var a = d();
              if (
                ("undefined" == typeof a.performance && (a.performance = {}),
                (Date.now =
                  Date.now ||
                  function () {
                    return new Date().getTime();
                  }),
                "undefined" == typeof a.performance.now)
              ) {
                var b = Date.now();
                "undefined" != typeof a.performance.timing &&
                  "undefined" != typeof a.performance.timing.navigationStart &&
                  (b = a.performance.timing.navigationStart),
                  (a.performance.now = function () {
                    return Date.now() - b;
                  });
              }
            },
            i = function () {
              var a = d();
              "function" != typeof a.Promise &&
                ((a.Promise = function (a) {
                  this.executor = a;
                }),
                (a.Promise.prototype.then = function (a, b) {
                  "function" != typeof a && (a = function () {}),
                    "function" != typeof b && (b = function () {}),
                    this.executor(a, b);
                }));
            };
        }.call(
          this,
          a("_process"),
          "undefined" == typeof global
            ? "undefined" == typeof self
              ? "undefined" == typeof window
                ? {}
                : window
              : self
            : global
        ));
      },
      { _process: 1 },
    ],
  },
  {},
  [2]
);
