if(typeof(module)==="object") {
	math = require("mathjs");
	Hypercalc = require("../index.js");
	assert = require("assert");
}

const hc = new Hypercalc();

// quick automated test build for now
const unaryNumericFunctions = ["abs","acos","acosh","acot","acoth","acsc","acsch","asec","asech","asin","asinh","atan","atanh","ceil",
"cos","cosh","cot","coth","csc","csch","cube","factorial","floor","gamma","isInteger","isNegative","isNumeric","isPositive","isPrime","isZero","isNaN",
"log10","sec","sech","sin","sinh","sqrt","square","tan","tanh"];
describe("<tr><th colspan='3' align='left'>Unary Numeric Functions</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>", function() {
	for(let name of unaryNumericFunctions) {
		const fname = (Array.isArray(name) ? name[0] : name),
			mname = (Array.isArray(name) ? name[1] : name),
			formula = "="+fname+"(3.5)",
			result = math[mname](3.5),
			title = "<tr><td>" + fname + "</td><td>" + formula + "</td><td>" + result + "</td></tr>";
		it(title,function(done) {
			hc.Cell(fname,formula,{oncalculated:(cell) => { done(assert.equal(cell.value+"",result+"")); }});
		})
	}
});
const multiNumericFunctions = [["average","mean"],"max","median","min","mode",["product","prod"],["stdev","std"],"sum"];
describe("<tr><th colspan='3' align='left'>Multi Argument Numeric Functions</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>", function() {
	for(let name of multiNumericFunctions) {
		const fname = (Array.isArray(name) ? name[0] : name),
			mname = (Array.isArray(name) ? name[1] : name),
			formula = "="+fname+"(0,1,2,3,3,4,5,6)",
			result = math[mname](0,1,2,3,3,4,5,6),
			title = "<tr><td>" + fname + "</td><td>" + formula + "</td><td>" + (Array.isArray(result) ? JSON.stringify(result) : result) + "</td></tr>";
		it(title,function(done) {
			hc.Cell(fname,formula,{oncalculated:(cell) => { done(assert.equal(cell.value+"",result+"")); }});
		})
	}
});
const arrayFunctions = [["average","mean"],"difference","max","median","min","mode",["product","prod"],["stdev","std"],"sum"];
describe("<tr><th colspan='3' align='left'>Array Functions</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>", function() {
	for(let name of arrayFunctions) {
		const fname = (Array.isArray(name) ? name[0] : name),
			mname = (Array.isArray(name) ? name[1] : name),
			formula = "="+fname+"([1,2,3,3,4,5,6])",
			result = (name==="difference" ? -22 : math[mname]([1,2,3,3,4,5,6])),
			title = "<tr><td>" + fname + "</td><td>" + formula + "</td><td>" + (Array.isArray(result) ? JSON.stringify(result) : result) + "</td></tr>";
		it(title,function(done) {
			hc.Cell(fname+"Array",formula,{oncalculated:(cell) => { done(assert.equal(cell.value+"",result+"")); }});
		})
	}
});

