(function() {
	const add = require("./add.js"),
		flattenReduce = require("./flattenReduce.js"),
		multiply = require("./multiply.js");
	module.exports = function() {
		return add(flattenReduce([].slice.call(arguments),multiply,true),0);
	}
}).call(this);