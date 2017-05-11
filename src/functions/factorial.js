(function() {
	module.exports =  v => {
		let result = 1;
		v = Math.round(v);
		while(v) result *= v--;
		return result;
	}
}).call(this);