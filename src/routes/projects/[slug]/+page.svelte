<script lang="ts">
	import { page } from '$app/stores';
	import { MetaTags, JsonLd } from 'svelte-meta-tags';
	import { urlForImage } from '$lib/sanityClient.js';
	import { hostURL, author, siteName } from '$lib/constants/siteInformation';
	import ProjectCta from '$lib/project/+ProjectCta.svelte';
	import ProjectAbout from '$lib/project/+ProjectAbout.svelte';
	import ProjectSelect from '$lib/project/+ProjectSelect.svelte';
	import ProjectDeviceSelect from '$lib/project/+ProjectDeviceSelect.svelte';

	export let data;

	const metaTitle = `Darren Paul | ${data.body.current.title}`;
	const metaDescription = data.body.current.metaDescription || '';
	const metaImage = urlForImage(data.body.current.featureImage);

	const articleURL = `${hostURL}${$page.url.pathname}`;

	const images = data.body.current.desktopImages.map((image) => {
		return urlForImage(image);
	});
</script>

<section class="project">
	<ProjectCta data={data.body.current} />

	<ProjectAbout data={data.body.current} />

	{#if data?.body?.current}
		<ProjectDeviceSelect data={data.body.current} />
	{/if}

	<ProjectSelect previousProject={data.body?.previous} nextProject={data.body?.next} />
</section>

<MetaTags
	title={metaTitle}
	titleTemplate={metaTitle}
	description={metaDescription}
	canonical={articleURL}
	openGraph={{
		title: metaTitle,
		description: metaDescription,
		url: articleURL,
		type: 'article',
		article: {
			publishedTime: data.body?.current.publishedAt,
			modifiedTime: data.body?.current._updatedAt,
			// expirationTime: '2022-12-21T22:04:11Z',
			// section: 'Section II',
			authors: [`${hostURL}/about`],
			tags: [
				'Web Development',
				'Front-End Development',
				'Portfolio',
				author,
				data.body.current.client,
				...data.body.current.frameworks
			]
		}
	}}
	twitter={{
		handle: '',
		site: articleURL,
		cardType: 'summary_large_image',
		title: metaTitle,
		description: metaDescription,
		image: metaImage,
		imageAlt: metaTitle
	}}
/>

<JsonLd
	schema={{
		'@type': 'Article',
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': articleURL
		},
		headline: data.body.current.title,
		image: images,
		datePublished: data.body?.current.publishedAt,
		dateModified: data.body?.current._updatedAt,
		author: {
			'@type': 'Person',
			name: author
		},
		publisher: {
			'@type': 'Organization',
			name: siteName,
			logo: {
				'@type': 'ImageObject',
				url: `${hostURL}/favicon.png`
			}
		}
	}}
/>

<style lang="scss">
	.project {
		/* SIZE */
		/* MARGINS AND PADDING */
		@apply pt-24 mb-8 px-5 md:px-20 md:mb-16;
		/* LAYOUT */
		/* BORDERS */
		/* COLORS */
		/* TEXT */
		/* ANIMATION AND EFFECTS */
	}
</style>
