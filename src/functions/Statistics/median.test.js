it("median",function() {
	const assert = require("assert"),
		median = require("./median.js");
	assert.equal(median(0,1,2,3,3,4,5,6),3);
	assert.equal(median([0,1,2,3,3,4,5,6]),3);
});