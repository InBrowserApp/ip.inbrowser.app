<template>
  <main>
    <BackToHome />
    <n-h2 prefix="bar" align-text>IP Range to CIDR</n-h2>
    <IPRangeToCIDR />
  </main>
</template>

<script setup lang="ts">
import { NH2 } from "naive-ui";
import { useHead } from "@vueuse/head";
import BackToHome from "@/components/misc/BackToHome.vue";
import IPRangeToCIDR from "@/components/tools/ip-range-to-cidr/IPRangeToCIDR.vue";

useHead({
  title: "IP Range to CIDR | IP InBrowser.App",
  meta: [
    {
      name: "description",
      content: "IP Range to CIDR. IPv4 & IPv6 supported.",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://ip.inbrowser.app/tools/ip-range-to-cidr",
    },
  ],
});
</script>
