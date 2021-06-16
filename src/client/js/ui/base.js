export default class Base {
	_data;

	render(data) {
		if (!data || (Array.isArray(data) && data.length === 0))
			return this.showError();

		this._data = data;

		const markup = this._generateMarkup();
		this._parentEl.insertAdjacentHTML('afterbegin', markup);
	}

	_clear() {
		this._parentEl.innerHTML = '';
	}
}
