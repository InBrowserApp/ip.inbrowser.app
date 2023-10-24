import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MyIPViewVue from "@/views/MyIPView.vue";
import IPInfoView from "@/views/IPInfoView.vue";

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
    {
      path: "/tools/ip-info/:ipdomain",
      name: "ip-info",
      component: IPInfoView,
    },
  ],
});

export default router;
