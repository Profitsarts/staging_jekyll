window.Modernizr=function(e,t,n){function r(e){b.cssText=e}function o(e,t){return r(S.join(e+";")+(t||""))}function i(e,t){return typeof e===t}function a(e,t){return!!~(""+e).indexOf(t)}function c(e,t){for(var r in e)if(b[e[r]]!==n)return"pfx"!=t||e[r];return!1}function s(e,t,r){for(var o in e){var a=t[e[o]];if(a!==n)return r===!1?e[o]:i(a,"function")?a.bind(r||t):a}return!1}function l(e,t,n){var r=e.charAt(0).toUpperCase()+e.substr(1),o=(e+" "+k.join(r+" ")+r).split(" ");return i(t,"string")||i(t,"undefined")?c(o,t):(o=(e+" "+j.join(r+" ")+r).split(" "),s(o,t,n))}function u(){m.input=function(n){for(var r=0,o=n.length;r<o;r++)M[n[r]]=n[r]in x;return M.list&&(M.list=!!t.createElement("datalist")&&!!e.HTMLDataListElement),M}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),m.inputtypes=function(e){for(var r,o,i,a=0,c=e.length;a<c;a++)x.setAttribute("type",o=e[a]),r="text"!==x.type,r&&(x.value=E,x.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(o)&&x.style.WebkitAppearance!==n?(g.appendChild(x),i=t.defaultView,r=i.getComputedStyle&&"textfield"!==i.getComputedStyle(x,null).WebkitAppearance&&0!==x.offsetHeight,g.removeChild(x)):/^(search|tel)$/.test(o)||(/^(url|email)$/.test(o)?r=x.checkValidity&&x.checkValidity()===!1:/^color$/.test(o)?(g.appendChild(x),g.offsetWidth,r=x.value!=E,g.removeChild(x)):r=x.value!=E)),P[e[a]]=!!r;return P}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d,f,p="2.5.3",m={},h=!0,g=t.documentElement,v="modernizr",y=t.createElement(v),b=y.style,x=t.createElement("input"),E=":)",w={}.toString,S=" -webkit- -moz- -o- -ms- ".split(" "),C="Webkit Moz O ms",k=C.split(" "),j=C.toLowerCase().split(" "),T={svg:"http://www.w3.org/2000/svg"},N={},P={},M={},A=[],$=A.slice,L=function(e,n,r,o){var i,a,c,s=t.createElement("div"),l=t.body,u=l?l:t.createElement("body");if(parseInt(r,10))for(;r--;)c=t.createElement("div"),c.id=o?o[r]:v+(r+1),s.appendChild(c);return i=["&#173;","<style>",e,"</style>"].join(""),s.id=v,(l?s:u).innerHTML+=i,u.appendChild(s),l||(u.style.background="",g.appendChild(u)),a=n(s,e),l?s.parentNode.removeChild(s):u.parentNode.removeChild(u),!!a},O=function(){function e(e,o){o=o||t.createElement(r[e]||"div"),e="on"+e;var a=e in o;return a||(o.setAttribute||(o=t.createElement("div")),o.setAttribute&&o.removeAttribute&&(o.setAttribute(e,""),a=i(o[e],"function"),i(o[e],"undefined")||(o[e]=n),o.removeAttribute(e))),o=null,a}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),z={}.hasOwnProperty;f=i(z,"undefined")||i(z.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(e,t){return z.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=$.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var i=new o,a=t.apply(i,n.concat($.call(arguments)));return Object(a)===a?a:i}return t.apply(e,n.concat($.call(arguments)))};return r});(function(n,r){var o=n.join(""),i=r.length;L(o,function(n,r){for(var o=t.styleSheets[t.styleSheets.length-1],a=o?o.cssRules&&o.cssRules[0]?o.cssRules[0].cssText:o.cssText||"":"",c=n.childNodes,s={};i--;)s[c[i].id]=c[i];m.touch="ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch||9===(s.touch&&s.touch.offsetTop),m.csstransforms3d=9===(s.csstransforms3d&&s.csstransforms3d.offsetLeft)&&3===s.csstransforms3d.offsetHeight,m.generatedcontent=(s.generatedcontent&&s.generatedcontent.offsetHeight)>=1,m.fontface=/src/i.test(a)&&0===a.indexOf(r.split(" ")[0])},i,r)})(['@font-face {font-family:"font";src:url("https://")}',["@media (",S.join("touch-enabled),("),v,")","{#touch{top:9px;position:absolute}}"].join(""),["@media (",S.join("transform-3d),("),v,")","{#csstransforms3d{left:9px;position:absolute;height:3px;}}"].join(""),['#generatedcontent:after{content:"',E,'";visibility:hidden}'].join("")],["fontface","touch","csstransforms3d","generatedcontent"]);N.flexbox=function(){return l("flexOrder")},N["flexbox-legacy"]=function(){return l("boxDirection")},N.canvas=function(){var e=t.createElement("canvas");return!!e.getContext&&!!e.getContext("2d")},N.canvastext=function(){return!!m.canvas&&!!i(t.createElement("canvas").getContext("2d").fillText,"function")},N.webgl=function(){try{var r,o=t.createElement("canvas");r=!(!e.WebGLRenderingContext||!o.getContext("experimental-webgl")&&!o.getContext("webgl")),o=n}catch(i){r=!1}return r},N.touch=function(){return m.touch},N.geolocation=function(){return!!navigator.geolocation},N.postmessage=function(){return!!e.postMessage},N.websqldatabase=function(){return!!e.openDatabase},N.indexedDB=function(){return!!l("indexedDB",e)},N.hashchange=function(){return O("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},N.history=function(){return!!e.history&&!!history.pushState},N.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},N.websockets=function(){for(var t=-1,n=k.length;++t<n;)if(e[k[t]+"WebSocket"])return!0;return"WebSocket"in e},N.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),a(b.backgroundColor,"rgba")},N.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),a(b.backgroundColor,"rgba")||a(b.backgroundColor,"hsla")},N.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(b.background)},N.backgroundsize=function(){return l("backgroundSize")},N.borderimage=function(){return l("borderImage")},N.borderradius=function(){return l("borderRadius")},N.boxshadow=function(){return l("boxShadow")},N.textshadow=function(){return""===t.createElement("div").style.textShadow},N.opacity=function(){return o("opacity:.55"),/^0.55$/.test(b.opacity)},N.cssanimations=function(){return l("animationName")},N.csscolumns=function(){return l("columnCount")},N.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return r((e+"-webkit- ".split(" ").join(t+e)+S.join(n+e)).slice(0,-e.length)),a(b.backgroundImage,"gradient")},N.cssreflections=function(){return l("boxReflect")},N.csstransforms=function(){return!!l("transform")},N.csstransforms3d=function(){var e=!!l("perspective");return e&&"webkitPerspective"in g.style&&(e=m.csstransforms3d),e},N.csstransitions=function(){return l("transition")},N.fontface=function(){return m.fontface},N.generatedcontent=function(){return m.generatedcontent},N.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(r){}return n},N.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(r){}return n},N.localstorage=function(){try{return localStorage.setItem(v,v),localStorage.removeItem(v),!0}catch(e){return!1}},N.sessionstorage=function(){try{return sessionStorage.setItem(v,v),sessionStorage.removeItem(v),!0}catch(e){return!1}},N.webworkers=function(){return!!e.Worker},N.applicationcache=function(){return!!e.applicationCache},N.svg=function(){return!!t.createElementNS&&!!t.createElementNS(T.svg,"svg").createSVGRect},N.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==T.svg},N.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(w.call(t.createElementNS(T.svg,"animate")))},N.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(w.call(t.createElementNS(T.svg,"clipPath")))};for(var D in N)f(N,D)&&(d=D.toLowerCase(),m[d]=N[D](),A.push((m[d]?"":"no-")+d));return m.input||u(),r(""),y=x=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=u.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t={},n=e.createElement,o=e.createDocumentFragment,i=o();e.createElement=function(e){var r=(t[e]||(t[e]=n(e))).cloneNode();return u.shivMethods&&r.canHaveChildren&&!l.test(e)?i.appendChild(r):r},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/\w+/g,function(e){return t[e]=n(e),i.createElement(e),'c("'+e+'")'})+");return n}")(u,i)}function i(e){var t;return e.documentShived?e:(u.shivCSS&&!a&&(t=!!n(e,"article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}")),c||(t=!o(e)),t&&(e.documentShived=t),e)}var a,c,s=e.html5||{},l=/^<|^(?:button|form|map|select|textarea)$/i;!function(){var e=t.createElement("a");e.innerHTML="<xyz></xyz>",a="hidden"in e,c=1==e.childNodes.length||function(){try{t.createElement("a")}catch(e){return!0}var n=t.createDocumentFragment();return"undefined"==typeof n.cloneNode||"undefined"==typeof n.createDocumentFragment||"undefined"==typeof n.createElement}()}();var u={elements:s.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:s.shivCSS!==!1,shivMethods:s.shivMethods!==!1,type:"default",shivDocument:i};e.html5=u,i(t)}(this,t),m._version=p,m._prefixes=S,m._domPrefixes=j,m._cssomPrefixes=k,m.hasEvent=O,m.testProp=function(e){return c([e])},m.testAllProps=l,m.testStyles=L,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(h?" js "+A.join(" "):""),m}(this,this.document),function(e,t,n){function r(e){return"[object Function]"==g.call(e)}function o(e){return"string"==typeof e}function i(){}function a(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function c(){var e=v.shift();y=1,e?e.t?m(function(){("c"==e.t?f.injectCss:f.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),c()):y=0}function s(e,n,r,o,i,s,l){function u(t){if(!p&&a(d.readyState)&&(b.r=p=1,!y&&c(),d.onload=d.onreadystatechange=null,t)){"img"!=e&&m(function(){E.removeChild(d)},50);for(var r in j[n])j[n].hasOwnProperty(r)&&j[n][r].onload()}}var l=l||f.errorTimeout,d={},p=0,g=0,b={t:r,s:n,e:i,a:s,x:l};1===j[n]&&(g=1,j[n]=[],d=t.createElement(e)),"object"==e?d.data=n:(d.src=n,d.type=e),d.width=d.height="0",d.onerror=d.onload=d.onreadystatechange=function(){u.call(this,g)},v.splice(o,0,b),"img"!=e&&(g||2===j[n]?(E.insertBefore(d,x?null:h),m(u,l)):j[n].push(d))}function l(e,t,n,r,i){return y=0,t=t||"j",o(e)?s("c"==t?S:w,e,t,this.i++,n,r,i):(v.splice(this.i++,0,e),1==v.length&&c()),this}function u(){var e=f;return e.loader={load:l,i:0},e}var d,f,p=t.documentElement,m=e.setTimeout,h=t.getElementsByTagName("script")[0],g={}.toString,v=[],y=0,b="MozAppearance"in p.style,x=b&&!!t.createRange().compareNode,E=x?p:h.parentNode,p=e.opera&&"[object Opera]"==g.call(e.opera),p=!!t.attachEvent&&!p,w=b?"object":p?"script":"img",S=p?"script":w,C=Array.isArray||function(e){return"[object Array]"==g.call(e)},k=[],j={},T={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};f=function(e){function t(e){var t,n,r,e=e.split("!"),o=k.length,i=e.pop(),a=e.length,i={url:i,origUrl:i,prefixes:e};for(n=0;n<a;n++)r=e[n].split("="),(t=T[r.shift()])&&(i=t(i,r));for(n=0;n<o;n++)i=k[n](i);return i}function a(e,o,i,a,s){var l=t(e),d=l.autoCallback;l.url.split(".").pop().split("?").shift(),l.bypass||(o&&(o=r(o)?o:o[e]||o[a]||o[e.split("http://themes.alessioatzeni.com/").pop().split("?")[0]]||c),l.instead?l.instead(e,o,i,a,s):(j[l.url]?l.noexec=!0:j[l.url]=1,i.load(l.url,l.forceCSS||!l.forceJS&&"css"==l.url.split(".").pop().split("?").shift()?"c":n,l.noexec,l.attrs,l.timeout),(r(o)||r(d))&&i.load(function(){u(),o&&o(l.origUrl,s,a),d&&d(l.origUrl,s,a),j[l.url]=2})))}function s(e,t){function n(e,n){if(e){if(o(e))n||(d=function(){var e=[].slice.call(arguments);f.apply(this,e),p()}),a(e,d,t,0,l);else if(Object(e)===e)for(s in c=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(s)&&(!n&&!--c&&(r(d)?d=function(){var e=[].slice.call(arguments);f.apply(this,e),p()}:d[s]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),p()}}(f[s])),a(e[s],d,t,s,l))}else!n&&p()}var c,s,l=!!e.test,u=e.load||e.both,d=e.callback||i,f=d,p=e.complete||i;n(l?e.yep:e.nope,!!u),u&&n(u)}var l,d,p=this.yepnope.loader;if(o(e))a(e,0,p,0);else if(C(e))for(l=0;l<e.length;l++)d=e[l],o(d)?a(d,0,p,0):C(d)?f(d):Object(d)===d&&s(d,p);else Object(e)===e&&s(e,p)},f.addPrefix=function(e,t){T[e]=t},f.addFilter=function(e){k.push(e)},f.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",d=function(){t.removeEventListener("DOMContentLoaded",d,0),t.readyState="complete"},0)),e.yepnope=u(),e.yepnope.executeStack=c,e.yepnope.injectJs=function(e,n,r,o,s,l){var u,d,p=t.createElement("script"),o=o||f.errorTimeout;p.src=e;for(d in r)p.setAttribute(d,r[d]);n=l?c:n||i,p.onreadystatechange=p.onload=function(){!u&&a(p.readyState)&&(u=1,n(),p.onload=p.onreadystatechange=null)},m(function(){u||(u=1,n(1))},o),s?p.onload():h.parentNode.insertBefore(p,h)},e.yepnope.injectCss=function(e,n,r,o,a,s){var l,o=t.createElement("link"),n=s?c:n||i;o.href=e,o.rel="stylesheet",o.type="text/css";for(l in r)o.setAttribute(l,r[l]);a||(h.parentNode.insertBefore(o,h),m(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};