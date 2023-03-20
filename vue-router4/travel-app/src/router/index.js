import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"), //dynamic import
  // },
  {
    path: "/brazil",
    name: "brazil",
    component: () => import(/* webpackChunkName: "brazil" */ "@/views/Brazil.vue"),
  },
  {
    path: "/jamaica",
    name: "Jamaica",
    component: () => import(/* webpackChunkName: "jamaica" */ "@/views/Jamaica.vue"),
  },
  {
    path: "/hawaii",
    name: "Hawaii",
    component: () => import(/* webpackChunkName: "hawaii" */ "@/views/Hawaii.vue"),
  },
  {
    path: "/panama",
    name: "Panama",
    component: () => import(/* webpackChunkName: "panama" */ "@/views/Panama.vue"),
  }
];

/* webpackChunkName: "namePage" */ 
//---> this is called a magic comment and it will give the name of the page (or what we specify inside the "") to the chunk

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
// in devtools -> network -> JS => app.js file - loads all the js for the entire app
// <=> javascript bundle; it would be better to only load the js for the home page on the home page
// and the js for the brazil page n the brazil page
// and that this only loads if we actually go to the respective pages
// => the app would be mush lither and faster
// using the webpack code splitting we can split our bundle into multiple smaller files called chunks/bundles
// in our case we can split each page and load the required code only when the route is being visited
