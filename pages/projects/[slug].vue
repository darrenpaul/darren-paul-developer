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
          <SanityContent :blocks="project.description" />

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

    {{ project.synopsis }}
  </section>
</template>

  <script setup lang="ts">
import { FRAMEWORK_LOGOS } from '~~/constants/logos'
import { SITE_OWNER_COPY, PROJECT_COPY } from '~~/constants/copy'

const { params, fullPath } = useRoute()
const imageIndex = ref(0)

const { data: project } = await useFetch('/api/project', { params: { slug: params.slug } })

const pageUrl = () => {
  return `${SITE_OWNER_COPY.domain}${fullPath}`
}

useHead({
  title: project.value.title,
  link: [
    // canonical
    {
      hid: 'canonical',
      rel: 'canonical',
      href: pageUrl()
    }
  ],
  meta: [
    // Twitter
    {
      hid: 'twitter:card',
      name: 'twitter:card',
      content: 'summary'
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: project.value.title
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: project.value.metaDescription
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: project.value.projectImages[0]
    },
    {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: pageUrl()
    },
    // Facebook
    {
      hid: 'og:sitename',
      name: 'og:sitename',
      content: SITE_OWNER_COPY.domain
    },
    {
      hid: 'og:url',
      name: 'og:url',
      content: pageUrl()
    },
    {
      hid: 'og:type',
      name: 'og:type',
      content: 'article'
    },
    {
      hid: 'og:title',
      name: 'og:title',
      content: project.value.title
    },
    {
      hid: 'og:description',
      name: 'og:description',
      content: project.value.metaDescription
    },
    {
      hid: 'og:image',
      name: 'og:image',
      content: project.value.projectImages[0]
    },
    {
      hid: 'og:image:width',
      name: 'og:image:width',
      property: '500'
    },
    {
      hid: 'og:image:height',
      name: 'og:image:height',
      property: '500'
    },
    {
      hid: 'og:latitude',
      name: 'og:latitude',
      property: 'og:latitude',
      content: '40.7207559'
    },
    {
      hid: 'og:longitude',
      name: 'og:longitude',
      property: 'og:longitude',
      content: '-74.0007613'
    },
    // Google+
    {
      itemprop: 'name',
      content: project.value.title
    },
    {
      itemprop: 'description',
      content: project.value.metaDescription
    },
    {
      itemprop: 'image',
      content: project.value.projectImages[0]
    },
    {
      itemprop: 'url',
      content: pageUrl()
    },
    {
      itemprop: 'thumbnailUrl',
      content: project.value.projectImages[0]
    },
    {
      itemprop: 'author',
      content: SITE_OWNER_COPY.darrenPaul
    },
    {
      itemprop: 'datePublished',
      content: project.value.publishedAt
    },
    {
      itemprop: 'dateModified',
      content: project.value.publishedAt
    },
    {
      itemprop: 'headline',
      content: project.value.title
    },
    {
      itemprop: 'publisher',
      content: SITE_OWNER_COPY.darrenPaul
    }
  ]
})

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
