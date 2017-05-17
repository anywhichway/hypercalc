(function() {
	const average = require("../average"),
		flatten = require("../flatten.js"),
		sum = require("../sum.js"),
		variance = args => {
			const m = average(args);
			return args.reduce((accumulator, current) => accumulator += Math.pow((current - m), 2),0) / args.length;
		};	
	module.exports = function() {
		const args = flatten([].slice.call(arguments),true),
			m = average(args);
		return args.reduce((accumulator, current) => accumulator += Math.pow((current - m), 2),0) / args.length;
	}
}).call(this);