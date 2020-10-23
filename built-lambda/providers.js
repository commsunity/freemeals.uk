!function(e,t){for(var r in t)e[r]=t[r]}(exports,function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=6)}([function(e,t){e.exports=require("stream")},function(e,t){e.exports=require("zlib")},function(e,t){e.exports=require("url")},function(e,t){e.exports=require("http")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=(n=r(7))&&n.__esModule?n:{default:n};var i=function(e,t,r){return(0,o.default)(e,(function(e){t(e)}),(function(e){if(!r)throw new Error("g-sheets-api error: ".concat(e));r(e)}))};e.exports=i;var s=i;t.default=s},function(e,t){e.exports=require("https")},function(e,t,r){"use strict";r.r(t),r.d(t,"handler",(function(){return i}));var n=r(4),o=r.n(n);async function i(e,t){try{const e=await new Promise((e,t)=>{o()({sheetId:"1OaRn7UHsFpFLOfTeiUnIBr7ofjcemBEvf_gl5b1PoTY",sheetNumber:4,returnAllResults:!0},t=>{e(t)},e=>{t(e)})});return{statusCode:200,body:JSON.stringify(e)}}catch(e){return{statusCode:500,body:JSON.stringify({msg:e.message})}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=(n=r(8))&&n.__esModule?n:{default:n};function i(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,a=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return u=e.done,e},e:function(e){a=!0,i=e},f:function(){try{u||null==r.return||r.return()}finally{if(a)throw i}}}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function u(e,t,r){return e.filter((function(e){var n=null,o=[];return!(void 0===e||e.length<=0||Object.keys(e).length<=0)&&(Object.keys(t).forEach((function(n){var i=t[n],s=e[n];o.push(function(e,t,r){try{if(void 0!==e){if(e=e.toLowerCase().trim(),t=t.toLowerCase().trim(),"strict"===r)return e===t;if("loose"===r)return e.includes(t)||e==t}}catch(e){return console.log("error in matchValues: ".concat(e.message)),!1}return!1}(s,i,r.matching||"loose"))})),"or"===r.operator&&(n=o.some((function(e){return!0===e}))),"and"===r.operator&&(n=o.every((function(e){return!0===e}))),n)}))}var a=function(e,t,r){return(0,o.default)(e.sheetId,e.sheetNumber?e.sheetNumber:1).then((function(r){var n=function(e,t,r,n){var o,s=[{}],a={},c=i(e.feed.entry);try{for(c.s();!(o=c.n()).done;){var l=o.value.gs$cell,f=l.$t,d=l.col,h=l.row,p=a[d];h<2?a[d]=f.toLowerCase():(void 0===s[h]&&(s[h]={}),void 0!==p&&p.length>0&&(s[h][p]=f))}}catch(e){c.e(e)}finally{c.f()}return s=s.filter((function(e){return Object.keys(e).length})),t||!r?s:u(s,r,n)}(r,e.returnAllResults||!1,e.filter||!1,e.filterOptions||{operator:"or",matching:"loose"});t(n)})).catch((function(e){return r(e.message)}))};t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=(n=r(9))&&n.__esModule?n:{default:n};var i=function(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;try{t=window.fetch}catch(e){t=o.default}try{var n="https://spreadsheets.google.com/feeds/cells/".concat(e,"/").concat(r,"/public/values?alt=json-in-script");return t(n).then((function(e){if(!e.ok)throw console.log("there is an error in the gsheets response"),new Error("Error fetching GSheet");return e.text()})).then((function(e){var t=e.replace("gdata.io.handleScriptLoaded(","").slice(0,-2);return JSON.parse(t)})).catch((function(e){throw new Error("Failed to fetch from GSheets API. Check your Sheet Id and the public availability of your GSheet.")}))}catch(e){throw new Error("General error when fetching GSheet: ".concat(e))}};t.default=i},function(e,t,r){"use strict";r.r(t),r.d(t,"Headers",(function(){return $})),r.d(t,"Request",(function(){return N})),r.d(t,"Response",(function(){return U})),r.d(t,"FetchError",(function(){return d}));var n=r(0),o=r(3),i=r(2),s=r(5),u=r(1);const a=n.Readable,c=Symbol("buffer"),l=Symbol("type");class f{constructor(){this[l]="";const e=arguments[0],t=arguments[1],r=[];let n=0;if(e){const t=e,o=Number(t.length);for(let e=0;e<o;e++){const o=t[e];let i;i=o instanceof Buffer?o:ArrayBuffer.isView(o)?Buffer.from(o.buffer,o.byteOffset,o.byteLength):o instanceof ArrayBuffer?Buffer.from(o):o instanceof f?o[c]:Buffer.from("string"==typeof o?o:String(o)),n+=i.length,r.push(i)}}this[c]=Buffer.concat(r);let o=t&&void 0!==t.type&&String(t.type).toLowerCase();o&&!/[^\u0020-\u007E]/.test(o)&&(this[l]=o)}get size(){return this[c].length}get type(){return this[l]}text(){return Promise.resolve(this[c].toString())}arrayBuffer(){const e=this[c],t=e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength);return Promise.resolve(t)}stream(){const e=new a;return e._read=function(){},e.push(this[c]),e.push(null),e}toString(){return"[object Blob]"}slice(){const e=this.size,t=arguments[0],r=arguments[1];let n,o;n=void 0===t?0:t<0?Math.max(e+t,0):Math.min(t,e),o=void 0===r?e:r<0?Math.max(e+r,0):Math.min(r,e);const i=Math.max(o-n,0),s=this[c].slice(n,n+i),u=new f([],{type:arguments[2]});return u[c]=s,u}}function d(e,t,r){Error.call(this,e),this.message=e,this.type=t,r&&(this.code=this.errno=r.code),Error.captureStackTrace(this,this.constructor)}let h;Object.defineProperties(f.prototype,{size:{enumerable:!0},type:{enumerable:!0},slice:{enumerable:!0}}),Object.defineProperty(f.prototype,Symbol.toStringTag,{value:"Blob",writable:!1,enumerable:!1,configurable:!0}),d.prototype=Object.create(Error.prototype),d.prototype.constructor=d,d.prototype.name="FetchError";try{h=require("encoding").convert}catch(e){}const p=Symbol("Body internals"),y=n.PassThrough;function b(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=r.size;let i=void 0===o?0:o;var s=r.timeout;let u=void 0===s?0:s;null==e?e=null:g(e)?e=Buffer.from(e.toString()):v(e)||Buffer.isBuffer(e)||("[object ArrayBuffer]"===Object.prototype.toString.call(e)?e=Buffer.from(e):ArrayBuffer.isView(e)?e=Buffer.from(e.buffer,e.byteOffset,e.byteLength):e instanceof n||(e=Buffer.from(String(e)))),this[p]={body:e,disturbed:!1,error:null},this.size=i,this.timeout=u,e instanceof n&&e.on("error",(function(e){const r="AbortError"===e.name?e:new d(`Invalid response body while trying to fetch ${t.url}: ${e.message}`,"system",e);t[p].error=r}))}function m(){var e=this;if(this[p].disturbed)return b.Promise.reject(new TypeError(`body used already for: ${this.url}`));if(this[p].disturbed=!0,this[p].error)return b.Promise.reject(this[p].error);let t=this.body;if(null===t)return b.Promise.resolve(Buffer.alloc(0));if(v(t)&&(t=t.stream()),Buffer.isBuffer(t))return b.Promise.resolve(t);if(!(t instanceof n))return b.Promise.resolve(Buffer.alloc(0));let r=[],o=0,i=!1;return new b.Promise((function(n,s){let u;e.timeout&&(u=setTimeout((function(){i=!0,s(new d(`Response timeout while trying to fetch ${e.url} (over ${e.timeout}ms)`,"body-timeout"))}),e.timeout)),t.on("error",(function(t){"AbortError"===t.name?(i=!0,s(t)):s(new d(`Invalid response body while trying to fetch ${e.url}: ${t.message}`,"system",t))})),t.on("data",(function(t){if(!i&&null!==t){if(e.size&&o+t.length>e.size)return i=!0,void s(new d(`content size at ${e.url} over limit: ${e.size}`,"max-size"));o+=t.length,r.push(t)}})),t.on("end",(function(){if(!i){clearTimeout(u);try{n(Buffer.concat(r,o))}catch(t){s(new d(`Could not create Buffer from response body for ${e.url}: ${t.message}`,"system",t))}}}))}))}function g(e){return"object"==typeof e&&"function"==typeof e.append&&"function"==typeof e.delete&&"function"==typeof e.get&&"function"==typeof e.getAll&&"function"==typeof e.has&&"function"==typeof e.set&&("URLSearchParams"===e.constructor.name||"[object URLSearchParams]"===Object.prototype.toString.call(e)||"function"==typeof e.sort)}function v(e){return"object"==typeof e&&"function"==typeof e.arrayBuffer&&"string"==typeof e.type&&"function"==typeof e.stream&&"function"==typeof e.constructor&&"string"==typeof e.constructor.name&&/^(Blob|File)$/.test(e.constructor.name)&&/^(Blob|File)$/.test(e[Symbol.toStringTag])}function w(e){let t,r,o=e.body;if(e.bodyUsed)throw new Error("cannot clone body after it is used");return o instanceof n&&"function"!=typeof o.getBoundary&&(t=new y,r=new y,o.pipe(t),o.pipe(r),e[p].body=t,o=r),o}function S(e){return null===e?null:"string"==typeof e?"text/plain;charset=UTF-8":g(e)?"application/x-www-form-urlencoded;charset=UTF-8":v(e)?e.type||null:Buffer.isBuffer(e)||"[object ArrayBuffer]"===Object.prototype.toString.call(e)||ArrayBuffer.isView(e)?null:"function"==typeof e.getBoundary?`multipart/form-data;boundary=${e.getBoundary()}`:e instanceof n?null:"text/plain;charset=UTF-8"}function j(e){const t=e.body;return null===t?0:v(t)?t.size:Buffer.isBuffer(t)?t.length:t&&"function"==typeof t.getLengthSync&&(t._lengthRetrievers&&0==t._lengthRetrievers.length||t.hasKnownLength&&t.hasKnownLength())?t.getLengthSync():null}b.prototype={get body(){return this[p].body},get bodyUsed(){return this[p].disturbed},arrayBuffer(){return m.call(this).then((function(e){return e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength)}))},blob(){let e=this.headers&&this.headers.get("content-type")||"";return m.call(this).then((function(t){return Object.assign(new f([],{type:e.toLowerCase()}),{[c]:t})}))},json(){var e=this;return m.call(this).then((function(t){try{return JSON.parse(t.toString())}catch(t){return b.Promise.reject(new d(`invalid json response body at ${e.url} reason: ${t.message}`,"invalid-json"))}}))},text(){return m.call(this).then((function(e){return e.toString()}))},buffer(){return m.call(this)},textConverted(){var e=this;return m.call(this).then((function(t){return function(e,t){if("function"!=typeof h)throw new Error("The package `encoding` must be installed to use the textConverted() function");const r=t.get("content-type");let n,o,i="utf-8";r&&(n=/charset=([^;]*)/i.exec(r));o=e.slice(0,1024).toString(),!n&&o&&(n=/<meta.+?charset=(['"])(.+?)\1/i.exec(o));!n&&o&&(n=/<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(o),n||(n=/<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(o),n&&n.pop()),n&&(n=/charset=(.*)/i.exec(n.pop())));!n&&o&&(n=/<\?xml.+?encoding=(['"])(.+?)\1/i.exec(o));n&&(i=n.pop(),"gb2312"!==i&&"gbk"!==i||(i="gb18030"));return h(e,"UTF-8",i).toString()}(t,e.headers)}))}},Object.defineProperties(b.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0}}),b.mixIn=function(e){for(const t of Object.getOwnPropertyNames(b.prototype))if(!(t in e)){const r=Object.getOwnPropertyDescriptor(b.prototype,t);Object.defineProperty(e,t,r)}},b.Promise=global.Promise;const O=/[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/,T=/[^\t\x20-\x7e\x80-\xff]/;function P(e){if(e=`${e}`,O.test(e)||""===e)throw new TypeError(`${e} is not a legal HTTP header name`)}function x(e){if(e=`${e}`,T.test(e))throw new TypeError(`${e} is not a legal HTTP header value`)}function E(e,t){t=t.toLowerCase();for(const r in e)if(r.toLowerCase()===t)return r}const B=Symbol("map");class ${constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;if(this[B]=Object.create(null),e instanceof $){const t=e.raw(),r=Object.keys(t);for(const e of r)for(const r of t[e])this.append(e,r)}else if(null==e);else{if("object"!=typeof e)throw new TypeError("Provided initializer must be an object");{const t=e[Symbol.iterator];if(null!=t){if("function"!=typeof t)throw new TypeError("Header pairs must be iterable");const r=[];for(const t of e){if("object"!=typeof t||"function"!=typeof t[Symbol.iterator])throw new TypeError("Each header pair must be iterable");r.push(Array.from(t))}for(const e of r){if(2!==e.length)throw new TypeError("Each header pair must be a name/value tuple");this.append(e[0],e[1])}}else for(const t of Object.keys(e)){const r=e[t];this.append(t,r)}}}}get(e){P(e=`${e}`);const t=E(this[B],e);return void 0===t?null:this[B][t].join(", ")}forEach(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,r=C(this),n=0;for(;n<r.length;){var o=r[n];const i=o[0],s=o[1];e.call(t,s,i,this),r=C(this),n++}}set(e,t){t=`${t}`,P(e=`${e}`),x(t);const r=E(this[B],e);this[B][void 0!==r?r:e]=[t]}append(e,t){t=`${t}`,P(e=`${e}`),x(t);const r=E(this[B],e);void 0!==r?this[B][r].push(t):this[B][e]=[t]}has(e){return P(e=`${e}`),void 0!==E(this[B],e)}delete(e){P(e=`${e}`);const t=E(this[B],e);void 0!==t&&delete this[B][t]}raw(){return this[B]}keys(){return L(this,"key")}values(){return L(this,"value")}[Symbol.iterator](){return L(this,"key+value")}}function C(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"key+value";const r=Object.keys(e[B]).sort();return r.map("key"===t?function(e){return e.toLowerCase()}:"value"===t?function(t){return e[B][t].join(", ")}:function(t){return[t.toLowerCase(),e[B][t].join(", ")]})}$.prototype.entries=$.prototype[Symbol.iterator],Object.defineProperty($.prototype,Symbol.toStringTag,{value:"Headers",writable:!1,enumerable:!1,configurable:!0}),Object.defineProperties($.prototype,{get:{enumerable:!0},forEach:{enumerable:!0},set:{enumerable:!0},append:{enumerable:!0},has:{enumerable:!0},delete:{enumerable:!0},keys:{enumerable:!0},values:{enumerable:!0},entries:{enumerable:!0}});const A=Symbol("internal");function L(e,t){const r=Object.create(_);return r[A]={target:e,kind:t,index:0},r}const _=Object.setPrototypeOf({next(){if(!this||Object.getPrototypeOf(this)!==_)throw new TypeError("Value of `this` is not a HeadersIterator");var e=this[A];const t=e.target,r=e.kind,n=e.index,o=C(t,r);return n>=o.length?{value:void 0,done:!0}:(this[A].index=n+1,{value:o[n],done:!1})}},Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));function k(e){const t=Object.assign({__proto__:null},e[B]),r=E(e[B],"Host");return void 0!==r&&(t[r]=t[r][0]),t}Object.defineProperty(_,Symbol.toStringTag,{value:"HeadersIterator",writable:!1,enumerable:!1,configurable:!0});const R=Symbol("Response internals"),z=o.STATUS_CODES;class U{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};b.call(this,e,t);const r=t.status||200,n=new $(t.headers);if(null!=e&&!n.has("Content-Type")){const t=S(e);t&&n.append("Content-Type",t)}this[R]={url:t.url,status:r,statusText:t.statusText||z[r],headers:n,counter:t.counter}}get url(){return this[R].url||""}get status(){return this[R].status}get ok(){return this[R].status>=200&&this[R].status<300}get redirected(){return this[R].counter>0}get statusText(){return this[R].statusText}get headers(){return this[R].headers}clone(){return new U(w(this),{url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected})}}b.mixIn(U.prototype),Object.defineProperties(U.prototype,{url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}}),Object.defineProperty(U.prototype,Symbol.toStringTag,{value:"Response",writable:!1,enumerable:!1,configurable:!0});const q=Symbol("Request internals"),I=i.parse,M=i.format,H="destroy"in n.Readable.prototype;function F(e){return"object"==typeof e&&"object"==typeof e[q]}class N{constructor(e){let t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};F(e)?t=I(e.url):(t=e&&e.href?I(e.href):I(`${e}`),e={});let n=r.method||e.method||"GET";if(n=n.toUpperCase(),(null!=r.body||F(e)&&null!==e.body)&&("GET"===n||"HEAD"===n))throw new TypeError("Request with GET/HEAD method cannot have body");let o=null!=r.body?r.body:F(e)&&null!==e.body?w(e):null;b.call(this,o,{timeout:r.timeout||e.timeout||0,size:r.size||e.size||0});const i=new $(r.headers||e.headers||{});if(null!=o&&!i.has("Content-Type")){const e=S(o);e&&i.append("Content-Type",e)}let s=F(e)?e.signal:null;if("signal"in r&&(s=r.signal),null!=s&&!function(e){const t=e&&"object"==typeof e&&Object.getPrototypeOf(e);return!(!t||"AbortSignal"!==t.constructor.name)}(s))throw new TypeError("Expected signal to be an instanceof AbortSignal");this[q]={method:n,redirect:r.redirect||e.redirect||"follow",headers:i,parsedURL:t,signal:s},this.follow=void 0!==r.follow?r.follow:void 0!==e.follow?e.follow:20,this.compress=void 0!==r.compress?r.compress:void 0===e.compress||e.compress,this.counter=r.counter||e.counter||0,this.agent=r.agent||e.agent}get method(){return this[q].method}get url(){return M(this[q].parsedURL)}get headers(){return this[q].headers}get redirect(){return this[q].redirect}get signal(){return this[q].signal}clone(){return new N(this)}}function G(e){Error.call(this,e),this.type="aborted",this.message=e,Error.captureStackTrace(this,this.constructor)}b.mixIn(N.prototype),Object.defineProperty(N.prototype,Symbol.toStringTag,{value:"Request",writable:!1,enumerable:!1,configurable:!0}),Object.defineProperties(N.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0}}),G.prototype=Object.create(Error.prototype),G.prototype.constructor=G,G.prototype.name="AbortError";const D=n.PassThrough,V=i.resolve;function J(e,t){if(!J.Promise)throw new Error("native promise missing, set fetch.Promise to your favorite alternative");return b.Promise=J.Promise,new J.Promise((function(r,i){const a=new N(e,t),c=function(e){const t=e[q].parsedURL,r=new $(e[q].headers);if(r.has("Accept")||r.set("Accept","*/*"),!t.protocol||!t.hostname)throw new TypeError("Only absolute URLs are supported");if(!/^https?:$/.test(t.protocol))throw new TypeError("Only HTTP(S) protocols are supported");if(e.signal&&e.body instanceof n.Readable&&!H)throw new Error("Cancellation of streamed requests with AbortSignal is not supported in node < 8");let o=null;if(null==e.body&&/^(POST|PUT)$/i.test(e.method)&&(o="0"),null!=e.body){const t=j(e);"number"==typeof t&&(o=String(t))}o&&r.set("Content-Length",o),r.has("User-Agent")||r.set("User-Agent","node-fetch/1.0 (+https://github.com/bitinn/node-fetch)"),e.compress&&!r.has("Accept-Encoding")&&r.set("Accept-Encoding","gzip,deflate");let i=e.agent;return"function"==typeof i&&(i=i(t)),r.has("Connection")||i||r.set("Connection","close"),Object.assign({},t,{method:e.method,headers:k(r),agent:i})}(a),l=("https:"===c.protocol?s:o).request,f=a.signal;let h=null;const p=function(){let e=new G("The user aborted a request.");i(e),a.body&&a.body instanceof n.Readable&&a.body.destroy(e),h&&h.body&&h.body.emit("error",e)};if(f&&f.aborted)return void p();const y=function(){p(),g()},b=l(c);let m;function g(){b.abort(),f&&f.removeEventListener("abort",y),clearTimeout(m)}f&&f.addEventListener("abort",y),a.timeout&&b.once("socket",(function(e){m=setTimeout((function(){i(new d(`network timeout at: ${a.url}`,"request-timeout")),g()}),a.timeout)})),b.on("error",(function(e){i(new d(`request to ${a.url} failed, reason: ${e.message}`,"system",e)),g()})),b.on("response",(function(e){clearTimeout(m);const t=function(e){const t=new $;for(const r of Object.keys(e))if(!O.test(r))if(Array.isArray(e[r]))for(const n of e[r])T.test(n)||(void 0===t[B][r]?t[B][r]=[n]:t[B][r].push(n));else T.test(e[r])||(t[B][r]=[e[r]]);return t}(e.headers);if(J.isRedirect(e.statusCode)){const n=t.get("Location"),o=null===n?null:V(a.url,n);switch(a.redirect){case"error":return i(new d(`uri requested responds with a redirect, redirect mode is set to error: ${a.url}`,"no-redirect")),void g();case"manual":if(null!==o)try{t.set("Location",o)}catch(e){i(e)}break;case"follow":if(null===o)break;if(a.counter>=a.follow)return i(new d(`maximum redirect reached at: ${a.url}`,"max-redirect")),void g();const n={headers:new $(a.headers),follow:a.follow,counter:a.counter+1,agent:a.agent,compress:a.compress,method:a.method,body:a.body,signal:a.signal,timeout:a.timeout,size:a.size};return 303!==e.statusCode&&a.body&&null===j(a)?(i(new d("Cannot follow redirect with body being a readable stream","unsupported-redirect")),void g()):(303!==e.statusCode&&(301!==e.statusCode&&302!==e.statusCode||"POST"!==a.method)||(n.method="GET",n.body=void 0,n.headers.delete("content-length")),r(J(new N(o,n))),void g())}}e.once("end",(function(){f&&f.removeEventListener("abort",y)}));let n=e.pipe(new D);const o={url:a.url,status:e.statusCode,statusText:e.statusMessage,headers:t,size:a.size,timeout:a.timeout,counter:a.counter},s=t.get("Content-Encoding");if(!a.compress||"HEAD"===a.method||null===s||204===e.statusCode||304===e.statusCode)return h=new U(n,o),void r(h);const c={flush:u.Z_SYNC_FLUSH,finishFlush:u.Z_SYNC_FLUSH};if("gzip"==s||"x-gzip"==s)return n=n.pipe(u.createGunzip(c)),h=new U(n,o),void r(h);if("deflate"!=s&&"x-deflate"!=s){if("br"==s&&"function"==typeof u.createBrotliDecompress)return n=n.pipe(u.createBrotliDecompress()),h=new U(n,o),void r(h);h=new U(n,o),r(h)}else{e.pipe(new D).once("data",(function(e){n=8==(15&e[0])?n.pipe(u.createInflate()):n.pipe(u.createInflateRaw()),h=new U(n,o),r(h)}))}})),function(e,t){const r=t.body;null===r?e.end():v(r)?r.stream().pipe(e):Buffer.isBuffer(r)?(e.write(r),e.end()):r.pipe(e)}(b,a)}))}J.isRedirect=function(e){return 301===e||302===e||303===e||307===e||308===e},J.Promise=global.Promise,t.default=J}]));