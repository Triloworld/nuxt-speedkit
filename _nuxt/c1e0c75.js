(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{220:function(e,t,n){var content=n(223);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(55).default)("030c1927",content,!0,{sourceMap:!1})},221:function(e,t,n){"use strict";n.r(t);n(222);var r=n(16),component=Object(r.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"preview-container"},[t("div",{staticClass:"preview-container__preview"},[this._t("default")],2),this._v(" "),t("div",{directives:[{name:"font",rawName:"v-font",value:this.$fonts.getFont("Quicksand",400,"normal").isCritical(),expression:"$fonts.getFont('Quicksand', 400, 'normal').isCritical()"}],staticClass:"preview-container__info"},[this._t("title",[t("p",[this._v("Preview Info")])])],2)])}),[],!1,null,"df1b8846",null);t.default=component.exports},222:function(e,t,n){"use strict";var r=n(220);n.n(r).a},223:function(e,t,n){(t=n(54)(!1)).push([e.i,".preview-container[data-v-df1b8846]{display:flex;flex-direction:column;min-height:100vh;min-height:-webkit-fill-available;min-height:-moz-available;min-height:stretch;margin:50px 0}.preview-container[data-v-df1b8846]:first-child{margin-top:0}.preview-container[data-v-df1b8846]:last-child{margin-bottom:0}@media (orientation:landscape){.preview-container[data-v-df1b8846]{flex-direction:row}}@media (min-width:992px){.preview-container[data-v-df1b8846]{flex-direction:row}}.preview-container>div[data-v-df1b8846]{display:flex;align-items:center;justify-content:center;width:100vw;height:50vh}@media (orientation:landscape){.preview-container>div[data-v-df1b8846]{width:50vw;height:100vh}}@media (min-width:992px){.preview-container>div[data-v-df1b8846]{width:50vw;height:100vh}}.preview-container .preview-container__info[data-v-df1b8846]{font-size:2em}.preview-container .preview-container__info p[data-v-df1b8846]{line-height:1.375;text-align:center}.preview-container .preview-container__preview[data-v-df1b8846]{font-size:1.125em;--bg-opacity:1;background-color:#edf2f7;background-color:rgba(237,242,247,var(--bg-opacity))}@media (prefers-color-scheme:dark){.preview-container .preview-container__preview[data-v-df1b8846]{background-color:#2d3748;background-color:rgba(45,55,72,var(--bg-opacity))}}.preview-container .preview-container__preview>article[data-v-df1b8846]{text-align:center}.preview-container .preview-container__preview>article[data-v-df1b8846],.preview-container .preview-container__preview>div[data-v-df1b8846]{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%}.preview-container .preview-container__preview>div>ul[data-v-df1b8846]{padding:0;margin:0;list-style:none}.preview-container .preview-container__preview>div>ul li[data-v-df1b8846]{margin:.625em 0}.preview-container .preview-container__preview>iframe[data-v-df1b8846]{position:relative;width:100%;height:100%}",""]),e.exports=t},230:function(e,t,n){"use strict";(function(e){e.IntersectionObserver=e.IntersectionObserver||function(){function e(){}var t=e.prototype;return t.observe=function(){},t.unobserve=function(){},e}(),t.a={abstract:!0,props:{root:{type:e.HTMLElement,default:function(){return null}},rootMargin:{type:String,default:function(){return"0px"}},threshold:{type:Array,default:function(){return[0]}}},created:function(){var e,t=this;if(!this.$attrs.critical||!this.$options.critical){var n={root:(e=this).root,rootMargin:e.rootMargin,threshold:e.threshold};this.observer=new IntersectionObserver((function(e){var n=e[0];return t.onIntersect(n)}),n)}},mounted:function(){this.observer&&this.observer.observe(this.$el)},destroyed:function(){this.observer&&this.observer.disconnect()},methods:{onIntersect:function(e){e.isIntersecting&&(this.observer.unobserve(this.$el),this.triggerEnter())},triggerEnter:function(e){this.$emit("enter",e)}},render:function(){try{return this.$slots.default[0]}catch(e){throw new Error("IntersectionObserver.vue can only render one, and exactly one child component.")}}}}).call(this,n(23))},238:function(e,t,n){var content=n(254);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(55).default)("2c5ad93a",content,!0,{sourceMap:!1})},252:function(e,t,n){"use strict";var r=n(230).a,o=n(16),component=Object(o.a)(r,void 0,void 0,!1,null,null,null);t.a=component.exports},253:function(e,t,n){"use strict";var r=n(238);n.n(r).a},254:function(e,t,n){(t=n(54)(!1)).push([e.i,"",""]),e.exports=t},255:function(e,t,n){"use strict";var r={components:{IntersectionObserver:n(252).a},props:{src:{type:String,default:function(){return null}}},data:function(){return{lazySrc:null}},methods:{onEnter:function(e){this.lazySrc=this.src}}},o=(n(253),n(16)),component=Object(o.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("intersection-observer",{on:{enter:this.onEnter}},[t("iframe",this._b({staticClass:"lazy-iframe",attrs:{src:this.lazySrc,loading:"lazy"}},"iframe",this.$attrs,!1))])}),[],!1,null,"4ec2f79b",null);t.a=component.exports},334:function(e,t,n){"use strict";n.r(t);var r=n(255),o={components:{OrganismPreviewContainer:n(221).default,LazyIframe:r.a},data:function(){return{iframeA:{src:"https://grabarzundpartner.de"}}}},c=n(16),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("organism-preview-container",{scopedSlots:e._u([{key:"title",fn:function(){return[n("p",[e._v("Critical"),n("br"),e._v("LazyIframe")])]},proxy:!0}])},[[n("lazy-iframe",e._b({},"lazy-iframe",e.iframeA,!1))]],2)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{OrganismPreviewContainer:n(221).default})}}]);