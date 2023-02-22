<template>
  <div class="text-yellow-600 font-bold w-24 text-right bg-gray-200 flex-shrink-0 mr-1">{{ props.k }}</div>
  <div>
    <div v-for="c in props.v">{{ c }}</div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps<{ k: string; v: string[] }>();
</script>
