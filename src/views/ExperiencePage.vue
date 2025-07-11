<template>
  <div class="experience-page">
    <div class="page-container">
      <div class="page-header">
        <h1 class="page-title">Kinh Nghiệm Làm Việc</h1>
        <div class="page-line" aria-hidden="true"></div>
        <p class="page-subtitle">
          Hành trình phát triển nghề nghiệp với {{ experience.length }} vị trí tại các công ty công
          nghệ hàng đầu
        </p>
      </div>

      <div class="experience-timeline" role="list" aria-label="Lịch sử kinh nghiệm làm việc">
        <article
          v-for="(exp, index) in experience"
          :key="exp.id"
          class="experience-item"
          role="listitem"
        >
          <div class="experience-card">
            <header class="experience-header">
              <div class="position-info">
                <h2 class="experience-position">{{ exp.position }}</h2>
                <div class="company-info">
                  <h3 class="experience-company">{{ exp.company }}</h3>
                  <div class="experience-location">📍 {{ exp.location }}</div>
                </div>
              </div>
              <div class="duration-info">
                <time class="experience-duration">{{ exp.duration }}</time>
                <div class="experience-type">Full-time</div>
              </div>
            </header>

            <div class="experience-summary">
              <p class="experience-description">{{ exp.description }}</p>
            </div>

            <div class="experience-details">
              <div class="experience-responsibilities">
                <h4>🎯 Trách nhiệm chính</h4>
                <ul role="list">
                  <li
                    v-for="responsibility in exp.responsibilities"
                    :key="responsibility"
                    role="listitem"
                  >
                    {{ responsibility }}
                  </li>
                </ul>
              </div>

              <div class="experience-achievements">
                <h4>🏆 Thành tựu nổi bật</h4>
                <ul role="list">
                  <li v-for="achievement in exp.achievements" :key="achievement" role="listitem">
                    {{ achievement }}
                  </li>
                </ul>
              </div>

              <div class="experience-technologies">
                <h4>🛠️ Công nghệ & Công cụ</h4>
                <div class="tech-grid">
                  <span v-for="tech in exp.technologies" :key="tech" class="tech-tag">
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="timeline-connector" v-if="index < experience.length - 1" aria-hidden="true">
            <div class="timeline-dot"></div>
            <div class="timeline-line"></div>
          </div>
        </article>
      </div>

      <!-- Career Summary -->
      <div class="career-summary">
        <h2 class="summary-title">Tổng Quan Sự Nghiệp</h2>
        <div class="summary-stats">
          <div class="stat-item">
            <div class="stat-number">{{ totalYearsExperience }}+</div>
            <div class="stat-label">Năm kinh nghiệm</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">{{ experience.length }}</div>
            <div class="stat-label">Vị trí đã đảm nhiệm</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">{{ uniqueTechnologies.length }}+</div>
            <div class="stat-label">Công nghệ đã sử dụng</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">50+</div>
            <div class="stat-label">Dự án hoàn thành</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, inject, computed } from 'vue'
import { resumeData } from '@/data/resumeData.js'

const logger = inject('logger')
const { experience } = resumeData

// Computed properties
const totalYearsExperience = computed(() => {
  // Calculate total years of experience
  return 3 // Based on the data, approximately 3+ years
})

const uniqueTechnologies = computed(() => {
  const allTech = experience.flatMap((exp) => exp.technologies)
  return [...new Set(allTech)]
})

onMounted(() => {
  logger?.logPageView('/experience')
  logger?.info(
    'ExperiencePage mounted',
    {
      experienceCount: experience.length,
      technologiesCount: uniqueTechnologies.value.length,
    },
    'ExperiencePage',
  )
})
</script>

<style scoped>
/* Glassmorphism Background - ExperiencePage */
.experience-page {
  min-height: 100vh;
  position: relative;
  width: 100%;
  background:
    linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%),
    radial-gradient(circle at 30% 70%, rgba(138, 43, 226, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 70% 30%, rgba(255, 20, 147, 0.3) 0%, transparent 50%);
  background-attachment: fixed;
  background-size:
    100% 100%,
    100% 100%,
    100% 100%;
  padding: 6rem 2rem 2rem;
}

.experience-page::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.03) 50%, transparent 70%),
    radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.2) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.2) 0%, transparent 50%);
  pointer-events: none;
  z-index: -1;
  animation: backgroundFloat 25s ease-in-out infinite;
}

@keyframes backgroundFloat {
  0%,
  100% {
    background-position:
      0% 50%,
      20% 80%,
      80% 20%;
  }
  50% {
    background-position:
      100% 50%,
      80% 20%,
      20% 80%;
  }
}

.page-container {
  width: 100%;
  padding: 0 1rem;
}

