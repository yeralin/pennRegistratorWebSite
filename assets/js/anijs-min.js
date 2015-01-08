!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("AniJS requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=function(b){var c="data-anijs",d="default",e="$",f="if",g="on",h="do",i="to",j="(\\s+|^)",k="(\\s+|$)",l="animationend",m="transitionend";b={rootDOMTravelScope:{},eventProviderCollection:{},init:function(){n._t={};var a=n._a();b.registerHelper(d,a),n._u=d,b.rootDOMTravelScope=document,b.Parser=n.Parser,n._v=n._p(),n._w=""},setDOMRootTravelScope:function(a){var c;try{"document"===a?c=document:(c=document.querySelector(a),c||(c=document))}catch(d){c=document}b.rootDOMTravelScope=c},run:function(){var a=[],d={};b.purgeAll(),b.eventProviderCollection={},a=n._o(b.rootDOMTravelScope);var e,f=a.length,g=0;for(g;f>g;g++)e=a[g],d=n._n(e.getAttribute(c)),n._c(e,d);var h=b.getEventProvider("AniJSEventProvider");h&&h.dispatchEvent("onRunFinished")},createAnimation:function(a,b){var c=b||"";n._c(c,a)},getHelper:function(a){var b=n._t;return b[a]||b[d]},registerHelper:function(a,b){n._t[a]=b},purge:function(a){if(a&&""!==a&&" "!==a){var c=document.querySelectorAll(a),d=c.length,e=0;for(e;d>e;e++)b.EventSystem.purgeEventTarget(c[e])}},purgeAll:function(){b.EventSystem.purgeAll()},purgeEventTarget:function(a){b.EventSystem.purgeEventTarget(a)},setClassNamesWhenAnim:function(a){n._w=" "+a},createEventProvider:function(){return b.EventSystem.createEventTarget()},registerEventProvider:function(a){var c=b.eventProviderCollection;return a.id&&a.value&&b.EventSystem.isEventTarget(a.value)?(c[a.id]=a.value,1):""},getEventProvider:function(a){return b.eventProviderCollection[a]}};var n={};return n._a=function(){var a={removeAnim:function(a,b){b.nodeHelper.removeClass(a.target,b.behavior)},holdAnimClass:function(){}};return a},n._b=function(){return new Parser},n._c=function(a,b){var c,d=b.length,e=0;for(e;d>e;e++)c=b[e],n._d(a,c)},n._d=function(a,c){var d=n._e(c),e=n._f(a,c);if(""!==d){var f,g=e.length,h=0;for(h;g>h;h++)if(f=e[h],b.EventSystem.isEventTarget(f)){var i=function(d){var e=n._g(a,c),f=n._h(c),g=n._j(a,c),h=n._i(a,c);""!==n._w&&(f+=n._w);var i={behaviorTargetList:e,nodeHelper:n.NodeHelper,animationEndEvent:n._v,behavior:f,after:h,eventSystem:b.EventSystem},j=new n.AnimationContext(i);g&&n.Util.isFunction(g)?g(d,j):j.run()};b.EventSystem.addEventListenerHelper(f,d,i,!1),b.EventSystem.registerEventHandle(f,d,i)}}},n._e=function(a){var b="",c=a.event||b;return c===l?c=n._p():c===m&&(c=n._q()),c},n._f=function(c,d){var e,f=c,g=[f],h=b.rootDOMTravelScope;if(d.eventTarget)if(e=n._m(d.eventTarget),e.length>0)g=e;else if("document"===d.eventTarget)g=[document];else if("window"===d.eventTarget)g=[a];else if(d.eventTarget.split)try{g=h.querySelectorAll(d.eventTarget)}catch(i){g=[]}return g},n._g=function(a,c){var d=a,f=[d],g=b.rootDOMTravelScope,h=c.behaviorTarget;if(h){h=h.split(e).join(",");try{f=g.querySelectorAll(h)}catch(i){f=[]}}return f},n._h=function(a){var b=a.behavior||"";return b},n._i=function(a,b){var c=n._k(a,b,b.after);return c},n._j=function(a,b){var c=n._k(a,b,b.before);return c},n._k=function(a,b,c){var d=c||"",e=n._l(b);if(d&&!n.Util.isFunction(d)){var f=n._t,g=f[e];d=g&&g[d]?g[d]:!1}return d},n._l=function(a){var b=a.helper||n._u;return b},n._m=function(a){{var c=[];b.eventProviderCollection}if(a)if(a.id&&b.EventSystem.isEventTarget(a.value))c.push(a.value),b.registerEventProvider(a);else if(a.split){eventProviderIDList=a.split("$");var d,e=eventProviderIDList.length,f=1;for(f;e>f;f++)if(d=eventProviderIDList[f],d&&" "!==d){d=d.trim();var g=b.getEventProvider(d);g||(g=b.EventSystem.createEventTarget(),b.registerEventProvider({id:d,value:g})),c.push(g)}}return c},n._n=function(a){return n.Parser.parse(a)},n._o=function(a){var b="["+c+"]";return a.querySelectorAll(b)},n._p=function(){var a=n._r(),b=[l,"oAnimationEnd",l,"webkitAnimationEnd"];return b[a]},n._q=function(){var a=n._r(),b=[m,"oTransitionEnd",m,"webkitTransitionEnd"];return b[a]},n._r=function(){for(var a=document.createElement("fakeelement"),b=["animation","OAnimation","MozAnimation","webkitAnimation"],c=0;c<b.length;c++)if(void 0!==a.style[b[c]])return c},n.AnimationContext=function(a){var b=this;b.init=function(a){b.behaviorTargetList=a.behaviorTargetList||[],b.nodeHelper=a.nodeHelper,b.animationEndEvent=a.animationEndEvent,b.behavior=a.behavior,b.after=a.after,b.eventSystem=a.eventSystem},b.run=function(){var a,c=b,d=c.behaviorTargetList,e=d.length,f=c.nodeHelper,g=c.behavior,h=c.animationEndEvent,i=c.after,j=0;for(j;e>j;j++)a=d[j],f.addClass(a,g),c.eventSystem.addEventListenerHelper(a,h,function(a){a.stopPropagation(),c.eventSystem.removeEventListenerHelper(a.target,a.type,arguments.callee),i?n.Util.isFunction(i)&&i(a,b):f.removeClass(a.target,g)})},b.init(a)},n.Parser={parse:function(a){return this.parseDeclaration(a)},parseDeclaration:function(a){var b,c,d=[];b=a.split(";");var e=b.length,f=0;for(f;e>f;f++)c=this.parseSentence(b[f]),d.push(c);return d},parseSentence:function(a){var b,c,d={};b=a.split(",");var e=b.length,f=0;for(f;e>f;f++)c=this.parseDefinition(b[f]),d[c.key]=c.value;return d},parseDefinition:function(a){var b,c,d,e={},j="event",k="eventTarget",l="behavior",m="behaviorTarget";return b=a.split(":"),b.length>1&&(c=b[0].trim(),c===f?c=j:c===g?c=k:c===h?c=l:c===i&&(c=m),e.key=c,b.length>2?(d=b.slice(1),d=d.join(":"),d=d.trim()):d=b[1].trim(),e.value=d),e}},n.NodeHelper={addClass:function(a,b){b instanceof Array||(b=b.split(" "));for(var c=0,d=b.length;d>c;++c)b[c]&&!new RegExp(j+b[c]+k).test(a.className)&&(a.className=a.className.trim()+" "+b[c])},removeClass:function(a,b){b instanceof Array||(b=b.split(" "));for(var c=0,d=b.length;d>c;++c)a.className=a.className.replace(new RegExp(j+b[c]+k)," ").trim()},hasClass:function(a,b){return b&&new RegExp(j+b+k).test(a.className)}},n.Util={isFunction:function(a){return!!(a&&a.constructor&&a.call&&a.apply)}},b.EventSystem={eventCollection:{},eventIdCounter:0,isEventTarget:function(a){return a.addEventListener?1:0},createEventTarget:function(){return new b.EventTarget},addEventListenerHelper:function(a,b,c){a.addEventListener(b,c,!1)},removeEventListenerHelper:function(a,b,c){a.removeEventListener(b,c)},purgeAll:function(){var a,b,c=this,d=c.eventCollection,e=Object.keys(d),f=e.length,g=0;for(g;f>g;g++)a=e[g],b=d[a],b&&b.handleCollection&&b.handleCollection.length>0&&c.purgeEventTarget(b.handleCollection[0].element),delete d[a]},purgeEventTarget:function(a){var b,c=this,d=a._aniJSEventID;if(d){b=c.eventCollection[d].handleCollection;var e,f=b.length,g=0;for(g;f>g;g++)e=b[g],c.removeEventListenerHelper(a,e.eventType,e.listener);c.eventCollection[d]=a._aniJSEventID=null,delete c.eventCollection[d],delete a._aniJSEventID}},registerEventHandle:function(a,b,c){var d=this,e=a._aniJSEventID,f=d.eventCollection,g={eventType:b,listener:c,element:a};if(e)f[e].handleCollection.push(g);else{var h={handleCollection:[g]};f[++d.eventIdCounter]=h,a._aniJSEventID=d.eventIdCounter}}},b.EventTarget=function(){this._listeners={}},b.EventTarget.prototype={constructor:b.EventTarget,addEventListener:function(a,b){var c=this;"undefined"==typeof c._listeners[a]&&(c._listeners[a]=[]),c._listeners[a].push(b)},dispatchEvent:function(a){var b=this;if("string"==typeof a&&(a={type:a}),a.target||(a.target=b),!a.type)throw new Error("Event object missing 'type' property.");if(this._listeners[a.type]instanceof Array)for(var c=b._listeners[a.type],d=0,e=c.length;e>d;d++)c[d].call(b,a)},removeEventListener:function(a,b){var c=this;if(c._listeners[a]instanceof Array)for(var d=c._listeners[a],e=0,f=d.length;f>e;e++)if(d[e]===b){d.splice(e,1);break}}},b}(c||{});return c.init(),c.run(),"function"==typeof define&&define.amd&&define("anijs",[],function(){return c}),"undefined"==typeof b&&(a.AniJS=c),c});