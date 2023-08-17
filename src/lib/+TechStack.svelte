<script lang="ts">
	import { html5, css3, typescript, tailwindCss, vue, nuxt, git } from '$lib/techStack';

	const techStack = [html5, css3, typescript, tailwindCss, vue, nuxt, git];
</script>

<section class="tech-stack-desktop-wrapper">
	<h2 class="--heading">Tech Stack</h2>

	<ul class="--list">
		<h3 class=" text-9xl inline-block align-middle">&lt;</h3>

		{#each techStack as tech}
			<li class="--item">
				<img src={tech.icon} alt={tech.name} />

				<p>{tech.name}</p>
			</li>
		{/each}

		<h3 class=" text-9xl inline-block align-middle">/&gt;</h3>
	</ul>
</section>

<section class="tech-stack-mobile-wrapper">
	<h2 class="--heading">Tech Stack</h2>

	<ul class="--list">
		{#each techStack as tech}
			<li class="--item">
				<img src={tech.icon} alt={tech.name} />

				<p>{tech.name}</p>
			</li>
		{/each}
	</ul>
</section>

<style lang="scss">
	@import 'src/styles/techStack.scss';
</style>
