<template>
    <div 
    class="zp-collapse-item"
    :class="{'is-disabled':disabled, 'is-active': isActive}"
    >
    <div class="zp-collapse-item__header" :id="`zp-collapse-${name}`" @click="handleClick">
        <slot name="title">
            {{ title }}
        </slot>
        <zp-icon icon="angle-right" class="header-angle"/>
    </div>
    <!-- 使用transition组件完成动画效果，绑定了js中的钩子函数 -->
    <Transition 
    name="slide"
    v-on="tansitionEvents"
    >
    <!-- 加一个div包裹住content(一开始height有动画效果但是padding-bottom没有动画效果),
    加一个div, div包裹了content和padding-bottom的高度 -->
    <div class="content-wrapper"  v-show="isActive">
        <div class="zp-collapse-item__content" :id="`zp-collapse-content-${name}`">
            <slot name="content">
            </slot>
        </div>
    </div>

    </Transition>
    </div>
</template>

<script lang="ts" setup>
import type { CollapseItemProps } from './type'
import { computed, inject } from 'vue'
import { collapseContextKey } from './type'
import zpIcon from '@/components/Icon/zpIcon.vue'

defineOptions({
    name:'zpCollapseItem'
})

// props：<zp-collapse-item name="1" title="标题1" :disabled="false">
const props = defineProps<CollapseItemProps>()
const collapseContext = inject(collapseContextKey)
const isActive = computed(() => collapseContext?.activeNames.value.includes(props.name))

const handleClick = () => {
    if (props.disabled) return
    collapseContext?.handleItemClick(props.name)
}

const tansitionEvents: Record<string, (el: HTMLElement) => void> = {
    beforeEnter(el) {
        el.style.height = '0px'
    },
    enter(el) {
        el.style.height = `${el.scrollHeight}px`
    },
    afterEnter(el) {
        el.style.height = ''
    },
    beforeLeave(el) {
        el.style.height = `${el.scrollHeight}px`
    },
    leave(el) {
        el.style.height = '0px'
    },
    afterLeave(el) {
        el.style.height = ''
    }
}
</script>