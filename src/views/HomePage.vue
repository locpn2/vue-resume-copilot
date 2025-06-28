<template>
  <div class="home-page">
    <section class="hero-section" role="banner">
      <div class="hero-background" aria-hidden="true"></div>
      <div class="hero-content">
        <div class="hero-main">
          <div class="avatar-container">
            <img 
              :src="personalInfo.avatar" 
              :alt="`Ảnh đại diện của ${personalInfo.name} - ${personalInfo.title}`"
              class="avatar"
              @error="handleImageError"
              loading="eager"
              width="200"
              height="200"
            />
            <div class="avatar-glow" aria-hidden="true"></div>
          </div>
          
          <div class="hero-text">
            <h1 class="hero-name">{{ personalInfo.name }}</h1>
            <h2 class="hero-title">{{ personalInfo.title }}</h2>
            <p class="hero-summary">{{ personalInfo.summary }}</p>
            
            <div class="hero-cta">
              <RouterLink to="/contact" class="cta-primary">
                <span class="cta-icon">📧</span>
                <span>Liên Hệ Ngay</span>
              </RouterLink>
              <RouterLink to="/projects" class="cta-secondary">
                <span class="cta-icon">🚀</span>
                <span>Xem Dự Án</span>
              </RouterLink>
              <a 
                :href="personalInfo.socialLinks.portfolio"
                target="_blank"
                rel="noopener noreferrer"
                class="cta-tertiary"
                v-log-click="'portfolio-cta'"
              >
                <span class="cta-icon">🌐</span>
                <span>Portfolio</span>
              </a>
            </div>

            <div class="hero-contact" role="list">
              <div class="contact-item" role="listitem">
                <span class="icon" aria-label="Email">📧</span>
                <a 
                  :href="`mailto:${personalInfo.email}`"
                  class="contact-link"
                  :aria-label="`Gửi email đến ${personalInfo.email}`"
                >
                  {{ personalInfo.email }}
                </a>
              </div>
              <div class="contact-item" role="listitem">
                <span class="icon" aria-label="Số điện thoại">📱</span>
                <a 
                  :href="`tel:${personalInfo.phone}`"
                  class="contact-link"
                  :aria-label="`Gọi điện đến ${personalInfo.phone}`"
                >
                  {{ personalInfo.phone }}
                </a>
              </div>
              <div class="contact-item" role="listitem">
                <span class="icon" aria-label="Địa điểm">📍</span>
                <span>{{ personalInfo.location }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="stats-section" aria-labelledby="stats-heading">
      <div class="stats-container">
        <h2 id="stats-heading" class="sr-only">Thống kê nhanh</h2>
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-number">3+</div>
            <div class="stat-label">Năm kinh nghiệm</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">{{ projects.length }}</div>
            <div class="stat-label">Dự án hoàn thành</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">{{ skills.length }}+</div>
            <div class="stat-label">Kỹ năng chuyên môn</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">100%</div>
            <div class="stat-label">Khách hàng hài lòng</div>
          </div>
        </div>
      </div>
    </section>

    <section class="featured-projects" aria-labelledby="featured-heading">
      <div class="section-container">
        <div class="section-header">
          <h2 id="featured-heading" class="section-title">Dự Án Nổi Bật</h2>
          <div class="section-line" aria-hidden="true"></div>
          <p class="section-subtitle">Một số dự án tiêu biểu tôi đã thực hiện</p>
        </div>
        
        <div class="projects-preview">
          <article 
            v-for="project in featuredProjects" 
            :key="project.id"
            class="project-preview-card"
            @click="openProjectDemo(project.links.demo)"
            @keydown.enter="openProjectDemo(project.links.demo)"
            @keydown.space.prevent="openProjectDemo(project.links.demo)"
            tabindex="0"
            role="button"
            :aria-label="`Xem chi tiết dự án ${project.name}`"
          >
            <div class="project-image">
              <img 
                :src="project.image" 
                :alt="`Hình ảnh minh họa dự án ${project.name} - ${project.description}`"
                loading="lazy"
                width="300"
                height="200"
              />
              <div class="project-overlay" aria-hidden="true">
                <span class="view-text">Xem Chi Tiết</span>
              </div>
            </div>
            
            <div class="project-info">
              <h3 class="project-name">{{ project.name }}</h3>
              <p class="project-desc">{{ project.description.substring(0, 100) }}...</p>
              <div class="project-tech">
                <span 
                  v-for="tech in project.technologies.slice(0, 3)" 
                  :key="tech"
                  class="tech-badge"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </article>
        </div>

        <div class="section-cta">
          <RouterLink to="/projects" class="view-all-btn">
            <span>Xem Tất Cả Dự Án</span>
            <span class="btn-arrow">→</span>
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="skills-preview" aria-labelledby="skills-heading">
      <div class="section-container">
        <div class="section-header">
          <h2 id="skills-heading" class="section-title">Kỹ Năng Chuyên Môn</h2>
          <div class="section-line" aria-hidden="true"></div>
          <p class="section-subtitle">Các công nghệ và kỹ năng tôi thành thạo</p>
        </div>
        
        <div class="skills-grid">
          <div 
            v-for="skill in topSkills" 
            :key="skill.name"
            class="skill-card"
          >
            <div class="skill-icon">{{ getSkillIcon(skill.name) }}</div>
            <div class="skill-info">
              <h3 class="skill-name">{{ skill.name }}</h3>
              <div class="skill-level">
                <div class="skill-bar">
                  <div 
                    class="skill-progress"
                    :style="{ width: skill.level + '%' }"
                    :aria-label="`Mức độ thành thạo ${skill.level}%`"
                  ></div>
                </div>
                <span class="skill-percentage">{{ skill.level }}%</span>
              </div>
            </div>
          </div>
        </div>

        <div class="section-cta">
          <RouterLink to="/skills" class="view-all-btn">
            <span>Xem Tất Cả Kỹ Năng</span>
            <span class="btn-arrow">→</span>
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, inject, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { resumeData } from '@/data/resumeData.js'

// Destructure data
const { personalInfo, skills, projects } = resumeData

// Inject logger
const logger = inject('logger')

// Computed properties
const featuredProjects = computed(() => {
  return projects.slice(0, 3) // Show top 3 projects
})

const topSkills = computed(() => {
  return skills
    .filter(skill => skill.level >= 85) // Only high-level skills
    .sort((a, b) => b.level - a.level)
    .slice(0, 6) // Show top 6 skills
})

// Methods
const handleImageError = (event) => {
  // Optimized fallback image
  event.target.src = 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  logger?.warn('Avatar image failed to load', { 
    originalSrc: personalInfo.avatar,
    fallbackSrc: event.target.src 
  }, 'HomePage')
}

const openProjectDemo = (demoUrl) => {
  if (demoUrl) {
    window.open(demoUrl, '_blank', 'noopener,noreferrer')
    logger?.logUserInteraction('project_demo_click', demoUrl, 'HomePage')
  }
}

const getSkillIcon = (skillName) => {
  const icons = {
    'Vue.js': '⚛️',
    'React': '⚛️',
    'JavaScript/ES6+': '💻',
    'TypeScript': '📘',
    'Tailwind CSS': '🎨',
    'Node.js': '🟢'
  }
  return icons[skillName] || '🛠️'
}

// Lifecycle
onMounted(() => {
  logger?.logPageView('/')
  logger?.info('HomePage mounted successfully', { 
    featuredProjectsCount: featuredProjects.value.length,
    topSkillsCount: topSkills.value.length
  }, 'HomePage')
})
</script>

<style scoped>
/* Performance Optimized Glassmorphism Background */
.home-page {
  min-height: 100vh;
  position: relative;
  width: 100%;
  /* Optimized background for better scroll performance */
  background: 
    linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  /* Remove background-attachment: fixed for better scroll performance */
  background-size: 100% 100%;
  /* GPU acceleration */
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: auto;
}

/* Optimized background animation for smooth scrolling */
.home-page::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 25% 75%, rgba(138, 43, 226, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 75% 25%, rgba(255, 20, 147, 0.15) 0%, transparent 50%);
  pointer-events: none;
  z-index: -1;
  /* Optimize animation performance */
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
  /* Reduced animation intensity for better performance */
  animation: backgroundShift 30s ease-in-out infinite;
}

