it("vectorQuotient",function() {
	const assert = require("assert"),
	vectorQuotient = require("./vectorQuotient.js");
	assert.equal(JSON.stringify(vectorQuotient([2,8],[2,4],[2,2])),JSON.stringify([.5,1]));
	assert.equal(JSON.stringify(vectorQuotient([2],[2,4],[2,2])),JSON.stringify([.5,2]));
	assert.equal(JSON.stringify(vectorQuotient([1,2],2)),JSON.stringify([.5,1]));
});