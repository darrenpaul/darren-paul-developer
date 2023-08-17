<script lang="ts">
	import { urlForImage } from '$lib/sanityClient.js';

	export let data;
</script>

<section class="project-images">
	<ul class="--list">
		{#each data.projectImages as image, index (index)}
			<li class="--item">
				<div class="--border-top" />

				<img src={urlForImage(image)} />

				<div class="--border-bottom" />
			</li>
		{/each}
	</ul>
</section>

<style lang="scss">
	@import 'src/styles/project.scss';
</style>
