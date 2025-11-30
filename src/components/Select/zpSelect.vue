<script setup lang="ts">
import type { SelectProps, SelectEmits, SelectOption, selectStates } from './type'
import { ref, type Ref, reactive, nextTick, computed, watch, Transition } from 'vue'
import zpTooltip from '../Tooltip/zpTooltip.vue'
import zpInput from '../Input/zpInput.vue'
import zpIcon from '../Icon/zpIcon.vue'
import type { TooltipInstance } from '../Tooltip/type'
import type { InputInstance } from '../Input/type'
import RenderVnode from '../Common/RenderVnode.ts'
import './style.css'
import isFunction from 'lodash-es/isFunction'
import debounce from 'lodash-es/debounce'
import { createMessage } from '../Message/method'

defineOptions({
    name: 'zpSelect'
})
const timeout = computed(() => {
    return props.filterable ? 300 : 0
})
const props = withDefaults(defineProps<SelectProps>(), {
    modelValue: '',
    options: () => [] as SelectOption[],
    placeholder: '请选择',
    disabled: false
})
const emits = defineEmits<SelectEmits>()

const popperOptions: any = {
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [0, 9]
            }
        },
        {
            name: "sameWidth",
             enabled: true,
            phase: "beforeWrite",
            requires: ["computeStyles"],
            fn: ({ state }: { state: any }) => {
                state.styles.popper.width = `${state.rects.reference.width}px`;
            },
            effect: ({ state }: { state: any }) => {
                state.elements.popper.style.width = `${
                state.elements.reference.offsetWidth
                }px`;
  }
        }
    ]
}

// 创建为响应式对象这样在value变化时下拉框里面的options会自动更新
const filteredOptions = ref<SelectOption[]>(props.options)
watch(() => props.options, (newOptions) => {
    filteredOptions.value = newOptions
})
const generateFilteredOptions = async (value: string): Promise<SelectOption[]> => {
    // 如果输入为空，显示所有选项
    if (!value || value.trim() === '') {
        filteredOptions.value = props.options
        return filteredOptions.value
    }
    
    if (props.filterMethod && isFunction(props.filterMethod)) {
        filteredOptions.value = props.filterMethod(value)
    } 
    else if (props.remote && props.remoteFunc && isFunction(props.remoteFunc)) {
        states.remoteLoading = true
        try {
            filteredOptions.value = await props.remoteFunc(value)
        }
        catch (error) {
            filteredOptions.value = []
        }
        finally {
            states.remoteLoading = false
        }
    }
    else {
        filteredOptions.value = props.options.filter(option => 
            option.label.toLowerCase().includes(value.toLowerCase())
        )
    }
    return filteredOptions.value
}

const findOption = (value: string | number) => {
    const option = props.options.find(option => option.value === value)
    return option ? option : null
}
const tooltipRef = ref() as Ref<TooltipInstance>
const inputRef = ref<InputInstance>()
const initailOption = findOption(props.modelValue)


// 根据这个states可以知道当前选中的选项
const states = reactive<selectStates>({
    inputValue: initailOption ? initailOption.label : '',
    selectOption: initailOption,
    mouseFocus: false,
    remoteLoading: false
})

const isDropdown = ref(false)
const showClear = computed(() => 
    states.mouseFocus && 
    props.clearable && 
    states.inputValue!=='' && 
    states.selectOption!==null
)
const controlDropdown = (visible: boolean) => {
    if (visible) {
        if (props.filterable && states.selectOption) {
            states.inputValue = ''
        }
        tooltipRef.value?.show()
        // 打开下拉菜单时，如果是 filterable 模式，重置过滤结果
        if (props.filterable) {
            // 如果 inputValue 为空，显示所有选项；否则根据当前值过滤
            generateFilteredOptions(states.inputValue)
        } else {
            // 非 filterable 模式，显示所有选项
            filteredOptions.value = props.options
        }
    } else {
        if (!props.filterable && !states.selectOption) {
            // states.inputValue = ''
        } else {
            states.inputValue = states.selectOption ? states.selectOption.label : ''
        }
        tooltipRef.value?.hide()
    }
    isDropdown.value = visible
    emits('visible-change', visible)
}

const toggleDropdown = () => {
    if (props.disabled) return
    if (isDropdown.value) {
        controlDropdown(false)
    } else {
        controlDropdown(true)
    }
}
const itemClick = async (item: SelectOption) => {
    if (item.disabled) return
    states.inputValue = item.label
    states.selectOption = item
    emits('change', item.value)
    emits('update:modelValue', item.value)
    controlDropdown(false)
    // 选择选项后，重置过滤结果（显示所有选项）
    if (props.filterable) {
        filteredOptions.value = props.options
    }
    // 点击选项后，让输入框持续获得焦点
    await nextTick()
    inputRef.value?.focus()
}

