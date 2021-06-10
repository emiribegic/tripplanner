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
		await model.sendData('/trip', { input });

		// TODO delete after development
		!model.state
			? console.log(`${input} does not exist`)
			: console.log(model.state);

		// Render trip
		Trip.render(model.state);
	} catch (err) {
		console.error(err);
	}
};

export const init = function () {
	Add.addHandler(controlTrip);
};
