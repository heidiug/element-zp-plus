<template>
  <div class="demo-block" ref="demoBlockRef">
    <div class="demo-block__source">
      <slot></slot>
    </div>
    <div class="demo-block__meta">
      <div class="demo-block__description" v-if="description" v-html="description"></div>
      <div class="demo-block__highlight">
        <div class="demo-block__code" v-show="isExpanded" ref="codeRef" v-html="codeHtml"></div>
        <div class="demo-block__control" @click="toggle" v-if="hasCode">
          <i :class="['demo-block__arrow', { 'is-reversed': isExpanded }]"></i>
          <span>{{ isExpanded ? '隐藏代码' : '显示代码' }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'

const props = defineProps<{
  description?: string
}>()

const demoBlockRef = ref<HTMLElement>()
const codeRef = ref<HTMLElement>()
const isExpanded = ref(false)
const hasCode = ref(false)
const codeHtml = ref('')

onMounted(() => {
  nextTick(() => {
    if (!demoBlockRef.value) return
    
    // 查找紧随其后的 .demo-code（在 DemoBlock 外部）
    let nextSibling = demoBlockRef.value.nextElementSibling
    while (nextSibling) {
      if (nextSibling.classList.contains('demo-code')) {
        hasCode.value = true
        codeHtml.value = nextSibling.innerHTML
        nextSibling.remove()
        break
      }
      // 如果遇到其他 demo-block，停止搜索
      if (nextSibling.classList.contains('demo-block')) {
        break
      }
      nextSibling = nextSibling.nextElementSibling
    }
  })
})

const toggle = () => {
  isExpanded.value = !isExpanded.value
}
</script>

<style scoped>
.demo-block {
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  overflow: hidden;
  margin: 20px 0;
}

.demo-block__source {
  padding: 24px;
  background: var(--vp-c-bg);
}

.demo-block__meta {
  border-top: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-alt);
}

.demo-block__description {
  padding: 20px;
  border-bottom: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
  font-size: 14px;
  line-height: 1.5;
}

.demo-block__description :deep(p) {
  margin: 0;
}

.demo-block__highlight {
  position: relative;
}

.demo-block__code {
  padding: 20px;
  overflow-x: auto;
}

.demo-block__control {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  cursor: pointer;
  user-select: none;
  color: var(--vp-c-text-2);
  font-size: 14px;
  transition: color 0.3s;
  border-top: 1px solid var(--vp-c-divider);
}

.demo-block__control:hover {
  color: var(--zp-color-primary);
  background: var(--vp-c-bg-soft);
}

.demo-block__arrow {
  display: inline-block;
  width: 0;
  height: 0;
  margin-right: 8px;
  border: 6px solid transparent;
  border-top-color: currentColor;
  transition: transform 0.3s;
}

.demo-block__arrow.is-reversed {
  transform: rotate(180deg);
}
</style>

