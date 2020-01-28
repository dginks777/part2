import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/Home.vue")
    },
    {
      path: "/movie/:id",
      name: "movie",
      component: () => import("./views/Movie.vue")
    }
  ],
  mode: "history"
});

export default router;