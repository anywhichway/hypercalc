(function() {
	const transpose = require("./transpose.js"),
		dotProduct = require("./dotProduct.js");
	module.exports = (a,b) => a.map((x,i) => transpose(b).map((y,k) => dotProduct(x, y)));
}).call(this);