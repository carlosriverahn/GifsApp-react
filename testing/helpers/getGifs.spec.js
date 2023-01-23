import { getGifs } from '../../src/helpers/getGifs';


describe('Test in helper getGifs', () => {
	test('should be return array of gifs', async() => {
		const gifs = await getGifs('Dragon ball');
		expect(gifs.length).toBeGreaterThan(0);
		expect(gifs[0]).toEqual({
			id: expect.any(String),
			title: expect.any(String),
			urlImg: expect.any(String),
		});
	});
});
