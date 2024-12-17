<template>
  <div>
    <div v-if="pending">Завантаження...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <h1>{{ post.title }}</h1>
      <small>Дата: {{ post.date }}</small>
      <p>{{ post.content }}</p>
      <NuxtLink to="/posts">Назад до списку</NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import { usePost } from "@/composables/usePost";

//отримання ID з маршруту
const route = useRoute();
const { post, pending, error } = usePost(route.params.id);

// useHead(() => ({
//   title: `${post.value?.title} | Блог на Nuxt 3`,
//   meta: [
//     { name: "description", content: post.value?.description || "Опис статті" },
//     { name: "keywords", content: "Nuxt 3, блог, стаття, SEO" },
//     { property: "og:title", content: post.value?.title || "Стаття" },
//     { property: "og:description", content: post.value?.description || "Опис статті" },
//   ]
// }));

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
