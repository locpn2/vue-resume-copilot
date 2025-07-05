<template>
  <div class="skills-page">
    <div class="page-container">
      <div class="page-header">
        <h1 class="page-title">Kỹ Năng Chuyên Môn</h1>
        <div class="page-line" aria-hidden="true"></div>
        <p class="page-subtitle">
          Tổng hợp {{ skills.length }} kỹ năng được phân loại theo {{ categories.length }} lĩnh vực chuyên môn
        </p>
      </div>
      
      <!-- Skills Chart Component -->
      <div class="skills-chart-section">
        <SkillChart :skills="skills" />
      </div>

      <!-- Skills by Category -->
      <div class="skills-categories-section">
        <h2 class="section-title">Chi Tiết Theo Lĩnh Vực</h2>
        
        <div class="categories-grid">
          <div 
            v-for="category in categorizedSkills" 
            :key="category.name"
            class="category-section"
          >
            <header class="category-header">
              <h3 class="category-title">
                <span class="category-icon">{{ getCategoryIcon(category.name) }}</span>
                {{ category.name }}
              </h3>
              <div class="category-count">{{ category.skills.length }} kỹ năng</div>
            </header>
            
            <div class="skills-list">
              <div 
                v-for="skill in category.skills" 
                :key="skill.name"
                class="skill-item"
              >
                <div class="skill-info">
                  <div class="skill-name">{{ skill.name }}</div>
                  <div class="skill-experience" v-if="skill.experience">
                    {{ skill.experience }}
                  </div>
                </div>
                
                <div class="skill-level-container">
                  <div class="skill-level-bar">
                    <div 
                      class="skill-level-fill"
                      :style="{ width: skill.level + '%' }"
                      :aria-label="`Mức độ thành thạo ${skill.level}%`"
                    ></div>
                  </div>
                  <div class="skill-percentage">{{ skill.level }}%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Skills Summary -->
      <div class="skills-summary">
        <h2 class="summary-title">Tổng Quan Kỹ Năng</h2>
        <div class="summary-grid">
          <div class="summary-item">
            <div class="summary-icon">🚀</div>
            <div class="summary-content">
              <h3>Frontend Development</h3>
              <p>Chuyên sâu về Vue.js ecosystem, React và các công nghệ frontend hiện đại</p>
            </div>
          </div>
          
          <div class="summary-item">
            <div class="summary-icon">⚡</div>
            <div class="summary-content">
              <h3>Performance Optimization</h3>
              <p>Tối ưu hóa hiệu suất ứng dụng, Core Web Vitals và user experience</p>
            </div>
          </div>
          
          <div class="summary-item">
            <div class="summary-icon">🛠️</div>
            <div class="summary-content">
              <h3>Modern Tooling</h3>
              <p>Thành thạo các build tools, testing frameworks và DevOps practices</p>
            </div>
          </div>
          
          <div class="summary-item">
            <div class="summary-icon">👥</div>
            <div class="summary-content">
              <h3>Team Leadership</h3>
              <p>Kinh nghiệm dẫn dắt team, mentoring và code review processes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, inject, computed } from 'vue'
import { resumeData } from '@/data/resumeData.js'
import SkillChart from '@/components/SkillChart.vue'

const logger = inject('logger')
const { skills } = resumeData

// Computed properties
const categories = computed(() => {
  return [...new Set(skills.map(skill => skill.category))]
})

const categorizedSkills = computed(() => {
  return categories.value.map(category => ({
    name: category,
    skills: skills.filter(skill => skill.category === category)
      .sort((a, b) => b.level - a.level) // Sort by skill level descending
  }))
})

// Methods
const getCategoryIcon = (category) => {
  const icons = {
    'Frontend Frameworks': '⚛️',
    'Programming Languages': '💻',
    'Styling & UI': '🎨',
    'State Management': '🗃️',
    'Build Tools': '🔧',
    'Testing': '🧪',
    'Backend': '🖥️',
    'Database': '🗄️',
    'DevOps & Tools': '⚙️',
    'Soft Skills': '🤝'
  }
  return icons[category] || '📋'
}

onMounted(() => {
  logger?.logPageView('/skills')
  logger?.info('SkillsPage mounted', { 
    skillsCount: skills.length,
    categoriesCount: categories.value.length
  }, 'SkillsPage')
})
</script>

<style scoped>
/* Glassmorphism Background - SkillsPage */
.skills-page {
  min-height: 100vh;
  position: relative;
  width: 100%;
  background: 
    linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%),
    radial-gradient(circle at 25% 75%, rgba(138, 43, 226, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 75% 25%, rgba(255, 20, 147, 0.3) 0%, transparent 50%);
  background-attachment: fixed;
  background-size: 100% 100%, 100% 100%, 100% 100%;
  padding: 6rem 2rem 2rem;
}

