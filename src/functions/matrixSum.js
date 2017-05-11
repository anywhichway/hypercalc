(function() {
	const sum = (a,b) => a.map((x,i) => a[i] + b[i]);
	module.exports = function() {
		return [].slice.call(arguments,0).reduce((accumulator,current) => accumulator.map((x,i) => sum(x,current[i])));
	}
}).call(this);