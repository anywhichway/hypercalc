(function() {
	const Unit = require("./Unit/index.js");
	module.exports = (a,b,options) => Unit.add(a,b,options);
}).call(this);