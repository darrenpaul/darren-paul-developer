import { client } from '$lib/sanityClient';

/** @type {import('./$types').PageLoad} */
export async function load() {
	const projects = await client.fetch(
		'*[_type == "project"]{_id, title, "slug": slug.current, synopsis, description, summary, publishedAt, "thumbnailImage": thumbnailImage.asset->url, "featureImage": featureImage.asset->url, "projectImages": projectImages[].asset->url, liveUrl} | order(dateTime(publishedAt) desc)'
	);

	if (projects) {
		return {
			status: 200,
			body: projects
		};
	}

	return {
		status: 404
	};
}
