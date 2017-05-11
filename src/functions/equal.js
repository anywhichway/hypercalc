(function() {
	// change to a variable arg function
	const equal = (a,b,options) => {
			if(a===b) return true;
			if(Array.isArray(a) && Array.isArray(b)) return arrayEqual(a,b,options);
		},
		arrayEqual = (a,b,options) => {
			return a.length===b.length && a.every((item,i) => equal(item,b[i],options));
		};
	module.exports = equal;
}).call(this);