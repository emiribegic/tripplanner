require('dotenv').config();
const axios = require('axios');
const baseUrl = 'https://api.weatherbit.io/v2.0/forecast/daily?';

const getWeatherbit = async (req, res) => {
	try {
		const { lat, lon } = req.body;
		const response = await axios.get(
			`${baseUrl}&lat=${lat}&lon=${lon}&days=3&key=${process.env.WKEY}`
		);
		const { data } = response;
		res.send(data);
	} catch (err) {
		console.error(err);
	}
};

module.exports = { getWeatherbit };
