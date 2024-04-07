<template>
  <div class="flex flex-col w-full h-full overflow-y-scroll">
    <div class="w-2/3 mx-auto">
      <div
        class="mt-16 text-center mb-5 font-semibold"
        :class="isMobile ? 'text-6xl' : 'text-4xl'"
      >
        Projects
      </div>
      <Project
        v-for="item in projects"
        class="mb-5 mx-auto"
        :ProjectName="item.ProjectName"
        :Tools="item.Tools"
        :Bullets="item.Bullets"
        :Links="item.Links"
        :isMobile="isMobile"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Project from "../reusable/Project.vue";

export default {
  props: {
    isMobile: {
      type: Boolean,
    },
  },
  components: {
    Project,
  },
  setup(props) {
    const projects = ref([
      {
        ProjectName: "Mocha to Makai",
        Tools: "Vuejs, Typescript, Firebase, Vuex",
        Bullets: [
          "• Implemented user authentication with Firebase for secure access to the platform",
          "• Utilized Vuex for managing local state, providing a seamless user experience across different pages of the website",
          "• Leveraged TypeScript for type safety and improved code maintainability, enhancing the overall quality and robustness of the project",
        ],
        Links: {
          github: "",
          website: "https://mochatomakai.com",
        },
      },
      {
        ProjectName: "Sampac.vc",
        Tools: "Vuejs, Typescript, Firebase, Vuex",
        Bullets: [
          "• Led the redesign and rebuilding of the venture capital firm's website, enabling full customization of the design to align with the brand identity and strategic objectives",
          "• Implemented custom designs and layouts to showcase the firm's portfolio companies, investment strategies, and team members, enhancing the website's visual appeal and informational value",
          "• Enhanced website functionality with features such as contact forms, newsletter subscriptions, and social media integration, facilitating communication and interaction with potential investors and partners",
          "• Provide ongoing maintenance and support for the website, addressing any issues or enhancements to ensure its continued effectiveness as a key marketing and communication tool",
        ],
        Links: {
          github: "",
          website: "https://sampac.vc",
        },
      },
      {
        ProjectName: "Personal Portfolio",
        Tools: "Vuejs, Typescript",
        Bullets: [
          "• Implement responsive design principles to ensure optimal viewing experience across various devices, enhancing accessibility and usability",
          "• Incorporated smooth UI/UX design elements based on prototypes created with Figma, ensuring a visually appealing and user-friendly experience for visitors",
        ],
        Links: {
          github: "https://github.com/ConnerLusk/personal-portfolio",
          website: "https://www.connerlusk.com/",
        },
      },
      {
        ProjectName: "Brain Hemorhhage Classification/Segmentation",
        Tools: "Python: Pandas, Numpy, Tensorflow, Keras",
        Bullets: [
          "• Created a classification model with a 87% test accuracy and 83% validation accuracy",
          "• Created a segmentation model with a 82% training accuracy and 76% validation accuracy",
          "• Fine tuned hyperparamters to decrease model bias",
        ],
        Links: {
          github: "",
          website: "",
        },
      },
    ]);
    return { ...props, projects };
  },
};
</script>
