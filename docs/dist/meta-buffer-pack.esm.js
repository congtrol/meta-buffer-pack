for(var t=function(t){var e=h(t),r=e[0],n=e[1];return 3*(r+n)/4-n},e=function(t){var e,r,n=h(t),f=n[0],u=n[1],s=new o(function(t,e,r){return 3*(e+r)/4-r}(0,f,u)),a=0,c=u>0?f-4:f;for(r=0;r<c;r+=4)e=i[t.charCodeAt(r)]<<18|i[t.charCodeAt(r+1)]<<12|i[t.charCodeAt(r+2)]<<6|i[t.charCodeAt(r+3)],s[a++]=e>>16&255,s[a++]=e>>8&255,s[a++]=255&e;2===u&&(e=i[t.charCodeAt(r)]<<2|i[t.charCodeAt(r+1)]>>4,s[a++]=255&e);1===u&&(e=i[t.charCodeAt(r)]<<10|i[t.charCodeAt(r+1)]<<4|i[t.charCodeAt(r+2)]>>2,s[a++]=e>>8&255,s[a++]=255&e);return s},r=function(t){for(var e,r=t.length,i=r%3,o=[],f=16383,u=0,s=r-i;u<s;u+=f)o.push(a(t,u,u+f>s?s:u+f));1===i?(e=t[r-1],o.push(n[e>>2]+n[e<<4&63]+"==")):2===i&&(e=(t[r-2]<<8)+t[r-1],o.push(n[e>>10]+n[e>>4&63]+n[e<<2&63]+"="));return o.join("")},n=[],i=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",u=0,s=f.length;u<s;++u)n[u]=f[u],i[f.charCodeAt(u)]=u;function h(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");return-1===r&&(r=e),[r,r===e?0:4-r%4]}function a(t,e,r){for(var i,o,f=[],u=e;u<r;u+=3)i=(t[u]<<16&16711680)+(t[u+1]<<8&65280)+(255&t[u+2]),f.push(n[(o=i)>>18&63]+n[o>>12&63]+n[o>>6&63]+n[63&o]);return f.join("")}i["-".charCodeAt(0)]=62,i["_".charCodeAt(0)]=63;var c,l,p={byteLength:t,toByteArray:e,fromByteArray:r},y=function(t,e,r,n,i){var o,f,u=8*i-n-1,s=(1<<u)-1,h=s>>1,a=-7,c=r?i-1:0,l=r?-1:1,p=t[e+c];for(c+=l,o=p&(1<<-a)-1,p>>=-a,a+=u;a>0;o=256*o+t[e+c],c+=l,a-=8);for(f=o&(1<<-a)-1,o>>=-a,a+=n;a>0;f=256*f+t[e+c],c+=l,a-=8);if(0===o)o=1-h;else{if(o===s)return f?NaN:1/0*(p?-1:1);f+=Math.pow(2,n),o-=h}return(p?-1:1)*f*Math.pow(2,o-n)},g=function(t,e,r,n,i,o){var f,u,s,h=8*o-i-1,a=(1<<h)-1,c=a>>1,l=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:o-1,y=n?1:-1,g=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(u=isNaN(e)?1:0,f=a):(f=Math.floor(Math.log(e)/Math.LN2),e*(s=Math.pow(2,-f))<1&&(f--,s*=2),(e+=f+c>=1?l/s:l*Math.pow(2,1-c))*s>=2&&(f++,s/=2),f+c>=a?(u=0,f=a):f+c>=1?(u=(e*s-1)*Math.pow(2,i),f+=c):(u=e*Math.pow(2,c-1)*Math.pow(2,i),f=0));i>=8;t[r+p]=255&u,p+=y,u/=256,i-=8);for(f=f<<i|u,h+=i;h>0;t[r+p]=255&f,p+=y,f/=256,h-=8);t[r+p-y]|=128*g},d=(c=function(t,e){const r="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;e.Buffer=o,e.SlowBuffer=function(t){return+t!=t&&(t=0),o.alloc(+t)},e.INSPECT_MAX_BYTES=50;const n=2147483647;function i(t){if(t>n)throw new RangeError('The value "'+t+'" is invalid for option "size"');const e=new Uint8Array(t);return Object.setPrototypeOf(e,o.prototype),e}function o(t,e,r){if("number"==typeof t){if("string"==typeof e)throw new TypeError('The "string" argument must be of type string. Received type number');return s(t)}return f(t,e,r)}function f(t,e,r){if("string"==typeof t)return function(t,e){if("string"==typeof e&&""!==e||(e="utf8"),!o.isEncoding(e))throw new TypeError("Unknown encoding: "+e);const r=0|l(t,e);let n=i(r);const f=n.write(t,e);return f!==r&&(n=n.slice(0,f)),n}(t,e);if(ArrayBuffer.isView(t))return function(t){if(X(t,Uint8Array)){const e=new Uint8Array(t);return a(e.buffer,e.byteOffset,e.byteLength)}return h(t)}(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(X(t,ArrayBuffer)||t&&X(t.buffer,ArrayBuffer))return a(t,e,r);if("undefined"!=typeof SharedArrayBuffer&&(X(t,SharedArrayBuffer)||t&&X(t.buffer,SharedArrayBuffer)))return a(t,e,r);if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');const n=t.valueOf&&t.valueOf();if(null!=n&&n!==t)return o.from(n,e,r);const f=function(t){if(o.isBuffer(t)){const e=0|c(t.length),r=i(e);return 0===r.length||t.copy(r,0,0,e),r}return void 0!==t.length?"number"!=typeof t.length||Z(t.length)?i(0):h(t):"Buffer"===t.type&&Array.isArray(t.data)?h(t.data):void 0}(t);if(f)return f;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return o.from(t[Symbol.toPrimitive]("string"),e,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function u(t){if("number"!=typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function s(t){return u(t),i(t<0?0:0|c(t))}function h(t){const e=t.length<0?0:0|c(t.length),r=i(e);for(let n=0;n<e;n+=1)r[n]=255&t[n];return r}function a(t,e,r){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(r||0))throw new RangeError('"length" is outside of buffer bounds');let n;return n=void 0===e&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,e):new Uint8Array(t,e,r),Object.setPrototypeOf(n,o.prototype),n}function c(t){if(t>=n)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+n.toString(16)+" bytes");return 0|t}function l(t,e){if(o.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||X(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);const r=t.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;let i=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return V(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return q(t).length;default:if(i)return n?-1:V(t).length;e=(""+e).toLowerCase(),i=!0}}function d(t,e,r){let n=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return S(this,e,r);case"utf8":case"utf-8":return L(this,e,r);case"ascii":return R(this,e,r);case"latin1":case"binary":return T(this,e,r);case"base64":return v(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return _(this,e,r);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function w(t,e,r){const n=t[e];t[e]=t[r],t[r]=n}function b(t,e,r,n,i){if(0===t.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),Z(r=+r)&&(r=i?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(i)return-1;r=t.length-1}else if(r<0){if(!i)return-1;r=0}if("string"==typeof e&&(e=o.from(e,n)),o.isBuffer(e))return 0===e.length?-1:B(t,e,r,n,i);if("number"==typeof e)return e&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):B(t,[e],r,n,i);throw new TypeError("val must be string, number or Buffer")}function B(t,e,r,n,i){let o,f=1,u=t.length,s=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return-1;f=2,u/=2,s/=2,r/=2}function h(t,e){return 1===f?t[e]:t.readUInt16BE(e*f)}if(i){let n=-1;for(o=r;o<u;o++)if(h(t,o)===h(e,-1===n?0:o-n)){if(-1===n&&(n=o),o-n+1===s)return n*f}else-1!==n&&(o-=o-n),n=-1}else for(r+s>u&&(r=u-s),o=r;o>=0;o--){let r=!0;for(let n=0;n<s;n++)if(h(t,o+n)!==h(e,n)){r=!1;break}if(r)return o}return-1}function E(t,e,r,n){r=Number(r)||0;const i=t.length-r;n?(n=Number(n))>i&&(n=i):n=i;const o=e.length;let f;for(n>o/2&&(n=o/2),f=0;f<n;++f){const n=parseInt(e.substr(2*f,2),16);if(Z(n))return f;t[r+f]=n}return f}function m(t,e,r,n){return W(V(e,t.length-r),t,r,n)}function A(t,e,r,n){return W(function(t){const e=[];for(let r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}(e),t,r,n)}function I(t,e,r,n){return W(q(e),t,r,n)}function U(t,e,r,n){return W(function(t,e){let r,n,i;const o=[];for(let f=0;f<t.length&&!((e-=2)<0);++f)r=t.charCodeAt(f),n=r>>8,i=r%256,o.push(i),o.push(n);return o}(e,t.length-r),t,r,n)}function v(t,e,r){return 0===e&&r===t.length?p.fromByteArray(t):p.fromByteArray(t.slice(e,r))}function L(t,e,r){r=Math.min(t.length,r);const n=[];let i=e;for(;i<r;){const e=t[i];let o=null,f=e>239?4:e>223?3:e>191?2:1;if(i+f<=r){let r,n,u,s;switch(f){case 1:e<128&&(o=e);break;case 2:r=t[i+1],128==(192&r)&&(s=(31&e)<<6|63&r,s>127&&(o=s));break;case 3:r=t[i+1],n=t[i+2],128==(192&r)&&128==(192&n)&&(s=(15&e)<<12|(63&r)<<6|63&n,s>2047&&(s<55296||s>57343)&&(o=s));break;case 4:r=t[i+1],n=t[i+2],u=t[i+3],128==(192&r)&&128==(192&n)&&128==(192&u)&&(s=(15&e)<<18|(63&r)<<12|(63&n)<<6|63&u,s>65535&&s<1114112&&(o=s))}}null===o?(o=65533,f=1):o>65535&&(o-=65536,n.push(o>>>10&1023|55296),o=56320|1023&o),n.push(o),i+=f}return function(t){const e=t.length;if(e<=O)return String.fromCharCode.apply(String,t);let r="",n=0;for(;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=O));return r}(n)}e.kMaxLength=n,o.TYPED_ARRAY_SUPPORT=function(){try{const t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),o.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(o.prototype,"parent",{enumerable:!0,get:function(){if(o.isBuffer(this))return this.buffer}}),Object.defineProperty(o.prototype,"offset",{enumerable:!0,get:function(){if(o.isBuffer(this))return this.byteOffset}}),o.poolSize=8192,o.from=function(t,e,r){return f(t,e,r)},Object.setPrototypeOf(o.prototype,Uint8Array.prototype),Object.setPrototypeOf(o,Uint8Array),o.alloc=function(t,e,r){return function(t,e,r){return u(t),t<=0?i(t):void 0!==e?"string"==typeof r?i(t).fill(e,r):i(t).fill(e):i(t)}(t,e,r)},o.allocUnsafe=function(t){return s(t)},o.allocUnsafeSlow=function(t){return s(t)},o.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==o.prototype},o.compare=function(t,e){if(X(t,Uint8Array)&&(t=o.from(t,t.offset,t.byteLength)),X(e,Uint8Array)&&(e=o.from(e,e.offset,e.byteLength)),!o.isBuffer(t)||!o.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let r=t.length,n=e.length;for(let i=0,o=Math.min(r,n);i<o;++i)if(t[i]!==e[i]){r=t[i],n=e[i];break}return r<n?-1:n<r?1:0},o.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},o.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return o.alloc(0);let r;if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length;const n=o.allocUnsafe(e);let i=0;for(r=0;r<t.length;++r){let e=t[r];if(X(e,Uint8Array))i+e.length>n.length?(o.isBuffer(e)||(e=o.from(e)),e.copy(n,i)):Uint8Array.prototype.set.call(n,e,i);else{if(!o.isBuffer(e))throw new TypeError('"list" argument must be an Array of Buffers');e.copy(n,i)}i+=e.length}return n},o.byteLength=l,o.prototype._isBuffer=!0,o.prototype.swap16=function(){const t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)w(this,e,e+1);return this},o.prototype.swap32=function(){const t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)w(this,e,e+3),w(this,e+1,e+2);return this},o.prototype.swap64=function(){const t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)w(this,e,e+7),w(this,e+1,e+6),w(this,e+2,e+5),w(this,e+3,e+4);return this},o.prototype.toString=function(){const t=this.length;return 0===t?"":0===arguments.length?L(this,0,t):d.apply(this,arguments)},o.prototype.toLocaleString=o.prototype.toString,o.prototype.equals=function(t){if(!o.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===o.compare(this,t)},o.prototype.inspect=function(){let t="";const r=e.INSPECT_MAX_BYTES;return t=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(t+=" ... "),"<Buffer "+t+">"},r&&(o.prototype[r]=o.prototype.inspect),o.prototype.compare=function(t,e,r,n,i){if(X(t,Uint8Array)&&(t=o.from(t,t.offset,t.byteLength)),!o.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),e<0||r>t.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&e>=r)return 0;if(n>=i)return-1;if(e>=r)return 1;if(this===t)return 0;let f=(i>>>=0)-(n>>>=0),u=(r>>>=0)-(e>>>=0);const s=Math.min(f,u),h=this.slice(n,i),a=t.slice(e,r);for(let t=0;t<s;++t)if(h[t]!==a[t]){f=h[t],u=a[t];break}return f<u?-1:u<f?1:0},o.prototype.includes=function(t,e,r){return-1!==this.indexOf(t,e,r)},o.prototype.indexOf=function(t,e,r){return b(this,t,e,r,!0)},o.prototype.lastIndexOf=function(t,e,r){return b(this,t,e,r,!1)},o.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}const i=this.length-e;if((void 0===r||r>i)&&(r=i),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let o=!1;for(;;)switch(n){case"hex":return E(this,t,e,r);case"utf8":case"utf-8":return m(this,t,e,r);case"ascii":case"latin1":case"binary":return A(this,t,e,r);case"base64":return I(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return U(this,t,e,r);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},o.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const O=4096;function R(t,e,r){let n="";r=Math.min(t.length,r);for(let i=e;i<r;++i)n+=String.fromCharCode(127&t[i]);return n}function T(t,e,r){let n="";r=Math.min(t.length,r);for(let i=e;i<r;++i)n+=String.fromCharCode(t[i]);return n}function S(t,e,r){const n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);let i="";for(let n=e;n<r;++n)i+=H[t[n]];return i}function _(t,e,r){const n=t.slice(e,r);let i="";for(let t=0;t<n.length-1;t+=2)i+=String.fromCharCode(n[t]+256*n[t+1]);return i}function x(t,e,r){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function N(t,e,r,n,i,f){if(!o.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<f)throw new RangeError('"value" argument is out of bounds');if(r+n>t.length)throw new RangeError("Index out of range")}function C(t,e,r,n,i){z(e,n,i,t,r,7);let o=Number(e&BigInt(4294967295));t[r++]=o,o>>=8,t[r++]=o,o>>=8,t[r++]=o,o>>=8,t[r++]=o;let f=Number(e>>BigInt(32)&BigInt(4294967295));return t[r++]=f,f>>=8,t[r++]=f,f>>=8,t[r++]=f,f>>=8,t[r++]=f,r}function $(t,e,r,n,i){z(e,n,i,t,r,7);let o=Number(e&BigInt(4294967295));t[r+7]=o,o>>=8,t[r+6]=o,o>>=8,t[r+5]=o,o>>=8,t[r+4]=o;let f=Number(e>>BigInt(32)&BigInt(4294967295));return t[r+3]=f,f>>=8,t[r+2]=f,f>>=8,t[r+1]=f,f>>=8,t[r]=f,r+8}function M(t,e,r,n,i,o){if(r+n>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function P(t,e,r,n,i){return e=+e,r>>>=0,i||M(t,0,r,4),g(t,e,r,n,23,4),r+4}function k(t,e,r,n,i){return e=+e,r>>>=0,i||M(t,0,r,8),g(t,e,r,n,52,8),r+8}o.prototype.slice=function(t,e){const r=this.length;(t=~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),(e=void 0===e?r:~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t);const n=this.subarray(t,e);return Object.setPrototypeOf(n,o.prototype),n},o.prototype.readUintLE=o.prototype.readUIntLE=function(t,e,r){t>>>=0,e>>>=0,r||x(t,e,this.length);let n=this[t],i=1,o=0;for(;++o<e&&(i*=256);)n+=this[t+o]*i;return n},o.prototype.readUintBE=o.prototype.readUIntBE=function(t,e,r){t>>>=0,e>>>=0,r||x(t,e,this.length);let n=this[t+--e],i=1;for(;e>0&&(i*=256);)n+=this[t+--e]*i;return n},o.prototype.readUint8=o.prototype.readUInt8=function(t,e){return t>>>=0,e||x(t,1,this.length),this[t]},o.prototype.readUint16LE=o.prototype.readUInt16LE=function(t,e){return t>>>=0,e||x(t,2,this.length),this[t]|this[t+1]<<8},o.prototype.readUint16BE=o.prototype.readUInt16BE=function(t,e){return t>>>=0,e||x(t,2,this.length),this[t]<<8|this[t+1]},o.prototype.readUint32LE=o.prototype.readUInt32LE=function(t,e){return t>>>=0,e||x(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},o.prototype.readUint32BE=o.prototype.readUInt32BE=function(t,e){return t>>>=0,e||x(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},o.prototype.readBigUInt64LE=K((function(t){Y(t>>>=0,"offset");const e=this[t],r=this[t+7];void 0!==e&&void 0!==r||G(t,this.length-8);const n=e+256*this[++t]+65536*this[++t]+this[++t]*2**24,i=this[++t]+256*this[++t]+65536*this[++t]+r*2**24;return BigInt(n)+(BigInt(i)<<BigInt(32))})),o.prototype.readBigUInt64BE=K((function(t){Y(t>>>=0,"offset");const e=this[t],r=this[t+7];void 0!==e&&void 0!==r||G(t,this.length-8);const n=e*2**24+65536*this[++t]+256*this[++t]+this[++t],i=this[++t]*2**24+65536*this[++t]+256*this[++t]+r;return(BigInt(n)<<BigInt(32))+BigInt(i)})),o.prototype.readIntLE=function(t,e,r){t>>>=0,e>>>=0,r||x(t,e,this.length);let n=this[t],i=1,o=0;for(;++o<e&&(i*=256);)n+=this[t+o]*i;return i*=128,n>=i&&(n-=Math.pow(2,8*e)),n},o.prototype.readIntBE=function(t,e,r){t>>>=0,e>>>=0,r||x(t,e,this.length);let n=e,i=1,o=this[t+--n];for(;n>0&&(i*=256);)o+=this[t+--n]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*e)),o},o.prototype.readInt8=function(t,e){return t>>>=0,e||x(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},o.prototype.readInt16LE=function(t,e){t>>>=0,e||x(t,2,this.length);const r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},o.prototype.readInt16BE=function(t,e){t>>>=0,e||x(t,2,this.length);const r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},o.prototype.readInt32LE=function(t,e){return t>>>=0,e||x(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},o.prototype.readInt32BE=function(t,e){return t>>>=0,e||x(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},o.prototype.readBigInt64LE=K((function(t){Y(t>>>=0,"offset");const e=this[t],r=this[t+7];void 0!==e&&void 0!==r||G(t,this.length-8);const n=this[t+4]+256*this[t+5]+65536*this[t+6]+(r<<24);return(BigInt(n)<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+this[++t]*2**24)})),o.prototype.readBigInt64BE=K((function(t){Y(t>>>=0,"offset");const e=this[t],r=this[t+7];void 0!==e&&void 0!==r||G(t,this.length-8);const n=(e<<24)+65536*this[++t]+256*this[++t]+this[++t];return(BigInt(n)<<BigInt(32))+BigInt(this[++t]*2**24+65536*this[++t]+256*this[++t]+r)})),o.prototype.readFloatLE=function(t,e){return t>>>=0,e||x(t,4,this.length),y(this,t,!0,23,4)},o.prototype.readFloatBE=function(t,e){return t>>>=0,e||x(t,4,this.length),y(this,t,!1,23,4)},o.prototype.readDoubleLE=function(t,e){return t>>>=0,e||x(t,8,this.length),y(this,t,!0,52,8)},o.prototype.readDoubleBE=function(t,e){return t>>>=0,e||x(t,8,this.length),y(this,t,!1,52,8)},o.prototype.writeUintLE=o.prototype.writeUIntLE=function(t,e,r,n){t=+t,e>>>=0,r>>>=0,n||N(this,t,e,r,Math.pow(2,8*r)-1,0);let i=1,o=0;for(this[e]=255&t;++o<r&&(i*=256);)this[e+o]=t/i&255;return e+r},o.prototype.writeUintBE=o.prototype.writeUIntBE=function(t,e,r,n){t=+t,e>>>=0,r>>>=0,n||N(this,t,e,r,Math.pow(2,8*r)-1,0);let i=r-1,o=1;for(this[e+i]=255&t;--i>=0&&(o*=256);)this[e+i]=t/o&255;return e+r},o.prototype.writeUint8=o.prototype.writeUInt8=function(t,e,r){return t=+t,e>>>=0,r||N(this,t,e,1,255,0),this[e]=255&t,e+1},o.prototype.writeUint16LE=o.prototype.writeUInt16LE=function(t,e,r){return t=+t,e>>>=0,r||N(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},o.prototype.writeUint16BE=o.prototype.writeUInt16BE=function(t,e,r){return t=+t,e>>>=0,r||N(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},o.prototype.writeUint32LE=o.prototype.writeUInt32LE=function(t,e,r){return t=+t,e>>>=0,r||N(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},o.prototype.writeUint32BE=o.prototype.writeUInt32BE=function(t,e,r){return t=+t,e>>>=0,r||N(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},o.prototype.writeBigUInt64LE=K((function(t,e=0){return C(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),o.prototype.writeBigUInt64BE=K((function(t,e=0){return $(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),o.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e>>>=0,!n){const n=Math.pow(2,8*r-1);N(this,t,e,r,n-1,-n)}let i=0,o=1,f=0;for(this[e]=255&t;++i<r&&(o*=256);)t<0&&0===f&&0!==this[e+i-1]&&(f=1),this[e+i]=(t/o>>0)-f&255;return e+r},o.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e>>>=0,!n){const n=Math.pow(2,8*r-1);N(this,t,e,r,n-1,-n)}let i=r-1,o=1,f=0;for(this[e+i]=255&t;--i>=0&&(o*=256);)t<0&&0===f&&0!==this[e+i+1]&&(f=1),this[e+i]=(t/o>>0)-f&255;return e+r},o.prototype.writeInt8=function(t,e,r){return t=+t,e>>>=0,r||N(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},o.prototype.writeInt16LE=function(t,e,r){return t=+t,e>>>=0,r||N(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},o.prototype.writeInt16BE=function(t,e,r){return t=+t,e>>>=0,r||N(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},o.prototype.writeInt32LE=function(t,e,r){return t=+t,e>>>=0,r||N(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},o.prototype.writeInt32BE=function(t,e,r){return t=+t,e>>>=0,r||N(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},o.prototype.writeBigInt64LE=K((function(t,e=0){return C(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),o.prototype.writeBigInt64BE=K((function(t,e=0){return $(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),o.prototype.writeFloatLE=function(t,e,r){return P(this,t,e,!0,r)},o.prototype.writeFloatBE=function(t,e,r){return P(this,t,e,!1,r)},o.prototype.writeDoubleLE=function(t,e,r){return k(this,t,e,!0,r)},o.prototype.writeDoubleBE=function(t,e,r){return k(this,t,e,!1,r)},o.prototype.copy=function(t,e,r,n){if(!o.isBuffer(t))throw new TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);const i=n-r;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,r,n):Uint8Array.prototype.set.call(t,this.subarray(r,n),e),i},o.prototype.fill=function(t,e,r,n){if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!o.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(1===t.length){const e=t.charCodeAt(0);("utf8"===n&&e<128||"latin1"===n)&&(t=e)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;let i;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(i=e;i<r;++i)this[i]=t;else{const f=o.isBuffer(t)?t:o.from(t,n),u=f.length;if(0===u)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(i=0;i<r-e;++i)this[i+e]=f[i%u]}return this};const j={};function F(t,e,r){j[t]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,this.stack,delete this.name}get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}function D(t){let e="",r=t.length;const n="-"===t[0]?1:0;for(;r>=n+4;r-=3)e=`_${t.slice(r-3,r)}${e}`;return`${t.slice(0,r)}${e}`}function z(t,e,r,n,i,o){if(t>r||t<e){const n="bigint"==typeof e?"n":"";let i;throw i=o>3?0===e||e===BigInt(0)?`>= 0${n} and < 2${n} ** ${8*(o+1)}${n}`:`>= -(2${n} ** ${8*(o+1)-1}${n}) and < 2 ** ${8*(o+1)-1}${n}`:`>= ${e}${n} and <= ${r}${n}`,new j.ERR_OUT_OF_RANGE("value",i,t)}!function(t,e,r){Y(e,"offset"),void 0!==t[e]&&void 0!==t[e+r]||G(e,t.length-(r+1))}(n,i,o)}function Y(t,e){if("number"!=typeof t)throw new j.ERR_INVALID_ARG_TYPE(e,"number",t)}function G(t,e,r){if(Math.floor(t)!==t)throw Y(t,r),new j.ERR_OUT_OF_RANGE(r||"offset","an integer",t);if(e<0)throw new j.ERR_BUFFER_OUT_OF_BOUNDS;throw new j.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${e}`,t)}F("ERR_BUFFER_OUT_OF_BOUNDS",(function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),F("ERR_INVALID_ARG_TYPE",(function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`}),TypeError),F("ERR_OUT_OF_RANGE",(function(t,e,r){let n=`The value of "${t}" is out of range.`,i=r;return Number.isInteger(r)&&Math.abs(r)>2**32?i=D(String(r)):"bigint"==typeof r&&(i=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(i=D(i)),i+="n"),n+=` It must be ${e}. Received ${i}`,n}),RangeError);const J=/[^+/0-9A-Za-z-_]/g;function V(t,e){let r;e=e||1/0;const n=t.length;let i=null;const o=[];for(let f=0;f<n;++f){if(r=t.charCodeAt(f),r>55295&&r<57344){if(!i){if(r>56319){(e-=3)>-1&&o.push(239,191,189);continue}if(f+1===n){(e-=3)>-1&&o.push(239,191,189);continue}i=r;continue}if(r<56320){(e-=3)>-1&&o.push(239,191,189),i=r;continue}r=65536+(i-55296<<10|r-56320)}else i&&(e-=3)>-1&&o.push(239,191,189);if(i=null,r<128){if((e-=1)<0)break;o.push(r)}else if(r<2048){if((e-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return o}function q(t){return p.toByteArray(function(t){if((t=(t=t.split("=")[0]).trim().replace(J,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function W(t,e,r,n){let i;for(i=0;i<n&&!(i+r>=e.length||i>=t.length);++i)e[i+r]=t[i];return i}function X(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}function Z(t){return t!=t}const H=function(){const t="0123456789abcdef",e=new Array(256);for(let r=0;r<16;++r){const n=16*r;for(let i=0;i<16;++i)e[n+i]=t[r]+t[i]}return e}();function K(t){return"undefined"==typeof BigInt?Q:t}function Q(){throw new Error("BigInt not supported")}},c(l={exports:{}},l.exports),l.exports);
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */const w=new TextEncoder,b=new TextDecoder,B=E;function E(t,e=0){let r;if(void 0===t||"string"!=typeof t||"number"!=typeof e)throw TypeError("invlaid init variablie type name. ");return(t=t.toUpperCase()).includes("8")?(r=d.Buffer.alloc(1),t.includes("I")?r.writeInt8(e):r.writeUint8(e)):t.includes("16")?(r=d.Buffer.alloc(2),t.includes("I")?t.includes("L")?r.writeInt16LE(e):r.writeInt16BE(e):t.includes("L")?r.writeUint16LE(e):r.writeUint16BE(e)):t.includes("32")?(r=d.Buffer.alloc(4),t.includes("I")?t.includes("L")?r.writeInt32LE(e):r.writeInt32BE(e):t.includes("L")?r.writeUint32LE(e):r.writeUint32BE(e)):t.includes("N")?r=d.Buffer.from(String(e)):console.log(`invalid type: ${t} or initvalue: ${e}`),r}const m=A;function A(t,e,r){let n,i="B";if("number"==typeof e)n=d.Buffer.alloc(e),r&&n.fill(r),i="B";else if("string"==typeof e&&"number"==typeof r)i=e.toUpperCase(),n=E(e,r);else if("string"==typeof e&&void 0===r)n=w.encode(e),i="S";else if(e instanceof Uint8Array&&void 0===r)n=e;else if(e instanceof ArrayBuffer&&void 0===r)n=new Uint8Array(e);else if(ArrayBuffer.isView(e))n=new Uint8Array(e.buffer,e.byteOffset,e.byteLength);else if("object"==typeof e&&void 0===r)n=w.encode(JSON.stringify(e)),i="O";else if("boolean"==typeof e&&void 0===r){let t=e?1:0;n=d.Buffer.from([t]),i="!"}else!function(...t){console.log(...t)}("invalid metabuffer data err",t,e,r);return"string"==typeof t&&t.includes("#")&&(t=""),[t,i,n]}const I=U;function U(...t){let e=0,r=t.map((t=>{let r=e++;return"number"==typeof t?m(r,"N",t):m(r,t)}));return r.push(m("$","8",r.length)),r}function v(t,e,r,n){if(t.includes("8"))return t.includes("I")?e.readInt8(r):e.readUint8(r);if(t.includes("16"))return t.includes("I")?t.includes("L")?e.readInt16LE(r):e.readInt16BE(r):t.includes("L")?e.readUint16LE(r):e.readUint16BE(r);if(t.includes("32"))return t.includes("I")?t.includes("L")?e.readInt32LE(r):e.readInt32BE(r):t.includes("L")?e.readUint32LE(r):e.readUint32BE(r);if("B"===t)return e.slice(r,r+n);if("S"===t){let t=e.slice(r,r+n);return b.decode(t)}if("N"===t){let t=e.slice(r,r+n);return Number(b.decode(t))}if("O"!==t){if("!"===t){return 1===e.readInt8(r)}throw TypeError("invalid data")}{let t=e.slice(r,r+n);try{return JSON.parse(b.decode(t))}catch(t){console.log("err. obj parse")}}}const L=O;function O(t){if(null==t)throw"Invalid data type: Undefined";return"string"==typeof t?w.encode(t):"number"==typeof t?Uint8Array.from([t]):t instanceof ArrayBuffer?new Uint8Array(t):ArrayBuffer.isView(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):w.encode(JSON.stringify(t))}const R=T;function T(...t){try{let e=0,r=0,n=t.map((t=>O(t)));n.forEach((t=>{e+=t.byteLength}));let i=new Uint8Array(e);return n.forEach((t=>{i.set(t,r),r+=t.byteLength})),i}catch(t){console.log(t)}}var S=Object.freeze({__proto__:null,Buffer:d.Buffer,NB:B,numberBuffer:E,MB:m,metaBuffer:A,MBA:I,metaBufferArguments:U,readTypedBuffer:v,pack:function(...t){let e=function(t){let e=[];return t.filter((t=>{if(!Array.isArray(t[0]))return t;e=e.concat(t)})).concat(e)}(t),r=0,n=[],i=0;e.forEach((t=>{let[e,o,f]=t;r+=f.byteLength,("number"==typeof e||e.length>0)&&(o.includes("N")||o.includes("B")||o.includes("S")||o.includes("O")?n.push([e,o,i,f.byteLength]):n.push([e,o,i])),i=r}));let o=w.encode(JSON.stringify(n)),f=o.byteLength;r=r+f+2;let u=d.Buffer.alloc(r);i=0,e.forEach((t=>{let e=t[2];u.set(e,i),i+=e.byteLength})),u.set(o,i);let s=B("16",f);return u.set(s,i+f),u},unpack:function(t){let e=d.Buffer.from(t),r=e.readUInt16BE(e.byteLength-2),n=e.byteLength-r-2,i=e.subarray(n,e.byteLength-2);try{let t=b.decode(i),r=JSON.parse(t),n={};if(r.forEach((t=>{let[r,i,o,f]=t;n[r]=v(i,e,o,f)})),n.$){let t=n.$,e=[];for(let r=0;r<t;r++)e.push(n[r]);n.args=e,n.$=n.args}return n}catch(t){console.log("unpack: invalid data.",t)}},U8:L,parseUint8Array:O,U8pack:R,parseUint8ThenConcat:T,hex:function(t){return Array.prototype.map.call(new Uint8Array(t),(t=>("00"+t.toString(16)).slice(-2))).join("")},equal:function(t,e){if(t.byteLength!=e.byteLength)return!1;for(let r=0;r<t.byteLength;r++)if(t[r]!=e[r])return!1;return!0}}),_=d.Buffer;export{_ as Buffer,S as MBP};
//# sourceMappingURL=meta-buffer-pack.esm.js.map