import type { VNode } from "vue"

export interface SelectOption {
    label: string
    value: string | number
    disabled?: boolean
}

export type FilterFunc = (value: string) => SelectOption[]
export type RemoteFunc = (value: string) => Promise<SelectOption[]>
export type RenderLabelFunc = (option: SelectOption) => VNode

export interface SelectProps {
    modelValue: string | number 
    options?: SelectOption[]
    placeholder?: string
    disabled?: boolean
    clearable?: boolean
    renderLabel?: RenderLabelFunc
    filterable?: boolean
    filterMethod?: FilterFunc
    remote?:boolean
    remoteFunc?:RemoteFunc
}

export interface SelectEmits {
    (e: 'change', value: string | number): void
    (e: 'update:modelValue', value: string | number): void
    (e: 'visible-change', visible: boolean): void
    (e: 'clear'): void
}

export interface selectStates {
    inputValue: string
    selectOption: SelectOption | null
    mouseFocus: boolean
    remoteLoading: boolean
}

