<template>
  <footer>
    <div class="social-icons">
      <a href="{FOOTER_COPY.github.url}" target="_blank">
        <GitHubIcon />
      </a>
      <a href="{FOOTER_COPY.linkedin.url}" target="_blank">
        <LinkedInIcon />
      </a>
      <a href="{FOOTER_COPY.instagram.url}" target="_blank">
        <InstagramIcon />
      </a>
    </div>
    <div class="copyright-wrapper">
      <p class="copyright">{{ FOOTER_COPY.copyright }}</p>
      <p>ⓒ</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { FOOTER_COPY } from '~~/constants/copy'
</script>