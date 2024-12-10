<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" md="8">
        <h2 class="text-center mb-6">My Skills</h2>
        <v-progress-linear
          v-for="(skill, index) in skills"
          :key="index"
          :value="skill.level"
          :color="skill.color"
          class="mb-6"
          height="20"
        >
          <template v-slot:default>
            <strong>{{ skill.name }} ({{ skill.level }}%)</strong>
          </template>
        </v-progress-linear>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const skills = ref([
  { name: "JavaScript", level: 80, color: "yellow" },
  { name: "Vue.js", level: 75, color: "green" },
  { name: "HTML/CSS", level: 90, color: "blue" },
]);
</script>

<style scoped>
h2 {
  font-weight: bold;
  color: #424242;
}

.v-progress-linear {
  border-radius: 10px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
}
</style>
