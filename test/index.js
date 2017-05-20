if(typeof(module)==="object") {
	Hypercalc = require("../src/index.js");
	assert = require("assert");
}

const hc = new Hypercalc();

const arrayFunctions = {
		"countSimple": {name:"count", arguments: [1,2,3,4,5,6], expect: 6},
		"countComplex": {name:"count", arguments: [[1,[2,3],4],5,6], expect: 6},
		"dimensions": {name:"dimensions", arguments: [[[1,2,3],[1,2,3]]], expect: [2,3]},
		"flattenArray": {name:"flatten", arguments: [[1,[2,3],4]], expect: [1,2,3,4]},
		"flattenArrayShallow": {name:"flatten", arguments: [[1,[[2],3],4]], expect: [1,[2],3,4]},
		"flattenArrayDeep": {name:"flatten", arguments: [[1,[2,3],4],1,true], expect: [1,2,3,4]},
		"join": {name:"join", arguments: [[1,[2,3],4],1,","], expect: "1,2,3,4,1"}
}
describe("<tr><th colspan='3' align='left'>Array Functions (work on Vectors and Matrices)</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>", function() {
	for(let name in arrayFunctions) {
		const arguments = (arrayFunctions[name].arguments ? arrayFunctions[name].arguments : []),
			result = arrayFunctions[name].expect;
		!arrayFunctions[name].name || (name = arrayFunctions[name].name);
		let formula = "="+name+"(";
			for(let i=0;i<arguments.length;i++) {
				formula += JSON.stringify(arguments[i]);
				if(i<arguments.length-1) formula += ",";
			}
			formula += ")";
		const title = "<tr><td>" + name + "</td><td>" + formula + "</td><td>" + JSON.stringify(result) + "</td></tr>";
		it(title,function(done) {
			hc.Cell(name,formula,{oncalculated:(cell) => { done(assert.equal(JSON.stringify(cell.value),JSON.stringify(result))); }});
		})
	}
});

