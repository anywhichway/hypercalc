(function() {
	module.exports = data => Array.isArray(data) && !Array.isArray(data[0]) && !Array.isArray(data[data.length-1]);
}).call(this);