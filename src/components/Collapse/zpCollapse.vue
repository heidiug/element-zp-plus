<template>
  <div
    class="zp-collapse"
    :class="{
      'is-borderless': borderless
    }"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import type { CollapseName, CollapseProps, CollapseEmits } from './type'
import { collapseContextKey } from './type'
import { ref, provide, watch } from 'vue'
import './style.css'
defineOptions({
  name: 'zpCollapse'
})

// props: modelValue, accordion
const props = defineProps<CollapseProps>()
const emits = defineEmits<CollapseEmits>()

const activeNames = ref<CollapseName[]>(props.modelValue || [''])
watch(props.modelValue, (newVal: CollapseName[]) => {
  activeNames.value = newVal
})
if (props.accordion && activeNames.value.length > 1) {
  // Accordion mode should only have one active item
}

const handleItemClick = (name: CollapseName) => {
  if (props.accordion) {
    activeNames.value = [activeNames.value[0] === name ? '' : name]
  } else {
    if (activeNames.value.includes(name)) {
      activeNames.value = activeNames.value.filter((item) => item !== name)
    } else {
      activeNames.value.push(name)
    }
  }
  emits('update:modelValue', activeNames.value)
  emits('change', activeNames.value)
}

provide(collapseContextKey, {
  activeNames,
  handleItemClick
})
</script>
