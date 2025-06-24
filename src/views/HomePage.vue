<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero-section" role="banner">
      <div class="hero-content">
        <div class="avatar-container">
          <img 
            :src="personalInfo.avatar" 
            :alt="`Ảnh đại diện của ${personalInfo.name} - ${personalInfo.title}`"
            class="avatar"
            @error="handleImageError"
            loading="lazy"
            width="200"
            height="200"
          />
          <div class="avatar-glow" aria-hidden="true"></div>
        </div>
        
        <div class="hero-text">
          <h1 class="hero-name">{{ personalInfo.name }}</h1>
          <h2 class="hero-title">{{ personalInfo.title }}</h2>
          <p class="hero-summary">{{ personalInfo.detailedSummary }}</p>
          
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

          <!-- Social Links -->
          <div class="social-links" role="list" aria-label="Liên kết mạng xã hội">
            <a 
              :href="personalInfo.socialLinks.github"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
              role="listitem"
              aria-label="Xem GitHub profile"
              v-log-click="'github-link'"
            >
              <span class="social-icon">🔗</span>
              <span>GitHub</span>
            </a>
            <a 
              :href="personalInfo.socialLinks.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
              role="listitem"
              aria-label="Xem LinkedIn profile"
              v-log-click="'linkedin-link'"
            >
              <span class="social-icon">💼</span>
              <span>LinkedIn</span>
            </a>
            <a 
              :href="personalInfo.socialLinks.portfolio"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
              role="listitem"
              aria-label="Xem Portfolio website"
              v-log-click="'portfolio-link'"
            >
              <span class="social-icon">🌐</span>
              <span>Portfolio</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section class="experience-section" aria-labelledby="experience-heading">
      <div class="section-header">
        <h2 id="experience-heading" class="section-title">Kinh Nghiệm Làm Việc</h2>
        <div class="section-line" aria-hidden="true"></div>
      </div>
      
      <div class="experience-timeline" role="list" aria-label="Lịch sử kinh nghiệm làm việc">
        <article 
          v-for="(exp, index) in experience" 
          :key="exp.id"
          class="experience-item"
          :class="{ 'reverse': index % 2 === 1 }"
          role="listitem"
        >
          <div class="experience-card">
            <header class="experience-header">
              <h3 class="experience-position">{{ exp.position }}</h3>
              <div class="experience-company">{{ exp.company }}</div>
              <div class="experience-duration">
                <time>{{ exp.duration }}</time>
                <span class="experience-location">{{ exp.location }}</span>
              </div>
            </header>
            
            <p class="experience-description">{{ exp.description }}</p>
            
            <div class="experience-responsibilities">
              <h4>Trách nhiệm chính:</h4>
              <ul role="list">
                <li v-for="responsibility in exp.responsibilities" :key="responsibility" role="listitem">
                  {{ responsibility }}
                </li>
              </ul>
            </div>

            <div class="experience-achievements">
              <h4>Thành tựu nổi bật:</h4>
              <ul role="list">
                <li v-for="achievement in exp.achievements" :key="achievement" role="listitem">
                  {{ achievement }}
                </li>
              </ul>
            </div>

            <div class="experience-technologies">
              <h4>Công nghệ sử dụng:</h4>
              <div class="tech-tags">
                <span 
                  v-for="tech in exp.technologies" 
                  :key="tech"
                  class="tech-tag"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
          
          <div class="timeline-dot" aria-hidden="true"></div>
        </article>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="skills-section" aria-labelledby="skills-heading">
      <div class="section-header">
        <h2 id="skills-heading" class="section-title">Kỹ Năng Chuyên Môn</h2>
        <div class="section-line" aria-hidden="true"></div>
      </div>
      
      <SkillChart :skills="skills" />
    </section>

    <!-- Projects Section -->
    <section class="projects-section" aria-labelledby="projects-heading">
      <div class="section-header">
        <h2 id="projects-heading" class="section-title">Dự Án Nổi Bật</h2>
        <div class="section-line" aria-hidden="true"></div>
      </div>
      
      <div class="projects-grid" role="list" aria-label="Danh sách dự án">
        <article 
          v-for="project in projects" 
          :key="project.id"
          class="project-card"
          role="listitem"
          tabindex="0"
          @click="openProjectDemo(project.links.demo)"
          @keydown.enter="openProjectDemo(project.links.demo)"
          @keydown.space.prevent="openProjectDemo(project.links.demo)"
          v-log-click="project.name"
          :aria-label="`Dự án ${project.name}. Nhấn Enter để xem demo.`"
        >
          <div class="project-image">
            <img 
              :src="project.image" 
              :alt="`Screenshot của dự án ${project.name}`"
              loading="lazy"
              width="400"
              height="200"
            />
            <div class="project-overlay" aria-hidden="true">
              <span class="view-project">Xem Demo</span>
            </div>
          </div>
          
          <div class="project-content">
            <header class="project-header">
              <h3 class="project-name">{{ project.name }}</h3>
              <div class="project-meta">
                <span class="project-duration">{{ project.duration }}</span>
                <span class="project-role">{{ project.role }}</span>
              </div>
            </header>
            
            <p class="project-description">{{ project.description }}</p>
            
            <div class="project-features">
              <h4>Tính năng chính:</h4>
              <ul role="list">
                <li v-for="feature in project.features" :key="feature" role="listitem">
                  {{ feature }}
                </li>
              </ul>
            </div>
            
            <div class="project-technologies">
              <span 
                v-for="tech in project.technologies" 
                :key="tech"
                class="tech-tag"
              >
                {{ tech }}
              </span>
            </div>

            <div class="project-links">
              <a 
                v-if="project.links.demo"
                :href="project.links.demo"
                target="_blank"
                rel="noopener noreferrer"
                class="project-link demo-link"
                :aria-label="`Xem demo của dự án ${project.name}`"
                @click.stop
              >
                <span>🚀</span> Demo
              </a>
              <a 
                v-if="project.links.github"
                :href="project.links.github"
                target="_blank"
                rel="noopener noreferrer"
                class="project-link github-link"
                :aria-label="`Xem source code của dự án ${project.name} trên GitHub`"
                @click.stop
              >
                <span>📂</span> Code
              </a>
              <a 
                v-if="project.links.case_study"
                :href="project.links.case_study"
                target="_blank"
                rel="noopener noreferrer"
                class="project-link case-study-link"
                :aria-label="`Đọc case study của dự án ${project.name}`"
                @click.stop
              >
                <span>📖</span> Case Study
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, inject } from 'vue'
import { resumeData } from '@/data/resumeData.js'
import SkillChart from '@/components/SkillChart.vue'

