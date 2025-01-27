<script setup lang="ts">
const content = ref<string>('')

async function handleExperienceSave() {
	await $fetch('/api/v1/admin/experience', {
		method: 'PATCH',
		body: {
			id: 'e5720af2-7961-42e8-a9f6-f47d90ed036f',
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
