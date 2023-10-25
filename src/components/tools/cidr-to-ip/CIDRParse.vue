<template>
  <n-descriptions
    label-placement="left"
    bordered
    :column="1"
    content-style="width: 100%"
    label-style="white-space: nowrap"
    v-if="parsed !== undefined"
  >
    <n-descriptions-item label="IP Version">
      IPv{{ parsed.version }}
    </n-descriptions-item>
    <n-descriptions-item label="Start IP">
      {{ startIP }}
    </n-descriptions-item>
    <n-descriptions-item label="End IP">
      {{ endIP }}
    </n-descriptions-item>
    <n-descriptions-item label="Number of IPs">
      {{ IPSize }}
    </n-descriptions-item>
  </n-descriptions>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { parse } from "cidr-tools";
import { NDescriptions, NDescriptionsItem } from "naive-ui";
import { stringifyIp } from "ip-bigint";

const props = defineProps<{
  cidr: string | undefined;
}>();

const parsed = computed(() => {
  if (props.cidr === undefined) {
    return undefined;
  }

  try {
    return parse(props.cidr);
  } catch (e) {
    return undefined;
  }
});

const startIP = computed(() => {
  if (parsed.value === undefined) {
    return undefined;
  }

  return stringifyIp({
    number: parsed.value.start,
    version: parsed.value.version,
    ipv4mapped: undefined,
    scopeid: undefined,
  });
});

const endIP = computed(() => {
  if (parsed.value === undefined) {
    return undefined;
  }

  return stringifyIp({
    number: parsed.value.end,
    version: parsed.value.version,
    ipv4mapped: undefined,
    scopeid: undefined,
  });
});

const IPSize = computed(() => {
  if (parsed.value === undefined) {
    return undefined;
  }

  const size = parsed.value.end - parsed.value.start + BigInt(1);
  const sizeString = size.toString();

  const fmt /*: BigIntToLocaleStringOptions */ = {
    notation: "scientific",
    maximumFractionDigits: 0,
  } as const;

  const sizeScientific = size.toLocaleString("en-US", fmt);

  return `${sizeString} (${sizeScientific})`;
});
</script>