describe("<tr><th colspan='3' align='left'>Matrix Functions</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>", function() {
	describe("",function() {
		let fname = "difference";
		formula = "="+fname+"([1,2,3],1)";
		result = [0,1,2];
		title = "<tr><td>" + fname + "</td><td>" + formula + "</td><td>" + (Array.isArray(result) ? JSON.stringify(result) : result) + "</td></tr>";
		it(title,function(done) {
			hc.Cell(fname+"1",formula,{oncalculated:(cell) => { done(assert.equal(JSON.stringify(cell.value),JSON.stringify(result))); }});
		});
		formula = "="+fname+"([1,2,3],[1,2,3])";
		result = [0,0,0];
		title = "<tr><td>" + fname + "</td><td>" + formula + "</td><td>" + (Array.isArray(result) ? JSON.stringify(result) : result) + "</td></tr>";
		it(title,function(done) {
			hc.Cell(fname+"2",formula,{oncalculated:(cell) => { done(assert.equal(JSON.stringify(cell.value),JSON.stringify(result))); }});
		});
		formula = "="+fname+"([1,2,3],[1,2,3],1)";
		result = [-1,-1,-1];
		title = "<tr><td>" + fname + "</td><td>" + formula + "</td><td>" + (Array.isArray(result) ? JSON.stringify(result) : result) + "</td></tr>";
		it(title,function(done) {
			hc.Cell(fname+"3",formula,{oncalculated:(cell) => { done(assert.equal(JSON.stringify(cell.value),JSON.stringify(result))); }});
		});
	});
	describe("",function() {
		let fname = "product";
		formula = "="+fname+"([1,2,3],1)";
		result = [1,2,3];
		title = "<tr><td>" + fname + "</td><td>" + formula + "</td><td>" + (Array.isArray(result) ? JSON.stringify(result) : result) + "</td></tr>";
		it(title,function(done) {
			hc.Cell(fname+"1",formula,{oncalculated:(cell) => { done(assert.equal(JSON.stringify(cell.value),JSON.stringify(result))); }});
		});
		formula = "="+fname+"([[1,2,3], [1,2,3]],[[1,2], [1,2],[1,2]])";
		result = [[6,12],[6,12]];
		title = "<tr><td>" + fname + "</td><td>" + formula + "</td><td>" + (Array.isArray(result) ? JSON.stringify(result) : result) + "</td></tr>";
		it(title,function(done) {
			hc.Cell(fname+"2",formula,{oncalculated:(cell) => { done(assert.equal(JSON.stringify(cell.value),JSON.stringify(result))); }});
		});
		formula = "="+fname+"([1,2,3],[1,2,3],1)";
		result = [1,4,9];
		title = "<tr><td>" + fname + "</td><td>" + formula + "</td><td>" + (Array.isArray(result) ? JSON.stringify(result) : result) + "</td></tr>";
		it(title,function(done) {
			hc.Cell(fname+"3",formula,{oncalculated:(cell) => { done(assert.equal(JSON.stringify(cell.value),JSON.stringify(result))); }});
		});
	});
	describe("",function() {
		let fname = "dotProduct";
		formula = "="+fname+"([1,2,3],1)";
		result = math.dotMultiply([1,2,3],1);
		title = "<tr><td>" + fname + "</td><td>" + formula + "</td><td>" + (Array.isArray(result) ? JSON.stringify(result) : result) + "</td></tr>";
		it(title,function(done) {
			hc.Cell(fname+"1",formula,{oncalculated:(cell) => { done(assert.equal(JSON.stringify(cell.value),JSON.stringify(result))); }});
		});
		formula = "="+fname+"([1,2,3], [1,2,3])";
		result = math.dotMultiply([1,2,3], [1,2,3]);
		title = "<tr><td>" + fname + "</td><td>" + formula + "</td><td>" + (Array.isArray(result) ? JSON.stringify(result) : result) + "</td></tr>";
		it(title,function(done) {
			hc.Cell(fname+"2",formula,{oncalculated:(cell) => { done(assert.equal(JSON.stringify(cell.value),JSON.stringify(result))); }});
		});
		formula = "="+fname+"([1,2,3], [1,2,3],2)";
		result = [2,8,18];
		title = "<tr><td>" + fname + "</td><td>" + formula + "</td><td>" + (Array.isArray(result) ? JSON.stringify(result) : result) + "</td></tr>";
		it(title,function(done) {
			hc.Cell(fname+"3",formula,{oncalculated:(cell) => { done(assert.equal(JSON.stringify(cell.value),JSON.stringify(result))); }});
		});
	});
	describe("",function() {
		let fname = "quotient";
		formula = "="+fname+"([1,2,3],1)";
		result = [1,2,3];
		title = "<tr><td>" + fname + "</td><td>" + formula + "</td><td>" + (Array.isArray(result) ? JSON.stringify(result) : result) + "</td></tr>";
		it(title,function(done) {
			hc.Cell(fname+"1",formula,{oncalculated:(cell) => { done(assert.equal(JSON.stringify(cell.value),JSON.stringify(result))); }});
		});
		formula = "="+fname+"([[1,2,3], [1,2,3], [1,2,3]],[[1,2,3], [1,2,3],[1,2,3]])";
		result = [[1,1,1],[1,1,1],[1,1,1]];
		title = "<tr><td>" + fname + "</td><td>" + formula + "</td><td>" + (Array.isArray(result) ? JSON.stringify(result) : result) + "</td></tr>";
		it(title,function(done) {
			hc.Cell(fname+"2",formula,{oncalculated:(cell) => { done(assert.equal(JSON.stringify(cell.value),JSON.stringify(result))); }});
		});
		formula = "="+fname+"([1,2,3],[1,2,3],1)";
		result = [1,4,9];
		title = "<tr><td>" + fname + "</td><td>" + formula + "</td><td>" + (Array.isArray(result) ? JSON.stringify(result) : result) + "</td></tr>";
		it(title,function(done) {
			hc.Cell(fname+"3",formula,{oncalculated:(cell) => { done(assert.equal(JSON.stringify(cell.value),JSON.stringify(result))); }});
		});
	});
	describe("",function() {
		let fname = "dotQuotient";
		formula = "="+fname+"([1,2,3],1)";
		result = math.dotDivide([1,2,3],1);
		title = "<tr><td>" + fname + "</td><td>" + formula + "</td><td>" + (Array.isArray(result) ? JSON.stringify(result) : result) + "</td></tr>";
		it(title,function(done) {
			hc.Cell(fname+"1",formula,{oncalculated:(cell) => { done(assert.equal(JSON.stringify(cell.value),JSON.stringify(result))); }});
		});
		formula = "="+fname+"([1,2,3], [1,2,3])";
		result = math.dotDivide([1,2,3], [1,2,3]);
		title = "<tr><td>" + fname + "</td><td>" + formula + "</td><td>" + (Array.isArray(result) ? JSON.stringify(result) : result) + "</td></tr>";
		it(title,function(done) {
			hc.Cell(fname+"2",formula,{oncalculated:(cell) => { done(assert.equal(JSON.stringify(cell.value),JSON.stringify(result))); }});
		});
		formula = "="+fname+"([1,2,3], [1,2,3],2)";
		result = [.5,.5,.5];
		title = "<tr><td>" + fname + "</td><td>" + formula + "</td><td>" + (Array.isArray(result) ? JSON.stringify(result) : result) + "</td></tr>";
		it(title,function(done) {
			hc.Cell(fname+"3",formula,{oncalculated:(cell) => { done(assert.equal(JSON.stringify(cell.value),JSON.stringify(result))); }});
		});
	});
	describe("",function() {
		let fname = "remainder",
			formula = "="+fname+"([1,2,3],1)",
			result = [0,1,2],
			title = "<tr><td>" + fname + "</td><td>" + formula + "</td><td>" + (Array.isArray(result) ? JSON.stringify(result) : result) + "</td></tr>";
		it(title,function(done) {
			hc.Cell(fname+"1",formula,{oncalculated:(cell) => { done(assert.equal(JSON.stringify(cell.value),JSON.stringify(result)));  }});
		});
		formula = "="+fname+"([1,2,3],[1,2,3])";
		result = [0,0,0];
		title = "<tr><td>" + fname + "</td><td>" + formula + "</td><td>" + (Array.isArray(result) ? JSON.stringify(result) : result) + "</td></tr>";
		it(title,function(done) {
			hc.Cell(fname+"2",formula,{oncalculated:(cell) => { done(assert.equal(JSON.stringify(cell.value),JSON.stringify(result))); }});
		});
		formula = "="+fname+"([1,2,3],[1,2,3],1)";
		result = [-1,-1,-1];
		title = "<tr><td>" + fname + "</td><td>" + formula + "</td><td>" + (Array.isArray(result) ? JSON.stringify(result) : result) + "</td></tr>";
		it(title,function(done) {
			hc.Cell(fname+"3",formula,{oncalculated:(cell) => { done(assert.equal(JSON.stringify(cell.value),JSON.stringify(result))); }});
		});
	});
	describe("",function() {
		let fname = "sum",
			formula = "="+fname+"([1,2,3],1)",
			result = [2,3,4],
			title = "<tr><td>" + fname + "</td><td>" + formula + "</td><td>" + (Array.isArray(result) ? JSON.stringify(result) : result) + "</td></tr>";
		it(title,function(done) {
			hc.Cell(fname+"1",formula,{oncalculated:(cell) => { done(assert.equal(JSON.stringify(cell.value),JSON.stringify(result)));  }});
		});
		formula = "="+fname+"([1,2,3],[1,2,3])";
		result = [2,4,6];
		title = "<tr><td>" + fname + "</td><td>" + formula + "</td><td>" + (Array.isArray(result) ? JSON.stringify(result) : result) + "</td></tr>";
		it(title,function(done) {
			hc.Cell(fname+"2",formula,{oncalculated:(cell) => { done(assert.equal(JSON.stringify(cell.value),JSON.stringify(result))); }});
		});
		formula = "="+fname+"([1,2,3],[1,2,3],1)";
		result = [3,5,7];
		title = "<tr><td>" + fname + "</td><td>" + formula + "</td><td>" + (Array.isArray(result) ? JSON.stringify(result) : result) + "</td></tr>";
		it(title,function(done) {
			hc.Cell(fname+"3",formula,{oncalculated:(cell) => { done(assert.equal(JSON.stringify(cell.value),JSON.stringify(result))); }});
		});
	});
});

const constants = ["e","i","pi",["ln2","LN2"],["ln10","LN10"],["log2e","LOG2E"],["log10e","LOG10E"],"phi","tau"];
describe("<tr><th colspan='3' align='left'>Constants</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>", function() {
	for(let name of constants) {
		const fname = (Array.isArray(name) ? name[0] : name),
			mname = (Array.isArray(name) ? name[1] : name),
			formula = "="+fname+"()",
			result = math[mname],
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
