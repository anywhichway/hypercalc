it("count",function() {
	const assert = require("assert"),
		count = require("./count.js");
	assert.equal(count(1),1);
	assert.equal(count(1,2),2);
	assert.equal(count([1,2]),2);
});