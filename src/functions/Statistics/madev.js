(function() {
	const average = require("../average"),
		flatten = require("../flatten.js"),
		sum = require("../sum.js");
	module.exports = function() {
		const args = flatten([].slice.call(arguments),true),
			m = average(args);
		return average(args.map(num => Math.abs(num - m)));
	}
}).call(this);