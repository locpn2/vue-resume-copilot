<template>
  <div class="experience">
    <h2>Experience</h2>
    <div v-for="exp in experience" :key="exp.title">
      <h3>{{ exp.title }}</h3>
      <p>{{ exp.description }}</p>
    </div>
  </div>
</template>

<script>
import data from '../../utils/data.js'

export default {
  name: 'ExperienceSection',
  data() {
    return {
      experience: data.experience,
    }
  },
}
</script>

<style scoped>
.experience {
  margin-bottom: 20px;
}
</style>
