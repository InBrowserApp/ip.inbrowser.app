<template>
  <main>
    <BackToHome />
    <n-h2 prefix="bar" align-text>CIDRs Merge & Exclude</n-h2>
    <CIDRMergeExclude />
  </main>
</template>

<script setup lang="ts">
import { NH2 } from "naive-ui";
import { useHead } from "@vueuse/head";
import BackToHome from "@/components/misc/BackToHome.vue";
import CIDRMergeExclude from "@/components/tools/cidr-merge-exclude/CIDRMergeExclude.vue";

useHead({
  title: "CIDRs Merge & Exclude | IP InBrowser.App",
  meta: [
    {
      name: "description",
      content: "Merge and Exclude CIDRs. IPv4 & IPv6 supported.",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://ip.inbrowser.app/tools/cidr-merge-exclude",
    },
  ],
});
</script>
