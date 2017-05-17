(function() {
	const getArgs = require("../../getArgs.js");
	function mode(args) {
		if (!args.length) return [];
		const modeMap = {};
		let modes = [],
			maxCount = 0;
		for(let val of args) {
			const v = val.valueOf();
			if (!modeMap[v]) modeMap[v] = 1;
			else modeMap[v]++;

			if (modeMap[v] > maxCount) {
				modes = [val];
				maxCount = modeMap[v];
			}
			else if (modeMap[v] === maxCount) {
				modes.push(val);
				maxCount = modeMap[v];
			}
		}
		return modes;
	}
	module.exports = function() {
		let v, options;
		[v,options] = getArgs([].slice.call(arguments,0));
		if(v.length===1 && Array.isArray(v[0])) v = v[0];
		if(options && options.if) v = v.filter(options.if);
		return mode(v);
	}
}).call(this);