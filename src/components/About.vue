<template>
  <div class="flex flex-col w-full h-full overflow-y-scroll mb-5 bg-grey-300">
    <div v-if="isMobile" class="flex mx-auto mt-36 px-12">
      <div class="w-[250px] ml-10 my-auto">
        <img src="../../public/me.png" alt="Me" class="w-full" />
      </div>
      <div class="flex flex-col mt-2 w-2/3">
        <span class="font-extrabold" :class="largerText ? 'text-8xl' : 'text-7xl'">Hello!</span
        ><span class="text-lg my-2 ml-2 mr-6" :class="largerText ? 'text-lg' : 'text-sm'"
          >My name is Conner Lusk and I am a fourth year computer science major at Northeastern
          University. I am passionate about researching the intersection between technology
          and healthcare to develop new software within this space that maintains privacy and security
          of the end user.
          </span
        >
        <span class="mr-6 ml-2 mt-3" :class="largerText ? 'text-lg' : 'text-sm'"
          >Feel free to check out the projects and my previous work experience
          below.</span
        >
      </div>
    </div>
    <Experiences />
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import Experiences from "./ProfessionalExperience.vue";

export default {
  props: {
    isMobile: {
      type: Boolean,
    }
  },
 components: {
    Experiences,
  },
  setup(props) {
    const largerText = ref(true);

    const getIsLargerText = () => {
      largerText.value = window.innerWidth > 1025;
    }

    onMounted(() => {
      getIsLargerText();
      window.addEventListener("resize", getIsLargerText);
    });

    onUnmounted(() => {
      window.removeEventListener("resize", getIsLargerText);
    });

 
    return {...props, largerText};
  },
};
</script>
