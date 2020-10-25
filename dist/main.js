var Client=function(t){var e={};function n(i){if(e[i])return e[i].exports;var a=e[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(i,a,function(e){return t[e]}.bind(null,a));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";async function i(t){t.preventDefault();let e=document.getElementById("city").value,n=document.getElementById("start").value,i=document.getElementById("end").value,a=new Date,o=new Date(n).getTime()-a.getTime(),d={startDate:n,endDate:i,diffInDays:Math.round(o/864e5)};console.log("::: Form Submitted :::"),console.log("Fetching geographical data from geonames:",{city:e});let r={},c={},s={};const l=await fetch("http://localhost:8081/city",{method:"POST",credentials:"same-origin",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({city:e})});try{const t=await l.json();r={city:t.geonames[0].name,country:t.geonames[0].countryName,lat:t.geonames[0].lat,lon:t.geonames[0].lng},console.log("Data received from geonames:",r)}catch(t){console.log("error",t)}console.log("Fetching weather data from weatherbit:",{cityLatLon:r});const p=await fetch("http://localhost:8081/weather",{method:"POST",credentials:"same-origin",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});try{c=await p.json(),console.log("Data received from weatherbit:",c)}catch(t){console.log("error",t)}console.log("Fetching a pic from pixabay:",{cityLatLon:r});const m=await fetch("http://localhost:8081/pic",{method:"POST",credentials:"same-origin",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});try{s=await m.json(),console.log("Data received from pixabay:",s)}catch(t){console.log("error",t)}const u=document.querySelector("main"),v=document.createElement("section");v.setAttribute("id","trip"),v.innerHTML=Client.updateUI(d,s,r,c),u.appendChild(v)}function a(t,e,n,i){return`\n            <div id="dest_img">\n                <img src="${e.hits[0].webformatURL}" alt="">\n            </div>\n            <div id="dest_countdown">\n                in ${t.diffInDays} days\n            </div>\n            <div id="destination">\n                <p>Your Trip To:</p>\n                <h3>${n.city}, ${n.country}</h3>\n            </div>\n            <div id="dest_date">\n                <p>Dates:</p>\n                <h4>${t.startDate} To ${t.endDate}</h4>\n            </div>\n            <div id="forecast">\n                <p>3-Day Weather Forecast:</p>\n            </div>\n\n            <div id="dest_weather">\n                <div id="card">\n                    <div id="date">${i.data[0].datetime}</div>\n                    <div id="icon"><img src="../media/${i.data[0].weather.icon}.png" alt="${i.data[0].weather.description}"></div>\n                    <div id="temp">H:${i.data[0].max_temp}° | L:${i.data[0].min_temp}°</div>\n                    <div id="pop">${i.data[0].pop}%</div>\n                </div>\n                <div id="card">\n                    <div id="date">${i.data[1].datetime}</div>\n                    <div id="icon"><img src="../media/${i.data[1].weather.icon}.png" alt="${i.data[1].weather.description}"></div>\n                    <div id="temp">H:${i.data[1].max_temp}° | L:${i.data[1].min_temp}°</div>\n                    <div id="pop">${i.data[1].pop}%</div>\n                </div>\n                <div id="card">\n                    <div id="date">${i.data[2].datetime}</div>\n                    <div id="icon"><img src="../media/${i.data[2].weather.icon}.png" alt="${i.data[2].weather.description}"></div>\n                    <div id="temp">H:${i.data[2].max_temp}° | L:${i.data[2].min_temp}°</div>\n                    <div id="pop">${i.data[2].pop}%</div>\n                </div>\n            </div>\n            `}n.r(e),n.d(e,"handleSubmit",(function(){return i})),n.d(e,"updateUI",(function(){return a}));n(0),n(1),n(2),n(3)}]);