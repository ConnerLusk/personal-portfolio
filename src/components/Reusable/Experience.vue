<template>
  <div class="flex flex-col w-full">
    <div class="flex justify-between">
      <div class="text-3xl">{{ CompanyName }}</div>
      <div class="text-xl">{{ Date }}</div>
    </div>
    <div class="text-xl">{{ Position }}</div>
    <div v-for="bullet in Bullets">{{ bullet }}</div>
  </div>
</template>

<script>
import { ref, defineProps, onUnmounted } from "vue";

export default {
  props: {
    CompanyName: {
      type: String,
      required: true,
    },
    Date: {
      type: String,
      required: true,
    },
    Position: {
      type: String,
      required: true,
    },
    Bullets: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    return { ...props };
  },
};
</script>
