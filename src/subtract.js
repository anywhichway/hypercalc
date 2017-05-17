(function() {
	const Unit = require("./functions/Unit/index.js"),
		subtract = (a,b) => {
			if(a.subtract) return a.subtract(b);
			if(typeof(a)==="number") return a - b;
			if(typeof(a)==="string") {
				const unit = new Unit(a);
				if(unit.valueOf()===a) return unit.subtract(b);
			}
			throw new TypeError(`Can't subtract {$b} from ${a}`);
		}
	module.exports = subtract;
}).call(this);