const handleClear = () => {
    states.inputValue = ''
    states.selectOption = null
    emits('change', '')
    emits('update:modelValue', '')
}

const onFilter = debounce(() => {
    // 只有在 filterable 模式下才进行过滤
    if (props.filterable) {
        generateFilteredOptions(states.inputValue)
    }
}, timeout.value)

const filteredPplaceHolder = computed(() => {
    return (props.filterable && states.selectOption && isDropdown.value) ? 
    states.selectOption.label : props.placeholder
})

const handleKeydown = (event: KeyboardEvent) => {
    switch (event.key) {
        case 'Enter':
            event.preventDefault()
            if (isDropdown.value && states.selectOption) {
                // 如果下拉菜单打开且有选中项，确认选择
                itemClick(states.selectOption)
            } else {
                toggleDropdown()
            }
            break
        case 'ArrowUp':
            event.preventDefault()
            if (isDropdown.value && filteredOptions.value.length > 0) {
                const currentIndex = states.selectOption 
                    ? filteredOptions.value.findIndex(item => item.value === states.selectOption?.value)
                    : -1
                
                if (currentIndex > 0) {
                    // 有选中项且不是第一个，选择上一个
                    const prevOption = filteredOptions.value[currentIndex - 1]
                    if (prevOption) {
                        states.selectOption = prevOption
                        states.inputValue = prevOption.label
                    }
                } else if (currentIndex === -1 || currentIndex === 0) {
                    // 没有选中项或已经是第一个，选择最后一个
                    const lastOption = filteredOptions.value[filteredOptions.value.length - 1]
                    if (lastOption) {
                        states.selectOption = lastOption
                        states.inputValue = lastOption.label
                    }
                }
            }
            break
        case 'ArrowDown':
            event.preventDefault()
            if (isDropdown.value && filteredOptions.value.length > 0) {
                const currentIndex = states.selectOption 
                    ? filteredOptions.value.findIndex(item => item.value === states.selectOption?.value)
                    : -1
                
                if (currentIndex >= 0 && currentIndex < filteredOptions.value.length - 1) {
                    // 有选中项且不是最后一个，选择下一个
                    const nextOption = filteredOptions.value[currentIndex + 1]
                    if (nextOption) {
                        states.selectOption = nextOption
                        states.inputValue = nextOption.label
                    }
                } else {
                    // 没有选中项或已经是最后一个，选择第一个
                    const firstOption = filteredOptions.value[0]
                    if (firstOption) {
                        states.selectOption = firstOption
                        states.inputValue = firstOption.label
                    }
                }
            }
            break
        case 'Escape':
            event.preventDefault()
            if (isDropdown.value) {
                controlDropdown(false)
            }
            break
        case 'Backspace':
        case 'Delete':
            // 只有在非 filterable 模式下，有选中项且 clearable 时才清除
            // 在 filterable 模式下，Backspace/Delete 用于删除输入字符
            if (!props.filterable && props.clearable && states.selectOption) {
                event.preventDefault()
                handleClear()
            }
            break
        default:
            break
    }
}
</script>

<template>
    <div 
    class="zp-select"
    :class="{
        'is-disabled': disabled
    }"
    @click="toggleDropdown"
    >
    <zp-tooltip
    ref="tooltipRef"
    placement="bottom-start"
    manual
    class="zp-select-tooltip"
    :propper-options="popperOptions"
    @click-outside="controlDropdown(false)"
    >
        <zp-input
        ref="inputRef"
        v-model="states.inputValue"
        :placeholder="filteredPplaceHolder"
        :disabled="disabled"
        :readonly="!filterable"
        :class="{ 'is-not-filterable': !filterable || !isDropdown }"
        @focus="states.mouseFocus = true"
        @blur="states.mouseFocus = false"
        @input="onFilter"
        @keydown="handleKeydown"
        >
          <template #suffix>
            <zp-icon 
              icon="circle-xmark" 
              v-if="showClear"
              @click.stop="handleClear"
              @mousedown.prevent
              style="
                cursor: pointer;
                color: var(--zp-text-color-placeholder);
                pointer-events: auto;
                z-index: 10;
              "
            />
            <zp-icon 
              v-else
              icon="chevron-down" 
              class="zp-select__arrow"
              :class="{ 'is-rotated': isDropdown }"
            />
          </template>
        </zp-input>
        <template #content>
            <Transition name="zp-zoom-in-top">
                <ul 
                    v-show="isDropdown"
                    class="zp-select__menu"
                >
                    <div class="zp-select__loading" v-if="states.remoteLoading">
                        <zp-icon icon="spinner" />
                    </div>
                    <div class="zp-select__nodata" v-else-if="filterable && filteredOptions.length === 0">no matching data</div>
                    <template v-for="(item, index) in filteredOptions" :key="index">
                    
                        <li
                        class="zp-select__menu-item"
                        :class="{ 
                            'is-disabled': item.disabled,
                            'is-selected': states.selectOption?.value === item.value
                        }"
                        :id="`zp-select-item-${index}`"
                        @click.stop="itemClick(item)"
                        >
                        <render-vnode 
                        :v-node="renderLabel ? renderLabel(item) : item.label" />
                        </li>
                    </template>
                </ul>
            </Transition>
        </template>
    </zp-tooltip>
    </div>
