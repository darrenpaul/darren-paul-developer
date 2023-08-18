<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import { urlForImage } from '$lib/sanityClient';
	import { projectsRoute } from '$lib/routes';

	export let data;
	export let flip = false;

	const slugPath = `${projectsRoute.path}/${data.slug}`;
</script>

<section class={flip ? 'content-section' : 'content-section-flip'}>
	<div class="--image-wrapper">
		<img src={urlForImage(data?.featureImage || data.projectImages[0])} alt={data.title} />
	</div>

	<div class="--text-wrapper">
		<h3>{data.title}</h3>

		{#if data.summary}
			<div class="--summary-wrapper">
				<PortableText value={data.summary} />
			</div>
		{/if}

		<div class="--button-group">
			<a class="--link-button" href={slugPath}>details</a>

			{#if data.liveUrl}
				<a class="--link-button" target="_blank" href={data.liveUrl}>demo</a>
			{/if}

			{#if data.githubRepo}
				<a class="--link-button" target="_blank" href={data.githubRepo}>code</a>
			{/if}
		</div>
	</div>
</section>

<style lang="scss">
	.content-section {
		/* SIZE */
		@apply w-full lg:w-4/6;
		/* MARGINS AND PADDING */
		@apply mx-auto;
		/* LAYOUT */
		@apply flex flex-col lg:flex-row items-center justify-center gap-16;
		/* BORDERS */
		/* COLORS */
		/* TEXT */
		/* ANIMATION AND EFFECTS */

		.--image-wrapper {
			/* SIZE */
			@apply w-fit;
			/* MARGINS AND PADDING */
			/* LAYOUT */
			@apply flex-shrink-0;
			/* BORDERS */
			/* COLORS */
			/* TEXT */
			/* ANIMATION AND EFFECTS */

			img {
				/* SIZE */
				@apply w-[384px] h-full sm:h-[288px];
				/* MARGINS AND PADDING */
				@apply pr-2 pb-2;
				/* LAYOUT */
				/* BORDERS */
				@apply border-b-8 border-r-8 border-black;
				/* COLORS */
				/* TEXT */
				/* ANIMATION AND EFFECTS */
			}
		}

		.--text-wrapper {
			/* SIZE */
			@apply w-full;
			/* MARGINS AND PADDING */
			/* LAYOUT */
			/* BORDERS */
			/* COLORS */
			/* TEXT */
			/* ANIMATION AND EFFECTS */

			h3 {
				/* SIZE */
				/* MARGINS AND PADDING */
				@apply mb-3;
				/* LAYOUT */
				/* BORDERS */
				/* COLORS */
				/* TEXT */
				@apply text-2xl md:text-3xl font-bold;
				/* ANIMATION AND EFFECTS */
			}

			.--summary-wrapper {
				/* SIZE */
				/* MARGINS AND PADDING */
				@apply mb-6;
				/* LAYOUT */
				/* BORDERS */
				/* COLORS */
				/* TEXT */
				/* ANIMATION AND EFFECTS */
			}

			.--button-group {
				/* SIZE */
				/* MARGINS AND PADDING */
				/* LAYOUT */
				@apply flex flex-col sm:flex-row items-center justify-start gap-4;
				/* BORDERS */
				/* COLORS */
				/* TEXT */
				/* ANIMATION AND EFFECTS */

				.--link-button {
					/* SIZE */
					@apply w-full sm:w-fit;
					/* MARGINS AND PADDING */
					@apply py-2 px-4;
					/* LAYOUT */
					/* BORDERS */
					@apply border-2 border-black rounded;
					/* COLORS */
					/* TEXT */
					@apply text-base font-bold text-center;
					/* ANIMATION AND EFFECTS */
				}
			}
		}
	}

	.content-section-flip {
		@extend .content-section;

		/* SIZE */
		/* MARGINS AND PADDING */
		/* LAYOUT */
		@apply flex flex-col lg:flex-row-reverse;
		/* BORDERS */
		/* COLORS */
		/* TEXT */
		/* ANIMATION AND EFFECTS */

		.--image-wrapper {
			/* SIZE */
			/* MARGINS AND PADDING */
			/* LAYOUT */
			/* BORDERS */
			/* COLORS */
			/* TEXT */
			/* ANIMATION AND EFFECTS */

			img {
				/* SIZE */
				/* MARGINS AND PADDING */
				@apply pr-0 pb-2 pl-2;
				/* LAYOUT */
				/* BORDERS */
				@apply border-b-8 border-l-8 border-r-0 border-black;
				/* COLORS */
				/* TEXT */
				/* ANIMATION AND EFFECTS */
			}
		}
	}
</style>
