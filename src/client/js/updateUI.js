// export function updateUI(days, img, dest, weather) {
// 	return `
// 		<li class="dest__card">
// 			<div class="dest__img">
// 				<img src="${img.hits[0].webformatURL}" alt="">
// 			</div>
// 			<div class="dest__meta">
// 				<span class="dest__countdown">
// 					in ${days.diffInDays > 0 ? days.diffInDays : 0} days
// 				</span>
// 				<div class="dest__city">
// 					<span>Your Trip To:</span>
// 					<span>${dest.city}, ${dest.country}</span>
// 				</div>
// 				<div class="dest__date">
// 					<span>Dates:</span>
// 					<span>${days.startDate} to ${days.endDate}</span>
// 				</div>
// 				<span class="dest__forecast">
// 					3-Day Weather Forecast:
// 				</span>
// 				<ul class="dest__weather">
// 					<li class="dest__3day">
// 						<div class="dest__3day-date">${weather.data[0].datetime}</div>
// 						<div class="icon dest__3day-icon"><img src="../media/${
// 							weather.data[0].weather.icon
// 						}.png"
// 								alt="${weather.data[0].weather.description}"></div>
// 						<div class="dest__3day-temp">H:${weather.data[0].max_temp}° | L:${
// 		weather.data[0].min_temp
// 	}°</div>
// 						<div class="dest__3day-pop">${weather.data[0].pop}%</div>
// 					</li>
// 					<li class="dest__3day">
// 						<div class="dest__3day-date">${weather.data[1].datetime}</div>
// 						<div class="icon dest__3day-icon"><img src="../media/${
// 							weather.data[1].weather.icon
// 						}.png"
// 								alt="${weather.data[1].weather.description}"></div>
// 						<div class="dest__3day-temp">H:${weather.data[1].max_temp}° | L:${
// 		weather.data[1].min_temp
// 	}°</div>
// 						<div class="dest__3day-pop">${weather.data[1].pop}%</div>
// 					</li>
// 					<li class="dest__3day">
// 						<div class="dest__3day-date">${weather.data[2].datetime}</div>
// 						<div class="icon dest__3day-icon"><img src="../media/${
// 							weather.data[2].weather.icon
// 						}.png"
// 								alt="${weather.data[2].weather.description}"></div>
// 						<div class="dest__3day-temp">H:${weather.data[2].max_temp}° | L:${
// 		weather.data[2].min_temp
// 	}°</div>
// 						<div class="dest__3day-pop">${weather.data[2].pop}%</div>
// 					</li>
// 				</ul>
// 			</div>
// 		</li>
// 	`;
// }
