<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <div class="avatar-container">
          <img 
            :src="personalInfo.avatar" 
            :alt="personalInfo.name"
            class="avatar"
            @error="handleImageError"
          />
          <div class="avatar-glow"></div>
        </div>
        
        <div class="hero-text">
          <h1 class="hero-name">{{ personalInfo.name }}</h1>
          <h2 class="hero-title">{{ personalInfo.title }}</h2>
          <p class="hero-summary">{{ personalInfo.summary }}</p>
          
          <div class="hero-contact">
            <div class="contact-item">
              <i class="icon">📧</i>
              <span>{{ personalInfo.email }}</span>
            </div>
            <div class="contact-item">
              <i class="icon">📱</i>
              <span>{{ personalInfo.phone }}</span>
            </div>
            <div class="contact-item">
              <i class="icon">📍</i>
              <span>{{ personalInfo.location }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section class="experience-section">
      <div class="section-header">
        <h2 class="section-title">Kinh Nghiệm Làm Việc</h2>
        <div class="section-line"></div>
      </div>
      
      <div class="experience-timeline">
        <div 
          v-for="(exp, index) in experience" 
          :key="exp.id"
          class="experience-item"
          :class="{ 'reverse': index % 2 === 1 }"
        >
          <div class="experience-card">
            <div class="experience-header">
              <h3 class="experience-position">{{ exp.position }}</h3>
              <div class="experience-company">{{ exp.company }}</div>
              <div class="experience-duration">{{ exp.duration }}</div>
            </div>
            
            <p class="experience-description">{{ exp.description }}</p>
            
            <div class="experience-achievements">
              <h4>Thành tựu chính:</h4>
              <ul>
                <li v-for="achievement in exp.achievements" :key="achievement">
                  {{ achievement }}
                </li>
              </ul>
            </div>
          </div>
          
          <div class="timeline-dot"></div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="skills-section">
      <div class="section-header">
        <h2 class="section-title">Kỹ Năng Chuyên Môn</h2>
        <div class="section-line"></div>
      </div>
      
      <SkillChart :skills="skills" />
    </section>

    <!-- Projects Section -->
    <section class="projects-section">
      <div class="section-header">
        <h2 class="section-title">Dự Án Nổi Bật</h2>
        <div class="section-line"></div>
      </div>
      
      <div class="projects-grid">
        <div 
          v-for="project in projects" 
          :key="project.id"
          class="project-card"
          @click="openProject(project.link)"
          v-log-click="project.name"
        >
          <div class="project-image">
            <img :src="project.image" :alt="project.name" />
            <div class="project-overlay">
              <span class="view-project">Xem Dự Án</span>
            </div>
          </div>
          
          <div class="project-content">
            <h3 class="project-name">{{ project.name }}</h3>
            <p class="project-description">{{ project.description }}</p>
            
            <div class="project-technologies">
              <span 
                v-for="tech in project.technologies" 
                :key="tech"
                class="tech-tag"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
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
  event.target.src = 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
  logger?.warn('Avatar image failed to load', { originalSrc: personalInfo.avatar }, 'HomePage')
}

const openProject = (link) => {
  if (link) {
    window.open(link, '_blank')
    logger?.logUserInteraction('project_click', link, 'HomePage')
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

.avatar:hover {
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
  color: rgba(255, 255, 255, 0.8);
}

.hero-contact {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
}

.icon {
  font-size: 1.2rem;
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

.experience-card:hover {
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
}

.experience-description {
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
}

.experience-achievements h4 {
  font-size: 1rem;
  margin-bottom: 0.75rem;
  color: #3F5EFB;
}

.experience-achievements ul {
  list-style: none;
  padding: 0;
}

.experience-achievements li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.5rem;
  color: rgba(255, 255, 255, 0.8);
}

.experience-achievements li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #FC466B;
  font-weight: bold;
}

/* Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
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

.project-card:hover {
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

.project-card:hover .project-image img {
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

.project-card:hover .project-overlay {
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

.project-name {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #FC466B;
}

.project-description {
  line-height: 1.6;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.9);
}

.project-technologies {
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
}
</style>