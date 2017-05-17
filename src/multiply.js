(function() {
	const Unit = require("./functions/Unit/index.js"),
		multiply = (a,b) => {
			if(a.multiply) return a.multiply(b);
			if(typeof(a)==="number") return a * b;
			if(typeof(a)==="string") {
				const unit = new Unit(a);
				if(unit.valueOf()===a) return unit.multiply(b);
			}
			throw new TypeError(`Can't multiply {$a} by ${b}`);
		}
	module.exports = multiply;
}).call(this);