import type { VNode } from "vue";
import type { TooltipProps } from '@/components/Tooltip/type';

export interface DropdownProps extends TooltipProps {
    maxHeight?: number
    divided?: boolean
    trigger?: 'hover' | 'click'
    hideAfterClick?: boolean
}

export interface ManualOption {
    lable: string | VNode
    key: string | number
    disabled?: boolean
    divided?: boolean
}

export interface DropdownEmits {
    (e: 'visivle-change', visible: boolean): void
    (e: 'command', key: string | number): void
}

export interface DropdownInstance {
    show: () => void
    hide: () => void
}

export interface DropdownItemProps {
    itemKey: string | number
    disabled?: boolean
    divided?: boolean
}

export interface DropdownItemEmits {
    (e: 'click', key: string | number): void
}

export interface DropdownItemInstance {
    show: () => void
    hide: () => void
}