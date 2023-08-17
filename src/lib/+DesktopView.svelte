<script lang="ts">
	import { page } from '$app/stores';
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

<div class="desktop-view">
	<div class="--header">
		<div class="--button-group">
			<div class="--button" />
			<div class="--button" />
			<div class="--button" />
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

	<div class="--content">
		<img src={urlForImage(activeImage)} alt={$page.params.slug.replaceAll('-', '')} />
	</div>
</div>

<style lang="scss">
	.desktop-view {
		/* SIZE */
		@apply max-w-[883px] h-[584px];
		/* MARGINS AND PADDING */
		@apply mx-auto mb-16;
		/* LAYOUT */
		/* BORDERS */
		@apply border-8 border-black rounded-2xl overflow-hidden;
		/* COLORS */
		/* TEXT */
		/* ANIMATION AND EFFECTS */

		.--header {
			/* SIZE */
			@apply w-full h-8;
			/* MARGINS AND PADDING */
			/* LAYOUT */
			@apply flex;
			/* BORDERS */
			@apply border-b-4 border-black;
			/* COLORS */
			/* TEXT */
			/* ANIMATION AND EFFECTS */

			.--button-group {
				/* SIZE */
				@apply h-full;
				/* MARGINS AND PADDING */
				@apply px-3;
				/* LAYOUT */
				@apply flex items-center gap-2;
				/* BORDERS */
				/* COLORS */
				/* TEXT */
				/* ANIMATION AND EFFECTS */

				.--button {
					/* SIZE */
					@apply w-3 h-3;
					/* MARGINS AND PADDING */
					/* LAYOUT */
					/* BORDERS */
					@apply border-2 border-black rounded-full;
					/* COLORS */
					/* TEXT */
					/* ANIMATION AND EFFECTS */
				}
			}

			.--tabs {
				/* SIZE */
				@apply w-full h-full;
				/* MARGINS AND PADDING */
				/* LAYOUT */
				/* BORDERS */
				@apply border-l-2 border-black;
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
