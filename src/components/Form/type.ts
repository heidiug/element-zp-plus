import type { InjectionKey } from "vue"
import type { RuleItem, ValidateError, ValidateFieldsError} from "async-validator"

export interface FormItemProps {
    label: string
    // prop用来在 model 中定位字段值
    // 在 rules 中定位验证规则
    prop?: string
}

export type FormRules = Record<string, RuleItem[]>

export interface FormProps {
    model: Record<string, any>
    rules: FormRules
}

// 定义一个上下文对象，用于在组件之间共享数据
// addField和removeField用于管理表单项,帮助form组件对整体数据进行校验
export interface FormContext extends FormProps {
    addField: (field: FormItemContext) => void
    removeField: (field: FormItemContext) => void
}

export interface FormItemContext {
    prop: string
    validate: (trigger?: string | string[]) => Promise<any>
    clearValidate: () => void
    resetField: () => void
}

export interface FormItemRules extends RuleItem {
    trigger?: string | string[]
}

export interface FormValidateFailure {
    errors: ValidateFieldsError[] | null
    fields:ValidateFieldsError
}

export interface FormInstance {
    validate: () => Promise<any>
    resetFields: (keys?: string[]) => void
    clearValidate: (keys?: string[]) => void
}

export interface FormItemInstance {
    validateStatus: ValidateStatusProps
    validate: (trigger?: string | string[]) => Promise<any>
    clearValidate: () => void
    resetField: () => void
}

export interface ValidateStatusProps {
    state: 'init' | 'success' | 'error'
    errorMessage: string
    loading: boolean
}

export const formContextKey:InjectionKey<FormContext> = Symbol('formContextKey')
export const formItemContextKey:InjectionKey<FormItemContext> = Symbol('formItemContextKey')
