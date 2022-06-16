__NUXT_JSONP__("/components/experimental-speedkit-picture", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW,aX){return {data:[{document:{slug:"experimental-speedkit-picture",description:as,title:"SpeedkitPicture (Experimental)",position:31,category:"Components",features:["generation of multiple image resolutions (srcset)","breakpoint-based differentiation of multiple image resolutions and ratios (srcset + media-rule)","generation of breakpoint-based placeholders (different ratios e.g. for mobile portrait and landscape)","optimized preloading of critical image resources","lazy load of non-critical image resources","base path support","lazy hydration support","load and optimize remote images from custom domains","full SEO support"],toc:[{id:ac,depth:T,text:at},{id:au,depth:T,text:av},{id:aw,depth:F,text:ax},{id:ay,depth:T,text:az},{id:G,depth:F,text:G},{id:U,depth:F,text:U},{id:H,depth:F,text:H},{id:I,depth:F,text:I},{id:O,depth:F,text:O},{id:aA,depth:T,text:aB}],body:{type:"root",children:[{type:b,tag:n,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:z}]},{type:a,value:" is based on the module "},{type:b,tag:g,props:{},children:[{type:a,value:"@nuxt\u002Fimage@0.2.0"}]},{type:a,value:". However, we have created a separate Vue component for it, because at the time of the implementation of the module the component "},{type:b,tag:g,props:{},children:[{type:a,value:aC}]},{type:a,value:" and the API for generating the images were not yet completely finished, or this module did not yet completely cover our use-case. We hope that with the final completion of "},{type:b,tag:i,props:{href:ad,rel:[B,C,D],target:E},children:[{type:b,tag:g,props:{},children:[{type:a,value:ae}]}]},{type:a,value:" we will be able to remove our component "},{type:b,tag:g,props:{},children:[{type:a,value:z}]},{type:a,value:" and can use "},{type:b,tag:g,props:{},children:[{type:a,value:ae}]},{type:a,value:" & "},{type:b,tag:g,props:{},children:[{type:a,value:aC}]},{type:a,value:" with full functionality."}]},{type:a,value:e},{type:b,tag:aD,props:{type:"warning"},children:[{type:a,value:"\nThis is an experimental component that we will offer until \n"},{type:b,tag:i,props:{href:ad,rel:[B,C,D],target:E},children:[{type:b,tag:g,props:{},children:[{type:a,value:aE}]}]},{type:a,value:"\n is fully feature-complete released. This also means that we will accept bug reports for the \n"},{type:b,tag:g,props:{},children:[{type:a,value:z}]},{type:a,value:"\n component. However, we will not fix bugs that are present in the generator of \n"},{type:b,tag:g,props:{},children:[{type:a,value:ae}]},{type:a,value:"\n.\n"}]},{type:a,value:e},{type:b,tag:V,props:{id:ac},children:[{type:b,tag:i,props:{href:"#features",ariaHidden:r,tabIndex:s},children:[{type:b,tag:c,props:{className:[t,u]},children:[]}]},{type:a,value:at}]},{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:"With the current implementation of "},{type:b,tag:g,props:{},children:[{type:a,value:z}]},{type:a,value:" we can cover the following functionality:"}]},{type:a,value:e},{type:b,tag:"list",props:{":items":ac},children:[{type:a,value:e}]},{type:a,value:e},{type:b,tag:V,props:{id:au},children:[{type:b,tag:i,props:{href:"#usage",ariaHidden:r,tabIndex:s},children:[{type:b,tag:c,props:{className:[t,u]},children:[]}]},{type:a,value:av}]},{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:"The "},{type:b,tag:g,props:{},children:[{type:a,value:z}]},{type:a,value:" (Experimental) is used to automatically generate and display different image sizes and\u002For image ratios for different viewports."}]},{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:"The specified resources can be given by absolute path (static folder) or complete URL. "},{type:b,tag:i,props:{href:ad,rel:[B,C,D],target:E},children:[{type:b,tag:g,props:{},children:[{type:a,value:aE}]}]},{type:a,value:" downloads the resources fully automatically and stores the generated and optimized renditions in the destination folder."}]},{type:a,value:e},{type:b,tag:J,props:{id:aw},children:[{type:b,tag:i,props:{href:"#example",ariaHidden:r,tabIndex:s},children:[{type:b,tag:c,props:{className:[t,u]},children:[]}]},{type:a,value:ax}]},{type:a,value:e},{type:b,tag:K,props:{className:[W]},children:[{type:b,tag:X,props:{className:[Y,aF]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,o]},children:[{type:b,tag:c,props:{className:[d,o]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:P}]},{type:a,value:aG}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:L}]}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,o]},children:[{type:b,tag:c,props:{className:[d,o]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:P}]},{type:a,value:K}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:L}]}]},{type:a,value:af},{type:b,tag:c,props:{className:[d,o]},children:[{type:b,tag:c,props:{className:[d,o]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:P}]},{type:a,value:aH}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,ag]},children:[{type:a,value:"v-bind"}]},{type:b,tag:c,props:{className:[d,ah]},children:[{type:b,tag:c,props:{className:[d,f,ai]},children:[{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:M}]},{type:a,value:aI},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:M}]}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:aJ}]}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,o]},children:[{type:b,tag:c,props:{className:[d,o]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ak}]},{type:a,value:K}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:L}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,o]},children:[{type:b,tag:c,props:{className:[d,o]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ak}]},{type:a,value:aG}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:L}]}]},{type:a,value:"\n\n"},{type:b,tag:c,props:{className:[d,o]},children:[{type:b,tag:c,props:{className:[d,o]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:P}]},{type:a,value:al}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:L}]}]},{type:b,tag:c,props:{className:[d,al]},children:[{type:b,tag:c,props:{className:[d,"language-javascript"]},children:[{type:a,value:e},{type:b,tag:c,props:{className:[d,Q,Z]},children:[{type:a,value:"import"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,"imports"]},children:[{type:b,tag:c,props:{className:[d,aK]},children:[{type:a,value:z}]}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,Q,Z]},children:[{type:a,value:"from"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"'nuxt-speedkit\u002Fcomponents\u002Fexperimental\u002FSpeedkitPicture'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:am}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,Q,Z]},children:[{type:a,value:"export"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,Q,Z]},children:[{type:a,value:"default"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,j,k]},children:[{type:a,value:"components"}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:m}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,aK]},children:[{type:a,value:z}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,"function"]},children:[{type:a,value:"data"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"("}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:an}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]},{type:a,value:af},{type:b,tag:c,props:{className:[d,Q,"control-flow"]},children:[{type:a,value:"return"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]},{type:a,value:aL},{type:b,tag:c,props:{className:[d,j,k]},children:[{type:a,value:aI}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:m}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,j,k]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:m}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ao}]},{type:a,value:aM},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j,k]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:m}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:aN}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j,k]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:m}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"'576:576,1024:1024,1280:1280,1680:1680,1920:1920'"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:a,value:aM},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j,k]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:m}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:aO}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j,k]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:m}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:aP}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ap}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,j,k]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:m}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:aQ}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,j,k]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:m}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:aR}]},{type:a,value:aL},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:a,value:af},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:am}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:am}]},{type:a,value:e}]}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:b,tag:c,props:{className:[d,o]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ak}]},{type:a,value:al}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:L}]}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:V,props:{id:ay},children:[{type:b,tag:i,props:{href:"#properties",ariaHidden:r,tabIndex:s},children:[{type:b,tag:c,props:{className:[t,u]},children:[]}]},{type:a,value:az}]},{type:a,value:e},{type:b,tag:K,props:{className:[W]},children:[{type:b,tag:X,props:{className:[Y,aS]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,j,k]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:m}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ao}]},{type:a,value:"…"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ap}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,j,k]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:m}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:aR}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,j,k]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:m}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:aQ}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,j,k]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:m}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"'anonymous'"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:J,props:{id:G},children:[{type:b,tag:i,props:{href:"#sources",ariaHidden:r,tabIndex:s},children:[{type:b,tag:c,props:{className:[t,u]},children:[]}]},{type:b,tag:g,props:{},children:[{type:a,value:G}]}]},{type:a,value:e},{type:b,tag:A,props:{},children:[{type:a,value:e},{type:b,tag:y,props:{},children:[{type:a,value:S},{type:b,tag:g,props:{},children:[{type:a,value:"Array"}]}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:"List of resources used."}]},{type:a,value:e},{type:b,tag:aD,props:{},children:[{type:a,value:e},{type:b,tag:"strong",props:{},children:[{type:a,value:"\nNote:\n"}]},{type:a,value:"\n If more than one resource is included, the smallest width from the \n"},{type:b,tag:g,props:{},children:[{type:a,value:N}]},{type:a,value:"\n property is taken as the condition for the source e.g. \n"},{type:b,tag:g,props:{},children:[{type:a,value:"(min-width: 992px)"}]},{type:a,value:"\n.\nThis allows viewport dependent aspect ratios.\n"}]},{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:"Information on property "},{type:b,tag:g,props:{},children:[{type:a,value:R}]},{type:a,value:" can be found at "},{type:b,tag:i,props:{href:"https:\u002F\u002Fimage.nuxtjs.org\u002Fcomponents\u002Fnuxt-img#src",rel:[B,C,D],target:E},children:[{type:a,value:"here"}]},{type:a,value:$}]},{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:"Property "},{type:b,tag:g,props:{},children:[{type:a,value:N}]},{type:a,value:" describes the image sizes in which the resource is to be displayed. Image sizes are comma separated and describe the image width and its dependent viewport width e.g. "},{type:b,tag:g,props:{},children:[{type:a,value:"ImageWidth:MinWidth"}]},{type:a,value:$}]},{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:"In the following example, two different image ratios are used."}]},{type:a,value:e},{type:b,tag:A,props:{},children:[{type:a,value:e},{type:b,tag:y,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"landscape.jpg"}]},{type:a,value:" is applied at a viewport of "},{type:b,tag:g,props:{},children:[{type:a,value:aT}]},{type:a,value:" with an image size of "},{type:b,tag:g,props:{},children:[{type:a,value:"1024px"}]},{type:a,value:$}]},{type:a,value:e},{type:b,tag:y,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"portrait.jpg"}]},{type:a,value:" is applied below "},{type:b,tag:g,props:{},children:[{type:a,value:aT}]},{type:a,value:" and has two viewport dependent image sizes, at "},{type:b,tag:g,props:{},children:[{type:a,value:"(min-width: 768px)"}]},{type:a,value:" the width "},{type:b,tag:g,props:{},children:[{type:a,value:"768px"}]},{type:a,value:" and everything below that the width "},{type:b,tag:g,props:{},children:[{type:a,value:"414px"}]},{type:a,value:$}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:K,props:{className:[W]},children:[{type:b,tag:X,props:{className:[Y,aS]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ao}]},{type:a,value:"\n  \n  "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j,k]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:m}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:aN}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j,k]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:m}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"'992:1024'"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j,k]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:m}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:aO}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j,k]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:m}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:aP}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ap}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:"h4",props:{id:as},children:[]},{type:a,value:e},{type:b,tag:J,props:{id:U},children:[{type:b,tag:i,props:{href:"#critical",ariaHidden:r,tabIndex:s},children:[{type:b,tag:c,props:{className:[t,u]},children:[]}]},{type:b,tag:g,props:{},children:[{type:a,value:U}]}]},{type:a,value:e},{type:b,tag:A,props:{},children:[{type:a,value:e},{type:b,tag:y,props:{},children:[{type:a,value:S},{type:b,tag:g,props:{},children:[{type:a,value:"Boolean"}]},{type:a,value:e},{type:b,tag:A,props:{},children:[{type:a,value:e},{type:b,tag:y,props:{},children:[{type:a,value:"Default: "},{type:b,tag:g,props:{},children:[{type:a,value:"$parent.isCritical"}]}]},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:"Set component as critical component."}]},{type:a,value:e},{type:b,tag:n,props:{},children:[{type:b,tag:"nuxt-link",props:{to:"\u002Fusage#critical-prop-for-critical-components"},children:[{type:a,value:"Learn more about critical components"}]}]},{type:a,value:e},{type:b,tag:J,props:{id:H},children:[{type:b,tag:i,props:{href:"#alt",ariaHidden:r,tabIndex:s},children:[{type:b,tag:c,props:{className:[t,u]},children:[]}]},{type:b,tag:g,props:{},children:[{type:a,value:H}]}]},{type:a,value:e},{type:b,tag:A,props:{},children:[{type:a,value:e},{type:b,tag:y,props:{},children:[{type:a,value:S},{type:b,tag:g,props:{},children:[{type:a,value:aq}]}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:"Image alternative Text."}]},{type:a,value:e},{type:b,tag:n,props:{},children:[{type:b,tag:i,props:{href:"https:\u002F\u002Fdeveloper.mozilla.org\u002Fen-US\u002Fdocs\u002FWeb\u002FAPI\u002FHTMLImageElement\u002Falt",rel:[B,C,D],target:E},children:[{type:a,value:"MDN - HTMLImageElement.alt"}]}]},{type:a,value:e},{type:b,tag:J,props:{id:I},children:[{type:b,tag:i,props:{href:"#title",ariaHidden:r,tabIndex:s},children:[{type:b,tag:c,props:{className:[t,u]},children:[]}]},{type:b,tag:g,props:{},children:[{type:a,value:I}]}]},{type:a,value:e},{type:b,tag:A,props:{},children:[{type:a,value:e},{type:b,tag:y,props:{},children:[{type:a,value:S},{type:b,tag:g,props:{},children:[{type:a,value:aq}]}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:"Image Title."}]},{type:a,value:e},{type:b,tag:n,props:{},children:[{type:b,tag:i,props:{href:"https:\u002F\u002Fdeveloper.mozilla.org\u002Fen-US\u002Fdocs\u002FWeb\u002FAPI\u002FHTMLElement\u002Ftitle",rel:[B,C,D],target:E},children:[{type:a,value:"MDN - HTMLElement.title"}]}]},{type:a,value:e},{type:b,tag:J,props:{id:O},children:[{type:b,tag:i,props:{href:"#crossorigin",ariaHidden:r,tabIndex:s},children:[{type:b,tag:c,props:{className:[t,u]},children:[]}]},{type:b,tag:g,props:{},children:[{type:a,value:O}]}]},{type:a,value:e},{type:b,tag:A,props:{},children:[{type:a,value:e},{type:b,tag:y,props:{},children:[{type:a,value:S},{type:b,tag:g,props:{},children:[{type:a,value:aq}]},{type:a,value:e},{type:b,tag:A,props:{},children:[{type:a,value:e},{type:b,tag:y,props:{},children:[{type:a,value:"default: "},{type:b,tag:g,props:{},children:[{type:a,value:"anonymus"}]}]},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:"Image CrossOrigin."}]},{type:a,value:e},{type:b,tag:n,props:{},children:[{type:b,tag:i,props:{href:"https:\u002F\u002Fdeveloper.mozilla.org\u002Fen-US\u002Fdocs\u002FWeb\u002FAPI\u002FHTMLImageElement\u002FcrossOrigin",rel:[B,C,D],target:E},children:[{type:a,value:"MDN - HTMLImageElement.crossOrigin"}]}]},{type:a,value:e},{type:b,tag:V,props:{id:aA},children:[{type:b,tag:i,props:{href:"#events",ariaHidden:r,tabIndex:s},children:[{type:b,tag:c,props:{className:[t,u]},children:[]}]},{type:a,value:aB}]},{type:a,value:e},{type:b,tag:K,props:{className:[W]},children:[{type:b,tag:X,props:{className:[Y,aF]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,o]},children:[{type:b,tag:c,props:{className:[d,o]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:P}]},{type:a,value:aH}]},{type:a,value:aU},{type:b,tag:c,props:{className:[d,ag]},children:[{type:a,value:"@load"}]},{type:b,tag:c,props:{className:[d,ah]},children:[{type:b,tag:c,props:{className:[d,f,ai]},children:[{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:M}]},{type:a,value:aV},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:aa}]},{type:a,value:"Loaded!"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:aa}]},{type:a,value:an},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:M}]}]},{type:a,value:aU},{type:b,tag:c,props:{className:[d,ag]},children:[{type:a,value:"@enter"}]},{type:b,tag:c,props:{className:[d,ah]},children:[{type:b,tag:c,props:{className:[d,f,ai]},children:[{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:M}]},{type:a,value:aV},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:aa}]},{type:a,value:"Viewport!"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:aa}]},{type:a,value:an},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:M}]}]},{type:a,value:" \n"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:aJ}]}]},{type:a,value:e}]}]}]},{type:a,value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:b,tag:"table",props:{},children:[{type:b,tag:"thead",props:{},children:[{type:b,tag:ar,props:{},children:[{type:b,tag:aW,props:{},children:[{type:a,value:"Name"}]},{type:b,tag:aW,props:{},children:[{type:a,value:"Description"}]}]}]},{type:b,tag:"tbody",props:{},children:[{type:b,tag:ar,props:{},children:[{type:b,tag:ab,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"load"}]}]},{type:b,tag:ab,props:{},children:[{type:a,value:"Triggered when the image resource has been completely loaded."}]}]},{type:b,tag:ar,props:{},children:[{type:b,tag:ab,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"enter"}]}]},{type:b,tag:ab,props:{},children:[{type:a,value:"Triggered when component has reached the viewport."}]}]}]}]}]},dir:"\u002Fen\u002Fcomponents",path:"\u002Fen\u002Fcomponents\u002Fexperimental-speedkit-picture",extension:".md",createdAt:aX,updatedAt:aX,to:"\u002Fcomponents\u002Fexperimental-speedkit-picture"},prev:{title:"SpeedkitLayer",path:"\u002Fen\u002Fcomponents\u002Fspeedkit-layer",to:"\u002Fcomponents\u002Fspeedkit-layer"},next:{title:z,path:"\u002Fen\u002Fcomponents\u002Fspeedkit-picture",to:"\u002Fcomponents\u002Fspeedkit-picture"}}],fetch:{},mutations:[]}}("text","element","span","token","\n","punctuation","code"," ","a","literal-property","property","operator",":","p","tag","string",",","true",-1,"icon","icon-link","\n  ","{","}","li","SpeedkitPicture","ul","nofollow","noopener","noreferrer","_blank",3,"sources","alt","title","h3","div","\u003E","\"","sizes","crossorigin","\u003C","keyword","src","Type: ",2,"critical","h2","nuxt-content-highlight","pre","line-numbers","module","\n        ",".","'","td","features","https:\u002F\u002Fimage.nuxtjs.org\u002F","@nuxt\u002Fimage","\n    ","attr-name","attr-value","attr-equals","=","\u003C\u002F","script",";",")","[","]","String","tr","","Features","usage","Usage","example","Example","properties","Properties","events","Events","NuxtPicture","alert","nuxt\u002Fimage","language-html","template","speedkit-picture","image","\u002F\u003E","maybe-class-name","\n      ","\n          ","'landscape.jpg'","'portrait.jpg'","'414,768:768'","'Image Title'","'Image Alt'","language-js","992px"," \n  ","console.log(","th","2022-06-16T05:56:15.774Z")));