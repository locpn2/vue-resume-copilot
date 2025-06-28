<template>
  <div class="projects-page">
    <div class="page-container">
      <div class="page-header">
        <h1 class="page-title">Dự Án Nổi Bật</h1>
        <div class="page-line" aria-hidden="true"></div>
        <p class="page-subtitle">
          Showcase {{ projects.length }} dự án đã hoàn thành với các công nghệ hiện đại và best practices
        </p>
      </div>
      
      <!-- Projects Filter -->
      <div class="projects-filter">
        <button 
          v-for="status in projectStatuses" 
          :key="status"
          @click="selectedStatus = status"
          :class="['filter-btn', { active: selectedStatus === status }]"
          :aria-pressed="selectedStatus === status"
        >
          {{ status }}
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="projects-grid" role="list" aria-label="Danh sách dự án">
        <article 
          v-for="project in filteredProjects" 
          :key="project.id"
          class="project-card"
          role="listitem"
        >
          <!-- Project Image -->
          <div class="project-image-container">
            <img 
              :src="project.image" 
              :alt="`Screenshot của dự án ${project.name}`"
              class="project-image"
              loading="lazy"
              width="400"
              height="250"
            />
            <div class="project-status-badge" :class="project.status.toLowerCase()">
              {{ project.status }}
            </div>
            <div class="project-overlay">
              <div class="project-actions">
                <a 
                  v-if="project.links.demo"
                  :href="project.links.demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="action-btn demo-btn"
                  :aria-label="`Xem demo của dự án ${project.name}`"
                  @click="logProjectClick('demo', project.name)"
                >
                  <span>🚀</span> Demo
                </a>
                <a 
                  v-if="project.links.github"
                  :href="project.links.github"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="action-btn github-btn"
                  :aria-label="`Xem source code của dự án ${project.name}`"
                  @click="logProjectClick('github', project.name)"
                >
                  <span>📂</span> Code
                </a>
              </div>
            </div>
          </div>

          <!-- Project Content -->
          <div class="project-content">
            <header class="project-header">
              <h2 class="project-name">{{ project.name }}</h2>
              <div class="project-meta">
                <span class="project-duration">⏱️ {{ project.duration }}</span>
                <span class="project-role">👤 {{ project.role }}</span>
              </div>
            </header>

            <p class="project-description">{{ project.description }}</p>

            <!-- Detailed Description -->
            <div class="project-details" v-if="project.detailedDescription">
              <h3>Chi tiết dự án</h3>
              <p>{{ project.detailedDescription }}</p>
            </div>

            <!-- Key Features -->
            <div class="project-features">
              <h3>Tính năng chính</h3>
              <ul role="list">
                <li v-for="feature in project.features" :key="feature" role="listitem">
                  {{ feature }}
                </li>
              </ul>
            </div>

            <!-- Technologies Used -->
            <div class="project-technologies">
              <h3>Công nghệ sử dụng</h3>
              <div class="tech-tags">
                <span 
                  v-for="tech in project.technologies" 
                  :key="tech"
                  class="tech-tag"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Project Links -->
            <div class="project-links">
              <a 
                v-if="project.links.demo"
                :href="project.links.demo"
                target="_blank"
                rel="noopener noreferrer"
                class="project-link demo-link"
                :aria-label="`Xem demo của dự án ${project.name}`"
                @click="logProjectClick('demo', project.name)"
              >
                <span>🚀</span> Live Demo
              </a>
              <a 
                v-if="project.links.github"
                :href="project.links.github"
                target="_blank"
                rel="noopener noreferrer"
                class="project-link github-link"
                :aria-label="`Xem source code của dự án ${project.name}`"
                @click="logProjectClick('github', project.name)"
              >
                <span>📂</span> Source Code
              </a>
              <a 
                v-if="project.links.case_study"
                :href="project.links.case_study"
                target="_blank"
                rel="noopener noreferrer"
                class="project-link case-study-link"
                :aria-label="`Đọc case study của dự án ${project.name}`"
                @click="logProjectClick('case_study', project.name)"
              >
                <span>📖</span> Case Study
              </a>
            </div>
          </div>
        </article>
      </div>

      <!-- Projects Summary -->
      <div class="projects-summary">
        <h2 class="summary-title">Tổng Quan Dự Án</h2>
        <div class="summary-stats">
          <div class="stat-item">
            <div class="stat-number">{{ projects.length }}</div>
            <div class="stat-label">Dự án hoàn thành</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">{{ uniqueTechnologies.length }}+</div>
            <div class="stat-label">Công nghệ sử dụng</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">100%</div>
            <div class="stat-label">Tỷ lệ hoàn thành</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">{{ totalFeatures }}</div>
            <div class="stat-label">Tính năng phát triển</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, inject, computed, ref } from 'vue'
