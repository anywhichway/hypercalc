(function() {
	// change to a variable arg function
	// change to support vector and matrices
	const equal = (a,b) => a===b || (Array.isArray(a) && Array.isArray(b) && arrayEqual(a,b)),
		arrayEqual = (a,b) => a.length===b.length && a.every((item,i) => equal(item,b[i]));
	module.exports = equal;
}).call(this);