<template>
  <n-h3 prefix="bar" align-text>MAC Address</n-h3>
  <MACInput @update:mac="mac = $event" />
  <template v-if="mac !== ''">
    <n-h3 prefix="bar" align-text style="margin-top: 0.5em">Result</n-h3>
    <IPv6LinkLocalResult :mac="mac" />
  </template>
</template>

<script setup lang="ts">
import { NH3 } from "naive-ui";
import { ref } from "vue";
import MACInput from "./MACInput.vue";
import IPv6LinkLocalResult from "./IPv6LinkLocalResult.vue";

const mac = ref("");
</script>
