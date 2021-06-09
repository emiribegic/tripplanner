import Base from './base';

class Trip extends Base {
	_parentEl = document.querySelector('.dest');
	_errorMessage =
		'Oops, we could not find the city you entered, please try again!';

	_generateMarkup() {
		return `
      <div>Trip to ${this._data.city}</div>
    `;
	}
}

export default new Trip();
