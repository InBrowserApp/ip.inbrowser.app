<template>
  <main>
    <BackToHome />
    <n-h2 prefix="bar" align-text>IP Info - {{ ipdomain }}</n-h2>
    <template v-if="ips === undefined">
      <IPInfo :ip="undefined" />
    </template>
    <template v-else-if="ips?.length === 0">
      <n-result status="500" :title="`Failed to get ${ipdomain}'s IP`">
      </n-result>
    </template>

    <template v-else>
      <n-collapse display-directive="show" :default-expanded-names="ips">
        <n-collapse-item v-for="ip in ips" :key="ip" :title="ip" :name="ip">
          <template #header-extra>
            <IPVersionTag :ip="ip" />
          </template>

          <IPInfo :ip="ip" />
        </n-collapse-item>
      </n-collapse>
    </template>
  </main>
</template>

<script setup lang="ts">
import { NH2, NResult, NCollapse, NCollapseItem } from "naive-ui";
import { useHead } from "@vueuse/head";
import BackToHome from "@/components/misc/BackToHome.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
import IPInfo from "@/components/tools/ip-info/IPInfo.vue";
import { validateIPv4, validateIPv6 } from "@/utils/ip/common/validate";
import { ref, onMounted } from "vue";
import { getDomainIPs } from "@/utils/ip/get-domain-ips";
import IPVersionTag from "@/components/tools/ip-info/IPVersionTag.vue";

const route = useRoute();
const ipdomain = computed(() => route.params.ipdomain as string);
const isIP = computed(
  () => validateIPv4(ipdomain.value) || validateIPv6(ipdomain.value)
);
const ips = ref<string[] | undefined>(undefined);

onMounted(async () => {
  if (isIP.value) {
    ips.value = [ipdomain.value];
  } else {
    try {
      ips.value = await getDomainIPs(ipdomain.value);
    } catch (e) {
      console.error(e);
      ips.value = [];
    }
  }
});

useHead(
  computed(() => ({
    title: `IP Info for ${ipdomain.value} | IP InBrowser.App`,
    meta: [
      {
        name: "description",
        content: `IP Info for ${ipdomain.value}. Fully runs in your browser. No server-side code.`,
      },
    ],
    link: [
      {
        rel: "canonical",
        href: `https://ip.inbrowser.app/tools/ip-info/${ipdomain.value}`,
      },
    ],
  }))
);
</script>