const arithmeticFunctions = {
		"add": {name:"add", arguments: [2,1], expect: 3},
		"adda": {name:"adda", arguments: [2,1], expect: 3},
		"addaTrue": {name:"adda", arguments: [2,true], expect: 3},
		"addaFalse": {name:"adda", arguments: [2,false], expect: 2},
		"addUnit": {name:"add", arguments: [new hc.functions.Unit(2,"in"),new hc.functions.Unit("2 in")], expect: new hc.functions.Unit(4,"in")},
		"divide": {name:"divide", arguments: [2,1], expect: 2},
		"dividea": {name:"dividea", arguments: [2,1], expect: 2},
		"divideaTrue": {name:"dividea", arguments: [2,true], expect: 2},
		"divideaFalse": {name:"dividea", arguments: [2,false], expect: Infinity},
		"divideUnit": {name:"divide", arguments: [new hc.functions.Unit(2,"in"),new hc.functions.Unit("2 in")], expect: 1},
		"multiply": {name:"multiply", arguments: [2,1], expect: 2},
		"multiplya": {name:"multiplya", arguments: [2,1], expect: 2},
		"multiplyaTrue": {name:"multiplya", arguments: [2,true], expect: 2},
		"multiplyaFalse": {name:"multiplya", arguments: [2,false], expect: 0},
		"multiplyUnit": {name:"multiply", arguments: [new hc.functions.Unit(2,"in"),new hc.functions.Unit("2 in")], expect: "4 in^2"},
		"product": {name:"product", arguments: [3,2,1], expect: 6},
		"producta": {name:"producta", arguments: [3,2,1], expect: 6},
		"productaTrue": {name:"producta", arguments: [3,2,true], expect: 6},
		"productaFalse": {name:"producta", arguments: [3,2,false], expect: 0},
		"productUnit": {name:"product", arguments: [new hc.functions.Unit(2,"in"),new hc.functions.Unit("2 in"),new hc.functions.Unit("2 in")], expect: "8 in^3"},
		"subtract": {name:"subtract", arguments: [2,1], expect: 1},
		"subtracta": {name:"subtracta", arguments: [2,1], expect: 1},
		"subtractaTrue": {name:"subtracta", arguments: [2,true], expect: 1},
		"subtractaFalse": {name:"subtracta", arguments: [2,false], expect: 2},
		"subtractUnit": {name:"subtract", arguments: [new hc.functions.Unit(2,"in"),new hc.functions.Unit("2 in")], expect: new hc.functions.Unit(0,"in")},
		"sum": {name:"sum", arguments: [3,2,1], expect: 6},
		"suma": {name:"suma", arguments: [3,2,1], expect: 6},
		"sumaTrue": {name:"suma", arguments: [3,2,true], expect: 6},
		"sumaFalse": {name:"suma", arguments: [3,2,false], expect: 5},
		"sumUnit": {name:"sum", arguments: [new hc.functions.Unit(2,"in"),new hc.functions.Unit("2 in"),new hc.functions.Unit("2 in")], expect: "6 in"},
}
describe("<tr><th colspan='3' align='left'>Arithmetic Functions</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>", function() {
	for(let name in arithmeticFunctions) {
		const arguments = (arithmeticFunctions[name].arguments ? arithmeticFunctions[name].arguments : []),
			result = arithmeticFunctions[name].expect;
		!arithmeticFunctions[name].name || (name = arithmeticFunctions[name].name);
		let formula = "="+name+"(";
			for(let i=0;i<arguments.length;i++) {
				formula += JSON.stringify(arguments[i]);
				if(i<arguments.length-1) formula += ",";
			}
			formula += ")";
		const title = "<tr><td>" + name + "</td><td>" + formula + "</td><td>" + result + "</td></tr>";
		it(title,function(done) {
			hc.Cell(name,formula,{oncalculated:(cell) => { done(assert.equal(cell.value.valueOf(),result.valueOf())); }});
		})
	}
});


const date = new Date(),
	now = date.getTime(),
	utc = Date.UTC(date.getUTCFullYear(),date.getUTCMonth(),date.getUTCDay(),date.getUTCHours(),date.getUTCMinutes(),date.getUTCSeconds(),date.getUTCMilliseconds());
	dateFunctions = {
		"dayOfMonth": {arguments:[date], expect:date.getDate()},
		"day": {arguments:[date], expect:date.getDay()},
		"fullYear": {arguments:[date], expect:date.getFullYear()},
		"hours": {arguments:[date], expect:date.getHours()},
		"milliseconds": {arguments:[date], expect:date.getMilliseconds()},
		"minutes": {arguments:[date], expect:date.getMinutes()},
		"month": {arguments:[date], expect:date.getMonth()},
		"seconds": {arguments:[date], expect:date.getSeconds()},
		"Time": {arguments:[date], expect:date.getTime()},
		"timezoneOffset": {arguments:[date], expect:date.getTimezoneOffset()},
		"year": {arguments:[date], expect:date.getYear()},
		"UTCDate": {arguments:[date], expect:date.getUTCDate()},
		"UTCDay": {arguments:[date], expect:date.getUTCDay()},
		"UTCFullYear": {arguments:[date], expect:date.getUTCFullYear()},
		"UTCHours": {arguments:[date], expect:date.getUTCHours()},
		"UTCMilliseconds": {arguments:[date], expect:date.getUTCMilliseconds()},
		"UTCMinutes": {arguments:[date], expect:date.getUTCMinutes()},
		"UTCMonth": {arguments:[date], expect:date.getUTCMonth()},
		"UTCSeconds": {arguments:[date], expect:date.getUTCSeconds()},
		"now": "special handling",
		"toDateString": {arguments:[date], expect:date.toDateString()},
		"toISOString": {arguments:[date], expect:date.toISOString()},
		"toLocaleString": {arguments:[date,{hour12:false}], expect:date.toLocaleString({hour12:false})},
		"toLocaleDateString": {arguments:[date], expect:date.toLocaleDateString()},
		"toTimeString": {arguments:[date], expect:date.toTimeString()},
		"toUTCString": {arguments:[date], expect:date.toUTCString()},
		"UTC": {arguments: [date.getUTCFullYear(),date.getUTCMonth(),date.getUTCDay(),date.getUTCHours(),date.getUTCMinutes(),date.getUTCSeconds(),date.getUTCMilliseconds()], expect: utc}
	}
