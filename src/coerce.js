(function() {
	module.exports = (value,options,dflt) => {
		if(options) {
			const type = typeof(value);
			if(options.replace) {
				if(options.replace[type] && typeof(options.replace[type])==="object" && typeof(options.replace[type][value])!=="undefined") value = options.replace[type][value];
				else if(typeof(options.replace[type])!=="undefined") value = options.replace[type];
			} else if(typeof(options.NA)!=="undefined" && type==="undefined") value = options.NA;
			else if(typeof(options.NaN)!=="undefined" && (type!=="number" || isNaN(value))) value = options.NaN;
			
			if(arguments.length===3 && options.if && !options.if(value)) value = dflt;
		}
		return value;
	}
}).call(this);