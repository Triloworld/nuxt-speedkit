(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{315:function(t,e,r){"use strict";(function(t){r(32),r(63),r(193),r(29);var n=r(3),o=r(382);e.a={props:{statsMetric:{type:String,default:function(){return"performance"}}},data:function(){return{url:"",stats:Object(o.b)()}},computed:{style:function(){return{"--color-status":this.color,"--radian":45*this.radian,"--duration":1e3/(2*Math.PI)*this.radian+"ms"}},stateClasses:function(){return{pending:this.stats.isPending(),fail:this.stats.isFailed(),ready:this.stats.isReady()}},title:function(){return("\n        Performance: "+100*this.stats.getScoreOfMetric("performance")+"\n        SEO: "+100*this.stats.getScoreOfMetric("seo")+"\n        Accessibility: "+100*this.stats.getScoreOfMetric("accessibility")+"\n        Best Practices: "+100*this.stats.getScoreOfMetric("best-practices")+"\n      ").trim().replace(/( )+/g,"$1")},score:function(){return this.stats.getScoreOfMetric(this.statsMetric)},radian:function(){return 2*Math.PI*(1-this.score)},color:function(){return this.stats.getStateColorByMetric(this.statsMetric)},reportUrl:function(){return"https://lighthouse-dot-webdotdevsite.appspot.com/lh/html?url="+t.encodeURI(this.url)}},watch:{$route:function(t,e){"lh"in this.$route.query&&this.getMetrics()}},mounted:function(){this.getMetrics()},methods:{getMetrics:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.stats=Object(o.b)(),r.prev=1,r.next=4,Object(o.a)(t.location.href);case 4:e.stats=r.sent,e.url=e.stats.data.lhr.requestedUrl,r.next=12;break;case 8:r.prev=8,r.t0=r.catch(1),e.stats=r.t0,e.url="";case 12:case"end":return r.stop()}}),r,null,[[1,8]])})))()}}}}).call(this,r(12))},325:function(t,e,r){var n=r(6);e.f=n},326:function(t,e,r){var content=r(372);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("69d268cb",content,!0,{sourceMap:!1})},367:function(t,e,r){"use strict";var n=r(2),o=r(4),c=r(31),f=r(27),l=r(14),d=r(120),h=r(189),v=r(5),y=r(13),m=r(62),w=r(11),k=r(9),x=r(21),S=r(30),_=r(80),O=r(45),M=r(56),j=r(61),P=r(116),F=r(368),R=r(121),C=r(44),B=r(17),E=r(85),N=r(23),$=r(16),z=r(119),J=r(84),A=r(60),D=r(83),I=r(6),T=r(325),U=r(369),H=r(36),Q=r(28),W=r(37).forEach,G=J("hidden"),K=I("toPrimitive"),L=Q.set,V=Q.getterFor("Symbol"),X=Object.prototype,Y=o.Symbol,Z=c("JSON","stringify"),tt=C.f,et=B.f,nt=F.f,it=E.f,ot=z("symbols"),st=z("op-symbols"),at=z("string-to-symbol-registry"),ct=z("symbol-to-string-registry"),ut=z("wks"),ft=o.QObject,lt=!ft||!ft.prototype||!ft.prototype.findChild,pt=l&&v((function(){return 7!=M(et({},"a",{get:function(){return et(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=tt(X,e);n&&delete X[e],et(t,e,r),n&&t!==X&&et(X,e,n)}:et,ht=function(t,e){var symbol=ot[t]=M(Y.prototype);return L(symbol,{type:"Symbol",tag:t,description:e}),l||(symbol.description=e),symbol},vt=h?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Y},gt=function(t,e,r){t===X&&gt(st,e,r),k(t);var n=_(e,!0);return k(r),y(ot,n)?(r.enumerable?(y(t,G)&&t[G][n]&&(t[G][n]=!1),r=M(r,{enumerable:O(0,!1)})):(y(t,G)||et(t,G,O(1,{})),t[G][n]=!0),pt(t,n,r)):et(t,n,r)},yt=function(t,e){k(t);var r=S(e),n=j(r).concat(kt(r));return W(n,(function(e){l&&!bt.call(r,e)||gt(t,e,r[e])})),t},bt=function(t){var e=_(t,!0),r=it.call(this,e);return!(this===X&&y(ot,e)&&!y(st,e))&&(!(r||!y(this,e)||!y(ot,e)||y(this,G)&&this[G][e])||r)},mt=function(t,e){var r=S(t),n=_(e,!0);if(r!==X||!y(ot,n)||y(st,n)){var o=tt(r,n);return!o||!y(ot,n)||y(r,G)&&r[G][n]||(o.enumerable=!0),o}},wt=function(t){var e=nt(S(t)),r=[];return W(e,(function(t){y(ot,t)||y(A,t)||r.push(t)})),r},kt=function(t){var e=t===X,r=nt(e?st:S(t)),n=[];return W(r,(function(t){!y(ot,t)||e&&!y(X,t)||n.push(ot[t])})),n};(d||($((Y=function(){if(this instanceof Y)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=D(t),r=function(t){this===X&&r.call(st,t),y(this,G)&&y(this[G],e)&&(this[G][e]=!1),pt(this,e,O(1,t))};return l&&lt&&pt(X,e,{configurable:!0,set:r}),ht(e,t)}).prototype,"toString",(function(){return V(this).tag})),$(Y,"withoutSetter",(function(t){return ht(D(t),t)})),E.f=bt,B.f=gt,C.f=mt,P.f=F.f=wt,R.f=kt,T.f=function(t){return ht(I(t),t)},l&&(et(Y.prototype,"description",{configurable:!0,get:function(){return V(this).description}}),f||$(X,"propertyIsEnumerable",bt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!d,sham:!d},{Symbol:Y}),W(j(ut),(function(t){U(t)})),n({target:"Symbol",stat:!0,forced:!d},{for:function(t){var e=String(t);if(y(at,e))return at[e];var symbol=Y(e);return at[e]=symbol,ct[symbol]=e,symbol},keyFor:function(t){if(!vt(t))throw TypeError(t+" is not a symbol");if(y(ct,t))return ct[t]},useSetter:function(){lt=!0},useSimple:function(){lt=!1}}),n({target:"Object",stat:!0,forced:!d,sham:!l},{create:function(t,e){return void 0===e?M(t):yt(M(t),e)},defineProperty:gt,defineProperties:yt,getOwnPropertyDescriptor:mt}),n({target:"Object",stat:!0,forced:!d},{getOwnPropertyNames:wt,getOwnPropertySymbols:kt}),n({target:"Object",stat:!0,forced:v((function(){R.f(1)}))},{getOwnPropertySymbols:function(t){return R.f(x(t))}}),Z)&&n({target:"JSON",stat:!0,forced:!d||v((function(){var symbol=Y();return"[null]"!=Z([symbol])||"{}"!=Z({a:symbol})||"{}"!=Z(Object(symbol))}))},{stringify:function(t,e,r){for(var n,o=[t],c=1;arguments.length>c;)o.push(arguments[c++]);if(n=e,(w(e)||void 0!==t)&&!vt(t))return m(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!vt(e))return e}),o[1]=e,Z.apply(null,o)}});Y.prototype[K]||N(Y.prototype,K,Y.prototype.valueOf),H(Y,"Symbol"),A[G]=!0},368:function(t,e,r){var n=r(30),o=r(116).f,c={}.toString,f="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return f&&"[object Window]"==c.call(t)?function(t){try{return o(t)}catch(t){return f.slice()}}(t):o(n(t))}},369:function(t,e,r){var path=r(190),n=r(13),o=r(325),c=r(17).f;t.exports=function(t){var e=path.Symbol||(path.Symbol={});n(e,t)||c(e,t,{value:o.f(t)})}},370:function(t,e,r){"use strict";var n=r(2),o=r(14),c=r(4),f=r(13),l=r(11),d=r(17).f,h=r(191),v=c.Symbol;if(o&&"function"==typeof v&&(!("description"in v.prototype)||void 0!==v().description)){var y={},m=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof m?new v(t):void 0===t?v():v(t);return""===t&&(y[e]=!0),e};h(m,v);var w=m.prototype=v.prototype;w.constructor=m;var k=w.toString,x="Symbol(test)"==String(v("test")),S=/^Symbol\((.*)\)[^)]+$/;d(w,"description",{configurable:!0,get:function(){var symbol=l(this)?this.valueOf():this,t=k.call(symbol);if(f(y,symbol))return"";var desc=x?t.slice(7,-1):t.replace(S,"$1");return""===desc?void 0:desc}}),n({global:!0,forced:!0},{Symbol:m})}},371:function(t,e,r){"use strict";r(326)},372:function(t,e,r){(e=r(25)(!1)).push([t.i,".nuxt-speedkit__lighthouse[data-v-5bc5000d]{--pi:3.14159265358979;--score:0;position:fixed;top:0;right:0;z-index:1;display:block;width:60px;font-family:Arial,Helvetica,sans-serif;text-align:center;pointer-events:none;background-color:#fff}.nuxt-speedkit__lighthouse.ready[data-v-5bc5000d]{pointer-events:all}.nuxt-speedkit__lighthouse>svg[data-v-5bc5000d]{display:block;width:50px;height:50px;margin:5px}.nuxt-speedkit__lighthouse>svg circle[data-v-5bc5000d]{fill:transparent;stroke:var(--color-status);stroke-width:10;transform:rotate(-90deg);transform-origin:50%}.nuxt-speedkit__lighthouse>svg circle.pending[data-v-5bc5000d]{stroke-dasharray:calc(var(--pi)*1.35*45);stroke-dashoffset:calc(var(--pi)*2*45);-webkit-animation:rotating-data-v-5bc5000d 1s linear infinite;animation:rotating-data-v-5bc5000d 1s linear infinite}.nuxt-speedkit__lighthouse>svg circle.ready[data-v-5bc5000d]{fill:var(--color-status);fill-opacity:.1;stroke-dasharray:calc(var(--pi)*2*45);stroke-dashoffset:calc(var(--pi)*2*45);-webkit-animation:stroke-data-v-5bc5000d var(--duration) ease-out forwards;animation:stroke-data-v-5bc5000d var(--duration) ease-out forwards}.nuxt-speedkit__lighthouse>svg line[data-v-5bc5000d]{stroke:var(--color-status);stroke-width:10}.nuxt-speedkit__lighthouse>svg text[data-v-5bc5000d]{font-size:32px;fill:var(--color-status)}.nuxt-speedkit__lighthouse span[data-v-5bc5000d]{font-size:12px;text-decoration:underline}.nuxt-speedkit__lighthouse span svg[data-v-5bc5000d]{display:inline;width:12px;height:12px;margin-left:3px}@-webkit-keyframes stroke-data-v-5bc5000d{to{stroke-dashoffset:var(--radian)}}@keyframes stroke-data-v-5bc5000d{to{stroke-dashoffset:var(--radian)}}@-webkit-keyframes rotating-data-v-5bc5000d{to{transform:rotate(270deg)}}@keyframes rotating-data-v-5bc5000d{to{transform:rotate(270deg)}}",""]),t.exports=e},382:function(t,e,r){"use strict";r.d(e,"a",(function(){return y})),r.d(e,"b",(function(){return m}));r(7),r(29);var n=r(3),o=(r(367),r(370),r(117),r(81),r(20),r(22),Symbol("ready")),c=Symbol("fail"),f=Symbol("pending"),l=new Map([[o,{pass:"#0CCE6B",average:"#FFA400",fail:"#FF4E42"}],[c,"#FF4E42"],[f,"#BDBDBD"]]),d=function(){function t(t,data){this.state=t,this.data=data||{lhrSlim:[]}}var e=t.prototype;return e.isPending=function(){return this.state===f},e.isFailed=function(){return this.state===c},e.isReady=function(){return this.state===o},e.getScoreOfMetric=function(t){return(this.data.lhrSlim.find((function(e){return e.id===t}))||{score:-1}).score},e.getStateColorByMetric=function(t){switch(this.state){case o:return(e=this.getScoreOfMetric(t))>=.9?l.get(o).pass:e>=.5?l.get(o).average:l.get(o).fail;case c:return l.get(c);default:return l.get(f)}var e},t}();var h=function(t){var e,r;function n(){return t.apply(this,arguments)||this}return r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,n}(d),v=null;function y(t){return fetch("https://lighthouse-dot-webdotdevsite.appspot.com/lh/newaudit",{method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify({replace:!0,save:!0,url:t}),signal:w()}).then(k).catch((function(t){if(t.state)return t;throw m()}))}function m(){return new h(f)}function w(){return v&&v.abort(),(v=new AbortController).signal}function k(t){return x.apply(this,arguments)}function x(){return(x=Object(n.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.ok){t.next=2;break}throw new h(c);case 2:return t.t0=d,t.t1=o,t.next=6,e.json();case 6:return t.t2=t.sent,t.abrupt("return",new t.t0(t.t1,t.t2));case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},415:function(t,e,r){"use strict";r.r(e);var n=r(315).a,o=(r(371),r(8)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"nuxt-speedkit__lighthouse",class:{ready:t.stats.isReady()},style:t.style,attrs:{href:t.reportUrl,target:"_blank",title:t.title}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0 0 100 100"}},[r("circle",{class:t.stateClasses,attrs:{cx:"50",cy:"50",r:"45"}}),t._v(" "),t.stats.isFailed()?r("line",{attrs:{x1:"18",y1:"18",x2:"82",y2:"82"}}):t._e(),t._v(" "),t.stats.isReady()?r("text",{attrs:{x:"50",y:"50","text-anchor":"middle","alignment-baseline":"central"}},[t._v("\n      "+t._s(Math.round(100*t.score))+"\n    ")]):t._e()]),t._v(" "),t.stats.isReady()?r("span",[t._v("\n    Report"),r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}})])]):t._e()])}),[],!1,null,"5bc5000d",null);e.default=component.exports}}]);