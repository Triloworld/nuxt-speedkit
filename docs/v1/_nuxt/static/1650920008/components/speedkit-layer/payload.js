__NUXT_JSONP__("/components/speedkit-layer", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW,aX,aY,aZ,a_,a$,ba,bb,bc,bd,be){return {data:[{document:{slug:ak,description:"",title:"SpeedkitLayer",position:30,category:"Components",solutions:["reduced bandwidth","weak hardware","unsupported browser"],hideLayerFeatures:["Closing mechanics does not require javascript."],toc:[{id:ay,depth:D,text:az},{id:aA,depth:D,text:aB},{id:aC,depth:D,text:aD},{id:aE,depth:D,text:aF},{id:aG,depth:D,text:aH},{id:aI,depth:D,text:aJ},{id:aK,depth:D,text:W},{id:al,depth:D,text:aL}],body:{type:"root",children:[{type:b,tag:l,props:{},children:[{type:a,value:"The loading behavior of webpages based on nuxtjs is designed in such a way that all necessary Javascript resources are preloaded and directly initialized with the initial load of the page. However, this behavior creates a negative impact on the Lighthouse Performance Score (TTI) for larger pages that have an increased initial load of additional resources, such as fonts, images, plugins, modules (nuxt-i18n, ...)."}]},{type:a,value:g},{type:b,tag:E,props:{id:ay},children:[{type:b,tag:B,props:{href:"#excursus",ariaHidden:u,tabIndex:F},children:[{type:b,tag:c,props:{className:[G,H]},children:[]}]},{type:a,value:az}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"The Lighthouse Test is not a tool to make a general statement about the quality of a website programming. Lighthouse rather tries to map a metric for the usability of a page from the user's point of view. This includes accessibility, best practices, SEO and of course performance."}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"This last point is often misinterpreted by developers. If you want to implement features that increase usability for the user (interactions\u002Fmore complex animations, ...), this will always have an impact on performance in the Lighthouse Test for larger website projects, as the corresponding Javascript must be loaded for this. Finally, Lighthouse does also not rate the design, but the accessibility (size of click areas, etc.) of a website.\nYou should therefore not ask yourself the following question: \"How can I fully optimize my JavaScript to achieve a Lighthouse score of 100\u002F100?\". You have to ask yourself much more the question: \"What is especially important to a user with low bandwidth or weak hardware on my site?\"."}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"The answer to this is relatively simple: the site must first and foremost work and you must be able to get to the information you need quickly."}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"No more and no less."}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"The user doesn't need any fancy slider animations and parallax effects that can only be implemented with certain libraries. Or a softload mechanism to get to more pages in a more elegant and animated way, but which initially needs an increased amount of javascript logic. All he wants is that information is retrievable reasonably fast and he can click through the presence. Among other things, he doesn't need full retina images, which simply take a long time to load with 3G."}]},{type:a,value:g},{type:b,tag:E,props:{id:aA},children:[{type:b,tag:B,props:{href:"#solution",ariaHidden:u,tabIndex:F},children:[{type:b,tag:c,props:{className:[G,H]},children:[]}]},{type:a,value:aB}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"For this reason, we pause the initialization of the javascript in the following cases:"}]},{type:a,value:g},{type:b,tag:aM,props:{":items":"solutions",type:aN},children:[{type:a,value:g}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"In these cases, a layer will be displayed that allows the user to decide whether he wants to initialize the full experience and download further resources despite the physical impairment or whether he wants to visit the website with a reduced UX (without Javascript).\nThe layer is also displayed with a corresponding message when Javascript is deactivated."}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:b,tag:L,props:{to:"\u002Fconcept"},children:[{type:a,value:"Learn more in Concept."}]}]},{type:a,value:g},{type:b,tag:E,props:{id:aC},children:[{type:b,tag:B,props:{href:"#usage",ariaHidden:u,tabIndex:F},children:[{type:b,tag:c,props:{className:[G,H]},children:[]}]},{type:a,value:aD}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"If the SpeedkitLayer is implemented, the javascript initialisation is automatically monitored. If one of the events described above occurs, the process is paused and only continued or cancelled after a user interaction in the layer."}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"The layer is placed once in the layout (e.g. "},{type:b,tag:i,props:{},children:[{type:a,value:"layouts\u002Fdefault.vue"}]},{type:a,value:").\nThe included SpeedkitLayer serves as a wrapper and must be filled according to the "},{type:b,tag:L,props:{to:"\u002Fcomponents\u002Fspeedkit-layer#template"},children:[{type:a,value:al}]},{type:a,value:", see "},{type:b,tag:B,props:{href:"https:\u002F\u002Fgithub.com\u002FGrabarzUndPartner\u002Fnuxt-speedkit\u002Fblob\u002Fmain\u002Fexample\u002Fcomponents\u002FInfoLayer.vue",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"example component"}]},{type:a,value:v}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"The content contains messages and buttons that are displayed in the respective event.\nMessages and buttons are defined with an "},{type:b,tag:i,props:{},children:[{type:a,value:t}]},{type:a,value:", these are set to "},{type:b,tag:i,props:{},children:[{type:a,value:am}]},{type:a,value:" by default via CSS."}]},{type:a,value:g},{type:b,tag:an,props:{},children:[{type:a,value:g},{type:b,tag:x,props:{},children:[{type:a,value:aO},{type:b,tag:i,props:{},children:[{type:a,value:R}]},{type:a,value:" for message"}]},{type:a,value:g},{type:b,tag:x,props:{},children:[{type:a,value:aO},{type:b,tag:i,props:{},children:[{type:a,value:S}]},{type:a,value:" for button"}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:aP,props:{},children:[{type:a,value:"\nFor the closing mechanism of the layer, see \n"},{type:b,tag:L,props:{to:aQ},children:[{type:a,value:W}]},{type:a,value:aR}]},{type:a,value:g},{type:b,tag:E,props:{id:aE},children:[{type:b,tag:B,props:{href:"#messages",ariaHidden:u,tabIndex:F},children:[{type:b,tag:c,props:{className:[G,H]},children:[]}]},{type:a,value:aF}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"The messages are elements that are displayed for the relevant events."}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"Initially, all IDs are set to "},{type:b,tag:i,props:{},children:[{type:a,value:am}]},{type:a,value:", so no message is visible."},{type:b,tag:ao,props:{},children:[]},{type:a,value:"\nWhen an event is triggered, the relevant message is displayed via the ID using the style attribute "},{type:b,tag:i,props:{},children:[{type:a,value:aS}]},{type:a,value:v}]},{type:a,value:aT},{type:b,tag:ap,props:{},children:[{type:b,tag:aq,props:{},children:[{type:b,tag:w,props:{},children:[{type:b,tag:I,props:{},children:[{type:a,value:aU}]},{type:b,tag:I,props:{},children:[{type:a,value:ar}]}]}]},{type:b,tag:as,props:{},children:[{type:b,tag:w,props:{},children:[{type:b,tag:n,props:{},children:[{type:b,tag:M,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:R}]}]}]},{type:b,tag:n,props:{},children:[{type:a,value:"User Browser is not supported by "},{type:b,tag:L,props:{to:"\u002Foptions#browsersupport"},children:[{type:b,tag:i,props:{},children:[{type:a,value:"Browserslist"}]}]},{type:a,value:v}]}]},{type:b,tag:w,props:{},children:[{type:b,tag:n,props:{},children:[{type:b,tag:M,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:aV}]}]}]},{type:b,tag:n,props:{},children:[{type:a,value:"User hardware (number of processor & RAM) are not sufficient."}]}]},{type:b,tag:w,props:{},children:[{type:b,tag:n,props:{},children:[{type:b,tag:M,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:aW}]}]}]},{type:b,tag:n,props:{},children:[{type:a,value:"Connection speed is too low."}]}]}]}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:b,tag:at,props:{},children:[{type:a,value:aX}]}]},{type:a,value:g},{type:b,tag:y,props:{className:[X]},children:[{type:b,tag:Y,props:{className:[Z,_]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:"\u003C!-- initial --\u003E"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:y}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:b,tag:c,props:{className:[d,e,q]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:aY},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:aZ},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:"\u003C!-- active --\u003E"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:y}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:b,tag:c,props:{className:[d,e,q]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,N]},children:[{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:a_}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:b,tag:c,props:{className:[d,e,q]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,O,a$,ba]},children:[{type:b,tag:c,props:{className:[d,au]},children:[{type:a,value:"display"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:av}]},{type:a,value:" block"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:aY},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:E,props:{id:aG},children:[{type:b,tag:B,props:{href:"#buttons",ariaHidden:u,tabIndex:F},children:[{type:b,tag:c,props:{className:[G,H]},children:[]}]},{type:a,value:aH}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"The buttons are interaction elements for the user with which he can make his choice at the relevant event."}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"Initially, all IDs except for "},{type:b,tag:i,props:{},children:[{type:a,value:aw}]},{type:a,value:" are set to "},{type:b,tag:i,props:{},children:[{type:a,value:am}]},{type:a,value:".\nWhen an event is triggered, the relevant button is displayed via the ID using the style attribute "},{type:b,tag:i,props:{},children:[{type:a,value:aS}]},{type:a,value:v}]},{type:a,value:aT},{type:b,tag:ap,props:{},children:[{type:b,tag:aq,props:{},children:[{type:b,tag:w,props:{},children:[{type:b,tag:I,props:{},children:[{type:a,value:aU}]},{type:b,tag:I,props:{},children:[{type:a,value:ar}]}]}]},{type:b,tag:as,props:{},children:[{type:b,tag:w,props:{},children:[{type:b,tag:n,props:{},children:[{type:b,tag:M,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:aw}]}]}]},{type:b,tag:n,props:{},children:[{type:a,value:"Visible when javascript is disabled, needed so that the user can hide the layer. Requires the "},{type:b,tag:L,props:{to:aQ},children:[{type:a,value:W}]},{type:a,value:" implementation."}]}]},{type:b,tag:w,props:{},children:[{type:b,tag:n,props:{},children:[{type:b,tag:M,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:$}]}]}]},{type:b,tag:n,props:{},children:[{type:a,value:"Is used to offer the user the possibility to visit the page only with activated fonts. Other initialisations of the Javascript and loading of the pictures are prevented."}]}]},{type:b,tag:w,props:{},children:[{type:b,tag:n,props:{},children:[{type:b,tag:M,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:S}]}]}]},{type:b,tag:n,props:{},children:[{type:a,value:"Activates all features. The initialisation of the JavaScript is started, images are loaded."}]}]}]}]},{type:a,value:g},{type:b,tag:aP,props:{type:aN},children:[{type:a,value:"\nIt is recommended to register an \n"},{type:b,tag:at,props:{},children:[{type:a,value:"Inline Click-Event"}]},{type:a,value:"\n for the buttons \n"},{type:b,tag:i,props:{},children:[{type:a,value:$}]},{type:a,value:"\n and \n"},{type:b,tag:i,props:{},children:[{type:a,value:S}]},{type:a,value:aR},{type:b,tag:ao,props:{},children:[]},{type:a,value:g},{type:b,tag:ao,props:{},children:[]},{type:a,value:"\nMore information under \n"},{type:b,tag:L,props:{to:"\u002Fcomponents\u002Fspeedkit-layer#force-app-initialization-or-font-load"},children:[{type:a,value:"Force App initialization or Font load"}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:E,props:{id:aI},children:[{type:b,tag:B,props:{href:"#force-initialization-app-font",ariaHidden:u,tabIndex:F},children:[{type:b,tag:c,props:{className:[G,H]},children:[]}]},{type:a,value:aJ}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"For Unsupported-Browser and Insufficient Hardware events, an "},{type:b,tag:i,props:{},children:[{type:a,value:T}]},{type:a,value:" event must also be set with the "},{type:b,tag:i,props:{},children:[{type:a,value:t}]},{type:a,value:v}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"In the event, the global variable "},{type:b,tag:i,props:{},children:[{type:a,value:U}]},{type:a,value:" or "},{type:b,tag:i,props:{},children:[{type:a,value:U}]},{type:a,value:" must be set to "},{type:b,tag:i,props:{},children:[{type:a,value:u}]},{type:a,value:v}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"These are needed if the user has already reacted before the initial Javascript has been loaded. After the javascript has been successfully loaded, the app is automatically initialised."}]},{type:a,value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:b,tag:ap,props:{},children:[{type:b,tag:aq,props:{},children:[{type:b,tag:w,props:{},children:[{type:b,tag:I,props:{},children:[{type:a,value:"Variable"}]},{type:b,tag:I,props:{},children:[{type:a,value:"Type"}]},{type:b,tag:I,props:{},children:[{type:a,value:ar}]},{type:b,tag:I,props:{},children:[{type:a,value:"Default"}]}]}]},{type:b,tag:as,props:{},children:[{type:b,tag:w,props:{},children:[{type:b,tag:n,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:U}]}]},{type:b,tag:n,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:bb}]}]},{type:b,tag:n,props:{},children:[{type:a,value:"If set, only the fonts are initialised."}]},{type:b,tag:n,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:bc}]}]}]},{type:b,tag:w,props:{},children:[{type:b,tag:n,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:ax}]}]},{type:b,tag:n,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:bb}]}]},{type:b,tag:n,props:{},children:[{type:a,value:"If set, initialisation continues after the javascript has been fully loaded."}]},{type:b,tag:n,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:bc}]}]}]}]}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:b,tag:at,props:{},children:[{type:a,value:aX}]}]},{type:a,value:g},{type:b,tag:y,props:{className:[X]},children:[{type:b,tag:Y,props:{className:[Z,_]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:z}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:b,tag:c,props:{className:[d,e,q]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:$},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,N]},children:[{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:b,tag:c,props:{className:[d,e,q]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,O,aa,ab]},children:[{type:b,tag:c,props:{className:[d,ac,ad]},children:[{type:a,value:ae}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,af]},children:[{type:a,value:U}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,ag]},children:[{type:a,value:m}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,ah]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:bd},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:aZ},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:z}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:b,tag:c,props:{className:[d,e,q]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,N]},children:[{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:b,tag:c,props:{className:[d,e,q]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,O,aa,ab]},children:[{type:b,tag:c,props:{className:[d,ac,ad]},children:[{type:a,value:ae}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,af]},children:[{type:a,value:ax}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,ag]},children:[{type:a,value:m}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,ah]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:bd},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:E,props:{id:aK},children:[{type:b,tag:B,props:{href:"#hide-layer",ariaHidden:u,tabIndex:F},children:[{type:b,tag:c,props:{className:[G,H]},children:[]}]},{type:a,value:W}]},{type:a,value:g},{type:b,tag:y,props:{className:[X]},children:[{type:b,tag:Y,props:{className:[Z,_]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:P}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:ai}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:b,tag:c,props:{className:[d,e,q]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:aj},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:"\n  Close Layer\n"},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:P}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"The layer can be closed via a "},{type:b,tag:i,props:{},children:[{type:a,value:ai}]},{type:a,value:" attribute with the "},{type:b,tag:i,props:{},children:[{type:a,value:t}]},{type:a,value:k},{type:b,tag:i,props:{},children:[{type:a,value:aj}]},{type:a,value:v}]},{type:a,value:g},{type:b,tag:aM,props:{":items":"hideLayerFeatures"},children:[{type:a,value:g}]},{type:a,value:g},{type:b,tag:E,props:{id:al},children:[{type:b,tag:B,props:{href:"#template",ariaHidden:u,tabIndex:F},children:[{type:b,tag:c,props:{className:[G,H]},children:[]}]},{type:a,value:aL}]},{type:a,value:g},{type:b,tag:y,props:{className:[X]},children:[{type:b,tag:Y,props:{className:[Z,_]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:ak}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:V},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:"Sorry, but you will have a limited user experience due to a…"},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:V},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:an}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,N]},children:[{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:a_}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:b,tag:c,props:{className:[d,e,q]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,O,a$,ba]},children:[{type:b,tag:c,props:{className:[d,au]},children:[{type:a,value:"padding"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:av}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,"number"]},children:[{type:a,value:"0"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,au]},children:[{type:a,value:"list-style"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:av}]},{type:a,value:" none"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:"\u003C!-- Displayed when javascript is disabled. --\u003E"}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:x}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:b,tag:c,props:{className:[d,e,q]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:"nuxt-speedkit__message__nojs"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:"\n        disabled javascript\n      "},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:"\u003C!-- Displayed when browser does not support. --\u003E"}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:x}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:b,tag:c,props:{className:[d,e,q]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:"\n        outdated browser\n      "},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:"\u003C!-- Displayed when user hardware is not sufficient. --\u003E"}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:x}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:b,tag:c,props:{className:[d,e,q]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:aV},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:"\n        outdated device\n      "},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:"\u003C!-- Displayed when connection is too slow. --\u003E"}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:x}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:b,tag:c,props:{className:[d,e,q]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:aW},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:"\n        slow connection\n      "},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:an}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:V},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:"\u003C!-- Button to hide the layer with no javascript --\u003E"}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:z}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:b,tag:c,props:{className:[d,e,q]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:aw},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:P}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:ai}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:b,tag:c,props:{className:[d,e,q]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:aj},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:"\n        Apply without js\n      "},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:P}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:V},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:"\u003C!-- Button for use without javascript and with fonts --\u003E"}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:z}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:b,tag:c,props:{className:[d,e,q]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:$},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,N]},children:[{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:b,tag:c,props:{className:[d,e,q]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,O,aa,ab]},children:[{type:b,tag:c,props:{className:[d,ac,ad]},children:[{type:a,value:ae}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,af]},children:[{type:a,value:U}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,ag]},children:[{type:a,value:m}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,ah]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:P}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:ai}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:b,tag:c,props:{className:[d,e,q]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:aj},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:"\n        Apply with Fonts\n      "},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:P}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:V},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:"\u003C!-- Button for activate javascript by bad connection or browser support --\u003E"}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:z}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:b,tag:c,props:{className:[d,e,q]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,N]},children:[{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:b,tag:c,props:{className:[d,e,q]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,O,aa,ab]},children:[{type:b,tag:c,props:{className:[d,ac,ad]},children:[{type:a,value:ae}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,af]},children:[{type:a,value:ax}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,ag]},children:[{type:a,value:m}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,ah]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:"\n      Apply with all Features\n    "},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:"\n\n  "},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:ak}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:g}]}]}]}]},dir:"\u002Fen\u002Fcomponents",path:"\u002Fen\u002Fcomponents\u002Fspeedkit-layer",extension:".md",createdAt:be,updatedAt:be,to:"\u002Fcomponents\u002Fspeedkit-layer"},prev:{title:"v-font",path:"\u002Fen\u002Fdirectives\u002Fv-font",to:"\u002Fdirectives\u002Fv-font"},next:{title:"SpeedkitPicture (Experimental)",path:"\u002Fen\u002Fcomponents\u002Fexperimental-speedkit-picture",to:"\u002Fcomponents\u002Fexperimental-speedkit-picture"}}],fetch:{},mutations:[]}}("text","element","span","token","punctuation","tag","\n","\"","code","\u003E"," ","p","=","td","attr-name","attr-value","attr-equals","\u003C","\u003C\u002F","id","true",".","tr","li","div","button","\n      ","a","comment",2,"h2",-1,"icon","icon-link","th",";","\n  ","nuxt-link","nobr","special-attr","value","label","\n    ","nuxt-speedkit__message__unsupported-browser","nuxt-speedkit__button__init-app","onclick","__NUXT_SPEEDKIT_FONT_INIT__","\n\n    ","Hide Layer","nuxt-content-highlight","pre","language-html","line-numbers","nuxt-speedkit__button__init-font","javascript","language-javascript","dom","variable","window","property-access","operator","boolean","for","nuxt-speedkit__speedkit-layer__close","speedkit-layer","template","display: none;","ul","br","table","thead","Description","tbody","strong","property",":","nuxt-speedkit__button__init-nojs","__NUXT_SPEEDKIT_AUTO_INIT__","excursus","Excursus","solution","Solution","usage","Usage","messages","Messages","buttons","Buttons","force-initialization-app-font","Force initialization (App, Font)","hide-layer","Template","list","info","e.g. ","alert","\u002Fcomponents\u002Fspeedkit-layer#hide-layer","\n.\n","display: block;","\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n","ID","nuxt-speedkit__message__outdated-device","nuxt-speedkit__message__slow-connection","Example","\n  Your browser is not supported!\n","\n\n","style","css","language-css","Boolean","false","…","2022-04-25T20:52:25.245Z")));