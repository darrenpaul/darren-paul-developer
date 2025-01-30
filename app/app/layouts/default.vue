<script setup lang="ts">
import {
	Toaster,
	useToaster,
} from '~~/modules/toast-notification-module/runtime'

const { notification } = useToaster()
</script>

<template>
	<div class="bg-gradient-to-b from-sky-50 to-sky-100 px-4">
		<Toaster :notification="notification" />

		<Navigation />

		<slot />

		<Footer />
	</div>
</template>
