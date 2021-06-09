class Add {
	_parentEl = document.querySelector('.plan__form');

	getInput() {
		const input = this._parentEl.querySelector('#city').value;
		this._clearInput();
		return input;
	}

	_clearInput() {
		this._parentEl.querySelector('#city').value = '';
	}

	addHandler(handler) {
		this._parentEl.addEventListener('submit', function (e) {
			e.preventDefault();
			handler();
		});
	}
}

export default new Add();
