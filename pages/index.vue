<template>
  <section class="home-section">
    <div class="home-cta">
      <div>
        <h1>{{ HOME_COPY.frontendDeveloper }}</h1>
        <h2>{{ HOME_COPY.darrenPaul }}</h2>
      </div>
    </div>

    <div class="home-projects">
      <h2>{{ HOME_COPY.latestProjects }}</h2>

      <div class="home-project-list">
        <a
          v-for="({ _id, slug, title, synopsis, thumbnailImage, publishedAt }, index) in projects"
          :key="_id"
          class="home-project"
          :href="`projects/${slug}`"
        >
          <div class="home-project-container">
            <h1 class="home-project-index-title">{{ String(index + 1).padStart(2, '0') }}</h1>

            <div class="home-project-card">
              <div class="project-title">
                <h4>{{ title }}</h4>
                <p class="light-text">{{ synopsis }}</p>
              </div>

              <div class="home-project-thumbnail">
                <img :src="thumbnailImage" :alt="title" />
              </div>
            </div>
            <p class="light-text">{{ dayjs(publishedAt).format(DATE_FORMAT) }}</p>
          </div>
        </a>
      </div>
    </div>

    <div class="home-about">
      <div class="card">
        <div class="about-content">
          <SanityContent :blocks="about.description" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
import { DATE_FORMAT } from '~~/constants/date'
import { HOME_COPY } from '~~/constants/copy'

const { data: about } = await useFetch('/api/about')
const { data: projects } = await useFetch('/api/projectsLatest')
</script>
