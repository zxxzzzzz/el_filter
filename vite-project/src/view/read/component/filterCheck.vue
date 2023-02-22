<template>
  <div class="flex flex-wrap border border-solid p-2">
    <div v-for="t, index in list" class="flex p-1 bg-gray-300 mx-1" @click="handleClick(index)">
      <div class="w-16" v-if="t === 'remark'">备注</div>
      <div class="w-16" v-else-if="t === 'useful'">标志状态</div>
      <div class="w-16" v-else>{{ t }}</div>
      <div > {{ selectedIndexList[index] ? '✅' : '❌'}} </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {ref, onMounted} from 'vue';
const selectedIndexList = ref<boolean[]>([])
const  emits = defineEmits(['update:value'])
const handleClick = (index:number) => {
  const t = selectedIndexList.value
  t[index] = !t[index]
  selectedIndexList.value = t
  emits('update:value', list.filter((_t,index) => selectedIndexList.value[index]))
}

onMounted(() => {
  list.forEach((t,index) => {
    if(t.includes('TI')){
      selectedIndexList.value[index] = true
    }
    if(t.includes('AB')){
      selectedIndexList.value[index] = true
    }
    if(t.includes('remark')){
      selectedIndexList.value[index] = true
    }
    if(t.includes('useful')){
      selectedIndexList.value[index] = true
    }
  })
  emits('update:value', list.filter((_t,index) => selectedIndexList.value[index]))
})

const list = [
  'FN',
  'VR',
  'PT',
  'AU',
  'AF',
  'TI',
  'TI翻译',
  'SO',
  'LA',
  'DT',
  'DE',
  'ID',
  'AB',
  'AB翻译',
  'C1',
  'C3',
  'RP',
  'EM',
  'RI',
  'OI',
  'CR',
  'NR',
  'TC',
  'Z9',
  'U1',
  'U2',
  'PU',
  'PI',
  'PA',
  'SN',
  'EI',
  'J9',
  'JI',
  'PD',
  'PY',
  'VL',
  'IS',
  'BP',
  'EP',
  'DI',
  'EA',
  'PG',
  'WC',
  'WE',
  'SC',
  'GA',
  'UT',
  'DA',
  'ER',
  'useful',
  'remark'
].sort();
</script>
