<template>
  <div class="pagination">
    <button
      v-for="page in totalPages"
      :key="page"
      :class="{ active: page === currentPage }"
      @click="$emit('change-page', page)"
    >
      {{ page }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  currentPage: { type: Number, required: true },
  totalPages: { type: Number, required: true },
});
</script>

<style scoped>
.pagination button.active {
  font-weight: bold;
}
</style>
