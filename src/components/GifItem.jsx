export const GifItem = ({ image }) => {
	return (
		<div className="card">
			<img src={image.urlImg} alt={image.title} />
			<p>{image.title}</p>
		</div>
	);
};
