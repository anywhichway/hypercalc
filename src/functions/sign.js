(function() {
	const isNumber = require("./isNumber.js");
	module.exports = value => (isNumber(value) ? (value > 0 ? 1 : (value ===0 ? 0 : -1)) : undefined);
}).call(this);