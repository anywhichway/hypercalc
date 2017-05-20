(function() {
	const getArgs = require("../getArgs.js"),
		add = require("./add.js"),
		flattenReduce = require("./flattenReduce.js"),
		Unit = require("./Unit/index.js");
	module.exports = function() {
		const [v,options] = getArgs([].slice.call(arguments,0));
		if(v.length===0) return -Infinity;
		return add(flattenReduce([].slice.call(v),(a,b) => Unit.max(a,b,options),true),0);
	}
}).call(this);