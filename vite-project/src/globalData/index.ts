import { ref } from 'vue';

export const articleList = ref<{ [key: string]: string[] }[]>([]);
export const articleIndex = ref(1);