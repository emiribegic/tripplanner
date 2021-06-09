import axios from 'axios';

// Check later
export const state = {
	city: {},
	recipes: [],
	page: 1,
};

// Send data to server to make API requests
export const sendData = async (url = '', payload = {}) => {
	const res = await axios.post(url, payload, { withCredentials: true });
	try {
		const { data } = res;
		console.log(res);
		console.log(data.geonames[0]);
		return data.geonames[0];
	} catch (err) {
		console.error(err);
	}
};
