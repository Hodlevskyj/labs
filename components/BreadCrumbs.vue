<template>
  <nav aria-label="Breadcrumbs">
    <ul class="breadcrumbs">
      <!-- Головна кнопка -->
      <li>
        <NuxtLink to="/">Головна</NuxtLink>
      </li>

      <!-- Динамічні хлібні крихти -->
      <li v-for="(crumb, index) in breadcrumbs" :key="index">
        <span v-if="index < breadcrumbs.length - 1">
          <NuxtLink :to="crumb.path">{{ crumb.name }}</NuxtLink>
        </span>
        <span v-else>{{ crumb.name }}</span>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();

const breadcrumbs = computed(() => {
  const paths = route.path.split("/").filter(Boolean); //розділяємо шлях на частини
  const breadcrumbPaths = [];

  //генерація хлібних крихт для кожного сегмента
  paths.forEach((path, index) => {
    const fullPath = `/${paths.slice(0, index + 1).join("/")}`; //будуємо повний шлях
    breadcrumbPaths.push({
      name: path.charAt(0).toUpperCase() + path.slice(1), //першу літеру робимо великою
      path: fullPath, //шлях для переходу
    });
  });

  return breadcrumbPaths;
});
</script>

<style scoped>
.breadcrumbs {
  list-style: none;
  display: flex;
  padding: 0;
  font-size: 14px;
}

.breadcrumbs li {
  margin-right: 10px;
}

.breadcrumbs li a {
  text-decoration: none;
  color: #007bff;
}

.breadcrumbs li span {
  color: #6c757d;
}

.breadcrumbs li::after {
  content: ">";
  margin-left: 10px;
  color: #6c757d;
}

.breadcrumbs li:last-child::after {
  content: "";
}
</style>
