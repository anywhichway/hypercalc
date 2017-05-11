it("matrixSum",function() {
	const assert = require("assert"),
	matrixSum = require("./matrixSum.js");
	assert.equal(JSON.stringify(matrixSum([[1,2,3]],[[1,2,3]])),JSON.stringify([[2,4,6]]));
	assert.equal(JSON.stringify(matrixSum([[1],[2],[3]],[[1],[2],[3]])),JSON.stringify([[2],[4],[6]]));
});