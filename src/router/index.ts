import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MyIPViewVue from "@/views/MyIPView.vue";
import IPInfoView from "@/views/IPInfoView.vue";
import IPInfoLookupView from "@/views/IPInfoLookupView.vue";
import CIDRParseView from "@/views/CIDRParseView.vue";
import CIDRMergeExcludeView from "@/views/CIDRMergeExcludeView.vue";
import IPRangeToCIDRView from "@/views/IPRangeToCIDRView.vue";
import IPCIDRNormalizeView from "@/views/IPCIDRNormalizeView.vue";

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
      path: "/tools/ip-info",
      name: "ip-info-lookup",
      component: IPInfoLookupView,
    },
    {
      path: "/tools/ip-info/:ipdomain",
      name: "ip-info",
      component: IPInfoView,
    },
    {
      path: "/tools/cidr-parse",
      name: "cidr-parse",
      component: CIDRParseView,
    },
    {
      path: "/tools/cidr-merge-exclude",
      name: "cidr-merge-exclude",
      component: CIDRMergeExcludeView,
    },
    {
      path: "/tools/ip-range-to-cidr",
      name: "ip-range-to-cidr",
      component: IPRangeToCIDRView,
    },
    {
      path: "/tools/ip-cidr-normalize",
      name: "ip-cidr-normalize",
      component: IPCIDRNormalizeView,
    },

    // catch all
    {
      path: "/:pathMatch(.*)*",
      redirect: { name: "home" },
    },
  ],
});

export default router;
