it("type",function() {
	const assert = require("assert"),
		type = require("./type.js");
	assert.equal(type(3),"number");
	assert.equal(type([]),"Array");
	assert.equal(type({}),"Object");
});