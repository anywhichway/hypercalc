it("vectorProduct",function() {
	const assert = require("assert"),
	vectorProduct = require("./vectorProduct.js");
	assert.equal(JSON.stringify(vectorProduct([1,2],[2,1],[2,2])),JSON.stringify([4,4]));
	assert.equal(JSON.stringify(vectorProduct([1],[2,1],[1,2])),JSON.stringify([2,2]));
	assert.equal(JSON.stringify(vectorProduct([1,2],2)),JSON.stringify([2,4]));
});