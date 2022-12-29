(function () {
	const t = document.createElement('link').relList;
	if (t && t.supports && t.supports('modulepreload')) return;
	for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
	new MutationObserver((l) => {
		for (const i of l)
			if (i.type === 'childList')
				for (const o of i.addedNodes)
					o.tagName === 'LINK' && o.rel === 'modulepreload' && r(o);
	}).observe(document, { childList: !0, subtree: !0 });
	function n(l) {
		const i = {};
		return (
			l.integrity && (i.integrity = l.integrity),
			l.referrerpolicy && (i.referrerPolicy = l.referrerpolicy),
			l.crossorigin === 'use-credentials'
				? (i.credentials = 'include')
				: l.crossorigin === 'anonymous'
				? (i.credentials = 'omit')
				: (i.credentials = 'same-origin'),
			i
		);
	}
	function r(l) {
		if (l.ep) return;
		l.ep = !0;
		const i = n(l);
		fetch(l.href, i);
	}
})();
function gc(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
		? e.default
		: e;
}
var Br = {},
	yc = {
		get exports() {
			return Br;
		},
		set exports(e) {
			Br = e;
		},
	},
	dl = {},
	_t = {},
	xc = {
		get exports() {
			return _t;
		},
		set exports(e) {
			_t = e;
		},
	},
	R = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tr = Symbol.for('react.element'),
	wc = Symbol.for('react.portal'),
	kc = Symbol.for('react.fragment'),
	Sc = Symbol.for('react.strict_mode'),
	Ec = Symbol.for('react.profiler'),
	Nc = Symbol.for('react.provider'),
	Cc = Symbol.for('react.context'),
	Ac = Symbol.for('react.forward_ref'),
	Pc = Symbol.for('react.suspense'),
	zc = Symbol.for('react.memo'),
	Lc = Symbol.for('react.lazy'),
	Xo = Symbol.iterator;
function _c(e) {
	return e === null || typeof e != 'object'
		? null
		: ((e = (Xo && e[Xo]) || e['@@iterator']),
		  typeof e == 'function' ? e : null);
}
var is = {
		isMounted: function () {
			return !1;
		},
		enqueueForceUpdate: function () {},
		enqueueReplaceState: function () {},
		enqueueSetState: function () {},
	},
	os = Object.assign,
	us = {};
function dn(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = us),
		(this.updater = n || is);
}
dn.prototype.isReactComponent = {};
dn.prototype.setState = function (e, t) {
	if (typeof e != 'object' && typeof e != 'function' && e != null)
		throw Error(
			'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
		);
	this.updater.enqueueSetState(this, e, t, 'setState');
};
dn.prototype.forceUpdate = function (e) {
	this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function ss() {}
ss.prototype = dn.prototype;
function bi(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = us),
		(this.updater = n || is);
}
var eo = (bi.prototype = new ss());
eo.constructor = bi;
os(eo, dn.prototype);
eo.isPureReactComponent = !0;
var Go = Array.isArray,
	as = Object.prototype.hasOwnProperty,
	to = { current: null },
	cs = { key: !0, ref: !0, __self: !0, __source: !0 };
function fs(e, t, n) {
	var r,
		l = {},
		i = null,
		o = null;
	if (t != null)
		for (r in (t.ref !== void 0 && (o = t.ref),
		t.key !== void 0 && (i = '' + t.key),
		t))
			as.call(t, r) && !cs.hasOwnProperty(r) && (l[r] = t[r]);
	var u = arguments.length - 2;
	if (u === 1) l.children = n;
	else if (1 < u) {
		for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
		l.children = s;
	}
	if (e && e.defaultProps)
		for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
	return {
		$$typeof: tr,
		type: e,
		key: i,
		ref: o,
		props: l,
		_owner: to.current,
	};
}
function Tc(e, t) {
	return {
		$$typeof: tr,
		type: e.type,
		key: t,
		ref: e.ref,
		props: e.props,
		_owner: e._owner,
	};
}
function no(e) {
	return typeof e == 'object' && e !== null && e.$$typeof === tr;
}
function Rc(e) {
	var t = { '=': '=0', ':': '=2' };
	return (
		'$' +
		e.replace(/[=:]/g, function (n) {
			return t[n];
		})
	);
}
var Zo = /\/+/g;
function _l(e, t) {
	return typeof e == 'object' && e !== null && e.key != null
		? Rc('' + e.key)
		: t.toString(36);
}
function Pr(e, t, n, r, l) {
	var i = typeof e;
	(i === 'undefined' || i === 'boolean') && (e = null);
	var o = !1;
	if (e === null) o = !0;
	else
		switch (i) {
			case 'string':
			case 'number':
				o = !0;
				break;
			case 'object':
				switch (e.$$typeof) {
					case tr:
					case wc:
						o = !0;
				}
		}
	if (o)
		return (
			(o = e),
			(l = l(o)),
			(e = r === '' ? '.' + _l(o, 0) : r),
			Go(l)
				? ((n = ''),
				  e != null && (n = e.replace(Zo, '$&/') + '/'),
				  Pr(l, t, n, '', function (c) {
						return c;
				  }))
				: l != null &&
				  (no(l) &&
						(l = Tc(
							l,
							n +
								(!l.key || (o && o.key === l.key)
									? ''
									: ('' + l.key).replace(Zo, '$&/') + '/') +
								e
						)),
				  t.push(l)),
			1
		);
	if (((o = 0), (r = r === '' ? '.' : r + ':'), Go(e)))
		for (var u = 0; u < e.length; u++) {
			i = e[u];
			var s = r + _l(i, u);
			o += Pr(i, t, n, s, l);
		}
	else if (((s = _c(e)), typeof s == 'function'))
		for (e = s.call(e), u = 0; !(i = e.next()).done; )
			(i = i.value), (s = r + _l(i, u++)), (o += Pr(i, t, n, s, l));
	else if (i === 'object')
		throw (
			((t = String(e)),
			Error(
				'Objects are not valid as a React child (found: ' +
					(t === '[object Object]'
						? 'object with keys {' + Object.keys(e).join(', ') + '}'
						: t) +
					'). If you meant to render a collection of children, use an array instead.'
			))
		);
	return o;
}
function ar(e, t, n) {
	if (e == null) return e;
	var r = [],
		l = 0;
	return (
		Pr(e, r, '', '', function (i) {
			return t.call(n, i, l++);
		}),
		r
	);
}
function Mc(e) {
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
var ae = { current: null },
	zr = { transition: null },
	Oc = {
		ReactCurrentDispatcher: ae,
		ReactCurrentBatchConfig: zr,
		ReactCurrentOwner: to,
	};
R.Children = {
	map: ar,
	forEach: function (e, t, n) {
		ar(
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
			ar(e, function () {
				t++;
			}),
			t
		);
	},
	toArray: function (e) {
		return (
			ar(e, function (t) {
				return t;
			}) || []
		);
	},
	only: function (e) {
		if (!no(e))
			throw Error(
				'React.Children.only expected to receive a single React element child.'
			);
		return e;
	},
};
R.Component = dn;
R.Fragment = kc;
R.Profiler = Ec;
R.PureComponent = bi;
R.StrictMode = Sc;
R.Suspense = Pc;
R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Oc;
R.cloneElement = function (e, t, n) {
	if (e == null)
		throw Error(
			'React.cloneElement(...): The argument must be a React element, but you passed ' +
				e +
				'.'
		);
	var r = os({}, e.props),
		l = e.key,
		i = e.ref,
		o = e._owner;
	if (t != null) {
		if (
			(t.ref !== void 0 && ((i = t.ref), (o = to.current)),
			t.key !== void 0 && (l = '' + t.key),
			e.type && e.type.defaultProps)
		)
			var u = e.type.defaultProps;
		for (s in t)
			as.call(t, s) &&
				!cs.hasOwnProperty(s) &&
				(r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
	}
	var s = arguments.length - 2;
	if (s === 1) r.children = n;
	else if (1 < s) {
		u = Array(s);
		for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
		r.children = u;
	}
	return { $$typeof: tr, type: e.type, key: l, ref: i, props: r, _owner: o };
};
R.createContext = function (e) {
	return (
		(e = {
			$$typeof: Cc,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null,
		}),
		(e.Provider = { $$typeof: Nc, _context: e }),
		(e.Consumer = e)
	);
};
R.createElement = fs;
R.createFactory = function (e) {
	var t = fs.bind(null, e);
	return (t.type = e), t;
};
R.createRef = function () {
	return { current: null };
};
R.forwardRef = function (e) {
	return { $$typeof: Ac, render: e };
};
R.isValidElement = no;
R.lazy = function (e) {
	return { $$typeof: Lc, _payload: { _status: -1, _result: e }, _init: Mc };
};
R.memo = function (e, t) {
	return { $$typeof: zc, type: e, compare: t === void 0 ? null : t };
};
R.startTransition = function (e) {
	var t = zr.transition;
	zr.transition = {};
	try {
		e();
	} finally {
		zr.transition = t;
	}
};
R.unstable_act = function () {
	throw Error('act(...) is not supported in production builds of React.');
};
R.useCallback = function (e, t) {
	return ae.current.useCallback(e, t);
};
R.useContext = function (e) {
	return ae.current.useContext(e);
};
R.useDebugValue = function () {};
R.useDeferredValue = function (e) {
	return ae.current.useDeferredValue(e);
};
R.useEffect = function (e, t) {
	return ae.current.useEffect(e, t);
};
R.useId = function () {
	return ae.current.useId();
};
R.useImperativeHandle = function (e, t, n) {
	return ae.current.useImperativeHandle(e, t, n);
};
R.useInsertionEffect = function (e, t) {
	return ae.current.useInsertionEffect(e, t);
};
R.useLayoutEffect = function (e, t) {
	return ae.current.useLayoutEffect(e, t);
};
R.useMemo = function (e, t) {
	return ae.current.useMemo(e, t);
};
R.useReducer = function (e, t, n) {
	return ae.current.useReducer(e, t, n);
};
R.useRef = function (e) {
	return ae.current.useRef(e);
};
R.useState = function (e) {
	return ae.current.useState(e);
};
R.useSyncExternalStore = function (e, t, n) {
	return ae.current.useSyncExternalStore(e, t, n);
};
R.useTransition = function () {
	return ae.current.useTransition();
};
R.version = '18.2.0';
(function (e) {
	e.exports = R;
})(xc);
const Ut = gc(_t);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dc = _t,
	jc = Symbol.for('react.element'),
	Ic = Symbol.for('react.fragment'),
	Fc = Object.prototype.hasOwnProperty,
	Uc = Dc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	Bc = { key: !0, ref: !0, __self: !0, __source: !0 };
function ds(e, t, n) {
	var r,
		l = {},
		i = null,
		o = null;
	n !== void 0 && (i = '' + n),
		t.key !== void 0 && (i = '' + t.key),
		t.ref !== void 0 && (o = t.ref);
	for (r in t) Fc.call(t, r) && !Bc.hasOwnProperty(r) && (l[r] = t[r]);
	if (e && e.defaultProps)
		for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
	return {
		$$typeof: jc,
		type: e,
		key: i,
		ref: o,
		props: l,
		_owner: Uc.current,
	};
}
dl.Fragment = Ic;
dl.jsx = ds;
dl.jsxs = ds;
(function (e) {
	e.exports = dl;
})(yc);
const v = Br.jsx,
	z = Br.jsxs;
var ni = {},
	ri = {},
	Qc = {
		get exports() {
			return ri;
		},
		set exports(e) {
			ri = e;
		},
	},
	ke = {},
	li = {},
	$c = {
		get exports() {
			return li;
		},
		set exports(e) {
			li = e;
		},
	},
	ps = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
	function t(N, L) {
		var _ = N.length;
		N.push(L);
		e: for (; 0 < _; ) {
			var K = (_ - 1) >>> 1,
				J = N[K];
			if (0 < l(J, L)) (N[K] = L), (N[_] = J), (_ = K);
			else break e;
		}
	}
	function n(N) {
		return N.length === 0 ? null : N[0];
	}
	function r(N) {
		if (N.length === 0) return null;
		var L = N[0],
			_ = N.pop();
		if (_ !== L) {
			N[0] = _;
			e: for (var K = 0, J = N.length, ur = J >>> 1; K < ur; ) {
				var kt = 2 * (K + 1) - 1,
					Ll = N[kt],
					St = kt + 1,
					sr = N[St];
				if (0 > l(Ll, _))
					St < J && 0 > l(sr, Ll)
						? ((N[K] = sr), (N[St] = _), (K = St))
						: ((N[K] = Ll), (N[kt] = _), (K = kt));
				else if (St < J && 0 > l(sr, _)) (N[K] = sr), (N[St] = _), (K = St);
				else break e;
			}
		}
		return L;
	}
	function l(N, L) {
		var _ = N.sortIndex - L.sortIndex;
		return _ !== 0 ? _ : N.id - L.id;
	}
	if (typeof performance == 'object' && typeof performance.now == 'function') {
		var i = performance;
		e.unstable_now = function () {
			return i.now();
		};
	} else {
		var o = Date,
			u = o.now();
		e.unstable_now = function () {
			return o.now() - u;
		};
	}
	var s = [],
		c = [],
		h = 1,
		m = null,
		p = 3,
		x = !1,
		w = !1,
		k = !1,
		D = typeof setTimeout == 'function' ? setTimeout : null,
		f = typeof clearTimeout == 'function' ? clearTimeout : null,
		a = typeof setImmediate < 'u' ? setImmediate : null;
	typeof navigator < 'u' &&
		navigator.scheduling !== void 0 &&
		navigator.scheduling.isInputPending !== void 0 &&
		navigator.scheduling.isInputPending.bind(navigator.scheduling);
	function d(N) {
		for (var L = n(c); L !== null; ) {
			if (L.callback === null) r(c);
			else if (L.startTime <= N)
				r(c), (L.sortIndex = L.expirationTime), t(s, L);
			else break;
			L = n(c);
		}
	}
	function g(N) {
		if (((k = !1), d(N), !w))
			if (n(s) !== null) (w = !0), wt(S);
			else {
				var L = n(c);
				L !== null && or(g, L.startTime - N);
			}
	}
	function S(N, L) {
		(w = !1), k && ((k = !1), f(P), (P = -1)), (x = !0);
		var _ = p;
		try {
			for (
				d(L), m = n(s);
				m !== null && (!(m.expirationTime > L) || (N && !ve()));

			) {
				var K = m.callback;
				if (typeof K == 'function') {
					(m.callback = null), (p = m.priorityLevel);
					var J = K(m.expirationTime <= L);
					(L = e.unstable_now()),
						typeof J == 'function' ? (m.callback = J) : m === n(s) && r(s),
						d(L);
				} else r(s);
				m = n(s);
			}
			if (m !== null) var ur = !0;
			else {
				var kt = n(c);
				kt !== null && or(g, kt.startTime - L), (ur = !1);
			}
			return ur;
		} finally {
			(m = null), (p = _), (x = !1);
		}
	}
	var C = !1,
		A = null,
		P = -1,
		Q = 5,
		T = -1;
	function ve() {
		return !(e.unstable_now() - T < Q);
	}
	function Je() {
		if (A !== null) {
			var N = e.unstable_now();
			T = N;
			var L = !0;
			try {
				L = A(!0, N);
			} finally {
				L ? qe() : ((C = !1), (A = null));
			}
		} else C = !1;
	}
	var qe;
	if (typeof a == 'function')
		qe = function () {
			a(Je);
		};
	else if (typeof MessageChannel < 'u') {
		var hn = new MessageChannel(),
			zl = hn.port2;
		(hn.port1.onmessage = Je),
			(qe = function () {
				zl.postMessage(null);
			});
	} else
		qe = function () {
			D(Je, 0);
		};
	function wt(N) {
		(A = N), C || ((C = !0), qe());
	}
	function or(N, L) {
		P = D(function () {
			N(e.unstable_now());
		}, L);
	}
	(e.unstable_IdlePriority = 5),
		(e.unstable_ImmediatePriority = 1),
		(e.unstable_LowPriority = 4),
		(e.unstable_NormalPriority = 3),
		(e.unstable_Profiling = null),
		(e.unstable_UserBlockingPriority = 2),
		(e.unstable_cancelCallback = function (N) {
			N.callback = null;
		}),
		(e.unstable_continueExecution = function () {
			w || x || ((w = !0), wt(S));
		}),
		(e.unstable_forceFrameRate = function (N) {
			0 > N || 125 < N
				? console.error(
						'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
				  )
				: (Q = 0 < N ? Math.floor(1e3 / N) : 5);
		}),
		(e.unstable_getCurrentPriorityLevel = function () {
			return p;
		}),
		(e.unstable_getFirstCallbackNode = function () {
			return n(s);
		}),
		(e.unstable_next = function (N) {
			switch (p) {
				case 1:
				case 2:
				case 3:
					var L = 3;
					break;
				default:
					L = p;
			}
			var _ = p;
			p = L;
			try {
				return N();
			} finally {
				p = _;
			}
		}),
		(e.unstable_pauseExecution = function () {}),
		(e.unstable_requestPaint = function () {}),
		(e.unstable_runWithPriority = function (N, L) {
			switch (N) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break;
				default:
					N = 3;
			}
			var _ = p;
			p = N;
			try {
				return L();
			} finally {
				p = _;
			}
		}),
		(e.unstable_scheduleCallback = function (N, L, _) {
			var K = e.unstable_now();
			switch (
				(typeof _ == 'object' && _ !== null
					? ((_ = _.delay), (_ = typeof _ == 'number' && 0 < _ ? K + _ : K))
					: (_ = K),
				N)
			) {
				case 1:
					var J = -1;
					break;
				case 2:
					J = 250;
					break;
				case 5:
					J = 1073741823;
					break;
				case 4:
					J = 1e4;
					break;
				default:
					J = 5e3;
			}
			return (
				(J = _ + J),
				(N = {
					id: h++,
					callback: L,
					priorityLevel: N,
					startTime: _,
					expirationTime: J,
					sortIndex: -1,
				}),
				_ > K
					? ((N.sortIndex = _),
					  t(c, N),
					  n(s) === null &&
							N === n(c) &&
							(k ? (f(P), (P = -1)) : (k = !0), or(g, _ - K)))
					: ((N.sortIndex = J), t(s, N), w || x || ((w = !0), wt(S))),
				N
			);
		}),
		(e.unstable_shouldYield = ve),
		(e.unstable_wrapCallback = function (N) {
			var L = p;
			return function () {
				var _ = p;
				p = L;
				try {
					return N.apply(this, arguments);
				} finally {
					p = _;
				}
			};
		});
})(ps);
(function (e) {
	e.exports = ps;
})($c);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ms = _t,
	we = li;
function y(e) {
	for (
		var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
		n < arguments.length;
		n++
	)
		t += '&args[]=' + encodeURIComponent(arguments[n]);
	return (
		'Minified React error #' +
		e +
		'; visit ' +
		t +
		' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
	);
}
var hs = new Set(),
	Fn = {};
function jt(e, t) {
	ln(e, t), ln(e + 'Capture', t);
}
function ln(e, t) {
	for (Fn[e] = t, e = 0; e < t.length; e++) hs.add(t[e]);
}
var Ke = !(
		typeof window > 'u' ||
		typeof window.document > 'u' ||
		typeof window.document.createElement > 'u'
	),
	ii = Object.prototype.hasOwnProperty,
	Wc =
		/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	Jo = {},
	qo = {};
