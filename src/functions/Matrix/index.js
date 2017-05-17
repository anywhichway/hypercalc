(function() {
	const Vector = require("../Vector/index.js");
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
	function Matrix() {
		
	}
	Matrix.sum = function() {
		return [].slice.call(arguments).reduce((accumulator,current) => {
			for(let i=0;i<accumulator.length;i++) accumulator[i] = Vector.sum(accumulator[i],Array.isArray(current) ? current[i] : current);
			return accumulator;
		});
	}
	Matrix.dimensions = getdim;
	Matrix.invert = function(m) {
		function inverse(_A) {
		    var temp,
		    N = _A.length,
		    E = [];
		   
		    for (var i = 0; i < N; i++)
		      E[i] = [];
		   
		    for (i = 0; i < N; i++)
		      for (var j = 0; j < N; j++) {
		        E[i][j] = 0;
		        if (i == j)
		          E[i][j] = 1;
		      }
		   
		    for (var k = 0; k < N; k++) {
		      temp = _A[k][k];
		   
		      for (var j = 0; j < N; j++)
		      {
		        _A[k][j] /= temp;
		        E[k][j] /= temp;
		      }
		   
		      for (var i = k + 1; i < N; i++)
		      {
		        temp = _A[i][k];
		   
		        for (var j = 0; j < N; j++)
		        {
		          _A[i][j] -= _A[k][j] * temp;
		          E[i][j] -= E[k][j] * temp;
		        }
		      }
		    }
		   
		    for (var k = N - 1; k > 0; k--)
		    {
		      for (var i = k - 1; i >= 0; i--)
		      {
		        temp = _A[i][k];
		   
		        for (var j = 0; j < N; j++)
		        {
		          _A[i][j] -= _A[k][j] * temp;
		          E[i][j] -= E[k][j] * temp;
		        }
		      }
		    }
		   
		    for (var i = 0; i < N; i++)
		      for (var j = 0; j < N; j++)
		        _A[i][j] = E[i][j];
		    return _A;
		  }
		return inverse(a);
	}
	Matrix.power = Matrix.pow = function(m,pow) {
		while(pow-->1) {
			m = Matrix.product(m,m.slice(0));
		}
		return m;
	}
	Matrix.product = function(a,b) {
		return a.map((x,i) => Matrix.transpose(b.slice(0)).map((y) => Vector.dotProduct(x.slice(0), y.slice(0))));
	}
	Matrix.difference = function() {
		return [].slice.call(arguments).reduce((accumulator,current) => {
			for(let i=0;i<accumulator.length;i++) accumulator[i] = Vector.difference(accumulator[i],Array.isArray(current) ? current[i] : current);
			return accumulator;
		});
	}
	Matrix.transpose = function(m) {
		return m[0].map((x,i) => m.map((y,k) => y[i]));
	}
	module.exports = Matrix;
}).call(this);