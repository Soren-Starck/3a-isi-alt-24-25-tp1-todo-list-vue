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
  font-family: 'Arial', sans-serif;
  background-color: #f0f2f5;
  font-size: 18px;
}

.app {
  max-width: 1000px;
  margin: 30px auto;
  padding: 30px;
}
</style>