// Destructure data
const { personalInfo, experience, skills, projects } = resumeData

// Inject logger
const logger = inject('logger')

// Methods
const handleImageError = (event) => {
  // Fallback to a default professional avatar
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

// Lifecycle
onMounted(() => {
  logger?.logPageView('/')
  logger?.info('HomePage mounted successfully', { 
    experienceCount: experience.length,
    skillsCount: skills.length,
    projectsCount: projects.length
  }, 'HomePage')
})
</script>

<style scoped>
/* Base styles with improved accessibility */
.home-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow-x: hidden;
}

.home-page::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(63, 94, 251, 0.2) 0%, transparent 50%);
  pointer-events: none;
  z-index: -1;
}

/* Focus styles for accessibility */
*:focus {
  outline: 3px solid #FC466B;
  outline-offset: 2px;
}

/* Skip to content link for screen readers */
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

/* Hero Section */
.hero-section {
  padding: 4rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.hero-content {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 3rem;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 30px;
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.avatar-container {
  position: relative;
  display: flex;
  justify-content: center;
}

.avatar {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.avatar:hover,
.avatar:focus {
  transform: scale(1.05);
}

.avatar-glow {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border-radius: 50%;
  background: linear-gradient(45deg, #3F5EFB, #FC466B);
  opacity: 0.5;
  z-index: -1;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.1); opacity: 0.8; }
}

.hero-text {
  color: white;
}

.hero-name {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #3F5EFB 0%, #FC466B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
}

.hero-title {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.9);
}

.hero-summary {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.85);
  max-width: 600px;
}

.hero-contact {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
}

.contact-link {
  color: inherit;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-link:hover,
.contact-link:focus {
  color: #FC466B;
  text-decoration: underline;
}

.icon {
  font-size: 1.2rem;
  min-width: 1.5rem;
}

/* Social Links */
.social-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 25px;
  color: white;
  text-decoration: none;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.social-link:hover,
.social-link:focus {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(63, 94, 251, 0.3);
}

.social-icon {
  font-size: 1.1rem;
}

/* Section Styles */
section {
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.section-line {
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, #3F5EFB 0%, #FC466B 100%);
  margin: 0 auto;
  border-radius: 2px;
}

/* Experience Timeline */
.experience-timeline {
  position: relative;
  padding: 2rem 0;
}

.experience-timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, #3F5EFB 0%, #FC466B 100%);
  transform: translateX(-50%);
}

.experience-item {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
  align-items: center;
}

.experience-item.reverse .experience-card {
  grid-column: 3;
}

.experience-item:not(.reverse) .experience-card {
  grid-column: 1;
}

.timeline-dot {
  grid-column: 2;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3F5EFB 0%, #FC466B 100%);
  border: 4px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 0 20px rgba(63, 94, 251, 0.5);
  z-index: 2;
}

.experience-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  color: white;
}

