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
		return data;
	} catch (err) {
		console.error(err);
		throw err;
	}
};
