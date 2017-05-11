it("average",function() {
	const assert = require("assert"),
		average = require("./average.js");
	assert.equal(average(1,2,3),2);
	assert.equal(average([1,2,3]),2);
});