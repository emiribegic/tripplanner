function updateUI(days, img, dest, weather) {
    return `
            <section id="dest_img">
                <img src="${img.hits[0].webformatURL}" alt="">
            </section>
            <section id="dest_info">
                <P>in ${days.diffInDays} days</P>
                <h2>Your trip to: ${dest.city}, ${dest.country}</h2>
                <h3>Dates: ${days.startDate} to ${days.endDate}</h3>
            </section>
            <section id="dest_weather">
                <h4>3-Day Weather Forecast</h4>
                <div id="card one">
                    <div id="date">${weather.data[0].datetime}</div>
                    <div id="icon"><img src="../img/${weather.data[0].weather.icon}.png" alt="${weather.data[0].weather.description}"></div>
                    <div id="temp">${weather.data[0].max_temp}° | ${weather.data[0].min_temp}°</div>
                    <div id="pop">${weather.data[0].pop}%</div>
                </div>
                <div id="card two">
                    <div id="date">${weather.data[1].datetime}</div>
                    <div id="icon"><img src="../img/${weather.data[1].weather.icon}.png" alt="${weather.data[1].weather.description}"></div>
                    <div id="temp">${weather.data[1].max_temp}° | ${weather.data[1].min_temp}°</div>
                    <div id="pop">${weather.data[1].pop}%</div>
                </div>
                <div id="card three">
                    <div id="date">${weather.data[2].datetime}</div>
                    <div id="icon"><img src="../img/${weather.data[2].weather.icon}.png" alt="${weather.data[2].weather.description}"></div>
                    <div id="temp">${weather.data[2].max_temp}° | ${weather.data[2].min_temp}°</div>
                    <div id="pop">${weather.data[2].pop}%</div>
                </div>
            </section>
            `
}


export { updateUI }