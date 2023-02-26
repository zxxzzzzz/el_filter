<template>
  <div class="h-[calc(100vh)] flex flex-col">
    <FilterCheck v-model:value="visibleKeyList"></FilterCheck>
    <div class="h-full overflow-auto">
      <Items :visibleKeyList="visibleKeyList" :content="curArticle" @change="handleChange" ref="itemRef"></Items>
    </div>
    <div class="flex justify-end mr-12 mb-2">
      <Button class="mr-2" @click="handleUseful">标记有效(q)</Button>
      <Button class="mr-2" @click="handleUseless">标记无效(w)</Button>
      <Button class="mr-2" @click="handleUnknown">暂不标记(e)</Button>
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
import { ref, computed, h, watch, onMounted } from 'vue';
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

const gotoNextPage = () => {
  articleIndex.value = articleIndex.value + 1;
  articleIndex.value = formatIndex(articleIndex.value, articleList.value.length);
};

const gotoPrePage = () => {
  articleIndex.value = articleIndex.value - 1;
  articleIndex.value = formatIndex(articleIndex.value, articleList.value.length);
};
// 用持久化的数据初始化文章
const initArticle = async (article: { [key: string]: string[] }) => {
  const ti = encodeURIComponent(article?.TI?.join(' ') || '');
  const lastV = await window.electronAPI.getArticle(ti);
  articleList.value = articleList.value.map((a, index) => {
    const v = articleList.value[index];
    if (article.TI[0] === a.TI[0]) {
      return { ...v, ...lastV };
    }
    return v;
  });
};
const setArticleStore = async (article: { [key: string]: string[] }, obj: { [key: string]: any }) => {
  const ti = encodeURIComponent(article?.TI?.join(' ') || '');
  const lastV = await window.electronAPI.getArticle(ti);
  await window.electronAPI.addArticle({ ...lastV, key: [ti], ...obj });
};
onMounted(async () => {
  const tList = [...articleList.value]
  tList.forEach((a) => {
    initArticle(a);
    console.log('set');
    setArticleStore(a, JSON.parse(JSON.stringify(a)))
  });
});
watch(
  () => curArticle.value.TI,
  () => {
    initArticle(curArticle.value);
  },
  { immediate: true },
);

onKeyStroke('q', (e) => {
  handleUseful();
  e.preventDefault();
});
onKeyStroke('w', (e) => {
  handleUseless();
  e.preventDefault();
});
onKeyStroke('e', (e) => {
  handleUnknown();
  e.preventDefault();
});
onKeyStroke('r', (e) => {
  itemRef.value.focus();
  e.preventDefault();
});

onKeyStroke('ArrowLeft', (e) => {
  e.preventDefault();
  gotoPrePage();
});
onKeyStroke('ArrowRight', (e) => {
  gotoNextPage();
  e.preventDefault();
});

const handleImport = () => {
  router.push({ name: 'home' });
};
const handleExport = () => {
  Modal.confirm({
    title: '导出',
    content: h(ExportModal),
    okText: '确认导出',
    cancelText: '取消',
    onOk() {
      const plainText = articleList.value
        .filter((a) => a['useful']?.[0] === 'true')
        .map((a) => {
          const str = Object.keys(a)
            .filter((k) => k.length === 2)
            .map((k) => {
              const v = Array.isArray(a[k]) ? a[k].join('\n   ') : a[k];
              return `${k} ${v}`;
            })
            .join('\n');
          return str;
        })
        .join('\n\n');
      const b = new Blob([plainText], { type: 'text/plain' });
      const url = URL.createObjectURL(b);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'download_filter.txt';
      a.click();
      setTimeout(() => {
        a.remove();
      }, 5000);
    },
  });
};
const handleRemark = () => {
  itemRef.value.focus();
};
const handleChange = async (v) => {
  await setArticleStore(curArticle.value, { remark: v.remark });
  articleList.value[articleIndex.value - 1] = v;
};
const handleUseful = async () => {
  await setArticleStore(curArticle.value, { useful: ['true'] });
  curArticle.value['useful'] = ['true'];
  gotoNextPage();
};
const handleUseless = async () => {
  await setArticleStore(curArticle.value, { useful: ['false'] });
  curArticle.value['useful'] = ['false'];
  gotoNextPage();
};
const handleUnknown = async () => {
  await setArticleStore(curArticle.value, { useful: [''] });
  gotoNextPage();
};
</script>
