<script setup lang="ts">
import type { DropdownItemProps, DropdownItemEmits, DropdownItemInstance } from './type'
import { ref ,inject } from 'vue'

defineOptions({
    name: 'zpDropdownItem'
})

const props = defineProps<DropdownItemProps>()
const emits = defineEmits<DropdownItemEmits>()
const dropdownItemRef = ref<HTMLDivElement | null>(null)

const handleItemClick = inject<(key: string | number) => void>('handleItemClick')
const handleClick = () => {
    if (props.disabled) {
        return
    }
    if (handleItemClick) {
        handleItemClick(props.itemKey)
    }
}
</script>

<template>
    <div 
    class="zp-dropdown-item" 
    ref="dropdownItemRef"
    :item-key="props.itemKey"
    :class="{
        'is-disabled': props.disabled,
        'is-divided': props.divided
    }"
    @click="handleClick"
    >
        <slot />
    </div>
</template>

<style>
</style>