<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import logger from '../utils/logger.js'
import { onMounted } from 'vue'

onMounted(() => {
  logger.info('HomeView mounted')
})
</script>

<template>
  <main class="home-view">
    <TheWelcome />
  </main>
</template>

<style module>
.home-view {
  @apply glassmorphism;
  padding: 20px;
}
</style>
