<script setup lang="ts">
import type { Tool } from '~~/types/tool'

const props = defineProps({
	tools: { type: Array as PropType<Tool[]>, required: true },
})
</script>

<template>
	<div class="grid grid-cols-3 md:flex flex-wrap items-center gap-4 w-fit">
		<div
			v-for="tool in props.tools"
			:key="tool.id"
			class="flex flex-col gap-1 text-center items-center"
		>
			<NuxtImg
				class="h-8 object-contain mb-1"
				:src="tool.iconUri"
				:alt="tool.title"
			/>

			<small class="badge badge-ghost">{{ tool.title }}</small>
		</div>
	</div>
</template>

<style scoped></style>
