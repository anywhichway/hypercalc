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