.skills-page::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    linear-gradient(60deg, transparent 30%, rgba(255, 255, 255, 0.04) 50%, transparent 70%),
    radial-gradient(circle at 40% 60%, rgba(120, 119, 198, 0.2) 0%, transparent 50%),
    radial-gradient(circle at 60% 40%, rgba(255, 119, 198, 0.2) 0%, transparent 50%);
  pointer-events: none;
  z-index: -1;
  animation: skillsBackgroundShift 30s ease-in-out infinite;
}

@keyframes skillsBackgroundShift {
  0%, 100% { 
    background-position: 0% 50%, 40% 60%, 60% 40%; 
  }
  50% { 
    background-position: 100% 50%, 60% 40%, 40% 60%; 
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

/* Skills Chart Section - Enhanced */
.skills-chart-section {
  margin-bottom: 4rem;
  background: 
    linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.03) 100%);
  backdrop-filter: blur(25px);
  border-radius: 24px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
  width: 100%;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 4rem;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

/* Skills Categories Section - Enhanced */
.skills-categories-section {
  margin-bottom: 4rem;
  width: 100%;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: white;
  text-align: center;
  margin-bottom: 3rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  background: linear-gradient(135deg, #3F5EFB 0%, #FC466B 50%, #f093fb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.category-section {
  background: 
    linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%);
  backdrop-filter: blur(25px);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.category-section:hover {
  transform: translateY(-5px);
  box-shadow: 
    0 15px 35px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  background: 
    linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%);
}

.category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.category-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.category-icon {
  font-size: 1.5rem;
}

.category-count {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  background: 
    linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%);
  backdrop-filter: blur(10px);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.skills-list {
  display: grid;
  gap: 1rem;
}

.skill-item {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1rem;
  align-items: center;
  padding: 1rem;
  background: 
    linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.03) 100%);
  backdrop-filter: blur(15px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: all 0.3s ease;
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.skill-item:hover {
  background: 
    linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%);
  transform: translateX(5px);
  box-shadow: 
    0 6px 20px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.skill-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.skill-name {
  font-size: 1rem;
  font-weight: 600;
  color: white;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.skill-experience {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.skill-level-container {
  display: flex;
  align-items: center;
  gap: 1rem;
  min-width: 120px;
}

.skill-level-bar {
  flex: 1;
  height: 8px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
}

.skill-level-fill {
  height: 100%;
  background: linear-gradient(90deg, #3F5EFB 0%, #FC466B 50%, #f093fb 100%);
  border-radius: 10px;
  transition: width 1s ease-in-out;
  position: relative;
  box-shadow: 0 0 10px rgba(63, 94, 251, 0.5);
}

.skill-level-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%);
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.skill-percentage {
  font-size: 0.9rem;
  font-weight: 600;
  color: #f093fb;
  min-width: 40px;
  text-align: right;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

/* Skills Summary - Enhanced */
.skills-summary {
  background: 
    linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%);
  backdrop-filter: blur(25px);
  border-radius: 24px;
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.summary-title {
  font-size: 2rem;
  font-weight: 700;
  color: white;
  text-align: center;
  margin-bottom: 2rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  background: linear-gradient(135deg, #3F5EFB 0%, #FC466B 50%, #f093fb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.summary-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  padding: 1.5rem;
  background: 
    linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.03) 100%);
  backdrop-filter: blur(15px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: all 0.3s ease;
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.summary-item:hover {
  transform: translateY(-3px);
  background: 
    linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%);
  box-shadow: 
    0 10px 25px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.summary-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.summary-content h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.5rem;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.summary-content p {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.5;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

/* Responsive Design */
@media (min-width: 768px) {
  .page-container {
    padding: 0 2rem;
  }
}

@media (min-width: 1024px) {
  .skills-page {
    padding: 6rem 3rem 2rem;
  }
  
  .page-container {
    padding: 0 3rem;
  }
}

@media (min-width: 1440px) {
  .skills-page {
    padding: 6rem 4rem 2rem;
  }
  
  .page-container {
    padding: 0 4rem;
  }
}

@media (max-width: 768px) {
  .skills-page {
    padding: 4rem 1rem 2rem;
  }

  .page-title {
    font-size: 2.2rem;
  }

  .categories-grid {
    grid-template-columns: 1fr;
  }

  .category-section {
    padding: 1.5rem;
  }

  .skill-item {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }

  .skill-level-container {
    min-width: auto;
  }

  .summary-grid {
    grid-template-columns: 1fr;
  }

  .skills-summary {
    padding: 2rem;
  }
}

@media (max-width: 480px) {
  .page-title {
    font-size: 1.8rem;
  }

  .section-title {
    font-size: 1.6rem;
  }

  .category-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .summary-item {
    padding: 1rem;
  }
}

/* Focus styles for accessibility */
*:focus {
  outline: 3px solid #f093fb;
  outline-offset: 2px;
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .category-section,
  .skills-summary,
  .skill-item {
    border: 2px solid white;
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
  
  .skill-level-fill::after,
  .skills-page::before {
    animation: none;
  }
}
</style>