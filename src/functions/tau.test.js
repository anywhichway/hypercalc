it("tau",function() {
	const assert = require("assert"),
		tau = require("./tau.js");
	assert.equal(tau(),2 * Math.PI);
});