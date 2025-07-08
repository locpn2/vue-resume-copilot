<template>
  <div class="skill-chart">
    <div class="skill-categories">
      <button 
        v-for="category in categories" 
        :key="category"
        @click="selectedCategory = category"
        :class="['category-btn', { active: selectedCategory === category }]"
        v-log-click="category"
      >
        {{ category }}
      </button>
    </div>
    
    <div class="skills-grid">
      <div 
        v-for="skill in filteredSkills" 
        :key="skill.name"
        class="skill-item"
      >
        <div class="skill-header">
          <span class="skill-name">{{ skill.name }}</span>
          <span class="skill-percentage">{{ skill.level }}%</span>
        </div>
        <div class="skill-bar">
          <div 
            class="skill-progress"
            :style="{ width: skill.level + '%' }"
            :data-level="skill.level"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, inject } from 'vue'

const props = defineProps({
  skills: {
    type: Array,
    required: true,
    validator: (skills) => {
      return skills.every(skill => 
        skill.name && 
        typeof skill.level === 'number' && 
        skill.level >= 0 && 
        skill.level <= 100 &&
        skill.category
      )
    }
  }
})

const logger = inject('logger')
const selectedCategory = ref('All')

// Computed properties
const categories = computed(() => {
  const cats = ['All', ...new Set(props.skills.map(skill => skill.category))]
  return cats
})

const filteredSkills = computed(() => {
  if (selectedCategory.value === 'All') {
    return props.skills
  }
  return props.skills.filter(skill => skill.category === selectedCategory.value)
})

// Lifecycle
onMounted(() => {
  logger?.logComponentPerformance('SkillChart', performance.now())
  logger?.info('SkillChart mounted', { skillsCount: props.skills.length }, 'SkillChart')
})
</script>

<style scoped>
.skill-chart {
  width: 100%;
  padding: 1.5rem;
}

.skill-categories {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 2rem;
  justify-content: center;
}

.category-btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.category-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(63, 94, 251, 0.3);
}

.category-btn.active {
  background: linear-gradient(135deg, #3F5EFB 0%, #FC466B 100%);
  box-shadow: 0 4px 15px rgba(63, 94, 251, 0.4);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.skill-item {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  border-radius: 15px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.skill-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 0.15);
}

.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.skill-name {
  font-weight: 600;
  color: white;
  font-size: 1rem;
}

.skill-percentage {
  font-weight: 700;
  color: #FC466B;
  font-size: 0.9rem;
}

.skill-bar {
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, #3F5EFB 0%, #FC466B 100%);
  border-radius: 10px;
  transition: width 1s ease-in-out;
  position: relative;
}

.skill-progress::after {
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

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
  
  .skill-categories {
    justify-content: flex-start;
  }
  
  .category-btn {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
  }
}
</style>