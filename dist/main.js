(()=>{var t={666:t=>{var e=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function d(t,e,n,r){var a=e&&e.prototype instanceof y?e:y,o=Object.create(a.prototype),i=new T(r||[]);return o._invoke=function(t,e,n){var r=u;return function(a,o){if(r===f)throw new Error("Generator is already running");if(r===p){if("throw"===a)throw o;return S()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=j(i,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===u)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var s=l(t,e,n);if("normal"===s.type){if(r=n.done?p:h,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=p,n.method="throw",n.arg=s.arg)}}}(t,n,i),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=d;var u="suspendedStart",h="suspendedYield",f="executing",p="completed",v={};function y(){}function m(){}function g(){}var _={};_[o]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w(k([])));x&&x!==n&&r.call(x,o)&&(_=x);var b=g.prototype=y.prototype=Object.create(_);function L(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function n(a,o,i,c){var s=l(t[a],t,o);if("throw"!==s.type){var d=s.arg,u=d.value;return u&&"object"==typeof u&&r.call(u,"__await")?e.resolve(u.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(u).then((function(t){d.value=t,i(d)}),(function(t){return n("throw",t,i,c)}))}c(s.arg)}var a;this._invoke=function(t,r){function o(){return new e((function(e,a){n(t,r,e,a)}))}return a=a?a.then(o,o):o()}}function j(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,j(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var a=l(r,t.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var o=a.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function D(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(D,this),this.reset(!0)}function k(t){if(t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function n(){for(;++a<t.length;)if(r.call(t,a))return n.value=t[a],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:S}}function S(){return{value:e,done:!0}}return m.prototype=b.constructor=g,g.constructor=m,m.displayName=s(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},L(E.prototype),E.prototype[i]=function(){return this},t.AsyncIterator=E,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new E(d(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(b),s(b,c,"Generator"),b[o]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=k,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function a(r,a){return c.type="throw",c.arg=t,n.next=r,a&&(n.method="next",n.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),d=r.call(i,"finallyLoc");if(s&&d){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!d)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;O(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:k(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}(()=>{"use strict";n(666);function t(t,e,n,r,a,o,i){try{var c=t[o](i),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,a)}var e=function(t){var e=t.getFullYear(),n=t.getMonth(),r=t.getDate();return new Date(e,n,r).getTime()},r=function(){var n,r=(n=regeneratorRuntime.mark((function t(n){var r,a,o,i,c,s,d,l,u,h,f,p,v,y,m,g,_,w;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=document.getElementById("city").value,a=document.getElementById("start").value,o=document.getElementById("end").value,i=new Date,c=new Date(a),console.log(a),console.log(i),console.log(c),s=new Date(o),d=c.getTime()-i.getTime(),l=Math.round(d/864e5),u={startDate:a,endDate:o,diffInDays:l},console.log(u),""!==r){t.next=17;break}return alert("Please enter a city name."),t.abrupt("return");case 17:if(!(e(c)<e(i)||e(s)<e(c))){t.next=20;break}return alert("Invalid date: either you select past date as start date or set end date earlier than start date."),t.abrupt("return");case 20:return h={},f={},p={},console.log("Fetching geographical data from geonames:",{city:r}),t.next=26,fetch("/city",{method:"POST",credentials:"same-origin",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({city:r})});case 26:return v=t.sent,t.prev=27,t.next=30,v.json();case 30:y=t.sent,h={city:y.geonames[0].name,country:y.geonames[0].countryName,lat:y.geonames[0].lat,lon:y.geonames[0].lng},console.log("Data received from geonames:",h),t.next=38;break;case 35:t.prev=35,t.t0=t.catch(27),console.error(t.t0);case 38:return console.log("Fetching weather data from weatherbit:",{cityLatLon:h}),t.next=41,fetch("/weather",{method:"POST",credentials:"same-origin",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(h)});case 41:return m=t.sent,t.prev=42,t.next=45,m.json();case 45:f=t.sent,console.log("Data received from weatherbit:",f),t.next=52;break;case 49:t.prev=49,t.t1=t.catch(42),console.error(t.t1);case 52:return console.log("Fetching a pic from pixabay:",{cityLatLon:h}),t.next=55,fetch("/pic",{method:"POST",credentials:"same-origin",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(h)});case 55:return g=t.sent,t.prev=56,t.next=59,g.json();case 59:p=t.sent,console.log("Data received from pixabay:",p),t.next=66;break;case 63:t.prev=63,t.t2=t.catch(56),console.error(t.t2);case 66:_=document.querySelector(".dest__list"),x=u,b=h,L=f,w='\n\t\t<li class="dest__card">\n\t\t\t<div class="dest__img">\n\t\t\t\t<img src="'.concat(p.hits[0].webformatURL,'" alt="">\n\t\t\t</div>\n\t\t\t<div class="dest__meta">\n\t\t\t\t<span class="dest__countdown">\n\t\t\t\t\tin ').concat(x.diffInDays>0?x.diffInDays:0,' days\n\t\t\t\t</span>\n\t\t\t\t<div class="dest__city">\n\t\t\t\t\t<span>Your Trip To:</span>\n\t\t\t\t\t<span>').concat(b.city,", ").concat(b.country,'</span>\n\t\t\t\t</div>\n\t\t\t\t<div class="dest__date">\n\t\t\t\t\t<span>Dates:</span>\n\t\t\t\t\t<span>').concat(x.startDate," to ").concat(x.endDate,'</span>\n\t\t\t\t</div>\n\t\t\t\t<span class="dest__forecast">\n\t\t\t\t\t3-Day Weather Forecast:\n\t\t\t\t</span>\n\t\t\t\t<ul class="dest__weather">\n\t\t\t\t\t<li class="dest__3day">\n\t\t\t\t\t\t<div class="dest__3day-date">').concat(L.data[0].datetime,'</div>\n\t\t\t\t\t\t<div class="icon dest__3day-icon"><img src="../media/').concat(L.data[0].weather.icon,'.png"\n\t\t\t\t\t\t\t\talt="').concat(L.data[0].weather.description,'"></div>\n\t\t\t\t\t\t<div class="dest__3day-temp">H:').concat(L.data[0].max_temp,"° | L:").concat(L.data[0].min_temp,'°</div>\n\t\t\t\t\t\t<div class="dest__3day-pop">').concat(L.data[0].pop,'%</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class="dest__3day">\n\t\t\t\t\t\t<div class="dest__3day-date">').concat(L.data[1].datetime,'</div>\n\t\t\t\t\t\t<div class="icon dest__3day-icon"><img src="../media/').concat(L.data[1].weather.icon,'.png"\n\t\t\t\t\t\t\t\talt="').concat(L.data[1].weather.description,'"></div>\n\t\t\t\t\t\t<div class="dest__3day-temp">H:').concat(L.data[1].max_temp,"° | L:").concat(L.data[1].min_temp,'°</div>\n\t\t\t\t\t\t<div class="dest__3day-pop">').concat(L.data[1].pop,'%</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class="dest__3day">\n\t\t\t\t\t\t<div class="dest__3day-date">').concat(L.data[2].datetime,'</div>\n\t\t\t\t\t\t<div class="icon dest__3day-icon"><img src="../media/').concat(L.data[2].weather.icon,'.png"\n\t\t\t\t\t\t\t\talt="').concat(L.data[2].weather.description,'"></div>\n\t\t\t\t\t\t<div class="dest__3day-temp">H:').concat(L.data[2].max_temp,"° | L:").concat(L.data[2].min_temp,'°</div>\n\t\t\t\t\t\t<div class="dest__3day-pop">').concat(L.data[2].pop,"%</div>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</li>\n\t"),_.insertAdjacentHTML("beforeend",w);case 69:case"end":return t.stop()}var x,b,L}),t,null,[[27,35],[42,49],[56,63]])})),function(){var e=this,r=arguments;return new Promise((function(a,o){var i=n.apply(e,r);function c(e){t(i,a,o,c,s,"next",e)}function s(e){t(i,a,o,c,s,"throw",e)}c(void 0)}))});return function(t){return r.apply(this,arguments)}}();document.getElementById("submit").addEventListener("click",r)})()})();