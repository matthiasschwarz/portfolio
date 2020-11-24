<template>
  <v-row align="center">
    <v-col cols="12">
      <div class="text-h2 text-center">Matthias Schwarz</div>
      <div class="text-subtitle-1 text-center">Software Developer</div>
    </v-col>
    <v-col cols="12" class="d-flex justify-center">
      <v-btn text rounded depressed to="projects">
        <span>Projects</span>
        <v-icon> mdi-chevron-down </v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Home",
};
</script>
