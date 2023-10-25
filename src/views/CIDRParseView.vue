<template>
  <main>
    <BackToHome />
    <n-h2 prefix="bar" align-text>CIDR Parse</n-h2>
    <CIDRParse />
  </main>
</template>

<script setup lang="ts">
import { NH2 } from "naive-ui";
import { useHead } from "@vueuse/head";
import BackToHome from "@/components/misc/BackToHome.vue";
import CIDRParse from "@/components/tools/cidr-parse/CIDRParse.vue";

useHead({
  title: "CIDR Parse | IP InBrowser.App",
  meta: [
    {
      name: "description",
      content: "Parse CIDR. IPv4 & IPv6 supported.",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://ip.inbrowser.app/tools/cidr-parse",
    },
  ],
});
</script>
