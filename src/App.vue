<<<<<<< HEAD
<template>
  <div id="app">
    <NavBar />
    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<style>
/* CSS Reset và Base Styles - Optimized */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
=======
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

  <RouterView />
</template>

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
>>>>>>> master
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #333;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  min-height: 100vh;
  position: relative;
}

.main-content {
  position: relative;
  z-index: 1;
}

/* Improved Scrollbar Styling */
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

/* Global Animations - Optimized */
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

/* Focus Management for Accessibility */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: #FC466B;
  color: white;
  padding: 8px;
  text-decoration: none;
  border-radius: 4px;
  z-index: 1001;
}

.skip-link:focus {
  top: 6px;
}

/* Improved Focus Styles */
*:focus {
  outline: 3px solid #FC466B;
  outline-offset: 2px;
}

/* Button and Interactive Element Improvements */
button,
[role="button"],
input,
select,
textarea {
  min-height: 44px; /* WCAG AA touch target size */
}

/* Mobile-first Media Queries */
@media (max-width: 768px) {
  button,
  [role="button"],
  .nav-link,
  .cta-primary,
  .cta-secondary,
  .cta-tertiary {
    min-height: 48px; /* Larger touch targets on mobile */
  }
}

/* High Contrast Mode Support */
@media (prefers-contrast: high) {
  * {
    border-color: currentColor !important;
  }
}

/* Reduced Motion Support */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Print Styles */
@media print {
  * {
    background: white !important;
    color: black !important;
    box-shadow: none !important;
    text-shadow: none !important;
  }
  
  .navbar,
  .nav-toggle,
  .hero-cta,
  .section-cta {
    display: none !important;
  }
  
  .main-content {
    margin-top: 0 !important;
  }
  
  h1, h2, h3 {
    page-break-after: avoid;
  }
  
  img {
    max-width: 100% !important;
    height: auto !important;
  }
}

/* Performance Optimizations */
.main-content {
  contain: layout style paint;
}

/* Image Loading Optimization */
img {
  max-width: 100%;
  height: auto;
  loading: lazy;
}

img[loading="eager"] {
  loading: eager;
}

/* Prevent layout shift */
.avatar,
.project-image img {
  aspect-ratio: 1 / 1;
}

.project-image {
  aspect-ratio: 3 / 2;
}
</style>