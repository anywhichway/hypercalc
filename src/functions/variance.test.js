it("variance",function() {
	const assert = require("assert"),
		variance = require("./variance.js");
	assert.equal(variance(0,1,2,3,4,5,6), 4);
	assert.equal(variance([0,1,2,3,4,5,6]), 4);
});