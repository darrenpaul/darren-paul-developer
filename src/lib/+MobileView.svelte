<script lang="ts">
	import { urlForImage } from '$lib/sanityClient.js';

	export let images;
	export let activeImage = images[0];

	$: {
		activeImage = images[0];
	}

	const onImageSet = (image) => {
		activeImage = image;
	};
</script>

<div class="mobile-view">
	<div class="--header" />

	<div class="--content">
		<img src={urlForImage(activeImage)} alt="image" />
	</div>

	<div class="--tabs">
		{#each images as image, index (index)}
			<button
				class={image._key === activeImage._key ? '--tab-active' : '--tab'}
				on:click={() => onImageSet(image)}>Preview {index + 1}</button
			>
		{/each}
	</div>
</div>

<style lang="scss">
	.mobile-view {
		/* SIZE */
		@apply w-[360px] h-[584px];
		/* MARGINS AND PADDING */
		@apply mx-auto mb-16;
		/* LAYOUT */
		@apply relative;
		/* BORDERS */
		@apply border-8 border-black rounded-3xl overflow-hidden;
		/* COLORS */
		/* TEXT */
		/* ANIMATION AND EFFECTS */

		.--header {
			/* SIZE */
			@apply w-20 h-6;
			/* MARGINS AND PADDING */
			/* LAYOUT */
			@apply absolute top-4 left-1/2 -translate-x-1/2;
			/* BORDERS */
			@apply border-2 border-black rounded-full;
			/* COLORS */
			@apply bg-black;
			/* TEXT */
			/* ANIMATION AND EFFECTS */
		}

		.--tabs {
			/* SIZE */
			@apply w-full h-8;
			/* MARGINS AND PADDING */
			/* LAYOUT */
			/* BORDERS */
			@apply border-t-4 border-black;
			/* COLORS */
			/* TEXT */
			/* ANIMATION AND EFFECTS */

			.--tab {
				/* SIZE */
				@apply h-full;
				/* MARGINS AND PADDING */
				@apply px-4;
				/* LAYOUT */
				/* BORDERS */
				@apply border-r-2 border-black;
				/* COLORS */
				@apply bg-white text-black;
				/* TEXT */
				@apply font-bold;
				/* ANIMATION AND EFFECTS */
			}

			.--tab-active {
				@extend .--tab;

				/* SIZE */
				/* MARGINS AND PADDING */
				/* LAYOUT */
				/* BORDERS */
				/* COLORS */
				@apply bg-black text-white;
				/* TEXT */
				/* ANIMATION AND EFFECTS */
			}
		}

		.--content {
			/* SIZE */
			height: calc(100% - 2rem);
			/* MARGINS AND PADDING */
			/* LAYOUT */
			@apply overflow-hidden overflow-y-auto;
			/* BORDERS */
			/* COLORS */
			/* TEXT */
			/* ANIMATION AND EFFECTS */
		}
	}
</style>
