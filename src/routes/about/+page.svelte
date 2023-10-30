<script lang="ts">
	import { MetaTags } from 'svelte-meta-tags';
	import { PortableText } from '@portabletext/svelte';
	import Projects from '$lib/+Projects.svelte';
	import SeeMore from '$lib/+SeeMore.svelte';

	export let data;

	const metaTitle = 'Darren Paul';
	const metaDescription =
		'Meet Darren Paul, a Software Engineer specializing in Front End Web Development with experience in VFX industry. Enjoys experimenting with latest beta and using Vue.js and React.js for professional projects. Also interested in photography, brewing, driving, investing, gaming, cooking and gardening.';
	const metaImage =
		'https://res.cloudinary.com/darren-paul-photography/image/upload/v1693379390/darren-paul-developer/darren-paul-cartoon_bs40kv.webp';
	const domain = 'https://www.darrenpaul.dev';
</script>

<section class="about-me">
	<div class="--image-wrapper">
		<img
			src="https://res.cloudinary.com/darren-paul-photography/image/upload/v1693379390/darren-paul-developer/darren-paul-cartoon_bs40kv.webp"
			alt="Darren Paul"
		/>
	</div>

	<div class="--text-wrapper">
		<h1>About Me</h1>

		<PortableText value={data?.body?.about.description} />
	</div>
</section>

<SeeMore />

<Projects data={data?.body?.projects} title="Favorite Projects" />

<MetaTags
	title={metaTitle}
	titleTemplate="%s | About"
	description={metaDescription}
	canonical={`${domain}/about`}
	openGraph={{
		type: 'website',
		url: `${domain}/about`,
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
		site: `${domain}/about`,
		cardType: 'summary_large_image',
		title: metaTitle,
		description: metaDescription,
		image: metaImage,
		imageAlt: metaTitle
	}}
/>

<style lang="scss">
	.about-me {
		/* SIZE */
		@apply max-w-screen-2xl;
		min-height: calc(100dvh - 48px);
		/* MARGINS AND PADDING */
		@apply px-10 pt-24 mb-8 md:pt-0 md:px-20 md:mb-0 mx-auto;
		/* LAYOUT */
		@apply flex flex-col lg:grid grid-cols-2 items-center;
		/* BORDERS */
		/* COLORS */
		/* TEXT */
		/* ANIMATION AND EFFECTS */

		.--text-wrapper {
			/* SIZE */
			/* MARGINS AND PADDING */
			@apply mt-8 pt-8 lg:mt-0 lg:py-8 lg:pl-16;
			/* LAYOUT */
			/* BORDERS */
			@apply border-t-8 lg:border-l-8 lg:border-t-0 border-black;
			/* COLORS */
			/* TEXT */
			/* ANIMATION AND EFFECTS */

			h1 {
				/* SIZE */
				/* MARGINS AND PADDING */
				@apply mb-3;
				/* LAYOUT */
				/* BORDERS */
				/* COLORS */
				/* TEXT */
				@apply text-3xl font-bold;
				/* ANIMATION AND EFFECTS */
			}
		}

		.--image-wrapper {
			/* SIZE */
			@apply w-fit h-fit;
			/* MARGINS AND PADDING */
			/* LAYOUT */
			@apply justify-self-center;
			/* BORDERS */
			/* COLORS */
			/* TEXT */
			/* ANIMATION AND EFFECTS */

			img {
				/* SIZE */
				@apply w-52 h-52 md:w-80 md:h-80;
				/* MARGINS AND PADDING */
				@apply p-2 md:p-4;
				/* LAYOUT */
				@apply object-cover;
				/* BORDERS */
				@apply rounded-full border-8 border-black;
				/* COLORS */
				/* TEXT */
				/* ANIMATION AND EFFECTS */
			}
		}
	}
</style>