describe("<tr><th colspan='3' align='left'>Date Functions</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>", function() {
	for(let name in dateFunctions) {
		if(name==="now") {
			const formula = "=now()",
				title = "<tr><td>" + "now" + "</td><td>" + formula + "</td><td>" + Date.now() + "</td></tr>";
			it(title,function(done) {
				hc.Cell("now",formula,{oncalculated:(cell) => { done(assert.equal(cell.value.valueOf(),Date.now())); }});
			})
		} else {
			const arguments = (dateFunctions[name].arguments ? dateFunctions[name].arguments : [3.5]),
				result = (typeof(dateFunctions[name].expect)==="function" ? dateFunctions[name].expect() : dateFunctions[name].expect);
			!dateFunctions[name].name || (name = dateFunctions[name].name);
			let formula = "=Date."+name+"(";
				for(let i=0;i<arguments.length;i++) {
					formula += (typeof(arguments[i])==="function" ? arguments[i]() : JSON.stringify(arguments[i]));
					if(i<arguments.length-1) formula += ",";
				}
				formula += ")";
			const title = "<tr><td>" + name + "</td><td>" + formula + "</td><td>" + result + "</td></tr>";
			it(title,function(done) {
				hc.Cell(name,formula,{oncalculated:(cell) => { done(assert.equal(cell.value,result));}});
			})
		}
	}
});

const mathFunctions = {
		"Math.abs": {arguments: [-3.5], expect: 3.5},
		"Math.ceil": Math.ceil(3.5),
		"Math.cbrt": {arguments: [27], expect: 3},
		"Math.cube": 3.5 * 3.5 * 3.5,
		"Math.exp": Math.exp(3.5),
		"Math.floor": Math.floor(3.5),
		"Math.nthRoot": {arguments: [3.5,2], expect:Math.pow(3.5,1/2)},
		"Math.round": Math.round(3.5),
		"Math.sqrt": Math.sqrt(3.5),
		"Math.square": 3.5 * 3.5,
}
describe("<tr><th colspan='3' align='left'>Math Functions</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>", function() {
	for(let name in mathFunctions) {
		const arguments = (mathFunctions[name].arguments ? mathFunctions[name].arguments : [3.5]);
		let formula = "="+name+"(";
			for(let i=0;i<arguments.length;i++) {
				formula += JSON.stringify(arguments[i]);
				if(i<arguments.length-1) formula += ",";
			}
			formula += ")";
		const result = (typeof(mathFunctions[name])==="object" ? mathFunctions[name].expect : mathFunctions[name]),
			title = "<tr><td>" + name + "</td><td>" + formula + "</td><td>" + result + "</td></tr>";
		it(title,function(done) {
			hc.Cell(name,formula,{oncalculated:(cell) => { done(assert.equal(cell.value,result)); }});
		})
	}
});


