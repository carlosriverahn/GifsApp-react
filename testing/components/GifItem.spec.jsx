import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/gifItem';

describe('Test in GifItem', () => {
	const title = 'Snapshot title';
	const urlImg = 'https://one-punch.com/saitama.jpg';

	test('should be match with the snapshot', () => {
		const { container } = render(<GifItem title={title} urlImg={urlImg} />);
		expect(container).toMatchSnapshot();
	});

	test('should be show the image with his url', () => {
		render(<GifItem title={title} urlImg={urlImg} />);
		// expect(screen.getByRole('img').src).toBe(urlImg);
		const { src, alt } = screen.getByRole('img');
		expect(src).toBe(urlImg);
		expect(alt).toBe(title);
	});

	test('should be check if title exist', () => {
		render(<GifItem title={title} urlImg={urlImg} />);
		expect(screen.getByText(title)).toBeTruthy();
	});
});
