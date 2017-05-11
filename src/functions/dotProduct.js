(function() {
	module.exports = (a,b,options) => a.map((x,i) => a[i] * b[i]).reduce((m,n) => m + n);
}).call(this);