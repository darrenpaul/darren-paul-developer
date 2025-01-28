<script setup lang="ts">
import type { Project } from '~~/types/project'
import IconLink from '~/assets/icons/link.svg'

const props = defineProps({
	project: { type: Object as PropType<Project>, required: true },
})

const { trackEvent } = useAnalytics()
</script>

<template>
	<div
		class="bg-white rounded-lg p-4 shadow-hard border-2 border-neutral-950 flex flex-col md:grid grid-cols-5 gap-2 md:gap-8"
	>
		<NuxtImg
			:src="props.project.thumbnailUri"
			:alt="`${props.project.title} Thumbnail`"
			class="w-full h-72 object-cover rounded-md flex-shrink-0 col-span-2"
		/>

		<div class="py-6 pr-0 md:pr-6 flex flex-col gap-4 col-span-3">
			<div
				class="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0"
			>
				<p class="text-3xl font-bold uppercase">
					{{ props.project.title }}
				</p>

				<div class="flex gap-4">
					<!-- <NuxtLink class="btn btn-circle btn-neutral p-2 flex items-center justify-center rounded-full shadow-hard border-2 border-neutral-950" :to="joinUrlDirectories([projectsRoute.path, props.project.slug])">
						<IconMagnifier filled :font-controlled="false" class="w-6 h-6 fill-white" />
					</NuxtLink> -->

					<NuxtLink
						v-if="props.project.liveUri"
						rel="noreferrer noopener"
						target="_blank"
						class="btn btn-circle btn-neutral p-2 flex items-center justify-center rounded-full shadow-hard border-2 border-neutral-950"
						:to="props.project.liveUri"
						@click="() => trackEvent(`${props.project.slug}_live_uri_clicked`)"
					>
						<IconLink
							filled
							:font-controlled="false"
							class="w-6 h-6 fill-white"
						/>
					</NuxtLink>

					<!-- <NuxtLink class="btn btn-circle btn-neutral p-2 flex items-center justify-center rounded-full shadow-hard border-2 border-neutral-950" to="/projects/project-name">
						<IconGithub filled :font-controlled="false" class="w-6 h-6 fill-white" />
					</NuxtLink> -->
				</div>
			</div>

			<p class="max-w-[80ch] text-neutral-950">
				{{ props.project.description }}
			</p>

			<ToolList
				v-if="props.project.tools.length > 0"
				:tools="props.project.tools"
			/>
		</div>
	</div>
</template>

<style scoped></style>
