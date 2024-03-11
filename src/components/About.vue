<template>
  <div class="flex flex-col w-full h-full overflow-y-scroll mb-5">
    <div class="flex mx-auto mt-36 px-12">
      <div class="w-1/4 ml-10">
        <img src="../../public/me.png" alt="Me" class="w-full" />
      </div>
      <div class="flex flex-col w-2/3 mt-2">
        <span class="font-extrabold text-8xl">Hello!</span
        ><span class="font-medium text-xl my-2 ml-2 mr-6"
          >My name is Conner Lusk and I am a fourth year computer science major at Northeastern
          University. I am passionate about researching the intersection between technology
          and healthcare to develop new software within this space that maintains privacy and security
          of the end user.
          </span
        >
        <span class="font-medium text-xl mr-6 ml-2 mt-3"
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
  components: {
    Experiences,
  },
  setup() {
    return {};
  },
};
</script>