function Hc(e) {
	return ii.call(qo, e)
		? !0
		: ii.call(Jo, e)
		? !1
		: Wc.test(e)
		? (qo[e] = !0)
		: ((Jo[e] = !0), !1);
}
function Vc(e, t, n, r) {
	if (n !== null && n.type === 0) return !1;
	switch (typeof t) {
		case 'function':
		case 'symbol':
			return !0;
		case 'boolean':
			return r
				? !1
				: n !== null
				? !n.acceptsBooleans
				: ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
		default:
			return !1;
	}
}
function Kc(e, t, n, r) {
	if (t === null || typeof t > 'u' || Vc(e, t, n, r)) return !0;
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
function ce(e, t, n, r, l, i, o) {
	(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
		(this.attributeName = r),
		(this.attributeNamespace = l),
		(this.mustUseProperty = n),
		(this.propertyName = e),
		(this.type = t),
		(this.sanitizeURL = i),
		(this.removeEmptyString = o);
}
var ne = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
	.split(' ')
	.forEach(function (e) {
		ne[e] = new ce(e, 0, !1, e, null, !1, !1);
	});
[
	['acceptCharset', 'accept-charset'],
	['className', 'class'],
	['htmlFor', 'for'],
	['httpEquiv', 'http-equiv'],
].forEach(function (e) {
	var t = e[0];
	ne[t] = new ce(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
	ne[e] = new ce(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
	'autoReverse',
	'externalResourcesRequired',
	'focusable',
	'preserveAlpha',
].forEach(function (e) {
	ne[e] = new ce(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
	.split(' ')
	.forEach(function (e) {
		ne[e] = new ce(e, 3, !1, e.toLowerCase(), null, !1, !1);
	});
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
	ne[e] = new ce(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
	ne[e] = new ce(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
	ne[e] = new ce(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
	ne[e] = new ce(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ro = /[\-:]([a-z])/g;
function lo(e) {
	return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
	.split(' ')
	.forEach(function (e) {
		var t = e.replace(ro, lo);
		ne[t] = new ce(t, 1, !1, e, null, !1, !1);
	});
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
	.split(' ')
	.forEach(function (e) {
		var t = e.replace(ro, lo);
		ne[t] = new ce(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
	});
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
	var t = e.replace(ro, lo);
	ne[t] = new ce(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
	ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ne.xlinkHref = new ce(
	'xlinkHref',
	1,
	!1,
	'xlink:href',
	'http://www.w3.org/1999/xlink',
	!0,
	!1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
	ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function io(e, t, n, r) {
	var l = ne.hasOwnProperty(t) ? ne[t] : null;
	(l !== null
		? l.type !== 0
		: r ||
		  !(2 < t.length) ||
		  (t[0] !== 'o' && t[0] !== 'O') ||
		  (t[1] !== 'n' && t[1] !== 'N')) &&
		(Kc(t, n, l, r) && (n = null),
		r || l === null
			? Hc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
			: l.mustUseProperty
			? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : '') : n)
			: ((t = l.attributeName),
			  (r = l.attributeNamespace),
			  n === null
					? e.removeAttribute(t)
					: ((l = l.type),
					  (n = l === 3 || (l === 4 && n === !0) ? '' : '' + n),
					  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ze = ms.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	cr = Symbol.for('react.element'),
	Bt = Symbol.for('react.portal'),
	Qt = Symbol.for('react.fragment'),
	oo = Symbol.for('react.strict_mode'),
	oi = Symbol.for('react.profiler'),
	vs = Symbol.for('react.provider'),
	gs = Symbol.for('react.context'),
	uo = Symbol.for('react.forward_ref'),
	ui = Symbol.for('react.suspense'),
	si = Symbol.for('react.suspense_list'),
	so = Symbol.for('react.memo'),
	et = Symbol.for('react.lazy'),
	ys = Symbol.for('react.offscreen'),
	bo = Symbol.iterator;
function vn(e) {
	return e === null || typeof e != 'object'
		? null
		: ((e = (bo && e[bo]) || e['@@iterator']),
		  typeof e == 'function' ? e : null);
}
var H = Object.assign,
	Tl;
function Cn(e) {
	if (Tl === void 0)
		try {
			throw Error();
		} catch (n) {
			var t = n.stack.trim().match(/\n( *(at )?)/);
			Tl = (t && t[1]) || '';
		}
	return (
		`
` +
		Tl +
		e
	);
}
var Rl = !1;
function Ml(e, t) {
	if (!e || Rl) return '';
	Rl = !0;
	var n = Error.prepareStackTrace;
	Error.prepareStackTrace = void 0;
	try {
		if (t)
			if (
				((t = function () {
					throw Error();
				}),
				Object.defineProperty(t.prototype, 'props', {
					set: function () {
						throw Error();
					},
				}),
				typeof Reflect == 'object' && Reflect.construct)
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
		if (c && r && typeof c.stack == 'string') {
			for (
				var l = c.stack.split(`
`),
					i = r.stack.split(`
`),
					o = l.length - 1,
					u = i.length - 1;
				1 <= o && 0 <= u && l[o] !== i[u];

			)
				u--;
			for (; 1 <= o && 0 <= u; o--, u--)
				if (l[o] !== i[u]) {
					if (o !== 1 || u !== 1)
						do
							if ((o--, u--, 0 > u || l[o] !== i[u])) {
								var s =
									`
` + l[o].replace(' at new ', ' at ');
								return (
									e.displayName &&
										s.includes('<anonymous>') &&
										(s = s.replace('<anonymous>', e.displayName)),
									s
								);
							}
						while (1 <= o && 0 <= u);
					break;
				}
		}
	} finally {
		(Rl = !1), (Error.prepareStackTrace = n);
	}
	return (e = e ? e.displayName || e.name : '') ? Cn(e) : '';
}
function Yc(e) {
	switch (e.tag) {
		case 5:
			return Cn(e.type);
		case 16:
			return Cn('Lazy');
		case 13:
			return Cn('Suspense');
		case 19:
			return Cn('SuspenseList');
		case 0:
		case 2:
		case 15:
			return (e = Ml(e.type, !1)), e;
		case 11:
			return (e = Ml(e.type.render, !1)), e;
		case 1:
			return (e = Ml(e.type, !0)), e;
		default:
			return '';
	}
}
function ai(e) {
	if (e == null) return null;
	if (typeof e == 'function') return e.displayName || e.name || null;
	if (typeof e == 'string') return e;
	switch (e) {
		case Qt:
			return 'Fragment';
		case Bt:
			return 'Portal';
		case oi:
			return 'Profiler';
		case oo:
			return 'StrictMode';
		case ui:
			return 'Suspense';
		case si:
			return 'SuspenseList';
	}
	if (typeof e == 'object')
		switch (e.$$typeof) {
			case gs:
				return (e.displayName || 'Context') + '.Consumer';
			case vs:
				return (e._context.displayName || 'Context') + '.Provider';
			case uo:
				var t = e.render;
				return (
					(e = e.displayName),
					e ||
						((e = t.displayName || t.name || ''),
						(e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
					e
				);
			case so:
				return (
					(t = e.displayName || null), t !== null ? t : ai(e.type) || 'Memo'
				);
			case et:
				(t = e._payload), (e = e._init);
				try {
					return ai(e(t));
				} catch {}
		}
	return null;
}
function Xc(e) {
	var t = e.type;
	switch (e.tag) {
		case 24:
			return 'Cache';
		case 9:
			return (t.displayName || 'Context') + '.Consumer';
		case 10:
			return (t._context.displayName || 'Context') + '.Provider';
		case 18:
			return 'DehydratedFragment';
		case 11:
			return (
				(e = t.render),
				(e = e.displayName || e.name || ''),
				t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
			);
		case 7:
			return 'Fragment';
		case 5:
			return t;
		case 4:
			return 'Portal';
		case 3:
			return 'Root';
		case 6:
			return 'Text';
		case 16:
			return ai(t);
		case 8:
			return t === oo ? 'StrictMode' : 'Mode';
		case 22:
			return 'Offscreen';
		case 12:
			return 'Profiler';
		case 21:
			return 'Scope';
		case 13:
			return 'Suspense';
		case 19:
			return 'SuspenseList';
		case 25:
			return 'TracingMarker';
		case 1:
		case 0:
		case 17:
		case 2:
		case 14:
		case 15:
			if (typeof t == 'function') return t.displayName || t.name || null;
			if (typeof t == 'string') return t;
	}
	return null;
}
function mt(e) {
	switch (typeof e) {
		case 'boolean':
		case 'number':
		case 'string':
		case 'undefined':
			return e;
		case 'object':
			return e;
		default:
			return '';
	}
}
function xs(e) {
	var t = e.type;
	return (
		(e = e.nodeName) &&
		e.toLowerCase() === 'input' &&
		(t === 'checkbox' || t === 'radio')
	);
}
function Gc(e) {
	var t = xs(e) ? 'checked' : 'value',
		n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
		r = '' + e[t];
	if (
		!e.hasOwnProperty(t) &&
		typeof n < 'u' &&
		typeof n.get == 'function' &&
		typeof n.set == 'function'
	) {
		var l = n.get,
			i = n.set;
		return (
			Object.defineProperty(e, t, {
				configurable: !0,
				get: function () {
					return l.call(this);
				},
				set: function (o) {
					(r = '' + o), i.call(this, o);
				},
			}),
			Object.defineProperty(e, t, { enumerable: n.enumerable }),
			{
				getValue: function () {
					return r;
				},
				setValue: function (o) {
					r = '' + o;
				},
				stopTracking: function () {
					(e._valueTracker = null), delete e[t];
				},
			}
		);
	}
}
function fr(e) {
	e._valueTracker || (e._valueTracker = Gc(e));
}
function ws(e) {
	if (!e) return !1;
	var t = e._valueTracker;
	if (!t) return !0;
	var n = t.getValue(),
		r = '';
	return (
		e && (r = xs(e) ? (e.checked ? 'true' : 'false') : e.value),
		(e = r),
		e !== n ? (t.setValue(e), !0) : !1
	);
}
function Qr(e) {
	if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
		return null;
	try {
		return e.activeElement || e.body;
	} catch {
		return e.body;
	}
}
function ci(e, t) {
	var n = t.checked;
	return H({}, t, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: n ?? e._wrapperState.initialChecked,
	});
}
function eu(e, t) {
	var n = t.defaultValue == null ? '' : t.defaultValue,
		r = t.checked != null ? t.checked : t.defaultChecked;
	(n = mt(t.value != null ? t.value : n)),
		(e._wrapperState = {
			initialChecked: r,
			initialValue: n,
			controlled:
				t.type === 'checkbox' || t.type === 'radio'
					? t.checked != null
					: t.value != null,
		});
}
function ks(e, t) {
	(t = t.checked), t != null && io(e, 'checked', t, !1);
}
function fi(e, t) {
	ks(e, t);
	var n = mt(t.value),
		r = t.type;
	if (n != null)
		r === 'number'
			? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
			: e.value !== '' + n && (e.value = '' + n);
	else if (r === 'submit' || r === 'reset') {
		e.removeAttribute('value');
		return;
	}
	t.hasOwnProperty('value')
		? di(e, t.type, n)
		: t.hasOwnProperty('defaultValue') && di(e, t.type, mt(t.defaultValue)),
		t.checked == null &&
			t.defaultChecked != null &&
			(e.defaultChecked = !!t.defaultChecked);
}
function tu(e, t, n) {
	if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
		var r = t.type;
		if (
			!(
				(r !== 'submit' && r !== 'reset') ||
				(t.value !== void 0 && t.value !== null)
			)
		)
			return;
		(t = '' + e._wrapperState.initialValue),
			n || t === e.value || (e.value = t),
			(e.defaultValue = t);
	}
	(n = e.name),
		n !== '' && (e.name = ''),
		(e.defaultChecked = !!e._wrapperState.initialChecked),
		n !== '' && (e.name = n);
}
function di(e, t, n) {
	(t !== 'number' || Qr(e.ownerDocument) !== e) &&
		(n == null
			? (e.defaultValue = '' + e._wrapperState.initialValue)
			: e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var An = Array.isArray;
function qt(e, t, n, r) {
	if (((e = e.options), t)) {
		t = {};
		for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
		for (n = 0; n < e.length; n++)
			(l = t.hasOwnProperty('$' + e[n].value)),
				e[n].selected !== l && (e[n].selected = l),
				l && r && (e[n].defaultSelected = !0);
	} else {
		for (n = '' + mt(n), t = null, l = 0; l < e.length; l++) {
			if (e[l].value === n) {
				(e[l].selected = !0), r && (e[l].defaultSelected = !0);
				return;
			}
			t !== null || e[l].disabled || (t = e[l]);
		}
		t !== null && (t.selected = !0);
	}
}
function pi(e, t) {
	if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
	return H({}, t, {
		value: void 0,
		defaultValue: void 0,
		children: '' + e._wrapperState.initialValue,
	});
}
function nu(e, t) {
	var n = t.value;
	if (n == null) {
		if (((n = t.children), (t = t.defaultValue), n != null)) {
			if (t != null) throw Error(y(92));
			if (An(n)) {
				if (1 < n.length) throw Error(y(93));
				n = n[0];
			}
			t = n;
		}
		t == null && (t = ''), (n = t);
	}
	e._wrapperState = { initialValue: mt(n) };
}
function Ss(e, t) {
	var n = mt(t.value),
		r = mt(t.defaultValue);
	n != null &&
		((n = '' + n),
		n !== e.value && (e.value = n),
		t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
		r != null && (e.defaultValue = '' + r);
}
function ru(e) {
	var t = e.textContent;
	t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Es(e) {
	switch (e) {
		case 'svg':
			return 'http://www.w3.org/2000/svg';
		case 'math':
			return 'http://www.w3.org/1998/Math/MathML';
		default:
			return 'http://www.w3.org/1999/xhtml';
	}
}
function mi(e, t) {
	return e == null || e === 'http://www.w3.org/1999/xhtml'
		? Es(t)
		: e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
		? 'http://www.w3.org/1999/xhtml'
		: e;
}
var dr,
	Ns = (function (e) {
		return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
			? function (t, n, r, l) {
					MSApp.execUnsafeLocalFunction(function () {
						return e(t, n, r, l);
					});
			  }
			: e;
	})(function (e, t) {
		if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
			e.innerHTML = t;
		else {
			for (
				dr = dr || document.createElement('div'),
					dr.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
					t = dr.firstChild;
				e.firstChild;

			)
				e.removeChild(e.firstChild);
			for (; t.firstChild; ) e.appendChild(t.firstChild);
		}
	});
function Un(e, t) {
	if (t) {
		var n = e.firstChild;
		if (n && n === e.lastChild && n.nodeType === 3) {
			n.nodeValue = t;
			return;
		}
	}
	e.textContent = t;
}
var Ln = {
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
	Zc = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Ln).forEach(function (e) {
	Zc.forEach(function (t) {
		(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ln[t] = Ln[e]);
	});
});
function Cs(e, t, n) {
	return t == null || typeof t == 'boolean' || t === ''
		? ''
		: n || typeof t != 'number' || t === 0 || (Ln.hasOwnProperty(e) && Ln[e])
		? ('' + t).trim()
		: t + 'px';
}
function As(e, t) {
	e = e.style;
	for (var n in t)
		if (t.hasOwnProperty(n)) {
			var r = n.indexOf('--') === 0,
				l = Cs(n, t[n], r);
			n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l);
		}
}
var Jc = H(
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
function hi(e, t) {
	if (t) {
		if (Jc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
			throw Error(y(137, e));
		if (t.dangerouslySetInnerHTML != null) {
			if (t.children != null) throw Error(y(60));
			if (
				typeof t.dangerouslySetInnerHTML != 'object' ||
				!('__html' in t.dangerouslySetInnerHTML)
			)
				throw Error(y(61));
		}
		if (t.style != null && typeof t.style != 'object') throw Error(y(62));
	}
}
function vi(e, t) {
	if (e.indexOf('-') === -1) return typeof t.is == 'string';
	switch (e) {
		case 'annotation-xml':
		case 'color-profile':
		case 'font-face':
		case 'font-face-src':
		case 'font-face-uri':
		case 'font-face-format':
		case 'font-face-name':
		case 'missing-glyph':
			return !1;
		default:
			return !0;
	}
}
var gi = null;
function ao(e) {
	return (
		(e = e.target || e.srcElement || window),
		e.correspondingUseElement && (e = e.correspondingUseElement),
		e.nodeType === 3 ? e.parentNode : e
	);
}
var yi = null,
	bt = null,
	en = null;
function lu(e) {
	if ((e = lr(e))) {
		if (typeof yi != 'function') throw Error(y(280));
		var t = e.stateNode;
		t && ((t = gl(t)), yi(e.stateNode, e.type, t));
	}
}
function Ps(e) {
	bt ? (en ? en.push(e) : (en = [e])) : (bt = e);
}
function zs() {
	if (bt) {
		var e = bt,
			t = en;
		if (((en = bt = null), lu(e), t)) for (e = 0; e < t.length; e++) lu(t[e]);
	}
}
function Ls(e, t) {
	return e(t);
}
function _s() {}
var Ol = !1;
function Ts(e, t, n) {
	if (Ol) return e(t, n);
	Ol = !0;
	try {
		return Ls(e, t, n);
	} finally {
		(Ol = !1), (bt !== null || en !== null) && (_s(), zs());
	}
}
function Bn(e, t) {
	var n = e.stateNode;
	if (n === null) return null;
	var r = gl(n);
	if (r === null) return null;
	n = r[t];
	e: switch (t) {
		case 'onClick':
		case 'onClickCapture':
		case 'onDoubleClick':
		case 'onDoubleClickCapture':
		case 'onMouseDown':
		case 'onMouseDownCapture':
		case 'onMouseMove':
		case 'onMouseMoveCapture':
		case 'onMouseUp':
		case 'onMouseUpCapture':
		case 'onMouseEnter':
			(r = !r.disabled) ||
				((e = e.type),
				(r = !(
					e === 'button' ||
					e === 'input' ||
					e === 'select' ||
					e === 'textarea'
				))),
				(e = !r);
			break e;
		default:
			e = !1;
	}
	if (e) return null;
	if (n && typeof n != 'function') throw Error(y(231, t, typeof n));
	return n;
}
var xi = !1;
if (Ke)
	try {
		var gn = {};
		Object.defineProperty(gn, 'passive', {
			get: function () {
				xi = !0;
			},
		}),
			window.addEventListener('test', gn, gn),
			window.removeEventListener('test', gn, gn);
	} catch {
		xi = !1;
	}
function qc(e, t, n, r, l, i, o, u, s) {
	var c = Array.prototype.slice.call(arguments, 3);
	try {
		t.apply(n, c);
	} catch (h) {
		this.onError(h);
	}
}
var _n = !1,
	$r = null,
	Wr = !1,
	wi = null,
	bc = {
		onError: function (e) {
			(_n = !0), ($r = e);
		},
	};
function ef(e, t, n, r, l, i, o, u, s) {
	(_n = !1), ($r = null), qc.apply(bc, arguments);
}
function tf(e, t, n, r, l, i, o, u, s) {
	if ((ef.apply(this, arguments), _n)) {
		if (_n) {
			var c = $r;
			(_n = !1), ($r = null);
		} else throw Error(y(198));
		Wr || ((Wr = !0), (wi = c));
	}
}
function It(e) {
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
function Rs(e) {
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
function iu(e) {
	if (It(e) !== e) throw Error(y(188));
}
function nf(e) {
	var t = e.alternate;
	if (!t) {
		if (((t = It(e)), t === null)) throw Error(y(188));
		return t !== e ? null : e;
	}
	for (var n = e, r = t; ; ) {
		var l = n.return;
		if (l === null) break;
		var i = l.alternate;
		if (i === null) {
			if (((r = l.return), r !== null)) {
				n = r;
				continue;
			}
			break;
		}
		if (l.child === i.child) {
			for (i = l.child; i; ) {
				if (i === n) return iu(l), e;
				if (i === r) return iu(l), t;
				i = i.sibling;
			}
			throw Error(y(188));
		}
		if (n.return !== r.return) (n = l), (r = i);
		else {
			for (var o = !1, u = l.child; u; ) {
				if (u === n) {
					(o = !0), (n = l), (r = i);
					break;
				}
				if (u === r) {
					(o = !0), (r = l), (n = i);
					break;
				}
				u = u.sibling;
			}
			if (!o) {
				for (u = i.child; u; ) {
					if (u === n) {
						(o = !0), (n = i), (r = l);
						break;
					}
					if (u === r) {
						(o = !0), (r = i), (n = l);
						break;
					}
					u = u.sibling;
				}
				if (!o) throw Error(y(189));
			}
		}
		if (n.alternate !== r) throw Error(y(190));
	}
	if (n.tag !== 3) throw Error(y(188));
	return n.stateNode.current === n ? e : t;
}
function Ms(e) {
	return (e = nf(e)), e !== null ? Os(e) : null;
}
function Os(e) {
	if (e.tag === 5 || e.tag === 6) return e;
	for (e = e.child; e !== null; ) {
		var t = Os(e);
		if (t !== null) return t;
		e = e.sibling;
	}
	return null;
}
var Ds = we.unstable_scheduleCallback,
	ou = we.unstable_cancelCallback,
	rf = we.unstable_shouldYield,
	lf = we.unstable_requestPaint,
	Y = we.unstable_now,
	of = we.unstable_getCurrentPriorityLevel,
	co = we.unstable_ImmediatePriority,
	js = we.unstable_UserBlockingPriority,
	Hr = we.unstable_NormalPriority,
	uf = we.unstable_LowPriority,
	Is = we.unstable_IdlePriority,
	pl = null,
	Ue = null;
function sf(e) {
	if (Ue && typeof Ue.onCommitFiberRoot == 'function')
		try {
			Ue.onCommitFiberRoot(pl, e, void 0, (e.current.flags & 128) === 128);
		} catch {}
}
var Me = Math.clz32 ? Math.clz32 : ff,
	af = Math.log,
	cf = Math.LN2;
function ff(e) {
	return (e >>>= 0), e === 0 ? 32 : (31 - ((af(e) / cf) | 0)) | 0;
}
var pr = 64,
	mr = 4194304;
function Pn(e) {
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
function Vr(e, t) {
	var n = e.pendingLanes;
	if (n === 0) return 0;
	var r = 0,
		l = e.suspendedLanes,
		i = e.pingedLanes,
		o = n & 268435455;
	if (o !== 0) {
		var u = o & ~l;
		u !== 0 ? (r = Pn(u)) : ((i &= o), i !== 0 && (r = Pn(i)));
	} else (o = n & ~l), o !== 0 ? (r = Pn(o)) : i !== 0 && (r = Pn(i));
	if (r === 0) return 0;
	if (
		t !== 0 &&
		t !== r &&
		!(t & l) &&
		((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
	)
		return t;
	if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
		for (e = e.entanglements, t &= r; 0 < t; )
			(n = 31 - Me(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
	return r;
}
function df(e, t) {
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
function pf(e, t) {
	for (
		var n = e.suspendedLanes,
			r = e.pingedLanes,
			l = e.expirationTimes,
			i = e.pendingLanes;
		0 < i;

	) {
		var o = 31 - Me(i),
			u = 1 << o,
			s = l[o];
		s === -1
			? (!(u & n) || u & r) && (l[o] = df(u, t))
			: s <= t && (e.expiredLanes |= u),
			(i &= ~u);
	}
}
function ki(e) {
	return (
		(e = e.pendingLanes & -1073741825),
		e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
	);
}
function Fs() {
	var e = pr;
	return (pr <<= 1), !(pr & 4194240) && (pr = 64), e;
}
function Dl(e) {
	for (var t = [], n = 0; 31 > n; n++) t.push(e);
	return t;
}
function nr(e, t, n) {
	(e.pendingLanes |= t),
		t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
		(e = e.eventTimes),
		(t = 31 - Me(t)),
		(e[t] = n);
}
function mf(e, t) {
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
		var l = 31 - Me(n),
			i = 1 << l;
		(t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
	}
}
function fo(e, t) {
	var n = (e.entangledLanes |= t);
	for (e = e.entanglements; n; ) {
		var r = 31 - Me(n),
			l = 1 << r;
		(l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
	}
}
var j = 0;
function Us(e) {
	return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Bs,
	po,
	Qs,
	$s,
	Ws,
	Si = !1,
	hr = [],
	ot = null,
	ut = null,
	st = null,
	Qn = new Map(),
	$n = new Map(),
	nt = [],
	hf =
		'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
			' '
		);
function uu(e, t) {
	switch (e) {
		case 'focusin':
		case 'focusout':
			ot = null;
			break;
		case 'dragenter':
		case 'dragleave':
			ut = null;
			break;
		case 'mouseover':
		case 'mouseout':
			st = null;
			break;
		case 'pointerover':
		case 'pointerout':
			Qn.delete(t.pointerId);
			break;
		case 'gotpointercapture':
		case 'lostpointercapture':
			$n.delete(t.pointerId);
	}
}
function yn(e, t, n, r, l, i) {
	return e === null || e.nativeEvent !== i
		? ((e = {
				blockedOn: t,
				domEventName: n,
				eventSystemFlags: r,
				nativeEvent: i,
				targetContainers: [l],
		  }),
		  t !== null && ((t = lr(t)), t !== null && po(t)),
		  e)
		: ((e.eventSystemFlags |= r),
		  (t = e.targetContainers),
		  l !== null && t.indexOf(l) === -1 && t.push(l),
		  e);
}
function vf(e, t, n, r, l) {
	switch (t) {
		case 'focusin':
			return (ot = yn(ot, e, t, n, r, l)), !0;
		case 'dragenter':
			return (ut = yn(ut, e, t, n, r, l)), !0;
		case 'mouseover':
			return (st = yn(st, e, t, n, r, l)), !0;
		case 'pointerover':
			var i = l.pointerId;
			return Qn.set(i, yn(Qn.get(i) || null, e, t, n, r, l)), !0;
		case 'gotpointercapture':
			return (
				(i = l.pointerId), $n.set(i, yn($n.get(i) || null, e, t, n, r, l)), !0
			);
	}
	return !1;
}
function Hs(e) {
	var t = Ct(e.target);
	if (t !== null) {
		var n = It(t);
		if (n !== null) {
			if (((t = n.tag), t === 13)) {
				if (((t = Rs(n)), t !== null)) {
					(e.blockedOn = t),
						Ws(e.priority, function () {
							Qs(n);
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
function Lr(e) {
	if (e.blockedOn !== null) return !1;
	for (var t = e.targetContainers; 0 < t.length; ) {
		var n = Ei(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
		if (n === null) {
			n = e.nativeEvent;
			var r = new n.constructor(n.type, n);
			(gi = r), n.target.dispatchEvent(r), (gi = null);
		} else return (t = lr(n)), t !== null && po(t), (e.blockedOn = n), !1;
		t.shift();
	}
	return !0;
}
function su(e, t, n) {
	Lr(e) && n.delete(t);
}
function gf() {
	(Si = !1),
		ot !== null && Lr(ot) && (ot = null),
		ut !== null && Lr(ut) && (ut = null),
		st !== null && Lr(st) && (st = null),
		Qn.forEach(su),
		$n.forEach(su);
}
function xn(e, t) {
	e.blockedOn === t &&
		((e.blockedOn = null),
		Si ||
			((Si = !0),
			we.unstable_scheduleCallback(we.unstable_NormalPriority, gf)));
}
function Wn(e) {
	function t(l) {
		return xn(l, e);
	}
	if (0 < hr.length) {
		xn(hr[0], e);
		for (var n = 1; n < hr.length; n++) {
			var r = hr[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
	}
	for (
		ot !== null && xn(ot, e),
			ut !== null && xn(ut, e),
			st !== null && xn(st, e),
			Qn.forEach(t),
			$n.forEach(t),
			n = 0;
		n < nt.length;
		n++
	)
		(r = nt[n]), r.blockedOn === e && (r.blockedOn = null);
	for (; 0 < nt.length && ((n = nt[0]), n.blockedOn === null); )
		Hs(n), n.blockedOn === null && nt.shift();
}
var tn = Ze.ReactCurrentBatchConfig,
	Kr = !0;
function yf(e, t, n, r) {
	var l = j,
		i = tn.transition;
	tn.transition = null;
	try {
		(j = 1), mo(e, t, n, r);
	} finally {
		(j = l), (tn.transition = i);
	}
}
function xf(e, t, n, r) {
	var l = j,
		i = tn.transition;
	tn.transition = null;
	try {
		(j = 4), mo(e, t, n, r);
	} finally {
		(j = l), (tn.transition = i);
	}
}
function mo(e, t, n, r) {
	if (Kr) {
		var l = Ei(e, t, n, r);
		if (l === null) Vl(e, t, r, Yr, n), uu(e, r);
		else if (vf(l, e, t, n, r)) r.stopPropagation();
		else if ((uu(e, r), t & 4 && -1 < hf.indexOf(e))) {
			for (; l !== null; ) {
				var i = lr(l);
				if (
					(i !== null && Bs(i),
					(i = Ei(e, t, n, r)),
					i === null && Vl(e, t, r, Yr, n),
					i === l)
				)
					break;
				l = i;
			}
			l !== null && r.stopPropagation();
		} else Vl(e, t, r, null, n);
	}
}
var Yr = null;
function Ei(e, t, n, r) {
	if (((Yr = null), (e = ao(r)), (e = Ct(e)), e !== null))
		if (((t = It(e)), t === null)) e = null;
		else if (((n = t.tag), n === 13)) {
			if (((e = Rs(t)), e !== null)) return e;
			e = null;
		} else if (n === 3) {
			if (t.stateNode.current.memoizedState.isDehydrated)
				return t.tag === 3 ? t.stateNode.containerInfo : null;
			e = null;
		} else t !== e && (e = null);
	return (Yr = e), null;
}
function Vs(e) {
	switch (e) {
		case 'cancel':
		case 'click':
		case 'close':
		case 'contextmenu':
		case 'copy':
		case 'cut':
		case 'auxclick':
		case 'dblclick':
		case 'dragend':
		case 'dragstart':
		case 'drop':
		case 'focusin':
		case 'focusout':
		case 'input':
		case 'invalid':
		case 'keydown':
		case 'keypress':
		case 'keyup':
		case 'mousedown':
		case 'mouseup':
		case 'paste':
		case 'pause':
		case 'play':
		case 'pointercancel':
		case 'pointerdown':
		case 'pointerup':
		case 'ratechange':
		case 'reset':
		case 'resize':
		case 'seeked':
		case 'submit':
		case 'touchcancel':
		case 'touchend':
		case 'touchstart':
		case 'volumechange':
		case 'change':
		case 'selectionchange':
		case 'textInput':
		case 'compositionstart':
		case 'compositionend':
		case 'compositionupdate':
		case 'beforeblur':
		case 'afterblur':
		case 'beforeinput':
		case 'blur':
		case 'fullscreenchange':
		case 'focus':
		case 'hashchange':
		case 'popstate':
		case 'select':
		case 'selectstart':
			return 1;
		case 'drag':
		case 'dragenter':
		case 'dragexit':
		case 'dragleave':
		case 'dragover':
		case 'mousemove':
		case 'mouseout':
		case 'mouseover':
		case 'pointermove':
		case 'pointerout':
		case 'pointerover':
		case 'scroll':
		case 'toggle':
		case 'touchmove':
		case 'wheel':
		case 'mouseenter':
		case 'mouseleave':
		case 'pointerenter':
		case 'pointerleave':
			return 4;
		case 'message':
			switch (of()) {
				case co:
					return 1;
				case js:
					return 4;
				case Hr:
				case uf:
					return 16;
				case Is:
					return 536870912;
				default:
					return 16;
			}
		default:
			return 16;
	}
}
var lt = null,
	ho = null,
	_r = null;
function Ks() {
	if (_r) return _r;
	var e,
		t = ho,
		n = t.length,
		r,
		l = 'value' in lt ? lt.value : lt.textContent,
		i = l.length;
	for (e = 0; e < n && t[e] === l[e]; e++);
	var o = n - e;
	for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
	return (_r = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Tr(e) {
	var t = e.keyCode;
	return (
		'charCode' in e
			? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
			: (e = t),
		e === 10 && (e = 13),
		32 <= e || e === 13 ? e : 0
	);
}
function vr() {
	return !0;
}
function au() {
	return !1;
}
function Se(e) {
	function t(n, r, l, i, o) {
		(this._reactName = n),
			(this._targetInst = l),
			(this.type = r),
			(this.nativeEvent = i),
			(this.target = o),
			(this.currentTarget = null);
		for (var u in e)
			e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
		return (
			(this.isDefaultPrevented = (
				i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
			)
				? vr
				: au),
			(this.isPropagationStopped = au),
			this
		);
	}
	return (
		H(t.prototype, {
			preventDefault: function () {
				this.defaultPrevented = !0;
				var n = this.nativeEvent;
				n &&
					(n.preventDefault
						? n.preventDefault()
						: typeof n.returnValue != 'unknown' && (n.returnValue = !1),
					(this.isDefaultPrevented = vr));
			},
			stopPropagation: function () {
				var n = this.nativeEvent;
				n &&
					(n.stopPropagation
						? n.stopPropagation()
						: typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
					(this.isPropagationStopped = vr));
			},
			persist: function () {},
			isPersistent: vr,
		}),
		t
	);
}
var pn = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function (e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0,
	},
	vo = Se(pn),
	rr = H({}, pn, { view: 0, detail: 0 }),
	wf = Se(rr),
	jl,
	Il,
	wn,
	ml = H({}, rr, {
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
		getModifierState: go,
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
			return 'movementX' in e
				? e.movementX
				: (e !== wn &&
						(wn && e.type === 'mousemove'
							? ((jl = e.screenX - wn.screenX), (Il = e.screenY - wn.screenY))
							: (Il = jl = 0),
						(wn = e)),
				  jl);
		},
		movementY: function (e) {
			return 'movementY' in e ? e.movementY : Il;
		},
	}),
	cu = Se(ml),
	kf = H({}, ml, { dataTransfer: 0 }),
	Sf = Se(kf),
	Ef = H({}, rr, { relatedTarget: 0 }),
	Fl = Se(Ef),
	Nf = H({}, pn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
	Cf = Se(Nf),
	Af = H({}, pn, {
		clipboardData: function (e) {
			return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
		},
	}),
	Pf = Se(Af),
	zf = H({}, pn, { data: 0 }),
	fu = Se(zf),
	Lf = {
		Esc: 'Escape',
		Spacebar: ' ',
		Left: 'ArrowLeft',
		Up: 'ArrowUp',
		Right: 'ArrowRight',
		Down: 'ArrowDown',
		Del: 'Delete',
		Win: 'OS',
		Menu: 'ContextMenu',
		Apps: 'ContextMenu',
		Scroll: 'ScrollLock',
		MozPrintableKey: 'Unidentified',
	},
	_f = {
		8: 'Backspace',
		9: 'Tab',
		12: 'Clear',
		13: 'Enter',
		16: 'Shift',
		17: 'Control',
		18: 'Alt',
		19: 'Pause',
		20: 'CapsLock',
		27: 'Escape',
		32: ' ',
		33: 'PageUp',
		34: 'PageDown',
		35: 'End',
		36: 'Home',
		37: 'ArrowLeft',
		38: 'ArrowUp',
		39: 'ArrowRight',
		40: 'ArrowDown',
		45: 'Insert',
		46: 'Delete',
		112: 'F1',
		113: 'F2',
		114: 'F3',
		115: 'F4',
		116: 'F5',
		117: 'F6',
		118: 'F7',
		119: 'F8',
		120: 'F9',
		121: 'F10',
		122: 'F11',
		123: 'F12',
		144: 'NumLock',
		145: 'ScrollLock',
		224: 'Meta',
	},
	Tf = {
		Alt: 'altKey',
		Control: 'ctrlKey',
		Meta: 'metaKey',
		Shift: 'shiftKey',
	};
function Rf(e) {
	var t = this.nativeEvent;
	return t.getModifierState ? t.getModifierState(e) : (e = Tf[e]) ? !!t[e] : !1;
}
function go() {
	return Rf;
}
var Mf = H({}, rr, {
		key: function (e) {
			if (e.key) {
				var t = Lf[e.key] || e.key;
				if (t !== 'Unidentified') return t;
			}
			return e.type === 'keypress'
				? ((e = Tr(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
				: e.type === 'keydown' || e.type === 'keyup'
				? _f[e.keyCode] || 'Unidentified'
				: '';
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: go,
		charCode: function (e) {
			return e.type === 'keypress' ? Tr(e) : 0;
		},
		keyCode: function (e) {
			return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
		},
		which: function (e) {
			return e.type === 'keypress'
				? Tr(e)
				: e.type === 'keydown' || e.type === 'keyup'
				? e.keyCode
				: 0;
		},
	}),
	Of = Se(Mf),
	Df = H({}, ml, {
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
	du = Se(Df),
	jf = H({}, rr, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: go,
	}),
	If = Se(jf),
	Ff = H({}, pn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
	Uf = Se(Ff),
	Bf = H({}, ml, {
		deltaX: function (e) {
			return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function (e) {
			return 'deltaY' in e
				? e.deltaY
				: 'wheelDeltaY' in e
				? -e.wheelDeltaY
				: 'wheelDelta' in e
				? -e.wheelDelta
				: 0;
		},
		deltaZ: 0,
		deltaMode: 0,
	}),
	Qf = Se(Bf),
	$f = [9, 13, 27, 32],
	yo = Ke && 'CompositionEvent' in window,
	Tn = null;
Ke && 'documentMode' in document && (Tn = document.documentMode);
var Wf = Ke && 'TextEvent' in window && !Tn,
	Ys = Ke && (!yo || (Tn && 8 < Tn && 11 >= Tn)),
	pu = String.fromCharCode(32),
	mu = !1;
function Xs(e, t) {
	switch (e) {
		case 'keyup':
			return $f.indexOf(t.keyCode) !== -1;
		case 'keydown':
			return t.keyCode !== 229;
		case 'keypress':
		case 'mousedown':
		case 'focusout':
			return !0;
		default:
			return !1;
	}
}
function Gs(e) {
	return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var $t = !1;
function Hf(e, t) {
	switch (e) {
		case 'compositionend':
			return Gs(t);
		case 'keypress':
			return t.which !== 32 ? null : ((mu = !0), pu);
		case 'textInput':
			return (e = t.data), e === pu && mu ? null : e;
		default:
			return null;
	}
}
function Vf(e, t) {
	if ($t)
		return e === 'compositionend' || (!yo && Xs(e, t))
			? ((e = Ks()), (_r = ho = lt = null), ($t = !1), e)
			: null;
	switch (e) {
		case 'paste':
			return null;
		case 'keypress':
			if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
				if (t.char && 1 < t.char.length) return t.char;
				if (t.which) return String.fromCharCode(t.which);
			}
			return null;
		case 'compositionend':
			return Ys && t.locale !== 'ko' ? null : t.data;
		default:
			return null;
	}
}
var Kf = {
	color: !0,
	date: !0,
	datetime: !0,
	'datetime-local': !0,
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
function hu(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return t === 'input' ? !!Kf[e.type] : t === 'textarea';
}
function Zs(e, t, n, r) {
	Ps(r),
		(t = Xr(t, 'onChange')),
		0 < t.length &&
			((n = new vo('onChange', 'change', null, n, r)),
			e.push({ event: n, listeners: t }));
}
var Rn = null,
	Hn = null;
function Yf(e) {
	ua(e, 0);
}
function hl(e) {
	var t = Vt(e);
	if (ws(t)) return e;
}
function Xf(e, t) {
	if (e === 'change') return t;
}
var Js = !1;
if (Ke) {
	var Ul;
	if (Ke) {
		var Bl = 'oninput' in document;
		if (!Bl) {
			var vu = document.createElement('div');
			vu.setAttribute('oninput', 'return;'),
				(Bl = typeof vu.oninput == 'function');
		}
		Ul = Bl;
	} else Ul = !1;
	Js = Ul && (!document.documentMode || 9 < document.documentMode);
}
function gu() {
	Rn && (Rn.detachEvent('onpropertychange', qs), (Hn = Rn = null));
}
function qs(e) {
	if (e.propertyName === 'value' && hl(Hn)) {
		var t = [];
		Zs(t, Hn, e, ao(e)), Ts(Yf, t);
	}
}
function Gf(e, t, n) {
	e === 'focusin'
		? (gu(), (Rn = t), (Hn = n), Rn.attachEvent('onpropertychange', qs))
		: e === 'focusout' && gu();
}
function Zf(e) {
	if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
		return hl(Hn);
}
function Jf(e, t) {
	if (e === 'click') return hl(t);
}
function qf(e, t) {
	if (e === 'input' || e === 'change') return hl(t);
}
function bf(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var De = typeof Object.is == 'function' ? Object.is : bf;
function Vn(e, t) {
	if (De(e, t)) return !0;
	if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
		return !1;
	var n = Object.keys(e),
		r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (r = 0; r < n.length; r++) {
		var l = n[r];
		if (!ii.call(t, l) || !De(e[l], t[l])) return !1;
	}
	return !0;
}
function yu(e) {
	for (; e && e.firstChild; ) e = e.firstChild;
	return e;
}
function xu(e, t) {
	var n = yu(e);
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
		n = yu(n);
	}
}
function bs(e, t) {
	return e && t
		? e === t
			? !0
			: e && e.nodeType === 3
			? !1
			: t && t.nodeType === 3
			? bs(e, t.parentNode)
			: 'contains' in e
			? e.contains(t)
			: e.compareDocumentPosition
			? !!(e.compareDocumentPosition(t) & 16)
			: !1
		: !1;
}
function ea() {
	for (var e = window, t = Qr(); t instanceof e.HTMLIFrameElement; ) {
		try {
			var n = typeof t.contentWindow.location.href == 'string';
		} catch {
			n = !1;
		}
		if (n) e = t.contentWindow;
		else break;
		t = Qr(e.document);
	}
	return t;
}
function xo(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return (
		t &&
		((t === 'input' &&
			(e.type === 'text' ||
				e.type === 'search' ||
				e.type === 'tel' ||
				e.type === 'url' ||
				e.type === 'password')) ||
			t === 'textarea' ||
			e.contentEditable === 'true')
	);
}
function ed(e) {
	var t = ea(),
		n = e.focusedElem,
		r = e.selectionRange;
	if (
		t !== n &&
		n &&
		n.ownerDocument &&
		bs(n.ownerDocument.documentElement, n)
	) {
		if (r !== null && xo(n)) {
			if (
				((t = r.start),
				(e = r.end),
				e === void 0 && (e = t),
				'selectionStart' in n)
			)
				(n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
			else if (
				((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
				e.getSelection)
			) {
				e = e.getSelection();
				var l = n.textContent.length,
					i = Math.min(r.start, l);
				(r = r.end === void 0 ? i : Math.min(r.end, l)),
					!e.extend && i > r && ((l = r), (r = i), (i = l)),
					(l = xu(n, i));
				var o = xu(n, r);
				l &&
					o &&
					(e.rangeCount !== 1 ||
						e.anchorNode !== l.node ||
						e.anchorOffset !== l.offset ||
						e.focusNode !== o.node ||
						e.focusOffset !== o.offset) &&
					((t = t.createRange()),
					t.setStart(l.node, l.offset),
					e.removeAllRanges(),
					i > r
						? (e.addRange(t), e.extend(o.node, o.offset))
						: (t.setEnd(o.node, o.offset), e.addRange(t)));
			}
		}
		for (t = [], e = n; (e = e.parentNode); )
			e.nodeType === 1 &&
				t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
		for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
			(e = t[n]),
				(e.element.scrollLeft = e.left),
				(e.element.scrollTop = e.top);
	}
}
var td = Ke && 'documentMode' in document && 11 >= document.documentMode,
	Wt = null,
	Ni = null,
	Mn = null,
	Ci = !1;
function wu(e, t, n) {
	var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
	Ci ||
		Wt == null ||
		Wt !== Qr(r) ||
		((r = Wt),
		'selectionStart' in r && xo(r)
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
		(Mn && Vn(Mn, r)) ||
			((Mn = r),
			(r = Xr(Ni, 'onSelect')),
			0 < r.length &&
				((t = new vo('onSelect', 'select', null, t, n)),
				e.push({ event: t, listeners: r }),
				(t.target = Wt))));
}
function gr(e, t) {
	var n = {};
	return (
		(n[e.toLowerCase()] = t.toLowerCase()),
		(n['Webkit' + e] = 'webkit' + t),
		(n['Moz' + e] = 'moz' + t),
		n
	);
}
var Ht = {
		animationend: gr('Animation', 'AnimationEnd'),
		animationiteration: gr('Animation', 'AnimationIteration'),
		animationstart: gr('Animation', 'AnimationStart'),
		transitionend: gr('Transition', 'TransitionEnd'),
	},
	Ql = {},
	ta = {};
Ke &&
	((ta = document.createElement('div').style),
	'AnimationEvent' in window ||
		(delete Ht.animationend.animation,
		delete Ht.animationiteration.animation,
		delete Ht.animationstart.animation),
	'TransitionEvent' in window || delete Ht.transitionend.transition);
function vl(e) {
	if (Ql[e]) return Ql[e];
	if (!Ht[e]) return e;
	var t = Ht[e],
		n;
	for (n in t) if (t.hasOwnProperty(n) && n in ta) return (Ql[e] = t[n]);
	return e;
}
var na = vl('animationend'),
	ra = vl('animationiteration'),
	la = vl('animationstart'),
	ia = vl('transitionend'),
	oa = new Map(),
	ku =
		'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
			' '
		);
function gt(e, t) {
	oa.set(e, t), jt(t, [e]);
}
for (var $l = 0; $l < ku.length; $l++) {
	var Wl = ku[$l],
		nd = Wl.toLowerCase(),
		rd = Wl[0].toUpperCase() + Wl.slice(1);
	gt(nd, 'on' + rd);
}
gt(na, 'onAnimationEnd');
gt(ra, 'onAnimationIteration');
gt(la, 'onAnimationStart');
gt('dblclick', 'onDoubleClick');
gt('focusin', 'onFocus');
gt('focusout', 'onBlur');
gt(ia, 'onTransitionEnd');
ln('onMouseEnter', ['mouseout', 'mouseover']);
ln('onMouseLeave', ['mouseout', 'mouseover']);
ln('onPointerEnter', ['pointerout', 'pointerover']);
ln('onPointerLeave', ['pointerout', 'pointerover']);
jt(
	'onChange',
	'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
jt(
	'onSelect',
	'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
		' '
	)
);
jt('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
jt(
	'onCompositionEnd',
	'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
jt(
	'onCompositionStart',
	'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
jt(
	'onCompositionUpdate',
	'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var zn =
		'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
			' '
		),
	ld = new Set('cancel close invalid load scroll toggle'.split(' ').concat(zn));
function Su(e, t, n) {
	var r = e.type || 'unknown-event';
	(e.currentTarget = n), tf(r, t, void 0, e), (e.currentTarget = null);
}
function ua(e, t) {
	t = (t & 4) !== 0;
	for (var n = 0; n < e.length; n++) {
		var r = e[n],
			l = r.event;
		r = r.listeners;
		e: {
			var i = void 0;
			if (t)
				for (var o = r.length - 1; 0 <= o; o--) {
					var u = r[o],
						s = u.instance,
						c = u.currentTarget;
					if (((u = u.listener), s !== i && l.isPropagationStopped())) break e;
					Su(l, u, c), (i = s);
				}
			else
				for (o = 0; o < r.length; o++) {
					if (
						((u = r[o]),
						(s = u.instance),
						(c = u.currentTarget),
						(u = u.listener),
						s !== i && l.isPropagationStopped())
					)
						break e;
					Su(l, u, c), (i = s);
				}
		}
	}
	if (Wr) throw ((e = wi), (Wr = !1), (wi = null), e);
}
function F(e, t) {
	var n = t[_i];
	n === void 0 && (n = t[_i] = new Set());
	var r = e + '__bubble';
	n.has(r) || (sa(t, e, 2, !1), n.add(r));
}
function Hl(e, t, n) {
	var r = 0;
	t && (r |= 4), sa(n, e, r, t);
}
var yr = '_reactListening' + Math.random().toString(36).slice(2);
function Kn(e) {
	if (!e[yr]) {
		(e[yr] = !0),
			hs.forEach(function (n) {
				n !== 'selectionchange' && (ld.has(n) || Hl(n, !1, e), Hl(n, !0, e));
			});
		var t = e.nodeType === 9 ? e : e.ownerDocument;
		t === null || t[yr] || ((t[yr] = !0), Hl('selectionchange', !1, t));
	}
}
function sa(e, t, n, r) {
	switch (Vs(t)) {
		case 1:
			var l = yf;
			break;
		case 4:
			l = xf;
			break;
		default:
			l = mo;
	}
	(n = l.bind(null, t, n, e)),
		(l = void 0),
		!xi ||
			(t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
			(l = !0),
		r
			? l !== void 0
				? e.addEventListener(t, n, { capture: !0, passive: l })
				: e.addEventListener(t, n, !0)
			: l !== void 0
			? e.addEventListener(t, n, { passive: l })
			: e.addEventListener(t, n, !1);
}
function Vl(e, t, n, r, l) {
	var i = r;
	if (!(t & 1) && !(t & 2) && r !== null)
		e: for (;;) {
			if (r === null) return;
			var o = r.tag;
			if (o === 3 || o === 4) {
				var u = r.stateNode.containerInfo;
				if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
				if (o === 4)
					for (o = r.return; o !== null; ) {
						var s = o.tag;
						if (
							(s === 3 || s === 4) &&
							((s = o.stateNode.containerInfo),
							s === l || (s.nodeType === 8 && s.parentNode === l))
						)
							return;
						o = o.return;
					}
				for (; u !== null; ) {
					if (((o = Ct(u)), o === null)) return;
					if (((s = o.tag), s === 5 || s === 6)) {
						r = i = o;
						continue e;
					}
					u = u.parentNode;
				}
			}
			r = r.return;
		}
	Ts(function () {
		var c = i,
			h = ao(n),
			m = [];
		e: {
			var p = oa.get(e);
			if (p !== void 0) {
				var x = vo,
					w = e;
				switch (e) {
					case 'keypress':
						if (Tr(n) === 0) break e;
					case 'keydown':
					case 'keyup':
						x = Of;
						break;
					case 'focusin':
						(w = 'focus'), (x = Fl);
						break;
					case 'focusout':
						(w = 'blur'), (x = Fl);
						break;
					case 'beforeblur':
					case 'afterblur':
						x = Fl;
						break;
					case 'click':
						if (n.button === 2) break e;
					case 'auxclick':
					case 'dblclick':
					case 'mousedown':
					case 'mousemove':
					case 'mouseup':
					case 'mouseout':
					case 'mouseover':
					case 'contextmenu':
						x = cu;
						break;
					case 'drag':
					case 'dragend':
					case 'dragenter':
					case 'dragexit':
					case 'dragleave':
					case 'dragover':
					case 'dragstart':
					case 'drop':
						x = Sf;
						break;
					case 'touchcancel':
					case 'touchend':
					case 'touchmove':
					case 'touchstart':
						x = If;
						break;
					case na:
					case ra:
					case la:
						x = Cf;
						break;
					case ia:
						x = Uf;
						break;
					case 'scroll':
						x = wf;
						break;
					case 'wheel':
						x = Qf;
						break;
					case 'copy':
					case 'cut':
					case 'paste':
						x = Pf;
						break;
					case 'gotpointercapture':
					case 'lostpointercapture':
					case 'pointercancel':
					case 'pointerdown':
					case 'pointermove':
					case 'pointerout':
					case 'pointerover':
					case 'pointerup':
						x = du;
				}
				var k = (t & 4) !== 0,
					D = !k && e === 'scroll',
					f = k ? (p !== null ? p + 'Capture' : null) : p;
				k = [];
				for (var a = c, d; a !== null; ) {
					d = a;
					var g = d.stateNode;
					if (
						(d.tag === 5 &&
							g !== null &&
							((d = g),
							f !== null && ((g = Bn(a, f)), g != null && k.push(Yn(a, g, d)))),
						D)
					)
						break;
					a = a.return;
				}
				0 < k.length &&
					((p = new x(p, w, null, n, h)), m.push({ event: p, listeners: k }));
			}
		}
		if (!(t & 7)) {
			e: {
				if (
					((p = e === 'mouseover' || e === 'pointerover'),
					(x = e === 'mouseout' || e === 'pointerout'),
					p &&
						n !== gi &&
						(w = n.relatedTarget || n.fromElement) &&
						(Ct(w) || w[Ye]))
				)
					break e;
				if (
					(x || p) &&
					((p =
						h.window === h
							? h
							: (p = h.ownerDocument)
							? p.defaultView || p.parentWindow
							: window),
					x
						? ((w = n.relatedTarget || n.toElement),
						  (x = c),
						  (w = w ? Ct(w) : null),
						  w !== null &&
								((D = It(w)), w !== D || (w.tag !== 5 && w.tag !== 6)) &&
								(w = null))
						: ((x = null), (w = c)),
					x !== w)
				) {
					if (
						((k = cu),
						(g = 'onMouseLeave'),
						(f = 'onMouseEnter'),
						(a = 'mouse'),
						(e === 'pointerout' || e === 'pointerover') &&
							((k = du),
							(g = 'onPointerLeave'),
							(f = 'onPointerEnter'),
							(a = 'pointer')),
						(D = x == null ? p : Vt(x)),
						(d = w == null ? p : Vt(w)),
						(p = new k(g, a + 'leave', x, n, h)),
						(p.target = D),
						(p.relatedTarget = d),
						(g = null),
						Ct(h) === c &&
							((k = new k(f, a + 'enter', w, n, h)),
							(k.target = d),
							(k.relatedTarget = D),
							(g = k)),
						(D = g),
						x && w)
					)
						t: {
							for (k = x, f = w, a = 0, d = k; d; d = Ft(d)) a++;
							for (d = 0, g = f; g; g = Ft(g)) d++;
							for (; 0 < a - d; ) (k = Ft(k)), a--;
							for (; 0 < d - a; ) (f = Ft(f)), d--;
							for (; a--; ) {
								if (k === f || (f !== null && k === f.alternate)) break t;
								(k = Ft(k)), (f = Ft(f));
							}
							k = null;
						}
					else k = null;
					x !== null && Eu(m, p, x, k, !1),
						w !== null && D !== null && Eu(m, D, w, k, !0);
				}
			}
			e: {
				if (
					((p = c ? Vt(c) : window),
					(x = p.nodeName && p.nodeName.toLowerCase()),
					x === 'select' || (x === 'input' && p.type === 'file'))
				)
					var S = Xf;
				else if (hu(p))
					if (Js) S = qf;
					else {
						S = Zf;
						var C = Gf;
					}
				else
					(x = p.nodeName) &&
						x.toLowerCase() === 'input' &&
						(p.type === 'checkbox' || p.type === 'radio') &&
						(S = Jf);
				if (S && (S = S(e, c))) {
					Zs(m, S, n, h);
					break e;
				}
				C && C(e, p, c),
					e === 'focusout' &&
						(C = p._wrapperState) &&
						C.controlled &&
						p.type === 'number' &&
						di(p, 'number', p.value);
			}
			switch (((C = c ? Vt(c) : window), e)) {
				case 'focusin':
					(hu(C) || C.contentEditable === 'true') &&
						((Wt = C), (Ni = c), (Mn = null));
					break;
				case 'focusout':
					Mn = Ni = Wt = null;
					break;
				case 'mousedown':
					Ci = !0;
					break;
				case 'contextmenu':
				case 'mouseup':
				case 'dragend':
					(Ci = !1), wu(m, n, h);
					break;
				case 'selectionchange':
					if (td) break;
				case 'keydown':
				case 'keyup':
					wu(m, n, h);
			}
			var A;
			if (yo)
				e: {
					switch (e) {
						case 'compositionstart':
							var P = 'onCompositionStart';
							break e;
						case 'compositionend':
							P = 'onCompositionEnd';
							break e;
						case 'compositionupdate':
							P = 'onCompositionUpdate';
							break e;
					}
					P = void 0;
				}
			else
				$t
					? Xs(e, n) && (P = 'onCompositionEnd')
					: e === 'keydown' && n.keyCode === 229 && (P = 'onCompositionStart');
			P &&
				(Ys &&
					n.locale !== 'ko' &&
					($t || P !== 'onCompositionStart'
						? P === 'onCompositionEnd' && $t && (A = Ks())
						: ((lt = h),
						  (ho = 'value' in lt ? lt.value : lt.textContent),
						  ($t = !0))),
				(C = Xr(c, P)),
				0 < C.length &&
					((P = new fu(P, e, null, n, h)),
					m.push({ event: P, listeners: C }),
					A ? (P.data = A) : ((A = Gs(n)), A !== null && (P.data = A)))),
				(A = Wf ? Hf(e, n) : Vf(e, n)) &&
					((c = Xr(c, 'onBeforeInput')),
					0 < c.length &&
						((h = new fu('onBeforeInput', 'beforeinput', null, n, h)),
						m.push({ event: h, listeners: c }),
						(h.data = A)));
		}
		ua(m, t);
	});
}
function Yn(e, t, n) {
	return { instance: e, listener: t, currentTarget: n };
}
function Xr(e, t) {
	for (var n = t + 'Capture', r = []; e !== null; ) {
		var l = e,
			i = l.stateNode;
		l.tag === 5 &&
			i !== null &&
			((l = i),
			(i = Bn(e, n)),
			i != null && r.unshift(Yn(e, i, l)),
			(i = Bn(e, t)),
			i != null && r.push(Yn(e, i, l))),
			(e = e.return);
	}
	return r;
}
function Ft(e) {
	if (e === null) return null;
	do e = e.return;
	while (e && e.tag !== 5);
	return e || null;
}
function Eu(e, t, n, r, l) {
	for (var i = t._reactName, o = []; n !== null && n !== r; ) {
		var u = n,
			s = u.alternate,
			c = u.stateNode;
		if (s !== null && s === r) break;
		u.tag === 5 &&
			c !== null &&
			((u = c),
			l
				? ((s = Bn(n, i)), s != null && o.unshift(Yn(n, s, u)))
				: l || ((s = Bn(n, i)), s != null && o.push(Yn(n, s, u)))),
			(n = n.return);
	}
	o.length !== 0 && e.push({ event: t, listeners: o });
}
var id = /\r\n?/g,
	od = /\u0000|\uFFFD/g;
function Nu(e) {
	return (typeof e == 'string' ? e : '' + e)
		.replace(
			id,
			`
`
		)
		.replace(od, '');
}
function xr(e, t, n) {
	if (((t = Nu(t)), Nu(e) !== t && n)) throw Error(y(425));
}
function Gr() {}
var Ai = null,
	Pi = null;
function zi(e, t) {
	return (
		e === 'textarea' ||
		e === 'noscript' ||
		typeof t.children == 'string' ||
		typeof t.children == 'number' ||
		(typeof t.dangerouslySetInnerHTML == 'object' &&
			t.dangerouslySetInnerHTML !== null &&
			t.dangerouslySetInnerHTML.__html != null)
	);
}
var Li = typeof setTimeout == 'function' ? setTimeout : void 0,
	ud = typeof clearTimeout == 'function' ? clearTimeout : void 0,
	Cu = typeof Promise == 'function' ? Promise : void 0,
	sd =
		typeof queueMicrotask == 'function'
			? queueMicrotask
			: typeof Cu < 'u'
			? function (e) {
					return Cu.resolve(null).then(e).catch(ad);
			  }
			: Li;
function ad(e) {
	setTimeout(function () {
		throw e;
	});
}
function Kl(e, t) {
	var n = t,
		r = 0;
	do {
		var l = n.nextSibling;
		if ((e.removeChild(n), l && l.nodeType === 8))
			if (((n = l.data), n === '/$')) {
				if (r === 0) {
					e.removeChild(l), Wn(t);
					return;
				}
				r--;
			} else (n !== '$' && n !== '$?' && n !== '$!') || r++;
		n = l;
	} while (n);
	Wn(t);
}
function at(e) {
	for (; e != null; e = e.nextSibling) {
		var t = e.nodeType;
		if (t === 1 || t === 3) break;
		if (t === 8) {
			if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
			if (t === '/$') return null;
		}
	}
	return e;
}
function Au(e) {
	e = e.previousSibling;
	for (var t = 0; e; ) {
		if (e.nodeType === 8) {
			var n = e.data;
			if (n === '$' || n === '$!' || n === '$?') {
				if (t === 0) return e;
				t--;
			} else n === '/$' && t++;
		}
		e = e.previousSibling;
	}
	return null;
}
var mn = Math.random().toString(36).slice(2),
	Fe = '__reactFiber$' + mn,
	Xn = '__reactProps$' + mn,
	Ye = '__reactContainer$' + mn,
	_i = '__reactEvents$' + mn,
	cd = '__reactListeners$' + mn,
	fd = '__reactHandles$' + mn;
function Ct(e) {
	var t = e[Fe];
	if (t) return t;
	for (var n = e.parentNode; n; ) {
		if ((t = n[Ye] || n[Fe])) {
			if (
				((n = t.alternate),
				t.child !== null || (n !== null && n.child !== null))
			)
				for (e = Au(e); e !== null; ) {
					if ((n = e[Fe])) return n;
					e = Au(e);
				}
			return t;
		}
		(e = n), (n = e.parentNode);
	}
	return null;
}
function lr(e) {
	return (
		(e = e[Fe] || e[Ye]),
		!e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
	);
}
function Vt(e) {
	if (e.tag === 5 || e.tag === 6) return e.stateNode;
	throw Error(y(33));
}
function gl(e) {
	return e[Xn] || null;
}
var Ti = [],
	Kt = -1;
function yt(e) {
	return { current: e };
}
function U(e) {
	0 > Kt || ((e.current = Ti[Kt]), (Ti[Kt] = null), Kt--);
}
function I(e, t) {
	Kt++, (Ti[Kt] = e.current), (e.current = t);
}
var ht = {},
	oe = yt(ht),
	pe = yt(!1),
	Tt = ht;
function on(e, t) {
	var n = e.type.contextTypes;
	if (!n) return ht;
	var r = e.stateNode;
	if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
		return r.__reactInternalMemoizedMaskedChildContext;
	var l = {},
		i;
	for (i in n) l[i] = t[i];
	return (
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = t),
			(e.__reactInternalMemoizedMaskedChildContext = l)),
		l
	);
}
function me(e) {
	return (e = e.childContextTypes), e != null;
}
function Zr() {
	U(pe), U(oe);
}
function Pu(e, t, n) {
	if (oe.current !== ht) throw Error(y(168));
	I(oe, t), I(pe, n);
}
function aa(e, t, n) {
	var r = e.stateNode;
	if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
		return n;
	r = r.getChildContext();
	for (var l in r) if (!(l in t)) throw Error(y(108, Xc(e) || 'Unknown', l));
	return H({}, n, r);
}
function Jr(e) {
	return (
		(e =
			((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ht),
		(Tt = oe.current),
		I(oe, e),
		I(pe, pe.current),
		!0
	);
}
function zu(e, t, n) {
	var r = e.stateNode;
	if (!r) throw Error(y(169));
	n
		? ((e = aa(e, t, Tt)),
		  (r.__reactInternalMemoizedMergedChildContext = e),
		  U(pe),
		  U(oe),
		  I(oe, e))
		: U(pe),
		I(pe, n);
}
var $e = null,
	yl = !1,
	Yl = !1;
function ca(e) {
	$e === null ? ($e = [e]) : $e.push(e);
}
function dd(e) {
	(yl = !0), ca(e);
}
function xt() {
	if (!Yl && $e !== null) {
		Yl = !0;
		var e = 0,
			t = j;
		try {
			var n = $e;
			for (j = 1; e < n.length; e++) {
				var r = n[e];
				do r = r(!0);
				while (r !== null);
			}
			($e = null), (yl = !1);
		} catch (l) {
			throw ($e !== null && ($e = $e.slice(e + 1)), Ds(co, xt), l);
		} finally {
			(j = t), (Yl = !1);
		}
	}
	return null;
}
var Yt = [],
	Xt = 0,
	qr = null,
	br = 0,
	Ee = [],
	Ne = 0,
	Rt = null,
	We = 1,
	He = '';
function Et(e, t) {
	(Yt[Xt++] = br), (Yt[Xt++] = qr), (qr = e), (br = t);
}
function fa(e, t, n) {
	(Ee[Ne++] = We), (Ee[Ne++] = He), (Ee[Ne++] = Rt), (Rt = e);
	var r = We;
	e = He;
	var l = 32 - Me(r) - 1;
	(r &= ~(1 << l)), (n += 1);
	var i = 32 - Me(t) + l;
	if (30 < i) {
		var o = l - (l % 5);
		(i = (r & ((1 << o) - 1)).toString(32)),
			(r >>= o),
			(l -= o),
			(We = (1 << (32 - Me(t) + l)) | (n << l) | r),
			(He = i + e);
	} else (We = (1 << i) | (n << l) | r), (He = e);
}
function wo(e) {
	e.return !== null && (Et(e, 1), fa(e, 1, 0));
}
function ko(e) {
	for (; e === qr; )
		(qr = Yt[--Xt]), (Yt[Xt] = null), (br = Yt[--Xt]), (Yt[Xt] = null);
	for (; e === Rt; )
		(Rt = Ee[--Ne]),
			(Ee[Ne] = null),
			(He = Ee[--Ne]),
			(Ee[Ne] = null),
			(We = Ee[--Ne]),
			(Ee[Ne] = null);
}
var xe = null,
	ye = null,
	B = !1,
	Re = null;
function da(e, t) {
	var n = Ce(5, null, null, 0);
	(n.elementType = 'DELETED'),
		(n.stateNode = t),
		(n.return = e),
		(t = e.deletions),
		t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Lu(e, t) {
	switch (e.tag) {
		case 5:
			var n = e.type;
			return (
				(t =
					t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
						? null
						: t),
				t !== null
					? ((e.stateNode = t), (xe = e), (ye = at(t.firstChild)), !0)
					: !1
			);
		case 6:
			return (
				(t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
				t !== null ? ((e.stateNode = t), (xe = e), (ye = null), !0) : !1
			);
		case 13:
			return (
				(t = t.nodeType !== 8 ? null : t),
				t !== null
					? ((n = Rt !== null ? { id: We, overflow: He } : null),
					  (e.memoizedState = {
							dehydrated: t,
							treeContext: n,
							retryLane: 1073741824,
					  }),
					  (n = Ce(18, null, null, 0)),
					  (n.stateNode = t),
					  (n.return = e),
					  (e.child = n),
					  (xe = e),
					  (ye = null),
					  !0)
					: !1
			);
		default:
			return !1;
	}
}
function Ri(e) {
	return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Mi(e) {
	if (B) {
		var t = ye;
		if (t) {
			var n = t;
			if (!Lu(e, t)) {
				if (Ri(e)) throw Error(y(418));
				t = at(n.nextSibling);
				var r = xe;
				t && Lu(e, t)
					? da(r, n)
					: ((e.flags = (e.flags & -4097) | 2), (B = !1), (xe = e));
			}
		} else {
			if (Ri(e)) throw Error(y(418));
			(e.flags = (e.flags & -4097) | 2), (B = !1), (xe = e);
		}
	}
}
function _u(e) {
	for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
		e = e.return;
	xe = e;
}
function wr(e) {
	if (e !== xe) return !1;
	if (!B) return _u(e), (B = !0), !1;
	var t;
	if (
		((t = e.tag !== 3) &&
			!(t = e.tag !== 5) &&
			((t = e.type),
			(t = t !== 'head' && t !== 'body' && !zi(e.type, e.memoizedProps))),
		t && (t = ye))
	) {
		if (Ri(e)) throw (pa(), Error(y(418)));
		for (; t; ) da(e, t), (t = at(t.nextSibling));
	}
	if ((_u(e), e.tag === 13)) {
		if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
			throw Error(y(317));
		e: {
			for (e = e.nextSibling, t = 0; e; ) {
				if (e.nodeType === 8) {
					var n = e.data;
					if (n === '/$') {
						if (t === 0) {
							ye = at(e.nextSibling);
							break e;
						}
						t--;
					} else (n !== '$' && n !== '$!' && n !== '$?') || t++;
				}
				e = e.nextSibling;
			}
			ye = null;
		}
	} else ye = xe ? at(e.stateNode.nextSibling) : null;
	return !0;
}
function pa() {
	for (var e = ye; e; ) e = at(e.nextSibling);
}
function un() {
	(ye = xe = null), (B = !1);
}
function So(e) {
	Re === null ? (Re = [e]) : Re.push(e);
}
var pd = Ze.ReactCurrentBatchConfig;
function _e(e, t) {
	if (e && e.defaultProps) {
		(t = H({}, t)), (e = e.defaultProps);
		for (var n in e) t[n] === void 0 && (t[n] = e[n]);
		return t;
	}
	return t;
}
var el = yt(null),
	tl = null,
	Gt = null,
	Eo = null;
function No() {
	Eo = Gt = tl = null;
}
function Co(e) {
	var t = el.current;
	U(el), (e._currentValue = t);
}
function Oi(e, t, n) {
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
function nn(e, t) {
	(tl = e),
		(Eo = Gt = null),
		(e = e.dependencies),
		e !== null &&
			e.firstContext !== null &&
			(e.lanes & t && (de = !0), (e.firstContext = null));
}
function Pe(e) {
	var t = e._currentValue;
	if (Eo !== e)
		if (((e = { context: e, memoizedValue: t, next: null }), Gt === null)) {
			if (tl === null) throw Error(y(308));
			(Gt = e), (tl.dependencies = { lanes: 0, firstContext: e });
		} else Gt = Gt.next = e;
	return t;
}
var At = null;
function Ao(e) {
	At === null ? (At = [e]) : At.push(e);
}
function ma(e, t, n, r) {
	var l = t.interleaved;
	return (
		l === null ? ((n.next = n), Ao(t)) : ((n.next = l.next), (l.next = n)),
		(t.interleaved = n),
		Xe(e, r)
	);
}
function Xe(e, t) {
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
var tt = !1;
function Po(e) {
	e.updateQueue = {
		baseState: e.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: { pending: null, interleaved: null, lanes: 0 },
		effects: null,
	};
}
function ha(e, t) {
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
function Ve(e, t) {
	return {
		eventTime: e,
		lane: t,
		tag: 0,
		payload: null,
		callback: null,
		next: null,
	};
}
function ct(e, t, n) {
	var r = e.updateQueue;
	if (r === null) return null;
	if (((r = r.shared), O & 2)) {
		var l = r.pending;
		return (
			l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
			(r.pending = t),
			Xe(e, n)
		);
	}
	return (
		(l = r.interleaved),
		l === null ? ((t.next = t), Ao(r)) : ((t.next = l.next), (l.next = t)),
		(r.interleaved = t),
		Xe(e, n)
	);
}
function Rr(e, t, n) {
	if (
		((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
	) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), fo(e, n);
	}
}
function Tu(e, t) {
	var n = e.updateQueue,
		r = e.alternate;
	if (r !== null && ((r = r.updateQueue), n === r)) {
		var l = null,
			i = null;
		if (((n = n.firstBaseUpdate), n !== null)) {
			do {
				var o = {
					eventTime: n.eventTime,
					lane: n.lane,
					tag: n.tag,
					payload: n.payload,
					callback: n.callback,
					next: null,
				};
				i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
			} while (n !== null);
			i === null ? (l = i = t) : (i = i.next = t);
		} else l = i = t;
		(n = {
			baseState: r.baseState,
			firstBaseUpdate: l,
			lastBaseUpdate: i,
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
function nl(e, t, n, r) {
	var l = e.updateQueue;
	tt = !1;
	var i = l.firstBaseUpdate,
		o = l.lastBaseUpdate,
		u = l.shared.pending;
	if (u !== null) {
		l.shared.pending = null;
		var s = u,
			c = s.next;
		(s.next = null), o === null ? (i = c) : (o.next = c), (o = s);
		var h = e.alternate;
		h !== null &&
			((h = h.updateQueue),
			(u = h.lastBaseUpdate),
			u !== o &&
				(u === null ? (h.firstBaseUpdate = c) : (u.next = c),
				(h.lastBaseUpdate = s)));
	}
	if (i !== null) {
		var m = l.baseState;
		(o = 0), (h = c = s = null), (u = i);
		do {
			var p = u.lane,
				x = u.eventTime;
			if ((r & p) === p) {
				h !== null &&
					(h = h.next =
						{
							eventTime: x,
							lane: 0,
							tag: u.tag,
							payload: u.payload,
							callback: u.callback,
							next: null,
						});
				e: {
					var w = e,
						k = u;
					switch (((p = t), (x = n), k.tag)) {
						case 1:
							if (((w = k.payload), typeof w == 'function')) {
								m = w.call(x, m, p);
								break e;
							}
							m = w;
							break e;
						case 3:
							w.flags = (w.flags & -65537) | 128;
						case 0:
							if (
								((w = k.payload),
								(p = typeof w == 'function' ? w.call(x, m, p) : w),
								p == null)
							)
								break e;
							m = H({}, m, p);
							break e;
						case 2:
							tt = !0;
					}
				}
				u.callback !== null &&
					u.lane !== 0 &&
					((e.flags |= 64),
					(p = l.effects),
					p === null ? (l.effects = [u]) : p.push(u));
			} else
				(x = {
					eventTime: x,
					lane: p,
					tag: u.tag,
					payload: u.payload,
					callback: u.callback,
					next: null,
				}),
					h === null ? ((c = h = x), (s = m)) : (h = h.next = x),
					(o |= p);
			if (((u = u.next), u === null)) {
				if (((u = l.shared.pending), u === null)) break;
				(p = u),
					(u = p.next),
					(p.next = null),
					(l.lastBaseUpdate = p),
					(l.shared.pending = null);
			}
		} while (1);
		if (
			(h === null && (s = m),
			(l.baseState = s),
			(l.firstBaseUpdate = c),
			(l.lastBaseUpdate = h),
			(t = l.shared.interleaved),
			t !== null)
		) {
			l = t;
			do (o |= l.lane), (l = l.next);
			while (l !== t);
		} else i === null && (l.shared.lanes = 0);
		(Ot |= o), (e.lanes = o), (e.memoizedState = m);
	}
}
function Ru(e, t, n) {
	if (((e = t.effects), (t.effects = null), e !== null))
		for (t = 0; t < e.length; t++) {
			var r = e[t],
				l = r.callback;
			if (l !== null) {
				if (((r.callback = null), (r = n), typeof l != 'function'))
					throw Error(y(191, l));
				l.call(r);
			}
		}
}
var va = new ms.Component().refs;
function Di(e, t, n, r) {
	(t = e.memoizedState),
		(n = n(r, t)),
		(n = n == null ? t : H({}, t, n)),
		(e.memoizedState = n),
		e.lanes === 0 && (e.updateQueue.baseState = n);
}
var xl = {
	isMounted: function (e) {
		return (e = e._reactInternals) ? It(e) === e : !1;
	},
	enqueueSetState: function (e, t, n) {
		e = e._reactInternals;
		var r = se(),
			l = dt(e),
			i = Ve(r, l);
		(i.payload = t),
			n != null && (i.callback = n),
			(t = ct(e, i, l)),
			t !== null && (Oe(t, e, l, r), Rr(t, e, l));
	},
	enqueueReplaceState: function (e, t, n) {
		e = e._reactInternals;
		var r = se(),
			l = dt(e),
			i = Ve(r, l);
		(i.tag = 1),
			(i.payload = t),
			n != null && (i.callback = n),
			(t = ct(e, i, l)),
			t !== null && (Oe(t, e, l, r), Rr(t, e, l));
	},
	enqueueForceUpdate: function (e, t) {
		e = e._reactInternals;
		var n = se(),
			r = dt(e),
			l = Ve(n, r);
		(l.tag = 2),
			t != null && (l.callback = t),
			(t = ct(e, l, r)),
			t !== null && (Oe(t, e, r, n), Rr(t, e, r));
	},
};
function Mu(e, t, n, r, l, i, o) {
	return (
		(e = e.stateNode),
		typeof e.shouldComponentUpdate == 'function'
			? e.shouldComponentUpdate(r, i, o)
			: t.prototype && t.prototype.isPureReactComponent
			? !Vn(n, r) || !Vn(l, i)
			: !0
	);
}
function ga(e, t, n) {
	var r = !1,
		l = ht,
		i = t.contextType;
	return (
		typeof i == 'object' && i !== null
			? (i = Pe(i))
			: ((l = me(t) ? Tt : oe.current),
			  (r = t.contextTypes),
			  (i = (r = r != null) ? on(e, l) : ht)),
		(t = new t(n, i)),
		(e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
		(t.updater = xl),
		(e.stateNode = t),
		(t._reactInternals = e),
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = l),
			(e.__reactInternalMemoizedMaskedChildContext = i)),
		t
	);
}
function Ou(e, t, n, r) {
	(e = t.state),
		typeof t.componentWillReceiveProps == 'function' &&
			t.componentWillReceiveProps(n, r),
		typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
			t.UNSAFE_componentWillReceiveProps(n, r),
		t.state !== e && xl.enqueueReplaceState(t, t.state, null);
}
function ji(e, t, n, r) {
	var l = e.stateNode;
	(l.props = n), (l.state = e.memoizedState), (l.refs = va), Po(e);
	var i = t.contextType;
	typeof i == 'object' && i !== null
		? (l.context = Pe(i))
		: ((i = me(t) ? Tt : oe.current), (l.context = on(e, i))),
		(l.state = e.memoizedState),
		(i = t.getDerivedStateFromProps),
		typeof i == 'function' && (Di(e, t, i, n), (l.state = e.memoizedState)),
		typeof t.getDerivedStateFromProps == 'function' ||
			typeof l.getSnapshotBeforeUpdate == 'function' ||
			(typeof l.UNSAFE_componentWillMount != 'function' &&
				typeof l.componentWillMount != 'function') ||
			((t = l.state),
			typeof l.componentWillMount == 'function' && l.componentWillMount(),
			typeof l.UNSAFE_componentWillMount == 'function' &&
				l.UNSAFE_componentWillMount(),
			t !== l.state && xl.enqueueReplaceState(l, l.state, null),
			nl(e, n, l, r),
			(l.state = e.memoizedState)),
		typeof l.componentDidMount == 'function' && (e.flags |= 4194308);
}
function kn(e, t, n) {
	if (
		((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
	) {
		if (n._owner) {
			if (((n = n._owner), n)) {
				if (n.tag !== 1) throw Error(y(309));
				var r = n.stateNode;
			}
			if (!r) throw Error(y(147, e));
			var l = r,
				i = '' + e;
			return t !== null &&
				t.ref !== null &&
				typeof t.ref == 'function' &&
				t.ref._stringRef === i
				? t.ref
				: ((t = function (o) {
						var u = l.refs;
						u === va && (u = l.refs = {}),
							o === null ? delete u[i] : (u[i] = o);
				  }),
				  (t._stringRef = i),
				  t);
		}
		if (typeof e != 'string') throw Error(y(284));
		if (!n._owner) throw Error(y(290, e));
	}
	return e;
}
function kr(e, t) {
	throw (
		((e = Object.prototype.toString.call(t)),
		Error(
			y(
				31,
				e === '[object Object]'
					? 'object with keys {' + Object.keys(t).join(', ') + '}'
					: e
			)
		))
	);
}
function Du(e) {
	var t = e._init;
	return t(e._payload);
}
function ya(e) {
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
		return (f = pt(f, a)), (f.index = 0), (f.sibling = null), f;
	}
	function i(f, a, d) {
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
	function o(f) {
		return e && f.alternate === null && (f.flags |= 2), f;
	}
	function u(f, a, d, g) {
		return a === null || a.tag !== 6
			? ((a = ei(d, f.mode, g)), (a.return = f), a)
			: ((a = l(a, d)), (a.return = f), a);
	}
	function s(f, a, d, g) {
		var S = d.type;
		return S === Qt
			? h(f, a, d.props.children, g, d.key)
			: a !== null &&
			  (a.elementType === S ||
					(typeof S == 'object' &&
						S !== null &&
						S.$$typeof === et &&
						Du(S) === a.type))
			? ((g = l(a, d.props)), (g.ref = kn(f, a, d)), (g.return = f), g)
			: ((g = Fr(d.type, d.key, d.props, null, f.mode, g)),
			  (g.ref = kn(f, a, d)),
			  (g.return = f),
			  g);
	}
	function c(f, a, d, g) {
		return a === null ||
			a.tag !== 4 ||
			a.stateNode.containerInfo !== d.containerInfo ||
			a.stateNode.implementation !== d.implementation
			? ((a = ti(d, f.mode, g)), (a.return = f), a)
			: ((a = l(a, d.children || [])), (a.return = f), a);
	}
	function h(f, a, d, g, S) {
		return a === null || a.tag !== 7
			? ((a = Lt(d, f.mode, g, S)), (a.return = f), a)
			: ((a = l(a, d)), (a.return = f), a);
	}
	function m(f, a, d) {
		if ((typeof a == 'string' && a !== '') || typeof a == 'number')
			return (a = ei('' + a, f.mode, d)), (a.return = f), a;
		if (typeof a == 'object' && a !== null) {
			switch (a.$$typeof) {
				case cr:
					return (
						(d = Fr(a.type, a.key, a.props, null, f.mode, d)),
						(d.ref = kn(f, null, a)),
						(d.return = f),
						d
					);
				case Bt:
					return (a = ti(a, f.mode, d)), (a.return = f), a;
				case et:
					var g = a._init;
					return m(f, g(a._payload), d);
			}
			if (An(a) || vn(a))
				return (a = Lt(a, f.mode, d, null)), (a.return = f), a;
			kr(f, a);
		}
		return null;
	}
	function p(f, a, d, g) {
		var S = a !== null ? a.key : null;
		if ((typeof d == 'string' && d !== '') || typeof d == 'number')
			return S !== null ? null : u(f, a, '' + d, g);
		if (typeof d == 'object' && d !== null) {
			switch (d.$$typeof) {
				case cr:
					return d.key === S ? s(f, a, d, g) : null;
				case Bt:
					return d.key === S ? c(f, a, d, g) : null;
				case et:
					return (S = d._init), p(f, a, S(d._payload), g);
			}
			if (An(d) || vn(d)) return S !== null ? null : h(f, a, d, g, null);
			kr(f, d);
		}
		return null;
	}
	function x(f, a, d, g, S) {
		if ((typeof g == 'string' && g !== '') || typeof g == 'number')
			return (f = f.get(d) || null), u(a, f, '' + g, S);
		if (typeof g == 'object' && g !== null) {
			switch (g.$$typeof) {
				case cr:
					return (f = f.get(g.key === null ? d : g.key) || null), s(a, f, g, S);
				case Bt:
					return (f = f.get(g.key === null ? d : g.key) || null), c(a, f, g, S);
				case et:
					var C = g._init;
					return x(f, a, d, C(g._payload), S);
			}
			if (An(g) || vn(g)) return (f = f.get(d) || null), h(a, f, g, S, null);
			kr(a, g);
		}
		return null;
	}
	function w(f, a, d, g) {
		for (
			var S = null, C = null, A = a, P = (a = 0), Q = null;
			A !== null && P < d.length;
			P++
		) {
			A.index > P ? ((Q = A), (A = null)) : (Q = A.sibling);
			var T = p(f, A, d[P], g);
			if (T === null) {
				A === null && (A = Q);
				break;
			}
			e && A && T.alternate === null && t(f, A),
				(a = i(T, a, P)),
				C === null ? (S = T) : (C.sibling = T),
				(C = T),
				(A = Q);
		}
		if (P === d.length) return n(f, A), B && Et(f, P), S;
		if (A === null) {
			for (; P < d.length; P++)
				(A = m(f, d[P], g)),
					A !== null &&
						((a = i(A, a, P)), C === null ? (S = A) : (C.sibling = A), (C = A));
			return B && Et(f, P), S;
		}
		for (A = r(f, A); P < d.length; P++)
			(Q = x(A, f, P, d[P], g)),
				Q !== null &&
					(e && Q.alternate !== null && A.delete(Q.key === null ? P : Q.key),
					(a = i(Q, a, P)),
					C === null ? (S = Q) : (C.sibling = Q),
					(C = Q));
		return (
			e &&
				A.forEach(function (ve) {
					return t(f, ve);
				}),
			B && Et(f, P),
			S
		);
	}
	function k(f, a, d, g) {
		var S = vn(d);
		if (typeof S != 'function') throw Error(y(150));
		if (((d = S.call(d)), d == null)) throw Error(y(151));
		for (
			var C = (S = null), A = a, P = (a = 0), Q = null, T = d.next();
			A !== null && !T.done;
			P++, T = d.next()
		) {
			A.index > P ? ((Q = A), (A = null)) : (Q = A.sibling);
			var ve = p(f, A, T.value, g);
			if (ve === null) {
				A === null && (A = Q);
				break;
			}
			e && A && ve.alternate === null && t(f, A),
				(a = i(ve, a, P)),
				C === null ? (S = ve) : (C.sibling = ve),
				(C = ve),
				(A = Q);
		}
		if (T.done) return n(f, A), B && Et(f, P), S;
		if (A === null) {
			for (; !T.done; P++, T = d.next())
				(T = m(f, T.value, g)),
					T !== null &&
						((a = i(T, a, P)), C === null ? (S = T) : (C.sibling = T), (C = T));
			return B && Et(f, P), S;
		}
		for (A = r(f, A); !T.done; P++, T = d.next())
			(T = x(A, f, P, T.value, g)),
				T !== null &&
					(e && T.alternate !== null && A.delete(T.key === null ? P : T.key),
					(a = i(T, a, P)),
					C === null ? (S = T) : (C.sibling = T),
					(C = T));
		return (
			e &&
				A.forEach(function (Je) {
					return t(f, Je);
				}),
			B && Et(f, P),
			S
		);
	}
	function D(f, a, d, g) {
		if (
			(typeof d == 'object' &&
				d !== null &&
				d.type === Qt &&
				d.key === null &&
				(d = d.props.children),
			typeof d == 'object' && d !== null)
		) {
			switch (d.$$typeof) {
				case cr:
					e: {
						for (var S = d.key, C = a; C !== null; ) {
							if (C.key === S) {
								if (((S = d.type), S === Qt)) {
									if (C.tag === 7) {
										n(f, C.sibling),
											(a = l(C, d.props.children)),
											(a.return = f),
											(f = a);
										break e;
									}
								} else if (
									C.elementType === S ||
									(typeof S == 'object' &&
										S !== null &&
										S.$$typeof === et &&
										Du(S) === C.type)
								) {
									n(f, C.sibling),
										(a = l(C, d.props)),
										(a.ref = kn(f, C, d)),
										(a.return = f),
										(f = a);
									break e;
								}
								n(f, C);
								break;
							} else t(f, C);
							C = C.sibling;
						}
						d.type === Qt
							? ((a = Lt(d.props.children, f.mode, g, d.key)),
							  (a.return = f),
							  (f = a))
							: ((g = Fr(d.type, d.key, d.props, null, f.mode, g)),
							  (g.ref = kn(f, a, d)),
							  (g.return = f),
							  (f = g));
					}
					return o(f);
				case Bt:
					e: {
						for (C = d.key; a !== null; ) {
							if (a.key === C)
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
						(a = ti(d, f.mode, g)), (a.return = f), (f = a);
					}
					return o(f);
				case et:
					return (C = d._init), D(f, a, C(d._payload), g);
			}
			if (An(d)) return w(f, a, d, g);
			if (vn(d)) return k(f, a, d, g);
			kr(f, d);
		}
		return (typeof d == 'string' && d !== '') || typeof d == 'number'
			? ((d = '' + d),
			  a !== null && a.tag === 6
					? (n(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
					: (n(f, a), (a = ei(d, f.mode, g)), (a.return = f), (f = a)),
			  o(f))
			: n(f, a);
	}
	return D;
}
var sn = ya(!0),
	xa = ya(!1),
	ir = {},
	Be = yt(ir),
	Gn = yt(ir),
	Zn = yt(ir);
function Pt(e) {
	if (e === ir) throw Error(y(174));
	return e;
}
function zo(e, t) {
	switch ((I(Zn, t), I(Gn, e), I(Be, ir), (e = t.nodeType), e)) {
		case 9:
		case 11:
			t = (t = t.documentElement) ? t.namespaceURI : mi(null, '');
			break;
		default:
			(e = e === 8 ? t.parentNode : t),
				(t = e.namespaceURI || null),
				(e = e.tagName),
				(t = mi(t, e));
	}
	U(Be), I(Be, t);
}
function an() {
	U(Be), U(Gn), U(Zn);
}
function wa(e) {
	Pt(Zn.current);
	var t = Pt(Be.current),
		n = mi(t, e.type);
	t !== n && (I(Gn, e), I(Be, n));
}
function Lo(e) {
	Gn.current === e && (U(Be), U(Gn));
}
var $ = yt(0);
function rl(e) {
	for (var t = e; t !== null; ) {
		if (t.tag === 13) {
			var n = t.memoizedState;
			if (
				n !== null &&
				((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
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
var Xl = [];
function _o() {
	for (var e = 0; e < Xl.length; e++)
		Xl[e]._workInProgressVersionPrimary = null;
	Xl.length = 0;
}
var Mr = Ze.ReactCurrentDispatcher,
	Gl = Ze.ReactCurrentBatchConfig,
	Mt = 0,
	W = null,
	G = null,
	q = null,
	ll = !1,
	On = !1,
	Jn = 0,
	md = 0;
function re() {
	throw Error(y(321));
}
function To(e, t) {
	if (t === null) return !1;
	for (var n = 0; n < t.length && n < e.length; n++)
		if (!De(e[n], t[n])) return !1;
	return !0;
}
function Ro(e, t, n, r, l, i) {
	if (
		((Mt = i),
		(W = t),
		(t.memoizedState = null),
		(t.updateQueue = null),
		(t.lanes = 0),
		(Mr.current = e === null || e.memoizedState === null ? yd : xd),
		(e = n(r, l)),
		On)
	) {
		i = 0;
		do {
			if (((On = !1), (Jn = 0), 25 <= i)) throw Error(y(301));
			(i += 1),
				(q = G = null),
				(t.updateQueue = null),
				(Mr.current = wd),
				(e = n(r, l));
		} while (On);
	}
	if (
		((Mr.current = il),
		(t = G !== null && G.next !== null),
		(Mt = 0),
		(q = G = W = null),
		(ll = !1),
		t)
	)
		throw Error(y(300));
	return e;
}
function Mo() {
	var e = Jn !== 0;
	return (Jn = 0), e;
}
function Ie() {
	var e = {
		memoizedState: null,
		baseState: null,
		baseQueue: null,
		queue: null,
		next: null,
	};
	return q === null ? (W.memoizedState = q = e) : (q = q.next = e), q;
}
function ze() {
	if (G === null) {
		var e = W.alternate;
		e = e !== null ? e.memoizedState : null;
	} else e = G.next;
	var t = q === null ? W.memoizedState : q.next;
	if (t !== null) (q = t), (G = e);
	else {
		if (e === null) throw Error(y(310));
		(G = e),
			(e = {
				memoizedState: G.memoizedState,
				baseState: G.baseState,
				baseQueue: G.baseQueue,
				queue: G.queue,
				next: null,
			}),
			q === null ? (W.memoizedState = q = e) : (q = q.next = e);
	}
	return q;
}
function qn(e, t) {
	return typeof t == 'function' ? t(e) : t;
}
function Zl(e) {
	var t = ze(),
		n = t.queue;
	if (n === null) throw Error(y(311));
	n.lastRenderedReducer = e;
	var r = G,
		l = r.baseQueue,
		i = n.pending;
	if (i !== null) {
		if (l !== null) {
			var o = l.next;
			(l.next = i.next), (i.next = o);
		}
		(r.baseQueue = l = i), (n.pending = null);
	}
	if (l !== null) {
		(i = l.next), (r = r.baseState);
		var u = (o = null),
			s = null,
			c = i;
		do {
			var h = c.lane;
			if ((Mt & h) === h)
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
				var m = {
					lane: h,
					action: c.action,
					hasEagerState: c.hasEagerState,
					eagerState: c.eagerState,
					next: null,
				};
				s === null ? ((u = s = m), (o = r)) : (s = s.next = m),
					(W.lanes |= h),
					(Ot |= h);
			}
			c = c.next;
		} while (c !== null && c !== i);
		s === null ? (o = r) : (s.next = u),
			De(r, t.memoizedState) || (de = !0),
			(t.memoizedState = r),
			(t.baseState = o),
			(t.baseQueue = s),
			(n.lastRenderedState = r);
	}
	if (((e = n.interleaved), e !== null)) {
		l = e;
		do (i = l.lane), (W.lanes |= i), (Ot |= i), (l = l.next);
		while (l !== e);
	} else l === null && (n.lanes = 0);
	return [t.memoizedState, n.dispatch];
}
function Jl(e) {
	var t = ze(),
		n = t.queue;
	if (n === null) throw Error(y(311));
	n.lastRenderedReducer = e;
	var r = n.dispatch,
		l = n.pending,
		i = t.memoizedState;
	if (l !== null) {
		n.pending = null;
		var o = (l = l.next);
		do (i = e(i, o.action)), (o = o.next);
		while (o !== l);
		De(i, t.memoizedState) || (de = !0),
			(t.memoizedState = i),
			t.baseQueue === null && (t.baseState = i),
			(n.lastRenderedState = i);
	}
	return [i, r];
}
function ka() {}
function Sa(e, t) {
	var n = W,
		r = ze(),
		l = t(),
		i = !De(r.memoizedState, l);
	if (
		(i && ((r.memoizedState = l), (de = !0)),
		(r = r.queue),
		Oo(Ca.bind(null, n, r, e), [e]),
		r.getSnapshot !== t || i || (q !== null && q.memoizedState.tag & 1))
	) {
		if (
			((n.flags |= 2048),
			bn(9, Na.bind(null, n, r, l, t), void 0, null),
			b === null)
		)
			throw Error(y(349));
		Mt & 30 || Ea(n, t, l);
	}
	return l;
}
function Ea(e, t, n) {
	(e.flags |= 16384),
		(e = { getSnapshot: t, value: n }),
		(t = W.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (W.updateQueue = t),
			  (t.stores = [e]))
			: ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Na(e, t, n, r) {
	(t.value = n), (t.getSnapshot = r), Aa(t) && Pa(e);
}
function Ca(e, t, n) {
	return n(function () {
		Aa(t) && Pa(e);
	});
}
function Aa(e) {
	var t = e.getSnapshot;
	e = e.value;
	try {
		var n = t();
		return !De(e, n);
	} catch {
		return !0;
	}
}
function Pa(e) {
	var t = Xe(e, 1);
	t !== null && Oe(t, e, 1, -1);
}
function ju(e) {
	var t = Ie();
	return (
		typeof e == 'function' && (e = e()),
		(t.memoizedState = t.baseState = e),
		(e = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: qn,
			lastRenderedState: e,
		}),
		(t.queue = e),
		(e = e.dispatch = gd.bind(null, W, e)),
		[t.memoizedState, e]
	);
}
function bn(e, t, n, r) {
	return (
		(e = { tag: e, create: t, destroy: n, deps: r, next: null }),
		(t = W.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (W.updateQueue = t),
			  (t.lastEffect = e.next = e))
			: ((n = t.lastEffect),
			  n === null
					? (t.lastEffect = e.next = e)
					: ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
		e
	);
}
function za() {
	return ze().memoizedState;
}
function Or(e, t, n, r) {
	var l = Ie();
	(W.flags |= e),
		(l.memoizedState = bn(1 | t, n, void 0, r === void 0 ? null : r));
}
function wl(e, t, n, r) {
	var l = ze();
	r = r === void 0 ? null : r;
	var i = void 0;
	if (G !== null) {
		var o = G.memoizedState;
		if (((i = o.destroy), r !== null && To(r, o.deps))) {
			l.memoizedState = bn(t, n, i, r);
			return;
		}
	}
	(W.flags |= e), (l.memoizedState = bn(1 | t, n, i, r));
}
function Iu(e, t) {
	return Or(8390656, 8, e, t);
}
function Oo(e, t) {
	return wl(2048, 8, e, t);
}
function La(e, t) {
	return wl(4, 2, e, t);
}
function _a(e, t) {
	return wl(4, 4, e, t);
}
function Ta(e, t) {
	if (typeof t == 'function')
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
function Ra(e, t, n) {
	return (
		(n = n != null ? n.concat([e]) : null), wl(4, 4, Ta.bind(null, t, e), n)
	);
}
function Do() {}
function Ma(e, t) {
	var n = ze();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && To(t, r[1])
		? r[0]
		: ((n.memoizedState = [e, t]), e);
}
function Oa(e, t) {
	var n = ze();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && To(t, r[1])
		? r[0]
		: ((e = e()), (n.memoizedState = [e, t]), e);
}
function Da(e, t, n) {
	return Mt & 21
		? (De(n, t) || ((n = Fs()), (W.lanes |= n), (Ot |= n), (e.baseState = !0)),
		  t)
		: (e.baseState && ((e.baseState = !1), (de = !0)), (e.memoizedState = n));
}
function hd(e, t) {
	var n = j;
	(j = n !== 0 && 4 > n ? n : 4), e(!0);
	var r = Gl.transition;
	Gl.transition = {};
	try {
		e(!1), t();
	} finally {
		(j = n), (Gl.transition = r);
	}
}
function ja() {
	return ze().memoizedState;
}
function vd(e, t, n) {
	var r = dt(e);
	if (
		((n = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		}),
		Ia(e))
	)
		Fa(t, n);
	else if (((n = ma(e, t, n, r)), n !== null)) {
		var l = se();
		Oe(n, e, r, l), Ua(n, t, r);
	}
}
function gd(e, t, n) {
	var r = dt(e),
		l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
	if (Ia(e)) Fa(t, l);
	else {
		var i = e.alternate;
		if (
			e.lanes === 0 &&
			(i === null || i.lanes === 0) &&
			((i = t.lastRenderedReducer), i !== null)
		)
			try {
				var o = t.lastRenderedState,
					u = i(o, n);
				if (((l.hasEagerState = !0), (l.eagerState = u), De(u, o))) {
					var s = t.interleaved;
					s === null
						? ((l.next = l), Ao(t))
						: ((l.next = s.next), (s.next = l)),
						(t.interleaved = l);
					return;
				}
			} catch {
			} finally {
			}
		(n = ma(e, t, l, r)),
			n !== null && ((l = se()), Oe(n, e, r, l), Ua(n, t, r));
	}
}
function Ia(e) {
	var t = e.alternate;
	return e === W || (t !== null && t === W);
}
function Fa(e, t) {
	On = ll = !0;
	var n = e.pending;
	n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
		(e.pending = t);
}
function Ua(e, t, n) {
	if (n & 4194240) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), fo(e, n);
	}
}
var il = {
		readContext: Pe,
		useCallback: re,
		useContext: re,
		useEffect: re,
		useImperativeHandle: re,
		useInsertionEffect: re,
		useLayoutEffect: re,
		useMemo: re,
		useReducer: re,
		useRef: re,
		useState: re,
		useDebugValue: re,
		useDeferredValue: re,
		useTransition: re,
		useMutableSource: re,
		useSyncExternalStore: re,
		useId: re,
		unstable_isNewReconciler: !1,
	},
	yd = {
		readContext: Pe,
		useCallback: function (e, t) {
			return (Ie().memoizedState = [e, t === void 0 ? null : t]), e;
		},
		useContext: Pe,
		useEffect: Iu,
		useImperativeHandle: function (e, t, n) {
			return (
				(n = n != null ? n.concat([e]) : null),
				Or(4194308, 4, Ta.bind(null, t, e), n)
			);
		},
		useLayoutEffect: function (e, t) {
			return Or(4194308, 4, e, t);
		},
		useInsertionEffect: function (e, t) {
			return Or(4, 2, e, t);
		},
		useMemo: function (e, t) {
			var n = Ie();
			return (
				(t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
			);
		},
		useReducer: function (e, t, n) {
			var r = Ie();
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
				(e = e.dispatch = vd.bind(null, W, e)),
				[r.memoizedState, e]
			);
		},
		useRef: function (e) {
			var t = Ie();
			return (e = { current: e }), (t.memoizedState = e);
		},
		useState: ju,
		useDebugValue: Do,
		useDeferredValue: function (e) {
			return (Ie().memoizedState = e);
		},
		useTransition: function () {
			var e = ju(!1),
				t = e[0];
			return (e = hd.bind(null, e[1])), (Ie().memoizedState = e), [t, e];
		},
		useMutableSource: function () {},
		useSyncExternalStore: function (e, t, n) {
			var r = W,
				l = Ie();
			if (B) {
				if (n === void 0) throw Error(y(407));
				n = n();
			} else {
				if (((n = t()), b === null)) throw Error(y(349));
				Mt & 30 || Ea(r, t, n);
			}
			l.memoizedState = n;
			var i = { value: n, getSnapshot: t };
			return (
				(l.queue = i),
				Iu(Ca.bind(null, r, i, e), [e]),
				(r.flags |= 2048),
				bn(9, Na.bind(null, r, i, n, t), void 0, null),
				n
			);
		},
		useId: function () {
			var e = Ie(),
				t = b.identifierPrefix;
			if (B) {
				var n = He,
					r = We;
				(n = (r & ~(1 << (32 - Me(r) - 1))).toString(32) + n),
					(t = ':' + t + 'R' + n),
					(n = Jn++),
					0 < n && (t += 'H' + n.toString(32)),
					(t += ':');
			} else (n = md++), (t = ':' + t + 'r' + n.toString(32) + ':');
			return (e.memoizedState = t);
		},
		unstable_isNewReconciler: !1,
	},
	xd = {
		readContext: Pe,
		useCallback: Ma,
		useContext: Pe,
		useEffect: Oo,
		useImperativeHandle: Ra,
		useInsertionEffect: La,
		useLayoutEffect: _a,
		useMemo: Oa,
		useReducer: Zl,
		useRef: za,
		useState: function () {
			return Zl(qn);
		},
		useDebugValue: Do,
		useDeferredValue: function (e) {
			var t = ze();
			return Da(t, G.memoizedState, e);
		},
		useTransition: function () {
			var e = Zl(qn)[0],
				t = ze().memoizedState;
			return [e, t];
		},
		useMutableSource: ka,
		useSyncExternalStore: Sa,
		useId: ja,
		unstable_isNewReconciler: !1,
	},
	wd = {
		readContext: Pe,
		useCallback: Ma,
		useContext: Pe,
		useEffect: Oo,
		useImperativeHandle: Ra,
		useInsertionEffect: La,
		useLayoutEffect: _a,
		useMemo: Oa,
		useReducer: Jl,
		useRef: za,
		useState: function () {
			return Jl(qn);
		},
		useDebugValue: Do,
		useDeferredValue: function (e) {
			var t = ze();
			return G === null ? (t.memoizedState = e) : Da(t, G.memoizedState, e);
		},
		useTransition: function () {
			var e = Jl(qn)[0],
				t = ze().memoizedState;
			return [e, t];
		},
		useMutableSource: ka,
		useSyncExternalStore: Sa,
		useId: ja,
		unstable_isNewReconciler: !1,
	};
function cn(e, t) {
	try {
		var n = '',
			r = t;
		do (n += Yc(r)), (r = r.return);
		while (r);
		var l = n;
	} catch (i) {
		l =
			`
Error generating stack: ` +
			i.message +
			`
` +
			i.stack;
	}
	return { value: e, source: t, stack: l, digest: null };
}
function ql(e, t, n) {
	return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ii(e, t) {
	try {
		console.error(t.value);
	} catch (n) {
		setTimeout(function () {
			throw n;
		});
	}
}
var kd = typeof WeakMap == 'function' ? WeakMap : Map;
function Ba(e, t, n) {
	(n = Ve(-1, n)), (n.tag = 3), (n.payload = { element: null });
	var r = t.value;
	return (
		(n.callback = function () {
			ul || ((ul = !0), (Yi = r)), Ii(e, t);
		}),
		n
	);
}
function Qa(e, t, n) {
	(n = Ve(-1, n)), (n.tag = 3);
	var r = e.type.getDerivedStateFromError;
	if (typeof r == 'function') {
		var l = t.value;
		(n.payload = function () {
			return r(l);
		}),
			(n.callback = function () {
				Ii(e, t);
			});
	}
	var i = e.stateNode;
	return (
		i !== null &&
			typeof i.componentDidCatch == 'function' &&
			(n.callback = function () {
				Ii(e, t),
					typeof r != 'function' &&
						(ft === null ? (ft = new Set([this])) : ft.add(this));
				var o = t.stack;
				this.componentDidCatch(t.value, {
					componentStack: o !== null ? o : '',
				});
			}),
		n
	);
}
function Fu(e, t, n) {
	var r = e.pingCache;
	if (r === null) {
		r = e.pingCache = new kd();
		var l = new Set();
		r.set(t, l);
	} else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
	l.has(n) || (l.add(n), (e = Dd.bind(null, e, t, n)), t.then(e, e));
}
function Uu(e) {
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
function Bu(e, t, n, r, l) {
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
							: ((t = Ve(-1, 1)), (t.tag = 2), ct(n, t, 1))),
				  (n.lanes |= 1)),
		  e);
}
var Sd = Ze.ReactCurrentOwner,
	de = !1;
function ue(e, t, n, r) {
	t.child = e === null ? xa(t, null, n, r) : sn(t, e.child, n, r);
}
function Qu(e, t, n, r, l) {
	n = n.render;
	var i = t.ref;
	return (
		nn(t, l),
		(r = Ro(e, t, n, r, i, l)),
		(n = Mo()),
		e !== null && !de
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~l),
			  Ge(e, t, l))
			: (B && n && wo(t), (t.flags |= 1), ue(e, t, r, l), t.child)
	);
}
function $u(e, t, n, r, l) {
	if (e === null) {
		var i = n.type;
		return typeof i == 'function' &&
			!Wo(i) &&
			i.defaultProps === void 0 &&
			n.compare === null &&
			n.defaultProps === void 0
			? ((t.tag = 15), (t.type = i), $a(e, t, i, r, l))
			: ((e = Fr(n.type, null, r, t, t.mode, l)),
			  (e.ref = t.ref),
			  (e.return = t),
			  (t.child = e));
	}
	if (((i = e.child), !(e.lanes & l))) {
		var o = i.memoizedProps;
		if (
			((n = n.compare), (n = n !== null ? n : Vn), n(o, r) && e.ref === t.ref)
		)
			return Ge(e, t, l);
	}
	return (
		(t.flags |= 1),
		(e = pt(i, r)),
		(e.ref = t.ref),
		(e.return = t),
		(t.child = e)
	);
}
function $a(e, t, n, r, l) {
	if (e !== null) {
		var i = e.memoizedProps;
		if (Vn(i, r) && e.ref === t.ref)
			if (((de = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
				e.flags & 131072 && (de = !0);
			else return (t.lanes = e.lanes), Ge(e, t, l);
	}
	return Fi(e, t, n, r, l);
}
function Wa(e, t, n) {
	var r = t.pendingProps,
		l = r.children,
		i = e !== null ? e.memoizedState : null;
	if (r.mode === 'hidden')
		if (!(t.mode & 1))
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				I(Jt, ge),
				(ge |= n);
		else {
			if (!(n & 1073741824))
				return (
					(e = i !== null ? i.baseLanes | n : n),
					(t.lanes = t.childLanes = 1073741824),
					(t.memoizedState = {
						baseLanes: e,
						cachePool: null,
						transitions: null,
					}),
					(t.updateQueue = null),
					I(Jt, ge),
					(ge |= e),
					null
				);
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				(r = i !== null ? i.baseLanes : n),
				I(Jt, ge),
				(ge |= r);
		}
	else
		i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
			I(Jt, ge),
			(ge |= r);
	return ue(e, t, l, n), t.child;
}
function Ha(e, t) {
	var n = t.ref;
	((e === null && n !== null) || (e !== null && e.ref !== n)) &&
		((t.flags |= 512), (t.flags |= 2097152));
}
function Fi(e, t, n, r, l) {
	var i = me(n) ? Tt : oe.current;
	return (
		(i = on(t, i)),
		nn(t, l),
		(n = Ro(e, t, n, r, i, l)),
		(r = Mo()),
		e !== null && !de
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~l),
			  Ge(e, t, l))
			: (B && r && wo(t), (t.flags |= 1), ue(e, t, n, l), t.child)
	);
}
function Wu(e, t, n, r, l) {
	if (me(n)) {
		var i = !0;
		Jr(t);
	} else i = !1;
	if ((nn(t, l), t.stateNode === null))
		Dr(e, t), ga(t, n, r), ji(t, n, r, l), (r = !0);
	else if (e === null) {
		var o = t.stateNode,
			u = t.memoizedProps;
		o.props = u;
		var s = o.context,
			c = n.contextType;
		typeof c == 'object' && c !== null
			? (c = Pe(c))
			: ((c = me(n) ? Tt : oe.current), (c = on(t, c)));
		var h = n.getDerivedStateFromProps,
			m =
				typeof h == 'function' ||
				typeof o.getSnapshotBeforeUpdate == 'function';
		m ||
			(typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
				typeof o.componentWillReceiveProps != 'function') ||
			((u !== r || s !== c) && Ou(t, o, r, c)),
			(tt = !1);
		var p = t.memoizedState;
		(o.state = p),
			nl(t, r, o, l),
			(s = t.memoizedState),
			u !== r || p !== s || pe.current || tt
				? (typeof h == 'function' && (Di(t, n, h, r), (s = t.memoizedState)),
				  (u = tt || Mu(t, n, u, r, p, s, c))
						? (m ||
								(typeof o.UNSAFE_componentWillMount != 'function' &&
									typeof o.componentWillMount != 'function') ||
								(typeof o.componentWillMount == 'function' &&
									o.componentWillMount(),
								typeof o.UNSAFE_componentWillMount == 'function' &&
									o.UNSAFE_componentWillMount()),
						  typeof o.componentDidMount == 'function' && (t.flags |= 4194308))
						: (typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
						  (t.memoizedProps = r),
						  (t.memoizedState = s)),
				  (o.props = r),
				  (o.state = s),
				  (o.context = c),
				  (r = u))
				: (typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
				  (r = !1));
	} else {
		(o = t.stateNode),
			ha(e, t),
			(u = t.memoizedProps),
			(c = t.type === t.elementType ? u : _e(t.type, u)),
			(o.props = c),
			(m = t.pendingProps),
			(p = o.context),
			(s = n.contextType),
			typeof s == 'object' && s !== null
				? (s = Pe(s))
				: ((s = me(n) ? Tt : oe.current), (s = on(t, s)));
		var x = n.getDerivedStateFromProps;
		(h =
			typeof x == 'function' ||
			typeof o.getSnapshotBeforeUpdate == 'function') ||
			(typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
				typeof o.componentWillReceiveProps != 'function') ||
			((u !== m || p !== s) && Ou(t, o, r, s)),
			(tt = !1),
			(p = t.memoizedState),
			(o.state = p),
			nl(t, r, o, l);
		var w = t.memoizedState;
		u !== m || p !== w || pe.current || tt
			? (typeof x == 'function' && (Di(t, n, x, r), (w = t.memoizedState)),
			  (c = tt || Mu(t, n, c, r, p, w, s) || !1)
					? (h ||
							(typeof o.UNSAFE_componentWillUpdate != 'function' &&
								typeof o.componentWillUpdate != 'function') ||
							(typeof o.componentWillUpdate == 'function' &&
								o.componentWillUpdate(r, w, s),
							typeof o.UNSAFE_componentWillUpdate == 'function' &&
								o.UNSAFE_componentWillUpdate(r, w, s)),
					  typeof o.componentDidUpdate == 'function' && (t.flags |= 4),
					  typeof o.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
					: (typeof o.componentDidUpdate != 'function' ||
							(u === e.memoizedProps && p === e.memoizedState) ||
							(t.flags |= 4),
					  typeof o.getSnapshotBeforeUpdate != 'function' ||
							(u === e.memoizedProps && p === e.memoizedState) ||
							(t.flags |= 1024),
					  (t.memoizedProps = r),
					  (t.memoizedState = w)),
			  (o.props = r),
			  (o.state = w),
			  (o.context = s),
			  (r = c))
			: (typeof o.componentDidUpdate != 'function' ||
					(u === e.memoizedProps && p === e.memoizedState) ||
					(t.flags |= 4),
			  typeof o.getSnapshotBeforeUpdate != 'function' ||
					(u === e.memoizedProps && p === e.memoizedState) ||
					(t.flags |= 1024),
			  (r = !1));
	}
	return Ui(e, t, n, r, i, l);
}
function Ui(e, t, n, r, l, i) {
	Ha(e, t);
	var o = (t.flags & 128) !== 0;
	if (!r && !o) return l && zu(t, n, !1), Ge(e, t, i);
	(r = t.stateNode), (Sd.current = t);
	var u =
		o && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
	return (
		(t.flags |= 1),
		e !== null && o
			? ((t.child = sn(t, e.child, null, i)), (t.child = sn(t, null, u, i)))
			: ue(e, t, u, i),
		(t.memoizedState = r.state),
		l && zu(t, n, !0),
		t.child
	);
}
function Va(e) {
	var t = e.stateNode;
	t.pendingContext
		? Pu(e, t.pendingContext, t.pendingContext !== t.context)
		: t.context && Pu(e, t.context, !1),
		zo(e, t.containerInfo);
}
function Hu(e, t, n, r, l) {
	return un(), So(l), (t.flags |= 256), ue(e, t, n, r), t.child;
}
var Bi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Qi(e) {
	return { baseLanes: e, cachePool: null, transitions: null };
}
function Ka(e, t, n) {
	var r = t.pendingProps,
		l = $.current,
		i = !1,
		o = (t.flags & 128) !== 0,
		u;
	if (
		((u = o) ||
			(u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
		u
			? ((i = !0), (t.flags &= -129))
			: (e === null || e.memoizedState !== null) && (l |= 1),
		I($, l & 1),
		e === null)
	)
		return (
			Mi(t),
			(e = t.memoizedState),
			e !== null && ((e = e.dehydrated), e !== null)
				? (t.mode & 1
						? e.data === '$!'
							? (t.lanes = 8)
							: (t.lanes = 1073741824)
						: (t.lanes = 1),
				  null)
				: ((o = r.children),
				  (e = r.fallback),
				  i
						? ((r = t.mode),
						  (i = t.child),
						  (o = { mode: 'hidden', children: o }),
						  !(r & 1) && i !== null
								? ((i.childLanes = 0), (i.pendingProps = o))
								: (i = El(o, r, 0, null)),
						  (e = Lt(e, r, n, null)),
						  (i.return = t),
						  (e.return = t),
						  (i.sibling = e),
						  (t.child = i),
						  (t.child.memoizedState = Qi(n)),
						  (t.memoizedState = Bi),
						  e)
						: jo(t, o))
		);
	if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
		return Ed(e, t, o, r, u, l, n);
	if (i) {
		(i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling);
		var s = { mode: 'hidden', children: r.children };
		return (
			!(o & 1) && t.child !== l
				? ((r = t.child),
				  (r.childLanes = 0),
				  (r.pendingProps = s),
				  (t.deletions = null))
				: ((r = pt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
			u !== null ? (i = pt(u, i)) : ((i = Lt(i, o, n, null)), (i.flags |= 2)),
			(i.return = t),
			(r.return = t),
			(r.sibling = i),
			(t.child = r),
			(r = i),
			(i = t.child),
			(o = e.child.memoizedState),
			(o =
				o === null
					? Qi(n)
					: {
							baseLanes: o.baseLanes | n,
							cachePool: null,
							transitions: o.transitions,
					  }),
			(i.memoizedState = o),
			(i.childLanes = e.childLanes & ~n),
			(t.memoizedState = Bi),
			r
		);
	}
	return (
		(i = e.child),
		(e = i.sibling),
		(r = pt(i, { mode: 'visible', children: r.children })),
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
function jo(e, t) {
	return (
		(t = El({ mode: 'visible', children: t }, e.mode, 0, null)),
		(t.return = e),
		(e.child = t)
	);
}
function Sr(e, t, n, r) {
	return (
		r !== null && So(r),
		sn(t, e.child, null, n),
		(e = jo(t, t.pendingProps.children)),
		(e.flags |= 2),
		(t.memoizedState = null),
		e
	);
}
function Ed(e, t, n, r, l, i, o) {
	if (n)
		return t.flags & 256
			? ((t.flags &= -257), (r = ql(Error(y(422)))), Sr(e, t, o, r))
			: t.memoizedState !== null
			? ((t.child = e.child), (t.flags |= 128), null)
			: ((i = r.fallback),
			  (l = t.mode),
			  (r = El({ mode: 'visible', children: r.children }, l, 0, null)),
			  (i = Lt(i, l, o, null)),
			  (i.flags |= 2),
			  (r.return = t),
			  (i.return = t),
			  (r.sibling = i),
			  (t.child = r),
			  t.mode & 1 && sn(t, e.child, null, o),
			  (t.child.memoizedState = Qi(o)),
			  (t.memoizedState = Bi),
			  i);
	if (!(t.mode & 1)) return Sr(e, t, o, null);
	if (l.data === '$!') {
		if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
		return (r = u), (i = Error(y(419))), (r = ql(i, r, void 0)), Sr(e, t, o, r);
	}
	if (((u = (o & e.childLanes) !== 0), de || u)) {
		if (((r = b), r !== null)) {
			switch (o & -o) {
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
			(l = l & (r.suspendedLanes | o) ? 0 : l),
				l !== 0 &&
					l !== i.retryLane &&
					((i.retryLane = l), Xe(e, l), Oe(r, e, l, -1));
		}
		return $o(), (r = ql(Error(y(421)))), Sr(e, t, o, r);
	}
	return l.data === '$?'
		? ((t.flags |= 128),
		  (t.child = e.child),
		  (t = jd.bind(null, e)),
		  (l._reactRetry = t),
		  null)
		: ((e = i.treeContext),
		  (ye = at(l.nextSibling)),
		  (xe = t),
		  (B = !0),
		  (Re = null),
		  e !== null &&
				((Ee[Ne++] = We),
				(Ee[Ne++] = He),
				(Ee[Ne++] = Rt),
				(We = e.id),
				(He = e.overflow),
				(Rt = t)),
		  (t = jo(t, r.children)),
		  (t.flags |= 4096),
		  t);
}
function Vu(e, t, n) {
	e.lanes |= t;
	var r = e.alternate;
	r !== null && (r.lanes |= t), Oi(e.return, t, n);
}
function bl(e, t, n, r, l) {
	var i = e.memoizedState;
	i === null
		? (e.memoizedState = {
				isBackwards: t,
				rendering: null,
				renderingStartTime: 0,
				last: r,
				tail: n,
				tailMode: l,
		  })
		: ((i.isBackwards = t),
		  (i.rendering = null),
		  (i.renderingStartTime = 0),
		  (i.last = r),
		  (i.tail = n),
		  (i.tailMode = l));
}
function Ya(e, t, n) {
	var r = t.pendingProps,
		l = r.revealOrder,
		i = r.tail;
	if ((ue(e, t, r.children, n), (r = $.current), r & 2))
		(r = (r & 1) | 2), (t.flags |= 128);
	else {
		if (e !== null && e.flags & 128)
			e: for (e = t.child; e !== null; ) {
				if (e.tag === 13) e.memoizedState !== null && Vu(e, n, t);
				else if (e.tag === 19) Vu(e, n, t);
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
	if ((I($, r), !(t.mode & 1))) t.memoizedState = null;
	else
		switch (l) {
			case 'forwards':
				for (n = t.child, l = null; n !== null; )
					(e = n.alternate),
						e !== null && rl(e) === null && (l = n),
						(n = n.sibling);
				(n = l),
					n === null
						? ((l = t.child), (t.child = null))
						: ((l = n.sibling), (n.sibling = null)),
					bl(t, !1, l, n, i);
				break;
			case 'backwards':
				for (n = null, l = t.child, t.child = null; l !== null; ) {
					if (((e = l.alternate), e !== null && rl(e) === null)) {
						t.child = l;
						break;
					}
					(e = l.sibling), (l.sibling = n), (n = l), (l = e);
				}
				bl(t, !0, n, null, i);
				break;
			case 'together':
				bl(t, !1, null, null, void 0);
				break;
			default:
				t.memoizedState = null;
		}
	return t.child;
}
function Dr(e, t) {
	!(t.mode & 1) &&
		e !== null &&
		((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ge(e, t, n) {
	if (
		(e !== null && (t.dependencies = e.dependencies),
		(Ot |= t.lanes),
		!(n & t.childLanes))
	)
		return null;
	if (e !== null && t.child !== e.child) throw Error(y(153));
	if (t.child !== null) {
		for (
			e = t.child, n = pt(e, e.pendingProps), t.child = n, n.return = t;
			e.sibling !== null;

		)
			(e = e.sibling), (n = n.sibling = pt(e, e.pendingProps)), (n.return = t);
		n.sibling = null;
	}
	return t.child;
}
function Nd(e, t, n) {
	switch (t.tag) {
		case 3:
			Va(t), un();
			break;
		case 5:
			wa(t);
			break;
		case 1:
			me(t.type) && Jr(t);
			break;
		case 4:
			zo(t, t.stateNode.containerInfo);
			break;
		case 10:
			var r = t.type._context,
				l = t.memoizedProps.value;
			I(el, r._currentValue), (r._currentValue = l);
			break;
		case 13:
			if (((r = t.memoizedState), r !== null))
				return r.dehydrated !== null
					? (I($, $.current & 1), (t.flags |= 128), null)
					: n & t.child.childLanes
					? Ka(e, t, n)
					: (I($, $.current & 1),
					  (e = Ge(e, t, n)),
					  e !== null ? e.sibling : null);
			I($, $.current & 1);
			break;
		case 19:
			if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
				if (r) return Ya(e, t, n);
				t.flags |= 128;
			}
			if (
				((l = t.memoizedState),
				l !== null &&
					((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
				I($, $.current),
				r)
			)
				break;
			return null;
		case 22:
		case 23:
			return (t.lanes = 0), Wa(e, t, n);
	}
	return Ge(e, t, n);
}
var Xa, $i, Ga, Za;
Xa = function (e, t) {
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
$i = function () {};
Ga = function (e, t, n, r) {
	var l = e.memoizedProps;
	if (l !== r) {
		(e = t.stateNode), Pt(Be.current);
		var i = null;
		switch (n) {
			case 'input':
				(l = ci(e, l)), (r = ci(e, r)), (i = []);
				break;
			case 'select':
				(l = H({}, l, { value: void 0 })),
					(r = H({}, r, { value: void 0 })),
					(i = []);
				break;
			case 'textarea':
				(l = pi(e, l)), (r = pi(e, r)), (i = []);
				break;
			default:
				typeof l.onClick != 'function' &&
					typeof r.onClick == 'function' &&
					(e.onclick = Gr);
		}
		hi(n, r);
		var o;
		n = null;
		for (c in l)
			if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
				if (c === 'style') {
					var u = l[c];
					for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''));
				} else
					c !== 'dangerouslySetInnerHTML' &&
						c !== 'children' &&
						c !== 'suppressContentEditableWarning' &&
						c !== 'suppressHydrationWarning' &&
						c !== 'autoFocus' &&
						(Fn.hasOwnProperty(c)
							? i || (i = [])
							: (i = i || []).push(c, null));
		for (c in r) {
			var s = r[c];
			if (
				((u = l != null ? l[c] : void 0),
				r.hasOwnProperty(c) && s !== u && (s != null || u != null))
			)
				if (c === 'style')
					if (u) {
						for (o in u)
							!u.hasOwnProperty(o) ||
								(s && s.hasOwnProperty(o)) ||
								(n || (n = {}), (n[o] = ''));
						for (o in s)
							s.hasOwnProperty(o) &&
								u[o] !== s[o] &&
								(n || (n = {}), (n[o] = s[o]));
					} else n || (i || (i = []), i.push(c, n)), (n = s);
				else
					c === 'dangerouslySetInnerHTML'
						? ((s = s ? s.__html : void 0),
						  (u = u ? u.__html : void 0),
						  s != null && u !== s && (i = i || []).push(c, s))
						: c === 'children'
						? (typeof s != 'string' && typeof s != 'number') ||
						  (i = i || []).push(c, '' + s)
						: c !== 'suppressContentEditableWarning' &&
						  c !== 'suppressHydrationWarning' &&
						  (Fn.hasOwnProperty(c)
								? (s != null && c === 'onScroll' && F('scroll', e),
								  i || u === s || (i = []))
								: (i = i || []).push(c, s));
		}
		n && (i = i || []).push('style', n);
		var c = i;
		(t.updateQueue = c) && (t.flags |= 4);
	}
};
Za = function (e, t, n, r) {
	n !== r && (t.flags |= 4);
};
function Sn(e, t) {
	if (!B)
		switch (e.tailMode) {
			case 'hidden':
				t = e.tail;
				for (var n = null; t !== null; )
					t.alternate !== null && (n = t), (t = t.sibling);
				n === null ? (e.tail = null) : (n.sibling = null);
				break;
			case 'collapsed':
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
function le(e) {
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
function Cd(e, t, n) {
	var r = t.pendingProps;
	switch ((ko(t), t.tag)) {
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
			return le(t), null;
		case 1:
			return me(t.type) && Zr(), le(t), null;
		case 3:
			return (
				(r = t.stateNode),
				an(),
				U(pe),
				U(oe),
				_o(),
				r.pendingContext &&
					((r.context = r.pendingContext), (r.pendingContext = null)),
				(e === null || e.child === null) &&
					(wr(t)
						? (t.flags |= 4)
						: e === null ||
						  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
						  ((t.flags |= 1024), Re !== null && (Zi(Re), (Re = null)))),
				$i(e, t),
				le(t),
				null
			);
		case 5:
			Lo(t);
			var l = Pt(Zn.current);
			if (((n = t.type), e !== null && t.stateNode != null))
				Ga(e, t, n, r, l),
					e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
			else {
				if (!r) {
					if (t.stateNode === null) throw Error(y(166));
					return le(t), null;
				}
				if (((e = Pt(Be.current)), wr(t))) {
					(r = t.stateNode), (n = t.type);
					var i = t.memoizedProps;
					switch (((r[Fe] = t), (r[Xn] = i), (e = (t.mode & 1) !== 0), n)) {
						case 'dialog':
							F('cancel', r), F('close', r);
							break;
						case 'iframe':
						case 'object':
						case 'embed':
							F('load', r);
							break;
						case 'video':
						case 'audio':
							for (l = 0; l < zn.length; l++) F(zn[l], r);
							break;
						case 'source':
							F('error', r);
							break;
						case 'img':
						case 'image':
						case 'link':
							F('error', r), F('load', r);
							break;
						case 'details':
							F('toggle', r);
							break;
						case 'input':
							eu(r, i), F('invalid', r);
							break;
						case 'select':
							(r._wrapperState = { wasMultiple: !!i.multiple }),
								F('invalid', r);
							break;
						case 'textarea':
							nu(r, i), F('invalid', r);
					}
					hi(n, i), (l = null);
					for (var o in i)
						if (i.hasOwnProperty(o)) {
							var u = i[o];
							o === 'children'
								? typeof u == 'string'
									? r.textContent !== u &&
									  (i.suppressHydrationWarning !== !0 &&
											xr(r.textContent, u, e),
									  (l = ['children', u]))
									: typeof u == 'number' &&
									  r.textContent !== '' + u &&
									  (i.suppressHydrationWarning !== !0 &&
											xr(r.textContent, u, e),
									  (l = ['children', '' + u]))
								: Fn.hasOwnProperty(o) &&
								  u != null &&
								  o === 'onScroll' &&
								  F('scroll', r);
						}
					switch (n) {
						case 'input':
							fr(r), tu(r, i, !0);
							break;
						case 'textarea':
							fr(r), ru(r);
							break;
						case 'select':
						case 'option':
							break;
						default:
							typeof i.onClick == 'function' && (r.onclick = Gr);
					}
					(r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
				} else {
					(o = l.nodeType === 9 ? l : l.ownerDocument),
						e === 'http://www.w3.org/1999/xhtml' && (e = Es(n)),
						e === 'http://www.w3.org/1999/xhtml'
							? n === 'script'
								? ((e = o.createElement('div')),
								  (e.innerHTML = '<script></script>'),
								  (e = e.removeChild(e.firstChild)))
								: typeof r.is == 'string'
								? (e = o.createElement(n, { is: r.is }))
								: ((e = o.createElement(n)),
								  n === 'select' &&
										((o = e),
										r.multiple
											? (o.multiple = !0)
											: r.size && (o.size = r.size)))
							: (e = o.createElementNS(e, n)),
						(e[Fe] = t),
						(e[Xn] = r),
						Xa(e, t, !1, !1),
						(t.stateNode = e);
					e: {
						switch (((o = vi(n, r)), n)) {
							case 'dialog':
								F('cancel', e), F('close', e), (l = r);
								break;
							case 'iframe':
							case 'object':
							case 'embed':
								F('load', e), (l = r);
								break;
							case 'video':
							case 'audio':
								for (l = 0; l < zn.length; l++) F(zn[l], e);
								l = r;
								break;
							case 'source':
								F('error', e), (l = r);
								break;
							case 'img':
							case 'image':
							case 'link':
								F('error', e), F('load', e), (l = r);
								break;
							case 'details':
								F('toggle', e), (l = r);
								break;
							case 'input':
								eu(e, r), (l = ci(e, r)), F('invalid', e);
								break;
							case 'option':
								l = r;
								break;
							case 'select':
								(e._wrapperState = { wasMultiple: !!r.multiple }),
									(l = H({}, r, { value: void 0 })),
									F('invalid', e);
								break;
							case 'textarea':
								nu(e, r), (l = pi(e, r)), F('invalid', e);
								break;
							default:
								l = r;
						}
						hi(n, l), (u = l);
						for (i in u)
							if (u.hasOwnProperty(i)) {
								var s = u[i];
								i === 'style'
									? As(e, s)
									: i === 'dangerouslySetInnerHTML'
									? ((s = s ? s.__html : void 0), s != null && Ns(e, s))
									: i === 'children'
									? typeof s == 'string'
										? (n !== 'textarea' || s !== '') && Un(e, s)
										: typeof s == 'number' && Un(e, '' + s)
									: i !== 'suppressContentEditableWarning' &&
									  i !== 'suppressHydrationWarning' &&
									  i !== 'autoFocus' &&
									  (Fn.hasOwnProperty(i)
											? s != null && i === 'onScroll' && F('scroll', e)
											: s != null && io(e, i, s, o));
							}
						switch (n) {
							case 'input':
								fr(e), tu(e, r, !1);
								break;
							case 'textarea':
								fr(e), ru(e);
								break;
							case 'option':
								r.value != null && e.setAttribute('value', '' + mt(r.value));
								break;
							case 'select':
								(e.multiple = !!r.multiple),
									(i = r.value),
									i != null
										? qt(e, !!r.multiple, i, !1)
										: r.defaultValue != null &&
										  qt(e, !!r.multiple, r.defaultValue, !0);
								break;
							default:
								typeof l.onClick == 'function' && (e.onclick = Gr);
						}
						switch (n) {
							case 'button':
							case 'input':
							case 'select':
							case 'textarea':
								r = !!r.autoFocus;
								break e;
							case 'img':
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
			return le(t), null;
		case 6:
			if (e && t.stateNode != null) Za(e, t, e.memoizedProps, r);
			else {
				if (typeof r != 'string' && t.stateNode === null) throw Error(y(166));
				if (((n = Pt(Zn.current)), Pt(Be.current), wr(t))) {
					if (
						((r = t.stateNode),
						(n = t.memoizedProps),
						(r[Fe] = t),
						(i = r.nodeValue !== n) && ((e = xe), e !== null))
					)
						switch (e.tag) {
							case 3:
								xr(r.nodeValue, n, (e.mode & 1) !== 0);
								break;
							case 5:
								e.memoizedProps.suppressHydrationWarning !== !0 &&
									xr(r.nodeValue, n, (e.mode & 1) !== 0);
						}
					i && (t.flags |= 4);
				} else
					(r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
						(r[Fe] = t),
						(t.stateNode = r);
			}
			return le(t), null;
		case 13:
			if (
				(U($),
				(r = t.memoizedState),
				e === null ||
					(e.memoizedState !== null && e.memoizedState.dehydrated !== null))
			) {
				if (B && ye !== null && t.mode & 1 && !(t.flags & 128))
					pa(), un(), (t.flags |= 98560), (i = !1);
				else if (((i = wr(t)), r !== null && r.dehydrated !== null)) {
					if (e === null) {
						if (!i) throw Error(y(318));
						if (
							((i = t.memoizedState),
							(i = i !== null ? i.dehydrated : null),
							!i)
						)
							throw Error(y(317));
						i[Fe] = t;
					} else
						un(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
					le(t), (i = !1);
				} else Re !== null && (Zi(Re), (Re = null)), (i = !0);
				if (!i) return t.flags & 65536 ? t : null;
			}
			return t.flags & 128
				? ((t.lanes = n), t)
				: ((r = r !== null),
				  r !== (e !== null && e.memoizedState !== null) &&
						r &&
						((t.child.flags |= 8192),
						t.mode & 1 &&
							(e === null || $.current & 1 ? Z === 0 && (Z = 3) : $o())),
				  t.updateQueue !== null && (t.flags |= 4),
				  le(t),
				  null);
		case 4:
			return (
				an(), $i(e, t), e === null && Kn(t.stateNode.containerInfo), le(t), null
			);
		case 10:
			return Co(t.type._context), le(t), null;
		case 17:
			return me(t.type) && Zr(), le(t), null;
		case 19:
			if ((U($), (i = t.memoizedState), i === null)) return le(t), null;
			if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
				if (r) Sn(i, !1);
				else {
					if (Z !== 0 || (e !== null && e.flags & 128))
						for (e = t.child; e !== null; ) {
							if (((o = rl(e)), o !== null)) {
								for (
									t.flags |= 128,
										Sn(i, !1),
										r = o.updateQueue,
										r !== null && ((t.updateQueue = r), (t.flags |= 4)),
										t.subtreeFlags = 0,
										r = n,
										n = t.child;
									n !== null;

								)
									(i = n),
										(e = r),
										(i.flags &= 14680066),
										(o = i.alternate),
										o === null
											? ((i.childLanes = 0),
											  (i.lanes = e),
											  (i.child = null),
											  (i.subtreeFlags = 0),
											  (i.memoizedProps = null),
											  (i.memoizedState = null),
											  (i.updateQueue = null),
											  (i.dependencies = null),
											  (i.stateNode = null))
											: ((i.childLanes = o.childLanes),
											  (i.lanes = o.lanes),
											  (i.child = o.child),
											  (i.subtreeFlags = 0),
											  (i.deletions = null),
											  (i.memoizedProps = o.memoizedProps),
											  (i.memoizedState = o.memoizedState),
											  (i.updateQueue = o.updateQueue),
											  (i.type = o.type),
											  (e = o.dependencies),
											  (i.dependencies =
													e === null
														? null
														: {
																lanes: e.lanes,
																firstContext: e.firstContext,
														  })),
										(n = n.sibling);
								return I($, ($.current & 1) | 2), t.child;
							}
							e = e.sibling;
						}
					i.tail !== null &&
						Y() > fn &&
						((t.flags |= 128), (r = !0), Sn(i, !1), (t.lanes = 4194304));
				}
			else {
				if (!r)
					if (((e = rl(o)), e !== null)) {
						if (
							((t.flags |= 128),
							(r = !0),
							(n = e.updateQueue),
							n !== null && ((t.updateQueue = n), (t.flags |= 4)),
							Sn(i, !0),
							i.tail === null && i.tailMode === 'hidden' && !o.alternate && !B)
						)
							return le(t), null;
					} else
						2 * Y() - i.renderingStartTime > fn &&
							n !== 1073741824 &&
							((t.flags |= 128), (r = !0), Sn(i, !1), (t.lanes = 4194304));
				i.isBackwards
					? ((o.sibling = t.child), (t.child = o))
					: ((n = i.last),
					  n !== null ? (n.sibling = o) : (t.child = o),
					  (i.last = o));
			}
			return i.tail !== null
				? ((t = i.tail),
				  (i.rendering = t),
				  (i.tail = t.sibling),
				  (i.renderingStartTime = Y()),
				  (t.sibling = null),
				  (n = $.current),
				  I($, r ? (n & 1) | 2 : n & 1),
				  t)
				: (le(t), null);
		case 22:
		case 23:
			return (
				Qo(),
				(r = t.memoizedState !== null),
				e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
				r && t.mode & 1
					? ge & 1073741824 && (le(t), t.subtreeFlags & 6 && (t.flags |= 8192))
					: le(t),
				null
			);
		case 24:
			return null;
		case 25:
			return null;
	}
	throw Error(y(156, t.tag));
}
function Ad(e, t) {
	switch ((ko(t), t.tag)) {
		case 1:
			return (
				me(t.type) && Zr(),
				(e = t.flags),
				e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 3:
			return (
				an(),
				U(pe),
				U(oe),
				_o(),
				(e = t.flags),
				e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 5:
			return Lo(t), null;
		case 13:
			if ((U($), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
				if (t.alternate === null) throw Error(y(340));
				un();
			}
			return (
				(e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 19:
			return U($), null;
		case 4:
			return an(), null;
		case 10:
			return Co(t.type._context), null;
		case 22:
		case 23:
			return Qo(), null;
		case 24:
			return null;
		default:
			return null;
	}
}
var Er = !1,
	ie = !1,
	Pd = typeof WeakSet == 'function' ? WeakSet : Set,
	E = null;
function Zt(e, t) {
	var n = e.ref;
	if (n !== null)
		if (typeof n == 'function')
			try {
				n(null);
			} catch (r) {
				V(e, t, r);
			}
		else n.current = null;
}
function Wi(e, t, n) {
	try {
		n();
	} catch (r) {
		V(e, t, r);
	}
}
var Ku = !1;
function zd(e, t) {
	if (((Ai = Kr), (e = ea()), xo(e))) {
		if ('selectionStart' in e)
			var n = { start: e.selectionStart, end: e.selectionEnd };
		else
			e: {
				n = ((n = e.ownerDocument) && n.defaultView) || window;
				var r = n.getSelection && n.getSelection();
				if (r && r.rangeCount !== 0) {
					n = r.anchorNode;
					var l = r.anchorOffset,
						i = r.focusNode;
					r = r.focusOffset;
					try {
						n.nodeType, i.nodeType;
					} catch {
						n = null;
						break e;
					}
					var o = 0,
						u = -1,
						s = -1,
						c = 0,
						h = 0,
						m = e,
						p = null;
					t: for (;;) {
						for (
							var x;
							m !== n || (l !== 0 && m.nodeType !== 3) || (u = o + l),
								m !== i || (r !== 0 && m.nodeType !== 3) || (s = o + r),
								m.nodeType === 3 && (o += m.nodeValue.length),
								(x = m.firstChild) !== null;

						)
							(p = m), (m = x);
						for (;;) {
							if (m === e) break t;
							if (
								(p === n && ++c === l && (u = o),
								p === i && ++h === r && (s = o),
								(x = m.nextSibling) !== null)
							)
								break;
							(m = p), (p = m.parentNode);
						}
						m = x;
					}
					n = u === -1 || s === -1 ? null : { start: u, end: s };
				} else n = null;
			}
		n = n || { start: 0, end: 0 };
	} else n = null;
	for (Pi = { focusedElem: e, selectionRange: n }, Kr = !1, E = t; E !== null; )
		if (((t = E), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
			(e.return = t), (E = e);
		else
			for (; E !== null; ) {
				t = E;
				try {
					var w = t.alternate;
					if (t.flags & 1024)
						switch (t.tag) {
							case 0:
							case 11:
							case 15:
								break;
							case 1:
								if (w !== null) {
									var k = w.memoizedProps,
										D = w.memoizedState,
										f = t.stateNode,
										a = f.getSnapshotBeforeUpdate(
											t.elementType === t.type ? k : _e(t.type, k),
											D
										);
									f.__reactInternalSnapshotBeforeUpdate = a;
								}
								break;
							case 3:
								var d = t.stateNode.containerInfo;
								d.nodeType === 1
									? (d.textContent = '')
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
								throw Error(y(163));
						}
				} catch (g) {
					V(t, t.return, g);
				}
				if (((e = t.sibling), e !== null)) {
					(e.return = t.return), (E = e);
					break;
				}
				E = t.return;
			}
	return (w = Ku), (Ku = !1), w;
}
function Dn(e, t, n) {
	var r = t.updateQueue;
	if (((r = r !== null ? r.lastEffect : null), r !== null)) {
		var l = (r = r.next);
		do {
			if ((l.tag & e) === e) {
				var i = l.destroy;
				(l.destroy = void 0), i !== void 0 && Wi(t, n, i);
			}
			l = l.next;
		} while (l !== r);
	}
}
function kl(e, t) {
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
function Hi(e) {
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
		typeof t == 'function' ? t(e) : (t.current = e);
	}
}
function Ja(e) {
	var t = e.alternate;
	t !== null && ((e.alternate = null), Ja(t)),
		(e.child = null),
		(e.deletions = null),
		(e.sibling = null),
		e.tag === 5 &&
			((t = e.stateNode),
			t !== null &&
				(delete t[Fe], delete t[Xn], delete t[_i], delete t[cd], delete t[fd])),
		(e.stateNode = null),
		(e.return = null),
		(e.dependencies = null),
		(e.memoizedProps = null),
		(e.memoizedState = null),
		(e.pendingProps = null),
		(e.stateNode = null),
		(e.updateQueue = null);
}
function qa(e) {
	return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Yu(e) {
	e: for (;;) {
		for (; e.sibling === null; ) {
			if (e.return === null || qa(e.return)) return null;
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
function Vi(e, t, n) {
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
				  n != null || t.onclick !== null || (t.onclick = Gr));
	else if (r !== 4 && ((e = e.child), e !== null))
		for (Vi(e, t, n), e = e.sibling; e !== null; ) Vi(e, t, n), (e = e.sibling);
}
function Ki(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6)
		(e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
	else if (r !== 4 && ((e = e.child), e !== null))
		for (Ki(e, t, n), e = e.sibling; e !== null; ) Ki(e, t, n), (e = e.sibling);
}
var ee = null,
	Te = !1;
function be(e, t, n) {
	for (n = n.child; n !== null; ) ba(e, t, n), (n = n.sibling);
}
function ba(e, t, n) {
	if (Ue && typeof Ue.onCommitFiberUnmount == 'function')
		try {
			Ue.onCommitFiberUnmount(pl, n);
		} catch {}
	switch (n.tag) {
		case 5:
			ie || Zt(n, t);
		case 6:
			var r = ee,
				l = Te;
			(ee = null),
				be(e, t, n),
				(ee = r),
				(Te = l),
				ee !== null &&
					(Te
						? ((e = ee),
						  (n = n.stateNode),
						  e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
						: ee.removeChild(n.stateNode));
			break;
		case 18:
			ee !== null &&
				(Te
					? ((e = ee),
					  (n = n.stateNode),
					  e.nodeType === 8
							? Kl(e.parentNode, n)
							: e.nodeType === 1 && Kl(e, n),
					  Wn(e))
					: Kl(ee, n.stateNode));
			break;
		case 4:
			(r = ee),
				(l = Te),
				(ee = n.stateNode.containerInfo),
				(Te = !0),
				be(e, t, n),
				(ee = r),
				(Te = l);
			break;
		case 0:
		case 11:
		case 14:
		case 15:
			if (
				!ie &&
				((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
			) {
				l = r = r.next;
				do {
					var i = l,
						o = i.destroy;
					(i = i.tag),
						o !== void 0 && (i & 2 || i & 4) && Wi(n, t, o),
						(l = l.next);
				} while (l !== r);
			}
			be(e, t, n);
			break;
		case 1:
			if (
				!ie &&
				(Zt(n, t),
				(r = n.stateNode),
				typeof r.componentWillUnmount == 'function')
			)
				try {
					(r.props = n.memoizedProps),
						(r.state = n.memoizedState),
						r.componentWillUnmount();
				} catch (u) {
					V(n, t, u);
				}
			be(e, t, n);
			break;
		case 21:
			be(e, t, n);
			break;
		case 22:
			n.mode & 1
				? ((ie = (r = ie) || n.memoizedState !== null), be(e, t, n), (ie = r))
				: be(e, t, n);
			break;
		default:
			be(e, t, n);
	}
}
function Xu(e) {
	var t = e.updateQueue;
	if (t !== null) {
		e.updateQueue = null;
		var n = e.stateNode;
		n === null && (n = e.stateNode = new Pd()),
			t.forEach(function (r) {
				var l = Id.bind(null, e, r);
				n.has(r) || (n.add(r), r.then(l, l));
			});
	}
}
function Le(e, t) {
	var n = t.deletions;
	if (n !== null)
		for (var r = 0; r < n.length; r++) {
			var l = n[r];
			try {
				var i = e,
					o = t,
					u = o;
				e: for (; u !== null; ) {
					switch (u.tag) {
						case 5:
							(ee = u.stateNode), (Te = !1);
							break e;
						case 3:
							(ee = u.stateNode.containerInfo), (Te = !0);
							break e;
						case 4:
							(ee = u.stateNode.containerInfo), (Te = !0);
							break e;
					}
					u = u.return;
				}
				if (ee === null) throw Error(y(160));
				ba(i, o, l), (ee = null), (Te = !1);
				var s = l.alternate;
				s !== null && (s.return = null), (l.return = null);
			} catch (c) {
				V(l, t, c);
			}
		}
	if (t.subtreeFlags & 12854)
		for (t = t.child; t !== null; ) ec(t, e), (t = t.sibling);
}
function ec(e, t) {
	var n = e.alternate,
		r = e.flags;
	switch (e.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if ((Le(t, e), je(e), r & 4)) {
				try {
					Dn(3, e, e.return), kl(3, e);
				} catch (k) {
					V(e, e.return, k);
				}
				try {
					Dn(5, e, e.return);
				} catch (k) {
					V(e, e.return, k);
				}
			}
			break;
		case 1:
			Le(t, e), je(e), r & 512 && n !== null && Zt(n, n.return);
			break;
		case 5:
			if (
				(Le(t, e),
				je(e),
				r & 512 && n !== null && Zt(n, n.return),
				e.flags & 32)
			) {
				var l = e.stateNode;
				try {
					Un(l, '');
				} catch (k) {
					V(e, e.return, k);
				}
			}
			if (r & 4 && ((l = e.stateNode), l != null)) {
				var i = e.memoizedProps,
					o = n !== null ? n.memoizedProps : i,
					u = e.type,
					s = e.updateQueue;
				if (((e.updateQueue = null), s !== null))
					try {
						u === 'input' && i.type === 'radio' && i.name != null && ks(l, i),
							vi(u, o);
						var c = vi(u, i);
						for (o = 0; o < s.length; o += 2) {
							var h = s[o],
								m = s[o + 1];
							h === 'style'
								? As(l, m)
								: h === 'dangerouslySetInnerHTML'
								? Ns(l, m)
								: h === 'children'
								? Un(l, m)
								: io(l, h, m, c);
						}
						switch (u) {
							case 'input':
								fi(l, i);
								break;
							case 'textarea':
								Ss(l, i);
								break;
							case 'select':
								var p = l._wrapperState.wasMultiple;
								l._wrapperState.wasMultiple = !!i.multiple;
								var x = i.value;
								x != null
									? qt(l, !!i.multiple, x, !1)
									: p !== !!i.multiple &&
									  (i.defaultValue != null
											? qt(l, !!i.multiple, i.defaultValue, !0)
											: qt(l, !!i.multiple, i.multiple ? [] : '', !1));
						}
						l[Xn] = i;
					} catch (k) {
						V(e, e.return, k);
					}
			}
			break;
		case 6:
			if ((Le(t, e), je(e), r & 4)) {
				if (e.stateNode === null) throw Error(y(162));
				(l = e.stateNode), (i = e.memoizedProps);
				try {
					l.nodeValue = i;
				} catch (k) {
					V(e, e.return, k);
				}
			}
			break;
		case 3:
			if (
				(Le(t, e), je(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
			)
				try {
					Wn(t.containerInfo);
				} catch (k) {
					V(e, e.return, k);
				}
			break;
		case 4:
			Le(t, e), je(e);
			break;
		case 13:
			Le(t, e),
				je(e),
				(l = e.child),
				l.flags & 8192 &&
					((i = l.memoizedState !== null),
					(l.stateNode.isHidden = i),
					!i ||
						(l.alternate !== null && l.alternate.memoizedState !== null) ||
						(Uo = Y())),
				r & 4 && Xu(e);
			break;
		case 22:
			if (
				((h = n !== null && n.memoizedState !== null),
				e.mode & 1 ? ((ie = (c = ie) || h), Le(t, e), (ie = c)) : Le(t, e),
				je(e),
				r & 8192)
			) {
				if (
					((c = e.memoizedState !== null),
					(e.stateNode.isHidden = c) && !h && e.mode & 1)
				)
					for (E = e, h = e.child; h !== null; ) {
						for (m = E = h; E !== null; ) {
							switch (((p = E), (x = p.child), p.tag)) {
								case 0:
								case 11:
								case 14:
								case 15:
									Dn(4, p, p.return);
									break;
								case 1:
									Zt(p, p.return);
									var w = p.stateNode;
									if (typeof w.componentWillUnmount == 'function') {
										(r = p), (n = p.return);
										try {
											(t = r),
												(w.props = t.memoizedProps),
												(w.state = t.memoizedState),
												w.componentWillUnmount();
										} catch (k) {
											V(r, n, k);
										}
									}
									break;
								case 5:
									Zt(p, p.return);
									break;
								case 22:
									if (p.memoizedState !== null) {
										Zu(m);
										continue;
									}
							}
							x !== null ? ((x.return = p), (E = x)) : Zu(m);
						}
						h = h.sibling;
					}
				e: for (h = null, m = e; ; ) {
					if (m.tag === 5) {
						if (h === null) {
							h = m;
							try {
								(l = m.stateNode),
									c
										? ((i = l.style),
										  typeof i.setProperty == 'function'
												? i.setProperty('display', 'none', 'important')
												: (i.display = 'none'))
										: ((u = m.stateNode),
										  (s = m.memoizedProps.style),
										  (o =
												s != null && s.hasOwnProperty('display')
													? s.display
													: null),
										  (u.style.display = Cs('display', o)));
							} catch (k) {
								V(e, e.return, k);
							}
						}
					} else if (m.tag === 6) {
						if (h === null)
							try {
								m.stateNode.nodeValue = c ? '' : m.memoizedProps;
							} catch (k) {
								V(e, e.return, k);
							}
					} else if (
						((m.tag !== 22 && m.tag !== 23) ||
							m.memoizedState === null ||
							m === e) &&
						m.child !== null
					) {
						(m.child.return = m), (m = m.child);
						continue;
					}
					if (m === e) break e;
					for (; m.sibling === null; ) {
						if (m.return === null || m.return === e) break e;
						h === m && (h = null), (m = m.return);
					}
					h === m && (h = null), (m.sibling.return = m.return), (m = m.sibling);
				}
			}
			break;
		case 19:
			Le(t, e), je(e), r & 4 && Xu(e);
			break;
		case 21:
			break;
		default:
			Le(t, e), je(e);
	}
}
function je(e) {
	var t = e.flags;
	if (t & 2) {
		try {
			e: {
				for (var n = e.return; n !== null; ) {
					if (qa(n)) {
						var r = n;
						break e;
					}
					n = n.return;
				}
				throw Error(y(160));
			}
			switch (r.tag) {
				case 5:
					var l = r.stateNode;
					r.flags & 32 && (Un(l, ''), (r.flags &= -33));
					var i = Yu(e);
					Ki(e, i, l);
					break;
				case 3:
				case 4:
					var o = r.stateNode.containerInfo,
						u = Yu(e);
					Vi(e, u, o);
					break;
				default:
					throw Error(y(161));
			}
		} catch (s) {
			V(e, e.return, s);
		}
		e.flags &= -3;
	}
	t & 4096 && (e.flags &= -4097);
}
function Ld(e, t, n) {
	(E = e), tc(e);
}
function tc(e, t, n) {
	for (var r = (e.mode & 1) !== 0; E !== null; ) {
		var l = E,
			i = l.child;
		if (l.tag === 22 && r) {
			var o = l.memoizedState !== null || Er;
			if (!o) {
				var u = l.alternate,
					s = (u !== null && u.memoizedState !== null) || ie;
				u = Er;
				var c = ie;
				if (((Er = o), (ie = s) && !c))
					for (E = l; E !== null; )
						(o = E),
							(s = o.child),
							o.tag === 22 && o.memoizedState !== null
								? Ju(l)
								: s !== null
								? ((s.return = o), (E = s))
								: Ju(l);
				for (; i !== null; ) (E = i), tc(i), (i = i.sibling);
				(E = l), (Er = u), (ie = c);
			}
			Gu(e);
		} else
			l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (E = i)) : Gu(e);
	}
}
function Gu(e) {
	for (; E !== null; ) {
		var t = E;
		if (t.flags & 8772) {
			var n = t.alternate;
			try {
				if (t.flags & 8772)
					switch (t.tag) {
						case 0:
						case 11:
						case 15:
							ie || kl(5, t);
							break;
						case 1:
							var r = t.stateNode;
							if (t.flags & 4 && !ie)
								if (n === null) r.componentDidMount();
								else {
									var l =
										t.elementType === t.type
											? n.memoizedProps
											: _e(t.type, n.memoizedProps);
									r.componentDidUpdate(
										l,
										n.memoizedState,
										r.__reactInternalSnapshotBeforeUpdate
									);
								}
							var i = t.updateQueue;
							i !== null && Ru(t, i, r);
							break;
						case 3:
							var o = t.updateQueue;
							if (o !== null) {
								if (((n = null), t.child !== null))
									switch (t.child.tag) {
										case 5:
											n = t.child.stateNode;
											break;
										case 1:
											n = t.child.stateNode;
									}
								Ru(t, o, n);
							}
							break;
						case 5:
							var u = t.stateNode;
							if (n === null && t.flags & 4) {
								n = u;
								var s = t.memoizedProps;
								switch (t.type) {
									case 'button':
									case 'input':
									case 'select':
									case 'textarea':
										s.autoFocus && n.focus();
										break;
									case 'img':
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
									var h = c.memoizedState;
									if (h !== null) {
										var m = h.dehydrated;
										m !== null && Wn(m);
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
							throw Error(y(163));
					}
				ie || (t.flags & 512 && Hi(t));
			} catch (p) {
				V(t, t.return, p);
			}
		}
		if (t === e) {
			E = null;
			break;
		}
		if (((n = t.sibling), n !== null)) {
			(n.return = t.return), (E = n);
			break;
		}
		E = t.return;
	}
}
function Zu(e) {
	for (; E !== null; ) {
		var t = E;
		if (t === e) {
			E = null;
			break;
		}
		var n = t.sibling;
		if (n !== null) {
			(n.return = t.return), (E = n);
			break;
		}
		E = t.return;
	}
}
function Ju(e) {
	for (; E !== null; ) {
		var t = E;
		try {
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					var n = t.return;
					try {
						kl(4, t);
					} catch (s) {
						V(t, n, s);
					}
					break;
				case 1:
					var r = t.stateNode;
					if (typeof r.componentDidMount == 'function') {
						var l = t.return;
						try {
							r.componentDidMount();
						} catch (s) {
							V(t, l, s);
						}
					}
					var i = t.return;
					try {
						Hi(t);
					} catch (s) {
						V(t, i, s);
					}
					break;
				case 5:
					var o = t.return;
					try {
						Hi(t);
					} catch (s) {
						V(t, o, s);
					}
			}
		} catch (s) {
			V(t, t.return, s);
		}
		if (t === e) {
			E = null;
			break;
		}
		var u = t.sibling;
		if (u !== null) {
			(u.return = t.return), (E = u);
			break;
		}
		E = t.return;
	}
}
var _d = Math.ceil,
	ol = Ze.ReactCurrentDispatcher,
	Io = Ze.ReactCurrentOwner,
	Ae = Ze.ReactCurrentBatchConfig,
	O = 0,
	b = null,
	X = null,
	te = 0,
	ge = 0,
	Jt = yt(0),
	Z = 0,
	er = null,
	Ot = 0,
	Sl = 0,
	Fo = 0,
	jn = null,
	fe = null,
	Uo = 0,
	fn = 1 / 0,
	Qe = null,
	ul = !1,
	Yi = null,
	ft = null,
	Nr = !1,
	it = null,
	sl = 0,
	In = 0,
	Xi = null,
	jr = -1,
	Ir = 0;
function se() {
	return O & 6 ? Y() : jr !== -1 ? jr : (jr = Y());
}
function dt(e) {
	return e.mode & 1
		? O & 2 && te !== 0
			? te & -te
			: pd.transition !== null
			? (Ir === 0 && (Ir = Fs()), Ir)
			: ((e = j),
			  e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Vs(e.type))),
			  e)
		: 1;
}
function Oe(e, t, n, r) {
	if (50 < In) throw ((In = 0), (Xi = null), Error(y(185)));
	nr(e, n, r),
		(!(O & 2) || e !== b) &&
			(e === b && (!(O & 2) && (Sl |= n), Z === 4 && rt(e, te)),
			he(e, r),
			n === 1 && O === 0 && !(t.mode & 1) && ((fn = Y() + 500), yl && xt()));
}
function he(e, t) {
	var n = e.callbackNode;
	pf(e, t);
	var r = Vr(e, e === b ? te : 0);
	if (r === 0)
		n !== null && ou(n), (e.callbackNode = null), (e.callbackPriority = 0);
	else if (((t = r & -r), e.callbackPriority !== t)) {
		if ((n != null && ou(n), t === 1))
			e.tag === 0 ? dd(qu.bind(null, e)) : ca(qu.bind(null, e)),
				sd(function () {
					!(O & 6) && xt();
				}),
				(n = null);
		else {
			switch (Us(r)) {
				case 1:
					n = co;
					break;
				case 4:
					n = js;
					break;
				case 16:
					n = Hr;
					break;
				case 536870912:
					n = Is;
					break;
				default:
					n = Hr;
			}
			n = ac(n, nc.bind(null, e));
		}
		(e.callbackPriority = t), (e.callbackNode = n);
	}
}
function nc(e, t) {
	if (((jr = -1), (Ir = 0), O & 6)) throw Error(y(327));
	var n = e.callbackNode;
	if (rn() && e.callbackNode !== n) return null;
	var r = Vr(e, e === b ? te : 0);
	if (r === 0) return null;
	if (r & 30 || r & e.expiredLanes || t) t = al(e, r);
	else {
		t = r;
		var l = O;
		O |= 2;
		var i = lc();
		(b !== e || te !== t) && ((Qe = null), (fn = Y() + 500), zt(e, t));
		do
			try {
				Md();
				break;
			} catch (u) {
				rc(e, u);
			}
		while (1);
		No(),
			(ol.current = i),
			(O = l),
			X !== null ? (t = 0) : ((b = null), (te = 0), (t = Z));
	}
	if (t !== 0) {
		if (
			(t === 2 && ((l = ki(e)), l !== 0 && ((r = l), (t = Gi(e, l)))), t === 1)
		)
			throw ((n = er), zt(e, 0), rt(e, r), he(e, Y()), n);
		if (t === 6) rt(e, r);
		else {
			if (
				((l = e.current.alternate),
				!(r & 30) &&
					!Td(l) &&
					((t = al(e, r)),
					t === 2 && ((i = ki(e)), i !== 0 && ((r = i), (t = Gi(e, i)))),
					t === 1))
			)
				throw ((n = er), zt(e, 0), rt(e, r), he(e, Y()), n);
			switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
				case 0:
				case 1:
					throw Error(y(345));
				case 2:
					Nt(e, fe, Qe);
					break;
				case 3:
					if (
						(rt(e, r), (r & 130023424) === r && ((t = Uo + 500 - Y()), 10 < t))
					) {
						if (Vr(e, 0) !== 0) break;
						if (((l = e.suspendedLanes), (l & r) !== r)) {
							se(), (e.pingedLanes |= e.suspendedLanes & l);
							break;
						}
						e.timeoutHandle = Li(Nt.bind(null, e, fe, Qe), t);
						break;
					}
					Nt(e, fe, Qe);
					break;
				case 4:
					if ((rt(e, r), (r & 4194240) === r)) break;
					for (t = e.eventTimes, l = -1; 0 < r; ) {
						var o = 31 - Me(r);
						(i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
					}
					if (
						((r = l),
						(r = Y() - r),
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
								: 1960 * _d(r / 1960)) - r),
						10 < r)
					) {
						e.timeoutHandle = Li(Nt.bind(null, e, fe, Qe), r);
						break;
					}
					Nt(e, fe, Qe);
					break;
				case 5:
					Nt(e, fe, Qe);
					break;
				default:
					throw Error(y(329));
			}
		}
	}
	return he(e, Y()), e.callbackNode === n ? nc.bind(null, e) : null;
}
function Gi(e, t) {
	var n = jn;
	return (
		e.current.memoizedState.isDehydrated && (zt(e, t).flags |= 256),
		(e = al(e, t)),
		e !== 2 && ((t = fe), (fe = n), t !== null && Zi(t)),
		e
	);
}
function Zi(e) {
	fe === null ? (fe = e) : fe.push.apply(fe, e);
}
function Td(e) {
	for (var t = e; ; ) {
		if (t.flags & 16384) {
			var n = t.updateQueue;
			if (n !== null && ((n = n.stores), n !== null))
				for (var r = 0; r < n.length; r++) {
					var l = n[r],
						i = l.getSnapshot;
					l = l.value;
					try {
						if (!De(i(), l)) return !1;
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
function rt(e, t) {
	for (
		t &= ~Fo,
			t &= ~Sl,
			e.suspendedLanes |= t,
			e.pingedLanes &= ~t,
			e = e.expirationTimes;
		0 < t;

	) {
		var n = 31 - Me(t),
			r = 1 << n;
		(e[n] = -1), (t &= ~r);
	}
}
function qu(e) {
	if (O & 6) throw Error(y(327));
	rn();
	var t = Vr(e, 0);
	if (!(t & 1)) return he(e, Y()), null;
	var n = al(e, t);
	if (e.tag !== 0 && n === 2) {
		var r = ki(e);
		r !== 0 && ((t = r), (n = Gi(e, r)));
	}
	if (n === 1) throw ((n = er), zt(e, 0), rt(e, t), he(e, Y()), n);
	if (n === 6) throw Error(y(345));
	return (
		(e.finishedWork = e.current.alternate),
		(e.finishedLanes = t),
		Nt(e, fe, Qe),
		he(e, Y()),
		null
	);
}
function Bo(e, t) {
	var n = O;
	O |= 1;
	try {
		return e(t);
	} finally {
		(O = n), O === 0 && ((fn = Y() + 500), yl && xt());
	}
}
function Dt(e) {
	it !== null && it.tag === 0 && !(O & 6) && rn();
	var t = O;
	O |= 1;
	var n = Ae.transition,
		r = j;
	try {
		if (((Ae.transition = null), (j = 1), e)) return e();
	} finally {
		(j = r), (Ae.transition = n), (O = t), !(O & 6) && xt();
	}
}
function Qo() {
	(ge = Jt.current), U(Jt);
}
function zt(e, t) {
	(e.finishedWork = null), (e.finishedLanes = 0);
	var n = e.timeoutHandle;
	if ((n !== -1 && ((e.timeoutHandle = -1), ud(n)), X !== null))
		for (n = X.return; n !== null; ) {
			var r = n;
			switch ((ko(r), r.tag)) {
				case 1:
					(r = r.type.childContextTypes), r != null && Zr();
					break;
				case 3:
					an(), U(pe), U(oe), _o();
					break;
				case 5:
					Lo(r);
					break;
				case 4:
					an();
					break;
				case 13:
					U($);
					break;
				case 19:
					U($);
					break;
				case 10:
					Co(r.type._context);
					break;
				case 22:
				case 23:
					Qo();
			}
			n = n.return;
		}
	if (
		((b = e),
		(X = e = pt(e.current, null)),
		(te = ge = t),
		(Z = 0),
		(er = null),
		(Fo = Sl = Ot = 0),
		(fe = jn = null),
		At !== null)
	) {
		for (t = 0; t < At.length; t++)
			if (((n = At[t]), (r = n.interleaved), r !== null)) {
				n.interleaved = null;
				var l = r.next,
					i = n.pending;
				if (i !== null) {
					var o = i.next;
					(i.next = l), (r.next = o);
				}
				n.pending = r;
			}
		At = null;
	}
	return e;
}
function rc(e, t) {
	do {
		var n = X;
		try {
			if ((No(), (Mr.current = il), ll)) {
				for (var r = W.memoizedState; r !== null; ) {
					var l = r.queue;
					l !== null && (l.pending = null), (r = r.next);
				}
				ll = !1;
			}
			if (
				((Mt = 0),
				(q = G = W = null),
				(On = !1),
				(Jn = 0),
				(Io.current = null),
				n === null || n.return === null)
			) {
				(Z = 1), (er = t), (X = null);
				break;
			}
			e: {
				var i = e,
					o = n.return,
					u = n,
					s = t;
				if (
					((t = te),
					(u.flags |= 32768),
					s !== null && typeof s == 'object' && typeof s.then == 'function')
				) {
					var c = s,
						h = u,
						m = h.tag;
					if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
						var p = h.alternate;
						p
							? ((h.updateQueue = p.updateQueue),
							  (h.memoizedState = p.memoizedState),
							  (h.lanes = p.lanes))
							: ((h.updateQueue = null), (h.memoizedState = null));
					}
					var x = Uu(o);
					if (x !== null) {
						(x.flags &= -257),
							Bu(x, o, u, i, t),
							x.mode & 1 && Fu(i, c, t),
							(t = x),
							(s = c);
						var w = t.updateQueue;
						if (w === null) {
							var k = new Set();
							k.add(s), (t.updateQueue = k);
						} else w.add(s);
						break e;
					} else {
						if (!(t & 1)) {
							Fu(i, c, t), $o();
							break e;
						}
						s = Error(y(426));
					}
				} else if (B && u.mode & 1) {
					var D = Uu(o);
					if (D !== null) {
						!(D.flags & 65536) && (D.flags |= 256),
							Bu(D, o, u, i, t),
							So(cn(s, u));
						break e;
					}
				}
				(i = s = cn(s, u)),
					Z !== 4 && (Z = 2),
					jn === null ? (jn = [i]) : jn.push(i),
					(i = o);
				do {
					switch (i.tag) {
						case 3:
							(i.flags |= 65536), (t &= -t), (i.lanes |= t);
							var f = Ba(i, s, t);
							Tu(i, f);
							break e;
						case 1:
							u = s;
							var a = i.type,
								d = i.stateNode;
							if (
								!(i.flags & 128) &&
								(typeof a.getDerivedStateFromError == 'function' ||
									(d !== null &&
										typeof d.componentDidCatch == 'function' &&
										(ft === null || !ft.has(d))))
							) {
								(i.flags |= 65536), (t &= -t), (i.lanes |= t);
								var g = Qa(i, u, t);
								Tu(i, g);
								break e;
							}
					}
					i = i.return;
				} while (i !== null);
			}
			oc(n);
		} catch (S) {
			(t = S), X === n && n !== null && (X = n = n.return);
			continue;
		}
		break;
	} while (1);
}
function lc() {
	var e = ol.current;
	return (ol.current = il), e === null ? il : e;
}
function $o() {
	(Z === 0 || Z === 3 || Z === 2) && (Z = 4),
		b === null || (!(Ot & 268435455) && !(Sl & 268435455)) || rt(b, te);
}
function al(e, t) {
	var n = O;
	O |= 2;
	var r = lc();
	(b !== e || te !== t) && ((Qe = null), zt(e, t));
	do
		try {
			Rd();
			break;
		} catch (l) {
			rc(e, l);
		}
	while (1);
	if ((No(), (O = n), (ol.current = r), X !== null)) throw Error(y(261));
	return (b = null), (te = 0), Z;
}
function Rd() {
	for (; X !== null; ) ic(X);
}
function Md() {
	for (; X !== null && !rf(); ) ic(X);
}
function ic(e) {
	var t = sc(e.alternate, e, ge);
	(e.memoizedProps = e.pendingProps),
		t === null ? oc(e) : (X = t),
		(Io.current = null);
}
function oc(e) {
	var t = e;
	do {
		var n = t.alternate;
		if (((e = t.return), t.flags & 32768)) {
			if (((n = Ad(n, t)), n !== null)) {
				(n.flags &= 32767), (X = n);
				return;
			}
			if (e !== null)
				(e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
			else {
				(Z = 6), (X = null);
				return;
			}
		} else if (((n = Cd(n, t, ge)), n !== null)) {
			X = n;
			return;
		}
		if (((t = t.sibling), t !== null)) {
			X = t;
			return;
		}
		X = t = e;
	} while (t !== null);
	Z === 0 && (Z = 5);
}
function Nt(e, t, n) {
	var r = j,
		l = Ae.transition;
	try {
		(Ae.transition = null), (j = 1), Od(e, t, n, r);
	} finally {
		(Ae.transition = l), (j = r);
	}
	return null;
}
function Od(e, t, n, r) {
	do rn();
	while (it !== null);
	if (O & 6) throw Error(y(327));
	n = e.finishedWork;
	var l = e.finishedLanes;
	if (n === null) return null;
	if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
		throw Error(y(177));
	(e.callbackNode = null), (e.callbackPriority = 0);
	var i = n.lanes | n.childLanes;
	if (
		(mf(e, i),
		e === b && ((X = b = null), (te = 0)),
		(!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
			Nr ||
			((Nr = !0),
			ac(Hr, function () {
				return rn(), null;
			})),
		(i = (n.flags & 15990) !== 0),
		n.subtreeFlags & 15990 || i)
	) {
		(i = Ae.transition), (Ae.transition = null);
		var o = j;
		j = 1;
		var u = O;
		(O |= 4),
			(Io.current = null),
			zd(e, n),
			ec(n, e),
			ed(Pi),
			(Kr = !!Ai),
			(Pi = Ai = null),
			(e.current = n),
			Ld(n),
			lf(),
			(O = u),
			(j = o),
			(Ae.transition = i);
	} else e.current = n;
	if (
		(Nr && ((Nr = !1), (it = e), (sl = l)),
		(i = e.pendingLanes),
		i === 0 && (ft = null),
		sf(n.stateNode),
		he(e, Y()),
		t !== null)
	)
		for (r = e.onRecoverableError, n = 0; n < t.length; n++)
			(l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
	if (ul) throw ((ul = !1), (e = Yi), (Yi = null), e);
	return (
		sl & 1 && e.tag !== 0 && rn(),
		(i = e.pendingLanes),
		i & 1 ? (e === Xi ? In++ : ((In = 0), (Xi = e))) : (In = 0),
		xt(),
		null
	);
}
function rn() {
	if (it !== null) {
		var e = Us(sl),
			t = Ae.transition,
			n = j;
		try {
			if (((Ae.transition = null), (j = 16 > e ? 16 : e), it === null))
				var r = !1;
			else {
				if (((e = it), (it = null), (sl = 0), O & 6)) throw Error(y(331));
				var l = O;
				for (O |= 4, E = e.current; E !== null; ) {
					var i = E,
						o = i.child;
					if (E.flags & 16) {
						var u = i.deletions;
						if (u !== null) {
							for (var s = 0; s < u.length; s++) {
								var c = u[s];
								for (E = c; E !== null; ) {
									var h = E;
									switch (h.tag) {
										case 0:
										case 11:
										case 15:
											Dn(8, h, i);
									}
									var m = h.child;
									if (m !== null) (m.return = h), (E = m);
									else
										for (; E !== null; ) {
											h = E;
											var p = h.sibling,
												x = h.return;
											if ((Ja(h), h === c)) {
												E = null;
												break;
											}
											if (p !== null) {
												(p.return = x), (E = p);
												break;
											}
											E = x;
										}
								}
							}
							var w = i.alternate;
							if (w !== null) {
								var k = w.child;
								if (k !== null) {
									w.child = null;
									do {
										var D = k.sibling;
										(k.sibling = null), (k = D);
									} while (k !== null);
								}
							}
							E = i;
						}
					}
					if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (E = o);
					else
						e: for (; E !== null; ) {
							if (((i = E), i.flags & 2048))
								switch (i.tag) {
									case 0:
									case 11:
									case 15:
										Dn(9, i, i.return);
								}
							var f = i.sibling;
							if (f !== null) {
								(f.return = i.return), (E = f);
								break e;
							}
							E = i.return;
						}
				}
				var a = e.current;
				for (E = a; E !== null; ) {
					o = E;
					var d = o.child;
					if (o.subtreeFlags & 2064 && d !== null) (d.return = o), (E = d);
					else
						e: for (o = a; E !== null; ) {
							if (((u = E), u.flags & 2048))
								try {
									switch (u.tag) {
										case 0:
										case 11:
										case 15:
											kl(9, u);
									}
								} catch (S) {
									V(u, u.return, S);
								}
							if (u === o) {
								E = null;
								break e;
							}
							var g = u.sibling;
							if (g !== null) {
								(g.return = u.return), (E = g);
								break e;
							}
							E = u.return;
						}
				}
				if (
					((O = l), xt(), Ue && typeof Ue.onPostCommitFiberRoot == 'function')
				)
					try {
						Ue.onPostCommitFiberRoot(pl, e);
					} catch {}
				r = !0;
			}
			return r;
		} finally {
			(j = n), (Ae.transition = t);
		}
	}
	return !1;
}
function bu(e, t, n) {
	(t = cn(n, t)),
		(t = Ba(e, t, 1)),
		(e = ct(e, t, 1)),
		(t = se()),
		e !== null && (nr(e, 1, t), he(e, t));
}
function V(e, t, n) {
	if (e.tag === 3) bu(e, e, n);
	else
		for (; t !== null; ) {
			if (t.tag === 3) {
				bu(t, e, n);
				break;
			} else if (t.tag === 1) {
				var r = t.stateNode;
				if (
					typeof t.type.getDerivedStateFromError == 'function' ||
					(typeof r.componentDidCatch == 'function' &&
						(ft === null || !ft.has(r)))
				) {
					(e = cn(n, e)),
						(e = Qa(t, e, 1)),
						(t = ct(t, e, 1)),
						(e = se()),
						t !== null && (nr(t, 1, e), he(t, e));
					break;
				}
			}
			t = t.return;
		}
}
function Dd(e, t, n) {
	var r = e.pingCache;
	r !== null && r.delete(t),
		(t = se()),
		(e.pingedLanes |= e.suspendedLanes & n),
		b === e &&
			(te & n) === n &&
			(Z === 4 || (Z === 3 && (te & 130023424) === te && 500 > Y() - Uo)
				? zt(e, 0)
				: (Fo |= n)),
		he(e, t);
}
function uc(e, t) {
	t === 0 &&
		(e.mode & 1
			? ((t = mr), (mr <<= 1), !(mr & 130023424) && (mr = 4194304))
			: (t = 1));
	var n = se();
	(e = Xe(e, t)), e !== null && (nr(e, t, n), he(e, n));
}
function jd(e) {
	var t = e.memoizedState,
		n = 0;
	t !== null && (n = t.retryLane), uc(e, n);
}
function Id(e, t) {
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
			throw Error(y(314));
	}
	r !== null && r.delete(t), uc(e, n);
}
var sc;
sc = function (e, t, n) {
	if (e !== null)
		if (e.memoizedProps !== t.pendingProps || pe.current) de = !0;
		else {
			if (!(e.lanes & n) && !(t.flags & 128)) return (de = !1), Nd(e, t, n);
			de = !!(e.flags & 131072);
		}
	else (de = !1), B && t.flags & 1048576 && fa(t, br, t.index);
	switch (((t.lanes = 0), t.tag)) {
		case 2:
			var r = t.type;
			Dr(e, t), (e = t.pendingProps);
			var l = on(t, oe.current);
			nn(t, n), (l = Ro(null, t, r, e, l, n));
			var i = Mo();
			return (
				(t.flags |= 1),
				typeof l == 'object' &&
				l !== null &&
				typeof l.render == 'function' &&
				l.$$typeof === void 0
					? ((t.tag = 1),
					  (t.memoizedState = null),
					  (t.updateQueue = null),
					  me(r) ? ((i = !0), Jr(t)) : (i = !1),
					  (t.memoizedState =
							l.state !== null && l.state !== void 0 ? l.state : null),
					  Po(t),
					  (l.updater = xl),
					  (t.stateNode = l),
					  (l._reactInternals = t),
					  ji(t, r, e, n),
					  (t = Ui(null, t, r, !0, i, n)))
					: ((t.tag = 0), B && i && wo(t), ue(null, t, l, n), (t = t.child)),
				t
			);
		case 16:
			r = t.elementType;
			e: {
				switch (
					(Dr(e, t),
					(e = t.pendingProps),
					(l = r._init),
					(r = l(r._payload)),
					(t.type = r),
					(l = t.tag = Ud(r)),
					(e = _e(r, e)),
					l)
				) {
					case 0:
						t = Fi(null, t, r, e, n);
						break e;
					case 1:
						t = Wu(null, t, r, e, n);
						break e;
					case 11:
						t = Qu(null, t, r, e, n);
						break e;
					case 14:
						t = $u(null, t, r, _e(r.type, e), n);
						break e;
				}
				throw Error(y(306, r, ''));
			}
			return t;
		case 0:
			return (
				(r = t.type),
				(l = t.pendingProps),
				(l = t.elementType === r ? l : _e(r, l)),
				Fi(e, t, r, l, n)
			);
		case 1:
			return (
				(r = t.type),
				(l = t.pendingProps),
				(l = t.elementType === r ? l : _e(r, l)),
				Wu(e, t, r, l, n)
			);
		case 3:
			e: {
				if ((Va(t), e === null)) throw Error(y(387));
				(r = t.pendingProps),
					(i = t.memoizedState),
					(l = i.element),
					ha(e, t),
					nl(t, r, null, n);
				var o = t.memoizedState;
				if (((r = o.element), i.isDehydrated))
					if (
						((i = {
							element: r,
							isDehydrated: !1,
							cache: o.cache,
							pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
							transitions: o.transitions,
						}),
						(t.updateQueue.baseState = i),
						(t.memoizedState = i),
						t.flags & 256)
					) {
						(l = cn(Error(y(423)), t)), (t = Hu(e, t, r, n, l));
						break e;
					} else if (r !== l) {
						(l = cn(Error(y(424)), t)), (t = Hu(e, t, r, n, l));
						break e;
					} else
						for (
							ye = at(t.stateNode.containerInfo.firstChild),
								xe = t,
								B = !0,
								Re = null,
								n = xa(t, null, r, n),
								t.child = n;
							n;

						)
							(n.flags = (n.flags & -3) | 4096), (n = n.sibling);
				else {
					if ((un(), r === l)) {
						t = Ge(e, t, n);
						break e;
					}
					ue(e, t, r, n);
				}
				t = t.child;
			}
			return t;
		case 5:
			return (
				wa(t),
				e === null && Mi(t),
				(r = t.type),
				(l = t.pendingProps),
				(i = e !== null ? e.memoizedProps : null),
				(o = l.children),
				zi(r, l) ? (o = null) : i !== null && zi(r, i) && (t.flags |= 32),
				Ha(e, t),
				ue(e, t, o, n),
				t.child
			);
		case 6:
			return e === null && Mi(t), null;
		case 13:
			return Ka(e, t, n);
		case 4:
			return (
				zo(t, t.stateNode.containerInfo),
				(r = t.pendingProps),
				e === null ? (t.child = sn(t, null, r, n)) : ue(e, t, r, n),
				t.child
			);
		case 11:
			return (
				(r = t.type),
				(l = t.pendingProps),
				(l = t.elementType === r ? l : _e(r, l)),
				Qu(e, t, r, l, n)
			);
		case 7:
			return ue(e, t, t.pendingProps, n), t.child;
		case 8:
			return ue(e, t, t.pendingProps.children, n), t.child;
		case 12:
			return ue(e, t, t.pendingProps.children, n), t.child;
		case 10:
			e: {
				if (
					((r = t.type._context),
					(l = t.pendingProps),
					(i = t.memoizedProps),
					(o = l.value),
					I(el, r._currentValue),
					(r._currentValue = o),
					i !== null)
				)
					if (De(i.value, o)) {
						if (i.children === l.children && !pe.current) {
							t = Ge(e, t, n);
							break e;
						}
					} else
						for (i = t.child, i !== null && (i.return = t); i !== null; ) {
							var u = i.dependencies;
							if (u !== null) {
								o = i.child;
								for (var s = u.firstContext; s !== null; ) {
									if (s.context === r) {
										if (i.tag === 1) {
											(s = Ve(-1, n & -n)), (s.tag = 2);
											var c = i.updateQueue;
											if (c !== null) {
												c = c.shared;
												var h = c.pending;
												h === null
													? (s.next = s)
													: ((s.next = h.next), (h.next = s)),
													(c.pending = s);
											}
										}
										(i.lanes |= n),
											(s = i.alternate),
											s !== null && (s.lanes |= n),
											Oi(i.return, n, t),
											(u.lanes |= n);
										break;
									}
									s = s.next;
								}
							} else if (i.tag === 10) o = i.type === t.type ? null : i.child;
							else if (i.tag === 18) {
								if (((o = i.return), o === null)) throw Error(y(341));
								(o.lanes |= n),
									(u = o.alternate),
									u !== null && (u.lanes |= n),
									Oi(o, n, t),
									(o = i.sibling);
							} else o = i.child;
							if (o !== null) o.return = i;
							else
								for (o = i; o !== null; ) {
									if (o === t) {
										o = null;
										break;
									}
									if (((i = o.sibling), i !== null)) {
										(i.return = o.return), (o = i);
										break;
									}
									o = o.return;
								}
							i = o;
						}
				ue(e, t, l.children, n), (t = t.child);
			}
			return t;
		case 9:
			return (
				(l = t.type),
				(r = t.pendingProps.children),
				nn(t, n),
				(l = Pe(l)),
				(r = r(l)),
				(t.flags |= 1),
				ue(e, t, r, n),
				t.child
			);
		case 14:
			return (
				(r = t.type),
				(l = _e(r, t.pendingProps)),
				(l = _e(r.type, l)),
				$u(e, t, r, l, n)
			);
		case 15:
			return $a(e, t, t.type, t.pendingProps, n);
		case 17:
			return (
				(r = t.type),
				(l = t.pendingProps),
				(l = t.elementType === r ? l : _e(r, l)),
				Dr(e, t),
				(t.tag = 1),
				me(r) ? ((e = !0), Jr(t)) : (e = !1),
				nn(t, n),
				ga(t, r, l),
				ji(t, r, l, n),
				Ui(null, t, r, !0, e, n)
			);
		case 19:
			return Ya(e, t, n);
		case 22:
			return Wa(e, t, n);
	}
	throw Error(y(156, t.tag));
};
function ac(e, t) {
	return Ds(e, t);
}
function Fd(e, t, n, r) {
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
function Ce(e, t, n, r) {
	return new Fd(e, t, n, r);
}
function Wo(e) {
	return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Ud(e) {
	if (typeof e == 'function') return Wo(e) ? 1 : 0;
	if (e != null) {
		if (((e = e.$$typeof), e === uo)) return 11;
		if (e === so) return 14;
	}
	return 2;
}
function pt(e, t) {
	var n = e.alternate;
	return (
		n === null
			? ((n = Ce(e.tag, t, e.key, e.mode)),
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
function Fr(e, t, n, r, l, i) {
	var o = 2;
	if (((r = e), typeof e == 'function')) Wo(e) && (o = 1);
	else if (typeof e == 'string') o = 5;
	else
		e: switch (e) {
			case Qt:
				return Lt(n.children, l, i, t);
			case oo:
				(o = 8), (l |= 8);
				break;
			case oi:
				return (
					(e = Ce(12, n, t, l | 2)), (e.elementType = oi), (e.lanes = i), e
				);
			case ui:
				return (e = Ce(13, n, t, l)), (e.elementType = ui), (e.lanes = i), e;
			case si:
				return (e = Ce(19, n, t, l)), (e.elementType = si), (e.lanes = i), e;
			case ys:
				return El(n, l, i, t);
			default:
				if (typeof e == 'object' && e !== null)
					switch (e.$$typeof) {
						case vs:
							o = 10;
							break e;
						case gs:
							o = 9;
							break e;
						case uo:
							o = 11;
							break e;
						case so:
							o = 14;
							break e;
						case et:
							(o = 16), (r = null);
							break e;
					}
				throw Error(y(130, e == null ? e : typeof e, ''));
		}
	return (
		(t = Ce(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
	);
}
function Lt(e, t, n, r) {
	return (e = Ce(7, e, r, t)), (e.lanes = n), e;
}
function El(e, t, n, r) {
	return (
		(e = Ce(22, e, r, t)),
		(e.elementType = ys),
		(e.lanes = n),
		(e.stateNode = { isHidden: !1 }),
		e
	);
}
function ei(e, t, n) {
	return (e = Ce(6, e, null, t)), (e.lanes = n), e;
}
function ti(e, t, n) {
	return (
		(t = Ce(4, e.children !== null ? e.children : [], e.key, t)),
		(t.lanes = n),
		(t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation,
		}),
		t
	);
}
function Bd(e, t, n, r, l) {
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
		(this.eventTimes = Dl(0)),
		(this.expirationTimes = Dl(-1)),
		(this.entangledLanes =
			this.finishedLanes =
			this.mutableReadLanes =
			this.expiredLanes =
			this.pingedLanes =
			this.suspendedLanes =
			this.pendingLanes =
				0),
		(this.entanglements = Dl(0)),
		(this.identifierPrefix = r),
		(this.onRecoverableError = l),
		(this.mutableSourceEagerHydrationData = null);
}
function Ho(e, t, n, r, l, i, o, u, s) {
	return (
		(e = new Bd(e, t, n, u, s)),
		t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
		(i = Ce(3, null, null, t)),
		(e.current = i),
		(i.stateNode = e),
		(i.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null,
		}),
		Po(i),
		e
	);
}
function Qd(e, t, n) {
	var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
	return {
		$$typeof: Bt,
		key: r == null ? null : '' + r,
		children: e,
		containerInfo: t,
		implementation: n,
	};
}
function cc(e) {
	if (!e) return ht;
	e = e._reactInternals;
	e: {
		if (It(e) !== e || e.tag !== 1) throw Error(y(170));
		var t = e;
		do {
			switch (t.tag) {
				case 3:
					t = t.stateNode.context;
					break e;
				case 1:
					if (me(t.type)) {
						t = t.stateNode.__reactInternalMemoizedMergedChildContext;
						break e;
					}
			}
			t = t.return;
		} while (t !== null);
		throw Error(y(171));
	}
	if (e.tag === 1) {
		var n = e.type;
		if (me(n)) return aa(e, n, t);
	}
	return t;
}
function fc(e, t, n, r, l, i, o, u, s) {
	return (
		(e = Ho(n, r, !0, e, l, i, o, u, s)),
		(e.context = cc(null)),
		(n = e.current),
		(r = se()),
		(l = dt(n)),
		(i = Ve(r, l)),
		(i.callback = t ?? null),
		ct(n, i, l),
		(e.current.lanes = l),
		nr(e, l, r),
		he(e, r),
		e
	);
}
function Nl(e, t, n, r) {
	var l = t.current,
		i = se(),
		o = dt(l);
	return (
		(n = cc(n)),
		t.context === null ? (t.context = n) : (t.pendingContext = n),
		(t = Ve(i, o)),
		(t.payload = { element: e }),
		(r = r === void 0 ? null : r),
		r !== null && (t.callback = r),
		(e = ct(l, t, o)),
		e !== null && (Oe(e, l, o, i), Rr(e, l, o)),
		o
	);
}
function cl(e) {
	if (((e = e.current), !e.child)) return null;
	switch (e.child.tag) {
		case 5:
			return e.child.stateNode;
		default:
			return e.child.stateNode;
	}
}
function es(e, t) {
	if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
		var n = e.retryLane;
		e.retryLane = n !== 0 && n < t ? n : t;
	}
}
function Vo(e, t) {
	es(e, t), (e = e.alternate) && es(e, t);
}
function $d() {
	return null;
}
var dc =
	typeof reportError == 'function'
		? reportError
		: function (e) {
				console.error(e);
		  };
function Ko(e) {
	this._internalRoot = e;
}
Cl.prototype.render = Ko.prototype.render = function (e) {
	var t = this._internalRoot;
	if (t === null) throw Error(y(409));
	Nl(e, t, null, null);
};
Cl.prototype.unmount = Ko.prototype.unmount = function () {
	var e = this._internalRoot;
	if (e !== null) {
		this._internalRoot = null;
		var t = e.containerInfo;
		Dt(function () {
			Nl(null, e, null, null);
		}),
			(t[Ye] = null);
	}
};
function Cl(e) {
	this._internalRoot = e;
}
Cl.prototype.unstable_scheduleHydration = function (e) {
	if (e) {
		var t = $s();
		e = { blockedOn: null, target: e, priority: t };
		for (var n = 0; n < nt.length && t !== 0 && t < nt[n].priority; n++);
		nt.splice(n, 0, e), n === 0 && Hs(e);
	}
};
function Yo(e) {
	return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Al(e) {
	return !(
		!e ||
		(e.nodeType !== 1 &&
			e.nodeType !== 9 &&
			e.nodeType !== 11 &&
			(e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
	);
}
function ts() {}
function Wd(e, t, n, r, l) {
	if (l) {
		if (typeof r == 'function') {
			var i = r;
			r = function () {
				var c = cl(o);
				i.call(c);
			};
		}
		var o = fc(t, r, e, 0, null, !1, !1, '', ts);
		return (
			(e._reactRootContainer = o),
			(e[Ye] = o.current),
			Kn(e.nodeType === 8 ? e.parentNode : e),
			Dt(),
			o
		);
	}
	for (; (l = e.lastChild); ) e.removeChild(l);
	if (typeof r == 'function') {
		var u = r;
		r = function () {
			var c = cl(s);
			u.call(c);
		};
	}
	var s = Ho(e, 0, !1, null, null, !1, !1, '', ts);
	return (
		(e._reactRootContainer = s),
		(e[Ye] = s.current),
		Kn(e.nodeType === 8 ? e.parentNode : e),
		Dt(function () {
			Nl(t, s, n, r);
		}),
		s
	);
}
function Pl(e, t, n, r, l) {
	var i = n._reactRootContainer;
	if (i) {
		var o = i;
		if (typeof l == 'function') {
			var u = l;
			l = function () {
				var s = cl(o);
				u.call(s);
			};
		}
		Nl(t, o, e, l);
	} else o = Wd(n, t, e, l, r);
	return cl(o);
}
Bs = function (e) {
	switch (e.tag) {
		case 3:
			var t = e.stateNode;
			if (t.current.memoizedState.isDehydrated) {
				var n = Pn(t.pendingLanes);
				n !== 0 &&
					(fo(t, n | 1), he(t, Y()), !(O & 6) && ((fn = Y() + 500), xt()));
			}
			break;
		case 13:
			Dt(function () {
				var r = Xe(e, 1);
				if (r !== null) {
					var l = se();
					Oe(r, e, 1, l);
				}
			}),
				Vo(e, 1);
	}
};
po = function (e) {
	if (e.tag === 13) {
		var t = Xe(e, 134217728);
		if (t !== null) {
			var n = se();
			Oe(t, e, 134217728, n);
		}
		Vo(e, 134217728);
	}
};
Qs = function (e) {
	if (e.tag === 13) {
		var t = dt(e),
			n = Xe(e, t);
		if (n !== null) {
			var r = se();
			Oe(n, e, t, r);
		}
		Vo(e, t);
	}
};
$s = function () {
	return j;
};
Ws = function (e, t) {
	var n = j;
	try {
		return (j = e), t();
	} finally {
		j = n;
	}
};
yi = function (e, t, n) {
	switch (t) {
		case 'input':
			if ((fi(e, n), (t = n.name), n.type === 'radio' && t != null)) {
				for (n = e; n.parentNode; ) n = n.parentNode;
				for (
					n = n.querySelectorAll(
						'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
					),
						t = 0;
					t < n.length;
					t++
				) {
					var r = n[t];
					if (r !== e && r.form === e.form) {
						var l = gl(r);
						if (!l) throw Error(y(90));
						ws(r), fi(r, l);
					}
				}
			}
			break;
		case 'textarea':
			Ss(e, n);
			break;
		case 'select':
			(t = n.value), t != null && qt(e, !!n.multiple, t, !1);
	}
};
Ls = Bo;
_s = Dt;
var Hd = { usingClientEntryPoint: !1, Events: [lr, Vt, gl, Ps, zs, Bo] },
	En = {
		findFiberByHostInstance: Ct,
		bundleType: 0,
		version: '18.2.0',
		rendererPackageName: 'react-dom',
	},
	Vd = {
		bundleType: En.bundleType,
		version: En.version,
		rendererPackageName: En.rendererPackageName,
		rendererConfig: En.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: Ze.ReactCurrentDispatcher,
		findHostInstanceByFiber: function (e) {
			return (e = Ms(e)), e === null ? null : e.stateNode;
		},
		findFiberByHostInstance: En.findFiberByHostInstance || $d,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
	};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
	var Cr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	if (!Cr.isDisabled && Cr.supportsFiber)
		try {
			(pl = Cr.inject(Vd)), (Ue = Cr);
		} catch {}
}
ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Hd;
ke.createPortal = function (e, t) {
	var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
	if (!Yo(t)) throw Error(y(200));
	return Qd(e, t, null, n);
};
ke.createRoot = function (e, t) {
	if (!Yo(e)) throw Error(y(299));
	var n = !1,
		r = '',
		l = dc;
	return (
		t != null &&
			(t.unstable_strictMode === !0 && (n = !0),
			t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
			t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
		(t = Ho(e, 1, !1, null, null, n, !1, r, l)),
		(e[Ye] = t.current),
		Kn(e.nodeType === 8 ? e.parentNode : e),
		new Ko(t)
	);
};
ke.findDOMNode = function (e) {
	if (e == null) return null;
	if (e.nodeType === 1) return e;
	var t = e._reactInternals;
	if (t === void 0)
		throw typeof e.render == 'function'
			? Error(y(188))
			: ((e = Object.keys(e).join(',')), Error(y(268, e)));
	return (e = Ms(t)), (e = e === null ? null : e.stateNode), e;
};
ke.flushSync = function (e) {
	return Dt(e);
};
ke.hydrate = function (e, t, n) {
	if (!Al(t)) throw Error(y(200));
	return Pl(null, e, t, !0, n);
};
ke.hydrateRoot = function (e, t, n) {
	if (!Yo(e)) throw Error(y(405));
	var r = (n != null && n.hydratedSources) || null,
		l = !1,
		i = '',
		o = dc;
	if (
		(n != null &&
			(n.unstable_strictMode === !0 && (l = !0),
			n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
			n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
		(t = fc(t, null, e, 1, n ?? null, l, !1, i, o)),
		(e[Ye] = t.current),
		Kn(e),
		r)
	)
		for (e = 0; e < r.length; e++)
			(n = r[e]),
				(l = n._getVersion),
				(l = l(n._source)),
				t.mutableSourceEagerHydrationData == null
					? (t.mutableSourceEagerHydrationData = [n, l])
					: t.mutableSourceEagerHydrationData.push(n, l);
	return new Cl(t);
};
ke.render = function (e, t, n) {
	if (!Al(t)) throw Error(y(200));
	return Pl(null, e, t, !1, n);
};
ke.unmountComponentAtNode = function (e) {
	if (!Al(e)) throw Error(y(40));
	return e._reactRootContainer
		? (Dt(function () {
				Pl(null, null, e, !1, function () {
					(e._reactRootContainer = null), (e[Ye] = null);
				});
		  }),
		  !0)
		: !1;
};
ke.unstable_batchedUpdates = Bo;
ke.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
	if (!Al(n)) throw Error(y(200));
	if (e == null || e._reactInternals === void 0) throw Error(y(38));
	return Pl(e, t, n, !1, r);
};
ke.version = '18.2.0-next-9e3b772b8-20220608';
(function (e) {
	function t() {
		if (
			!(
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
			)
		)
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
			} catch (n) {
				console.error(n);
			}
	}
	t(), (e.exports = ke);
})(Qc);
var ns = ri;
(ni.createRoot = ns.createRoot), (ni.hydrateRoot = ns.hydrateRoot);
const vt = ({ styles: e, children: t }) =>
		v('button', {
			type: 'button',
			className: ` font-davidLibre font-medium text-[20px] md:py-4 py-3 px-8 text-white  rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm ${e} `,
			style: { boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.15)' },
			children: t,
		}),
	pc =
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAA3CAYAAABKB8k/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAnjSURBVHgB7VrdjlTHEa7qM/wZKRqiMEBuPHsDK/nCS17AyxMYchfZOPAAAVZKDJEiMetIMY6jsGuc3HpRgnIJeQKGNxguLA1OJIYr5N2LGRQv7M/MqVR1VffpszPs33hsX7jl2XNOn9Pd9fPVV9VtEL6jtnJjepYA6pTnvYPOtY7danfgW2gIE25ff3j6PCLe5tt6+Q0tHUA3P64iE1XAhL9vC/UIseVfEM3aJ50DR9bPHmt0erDP5mBCrXtjum6WBxb87jdH1qdqt9rn5DdAnOJuEbq+sXb4GozRJqbAJsAsKGw6J261L00lVj7FsGHlLsg9El2FMdrEFGCYzMglB3g86nVlba1lt9Xn7C3YZ5ucAmEBpC5MsE1MAUfU9DeE57uNenXr+81Dh35tt51TYzDRxBTINjaafOnwr7r56uDDbgKT5etnrjIrNeReAhzGaBOl0eXfvTUDrv+Qb4MHOrxgleIztWqffHUWxmgTjYHap1+2mDLPAmLTuuoivOWE+dUjG+dgzDbxTByaME1FFBhkvdWjq52pMZLXj+2H1L4zCO3Uuvfr1bXe4eph/nvswu7h9b0r0P3XdH1zQF+Alh7WqAXoFmvvtZd2Gv+9KtC999ZMP+8/JITqqPeI1Dj+3lfz282xawWeXqtXj8Lh81zdvMP1wSyPrAsJoxNKhBZkeQsOHLxba3zZ2s18ZnnJEXWxOJKbO36x3XzO/W4ADQTymRoJz0k/jKPA8hXOnAgNcszhPDM5/ovM6JnNID/nf8QKPaocwsvHfr99ebB8b/oSzyTQ6aweXT87tQX3X/9zesmUaNbef/LafLFtIutem64v/+bMQxb3tghvQorVdSTXwv6aqfD8Y4PB7Gafnq58PH1zu7lZuHflSoR3p0YErSNYstuZ7eapvO7FcxZ+M2cXO04+XmD0s3IGRVagyc8dEEc4qvL7mQApr4j3T35z5ZPTcPz69hgmpJGMQ27QA7/w6PjYUYGM6D7L96ZZVhYS4T96+cbawqgsutLgTbtjSIgimSiB4o3G8l/O9Gq/fbI4JGAOzwR6PLV4YmGEBGx5kpttY2okhFaunL7Jwr9NGVtSfo6rSqz84sSf243XlQDHG+1m7Q9PptDhvHhAPeZXaHRvD5fT/MkDu51duXe6BDdhJ8aW7+MN0bbV6lAQC+43kaGDWBfIyBeDDKf2UrOvfHrmNnvhqh8tK2T5Qu3Kf+a2frf8jzML/D5sKZts8Q4PqUOREzocwFPbrTXkgU3Hgxn3nmUkYBEbe91wVCrr8wy3Z368wMm5S90vhr1Qu/jkGgdxiJFZ/voSROGxyYbbsVodUoCR+0GkRYRe5Y21RdhjOzbX6WGGiz52mJkYVtXBxuF3R3174mK7IR5mzM3lCIuikHB/7f32uVO/2tlwQ0HMC57jBS1oobnfM5vK4NVS/+Chvwpryf4yh1zocCSeTdAF2EcrecCfDqAwjr5xGe0qq45q4gW26DMRXrwAGVZhAm2YhXxSUvxzWn0GYzRUJtJAdliHCbRhBTAuDEyhdRijCfaLPAIT2YFV6E5axv4XXnR/rhDiGMiy/B26U5mFPsh/EEOmH4fHkf1+Gk4VZjOqbmysV13G8SR5bZD3/tc46edimopz9Puj5pXbZL7+llDtF8sjfS58KRlPpA5XvSXThK9IuQaH74tXZ1cQoEvkQ54DWAkAfgzoN6VxuRRRHNy5zm394Z7sGZNvdS0Z4yf2GVp6n1ZKQodG1qeqyULxjdzltmjxMeoQ0i/kbZ7LYhiMoCO9QKDCi5BQ+kZqD2arpI9UUTOSLaCzka+04YWkmo58b4qYyDYBmtWi6GqZoLB5AUOfGsa+ofDs6x7zKKjQfnWPrPANhXfab2vZn8TAFIS3p574uufrR+1TQZIFIQrlIaEaap8uavdh0VQRhEQJKAQh78UIUSg8Aga3sLYaEROEaHmCCiqu0QSgj5J5KXxDEKzvoLCCWlyVVEuaqzHAB1JByVd1UOAafExggEwwhikJeWEw6ycPuWCFYmI1woBajrNVy+ytEWvY1ckTgajAOdEWi3r0JdYvoMGKUvCY3yaYZSnGBBjWEw9GTwr+PacnDii0ET88drAxaBqE4it1oYdLwRypsFBavBDclKIiXlQIxT15OrEoUz2F3UJQ+2ftKykZJzaQY1Cod/zzdtPhnJwg+6NwLON42OqF0MG6wS7GWPmwgj4ooWAcs3zJu/rExs41PjGPTEJQMj+k1PdIbpSw0TWhQKK5PImHRHgqeaRQMvQFkanEOqZgyBnRIxoLPn+op9QIkXwwWL6kiMHnQaHARr7I2H/hhcnDgkaPgYUg8BeqBShcA2wCg6ggUFJSv8dU+AJWkeKZMFBBE9a1xRLL27VTu6OHXl4BhlGPv3gQxgRqtmTjhUmCuvCPsS5t5WoyJJnnNJUGb0CawNAydfSSJEndfo+0vi0SN0FJMTfIuRN7hnmKCStYuMis6MuGALXcpdi2OEjhRhTyhHmQSiwVsn4wtCkf4E/BRBRt0lnN1h4MKSDBzHXMIljtCzF0MZnH5oyWNaYK8eJB4fssjdpcZhQRPTfMS9mg6mAyn5fEgilhT78pcr4v4y3u1EKxySqV0xXoL/B0HTWB85YmtaopBNETar2UldBqpsjxFOImUKnHeKlMiDQLsbyAIjOUlJBHgubPPmvfTWUuKSCxMOjTBZ6mV6RzgIhXclFgCjRIEAM/IT1Pg0qzgU6xqPdiwOszFozksaNhEF0ehnX6GVyGLW1oQ3Pww80WCzQHUdQ0N0AUPimDvay6kq8cA3tZ6BcJrUiKhWEwVJw+6wo7xpI5eEAXH1QunFpod3ZUQJVYW2Il5lWY6IlQMSZWDrGh+wUMNWbgdQqlg46PtjT8lxNkCF9zEaLSl4bE5drfR596v/Zw99D1lw2u6ecTK6IVu7GAi3kiRnJRNkTfESQ4KMVMeEYLoQTwBXX2CS4Hzh/VEHZoa3/6yTWe7bbfEfks6cCC1bDsjD5NON5B5V4T53GtvF7stsI19oe5MJYOhhvs8mK/lHpnO/l2VEDaq4+rdcbEQ16sDnEfgD4HbN0uykFq7msZh+XtJ9o+wynm86LfYz3PVQfNjnwqB5dHYX5fCoS2+sefNnjBm8XeVhOeekXWzlDLZxe3nVHIXHGf2945bhkpWNzL3hvk9NHJvz3Z9SHXnhSQ9qpRrQ8ga7CFPyjo01mQO4len6zQb8ZDHgnYd0WxliclCgvOsPvsZYWP7hf2dhK4ZwUKRU7y/+OCWfkHSyz4DCmz2OmFS4s7SE8jArTMg00+OP33N9mrpb0KPrYCaeveOMlH8dksH+i9zYKxMo5jBt8sAhe40nWcHLEltQxB5fEqrD3Yr9Bp+z9+UxMMwEcrFQAAAABJRU5ErkJggg==',
	Kd = '/assets/CircleText-dd75d033.svg',
	Yd =
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD9SURBVHgB7ZY7CsJAFEWvX1BBLAQLF6GdO3ABti7Kzt7eykZ0BXaCm1DSiRKDinofGSHGRDP5qGAOHMi8hFwy8yYM8C9kEJ4ybdEObaiaRQ06oiZipknH9EKvLne0jpiRFy49wgKHZqFPj7YRgTz06XvUpnRGj8pY17NI13icTgnQWkPd6S3QnKu2pwdoEGZNIxNkTau0pq4rsL/WjWwhyzE2XGNtBvDfHl5KWOPVC5OYXtmne3w4dIs3jZVE6Ab279GXII20ohN6Us93aclxX75qTs9qvEDMSPdKZzobx1D1wHxln6ahaWga+vuhumckOf8MYZ9575iqnvLEDYRCQx3ZEpu6AAAAAElFTkSuQmCC',
	Xd =
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI1SURBVHgB7ZZLSFVRFIb/SrEn2IuioggKalIUBT0g6BJCgybVoAcUNW/SY9qkWZQNciIq6MCJKOJcxZn4diAqCCKigm/xAb71X64l7nvuOdd9vTO5P3wc7tl7rb3P2nv/+wIZ7TcdQvo6QC6S6+QEmSdrgT5Z1rYUlSAV3SAVZIFskHXSSb7YQNnkCSkkj6OSPCQf4KenZNAGC6POJrBMfiLJB70jk+Q1kuss6bPkkvQ3ySNvSIczsLQVkbfQqoTqs3VeJT/IwYh+n5zEwQmeIz1O+yLJT5ILjxBfIimPrEWwNCXW3ofwsn10cvxNNiAsQSMS16edfCcxcpPU2vuaiDwxJ/YePHSZdCF6g7hUR+TIc/rcCjYGP/s29Mw9I5XO+wEyDX+dt+diWFxW4Ld0ag+ZTBV0Y10jV8gRez+GcD2wZy+ZgocKkFjGBvgbRw4Zsbhizxjkkn9Qy9oedI5c8Ix/ZTFihS88Y7ZKKz55n/yHeqkk+eMRe5z0W38xicPw1GnSQobIKNRPtw3j0i6x+dipzkukKNnmvUhc22aEz16q88vpV4496iT5Cv3qCSdhKeKvRLlJyqBrKO2tFpuW5Oy2Id6djkE9Vm6kEadNBszdLaF7DGQTiGXlWNKr5Dn0Psy2PsPQY3AH6tNn7L0MKH78jcwiBUni96QbfhYoyLFqQApHQxR24KU8MUt0F+pCR532cejV1QQ1/nrozk5rUFeyU+XCPgXdofK3ZAbqpyvIKCPTJgYJqjtT5hVQAAAAAElFTkSuQmCC',
	Gd =
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADhSURBVHgB7ZTdDYMwDIRPnYCRskmzQdkAb0ZH6AYdId2gJFKihPzYDs98kgUCOxfOJsDNRYyP3Yfz8VdEyLXKtbEpF+3FJi1ui2TysUAm5KxFneGS95i0Qs83BiHbNSTtot65wbknpedJYInvnEaghOvJpqhnEyzannCeTwtwPSG0nk8LjHoC9D1vBB7g+UGGHWVJ4BOvPYue8frGBPUnmuJZEElNLifLMvWiQIAwHlNS1J9IP1Ltq0WeKBfvTZWzaAT2wc40vKA4KgxazyW4nnQhXD+uCUossl1SjHpyo+MAWoCa0dbSfgwAAAAASUVORK5CYII=',
	Zd = '/assets/TopLeft-72f9c863.svg',
	Ji = '/assets/TopRight-95dd2c88.svg',
	mc = '/assets/BottomRight-029337f9.svg',
	Jd = '/assets/Dish-8d3b885c.png',
	qd = '/assets/Restaurant-10a2d20f.png',
	bd = '/assets/dish-1-67b53f47.png',
	ep = '/assets/dish-2-e5bd8d4c.png',
	tp = '/assets/dish-3-8eb055b7.png',
	np = '/assets/dish-4-2689418f.png',
	Ar = '/assets/Price-48379490.png',
	rp = '/assets/mainDish-b4e8cb37.png',
	lp = '/assets/Onion-2ab23e0e.svg',
	Ur = './assets/GarlicClove-dca0b6b1.svg',
	hc = '/assets/Garlic-98d786a9.svg',
	ip = '/assets/Herbs-dbcf9484.svg',
	op = '/assets/leaf-1-cd9ff3d1.png',
	up = '/assets/leaf-2-a7a47174.png',
	sp = '/assets/leaf-3-2af891dd.png',
	ap = '/assets/leaf-4-06912b26.png',
	cp = '/assets/herbs2-33ad8be7.svg',
	fp = '/assets/Chef-74c82f13.svg',
	dp = '/assets/checkMark-ad1e41bb.svg',
	fl = [
		{ id: 'menu', title: 'Menu' },
		{ id: 'events', title: 'Events' },
		{ id: 'gallery', title: 'Gallery' },
		{ id: 'about', title: 'About' },
		{ id: 'contact', title: 'Contact' },
	],
	rs = [
		{
			id: 1,
			title: 'Lumpia with Sauce',
			desc: 'Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor ',
			img: bd,
			price: Ar,
		},
		{
			id: 2,
			title: 'Fish and Veggie',
			desc: 'Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor ',
			img: ep,
			price: Ar,
		},
		{
			id: 3,
			title: 'Tofu Chili',
			desc: 'Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor ',
			img: tp,
			price: Ar,
		},
		{
			id: 4,
			title: 'Egg and Cucumber',
			desc: 'Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor ',
			img: np,
			price: Ar,
		},
	],
	pp = [
		{ id: 1, message: 'Lorem ipsum dolor sit amet, consectetur' },
		{ id: 2, message: 'Lorem ipsum dolor sit amet, consectetur' },
		{ id: 3, message: 'Lorem ipsum dolor sit amet, consectetur' },
		{ id: 4, message: 'Lorem ipsum dolor sit amet, consectetur' },
		{ id: 5, message: 'Lorem ipsum dolor sit amet, consectetur' },
		{ id: 6, message: 'Lorem ipsum dolor sit amet, consectetur' },
	],
	mp = [
		{ id: 1, day: 'Monday-Friday', hours: '8:00 am to 9:00 pm' },
		{ id: 2, day: 'Saturday', hours: '8:00 am to 11:00 pm' },
		{ id: 3, day: 'Sunday', hours: 'CLOSED' },
	],
	ls = [
		{
			id: 1,
			section: 'Navigation',
			content: [
				{ id: 1, title: 'Menu', link: '/menu' },
				{ id: 2, title: 'About Us', link: '#about' },
				{ id: 3, title: 'Contact Us', link: '#Contact' },
				{ id: 4, title: 'Main Dishes', link: '#about' },
			],
		},
		{
			id: 2,
			section: 'Dishes',
			content: [
				{ id: 1, title: 'Fish & Veggies', link: '/menu/#fish_veggies' },
				{ id: 2, title: 'Tofu Chili', link: '/menu/#tofu_chili' },
				{ id: 3, title: 'Egg & Cucumber', link: '/menu/#egg_cucumber' },
				{ id: 4, title: 'Lumpia w/sauce', link: '/menu/#lumpia_wsauce' },
			],
		},
	],
	Nn = 48,
	hp = ({
		color: e = 'currentColor',
		direction: t = 'left',
		distance: n = 'md',
		duration: r = 0.4,
		easing: l = 'cubic-bezier(0, 0, 0, 1)',
		hideOutline: i = !0,
		label: o,
		lines: u = 3,
		onToggle: s,
		render: c,
		rounded: h = !1,
		size: m = 32,
		toggle: p,
		toggled: x,
	}) => {
		const [w, k] = _t.useState(!1),
			D = Math.max(12, Math.min(Nn, m)),
			f = Math.round((Nn - D) / 2),
			a = D / 12,
			d = Math.round(a),
			S =
				D /
				(u *
					((n === 'lg' ? 0.25 : n === 'sm' ? 0.75 : 0.5) +
						(u === 3 ? 1 : 1.25))),
			C = Math.round(S),
			A = d * u + C * (u - 1),
			P = Math.round((Nn - A) / 2),
			Q =
				u === 3
					? n === 'lg'
						? 4.0425
						: n === 'sm'
						? 5.1625
						: 4.6325
					: n === 'lg'
					? 6.7875
					: n === 'sm'
					? 8.4875
					: 7.6675,
			T = (a - d + (S - C)) / (u === 3 ? 1 : 2),
			ve = parseFloat((D / Q - T / (4 / 3)).toFixed(2)),
			Je = Math.max(0, r),
			qe = {
				cursor: 'pointer',
				height: `${Nn}px`,
				position: 'relative',
				transition: `${Je}s ${l}`,
				userSelect: 'none',
				width: `${Nn}px`,
			},
			hn = {
				background: e,
				height: `${d}px`,
				left: `${f}px`,
				position: 'absolute',
			};
		i && (qe.outline = 'none'), h && (hn.borderRadius = '9em');
		const zl = p || k,
			wt = x !== void 0 ? x : w;
		return c({
			barHeight: d,
			barStyles: hn,
			burgerStyles: qe,
			easing: l,
			handler: () => {
				zl(!wt), typeof s == 'function' && s(!wt);
			},
			isLeft: t === 'left',
			isToggled: wt,
			label: o,
			margin: C,
			move: ve,
			time: Je,
			topOffset: P,
			width: D,
		});
	};
function qi() {
	return (
		(qi =
			Object.assign ||
			function (e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var r in n)
						Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
				}
				return e;
			}),
		qi.apply(this, arguments)
	);
}
const vp = (e) =>
		Ut.createElement(
			hp,
			qi({}, e, {
				render: (t) =>
					Ut.createElement(
						'div',
						{
							className: 'hamburger-react',
							'aria-label': t.label,
							'aria-expanded': t.isToggled,
							onClick: t.handler,
							onKeyUp: (n) => n.key === 'Enter' && t.handler(),
							role: 'button',
							style: {
								...t.burgerStyles,
								transform: `${
									t.isToggled
										? `rotate(${90 * (t.isLeft ? -1 : 1)}deg)`
										: 'none'
								}`,
							},
							tabIndex: 0,
						},
						Ut.createElement('div', {
							style: {
								...t.barStyles,
								width: `${t.width}px`,
								top: `${t.topOffset}px`,
								transition: `${t.time}s ${t.easing}`,
								transform: `${
									t.isToggled
										? `rotate(${45 * (t.isLeft ? -1 : 1)}deg) translate(${
												t.move * (t.isLeft ? -1 : 1)
										  }px, ${t.move}px)`
										: 'none'
								}`,
							},
						}),
						Ut.createElement('div', {
							style: {
								...t.barStyles,
								width: `${t.width}px`,
								top: `${t.topOffset + t.barHeight + t.margin}px`,
								transition: `${t.time}s ${t.easing}`,
								transform: `${t.isToggled ? 'scaleX(0)' : 'none'}`,
							},
						}),
						Ut.createElement('div', {
							style: {
								...t.barStyles,
								width: `${t.width}px`,
								top: `${t.topOffset + t.barHeight * 2 + t.margin * 2}px`,
								transition: `${t.time}s ${t.easing}`,
								transform: `${
									t.isToggled
										? `rotate(${45 * (t.isLeft ? 1 : -1)}deg) translate(${
												t.move * (t.isLeft ? -1 : 1)
										  }px, ${t.move * -1}px)`
										: 'none'
								}`,
							},
						})
					),
			})
		),
	gp = vp;
function yp() {
	const [e, t] = _t.useState(!1);
	return z('div', {
		className: 'md:hidden flex flex-1 justify-end items-center z-10 ',
		children: [
			v(gp, { toggled: e, toggle: t }),
			z('div', {
				className: `${
					e ? 'flex' : 'hidden'
				} p-6 right-0 top-24 absolute mx-4 my-2 min-w-[140px] rounded-xl sidebar bg-secondary text-white flex-col`,
				children: [
					v('ul', {
						className:
							'list-none flex justify-end items-start flex-1 flex-col ',
						children: fl.map((n, r) =>
							v(
								'li',
								{
									className: ` font-davidLibre font-normal cursor-pointer text-[20px] ${
										r === fl.length - 1 ? 'mb-0' : 'mb-4'
									}`,
									children: v('a', { href: `#${n.id}`, children: n.title }),
								},
								n.id
							)
						),
					}),
					v(vt, {
						styles: 'bg-primary mt-5 leading-7',
						children: 'Book a table',
					}),
				],
			}),
		],
	});
}
const M = {
	paragraph: 'font-normal font-inter text-grey leading-[29px]',
	heading: 'font-davidLibre font-bold  leading-[72px]',
	heading6: 'font-inter leading-[40px] text-[12px] text-secondary font-bold',
	artWork: 'z-0 opacity-50',
	links:
		'font-normal cursor font-size-[16px] leading-[29px] font-inter text-secondary/70',
};
function xp() {
	return z('nav', {
		className: '',
		children: [
			z('div', {
				className: 'h-0 w-0 ',
				children: [
					v('div', {
						className:
							'left-[-600px] top-[-500px] circle rounded-full relative',
					}),
					v('div', {
						className:
							'left-[-550px] top-[-1500px] circle rounded-full relative rotate-12',
					}),
					v('div', {
						className:
							'left-[-500px] top-[-2350px] circle rounded-full relative',
					}),
					v('img', {
						src: Kd,
						alt: 'Foods Delicious',
						className:
							' w-[104px] h-[104px] top-[250px] left-[75px] absolute md:inline hidden',
					}),
				],
			}),
			z('div', {
				className:
					'md:justify-between flex w-full  md:px-[100px] px-6 md:pt-[56px] pt-6',
				children: [
					z('div', {
						className: 'flex items-end',
						children: [
							v('img', { src: pc, alt: 'Logo' }),
							v('p', {
								className: 'font-bold pl-[12px] pt-[28px] text-xl',
								children: 'restaurant',
							}),
						],
					}),
					v('ul', {
						className: ' md:flex hidden items-end flex-row ',
						children: fl.map((e, t) =>
							v(
								'li',
								{
									className: ` ${M.links}  ${
										t === fl.length - 1 ? 'mr-0' : 'mr-10'
									}`,
									children: v('a', { href: `#${e.id}`, children: e.title }),
								},
								e.id
							)
						),
					}),
					v(vt, {
						styles: 'bg-primary md:flex hidden leading-7 max-w-[167px]',
						children: 'Book a table',
					}),
					v(yp, {}),
				],
			}),
		],
	});
}
function vc({ styles: e }) {
	const t = [Yd, Xd, Gd];
	return v('div', {
		className: 'flex-row flex ',
		children: t.map((n, r) =>
			v(
				'div',
				{
					className: ` border-secondary border-[1px] border-solid rounded-full w-[45px] h-[45px] cursor-pointer w-[38px] h-[38px] p-1.5 ${
						r === t.length - 1 ? 'mr-0' : 'mr-3'
					}`,
					children: v('img', {
						className: ' h-[25px] w-[25px]',
						src: n,
						alt: '',
					}),
				},
				n
			)
		),
	});
}
function wp() {
	return z('header', {
		id: 'home',
		className:
			'md:flex-row flex-col flex py-3 md:pt-[225px] md:px-[125px] px-8 justify-center  items-center ',
		children: [
			z('div', {
				className: 'flex-1 flex-col xl:px-0 md:pr-16 md:mt-[100px] mt-16 ',
				children: [
					v('h1', {
						className: `${M.heading} md:text-[70px] text-[50px] max-w-[510px] `,
						children: 'We provide the best food for you',
					}),
					v('p', {
						className: `${M.paragraph} md:pt-16 pt-6  max-w-[356px]`,
						children:
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
					}),
					z('div', {
						className: 'md:py-10 pt-8 flex flex-row ',
						children: [
							v(vt, {
								styles: 'bg-black mr-8 max-w-[120px] max-h-[54px]',
								children: 'Menu',
							}),
							v(vt, {
								styles: 'bg-primary z-10 max-w-[167px] max-h-[54px]',
								children: 'Book a table',
							}),
						],
					}),
					z('div', {
						className: 'pt-12 flex flex-row',
						children: [
							v(vc, {}),
							v('div', {
								className:
									'border-[1px] border-solid border-black opacity-[.15] w-[143px] h-[0px] self-center mx-5',
							}),
						],
					}),
				],
			}),
			z('div', {
				className:
					'flex-1 flex md:my-0 my-3 mt-32  relative justify-center items-center justify-items-center',
				children: [
					v('img', {
						className: 'z-10 w-[516px] h-[612px] pl-6',
						src: qd,
						alt: 'Dining Room',
					}),
					v('img', {
						className: `${M.artWork} top-[-75px] left-[-150px] absolute`,
						src: Zd,
						alt: 'Leaf Artwork',
					}),
					v('img', {
						className: `${M.artWork}  top-[-115px] right-[-125px] absolute`,
						src: Ji,
						alt: 'Leaf Artwork',
					}),
					v('img', {
						className:
							' z-20 md:bottom-[10px] bottom-[-125px] md:left-[-150px] left-[-150px] absolute',
						src: Jd,
						alt: 'Dish',
					}),
					v('img', {
						className: `${M.artWork}  md:bottom-[10px] bottom-[-125px] md:rotate-0 rotate-90 right-[-140px] absolute `,
						src: mc,
						alt: 'Leaf Artwork',
					}),
				],
			}),
		],
	});
}
function kp({ title: e, desc: t, index: n, img: r, price: l }) {
	return z('div', {
		className: `mt-32 w-[265px] h-[309px] border-2 border-white border-solid rounded-bl-xl rounded-tr-xl rounded-tl-[2rem] rounded-br-[2rem]  rounded-tr-md rounded-bl-md  flex flex-col text-center hover:bg-white z-20 ${
			n ? 'mr-0' : 'sm:mr-7'
		}`,
		children: [
			z('div', {
				className: 'top-[-100px] left-[10px] relative',
				children: [
					v('img', {
						className: 'max-w-[207px] max-h-[207px] z-10',
						src: r,
						alt: e,
					}),
					v('img', {
						src: l,
						alt: 'Price',
						className:
							'w-[100px] h-[100px] relative top-[-200px] left-[130px] z-20',
					}),
				],
			}),
			v('h6', {
				className: 'font-bold text-xl relative top-[-175px] ',
				children: e,
			}),
			v('p', {
				className: `relative top-[-150px] max-w-[225px] self-center ${M.paragraph}`,
				children: t,
			}),
		],
	});
}
function Sp() {
	return v('div', {
		className: 'flex flex-row flex-wrap justify-center',
		children: rs.map(({ id: e, title: t, desc: n, img: r, price: l }, i) =>
			v(
				kp,
				{ title: t, desc: n, index: i === rs.length - 1, img: r, price: l },
				e
			)
		),
	});
}
function Ep() {
	return z('section', {
		id: 'about',
		className:
			'flex flex-col justify-center bg-secondary/[0.07] sm:pb-64 pb-32 mt-24 justify-center text-center px-8 ',
		children: [
			z('div', {
				className: '',
				children: [
					z('div', {
						className: 'mt-16 flex flex-col justify center',
						children: [
							v('h1', {
								className: `md:text-[60px] text-[30px] leading-[65px] ${M.heading} `,
								children: 'Our Special Dishes',
							}),
							v('p', {
								className: `${M.paragraph} text-[16px] place-self-center mt-5 max-w-[376px] `,
								children:
									'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
							}),
							z('div', {
								className: 'flex flex-row h-0',
								children: [
									v('img', {
										className: `${M.artWork} h-[212px] w-[224px] relative sm:left-[40px] left-[-25px] sm:top-[-155px] top-[-145px]`,
										src: Ji,
										alt: 'Leaf Artwork',
									}),
									v('img', {
										className: `${M.artWork} h-[257px] w-[180px] relative sm:left-[250px] left-[135px] sm:top-[-200px] top-[-200px] sm:flex hidden`,
										src: mc,
										alt: 'Leaf Artwork',
									}),
								],
							}),
						],
					}),
					v(Sp, {}),
					z('div', {
						className: 'flex-row md:flex h-0 hidden',
						children: [
							v('img', {
								src: lp,
								alt: 'Onion',
								className: `${M.artWork} w-[99px] h-[102px] relative top-[-65px] left-[355px]`,
							}),
							v('img', {
								src: ip,
								alt: 'herbs',
								className: `${M.artWork} w-[375px] h-[148px] relative top-[40px] left-[450px]`,
							}),
							v('img', {
								src: Ur,
								alt: 'Garlic Clove',
								className: `${M.artWork}-w-[90px] h-[81px] relative top-[-40px] left-[575px]`,
							}),
							v('img', {
								src: hc,
								alt: 'garlic',
								className: `${M.artWork} w-[118px] h-[124px] relative top-[-70px] left-[625px]`,
							}),
						],
					}),
				],
			}),
			z('div', {
				className: 'flex md:flex-row justify-center md:mt-36 ',
				children: [
					z('div', {
						className: ' ',
						children: [
							z('div', {
								className: 'flex-row h-0 md:flex hidden',
								children: [
									v('img', {
										src: op,
										alt: '',
										className:
											'z-10 w-[91px] h-[189px] relative top-[200px] left-[20px]',
									}),
									v('img', {
										src: up,
										alt: '',
										className:
											'z-10 w-[209px] h-[133px] relative top-[540px] left-[-20px]',
									}),
									v('img', {
										src: sp,
										alt: '',
										className:
											'z-10 w-[194px] h-[129px] relative top-[85px] left-[275px]',
									}),
									v('img', {
										src: ap,
										alt: '',
										className:
											'z-10 w-[96px] h-[178px] relative top-[450px] left-[-125px]',
									}),
								],
							}),
							v('img', {
								className: 'max-w-[719px] max-h-[667px] mr-24 md:flex hidden',
								src: rp,
								alt: 'Main Dish',
							}),
						],
					}),
					z('div', {
						className: 'flex flex-col',
						children: [
							v('img', {
								src: Ji,
								alt: 'Leaf Artwork',
								className: `${M.artWork} w-[224px] h-[212px] relative sm:top-[100px] top-[200px] sm:left-[-50px] left-[50px]`,
							}),
							v('h1', {
								className: ` ${M.heading} text-[60px] leading-[65px] md:max-w-[480px] font-bold md:text-start text-center`,
								children: 'Welcome to Our Restaurant',
							}),
							v('p', {
								className: `${M.paragraph} mt-8 md:max-w-[376px] max-w-[500px] md:text-start text-center md:self-start self-center`,
								children:
									'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
							}),
							z('div', {
								className: 'md:py-10 pt-8 flex flex-row ',
								children: [
									v(vt, {
										styles: 'bg-black mr-8 max-w-[120px] max-h-[54px]',
										children: 'Menu',
									}),
									v(vt, {
										styles: 'bg-primary z-10 w-[167px] max-h-[54px] ',
										children: 'Book a table',
									}),
								],
							}),
							z('div', {
								className: 'md:flex flex-row h-0 mb-16 hidden ',
								children: [
									v('img', {
										src: cp,
										alt: 'Herbs',
										className: `${M.artWork} w-[451px] h-[320px] relative top-[-250px] left-[250px]`,
									}),
									v('img', {
										src: Ur,
										alt: 'garlic Clove',
										className: `${M.artWork} w-[90px] h-[81px] relative top-[-110px] opacity-70 left-[-475px]`,
									}),
									v('img', {
										src: Ur,
										alt: 'garlic clove',
										className: `${M.artWork} w-[90px] h-[81px] relative top-[-10px] left-[-450px] opacity-100 rotate-90`,
									}),
								],
							}),
						],
					}),
				],
			}),
		],
	});
}
function Np() {
	return z('section', {
		className: 'flex sm:flex-row flex-col py-24 mb-44 justify-center',
		children: [
			z('div', {
				className: 'flex flex-col sm:mt-32 sm:mr-16t',
				children: [
					z('div', {
						className: 'flex flex-row h-0',
						children: [
							v('img', {
								className: `${M.artWork} w-[190px] h-[172px] relative top-[-75px] left-[-250px] sm:flex hidden`,
								src: Ur,
								alt: 'Garlic Clove',
							}),
							v('img', {
								className:
									'w-[290px] h-[303px] relative sm:top-[-160px] top-[-100px] sm:left-[-240px] left-[150px] ',
								src: hc,
								alt: 'Garlic',
							}),
						],
					}),
					v('h1', {
						className: ` ${M.heading} text-[60px] leading-[65px] md:max-w-[480px] font-bold md:text-start text-center`,
						children: 'Our Expert Chefs',
					}),
					v('p', {
						className: `${M.paragraph} mt-8 md:max-w-[376px] max-w-[500px] md:text-start text-center md:self-start self-center`,
						children:
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
					}),
					v('div', {
						children: v('div', {
							className: 'flex justify-center',
							children: v('ul', {
								className: 'columns-2 my-5 ',
								children: pp.map(({ id: e, message: t }) =>
									v(
										'li',
										{
											children: z('p', {
												className: `${M.paragraph} max-w-[258px] text-start mt-3 flex`,
												children: [
													v('span', {
														className:
															'w-[24px] h-[24px] bg-primary rounded-full flex justify-center align-center p-1 mr-3',
														children: v('img', {
															className: '',
															src: dp,
															alt: 'Check Mark',
														}),
													}),
													t,
												],
											}),
										},
										e
									)
								),
							}),
						}),
					}),
					z('div', {
						className: 'md:py-10 pt-8 flex flex-row md:self-start self-center',
						children: [
							v(vt, {
								styles: 'bg-black mr-8 max-w-[120px] max-h-[54px]',
								children: 'Menu',
							}),
							v(vt, {
								styles: 'bg-primary z-10 max-w-[167px] max-h-[54px]',
								children: 'Book a table',
							}),
						],
					}),
				],
			}),
			v('div', {
				className: 'flex justify-center md:mt-0 mt-10',
				children: v('img', {
					className: 'w-[507px] h-[695px] ',
					src: fp,
					alt: 'Chef',
				}),
			}),
		],
	});
}
function Cp() {
	return z('footer', {
		className: 'pt-52 flex flex-col md:px-32 pb-[50px] bg-secondary/10 ',
		children: [
			v('div', {
				className: 'h-0 self-center',
				children: z('div', {
					className:
						'max-h-[407px] lg:min-h-[407px] md:min-h-[307px] min-h-[320px] max-w-[1151px] lg:min-w-[1000px] sm:min-w-[700px] min-w-[200px]   relative md:top-[-450px] top-[-450px] rounded-3xl flex flex-col justify-center items-center  ',
					id: 'cta',
					children: [
						z('h2', {
							className:
								'text-white font-davidLibre md:text-[50px] text-[30px] leading-[58px] font-bold text-center md:max-w-[804px] max-w-[400px]',
							children: [
								'Get a Promo Code by ',
								v('br', { className: 'md:flex hidden' }),
								'Subscribing to our Newsletter',
							],
						}),
						z('div', {
							className: ' sm:mt-10 mt-3 flex items-center',
							children: [
								v('input', {
									className:
										'md:w-[667px] w-[333px] h-[80px] rounded-2xl bg-white p-3 font-inter text-[18px] font-normal leading-22px',
									type: 'text',
									placeholder: 'Enter Your Email',
								}),
								v('div', {
									className: 'w-0',
									children: v('button', {
										className:
											'text-white bg-primary rounded-lg md:w-[150px] w-85px h-[57px] font-inter font-semibold text-[16px] leading-[58px] relative md:left-[-165px] left-[-90px]',
										children: 'Subscribe',
									}),
								}),
							],
						}),
					],
				}),
			}),
			z('div', {
				className: 'flex md:flex-row flex-col  md:justify-between ',
				children: [
					z('div', {
						className: 'flex flex-col  ',
						children: [
							z('div', {
								className: ' ',
								children: [
									z('div', {
										className:
											'flex flex-row  items-end md:justify-start justify-center',
										children: [
											v('img', { src: pc, alt: 'Logo' }),
											v('p', {
												className: 'font-bold pl-[12px] pt-[28px] text-xl',
												children: 'restaurant',
											}),
										],
									}),
									z('p', {
										className: `${M.paragraph} md:max-w-[408px] text-[16px] leading-[29px] mt-5 md:text-start text-center `,
										children: [
											'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
											' ',
											v('a', {
												href: '',
												className: 'underline',
												children: 'Learn more',
											}),
										],
									}),
								],
							}),
							v('h6', {
								className: `${M.heading6} mt-6 md:text-start text-center`,
								children: 'Open Hours',
							}),
							v('div', {
								className:
									'flex md:flex-row flex-col md:justify-between items-center',
								children: mp.map(({ id: e, day: t, hours: n }, r) =>
									z(
										'div',
										{
											className: `mt-6  ${r === n.length - 1 ? 'mr-0' : 'mr'}`,
											children: [
												v('p', {
													className: `${M.paragraph} md:text-start text-center`,
													children: t,
												}),
												v('p', { className: `${M.paragraph}`, children: n }),
											],
										},
										e
									)
								),
							}),
						],
					}),
					v('div', {
						className: 'flex flex-row flex-wrap justify-around md:mt-0 mt-10',
						children: ls.map(({ id: e, section: t, content: n }, r) =>
							z(
								'div',
								{
									className: `${r === ls.length - 1 ? 'mr-0' : 'mr-6'}`,
									children: [
										v('h6', { className: `${M.heading6}`, children: t }),
										v('ul', {
											children: n.map(({ id: l, title: i, link: o }, u) =>
												v(
													'li',
													{
														className: `${M.links} mt-4`,
														children: v('a', { href: o, children: i }),
													},
													l
												)
											),
										}),
									],
								},
								e
							)
						),
					}),
					z('div', {
						className: 'flex flex-col items-center',
						children: [
							v('h6', {
								className: `${M.heading6} md:text-start text-center`,
								children: 'FOLLOW US',
							}),
							v(vc, {}),
						],
					}),
				],
			}),
			z('div', {
				className: '',
				children: [
					v('div', {
						className:
							'width-full border-[0.5px] border-secondary/10 border-solid mt-6',
					}),
					z('div', {
						className:
							'mt-8 flex md:flex-row flex-col md:justify-between items-center',
						children: [
							v('div', {
								children: v('p', {
									className: `${M.paragraph} text-[16px] `,
									children: '© 2022 Restaurant. All Rights Reserved.',
								}),
							}),
							z('div', {
								className: 'flex justify-between',
								children: [
									v('a', {
										href: '',
										className: `${M.links} mr-6`,
										children: 'Terms of Service',
									}),
									v('a', {
										href: '',
										className: `${M.links}`,
										children: 'Privacy Policy',
									}),
								],
							}),
						],
					}),
				],
			}),
		],
	});
}
function Ap() {
	return z('div', {
		children: [v(xp, {}), v(wp, {}), v(Ep, {}), v(Np, {}), v(Cp, {})],
	});
}
ni.createRoot(document.getElementById('root')).render(
	v(Ut.StrictMode, { children: v(Ap, {}) })
);
