<template>
  <v-app-bar app>
    <v-toolbar-title><ThemeToggle /></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text v-for="link in links" :key="link.name" :to="link.path">
      {{ link.name }}
    </v-btn>
    
  </v-app-bar>
</template>

<script setup>
import { ref } from "vue";
import ThemeToggle from "./ThemeToggle.vue";

const links = ref([
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/skills", name: "Skills" },
  { path: "/education", name: "Education" },
  { path: "/projects", name: "Projects" },
  { path: "/blog", name: "Blog" },
  { path: "/contact", name: "Contact" },

]);
</script>
і
