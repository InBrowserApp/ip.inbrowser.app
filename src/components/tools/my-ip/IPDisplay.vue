<template>
  <span>
    <template v-if="ip === undefined">
      <n-skeleton text style="width: 8.5em" />
    </template>
    <template v-if="typeof ip === 'string'">
      <span class="ip">{{ ip }}</span>
    </template>
    <template v-if="ip === null">
      <span>Unable to get IP</span>
    </template>
  </span>
</template>

<script setup lang="ts">
import { NSkeleton } from "naive-ui";

defineProps<{
  ip: string | undefined | null;
}>();
</script>

<style scoped>
.ip {
  font-family: monospace;
}
</style>
