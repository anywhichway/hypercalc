(function() {
	const add = require("./add.js"),
		flattenReduce = require("./flattenReduce.js");
	module.exports = function() {
		return add(flattenReduce([].slice.call(arguments),add,true),0);
	}
}).call(this);