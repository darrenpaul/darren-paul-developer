<script setup lang="ts">
import type { Experience } from '~~/types/experience'

const props = defineProps({
	experiences: { type: Array as PropType<Experience[]>, required: true },
})
</script>

<template>
	<div class="px-2 md:px-0">
		<h2 class="text-4xl font-bold mb-6 uppercase">
			Work Experience
		</h2>

		<div
			class="bg-white rounded-lg p-2 md:p-8 shadow-hard border-2 border-neutral-950 w-full"
		>
			<WorkExperienceListItem
				v-for="(experience, index) in props.experiences"
				:key="experience.id"
				:experience="experience"
				:is-last-item="index === props.experiences.length - 1"
			/>
		</div>
	</div>
</template>

<style scoped></style>
