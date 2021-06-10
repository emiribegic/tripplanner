import 'regenerator-runtime/runtime';
import * as model from './model';
import Form from './ui/form';
import Trip from './ui/trip';

const controlTrip = async function () {
	try {
		// 1. Get user input
		const inputData = Form.getInput();
		const { input, start, end } = inputData;
		console.log(typeof start);

		// 2. Validate date
		console.log(start);
		model.validateDate(start, end);

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
	Form.addHandler(controlTrip);
};
