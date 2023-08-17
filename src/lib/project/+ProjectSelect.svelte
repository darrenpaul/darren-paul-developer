<script lang="ts">
	import ArrowLeft from '$lib/icons/+ArrowLeft.svelte';
	import ArrowRight from '$lib/icons/+ArrowRight.svelte';

	export let previousProject;
	export let nextProject;
</script>

<div class="project-select">
	{#if previousProject}
		<a class="--link" href={`/projects/${previousProject.slug}`}>
			<div class="--icon-wrapper">
				<ArrowLeft />
				<p>
					<b>Older</b>
				</p>
			</div>

			<p>{previousProject.title}</p>
		</a>
	{/if}

	{#if nextProject}
		<a class="--link" href={`/projects/${nextProject.slug}`}>
			<div class="--icon-wrapper-end">
				<p>
					<b>Newer</b>
				</p>
				<ArrowRight />
			</div>

			<p>{nextProject.title}</p>
		</a>
	{/if}
</div>

<style lang="scss">
	.project-select {
		/* SIZE */
		@apply w-full;
		/* MARGINS AND PADDING */
		@apply pt-4;
		/* LAYOUT */
		@apply flex justify-between items-center;
		/* BORDERS */
		@apply border-t-8 border-black;
		/* COLORS */
		/* TEXT */
		/* ANIMATION AND EFFECTS */

		.--link {
			/* SIZE */
			/* MARGINS AND PADDING */
			/* LAYOUT */
			/* BORDERS */
			/* COLORS */
			/* TEXT */
			/* ANIMATION AND EFFECTS */
			.--icon-wrapper {
				/* SIZE */
				/* MARGINS AND PADDING */
				/* LAYOUT */
				@apply flex gap-4;
				/* BORDERS */
				/* COLORS */
				/* TEXT */
				/* ANIMATION AND EFFECTS */
			}

			.--icon-wrapper-end {
				@extend .--icon-wrapper;
				/* SIZE */
				/* MARGINS AND PADDING */
				/* LAYOUT */
				@apply justify-end;
				/* BORDERS */
				/* COLORS */
				/* TEXT */
				/* ANIMATION AND EFFECTS */
			}
		}
	}
</style>
