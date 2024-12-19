<template>
  <WButton class="bg-blue-500" type="secondary" size="medium" @click="onClick">
    Click Me
  </WButton>
</template>

<script setup>
const onClick = (event) => {
  console.log('Кнопка була натиснута', event);
};
</script>
