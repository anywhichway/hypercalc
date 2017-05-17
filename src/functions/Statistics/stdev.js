(function() {
	const average = require("../average"),
		flatten = require("../flatten.js"),
		variance = require("./variance.js");
	module.exports = function() {
		const args = flatten([].slice.call(arguments),true),
			m = average(args);
		return !args.length ? 0 : Math.sqrt(variance(args));
	}
}).call(this);