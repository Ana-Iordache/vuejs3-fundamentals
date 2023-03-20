import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Brazil from "@/views/Brazil.vue";
import Jamaica from "@/views/Jamaica.vue";
import Hawaii from "@/views/Hawaii.vue";
import Panama from "@/views/Panama.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"), //dynamic import
  },
  {
    path: "/brazil",
    name: "brazil",
    component: Brazil,
  },
  {
    path: "/jamaica",
    name: "Jamaica",
    component: Jamaica,
  },
  {
    path: "/hawaii",
    name: "Hawaii",
    component: Hawaii,
  },
  {
    path: "/panama",
    name: "Panama",
    component: Panama,
  }
];

// this creates the router instance for our application
const router = createRouter({
  // this is created for us because we chose to use web history during the setup with the Vue CLI
  // if we didn't choose that, we'd have createWebHashHistory
  // with this, when we click on a browser on an image, the url will be "localhost:8001/countryName" <=> html5 mode
  // -> this means that under the hood, vue router is using the html5 history API
  // to produce urls that look normal;
  // if we used createWebHashHistory, the url would be "localhost:8001/#/countryName" <=> hash mode
  // the purpose is to imitate a file path whithout having to setup any special server configs

  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
