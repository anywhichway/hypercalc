(function() {
	const getArgs = require("../getArgs.js");
	function mode(args) {
		if (!args.length) return [];
		const modeMap = {};
		let modes = [],
			maxCount = 0;
		for(let val of args) {
			if (!modeMap[val]) modeMap[val] = 1;
			else modeMap[val]++;

			if (modeMap[val] > maxCount) {
				modes = [val];
				maxCount = modeMap[val];
			}
			else if (modeMap[val] === maxCount) {
				modes.push(val);
				maxCount = modeMap[val];
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