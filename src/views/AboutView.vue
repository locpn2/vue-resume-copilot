<script setup>
import logger from '../utils/logger.js'
import { onMounted } from 'vue'

onMounted(() => {
  logger.info('AboutView mounted')
})
</script>

<template>
  <div class="about contact-view">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<style module>
.contact-view {
  @apply glassmorphism;
  padding: 20px;
}
</style>
