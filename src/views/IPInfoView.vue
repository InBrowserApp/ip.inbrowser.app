<template>
  <main>
    <BackToHome />
    <n-h2 prefix="bar" align-text>IP Info - {{ ip }}</n-h2>
    <IPInfo :ip="ip" />
  </main>
</template>

<script setup lang="ts">
import { NH2 } from "naive-ui";
import { useHead } from "@vueuse/head";
import BackToHome from "@/components/misc/BackToHome.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
import IPInfo from "@/components/tools/ip-info/IPInfo.vue";

const route = useRoute();
const ip = computed(() => route.params.ip as string);

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
