<script setup lang="ts">
import type { InputProps, InputEmits } from './type'
import { ref, watch, computed, nextTick, inject } from 'vue'
import zpIcon from '@/components/Icon/zpIcon.vue'
import { formItemContextKey } from '../Form/type'

defineOptions({
  name: 'zpInput'
})

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  size: 'default',
  disabled: false,
  clearable: false,
  showPassword: false,
  modelValue: '',
  placeholder: '',
  readonly: false,
  autocomplete: undefined,
  autofocus: false,
  form: undefined
})
const emit = defineEmits<InputEmits>()
const innerValue = ref(props.modelValue)
const isFocused = ref(false)
const passwordVisible = ref(false)
const inputRef = ref<HTMLInputElement | HTMLTextAreaElement | null>(null)
const formItemContext = inject(formItemContextKey, undefined)
// 使用防抖来减少错误打印频率，只在用户停止输入一段时间后才打印
let validationErrorTimer: ReturnType<typeof setTimeout> | null = null
let lastErrorMessage: string = ''

const runValodation = (trigger?: string | string[]) => {
  if (formItemContext) {
    formItemContext.validate(trigger).catch((e: any) => {
      // 提取错误消息
      const errorMessage = e?.fields ? 
        (Object.values(e.fields)[0] as any[])?.[0]?.message || '验证失败' : 
        e?.message || '验证失败'
      
      // 如果错误消息与上次相同，不重复打印
      if (errorMessage === lastErrorMessage) {
        return
      }
      
      // 清除之前的定时器
      if (validationErrorTimer) {
        clearTimeout(validationErrorTimer)
      }
      
      // 使用防抖，延迟打印错误（只在 input 触发时防抖，blur 时立即打印）
      if (trigger === 'input') {
        validationErrorTimer = setTimeout(() => {
          console.error('validation error:', e)
          lastErrorMessage = errorMessage
        }, 300) // 300ms 防抖延迟
      } else {
        // blur 时立即打印
        console.error('validation error:', e)
        lastErrorMessage = errorMessage
      }
    }).then(() => {
      // 验证成功时清除错误消息记录
      lastErrorMessage = ''
      if (validationErrorTimer) {
        clearTimeout(validationErrorTimer)
        validationErrorTimer = null
      }
    })
  }
}

const InputType = computed(() => {
  if (props.showPassword) {
    return passwordVisible.value ? 'text' : 'password'
  }
  return props.type
})

const showClear = computed(() => {
  return props.clearable && !props.disabled && !!innerValue.value && isFocused.value
})

const showPasswordArea = computed(() => props.showPassword && !props.disabled && !!innerValue.value)

watch(
  () => props.modelValue,
  (newVal: string) => {
    if (innerValue.value !== newVal) {
      innerValue.value = newVal
    }
  }
)

const handleInput = () => {
  //   innerValue.value = (e.target as HTMLInputElement).value
  emit('update:modelValue', innerValue.value)
  emit('input', innerValue.value)
  runValodation('input')
}

const handleClear = async (e: Event) => {
  e.preventDefault()
  e.stopPropagation()

  innerValue.value = ''
  emit('update:modelValue', '')
  emit('clear')
  // 使用 nextTick 确保 DOM 更新后再聚焦
  await nextTick()
  if (inputRef.value) {
    inputRef.value.focus()
  }
}

const onFocus = () => {
  isFocused.value = true
  emit('focus')
}

const onBlur = () => {
  isFocused.value = false
  emit('blur')
  runValodation('blur')
}

const togglePasswordVisible = (e: Event) => {
  e.preventDefault()
  e.stopPropagation()
  passwordVisible.value = !passwordVisible.value
}

// 暴露实例方法
defineExpose({
  inputRef,
  blur: () => {
    if (inputRef.value) {
      inputRef.value.blur()
    }
  },
  focus: () => {
    if (inputRef.value) {
      inputRef.value.focus()
    }
  }
})
</script>

