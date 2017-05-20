(function() {
	module.exports = function() { return (this ? new String(...arguments) : String(...arguments)); }
	const stringdesc = Object.getOwnPropertyDescriptors(String.prototype);
	for(let key in stringdesc) {
		if(typeof(String.prototype[key])==="function") {
			module.exports[key] = function() { return String.prototype[key].call(...arguments); }
		}
	}
	module.exports.reverse = string => string.split("").reverse().join("");
}).call(this);