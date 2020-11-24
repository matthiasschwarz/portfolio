<template>
  <v-row>
    <v-col>
      <v-card class="mx-auto" width="600px">
        <v-card-title>About me</v-card-title>
        <v-card-text class="white--text">
          <v-row>
            <v-col cols="12">
              {{ description }}
            </v-col>
            <v-col cols="12" style="padding-bottom: 0">
              <div class="text-h6 text-center">Skills</div>
            </v-col>
            <v-col class="pa-0">
              <v-row justify="center">
                <v-col cols="auto">
                  <v-card tile flat>
                    <v-card-title>Languages</v-card-title>
                    <v-card-text>
                      <ul>
                        <li
                          v-for="language in languages"
                          :key="language"
                          class="text-body-1"
                        >
                          {{ language }}
                        </li>
                      </ul>
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="auto">
                  <v-card tile flat>
                    <v-card-title>Frameworks</v-card-title>
                    <v-card-text>
                      <ul>
                        <li
                          v-for="framework in frameworks"
                          :key="framework"
                          class="text-body-1"
                        >
                          {{ framework }}
                        </li>
                      </ul>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "About",
  data: () => ({
    description:
      "I am a passionate software developer that aims for a good user-experience and high code quality. " +
      "Coding is my hobby since 4 years because i like to work at the computer while creating software which is " +
      "useful for people.",
    languages: [
      "C",
      "Java",
      "Kotlin",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "SQL",
    ],
    frameworks: ["Vue"],
  }),
};
</script>
