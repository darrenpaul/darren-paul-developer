<script lang="ts">
	import { navigationRoutes } from '$lib/routes';
	import { page } from '$app/stores';
	import Menu from './icons/+Menu.svelte';
	import Cross from './icons/+Cross.svelte';

	$page.url.pathname;

	let menuOpen = false;

	$: $page.url && (menuOpen = false);
</script>

<nav class="navigation-desktop-wrapper">
	<div class="--branding-wrapper">
		<a href="/">
			<h2>DarrenPaul.dev</h2>
		</a>
	</div>

	<ul class="--list">
		{#each navigationRoutes as route}
			<li class="--item">
				<a href={route.path} class={$page.url.pathname === route.path ? '--active' : ''}>
					{route.name}
				</a>
			</li>
		{/each}
	</ul>
</nav>

<nav class="navigation-mobile-wrapper">
	<div class="--branding-wrapper">
		<a href="/">
			<h2>DarrenPaul.dev</h2>
		</a>
	</div>

	<button class="--menu-toggle-button" on:click={() => (menuOpen = !menuOpen)}>
		{#if menuOpen === true}
			<Cross />
		{:else}
			<Menu />
		{/if}
	</button>

	{#if menuOpen === true}
		<div class="--menu">
			<ul class="--list">
				{#each navigationRoutes as route}
					<li class="--item">
						<a href={route.path} class={$page.url.pathname === route.path ? '--active' : ''}>
							{route.name}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</nav>

<style lang="scss">
	.navigation-desktop-wrapper {
		/* SIZE */
		@apply w-full h-16;
		/* MARGINS AND PADDING */
		@apply px-40;
		/* LAYOUT */
		@apply fixed hidden md:flex justify-between z-50;
		/* BORDERS */
		/* COLORS */
		@apply bg-white/90;
		/* TEXT */
		/* ANIMATION AND EFFECTS */

		.--branding-wrapper {
			/* SIZE */
			@apply h-full;
			/* MARGINS AND PADDING */
			/* LAYOUT */
			@apply flex items-center justify-center;
			/* BORDERS */
			/* COLORS */
			/* TEXT */
			/* ANIMATION AND EFFECTS */

			h2 {
				/* SIZE */
				/* MARGINS AND PADDING */
				/* LAYOUT */
				/* BORDERS */
				/* COLORS */
				/* TEXT */
				@apply font-bold text-xl;
				/* ANIMATION AND EFFECTS */
			}
		}

		.--list {
			/* SIZE */
			@apply h-full;
			/* MARGINS AND PADDING */
			/* LAYOUT */
			@apply grid grid-cols-4 gap-4;
			/* BORDERS */
			/* COLORS */
			/* TEXT */
			/* ANIMATION AND EFFECTS */

			.--item {
				/* SIZE */
				@apply h-full;
				/* MARGINS AND PADDING */
				/* LAYOUT */
				@apply flex items-center justify-center;
				/* BORDERS */
				/* COLORS */
				/* TEXT */
				@apply capitalize;
				/* ANIMATION AND EFFECTS */

				.--active {
					/* SIZE */
					/* MARGINS AND PADDING */
					/* LAYOUT */
					/* BORDERS */
					@apply border-b-4 border-black;
					/* COLORS */
					/* TEXT */
					@apply font-bold;
					/* ANIMATION AND EFFECTS */
				}
			}
		}
	}

	.navigation-mobile-wrapper {
		/* SIZE */
		@apply w-full h-16;
		/* MARGINS AND PADDING */
		@apply px-5;
		/* LAYOUT */
		@apply fixed flex items-center justify-between md:hidden z-50;
		/* BORDERS */
		/* COLORS */
		@apply bg-black text-white;
		/* TEXT */
		/* ANIMATION AND EFFECTS */

		.--branding-wrapper {
			/* SIZE */
			@apply h-full;
			/* MARGINS AND PADDING */
			/* LAYOUT */
			@apply flex items-center justify-center;
			/* BORDERS */
			/* COLORS */
			/* TEXT */
			/* ANIMATION AND EFFECTS */

			h2 {
				/* SIZE */
				/* MARGINS AND PADDING */
				/* LAYOUT */
				/* BORDERS */
				/* COLORS */
				/* TEXT */
				@apply font-bold text-xl;
				/* ANIMATION AND EFFECTS */
			}
		}

		.--menu-toggle-button {
			/* SIZE */
			@apply h-fit;
			/* MARGINS AND PADDING */
			/* LAYOUT */
			@apply flex items-center justify-center;
			/* BORDERS */
			/* COLORS */
			/* TEXT */
			/* ANIMATION AND EFFECTS */
		}

		.--menu {
			/* SIZE */
			@apply w-full h-screen;
			/* MARGINS AND PADDING */
			@apply mt-16;
			/* LAYOUT */
			@apply fixed z-50 left-0 top-0;
			/* BORDERS */
			/* COLORS */
			@apply bg-black;
			/* TEXT */
			/* ANIMATION AND EFFECTS */

			.--list {
				/* SIZE */
				/* MARGINS AND PADDING */
				@apply pt-8;
				/* LAYOUT */
				@apply grid gap-5;
				/* BORDERS */
				/* COLORS */
				/* TEXT */
				/* ANIMATION AND EFFECTS */

				.--item {
					/* SIZE */
					/* MARGINS AND PADDING */
					@apply px-5;
					/* LAYOUT */
					/* BORDERS */
					/* COLORS */
					/* TEXT */
					@apply text-3xl capitalize;
					/* ANIMATION AND EFFECTS */

					.--active {
						/* SIZE */
						/* MARGINS AND PADDING */
						@apply ml-5 pl-4;
						/* LAYOUT */
						/* BORDERS */
						@apply border-l-4 border-white;
						/* COLORS */
						/* TEXT */
						@apply font-bold;
						/* ANIMATION AND EFFECTS */
					}
				}
			}
		}
	}
</style>
