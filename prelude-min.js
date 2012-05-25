// Prelude.ls 0.1.0
// Copyright (c) 2012 George Zahariev
// Released under the MIT License
// raw.github.com/gkz/prelude-ls/master/LICNSE
this.Prelude=function(){function b(a,c){return a.length?function(){var d=c?c.concat():[];return d.push.apply(d,arguments)<a.length?b.call(this,a,d):a.apply(this,d)}:a}function c(a,b){return function(){return a(b.apply(this,arguments))}}function d(a,b){var c=0,d=b.length>>>0;while(c<d)if(a===b[c++])return!0;return!1}exports={};var a=[].slice;return exports.contradict=function(a){return!a},exports.equals=b(function(a,b){return a===b}),exports.notEquals=b(function(a,b){return a!==b}),exports.lt=b(function(a,b){return a>b}),exports.lte=b(function(a,b){return a>=b}),exports.gt=b(function(a,b){return a<b}),exports.gte=b(function(a,b){return a<=b}),exports.andTest=b(function(a,b){return a&&b}),exports.orTest=b(function(a,b){return a||b}),exports.compose=function(){var b;return b=a.call(arguments),function(){var a,c,d,e,f;a=arguments;for(d=0,f=(e=b).length;d<f;++d)c=e[d],a=[c.apply(this,a)];return a[0]}},exports.max=Math.max,exports.min=Math.min,exports.negate=function(a){return-a},exports.abs=Math.abs,exports.signum=function(a){switch(!1){case!(a<0):return-1;case!(a>0):return 1;default:return 0}},exports.quot=b(function(a,b){return~~(a/b)}),exports.rem=b(function(a,b){return a%b}),exports.div=b(function(a,b){return Math.floor(a/b)}),exports.mod=b(function(a,b){var c;return(a%(c=b)+c)%c}),exports.recip=function(a){return 1/a},exports.pi=Math.PI,exports.exp=Math.exp,exports.sqrt=Math.sqrt,exports.log=Math.log,exports.pow=b(function(a,b){return Math.pow(a,b)}),exports.sin=Math.sin,exports.tan=Math.tan,exports.cos=Math.cos,exports.asin=Math.asin,exports.atan=Math.atan,exports.atan2=b(function(a,b){return Math.atan2(a,b)}),exports.acos=Math.acos,exports.truncate=function(a){return~~a},exports.round=Math.round,exports.ceiling=Math.ceil,exports.floor=Math.floor,exports.isItNaN=function(a){return a!==a},exports.add=b(function(a,b){return a+b}),exports.minus=b(function(a,b){return a-b}),exports.subtract=b(function(a,b){return b-a}),exports.multiply=exports.times=b(function(a,b){return a*b}),exports.divide=b(function(a,b){return a/b}),exports.divideBy=b(function(a,b){return b/a}),exports.even=function(a){return a%2===0},exports.odd=function(a){return a%2!==0},exports.gcd=b(function(a,b){var c;a=Math.abs(a),b=Math.abs(b);while(b!==0)c=a%b,a=b,b=c;return a}),exports.lcm=b(function(a,b){return Math.abs(Math.floor(a/gcd(a,b)*b))}),exports.id=function(a){return a},exports.flip=b(function(a,b,c){return a(c,b)}),exports.error=function(a){throw a},exports.each=b(function(a,b){var c,d,e;for(d=0,e=b.length;d<e;++d)c=b[d],a(c);return b}),exports.map=b(function(a,b){var c,d,e,f;c=[];for(e=0,f=b.length;e<f;++e)d=b[e],c.push(a(d));return c}),exports.cons=b(function(a,b){return[a].concat(b)}),exports.append=b(function(a,b){return a.concat(b)}),exports.filter=b(function(a,b){var c,d,e,f;c=[];for(e=0,f=b.length;e<f;++e)d=b[e],a(d)&&c.push(d);return c}),exports.reject=b(function(a,b){var c,d,e,f;c=[];for(e=0,f=b.length;e<f;++e)d=b[e],a(d)||c.push(d);return c}),exports.find=b(function(a,b){var c,d,e;for(d=0,e=b.length;d<e;++d){c=b[d];if(a(c))return c}}),exports.pluck=b(function(a,b){var c,d,e,f;c=[];for(e=0,f=b.length;e<f;++e)d=b[e],d[a]!=null&&c.push(d[a]);return c}),exports.head=function(a){return a.slice(0,1)},exports.tail=function(a){return a.slice(1)},exports.last=function(a){return a.slice(a.length-1)},exports.initial=function(a){return a.slice(0,a.length-1)},exports.empty=function(a){return!a.length},exports.length=function(a){return a.length},exports.reverse=function(a){return a.slice().reverse()},exports.fold=exports.foldl=b(function(a,b,c){var d,e,f;for(e=0,f=c.length;e<f;++e)d=c[e],b=a(b,d);return b}),exports.fold1=exports.foldl1=b(function(a,b){return fold(a,b[0],b.slice(1))}),exports.foldr=b(function(a,b,c){return fold(a,b,c.reverse())}),exports.foldr1=b(function(a,b){return b.reverse(),fold(a,b[0],b.slice(1))}),exports.andList=function(a){return fold(function(a,b){return a&&b},!0,a)},exports.orList=function(a){return fold(function(a,b){return a||b},!1,a)},exports.any=b(function(a,b){return fold(function(b,c){return b||a(c)},!1,b)}),exports.all=b(function(a,b){return fold(function(b,c){return b&&a(c)},!0,b)}),exports.sum=function(a){var b,c,d,e;b=0;for(d=0,e=a.length;d<e;++d)c=a[d],b+=c;return b},exports.product=function(a){var b,c,d,e;b=1;for(d=0,e=a.length;d<e;++d)c=a[d],b*=c;return b},exports.concat=function(a){return fold(append,[],a)},exports.concatMap=b(function(a,b){return concat(map(a,b))}),exports.maximum=function(a){return Math.max.apply(this,a)},exports.minimum=function(a){return Math.min.apply(this,a)},exports.scan=exports.scanl=b(function(a,b,c){var d,e,f,g,h;d=[b],e=b;for(g=0,h=c.length;g<h;++g)f=c[g],d.push(e=a(e,f));return d}),exports.scan1=exports.scanl1=b(function(a,b){return scan(a,b[0],b.slice(1))}),exports.scanr=b(function(a,b,c){return c.reverse(),scan(a,b,c).reverse()}),exports.scanr1=b(function(a,b){return b.reverse(),scan(a,b[0],b.slice(1)).reverse()}),exports.replicate=b(function(a,b){var c,d;c=[],d=0;for(;d<a;++d)c.push(b);return c}),exports.take=b(function(a,b){switch(!1){case!(a<=0):return b;case!!b.length:return[];default:return b.slice(0,a)}}),exports.drop=b(function(a,b){switch(!1){case!(a<=0):return b;case!!b.length:return[];default:return b.slice(a)}}),exports.splitAt=b(function(a,b){return[take(a,b),drop(a,b)]}),exports.takeWhile=b(function(a,b){var c,d,e,f;if(!b.length)return[];c=0;for(e=0,f=b.length;e<f;++e){d=b[e];if(!a(d))break;++c}return take(c,b)}),exports.dropWhile=b(function(a,b){var c,d,e,f;if(!b.length)return[];c=0;for(e=0,f=b.length;e<f;++e){d=b[e];if(!a(d))break;++c}return drop(c,b)}),exports.span=b(function(a,b){return[takeWhile(a,b),dropWhile(a,b)]}),exports.breakList=b(function(a,b){return span(c(contradict,a),b)}),exports.elem=b(function(a,b){return d(a,b)}),exports.notElem=b(function(a,b){return!d(a,b)}),exports.lookup=b(function(a,b){return b!=null?b[a]:void 8}),exports.zip=function(){var b,c,d,e,f,g,h,i,j;b=a.call(arguments),c=[];for(d=0,h=b.length;d<h;++d){e=b[d];for(f=0,i=e.length;f<i;++f)g=e[f],d===0&&c.push([]),(j=c[f])!=null&&j.push(g)}return c},exports.zipWith=function(b){var c,d,e,f,g,h;c=a.call(arguments,1);if(!c[0].length||!c[1].length)return[];d=[];for(f=0,h=(g=zip.apply(this,c)).length;f<h;++f)e=g[f],d.push(b.apply(this,e));return d},exports.lines=function(a){return a.split("\n")},exports.unlines=function(a){return a.join("\n")},exports.words=function(a){return a.split(" ")},exports.unwords=function(a){return a.join(" ")},exports}();