/* Optimized animation with transform instead of background-position */
@keyframes backgroundShift {
  0%, 100% { 
    transform: translateZ(0) scale(1);
  }
  50% { 
    transform: translateZ(0) scale(1.05);
  }
}

/* Screen reader only content */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Hero Section - Performance Optimized */
.hero-section {
  padding: 5rem 2rem 3rem; 
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  position: relative;
  width: 100%;
  /* Performance optimization */
  contain: layout style paint;
  transform: translateZ(0);
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  backdrop-filter: blur(20px);
  border-radius: 30px;
  margin: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  /* Performance optimization */
  will-change: backdrop-filter;
  transform: translateZ(0);
}

.hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
  padding: 0 2rem;
}

.hero-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2rem;
  padding: 2rem;
  width: 100%;
}

.avatar-container {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%; 
  max-width: 150px;
}

.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid rgba(255, 255, 255, 0.3);
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.2),
    0 0 0 1px rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;
  /* Performance optimization */
  will-change: transform;
  transform: translateZ(0);
}

.avatar:hover,
.avatar:focus {
  transform: translateZ(0) scale(1.05);
}

.avatar-glow {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border-radius: 50%;
  background: linear-gradient(45deg, #3F5EFB, #FC466B, #f093fb);
  opacity: 0.6;
  z-index: -1;
  /* Optimized animation */
  animation: pulse 4s ease-in-out infinite;
  will-change: transform, opacity;
  transform: translateZ(0);
}

@keyframes pulse {
  0%, 100% { transform: translateZ(0) scale(1); opacity: 0.6; }
  50% { transform: translateZ(0) scale(1.05); opacity: 0.8; }
}

.hero-text {
  color: white;
  width: 100%;
}

.hero-name {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #3F5EFB 0%, #FC466B 50%, #f093fb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.hero-title {
  font-size: 1.3rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
}

.hero-summary {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

/* Enhanced CTA Buttons - Optimized Performance */
.hero-cta {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 400px; 
  margin-left: auto; 
  margin-right: auto; 
}

.cta-primary,
.cta-secondary,
.cta-tertiary {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  min-height: 56px; 
  border: 2px solid transparent;
  backdrop-filter: blur(20px);
  position: relative;
  overflow: hidden;
  /* Performance optimization */
  will-change: transform, box-shadow;
  transform: translateZ(0);
  backface-visibility: hidden;
}

/* Enhanced Primary CTA Button - Matching Outline */
.cta-primary {
  background: linear-gradient(135deg, #3F5EFB 0%, #FC466B 50%, #f093fb 100%);
  color: white;
  border: 2px solid transparent;
  /* Add matching outline effect */
  box-shadow: 
    0 4px 15px rgba(63, 94, 251, 0.4),
    0 0 0 1px rgba(255, 255, 255, 0.1),
    inset 0 0 0 2px rgba(255, 255, 255, 0.2);
  position: relative;
}

/* Glassmorphism overlay for blur effect */
.cta-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 23px;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.cta-primary:hover::before,
.cta-primary:focus::before {
  opacity: 1;
}

.cta-secondary {
  background: rgba(255, 255, 255, 0.15);
  color: white;
  border-color: rgba(255, 255, 255, 0.3);
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.cta-tertiary {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border-color: rgba(255, 255, 255, 0.5);
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

/* Enhanced hover effects with blur */
.cta-primary:hover,
.cta-primary:focus {
  transform: translate3d(0, -3px, 0);
  box-shadow: 
    0 8px 25px rgba(63, 94, 251, 0.5),
    0 0 0 1px rgba(255, 255, 255, 0.2),
    inset 0 0 0 2px rgba(255, 255, 255, 0.3);
}

.cta-secondary:hover,
.cta-secondary:focus,
.cta-tertiary:hover,
.cta-tertiary:focus {
  background: rgba(255, 255, 255, 0.25);
  transform: translate3d(0, -3px, 0);
  box-shadow: 
    0 8px 25px rgba(255, 255, 255, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.cta-icon {
  font-size: 1.2rem;
}

/* Contact Info */
.hero-contact {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  font-size: 0.95rem;
}

.contact-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.contact-link {
  color: inherit;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-link:hover,
.contact-link:focus {
  color: #f093fb;
  text-decoration: underline;
}

.icon {
  font-size: 1.1rem;
  min-width: 1.5rem;
}

/* Enhanced Stats Section - Performance Optimized */
.stats-section {
  padding: 3rem 2rem;
  background: 
    linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  backdrop-filter: blur(20px);
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  /* Performance optimization */
  will-change: backdrop-filter;
  transform: translateZ(0);
}

.stats-container {
  width: 100%;
  padding: 0 1rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
}

.stat-item {
  text-align: center;
  padding: 1.5rem 1rem;
  background: 
    linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  /* Performance optimization */
  will-change: transform;
  transform: translateZ(0);
}

.stat-item:hover {
  transform: translate3d(0, -5px, 0);
  box-shadow: 
    0 8px 25px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(135deg, #3F5EFB 0%, #FC466B 50%, #f093fb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

/* Enhanced Section Styles - Performance Optimized */
.section-container {
  width: 100%;
  padding: 3rem 2rem;
  /* Performance optimization */
  contain: layout style;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

/* Enhanced Section Line with High Contrast Colors */
.section-line {
  width: 80px;
  height: 4px;
  /* Updated with high contrast colors for better visibility */
  background: linear-gradient(90deg, #FFD700 0%, #FF6B35 50%, #00D4FF 100%);
  margin: 0 auto 1rem;
  border-radius: 2px;
  /* Enhanced glow effect for better contrast */
  box-shadow: 
    0 2px 10px rgba(255, 215, 0, 0.6),
    0 0 20px rgba(255, 107, 53, 0.4),
    0 0 30px rgba(0, 212, 255, 0.3);
  /* Add subtle animation for attention */
  animation: sectionLineGlow 3s ease-in-out infinite alternate;
}

@keyframes sectionLineGlow {
  0% { 
    box-shadow: 
      0 2px 10px rgba(255, 215, 0, 0.6),
      0 0 20px rgba(255, 107, 53, 0.4),
      0 0 30px rgba(0, 212, 255, 0.3);
  }
  100% { 
    box-shadow: 
      0 2px 15px rgba(255, 215, 0, 0.8),
      0 0 25px rgba(255, 107, 53, 0.6),
      0 0 35px rgba(0, 212, 255, 0.5);
  }
}

.section-subtitle {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

/* Enhanced Featured Projects - Performance Optimized */
.featured-projects {
  background: 
    linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%);
  backdrop-filter: blur(15px);
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  /* Performance optimization */
  will-change: backdrop-filter;
  transform: translateZ(0);
}

.projects-preview {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
}

.project-preview-card {
  background: 
    linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  /* Performance optimization */
  will-change: transform, box-shadow;
  transform: translateZ(0);
}

.project-preview-card:hover,
.project-preview-card:focus {
  transform: translate3d(0, -8px, 0);
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  background: 
    linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%);
  outline: none;
}

.project-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  /* Performance optimization */
  will-change: transform;
  transform: translateZ(0);
}

.project-preview-card:hover .project-image img,
.project-preview-card:focus .project-image img {
  transform: translateZ(0) scale(1.1);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    linear-gradient(135deg, rgba(63, 94, 251, 0.9) 0%, rgba(252, 70, 107, 0.9) 100%);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-preview-card:hover .project-overlay,
.project-preview-card:focus .project-overlay {
  opacity: 1;
}

.view-text {
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.project-info {
  padding: 1.5rem;
  color: white;
}

.project-name {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #f093fb;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.project-desc {
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-badge {
  background: 
    linear-gradient(135deg, rgba(63, 94, 251, 0.4) 0%, rgba(252, 70, 107, 0.4) 100%);
  backdrop-filter: blur(10px);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* Enhanced Skills Preview - Performance Optimized */
.skills-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.skill-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: 
    linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%);
  backdrop-filter: blur(20px);
  border-radius: 15px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  /* Performance optimization */
  will-change: transform;
  transform: translateZ(0);
}

.skill-card:hover {
  transform: translate3d(0, -3px, 0);
  background: 
    linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%);
  box-shadow: 
    0 8px 25px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.skill-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.skill-info {
  flex: 1;
}

.skill-name {
  font-size: 1rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.5rem;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.skill-level {
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* Enhanced Skill Bar with High Contrast Colors */
.skill-bar {
  flex: 1;
  height: 8px;
  /* Updated background for better contrast */
  background: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  overflow: hidden;
  /* Enhanced shadow for depth */
  box-shadow: 
    inset 0 2px 4px rgba(0, 0, 0, 0.3),
    0 1px 2px rgba(255, 255, 255, 0.1);
  /* Add subtle border for definition */
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.skill-progress {
  height: 100%;
  /* Updated with high contrast gradient */
  background: linear-gradient(90deg, #00FF87 0%, #60EFFF 50%, #FFD700 100%);
  border-radius: 10px;
  transition: width 1s ease-in-out;
  position: relative;
  /* Enhanced glow effect */
  box-shadow: 
    0 0 10px rgba(0, 255, 135, 0.6),
    0 0 20px rgba(96, 239, 255, 0.4),
    0 0 30px rgba(255, 215, 0, 0.3);
  /* Add shimmer animation */
  animation: skillProgressGlow 2s ease-in-out infinite alternate;
}

@keyframes skillProgressGlow {
  0% { 
    box-shadow: 
      0 0 10px rgba(0, 255, 135, 0.6),
      0 0 20px rgba(96, 239, 255, 0.4),
      0 0 30px rgba(255, 215, 0, 0.3);
  }
  100% { 
    box-shadow: 
      0 0 15px rgba(0, 255, 135, 0.8),
      0 0 25px rgba(96, 239, 255, 0.6),
      0 0 35px rgba(255, 215, 0, 0.5);
  }
}

.skill-percentage {
  font-size: 0.9rem;
  font-weight: 600;
  color: #f093fb;
  min-width: 40px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

/* Enhanced Section CTA - Performance Optimized */
.section-cta {
  text-align: center;
}

.view-all-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: 
    linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%);
  backdrop-filter: blur(20px);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 25px;
  color: white;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  min-height: 56px;
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  /* Performance optimization */
  will-change: transform;
  transform: translateZ(0);
}

.view-all-btn:hover,
.view-all-btn:focus {
  background: 
    linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%);
  transform: translate3d(0, -3px, 0);
  box-shadow: 
    0 8px 25px rgba(255, 255, 255, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.btn-arrow {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.view-all-btn:hover .btn-arrow,
.view-all-btn:focus .btn-arrow {
  transform: translateX(5px);
}

/* Tablet Styles */
@media (min-width: 768px) {
  .hero-main {
    flex-direction: row;
    text-align: left;
    gap: 3rem;
  }
  
  .hero-text {
    flex: 1;
  }
  
  .avatar-container {
    width: auto;
    max-width: 200px;
    flex-shrink: 0;
    justify-content: flex-start; 
  }

  .avatar {
    width: 200px;
    height: 200px;
  }
  
  .hero-name {
    font-size: 3rem;
  }
  
  .hero-title {
    font-size: 1.5rem;
  }
  
  .hero-summary {
    font-size: 1.1rem;
  }
  
  .hero-cta {
    flex-direction: row;
    max-width: none;
    justify-content: flex-start; 
    margin-left: 0; 
    margin-right: 0; 
  }
  
  .hero-contact {
    flex-direction: row;
    justify-content: flex-start;
    gap: 2rem;
  }
  
  .stats-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  
  .projects-preview {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop Styles */
@media (min-width: 1024px) {
  .hero-section {
    padding: 6rem 3rem 4rem;
  }
  
  .section-container {
    padding: 4rem 3rem;
  }
  
  .projects-preview {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .skills-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .hero-cta {
    gap: 1.5rem;
  }
}

/* Large Desktop Styles */
@media (min-width: 1440px) {
  .hero-section {
    padding: 6rem 4rem 4rem;
  }
  
  .section-container {
    padding: 4rem 4rem;
  }
  
  .stats-container {
    padding: 0 4rem;
  }
}

/* Focus styles for accessibility */
*:focus {
  outline: 3px solid #f093fb;
  outline-offset: 2px;
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .hero-background,
  .stat-item,
  .project-preview-card,
  .skill-card {
    border: 2px solid white;
  }
  
  .skill-bar {
    background: rgba(0, 0, 0, 0.8);
    border: 2px solid white;
  }
  
  .skill-progress {
    background: linear-gradient(90deg, #00FF00 0%, #FFFF00 50%, #FF0000 100%);
  }
  
  .section-line {
    background: linear-gradient(90deg, #FFFF00 0%, #FF0000 50%, #00FFFF 100%);
  }
}

/* Reduced motion support - Critical for Performance */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .avatar-glow,
  .home-page::before,
  .section-line,
  .skill-progress {
    animation: none;
  }
  
  html {
    scroll-behavior: auto !important;
  }
}

/* Print styles */
@media print {
  .home-page {
    background: white !important;
    color: black !important;
  }
  
  .hero-background,
  .stat-item,
  .project-preview-card {
    background: white !important;
    border: 1px solid #ccc !important;
  }
  
  .project-overlay,
  .avatar-glow {
    display: none !important;
  }
}
</style>