const geometryFunctions = {
		distance2d: {name:"Geometry.distance", arguments: [[1,2],[1,4]], expect: Math.sqrt(Math.pow(1-1,2)+Math.pow(4-2,2))},
		distance3d: {name:"Geometry.distance", arguments: [[1,2,3],[1,4,2]], expect: Math.sqrt(Math.pow(1-1,2)+Math.pow(4-2,2)+Math.pow(2-3,2))}
}
describe("<tr><th colspan='3' align='left'>Geometry Functions</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>", function() {
	for(let name in geometryFunctions) {
		let formula = "="+geometryFunctions[name].name+"(";
			for(let i=0;i<geometryFunctions[name].arguments.length;i++) {
				formula += JSON.stringify(geometryFunctions[name].arguments[i]);
				if(i<geometryFunctions[name].arguments.length-1) formula += ",";
			}
			formula += ")";
		const result = JSON.stringify(geometryFunctions[name].expect),
			title = "<tr><td>" + geometryFunctions[name].name + "</td><td>" + formula + "</td><td>" + result + "</td></tr>";
		it(title,function(done) {
			hc.Cell(name,formula,{oncalculated:(cell) => {  done(assert.equal(JSON.stringify(cell.value),result)); }});
		})
	}
});

const mathConstants = {
		e: {expect: Math.E},
		ln2: {expect: Math.LN2},
		ln10: {expect: Math.LN10},
		log2e: {expect: Math.LOG2E},
		log10e: {expect: Math.LOG10E},
		phi: {expect: (1 + Math.sqrt(5)) / 2},
		pi: {expect: Math.PI},
		tau: {expect: 2 * Math.PI},
}
describe("<tr><th colspan='3' align='left'>Constants (Also available as Math.&lt;function&gt;)</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>", function() {
	for(let name in mathConstants) {
		const formula = "="+name+"()",
			result = (typeof(mathConstants[name])==="object" ? mathConstants[name].expect : mathConstants[name]),
			title = "<tr><td>" + name + "</td><td>" + formula + "</td><td>" + result + "</td></tr>";
		it(title,function(done) {
			hc.Cell(name,formula,{oncalculated:(cell) => { done(assert.equal(cell.value,result)); }});
		})
	}
});

const matrixFunctions = {
		matrixSubtractRows: {
			name: "Matrix.difference",
			arguments: [[[1,2,3]],[[1,2,3]]],
			expect: [[0,0,0]]
		},
		matrixSubtractColumns: {
			name: "Matrix.difference",
			arguments: [[[1],[2],[3]],[[1],[2],[3]]],
			expect: [[0],[0],[0]]
		},
		matrixProductAB: {
			name: "Matrix.product",
			arguments: [[[1,2,3]],[[1],[2],[3]]],
			expect: [[14]]
		},
		matrixProductBA: {
			name: "Matrix.product",
			arguments: [[[1],[2],[3]],[[1,2,3]]],
			expect: [[1,2,3],[2,4,6],[3,6,9]]
		},
		matrixAddRows: {
			name: "Matrix.sum",
			arguments: [[[1,2,3]],[[1,2,3]]],
			expect: [[2,4,6]]
		},
		matrixAddColumns: {
			name: "Matrix.sum",
			arguments: [[[1],[2],[3]],[[1],[2],[3]]],
			expect: [[2],[4],[6]]
		}
}
describe("<tr><th colspan='3' align='left'>Matrix Functions</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>", function() {
	for(let name in matrixFunctions) {
		let formula = "="+matrixFunctions[name].name+"(";
			for(let i=0;i<matrixFunctions[name].arguments.length;i++) {
				formula += JSON.stringify(matrixFunctions[name].arguments[i]);
				if(i<matrixFunctions[name].arguments.length-1) formula += ",";
			}
			formula += ")";
		const result = JSON.stringify(matrixFunctions[name].expect),
			title = "<tr><td>" + matrixFunctions[name].name + "</td><td>" + formula + "</td><td>" + result + "</td></tr>";
		it(title,function(done) {
			hc.Cell(name,formula,{oncalculated:(cell) => {  done(assert.equal(JSON.stringify(cell.value),result)); }});
		})
	}
});

