<script lang="ts">
	import { PortableText } from '@portabletext/svelte';

	export let data;
</script>

<div class="project-about">
	<h2 class="--heading">About Project</h2>

	<div class="--text-wrapper">
		{#if data?.description}
			<PortableText value={data.description} />
		{/if}
	</div>
</div>

<style lang="scss">
	.project-about {
		/* SIZE */
		/* MARGINS AND PADDING */
		@apply px-5 lg:px-0 mb-16;
		/* LAYOUT */
		/* BORDERS */
		/* COLORS */
		/* TEXT */
		/* ANIMATION AND EFFECTS */

		.--heading {
			/* SIZE */
			/* MARGINS AND PADDING */
			@apply mb-8;
			/* LAYOUT */
			/* BORDERS */
			/* COLORS */
			/* TEXT */
			@apply text-3xl font-bold text-center;
			/* ANIMATION AND EFFECTS */
		}

		.--text-wrapper {
			/* SIZE */
			@apply w-full lg:w-1/2;
			/* MARGINS AND PADDING */
			@apply mx-auto mb-16;
			/* LAYOUT */
			/* BORDERS */
			/* COLORS */
			/* TEXT */
			/* ANIMATION AND EFFECTS */
		}
	}
</style>
