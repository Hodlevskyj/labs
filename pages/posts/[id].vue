<template>
  <div class="bg-gray-100 min-h-screen py-10">
    <div class="container mx-auto">
      <BreadCrumbs />

      <div v-if="pending" class="text-center text-gray-500">Завантаження...</div>
      <div v-else-if="error" class="text-center text-red-500">{{ error }}</div>
      <div v-else class="bg-white rounded-lg shadow-md p-6">
        <h1 class="text-3xl font-bold text-gray-800 mb-4">{{ post.title }}</h1>
        <small class="text-gray-500 block mb-4">Дата: {{ post.date }}</small>
        <p class="text-gray-700 mb-6">{{ post.content }}</p>
        <NuxtLink to="/posts" class="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">Назад до списку</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import { usePost } from "@/composables/usePost";
import BreadCrumbs from "~/components/BreadCrumbs.vue";

const route = useRoute();
const { post, pending, error } = usePost(route.params.id);//отримати id з маршрута



useHead(() => ({
  meta: [
    { property: "og:title", content: post.value?.title || "Назва статті" },
    {
      property: "og:description",
      content: post.value?.description || "Опис статті.",
    },
    {
      property: "og:image",
      content: `/images/${post.value?.id || "default"}.jpg`,
    },
    {
      property: "og:url",
      content: `https://blog.com/posts/${post.value?.slug}`,
    },
    { property: "og:type", content: "blog" },

    { name: "twitter:card", content: "card_image" },
    { name: "twitter:title", content: post.value?.title || "Стаття блогу" },
    {
      name: "twitter:description",
      content: post.value?.description || "Опис статті",
    },
    {
      name: "twitter:image",
      content: `/images/${post.value?.slug || "default"}.jpg`,
    },

    //автор статті
    {
      property: "post:author",
      content: post.value?.author || "https://twitter.com/default-author",
    },
  ],
}));
</script>
