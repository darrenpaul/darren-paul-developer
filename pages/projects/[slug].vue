<template>
  <div class="ml-16">
    <h1>{{ project.title }}</h1>
  </div>
</template>

  <script setup lang="ts">
import dayjs from 'dayjs'
import { DATE_FORMAT } from '~~/constants/date'
import { ROUTES } from '~~/constants/routes'

const { params } = useRoute()

const { data: project } = await useFetch('/api/project', { params: { slug: params.slug } })
</script>
