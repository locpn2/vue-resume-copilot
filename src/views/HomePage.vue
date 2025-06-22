<template>
  <div class="home-page glass-effect">
    <AboutMe />
    <Experience />
    <Skills />
    <Projects />
  </div>
</template>

<script>
import AboutMe from '../components/sections/AboutMe.vue'
import Experience from '../components/sections/Experience.vue'
import Skills from '../components/sections/Skills.vue'
import Projects from '../components/sections/Projects.vue'
import { logger } from '../utils/logger'

export default {
  name: 'HomePage',
  components: {
    AboutMe,
    Experience,
    Skills,
    Projects,
  },
  mounted() {
    logger.logPageView('HomePage')
  },
}
</script>

<style scoped>
.home-page {
  padding: 20px;
}
</style>
