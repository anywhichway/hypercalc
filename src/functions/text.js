(function() {
	module.exports = (value,options={}) => { 
		return new Function("value","return `"+(options.template ? options.template : "${value}")+"`")(value); 
	}
}).call(this);