it("product",function() {
	const assert = require("assert"),
		product = require("../product.js");
	assert.equal(product([1],[2,1],[1,2]),4);
	assert.equal(product([1,2],2),4);
	assert.equal(product([[1,2,3]],[[1],[2],[3]]),36);
	assert.equal(product([[1],[2],[3]],[[1,2,3]]),36);
});