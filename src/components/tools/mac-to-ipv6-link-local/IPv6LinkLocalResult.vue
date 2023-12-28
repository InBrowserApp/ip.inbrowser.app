<template>
  <div>
    {{ ipv6LinkLocalAddress }}
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { macAddressToIPv6LinkLocalAddress } from "@/utils/mac";

const props = defineProps<{
  mac: string | undefined;
}>();

const ipv6LinkLocalAddress = computed(() => {
  if (props.mac === undefined) {
    return undefined;
  } else {
    return macAddressToIPv6LinkLocalAddress(props.mac);
  }
});
</script>
