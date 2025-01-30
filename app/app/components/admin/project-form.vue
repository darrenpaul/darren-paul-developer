<script setup lang="ts">
import type { Project } from '~~/types/project'

const projects = ref<Project[]>([])
const id = ref<string>('')
const content = ref<string>('')

onMounted(() => {
	$fetch('/api/v1/projects', {
		method: 'GET',
	}).then((data) => {
		projects.value = data.projects
	})
})

async function handleSave() {
	if (!id.value) {
		return
	}
	await $fetch('/api/v1/admin/project', {
		method: 'PATCH',
		body: {
			id: id.value,
			content: content.value,
		},
	})
}
</script>

<template>
	<div class="mt-32 max-w-[80ch] mx-auto">
		<select
			class="select select-bordered w-full max-w-xs"
			@change="id = $event.target.value"
		>
			<option disabled selected>
				Select a project
			</option>
			<option v-for="project in projects" :key="project.id" :value="project.id">
				{{ project.title }}
			</option>
		</select>

		<ClientOnly>
			<LazyRichTextEditor
				v-model="content"
				class="mb-6"
				label-title="Project Editor"
				label-description=""
			/>
		</ClientOnly>

		<button type="button" class="btn btn-neutral btn-block" @click="handleSave">
			Save Project
		</button>
	</div>
</template>
