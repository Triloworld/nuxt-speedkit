(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{322:function(t,e){t.exports=function(t){return Set.prototype.values.call(t)}},331:function(t,e,r){"use strict";function n(t,p){return(n=Object.setPrototypeOf||function(t,p){return t.__proto__=p,t})(t,p)}r.d(e,"a",(function(){return n}))},333:function(t,e,r){"use strict";var n=r(2),o=r(30),c=r(33),f=r(25),l=r(12),h=r(7),d=r(334),v=r(126),S=r(335),m=r(336),w=r(77),x=r(337),T=[],E=T.sort,R=h((function(){T.sort(void 0)})),y=h((function(){T.sort(null)})),I=v("sort"),_=!h((function(){if(w)return w<70;if(!(S&&S>3)){if(m)return!0;if(x)return x<603;var code,t,e,r,n="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(r=0;r<47;r++)T.push({k:t+r,v:e})}for(T.sort((function(a,b){return b.v-a.v})),r=0;r<T.length;r++)t=T[r].k.charAt(0),n.charAt(n.length-1)!==t&&(n+=t);return"DGBEFHACIJK"!==n}}));n({target:"Array",proto:!0,forced:R||!y||!I||!_},{sort:function(t){void 0!==t&&o(t);var e=c(this);if(_)return void 0===t?E.call(e):E.call(e,t);var r,n,h=[],v=f(e.length);for(n=0;n<v;n++)n in e&&h.push(e[n]);for(r=(h=d(h,function(t){return function(e,r){return void 0===r?-1:void 0===e?1:void 0!==t?+t(e,r)||0:l(e)>l(r)?1:-1}}(t))).length,n=0;n<r;)e[n]=h[n++];for(;n<v;)delete e[n++];return e}})},334:function(t,e){var r=Math.floor,n=function(t,e){var f=t.length,l=r(f/2);return f<8?o(t,e):c(n(t.slice(0,l),e),n(t.slice(l),e),e)},o=function(t,e){for(var element,r,n=t.length,i=1;i<n;){for(r=i,element=t[i];r&&e(t[r-1],element)>0;)t[r]=t[--r];r!==i++&&(t[r]=element)}return t},c=function(t,e,r){for(var n=t.length,o=e.length,c=0,f=0,l=[];c<n||f<o;)c<n&&f<o?l.push(r(t[c],e[f])<=0?t[c++]:e[f++]):l.push(c<n?t[c++]:e[f++]);return l};t.exports=n},335:function(t,e,r){var n=r(47).match(/firefox\/(\d+)/i);t.exports=!!n&&+n[1]},336:function(t,e,r){var n=r(47);t.exports=/MSIE|Trident/.test(n)},337:function(t,e,r){var n=r(47).match(/AppleWebKit\/(\d+)\./);t.exports=!!n&&+n[1]},338:function(t,e,r){"use strict";var n=r(220),o=r(224);t.exports=n("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},339:function(t,e,r){"use strict";var n=r(2),o=r(9),c=r(340);n({target:"Set",proto:!0,real:!0,forced:o},{addAll:function(){return c.apply(this,arguments)}})},340:function(t,e,r){"use strict";var n=r(3),o=r(30);t.exports=function(){for(var t=n(this),e=o(t.add),r=0,c=arguments.length;r<c;r++)e.call(t,arguments[r]);return t}},341:function(t,e,r){"use strict";var n=r(2),o=r(9),c=r(221);n({target:"Set",proto:!0,real:!0,forced:o},{deleteAll:function(){return c.apply(this,arguments)}})},342:function(t,e,r){"use strict";var n=r(2),o=r(9),c=r(31),f=r(3),l=r(30),h=r(56),d=r(18);n({target:"Set",proto:!0,real:!0,forced:o},{difference:function(t){var e=f(this),r=new(h(e,c("Set")))(e),n=l(r.delete);return d(t,(function(t){n.call(r,t)})),r}})},343:function(t,e,r){"use strict";var n=r(2),o=r(9),c=r(3),f=r(23),l=r(322),h=r(18);n({target:"Set",proto:!0,real:!0,forced:o},{every:function(t){var e=c(this),r=l(e),n=f(t,arguments.length>1?arguments[1]:void 0,3);return!h(r,(function(t,r){if(!n(t,t,e))return r()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},344:function(t,e,r){"use strict";var n=r(2),o=r(9),c=r(31),f=r(3),l=r(30),h=r(23),d=r(56),v=r(322),S=r(18);n({target:"Set",proto:!0,real:!0,forced:o},{filter:function(t){var e=f(this),r=v(e),n=h(t,arguments.length>1?arguments[1]:void 0,3),o=new(d(e,c("Set"))),m=l(o.add);return S(r,(function(t){n(t,t,e)&&m.call(o,t)}),{IS_ITERATOR:!0}),o}})},345:function(t,e,r){"use strict";var n=r(2),o=r(9),c=r(3),f=r(23),l=r(322),h=r(18);n({target:"Set",proto:!0,real:!0,forced:o},{find:function(t){var e=c(this),r=l(e),n=f(t,arguments.length>1?arguments[1]:void 0,3);return h(r,(function(t,r){if(n(t,t,e))return r(t)}),{IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},346:function(t,e,r){"use strict";var n=r(2),o=r(9),c=r(31),f=r(3),l=r(30),h=r(56),d=r(18);n({target:"Set",proto:!0,real:!0,forced:o},{intersection:function(t){var e=f(this),r=new(h(e,c("Set"))),n=l(e.has),o=l(r.add);return d(t,(function(t){n.call(e,t)&&o.call(r,t)})),r}})},347:function(t,e,r){"use strict";var n=r(2),o=r(9),c=r(3),f=r(30),l=r(18);n({target:"Set",proto:!0,real:!0,forced:o},{isDisjointFrom:function(t){var e=c(this),r=f(e.has);return!l(t,(function(t,n){if(!0===r.call(e,t))return n()}),{INTERRUPTED:!0}).stopped}})},348:function(t,e,r){"use strict";var n=r(2),o=r(9),c=r(31),f=r(3),l=r(30),h=r(223),d=r(18);n({target:"Set",proto:!0,real:!0,forced:o},{isSubsetOf:function(t){var e=h(this),r=f(t),n=r.has;return"function"!=typeof n&&(r=new(c("Set"))(t),n=l(r.has)),!d(e,(function(t,e){if(!1===n.call(r,t))return e()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},349:function(t,e,r){"use strict";var n=r(2),o=r(9),c=r(3),f=r(30),l=r(18);n({target:"Set",proto:!0,real:!0,forced:o},{isSupersetOf:function(t){var e=c(this),r=f(e.has);return!l(t,(function(t,n){if(!1===r.call(e,t))return n()}),{INTERRUPTED:!0}).stopped}})},350:function(t,e,r){"use strict";var n=r(2),o=r(9),c=r(3),f=r(322),l=r(18);n({target:"Set",proto:!0,real:!0,forced:o},{join:function(t){var e=c(this),r=f(e),n=void 0===t?",":String(t),o=[];return l(r,o.push,{that:o,IS_ITERATOR:!0}),o.join(n)}})},351:function(t,e,r){"use strict";var n=r(2),o=r(9),c=r(31),f=r(3),l=r(30),h=r(23),d=r(56),v=r(322),S=r(18);n({target:"Set",proto:!0,real:!0,forced:o},{map:function(t){var e=f(this),r=v(e),n=h(t,arguments.length>1?arguments[1]:void 0,3),o=new(d(e,c("Set"))),m=l(o.add);return S(r,(function(t){m.call(o,n(t,t,e))}),{IS_ITERATOR:!0}),o}})},352:function(t,e,r){"use strict";var n=r(2),o=r(9),c=r(3),f=r(30),l=r(322),h=r(18);n({target:"Set",proto:!0,real:!0,forced:o},{reduce:function(t){var e=c(this),r=l(e),n=arguments.length<2,o=n?void 0:arguments[1];if(f(t),h(r,(function(r){n?(n=!1,o=r):o=t(o,r,r,e)}),{IS_ITERATOR:!0}),n)throw TypeError("Reduce of empty set with no initial value");return o}})},353:function(t,e,r){"use strict";var n=r(2),o=r(9),c=r(3),f=r(23),l=r(322),h=r(18);n({target:"Set",proto:!0,real:!0,forced:o},{some:function(t){var e=c(this),r=l(e),n=f(t,arguments.length>1?arguments[1]:void 0,3);return h(r,(function(t,r){if(n(t,t,e))return r()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},354:function(t,e,r){"use strict";var n=r(2),o=r(9),c=r(31),f=r(3),l=r(30),h=r(56),d=r(18);n({target:"Set",proto:!0,real:!0,forced:o},{symmetricDifference:function(t){var e=f(this),r=new(h(e,c("Set")))(e),n=l(r.delete),o=l(r.add);return d(t,(function(t){n.call(r,t)||o.call(r,t)})),r}})},355:function(t,e,r){"use strict";var n=r(2),o=r(9),c=r(31),f=r(3),l=r(30),h=r(56),d=r(18);n({target:"Set",proto:!0,real:!0,forced:o},{union:function(t){var e=f(this),r=new(h(e,c("Set")))(e);return d(t,l(r.add),{that:r}),r}})},371:function(t,e,r){"use strict";var n=r(94),o=r(124).getWeakData,c=r(3),f=r(11),l=r(58),h=r(18),d=r(59),v=r(13),S=r(34),m=S.set,w=S.getterFor,x=d.find,T=d.findIndex,E=0,R=function(t){return t.frozen||(t.frozen=new y)},y=function(){this.entries=[]},I=function(t,e){return x(t.entries,(function(t){return t[0]===e}))};y.prototype={get:function(t){var e=I(this,t);if(e)return e[1]},has:function(t){return!!I(this,t)},set:function(t,e){var r=I(this,t);r?r[1]=e:this.entries.push([t,e])},delete:function(t){var e=T(this.entries,(function(e){return e[0]===t}));return~e&&this.entries.splice(e,1),!!~e}},t.exports={getConstructor:function(t,e,r,d){var S=t((function(t,n){l(t,S,e),m(t,{type:e,id:E++,frozen:void 0}),null!=n&&h(n,t[d],{that:t,AS_ENTRIES:r})})),x=w(e),T=function(t,e,r){var n=x(t),data=o(c(e),!0);return!0===data?R(n).set(e,r):data[n.id]=r,t};return n(S.prototype,{delete:function(t){var e=x(this);if(!f(t))return!1;var data=o(t);return!0===data?R(e).delete(t):data&&v(data,e.id)&&delete data[e.id]},has:function(t){var e=x(this);if(!f(t))return!1;var data=o(t);return!0===data?R(e).has(t):data&&v(data,e.id)}}),n(S.prototype,r?{get:function(t){var e=x(this);if(f(t)){var data=o(t);return!0===data?R(e).get(t):data?data[e.id]:void 0}},set:function(t,e){return T(this,t,e)}}:{add:function(t){return T(this,t,!0)}}),S}}},372:function(t,e,r){"use strict";var n=r(78),o=r(25),c=r(23),f=function(t,e,source,r,l,h,d,v){for(var element,S=l,m=0,w=!!d&&c(d,v,3);m<r;){if(m in source){if(element=w?w(source[m],m,e):source[m],h>0&&n(element))S=f(t,e,element,o(element.length),S,h-1)-1;else{if(S>=9007199254740991)throw TypeError("Exceed the acceptable array length");t[S]=element}S++}m++}return S};t.exports=f},397:function(t,e,r){"use strict";var n,o=r(4),c=r(94),f=r(124),l=r(220),h=r(371),d=r(11),v=r(34).enforce,S=r(225),m=!o.ActiveXObject&&"ActiveXObject"in o,w=Object.isExtensible,x=function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},T=t.exports=l("WeakMap",x,h);if(S&&m){n=h.getConstructor(x,"WeakMap",!0),f.enable();var E=T.prototype,R=E.delete,y=E.has,I=E.get,_=E.set;c(E,{delete:function(t){if(d(t)&&!w(t)){var e=v(this);return e.frozen||(e.frozen=new n),R.call(this,t)||e.frozen.delete(t)}return R.call(this,t)},has:function(t){if(d(t)&&!w(t)){var e=v(this);return e.frozen||(e.frozen=new n),y.call(this,t)||e.frozen.has(t)}return y.call(this,t)},get:function(t){if(d(t)&&!w(t)){var e=v(this);return e.frozen||(e.frozen=new n),y.call(this,t)?I.call(this,t):e.frozen.get(t)}return I.call(this,t)},set:function(t,e){if(d(t)&&!w(t)){var r=v(this);r.frozen||(r.frozen=new n),y.call(this,t)?_.call(this,t,e):r.frozen.set(t,e)}else _.call(this,t,e);return this}})}},398:function(t,e,r){"use strict";var n=r(2),o=r(9),c=r(221);n({target:"WeakMap",proto:!0,real:!0,forced:o},{deleteAll:function(){return c.apply(this,arguments)}})},399:function(t,e,r){r(141)("replace")},400:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(331);function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Object(n.a)(t,e)}},401:function(t,e,r){"use strict";var n=r(2),o=r(372),c=r(33),f=r(25),l=r(51),h=r(95);n({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=c(this),r=f(e.length),n=h(e,0);return n.length=o(n,e,e,r,0,void 0===t?1:l(t)),n}})},403:function(t,e,r){var content=r(419);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("e7d5ea6e",content,!0,{sourceMap:!1})},418:function(t,e,r){"use strict";r(403)},419:function(t,e,r){var n=r(19)(!1);n.push([t.i,".component-stage[data-v-19b3fba1]{position:relative;height:100vh;max-height:100%;margin:0;overflow:hidden}.component-stage .claim[data-v-19b3fba1]{display:block;font-size:25px;line-height:50px;text-transform:none}.component-stage .headline[data-v-19b3fba1]{display:block;font-size:30px;line-height:60px}@media (min-width:768px){.component-stage .headline[data-v-19b3fba1]{font-size:40px;line-height:80px}}.component-stage h1[data-v-19b3fba1]{position:absolute;bottom:0;left:0;width:100%;padding:20px 0;margin:0;color:#fff;text-align:center;background:rgba(0,0,0,.4)}@media (min-width:768px){.component-stage h1[data-v-19b3fba1]{position:absolute;top:50px;right:0;bottom:auto;left:auto;width:400px}}",""]),t.exports=n},519:function(t,e,r){"use strict";r.r(e);var n={components:{SpeedkitPicture:r(393).a},props:{picture:{type:Object,default:function(){return{}}},headline:{type:String,default:function(){return"Headline"}},claim:{type:String,default:function(){return"Claim"}}}},o=(r(418),r(6)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"component-stage"},[t.picture?r("speedkit-picture",t._b({},"speedkit-picture",t.picture,!1)):t._e(),t._v(" "),r("h1",{directives:[{name:"font",rawName:"v-font",value:[t.$getFont("Montserrat Alternates",700,"normal",{selector:".headline"}),t.$getFont("Merriweather",300,"italic",{selector:".claim"})],expression:"[\n      $getFont('Montserrat Alternates', 700, 'normal', {selector: '.headline'}),\n      $getFont('Merriweather', 300, 'italic', {selector: '.claim'})\n    ]"}]},[r("span",{staticClass:"headline"},[t._v(t._s(t.headline))]),t._v(" "),r("span",{staticClass:"claim"},[t._v(t._s(t.claim))])])],1)}),[],!1,null,"19b3fba1",null);e.default=component.exports}}]);