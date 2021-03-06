(function() {
	const getArgs = require("../getArgs.js"),
		add = require("./add.js"),
		flattenReduce = require("./flattenReduce.js"),
		multiply = require("./multiply.js");
	module.exports = function() {
		const [v,options] = getArgs([].slice.call(arguments,0));
		return add(flattenReduce([].slice.call(v),(a,b) => multiply(a,b,options),true),0);
	}
}).call(this);