# Hypercalc

A multi-dimensional, headless JavaScript spreadsheet for the browser or Node.js.

1. Small: 56K Raw ES6, 39K Compressed ES6, 10K gzipped ES6, 10k transpiled, minified, gizpped ES5
2. Zero dependencies.
3. Multi-dimensional ranges can be flattened for operations like sum and product or left as arrays to support vector and matrix operations.
4. Single, two, three, and n-dimensional ranges can be created and updated through the use of wildcard matching. No need to modify formulas every time a new sheet is addded.
5. Extensible with custom functions in as little as one line of code per function.

# Why Hypercalc

1. Computing using a spreasheet approach is often more convenient than using a database.
2. We got tired of building complex spreasheets that were rigid and fragile with respect to cross sheet or matrix calculations.
3. We had many situations in which we did not need the front end of a spreadsheet.

# Use

## Installation

npm install hypercalc

or

grab the browser code from [Github](https://github.com/anywhichway/hypercalc/tree/master/browser)

or

use a CDN: https://public.cachegit.com/anywhichway/hypercalc/master/browser/hypercalc.es5.js



## Formulas

Hypercalc formulas look similar to those in MS Excel or Google sheets. They start with `=` followed by a function name and arguments in parentheses.

Hypercalc range specifications are always wrapped in a value selection call as `$(range string)` or `$summary(range string,options)`. The range string must be quoted and all portions are `.` delimited. The MS Excel range `Sheet1!A1` would be `Sheet1.A.1` in Hypercalc.

Range strings support:

1) wild card matching, e.g. `*.A.1` matches column A of row 1 on all sheets.
2) literal or conditions, e.g. `Sheet1|Sheet3.A.1` matches column A of row 1 on sheets 1 and 3.
3) range matching, e.g. `Sheet1|Sheet3.A:D.1` matches columns A through D of row 1 on sheets 1 and 3.

The value selection function, `$`, returns an array. This can be destructured to pass the results to functions taking multiple arguments, e.g. `=sum(...$('*.A.1'))`. However, most multiple argument functions will also accept an array as the first argument, e.g. `=sum($('*.A.1'))`. This is important for large ranges since exploding the selection will push each element onto the stack which may cause an out of memory error.

The value selection function, `$summary` can return an array or an object. By default it returns an ordered 3 dimensional array with 
the `min`, `average`, and `max` of values within the provided range. The `options` argument is an object with two properties:

1. `result`, which can have the value `array` or `object`. It defaults to `array`.

2. `values`, which is an array of function names to call on the values within the provided range. It defaults to `['min','average','max']`. Functions such as `variance` and `stdev` can be added. A return `array` is ordered the
same as the `values` array. If an `object` is returned, then the function names are added as properties.

There is much more to say, but Hypercalc is in ALPHA, so be patient.


# Functions

The below list covers approximately 70% of Hypercalc functionality. Instructions on how to add functions are <a href="#extending">after the function list</a>.

We have a lot to document .... bear with us.

