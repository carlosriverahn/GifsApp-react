import { useState } from 'react';

export const AddCategory = ({ onChangeValue }) => {
	const [inputValue, setInputValue] = useState('');
	const onInputChage = (event) => {
		// console.log(event);
		setInputValue(event.target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault(event);
		if (inputValue.length <= 1) {
			return;
		}

		onChangeValue(inputValue.trim());
		setInputValue('');
	};
	return (
		<form onSubmit={onSubmit}>
			<input
				type="text"
				placeholder="Search gifs"
				value={inputValue}
				onChange={(event) => onInputChage(event)}
			/>
		</form>
	);
};