import { resumeData } from '@/data/resumeData.js'

const logger = inject('logger')
const { projects } = resumeData

// Reactive data
const selectedStatus = ref('All')

// Computed properties
const projectStatuses = computed(() => {
  const statuses = ['All', ...new Set(projects.map(project => project.status))]
  return statuses
})

const filteredProjects = computed(() => {
  if (selectedStatus.value === 'All') {
    return projects
  }
  return projects.filter(project => project.status === selectedStatus.value)
})

const uniqueTechnologies = computed(() => {
  const allTech = projects.flatMap(project => project.technologies)
  return [...new Set(allTech)]
})

const totalFeatures = computed(() => {
  return projects.reduce((total, project) => total + project.features.length, 0)
})

// Methods
const logProjectClick = (action, projectName) => {
  logger?.logUserInteraction(`project_${action}_click`, projectName, 'ProjectsPage')
}

onMounted(() => {
  logger?.logPageView('/projects')
  logger?.info('ProjectsPage mounted', { 
    projectsCount: projects.length,
    technologiesCount: uniqueTechnologies.value.length
  }, 'ProjectsPage')
})
</script>

<style scoped>
/* Glassmorphism Background - ProjectsPage */
.projects-page {
  min-height: 100vh;
  position: relative;
  width: 100%;
  background: 
    linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%),
    radial-gradient(circle at 35% 65%, rgba(138, 43, 226, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 65% 35%, rgba(255, 20, 147, 0.3) 0%, transparent 50%);
  background-attachment: fixed;
  background-size: 100% 100%, 100% 100%, 100% 100%;
  padding: 6rem 2rem 2rem;
}

.projects-page::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    linear-gradient(120deg, transparent 30%, rgba(255, 255, 255, 0.05) 50%, transparent 70%),
    radial-gradient(circle at 30% 70%, rgba(120, 119, 198, 0.2) 0%, transparent 50%),
    radial-gradient(circle at 70% 30%, rgba(255, 119, 198, 0.2) 0%, transparent 50%);
  pointer-events: none;
  z-index: -1;
  animation: projectsBackgroundShift 35s ease-in-out infinite;
}

@keyframes projectsBackgroundShift {
  0%, 100% { 
    background-position: 0% 50%, 30% 70%, 70% 30%; 
  }
  50% { 
    background-position: 100% 50%, 70% 30%, 30% 70%; 
  }
}

