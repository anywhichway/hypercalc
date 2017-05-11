it("sum",function() {
	const assert = require("assert"),
		sum = require("./sum.js");
	assert.equal(JSON.stringify(sum([1,2],[2,1],[1,1])),JSON.stringify([4,4]));
	assert.equal(JSON.stringify(sum([1],[2,1],[1,1])),JSON.stringify([4,2]));
	assert.equal(JSON.stringify(sum([[1,2,3]],[[1,2,3]])),JSON.stringify([[2,4,6]]));
	assert.equal(JSON.stringify(sum([[1],[2],[3]],[[1],[2],[3]])),JSON.stringify([[2],[4],[6]]));
	assert.equal(sum(1,2,3),6);
	assert.equal(sum([1,2,3]),6);
});