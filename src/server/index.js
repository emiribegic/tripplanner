const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch')

// Start up an instance of app
const app = express()

// Cors allows the browser and server to communicate without any security interruptions
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(express.static('dist'))

console.log(__dirname)

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Travel app listening on port 8081!')
})

/** GET Router */
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

/** POST Router */

// geonames (without JSON in URL, data will be sent as XML)
const geoBaseURL = 'http://api.geonames.org/searchJSON?q'
const userName = process.env.USERNAME
console.log(`Your username for geonames is ${process.env.USERNAME}`);

// to receive the POST sent from the client
app.post('/city', async function(req, res) {
    city = req.body.city; // sent in the body from client side as body: JSON.stringify({city: cityName})
    console.log(`You entered: ${city}`);
    
    const fetchGeo = await fetch (`${geoBaseURL}=${city}&maxRows=1&username=${userName}`) // fetch data from API's endpoint
    const geoInJson = await fetchGeo.json() // transform it into json format
    res.send(geoInJson) // and send it to the client, ❓ can i also use res.json as same purpose as res.send?
    // console.log(geoInJson) // print out the fetched data on console
})

// weatherbit
const weatherBaseURL = 'https://api.weatherbit.io/v2.0/forecast/daily?'
const wKey = process.env.WKEY
console.log(`Your API key for weatherbit is ${process.env.WKEY}`)

// to receive the POST sent from the client
app.post('/weather', async function(req, res) {
    lat = req.body.lat;
    lon = req.body.lon;
    console.log(`lat: ${lat}, lon: ${lon}`);
    
    const fetchWeather = await fetch (`${weatherBaseURL}&lat=${lat}&lon=${lon}&days=3&key=${wKey}`)
    const weatherInJson = await fetchWeather.json()
    res.send(weatherInJson)
    // console.log(weatherInJson)
})

//pixabay
const pixabayBaseURL = 'https://pixabay.com/api/?'
const pKey = process.env.PKEY
console.log(`Your API key for pixabay is ${process.env.PKEY}`)

// to receive the POST sent from the client
app.post('/pic', async function(req, res) {
    // remove whitespaces and replace it with '+'
    // ref: https://stackoverflow.com/questions/3794919/replace-all-spaces-in-a-string-with
    cityName = req.body.city.replace(/ /g, '+');
    console.log(`Keyword for searching a pic: ${cityName}`)
    
    const fetchPic = await fetch (`${pixabayBaseURL}key=${pKey}&q=${cityName}&image_type=photo&orientation=horizontal&per_page=3&pretty=true`)
    const picInJson = await fetchPic.json()
    res.send(picInJson)
    // console.log(picInJson)
})


