(function() {
	const Unit = require("./Unit/index.js");
	module.exports = (a,b,options) => Unit.subtract(a,b,options);
}).call(this);