<script setup lang="ts">
import type { Project } from '~~/types/project'
import { projectsApiRoute } from '~~/constants/routes-api'
import UrlQueryBuilder from '~/lib/builders/url-query-builder'

const route = useRoute()

const urlQueryBuilder = new UrlQueryBuilder(
	`${projectsApiRoute.path}/${route.params.slug as string}`,
)

const [{ data }] = await Promise.all([
	useFetch<{ data: Project }>(urlQueryBuilder.build(), {
		method: 'GET',
	}),
])

if (!data.value || !data.value.data) {
	throw createError({ statusCode: 404, statusMessage: 'Project not found' })
}
</script>

<template>
	<div class="min-h-screen pt-28 max-w-screen-xl mx-auto px-2">
		<h1 class="text-3xl md:text-5xl font-bold mb-4 text-left md:text-right">
			{{ data?.data.title }}
		</h1>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 h-fit mb-8">
			<div
				class="bg-white rounded-lg shadow-hard border-2 border-neutral-950 h-fit"
			>
				<NuxtImg
					v-if="data"
					:src="data.data.thumbnailUri"
					:alt="`${data.data.title} Thumbnail`"
					class="w-full object-cover rounded-md h-[512px]"
				/>
			</div>

			<div>
				<ProjectsToolBentoList v-if="data" :tools="data.data.tools" />
			</div>
		</div>

		<div
			v-if="data && data.data.content"
			class="tiptap max-w-[80ch] mx-auto"
			v-html="data.data.content"
		/>
	</div>
</template>
