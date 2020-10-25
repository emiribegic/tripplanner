async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let cityName = document.getElementById('city').value
    
    // countdown
    // ref: https://www.geeksforgeeks.org/how-to-calculate-the-number-of-days-between-two-dates-in-javascript/
    // ref: https://www.w3resource.com/javascript/object-property-method/date.php
    let startDate = document.getElementById('start').value
    let endDate = document.getElementById('end').value
    
    let today = new Date()
    let tripStart = new Date(startDate)
    let diffInTime = tripStart.getTime() - today.getTime()
    // rounded up to the nearest integer (ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round)
    let diffInDays = Math.round(diffInTime / (1000*3600*24))

    let dates = {startDate, endDate, diffInDays}

    /** let countdown = (days) => {
        let today = new Date()
        let tripStart = new Date(startDate)
    
        let diffInTime = tripStart.getTime() - today.getTime()
        // rounded up to the nearest integer (ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round)
        let diffInDays = Math.round(diffInTime / (1000*3600*24))
        return days
    } */

    console.log("::: Form Submitted :::")
    console.log('Fetching geographical data from geonames:', { city: cityName });
    
    // to make each data be accessible from everywhere
    let cityLatLon = {}
    let receivedWeatherInJson = {}
    let receivedPicInJson = {}
    
    // これは{city: cityName}をjson形式でserverに送るアクション
    // url,の後ろはoption, how to send post to the client, using POST methodとか
    const resGeo = await fetch('http://localhost:8081/city', {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({city: cityName})
    });
    try {
        const receivedGeoInJson = await resGeo.json(); // receive res from the server side and transform into json
        cityLatLon = {
            city: receivedGeoInJson.geonames[0].name,
            country: receivedGeoInJson.geonames[0].countryName,
            lat: receivedGeoInJson.geonames[0].lat,
            lon: receivedGeoInJson.geonames[0].lng
        }
        console.log('Data received from geonames:', cityLatLon)
        // return cityLatLon; //this will end implementation here
    } catch (error) {
        console.log('error', error);
    }
    
    console.log('Fetching weather data from weatherbit:', {cityLatLon});

    // これはcityLatLonをjson形式でserverに送るアクション
    const resWeather = await fetch('http://localhost:8081/weather', {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(cityLatLon)
    });
    try {
        receivedWeatherInJson = await resWeather.json();
        console.log('Data received from weatherbit:', receivedWeatherInJson)

        // return receivedWeatherInJson;
    } catch (error) {
        console.log('error', error);
    }

    console.log('Fetching a pic from pixabay:', {cityLatLon});

    // これはcityLatLonをjson形式でserverに送るアクション
    const resPic = await fetch('http://localhost:8081/pic', {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(cityLatLon)
    });
    try {
        receivedPicInJson = await resPic.json();
        console.log('Data received from pixabay:', receivedPicInJson)
    
        // return receivedPicInJson;
    } catch (error) {
        console.log('error', error);
    }

    const tripData = document.getElementById('container')
    tripData.innerHTML = Client.updateUI(dates, receivedPicInJson, cityLatLon, receivedWeatherInJson);

};


export { handleSubmit }