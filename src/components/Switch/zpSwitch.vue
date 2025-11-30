<script setup lang="ts">
import type { SwitchProps, SwitchEmits } from './type'
import { ref, computed, onMounted, watch } from 'vue'
import './style.css'

defineOptions({
    name: 'zpSwitch',
    inheritAttrs: false,
})

const props = withDefaults(defineProps<SwitchProps>(), {
    modelValue: false,
    disabled: false,
    size: 'default',
    activeValue: 'open',
    inactiveValue: 'close',
})
const emits = defineEmits<SwitchEmits>()
// string | number | boolean
const innerValue = ref(props.modelValue)
// boolean
const isChecked = computed(() => innerValue.value === props.activeValue)
const inputRef = ref<HTMLInputElement | null>(null)

const switchValue = () => {
        if (!props.disabled) {
        // (innerValue.value === props.activeValue)
        const newValue = isChecked.value ? props.inactiveValue : props.activeValue
        //通过newvalue可以更新modelValue--->innerValue
        emits('update:modelValue', newValue)
        emits('change', newValue)
    }
}

// 实现两者联动
onMounted(() => {
    inputRef.value!.checked = isChecked.value as boolean
})

watch(isChecked, (newVal) => {
    inputRef.value!.checked = newVal as boolean
})

//外层数据回流
watch(() => props.modelValue, (newVal) => {
    innerValue.value = newVal
})
// 监听 innerValue 的变化，确保同步到外部（当通过 v-model 直接改变 checkbox 时）
watch(innerValue, (newVal) => {
    if (!props.disabled && newVal !== props.modelValue) {
        emits('update:modelValue', newVal)
        emits('change', newVal)
    }
})
</script>

<template>
    <div 
    class="zp-switch"
    :class="{
        [`zp-switch--${size}`]: size,
        'is-checked': isChecked,
        'is-disabled': disabled,
    }"
    @click="switchValue"
    >
    <input 
    ref="inputRef"
    type="checkbox"
    class="zp-switch__input"
    role="switch"
    :name="name"
    :disabled="disabled"
    v-model="innerValue"
    @keydown.enter="switchValue"
    />
    <div class="zp-switch__core">
        <div class="zp-switch__core-inner">
            <span v-if="activeText || inactiveText" class="zp-switch__core-inner-text">
                {{ isChecked ? activeText : inactiveText }}
            </span>
        </div>
        <div class="zp-switch__core-action"></div>
    </div>
    </div>
</template>

<style>
</style>