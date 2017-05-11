(function() {
	module.exports = (p1,p2) => Math.sqrt(p1.reduce((accumulator,current,i) => accumulator += Math.pow(p2[i]-p1[i],2),0));
}).call(this);