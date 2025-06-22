<template>
  <div class="experience-page">
    <div class="page-container">
      <div class="page-header">
        <h1 class="page-title">Kinh Nghiệm Làm Việc</h1>
        <div class="page-line"></div>
      </div>
      
      <div class="content-placeholder">
        <p>Trang Kinh Nghiệm đang được phát triển...</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, inject } from 'vue'

const logger = inject('logger')

onMounted(() => {
  logger?.logPageView('/experience')
  logger?.info('ExperiencePage mounted', {}, 'ExperiencePage')
})
</script>

<style scoped>
.experience-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 6rem 2rem 2rem;
}

.page-container {
  max-width: 1200px;
  margin: 0 auto;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.page-line {
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, #3F5EFB 0%, #FC466B 100%);
  margin: 0 auto;
  border-radius: 2px;
}

.content-placeholder {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
  color: white;
  font-size: 1.2rem;
}
</style>