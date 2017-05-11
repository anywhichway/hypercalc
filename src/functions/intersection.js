(function() {
	const getArgs = require("../getArgs.js");
	function intersection() {
		const args = [].slice.call(arguments).sort((a,b) => a.length - b.length),
	    	intersection = new Set(args[0]);
	    for(let elem of intersection) {
	    	for(let i=1;i<args.length;i++) {
		    	if(!args[i].includes(elem)) {
		    		intersection.delete(elem);
		    		break;
		    	}
		    }
	    }
	    return [...intersection];
	}
	module.exports = function() {
		let v, options;
		[v,options] = getArgs([].slice.call(arguments,0));
		if(v.length===0) return [];
		const result = intersection(...v);
		if(options && options.if) return result.filter(options.if);
		return result;
	}
}).call(this);