(function() {
	module.exports = {};
	const mathdesc = Object.getOwnPropertyDescriptors(Math);
	for(let key in mathdesc) {
		if(typeof(Math[key])==="function") module.exports[key] = function() { return Math[key](...arguments); }
		else {
			module.exports[key.toLowerCase()] = () => Math[key];
			module.exports[key] = Math[key];
		}
	}
	module.exports.cbrt = require("./cbrt.js");
	module.exports.cube = require("./cube.js");
	module.exports.factorial = require("./factorial.js");
	module.exports.nthRoot = require("./nthRoot.js");
	module.exports.phi = require("./phi.js");
	module.exports.power = require("./power.js");
	module.exports.sign = require("./sign.js");
	module.exports.tau = require("./tau.js");
	module.exports.random = require("./random.js");
	module.exports.square = require("./square.js");
}).call(this);