<template>
  <div class="demo-container">
    <div class="demo-block">
      <div class="demo-block-source">
        <slot name="demo"></slot>
      </div>
      <div class="demo-block-meta">
        <div class="demo-block-actions">
          <button 
            class="demo-block-action" 
            @click="copyCode"
            :title="copied ? '已复制' : '复制代码'"
          >
            <svg v-if="!copied" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
              <path fill="currentColor" d="M768 832a128 128 0 0 1-128 128H192A128 128 0 0 1 64 832V384a128 128 0 0 1 128-128v64H192a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64h64z"/>
              <path fill="currentColor" d="M384 128a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64H384zm0-64h448a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H384a128 128 0 0 1-128-128V192a128 128 0 0 1 128-128z"/>
            </svg>
            <svg v-else viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
              <path fill="currentColor" d="M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"/>
            </svg>
          </button>
          <button 
            class="demo-block-action" 
            @click="toggleCode"
            :title="showCode ? '隐藏代码' : '显示代码'"
          >
            <span class="code-icon" :class="{ 'is-expanded': showCode }">&lt;/&gt;</span>
          </button>
        </div>
      </div>
      <transition name="demo-block-fade">
        <div v-show="showCode" class="demo-block-code" ref="codeRef">
          <slot name="code"></slot>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'

const showCode = ref(false)
const copied = ref(false)
const codeRef = ref(null)

const toggleCode = async () => {
  showCode.value = !showCode.value
  // 如果展开代码，等待 DOM 更新后再尝试复制
  if (showCode.value) {
    await nextTick()
  }
}

const copyCode = async () => {
  // 如果代码未展开，先展开
  if (!showCode.value) {
    showCode.value = true
    await nextTick()
  }
  
  if (!codeRef.value) return
  
  // 获取代码块中的文本内容
  const codeElement = codeRef.value.querySelector('pre code') || codeRef.value.querySelector('code')
  if (!codeElement) return
  
  const codeText = codeElement.textContent || codeElement.innerText
  try {
    await navigator.clipboard.writeText(codeText)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('复制失败:', err)
    // 降级方案
    const textarea = document.createElement('textarea')
    textarea.value = codeText
    textarea.style.position = 'fixed'
    textarea.style.opacity = '0'
    document.body.appendChild(textarea)
    textarea.select()
    try {
      document.execCommand('copy')
      copied.value = true
      setTimeout(() => {
        copied.value = false
      }, 2000)
    } catch (e) {
      console.error('复制失败:', e)
    }
    document.body.removeChild(textarea)
  }
}
</script>

<style scoped>
.demo-container {
  margin: 16px 0;
}

.demo-block {
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  overflow: hidden;
  background: var(--vp-c-bg);
}

.demo-block-source {
  padding: 24px;
  background: var(--vp-c-bg);
}

.demo-block-meta {
  border-top: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  padding: 4px 8px;
  display: flex;
  justify-content: flex-end;
  height: 40px;
  align-items: center;
}

.demo-block-actions {
  display: flex;
  gap: 8px;
}

.demo-block-action {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  padding: 0;
  border: none;
  background: transparent;
  color: var(--vp-c-text-2);
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s;
}

.demo-block-action:hover {
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-brand);
}

.code-icon {
  font-size: 14px;
  font-weight: 500;
  font-family: 'Courier New', monospace;
  transition: transform 0.3s;
  display: inline-block;
}

.code-icon.is-expanded {
  transform: rotate(180deg);
}

.demo-block-code {
  border-top: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  overflow: hidden;
}

.demo-block-code :deep(pre) {
  margin: 0;
  padding: 16px;
  background: transparent;
}

.demo-block-code :deep(code) {
  font-size: 14px;
  line-height: 1.6;
}

.demo-block-fade-enter-active,
.demo-block-fade-leave-active {
  transition: all 0.3s;
}

.demo-block-fade-enter-from,
.demo-block-fade-leave-to {
  opacity: 0;
  max-height: 0;
}

.demo-block-fade-enter-to,
.demo-block-fade-leave-from {
  opacity: 1;
  max-height: 2000px;
}
</style>

