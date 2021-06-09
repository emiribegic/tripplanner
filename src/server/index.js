const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8081;
const mongodb = `mongodb+srv://${prosess.env.DB_NAME}:${prosess.env.DB_PASS}@cluster0.r9iwy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
require('dotenv').config();

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

app.listen(port, () => console.log(`Travel app listening on port ${port}!`));
