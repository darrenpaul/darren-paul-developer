<template>
  <section class="project-section">
    <h1>{{ project.title }}</h1>
    <div class="project-image">
      <iframe v-if="project.liveUrl" class="w-full h-full" :src="project.liveUrl" />
      <img v-else class="w-full h-full" :src="project.projectImages[imageIndex]" />

      <div v-if="project.liveUrl === null && project.projectImages.length > 1" class="project-action-buttons">
        <button class="project-action-button" @click="onArrowLeftClick">
          <ArrowLeftIcon />
        </button>
        <button class="project-action-button" @click="onArrowRightClick">
          <ArrowRightIcon />
        </button>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 mt-4">
      <div class="border-double border-8">
        <div class="bg-night-400 p-8 w-full">
          <SanityContent :blocks="project.description" :serializers="serializers" />
        </div>
      </div>
      <div class="border-double border-8">
        <div class="bg-night-400 p-8 flex flex-wrap gap-4">
          <img
            v-for="(framework, index) in project.frameworks"
            :key="index"
            class="w-auto h-12"
            :src="FRAMEWORK_LOGOS[framework]?.logo"
          />
        </div>
      </div>
    </div>
  </section>
</template>

  <script setup lang="ts">
import { FRAMEWORK_LOGOS } from '~~/constants/logos'

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
