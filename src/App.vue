<script setup>
import { RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'
import logger from './utils/logger.js'
import { onMounted } from 'vue'

onMounted(() => {
  logger.info('App mounted')
})
</script>

<template>
  <header class="app-container">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <NavBar />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

<style module>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.app-container {
  @apply glassmorphism;
  padding: 20px;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.main-content {
  position: relative;
  z-index: 1;
}

/* Scrollbar Styling */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #3F5EFB 0%, #FC466B 100%);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #2a4de0 0%, #e63946 100%);
}

/* Global Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>