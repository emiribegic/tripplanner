import axios from 'axios';
import { convertDate } from './helper';

// Check later
export const state = {
	destination: '',
	pic: {},
	weather: [],
	inDays: 0,
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

export const validateDate = (start, end) => {
	const today = new Date();
	const tsStart = convertDate(start);
	const tsEnd = convertDate(end);
	const tsToday = convertDate(today);
	const inDays = Math.ceil((tsStart - tsToday) / (1000 * 3600 * 24));

	if (tsStart < tsToday || tsEnd < tsStart);
	alert(
		'Invalid date: either you select past date as start date or set end date earlier than start date.'
	);

	state.inDays = inDays;

	return;
};
