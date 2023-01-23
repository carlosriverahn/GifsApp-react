import fetch from 'cross-fetch';

const apiKey = 'FG20icfGTL4rCgFfrk11LqjIJb7lqkf2';
export const getGifs = async (category) => {
	const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`;
	const resp = await fetch(url);
	const { data } = await resp.json();

	const gifs = data.map((img) => ({
		id: img.id,
		title: img.title,
		urlImg: img.images.downsized_medium.url,
	}));
	return gifs;
};
