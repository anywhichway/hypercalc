(function() {
	const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
	module.exports = function(min,max) {
		let result;
		if(arguments.length>=2) result = getRandomInt(min,max);
		else result = Math.random();
		return result;
	}
}).call(this);