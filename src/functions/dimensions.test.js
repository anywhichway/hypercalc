it("dimensions",function() {
	const assert = require("assert"),
		dimensions = require("./dimensions.js");
	assert.equal(dimensions([1,2,3]),3);
	assert.equal(JSON.stringify(dimensions([[1,2,3]])),JSON.stringify([1,3]));
});