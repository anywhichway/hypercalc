(function() {
	const Unit = require("../Unit/index.js"),
		flattenReduce = require("../flattenReduce.js");
	module.exports = function() {
		if(arguments.length===0) return -Infinity;
		return flattenReduce([].slice.call(arguments),Unit.max,true);
	}
}).call(this);