<table>
      <tr><th colspan='3' align='left'>Arithmetic Functions</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>
   <tr><td>Math.abs</td><td>=Math.abs(-3.5)</td><td>3.5</td></tr>
   <tr><td>Math.ceil</td><td>=Math.ceil(3.5)</td><td>4</td></tr>
   <tr><td>Math.cbrt</td><td>=Math.cbrt(27)</td><td>3</td></tr>
   <tr><td>Math.cube</td><td>=Math.cube(3.5)</td><td>42.875</td></tr>
   <tr><td>Math.exp</td><td>=Math.exp(3.5)</td><td>33.11545195869231</td></tr>
   <tr><td>Math.floor</td><td>=Math.floor(3.5)</td><td>3</td></tr>
   <tr><td>Math.nthRoot</td><td>=Math.nthRoot(3.5,2)</td><td>1.8708286933869707</td></tr>
   <tr><td>Math.round</td><td>=Math.round(3.5)</td><td>4</td></tr>
   <tr><td>Math.sqrt</td><td>=Math.sqrt(3.5)</td><td>1.8708286933869707</td></tr>
   <tr><td>Math.square</td><td>=Math.square(3.5)</td><td>12.25</td></tr>

  <tr><th colspan='3' align='left'>Geometry Functions</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>
   <tr><td>Geometry.distance</td><td>=Geometry.distance([1,2],[1,4])</td><td>2</td></tr>
   <tr><td>Geometry.distance</td><td>=Geometry.distance([1,2,3],[1,4,2])</td><td>2.23606797749979</td></tr>

  <tr><th colspan='3' align='left'>Matrix Functions</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>
   <tr><td>Matrix.difference</td><td>=Matrix.difference([[1,2,3]],[[1,2,3]])</td><td>[[0,0,0]]</td></tr>
   <tr><td>Matrix.difference</td><td>=Matrix.difference([[1],[2],[3]],[[1],[2],[3]])</td><td>[[0],[0],[0]]</td></tr>
   <tr><td>Matrix.product</td><td>=Matrix.product([[1,2,3]],[[1],[2],[3]])</td><td>[[14]]</td></tr>
   <tr><td>Matrix.product</td><td>=Matrix.product([[1],[2],[3]],[[1,2,3]])</td><td>[[1,2,3],[2,4,6],[3,6,9]]</td></tr>
   <tr><td>Matrix.sum</td><td>=Matrix.sum([[1,2,3]],[[1,2,3]])</td><td>[[2,4,6]]</td></tr>
   <tr><td>Matrix.sum</td><td>=Matrix.sum([[1],[2],[3]],[[1],[2],[3]])</td><td>[[2],[4],[6]]</td></tr>

  <tr><th colspan='3' align='left'>Physics Functions</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>
   <tr><td>Physics.planks</td><td>=Physics.planks(3.5)</td><td>6.626070040000001e+34</td></tr>
   <tr><td>Physics.c</td><td>=Physics.c(3.5)</td><td>299792458</td></tr>
   <tr><td>Physics.e</td><td>=Physics.e(3.5)</td><td>1.6021766208</td></tr>

  <tr><th colspan='3' align='left'>Probability Functions</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>
   <tr><td>factorial</td><td>=Math.factorial(4)</td><td>24</td></tr>
   <tr><td>randomFloat</td><td>=Math.random()</td><td>arg => arg>=0 && arg<=1</td></tr>
   <tr><td>randomInt</td><td>=Math.random(1,2)</td><td>arg => arg>=1 && arg<=2</td></tr>

  <tr><th colspan='3' align='left'>Statistical Functions</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>
   <tr><td>Statistics.average</td><td>=Statistics.average(1,2,3,3,4,5,6)</td><td>3.4285714285714284</td></tr>
   <tr><td>Statistics.max</td><td>=Statistics.max(1,2,3,3,4,5,6)</td><td>6</td></tr>
   <tr><td>Statistics.min</td><td>=Statistics.min(1,2,3,3,4,5,6)</td><td>1</td></tr>
   <tr><td>Statistics.median</td><td>=Statistics.median(1,2,3,3,4,5,6)</td><td>3</td></tr>
   <tr><td>Statistics.mode</td><td>=Statistics.mode(1,2,3,3,4,5,6)</td><td>[3]</td></tr>
   <tr><td>Statistics.product</td><td>=Statistics.product(1,2,3,3,4,5,6)</td><td>2160</td></tr>
   <tr><td>Statistics.sum</td><td>=Statistics.sum(1,2,3,3,4,5,6)</td><td>24</td></tr>
   <tr><td>Statistics.stdev</td><td>=Statistics.stdev(1,2,3,3,4,5,6)</td><td>1.5907898179514348</td></tr>
   <tr><td>Statistics.variance</td><td>=Statistics.variance(1,2,3,3,4,5,6)</td><td>2.5306122448979593</td></tr>
   <tr><td>Statistics.madev</td><td>=Statistics.madev(1,2,3,3,4,5,6)</td><td>1.3469387755102038</td></tr>

  <tr><th colspan='3' align='left'>String Functions</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>
   <tr><td>String.toLowerCase</td><td>=String.toLowerCase("LOWER")</td><td>lower</td></tr>
   <tr><td>String.toUpperCase</td><td>=String.toUpperCase("upper")</td><td>UPPER</td></tr>

  <tr><th colspan='3' align='left'>Trigonometry Functions</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>
   <tr><td>Math.abs</td><td>=Math.abs(1)</td><td>1</td></tr>
   <tr><td>Math.acos</td><td>=Math.acos(1)</td><td>0</td></tr>
   <tr><td>Math.acosh</td><td>=Math.acosh(1)</td><td>0</td></tr>
   <tr><td>Math.asin</td><td>=Math.asin(1)</td><td>1.5707963267948966</td></tr>
   <tr><td>Math.asinh</td><td>=Math.asinh(1)</td><td>0.881373587019543</td></tr>
   <tr><td>Math.atan</td><td>=Math.atan(1)</td><td>0.7853981633974483</td></tr>
   <tr><td>Math.atanh</td><td>=Math.atanh(1)</td><td>Infinity</td></tr>
   <tr><td>Math.cos</td><td>=Math.cos(1)</td><td>0.5403023058681398</td></tr>
   <tr><td>Math.cosh</td><td>=Math.cosh(1)</td><td>1.5430806348152437</td></tr>
   <tr><td>Math.sin</td><td>=Math.sin(1)</td><td>0.8414709848078965</td></tr>
   <tr><td>Math.sinh</td><td>=Math.sinh(1)</td><td>1.1752011936438014</td></tr>
   <tr><td>Math.tan</td><td>=Math.tan(1)</td><td>1.5574077246549023</td></tr>
   <tr><td>Math.tanh</td><td>=Math.tanh(1)</td><td>0.7615941559557649</td></tr>

  <tr><th colspan='3' align='left'>Unit Functions</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>
   <tr><td>Unit.add</td><td>=Unit.add("1 cm","1 cm")</td><td>2 cm</td></tr>
   <tr><td>Unit.add</td><td>=Unit.add("1 in","2.54 cm")</td><td>2 in</td></tr>

  <tr><th colspan='3' align='left'>Vector Functions</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>
   <tr><td>Vector.average</td><td>=Vector.average([1,2,3],[2,3,1],[3,1,2])</td><td>[2,2,2]</td></tr>
   <tr><td>Vector.difference</td><td>=Vector.difference([1,2],[2,1],[1,1])</td><td>[-2,0]</td></tr>
   <tr><td>Vector.dotProduct</td><td>=Vector.dotProduct([1,2,3],[1,2,3])</td><td>14</td></tr>
   <tr><td>Vector.crossProduct</td><td>=Vector.crossProduct([1,2],[1,2])</td><td>0</td></tr>
   <tr><td>Vector.crossProduct</td><td>=Vector.crossProduct([1,2,3],[3,2,1])</td><td>[-4,8,-4]</td></tr>
   <tr><td>Vector.scalarProduct</td><td>=Vector.scalarProduct([1,2],2)</td><td>[2,4]</td></tr>
   <tr><td>Vector.scalarQuotient</td><td>=Vector.scalarQuotient([1,2],2)</td><td>[0.5,1]</td></tr>
   <tr><td>Vector.sum</td><td>=Vector.sum([1,2],[2,1],[1,1])</td><td>[4,4]</td></tr>
   <tr><td>Vector.sum</td><td>=Vector.sum(["1 cm","2 cm"],["2 cm","1 cm"],["1 cm","1 cm"])</td><td>["4 cm","4 cm"]</td></tr>
   <tr><td>Vector.sum</td><td>=Vector.sum([1,2,3],1)</td><td>[2,3,4]</td></tr>

  <tr><th colspan='3' align='left'>Constants</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>
   <tr><td>Math.e</td><td>=Math.e()</td><td>2.718281828459045</td></tr>
   <tr><td>Math.ln2</td><td>=Math.ln2()</td><td>0.6931471805599453</td></tr>
   <tr><td>Math.ln10</td><td>=Math.ln10()</td><td>2.302585092994046</td></tr>
   <tr><td>Math.log2e</td><td>=Math.log2e()</td><td>1.4426950408889634</td></tr>
   <tr><td>Math.log10e</td><td>=Math.log10e()</td><td>0.4342944819032518</td></tr>
   <tr><td>Math.phi</td><td>=Math.phi()</td><td>1.618033988749895</td></tr>
   <tr><td>Math.pi</td><td>=Math.pi()</td><td>3.141592653589793</td></tr>
   <tr><td>Math.tau</td><td>=Math.tau()</td><td>6.283185307179586</td></tr>
