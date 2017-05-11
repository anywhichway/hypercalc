if(typeof(module)==="object") {
	Hypercalc = require("../src/index.js");
	assert = require("assert");
}

const hc = new Hypercalc();

const arithmeticFunctions = {
		abs: {arguments: [-3.5], expect: 3.5},
		ceil: Math.ceil(3.5),
		cube: 3.5 * 3.5 * 3.5,
		exp: Math.exp(3.5),
		floor: Math.floor(3.5),
		nthRoot: {arguments: [3.5,2], expect:Math.pow(3.5,1/2)},
		round: Math.round(3.5),
		sqrt: Math.sqrt(3.5),
		square: 3.5 * 3.5,
}
describe("<tr><th colspan='3' align='left'>Arithmetic Unary Functions</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>", function() {
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
		distance: {arguments: [[1,2],[1,4]], expect: Math.sqrt(Math.pow(1-1,2)+Math.pow(4-2,2))}
}
describe("<tr><th colspan='3' align='left'>Geometry Functions</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>", function() {
	for(let name in geometryFunctions) {
		const arguments = (geometryFunctions[name].arguments ? geometryFunctions[name].arguments : [3.5]);
		let formula = "="+name+"(";
			for(let i=0;i<arguments.length;i++) {
				formula += JSON.stringify(arguments[i]);
				if(i<arguments.length-1) formula += ",";
			}
			formula += ")";
		const result = (typeof(geometryFunctions[name])==="object" ? geometryFunctions[name].expect : geometryFunctions[name]),
			title = "<tr><td>" + name + "</td><td>" + formula + "</td><td>" + result + "</td></tr>";
		it(title,function(done) {
			hc.Cell(name,formula,{oncalculated:(cell) => { done(assert.equal(cell.value,result)); }});
		})
	}
});


const multiuseFunctions = {
		numericAverage: {
			name: "average",
			arguments: [1,2,3],
			expect: 2
		},
		vectorAverage: {
			name: "average",
			arguments: [[1,2],[2,3],[3,4]],
			expect: [2,3]
		},
		numericProduct: {
			name: "product",
			arguments: [[1,2,3,3,4,5,6]],
			expect: 1 * 2 * 3 * 3 * 4 * 5 * 6
		},
		vectorScalarProduct: {
			name: "product",
			arguments: [[1,2,3,3,4,5,6],2],
			expect: [2,4,6,6,8,10,12]
		},
		vectorProduct: {
			name: "product",
			arguments: [[1,2],[1,2],[1,2]],
			expect: [1,8]
		},
		matrixProductAB: {
			name: "product",
			arguments: [[[1,2,3]],[[1],[2],[3]]],
			expect: [[14]]
		},
		matrixProductBA: {
			name: "product",
			arguments: [[[1],[2],[3]],[[1,2,3]]],
			expect: [[1,2,3],[2,4,6],[3,6,9]]
		},
		numericQuotient: {
			name: "quotient",
			arguments: [[1,2,3,3,4,5,6]],
			expect: 1 / 2 / 3 / 3 / 4 / 5 / 6
		},
		vectorScalarQuotient: {
			name: "quotient",
			arguments: [[1,2,3,3,4,5,6],2],
			expect: [1/2,2/2,3/2,3/2,4/2,5/2,6/2]
		},
		vectorQuotient: {
			name: "quotient",
			arguments: [[1,2],[1,2],[1,2]],
			expect: [1,.5]
		},
		numericSum: {
			name: "sum",
			arguments: [[1,2,3,3,4,5,6]],
			expect: 24
		},
		numericDifference: {
			name: "remainder",
			arguments: [[1,2,3,3,4,5,6]],
			expect: 1 - 2 - 3 - 3 - 4 - 5 - 6
		},
		vectorScalarDifference: {
			name: "remainder",
			arguments: [[1,2,3,3,4,5,6],1],
			expect: [0,1,2,2,3,4,5]
		},
		vectorDifference: {
			name: "remainder",
			arguments: [[1,2],[1,2],[1,2]],
			expect: [-1,-2]
		},
		vectorSum: {
			name: "sum",
			arguments: [[1,2,3,3,4,5,6],2],
			expect: [3,4,5,5,6,7,8]
		},
		vectorSum: {
			name: "sum",
			arguments: [[1,2],[1,2],[1,2]],
			expect: [3,6]
		}
}
describe("<tr><th colspan='3' align='left'>Multiuse Functions</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>", function() {
	for(let name in multiuseFunctions) {
		let formula = "="+multiuseFunctions[name].name+"(";
			for(let i=0;i<multiuseFunctions[name].arguments.length;i++) {
				formula += JSON.stringify(multiuseFunctions[name].arguments[i]);
				if(i<multiuseFunctions[name].arguments.length-1) formula += ",";
			}
			formula += ")";
		const result = JSON.stringify(multiuseFunctions[name].expect),
			title = "<tr><td>" + multiuseFunctions[name].name + "</td><td>" + formula + "</td><td>" + result + "</td></tr>";
		it(title,function(done) {
			hc.Cell(name,formula,{oncalculated:(cell) => {  done(assert.equal(JSON.stringify(cell.value),result)); }});
		})
	}
});
const matrixFunctions = {
		matrixProductAB: {
			name: "product",
			arguments: [[[1,2,3]],[[1],[2],[3]]],
			expect: [[14]]
		},
		matrixProductBA: {
			name: "product",
			arguments: [[[1],[2],[3]],[[1,2,3]]],
			expect: [[1,2,3],[2,4,6],[3,6,9]]
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
const probabiltycFunctions = {
	factorial: {name:"factorial", arguments: [4],expect: 1* 2 * 3 *4},
	randomFloat: {name:"random", arguments: [],expect: arg => arg>=0 && arg<=1  },
	randomInt: {name:"random", arguments: [1,2],expect: arg => arg>=1 && arg<=2 },
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
		average: 21 / 7,
		max: 6,
		min: 0,
		median: 3.5,
		mode: [3],
		stdev: 1.871,
		variance: 3.5,
		madev: 1.5
}
describe("<tr><th colspan='3' align='left'>Statistical Functions</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>", function() {
	for(let name in statisticalFunctions) {
		formula = "="+name+"(0,1,2,3,3,4,5,6)",
		result = statisticalFunctions[name],
		title = "<tr><td>" + name + "</td><td>" + formula + "</td><td>" + (Array.isArray(result) ? JSON.stringify(result) : result) + "</td></tr>";
		it(title,function(done) {
			hc.Cell(name,formula,{oncalculated:(cell) => { done(assert.equal(cell.value+"",result+"")); }});
		})
	}
});
const trigonometryFunctions = ["abs","acos","acosh","asin","asinh","atan","atanh","cos","cosh","sin","sinh","tan","tanh"];
describe("<tr><th colspan='3' align='left'>Trigonometry Functions</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>", function() {
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

const vectorFunctions = {
		vectorAverage: {
			name: "average",
			arguments: [[1,2,3],[2,3,1],[3,1,2]],
			expect: [2,2,2]
		},
		vectorDifference: {
			name: "difference",
			arguments: [[1,2],[2,1],[1,1]],
			expect: [-2,0]
		},
		dotProduct: {
			name: "dotProduct",
			arguments: [[1,2,3],[1,2,3]],
			expect: 14
		},
		vectorProduct: {
			name: "product",
			arguments: [[1,2],[2,1],[2,2]],
			expect: [4,4]
		},
		vectorProductScalar: {
			name: "product",
			arguments: [[1,2],2],
			expect: [2,4]
		},
		vectorQuotient: {
			name: "quotient",
			arguments: [[2,8],[2,4],[2,2]],
			expect: [.5,1]
		},
		vectorQuotientScalar: {
			name: "quotient",
			arguments: [[1,2],2],
			expect: [.5,1]
		},
		vectorSum: {
			name: "sum",
			arguments: [[1,2],[2,1],[1,1]],
			expect: [4,4]
		},
		vectorSumScalar: {
			name: "sum",
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

const constants = [["e","E"],["pi","PI"],["ln2","LN2"],["ln10","LN10"],["log2e","LOG2E"],["log10e","LOG10E"]];
describe("<tr><th colspan='3' align='left'>Constants</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>", function() {
	for(let name of constants) {
		const fname = (Array.isArray(name) ? name[0] : name),
			mname = (Array.isArray(name) ? name[1] : name),
			formula = "="+fname+"()",
			result = Math[mname],
			title = "<tr><td>" + fname + "</td><td>" + formula + "</td><td>" + result + "</td></tr>";
		it(title,function(done) {
			hc.Cell(fname,formula,{oncalculated:(cell) => { done(assert.equal(cell.value+"",result+"")); }});
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
