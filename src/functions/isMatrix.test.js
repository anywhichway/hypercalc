it("isMatrix",function() {
	const assert = require("assert"),
		isMatrix = require("./isMatrix.js");
	assert.equal(isMatrix([[1],[2]]),true);
	assert.equal(isMatrix([1,2]),false);
	assert.equal(isMatrix(1),false);
	assert.equal(isMatrix([[1],2]),false);
	assert.equal(isMatrix([1,[2]]),false);
});