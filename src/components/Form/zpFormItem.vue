<script lang="ts" setup>
import type { FormItemProps, FormItemContext, FormItemInstance, ValidateStatusProps } from './type'
import { formContextKey, formItemContextKey } from './type'
import { inject, computed, reactive, provide, onMounted, onUnmounted } from 'vue'
import { isNil } from 'lodash-es'
import Schema from 'async-validator'
import type { FormValidateFailure, FormRules, FormItemRules } from './type'

defineOptions({
  name: 'zpFormItem'
})
// Vue 的 props 是响应式的
const props = defineProps<FormItemProps>()
// Vue 的 provide/inject 会保持响应式连接
// 从父组件接受model和rules
const formContext = inject(formContextKey, undefined)
const validateState: ValidateStatusProps = reactive({
  state: 'init',
  errorMessage: '',
  loading: false
})
let initialValue:any = null
// innerValue就是通过用户传递的prop在form的model中对应的值
const innerValue = computed(() => {
  const model = formContext?.model
  if (props.prop && model && !isNil(model[props.prop])) {
    return model[props.prop]
  }
  return null
})
const itemRules = computed(() => {
  const rules = formContext?.rules
  if (props.prop && rules && rules[props.prop]) {
    return rules[props.prop]
  }
  return null
})
const isRequired = computed(() => {
  return itemRules.value?.some(rule => rule.required)
})
// 灵活获取触发验证的规则
const getTriggeredRules = (trigger?: string | string[]) => {
  const rules = itemRules.value as FormItemRules[]
  if (rules) {
    return rules.filter(rule => {
      if (!rule.trigger || !trigger) return true
      return rule.trigger && rule.trigger === trigger
    })
  } else {
    return []
  }
}

const validate = async (trigger?: string | string[]) => {
  const modelName = props.prop
  const triggeredRules = getTriggeredRules(trigger)
  if (triggeredRules.length === 0) return true
  if (modelName) {
    const validator = new Schema({
      [modelName]: triggeredRules as unknown as FormRules
    })
    validateState.loading = true
    return await validator
      .validate({ [modelName]: innerValue.value })
      .then(() => {
        validateState.state = 'success'
      })
      .catch((error: any) => {
        // 容错处理：async-validator 的错误对象结构可能是多种形式
        // 结构1: { errors: ValidateError[], fields: ValidateFieldsError }
        // 结构2: 直接是 async-validator 的 ValidationError
        const errors = error?.errors || (error?.fields ? Object.values(error.fields).flat() : [])
        const fields = error?.fields || {}
        
        // 确保错误信息能正确显示
        let errorMessage = ''
        if (Array.isArray(errors) && errors.length > 0) {
          // 从错误数组中提取第一条错误消息
          const firstError = errors[0]
          errorMessage = firstError?.message || String(firstError) || '验证失败'
        } else if (error?.message) {
          // 如果错误对象本身有 message 属性
          errorMessage = error.message
        } else if (fields && Object.keys(fields).length > 0) {
          // 从 fields 中提取第一条错误
          const firstFieldErrors = Object.values(fields)[0] as any[]
          if (Array.isArray(firstFieldErrors) && firstFieldErrors.length > 0) {
            errorMessage = firstFieldErrors[0]?.message || '验证失败'
          }
        } else {
          errorMessage = '验证失败'
        }
        
        validateState.state = 'error'
        validateState.errorMessage = errorMessage
        
        // 标准化错误对象结构，方便上层处理
        const normalizedError: FormValidateFailure = {
          errors: Array.isArray(errors) ? errors : null,
          fields: fields || {}
        }
        return Promise.reject(normalizedError)
      })
      .finally(() => {
        validateState.loading = false
      })
  }
}

const clearValidate = () => {
  validateState.state = 'init'
  validateState.errorMessage = ''
  validateState.loading = false
}

const resetField = () => {
  clearValidate()
  const model = formContext?.model
  if (props.prop && model) {
    model[props.prop] = initialValue
  }
}
const context: FormItemContext = {
  prop: props.prop as string,
  validate,
  clearValidate,
  resetField
}
// 从formItem组件向组件中注入validate方法
provide(formItemContextKey, context)
onMounted(() => {
  if (props.prop) {
    formContext?.addField(context)
    initialValue = innerValue.value
  }
})
onUnmounted(() => {
  if (props.prop) {
    formContext?.removeField(context)
  }
})

// 向用户提供FormItem实例，用于外部调用
defineExpose<FormItemInstance>({
  validateStatus: validateState,
  validate,
  clearValidate,
  resetField
})
</script>

<template>
  <div
    class="zp-form-item"
    :class="{
      'is-success': validateState.state === 'success',
      'is-error': validateState.state === 'error',
      'is-loading': validateState.loading,
      'is-required': isRequired
    }"
  >
    <label class="zp-form-item__label">
      <!-- 通过作用域插槽实现更复杂的label结构定义 -->
      <slot name="label" :label="props.label">
        {{ props.label }}
      </slot>
    </label>
    <div class="zp-form-item__content">
      <!-- 可以给slot传递一个validate方法，用于在组件中验证数据 -->
       <!-- 实现用户自定义验证 -->
      <slot :validate="validate"></slot>
      <div class="zp-form-item__message" v-if="validateState.state === 'error'">
        {{ validateState.errorMessage }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.zp-form-item {
    display: flex;
    margin-bottom: 22px;
    margin-left: 0px;
    align-items: flex-start;
}

.zp-form-item__label {
    width: 150px;
    height: 32px;
    line-height: 32px;
    padding-right: 12px;
    box-sizing: border-box;
    display: inline-flex;
    justify-content: flex-end;
    font-size: 14px;
    color: var(--zp-text-color-primary);
    text-align: right;
}

.zp-form-item__content {
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    line-height: 32px;
    font-size: 14px;
    min-width: 0;
    position: relative;
}

.zp-form-item__message {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    padding-top: 4px;
    color: var(--zp-color-danger);
    font-size: 12px;
    line-height: 1.5;
    z-index: 1;
}

.zp-form-item.is-success {
    :deep(.zp-input__wrapper),
    :deep(.zp-input.is-focused .zp-input__wrapper),
    :deep(.zp-input__wrapper.is-focused) {
        border-color: var(--zp-color-success) !important;
    }
}

.zp-form-item.is-error {
    :deep(.zp-input__wrapper),
    :deep(.zp-input.is-focused .zp-input__wrapper),
    :deep(.zp-input__wrapper.is-focused) {
        border-color: var(--zp-color-danger) !important;
    }
}

.zp-form-item.is-loading {
    :deep(.zp-input__wrapper),
    :deep(.zp-input.is-focused .zp-input__wrapper),
    :deep(.zp-input__wrapper.is-focused) {
        border-color: var(--zp-color-primary) !important;
    }
}

.zp-form-item.is-required {
    :deep(.zp-form-item__label::before) {
        content: '*';
        color: var(--zp-color-danger);
        margin-right: 4px;
    }
}
</style>
