import axios from 'axios';

// Check later
export const state = {
	destination: '',
	pic: {},
	weather: [],
};

// Send data to server to make API requests
export const sendData = async (url = '', payload = {}) => {
	const res = await axios.post(url, payload, { withCredentials: true });
	try {
		const { data } = res;
		state.destination = data.destination;
		state.pic = {
			url: data.pic.webformatURL,
			alt: data.pic.tags,
		};
		state.weather = data.weather.map(item => {
			return {
				date: item.datetime,
				icon: item.weather.icon,
				high: item.max_temp,
				low: item.min_temp,
				rain: item.pop,
			};
		});
	} catch (err) {
		console.error(err);
		throw err;
	}
};
