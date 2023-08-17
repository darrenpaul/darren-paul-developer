<script>
	import '../app.css';

	import Navigation from '$lib/+Navigation.svelte';
	import Footer from '$lib/+Footer.svelte';
</script>

<Navigation />

<div class="page">
	<slot />
</div>

<Footer />

<style lang="scss">
	// @import 'src/styles/global.scss';
</style>
