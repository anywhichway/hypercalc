(function() {
	function adjustUnits(unit,base,divide) {
		const mainparts = unit.baseUnits.split("/"),
			modifier = (divide ? -1 : 1),
			numerator = mainparts[0].split(" ").filter(item => item!="1" && item!==""),
			denominator = (mainparts[1] ? mainparts[1].split(" ").filter(item => item!="1" && item!=="") : []),
			baseparts = base.split("/"),
			basemap = {
				numerator: (baseparts[(divide ? 1 :0)] || "").split(" ").filter(item => item!="1" && item!=="").reduce((accumulator,current) => { 
					const parts = current.split("^"),
						unit = parts[0],
						power = (parts[1] ? parseFloat(parts[1]) : 1);
					accumulator[unit] = power;
					return accumulator;
				},{}),
				denominator: (baseparts[(divide ? 0 :1)] || "").split(" ").filter(item => item!="1" && item!="").reduce((accumulator,current) => { 
					const parts = current.split("^"),
						unit = parts[0],
						power = (parts[1] ? parseFloat(parts[1]) : 1);
					accumulator[unit] = power;
					return accumulator;
				},{})
			},
			used = {};
			for(let i=0;i<numerator.length;i++) {
				const subparts = numerator[i].split("^");
				used[subparts[0]] = true;
					subparts[1] = ((subparts[1] ? parseFloat(subparts[1]) : 1) + (basemap.numerator[subparts[0]] || 0)) - (basemap.denominator[subparts[0]] || 0);
					if(subparts[1]===0) numerator.splice(i,1);
					else if(subparts[1]===1) numerator[i] = subparts[0];
					else numerator[i] = subparts.join("^");
			}
			for(let i=0;i<denominator.length;i++) {
				const subparts = denominator[i].split("^");
				used[subparts[0]] = true;
					subparts[1] = ((subparts[1] ? parseFloat(subparts[1]) : 1) + (basemap.denominator[subparts[0]] || 0)) - (basemap.numerator[subparts[0]] || 0);
					if(subparts[1]===0) denominator.splice(i,1);
					else if(subparts[1]===1) denominator[i] = subparts[0];
					else denominator[i] = subparts.join("^");
			}
			for(let unit in basemap.denominator) {
				const power = basemap.denominator[unit];
				used[unit] || denominator.push(power>1 ? unit+"^"+power : unit);
			}
			denominator.sort(); 
			for(let unit in basemap.numerator) {
				const power = basemap.numerator[unit];
				used[unit] || numerator.push(power>1 ? unit+"^"+power : unit);
			}
			numerator.sort(); 
		unit.baseUnits  = (numerator.length > 0 ? numerator.join(" ") : (denominator.length > 0 ? 1 : "")) + (denominator.length > 0 ? " / " + denominator.join(" ") : "");
	}
	function createUnit(value,scope=Object.create(Unit.prototype)) {
		if(value && typeof(value)==="object" && value instanceof Unit) {
			for(let key of ["value","units","baseUnits"]) scope[key] = value[key];
			Object.defineProperty(scope,"constructor",{enumerable:false,configurable:true,writable:true,value:Unit});
			return scope;
		}
		scope.value = value;
		scope.units = {};
		scope.baseUnits = "";
		Object.defineProperty(scope,"constructor",{enumerable:false,configurable:true,writable:true,value:Unit});
		return scope;
	}
	function Unit(value,unit) {
		const type = typeof(value);
		if((!this || !(this instanceof Unit)) && value && type==="object" && value instanceof Unit) {
			return value;
		} else if(type==="string") {
			if((!this || !(this instanceof Unit))) {
				return new Unit(value,unit);
			}
			const u = Unit.parse(value);
			for(let key in u) {
				this[key] = u[key];
			}
		} else if(type==="number") {
			if((!this || !(this instanceof Unit))) {
				return new Unit(value,unit);
			}
			createUnit(value,this);
		} else {
			throw new TypeError(`Can't create Unit from ${JSON.stringify(value)}`);
		}
		if(unit) {
			const base = Unit.getBase(unit);
			if(base!==unit) this.value *= Unit.getConversion(base,unit);
			this.baseUnits = base;
			unit===this.baseUnits || (this.units[unit] = this.baseUnits);
		}
		Object.freeze(this);
	}
	Unit.conversions = {
		cm: {
			in: 2.54
		},
		ms: {
			sec: 1000
		}
	}
	Unit.add = function(a,b)  {
		if(typeof(a)==="number" && typeof(b)==="number") return a + b;
		a = createUnit(Unit(a)); // create a changeable Unit
		b = Unit(b);
		if(a.baseUnits===b.baseUnits || b.baseUnits==="") a.value += b.value
		else throw new TypeError("Incompatible " + a + " + " + b);
		return Object.freeze(a);
	}
	Unit.as = function(a,unit) {
		if(typeof(a)==="string") a = Unit.parse(a);
		const c = Unit.getConversion(a.baseUnits,unit);
		if(typeof(c)==="number") return a.value * c;
	}
	Unit.divide = function(a,b)  {
		if(typeof(a)==="number" && typeof(b)==="number") return a / b;
		a = createUnit(Unit(a)); // create a changeable Unit
		b = Unit(b);
		if(a.baseUnits===b.baseUnits || Unit.isSimple(b)) {
			a.value /= b.value;
			if(b.baseUnits && b.baseUnits.length>0) adjustUnits(a,b.baseUnits,true);
		} else throw new TypeError("Incompatible " + a + " / " + b);
		return Object.freeze(a);
	}
	Unit.isSimple = function(a) {
		return a instanceof Unit && a.baseUnits.indexOf(" ")===-1;
	}
	Unit.multiply = function(a,b)  {
		if(typeof(a)==="number" && typeof(b)==="number") return a * b;
		a = createUnit(Unit(a)); // create a changeable Unit
		b = Unit(b);
		if(a.baseUnits===b.baseUnits || Unit.isSimple(b)) {
			a.value *= b.value;
			if(b.baseUnits && b.baseUnits.length>0) adjustUnits(a,b.baseUnits);
		} else throw new TypeError("Incompatible " + a + " * " + b);
		return Object.freeze(a);
	}
	Unit.pow = function(a,b) {
		if(typeof(a)==="number") return Math.pow(a,b);
		a = createUnit(Unit(a)); // create a changeable Unit
		a.value = Math.pow(a.value,b)
		adjustUnits(a,a.baseUnits);	
		return Object.freeze(a);
	}
	Unit.subtract = function(a,b)  {
		if(typeof(a)==="number" && typeof(b)==="number") return a - b;
		a = createUnit(Unit(a)); // create a changeable Unit
		b = Unit(b);
		a.constructor = Unit;
		if(a.baseUnits===b.baseUnits || b.baseUnits==="") a.value -= b.value
		else throw new TypeError("Incompatible " + a + " - " + b);
		return Object.freeze(a);
	}
	Unit.to = function(a,unit) {
		const parts = unit.split(" ");
		a = createUnit(Unit(a));
		for(let part of parts) {
			if(part==="/") continue;
			const base = Unit.getBase(part);
			for(let unit in a.units) {
				if(unit!==part && a.units[unit]===base) {
					delete a.units[unit];
					if(part!==base) a.units[part] = base;
				}
			}
		}
		return Object.freeze(a);
	}
	Unit.toJSON = function(a) {
		return a.valueOf();
	}
	Unit.valueOf = function(a) {
		let units = a.baseUnits,
			value = a.value,
			parts = units.split(" ");
		for(let unit in a.units) {
			const base = a.units[unit];
			if(units.indexOf(base)>=0) { 
				for(let part of parts) {
					let multiplier = 1;
					if(part.indexOf(base)===0) {
						const subparts = part.split("^");
						if(subparts[0]===base && subparts[1]) multiplier = parseFloat(subparts[1]);
					}
					value /= Math.pow(Unit.getConversion(base,unit),multiplier);
					units = units.replace(new RegExp(base,"g"),unit);
				}
			}
		}
		return value + " " + units;
	}
	for(let key in Unit) {
		if(typeof(Unit[key])==="function") Unit.prototype[key] = function() { return Unit[key](this,...arguments); }
	}
	Unit.getBase = function(unit) {
		for(let base in Unit.conversions) {
			if(base===unit || typeof(Unit.conversions[base][unit])==="number") return base;
		}
	}
	Unit.getConversion = function(unit1,unit2) {
		if(unit1===unit2) return 1;
		let base = Unit.getBase(unit1);
		if(base && Unit.conversions[base][unit2]) return Unit.conversions[base][unit2];
		base = Unit.getBase(unit2);
		if(base && Unit.conversions[base][unit1]) return 1 / Unit.conversions[base][unit1];
	}
	Unit.max = function(a,b) {
		if(typeof(a)==="number" && typeof(b)==="number") return Math.max(a,b);
		a = createUnit(Unit(a)); // create a changeable Unit
		b = Unit(b);
		if(a.value>b.value) return a;
		return b;
	}
	Unit.min = function(a,b) {
		if(typeof(a)==="number" && typeof(b)==="number") return Math.min(a,b);
		a = createUnit(Unit(a)); // create a changeable Unit
		b = Unit(b);
		if(a.value<b.value) return a;
		return b;
	}
	Unit.parse = function(string) {
		const unit = createUnit(),
			parts = string.split(" ");
		unit.value = parseFloat(parts[0]);
		for(let i=1;i<parts.length;i++) {
			const part = parts[i];
			if(part!=="/") {
				const subparts = part.split("^");
				const base = Unit.getBase(subparts[0]);
				if(part!==base) {
					unit.units[subparts[0]] = base;
					unit.value *= Unit.conversions[base][subparts[0]];
				}
				unit.baseUnits += (unit.baseUnits.length>0 ? " " : "") + base;
			} else unit.baseUnits += " / ";
		}
		return Object.freeze(unit);
	}
	module.exports = Unit;
}).call(this)