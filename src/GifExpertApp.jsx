import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

const GifExpertApp = () => {
	const [categories, setCategories] = useState(['Dragon ball']);

	const addCategory = (category) => {
		if (categories.includes(category)) {
			return;
		}
		setCategories([category, ...categories]);
	};

	return (
		<>
			<h1>GifExpertApp</h1>

			<AddCategory onChangeValue={addCategory} />

			{categories.map((category) => (
				<GifGrid key={category} category={category} />
			))}
		</>
	);
};

export default GifExpertApp;
