import axios from "axios";

const API_KEY = '5d62a0503e34bb75da39f0f38816d274';
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

export const getWeatherData = async (city) => {
  const response = await axios.get(`${BASE_URL}weather`, {
    params: { q: city, appid: API_KEY, units: "metric" },
  });
  return response.data;
};

export const getForecastData = async (city) => {
  const response = await axios.get(`${BASE_URL}forecast`, {
    params: { q: city, appid: API_KEY, units: "metric" },
  });
  return response.data;
};

const testAPI = async () => {
  try {
    const data = await getWeatherData("Kyiv");
    console.log("Weather Data:", data);
  } catch (error) {
    console.error(
      "Error fetching weather data:",
      error.response?.data || error.message
    );
  }
};
testAPI();
