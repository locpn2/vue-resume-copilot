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
/* CSS Reset và Base Styles - Performance Optimized */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  /* Optimize scroll performance */
  -webkit-overflow-scrolling: touch;
  overflow-scrolling: touch;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #333;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* Performance optimizations for smooth scrolling */
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}

#app {
  min-height: 100vh;
  position: relative;
  /* Optimize rendering performance */
  will-change: auto;
  contain: layout style paint;
}

.main-content {
  position: relative;
  z-index: 1;
  /* Optimize scroll performance */
  transform: translateZ(0);
  backface-visibility: hidden;
}

/* Improved Scrollbar Styling - Performance Optimized */
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

/* Global Animations - Performance Optimized */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 30px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
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
  /* Performance optimization */
  will-change: transform;
  transform: translateZ(0);
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

/* Reduced Motion Support - Critical for Performance */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  
  html {
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

/* Performance Optimizations for Smooth Scrolling */
.main-content {
  contain: layout style paint;
  /* GPU acceleration for smooth scrolling */
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}

/* Optimize background animations for performance */
.home-page::before,
.skills-page::before,
.projects-page::before,
.experience-page::before,
.contact-page::before,
.chat-page::before {
  /* Use transform instead of background-position for better performance */
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
}

/* Image Loading Optimization */
img {
  max-width: 100%;
  height: auto;
  loading: lazy;
  /* Performance optimization */
  transform: translateZ(0);
  backface-visibility: hidden;
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

/* Optimize glassmorphism effects for performance */
.hero-background,
.experience-card,
.project-card,
.skill-card,
.contact-info,
.contact-form-section,
.faq-section,
.skills-summary,
.projects-summary,
.career-summary {
  /* Use transform3d for GPU acceleration */
  transform: translateZ(0);
  backface-visibility: hidden;
  /* Optimize backdrop-filter performance */
  will-change: transform, backdrop-filter;
}

/* Optimize hover effects for performance */
.experience-card:hover,
.project-card:hover,
.skill-card:hover,
.stat-item:hover,
.faq-item:hover,
.summary-item:hover {
  /* Use transform3d for smooth animations */
  transform: translate3d(0, -5px, 0);
}

/* Critical CSS for above-the-fold content */
.hero-section {
  /* Ensure hero section renders quickly */
  contain: layout style paint;
  transform: translateZ(0);
}

/* Optimize scroll containers */
.nav-menu,
.projects-grid,
.skills-grid,
.categories-grid {
  /* Optimize scrolling performance */
  -webkit-overflow-scrolling: touch;
  overflow-scrolling: touch;
  transform: translateZ(0);
}
</style>