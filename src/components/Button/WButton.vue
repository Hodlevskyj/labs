<template>
  <button
    class="button"
    :class="[
      primary ? 'primary' : 'secondary',
      size,
      { disabled },
    ]"
    :style="{ backgroundColor }"
    @click="onClick"
    :disabled="disabled"
  >
    {{ label }}
  </button>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
  label: { type: String, default: 'Button' },
  primary: { type: Boolean, default: false },
  size: { type: String, default: 'medium' },
  backgroundColor: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
});

defineEmits(['click']);

function onClick() {
  emit('click');
}
</script>

<style scoped>
.button {
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease, opacity 0.3s ease;
}

.button.primary {
  color: white;
  background-color: #4ade80;
}

.button.primary:hover {
  background-color: #3ccf70;
}

.button.secondary {
  color: #333;
  background-color: #e0e0e0;
}

.button.secondary:hover {
  background-color: #cfcfcf;
}

.button.small {
  font-size: 12px;
  padding: 4px 8px;
}

.button.medium {
  font-size: 14px;
  padding: 8px 16px;
}

.button.large {
  font-size: 16px;
  padding: 12px 24px;
}

.button.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
