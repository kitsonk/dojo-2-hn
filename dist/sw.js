var __wpo = {"assets":{"main":["./","./src/widgets/Comments.js","./src/main.js","./main.css","./widgets/styles/app.m.css","./widgets/styles/article.m.css","./widgets/styles/comment.m.css","./widgets/styles/comments.m.css","./widgets/styles/content.m.css","./widgets/styles/loading.m.css","./widgets/styles/menu.m.css","./widgets/styles/menuItem.m.css","./img/logo.svg","./img/hn.ico"],"additional":[],"optional":["./img/hn.png"]},"externals":[],"hashesMap":{"0895e12bafe21c2bb4a1b8763ab09a2f94593bbe":"./src/widgets/Comments.js","29ab7737a078ba423a1bbfd4f94a435c97191f5a":"./src/main.js","d4e2d1f1db2070d1fc11ea4fe8c352f2c49d55a6":"./img/hn.ico","2d301810a492f10a8f236eae12162ad478f54705":"./img/hn.png","29a2a9dfbd04d9b28b7fa2c3dbd595e732951ecb":"./img/logo.svg","e038e970358c91c0006dfccc4d26489a7cb1f5c4":"./","8d59743eab6f0cc1f7112b6270afab7a357c57b5":"./main.css","8f8c04a2dc0f0522edee88483f42ef94358d30a6":"./widgets/styles/app.m.css","9e09ad4fd6492bf6c013fa55d707f21ef554f8b1":"./widgets/styles/article.m.css","cf32364497ecd6d6b9511a5282dc3a33fe205648":"./widgets/styles/comment.m.css","2f516f76d369752047476bd5b3b467a9605aba0d":"./widgets/styles/comments.m.css","6304b7996770c412f6114758c83eb1860e60289b":"./widgets/styles/content.m.css","8a8c6924801a479ec76f64bb0684e0849a3bc9fe":"./widgets/styles/loading.m.css","b99a442fa6f46f30254b89da55598bf09de72365":"./widgets/styles/menu.m.css","383ea749e68b83474c09b76a512588142862040f":"./widgets/styles/menuItem.m.css"},"strategy":"changed","responseStrategy":"cache-first","version":"9/28/2017, 8:46:57 PM","name":"webpack-offline","pluginVersion":"4.8.4","relativePaths":true};

