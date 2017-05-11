it("matrixProduct",function() {
	const assert = require("assert"),
	matrixProduct = require("./matrixProduct.js");
	assert.equal(matrixProduct([[1,2,3]],[[1],[2],[3]]),14);
	assert.equal(JSON.stringify(matrixProduct([[1],[2],[3]],[[1,2,3]])),JSON.stringify([[1,2,3],[2,4,6],[3,6,9]]));
});