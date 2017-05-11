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