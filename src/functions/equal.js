(function() {
	const Unit = require("./Unit/index.js"),
		arrayEqual = (a,b) => a.length===b.length && a.every((item,i) => equal(item,b[i])),
		equal = (a,b) => a===b || (Array.isArray(a) ? Array.isArray(b) && arrayEqual(a,b) : Unit.equal(a,b));
	module.exports = equal;
}).call(this);