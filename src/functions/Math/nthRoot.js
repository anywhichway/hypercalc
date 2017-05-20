(function() {
	const Unit = require("../Unit/index.js");
	module.exports = (value,root=2) => Unit.pow(value,1/root);
}).call(this);