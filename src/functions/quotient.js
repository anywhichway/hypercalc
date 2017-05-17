(function() {
	const add = require("./add.js"),
		divide = require("./divide.js"),
		flattenReduce = require("./flattenReduce.js");
	module.exports = function() {
		return add(flattenReduce([].slice.call(arguments),divide,true),0);
	}
}).call(this);