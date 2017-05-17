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