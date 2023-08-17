<script lang="ts">
	import {
		html5,
		css3,
		typescript,
		tailwindCss,
		vue,
		nuxt,
		git,
		nodejs,
		vitejs,
		javascript,
		reactjs,
		django,
		python,
		nextjs
	} from '$lib/techStack';

	export let projectTechStack;

	const matchFramework = (key: string) => {
		return [
			html5,
			css3,
			typescript,
			tailwindCss,
			vue,
			nuxt,
			git,
			nodejs,
			vitejs,
			javascript,
			reactjs,
			django,
			nextjs,
			python
		].find((tech) => tech.key === key);
	};

	const techStack = projectTechStack.map((tech) => matchFramework(tech));
</script>

<section class="project-tech-stack">
	<ul class="--list">
		{#each techStack as tech}
			<li class="--item">
				<img src={tech.icon} alt={tech.name} />
			</li>
		{/each}
	</ul>
</section>

<style lang="scss">
	.project-tech-stack {
		/* SIZE */
		/* MARGINS AND PADDING */
		/* LAYOUT */
		/* BORDERS */
		/* COLORS */
		/* TEXT */
		/* ANIMATION AND EFFECTS */

		.--list {
			/* SIZE */
			/* MARGINS AND PADDING */
			/* LAYOUT */
			@apply flex justify-start gap-4;
			/* BORDERS */
			/* COLORS */
			/* TEXT */
			/* ANIMATION AND EFFECTS */

			.--item {
				/* SIZE */
				/* MARGINS AND PADDING */
				/* LAYOUT */
				@apply flex justify-center items-center;
				/* BORDERS */
				/* COLORS */
				/* TEXT */
				/* ANIMATION AND EFFECTS */

				img {
					/* SIZE */
					@apply w-12;
					/* MARGINS AND PADDING */
					/* LAYOUT */
					/* BORDERS */
					/* COLORS */
					/* TEXT */
					/* ANIMATION AND EFFECTS */
				}
			}
		}
	}
</style>
