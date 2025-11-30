import type { Ref } from "vue"

export interface InputProps {
    type?:string
    modelValue:string
    size?:'large' | 'default' | 'small'
    disabled?:boolean
    clearable?:boolean
    showPassword?:boolean
    placeholder?:string
    readonly?:boolean
    autocomplete?:string
    autofocus?:boolean
    form?:string
}

export interface InputEmits {
    (e:'change',value:string):void
    (e:'input',value:string):void
    (e:'update:modelValue',value:string):void
    (e:'focus'):void
    (e:'blur'):void
    (e:'clear'):void
}

export interface InputInstance {
    inputRef: Ref<HTMLInputElement | HTMLTextAreaElement | null>
    blur: () => void
    focus: () => void
}