<template>
  <div class="input-wrapper">
    <input
      :type="type"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('update:value', $event.target.value)"
      :required="required"
      :maxlength="maxlength"
      @blur="validate"
    />
    <span v-if="errorMessage" class="error">{{ errorMessage }}</span>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  value: { type: String, default: "" },
  placeholder: { type: String, default: "" },
  type: { type: String, default: "text" },
  required: { type: Boolean, default: false },
  error: { type: String, default: "" },
  maxlength: { type: Number, default: null },
});

const errorMessage = ref("");

const validate = () => {
  if (props.required && !props.value) {
    errorMessage.value = props.error || "This field is required";
  } else {
    errorMessage.value = "";
  }
};

watch(() => props.value, validate);
</script>

<style scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;
}

.error {
  color: red;
  font-size: 0.875rem;
}
</style>
