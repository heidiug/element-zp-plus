import type { Placement } from '@floating-ui/vue'
import type { Options } from '@popperjs/core'

export interface TooltipProps {
  content?: string
  trigger?: 'hover' | 'click'
  manual?: boolean
  placement?: Placement
  propperOptions?: Partial<Options>
}

export interface TooltipEmits {
  (e: 'visivle-change', visible: boolean): void
  (e: 'click-outside', value: boolean): void
}

export interface TooltipInstance {
  show: () => void
  hide: () => void
}