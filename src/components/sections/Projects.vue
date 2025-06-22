<template>
  <div class="projects">
    <h2>Projects</h2>
    <div v-for="project in projects" :key="project.name">
      <h3>{{ project.name }}</h3>
      <p>{{ project.description }}</p>
    </div>
  </div>
</template>

<script>
import data from '../../utils/data.js'

export default {
  name: 'ProjectsSection',
  data() {
    return {
      projects: data.projects,
    }
  },
}
</script>

<style scoped>
.projects {
  margin-bottom: 20px;
}
</style>
