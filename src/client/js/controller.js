import 'regenerator-runtime/runtime';
import * as model from './model';
import Add from './ui/add';
import Trip from './ui/trip';

const controlTrip = async function () {
	try {
		// 1. Get user input
		const input = Add.getInput();
		if (!input) return;

		// 2. Show spinner
		Trip.showSpinner();
		const data = await model.sendData('/city', { input });

		// TODO delete after development
		!data ? console.log(`${input} does not exist`) : console.log(data);

		// Render trip
		Trip.render(data);
	} catch (err) {
		console.error(err);
	}
};

export const init = function () {
	Add.addHandler(controlTrip);
};
