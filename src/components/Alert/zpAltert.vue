<script lang="ts" setup>
import type { AlertProps } from './type'
import { computed, ref } from 'vue'
import zpIcon from '@/components/Icon/zpIcon.vue'

defineOptions({
  name: 'zpAlert'
})

const props = withDefaults(defineProps<AlertProps>(), {
  closable: true,
  showIcon: true,
  effect: 'light'
})

const visible = ref(true)

// 根据 type 自动选择图标
const iconName = computed(() => {
  if (props.icon) return props.icon
  const iconMap: Record<string, string> = {
    success: 'check-circle',
    warning: 'exclamation-triangle',
    danger: 'circle-xmark',
    info: 'circle-info',
    primary: 'circle-info'
  }
  return props.type ? iconMap[props.type] || 'circle-info' : ''
})

const handleClose = () => {
  visible.value = false
  props.close?.(false)
}
</script>

<template>
  <Transition name="fade">
    <div 
      v-show="visible"
      class="zp-alert"
      :class="{
        [`zp-alert--${props.type}`]: props.type,
        'is-dark': props.effect === 'dark'
      }"
    >
      <!-- 图标 -->
      <slot name="icon">
        <zp-icon 
          v-if="props.showIcon && iconName" 
          :icon="iconName" 
          class="zp-alert__icon"
        />
      </slot>

      <!-- 内容区域 -->
      <div class="zp-alert__content">
        <!-- 标题 -->
        <slot name="title">
          <div v-if="props.title" class="zp-alert__title">{{ props.title }}</div>
        </slot>
        
        <!-- 描述 -->
        <slot>
          <div v-if="props.description && !$slots.default" class="zp-alert__description">
            {{ props.description }}
          </div>
        </slot>
      </div>

      <!-- 关闭按钮 -->
      <div 
        v-if="props.closable" 
        class="zp-alert__closebtn"
        @click="handleClose"
      >
        <zp-icon icon="close" />
      </div>
    </div>
  </Transition>
</template>

<style></style>