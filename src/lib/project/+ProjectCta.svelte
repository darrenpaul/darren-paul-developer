<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import ArrowLeft from '$lib/icons/+ArrowLeft.svelte';
	import { projectsRoute } from '$lib/routes';
	import ProjectFrameworks from './+ProjectTechStack.svelte';
	import SeeMore from '$lib/+SeeMore.svelte';

	export let data;
</script>

<section class="project-cta">
	<a href={projectsRoute.path} class="--back-link">
		<ArrowLeft />

		Projects
	</a>

	<div class="--details-wrapper">
		<div class="--text-wrapper">
			<h1 class="--title">{data?.title}</h1>

			{#if data?.summary}
				<PortableText value={data?.summary} />
			{/if}

			{#if data?.frameworks}
				<ProjectFrameworks projectTechStack={data?.frameworks} />
			{/if}

			<div class="--button-group">
				<a class="--link-button" target="_blank" href={data?.liveUrl}>demo</a>

				{#if data?.githubRepo}
					<a class="--link-button" target="_blank" href={data?.githubRepo}>code</a>
				{/if}
			</div>
		</div>
	</div>

	<SeeMore />
</section>

<style lang="scss">
	.project-cta {
		/* SIZE */
		height: calc(100dvh - 64px);
		/* MARGINS AND PADDING */
		@apply px-5 lg:px-0 py-10;
		/* LAYOUT */
		@apply flex flex-col justify-between;
		/* BORDERS */
		/* COLORS */
		/* TEXT */
		/* ANIMATION AND EFFECTS */

		.--back-link {
			/* SIZE */
			/* MARGINS AND PADDING */
			@apply px-0 lg:px-20;
			/* LAYOUT */
			@apply flex gap-3;
			/* BORDERS */
			/* COLORS */
			/* TEXT */
			/* ANIMATION AND EFFECTS */
		}

		.--details-wrapper {
			/* SIZE */
			/* MARGINS AND PADDING */
			/* LAYOUT */
			@apply flex gap-16;
			/* BORDERS */
			/* COLORS */
			/* TEXT */
			/* ANIMATION AND EFFECTS */

			.--text-wrapper {
				/* SIZE */
				@apply w-full lg:w-1/2;
				/* MARGINS AND PADDING */
				@apply mx-auto;
				/* LAYOUT */
				@apply flex flex-col justify-center gap-4;
				/* BORDERS */
				/* COLORS */
				/* TEXT */
				/* ANIMATION AND EFFECTS */

				.--title {
					/* SIZE */
					/* MARGINS AND PADDING */
					/* LAYOUT */
					/* BORDERS */
					/* COLORS */
					/* TEXT */
					@apply text-4xl lg:text-6xl;
					/* ANIMATION AND EFFECTS */
				}
			}

			.--button-group {
				/* SIZE */
				/* MARGINS AND PADDING */
				/* LAYOUT */
				@apply flex items-center justify-start gap-4;
				/* BORDERS */
				/* COLORS */
				/* TEXT */
				/* ANIMATION AND EFFECTS */

				.--link-button {
					/* SIZE */
					/* MARGINS AND PADDING */
					@apply py-2 px-4;
					/* LAYOUT */
					/* BORDERS */
					@apply border-2 border-black rounded;
					/* COLORS */
					/* TEXT */
					@apply text-base font-bold;
					/* ANIMATION AND EFFECTS */
				}
			}
		}
	}
</style>
