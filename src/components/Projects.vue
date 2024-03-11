<template>
  <div class="flex flex-col w-full h-full">
    <div class="w-2/3 mx-auto">
    <div class="mt-16 text-6xl text-center mb-5"> Projects </div>
    <Project
        v-for="item in projects"
        class="mb-5 mx-auto"
        :ProjectName="item.ProjectName"
        :Tools="item.Tools"
        :Bullets="item.Bullets"
      />
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import Project from "./Reusable/Project.vue";

export default {
  components: {
    Project,
  },
  setup() {
    const projects = ref([
      {ProjectName:"Mocha to Makai",
        Tools:"Vuejs, Typescript, Firebase, Vuex",
        Bullets:["• Utilized Vue.js and Firestore to create a multipage website to archive family recipes", 
                "• Implemented authentication and local state with firebase and Vuex respectively",
        ]},
      {ProjectName:"Personal Portfolio", 
        Tools:"Vuejs, Typescript",
        Bullets:["• Built a portfolio website to display current and past work", 
                "• Used figma for prototyping to implement smooth UI/UX"
        ]}, 
      {ProjectName:"Automated Arbitrage",
        Tools:"Python: Pandas, Numpy, Beatifulsoup, Selenium",
        Bullets:["• Automated scraping of bookie odds from multiple US bookies", 
                "• Created an algorithm to find opportunites of positive predicted value and calculate numerical values to maximize profit",
                "• Automated scripts to run on a heruku server",
        ]},
      {ProjectName:"Brain Hemorhhage Classification/Segmentation", 
        Tools:"Python: Pandas, Numpy, Tensorflow, Keras",
        Bullets:["• Created a classification model with a 87% test accuracy and 83% validation accuracy", 
                "• Created a segmentation model with a 82% training accuracy and 76% validation accuracy",
                "• Fine tuned hyperparamters to decrease model bias",
        ]},
    ])
    return {projects};
  },
};
</script>
