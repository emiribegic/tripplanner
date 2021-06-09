import add from './ui/add';

const controlTrip = async function () {
	try {
		const input = add.getInput();
		if (!input) return;
		console.log(input);
	} catch (err) {
		console.error(err);
	}
};

export const init = function () {
	add.addHandler(controlTrip);
};
