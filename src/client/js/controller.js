import 'regenerator-runtime/runtime';
import * as model from './model';
import Form from './ui/form';
import Message from './ui/message';
import Trip from './ui/trip';
import savedTrip from './ui/savedTrip';

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
		console.log(model.state);
	} catch (err) {
		Message.renderError();
		console.error(err);
	}
};

// const AddSavedTrip = () => {
// 	// 1. Add searched trip to savedTrip array and save this array in local storage
// 	if (model.state.id !== 0) model.addTrip(model.state);
// };

// const controlSavedTrip = () => {
// 	// 1. Add searched trip to savedTrip array and save this array in local storage
// 	if (model.savedTrip.length > 0) savedTrip.render(model.savedTrip);
// };

export const init = function () {
	// savedTrip.addHandlerRenderSavedTrip(controlSavedTrip);
	Form.addHandler(controlTrip);
};
