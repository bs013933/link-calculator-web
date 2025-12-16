<template>
  <ThemeToggle />
  <LanguageToggle />
  <router-view></router-view>
</template>

<script setup>
import ThemeToggle from './components/ThemeToggle.vue'
import LanguageToggle from './components/LanguageToggle.vue'
</script>

<style>
/* Global styles are imported in main.js */
</style>
