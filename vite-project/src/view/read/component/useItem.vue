<template>
  <div class="text-white w-24 text-right bg-blue-700 flex-shrink-0 mr-1">标志状态</div>
  <div>
    <div class="text-white" :style="{ backgroundColor: c[props.v[0]] }">{{ m[props.v[0]] || '不知道' }}</div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps<{ k: string; v: string[] }>();
const m = {
  true: '有效',
  false: '无效',
};
const c = {
  true: 'green',
  false: 'gray',
};
</script>