.page-header {
  text-align: center;
  margin-bottom: 4rem;
}

.page-title {
  font-size: 3rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  background: linear-gradient(135deg, #3f5efb 0%, #fc466b 50%, #f093fb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.page-line {
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, #3f5efb 0%, #fc466b 50%, #f093fb 100%);
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

/* Experience Timeline - Enhanced Glassmorphism */
.experience-timeline {
  position: relative;
  margin-bottom: 4rem;
  width: 100%;
}

.experience-item {
  margin-bottom: 3rem;
  width: 100%;
}

.experience-card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%);
  backdrop-filter: blur(25px);
  border-radius: 24px;
  padding: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  color: white;
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.experience-card:hover,
.experience-card:focus-within {
  transform: translateY(-8px);
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%);
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.position-info {
  flex: 1;
}

.experience-position {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #f093fb;
  line-height: 1.3;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.company-info {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.experience-company {
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.experience-location {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.duration-info {
  text-align: right;
  flex-shrink: 0;
}

.experience-duration {
  display: block;
  font-size: 1rem;
  font-weight: 600;
  color: #3f5efb;
  margin-bottom: 0.25rem;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.experience-type {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.experience-summary {
  margin-bottom: 2rem;
}

.experience-description {
  font-size: 1.1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.experience-details {
  display: grid;
  gap: 2rem;
}

.experience-responsibilities,
.experience-achievements,
.experience-technologies {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.03) 100%);
  backdrop-filter: blur(15px);
  border-radius: 16px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow:
    0 4px 15px rgba(0, 0, 0, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.experience-responsibilities h4,
.experience-achievements h4,
.experience-technologies h4 {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.experience-responsibilities ul,
.experience-achievements ul {
  list-style: none;
  padding: 0;
  display: grid;
  gap: 0.75rem;
}

.experience-responsibilities li,
.experience-achievements li {
  position: relative;
  padding-left: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.experience-responsibilities li::before {
  content: '▶';
  position: absolute;
  left: 0;
  color: #3f5efb;
  font-size: 0.8rem;
  top: 0.1rem;
}

.experience-achievements li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #f093fb;
  font-weight: bold;
  top: 0.1rem;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 0.75rem;
}

.tech-tag {
  background: linear-gradient(
    135deg,
    rgba(63, 94, 251, 0.4) 0%,
    rgba(252, 70, 107, 0.4) 50%,
    rgba(240, 147, 251, 0.4) 100%
  );
  backdrop-filter: blur(10px);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.3);
  text-align: center;
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

/* Timeline Connector */
.timeline-connector {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
}

.timeline-dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3f5efb 0%, #fc466b 50%, #f093fb 100%);
  border: 3px solid rgba(255, 255, 255, 0.4);
  box-shadow:
    0 0 20px rgba(63, 94, 251, 0.5),
    0 0 40px rgba(240, 147, 251, 0.3);
  margin-bottom: 1rem;
}

.timeline-line {
  width: 2px;
  height: 40px;
  background: linear-gradient(180deg, #3f5efb 0%, #fc466b 50%, #f093fb 100%);
  opacity: 0.7;
  box-shadow: 0 0 10px rgba(240, 147, 251, 0.3);
}

/* Career Summary - Enhanced */
.career-summary {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%);
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
  background: linear-gradient(135deg, #3f5efb 0%, #fc466b 50%, #f093fb 100%);
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
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.03) 100%);
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
  background: linear-gradient(135deg, #3f5efb 0%, #fc466b 50%, #f093fb 100%);
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
  .experience-page {
    padding: 6rem 3rem 2rem;
  }

  .page-container {
    padding: 0 3rem;
  }
}

@media (min-width: 1440px) {
  .experience-page {
    padding: 6rem 4rem 2rem;
  }

  .page-container {
    padding: 0 4rem;
  }
}

@media (max-width: 768px) {
  .experience-page {
    padding: 4rem 1rem 2rem;
  }

  .page-title {
    font-size: 2.2rem;
  }

  .experience-card {
    padding: 2rem;
  }

  .experience-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .duration-info {
    text-align: left;
  }

  .tech-grid {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }

  .summary-stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .career-summary {
    padding: 2rem;
  }
}

@media (max-width: 480px) {
  .page-title {
    font-size: 1.8rem;
  }

  .experience-position {
    font-size: 1.3rem;
  }

  .summary-stats {
    grid-template-columns: 1fr;
  }

  .stat-number {
    font-size: 2rem;
  }
}

/* Focus styles for accessibility */
*:focus {
  outline: 3px solid #f093fb;
  outline-offset: 2px;
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .experience-card,
  .career-summary {
    border: 2px solid white;
  }

  .tech-tag {
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

  .experience-page::before {
    animation: none;
  }
}
</style>
