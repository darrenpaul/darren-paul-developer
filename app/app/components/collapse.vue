<script setup lang="ts">
import { kebabCase } from 'lodash-es'

const props = defineProps({
	title: { type: String, required: true },
})

const { trackEvent } = useAnalytics()
</script>

<template>
	<details class="collapse collapse-arrow">
		<summary
			class="collapse-title text-2xl font-bold uppercase pl-0 md:pl-4 pt-4 md:pt-0"
			@click="() => trackEvent(`view-${kebabCase(props.title)}`)"
		>
			{{ props.title }}
		</summary>
		<div class="collapse-content px-0 md:px-4">
			<slot />
		</div>
	</details>
</template>
