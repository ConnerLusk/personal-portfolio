<template>
  <div class="flex flex-col w-2/3 mx-auto mt-40">
    <div class="text-5xl font-semibold">Contact Me</div>
    <div>Name</div>
    <input
      id="nameInput"
      class="rounded-md bg-gray-300 px-2 py-1"
      v-model="nameInput"
      type="text"
      placeholder=""
    />
    <div>Email</div>
    <input
      id="emailInput"
      class="rounded-md bg-gray-300 px-2 py-1"
      v-model="emailInput"
      type="text"
      placeholder=""
    />
    <div>Message</div>
    <textarea
      id="messageInput"
      v-model="messageInput"
      class="rounded-md bg-gray-300 px-2 py-1"
      type="text"
      placeholder=""
      rows="4"
    />
    <div class="flex justify-between">
      <div class="flex mt-3">
        <a
          href="https://www.linkedin.com/in/connerlusk"
          class="mr-2"
          target="_blank"
        >
          <i class="fa-brands fa-linkedin fa-2x cursor-pointer" />
        </a>
        <a href="https://github.com/ConnerLusk/" class="mr-2" target="_blank">
          <i class="fa-brands fa-square-github fa-2x" />
        </a>
        <a href="https://medium.com/@cjklusk" target="_blank">
          <i class="fa-brands fa-medium fa-2x" />
        </a>
      </div>
      <div class="flex align-middle mt-2">
        <button
          class="bg-gray-900 my-2 px-2 rounded-lg text-gray-100"
          @click="isValid"
        >
          Submit
        </button>
      </div>
    </div>
    <div v-if="submitted">Email Sent!</div>
    <div v-if="!valid">Not all fields filled</div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const nameInput = ref("");
    const emailInput = ref("");
    const messageInput = ref("");
    const submitted = ref(false);
    const valid = ref(true);

    function gotoLinkedin() {
      window.open("www.linkedin.com/in/connerlusk", "_blank");
    }

    function isValid() {
      valid.value =
        nameInput.value !== "" &&
        emailInput.value !== "" &&
        messageInput !== "";
      if (valid.value) {
        sendEmail();
      }
    }

    function sendEmail() {
      submitted.value = true;
    }

    return {
      nameInput,
      emailInput,
      messageInput,
      gotoLinkedin,
      submitted,
      sendEmail,
      valid,
      isValid,
    };
  },
};
</script>
