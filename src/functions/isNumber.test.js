it("isNumber",function() {
	const assert = require("assert"),
		isNumber = require("./isNumber.js");
	assert.equal(isNumber(1),true);
	assert.equal(isNumber("a"),false);
});