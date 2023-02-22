<template>
  <div>
    <div class="flex">
      <div>一共筛选了</div>
      <div>{{usefulCount + uselessCount}}篇</div>
    </div>
    <div class="flex">
      <div>标记有效的</div>
      <div>{{usefulCount}}篇</div>
    </div>
    <div class="flex">
      <div>标记无效的</div>
      <div>{{uselessCount}}篇</div>
    </div>
    <div class="flex">
      <div>未标记的</div>
      <div>{{unknownCount}}篇</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {articleList} from '@/globalData/index';
import {computed} from 'vue';
defineProps<{  }>();
const usefulCount = computed(() => {
  return articleList.value.filter(a => a['useful']?.[0] === 'true').length
})
const uselessCount = computed(() => {
  return articleList.value.filter(a => a['useful']?.[0] === 'false').length
})
const unknownCount = computed(() => {
  return articleList.value.filter(a => !a['useful']?.[0]).length
})
</script>