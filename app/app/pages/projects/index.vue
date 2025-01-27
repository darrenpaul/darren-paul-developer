<script setup lang="ts">
import { projectsApiRoute } from '~~/constants/routes-api'
import UrlQueryBuilder from '~/lib/builders/url-query-builder'

const urlQueryBuilder = new UrlQueryBuilder(projectsApiRoute.path)

const [{ data: dataProjects }] = await Promise.all([
	useFetch(urlQueryBuilder.build(), {
		method: 'GET',
	}),
])
</script>

<template>
	<div class="min-h-screen pt-28 max-w-screen-xl mx-auto flex flex-col gap-16">
		<ProjectsProjectList
			label="All Projects"
			:projects="dataProjects.projects"
		/>
	</div>
</template>
