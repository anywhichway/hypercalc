it("vectorDifference",function() {
	const assert = require("assert"),
	vectorDifference = require("./vectorDifference.js");
	assert.equal(JSON.stringify(vectorDifference([1,2],[2,1],[1,1])),JSON.stringify([-2,0]));
	assert.equal(JSON.stringify(vectorDifference([1],[2,1],[1,1])),JSON.stringify([-2,0]));
});