export default class Base {
	_data;

	render(data) {
		if (!data || (Array.isArray(data) && data.length === 0))
			return this.showError();

		this._data = data;

		const markup = this._generateMarkup();
		this._clear();
		this._parentEl.insertAdjacentHTML('afterbegin', markup);
	}

	_clear() {
		this._parentEl.innerHTML = '';
	}

	renderSpinner() {
		const markup = `
    <i class="notched circle big loading icon"></i>
		`;
		this._clear();
		this._parentEl.insertAdjacentHTML('afterbegin', markup);
	}

	renderError(message = this._errorMessage) {
		const markup = `
        <span class="error">${message}</span>
      `;
		this._clear();
		this._parentEl.insertAdjacentHTML('afterbegin', markup);
	}
}
