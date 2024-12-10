<!-- <script setup>
import { ref } from "vue";
import WeatherCard from "./components/WeatherCard.vue";
import ForecastList from "./components/ForecastList.vue";
import SearchBar from "./components/SearchBar.vue";

const city = ref("");
const weatherData = ref(null); // для зберігання даних про погоду
const forecastData = ref([]);  // для зберігання прогнозу

// При пошуку міста
const handleSearch = (newCity) => {
  city.value = newCity;
  
  // Виконуємо API-запит для отримання даних погоди і прогнозу
  fetchWeatherData(newCity);
};

// API-запити для отримання даних погоди
const fetchWeatherData = async (city) => {
  // API-запит для поточної погоди
  const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5d62a0503e34bb75da39f0f38816d274&units=metric`);
  const weather = await weatherResponse.json();
  weatherData.value = weather;

  // API-запит для прогнозу на кілька днів
  const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=5d62a0503e34bb75da39f0f38816d274&units=metric`);
  const forecast = await forecastResponse.json();
  forecastData.value = forecast.list;
};
</script>

<template>
  <div>
    <SearchBar @search="handleSearch" />
    <WeatherCard 
      v-if="weatherData" 
      :city="city" 
      :temp="weatherData.main.temp" 
      :feelsLike="weatherData.main.feels_like"
      :condition="weatherData.weather[0].description"
      :humidity="weatherData.main.humidity"
      :windSpeed="weatherData.wind.speed"
      :sunrise="new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()"
      :sunset="new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()" 
    />
    <ForecastList :forecast="forecastData" />
  </div>
</template>

<style scoped>
/* Стилі для головного компонента */
</style> -->

<script setup>
import { ref } from "vue";
import WeatherCard from "./components/WeatherCard.vue";
import ForecastList from "./components/ForecastList.vue";
import SearchBar from "./components/SearchBar.vue";

const city = ref("");
const weatherData = ref(null); // для зберігання даних про погоду
const forecastData = ref([]); // для зберігання прогнозу

// При пошуку міста
const handleSearch = (newCity) => {
  city.value = newCity;

  // Виконуємо API-запит для отримання даних погоди і прогнозу
  fetchWeatherData(newCity);
};
const fetchWeatherData = async (city) => {
  try {
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5d62a0503e34bb75da39f0f38816d274&units=metric`
    );
    const weather = await weatherResponse.json();
    console.log("Weather Data:", weather);
    weatherData.value = weather;

    const forecastResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=5d62a0503e34bb75da39f0f38816d274&units=metric`
    );
    const forecast = await forecastResponse.json();
    console.log("Forecast Data:", forecast);

    // Перевірка, чи є масив forecast.list
    if (forecast && forecast.list) {
      forecastData.value = forecast.list;
    } else {
      console.error("No forecast data found");
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};
</script>

<template>
  <div>
    <SearchBar @search="handleSearch" />
    <WeatherCard
      v-if="weatherData"
      :city="city"
      :temp="weatherData.main.temp"
      :feelsLike="weatherData.main.feels_like"
      :tempMin="weatherData.main.temp_min"
      :tempMax="weatherData.main.temp_max"
      :condition="weatherData.weather[0].description"
      :humidity="weatherData.main.humidity"
      :windSpeed="weatherData.wind.speed"
      :sunrise="new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()"
      :sunset="new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()"
    />
    <ForecastList :forecast="forecastData" />
  </div>
</template>
