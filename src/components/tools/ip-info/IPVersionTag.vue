<template>
  <n-tag :type="type" size="small" :bordered="false">
    {{ version }}
  </n-tag>
</template>

<script setup lang="ts">
import { NTag } from "naive-ui";
import { validateIPv4, validateIPv6 } from "@/utils/ip/common/validate";
import { computed } from "vue";

const props = defineProps<{
  ip: string;
}>();

const version = computed(() => {
  if (validateIPv4(props.ip)) {
    return "IPv4";
  } else if (validateIPv6(props.ip)) {
    return "IPv6";
  } else {
    return "Unknown";
  }
});

const type = computed(() => {
  if (version.value === "IPv4") {
    return "info";
  } else if (version.value === "IPv6") {
    return "success";
  } else {
    return "warning";
  }
});
</script>
