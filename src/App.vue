<template>
  <v-app>
    <v-main>
      <Navbar />
      <router-view />
       <!-- <HelloWorld /> -->
       <AppFooter />
    </v-main>
  </v-app>
</template>

<script setup>
import AppFooter from './components/AppFooter.vue';
import HelloWorld from './components/HelloWorld.vue';
import Navbar from './components/Navbar.vue';

</script>
