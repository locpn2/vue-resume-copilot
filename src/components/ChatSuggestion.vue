<template>
  <div class="chat-suggestion">
    {{ suggestion }}
  </div>
</template>

<script setup>
defineProps({
  suggestion: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.chat-suggestion {
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 5px;
}
</style>
