<script setup lang="ts">
const content = ref<string>('')

async function handleSave() {
	await $fetch('/api/v1/admin/project', {
		method: 'PATCH',
		body: {
			id: '4cd68677-6e51-4494-a698-bc55450f1e0d',
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

		<button type="button" class="btn btn-neutral btn-block" @click="handleSave">
			Save Blog
		</button>
	</div>
</template>
