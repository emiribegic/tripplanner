import 'regenerator-runtime/runtime';
import getData from '../src/server/getData';

describe('getData', () => {
	test('returns an object with destination data', async () => {
		const testCity = 'frankfurt';
		const data = await getData(testCity);
		expect(data).toHaveProperty('destination');
		expect(data).toHaveProperty('weather');
		expect(data).toHaveProperty('pic');
	});
});
