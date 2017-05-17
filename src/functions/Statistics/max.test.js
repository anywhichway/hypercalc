it("max",function() {
	const assert = require("assert"),
		max = require("./max.js");
	assert.equal(max(0,1,2,3,4,5,6),6);
	assert.equal(max([0,1,2,3,4,5,6]),6);
});