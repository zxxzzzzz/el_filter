<template>
  <div class="h-[calc(100vh)] flex flex-col">
    <FilterCheck v-model:value="visibleKeyList"></FilterCheck>
    <div class="h-full overflow-auto">
      <Item :visibleKeyList="visibleKeyList" ></Item>
    </div>
  </div>
</template>
<script setup lang="ts">
import Item from './components/item.vue';
import FilterCheck from './components/filterCheck.vue';
import HelloWorld from './components/HelloWorld.vue';
import {ref} from 'vue';

const visibleKeyList = ref<string[]>([])
</script>
