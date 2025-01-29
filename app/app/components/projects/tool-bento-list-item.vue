<script setup lang="ts">
const props = defineProps({
	tool: { type: Object as PropType<Tool>, required: true },
})
</script>

<template>
	<div
		class="bg-white rounded-lg shadow-hard border-2 border-neutral-950 w-full aspect-square md:h-fit flex items-center justify-center"
	>
		<NuxtImg
			:src="props.tool.iconUri"
			:alt="`${props.tool.title} Icon`"
			class="w-10"
		/>
	</div>
</template>
