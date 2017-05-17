it("mode",function() {
	const assert = require("assert"),
		mode = require("./mode.js");
	assert.equal(JSON.stringify(mode(0,1,2,3,3,4,5,6)),JSON.stringify([3]));
	assert.equal(JSON.stringify(mode([0,1,2,3,3,4,5,6])),JSON.stringify([3]));
});