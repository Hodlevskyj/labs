<template>
  <v-btn
    :color="type"
    :size="size"
    :disabled="disabled || loading"
    :loading="loading"
  >
    <v-icon v-if="icon" left>{{ icon }}</v-icon>
    <slot />
  </v-btn>
</template>

<script setup>
defineProps({
  type: { type: String, default: "primary" },
  size: { type: String, default: "medium" },
  disabled: { type: Boolean, default: false },
  icon: { type: String, default: "" },
  loading: { type: Boolean, default: false },
});
</script>
