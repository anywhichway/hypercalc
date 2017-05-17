it("random",function() {
	const assert = require("assert"),
		random = require("./random.js");
	const value = random(1,2);
	assert(value>=1 && value<=2);
});