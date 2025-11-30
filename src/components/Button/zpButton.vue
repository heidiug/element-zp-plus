<script lang="ts" setup>
// 组件功能：暴露按钮元素的引用，用于外部操作。
// 按钮原生属性 + 自定义样式和行为
import type { ButtonProps } from './type'
import zpIcon from '@/components/Icon/zpIcon.vue'
import { ref } from 'vue'
import './style.css'

defineOptions({ name: 'zpButton' })
withDefaults(defineProps<ButtonProps>(), {
  disabled: false,
  nativeType: 'button'
})

const _ref = ref<HTMLButtonElement | null>(null)
defineExpose({
  buttonRef: _ref
})
</script>

<template>
  <button
    class="zp-button"
    :class="{
      [`zp-button--${type}`]: type,
      [`zp-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-text': text,
      'is-loading': loading,
    }"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    ref="_ref"
  >
  <zp-icon v-if="icon" :icon="icon" />
  <zp-icon v-if="loading" icon="spinner" spin />
    <span><slot></slot></span>
  </button>
</template>

<style></style>
