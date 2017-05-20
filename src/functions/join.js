(function() {
	const getArgs = require("../getArgs.js"),
		traverse = require("../traverse.js");
	module.exports = function join() {
		const [v,options] = getArgs([].slice.call(arguments,0)),
			separator = v[v.length-1];
		let result = "";
		traverse(v.slice(0,v.length-1),item => result += (Array.isArray(item) ? join(...item,separator,options) : (result.length>0 ? separator : "") + item));
		return result;
	}
}).call(this);