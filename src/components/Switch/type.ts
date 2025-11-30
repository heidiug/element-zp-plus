export type SwitchValue = boolean | string | number

export interface SwitchProps {
    modelValue: SwitchValue
    disabled?: boolean
    size?: 'small' | 'default' | 'large'
    activeValue?: SwitchValue
    inactiveValue?: SwitchValue
    activeText?: string
    inactiveText?: string
    id?: string
    name?: string
}

export interface SwitchEmits {
    (e: 'update:modelValue', value: SwitchValue): void
    (e: 'change', value: SwitchValue): void
}