const physicsFunctions = {
		"Physics.planks": {expect: hc.functions.Unit.parse((6.626070040 * Math.pow(10,34)) + " m^2 kg / s")},
		"Physics.c": {expect: hc.functions.Unit.parse("299792458 m / s")},
		//"Physics.e": {expect: (1.6021766208*(Math.pow(10,-91))) + " coulombs"},
}
describe("<tr><th colspan='3' align='left'>Physics Functions</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>", function() {
	for(let name in physicsFunctions) {
		const arguments = (physicsFunctions[name].arguments ? physicsFunctions[name].arguments : []);
		let formula = "="+name+"(";
			for(let i=0;i<arguments.length;i++) {
				formula += JSON.stringify(arguments[i]);
				if(i<arguments.length-1) formula += ",";
			}
			formula += ")";
		const result = (typeof(physicsFunctions[name])==="object" ? physicsFunctions[name].expect : physicsFunctions[name]),
			title = "<tr><td>" + name + "</td><td>" + formula + "</td><td>" + result + "</td></tr>";
		it(title,function(done) {
			hc.Cell(name,formula,{oncalculated:(cell) => { done(assert.equal(cell.value.valueOf(),result.valueOf())); }});
		})
	}
});

const predicateFunctions = {
		"isFunctionTrue": {name:"isFunction", arguments: [function() {}], expect: true},
		"isFunctionFalse": {name:"isFunction", arguments: [1], expect: false},
		"isMatrixTrue": {name:"isMatrix", arguments: [[[1]]], expect: true},
		"isMatrixFalse": {name:"isMatrix", arguments: [[1]], expect: false},
		"isNumberTrue": {name:"isNumber", arguments: [1], expect: true},
		"isNumberFalse": {name:"isNumber", arguments: ["a"], expect: false},
		"isNegativeTrue": {name:"isNegative", arguments: [-1], expect: true},
		"isNegativeFalse": {name:"isNegative", arguments: [1], expect: false},
		"isPositiveTrue": {name:"isPositive", arguments: [1], expect: true},
		"isPositiveFalse": {name:"isPositive", arguments: [-1], expect: false},
		"isPrimeTrue": {name:"isPrime", arguments: [3], expect: true},
		"isPrimeFalse": {name:"isPrime", arguments: [4], expect: false},
		"isVectorTrue": {name:"isVector", arguments: [[1]], expect: true},
		"isVectorFalse": {name:"isVector", arguments: [[[1]]], expect: false}
}
describe("<tr><th colspan='3' align='left'>Predicate Functions</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>", function() {
	for(let name in predicateFunctions) {
		const arguments = (predicateFunctions[name].arguments ? predicateFunctions[name].arguments : [3.5]),
			result = predicateFunctions[name].expect;
		!predicateFunctions[name].name || (name = predicateFunctions[name].name);
		let formula = "="+name+"(";
			for(let i=0;i<arguments.length;i++) {
				formula += (typeof(arguments[i])==="function" ? arguments[i]+"" : JSON.stringify(arguments[i]));
				if(i<arguments.length-1) formula += ",";
			}
			formula += ")";
		const title = "<tr><td>" + name + "</td><td>" + formula + "</td><td>" + result + "</td></tr>";
		it(title,function(done) {
			hc.Cell(name,formula,{oncalculated:(cell) => { done(assert.equal(cell.value,result)); }});
		})
	}
});

