<template>
  <span>
    <template v-if="ip === undefined">
      <n-skeleton text style="width: 8.5em" />
    </template>
    <template v-if="ip === null">
      <span>Unable to get IP</span>
    </template>
  </span>
</template>

<script setup lang="ts">
import { NSkeleton } from "naive-ui";

defineProps<{
  ip: undefined | null;
}>();
</script>

<style scoped>
.link {
  color: inherit;
  text-decoration: inherit;
}

.link:hover {
  text-decoration: underline;
}
</style>
