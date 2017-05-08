"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(function e(t, n, r) {
	function s(o, u) {
		if (!n[o]) {
			if (!t[o]) {
				var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
			}var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
				var n = t[o][1][e];return s(n ? n : e);
			}, l, l.exports, e, t, n, r);
		}return n[o].exports;
	}var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
		s(r[o]);
	}return s;
})({ 1: [function (require, module, exports) {
		/*  AGPLv3.0 License
  * 
  * Hypercalc
  * 
  * Copyright (c) 2017 Simon Y. Blackwell, AnyWhichWay, LLC
  * 
  * This program is free software: you can redistribute it and/or modify
  * it under the terms of the GNU Affero General Public License as published
  * by the Free Software Foundation, either version 3 of the License, or
  * (at your option) any later version.
  * 
  * This program is distributed in the hope that it will be useful,
  * but WITHOUT ANY WARRANTY; without even the implied warranty of
  * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  * GNU Affero General Public License for more details.
  * 
  * You should have received a copy of the GNU Affero General Public License
  * along with this program.  If not, see <http://www.gnu.org/licenses/>.
  * 
  * You can be released from the requirements of the license by purchasing
  * a commercial license. Buying such a license is mandatory as soon as you
  * develop commercial activities involving the Hypercalc software without
  * disclosing the source code of your own applications.
  * 
  * Contact: syblackwell@anywhichway.com
  */
		(function () {
			"use strict";

			var dotDivided = function dotDivided(a, b) {
				return a.map(function (x, i) {
					return a[i] / b[i];
				}).reduce(function (m, n) {
					return m + n;
				});
			};

			var dotProduct = function dotProduct(a, b) {
				return a.map(function (x, i) {
					return a[i] * b[i];
				}).reduce(function (m, n) {
					return m + n;
				});
			};

			var gridDivide = function gridDivide(a, b) {
				return a.map(function (x, i) {
					return a[i] / (Array.isArray(b) ? b[i] : b);
				});
			};

			var gridMultiply = function gridMultiply(a, b) {
				return a.map(function (x, i) {
					return a[i] * (Array.isArray(b) ? b[i] : b);
				});
			};

			function intersection() {
				var args = [].slice.call(arguments).sort(function (a, b) {
					return a.length - b.length;
				}),
				    intersection = new Set(args[0]);
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = intersection[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var elem = _step.value;

						for (var i = 1; i < args.length; i++) {
							if (!args[i].includes(elem)) {
								intersection.delete(elem);
								break;
							}
						}
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}

				return [].concat(_toConsumableArray(intersection));
			}

			function mad(args) {
				args = Array.isArray(args) ? args.slice(0) : [].slice.call(arguments, 0);
				var m = mean(args);
				return mean(args.map(function (num) {
					return Math.abs(num - m);
				}));
			}

			var mMultiply = function mMultiply(a, b) {
				return a.map(function (x, i) {
					return transpose(b).map(function (y, k) {
						return dotProduct(x, y);
					});
				});
			};

			var mDivide = function mDivide(a, b) {
				return a.map(function (x, i) {
					return transpose(b).map(function (y, k) {
						return dotDivided(x, y);
					});
				});
			};

			var mAdd = function mAdd(a, b) {
				return a.map(function (x, i) {
					return a[i] + (Array.isArray(b) ? b[i] || 0 : b);
				});
			};

			var mSubtract = function mSubtract(a, b) {
				return a.map(function (x, i) {
					return a[i] - (Array.isArray(b) ? b[i] || 0 : b);
				});
			};

			function mean(args) {
				args = Array.isArray(args) ? args.slice(0) : [].slice.call(arguments, 0);
				if (!args.length) return Infinity;
				return sum(args) / args.length;
			}

			function median(args) {
				args = Array.isArray(args) ? args.slice(0) : [].slice.call(arguments, 0);
				if (!args.length) return 0;
				var numbers = args.sort(function (a, b) {
					return a - b;
				}),
				    middle = Math.floor(numbers.length / 2),
				    isEven = numbers.length % 2 === 0;
				return isEven ? (numbers[middle] + numbers[middle - 1]) / 2 : numbers[middle];
			}

			function mode(args) {
				args = Array.isArray(args) ? args.slice(0) : [].slice.call(arguments, 0);
				if (!args.length) return [];
				var modeMap = {};
				var modes = [],
				    maxCount = 0;
				var _iteratorNormalCompletion2 = true;
				var _didIteratorError2 = false;
				var _iteratorError2 = undefined;

				try {
					for (var _iterator2 = args[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
						var val = _step2.value;

						if (!modeMap[val]) modeMap[val] = 1;else modeMap[val]++;

						if (modeMap[val] > maxCount) {
							modes = [val];
							maxCount = modeMap[val];
						} else if (modeMap[val] === maxCount) {
							modes.push(val);
							maxCount = modeMap[val];
						}
					}
				} catch (err) {
					_didIteratorError2 = true;
					_iteratorError2 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion2 && _iterator2.return) {
							_iterator2.return();
						}
					} finally {
						if (_didIteratorError2) {
							throw _iteratorError2;
						}
					}
				}

				return modes;
			}

			function stdev(args) {
				args = Array.isArray(args) ? args.slice(0) : [].slice.call(arguments, 0);
				if (!args.length) return 0;
				return Math.sqrt(variance(args));
			}

			function variance(args) {
				args = Array.isArray(args) ? args.slice(0) : [].slice.call(arguments, 0);
				var m = mean(args);
				return mean(args.map(function (num) {
					return Math.pow(num - m, 2);
				}));
			}

			function sum(args) {
				args = Array.isArray(args) ? args.slice(0) : [].slice.call(arguments, 0);
				if (!args.length) return 0;
				return args.reduce(function (accumulator, current) {
					return accumulator + current;
				});
			}

			function zscores(args) {
				args = Array.isArray(args) ? args.slice(0) : [].slice.call(arguments, 0);
				var m = mean(args),
				    sd = stdev(args);
				return args.map(function (num) {
					return (num - m) / sd;
				});
			}

			var transpose = function transpose(a) {
				return a[0].map(function (x, i) {
					return a.map(function (y, k) {
						return y[i];
					});
				});
			};

			var traverse = function traverse(matrix, callback) {
				for (var i = 0; i < matrix.length; i++) {
					var item = matrix[i];
					if (Array.isArray(item)) traverse(item, callback);else callback(item, i, matrix);
				}
			};

			function replaceForA() {
				return {
					boolean: {
						true: 1,
						false: 0
					},
					string: 0,
					undefined: 0,
					null: 0,
					Array: 0
				};
			}

			function coerce(value, options) {
				if (options) {
					var type = typeof value === "undefined" ? "undefined" : _typeof(value);
					if (options.replace) {
						if (options.replace[type] && _typeof(options.replace[type]) === "object" && typeof options.replace[type][value] !== "undefined") return options.replace[type][value];
						if (typeof options.replace[type] !== "undefined") return options.replace[type];
					}
					if (typeof options.NA !== "undefined" && type === "undefined") return options.NA;
					if (typeof options.NaN !== "undefined" && type !== "number") return options.NaN;
				}
				return value;
			}

			var VARGS = [];
			function getargs(args) {
				var last = args[args.length - 1],
				    options = last && (typeof last === "undefined" ? "undefined" : _typeof(last)) === "object" && !Array.isArray(last) ? last : null;
				var values = [];
				!options || (args = args.slice(0, args.length - 1));
				var result = [];
				for (var i = 0; i < args.length; i++) {
					if (args[i] === VARGS) {
						var varg = VARGS.shift();
						if (Array.isArray(varg)) {
							var _iteratorNormalCompletion3 = true;
							var _didIteratorError3 = false;
							var _iteratorError3 = undefined;

							try {
								for (var _iterator3 = varg[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
									var arg = _step3.value;
									result.push(arg);
								}
							} catch (err) {
								_didIteratorError3 = true;
								_iteratorError3 = err;
							} finally {
								try {
									if (!_iteratorNormalCompletion3 && _iterator3.return) {
										_iterator3.return();
									}
								} finally {
									if (_didIteratorError3) {
										throw _iteratorError3;
									}
								}
							}
						} else {
							results.push(varg);
						}
					} else result.push(args[i]);
				}
				VARGS.splice(0, VARGS.length); // do we need this?
				return [result, options];
			}

			function match(pattern, coordinate2) {
				var c1 = pattern.split("."),
				    c2 = coordinate2.split(".");
				return c1.length === c2.length && c1.every(function (key, i) {
					var parts = key.split(":");
					if (parts.length === 1) return parts[0] === "*" || parts[0] === c2[i];
					if (parts[0] === "*") return parts[1] === "*" || c2[i] <= parts[1];
					if (c2[i] >= parts[0]) return parts[1] === "*" || c2[i] <= parts[1];
					return false;
				});
			}

			function Hypercalc() {
				var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

				var me = this,
				    FUNCTIONS = {};
				var CURRENTCELL = void 0,
				    DECLARATIONS = void 0;
				me.options = Object.assign({}, options);
				me.calculating = 0;
				Object.defineProperty(me, "oncalculated", { enumerable: false, configurable: true, writable: true, value: options.oncalculated });

				var declarations = function declarations() {
					var keys = Object.keys(FUNCTIONS);
					var str = "const ";
					keys.forEach(function (key, i) {
						str += key + "=functions['" + key + "']";
						if (i < keys.length - 1) str += ",";
					});
					str += ";";
					return str;
				};

				FUNCTIONS.$ = function (coordinates, options) {
					var values = [],
					    cells = FUNCTIONS.cells(coordinates);
					var _iteratorNormalCompletion4 = true;
					var _didIteratorError4 = false;
					var _iteratorError4 = undefined;

					try {
						for (var _iterator4 = cells[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
							var cell = _step4.value;
							options && options.if ? !options.if(cell.value) || values.push(cell.value) : values.push(cell.value);
						}
					} catch (err) {
						_didIteratorError4 = true;
						_iteratorError4 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion4 && _iterator4.return) {
								_iterator4.return();
							}
						} finally {
							if (_didIteratorError4) {
								throw _iteratorError4;
							}
						}
					}

					return values;
				};
				FUNCTIONS.$summary = function (coordinates) {
					var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { result: "array", values: ["min", "average", "max"] };

					var results = options.result === "array" ? [] : {},
					    values = [],
					    cells = FUNCTIONS.cells(coordinates);
					var _iteratorNormalCompletion5 = true;
					var _didIteratorError5 = false;
					var _iteratorError5 = undefined;

					try {
						for (var _iterator5 = cells[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
							var cell = _step5.value;
							options && options.if ? !options.if(cell.value) || values.push(cell.value) : values.push(cell.value);
						}
					} catch (err) {
						_didIteratorError5 = true;
						_iteratorError5 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion5 && _iterator5.return) {
								_iterator5.return();
							}
						} finally {
							if (_didIteratorError5) {
								throw _iteratorError5;
							}
						}
					}

					var _iteratorNormalCompletion6 = true;
					var _didIteratorError6 = false;
					var _iteratorError6 = undefined;

					try {
						for (var _iterator6 = options.values[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
							var option = _step6.value;

							var value = FUNCTIONS[option](values);
							if (options.result === "array") results.push(value);else results[option] = value;
						}
					} catch (err) {
						_didIteratorError6 = true;
						_iteratorError6 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion6 && _iterator6.return) {
								_iterator6.return();
							}
						} finally {
							if (_didIteratorError6) {
								throw _iteratorError6;
							}
						}
					}

					return results;
				};
				FUNCTIONS.destructure = FUNCTIONS.varg = function (arg) {
					VARGS.push(arg);
					return VARGS;
				};
				FUNCTIONS.values = FUNCTIONS.$a = function (coordinates, options) {
					var values = [],
					    cells = FUNCTIONS.cells(coordinates);
					options = Object.assign({ replace: replaceForA() }, options || {});
					var _iteratorNormalCompletion7 = true;
					var _didIteratorError7 = false;
					var _iteratorError7 = undefined;

					try {
						for (var _iterator7 = cells[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
							var cell = _step7.value;
							options && options.if ? !options.if(cell.value) || values.push(coerce(cell.value, options)) : values.push(coerce(cell.value, options));
						}
					} catch (err) {
						_didIteratorError7 = true;
						_iteratorError7 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion7 && _iterator7.return) {
								_iterator7.return();
							}
						} finally {
							if (_didIteratorError7) {
								throw _iteratorError7;
							}
						}
					}

					return values;
				};
				FUNCTIONS.cells = function (pattern) {
					if (CURRENTCELL) {
						var observers = Cell.observers[pattern];
						if (!observers) {
							observers = {};
							Cell.observers[pattern] = observers;
							//Cell.index(pattern,Cell.observerIndex); // enable once indexing and find enhanced to support ranges
						}
						observers[CURRENTCELL.coordinates] = true;
					}
					return Cell.find(pattern, Cell.cellIndex);
				};
				FUNCTIONS.average = function () {
					var v = void 0,
					    options = void 0;

					var _getargs = getargs([].slice.call(arguments, 0));

					var _getargs2 = _slicedToArray(_getargs, 2);

					v = _getargs2[0];
					options = _getargs2[1];

					if (Array.isArray(v[0])) v = v[0];
					if (options && options.if) v = v.filter(options.if);
					v = v.filter(function (item) {
						return typeof item === "number";
					});
					if (v.length === 0) return 0;
					return mean(v);
				};
				FUNCTIONS.averagea = function () {
					var v = void 0,
					    options = void 0;

					var _getargs3 = getargs([].slice.call(arguments, 0));

					var _getargs4 = _slicedToArray(_getargs3, 2);

					v = _getargs4[0];
					options = _getargs4[1];

					if (Array.isArray(v[0])) v = v[0];
					if (options && options.if) v = v.filter(options.if);
					if (v.length === 0) return 0;
					options = Object.assign({ replace: replaceForA() }, options || {});
					return v.reduce(function (accumulator, current) {
						return accumulator + coerce(current, options);
					}, 0) / v.length;
				};
				FUNCTIONS.count = function () {
					var v = void 0,
					    options = void 0;

					var _getargs5 = getargs([].slice.call(arguments, 0));

					var _getargs6 = _slicedToArray(_getargs5, 2);

					v = _getargs6[0];
					options = _getargs6[1];

					if (options && options.if) v = v.filter(options.if);
					v = v.filter(function (item) {
						return typeof item === "number";
					});
					return v.length;
				};
				FUNCTIONS.counta = function () {
					var v = void 0,
					    options = void 0;

					var _getargs7 = getargs([].slice.call(arguments, 0));

					var _getargs8 = _slicedToArray(_getargs7, 2);

					v = _getargs8[0];
					options = _getargs8[1];

					if (options && options.if) v = v.filter(options.if);
					v = v.filter(function (item) {
						return item !== null && typeof item !== "undefined";
					});
					return v.length;
				};
				FUNCTIONS.cube = function (v) {
					return v * v * v;
				};
				FUNCTIONS.extend = function () {
					var parts = CURRENTCELL.coordinates.split("."),
					    sheet = CURRENTCELL.engine.sheets[parts[0]],
					    startrow = parseInt(parts[2]),
					    data = CURRENTCELL.data;
					var startcol = parseInt(parts[1]),
					    maxcol = startcol,
					    maxrow = startrow,
					    v = void 0,
					    options = void 0;

					var _getargs9 = getargs([].slice.call(arguments, 0));

					var _getargs10 = _slicedToArray(_getargs9, 2);

					v = _getargs10[0];
					options = _getargs10[1];

					CURRENTCELL.compiled = function () {
						// determine dimensions of block required
						for (var i = 0; i < v.length; i++) {
							for (var col = 0; col < v[i].length; col++, maxcol++) {
								var cv = v[i][col];
								if (Array.isArray(cv)) maxrow = Math.max(maxrow, startrow + (cv.length - 1));
							}
						}
						// create full rows for block
						for (var _i = startrow; _i <= maxrow; _i++) {
							sheet.createRow(_i, new Array(maxcol - startcol));
						}
						// populate cells in block
						var currentcol = startcol;
						for (var _i2 = 0; _i2 < v.length; _i2++) {
							for (var _col = 0, currentrow = startrow; _col < v[_i2].length; _col++, currentcol++) {
								var _cv = v[_i2][_col];
								if (Array.isArray(_cv)) {
									for (var row = 0; row < _cv.length; row++) {
										Cell(sheet.name + "." + currentcol + "." + (currentrow + row), _cv[row]);
									}
								} else {
									Cell(sheet.name + "." + currentcol + "." + currentrow, _cv);
								}
							}
						}
						this.computed = Array.isArray(v[0][0]) ? v[0][0][0] : v[0][0];
					};
					CURRENTCELL.data = data;
					CURRENTCELL.compiled();
					return CURRENTCELL.computed;
				};
				FUNCTIONS.factorial = function (v) {
					var result = 1;
					v = Math.round(v);
					while (v) {
						result *= v--;
					}return result;
				};
				FUNCTIONS.intersection = function () {
					var v = void 0,
					    options = void 0;

					var _getargs11 = getargs([].slice.call(arguments, 0));

					var _getargs12 = _slicedToArray(_getargs11, 2);

					v = _getargs12[0];
					options = _getargs12[1];

					if (v.length === 0) return [];
					var result = intersection.apply(undefined, _toConsumableArray(v));
					if (options && options.if) return result.filter(options.if);
					return result;
				};
				FUNCTIONS.isNegative = function (v) {
					return v < 0;
				};
				FUNCTIONS.isNumeric = function (v) {
					return typeof v === "number";
				};
				FUNCTIONS.isPositive = function (v) {
					return v > 0;
				};
				FUNCTIONS.isPrime = function (num) {
					for (var i = 2, s = Math.sqrt(num); i <= s; i++) {
						if (num % i === 0) return false;
					}return num !== 1;
				};
				FUNCTIONS.mad = function () {
					var v = void 0,
					    options = void 0;

					var _getargs13 = getargs([].slice.call(arguments, 0));

					var _getargs14 = _slicedToArray(_getargs13, 2);

					v = _getargs14[0];
					options = _getargs14[1];

					if (options && options.if) v = v.filter(options.if);
					return mad(v);
				};
				FUNCTIONS.max = function () {
					// pattern,options or v1,v2,v3...options
					var v = void 0,
					    options = void 0;

					var _getargs15 = getargs([].slice.call(arguments, 0));

					var _getargs16 = _slicedToArray(_getargs15, 2);

					v = _getargs16[0];
					options = _getargs16[1];

					if (Array.isArray(v[0])) v = v[0];
					if (options && options.if) v = v.filter(options.if);
					if (v.length === 0) return -Infinity;
					return v.reduce(function (accumulator, current) {
						return Math.max(accumulator, current);
					});
				};
				FUNCTIONS.maxa = function () {
					var v = void 0,
					    options = void 0;

					var _getargs17 = getargs([].slice.call(arguments, 0));

					var _getargs18 = _slicedToArray(_getargs17, 2);

					v = _getargs18[0];
					options = _getargs18[1];

					if (Array.isArray(v[0])) v = v[0];
					if (options && options.if) v = v.filter(options.if);
					if (v.length === 0) return -Infinity;
					options = Object.assign({ replace: replaceForA() }, options || {});
					traverse(v, function (item, i, array) {
						return array[i] = coerce(item, { replace: replaceForA() });
					});
					return v.reduce(function (accumulator, current) {
						return Math.max(accumulator, current);
					});
				};
				FUNCTIONS.median = function () {
					var v = void 0,
					    options = void 0;

					var _getargs19 = getargs([].slice.call(arguments, 0));

					var _getargs20 = _slicedToArray(_getargs19, 2);

					v = _getargs20[0];
					options = _getargs20[1];

					if (options && options.if) v = v.filter(options.if);
					return median(v);
				};
				FUNCTIONS.mode = function () {
					var v = void 0,
					    options = void 0;

					var _getargs21 = getargs([].slice.call(arguments, 0));

					var _getargs22 = _slicedToArray(_getargs21, 2);

					v = _getargs22[0];
					options = _getargs22[1];

					if (options && options.if) v = v.filter(options.if);
					return mode(v);
				};
				FUNCTIONS.min = function () {
					// pattern,options or v1,v2,v3...options
					var v = void 0,
					    options = void 0;

					var _getargs23 = getargs([].slice.call(arguments, 0));

					var _getargs24 = _slicedToArray(_getargs23, 2);

					v = _getargs24[0];
					options = _getargs24[1];

					if (Array.isArray(v[0])) v = v[0];
					if (options && options.if) v = v.filter(options.if);
					if (v.length === 0) return Infinity;
					return v.reduce(function (accumulator, current) {
						return Math.min(accumulator, current);
					});
				};
				FUNCTIONS.mina = function () {
					var v = void 0,
					    options = void 0;

					var _getargs25 = getargs([].slice.call(arguments, 0));

					var _getargs26 = _slicedToArray(_getargs25, 2);

					v = _getargs26[0];
					options = _getargs26[1];

					if (Array.isArray(v[0])) v = v[0];
					if (options && options.if) v = v.filter(options.if);
					if (v.length === 0) return Infinity;
					options = Object.assign({ replace: replaceForA() }, options || {});
					traverse(v, function (item, i, array) {
						return array[i] = coerce(item, { replace: replaceForA() });
					});
					return v.reduce(function (accumulator, current) {
						return Math.min(accumulator, current);
					});
				};
				FUNCTIONS.power = function (x, y) {
					return x ^ y;
				};
				// power dotPow
				FUNCTIONS.product = function () {
					var v = void 0,
					    options = void 0;

					var _getargs27 = getargs([].slice.call(arguments, 0));

					var _getargs28 = _slicedToArray(_getargs27, 2);

					v = _getargs28[0];
					options = _getargs28[1];

					if (Array.isArray(v[0])) {
						if (Array.isArray(v[0][0])) return v.reduce(function (accumulator, current) {
							return mMultiply(accumulator, current);
						});else if (v.length > 1) {
							v = v.filter(function (item) {
								return typeof item === "number" || Array.isArray(item);
							});
							if (options && options.if) v = v.filter(options.if);
							if (v.length === 0) return 0;
							return v.reduce(function (accumulator, current) {
								return gridMultiply(accumulator, current);
							});
						} else v = v[0];
					}
					if (v.length === 0) return 0;
					v = v.filter(function (item) {
						return typeof item === "number";
					});
					if (options && options.if) v = v.filter(options.if);
					return v.reduce(function (accumulator, current) {
						return accumulator * current;
					}, 1);
				};
				FUNCTIONS.dotProduct = function (a, b) {
					return dotProduct(a, b);
				};
				FUNCTIONS.producta = function () {
					var v = void 0,
					    options = void 0;

					var _getargs29 = getargs([].slice.call(arguments, 0));

					var _getargs30 = _slicedToArray(_getargs29, 2);

					v = _getargs30[0];
					options = _getargs30[1];

					if (options && options.if) v = v.filter(options.if);
					if (v.length === 0) return 0;
					options = Object.assign({
						boolean: {
							true: 1,
							false: 0
						},
						string: 1,
						undefined: 1,
						null: 1,
						Array: 1
					}, options || {});
					traverse(v, function (item, i, array) {
						return array[i] = coerce(item, { replace: options });
					});
					return FUNCTIONS.product.apply(FUNCTIONS, _toConsumableArray(v));
				};
				FUNCTIONS.quotient = function () {
					var v = void 0,
					    options = void 0;

					var _getargs31 = getargs([].slice.call(arguments, 0));

					var _getargs32 = _slicedToArray(_getargs31, 2);

					v = _getargs32[0];
					options = _getargs32[1];

					if (Array.isArray(v[0])) {
						if (Array.isArray(v[0][0])) return v.reduce(function (accumulator, current) {
							return mDivide(accumulator, current);
						});else if (v.length > 1) {
							v = v.filter(function (item) {
								return typeof item === "number" || Array.isArray(item);
							});
							if (options && options.if) v = v.filter(options.if);
							if (v.length === 0) return 0;
							return v.reduce(function (accumulator, current) {
								return gridDivide(accumulator, current);
							});
						} else v = v[0];
					}
					if (v.length === 0) return 0;
					v = v.filter(function (item) {
						return typeof item === "number";
					});
					if (options && options.if) v = v.filter(options.if);
					return v.reduce(function (accumulator, current) {
						return accumulator / current;
					}, 1);
				};
				FUNCTIONS.dotDivided = function (a, b) {
					return dotDivided(a, b);
				};
				FUNCTIONS.quotienta = function () {
					var v = void 0,
					    options = void 0;

					var _getargs33 = getargs([].slice.call(arguments, 0));

					var _getargs34 = _slicedToArray(_getargs33, 2);

					v = _getargs34[0];
					options = _getargs34[1];

					options = Object.assign({ replace: { boolean: 1, string: 1, undefined: 1 } }, options || {});
					if (options.if) v = v.filter(options.if);
					if (v.length === 0) return Infinity;
					options = Object.assign({
						boolean: {
							true: 1,
							false: 0
						},
						string: 1,
						undefined: 1,
						null: 1,
						Array: 1
					}, options || {});
					traverse(v, function (item, i, array) {
						return array[i] = coerce(item, { replace: options });
					});
					return FUNCTIONS.quotient.apply(FUNCTIONS, _toConsumableArray(v));
				};
				FUNCTIONS.remainder = function () {
					var v = void 0,
					    options = void 0;

					var _getargs35 = getargs([].slice.call(arguments, 0));

					var _getargs36 = _slicedToArray(_getargs35, 2);

					v = _getargs36[0];
					options = _getargs36[1];

					if (Array.isArray(v[0])) {
						if (Array.isArray(v[0][0])) return v.reduce(function (accumulator, current) {
							return mSubtract(accumulator, current);
						});else if (v.length > 1) {
							v = v.filter(function (item) {
								return typeof item === "number" || Array.isArray(item);
							});
							if (options && options.if) v = v.filter(options.if);
							if (v.length === 0) return 0;
							return v.reduce(function (accumulator, current) {
								return mSubtract(accumulator, current);
							});
						} else {
							v = v[0];
						}
					}
					if (v.length === 0) return 0;
					v = v.filter(function (item) {
						return typeof item === "number";
					});
					if (options && options.if) v = v.filter(options.if);
					return v.reduce(function (accumulator, current) {
						return accumulator - current;
					});
				};
				FUNCTIONS.remaindera = function () {
					var v = void 0,
					    options = void 0;

					var _getargs37 = getargs([].slice.call(arguments, 0));

					var _getargs38 = _slicedToArray(_getargs37, 2);

					v = _getargs38[0];
					options = _getargs38[1];

					options = Object.assign({ replace: replaceForA() }, options || {});
					if (options && options.if) v = v.filter(options.if);
					return v.reduce(function (accumulator, current) {
						return accumulator - coerce(current, options);
					}, 0);
				};
				FUNCTIONS.square = function (v) {
					return v * v;
				};
				FUNCTIONS.sum = function () {
					var v = void 0,
					    options = void 0;

					var _getargs39 = getargs([].slice.call(arguments, 0));

					var _getargs40 = _slicedToArray(_getargs39, 2);

					v = _getargs40[0];
					options = _getargs40[1];

					if (Array.isArray(v[0])) {
						if (Array.isArray(v[0][0])) return v.reduce(function (accumulator, current) {
							return mAdd(accumulator, current);
						});else if (v.length > 1) {
							v = v.filter(function (item) {
								return typeof item === "number" || Array.isArray(item);
							});
							if (options && options.if) v = v.filter(options.if);
							if (v.length === 0) return 0;
							return v.reduce(function (accumulator, current) {
								return mAdd(accumulator, current);
							});
						} else {
							v = v[0];
						}
					}
					v = v.filter(function (item) {
						return typeof item === "number";
					});
					if (options && options.if) v = v.filter(options.if);
					return v.reduce(function (accumulator, current) {
						return accumulator + current;
					}, 0);
				};
				FUNCTIONS.suma = function () {
					var v = void 0,
					    options = void 0;

					var _getargs41 = getargs([].slice.call(arguments, 0));

					var _getargs42 = _slicedToArray(_getargs41, 2);

					v = _getargs42[0];
					options = _getargs42[1];

					options = Object.assign({ replace: replaceForA() }, options || {});
					if (options && options.if) v = v.filter(options.if);
					return v.reduce(function (accumulator, current) {
						return accumulator + coerce(current, options);
					}, 0);
				};
				FUNCTIONS.type = function (v) {
					var type = typeof v === "undefined" ? "undefined" : _typeof(v);
					return v === null || v === undefined ? "undefined" : Array.isArray(v) ? "Array" : type === "object" ? v.constructor.name : type;
				};
				FUNCTIONS.madev = function () {
					var v = void 0,
					    options = void 0;

					var _getargs43 = getargs([].slice.call(arguments, 0));

					var _getargs44 = _slicedToArray(_getargs43, 2);

					v = _getargs44[0];
					options = _getargs44[1];

					if (Array.isArray(v[0])) v = v[0];
					v = v.filter(function (item) {
						return typeof item === "number";
					});
					if (options && options.if) v = v.filter(options.if);
					if (v.length === 0) return 0;
					return mad(v);
				};
				FUNCTIONS.stdev = function () {
					var v = void 0,
					    options = void 0;

					var _getargs45 = getargs([].slice.call(arguments, 0));

					var _getargs46 = _slicedToArray(_getargs45, 2);

					v = _getargs46[0];
					options = _getargs46[1];

					if (Array.isArray(v[0])) v = v[0];
					v = v.filter(function (item) {
						return typeof item === "number";
					});
					if (options && options.if) v = v.filter(options.if);
					if (v.length === 0) return 0;
					return stdev(v);
				};
				FUNCTIONS.variance = function () {
					var v = void 0,
					    options = void 0;

					var _getargs47 = getargs([].slice.call(arguments, 0));

					var _getargs48 = _slicedToArray(_getargs47, 2);

					v = _getargs48[0];
					options = _getargs48[1];

					if (Array.isArray(v[0])) v = v[0];
					v = v.filter(function (item) {
						return typeof item === "number";
					});
					if (options && options.if) v = v.filter(options.if);
					if (v.length === 0) return 0;
					return variance(v);
				};
				FUNCTIONS.zscores = function () {
					var v = void 0,
					    options = void 0;

					var _getargs49 = getargs([].slice.call(arguments, 0));

					var _getargs50 = _slicedToArray(_getargs49, 2);

					v = _getargs50[0];
					options = _getargs50[1];

					if (Array.isArray(v[0])) v = v[0];
					v = v.filter(function (item) {
						return typeof item === "number";
					});
					if (options && options.if) v = v.filter(options.if);
					if (v.length === 0) return 0;
					return zscores(v);
				};
				FUNCTIONS.phi = function () {
					return (1 + Math.sqrt(5)) / 2;
				};
				FUNCTIONS.tau = function () {
					return 2 * Math.PI;
				};
				var mathdesc = Object.getOwnPropertyDescriptors(Math);

				var _loop = function _loop(key) {
					if (FUNCTIONS[key] || FUNCTIONS[key.toLowerCase()]) return "continue";
					if (typeof Math[key] === "function") {
						FUNCTIONS[key] = function () {
							var v = void 0,
							    options = void 0;

							var _getargs51 = getargs([].slice.call(arguments, 0));

							var _getargs52 = _slicedToArray(_getargs51, 2);

							v = _getargs52[0];
							options = _getargs52[1];

							if (options && options.if) v = v.filter(options.if);
							return Math[key].apply(Math, _toConsumableArray(v));
						};
					} else {
						FUNCTIONS[key.toLowerCase()] = function () {
							return Math[key];
						};
					}
				};

				for (var key in mathdesc) {
					var _ret = _loop(key);

					if (_ret === "continue") continue;
				}
				DECLARATIONS = declarations();
				me.functions = new Proxy(FUNCTIONS, {
					set: function set(target, property, value) {
						if (typeof value !== "function") throw new Error("Hypercalc custom function must be a function: ", value);
						target[property] = value;
						DECLARATIONS = declarations();
						return true;
					}
				});
				function Cell(coordinates, value, options) {
					var isnew = this && this instanceof Cell,
					    cell = Cell.cells[coordinates];
					// return Cell if found and not creating new one
					if (!isnew) {
						if (!cell) return new Cell(coordinates, value, options);
						if (arguments.length === 1) return cell;
						cell.value = value;
						!options || Object.assign(cell.options, options);
						return cell;
					}
					Object.defineProperty(this, "engine", { enumerable: false, configurable: true, writable: true, value: me });
					this.coordinates = coordinates;
					this.options = {};
					this.computed = null;
					Object.assign(this.options, options);
					Object.defineProperty(this, "references", { enumerable: false, configurable: true, writable: true, value: {} });
					this.data = value;
					Object.defineProperty(this, "calculating", { writable: true });
					Object.defineProperty(this, "value", {
						enumerable: false,
						configurable: true,
						get: function get() {
							return this.valueOf();
						},
						set: function set(value) {
							this.data = value;
							this.compile().calc();
							return true;
						}
					});
					this.compile().calc();
					return this;
				}
				Cell.prototype.addReferences = function () {
					for (var i = 0; i < arguments.length; i++) {
						arguments[i] === this || (this.references[arguments[i].coordinates] = true);
					}
				};
				Cell.prototype.deleteReferences = function () {
					for (var i = 0; i < arguments.length; i++) {
						delete this.references[arguments[i].coordinates];
					}
				};
				Cell.prototype.clearReferences = function () {
					this.references = {};
				};
				Cell.prototype.compile = function () {
					delete this.compiled;
					this.index();
					if (typeof this.data === "string" && this.data.indexOf("=") === 0) {
						Object.defineProperty(this, "compiled", { enumerable: false, configurable: true, writable: true, value: new Function("functions", "return function() { " + DECLARATIONS + "return " + this.data.substring(1) + "; }")(FUNCTIONS) });
					}
					for (var pattern in Cell.observers) {
						var observers = [];
						for (var coordinates in Cell.observers[pattern]) {
							observers.push(Cell.cells[coordinates]);
						}if (match(pattern, this.coordinates)) this.addReferences.apply(this, observers);
					}
					return this;
				};
				Cell.prototype.calc = function () {
					var cascade = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

					var me = this;
					function calc() {
						if (me.compiled) {
							var current = CURRENTCELL;
							CURRENTCELL = me;
							me.computed = me.compiled();
							CURRENTCELL = current;
						}
						!me.options.oncalculated || me.options.oncalculated(me);
						me.engine.calculating--;
						me.calculating = null;
						if (!me.engine.calculating && me.engine.oncalculated) {
							me.engine.oncalculated(me.engine);
						}
					}
					if (!me.calculating) {
						me.calculating = setTimeout(calc);
						me.engine.calculating++;
					}
					if (cascade) {
						for (var coordinates in me.references) {
							Cell.cells[coordinates].calc();
						}
					}
				};
				Cell.prototype.index = function () {
					var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Cell.cellIndex;
					// need to enhance to support compiling ranges
					if (index === Cell.cellIndex) {
						Cell.cells[this.coordinates] = this;
					} else if (index === Cell.observerIndex) {
						Cell.observers[this.data] = this;
					}
					var parts = this.coordinates.split(".");
					var node = index.nodes;
					for (var i = 0; i < parts.length; i++) {
						node[parts[i]] || (node[parts[i]] = { nodes: {} });
						if (i === parts.length - 1) node[parts[i]].coordinates = this.coordinates;else node = node[parts[i]].nodes;
					}
				};
				Cell.prototype.valueOf = function () {
					!CURRENTCELL || this.addReferences(CURRENTCELL);
					return this.compiled ? this.computed : this.data;
				};
				Cell.find = function (pattern) {
					var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Cell.cellIndex;

					function find(parts, node, position, results) {
						if (node) {
							if (position === parts.length) {
								var cell = Cell.cells[node.coordinates];
								!cell || results.push(cell);
								return;
							}
							node = node.nodes;
							var part = parts[position],
							    rangetype = part.includes(":") ? ":" : part.includes("|") ? "|" : null;
							if (!rangetype) {
								if (part === "*") {
									var keys = Object.keys(node),
									    next = position + 1;
									var _iteratorNormalCompletion8 = true;
									var _didIteratorError8 = false;
									var _iteratorError8 = undefined;

									try {
										for (var _iterator8 = keys[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
											var key = _step8.value;
											find(parts, node[key], next, results);
										}
									} catch (err) {
										_didIteratorError8 = true;
										_iteratorError8 = err;
									} finally {
										try {
											if (!_iteratorNormalCompletion8 && _iterator8.return) {
												_iterator8.return();
											}
										} finally {
											if (_didIteratorError8) {
												throw _iteratorError8;
											}
										}
									}
								} else {
									node = node[part];
									find(parts, node, ++position, results);
								}
							} else {
								var range = part.split(rangetype);
								var isnum = false;
								if (rangetype === ":") {
									for (var i = 0; i < range.length; i++) {
										if (parseInt(range[i]) == range[i]) {
											range[i] = parseInt(range[i]);
											isnum = true;
										}
									}
								}
								var _keys = Object.keys(node),
								    _next = position + 1;
								var _iteratorNormalCompletion9 = true;
								var _didIteratorError9 = false;
								var _iteratorError9 = undefined;

								try {
									var _loop2 = function _loop2() {
										var key = _step9.value;

										if (rangetype === ":") {
											key = isnum && parseInt(key) == key ? parseInt(key) : key;
											if (range[0] === "*" || key >= range[0]) {
												if (key <= range[1]) find(parts, node[key], _next, results);
											}
										} else if (range.some(function (item) {
											return item == key;
										})) {
											find(parts, node[key], _next, results);
										}
									};

									for (var _iterator9 = _keys[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
										_loop2();
									}
								} catch (err) {
									_didIteratorError9 = true;
									_iteratorError9 = err;
								} finally {
									try {
										if (!_iteratorNormalCompletion9 && _iterator9.return) {
											_iterator9.return();
										}
									} finally {
										if (_didIteratorError9) {
											throw _iteratorError9;
										}
									}
								}
							}
						}
					}
					var results = [];
					find(pattern.split("."), index, 0, results);
					return results;
				};
				Cell.cells = {};
				Cell.observers = {};
				Cell.cellIndex = { nodes: {} };
				Cell.observerIndex = { nodes: {} };
				me.Cell = Cell;

				var Row = function Row(sheet, id, data) {
					_classCallCheck(this, Row);

					Object.defineProperty(this, "engine", { enumerable: false, configurable: true, writable: true, value: me });
					this.sheet = sheet.name;
					this.cells = {};
					id || (id = sheet.rows.length + 1);
					this.id = id;
					Row.rows[id] = this;
					var cols = 0;
					if (sheet.options.columns) {
						if (Array.isArray(data)) {
							var keys = Object.keys(sheet.options.columns);
							for (var i = 0; i < data.length; i++) {
								var property = keys[i] || i,
								    cell = Cell(sheet.name + "." + property + "." + id, data[i], sheet.options.columns[property]);
								this.cells[cell.coordinates] = true;
							}
						} else {
							for (var _property in sheet.options.columns) {
								var _cell = Cell(sheet.name + "." + _property + "." + id, data[_property], sheet.options.columns[_property]);
								this.cells[_cell.coordinates] = true;
							}
						}
					} else if (Array.isArray(data)) {
						for (var _i3 = 0; _i3 < data.length; _i3++, cols++) {
							var _cell2 = Cell(sheet.name + "." + (_i3 + 1) + "." + id, data[_i3], {});
							this.cells[_cell2.coordinates] = true;
						}
					} else {
						var _keys2 = Object.keys(data);
						for (var _i4 = 0; _i4 < data.length; _i4++, cols++) {
							var _cell3 = Cell(sheet.name + "." + (_i4 + 1) + "." + id, data[_keys2[_i4]], {});
							this.cells[_cell3.coordinates] = true;
						}
					}
					if (sheet.options.columnCount && cols < sheet.options.columnCount) {
						while (cols++ < sheet.options.columnCount) {
							var _cell4 = Cell(sheet.name + "." + cols + "." + id, null, {});
							this.cells[_cell4.coordinates] = true;
						}
					}
				};

				Row.rows = {};

				me.Space = function () {
					function Space(name) {
						var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { sparse: me.options.sparse };

						_classCallCheck(this, Space);

						Object.defineProperty(this, "engine", { enumerable: false, configurable: true, writable: true, value: me });
						var space = me.spaces[name];
						if (space || !this) return space;
						this.name = name;
						this.options = {};
						Object.assign(this.options, options);
						this.cells = {};
						me.spaces[name] = this;
					}

					_createClass(Space, [{
						key: "createCell",
						value: function createCell(id, data, options) {
							var coordinates = this.name + "." + id,
							    cell = new Cell(coordinates, data, options);
							this.cells[coordinates] = true;
							return cell;
						}
					}, {
						key: "createVector",
						value: function createVector(vector, data) {
							var _this = this;

							var coordinates = this.name + ".";
							Object.keys(this.options.dimensions).forEach(function (key, i, dimensions) {
								if (!["number", "boolean", "string"].includes(_typeof(vector[key]))) throw new Error("Incompatible vector " + _this.name);
								coordinates += vector[key] + (i < dimensions.length - 1 ? "." : "");
							});
							Cell(coordinates, data, this.options.contains, this);
						}
					}, {
						key: "export",
						value: function _export() {
							var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { cells: true, sparse: true };

							var results = {},
							    cells = {};
							if (options.cells) {
								results.cells = {};
								for (var coordinates in this.cells) {
									if (cells[coordinates]) continue;
									results.cells[coordinates.split(".").slice(1).join(".")] = Cell.cells[coordinates].value;
								}
							}
							return results;
						}
					}]);

					return Space;
				}();
				me.spaces = {};
				me.Sheet = function (_Space) {
					_inherits(Sheet, _Space);

					function Sheet(name) {
						var _ret3;

						var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { sparse: me.options.sparse };

						_classCallCheck(this, Sheet);

						var _this2 = _possibleConstructorReturn(this, (Sheet.__proto__ || Object.getPrototypeOf(Sheet)).call(this, name, options));

						var sheet = me.sheets[name];
						if (sheet || !_this2) return _ret3 = sheet, _possibleConstructorReturn(_this2, _ret3);
						_this2.rows = [];
						me.sheets[name] = _this2;
						return _this2;
					}

					_createClass(Sheet, [{
						key: "createRow",
						value: function createRow(id, data) {
							var row = new Row(this, id, data);
							this.rows.push(row.id);
							return row;
						}
					}, {
						key: "import",
						value: function _import(array, options) {
							// options should just modify options for the sheet
							for (var i = 0; i < array.length; i++) {
								this.createRow(i + 1, array[i]);
							}
						}
					}, {
						key: "export",
						value: function _export() {
							var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { rows: true, cells: false, sparse: true };

							var results = {},
							    cells = {};
							if (options.rows) {
								if (this.rows.length > 0) {
									var headers = ["Row/Col"];
									results.rows = [headers];
									var _iteratorNormalCompletion10 = true;
									var _didIteratorError10 = false;
									var _iteratorError10 = undefined;

									try {
										for (var _iterator10 = this.rows[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
											var id = _step10.value;

											var row = [];
											row.push(id);
											results.rows.push(row);
											for (var coordinates in Row.rows[id].cells) {
												var _coordinates$split = coordinates.split("."),
												    _coordinates$split2 = _slicedToArray(_coordinates$split, 2),
												    colname = _coordinates$split2[1];

												cells[coordinates] = true;
												headers.includes(colname) || headers.push(colname);
												row.push(options.extended ? Cell.cells[coordinates] : Cell.cells[coordinates].value);
											}
										}
									} catch (err) {
										_didIteratorError10 = true;
										_iteratorError10 = err;
									} finally {
										try {
											if (!_iteratorNormalCompletion10 && _iterator10.return) {
												_iterator10.return();
											}
										} finally {
											if (_didIteratorError10) {
												throw _iteratorError10;
											}
										}
									}
								} else {
									results.rows = [];
								}
							}
							if (options.cells) {
								results.cells = {};
								for (var _coordinates in this.cells) {
									if (cells[_coordinates]) continue;
									results.cells[_coordinates.split(".").slice(1).join(".")] = options.extended ? Cell.cells[_coordinates] : Cell.cells[_coordinates].value;
								}
							}
							return results;
						}
					}]);

					return Sheet;
				}(this.Space);
				me.sheets = {};
			}
			Hypercalc.getArgs = getargs;

			module.exports = Hypercalc;
			if (typeof window !== "undefined") window.Hypercalc = Hypercalc;
		}).call(this);
	}, {}] }, {}, [1]);