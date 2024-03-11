<template>
  <div class="flex flex-col w-2/3 mx-auto mt-40">
    <div class="text-4xl">Contact Me</div>
    <div>Name</div>
    <input id="nameInput" class="rounded-md"
          v-model="nameInput" type="text" placeholder="" />
    <div>Email</div>
    <input id="emailInput" class="rounded-md" v-model="emailInput" type="text" placeholder="" />
    <div>Message</div>
    <textarea
      id="messageInput"
      v-model="messageInput"
      class="rounded-md"
      type="text"
      placeholder=""
      rows="4"
    />
    <div class="flex mt-3">
      <a href="https://www.linkedin.com/in/connerlusk" class="mr-2" target="_blank">
        <i class="fa-brands fa-linkedin fa-2x cursor-pointer"/>
      </a>
      <a href="https://github.com/ConnerLusk/" class="mr-2" target="_blank">
        <i class="fa-brands fa-square-github fa-2x" />
      </a>
      <a href="https://medium.com/@cjklusk" target="_blank">
        <i class="fa-brands fa-medium fa-2x" />
      </a>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const nameInput = ref("");
    const emailInput = ref("");
    const messageInput = ref("");

    function gotoLinkedin() {
      window.open('www.linkedin.com/in/connerlusk', '_blank');
    }

    return {
      nameInput,
      emailInput,
      messageInput,
      gotoLinkedin,
    };
  },
};
</script>
