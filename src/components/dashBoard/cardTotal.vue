<template>
  <q-card class="my-card" :class="backgroundColor">
    <q-card-section horizontal>
      <q-card-section>
        <q-btn text-color="white" class="button" :icon="iconName" />
      </q-card-section>
      <q-card-section>
        <div class="text-h7 text-white text-italic">{{ title }}</div>
        <div class="text-overline text-white text">{{ total }}</div>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: ["title", "total", "backgroundColor", "iconName"],
  data() {},
};
</script>
<style scoped>
.text {
  font-size: 1.64rem;
  margin: 0.82rem 0 0.656rem;
}
.button {
  font-size: xx-large;
}
</style>
