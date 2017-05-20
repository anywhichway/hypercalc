# Hypercalc

A multi-dimensional, headless JavaScript spreadsheet for the browser or Node.js.

1. Moderate Size: 67K Raw ES6, 60K Compressed ES6, 11K gzipped ES6, 11k transpiled, minified, gizpped ES5
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

Hypercalc range specifications are always wrapped in a value selection call as `$(range string)` or `$summary(range string,options)`. The range string must NOT be quoted and all portions are `.` delimited. The MS Excel range `Sheet1!A1` would be `Sheet1.A.1` in Hypercalc.

Range strings support:

1) wild card matching, e.g. `*.A.1` matches column A of row 1 on all sheets.
2) literal or conditions, e.g. `Sheet1|Sheet3.A.1` matches column A of row 1 on sheets 1 and 3.
3) range matching, e.g. `Sheet1|Sheet3.A:D.1` matches columns A through D of row 1 on sheets 1 and 3.

The value selection function, `$`, returns an array. This can be destructured to pass the results to functions taking multiple arguments, e.g. `=sum(...$(*.A.1))`. However, most multiple argument functions will also accept an array as the first argument, e.g. `=sum($(*.A.1))`. This is important for large ranges since exploding the selection will push each element onto the stack which may cause an out of memory error.

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
<tr><th colspan='3' align='left'>Array Functions (work on Vectors and Matrices)</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>
    <tr><td>count</td><td>=count(1,2,3,4,5,6)</td><td>6</td></tr>
    <tr><td>count</td><td>=count([1,[2,3],4],5,6)</td><td>6</td></tr>
    <tr><td>dimensions</td><td>=dimensions([[1,2,3],[1,2,3]])</td><td>[2,3]</td></tr>
    <tr><td>flatten</td><td>=flatten([1,[2,3],4])</td><td>[1,2,3,4]</td></tr>
    <tr><td>flatten</td><td>=flatten([1,[[2],3],4])</td><td>[1,[2],3,4]</td></tr>
    <tr><td>flatten</td><td>=flatten([1,[2,3],4],1,true)</td><td>[1,2,3,4]</td></tr>
    <tr><td>join</td><td>=join([1,[2,3],4],1,",")</td><td>"1,2,3,4,1"</td></tr>

  <tr><th colspan='3' align='left'>Arithmetic Functions</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>
    <tr><td>add</td><td>=add(2,1)</td><td>3</td></tr>
    <tr><td>adda</td><td>=adda(2,1)</td><td>3</td></tr>
    <tr><td>adda</td><td>=adda(2,true)</td><td>3</td></tr>
    <tr><td>adda</td><td>=adda(2,false)</td><td>2</td></tr>
    <tr><td>add</td><td>=add("2 in","2 in")</td><td>4 in</td></tr>
    <tr><td>divide</td><td>=divide(2,1)</td><td>2</td></tr>
    <tr><td>dividea</td><td>=dividea(2,1)</td><td>2</td></tr>
    <tr><td>dividea</td><td>=dividea(2,true)</td><td>2</td></tr>
    <tr><td>dividea</td><td>=dividea(2,false)</td><td>Infinity</td></tr>
    <tr><td>divide</td><td>=divide("2 in","2 in")</td><td>1</td></tr>
    <tr><td>multiply</td><td>=multiply(2,1)</td><td>2</td></tr>
    <tr><td>multiplya</td><td>=multiplya(2,1)</td><td>2</td></tr>
    <tr><td>multiplya</td><td>=multiplya(2,true)</td><td>2</td></tr>
    <tr><td>multiplya</td><td>=multiplya(2,false)</td><td>0</td></tr>
    <tr><td>multiply</td><td>=multiply("2 in","2 in")</td><td>4 in^2</td></tr>
    <tr><td>product</td><td>=product(3,2,1)</td><td>6</td></tr>
    <tr><td>producta</td><td>=producta(3,2,1)</td><td>6</td></tr>
    <tr><td>producta</td><td>=producta(3,2,true)</td><td>6</td></tr>
    <tr><td>producta</td><td>=producta(3,2,false)</td><td>0</td></tr>
    <tr><td>product</td><td>=product("2 in","2 in","2 in")</td><td>8 in^3</td></tr>
    <tr><td>subtract</td><td>=subtract(2,1)</td><td>1</td></tr>
    <tr><td>subtracta</td><td>=subtracta(2,1)</td><td>1</td></tr>
    <tr><td>subtracta</td><td>=subtracta(2,true)</td><td>1</td></tr>
    <tr><td>subtracta</td><td>=subtracta(2,false)</td><td>2</td></tr>
    <tr><td>subtract</td><td>=subtract("2 in","2 in")</td><td>0 in</td></tr>
    <tr><td>sum</td><td>=sum(3,2,1)</td><td>6</td></tr>
    <tr><td>suma</td><td>=suma(3,2,1)</td><td>6</td></tr>
    <tr><td>suma</td><td>=suma(3,2,true)</td><td>6</td></tr>
    <tr><td>suma</td><td>=suma(3,2,false)</td><td>5</td></tr>
    <tr><td>sum</td><td>=sum("2 in","2 in","2 in")</td><td>6 in</td></tr>

  <tr><th colspan='3' align='left'>Date Functions</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>
    <tr><td>dayOfMonth</td><td>=Date.dayOfMonth("2017-05-19T14:47:27.127Z")</td><td>19</td></tr>
    <tr><td>day</td><td>=Date.day("2017-05-19T14:47:27.127Z")</td><td>5</td></tr>
    <tr><td>fullYear</td><td>=Date.fullYear("2017-05-19T14:47:27.127Z")</td><td>2017</td></tr>
    <tr><td>hours</td><td>=Date.hours("2017-05-19T14:47:27.127Z")</td><td>10</td></tr>
    <tr><td>milliseconds</td><td>=Date.milliseconds("2017-05-19T14:47:27.127Z")</td><td>127</td></tr>
    <tr><td>minutes</td><td>=Date.minutes("2017-05-19T14:47:27.127Z")</td><td>47</td></tr>
    <tr><td>month</td><td>=Date.month("2017-05-19T14:47:27.127Z")</td><td>4</td></tr>
    <tr><td>seconds</td><td>=Date.seconds("2017-05-19T14:47:27.127Z")</td><td>27</td></tr>
    <tr><td>Time</td><td>=Date.Time("2017-05-19T14:47:27.127Z")</td><td>1495205247127</td></tr>
    <tr><td>timezoneOffset</td><td>=Date.timezoneOffset("2017-05-19T14:47:27.127Z")</td><td>240</td></tr>
    <tr><td>year</td><td>=Date.year("2017-05-19T14:47:27.127Z")</td><td>117</td></tr>
    <tr><td>UTCDate</td><td>=Date.UTCDate("2017-05-19T14:47:27.127Z")</td><td>19</td></tr>
    <tr><td>UTCDay</td><td>=Date.UTCDay("2017-05-19T14:47:27.127Z")</td><td>5</td></tr>
    <tr><td>UTCFullYear</td><td>=Date.UTCFullYear("2017-05-19T14:47:27.127Z")</td><td>2017</td></tr>
    <tr><td>UTCHours</td><td>=Date.UTCHours("2017-05-19T14:47:27.127Z")</td><td>14</td></tr>
    <tr><td>UTCMilliseconds</td><td>=Date.UTCMilliseconds("2017-05-19T14:47:27.127Z")</td><td>127</td></tr>
    <tr><td>UTCMinutes</td><td>=Date.UTCMinutes("2017-05-19T14:47:27.127Z")</td><td>47</td></tr>
    <tr><td>UTCMonth</td><td>=Date.UTCMonth("2017-05-19T14:47:27.127Z")</td><td>4</td></tr>
    <tr><td>UTCSeconds</td><td>=Date.UTCSeconds("2017-05-19T14:47:27.127Z")</td><td>27</td></tr>
    <tr><td>now</td><td>=now()</td><td>1495205247133</td></tr>
    <tr><td>toDateString</td><td>=Date.toDateString("2017-05-19T14:47:27.127Z")</td><td>Fri May 19 2017</td></tr>
    <tr><td>toISOString</td><td>=Date.toISOString("2017-05-19T14:47:27.127Z")</td><td>2017-05-19T14:47:27.127Z</td></tr>
    1) <tr><td>toLocaleString</td><td>=Date.toLocaleString("2017-05-19T14:47:27.127Z",{"hour12":false})</td><td>5/19/2017, 10:47:27 AM</td></tr>
    <tr><td>toLocaleDateString</td><td>=Date.toLocaleDateString("2017-05-19T14:47:27.127Z")</td><td>5/19/2017</td></tr>
    <tr><td>toTimeString</td><td>=Date.toTimeString("2017-05-19T14:47:27.127Z")</td><td>10:47:27 GMT-0400 (Eastern Daylight Time)</td></tr>
    <tr><td>toUTCString</td><td>=Date.toUTCString("2017-05-19T14:47:27.127Z")</td><td>Fri, 19 May 2017 14:47:27 GMT</td></tr>
    <tr><td>UTC</td><td>=Date.UTC(2017,4,5,14,47,27,127)</td><td>1493995647127</td></tr>

  <tr><th colspan='3' align='left'>Math Functions</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>
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

  <tr><th colspan='3' align='left'>Constants (Also available as Math.&lt;function&gt;)</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>
    <tr><td>e</td><td>=e()</td><td>2.718281828459045</td></tr>
    <tr><td>ln2</td><td>=ln2()</td><td>0.6931471805599453</td></tr>
    <tr><td>ln10</td><td>=ln10()</td><td>2.302585092994046</td></tr>
    <tr><td>log2e</td><td>=log2e()</td><td>1.4426950408889634</td></tr>
    <tr><td>log10e</td><td>=log10e()</td><td>0.4342944819032518</td></tr>
    <tr><td>phi</td><td>=phi()</td><td>1.618033988749895</td></tr>
    <tr><td>pi</td><td>=pi()</td><td>3.141592653589793</td></tr>
    <tr><td>tau</td><td>=tau()</td><td>6.283185307179586</td></tr>

  <tr><th colspan='3' align='left'>Matrix Functions</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>
    <tr><td>Matrix.difference</td><td>=Matrix.difference([[1,2,3]],[[1,2,3]])</td><td>[[0,0,0]]</td></tr>
    <tr><td>Matrix.difference</td><td>=Matrix.difference([[1],[2],[3]],[[1],[2],[3]])</td><td>[[0],[0],[0]]</td></tr>
    <tr><td>Matrix.product</td><td>=Matrix.product([[1,2,3]],[[1],[2],[3]])</td><td>[[14]]</td></tr>
    <tr><td>Matrix.product</td><td>=Matrix.product([[1],[2],[3]],[[1,2,3]])</td><td>[[1,2,3],[2,4,6],[3,6,9]]</td></tr>
    <tr><td>Matrix.sum</td><td>=Matrix.sum([[1,2,3]],[[1,2,3]])</td><td>[[2,4,6]]</td></tr>
    <tr><td>Matrix.sum</td><td>=Matrix.sum([[1],[2],[3]],[[1],[2],[3]])</td><td>[[2],[4],[6]]</td></tr>

  <tr><th colspan='3' align='left'>Physics Functions</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>
    <tr><td>Physics.planks</td><td>=Physics.planks()</td><td>6.626070040000001e+28 m^2 kg / s</td></tr>
    <tr><td>Physics.c</td><td>=Physics.c()</td><td>299.792458 m / s</td></tr>

  <tr><th colspan='3' align='left'>Predicate Functions</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>
    <tr><td>isFunction</td><td>=isFunction(function () {})</td><td>true</td></tr>
    <tr><td>isFunction</td><td>=isFunction(1)</td><td>false</td></tr>
    <tr><td>isMatrix</td><td>=isMatrix([[1]])</td><td>true</td></tr>
    <tr><td>isMatrix</td><td>=isMatrix([1])</td><td>false</td></tr>
    <tr><td>isNumber</td><td>=isNumber(1)</td><td>true</td></tr>
    <tr><td>isNumber</td><td>=isNumber("a")</td><td>false</td></tr>
    <tr><td>isNegative</td><td>=isNegative(-1)</td><td>true</td></tr>
    <tr><td>isNegative</td><td>=isNegative(1)</td><td>false</td></tr>
    <tr><td>isPositive</td><td>=isPositive(1)</td><td>true</td></tr>
    <tr><td>isPositive</td><td>=isPositive(-1)</td><td>false</td></tr>
    <tr><td>isPrime</td><td>=isPrime(3)</td><td>true</td></tr>
    <tr><td>isPrime</td><td>=isPrime(4)</td><td>false</td></tr>
    <tr><td>isVector</td><td>=isVector([1])</td><td>true</td></tr>
    <tr><td>isVector</td><td>=isVector([[1]])</td><td>false</td></tr>

  <tr><th colspan='3' align='left'>Probability Functions (Also available as Math.&lt;function&gt;)</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>
    <tr><td>factorial</td><td>=factorial(4)</td><td>24</td></tr>
    <tr><td>randomFloat</td><td>=Math.random()</td><td>arg => arg>=0 && arg<=1</td></tr>
    <tr><td>randomInt</td><td>=Math.random(1,2)</td><td>arg => arg>=1 && arg<=2</td></tr>

  <tr><th colspan='3' align='left'>Statistical Functions  (Also available as Statistics.&lt;function&gt;)</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>
    <tr><td>average</td><td>=average(1,2,3,3,4,5,6)</td><td>3.4285714285714284</td></tr>
    <tr><td>max</td><td>=max(1,2,3,3,4,5,6)</td><td>6</td></tr>
    <tr><td>min</td><td>=min(1,2,3,3,4,5,6)</td><td>1</td></tr>
    <tr><td>median</td><td>=median(1,2,3,3,4,5,6)</td><td>3</td></tr>
    <tr><td>mode</td><td>=mode(1,2,3,3,4,5,6)</td><td>[3]</td></tr>
    <tr><td>product</td><td>=product(1,2,3,3,4,5,6)</td><td>2160</td></tr>
    <tr><td>sum</td><td>=sum(1,2,3,3,4,5,6)</td><td>24</td></tr>
    <tr><td>stdev</td><td>=stdev(1,2,3,3,4,5,6)</td><td>1.5907898179514348</td></tr>
    <tr><td>variance</td><td>=variance(1,2,3,3,4,5,6)</td><td>2.5306122448979593</td></tr>
    <tr><td>madev</td><td>=madev(1,2,3,3,4,5,6)</td><td>1.3469387755102038</td></tr>

  <tr><th colspan='3' align='left'>String Functions (Also available as String.&lt;function&gt;)</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>
    <tr><td>reverse</td><td>=reverse("abc")</td><td>cba</td></tr>
    <tr><td>split</td><td>=split("a.b.c")</td><td>a.b.c</td></tr>
    <tr><td>substring</td><td>=substring("abcdefg",1,4)</td><td>bcd</td></tr>
    <tr><td>trim</td><td>=trim(" abc ")</td><td>abc</td></tr>
    <tr><td>trimLeft</td><td>=trimLeft(" abc ")</td><td>abc </td></tr>
    <tr><td>trimRight</td><td>=trimRight(" abc ")</td><td> abc</td></tr>
    <tr><td>toLowerCase</td><td>=toLowerCase("LOWER")</td><td>lower</td></tr>
    <tr><td>toUpperCase</td><td>=toUpperCase("upper")</td><td>UPPER</td></tr>

  <tr><th colspan='3' align='left'>Trigonometry Functions (Also available as Math.&lt;function&gt;)</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>
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

  <tr><th colspan='3' align='left'>Unit Functions</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>
    <tr><td>Unit.add</td><td>=Unit.add("1 cm","1 cm")</td><td>2 cm</td></tr>
    <tr><td>Unit.add</td><td>=Unit.add("1 in","2.54 cm")</td><td>2 in</td></tr>
    <tr><td>Unit.divide</td><td>=Unit.divide("1 cm","1 cm")</td><td>1</td></tr>
    <tr><td>Unit.equal</td><td>=Unit.equal("1 cm","1 cm")</td><td>true</td></tr>
    <tr><td>Unit.equal</td><td>=Unit.equal("2.54 cm","1 in")</td><td>true</td></tr>
    <tr><td>Unit.equal</td><td>=Unit.equal("1 in","2.54 cm")</td><td>true</td></tr>
    <tr><td>Unit.max</td><td>=Unit.max("1 in","1 cm")</td><td>1 in</td></tr>
    <tr><td>Unit.min</td><td>=Unit.min("1 in","1 cm")</td><td>1 cm</td></tr>
    <tr><td>Unit.multiply</td><td>=Unit.multiply("1 cm","1 cm")</td><td>1 cm^2</td></tr>
    <tr><td>Unit.subtract</td><td>=Unit.subtract("1 cm","1 cm")</td><td>0 cm</td></tr>
    <tr><td>Unit.subtract</td><td>=Unit.subtract("1 in","2.54 cm")</td><td>0 in</td></tr>

  <tr><th colspan='3' align='left'>Utility Functions (work on Vectors and Matrices)</th></tr><tr><th align='left'>Name</th><th align='left'>Example</th><th align='left'>Result</th></tr>
    <tr><td>equal</td><td>=equal(1,1)</td><td>true</td></tr>

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

2017-05-20 v0.0.11 ALPHA math.js reference was still in package.json. Removed it.

2017-05-19 v0.0.10 ALPHA Removed the use of quotes inside range specifier, i.e. `$(range string)`, so that it is easier to type ranges into spreasheet formulas. The function `range('range string')` is equivalent, except it takes quotes. The same applies to `$summary` and `summary`. Added over 75 unit tests.

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
