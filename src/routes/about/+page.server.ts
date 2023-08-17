import { client } from '$lib/sanityClient';

/** @type {import('./$types').PageLoad} */
export async function load() {
	const aboutData = await client.fetch('*[_type == "about"]');

	const favoriteProjectsData = await client.fetch(
		'*[_type == "project" && favoriteProject == true]{_id, title, "slug": slug.current, synopsis, description, summary, publishedAt, "thumbnailImage": thumbnailImage.asset->url, "featureImage": featureImage.asset->url, "projectImages": projectImages[].asset->url, liveUrl} | order(dateTime(publishedAt) desc)'
	);

	if (aboutData && favoriteProjectsData) {
		return {
			status: 200,
			body: { about: aboutData[0], projects: favoriteProjectsData }
		};
	}

	return {
		status: 404
	};
}

export const prerender = true;
