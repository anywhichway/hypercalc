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
