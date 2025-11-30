<script setup lang="ts">
import { ref, watch, nextTick, reactive, onUnmounted, computed } from 'vue'
import type { TooltipProps, TooltipEmits, TooltipInstance } from './type'
import { createPopper } from '@popperjs/core'
import type { Instance } from '@popperjs/core'
import { useClickOutside } from '@/hooks/useClickOutside'
import './style.css'

defineOptions({
  name: 'zpTooltip'
})
const props = withDefaults(defineProps<TooltipProps>(), {
  placement: 'top',
  trigger: 'hover'
})
const emits = defineEmits<TooltipEmits>()
const popperOptions = computed(() => {
  return {
    placement: props.placement,
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 10]
        }
      }
    ],
    ...props.propperOptions
  }
})

const show = ref(false)
const referenceRef = ref<HTMLElement | null>(null)
const tooltipRef = ref<HTMLElement | null>(null)
const propperContainerNode = ref<HTMLElement | null>(null)
let propperInstance: Instance | null = null
let closeTimerId: ReturnType<typeof setTimeout> | null = null

useClickOutside(propperContainerNode, () => {
  if (show.value && props.trigger === 'click' && !props.manual) {
    close()
  }
  if (show.value) {
    emits('click-outside', true)
  }
})

//动态绑定事件
const open = () => {
  clearCloseTimer()
  show.value = true
  emits('visivle-change', true)
}
const close = () => {
  show.value = false
  emits('visivle-change', false)
}

function toggleTooltip() {
  show.value = !show.value
  emits('visivle-change', show.value)
}

const clearCloseTimer = () => {
  if (closeTimerId) {
    clearTimeout(closeTimerId)
    closeTimerId = null
  }
}

// 定义 tooltipStatus，用于跟踪鼠标状态
const tooltipStatus = reactive({
  isEnter: false,
  referenceEnter: false
})

// 延迟关闭函数，用于在鼠标离开时延迟关闭 tooltip
const delayedClose = (callback: () => void) => {
  return () => {
    clearCloseTimer()
    closeTimerId = setTimeout(() => {
      // 延迟关闭时，检查鼠标是否还在 Tooltip 或 reference 上
      if (!tooltipStatus.isEnter && !tooltipStatus.referenceEnter) {
        callback()
      }
      closeTimerId = null
    }, 1000)
  }
}

let events: Record<string, any> = reactive({})
let outerEvents: Record<string, any> = reactive({})


const handleReferenceEnter = () => {
  clearCloseTimer()
  tooltipStatus.referenceEnter = true
  open()
}

const handleReferenceLeave = () => {
  tooltipStatus.referenceEnter = false
  // 如果鼠标不在 Tooltip 上，延迟关闭
  if (!tooltipStatus.isEnter) {
    delayedClose(close)()
  }
}

const handleTooltipEnter = () => {
  clearCloseTimer()
  tooltipStatus.isEnter = true
}

const handleTooltipLeave = () => {
  tooltipStatus.isEnter = false
  // 如果鼠标不在 reference 上，延迟关闭
  if (!tooltipStatus.referenceEnter) {
    delayedClose(close)()
  }
}

const attachEvents = () => {
  if (props.trigger === 'hover') {
    events['mouseenter'] = handleReferenceEnter
    events['mouseleave'] = handleReferenceLeave
  } else if (props.trigger === 'click') {
    events['click'] = toggleTooltip
  }
}
if (!props.manual) {
  attachEvents()
}
watch(
  () => props.manual,
  (isManual) => {
    if (isManual) {
      events = {}
      outerEvents = {}
    } else {
      attachEvents()
    }
  }
)

// 创建 Popper 实例
const createPopperInstance = () => {
  if (referenceRef.value && tooltipRef.value && !propperInstance) {
    propperInstance = createPopper(referenceRef.value, tooltipRef.value, popperOptions.value)
    nextTick(() => {
      propperInstance?.update()
    })
  }
}

// 销毁 Popper 实例
const destroyPopperInstance = () => {
  if (propperInstance) {
    propperInstance.destroy()
    propperInstance = null
  }
}

// Transition 钩子函数
const onAfterEnter = () => {
  // 进入动画完成后，确保 Popper 位置正确
  if (propperInstance) {
    propperInstance.update()
  }
}

const onAfterLeave = () => {
  // 离开动画完成后，检查鼠标状态
  // 如果鼠标不在 Tooltip 上，才销毁 Popper 实例
  if (!tooltipStatus.isEnter && !tooltipStatus.referenceEnter) {
    destroyPopperInstance()
  }
}

watch(show, (newVal) => {
  if (newVal) {
    // 当 show 变为 true 时，在 nextTick 中创建 Popper
    // 这样确保 tooltip 元素已经在 DOM 中
    nextTick(() => {
      createPopperInstance()
    })
  } else {
    // 当 show 变为 false 时，重置状态
    tooltipStatus.isEnter = false
    tooltipStatus.referenceEnter = false
    clearCloseTimer()
  }
  // 注意：不在 else 分支中销毁，而是在 afterLeave 钩子中销毁
})

watch(
  () => props.trigger,
  (newTrigger, oldTrigger) => {
    if (newTrigger !== oldTrigger) {
      events = {}
      attachEvents()
    }
  }
)

onUnmounted(() => {
  clearCloseTimer()
  destroyPopperInstance()
  tooltipStatus.isEnter = false
  tooltipStatus.referenceEnter = false
})

defineExpose<TooltipInstance>({
  show: open,
  hide: close
})
</script>

<template>
  <div class="zp-tooltip-container" ref="propperContainerNode" v-on="outerEvents">
    <div class="zp-tooltip-reference" v-on="events" ref="referenceRef">
      <slot />
    </div>
    <Transition name="fade" @after-enter="onAfterEnter" @after-leave="onAfterLeave">
      <div
        v-show="show"
        class="zp-tooltip"
        ref="tooltipRef"
        @mouseenter="handleTooltipEnter"
        @mouseleave="handleTooltipLeave"
      >
        <slot name="content">{{ props.content }}</slot>
      </div>
    </Transition>
  </div>
</template>

<style></style>
