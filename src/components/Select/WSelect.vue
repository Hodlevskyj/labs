<template>
  <v-select
    :items="options"
    v-model="selectedValue"
    :label="placeholder"
    :multiple="multiple"
    :clearable="clearable"
    :disabled="disabled"
    @change="$emit('change', selectedValue)"
  />
</template>

<script setup>
defineProps({
  options: { type: Array, default: () => [] },
  value: [String, Number, Array],
  placeholder: String,
  multiple: Boolean,
  clearable: Boolean,
  disabled: Boolean,
});
const selectedValue = ref(value);
</script>
