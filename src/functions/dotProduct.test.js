it("dotProduct",function() {
	const assert = require("assert"),
		dotProduct = require("./dotProduct.js");
	assert.equal(dotProduct([1,2,3],[3,2,1]),10);
});