.experience-card:hover,
.experience-card:focus-within {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 0.15);
}

.experience-header {
  margin-bottom: 1rem;
}

.experience-position {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #FC466B;
}

.experience-company {
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.experience-duration {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.experience-location {
  font-style: italic;
}

.experience-description {
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
}

.experience-responsibilities,
.experience-achievements {
  margin-bottom: 1.5rem;
}

.experience-responsibilities h4,
.experience-achievements h4 {
  font-size: 1rem;
  margin-bottom: 0.75rem;
  color: #3F5EFB;
}

.experience-responsibilities ul,
.experience-achievements ul {
  list-style: none;
  padding: 0;
}

.experience-responsibilities li,
.experience-achievements li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.5rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
}

.experience-responsibilities li::before {
  content: '▶';
  position: absolute;
  left: 0;
  color: #3F5EFB;
  font-size: 0.8rem;
}

.experience-achievements li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #FC466B;
  font-weight: bold;
}

.experience-technologies {
  margin-top: 1rem;
}

.experience-technologies h4 {
  font-size: 1rem;
  margin-bottom: 0.75rem;
  color: #3F5EFB;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: rgba(63, 94, 251, 0.3);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(63, 94, 251, 0.5);
}

/* Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.project-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  cursor: pointer;
}

.project-card:hover,
.project-card:focus {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 0.15);
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
}

.project-card:hover .project-image img,
.project-card:focus .project-image img {
  transform: scale(1.1);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(63, 94, 251, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay,
.project-card:focus .project-overlay {
  opacity: 1;
}

.view-project {
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
}

.project-content {
  padding: 1.5rem;
  color: white;
}

.project-header {
  margin-bottom: 1rem;
}

.project-name {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #FC466B;
}

.project-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
}

.project-description {
  line-height: 1.6;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.9);
}

.project-features {
  margin-bottom: 1rem;
}

.project-features h4 {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #3F5EFB;
}

.project-features ul {
  list-style: none;
  padding: 0;
}

.project-features li {
  position: relative;
  padding-left: 1.2rem;
  margin-bottom: 0.3rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
}

.project-features li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #FC466B;
}

.project-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.project-links {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.project-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.demo-link {
  background: linear-gradient(135deg, #3F5EFB 0%, #FC466B 100%);
  color: white;
}

.github-link {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.case-study-link {
  background: rgba(252, 70, 107, 0.2);
  color: white;
  border: 1px solid rgba(252, 70, 107, 0.5);
}

.project-link:hover,
.project-link:focus {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
  
  .experience-timeline::before {
    left: 2rem;
  }
  
  .experience-item {
    grid-template-columns: auto 1fr;
    gap: 1rem;
  }
  
  .experience-item .experience-card,
  .experience-item.reverse .experience-card {
    grid-column: 2;
  }
  
  .timeline-dot {
    grid-column: 1;
  }

  .projects-grid {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 2rem 1rem;
  }
  
  .hero-content {
    padding: 2rem;
  }
  
  .hero-name {
    font-size: 2rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .avatar {
    width: 150px;
    height: 150px;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  section {
    padding: 2rem 1rem;
  }

  .social-links {
    justify-content: center;
  }

  .hero-contact {
    align-items: center;
  }
}

@media (max-width: 480px) {
  .hero-name {
    font-size: 1.8rem;
  }
  
  .hero-title {
    font-size: 1.2rem;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .experience-card,
  .project-card {
    padding: 1.5rem;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .hero-content,
  .experience-card,
  .project-card {
    border: 2px solid white;
  }
  
  .tech-tag,
  .social-link {
    border: 2px solid currentColor;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .avatar-glow {
    animation: none;
  }
}

/* Print styles */
@media print {
  .home-page {
    background: white !important;
    color: black !important;
  }
  
  .hero-content,
  .experience-card,
  .project-card {
    background: white !important;
    border: 1px solid #ccc !important;
    box-shadow: none !important;
  }
  
  .project-overlay,
  .avatar-glow {
    display: none !important;
  }
}
</style>