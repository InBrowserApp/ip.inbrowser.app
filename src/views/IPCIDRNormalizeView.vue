<template>
  <main>
    <BackToHome />
    <n-h2 prefix="bar" align-text>IP/CIDR Normalize</n-h2>
    <IPCIDRNormalize />
  </main>
</template>

<script setup lang="ts">
import { NH2 } from "naive-ui";
import { useHead } from "@vueuse/head";
import BackToHome from "@/components/misc/BackToHome.vue";
import IPCIDRNormalize from "@/components/tools/ip-cidr-normalize/IPCIDRNormalize.vue";

useHead({
  title: "IP/CIDR Normalize | IP InBrowser.App",
  meta: [
    {
      name: "description",
      content: "IP/CIDR Normalize. IPv4 & IPv6 supported.",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://ip.inbrowser.app/tools/ip-cidr-normalize",
    },
  ],
});
</script>
