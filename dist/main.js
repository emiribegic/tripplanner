var Client=function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";async function i(t){t.preventDefault();let e=document.getElementById("city").value,n=document.getElementById("start").value,i=document.getElementById("end").value,o=new Date,a=new Date(n).getTime()-o.getTime(),d={startDate:n,endDate:i,diffInDays:Math.round(a/864e5)};console.log("::: Form Submitted :::"),console.log("Fetching geographical data from geonames:",{city:e});let r={},c={},s={};const l=await fetch("http://localhost:8081/city",{method:"POST",credentials:"same-origin",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({city:e})});try{const t=await l.json();r={city:t.geonames[0].name,country:t.geonames[0].countryName,lat:t.geonames[0].lat,lon:t.geonames[0].lng},console.log("Data received from geonames:",r)}catch(t){console.log("error",t)}console.log("Fetching weather data from weatherbit:",{cityLatLon:r});const m=await fetch("http://localhost:8081/weather",{method:"POST",credentials:"same-origin",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});try{c=await m.json(),console.log("Data received from weatherbit:",c)}catch(t){console.log("error",t)}console.log("Fetching a pic from pixabay:",{city:c.city_name});const u=await fetch("http://localhost:8081/pic",{method:"POST",credentials:"same-origin",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({city:c.city_name})});try{s=await u.json(),console.log("Data received from pixabay:",s)}catch(t){console.log("error",t)}document.getElementById("container").innerHTML=Client.updateUI(d,s,r,c)}function o(t,e,n,i){return`\n            <section id="dest_img">\n                <img src="${e.hits[0].webformatURL}" alt="">\n            </section>\n            <section id="dest_info">\n                <P>in ${t.diffInDays} days</P>\n                <h2>Your trip to: ${n.city}, ${n.country}</h2>\n                <h3>Dates: ${t.startDate} to ${t.endDate}</h3>\n            </section>\n            <section id="dest_weather">\n                <div id="card one">\n                    <div id="date">${i.data[0].datetime}</div>\n                    <div id="icon"><img src="../img/${i.data[0].weather.icon}.png" alt="${i.data[0].weather.description}"></div>\n                    <div id="temp">${i.data[0].max_temp}° | ${i.data[0].min_temp}°</div>\n                    <div id="pop">${i.data[0].pop}%</div>\n                </div>\n                <div id="card two">\n                    <div id="date">${i.data[1].datetime}</div>\n                    <div id="icon"><img src="../img/${i.data[1].weather.icon}.png" alt="${i.data[1].weather.description}"></div>\n                    <div id="temp">${i.data[1].max_temp}° | ${i.data[1].min_temp}°</div>\n                    <div id="pop">${i.data[1].pop}%</div>\n                </div>\n                <div id="card three">\n                    <div id="date">${i.data[2].datetime}</div>\n                    <div id="icon"><img src="../img/${i.data[2].weather.icon}.png" alt="${i.data[2].weather.description}"></div>\n                    <div id="temp">${i.data[2].max_temp}° | ${i.data[2].min_temp}°</div>\n                    <div id="pop">${i.data[2].pop}%</div>\n                </div>\n            </section>\n            `}n.r(e),n.d(e,"handleSubmit",(function(){return i})),n.d(e,"updateUI",(function(){return o}));n(0),n(1),n(2),n(3),n(4)}]);