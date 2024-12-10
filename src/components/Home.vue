<template>
  <v-container
    fluid
    class="home-container"
    style="
      background-image: url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxOTU1fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1920');
      background-size: cover;
      background-position: center;
      height: 100vh;
    "
  >
    <v-row
      justify="center"
      align="center"
      class="text-center"
      style="height: 100%"
    >
      <v-col cols="12">
        <h1 class="white--text">Welcome to My Portfolio</h1>
        <v-btn @click="$router.push('/about')" dark>Learn More</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
</script>

<style>
.home-container {
  color: white;
}
</style>
