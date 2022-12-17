<template>
  <header>
    <button class="navigation-menu-button" @click="() => (isOpen = !isOpen)">
      <DonutIcon />
      <DonutIcon />
      <DonutIcon />
    </button>

    <div v-if="isOpen === true" class="navigation-menu">
      <div class="navigation-menu-links">
        <a
          v-for="({ key, name, path }, index) in ROUTES"
          :key="key"
          :class="['navigation-menu-link', matchRoute(path) === true && 'navigation-menu-link-active']"
          @click="() => onLinkClick(path)"
        >
          <p class="navigation-menu-link-p">{{ name }}</p>
          <div>
            <small class="navigation-menu-link-small"> {{ index + 1 }} </small>
          </div>
        </a>
      </div>
    </div>

    <div v-if="isOpen === true" class="blur-effect" @click="() => (isOpen = false)" />

    <div class="current-page">
      <div class="current-page-title-wrapper">
        <h3 class="current-page-title">
          {{ navigationTitle }}
        </h3>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ROUTES, HOME_ROUTE, PROJECTS_ROUTE } from '~~/constants/routes'

const route = useRoute()
const router = useRouter()
const isOpen = ref(false)

const navigationTitle = computed(() => {
  const matched = ROUTES.find((ROUTE) => ROUTE.path === route.path)
  if (matched) return matched.name
  return ''
})

const matchRoute = (path) => {
  if (path === route.path) return true
  if (path !== HOME_ROUTE.path && route.path.includes(path)) return true
  return false
}

const onLinkClick = (path) => {
  isOpen.value = false
  router.push(path)
}
</script>