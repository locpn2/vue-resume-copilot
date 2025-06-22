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

      <!-- Mobile Menu Toggle -->
      <div class="nav-toggle" @click="toggleMenu" v-log-click="'menu-toggle'">
        <span class="bar" :class="{ active: isMenuOpen }"></span>
        <span class="bar" :class="{ active: isMenuOpen }"></span>
        <span class="bar" :class="{ active: isMenuOpen }"></span>
      </div>
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
  { name: 'AI Copilot', path: '/chat-ai', icon: '🤖' }
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
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
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
  background: linear-gradient(135deg, #3F5EFB 0%, #FC466B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-left: 0.25rem;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 2rem;
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
}

.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #3F5EFB 0%, #FC466B 100%);
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

.nav-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  padding: 0.5rem;
}

.bar {
  width: 25px;
  height: 3px;
  background: white;
  margin: 3px 0;
  transition: 0.3s;
  border-radius: 2px;
}

.bar.active:nth-child(1) {
  transform: rotate(-45deg) translate(-5px, 6px);
}

.bar.active:nth-child(2) {
  opacity: 0;
}

.bar.active:nth-child(3) {
  transform: rotate(45deg) translate(-5px, -6px);
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
  }
  
  .nav-menu.active {
    left: 0;
  }
  
  .nav-link {
    width: 80%;
    justify-content: center;
    padding: 1rem;
    font-size: 1.1rem;
  }
  
  .nav-icon {
    font-size: 1.3rem;
  }
}

@media (max-width: 480px) {
  .nav-container {
    height: 60px;
  }
  
  .nav-menu {
    top: 60px;
    height: calc(100vh - 60px);
  }
  
  .logo-link {
    font-size: 1.3rem;
  }
}
</style>