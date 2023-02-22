<template>
  <div>
    <div class="flex justify-center">
      <TypographyTitle>文章过滤工具</TypographyTitle>
      <div>v0.0.1</div>
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

const article2Obj = (str: string) => {
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
  return { ...filterObj, remark: [''] };
};

const handleRequest = (fileInfo: any) => {
  const file = fileInfo.file;
  console.log(fileInfo);
  const fileRead = new FileReader();
  fileRead.onloadend = () => {
    const result = fileRead.result as string;
    const articleList = splitArticle(result);
    const objList = articleList.map((a) => {
      return article2Obj(a);
    });
    global.articleList.value = [...global.articleList.value, ...objList];
    console.log(global.articleList.value, 'global.articleList.value');
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
