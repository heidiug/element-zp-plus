import type { Ref ,InjectionKey } from 'vue'

export type CollapseName = string | number
export interface CollapseItemProps {
    name: CollapseName
    title?: string
    disabled:boolean
}

export interface CollapseContext {
    activeNames: Ref<CollapseName[]>
    handleItemClick: (name: CollapseName) => void
}

// 为 Vue 组件间的数据共享定义一个安全且唯一的钥匙
// 在 provide 和 inject 时使用
export const collapseContextKey:InjectionKey<CollapseContext> = Symbol('collapseContextKey')

export interface CollapseProps {
    accordion?:boolean
    modelValue:CollapseName[]
    borderless?:boolean
    disabled?:boolean
}

export interface CollapseEmits {
    (e:'update:modelValue', values:CollapseName[]):void
    (e:'change',values:CollapseName[]):void
}