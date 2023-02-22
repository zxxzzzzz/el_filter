<template>
  <div class="text-white w-24 text-right bg-blue-700 flex-shrink-0 mr-1">备注</div>
  <div class="w-full">
    <Textarea class="w-full" v-model:value="text" @change="handleChange" :rows="2" ref="inputRef" @keydown="handleKeydown"></Textarea>
  </div>
</template>
<script lang="ts" setup>
import { Textarea } from 'ant-design-vue';
import { ref, watch } from 'vue';
const props = defineProps<{ k: string; v: string[] }>();
const emits = defineEmits(['change']);
const text = ref('');
const inputRef = ref();
watch(
  () => props.v,
  () => {
    text.value = props.v[0];
  }
);

const handleChange = () => {
  emits('change', [text.value]);
};
const handleKeydown = (e) => {
  e.stopPropagation();
  if (e.key === 'Escape') {
    inputRef.value.blur();
  }
};

defineExpose({
  focus: () => {
    if (inputRef.value) {
      inputRef.value.focus();
    }
  },
});
</script>
