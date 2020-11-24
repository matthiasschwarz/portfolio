import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/projects",
    name: "Projects",
    component: () => import("../views/Projects.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

const PREFIX_TITLE = "Matthias Schwarz - ";
router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = PREFIX_TITLE + to.name;
  });
});

export default router;
