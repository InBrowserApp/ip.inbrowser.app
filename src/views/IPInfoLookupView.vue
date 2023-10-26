<template>
  <main>
    <BackToHome />
    <n-h2 prefix="bar" align-text>IP Info Lookup</n-h2>
    <n-p>
      This tool retrieves detailed information about an IP address, aiding in
      network analysis and troubleshooting. Enter the IP, and get instant
      information including location, ISP, and associated domain name.
    </n-p>
    <n-h3 prefix="bar" align-text>IPv4 / IPv6 / Domain</n-h3>
    <IPInfoSearchInput />
  </main>
</template>

<script setup lang="ts">
import { NH2, NP, NH3 } from "naive-ui";
import { useHead } from "@vueuse/head";
import BackToHome from "@/components/misc/BackToHome.vue";
import IPInfoSearchInput from "@/components/tools/ip-info/IPInfoSearchInput.vue";

useHead({
  title: "IP Info Lookup | IP InBrowser.App",
  meta: [
    {
      name: "description",
      content:
        "Lookup IP Info. Fully runs in your browser. No server-side code.",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://ip.inbrowser.app/tools/ip-info",
    },
  ],
});
</script>
