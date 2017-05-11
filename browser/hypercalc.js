(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function() {
	const getArgs = require("../getArgs.js"),
		isNumber = require("./isNumber.js"),
		isVector = require("./isVector.js"),
		vectorAverage = require("./vectorAverage.js");
	module.exports = function() {
		let v, options;
		[v,options] = getArgs([].slice.call(arguments,0));
		if(v.length>1 && v.every(arg => isVector(arg))) return vectorAverage(...arguments);
		else if(v.length===1 && Array.isArray(v[0])) v = v[0];
		v = v.filter(item => typeof(item)==="number");
		if(options && options.if) v = v.filter(options.if);
		if(v.length===0) return Infinity;
		let count = 0;
		return v.reduce((accumulator,current) => {
			if(typeof(current)==="number") {
				accumulator += current;
				count++;
			}
			return accumulator;
		},0) / count;
	}
}).call(this);
},{"../getArgs.js":45,"./isNumber.js":13,"./isVector.js":16,"./vectorAverage.js":40}],2:[function(require,module,exports){
(function() {
	const getArgs = require("../getArgs.js");
	module.exports = function() {
		let v, options;
		[v,options] = getArgs([].slice.call(arguments,0));
		if(v.length===1 && Array.isArray(v[0])) v = v[0];
		v = v.filter(item => typeof(item)==="number");
		if(options && options.if) v = v.filter(options.if);
		return v.length;
	}
}).call(this);
},{"../getArgs.js":45}],3:[function(require,module,exports){
(function() {
	module.exports = value => value * value * value;
}).call(this);
},{}],4:[function(require,module,exports){
(function() {
	function array_equals(a, b)
	{
	  return a.length === b.length && a.every(function(value, index) {
	    return value === b[index];
	  });
	};

	function getdim(arr)
	{
	  if (!Array.isArray(arr)) {
	    return []; // current array has no dimension
	  }
	  var dim = arr.reduce(function(result, current) {
	    // check each element of arr against the first element
	    // to make sure it has the same dimensions
	    return array_equals(result, getdim(current)) ? result : false;
	  }, getdim(arr[0]));

	  // dim is either false or an array
	  return dim && [arr.length].concat(dim);
	}
	module.exports = getdim;
}).call(this);
},{}],5:[function(require,module,exports){
(function() {
	module.exports = (p1,p2) => Math.sqrt(p1.reduce((accumulator,current,i) => accumulator += Math.pow(p2[i]-p1[i],2),0));
}).call(this);
},{}],6:[function(require,module,exports){
(function() {
	module.exports = (a,b,options) => a.map((x,i) => a[i] * b[i]).reduce((m,n) => m + n);
}).call(this);
},{}],7:[function(require,module,exports){
(function() {
	// change to a variable arg function
	const equal = (a,b,options) => {
			if(a===b) return true;
			if(Array.isArray(a) && Array.isArray(b)) return arrayEqual(a,b,options);
		},
		arrayEqual = (a,b,options) => {
			return a.length===b.length && a.every((item,i) => equal(item,b[i],options));
		};
	module.exports = equal;
}).call(this);
},{}],8:[function(require,module,exports){
(function() {
	module.exports =  v => {
		let result = 1;
		v = Math.round(v);
		while(v) result *= v--;
		return result;
	}
}).call(this);
},{}],9:[function(require,module,exports){
(function() {
	const getArgs = require("../getArgs.js");
	function intersection() {
		const args = [].slice.call(arguments).sort((a,b) => a.length - b.length),
	    	intersection = new Set(args[0]);
	    for(let elem of intersection) {
	    	for(let i=1;i<args.length;i++) {
		    	if(!args[i].includes(elem)) {
		    		intersection.delete(elem);
		    		break;
		    	}
		    }
	    }
	    return [...intersection];
	}
	module.exports = function() {
		let v, options;
		[v,options] = getArgs([].slice.call(arguments,0));
		if(v.length===0) return [];
		const result = intersection(...v);
		if(options && options.if) return result.filter(options.if);
		return result;
	}
}).call(this);
},{"../getArgs.js":45}],10:[function(require,module,exports){
(function() {
	module.exports = data => typeof(data)==="function";
}).call(this);
},{}],11:[function(require,module,exports){
(function() {
	module.exports = data => Array.isArray(data) && Array.isArray(data[0]) && Array.isArray(data[data.length-1]);
}).call(this);
},{}],12:[function(require,module,exports){
(function() {
	module.exports = value => value < 0;
}).call(this);
},{}],13:[function(require,module,exports){
(function() {
	module.exports = data => typeof(data)==="number";
}).call(this);
},{}],14:[function(require,module,exports){
(function() {
	module.exports = value => value > 0;
}).call(this);
},{}],15:[function(require,module,exports){
(function() {
	module.exports = num => {
	    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
	        if(num % i === 0) return false; 
	    return num !== 1;
	}
}).call(this);
},{}],16:[function(require,module,exports){
(function() {
	module.exports = data => Array.isArray(data) && !Array.isArray(data[0]) && !Array.isArray(data[data.length-1]);
}).call(this);
},{}],17:[function(require,module,exports){
(function() {
	const getArgs = require("../getArgs.js"),
		sum = args => (!args.length ? 0 : args.reduce((accumulator,current) => accumulator + current)),
		mean = args => (!args.length ? Infinity :  sum(args) / args.length),
		mad = args => {
			const m = mean(args);
			return mean(args.map(num => Math.abs(num - m)));
		};
	module.exports = function() {
		let v, options;
		[v,options] = getArgs([].slice.call(arguments,0));
		if(v.length===1 && Array.isArray(v[0])) v = v[0];
		if(options && options.if) v = v.filter(options.if);
		return mad(v);
	}
}).call(this);
},{"../getArgs.js":45}],18:[function(require,module,exports){
(function() {
	const difference = (a,b) => a.map((x,i) => a[i] - b[i]);
	module.exports = function() {
		return [].slice.call(arguments,0).reduce((accumulator,current) => accumulator.map((x,i) => difference(x,current[i])));
	}
}).call(this);
},{}],19:[function(require,module,exports){
(function() {
	const transpose = require("./transpose.js"),
		dotProduct = require("./dotProduct.js");
	module.exports = (a,b) => a.map((x,i) => transpose(b).map((y,k) => dotProduct(x, y)));
}).call(this);
},{"./dotProduct.js":6,"./transpose.js":37}],20:[function(require,module,exports){
(function() {
	const sum = (a,b) => a.map((x,i) => a[i] + b[i]);
	module.exports = function() {
		return [].slice.call(arguments,0).reduce((accumulator,current) => accumulator.map((x,i) => sum(x,current[i])));
	}
}).call(this);
},{}],21:[function(require,module,exports){
(function() {
	const getArgs = require("../getArgs.js");
	module.exports = function()  {
		let v, options;
		[v,options] = getArgs([].slice.call(arguments,0));
		if(v.length===1 && Array.isArray(v[0])) v = v[0];
		if(options && options.if) v = v.filter(options.if);
		if(v.length===0) return -Infinity;
		return v.reduce((accumulator,current) => Math.max(accumulator,current));
	}
}).call(this);
},{"../getArgs.js":45}],22:[function(require,module,exports){
(function() {
	const getArgs = require("../getArgs.js");
	function median(args) {
		if (!args.length) return 0;
		const numbers = args.sort((a,b) => a - b),
			middle = Math.floor(numbers.length / 2),
			isEven = numbers.length % 2 === 0;
		return isEven ? (numbers[middle] + numbers[middle - 1]) / 2 : numbers[middle];
	}
	module.exports = function() {
		let v, options;
		[v,options] = getArgs([].slice.call(arguments,0));
		if(v.length===1 && Array.isArray(v[0])) v = v[0];
		if(options && options.if) v = v.filter(options.if);
		return median(v);
	}
}).call(this);
},{"../getArgs.js":45}],23:[function(require,module,exports){
(function() {
	const getArgs = require("../getArgs.js");
	module.exports = function()  {
		let v, options;
		[v,options] = getArgs([].slice.call(arguments,0));
		if(v.length===1 && Array.isArray(v[0])) v = v[0];
		if(options && options.if) v = v.filter(options.if);
		if(v.length===0) return Infinity;
		return v.reduce((accumulator,current) => Math.min(accumulator,current));
	}
}).call(this);
},{"../getArgs.js":45}],24:[function(require,module,exports){
(function() {
	const getArgs = require("../getArgs.js");
	function mode(args) {
		if (!args.length) return [];
		const modeMap = {};
		let modes = [],
			maxCount = 0;
		for(let val of args) {
			if (!modeMap[val]) modeMap[val] = 1;
			else modeMap[val]++;

			if (modeMap[val] > maxCount) {
				modes = [val];
				maxCount = modeMap[val];
			}
			else if (modeMap[val] === maxCount) {
				modes.push(val);
				maxCount = modeMap[val];
			}
		}
		return modes;
	}
	module.exports = function() {
		let v, options;
		[v,options] = getArgs([].slice.call(arguments,0));
		if(v.length===1 && Array.isArray(v[0])) v = v[0];
		if(options && options.if) v = v.filter(options.if);
		return mode(v);
	}
}).call(this);
},{"../getArgs.js":45}],25:[function(require,module,exports){
(function() {
	module.exports = (value,root=2) => Math.pow(value,1/root);
}).call(this);
},{}],26:[function(require,module,exports){
(function() {
	module.exports = () => (1 + Math.sqrt(5)) / 2;
}).call(this);
},{}],27:[function(require,module,exports){
(function() {
	module.exports = (x,y) => x ^ y;
}).call(this);
},{}],28:[function(require,module,exports){
(function() {
	const getArgs = require("../getArgs.js"),
		isNumber = require("./isNumber.js"),
		isVector = require("./isVector.js"),
		isMatrix = require("./isMatrix.js"),
		vectorProduct = require("./vectorProduct.js"),
		dimensions = require("./dimensions.js"),
		matrixProduct = require("./matrixProduct.js");
	module.exports = function() {
		let v, options;
		[v,options] = getArgs([].slice.call(arguments,0));
		if(v.length>1) {
			if((v.length===2 && isVector(v[0]) && isNumber(v[1])) || v.every(arg => isVector(arg))) return vectorProduct(...arguments);
			if(isMatrix(v[0])) {
				const d1 = dimensions(v[0]),
					d2 = dimensions(v[1]);
				if(d1.length>0 && d1[0]===d2[1] || d2[0]===d1[1]) return matrixProduct(...arguments);
			}
		}
		else if(v.length===1 && Array.isArray(v[0])) v = v[0];
		v = v.filter(item => typeof(item)==="number");
		if(options && options.if) v = v.filter(options.if);
		if(v.length===0) return 0;
		return v.reduce((accumulator,current) => {
			if(isNumber(current)) accumulator *= current;
			return accumulator;
		},1);
	}
}).call(this);
},{"../getArgs.js":45,"./dimensions.js":4,"./isMatrix.js":11,"./isNumber.js":13,"./isVector.js":16,"./matrixProduct.js":19,"./vectorProduct.js":42}],29:[function(require,module,exports){
(function() {
	const getArgs = require("../getArgs.js"),
		isNumber = require("./isNumber.js"),
		isVector = require("./isVector.js"),
		vectorQuotient = require("./vectorQuotient.js");
	module.exports = function() {
		let v, options;
		[v,options] = getArgs([].slice.call(arguments,0));
		if(v.length>1) {
			if((v.length===2 && isVector(v[0]) && isNumber(v[1])) || v.every(arg => isVector(arg))) return vectorQuotient(...arguments);
		}
		else if(v.length===1 && Array.isArray(v[0])) v = v[0];
		v = v.filter(item => typeof(item)==="number");
		if(options && options.if) v = v.filter(options.if);
		if(v.length===0) return 0;
		return v.reduce((accumulator,current) => {
			if(isNumber(current)) accumulator /= current;
			return accumulator;
		},1);
	}
}).call(this);
},{"../getArgs.js":45,"./isNumber.js":13,"./isVector.js":16,"./vectorQuotient.js":43}],30:[function(require,module,exports){
(function() {
	const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
	module.exports = function(min,max) {
		let result;
		if(arguments.length>=2) result = getRandomInt(min,max);
		else result = Math.random();
		return result;
	}
}).call(this);
},{}],31:[function(require,module,exports){
(function() {
	const getArgs = require("../getArgs.js"),
		isNumber = require("./isNumber.js"),
		isVector = require("./isVector.js"),
		isMatrix = require("./isMatrix.js"),
		vectorDifference = require("./vectorDifference.js"),
		matrixDifference = require("./matrixDifference.js"),
		dimensions = require("./dimensions.js"),
		equal = require("./equal.js");
	module.exports = function() {
		let v, options;
		[v,options] = getArgs([].slice.call(arguments,0));
		if(v.length>1) {
			if((v.length===2 && isVector(v[0]) && isNumber(v[1])) || v.every(arg => isVector(arg))) return vectorDifference(...arguments);
			if(isMatrix(v[0])) {
				const d = dimensions(v[0]);
				if(v.every((item,i) => i===0 || (isMatrix(item) && equal(d,dimensions(item))))) return matrixDifference(...arguments);
			}
		}
		else if(v.length===1) v = v[0];
		v = v.filter(item => typeof(item)==="number");
		if(options && options.if) v = v.filter(options.if);
		if(v.length===0) return Infinity;
		return v.reduce((accumulator,current) => {
			if(typeof(current)==="number") {
				accumulator -= current;
			}
			return accumulator;
		});
	}
}).call(this);
},{"../getArgs.js":45,"./dimensions.js":4,"./equal.js":7,"./isMatrix.js":11,"./isNumber.js":13,"./isVector.js":16,"./matrixDifference.js":18,"./vectorDifference.js":41}],32:[function(require,module,exports){
(function() {
	const isNumber = require("./isNumber.js");
	module.exports = value => (isNumber(value) ? (value > 0 ? 1 : (value ===0 ? 0 : -1)) : undefined);
}).call(this);
},{"./isNumber.js":13}],33:[function(require,module,exports){
(function() {
	module.exports = value => value * value;
}).call(this);
},{}],34:[function(require,module,exports){
(function() {
	const getArgs = require("../getArgs.js"),
		sum = args => (!args.length ? 0 : args.reduce((accumulator,current) => accumulator + current)),
		mean = args => (!args.length ? Infinity :  sum(args) / args.length),
		variance = args => {
			const m = mean(args);
			return args.reduce((accumulator, current) => accumulator += Math.pow((current - m), 2),0) / args.length;
		},
		stdev = args => (!args.length ? 0 : Math.sqrt(variance(args)));
	module.exports = function() {
		let v, options;
		[v,options] = getArgs([].slice.call(arguments,0));
		if(v.length===1 && Array.isArray(v[0])) v = v[0];
		v = v.filter(item => typeof(item)==="number");
		if(options && options.if) v = v.filter(options.if);
		if(v.length===0) return 0;
		return stdev(v); 
	}
}).call(this);
},{"../getArgs.js":45}],35:[function(require,module,exports){
(function() {
	const getArgs = require("../getArgs.js"),
		isNumber = require("./isNumber.js"),
		isVector = require("./isVector.js"),
		isMatrix = require("./isMatrix.js"),
		vectorSum = require("./vectorSum.js"),
		matrixSum = require("./matrixSum.js"),
		dimensions = require("./dimensions.js"),
		equal = require("./equal.js");
	module.exports = function() {
		let v, options;
		[v,options] = getArgs([].slice.call(arguments,0));
		if(v.length>1) {
			if((v.length===2 && isVector(v[0]) && isNumber(v[1])) || v.every(arg => isVector(arg))) return vectorSum(...arguments);
			if(isMatrix(v[0])) {
				const d = dimensions(v[0]);
				if(v.every((item,i) => i===0 || (isMatrix(item) && equal(d,dimensions(item))))) return matrixSum(...arguments);
			}
		}
		else if(v.length===1 && Array.isArray(v[0])) v = v[0];
		v = v.filter(item => typeof(item)==="number");
		if(options && options.if) v = v.filter(options.if);
		if(v.length===0) return Infinity;
		return v.reduce((accumulator,current) => {
			if(typeof(current)==="number") {
				accumulator += current;
			}
			return accumulator;
		},0);
	}
}).call(this);
},{"../getArgs.js":45,"./dimensions.js":4,"./equal.js":7,"./isMatrix.js":11,"./isNumber.js":13,"./isVector.js":16,"./matrixSum.js":20,"./vectorSum.js":44}],36:[function(require,module,exports){
(function() {
	module.exports = () => 2 * Math.PI;
}).call(this);
},{}],37:[function(require,module,exports){
(function() {
	module.exports = a => a[0].map((x,i) => a.map((y,k) => y[i]));
}).call(this);
},{}],38:[function(require,module,exports){
(function() {
	module.exports = function(v) {
		const type = typeof(v);
		return (v===null || v===undefined ? "undefined" : (Array.isArray(v) ? "Array" : (type==="object" ? v.constructor.name : type)));
	}
}).call(this);
},{}],39:[function(require,module,exports){
(function() {
	const getArgs = require("../getArgs.js"),
		sum = args => (!args.length ? 0 : args.reduce((accumulator,current) => accumulator + current)),
		mean = args => (!args.length ? Infinity :  sum(args) / args.length),
		variance = args => {
			const m = mean(args);
			return args.reduce((accumulator, current) => accumulator += Math.pow((current - m), 2),0) / args.length;
		};
	module.exports = function() {
		let v, options;
		[v,options] = getArgs([].slice.call(arguments,0));
		if(v.length===1 && Array.isArray(v[0])) v = v[0];
		v = v.filter(item => typeof(item)==="number");
		if(options && options.if) v = v.filter(options.if);
		if(v.length===0) return 0;
		return variance(v); 
	}
}).call(this);
},{"../getArgs.js":45}],40:[function(require,module,exports){
(function() {
	const getArgs = require("../getArgs.js");
	module.exports = function() {
		let [v,options] = getArgs([].slice.call(arguments,0));
		const counts = new Array(v[0].length);
		return v.sort((a,b) => b.length - a.length).reduce((accumulator,current) => current.map((value, i) => { 
			if(typeof(value)==="number" && (!options || !options.if || options.if(value))) {
				accumulator[i] = (accumulator[i] || 0) + value;
				counts[i] = (counts[i] || 0) + 1;
			}
			return accumulator[i];
			}),new Array(v[0].length)).map((value,i) => value /= counts[i]);
	}
}).call(this);
},{"../getArgs.js":45}],41:[function(require,module,exports){
(function() {
	const getArgs = require("../getArgs.js"),
		isVector = require("./isVector.js"),
		isNumber = require("./isNumber.js");
	module.exports = function() {
		const [v,options] = getArgs([].slice.call(arguments,0));
		return v.reduce((accumulator,current) => { 
			if(isVector(current)) { 
				current.map((value, i) => { 
					if(i>=accumulator.length) accumulator[i] = value;
					else if(typeof(value)==="number" && (!options || !options.if || options.if(value))) accumulator[i] -= value
					return accumulator[i];
				});
			} else if(isNumber(current)) {
				for(let i=0;i<accumulator.length;i++) accumulator[i] -= current;
			}
			return accumulator;
		});
	}
}).call(this);
},{"../getArgs.js":45,"./isNumber.js":13,"./isVector.js":16}],42:[function(require,module,exports){
(function() {
	const getArgs = require("../getArgs.js"),
		isNumber = require("./isNumber.js"),
		isVector = require("./isVector.js");
	module.exports = function() {
		const [v,options] = getArgs([].slice.call(arguments,0));
		return v.reduce((accumulator,current) => { 
			if(isVector(current)) {
				current.map((value, i) => {
					if(i>=accumulator.length) accumulator[i] = 1;
					if(typeof(value)==="number" && (!options || !options.if || options.if(value))) accumulator[i] *= value;
					return accumulator[i];
					})
			} else if(isNumber(current)) {
				for(let i=0;i<accumulator.length;i++) accumulator[i] *= current;
			}
			return accumulator;
		});
	}
}).call(this);
},{"../getArgs.js":45,"./isNumber.js":13,"./isVector.js":16}],43:[function(require,module,exports){
(function() {
	const getArgs = require("../getArgs.js"),
		isNumber = require("./isNumber.js"),
		isVector = require("./isVector.js");
	module.exports = function() {
		const [v,options] = getArgs([].slice.call(arguments,0));
		return v.reduce((accumulator,current) => { 
			if(isVector(current)) {
				current.map((value, i) => {
					if(i>=accumulator.length) accumulator[i] = value;
					else if(typeof(value)==="number" && (!options || !options.if || options.if(value))) accumulator[i] /= value;
					return accumulator[i];
					})
			} else if(isNumber(current)){
				for(let i=0;i<accumulator.length;i++) accumulator[i] /= current;
			}
			return accumulator;
		});
	}
}).call(this);
},{"../getArgs.js":45,"./isNumber.js":13,"./isVector.js":16}],44:[function(require,module,exports){
(function() {
	const getArgs = require("../getArgs.js"),
		isVector = require("./isVector.js"),
		isNumber = require("./isNumber.js");
	module.exports = function() {
		const [v,options] = getArgs([].slice.call(arguments,0));
		return v.reduce((accumulator,current) => { 
			if(isVector(current)) { 
				current.map((value, i) => { 
					if(i>=accumulator.length) accumulator[i] = value;
					else if(typeof(value)==="number" && (!options || !options.if || options.if(value))) accumulator[i] += value
					return accumulator[i];
				});
			} else if(isNumber(current)) {
				for(let i=0;i<accumulator.length;i++) accumulator[i] += current;
			}
			return accumulator;
		});
	}
}).call(this);
},{"../getArgs.js":45,"./isNumber.js":13,"./isVector.js":16}],45:[function(require,module,exports){
(function() {
	function getArgs(args) {
		getArgs.VARGS = [];
		const last = args[args.length-1],
			options = (last && typeof(last)==="object" && !Array.isArray(last) ? last : null);
		let values = [];
		!options || (args = args.slice(0,args.length-1));
		const result = [];
		for(let i=0;i<args.length;i++) {
			if(args[i]===getArgs.VARGS) {
				const varg = getArgs.VARGS.shift();
				if(Array.isArray(varg)) {
					for(let arg of varg) result.push(arg)
				} else {
					results.push(varg);
				}
			}
			else result.push(args[i]);
		}
		return [result,options];
	}
	module.exports = getArgs;
}).call(this);
},{}],46:[function(require,module,exports){
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
(function() {
	"use strict"
	
	const gridDivide = (a,b) => a.map((x,i) => a[i] / (Array.isArray(b) ? b[i] : b));

	const gridMultiply = (a,b) => a.map((x,i) => a[i] * (Array.isArray(b) ? b[i] : b));
	
	
	
	const mAdd = (a,b) => a.map((x,i) => a[i] + (Array.isArray(b) ? b[i] || 0 : b));

	const mSubtract = (a,b) => a.map((x,i) => a[i] - (Array.isArray(b) ? b[i] || 0 : b));
	
	function zscores(args) {
		args = (Array.isArray(args) ? args.slice(0) : [].slice.call(arguments,0));
		const m = mean(args),
			sd = stdev(args);
		return args.map(num => (num - m) / sd);
	}
	
	const traverse = (matrix,callback) => {
		for(let i=0;i<matrix.length;i++) {
			const item = matrix[i];
			if(Array.isArray(item)) traverse(item,callback);
			else callback(item,i,matrix);
		}
	}
	
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
		}
	}
	
	function coerce(value,options) {
		if(options) {
			const type = typeof(value);
			if(options.replace) {
				if(options.replace[type] && typeof(options.replace[type])==="object" && typeof(options.replace[type][value])!=="undefined") return options.replace[type][value];
				if(typeof(options.replace[type])!=="undefined") return options.replace[type];
			}
			if(typeof(options.NA)!=="undefined" && type==="undefined") return options.NA;
			if(typeof(options.NaN)!=="undefined" && type!=="number") return options.NaN;
		}
		return value;
	}
	
	const VARGS = [];
	function getargs(args) {
		const last = args[args.length-1],
			options = (last && typeof(last)==="object" && !Array.isArray(last) ? last : null);
		let values = [];
		!options || (args = args.slice(0,args.length-1));
		const result = [];
		for(let i=0;i<args.length;i++) {
			if(args[i]===VARGS) {
				const varg = VARGS.shift();
				if(Array.isArray(varg)) {
					for(let arg of varg) result.push(arg)
				} else {
					results.push(varg);
				}
			}
			else result.push(args[i]);
		}
		VARGS.splice(0,VARGS.length); // do we need this?
		return [result,options];
	}
	
	function match(pattern,coordinate2) {
		const c1 = pattern.split("."), c2 = coordinate2.split(".");
		return c1.length===c2.length && c1.every((key,i) => { 
			const parts = key.split(":");
			if(parts.length===1) return parts[0]==="*" || parts[0]===c2[i];
			if(parts[0]==="*") return parts[1]==="*" || c2[i]<=parts[1];
			if(c2[i]>=parts[0]) return parts[1]==="*" || c2[i]<=parts[1];
			return false;
		});
	}
	
	const FUNCTIONS = {};
	
	function Hypercalc(options={}) {
		const me = this;
		let CURRENTCELL, DECLARATIONS;
		me.options = Object.assign({},options);
		me.calculating = 0;
		Object.defineProperty(me,"oncalculated",{enumerable:false,configurable:true,writable:true,value:options.oncalculated});
		
		FUNCTIONS.average = require("./functions/average.js");
		FUNCTIONS.count = require("./functions/count.js");
		FUNCTIONS.cube = require("./functions/cube.js");
		
		FUNCTIONS.dimensions = require("./functions/dimensions.js");
		FUNCTIONS.distance = require("./functions/distance.js");
		
		FUNCTIONS.dotProduct = require("./functions/dotProduct.js");
		
		FUNCTIONS.equal = require("./functions/equal.js");
		
		FUNCTIONS.factorial = require("./functions/factorial.js");
		FUNCTIONS.intersection = require("./functions/intersection.js");
		
		FUNCTIONS.isFunction = require("./functions/isFunction.js");
		FUNCTIONS.isMatrix = require("./functions/isMatrix.js");
		FUNCTIONS.isNegative = require("./functions/isNegative.js");
		FUNCTIONS.isNumeric = FUNCTIONS.isNumber = require("./functions/isNumber.js");
		FUNCTIONS.isPositive = require("./functions/isPositive.js");
		FUNCTIONS.isPrime = require("./functions/isPrime.js");
		FUNCTIONS.isVector = require("./functions/isVector.js");
		
		FUNCTIONS.madev = require("./functions/madev.js");
		
		FUNCTIONS.matrixDifference = require("./functions/matrixDifference.js");
		FUNCTIONS.matrixProduct = require("./functions/matrixProduct.js");
		FUNCTIONS.matrixSum = require("./functions/matrixSum.js");
		FUNCTIONS.max = require("./functions/max.js");
		FUNCTIONS.median = require("./functions/median.js");
		FUNCTIONS.min = require("./functions/min.js");
		FUNCTIONS.mode = require("./functions/mode.js");
		FUNCTIONS.nthRoot = require("./functions/nthRoot.js");
		
		FUNCTIONS.phi = require("./functions/phi.js");
		FUNCTIONS.power = require("./functions/power.js");
		FUNCTIONS.product = require("./functions/product.js");
		FUNCTIONS.random = require("./functions/random.js");
		FUNCTIONS.quotient = require("./functions/quotient.js");
		FUNCTIONS.remainder = FUNCTIONS.difference = require("./functions/remainder.js");
		FUNCTIONS.sign = require("./functions/sign.js");
		FUNCTIONS.stdev = require("./functions/stdev.js");
		FUNCTIONS.square = require("./functions/square.js");
		FUNCTIONS.sum = require("./functions/sum.js");
		FUNCTIONS.tau = require("./functions/tau.js");
		FUNCTIONS.transpose = require("./functions/transpose.js");
		FUNCTIONS.type = require("./functions/type.js");
		FUNCTIONS.variance = require("./functions/variance.js");
		FUNCTIONS.vectorAverage = require("./functions/vectorAverage.js");
		FUNCTIONS.vectorDifference = require("./functions/vectorDifference.js");
		FUNCTIONS.vectorProduct = require("./functions/vectorProduct.js");
		FUNCTIONS.vectorQuotient = require("./functions/vectorQuotient.js");
		FUNCTIONS.vectorSum = require("./functions/vectorSum.js");
		
		
		FUNCTIONS.$ = function(coordinates,options) {
			const values = [],
				cells = FUNCTIONS.cells(coordinates);
			for(let cell of cells) (options && options.if ? !options.if(cell.value) || values.push(cell.value) : values.push(cell.value));
			return values;
		}
		FUNCTIONS.$summary = function(coordinates,options={result:"array",values:["min","average","max"]}) {
			const results = (options.result==="array" ? [] : {}),
				values = [],
			cells = FUNCTIONS.cells(coordinates);
			for(let cell of cells) (options && options.if ? !options.if(cell.value) || values.push(cell.value) : values.push(cell.value));
			for(let option of options.values) {
				const value = FUNCTIONS[option](values);
				if(options.result==="array") results.push(value)
				else results[option] = value;
			}
			return results;
		}
		FUNCTIONS.destructure = FUNCTIONS.varg = function(arg) {
			VARGS.push(arg);
			return VARGS;
		}
		FUNCTIONS.values = FUNCTIONS.$a = function(coordinates,options) {
			const values = [],
				cells = FUNCTIONS.cells(coordinates);
			options = Object.assign({replace:replaceForA()},(options || {}));
			for(let cell of cells) (options && options.if ? !options.if(cell.value) || values.push(coerce(cell.value,options)) : values.push(coerce(cell.value,options)));
			return values;
		}
		FUNCTIONS.cells = function(pattern) {
			if(CURRENTCELL) {
				let observers = Cell.observers[pattern];
				if(!observers) {
					observers = {};
					Cell.observers[pattern] = observers;
					//Cell.index(pattern,Cell.observerIndex); // enable once indexing and find enhanced to support ranges
				}
				observers[CURRENTCELL.coordinates] = true;
			}
			return Cell.find(pattern,Cell.cellIndex);
		}
		FUNCTIONS.averagea = function() {
			let v, options;
			[v,options] = getargs([].slice.call(arguments,0));
			if(Array.isArray(v[0])) v = v[0];
			if(options && options.if) v = v.filter(options.if);
			if(v.length===0) return 0;
			options = Object.assign({replace:replaceForA()},(options || {}));
			return v.reduce((accumulator,current) => accumulator + coerce(current,options),0) / v.length;
		}
		FUNCTIONS.counta = function() {
			let v, options;
			[v,options] = getargs([].slice.call(arguments,0));
			if(options && options.if) v = v.filter(options.if);
			v = v.filter(item => item!==null && typeof(item)!=="undefined");
			return v.length;
		}
		FUNCTIONS.extend = function() {
			const parts = CURRENTCELL.coordinates.split("."),
				sheet = CURRENTCELL.engine.sheets[parts[0]],
				startrow = parseInt(parts[2]),
				data = CURRENTCELL.data;
			let startcol = parseInt(parts[1]),
				maxcol = startcol,
				maxrow = startrow,
				v,
				options;
			[v,options] = getargs([].slice.call(arguments,0));
			CURRENTCELL.compiled = function() {
				// determine dimensions of block required
				for(let i=0;i<v.length;i++) {
					for(let col=0;col<v[i].length;col++,maxcol++) {
						const cv = v[i][col];
						if(Array.isArray(cv)) maxrow = Math.max(maxrow,startrow+(cv.length-1));
					}
				}
				// create full rows for block
				for(let i=startrow;i<=maxrow;i++) {
					sheet.createRow(i,new Array(maxcol-startcol));
				}
				// populate cells in block
				let currentcol = startcol;
				for(let i=0;i<v.length;i++) {
					for(let col=0, currentrow = startrow;col<v[i].length;col++,currentcol++) {
						const cv = v[i][col];
						if(Array.isArray(cv)) {
							for(let row=0;row<cv.length;row++) {
								Cell(sheet.name+"."+currentcol+"."+(currentrow+row),cv[row]);
							}
						} else {
							Cell(sheet.name+"."+currentcol+"."+currentrow,cv);
						}
					}
				}
				this.computed = (Array.isArray(v[0][0]) ? v[0][0][0] : v[0][0]);
			}
			CURRENTCELL.data = data;
			CURRENTCELL.compiled();
			return CURRENTCELL.computed;
		}
		FUNCTIONS.maxa = function()  {
			let v, options;
			[v,options] = getargs([].slice.call(arguments,0));
			if(Array.isArray(v[0])) v = v[0];
			if(options && options.if) v = v.filter(options.if);
			if(v.length===0) return -Infinity;
			options = Object.assign({replace:replaceForA()},(options || {}));
			traverse(v,(item,i,array) => array[i] = coerce(item,{replace:replaceForA()}));
			return v.reduce((accumulator,current) => Math.max(accumulator,current));
		}
		FUNCTIONS.mina = function()  {
			let v, options;
			[v,options] = getargs([].slice.call(arguments,0));
			if(Array.isArray(v[0])) v = v[0];
			if(options && options.if) v = v.filter(options.if);
			if(v.length===0) return Infinity;
			options = Object.assign({replace:replaceForA()},(options || {}));
			traverse(v,(item,i,array) => array[i] = coerce(item,{replace:replaceForA()}));
			return v.reduce((accumulator,current) => Math.min(accumulator,current));
		}
		FUNCTIONS.producta = function()  {
			let v, options;
			[v,options] = getargs([].slice.call(arguments,0));
			if(options && options.if) v = v.filter(options.if);
			if(v.length===0) return 0;
			options = Object.assign({
				boolean: {
					true: 1,
					false: 0
				},
				string: 1,
				undefined: 1,
				null: 1,
				Array: 1
			},(options || {}));
			traverse(v,(item,i,array) => array[i] = coerce(item,{replace:options}));
			return FUNCTIONS.product(...v);
		}
		FUNCTIONS.quotienta = function()  {
			let v, options;
			[v,options] = getargs([].slice.call(arguments,0));
			options = Object.assign({replace: { boolean: 1, string: 1, undefined: 1 }},(options || {}));
			if(options.if) v = v.filter(options.if);
			if(v.length===0) return Infinity;
			options = Object.assign({
				boolean: {
					true: 1,
					false: 0
				},
				string: 1,
				undefined: 1,
				null: 1,
				Array: 1
			},(options || {}));
			traverse(v,(item,i,array) => array[i] = coerce(item,{replace:options}));
			return FUNCTIONS.quotient(...v);
		}
		FUNCTIONS.remaindera = function() {
			let v, options;
			[v,options] = getargs([].slice.call(arguments,0));
			options = Object.assign({replace:replaceForA()},(options || {}));
			if(options && options.if) v = v.filter(options.if);
			return v.reduce((accumulator,current) => accumulator - coerce(current,options),0);
		}
		FUNCTIONS.suma = function() {
			let v, options;
			[v,options] = getargs([].slice.call(arguments,0));
			options = Object.assign({replace:replaceForA()},(options || {}));
			if(options && options.if) v = v.filter(options.if);
			return v.reduce((accumulator,current) => accumulator + coerce(current,options),0);
		}
		
		FUNCTIONS.zscores = function() {
			let v, options;
			[v,options] = getargs([].slice.call(arguments,0));
			if(Array.isArray(v[0])) v = v[0];
			v = v.filter(item => typeof(item)==="number");
			if(options && options.if) v = v.filter(options.if);
			if(v.length===0) return 0;
			return zscores(v); 
		}
		const mathdesc = Object.getOwnPropertyDescriptors(Math);
		for(let key in mathdesc) {
			if(FUNCTIONS[key] || FUNCTIONS[key.toLowerCase()]) continue;
			if(typeof(Math[key])==="function") {
				FUNCTIONS[key] = function() {
					let v, options;
					[v,options] = getargs([].slice.call(arguments,0));
					if(options && options.if) v = v.filter(options.if);
					return Math[key](...v);
				}
			} else {
				FUNCTIONS[key.toLowerCase()] = () => Math[key];
			}
		}
		me.functions = new Proxy(FUNCTIONS,{
			set: function(target,property,value) {
				if(typeof(value)!=="function") throw new Error("Hypercalc custom function must be a function: ", value);
				target[property] = value;
				return true;
			}
		});
		function Cell(coordinates,value,options) {
			const isnew = this && this instanceof Cell,
				cell = Cell.cells[coordinates];
			// return Cell if found and not creating new one
			if(!isnew) {
				if(!cell) return new Cell(coordinates,value,options);
				if(arguments.length===1) return cell;
				cell.value = value;
				!options || Object.assign(cell.options,options);
				return cell;
			}
			Object.defineProperty(this,"engine",{enumerable:false, configurable:true, writable: true, value: me});
			this.coordinates = coordinates;
			this.options = {};
			this.computed = null;
			Object.assign(this.options,options);
			Object.defineProperty(this,"references",{enumerable:false, configurable:true, writable: true, value: {}});
			this.data = value;
			Object.defineProperty(this,"calculating",{writable:true});
			Object.defineProperty(this,"value",{ 
				enumerable: false,
				configurable: true,
				get: function() {
					return this.valueOf();
				},
				set: function(value) {
					this.data = value;
					this.compile().calc();
					return true;
				}
			});
			this.compile().calc();
			return this;
		}
		Cell.prototype.addReferences = function() { 
			for(let i=0;i<arguments.length;i++) arguments[i]===this || (this.references[arguments[i].coordinates] = true);
		}
		Cell.prototype.deleteReferences = function() { 
			for(let i=0;i<arguments.length;i++) delete this.references[arguments[i].coordinates];
		}
		Cell.prototype.clearReferences = function() {
			this.references = {};
		}
		Cell.prototype.compile = function() {
			delete this.compiled;
			this.index();
			if(typeof(this.data)==="string" && this.data.indexOf("=")===0) {
				//Object.defineProperty(this,"compiled",{enumerable:false,configurable:true,writable:true,value:new Function("functions","return function() { " + DECLARATIONS + "return " + this.data.substring(1) + "; }")(FUNCTIONS)});
				Object.defineProperty(this,"compiled",{enumerable:false,configurable:true,writable:true,value:new Function("functions","return function() { with(functions) { return " + this.data.substring(1) + "; }}")(FUNCTIONS)});
			}
			for(let pattern in Cell.observers) {
				const observers = [];
				for(let coordinates in Cell.observers[pattern]) observers.push(Cell.cells[coordinates]);
				if(match(pattern,this.coordinates)) this.addReferences(...observers);
			}
			return this;
		}
		Cell.prototype.calc = function(cascade=true) {
			const me = this;
			function calc() {
				if(me.compiled) {
					const current = CURRENTCELL;
					CURRENTCELL = me;
					me.computed = me.compiled();
					CURRENTCELL = current;
				}
				!me.options.oncalculated || me.options.oncalculated(me);
				me.engine.calculating--;
				me.calculating = null;
				if(!me.engine.calculating && me.engine.oncalculated) {
					 me.engine.oncalculated(me.engine);
				}
			}
			if(!me.calculating){
				me.calculating = setTimeout(calc);
				me.engine.calculating++;
			}
			if(cascade) {
				for(let coordinates in me.references) Cell.cells[coordinates].calc();
			}
		}
		Cell.prototype.index = function(index=Cell.cellIndex) { // need to enhance to support compiling ranges, or create a parrallel binary index
			if(index===Cell.cellIndex) {
				Cell.cells[this.coordinates] = this;
			} else if(index===Cell.observerIndex) {
				Cell.observers[this.data] = this;
			}
			const parts = this.coordinates.split(".");
			let node = index.nodes; 
			for(let i=0;i<parts.length;i++) {
				node[parts[i]] || (node[parts[i]] = {nodes:{}});
				if(i===parts.length-1) node[parts[i]].coordinates = this.coordinates;
				else node = node[parts[i]].nodes;
			}
		}
		Cell.prototype.valueOf = function() {
			!CURRENTCELL || this.addReferences(CURRENTCELL);
			return (this.compiled ? this.computed : this.data);
		}
		Cell.find = function(pattern,index=Cell.cellIndex) {
			function find(parts,node,position,results) {
				if(node) {
					if(position===parts.length) {
						const cell = Cell.cells[node.coordinates];
						!cell || results.push(cell);
						return;
					}
					node = node.nodes;
					const part = parts[position],
						rangetype = (part.includes(":") ? ":" : (part.includes("|") ? "|" : null));
					if(!rangetype) {
						if(part==="*") {
							const keys = Object.keys(node),
								next = position + 1;
							for(let key of keys) find(parts,node[key],next,results);
						} else {
							node = node[part];
							find(parts,node,++position,results);
						}
					} else {
						const range = part.split(rangetype);
						let isnum = false;
						if(rangetype===":") {
							for(let i=0;i<range.length;i++) {
								if(parseInt(range[i])==range[i]) {
									range[i] = parseInt(range[i]);
									isnum = true;
								}
							}
						}
						const keys = Object.keys(node),
							next = position + 1;
						for(let key of keys) {
							if(rangetype===":") {
								key = (isnum && parseInt(key)==key ? parseInt(key) : key);
								if(range[0]==="*" || key>=range[0]) {
									if(key<=range[1]) find(parts,node[key],next,results);
								}
							} else if(range.some(item => item==key)) {
								find(parts,node[key],next,results);
							}
						}
					}
				}	
			}
			const results = [];
			find(pattern.split("."),index,0,results);
			return results;
		}
		Cell.cells = {};
		Cell.observers = {};
		Cell.cellIndex = {nodes:{}};
		Cell.observerIndex = {nodes:{}};
		me.Cell = Cell;
		
		class Row {
			constructor(sheet,id,data) {
				Object.defineProperty(this,"engine",{enumerable:false, configurable:true, writable: true, value: me});
				this.sheet = sheet.name;
				this.cells = {};
				id || (id = sheet.rows.length+1);
				this.id = id;
				Row.rows[id] = this;
				let cols = 0;
				if(sheet.options.columns) {
					if(Array.isArray(data)) {
						const keys = Object.keys(sheet.options.columns);
						for(let i=0;i<data.length;i++) {
							const property = keys[i] || i,
								cell = Cell(sheet.name+"."+property+"."+id,data[i],sheet.options.columns[property]);
							this.cells[cell.coordinates] = true;
						}
					} else {
						for(let property in sheet.options.columns) {
							const cell = Cell(sheet.name+"."+property+"."+id,data[property],sheet.options.columns[property]);
							this.cells[cell.coordinates] = true;
						}
					} 
				} else if(Array.isArray(data)) {
					for(let i=0;i<data.length;i++,cols++) {
						const cell = Cell(sheet.name+"."+(i+1)+"."+id,data[i],{});
						this.cells[cell.coordinates] = true;
					}
				} else {
					const keys = Object.keys(data);
					for(let i=0;i<data.length;i++,cols++) {
						const cell = Cell(sheet.name+"."+(i+1)+"."+id,data[keys[i]],{});
						this.cells[cell.coordinates] = true;
					}
				}
				if(sheet.options.columnCount && cols < sheet.options.columnCount) {
					while(cols++<sheet.options.columnCount) {
						const cell = Cell(sheet.name+"."+cols+"."+id,null,{});
						this.cells[cell.coordinates] = true;
					}
				}
			}
		}
		Row.rows = {};
		
		me.Space = class Space {
			constructor(name,options={sparse:me.options.sparse}) {
				Object.defineProperty(this,"engine",{enumerable:false, configurable:true, writable: true, value: me});
				let space = me.spaces[name];
				if(space || !this) return space;
				this.name = name;
				this.options = {};
				Object.assign(this.options,options);
				this.cells = {};
				me.spaces[name] = this;
			}
			createCell(id,data,options) {
				const coordinates = this.name + "." + id,
					cell = new Cell(coordinates,data,options);
				this.cells[coordinates] = true;
				return cell;
			}
			createVector(vector,data) {
				let coordinates = this.name+".";
				Object.keys(this.options.dimensions).forEach((key,i,dimensions) => {
					if(!["number","boolean","string"].includes(typeof(vector[key]))) throw new Error("Incompatible vector " + this.name);
					coordinates += (vector[key] + (i<dimensions.length-1 ? "." : ""));
				});
				Cell(coordinates,data,this.options.contains,this);
			}
			export(options={cells:true,sparse:true}) {
				const results = {},
					cells = {};
				if(options.cells) {
					results.cells = {};
					for(let coordinates in this.cells) {
						if(cells[coordinates]) continue;
						results.cells[coordinates.split(".").slice(1).join(".")] = Cell.cells[coordinates].value;
					}
				}
				return results;
			}
		}
		me.spaces = {};
		me.Sheet = class Sheet extends this.Space {
			constructor(name,options={sparse:me.options.sparse}) {
				super(name,options);
				let sheet = me.sheets[name];
				if(sheet || !this) return sheet;
				this.rows = [];
				me.sheets[name] = this;
			}
			createRow(id,data) {
				const row = new Row(this,id,data);
				this.rows.push(row.id);
				return row;
			}
			import(array,options) { // options should just modify options for the sheet
				for(let i=0;i<array.length;i++) this.createRow(i+1,array[i]);
			}
			export(options={rows:true,cells:false,sparse:true}) {
				const results = {},
					cells = {};
				if(options.rows) {
					if(this.rows.length>0) {
						const headers = ["Row/Col"];
						results.rows = [headers];
						for(let id of this.rows) {
							const row = [];
							row.push(id);
							results.rows.push(row);
							for(let coordinates in Row.rows[id].cells) {
								const [,colname,] = coordinates.split(".");
								cells[coordinates] = true;
								headers.includes(colname) || headers.push(colname);
								row.push(options.extended ? Cell.cells[coordinates] : Cell.cells[coordinates].value);
							}
						}
					} else {
						results.rows = [];
					} 
				}
				if(options.cells) {
					results.cells = {};
					for(let coordinates in this.cells) {
						if(cells[coordinates]) continue;
						results.cells[coordinates.split(".").slice(1).join(".")] = (options.extended ? Cell.cells[coordinates] : Cell.cells[coordinates].value);
					}
				}
				return results;
			}
		}
		me.sheets = {};
	}
	Hypercalc.getArgs = getargs;
	
	module.exports = Hypercalc;
	if(typeof(window)!=="undefined") window.Hypercalc = Hypercalc;
	
}).call(this);
},{"./functions/average.js":1,"./functions/count.js":2,"./functions/cube.js":3,"./functions/dimensions.js":4,"./functions/distance.js":5,"./functions/dotProduct.js":6,"./functions/equal.js":7,"./functions/factorial.js":8,"./functions/intersection.js":9,"./functions/isFunction.js":10,"./functions/isMatrix.js":11,"./functions/isNegative.js":12,"./functions/isNumber.js":13,"./functions/isPositive.js":14,"./functions/isPrime.js":15,"./functions/isVector.js":16,"./functions/madev.js":17,"./functions/matrixDifference.js":18,"./functions/matrixProduct.js":19,"./functions/matrixSum.js":20,"./functions/max.js":21,"./functions/median.js":22,"./functions/min.js":23,"./functions/mode.js":24,"./functions/nthRoot.js":25,"./functions/phi.js":26,"./functions/power.js":27,"./functions/product.js":28,"./functions/quotient.js":29,"./functions/random.js":30,"./functions/remainder.js":31,"./functions/sign.js":32,"./functions/square.js":33,"./functions/stdev.js":34,"./functions/sum.js":35,"./functions/tau.js":36,"./functions/transpose.js":37,"./functions/type.js":38,"./functions/variance.js":39,"./functions/vectorAverage.js":40,"./functions/vectorDifference.js":41,"./functions/vectorProduct.js":42,"./functions/vectorQuotient.js":43,"./functions/vectorSum.js":44}]},{},[46]);
