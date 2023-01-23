import { render, screen, fireEvent } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Test in AddCategory', () => {
	const AddCategoryFunction = jest.fn();
	test('should be change the value of the text box', () => {
		render(<AddCategory onChangeValue={AddCategoryFunction} />);
		const input = screen.getByRole('textbox');
		fireEvent.input(input, { target: { value: 'Saitama' } });
		expect(input.value).toBe('Saitama');
	});

	test('should be call onChangeValue if the input have value', () => {
		render(<AddCategory onChangeValue={AddCategoryFunction} />);
		const inputValue = 'Saitama';

		const input = screen.getByRole('textbox');
		const form = screen.getByRole('form');

		fireEvent.input(input, { target: { value: inputValue } });
		fireEvent.submit(form);

		expect(input.value).toBe('');

		expect(AddCategoryFunction).toHaveBeenCalled();
		expect(AddCategoryFunction).toHaveBeenCalledTimes(1);
		expect(AddCategoryFunction).toHaveBeenCalledWith('Saitama');
		
	});

	test('should not be call onChangeValue if the input is empty', () => {
		const AddCategoryFunction = jest.fn();
		render(<AddCategory onChangeValue={AddCategoryFunction} />);
		const inputValue = '';

		const input = screen.getByRole('textbox');
		const form = screen.getByRole('form');

		fireEvent.input(input, { target: { value: inputValue } });
		fireEvent.submit(form);

		expect(input.value).toBe('');

		expect(AddCategoryFunction).not.toHaveBeenCalled();
		
	});
});
