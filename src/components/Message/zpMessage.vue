<script setup lang="ts">
import { ref, onMounted, onUnmounted ,watch, computed, nextTick} from 'vue'
import type { MessageProps } from './type'
import zpIcon from '@/components/Icon/zpIcon.vue'
import RenderVnode from '../Common/RenderVnode';
import { getLastBottomOffset, messageInstances } from './method'
import useEventListener from '@/hooks/useEventListener'
import './style.css'
defineOptions({
    name: 'zpMessage'
})
const messageRef = ref<HTMLDivElement>()
const props = withDefaults(defineProps<MessageProps>(), {
    duration: 3000,
    type: 'info',
    offset: 20
})
const visible = ref(false)

// 根据 type 自动选择图标
const iconName = computed(() => {
  const iconMap: Record<string, string> = {
    success: 'check-circle',
    warning: 'exclamation-triangle',
    error: 'circle-xmark',
    info: 'circle-info',
    primary: 'circle-info'
  }
  return props.type ? iconMap[props.type] || 'circle-info' : 'circle-info'
})

// 计算偏移高度
// 这个div的高毒
const height = ref(0)
// 上一个实例的最下面的坐标数字（第一个是0）
// 在 computed 中先访问 messageInstances，确保 Vue 能够追踪到依赖
// 然后再调用 getLastBottomOffset，这样 Vue 就能追踪到 messageInstances 的变化
const lastBoottomOffset = computed(() => {
    // 访问 messageInstances 以确保响应式追踪
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    messageInstances.length
    return getLastBottomOffset(props.id)
})
// 这个元素应该使用的top值
const topOffset = computed(() => {
    return lastBoottomOffset.value + props.offset
})
// 这个元素为下一个元素预留的 offset,也就是这个元素底部bottom的值
// 通过defineExpose暴露出去
const bottomOffset = computed(() => {
    return height.value + topOffset.value
})
const cssStyle = computed(() => ({
    top: `${topOffset.value}px`,
    zIndex: props.zIndex
}))


// const prevInstance = getLastMessageInstance()
// if (prevInstance) {
//    console.log('prevInstance position:', prevInstance.vnode.el?.getBoundingClientRect())
// }
let timer: any
onMounted(async() => {
    visible.value = true
    satrtTimer()
    await nextTick()
    height.value = messageRef.value?.getBoundingClientRect().height ?? 0
})
function keydown(e:Event) {
    const event = e as KeyboardEvent
    if (event.code === 'Escape') {
        handleClose()
    }
}
useEventListener(document, 'keydown', keydown)
onUnmounted(() => {
    clearTimer()
})

watch(visible,(newVal) => {
    if (!newVal) {
        props.onDestroy()
    }
})

const satrtTimer = () => {
    // 只有当 duration 为 0 时才不启动定时器（表示不自动关闭）
    // onClose 只是用于手动关闭的，不应该影响自动关闭功能
    if (props.duration === 0) return
    clearTimer() // 先清除之前的定时器，避免重复设置
    timer = setTimeout(() => {
        visible.value = false
    }, props.duration)
}
const clearTimer = () => {
    if (timer) {
        clearTimeout(timer)
        timer = null
    }
}

const handleClose = () => {
    // 如果传入了 onClose 方法（即 instance.destroy），则调用它
    // 否则直接设置 visible.value = false
    if (props.onClose) {
        props.onClose()
    } else {
        visible.value = false
    }
    if (timer) {
        clearTimer()
    }
}

defineExpose({
    //这里如果暴露的是bottomOffset.value的话就是静态的
    // 不会随height和topOffset的变化而变化
    bottomOffset,
    visible
})

</script>

<template>
    <Transition name="message-fade" appear>
        <div 
        v-if="visible"
        class="zp-message"
        :class="{
            [`zp-message--${type}`]: type,
            'is-close': showClose,
            'is-plain': plain,
        }"
        role="alert"
        ref="messageRef"
        :style="cssStyle"
        @mouseenter="clearTimer"
        @mouseleave="satrtTimer"
        >
            <!-- 图标 -->
            <zp-icon 
                :icon="iconName" 
                class="zp-message__icon"
            />
            <!-- 内容区域 -->
            <div class="zp-message__content">
                <slot>
                    <render-vnode :v-node="message" v-if="message" />
                </slot>
            </div>
            <!-- 关闭按钮 -->
            <div class="zp-message__close" v-if="showClose">
                <zp-icon icon="xmark" @click.stop="handleClose"/>
            </div>
        </div>
    </Transition>
</template>

<style>
/* .zp-message {
    width: max-content;
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    border: 1px solid #dcdfe6;
    padding: 10px 16px;
    border-radius: 4px;
    background-color: #fff;
} */
</style>