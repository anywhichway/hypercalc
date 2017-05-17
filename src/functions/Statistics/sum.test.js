it("sum",function() {
	const assert = require("assert"),
		sum = require("../sum.js");
	assert.equal(sum([1,2],[2,1],[1,1]),8);
	assert.equal(sum([1],[2,1],[1,1]),6);
	assert.equal(sum([[1,2,3]],[[1,2,3]]),12);
	assert.equal(sum([[1],[2],[3]],[[1],[2],[3]]),12);
	assert.equal(sum(1,2,3),6);
	assert.equal(sum([1,2,3]),6);
});