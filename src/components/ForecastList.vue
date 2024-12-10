<template>
  <div class="forecast-list">
    <h3>5-Day Forecast</h3>
    <ul>
      <li v-for="(day, index) in dailyForecast" :key="index">
        {{ day.date }}: {{ day.condition }} - {{ day.temp }} °C, Feels like:
        {{ day.feelsLike }} °C
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps, ref, onMounted } from "vue";

const props = defineProps({
  forecast: Array,
});

const dailyForecast = ref([]);

const formatForecast = () => {
  let forecastData = [];
  let currentDate = "";

  for (let i = 0; i < props.forecast.length; i++) {
    const day = props.forecast[i];
    const date = new Date(day.dt * 1000).toLocaleDateString();

    // Якщо це новий день, додаємо його в список
    if (date !== currentDate) {
      forecastData.push({
        date: date,
        condition: day.weather[0].description,
        temp: day.main.temp,
        temp_min: day.main.temp_min,
        temp_max: day.main.temp_max,
        feelsLike: day.main.feels_like,
      });
      currentDate = date;
    }
  }

  dailyForecast.value = forecastData;
};

onMounted(() => {
  formatForecast(); // Обробка даних при завантаженні компонента
});
</script>

<style scoped>
.forecast-list {
  margin-top: 20px;
}
</style>
