<template>
  <div class="flex flex-col w-full">
    <div class="text-2xl">{{ ProjectName }}</div>
    <div class="text-md mb-1">{{ Tools }}</div>
    <div v-for="bullet in Bullets" :class="isMobile ? 'text-sm' : 'text-sm'">
      {{ bullet }}
    </div>
    <div class="flex mt-2">
      <div v-if="Links.github !== ''">
        <a
          :href="Links.github"
          class="fa-brands fa-github mr-2"
          role="button"
        />
      </div>
      <div v-if="Links.website !== ''" class="cursor-grab">
        <a :href="Links.website" class="fa-solid fa-display" role="button" />
      </div>
    </div>
  </div>
</template>

<script>
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
    Links: {
      type: Object,
      required: true,
    },
    isMobile: {
      type: Boolean,
    },
  },
  setup(props) {
    return { ...props };
  },
};
</script>
