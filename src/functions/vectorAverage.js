(function() {
	const getArgs = require("../getArgs.js");
	module.exports = function() {
		let [v,options] = getArgs([].slice.call(arguments,0));
		const counts = new Array(v[0].length);
		return v.sort((a,b) => b.length - a.length).reduce((accumulator,current) => current.map((value, i) => { 
			if(typeof(value)==="number" && (!options || !options.if || options.if(value))) {
				accumulator[i] = (accumulator[i] || 0) + value;
				counts[i] = (counts[i] || 0) + 1;
			}
			return accumulator[i];
			}),new Array(v[0].length)).map((value,i) => value /= counts[i]);
	}
}).call(this);