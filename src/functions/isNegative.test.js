it("isNegative",function() {
	const assert = require("assert"),
		isNegative = require("./isNegative.js");
	assert.equal(isNegative(3),false);
	assert.equal(isNegative(-3),true);
});