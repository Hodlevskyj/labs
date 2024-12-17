<template>
  <div>
    <p>hello</p>
    <MyButton text="click me" />
    <NuxtLink to="/posts"> Posts page </NuxtLink>
  </div>
</template>

<script setup>
useHead({
  title: "Список статей | Блог на Nuxt 3",
  meta: [
    {
      name: "description",
      content: "Це головна сторінка блогу, яка відображає список статей.",
    },
    { name: "keywords", content: "Nuxt 3, блог, статті, SEO" },
    { property: "og:title", content: "Список статей | Блог на Nuxt 3" },
    {
      property: "og:description",
      content: "Перегляньте цікаві статті на нашому блозі!",
    },
  ],
});
</script>
