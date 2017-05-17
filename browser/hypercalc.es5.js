"use strict";function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _toConsumableArray(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)}var _createClass=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_slicedToArray=function(){function a(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var h,g=a[Symbol.iterator]();!(d=(h=g.next()).done)&&(c.push(h.value),!b||c.length!==b);d=!0);}catch(a){e=!0,f=a}finally{try{!d&&g.return&&g.return()}finally{if(e)throw f}}return c}return function(b,c){if(Array.isArray(b))return b;if(Symbol.iterator in Object(b))return a(b,c);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c||a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){(function(){b.exports=function(a,b){return function(c){return b?c.map(a).reduce(function(a,b){return a.concat(b)},[]).reduce(function(a,c){return b(a,c)}):c.map(a).reduce(function(a,b){return a.concat(b)},[])}}}).call(this)},{}],2:[function(a,b,c){(function(){var a=arguments;b.exports=function(){return this?new(Function.prototype.bind.apply(Date,[null].concat(Array.prototype.slice.call(arguments)))):Date.apply(void 0,arguments)},b.exports.now=function(){return Date.now()},b.exports.parse=function(a){return Date.parse(a)},b.exports.UTC=function(){return Date.UTC.apply(Date,a)};var c=function(c){"function"==typeof Date.prototype[c]&&(b.exports[c]=function(){var a;return(a=Date.prototype[c]).call.apply(a,arguments)})};for(var d in Date.prototype)c(d)}).call(this)},{}],3:[function(a,b,c){(function(){b.exports=function(a,b){return Math.sqrt(a.reduce(function(c,d,e){return c+=Math.pow(b[e]-a[e],2)},0))}}).call(this)},{}],4:[function(a,b,c){(function(){b.exports={},b.exports.distance=a("./distance.js")}).call(this)},{"./distance.js":3}],5:[function(a,b,c){(function(){b.exports=function(a){return Math.pow(a,1/3)}}).call(this)},{}],6:[function(a,b,c){(function(){b.exports=function(a){return a*a*a}}).call(this)},{}],7:[function(a,b,c){(function(){b.exports=function(a){var b=1;for(a=Math.round(a);a;)b*=a--;return b}}).call(this)},{}],8:[function(a,b,c){(function(){b.exports={};var c=Object.getOwnPropertyDescriptors(Math),d=function(c){"function"==typeof Math[c]?b.exports[c]=function(){return Math[c].apply(Math,arguments)}:(b.exports[c.toLowerCase()]=function(){return Math[c]},b.exports[c]=Math[c])};for(var e in c)d(e);b.exports.cbrt=a("./cbrt.js"),b.exports.cube=a("./cube.js"),b.exports.factorial=a("./factorial.js"),b.exports.nthRoot=a("./nthRoot.js"),b.exports.phi=a("./phi.js"),b.exports.power=a("./power.js"),b.exports.sign=a("./sign.js"),b.exports.tau=a("./tau.js"),b.exports.random=a("./random.js"),b.exports.square=a("./square.js")}).call(this)},{"./cbrt.js":5,"./cube.js":6,"./factorial.js":7,"./nthRoot.js":9,"./phi.js":10,"./power.js":11,"./random.js":12,"./sign.js":13,"./square.js":14,"./tau.js":15}],9:[function(a,b,c){(function(){b.exports=function(a){var b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Math.pow(a,1/b)}}).call(this)},{}],10:[function(a,b,c){(function(){b.exports=function(){return(1+Math.sqrt(5))/2}}).call(this)},{}],11:[function(a,b,c){(function(){b.exports=function(a,b){return a^b}}).call(this)},{}],12:[function(a,b,c){(function(){var a=function(b,c){return Math.floor(Math.random()*(c-b+1))+b};b.exports=function(b,c){return arguments.length>=2?a(b,c):Math.random()}}).call(this)},{}],13:[function(a,b,c){(function(){var c=a("../isNumber.js");b.exports=function(a){return c(a)?a>0?1:0===a?0:-1:void 0}}).call(this)},{"../isNumber.js":43}],14:[function(a,b,c){(function(){b.exports=function(a){return a*a}}).call(this)},{}],15:[function(a,b,c){(function(){b.exports=function(){return 2*Math.PI}}).call(this)},{}],16:[function(b,c,d){(function(){function e(a,b){return a.length===b.length&&a.every(function(a,c){return a===b[c]})}function f(a){if(!Array.isArray(a))return[];var b=a.reduce(function(a,b){return!!e(a,f(b))&&a},f(a[0]));return b&&[a.length].concat(b)}function g(){}var d=b("../Vector/index.js");g.sum=function(){return[].slice.call(arguments).reduce(function(a,b){for(var c=0;c<a.length;c++)a[c]=d.sum(a[c],Array.isArray(b)?b[c]:b);return a})},g.dimensions=f,g.invert=function(b){function c(a){for(var b,c=a.length,d=[],e=0;e<c;e++)d[e]=[];for(e=0;e<c;e++)for(var f=0;f<c;f++)d[e][f]=0,e==f&&(d[e][f]=1);for(var g=0;g<c;g++){b=a[g][g];for(var f=0;f<c;f++)a[g][f]/=b,d[g][f]/=b;for(var e=g+1;e<c;e++){b=a[e][g];for(var f=0;f<c;f++)a[e][f]-=a[g][f]*b,d[e][f]-=d[g][f]*b}}for(var g=c-1;g>0;g--)for(var e=g-1;e>=0;e--){b=a[e][g];for(var f=0;f<c;f++)a[e][f]-=a[g][f]*b,d[e][f]-=d[g][f]*b}for(var e=0;e<c;e++)for(var f=0;f<c;f++)a[e][f]=d[e][f];return a}return c(a)},g.power=g.pow=function(a,b){for(;b-- >1;)a=g.product(a,a.slice(0));return a},g.product=function(a,b){return a.map(function(a,c){return g.transpose(b.slice(0)).map(function(b){return d.dotProduct(a.slice(0),b.slice(0))})})},g.difference=function(){return[].slice.call(arguments).reduce(function(a,b){for(var c=0;c<a.length;c++)a[c]=d.difference(a[c],Array.isArray(b)?b[c]:b);return a})},g.transpose=function(a){return a[0].map(function(b,c){return a.map(function(a,b){return a[c]})})},c.exports=g}).call(this)},{"../Vector/index.js":31}],17:[function(a,b,c){(function(){b.exports=function(){return 1.6021766208}}).call(this)},{}],18:[function(a,b,c){(function(){b.exports={},b.exports.c=a("./speedOfLight.js"),b.exports.e=a("./elementaryCharge.js"),b.exports.planks=b.exports.h=a("./planks.js")}).call(this)},{"./elementaryCharge.js":17,"./planks.js":19,"./speedOfLight.js":20}],19:[function(a,b,c){(function(){b.exports=function(){return 6.62607004*Math.pow(10,34)}}).call(this)},{}],20:[function(a,b,c){(function(){b.exports=function(){return 299792458}}).call(this)},{}],21:[function(a,b,c){(function(){b.exports={},b.exports.average=a("../average.js"),b.exports.count=a("../count.js"),b.exports.madev=a("./madev.js"),b.exports.max=a("./max.js"),b.exports.median=a("./median.js"),b.exports.min=a("./min.js"),b.exports.mode=a("./mode.js"),b.exports.product=a("../product.js"),b.exports.stdev=a("./stdev.js"),b.exports.sum=a("../sum.js"),b.exports.variance=a("./variance.js")}).call(this)},{"../average.js":33,"../count.js":34,"../product.js":49,"../sum.js":52,"./madev.js":22,"./max.js":23,"./median.js":24,"./min.js":25,"./mode.js":26,"./stdev.js":27,"./variance.js":28}],22:[function(a,b,c){(function(){var c=a("../average"),d=a("../flatten.js");a("../sum.js");b.exports=function(){var a=d([].slice.call(arguments),!0),b=c(a);return c(a.map(function(a){return Math.abs(a-b)}))}}).call(this)},{"../average":33,"../flatten.js":38,"../sum.js":52}],23:[function(a,b,c){(function(){var c=a("../Unit/index.js"),d=a("../flattenReduce.js");b.exports=function(){return 0===arguments.length?-1/0:d([].slice.call(arguments),c.max,!0)}}).call(this)},{"../Unit/index.js":30,"../flattenReduce.js":39}],24:[function(a,b,c){(function(){function d(a){if(!a.length)return 0;var b=a.sort(function(a,b){return a-b}),c=Math.floor(b.length/2);return b.length%2==0?(b[c]+b[c-1])/2:b[c]}var c=a("../../getArgs.js");b.exports=function(){var a=void 0,b=void 0,e=c([].slice.call(arguments,0)),f=_slicedToArray(e,2);return a=f[0],b=f[1],1===a.length&&Array.isArray(a[0])&&(a=a[0]),b&&b.if&&(a=a.filter(b.if)),d(a)}}).call(this)},{"../../getArgs.js":55}],25:[function(a,b,c){(function(){var c=a("../Unit/index.js"),d=a("../flattenReduce.js");b.exports=function(){return 0===arguments.length?1/0:d([].slice.call(arguments),c.min,!0)}}).call(this)},{"../Unit/index.js":30,"../flattenReduce.js":39}],26:[function(a,b,c){(function(){function d(a){if(!a.length)return[];var b={},c=[],d=0,e=!0,f=!1,g=void 0;try{for(var i,h=a[Symbol.iterator]();!(e=(i=h.next()).done);e=!0){var j=i.value,k=j.valueOf();b[k]?b[k]++:b[k]=1,b[k]>d?(c=[j],d=b[k]):b[k]===d&&(c.push(j),d=b[k])}}catch(a){f=!0,g=a}finally{try{!e&&h.return&&h.return()}finally{if(f)throw g}}return c}var c=a("../../getArgs.js");b.exports=function(){var a=void 0,b=void 0,e=c([].slice.call(arguments,0)),f=_slicedToArray(e,2);return a=f[0],b=f[1],1===a.length&&Array.isArray(a[0])&&(a=a[0]),b&&b.if&&(a=a.filter(b.if)),d(a)}}).call(this)},{"../../getArgs.js":55}],27:[function(a,b,c){(function(){var c=a("../average"),d=a("../flatten.js"),e=a("./variance.js");b.exports=function(){var a=d([].slice.call(arguments),!0);c(a);return a.length?Math.sqrt(e(a)):0}}).call(this)},{"../average":33,"../flatten.js":38,"./variance.js":28}],28:[function(a,b,c){(function(){var c=a("../average"),d=a("../flatten.js");a("../sum.js");b.exports=function(){var a=d([].slice.call(arguments),!0),b=c(a);return a.reduce(function(a,c){return a+=Math.pow(c-b,2)},0)/a.length}}).call(this)},{"../average":33,"../flatten.js":38,"../sum.js":52}],29:[function(a,b,c){(function(){b.exports=function(){return this?new(Function.prototype.bind.apply(String,[null].concat(Array.prototype.slice.call(arguments)))):String.apply(void 0,arguments)};var a=Object.getOwnPropertyDescriptors(String.prototype),c=function(c){"function"==typeof String.prototype[c]&&(b.exports[c]=function(){var a;return(a=String.prototype[c]).call.apply(a,arguments)})};for(var d in a)c(d)}).call(this)},{}],30:[function(a,b,c){(function(){function a(a,b,c){for(var d=a.baseUnits.split("/"),f=d[0].split(" ").filter(function(a){return"1"!=a&&""!==a}),g=d[1]?d[1].split(" ").filter(function(a){return"1"!=a&&""!==a}):[],h=b.split("/"),i={numerator:(h[c?1:0]||"").split(" ").filter(function(a){return"1"!=a&&""!==a}).reduce(function(a,b){var c=b.split("^"),d=c[0],e=c[1]?parseFloat(c[1]):1;return a[d]=e,a},{}),denominator:(h[c?0:1]||"").split(" ").filter(function(a){return"1"!=a&&""!=a}).reduce(function(a,b){var c=b.split("^"),d=c[0],e=c[1]?parseFloat(c[1]):1;return a[d]=e,a},{})},j={},k=0;k<f.length;k++){var l=f[k].split("^");j[l[0]]=!0,l[1]=(l[1]?parseFloat(l[1]):1)+(i.numerator[l[0]]||0)-(i.denominator[l[0]]||0),0===l[1]?f.splice(k,1):1===l[1]?f[k]=l[0]:f[k]=l.join("^")}for(var m=0;m<g.length;m++){var n=g[m].split("^");j[n[0]]=!0,n[1]=(n[1]?parseFloat(n[1]):1)+(i.denominator[n[0]]||0)-(i.numerator[n[0]]||0),0===n[1]?g.splice(m,1):1===n[1]?g[m]=n[0]:g[m]=n.join("^")}for(var o in i.denominator){var p=i.denominator[o];j[o]||g.push(p>1?o+"^"+p:o)}g.sort();for(var q in i.numerator){var r=i.numerator[q];j[q]||f.push(r>1?q+"^"+r:q)}f.sort(),a.baseUnits=(f.length>0?f.join(" "):g.length>0?1:"")+(g.length>0?" / "+g.join(" "):"")}function c(a){var b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object.create(d.prototype);if(a&&"object"===(void 0===a?"undefined":_typeof(a))&&a instanceof d){for(var c=["value","units","baseUnits"],e=0;e<c.length;e++){var f=c[e];b[f]=a[f]}return Object.defineProperty(b,"constructor",{enumerable:!1,configurable:!0,writable:!0,value:d}),b}return b.value=a,b.units={},b.baseUnits="",Object.defineProperty(b,"constructor",{enumerable:!1,configurable:!0,writable:!0,value:d}),b}function d(a,b){var e=void 0===a?"undefined":_typeof(a);if(!(this&&this instanceof d)&&a&&"object"===e&&a instanceof d)return a;if("string"===e){if(!(this&&this instanceof d))return new d(a,b);var f=d.parse(a);for(var g in f)this[g]=f[g]}else{if("number"!==e)throw new TypeError("Can't create Unit from "+JSON.stringify(a));if(!(this&&this instanceof d))return new d(a,b);c(a,this)}if(b){var h=d.getBase(b);h!==b&&(this.value*=d.getConversion(h,b)),this.baseUnits=h,b===this.baseUnits||(this.units[b]=this.baseUnits)}Object.freeze(this)}d.conversions={cm:{in:2.54},ms:{sec:1e3}},d.add=function(a,b){if("number"==typeof a&&"number"==typeof b)return a+b;if(a=c(d(a)),b=d(b),a.baseUnits!==b.baseUnits&&""!==b.baseUnits)throw new TypeError("Incompatible "+a+" + "+b);return a.value+=b.value,Object.freeze(a)},d.as=function(a,b){"string"==typeof a&&(a=d.parse(a));var c=d.getConversion(a.baseUnits,b);if("number"==typeof c)return a.value*c},d.divide=function(b,e){if("number"==typeof b&&"number"==typeof e)return b/e;if(b=c(d(b)),e=d(e),b.baseUnits!==e.baseUnits&&!d.isSimple(e))throw new TypeError("Incompatible "+b+" / "+e);return b.value/=e.value,e.baseUnits&&e.baseUnits.length>0&&a(b,e.baseUnits,!0),Object.freeze(b)},d.isSimple=function(a){return a instanceof d&&-1===a.baseUnits.indexOf(" ")},d.multiply=function(b,e){if("number"==typeof b&&"number"==typeof e)return b*e;if(b=c(d(b)),e=d(e),b.baseUnits!==e.baseUnits&&!d.isSimple(e))throw new TypeError("Incompatible "+b+" * "+e);return b.value*=e.value,e.baseUnits&&e.baseUnits.length>0&&a(b,e.baseUnits),Object.freeze(b)},d.pow=function(b,e){return"number"==typeof b?Math.pow(b,e):(b=c(d(b)),b.value=Math.pow(b.value,e),a(b,b.baseUnits),Object.freeze(b))},d.subtract=function(a,b){if("number"==typeof a&&"number"==typeof b)return a-b;if(a=c(d(a)),b=d(b),a.constructor=d,a.baseUnits!==b.baseUnits&&""!==b.baseUnits)throw new TypeError("Incompatible "+a+" - "+b);return a.value-=b.value,Object.freeze(a)},d.to=function(a,b){var e=b.split(" ");a=c(d(a));var f=!0,g=!1,h=void 0;try{for(var j,i=e[Symbol.iterator]();!(f=(j=i.next()).done);f=!0){var k=j.value;if("/"!==k){var l=d.getBase(k);for(var m in a.units)m!==k&&a.units[m]===l&&(delete a.units[m],k!==l&&(a.units[k]=l))}}}catch(a){g=!0,h=a}finally{try{!f&&i.return&&i.return()}finally{if(g)throw h}}return Object.freeze(a)},d.toJSON=function(a){return a.valueOf()},d.valueOf=function(a){var b=a.baseUnits,c=a.value,e=b.split(" ");for(var f in a.units){var g=a.units[f];if(b.indexOf(g)>=0){var h=!0,i=!1,j=void 0;try{for(var l,k=e[Symbol.iterator]();!(h=(l=k.next()).done);h=!0){var m=l.value,n=1;if(0===m.indexOf(g)){var o=m.split("^");o[0]===g&&o[1]&&(n=parseFloat(o[1]))}c/=Math.pow(d.getConversion(g,f),n),b=b.replace(new RegExp(g,"g"),f)}}catch(a){i=!0,j=a}finally{try{!h&&k.return&&k.return()}finally{if(i)throw j}}}}return c+" "+b};var e=function(b){"function"==typeof d[b]&&(d.prototype[b]=function(){return d[b].apply(d,[this].concat(Array.prototype.slice.call(arguments)))})};for(var f in d)e(f);d.getBase=function(a){for(var b in d.conversions)if(b===a||"number"==typeof d.conversions[b][a])return b},d.getConversion=function(a,b){if(a===b)return 1;var c=d.getBase(a);return c&&d.conversions[c][b]?d.conversions[c][b]:(c=d.getBase(b),c&&d.conversions[c][a]?1/d.conversions[c][a]:void 0)},d.max=function(a,b){return"number"==typeof a&&"number"==typeof b?Math.max(a,b):(a=c(d(a)),b=d(b),a.value>b.value?a:b)},d.min=function(a,b){return"number"==typeof a&&"number"==typeof b?Math.min(a,b):(a=c(d(a)),b=d(b),a.value<b.value?a:b)},d.parse=function(a){var b=c(),e=a.split(" ");b.value=parseFloat(e[0]);for(var f=1;f<e.length;f++){var g=e[f];if("/"!==g){var h=g.split("^"),i=d.getBase(h[0]);g!==i&&(b.units[h[0]]=i,b.value*=d.conversions[i][h[0]]),b.baseUnits+=(b.baseUnits.length>0?" ":"")+i}else b.baseUnits+=" / "}return Object.freeze(b)},b.exports=d}).call(this)},{}],31:[function(a,b,c){(function(){function k(){var a=new Proxy(new(Function.prototype.bind.apply(Array,[null].concat(Array.prototype.slice.call(arguments)))),{get:function(b,c){var d=Object.getOwnPropertyDescriptor(b,c);return d?d.value:(d=Object.getOwnPropertyDescriptor(k.prototype,c),d?d.value:b[c])},set:function(b,c,d){return"number"!=typeof arg?void error("set: Vectors can only contain numbers!"):(b[c]=d,!0)},deleteProperty:function(b,c){return Object.defineProperty(b,c,{value:void 0}),!0}});return[].forEach(function(b){return delete a[b]}),a}var c=a("../add.js"),d=a("../divide.js"),e=a("../multiply.js"),f=a("../pow.js"),g=a("../subtract.js"),h=a("../Unit/index.js");k.prototype=[],["push","unshift","splice"].forEach(function(a){k.prototype[a]=function(){var b;return[].slice.call(arguments).some(function(a){return Array.isArray(a)})?void error(a+": Vectors can only have one dimension!"):(b=[].push).call.apply(b,[this].concat(Array.prototype.slice.call(arguments)))}}),k.prototype.concat=function(){var a;return[].slice.call(arguments).some(function(a){return Array.isArray(a)&&a.some(function(a){return Array.isArray(a)})})?void error("concat: Vectors can only have one dimension!"):(a=[].concat).call.apply(a,[this].concat(Array.prototype.slice.call(arguments)))},k.reduce=function(a,b){return a.reduce(function(a,c){for(var d=0;d<a.length;d++)a[d]=b(a[d],Array.isArray(c)?c[d]:c);return a})},k.map=function(a,b){return a.map(b)},k.sum=function(){return k.reduce([].slice.call(arguments),c)},k.average=function(){var a=[].slice.call(arguments);return k.reduce(a,c).map(function(b){return h.divide(b,a.length)})},k.product=k.crossProduct=function(a,b){return 2===a.length?a[0]*b[1]-a[1]*b[0]:[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]]},k.scalarQuotient=function(){return k.reduce([].slice.call(arguments),d)},k.dotProduct=function(){return k.reduce([].slice.call(arguments),e).reduce(c)},k.scalarProduct=function(){return k.reduce([].slice.call(arguments),e)},k.pow=function(){return k.reduce([].slice.call(arguments),f)},k.difference=function(){return k.reduce([].slice.call(arguments),g)};var l=function(b){"function"==typeof k[b]&&(k.prototype[b]=function(){return k[b].apply(k,[this].concat(Array.prototype.slice.call(arguments)))})};for(var m in k)l(m);b.exports=k}).call(this)},{"../Unit/index.js":30,"../add.js":32,"../divide.js":36,"../multiply.js":47,"../pow.js":48,"../subtract.js":51}],32:[function(a,b,c){(function(){var c=a("./Unit/index.js");b.exports=function(a,b){return c.add(a,b)}}).call(this)},{"./Unit/index.js":30}],33:[function(a,b,c){(function(){var c=a("./add.js"),d=a("./flattenReduce.js"),e=a("./divide.js");b.exports=function(){var a=1;return 0===arguments.length?NaN:e(d([].slice.call(arguments),function(b,d){return a++,c(b,d)},!0),a)}}).call(this)},{"./add.js":32,"./divide.js":36,"./flattenReduce.js":39}],34:[function(a,b,c){(function(){flattenReduce=a("./flattenReduce.js"),b.exports=function(){var a=1;return 0===arguments.length?0:(flattenReduce([].slice.call(arguments),function(b,c){a++},!0),a)}}).call(this)},{"./flattenReduce.js":39}],35:[function(a,b,c){(function(){function a(a,b){return a.length===b.length&&a.every(function(a,c){return a===b[c]})}function c(b){if(!Array.isArray(b))return[];var d=b.reduce(function(b,d){return!!a(b,c(d))&&b},c(b[0]));return d&&[b.length].concat(d)}b.exports=c}).call(this)},{}],36:[function(a,b,c){(function(){var c=a("./Unit/index.js");b.exports=function(a,b){return c.divide(a,b)}}).call(this)},{"./Unit/index.js":30}],37:[function(a,b,c){(function(){var a=function(b,d){return b===d||Array.isArray(b)&&Array.isArray(d)&&c(b,d)},c=function(c,d){return c.length===d.length&&c.every(function(b,c){return a(b,d[c])})};b.exports=a}).call(this)},{}],38:[function(a,b,c){(function(){var c=a("../concatMapReduce.js"),d=function(b){return b},e=c(d),f=c(function(a){return Array.isArray(a)?f(a):a});b.exports=function(a,b){return(b?f:e)(a)}}).call(this)},{"../concatMapReduce.js":1}],39:[function(a,b,c){(function(){var c=a("../concatMapReduce.js"),d=function(b,d){return c(id,d)(b)},e=function a(b,d){return c(function(b){return Array.isArray(b)?a(b):b},d)(b)};b.exports=function(a,b,c){return(c?e:d)(a,b)}}).call(this)},{"../concatMapReduce.js":1}],40:[function(a,b,c){(function(){b.exports=function(a){return"function"==typeof a}}).call(this)},{}],41:[function(a,b,c){(function(){b.exports=function(a){return Array.isArray(a)&&Array.isArray(a[0])&&Array.isArray(a[a.length-1])}}).call(this)},{}],42:[function(a,b,c){(function(){b.exports=function(a){return a<0}}).call(this)},{}],43:[function(a,b,c){(function(){b.exports=function(a){return"number"==typeof a}}).call(this)},{}],44:[function(a,b,c){(function(){b.exports=function(a){return a>0}}).call(this)},{}],45:[function(a,b,c){(function(){b.exports=function(a){for(var b=2,c=Math.sqrt(a);b<=c;b++)if(a%b==0)return!1;return 1!==a}}).call(this)},{}],46:[function(a,b,c){(function(){b.exports=function(a){return Array.isArray(a)&&!Array.isArray(a[0])&&!Array.isArray(a[a.length-1])}}).call(this)},{}],47:[function(a,b,c){(function(){var c=a("./Unit/index.js");b.exports=function(a,b){return c.multiply(a,b)}}).call(this)},{"./Unit/index.js":30}],48:[function(a,b,c){(function(){var c=a("./Unit/index.js");b.exports=function(a,b){return c.pow(a,b)}}).call(this)},{"./Unit/index.js":30}],49:[function(a,b,c){(function(){var c=a("./add.js"),d=a("./flattenReduce.js"),e=a("./multiply.js");b.exports=function(){return c(d([].slice.call(arguments),e,!0),0)}}).call(this)},{"./add.js":32,"./flattenReduce.js":39,"./multiply.js":47}],50:[function(a,b,c){(function(){var c=a("./add.js"),d=a("./divide.js"),e=a("./flattenReduce.js");b.exports=function(){return c(e([].slice.call(arguments),d,!0),0)}}).call(this)},{"./add.js":32,"./divide.js":36,"./flattenReduce.js":39}],51:[function(a,b,c){(function(){var c=a("./Unit/index.js");b.exports=function(a,b){return c.subtract(a,b)}}).call(this)},{"./Unit/index.js":30}],52:[function(a,b,c){(function(){var c=a("./add.js"),d=a("./flattenReduce.js");b.exports=function(){return c(d([].slice.call(arguments),c,!0),0)}}).call(this)},{"./add.js":32,"./flattenReduce.js":39}],53:[function(a,b,c){(function(){b.exports=function(a){var b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Function("value","return `"+(b.template?b.template:"${value}")+"`")(a)}}).call(this)},{}],54:[function(a,b,c){(function(){b.exports=function(a){var b=void 0===a?"undefined":_typeof(a);return null===a||void 0===a?"undefined":Array.isArray(a)?"Array":"object"===b?a.constructor.name:b}}).call(this)},{}],55:[function(a,b,c){(function(){function a(b){a.VARGS=[];var c=b[b.length-1],d=c&&"object"===(void 0===c?"undefined":_typeof(c))&&!Array.isArray(c)?c:null;!d||(b=b.slice(0,b.length-1));for(var e=[],f=0;f<b.length;f++)if(b[f]===a.VARGS){var g=a.VARGS.shift();if(Array.isArray(g)){var h=!0,i=!1,j=void 0;try{for(var l,k=g[Symbol.iterator]();!(h=(l=k.next()).done);h=!0){var m=l.value;e.push(m)}}catch(a){i=!0,j=a}finally{try{!h&&k.return&&k.return()}finally{if(i)throw j}}}else results.push(g)}else e.push(b[f]);return[e,d]}b.exports=a}).call(this)},{}],56:[function(a,b,c){(function(){function g(a){a=Array.isArray(a)?a.slice(0):[].slice.call(arguments,0);var b=mean(a),c=stdev(a);return a.map(function(a){return(a-b)/c})}function i(){return{boolean:{true:1,false:0},string:0,undefined:0,null:0,Array:0}}function j(a,b){if(b){var c=void 0===a?"undefined":_typeof(a);if(b.replace){if(b.replace[c]&&"object"===_typeof(b.replace[c])&&void 0!==b.replace[c][a])return b.replace[c][a];if(void 0!==b.replace[c])return b.replace[c]}if(void 0!==b.NA&&"undefined"===c)return b.NA;if(void 0!==b.NaN&&"number"!==c)return b.NaN}return a}function l(a){var b=a[a.length-1],c=b&&"object"===(void 0===b?"undefined":_typeof(b))&&!Array.isArray(b)?b:null;!c||(a=a.slice(0,a.length-1));for(var e=[],f=0;f<a.length;f++)if(a[f]===k){var g=k.shift();if(Array.isArray(g)){var h=!0,i=!1,j=void 0;try{for(var m,l=g[Symbol.iterator]();!(h=(m=l.next()).done);h=!0){var n=m.value;e.push(n)}}catch(a){i=!0,j=a}finally{try{!h&&l.return&&l.return()}finally{if(i)throw j}}}else results.push(g)}else e.push(a[f]);return k.splice(0,k.length),[e,c]}function m(a,b){var c=a.split("."),d=b.split(".");return c.length===d.length&&c.every(function(a,b){var c=a.split(":");return 1===c.length?"*"===c[0]||c[0]===d[b]:"*"===c[0]?"*"===c[1]||d[b]<=c[1]:d[b]>=c[0]&&("*"===c[1]||d[b]<=c[1])})}function o(){function f(a,b,d){var e=this&&this instanceof f,g=f.cells[a];return e?(Object.defineProperty(this,"engine",{enumerable:!1,configurable:!0,writable:!0,value:c}),this.coordinates=a,this.options={},this.computed=null,Object.assign(this.options,d),Object.defineProperty(this,"references",{enumerable:!1,configurable:!0,writable:!0,value:{}}),this.data=b,Object.defineProperty(this,"calculating",{writable:!0}),Object.defineProperty(this,"value",{enumerable:!1,configurable:!0,get:function(){return this.valueOf()},set:function(b){return"string"==typeof b&&b==parseFloat(b)&&(b=parseFloat(b)),this.data=b,this.compile().calc(),!0}}),this.compile().calc(),this):g?1===arguments.length?g:(g.value=b,!d||Object.assign(g.options,d),g):new f(a,b,d)}var b=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=this,d=void 0;c.options=Object.assign({},b),c.calculating=0,Object.defineProperty(c,"oncalculated",{enumerable:!1,configurable:!0,writable:!0,value:b.oncalculated}),n.Date=a("./functions/Date/index.js"),n.Geometry=a("./functions/Geometry/index.js"),n.Math=a("./functions/Math/index.js"),n.Matrix=a("./functions/Matrix/index.js"),n.Physics=a("./functions/Physics/index.js"),n.Statistics=a("./functions/Statistics/index.js"),n.String=a("./functions/String/index.js"),n.Unit=a("./functions/Unit/index.js"),n.Vector=a("./functions/Vector/index.js"),n.add=a("./functions/add.js"),n.average=a("./functions/average.js"),n.dimensions=a("./functions/dimensions.js"),n.divide=a("./functions/divide.js"),n.equal=a("./functions/equal.js"),n.isFunction=a("./functions/isFunction.js"),n.isMatrix=a("./functions/isMatrix.js"),n.isNegative=a("./functions/isNegative.js"),n.isNumeric=n.isNumber=a("./functions/isNumber.js"),n.isPositive=a("./functions/isPositive.js"),n.isPrime=a("./functions/isPrime.js"),n.isVector=a("./functions/isVector.js"),n.multiply=a("./functions/multiply.js"),n.product=a("./functions/product.js"),n.power=n.pow=a("./functions/pow.js"),n.quotient=a("./functions/quotient.js"),n.subtract=a("./functions/subtract.js"),n.sum=a("./functions/sum.js"),n.text=a("./functions/text.js"),n.type=a("./functions/type.js"),n.$=function(a,b){var c=[],d=n.cells(a),e=!0,f=!1,g=void 0;try{for(var i,h=d[Symbol.iterator]();!(e=(i=h.next()).done);e=!0){var j=i.value;b&&b.if?!b.if(j.value)||c.push(j.value):c.push(j.value)}}catch(a){f=!0,g=a}finally{try{!e&&h.return&&h.return()}finally{if(f)throw g}}return c},n.$summary=function(a){var b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{result:"array",values:["min","average","max"]},c="array"===b.result?[]:{},d=[],e=n.cells(a),f=!0,g=!1,h=void 0;try{for(var j,i=e[Symbol.iterator]();!(f=(j=i.next()).done);f=!0){var k=j.value;b&&b.if?!b.if(k.value)||d.push(k.value):d.push(k.value)}}catch(a){g=!0,h=a}finally{try{!f&&i.return&&i.return()}finally{if(g)throw h}}var l=!0,m=!1,o=void 0;try{for(var q,p=b.values[Symbol.iterator]();!(l=(q=p.next()).done);l=!0){var r=q.value,s=n[r](d);"array"===b.result?c.push(s):c[r]=s}}catch(a){m=!0,o=a}finally{try{!l&&p.return&&p.return()}finally{if(m)throw o}}return c},n.interval=function(a,b){var c=d;return setInterval(function(){c.calc()},a),"="+b},n.destructure=n.varg=function(a){return k.push(a),k},n.values=n.$a=function(a,b){var c=[],d=n.cells(a);b=Object.assign({replace:i()},b||{});var e=!0,f=!1,g=void 0;try{for(var k,h=d[Symbol.iterator]();!(e=(k=h.next()).done);e=!0){var l=k.value;b&&b.if?!b.if(l.value)||c.push(j(l.value,b)):c.push(j(l.value,b))}}catch(a){f=!0,g=a}finally{try{!e&&h.return&&h.return()}finally{if(f)throw g}}return c},n.cells=function(a){if(d){var b=f.observers[a];b||(b={},f.observers[a]=b),b[d.coordinates]=!0}return f.find(a,f.cellIndex)},n.averagea=function(){var a=void 0,b=void 0,c=l([].slice.call(arguments,0)),d=_slicedToArray(c,2);return a=d[0],b=d[1],Array.isArray(a[0])&&(a=a[0]),b&&b.if&&(a=a.filter(b.if)),0===a.length?0:(b=Object.assign({replace:i()},b||{}),a.reduce(function(a,c){return a+j(c,b)},0)/a.length)},n.counta=function(){var a=void 0,b=void 0,c=l([].slice.call(arguments,0)),d=_slicedToArray(c,2);return a=d[0],b=d[1],b&&b.if&&(a=a.filter(b.if)),a=a.filter(function(a){return null!==a&&void 0!==a}),a.length},n.extend=function(){var a=d.coordinates.split("."),b=d.engine.sheets[a[0]],c=parseInt(a[2]),e=d.data,g=parseInt(a[1]),h=g,i=c,j=void 0,m=l([].slice.call(arguments,0)),n=_slicedToArray(m,2);return j=n[0],n[1],d.compiled=function(){for(var a=0;a<j.length;a++)for(var d=0;d<j[a].length;d++,h++){var e=j[a][d];Array.isArray(e)&&(i=Math.max(i,c+(e.length-1)))}for(var k=c;k<=i;k++)b.createRow(k,new Array(h-g));for(var l=g,m=0;m<j.length;m++)for(var n=0,o=c;n<j[m].length;n++,l++){var p=j[m][n];if(Array.isArray(p))for(var q=0;q<p.length;q++)f(b.name+"."+l+"."+(o+q),p[q]);else f(b.name+"."+l+"."+o,p)}this.computed=Array.isArray(j[0][0])?j[0][0][0]:j[0][0]},d.data=e,d.compiled(),d.computed},n.maxa=function(){var a=void 0,b=void 0,c=l([].slice.call(arguments,0)),d=_slicedToArray(c,2);return a=d[0],b=d[1],Array.isArray(a[0])&&(a=a[0]),b&&b.if&&(a=a.filter(b.if)),0===a.length?-1/0:(b=Object.assign({replace:i()},b||{}),h(a,function(a,b,c){return c[b]=j(a,{replace:i()})}),a.reduce(function(a,b){return Math.max(a,b)}))},n.mina=function(){var a=void 0,b=void 0,c=l([].slice.call(arguments,0)),d=_slicedToArray(c,2);return a=d[0],b=d[1],Array.isArray(a[0])&&(a=a[0]),b&&b.if&&(a=a.filter(b.if)),0===a.length?1/0:(b=Object.assign({replace:i()},b||{}),h(a,function(a,b,c){return c[b]=j(a,{replace:i()})}),a.reduce(function(a,b){return Math.min(a,b)}))},n.producta=function(){var a=void 0,b=void 0,c=l([].slice.call(arguments,0)),d=_slicedToArray(c,2);return a=d[0],b=d[1],b&&b.if&&(a=a.filter(b.if)),0===a.length?0:(b=Object.assign({boolean:{true:1,false:0},string:1,undefined:1,null:1,Array:1},b||{}),h(a,function(a,c,d){return d[c]=j(a,{replace:b})}),n.product.apply(n,_toConsumableArray(a)))},n.quotienta=function(){var a=void 0,b=void 0,c=l([].slice.call(arguments,0)),d=_slicedToArray(c,2);return a=d[0],b=d[1],b=Object.assign({replace:{boolean:1,string:1,undefined:1}},b||{}),b.if&&(a=a.filter(b.if)),0===a.length?1/0:(b=Object.assign({boolean:{true:1,false:0},string:1,undefined:1,null:1,Array:1},b||{}),h(a,function(a,c,d){return d[c]=j(a,{replace:b})}),n.quotient.apply(n,_toConsumableArray(a)))},n.remaindera=function(){var a=void 0,b=void 0,c=l([].slice.call(arguments,0)),d=_slicedToArray(c,2);return a=d[0],b=d[1],b=Object.assign({replace:i()},b||{}),b&&b.if&&(a=a.filter(b.if)),a.reduce(function(a,c){return a-j(c,b)},0)},n.suma=function(){var a=void 0,b=void 0,c=l([].slice.call(arguments,0)),d=_slicedToArray(c,2);return a=d[0],b=d[1],b=Object.assign({replace:i()},b||{}),b&&b.if&&(a=a.filter(b.if)),a.reduce(function(a,c){return a+j(c,b)},0)},n.zscores=function(){var a=void 0,b=void 0,c=l([].slice.call(arguments,0)),d=_slicedToArray(c,2);return a=d[0],b=d[1],Array.isArray(a[0])&&(a=a[0]),a=a.filter(function(a){return"number"==typeof a}),b&&b.if&&(a=a.filter(b.if)),0===a.length?0:g(a)},c.functions=new Proxy(n,{set:function(b,c,d){if("function"!=typeof d)throw new Error("Hypercalc custom function must be a function: ",d);return b[c]=d,!0}}),f.prototype.addReferences=function(){for(var a=0;a<arguments.length;a++)arguments[a]===this||(this.references[arguments[a].coordinates]=!0)},f.prototype.deleteReferences=function(){for(var a=0;a<arguments.length;a++)delete this.references[arguments[a].coordinates]},f.prototype.clearReferences=function(){this.references={}},f.prototype.compile=function(){delete this.compiled,this.index(),"string"==typeof this.data&&0===this.data.indexOf("=")&&Object.defineProperty(this,"compiled",{enumerable:!1,configurable:!0,writable:!0,value:new Function("functions","return function() { with(functions) { return "+this.data.substring(1)+"; }}")(n)});for(var a in f.observers){var b=[];for(var c in f.observers[a])b.push(f.cells[c]);m(a,this.coordinates)&&this.addReferences.apply(this,b)}return this},f.prototype.calc=function(){function c(){if(b.compiled){var a=d;d=b;var c=b.compiled();"string"==typeof c&&0===c.indexOf("=")&&(c=new Function("return "+c.substring(1))()()),b.computed=c,d=a}!b.options.oncalculated||b.options.oncalculated(b),b.engine.calculating--,b.calculating=null,!b.engine.calculating&&b.engine.oncalculated&&b.engine.oncalculated(b.engine)}var a=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],b=this;if(b.calculating||(b.calculating=setTimeout(c),b.engine.calculating++),a)for(var e in b.references)f.cells[e].calc()},f.prototype.index=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f.cellIndex;a===f.cellIndex?f.cells[this.coordinates]=this:a===f.observerIndex&&(f.observers[this.data]=this);for(var b=this.coordinates.split("."),c=a.nodes,d=0;d<b.length;d++)c[b[d]]||(c[b[d]]={nodes:{}}),d===b.length-1?c[b[d]].coordinates=this.coordinates:c=c[b[d]].nodes},f.prototype.valueOf=function(){return!d||this.addReferences(d),this.compiled?this.computed:this.data},f.find=function(a){function c(a,b,d,e){if(b){if(d===a.length){var g=f.cells[b.coordinates];return void(!g||e.push(g))}b=b.nodes;var h=a[d],i=h.includes(":")?":":h.includes("|")?"|":null;if(i){var r=h.split(i),s=!1;if(":"===i)for(var t=0;t<r.length;t++)parseInt(r[t])==r[t]&&(r[t]=parseInt(r[t]),s=!0);var u=Object.keys(b),v=d+1,w=!0,x=!1,y=void 0;try{for(var B,z=function(){var f=B.value;":"===i?(f=s&&parseInt(f)==f?parseInt(f):f,("*"===r[0]||f>=r[0])&&f<=r[1]&&c(a,b[f],v,e)):r.some(function(a){return a==f})&&c(a,b[f],v,e)},A=u[Symbol.iterator]();!(w=(B=A.next()).done);w=!0)z()}catch(a){x=!0,y=a}finally{try{!w&&A.return&&A.return()}finally{if(x)throw y}}}else if("*"===h){var j=Object.keys(b),k=d+1,l=!0,m=!1,n=void 0;try{for(var p,o=j[Symbol.iterator]();!(l=(p=o.next()).done);l=!0){var q=p.value;c(a,b[q],k,e)}}catch(a){m=!0,n=a}finally{try{!l&&o.return&&o.return()}finally{if(m)throw n}}}else b=b[h],c(a,b,++d,e)}}var b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f.cellIndex,d=[];return c(a.split("."),b,0,d),d},f.cells={},f.observers={},f.cellIndex={nodes:{}},f.observerIndex={nodes:{}},c.Cell=f;var o=function a(b,d,e){_classCallCheck(this,a),Object.defineProperty(this,"engine",{enumerable:!1,configurable:!0,writable:!0,value:c}),this.sheet=b.name,this.cells={},d||(d=b.rows.length+1),this.id=d,a.rows[d]=this;var g=0;if(b.options.columns)if(Array.isArray(e))for(var h=Object.keys(b.options.columns),i=0;i<e.length;i++){var j=h[i]||i,k=f(b.name+"."+j+"."+d,e[i],b.options.columns[j]);this.cells[k.coordinates]=!0}else for(var l in b.options.columns){var m=f(b.name+"."+l+"."+d,e[l],b.options.columns[l]);this.cells[m.coordinates]=!0}else if(Array.isArray(e))for(var n=0;n<e.length;n++,g++){var o=f(b.name+"."+(n+1)+"."+d,e[n],{});this.cells[o.coordinates]=!0}else for(var p=Object.keys(e),q=0;q<e.length;q++,g++){var r=f(b.name+"."+(q+1)+"."+d,e[p[q]],{});this.cells[r.coordinates]=!0}if(b.options.columnCount&&g<b.options.columnCount)for(;g++<b.options.columnCount;){var s=f(b.name+"."+g+"."+d,null,{});this.cells[s.coordinates]=!0}};o.rows={},c.Space=function(){function a(b){var d=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{sparse:c.options.sparse};_classCallCheck(this,a),Object.defineProperty(this,"engine",{enumerable:!1,configurable:!0,writable:!0,value:c});var e=c.spaces[b];if(e||!this)return e;this.name=b,this.options={},Object.assign(this.options,d),this.cells={},c.spaces[b]=this}return _createClass(a,[{key:"createCell",value:function(b,c,d){var e=this.name+"."+b,g=new f(e,c,d);return this.cells[e]=!0,g}},{key:"createVector",value:function(b,c){var d=this,e=this.name+".";Object.keys(this.options.dimensions).forEach(function(a,c,f){if(!["number","boolean","string"].includes(_typeof(b[a])))throw new Error("Incompatible vector "+d.name);e+=b[a]+(c<f.length-1?".":"")}),f(e,c,this.options.contains,this)}},{key:"export",value:function(){var b=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cells:!0,sparse:!0},c={},d={};if(b.cells){c.cells={};for(var e in this.cells)d[e]||(c.cells[e.split(".").slice(1).join(".")]=f.cells[e].value)}return c}}]),a}(),c.spaces={},c.Sheet=function(a){function b(a){var d,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{sparse:c.options.sparse};_classCallCheck(this,b);var f=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,a,e)),g=c.sheets[a];return g||!f?(d=g,_possibleConstructorReturn(f,d)):(f.rows=[],c.sheets[a]=f,f)}return _inherits(b,a),_createClass(b,[{key:"createRow",value:function(b,c){var d=new o(this,b,c);return this.rows.push(d.id),d}},{key:"import",value:function(b,c){for(var d=0;d<b.length;d++)this.createRow(d+1,b[d])}},{key:"export",value:function(){var b=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{rows:!0,cells:!1,sparse:!0},c={},d={};if(b.rows)if(this.rows.length>0){var e=["Row/Col"];c.rows=[e];var g=!0,h=!1,i=void 0;try{for(var k,j=this.rows[Symbol.iterator]();!(g=(k=j.next()).done);g=!0){var l=k.value,m=[];m.push(l),c.rows.push(m);for(var n in o.rows[l].cells){var p=n.split("."),q=_slicedToArray(p,2),r=q[1];d[n]=!0,e.includes(r)||e.push(r),m.push(b.extended?f.cells[n]:f.cells[n].value)}}}catch(a){h=!0,i=a}finally{try{!g&&j.return&&j.return()}finally{if(h)throw i}}}else c.rows=[];if(b.cells){c.cells={};for(var s in this.cells)d[s]||(c.cells[s.split(".").slice(1).join(".")]=b.extended?f.cells[s]:f.cells[s].value)}return c}}]),b}(this.Space),c.sheets={}}var h=function a(b,c){for(var d=0;d<b.length;d++){var e=b[d];Array.isArray(e)?a(e,c):c(e,d,b)}},k=[],n={};o.getArgs=l,b.exports=o,"undefined"!=typeof window&&(window.Hypercalc=o)}).call(this)},{"./functions/Date/index.js":2,"./functions/Geometry/index.js":4,"./functions/Math/index.js":8,"./functions/Matrix/index.js":16,"./functions/Physics/index.js":18,"./functions/Statistics/index.js":21,"./functions/String/index.js":29,"./functions/Unit/index.js":30,"./functions/Vector/index.js":31,"./functions/add.js":32,"./functions/average.js":33,"./functions/dimensions.js":35,"./functions/divide.js":36,"./functions/equal.js":37,"./functions/isFunction.js":40,"./functions/isMatrix.js":41,"./functions/isNegative.js":42,"./functions/isNumber.js":43,"./functions/isPositive.js":44,"./functions/isPrime.js":45,"./functions/isVector.js":46,"./functions/multiply.js":47,"./functions/pow.js":48,"./functions/product.js":49,"./functions/quotient.js":50,"./functions/subtract.js":51,"./functions/sum.js":52,"./functions/text.js":53,"./functions/type.js":54}]},{},[56]);