<template>
  <div class="flex w-screen">
    <div v-for="(item, index) in items" :key="index" class="flex h-screen">
      <div
        class="transition-all duration-300 ease-in-out w-14 border-l-2 border-black z-20"
        style="background-color: #30444f"
      >
        <h3
          class="text-lg font-semibold rotate-90 mt-10 cursor-grab text-gray-900 hover:text-gray-300 font-mono"
          @click="toggleTab(index)"
        >
          {{ item.title }}
        </h3>
      </div>
      <div
        v-if="item.expanded"
        class="bg-gray-500"
        :style="item.expanded ? openWidth : '0px'"
      >
        <component :is="item.component"></component>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, markRaw } from "vue";
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Contact from "../components/Contact.vue";
import Projects from "../components/Projects.vue";

export default {
  components: {
    Home,
    Contact,
    Projects,
  },
  setup() {
    const items = ref([
      {
        title: "Home",
        component: markRaw(Home),
        expanded: true,
      },
      {
        title: "About",
        component: markRaw(About),
        expanded: false,
      },
      {
        title: "Projects",
        component: markRaw(Projects),
        expanded: false,
      },
      {
        title: "Contact",
        component: markRaw(Contact),
        expanded: false,
      },
    ]);

    const selectedItem = ref(0);
    const openWidth = ref("");

    const toggleTab = (index) => {
      if (index === selectedItem.value) return;
      items.value[selectedItem.value].expanded = false;
      items.value[index].expanded = true;
      selectedItem.value = index;
    };

    const getExpandedWidth = () => {
      const open_width = window.innerWidth - 56 * items.value.length;
      openWidth.value = "width:" + open_width + "px";
    };

    onMounted(() => {
      getExpandedWidth();
      window.addEventListener("resize", getExpandedWidth);
    });

    onUnmounted(() => {
      window.removeEventListener("resize", getExpandedWidth);
    });

    return {
      items,
      toggleTab,
      getExpandedWidth,
      openWidth,
    };
  },
};
</script>
