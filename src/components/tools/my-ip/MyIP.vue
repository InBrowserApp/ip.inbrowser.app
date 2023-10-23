<template>
  <div>
    <n-h3 prefix="bar" align-text>IPv4</n-h3>
    <n-p>
      <IPDisplay :ip="ipv4" />
    </n-p>

    <n-h3 prefix="bar" align-text>IPv6</n-h3>
    <n-p>
      <IPDisplay :ip="ipv6" />
    </n-p>
  </div>
</template>

<script setup lang="ts">
import { NH3, NP } from "naive-ui";
import { getMyIPv4, getMyIPv6 } from "@/utils/ip/get-my-ip";
import { computedAsync } from "@vueuse/core";
import IPDisplay from "./IPDisplay.vue";

const ipv4 = computedAsync<string | undefined | null>(async () => {
  try {
    return await getMyIPv4();
  } catch (error) {
    console.error(error);
    return null;
  }
});
const ipv6 = computedAsync<string | undefined | null>(async () => {
  try {
    return await getMyIPv6();
  } catch (error) {
    console.error(error);
    return null;
  }
});
</script>
