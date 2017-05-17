if(typeof(module)==="object") {
	Hypercalc = require("../src/index.js");
	assert = require("assert");
}

const hc = new Hypercalc();

const arithmeticFunctions = {
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
describe("<tr><th colspan='3' align='left'>Arithmetic Functions</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>", function() {
	for(let name in arithmeticFunctions) {
		const arguments = (arithmeticFunctions[name].arguments ? arithmeticFunctions[name].arguments : [3.5]);
		let formula = "="+name+"(";
			for(let i=0;i<arguments.length;i++) {
				formula += JSON.stringify(arguments[i]);
				if(i<arguments.length-1) formula += ",";
			}
			formula += ")";
		const result = (typeof(arithmeticFunctions[name])==="object" ? arithmeticFunctions[name].expect : arithmeticFunctions[name]),
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
		"Physics.planks": {expect: 6.626070040 * Math.pow(10,34)},
		"Physics.c": {expect: 299792458},
		"Physics.e": {expect: 1.6021766208},
}
describe("<tr><th colspan='3' align='left'>Physics Functions</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>", function() {
	for(let name in physicsFunctions) {
		const arguments = (physicsFunctions[name].arguments ? physicsFunctions[name].arguments : [3.5]);
		let formula = "="+name+"(";
			for(let i=0;i<arguments.length;i++) {
				formula += JSON.stringify(arguments[i]);
				if(i<arguments.length-1) formula += ",";
			}
			formula += ")";
		const result = (typeof(physicsFunctions[name])==="object" ? physicsFunctions[name].expect : physicsFunctions[name]),
			title = "<tr><td>" + name + "</td><td>" + formula + "</td><td>" + result + "</td></tr>";
		it(title,function(done) {
			hc.Cell(name,formula,{oncalculated:(cell) => { done(assert.equal(cell.value,result)); }});
		})
	}
});

const probabiltycFunctions = {
	factorial: {name:"Math.factorial", arguments: [4],expect: 1* 2 * 3 *4},
	randomFloat: {name:"Math.random", arguments: [],expect: arg => arg>=0 && arg<=1  },
	randomInt: {name:"Math.random", arguments: [1,2],expect: arg => arg>=1 && arg<=2 },
}
describe("<tr><th colspan='3' align='left'>Probability Functions</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>", function() {
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
describe("<tr><th colspan='3' align='left'>Statistical Functions</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>", function() {
	for(let name in statisticalFunctions) {
		const formula = "=Statistics."+name+"(1,2,3,3,4,5,6)",
			result = statisticalFunctions[name],
			title = "<tr><td>Statistics." + name + "</td><td>" + formula + "</td><td>" + (Array.isArray(result) ? JSON.stringify(result) : result) + "</td></tr>";
		it(title,function(done) {
			hc.Cell(name,formula,{oncalculated:(cell) => { done(assert.equal(cell.value+"",result+"")); }});
		})
	}
});

const stringFunctions = {
	toLowerCase: {arguments: ["LOWER"], expect: "LOWER".toLowerCase()},
	toUpperCase: {arguments: ["upper"], expect: "upper".toUpperCase()}
}
describe("<tr><th colspan='3' align='left'>String Functions</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>", function() {
	for(let name in stringFunctions) {
		const arguments = (stringFunctions[name].arguments ? stringFunctions[name].arguments : [3.5]);
		let formula = "=String."+name+"(";
			for(let i=0;i<arguments.length;i++) {
				formula += JSON.stringify(arguments[i]);
				if(i<arguments.length-1) formula += ",";
			}
			formula += ")";
		const result = (typeof(stringFunctions[name])==="object" ? stringFunctions[name].expect : stringFunctions[name]),
			title = "<tr><td>String." + name + "</td><td>" + formula + "</td><td>" + result + "</td></tr>";
		it(title,function(done) {
			hc.Cell(name,formula,{oncalculated:(cell) => { done(assert.equal(cell.value,result)); }});
		})
	}
});


const trigonometryFunctions = ["abs","acos","acosh","asin","asinh","atan","atanh","cos","cosh","sin","sinh","tan","tanh"];
describe("<tr><th colspan='3' align='left'>Trigonometry Functions</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>", function() {
	for(let name of trigonometryFunctions) {
		const fname = "Math." + (Array.isArray(name) ? name[0] : name),
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
	addDifferent: {name:"Unit.add",arguments: ["1 in","2.54 cm"], expect: new hc.functions.Unit(2,"in")}
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


const constants = {
		e: {expect: Math.E},
		ln2: {expect: Math.LN2},
		ln10: {expect: Math.LN10},
		log2e: {expect: Math.LOG2E},
		log10e: {expect: Math.LOG10E},
		phi: {expect: (1 + Math.sqrt(5)) / 2},
		pi: {expect: Math.PI},
		tau: {expect: 2 * Math.PI},
}
describe("<tr><th colspan='3' align='left'>Constants</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>", function() {
	for(let name in constants) {
		const formula = "=Math."+name+"()",
			result = (typeof(constants[name])==="object" ? constants[name].expect : constants[name]),
			title = "<tr><td>Math." + name + "</td><td>" + formula + "</td><td>" + result + "</td></tr>";
		it(title,function(done) {
			hc.Cell(name,formula,{oncalculated:(cell) => { done(assert.equal(cell.value,result)); }});
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
