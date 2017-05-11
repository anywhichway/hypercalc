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