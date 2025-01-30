<script setup lang="ts">
import type { Project } from '~~/types/project'
import { projectsRoute } from '~~/constants/routes'
import { joinUrlDirectories } from '~~/lib/url-directory-join'
import IconLink from '~/assets/icons/link.svg'
import IconMagnifier from '~/assets/icons/magnifier.svg'

const props = defineProps({
	project: { type: Object as PropType<Project>, required: true },
})

const { trackEvent } = useAnalytics()
</script>

<template>
	<div
		class="bg-white rounded-lg p-4 shadow-hard border-2 border-neutral-950 flex flex-col gap-2"
	>
		<NuxtImg
			:src="props.project.thumbnailUri"
			:alt="`${props.project.title} Thumbnail`"
			class="w-full h-72 object-cover rounded-md flex-shrink-0 col-span-2"
		/>

		<div class="py-6 pr-0 md:pr-6 flex flex-col gap-4 col-span-3">
			<div class="flex flex-col justify-between items-center gap-4">
				<p class="text-3xl font-bold uppercase">
					{{ props.project.title }}
				</p>

				<div class="flex gap-4">
					<NuxtLink
						class="btn btn-circle btn-neutral p-2 flex items-center justify-center rounded-full shadow-hard border-2 border-neutral-950"
						:to="joinUrlDirectories([projectsRoute.path, props.project.slug])"
						@click="() => trackEvent(`view-${props.project.slug}-page`)"
					>
						<IconMagnifier
							filled
							:font-controlled="false"
							class="w-6 h-6 fill-white"
						/>
					</NuxtLink>

					<NuxtLink
						v-if="props.project.liveUri"
						rel="noreferrer noopener"
						target="_blank"
						class="btn btn-circle btn-neutral p-2 flex items-center justify-center rounded-full shadow-hard border-2 border-neutral-950"
						:to="props.project.liveUri"
						@click="() => trackEvent(`view-${props.project.slug}-live`)"
					>
						<IconLink
							filled
							:font-controlled="false"
							class="w-6 h-6 fill-white"
						/>
					</NuxtLink>
				</div>
			</div>

			<p class="max-w-[80ch] text-neutral-950 text-center">
				{{ props.project.description }}
			</p>
		</div>
	</div>
</template>

<style scoped></style>
