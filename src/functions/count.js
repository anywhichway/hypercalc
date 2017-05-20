(function() {
	const flattenReduce = require("./flattenReduce.js");
	module.exports = function() {
		let count = 1;
		if(arguments.length===0) return 0;
		flattenReduce([].slice.call(arguments),(a,b) => { count++; },true);
		return count;
	}
}).call(this);