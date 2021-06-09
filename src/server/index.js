require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8081;
const mongodb = process.env.MONGO;
const mongoose = require('mongoose');
mongoose
	.connect(mongodb, {
		useNewUrlParser: true,
		autoIndex: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('Connected to database');
		app.listen(port, () =>
			console.log(`Travel app listening on port ${port}`)
		);
	})
	.catch(err => console.error('Failed to connect to database', err));

const { getGeonames } = require('./apis/geonames');
const { getWeatherbit } = require('./apis/weatherbit');
const { pixabay } = require('./apis/pixabay');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(express.static('dist'));

// geonames
app.post('/city', getGeonames);

// weatherbit
app.post('/weather', getWeatherbit);

// pixabay
app.post('/pic', pixabay);
