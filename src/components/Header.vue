<template>
  <header class="app-header">
    <h1>Weather App</h1>
    <ToggleTheme @toggle="toggleTheme" />
  </header>
</template>

<script setup>
import ToggleTheme from "./ToggleTheme.vue";
import { defineEmits } from "vue";

const emit = defineEmits();

function toggleTheme() {
  emit("toggle-theme");
}
</script>

<style scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #f8f9fa;
}
</style>
