<script lang="ts">
	import ContentSection from '$lib/+ContentSection.svelte';
	import ProjectsCta from '$lib/+ProjectsCta.svelte';

	export let data;
	export let title;
	export let showCta = false;
</script>

<section class="projects">
	{#if showCta}
		<ProjectsCta />
	{:else}
		<h1 class="--heading">{title}</h1>
	{/if}

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