const probabiltycFunctions = {
	factorial: {name:"factorial",arguments: [4],expect: 1* 2 * 3 *4},
	randomFloat: {name:"Math.random", arguments: [],expect: arg => arg>=0 && arg<=1  },
	randomInt: {name:"Math.random", arguments: [1,2],expect: arg => arg>=1 && arg<=2 },
}
describe("<tr><th colspan='3' align='left'>Probability Functions (Also available as Math.&lt;function&gt;)</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>", function() {
	for(let name in probabiltycFunctions) {
		let formula = "="+probabiltycFunctions[name].name+"(";
		for(let i=0;i<probabiltycFunctions[name].arguments.length;i++) {
			formula += JSON.stringify(probabiltycFunctions[name].arguments[i]);
			if(i<probabiltycFunctions[name].arguments.length-1) formula += ",";
		}
		formula += ")";
		const result = probabiltycFunctions[name].expect,
			title = "<tr><td>" + name + "</td><td>" + formula + "</td><td>" + result + "</td></tr>";
		it(title,function(done) {
			hc.Cell(name,formula,{oncalculated:(cell) => { 
				done(typeof(result)==="function" ? assert(result(cell.value)) : assert.equal(cell.value,result)); 
			}});
		})
	}
});

const statisticalFunctions = {
		average: 24 / 7,
		max: 6,
		min: 1,
		median: 3,
		mode: [3],
		product: 1*2*3*3*4*5*6,
		sum: 1+2+3+3+4+5+6,
		stdev: 1.5907898179514348,
		variance: 2.5306122448979593,
		madev: 1.3469387755102038
}
describe("<tr><th colspan='3' align='left'>Statistical Functions  (Also available as Statistics.&lt;function&gt;)</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>", function() {
	for(let name in statisticalFunctions) {
		const formula = "="+name+"(1,2,3,3,4,5,6)",
			result = statisticalFunctions[name],
			title = "<tr><td>" + name + "</td><td>" + formula + "</td><td>" + (Array.isArray(result) ? JSON.stringify(result) : result) + "</td></tr>";
		it(title,function(done) {
			hc.Cell(name,formula,{oncalculated:(cell) => { done(assert.equal(cell.value+"",result+"")); }});
		})
	}
});

const stringFunctions = {
	reverse: {arguments: ["abc"], expect: "cba"},
	split: {arguments: ["a.b.c"], expect: "a.b.c".split()},
	substring: {arguments: ["abcdefg",1,4], expect: "abcdefg".substring(1,4)},
	trim: {arguments: [" abc "], expect: " abc ".trim()},
	trimLeft: {arguments: [" abc "], expect: " abc ".trimLeft()},
	trimRight: {arguments: [" abc "], expect: " abc ".trimRight()},
	toLowerCase: {arguments: ["LOWER"], expect: "LOWER".toLowerCase()},
	toUpperCase: {arguments: ["upper"], expect: "upper".toUpperCase()}
}
describe("<tr><th colspan='3' align='left'>String Functions (Also available as String.&lt;function&gt;)</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>", function() {
	for(let name in stringFunctions) {
		const arguments = (stringFunctions[name].arguments ? stringFunctions[name].arguments : [3.5]);
		let formula = "="+name+"(";
			for(let i=0;i<arguments.length;i++) {
				formula += JSON.stringify(arguments[i]);
				if(i<arguments.length-1) formula += ",";
			}
			formula += ")";
		const result = (typeof(stringFunctions[name])==="object" ? stringFunctions[name].expect : stringFunctions[name]),
			title = "<tr><td>" + name + "</td><td>" + formula + "</td><td>" + result + "</td></tr>";
		it(title,function(done) {
			hc.Cell(name,formula,{oncalculated:(cell) => { done(assert.equal(JSON.stringify(cell.value),JSON.stringify(result))); }});
		})
	}
});


const trigonometryFunctions = ["abs","acos","acosh","asin","asinh","atan","atanh","cos","cosh","sin","sinh","tan","tanh"];
describe("<tr><th colspan='3' align='left'>Trigonometry Functions (Also available as Math.&lt;function&gt;)</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>", function() {
	for(let name of trigonometryFunctions) {
		const fname = (Array.isArray(name) ? name[0] : name),
			mname = (Array.isArray(name) ? name[1] : name),
			formula = "="+fname+"(1)",
			result = Math[mname](1),
			title = "<tr><td>" + fname + "</td><td>" + formula + "</td><td>" + result + "</td></tr>";
		it(title,function(done) {
			hc.Cell(fname,formula,{oncalculated:(cell) => { done(assert.equal(cell.value,result)); }});
		})
	}
});

