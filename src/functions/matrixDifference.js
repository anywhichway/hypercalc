(function() {
	const difference = (a,b) => a.map((x,i) => a[i] - b[i]);
	module.exports = function() {
		return [].slice.call(arguments,0).reduce((accumulator,current) => accumulator.map((x,i) => difference(x,current[i])));
	}
}).call(this);