(function() {
	const getArgs = require("../getArgs.js");
	module.exports = function() {
		let v, options;
		[v,options] = getArgs([].slice.call(arguments,0));
		if(v.length===1 && Array.isArray(v[0])) v = v[0];
		v = v.filter(item => typeof(item)==="number");
		if(options && options.if) v = v.filter(options.if);
		return v.length;
	}
}).call(this);