const unitFunctions = {
	addSame: {name:"Unit.add",arguments: ["1 cm","1 cm"], expect: new hc.functions.Unit(2,"cm")},
	addDifferent: {name:"Unit.add",arguments: ["1 in","2.54 cm"], expect: new hc.functions.Unit(2,"in")},
	divide: {name:"Unit.divide",arguments: ["1 cm","1 cm"], expect: 1},
	equalSame: {name:"Unit.equal",arguments: ["1 cm","1 cm"], expect: true},
	equalDifferent1: {name:"Unit.equal",arguments: ["2.54 cm","1 in"], expect: true},
	equalDifferent2: {name:"Unit.equal",arguments: ["1 in","2.54 cm"], expect: true},
	max: {name:"Unit.max",arguments: ["1 in","1 cm"], expect: hc.functions.Unit(1,"in")},
	min: {name:"Unit.min",arguments: ["1 in","1 cm"], expect: hc.functions.Unit(1,"cm")},
	multiply: {name:"Unit.multiply",arguments: ["1 cm","1 cm"], expect: "1 cm^2"},
	subtractSame: {name:"Unit.subtract",arguments: ["1 cm","1 cm"], expect: new hc.functions.Unit(0,"cm")},
	subtractDifferent: {name:"Unit.subtract",arguments: ["1 in","2.54 cm"], expect: new hc.functions.Unit(0,"in")},
}
describe("<tr><th colspan='3' align='left'>Unit Functions</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>", function() {
	for(let name in unitFunctions) {
		let formula = "="+unitFunctions[name].name+"(";
			for(let i=0;i<unitFunctions[name].arguments.length;i++) {
				formula += JSON.stringify(unitFunctions[name].arguments[i]);
				if(i<unitFunctions[name].arguments.length-1) formula += ",";
			}
			formula += ")";
		const result = unitFunctions[name].expect.valueOf(),
			title = "<tr><td>" + unitFunctions[name].name + "</td><td>" + formula + "</td><td>" + result + "</td></tr>";
		it(title,function(done) {
			hc.Cell(name,formula,{oncalculated:(cell) => { done(assert.equal(cell.value.valueOf(),result)); }});
		})
	}
});

