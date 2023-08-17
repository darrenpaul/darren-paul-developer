<script>
	import '../app.css';

	import Navigation from '$lib/+Navigation.svelte';
	import Footer from '$lib/+Footer.svelte';
	import Analytics from '$lib/+Analytics.svelte';
</script>

<Analytics />

<Navigation />

<div class="page">
	<slot />
</div>

<Footer />

<style lang="scss">
	// @import 'src/styles/global.scss';
</style>
