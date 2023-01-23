import PropTypes from 'prop-types';

export const GifItem = ({ title, urlImg }) => {
	return (
		<div className="card">
			<img src={urlImg} alt={title} />
			<p>{title}</p>
		</div>
	);
};

GifItem.propTypes = {
	title: PropTypes.string.isRequired,
	urlImg: PropTypes.string.isRequired,
};
