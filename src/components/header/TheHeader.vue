<template>
  <header>
    <div class="wrapper">
      <HeaderText />
      <HeaderNav class="nav hidden-on-print" style="margin-bottom: 1em" />
      <IPInfoSearchInput style="margin-bottom: 1em" />
    </div>
  </header>
</template>

<script lang="ts" setup>
import HeaderText from "./HeaderText.vue";
import HeaderNav from "./nav/HeaderNav.vue";
import IPInfoSearchInput from "@/components/tools/ip-info/IPInfoSearchInput.vue";
</script>

<style scoped>
header {
  max-height: 100vh;
}

@media (max-width: 1023px) {
  .nav {
    margin-bottom: 25px;
  }
}
</style>
