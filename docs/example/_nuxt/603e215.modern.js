!function(t){function e(data){for(var e,o,c=data[0],d=data[1],f=data[2],i=0,h=[];i<c.length;i++)o=c[i],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&h.push(r[o][0]),r[o]=0;for(e in d)Object.prototype.hasOwnProperty.call(d,e)&&(t[e]=d[e]);for(m&&m(data);h.length;)h.shift()();return l.push.apply(l,f||[]),n()}function n(){for(var t,i=0;i<l.length;i++){for(var e=l[i],n=!0,o=1;o<e.length;o++){var d=e[o];0!==r[d]&&(n=!1)}n&&(l.splice(i--,1),t=c(c.s=e[0]))}return t}var o={},r={3:0},l=[];function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=r[t]=[e,o]}));e.push(n[2]=o);var l,script=document.createElement("script");script.charset="utf-8",script.timeout=120,c.nc&&script.setAttribute("nonce",c.nc),script.src=function(t){return c.p+""+{0:"d05c07f",1:"be0cab0",2:"5f72973",5:"bd3e5f7",6:"2e1679a",7:"fd5e635",8:"a0a72d9",9:"d301214",10:"62f7657",11:"8a34551",12:"ff48995",13:"cd5e9b1",15:"0ed64a6",16:"7972d87",17:"4a369db",18:"3717029",19:"9aa6a3f",20:"b9be93c"}[t]+".modern.js"}(t);var d=new Error;l=function(e){script.onerror=script.onload=null,clearTimeout(f);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),l=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+o+": "+l+")",d.name="ChunkLoadError",d.type=o,d.request=l,n[1](d)}r[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:script})}),12e4);script.onerror=script.onload=l,document.head.appendChild(script)}return Promise.all(e)},c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return c.d(e,"a",e),e},c.o=function(object,t){return Object.prototype.hasOwnProperty.call(object,t)},c.p="/example/_nuxt/",c.oe=function(t){throw console.error(t),t};var d=window.webpackJsonp=window.webpackJsonp||[],f=d.push.bind(d);d.push=e,d=d.slice();for(var i=0;i<d.length;i++)e(d[i]);var m=f;l.push([66,4,14]),n()}([,,,,,,,,,function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return l})),n.d(e,"c",(function(){return c}));var o=n(10);function r({srcset:t,sizes:e,type:n},r,l=(()=>{})){return{hid:Object(o.a)(t),rel:"preload",as:"image",crossorigin:r,imageSrcset:t,imageSizes:e,type:n,callback:l}}function l(t,e,n,r=(()=>{})){return{hid:Object(o.a)(`${t.family}-${t.weight}-${t.style}-${e}`.toLowerCase()),rel:"preload",as:"font",crossorigin:n,href:t.src,type:t.type,media:e,callback:r}}function c(t,e=!1){return e?(html=`<style>${t}</style>`,{hid:Object(o.a)(html),innerHTML:html}):{hid:Object(o.a)(t),cssText:t};var html}},function(t,e,n){"use strict";function o(t){return function(t){let e=0;if(0===t.length)return e;for(let i=0;i<t.length;i++)e=(e<<5)-e+t.charCodeAt(i),e&=e;return e}(t).toString(16)}n.d(e,"a",(function(){return o}))},,function(t,e,n){"use strict";(function(t){n.d(e,"d",(function(){return c})),n.d(e,"c",(function(){return f})),n.d(e,"b",(function(){return m})),n.d(e,"a",(function(){return h}));const o={device:{hardwareConcurrency:{min:2,max:48},deviceMemory:{min:2}},timing:{fcp:500,dcl:800},lighthouseDetectionByUserAgent:!1};let r=o,l=d(r);function c(t={}){r={device:Object.assign({},o.device,t.device||{}),timing:Object.assign({},o.timing,t.timing||{}),lighthouseDetectionByUserAgent:r.lighthouseDetectionByUserAgent||o.lighthouseDetectionByUserAgent},r=Object.assign({},o,t),l=d(r)}function d(e={}){const n=t.navigator||{};return{hardwareConcurrency:n.hardwareConcurrency||e.device.hardwareConcurrency.min,deviceMemory:n.deviceMemory||e.device.deviceMemory.min,userAgent:n.userAgent||""}}function f(){return h()&&m()&&!(r.lighthouseDetectionByUserAgent&&/(Speed Insights)|(Chrome-Lighthouse)/.test(l.userAgent))&&!0}function m(){return l.hardwareConcurrency>=r.device.hardwareConcurrency.min&&l.hardwareConcurrency<=r.device.hardwareConcurrency.max&&l.deviceMemory>=r.device.deviceMemory.min}function h(){if(t.performance){const t=performance.getEntriesByName("first-contentful-paint"),e=performance.getEntriesByType("resource");if(t.length)return t[0].startTime<r.timing.fcp;if(e.length)return e.reduce(((t,e)=>((!t||t<e.responseEnd)&&(t=e.responseEnd),t)),null)<r.timing.dcl}return!1}}).call(this,n(6))},function(t,e,n){"use strict";(function(t){function o(e){return new RegExp(e.regex).test(t.navigator.userAgent)}function r(){return"undefined"!=typeof InstallTrigger}n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return r}))}).call(this,n(6))},,function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return d}));const o=new Map;function r(t="0%",e=[0]){return"undefined"==typeof IntersectionObserver?null:new IntersectionObserver((t=>{t.forEach((t=>{if(!(t.isIntersecting||t.intersectionRatio>0))return;!function(t){o.get(t)(),d(t)}(t.target)}))}),{rootMargin:t,threshold:e})}let l;function c(t,e){l=l||r("0%"),l&&(o.set(t,e),l.observe(t))}function d(t){o.delete(t),l&&l.unobserve(t)}},,,,function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));const o=Symbol("pending"),r=Symbol("fulfilled"),l=Symbol("rejected");class c{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e,this.state=o})).then((t=>(this.state=r,t))).catch((t=>{throw this.state=l,new Error(t)}))}}},,,function(t,e,n){var content=n(77);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(5).default)("286468aa",content,!0,{sourceMap:!1})},function(t,e,n){var content=n(79);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(5).default)("5cb620fe",content,!0,{sourceMap:!1})},function(t,e,n){var content=n(81);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(5).default)("fad41158",content,!0,{sourceMap:!1})},function(t,e,n){var content=n(83);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(5).default)("c5304096",content,!0,{sourceMap:!1})},function(t,e,n){var content=n(85);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(5).default)("a887cd6c",content,!0,{sourceMap:!1})},function(t,e,n){var content=n(87);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(5).default)("6cc5ec4a",content,!0,{sourceMap:!1})},function(t,e,n){var content=n(89);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(5).default)("18889a2a",content,!0,{sourceMap:!1})},function(t,e,n){var content=n(91);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(5).default)("7e38937a",content,!0,{sourceMap:!1})},function(t,e,n){var content=n(93);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(5).default)("751477be",content,!0,{sourceMap:!1})},function(t,e,n){var content=n(95);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(5).default)("7af26a97",content,!0,{sourceMap:!1})},function(t,e,n){var content=n(97);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(5).default)("b44de92e",content,!0,{sourceMap:!1})},function(t,e,n){t.exports=n.p+"fonts/quicksand-v21-latin-300.c21933f.woff2"},function(t,e,n){t.exports=n.p+"fonts/quicksand-v21-latin-regular.4632f3d.woff2"},function(t,e,n){t.exports=n.p+"fonts/quicksand-v21-latin-500.4ff6e5b.woff2"},function(t,e,n){t.exports=n.p+"fonts/quicksand-v21-latin-600.07a3480.woff2"},function(t,e,n){t.exports=n.p+"fonts/quicksand-v21-latin-700.e38cff2.woff2"},function(t,e,n){t.exports=n.p+"fonts/merriweather-v22-latin-300.fc11716.woff2"},function(t,e,n){t.exports=n.p+"fonts/merriweather-v22-latin-300italic.fe29961.woff2"},function(t,e,n){t.exports=n.p+"fonts/merriweather-v22-latin-regular.d9479e8.woff2"},function(t,e,n){t.exports=n.p+"fonts/merriweather-v22-latin-italic.2de7bfe.woff2"},function(t,e,n){t.exports=n.p+"fonts/merriweather-v22-latin-700.4b08e01.woff2"},function(t,e,n){t.exports=n.p+"fonts/merriweather-v22-latin-700italic.cd92541.woff2"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-300.3799f02.woff2"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-300italic.60cbad5.woff2"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-regular.dfa745d.woff2"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-italic.f9b07b1.woff2"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-700.9088e5b.woff2"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-700italic.d0b458a.woff2"},,,,function(t,e,n){"use strict";(function(t){var o=n(15);const r="font-active";async function l(t,e,n){const o=[].concat(e.value);await Promise.all(o.map((t=>t.load()))),t.classList.add(r),n.context.fontActive=!0,n.context.$emit("load:font",o)}e.a={install(e,n){e.directive(n,{bind(t,e,n){const o=n.context.fontCollection.add(n,[].concat(e.value));n.elm.setAttribute(o.name,o.value)},update(t,e,n){n.context.fontActive&&t.classList.add(r)},inserted(e,n,r){!function(e){const rect=e.getBoundingClientRect();return rect.bottom<0||rect.right<0||rect.left>t.innerWidth||rect.top>t.innerHeight}(e)?l(e,n,r):Object(o.a)(e,(()=>l(e,n,r)))},unbind(t,e,n){Object(o.b)(t)}})}}}).call(this,n(6))},,function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n(56);class r{constructor(t=[]){this.list=t.map((t=>(t.variances=t.variances.map((t=>Object.assign({style:"normal",weight:400},t))),t)))}getFont(t,e=400,style="normal",n={selector:null,media:null}){const r=this.list.find((e=>e.family===t));if(!r)throw new Error(`font family ${t} not found, please define in module options`);return function(t,e,style,n={selector:null,media:null}){const r=t.variances.find((t=>t.weight===e&&t.style===style));if(!r)throw new Error(`font variance with ${e} and ${style} for font-family ${t.family} not found`);const{src:l,type:c}=r;return new o.a(t.family,{src:l,type:c,fallbackFamily:t.fallback},n,e,style)}(r,e,style,n)}}},function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return m}));var o=n(57),r=n(19);function l(t,e){if(!Object.prototype.hasOwnProperty.call(t,e))throw new TypeError("attempted to use private field on non-instance");return t}var c=0;function d(t){return"__private_"+c+++"_"+t}var f=d("rootSelector");class m{constructor(t,{src:e,type:n,fallbackFamily:o},{media:c,selector:d},m=400,style="normal"){Object.defineProperty(this,f,{writable:!0,value:void 0}),this.family=t,this.style=style,this.weight=m,this.src=e,this.type=`font/${n}`,this.fallbackFamily=o,l(this,f)[f]="",this.selector=d||"",this.media=c||null,this.loaded=new r.a}async load(){const e="fonts"in t.document&&await t.document.fonts.ready;if(e&&!e.check(`${this.style} ${this.weight} 12px '${this.family}'`)){const t=Array.from(e).find((t=>t.family.replace(/"(.*)"/,"$1")===this.family&&t.style===this.style&&k(t.weight)===k(this.weight)));await t.load()}}getKey(){const data=Object.assign({},this);return delete data.src,Object(o.a)(JSON.stringify(data))}getCSSText(){const t=h(l(this,f)[f],this.selector),e=`"${this.family}"`;return y(`${t} {\n        font-family: ${this.fallbackFamily.join(", ")};\n        font-weight: ${this.weight};\n        font-style: ${this.style};\n      }\n      ${function(t){return _(v(t).map((t=>`.font-active${t}`)))}(t)} {\n        font-family: ${[e].concat(this.fallbackFamily).join(", ")};\n      }`,this.media)}getNoScriptCSSText(){return y(`${h(l(this,f)[f],this.selector)} {\n        font-family: ${[`"${this.family}"`].concat(this.fallbackFamily).join(", ")};\n        font-weight: ${this.weight};\n        font-style: ${this.style};\n      }`,this.media)}setRootSelector(t){l(this,f)[f]=`${t.name}="${t.value}"`}}function h(t,e){return _(v(e).map((e=>`[${t}] ${e}`)))}function v(t){return t.split(",").map((t=>t.trim()))}function _(t){return t.join(", ").trim()}function y(style,t){return t&&`@media ${t} { ${style} }`||style}function k(t){switch(t=String(t)){case"400":return"normal";case"700":return"bold";default:return t}}}).call(this,n(6))},function(t,e,n){"use strict";(function(t,o){function r(e){return"btoa"in t?t.btoa(e):o.from(e).toString("base64")}n.d(e,"a",(function(){return r}))}).call(this,n(6),n(118).Buffer)},,,,,,function(t,e,n){"use strict";var o={props:{label:{type:String,default:"Button Label"}},methods:{onClick(t){this.$emit("click",t)}}},r=(n(76),n(2)),l=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{directives:[{name:"font",rawName:"v-font",value:t.$getFont("Quicksand",400,"normal"),expression:"$getFont('Quicksand', 400, 'normal')"}],staticClass:"atom-base-button",on:{click:t.onClick}},[t._t("default",(function(){return[n("span",[t._v(t._s(t.label))])]}))],2)}),[],!1,null,null,null).exports,c=n(9),d={abstract:!0,props:{disabled:{type:Boolean,default:!1}},data:()=>({isServer:!0}),mounted(){this.isServer=!1},render(){return(this.disabled||this.isServer)&&this.$slots.default?this.$slots.default[0]:null}},f={name:"SpeedkitLayer",components:{OnlySsr:Object(r.a)(d,undefined,undefined,!1,null,null,null).exports},props:{critical:{type:Boolean,default:()=>!0}},head:()=>({noscript:[Object(c.c)("#nuxt-speedkit__speedkit-layer button:not(#nuxt-speedkit__button__init-nojs) { display: none !important; } #nuxt-speedkit__message__nojs, #nuxt-speedkit__button__init-nojs { display: initial !important; }",!0)],__dangerouslyDisableSanitizers:["noscript"]})},m=(n(78),{components:{BaseButton:l,SpeedkitLayer:Object(r.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("only-ssr",[n("div",{attrs:{id:"nuxt-speedkit__speedkit-layer"}},[n("input",{attrs:{name:"close",id:"nuxt-speedkit__speedkit-layer__close",type:"checkbox"}}),t._v(" "),n("div",{attrs:{id:"nuxt-speedkit__speedkit-layer__content"}},[t._t("default",(function(){return[n("div",[n("p",[t._v("Sorry, but you will have a limited user experience due to a…")]),t._v(" "),n("ul",{staticStyle:{padding:"0","list-style":"none"}},[n("li",{attrs:{id:"nuxt-speedkit__message__nojs"}},[t._v("\n              disabled javascript\n            ")]),t._v(" "),n("li",{attrs:{id:"nuxt-speedkit__message__unsupported-browser"}},[t._v("\n              outdated browser\n            ")]),t._v(" "),n("li",{attrs:{id:"nuxt-speedkit__message__outdated-device"}},[t._v("\n              outdated device\n            ")]),t._v(" "),n("li",{attrs:{id:"nuxt-speedkit__message__slow-connection"}},[t._v("\n              slow connection\n            ")])]),t._v(" "),n("button",{attrs:{id:"nuxt-speedkit__button__init-nojs"}},[n("label",{attrs:{for:"nuxt-speedkit__speedkit-layer__close"}},[t._v("\n              Apply without js\n            ")])]),t._v(" "),n("button",{attrs:{id:"nuxt-speedkit__button__init-font",onclick:"window.__NUXT_SPEEDKIT_FONT_INIT__ = true;"}},[n("label",{attrs:{for:"nuxt-speedkit__speedkit-layer__close"}},[t._v("\n              Apply with Fonts\n            ")])]),t._v(" "),n("button",{attrs:{id:"nuxt-speedkit__button__init-app",onclick:"window.__NUXT_SPEEDKIT_AUTO_INIT__ = true;"}},[t._v("\n            Apply with all Features\n          ")])])]}))],2)])])}),[],!1,null,null,null).exports},data:()=>({hydrate:!1}),head:()=>({noscript:[Object(c.c)(".info-layer > div { animation-delay: initial !important; }",!0)],__dangerouslyDisableSanitizers:["noscript"]})}),h=(n(80),{speedkitComponents:{GoogleLighthouse:()=>Promise.resolve().then(n.bind(null,124)),OrganismPageHeader:()=>Promise.resolve().then(n.bind(null,122))},components:{InfoLayer:Object(r.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("speedkit-layer",{staticClass:"info-layer"},[n("div",[n("p",{directives:[{name:"font",rawName:"v-font",value:t.$getFont("Quicksand",400,"normal"),expression:"$getFont('Quicksand', 400, 'normal')"}]},[t._v("\n      Sorry, but you will have a limited user experience due to a…\n    ")]),t._v(" "),n("ul",{directives:[{name:"font",rawName:"v-font",value:t.$getFont("Quicksand",700,"normal"),expression:"$getFont('Quicksand', 700, 'normal')"}]},[n("li",{attrs:{id:"nuxt-speedkit__message__nojs"}},[t._v("\n        disabled javascript\n      ")]),t._v(" "),n("li",{attrs:{id:"nuxt-speedkit__message__unsupported-browser"}},[t._v("\n        outdated browser\n      ")]),t._v(" "),n("li",{attrs:{id:"nuxt-speedkit__message__outdated-device"}},[t._v("\n        outdated device\n      ")]),t._v(" "),n("li",{attrs:{id:"nuxt-speedkit__message__slow-connection"}},[t._v("\n        slow connection\n      ")])]),t._v(" "),n("div",{staticClass:"info-layer__buttons"},[n("base-button",{attrs:{id:"nuxt-speedkit__button__init-nojs"}},[n("label",{attrs:{for:"nuxt-speedkit__speedkit-layer__close"}},[t._v("\n          OK\n        ")])]),t._v(" "),n("base-button",{attrs:{id:"nuxt-speedkit__button__init-font",onclick:"window.__NUXT_SPEEDKIT_FONT_INIT__ = true;"}},[n("label",{attrs:{for:"nuxt-speedkit__speedkit-layer__close"}},[t._v("\n          No\n        ")])]),t._v(" "),n("base-button",{attrs:{id:"nuxt-speedkit__button__init-app",label:"Yes",onclick:"window.__NUXT_SPEEDKIT_AUTO_INIT__ = true;"}})],1)])])}),[],!1,null,"ae0e328e",null).exports},data:()=>({pageHeader:{menu:{lists:[{links:[{title:"Home",to:"/"}]},{headline:"Test",links:[{title:"v-font",to:"/tests/v-font/"},{title:"v-font (media)",to:"/tests/v-font-media/"},{title:"SpeedkitPicture",to:"/tests/speedkit-picture/"},{title:"SpeedkitYoutube",to:"/tests/speedkit-youtube/"},{title:"SpeedkitIframe",to:"/tests/speedkit-iframe/"}]},{headline:"Experimental",links:[{title:"Home",to:"/experimental/"},{title:"SpeedkitYoutube",to:"/experimental/speedkit-youtube/"},{title:"SpeedkitPicture (5 Pictures)",to:"/experimental/speedkit-picture/5/"}]}]}}}),head(){return{title:`${this.$route.name} | nuxt-speedkit`,meta:[{hid:"description",name:"description",content:`${this.$route.name} - description`}]}}}),v=(n(94),Object(r.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("organism-page-header",t._b({},"organism-page-header",t.pageHeader,!1)),t._v(" "),n("Nuxt"),t._v(" "),n("info-layer",{attrs:{critical:""}}),t._v(" "),n("GithubCorner"),t._v(" "),n("google-lighthouse")],1)}),[],!1,null,null,null));e.a=v.exports;installComponents(v,{GithubCorner:n(123).default})},function(t,e,n){"use strict";var o=n(53),r=n(10),l=n(9);class c{constructor(){this.list=[]}add(t,e){const n={name:"data-font",value:`${d(t.tag,JSON.stringify(e.map((t=>t.getKey()))))}`};return this.list=[].concat(this.list).concat(e.map((t=>(t.setRootSelector(n),t)))),n}getHeadDescription(t,e){return{link:this.getPreloadDescriptions(t,e),style:this.getStyleDescriptions(),noscript:this.getNoScriptStyleDescriptions(),__dangerouslyDisableSanitizers:["style","noscript"]}}getPreloadDescriptions(t,e){return Array.from(this.list.reduce(((t,e)=>t),new Map).values())}getStyleDescriptions(){return f([Object(l.c)(this.list.map((t=>t.getCSSText())).join(" "))])}getNoScriptStyleDescriptions(){return f([Object(l.c)(this.list.map((t=>t.getNoScriptCSSText())).join(" "),!0)])}toJSON(){return this.list}}function d(t,e){return Object(r.a)(`${t}_${e}`).padStart(9,"-")}function f(t){return t.filter((t=>"0"!==t.hid))}var m=n(54),h={install(t){t.mixin({provide(){return{criticalParent:this.critical||this.criticalParent}},inject:{criticalParent:{default:()=>this.critical||!1}},props:{critical:{type:Boolean,default:()=>!1}},data:()=>({fontActive:!1,fontCollection:new c}),head(){return this.fontCollection.getHeadDescription?this.fontCollection.getHeadDescription(this.isCritical,this.$crossorigin):{}},computed:{isCritical(){return this.criticalParent||this.critical}},beforeCreate(){const t=Object.entries(this.$options.speedkitComponents||{}).reduce(((t,[e,n])=>Object.assign(t,{[e]:Object(m.a)(n,{observerOptions:{rootMargin:"0%"}})})),{});Object.assign(this.$options.components,t)}})}};let v=!1;e.a={install(t,e){v||(v=!0,o.a.install(t,"font"),h.install(t))}}},,function(t,e,n){n(67),t.exports=n(68)},,,,,,,,,,function(t,e,n){"use strict";n(22)},function(t,e,n){var o=n(4)(!1);o.push([t.i,".atom-base-button{color:currentColor;cursor:pointer;background:transparent;border:.0625em solid;border-radius:.3125em;outline:none;transition:transform .1s ease-in;-webkit-appearance:none;-moz-appearance:none;appearance:none;will-change:transform}.atom-base-button>*{display:block;padding:.625em 1.25em;cursor:pointer}.atom-base-button:hover{transform:scale(1.05)}.atom-base-button:active{transform:scale(.95)}",""]),t.exports=o},function(t,e,n){"use strict";n(23)},function(t,e,n){var o=n(4)(!1);o.push([t.i,"#nuxt-speedkit__speedkit-layer{width:0;height:0}#nuxt-speedkit__speedkit-layer input{display:none}#nuxt-speedkit__speedkit-layer input:checked+*{display:none}#nuxt-speedkit__button__init-nojs,#nuxt-speedkit__message__nojs,#nuxt-speedkit__message__outdated-device,#nuxt-speedkit__message__slow-connection,#nuxt-speedkit__message__unsupported-browser{display:none}",""]),t.exports=o},function(t,e,n){"use strict";n(24)},function(t,e,n){var o=n(4)(!1);o.push([t.i,".info-layer[data-v-ae0e328e] #nuxt-speedkit__speedkit-layer__content{position:fixed;top:0;left:0;z-index:1000;width:100%;height:100%;background-color:rgba(0,0,0,.25);opacity:0;-webkit-animation-name:fade-in-data-v-ae0e328e;animation-name:fade-in-data-v-ae0e328e;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-delay:3s;animation-delay:3s;-webkit-backdrop-filter:blur(.4375em);backdrop-filter:blur(.4375em);-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.info-layer[data-v-ae0e328e] #nuxt-speedkit__speedkit-layer__content>div{padding:10px;color:#fff;text-align:center;background-color:rgba(0,0,0,.6);box-shadow:0 0 .625em rgba(0,0,0,.6);transform:translateY(-100%);-webkit-animation-name:fall-down-data-v-ae0e328e;animation-name:fall-down-data-v-ae0e328e;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-delay:.5s;animation-delay:.5s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.info-layer.nuxt-speedkit__speedkit-layer--visible[data-v-ae0e328e] #nuxt-speedkit__speedkit-layer__content{-webkit-animation-delay:0s;-webkit-animation-delay:initial;animation-delay:0s}ul[data-v-ae0e328e]{padding:0;margin:0}ul>li[data-v-ae0e328e]{display:none}.info-layer__buttons[data-v-ae0e328e]{margin:.625em 0}.info-layer__buttons>*[data-v-ae0e328e]{margin:0 .3125em}@-webkit-keyframes fade-in-data-v-ae0e328e{to{opacity:1}}@keyframes fade-in-data-v-ae0e328e{to{opacity:1}}@-webkit-keyframes fall-down-data-v-ae0e328e{to{transform:translateY(0)}}@keyframes fall-down-data-v-ae0e328e{to{transform:translateY(0)}}",""]),t.exports=o},function(t,e,n){"use strict";n(25)},function(t,e,n){var o=n(4)(!1);o.push([t.i,".nuxt-speedkit__lighthouse[data-v-33cc96f6]{--pi:3.14159265358979;--score:0;position:fixed;top:0;right:0;z-index:1;display:block;width:60px;font-family:Arial,Helvetica,sans-serif;text-align:center;pointer-events:none;background-color:#fff}.nuxt-speedkit__lighthouse.ready[data-v-33cc96f6]{pointer-events:all}.nuxt-speedkit__lighthouse>svg[data-v-33cc96f6]{display:block;width:50px;height:50px;margin:5px}.nuxt-speedkit__lighthouse>svg circle[data-v-33cc96f6]{fill:transparent;stroke:var(--color-status);stroke-width:10;transform:rotate(-90deg);transform-origin:50%}.nuxt-speedkit__lighthouse>svg circle.pending[data-v-33cc96f6]{stroke-dasharray:calc(var(--pi)*1.35*45);stroke-dashoffset:calc(var(--pi)*2*45);-webkit-animation:nuxt-speedkit-lighthouse-rotating 1s linear infinite;animation:nuxt-speedkit-lighthouse-rotating 1s linear infinite}.nuxt-speedkit__lighthouse>svg circle.ready[data-v-33cc96f6]{fill:var(--color-status);fill-opacity:.1;stroke-dasharray:calc(var(--pi)*2*45);stroke-dashoffset:calc(var(--pi)*2*45);-webkit-animation:nuxt-speedkit-lighthouse-stroke-data-v-33cc96f6 var(--duration) ease-out forwards;animation:nuxt-speedkit-lighthouse-stroke-data-v-33cc96f6 var(--duration) ease-out forwards}.nuxt-speedkit__lighthouse>svg line[data-v-33cc96f6]{stroke:var(--color-status);stroke-width:10}.nuxt-speedkit__lighthouse>svg text[data-v-33cc96f6]{font-size:32px;fill:var(--color-status)}.nuxt-speedkit__lighthouse span[data-v-33cc96f6]{font-size:12px;text-decoration:underline}.nuxt-speedkit__lighthouse svg[data-v-33cc96f6]{display:inline;width:12px;height:12px;margin-left:3px}@-webkit-keyframes nuxt-speedkit-lighthouse-stroke-data-v-33cc96f6{to{stroke-dashoffset:var(--radian)}}@keyframes nuxt-speedkit-lighthouse-stroke-data-v-33cc96f6{to{transform:rotate(270deg)}}",""]),t.exports=o},function(t,e,n){"use strict";n(26)},function(t,e,n){var o=n(4)(!1);o.push([t.i,"",""]),t.exports=o},function(t,e,n){"use strict";n(27)},function(t,e,n){var o=n(4)(!1);o.push([t.i,"ul[data-v-556697c0]{padding:0;list-style:none}li[data-v-556697c0]{margin:.625em 0}a[data-v-556697c0]{position:relative;display:block;padding:.3125em .625em;color:currentColor;text-decoration:none;border-radius:.1875em;outline:none;opacity:.8;transition:opacity .2s linear,background .2s linear}a.nuxt-link-exact-active[data-v-556697c0],a[data-v-556697c0]:hover{background:hsla(0,0%,100%,.4);opacity:1}",""]),t.exports=o},function(t,e,n){"use strict";n(28)},function(t,e,n){var o=n(4)(!1);o.push([t.i,"html.js--menu-open{overflow:hidden}",""]),t.exports=o},function(t,e,n){"use strict";n(29)},function(t,e,n){var o=n(4)(!1);o.push([t.i,".menu[data-v-30f0d6c1]{color:#000}@media (prefers-color-scheme:dark){.menu[data-v-30f0d6c1]{color:#fff}}.menu .menu__toggle[data-v-30f0d6c1]{position:absolute;top:.625em;left:.625em;padding:.625em;cursor:pointer;background:hsla(0,0%,100%,.4);outline:none;transition:background .2s linear}@media (prefers-color-scheme:dark){.menu .menu__toggle[data-v-30f0d6c1]{background:rgba(0,0,0,.4)}}.menu .menu__toggle svg[data-v-30f0d6c1]{display:block;width:1.875em}.menu .menu__toggle path[data-v-30f0d6c1]{fill:#333;transition:opacity .2s linear,transform .2s linear;transform-origin:center}@media (prefers-color-scheme:dark){.menu .menu__toggle path[data-v-30f0d6c1]{fill:#fff}}.menu .menu__toggle #close path[data-v-30f0d6c1]:first-child,.menu .menu__toggle #close path[data-v-30f0d6c1]:nth-child(2){transform:rotate(0deg)}@media (hover:hover) and (pointer:fine){.menu .menu__toggle:hover #open path[data-v-30f0d6c1]{opacity:.6}.menu .menu__toggle:hover #open path[data-v-30f0d6c1]:first-child{transform:translateY(-4%)}.menu .menu__toggle:hover #open path[data-v-30f0d6c1]:nth-child(2){transform:translateY(4%)}.menu .menu__toggle:hover #close path[data-v-30f0d6c1]:first-child{transform:rotate(15deg)}.menu .menu__toggle:hover #close path[data-v-30f0d6c1]:nth-child(2){transform:rotate(-15deg)}}.menu input:checked~.menu__toggle[data-v-30f0d6c1]{background:transparent}.menu input:checked~.menu__toggle #open path[data-v-30f0d6c1]{opacity:0}.menu input:checked~.menu__toggle #open path[data-v-30f0d6c1]:first-child{transform:translateY(-10%)}.menu input:checked~.menu__toggle #open path[data-v-30f0d6c1]:nth-child(2){transform:translateY(10%)}.menu input:checked~.menu__toggle #close path[data-v-30f0d6c1]:first-child{transform:rotate(45deg)}.menu input:checked~.menu__toggle #close path[data-v-30f0d6c1]:nth-child(2){transform:rotate(-45deg)}@media (hover:hover) and (pointer:fine){.menu input:checked~.menu__toggle:hover #open path[data-v-30f0d6c1]{opacity:.2}.menu input:checked~.menu__toggle:hover #open path[data-v-30f0d6c1]:first-child{transform:translateY(-8%)}.menu input:checked~.menu__toggle:hover #open path[data-v-30f0d6c1]:nth-child(2){transform:translateY(8%)}.menu input:checked~.menu__toggle:hover #close path[data-v-30f0d6c1]:first-child{transform:rotate(30deg)}.menu input:checked~.menu__toggle:hover #close path[data-v-30f0d6c1]:nth-child(2){transform:rotate(-30deg)}}.menu .menu__title[data-v-30f0d6c1]{display:block;font-size:1.125em;font-weight:400;text-align:right;text-transform:uppercase;opacity:.4}.menu .menu__headline[data-v-30f0d6c1]{display:block;margin-left:.625em;font-size:1.125em;color:#333}@media (prefers-color-scheme:dark){.menu .menu__headline[data-v-30f0d6c1]{color:hsla(0,0%,100%,.8)}}.menu .menu-button[data-v-30f0d6c1]{position:absolute;top:0;padding:0}.menu .menu__content[data-v-30f0d6c1]{position:fixed;top:0}.menu .menu__content>label[data-v-30f0d6c1]{position:absolute;top:0;left:0;width:100%;height:100%;cursor:pointer}.menu .menu__content[data-v-30f0d6c1]{width:100%;height:100%;pointer-events:none;transition:-webkit-backdrop-filter .2s ease-in .2s;transition:backdrop-filter .2s ease-in .2s;transition:backdrop-filter .2s ease-in .2s,-webkit-backdrop-filter .2s ease-in .2s;-webkit-backdrop-filter:none;backdrop-filter:none}.menu .menu__content>div[data-v-30f0d6c1]{display:flex;height:100%}.menu .menu__content>div>div[data-v-30f0d6c1]{padding:3.125em 1.25em 1.25em;overflow:auto;text-align:left;background:hsla(0,0%,100%,.5);transition:transform .2s ease-in;transform:translateX(-100%)}@media (prefers-color-scheme:dark){.menu .menu__content>div>div[data-v-30f0d6c1]{background:rgba(0,0,0,.5)}}.menu input[data-v-30f0d6c1]{display:none}.menu input:checked+.menu__content[data-v-30f0d6c1]{display:block;pointer-events:auto;transition-delay:0s;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.menu input:checked+.menu__content>div>div[data-v-30f0d6c1]{transition-delay:.2s;transform:translateX(0)}",""]),t.exports=o},function(t,e,n){"use strict";n(30)},function(t,e,n){var o=n(4)(!1);o.push([t.i,".page-header[data-v-44c547e4]{position:fixed;top:0;left:0;z-index:1}.page-header .overview-link[data-v-44c547e4]{display:inline-block;padding:.55556em;font-size:1.125em;color:#f5f7fa;text-decoration:none;background-color:#2c3e50;border-radius:0 0 .27778em 0;box-shadow:0 0 .27778em hsla(0,0%,100%,.6)}@media (prefers-color-scheme:dark){.page-header .overview-link[data-v-44c547e4]{color:#2f495e;background-color:#fff;box-shadow:0 0 .27778em rgba(0,0,0,.6)}}",""]),t.exports=o},function(t,e,n){"use strict";n(31)},function(t,e,n){var o=n(4)(!1);o.push([t.i,"html{height:-webkit-fill-available;height:-moz-available;height:stretch}body{min-height:100vh;min-height:-webkit-fill-available;min-height:-moz-available;min-height:stretch;margin:0;font-size:5vw;color:#000;background-color:#fff}@media (prefers-color-scheme:dark){body{color:#fff;background-color:#333}}@media (min-width:375px){body{font-size:4.26667vw}}@media (min-width:414px){body{font-size:3.86473vw}}@media (min-width:768px){body{font-size:2.08333vw}}@media (min-width:992px){body{font-size:16px}}",""]),t.exports=o},function(t,e,n){"use strict";n(32)},function(t,e,n){var o=n(4)(!1);o.push([t.i,".atom-github-corner{position:fixed;top:0;right:0}.atom-github-corner:hover .octo-arm{-webkit-animation:octocat-wave .56s ease-in-out;animation:octocat-wave .56s ease-in-out}@media (max-width:500px){.atom-github-corner .octo-arm{-webkit-animation:octocat-wave .56s ease-in-out;animation:octocat-wave .56s ease-in-out}.atom-github-corner:hover .octo-arm{-webkit-animation:none;animation:none}}@-webkit-keyframes octocat-wave{0%,to{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@keyframes octocat-wave{0%,to{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}",""]),t.exports=o},,,,function(t,e,n){t.exports=n.p+"fonts/quicksand-v21-latin-300.c7342fb.woff"},function(t,e,n){t.exports=n.p+"fonts/quicksand-v21-latin-regular.5589694.woff"},function(t,e,n){t.exports=n.p+"fonts/quicksand-v21-latin-500.e16bfdc.woff"},function(t,e,n){t.exports=n.p+"fonts/quicksand-v21-latin-600.6891aed.woff"},function(t,e,n){t.exports=n.p+"fonts/quicksand-v21-latin-700.82849a6.woff"},function(t,e,n){t.exports=n.p+"fonts/merriweather-v22-latin-300.58b1806.woff"},function(t,e,n){t.exports=n.p+"fonts/merriweather-v22-latin-300italic.23c3f1f.woff"},function(t,e,n){t.exports=n.p+"fonts/merriweather-v22-latin-regular.040426f.woff"},function(t,e,n){t.exports=n.p+"fonts/merriweather-v22-latin-italic.79db67a.woff"},function(t,e,n){t.exports=n.p+"fonts/merriweather-v22-latin-700.22fb8af.woff"},function(t,e,n){t.exports=n.p+"fonts/merriweather-v22-latin-700italic.f87f3d8.woff"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-300.3020f48.woff"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-300italic.3a4e0ee.woff"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-regular.949959a.woff"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-italic.fa400a7.woff"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-700.49de2c7.woff"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-700italic.c7b87f9.woff"},,,,,function(t,e,n){"use strict";n.r(e);var o={props:{tag:{type:String,default:"h1"},content:{type:String,default:"Headline"}}},r=(n(84),n(2)),l=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.tag,{directives:[{name:"font",rawName:"v-font",value:t.$getFont("Quicksand",700,"normal"),expression:"$getFont('Quicksand', 700, 'normal')"}],tag:"component",staticClass:"atom-headline"},[t._t("default",(function(){return[t._v(t._s(t.content))]}))],2)}),[],!1,null,null,null).exports,c={props:{items:{type:Array,default:()=>[{title:"Link 1."},{title:"Link 2."},{title:"Link 3."}]}}},d=(n(86),{components:{Headline:l,LinkList:Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{directives:[{name:"font",rawName:"v-font",value:[t.$getFont("Quicksand",400,"normal")],expression:"[\n    $getFont('Quicksand', 400, 'normal'),\n  ]"}]},t._l(t.items,(function(e,o){return n("li",{key:o},[n("nuxt-link",t._b({},"nuxt-link",e,!1),[t._v("\n      "+t._s(e.title)+"\n    ")])],1)})),0)}),[],!1,null,"556697c0",null).exports},props:{lists:{type:Array,default:()=>[{headline:"Preview",links:[{title:"Item",to:"/"}]}]}},data:()=>({open:!1}),watch:{open(t){document.documentElement.classList.toggle("js--menu-open",t)}},mounted(){this.$router.afterEach(((t,e)=>{this.open=!1}))}}),f=(n(88),n(90),{components:{OrganismMenu:Object(r.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.open,expression:"open"}],attrs:{id:"menu-control",type:"checkbox",name:"menu-control"},domProps:{checked:Array.isArray(t.open)?t._i(t.open,null)>-1:t.open},on:{change:function(e){var n=t.open,o=e.target,r=!!o.checked;if(Array.isArray(n)){var l=t._i(n,null);o.checked?l<0&&(t.open=n.concat([null])):l>-1&&(t.open=n.slice(0,l).concat(n.slice(l+1)))}else t.open=r}}}),t._v(" "),n("div",{staticClass:"menu__content",attrs:{"aria-label":"Menu"}},[n("label",{attrs:{for:"menu-control"}}),t._v(" "),n("div",[n("div",t._l(t.lists,(function(e,o){var r=e.headline,l=e.links;return n("nav",{key:o},[r?n("headline",{staticClass:"menu__headline",attrs:{tag:"span",type:"menu",content:r}}):t._e(),t._v(" "),n("link-list",{attrs:{items:l,"aria-label":"Menu"}})],1)})),0)])]),t._v(" "),n("label",{staticClass:"menu__toggle",attrs:{for:"menu-control"}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 120 120"}},[n("g",{attrs:{id:"open"}},[n("g",[n("path",{attrs:{d:"M0 10h120v16.67H0z"}}),t._v(" "),n("path",{attrs:{d:"M0 93.33h120V110H0z"}})])]),t._v(" "),n("g",{attrs:{id:"close"}},[n("path",{attrs:{d:"M0 51.67h120v16.67H0z"}}),t._v(" "),n("path",{attrs:{d:"M0 51.67h120v16.67H0z"}})])])])])}),[],!1,null,"30f0d6c1",null).exports},props:{menu:{type:Object,default:()=>({lists:[]})}}}),m=(n(92),Object(r.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"page-header"},[n("organism-menu",t._b({},"organism-menu",t.menu,!1))],1)}),[],!1,null,"44c547e4",null));e.default=m.exports},function(t,e,n){"use strict";n.r(e);var o={props:{title:{type:String,default:"View source on GitHub"},target:{type:String,default:"_blank"},url:{type:String,default:"https://github.com/GrabarzUndPartner/nuxt-speedkit"}}},r=(n(96),n(2)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"atom-github-corner",attrs:{href:t.url,"aria-label":t.title,title:t.title,target:t.target}},[n("svg",{staticStyle:{position:"absolute",top:"0",right:"0",color:"#fff",border:"0",fill:"#151513"},attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"}},[n("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),n("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),n("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])])}),[],!1,null,null,null);e.default=component.exports},function(t,e,n){"use strict";n.r(e);var o={components:{LighthouseWidget:()=>n.e(16).then(n.bind(null,303))},created(){this.$router.beforeEach(((t,e,n)=>{!("lh"in t.query)&&"lh"in e.query&&(t.query.lh=e.query.lh,n({path:t.path,query:t.query})),n()}))}},r=(n(82),n(2)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return"lh"in t.$route.query?n("lighthouse-widget",t._b({},"lighthouse-widget",t.$attrs,!1)):t._e()}),[],!1,null,"33cc96f6",null);e.default=component.exports}]);