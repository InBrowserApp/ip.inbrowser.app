<template>
  <main>
    <BackToHome />
    <n-h2 prefix="bar" align-text> IPv6 address to MAC Address Converter </n-h2>
    <n-p>
      This tool converts an IPv6 address to a MAC address using the EUI-64
      format.
    </n-p>
  </main>
</template>

<script setup lang="ts">
import { NH2, NP } from "naive-ui";
import { useHead } from "@vueuse/head";
import BackToHome from "@/components/misc/BackToHome.vue";

useHead({
  title: "IPv6 address to MAC Address Converter | IP InBrowser.App",
  meta: [
    {
      name: "description",
      content:
        "This tool converts an IPv6 address to a MAC address using the EUI-64 format.",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://ip.inbrowser.app/tools/ipv6-to-mac",
    },
  ],
});
</script>
