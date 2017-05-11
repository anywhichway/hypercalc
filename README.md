# Hypercalc

A multi-dimensional, headless JavaScript spreadsheet for the browser or Node.js.

1. Small: 46K Raw ES6, 9K Compressed ES6, 3.7K gzipped ES6, 8K transpiled, minified, gizpped ES5
2. Zero dependencies.
3. Multi-dimensional ranges can be flattened for operations like sum and product or left as arrays to support vector and matrix operations.
4. Single, two, three, and n-dimensional ranges can be created and updated through the use of wildcard matching. No need to modify formulas every time a new sheet is addded.
5. Extensible with custom functions with as little as one line of code per function.

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
     <tr><th colspan='3' align='left'>Arithmetic Unary Functions</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>
    <tr><td>abs</td><td>=abs(-3.5)</td><td>3.5</td></tr>
    <tr><td>ceil</td><td>=ceil(3.5)</td><td>4</td></tr>
    <tr><td>cube</td><td>=cube(3.5)</td><td>42.875</td></tr>
    <tr><td>exp</td><td>=exp(3.5)</td><td>33.11545195869231</td></tr>
    <tr><td>floor</td><td>=floor(3.5)</td><td>3</td></tr>
    <tr><td>nthRoot</td><td>=nthRoot(3.5,2)</td><td>1.8708286933869707</td></tr>
    <tr><td>round</td><td>=round(3.5)</td><td>4</td></tr>
    <tr><td>sqrt</td><td>=sqrt(3.5)</td><td>1.8708286933869707</td></tr>
    <tr><td>square</td><td>=square(3.5)</td><td>12.25</td></tr>

  <tr><th colspan='3' align='left'>Geometry Functions</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>
    <tr><td>distance</td><td>=distance([1,2],[1,4])</td><td>2</td></tr>

  <tr><th colspan='3' align='left'>Multiuse Functions</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>
    <tr><td>average</td><td>=average(1,2,3)</td><td>2</td></tr>
    <tr><td>average</td><td>=average([1,2],[2,3],[3,4])</td><td>[2,3]</td></tr>
    <tr><td>product</td><td>=product([1,2,3,3,4,5,6])</td><td>2160</td></tr>
    <tr><td>product</td><td>=product([1,2,3,3,4,5,6],2)</td><td>[2,4,6,6,8,10,12]</td></tr>
    <tr><td>product</td><td>=product([1,2],[1,2],[1,2])</td><td>[1,8]</td></tr>
    <tr><td>product</td><td>=product([[1,2,3]],[[1],[2],[3]])</td><td>[[14]]</td></tr>
    <tr><td>product</td><td>=product([[1],[2],[3]],[[1,2,3]])</td><td>[[1,2,3],[2,4,6],[3,6,9]]</td></tr>
    <tr><td>quotient</td><td>=quotient([1,2,3,3,4,5,6])</td><td>0.0004629629629629629</td></tr>
    <tr><td>quotient</td><td>=quotient([1,2,3,3,4,5,6],2)</td><td>[0.5,1,1.5,1.5,2,2.5,3]</td></tr>
    <tr><td>quotient</td><td>=quotient([1,2],[1,2],[1,2])</td><td>[1,0.5]</td></tr>
    <tr><td>sum</td><td>=sum([1,2,3,3,4,5,6])</td><td>24</td></tr>
    <tr><td>remainder</td><td>=remainder([1,2,3,3,4,5,6])</td><td>-22</td></tr>
    <tr><td>remainder</td><td>=remainder([1,2,3,3,4,5,6],1)</td><td>[0,1,2,2,3,4,5]</td></tr>
    <tr><td>remainder</td><td>=remainder([1,2],[1,2],[1,2])</td><td>[-1,-2]</td></tr>
    <tr><td>sum</td><td>=sum([1,2],[1,2],[1,2])</td><td>[3,6]</td></tr>

  <tr><th colspan='3' align='left'>Matrix Functions</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>
    <tr><td>product</td><td>=product([[1,2,3]],[[1],[2],[3]])</td><td>[[14]]</td></tr>
    <tr><td>product</td><td>=product([[1],[2],[3]],[[1,2,3]])</td><td>[[1,2,3],[2,4,6],[3,6,9]]</td></tr>

  <tr><th colspan='3' align='left'>Probability Functions</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>
    <tr><td>factorial</td><td>=factorial(4)</td><td>24</td></tr>
    <tr><td>randomFloat</td><td>=random()</td><td>arg => arg>=0 && arg<=1</td></tr>
    <tr><td>randomInt</td><td>=random(1,2)</td><td>arg => arg>=1 && arg<=2</td></tr>

  <tr><th colspan='3' align='left'>Statistical Functions</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>
    <tr><td>average</td><td>=average(0,1,2,3,3,4,5,6)</td><td>3</td></tr>
    <tr><td>max</td><td>=max(0,1,2,3,3,4,5,6)</td><td>6</td></tr>
    <tr><td>min</td><td>=min(0,1,2,3,3,4,5,6)</td><td>0</td></tr>
    <tr><td>median</td><td>=median(0,1,2,3,3,4,5,6)</td><td>3.5</td></tr>
    <tr><td>mode</td><td>=mode(0,1,2,3,3,4,5,6)</td><td>[3]</td></tr>
    <tr><td>stdev</td><td>=stdev(0,1,2,3,3,4,5,6)</td><td>1.871</td></tr>
    <tr><td>variance</td><td>=variance(0,1,2,3,3,4,5,6)</td><td>3.5</td></tr>
    <tr><td>madev</td><td>=madev(0,1,2,3,3,4,5,6)</td><td>1.5</td></tr>

  <tr><th colspan='3' align='left'>Trigonometry Functions</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>
    <tr><td>abs</td><td>=abs(1)</td><td>1</td></tr>
    <tr><td>acos</td><td>=acos(1)</td><td>0</td></tr>
    <tr><td>acosh</td><td>=acosh(1)</td><td>0</td></tr>
    <tr><td>asin</td><td>=asin(1)</td><td>1.5707963267948966</td></tr>
    <tr><td>asinh</td><td>=asinh(1)</td><td>0.881373587019543</td></tr>
    <tr><td>atan</td><td>=atan(1)</td><td>0.7853981633974483</td></tr>
    <tr><td>atanh</td><td>=atanh(1)</td><td>Infinity</td></tr>
    <tr><td>cos</td><td>=cos(1)</td><td>0.5403023058681398</td></tr>
    <tr><td>cosh</td><td>=cosh(1)</td><td>1.5430806348152437</td></tr>
    <tr><td>sin</td><td>=sin(1)</td><td>0.8414709848078965</td></tr>
    <tr><td>sinh</td><td>=sinh(1)</td><td>1.1752011936438014</td></tr>
    <tr><td>tan</td><td>=tan(1)</td><td>1.5574077246549023</td></tr>
    <tr><td>tanh</td><td>=tanh(1)</td><td>0.7615941559557649</td></tr>

  <tr><th colspan='3' align='left'>Vector Functions</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>
    <tr><td>average</td><td>=average([1,2,3],[2,3,1],[3,1,2])</td><td>[2,2,2]</td></tr>
    <tr><td>difference</td><td>=difference([1,2],[2,1],[1,1])</td><td>[-2,0]</td></tr>
    <tr><td>dotProduct</td><td>=dotProduct([1,2,3],[1,2,3])</td><td>14</td></tr>
    <tr><td>product</td><td>=product([1,2],[2,1],[2,2])</td><td>[4,4]</td></tr>
    <tr><td>product</td><td>=product([1,2],2)</td><td>[2,4]</td></tr>
    <tr><td>quotient</td><td>=quotient([2,8],[2,4],[2,2])</td><td>[0.5,1]</td></tr>
    <tr><td>quotient</td><td>=quotient([1,2],2)</td><td>[0.5,1]</td></tr>
    <tr><td>sum</td><td>=sum([1,2],[2,1],[1,1])</td><td>[4,4]</td></tr>
    <tr><td>sum</td><td>=sum([1,2,3],1)</td><td>[2,3,4]</td></tr>

  <tr><th colspan='3' align='left'>Constants</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>
    <tr><td>e</td><td>=e()</td><td>2.718281828459045</td></tr>
    <tr><td>pi</td><td>=pi()</td><td>3.141592653589793</td></tr>
    <tr><td>ln2</td><td>=ln2()</td><td>0.6931471805599453</td></tr>
    <tr><td>ln10</td><td>=ln10()</td><td>2.302585092994046</td></tr>
    <tr><td>log2e</td><td>=log2e()</td><td>1.4426950408889634</td></tr>
    <tr><td>log10e</td><td>=log10e()</td><td>0.4342944819032518</td></tr>
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

2017-05-10 v0.0.8 ALPHA Re-architected project structure so each function is a separate file along with a parrallel unit test file. Added lots more unit tests. Added `dimensions`,`invert`,`isMatrix`,`isPrime`,`isVector`,`nthRoot`,`random`,`sign`. Documented a number of undocumented functions. Added documentation of extending Hypercalc.

2017-05-08 v0.0.7 ALPHA Mathjs dependency removed. Some trigonometric functions sacrificed along with algebraic solving and unit conversions. dotProduct and dotDivided changed to support industry standard scalar result.

2017-05-07 v0.0.6 ALPHA Added $summary function.

2017-05-06 v0.0.5 ALPHA More unit tests and documentation.

2017-05-05 v0.0.4 ALPHA More unit tests and documentation.

2017-05-04 v0.0.3 ALPHA Started adding unit tests and documentation.

2017-05-03 v0.0.2 ALPHA Cleaned-up directory structure, browserified.

2017-05-03 v0.0.1 ALPHA Initial public release.

# License

Dual: AGPLv3 or Commercial
