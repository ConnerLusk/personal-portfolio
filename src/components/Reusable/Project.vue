<template>
  <div class="flex flex-col w-full">
      <div class="text-3xl">{{ ProjectName }}</div>
      <div class="text-xl">{{ Tools }}</div>
    <div v-for="bullet in Bullets">{{ bullet }}</div>
  </div>
</template>

<script>
import { ref, defineProps, onUnmounted } from "vue";

export default {
  props: {
    ProjectName: {
      type: String,
      required: true,
    },
    Tools: {
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
