<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <div class="app">
    <router-view />
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background-color: #fafafa;
  font-size: 16px;
  color: #000;
  line-height: 1.5;
}

.app {
  max-width: 1000px;
  margin: 2rem auto;
  padding: 0 1.5rem;
}

/* Global focus styles */
*:focus {
  outline: 2px solid rgba(0, 0, 0, 0.2);
  outline-offset: 2px;
}

/* Remove default button styling */
button {
  font-family: inherit;
}
</style>