const utilityFunctions = {
		"numberEqual": {name:"equal", arguments: [1,1], expect: true}
}
describe("<tr><th colspan='3' align='left'>Utility Functions (work on Vectors and Matrices)</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>", function() {
	for(let name in utilityFunctions) {
		const arguments = (utilityFunctions[name].arguments ? utilityFunctions[name].arguments : []),
			result = utilityFunctions[name].expect;
		!utilityFunctions[name].name || (name = utilityFunctions[name].name);
		let formula = "="+name+"(";
			for(let i=0;i<arguments.length;i++) {
				formula += JSON.stringify(arguments[i]);
				if(i<arguments.length-1) formula += ",";
			}
			formula += ")";
		const title = "<tr><td>" + name + "</td><td>" + formula + "</td><td>" + result + "</td></tr>";
		it(title,function(done) {
			hc.Cell(name,formula,{oncalculated:(cell) => { done(assert.equal(JSON.stringify(cell.value),JSON.stringify(result))); }});
		})
	}
});
const vectorFunctions = {
		vectorAverage: {
			name: "Vector.average",
			arguments: [[1,2,3],[2,3,1],[3,1,2]],
			expect: [2,2,2]
		},
		vectorSubtract: {
			name: "Vector.difference",
			arguments: [[1,2],[2,1],[1,1]],
			expect: [-2,0]
		},
		dotProduct: {
			name: "Vector.dotProduct",
			arguments: [[1,2,3],[1,2,3]],
			expect: 14
		},
		vector2DCrossProduct: {
			name: "Vector.crossProduct",
			arguments: [[1,2],[1,2]],
			expect: 0
		},
		vector3DCrossProduct: {
			name: "Vector.crossProduct",
			arguments: [[1,2,3],[3,2,1]],
			expect: [-4,8,-4]
		},
		vectorMultiplyScalar: {
			name: "Vector.scalarProduct",
			arguments: [[1,2],2],
			expect: [2,4]
		},
		vectorDivideScalar: {
			name: "Vector.scalarQuotient",
			arguments: [[1,2],2],
			expect: [.5,1]
		},
		vectorAdd: {
			name: "Vector.sum",
			arguments: [[1,2],[2,1],[1,1]],
			expect: [4,4]
		},
		vectorAddUnits: {
			name: "Vector.sum",
			arguments: [["1 cm","2 cm"],["2 cm","1 cm"],["1 cm","1 cm"]],
			expect: ["4 cm","4 cm"]
		},
		vectorAddScalar: {
			name: "Vector.sum",
			arguments: [[1,2,3],1],
			expect: [2,3,4]
		}
}
describe("<tr><th colspan='3' align='left'>Vector Functions</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>", function() {
	for(let name in vectorFunctions) {
		let formula = "="+vectorFunctions[name].name+"(";
			for(let i=0;i<vectorFunctions[name].arguments.length;i++) {
				formula += JSON.stringify(vectorFunctions[name].arguments[i]);
				if(i<vectorFunctions[name].arguments.length-1) formula += ",";
			}
			formula += ")";
		const result = JSON.stringify(vectorFunctions[name].expect),
			title = "<tr><td>" + vectorFunctions[name].name + "</td><td>" + formula + "</td><td>" + result + "</td></tr>";
		it(title,function(done) {
			hc.Cell(name,formula,{oncalculated:(cell) => { done(assert.equal(JSON.stringify(cell.value),result)); }});
		})
	}
});





/*
 * $
varg
$a
values
cells
averagea
count
counta
extend
format
intersection
maxa
mina
producta
quotient
quotienta
suma
type
speedOfLight
gravitationConstant
planckConstant
reducedPlanckConstant
magneticConstant
electricConstant
vacuumImpedance
coulomb
elementaryCharge
bohrMagneton
conductanceQuantum
inverseConductanceQuantum
magneticFluxQuantum
nuclearMagneton
klitzing
bohrRadius
classicalElectronRadius
electronMass
fermiCoupling
fineStructure
hartreeEnergy
protonMass
deuteronMass
neutronMass
quantumOfCirculation
rydberg
thomsonCrossSection
weakMixingAngle
efimovFactor
atomicMass
avogadro
boltzmann
faraday
firstRadiation
loschmidt
gasConstant
molarPlanckConstant
molarVolume
sackurTetrode
secondRadiation
stefanBoltzmann
wienDisplacement
molarMass
molarMassC12
gravity
planckLength
planckMass
planckTime
planckCharge
planckTemperature
uninitialized
version
eval
derivative
simplify
qr
lup
slu
lsolve
lusolve
usolve
add
cbrt
divide
exp
fix
gcd
hypot
lcm
log
mod
multiply
norm
nthRoot
pow
round
sign
subtract
unaryMinus
unaryPlus
xgcd
bitAnd
bitNot
bitOr
bitXor
leftShift
rightArithShift
rightLogShift
bellNumbers
composition
stirlingS2
catalan
arg
conj
im
re
intersect
distance
and
not
or
xor
concat
cross
det
diag
dot
eye
filter
flatten
inv
kron
ones
partitionSelect
reshape
resize
size
sort
squeeze
subset
trace
transpose
zeros
combinations
factorial
gamma
kldivergence
multinomial
permutations
pickRandom
random
randomInt
compare
deepEqual
equal
larger
largerEq
smaller
smallerEq
unequal
erf
quantileSeq
 */
