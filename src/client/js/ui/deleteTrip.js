import Base from './base';
import Trip from './trip';

class DeleteTrip extends Base {
	_parentEl = document.querySelector('.trips__list');

	addHandlerDeleteTrip(handler) {
		this._parentEl.addEventListener('click', e => {
			const deleteBtn = e.target.closest('.negative');
			if (!deleteBtn) return;
			const tripId = deleteBtn.getAttribute('id');
			handler(tripId);
		});
	}

	_generateMarkup() {
		this._clear();
		return this._data.map(trip => Trip.render(trip, false)).join('');
	}
}

export default new DeleteTrip();
