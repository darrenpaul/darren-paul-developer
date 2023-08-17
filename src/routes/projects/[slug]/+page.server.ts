import { client } from '$lib/sanityClient';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const { slug } = params;

	const project = await client.fetch(`*[_type == "project" && slug.current == "${slug}"]`);

	const projects = await client.fetch(
		'*[_type == "project"]{_id, title, "slug": slug.current, synopsis, description, summary, publishedAt, "thumbnailImage": thumbnailImage.asset->url, "featureImage": featureImage.asset->url, "projectImages": projectImages[].asset->url, liveUrl} | order(dateTime(publishedAt) desc)'
	);

	const projectSlugs = projects.map(({ slug }) => slug);

	const previousProjectIndex = projectSlugs.indexOf(slug) + 1;
	const nextProjectIndex = projectSlugs.indexOf(slug) - 1;

	const previousProject = projects[previousProjectIndex] || undefined;
	const nextProject = projects[nextProjectIndex] || undefined;

	const payload = {
		current: project[0],
		previous: previousProject,
		next: nextProject
	};

	if (project && project.length > 0) {
		return {
			status: 200,
			body: payload
		};
	}

	return {
		status: 404
	};
}
