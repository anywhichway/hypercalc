(function() {
	module.exports = function(v) {
		const type = typeof(v);
		return (v===null || v===undefined ? "undefined" : (Array.isArray(v) ? "Array" : (type==="object" ? v.constructor.name : type)));
	}
}).call(this);