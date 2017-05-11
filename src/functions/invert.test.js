it("invert",function() {
	const assert = require("assert"),
		invert = require("./invert.js");
	assert.equal(JSON.stringify(invert([[1,3],[2,2]])),JSON.stringify([[-.5,.75],[.5,-.25]]));
});