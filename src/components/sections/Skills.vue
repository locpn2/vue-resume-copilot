<template>
  <div class="skills">
    <h2>Skills</h2>
    <div v-for="skill in skills" :key="skill.name">
      <h3>{{ skill.name }}</h3>
      <p>{{ skill.level }}</p>
    </div>
  </div>
</template>

<script>
import data from '../../utils/data.js'

export default {
  name: 'SkillsSection',
  data() {
    return {
      skills: data.skills,
    }
  },
}
</script>

<style scoped>
.skills {
  margin-bottom: 20px;
}
</style>
