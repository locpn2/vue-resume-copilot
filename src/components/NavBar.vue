<template>
  <nav>
    <RouterLink to="/">Home</RouterLink> | <RouterLink to="/about">About</RouterLink> |
    <RouterLink to="/chat">Chat</RouterLink>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
nav {
  padding: 1rem;
  text-align: center;
}

a {
  font-weight: bold;
  color: var(--color-text);
}

.router-link-exact-active {
  color: var(--color-green);
}
</style>
