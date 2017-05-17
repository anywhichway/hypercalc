(function() {
	const concatMapReduce = require("../concatMapReduce.js");
	// id :: a -> a
	const id = x => x;
	//flatten :: [[a]] -> [a]
	const flatten = concatMapReduce (id)

	// deepFlatten :: [[[a]]] -> [a]
	const deepFlatten = concatMapReduce (data => Array.isArray(data) ? deepFlatten(data) : data)
	
	module.exports = (array,deep) => (deep ? deepFlatten : flatten)(array);
}).call(this);