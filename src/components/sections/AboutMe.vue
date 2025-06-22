<template>
  <div class="about-me">
    <h2>{{ aboutMe.name }}</h2>
    <p>{{ aboutMe.title }}</p>
    <p>{{ aboutMe.description }}</p>
  </div>
</template>

<script>
import data from '../../utils/data.js'

export default {
  name: 'AboutMeSection',
  data() {
    return {
      aboutMe: data.aboutMe,
    }
  },
}
</script>

<style scoped>
.about-me {
  margin-bottom: 20px;
}
</style>
