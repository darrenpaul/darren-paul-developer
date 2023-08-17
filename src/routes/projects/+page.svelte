<script lang="ts">
	import { MetaTags } from 'svelte-meta-tags';
	import Projects from '$lib/+Projects.svelte';

	export let data;

	const metaTitle = 'Darren Paul';
	const metaDescription =
		'This website is dedicated to showcasing the web development projects that I have worked on. As a web developer, I have extensive experience in HTML, CSS, JavaScript, Nuxt, Vue, Next and React. My work has been used by clients in a variety of industries and applications. From building custom websites to creating many personal projects, I have the skills and experience to create any type of web development project. I strive to keep up with the latest web development trends and technologies to ensure that my clients receive the best possible results. No matter the project, I am committed to delivering quality work in a timely and efficient manner. If you need any help with your web development projects, please don`t hesitate to reach out. I`m always available to discuss your project and provide you with the best possible solutions.';
	const metaImage =
		'https://res.cloudinary.com/darren-paul-photography/image/upload/v1672140864/darren-paul-developer/darren-paul-cover-min_ytvald.jpg';
	const domain = 'https://darrenpaul.dev/';
</script>

<Projects data={data?.body} title="Projects" />

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
