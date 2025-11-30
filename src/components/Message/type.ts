import type { ComponentInternalInstance, VNode } from 'vue'
import { omit } from 'lodash-es'

export interface MessageProps {
  message?: string | VNode
  type?: 'success' | 'warning' | 'info' | 'error'
  plain?: boolean
  duration?: number
  showClose?: boolean
  offset?:number
  id:string
  zIndex: number
  onDestroy: () => void
  onClose?: () => void  // 通过 props 传递 destroy 方法
}

export interface createMessageProps extends Omit<MessageProps, 'onDestroy' | 'id' | 'zIndex'> {}

export interface MessageContext {
    id:string
    vnode:VNode
    props:createMessageProps
    vm: ComponentInternalInstance
    destroy: () => void
}