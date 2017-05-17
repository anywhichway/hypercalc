(function() {
	const getArgs = require("../../getArgs.js");
	function median(args) {
		if (!args.length) return 0;
		const numbers = args.sort((a,b) => a - b),
			middle = Math.floor(numbers.length / 2),
			isEven = numbers.length % 2 === 0;
		return isEven ? (numbers[middle] + numbers[middle - 1]) / 2 : numbers[middle];
	}
	module.exports = function() {
		let v, options;
		[v,options] = getArgs([].slice.call(arguments,0));
		if(v.length===1 && Array.isArray(v[0])) v = v[0];
		if(options && options.if) v = v.filter(options.if);
		return median(v);
	}
}).call(this);