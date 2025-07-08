<template>
  <nav class="navbar">
    <div class="nav-container">
      <!-- Logo -->
      <div class="nav-logo">
        <RouterLink to="/" class="logo-link">
          <span class="logo-text">Resume</span>
          <span class="logo-accent">Copilot</span>
        </RouterLink>
      </div>

      <!-- Desktop Navigation -->
      <div class="nav-menu" :class="{ active: isMenuOpen }">
        <RouterLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="nav-link"
          @click="closeMenu"
          v-log-click="item.name"
        >
          <span class="nav-icon">{{ item.icon }}</span>
          <span class="nav-text">{{ item.name }}</span>
        </RouterLink>
      </div>

      <!-- Mobile Menu Toggle - Improved hamburger -->
      <button
        class="nav-toggle"
        @click="toggleMenu"
        v-log-click="'menu-toggle'"
        :aria-label="isMenuOpen ? 'Đóng menu' : 'Mở menu'"
        :aria-expanded="isMenuOpen"
      >
        <span class="hamburger-line" :class="{ active: isMenuOpen }"></span>
        <span class="hamburger-line" :class="{ active: isMenuOpen }"></span>
        <span class="hamburger-line" :class="{ active: isMenuOpen }"></span>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, inject } from 'vue'
import { RouterLink } from 'vue-router'

const logger = inject('logger')
const isMenuOpen = ref(false)

const navItems = [
  { name: 'Trang Chủ', path: '/', icon: '🏠' },
  { name: 'Kinh Nghiệm', path: '/experience', icon: '💼' },
  { name: 'Kỹ Năng', path: '/skills', icon: '⚡' },
  { name: 'Dự Án', path: '/projects', icon: '🚀' },
  { name: 'Liên Hệ', path: '/contact', icon: '📞' },
  { name: 'AI Copilot', path: '/chat-ai', icon: '🤖' },
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  logger?.logUserInteraction('menu_toggle', isMenuOpen.value ? 'open' : 'close', 'NavBar')
}

const closeMenu = () => {
  isMenuOpen.value = false
}

onMounted(() => {
  logger?.info('NavBar mounted', { itemsCount: navItems.length }, 'NavBar')
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  width: 100%;
}

.nav-container {
  width: 100%;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}

.nav-logo .logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;
}

.logo-text {
  color: white;
}

.logo-accent {
  background: linear-gradient(135deg, #3f5efb 0%, #fc466b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-left: 0.25rem;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  border-radius: 25px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  min-height: 44px;
}

.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #3f5efb 0%, #fc466b 100%);
  transition: left 0.3s ease;
  z-index: -1;
}

.nav-link:hover::before,
.nav-link.router-link-active::before {
  left: 0;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(63, 94, 251, 0.3);
}

.nav-icon {
  font-size: 1.1rem;
}

.nav-text {
  font-size: 0.95rem;
}

/* Improved Hamburger Menu */
.nav-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 44px;
  height: 44px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.nav-toggle:hover,
.nav-toggle:focus {
  background: rgba(255, 255, 255, 0.1);
  outline: none;
}

.hamburger-line {
  width: 28px;
  height: 3px;
  background: white;
  border-radius: 2px;
  transition: all 0.3s ease;
  transform-origin: center;
}

.hamburger-line.active:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.hamburger-line.active:nth-child(2) {
  opacity: 0;
  transform: scale(0);
}

.hamburger-line.active:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* Mobile Styles */
@media (max-width: 768px) {
  .nav-container {
    padding: 0 1rem;
  }

  .nav-toggle {
    display: flex;
  }

  .nav-menu {
    position: fixed;
    top: 70px;
    left: -100%;
    width: 100%;
    height: calc(100vh - 70px);
    background: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(20px);
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 2rem;
    gap: 1rem;
    transition: left 0.3s ease;
    overflow-y: auto;
  }

  .nav-menu.active {
    left: 0;
  }

  .nav-link {
    width: 85%;
    max-width: 300px;
    justify-content: center;
    padding: 1.25rem 1.5rem;
    font-size: 1.1rem;
    border-radius: 15px;
    min-height: 56px;
  }

  .nav-icon {
    font-size: 1.4rem;
  }

  .nav-text {
    font-size: 1rem;
  }
}

@media (min-width: 1024px) {
  .nav-container {
    padding: 0 3rem;
  }
}

@media (min-width: 1440px) {
  .nav-container {
    padding: 0 4rem;
  }
}

@media (max-width: 480px) {
  .nav-container {
    height: 60px;
    padding: 0 0.75rem;
  }

  .nav-menu {
    top: 60px;
    height: calc(100vh - 60px);
  }

  .logo-link {
    font-size: 1.3rem;
  }

  .nav-toggle {
    width: 40px;
    height: 40px;
  }

  .hamburger-line {
    width: 24px;
  }
}

/* High contrast mode */
@media (prefers-contrast: high) {
  .nav-toggle:focus {
    outline: 3px solid white;
  }

  .hamburger-line {
    background: white;
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .nav-link,
  .hamburger-line,
  .nav-menu {
    transition: none;
  }
}
</style>
