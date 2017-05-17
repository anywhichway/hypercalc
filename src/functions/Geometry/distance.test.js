it("distance",function() {
	const assert = require("assert"),
		distance = require("./distance.js");
	assert.equal(distance([1,2],[1,4]),Math.sqrt(Math.pow(1-1,2)+Math.pow(4-2,2)));
	assert.equal(distance([1,2,3],[1,4,2]),Math.sqrt(Math.pow(1-1,2)+Math.pow(4-2,2)+Math.pow(2-3,2)));
});