</table>

# <a name="extending">Extending Hypercalc</a>

Hypercalc can be reliably extended two ways:

1) At runtime after a spreadsheet has been created.

2) At the source code level using a convention based approach. (Not yet ready for testing).

## Runtime Extensions

To add a function to Hypercalc at runtime, simply add it to the `functions` property of the spreadsheet instance.

```
const hc = new Hypercalc();
hc.functions.hello = () => "Hello";

const cell = hc.Cell("Welcome","=hello()"); // creates a cell that always contains the message "Hello"
```

So long as your function can accept arrays as arguments, it can consume the results of `$(range string)`. Dependency tracking and updating will be handled automatically.

# Release History (reverse chronological order)

2017-05-17 v0.0.9 ALPHA Lost some of the re-architected project structure as code was re-worked to support Unit based calculations. Added `interval` function. Refined Vector and Matrix.

2017-05-10 v0.0.8 ALPHA Re-architected project structure so each function is a separate file along with a parrallel unit test file. Added lots more unit tests. Added `dimensions`,`invert`,`isMatrix`,`isPrime`,`isVector`,`nthRoot`,`random`,`sign`. Documented a number of undocumented functions. Added documentation on extending Hypercalc.

2017-05-08 v0.0.7 ALPHA Mathjs dependency removed. Some trigonometric functions sacrificed along with algebraic solving and unit conversions. dotProduct and dotDivided changed to support industry standard scalar result.

2017-05-07 v0.0.6 ALPHA Added $summary function.

2017-05-06 v0.0.5 ALPHA More unit tests and documentation.

2017-05-05 v0.0.4 ALPHA More unit tests and documentation.

2017-05-04 v0.0.3 ALPHA Started adding unit tests and documentation.

2017-05-03 v0.0.2 ALPHA Cleaned-up directory structure, browserified.

2017-05-03 v0.0.1 ALPHA Initial public release.

# License

Dual: AGPLv3 or Commercial
