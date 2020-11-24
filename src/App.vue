<template>
  <v-app>
    <v-navigation-drawer
      v-if="shrinkToolbar"
      v-model="drawer"
      absolute
      temporary
    >
      <v-list nav dense>
        <v-list-item>
          <v-list-item-title>Matthias Schwarz</v-list-item-title>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item
          v-for="route in navigationRoutes"
          :key="route.name"
          :to="route.path"
        >
          <v-list-item-title>{{ route.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app flat dense color="#121212">
      <v-app-bar-nav-icon
        v-if="shrinkToolbar"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title v-if="!shrinkToolbar">Matthias Schwarz</v-toolbar-title>
      <div style="margin-left: 16px; margin-right: 16px">
        <v-tabs background-color="transparent">
          <v-tab
            v-for="route in navigationRoutesFiltered"
            :key="route.name"
            :to="route.path"
            >{{ route.name }}</v-tab
          >
        </v-tabs>
      </div>
      <v-spacer></v-spacer>
      <div>
        <v-row dense>
          <v-col>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  href="mailto:contact@matthiasschwarz.dev"
                  target="_blank"
                  fab
                  small
                  depressed
                  color="transparent"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon> mdi-email </v-icon>
                </v-btn>
              </template>
              <span>Email</span>
            </v-tooltip>
          </v-col>
          <v-col>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  href="https://github.com/matthiasschwarz"
                  target="_blank"
                  fab
                  small
                  depressed
                  color="transparent"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>mdi-github</v-icon>
                </v-btn>
              </template>
              <span>GitHub</span>
            </v-tooltip>
          </v-col>
        </v-row>
      </div>
    </v-app-bar>

    <v-main>
      <v-container fluid class="fill-height">
        <transition appear name="fade-transition" mode="out-in">
          <router-view />
        </transition>
      </v-container>
    </v-main>

    <v-footer color="#121212">
      <v-row no-gutters>
        <v-col cols="12" class="text-center">
          <span class="caption">Copyright © 2020 Matthias Schwarz</span>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    drawer: false,
    navigationRoutes: [
      { name: "Home", path: "/" },
      { name: "Projects", path: "/projects" },
      { name: "About", path: "/about" },
      { name: "Contact", path: "/contact" },
    ],
  }),
  computed: {
    shrinkToolbar() {
      return this.$vuetify.breakpoint.width < 706;
    },
    navigationRoutesFiltered() {
      return this.shrinkToolbar
        ? this.navigationRoutes.filter(
            (route) => route.path === this.$route.path
          )
        : this.navigationRoutes;
    },
    currentSlideIndex() {
      return this.navigationRoutes.findIndex(
        (route) => route.path === this.$route.path
      );
    },
    previousSlide() {
      return this.navigationRoutes[this.currentSlideIndex - 1];
    },
    nextSlide() {
      return this.navigationRoutes[this.currentSlideIndex + 1];
    },
  },
  methods: {
    keyUpHandler(event) {
      switch (event.key) {
        case "ArrowUp":
          this.switchSlide(this.previousSlide);
          break;
        case "ArrowDown":
          this.switchSlide(this.nextSlide);
          break;
      }
    },
    switchSlide(route) {
      if (route !== undefined) this.$router.push(route);
    },
  },
  created() {
    window.addEventListener("keyup", this.keyUpHandler);
  },
  beforeDestroy() {
    window.removeEventListener("keyup", this.keyUpHandler);
  },
};
</script>

<style>
html {
  overflow-y: auto !important; /* hide scrollbar */
}
</style>
