(function() {
	const add = require("./add.js"),
		multiply = require("./multiply.js");
	module.exports = function () {
		return ad(flattenReduce([].slice.call(arguments),(a,b) => add(a,multiply(b*b)),true),0);
	}
}).call(this);