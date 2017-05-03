if(typeof(module)==="object") {
	math = require("mathjs");
	Hypercalc = require("../index.js");
	assert = require("assert");
}

const hc = new Hypercalc();

// quick automated test build for now
const unaryNumericFunctions = ["abs","acos","acosh","acot","acoth","acsc","acsch","asec","asech","asin","asinh","atan","atanh","ceil",
"cos","cosh","cot","coth","csc","csch","cube","factorial","floor","gamma","log10","sec","sech","sin","sinh","sqrt","square","tan","tanh",
"isInteger","isNegative","isNumeric","isPositive","isPrime","isZero","isNaN"];
describe("Unary Numeric Functions", function() {
	for(let fname of unaryNumericFunctions) {
		it(fname,function(done) {
			hc.Cell(fname,"="+fname+"(1)",{oncalculated:(cell) => { done(assert.equal(cell.value+"",math[fname](1)+"")); }});
		})
	}
});
const multiNumericFunctions = [["average","mean"],"max","median","min","mode",["product","prod"],["stdev","std"],"sum",];
describe("Multi Argument Numeric Functions", function() {
	for(let name of multiNumericFunctions) {
		const fname = (Array.isArray(name) ? name[0] : name),
			mname = (Array.isArray(name) ? name[1] : name);
		it(fname,function(done) {
			hc.Cell(fname,"="+fname+"(0,1,2,3,3,4,5,6)",{oncalculated:(cell) => { done(assert.equal(cell.value+"",math[mname](0,1,2,3,3,4,5,6)+"")); }});
		})
	}
});
const constants = ["e","i","pi",["ln2","LN2"],["ln10","LN10"],["log2e","LOG2E"],["log10e","LOG10E"],"phi","tau"];
describe("Constants", function() {
	for(let name of constants) {
		const fname = (Array.isArray(name) ? name[0] : name),
			mname = (Array.isArray(name) ? name[1] : name);
		it(fname,function(done) {
			hc.Cell(fname,"="+fname+"()",{oncalculated:(cell) => { done(assert.equal(cell.value+"",math[mname]+"")); }});
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
