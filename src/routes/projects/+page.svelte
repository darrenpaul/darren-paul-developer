<script lang="ts">
	import { MetaTags } from 'svelte-meta-tags';
	import Projects from '$lib/+Projects.svelte';

	export let data;

	const metaTitle = 'Darren Paul';
	const metaDescription =
		'Check out my diverse portfolio of standout projects in front-end web development, including an innovative furniture store, AI-powered renewable energy platform, and more!';
	const metaImage =
		'https://res.cloudinary.com/darren-paul-photography/image/upload/v1672140864/darren-paul-developer/darren-paul-cover-min_ytvald.jpg';
	const domain = 'https://www.darrenpaul.dev';
</script>

<Projects data={data?.body} title="Projects" showCta={true} />

<MetaTags
	title={metaTitle}
	titleTemplate="%s | Projects"
	description={metaDescription}
	canonical={`${domain}/projects`}
	openGraph={{
		type: 'website',
		url: `${domain}/projects`,
		title: metaTitle,
		description: metaDescription,
		images: [
			{
				url: metaImage,
				width: 800,
				height: 600,
				alt: metaTitle
			}
		]
	}}
	twitter={{
		handle: '',
		site: `${domain}/projects`,
		cardType: 'summary_large_image',
		title: metaTitle,
		description: metaDescription,
		image: metaImage,
		imageAlt: metaTitle
	}}
/>
