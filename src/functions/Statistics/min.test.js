it("min",function() {
	const assert = require("assert"),
		min = require("./min.js");
	assert.equal(min(0,1,2,3,4,5,-6),-6);
	assert.equal(min([0,1,2,3,4,5,-6]),-6);
});