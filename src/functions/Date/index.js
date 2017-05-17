(function() {
	module.exports = function() { return (this ? new Date(...arguments) : Date(...arguments)) }
	module.exports.now = () => Date.now();
	module.exports.parse = (string) => Date.parse(string);
	module.exports.UTC = () => Date.UTC(...arguments);
	for(let key in Date.prototype) {
		if(typeof(Date.prototype[key])==="function") {
			module.exports[key] = function() { return Date.prototype[key].call(...arguments); }
		}
	}
}).call(this);