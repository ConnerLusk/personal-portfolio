<template>
  <div class="flex flex-col w-full" :class="isMobile ? 'mb-10' : 'mb-5'">
    <div
      class="flex"
      :class="isMobile ? 'justify-between text-3xl' : 'flex-col text-2xl'"
    >
      <div class="font-semi-bold">{{ CompanyName }}</div>
      <div v-if="isMobile" class="text-xl">{{ Date }}</div>
    </div>
    <div :class="isMobile ? 'text-xl' : 'text-md'">{{ Position }}</div>
    <div v-for="bullet in Bullets" :class="isMobile ? '' : 'text-sm'">
      {{ bullet }}
    </div>
  </div>
</template>

<script>
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
    isMobile: {
      type: Boolean,
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
