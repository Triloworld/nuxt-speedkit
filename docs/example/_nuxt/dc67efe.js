(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{262:function(t,e,n){var content=n(268);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("0ca7e28f",content,!0,{sourceMap:!1})},263:function(t,e,n){var content=n(270);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("1c0f1833",content,!0,{sourceMap:!1})},264:function(t,e,n){"use strict";(function(t){n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return l}));var o;n(7);function r(){return o||(o=new Promise((function(e){var img=new t.Image;img.onload=function(){return e(!0)},img.onerror=function(){return e(!1)},img.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"}))),o}function l(element,e){var n={};return t.document&&(n=t.document.createElement(element)),e in n}}).call(this,n(14))},265:function(t,e,n){var content=n(272);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("dba19a4e",content,!0,{sourceMap:!1})},266:function(t,e,n){"use strict";var o=n(13),r=n(4),l=n(57),c=n(16),h=n(12),d=n(38),m=n(117),f=n(79),A=n(5),w=n(56),v=n(116).f,x=n(45).f,E=n(19).f,C=n(189).trim,j="Number",M=r.Number,S=M.prototype,y=d(w(S))==j,k=function(t){var e,n,o,r,l,c,h,code,d=f(t,!1);if("string"==typeof d&&d.length>2)if(43===(e=(d=C(d)).charCodeAt(0))||45===e){if(88===(n=d.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+d}for(c=(l=d.slice(2)).length,h=0;h<c;h++)if((code=l.charCodeAt(h))<48||code>r)return NaN;return parseInt(l,o)}return+d};if(l(j,!M(" 0o1")||!M("0b1")||M("+0x1"))){for(var Q,H=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof H&&(y?A((function(){S.valueOf.call(n)})):d(n)!=j)?m(new M(k(e)),n,H):k(e)},z=o?v(M):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),B=0;z.length>B;B++)h(M,Q=z[B])&&!h(H,Q)&&E(H,Q,x(M,Q));H.prototype=S,S.constructor=H,c(r,j,H)}},267:function(t,e,n){"use strict";n(262)},268:function(t,e,n){var o=n(26)(!1);o.push([t.i,'.nuxt-speedkit__image-container[data-v-e23a632a]{position:relative;width:100%;height:100%;margin:0}.nuxt-speedkit__image-container>span.loading[data-v-e23a632a]{position:absolute;top:50%;left:50%;display:block;width:10%;transform:translate(-50%,-50%)}.nuxt-speedkit__image-container>span.loading[data-v-e23a632a]:before{box-sizing:border-box;display:block;padding-top:100%;content:""}.nuxt-speedkit__image-container>span.loading[data-v-e23a632a]:after{position:absolute;top:0;right:0;bottom:0;left:0;box-sizing:border-box;display:block;content:"";border:3px solid #ccc;border-top-color:#07d;border-radius:50%;-webkit-animation-name:spinner;animation-name:spinner;-webkit-animation-duration:.6s;animation-duration:.6s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-delay:.35s;animation-delay:.35s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;will-change:transform}',""]),t.exports=o},269:function(t,e,n){"use strict";n(263)},270:function(t,e,n){var o=n(26)(!1);o.push([t.i,".nuxt-speedkit__noscript[data-v-fc27cbec]{position:absolute;top:0;left:0;width:100%;height:100%}",""]),t.exports=o},271:function(t,e,n){"use strict";n(265)},272:function(t,e,n){var o=n(26)(!1);o.push([t.i,".nuxt-speedkit__custom-image[data-v-c1feaf18]{width:100%;height:100%;vertical-align:middle;-o-object-fit:cover;object-fit:cover}",""]),t.exports=o},273:function(t,e,n){"use strict";n(80),n(30);var o=n(3),r=n(82),l=n(264),c=(n(7),n(18),n(23),n(188),n(17),n(81),n(118)),h=function(){function t(){this.map=new Map}return t.prototype.getEntry=function(t){return this.map.has(t)||this.map.set(t,new c.a),this.map.get(t)},t}(),d=n(58),m=new h;function f(t,e,n){var o=Object(d.a)(t.srcset),r=m.getEntry(o);return r.promise.then((function(){return e()})),Object(l.a)("link","imageSrcset")?{link:[A(t,o,r.resolve,n)]}:function(t,e,n){var img=new Image;img.onload=e,img.crossorigin=n,img.srcset=t.srcset}(t,r.resolve,n)}function A(t,e,n,o){return{hid:e,rel:"preload",as:"image",crossorigin:o,callback:n,imageSrcset:t.srcset}}var w={props:{preload:{type:Array,default:function(){return null}},crossorigin:{type:String,default:function(){return"anonymous"}}},fetchOnServer:!1,data:function(){return{visible:this.isCritical,preloaded:!1,webpSupport:!1}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=!1,e.t0){e.next=5;break}return e.next=4,Object(l.b)();case 4:e.t0=e.sent;case 5:t.webpSupport=e.t0;case 6:case"end":return e.stop()}}),e)})))()},head:function(){var t,e=this;return this.preload&&this.visible&&this.preload&&this.preload.length?f((t=this.preload,this.webpSupport&&t.find((function(source){return"image/webp"===source.type}))||t.find((function(source){return"image/webp"!==source.type}))),(function(){return e.onPreload()}),this.crossorigin):{}},mounted:function(){var t=this;Object(r.a)(this.$el,(function(){t.visible=!0}))},destroyed:function(){Object(r.b)(this.$el)},methods:{onLoad:function(t){this.preloaded&&this.$emit("load",t.target)},onPreload:function(){this.preloaded=!0,this.$emit("preload")}}},v=(n(271),n(8)),component=Object(v.a)(w,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",{staticClass:"nuxt-speedkit__custom-image",attrs:{loading:"lazy",crossorigin:t.crossorigin},on:{load:t.onLoad}})}),[],!1,null,"c1feaf18",null);e.a=component.exports},274:function(t,e,n){"use strict";var o={props:{loading:{type:Boolean,default:function(){return!1}}},computed:{hasSlot:function(){return this.$slots.caption}}},r=(n(267),n(8)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("figure",{staticClass:"nuxt-speedkit__image-container"},[t._t("default"),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"loading"}),t._v(" "),t.hasSlot?n("figcaption",[t._t("caption")],2):t._e()],2)}),[],!1,null,"e23a632a",null);e.a=component.exports},275:function(t,e,n){"use strict";n(269);var o=n(8),component=Object(o.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("noscript",{staticClass:"nuxt-speedkit__noscript",inlineTemplate:{render:function(){var t=this,e=t.$createElement;t._self._c;return t._t("default")},staticRenderFns:[]}})}),[],!1,null,"fc27cbec",null);e.a=component.exports},276:function(t,e,n){"use strict";n(266);var o=n(274),r=n(275),l=n(273),c={components:{ImageContainer:o.a,CustomNoScript:r.a,CustomImage:l.a},props:{sources:{type:Array,default:function(){return[]}},placeholder:{type:Object,default:function(){return{}}},alt:{type:String,default:function(){return""}},title:{type:String,default:function(){return""}},width:{type:Number,default:function(){return null}},height:{type:Number,default:function(){return null}},crossorigin:{type:String,default:function(){return"anonymous"}}},data:function(){return{preloadedSources:this.noScript&&this.sources||[],loading:!1,webpSupport:!1}},computed:{hasSlot:function(){return this.$slots.caption}},mounted:function(){this.loading=!0},methods:{onLoad:function(t){this.loading=!1,this.$emit("load")},onPreload:function(){this.preloadedSources=this.sources}}},h=n(8),component=Object(h.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("image-container",{staticClass:"nuxt-speedkit__lazy-picture",attrs:{loading:t.loading},scopedSlots:t._u([{key:"default",fn:function(){return[n("picture",[t._l(t.preloadedSources,(function(source,e){return n("source",t._b({key:e},"source",source,!1))})),t._v(" "),n("custom-image",t._b({on:{load:t.onLoad,preload:t.onPreload}},"custom-image",{src:t.placeholder.base64,preload:t.sources,width:t.width,height:t.height,alt:t.alt,title:t.title,crossorigin:t.crossorigin},!1))],2),t._v(" "),n("custom-no-script",[n("picture",[t._l(t.sources,(function(source,e){return n("source",t._b({key:e},"source",source,!1))})),t._v(" "),n("custom-image",t._b({on:{load:t.onLoad,preload:t.onPreload}},"custom-image",{src:t.placeholder.url,width:t.width,height:t.height,alt:t.alt,title:t.title,crossorigin:t.crossorigin},!1))],2)])]},proxy:!0},{key:"caption",fn:function(){return[t._t("caption")]},proxy:!0}],null,!0)})}),[],!1,null,null,null);e.a=component.exports},277:function(t,e,n){var o={src:n.p+"img/d05258f.jpg",preview:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2400 2400'%3E%3Cpath fill='%23ab8a5c' d='M0 0h2400v2400H0z'/%3E%3Cg fill-opacity='.5'%3E%3Cpath fill='%23fffff3' d='M2264 2545.3l18.8-1331.2L192.2 2245.3z'/%3E%3Cpath fill='%23461e00' d='M-145.3 717.2l1275 1087.5 740.6-1950z'/%3E%3Cpath fill='%23300' d='M342.2 736l-487.5 1603V-89z'/%3E%3Cpath fill='%23fae0a7' d='M398.4 2545.3L201.6 1382.8l2128 768.8z'/%3E%3Cpath fill='%23371a05' d='M1907.8 782.8L501.6-145.3l440.6 928.1z'/%3E%3Cpath fill='%23b6ae91' d='M1073.4 773.4l-721.8 440.7 1978-140.7z'/%3E%3Cpath fill='%23651f00' d='M820.3 1195.3l543.8 534.4 365.6-450z'/%3E%3Cpath fill='%23f1c789' d='M2545.3 979.7L1682.8 42.2l693.8-187.5z'/%3E%3Cpath fill='%23230c00' d='M1682.8 23.4l-356.2 1003.2L1139 370.3z'/%3E%3Cpath fill='%23b87b31' d='M-145.3 1992.2L764-145.3 389 2545.3z'/%3E%3Cpath fill='%23efebc6' d='M2067.2 2348.4l140.6-1265.6L811 2545.3z'/%3E%3Cpath fill='%23522900' d='M539 1157.8L220.4 370.3l-365.6 1012.5z'/%3E%3Cpath fill='%23d1912d' d='M1973.4-145.3l-881.2 431.2-646.9-431.2z'/%3E%3Cpath fill='%23e1bb7f' d='M164 1561l206.3 984.3 853.1-871.9z'/%3E%3Cpath fill='%23b47f3d' d='M-145.3 595.3L1026.6 736l-1172-853z'/%3E%3Cpath fill='%2384510d' d='M2217.2 1026.6l328.1 215.6-131.2 1003.1z'/%3E%3Cpath d='M1007.8 1007.8l121.9 318.8-187.5 140.6z'/%3E%3Cpath fill='%23aa6c27' d='M1786 1579.7l-740.7-956.3 271.9 1050z'/%3E%3Cpath fill='%23f6d8ac' d='M1457.8 1326.6l131.3-365.7-112.5-365.6z'/%3E%3Cpath fill='%23210c00' d='M1542.2 1073.4l112.5 84.4-150 412.5z'/%3E%3C/g%3E%3C/svg%3E",dimensions:{height:2400,width:2400,type:"jpg"}};t.exports=o.preview,t.exports=Object.assign(t.exports,o)},279:function(t,e,n){t.exports={srcSet:n.p+"img/00b4f63-480.webp 480w,"+n.p+"img/93e2d7e-768.webp 768w,"+n.p+"img/a7d60c7-960.webp 960w,"+n.p+"img/3344f2d-1080.webp 1080w,"+n.p+"img/104d21d-1200.webp 1200w,"+n.p+"img/d7e5050-1536.webp 1536w,"+n.p+"img/07db796-2160.webp 2160w,"+n.p+"img/1ab22ac-2400.webp 2400w",images:[{path:n.p+"img/00b4f63-480.webp",width:480,height:480},{path:n.p+"img/93e2d7e-768.webp",width:768,height:768},{path:n.p+"img/a7d60c7-960.webp",width:960,height:960},{path:n.p+"img/3344f2d-1080.webp",width:1080,height:1080},{path:n.p+"img/104d21d-1200.webp",width:1200,height:1200},{path:n.p+"img/d7e5050-1536.webp",width:1536,height:1536},{path:n.p+"img/07db796-2160.webp",width:2160,height:2160},{path:n.p+"img/1ab22ac-2400.webp",width:2400,height:2400}],src:n.p+"img/00b4f63-480.webp",toString:function(){return n.p+"img/00b4f63-480.webp"},placeholder:"data:image/webp;base64,UklGRgwDAABXRUJQVlA4IAADAACwDwCdASooACgAPlEij0UjoiEVXVSsOAUEoAnTKEjDeu8nnc/44OHtz9xnvNMbJ8GfG36sUAu0fCLv1l8/efN/uKchX0F/T/AeIEC4jOs4yzY/wVuLDijeySwvQOUXUm70d/+ARvaPebEqrGWD31p1EUS2Z2vT2mRN2HiC+XWlSbV6YOrkYAD+uEBfLnRUlyLJf2jEbfUWct+DMd17W+Ciotu8TjivYH1boH2G0P4yNk1jNLKWY06n89126h7jqzgQLNgDmykqXQ2f9YNBkvBAUHIwpm/BD/yJyRFWsD776rYHRhTqQ/89lOs0E7p8BWScRl7q87O3Qm7gTDK8vkQKFNPR4XRuk0Xl2LXUzVe47Z+9dH2fwgc+INq4hDOcX52ZVNSSG/lFz0wsSmWnEFO6DVwWryZue0iQC6XBD7dcCKB2mR4xreZj2UhRNG5Dl8UriKh9h5rg3UpdgwjxZXrkMqsua5F/pyOXdSH1hROLBadx2rSy2Pk4uyvEIPv+GcCZ2+/2QYVUW/KfFP8uM/a00i5mkd+hdoDMuzLppTdGyPCiE+MvwUnfrS2oYQC00XFgck9XfX97/m79ySZw0duQerF5qLZwKrOj9ruMWgnY/JcmRewnIe73kPgzRhaCTrqI2aUfs8DhbMAfjbpK5Skz7IA8DljexmTg9D29abIptH+xAN56bM9s8CyTNLpDVG6QyfMySzZLIQIL46OTvhY2e+8reBtUpHf2QKLmITepLjyBLhUV53Qfec/VSx+a/QnLp+6p7ysrYIJIyUGggbJKb8dd1rV5nz+qAlVSEc8IZFWwKzX6vIAeh7aomJIm/OskcO5ztvQFpjDS///x2GZ7oHQE8Wg4kEP8P8xFR6qUeTJurb77uWVgjwURbwqv62JTftISU+lLC1acsMB2QGCq4lgbjgcYU4k+GuVeuVT3Zo+9oHMmZ67TlwjctTLFSeGQXOMYCyRFxFA+A8R/L1jVzUdNaP6bIyedGsgl6WVLpxQKjnrTFf2iHS4nLqyAAAA=",width:480,height:480}},280:function(t,e,n){t.exports={srcSet:n.p+"img/de71c67-480.webp 480w,"+n.p+"img/f902958-768.webp 768w,"+n.p+"img/8ff4429-960.webp 960w,"+n.p+"img/6ad4c4c-1080.webp 1080w,"+n.p+"img/803a7ac-1200.webp 1200w,"+n.p+"img/62dfd4d-1536.webp 1536w,"+n.p+"img/a6b7c63-2160.webp 2160w,"+n.p+"img/84a0d62-2400.webp 2400w",images:[{path:n.p+"img/de71c67-480.webp",width:480,height:480},{path:n.p+"img/f902958-768.webp",width:768,height:768},{path:n.p+"img/8ff4429-960.webp",width:960,height:960},{path:n.p+"img/6ad4c4c-1080.webp",width:1080,height:1080},{path:n.p+"img/803a7ac-1200.webp",width:1200,height:1200},{path:n.p+"img/62dfd4d-1536.webp",width:1536,height:1536},{path:n.p+"img/a6b7c63-2160.webp",width:2160,height:2160},{path:n.p+"img/84a0d62-2400.webp",width:2400,height:2400}],src:n.p+"img/de71c67-480.webp",toString:function(){return n.p+"img/de71c67-480.webp"},placeholder:"data:image/webp;base64,UklGRlYDAABXRUJQVlA4IEoDAACwDgCdASooACgAPk0ejEQioaEXFZgoBMSgCdMr2CzIisPUHirQttuBzvmmgR7j9V8HfA4ujtBTRLp70y7+2MD0Xc/70/7BQptAQLZ1XJxUwGWRlJw06txdtGSqRdPAepfu+fxYRtmup/ltviiGrMC88eAV1kxc7iPbne1iSPAA/vnr/aIPkPKLE31d/7/1E9ReBSo7X61pmylYg3rFmrxyp5R9uHfEbg523EdMC26PTUUZ6v6Cp4vsildm+L0z2xW6VUHQC0N0pF0c6LecVIJcFyS6QQuPx6byK0o/3f7JwH/zu51T37OGwkSY7E43akTahQ2iFro///FEZi3JQ8vThoKfclVNYrExTl++T1di339lnczDa9ew9W+pCuKKVOmuUP3gUncQlkUh+H1cIXnGN6dBBexvzwiKj5HFjGeckZD+7kVQWUXtUTVdEu0hiaTWbraaZgromhnFM4OX/MlgZNv8d2Jp64gDxYK4ZaXT92AL0PsVm1JmAeN8C6eoOq1exAGV5WbdDgjiDPAxGagKvXChGUsok8tTdpN/KE/CZzIUrkVTfz9S0808C9dJgjieBXi6e00ZCqp1mtDXm1Io4rRsJBvU0mG/yCmCzSRkXB1ZukOVRrTYS+EXNR2bTkrli0aUGmNux2yBMvpz+S9C+82Oy8pVqfYgDm43oLYDPZgp3vCSytyclXoTXcI2XaFhh6DqluAV+87OVLR/jzuvJaz7D8p5PPxk16Z9/mrjVRuqQV3RwzknahqwcwRS5TTjQcn6+n+th69SgQaQBlcD4/naiV0N3g1/GrB8u+nUJDYimICNgcTdyEDdK5j4TdO/LGLvgUsXhu/X/zpyf2Nu+Q7h9Y5hWa1LzZf64gwrbx3AknAIoO+S3tnPhNg6Gu/k5kWWtfzdampTk8XGKP34/KfNwclwD9sEHp7p2rgT1wxGBR68T75aE1usZf1sH8kzJMLIMPhlTWptnIxU3k8fPUnD6oWawrO8xN6fZZuQ30uukxLmr18lMJMSIUPA43GVTzkBYR9SSP5hE0QQIrgoXZKSntVduVJR735D/ZuahZYvEH+zdkoq3//BExRZrcnetF6gX4WQG6y57IB68pWpZWMGHjL8RAAAAA==",width:480,height:480}},281:function(t,e,n){var o={src:n.p+"img/e9da68e.jpg",preview:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2400 2400'%3E%3Cpath fill='%23a29673' d='M0 0h2400v2400H0z'/%3E%3Cg fill-opacity='.5'%3E%3Cpath fill='%23fff' d='M679.7 2273.4L501.6-117.2l1546.8 2287.5z'/%3E%3Cpath fill='%23321700' d='M2170.3 1523.4L1017.2 117.2l1528.1-262.5z'/%3E%3Cpath fill='%231d0700' d='M-145.3 32.8l281.2 1237.5L726.6-135.9z'/%3E%3Cpath fill='%23fff' d='M1101.6-32.8L510.9 229.7l600 440.6zm-806.3 1125l825-281.3 937.5 1547z'/%3E%3Cpath fill='%2348330c' d='M1167.2 951.6l1378.1-178.2-1396.9-918.7z'/%3E%3Cpath fill='%23aa9e47' d='M2123.4 2395.3l422-1565.6-1275 112.5z'/%3E%3Cpath fill='%237c522d' d='M1120.3 604.7L829.7 539 614 1157.8z'/%3E%3Cpath fill='%23958962' d='M914 2226.6L886 1439-145.4 904.7z'/%3E%3Cpath fill='%23f2fbff' d='M314 1364l290.7-225-56.3-909.3z'/%3E%3Cpath fill='%23665027' d='M1092.2 2245.3l206.2-290.6 150 271.9z'/%3E%3Cpath fill='%23f9f3e9' d='M1476.6 2301.6l909.3-140.7-965.6-450z'/%3E%3Cpath fill='%23838523' d='M342.2 754.7l28.1 1790.6-515.6-168.7z'/%3E%3Cpath fill='%23fffffd' d='M989 792.2l553.2 543.7-665.6 1209.4z'/%3E%3Cpath fill='%23ecf5ff' d='M445.3 1607.8l-131.2 937.5 215.6-281.2z'/%3E%3Cpath fill='%23fff' d='M914 567.2L661-126.6l543.7 581.3z'/%3E%3Cpath fill='%238e6f38' d='M1795.3 1251.6l-496.9-150L1711-23.4z'/%3E%3Cpath fill='%23000019' d='M717.2 867.2L548.4 707.8l84.4 168.8z'/%3E%3Cpath fill='%23493b12' d='M239-145.3l-384.3 1228.1L464 754.7z'/%3E%3Cpath fill='%23170000' d='M820.3 295.3l159.4 46.9-9.4-75z'/%3E%3C/g%3E%3C/svg%3E",dimensions:{height:2400,width:2400,type:"jpg"}};t.exports=o.preview,t.exports=Object.assign(t.exports,o)},282:function(t,e,n){t.exports={srcSet:n.p+"img/59e11e9-480.jpg 480w,"+n.p+"img/6a9a41f-768.jpg 768w,"+n.p+"img/79b55d2-960.jpg 960w,"+n.p+"img/0ee1ab8-1080.jpg 1080w,"+n.p+"img/de250d4-1200.jpg 1200w,"+n.p+"img/ff88e34-1536.jpg 1536w,"+n.p+"img/4ed6f1a-2160.jpg 2160w,"+n.p+"img/b17eca7-2400.jpg 2400w",images:[{path:n.p+"img/59e11e9-480.jpg",width:480,height:480},{path:n.p+"img/6a9a41f-768.jpg",width:768,height:768},{path:n.p+"img/79b55d2-960.jpg",width:960,height:960},{path:n.p+"img/0ee1ab8-1080.jpg",width:1080,height:1080},{path:n.p+"img/de250d4-1200.jpg",width:1200,height:1200},{path:n.p+"img/ff88e34-1536.jpg",width:1536,height:1536},{path:n.p+"img/4ed6f1a-2160.jpg",width:2160,height:2160},{path:n.p+"img/b17eca7-2400.jpg",width:2400,height:2400}],src:n.p+"img/59e11e9-480.jpg",toString:function(){return n.p+"img/59e11e9-480.jpg"},placeholder:"data:image/jpeg;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAoACgDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAYHBQP/xAAuEAABAwMDAwMDAwUAAAAAAAABAgMEAAURBhIhBzFBFFFhEyIyUnGRgYKhsdH/xAAYAQADAQEAAAAAAAAAAAAAAAADBAUGAf/EACERAAICAgIBBQAAAAAAAAAAAAECAAMREgQhMSIjMkHB/9oADAMBAAIRAxEAPwDYsWpmWLXGYDyUONuFK8/pJJGeR8/xU/6g3y+wdSsps0VQS/23pIbJ8kntgjnI9qVtH6nusu4NSG4yHIjK8ub0BQ3Ywnj+tPl4jTry/CZ9IpRlqBC9yU7fYgEjjsDjtmsgoIIRxmaggYLKYuPdVX4rX0mMtyB9u9OCnOcEcitrobLvky/PS7up2W/JQHG5DrhV9h5CU5/EDPb3zSbdtF3pLdnkPQkNTnUha46zhxlxW77FJPjKQf7jVS0nYb3pyWhqRFaTFVKLTbi1HKmdqPprHfAJJGT7fNMCiqpfb8wJuZz6upTI0jdMf3pWCnCfv4Oe5z/iila1zJJukyY/KDrb+1AHlKkZHf5GP4oqZeSbDmFAGJHun2krk9o5akShDS8+VrcT+QAA4BPA/fxTXFvMa3SDEMSE0420hpTc99RbUpCiUrS4kKJScnII5wMGnnp1CYXZUxCkYQSOfet3UWiYV/tq2gw2zOQD9J9ttCVcj9v90zRyH3LznIrUjRvEg+l9Xv31FrXcW1rkx3EtOqPBWlJO1eO+NuAM+BVEZ1Pd7xLuLbUJRaVO9O2GYpJdYRtUkB0K/AqTggJ3cEZHeusTpSzHCLnNLgu29MdTbbZ2OMk43EJHCk989uMcd6rGktHxNOyGvQLeMGOxsjMuk7kqJypR9ySSaZpNocsOgYHkGgVj7I/JO9S2hdssjl7di+llOvIMlKEbElRHfb4PgminjqkylWibsFZViOpfzkc0UpfXl8wlL5WTrp5dW/VzY7agENvbQfn3qrWmQjIUBuzyST3PtRRQ6ThuoXkAHMYobiVJBWlOR5xXRSw2kpJ48H/tFFWFJ1kNlG2JP+q1yab03cWQsJCmClSu+M8CiiikvmSTKiDVQBP/2Q==",width:480,height:480}},283:function(t,e,n){t.exports={srcSet:n.p+"img/c8f1ba0-480.jpg 480w,"+n.p+"img/37e590c-768.jpg 768w,"+n.p+"img/59faa2f-960.jpg 960w,"+n.p+"img/e3185aa-1080.jpg 1080w,"+n.p+"img/06e8966-1200.jpg 1200w,"+n.p+"img/7524a62-1536.jpg 1536w,"+n.p+"img/301685b-2160.jpg 2160w,"+n.p+"img/21b757b-2400.jpg 2400w",images:[{path:n.p+"img/c8f1ba0-480.jpg",width:480,height:480},{path:n.p+"img/37e590c-768.jpg",width:768,height:768},{path:n.p+"img/59faa2f-960.jpg",width:960,height:960},{path:n.p+"img/e3185aa-1080.jpg",width:1080,height:1080},{path:n.p+"img/06e8966-1200.jpg",width:1200,height:1200},{path:n.p+"img/7524a62-1536.jpg",width:1536,height:1536},{path:n.p+"img/301685b-2160.jpg",width:2160,height:2160},{path:n.p+"img/21b757b-2400.jpg",width:2400,height:2400}],src:n.p+"img/c8f1ba0-480.jpg",toString:function(){return n.p+"img/c8f1ba0-480.jpg"},placeholder:"data:image/jpeg;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAoACgDASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAAcEBggFAf/EAC8QAAEDAwMCBQMDBQAAAAAAAAECAwQABREGEiExQRMiUWFxBxWBCDKxFCORocH/xAAZAQEAAwEBAAAAAAAAAAAAAAAEAgMFAAH/xAAlEQACAQMCBQUAAAAAAAAAAAABAgADERITMQQFISJBscHR4fH/2gAMAwEAAhEDEQA/AFAwJSpaHMhTflKEg8lW3pWzdL6XgWbTzjkuwpvFxmtxX3ojq0BC3WkICSCrhO3A5PHHvWYvp9o+Zf8AV0O1QENNrCvFK31EIQhBClEkcngY455rQOpHZ91c+2wHZtsuiJu6LJQpex1KOQvI42ncQUnpjvgVkUwoGZEeST2A7xafqpEy2/VJNwPiliRDbcjrUnyJKRgthQ68jPr5vzSvlTnlWFmZISXZMpxSvN0SkenrzmmR9dtJXmFqqM/ci5MlToiVuPqXuKikqTt8uE4Ax0APPNUC/wBumvw40VqI8UNtDaQnHOSf8UesqavQWlyZKN7yFCuRlSURXlqbKBlpfHTHIz/sfFFew7Rc24zbkpltghe5QUrzKH/aKlTRRe09yJj10YIen9QfepDZS1DYfcXsbGcBsg4ppaOuFjvjUS7W11R/qWgtCXCAQPjv36Up4FwQ/do4DIQh99LQbdVt8VSgdyRnjvjPvXZ0zKdt13hJaimM3421UdHXaSVDAOMEk5P5ruXudPFh5+IVwSSY6daaXhaq08m3vENPIHiRnsZ8NeP4PcVna82R6HdXIkjDb8VfhrSoE+Yd/juD71oydNfdkxzDnsxUNAB9tSAvcSP2nnIxkdPWqf8AVixPPRI1/CEbwgNTS1064Ssfx7cVbzGhmuoo6j0+pGlUK9p8xKJsx3Hyxl7uQAjv8miuytRcecJby2TnfyAvHQe/HOaKw8zE3Mj6ITFka0guu7EtRgpYCCccJODg8Ajjn4qwaZlWW53VFuVIeVLZnpVGc37nXEAgYKu/Tv60UU7hahQIo2JPtDNteT9f3yRbtRRGLa44GYhYIbdJK1NlPRR5Jz1/Aq3XjXUBVmVCfgOzGn2EqJQjcnaccHHTnuemKKKa1dwzDx+yeANpQbpP025EcfVBcjyWQA2psn+6rBH7TxkjuMUUUVi1KhJ2lhn/2Q==",width:480,height:480}},307:function(t,e,n){var content=n(328);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("2ec41824",content,!0,{sourceMap:!1})},327:function(t,e,n){"use strict";n(307)},328:function(t,e,n){var o=n(26)(!1);o.push([t.i,'.page-full-example-without-components[data-v-099d8c5a]{font-size:1.25em}.page-full-example-without-components>*[data-v-099d8c5a]{margin:40px 0}.page-full-example-without-components[data-v-099d8c5a]>:first-child{margin-top:0}.page-full-example-without-components[data-v-099d8c5a]>:last-child{margin-bottom:0}.page-full-example-without-components .component-image-text[data-v-099d8c5a] img{width:100%;height:100%}@media (min-width:768px){.page-full-example-without-components .component-image-text[data-v-099d8c5a]{display:flex}.page-full-example-without-components .component-image-text>*[data-v-099d8c5a]{width:50%}}.page-full-example-without-components .component-image-text .text[data-v-099d8c5a]{padding:2%}.page-full-example-without-components .component-stage[data-v-099d8c5a]{position:relative;height:100vh;max-height:100%;margin:0;overflow:hidden}.page-full-example-without-components .component-stage .claim[data-v-099d8c5a]{display:block;font-size:25px;line-height:50px;text-transform:none}.page-full-example-without-components .component-stage .headline[data-v-099d8c5a]{display:block;font-size:30px;line-height:60px}@media (min-width:768px){.page-full-example-without-components .component-stage .headline[data-v-099d8c5a]{font-size:40px;line-height:80px}}.page-full-example-without-components .component-stage[data-v-099d8c5a] picture:before{display:block;padding-top:56.25%;content:""}.page-full-example-without-components .component-stage[data-v-099d8c5a] picture img{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.page-full-example-without-components .component-stage h1[data-v-099d8c5a]{position:absolute;bottom:0;left:0;width:100%;padding:20px 0;margin:0;color:#fff;text-align:center;background:rgba(0,0,0,.4)}@media (min-width:768px){.page-full-example-without-components .component-stage h1[data-v-099d8c5a]{position:absolute;top:50px;right:0;bottom:auto;left:auto;width:400px}}.page-full-example-without-components .component-text-font-a[data-v-099d8c5a],.page-full-example-without-components .component-text-font-b[data-v-099d8c5a]{padding:0 10%}',""]),t.exports=o},360:function(t,e,n){"use strict";n.r(e);var o={components:{LazyPicture:n(276).a},asyncData:function(){var t,e,o=n(279),r=n(282),l=n(277),c=n(280),h=n(283),d=n(281);return{contentA:"<p>This is a basic test with single font variant.</p>",textA:{text:"<h2>Text Headline</h2><p>Aliqua odit <b>anim vehicula</b> varius eget feugiat beatae. <i><b>Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet</b></i>, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>"},textB:{text:"<h2>Text Headline</h2><p>Aliqua odit <b>anim vehicula</b> varius eget feugiat beatae. <i><b>Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet</b></i>, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>"},imageTextA:{text:"<h2>Text Headline</h2><p>Aliqua odit anim vehicula varius eget feugiat beatae. Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>",picture:{sources:[{srcset:c.srcSet,type:"image/webp"},{srcset:h.srcSet,type:"image/jpeg"}],placeholder:(e=d,{url:e.src,base64:e.preview}),width:h.width,height:h.height,alt:"Alt Text",title:"Title Text",caption:null}},stage:{critical:!0,headline:"Stage Headline",claim:"Stage Claim",picture:{sources:[{srcset:o.srcSet,type:"image/webp"},{srcset:r.srcSet,type:"image/jpeg"}],placeholder:(t=l,{url:t.src,base64:t.preview}),width:r.width,height:r.height,alt:"Alt Text",title:"Title Text",caption:null}}}}},r=(n(327),n(8)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-full-example-without-components"},[n("div",{staticClass:"component-stage"},[n("lazy-picture",t._b({},"lazy-picture",t.stage.picture,!1)),t._v(" "),n("h1",{directives:[{name:"font",rawName:"v-font",value:[t.$fonts.getFont("Montserrat Alternates",700,"normal",{selector:".headline"}),t.$fonts.getFont("Comic Neue",300,"italic",{selector:".claim"})],expression:"[\n        $fonts.getFont('Montserrat Alternates', 700, 'normal', {selector: '.headline'}),\n        $fonts.getFont('Comic Neue', 300, 'italic', {selector: '.claim'})\n      ]"}]},[n("span",{staticClass:"headline"},[t._v(t._s(t.stage.headline))]),t._v(" "),n("span",{staticClass:"claim"},[t._v(t._s(t.stage.claim))])])],1),t._v(" "),n("div",{directives:[{name:"font",rawName:"v-font",value:[t.$fonts.getFont("Comic Neue",400,"normal"),t.$fonts.getFont("Montserrat Alternates",700,"normal",{selector:"h2"}),t.$fonts.getFont("Comic Neue",400,"italic",{selector:"i"}),t.$fonts.getFont("Comic Neue",700,"normal",{selector:"b,strong"}),t.$fonts.getFont("Comic Neue",700,"italic",{selector:"i b,i strong"}),t.$fonts.getFont("Comic Neue",700,"italic",{selector:"b i, strong i"}),t.$fonts.getFont("Comic Neue",400,"italic",{selector:"i > b, i > strong"})],expression:"[\n      $fonts.getFont('Comic Neue', 400, 'normal'),\n      $fonts.getFont('Montserrat Alternates', 700, 'normal', {selector: 'h2'}),\n      $fonts.getFont('Comic Neue', 400, 'italic', {selector: 'i'}),\n      $fonts.getFont('Comic Neue', 700, 'normal', {selector: 'b,strong'}),\n      $fonts.getFont('Comic Neue', 700, 'italic', {selector: 'i b,i strong'}),\n      $fonts.getFont('Comic Neue', 700, 'italic', {selector: 'b i, strong i'}),\n      $fonts.getFont('Comic Neue', 400, 'italic', {selector: 'i > b, i > strong'})\n    ]"}],staticClass:"component-text-font-a",domProps:{innerHTML:t._s(t.textA.text)}}),t._v(" "),n("div",{staticClass:"component-image-text"},[n("lazy-picture",t._b({},"lazy-picture",t.imageTextA.picture,!1)),t._v(" "),n("div",{directives:[{name:"font",rawName:"v-font",value:[t.$fonts.getFont("Comic Neue",400,"normal"),t.$fonts.getFont("Montserrat Alternates",700,"normal",{selector:"h2"})],expression:"[\n        $fonts.getFont('Comic Neue', 400, 'normal'),\n        $fonts.getFont('Montserrat Alternates', 700, 'normal', {selector: 'h2'})]"}],staticClass:"text",domProps:{innerHTML:t._s(t.imageTextA.text)}})],1),t._v(" "),n("div",{directives:[{name:"font",rawName:"v-font",value:[t.$fonts.getFont("Comic Neue",400,"normal"),t.$fonts.getFont("Montserrat Alternates",700,"normal",{selector:"h2"}),t.$fonts.getFont("Montserrat Alternates",400,"italic",{selector:"i"}),t.$fonts.getFont("Montserrat Alternates",700,"normal",{selector:"b"}),t.$fonts.getFont("Montserrat Alternates",700,"italic",{selector:"i b"}),t.$fonts.getFont("Montserrat Alternates",700,"italic",{selector:"b i"})],expression:"[\n      $fonts.getFont('Comic Neue', 400, 'normal'),\n      $fonts.getFont('Montserrat Alternates', 700, 'normal', {selector: 'h2'}),\n      $fonts.getFont('Montserrat Alternates', 400, 'italic', {selector: 'i'}),\n      $fonts.getFont('Montserrat Alternates', 700, 'normal', {selector: 'b'}),\n      $fonts.getFont('Montserrat Alternates', 700, 'italic', {selector: 'i b'}),\n      $fonts.getFont('Montserrat Alternates', 700, 'italic', {selector: 'b i'})\n    ]"}],staticClass:"component-text-font-b",domProps:{innerHTML:t._s(t.textB.text)}})])}),[],!1,null,"099d8c5a",null);e.default=component.exports}}]);