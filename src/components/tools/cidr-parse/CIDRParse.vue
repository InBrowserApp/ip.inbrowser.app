<template>
  <CIDRInput @update:cidr="cidr = $event" />
  <CIDRParseResult :cidr="cidr" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import CIDRInput from "./CIDRInput.vue";
import CIDRParseResult from "./CIDRParseResult.vue";

const cidr = ref("");
</script>
