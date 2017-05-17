(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function() {
	// concatMap :: (a -> [b]) -> [a] -> [b]
	module.exports = (f,reduce) => xs => (reduce ? xs.map(f).reduce((x,y) => x.concat(y), []).reduce((accu,curr) => reduce(accu,curr)): xs.map(f).reduce((x,y) => x.concat(y), []))
}).call(this);
},{}],2:[function(require,module,exports){
(function() {
	module.exports = function() { return (this ? new Date(...arguments) : Date(...arguments)) }
	module.exports.now = () => Date.now();
	module.exports.parse = (string) => Date.parse(string);
	module.exports.UTC = () => Date.UTC(...arguments);
	for(let key in Date.prototype) {
		if(typeof(Date.prototype[key])==="function") {
			module.exports[key] = function() { return Date.prototype[key].call(...arguments); }
		}
	}
}).call(this);
},{}],3:[function(require,module,exports){
(function() {
	module.exports = (p1,p2) => Math.sqrt(p1.reduce((accumulator,current,i) => accumulator += Math.pow(p2[i]-p1[i],2),0));
}).call(this);
},{}],4:[function(require,module,exports){
(function() {
	module.exports = {};
	module.exports.distance = require("./distance.js");
}).call(this);
},{"./distance.js":3}],5:[function(require,module,exports){
(function() {
	module.exports = (value) => Math.pow(value,1/3);
}).call(this);
},{}],6:[function(require,module,exports){
(function() {
	module.exports = value => value * value * value;
}).call(this);
},{}],7:[function(require,module,exports){
(function() {
	module.exports =  v => {
		let result = 1;
		v = Math.round(v);
		while(v) result *= v--;
		return result;
	}
}).call(this);
},{}],8:[function(require,module,exports){
(function() {
	module.exports = {};
	const mathdesc = Object.getOwnPropertyDescriptors(Math);
	for(let key in mathdesc) {
		if(typeof(Math[key])==="function") module.exports[key] = function() { return Math[key](...arguments); }
		else {
			module.exports[key.toLowerCase()] = () => Math[key];
			module.exports[key] = Math[key];
		}
	}
	module.exports.cbrt = require("./cbrt.js");
	module.exports.cube = require("./cube.js");
	module.exports.factorial = require("./factorial.js");
	module.exports.nthRoot = require("./nthRoot.js");
	module.exports.phi = require("./phi.js");
	module.exports.power = require("./power.js");
	module.exports.sign = require("./sign.js");
	module.exports.tau = require("./tau.js");
	module.exports.random = require("./random.js");
	module.exports.square = require("./square.js");
}).call(this);
},{"./cbrt.js":5,"./cube.js":6,"./factorial.js":7,"./nthRoot.js":9,"./phi.js":10,"./power.js":11,"./random.js":12,"./sign.js":13,"./square.js":14,"./tau.js":15}],9:[function(require,module,exports){
(function() {
	module.exports = (value,root=2) => Math.pow(value,1/root);
}).call(this);
},{}],10:[function(require,module,exports){
(function() {
	module.exports = () => (1 + Math.sqrt(5)) / 2;
}).call(this);
},{}],11:[function(require,module,exports){
(function() {
	module.exports = (x,y) => x ^ y;
}).call(this);
},{}],12:[function(require,module,exports){
(function() {
	const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
	module.exports = function(min,max) {
		let result;
		if(arguments.length>=2) result = getRandomInt(min,max);
		else result = Math.random();
		return result;
	}
}).call(this);
},{}],13:[function(require,module,exports){
(function() {
	const isNumber = require("../isNumber.js");
	module.exports = value => (isNumber(value) ? (value > 0 ? 1 : (value ===0 ? 0 : -1)) : undefined);
}).call(this);
},{"../isNumber.js":43}],14:[function(require,module,exports){
(function() {
	module.exports = value => value * value;
}).call(this);
},{}],15:[function(require,module,exports){
(function() {
	module.exports = () => 2 * Math.PI;
}).call(this);
},{}],16:[function(require,module,exports){
(function() {
	const Vector = require("../Vector/index.js");
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
	function Matrix() {
		
	}
	Matrix.sum = function() {
		return [].slice.call(arguments).reduce((accumulator,current) => {
			for(let i=0;i<accumulator.length;i++) accumulator[i] = Vector.sum(accumulator[i],Array.isArray(current) ? current[i] : current);
			return accumulator;
		});
	}
	Matrix.dimensions = getdim;
	Matrix.invert = function(m) {
		function inverse(_A) {
		    var temp,
		    N = _A.length,
		    E = [];
		   
		    for (var i = 0; i < N; i++)
		      E[i] = [];
		   
		    for (i = 0; i < N; i++)
		      for (var j = 0; j < N; j++) {
		        E[i][j] = 0;
		        if (i == j)
		          E[i][j] = 1;
		      }
		   
		    for (var k = 0; k < N; k++) {
		      temp = _A[k][k];
		   
		      for (var j = 0; j < N; j++)
		      {
		        _A[k][j] /= temp;
		        E[k][j] /= temp;
		      }
		   
		      for (var i = k + 1; i < N; i++)
		      {
		        temp = _A[i][k];
		   
		        for (var j = 0; j < N; j++)
		        {
		          _A[i][j] -= _A[k][j] * temp;
		          E[i][j] -= E[k][j] * temp;
		        }
		      }
		    }
		   
		    for (var k = N - 1; k > 0; k--)
		    {
		      for (var i = k - 1; i >= 0; i--)
		      {
		        temp = _A[i][k];
		   
		        for (var j = 0; j < N; j++)
		        {
		          _A[i][j] -= _A[k][j] * temp;
		          E[i][j] -= E[k][j] * temp;
		        }
		      }
		    }
		   
		    for (var i = 0; i < N; i++)
		      for (var j = 0; j < N; j++)
		        _A[i][j] = E[i][j];
		    return _A;
		  }
		return inverse(a);
	}
	Matrix.power = Matrix.pow = function(m,pow) {
		while(pow-->1) {
			m = Matrix.product(m,m.slice(0));
		}
		return m;
	}
	Matrix.product = function(a,b) {
		return a.map((x,i) => Matrix.transpose(b.slice(0)).map((y) => Vector.dotProduct(x.slice(0), y.slice(0))));
	}
	Matrix.difference = function() {
		return [].slice.call(arguments).reduce((accumulator,current) => {
			for(let i=0;i<accumulator.length;i++) accumulator[i] = Vector.difference(accumulator[i],Array.isArray(current) ? current[i] : current);
			return accumulator;
		});
	}
	Matrix.transpose = function(m) {
		return m[0].map((x,i) => m.map((y,k) => y[i]));
	}
	module.exports = Matrix;
}).call(this);
},{"../Vector/index.js":31}],17:[function(require,module,exports){
(function() {
	module.exports = () => 1.6021766208;
}).call(this);
},{}],18:[function(require,module,exports){
(function() {
	module.exports = {};
	module.exports.c = require("./speedOfLight.js");
	module.exports.e = require("./elementaryCharge.js");
	module.exports.planks = module.exports.h = require("./planks.js");
}).call(this);
},{"./elementaryCharge.js":17,"./planks.js":19,"./speedOfLight.js":20}],19:[function(require,module,exports){
(function() {
	module.exports = () => 6.626070040 * Math.pow(10,34);
}).call(this);
},{}],20:[function(require,module,exports){
(function() {
	module.exports = () => 299792458;
}).call(this);
},{}],21:[function(require,module,exports){
(function() {
	module.exports = {};
	module.exports.average = require("../average.js");
	module.exports.count = require("../count.js");
	module.exports.madev = require("./madev.js");
	module.exports.max = require("./max.js");
	module.exports.median = require("./median.js");
	module.exports.min = require("./min.js");
	module.exports.mode = require("./mode.js");
	module.exports.product = require("../product.js");
	module.exports.stdev = require("./stdev.js");
	module.exports.sum = require("../sum.js");
	module.exports.variance = require("./variance.js");
}).call(this);
},{"../average.js":33,"../count.js":34,"../product.js":49,"../sum.js":52,"./madev.js":22,"./max.js":23,"./median.js":24,"./min.js":25,"./mode.js":26,"./stdev.js":27,"./variance.js":28}],22:[function(require,module,exports){
(function() {
	const average = require("../average"),
		flatten = require("../flatten.js"),
		sum = require("../sum.js");
	module.exports = function() {
		const args = flatten([].slice.call(arguments),true),
			m = average(args);
		return average(args.map(num => Math.abs(num - m)));
	}
}).call(this);
},{"../average":33,"../flatten.js":38,"../sum.js":52}],23:[function(require,module,exports){
(function() {
	const Unit = require("../Unit/index.js"),
		flattenReduce = require("../flattenReduce.js");
	module.exports = function() {
		if(arguments.length===0) return -Infinity;
		return flattenReduce([].slice.call(arguments),Unit.max,true);
	}
}).call(this);
},{"../Unit/index.js":30,"../flattenReduce.js":39}],24:[function(require,module,exports){
(function() {
	const getArgs = require("../../getArgs.js");
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
},{"../../getArgs.js":55}],25:[function(require,module,exports){
(function() {
	const Unit = require("../Unit/index.js"),
		flattenReduce = require("../flattenReduce.js");
	module.exports = function() {
		if(arguments.length===0) return Infinity;
		return flattenReduce([].slice.call(arguments),Unit.min,true);
	}
}).call(this);
},{"../Unit/index.js":30,"../flattenReduce.js":39}],26:[function(require,module,exports){
(function() {
	const getArgs = require("../../getArgs.js");
	function mode(args) {
		if (!args.length) return [];
		const modeMap = {};
		let modes = [],
			maxCount = 0;
		for(let val of args) {
			const v = val.valueOf();
			if (!modeMap[v]) modeMap[v] = 1;
			else modeMap[v]++;

			if (modeMap[v] > maxCount) {
				modes = [val];
				maxCount = modeMap[v];
			}
			else if (modeMap[v] === maxCount) {
				modes.push(val);
				maxCount = modeMap[v];
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
},{"../../getArgs.js":55}],27:[function(require,module,exports){
(function() {
	const average = require("../average"),
		flatten = require("../flatten.js"),
		variance = require("./variance.js");
	module.exports = function() {
		const args = flatten([].slice.call(arguments),true),
			m = average(args);
		return !args.length ? 0 : Math.sqrt(variance(args));
	}
}).call(this);
},{"../average":33,"../flatten.js":38,"./variance.js":28}],28:[function(require,module,exports){
(function() {
	const average = require("../average"),
		flatten = require("../flatten.js"),
		sum = require("../sum.js"),
		variance = args => {
			const m = average(args);
			return args.reduce((accumulator, current) => accumulator += Math.pow((current - m), 2),0) / args.length;
		};	
	module.exports = function() {
		const args = flatten([].slice.call(arguments),true),
			m = average(args);
		return args.reduce((accumulator, current) => accumulator += Math.pow((current - m), 2),0) / args.length;
	}
}).call(this);
},{"../average":33,"../flatten.js":38,"../sum.js":52}],29:[function(require,module,exports){
(function() {
	module.exports = function() { return (this ? new String(...arguments) : String(...arguments)); }
	const stringdesc = Object.getOwnPropertyDescriptors(String.prototype);
	for(let key in stringdesc) {
		if(typeof(String.prototype[key])==="function") {
			module.exports[key] = function() { return String.prototype[key].call(...arguments); }
		}
	}
}).call(this);
},{}],30:[function(require,module,exports){
(function() {
	function adjustUnits(unit,base,divide) {
		const mainparts = unit.baseUnits.split("/"),
			modifier = (divide ? -1 : 1),
			numerator = mainparts[0].split(" ").filter(item => item!="1" && item!==""),
			denominator = (mainparts[1] ? mainparts[1].split(" ").filter(item => item!="1" && item!=="") : []),
			baseparts = base.split("/"),
			basemap = {
				numerator: (baseparts[(divide ? 1 :0)] || "").split(" ").filter(item => item!="1" && item!=="").reduce((accumulator,current) => { 
					const parts = current.split("^"),
						unit = parts[0],
						power = (parts[1] ? parseFloat(parts[1]) : 1);
					accumulator[unit] = power;
					return accumulator;
				},{}),
				denominator: (baseparts[(divide ? 0 :1)] || "").split(" ").filter(item => item!="1" && item!="").reduce((accumulator,current) => { 
					const parts = current.split("^"),
						unit = parts[0],
						power = (parts[1] ? parseFloat(parts[1]) : 1);
					accumulator[unit] = power;
					return accumulator;
				},{})
			},
			used = {};
			for(let i=0;i<numerator.length;i++) {
				const subparts = numerator[i].split("^");
				used[subparts[0]] = true;
					subparts[1] = ((subparts[1] ? parseFloat(subparts[1]) : 1) + (basemap.numerator[subparts[0]] || 0)) - (basemap.denominator[subparts[0]] || 0);
					if(subparts[1]===0) numerator.splice(i,1);
					else if(subparts[1]===1) numerator[i] = subparts[0];
					else numerator[i] = subparts.join("^");
			}
			for(let i=0;i<denominator.length;i++) {
				const subparts = denominator[i].split("^");
				used[subparts[0]] = true;
					subparts[1] = ((subparts[1] ? parseFloat(subparts[1]) : 1) + (basemap.denominator[subparts[0]] || 0)) - (basemap.numerator[subparts[0]] || 0);
					if(subparts[1]===0) denominator.splice(i,1);
					else if(subparts[1]===1) denominator[i] = subparts[0];
					else denominator[i] = subparts.join("^");
			}
			for(let unit in basemap.denominator) {
				const power = basemap.denominator[unit];
				used[unit] || denominator.push(power>1 ? unit+"^"+power : unit);
			}
			denominator.sort(); 
			for(let unit in basemap.numerator) {
				const power = basemap.numerator[unit];
				used[unit] || numerator.push(power>1 ? unit+"^"+power : unit);
			}
			numerator.sort(); 
		unit.baseUnits  = (numerator.length > 0 ? numerator.join(" ") : (denominator.length > 0 ? 1 : "")) + (denominator.length > 0 ? " / " + denominator.join(" ") : "");
	}
	function createUnit(value,scope=Object.create(Unit.prototype)) {
		if(value && typeof(value)==="object" && value instanceof Unit) {
			for(let key of ["value","units","baseUnits"]) scope[key] = value[key];
			Object.defineProperty(scope,"constructor",{enumerable:false,configurable:true,writable:true,value:Unit});
			return scope;
		}
		scope.value = value;
		scope.units = {};
		scope.baseUnits = "";
		Object.defineProperty(scope,"constructor",{enumerable:false,configurable:true,writable:true,value:Unit});
		return scope;
	}
	function Unit(value,unit) {
		const type = typeof(value);
		if((!this || !(this instanceof Unit)) && value && type==="object" && value instanceof Unit) {
			return value;
		} else if(type==="string") {
			if((!this || !(this instanceof Unit))) {
				return new Unit(value,unit);
			}
			const u = Unit.parse(value);
			for(let key in u) {
				this[key] = u[key];
			}
		} else if(type==="number") {
			if((!this || !(this instanceof Unit))) {
				return new Unit(value,unit);
			}
			createUnit(value,this);
		} else {
			throw new TypeError(`Can't create Unit from ${JSON.stringify(value)}`);
		}
		if(unit) {
			const base = Unit.getBase(unit);
			if(base!==unit) this.value *= Unit.getConversion(base,unit);
			this.baseUnits = base;
			unit===this.baseUnits || (this.units[unit] = this.baseUnits);
		}
		Object.freeze(this);
	}
	Unit.conversions = {
		cm: {
			in: 2.54
		},
		ms: {
			sec: 1000
		}
	}
	Unit.add = function(a,b)  {
		if(typeof(a)==="number" && typeof(b)==="number") return a + b;
		a = createUnit(Unit(a)); // create a changeable Unit
		b = Unit(b);
		if(a.baseUnits===b.baseUnits || b.baseUnits==="") a.value += b.value
		else throw new TypeError("Incompatible " + a + " + " + b);
		return Object.freeze(a);
	}
	Unit.as = function(a,unit) {
		if(typeof(a)==="string") a = Unit.parse(a);
		const c = Unit.getConversion(a.baseUnits,unit);
		if(typeof(c)==="number") return a.value * c;
	}
	Unit.divide = function(a,b)  {
		if(typeof(a)==="number" && typeof(b)==="number") return a / b;
		a = createUnit(Unit(a)); // create a changeable Unit
		b = Unit(b);
		if(a.baseUnits===b.baseUnits || Unit.isSimple(b)) {
			a.value /= b.value;
			if(b.baseUnits && b.baseUnits.length>0) adjustUnits(a,b.baseUnits,true);
		} else throw new TypeError("Incompatible " + a + " / " + b);
		return Object.freeze(a);
	}
	Unit.isSimple = function(a) {
		return a instanceof Unit && a.baseUnits.indexOf(" ")===-1;
	}
	Unit.multiply = function(a,b)  {
		if(typeof(a)==="number" && typeof(b)==="number") return a * b;
		a = createUnit(Unit(a)); // create a changeable Unit
		b = Unit(b);
		if(a.baseUnits===b.baseUnits || Unit.isSimple(b)) {
			a.value *= b.value;
			if(b.baseUnits && b.baseUnits.length>0) adjustUnits(a,b.baseUnits);
		} else throw new TypeError("Incompatible " + a + " * " + b);
		return Object.freeze(a);
	}
	Unit.pow = function(a,b) {
		if(typeof(a)==="number") return Math.pow(a,b);
		a = createUnit(Unit(a)); // create a changeable Unit
		a.value = Math.pow(a.value,b)
		adjustUnits(a,a.baseUnits);	
		return Object.freeze(a);
	}
	Unit.subtract = function(a,b)  {
		if(typeof(a)==="number" && typeof(b)==="number") return a - b;
		a = createUnit(Unit(a)); // create a changeable Unit
		b = Unit(b);
		a.constructor = Unit;
		if(a.baseUnits===b.baseUnits || b.baseUnits==="") a.value -= b.value
		else throw new TypeError("Incompatible " + a + " - " + b);
		return Object.freeze(a);
	}
	Unit.to = function(a,unit) {
		const parts = unit.split(" ");
		a = createUnit(Unit(a));
		for(let part of parts) {
			if(part==="/") continue;
			const base = Unit.getBase(part);
			for(let unit in a.units) {
				if(unit!==part && a.units[unit]===base) {
					delete a.units[unit];
					if(part!==base) a.units[part] = base;
				}
			}
		}
		return Object.freeze(a);
	}
	Unit.toJSON = function(a) {
		return a.valueOf();
	}
	Unit.valueOf = function(a) {
		let units = a.baseUnits,
			value = a.value,
			parts = units.split(" ");
		for(let unit in a.units) {
			const base = a.units[unit];
			if(units.indexOf(base)>=0) { 
				for(let part of parts) {
					let multiplier = 1;
					if(part.indexOf(base)===0) {
						const subparts = part.split("^");
						if(subparts[0]===base && subparts[1]) multiplier = parseFloat(subparts[1]);
					}
					value /= Math.pow(Unit.getConversion(base,unit),multiplier);
					units = units.replace(new RegExp(base,"g"),unit);
				}
			}
		}
		return value + " " + units;
	}
	for(let key in Unit) {
		if(typeof(Unit[key])==="function") Unit.prototype[key] = function() { return Unit[key](this,...arguments); }
	}
	Unit.getBase = function(unit) {
		for(let base in Unit.conversions) {
			if(base===unit || typeof(Unit.conversions[base][unit])==="number") return base;
		}
	}
	Unit.getConversion = function(unit1,unit2) {
		if(unit1===unit2) return 1;
		let base = Unit.getBase(unit1);
		if(base && Unit.conversions[base][unit2]) return Unit.conversions[base][unit2];
		base = Unit.getBase(unit2);
		if(base && Unit.conversions[base][unit1]) return 1 / Unit.conversions[base][unit1];
	}
	Unit.max = function(a,b) {
		if(typeof(a)==="number" && typeof(b)==="number") return Math.max(a,b);
		a = createUnit(Unit(a)); // create a changeable Unit
		b = Unit(b);
		if(a.value>b.value) return a;
		return b;
	}
	Unit.min = function(a,b) {
		if(typeof(a)==="number" && typeof(b)==="number") return Math.min(a,b);
		a = createUnit(Unit(a)); // create a changeable Unit
		b = Unit(b);
		if(a.value<b.value) return a;
		return b;
	}
	Unit.parse = function(string) {
		const unit = createUnit(),
			parts = string.split(" ");
		unit.value = parseFloat(parts[0]);
		for(let i=1;i<parts.length;i++) {
			const part = parts[i];
			if(part!=="/") {
				const subparts = part.split("^");
				const base = Unit.getBase(subparts[0]);
				if(part!==base) {
					unit.units[subparts[0]] = base;
					unit.value *= Unit.conversions[base][subparts[0]];
				}
				unit.baseUnits += (unit.baseUnits.length>0 ? " " : "") + base;
			} else unit.baseUnits += " / ";
		}
		return Object.freeze(unit);
	}
	module.exports = Unit;
}).call(this)
},{}],31:[function(require,module,exports){
(function() {
	const add = require("../add.js"),
		divide = require("../divide.js"),
		multiply = require("../multiply.js"),
		pow = require("../pow.js"),
		subtract = require("../subtract.js"),
		Unit = require("../Unit/index.js")
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

	function Vector() {
	  const proxy = new Proxy(new Array(...arguments),{
	    get: (target,property) => {
	       // 1st see if target is enhanced with its own properties
	       let desc = Object.getOwnPropertyDescriptor(target,property);
	       if(desc) return desc.value;
	       // 2nd check Vector prototype which may shadow/enhance Array
	       desc = Object.getOwnPropertyDescriptor(Vector.prototype,property);
	       if(desc) return desc.value;
	       // 3rd, just do normal lookup
	       return target[property];
	     },
	     set: (target,property,value) => {
	       if(typeof(arg)!=="number") {
	        error("set: Vectors can only contain numbers!");
	        return;
	       }
	       target[property] = value;
	       return true;
	     },
	     deleteProperty: (target,property) => {
	      // create localized property that makes it look undefined
	      // causes the 1st get handler to respond with undefined
	       Object.defineProperty(target,property,{value:undefined});
	       return true;
	     }
	   });
	   // shadow any unwanted methods by deleting here
	   [].forEach(key => delete proxy[key]);
	   return proxy;
	}
	Vector.prototype = []; // give Vector all the capability of Array
	// define push, unshift, splice so they reject nesting arrays
	["push","unshift","splice"].forEach(property => {
	  Vector.prototype[property] = function() {
	    if([].slice.call(arguments).some(arg => Array.isArray(arg))) {
	      error(property + ": Vectors can only have one dimension!");
	      return;
	    }
	    return [].push.call(this,...arguments);
	  }
	});
	Vector.prototype.concat = function() {
	 if([].slice.call(arguments).some(arg => Array.isArray(arg)
	     && arg.some(nested => Array.isArray(nested)))) {
	     error("concat: Vectors can only have one dimension!");
	     return;
	  }
	 return [].concat.call(this,...arguments);
	}
	Vector.reduce = function(args,f) {
		return args.reduce((accumulator,current) => {
			for(let i=0;i<accumulator.length;i++) accumulator[i] = f(accumulator[i],Array.isArray(current) ? current[i] : current);
			return accumulator;
		});
	}
	Vector.map = function(args,f) {
		return args.map(f);
	}
	Vector.sum = function() {
		return Vector.reduce([].slice.call(arguments),add);
	}
	Vector.average = function() {
		const args = [].slice.call(arguments);
		return Vector.reduce(args,add).map(a => Unit.divide(a,args.length));
	}
	Vector.product = Vector.crossProduct = function(a,b) {
		if(a.length===2) {
			return a[0]*b[1]-a[1]*b[0];
		}
		return [a[1]*b[2]-a[2]*b[1],
			a[2]*b[0]-a[0]*b[2],
			a[0]*b[1]-a[1]*b[0]];
	}
	Vector.scalarQuotient = function() {
		return Vector.reduce([].slice.call(arguments),divide);
	}
	Vector.dotProduct = function() {
		return Vector.reduce([].slice.call(arguments),multiply).reduce(add);
	}
	Vector.scalarProduct = function() {
		return Vector.reduce([].slice.call(arguments),multiply);
	}
	Vector.pow = function() {
		return Vector.reduce([].slice.call(arguments),pow);
	}
	Vector.difference = function() {
		return Vector.reduce([].slice.call(arguments),subtract);
	}
	for(let key in Vector) {
		if(typeof(Vector[key])==="function") Vector.prototype[key] = function() { return Vector[key](this,...arguments); }
	}
	module.exports = Vector;
}).call(this);

},{"../Unit/index.js":30,"../add.js":32,"../divide.js":36,"../multiply.js":47,"../pow.js":48,"../subtract.js":51}],32:[function(require,module,exports){
(function() {
	const Unit = require("./Unit/index.js");
	module.exports = (a,b) => Unit.add(a,b);
}).call(this);
},{"./Unit/index.js":30}],33:[function(require,module,exports){
(function() {
	const add = require("./add.js"),
	flattenReduce = require("./flattenReduce.js"),
	divide = require("./divide.js");
	module.exports = function() {
		let count = 1;
		if(arguments.length===0) return NaN;
		return divide(flattenReduce([].slice.call(arguments),(a,b) => { count++; return add(a,b); },true),count);
	}
}).call(this);
},{"./add.js":32,"./divide.js":36,"./flattenReduce.js":39}],34:[function(require,module,exports){
(function() {
	flattenReduce = require("./flattenReduce.js");
	module.exports = function() {
		let count = 1;
		if(arguments.length===0) return 0;
		flattenReduce([].slice.call(arguments),(a,b) => { count++; },true);
		return count;
	}
}).call(this);
},{"./flattenReduce.js":39}],35:[function(require,module,exports){
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
},{}],36:[function(require,module,exports){
(function() {
	const Unit = require("./Unit/index.js");
	module.exports = (a,b) => Unit.divide(a,b);
}).call(this);
},{"./Unit/index.js":30}],37:[function(require,module,exports){
(function() {
	// change to a variable arg function
	// change to support vector and matrices
	const equal = (a,b) => a===b || (Array.isArray(a) && Array.isArray(b) && arrayEqual(a,b)),
		arrayEqual = (a,b) => a.length===b.length && a.every((item,i) => equal(item,b[i]));
	module.exports = equal;
}).call(this);
},{}],38:[function(require,module,exports){
(function() {
	const concatMapReduce = require("../concatMapReduce.js");
	// id :: a -> a
	const id = x => x;
	//flatten :: [[a]] -> [a]
	const flatten = concatMapReduce (id)

	// deepFlatten :: [[[a]]] -> [a]
	const deepFlatten = concatMapReduce (data => Array.isArray(data) ? deepFlatten(data) : data)
	
	module.exports = (array,deep) => (deep ? deepFlatten : flatten)(array);
}).call(this);
},{"../concatMapReduce.js":1}],39:[function(require,module,exports){
(function() {
	const concatMapReduce = require("../concatMapReduce.js");
	// flatten :: [[a]] -> [a]
	const shallowFlattenReduce = (array,reduce) => concatMapReduce (id,reduce)(array)
	
	// deepFlatten :: [[[a]]] -> [a]
	const deepFlattenReduce = (array,reduce) => concatMapReduce (data => Array.isArray(data) ? deepFlattenReduce(data) : data,reduce)(array)
	
	module.exports = (array,reduce,deep) => (deep ? deepFlattenReduce : shallowFlattenReduce)(array,reduce);
}).call(this);
},{"../concatMapReduce.js":1}],40:[function(require,module,exports){
(function() {
	module.exports = data => typeof(data)==="function";
}).call(this);
},{}],41:[function(require,module,exports){
(function() {
	module.exports = data => Array.isArray(data) && Array.isArray(data[0]) && Array.isArray(data[data.length-1]);
}).call(this);
},{}],42:[function(require,module,exports){
(function() {
	module.exports = value => value < 0;
}).call(this);
},{}],43:[function(require,module,exports){
(function() {
	module.exports = data => typeof(data)==="number";
}).call(this);
},{}],44:[function(require,module,exports){
(function() {
	module.exports = value => value > 0;
}).call(this);
},{}],45:[function(require,module,exports){
(function() {
	module.exports = num => {
	    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
	        if(num % i === 0) return false; 
	    return num !== 1;
	}
}).call(this);
},{}],46:[function(require,module,exports){
(function() {
	module.exports = data => Array.isArray(data) && !Array.isArray(data[0]) && !Array.isArray(data[data.length-1]);
}).call(this);
},{}],47:[function(require,module,exports){
(function() {
	const Unit = require("./Unit/index.js");
	module.exports = (a,b) => Unit.multiply(a,b);
}).call(this);
},{"./Unit/index.js":30}],48:[function(require,module,exports){
(function() {
	const Unit = require("./Unit/index.js");
	module.exports = (a,b) => Unit.pow(a,b);
}).call(this);
},{"./Unit/index.js":30}],49:[function(require,module,exports){
(function() {
	const add = require("./add.js"),
		flattenReduce = require("./flattenReduce.js"),
		multiply = require("./multiply.js");
	module.exports = function() {
		return add(flattenReduce([].slice.call(arguments),multiply,true),0);
	}
}).call(this);
},{"./add.js":32,"./flattenReduce.js":39,"./multiply.js":47}],50:[function(require,module,exports){
(function() {
	const add = require("./add.js"),
		divide = require("./divide.js"),
		flattenReduce = require("./flattenReduce.js");
	module.exports = function() {
		return add(flattenReduce([].slice.call(arguments),divide,true),0);
	}
}).call(this);
},{"./add.js":32,"./divide.js":36,"./flattenReduce.js":39}],51:[function(require,module,exports){
(function() {
	const Unit = require("./Unit/index.js");
	module.exports = (a,b) => Unit.subtract(a,b);
}).call(this);
},{"./Unit/index.js":30}],52:[function(require,module,exports){
(function() {
	const add = require("./add.js"),
		flattenReduce = require("./flattenReduce.js");
	module.exports = function() {
		return add(flattenReduce([].slice.call(arguments),add,true),0);
	}
}).call(this);
},{"./add.js":32,"./flattenReduce.js":39}],53:[function(require,module,exports){
(function() {
	module.exports = (value,options={}) => { 
		return new Function("value","return `"+(options.template ? options.template : "${value}")+"`")(value); 
	}
}).call(this);
},{}],54:[function(require,module,exports){
(function() {
	module.exports = function(v) {
		const type = typeof(v);
		return (v===null || v===undefined ? "undefined" : (Array.isArray(v) ? "Array" : (type==="object" ? v.constructor.name : type)));
	}
}).call(this);
},{}],55:[function(require,module,exports){
(function() {
	function getArgs(args) {
		getArgs.VARGS = [];
		const last = args[args.length-1],
			options = (last && typeof(last)==="object" && !Array.isArray(last) ? last : null);
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
},{}],56:[function(require,module,exports){
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
		
		FUNCTIONS.Date = require("./functions/Date/index.js");
		
		FUNCTIONS.Geometry = require("./functions/Geometry/index.js");
		
		FUNCTIONS.Math = require("./functions/Math/index.js");
		
		FUNCTIONS.Matrix = require("./functions/Matrix/index.js");
		FUNCTIONS.Physics = require("./functions/Physics/index.js");
		FUNCTIONS.Statistics = require("./functions/Statistics/index.js");
			
		FUNCTIONS.String = require("./functions/String/index.js");
		
		FUNCTIONS.Unit = require("./functions/Unit/index.js");
		FUNCTIONS.Vector = require("./functions/Vector/index.js");
	
		FUNCTIONS.add = require("./functions/add.js");
		FUNCTIONS.average = require("./functions/average.js");
		FUNCTIONS.dimensions = require("./functions/dimensions.js");
		FUNCTIONS.divide = require("./functions/divide.js");
		FUNCTIONS.equal = require("./functions/equal.js");
		
		FUNCTIONS.isFunction = require("./functions/isFunction.js");
		FUNCTIONS.isMatrix = require("./functions/isMatrix.js");
		FUNCTIONS.isNegative = require("./functions/isNegative.js");
		FUNCTIONS.isNumeric = FUNCTIONS.isNumber = require("./functions/isNumber.js");
		FUNCTIONS.isPositive = require("./functions/isPositive.js");
		FUNCTIONS.isPrime = require("./functions/isPrime.js");
		FUNCTIONS.isVector = require("./functions/isVector.js");
		
		FUNCTIONS.multiply = require("./functions/multiply.js");
		FUNCTIONS.product = require("./functions/product.js");
		FUNCTIONS.power = FUNCTIONS.pow = require("./functions/pow.js");
		FUNCTIONS.quotient = require("./functions/quotient.js");
		FUNCTIONS.subtract = require("./functions/subtract.js");
		FUNCTIONS.sum = require("./functions/sum.js");
		FUNCTIONS.text = require("./functions/text.js");
		FUNCTIONS.type = require("./functions/type.js");
		
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
		FUNCTIONS.interval = function(i,value) {
			const cell = CURRENTCELL;
			setInterval(() => { cell.calc(); },i)
			return "="+value;
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
					if(typeof(value)==="string" && value==parseFloat(value)) value = parseFloat(value);
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
					let value = me.compiled();
					if(typeof(value)==="string" && value.indexOf("=")===0) {
						value = new Function("return " + value.substring(1))()();
					}
					me.computed = value;
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
},{"./functions/Date/index.js":2,"./functions/Geometry/index.js":4,"./functions/Math/index.js":8,"./functions/Matrix/index.js":16,"./functions/Physics/index.js":18,"./functions/Statistics/index.js":21,"./functions/String/index.js":29,"./functions/Unit/index.js":30,"./functions/Vector/index.js":31,"./functions/add.js":32,"./functions/average.js":33,"./functions/dimensions.js":35,"./functions/divide.js":36,"./functions/equal.js":37,"./functions/isFunction.js":40,"./functions/isMatrix.js":41,"./functions/isNegative.js":42,"./functions/isNumber.js":43,"./functions/isPositive.js":44,"./functions/isPrime.js":45,"./functions/isVector.js":46,"./functions/multiply.js":47,"./functions/pow.js":48,"./functions/product.js":49,"./functions/quotient.js":50,"./functions/subtract.js":51,"./functions/sum.js":52,"./functions/text.js":53,"./functions/type.js":54}]},{},[56]);
