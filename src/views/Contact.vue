<template>
  <v-row align="center">
    <v-col cols="12">
      <div class="text-h3 text-center">Contact me via email to</div>
    </v-col>
    <v-col cols="12" class="d-flex justify-center">
      <v-btn text href="mailto:contact@matthiasschwarz.dev" target="_blank">
        contact@matthiasschwarz.dev
      </v-btn>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
            @click="copyToClipboard('contact@matthiasschwarz.dev')"
          >
            <v-icon>mdi-content-copy</v-icon>
          </v-btn>
        </template>
        <span>Copy</span>
      </v-tooltip>
    </v-col>
    <v-col cols="12" style="margin-top: 24px">
      <div class="text-h4 text-center">Social networks</div>
    </v-col>
    <v-col cols="12" class="d-flex justify-center">
      <v-btn
        href="https://github.com/matthiasschwarz"
        target="_blank"
        depressed
        color="#171515"
      >
        <v-icon left>mdi-github</v-icon>
        GitHub
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Contact",
  methods: {
    copyToClipboard(value) {
      navigator.clipboard.writeText(value);
    },
  },
};
</script>
