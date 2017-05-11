it("product",function() {
	const assert = require("assert"),
		product = require("./product.js");
	//assert.equal(JSON.stringify(product([1,2],[2,1],[2,2])),JSON.stringify([4,4]));
	assert.equal(JSON.stringify(product([1],[2,1],[1,2])),JSON.stringify([2,2]));
	assert.equal(JSON.stringify(product([1,2],2)),JSON.stringify([2,4]));
	assert.equal(product([[1,2,3]],[[1],[2],[3]]),14);
	assert.equal(JSON.stringify(product([[1],[2],[3]],[[1,2,3]])),JSON.stringify([[1,2,3],[2,4,6],[3,6,9]]));
});