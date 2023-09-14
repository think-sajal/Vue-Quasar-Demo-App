<template>
  <div>
    <div class="row q-pa-sm">
      <div class="col-6">
        <tagKnob
          :value="currentIncome"
          :min="0"
          :max="doubleRangeMinMax.max"
          title="Current Income"
          track-color=""
          title-color="blue"
          tag-classes="bg-blue"
          placeholder-before="$"
          size="120px"
        ></tagKnob>
      </div>
      <div class="col-6">
        <tagKnob
          :value="currentExpenses"
          :min="0"
          :max="maxExpenses"
          title="Current Expenses"
          track-color=""
          title-color="red"
          size="120px"
          tag-classes="bg-red"
          placeholder-before="$ -"
        ></tagKnob>
      </div>
    </div>
    <div class="q-pa-sm">
      <div>
        <q-slider
          v-model="currentIncome"
          :min="minIncome"
          :max="doubleRangeMinMax.max"
          snap
          label-always
          color="blue"
        ></q-slider>
      </div>
    </div>
    <div class="q-pa-sm">
      <div class="">
        <q-slider
          v-model="currentExpenses"
          :min="minExpenses"
          :max="maxExpenses"
          snap
          label-always
          color="red"
        ></q-slider>
      </div>
    </div>
    <div class="q-pa-sm">
      <div>
        <q-range
          color="teal"
          v-model="doubleRangeMinMax"
          :min="0"
          :max="maxIncome"
          drag-range
          label-always
        ></q-range>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import tagKnob from "./tagKnob.vue";
export default {
  data() {
    return {
      minExpenses: 0,
      minIncome: 0,
      maxIncome: 5000,
      currentIncome: 998,
      currentExpenses: 125,
      doubleRangeMinMax: {
        min: 0,
        max: 5000,
      },
    };
  },
  computed: {
    maxExpenses() {
      return this.currentIncome;
    },
  },
  props: ["cardTitle"],
  components: {
    tagKnob,
  },
};
</script>
<style scoped>
</style>
