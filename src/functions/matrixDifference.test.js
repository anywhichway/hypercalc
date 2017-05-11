it("matrixDifference",function() {
	const assert = require("assert"),
	matrixDifference = require("./matrixDifference.js");
	assert.equal(JSON.stringify(matrixDifference([[1,2,3]],[[1,2,3]])),JSON.stringify([[0,0,0]]));
	assert.equal(JSON.stringify(matrixDifference([[1],[2],[3]],[[1],[2],[3]])),JSON.stringify([[0],[0],[0]]));
});