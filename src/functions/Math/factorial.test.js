it("factorial",function() {
	const assert = require("assert"),
		factorial = require("./factorial.js");
	assert.equal(factorial(4),1*2*3*4);
});