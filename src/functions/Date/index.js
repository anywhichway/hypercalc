(function() {
	const D = function() { return new Date(...arguments); };
	D.now = Date.now;
	D.parse = Date.parse;
	D.UTC = Date.UTC;
	module.exports = new Proxy(D,{
		construct: (target,argumentsList) => new Date(...argumentsList),
		get: (target,property) => {
			if(["now","parse","UTC"].includes(property)) return target[property];
			return new Proxy(function(){},{
				apply: (target,thisArg,argumentsList) => {
					let date = argumentsList[0];
					if(typeof(date)==="string") date = new Date(date);
					if(property==="dayOfMonth") property = "Date";
					if(property.indexOf("to")!==0) property = "get" + property[0].toUpperCase() + property.substring(1);
					return date[property](...argumentsList.slice(1));
				}
			});
		}
	});
}).call(this);