it("isFunction",function() {
	const assert = require("assert"),
		isFunction = require("./isFunction.js");
	assert.equal(isFunction(isFunction),true);
	assert.equal(isFunction(1),false);
});