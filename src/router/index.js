import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      description:
        "Portfolio website of the software developer Matthias Schwarz",
    },
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    meta: {
      description: "Learn more about Matthias Schwarz",
    },
    component: () => import("../views/About.vue"),
  },
  {
    path: "/projects",
    name: "Projects",
    meta: {
      description: "Projects developed by Matthias Schwarz",
    },
    component: () => import("../views/Projects.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    meta: {
      description: "How to contact Matthias Schwarz",
    },
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
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription === null) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", to.meta.description);
  });
});

export default router;
