<template>
  <v-row class="align-self-start">
    <v-col v-for="project in projects" :key="project.name">
      <v-card class="mx-auto" width="1080">
        <v-carousel
          cycle
          hide-delimiter-background
          show-arrows-on-hover
          height="auto"
        >
          <v-carousel-item
            eager
            v-for="image in project.images"
            :key="image"
            :src="getImageSrc(project.name, image)"
          >
            <v-img eager :src="getImageSrc(project.name, image)"></v-img>
          </v-carousel-item>
        </v-carousel>

        <v-card-title>
          {{ project.name }}
        </v-card-title>

        <v-card-subtitle>
          <v-row dense>
            <v-col cols="12">
              <v-chip
                small
                class="language-chip"
                v-for="language in project.languages"
                :key="language"
                :color="getLanguageColor(language).background"
                :text-color="getLanguageColor(language).text"
              >
                {{ language }}
              </v-chip>
            </v-col>
            <v-col cols="12">
              {{ project.description }}
            </v-col>
          </v-row>
        </v-card-subtitle>

        <v-card-actions>
          <v-row no-gutters align="center">
            <v-col>
              <v-btn text block :href="project.website" target="_blank">
                <v-icon left> mdi-web </v-icon>
                Website
              </v-btn>
            </v-col>
            <v-col>
              <v-btn text block :href="project.github" target="_blank">
                <v-icon left> mdi-github </v-icon>
                <span>GitHub</span>
              </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
const languageColors = {
  JavaScript: { text: "black", background: "#f1e05a" },
  TypeScript: { text: "white", background: "#2b7489" },
  Vue: { text: "white", background: "#2c3e50" },
  HTML: { text: "white", background: "#e34c26" },
  CSS: { text: "white", background: "#563d7c" },
};
export default {
  name: "Projects",
  data: () => ({
    projects: [
      {
        name: "VidSnip",
        description:
          "Cut youtube videos into sections so that only the desired times are played. " +
          "Afterwards a code can be generated to save the edited video which can be freely shared so that no download is needed.",
        languages: ["JavaScript", "TypeScript", "Vue", "HTML", "CSS"],
        images: ["overview.png", "edit.png", "share.png"],
        website: "https://vidsnip.matthiasschwarz.dev",
        github: "https://github.com/matthiasschwarz/vidsnip",
      },
    ],
  }),
  methods: {
    getLanguageColor(language) {
      return languageColors[language];
    },
    getImageSrc(project, image) {
      return `/assets/images/projects/${project}/${image}`;
    },
  },
};
</script>

<style>
.language-chip {
  margin-right: 4px;
}
</style>
