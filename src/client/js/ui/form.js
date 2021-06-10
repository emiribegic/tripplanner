class Form {
	_parentEl = document.querySelector('.plan__form');
	_errorMessage =
		'Oops, it seems like you selected past date as start date or set end date earlier than start date!';

	getInput() {
		const destination = this._parentEl.querySelector('#city').value;
		const start = this._parentEl.querySelector('#start').value;
		const end = this._parentEl.querySelector('#end').value;
		const query = {
			input: destination,
			start: start,
			end: end,
		};

		this._clearInput();
		return query;
	}

	_clearInput() {
		this._parentEl.querySelector('#city').value = '';
		this._parentEl.querySelector('#start').value = '';
		this._parentEl.querySelector('#end').value = '';
	}

	alertError(message = this._errorMessage) {
		alert(message);
		this._clearInput();
	}

	addHandler(handler) {
		this._parentEl.addEventListener('submit', function (e) {
			e.preventDefault();
			handler();
		});
	}
}

export default new Form();
