<script setup lang="ts">
import type { DropdownProps, DropdownEmits, DropdownInstance} from './type'
import { ref, provide } from 'vue'
import type { Ref } from 'vue'
import type { TooltipInstance } from '@/components/Tooltip/type'
import zpTooltip from '@/components/Tooltip/zpTooltip.vue'
import './style.css'

defineOptions({
    name: 'zpDropdown'
})

const props = withDefaults(defineProps<DropdownProps>(), {
    placement: 'top',
    trigger: 'hover',
    manual: false,
    manualOptions: () => [],
    hideAfterClick: true
})

const emits: DropdownEmits = defineEmits({})
const dropdownRef = ref<HTMLDivElement | null>(null)
const tooltipRef = ref() as Ref<TooltipInstance>

// 处理 DropdownItem 的点击事件
const handleItemClick = (key: string | number) => {
    if (props.hideAfterClick) {
        tooltipRef.value?.hide()
    }
}
provide('handleItemClick', handleItemClick)

// 暴露实例方法
defineExpose<DropdownInstance>({
    show: () => tooltipRef.value?.show(),
    hide: () => tooltipRef.value?.hide()
})
</script>

<template>
    <div class="zp-dropdown" ref="dropdownRef">
        <zp-tooltip
            ref="tooltipRef"
            :placement="props.placement"
            :trigger="props.trigger"
            :manual="props.manual"
            :propper-options="props.propperOptions"
            class="zp-dropdown-tooltip"
        >
            <!-- 默认插槽：触发器（按钮、图标等用户点击/悬停的元素） -->
            <slot />
            
            <!-- 具名插槽 content：下拉菜单的内容（弹出的选项列表） -->
            <template #content>
                <slot name="dropdown" />
            </template>
        </zp-tooltip>
    </div>
</template>

<style>
</style>
