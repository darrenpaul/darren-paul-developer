import { client } from '$lib/sanityClient';

export async function GET() {
	const projects = await client.fetch(
		'*[_type == "project"]{"slug": slug.current} | order(dateTime(publishedAt) desc)'
	);

	const domain = 'https://darrenpaul.dev';

	const pages = [{ slug: 'about' }, { slug: 'projects' }, { slug: 'contact' }];

	const pagePaths = pages.map(({ slug }) => `<url><loc>${domain}/${slug}</loc></url>`);

	const projectPaths = projects.map(
		({ slug }) => `<url><loc>${domain}/projects/${slug}</loc></url>`
	);

	return new Response(
		`
      <?xml version="1.0" encoding="UTF-8" ?>
      <urlset
        xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="https://www.w3.org/1999/xhtml"
        xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
      >
		<url>
			<loc>${domain}</loc>
		</url>
        ${pagePaths.join('\n')}
        ${projectPaths.join('\n')}
      </urlset>`.trim(),
		{
			headers: {
				'Content-Type': 'application/xml'
			}
		}
	);
}

export const prerender = true;
