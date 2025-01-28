<script setup lang="ts">
import { homeRoute, navigationRoutes } from '~~/constants/routes'
import IconBrand from '~/assets/icons/brand.svg'
import IconCross from '~/assets/icons/cross.svg'
import IconGithub from '~/assets/icons/github.svg'
import IconLinkedin from '~/assets/icons/linkedin.svg'
import IconMenu from '~/assets/icons/menu.svg'

const router = useRouter()
const menuOpen = ref(false)

router.beforeEach(async () => {
	menuOpen.value = false
})

const { trackEvent } = useAnalytics()
</script>

<template>
	<div>
		<div
			class="max-w-screen-xl h-18 p-2 md:p-4 flex md:grid grid-cols-3 items-center justify-between shadow-hard rounded-xl border-2 border-neutral-950 bg-white fixed w-full left-1/2 -translate-x-1/2 top-0 md:top-6 z-navigation"
		>
			<div
				class="bg-neutral-950 rounded-full w-8 h-8 flex items-center justify-center"
			>
				<NuxtLink class="font-bold text-xl text-white" :to="homeRoute.path">
					<IconBrand class="w-8 h-8" filled :font-controlled="false" />
				</NuxtLink>
			</div>

			<div class="hidden md:flex gap-8 place-content-center">
				<NuxtLink
					v-for="route in navigationRoutes"
					:key="route.key"
					:to="route.path"
					class="text-lg"
					active-class="font-bold underline"
				>
					{{ route.label }}
				</NuxtLink>
			</div>

			<div class="hidden md:flex gap-2 place-content-end">
				<NuxtLink
					to="https://github.com/darrenpaul/"
					class="text-lg"
					active-class="font-bold underline"
					target="_blank"
					@click="() => trackEvent('github_clicked')"
				>
					<IconGithub filled :font-controlled="false" class="w-8 h-8" />
				</NuxtLink>

				<NuxtLink
					to="https://www.linkedin.com/in/darren-paul-16765ab2/"
					class="text-lg"
					active-class="font-bold underline"
					target="_blank"
					@click="() => trackEvent('linkedin_clicked')"
				>
					<IconLinkedin filled :font-controlled="false" class="w-8 h-8" />
				</NuxtLink>
			</div>

			<button
				for="navigation-drawer"
				class="btn md:hidden btn-ghost btn-square drawer-button"
				@click="menuOpen = true"
			>
				<IconMenu filled :font-controlled="false" class="w-8 h-8" />
			</button>
		</div>

		<div class="drawer">
			<input
				id="navigation-drawer"
				type="checkbox"
				class="drawer-toggle"
				:checked="menuOpen"
			>

			<div class="drawer-side z-drawer">
				<div
					for="navigation-drawer"
					aria-label="close sidebar"
					class="drawer-overlay"
					@click="menuOpen = false"
				/>

				<div class="flex flex-col justify-between bg-white min-h-full w-80 p-4">
					<div>
						<div class="flex justify-end items-center">
							<button
								for="navigation-drawer"
								class="btn btn-ghost btn-square drawer-button"
								@click="menuOpen = false"
							>
								<IconCross
									filled
									:font-controlled="false"
									class="w-8 h-8 fill-neutral-950"
								/>
							</button>
						</div>

						<div class="flex flex-col gap-2 mx-auto w-fit h-full">
							<NuxtLink
								v-for="route in navigationRoutes"
								:key="route.key"
								:to="route.path"
								class="text-4xl"
								active-class="font-bold underline"
							>
								{{ route.label }}
							</NuxtLink>
						</div>
					</div>

					<div class="flex gap-4 items-center justify-center">
						<NuxtLink
							to="/"
							class="text-lg"
							active-class="font-bold underline"
							target="_blank"
							@click="() => trackEvent('github_clicked')"
						>
							<IconGithub filled :font-controlled="false" class="w-8 h-8" />
						</NuxtLink>

						<NuxtLink
							to="/"
							class="text-lg"
							active-class="font-bold underline"
							target="_blank"
							@click="() => trackEvent('linkedin_clicked')"
						>
							<IconLinkedin filled :font-controlled="false" class="w-8 h-8" />
						</NuxtLink>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
