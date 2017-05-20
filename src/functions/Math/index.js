(function() {
	module.exports = {};
	module.exports.cbrt = require("./cbrt.js");
	module.exports.cube = require("./cube.js");
	module.exports.factorial = require("./factorial.js");
	module.exports.nthRoot = require("./nthRoot.js");
	module.exports.phi = require("./phi.js");
	module.exports.sign = require("./sign.js");
	module.exports.tau = require("./tau.js");
	module.exports.random = require("./random.js");
	module.exports.square = require("./square.js");
	module.exports.min = require("../min.js");
	module.exports.max = require("../max.js");
	for(let key of Object.getOwnPropertyNames(Math)) {
		const lowerkey = key.toLowerCase();
		if(!module.exports[lowerkey]) {
			if(typeof(Math[key])==="function") module.exports[lowerkey] = Math[key];
			else module.exports[lowerkey] = () => Math[key];
		}
	}
}).call(this);