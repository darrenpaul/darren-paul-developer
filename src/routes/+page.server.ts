import { client } from '$lib/sanityClient';

/** @type {import('./$types').PageLoad} */
export async function load() {
	const latestProjectData = await client.fetch(
		'*[_type == "project"]{_id, title, "slug": slug.current, synopsis, description, summary, publishedAt, "thumbnailImage": thumbnailImage.asset->url, "featureImage": featureImage.asset->url, "projectImages": projectImages[].asset->url, liveUrl} | order(dateTime(publishedAt) desc)[0..2]'
	);
	if (latestProjectData) {
		return {
			status: 200,
			body: latestProjectData
		};
	}

	return {
		status: 404
	};
}