/*!
 * 
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=5)}([function(e,t,n){"use strict";function r(e,t){t=t||{},(t.debug||v.debug)&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||v.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||v.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||v.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=a.bind(null,e,t,n);d=d?d.then(r):r()}function a(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,a=n.name,s=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),m.getDb(a).then(function(e){return m.setTimestampForUrl(e,o,s)}).then(function(e){return m.expireEntries(e,c,i,s)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function s(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||l(e),v.preCacheItems=v.preCacheItems.concat(e)}function l(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function p(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){if(new Date(r).getTime()+1e3*t<n)return!1}}return!0}var d,v=n(1),m=n(8);e.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:s,cache:u,uncache:f,precache:h,validatePrecacheInput:l,isResponseFresh:p}},function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,e.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=n(10),i=n(0),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){new RegExp(r.value[0]).test(t)&&o.push(r.value[1]),r=n.next()}return o},a=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){a.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),a.prototype.add=function(e,t,n,c){c=c||{};var a;t instanceof RegExp?a=RegExp:(a=c.origin||self.location.origin,a=a instanceof RegExp?a.source:r(a)),e=e.toLowerCase();var s=new o(e,t,n,c);this.routes.has(a)||this.routes.set(a,new Map);var u=this.routes.get(a);u.has(e)||u.set(e,new Map);var f=u.get(e),h=s.regexp||s.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,s)},a.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},a.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var a=c(i,n);if(a.length>0)return a[0].makeHandler(n)}}return null},a.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},e.exports=new a},function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=n(1),i=n(0);e.exports=r},function(e,t,n){var r=n(16),o=[{method:"get",path:"/*",origin:"https://api.hackerwebapp.com",strategy:"cacheFirst"}]||[],i={cacheFirst:r.cacheFirst,networkFirst:r.networkFirst,fastest:r.fastest,cacheOnly:r.cacheOnly,networkOnly:r.networkOnly};o.forEach(function(e){var t=e.method,n=e.path,o=e.strategy,c=e.origin,a={};c&&(a.origin=c),r.router[t](n,i[o],a)})},function(e,t,n){"use strict";function r(e,t){return caches.match(e,{cacheName:t}).then(function(n){return c()?n:a(n).then(function(n){return caches.open(t).then(function(t){return t.put(e,n)}).then(function(){return n})})}).catch(function(){})}function o(e,t){return e+(-1!==e.indexOf("?")?"&":"?")+"__uncache="+encodeURIComponent(t)}function i(e){return"navigate"===e.mode||e.headers.get("Upgrade-Insecure-Requests")||-1!==(e.headers.get("Accept")||"").indexOf("text/html")}function c(e){return!e||!e.redirected||!e.ok||"opaqueredirect"===e.type}function a(e){return c(e)?Promise.resolve(e):("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status})})}function s(e){return Object.keys(e).reduce(function(t,n){return t[n]=e[n],t},{})}function u(e,t){console.groupCollapsed("[SW]:",e),t.forEach(function(e){console.log("Asset:",e)}),console.groupEnd()}if(function(){var e=ExtendableEvent.prototype.waitUntil,t=FetchEvent.prototype.respondWith,n=new WeakMap;ExtendableEvent.prototype.waitUntil=function(t){var r=this,o=n.get(r);return o?void o.push(Promise.resolve(t)):(o=[Promise.resolve(t)],n.set(r,o),e.call(r,Promise.resolve().then(function e(){var t=o.length;return Promise.all(o.map(function(e){return e.catch(function(){})})).then(function(){return o.length!=t?e():(n.delete(r),Promise.all(o))})})))},FetchEvent.prototype.respondWith=function(e){return this.waitUntil(e),t.call(this,e)}}(),void 0===f)var f=!1;!function(e,t){function n(){if(!S.additional.length)return Promise.resolve();f&&console.log("[SW]:","Caching additional");var e=void 0;return e="changed"===R?h("additional"):c("additional"),e.catch(function(e){console.error("[SW]:","Cache section `additional` failed to load")})}function c(t){var n=S[t];return caches.open($).then(function(t){return w(t,n,{bust:e.version,request:e.prefetchRequest})}).then(function(){u("Cached assets: "+t,n)}).catch(function(e){throw console.error(e),e})}function h(t){return p().then(function(n){if(!n)return c(t);var r=n[0],o=n[1],i=n[2],a=i.hashmap,s=i.version;if(!i.hashmap||s===e.version)return c(t);var f=Object.keys(a).map(function(e){return a[e]}),h=o.map(function(e){var t=new URL(e.url);return t.search="",t.hash="",t.toString()}),l=S[t],p=[],d=l.filter(function(e){return-1===h.indexOf(e)||-1===f.indexOf(e)});Object.keys(P).forEach(function(e){var t=P[e];if(-1!==l.indexOf(t)&&-1===d.indexOf(t)&&-1===p.indexOf(t)){var n=a[e];n&&-1!==h.indexOf(n)?p.push([n,t]):d.push(t)}}),u("Changed assets: "+t,d),u("Moved assets: "+t,p);var v=Promise.all(p.map(function(e){return r.match(e[0]).then(function(t){return[e[1],t]})}));return caches.open($).then(function(t){var n=v.then(function(e){return Promise.all(e.map(function(e){return t.put(e[0],e[1])}))});return Promise.all([n,w(t,d,{bust:e.version,request:e.prefetchRequest})])})})}function l(){return caches.keys().then(function(e){var t=e.map(function(e){if(0===e.indexOf(L)&&0!==e.indexOf($))return console.log("[SW]:","Delete cache:",e),caches.delete(e)});return Promise.all(t)})}function p(){return caches.keys().then(function(e){for(var t=e.length,n=void 0;t--&&(n=e[t],0!==n.indexOf(L)););if(n){var r=void 0;return caches.open(n).then(function(e){return r=e,e.match(new URL(q,location).toString())}).then(function(e){if(e)return Promise.all([r,r.keys(),e.json()])})}})}function d(){return caches.open($).then(function(t){var n=new Response(JSON.stringify({version:e.version,hashmap:P}));return t.put(new URL(q,location).toString(),n)})}function v(e,t,n){return r(n,$).then(function(r){return r?(f&&console.log("[SW]:","URL ["+n+"]("+t+") from cache"),r):fetch(e.request).then(function(r){return r.ok?(f&&console.log("[SW]:","URL ["+t+"] from network"),n===t&&function(){var n=r.clone(),o=caches.open($).then(function(e){return e.put(t,n)}).then(function(){console.log("[SW]:","Cache asset: "+t)});e.waitUntil(o)}(),r):(f&&console.log("[SW]:","URL ["+t+"] wrong response: ["+r.status+"] "+r.type),r)})})}function m(e,t,n){return fetch(e.request).then(function(e){if(e.ok)return f&&console.log("[SW]:","URL ["+t+"] from network"),e;throw new Error("Response is not ok")}).catch(function(){return f&&console.log("[SW]:","URL ["+t+"] from cache if possible"),r(n,$)})}function g(e){return e.catch(function(){}).then(function(e){var t=e&&e.ok,n=e&&"opaqueredirect"===e.type;return t||n&&!F?e:(f&&console.log("[SW]:","Loading navigation fallback ["+T+"] from cache"),r(T,$))})}function w(e,t,n){var r=!1!==n.allowLoaders,i=n&&n.bust,c=n.request||{credentials:"omit",mode:"cors"};return Promise.all(t.map(function(e){return i&&(e=o(e,i)),fetch(e,c).then(a)})).then(function(o){if(o.some(function(e){return!e.ok}))return Promise.reject(new Error("Wrong response status"));var i=[],c=o.map(function(n,o){return r&&i.push(x(t[o],n)),e.put(t[o],n)});return i.length?function(){var r=s(n);r.allowLoaders=!1;var o=c;c=Promise.all(i).then(function(n){var i=[].concat.apply([],n);return t.length&&(o=o.concat(w(e,i,r))),Promise.all(o)})}():c=Promise.all(c),c})}function x(e,t){var n=Object.keys(O).map(function(n){if(-1!==O[n].indexOf(e)&&b[n])return b[n](t.clone())}).filter(function(e){return!!e});return Promise.all(n).then(function(e){return[].concat.apply([],e)})}function y(e){var t=e.url,n=new URL(t),r=void 0;r="navigate"===e.mode?"navigate":n.origin===location.origin?"same-origin":"cross-origin";for(var o=0;o<E.length;o++){var i=E[o];if(i&&(!i.requestTypes||-1!==i.requestTypes.indexOf(r))){var c=void 0;if((c="function"==typeof i.match?i.match(n,e):t.replace(i.match,i.to))&&c!==t)return c}}}var b=t.loaders,E=t.cacheMaps,R=e.strategy,k=e.responseStrategy,S=e.assets,O=e.loaders||{},P=e.hashesMap,U=e.externals,L=e.name,C=e.version,$=L+":"+C,q="__offline_webpack__data";!function(){Object.keys(S).forEach(function(e){S[e]=S[e].map(function(e){var t=new URL(e,location);return t.hash="",-1===U.indexOf(e)&&(t.search=""),t.toString()})}),Object.keys(O).forEach(function(e){O[e]=O[e].map(function(e){var t=new URL(e,location);return t.hash="",-1===U.indexOf(e)&&(t.search=""),t.toString()})}),P=Object.keys(P).reduce(function(e,t){var n=new URL(P[t],location);return n.search="",n.hash="",e[t]=n.toString(),e},{}),U=U.map(function(e){var t=new URL(e,location);return t.hash="",t.toString()})}();var A=[].concat(S.main,S.additional,S.optional),T=e.navigateFallbackURL,F=e.navigateFallbackForRedirects;self.addEventListener("install",function(e){console.log("[SW]:","Install event");var t=void 0;t="changed"===R?h("main"):c("main"),e.waitUntil(t)}),self.addEventListener("activate",function(e){console.log("[SW]:","Activate event");var t=n();t=t.then(d),t=t.then(l),t=t.then(function(){if(self.clients&&self.clients.claim)return self.clients.claim()}),e.waitUntil(t)}),self.addEventListener("fetch",function(e){var t=new URL(e.request.url);t.hash="";var n=t.toString();-1===U.indexOf(n)&&(t.search="",n=t.toString());var r="GET"===e.request.method,o=-1!==A.indexOf(n),c=n;if(!o){var a=y(e.request);a&&(c=a,o=!0)}if(!o&&r&&T&&i(e.request))return void e.respondWith(g(fetch(e.request)));if(!o||!r)return void(t.origin!==location.origin&&-1!==navigator.userAgent.indexOf("Firefox/44.")&&e.respondWith(fetch(e.request)));var s=void 0;s="network-first"===k?m(e,n,c):v(e,n,c),T&&i(e.request)&&(s=g(s)),e.respondWith(s)}),self.addEventListener("message",function(e){var t=e.data;if(t)switch(t.action){case"skipWaiting":self.skipWaiting&&self.skipWaiting()}})}(__wpo,{loaders:{},cacheMaps:[]}),e.exports=n(4)},function(e,t){e.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},function(e,t){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){r.result.createObjectStore(h,{keyPath:l}).createIndex(p,p,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite");i.objectStore(h).put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],a=e.transaction(h,"readwrite"),s=a.objectStore(h);s.index(p).openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[p]){var r=t.value[l];c.push(r),s.delete(r),t.continue()}},a.oncomplete=function(){r(c)},a.onabort=o}):Promise.resolve([])}function a(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),a=c.index(p),s=a.count();a.count().onsuccess=function(){var e=s.result;e>t&&(a.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[l];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function s(e,t,n,r){return c(e,n,r).then(function(n){return a(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",l="url",p="timestamp",d={};e.exports={getDb:o,setTimestampForUrl:i,expireEntries:s}},function(e,t,n){"use strict";function r(e){var t=s.match(e.request);t?e.respondWith(t(e.request)):s.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(s.default(e.request))}function o(e){a.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(a.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";a.debug("install event fired"),a.debug("creating cache ["+t+"]"),e.waitUntil(a.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(a.validatePrecacheInput).then(function(t){return a.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}n(7);var a=n(0),s=n(2),u=n(1);e.exports={fetchListener:r,activateListener:o,installListener:c}},function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=n(17),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},e.exports=c},function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=n(1),i=n(0);e.exports=r},function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var a=!1,s=[],u=function(e){s.push(e.toString()),a?c(new Error('Both cache and network failed: "'+s.join('", "')+'"')):a=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=n(0),i=n(3);e.exports=r},function(e,t,n){e.exports={networkOnly:n(15),networkFirst:n(14),cacheOnly:n(3),cacheFirst:n(11),fastest:n(12)}},function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var a,s,u=[];if(c){var f=new Promise(function(r){a=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),a=t.maxAgeSeconds;i.isResponseFresh(e,a,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(a&&clearTimeout(a),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),s=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(s)return s;throw r})});return u.push(h),Promise.race(u)})}var o=n(1),i=n(0);e.exports=r},function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=n(0);e.exports=r},function(e,t,n){"use strict";var r=n(1),o=n(2),i=n(0),c=n(13),a=n(9);i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",a.installListener),self.addEventListener("activate",a.activateListener),self.addEventListener("fetch",a.fetchListener),e.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",a=t&&t.delimiter||"/";null!=(n=w.exec(e));){var f=n[0],h=n[1],l=n.index;if(c+=e.slice(i,l),i=l+f.length,h)c+=h[1];else{var p=e[i],d=n[2],v=n[3],m=n[4],g=n[5],x=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=p&&p!==d,E="+"===x||"*"===x,R="?"===x||"*"===x,k=n[2]||a,S=m||g;r.push({name:v||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:S?u(S):y?".*":"[^"+s(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return a(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function a(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",a=n||{},s=r||{},u=s.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var l,p=a[h.name];if(null==p){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(g(p)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<p.length;d++){if(l=u(p[d]),!t[f].test(l))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(l)+"`");o+=(0===d?h.prefix:h.delimiter)+l}}else{if(l=h.asterisk?c(p):u(p),!t[f].test(l))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+l+'"');o+=h.prefix+l}}else o+=h}return o}}function s(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function l(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function p(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(m(e[o],t,n).source);return f(new RegExp("(?:"+r.join("|")+")",h(n)),t)}function d(e,t,n){return v(r(e,n),t,n)}function v(e,t,n){g(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=!1!==n.end,i="",c=0;c<e.length;c++){var a=e[c];if("string"==typeof a)i+=s(a);else{var u=s(a.prefix),l="(?:"+a.pattern+")";t.push(a),a.repeat&&(l+="(?:"+u+l+")*"),l=a.optional?a.partial?u+"("+l+")?":"(?:"+u+"("+l+"))?":u+"("+l+")",i+=l}}var p=s(n.delimiter||"/"),d=i.slice(-p.length)===p;return r||(i=(d?i.slice(0,-p.length):i)+"(?:"+p+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+p+"|$)",f(new RegExp("^"+i,h(n)),t)}function m(e,t,n){return g(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?l(e,t):g(e)?p(e,t,n):d(e,t,n)}var g=n(6);e.exports=m,e.exports.parse=r,e.exports.compile=o,e.exports.tokensToFunction=a,e.exports.tokensToRegExp=v;var w=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")}]);