<template>
  <div>
    <div v-for="text in textList" :key="text.k" class="flex px-12 justify-start w-full mb-4">
      <RemarkItem v-if="text.k === 'remark'" :k="text.k" :v="text.v" @change="handleChange" ref="remarkRef"></RemarkItem>
      <UseItem v-else-if="text.k === 'useful'" :k="text.k" :v="text.v"></UseItem>
      <InfoItem v-else :k="text.k" :v="text.v"></InfoItem>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, withDefaults, ref } from 'vue';
import RemarkItem from './remarkItem.vue';
import UseItem from './useItem.vue';
import InfoItem from './infoItem.vue';

const props = withDefaults(defineProps<{ visibleKeyList: string[]; content: { [key: string]: string[] } }>(), {
  visibleKeyList: () => [],
  content: () => ({}),
});
const remarkRef = ref();
const emits = defineEmits(['change']);

const textList = computed(() => {
  const ob = props.content;
  return Object.keys(ob)
    .filter((k) => props.visibleKeyList.includes(k))
    .map((k) => {
      const v = ob[k];
      return { k, v };
    });
});
const handleChange = (v) => {
  emits('change', { ...props.content, remark: v });
};

defineExpose({
  focus: () => {
    console.log(remarkRef.value, 'remarkRef.value');
    if (remarkRef.value) {
      remarkRef.value[0].focus();
    }
  },
});
</script>
