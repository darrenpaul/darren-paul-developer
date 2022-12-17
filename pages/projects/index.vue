<template>
  <div>
    <section class="projects-section">
      <div id="projects" ref="projectsElement" class="projects">
        <a
          v-for="({ _id, slug, title, synopsis, thumbnailImage, publishedAt }, index) in projects"
          :key="_id"
          class="project"
          :href="slug"
        >
          <div class="project-index">
            <h1 class="project-index-title">{{ String(index + 1).padStart(2, '0') }}</h1>
          </div>

          <div class="project-card">
            <div class="project-thumbnail-title">
              <div class="project-title">
                <h4>{{ title }}</h4>
                <p>{{ synopsis }}</p>
              </div>

              <div class="project-thumbnail">
                <img :src="thumbnailImage" />
              </div>
            </div>
          </div>
          <div class="project-index">
            <p>{{ dayjs(publishedAt).format(DATE_FORMAT) }}</p>
          </div>
        </a>
      </div>

      <div class="project-action-buttons">
        <button class="project-action-button" @click="onArrowLeftClick">
          <ArrowLeftIcon />
        </button>
        <button class="project-action-button" @click="onArrowRightClick">
          <ArrowRightIcon />
        </button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
import { PROJECTS_COPY } from '~~/constants/copy'
import { DATE_FORMAT } from '~~/constants/date'
import { ROUTES } from '~~/constants/routes'

useHead({ ...PROJECTS_COPY })

const { data: projects } = await useFetch('/api/projects')

const projectIndex = ref(3)
const projectsElement = ref(null)
const canScroll = ref(true)

const onArrowLeftClick = () => {
  if (canScroll.value === false) return
  canScroll.value = false

  const elementChildren = projectsElement.value.children
  let nextScrollToIndex = projectIndex.value - 3
  if (nextScrollToIndex < 0) {
    nextScrollToIndex = 0
  }

  projectIndex.value = nextScrollToIndex
  const scrollToElement = elementChildren[nextScrollToIndex]
  scrollToElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
  startScrollTimer()
}

const onArrowRightClick = () => {
  if (canScroll.value === false) return
  canScroll.value = false

  const elementChildren = projectsElement.value.children
  let nextScrollToIndex = projectIndex.value + 3

  if (nextScrollToIndex >= elementChildren.length) {
    nextScrollToIndex = elementChildren.length - 1
  }

  projectIndex.value = nextScrollToIndex
  const scrollToElement = elementChildren[nextScrollToIndex]
  scrollToElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
  startScrollTimer()
}

const startScrollTimer = () => {
  const canScrollTimer = setInterval(() => {
    canScroll.value = true
    clearInterval(canScrollTimer)
  }, 500)
}
</script>
