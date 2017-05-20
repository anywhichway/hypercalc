(function() {
	const adda = require("./adda.js"),
	flattenReduce = require("./flattenReduce.js"),
	divide = require("./divide.js");
	module.exports = function() {
		let count = 1;
		if(arguments.length===0) return NaN;
		return divide(flattenReduce([].slice.call(arguments),(a,b,options) => { count++; return adda(a,b,options); },true),count);
	}
}).call(this);