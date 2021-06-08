require('dotenv').config();
const axios = require('axios');
const pixabayBaseURL = 'https://pixabay.com/api/?';

const pixabay = async (req, res) => {
	// remove whitespaces and replace it with '+'
	// ref: https://stackoverflow.com/questions/3794919/replace-all-spaces-in-a-string-with
	const cityName = encodeURI(req.body.city).replace('%20', '+');
	const countryName = encodeURI(req.body.country).replace('%20', '+');

	const res1 = await axios.get(
		`${pixabayBaseURL}key=${process.env.PKEY}&q=${cityName}&image_type=photo&orientation=horizontal&per_page=3&pretty=true`
	);
	try {
		const { data } = res1;
		if (data.totalHits > 0) {
			res.send(data);
		} else {
			try {
				const res2 = await axios.get(
					`${pixabayBaseURL}key=${process.env.PKEY}&q=${countryName}&image_type=photo&orientation=horizontal&per_page=3&pretty=true`
				);
				const { data } = res2;
				res.send(data);
			} catch (err) {
				console.error(err);
			}
		}
	} catch (err) {
		console.error(err);
	}
};

module.exports = { pixabay };
