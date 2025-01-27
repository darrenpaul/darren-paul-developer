<script setup lang="ts">
import { experiencesApiRoute, projectsApiRoute } from '~~/constants/routes-api'
import UrlQueryBuilder from '~/lib/builders/url-query-builder'

const urlQueryBuilder = new UrlQueryBuilder(projectsApiRoute.path)

const [{ data: dataProjects }, { data: dataExperiences }] = await Promise.all([
	useFetch(
		urlQueryBuilder.withUrlQueryKeys({ limit: '3', favorite: 'true' }).build(),
		{
			method: 'GET',
		},
	),
	useFetch(experiencesApiRoute.path, {
		method: 'GET',
	}),
])
</script>

<template>
	<div
		class="min-h-screen md:pt-28 max-w-screen-xl mx-auto flex flex-col gap-16"
	>
		<HomeLander />

		<ProjectsProjectList
			label="Favorite Projects"
			:projects="dataProjects.projects"
		/>

		<WorkExperienceList :experiences="dataExperiences.experiences" />
	</div>
</template>
