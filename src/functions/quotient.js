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