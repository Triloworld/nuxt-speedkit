(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{262:function(e,t,n){var content=n(268);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(27).default)("0ca7e28f",content,!0,{sourceMap:!1})},263:function(e,t,n){var content=n(270);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(27).default)("1c0f1833",content,!0,{sourceMap:!1})},264:function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var o;n(7);function r(){return o||(o=new Promise((function(t){var img=new e.Image;img.onload=function(){return t(!0)},img.onerror=function(){return t(!1)},img.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"}))),o}function c(element,t){var n={};return e.document&&(n=e.document.createElement(element)),t in n}}).call(this,n(14))},265:function(e,t,n){var content=n(272);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(27).default)("dba19a4e",content,!0,{sourceMap:!1})},266:function(e,t,n){"use strict";var o=n(13),r=n(4),c=n(57),l=n(16),h=n(12),d=n(38),A=n(117),m=n(79),f=n(5),w=n(56),E=n(116).f,v=n(45).f,x=n(19).f,C=n(189).trim,Q="Number",B=r.Number,S=B.prototype,j=d(w(S))==Q,y=function(e){var t,n,o,r,c,l,h,code,d=m(e,!1);if("string"==typeof d&&d.length>2)if(43===(t=(d=C(d)).charCodeAt(0))||45===t){if(88===(n=d.charCodeAt(2))||120===n)return NaN}else if(48===t){switch(d.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+d}for(l=(c=d.slice(2)).length,h=0;h<l;h++)if((code=c.charCodeAt(h))<48||code>r)return NaN;return parseInt(c,o)}return+d};if(c(Q,!B(" 0o1")||!B("0b1")||B("+0x1"))){for(var k,M=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof M&&(j?f((function(){S.valueOf.call(n)})):d(n)!=Q)?A(new B(y(t)),n,M):y(t)},I=o?E(B):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),z=0;I.length>z;z++)h(B,k=I[z])&&!h(M,k)&&x(M,k,v(B,k));M.prototype=S,S.constructor=M,l(r,Q,M)}},267:function(e,t,n){"use strict";n(262)},268:function(e,t,n){var o=n(26)(!1);o.push([e.i,'.nuxt-speedkit__image-container[data-v-e23a632a]{position:relative;width:100%;height:100%;margin:0}.nuxt-speedkit__image-container>span.loading[data-v-e23a632a]{position:absolute;top:50%;left:50%;display:block;width:10%;transform:translate(-50%,-50%)}.nuxt-speedkit__image-container>span.loading[data-v-e23a632a]:before{box-sizing:border-box;display:block;padding-top:100%;content:""}.nuxt-speedkit__image-container>span.loading[data-v-e23a632a]:after{position:absolute;top:0;right:0;bottom:0;left:0;box-sizing:border-box;display:block;content:"";border:3px solid #ccc;border-top-color:#07d;border-radius:50%;-webkit-animation-name:spinner;animation-name:spinner;-webkit-animation-duration:.6s;animation-duration:.6s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-delay:.35s;animation-delay:.35s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;will-change:transform}',""]),e.exports=o},269:function(e,t,n){"use strict";n(263)},270:function(e,t,n){var o=n(26)(!1);o.push([e.i,".nuxt-speedkit__noscript[data-v-fc27cbec]{position:absolute;top:0;left:0;width:100%;height:100%}",""]),e.exports=o},271:function(e,t,n){"use strict";n(265)},272:function(e,t,n){var o=n(26)(!1);o.push([e.i,".nuxt-speedkit__custom-image[data-v-c1feaf18]{width:100%;height:100%;vertical-align:middle;-o-object-fit:cover;object-fit:cover}",""]),e.exports=o},273:function(e,t,n){"use strict";n(80),n(30);var o=n(3),r=n(82),c=n(264),l=(n(7),n(18),n(23),n(188),n(17),n(81),n(118)),h=function(){function e(){this.map=new Map}return e.prototype.getEntry=function(e){return this.map.has(e)||this.map.set(e,new l.a),this.map.get(e)},e}(),d=n(58),A=new h;function m(e,t,n){var o=Object(d.a)(e.srcset),r=A.getEntry(o);return r.promise.then((function(){return t()})),Object(c.a)("link","imageSrcset")?{link:[f(e,o,r.resolve,n)]}:function(e,t,n){var img=new Image;img.onload=t,img.crossorigin=n,img.srcset=e.srcset}(e,r.resolve,n)}function f(e,t,n,o){return{hid:t,rel:"preload",as:"image",crossorigin:o,callback:n,imageSrcset:e.srcset}}var w={props:{preload:{type:Array,default:function(){return null}},crossorigin:{type:String,default:function(){return"anonymous"}}},fetchOnServer:!1,data:function(){return{visible:this.isCritical,preloaded:!1,webpSupport:!1}},fetch:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=!1,t.t0){t.next=5;break}return t.next=4,Object(c.b)();case 4:t.t0=t.sent;case 5:e.webpSupport=t.t0;case 6:case"end":return t.stop()}}),t)})))()},head:function(){var e,t=this;return this.preload&&this.visible&&this.preload&&this.preload.length?m((e=this.preload,this.webpSupport&&e.find((function(source){return"image/webp"===source.type}))||e.find((function(source){return"image/webp"!==source.type}))),(function(){return t.onPreload()}),this.crossorigin):{}},mounted:function(){var e=this;Object(r.a)(this.$el,(function(){e.visible=!0}))},destroyed:function(){Object(r.b)(this.$el)},methods:{onLoad:function(e){this.preloaded&&this.$emit("load",e.target)},onPreload:function(){this.preloaded=!0,this.$emit("preload")}}},E=(n(271),n(8)),component=Object(E.a)(w,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("img",{staticClass:"nuxt-speedkit__custom-image",attrs:{loading:"lazy",crossorigin:e.crossorigin},on:{load:e.onLoad}})}),[],!1,null,"c1feaf18",null);t.a=component.exports},274:function(e,t,n){"use strict";var o={props:{loading:{type:Boolean,default:function(){return!1}}},computed:{hasSlot:function(){return this.$slots.caption}}},r=(n(267),n(8)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("figure",{staticClass:"nuxt-speedkit__image-container"},[e._t("default"),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"loading"}),e._v(" "),e.hasSlot?n("figcaption",[e._t("caption")],2):e._e()],2)}),[],!1,null,"e23a632a",null);t.a=component.exports},275:function(e,t,n){"use strict";n(269);var o=n(8),component=Object(o.a)({},(function(){var e=this.$createElement;return(this._self._c||e)("noscript",{staticClass:"nuxt-speedkit__noscript",inlineTemplate:{render:function(){var e=this,t=e.$createElement;e._self._c;return e._t("default")},staticRenderFns:[]}})}),[],!1,null,"fc27cbec",null);t.a=component.exports},276:function(e,t,n){"use strict";n(266);var o=n(274),r=n(275),c=n(273),l={components:{ImageContainer:o.a,CustomNoScript:r.a,CustomImage:c.a},props:{sources:{type:Array,default:function(){return[]}},placeholder:{type:Object,default:function(){return{}}},alt:{type:String,default:function(){return""}},title:{type:String,default:function(){return""}},width:{type:Number,default:function(){return null}},height:{type:Number,default:function(){return null}},crossorigin:{type:String,default:function(){return"anonymous"}}},data:function(){return{preloadedSources:this.noScript&&this.sources||[],loading:!1,webpSupport:!1}},computed:{hasSlot:function(){return this.$slots.caption}},mounted:function(){this.loading=!0},methods:{onLoad:function(e){this.loading=!1,this.$emit("load")},onPreload:function(){this.preloadedSources=this.sources}}},h=n(8),component=Object(h.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("image-container",{staticClass:"nuxt-speedkit__lazy-picture",attrs:{loading:e.loading},scopedSlots:e._u([{key:"default",fn:function(){return[n("picture",[e._l(e.preloadedSources,(function(source,t){return n("source",e._b({key:t},"source",source,!1))})),e._v(" "),n("custom-image",e._b({on:{load:e.onLoad,preload:e.onPreload}},"custom-image",{src:e.placeholder.base64,preload:e.sources,width:e.width,height:e.height,alt:e.alt,title:e.title,crossorigin:e.crossorigin},!1))],2),e._v(" "),n("custom-no-script",[n("picture",[e._l(e.sources,(function(source,t){return n("source",e._b({key:t},"source",source,!1))})),e._v(" "),n("custom-image",e._b({on:{load:e.onLoad,preload:e.onPreload}},"custom-image",{src:e.placeholder.url,width:e.width,height:e.height,alt:e.alt,title:e.title,crossorigin:e.crossorigin},!1))],2)])]},proxy:!0},{key:"caption",fn:function(){return[e._t("caption")]},proxy:!0}],null,!0)})}),[],!1,null,null,null);t.a=component.exports},277:function(e,t,n){var o={src:n.p+"img/d05258f.jpg",preview:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2400 2400'%3E%3Cpath fill='%23ab8a5c' d='M0 0h2400v2400H0z'/%3E%3Cg fill-opacity='.5'%3E%3Cpath fill='%23fffff3' d='M2264 2545.3l18.8-1331.2L192.2 2245.3z'/%3E%3Cpath fill='%23461e00' d='M-145.3 717.2l1275 1087.5 740.6-1950z'/%3E%3Cpath fill='%23300' d='M342.2 736l-487.5 1603V-89z'/%3E%3Cpath fill='%23fae0a7' d='M398.4 2545.3L201.6 1382.8l2128 768.8z'/%3E%3Cpath fill='%23371a05' d='M1907.8 782.8L501.6-145.3l440.6 928.1z'/%3E%3Cpath fill='%23b6ae91' d='M1073.4 773.4l-721.8 440.7 1978-140.7z'/%3E%3Cpath fill='%23651f00' d='M820.3 1195.3l543.8 534.4 365.6-450z'/%3E%3Cpath fill='%23f1c789' d='M2545.3 979.7L1682.8 42.2l693.8-187.5z'/%3E%3Cpath fill='%23230c00' d='M1682.8 23.4l-356.2 1003.2L1139 370.3z'/%3E%3Cpath fill='%23b87b31' d='M-145.3 1992.2L764-145.3 389 2545.3z'/%3E%3Cpath fill='%23efebc6' d='M2067.2 2348.4l140.6-1265.6L811 2545.3z'/%3E%3Cpath fill='%23522900' d='M539 1157.8L220.4 370.3l-365.6 1012.5z'/%3E%3Cpath fill='%23d1912d' d='M1973.4-145.3l-881.2 431.2-646.9-431.2z'/%3E%3Cpath fill='%23e1bb7f' d='M164 1561l206.3 984.3 853.1-871.9z'/%3E%3Cpath fill='%23b47f3d' d='M-145.3 595.3L1026.6 736l-1172-853z'/%3E%3Cpath fill='%2384510d' d='M2217.2 1026.6l328.1 215.6-131.2 1003.1z'/%3E%3Cpath d='M1007.8 1007.8l121.9 318.8-187.5 140.6z'/%3E%3Cpath fill='%23aa6c27' d='M1786 1579.7l-740.7-956.3 271.9 1050z'/%3E%3Cpath fill='%23f6d8ac' d='M1457.8 1326.6l131.3-365.7-112.5-365.6z'/%3E%3Cpath fill='%23210c00' d='M1542.2 1073.4l112.5 84.4-150 412.5z'/%3E%3C/g%3E%3C/svg%3E",dimensions:{height:2400,width:2400,type:"jpg"}};e.exports=o.preview,e.exports=Object.assign(e.exports,o)},279:function(e,t,n){e.exports={srcSet:n.p+"img/00b4f63-480.webp 480w,"+n.p+"img/93e2d7e-768.webp 768w,"+n.p+"img/a7d60c7-960.webp 960w,"+n.p+"img/3344f2d-1080.webp 1080w,"+n.p+"img/104d21d-1200.webp 1200w,"+n.p+"img/d7e5050-1536.webp 1536w,"+n.p+"img/07db796-2160.webp 2160w,"+n.p+"img/1ab22ac-2400.webp 2400w",images:[{path:n.p+"img/00b4f63-480.webp",width:480,height:480},{path:n.p+"img/93e2d7e-768.webp",width:768,height:768},{path:n.p+"img/a7d60c7-960.webp",width:960,height:960},{path:n.p+"img/3344f2d-1080.webp",width:1080,height:1080},{path:n.p+"img/104d21d-1200.webp",width:1200,height:1200},{path:n.p+"img/d7e5050-1536.webp",width:1536,height:1536},{path:n.p+"img/07db796-2160.webp",width:2160,height:2160},{path:n.p+"img/1ab22ac-2400.webp",width:2400,height:2400}],src:n.p+"img/00b4f63-480.webp",toString:function(){return n.p+"img/00b4f63-480.webp"},placeholder:"data:image/webp;base64,UklGRgwDAABXRUJQVlA4IAADAACwDwCdASooACgAPlEij0UjoiEVXVSsOAUEoAnTKEjDeu8nnc/44OHtz9xnvNMbJ8GfG36sUAu0fCLv1l8/efN/uKchX0F/T/AeIEC4jOs4yzY/wVuLDijeySwvQOUXUm70d/+ARvaPebEqrGWD31p1EUS2Z2vT2mRN2HiC+XWlSbV6YOrkYAD+uEBfLnRUlyLJf2jEbfUWct+DMd17W+Ciotu8TjivYH1boH2G0P4yNk1jNLKWY06n89126h7jqzgQLNgDmykqXQ2f9YNBkvBAUHIwpm/BD/yJyRFWsD776rYHRhTqQ/89lOs0E7p8BWScRl7q87O3Qm7gTDK8vkQKFNPR4XRuk0Xl2LXUzVe47Z+9dH2fwgc+INq4hDOcX52ZVNSSG/lFz0wsSmWnEFO6DVwWryZue0iQC6XBD7dcCKB2mR4xreZj2UhRNG5Dl8UriKh9h5rg3UpdgwjxZXrkMqsua5F/pyOXdSH1hROLBadx2rSy2Pk4uyvEIPv+GcCZ2+/2QYVUW/KfFP8uM/a00i5mkd+hdoDMuzLppTdGyPCiE+MvwUnfrS2oYQC00XFgck9XfX97/m79ySZw0duQerF5qLZwKrOj9ruMWgnY/JcmRewnIe73kPgzRhaCTrqI2aUfs8DhbMAfjbpK5Skz7IA8DljexmTg9D29abIptH+xAN56bM9s8CyTNLpDVG6QyfMySzZLIQIL46OTvhY2e+8reBtUpHf2QKLmITepLjyBLhUV53Qfec/VSx+a/QnLp+6p7ysrYIJIyUGggbJKb8dd1rV5nz+qAlVSEc8IZFWwKzX6vIAeh7aomJIm/OskcO5ztvQFpjDS///x2GZ7oHQE8Wg4kEP8P8xFR6qUeTJurb77uWVgjwURbwqv62JTftISU+lLC1acsMB2QGCq4lgbjgcYU4k+GuVeuVT3Zo+9oHMmZ67TlwjctTLFSeGQXOMYCyRFxFA+A8R/L1jVzUdNaP6bIyedGsgl6WVLpxQKjnrTFf2iHS4nLqyAAAA=",width:480,height:480}},280:function(e,t,n){e.exports={srcSet:n.p+"img/de71c67-480.webp 480w,"+n.p+"img/f902958-768.webp 768w,"+n.p+"img/8ff4429-960.webp 960w,"+n.p+"img/6ad4c4c-1080.webp 1080w,"+n.p+"img/803a7ac-1200.webp 1200w,"+n.p+"img/62dfd4d-1536.webp 1536w,"+n.p+"img/a6b7c63-2160.webp 2160w,"+n.p+"img/84a0d62-2400.webp 2400w",images:[{path:n.p+"img/de71c67-480.webp",width:480,height:480},{path:n.p+"img/f902958-768.webp",width:768,height:768},{path:n.p+"img/8ff4429-960.webp",width:960,height:960},{path:n.p+"img/6ad4c4c-1080.webp",width:1080,height:1080},{path:n.p+"img/803a7ac-1200.webp",width:1200,height:1200},{path:n.p+"img/62dfd4d-1536.webp",width:1536,height:1536},{path:n.p+"img/a6b7c63-2160.webp",width:2160,height:2160},{path:n.p+"img/84a0d62-2400.webp",width:2400,height:2400}],src:n.p+"img/de71c67-480.webp",toString:function(){return n.p+"img/de71c67-480.webp"},placeholder:"data:image/webp;base64,UklGRlYDAABXRUJQVlA4IEoDAACwDgCdASooACgAPk0ejEQioaEXFZgoBMSgCdMr2CzIisPUHirQttuBzvmmgR7j9V8HfA4ujtBTRLp70y7+2MD0Xc/70/7BQptAQLZ1XJxUwGWRlJw06txdtGSqRdPAepfu+fxYRtmup/ltviiGrMC88eAV1kxc7iPbne1iSPAA/vnr/aIPkPKLE31d/7/1E9ReBSo7X61pmylYg3rFmrxyp5R9uHfEbg523EdMC26PTUUZ6v6Cp4vsildm+L0z2xW6VUHQC0N0pF0c6LecVIJcFyS6QQuPx6byK0o/3f7JwH/zu51T37OGwkSY7E43akTahQ2iFro///FEZi3JQ8vThoKfclVNYrExTl++T1di339lnczDa9ew9W+pCuKKVOmuUP3gUncQlkUh+H1cIXnGN6dBBexvzwiKj5HFjGeckZD+7kVQWUXtUTVdEu0hiaTWbraaZgromhnFM4OX/MlgZNv8d2Jp64gDxYK4ZaXT92AL0PsVm1JmAeN8C6eoOq1exAGV5WbdDgjiDPAxGagKvXChGUsok8tTdpN/KE/CZzIUrkVTfz9S0808C9dJgjieBXi6e00ZCqp1mtDXm1Io4rRsJBvU0mG/yCmCzSRkXB1ZukOVRrTYS+EXNR2bTkrli0aUGmNux2yBMvpz+S9C+82Oy8pVqfYgDm43oLYDPZgp3vCSytyclXoTXcI2XaFhh6DqluAV+87OVLR/jzuvJaz7D8p5PPxk16Z9/mrjVRuqQV3RwzknahqwcwRS5TTjQcn6+n+th69SgQaQBlcD4/naiV0N3g1/GrB8u+nUJDYimICNgcTdyEDdK5j4TdO/LGLvgUsXhu/X/zpyf2Nu+Q7h9Y5hWa1LzZf64gwrbx3AknAIoO+S3tnPhNg6Gu/k5kWWtfzdampTk8XGKP34/KfNwclwD9sEHp7p2rgT1wxGBR68T75aE1usZf1sH8kzJMLIMPhlTWptnIxU3k8fPUnD6oWawrO8xN6fZZuQ30uukxLmr18lMJMSIUPA43GVTzkBYR9SSP5hE0QQIrgoXZKSntVduVJR735D/ZuahZYvEH+zdkoq3//BExRZrcnetF6gX4WQG6y57IB68pWpZWMGHjL8RAAAAA==",width:480,height:480}},282:function(e,t,n){e.exports={srcSet:n.p+"img/59e11e9-480.jpg 480w,"+n.p+"img/6a9a41f-768.jpg 768w,"+n.p+"img/79b55d2-960.jpg 960w,"+n.p+"img/0ee1ab8-1080.jpg 1080w,"+n.p+"img/de250d4-1200.jpg 1200w,"+n.p+"img/ff88e34-1536.jpg 1536w,"+n.p+"img/4ed6f1a-2160.jpg 2160w,"+n.p+"img/b17eca7-2400.jpg 2400w",images:[{path:n.p+"img/59e11e9-480.jpg",width:480,height:480},{path:n.p+"img/6a9a41f-768.jpg",width:768,height:768},{path:n.p+"img/79b55d2-960.jpg",width:960,height:960},{path:n.p+"img/0ee1ab8-1080.jpg",width:1080,height:1080},{path:n.p+"img/de250d4-1200.jpg",width:1200,height:1200},{path:n.p+"img/ff88e34-1536.jpg",width:1536,height:1536},{path:n.p+"img/4ed6f1a-2160.jpg",width:2160,height:2160},{path:n.p+"img/b17eca7-2400.jpg",width:2400,height:2400}],src:n.p+"img/59e11e9-480.jpg",toString:function(){return n.p+"img/59e11e9-480.jpg"},placeholder:"data:image/jpeg;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAoACgDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAYHBQP/xAAuEAABAwMDAwMDAwUAAAAAAAABAgMEAAURBhIhBzFBFFFhEyIyUnGRgYKhsdH/xAAYAQADAQEAAAAAAAAAAAAAAAADBAUGAf/EACERAAICAgIBBQAAAAAAAAAAAAECAAMREgQhMSIjMkHB/9oADAMBAAIRAxEAPwDYsWpmWLXGYDyUONuFK8/pJJGeR8/xU/6g3y+wdSsps0VQS/23pIbJ8kntgjnI9qVtH6nusu4NSG4yHIjK8ub0BQ3Ywnj+tPl4jTry/CZ9IpRlqBC9yU7fYgEjjsDjtmsgoIIRxmaggYLKYuPdVX4rX0mMtyB9u9OCnOcEcitrobLvky/PS7up2W/JQHG5DrhV9h5CU5/EDPb3zSbdtF3pLdnkPQkNTnUha46zhxlxW77FJPjKQf7jVS0nYb3pyWhqRFaTFVKLTbi1HKmdqPprHfAJJGT7fNMCiqpfb8wJuZz6upTI0jdMf3pWCnCfv4Oe5z/iila1zJJukyY/KDrb+1AHlKkZHf5GP4oqZeSbDmFAGJHun2krk9o5akShDS8+VrcT+QAA4BPA/fxTXFvMa3SDEMSE0420hpTc99RbUpCiUrS4kKJScnII5wMGnnp1CYXZUxCkYQSOfet3UWiYV/tq2gw2zOQD9J9ttCVcj9v90zRyH3LznIrUjRvEg+l9Xv31FrXcW1rkx3EtOqPBWlJO1eO+NuAM+BVEZ1Pd7xLuLbUJRaVO9O2GYpJdYRtUkB0K/AqTggJ3cEZHeusTpSzHCLnNLgu29MdTbbZ2OMk43EJHCk989uMcd6rGktHxNOyGvQLeMGOxsjMuk7kqJypR9ySSaZpNocsOgYHkGgVj7I/JO9S2hdssjl7di+llOvIMlKEbElRHfb4PgminjqkylWibsFZViOpfzkc0UpfXl8wlL5WTrp5dW/VzY7agENvbQfn3qrWmQjIUBuzyST3PtRRQ6ThuoXkAHMYobiVJBWlOR5xXRSw2kpJ48H/tFFWFJ1kNlG2JP+q1yab03cWQsJCmClSu+M8CiiikvmSTKiDVQBP/2Q==",width:480,height:480}},283:function(e,t,n){e.exports={srcSet:n.p+"img/c8f1ba0-480.jpg 480w,"+n.p+"img/37e590c-768.jpg 768w,"+n.p+"img/59faa2f-960.jpg 960w,"+n.p+"img/e3185aa-1080.jpg 1080w,"+n.p+"img/06e8966-1200.jpg 1200w,"+n.p+"img/7524a62-1536.jpg 1536w,"+n.p+"img/301685b-2160.jpg 2160w,"+n.p+"img/21b757b-2400.jpg 2400w",images:[{path:n.p+"img/c8f1ba0-480.jpg",width:480,height:480},{path:n.p+"img/37e590c-768.jpg",width:768,height:768},{path:n.p+"img/59faa2f-960.jpg",width:960,height:960},{path:n.p+"img/e3185aa-1080.jpg",width:1080,height:1080},{path:n.p+"img/06e8966-1200.jpg",width:1200,height:1200},{path:n.p+"img/7524a62-1536.jpg",width:1536,height:1536},{path:n.p+"img/301685b-2160.jpg",width:2160,height:2160},{path:n.p+"img/21b757b-2400.jpg",width:2400,height:2400}],src:n.p+"img/c8f1ba0-480.jpg",toString:function(){return n.p+"img/c8f1ba0-480.jpg"},placeholder:"data:image/jpeg;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAoACgDASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAAcEBggFAf/EAC8QAAEDAwMCBQMDBQAAAAAAAAECAwQABREGEiExQRMiUWFxBxWBCDKxFCORocH/xAAZAQEAAwEBAAAAAAAAAAAAAAAEAgMFAAH/xAAlEQACAQMCBQUAAAAAAAAAAAABAgADERITMQQFISJBscHR4fH/2gAMAwEAAhEDEQA/AFAwJSpaHMhTflKEg8lW3pWzdL6XgWbTzjkuwpvFxmtxX3ojq0BC3WkICSCrhO3A5PHHvWYvp9o+Zf8AV0O1QENNrCvFK31EIQhBClEkcngY455rQOpHZ91c+2wHZtsuiJu6LJQpex1KOQvI42ncQUnpjvgVkUwoGZEeST2A7xafqpEy2/VJNwPiliRDbcjrUnyJKRgthQ68jPr5vzSvlTnlWFmZISXZMpxSvN0SkenrzmmR9dtJXmFqqM/ci5MlToiVuPqXuKikqTt8uE4Ax0APPNUC/wBumvw40VqI8UNtDaQnHOSf8UesqavQWlyZKN7yFCuRlSURXlqbKBlpfHTHIz/sfFFew7Rc24zbkpltghe5QUrzKH/aKlTRRe09yJj10YIen9QfepDZS1DYfcXsbGcBsg4ppaOuFjvjUS7W11R/qWgtCXCAQPjv36Up4FwQ/do4DIQh99LQbdVt8VSgdyRnjvjPvXZ0zKdt13hJaimM3421UdHXaSVDAOMEk5P5ruXudPFh5+IVwSSY6daaXhaq08m3vENPIHiRnsZ8NeP4PcVna82R6HdXIkjDb8VfhrSoE+Yd/juD71oydNfdkxzDnsxUNAB9tSAvcSP2nnIxkdPWqf8AVixPPRI1/CEbwgNTS1064Ssfx7cVbzGhmuoo6j0+pGlUK9p8xKJsx3Hyxl7uQAjv8miuytRcecJby2TnfyAvHQe/HOaKw8zE3Mj6ITFka0guu7EtRgpYCCccJODg8Ajjn4qwaZlWW53VFuVIeVLZnpVGc37nXEAgYKu/Tv60UU7hahQIo2JPtDNteT9f3yRbtRRGLa44GYhYIbdJK1NlPRR5Jz1/Aq3XjXUBVmVCfgOzGn2EqJQjcnaccHHTnuemKKKa1dwzDx+yeANpQbpP025EcfVBcjyWQA2psn+6rBH7TxkjuMUUUVi1KhJ2lhn/2Q==",width:480,height:480}},305:function(e,t,n){var content=n(319);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(27).default)("9e118aee",content,!0,{sourceMap:!1})},306:function(e,t,n){var content=n(326);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(27).default)("66d12e0e",content,!0,{sourceMap:!1})},318:function(e,t,n){"use strict";n(305)},319:function(e,t,n){var o=n(26)(!1);o.push([e.i,'.component-stage[data-v-43bebef8]{position:relative;height:100vh;max-height:100%;margin:0;overflow:hidden}.component-stage .claim[data-v-43bebef8]{display:block;font-size:25px;line-height:50px;text-transform:none}.component-stage .headline[data-v-43bebef8]{display:block;font-size:30px;line-height:60px}@media (min-width:768px){.component-stage .headline[data-v-43bebef8]{font-size:40px;line-height:80px}}.component-stage[data-v-43bebef8] picture:before{display:block;padding-top:56.25%;content:""}.component-stage[data-v-43bebef8] picture img{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.component-stage h1[data-v-43bebef8]{position:absolute;bottom:0;left:0;width:100%;padding:20px 0;margin:0;color:#fff;text-align:center;background:rgba(0,0,0,.4)}@media (min-width:768px){.component-stage h1[data-v-43bebef8]{position:absolute;top:50px;right:0;bottom:auto;left:auto;width:400px}}',""]),e.exports=o},320:function(e,t,n){var o={src:n.p+"img/43b68f6.jpg",preSrc:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAoACgMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APsyw/YIi+Mv/BPDQfhX8NPiiyat+z5rh8bap4ct/D9gLzxNqPiLSPiJe+JPEMGt6c39oX89lb68f7HWa9isZdG8KWul3Vpdavb6M9x/PNaEs04MjnGCwuHrSw9PCZlicDUw3LipckZVcc41o0Jc0VhoQ5U43nToyp+1cnQpL9Kw+ZLDY+2IjXh7SNejQxKrPkp04XhRg6LeknXbqNpR5ZT9oouLqVH+XMP7B3iGOGKM/EiSQxxohka2SVpCihS7SvveRmxuLs7M5O5mYkk/mi4sy+y/4TMPsvt0V+HsVb0srdj2/rb61at+vuz36/bP2n+DWu65ongrwheaLrOq6ReL4js4lutL1G8sLkRv8ANdunjE9pNFKEe5u7q4ZA21p7m4mIMk0jN91wxiMRTyLCKnXrU1GtSpx5Ks4ctN8PYebpx5ZK0HOcpOK93mlKVrts+UowjUnWVSMZpUqLSmlJJ/WZq6TT1tGK9IxXRHCS3t5JJJJJd3Mkkju7u88rO7sxZndmcszMxJZiSSSSTmvzCbcpSlJttybbbu222223q23q29z7FUqVl+6p7L7Ef8j//Z",palette:["#64512d","#d9cebc","#a8a55c","#e5cda7","#605a09","#944414"]};e.exports=o.preSrc,e.exports=Object.assign(e.exports,o)},321:function(e,t,n){e.exports=(()=>{const e=n(322);return{sources:[{srcset:n(323).srcSet,type:"image/webp"},{srcset:e.srcSet,type:"image/jpeg"}],placeholder:(({src:e,preview:t})=>({url:e,base64:t}))(n(324)),width:e.width,height:e.height}})()},322:function(e,t,n){e.exports={srcSet:n.p+"img/64eb63e-480.jpg 480w,"+n.p+"img/f9679c5-768.jpg 768w,"+n.p+"img/b0985de-960.jpg 960w,"+n.p+"img/bdd399c-1080.jpg 1080w,"+n.p+"img/d7bc97a-1200.jpg 1200w,"+n.p+"img/f3aa693-1280.jpg 1280w",images:[{path:n.p+"img/64eb63e-480.jpg",width:480,height:270},{path:n.p+"img/f9679c5-768.jpg",width:768,height:432},{path:n.p+"img/b0985de-960.jpg",width:960,height:540},{path:n.p+"img/bdd399c-1080.jpg",width:1080,height:608},{path:n.p+"img/d7bc97a-1200.jpg",width:1200,height:675},{path:n.p+"img/f3aa693-1280.jpg",width:1280,height:720}],src:n.p+"img/64eb63e-480.jpg",toString:function(){return n.p+"img/64eb63e-480.jpg"},width:480,height:270}},323:function(e,t,n){e.exports={srcSet:n.p+"img/42d8b8a-480.webp 480w,"+n.p+"img/299a8a3-768.webp 768w,"+n.p+"img/c605cb6-960.webp 960w,"+n.p+"img/4ca6a50-1080.webp 1080w,"+n.p+"img/0267d4e-1200.webp 1200w,"+n.p+"img/d2e6913-1280.webp 1280w",images:[{path:n.p+"img/42d8b8a-480.webp",width:480,height:270},{path:n.p+"img/299a8a3-768.webp",width:768,height:432},{path:n.p+"img/c605cb6-960.webp",width:960,height:540},{path:n.p+"img/4ca6a50-1080.webp",width:1080,height:608},{path:n.p+"img/0267d4e-1200.webp",width:1200,height:675},{path:n.p+"img/d2e6913-1280.webp",width:1280,height:720}],src:n.p+"img/42d8b8a-480.webp",toString:function(){return n.p+"img/42d8b8a-480.webp"},width:480,height:270}},324:function(e,t,n){var o={src:n.p+"img/257cf22.jpg",preview:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1280 720'%3E%3Cpath fill='%23746d47' d='M0 0h1280v720H0z'/%3E%3Cg fill-opacity='.5'%3E%3Cpath d='M112.5 797.5l1245-115-1300-435z'/%3E%3Cpath fill='%23ccc3a8' d='M1337.5 497.5l-1415-390 1350-185z'/%3E%3Cpath fill='%23ff0' d='M-77.5 557.5l180 240-80-815z'/%3E%3Cpath fill='%230f0514' d='M477.5 797.5l580-675 100 590z'/%3E%3Cpath fill='%23ff0' d='M1357.5 377.5l-130-440 20 860z'/%3E%3Cpath fill='%23948800' d='M777.5 662.5h-635l-15-200z'/%3E%3Cpath fill='%23ffecc8' d='M1187.5 492.5l80-510-195 435z'/%3E%3Cpath fill='%23ff0' d='M72.5 797.5l-40-875-110 430z'/%3E%3Cpath fill='%239ca2b7' d='M342.5-77.5l605 40 5 525z'/%3E%3Cpath fill='%23c1af77' d='M132.5 312.5l415 20-365-410z'/%3E%3Cpath fill='%233f4157' d='M642.5 197.5l620 350-970-155z'/%3E%3Cpath fill='%231b0f04' d='M1237.5 497.5l5 300-945-70z'/%3E%3Cpath fill='%23ff0' d='M1237.5 682.5l120-400-110-360z'/%3E%3Cpath fill='%23131721' d='M657.5 507.5l-615-240v190z'/%3E%3Cpath fill='%23ff0' d='M87.5 657.5l-150 140 130-405z'/%3E%3Cpath fill='%234a342f' d='M987.5 167.5l10 560 140-530z'/%3E%3Cpath fill='%23fff' d='M752.5 12.5l30 80 185-30z'/%3E%3Cpath fill='%23f8e900' d='M622.5 577.5v85l-105-80z'/%3E%3Cpath fill='%23a89300' d='M307.5 477.5l-210 70h450z'/%3E%3Cpath d='M377.5 612.5l-240-55 245-30z'/%3E%3C/g%3E%3C/svg%3E",dimensions:{height:720,width:1280,type:"jpg"}};e.exports=o.preview,e.exports=Object.assign(e.exports,o)},325:function(e,t,n){"use strict";n(306)},326:function(e,t,n){var o=n(26)(!1);o.push([e.i,".page-full-example-with-components[data-v-2d4c9496]{font-size:1.25em}.page-full-example-with-components>*[data-v-2d4c9496]{margin:25px 0}.page-full-example-with-components[data-v-2d4c9496]>:first-child{margin-top:0}.page-full-example-with-components[data-v-2d4c9496]>:last-child{margin-bottom:0}",""]),e.exports=o},351:function(e,t,n){"use strict";n.r(t);var o={components:{LazyPicture:n(276).a},props:{picture:{type:Object,default:function(){return{}}},headline:{type:String,default:function(){return"Headline"}},claim:{type:String,default:function(){return"Claim"}}}},r=(n(318),n(8)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"component-stage"},[n("lazy-picture",e._b({},"lazy-picture",e.picture,!1)),e._v(" "),n("h1",{directives:[{name:"font",rawName:"v-font",value:[e.$fonts.getFont("Montserrat Alternates",700,"normal",{selector:".headline"}),e.$fonts.getFont("Comic Neue",300,"italic",{selector:".claim"})],expression:"[\n      $fonts.getFont('Montserrat Alternates', 700, 'normal', {selector: '.headline'}),\n      $fonts.getFont('Comic Neue', 300, 'italic', {selector: '.claim'})\n    ]"}]},[n("span",{staticClass:"headline"},[e._v(e._s(e.headline))]),e._v(" "),n("span",{staticClass:"claim"},[e._v(e._s(e.claim))])])],1)}),[],!1,null,"43bebef8",null);t.default=component.exports},359:function(e,t,n){"use strict";n.r(t);n(7);var o={speedkitComponents:{ComponentStage:function(){return Promise.resolve().then(n.bind(null,351))},ComponentLazyYoutube:function(){return n.e(34).then(n.bind(null,303))},ComponentTextA:function(){return n.e(1).then(n.bind(null,379))},ComponentTextImage:function(){return n.e(36).then(n.bind(null,380))},ComponentTextB:function(){return n.e(37).then(n.bind(null,381))}},asyncData:function(){var e,t,o,r=n(279),c=n(282),l=n(277),h=n(280),d=n(283),A=n(320);return{contentA:"<p>This is a basic test with single font variant.</p>",stage:{critical:!0,headline:"Stage Headline",claim:"Stage Claim",picture:{sources:[{srcset:r.srcSet,type:"image/webp"},{srcset:c.srcSet,type:"image/jpeg"}],placeholder:(o=l,{url:o.src,base64:o.preview}),width:c.width,height:c.height,alt:"Alt Text",title:"Title Text",caption:null}},youtubePlayer:{poster:Object.assign({alt:"Alt Text",title:"Title Text",caption:null},n(321))},videoPlayer:{poster:{sources:[{srcset:r.srcSet,type:"image/webp"},{srcset:c.srcSet,type:"image/jpeg"}],placeholder:(t=l,{url:t.src,base64:t.preview}),width:c.width,height:c.height,alt:"Alt Text",title:"Title Text",caption:null}},textA:{text:"<h2>Text Headline</h2><p>Aliqua odit <b>anim vehicula</b> varius eget feugiat beatae. <i><b>Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet</b></i>, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>"},imageTextA:{text:"<h2>Text Headline</h2><p>Aliqua odit anim vehicula varius eget feugiat beatae. Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>",picture:{sources:[{srcset:h.srcSet,type:"image/webp"},{srcset:d.srcSet,type:"image/jpeg"}],placeholder:(e=A,{url:e.src,base64:e.preview}),width:d.width,height:d.height,alt:"Alt Text",title:"Title Text",caption:null}},textB:{text:"<h2>Text Headline</h2><p>Aliqua odit <b>anim vehicula</b> varius eget feugiat beatae. <i><b>Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet</b></i>, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>"}}},methods:{onLoadFont:function(e){console.log("page: font loaded",e)}}},r=(n(325),n(8)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-full-example-with-components"},[n("component-stage",e._b({on:{"load:font":e.onLoadFont}},"component-stage",e.stage,!1)),e._v(" "),n("ComponentLazyYoutube",e._b({attrs:{id:String("cLKvbhfVBUU")}},"ComponentLazyYoutube",e.youtubePlayer,!1)),e._v(" "),n("component-text-a",e._b({on:{"load:font":e.onLoadFont}},"component-text-a",e.textA,!1)),e._v(" "),n("component-text-image",e._b({},"component-text-image",e.imageTextA,!1)),e._v(" "),n("component-text-b",e._b({},"component-text-b",e.textB,!1))],1)}),[],!1,null,"2d4c9496",null);t.default=component.exports}}]);