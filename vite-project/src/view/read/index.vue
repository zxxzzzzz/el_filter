<template>
  <div class="h-[calc(100vh)] flex flex-col">
    <FilterCheck v-model:value="visibleKeyList"></FilterCheck>
    <div class="h-full overflow-auto">
      <Items :visibleKeyList="visibleKeyList" :content="curArticle" @change="handleChange" ref="itemRef"></Items>
    </div>
    <div class="flex justify-end mr-12 mb-2">
      <Button class="mr-2">标记有效(q)</Button>
      <Button class="mr-2">标记无效(w)</Button>
      <Button class="mr-2">暂不标记(e)</Button>
      <Button class="mr-2" @click="handleRemark">备注(r)</Button>
      <Button class="mr-2" @click="handleImport">导入数据</Button>
      <Button @click="handleExport" type="primary">导出数据</Button>
    </div>
    <div class="mb-2 flex justify-center mr-12">
      <div class="flex">
        <div class="text-center">页码</div>
        <div class="w-24">
          <Input v-model:value="articleIndex" size="small"></Input>
        </div>
        <div>/ {{ articleList.length }}</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Items from './component/items.vue';
import FilterCheck from './component/filterCheck.vue';
import { Button, Input, Modal } from 'ant-design-vue';
import { ref, computed, h } from 'vue';
import { articleList, articleIndex } from '@/globalData/index';
import { onKeyStroke } from '@vueuse/core';
import { useRouter } from 'vue-router';
import ExportModal from './component/exportModal.vue';

const router = useRouter();
const visibleKeyList = ref<string[]>([]);
const curArticle = computed(() => {
  return articleList.value[articleIndex.value - 1];
});
const itemRef = ref();

const formatIndex = (n: number, max: number) => {
  if (n <= 0) {
    return n + max;
  }
  if (n > max) {
    return n - max;
  }
  return n;
};

onKeyStroke('q', (e) => {
  curArticle.value['useful'] = ['true'];
  articleIndex.value = articleIndex.value + 1;
  articleIndex.value = formatIndex(articleIndex.value, articleList.value.length);
  e.preventDefault();
});
onKeyStroke('w', (e) => {
  curArticle.value['useful'] = ['false'];
  articleIndex.value = articleIndex.value + 1;
  articleIndex.value = formatIndex(articleIndex.value, articleList.value.length);
  e.preventDefault();
});
onKeyStroke('e', (e) => {
  articleIndex.value = articleIndex.value + 1;
  articleIndex.value = formatIndex(articleIndex.value, articleList.value.length);
  e.preventDefault();
});
onKeyStroke('r', (e) => {
  itemRef.value.focus();
  e.preventDefault();
});

onKeyStroke('ArrowLeft', (e) => {
  e.preventDefault();
  console.log(articleList.value);
  articleIndex.value = articleIndex.value - 1;
  articleIndex.value = formatIndex(articleIndex.value, articleList.value.length);
});
onKeyStroke('ArrowRight', (e) => {
  articleIndex.value = articleIndex.value + 1;
  articleIndex.value = formatIndex(articleIndex.value, articleList.value.length);
  e.preventDefault();
});

const handleImport = () => {
  router.push({ name: 'home' });
};
const handleExport = () => {
  Modal.confirm({
    title:'导出',
    content:h(ExportModal)
  })
};
const handleRemark = () => {
  itemRef.value.focus();
};
const handleChange = (v) => {
  articleList.value[articleIndex.value - 1] = v;
};
</script>
