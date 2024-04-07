<template>
  <div class="flex w-screen">
    <div v-if="isVertical" class="w-full flex">
      <div v-for="(item, index) in items" :key="index" class="flex h-screen">
        <div
          class="transition-all duration-300 ease-in-out w-14 border-l-2 border-black z-20"
          style="background-color: #59656f"
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
          style="background-color: #edf2ef"
          :style="item.expanded ? openWidth : '0px'"
        >
          <component :is="item.component" :isMobile="isVertical"> ></component>
        </div>
      </div>
    </div>
    <div v-else class="w-full flex flex-col">
      <div v-for="(item, index) in items" :key="index" class="flex flex-col">
        <div
          class="transition-all duration-300 ease-in-out w-screen border-b-2 border-black z-20 h-12 flex"
          style="background-color: #59656f"
        >
          <h3
            class="text-lg font-semibold cursor-grab text-gray-900 hover:text-gray-300 font-mono my-auto ml-3"
            @click="toggleTab(index)"
          >
            {{ item.title }}
          </h3>
        </div>
        <div
          v-if="item.expanded"
          style="background-color: #edf2ef"
          :style="item.expanded ? openHeight : '0px'"
        >
          <component :is="item.component" :isMobile="isVertical"></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, markRaw } from "vue";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Contact from "./pages/Contact.vue";
import Projects from "./pages/Projects.vue";

export default {
  components: {
    Home,
    About,
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
    const openHeight = ref("");
    const isVertical = ref(false);

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

    const getExpandedHeight = () => {
      const open_height = window.innerHeight - 48 * items.value.length;
      openHeight.value = "height:" + open_height + "px";
    };

    const getIsVertical = () => {
      isVertical.value = window.innerWidth > 800;
    };

    onMounted(() => {
      getExpandedHeight();
      getExpandedWidth();
      getIsVertical();
      window.addEventListener("resize", getExpandedHeight);
      window.addEventListener("resize", getExpandedWidth);
      window.addEventListener("resize", getIsVertical);
    });

    onUnmounted(() => {
      window.removeEventListener("resize", getExpandedHeight);
      window.removeEventListener("resize", getExpandedWidth);
      window.removeEventListener("resize", getIsVertical);
    });

    return {
      items,
      toggleTab,
      isVertical,
      openWidth,
      openHeight,
    };
  },
};
</script>
