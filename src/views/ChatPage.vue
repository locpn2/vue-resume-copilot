<template>
  <main class="chat-page">
    <h1>Chat Page</h1>
    <ChatSuggestion
      v-for="suggestion in chatSuggestions"
      :key="suggestion"
      :suggestion="suggestion"
    />
  </main>
</template>

<script setup>
import ChatSuggestion from '../components/ChatSuggestion.vue'
import { chatSuggestions } from '../data.js'
import logger from '../utils/logger.js'
import { onMounted } from 'vue'

onMounted(() => {
  logger.info('ChatPage mounted')
})
</script>

<style module>
.chat-page {
  @apply glassmorphism;
  padding: 20px;
}
</style>
