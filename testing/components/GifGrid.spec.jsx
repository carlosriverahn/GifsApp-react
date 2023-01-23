import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Test in GifGrid', () => {
	const category = 'One Punch';
	test('should be show loading text on start', () => {
		useFetchGifs.mockReturnValue({
			images: [],
			isLoading: true,
		});

		render(<GifGrid category={category} />);
		expect(screen.getByText('Loading'));
		expect(screen.getByText(category));
	});

	test('should be show items when loading images from useFetchGifs', () => {
		const gifs = [
			{
				id: '123',
				title: 'Saitama1',
				urlImg: 'http://localhost/saitama1.jpg',
			},
			{
				id: '456',
				title: 'Saitama2',
				urlImg: 'http://localhost/saitama2.jpg',
			},
			{
				id: '789',
				title: 'Saitama3',
				urlImg: 'http://localhost/saitama3.jpg',
			},
		];

		useFetchGifs.mockReturnValue({
			images: gifs,
			isLoading: false,
		});

		render(<GifGrid category={category} />);
		expect(screen.getAllByRole('img').length).toBe(3);
	});
});
