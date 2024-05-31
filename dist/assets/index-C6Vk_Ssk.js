function zf(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function qs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var bs = { exports: {} },
  Wl = {},
  ea = { exports: {} },
  K = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Rr = Symbol.for("react.element"),
  Mf = Symbol.for("react.portal"),
  Df = Symbol.for("react.fragment"),
  Ff = Symbol.for("react.strict_mode"),
  Uf = Symbol.for("react.profiler"),
  Bf = Symbol.for("react.provider"),
  $f = Symbol.for("react.context"),
  Vf = Symbol.for("react.forward_ref"),
  Af = Symbol.for("react.suspense"),
  Wf = Symbol.for("react.memo"),
  Hf = Symbol.for("react.lazy"),
  Mu = Symbol.iterator;
function Qf(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Mu && e[Mu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ta = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  na = Object.assign,
  ra = {};
function Qn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ra),
    (this.updater = n || ta);
}
Qn.prototype.isReactComponent = {};
Qn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Qn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function la() {}
la.prototype = Qn.prototype;
function Ii(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ra),
    (this.updater = n || ta);
}
var zi = (Ii.prototype = new la());
zi.constructor = Ii;
na(zi, Qn.prototype);
zi.isPureReactComponent = !0;
var Du = Array.isArray,
  oa = Object.prototype.hasOwnProperty,
  Mi = { current: null },
  ia = { key: !0, ref: !0, __self: !0, __source: !0 };
