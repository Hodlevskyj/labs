<template>
  <div class="article-card">
    <h2>{{ post.title }}</h2>
    <p>{{ post.description }}</p>
    <p>
      <small>{{ post.date }}</small>
    </p>
    <NuxtLink :to="`/posts/${post.id}`">Читати більше</NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  post: {
    type: Object,
    required: true,
  },
});
</script>
