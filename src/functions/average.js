(function() {
	const add = require("./add.js"),
	isNumber = require("./isNumber.js"),
	flattenReduce = require("./flattenReduce.js"),
	divide = require("./divide.js");
	module.exports = function() {
		let count = 1;
		if(arguments.length===0) return NaN;
		return divide(flattenReduce([].slice.call(arguments),(a,b,options) => {
			if(isNumber(b)) {
				count++; 
				return add(a,b,options); // this needs more work on options.if etc
			}
			return a;
		},true),count);
	}
}).call(this);