/**
 * 保证新的弹窗永远在旧的弹窗上面
 * 需要动态增加 z-index 的值
 * @returns {Object} 包含当前z-index值和下一个z-index值的函数
 */
import { ref, computed } from 'vue'

const zIndex = ref(0)
const initialValue = 2000
const useZindex = () => {
    const inirialIndex = ref(initialValue)
    const currentZIndex = computed(() => zIndex.value + inirialIndex.value)

    const nextZIndex = () => {
        zIndex.value++
        return currentZIndex.value
    }
    return {
        currentZIndex,
        nextZIndex,
        inirialIndex
    }
}

export default useZindex