<template>
  <n-form-item label="MAC" :rule="rule" :show-label="false">
    <n-input v-model:value="mac" placeholder="00-B0-D0-63-C2-26" />
  </n-form-item>
</template>

<script setup lang="ts">
import { NInput, NFormItem, type FormItemRule } from "naive-ui";
import { ref, watch } from "vue";
import { isValidMacAddress } from "@/utils/mac";

const mac = ref("");
const emit = defineEmits(["update:mac"]);

const rule: FormItemRule = {
  trigger: ["input", "change", "blur"],
  validator() {
    if (!isValidMacAddress(mac.value)) {
      return new Error("Invalid MAC");
    }
  },
};

watch(mac, (value: string) => {
  if (isValidMacAddress(mac.value)) {
    emit("update:mac", value);
  } else {
    emit("update:mac", "");
  }
});
</script>
