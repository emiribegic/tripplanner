import axios from 'axios';
import dayjs from './plugin/dayjs';

// Check later
export const state = {
	destination: '',
	pic: {},
	weather: [],
	date: {},
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
		throw err;
	}
};

export const validateDate = (start, end) => {
	let validation = true;

	const { $y, $M, $D } = dayjs();
	const today = `${$y}-${$M + 1}-${$D}`;

	const tsToday = dayjs(today);
	const tsStart = dayjs(start);
	const tsEnd = dayjs(end);

	const validStart = tsStart.isSameOrAfter(today);
	const validEnd = tsStart.isSameOrBefore(tsEnd);

	// if ok then
	if (validStart && validEnd) {
		const countdown =
			tsToday.to(tsStart) === 'a few seconds ago'
				? 'in 0 day'
				: tsToday.to(tsStart);

		state.date = {
			start: start,
			end: end,
			countdown: countdown,
		};

		return validation;
	}

	return !validation;
};
