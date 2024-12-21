<template>
  <div class="select">
    <label v-if="placeholder" :for="id" class="select-label">{{ placeholder }}</label>
    <div class="select-wrapper">
      <select
        :id="id"
        class="select-dropdown"
        v-model="selectedValue"
        :multiple="multiple"
        :disabled="disabled"
        @change="onChange"
      >
        <option v-if="!multiple && clearable" value="">
          -- Clear Selection --
        </option>
        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </select>
      <button
        v-if="clearable && !multiple"
        class="clear-btn"
        @click="clearSelection"
        :disabled="disabled"
      >
        Clear
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Пропси
defineProps({
  options: { type: Array, required: true }, // Масив опцій [{ label, value }]
  value: { type: [String, Number, Array, Object], default: '' }, // Обране значення
  placeholder: { type: String, default: '' }, // Текст-заповнювач
  multiple: { type: Boolean, default: false }, // Багатоселект
  clearable: { type: Boolean, default: false }, // Можливість очищення
  disabled: { type: Boolean, default: false }, // Заблокувати компонент
  id: { type: String, default: 'select' }, // ID для зв'язку з лейблом
});

// Події
const emit = defineEmits(['update:value', 'change']);

// Реактивне значення
const selectedValue = ref(value);

// Слідкування за змінами
const onChange = () => {
  emit('update:value', selectedValue.value); // Оновлює v-model
  emit('change', selectedValue.value); // Викликає подію @change
};

// Очищення вибору
const clearSelection = () => {
  selectedValue.value = multiple ? [] : '';
  emit('update:value', selectedValue.value);
  emit('change', selectedValue.value);
};
</script>

<style scoped>
.select {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.select-label {
  font-size: 14px;
  font-weight: bold;
  color: #333;
}

.select-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
}

.select-dropdown {
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: white;
  transition: border-color 0.3s ease;
  width: 100%;
}

.select-dropdown:focus {
  border-color: #4ade80;
  outline: none;
}

.clear-btn {
  background-color: #f3f4f6;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 6px 12px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.clear-btn:hover {
  background-color: #e0e0e0;
}

.clear-btn:disabled {
  background-color: #ddd;
  cursor: not-allowed;
}
</style>

