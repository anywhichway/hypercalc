it("transpose",function() {
	const assert = require("assert"),
		transpose = require("./transpose.js");
	assert.equal(JSON.stringify(transpose([[1,2,3]])),JSON.stringify([[1],[2],[3]]));
	assert.equal(JSON.stringify(transpose([[1],[2],[3]])),JSON.stringify([[1,2,3]]));
});