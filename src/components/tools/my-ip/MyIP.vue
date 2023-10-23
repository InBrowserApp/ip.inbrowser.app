<template>
  <div>
    IPv4: <IPDisplay :ip="ipv4" />
    <br />
    IPv6: <IPDisplay :ip="ipv6" />
  </div>
</template>

<script setup lang="ts">
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
