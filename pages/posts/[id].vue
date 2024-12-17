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
</script>
