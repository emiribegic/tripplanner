import 'regenerator-runtime/runtime';
import * as model from './model';
import Form from './ui/form';
import Message from './ui/message';
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
		Message.renderSpinner();
		await model.sendData('/trip', { input });

		// TODO delete after development
		// !model.state
		// 	? console.log(`${input} does not exist`)
		// 	: console.log(model.state);

		// 4. Render trip
		Message.renderAddMsg();
		Trip.render(model.state);
	} catch (err) {
		Message.renderError();
		console.error(err);
	}
};

export const init = function () {
	Form.addHandler(controlTrip);
};
