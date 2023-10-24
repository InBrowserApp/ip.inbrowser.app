<template>
  <main>
    <BackToHome />
    <n-h2 prefix="bar" align-text>My IP Address</n-h2>
    {{ ip }}
  </main>
</template>

<script setup lang="ts">
import { NH2 } from "naive-ui";
import { useHead } from "@vueuse/head";
import BackToHome from "@/components/misc/BackToHome.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const ip = computed(() => route.params.ip);

useHead(
  computed(() => ({
    title: `IP Info for ${ip.value} | IP InBrowser.App`,
    meta: [
      {
        name: "description",
        content: `IP Info for ${ip.value}. Fully runs in your browser. No server-side code.`,
      },
    ],
    link: [
      {
        rel: "canonical",
        href: `https://ip.inbrowser.app/tools/ip-info/${ip.value}`,
      },
    ],
  }))
);
</script>
