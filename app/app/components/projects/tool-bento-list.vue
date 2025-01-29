<script setup lang="ts">
import type { Tool } from '~~/types/tool'

const props = defineProps({
	tools: { type: Array as PropType<Tool[]>, required: true },
})
</script>

<template>
	<div class="grid grid-cols-5 gap-2 h-fit">
		<ProjectsToolBentoListItem
			v-for="tool in props.tools"
			:key="tool.id"
			:tool="tool"
		/>
	</div>
</template>
