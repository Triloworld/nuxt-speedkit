(window.webpackJsonp=window.webpackJsonp||[]).push([[14,24],{323:function(e,t,n){var content=n(327);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("24e5387e",content,!0,{sourceMap:!1})},324:function(e,t,n){"use strict";n(326);var r=n(6),component=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"preview-container"},[n("div",{staticClass:"preview-container__preview"},[e._t("default")],2),e._v(" "),n("div",{directives:[{name:"font",rawName:"v-font",value:e.$getFont("Quicksand",400,"normal"),expression:"$getFont('Quicksand', 400, 'normal')"}],staticClass:"preview-container__info"},[e._t("title",(function(){return[n("p",[e._v("Preview Info")])]}))],2)])}),[],!1,null,"338932a0",null);t.a=component.exports},325:function(e,t,n){"use strict";(function(e){n(328);e.IntersectionObserver=e.IntersectionObserver||function(){function e(){}var t=e.prototype;return t.observe=function(){},t.unobserve=function(){},e}(),t.a={abstract:!0,props:{root:{type:e.HTMLElement,default:null},rootMargin:{type:String,default:"0px"},threshold:{type:Array,default:function(){return[0]}},trackVisibility:{type:Boolean,default:!1},delay:{type:Number,default:0}},created:function(){var e,t=this;if(!this.$attrs.critical||!this.$options.critical){var n={root:(e=this).root,rootMargin:e.rootMargin,threshold:e.threshold,trackVisibility:e.trackVisibility,delay:e.delay};this.observer=new IntersectionObserver((function(e){var n=e[0];return t.onIntersect(n)}),n)}},mounted:function(){this.observer&&this.observer.observe(this.$el)},destroyed:function(){this.observer&&this.observer.disconnect()},methods:{onIntersect:function(e){e.isIntersecting&&(this.observer.unobserve(this.$el),this.triggerEnter())},triggerEnter:function(e){this.$emit("enter",e)}},render:function(){try{return this.$slots.default[0]}catch(e){throw new Error("IntersectionObserver.vue can only render one, and exactly one child component.")}}}}).call(this,n(17))},326:function(e,t,n){"use strict";n(323)},327:function(e,t,n){var r=n(19)(!1);r.push([e.i,".preview-container[data-v-338932a0]{display:flex;flex-direction:column;min-height:100vh;min-height:-webkit-fill-available;min-height:-moz-available;min-height:stretch;margin:50px 0}.preview-container[data-v-338932a0]:first-child{margin-top:0}.preview-container[data-v-338932a0]:last-child{margin-bottom:0}@media (orientation:landscape){.preview-container[data-v-338932a0]{flex-direction:row}}@media (min-width:992px){.preview-container[data-v-338932a0]{flex-direction:row}}.preview-container>div[data-v-338932a0]{display:flex;align-items:center;justify-content:center;width:100%;height:50vh;overflow:hidden}@media (orientation:landscape){.preview-container>div[data-v-338932a0]{width:50vw;height:100vh}}@media (min-width:992px){.preview-container>div[data-v-338932a0]{width:50vw;height:100vh}}.preview-container .preview-container__info[data-v-338932a0]{font-size:2em}.preview-container .preview-container__info p[data-v-338932a0]{line-height:1.375;text-align:center}.preview-container .preview-container__info button[data-v-338932a0]{width:90%;margin:0 auto}.preview-container .preview-container__preview[data-v-338932a0]{font-size:1.125em;--bg-opacity:1;background-color:rgba(0,0,0,.4)}@media (prefers-color-scheme:dark){.preview-container .preview-container__preview[data-v-338932a0]{background-color:hsla(0,0%,100%,.4)}}.preview-container .preview-container__preview>article[data-v-338932a0]{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%;text-align:center}.preview-container .preview-container__preview>div[data-v-338932a0]{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%}.preview-container .preview-container__preview>div>ul[data-v-338932a0]{padding:0;margin:0;list-style:none}.preview-container .preview-container__preview>div>ul li[data-v-338932a0]{margin:.625em 0}.preview-container .preview-container__preview>iframe[data-v-338932a0]{position:relative;width:100%;height:100%}",""]),e.exports=r},328:function(e,t,n){"use strict";var r=n(21),o=n(4),c=n(75),l=n(28),d=n(13),v=n(49),f=n(123),h=n(74),m=n(219),w=n(7),_=n(50),y=n(57).f,I=n(48).f,x=n(22).f,k=n(222).trim,E="Number",N=o.Number,S=N.prototype,O=v(_(S))==E,$=function(e){if(h(e))throw TypeError("Cannot convert a Symbol value to a number");var t,n,r,o,c,l,d,code,v=m(e,"number");if("string"==typeof v&&v.length>2)if(43===(t=(v=k(v)).charCodeAt(0))||45===t){if(88===(n=v.charCodeAt(2))||120===n)return NaN}else if(48===t){switch(v.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+v}for(l=(c=v.slice(2)).length,d=0;d<l;d++)if((code=c.charCodeAt(d))<48||code>o)return NaN;return parseInt(c,r)}return+v};if(c(E,!N(" 0o1")||!N("0b1")||N("+0x1"))){for(var C,z=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof z&&(O?w((function(){S.valueOf.call(n)})):v(n)!=E)?f(new N($(t)),n,z):$(t)},A=r?y(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),j=0;A.length>j;j++)d(N,C=A[j])&&!d(z,C)&&x(z,C,I(N,C));z.prototype=S,S.constructor=z,l(o,E,z)}},330:function(e,t,n){"use strict";var r=n(325).a,o=n(6),component=Object(o.a)(r,undefined,undefined,!1,null,null,null);t.a=component.exports},522:function(e,t,n){"use strict";n.r(t);var r={components:{IntersectionObserver:n(330).a},props:{loading:{type:String,default:"lazy"},title:{type:String,default:null},src:{type:String,default:null},intersectionObserver:{type:Object,default:function(){return{trackVisibility:!0,delay:350}}}},data:function(){return{lazySrc:null}},methods:{onLoad:function(e){this.$emit("load",e)},onEnter:function(e){this.lazySrc=this.src,this.$emit("enter",e)}}},o=n(6),c=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("intersection-observer",e._b({on:{enter:e.onEnter}},"intersection-observer",e.intersectionObserver,!1),[n("iframe",e._b({staticClass:"nuxt-speedkit__speedkit-iframe",attrs:{src:e.lazySrc,loading:e.loading,title:e.title},on:{load:e.onLoad}},"iframe",e.$attrs,!1))])}),[],!1,null,null,null).exports,l=n(324),d={components:{SpeedkitIframe:c,OrganismPreviewContainer:l.a},data:function(){return{iframe:{src:"https://grabarzundpartner.de"}}}},v=Object(o.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("organism-preview-container",{scopedSlots:e._u([{key:"default",fn:function(){return[n("speedkit-iframe",e._b({},"speedkit-iframe",e.iframe,!1))]},proxy:!0},{key:"title",fn:function(){return[n("p",[e._v("Critical"),n("br"),e._v("SpeedkitIframe")])]},proxy:!0}])})}),[],!1,null,null,null).exports,f={components:{SpeedkitIframe:c,OrganismPreviewContainer:l.a},data:function(){return{iframe:{src:"https://grabarzundpartner.de"}}}},h={components:{Critical:v,Lazy:Object(o.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("organism-preview-container",{attrs:{id:"lazyContainer"},scopedSlots:e._u([{key:"default",fn:function(){return[n("speedkit-iframe",e._b({},"speedkit-iframe",e.iframe,!1))]},proxy:!0},{key:"title",fn:function(){return[n("p",[e._v("SpeedkitIframe")])]},proxy:!0}])})}),[],!1,null,null,null).exports}},m=Object(o.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("critical",{attrs:{critical:""}}),e._v(" "),n("lazy")],1)}),[],!1,null,null,null);t.default=m.exports}}]);