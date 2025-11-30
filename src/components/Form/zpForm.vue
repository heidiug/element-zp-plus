<script lang="ts" setup>
import { type FormProps, type FormContext, formContextKey, type FormItemContext } from './type'
import { provide } from 'vue'
import type { ValidateFieldsError } from 'async-validator'
import type { FormValidateFailure, FormInstance } from './type'

defineOptions({
  name: 'zpForm'
})
const props = defineProps<FormProps>()

const fields: FormItemContext[] = []
const addField: FormContext['addField'] = (field: FormItemContext) => {
  fields.push(field)
}
const removeField: FormContext['removeField'] = (field: FormItemContext) => {
  if (!field.prop) return
  const index = fields.findIndex((f) => f.prop === field.prop)
  if (index !== -1) {
    fields.splice(index, 1)
  }
}

const context: FormContext = {
  ...props,
  addField,
  removeField
}

provide(formContextKey, context)

// 重置指定字段的值,场景：用户手动重置表单
const resetFields = (keys: string[] = []) => {
  const filterArr = keys.length > 0 ? fields.filter((field) => keys.includes(field.prop)) : fields
  filterArr.forEach((field) => {
    field.resetField()
  })
}
// 清空指定字段的验证状态,场景：用户手动清空输入框内容
const clearValidate = (keys: string[] = []) => {
  const filterArr = keys.length > 0 ? fields.filter((field) => keys.includes(field.prop)) : fields
  filterArr.forEach((field) => {
    field.clearValidate()
  })
}
const validate = async () => {
  let validateFieldsErros: ValidateFieldsError = {}
  for (const field of fields) {
    try {
      await field.validate('')
    } catch (e: any) {
      // 容错处理：错误对象可能不是标准的 FormValidateFailure
      const error = e as FormValidateFailure
      // 确保 fields 存在并且是对象
      if (error && error.fields && typeof error.fields === 'object') {
        validateFieldsErros = {
          ...validateFieldsErros,
          ...error.fields
        }
      } else if (e?.fields && typeof e.fields === 'object') {
        // 如果错误对象的结构不同，尝试直接使用
        validateFieldsErros = {
          ...validateFieldsErros,
          ...e.fields
        }
      } else if (field.prop) {
        // 如果无法解析错误结构，至少记录字段名
        validateFieldsErros[field.prop] = [
          {
            message: '验证失败',
            field: field.prop
          }
        ]
      }
    }
  }
  if (Object.keys(validateFieldsErros).length === 0) {
    return true
  } else {
    return Promise.reject(validateFieldsErros)
  }
}
defineExpose<FormInstance>({
  validate,
  resetFields,
  clearValidate
})
</script>

<template>
  <form class="zp-form">
    <slot></slot>
  </form>
</template>

<style></style>
