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

    <template v-if="ipWebRTCLeak"> </template>
    <n-h3 prefix="bar" align-text>WebRTC Leak</n-h3>
    <n-p>
      <div v-for="ip of ipWebRTCLeak" :key="ip">
        <IPDisplay :ip="ip" />
      </div>
    </n-p>
  </div>
</template>

<script setup lang="ts">
import { NH3, NP } from "naive-ui";
import { getMyIPv4, getMyIPv6 } from "@/utils/ip/get-my-ip";
import { computedAsync } from "@vueuse/core";
import IPDisplay from "./IPDisplay.vue";
// @ts-ignore
import { getIPs } from "webrtc-ips";

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

const ipWebRTCLeak = computedAsync<string[] | undefined>(async () => {
  try {
    const ips = await getIPs();
    return ips.map((ip: { address: string; v6: boolean }) => ip.address);
  } catch (error) {
    console.error(error);
    return undefined;
  }
}, undefined);
</script>
