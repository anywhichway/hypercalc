it("isVector",function() {
	const assert = require("assert"),
		isVector = require("./isVector.js");
	assert.equal(isVector([1,2]),true);
	assert.equal(isVector(1),false);
	assert.equal(isVector([[1],2]),false);
	assert.equal(isVector([1,[2]]),false);
});