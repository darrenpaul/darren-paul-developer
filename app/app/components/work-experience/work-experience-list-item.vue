<script setup lang="ts">
import type { Experience } from '~~/types/experience'
import { format } from 'date-fns'

const props = defineProps({
	experience: { type: Object as PropType<Experience>, required: true },
	isLastItem: { type: Boolean, required: false },
})
</script>

<template>
	<div>
		<div class="flex flex-col md:hidden w-full">
			<p class="text-xl font-bold uppercase">
				{{ props.experience.company }}
			</p>

			<p class="text-neutral-950">
				{{ format(props.experience.startDate, "MMM yyyy") }} -
				{{
					props.experience.endDate
						? format(props.experience.endDate, "MMM yyyy")
						: "Current"
				}}
			</p>

			<p class="font-bold uppercase">
				{{ props.experience.employmentType }}
			</p>

			<div tabindex="0" class="collapse collapse-arrow mb-0">
				<div class="collapse-title px-0 py-0">
					<p class="text-2xl font-bold uppercase max-w-[80ch]">
						{{ props.experience.role }}
					</p>
				</div>

				<div class="text-neutral-950 w-full collapse-content p-0">
					<ToolList class="mb-6" :tools="props.experience.tools" />

					<div class="tiptap max-w-[80ch]" v-html="props.experience.content" />
				</div>
			</div>
		</div>

		<div class="hidden md:flex gap-4 w-full">
			<div class="w-[40ch] text-right flex flex-col items-end">
				<p class="text-xl font-bold uppercase mt-0.5">
					{{ props.experience.company }}
				</p>
				<p class="text-neutral-950">
					{{ format(props.experience.startDate, "MMM yyyy") }} -
					{{
						props.experience.endDate
							? format(props.experience.endDate, "MMM yyyy")
							: "Current"
					}}
				</p>
				<p class="font-bold uppercase mb-6">
					{{ props.experience.employmentType }}
				</p>
			</div>

			<div class="flex flex-col items-center w-4 translate-y-1.5">
				<div
					class="w-4 h-4 bg-sky-500 rounded-full ring-4 ring-sky-500/20 absolute"
				/>
				<div v-if="!props.isLastItem" class="h-full w-0.5 bg-sky-600" />
			</div>

			<div tabindex="0" class="collapse collapse-arrow">
				<div class="collapse-title p-0">
					<p class="text-2xl font-bold uppercase max-w-[80ch]">
						{{ props.experience.role }}
					</p>
				</div>

				<div class="text-neutral-950 w-full collapse-content">
					<ToolList class="mb-6" :tools="props.experience.tools" />

					<div class="tiptap max-w-[80ch]" v-html="props.experience.content" />
				</div>
			</div>
		</div>
	</div>
</template>
