<template>
  <CIDRInput @update:cidr="cidr = $event" />
  <CIDRParse :cidr="cidr" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import CIDRInput from "./CIDRInput.vue";
import CIDRParse from "./CIDRParse.vue";

const cidr = ref("1.1.1.1/24");
</script>
