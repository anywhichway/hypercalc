it("stdev",function() {
	const assert = require("assert"),
		stdev = require("./stdev.js");
	assert.equal(stdev(0,1,2,3,4,5,6), 2);
	assert.equal(stdev([0,1,2,3,4,5,6]), 2);
});