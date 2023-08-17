<script lang="ts">
	import { PUBLIC_GOOGLE_ANALYTICS_ID } from '$env/static/public';
	import { page } from '$app/stores';

	export let googleAnalyticsId = PUBLIC_GOOGLE_ANALYTICS_ID;

	$: {
		if (typeof gtag !== 'undefined') {
			gtag('config', googleAnalyticsId, {
				page_title: document.title,
				page_path: $page.url.pathname
			});
		}
	}
</script>

<svelte:head>
	<script async src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}>
	</script>
	<script>
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}

		gtag('js', new Date());
		gtag('config', 'G-K6ZHFJZ5VH');
	</script>
</svelte:head>
