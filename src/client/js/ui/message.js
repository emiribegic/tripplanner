class Message {
	_parentEl = document.querySelector('.spinner');
	_addMessage = 'New trip added';
	_deleteMessage = 'Selected trip deleted';
	_errorMessage = `Oops, we could not find the city you entered, please try again!`;

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

	renderAddMsg(msg = this._addMessage) {
		const markup = `
          <span class="trips__added">${msg}</span>
        `;
		this._clear();
		this._parentEl.insertAdjacentHTML('afterbegin', markup);
	}

	renderError(message = this._errorMessage) {
		const markup = `
        <span class="trips__error">${message}</span>
      `;
		this._clear();
		this._parentEl.insertAdjacentHTML('afterbegin', markup);
	}
}

export default new Message();