.page-container {
  width: 100%;
  padding: 0 1rem;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-title {
  font-size: 3rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  background: linear-gradient(135deg, #3F5EFB 0%, #FC466B 50%, #f093fb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.page-line {
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, #3F5EFB 0%, #FC466B 50%, #f093fb 100%);
  margin: 0 auto 1.5rem;
  border-radius: 2px;
  box-shadow: 0 2px 10px rgba(63, 94, 251, 0.4);
}

.page-subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  margin: 0 auto;
  line-height: 1.6;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

/* Projects Filter - Enhanced */
.projects-filter {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 25px;
  background: 
    linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%);
  backdrop-filter: blur(15px);
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.filter-btn:hover,
.filter-btn:focus {
  background: 
    linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%);
  transform: translateY(-2px);
  box-shadow: 
    0 6px 20px rgba(63, 94, 251, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.filter-btn.active {
  background: linear-gradient(135deg, #3F5EFB 0%, #FC466B 50%, #f093fb 100%);
  box-shadow: 
    0 4px 15px rgba(63, 94, 251, 0.4),
    0 0 20px rgba(240, 147, 251, 0.3);
}

/* Projects Grid - Enhanced */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2.5rem;
  margin-bottom: 4rem;
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 4rem;
}

.project-card {
  background: 
    linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%);
  backdrop-filter: blur(25px);
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  color: white;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  background: 
    linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%);
}

/* Project Image - Enhanced */
.project-image-container {
  position: relative;
  height: 250px;
  overflow: hidden;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-image {
  transform: scale(1.05);
}

.project-status-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.project-status-badge.completed {
  background: 
    linear-gradient(135deg, rgba(34, 197, 94, 0.9) 0%, rgba(34, 197, 94, 0.7) 100%);
  color: white;
}

.project-status-badge.live {
  background: 
    linear-gradient(135deg, rgba(59, 130, 246, 0.9) 0%, rgba(59, 130, 246, 0.7) 100%);
  color: white;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    linear-gradient(135deg, rgba(63, 94, 251, 0.95) 0%, rgba(252, 70, 107, 0.95) 100%);
  backdrop-filter: blur(15px);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-actions {
  display: flex;
  gap: 1rem;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: 
    linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%);
  backdrop-filter: blur(15px);
  border-radius: 25px;
  color: white;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.action-btn:hover,
.action-btn:focus {
  background: 
    linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%);
  transform: translateY(-2px);
  box-shadow: 
    0 6px 20px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

/* Project Content - Enhanced */
.project-content {
  padding: 2rem;
}

.project-header {
  margin-bottom: 1.5rem;
}

.project-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: #f093fb;
  margin-bottom: 0.75rem;
  line-height: 1.3;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.project-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  flex-wrap: wrap;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.project-description {
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 1.5rem;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.project-details,
.project-features,
.project-technologies {
  margin-bottom: 1.5rem;
}

.project-details h3,
.project-features h3,
.project-technologies h3 {
  font-size: 1rem;
  font-weight: 600;
  color: #3F5EFB;
  margin-bottom: 0.75rem;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.project-details p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.project-features ul {
  list-style: none;
  padding: 0;
  display: grid;
  gap: 0.5rem;
}

.project-features li {
  position: relative;
  padding-left: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
  line-height: 1.5;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.project-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #f093fb;
  font-weight: bold;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: 
    linear-gradient(135deg, rgba(63, 94, 251, 0.4) 0%, rgba(252, 70, 107, 0.4) 50%, rgba(240, 147, 251, 0.4) 100%);
  backdrop-filter: blur(10px);
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.tech-tag:hover {
  transform: translateY(-2px);
  box-shadow: 
    0 4px 15px rgba(63, 94, 251, 0.3),
    0 0 20px rgba(240, 147, 251, 0.2);
}

/* Project Links - Enhanced */
.project-links {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.project-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  border-radius: 20px;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.demo-link {
  background: linear-gradient(135deg, #3F5EFB 0%, #FC466B 50%, #f093fb 100%);
  color: white;
}

.github-link {
  background: 
    linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%);
  color: white;
}

.case-study-link {
  background: 
    linear-gradient(135deg, rgba(252, 70, 107, 0.3) 0%, rgba(240, 147, 251, 0.3) 100%);
  color: white;
}

.project-link:hover,
.project-link:focus {
  transform: translateY(-2px);
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.2),
    0 0 20px rgba(240, 147, 251, 0.2);
}

/* Projects Summary - Enhanced */
.projects-summary {
  background: 
    linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%);
  backdrop-filter: blur(25px);
  border-radius: 24px;
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.summary-title {
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 2rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  background: linear-gradient(135deg, #3F5EFB 0%, #FC466B 50%, #f093fb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.summary-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
}

.stat-item {
  text-align: center;
  padding: 1.5rem 1rem;
  background: 
    linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.03) 100%);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.stat-item:hover {
  transform: translateY(-5px);
  box-shadow: 
    0 8px 25px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #3F5EFB 0%, #FC466B 50%, #f093fb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

/* Responsive Design */
@media (min-width: 768px) {
  .page-container {
    padding: 0 2rem;
  }
}

@media (min-width: 1024px) {
  .projects-page {
    padding: 6rem 3rem 2rem;
  }
  
  .page-container {
    padding: 0 3rem;
  }
}

@media (min-width: 1440px) {
  .projects-page {
    padding: 6rem 4rem 2rem;
  }
  
  .page-container {
    padding: 0 4rem;
  }
}

@media (max-width: 768px) {
  .projects-page {
    padding: 4rem 1rem 2rem;
  }

  .page-title {
    font-size: 2.2rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .project-content {
    padding: 1.5rem;
  }

  .project-actions {
    flex-direction: column;
    align-items: center;
  }

  .summary-stats {
    grid-template-columns: repeat(2, 1fr);
  }

  .projects-summary {
    padding: 2rem;
  }
}

@media (max-width: 480px) {
  .page-title {
    font-size: 1.8rem;
  }

  .project-name {
    font-size: 1.3rem;
  }

  .summary-stats {
    grid-template-columns: 1fr;
  }

  .stat-number {
    font-size: 2rem;
  }

  .projects-filter {
    gap: 0.5rem;
  }

  .filter-btn {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
}

/* Focus styles for accessibility */
*:focus {
  outline: 3px solid #f093fb;
  outline-offset: 2px;
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .project-card,
  .projects-summary {
    border: 2px solid white;
  }
  
  .tech-tag,
  .filter-btn {
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
  
  .projects-page::before {
    animation: none;
  }
}
</style>