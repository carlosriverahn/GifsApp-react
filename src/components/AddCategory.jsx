import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onChangeValue }) => {
	const [inputValue, setInputValue] = useState('');
	const onInputChage = ({ target }) => {
		// console.log(event);
		setInputValue(target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault(event);
		if (inputValue.trim().length <= 1) {
			return;
		}

		onChangeValue(inputValue.trim());
		setInputValue('');
	};
	return (
		<form onSubmit={onSubmit} aria-label="form">
			<input
				type="text"
				placeholder="Search gifs"
				value={inputValue}
				onChange={(event) => onInputChage(event)}
			/>
		</form>
	);
};

AddCategory.propTypes = {
	onChangeValue: PropTypes.func.isRequired,
};
