import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MyIPViewVue from "@/views/MyIPView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/tools/my-ip",
      name: "my-ip",
      component: MyIPViewVue,
    },
  ],
});

export default router;
