<template>
  <main>
    <BackToHome />
    <n-h2 prefix="bar" align-text>CIDR to IP</n-h2>
    <CIDRToIP />
  </main>
</template>

<script setup lang="ts">
import { NH2 } from "naive-ui";
import { useHead } from "@vueuse/head";
import BackToHome from "@/components/misc/BackToHome.vue";
import CIDRToIP from "@/components/tools/cidr-to-ip/CIDRToIP.vue";

useHead({
  title: "CIDR to IP | IP InBrowser.App",
  meta: [
    {
      name: "description",
      content: "Convert CIDR to IP. IPv4 & IPv6 supported.",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://ip.inbrowser.app/tools/cidr-to-ip",
    },
  ],
});
</script>
