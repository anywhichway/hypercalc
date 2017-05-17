it("sign",function() {
	const assert = require("assert"),
		sign = require("./sign.js");
	assert.equal(sign(3),1);
	assert.equal(sign(0),0);
	assert.equal(sign(-4),-1);
	assert.equal(sign("a"),undefined);
});