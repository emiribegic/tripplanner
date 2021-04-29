const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8081;
const fetch = require('node-fetch');
const geoBaseURL = 'http://api.geonames.org/searchJSON?q';
const weatherBaseURL = 'https://api.weatherbit.io/v2.0/forecast/daily?';
const pixabayBaseURL = 'https://pixabay.com/api/?';
require('dotenv').config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(express.static('dist'));

// geonames (without JSON in URL, data will be sent as XML)
app.post('/city', async (req, res) => {
	try {
		const city = encodeURI(req.body.city);
		console.log(`Trip destination: ${city}`);

		const fetchGeo = await fetch(
			`${geoBaseURL}=${city}&maxRows=1&username=${process.env.USERNAME}`
		);
		const geoInJson = await fetchGeo.json();

		if (!fetchGeo.ok)
			throw new Error(`${geoInJson.message} (${fetechGeo.status})`);
		res.send(geoInJson);
	} catch (err) {
		console.error(err);
	}
});

// weatherbit
app.post('/weather', async (req, res) => {
	try {
		const lat = req.body.lat;
		const lon = req.body.lon;
		console.log(`Latitude: ${lat}, Longitude: ${lon}`);

		const fetchWeather = await fetch(
			`${weatherBaseURL}&lat=${lat}&lon=${lon}&days=3&key=${process.env.WKEY}`
		);
		const weatherInJson = await fetchWeather.json();

		if (!fetchWeather.ok)
			throw new Error(
				`${weatherInJson.message} (${fetchWeather.status})`
			);
		res.send(weatherInJson);
	} catch (err) {
		console.error(err);
	}
});

//pixabay
app.post('/pic', async (req, res) => {
	// remove whitespaces and replace it with '+'
	// ref: https://stackoverflow.com/questions/3794919/replace-all-spaces-in-a-string-with
	const cityName = encodeURI(req.body.city).replace('%20', '+');
	const countryName = encodeURI(req.body.country).replace('%20', '+');
	console.log(`Image search with a keyword: ${req.body.city}`);

	const fetchPic1 = await fetch(
		`${pixabayBaseURL}key=${process.env.PKEY}&q=${cityName}&image_type=photo&orientation=horizontal&per_page=3&pretty=true`
	);
	try {
		const picInJson1 = await fetchPic1.json();
		if (picInJson1.totalHits > 0) {
			res.send(picInJson1);
			console.log('Image found!');
		} else {
			console.log(
				`No image found, now search with a keyword: ${req.body.country}`
			);
			try {
				const fetchPic2 = await fetch(
					`${pixabayBaseURL}key=${process.env.PKEY}&q=${countryName}&image_type=photo&orientation=horizontal&per_page=3&pretty=true`
				);
				const picInJson2 = await fetchPic2.json();
				res.send(picInJson2);
				console.log('Image found!');
			} catch (err) {
				console.error(err);
			}
		}
	} catch (err) {
		console.error(err);
	}
});

app.listen(port, () => console.log(`Travel app listening on port ${port}!`));

// TODO Might delete later?
// module.exports = { app };
