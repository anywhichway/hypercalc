(function() {
	const Unit = require("./functions/Unit/index.js"),
		divide = (a,b) => {
			if(a.divide) return a.divide(b);
			if(typeof(a)==="number") return a / b;
			if(typeof(a)==="string") {
				const unit = new Unit(a);
				if(unit.valueOf()===a) return unit.divide(b);
			}
			throw new TypeError(`Can't divide {$a} by ${b}`);
		}
	module.exports = divide;
}).call(this);