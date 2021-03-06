(function() {
	const getArgs = require("../getArgs.js"),
		add = require("./add.js"),
		flattenReduce = require("./flattenReduce.js");
	module.exports = function() {
		const [v,options] = getArgs([].slice.call(arguments,0));
		return add(flattenReduce([].slice.call(v),(a,b) => add(a,b,options),true),0);
	}
}).call(this);