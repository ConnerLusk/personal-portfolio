<template>
  <div class="flex w-full h-full">
    <div v-if="isMobile" class="flex flex-col mx-auto mt-44 z-20">
      <div class="text-8xl text-gray-800 font-bold">Conner Lusk</div>
      <div class="text-3xl text-gray-800 font-sans ml-2">
        Software Engineer | {{ items[selectedItem % 4] }}
      </div>
    </div>
    <div v-else class="mx-auto my-auto flex flex-col align-middle">
      <div class="text-6xl text-gray-800 font-bold">Conner Lusk</div>
      <div class="text-lg text-gray-800 font-sans ml-2">
        Software Engineer | {{ items[selectedItem % 4] }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";

export default {
  props: {
    isMobile: {
      type: Boolean,
    },
  },
  setup(props) {
    const items = ref([
      " Marathon Runner 🏃",
      " Subpar Chef 👨‍🍳",
      " Food Lover🍗",
      " Bogey Golfer ⛳️ ",
    ]);
    const selectedItem = ref(0);
    let interval;

    const iterateItemn = () => {
      selectedItem.value += 1;
    };

    onMounted(() => {
      interval = setInterval(iterateItemn, 5000);
    });

    onUnmounted(() => {
      clearInterval(interval);
    });

    return {
      ...props,
      items,
      selectedItem,
    };
  },
};
</script>
