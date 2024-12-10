<template>
  <div class="search-bar">
    <input
      type="text"
      v-model="city"
      @keyup.enter="searchCity"
      placeholder="Enter city name"
    />
    <button @click="searchCity">Search</button>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const emit = defineEmits(["search"]);
const city = ref("");

// викликається при натисканні кнопки або Enter
function searchCity() {
  emit("search", city.value); // передаємо значення міста батьківському компоненту
  city.value = ""; // очищуємо поле вводу після пошуку
}
</script>

<style scoped>
.search-bar {
  display: flex;
  margin-top: 20px;
}
.search-bar input {
  flex: 1;
  padding: 8px;
}
.search-bar button {
  padding: 8px;
}
</style>
