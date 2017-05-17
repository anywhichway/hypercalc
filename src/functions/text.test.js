it("text",function() {
	const assert = require("assert"),
		text = require("./text.js");
	assert.equal(text(1),"1");
	assert.equal(text(1,{template:"One: ${value}"}),"One: 1");
});