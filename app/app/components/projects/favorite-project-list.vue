<script setup lang="ts">
import type { Project } from '~~/types/project'
import { projectsRoute } from '~~/constants/routes'

const props = defineProps({
	label: { type: String, required: false },
	projects: { type: Array as PropType<Project[]>, required: true },
	showLink: { type: Boolean, required: false, default: true },
})
</script>

<template>
	<div class="px-2 md:px-0">
		<div v-if="props.label" class="flex justify-between items-center mb-3">
			<h2 class="text-4xl font-bold mb-4 text-neutral-950 pl-2 uppercase">
				{{ props.label }}
			</h2>

			<NuxtLink
				v-if="props.showLink"
				:to="projectsRoute.path"
				class="btn btn-lg btn-outline btn-neutral shadow-hard"
			>
				See All Projects
			</NuxtLink>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
			<ProjectsFavoriteProjectListItem
				v-for="project in props.projects"
				:key="project.id"
				:project="project"
			/>
		</div>
	</div>
</template>

<style scoped></style>
