<template>
  <q-card class="my-card full-height full-width/">
    <div class="bg-teal text-white text-h6 q-pa-md">
      {{ cardTitle }}
      <div class="float-right q-pt-md" style="justify-content: right">
        <q-fab icon="keyboard_arrow_left" direction="left" color="primary">
        </q-fab>
        <q-btn
          round
          padding="md"
          style="margin-left: 10px"
          text-color="white"
          icon="portrait"
          color="primary"
        />
      </div>
    </div>
    <div>
      <Bar :data="dataForChart"  />
    </div>
  </q-card>
</template>
<script>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

import { Bar } from "vue-chartjs";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export default {
  name: "cardChart",
  props: {
    data: {
      type: Object,
      required: true,
    },
    cardTitle: {
      default() {
        return "Graph";
      },
    },
  },
  computed: {
    dataForChart() {
      return {
        labels: Object.keys(this.data),
        datasets: [
          {
            data: Object.values(this.data),
            backgroundColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
            ],
          },
        ],
      };
    },
  },
  components: {
    Bar,
  },
};
</script>
<style scoped>
.my-card {
  margin-left: 4%;
}
</style>