</template>

<style scoped>
/* Select 组件容器 - 使用 inline-block 让宽度自适应内容 */
.zp-select {
  display: inline-block;
  min-width: 120px; /* 设置最小宽度 */
}

.zp-select :deep(.zp-input) {
  width: auto; /* 让 Input 组件宽度自适应 */
  min-width: 120px; /* 设置最小宽度 */
}

.zp-select :deep(.zp-input__wrapper) {
  width: fit-content; /* 让 wrapper 宽度根据内容自适应 */
  min-width: 120px; /* 设置最小宽度 */
  display: inline-flex; /* 使用 inline-flex 让宽度根据内容自适应 */
  transition: border-color 0.2s ease-in-out;
}

.zp-select :deep(.zp-input__inner) {
  color: #535353 !important;
  cursor: pointer !important;
  width: auto !important; /* 让 input 内部宽度自适应 */
  min-width: 0 !important; /* 允许收缩到内容宽度 */
  flex: 0 1 auto !important; /* 允许 flex 收缩到内容宽度，覆盖 Input 组件的 flex: 1 */
  /* 使用 size 属性让 input 根据内容自动调整宽度 */
  /* 注意：size 属性需要根据文字长度动态设置，这里先使用固定值作为最小宽度 */
}

/* hover 状态 - 灰色边框（只在非 focus 时生效） */
.zp-select:hover :deep(.zp-input:not(.is-focused) .zp-input__wrapper) {
  border-color: #8f8f8f !important;
}

/* focus 状态 - 蓝色边框，优先级高于 hover */
.zp-select :deep(.zp-input.is-focused .zp-input__wrapper),
.zp-select:hover :deep(.zp-input.is-focused .zp-input__wrapper) {
  border-color: var(--zp-color-primary, #409eff) !important;
}

/* 箭头图标样式 - 参考 Collapse 的实现 */
.zp-select :deep(.zp-select__arrow) {
  color: var(--zp-text-color-secondary, #909399);
  font-size: 12px;
  transition: transform 0.3s ease;
  pointer-events: none;
  display: inline-block;
}

/* 下拉菜单打开时，箭头旋转180度 */
.zp-select :deep(.zp-select__arrow.is-rotated) {
  transform: rotate(180deg);
}

/*focus状态下input的文字颜色*/
.zp-select :deep(.zp-input.is-focused .zp-input__wrapper) :deep(.zp-input__inner) {
  color: #858585 !important;
}

/*自定义渲染label的样式*/
.zp-select :deep(.custom-render-label) {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

/* disabled 状态下，自定义渲染的内容也要应用 disabled 样式（覆盖内联样式） */
.zp-select :deep(.zp-select__menu-item.is-disabled *),
.zp-select :deep(.zp-select__menu-item.is-disabled div),
.zp-select :deep(.zp-select__menu-item.is-disabled span),
.zp-select :deep(.zp-select__menu-item.is-disabled b),
.zp-select :deep(.zp-select__menu-item.is-disabled .custom-render-label),
.zp-select :deep(.zp-select__menu-item.is-disabled .custom-render-label *) {
  color: #a8abb2 !important;
}

/* 非 filterable 模式下，禁止选择和隐藏光标 */
.zp-select :deep(.is-not-filterable .zp-input__inner),
.zp-select :deep(.is-not-filterable .zp-input__wrapper .zp-input__inner) {
  user-select: none !important; 
  caret-color: transparent !important;
}

.zp-select__nodata,
.zp-select__loading {
    padding:10px 0;
    margin:6px 0;
    text-align: center;
    color: var(--zp-text-color-secondary, #909399);
    font-size: var(--zp-font-size, 14px);
}
</style>