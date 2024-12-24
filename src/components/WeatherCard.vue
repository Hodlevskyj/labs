<template>
  <div class="weather-card">
    <h2>{{ city }}</h2>
    <p>Temperature: {{ temp }} °C</p>
    <p>Feels Like: {{ feelsLike }} °C</p>
    <p>Condition: {{ condition }}</p>
    <p>Humidity: {{ humidity }}%</p>
    <p>Wind Speed: {{ windSpeed }} m/s</p>
    <p>Sunrise: {{ sunrise }}</p>
    <p>Sunset: {{ sunset }}</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  city: String,
  temp: Number,
  temp_max:Number,
  temp_min:Number,
  feelsLike: Number,
  condition: String,
  humidity: Number,
  windSpeed: Number,
  sunrise: String,
  sunset: String,
});
</script>

<style scoped>
.weather-card {
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  text-align: center;
}
</style>
