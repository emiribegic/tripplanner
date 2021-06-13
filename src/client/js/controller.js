import 'regenerator-runtime/runtime';
import * as model from './model';
import Form from './ui/form';
import Trip from './ui/trip';

const controlTrip = async function () {
	try {
		// 1. Get user input
		const inputData = Form.getInput();
		const { input, start, end } = inputData;
		// console.log(inputData);

		// 2. Validate date
		const validDate = model.validateDate(start, end);
		if (!validDate) {
			Form.alertError();
			return;
		}

		// 3. Show spinner
		Trip.renderSpinner();
		await model.sendData('/trip', { input });

		// TODO delete after development
		// !model.state
		// 	? console.log(`${input} does not exist`)
		// 	: console.log(model.state);

		// Render trip
		console.log(model.state);
		Trip.render(model.state);
	} catch (err) {
		Trip.renderError();
		console.error(err);
	}
};

export const init = function () {
	Form.addHandler(controlTrip);
};
