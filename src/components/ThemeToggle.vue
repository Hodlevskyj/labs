<template>
  <v-btn @click="toggleTheme">
    <v-icon>{{
      isDark ? "mdi-weather-night" : "mdi-white-balance-sunny"
    }}</v-icon>
  </v-btn>
</template>

<script setup>
import { useTheme } from "vuetify";

const theme = useTheme();

const isDark = computed(() => theme.global.name.value === "dark");

function toggleTheme() {
  theme.global.name.value = isDark.value ? "light" : "dark";
}
</script>
