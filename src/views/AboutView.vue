<template>
  <div class="about contact-view">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<style module>
.contact-view {
  @apply glassmorphism;
  padding: 20px;
}
</style>
