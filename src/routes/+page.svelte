<script lang="ts">
	import { MetaTags } from 'svelte-meta-tags';

	import HomeCta from '$lib/home/+HomeCta.svelte';
	import TechStack from '$lib/+TechStack.svelte';
	import Projects from '$lib/+Projects.svelte';

	export let data;

	const metaTitle = '"Darren Paul: Front-End Web Developer in Vienna, Austria"';
	const metaDescription =
		'Hey, I’m Darren Paul a Software Engineer specializing in Front-End Web Development and based in the Vienna, Austria. I have a passion for creating beautiful, responsive and accessible websites and applications.';
	const metaImage =
		'https://res.cloudinary.com/darren-paul-photography/image/upload/v1692289433/darren-paul-developer/DSC_3891_fcboty.webp';
	const domain = 'https://darrenpaul.dev/';
</script>

<HomeCta />

<TechStack />

<Projects data={data?.body} title="Latest Projects" />

<MetaTags
	title={metaTitle}
	titleTemplate="%s"
	description={metaDescription}
	canonical={domain}
	openGraph={{
		type: 'website',
		url: domain,
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
		site: domain,
		cardType: 'summary_large_image',
		title: metaTitle,
		description: metaDescription,
		image: metaImage,
		imageAlt: metaTitle
	}}
/>
