it("madev",function() {
	const assert = require("assert"),
		madev = require("./madev.js");
	assert.equal(madev(0,1,2,3,4,5,6), 1.7142857142857142);
});