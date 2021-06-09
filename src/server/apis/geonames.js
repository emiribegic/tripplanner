require('dotenv').config();
const axios = require('axios');
const baseUrl = 'http://api.geonames.org/searchJSON?q';

const getGeonames = async (req, res) => {
	try {
		const city = encodeURI(req.body.input);
		const response = await axios.get(
			`${baseUrl}=${city}&maxRows=1&username=${process.env.USERNAME}`
		);
		console.log(response.data);
		const { data } = response;
		res.send(data);
	} catch (err) {
		console.error(err);
	}
};

module.exports = { getGeonames };
