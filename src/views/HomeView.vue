<template>
  <main>
    <n-h2 prefix="bar" align-text>Tools</n-h2>
  </main>
</template>

<script setup lang="ts">
import { NH2 } from "naive-ui";
import { useHead } from "@vueuse/head";

useHead({
  title: "IP InBrowser.App",
  meta: [
    {
      name: "description",
      content:
        "IP InBrowser.App is a tool to check IP. Fully runs in your browser. No server-side code.",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://ip.inbrowser.app/",
    },
  ],
});
</script>
