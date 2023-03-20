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
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
