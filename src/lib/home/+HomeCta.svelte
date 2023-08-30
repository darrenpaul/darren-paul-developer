<script lang="ts">
	import Github from '$lib/icons/+Github.svelte';
	import Linkedin from '$lib/icons/+Linkedin.svelte';
	import Instagram from '$lib/icons/+Instagram.svelte';

	const iconSize = 32;
</script>

<section class="home-cta">
	<div class="--text-wrapper">
		<h1 class="--title">Front-End Developer</h1>

		<p class="--description">
			Hey, I’m Darren Paul a Software Engineer specializing in Front-End Web Development and based
			in the Vienna, Austria. I have a passion for creating beautiful, responsive and accessible
			websites and applications.
		</p>

		<div class="--icons-wrapper">
			<a
				href="https://github.com/darrenpaul/"
				target="_blank"
				aria-label="View Darren Paul GitHub page"
			>
				<Github width={iconSize} height={iconSize} />
			</a>

			<a
				href="https://www.linkedin.com/in/darren-paul-16765ab2/"
				target="_blank"
				aria-label="View Darren Paul LinkedIn page"
			>
				<Linkedin width={iconSize} height={iconSize} />
			</a>

			<a
				href="https://www.instagram.com/darrenrpaul/"
				target="_blank"
				aria-label="View Darren Paul Instagram page"
			>
				<Instagram width={iconSize} height={iconSize} />
			</a>
		</div>
	</div>

	<div class="--image-wrapper">
		<img
			class="--image"
			src="https://res.cloudinary.com/darren-paul-photography/image/upload/v1693379390/darren-paul-developer/darren-paul-cartoon_bs40kv.webp"
			alt="Darren Paul"
		/>
	</div>
</section>

<style lang="scss">
	.home-cta {
		/* SIZE */
		min-height: calc(100dvh - 48px);
		/* MARGINS AND PADDING */
		@apply pt-12 md:pt-0 px-5 md:px-40;
		/* LAYOUT */
		@apply flex flex-col-reverse items-center justify-center gap-8 md:gap-16 lg:grid grid-cols-2;
		/* BORDERS */
		/* COLORS */
		/* TEXT */
		/* ANIMATION AND EFFECTS */

		.--text-wrapper {
			/* SIZE */
			/* MARGINS AND PADDING */
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
				@apply text-3xl text-center md:text-left md:text-4xl 2xl:text-6xl;
				/* ANIMATION AND EFFECTS */
			}

			.--description {
				/* SIZE */
				/* MARGINS AND PADDING */
				@apply px-4 pt-4;
				/* LAYOUT */
				/* BORDERS */
				@apply border-t-8 border-black;
				/* COLORS */
				/* TEXT */
				@apply text-base;
				/* ANIMATION AND EFFECTS */
			}

			.--icons-wrapper {
				/* SIZE */
				/* MARGINS AND PADDING */
				/* LAYOUT */
				@apply flex justify-center md:justify-end items-center gap-4;
				/* BORDERS */
				/* COLORS */
				/* TEXT */
				/* ANIMATION AND EFFECTS */
			}
		}

		.--image-wrapper {
			/* SIZE */
			/* MARGINS AND PADDING */
			/* LAYOUT */
			@apply flex-shrink-0 flex items-center justify-center;
			/* BORDERS */
			/* COLORS */
			/* TEXT */
			/* ANIMATION AND EFFECTS */

			.--image {
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
