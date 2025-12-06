import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { ref, provide } from 'vue'
import zpCollapseItem from './zpCollapseItem.vue'
import { collapseContextKey } from './type'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

// 注册图标库
library.add(fas)

// 创建模拟的 collapse context
const createMockContext = (activeNames: string[] = []) => {
  const activeNamesRef = ref<(string | number)[]>([])
  const handleItemClick = vi.fn((name: string | number) => {
    if (activeNamesRef.value.includes(name)) {
      activeNamesRef.value = activeNamesRef.value.filter((item) => item !== name)
    } else {
      activeNamesRef.value.push(name)
    }
  })

  return {
    activeNames: activeNamesRef,
    handleItemClick
  }
}

describe('zpCollapseItem 组件', () => {
  it('应该正确接收和处理 Props', () => {
    const context = createMockContext(['1'])
    const wrapper = mount(zpCollapseItem, {
      props: {
        name: '1',
        title: '标题1',
        disabled: false
      },
      global: {
        provide: {
          [collapseContextKey]: context
        }
      }
    })

    // 断言：组件存在
    expect(wrapper.exists()).toBe(true)

    // 断言：组件名称
    expect(wrapper.vm.$options.name).toBe('zpCollapseItem')

    // 断言：标题渲染
    expect(wrapper.text()).toContain('标题1')

    // 断言：应该包含 active class（因为在 activeNames 中）
    expect(wrapper.classes()).toContain('is-active')
  })

  it('应该正确渲染 title prop', () => {
    const context = createMockContext()
    const wrapper = mount(zpCollapseItem, {
      props: {
        name: '1',
        title: 'Test Title',
        disabled: false
      },
      global: {
        provide: {
          [collapseContextKey]: context
        }
      }
    })

    expect(wrapper.text()).toContain('Test Title')
  })

  it('应该正确渲染 title 插槽', () => {
    const context = createMockContext()
    const wrapper = mount(zpCollapseItem, {
      props: {
        name: '1',
        disabled: false
      },
      global: {
        provide: {
          [collapseContextKey]: context
        }
      },
      slots: {
        title: '<h3>Custom Title</h3>'
      }
    })

    expect(wrapper.html()).toContain('Custom Title')
  })

  it('应该正确渲染 content 插槽', () => {
    const context = createMockContext(['1'])
    const wrapper = mount(zpCollapseItem, {
      props: {
        name: '1',
        disabled: false
      },
      global: {
        provide: {
          [collapseContextKey]: context
        }
      },
      slots: {
        content: '<p>Content text</p>'
      }
    })

    expect(wrapper.text()).toContain('Content text')
  })

  it('应该正确处理 disabled 状态', () => {
    const context = createMockContext()
    const wrapper = mount(zpCollapseItem, {
      props: {
        name: '1',
        title: 'Disabled Item',
        disabled: true
      },
      global: {
        provide: {
          [collapseContextKey]: context
        }
      }
    })

    // 断言：应该包含 disabled class
    expect(wrapper.classes()).toContain('is-disabled')

    // 断言：点击时不应该触发 handleItemClick
    const header = wrapper.find('.zp-collapse-item__header')
    header.trigger('click')

    // 由于 disabled，handleItemClick 不应该被调用
    expect(context.handleItemClick).not.toHaveBeenCalled()
  })

  it('应该在点击时正确触发 handleItemClick', async () => {
    const context = createMockContext()
    const wrapper = mount(zpCollapseItem, {
      props: {
        name: '1',
        title: 'Clickable Item',
        disabled: false
      },
      global: {
        provide: {
          [collapseContextKey]: context
        }
      }
    })

    const header = wrapper.find('.zp-collapse-item__header')
    await header.trigger('click')

    // 断言：handleItemClick 应该被调用
    expect(context.handleItemClick).toHaveBeenCalledWith('1')
  })

  it('应该根据 activeNames 正确显示和隐藏内容', () => {
    const contextActive = createMockContext(['1'])
    const wrapperActive = mount(zpCollapseItem, {
      props: {
        name: '1',
        disabled: false
      },
      global: {
        provide: {
          [collapseContextKey]: contextActive
        }
      },
      slots: {
        content: 'Active content'
      }
    })

    expect(wrapperActive.classes()).toContain('is-active')
    expect(wrapperActive.find('.content-wrapper').isVisible()).toBe(true)

    const contextInactive = createMockContext([])
    const wrapperInactive = mount(zpCollapseItem, {
      props: {
        name: '1',
        disabled: false
      },
      global: {
        provide: {
          [collapseContextKey]: contextInactive
        }
      }
    })

    expect(wrapperInactive.classes()).not.toContain('is-active')
  })

  it('应该正确渲染箭头图标', () => {
    const context = createMockContext()
    const wrapper = mount(zpCollapseItem, {
      props: {
        name: '1',
        disabled: false
      },
      global: {
        provide: {
          [collapseContextKey]: context
        }
      }
    })

    const icon = wrapper.find('.header-angle')
    expect(icon.exists()).toBe(true)

    const iconComponent = wrapper.findComponent({ name: 'zpIcon' })
    expect(iconComponent.exists()).toBe(true)
    expect(iconComponent.props('icon')).toBe('angle-right')
  })

  it('应该在 active 状态下旋转箭头图标', () => {
    const context = createMockContext(['1'])
    const wrapper = mount(zpCollapseItem, {
      props: {
        name: '1',
        disabled: false
      },
      global: {
        provide: {
          [collapseContextKey]: context
        }
      }
    })

    expect(wrapper.classes()).toContain('is-active')
    // 箭头应该旋转（通过 CSS 实现，这里验证类名）
    expect(wrapper.find('.header-angle').exists()).toBe(true)
  })

  it('应该正确生成唯一的 ID', () => {
    const context = createMockContext()
    const wrapper = mount(zpCollapseItem, {
      props: {
        name: 'test-item',
        disabled: false
      },
      global: {
        provide: {
          [collapseContextKey]: context
        }
      }
    })

    const header = wrapper.find('.zp-collapse-item__header')
    expect(header.attributes('id')).toBe('zp-collapse-test-item')
  })
})
