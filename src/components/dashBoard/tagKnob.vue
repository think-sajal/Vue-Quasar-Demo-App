<template>
  <div class="text-center q-pa-xs">
    <span
      class="label rotate rotate-270 shadow q-px-xs text-white"
      :class="tagClasses"
    >
      <q-knob
        class="text-white q-ma-md q-pa-sm"
        :v-model="value"
        show-value
        :size="size"
        :thickness="0.1"
        style="font-size: 6rem"
        :track-color="trackColor"
        :min="min"
        :max="max"
        readonly
        >{{ this.placeholderBefore + this.value }}</q-knob
      >
    </span>
    <span
      class="title block text-subtitle1 text-weight-regular"
      :style="{ color: titleColor }"
      >{{ title }}</span
    >
  </div>
</template>

<script>
export default {
  name: "tagKnob",
  props: {
    value: {
      required: true,
    },
    size: {
      required: true,
    },
    min: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      required: true,
    },
    title: {},
    titleColor: {},
    tagClasses: {},
    trackColor: {},
    placeholderBefore: {},
  },
  computed: {
    fullPlaceHolder() {
      return this.placeholderBefore
        ? `${this.placeholderBefore}${this.value}`
        : this.value;
    },
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.label {
  padding-top: 63px;
  padding-bottom: 62px;
}
.tag{
    margin-left: 0;
    padding-left: 1rem;
    padding-right: 0.8rem;
  }
.title {
  margin-top: 24px;
  margin-bottom: 20px;
}
</style>
