it("intersection",function() {
	const assert = require("assert"),
		intersection = require("./intersection.js");
	assert.equal(JSON.stringify(intersection([0,1,2,3,3,4,5,6],[3,4,6])),JSON.stringify([3,4,6]));
});