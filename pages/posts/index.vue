<template>
  <div>
    <h1>Список статей</h1>
    <div v-if="pending">Завантаження...</div>
    <div v-else-if="error">{{ error }}</div>
    <ul v-else>
      <li v-for="post in paginatedPosts" :key="post.id">
        <NuxtLink :to="'/posts/' + post.id">
          <h2>{{ post.title }}</h2>
        </NuxtLink>
        <p>{{ post.content.substring(0, 50) + '...' }}</p>
        <small>Дата: {{ post.date }}</small>
      </li>
    </ul>

    <div v-if="!pending && !error">
      <button @click="prevPage" :disabled="currentPage === 1">Попередня</button>
      <button @click="nextPage" :disabled="currentPage === totalPages">Наступна</button>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useFetch } from "#app";

const currentPage = ref(1);
const itemsPerPage = 2;

const { data: posts, pending, error } = useFetch('/posts.json');

//підрахунок кількості сторінок
const totalPages = computed(() => {
  return posts.value ? Math.ceil(posts.value.length / itemsPerPage) : 0;
});

//підрахунок постів для поточної сторінки
const paginatedPosts = computed(() => {
  if (!posts.value) return [];
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return posts.value.slice(start, end);
});

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};
const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};
</script>
