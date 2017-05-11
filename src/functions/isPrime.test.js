it("isPrime",function() {
	const assert = require("assert"),
		isPrime = require("./isPrime.js");
	assert.equal(isPrime(3),true);
	assert.equal(isPrime(4),false);
});