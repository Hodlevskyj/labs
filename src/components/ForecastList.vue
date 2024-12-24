<!-- <template>
  <div class="forecast-list">
    <h3>4-Day Forecast</h3>
    <ul>
      <li v-for="(day, index) in dailyForecast" :key="index">
        {{ day.date }}: {{ day.condition }} - {{ day.temp }} °C, Feels like:
        {{ day.feelsLike }} °C
      </li>
    </ul>
  </div>
</template> -->

<template>
  <div class="forecast-list">
    <h3>4-Day Forecast</h3>
    <ul v-if="forecast.length > 0">
      <li v-for="(day, index) in dailyForecast" :key="index">
        {{ day.date }}: {{ day.condition }} - {{ day.temp }} °C, Feels like:
        {{ day.feelsLike }} °C
      </li>
    </ul>
    <p v-else>No forecast data available.</p>
  </div>
</template>



<script setup>
import { defineProps, ref, watch } from "vue";

const props = defineProps({
  forecast: {
    type: Array,
    required: true,
  },
});

const dailyForecast = ref([]);

// Функція для форматування прогнозу
const formatForecast = (forecastList) => {
  if (!forecastList || !Array.isArray(forecastList)) {
    console.error("Invalid forecast data:", forecastList);
    return [];
  }

  const daily = forecastList.filter((entry) => {
    const time = new Date(entry.dt * 1000).getHours();
    return time === 12; // Прогноз на 12:00
  });

  return daily.slice(0, 4).map((entry) => ({
    date: new Date(entry.dt * 1000).toLocaleDateString(),
    temp: entry.main.temp,
    condition: entry.weather[0]?.description || "No data",
    feelsLike: entry.main.feels_like,
  }));
};


</script>

<style scoped>
.forecast-list {
  margin-top: 20px;
}
</style>
