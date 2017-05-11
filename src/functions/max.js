(function() {
	const getArgs = require("../getArgs.js");
	module.exports = function()  {
		let v, options;
		[v,options] = getArgs([].slice.call(arguments,0));
		if(v.length===1 && Array.isArray(v[0])) v = v[0];
		if(options && options.if) v = v.filter(options.if);
		if(v.length===0) return -Infinity;
		return v.reduce((accumulator,current) => Math.max(accumulator,current));
	}
}).call(this);