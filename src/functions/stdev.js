(function() {
	const getArgs = require("../getArgs.js"),
		sum = args => (!args.length ? 0 : args.reduce((accumulator,current) => accumulator + current)),
		mean = args => (!args.length ? Infinity :  sum(args) / args.length),
		variance = args => {
			const m = mean(args);
			return args.reduce((accumulator, current) => accumulator += Math.pow((current - m), 2),0) / args.length;
		},
		stdev = args => (!args.length ? 0 : Math.sqrt(variance(args)));
	module.exports = function() {
		let v, options;
		[v,options] = getArgs([].slice.call(arguments,0));
		if(v.length===1 && Array.isArray(v[0])) v = v[0];
		v = v.filter(item => typeof(item)==="number");
		if(options && options.if) v = v.filter(options.if);
		if(v.length===0) return 0;
		return stdev(v); 
	}
}).call(this);