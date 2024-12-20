<template>
  <div class="bg-gray-100 py-10 min-h-screen">
    <div class="container mx-auto">
      <BreadCrumbs />
      <h1 class="text-3xl font-bold text-gray-800 text-center mb-10">
        Список статей
      </h1>
      <div v-if="pending" class="text-center text-gray-500">
        Завантаження...
      </div>
      <div v-else-if="error" class="text-center text-red-500">
        {{ error }}
      </div>

      <ul v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <li
          v-for="post in paginatedPosts"
          :key="post.id"
          class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
        >
          <h2
            class="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors mb-4"
          >
            <NuxtLink :to="'/posts/' + post.id">{{ post.title }}</NuxtLink>
          </h2>

          <p class="text-gray-700 mb-4">
            {{ post.content.substring(0, 50) + "..." }}
          </p>

          <small class="text-gray-500 block mb-4">Дата: {{ post.date }}</small>

          <NuxtLink
            :to="'/posts/' + post.id"
            class="inline-block bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Читати далі
          </NuxtLink>
        </li>
      </ul>

      <div
        v-if="!pending && !error"
        class="flex justify-center items-center mt-8 space-x-4"
      >
        <button
          @click="prevPage"
          :disabled="currentPage === 1"
          class="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          Попередня
        </button>
        <button
          @click="nextPage"
          :disabled="currentPage === totalPages"
          class="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          Наступна
        </button>
      </div>
      <button
        @click="scrollToTop"
        class="fixed bottom-6 right-6 bg-blue-600 text-white text-sm py-2 px-4 rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        ↑ До початку
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useFetch } from "#app";

const currentPage = ref(1);
const itemsPerPage = 10;

const { data: posts, pending, error } = useFetch("/posts.json");

//загальна кількості сторінок
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

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>
