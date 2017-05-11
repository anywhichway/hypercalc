(function() {
	const getArgs = require("../getArgs.js"),
		sum = args => (!args.length ? 0 : args.reduce((accumulator,current) => accumulator + current)),
		mean = args => (!args.length ? Infinity :  sum(args) / args.length),
		mad = args => {
			const m = mean(args);
			return mean(args.map(num => Math.abs(num - m)));
		};
	module.exports = function() {
		let v, options;
		[v,options] = getArgs([].slice.call(arguments,0));
		if(v.length===1 && Array.isArray(v[0])) v = v[0];
		if(options && options.if) v = v.filter(options.if);
		return mad(v);
	}
}).call(this);