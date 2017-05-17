(function() {
	const Unit = require("./functions/Unit/index.js"),
		add = (a,b) => {
			if(a.add) return a.add(b);
			if(typeof(a)==="number") return a + b;
			if(typeof(a)==="string") {
				const unit = new Unit(a);
				if(unit.valueOf()===a) return unit.add(b);
			}
			throw new TypeError(`Can't add {$b} to ${a}`);
		}
	module.exports = add;
}).call(this);