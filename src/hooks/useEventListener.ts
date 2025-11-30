/**
 * 监听事件
 * @param target 目标元素
 * @param event 事件
 * @param handler 处理函数
 * 支持响应式引用和普通元素
 */
import { onMounted, onUnmounted, isRef, unref, watch } from 'vue'
import type { Ref } from 'vue'

export default function useEventListener(
    target:Ref<EventTarget | null> | EventTarget,
    event:string,
    handler:(e:Event) => any,
) {
    if (isRef(target)) {
        watch(target, (value, oldValue) => {
            oldValue?.removeEventListener(event, handler)
            value?.addEventListener(event, handler)
        })
    } else {
        onMounted(() => {
            target.addEventListener(event, handler)
        })
    }
    onUnmounted(() => {
        unref(target)?.removeEventListener(event, handler)
    })
}