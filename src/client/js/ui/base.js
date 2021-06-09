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

	showSpinner() {
		const markup = `
      <div class="ui segment">
        <div class="ui active inverted dimmer">
          <div class="ui text loader">Loading</div>
        </div>
        <p></p>
      </div>
		`;
		this._clear();
		this._parentEl.insertAdjacentHTML('afterbegin', markup);
	}

	showError(message = this._errorMessage) {
		const markup = `
        <span class="error">${message}</span>
      `;
		this._clear();
		this._parentEl.insertAdjacentHTML('afterbegin', markup);
	}
}
