<script setup lang="ts">
import { computed } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import type { IconProps } from './type'
import { omit } from 'lodash-es'

//inheritAttrs: false 阻止props透传到DOM上：Vue 会把父组件传进来的非 Prop 属性（
// 比如 class="my-class", style="...", @click）自动加到组件的根元素上（这里是 <i>）
defineOptions({
  name: 'zpIcon',
  inheritAttrs: false 
})
const props = defineProps<IconProps>()
const filterProps = computed(() => omit(props, ['type', 'color']))
const customStyles = computed(() => {
  return props.color ? { color: props.color } : {}
})
</script>

<template>
  <i 
  class="zp-icon" 
  v-bind="$attrs"
  :class="{
    [`zp-icon--${type}`]: type,
  }"
  :style="customStyles"
  >
    <font-awesome-icon v-bind="filterProps" />
  </i>
</template>

<style>
</style>
