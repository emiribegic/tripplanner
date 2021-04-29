import 'regenerator-runtime/runtime';
import { updateUI } from './updateUI';

const handleSubmit = async event => {
	event.preventDefault();
	// check what text was put into the form field
	const cityName = document.getElementById('city').value;

	// calculate how many days till trip departure
	// ref: https://www.geeksforgeeks.org/how-to-calculate-the-number-of-days-between-two-dates-in-javascript/
	// ref: https://www.w3resource.com/javascript/object-property-method/date.php
	const startDate = document.getElementById('start').value;
	const endDate = document.getElementById('end').value;
	const today = new Date();
	const tripStart = new Date(startDate);
	const tripEnd = new Date(endDate);
	const diffInTime = tripStart.getTime() - today.getTime();
	// rounded up to the nearest integer (ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round)
	const diffInDays = Math.round(diffInTime / (1000 * 3600 * 24));
	// put dates in object to be accessible from everywhere
	const dates = { startDate, endDate, diffInDays };

	// alert if a user submit without entering values
	if (cityName === '') {
		alert('Please enter a city name.');
		return;
	}

	// check if a user enter a valid date
	if (tripStart < today || tripEnd < tripStart) {
		alert(
			'Invalid date: either you select past date as start date or set end date earlier than start date.'
		);
		return;
	}

	console.log('::: Form Submitted :::');

	// to make each fetched data be accessible from everywhere
	let cityLatLon = {};
	let receivedWeatherInJson = {};
	let receivedPicInJson = {};

	console.log('Fetching geographical data from geonames:', {
		city: cityName,
	});

	// これは{city: cityName}をjson形式でserverに送るアクション
	// url,の後ろはoption, how to send post to the client, using POST methodとか
	const resGeo = await fetch('/city', {
		method: 'POST',
		credentials: 'same-origin',
		mode: 'cors',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ city: cityName }),
	});
	try {
		const receivedGeoInJson = await resGeo.json(); // receive res from the server side and transform into json
		cityLatLon = {
			city: receivedGeoInJson.geonames[0].name,
			country: receivedGeoInJson.geonames[0].countryName,
			lat: receivedGeoInJson.geonames[0].lat,
			lon: receivedGeoInJson.geonames[0].lng,
		};
		console.log('Data received from geonames:', cityLatLon);
		// return cityLatLon; //this will end implementation here
	} catch (err) {
		console.error(err);
	}

	console.log('Fetching weather data from weatherbit:', { cityLatLon });

	// これはcityLatLonをjson形式でserverに送るアクション
	const resWeather = await fetch('/weather', {
		method: 'POST',
		credentials: 'same-origin',
		mode: 'cors',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(cityLatLon),
	});
	try {
		receivedWeatherInJson = await resWeather.json();
		console.log('Data received from weatherbit:', receivedWeatherInJson);

		// return receivedWeatherInJson;
	} catch (err) {
		console.error(err);
	}

	console.log('Fetching a pic from pixabay:', { cityLatLon });

	// これはcityLatLonをjson形式でserverに送るアクション
	const resPic = await fetch('/pic', {
		method: 'POST',
		credentials: 'same-origin',
		mode: 'cors',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(cityLatLon),
	});
	try {
		receivedPicInJson = await resPic.json();
		console.log('Data received from pixabay:', receivedPicInJson);

		// return receivedPicInJson;
	} catch (err) {
		console.error(err);
	}

	const trip = document.getElementById('trip');
	trip.innerHTML = updateUI(
		dates,
		receivedPicInJson,
		cityLatLon,
		receivedWeatherInJson
	);
};

export { handleSubmit };
