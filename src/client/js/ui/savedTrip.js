import Base from './base';
import Trip from './trip';

class SavedTrip extends Base {
	_parentEl = document.querySelector('.trips__list');

	addHandlerRenderSavedTrip(handler) {
		window.addEventListener('load', handler);
	}

	_generateMarkup() {
		return this._data.map(trip => Trip.render(trip, false)).join('');
	}
}

export default new SavedTrip();
