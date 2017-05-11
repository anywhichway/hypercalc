(function() {
	function array_equals(a, b)
	{
	  return a.length === b.length && a.every(function(value, index) {
	    return value === b[index];
	  });
	};

	function getdim(arr)
	{
	  if (!Array.isArray(arr)) {
	    return []; // current array has no dimension
	  }
	  var dim = arr.reduce(function(result, current) {
	    // check each element of arr against the first element
	    // to make sure it has the same dimensions
	    return array_equals(result, getdim(current)) ? result : false;
	  }, getdim(arr[0]));

	  // dim is either false or an array
	  return dim && [arr.length].concat(dim);
	}
	module.exports = getdim;
}).call(this);