(function() {
	function getArgs(args) {
		getArgs.VARGS = [];
		const last = args[args.length-1],
			options = (last && typeof(last)==="object" && !Array.isArray(last) ? last : null);
		!options || (args = args.slice(0,args.length-1));
		const result = [];
		for(let i=0;i<args.length;i++) {
			if(args[i]===getArgs.VARGS) {
				const varg = getArgs.VARGS.shift();
				if(Array.isArray(varg)) {
					for(let arg of varg) result.push(arg)
				} else {
					results.push(varg);
				}
			}
			else result.push(args[i]);
		}
		return [result,options];
	}
	module.exports = getArgs;
}).call(this);