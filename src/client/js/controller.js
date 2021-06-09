import axios from 'axios';
import 'regenerator-runtime/runtime';
import * as model from './model';
import Add from './ui/add';
import Trip from './ui/trip';

const controlTrip = async function () {
	try {
		// 1. Get user input
		const input = Add.getInput();
		if (!input) return;
		console.log(input);

		// 2. Show spinner
		Trip.showSpinner();
		const test = await model.sendData('/city', { input });
		Trip.render(test);
	} catch (err) {
		console.error(err);
	}
};

export const init = function () {
	Add.addHandler(controlTrip);
};
