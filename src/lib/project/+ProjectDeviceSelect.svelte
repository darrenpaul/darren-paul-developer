<script lang="ts">
	import DesktopView from '$lib/+DesktopView.svelte';
	import MobileView from '$lib/+MobileView.svelte';

	export let data;

	let device = 'desktop';

	$: {
		if (!data.mobileImages) {
			device = 'desktop';
		}
	}

	const onDeviceChange = (newDevice: string) => {
		device = newDevice;
	};
</script>

<div class="device-select">
	<div class="--device-view-selector-wrapper">
		<h3>Device Views</h3>

		<div class="--device-buttons">
			<button
				class={device === 'desktop' ? '--active' : ''}
				on:click={() => onDeviceChange('desktop')}>Desktop</button
			>

			{#if data.mobileImages}
				<button
					class={device === 'mobile' ? '--active' : ''}
					on:click={() => onDeviceChange('mobile')}>Mobile</button
				>
			{/if}
		</div>
	</div>

	{#if device === 'desktop'}
		<DesktopView images={data.desktopImages} />
	{:else}
		<MobileView images={data.mobileImages} />
	{/if}
</div>

<style lang="scss">
	.device-select {
		/* SIZE */
		/* MARGINS AND PADDING */
		/* LAYOUT */
		/* BORDERS */
		/* COLORS */
		/* TEXT */
		/* ANIMATION AND EFFECTS */

		.--device-view-selector-wrapper {
			/* SIZE */
			/* MARGINS AND PADDING */
			/* LAYOUT */
			@apply flex flex-col md:flex-row justify-center items-center gap-0 md:gap-8;
			/* BORDERS */
			/* COLORS */
			/* TEXT */
			/* ANIMATION AND EFFECTS */

			h3 {
				/* SIZE */
				/* MARGINS AND PADDING */
				@apply mb-4;
				/* LAYOUT */
				/* BORDERS */
				/* COLORS */
				/* TEXT */
				@apply text-xl font-bold text-center;
				/* ANIMATION AND EFFECTS */
			}
		}

		.--device-buttons {
			/* SIZE */
			/* MARGINS AND PADDING */
			@apply mb-4;
			/* LAYOUT */
			@apply flex items-center justify-center;
			/* BORDERS */
			/* COLORS */
			/* TEXT */
			/* ANIMATION AND EFFECTS */

			button {
				/* SIZE */
				@apply w-40;
				/* MARGINS AND PADDING */
				@apply py-2 px-4;
				/* LAYOUT */
				/* BORDERS */
				@apply border-2 border-black;
				/* COLORS */
				@apply bg-white text-black;
				/* TEXT */
				@apply font-bold;
				/* ANIMATION AND EFFECTS */

				&:first-child {
					/* SIZE */
					/* MARGINS AND PADDING */
					/* LAYOUT */
					/* BORDERS */
					@apply rounded-tl-3xl rounded-bl-3xl border-r;
					/* COLORS */
					/* TEXT */
					/* ANIMATION AND EFFECTS */
				}

				&:last-child {
					/* SIZE */
					/* MARGINS AND PADDING */
					/* LAYOUT */
					/* BORDERS */
					@apply rounded-br-3xl rounded-tr-3xl border-l;
					/* COLORS */
					/* TEXT */
					/* ANIMATION AND EFFECTS */
				}
			}

			.--active {
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
</style>
