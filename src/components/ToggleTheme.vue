<template>
  <button @click="toggleTheme">{{ theme }}</button>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const emit = defineEmits();
const theme = ref("Light");

function toggleTheme() {
  theme.value = theme.value === "Light" ? "Dark" : "Light";
  emit("toggle-theme", theme.value);
}
</script>

<style scoped>
button {
  padding: 8px;
  cursor: pointer;
}
</style>