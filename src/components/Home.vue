<template>
  <div class="flex w-full h-full">
    <div class="flex flex-col mx-auto mt-44 z-20">
      <div class="text-9xl text-white font-thin">Conner Lusk</div>
      <div class="text-3xl text-white font-sans">
        Software Engineer | {{ items[selectedItem % 4] }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";



export default {
  setup() {
    const items = ref([
      " Marathon Runner 🏃",
      " Subpar Chef 👨‍🍳",
      " Food Critic(Picky Eater)🍗",
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
      items,
      selectedItem,
    };
  },
};
</script>