function ua(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      oa.call(t, r) && !ia.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: Rr,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Mi.current,
  };
}
function Kf(e, t) {
  return {
    $$typeof: Rr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Di(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Rr;
}
function Yf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Fu = /\/+/g;
function ao(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Yf("" + e.key)
    : t.toString(36);
}
function ol(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Rr:
          case Mf:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + ao(i, 0) : r),
      Du(l)
        ? ((n = ""),
          e != null && (n = e.replace(Fu, "$&/") + "/"),
          ol(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (Di(l) &&
            (l = Kf(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Fu, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Du(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + ao(o, u);
      i += ol(o, t, n, s, l);
    }
  else if (((s = Qf(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + ao(o, u++)), (i += ol(o, t, n, s, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function Ar(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    ol(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function Gf(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ue = { current: null },
  il = { transition: null },
  Xf = {
    ReactCurrentDispatcher: Ue,
    ReactCurrentBatchConfig: il,
    ReactCurrentOwner: Mi,
  };
K.Children = {
  map: Ar,
  forEach: function (e, t, n) {
    Ar(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ar(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ar(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Di(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
K.Component = Qn;
K.Fragment = Df;
K.Profiler = Uf;
K.PureComponent = Ii;
K.StrictMode = Ff;
K.Suspense = Af;
K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xf;
K.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = na({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = Mi.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      oa.call(t, s) &&
        !ia.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: Rr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
K.createContext = function (e) {
  return (
    (e = {
      $$typeof: $f,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Bf, _context: e }),
    (e.Consumer = e)
  );
};
K.createElement = ua;
K.createFactory = function (e) {
  var t = ua.bind(null, e);
  return (t.type = e), t;
};
K.createRef = function () {
  return { current: null };
};
K.forwardRef = function (e) {
  return { $$typeof: Vf, render: e };
};
K.isValidElement = Di;
K.lazy = function (e) {
  return { $$typeof: Hf, _payload: { _status: -1, _result: e }, _init: Gf };
};
K.memo = function (e, t) {
  return { $$typeof: Wf, type: e, compare: t === void 0 ? null : t };
};
K.startTransition = function (e) {
  var t = il.transition;
  il.transition = {};
  try {
    e();
  } finally {
    il.transition = t;
  }
};
K.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
K.useCallback = function (e, t) {
  return Ue.current.useCallback(e, t);
};
K.useContext = function (e) {
  return Ue.current.useContext(e);
};
K.useDebugValue = function () {};
K.useDeferredValue = function (e) {
  return Ue.current.useDeferredValue(e);
};
K.useEffect = function (e, t) {
  return Ue.current.useEffect(e, t);
};
K.useId = function () {
  return Ue.current.useId();
};
K.useImperativeHandle = function (e, t, n) {
  return Ue.current.useImperativeHandle(e, t, n);
};
K.useInsertionEffect = function (e, t) {
  return Ue.current.useInsertionEffect(e, t);
};
K.useLayoutEffect = function (e, t) {
  return Ue.current.useLayoutEffect(e, t);
};
K.useMemo = function (e, t) {
  return Ue.current.useMemo(e, t);
};
K.useReducer = function (e, t, n) {
  return Ue.current.useReducer(e, t, n);
};
K.useRef = function (e) {
  return Ue.current.useRef(e);
};
K.useState = function (e) {
  return Ue.current.useState(e);
};
K.useSyncExternalStore = function (e, t, n) {
  return Ue.current.useSyncExternalStore(e, t, n);
};
K.useTransition = function () {
  return Ue.current.useTransition();
};
K.version = "18.2.0";
ea.exports = K;
var V = ea.exports;
const Zf = qs(V),
  Jf = zf({ __proto__: null, default: Zf }, [V]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qf = V,
  bf = Symbol.for("react.element"),
  ed = Symbol.for("react.fragment"),
  td = Object.prototype.hasOwnProperty,
  nd = qf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  rd = { key: !0, ref: !0, __self: !0, __source: !0 };
function sa(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) td.call(t, r) && !rd.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: bf,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: nd.current,
  };
}
Wl.Fragment = ed;
Wl.jsx = sa;
Wl.jsxs = sa;
bs.exports = Wl;
var C = bs.exports,
  Fo = {},
  aa = { exports: {} },
  qe = {},
  ca = { exports: {} },
  fa = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(R, B) {
    var U = R.length;
    R.push(B);
    e: for (; 0 < U; ) {
      var Y = (U - 1) >>> 1,
        G = R[Y];
      if (0 < l(G, B)) (R[Y] = B), (R[U] = G), (U = Y);
      else break e;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function r(R) {
    if (R.length === 0) return null;
    var B = R[0],
      U = R.pop();
    if (U !== B) {
      R[0] = U;
      e: for (var Y = 0, G = R.length, ie = G >>> 1; Y < ie; ) {
        var ee = 2 * (Y + 1) - 1,
          me = R[ee],
          Ye = ee + 1,
          St = R[Ye];
        if (0 > l(me, U))
          Ye < G && 0 > l(St, me)
            ? ((R[Y] = St), (R[Ye] = U), (Y = Ye))
            : ((R[Y] = me), (R[ee] = U), (Y = ee));
        else if (Ye < G && 0 > l(St, U)) (R[Y] = St), (R[Ye] = U), (Y = Ye);
        else break e;
      }
    }
    return B;
  }
  function l(R, B) {
    var U = R.sortIndex - B.sortIndex;
    return U !== 0 ? U : R.id - B.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var s = [],
    c = [],
    p = 1,
    h = null,
    m = 3,
    k = !1,
    x = !1,
    g = !1,
    N = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(R) {
    for (var B = n(c); B !== null; ) {
      if (B.callback === null) r(c);
      else if (B.startTime <= R)
        r(c), (B.sortIndex = B.expirationTime), t(s, B);
      else break;
      B = n(c);
    }
  }
  function S(R) {
    if (((g = !1), d(R), !x))
      if (n(s) !== null) (x = !0), ke(E);
      else {
        var B = n(c);
        B !== null && Te(S, B.startTime - R);
      }
  }
  function E(R, B) {
    (x = !1), g && ((g = !1), f(_), (_ = -1)), (k = !0);
    var U = m;
    try {
      for (
        d(B), h = n(s);
        h !== null && (!(h.expirationTime > B) || (R && !Z()));

      ) {
        var Y = h.callback;
        if (typeof Y == "function") {
          (h.callback = null), (m = h.priorityLevel);
          var G = Y(h.expirationTime <= B);
          (B = e.unstable_now()),
            typeof G == "function" ? (h.callback = G) : h === n(s) && r(s),
            d(B);
        } else r(s);
        h = n(s);
      }
      if (h !== null) var ie = !0;
      else {
        var ee = n(c);
        ee !== null && Te(S, ee.startTime - B), (ie = !1);
      }
      return ie;
    } finally {
      (h = null), (m = U), (k = !1);
    }
  }
  var L = !1,
    I = null,
    _ = -1,
    A = 5,
    $ = -1;
  function Z() {
    return !(e.unstable_now() - $ < A);
  }
  function b() {
    if (I !== null) {
      var R = e.unstable_now();
      $ = R;
      var B = !0;
      try {
        B = I(!0, R);
      } finally {
        B ? he() : ((L = !1), (I = null));
      }
    } else L = !1;
  }
  var he;
  if (typeof a == "function")
    he = function () {
      a(b);
    };
  else if (typeof MessageChannel < "u") {
    var ge = new MessageChannel(),
      Me = ge.port2;
    (ge.port1.onmessage = b),
      (he = function () {
        Me.postMessage(null);
      });
  } else
    he = function () {
      N(b, 0);
    };
  function ke(R) {
    (I = R), L || ((L = !0), he());
  }
  function Te(R, B) {
    _ = N(function () {
      R(e.unstable_now());
    }, B);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (R) {
      R.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || k || ((x = !0), ke(E));
    }),
    (e.unstable_forceFrameRate = function (R) {
      0 > R || 125 < R
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (A = 0 < R ? Math.floor(1e3 / R) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (R) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var B = 3;
          break;
        default:
          B = m;
      }
      var U = m;
      m = B;
      try {
        return R();
      } finally {
        m = U;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (R, B) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var U = m;
      m = R;
      try {
        return B();
      } finally {
        m = U;
      }
    }),
    (e.unstable_scheduleCallback = function (R, B, U) {
      var Y = e.unstable_now();
      switch (
        (typeof U == "object" && U !== null
          ? ((U = U.delay), (U = typeof U == "number" && 0 < U ? Y + U : Y))
          : (U = Y),
        R)
      ) {
        case 1:
          var G = -1;
          break;
        case 2:
          G = 250;
          break;
        case 5:
          G = 1073741823;
          break;
        case 4:
          G = 1e4;
          break;
        default:
          G = 5e3;
      }
      return (
        (G = U + G),
        (R = {
          id: p++,
          callback: B,
          priorityLevel: R,
          startTime: U,
          expirationTime: G,
          sortIndex: -1,
        }),
        U > Y
          ? ((R.sortIndex = U),
            t(c, R),
            n(s) === null &&
              R === n(c) &&
              (g ? (f(_), (_ = -1)) : (g = !0), Te(S, U - Y)))
          : ((R.sortIndex = G), t(s, R), x || k || ((x = !0), ke(E))),
        R
      );
    }),
    (e.unstable_shouldYield = Z),
    (e.unstable_wrapCallback = function (R) {
      var B = m;
      return function () {
        var U = m;
        m = B;
        try {
          return R.apply(this, arguments);
        } finally {
          m = U;
        }
      };
    });
})(fa);
ca.exports = fa;
var ld = ca.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var da = V,
  Je = ld;
function O(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var pa = new Set(),
  mr = {};
function pn(e, t) {
  Un(e, t), Un(e + "Capture", t);
}
function Un(e, t) {
  for (mr[e] = t, e = 0; e < t.length; e++) pa.add(t[e]);
}
var Ot = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Uo = Object.prototype.hasOwnProperty,
  od =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Uu = {},
  Bu = {};
function id(e) {
  return Uo.call(Bu, e)
    ? !0
    : Uo.call(Uu, e)
    ? !1
    : od.test(e)
    ? (Bu[e] = !0)
    : ((Uu[e] = !0), !1);
}
function ud(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function sd(e, t, n, r) {
  if (t === null || typeof t > "u" || ud(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Be(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var _e = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    _e[e] = new Be(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  _e[t] = new Be(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  _e[e] = new Be(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  _e[e] = new Be(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    _e[e] = new Be(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  _e[e] = new Be(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  _e[e] = new Be(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  _e[e] = new Be(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  _e[e] = new Be(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Fi = /[\-:]([a-z])/g;
function Ui(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Fi, Ui);
    _e[t] = new Be(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Fi, Ui);
    _e[t] = new Be(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Fi, Ui);
  _e[t] = new Be(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  _e[e] = new Be(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
_e.xlinkHref = new Be(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  _e[e] = new Be(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Bi(e, t, n, r) {
  var l = _e.hasOwnProperty(t) ? _e[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (sd(t, n, l, r) && (n = null),
    r || l === null
      ? id(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Nt = da.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Wr = Symbol.for("react.element"),
  wn = Symbol.for("react.portal"),
  Sn = Symbol.for("react.fragment"),
  $i = Symbol.for("react.strict_mode"),
  Bo = Symbol.for("react.profiler"),
  ha = Symbol.for("react.provider"),
  ma = Symbol.for("react.context"),
  Vi = Symbol.for("react.forward_ref"),
  $o = Symbol.for("react.suspense"),
  Vo = Symbol.for("react.suspense_list"),
  Ai = Symbol.for("react.memo"),
  Rt = Symbol.for("react.lazy"),
  ya = Symbol.for("react.offscreen"),
  $u = Symbol.iterator;
function Gn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = ($u && e[$u]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var fe = Object.assign,
  co;
function nr(e) {
  if (co === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      co = (t && t[1]) || "";
    }
  return (
    `
` +
    co +
    e
  );
}
var fo = !1;
function po(e, t) {
  if (!e || fo) return "";
  fo = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var l = c.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var s =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (fo = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? nr(e) : "";
}
function ad(e) {
  switch (e.tag) {
    case 5:
      return nr(e.type);
    case 16:
      return nr("Lazy");
    case 13:
      return nr("Suspense");
    case 19:
      return nr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = po(e.type, !1)), e;
    case 11:
      return (e = po(e.type.render, !1)), e;
    case 1:
      return (e = po(e.type, !0)), e;
    default:
      return "";
  }
}
function Ao(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Sn:
      return "Fragment";
    case wn:
      return "Portal";
    case Bo:
      return "Profiler";
    case $i:
      return "StrictMode";
    case $o:
      return "Suspense";
    case Vo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case ma:
        return (e.displayName || "Context") + ".Consumer";
      case ha:
        return (e._context.displayName || "Context") + ".Provider";
      case Vi:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ai:
        return (
          (t = e.displayName || null), t !== null ? t : Ao(e.type) || "Memo"
        );
      case Rt:
        (t = e._payload), (e = e._init);
        try {
          return Ao(e(t));
        } catch {}
    }
  return null;
}
function cd(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ao(t);
    case 8:
      return t === $i ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Yt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function va(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function fd(e) {
  var t = va(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Hr(e) {
  e._valueTracker || (e._valueTracker = fd(e));
}
function ga(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = va(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function vl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Wo(e, t) {
  var n = t.checked;
  return fe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Vu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Yt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function wa(e, t) {
  (t = t.checked), t != null && Bi(e, "checked", t, !1);
}
function Ho(e, t) {
  wa(e, t);
  var n = Yt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Qo(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Qo(e, t.type, Yt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Au(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Qo(e, t, n) {
  (t !== "number" || vl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var rr = Array.isArray;
function Ln(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Yt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ko(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(O(91));
  return fe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Wu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(O(92));
      if (rr(n)) {
        if (1 < n.length) throw Error(O(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Yt(n) };
}
function Sa(e, t) {
  var n = Yt(t.value),
    r = Yt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Hu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ka(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Yo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ka(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Qr,
  xa = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Qr = Qr || document.createElement("div"),
          Qr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Qr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function yr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ir = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  dd = ["Webkit", "ms", "Moz", "O"];
Object.keys(ir).forEach(function (e) {
  dd.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ir[t] = ir[e]);
  });
});
function Ea(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (ir.hasOwnProperty(e) && ir[e])
    ? ("" + t).trim()
    : t + "px";
}
function Pa(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Ea(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var pd = fe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Go(e, t) {
  if (t) {
    if (pd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(O(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(O(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(O(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(O(62));
  }
}
function Xo(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Zo = null;
function Wi(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Jo = null,
  Rn = null,
  In = null;
function Qu(e) {
  if ((e = Mr(e))) {
    if (typeof Jo != "function") throw Error(O(280));
    var t = e.stateNode;
    t && ((t = Gl(t)), Jo(e.stateNode, e.type, t));
  }
}
function Ca(e) {
  Rn ? (In ? In.push(e) : (In = [e])) : (Rn = e);
}
function Oa() {
  if (Rn) {
    var e = Rn,
      t = In;
    if (((In = Rn = null), Qu(e), t)) for (e = 0; e < t.length; e++) Qu(t[e]);
  }
}
function _a(e, t) {
  return e(t);
}
function Ta() {}
var ho = !1;
function ja(e, t, n) {
  if (ho) return e(t, n);
  ho = !0;
  try {
    return _a(e, t, n);
  } finally {
    (ho = !1), (Rn !== null || In !== null) && (Ta(), Oa());
  }
}
function vr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Gl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(O(231, t, typeof n));
  return n;
}
var qo = !1;
if (Ot)
  try {
    var Xn = {};
    Object.defineProperty(Xn, "passive", {
      get: function () {
        qo = !0;
      },
    }),
      window.addEventListener("test", Xn, Xn),
      window.removeEventListener("test", Xn, Xn);
  } catch {
    qo = !1;
  }
function hd(e, t, n, r, l, o, i, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (p) {
    this.onError(p);
  }
}
var ur = !1,
  gl = null,
  wl = !1,
  bo = null,
  md = {
    onError: function (e) {
      (ur = !0), (gl = e);
    },
  };
function yd(e, t, n, r, l, o, i, u, s) {
  (ur = !1), (gl = null), hd.apply(md, arguments);
}
function vd(e, t, n, r, l, o, i, u, s) {
  if ((yd.apply(this, arguments), ur)) {
    if (ur) {
      var c = gl;
      (ur = !1), (gl = null);
    } else throw Error(O(198));
    wl || ((wl = !0), (bo = c));
  }
}
function hn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Na(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Ku(e) {
  if (hn(e) !== e) throw Error(O(188));
}
function gd(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = hn(e)), t === null)) throw Error(O(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return Ku(l), e;
        if (o === r) return Ku(l), t;
        o = o.sibling;
      }
      throw Error(O(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(O(189));
      }
    }
    if (n.alternate !== r) throw Error(O(190));
  }
  if (n.tag !== 3) throw Error(O(188));
  return n.stateNode.current === n ? e : t;
}
function La(e) {
  return (e = gd(e)), e !== null ? Ra(e) : null;
}
function Ra(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ra(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ia = Je.unstable_scheduleCallback,
  Yu = Je.unstable_cancelCallback,
  wd = Je.unstable_shouldYield,
  Sd = Je.unstable_requestPaint,
  pe = Je.unstable_now,
  kd = Je.unstable_getCurrentPriorityLevel,
  Hi = Je.unstable_ImmediatePriority,
  za = Je.unstable_UserBlockingPriority,
  Sl = Je.unstable_NormalPriority,
  xd = Je.unstable_LowPriority,
  Ma = Je.unstable_IdlePriority,
  Hl = null,
  gt = null;
function Ed(e) {
  if (gt && typeof gt.onCommitFiberRoot == "function")
    try {
      gt.onCommitFiberRoot(Hl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var dt = Math.clz32 ? Math.clz32 : Od,
  Pd = Math.log,
  Cd = Math.LN2;
function Od(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Pd(e) / Cd) | 0)) | 0;
}
var Kr = 64,
  Yr = 4194304;
function lr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function kl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = lr(u)) : ((o &= i), o !== 0 && (r = lr(o)));
  } else (i = n & ~l), i !== 0 ? (r = lr(i)) : o !== 0 && (r = lr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - dt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function _d(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Td(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - dt(o),
      u = 1 << i,
      s = l[i];
    s === -1
      ? (!(u & n) || u & r) && (l[i] = _d(u, t))
      : s <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function ei(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Da() {
  var e = Kr;
  return (Kr <<= 1), !(Kr & 4194240) && (Kr = 64), e;
}
function mo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ir(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - dt(t)),
    (e[t] = n);
}
function jd(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - dt(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function Qi(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - dt(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var q = 0;
function Fa(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Ua,
  Ki,
  Ba,
  $a,
  Va,
  ti = !1,
  Gr = [],
  Bt = null,
  $t = null,
  Vt = null,
  gr = new Map(),
  wr = new Map(),
  zt = [],
  Nd =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Gu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Bt = null;
      break;
    case "dragenter":
    case "dragleave":
      $t = null;
      break;
    case "mouseover":
    case "mouseout":
      Vt = null;
      break;
    case "pointerover":
    case "pointerout":
      gr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      wr.delete(t.pointerId);
  }
}
function Zn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = Mr(t)), t !== null && Ki(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Ld(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (Bt = Zn(Bt, e, t, n, r, l)), !0;
    case "dragenter":
      return ($t = Zn($t, e, t, n, r, l)), !0;
    case "mouseover":
      return (Vt = Zn(Vt, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return gr.set(o, Zn(gr.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), wr.set(o, Zn(wr.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Aa(e) {
  var t = nn(e.target);
  if (t !== null) {
    var n = hn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Na(n)), t !== null)) {
          (e.blockedOn = t),
            Va(e.priority, function () {
              Ba(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ul(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ni(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Zo = r), n.target.dispatchEvent(r), (Zo = null);
    } else return (t = Mr(n)), t !== null && Ki(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Xu(e, t, n) {
  ul(e) && n.delete(t);
}
function Rd() {
  (ti = !1),
    Bt !== null && ul(Bt) && (Bt = null),
    $t !== null && ul($t) && ($t = null),
    Vt !== null && ul(Vt) && (Vt = null),
    gr.forEach(Xu),
    wr.forEach(Xu);
}
function Jn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ti ||
      ((ti = !0),
      Je.unstable_scheduleCallback(Je.unstable_NormalPriority, Rd)));
}
function Sr(e) {
  function t(l) {
    return Jn(l, e);
  }
  if (0 < Gr.length) {
    Jn(Gr[0], e);
    for (var n = 1; n < Gr.length; n++) {
      var r = Gr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Bt !== null && Jn(Bt, e),
      $t !== null && Jn($t, e),
      Vt !== null && Jn(Vt, e),
      gr.forEach(t),
      wr.forEach(t),
      n = 0;
    n < zt.length;
    n++
  )
    (r = zt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < zt.length && ((n = zt[0]), n.blockedOn === null); )
    Aa(n), n.blockedOn === null && zt.shift();
}
var zn = Nt.ReactCurrentBatchConfig,
  xl = !0;
function Id(e, t, n, r) {
  var l = q,
    o = zn.transition;
  zn.transition = null;
  try {
    (q = 1), Yi(e, t, n, r);
  } finally {
    (q = l), (zn.transition = o);
  }
}
function zd(e, t, n, r) {
  var l = q,
    o = zn.transition;
  zn.transition = null;
  try {
    (q = 4), Yi(e, t, n, r);
  } finally {
    (q = l), (zn.transition = o);
  }
}
function Yi(e, t, n, r) {
  if (xl) {
    var l = ni(e, t, n, r);
    if (l === null) Co(e, t, r, El, n), Gu(e, r);
    else if (Ld(l, e, t, n, r)) r.stopPropagation();
    else if ((Gu(e, r), t & 4 && -1 < Nd.indexOf(e))) {
      for (; l !== null; ) {
        var o = Mr(l);
        if (
          (o !== null && Ua(o),
          (o = ni(e, t, n, r)),
          o === null && Co(e, t, r, El, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Co(e, t, r, null, n);
  }
}
var El = null;
function ni(e, t, n, r) {
  if (((El = null), (e = Wi(r)), (e = nn(e)), e !== null))
    if (((t = hn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Na(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (El = e), null;
}
function Wa(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (kd()) {
        case Hi:
          return 1;
        case za:
          return 4;
        case Sl:
        case xd:
          return 16;
        case Ma:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Dt = null,
  Gi = null,
  sl = null;
function Ha() {
  if (sl) return sl;
  var e,
    t = Gi,
    n = t.length,
    r,
    l = "value" in Dt ? Dt.value : Dt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (sl = l.slice(e, 1 < r ? 1 - r : void 0));
}
function al(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Xr() {
  return !0;
}
function Zu() {
  return !1;
}
function be(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Xr
        : Zu),
      (this.isPropagationStopped = Zu),
      this
    );
  }
  return (
    fe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Xr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Xr));
      },
      persist: function () {},
      isPersistent: Xr,
    }),
    t
  );
}
var Kn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Xi = be(Kn),
  zr = fe({}, Kn, { view: 0, detail: 0 }),
  Md = be(zr),
  yo,
  vo,
  qn,
  Ql = fe({}, zr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Zi,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== qn &&
            (qn && e.type === "mousemove"
              ? ((yo = e.screenX - qn.screenX), (vo = e.screenY - qn.screenY))
              : (vo = yo = 0),
            (qn = e)),
          yo);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : vo;
    },
  }),
  Ju = be(Ql),
  Dd = fe({}, Ql, { dataTransfer: 0 }),
  Fd = be(Dd),
  Ud = fe({}, zr, { relatedTarget: 0 }),
  go = be(Ud),
  Bd = fe({}, Kn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  $d = be(Bd),
  Vd = fe({}, Kn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Ad = be(Vd),
  Wd = fe({}, Kn, { data: 0 }),
  qu = be(Wd),
  Hd = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Qd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Kd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Yd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Kd[e]) ? !!t[e] : !1;
}
function Zi() {
  return Yd;
}
var Gd = fe({}, zr, {
    key: function (e) {
      if (e.key) {
        var t = Hd[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = al(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Qd[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Zi,
    charCode: function (e) {
      return e.type === "keypress" ? al(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? al(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Xd = be(Gd),
  Zd = fe({}, Ql, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  bu = be(Zd),
  Jd = fe({}, zr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Zi,
  }),
  qd = be(Jd),
  bd = fe({}, Kn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ep = be(bd),
  tp = fe({}, Ql, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  np = be(tp),
  rp = [9, 13, 27, 32],
  Ji = Ot && "CompositionEvent" in window,
  sr = null;
Ot && "documentMode" in document && (sr = document.documentMode);
var lp = Ot && "TextEvent" in window && !sr,
  Qa = Ot && (!Ji || (sr && 8 < sr && 11 >= sr)),
  es = " ",
  ts = !1;
function Ka(e, t) {
  switch (e) {
    case "keyup":
      return rp.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Ya(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var kn = !1;
function op(e, t) {
  switch (e) {
    case "compositionend":
      return Ya(t);
    case "keypress":
      return t.which !== 32 ? null : ((ts = !0), es);
    case "textInput":
      return (e = t.data), e === es && ts ? null : e;
    default:
      return null;
  }
}
function ip(e, t) {
  if (kn)
    return e === "compositionend" || (!Ji && Ka(e, t))
      ? ((e = Ha()), (sl = Gi = Dt = null), (kn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Qa && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var up = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function ns(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!up[e.type] : t === "textarea";
}
function Ga(e, t, n, r) {
  Ca(r),
    (t = Pl(t, "onChange")),
    0 < t.length &&
      ((n = new Xi("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var ar = null,
  kr = null;
function sp(e) {
  oc(e, 0);
}
function Kl(e) {
  var t = Pn(e);
  if (ga(t)) return e;
}
function ap(e, t) {
  if (e === "change") return t;
}
var Xa = !1;
if (Ot) {
  var wo;
  if (Ot) {
    var So = "oninput" in document;
    if (!So) {
      var rs = document.createElement("div");
      rs.setAttribute("oninput", "return;"),
        (So = typeof rs.oninput == "function");
    }
    wo = So;
  } else wo = !1;
  Xa = wo && (!document.documentMode || 9 < document.documentMode);
}
function ls() {
  ar && (ar.detachEvent("onpropertychange", Za), (kr = ar = null));
}
function Za(e) {
  if (e.propertyName === "value" && Kl(kr)) {
    var t = [];
    Ga(t, kr, e, Wi(e)), ja(sp, t);
  }
}
function cp(e, t, n) {
  e === "focusin"
    ? (ls(), (ar = t), (kr = n), ar.attachEvent("onpropertychange", Za))
    : e === "focusout" && ls();
}
function fp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Kl(kr);
}
function dp(e, t) {
  if (e === "click") return Kl(t);
}
function pp(e, t) {
  if (e === "input" || e === "change") return Kl(t);
}
function hp(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ht = typeof Object.is == "function" ? Object.is : hp;
function xr(e, t) {
  if (ht(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Uo.call(t, l) || !ht(e[l], t[l])) return !1;
  }
  return !0;
}
function os(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function is(e, t) {
  var n = os(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = os(n);
  }
}
function Ja(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Ja(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function qa() {
  for (var e = window, t = vl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = vl(e.document);
  }
  return t;
}
function qi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function mp(e) {
  var t = qa(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Ja(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && qi(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = is(n, o));
        var i = is(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var yp = Ot && "documentMode" in document && 11 >= document.documentMode,
  xn = null,
  ri = null,
  cr = null,
  li = !1;
function us(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  li ||
    xn == null ||
    xn !== vl(r) ||
    ((r = xn),
    "selectionStart" in r && qi(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (cr && xr(cr, r)) ||
      ((cr = r),
      (r = Pl(ri, "onSelect")),
      0 < r.length &&
        ((t = new Xi("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = xn))));
}
function Zr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var En = {
    animationend: Zr("Animation", "AnimationEnd"),
    animationiteration: Zr("Animation", "AnimationIteration"),
    animationstart: Zr("Animation", "AnimationStart"),
    transitionend: Zr("Transition", "TransitionEnd"),
  },
  ko = {},
  ba = {};
Ot &&
  ((ba = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete En.animationend.animation,
    delete En.animationiteration.animation,
    delete En.animationstart.animation),
  "TransitionEvent" in window || delete En.transitionend.transition);
function Yl(e) {
  if (ko[e]) return ko[e];
  if (!En[e]) return e;
  var t = En[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in ba) return (ko[e] = t[n]);
  return e;
}
var ec = Yl("animationend"),
  tc = Yl("animationiteration"),
  nc = Yl("animationstart"),
  rc = Yl("transitionend"),
  lc = new Map(),
  ss =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Xt(e, t) {
  lc.set(e, t), pn(t, [e]);
}
for (var xo = 0; xo < ss.length; xo++) {
  var Eo = ss[xo],
    vp = Eo.toLowerCase(),
    gp = Eo[0].toUpperCase() + Eo.slice(1);
  Xt(vp, "on" + gp);
}
Xt(ec, "onAnimationEnd");
Xt(tc, "onAnimationIteration");
Xt(nc, "onAnimationStart");
Xt("dblclick", "onDoubleClick");
Xt("focusin", "onFocus");
Xt("focusout", "onBlur");
Xt(rc, "onTransitionEnd");
Un("onMouseEnter", ["mouseout", "mouseover"]);
Un("onMouseLeave", ["mouseout", "mouseover"]);
Un("onPointerEnter", ["pointerout", "pointerover"]);
Un("onPointerLeave", ["pointerout", "pointerover"]);
pn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
pn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
pn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
pn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
pn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
pn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var or =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  wp = new Set("cancel close invalid load scroll toggle".split(" ").concat(or));
function as(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), vd(r, t, void 0, e), (e.currentTarget = null);
}
function oc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            s = u.instance,
            c = u.currentTarget;
          if (((u = u.listener), s !== o && l.isPropagationStopped())) break e;
          as(l, u, c), (o = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (s = u.instance),
            (c = u.currentTarget),
            (u = u.listener),
            s !== o && l.isPropagationStopped())
          )
            break e;
          as(l, u, c), (o = s);
        }
    }
  }
  if (wl) throw ((e = bo), (wl = !1), (bo = null), e);
}
function re(e, t) {
  var n = t[ai];
  n === void 0 && (n = t[ai] = new Set());
  var r = e + "__bubble";
  n.has(r) || (ic(t, e, 2, !1), n.add(r));
}
function Po(e, t, n) {
  var r = 0;
  t && (r |= 4), ic(n, e, r, t);
}
var Jr = "_reactListening" + Math.random().toString(36).slice(2);
function Er(e) {
  if (!e[Jr]) {
    (e[Jr] = !0),
      pa.forEach(function (n) {
        n !== "selectionchange" && (wp.has(n) || Po(n, !1, e), Po(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Jr] || ((t[Jr] = !0), Po("selectionchange", !1, t));
  }
}
function ic(e, t, n, r) {
  switch (Wa(t)) {
    case 1:
      var l = Id;
      break;
    case 4:
      l = zd;
      break;
    default:
      l = Yi;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !qo ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Co(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = nn(u)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  ja(function () {
    var c = o,
      p = Wi(n),
      h = [];
    e: {
      var m = lc.get(e);
      if (m !== void 0) {
        var k = Xi,
          x = e;
        switch (e) {
          case "keypress":
            if (al(n) === 0) break e;
          case "keydown":
          case "keyup":
            k = Xd;
            break;
          case "focusin":
            (x = "focus"), (k = go);
            break;
          case "focusout":
            (x = "blur"), (k = go);
            break;
          case "beforeblur":
          case "afterblur":
            k = go;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k = Ju;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k = Fd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k = qd;
            break;
          case ec:
          case tc:
          case nc:
            k = $d;
            break;
          case rc:
            k = ep;
            break;
          case "scroll":
            k = Md;
            break;
          case "wheel":
            k = np;
            break;
          case "copy":
          case "cut":
          case "paste":
            k = Ad;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k = bu;
        }
        var g = (t & 4) !== 0,
          N = !g && e === "scroll",
          f = g ? (m !== null ? m + "Capture" : null) : m;
        g = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var S = d.stateNode;
          if (
            (d.tag === 5 &&
              S !== null &&
              ((d = S),
              f !== null && ((S = vr(a, f)), S != null && g.push(Pr(a, S, d)))),
            N)
          )
            break;
          a = a.return;
        }
        0 < g.length &&
          ((m = new k(m, x, null, n, p)), h.push({ event: m, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (k = e === "mouseout" || e === "pointerout"),
          m &&
            n !== Zo &&
            (x = n.relatedTarget || n.fromElement) &&
            (nn(x) || x[_t]))
        )
          break e;
        if (
          (k || m) &&
          ((m =
            p.window === p
              ? p
              : (m = p.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          k
            ? ((x = n.relatedTarget || n.toElement),
              (k = c),
              (x = x ? nn(x) : null),
              x !== null &&
                ((N = hn(x)), x !== N || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((k = null), (x = c)),
          k !== x)
        ) {
          if (
            ((g = Ju),
            (S = "onMouseLeave"),
            (f = "onMouseEnter"),
            (a = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = bu),
              (S = "onPointerLeave"),
              (f = "onPointerEnter"),
              (a = "pointer")),
            (N = k == null ? m : Pn(k)),
            (d = x == null ? m : Pn(x)),
            (m = new g(S, a + "leave", k, n, p)),
            (m.target = N),
            (m.relatedTarget = d),
            (S = null),
            nn(p) === c &&
              ((g = new g(f, a + "enter", x, n, p)),
              (g.target = d),
              (g.relatedTarget = N),
              (S = g)),
            (N = S),
            k && x)
          )
            t: {
              for (g = k, f = x, a = 0, d = g; d; d = vn(d)) a++;
              for (d = 0, S = f; S; S = vn(S)) d++;
              for (; 0 < a - d; ) (g = vn(g)), a--;
              for (; 0 < d - a; ) (f = vn(f)), d--;
              for (; a--; ) {
                if (g === f || (f !== null && g === f.alternate)) break t;
                (g = vn(g)), (f = vn(f));
              }
              g = null;
            }
          else g = null;
          k !== null && cs(h, m, k, g, !1),
            x !== null && N !== null && cs(h, N, x, g, !0);
        }
      }
      e: {
        if (
          ((m = c ? Pn(c) : window),
          (k = m.nodeName && m.nodeName.toLowerCase()),
          k === "select" || (k === "input" && m.type === "file"))
        )
          var E = ap;
        else if (ns(m))
          if (Xa) E = pp;
          else {
            E = fp;
            var L = cp;
          }
        else
          (k = m.nodeName) &&
            k.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (E = dp);
        if (E && (E = E(e, c))) {
          Ga(h, E, n, p);
          break e;
        }
        L && L(e, m, c),
          e === "focusout" &&
            (L = m._wrapperState) &&
            L.controlled &&
            m.type === "number" &&
            Qo(m, "number", m.value);
      }
      switch (((L = c ? Pn(c) : window), e)) {
        case "focusin":
          (ns(L) || L.contentEditable === "true") &&
            ((xn = L), (ri = c), (cr = null));
          break;
        case "focusout":
          cr = ri = xn = null;
          break;
        case "mousedown":
          li = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (li = !1), us(h, n, p);
          break;
        case "selectionchange":
          if (yp) break;
        case "keydown":
        case "keyup":
          us(h, n, p);
      }
      var I;
      if (Ji)
        e: {
          switch (e) {
            case "compositionstart":
              var _ = "onCompositionStart";
              break e;
            case "compositionend":
              _ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              _ = "onCompositionUpdate";
              break e;
          }
          _ = void 0;
        }
      else
        kn
          ? Ka(e, n) && (_ = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
      _ &&
        (Qa &&
          n.locale !== "ko" &&
          (kn || _ !== "onCompositionStart"
            ? _ === "onCompositionEnd" && kn && (I = Ha())
            : ((Dt = p),
              (Gi = "value" in Dt ? Dt.value : Dt.textContent),
              (kn = !0))),
        (L = Pl(c, _)),
        0 < L.length &&
          ((_ = new qu(_, e, null, n, p)),
          h.push({ event: _, listeners: L }),
          I ? (_.data = I) : ((I = Ya(n)), I !== null && (_.data = I)))),
        (I = lp ? op(e, n) : ip(e, n)) &&
          ((c = Pl(c, "onBeforeInput")),
          0 < c.length &&
            ((p = new qu("onBeforeInput", "beforeinput", null, n, p)),
            h.push({ event: p, listeners: c }),
            (p.data = I)));
    }
    oc(h, t);
  });
}
function Pr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Pl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = vr(e, n)),
      o != null && r.unshift(Pr(e, o, l)),
      (o = vr(e, t)),
      o != null && r.push(Pr(e, o, l))),
      (e = e.return);
  }
  return r;
}
function vn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function cs(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      c = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      c !== null &&
      ((u = c),
      l
        ? ((s = vr(n, o)), s != null && i.unshift(Pr(n, s, u)))
        : l || ((s = vr(n, o)), s != null && i.push(Pr(n, s, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Sp = /\r\n?/g,
  kp = /\u0000|\uFFFD/g;
function fs(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Sp,
      `
`
    )
    .replace(kp, "");
}
function qr(e, t, n) {
  if (((t = fs(t)), fs(e) !== t && n)) throw Error(O(425));
}
function Cl() {}
var oi = null,
  ii = null;
function ui(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var si = typeof setTimeout == "function" ? setTimeout : void 0,
  xp = typeof clearTimeout == "function" ? clearTimeout : void 0,
  ds = typeof Promise == "function" ? Promise : void 0,
  Ep =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof ds < "u"
      ? function (e) {
          return ds.resolve(null).then(e).catch(Pp);
        }
      : si;
function Pp(e) {
  setTimeout(function () {
    throw e;
  });
}
function Oo(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Sr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Sr(t);
}
function At(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function ps(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Yn = Math.random().toString(36).slice(2),
  vt = "__reactFiber$" + Yn,
  Cr = "__reactProps$" + Yn,
  _t = "__reactContainer$" + Yn,
  ai = "__reactEvents$" + Yn,
  Cp = "__reactListeners$" + Yn,
  Op = "__reactHandles$" + Yn;
function nn(e) {
  var t = e[vt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[_t] || n[vt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ps(e); e !== null; ) {
          if ((n = e[vt])) return n;
          e = ps(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Mr(e) {
  return (
    (e = e[vt] || e[_t]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Pn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(O(33));
}
function Gl(e) {
  return e[Cr] || null;
}
var ci = [],
  Cn = -1;
function Zt(e) {
  return { current: e };
}
function le(e) {
  0 > Cn || ((e.current = ci[Cn]), (ci[Cn] = null), Cn--);
}
function te(e, t) {
  Cn++, (ci[Cn] = e.current), (e.current = t);
}
var Gt = {},
  ze = Zt(Gt),
  We = Zt(!1),
  sn = Gt;
function Bn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Gt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function He(e) {
  return (e = e.childContextTypes), e != null;
}
function Ol() {
  le(We), le(ze);
}
function hs(e, t, n) {
  if (ze.current !== Gt) throw Error(O(168));
  te(ze, t), te(We, n);
}
function uc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(O(108, cd(e) || "Unknown", l));
  return fe({}, n, r);
}
function _l(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Gt),
    (sn = ze.current),
    te(ze, e),
    te(We, We.current),
    !0
  );
}
function ms(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(O(169));
  n
    ? ((e = uc(e, t, sn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      le(We),
      le(ze),
      te(ze, e))
    : le(We),
    te(We, n);
}
var xt = null,
  Xl = !1,
  _o = !1;
function sc(e) {
  xt === null ? (xt = [e]) : xt.push(e);
}
function _p(e) {
  (Xl = !0), sc(e);
}
function Jt() {
  if (!_o && xt !== null) {
    _o = !0;
    var e = 0,
      t = q;
    try {
      var n = xt;
      for (q = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (xt = null), (Xl = !1);
    } catch (l) {
      throw (xt !== null && (xt = xt.slice(e + 1)), Ia(Hi, Jt), l);
    } finally {
      (q = t), (_o = !1);
    }
  }
  return null;
}
var On = [],
  _n = 0,
  Tl = null,
  jl = 0,
  et = [],
  tt = 0,
  an = null,
  Et = 1,
  Pt = "";
function en(e, t) {
  (On[_n++] = jl), (On[_n++] = Tl), (Tl = e), (jl = t);
}
function ac(e, t, n) {
  (et[tt++] = Et), (et[tt++] = Pt), (et[tt++] = an), (an = e);
  var r = Et;
  e = Pt;
  var l = 32 - dt(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - dt(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (Et = (1 << (32 - dt(t) + l)) | (n << l) | r),
      (Pt = o + e);
  } else (Et = (1 << o) | (n << l) | r), (Pt = e);
}
function bi(e) {
  e.return !== null && (en(e, 1), ac(e, 1, 0));
}
function eu(e) {
  for (; e === Tl; )
    (Tl = On[--_n]), (On[_n] = null), (jl = On[--_n]), (On[_n] = null);
  for (; e === an; )
    (an = et[--tt]),
      (et[tt] = null),
      (Pt = et[--tt]),
      (et[tt] = null),
      (Et = et[--tt]),
      (et[tt] = null);
}
var Ze = null,
  Xe = null,
  oe = !1,
  ft = null;
function cc(e, t) {
  var n = nt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ys(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ze = e), (Xe = At(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ze = e), (Xe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = an !== null ? { id: Et, overflow: Pt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = nt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ze = e),
            (Xe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function fi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function di(e) {
  if (oe) {
    var t = Xe;
    if (t) {
      var n = t;
      if (!ys(e, t)) {
        if (fi(e)) throw Error(O(418));
        t = At(n.nextSibling);
        var r = Ze;
        t && ys(e, t)
          ? cc(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (oe = !1), (Ze = e));
      }
    } else {
      if (fi(e)) throw Error(O(418));
      (e.flags = (e.flags & -4097) | 2), (oe = !1), (Ze = e);
    }
  }
}
function vs(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ze = e;
}
function br(e) {
  if (e !== Ze) return !1;
  if (!oe) return vs(e), (oe = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ui(e.type, e.memoizedProps))),
    t && (t = Xe))
  ) {
    if (fi(e)) throw (fc(), Error(O(418)));
    for (; t; ) cc(e, t), (t = At(t.nextSibling));
  }
  if ((vs(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(O(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Xe = At(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Xe = null;
    }
  } else Xe = Ze ? At(e.stateNode.nextSibling) : null;
  return !0;
}
function fc() {
  for (var e = Xe; e; ) e = At(e.nextSibling);
}
function $n() {
  (Xe = Ze = null), (oe = !1);
}
function tu(e) {
  ft === null ? (ft = [e]) : ft.push(e);
}
var Tp = Nt.ReactCurrentBatchConfig;
function at(e, t) {
  if (e && e.defaultProps) {
    (t = fe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Nl = Zt(null),
  Ll = null,
  Tn = null,
  nu = null;
function ru() {
  nu = Tn = Ll = null;
}
function lu(e) {
  var t = Nl.current;
  le(Nl), (e._currentValue = t);
}
function pi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Mn(e, t) {
  (Ll = e),
    (nu = Tn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ae = !0), (e.firstContext = null));
}
function lt(e) {
  var t = e._currentValue;
  if (nu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Tn === null)) {
      if (Ll === null) throw Error(O(308));
      (Tn = e), (Ll.dependencies = { lanes: 0, firstContext: e });
    } else Tn = Tn.next = e;
  return t;
}
var rn = null;
function ou(e) {
  rn === null ? (rn = [e]) : rn.push(e);
}
function dc(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), ou(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Tt(e, r)
  );
}
function Tt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var It = !1;
function iu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function pc(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ct(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Wt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), X & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Tt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), ou(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Tt(e, n)
  );
}
function cl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Qi(e, n);
  }
}
function gs(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Rl(e, t, n, r) {
  var l = e.updateQueue;
  It = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      c = s.next;
    (s.next = null), i === null ? (o = c) : (i.next = c), (i = s);
    var p = e.alternate;
    p !== null &&
      ((p = p.updateQueue),
      (u = p.lastBaseUpdate),
      u !== i &&
        (u === null ? (p.firstBaseUpdate = c) : (u.next = c),
        (p.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var h = l.baseState;
    (i = 0), (p = c = s = null), (u = o);
    do {
      var m = u.lane,
        k = u.eventTime;
      if ((r & m) === m) {
        p !== null &&
          (p = p.next =
            {
              eventTime: k,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var x = e,
            g = u;
          switch (((m = t), (k = n), g.tag)) {
            case 1:
              if (((x = g.payload), typeof x == "function")) {
                h = x.call(k, h, m);
                break e;
              }
              h = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = g.payload),
                (m = typeof x == "function" ? x.call(k, h, m) : x),
                m == null)
              )
                break e;
              h = fe({}, h, m);
              break e;
            case 2:
              It = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [u]) : m.push(u));
      } else
        (k = {
          eventTime: k,
          lane: m,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          p === null ? ((c = p = k), (s = h)) : (p = p.next = k),
          (i |= m);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (m = u),
          (u = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (p === null && (s = h),
      (l.baseState = s),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = p),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (fn |= i), (e.lanes = i), (e.memoizedState = h);
  }
}
function ws(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(O(191, l));
        l.call(r);
      }
    }
}
var hc = new da.Component().refs;
function hi(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : fe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Zl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? hn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Fe(),
      l = Qt(e),
      o = Ct(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Wt(e, o, l)),
      t !== null && (pt(t, e, l, r), cl(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Fe(),
      l = Qt(e),
      o = Ct(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Wt(e, o, l)),
      t !== null && (pt(t, e, l, r), cl(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Fe(),
      r = Qt(e),
      l = Ct(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = Wt(e, l, r)),
      t !== null && (pt(t, e, r, n), cl(t, e, r));
  },
};
function Ss(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !xr(n, r) || !xr(l, o)
      : !0
  );
}
function mc(e, t, n) {
  var r = !1,
    l = Gt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = lt(o))
      : ((l = He(t) ? sn : ze.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Bn(e, l) : Gt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Zl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function ks(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Zl.enqueueReplaceState(t, t.state, null);
}
function mi(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = hc), iu(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = lt(o))
    : ((o = He(t) ? sn : ze.current), (l.context = Bn(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (hi(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Zl.enqueueReplaceState(l, l.state, null),
      Rl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function bn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(O(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(O(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            u === hc && (u = l.refs = {}),
              i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(O(284));
    if (!n._owner) throw Error(O(290, e));
  }
  return e;
}
function el(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      O(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function xs(e) {
  var t = e._init;
  return t(e._payload);
}
function yc(e) {
  function t(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a);
    }
  }
  function n(f, a) {
    if (!e) return null;
    for (; a !== null; ) t(f, a), (a = a.sibling);
    return null;
  }
  function r(f, a) {
    for (f = new Map(); a !== null; )
      a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling);
    return f;
  }
  function l(f, a) {
    return (f = Kt(f, a)), (f.index = 0), (f.sibling = null), f;
  }
  function o(f, a, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d)
            : ((f.flags |= 2), a))
        : ((f.flags |= 1048576), a)
    );
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, a, d, S) {
    return a === null || a.tag !== 6
      ? ((a = zo(d, f.mode, S)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function s(f, a, d, S) {
    var E = d.type;
    return E === Sn
      ? p(f, a, d.props.children, S, d.key)
      : a !== null &&
        (a.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === Rt &&
            xs(E) === a.type))
      ? ((S = l(a, d.props)), (S.ref = bn(f, a, d)), (S.return = f), S)
      : ((S = yl(d.type, d.key, d.props, null, f.mode, S)),
        (S.ref = bn(f, a, d)),
        (S.return = f),
        S);
  }
  function c(f, a, d, S) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== d.containerInfo ||
      a.stateNode.implementation !== d.implementation
      ? ((a = Mo(d, f.mode, S)), (a.return = f), a)
      : ((a = l(a, d.children || [])), (a.return = f), a);
  }
  function p(f, a, d, S, E) {
    return a === null || a.tag !== 7
      ? ((a = un(d, f.mode, S, E)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function h(f, a, d) {
    if ((typeof a == "string" && a !== "") || typeof a == "number")
      return (a = zo("" + a, f.mode, d)), (a.return = f), a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case Wr:
          return (
            (d = yl(a.type, a.key, a.props, null, f.mode, d)),
            (d.ref = bn(f, null, a)),
            (d.return = f),
            d
          );
        case wn:
          return (a = Mo(a, f.mode, d)), (a.return = f), a;
        case Rt:
          var S = a._init;
          return h(f, S(a._payload), d);
      }
      if (rr(a) || Gn(a))
        return (a = un(a, f.mode, d, null)), (a.return = f), a;
      el(f, a);
    }
    return null;
  }
  function m(f, a, d, S) {
    var E = a !== null ? a.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return E !== null ? null : u(f, a, "" + d, S);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Wr:
          return d.key === E ? s(f, a, d, S) : null;
        case wn:
          return d.key === E ? c(f, a, d, S) : null;
        case Rt:
          return (E = d._init), m(f, a, E(d._payload), S);
      }
      if (rr(d) || Gn(d)) return E !== null ? null : p(f, a, d, S, null);
      el(f, d);
    }
    return null;
  }
  function k(f, a, d, S, E) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (f = f.get(d) || null), u(a, f, "" + S, E);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Wr:
          return (f = f.get(S.key === null ? d : S.key) || null), s(a, f, S, E);
        case wn:
          return (f = f.get(S.key === null ? d : S.key) || null), c(a, f, S, E);
        case Rt:
          var L = S._init;
          return k(f, a, d, L(S._payload), E);
      }
      if (rr(S) || Gn(S)) return (f = f.get(d) || null), p(a, f, S, E, null);
      el(a, S);
    }
    return null;
  }
  function x(f, a, d, S) {
    for (
      var E = null, L = null, I = a, _ = (a = 0), A = null;
      I !== null && _ < d.length;
      _++
    ) {
      I.index > _ ? ((A = I), (I = null)) : (A = I.sibling);
      var $ = m(f, I, d[_], S);
      if ($ === null) {
        I === null && (I = A);
        break;
      }
      e && I && $.alternate === null && t(f, I),
        (a = o($, a, _)),
        L === null ? (E = $) : (L.sibling = $),
        (L = $),
        (I = A);
    }
    if (_ === d.length) return n(f, I), oe && en(f, _), E;
    if (I === null) {
      for (; _ < d.length; _++)
        (I = h(f, d[_], S)),
          I !== null &&
            ((a = o(I, a, _)), L === null ? (E = I) : (L.sibling = I), (L = I));
      return oe && en(f, _), E;
    }
    for (I = r(f, I); _ < d.length; _++)
      (A = k(I, f, _, d[_], S)),
        A !== null &&
          (e && A.alternate !== null && I.delete(A.key === null ? _ : A.key),
          (a = o(A, a, _)),
          L === null ? (E = A) : (L.sibling = A),
          (L = A));
    return (
      e &&
        I.forEach(function (Z) {
          return t(f, Z);
        }),
      oe && en(f, _),
      E
    );
  }
  function g(f, a, d, S) {
    var E = Gn(d);
    if (typeof E != "function") throw Error(O(150));
    if (((d = E.call(d)), d == null)) throw Error(O(151));
    for (
      var L = (E = null), I = a, _ = (a = 0), A = null, $ = d.next();
      I !== null && !$.done;
      _++, $ = d.next()
    ) {
      I.index > _ ? ((A = I), (I = null)) : (A = I.sibling);
      var Z = m(f, I, $.value, S);
      if (Z === null) {
        I === null && (I = A);
        break;
      }
      e && I && Z.alternate === null && t(f, I),
        (a = o(Z, a, _)),
        L === null ? (E = Z) : (L.sibling = Z),
        (L = Z),
        (I = A);
    }
    if ($.done) return n(f, I), oe && en(f, _), E;
    if (I === null) {
      for (; !$.done; _++, $ = d.next())
        ($ = h(f, $.value, S)),
          $ !== null &&
            ((a = o($, a, _)), L === null ? (E = $) : (L.sibling = $), (L = $));
      return oe && en(f, _), E;
    }
    for (I = r(f, I); !$.done; _++, $ = d.next())
      ($ = k(I, f, _, $.value, S)),
        $ !== null &&
          (e && $.alternate !== null && I.delete($.key === null ? _ : $.key),
          (a = o($, a, _)),
          L === null ? (E = $) : (L.sibling = $),
          (L = $));
    return (
      e &&
        I.forEach(function (b) {
          return t(f, b);
        }),
      oe && en(f, _),
      E
    );
  }
  function N(f, a, d, S) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === Sn &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case Wr:
          e: {
            for (var E = d.key, L = a; L !== null; ) {
              if (L.key === E) {
                if (((E = d.type), E === Sn)) {
                  if (L.tag === 7) {
                    n(f, L.sibling),
                      (a = l(L, d.props.children)),
                      (a.return = f),
                      (f = a);
                    break e;
                  }
                } else if (
                  L.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === Rt &&
                    xs(E) === L.type)
                ) {
                  n(f, L.sibling),
                    (a = l(L, d.props)),
                    (a.ref = bn(f, L, d)),
                    (a.return = f),
                    (f = a);
                  break e;
                }
                n(f, L);
                break;
              } else t(f, L);
              L = L.sibling;
            }
            d.type === Sn
              ? ((a = un(d.props.children, f.mode, S, d.key)),
                (a.return = f),
                (f = a))
              : ((S = yl(d.type, d.key, d.props, null, f.mode, S)),
                (S.ref = bn(f, a, d)),
                (S.return = f),
                (f = S));
          }
          return i(f);
        case wn:
          e: {
            for (L = d.key; a !== null; ) {
              if (a.key === L)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === d.containerInfo &&
                  a.stateNode.implementation === d.implementation
                ) {
                  n(f, a.sibling),
                    (a = l(a, d.children || [])),
                    (a.return = f),
                    (f = a);
                  break e;
                } else {
                  n(f, a);
                  break;
                }
              else t(f, a);
              a = a.sibling;
            }
            (a = Mo(d, f.mode, S)), (a.return = f), (f = a);
          }
          return i(f);
        case Rt:
          return (L = d._init), N(f, a, L(d._payload), S);
      }
      if (rr(d)) return x(f, a, d, S);
      if (Gn(d)) return g(f, a, d, S);
      el(f, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        a !== null && a.tag === 6
          ? (n(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
          : (n(f, a), (a = zo(d, f.mode, S)), (a.return = f), (f = a)),
        i(f))
      : n(f, a);
  }
  return N;
}
var Vn = yc(!0),
  vc = yc(!1),
  Dr = {},
  wt = Zt(Dr),
  Or = Zt(Dr),
  _r = Zt(Dr);
function ln(e) {
  if (e === Dr) throw Error(O(174));
  return e;
}
function uu(e, t) {
  switch ((te(_r, t), te(Or, e), te(wt, Dr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Yo(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Yo(t, e));
  }
  le(wt), te(wt, t);
}
function An() {
  le(wt), le(Or), le(_r);
}
function gc(e) {
  ln(_r.current);
  var t = ln(wt.current),
    n = Yo(t, e.type);
  t !== n && (te(Or, e), te(wt, n));
}
function su(e) {
  Or.current === e && (le(wt), le(Or));
}
var ae = Zt(0);
function Il(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var To = [];
function au() {
  for (var e = 0; e < To.length; e++)
    To[e]._workInProgressVersionPrimary = null;
  To.length = 0;
}
var fl = Nt.ReactCurrentDispatcher,
  jo = Nt.ReactCurrentBatchConfig,
  cn = 0,
  ce = null,
  we = null,
  xe = null,
  zl = !1,
  fr = !1,
  Tr = 0,
  jp = 0;
function Le() {
  throw Error(O(321));
}
function cu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ht(e[n], t[n])) return !1;
  return !0;
}
function fu(e, t, n, r, l, o) {
  if (
    ((cn = o),
    (ce = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (fl.current = e === null || e.memoizedState === null ? Ip : zp),
    (e = n(r, l)),
    fr)
  ) {
    o = 0;
    do {
      if (((fr = !1), (Tr = 0), 25 <= o)) throw Error(O(301));
      (o += 1),
        (xe = we = null),
        (t.updateQueue = null),
        (fl.current = Mp),
        (e = n(r, l));
    } while (fr);
  }
  if (
    ((fl.current = Ml),
    (t = we !== null && we.next !== null),
    (cn = 0),
    (xe = we = ce = null),
    (zl = !1),
    t)
  )
    throw Error(O(300));
  return e;
}
function du() {
  var e = Tr !== 0;
  return (Tr = 0), e;
}
function yt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return xe === null ? (ce.memoizedState = xe = e) : (xe = xe.next = e), xe;
}
function ot() {
  if (we === null) {
    var e = ce.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = we.next;
  var t = xe === null ? ce.memoizedState : xe.next;
  if (t !== null) (xe = t), (we = e);
  else {
    if (e === null) throw Error(O(310));
    (we = e),
      (e = {
        memoizedState: we.memoizedState,
        baseState: we.baseState,
        baseQueue: we.baseQueue,
        queue: we.queue,
        next: null,
      }),
      xe === null ? (ce.memoizedState = xe = e) : (xe = xe.next = e);
  }
  return xe;
}
function jr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function No(e) {
  var t = ot(),
    n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = we,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      s = null,
      c = o;
    do {
      var p = c.lane;
      if ((cn & p) === p)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var h = {
          lane: p,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        s === null ? ((u = s = h), (i = r)) : (s = s.next = h),
          (ce.lanes |= p),
          (fn |= p);
      }
      c = c.next;
    } while (c !== null && c !== o);
    s === null ? (i = r) : (s.next = u),
      ht(r, t.memoizedState) || (Ae = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (ce.lanes |= o), (fn |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Lo(e) {
  var t = ot(),
    n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    ht(o, t.memoizedState) || (Ae = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function wc() {}
function Sc(e, t) {
  var n = ce,
    r = ot(),
    l = t(),
    o = !ht(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (Ae = !0)),
    (r = r.queue),
    pu(Ec.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (xe !== null && xe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Nr(9, xc.bind(null, n, r, l, t), void 0, null),
      Ee === null)
    )
      throw Error(O(349));
    cn & 30 || kc(n, t, l);
  }
  return l;
}
function kc(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ce.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ce.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function xc(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Pc(t) && Cc(e);
}
function Ec(e, t, n) {
  return n(function () {
    Pc(t) && Cc(e);
  });
}
function Pc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ht(e, n);
  } catch {
    return !0;
  }
}
function Cc(e) {
  var t = Tt(e, 1);
  t !== null && pt(t, e, 1, -1);
}
function Es(e) {
  var t = yt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: jr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Rp.bind(null, ce, e)),
    [t.memoizedState, e]
  );
}
function Nr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ce.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ce.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Oc() {
  return ot().memoizedState;
}
function dl(e, t, n, r) {
  var l = yt();
  (ce.flags |= e),
    (l.memoizedState = Nr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Jl(e, t, n, r) {
  var l = ot();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (we !== null) {
    var i = we.memoizedState;
    if (((o = i.destroy), r !== null && cu(r, i.deps))) {
      l.memoizedState = Nr(t, n, o, r);
      return;
    }
  }
  (ce.flags |= e), (l.memoizedState = Nr(1 | t, n, o, r));
}
function Ps(e, t) {
  return dl(8390656, 8, e, t);
}
function pu(e, t) {
  return Jl(2048, 8, e, t);
}
function _c(e, t) {
  return Jl(4, 2, e, t);
}
function Tc(e, t) {
  return Jl(4, 4, e, t);
}
function jc(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Nc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Jl(4, 4, jc.bind(null, t, e), n)
  );
}
function hu() {}
function Lc(e, t) {
  var n = ot();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && cu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Rc(e, t) {
  var n = ot();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && cu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ic(e, t, n) {
  return cn & 21
    ? (ht(n, t) || ((n = Da()), (ce.lanes |= n), (fn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ae = !0)), (e.memoizedState = n));
}
function Np(e, t) {
  var n = q;
  (q = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = jo.transition;
  jo.transition = {};
  try {
    e(!1), t();
  } finally {
    (q = n), (jo.transition = r);
  }
}
function zc() {
  return ot().memoizedState;
}
function Lp(e, t, n) {
  var r = Qt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Mc(e))
  )
    Dc(t, n);
  else if (((n = dc(e, t, n, r)), n !== null)) {
    var l = Fe();
    pt(n, e, r, l), Fc(n, t, r);
  }
}
function Rp(e, t, n) {
  var r = Qt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Mc(e)) Dc(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), ht(u, i))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), ou(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = dc(e, t, l, r)),
      n !== null && ((l = Fe()), pt(n, e, r, l), Fc(n, t, r));
  }
}
function Mc(e) {
  var t = e.alternate;
  return e === ce || (t !== null && t === ce);
}
function Dc(e, t) {
  fr = zl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Fc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Qi(e, n);
  }
}
var Ml = {
    readContext: lt,
    useCallback: Le,
    useContext: Le,
    useEffect: Le,
    useImperativeHandle: Le,
    useInsertionEffect: Le,
    useLayoutEffect: Le,
    useMemo: Le,
    useReducer: Le,
    useRef: Le,
    useState: Le,
    useDebugValue: Le,
    useDeferredValue: Le,
    useTransition: Le,
    useMutableSource: Le,
    useSyncExternalStore: Le,
    useId: Le,
    unstable_isNewReconciler: !1,
  },
  Ip = {
    readContext: lt,
    useCallback: function (e, t) {
      return (yt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: lt,
    useEffect: Ps,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        dl(4194308, 4, jc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return dl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return dl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = yt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = yt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Lp.bind(null, ce, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = yt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Es,
    useDebugValue: hu,
    useDeferredValue: function (e) {
      return (yt().memoizedState = e);
    },
    useTransition: function () {
      var e = Es(!1),
        t = e[0];
      return (e = Np.bind(null, e[1])), (yt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ce,
        l = yt();
      if (oe) {
        if (n === void 0) throw Error(O(407));
        n = n();
      } else {
        if (((n = t()), Ee === null)) throw Error(O(349));
        cn & 30 || kc(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        Ps(Ec.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Nr(9, xc.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = yt(),
        t = Ee.identifierPrefix;
      if (oe) {
        var n = Pt,
          r = Et;
        (n = (r & ~(1 << (32 - dt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Tr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = jp++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  zp = {
    readContext: lt,
    useCallback: Lc,
    useContext: lt,
    useEffect: pu,
    useImperativeHandle: Nc,
    useInsertionEffect: _c,
    useLayoutEffect: Tc,
    useMemo: Rc,
    useReducer: No,
    useRef: Oc,
    useState: function () {
      return No(jr);
    },
    useDebugValue: hu,
    useDeferredValue: function (e) {
      var t = ot();
      return Ic(t, we.memoizedState, e);
    },
    useTransition: function () {
      var e = No(jr)[0],
        t = ot().memoizedState;
      return [e, t];
    },
    useMutableSource: wc,
    useSyncExternalStore: Sc,
    useId: zc,
    unstable_isNewReconciler: !1,
  },
  Mp = {
    readContext: lt,
    useCallback: Lc,
    useContext: lt,
    useEffect: pu,
    useImperativeHandle: Nc,
    useInsertionEffect: _c,
    useLayoutEffect: Tc,
    useMemo: Rc,
    useReducer: Lo,
    useRef: Oc,
    useState: function () {
      return Lo(jr);
    },
    useDebugValue: hu,
    useDeferredValue: function (e) {
      var t = ot();
      return we === null ? (t.memoizedState = e) : Ic(t, we.memoizedState, e);
    },
    useTransition: function () {
      var e = Lo(jr)[0],
        t = ot().memoizedState;
      return [e, t];
    },
    useMutableSource: wc,
    useSyncExternalStore: Sc,
    useId: zc,
    unstable_isNewReconciler: !1,
  };
function Wn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += ad(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Ro(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function yi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Dp = typeof WeakMap == "function" ? WeakMap : Map;
function Uc(e, t, n) {
  (n = Ct(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Fl || ((Fl = !0), (Oi = r)), yi(e, t);
    }),
    n
  );
}
function Bc(e, t, n) {
  (n = Ct(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        yi(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        yi(e, t),
          typeof r != "function" &&
            (Ht === null ? (Ht = new Set([this])) : Ht.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Cs(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Dp();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Zp.bind(null, e, t, n)), t.then(e, e));
}
function Os(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function _s(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ct(-1, 1)), (t.tag = 2), Wt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Fp = Nt.ReactCurrentOwner,
  Ae = !1;
function De(e, t, n, r) {
  t.child = e === null ? vc(t, null, n, r) : Vn(t, e.child, n, r);
}
function Ts(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    Mn(t, l),
    (r = fu(e, t, n, r, o, l)),
    (n = du()),
    e !== null && !Ae
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        jt(e, t, l))
      : (oe && n && bi(t), (t.flags |= 1), De(e, t, r, l), t.child)
  );
}
function js(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !xu(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), $c(e, t, o, r, l))
      : ((e = yl(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : xr), n(i, r) && e.ref === t.ref)
    )
      return jt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = Kt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function $c(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (xr(o, r) && e.ref === t.ref)
      if (((Ae = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (Ae = !0);
      else return (t.lanes = e.lanes), jt(e, t, l);
  }
  return vi(e, t, n, r, l);
}
function Vc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        te(Nn, Ge),
        (Ge |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          te(Nn, Ge),
          (Ge |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        te(Nn, Ge),
        (Ge |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      te(Nn, Ge),
      (Ge |= r);
  return De(e, t, l, n), t.child;
}
function Ac(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function vi(e, t, n, r, l) {
  var o = He(n) ? sn : ze.current;
  return (
    (o = Bn(t, o)),
    Mn(t, l),
    (n = fu(e, t, n, r, o, l)),
    (r = du()),
    e !== null && !Ae
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        jt(e, t, l))
      : (oe && r && bi(t), (t.flags |= 1), De(e, t, n, l), t.child)
  );
}
function Ns(e, t, n, r, l) {
  if (He(n)) {
    var o = !0;
    _l(t);
  } else o = !1;
  if ((Mn(t, l), t.stateNode === null))
    pl(e, t), mc(t, n, r), mi(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var s = i.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = lt(c))
      : ((c = He(n) ? sn : ze.current), (c = Bn(t, c)));
    var p = n.getDerivedStateFromProps,
      h =
        typeof p == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== r || s !== c) && ks(t, i, r, c)),
      (It = !1);
    var m = t.memoizedState;
    (i.state = m),
      Rl(t, r, i, l),
      (s = t.memoizedState),
      u !== r || m !== s || We.current || It
        ? (typeof p == "function" && (hi(t, n, p, r), (s = t.memoizedState)),
          (u = It || Ss(t, n, u, r, m, s, c))
            ? (h ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = c),
          (r = u))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      pc(e, t),
      (u = t.memoizedProps),
      (c = t.type === t.elementType ? u : at(t.type, u)),
      (i.props = c),
      (h = t.pendingProps),
      (m = i.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = lt(s))
        : ((s = He(n) ? sn : ze.current), (s = Bn(t, s)));
    var k = n.getDerivedStateFromProps;
    (p =
      typeof k == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== h || m !== s) && ks(t, i, r, s)),
      (It = !1),
      (m = t.memoizedState),
      (i.state = m),
      Rl(t, r, i, l);
    var x = t.memoizedState;
    u !== h || m !== x || We.current || It
      ? (typeof k == "function" && (hi(t, n, k, r), (x = t.memoizedState)),
        (c = It || Ss(t, n, c, r, m, x, s) || !1)
          ? (p ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, x, s),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, x, s)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (i.props = r),
        (i.state = x),
        (i.context = s),
        (r = c))
      : (typeof i.componentDidUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return gi(e, t, n, r, o, l);
}
function gi(e, t, n, r, l, o) {
  Ac(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && ms(t, n, !1), jt(e, t, o);
  (r = t.stateNode), (Fp.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Vn(t, e.child, null, o)), (t.child = Vn(t, null, u, o)))
      : De(e, t, u, o),
    (t.memoizedState = r.state),
    l && ms(t, n, !0),
    t.child
  );
}
function Wc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? hs(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && hs(e, t.context, !1),
    uu(e, t.containerInfo);
}
function Ls(e, t, n, r, l) {
  return $n(), tu(l), (t.flags |= 256), De(e, t, n, r), t.child;
}
var wi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Si(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Hc(e, t, n) {
  var r = t.pendingProps,
    l = ae.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    te(ae, l & 1),
    e === null)
  )
    return (
      di(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = eo(i, r, 0, null)),
              (e = un(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Si(n)),
              (t.memoizedState = wi),
              e)
            : mu(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return Up(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = Kt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = Kt(u, o)) : ((o = un(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Si(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = wi),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Kt(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function mu(e, t) {
  return (
    (t = eo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function tl(e, t, n, r) {
  return (
    r !== null && tu(r),
    Vn(t, e.child, null, n),
    (e = mu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Up(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ro(Error(O(422)))), tl(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = eo({ mode: "visible", children: r.children }, l, 0, null)),
        (o = un(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Vn(t, e.child, null, i),
        (t.child.memoizedState = Si(i)),
        (t.memoizedState = wi),
        o);
  if (!(t.mode & 1)) return tl(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(O(419))), (r = Ro(o, r, void 0)), tl(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), Ae || u)) {
    if (((r = Ee), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), Tt(e, l), pt(r, e, l, -1));
    }
    return ku(), (r = Ro(Error(O(421)))), tl(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Jp.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Xe = At(l.nextSibling)),
      (Ze = t),
      (oe = !0),
      (ft = null),
      e !== null &&
        ((et[tt++] = Et),
        (et[tt++] = Pt),
        (et[tt++] = an),
        (Et = e.id),
        (Pt = e.overflow),
        (an = t)),
      (t = mu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Rs(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), pi(e.return, t, n);
}
function Io(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function Qc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((De(e, t, r.children, n), (r = ae.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Rs(e, n, t);
        else if (e.tag === 19) Rs(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((te(ae, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Il(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Io(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Il(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Io(t, !0, n, null, o);
        break;
      case "together":
        Io(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function pl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function jt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (fn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(O(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Kt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Kt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Bp(e, t, n) {
  switch (t.tag) {
    case 3:
      Wc(t), $n();
      break;
    case 5:
      gc(t);
      break;
    case 1:
      He(t.type) && _l(t);
      break;
    case 4:
      uu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      te(Nl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (te(ae, ae.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Hc(e, t, n)
          : (te(ae, ae.current & 1),
            (e = jt(e, t, n)),
            e !== null ? e.sibling : null);
      te(ae, ae.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Qc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        te(ae, ae.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Vc(e, t, n);
  }
  return jt(e, t, n);
}
var Kc, ki, Yc, Gc;
Kc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
ki = function () {};
Yc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), ln(wt.current);
    var o = null;
    switch (n) {
      case "input":
        (l = Wo(e, l)), (r = Wo(e, r)), (o = []);
        break;
      case "select":
        (l = fe({}, l, { value: void 0 })),
          (r = fe({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = Ko(e, l)), (r = Ko(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Cl);
    }
    Go(n, r);
    var i;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var u = l[c];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (mr.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (
        ((u = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && s !== u && (s != null || u != null))
      )
        if (c === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in s)
              s.hasOwnProperty(i) &&
                u[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]));
          } else n || (o || (o = []), o.push(c, n)), (n = s);
        else
          c === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (o = o || []).push(c, s))
            : c === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (o = o || []).push(c, "" + s)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (mr.hasOwnProperty(c)
                ? (s != null && c === "onScroll" && re("scroll", e),
                  o || u === s || (o = []))
                : (o = o || []).push(c, s));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Gc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function er(e, t) {
  if (!oe)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Re(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function $p(e, t, n) {
  var r = t.pendingProps;
  switch ((eu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Re(t), null;
    case 1:
      return He(t.type) && Ol(), Re(t), null;
    case 3:
      return (
        (r = t.stateNode),
        An(),
        le(We),
        le(ze),
        au(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (br(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ft !== null && (ji(ft), (ft = null)))),
        ki(e, t),
        Re(t),
        null
      );
    case 5:
      su(t);
      var l = ln(_r.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Yc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(O(166));
          return Re(t), null;
        }
        if (((e = ln(wt.current)), br(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[vt] = t), (r[Cr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              re("cancel", r), re("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              re("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < or.length; l++) re(or[l], r);
              break;
            case "source":
              re("error", r);
              break;
            case "img":
            case "image":
            case "link":
              re("error", r), re("load", r);
              break;
            case "details":
              re("toggle", r);
              break;
            case "input":
              Vu(r, o), re("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                re("invalid", r);
              break;
            case "textarea":
              Wu(r, o), re("invalid", r);
          }
          Go(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      qr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      qr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : mr.hasOwnProperty(i) &&
                  u != null &&
                  i === "onScroll" &&
                  re("scroll", r);
            }
          switch (n) {
            case "input":
              Hr(r), Au(r, o, !0);
              break;
            case "textarea":
              Hr(r), Hu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Cl);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ka(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[vt] = t),
            (e[Cr] = r),
            Kc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Xo(n, r)), n)) {
              case "dialog":
                re("cancel", e), re("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                re("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < or.length; l++) re(or[l], e);
                l = r;
                break;
              case "source":
                re("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                re("error", e), re("load", e), (l = r);
                break;
              case "details":
                re("toggle", e), (l = r);
                break;
              case "input":
                Vu(e, r), (l = Wo(e, r)), re("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = fe({}, r, { value: void 0 })),
                  re("invalid", e);
                break;
              case "textarea":
                Wu(e, r), (l = Ko(e, r)), re("invalid", e);
                break;
              default:
                l = r;
            }
            Go(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style"
                  ? Pa(e, s)
                  : o === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && xa(e, s))
                  : o === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && yr(e, s)
                    : typeof s == "number" && yr(e, "" + s)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (mr.hasOwnProperty(o)
                      ? s != null && o === "onScroll" && re("scroll", e)
                      : s != null && Bi(e, o, s, i));
              }
            switch (n) {
              case "input":
                Hr(e), Au(e, r, !1);
                break;
              case "textarea":
                Hr(e), Hu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Yt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Ln(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Ln(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Cl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Re(t), null;
    case 6:
      if (e && t.stateNode != null) Gc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(O(166));
        if (((n = ln(_r.current)), ln(wt.current), br(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[vt] = t),
            (o = r.nodeValue !== n) && ((e = Ze), e !== null))
          )
            switch (e.tag) {
              case 3:
                qr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  qr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[vt] = t),
            (t.stateNode = r);
      }
      return Re(t), null;
    case 13:
      if (
        (le(ae),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (oe && Xe !== null && t.mode & 1 && !(t.flags & 128))
          fc(), $n(), (t.flags |= 98560), (o = !1);
        else if (((o = br(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(O(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(O(317));
            o[vt] = t;
          } else
            $n(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Re(t), (o = !1);
        } else ft !== null && (ji(ft), (ft = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ae.current & 1 ? Se === 0 && (Se = 3) : ku())),
          t.updateQueue !== null && (t.flags |= 4),
          Re(t),
          null);
    case 4:
      return (
        An(), ki(e, t), e === null && Er(t.stateNode.containerInfo), Re(t), null
      );
    case 10:
      return lu(t.type._context), Re(t), null;
    case 17:
      return He(t.type) && Ol(), Re(t), null;
    case 19:
      if ((le(ae), (o = t.memoizedState), o === null)) return Re(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) er(o, !1);
        else {
          if (Se !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Il(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    er(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return te(ae, (ae.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            pe() > Hn &&
            ((t.flags |= 128), (r = !0), er(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Il(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              er(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !oe)
            )
              return Re(t), null;
          } else
            2 * pe() - o.renderingStartTime > Hn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), er(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = pe()),
          (t.sibling = null),
          (n = ae.current),
          te(ae, r ? (n & 1) | 2 : n & 1),
          t)
        : (Re(t), null);
    case 22:
    case 23:
      return (
        Su(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ge & 1073741824 && (Re(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Re(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(O(156, t.tag));
}
function Vp(e, t) {
  switch ((eu(t), t.tag)) {
    case 1:
      return (
        He(t.type) && Ol(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        An(),
        le(We),
        le(ze),
        au(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return su(t), null;
    case 13:
      if (
        (le(ae), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(O(340));
        $n();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return le(ae), null;
    case 4:
      return An(), null;
    case 10:
      return lu(t.type._context), null;
    case 22:
    case 23:
      return Su(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var nl = !1,
  Ie = !1,
  Ap = typeof WeakSet == "function" ? WeakSet : Set,
  z = null;
function jn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        de(e, t, r);
      }
    else n.current = null;
}
function xi(e, t, n) {
  try {
    n();
  } catch (r) {
    de(e, t, r);
  }
}
var Is = !1;
function Wp(e, t) {
  if (((oi = xl), (e = qa()), qi(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            u = -1,
            s = -1,
            c = 0,
            p = 0,
            h = e,
            m = null;
          t: for (;;) {
            for (
              var k;
              h !== n || (l !== 0 && h.nodeType !== 3) || (u = i + l),
                h !== o || (r !== 0 && h.nodeType !== 3) || (s = i + r),
                h.nodeType === 3 && (i += h.nodeValue.length),
                (k = h.firstChild) !== null;

            )
              (m = h), (h = k);
            for (;;) {
              if (h === e) break t;
              if (
                (m === n && ++c === l && (u = i),
                m === o && ++p === r && (s = i),
                (k = h.nextSibling) !== null)
              )
                break;
              (h = m), (m = h.parentNode);
            }
            h = k;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ii = { focusedElem: e, selectionRange: n }, xl = !1, z = t; z !== null; )
    if (((t = z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (z = e);
    else
      for (; z !== null; ) {
        t = z;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var g = x.memoizedProps,
                    N = x.memoizedState,
                    f = t.stateNode,
                    a = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : at(t.type, g),
                      N
                    );
                  f.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(O(163));
            }
        } catch (S) {
          de(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (z = e);
          break;
        }
        z = t.return;
      }
  return (x = Is), (Is = !1), x;
}
function dr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && xi(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function ql(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ei(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Xc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Xc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[vt], delete t[Cr], delete t[ai], delete t[Cp], delete t[Op])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Zc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function zs(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Zc(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Pi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Cl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Pi(e, t, n), e = e.sibling; e !== null; ) Pi(e, t, n), (e = e.sibling);
}
function Ci(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ci(e, t, n), e = e.sibling; e !== null; ) Ci(e, t, n), (e = e.sibling);
}
var Ce = null,
  ct = !1;
function Lt(e, t, n) {
  for (n = n.child; n !== null; ) Jc(e, t, n), (n = n.sibling);
}
function Jc(e, t, n) {
  if (gt && typeof gt.onCommitFiberUnmount == "function")
    try {
      gt.onCommitFiberUnmount(Hl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ie || jn(n, t);
    case 6:
      var r = Ce,
        l = ct;
      (Ce = null),
        Lt(e, t, n),
        (Ce = r),
        (ct = l),
        Ce !== null &&
          (ct
            ? ((e = Ce),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ce.removeChild(n.stateNode));
      break;
    case 18:
      Ce !== null &&
        (ct
          ? ((e = Ce),
            (n = n.stateNode),
            e.nodeType === 8
              ? Oo(e.parentNode, n)
              : e.nodeType === 1 && Oo(e, n),
            Sr(e))
          : Oo(Ce, n.stateNode));
      break;
    case 4:
      (r = Ce),
        (l = ct),
        (Ce = n.stateNode.containerInfo),
        (ct = !0),
        Lt(e, t, n),
        (Ce = r),
        (ct = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ie &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && xi(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      Lt(e, t, n);
      break;
    case 1:
      if (
        !Ie &&
        (jn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          de(n, t, u);
        }
      Lt(e, t, n);
      break;
    case 21:
      Lt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ie = (r = Ie) || n.memoizedState !== null), Lt(e, t, n), (Ie = r))
        : Lt(e, t, n);
      break;
    default:
      Lt(e, t, n);
  }
}
function Ms(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Ap()),
      t.forEach(function (r) {
        var l = qp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function st(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (Ce = u.stateNode), (ct = !1);
              break e;
            case 3:
              (Ce = u.stateNode.containerInfo), (ct = !0);
              break e;
            case 4:
              (Ce = u.stateNode.containerInfo), (ct = !0);
              break e;
          }
          u = u.return;
        }
        if (Ce === null) throw Error(O(160));
        Jc(o, i, l), (Ce = null), (ct = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (c) {
        de(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) qc(t, e), (t = t.sibling);
}
function qc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((st(t, e), mt(e), r & 4)) {
        try {
          dr(3, e, e.return), ql(3, e);
        } catch (g) {
          de(e, e.return, g);
        }
        try {
          dr(5, e, e.return);
        } catch (g) {
          de(e, e.return, g);
        }
      }
      break;
    case 1:
      st(t, e), mt(e), r & 512 && n !== null && jn(n, n.return);
      break;
    case 5:
      if (
        (st(t, e),
        mt(e),
        r & 512 && n !== null && jn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          yr(l, "");
        } catch (g) {
          de(e, e.return, g);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && o.type === "radio" && o.name != null && wa(l, o),
              Xo(u, i);
            var c = Xo(u, o);
            for (i = 0; i < s.length; i += 2) {
              var p = s[i],
                h = s[i + 1];
              p === "style"
                ? Pa(l, h)
                : p === "dangerouslySetInnerHTML"
                ? xa(l, h)
                : p === "children"
                ? yr(l, h)
                : Bi(l, p, h, c);
            }
            switch (u) {
              case "input":
                Ho(l, o);
                break;
              case "textarea":
                Sa(l, o);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var k = o.value;
                k != null
                  ? Ln(l, !!o.multiple, k, !1)
                  : m !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Ln(l, !!o.multiple, o.defaultValue, !0)
                      : Ln(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Cr] = o;
          } catch (g) {
            de(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((st(t, e), mt(e), r & 4)) {
        if (e.stateNode === null) throw Error(O(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (g) {
          de(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (st(t, e), mt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Sr(t.containerInfo);
        } catch (g) {
          de(e, e.return, g);
        }
      break;
    case 4:
      st(t, e), mt(e);
      break;
    case 13:
      st(t, e),
        mt(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (gu = pe())),
        r & 4 && Ms(e);
      break;
    case 22:
      if (
        ((p = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ie = (c = Ie) || p), st(t, e), (Ie = c)) : st(t, e),
        mt(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !p && e.mode & 1)
        )
          for (z = e, p = e.child; p !== null; ) {
            for (h = z = p; z !== null; ) {
              switch (((m = z), (k = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  dr(4, m, m.return);
                  break;
                case 1:
                  jn(m, m.return);
                  var x = m.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount();
                    } catch (g) {
                      de(r, n, g);
                    }
                  }
                  break;
                case 5:
                  jn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Fs(h);
                    continue;
                  }
              }
              k !== null ? ((k.return = m), (z = k)) : Fs(h);
            }
            p = p.sibling;
          }
        e: for (p = null, h = e; ; ) {
          if (h.tag === 5) {
            if (p === null) {
              p = h;
              try {
                (l = h.stateNode),
                  c
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((u = h.stateNode),
                      (s = h.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = Ea("display", i)));
              } catch (g) {
                de(e, e.return, g);
              }
            }
          } else if (h.tag === 6) {
            if (p === null)
              try {
                h.stateNode.nodeValue = c ? "" : h.memoizedProps;
              } catch (g) {
                de(e, e.return, g);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            p === h && (p = null), (h = h.return);
          }
          p === h && (p = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      st(t, e), mt(e), r & 4 && Ms(e);
      break;
    case 21:
      break;
    default:
      st(t, e), mt(e);
  }
}
function mt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Zc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(O(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (yr(l, ""), (r.flags &= -33));
          var o = zs(e);
          Ci(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = zs(e);
          Pi(e, u, i);
          break;
        default:
          throw Error(O(161));
      }
    } catch (s) {
      de(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Hp(e, t, n) {
  (z = e), bc(e);
}
function bc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; z !== null; ) {
    var l = z,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || nl;
      if (!i) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || Ie;
        u = nl;
        var c = Ie;
        if (((nl = i), (Ie = s) && !c))
          for (z = l; z !== null; )
            (i = z),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Us(l)
                : s !== null
                ? ((s.return = i), (z = s))
                : Us(l);
        for (; o !== null; ) (z = o), bc(o), (o = o.sibling);
        (z = l), (nl = u), (Ie = c);
      }
      Ds(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (z = o)) : Ds(e);
  }
}
function Ds(e) {
  for (; z !== null; ) {
    var t = z;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ie || ql(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ie)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : at(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && ws(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ws(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var p = c.memoizedState;
                  if (p !== null) {
                    var h = p.dehydrated;
                    h !== null && Sr(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(O(163));
          }
        Ie || (t.flags & 512 && Ei(t));
      } catch (m) {
        de(t, t.return, m);
      }
    }
    if (t === e) {
      z = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function Fs(e) {
  for (; z !== null; ) {
    var t = z;
    if (t === e) {
      z = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function Us(e) {
  for (; z !== null; ) {
    var t = z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ql(4, t);
          } catch (s) {
            de(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              de(t, l, s);
            }
          }
          var o = t.return;
          try {
            Ei(t);
          } catch (s) {
            de(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Ei(t);
          } catch (s) {
            de(t, i, s);
          }
      }
    } catch (s) {
      de(t, t.return, s);
    }
    if (t === e) {
      z = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (z = u);
      break;
    }
    z = t.return;
  }
}
var Qp = Math.ceil,
  Dl = Nt.ReactCurrentDispatcher,
  yu = Nt.ReactCurrentOwner,
  rt = Nt.ReactCurrentBatchConfig,
  X = 0,
  Ee = null,
  ve = null,
  Oe = 0,
  Ge = 0,
  Nn = Zt(0),
  Se = 0,
  Lr = null,
  fn = 0,
  bl = 0,
  vu = 0,
  pr = null,
  Ve = null,
  gu = 0,
  Hn = 1 / 0,
  kt = null,
  Fl = !1,
  Oi = null,
  Ht = null,
  rl = !1,
  Ft = null,
  Ul = 0,
  hr = 0,
  _i = null,
  hl = -1,
  ml = 0;
function Fe() {
  return X & 6 ? pe() : hl !== -1 ? hl : (hl = pe());
}
function Qt(e) {
  return e.mode & 1
    ? X & 2 && Oe !== 0
      ? Oe & -Oe
      : Tp.transition !== null
      ? (ml === 0 && (ml = Da()), ml)
      : ((e = q),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Wa(e.type))),
        e)
    : 1;
}
function pt(e, t, n, r) {
  if (50 < hr) throw ((hr = 0), (_i = null), Error(O(185)));
  Ir(e, n, r),
    (!(X & 2) || e !== Ee) &&
      (e === Ee && (!(X & 2) && (bl |= n), Se === 4 && Mt(e, Oe)),
      Qe(e, r),
      n === 1 && X === 0 && !(t.mode & 1) && ((Hn = pe() + 500), Xl && Jt()));
}
function Qe(e, t) {
  var n = e.callbackNode;
  Td(e, t);
  var r = kl(e, e === Ee ? Oe : 0);
  if (r === 0)
    n !== null && Yu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Yu(n), t === 1))
      e.tag === 0 ? _p(Bs.bind(null, e)) : sc(Bs.bind(null, e)),
        Ep(function () {
          !(X & 6) && Jt();
        }),
        (n = null);
    else {
      switch (Fa(r)) {
        case 1:
          n = Hi;
          break;
        case 4:
          n = za;
          break;
        case 16:
          n = Sl;
          break;
        case 536870912:
          n = Ma;
          break;
        default:
          n = Sl;
      }
      n = sf(n, ef.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function ef(e, t) {
  if (((hl = -1), (ml = 0), X & 6)) throw Error(O(327));
  var n = e.callbackNode;
  if (Dn() && e.callbackNode !== n) return null;
  var r = kl(e, e === Ee ? Oe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Bl(e, r);
  else {
    t = r;
    var l = X;
    X |= 2;
    var o = nf();
    (Ee !== e || Oe !== t) && ((kt = null), (Hn = pe() + 500), on(e, t));
    do
      try {
        Gp();
        break;
      } catch (u) {
        tf(e, u);
      }
    while (!0);
    ru(),
      (Dl.current = o),
      (X = l),
      ve !== null ? (t = 0) : ((Ee = null), (Oe = 0), (t = Se));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = ei(e)), l !== 0 && ((r = l), (t = Ti(e, l)))), t === 1)
    )
      throw ((n = Lr), on(e, 0), Mt(e, r), Qe(e, pe()), n);
    if (t === 6) Mt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Kp(l) &&
          ((t = Bl(e, r)),
          t === 2 && ((o = ei(e)), o !== 0 && ((r = o), (t = Ti(e, o)))),
          t === 1))
      )
        throw ((n = Lr), on(e, 0), Mt(e, r), Qe(e, pe()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(O(345));
        case 2:
          tn(e, Ve, kt);
          break;
        case 3:
          if (
            (Mt(e, r), (r & 130023424) === r && ((t = gu + 500 - pe()), 10 < t))
          ) {
            if (kl(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              Fe(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = si(tn.bind(null, e, Ve, kt), t);
            break;
          }
          tn(e, Ve, kt);
          break;
        case 4:
          if ((Mt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - dt(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = pe() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Qp(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = si(tn.bind(null, e, Ve, kt), r);
            break;
          }
          tn(e, Ve, kt);
          break;
        case 5:
          tn(e, Ve, kt);
          break;
        default:
          throw Error(O(329));
      }
    }
  }
  return Qe(e, pe()), e.callbackNode === n ? ef.bind(null, e) : null;
}
function Ti(e, t) {
  var n = pr;
  return (
    e.current.memoizedState.isDehydrated && (on(e, t).flags |= 256),
    (e = Bl(e, t)),
    e !== 2 && ((t = Ve), (Ve = n), t !== null && ji(t)),
    e
  );
}
function ji(e) {
  Ve === null ? (Ve = e) : Ve.push.apply(Ve, e);
}
function Kp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!ht(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Mt(e, t) {
  for (
    t &= ~vu,
      t &= ~bl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - dt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Bs(e) {
  if (X & 6) throw Error(O(327));
  Dn();
  var t = kl(e, 0);
  if (!(t & 1)) return Qe(e, pe()), null;
  var n = Bl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ei(e);
    r !== 0 && ((t = r), (n = Ti(e, r)));
  }
  if (n === 1) throw ((n = Lr), on(e, 0), Mt(e, t), Qe(e, pe()), n);
  if (n === 6) throw Error(O(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    tn(e, Ve, kt),
    Qe(e, pe()),
    null
  );
}
function wu(e, t) {
  var n = X;
  X |= 1;
  try {
    return e(t);
  } finally {
    (X = n), X === 0 && ((Hn = pe() + 500), Xl && Jt());
  }
}
function dn(e) {
  Ft !== null && Ft.tag === 0 && !(X & 6) && Dn();
  var t = X;
  X |= 1;
  var n = rt.transition,
    r = q;
  try {
    if (((rt.transition = null), (q = 1), e)) return e();
  } finally {
    (q = r), (rt.transition = n), (X = t), !(X & 6) && Jt();
  }
}
function Su() {
  (Ge = Nn.current), le(Nn);
}
function on(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), xp(n)), ve !== null))
    for (n = ve.return; n !== null; ) {
      var r = n;
      switch ((eu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ol();
          break;
        case 3:
          An(), le(We), le(ze), au();
          break;
        case 5:
          su(r);
          break;
        case 4:
          An();
          break;
        case 13:
          le(ae);
          break;
        case 19:
          le(ae);
          break;
        case 10:
          lu(r.type._context);
          break;
        case 22:
        case 23:
          Su();
      }
      n = n.return;
    }
  if (
    ((Ee = e),
    (ve = e = Kt(e.current, null)),
    (Oe = Ge = t),
    (Se = 0),
    (Lr = null),
    (vu = bl = fn = 0),
    (Ve = pr = null),
    rn !== null)
  ) {
    for (t = 0; t < rn.length; t++)
      if (((n = rn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    rn = null;
  }
  return e;
}
function tf(e, t) {
  do {
    var n = ve;
    try {
      if ((ru(), (fl.current = Ml), zl)) {
        for (var r = ce.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        zl = !1;
      }
      if (
        ((cn = 0),
        (xe = we = ce = null),
        (fr = !1),
        (Tr = 0),
        (yu.current = null),
        n === null || n.return === null)
      ) {
        (Se = 1), (Lr = t), (ve = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          s = t;
        if (
          ((t = Oe),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var c = s,
            p = u,
            h = p.tag;
          if (!(p.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var m = p.alternate;
            m
              ? ((p.updateQueue = m.updateQueue),
                (p.memoizedState = m.memoizedState),
                (p.lanes = m.lanes))
              : ((p.updateQueue = null), (p.memoizedState = null));
          }
          var k = Os(i);
          if (k !== null) {
            (k.flags &= -257),
              _s(k, i, u, o, t),
              k.mode & 1 && Cs(o, c, t),
              (t = k),
              (s = c);
            var x = t.updateQueue;
            if (x === null) {
              var g = new Set();
              g.add(s), (t.updateQueue = g);
            } else x.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Cs(o, c, t), ku();
              break e;
            }
            s = Error(O(426));
          }
        } else if (oe && u.mode & 1) {
          var N = Os(i);
          if (N !== null) {
            !(N.flags & 65536) && (N.flags |= 256),
              _s(N, i, u, o, t),
              tu(Wn(s, u));
            break e;
          }
        }
        (o = s = Wn(s, u)),
          Se !== 4 && (Se = 2),
          pr === null ? (pr = [o]) : pr.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var f = Uc(o, s, t);
              gs(o, f);
              break e;
            case 1:
              u = s;
              var a = o.type,
                d = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof a.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (Ht === null || !Ht.has(d))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var S = Bc(o, u, t);
                gs(o, S);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      lf(n);
    } catch (E) {
      (t = E), ve === n && n !== null && (ve = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function nf() {
  var e = Dl.current;
  return (Dl.current = Ml), e === null ? Ml : e;
}
function ku() {
  (Se === 0 || Se === 3 || Se === 2) && (Se = 4),
    Ee === null || (!(fn & 268435455) && !(bl & 268435455)) || Mt(Ee, Oe);
}
function Bl(e, t) {
  var n = X;
  X |= 2;
  var r = nf();
  (Ee !== e || Oe !== t) && ((kt = null), on(e, t));
  do
    try {
      Yp();
      break;
    } catch (l) {
      tf(e, l);
    }
  while (!0);
  if ((ru(), (X = n), (Dl.current = r), ve !== null)) throw Error(O(261));
  return (Ee = null), (Oe = 0), Se;
}
function Yp() {
  for (; ve !== null; ) rf(ve);
}
function Gp() {
  for (; ve !== null && !wd(); ) rf(ve);
}
function rf(e) {
  var t = uf(e.alternate, e, Ge);
  (e.memoizedProps = e.pendingProps),
    t === null ? lf(e) : (ve = t),
    (yu.current = null);
}
function lf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Vp(n, t)), n !== null)) {
        (n.flags &= 32767), (ve = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Se = 6), (ve = null);
        return;
      }
    } else if (((n = $p(n, t, Ge)), n !== null)) {
      ve = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ve = t;
      return;
    }
    ve = t = e;
  } while (t !== null);
  Se === 0 && (Se = 5);
}
function tn(e, t, n) {
  var r = q,
    l = rt.transition;
  try {
    (rt.transition = null), (q = 1), Xp(e, t, n, r);
  } finally {
    (rt.transition = l), (q = r);
  }
  return null;
}
function Xp(e, t, n, r) {
  do Dn();
  while (Ft !== null);
  if (X & 6) throw Error(O(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(O(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (jd(e, o),
    e === Ee && ((ve = Ee = null), (Oe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      rl ||
      ((rl = !0),
      sf(Sl, function () {
        return Dn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = rt.transition), (rt.transition = null);
    var i = q;
    q = 1;
    var u = X;
    (X |= 4),
      (yu.current = null),
      Wp(e, n),
      qc(n, e),
      mp(ii),
      (xl = !!oi),
      (ii = oi = null),
      (e.current = n),
      Hp(n),
      Sd(),
      (X = u),
      (q = i),
      (rt.transition = o);
  } else e.current = n;
  if (
    (rl && ((rl = !1), (Ft = e), (Ul = l)),
    (o = e.pendingLanes),
    o === 0 && (Ht = null),
    Ed(n.stateNode),
    Qe(e, pe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Fl) throw ((Fl = !1), (e = Oi), (Oi = null), e);
  return (
    Ul & 1 && e.tag !== 0 && Dn(),
    (o = e.pendingLanes),
    o & 1 ? (e === _i ? hr++ : ((hr = 0), (_i = e))) : (hr = 0),
    Jt(),
    null
  );
}
function Dn() {
  if (Ft !== null) {
    var e = Fa(Ul),
      t = rt.transition,
      n = q;
    try {
      if (((rt.transition = null), (q = 16 > e ? 16 : e), Ft === null))
        var r = !1;
      else {
        if (((e = Ft), (Ft = null), (Ul = 0), X & 6)) throw Error(O(331));
        var l = X;
        for (X |= 4, z = e.current; z !== null; ) {
          var o = z,
            i = o.child;
          if (z.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (z = c; z !== null; ) {
                  var p = z;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      dr(8, p, o);
                  }
                  var h = p.child;
                  if (h !== null) (h.return = p), (z = h);
                  else
                    for (; z !== null; ) {
                      p = z;
                      var m = p.sibling,
                        k = p.return;
                      if ((Xc(p), p === c)) {
                        z = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = k), (z = m);
                        break;
                      }
                      z = k;
                    }
                }
              }
              var x = o.alternate;
              if (x !== null) {
                var g = x.child;
                if (g !== null) {
                  x.child = null;
                  do {
                    var N = g.sibling;
                    (g.sibling = null), (g = N);
                  } while (g !== null);
                }
              }
              z = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (z = i);
          else
            e: for (; z !== null; ) {
              if (((o = z), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    dr(9, o, o.return);
                }
              var f = o.sibling;
              if (f !== null) {
                (f.return = o.return), (z = f);
                break e;
              }
              z = o.return;
            }
        }
        var a = e.current;
        for (z = a; z !== null; ) {
          i = z;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null) (d.return = i), (z = d);
          else
            e: for (i = a; z !== null; ) {
              if (((u = z), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ql(9, u);
                  }
                } catch (E) {
                  de(u, u.return, E);
                }
              if (u === i) {
                z = null;
                break e;
              }
              var S = u.sibling;
              if (S !== null) {
                (S.return = u.return), (z = S);
                break e;
              }
              z = u.return;
            }
        }
        if (
          ((X = l), Jt(), gt && typeof gt.onPostCommitFiberRoot == "function")
        )
          try {
            gt.onPostCommitFiberRoot(Hl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (q = n), (rt.transition = t);
    }
  }
  return !1;
}
function $s(e, t, n) {
  (t = Wn(n, t)),
    (t = Uc(e, t, 1)),
    (e = Wt(e, t, 1)),
    (t = Fe()),
    e !== null && (Ir(e, 1, t), Qe(e, t));
}
function de(e, t, n) {
  if (e.tag === 3) $s(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        $s(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Ht === null || !Ht.has(r)))
        ) {
          (e = Wn(n, e)),
            (e = Bc(t, e, 1)),
            (t = Wt(t, e, 1)),
            (e = Fe()),
            t !== null && (Ir(t, 1, e), Qe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Zp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Fe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ee === e &&
      (Oe & n) === n &&
      (Se === 4 || (Se === 3 && (Oe & 130023424) === Oe && 500 > pe() - gu)
        ? on(e, 0)
        : (vu |= n)),
    Qe(e, t);
}
function of(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Yr), (Yr <<= 1), !(Yr & 130023424) && (Yr = 4194304))
      : (t = 1));
  var n = Fe();
  (e = Tt(e, t)), e !== null && (Ir(e, t, n), Qe(e, n));
}
function Jp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), of(e, n);
}
function qp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(O(314));
  }
  r !== null && r.delete(t), of(e, n);
}
var uf;
uf = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || We.current) Ae = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ae = !1), Bp(e, t, n);
      Ae = !!(e.flags & 131072);
    }
  else (Ae = !1), oe && t.flags & 1048576 && ac(t, jl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      pl(e, t), (e = t.pendingProps);
      var l = Bn(t, ze.current);
      Mn(t, n), (l = fu(null, t, r, e, l, n));
      var o = du();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            He(r) ? ((o = !0), _l(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            iu(t),
            (l.updater = Zl),
            (t.stateNode = l),
            (l._reactInternals = t),
            mi(t, r, e, n),
            (t = gi(null, t, r, !0, o, n)))
          : ((t.tag = 0), oe && o && bi(t), De(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (pl(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = eh(r)),
          (e = at(r, e)),
          l)
        ) {
          case 0:
            t = vi(null, t, r, e, n);
            break e;
          case 1:
            t = Ns(null, t, r, e, n);
            break e;
          case 11:
            t = Ts(null, t, r, e, n);
            break e;
          case 14:
            t = js(null, t, r, at(r.type, e), n);
            break e;
        }
        throw Error(O(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : at(r, l)),
        vi(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : at(r, l)),
        Ns(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Wc(t), e === null)) throw Error(O(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          pc(e, t),
          Rl(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = Wn(Error(O(423)), t)), (t = Ls(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = Wn(Error(O(424)), t)), (t = Ls(e, t, r, n, l));
            break e;
          } else
            for (
              Xe = At(t.stateNode.containerInfo.firstChild),
                Ze = t,
                oe = !0,
                ft = null,
                n = vc(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if (($n(), r === l)) {
            t = jt(e, t, n);
            break e;
          }
          De(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        gc(t),
        e === null && di(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        ui(r, l) ? (i = null) : o !== null && ui(r, o) && (t.flags |= 32),
        Ac(e, t),
        De(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && di(t), null;
    case 13:
      return Hc(e, t, n);
    case 4:
      return (
        uu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Vn(t, null, r, n)) : De(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : at(r, l)),
        Ts(e, t, r, l, n)
      );
    case 7:
      return De(e, t, t.pendingProps, n), t.child;
    case 8:
      return De(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return De(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          te(Nl, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (ht(o.value, i)) {
            if (o.children === l.children && !We.current) {
              t = jt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = Ct(-1, n & -n)), (s.tag = 2);
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var p = c.pending;
                        p === null
                          ? (s.next = s)
                          : ((s.next = p.next), (p.next = s)),
                          (c.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      pi(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(O(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  pi(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        De(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Mn(t, n),
        (l = lt(l)),
        (r = r(l)),
        (t.flags |= 1),
        De(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = at(r, t.pendingProps)),
        (l = at(r.type, l)),
        js(e, t, r, l, n)
      );
    case 15:
      return $c(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : at(r, l)),
        pl(e, t),
        (t.tag = 1),
        He(r) ? ((e = !0), _l(t)) : (e = !1),
        Mn(t, n),
        mc(t, r, l),
        mi(t, r, l, n),
        gi(null, t, r, !0, e, n)
      );
    case 19:
      return Qc(e, t, n);
    case 22:
      return Vc(e, t, n);
  }
  throw Error(O(156, t.tag));
};
function sf(e, t) {
  return Ia(e, t);
}
function bp(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function nt(e, t, n, r) {
  return new bp(e, t, n, r);
}
function xu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function eh(e) {
  if (typeof e == "function") return xu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Vi)) return 11;
    if (e === Ai) return 14;
  }
  return 2;
}
function Kt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = nt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function yl(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) xu(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Sn:
        return un(n.children, l, o, t);
      case $i:
        (i = 8), (l |= 8);
        break;
      case Bo:
        return (
          (e = nt(12, n, t, l | 2)), (e.elementType = Bo), (e.lanes = o), e
        );
      case $o:
        return (e = nt(13, n, t, l)), (e.elementType = $o), (e.lanes = o), e;
      case Vo:
        return (e = nt(19, n, t, l)), (e.elementType = Vo), (e.lanes = o), e;
      case ya:
        return eo(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case ha:
              i = 10;
              break e;
            case ma:
              i = 9;
              break e;
            case Vi:
              i = 11;
              break e;
            case Ai:
              i = 14;
              break e;
            case Rt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(O(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = nt(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function un(e, t, n, r) {
  return (e = nt(7, e, r, t)), (e.lanes = n), e;
}
function eo(e, t, n, r) {
  return (
    (e = nt(22, e, r, t)),
    (e.elementType = ya),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function zo(e, t, n) {
  return (e = nt(6, e, null, t)), (e.lanes = n), e;
}
function Mo(e, t, n) {
  return (
    (t = nt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function th(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = mo(0)),
    (this.expirationTimes = mo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = mo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Eu(e, t, n, r, l, o, i, u, s) {
  return (
    (e = new th(e, t, n, u, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = nt(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    iu(o),
    e
  );
}
function nh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: wn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function af(e) {
  if (!e) return Gt;
  e = e._reactInternals;
  e: {
    if (hn(e) !== e || e.tag !== 1) throw Error(O(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (He(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(O(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (He(n)) return uc(e, n, t);
  }
  return t;
}
function cf(e, t, n, r, l, o, i, u, s) {
  return (
    (e = Eu(n, r, !0, e, l, o, i, u, s)),
    (e.context = af(null)),
    (n = e.current),
    (r = Fe()),
    (l = Qt(n)),
    (o = Ct(r, l)),
    (o.callback = t ?? null),
    Wt(n, o, l),
    (e.current.lanes = l),
    Ir(e, l, r),
    Qe(e, r),
    e
  );
}
function to(e, t, n, r) {
  var l = t.current,
    o = Fe(),
    i = Qt(l);
  return (
    (n = af(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ct(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Wt(l, t, i)),
    e !== null && (pt(e, l, i, o), cl(e, l, i)),
    i
  );
}
function $l(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Vs(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Pu(e, t) {
  Vs(e, t), (e = e.alternate) && Vs(e, t);
}
function rh() {
  return null;
}
var ff =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Cu(e) {
  this._internalRoot = e;
}
no.prototype.render = Cu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(O(409));
  to(e, t, null, null);
};
no.prototype.unmount = Cu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    dn(function () {
      to(null, e, null, null);
    }),
      (t[_t] = null);
  }
};
function no(e) {
  this._internalRoot = e;
}
no.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = $a();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < zt.length && t !== 0 && t < zt[n].priority; n++);
    zt.splice(n, 0, e), n === 0 && Aa(e);
  }
};
function Ou(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ro(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function As() {}
function lh(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = $l(i);
        o.call(c);
      };
    }
    var i = cf(t, r, e, 0, null, !1, !1, "", As);
    return (
      (e._reactRootContainer = i),
      (e[_t] = i.current),
      Er(e.nodeType === 8 ? e.parentNode : e),
      dn(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var c = $l(s);
      u.call(c);
    };
  }
  var s = Eu(e, 0, !1, null, null, !1, !1, "", As);
  return (
    (e._reactRootContainer = s),
    (e[_t] = s.current),
    Er(e.nodeType === 8 ? e.parentNode : e),
    dn(function () {
      to(t, s, n, r);
    }),
    s
  );
}
function lo(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = $l(i);
        u.call(s);
      };
    }
    to(t, i, e, l);
  } else i = lh(n, t, e, l, r);
  return $l(i);
}
Ua = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = lr(t.pendingLanes);
        n !== 0 &&
          (Qi(t, n | 1), Qe(t, pe()), !(X & 6) && ((Hn = pe() + 500), Jt()));
      }
      break;
    case 13:
      dn(function () {
        var r = Tt(e, 1);
        if (r !== null) {
          var l = Fe();
          pt(r, e, 1, l);
        }
      }),
        Pu(e, 1);
  }
};
Ki = function (e) {
  if (e.tag === 13) {
    var t = Tt(e, 134217728);
    if (t !== null) {
      var n = Fe();
      pt(t, e, 134217728, n);
    }
    Pu(e, 134217728);
  }
};
Ba = function (e) {
  if (e.tag === 13) {
    var t = Qt(e),
      n = Tt(e, t);
    if (n !== null) {
      var r = Fe();
      pt(n, e, t, r);
    }
    Pu(e, t);
  }
};
$a = function () {
  return q;
};
Va = function (e, t) {
  var n = q;
  try {
    return (q = e), t();
  } finally {
    q = n;
  }
};
Jo = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ho(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Gl(r);
            if (!l) throw Error(O(90));
            ga(r), Ho(r, l);
          }
        }
      }
      break;
    case "textarea":
      Sa(e, n);
      break;
    case "select":
      (t = n.value), t != null && Ln(e, !!n.multiple, t, !1);
  }
};
_a = wu;
Ta = dn;
var oh = { usingClientEntryPoint: !1, Events: [Mr, Pn, Gl, Ca, Oa, wu] },
  tr = {
    findFiberByHostInstance: nn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  ih = {
    bundleType: tr.bundleType,
    version: tr.version,
    rendererPackageName: tr.rendererPackageName,
    rendererConfig: tr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Nt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = La(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: tr.findFiberByHostInstance || rh,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ll = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ll.isDisabled && ll.supportsFiber)
    try {
      (Hl = ll.inject(ih)), (gt = ll);
    } catch {}
}
qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = oh;
qe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ou(t)) throw Error(O(200));
  return nh(e, t, null, n);
};
qe.createRoot = function (e, t) {
  if (!Ou(e)) throw Error(O(299));
  var n = !1,
    r = "",
    l = ff;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Eu(e, 1, !1, null, null, n, !1, r, l)),
    (e[_t] = t.current),
    Er(e.nodeType === 8 ? e.parentNode : e),
    new Cu(t)
  );
};
qe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(O(188))
      : ((e = Object.keys(e).join(",")), Error(O(268, e)));
  return (e = La(t)), (e = e === null ? null : e.stateNode), e;
};
qe.flushSync = function (e) {
  return dn(e);
};
qe.hydrate = function (e, t, n) {
  if (!ro(t)) throw Error(O(200));
  return lo(null, e, t, !0, n);
};
qe.hydrateRoot = function (e, t, n) {
  if (!Ou(e)) throw Error(O(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = ff;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = cf(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[_t] = t.current),
    Er(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new no(t);
};
qe.render = function (e, t, n) {
  if (!ro(t)) throw Error(O(200));
  return lo(null, e, t, !1, n);
};
qe.unmountComponentAtNode = function (e) {
  if (!ro(e)) throw Error(O(40));
  return e._reactRootContainer
    ? (dn(function () {
        lo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[_t] = null);
        });
      }),
      !0)
    : !1;
};
qe.unstable_batchedUpdates = wu;
qe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ro(n)) throw Error(O(200));
  if (e == null || e._reactInternals === void 0) throw Error(O(38));
  return lo(e, t, n, !1, r);
};
qe.version = "18.2.0-next-9e3b772b8-20220608";
function df() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(df);
    } catch (e) {
      console.error(e);
    }
}
df(), (aa.exports = qe);
var pf = aa.exports,
  Ws = pf;
(Fo.createRoot = Ws.createRoot), (Fo.hydrateRoot = Ws.hydrateRoot);
function hf() {
  return C.jsx("div", {
    className: "footer-container",
    children: C.jsx("a", {
      className: "footer",
      href: "/contact",
      children: "reach out",
    }),
  });
}
const mf = () => {
  const e = [
    { id: 1, title: "collections" },
    { id: 2, title: "customs", link: "/gallery/4" },
    { id: 3, title: "catalog" },
  ];
  return C.jsx("nav", {
    className: "primary-nav",
    children: C.jsx("ul", {
      className: "nav-links",
      children: e.map((t) =>
        C.jsx(
          "li",
          {
            className: "nav-link",
            children: C.jsx("a", {
              href: t.link ?? `/${t.title.toLowerCase()}`,
              children: t.title,
            }),
          },
          t.id
        )
      ),
    }),
  });
};
function uh() {
  return C.jsxs(C.Fragment, {
    children: [
      C.jsxs("div", {
        className: "home-content",
        children: [
          C.jsxs("section", {
            className: "title",
            children: [
              C.jsx("h1", { children: "jewelry design" }),
              C.jsxs("p", { children: ["·", " "] }),
              C.jsx("h1", { children: " bespoke fabrication" }),
            ],
          }),
          C.jsx("img", {
            src: `/assets/home/${Math.floor(1 + Math.random() * 5)}.jpg`,
            alt: "home photo",
            className: "home-photo",
          }),
          C.jsx("section", { className: "title", children: C.jsx(mf, {}) }),
        ],
      }),
      C.jsx(hf, {}),
    ],
  });
}
const sh = "/assets/collection-images/iMaschination.png",
  ah = "/assets/collection-images/TheWorldAwake.png",
  ch = "/assets/collection-images/OneTimeOnly.png";
var yf = { exports: {} };
(() => {
  var e = {
      296: (l, o, i) => {
        var u = /^\s+|\s+$/g,
          s = /^[-+]0x[0-9a-f]+$/i,
          c = /^0b[01]+$/i,
          p = /^0o[0-7]+$/i,
          h = parseInt,
          m = typeof i.g == "object" && i.g && i.g.Object === Object && i.g,
          k = typeof self == "object" && self && self.Object === Object && self,
          x = m || k || Function("return this")(),
          g = Object.prototype.toString,
          N = Math.max,
          f = Math.min,
          a = function () {
            return x.Date.now();
          };
        function d(E) {
          var L = typeof E;
          return !!E && (L == "object" || L == "function");
        }
        function S(E) {
          if (typeof E == "number") return E;
          if (
            (function (_) {
              return (
                typeof _ == "symbol" ||
                ((function (A) {
                  return !!A && typeof A == "object";
                })(_) &&
                  g.call(_) == "[object Symbol]")
              );
            })(E)
          )
            return NaN;
          if (d(E)) {
            var L = typeof E.valueOf == "function" ? E.valueOf() : E;
            E = d(L) ? L + "" : L;
          }
          if (typeof E != "string") return E === 0 ? E : +E;
          E = E.replace(u, "");
          var I = c.test(E);
          return I || p.test(E)
            ? h(E.slice(2), I ? 2 : 8)
            : s.test(E)
            ? NaN
            : +E;
        }
        l.exports = function (E, L, I) {
          var _,
            A,
            $,
            Z,
            b,
            he,
            ge = 0,
            Me = !1,
            ke = !1,
            Te = !0;
          if (typeof E != "function")
            throw new TypeError("Expected a function");
          function R(ie) {
            var ee = _,
              me = A;
            return (_ = A = void 0), (ge = ie), (Z = E.apply(me, ee));
          }
          function B(ie) {
            var ee = ie - he;
            return he === void 0 || ee >= L || ee < 0 || (ke && ie - ge >= $);
          }
          function U() {
            var ie = a();
            if (B(ie)) return Y(ie);
            b = setTimeout(
              U,
              (function (ee) {
                var me = L - (ee - he);
                return ke ? f(me, $ - (ee - ge)) : me;
              })(ie)
            );
          }
          function Y(ie) {
            return (b = void 0), Te && _ ? R(ie) : ((_ = A = void 0), Z);
          }
          function G() {
            var ie = a(),
              ee = B(ie);
            if (((_ = arguments), (A = this), (he = ie), ee)) {
              if (b === void 0)
                return (function (me) {
                  return (ge = me), (b = setTimeout(U, L)), Me ? R(me) : Z;
                })(he);
              if (ke) return (b = setTimeout(U, L)), R(he);
            }
            return b === void 0 && (b = setTimeout(U, L)), Z;
          }
          return (
            (L = S(L) || 0),
            d(I) &&
              ((Me = !!I.leading),
              ($ = (ke = "maxWait" in I) ? N(S(I.maxWait) || 0, L) : $),
              (Te = "trailing" in I ? !!I.trailing : Te)),
            (G.cancel = function () {
              b !== void 0 && clearTimeout(b),
                (ge = 0),
                (_ = he = A = b = void 0);
            }),
            (G.flush = function () {
              return b === void 0 ? Z : Y(a());
            }),
            G
          );
        };
      },
      96: (l, o, i) => {
        var u = "Expected a function",
          s = NaN,
          c = "[object Symbol]",
          p = /^\s+|\s+$/g,
          h = /^[-+]0x[0-9a-f]+$/i,
          m = /^0b[01]+$/i,
          k = /^0o[0-7]+$/i,
          x = parseInt,
          g = typeof i.g == "object" && i.g && i.g.Object === Object && i.g,
          N = typeof self == "object" && self && self.Object === Object && self,
          f = g || N || Function("return this")(),
          a = Object.prototype.toString,
          d = Math.max,
          S = Math.min,
          E = function () {
            return f.Date.now();
          };
        function L(_) {
          var A = typeof _;
          return !!_ && (A == "object" || A == "function");
        }
        function I(_) {
          if (typeof _ == "number") return _;
          if (
            (function (Z) {
              return (
                typeof Z == "symbol" ||
                ((function (b) {
                  return !!b && typeof b == "object";
                })(Z) &&
                  a.call(Z) == c)
              );
            })(_)
          )
            return s;
          if (L(_)) {
            var A = typeof _.valueOf == "function" ? _.valueOf() : _;
            _ = L(A) ? A + "" : A;
          }
          if (typeof _ != "string") return _ === 0 ? _ : +_;
          _ = _.replace(p, "");
          var $ = m.test(_);
          return $ || k.test(_) ? x(_.slice(2), $ ? 2 : 8) : h.test(_) ? s : +_;
        }
        l.exports = function (_, A, $) {
          var Z = !0,
            b = !0;
          if (typeof _ != "function") throw new TypeError(u);
          return (
            L($) &&
              ((Z = "leading" in $ ? !!$.leading : Z),
              (b = "trailing" in $ ? !!$.trailing : b)),
            (function (he, ge, Me) {
              var ke,
                Te,
                R,
                B,
                U,
                Y,
                G = 0,
                ie = !1,
                ee = !1,
                me = !0;
              if (typeof he != "function") throw new TypeError(u);
              function Ye(je) {
                var $e = ke,
                  ut = Te;
                return (ke = Te = void 0), (G = je), (B = he.apply(ut, $e));
              }
              function St(je) {
                var $e = je - Y;
                return (
                  Y === void 0 || $e >= ge || $e < 0 || (ee && je - G >= R)
                );
              }
              function it() {
                var je = E();
                if (St(je)) return Ur(je);
                U = setTimeout(
                  it,
                  (function ($e) {
                    var ut = ge - ($e - Y);
                    return ee ? S(ut, R - ($e - G)) : ut;
                  })(je)
                );
              }
              function Ur(je) {
                return (
                  (U = void 0), me && ke ? Ye(je) : ((ke = Te = void 0), B)
                );
              }
              function qt() {
                var je = E(),
                  $e = St(je);
                if (((ke = arguments), (Te = this), (Y = je), $e)) {
                  if (U === void 0)
                    return (function (ut) {
                      return (
                        (G = ut), (U = setTimeout(it, ge)), ie ? Ye(ut) : B
                      );
                    })(Y);
                  if (ee) return (U = setTimeout(it, ge)), Ye(Y);
                }
                return U === void 0 && (U = setTimeout(it, ge)), B;
              }
              return (
                (ge = I(ge) || 0),
                L(Me) &&
                  ((ie = !!Me.leading),
                  (R = (ee = "maxWait" in Me) ? d(I(Me.maxWait) || 0, ge) : R),
                  (me = "trailing" in Me ? !!Me.trailing : me)),
                (qt.cancel = function () {
                  U !== void 0 && clearTimeout(U),
                    (G = 0),
                    (ke = Y = Te = U = void 0);
                }),
                (qt.flush = function () {
                  return U === void 0 ? B : Ur(E());
                }),
                qt
              );
            })(_, A, { leading: Z, maxWait: A, trailing: b })
          );
        };
      },
      703: (l, o, i) => {
        var u = i(414);
        function s() {}
        function c() {}
        (c.resetWarningCache = s),
          (l.exports = function () {
            function p(k, x, g, N, f, a) {
              if (a !== u) {
                var d = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                );
                throw ((d.name = "Invariant Violation"), d);
              }
            }
            function h() {
              return p;
            }
            p.isRequired = p;
            var m = {
              array: p,
              bigint: p,
              bool: p,
              func: p,
              number: p,
              object: p,
              string: p,
              symbol: p,
              any: p,
              arrayOf: h,
              element: p,
              elementType: p,
              instanceOf: h,
              node: p,
              objectOf: h,
              oneOf: h,
              oneOfType: h,
              shape: h,
              exact: h,
              checkPropTypes: c,
              resetWarningCache: s,
            };
            return (m.PropTypes = m), m;
          });
      },
      697: (l, o, i) => {
        l.exports = i(703)();
      },
      414: (l) => {
        l.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      },
    },
    t = {};
  function n(l) {
    var o = t[l];
    if (o !== void 0) return o.exports;
    var i = (t[l] = { exports: {} });
    return e[l](i, i.exports, n), i.exports;
  }
  (n.n = (l) => {
    var o = l && l.__esModule ? () => l.default : () => l;
    return n.d(o, { a: o }), o;
  }),
    (n.d = (l, o) => {
      for (var i in o)
        n.o(o, i) &&
          !n.o(l, i) &&
          Object.defineProperty(l, i, { enumerable: !0, get: o[i] });
    }),
    (n.g = (function () {
      if (typeof globalThis == "object") return globalThis;
      try {
        return this || new Function("return this")();
      } catch {
        if (typeof window == "object") return window;
      }
    })()),
    (n.o = (l, o) => Object.prototype.hasOwnProperty.call(l, o)),
    (n.r = (l) => {
      typeof Symbol < "u" &&
        Symbol.toStringTag &&
        Object.defineProperty(l, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(l, "__esModule", { value: !0 });
    });
  var r = {};
  (() => {
    n.r(r),
      n.d(r, {
        LazyLoadComponent: () => ju,
        LazyLoadImage: () => If,
        trackWindowScroll: () => Y,
      });
    const l = V;
    var o = n.n(l),
      i = n(697);
    const u = pf;
    var s = n.n(u);
    function c() {
      return (
        typeof window < "u" &&
        "IntersectionObserver" in window &&
        "isIntersecting" in window.IntersectionObserverEntry.prototype
      );
    }
    function p(P) {
      return (
        (p =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (y) {
                return typeof y;
              }
            : function (y) {
                return y &&
                  typeof Symbol == "function" &&
                  y.constructor === Symbol &&
                  y !== Symbol.prototype
                  ? "symbol"
                  : typeof y;
              }),
        p(P)
      );
    }
    function h(P, y) {
      var T = Object.keys(P);
      if (Object.getOwnPropertySymbols) {
        var j = Object.getOwnPropertySymbols(P);
        y &&
          (j = j.filter(function (W) {
            return Object.getOwnPropertyDescriptor(P, W).enumerable;
          })),
          T.push.apply(T, j);
      }
      return T;
    }
    function m(P, y, T) {
      return (
        (y = x(y)) in P
          ? Object.defineProperty(P, y, {
              value: T,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (P[y] = T),
        P
      );
    }
    function k(P, y) {
      for (var T = 0; T < y.length; T++) {
        var j = y[T];
        (j.enumerable = j.enumerable || !1),
          (j.configurable = !0),
          "value" in j && (j.writable = !0),
          Object.defineProperty(P, x(j.key), j);
      }
    }
    function x(P) {
      var y = (function (T, j) {
        if (p(T) !== "object" || T === null) return T;
        var W = T[Symbol.toPrimitive];
        if (W !== void 0) {
          var H = W.call(T, "string");
          if (p(H) !== "object") return H;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(T);
      })(P);
      return p(y) === "symbol" ? y : String(y);
    }
    function g(P, y) {
      return (
        (g = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (T, j) {
              return (T.__proto__ = j), T;
            }),
        g(P, y)
      );
    }
    function N(P) {
      return (
        (N = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (y) {
              return y.__proto__ || Object.getPrototypeOf(y);
            }),
        N(P)
      );
    }
    var f = function (P) {
        P.forEach(function (y) {
          y.isIntersecting && y.target.onVisible();
        });
      },
      a = {},
      d = (function (P) {
        (function (v, w) {
          if (typeof w != "function" && w !== null)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (v.prototype = Object.create(w && w.prototype, {
            constructor: { value: v, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(v, "prototype", { writable: !1 }),
            w && g(v, w);
        })(J, P);
        var y,
          T,
          j,
          W,
          H =
            ((j = J),
            (W = (function () {
              if (
                typeof Reflect > "u" ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if (typeof Proxy == "function") return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch {
                return !1;
              }
            })()),
            function () {
              var v,
                w = N(j);
              if (W) {
                var F = N(this).constructor;
                v = Reflect.construct(w, arguments, F);
              } else v = w.apply(this, arguments);
              return (function (D, M) {
                if (M && (p(M) === "object" || typeof M == "function"))
                  return M;
                if (M !== void 0)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                return (function (Q) {
                  if (Q === void 0)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return Q;
                })(D);
              })(this, v);
            });
        function J(v) {
          var w;
          if (
            ((function (D, M) {
              if (!(D instanceof M))
                throw new TypeError("Cannot call a class as a function");
            })(this, J),
            ((w = H.call(this, v)).supportsObserver =
              !v.scrollPosition && v.useIntersectionObserver && c()),
            w.supportsObserver)
          ) {
            var F = v.threshold;
            w.observer = (function (D) {
              return (
                (a[D] =
                  a[D] ||
                  new IntersectionObserver(f, { rootMargin: D + "px" })),
                a[D]
              );
            })(F);
          }
          return w;
        }
        return (
          (y = J),
          (T = [
            {
              key: "componentDidMount",
              value: function () {
                this.placeholder &&
                  this.observer &&
                  ((this.placeholder.onVisible = this.props.onVisible),
                  this.observer.observe(this.placeholder)),
                  this.supportsObserver || this.updateVisibility();
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.observer &&
                  this.placeholder &&
                  this.observer.unobserve(this.placeholder);
              },
            },
            {
              key: "componentDidUpdate",
              value: function () {
                this.supportsObserver || this.updateVisibility();
              },
            },
            {
              key: "getPlaceholderBoundingBox",
              value: function () {
                var v =
                    arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : this.props.scrollPosition,
                  w = this.placeholder.getBoundingClientRect(),
                  F = s().findDOMNode(this.placeholder).style,
                  D = parseInt(F.getPropertyValue("margin-left"), 10) || 0,
                  M = parseInt(F.getPropertyValue("margin-top"), 10) || 0;
                return {
                  bottom: v.y + w.bottom + M,
                  left: v.x + w.left + D,
                  right: v.x + w.right + D,
                  top: v.y + w.top + M,
                };
              },
            },
            {
              key: "isPlaceholderInViewport",
              value: function () {
                if (typeof window > "u" || !this.placeholder) return !1;
                var v = this.props,
                  w = v.scrollPosition,
                  F = v.threshold,
                  D = this.getPlaceholderBoundingBox(w),
                  M = w.y + window.innerHeight,
                  Q = w.x,
                  ue = w.x + window.innerWidth,
                  se = w.y;
                return (
                  se - F <= D.bottom &&
                  M + F >= D.top &&
                  Q - F <= D.right &&
                  ue + F >= D.left
                );
              },
            },
            {
              key: "updateVisibility",
              value: function () {
                this.isPlaceholderInViewport() && this.props.onVisible();
              },
            },
            {
              key: "render",
              value: function () {
                var v = this,
                  w = this.props,
                  F = w.className,
                  D = w.height,
                  M = w.placeholder,
                  Q = w.style,
                  ue = w.width;
                if (M && typeof M.type != "function")
                  return o().cloneElement(M, {
                    ref: function (ne) {
                      return (v.placeholder = ne);
                    },
                  });
                var se = (function (ne) {
                  for (var Pe = 1; Pe < arguments.length; Pe++) {
                    var ye = arguments[Pe] != null ? arguments[Pe] : {};
                    Pe % 2
                      ? h(Object(ye), !0).forEach(function (Ne) {
                          m(ne, Ne, ye[Ne]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          ne,
                          Object.getOwnPropertyDescriptors(ye)
                        )
                      : h(Object(ye)).forEach(function (Ne) {
                          Object.defineProperty(
                            ne,
                            Ne,
                            Object.getOwnPropertyDescriptor(ye, Ne)
                          );
                        });
                  }
                  return ne;
                })({ display: "inline-block" }, Q);
                return (
                  ue !== void 0 && (se.width = ue),
                  D !== void 0 && (se.height = D),
                  o().createElement(
                    "span",
                    {
                      className: F,
                      ref: function (ne) {
                        return (v.placeholder = ne);
                      },
                      style: se,
                    },
                    M
                  )
                );
              },
            },
          ]),
          T && k(y.prototype, T),
          Object.defineProperty(y, "prototype", { writable: !1 }),
          J
        );
      })(o().Component);
    (d.propTypes = {
      onVisible: i.PropTypes.func.isRequired,
      className: i.PropTypes.string,
      height: i.PropTypes.oneOfType([i.PropTypes.number, i.PropTypes.string]),
      placeholder: i.PropTypes.element,
      threshold: i.PropTypes.number,
      useIntersectionObserver: i.PropTypes.bool,
      scrollPosition: i.PropTypes.shape({
        x: i.PropTypes.number.isRequired,
        y: i.PropTypes.number.isRequired,
      }),
      width: i.PropTypes.oneOfType([i.PropTypes.number, i.PropTypes.string]),
    }),
      (d.defaultProps = {
        className: "",
        placeholder: null,
        threshold: 100,
        useIntersectionObserver: !0,
      });
    const S = d;
    var E = n(296),
      L = n.n(E),
      I = n(96),
      _ = n.n(I),
      A = function (P) {
        var y = getComputedStyle(P, null);
        return (
          y.getPropertyValue("overflow") +
          y.getPropertyValue("overflow-y") +
          y.getPropertyValue("overflow-x")
        );
      };
    const $ = function (P) {
      if (!(P instanceof HTMLElement)) return window;
      for (var y = P; y && y instanceof HTMLElement; ) {
        if (/(scroll|auto)/.test(A(y))) return y;
        y = y.parentNode;
      }
      return window;
    };
    function Z(P) {
      return (
        (Z =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (y) {
                return typeof y;
              }
            : function (y) {
                return y &&
                  typeof Symbol == "function" &&
                  y.constructor === Symbol &&
                  y !== Symbol.prototype
                  ? "symbol"
                  : typeof y;
              }),
        Z(P)
      );
    }
    var b = ["delayMethod", "delayTime"];
    function he() {
      return (
        (he = Object.assign
          ? Object.assign.bind()
          : function (P) {
              for (var y = 1; y < arguments.length; y++) {
                var T = arguments[y];
                for (var j in T)
                  Object.prototype.hasOwnProperty.call(T, j) && (P[j] = T[j]);
              }
              return P;
            }),
        he.apply(this, arguments)
      );
    }
    function ge(P, y) {
      for (var T = 0; T < y.length; T++) {
        var j = y[T];
        (j.enumerable = j.enumerable || !1),
          (j.configurable = !0),
          "value" in j && (j.writable = !0),
          Object.defineProperty(
            P,
            ((W = (function (H, J) {
              if (Z(H) !== "object" || H === null) return H;
              var v = H[Symbol.toPrimitive];
              if (v !== void 0) {
                var w = v.call(H, "string");
                if (Z(w) !== "object") return w;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(H);
            })(j.key)),
            Z(W) === "symbol" ? W : String(W)),
            j
          );
      }
      var W;
    }
    function Me(P, y) {
      return (
        (Me = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (T, j) {
              return (T.__proto__ = j), T;
            }),
        Me(P, y)
      );
    }
    function ke(P, y) {
      if (y && (Z(y) === "object" || typeof y == "function")) return y;
      if (y !== void 0)
        throw new TypeError(
          "Derived constructors may only return object or undefined"
        );
      return Te(P);
    }
    function Te(P) {
      if (P === void 0)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return P;
    }
    function R(P) {
      return (
        (R = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (y) {
              return y.__proto__ || Object.getPrototypeOf(y);
            }),
        R(P)
      );
    }
    var B = function () {
        return typeof window > "u" ? 0 : window.scrollX || window.pageXOffset;
      },
      U = function () {
        return typeof window > "u" ? 0 : window.scrollY || window.pageYOffset;
      };
    const Y = function (P) {
      var y = (function (T) {
        (function (F, D) {
          if (typeof D != "function" && D !== null)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (F.prototype = Object.create(D && D.prototype, {
            constructor: { value: F, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(F, "prototype", { writable: !1 }),
            D && Me(F, D);
        })(w, T);
        var j,
          W,
          H,
          J,
          v =
            ((H = w),
            (J = (function () {
              if (
                typeof Reflect > "u" ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if (typeof Proxy == "function") return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch {
                return !1;
              }
            })()),
            function () {
              var F,
                D = R(H);
              if (J) {
                var M = R(this).constructor;
                F = Reflect.construct(D, arguments, M);
              } else F = D.apply(this, arguments);
              return ke(this, F);
            });
        function w(F) {
          var D;
          if (
            ((function (Q, ue) {
              if (!(Q instanceof ue))
                throw new TypeError("Cannot call a class as a function");
            })(this, w),
            ((D = v.call(this, F)).useIntersectionObserver =
              F.useIntersectionObserver && c()),
            D.useIntersectionObserver)
          )
            return ke(D);
          var M = D.onChangeScroll.bind(Te(D));
          return (
            F.delayMethod === "debounce"
              ? (D.delayedScroll = L()(M, F.delayTime))
              : F.delayMethod === "throttle" &&
                (D.delayedScroll = _()(M, F.delayTime)),
            (D.state = { scrollPosition: { x: B(), y: U() } }),
            (D.baseComponentRef = o().createRef()),
            D
          );
        }
        return (
          (j = w),
          (W = [
            {
              key: "componentDidMount",
              value: function () {
                this.addListeners();
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.removeListeners();
              },
            },
            {
              key: "componentDidUpdate",
              value: function () {
                typeof window > "u" ||
                  this.useIntersectionObserver ||
                  ($(s().findDOMNode(this.baseComponentRef.current)) !==
                    this.scrollElement &&
                    (this.removeListeners(), this.addListeners()));
              },
            },
            {
              key: "addListeners",
              value: function () {
                typeof window > "u" ||
                  this.useIntersectionObserver ||
                  ((this.scrollElement = $(
                    s().findDOMNode(this.baseComponentRef.current)
                  )),
                  this.scrollElement.addEventListener(
                    "scroll",
                    this.delayedScroll,
                    { passive: !0 }
                  ),
                  window.addEventListener("resize", this.delayedScroll, {
                    passive: !0,
                  }),
                  this.scrollElement !== window &&
                    window.addEventListener("scroll", this.delayedScroll, {
                      passive: !0,
                    }));
              },
            },
            {
              key: "removeListeners",
              value: function () {
                typeof window > "u" ||
                  this.useIntersectionObserver ||
                  (this.scrollElement.removeEventListener(
                    "scroll",
                    this.delayedScroll
                  ),
                  window.removeEventListener("resize", this.delayedScroll),
                  this.scrollElement !== window &&
                    window.removeEventListener("scroll", this.delayedScroll));
              },
            },
            {
              key: "onChangeScroll",
              value: function () {
                this.useIntersectionObserver ||
                  this.setState({ scrollPosition: { x: B(), y: U() } });
              },
            },
            {
              key: "render",
              value: function () {
                var F = this.props,
                  D =
                    (F.delayMethod,
                    F.delayTime,
                    (function (Q, ue) {
                      if (Q == null) return {};
                      var se,
                        ne,
                        Pe = (function (Ne, yn) {
                          if (Ne == null) return {};
                          var bt,
                            Vr,
                            Iu = {},
                            zu = Object.keys(Ne);
                          for (Vr = 0; Vr < zu.length; Vr++)
                            (bt = zu[Vr]),
                              yn.indexOf(bt) >= 0 || (Iu[bt] = Ne[bt]);
                          return Iu;
                        })(Q, ue);
                      if (Object.getOwnPropertySymbols) {
                        var ye = Object.getOwnPropertySymbols(Q);
                        for (ne = 0; ne < ye.length; ne++)
                          (se = ye[ne]),
                            ue.indexOf(se) >= 0 ||
                              (Object.prototype.propertyIsEnumerable.call(
                                Q,
                                se
                              ) &&
                                (Pe[se] = Q[se]));
                      }
                      return Pe;
                    })(F, b)),
                  M = this.useIntersectionObserver
                    ? null
                    : this.state.scrollPosition;
                return o().createElement(
                  P,
                  he(
                    { forwardRef: this.baseComponentRef, scrollPosition: M },
                    D
                  )
                );
              },
            },
          ]) && ge(j.prototype, W),
          Object.defineProperty(j, "prototype", { writable: !1 }),
          w
        );
      })(o().Component);
      return (
        (y.propTypes = {
          delayMethod: i.PropTypes.oneOf(["debounce", "throttle"]),
          delayTime: i.PropTypes.number,
          useIntersectionObserver: i.PropTypes.bool,
        }),
        (y.defaultProps = {
          delayMethod: "throttle",
          delayTime: 300,
          useIntersectionObserver: !0,
        }),
        y
      );
    };
    function G(P) {
      return (
        (G =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (y) {
                return typeof y;
              }
            : function (y) {
                return y &&
                  typeof Symbol == "function" &&
                  y.constructor === Symbol &&
                  y !== Symbol.prototype
                  ? "symbol"
                  : typeof y;
              }),
        G(P)
      );
    }
    function ie(P, y) {
      for (var T = 0; T < y.length; T++) {
        var j = y[T];
        (j.enumerable = j.enumerable || !1),
          (j.configurable = !0),
          "value" in j && (j.writable = !0),
          Object.defineProperty(
            P,
            ((W = (function (H, J) {
              if (G(H) !== "object" || H === null) return H;
              var v = H[Symbol.toPrimitive];
              if (v !== void 0) {
                var w = v.call(H, "string");
                if (G(w) !== "object") return w;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(H);
            })(j.key)),
            G(W) === "symbol" ? W : String(W)),
            j
          );
      }
      var W;
    }
    function ee(P, y) {
      return (
        (ee = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (T, j) {
              return (T.__proto__ = j), T;
            }),
        ee(P, y)
      );
    }
    function me(P) {
      return (
        (me = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (y) {
              return y.__proto__ || Object.getPrototypeOf(y);
            }),
        me(P)
      );
    }
    var Ye = (function (P) {
      (function (v, w) {
        if (typeof w != "function" && w !== null)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (v.prototype = Object.create(w && w.prototype, {
          constructor: { value: v, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(v, "prototype", { writable: !1 }),
          w && ee(v, w);
      })(J, P);
      var y,
        T,
        j,
        W,
        H =
          ((j = J),
          (W = (function () {
            if (
              typeof Reflect > "u" ||
              !Reflect.construct ||
              Reflect.construct.sham
            )
              return !1;
            if (typeof Proxy == "function") return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch {
              return !1;
            }
          })()),
          function () {
            var v,
              w = me(j);
            if (W) {
              var F = me(this).constructor;
              v = Reflect.construct(w, arguments, F);
            } else v = w.apply(this, arguments);
            return (function (D, M) {
              if (M && (G(M) === "object" || typeof M == "function")) return M;
              if (M !== void 0)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return (function (Q) {
                if (Q === void 0)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return Q;
              })(D);
            })(this, v);
          });
      function J(v) {
        return (
          (function (w, F) {
            if (!(w instanceof F))
              throw new TypeError("Cannot call a class as a function");
          })(this, J),
          H.call(this, v)
        );
      }
      return (
        (y = J),
        (T = [
          {
            key: "render",
            value: function () {
              return o().createElement(S, this.props);
            },
          },
        ]) && ie(y.prototype, T),
        Object.defineProperty(y, "prototype", { writable: !1 }),
        J
      );
    })(o().Component);
    const St = Y(Ye);
    function it(P) {
      return (
        (it =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (y) {
                return typeof y;
              }
            : function (y) {
                return y &&
                  typeof Symbol == "function" &&
                  y.constructor === Symbol &&
                  y !== Symbol.prototype
                  ? "symbol"
                  : typeof y;
              }),
        it(P)
      );
    }
    function Ur(P, y) {
      for (var T = 0; T < y.length; T++) {
        var j = y[T];
        (j.enumerable = j.enumerable || !1),
          (j.configurable = !0),
          "value" in j && (j.writable = !0),
          Object.defineProperty(
            P,
            ((W = (function (H, J) {
              if (it(H) !== "object" || H === null) return H;
              var v = H[Symbol.toPrimitive];
              if (v !== void 0) {
                var w = v.call(H, "string");
                if (it(w) !== "object") return w;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(H);
            })(j.key)),
            it(W) === "symbol" ? W : String(W)),
            j
          );
      }
      var W;
    }
    function qt(P, y) {
      return (
        (qt = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (T, j) {
              return (T.__proto__ = j), T;
            }),
        qt(P, y)
      );
    }
    function je(P) {
      if (P === void 0)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return P;
    }
    function $e(P) {
      return (
        ($e = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (y) {
              return y.__proto__ || Object.getPrototypeOf(y);
            }),
        $e(P)
      );
    }
    var ut = (function (P) {
      (function (v, w) {
        if (typeof w != "function" && w !== null)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (v.prototype = Object.create(w && w.prototype, {
          constructor: { value: v, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(v, "prototype", { writable: !1 }),
          w && qt(v, w);
      })(J, P);
      var y,
        T,
        j,
        W,
        H =
          ((j = J),
          (W = (function () {
            if (
              typeof Reflect > "u" ||
              !Reflect.construct ||
              Reflect.construct.sham
            )
              return !1;
            if (typeof Proxy == "function") return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch {
              return !1;
            }
          })()),
          function () {
            var v,
              w = $e(j);
            if (W) {
              var F = $e(this).constructor;
              v = Reflect.construct(w, arguments, F);
            } else v = w.apply(this, arguments);
            return (function (D, M) {
              if (M && (it(M) === "object" || typeof M == "function")) return M;
              if (M !== void 0)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return je(D);
            })(this, v);
          });
      function J(v) {
        var w;
        (function (ue, se) {
          if (!(ue instanceof se))
            throw new TypeError("Cannot call a class as a function");
        })(this, J),
          (w = H.call(this, v));
        var F = v.afterLoad,
          D = v.beforeLoad,
          M = v.scrollPosition,
          Q = v.visibleByDefault;
        return (
          (w.state = { visible: Q }),
          Q && (D(), F()),
          (w.onVisible = w.onVisible.bind(je(w))),
          (w.isScrollTracked = !!(
            M &&
            Number.isFinite(M.x) &&
            M.x >= 0 &&
            Number.isFinite(M.y) &&
            M.y >= 0
          )),
          w
        );
      }
      return (
        (y = J),
        (T = [
          {
            key: "componentDidUpdate",
            value: function (v, w) {
              w.visible !== this.state.visible && this.props.afterLoad();
            },
          },
          {
            key: "onVisible",
            value: function () {
              this.props.beforeLoad(), this.setState({ visible: !0 });
            },
          },
          {
            key: "render",
            value: function () {
              if (this.state.visible) return this.props.children;
              var v = this.props,
                w = v.className,
                F = v.delayMethod,
                D = v.delayTime,
                M = v.height,
                Q = v.placeholder,
                ue = v.scrollPosition,
                se = v.style,
                ne = v.threshold,
                Pe = v.useIntersectionObserver,
                ye = v.width;
              return this.isScrollTracked || (Pe && c())
                ? o().createElement(S, {
                    className: w,
                    height: M,
                    onVisible: this.onVisible,
                    placeholder: Q,
                    scrollPosition: ue,
                    style: se,
                    threshold: ne,
                    useIntersectionObserver: Pe,
                    width: ye,
                  })
                : o().createElement(St, {
                    className: w,
                    delayMethod: F,
                    delayTime: D,
                    height: M,
                    onVisible: this.onVisible,
                    placeholder: Q,
                    style: se,
                    threshold: ne,
                    width: ye,
                  });
            },
          },
        ]) && Ur(y.prototype, T),
        Object.defineProperty(y, "prototype", { writable: !1 }),
        J
      );
    })(o().Component);
    (ut.propTypes = {
      afterLoad: i.PropTypes.func,
      beforeLoad: i.PropTypes.func,
      useIntersectionObserver: i.PropTypes.bool,
      visibleByDefault: i.PropTypes.bool,
    }),
      (ut.defaultProps = {
        afterLoad: function () {
          return {};
        },
        beforeLoad: function () {
          return {};
        },
        useIntersectionObserver: !0,
        visibleByDefault: !1,
      });
    const ju = ut;
    function mn(P) {
      return (
        (mn =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (y) {
                return typeof y;
              }
            : function (y) {
                return y &&
                  typeof Symbol == "function" &&
                  y.constructor === Symbol &&
                  y !== Symbol.prototype
                  ? "symbol"
                  : typeof y;
              }),
        mn(P)
      );
    }
    var Nf = [
      "afterLoad",
      "beforeLoad",
      "delayMethod",
      "delayTime",
      "effect",
      "placeholder",
      "placeholderSrc",
      "scrollPosition",
      "threshold",
      "useIntersectionObserver",
      "visibleByDefault",
      "wrapperClassName",
      "wrapperProps",
    ];
    function Nu(P, y) {
      var T = Object.keys(P);
      if (Object.getOwnPropertySymbols) {
        var j = Object.getOwnPropertySymbols(P);
        y &&
          (j = j.filter(function (W) {
            return Object.getOwnPropertyDescriptor(P, W).enumerable;
          })),
          T.push.apply(T, j);
      }
      return T;
    }
    function Lu(P) {
      for (var y = 1; y < arguments.length; y++) {
        var T = arguments[y] != null ? arguments[y] : {};
        y % 2
          ? Nu(Object(T), !0).forEach(function (j) {
              Lf(P, j, T[j]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(P, Object.getOwnPropertyDescriptors(T))
          : Nu(Object(T)).forEach(function (j) {
              Object.defineProperty(
                P,
                j,
                Object.getOwnPropertyDescriptor(T, j)
              );
            });
      }
      return P;
    }
    function Lf(P, y, T) {
      return (
        (y = Ru(y)) in P
          ? Object.defineProperty(P, y, {
              value: T,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (P[y] = T),
        P
      );
    }
    function Br() {
      return (
        (Br = Object.assign
          ? Object.assign.bind()
          : function (P) {
              for (var y = 1; y < arguments.length; y++) {
                var T = arguments[y];
                for (var j in T)
                  Object.prototype.hasOwnProperty.call(T, j) && (P[j] = T[j]);
              }
              return P;
            }),
        Br.apply(this, arguments)
      );
    }
    function Rf(P, y) {
      for (var T = 0; T < y.length; T++) {
        var j = y[T];
        (j.enumerable = j.enumerable || !1),
          (j.configurable = !0),
          "value" in j && (j.writable = !0),
          Object.defineProperty(P, Ru(j.key), j);
      }
    }
    function Ru(P) {
      var y = (function (T, j) {
        if (mn(T) !== "object" || T === null) return T;
        var W = T[Symbol.toPrimitive];
        if (W !== void 0) {
          var H = W.call(T, "string");
          if (mn(H) !== "object") return H;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(T);
      })(P);
      return mn(y) === "symbol" ? y : String(y);
    }
    function uo(P, y) {
      return (
        (uo = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (T, j) {
              return (T.__proto__ = j), T;
            }),
        uo(P, y)
      );
    }
    function $r(P) {
      return (
        ($r = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (y) {
              return y.__proto__ || Object.getPrototypeOf(y);
            }),
        $r(P)
      );
    }
    var so = (function (P) {
      (function (v, w) {
        if (typeof w != "function" && w !== null)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (v.prototype = Object.create(w && w.prototype, {
          constructor: { value: v, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(v, "prototype", { writable: !1 }),
          w && uo(v, w);
      })(J, P);
      var y,
        T,
        j,
        W,
        H =
          ((j = J),
          (W = (function () {
            if (
              typeof Reflect > "u" ||
              !Reflect.construct ||
              Reflect.construct.sham
            )
              return !1;
            if (typeof Proxy == "function") return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch {
              return !1;
            }
          })()),
          function () {
            var v,
              w = $r(j);
            if (W) {
              var F = $r(this).constructor;
              v = Reflect.construct(w, arguments, F);
            } else v = w.apply(this, arguments);
            return (function (D, M) {
              if (M && (mn(M) === "object" || typeof M == "function")) return M;
              if (M !== void 0)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return (function (Q) {
                if (Q === void 0)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return Q;
              })(D);
            })(this, v);
          });
      function J(v) {
        var w;
        return (
          (function (F, D) {
            if (!(F instanceof D))
              throw new TypeError("Cannot call a class as a function");
          })(this, J),
          ((w = H.call(this, v)).state = { loaded: !1 }),
          w
        );
      }
      return (
        (y = J),
        (T = [
          {
            key: "onImageLoad",
            value: function () {
              var v = this;
              return this.state.loaded
                ? null
                : function (w) {
                    v.props.onLoad(w),
                      v.props.afterLoad(),
                      v.setState({ loaded: !0 });
                  };
            },
          },
          {
            key: "getImg",
            value: function () {
              var v = this.props,
                w =
                  (v.afterLoad,
                  v.beforeLoad,
                  v.delayMethod,
                  v.delayTime,
                  v.effect,
                  v.placeholder,
                  v.placeholderSrc,
                  v.scrollPosition,
                  v.threshold,
                  v.useIntersectionObserver,
                  v.visibleByDefault,
                  v.wrapperClassName,
                  v.wrapperProps,
                  (function (F, D) {
                    if (F == null) return {};
                    var M,
                      Q,
                      ue = (function (ne, Pe) {
                        if (ne == null) return {};
                        var ye,
                          Ne,
                          yn = {},
                          bt = Object.keys(ne);
                        for (Ne = 0; Ne < bt.length; Ne++)
                          (ye = bt[Ne]),
                            Pe.indexOf(ye) >= 0 || (yn[ye] = ne[ye]);
                        return yn;
                      })(F, D);
                    if (Object.getOwnPropertySymbols) {
                      var se = Object.getOwnPropertySymbols(F);
                      for (Q = 0; Q < se.length; Q++)
                        (M = se[Q]),
                          D.indexOf(M) >= 0 ||
                            (Object.prototype.propertyIsEnumerable.call(F, M) &&
                              (ue[M] = F[M]));
                    }
                    return ue;
                  })(v, Nf));
              return o().createElement(
                "img",
                Br({}, w, { onLoad: this.onImageLoad() })
              );
            },
          },
          {
            key: "getLazyLoadImage",
            value: function () {
              var v = this.props,
                w = v.beforeLoad,
                F = v.className,
                D = v.delayMethod,
                M = v.delayTime,
                Q = v.height,
                ue = v.placeholder,
                se = v.scrollPosition,
                ne = v.style,
                Pe = v.threshold,
                ye = v.useIntersectionObserver,
                Ne = v.visibleByDefault,
                yn = v.width;
              return o().createElement(
                ju,
                {
                  beforeLoad: w,
                  className: F,
                  delayMethod: D,
                  delayTime: M,
                  height: Q,
                  placeholder: ue,
                  scrollPosition: se,
                  style: ne,
                  threshold: Pe,
                  useIntersectionObserver: ye,
                  visibleByDefault: Ne,
                  width: yn,
                },
                this.getImg()
              );
            },
          },
          {
            key: "getWrappedLazyLoadImage",
            value: function (v) {
              var w = this.props,
                F = w.effect,
                D = w.height,
                M = w.placeholderSrc,
                Q = w.width,
                ue = w.wrapperClassName,
                se = w.wrapperProps,
                ne = this.state.loaded,
                Pe = ne ? " lazy-load-image-loaded" : "",
                ye =
                  ne || !M
                    ? {}
                    : {
                        backgroundImage: "url(".concat(M, ")"),
                        backgroundSize: "100% 100%",
                      };
              return o().createElement(
                "span",
                Br(
                  {
                    className: ue + " lazy-load-image-background " + F + Pe,
                    style: Lu(
                      Lu({}, ye),
                      {},
                      {
                        color: "transparent",
                        display: "inline-block",
                        height: D,
                        width: Q,
                      }
                    ),
                  },
                  se
                ),
                v
              );
            },
          },
          {
            key: "render",
            value: function () {
              var v = this.props,
                w = v.effect,
                F = v.placeholderSrc,
                D = v.visibleByDefault,
                M = v.wrapperClassName,
                Q = v.wrapperProps,
                ue = this.getLazyLoadImage();
              return ((w || F) && !D) || M || Q
                ? this.getWrappedLazyLoadImage(ue)
                : ue;
            },
          },
        ]) && Rf(y.prototype, T),
        Object.defineProperty(y, "prototype", { writable: !1 }),
        J
      );
    })(o().Component);
    (so.propTypes = {
      onLoad: i.PropTypes.func,
      afterLoad: i.PropTypes.func,
      beforeLoad: i.PropTypes.func,
      delayMethod: i.PropTypes.string,
      delayTime: i.PropTypes.number,
      effect: i.PropTypes.string,
      placeholderSrc: i.PropTypes.string,
      threshold: i.PropTypes.number,
      useIntersectionObserver: i.PropTypes.bool,
      visibleByDefault: i.PropTypes.bool,
      wrapperClassName: i.PropTypes.string,
      wrapperProps: i.PropTypes.object,
    }),
      (so.defaultProps = {
        onLoad: function () {},
        afterLoad: function () {
          return {};
        },
        beforeLoad: function () {
          return {};
        },
        delayMethod: "throttle",
        delayTime: 300,
        effect: "",
        placeholderSrc: null,
        threshold: 100,
        useIntersectionObserver: !0,
        visibleByDefault: !1,
        wrapperClassName: "",
      });
    const If = so;
  })(),
    (yf.exports = r);
})();
var Do = yf.exports;
function vf() {
  return C.jsx("div", {
    className: "header",
    children: C.jsxs("div", {
      className: "container",
      children: [
        C.jsx("a", {
          href: "/",
          children: C.jsx("img", {
            className: "header-img",
            src: "/assets/head-img-transparent.png",
          }),
        }),
        C.jsx(mf, {}),
      ],
    }),
  });
}
const _u = ({ children: e }) =>
  C.jsxs(C.Fragment, {
    children: [
      C.jsx(vf, {}),
      C.jsx("div", { className: "container", children: e }),
      C.jsx(hf, {}),
    ],
  });
function fh() {
  return C.jsx(_u, {
    children: C.jsx("div", {
      className: "collections-page-content",
      children: C.jsxs("div", {
        className: "collections-links",
        children: [
          C.jsx("a", {
            href: "/gallery/1",
            className: "coll-container",
            children: C.jsxs("figure", {
              children: [
                C.jsx(Do.LazyLoadImage, {
                  className: "collection-img",
                  src: sh,
                  effect: "blur",
                }),
                C.jsx("figcaption", {
                  className: "collection-caption",
                  children: "iMaschination",
                }),
              ],
            }),
          }),
          C.jsx("a", {
            href: "/gallery/2",
            className: "coll-container",
            children: C.jsxs("figure", {
              children: [
                C.jsx(Do.LazyLoadImage, {
                  className: "collection-img",
                  src: ah,
                  effect: "blur",
                }),
                C.jsx("figcaption", {
                  className: "collection-caption",
                  children: "The World Awake",
                }),
              ],
            }),
          }),
          C.jsx("a", {
            href: "/gallery/3",
            className: "coll-container",
            children: C.jsxs("figure", {
              children: [
                C.jsx(Do.LazyLoadImage, {
                  className: "collection-img",
                  src: ch,
                  effect: "blur",
                }),
                C.jsx("figcaption", {
                  className: "collection-caption",
                  children: "One Shots",
                }),
              ],
            }),
          }),
        ],
      }),
    }),
  });
}
var gf = { exports: {} },
  dh = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  ph = dh,
  hh = ph;
function wf() {}
function Sf() {}
Sf.resetWarningCache = wf;
var mh = function () {
  function e(r, l, o, i, u, s) {
    if (s !== hh) {
      var c = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((c.name = "Invariant Violation"), c);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Sf,
    resetWarningCache: wf,
  };
  return (n.PropTypes = n), n;
};
gf.exports = mh();
var yh = gf.exports;
const vh = qs(yh),
  gh = [
    {
      id: 1,
      name: "iMaschinations",
      slug: "imaschinations",
      description:
        "Your starting point, your finger’s white t-shirts. 2 metals, 3 shapes, 3 gauges, 5 finishes. Supermodern Stacking Bands. Rings that play well with others; can be styled solo, among itself, or to compliment an existing collection. No-context design that can be worn to the A.M. meeting then to the P.M. pub with conscious pricing in line with material, not concept.",
      assets: [
        {
          id: "1-Tri14k",
          alt: "iMaschinationImage",
          title: "Minimal Tri band in 14k yellow gold",
        },
        {
          id: "2-DomeOHS",
          alt: "iMaschinationImage",
          title:
            "Silver stack featuring Minimal, Nominal, and Maximal Dome bands in Polish",
        },
        {
          id: "3-MinDomeRepeating",
          alt: "iMaschinationImage",
          title: "Minimal Dome bands in sterling silver",
        },
        {
          id: "4-MinDome14kOH",
          alt: "iMaschinationImage",
          title: "Minimal Dome band in 14k yellow gold on hand",
        },
        {
          id: "5-FlatSPS",
          alt: "iMaschinationImage",
          title: "Flat Starter Pack in Ghost finish",
        },
        {
          id: "6-NomFlatAFOH",
          alt: "iMaschinationImage",
          title: "Nominal Flat bands in Polish, Ghost, and Grain",
        },
        {
          id: "7-FlatMin14k",
          alt: "iMaschinationImage",
          title: "Minimal Flat band in 14k yellow gold",
        },
        {
          id: "8-tristack",
          alt: "iMaschinationImage",
          title:
            "Silver stack featuring Minimal, Nominal, and Maximal tri bands in Grain",
        },
        {
          id: "9-MaxTriAFOM",
          alt: "iMaschinationImage",
          title: "Maximal Tri bands in Polish, Ghost, and Grain",
        },
      ],
    },
    {
      id: 2,
      name: "The World Awake",
      slug: "theworldawake",
      description:
        "All four mountings reflect modern architecture, evidenced in calibrated contours, defined edges,and understated ornament. To breathe life into the muted surfaces and pointed construction, I selected contrasting, verdant stones and pearls. These precious materials offer associations of prosperity and protection, with hues emphasizing the new.",
      assets: [
        {
          id: "1-SerpentineJadeEclipseRings",
          alt: "theWorldAwakeImage",
          title: "Eclipse rings with Serpentine and Jade",
        },
        {
          id: "2-GreenPearlHematiteCrescentClasp",
          alt: "theWorldAwakeImage",
          title: "Crescent Clasps with Green Pearl and Hematite",
        },
        {
          id: "3-MorningStarEarrings",
          alt: "theWorldAwakeImage",
          title: "Morning Star Earrings with Peridot and Sapphire",
        },
        {
          id: "4-OvalTourmalineOnHand",
          alt: "theWorldAwakeImage",
          title:
            "Eclipse stack with an oval Tourmaline and 2 nominal Tri bands",
        },
        {
          id: "5-OrbitEarrings",
          alt: "theWorldAwakeImage",
          title: "Orbit Earrings with Hematite and galaxy diamonds",
        },
        {
          id: "6-TransitPendant",
          alt: "theWorldAwakeImage",
          title: "Transit Pendant with Variscite on Anima Chain",
        },
        { id: "7-AnimaChain", alt: "theWorldAwakeImage", title: "Anima Chain" },
        {
          id: "8-HematiteCrescentClasp",
          alt: "theWorldAwakeImage",
          title: "2 Hematite Crescent Clasps together to make a 32” necklace",
        },
        {
          id: "9-RoundTourmaline",
          alt: "iMaschinationImage",
          title: "Eclipse Ring with round Tourmaline",
        },
      ],
    },
    {
      id: 3,
      name: "One Shots",
      slug: "oneshots",
      description:
        "Statements, stackables, and flexed fabrication skills. These are pieces that enter my head then must come to life by my hands. Design derived from specific inspirations, experiments in the studio, and the desire to wear gems from my collection as soon as possible.",
      assets: [
        {
          id: "1-FireofLoveStack",
          alt: "oneShotImage",
          title: "Fire of Love Pendant stacked with personal necklaces",
        },
        {
          id: "2-ShotSmileStack",
          alt: "oneShotImage",
          title: "Shot Eyes, Chevron Smile Stacks",
        },
        {
          id: "3-OmegaPearl",
          alt: "oneShotImage",
          title: "Omega Pearl Bracelet",
        },
        {
          id: "4-HexOnEarLavender",
          alt: "oneShotImage",
          title: "Hex Spinel Studs in lavender",
        },
        {
          id: "5-LooseToothBracelets",
          alt: "oneShotImage",
          title: "Loose Tooth bracelets and necklaces",
        },
        {
          id: "6-HexSolitaresOH",
          alt: "oneShotImage",
          title: "Hex Spinel solitaire stack",
        },
        {
          id: "7-KatarAT",
          alt: "oneShotImage",
          title: "Katar ring from all angles",
        },
        {
          id: "8-DewEarringsTanzaniteOE",
          alt: "oneShotImage",
          title: "Dew earrings in Tanzanite",
        },
        {
          id: "9-LooseToothFlowers",
          alt: "oneShotImage",
          title: "Loose Tooth Bracelet",
        },
      ],
    },
    {
      id: 4,
      name: "Custom Orders",
      slug: "customs",
      description:
        "Bespoke jewels where you make the rules. Let’s work together to materialize the ideas in your head through drafts to prototypes to metal and gems in your hands. I fabricate in sterling (.925) and fine (.999) silver, gold alloys (10k-22k), with most gemstones accessible or ready to be pulled from my personal collection.",
      assets: [
        {
          id: "1-DylanWeddingBand",
          alt: "oneShotImage",
          title: "14k yellow sand cast wedding band",
        },
        {
          id: "2-CustomiMaschinationWheatChain",
          alt: "oneShotImage",
          title:
            "Sterling wheat chain with pearl birthstone and custom iMaschiation bands",
        },
        {
          id: "3-SapphireEarrings",
          alt: "oneShotImage",
          title: "14k white and sapphire stud earrings",
        },
        {
          id: "4-DiamondAmethystEarrings",
          alt: "oneShotImage",
          title: "14k yellow amethyst and galaxy diamond earrings",
        },
        {
          id: "5-MattWeddingBand",
          alt: "oneShotImage",
          title: "14k yellow wedding band with emerald cut ruby",
        },
        {
          id: "6-AcornPendant",
          alt: "oneShotImage",
          title: "Sterling acorn pendant cast from real acorn",
        },
        {
          id: "7-SapphireSpineRings",
          alt: "oneShotImage",
          title: "Sterling and sapphire rings sand cast for a family set",
        },
        {
          id: "8-CubanBracelet",
          alt: "oneShotImage",
          title: "Sterling fabricated 14mm cuban link bracelet",
        },
        {
          id: "9-ThickChevron",
          alt: "oneShotImage",
          title: "Sterling fabricated 4mm chevron band",
        },
      ],
    },
  ],
  wh = (e) => gh.find((t) => t.id === e);
/**
 * @remix-run/router v1.15.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Vl() {
  return (
    (Vl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Vl.apply(this, arguments)
  );
}
var Ut;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Ut || (Ut = {}));
const Hs = "popstate";
function Sh(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: o, search: i, hash: u } = r.location;
    return Ni(
      "",
      { pathname: o, search: i, hash: u },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default"
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : xf(l);
  }
  return xh(t, n, null, e);
}
function Ke(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function kf(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function kh() {
  return Math.random().toString(36).substr(2, 8);
}
function Qs(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Ni(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Vl(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? oo(t) : t,
      { state: n, key: (t && t.key) || r || kh() }
    )
  );
}
function xf(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function oo(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function xh(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    u = Ut.Pop,
    s = null,
    c = p();
  c == null && ((c = 0), i.replaceState(Vl({}, i.state, { idx: c }), ""));
  function p() {
    return (i.state || { idx: null }).idx;
  }
  function h() {
    u = Ut.Pop;
    let N = p(),
      f = N == null ? null : N - c;
    (c = N), s && s({ action: u, location: g.location, delta: f });
  }
  function m(N, f) {
    u = Ut.Push;
    let a = Ni(g.location, N, f);
    n && n(a, N), (c = p() + 1);
    let d = Qs(a, c),
      S = g.createHref(a);
    try {
      i.pushState(d, "", S);
    } catch (E) {
      if (E instanceof DOMException && E.name === "DataCloneError") throw E;
      l.location.assign(S);
    }
    o && s && s({ action: u, location: g.location, delta: 1 });
  }
  function k(N, f) {
    u = Ut.Replace;
    let a = Ni(g.location, N, f);
    n && n(a, N), (c = p());
    let d = Qs(a, c),
      S = g.createHref(a);
    i.replaceState(d, "", S),
      o && s && s({ action: u, location: g.location, delta: 0 });
  }
  function x(N) {
    let f = l.location.origin !== "null" ? l.location.origin : l.location.href,
      a = typeof N == "string" ? N : xf(N);
    return (
      (a = a.replace(/ $/, "%20")),
      Ke(
        f,
        "No window.location.(origin|href) available to create URL for href: " +
          a
      ),
      new URL(a, f)
    );
  }
  let g = {
    get action() {
      return u;
    },
    get location() {
      return e(l, i);
    },
    listen(N) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(Hs, h),
        (s = N),
        () => {
          l.removeEventListener(Hs, h), (s = null);
        }
      );
    },
    createHref(N) {
      return t(l, N);
    },
    createURL: x,
    encodeLocation(N) {
      let f = x(N);
      return { pathname: f.pathname, search: f.search, hash: f.hash };
    },
    push: m,
    replace: k,
    go(N) {
      return i.go(N);
    },
  };
  return g;
}
var Ks;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Ks || (Ks = {}));
function Eh(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? oo(t) : t,
    l = Cf(r.pathname || "/", n);
  if (l == null) return null;
  let o = Ef(e);
  Ph(o);
  let i = null;
  for (let u = 0; i == null && u < o.length; ++u) {
    let s = Dh(l);
    i = Ih(o[u], s);
  }
  return i;
}
function Ef(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (o, i, u) => {
    let s = {
      relativePath: u === void 0 ? o.path || "" : u,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    s.relativePath.startsWith("/") &&
      (Ke(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let c = Fn([r, s.relativePath]),
      p = n.concat(s);
    o.children &&
      o.children.length > 0 &&
      (Ke(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".')
      ),
      Ef(o.children, t, p, c)),
      !(o.path == null && !o.index) &&
        t.push({ path: c, score: Lh(c, o.index), routesMeta: p });
  };
  return (
    e.forEach((o, i) => {
      var u;
      if (o.path === "" || !((u = o.path) != null && u.includes("?"))) l(o, i);
      else for (let s of Pf(o.path)) l(o, i, s);
    }),
    t
  );
}
function Pf(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [o, ""] : [o];
  let i = Pf(r.join("/")),
    u = [];
  return (
    u.push(...i.map((s) => (s === "" ? o : [o, s].join("/")))),
    l && u.push(...i),
    u.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
  );
}
function Ph(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Rh(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Ch = /^:[\w-]+$/,
  Oh = 3,
  _h = 2,
  Th = 1,
  jh = 10,
  Nh = -2,
  Ys = (e) => e === "*";
function Lh(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Ys) && (r += Nh),
    t && (r += _h),
    n
      .filter((l) => !Ys(l))
      .reduce((l, o) => l + (Ch.test(o) ? Oh : o === "" ? Th : jh), r)
  );
}
function Rh(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Ih(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = "/",
    o = [];
  for (let i = 0; i < n.length; ++i) {
    let u = n[i],
      s = i === n.length - 1,
      c = l === "/" ? t : t.slice(l.length) || "/",
      p = zh(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: s },
        c
      );
    if (!p) return null;
    Object.assign(r, p.params);
    let h = u.route;
    o.push({
      params: r,
      pathname: Fn([l, p.pathname]),
      pathnameBase: Fh(Fn([l, p.pathnameBase])),
      route: h,
    }),
      p.pathnameBase !== "/" && (l = Fn([l, p.pathnameBase]));
  }
  return o;
}
function zh(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Mh(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let o = l[0],
    i = o.replace(/(.)\/+$/, "$1"),
    u = l.slice(1);
  return {
    params: r.reduce((c, p, h) => {
      let { paramName: m, isOptional: k } = p;
      if (m === "*") {
        let g = u[h] || "";
        i = o.slice(0, o.length - g.length).replace(/(.)\/+$/, "$1");
      }
      const x = u[h];
      return (
        k && !x ? (c[m] = void 0) : (c[m] = (x || "").replace(/%2F/g, "/")), c
      );
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function Mh(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    kf(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (i, u, s) => (
            r.push({ paramName: u, isOptional: s != null }),
            s ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (l += "\\/*$")
      : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function Dh(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      kf(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Cf(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
const Fn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Fh = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function Uh(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Of = ["post", "put", "patch", "delete"];
new Set(Of);
const Bh = ["get", ...Of];
new Set(Bh);
/**
 * React Router v6.22.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Al() {
  return (
    (Al = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Al.apply(this, arguments)
  );
}
const $h = V.createContext(null),
  Vh = V.createContext(null),
  _f = V.createContext(null),
  io = V.createContext(null),
  Fr = V.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Tf = V.createContext(null);
function Tu() {
  return V.useContext(io) != null;
}
function Ah() {
  return Tu() || Ke(!1), V.useContext(io).location;
}
function Wh() {
  let { matches: e } = V.useContext(Fr),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Hh(e, t) {
  return Qh(e, t);
}
function Qh(e, t, n, r) {
  Tu() || Ke(!1);
  let { navigator: l } = V.useContext(_f),
    { matches: o } = V.useContext(Fr),
    i = o[o.length - 1],
    u = i ? i.params : {};
  i && i.pathname;
  let s = i ? i.pathnameBase : "/";
  i && i.route;
  let c = Ah(),
    p;
  if (t) {
    var h;
    let N = typeof t == "string" ? oo(t) : t;
    s === "/" || ((h = N.pathname) != null && h.startsWith(s)) || Ke(!1),
      (p = N);
  } else p = c;
  let m = p.pathname || "/",
    k = m;
  if (s !== "/") {
    let N = s.replace(/^\//, "").split("/");
    k = "/" + m.replace(/^\//, "").split("/").slice(N.length).join("/");
  }
  let x = Eh(e, { pathname: k }),
    g = Zh(
      x &&
        x.map((N) =>
          Object.assign({}, N, {
            params: Object.assign({}, u, N.params),
            pathname: Fn([
              s,
              l.encodeLocation
                ? l.encodeLocation(N.pathname).pathname
                : N.pathname,
            ]),
            pathnameBase:
              N.pathnameBase === "/"
                ? s
                : Fn([
                    s,
                    l.encodeLocation
                      ? l.encodeLocation(N.pathnameBase).pathname
                      : N.pathnameBase,
                  ]),
          })
        ),
      o,
      n,
      r
    );
  return t && g
    ? V.createElement(
        io.Provider,
        {
          value: {
            location: Al(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              p
            ),
            navigationType: Ut.Pop,
          },
        },
        g
      )
    : g;
}
function Kh() {
  let e = em(),
    t = Uh(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return V.createElement(
    V.Fragment,
    null,
    V.createElement("h2", null, "Unexpected Application Error!"),
    V.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? V.createElement("pre", { style: l }, n) : null,
    null
  );
}
const Yh = V.createElement(Kh, null);
class Gh extends V.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? V.createElement(
          Fr.Provider,
          { value: this.props.routeContext },
          V.createElement(Tf.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Xh(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = V.useContext($h);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    V.createElement(Fr.Provider, { value: t }, r)
  );
}
function Zh(e, t, n, r) {
  var l;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o;
    if ((o = n) != null && o.errors) e = n.matches;
    else return null;
  }
  let i = e,
    u = (l = n) == null ? void 0 : l.errors;
  if (u != null) {
    let p = i.findIndex(
      (h) => h.route.id && (u == null ? void 0 : u[h.route.id])
    );
    p >= 0 || Ke(!1), (i = i.slice(0, Math.min(i.length, p + 1)));
  }
  let s = !1,
    c = -1;
  if (n && r && r.v7_partialHydration)
    for (let p = 0; p < i.length; p++) {
      let h = i[p];
      if (
        ((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (c = p),
        h.route.id)
      ) {
        let { loaderData: m, errors: k } = n,
          x =
            h.route.loader &&
            m[h.route.id] === void 0 &&
            (!k || k[h.route.id] === void 0);
        if (h.route.lazy || x) {
          (s = !0), c >= 0 ? (i = i.slice(0, c + 1)) : (i = [i[0]]);
          break;
        }
      }
    }
  return i.reduceRight((p, h, m) => {
    let k,
      x = !1,
      g = null,
      N = null;
    n &&
      ((k = u && h.route.id ? u[h.route.id] : void 0),
      (g = h.route.errorElement || Yh),
      s &&
        (c < 0 && m === 0
          ? (tm("route-fallback", !1), (x = !0), (N = null))
          : c === m &&
            ((x = !0), (N = h.route.hydrateFallbackElement || null))));
    let f = t.concat(i.slice(0, m + 1)),
      a = () => {
        let d;
        return (
          k
            ? (d = g)
            : x
            ? (d = N)
            : h.route.Component
            ? (d = V.createElement(h.route.Component, null))
            : h.route.element
            ? (d = h.route.element)
            : (d = p),
          V.createElement(Xh, {
            match: h,
            routeContext: { outlet: p, matches: f, isDataRoute: n != null },
            children: d,
          })
        );
      };
    return n && (h.route.ErrorBoundary || h.route.errorElement || m === 0)
      ? V.createElement(Gh, {
          location: n.location,
          revalidation: n.revalidation,
          component: g,
          error: k,
          children: a(),
          routeContext: { outlet: null, matches: f, isDataRoute: !0 },
        })
      : a();
  }, null);
}
var Li = (function (e) {
  return (
    (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate"),
    (e.UseRouteId = "useRouteId"),
    e
  );
})(Li || {});
function Jh(e) {
  let t = V.useContext(Vh);
  return t || Ke(!1), t;
}
function qh(e) {
  let t = V.useContext(Fr);
  return t || Ke(!1), t;
}
function bh(e) {
  let t = qh(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Ke(!1), n.route.id;
}
function em() {
  var e;
  let t = V.useContext(Tf),
    n = Jh(Li.UseRouteError),
    r = bh(Li.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
const Gs = {};
function tm(e, t, n) {
  !t && !Gs[e] && (Gs[e] = !0);
}
function gn(e) {
  Ke(!1);
}
function nm(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = Ut.Pop,
    navigator: o,
    static: i = !1,
    future: u,
  } = e;
  Tu() && Ke(!1);
  let s = t.replace(/^\/*/, "/"),
    c = V.useMemo(
      () => ({
        basename: s,
        navigator: o,
        static: i,
        future: Al({ v7_relativeSplatPath: !1 }, u),
      }),
      [s, u, o, i]
    );
  typeof r == "string" && (r = oo(r));
  let {
      pathname: p = "/",
      search: h = "",
      hash: m = "",
      state: k = null,
      key: x = "default",
    } = r,
    g = V.useMemo(() => {
      let N = Cf(p, s);
      return N == null
        ? null
        : {
            location: { pathname: N, search: h, hash: m, state: k, key: x },
            navigationType: l,
          };
    }, [s, p, h, m, k, x, l]);
  return g == null
    ? null
    : V.createElement(
        _f.Provider,
        { value: c },
        V.createElement(io.Provider, { children: n, value: g })
      );
}
function rm(e) {
  let { children: t, location: n } = e;
  return Hh(Ri(t), n);
}
new Promise(() => {});
function Ri(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    V.Children.forEach(e, (r, l) => {
      if (!V.isValidElement(r)) return;
      let o = [...t, l];
      if (r.type === V.Fragment) {
        n.push.apply(n, Ri(r.props.children, o));
        return;
      }
      r.type !== gn && Ke(!1), !r.props.index || !r.props.children || Ke(!1);
      let i = {
        id: r.props.id || o.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (i.children = Ri(r.props.children, o)), n.push(i);
    }),
    n
  );
}
/**
 * React Router DOM v6.22.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const lm = "6";
try {
  window.__reactRouterVersion = lm;
} catch {}
const om = "startTransition",
  Xs = Jf[om];
function im(e) {
  let { basename: t, children: n, future: r, window: l } = e,
    o = V.useRef();
  o.current == null && (o.current = Sh({ window: l, v5Compat: !0 }));
  let i = o.current,
    [u, s] = V.useState({ action: i.action, location: i.location }),
    { v7_startTransition: c } = r || {},
    p = V.useCallback(
      (h) => {
        c && Xs ? Xs(() => s(h)) : s(h);
      },
      [s, c]
    );
  return (
    V.useLayoutEffect(() => i.listen(p), [i, p]),
    V.createElement(nm, {
      basename: t,
      children: n,
      location: u.location,
      navigationType: u.action,
      navigator: i,
      future: r,
    })
  );
}
var Zs;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Zs || (Zs = {}));
var Js;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Js || (Js = {}));
const um = V.forwardRef(function (
  {
    gallery: t,
    galleryId: n,
    slideNumber: r,
    prevSlide: l,
    nextSlide: o,
    handleCloseModal: i,
    handleTouchStart: u,
    handleTouchMove: s,
  },
  c
) {
  function p(h) {
    console.log(h.key),
      h.key === "ArrowRight" && o(),
      h.key === "ArrowLeft" && l();
  }
  return C.jsxs("dialog", {
    ref: c,
    className: "sliderWrap",
    onKeyDown: p,
    onTouchStart: u,
    onTouchMove: s,
    onClick: (h) => {
      h.currentTarget === h.target && i();
    },
    children: [
      C.jsx("img", {
        src: "/assets/left-svgrepo-com.svg",
        className: "back-btn",
        onClick: l,
      }),
      C.jsx("img", {
        src: "/assets/right-svgrepo-com.svg",
        className: "next-btn",
        onClick: o,
      }),
      C.jsx("img", {
        src: "/assets/x-svgrepo-com.svg",
        className: "close-btn",
        onClick: i,
      }),
      C.jsx("img", {
        className: "slider-img",
        src: `/assets/gallery/${n}/${t.assets[r].id}.png`,
      }),
      C.jsx("div", {
        className: "modal-description",
        children: t.assets[r].title,
      }),
    ],
  });
});
function jf({}) {
  const e = V.useRef(),
    [t, n] = V.useState(0),
    [r, l] = V.useState(!1),
    [o, i] = V.useState(null);
  jf.propTypes = { id: vh.int };
  let u = Wh();
  const s = wh(parseInt(u.galleryId));
  function c(g) {
    l(!0),
      e.current.showModal(),
      n(g),
      (document.body.style.overflow = "hidden");
  }
  const p = () => {
      n(t === 0 ? s.assets.length - 1 : t - 1);
    },
    h = () => {
      t + 1 === s.assets.length ? n(0) : n(t + 1);
    },
    m = () => {
      e.current.close(), (document.body.style.overflow = "unset");
    },
    k = (g) => {
      const N = g.touches[0].clientX;
      i(N);
    },
    x = (g) => {
      const N = o;
      if (N === null) return;
      const f = g.touches[0].clientX,
        a = N - f;
      a > 13 && h(), a < -13 && p(), i(null);
    };
  return C.jsxs(C.Fragment, {
    children: [
      C.jsx(um, {
        galleryId: u.galleryId,
        gallery: s,
        slideNumber: t,
        ref: e,
        prevSlide: p,
        nextSlide: h,
        handleCloseModal: m,
        handleTouchMove: x,
        handleTouchStart: k,
      }),
      C.jsx(_u, {
        children: C.jsxs("div", {
          className: "gallery-content",
          children: [
            C.jsxs("div", {
              className: "gallery-header",
              children: [
                C.jsx("div", { className: "gallery-name", children: s.name }),
                C.jsx("div", {
                  className: "gallery-description",
                  children: s.description,
                }),
              ],
            }),
            C.jsx("ul", {
              className: "grid",
              children: s.assets.map((g, N) =>
                C.jsxs(
                  "li",
                  {
                    className: "grid-item",
                    onClick: () => c(N),
                    children: [
                      C.jsx("img", {
                        src: `/assets/gallery/${u.galleryId}/${g.id}.png`,
                        alt: g.alt,
                        className: "effects",
                      }),
                      C.jsx("div", {
                        className: "image-title fade",
                        children: g.title,
                      }),
                    ],
                  },
                  N
                )
              ),
            }),
          ],
        }),
      }),
    ],
  });
}
function sm() {
  return C.jsxs(C.Fragment, {
    children: [
      C.jsx(vf, {}),
      C.jsx("div", {
        className: "contact-content",
        children: C.jsxs("form", {
          action: "https://getform.io/f/panrvnka",
          method: "POST",
          className: "contact-form",
          children: [
            C.jsxs("div", {
              className: "contact-header",
              children: [
                C.jsx("p", {
                  className: "contact-header-title",
                  children: "Reach Out!",
                }),
                C.jsx("p", {
                  className: "contact-header-description",
                  children:
                    "Submit the form below or shoot me an email at imaschination@gmail.com",
                }),
              ],
            }),
            C.jsx("input", {
              required: !0,
              type: "text",
              placeholder: "name",
              name: "name",
            }),
            C.jsx("input", {
              required: !0,
              type: "email",
              placeholder: "email",
              name: "email",
            }),
            C.jsx("textarea", {
              required: !0,
              cols: "30",
              rows: "10",
              name: "message",
              placeholder: "whatcha thinking?",
            }),
            C.jsx("button", {
              type: "submit",
              className: "formbtn",
              children: "send",
            }),
          ],
        }),
      }),
    ],
  });
}
function am() {
  return C.jsx(_u, {
    children: C.jsxs("div", {
      className: "catalog-content",
      children: [
        C.jsx("img", {
          src: "/assets/CatalogCover.jpg",
          className: "catalog-photo",
        }),
        C.jsx("div", { className: "catalog-title", children: "The Catalog" }),
        C.jsxs("div", {
          className: "catalog-description",
          children: [
            " ",
            "The Catalog is coming soon; in the meantime, please send any inventory inquiries",
            " ",
            C.jsx("a", {
              style: { color: "blue" },
              href: "/contact",
              children: "here",
            }),
            ".",
            C.jsx("br", {}),
            C.jsx("div", { className: "catalog-links" }),
          ],
        }),
      ],
    }),
  });
}
function cm() {
  return C.jsx(C.Fragment, {
    children: C.jsxs(rm, {
      children: [
        C.jsx(gn, { path: "/", element: C.jsx(uh, {}) }),
        C.jsx(gn, { path: "/collections", element: C.jsx(fh, {}) }),
        C.jsx(gn, { path: "/catalog", element: C.jsx(am, {}) }),
        C.jsx(gn, { path: "/gallery/:galleryId", element: C.jsx(jf, {}) }),
        C.jsx(gn, { path: "/contact", element: C.jsx(sm, {}) }),
      ],
    }),
  });
}
Fo.createRoot(document.getElementById("root")).render(
  C.jsx(im, { children: C.jsx(cm, {}) })
);
