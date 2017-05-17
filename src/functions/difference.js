(function() {
	const subtract = require("./subtract.js");
	module.exports = function() {
		return add(flattenReduce([].slice.call(arguments),subtract,true),0);
	}
}).call(this);