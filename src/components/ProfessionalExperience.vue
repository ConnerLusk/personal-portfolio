<template>
  <div class="flex flex-col w-full mt-16">
    <div class="w-3/4 mx-auto flex flex-col">
      <div class="mx-auto flex text-4xl font-bold mb-6">Work Experience</div>
      <Experience
        v-for="item in workExperiences"
        class="mb-10"
        :CompanyName="item.CompanyName"
        :Date="item.Date"
        :Position="item.Position"
        :Bullets="item.Bullets"
      />
      <div class="mx-auto flex text-4xl font-bold mt-10 mb-6">Research Experience</div>
      <Experience
        v-for="item in researchExperiences"
        class="mb-5"
        :CompanyName="item.CompanyName"
        :Date="item.Date"
        :Position="item.Position"
        :Bullets="item.Bullets"
      />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import Experience from "./Reusable/Experience.vue";

export default {
  components: {
    Experience,
  },
  setup() {
    const workExperiences = ref([
      {
        CompanyName: "Athenahealth",
        Date: "Jun. 2024 -> Aug. 2024",
        Position: "Software Engineer",
        Bullets: [
          "• Will work rewriting client data infrastructure from monolith to microservices",
        ],
      },
      {
        CompanyName: "Reprise",
        Date: "Jul. 2023 -> Dec. 2023",
        Position: "Software Engineer",
        Bullets: [
          "• Achieved a 50% improvement in initial page load speed by implementing lazy loading and pagination to reduce load complexity by optimizing it from 1000 requests and 350mb of data to a streamlined 70 requests and 12mb",
          "• Led the end-to-end development of numerous features — analytics, image uploading, sectioning — which played a pivotal role in securing the interest, renewing, or signing of multiple Fortune 500 clients",
        ],
      },
      {
        CompanyName: "Samudra Pacific",
        Date: "Dec. 2021 -> Present",
        Position: "Associate",
        Bullets: [
          "• Lead efforts to build and deploy machine learning models to derive insights about investment opportunities",
          "• Re-implemented website in vue.js,, allowing better tracking of analytics, SEO, and full control over design",
        ],
      },
      {
        CompanyName: "Reprise",
        Date: "Jul. 2022 -> Dec. 2022",
        Position: "Software Engineer",
        Bullets: [
          "• Pioneered HTTP Archive document upload allowing non-technical users to handle errors easier",
          "• Worked directly with solutions engineers and customers to resolve high priority bugs leading to 3 client renewals",
        ],
      },
    ]);
    const researchExperiences = ref([
      {
        CompanyName: "Northeastern University",
        Date: "Dec. 2023 -> Present",
        Position: "Research Assistant",
        Bullets: [
          "• Research in the Efficient and Robust Distributed Machine Learning Lab",
          "• Researching trajectory prediction on multi-environmental agents in 3d space",
        ],
      },
      {
        CompanyName: "Stanford University/Vetran Affairs Hospital",
        Date: "May. 2022 -> Jul. 2022",
        Position: "Research Associate",
        Bullets: [
          "• Researched the creation and implementation of Recurrent Convolutional Neural Networks to analyze Musculoskeletal Radiographs in order to increase diagnostic accuracy",
          "• Assisted in the evaluation and review of research papers and publications to ensure accuracy, relevance, and adherence to scientific standards for publications",
          "• Developed algorithms to calculate pediatric acetabular index, center edge angle, and migration index",
        ],
      },
    ]);
    return { workExperiences, researchExperiences };
  },
};
</script>
