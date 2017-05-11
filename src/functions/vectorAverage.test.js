it("vectorAverage",function() {
	const assert = require("assert"),
	vectorAverage = require("./vectorAverage.js");
	assert.equal(JSON.stringify(vectorAverage([1,2,3],[2,3,1],[3,1,2])),JSON.stringify([2,2,2]));
});