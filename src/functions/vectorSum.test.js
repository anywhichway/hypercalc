it("vectorSum",function() {
	const assert = require("assert"),
	vectorSum = require("./vectorSum.js");
	assert.equal(JSON.stringify(vectorSum([1,2],[2,1],[1,1])),JSON.stringify([4,4]));
	assert.equal(JSON.stringify(vectorSum([1],[2,1],[1,1])),JSON.stringify([4,2]));
});