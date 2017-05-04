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
describe("<tr><th colspan='3' align='left'>Unary Numeric Functions</th></tr><tr><td>Name</td><td>Example</td><td>Result</td></tr>", function() {
	for(let name of unaryNumericFunctions) {
		const fname = (Array.isArray(name) ? name[0] : name),
			mname = (Array.isArray(name) ? name[1] : name),
			formula = "="+fname+"(3.5)",
			result = math[mname](3.5),
			title = "<tr><td>" + fname + "</td><td>" + formula + "</td><td>" + JSON.stringify(result) + "</td></tr>";
		it(title,function(done) {
			hc.Cell(fname,formula,{oncalculated:(cell) => { done(assert.equal(cell.value+"",result+"")); }});
		})
	}
});
const multiNumericFunctions = [["average","mean"],"max","median","min","mode",["product","prod"],["stdev","std"],"sum",];
describe("<tr><th colspan='3' align='left'>Multi Argument Numeric Functions</th></tr><tr><td>Name</td><td>Example</td><td>Result</td></tr>", function() {
	for(let name of multiNumericFunctions) {
		const fname = (Array.isArray(name) ? name[0] : name),
			mname = (Array.isArray(name) ? name[1] : name),
			formula = "="+fname+"(0,1,2,3,3,4,5,6)",
			result = math[mname](0,1,2,3,3,4,5,6),
			title = "<tr><td>" + fname + "</td><td>" + formula + "</td><td>" + JSON.stringify(result) + "</td></tr>";
		it(title,function(done) {
			hc.Cell(fname,formula,{oncalculated:(cell) => { done(assert.equal(cell.value+"",result+"")); }});
		})
	}
});
const constants = ["e","i","pi",["ln2","LN2"],["ln10","LN10"],["log2e","LOG2E"],["log10e","LOG10E"],"phi","tau"];
// make full table
describe("<tr><th colspan='3' align='left'>Constants</th></tr><tr><td>Name</td><td>Example</td><td>Result</td></tr>", function() {
	for(let name of constants) {
		const fname = (Array.isArray(name) ? name[0] : name),
			mname = (Array.isArray(name) ? name[1] : name),
			formula = "="+fname+"()",
			result = math[mname],
			title = "<tr><td>" + fname + "</td><td>" + formula + "</td><td>" + JSON.stringify(result) + "</td></tr>";
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
dotProduct
quotient
quotienta
dotQuotient
suma
type
on
off
once
emit
expression
create
bignumber
boolean
complex
fraction
number
string
unit
splitUnit
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
dotDivide
dotMultiply
dotPow
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
