<template>
  <div class="forecast-chart">
    <h3>Temperature Forecast</h3>
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Chart from "chart.js/auto";

const props = defineProps({
  temperatures: Array,
  labels: Array,
});

const chartCanvas = ref(null);

onMounted(() => {
  const ctx = chartCanvas.value.getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: props.labels,
      datasets: [
        {
          label: "Temperature",
          data: props.temperatures,
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 2,
          fill: false,
        },
      ],
    },
  });
});
</script>

<style scoped>
.forecast-chart {
  margin-top: 20px;
}
</style>
