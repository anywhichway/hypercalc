(function() {
	const concatMapReduce = require("../concatMapReduce.js");
	// flatten :: [[a]] -> [a]
	const shallowFlattenReduce = (array,reduce) => concatMapReduce (id,reduce)(array)
	
	// deepFlatten :: [[[a]]] -> [a]
	const deepFlattenReduce = (array,reduce) => concatMapReduce (data => Array.isArray(data) ? deepFlattenReduce(data) : data,reduce)(array)
	
	module.exports = (array,reduce,deep) => (deep ? deepFlattenReduce : shallowFlattenReduce)(array,reduce);
}).call(this);