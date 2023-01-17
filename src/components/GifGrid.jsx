import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './gifItem';

export const GifGrid = ({ category }) => {
	const { images, isLoading } = useFetchGifs(category);
	
	return (
		<>
			<h3>Category</h3>
			{
				isLoading && ( <h2>Loading</h2> )
			}
			<div className="card-grid">
				{images.map((image) => (
					<GifItem key={image.id} image={image} />
				))}
			</div>
		</>
	);
};
