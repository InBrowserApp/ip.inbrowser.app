<template>
  <main>
    <BackToHome />
    <n-h2 prefix="bar" align-text>My IP Address</n-h2>
    <MyIP />
  </main>
</template>

<script setup lang="ts">
import { NH2 } from "naive-ui";
import { useHead } from "@vueuse/head";
import BackToHome from "@/components/misc/BackToHome.vue";
import MyIP from "@/components/tools/my-ip/MyIP.vue";

useHead({
  title: "My IP Address | IP InBrowser.App",
  meta: [
    {
      name: "description",
      content:
        "Find my IP address. Fully runs in your browser. No server-side code.",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://ip.inbrowser.app/tools/my-ip",
    },
  ],
});
</script>
