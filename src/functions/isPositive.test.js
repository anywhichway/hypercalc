it("isPositive",function() {
	const assert = require("assert"),
		isPositive = require("./isPositive.js");
	assert.equal(isPositive(3),true);
	assert.equal(isPositive(-3),false);
});