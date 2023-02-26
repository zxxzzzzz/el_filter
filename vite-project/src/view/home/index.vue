<template>
  <div>
    <div class="flex justify-center">
      <TypographyTitle>文章过滤工具</TypographyTitle>
      <div>v1.0.0</div>
    </div>
    <div class="flex justify-start px-24">
      <div color="green">已导入文章</div>
      <Tag>{{ global.articleList.value.length }}</Tag>
    </div>
    <UploadDragger name="file" :multiple="true" :customRequest="handleRequest" :fileList="fileList">
      <p class="ant-upload-drag-icon">
        <inbox-outlined></inbox-outlined>
      </p>
      <p class="ant-upload-text">点击或拖动文件来导入数据</p>
    </UploadDragger>
    <div class="mt-4 flex justify-center">
      <Button class="mr-24" type="primary" @click="handleRead">开始筛选文章</Button>
      <Button @click="handleClear">清空已导入文章</Button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Button, UploadDragger, TypographyTitle, Tag } from 'ant-design-vue';
import * as global from '@/globalData/index';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

defineProps<{}>();
const fileList = ref<{ name: string }[]>([]);
const router = useRouter();

const splitArticle = (c: string) => {
  let t = '';
  return c
    .replace(/\r\n/g, '\n')
    .split('\n')
    .filter((d) => d)
    .reduce((re, cur) => {
      if (cur.startsWith('ER')) {
        t = t + cur + '\n';
        re = [...re, t];
        t = '';
        return re;
      } else {
        t = t + cur + '\n';
        return re;
      }
    }, [] as string[]);
};

const article2Obj = (str: string): { [key: string]: string[] } => {
  let tk = '';
  const ob = str.split('\n').reduce((re, cur) => {
    if (cur.startsWith('   ')) {
      if (tk) {
        re[tk] = [...re[tk], cur.slice(3)];
      }
      return re;
    }
    if (cur.startsWith('[')) {
      const k = cur.slice(1, 5);
      const c = cur.slice(7);
      tk = k;
      return { ...re, [k]: [c] };
    }
    if (cur.startsWith('x[')) {
      const k = cur.slice(2, 6);
      const c = cur.slice(8);
      tk = k;
      return { ...re, [k]: [c], useful: ['false'] };
    }
    if (cur.startsWith('x')) {
      const k = cur.slice(1, 3);
      const c = cur.slice(4);
      tk = k;
      return { ...re, [k]: [c], useful: ['false'] };
    }
    const k = cur.slice(0, 2);
    const c = cur.slice(3);
    tk = k;
    return { ...re, [k]: [c] };
  }, {} as { [key: string]: string[] });
  const filterObj = Object.keys({ ...ob })
    .filter((d) => d)
    .reduce((re, cur) => {
      return { ...re, [cur]: ob[cur] };
    }, {} as { [key: string]: string[] });
  return { ...filterObj, useful: filterObj?.useful || [], remark: [''] };
};

const handleRequest = (fileInfo: any) => {
  const file = fileInfo.file;
  const fileRead = new FileReader();
  fileRead.onloadend = () => {
    const result = fileRead.result as string;
    const articleList = splitArticle(result);
    const tiList: string[] = [];
    const _objList = articleList.map((a) => {
      return article2Obj(a);
    });
    const isHasUsefulFalse = _objList.some(o => o?.useful?.[0] === 'false')
    const __objList = _objList.map(o => {
      if(o?.useful?.[0] !== 'false' && isHasUsefulFalse){
        return {...o, useful:['true']}
      }
      return o
    })
    const objList = __objList
      .reduce((re, cur) => {
        const ti = encodeURIComponent(cur?.TI?.join(' ') || '');
        if (tiList.includes(ti)) {
          return re;
        }
        tiList.push(ti);
        return [...re, cur];
      }, [] as { [key: string]: string[] }[])
      .filter((a) => {
        const ti = encodeURIComponent(a?.TI?.join(' ') || '');
        return global.articleList.value.every((a2) => {
          const ti2 = encodeURIComponent(a2?.TI?.join(' ') || '');
          return ti !== ti2;
        });
      });
    global.articleList.value = [...global.articleList.value, ...objList];
    fileList.value = [...fileList.value, { name: file.name }];
  };
  fileRead.readAsText(file);
};
const handleClear = () => {
  fileList.value = [];
  global.articleList.value = [];
};
const handleRead = () => {
  router.push({ name: 'read' });
};
</script>
