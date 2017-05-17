it("phi",function() {
	const assert = require("assert"),
		phi = require("./phi.js");
	assert.equal(phi(),(1 + Math.sqrt(5)) / 2);
});