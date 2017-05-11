it("remainder",function() {
	const assert = require("assert"),
		remainder = require("./remainder.js");
	assert.equal(JSON.stringify(remainder([1,2],[2,1],[1,1])),JSON.stringify([-2,0]));
	assert.equal(JSON.stringify(remainder([1],[2,1],[1,1])),JSON.stringify([-2,0]));
	assert.equal(JSON.stringify(remainder([[1,2,3]],[[1,2,3]])),JSON.stringify([[0,0,0]]));
	assert.equal(JSON.stringify(remainder([[1],[2],[3]],[[1],[2],[3]])),JSON.stringify([[0],[0],[0]]));
	assert.equal(remainder(1,2,3),-4);
	assert.equal(remainder([1,2,3]),-4);
});