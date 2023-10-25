<template>
  <main>
    <n-h2 prefix="bar" align-text>Tools</n-h2>
    <n-space vertical>
      <router-link to="/tools/my-ip" #="{ navigate, href }" custom>
        <n-button tag="a" :href="href" @click="navigate" text>
          <template #icon>
            <n-icon :component="Person16Regular" />
          </template>
          My IP Address
        </n-button>
      </router-link>
      <router-link to="/tools/ip-info" #="{ navigate, href }" custom>
        <n-button tag="a" :href="href" @click="navigate" text>
          <template #icon>
            <n-icon :component="DocumentSearch16Regular" />
          </template>
          IP Info Lookup
        </n-button>
      </router-link>
      <router-link to="/tools/cidr-to-ip" #="{ navigate, href }" custom>
        <n-button tag="a" :href="href" @click="navigate" text>
          <template #icon>
            <n-icon :component="ArrowRepeatAll16Regular" />
          </template>
          CIDR to IP
        </n-button>
      </router-link>
    </n-space>
  </main>
</template>

<script setup lang="ts">
import { NH2, NButton, NIcon, NSpace } from "naive-ui";
import {
  DocumentSearch16Regular,
  Person16Regular,
  ArrowRepeatAll16Regular,
} from "@vicons/fluent";
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