<template>
  <div
    class="zp-input"
    :class="{
      [`zp-input--${type}`]: type,
      [`zp-input--${size}`]: size,
      'is-disabled': disabled,
      'is prepend': $slots.prepend,
      'is append': $slots.append,
      'is-prefix': $slots.prefix,
      'is-suffix': $slots.suffix,
      'is-focused': isFocused
    }"
  >
    <!-- input -->
    <template v-if="type !== 'textarea'">
      <!-- prenpend slot -->
      <div v-if="$slots.prepend" class="zp-input__pend">
        <slot name="prepend"></slot>
      </div>
      <!-- input wrapper -->
      <div class="zp-input__wrapper">
        <!-- prefix slot -->
        <div v-if="$slots.prefix" class="zp-input__prefix">
          <slot name="prefix"></slot>
        </div>
        <!-- input -->
        <input
          ref="inputRef"
          class="zp-input__inner"
          :disabled="disabled"
          :type="InputType"
          :placeholder="placeholder"
          :readonly="readonly"
          :autocomplete="autocomplete"
          :autofocus="autofocus"
          :form="form"
          v-model="innerValue"
          @input="handleInput"
          @focus="onFocus"
          @blur="onBlur"
        />
        <!-- suffix slot -->
        <div v-if="$slots.suffix || showClear || showPasswordArea" class="zp-input__suffix">
          <slot name="suffix"> </slot>
          <zp-icon
            v-if="showClear"
            icon="circle-xmark"
            @click.stop="handleClear"
            @mousedown.prevent
            style="
              cursor: pointer;
              color: var(--zp-text-color-placeholder);
              pointer-events: auto;
              z-index: 10;
            "
          />
          <zp-icon
            v-if="showPasswordArea"
            :icon="passwordVisible ? 'eye' : 'eye-slash'"
            @click.stop="togglePasswordVisible"
            @mousedown.prevent
            style="
              cursor: pointer;
              color: var(--zp-text-color-placeholder);
              pointer-events: auto;
              z-index: 10;
              margin-left: 4px;
            "
          />
        </div>
        <!-- append slot -->
        <div v-if="$slots.append" class="zp-input__append">
          <slot name="append"></slot>
        </div>
      </div>
    </template>
    <!-- textarea -->
    <template v-else>
      <textarea
        ref="inputRef"
        class="zp-textarea__wrapper"
        :disabled="disabled"
        :placeholder="placeholder"
        :readonly="readonly"
        :autocomplete="autocomplete"
        :autofocus="autofocus"
        :form="form"
        v-model="innerValue"
        @input="handleInput"
        @focus="onFocus"
        @blur="onBlur"
      ></textarea>
    </template>
  </div>
</template>

<style>
.zp-input {
  display: inline-block;
  width: 100%;
  position: relative;
}
.zp-input__wrapper {
  display: flex;
  align-items: center;
  width: 180px;
  height: 32px;
  padding-left: 8px;
  padding-right: 8px;
  border: 1.5px solid var(--zp-border-color);
  border-radius: var(--zp-border-radius-base);
}

.zp-input__inner {
  font-family: var(--zp-font-family);
  font-weight: var(--zp-font-weight-primary);
  line-height: 1.5;
  flex: 1;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 14px;
  color: var(--zp-text-color-primary);
}

/* 清除图标的容器 */
.zp-input__suffix {
  display: flex; /* 让图标和 slot 内容水平排列 */
  align-items: center; /* 垂直居中对齐 */
  justify-content: center;
  height: 100%; /* 继承父元素高度 */
  padding-right: 8px; /* 和左侧的 padding-left 保持一致 */
  color: var(--zp-text-color-placeholder); /* 默认图标颜色 */
  flex-shrink: 0;
  position: relative;
  z-index: 1;
}

.zp-input__password {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-right: 8px;
  color: var(--zp-text-color-placeholder);
}

.zp-input__suffix .zp-icon {
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  pointer-events: auto;
}

.zp-input__suffix .zp-icon:hover {
  color: var(--zp-text-color-primary);
}

.zp-input.is-focused .zp-input__wrapper {
  border-color: var(--zp-color-primary, #409eff); /* Element Plus 默认蓝色 */

}

.zp-textarea__wrapper {
  font-family: var(--zp-font-family);
  font-weight: var(--zp-font-weight-primary);
  line-height: 1.5;
  flex: 1;
  width: 180px;
  height: 64px;
  padding: 8px;
  margin: 20px;
  border: 1.5px solid var(--zp-border-color);
  outline: none;
}
.zp-textarea__wrapper textarea {
  font-family: var(--zp-font-family);
  font-weight: var(--zp-font-weight-primary);
  line-height: 1.5;
  flex: 1;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
}

.zp-input__wrapper.is-focused {
  border-color: var(--zp-color-primary);
}
</style>
