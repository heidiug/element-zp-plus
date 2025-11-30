import zpMessage from './zpMessage.vue'
import type { createMessageProps, MessageContext } from './type'
import { render, h, shallowReactive } from 'vue'
import type{ ComponentInternalInstance } from 'vue'
import useZindex from '@/hooks/useZindex'

let seed = 0
// 将messageInstances定义为响应式对象，这样当messageInstances发生变化时，所以的依赖才会重新计算
// shallowReactive 是浅响应式，只会响应对象的顶层属性，不会响应对象的嵌套属性
//这样可以减少资源的消耗
// 导出 messageInstances，让组件可以直接访问，确保 Vue 能够追踪到依赖
export const messageInstances: MessageContext[] = shallowReactive([])
export const createMessage = (props: createMessageProps) => {
    const id = `zp-message-${seed++}`
    const container = document.createElement('div')
    const { nextZIndex } = useZindex()
    // 手动调整组件中visible的值
    const manualDestroy = () => {
        const instance = messageInstances.find(instance => instance.id === id)
        if (instance) {
            instance.vm.exposed!.visible.value = false
        }
    }
    const newProps = {
        id,
        ...props,
        onClose: manualDestroy,  // 将 destroy 方法通过 props 传递给组件
        zIndex: nextZIndex(),
        onDestroy: () => {
            render(null, container)
            // 从 DOM 中移除 container
            if (container.parentNode) {
                container.parentNode.removeChild(container)
            }
            // 使用 splice 删除元素，而不是重新赋值整个数组
            // 这样可以保持响应式连接，让 Vue 能够追踪到数组的变化
            // messageInstances = messageInstances.filter(...)，这会破坏响应式连接。
            const idx = messageInstances.findIndex(instance => instance.id === id)
            if (idx > -1) {
                messageInstances.splice(idx, 1)
            }
        },
    }
    // h 函数可以创造一个虚拟节点
    // 虚拟节点是一个对象，包含了节点的类型、属性、子节点等信息
    // 虚拟节点可以被渲染为真实的 DOM 元素
    const vnode = h(zpMessage, newProps)
    // vue 的 render 函数会将vnode渲染为真实的 DOM 元素
    render(vnode, container)
    // 将 container 添加到 body 中，这样组件才能显示在页面上
    document.body.appendChild(container)
    // 在 render 之后获取组件实例，确保组件已经被创建
    const vm: ComponentInternalInstance = vnode.component!
    const instance: MessageContext = {
        id,
        vnode,
        vm,
        props: newProps,
        destroy: manualDestroy
    }
    messageInstances.push(instance)
    
    return instance
}

export const getLastMessageInstance = () => {
    return messageInstances[messageInstances.length - 1]
}

export const getLastBottomOffset = (id: string) => {
    const idx = messageInstances.findIndex(instance => instance.id === id)
    if (idx < 0 || idx === 0) {
        // idx < 0: 实例还未添加到数组，返回 0
        // idx === 0: 第一个消息，返回 0
        return 0
    }
    const lastInstance = messageInstances[idx - 1]
    return lastInstance!.vm.exposed!.bottomOffset.value
}