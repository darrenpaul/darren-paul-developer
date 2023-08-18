<script lang="ts">
	import SeeMore from '$lib/+SeeMore.svelte';
</script>

<section class="projects-cta">
	<div class="--details-wrapper">
		<div class="--text-wrapper">
			<h1 class="--title">Projects</h1>

			<p>
				Presenting a diverse portfolio showcasing my expertise in front-end web development. Among
				the standout projects, Couches For Sale emerges as an innovative online furniture store,
				marrying WordPress with NuxtJS for a seamless customer experience. Raicoon AOC, a pioneering
				software platform, employs AI and machine learning to optimize renewable energy systems.
				Shavet Supplies gains a fresh online presence through a well-crafted landing page, while
				Alicia Chamaillé's photography and writing talents shine in a budget-friendly, SEO-enhanced
				site. Meanwhile, Darren Paul Photography showcases landscapes unrestricted by format, Acamp
				revolutionizes camping experiences, and Pomorize merges task management with the Pomodoro
				technique. Galleria, Coffee Roasters, The Planets, and Splitter demonstrate versatility in
				design and functionality, while Carrick Wealth Concierge underscores my role in shaping
				innovative IPs for a leading wealth advisory firm. Each project embodies creativity,
				usability, and a commitment to excellence.
			</p>
		</div>
	</div>

	<SeeMore />
</section>

<style lang="scss">
	.projects-cta {
		/* SIZE */
		min-height: calc(100dvh - 64px);
		/* MARGINS AND PADDING */
		@apply px-5 lg:px-0 py-10;
		/* LAYOUT */
		@apply flex flex-col justify-between;
		/* BORDERS */
		/* COLORS */
		/* TEXT */
		/* ANIMATION AND EFFECTS */

		.--details-wrapper {
			/* SIZE */
			/* MARGINS AND PADDING */
			@apply mb-12;
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
		}
	}
</style>
