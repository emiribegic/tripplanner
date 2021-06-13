import Base from './base';

class Trip extends Base {
	_parentEl = document.querySelector('.trips__list');
	_errorMessage =
		'Oops, we could not find the city you entered, please try again!';

	_generateMarkup() {
		return this._generateTripCard(this._data);
	}

	_generateTripCard(trip) {
		return `
			<li class="trips__card">
				<div class="trips__image">
					<img src="${trip.pic.url}" alt="${trip.pic.alt}">
				</div>
				<div class="trips__content">
					<header class="trips__header">
						${trip.destination}<br>
						${trip.date.start}
					</header>
					<div class="trips__meta">
						<span class="trips__date">${trip.date.start}</span>
						<span class="trips__countdown">${trip.date.countdown}</span>
					</div>
					<ul class="trips__weather">
						${trip.weather.map(this._generateWeatherData).join('')}
					</ul>
				</div>
			</li>
		`;
	}

	_generateWeatherData(forecast) {
		return `
			<li class="trips__forecast">
				<span class="trips__forecast-date">${forecast.date}</span>
				<div class="trips__forecast-icon">
					<img src="../../media/${forecast.icon}.png" alt="${forecast.description}">
				</div>
				<div class="trips__forecast-meta">
					<span class="trips__forecast-temp">
						${Math.round(forecast.high)}° / ${Math.round(forecast.low)}°
					</span>
					<div class="trips__forecast-pop">
						<i class="umbrella icon"></i>
						<span class="trips__forecast-high">${forecast.rain}%</span>
					</div>
				</div>
			</li>
		`;
	}
}

export default new Trip();
