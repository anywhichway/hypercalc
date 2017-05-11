(function() {
	const getArgs = require("../getArgs.js"),
		isNumber = require("./isNumber.js"),
		isVector = require("./isVector.js");
	module.exports = function() {
		const [v,options] = getArgs([].slice.call(arguments,0));
		return v.reduce((accumulator,current) => { 
			if(isVector(current)) {
				current.map((value, i) => {
					if(i>=accumulator.length) accumulator[i] = value;
					else if(typeof(value)==="number" && (!options || !options.if || options.if(value))) accumulator[i] /= value;
					return accumulator[i];
					})
			} else if(isNumber(current)){
				for(let i=0;i<accumulator.length;i++) accumulator[i] /= current;
			}
			return accumulator;
		});
	}
}).call(this);