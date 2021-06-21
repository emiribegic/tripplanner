import 'regenerator-runtime/runtime';
import * as model from './model';
import Form from './ui/form';
import Message from './ui/message';
import Trip from './ui/trip';
import SavedTrip from './ui/savedTrip';
import DeleteTrip from './ui/deleteTrip';

const controlTrip = async function () {
	try {
		// 1. Get user input
		const inputData = Form.getInput();
		const { input, start, end } = inputData;

		// 2. Validate date
		const validDate = model.validateDate(start, end);
		if (!validDate) {
			Form.alertError();
			return;
		}

		// 3. Show spinner
		Message.renderSpinner();
		await model.sendData('/trip', { input });

		// 4. Store copy of trip data into savedTrip array
		model.addTrip(model.state.trip);
		console.log(model.state.trip);

		// 4. Render trip
		Message.renderAddMsg();
		Trip.render(model.state.trip);
	} catch (err) {
		Message.renderError();
		console.error(err);
	}
};

const controlSavedTrip = () => {
	// 1. Add searched trip to savedTrip array and save this array in local storage
	if (model.state.savedTrip.length > 0)
		SavedTrip.render(model.state.savedTrip);
};

const controlDeleteTrip = id => {
	model.deleteTrip(id);
	DeleteTrip.render(model.state.savedTrip);
};

export const init = function () {
	SavedTrip.addHandlerRenderSavedTrip(controlSavedTrip);
	Form.addHandler(controlTrip);
	DeleteTrip.addHandlerDeleteTrip(controlDeleteTrip);
};
