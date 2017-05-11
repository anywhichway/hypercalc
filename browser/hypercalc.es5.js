"use strict";function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _toConsumableArray(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)}var _createClass=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_slicedToArray=function(){function a(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var h,g=a[Symbol.iterator]();!(d=(h=g.next()).done)&&(c.push(h.value),!b||c.length!==b);d=!0);}catch(a){e=!0,f=a}finally{try{!d&&g.return&&g.return()}finally{if(e)throw f}}return c}return function(b,c){if(Array.isArray(b))return b;if(Symbol.iterator in Object(b))return a(b,c);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c||a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){(function(){var c=a("../getArgs.js"),e=(a("./isNumber.js"),a("./isVector.js")),f=a("./vectorAverage.js");b.exports=function(){var a=void 0,b=void 0,d=c([].slice.call(arguments,0)),g=_slicedToArray(d,2);if(a=g[0],b=g[1],a.length>1&&a.every(function(a){return e(a)}))return f.apply(void 0,arguments);if(1===a.length&&Array.isArray(a[0])&&(a=a[0]),a=a.filter(function(a){return"number"==typeof a}),b&&b.if&&(a=a.filter(b.if)),0===a.length)return 1/0;var h=0;return a.reduce(function(a,b){return"number"==typeof b&&(a+=b,h++),a},0)/h}}).call(this)},{"../getArgs.js":45,"./isNumber.js":13,"./isVector.js":16,"./vectorAverage.js":40}],2:[function(a,b,c){(function(){var c=a("../getArgs.js");b.exports=function(){var a=void 0,b=void 0,d=c([].slice.call(arguments,0)),e=_slicedToArray(d,2);return a=e[0],b=e[1],1===a.length&&Array.isArray(a[0])&&(a=a[0]),a=a.filter(function(a){return"number"==typeof a}),b&&b.if&&(a=a.filter(b.if)),a.length}}).call(this)},{"../getArgs.js":45}],3:[function(a,b,c){(function(){b.exports=function(a){return a*a*a}}).call(this)},{}],4:[function(a,b,c){(function(){function a(a,b){return a.length===b.length&&a.every(function(a,c){return a===b[c]})}function c(b){if(!Array.isArray(b))return[];var d=b.reduce(function(b,d){return!!a(b,c(d))&&b},c(b[0]));return d&&[b.length].concat(d)}b.exports=c}).call(this)},{}],5:[function(a,b,c){(function(){b.exports=function(a,b){return Math.sqrt(a.reduce(function(c,d,e){return c+=Math.pow(b[e]-a[e],2)},0))}}).call(this)},{}],6:[function(a,b,c){(function(){b.exports=function(a,b,c){return a.map(function(c,d){return a[d]*b[d]}).reduce(function(a,b){return a+b})}}).call(this)},{}],7:[function(a,b,c){(function(){var a=function(b,d,e){return b===d||(Array.isArray(b)&&Array.isArray(d)?c(b,d,e):void 0)},c=function(c,d,e){return c.length===d.length&&c.every(function(b,c){return a(b,d[c],e)})};b.exports=a}).call(this)},{}],8:[function(a,b,c){(function(){b.exports=function(a){var b=1;for(a=Math.round(a);a;)b*=a--;return b}}).call(this)},{}],9:[function(a,b,c){(function(){function d(){var a=[].slice.call(arguments).sort(function(a,b){return a.length-b.length}),b=new Set(a[0]),c=!0,d=!1,e=void 0;try{for(var g,f=b[Symbol.iterator]();!(c=(g=f.next()).done);c=!0)for(var h=g.value,i=1;i<a.length;i++)if(!a[i].includes(h)){b.delete(h);break}}catch(a){d=!0,e=a}finally{try{!c&&f.return&&f.return()}finally{if(d)throw e}}return[].concat(_toConsumableArray(b))}var c=a("../getArgs.js");b.exports=function(){var a=void 0,b=void 0,e=c([].slice.call(arguments,0)),f=_slicedToArray(e,2);if(a=f[0],b=f[1],0===a.length)return[];var g=d.apply(void 0,_toConsumableArray(a));return b&&b.if?g.filter(b.if):g}}).call(this)},{"../getArgs.js":45}],10:[function(a,b,c){(function(){b.exports=function(a){return"function"==typeof a}}).call(this)},{}],11:[function(a,b,c){(function(){b.exports=function(a){return Array.isArray(a)&&Array.isArray(a[0])&&Array.isArray(a[a.length-1])}}).call(this)},{}],12:[function(a,b,c){(function(){b.exports=function(a){return a<0}}).call(this)},{}],13:[function(a,b,c){(function(){b.exports=function(a){return"number"==typeof a}}).call(this)},{}],14:[function(a,b,c){(function(){b.exports=function(a){return a>0}}).call(this)},{}],15:[function(a,b,c){(function(){b.exports=function(a){for(var b=2,c=Math.sqrt(a);b<=c;b++)if(a%b==0)return!1;return 1!==a}}).call(this)},{}],16:[function(a,b,c){(function(){b.exports=function(a){return Array.isArray(a)&&!Array.isArray(a[0])&&!Array.isArray(a[a.length-1])}}).call(this)},{}],17:[function(a,b,c){(function(){var c=a("../getArgs.js"),d=function(b){return b.length?b.reduce(function(a,b){return a+b}):0},e=function(b){return b.length?d(b)/b.length:1/0},f=function(b){var c=e(b);return e(b.map(function(a){return Math.abs(a-c)}))};b.exports=function(){var a=void 0,b=void 0,d=c([].slice.call(arguments,0)),e=_slicedToArray(d,2);return a=e[0],b=e[1],1===a.length&&Array.isArray(a[0])&&(a=a[0]),b&&b.if&&(a=a.filter(b.if)),f(a)}}).call(this)},{"../getArgs.js":45}],18:[function(a,b,c){(function(){var a=function(b,c){return b.map(function(a,d){return b[d]-c[d]})};b.exports=function(){return[].slice.call(arguments,0).reduce(function(b,c){return b.map(function(b,d){return a(b,c[d])})})}}).call(this)},{}],19:[function(a,b,c){(function(){var c=a("./transpose.js"),d=a("./dotProduct.js");b.exports=function(a,b){return a.map(function(a,e){return c(b).map(function(b,c){return d(a,b)})})}}).call(this)},{"./dotProduct.js":6,"./transpose.js":37}],20:[function(a,b,c){(function(){var a=function(b,c){return b.map(function(a,d){return b[d]+c[d]})};b.exports=function(){return[].slice.call(arguments,0).reduce(function(b,c){return b.map(function(b,d){return a(b,c[d])})})}}).call(this)},{}],21:[function(a,b,c){(function(){var c=a("../getArgs.js");b.exports=function(){var a=void 0,b=void 0,d=c([].slice.call(arguments,0)),e=_slicedToArray(d,2);return a=e[0],b=e[1],1===a.length&&Array.isArray(a[0])&&(a=a[0]),b&&b.if&&(a=a.filter(b.if)),0===a.length?-1/0:a.reduce(function(a,b){return Math.max(a,b)})}}).call(this)},{"../getArgs.js":45}],22:[function(a,b,c){(function(){function d(a){if(!a.length)return 0;var b=a.sort(function(a,b){return a-b}),c=Math.floor(b.length/2);return b.length%2==0?(b[c]+b[c-1])/2:b[c]}var c=a("../getArgs.js");b.exports=function(){var a=void 0,b=void 0,e=c([].slice.call(arguments,0)),f=_slicedToArray(e,2);return a=f[0],b=f[1],1===a.length&&Array.isArray(a[0])&&(a=a[0]),b&&b.if&&(a=a.filter(b.if)),d(a)}}).call(this)},{"../getArgs.js":45}],23:[function(a,b,c){(function(){var c=a("../getArgs.js");b.exports=function(){var a=void 0,b=void 0,d=c([].slice.call(arguments,0)),e=_slicedToArray(d,2);return a=e[0],b=e[1],1===a.length&&Array.isArray(a[0])&&(a=a[0]),b&&b.if&&(a=a.filter(b.if)),0===a.length?1/0:a.reduce(function(a,b){return Math.min(a,b)})}}).call(this)},{"../getArgs.js":45}],24:[function(a,b,c){(function(){function d(a){if(!a.length)return[];var b={},c=[],d=0,e=!0,f=!1,g=void 0;try{for(var i,h=a[Symbol.iterator]();!(e=(i=h.next()).done);e=!0){var j=i.value;b[j]?b[j]++:b[j]=1,b[j]>d?(c=[j],d=b[j]):b[j]===d&&(c.push(j),d=b[j])}}catch(a){f=!0,g=a}finally{try{!e&&h.return&&h.return()}finally{if(f)throw g}}return c}var c=a("../getArgs.js");b.exports=function(){var a=void 0,b=void 0,e=c([].slice.call(arguments,0)),f=_slicedToArray(e,2);return a=f[0],b=f[1],1===a.length&&Array.isArray(a[0])&&(a=a[0]),b&&b.if&&(a=a.filter(b.if)),d(a)}}).call(this)},{"../getArgs.js":45}],25:[function(a,b,c){(function(){b.exports=function(a){var b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Math.pow(a,1/b)}}).call(this)},{}],26:[function(a,b,c){(function(){b.exports=function(){return(1+Math.sqrt(5))/2}}).call(this)},{}],27:[function(a,b,c){(function(){b.exports=function(a,b){return a^b}}).call(this)},{}],28:[function(a,b,c){(function(){var c=a("../getArgs.js"),d=a("./isNumber.js"),e=a("./isVector.js"),f=a("./isMatrix.js"),g=a("./vectorProduct.js"),h=a("./dimensions.js"),i=a("./matrixProduct.js");b.exports=function(){var a=void 0,b=void 0,j=c([].slice.call(arguments,0)),k=_slicedToArray(j,2);if(a=k[0],b=k[1],a.length>1){if(2===a.length&&e(a[0])&&d(a[1])||a.every(function(a){return e(a)}))return g.apply(void 0,arguments);if(f(a[0])){var l=h(a[0]),m=h(a[1]);if(l.length>0&&l[0]===m[1]||m[0]===l[1])return i.apply(void 0,arguments)}}else 1===a.length&&Array.isArray(a[0])&&(a=a[0]);return a=a.filter(function(a){return"number"==typeof a}),b&&b.if&&(a=a.filter(b.if)),0===a.length?0:a.reduce(function(a,b){return d(b)&&(a*=b),a},1)}}).call(this)},{"../getArgs.js":45,"./dimensions.js":4,"./isMatrix.js":11,"./isNumber.js":13,"./isVector.js":16,"./matrixProduct.js":19,"./vectorProduct.js":42}],29:[function(a,b,c){(function(){var c=a("../getArgs.js"),d=a("./isNumber.js"),e=a("./isVector.js"),f=a("./vectorQuotient.js");b.exports=function(){var a=void 0,b=void 0,g=c([].slice.call(arguments,0)),h=_slicedToArray(g,2);if(a=h[0],b=h[1],a.length>1){if(2===a.length&&e(a[0])&&d(a[1])||a.every(function(a){return e(a)}))return f.apply(void 0,arguments)}else 1===a.length&&Array.isArray(a[0])&&(a=a[0]);return a=a.filter(function(a){return"number"==typeof a}),b&&b.if&&(a=a.filter(b.if)),0===a.length?0:a.reduce(function(a,b){return d(b)&&(a/=b),a},1)}}).call(this)},{"../getArgs.js":45,"./isNumber.js":13,"./isVector.js":16,"./vectorQuotient.js":43}],30:[function(a,b,c){(function(){var a=function(b,c){return Math.floor(Math.random()*(c-b+1))+b};b.exports=function(b,c){return arguments.length>=2?a(b,c):Math.random()}}).call(this)},{}],31:[function(a,b,c){(function(){var c=a("../getArgs.js"),d=a("./isNumber.js"),e=a("./isVector.js"),f=a("./isMatrix.js"),g=a("./vectorDifference.js"),h=a("./matrixDifference.js"),i=a("./dimensions.js"),j=a("./equal.js");b.exports=function(){var a=void 0,b=void 0,k=c([].slice.call(arguments,0)),l=_slicedToArray(k,2);if(a=l[0],b=l[1],a.length>1){if(2===a.length&&e(a[0])&&d(a[1])||a.every(function(a){return e(a)}))return g.apply(void 0,arguments);if(f(a[0])){var m=i(a[0]);if(a.every(function(a,b){return 0===b||f(a)&&j(m,i(a))}))return h.apply(void 0,arguments)}}else 1===a.length&&(a=a[0]);return a=a.filter(function(a){return"number"==typeof a}),b&&b.if&&(a=a.filter(b.if)),0===a.length?1/0:a.reduce(function(a,b){return"number"==typeof b&&(a-=b),a})}}).call(this)},{"../getArgs.js":45,"./dimensions.js":4,"./equal.js":7,"./isMatrix.js":11,"./isNumber.js":13,"./isVector.js":16,"./matrixDifference.js":18,"./vectorDifference.js":41}],32:[function(a,b,c){(function(){var c=a("./isNumber.js");b.exports=function(a){return c(a)?a>0?1:0===a?0:-1:void 0}}).call(this)},{"./isNumber.js":13}],33:[function(a,b,c){(function(){b.exports=function(a){return a*a}}).call(this)},{}],34:[function(a,b,c){(function(){var c=a("../getArgs.js"),d=function(b){return b.length?b.reduce(function(a,b){return a+b}):0},e=function(b){return b.length?d(b)/b.length:1/0},f=function(b){var c=e(b);return b.reduce(function(a,b){return a+=Math.pow(b-c,2)},0)/b.length},g=function(b){return b.length?Math.sqrt(f(b)):0};b.exports=function(){var a=void 0,b=void 0,d=c([].slice.call(arguments,0)),e=_slicedToArray(d,2);return a=e[0],b=e[1],1===a.length&&Array.isArray(a[0])&&(a=a[0]),a=a.filter(function(a){return"number"==typeof a}),b&&b.if&&(a=a.filter(b.if)),0===a.length?0:g(a)}}).call(this)},{"../getArgs.js":45}],35:[function(a,b,c){(function(){var c=a("../getArgs.js"),d=a("./isNumber.js"),e=a("./isVector.js"),f=a("./isMatrix.js"),g=a("./vectorSum.js"),h=a("./matrixSum.js"),i=a("./dimensions.js"),j=a("./equal.js");b.exports=function(){var a=void 0,b=void 0,k=c([].slice.call(arguments,0)),l=_slicedToArray(k,2);if(a=l[0],b=l[1],a.length>1){if(2===a.length&&e(a[0])&&d(a[1])||a.every(function(a){return e(a)}))return g.apply(void 0,arguments);if(f(a[0])){var m=i(a[0]);if(a.every(function(a,b){return 0===b||f(a)&&j(m,i(a))}))return h.apply(void 0,arguments)}}else 1===a.length&&Array.isArray(a[0])&&(a=a[0]);return a=a.filter(function(a){return"number"==typeof a}),b&&b.if&&(a=a.filter(b.if)),0===a.length?1/0:a.reduce(function(a,b){return"number"==typeof b&&(a+=b),a},0)}}).call(this)},{"../getArgs.js":45,"./dimensions.js":4,"./equal.js":7,"./isMatrix.js":11,"./isNumber.js":13,"./isVector.js":16,"./matrixSum.js":20,"./vectorSum.js":44}],36:[function(a,b,c){(function(){b.exports=function(){return 2*Math.PI}}).call(this)},{}],37:[function(a,b,c){(function(){b.exports=function(a){return a[0].map(function(b,c){return a.map(function(a,b){return a[c]})})}}).call(this)},{}],38:[function(a,b,c){(function(){b.exports=function(a){var b=void 0===a?"undefined":_typeof(a);return null===a||void 0===a?"undefined":Array.isArray(a)?"Array":"object"===b?a.constructor.name:b}}).call(this)},{}],39:[function(a,b,c){(function(){var c=a("../getArgs.js"),d=function(b){return b.length?b.reduce(function(a,b){return a+b}):0},e=function(b){return b.length?d(b)/b.length:1/0},f=function(b){var c=e(b);return b.reduce(function(a,b){return a+=Math.pow(b-c,2)},0)/b.length};b.exports=function(){var a=void 0,b=void 0,d=c([].slice.call(arguments,0)),e=_slicedToArray(d,2);return a=e[0],b=e[1],1===a.length&&Array.isArray(a[0])&&(a=a[0]),a=a.filter(function(a){return"number"==typeof a}),b&&b.if&&(a=a.filter(b.if)),0===a.length?0:f(a)}}).call(this)},{"../getArgs.js":45}],40:[function(a,b,c){(function(){var c=a("../getArgs.js");b.exports=function(){var a=c([].slice.call(arguments,0)),b=_slicedToArray(a,2),d=b[0],e=b[1],f=new Array(d[0].length);return d.sort(function(a,b){return b.length-a.length}).reduce(function(a,b){return b.map(function(b,c){return"number"!=typeof b||e&&e.if&&!e.if(b)||(a[c]=(a[c]||0)+b,f[c]=(f[c]||0)+1),a[c]})},new Array(d[0].length)).map(function(a,b){return a/=f[b]})}}).call(this)},{"../getArgs.js":45}],41:[function(a,b,c){(function(){var c=a("../getArgs.js"),d=a("./isVector.js"),e=a("./isNumber.js");b.exports=function(){var a=c([].slice.call(arguments,0)),b=_slicedToArray(a,2),f=b[0],g=b[1];return f.reduce(function(a,b){if(d(b))b.map(function(b,c){return c>=a.length?a[c]=b:"number"!=typeof b||g&&g.if&&!g.if(b)||(a[c]-=b),a[c]});else if(e(b))for(var c=0;c<a.length;c++)a[c]-=b;return a})}}).call(this)},{"../getArgs.js":45,"./isNumber.js":13,"./isVector.js":16}],42:[function(a,b,c){(function(){var c=a("../getArgs.js"),d=a("./isNumber.js"),e=a("./isVector.js");b.exports=function(){var a=c([].slice.call(arguments,0)),b=_slicedToArray(a,2),f=b[0],g=b[1];return f.reduce(function(a,b){if(e(b))b.map(function(b,c){return c>=a.length&&(a[c]=1),"number"!=typeof b||g&&g.if&&!g.if(b)||(a[c]*=b),a[c]});else if(d(b))for(var c=0;c<a.length;c++)a[c]*=b;return a})}}).call(this)},{"../getArgs.js":45,"./isNumber.js":13,"./isVector.js":16}],43:[function(a,b,c){(function(){var c=a("../getArgs.js"),d=a("./isNumber.js"),e=a("./isVector.js");b.exports=function(){var a=c([].slice.call(arguments,0)),b=_slicedToArray(a,2),f=b[0],g=b[1];return f.reduce(function(a,b){if(e(b))b.map(function(b,c){return c>=a.length?a[c]=b:"number"!=typeof b||g&&g.if&&!g.if(b)||(a[c]/=b),a[c]});else if(d(b))for(var c=0;c<a.length;c++)a[c]/=b;return a})}}).call(this)},{"../getArgs.js":45,"./isNumber.js":13,"./isVector.js":16}],44:[function(a,b,c){(function(){var c=a("../getArgs.js"),d=a("./isVector.js"),e=a("./isNumber.js");b.exports=function(){var a=c([].slice.call(arguments,0)),b=_slicedToArray(a,2),f=b[0],g=b[1];return f.reduce(function(a,b){if(d(b))b.map(function(b,c){return c>=a.length?a[c]=b:"number"!=typeof b||g&&g.if&&!g.if(b)||(a[c]+=b),a[c]});else if(e(b))for(var c=0;c<a.length;c++)a[c]+=b;return a})}}).call(this)},{"../getArgs.js":45,"./isNumber.js":13,"./isVector.js":16}],45:[function(a,b,c){(function(){function a(b){a.VARGS=[];var c=b[b.length-1],d=c&&"object"===(void 0===c?"undefined":_typeof(c))&&!Array.isArray(c)?c:null;!d||(b=b.slice(0,b.length-1));for(var f=[],g=0;g<b.length;g++)if(b[g]===a.VARGS){var h=a.VARGS.shift();if(Array.isArray(h)){var i=!0,j=!1,k=void 0;try{for(var m,l=h[Symbol.iterator]();!(i=(m=l.next()).done);i=!0){var n=m.value;f.push(n)}}catch(a){j=!0,k=a}finally{try{!i&&l.return&&l.return()}finally{if(j)throw k}}}else results.push(h)}else f.push(b[g]);return[f,d]}b.exports=a}).call(this)},{}],46:[function(a,b,c){(function(){function g(a){a=Array.isArray(a)?a.slice(0):[].slice.call(arguments,0);var b=mean(a),c=stdev(a);return a.map(function(a){return(a-b)/c})}function i(){return{boolean:{true:1,false:0},string:0,undefined:0,null:0,Array:0}}function j(a,b){if(b){var c=void 0===a?"undefined":_typeof(a);if(b.replace){if(b.replace[c]&&"object"===_typeof(b.replace[c])&&void 0!==b.replace[c][a])return b.replace[c][a];if(void 0!==b.replace[c])return b.replace[c]}if(void 0!==b.NA&&"undefined"===c)return b.NA;if(void 0!==b.NaN&&"number"!==c)return b.NaN}return a}function l(a){var b=a[a.length-1],c=b&&"object"===(void 0===b?"undefined":_typeof(b))&&!Array.isArray(b)?b:null;!c||(a=a.slice(0,a.length-1));for(var e=[],f=0;f<a.length;f++)if(a[f]===k){var g=k.shift();if(Array.isArray(g)){var h=!0,i=!1,j=void 0;try{for(var m,l=g[Symbol.iterator]();!(h=(m=l.next()).done);h=!0){var n=m.value;e.push(n)}}catch(a){i=!0,j=a}finally{try{!h&&l.return&&l.return()}finally{if(i)throw j}}}else results.push(g)}else e.push(a[f]);return k.splice(0,k.length),[e,c]}function m(a,b){var c=a.split("."),d=b.split(".");return c.length===d.length&&c.every(function(a,b){var c=a.split(":");return 1===c.length?"*"===c[0]||c[0]===d[b]:"*"===c[0]?"*"===c[1]||d[b]<=c[1]:d[b]>=c[0]&&("*"===c[1]||d[b]<=c[1])})}function o(){function r(a,b,d){var e=this&&this instanceof r,f=r.cells[a];return e?(Object.defineProperty(this,"engine",{enumerable:!1,configurable:!0,writable:!0,value:c}),this.coordinates=a,this.options={},this.computed=null,Object.assign(this.options,d),Object.defineProperty(this,"references",{enumerable:!1,configurable:!0,writable:!0,value:{}}),this.data=b,Object.defineProperty(this,"calculating",{writable:!0}),Object.defineProperty(this,"value",{enumerable:!1,configurable:!0,get:function(){return this.valueOf()},set:function(b){return this.data=b,this.compile().calc(),!0}}),this.compile().calc(),this):f?1===arguments.length?f:(f.value=b,!d||Object.assign(f.options,d),f):new r(a,b,d)}var b=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=this,d=void 0;c.options=Object.assign({},b),c.calculating=0,Object.defineProperty(c,"oncalculated",{enumerable:!1,configurable:!0,writable:!0,value:b.oncalculated}),n.average=a("./functions/average.js"),n.count=a("./functions/count.js"),n.cube=a("./functions/cube.js"),n.dimensions=a("./functions/dimensions.js"),n.distance=a("./functions/distance.js"),n.dotProduct=a("./functions/dotProduct.js"),n.equal=a("./functions/equal.js"),n.factorial=a("./functions/factorial.js"),n.intersection=a("./functions/intersection.js"),n.isFunction=a("./functions/isFunction.js"),n.isMatrix=a("./functions/isMatrix.js"),n.isNegative=a("./functions/isNegative.js"),n.isNumeric=n.isNumber=a("./functions/isNumber.js"),n.isPositive=a("./functions/isPositive.js"),n.isPrime=a("./functions/isPrime.js"),n.isVector=a("./functions/isVector.js"),n.madev=a("./functions/madev.js"),n.matrixDifference=a("./functions/matrixDifference.js"),n.matrixProduct=a("./functions/matrixProduct.js"),n.matrixSum=a("./functions/matrixSum.js"),n.max=a("./functions/max.js"),n.median=a("./functions/median.js"),n.min=a("./functions/min.js"),n.mode=a("./functions/mode.js"),n.nthRoot=a("./functions/nthRoot.js"),n.phi=a("./functions/phi.js"),n.power=a("./functions/power.js"),n.product=a("./functions/product.js"),n.random=a("./functions/random.js"),n.quotient=a("./functions/quotient.js"),n.remainder=n.difference=a("./functions/remainder.js"),n.sign=a("./functions/sign.js"),n.stdev=a("./functions/stdev.js"),n.square=a("./functions/square.js"),n.sum=a("./functions/sum.js"),n.tau=a("./functions/tau.js"),n.transpose=a("./functions/transpose.js"),n.type=a("./functions/type.js"),n.variance=a("./functions/variance.js"),n.vectorAverage=a("./functions/vectorAverage.js"),n.vectorDifference=a("./functions/vectorDifference.js"),n.vectorProduct=a("./functions/vectorProduct.js"),n.vectorQuotient=a("./functions/vectorQuotient.js"),n.vectorSum=a("./functions/vectorSum.js"),n.$=function(a,b){var c=[],d=n.cells(a),e=!0,f=!1,g=void 0;try{for(var i,h=d[Symbol.iterator]();!(e=(i=h.next()).done);e=!0){var j=i.value;b&&b.if?!b.if(j.value)||c.push(j.value):c.push(j.value)}}catch(a){f=!0,g=a}finally{try{!e&&h.return&&h.return()}finally{if(f)throw g}}return c},n.$summary=function(a){var b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{result:"array",values:["min","average","max"]},c="array"===b.result?[]:{},d=[],e=n.cells(a),f=!0,g=!1,h=void 0;try{for(var j,i=e[Symbol.iterator]();!(f=(j=i.next()).done);f=!0){var k=j.value;b&&b.if?!b.if(k.value)||d.push(k.value):d.push(k.value)}}catch(a){g=!0,h=a}finally{try{!f&&i.return&&i.return()}finally{if(g)throw h}}var l=!0,m=!1,o=void 0;try{for(var q,p=b.values[Symbol.iterator]();!(l=(q=p.next()).done);l=!0){var r=q.value,s=n[r](d);"array"===b.result?c.push(s):c[r]=s}}catch(a){m=!0,o=a}finally{try{!l&&p.return&&p.return()}finally{if(m)throw o}}return c},n.destructure=n.varg=function(a){return k.push(a),k},n.values=n.$a=function(a,b){var c=[],d=n.cells(a);b=Object.assign({replace:i()},b||{});var e=!0,f=!1,g=void 0;try{for(var k,h=d[Symbol.iterator]();!(e=(k=h.next()).done);e=!0){var l=k.value;b&&b.if?!b.if(l.value)||c.push(j(l.value,b)):c.push(j(l.value,b))}}catch(a){f=!0,g=a}finally{try{!e&&h.return&&h.return()}finally{if(f)throw g}}return c},n.cells=function(a){if(d){var b=r.observers[a];b||(b={},r.observers[a]=b),b[d.coordinates]=!0}return r.find(a,r.cellIndex)},n.averagea=function(){var a=void 0,b=void 0,c=l([].slice.call(arguments,0)),d=_slicedToArray(c,2);return a=d[0],b=d[1],Array.isArray(a[0])&&(a=a[0]),b&&b.if&&(a=a.filter(b.if)),0===a.length?0:(b=Object.assign({replace:i()},b||{}),a.reduce(function(a,c){return a+j(c,b)},0)/a.length)},n.counta=function(){var a=void 0,b=void 0,c=l([].slice.call(arguments,0)),d=_slicedToArray(c,2);return a=d[0],b=d[1],b&&b.if&&(a=a.filter(b.if)),a=a.filter(function(a){return null!==a&&void 0!==a}),a.length},n.extend=function(){var a=d.coordinates.split("."),b=d.engine.sheets[a[0]],c=parseInt(a[2]),e=d.data,f=parseInt(a[1]),g=f,h=c,i=void 0,k=l([].slice.call(arguments,0)),m=_slicedToArray(k,2);return i=m[0],m[1],d.compiled=function(){for(var a=0;a<i.length;a++)for(var d=0;d<i[a].length;d++,g++){var e=i[a][d];Array.isArray(e)&&(h=Math.max(h,c+(e.length-1)))}for(var j=c;j<=h;j++)b.createRow(j,new Array(g-f));for(var k=f,l=0;l<i.length;l++)for(var m=0,n=c;m<i[l].length;m++,k++){var o=i[l][m];if(Array.isArray(o))for(var p=0;p<o.length;p++)r(b.name+"."+k+"."+(n+p),o[p]);else r(b.name+"."+k+"."+n,o)}this.computed=Array.isArray(i[0][0])?i[0][0][0]:i[0][0]},d.data=e,d.compiled(),d.computed},n.maxa=function(){var a=void 0,b=void 0,c=l([].slice.call(arguments,0)),d=_slicedToArray(c,2);return a=d[0],b=d[1],Array.isArray(a[0])&&(a=a[0]),b&&b.if&&(a=a.filter(b.if)),0===a.length?-1/0:(b=Object.assign({replace:i()},b||{}),h(a,function(a,b,c){return c[b]=j(a,{replace:i()})}),a.reduce(function(a,b){return Math.max(a,b)}))},n.mina=function(){var a=void 0,b=void 0,c=l([].slice.call(arguments,0)),d=_slicedToArray(c,2);return a=d[0],b=d[1],Array.isArray(a[0])&&(a=a[0]),b&&b.if&&(a=a.filter(b.if)),0===a.length?1/0:(b=Object.assign({replace:i()},b||{}),h(a,function(a,b,c){return c[b]=j(a,{replace:i()})}),a.reduce(function(a,b){return Math.min(a,b)}))},n.producta=function(){var a=void 0,b=void 0,c=l([].slice.call(arguments,0)),d=_slicedToArray(c,2);return a=d[0],b=d[1],b&&b.if&&(a=a.filter(b.if)),0===a.length?0:(b=Object.assign({boolean:{true:1,false:0},string:1,undefined:1,null:1,Array:1},b||{}),h(a,function(a,c,d){return d[c]=j(a,{replace:b})}),n.product.apply(n,_toConsumableArray(a)))},n.quotienta=function(){var a=void 0,b=void 0,c=l([].slice.call(arguments,0)),d=_slicedToArray(c,2);return a=d[0],b=d[1],b=Object.assign({replace:{boolean:1,string:1,undefined:1}},b||{}),b.if&&(a=a.filter(b.if)),0===a.length?1/0:(b=Object.assign({boolean:{true:1,false:0},string:1,undefined:1,null:1,Array:1},b||{}),h(a,function(a,c,d){return d[c]=j(a,{replace:b})}),n.quotient.apply(n,_toConsumableArray(a)))},n.remaindera=function(){var a=void 0,b=void 0,c=l([].slice.call(arguments,0)),d=_slicedToArray(c,2);return a=d[0],b=d[1],b=Object.assign({replace:i()},b||{}),b&&b.if&&(a=a.filter(b.if)),a.reduce(function(a,c){return a-j(c,b)},0)},n.suma=function(){var a=void 0,b=void 0,c=l([].slice.call(arguments,0)),d=_slicedToArray(c,2);return a=d[0],b=d[1],b=Object.assign({replace:i()},b||{}),b&&b.if&&(a=a.filter(b.if)),a.reduce(function(a,c){return a+j(c,b)},0)},n.zscores=function(){var a=void 0,b=void 0,c=l([].slice.call(arguments,0)),d=_slicedToArray(c,2);return a=d[0],b=d[1],Array.isArray(a[0])&&(a=a[0]),a=a.filter(function(a){return"number"==typeof a}),b&&b.if&&(a=a.filter(b.if)),0===a.length?0:g(a)};var f=Object.getOwnPropertyDescriptors(Math),o=function(b){if(n[b]||n[b.toLowerCase()])return"continue";"function"==typeof Math[b]?n[b]=function(){var a=void 0,c=void 0,d=l([].slice.call(arguments,0)),e=_slicedToArray(d,2);return a=e[0],c=e[1],c&&c.if&&(a=a.filter(c.if)),Math[b].apply(Math,_toConsumableArray(a))}:n[b.toLowerCase()]=function(){return Math[b]}};for(var p in f){o(p)}c.functions=new Proxy(n,{set:function(b,c,d){if("function"!=typeof d)throw new Error("Hypercalc custom function must be a function: ",d);return b[c]=d,!0}}),r.prototype.addReferences=function(){for(var a=0;a<arguments.length;a++)arguments[a]===this||(this.references[arguments[a].coordinates]=!0)},r.prototype.deleteReferences=function(){for(var a=0;a<arguments.length;a++)delete this.references[arguments[a].coordinates]},r.prototype.clearReferences=function(){this.references={}},r.prototype.compile=function(){delete this.compiled,this.index(),"string"==typeof this.data&&0===this.data.indexOf("=")&&Object.defineProperty(this,"compiled",{enumerable:!1,configurable:!0,writable:!0,value:new Function("functions","return function() { with(functions) { return "+this.data.substring(1)+"; }}")(n)});for(var a in r.observers){var b=[];for(var c in r.observers[a])b.push(r.cells[c]);m(a,this.coordinates)&&this.addReferences.apply(this,b)}return this},r.prototype.calc=function(){function c(){if(b.compiled){var a=d;d=b,b.computed=b.compiled(),d=a}!b.options.oncalculated||b.options.oncalculated(b),b.engine.calculating--,b.calculating=null,!b.engine.calculating&&b.engine.oncalculated&&b.engine.oncalculated(b.engine)}var a=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],b=this;if(b.calculating||(b.calculating=setTimeout(c),b.engine.calculating++),a)for(var e in b.references)r.cells[e].calc()},r.prototype.index=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.cellIndex;a===r.cellIndex?r.cells[this.coordinates]=this:a===r.observerIndex&&(r.observers[this.data]=this);for(var b=this.coordinates.split("."),c=a.nodes,d=0;d<b.length;d++)c[b[d]]||(c[b[d]]={nodes:{}}),d===b.length-1?c[b[d]].coordinates=this.coordinates:c=c[b[d]].nodes},r.prototype.valueOf=function(){return!d||this.addReferences(d),this.compiled?this.computed:this.data},r.find=function(a){function c(a,b,d,e){if(b){if(d===a.length){var f=r.cells[b.coordinates];return void(!f||e.push(f))}b=b.nodes;var g=a[d],h=g.includes(":")?":":g.includes("|")?"|":null;if(h){var q=g.split(h),s=!1;if(":"===h)for(var t=0;t<q.length;t++)parseInt(q[t])==q[t]&&(q[t]=parseInt(q[t]),s=!0);var u=Object.keys(b),v=d+1,w=!0,x=!1,y=void 0;try{for(var B,z=function(){var f=B.value;":"===h?(f=s&&parseInt(f)==f?parseInt(f):f,("*"===q[0]||f>=q[0])&&f<=q[1]&&c(a,b[f],v,e)):q.some(function(a){return a==f})&&c(a,b[f],v,e)},A=u[Symbol.iterator]();!(w=(B=A.next()).done);w=!0)z()}catch(a){x=!0,y=a}finally{try{!w&&A.return&&A.return()}finally{if(x)throw y}}}else if("*"===g){var i=Object.keys(b),j=d+1,k=!0,l=!1,m=void 0;try{for(var o,n=i[Symbol.iterator]();!(k=(o=n.next()).done);k=!0){var p=o.value;c(a,b[p],j,e)}}catch(a){l=!0,m=a}finally{try{!k&&n.return&&n.return()}finally{if(l)throw m}}}else b=b[g],c(a,b,++d,e)}}var b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r.cellIndex,d=[];return c(a.split("."),b,0,d),d},r.cells={},r.observers={},r.cellIndex={nodes:{}},r.observerIndex={nodes:{}},c.Cell=r;var s=function a(b,d,e){_classCallCheck(this,a),Object.defineProperty(this,"engine",{enumerable:!1,configurable:!0,writable:!0,value:c}),this.sheet=b.name,this.cells={},d||(d=b.rows.length+1),this.id=d,a.rows[d]=this;var f=0;if(b.options.columns)if(Array.isArray(e))for(var g=Object.keys(b.options.columns),h=0;h<e.length;h++){var i=g[h]||h,j=r(b.name+"."+i+"."+d,e[h],b.options.columns[i]);this.cells[j.coordinates]=!0}else for(var k in b.options.columns){var l=r(b.name+"."+k+"."+d,e[k],b.options.columns[k]);this.cells[l.coordinates]=!0}else if(Array.isArray(e))for(var m=0;m<e.length;m++,f++){var n=r(b.name+"."+(m+1)+"."+d,e[m],{});this.cells[n.coordinates]=!0}else for(var o=Object.keys(e),p=0;p<e.length;p++,f++){var q=r(b.name+"."+(p+1)+"."+d,e[o[p]],{});this.cells[q.coordinates]=!0}if(b.options.columnCount&&f<b.options.columnCount)for(;f++<b.options.columnCount;){var s=r(b.name+"."+f+"."+d,null,{});this.cells[s.coordinates]=!0}};s.rows={},c.Space=function(){function a(b){var d=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{sparse:c.options.sparse};_classCallCheck(this,a),Object.defineProperty(this,"engine",{enumerable:!1,configurable:!0,writable:!0,value:c});var e=c.spaces[b];if(e||!this)return e;this.name=b,this.options={},Object.assign(this.options,d),this.cells={},c.spaces[b]=this}return _createClass(a,[{key:"createCell",value:function(b,c,d){var e=this.name+"."+b,f=new r(e,c,d);return this.cells[e]=!0,f}},{key:"createVector",value:function(b,c){var d=this,e=this.name+".";Object.keys(this.options.dimensions).forEach(function(a,c,f){if(!["number","boolean","string"].includes(_typeof(b[a])))throw new Error("Incompatible vector "+d.name);e+=b[a]+(c<f.length-1?".":"")}),r(e,c,this.options.contains,this)}},{key:"export",value:function(){var b=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cells:!0,sparse:!0},c={},d={};if(b.cells){c.cells={};for(var e in this.cells)d[e]||(c.cells[e.split(".").slice(1).join(".")]=r.cells[e].value)}return c}}]),a}(),c.spaces={},c.Sheet=function(a){function b(a){var d,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{sparse:c.options.sparse};_classCallCheck(this,b);var f=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,a,e)),g=c.sheets[a];return g||!f?(d=g,_possibleConstructorReturn(f,d)):(f.rows=[],c.sheets[a]=f,f)}return _inherits(b,a),_createClass(b,[{key:"createRow",value:function(b,c){var d=new s(this,b,c);return this.rows.push(d.id),d}},{key:"import",value:function(b,c){for(var d=0;d<b.length;d++)this.createRow(d+1,b[d])}},{key:"export",value:function(){var b=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{rows:!0,cells:!1,sparse:!0},c={},d={};if(b.rows)if(this.rows.length>0){var e=["Row/Col"];c.rows=[e];var f=!0,g=!1,h=void 0;try{for(var j,i=this.rows[Symbol.iterator]();!(f=(j=i.next()).done);f=!0){var k=j.value,l=[];l.push(k),c.rows.push(l);for(var m in s.rows[k].cells){var n=m.split("."),o=_slicedToArray(n,2),p=o[1];d[m]=!0,e.includes(p)||e.push(p),l.push(b.extended?r.cells[m]:r.cells[m].value)}}}catch(a){g=!0,h=a}finally{try{!f&&i.return&&i.return()}finally{if(g)throw h}}}else c.rows=[];if(b.cells){c.cells={};for(var q in this.cells)d[q]||(c.cells[q.split(".").slice(1).join(".")]=b.extended?r.cells[q]:r.cells[q].value)}return c}}]),b}(this.Space),c.sheets={}}var h=function a(b,c){for(var d=0;d<b.length;d++){var e=b[d];Array.isArray(e)?a(e,c):c(e,d,b)}},k=[],n={};o.getArgs=l,b.exports=o,"undefined"!=typeof window&&(window.Hypercalc=o)}).call(this)},{"./functions/average.js":1,"./functions/count.js":2,"./functions/cube.js":3,"./functions/dimensions.js":4,"./functions/distance.js":5,"./functions/dotProduct.js":6,"./functions/equal.js":7,"./functions/factorial.js":8,"./functions/intersection.js":9,"./functions/isFunction.js":10,"./functions/isMatrix.js":11,"./functions/isNegative.js":12,"./functions/isNumber.js":13,"./functions/isPositive.js":14,"./functions/isPrime.js":15,"./functions/isVector.js":16,"./functions/madev.js":17,"./functions/matrixDifference.js":18,"./functions/matrixProduct.js":19,"./functions/matrixSum.js":20,"./functions/max.js":21,"./functions/median.js":22,"./functions/min.js":23,"./functions/mode.js":24,"./functions/nthRoot.js":25,"./functions/phi.js":26,"./functions/power.js":27,"./functions/product.js":28,"./functions/quotient.js":29,"./functions/random.js":30,"./functions/remainder.js":31,"./functions/sign.js":32,"./functions/square.js":33,"./functions/stdev.js":34,"./functions/sum.js":35,"./functions/tau.js":36,"./functions/transpose.js":37,"./functions/type.js":38,"./functions/variance.js":39,"./functions/vectorAverage.js":40,"./functions/vectorDifference.js":41,"./functions/vectorProduct.js":42,"./functions/vectorQuotient.js":43,"./functions/vectorSum.js":44}]},{},[46]);