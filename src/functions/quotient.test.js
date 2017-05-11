it("quotient",function() {
	const assert = require("assert"),
		quotient = require("./quotient.js");
	assert.equal(JSON.stringify(quotient([2,8],[2,4],[2,2])),JSON.stringify([.5,1]));
	assert.equal(JSON.stringify(quotient([2],[2,4],[2,2])),JSON.stringify([.5,2]));
	assert.equal(JSON.stringify(quotient([1,2],2)),JSON.stringify([.5,1]));
	assert.equal(JSON.stringify(quotient(1,2)),JSON.stringify(.5));
	//assert.equal(quotient([[1,2,3]],[[1],[2],[3]]),14);
	//assert.equal(JSON.stringify(quotient([[1],[2],[3]],[[1,2,3]])),JSON.stringify([[1,2,3],[2,4,6],[3,6,9]]));
});