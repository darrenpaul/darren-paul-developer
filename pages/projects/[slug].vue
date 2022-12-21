<template>
  <section class="project-section">
    <h1>{{ project.title }}</h1>
    <div class="project-image">
      <iframe v-if="project.liveUrl" :src="project.liveUrl" />
      <img v-else :src="project.projectImages[imageIndex]" />

      <div v-if="project.liveUrl === null && project.projectImages.length > 1" class="project-action-buttons">
        <button class="project-action-button" @click="onArrowLeftClick">
          <ArrowLeftIcon />
        </button>
        <button class="project-action-button" @click="onArrowRightClick">
          <ArrowRightIcon />
        </button>
      </div>
    </div>

    <div class="project-details">
      <div class="project-card">
        <div class="project-content">
          <SanityContent :blocks="project.description" :serializers="serializers" />

          <h3>{{ PROJECT_COPY.frameworks }}</h3>
          <div class="project-frameworks">
            <img
              v-for="(framework, index) in project.frameworks"
              :key="index"
              class="project-framework-logo"
              :src="FRAMEWORK_LOGOS[framework]?.logo"
              :alt="FRAMEWORK_LOGOS[framework]?.alt"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

  <script setup lang="ts">
import { FRAMEWORK_LOGOS } from '~~/constants/logos'
import { PROJECT_COPY } from '~~/constants/copy'

const serializers = {
  // types: {
  //   image: InlineImage
  // },
  // marks: {
  //   link: SanityLink
  // }
}

const { params } = useRoute()
const imageIndex = ref(0)

const { data: project } = await useFetch('/api/project', { params: { slug: params.slug } })

const onArrowLeftClick = () => {
  let nextIndex = imageIndex.value - 1
  if (nextIndex <= 0) {
    nextIndex = project.value.projectImages.length - 1
  }

  imageIndex.value = nextIndex
}

const onArrowRightClick = () => {
  let nextIndex = imageIndex.value + 1
  if (nextIndex >= project.value.projectImages.length) {
    nextIndex = 0
  }

  imageIndex.value = nextIndex
}
</script>
