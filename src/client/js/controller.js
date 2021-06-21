import 'regenerator-runtime/runtime';
import * as model from './model';
import Form from './ui/form';
import Message from './ui/message';
import Trip from './ui/trip';
import StoredTrips from './ui/storedTrips';

const controlTrip = async () => {
	try {
		// 1 Get user input
		const inputData = Form.getInput();
		const { input, start, end } = inputData;

		// 2 Validate date
		const validDate = model.validateDate(start, end);
		if (!validDate) {
			Form.alertError();
			return;
		}

		// 3 Show spinner
		Message.renderSpinner();
		await model.sendData('/trip', { input });

		// 4 Store copy of trip data into savedTrip array
		model.addTrip(model.state.trip);

		// 5 Render trip
		Message.renderAddMsg();
		Trip.render(model.state.trip);
	} catch (err) {
		Message.renderError();
		console.error(err);
	}
};

const controlSavedTrip = () => {
	// Add searched-trip to savedTrip array and save this array in local storage
	if (model.state.savedTrip.length > 0)
		StoredTrips.render(model.state.savedTrip);
};

const controlDeleteTrip = id => {
	model.deleteTrip(id);
};

export const init = () => {
	StoredTrips.addHandlerRenderSavedTrip(controlSavedTrip);
	Form.addHandler(controlTrip);
	StoredTrips.addHandlerDeleteTrip(controlDeleteTrip);
};
