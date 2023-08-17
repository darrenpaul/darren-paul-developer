<script lang="ts">
	import ContentSection from '$lib/+ContentSection.svelte';

	export let data;
	export let title;
</script>

<section class="projects">
	<h2 class="--heading">{title}</h2>

	<ul class="--list">
		{#each data as project, index (index)}
			<li class="--item">
				<ContentSection data={project} flip={index % 2 == 0 ? false : true} />
			</li>
		{/each}
	</ul>
</section>

<style lang="scss">
	@import 'src/styles/projects.scss';
</style>
