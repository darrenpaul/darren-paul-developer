<script setup lang="ts">
const content = ref<string>('')

async function handleExperienceSave() {
	await $fetch('/api/v1/admin/experience', {
		method: 'PATCH',
		body: {
			id: '88c47c6e-b8c3-4fb9-92cf-0e533efc31c5',
			content: content.value,
		},
	})
}
</script>

<template>
	<div class="mt-32 max-w-[80ch] mx-auto">
		<ClientOnly>
			<LazyRichTextEditor
				v-model="content"
				class="mb-6"
				label-title="Blog Editor"
				label-description=""
			/>
		</ClientOnly>

		<button
			type="button"
			class="btn btn-neutral btn-block"
			@click="handleExperienceSave"
		>
			Save Blog
		</button>
	</div>
</template>
